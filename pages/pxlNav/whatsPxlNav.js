
export const pageListingData = {
  'name' : "What's&nbsp;<span class='textNudge'>pxlNav</span>?",
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/whatIs_theOutlet.jpg',
      'alt' : 'Showing The Outlet environment in Houdini',
      'style' : 'procPagesImageStyle',
      'caption' : ["Using Houdini as my level editor for <a href='Outlet.htm' target='_blank' alt='Outlet Environment' class='textBump'>The Outlet</a>"]
    },
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/userDetails.jpg',
      'alt' : 'Showing User Details in different CGI programs',
      'style' : 'procPagesImageStyle',
      'caption' : ["Add custom User Details to objects in your 3d modeling software,",
        "Allowing <span class='textNudge'>pxlNav</span> to better understand your FBX file."
      ]
    }
  ],
  'content' : `
    The background of this page is running '<span class="textNudge">pxlNav</span>',
    <br>Javascript package to extend Three.js to make it more interactive / game like.
    
    <br><br><span class="textNudge">pxlNav</span> is a player controller + rendering set-up that brings more interactive functionality to Three.js.
    <br>It's basically a wrapper for Three.js, using Three.js's renderer, character rig + animation features, to create something like a game engine... I guess.
    
    <br><br>You can use any 3d modeling software to make interactive environments called <span class="textName">Rooms</span>, making it a little easier to make games/interactive environments.
    
    <br><br>Lets say, in Maya or Blender, you make a scene, add extra User Detail attributes to your objects to tell <span class="textNudge">pxlNav</span> how to interact with them.
    <br>Giving you the ability in your modeling software to set up-
    <br>Teleporter colliders within scene or between <span class="textName">Rooms</span>, set item pick-ups, ground colliders, animated textures, and more set in your 3d modeling software of choice.
    <br>For customized object coding in javascript, mark objects as 'isScripted' and you can easily access that specific object by name in code.
    <br>Then <span class="textNudge">pxlNav</span> loads your FBX and acompanying javascript file as a <span class="textName">Room</span> that can be portal'ed to if ya wanted.
  `,
};