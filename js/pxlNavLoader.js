// pxlNav v0.0.18 -  Javascript Launcher
//  Written by Kevin Edzenga; 2024,2025
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//

import { pxlNav, pxlNavVersion, pxlEnums, pxlUserSettings, pxlOptions } from './pxlNav.module.js'; // v0.20


import { OutletEnvironment } from './pxlRooms/OutletEnvironment/OutletEnvironment.js';

// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = pxlEnums.VERBOSE_LEVEL.INFO;

// The Title of your Project
//   This will be displayed on the load bar
const projectTitle = "pxlNav :: The Outlet";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "../js/pxlRooms";

// Asset root path
const pxlAssetRoot = "./js/pxlAssets";

// Show the onboarding screen after the loading bar completes
const showOnboarding = true;

// Set the available rooms here
const OutletRoom = new OutletEnvironment( 'OutletEnvironment', pxlRoomRootPath+"/OutletEnvironment/" );
const bootRoomList = [ OutletRoom ];
const startingRoom = bootRoomList[0];

// Load all scenes during boot, true
// Or only the first `startingRoom` scene, false
const fullLoadPreBoot = false;

// -- -- --

// Set a list of phrases to display during the loading process
//   The loader with randomly pick a phrase from the list
const loaderPhrases = [
  "...chasing the bats from the belfry...",
  "...shuffling the deck...",
  "...checking the air pressure...",
  "...winding the clock...",
  "...tuning the strings...",
  "...ringing the quartz...",
  "...crashing the glasses...",
  "...sharpening the pencils...",
];

// -- -- --

// User settings for the default/initial pxlNav environment
//   These can be adjusted from your `pxlRoom` but easily set defaults here
const userSettings = Object.assign({}, pxlUserSettings);
userSettings['height']['standing'] = 22.5; // Standing height in units; any camera in your room's FBX will override this height once loaded
userSettings['height']['stepSize'] = 4.5; // Max step height in units
userSettings['movement']['scalar'] = 1.1; // Overall movement rate scalar
userSettings['movement']['max'] = 10.0; // Max movement speed
userSettings['movement']['easing'] = 0.75; // Easing rate between Step() calls
userSettings['look']['mobile']['invert'] = true; // Invert the look controls on mobile devices
userSettings['headBounce']['height'] = 0.3; // Bounce magnitude in units
userSettings['headBounce']['rate'] = 0.04; // Bounce rate per Step()
userSettings['headBounce']['easeIn'] = 0.03; // When move key is pressed, the ease into bounce; `bounce * ( boundInf + easeIn )`
userSettings['headBounce']['easeOut'] = 0.95; // When move key is let go, the ease back to no bounce; `bounce * easeOut`
userSettings['jump']['impulse'] = 0.75; // Jump impulse force applied to the player while holding the jump button
userSettings['jump']['holdMax'] = 2.5; // Max influence of holding the jump button on current jump; in seconds
userSettings['jump']['repeatDelay'] = 0.085; // Delay between jumps when holding the jump button
userSettings['gravity']['ups'] = 0.5; // Units per Step() per Step()
userSettings['gravity']['max'] = 18.5; // Max gravity rate

// -- -- --

// Target FPS (Frames Per Second)
//   Default is - PC = 30  -&-  Movile = 30
const targetFPS = {
  'pc' : 60,
  'mobile' : 30
};

// Render Resolution Scale
//   Since mobile devices have a lower resolution, up scaling may help
// Default is - PC = 1.0  -&-  Mobile = 1.0
const renderScale = {
  'pc' : 1.0,
  'mobile' : 1.5
}

// Anti-aliasing level
//   Options are - NONE, LOW, MEDIUM, HIGH
const antiAliasing = pxlEnums.ANTI_ALIASING.LOW;

// Shadow + Edge softness
// Default is `BASIC` - a simple shadow edge
//   Options are - OFF, BASIC, SOFT
//     *Mobile devices are limited to `OFF` or `BASIC` automatically
const shadowMapBiasing = pxlEnums.SHADOW_MAP.SOFT;

// Set camera to static Camera Positions
//   Locations pulled from the 'Camera' group in the pxlRoom's FBX file
// Default is `false`
const enableStaticCamera = false;

// If using static cameras, allow the user to rotate the camera
//  Default is `false`
const allowStaticRotation = false;

// Visual effect for the sky
// Default is `OFF`
//  Options are - OFF, VAPOR
const skyHaze = pxlEnums.SKY_HAZE.VAPOR;

// Collision Detection Grid
//   Collision objects are split into a grid for faster collision detection
//   gridSize - The size of the grid
//   gridReference - Grid scene reference threshold to scale `gridSize`
//                     (Will adjust `gridSize` to better fit your scene geometry detail)
//                     (Use a value less than half your scene; if your scene is 3200 Unit wide, set it 1000-1600)
const collisionScale = {
  'gridSize' : 150,
  'gridReference' : 1000
};



// Find search parameters in the URL for procstack.github.io
//   Not needed for pxlNav
// Note : procPages clears the search parameters on the page
//          So search is lost on page change,
//            Running before procPages.init() is needed
let uriSearch = window.location.search;

// Check hash for fps and renderScale
let searchParams = new URLSearchParams(uriSearch);
let showFPS = searchParams.has('showfps') ? !!parseInt(searchParams.get('showfps')) : false;
if( searchParams.has('fps') ){
  let fps = parseInt(searchParams.get('fps'));
  if( fps > 0 ){
    targetFPS.pc = fps;
    targetFPS.mobile = fps;
  }
}
if( searchParams.has('scale') ){
  let scale = parseFloat(searchParams.get('scale'));
  if( scale > 0 ){
    renderScale.pc = scale;
    renderScale.mobile = scale;
  }
}


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //



// -- Below are the initialization and event handling for pxlNav
// --   No need to edit the below code unless you're adding custom event handling

// -- Prepare pxlNav options --

let pxlNavOptions = Object.assign({},pxlOptions);
pxlNavOptions.verbose = verbose;
pxlNavOptions.fps = targetFPS;
pxlNavOptions.renderScale = renderScale;
pxlNavOptions.userSettings = userSettings;
pxlNavOptions.antiAliasing = antiAliasing;
pxlNavOptions.collisionScale = collisionScale;
pxlNavOptions.pxlRoomRoot = pxlRoomRootPath;
pxlNavOptions.pxlAssetRoot = pxlAssetRoot;
pxlNavOptions.showOnboarding = showOnboarding;
pxlNavOptions.fullLoadPreBoot = fullLoadPreBoot;
pxlNavOptions.staticCamera = enableStaticCamera;
pxlNavOptions.allowStaticRotation = allowStaticRotation;
pxlNavOptions.skyHaze = skyHaze;
pxlNavOptions.shadowMapBiasing = shadowMapBiasing;
pxlNavOptions.loaderPhrases = loaderPhrases;



// Create the pxlNav environment manager
const pxlNavEnv = new pxlNav( pxlNavOptions, projectTitle, startingRoom, bootRoomList );


// -- -- --

// Subscribe to events emitted from pxlNav for callback handling
//   Non loop - pxlNavObj.subscribe("pxlNavEventNameHere", procPages.functionName.bind(procPages));

/* Uncomment to add custom event handling */
/*
const pageListenEvents = [ "booted", "shaderEditorVis", "roomChange-End", "fromRoom" ];
pageListenEvents.forEach( (e)=>{
  pxlNavEnv.subscribe( e, procPages.eventHandler.bind(procPages) );
});
*/

// -- -- --

// Check uri search for `show fps`
if( showFPS ){
  let verboseConsole = document.getElementById('verbErrorConsole');
  let skipper = 0;
  let avgFPS = 0;
  let avgCount = 4;
  let prevTime = 0;
  if( verboseConsole ){
    pxlNavEnv.subscribe( 'render-prep', ( e )=>{
      skipper++;
      let delta = (1 / ((e.value.time-prevTime)));
      prevTime = e.value.time;
      avgFPS += delta;
      if( skipper >= avgCount ){
        avgFPS = (avgFPS / skipper).toFixed(2);
        verboseConsole.innerText = avgFPS;
        avgFPS = 0; // reset for next round
        skipper = 0;
        return;
      }
    });
  }
}

// -- -- --


function pxlNav_init(){
  // Start the timer and initilize pxlNAv
  pxlNavEnv.bootTimer();
  pxlNavEnv.init();

  // -- -- --

  // -- Add pxlNav versioning to the page --
  // Set the version number
  //   Remove this section if you are using this file as a template
  let version = pxlNavVersion;
  if( version[0] != "v" ){
    version = "v" + version;
  }
  let pnv = [...document.getElementsByClassName("pxlNavVersion")];
  pnv.forEach(curPNV => {
    curPNV.innerText = version;
  });
  // -- End of versioning --

}

window.addEventListener('load', function() {
  pxlNav_init();
});