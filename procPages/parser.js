/**
 * procPages DSL Parser - v0.1
 *   Designed for procstack.github.io by Kevin Edzenga; 2026
 * 
 * This parser provides the foundation for the ProcPages DSL.
 * It's built to be used in both pre-compilation Scripts (SEO)
 * and Runtime (Fast Dev).
 */

export class ProcPagesDSL {
    constructor() {
        this.pages = {};
        this.blogEntries = [];
        this.pxlNavIntegration = null;
    }

    /**
     * Define a new page using the DSL
     * @param {string} id - The Unique Identifier for the page
     * @param {Object} config - Page configuration object
     */
    page(id, config = {}) {
        const pageData = {
            id: id,
            page: config.page || id,
            title: config.title || id,
            description: config.description || "",
            keywords: config.keywords || [],
            theme: config.theme || "#000000",
            layout: config.layout || "triple",
            sections: [],
            pxlNav: config.pxlNav || null,
            blog: config.blog || null,
            metaData: {
                title: config.title || id,
                description: config.description || "",
                keywords: config.keywords || [],
                image: config.image || ""
            }
        };

        if (config.sections && Array.isArray(config.sections)) {
            config.sections.forEach(s => {
                pageData.sections.push(this.section(s.name, s));
            });
        }

        this.pages[id] = pageData;
        return pageData;
    }

    /**
     * Define a section within a page
     * @param {string} name - Section title
     * @param {Object} config - Section content and media
     */
    section(name, config = {}) {
        return {
            name: name,
            content: config.content || "",
            media: config.media || [],
            navGroup: config.navGroup || "Default",
            type: config.type || "section",
            style: config.style || []
        };
    }

    /**
     * Define a media item (image, video, etc)
     */
    media(type, src, options = {}) {
        return {
            type: type,
            src: src,
            caption: options.caption || [],
            alt: options.alt || "",
            style: options.style || ""
        };
    }

    /**
     * Process a blog entry for the DSL
     * @param {Object} entryData - Data from a blog entry file
     */
    blogEntry(entryData) {
        const entry = {
            eid: entryData.eid || "",
            title: entryData.title || "Untitled",
            date: entryData.date || "",
            tags: entryData.tags || [],
            body: entryData.body || "",
            marked: entryData.marked || 0
        };
        this.blogEntries.push(entry);
        return entry;
    }

    /**
     * Compile the DSL state into a format readable by ProcPage.js
     * @returns {Object} - Compiled ProcPage objects
     */
    compile() {
        const result = {};
        for (const [id, data] of Object.entries(this.pages)) {
            // Transform internal DSL format to ProcPage compatible object
            result[id] = {
                page: data.id,
                header: data.title,
                theme: data.theme,
                layout: data.layout,
                sections: data.sections,
                metaData: data.metaData
                // pxlNav config can be extra data for the manager
            };

            if (data.pxlNav) {
                result[id].pxlNav = data.pxlNav;
            }
        }
        return result;
    }

    /**
     * Security check for content
     * TODO: Implement proper sanitization
     */
    sanitize(content) {
        // Placeholder for future security logic
        return content;
    }
}
