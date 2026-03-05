/**
 * procPages DSL Schema - v0.1
 *   Designed for procstack.github.io by Kevin Edzenga; 2026
 * 
 * This schema defines the structure and types for the ProcPages DSL.
 * It's updated to support a React-like functional node structure
 * with Signals, Funcs, and Life-cycle events.
 */

export const DSLSchema = {
  "node": {
    "required": ["type"],
    "types": {
      "type": "string",
      "props": "object",
      "children": "array",
      "signals": "object",
      "funcs": "object",
      "load": "function",
      "unload": "function",
      "error": "function",
      "global": "object"
    }
  },
  "page": {
    "required": ["id", "title"],
    "types": {
      "id": "string",
      "title": "string",
      "description": "string",
      "keywords": "array",
      "theme": "string",
      "layout": "string",
      "image": "string",
      "initialSection": "number",
      "activeNavButton": "array",
      "sections": "array",
      "blog": "object",
      "pxlNav": "object",
      "styleOverrides": "object",
      "signals": "object",
      "funcs": "object",
      "onLoad": "function",
      "onUnload": "function",
      "onError": "function"
    }
  },
  "section": {
    "required": ["name"],
    "types": {
      "name": "string",
      "content": "string",
      "media": "array",
      "navGroup": "string",
      "type": "string",
      "style": "array",
      "height": "string"
    }
  },
  "pxlNav": {
    "types": {
      "room": "string",
      "view": "string",
      "settings": "object",
      "onEnter": "function",
      "onExit": "function",
      "signals": "object"
    }
  },
  "signal": {
    "types": {
      "value": "any",
      "onSet": "function"
    }
  }
};

/**
 * Validate a DSL object against the schema
 * @param {string} component - The component to validate
 * @param {Object} data - The data to validate
 * @returns {Array} - Array of error messages (empty if valid)
 */
export function validate(component, data) {
  const errors = [];
  const schema = DSLSchema[component];

  if (!schema) {
    errors.push(`Unknown component: ${component}`);
    return errors;
  }

  if (schema.required) {
    schema.required.forEach(prop => {
      if (!data.hasOwnProperty(prop)) {
        errors.push(`Missing required property: ${prop}`);
      }
    });
  }

  for (const [prop, value] of Object.entries(data)) {
    const expectedType = schema.types[prop];
    if (expectedType) {
      if (expectedType === "array" && !Array.isArray(value)) {
        errors.push(`Property ${prop} must be an array`);
      } else if (expectedType === "function" && typeof value !== "function") {
        errors.push(`Property ${prop} must be a function`);
      } else if (expectedType !== "array" && expectedType !== "function" && typeof value !== expectedType) {
        if (expectedType === "any") continue;
        errors.push(`Property ${prop} must be of type ${expectedType}`);
      }
    }
  }

  return errors;
}
