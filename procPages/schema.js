/**
 * procPages DSL Schema - v0.1
 *   Designed for procstack.github.io by Kevin Edzenga; 2026
 * 
 * This schema defines the structure and types for the ProcPages DSL.
 * It's intended to be used for validation and IntelliSense.
 */

export const DSLSchema = {
    "page": {
        "required": ["id", "title"],
        "types": {
            "id": "string",
            "page": "string",
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
            "styleOverrides": "object"
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
    "media": {
        "required": ["type", "src"],
        "types": {
            "type": "string",
            "src": "string",
            "caption": "array",
            "alt": "string",
            "style": "string",
            "width": "number",
            "height": "number",
            "thumb": "string"
        }
    },
    "pxlNav": {
        "types": {
            "room": "string",
            "view": "string",
            "settings": "object",
            "onEnter": "function",
            "onExit": "function"
        }
    },
    "blog": {
        "types": {
            "source": "string",
            "tags": "array",
            "limit": "number",
            "paginate": "boolean"
        }
    }
};

/**
 * Validate a DSL object against the schema
 * @param {string} component - The component to validate (page, section, media)
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

    schema.required.forEach(prop => {
        if (!data.hasOwnProperty(prop)) {
            errors.push(`Missing required property: ${prop}`);
        }
    });

    for (const [prop, value] of Object.entries(data)) {
        const expectedType = schema.types[prop];
        if (expectedType) {
            if (expectedType === "array" && !Array.isArray(value)) {
                errors.push(`Property ${prop} must be an array`);
            } else if (expectedType !== "array" && typeof value !== expectedType) {
                errors.push(`Property ${prop} must be of type ${expectedType}`);
            }
        }
    }

    return errors;
}
