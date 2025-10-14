const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "pxlmancer.com",
  "description": "A full drawing/painting app on desktop, a fun fidget toy on mobile.",
  "keywords": "pxlmancer, drawing app, painting app, javascript, jquery, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/pxlmancer.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "Pxlmancer.htm",
  'name' : 'Pxlmancer<span class="hideOnMobile textDrinkMeAlice textBottom">&nbsp;:: Drawing App</span>',
  'title' : 'Pxlmancer :: Drawing App',
  'lastModified' : '2025-02-24',
  'schemaData' : shemaData,
  'description' : 'A full drawing/painting app on desktop, a fun fidget toy on mobile.',
  'keywords' : 'pxlmancer, drawing app, painting app, javascript, jquery, personal projects',
  'navGroup' : 'Personal Projects',
  'navStyle' : ['textNudge'],
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/tvKid.webp',
      'alt' : 'TV was king!',
      'style' : 'procPagesImageStyle',
      'caption' : ["vv Watch the timelapse of me making 'TV Kid' in Pxlmancer vv"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/tvKid.webm',
      'alt' : 'TV Kid timelapse',
      'style' : 'procPagesImageStyle',
      'caption' : ["This was a fun one!"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/pxlBrushes.webm',
      'alt' : 'Testing some brushes & smudges',
      'caption' : ['Testing some brushes & smudges'],
      'style' : 'procPagesImageStyle',
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/pxlColorSphere.webm',
      'alt' : 'Color sphere demo',
      'caption' : ['The Color Sphere','Click to Sample your desired color','Swap Swatches with Number Keys!','Click & Drag to mix colors; and they save to your `.pxlm` file'],
      'style' : 'procPagesImageStyle',
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/pxlLayers.webm',
      'alt' : 'Layer support demo',
      'caption' : ['Gotta have layers in a graphics editors!'],
      'style' : 'procPagesImageStyle',
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/kitty.webp',
      'alt' : 'Digital drawing a friends cat',
      'style' : 'procPagesImageStyle',
      'caption' : ["...of course, the cat tax..."]
    },
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle"><a href='https://procstack.github.io/pxlmancer/index.htm' class="textBump" target='_blank'>pxlmancer</a> <span class="textDrinkMeAlice textItalic">2014-2019</span></div>
    <span class="textBump">A full drawing/painting app on desktop, a fun fidget toy on mobile.</span>
    <br><span class="textShrink textItalic textName ">Languages - <span class="textBold">JavaScript, JQuery, & PHP</span></span>
    <br>Solo written <span class='textName'>14264</span> lines of JavaScript, ground up only using jquerry's oddness.
    <div class="pppHBar"></div>

    <br><span class="textBoost textBold">Note</span> : <span class="textName">pxlmancer.com</span> is currently having some <span class="textNudge">https certificate</span> issues.  I'll be fixing it soon.
    <br>&nbsp;&nbsp; Please use <a href='https://procstack.github.io/pxlmancer/index.htm' class="textBump" target='_blank'>procstack.github.io/pxlmancer</a> for now.
    <br>&nbsp;&nbsp; But, it may be buggy because I had to convert it from PHP to JS-Only for GitHub Pages.
    
    <br><br><div class="pppHBar"></div>

    <br> On'n'off multi-year project to make a full fledge drawing site with layer support, brush types, vector tools, brush effects (cpu based pixel effects, this was pre-learning about opengl shaders or webgl)
    
    <br>
    <br>
    <div class="procPagesProjectsDescriptionStyle selfCenter">Use the mixing pallet to blend colors together to paint with, then save the pallet by pressing a number key.
      <br>All of which can be saved to a .pxlm file; to store your layers, settings, and pallet swatches!
    </div>
    <div class="procPagesProjectsSpacer"></div>

    <br>&nbsp;&nbsp; Sadly, an update in javascript broke saving images, and I haven't had the time to fix it yet...
    <br>You'll need to drag the image from the "Save Image" screen to a new tab to view and save it.
    <br>But you can easily save your document to a pxlm file, and open it back up to continue working on your project!
    
    <div class="procPagesProjectsSpacer"></div>

    <br>&nbsp;&nbsp; A little tid-bit, <span class='textNudge'>pxlmancer.com</span> is the origin of my '<span class='textNudge'>pxl</span>' namespace for my projects.
    <br>It's my indicator of a codebase with a visual output; such as pxlNav, pxlVisualizer, pxlTextGenerator, etc.
    <br><br>More about pxlmancer.com on <a href='https://imgur.com/gallery/8lSW1' target='_blank'>Imgur</a>!
    
  `,
};