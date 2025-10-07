# What's pxlNav?What?

The background of this page is running 'pxlNav',
    
   A javascript package to extend Three.js for more interactive / game like mechanics.

      Make scenes in any 3d CGI software,
      
& use pxlNav to walk through it in a browser!

Set up collision objects, teleporters, animated textures, items to pick up, and more,
    
   All by adding specific Object Groups and custom User Details to objects in your 3d modeling software.
    
   ( Maya, Blender, Houdini, Cinema4D, 3DS Max, etc... )
    
     Any software that can export FBX or GLTF / GLB

 Then, tell pxlNav to load your scene file as a Room 
    
 You'll just drop in to walk around!
    
 Or be a static camera & teleport to locations you define in your scene file.

      Install it for your web project using NPM
      npm -i pxlnav

      Native JavaScript ESM, React, & Next.js
      
examples are included when installed

You can use any 3d modeling software to make interactive environments called Rooms, making it a little easier to make games/interactive environments.

It supports rig + animation files for your character animation; and use the Animation State Machine in pxlNav to control which animation plays when.

You can add a simple curve in your scene to act as a camera path,
    
   Then add another to control the camera's look-at target during the camera path animation.

 Sliding & Animated textures by using a second texture, particle effects, FPS navigation, ground collision, obstacles, items, portals, and more.

Lets say, in Maya or Blender, you make a full scene, with lights and cameras and everything.

You'd want to move certain things to individual groups, like "Camera", "Lights", "Colliders" & "Scene".
    
   Then for things like instances of trees, rocks, or other objects you want to duplicate, make a group called "Instances" with the base object inside it.
    
   Then, add an empty null/group with a custom string attribute 'Instance' with the name of the object in the Instances group you want to copy to that spot.
    
   This also works with using an Object & 'Instance' attribute, it'll clone the object at every vertex of your object.

If you're familiar with shaders for GLSL,
    
   Press the Y key to use the Shader Editor in pxlNav.
    
   That way you can easily edit your shader code, while walking around!

You can find more details on the available custom User Detail Attributes in pxlNav's [Documentation](../pxlNav-docs).