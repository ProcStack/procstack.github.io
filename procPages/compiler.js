/**
 * procPages DSL Compiler - v0.1
 *   Designed for procstack.github.io by Kevin Edzenga; 2026
 * 
 * This compiler transforms DSL-based page and blog definitions
 * into the standard format used by ProcPage.js and ProcPageManager.js.
 */

import { ProcPagesDSL } from './parser.js';
import { validate } from './schema.js';

export class ProcPagesCompiler {
    constructor() {
        this.dsl = new ProcPagesDSL();
    }

    /**
     * Compile DSL string or object into standard format
     * @param {Object} input - DSL object to compile
     * @returns {Object} - Compiled results
     */
    compile(input) {
        // Validate input against DSL schema
        for (const [id, config] of Object.entries(input)) {
            const errors = validate('page', config);
            if (errors.length > 0) {
                console.error(`Validation error in page ${id}:`, errors);
                continue;
            }
            this.dsl.page(id, config);
        }

        const compiledPages = this.dsl.compile();
        const results = {};

        for (const [id, pageData] of Object.entries(compiledPages)) {
            // Further transformations to match exact ProcPage constructor needs
            results[id] = this.finalizePageData(pageData);
        }

        return results;
    }

    /**
     * Finalize the page data into the exact format ProcPage.js expects
     * @param {Object} data - DSL-compiled page data
     */
    finalizePageData(data) {
        const final = {
            'page': data.page,
            'header': data.header || data.page,
            'theme': data.theme || '#184d76',
            'layout': data.layout || 'triple',
            'activeNavButton': data.activeNavButton || [],
            'subHeader': data.subHeader || '',
            'footer': data.footer || '',
            'pageStyles': data.pageStyles || {},
            'styleOverrides': data.styleOverrides || {},
            'initialSection': data.initialSection || 0,
            'sections': data.sections || [],
            'metaData': data.metaData || {}
        };

        // Handle the optional pxlNav callbacks and triggers
        //   pxlNav: { room: '...', view: '...', settings: { ... } }
        if (data.pxlNav) {
            final.pxlNav = {
                room: data.pxlNav.room,
                view: data.pxlNav.view,
                settings: data.pxlNav.settings || {},
                callbacks: data.pxlNav.callbacks || []
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
        const jsonContent = JSON.stringify(compiledData, null, 2);
        return `
import { PageMetaData } from '../../js/procPages/PageMetaData.js';
import { ProcPage } from '../../js/procPages/ProcPage.js';

const metaDataInput = ${JSON.stringify(compiledData.metaData, null, 2)};
const pageContentObject = ${jsonContent};

const metaData = new PageMetaData(metaDataInput);
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage(pageContentObject);
        `.trim();
    }
}
