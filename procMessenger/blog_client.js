/**
 * procMessenger Blog Client — staging script
 *
 * Destination folder (after staging):
 *   procstack.github.io/procMessenger/blog_client.js
 *
 * Run from:  procstack.github.io/procMessenger/
 *
 * This script connects to a running procMessenger WebSocket server as a
 * named client ("blog-client") and listens for blog_entry messages sent
 * from the mobile app.
 *
 * On receiving a message it can:
 *   action: "save"   — create or overwrite the blog entry .js file and
 *                      update researchPosts/index.js to register the entry.
 *   action: "verify" — check that the entry file already exists and the
 *                      JS module exports the expected symbols without
 *                      executing arbitrary code.
 *
 * The entry ID (e.g. "A", "B", ...) is derived automatically from the date
 * and the entries already present in the researchPosts folder.
 *
 * Dependencies:
 *   npm install ws uuid
 * 
 * Defaults:
 *  procMessenger's default websocket port is 9734
 *  Connects to ws://127.0.0.1:9734
 *
 * Usage:
 *   node procMessenger/blog_client.js [--server ws://IP:PORT]
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const os   = require("os");
const { v4: uuidv4 } = require("uuid");
const WebSocket = require("ws");

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const ARGS = process.argv.slice(2);
const SERVER_ARG = (() => {
    const idx = ARGS.indexOf("--server");
    return idx !== -1 ? ARGS[idx + 1] : null;
})();

// The procMessenger server address. Override with --server ws://IP:PORT
const SERVER_URI = SERVER_ARG || "ws://127.0.0.1:9734";

// Name this client registers with on the server.
// The mobile app sends blog_entry messages to this exact name.
const CLIENT_NAME = "blog-client";
const CLIENT_TYPE = "nodejs";

// Paths relative to THIS file's location (procstack.github.io/procMessenger/)
const SCRIPT_DIR       = __dirname;
const RESEARCH_POSTS   = path.resolve(SCRIPT_DIR, "../docs/pages/aiDev/researchPosts");
const RESEARCH_INDEX   = path.resolve(RESEARCH_POSTS, "index.js");
const BLOG_ENTRY_BASE  = "../../../js/blog/blogEntryBase.js";

// Keepalive
const PING_INTERVAL = 30_000;
const RECONNECT_DELAY = 5_000;

// ---------------------------------------------------------------------------
// WebSocket helpers
// ---------------------------------------------------------------------------

function buildMessage(type, source, target, payload) {
    return JSON.stringify({
        id:        uuidv4(),
        type,
        source,
        target,
        timestamp: new Date().toISOString(),
        flags:     {},
        payload:   payload || {},
    });
}

function sendTo(ws, type, target, payload) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(buildMessage(type, CLIENT_NAME, target, payload));
    }
}

// ---------------------------------------------------------------------------
// Blog-entry ID helpers
// ---------------------------------------------------------------------------

/**
 * Derive the per-day alphabetic entry ID for a given date.
 * Scans existing files in RESEARCH_POSTS with the form YYYY-MM-DD_X.js
 * and returns the next letter ("A", "B", ...).
 * If a file with the same date+ID already exists (edit scenario), reuses it.
 */
function resolveEntryId(date, requestedId) {
    if (requestedId) return requestedId;

    const existing = fs.existsSync(RESEARCH_POSTS)
        ? fs.readdirSync(RESEARCH_POSTS)
              .filter(f => f.startsWith(date + "_") && f.endsWith(".js") && f !== "index.js")
              .map(f => f.slice(date.length + 1, -3).toUpperCase())
              .filter(id => /^[A-Z]$/.test(id))
        : [];

    if (existing.length === 0) return "A";
    const last = existing.sort().pop();
    const next = String.fromCharCode(last.charCodeAt(0) + 1);
    return next;
}

// ---------------------------------------------------------------------------
// Blog-entry file builder
// ---------------------------------------------------------------------------

/**
 * Build the JS module source for a blog entry.
 * Mirrors the structure of YYYY-MM-DD_PerDayAlphaID_emptyEntry.js exactly.
 *
 * @param {object} entry  { name, tags, date, eid, body }
 * @returns {string}
 */
function buildEntryModule(entry) {
    const { name, tags, date, eid, body } = entry;

    // Safely serialize the tags array
    const tagsStr = JSON.stringify(tags || []);

    // Escape backtick / ${} inside the body so it is safe in a template literal.
    // We replace ` with \` and ${ with \${ only when they would break the literal.
    const safeBody = (body || "")
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "\\${");

    return [
        `import { baseEntryStruct, blogEntry } from '${BLOG_ENTRY_BASE}';`,
        ``,
        `const entryData = baseEntryStruct();`,
        `entryData.title = ${JSON.stringify(name)};`,
        `entryData.date = ${JSON.stringify(date)};`,
        `entryData.eid = ${JSON.stringify(eid)};`,
        `entryData.tags = ${tagsStr};`,
        `entryData.body = \``,
        safeBody,
        `\`;`,
        ``,
        `const blogEntryObj = new blogEntry(null, entryData);`,
        ``,
        `export { blogEntryObj };`,
        ``,
    ].join("\n");
}

// ---------------------------------------------------------------------------
// index.js updater
// ---------------------------------------------------------------------------

/**
 * Read the current researchPosts/index.js and inject an import + export entry
 * for the new blog entry.  Does nothing if the entry is already registered.
 *
 * Convention used by the existing index.js:
 *   import  alias: blogEntry_YYYYMMDD_X   (e.g. blogEntry_20260504_A)
 *   export array entry: blogEntry_20260504_A
 *
 * @param {string} date   "YYYY-MM-DD"
 * @param {string} eid    "A" | "B" | ...
 * @returns {{ updated: boolean, error?: string }}
 */
function updateIndexFile(date, eid) {
    if (!fs.existsSync(RESEARCH_INDEX)) {
        return { updated: false, error: `index.js not found at ${RESEARCH_INDEX}` };
    }

    const dateCompact = date.replace(/-/g, "");       // 20260504
    const alias       = `blogEntry_${dateCompact}_${eid}`;
    const importPath  = `./${date}_${eid}.js`;

    let src = fs.readFileSync(RESEARCH_INDEX, "utf8");

    // Already registered?
    if (src.includes(alias)) {
        return { updated: false, alreadyPresent: true };
    }

    // --- Inject import ---
    // Find the last import statement line and insert after it.
    const importLines = src.split("\n");
    let lastImportIdx = -1;
    for (let i = 0; i < importLines.length; i++) {
        if (/^import\s+/.test(importLines[i])) lastImportIdx = i;
    }
    if (lastImportIdx === -1) {
        return { updated: false, error: "Could not locate import block in index.js" };
    }
    const newImport = `import { blogEntryObj as ${alias} } from '${importPath}';`;
    importLines.splice(lastImportIdx + 1, 0, newImport);
    src = importLines.join("\n");

    // --- Inject export array entry ---
    // Find the last entry before the closing ]; of the blogEntries array.
    // We look for the closing `];` that terminates the array.
    const closeArrayMatch = src.match(/^(\s*)\];\s*$/m);
    if (!closeArrayMatch) {
        return { updated: false, error: "Could not locate closing ]; of blogEntries array in index.js" };
    }
    const insertPos = src.lastIndexOf(closeArrayMatch[0]);

    // Build a new entry line with a trailing comma on the preceding entry if needed.
    // Find the last non-blank, non-comment line before `];`
    const beforeClose = src.slice(0, insertPos).trimEnd();
    const lastChar    = beforeClose.slice(-1);
    const needsComma  = lastChar !== "," && lastChar !== "[";

    const exportEntry = (needsComma ? "," : "") + `\n  ${alias}\n`;
    src = src.slice(0, insertPos).trimEnd() + exportEntry + src.slice(insertPos);

    fs.writeFileSync(RESEARCH_INDEX, src, "utf8");
    return { updated: true };
}

// ---------------------------------------------------------------------------
// Action handlers
// ---------------------------------------------------------------------------

/**
 * Save a blog entry (create or overwrite).
 * Returns { status, filePath?, error? }
 */
function actionSave(payload) {
    const { name, tags, date, body, eid: requestedId } = payload;

    if (!name || !date) {
        return { status: "error", message: "name and date are required." };
    }

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return { status: "error", message: `Invalid date format: "${date}". Expected YYYY-MM-DD.` };
    }

    // Ensure destination folder exists
    if (!fs.existsSync(RESEARCH_POSTS)) {
        return {
            status: "error",
            message: `researchPosts directory not found at: ${RESEARCH_POSTS}`,
        };
    }

    const eid      = resolveEntryId(date, requestedId);
    const fileName = `${date}_${eid}.js`;
    const filePath = path.join(RESEARCH_POSTS, fileName);

    const isEdit = fs.existsSync(filePath);

    const moduleSource = buildEntryModule({ name, tags, date, eid, body });
    fs.writeFileSync(filePath, moduleSource, "utf8");
    console.log(`[BLOG] ${isEdit ? "Updated" : "Created"}: ${filePath}`);

    // Update index.js (no-op if already registered)
    const indexResult = updateIndexFile(date, eid);
    if (indexResult.error) {
        console.warn(`[BLOG] index.js update warning: ${indexResult.error}`);
    } else if (indexResult.updated) {
        console.log(`[BLOG] index.js updated — added ${`blogEntry_${date.replace(/-/g,"")}_${eid}`}`);
    }

    return {
        status: "saved",
        filePath: fileName,
        eid,
        isEdit,
        indexUpdated: !!indexResult.updated,
        indexWarning: indexResult.error || null,
    };
}

/**
 * Verify that a blog entry file exists and appears structurally valid.
 * Checks only the file text — does not execute any JS.
 * Returns { status, valid, filePath?, error? }
 */
function actionVerify(payload) {
    const { date, eid: requestedId } = payload;

    if (!date) {
        return { status: "verified", valid: false, error: "date is required for verification." };
    }

    const eid      = requestedId || "A";
    const fileName = `${date}_${eid}.js`;
    const filePath = path.join(RESEARCH_POSTS, fileName);

    if (!fs.existsSync(filePath)) {
        return {
            status: "verified",
            valid: false,
            filePath: fileName,
            error: `File not found: ${fileName}`,
        };
    }

    const src = fs.readFileSync(filePath, "utf8");

    // Structural checks — ensure required exports and assignments are present
    const checks = [
        { label: "import blogEntryBase",  pass: src.includes("blogEntryBase") },
        { label: "entryData.title",       pass: src.includes("entryData.title") },
        { label: "entryData.date",        pass: src.includes("entryData.date") },
        { label: "entryData.eid",         pass: src.includes("entryData.eid") },
        { label: "entryData.tags",        pass: src.includes("entryData.tags") },
        { label: "entryData.body",        pass: src.includes("entryData.body") },
        { label: "new blogEntry",         pass: src.includes("new blogEntry") },
        { label: "export { blogEntryObj }",pass: src.includes("export { blogEntryObj }") },
    ];

    const failed = checks.filter(c => !c.pass).map(c => c.label);

    // Check index.js registration
    let indexRegistered = false;
    if (fs.existsSync(RESEARCH_INDEX)) {
        const indexSrc = fs.readFileSync(RESEARCH_INDEX, "utf8");
        const alias = `blogEntry_${date.replace(/-/g, "")}_${eid}`;
        indexRegistered = indexSrc.includes(alias);
    }

    return {
        status: "verified",
        valid:  failed.length === 0,
        filePath: fileName,
        checks,
        failedChecks: failed,
        indexRegistered,
        error: failed.length > 0 ? `Missing: ${failed.join(", ")}` : null,
    };
}

// ---------------------------------------------------------------------------
// WebSocket client loop
// ---------------------------------------------------------------------------

let pingTimer = null;

function startClient() {
    console.log(`[BLOG-CLIENT] Connecting to ${SERVER_URI} as '${CLIENT_NAME}'...`);

    const ws = new WebSocket(SERVER_URI);

    ws.on("open", () => {
        console.log("[BLOG-CLIENT] Connected.");

        ws.send(buildMessage("register", CLIENT_NAME, "server", {
            clientType: CLIENT_TYPE,
            capabilities: ["blog_entry"],
            functions:  ["blog_entry"],
            hostname:   os.hostname(),
            nickname:   "Blog Client",
        }));

        // Keepalive pings
        if (pingTimer) clearInterval(pingTimer);
        pingTimer = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) ws.ping();
        }, PING_INTERVAL);
    });

    ws.on("message", (data) => {
        let msg;
        try {
            msg = JSON.parse(data.toString());
        } catch {
            console.warn("[BLOG-CLIENT] Invalid JSON received, ignoring.");
            return;
        }

        const { type, source, payload = {} } = msg;
        console.log(`[BLOG-CLIENT] Received: type=${type} from=${source}`);

        if (type === "client_list" || type === "register") return;

        if (type === "blog_entry") {
            const action = payload.action || "save";
            console.log(`[BLOG-CLIENT] Processing action=${action} name="${payload.name || ""}" date="${payload.date || ""}"`);

            let result;
            try {
                if (action === "save") {
                    result = actionSave(payload);
                } else if (action === "verify") {
                    result = actionVerify(payload);
                } else {
                    result = { status: "error", message: `Unknown action: ${action}` };
                }
            } catch (err) {
                console.error("[BLOG-CLIENT] Unhandled error:", err);
                result = { status: "error", message: err.message };
            }

            console.log(`[BLOG-CLIENT] Result:`, result);
            sendTo(ws, "blog_entry", source, result);
            return;
        }

        // Unexpected message — log and ignore
        console.log(`[BLOG-CLIENT] Unhandled message type: ${type}`);
    });

    ws.on("pong", () => {
        // Server is alive — nothing to do
    });

    ws.on("error", (err) => {
        console.error("[BLOG-CLIENT] WebSocket error:", err.message);
    });

    ws.on("close", (code, reason) => {
        if (pingTimer) { clearInterval(pingTimer); pingTimer = null; }
        console.warn(`[BLOG-CLIENT] Disconnected (code=${code}). Reconnecting in ${RECONNECT_DELAY / 1000}s...`);
        setTimeout(startClient, RECONNECT_DELAY);
    });
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

startClient();
