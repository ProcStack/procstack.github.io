// Render Static Pages
//   Using Puppeteer to render static HTML pages from a site-wide listing.
//   This script will generate static pages based on the provided page listing data.

// CLI flags:
//   - `live`: Render pages directly to the docs directory
//   - `dry`: Perform a dry run without writing files
//   - `sitemap`: Only generate the sitemap.xml + manifest without rendering + writing static site files
//   - `llms`: Generate LLMs.txt file and individual markdown files for LLM consumption

// Single Page Rendering:
//   - `myPageName`: Render a specific page by name, e.g., `node renderStaticPages.mjs myPageName`
//   - `parentPageName`: Render all subpages within a parent page, e.g., `node renderStaticPages.mjs AIDev`
//   - If no page name is provided, all pages in the listing will be rendered
//   - If parent page name matches filter, ALL subpages within that parent will be rendered
//   - If parent doesn't match, only individual subpages matching the filter will be rendered



// renderStaticPages.mjs
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';


// Get the directory of this script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find the project root (where package.json is located)
let projectRoot = __dirname;
while (!fs.existsSync(path.join(projectRoot, 'package.json')) ){
  const parent = path.dirname(projectRoot);
  if( parent === projectRoot ){
    throw new Error('Could not find project root (package.json not found)');
  }
  projectRoot = parent;
}

console.log(`Script location: ${__dirname}`);
console.log(`Project root: ${projectRoot}`);

// Import your site-wide listing - now relative to project root
const pageListingPath = path.join(projectRoot, 'docs/pages/pageListing.js');
// Convert to file URL for dynamic import (works cross-platform)
const pageListingUrl = pathToFileURL(pageListingPath).href;
const { pageListing } = await import(pageListingUrl);


// Check for process argument to decide where to save pages
const directToDocs = process.argv.includes('live');
const dryRun = process.argv.includes('dry');
const sitemapOnly = process.argv.includes('sitemap');
const llmsGenerate = process.argv.includes('llms') || !sitemapOnly; // Generate LLMs files by default unless sitemap-only
const writeToDisk = !dryRun;

// Check for specific page filter argument
const pageFilter = process.argv.find(arg => 
  !['live', 'dry', 'sitemap', 'llms'].includes(arg) && 
  !arg.includes('renderStaticPages') &&
  !arg.includes('node')
);

console.log(`Page filter: ${pageFilter || 'none (rendering all pages)'}`);
if (pageFilter) {
  console.log(`Filtering for page/subpage containing: ${pageFilter}`);
}


const siteRootUrl = "https://procstack.github.io";
const localUrl = 'http://localhost:3000';

const outputRoot = path.join( projectRoot, 'docs' );
const snapshotDir = path.join( projectRoot, 'staticPages' );
const botsDir = path.join( projectRoot, 'bots' );
const botsRootUrl = path.join( siteRootUrl, 'bots' );
const siteMapAppend = "sitemapAppend.json";

const thumbnailUrl = siteRootUrl + "/images/ProcStack_th.jpg";

const renderDir = directToDocs ? outputRoot : snapshotDir;
// JSON files should follow the same directory logic as HTML files
const jsonOutputDir = directToDocs ? path.join(outputRoot, 'bots') : path.join(snapshotDir, 'bots');
const sitemapPath = path.join( renderDir, 'sitemap.xml' );
const sitemapPathXSL = path.join( renderDir, 'sitemap.xsl' );
const sitemapXslSource = path.join( __dirname, 'sitemap.xsl' );

console.log(`Render directory: ${renderDir}`);
console.log(`JSON output directory: ${jsonOutputDir}`);
console.log(`Write to disk: ${writeToDisk}`);

fs.mkdirSync( renderDir, { recursive: true });
fs.mkdirSync( jsonOutputDir, { recursive: true });

// Copy the sitemap XSL file if it exists
if( fs.existsSync(sitemapXslSource) ){
  fs.copyFileSync(sitemapXslSource, sitemapPathXSL);
  console.log(`Sitemap XSL copied to: ${sitemapPathXSL}`);
}else{
  console.warn(`!! Sitemap XSL file not found at: ${sitemapXslSource}`);
}


// Check for meta data spec file and move it to the JSON output directory if it's not already there
const aiMetaSpecFile = path.join( projectRoot, 'ai-metadata-spec.html' );
if( fs.existsSync(aiMetaSpecFile) ){
  const aiMetaSpecDest = path.join( jsonOutputDir, 'ai-metadata-spec.html' );
  if( !fs.existsSync(aiMetaSpecDest) ){
    fs.copyFileSync(aiMetaSpecFile, aiMetaSpecDest);
    console.log(`AI metadata spec file copied to: ${aiMetaSpecDest}`);
  }else{
    console.log(`AI metadata spec file already exists at: ${aiMetaSpecDest}`);
  }
} else {
  console.warn(`!! AI metadata spec file not found at: ${aiMetaSpecFile}`);
}


// Strip tags & space codes for cleaner output for legibility
const cleanText = html => {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
};

// Convert HTML content to markdown format for LLMs.txt
const htmlToMarkdown = (html, title = '') => {
  if( !html) return '';
  
  let markdown = html
    // Convert headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
    
    // Convert paragraphs and divs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<div[^>]*>(.*?)<\/div>/gi, '$1\n')
    
    // Convert lists
    .replace(/<ul[^>]*>/gi, '')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    
    // Convert links
    .replace(/<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    
    // Convert emphasis
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    
    // Convert line breaks
    .replace(/<br[^>]*\/?>/gi, '\n')
    
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    
    // Clean up entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    
    // Clean up excessive whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s+|\s+$/g, '')
    .trim();
    
  return markdown;
};



// Parse existing sitemap XML to extract URL entries
const parseExistingSitemap = (sitemapPath) => {
  if (!fs.existsSync(sitemapPath)) {
    return [];
  }
  
  try {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    const urlPattern = /<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g;
    const urls = [];
    let match;
    
    while ((match = urlPattern.exec(content)) !== null) {
      urls.push({
        url: match[1],
        lastModified: match[2]
      });
    }
    
    return urls;
  } catch (error) {
    console.warn(`Error parsing existing sitemap: ${error.message}`);
    return [];
  }
};

const generateSitemap = (urls, existingUrls = [], isPartialUpdate = false) => {
  const header = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
  const footer = `\n</urlset>`;
  let imageTag = '';
  if( thumbnailUrl !== '' ){
    imageTag = `\n    <image:image>\n      <image:loc>${thumbnailUrl}</image:loc>\n    </image:image>`;
  }

  // Use a Map to prevent duplicates and ensure we only have valid page URLs
  const urlMap = new Map();
  
  // Filter function to ensure we only include valid page URLs (not JSON files, etc.)
  const isValidPageUrl = (url) => {
    return url.endsWith('.htm') || url.endsWith('.html') || url.endsWith('/');
  };

  if (isPartialUpdate && existingUrls.length > 0) {
    // For partial updates, start with existing valid URLs
    for (const existingUrl of existingUrls) {
      if (isValidPageUrl(existingUrl.url)) {
        urlMap.set(existingUrl.url, existingUrl);
      }
    }
    
    // Add/update with new URLs (these will overwrite existing ones with same URL)
    for (const newUrl of urls) {
      if (isValidPageUrl(newUrl.url)) {
        urlMap.set(newUrl.url, newUrl);
      }
    }
  } else {
    // Full regeneration - only add new URLs
    for (const newUrl of urls) {
      if (isValidPageUrl(newUrl.url)) {
        urlMap.set(newUrl.url, newUrl);
      }
    }
  }

  // Convert map back to array and sort
  const allUrls = Array.from(urlMap.values()).sort((a, b) => a.url.localeCompare(b.url));

  const body = allUrls.map(data => `  <url>\n    <loc>${data.url}</loc>\n    <lastmod>${data.lastModified}</lastmod>\n    <changefreq>monthly</changefreq>${imageTag}\n  </url>`).join('\n');
  let append = ``;

  // Only add sitemapAppend.json data for full regenerations to avoid duplicates during partial updates
  if (!isPartialUpdate) {
    const appendPath = path.join( __dirname, siteMapAppend );
    if( fs.existsSync(appendPath) ){
      const appendData = JSON.parse(fs.readFileSync(appendPath, 'utf8'));
      if( appendData.urls && Array.isArray(appendData.urls) ){
        let lastmod = appendData.lastModified || new Date().toISOString();
        lastmod = lastmod.split('T')[0];
        
        // Filter append URLs to avoid duplicates and ensure they're valid
        const appendUrls = appendData.urls.filter(entry => 
          entry.loc && 
          isValidPageUrl(entry.loc) && 
          !urlMap.has(entry.loc)
        );
        
        append = appendUrls.map(entry => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${entry.changefreq || 'monthly'}</changefreq>\n  </url>`).join('\n');

        if( append ){
          append = `\n${append}`;
        }
      }
    }
  }
  return `${header}${body}${append}${footer}`;
};

// Generate LLMs.txt file according to the specification
const generateLLMsTxt = ( llmsContent ) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let content = '# ProcStack Portfolio\n\n';
  content += `> Eyo, ProcStack here, I.\n\n`;
  
  content += `Kevin Edzenga (ProcStack/Trancor) is a technical artist with years of experience in film, XR, and immersive media. This portfolio demonstrates expertise in:\n\n`;
  content += `- Interactive 3D web experiences using Three.js and WebGL\n`;
  content += `- Custom shader development and procedural content creation\n`;
  content += `- Player controller systems (pxlNav)\n`;
  content += `- Technical art pipeline development\n`;
  content += `- Film and XR production workflows\n\n`;
  
  // Add AI Data Discovery section at the top for better LLM awareness
  content += '## AI Data Discovery\n\n';
  content += `JSON-API: ${siteRootUrl}/bots/\n`;
  content += `Data-Manifest: ${siteRootUrl}/data-manifest.json\n`;
  content += `Site-Content: ${siteRootUrl}/bots/siteContent.json\n`;
  content += `Content-Type: application/json\n`;
  content += `Last-Updated: ${currentDate}\n`;
  content += `AI-Metadata-Spec: ${siteRootUrl}/bots/ai-metadata-spec.html\n\n`;
  content += `# Preferred crawl endpoints\n`;
  content += `Preferred-Data-Source: ${siteRootUrl}/bots/siteContent.json\n`;
  content += `Individual-Pages: ${siteRootUrl}/bots/[pagename].htm.json\n`;
  content += `Robots-Directive: index, follow, ai:json\n\n`;
  
  // Add main sections
  for( const [sectionName, pages] of Object.entries(llmsContent.sections) ){
    content += `## ${sectionName}\n`;
    
    for( const page of pages ){
      content += `- [${page.title}](${page.url})`;
      const lastUpdated = page.lastModified;
      if( lastUpdated && lastUpdated !== '' ){
        content += `\n Updated: ${lastUpdated}`;
      }
      if( page.description && page.description !== page.title ){
        content += `\n Description : ${page.description}`;
      }
      content += '\n';
    }
    content += '\n';
  }
  
  // Add optional section for metadata
  content += '## AI Metadata Specifications\n\n';
  content += `- [Site Content JSON](${siteRootUrl}/bots/siteContent.json): Complete site metadata in JSON format\n`;
  content += `- [AI Metadata Specification](${siteRootUrl}/bots/ai-metadata-spec.html): Technical specification for AI metadata format\n`;
  content += `- [Data Manifest](${siteRootUrl}/data-manifest.json): Comprehensive data source manifest for AI/LLM discovery\n`;
  content += `- [Sitemap](${siteRootUrl}/sitemap.xml): Complete site structure for search engines\n\n`;
  
  content += '## Technical Implementation\n\n';
  content += `Each page includes custom AI metadata tags:\n`;
  content += `- ai:data-source: Direct link to page's JSON data\n`;
  content += `- ai:data-manifest: Link to site-wide data manifest\n`;
  content += `- ai:content-api: Base URL for all JSON endpoints\n`;
  content += `- robots: "index, follow, ai:json" for AI discoverability\n\n`;
  content += `All pages provide alternate JSON representations via link rel="alternate" tags.\n`;
  
  return content;
};

// Merge new manifest entries with existing ones for partial updates
const mergeManifestData = (existingManifest, newManifest, outputDir) => {
  // Load existing manifest if it exists
  const manifestPath = path.join(outputDir, 'siteContent.json');
  let existing = {};
  
  if (fs.existsSync(manifestPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (error) {
      console.warn(`Error reading existing manifest: ${error.message}`);
    }
  }
  
  // Merge new entries with existing ones
  return { ...existing, ...newManifest };
};

// Generate the data-manifest.json file for AI/LLM discovery
const generateDataManifest = (manifestData, outputDir, isPartialUpdate = false) => {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  // Calculate file sizes and get actual file list
  const jsonFiles = fs.readdirSync(outputDir)
    .filter(file => file.endsWith('.json') && file !== 'siteContent.json' && file !== 'data-manifest.json')
    .sort();
    
  // Get siteContent.json file size if it exists
  const siteContentPath = path.join(outputDir, 'siteContent.json');
  let siteContentSize = '0KB';
  if (fs.existsSync(siteContentPath)) {
    const stats = fs.statSync(siteContentPath);
    const sizeInKB = Math.round(stats.size / 1024);
    siteContentSize = `${sizeInKB}KB`;
  }
  
  const dataManifest = {
    version: "1.0",
    lastUpdated: currentDate,
    description: "ProcStack.github.io Data Sources for AI/LLM consumption",
    baseUrl: siteRootUrl,
    totalPages: Object.keys(manifestData).length,
    dataSources: {
      siteContent: {
        url: "/bots/siteContent.json",
        description: "Aggregated site content including all page data",
        format: "json",
        size: siteContentSize,
        lastUpdated: currentDate,
        pages: Object.keys(manifestData).length
      },
      individualPages: {
        baseUrl: "/bots/",
        description: "Individual page content as separate JSON files",
        format: "json",
        count: jsonFiles.length,
        lastUpdated: currentDate,
        files: jsonFiles
      },
      llmsFile: {
        url: "/llms.txt",
        description: "LLM-friendly text summary of all site content",
        format: "text/plain",
        lastUpdated: currentDate
      },
      aiMetaSpec: {
        url: "/bots/ai-metadata-spec.html",
        description: "Technical specification for AI metadata format used across the site",
        format: "text/html",
        lastUpdated: currentDate
      },
      sitemap: {
        url: "/sitemap.xml",
        description: "Complete site structure for search engines and crawlers",
        format: "application/xml",
        lastUpdated: currentDate
      }
    },
    aiMetadata: {
      customMetaTags: [
        "ai:data-source",
        "ai:data-manifest", 
        "ai:content-api"
      ],
      discoveryMethods: [
        "Meta tags in HTML head",
        "Link rel=alternate for JSON",
        "Link rel=data-manifest",
        "robots.txt AI directives",
        "llms.txt specification",
        "sitemap.xml with lastmod dates"
      ],
      robotsDirectives: "index, follow, ai:json"
    },
    schemas: {
      pageContent: {
        title: "string",
        description: "string", 
        lastModified: "YYYY-MM-DD",
        media: [
          {
            type: "string (video|image)",
            src: "string (relative path)",
            alt: "string",
            caption: "string"
          }
        ],
        content: "string (HTML content)",
        pageURL: "string (absolute URL)",
        relativeURL: "string (relative path)",
        jsonURL: "string (JSON data URL)"
      },
      siteContent: {
        "[pageKey]": "pageContent schema (see above)"
      }
    },
    usage: {
      note: "This data is available for AI/LLM consumption to understand ProcStack's work and projects",
      contact: "Kevin@Metal-Asylum.Net",
      repository: "https://github.com/ProcStack/procstack.github.io",
      license: "Content available for AI training and analysis",
      preferredEndpoint: "/bots/siteContent.json",
      rateLimit: "Please be respectful with requests"
    },
    generatedBy: {
      script: "renderStaticPages.mjs",
      timestamp: new Date().toISOString(),
      isPartialUpdate: isPartialUpdate
    }
  };
  
  return dataManifest;
};

const main = async () => {
  let browser;
  if( writeToDisk ){
    browser  = await puppeteer.launch();
  }
  const manifest = {};
  const sitemapUrls = [];
  const llmsContent = {
    pages: [],
    sections: {}
  };

  // Counter to track pages rendered/updated
  let pagesProcessedCount = 0;

  // Flag to track if there were any issues during processing
  let returnSuccessWarning = true;

  // Determine if this is a partial update (page filter is active)
  const isPartialUpdate = !!pageFilter;
  let existingSitemapUrls = [];
  
  if (isPartialUpdate) {
    console.log(`Partial update mode: Only updating entries for "${pageFilter}"`);
    existingSitemapUrls = parseExistingSitemap(sitemapPath);
    console.log(`Found ${existingSitemapUrls.length} existing sitemap entries`);
  }

  for( const [key, pageData] of Object.entries(pageListing) ){
    const folder = key;
    const htmlName = pageData.htmlName || 'index.htm';
    const route = `${folder}/${htmlName}`;
    const url = `${localUrl}/${route}`;

    // Apply page filter if specified
    if (pageFilter) {
      const normalizeString = (str) => str.replace(/[\s_-]/g, '').toLowerCase();
      const keyLower = key.toLowerCase();
      const filterLower = pageFilter.toLowerCase();
      const normalizedKey = normalizeString(key);
      const normalizedFilter = normalizeString(pageFilter);
      
      // Check if parent page matches the filter
      const parentMatches = keyLower.includes(filterLower) || normalizedKey.includes(normalizedFilter);
      
      if (!parentMatches) {
        // If parent doesn't match, check if any subpages match the filter
        const subPageKeys = pageData.sectionData;
        let hasMatchingSubpage = false;
        
        if (subPageKeys) {
          for (const subKey in subPageKeys) {
            const subPageData = subPageKeys[subKey];
            const subPageName = (subPageData.name || '').toLowerCase();
            const subPageHtmlName = (subPageData.htmlName || '').toLowerCase();
            const subKeyLower = subKey.toLowerCase();
            
            // Create normalized versions for better matching
            const normalizedSubPageName = normalizeString(subPageData.name || '');
            const normalizedHtmlName = normalizeString(subPageData.htmlName || '');
            
            const matches = subKeyLower.includes(filterLower) ||
                           subPageName.includes(filterLower) ||
                           subPageHtmlName.includes(filterLower) ||
                           normalizedSubPageName.includes(normalizedFilter) ||
                           normalizedHtmlName.includes(normalizedFilter);
            
            if (matches) {
              hasMatchingSubpage = true;
              break;
            }
          }
        }
        
        if (!hasMatchingSubpage) {
          console.log(` !! Skipping page: ${key} (doesn't match filter: ${pageFilter})`);
          continue;
        }
      } else {
        console.log(` ++ Parent page matches filter: ${key} - will render ALL subpages`);
      }
    }

    console.log( `Page - ${key}` );
    const subPageKeys = pageData.sectionData;

    let isVisible = !pageData.hasOwnProperty('visible') || pageData.visible !== false;
    if( !isVisible ){
      console.log(` !! Skipping hidden page: ${key}`);
      continue;
    }

    if( subPageKeys ){
      // Check if parent page matches filter to determine if we should render all subpages
      let renderAllSubpages = false;
      if (pageFilter) {
        const normalizeString = (str) => str.replace(/[\s_-]/g, '').toLowerCase();
        const keyLower = key.toLowerCase();
        const filterLower = pageFilter.toLowerCase();
        const normalizedKey = normalizeString(key);
        const normalizedFilter = normalizeString(pageFilter);
        renderAllSubpages = keyLower.includes(filterLower) || normalizedKey.includes(normalizedFilter);
      }
      
      for( const subKey in subPageKeys ){
        const subPageData = subPageKeys[subKey];
        
        // Apply subpage filter if specified AND parent doesn't match (if parent matches, render all subpages)
        if (pageFilter && !renderAllSubpages) {
          const subPageName = (subPageData.name || '').toLowerCase();
          const subPageHtmlName = (subPageData.htmlName || '').toLowerCase();
          const subKeyLower = subKey.toLowerCase();
          const filterLower = pageFilter.toLowerCase();
          
          // Create normalized versions for better matching (remove spaces, underscores, special chars)
          const normalizeString = (str) => str.replace(/[\s_-]/g, '').toLowerCase();
          const normalizedSubPageName = normalizeString(subPageData.name || '');
          const normalizedHtmlName = normalizeString(subPageData.htmlName || '');
          const normalizedFilter = normalizeString(pageFilter);
          
          const matches = subKeyLower.includes(filterLower) ||
                         subPageName.includes(filterLower) ||
                         subPageHtmlName.includes(filterLower) ||
                         normalizedSubPageName.includes(normalizedFilter) ||
                         normalizedHtmlName.includes(normalizedFilter);
          
          if (!matches) {
            console.log(` !! Skipping subpage: ${subKey} (doesn't match filter: ${pageFilter})`);
            continue;
          }
        } else if (pageFilter && renderAllSubpages) {
          console.log(` ++ Including subpage: ${subKey} (parent matches filter)`);
        }
        
        const cleanedName = cleanText(subPageData.name || '');
        const htmlName = subPageData.htmlName || `${folder}.htm`;

        let localSubUrl = `${localUrl}/${folder}/${htmlName}`;
        let relUrl = `./${folder}/${htmlName}`;
        let url = `${siteRootUrl}/${folder}/${htmlName}`;
        let manifestKey = `${folder}_${htmlName}`;
        let relPathUpdate = "../";
        let outPath = path.join(renderDir, folder, htmlName);
        
        if( !subPageData.htmlName || subPageData.htmlName === '' ){
          localSubUrl = `${localUrl}/${folder}.htm`;
          relUrl = `./${folder}.htm`;
          url = `${siteRootUrl}/${htmlName}`;
          manifestKey = htmlName;
          relPathUpdate = "./";
          outPath = path.join(renderDir, htmlName);
        }

        console.log(`-|  -- SubPage: ${cleanedName} (${subKey})`);
        console.log(`  Live URL: ${url}`);


        // Generate AI metadata
        const manifestJsonUrl = `${botsRootUrl}/${manifestKey}.json`;
        const title = cleanedName;
        const description = cleanText( subPageData.content || '' ).split('.')[0] + '.';
        const media = (subPageData.media || []).map(entry => ({
          type: entry.type,
          src: entry.src,
          alt: entry.alt || '',
          caption: cleanText((entry.caption || []).join(' '))
        }));
        const content = subPageData.content || '';
        let lastModified = subPageData.lastModified || new Date().toISOString();
        lastModified = lastModified.split('T')[0]; // Keep only the date part

        // Add to sitemap
        sitemapUrls.push({
          url,
          lastModified
        });

        // Convert content to markdown for LLMs.txt
        const markdownContent = htmlToMarkdown(content, title);
        
        // Organize content for LLMs.txt by section
        const sectionName = pageData.name || folder;
        if( !llmsContent.sections[sectionName] ){
          llmsContent.sections[sectionName] = [];
        }
        
        const mdUrl = url+".md";
        llmsContent.sections[sectionName].push({
          title,
          url: mdUrl,
          lastModified,
          description,
          content: markdownContent
        });

        manifest[ manifestKey ] = { 'jsonURL':manifestJsonUrl, lastModified, title, description, media, content, 'pageURL':url, 'relativeURL':relUrl };
        const aiOut = path.join(jsonOutputDir, `${manifestKey}.json`);
        if( writeToDisk ){
          // Increment counter for pages being processed
          pagesProcessedCount++;
          
          fs.mkdirSync(path.dirname(aiOut), { recursive: true });
          fs.writeFileSync(aiOut, JSON.stringify({ title, description, lastModified, media }, null, 2));
          console.log(`  AI Metadata saved to: ${aiOut}`);


          // Generate individual markdown file for LLMs.txt standard
          if( llmsGenerate ){
            const mdPath = outPath+".md";
            const mdContent = `# ${title}\n\n${markdownContent}`;
            fs.mkdirSync(path.dirname(mdPath), { recursive: true });
            fs.writeFileSync(mdPath, mdContent);
            console.log(`  Markdown file saved to: ${mdPath}`);
          }

          // Render the page using Puppeteer
          // Use redirect logic to load dynamic content with latest layout
          const targetPath = url.replace(siteRootUrl, '');
          const redirectUrl = `${localUrl}/index.htm?redirect=${targetPath}`;
          console.log(` - Rendering subpage with redirect... ${redirectUrl}`);
          const page = await browser.newPage();
          await page.goto(redirectUrl, { waitUntil: 'networkidle0' });

          // Convert style and pxlNav modules to absolute paths
            const hrefToAbsolute = async (element, attr='href') => {
            if( element ){
              let path = await element.evaluate((el, attr) => el.getAttribute(attr), attr);
              if( path.startsWith('../.') ){
                path = path.substring(4);
              }
              if( path ){
                console.log(`   Processing ${attr} - ${path}`);
              }
              
              // Only process relative paths that don't already start with ../ or /
              if( path && !path.startsWith('/') && !path.startsWith('http') && !path.startsWith('../') ){
                // Remove leading ./ if present
                if( path.startsWith('./') ){
                  path = path.substring(2);
                }
                
                //const absolutePath = `${siteRootUrl}/${path}`;
                const absolutePath = `${relPathUpdate}${path}`;
                await element.evaluate((el, attr, absPath) => el.setAttribute(attr, absPath), attr, absolutePath);
              }

              // Find last div object and remove it
              // TODO : Fix this from pxlNav, not everything is in the content div, or has an id
              await element.evaluate(() => {
                const divs = document.body.getElementsByTagName("div");
                if( divs.length > 0 ){
                  divs[divs.length - 1].remove();
                }

                const faderStyleObj = document.head.lastChild;
                if( faderStyleObj && faderStyleObj.tagName === 'STYLE' ){
                  faderStyleObj.remove();
                }
              });
            }
            return null;
          }

          const procPagesStylesheet = await page.$('#procPagesStylesheet');
          await hrefToAbsolute(procPagesStylesheet, 'href');

          const pxlNavStylesheet = await page.$('#pxlNavStylesheet');
          await hrefToAbsolute(pxlNavStylesheet, 'href');

          const pxlNavModule = await page.$('#pxlNavModule');
          await hrefToAbsolute(pxlNavModule, 'src');

          const canonicalLink = await page.$('link[rel="canonical"]');
          if( canonicalLink ){
            await hrefToAbsolute(canonicalLink, 'href');
          } else {
            // If no canonical link exists, create one
            await page.evaluate((absPath) => {
              const link = document.createElement('link');
              link.setAttribute('rel', 'canonical');
              link.setAttribute('href', absPath);
              document.head.appendChild(link);
            }, url);
          }

          // Replace all instances of localhost URLs with production URLs in the HTML
          await page.evaluate((localUrl, siteRootUrl) => {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
                let regex = new RegExp(localUrl, 'g');
            while (walker.nextNode()) {
              const node = walker.currentNode;
              if (node.nodeType === Node.TEXT_NODE) {
                // Replace localhost URLs in text nodes
                node.textContent = node.textContent.replace(regex, siteRootUrl);
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Replace in attributes like href, src, etc.
                for (const attr of ['href', 'src', 'data-src']) {
                  if (node.hasAttribute && node.hasAttribute(attr)) {
                  const val = node.getAttribute(attr);
                    if (typeof val === 'string' && val.includes(localUrl)) {
                      node.setAttribute(attr, val.replace(regex, siteRootUrl));
                    }
                  }
                }
              }
            }
          }, localUrl, siteRootUrl);


          // Remove pxlNav runtime container - id="pxlNav-container"
          const pxlNavContainer = await page.$('#pxlNav-container');
          if( pxlNavContainer ){
            await pxlNavContainer.evaluate(el => el.remove());
          }

          // Remove pxlNav error container - id="pxlNav-failState"
          const pxlNavFailState = await page.$('#pxlNav-failState');
          if( pxlNavFailState ){
            await pxlNavFailState.evaluate(el => el.remove());
          }

          const content = await page.content();

          fs.mkdirSync(path.dirname(outPath), { recursive: true });
          fs.writeFileSync(outPath, content);
          console.log(`   Saved subpage to - ${outPath}`);
        }
      }
    }
    
    console.log('---');

  }
  if( writeToDisk || sitemapOnly ){

    if( writeToDisk ){
      await browser.close();

      // Save AI manifest - merge with existing for partial updates
      const finalManifest = isPartialUpdate ? mergeManifestData({}, manifest, jsonOutputDir) : manifest;
      fs.writeFileSync(path.join(jsonOutputDir, 'siteContent.json'), JSON.stringify(finalManifest, null, 2));
      
      // Generate and save data-manifest.json
      const dataManifest = generateDataManifest(finalManifest, jsonOutputDir, isPartialUpdate);
      const dataManifestPath = path.join(renderDir, 'data-manifest.json');
      fs.writeFileSync(dataManifestPath, JSON.stringify(dataManifest, null, 2));
      
      if (isPartialUpdate) {
        console.log(`Updated ${Object.keys(manifest).length} entries in AI manifest (partial update)`);
        console.log(`AI manifest location: ${path.join(jsonOutputDir, 'siteContent.json')}`);
        console.log(`Data manifest updated at: ${dataManifestPath}`);
      } else {
        console.log(`Generated complete AI manifest with ${Object.keys(finalManifest).length} entries`);
        console.log(`AI manifest location: ${path.join(jsonOutputDir, 'siteContent.json')}`);
        console.log(`Data manifest generated at: ${dataManifestPath}`);
      }
    } 

    // Generate LLMs.txt file - skip for partial updates to avoid overwriting
    if( llmsGenerate && writeToDisk && !isPartialUpdate ){
      const llmsTxtContent = generateLLMsTxt(llmsContent);
      const llmsTxtPath = path.join(renderDir, 'llms.txt');
      fs.writeFileSync(llmsTxtPath, llmsTxtContent);
      console.log(`LLMs.txt generated at: ${llmsTxtPath}`);
    } else if (isPartialUpdate && llmsGenerate) {
      console.log(`Skipping LLMs.txt generation for partial update (to preserve existing content)`);
    }

    // Save sitemap.xml - merge with existing for partial updates
    const sitemapContent = generateSitemap(sitemapUrls, existingSitemapUrls, isPartialUpdate);
    fs.writeFileSync(sitemapPath, sitemapContent);

    if (isPartialUpdate) {
      console.log(`Sitemap updated with ${sitemapUrls.length} new/modified entries (partial update): ${sitemapPath}`);
    } else {
      console.log(`Complete sitemap generated with ${sitemapUrls.length} entries: ${sitemapPath}`);
    }
  }
    if( sitemapOnly ){
    console.log('Sitemap only generation complete. No other files written to disk.');
  }else if( dryRun ){
    console.log('Dry run complete. No files written to disk.');
  } else {
    let message = '';
    if (isPartialUpdate) {
      message = `\n Partial update complete for filter: "${pageFilter}"\n Static pages rendered to ${renderDir}\n AI metadata files updated for specific pages.\n sitemap.xml updated with new/modified entries only.`;
      if( !llmsGenerate ){
        message += `\n LLMs.txt skipped to preserve existing content.`;
      }
    } else {
      message = `\n Static pages rendered to ${renderDir}\n AI metadata files generated.\n sitemap.xml updated.`;
      if( llmsGenerate ){
        message += `\n llms.txt generated with individual .md files for LLM consumption.`;
      }
    }
    console.log(message);
  }

  // Report pages processed count
  if( pagesProcessedCount === 0 ){
    console.log(`\n  !! WARNING !! -- NO PAGES WERE PROCESSED! (Count: ${pagesProcessedCount})`);
    console.log("        ( '"+pageFilter+"' not found in any page/sub-page names )");
    returnSuccessWarning = false;
  } else {
    console.log(`\n  Something worked right!`);
  }

  // No need for reject when we have VARIABLES!
  //   It's as async as it needs to be!
  //     Since we all know how WebPack can get,
  //       Yes, this is not a web packer,
  //         But anything in that pre-deploy prep is gonna need a function or two
  // The only missing pieces?
  //   Recursive diving to find & convert FBX -> GLB (Binary GLTF)
  //     Then at least I'll have a "live view" renderer of the site with asset processing
  //   But, one step at a time!
  return { pagesProcessedCount, returnSuccessWarning };

};


main()
  .then(({ pagesProcessedCount, returnSuccessWarning }) => {

    console.log("");
    console.log(" - - - ");
    console.log("");

    if( !returnSuccessWarning ){
      console.log('  !! WARNING !! - Process completed successfully, but with an issue!');
      console.log('      (See above for details)');
    } else {
      console.log('Process completed successfully !!');
      console.log(`  Total pages processed: ${pagesProcessedCount}`);
    }
    console.log("");
    console.log(" - - - ");
    console.log("");

    process.exit(0);
  })
  .catch((error) => {
    console.error('  !! ERROR !! - Process failed:', error);
    process.exit(1);
  });
