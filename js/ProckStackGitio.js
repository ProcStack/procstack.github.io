// ProcStack.Git.io Javascript
//  Written by Kevin Edzenga; 2024
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//   This is an example implementation of `pxlNav` in a project;
//     Tieing in `ProcPages` to manage the pages of the site,
//       Listening to / triggering events on `pxlNav`
//   For `pxlNav` scripting, the entry-point is `./Source/js/pxlNavCore.js`
//

import { pxlNav, pxlNavVersion, pxlEnums, pxlUserSettings, pxlOptions } from './pxlNav.esm.js';
import { ProcPages } from './ProcPages.js';
import { PageMetaDataObjects } from './PageMetaData.js';
import { BlogManager } from './BlogManager.js';


// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = pxlEnums.VERBOSE_LEVEL.ERROR;


// The Title of your Project
//   This will be displayed on the 
const projectTitle = "procstack.github.io";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "./pxlRooms";

// Asset root path
const pxlAssetRoot = "./pxlAssets";

// Show the onboarding screen after the loading bar completes
const showOnboarding = false;

// Current possible rooms - "CampfireEnvironment", "SaltFlatsEnvironment"
const bootRoomList = ["CampfireEnvironment", "SaltFlatsEnvironment"];

// -- -- --

// Set or Update the loader message
//   This will appear under the loader bar on the first screen
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
userSettings['height']['standing'] = 1.75; // Standing height in units; any camera in your room's FBX will override this height once loaded
userSettings['height']['stepSize'] = 5; // Max step height in units
userSettings['movement']['scalar'] = 1.0; // Overall movement rate scalar
userSettings['movement']['max'] = 10.0; // Max movement speed
userSettings['movement']['easing'] = 0.55; // Easing rate between Step() calls
userSettings['headBounce']['height'] = 0.3; // Bounce magnitude in units
userSettings['headBounce']['rate'] = 0.025; // Bounce rate per Step()
userSettings['headBounce']['easeIn'] = 0.03; // When move key is pressed, the ease into bounce; `bounce * ( boundInf + easeIn )`
userSettings['headBounce']['easeOut'] = 0.95; // When move key is let go, the ease back to no bounce; `bounce * easeOut`
userSettings['jump']['impulse'] = 0.75; // Jump impulse force applied to the player while holding the jump button
userSettings['jump']['holdMax'] = 2.85; // Max influence of holding the jump button on current jump; in seconds
userSettings['jump']['repeatDelay'] = 0.08; // Delay between jumps when holding the jump button
userSettings['gravity']['UPS'] = 0.3; // Units per Step() per Step()
userSettings['gravity']['Max'] = 15.5; // Max gravity rate

// -- -- --

// Target FPS (Frames Per Second)
//   Default is - PC = 30  -&-  Movile = 30
const targetFPS = {
  'PC' : 60,
  'Mobile' : 30
};

// Anti-aliasing level
//   Options are - NONE, LOW, MEDIUM, HIGH
const antiAliasing = pxlEnums.ANTI_ALIASING.LOW;

// Shadow edge softness
//   Options are - OFF, BASIC, SOFT
//     *Mobile devices are limited to `OFF` or `BASIC` automatically
const shadowMapBiasing = pxlEnums.SHADOW_MAP.SOFT;

// Set camera to static Camera Positions
//   Locations pulled from the 'Camera' group in the pxlRoom's FBX file
const enableStaticCamera = true;

// Visual effect for the sky
//  Options are - OFF, VAPOR
const skyHaze = pxlEnums.SKY_HAZE.VAPOR;

// Collision Detection Grid
//   Collision objects are split into a grid for faster collision detection
//   gridSize - The size of the grid
//   gridReference - Grid scene reference threshold to scale `gridSize`
const collisionScale = {
  'gridSize' : 100,
  'gridReference' : 1000
};


// -- -- -- -- --

// Create the main page manager
//  - Not related to pxlNav -
const procPages = new ProcPages();
// Set the Meta Data per page
//   Page changes will update the meta data automatically if the page is in the list
procPages.setPageMetaData( PageMetaDataObjects );
procPages.init();

// Trigger DOM updates of the pxlNav version displays on page
procPages.setPxlNavVersion(pxlNavVersion);

if (window.location.hash !== "#Blog") {
  procPages.hidePage("Blog");
}

// -- -- --

// Build procstack.github.io blog entries
//  - Not related to pxlNav -
var blogEntryListing = document.getElementById('blogEntryListing');
var blogEntryContent = document.getElementById('blogEntryContent');
const procBlog = new BlogManager( blogEntryListing, blogEntryContent );
procBlog.init();
procBlog.build();
procBlog.showEntry(-1);


// -- -- -- -- --

let pxlNavOptions = Object.assign({},pxlOptions);
pxlNavOptions.verbose = verbose;
pxlNavOptions.fps = targetFPS;
pxlNavOptions.userSettings = userSettings;
pxlNavOptions.antiAliasing = antiAliasing;
pxlNavOptions.collisionScale = collisionScale;
pxlNavOptions.pxlRoomRoot = pxlRoomRootPath;
pxlNavOptions.pxlAssetRoot = pxlAssetRoot;
pxlNavOptions.showOnboarding = showOnboarding;
pxlNavOptions.staticCamera = enableStaticCamera;
pxlNavOptions.skyHaze = skyHaze;
pxlNavOptions.shadowMapBiasing = shadowMapBiasing;
pxlNavOptions.loaderPhrases = loaderPhrases;

// Create the pxlNav environment manager
const pxlNavEnv = new pxlNav( pxlNavOptions, projectTitle, procPages.curRoom, bootRoomList );




// -- -- -- -- --


// Subscribe to events emitted from pxlNav for callback handling
//   Non loop - pxlNavObj.subscribe("pxlNavEventNameHere", procPages.functionName.bind(procPages));
const pageListenEvents = [ "booted", "shaderEditorVis", "roomChange-End", "fromRoom" ];
pageListenEvents.forEach( (e)=>{
  pxlNavEnv.subscribe( e, procPages.eventHandler.bind(procPages) );
});


// -- -- --

// Connect ProcPages' trigger emit function to into `pxlNav`
procPages.bindTriggerEmits( pxlNavEnv.trigger.bind(pxlNavEnv) );

// -- -- --


function init(){

  // Start the timer and initilize pxlNAv
  pxlNavEnv.bootTimer();
  pxlNavEnv.init();

}
(()=>{init()})();
