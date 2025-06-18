# What's pxlNav?What?

The background of this page is running 'pxlNav',
    
   A javascript package to extend Three.js for more interactive / game like mechanics.

pxlNav is a player controller + rendering set-up that brings more interactive functionality to Three.js.
    
   It's basically a wrapper for Three.js, using Three's renderer, character rig + animation features, to create something like a game engine... I guess.

      Install it for your web project using NPM
      npm -i pxlnav

      If you are familiar with GLSL,
      
Press the Y key to use the Shader Editor in pxlNav.

You can use any 3d modeling software to make interactive environments called Rooms, making it a little easier to make games/interactive environments.

Lets say, in Maya or Blender, you make a scene, add extra User Detail attributes to your objects to tell pxlNav how to interact with them.

    Giving you the ability in your modeling software to set up-
    
   Teleporter colliders within scene or between Rooms, set item pick-ups, ground colliders, animated textures, and more set in your 3d modeling software of choice.

   For customized object coding in javascript, mark objects as 'isScripted' and you can easily access that specific object by name in code.

   Then pxlNav loads your FBX and acompanying javascript file as a Room that can be portal'ed to if ya wanted.