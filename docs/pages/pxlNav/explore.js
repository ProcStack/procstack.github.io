const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Explore",
  "description": "Explore the Outlet environment, a water-side area with a lighthouse and coastal plant life.",
  "keywords": "pxlNav, explore, outlet, lighthouse, coastal environment, Three.js, interactive environments",
  "url": "https://procstack.github.io/pxlNav/Explore.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "Explore.htm",
  'name' : 'Explore',
  'title' : 'Explore in the Outlet',
  'lastModified' : '2025-03-12',
  'schemaData' : shemaData,
  'description' : 'Explore the Outlet environment, a water-side area with a lighthouse and coastal plant life.',
  'keywords' : 'pxlNav, explore, Outlet, interactive environment, Three.js, web development',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/pxlNav_The-Outlet_2025-3-12_coastline.webp',
      'href' : '../Outlet.htm',
      'alt' : 'The coastline of the Outlet',
      'style' : 'procPagesImageStyle',
      'caption' : ["An overlook of the Outlet"]
    
    },
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/pxlNav_TheOutlet_2025-03-12_lightHouse_mobile.webp',
      'href' : '../Outlet.htm',
      'alt' : 'The lighthouse at the Outlet',
      'style' : 'procPagesImageStyle',
      'caption' : ["Mobile controls; they expand when dragged out"]
    },
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/pxlNav_The-Outlet_2025-3-12_spawn.webp',
      'href' : '../Outlet.htm',
      'alt' : 'The Outlets spawn location',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/pxlNav_The-Outlet_2025-3-12_dockBarrels.webp',
      'href' : '../Outlet.htm',
      'alt' : 'Overview of the foothills next to the Outlet',
      'style' : 'procPagesImageStyle'
    }
  ],
  'contentStyle' : [ 'procPagesCenterContent' ],
  'content' : `
    <div class="innerCenter" style="padding : 1.5em 0px 0px 0px;">
      <span class="textBump">pxlNav Example :: <a href="../Outlet.htm" target="_blank" alt="Outlet Environment" class="textBump">The Outlet</a></span>

      <br>
      <br>Run around in this water side environment,
      <br>A water-way with a lighthouse & coastal plant life.

      <br>
      <br><span class="textBold">On Mobile</span>, your <span class="textBoldBox">Left</span> thumbstick is <span class="textNudge">Movement</span>
      <br>While your <span class="textBoldBox">Right</span> thumbstick is <span class="textNudge">Look / Rotation</span>
      <br>Tap the <span class="textBoldBox">Upper Half</span> of the screen to <span class="textNudge">Jump</span>

      <div class='textSpacer'></div>
      
      <br><span class="textBold">On PC</span>, use <span class="textBoldBox">WASD</span> <span class="textNudge">or</span> <span class="textBoldBox">Arrow</span> keys to <span class="textNudge">Move</span>
      <div class="textSpacer"></div>
      <span class="textBoldBox">Left Click & Drag</span> <span class="textNudge">or</span> <span class="textBoldBox">Right Click Toggle</span>
      <br>With your <span class="textNudge">mouse</span> <span class="textNudge">to</span> <span class="textNudge">Look</span> around
      <div class="textSpacer"></div>
      <span class="textBoldBox">Space</span> to <span class=" ">Jump</span> <span class="textNudge">- & -</span> <span class="textBoldBox">Shift</span> to <span class="textBump">Run</span>
      
      
      <div class='textSpacer'></div>
      <br>Press the <span class="textBoldBox">P</span> key <span class="textNudge">to</span> <span class="textNudge">pause</span> the system
      <br>Tap the <span class="textBoldBox">Y</span> key <span class="textNudge">to</span> open the <span class="textName">Shader Editor</span>

      
      <div class='textSpacer'></div>
      Bump <span class="textBoldBox">G</span> to open <span class="textName">Graphics</span> settings
      <br>Nudge <span class="textBoldBox">H</span> for the <span class="textName">Help</span> menu
      <br>Bop <span class="textBoldBox">I</span> to squeek an <span class="textName">Info</span> screen
      <br>
      <br>
    </div>
  `
};