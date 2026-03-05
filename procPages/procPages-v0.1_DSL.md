# procPages DSL v0.1 Specification

## Overview
`procPages` DSL is a declarative, JavaScript-based language for defining website pages, sections, and logic. It uses a React-like functional syntax for better readability and a signal-based backend for real-time responsiveness to `pxlNav` events.

## DSL Syntax (Functional)

### Design Pattern
The DSL uses functional node definitions:
```javascript
const Page = defineNodeType("Page");
const Button = defineNodeType("Button");
```

### Authoring Example
```javascript
Header(
  Type( ProcPagesEnums.ISLAND_TYPE.MEDIA_PLAYER ),
  Signals({
    "playCount" : 0
  }),
  Funcs({
    playOnClick: () => {
      // Signals are exposed to the scope
      playCount.set( playCount.get() + 1 );
      console.log(`Play Press Count: ${playCount.get()}`);
    }
  }),
  Load(() => console.log("Video Player loaded")),
  Unload(() => console.log(`Played ${playCount.get()} times`))
)

Page(
  { id: "Home", layout: "vertical" },
  [
    Section({ name: "Intro", content: "Video Player --" }),
    Button({ text: "Play", onClick: playOnClick })
  ]
)
```

## DSL Components

### 1. Functional Nodes
- `Page`: Root container for a document.
- `Section`: A distinct area of content within a page.
- `Button`: Interactive element.
- `Header`: Metadata and global logic container.

### 2. Signals & Logic
- `Signals({})`: Defines state variables that notify listeners on change.
- `Funcs({})`: Defines local functions accessible within the component scope.
- `Signal(val, onSet)`: Creates a reactive variable.

### 3. Life-cycle Events
- `Load`: Triggered when the component is initialized in the DOM.
- `Unload`: Triggered when the component is destroyed.
- `Error`: Executed on runtime exceptions within the component context.

### 4. pxlNav Integration
- DSL variables and signals can be shared with the pxlNav engine.
- `pxlNav` events can trigger DSL functions.

## Implementation Details

### Parser
The `parser.js` provides the `defineNodeType` factory and built-in type definitions. It handles the transformation of functional calls into internal node objects.

### Compiler
The `compiler.js` processes these nodes, resolves signals, and bundles life-cycle events. It generates the final object format consumed by `ProcPage.js`.

### Schema
Validation is handled via `schema.js`, which ensures nodes have required properties and correct types for signals/functions.
