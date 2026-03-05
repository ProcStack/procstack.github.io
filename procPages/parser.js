/**
 * procPages DSL Parser - v0.1
 *   Designed for procstack.github.io by Kevin Edzenga; 2026
 * 
 * This parser provides a React-like functional interface for defining
 * ProcPages nodes, signals, and lifecycle events.
 */

/**
 * Define a signal-based variable
 */
export function Signal(value, onSet = null) {
  return {
    _type: 'signal',
    _value: value,
    get: function() { return this._value; },
    set: function(val) {
      this._value = val;
      if (onSet) onSet(val);
    }
  };
}

/**
 * Base Node Type Factory
 */
export function defineNodeType(name) {
  return function(props = {}, children = []) {
    // If first arg is an array, it's children with no props
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }

    const node = {
      type: name,
      props: props,
      children: Array.isArray(children) ? children : [children],
      signals: props.signals || {},
      funcs: props.funcs || {},
      load: props.onLoad || null,
      unload: props.onUnload || null,
      error: props.onError || null
    };

    // Handle specific React-like syntax for common node types
    if (props.content && !children.length) {
      node.children.push(props.content);
    }

    return node;
  };
}

// Built-in Node Types
export const Page = defineNodeType("Page");
export const Section = defineNodeType("Section");
export const Button = defineNodeType("Button");
export const Header = defineNodeType("Header");
export const PxlNav = defineNodeType("PxlNav");

export const Type = (val) => ({ type: 'type', value: val });
export const Signals = (map) => ({ type: 'signals', value: map });
export const Funcs = (map) => ({ type: 'funcs', value: map });
export const Load = (fn) => ({ type: 'load', value: fn });
export const Unload = (fn) => ({ type: 'unload', value: fn });
export const Error = (fn) => ({ type: 'error', value: fn });
export const Global = (props) => ({ type: 'global', value: props });

// pxlNav Specific Helpers
export const Settings = (map) => ({ type: 'pxlSettings', value: map });
export const Onboarding = (config) => ({ type: 'pxlOnboarding', value: config });
export const FPS = (pc, mobile) => ({ type: 'pxlFPS', value: { pc, mobile } });
export const RenderScale = (pc, mobile) => ({ type: 'pxlRenderScale', value: { pc, mobile } });

export class ProcPagesDSL {
  constructor() {
    this.nodes = [];
    this.pages = {};
  }

  /**
   * Parse a functional node tree into the internal format
   */
  parseNode(node) {
    if (node.type === "Page") {
      const id = node.props.id || `page_${Object.keys(this.pages).length}`;
      this.pages[id] = this.transformNodeToPage(node);
    }
    this.nodes.push(node);
    return node;
  }

  transformNodeToPage(node) {
    const pageData = {
      id: node.props.id,
      title: node.props.title || node.props.id,
      layout: node.props.layout || "triple",
      sections: [],
      signals: node.props.signals || {},
      funcs: node.props.funcs || {},
      onLoad: node.props.onLoad || null,
      pxlNav: null
    };

    // Process children to find sections and pxlNav
    node.children.forEach(child => {
      if (child.type === "Section") {
        pageData.sections.push({
          name: child.props.name,
          content: child.props.content || "",
          signals: child.props.signals || {}
        });
      } else if (child.type === "PxlNav") {
        pageData.pxlNav = this.transformNodeToPxlNav(child);
      }
    });

    return pageData;
  }

  transformNodeToPxlNav(node) {
    const pxlNav = {
      room: node.props.room,
      view: node.props.view || "default",
      settings: node.props.settings || {},
      onEnter: node.props.onEnter || null,
      onExit: node.props.onExit || null,
      options: {}
    };

    // Process functional children within PxlNav node
    node.children.forEach(child => {
      if (child.type === 'pxlSettings') {
        pxlNav.settings = { ...pxlNav.settings, ...child.value };
      } else if (child.type === 'pxlFPS') {
        pxlNav.options.fps = child.value;
      } else if (child.type === 'pxlRenderScale') {
        pxlNav.options.renderScale = child.value;
      } else if (child.type === 'pxlOnboarding') {
        pxlNav.options.onboarding = child.value;
        pxlNav.options.showOnboarding = true;
      } else if (child.type === 'signals') {
        pxlNav.signals = child.value;
      }
    });

    return pxlNav;
  }

  compile() {
    return this.pages;
  }
}
