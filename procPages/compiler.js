/**
 * procPages DSL Compiler - v0.1
 *   Designed for procstack.github.io by Kevin Edzenga; 2026
 * 
 * This compiler transforms DSL-based page and blog definitions
 * into the standard format used by ProcPage.js and ProcPageManager.js.
 * 
 * Since the compiler makes an assumption for possible human error,
 * Please don't run your ProcPages site in real time mode,
 *   Pre-compile your pages before publishing changes to the web for the best security and performance.
 * 
 * I'd like to allow the most flexibility possible for users to define their pages in a way that makes the most sense to them,
 *   So the compiler is designed to be forgiving and adaptable to different styles of page definition.
 */

import { ProcPagesDSL, Signal } from './parser.js';
import { validate } from './schema.js';

export class ProcPagesCompiler {
  constructor() {
    this.dsl = new ProcPagesDSL();
    this.globalSignals = {};
    this.globalFuncs = {};
  }

  /**
   * Compile DSL functional node or object into standard format
   * @param {Object} input - DSL component or object to compile
   * @returns {Object} - Compiled results
   */
  compile(input) {
    // If it's a Node structure (functional DSL)
    if (input.type && input.props) {
      return this.compileNode(input);
    }

    // Validate input against DSL schema for backward compatibility with pure JSON
    const results = {};
    for (const [id, config] of Object.entries(input)) {
      const errors = validate('page', config);
      if (errors.length > 0) {
        console.error(`Validation error in page ${id}:`, errors);
        continue;
      }
      results[id] = this.finalizePageData(config);
    }

    return results;
  }

  /**
   * Compile a functional Node tree
   * @param {Object} node 
   */
  compileNode(node) {
    switch(node.type) {
      case "Header":
        this.processHeaderNode(node);
        return null;
      case "Page":
        return this.finalizePageData(this.dsl.parseNode(node));
      default:
        return this.dsl.parseNode(node);
    }
  }

  /**
   * Process Header node for global state and engine metadata
   */
  processHeaderNode(node) {
    node.children.forEach(child => {
      if (child.type === 'signals') {
        Object.entries(child.value).forEach(([k, v]) => {
          this.globalSignals[k] = Signal(v);
        });
      }
      if (child.type === 'funcs') {
        Object.entries(child.value).forEach(([k, v]) => {
          this.globalFuncs[k] = v;
        });
      }
      if (child.type === 'global') {
        // Future global processing
      }
    });
  }

  /**
   * Finalize the page data into the format ProcPage.js expects
   * @param {Object} data - DSL-compiled page data
   */
  finalizePageData(data) {
    const final = {
      'page': data.id,
      'header': data.title || data.id,
      'theme': data.theme || '#184d76',
      'layout': data.layout || 'triple',
      'activeNavButton': data.activeNavButton || [],
      'subHeader': data.subHeader || '',
      'footer': data.footer || '',
      'pageStyles': data.pageStyles || {},
      'styleOverrides': data.styleOverrides || {},
      'initialSection': data.initialSection || 0,
      'sections': data.sections || [],
      'metaData': data.metaData || {},
      // Extended logic properties
      'signals': data.signals || {},
      'funcs': data.funcs || {},
      'onLoad': data.onLoad || null
    };

    // Handle the optional pxlNav callbacks and triggers
    if (data.pxlNav) {
      final.pxlNav = {
        room: data.pxlNav.room,
        view: data.pxlNav.view,
        settings: data.pxlNav.settings || {},
        callbacks: data.pxlNav.callbacks || [],
        signals: data.pxlNav.signals || {}
      };
    }

    return final;
  }

  /**
   * Generate actual JavaScript code for a page from compiled data
   * This is used in the pre-compile pipeline for SEO/Runtime.
   * @param {string} id - Page ID
   * @param {Object} compiledData - The finalized page data
   */
  generateJS(id, compiledData) {
    const jsonContent = JSON.stringify(compiledData, (key, value) => {
      // Special handling to stringify functions or skip them for raw JSON
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }, 2);

    return `
import { PageMetaData } from '../../js/procPages/PageMetaData.js';
import { ProcPage } from '../../js/procPages/ProcPage.js';

// Global Engine Logic for Page: ${id}
const metaDataInput = ${JSON.stringify(compiledData.metaData, null, 2)};
const pageContentObject = ${jsonContent};

// Revive functions if stored as strings
Object.entries(pageContentObject).forEach(([k, v]) => {
  if (typeof v === 'string' && v.startsWith('(')) {
    pageContentObject[k] = eval(v);
  }
});

const metaData = new PageMetaData(metaDataInput);
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage(pageContentObject);
    `.trim();
  }
}
