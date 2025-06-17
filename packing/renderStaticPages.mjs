// Render Static Pages
//   Using Puppeteer to render static HTML pages from a site-wide listing.
//   This script will generate static pages based on the provided page listing data.

// CLI flags:
//   - `live`: Render pages directly to the docs directory
//   - `dry`: Perform a dry run without writing files
//   - `sitemap`: Only generate the sitemap.xml + manifest without rendering + writing static site files



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
while (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
  const parent = path.dirname(projectRoot);
  if (parent === projectRoot) {
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
const writeToDisk = !dryRun;


const siteRootUrl = "https://procstack.github.io";
const baseUrl = 'http://localhost:3000'; // Ensure you're running a local server for this
const outputRoot = path.join( projectRoot, 'docs' );
const snapshotDir = path.join( projectRoot, 'staticPages' );
const botsDir = path.join( projectRoot, 'bots' );
const botsRootUrl = path.join( siteRootUrl, 'bots' );
const siteMapAppend = "sitemapAppend.json";

const thumbnailUrl = "https://procstack.github.io/images/ProcStack_th.jpg";

const renderDir = directToDocs ? outputRoot : snapshotDir;
const sitemapPath = path.join( renderDir, 'sitemap.xml' );

fs.mkdirSync( renderDir, { recursive: true });
fs.mkdirSync( botsDir, { recursive: true });

// Strip tags & space codes for cleaner output for legibility
const cleanText = html => {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
};


/*
// Sitemap Append Json -
{
  "urls": [
    {
      "loc": "https://procstack.github.io/ai-data.html",
      "lastmod": "2025-06-17",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://procstack.github.io/data-manifest.json",
      "lastmod": "2025-06-17",
      "changefreq": "weekly",
      "priority": 0.7
    },
    {
      "loc": "https://procstack.github.io/bots/siteContent.json",
      "lastmod": "2025-06-17",
      "changefreq": "weekly",
      "priority": 0.7
    }
  ]
}

*/


const generateSitemap = (urls) => {
  const header = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n`;
  const footer = `\n</urlset>`;
  let imageTag = '';
  if( thumbnailUrl !== '' ){
    imageTag = `\n    <image:image xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\">\n      <image:loc>${thumbnailUrl}</image:loc>\n    </image:image>`;
  }


  const body = urls.map(url => `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>${imageTag}\n  </url>`).join('\n');
  let append = ``;

  // If sitemapAppend.json exists, read it and append its URLs
  const appendPath = path.join( __dirname, siteMapAppend );
  if( fs.existsSync(appendPath) ){
    const appendData = JSON.parse(fs.readFileSync(appendPath, 'utf8'));
    if( appendData.urls && Array.isArray(appendData.urls) ){
      append = appendData.urls.map(entry => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n  </url>`).join('\n');

      if( append ){
        append = `\n${append}`;
      }
    }
  }
  return `${header}${body}${append}${footer}`;
};

const main = async () => {
  let browser;
  if( writeToDisk ){
    browser  = await puppeteer.launch();
  }
  const manifest = {};
  const sitemapUrls = [];

  for( const [key, pageData] of Object.entries(pageListing) ){
    const folder = key;
    const htmlName = pageData.htmlName || 'index.htm';
    const route = `${folder}/${htmlName}`;
    const url = `${baseUrl}/${route}`;

    console.log( `Page - ${key}` );
    const subPageKeys = pageData.sectionData;
    
    if( subPageKeys ){
      for( const subKey in subPageKeys ){
        const subPageData = subPageKeys[subKey];
        const cleanedName = cleanText(subPageData.name || '');
        const htmlName = subPageData.htmlName || `${folder}.htm`;
        let localUrl = `${baseUrl}/${folder}/${htmlName}`;
        let relUrl = `./${folder}/${htmlName}`;
        let url = `${siteRootUrl}/${folder}/${htmlName}`;
        let manifestKey = `${folder}_${htmlName}`;
        if( !subPageData.htmlName && (!subPageData.name || subPageData.name == '') ){
          localUrl = `${baseUrl}/${folder}.htm`;
          url = `${siteRootUrl}/${htmlName}`;
          manifestKey = htmlName;
        }

        console.log(`|SubPage: ${cleanedName} (${subKey})`);
        console.log(`  Live URL: ${url}`);

        // Add to sitemap
        sitemapUrls.push( url );

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

        manifest[ manifestKey ] = { 'jsonURL':manifestJsonUrl, title, description, media, content, 'pageURL':url, 'relativeURL':relUrl };
        const aiOut = path.join(botsDir, `${manifestKey}.json`);
        if( writeToDisk ){
          fs.mkdirSync(path.dirname(aiOut), { recursive: true });
          fs.writeFileSync(aiOut, JSON.stringify({ title, description, media }, null, 2));
          console.log(`  AI Metadata saved to: ${aiOut}`);


          // Render the page using Puppeteer
          console.log(` - Rendering subpage... ${localUrl}`);
          const page = await browser.newPage();
          await page.goto(localUrl, { waitUntil: 'networkidle0' });

          // Convert style and pxlNav modules to absolute paths
            const hrefToAbsolute = async (element, attr='href') => {
            if( element ){
              let path = await element.evaluate((el, attr) => el.getAttribute(attr), attr);
              path = path.replace('./', '');

              const absolutePath = `${siteRootUrl}/${path}`;
              await element.evaluate((el, attr, absPath) => el.setAttribute(attr, absPath), attr, absolutePath);

            }
            return null;
          }

          const procPagesStylesheet = await page.$('#procPagesStylesheet');
          await hrefToAbsolute(procPagesStylesheet, 'href');

          const pxlNavStylesheet = await page.$('#pxlNavStylesheet');
          await hrefToAbsolute(pxlNavStylesheet, 'href');

          const pxlNavModule = await page.$('#pxlNavModule');
          await hrefToAbsolute(pxlNavModule, 'src');

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
          const outPath = path.join(renderDir, folder, htmlName);

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

      // Save AI manifest
      fs.writeFileSync(path.join(botsDir, 'siteContent.json'), JSON.stringify(manifest, null, 2));
    } 

    // Save sitemap.xml
    fs.writeFileSync(sitemapPath, generateSitemap(sitemapUrls));

    console.log(`Sitemap generated at: ${sitemapPath}`);
  }
  
  if( sitemapOnly ){
    console.log('Sitemap only generation complete. No other files written to disk.');
  }else if (dryRun) {
    console.log('Dry run complete. No files written to disk.');
  } else {
    console.log(`\n Static pages rendered to ${renderDir}\n AI metadata files generated.\n sitemap.xml updated.`);
  }

};


main()
  .then(() => {
    console.log('Process completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Process failed:', error);
    process.exit(1);
  });
