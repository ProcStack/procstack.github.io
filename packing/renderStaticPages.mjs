// Render Static Pages
//   Using Puppeteer to render static HTML pages from a site-wide listing.
//   This script will generate static pages based on the provided page listing data.

// CLI flags:
//   - `live`: Render pages directly to the docs directory
//   - `dry`: Perform a dry run without writing files
//   - `sitemap`: Only generate the sitemap.xml + manifest without rendering + writing static site files
//   - `llms`: Generate LLMs.txt file and individual markdown files for LLM consumption



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


const siteRootUrl = "https://procstack.github.io";
const localUrl = 'http://localhost:3000';

const outputRoot = path.join( projectRoot, 'docs' );
const snapshotDir = path.join( projectRoot, 'staticPages' );
const botsDir = path.join( projectRoot, 'bots' );
const botsRootUrl = path.join( siteRootUrl, 'bots' );
const siteMapAppend = "sitemapAppend.json";

const thumbnailUrl = siteRootUrl + "/images/ProcStack_th.jpg";

const renderDir = directToDocs ? outputRoot : snapshotDir;
const sitemapPath = path.join( renderDir, 'sitemap.xml' );
const sitemapPathXSL = path.join( renderDir, 'sitemap.xsl' );
const sitemapXslSource = path.join( __dirname, 'sitemap.xsl' );

fs.mkdirSync( renderDir, { recursive: true });
fs.mkdirSync( botsDir, { recursive: true });

// Copy the sitemap XSL file if it exists
if( fs.existsSync(sitemapXslSource) ){
  fs.copyFileSync(sitemapXslSource, sitemapPathXSL);
  console.log(`Sitemap XSL copied to: ${sitemapPathXSL}`);
}else{
  console.warn(`!! Sitemap XSL file not found at: ${sitemapXslSource}`);
}


// Check for meta data spec file and move it to the bots directory if it's not already there
const aiMetaSpecFile = path.join( projectRoot, 'ai-metadata-spec.html' );
if( fs.existsSync(aiMetaSpecFile) ){
  const aiMetaSpecDest = path.join( botsDir, 'ai-metadata-spec.html' );
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



const generateSitemap = (urls) => {
  const header = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
  const footer = `\n</urlset>`;
  let imageTag = '';
  if( thumbnailUrl !== '' ){
    imageTag = `\n    <image:image>\n      <image:loc>${thumbnailUrl}</image:loc>\n    </image:image>`;
  }


  const body = urls.map(data => `  <url>\n    <loc>${data.url}</loc>\n    <lastmod>${data.lastModified}</lastmod>\n    <changefreq>monthly</changefreq>${imageTag}\n  </url>`).join('\n');
  let append = ``;

  // If sitemapAppend.json exists, read it and append its URLs
  const appendPath = path.join( __dirname, siteMapAppend );
  if( fs.existsSync(appendPath) ){
    const appendData = JSON.parse(fs.readFileSync(appendPath, 'utf8'));
    if( appendData.urls && Array.isArray(appendData.urls) ){
      let lastmod = appendData.lastModified || new Date().toISOString();
      lastmod = lastmod.split('T')[0];
      append = appendData.urls.map(entry => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n  </url>`).join('\n');

      if( append ){
        append = `\n${append}`;
      }
    }
  }
  return `${header}${body}${append}${footer}`;
};

// Generate LLMs.txt file according to the specification
const generateLLMsTxt = ( llmsContent ) => {
  let content = '# ProcStack Portfolio\n\n';
  content += `> Eyo, ProcStack here, I.\n\n`;
  
  content += `Kevin Edzenga (ProcStack/Trancor) is a technical artist with years of experience in film, XR, and immersive media. This portfolio demonstrates expertise in:\n\n`;
  content += `- Interactive 3D web experiences using Three.js and WebGL\n`;
  content += `- Custom shader development and procedural content creation\n`;
  content += `- Player controller systems (pxlNav)\n`;
  content += `- Technical art pipeline development\n`;
  content += `- Film and XR production workflows\n\n`;
  
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
  content += `- [Sitemap](${siteRootUrl}/sitemap.xml): Complete site structure for search engines\n`;
  
  return content;
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

  for( const [key, pageData] of Object.entries(pageListing) ){
    const folder = key;
    const htmlName = pageData.htmlName || 'index.htm';
    const route = `${folder}/${htmlName}`;
    const url = `${localUrl}/${route}`;

    console.log( `Page - ${key}` );
    const subPageKeys = pageData.sectionData;

    let isVisible = !pageData.hasOwnProperty('visible') || pageData.visible !== false;
    if( !isVisible ){
      console.log(` !! Skipping hidden page: ${key}`);
      continue;
    }

    if( subPageKeys ){
      for( const subKey in subPageKeys ){
        const subPageData = subPageKeys[subKey];
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

        console.log(`|SubPage: ${cleanedName} (${subKey})`);
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
        const aiOut = path.join(botsDir, `${manifestKey}.json`);
        if( writeToDisk ){
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
          console.log(` - Rendering subpage... ${localSubUrl}`);
          const page = await browser.newPage();
          await page.goto(localSubUrl, { waitUntil: 'networkidle0' });

          // Convert style and pxlNav modules to absolute paths
            const hrefToAbsolute = async (element, attr='href') => {
            if( element ){
              let path = await element.evaluate((el, attr) => el.getAttribute(attr), attr);
              path = path.replace('./', '');

              //const absolutePath = `${siteRootUrl}/${path}`;
              const absolutePath = `${relPathUpdate}${path}`;
              await element.evaluate((el, attr, absPath) => el.setAttribute(attr, absPath), attr, absolutePath);

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

      // Save AI manifest
      fs.writeFileSync(path.join(botsDir, 'siteContent.json'), JSON.stringify(manifest, null, 2));
    } 

    // Generate LLMs.txt file
    if( llmsGenerate && writeToDisk ){
      const llmsTxtContent = generateLLMsTxt(llmsContent);
      const llmsTxtPath = path.join(renderDir, 'llms.txt');
      fs.writeFileSync(llmsTxtPath, llmsTxtContent);
      console.log(`LLMs.txt generated at: ${llmsTxtPath}`);
    }

    // Save sitemap.xml
    fs.writeFileSync(sitemapPath, generateSitemap(sitemapUrls));

    console.log(`Sitemap generated at: ${sitemapPath}`);
  }
    if( sitemapOnly ){
    console.log('Sitemap only generation complete. No other files written to disk.');
  }else if( dryRun ){
    console.log('Dry run complete. No files written to disk.');
  } else {
    let message = `\n Static pages rendered to ${renderDir}\n AI metadata files generated.\n sitemap.xml updated.`;
    if( llmsGenerate ){
      message += `\n llms.txt generated with individual .md files for LLM consumption.`;
    }
    console.log(message);
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
