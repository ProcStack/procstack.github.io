# procPages DSL v0.1 Specification

## Overview
`procPages` DSL is a declarative, JavaScript-based language for defining website pages, sections, and blog entries. It integrates seamlessly with `pxlNav` for 3D environment orchestration.

The DSL aims to:
- Reduce boilerplate in page definitions.
- Automate metadata and schema generation.
- Provide a structured way to include blog posts.
- Support pre-compilation for SEO and faster runtime performance.
- Easy integration of pxlNav game logic at a top level.
  - Accompanied by an interface to create + edit pxlNav rooms, to be released later 2026.

## DSL Syntax (Conceptual)

### Page Definition
```javascript
page("Projects") {
  title: "Projects & Links",
  description: "See a collection of projects and links by ProcStack",
  keywords: ["ProcStack", "Portfolio", "3D"],
  theme: "#184d76",
  layout: "triple",
  
  // Optional pxlNav Integration
  pxlNav: {
    room: "OutletEnvironment",
    settings: {
        gravity: 0.5,
        movement: { scalar: 1.1 }
    }
  },

  sections: [
    section("Featured") {
        content: "Check out my latest work...",
        media: [
            image("thumb.jpg", "A cool project")
        ]
    }
  ],

  blog: {
    source: "./researchPosts",
    tags: ["physics", "ai"]
  }
}
```

## DSL Components

### 1. Global Page Object
- `id`: Unique page identifier.
- `meta`: Metadata (title, desc, keywords).
- `style`: Theme colors and CSS overrides.
- `layout`: Single, Triple, or Vertical.

### 2. Sections
- `name`: Section title.
- `content`: HTML or Markdown (to be parsed).
- `media`: Array of media objects (image, video, youtube).

### 3. Blog Integration
- `blog`: Automatically aggregates files from a directory.
- `entry`: Individual blog posts with metadata (date, id, tags).

### 4. pxlNav Integration
- `pxlNav`: Triggers and callbacks for the 3D environment.
- `onEnter`: Callback when page/section is focused.
- `view`: Camera view settings for the 3D room.

## Pre-Compile Pipeline
1. **Source**: `.pp` (procPage) or `.js` (DSL variant) files.
2. **Parser**: Reads DSL and converts to standard `ProcPage` objects.
3. **Aggregator**: Collects blog entries and generates `blogEntries.js`.
4. **Static Renderer**: Produces static HTML for SEO (using `renderStaticPages.mjs`).

## Security Considerations
- **Sanitization**: All HTML content in `body` and `content` fields must be sanitized during compilation.
- **Path Validation**: Source paths for assets and blog posts must stay within workspace boundaries.
- **Script Injection**: Avoid `eval()` in the parser; use a proper AST traversal or a safe declarative parser.
