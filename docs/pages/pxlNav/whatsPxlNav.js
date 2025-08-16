const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "What's pxlNav?",
  "description": "An overview of the pxlNav library, its features, and how to use it for creating interactive environments in Three.js.",
  "keywords": "pxlNav, Three.js, interactive environments, javascript library, game engine, web development",
  "url": "https://procstack.github.io/pxlNav/Whats_pxlNav.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};
export const pageListingData = {
  'htmlName' : "Whats_pxlNav.htm",
  'name' : "<span class='procPagesHideWhenThin'>What's&nbsp;<span class='textNudge'>pxlNav</span>?</span><span class='procPagesShowWhenThin'>What?</span>",
  'title' : "What's pxlNav?",
  'lastModified' : '2025-03-12',
  'schemaData' : shemaData,
  'description' : 'An overview of the pxlNav library, its features, and how to use it for creating interactive environments in Three.js.',
  'keywords' : 'pxlNav, Three.js, interactive environments, javascript library, game engine, web development',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/whatIs_theOutlet.webp',
      'alt' : 'Showing The Outlet environment in Houdini',
      'style' : 'procPagesImageStyle',
      'caption' : ["Using Houdini as my level editor for <a href='../Outlet.htm' target='_blank' alt='Outlet Environment' class='textBump'>The Outlet</a>"]
    },
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/userDetails.webp',
      'alt' : 'Showing User Details in different CGI programs',
      'style' : 'procPagesImageStyle',
      'caption' : ["Add custom User Details to objects in your 3d modeling software,",
        "Allowing <span class='textNudge'>pxlNav</span> to better understand your FBX file."
      ]
    }
  ],
  'content' : `
    The background of this page is running '<span class="textNudge">pxlNav</span>',
    <br>&nbsp;&nbsp; A javascript package to extend Three.js for more interactive / game like mechanics.

    <br>
    
    <br><span class="textNudge">pxlNav</span> is a player controller + rendering set-up that brings more interactive functionality to Three.js.
    <br>&nbsp;&nbsp; It's basically a wrapper for Three.js, using Three's renderer, character rig + animation features, to create something like a game engine... I guess.
    
    <br>
    <br>
    <br>
    <div class="innerCenter">
      Install it for your web project using NPM
      <div class="textBoldBox">npm -i pxlnav</div>
      <br>
      If you are familiar with GLSL,
      <br>Press the <span class="textBoldBox">Y</span> key to use the <span class="textName">Shader Editor</span> in <span class="textNudge">pxlNav</span>.
    </div>

    <br>
    <br>You can use any 3d modeling software to make interactive environments called <span class="textName">Rooms</span>, making it a little easier to make games/interactive environments.
    
    <br>
    <br>It supports rig + animation fbx files for your character animation, and a simple curve in your scene can act as your camera path ( add another if you want the camera to look somewhere as it's traveling the path ).
    <br>&nbsp;&nbsp; Animated textures by using a second texture, particle effects, FPS navigation, ground collision, obstacles, items, portals, and more.

    <br>
    <br>Lets say, in Maya or Blender, you make a scene, add extra User Detail attributes to your objects to tell <span class="textNudge">pxlNav</span> how to interact with them.
    <div class='textSpacer'></div>
    Giving you the ability in your modeling software to set up-
    <br>&nbsp;&nbsp; Teleporter colliders within scene or between <span class="textName">Rooms</span>, set item pick-ups, ground colliders, animated textures, and more set in your 3d modeling software of choice.
    <div class='textSpacer'></div>
    <br>&nbsp;&nbsp; For customized object coding in javascript, mark objects as 'isScripted' and you can easily access that specific object by name in code.
    <div class='textSpacer'></div>
    <br>&nbsp;&nbsp; Then <span class="textNudge">pxlNav</span> loads your FBX and acompanying javascript file as a <span class="textName">Room</span> that can be portal'ed to if ya wanted.

    
    <br>
    <br>Note : GLTF & GLB using Draco compression is nearly implemented & bug free, added to the next version of pxlNav, v1.0.0
    <br>&nbsp;&nbsp;&nbsp;&nbsp; To be released with support for React & Next and example projects for each.
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; See the <span class="textName">v1.0.0-dev</span> branch for progress.
    <br>
    <br>
  `,
};