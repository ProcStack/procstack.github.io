
export const pageListingData = {
  'htmlName' : "Docs.htm",
  'name' : 'Documentation',
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
      <div class="innerCenter">Install <span class='textNudge'>pxlNav</span> for your web project using NPM
      <div class="textBoldBox">npm -i pxlnav</div></div>
      <br><br>
    </div>
  `
};