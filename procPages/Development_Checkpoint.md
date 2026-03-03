# procPages DSL Development Checkpoint

**Date:** March 2, 2026  
**Status:** Foundation (v0.1) Established  
**Focus:** Declarative Page Management & `pxlNav` Integration

---

## Current System Overview

The foundation for the `procPages` DSL is established in [procPages/](procPages/). It provides a bridge between 3D environments (`pxlNav`) and web content (`procPages`).

### Core Components
1.  **[parser.js](procPages/parser.js):** Translates DSL syntax into intermediate JSON-like structures. Handles `page()`, `section()`, and `blogEntry()` definitions.
2.  **[schema.js](procPages/schema.js):** Enforces data integrity. Ensures that `pxlNav` settings, `metaData`, and `media` objects match the expectations of the underlying framework.
3.  **[compiler.js](procPages/compiler.js):** The bridge to the existing system. It transforms DSL objects into finalized `ProcPage` configurations and can generate standard `.js` files for deployment.
4.  **[procPages-v0.1_DSL.md](procPages/procPages-v0.1_DSL.md):** The living specification of the syntax and intended pipeline.

---

## Immediate Next Steps

### 1. Integration with `renderPages`
- Update your `packing/renderStaticPages.mjs` to optionally consume DSL files.
- Automate the generation of `docs/pages/*.js` from `procPages/*.js` (DSL).

### 2. Blog Aggregator Logic
- Implement a script within `procPages/` to scan a folder (like `docs/pages/aiDev/researchPosts/`) and automatically generate the `blogListing` or `blogEntries.js` files by interpreting the DSL metadata.

### 3. `pxlNav` Interaction Layer
- Finalize the callback structure in `ProcPageManager.js` to actually execute the `pxlNav` settings and camera view changes defined in the DSL when a page or section is navigated to.

---

## Future Options & Roadmap

### Dynamic pxlNav Overrides
Allow the DSL to define "Interactive Hotspots" in the 3D room that link directly to specific `procPages` sections.
- *Current:* Page -> 3D View Change.
- *Future:* 3D Object Click -> Page Section Scroll/Focus.

### Markdown Support in DSL
Integrate a Markdown-to-HTML parser (like `marked`) into the `compiler.js` so that `section.content` can be written in pure Markdown instead of HTML strings.

### Real-time Preview Tooling
Develop a small Dev-Server utility that watches for changes in `procPages/` files and hot-reloads the `ProcPageManager` state in the browser without a full rebuild.

### DSL-Driven SEO Manifests
Automatically update `sitemap.xml` and `data-manifest.json` based on the pages and blog entries defined in the DSL, ensuring AI/LLM crawlers always have the latest structured data.

---

## Infrastructure Notes
- **Security:** Content sanitization is prioritized in the compiler to prevent script injection via DSL-defined HTML.
- **Performance:** Pre-compilation to valid ESM modules ensures zero parser overhead for the end-user.
- **Flexibility:** The system remains "pxlNav Optional"—it works perfectly for standard 2D web pages while offering deep hooks for 3D rooms if needed.
