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
        "Allowing <span class='textNudge'>pxlNav</span> to better understand your FBX / GLTF file."
      ]
    }
  ],
  'content' : `
    The background of this page is running '<span class="textNudge">pxlNav</span>',
    <br>&nbsp;&nbsp; A javascript package to extend Three.js for more interactive / game like mechanics.

    <br>
    <br>
    <div class="innerCenter textBoost">
      Make your scene in any 3D CGI software
      <br>& use pxlNav to walk through it in your web browser!
    </div>
    <br>
    <br>Set up collision objects, teleporters, animated textures, items to pick up, and more,
    <br>&nbsp;&nbsp; All by adding specific Object Groups and custom User Details to objects in your 3d modeling software.
    <br>&nbsp;&nbsp; ( Maya, Blender, Houdini, Cinema4D, 3DS Max, etc... )
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Any software that can export FBX or GLTF / GLB
    

    <br>
    <br> Then, tell <span class="textNudge">pxlNav</span> to load your scene file as a <span class="textName">Room</span> 
    <br> You'll just drop in to walk around!
    <br> Or be a static camera & teleport to locations you define in your scene file.
    
    <br>
    <br>
    <div class="innerCenter">
      Install it for your web project using NPM
      <div class="textBoldBox" style="margin: 4px;">npm -i pxlnav</div>
      <span class="textBump">Native JavaScript ESM</span>, <span class="textBump">React</span>, & <span class="textBump">Next.js</span>
      <br>examples are included when installed
    </div>

    <br><div class="ppnHBar"></div>
  
    <br>You can use any 3d modeling software to make interactive environments called <span class="textName">Rooms</span>, making it a little easier to make games/interactive environments.
    
    <br>
    <br>It supports rig + animation files for your character animation; and use the Animation State Machine in <span class="textNudge">pxlNav</span> to control which animation plays when.
    <br>
    <br>You can add a simple curve in your scene to act as a camera path,
    <br>&nbsp;&nbsp; Then add another to control the camera's look-at target during the camera path animation.
    <br>
    <br> Sliding & Animated textures by using a second texture, particle effects, FPS navigation, ground collision, obstacles, items, portals, and more.

    <br>
    
    <br><div class="ppnHBar"></div>
  
    <br>Lets say, in Maya or Blender, you make a full scene, with lights and cameras and everything.

    <br>
    <br>You'd want to move certain things to individual groups, like "Camera", "Lights", "Colliders" & "Scene".
    <br>&nbsp;&nbsp; Then for things like instances of trees, rocks, or other objects you want to duplicate, make a group called "Instances" with the base object inside it.
    <br>&nbsp;&nbsp; Then, add an empty null/group with a custom string attribute 'Instance' with the name of the object in the Instances group you want to copy to that spot.
    <br>&nbsp;&nbsp; This also works with using an Object & 'Instance' attribute, it'll clone the object at every vertex of your object.

    <br>
    <br>If you're familiar with shaders for GLSL,
    <br>&nbsp;&nbsp; Press the <span class="textBoldBox">Y</span> key to use the <span class="textName">Shader Editor</span> in <span class="textNudge">pxlNav</span>.
    <br>&nbsp;&nbsp; That way you can easily edit your shader code, while walking around!

    <br>
    <br>You can find more details on the available custom User Detail Attributes in <span class="textNudge">pxlNav</span>'s <a href="../pxlNav-docs" target="_blank" alt="pxlNav Documentation" class="textBump">Documentation</a>.
    
    <br>
    <br>
  `,
};