const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Documentation",
  "description": "Documentation for the pxlNav library, including installation and usage instructions.",
  "keywords": "pxlNav, documentation, shader editor, Three.js, interactive environments, web development",
  "url": "https://procstack.github.io/pxlNav/Docs.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "Docs.htm",
  'name' : 'Documentation',
  'title' : 'Documentation',
  'lastModified' : '2025-03-12',
  'schemaData' : shemaData,
  'description' : 'Documentation for the pxlNav library, including installation and usage instructions.',
  'keywords' : 'pxlNav, documentation, shader editor, Three.js, interactive environments, web development',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/glslScriptEditor.webp',
      'href' : '../pxlNav-docs',
      'alt' : 'pxlNav Shader Editor',
      'style' : 'procPagesImageStyle',
      'caption' : ["<span class='procPagesHideWhenVertical'>See pxlNav Documentation</span>"]
    
    }
  ],
  'contentStyle' : [ 'procPagesCenterContent' ],
  'content' : `
    <div class="innerCenter" style="padding : 2.5em 0px 0px 0px;">
      <span class="textBump">View the <a href="../pxlNav-docs" target="_blank" alt="pxlNav Documentation" class="textBump">pxlNav Documentation</a></span>
      <br>
      <br>
      Create your own interactive environments,
      <br>Using <span class='textNudge'>pxlNav</span> for your Three.js projects.

      <br>
      <br>
      <br>
      <div class="innerCenter">
        Install it for your web project using NPM
        <div class="textBoldBox" style="margin: 4px;">npm -i pxlnav</div>
        <span class="textBump">Native JavaScript ESM</span>, <span class="textBump">React</span>, & <span class="textBump">Next.js</span>
        <br>examples are included when installed
      </div>
      <br><br>
    </div>
  `
};