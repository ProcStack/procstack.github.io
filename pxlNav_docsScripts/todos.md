// This is just a dump file to clean up `pxlNav.js`
//   Relevence must be reviewed, as its 2 years old


// TODO; June 26th, 2022 -
/*

| Reformat Class Dependencies
  _Current dependencies are maintained as direct links to classes
     Should be requesting throughput from parent classes
  _This level of dependency breaks all sense of modular class development!!
  _This pxlNav file should exist as the entry point to all classes.
     The class requests should be handled through event emits, callbacks, or simply a method passing the class' request for a response
| GUI callbacks arn't callbacks and some cases use eval() instead of a _callback array or new Function() creation
| GUI div/span builds are currently hardcoded or limited to this. class functions
  _Update GuiDraws to a base class and extended upon by the needs of the project with requires/imports and supers
| CTA iframe execution should be derived from a server side + scene file value set per clickable object
  _Currently any CTA is hardcoded, which should be built at a Room or Subroom level
  _Server side data should be able to set these CTA callbacks / dictionary values
| GUI Loader should be moved to stand alone class, imported, and created
  _Don't have it auto generate in file. May be need for additional loading screens
| Set FBX loader promise to actually control final loading of Loading Bar progress
  _Scene objects should be visible before bar disappears and onboarding begins
| There are an awful lot of listeners which could be onClick, onHover, onMouseOver, onMouseOut, etc.

*/

// TODO; December 22th, 2021 -
//   (Retaining 12-22-21 for persistance)
/*
Classes Classes Classes Classes
https://www.youtube.com/watch?v=rRm0NDo1CiY

| Quick / Mid
  _Walking Hiccup seems to be from a cap check after given time?
  _Use Hardware Performance to elect Vector Value Easing where possible; QualityController Class
    -Camera movement, button release, easing
  _Motion Blur Pass
    -Uncomment, check working status
    -Include in blurComposer with the box blur pass
      
  _Controller Module
    -User input current/prev values
    -Positional / Mouse offsets
  
  _Scene Determined
    -Draw Style; Post Processes
  _Ray Caster Class
    -Finish the Bary Caster Returner
    -Handle Object Sets; collider axis checking; Room Oriented
    
  _Move more "response" based event functions to a subscription based exicution
    -Custom listeners or object/function array
    
| Longer / Time Consuming
  _Asset & Item Scene should include a default void scene; Voids
    -This is NOT an interactive void
    -This is Loading Screen / Room Crashed / Purgatory

  _Consolidate the user data dang it!
    -Gravity Rates and Items in User
    -Height and Grav Influence is in Camera
    -Name and Id set from Socket
    
    
  _Create an Item Class; Item Types in Extends
    -Limited? Forever? When in Possesion Only? (Droppable Items)
    -Timer / Count Down, Init & Cleanup
    -Target Object to Influence; User In Most Cases
    -User Object Known All Known Items; Active Item Objects
    -Add to Item Iterator on Step
  -Allow Items to influence non User Objects
  _Move Visual Effect Passes to a Class; Lizard King, Substrate, Major Tom
    -Allow for Prep, Load, and Unload of Pass' Active Status
      ie; Substrate needs to clear buffers on active state change
      
  _Split up camera.js into Extended Classes
    -Base Class; It's a camera... Move Rotate
    -User Movement Influence
    -Network Updates, see below vvv
  _User-Camera Network Updates should be handled in Networking Classes
  _Load local FBX as Scene
    ? Read from local disc after open FBX ??
    
| Niceties
  _Generate Shader On Selected; button
    -Make New Shader; Default Vert Frag
    -Find connected textures on Diffuse and Transparency
    -Interactive Selection; Item Highlight
      Prob just dupe, scale up, yellow mtl, draw inside
      
  _Change Loader / Help / Hud Graphics & Style
  _Change Settings Menu Graphics & Style
      
  _Dynamic File Loads / Unloads / Clean Up
    -Part of this code is in Void's Express-Server
    -Socket response file request
    -Will remove dependency on set values on boot
  _Memory Leak Monitor; Device.js
    -Check dict entries from "this" object, scene usage, etc. on a random basis

  _FBX Exporter
    -Store FBX, create FBX for download
    -Items; Position changes, values inf
    -User Data; Colliders, Clickables, Hoverables
*/