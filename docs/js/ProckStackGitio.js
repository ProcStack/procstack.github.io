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

import { pxlNav, pxlNavVersion, pxlEnums, pxlOptions } from './pxlNav.esm.js';
import { ProcPages } from './ProcPages.js';
import { BlogManager } from './BlogManager.js';


// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = pxlEnums.VERBOSE_LEVEL.ERROR;


// The Title of your Project
//   This will be displayed on the 
const projectTitle = "procstack.github.io";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "./pxlRooms";

// Current possible rooms - "CampfireEnvironment", "SaltFlatsEnvironment"
const startingRoom = "CampfireEnvironment"; 
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




// -- -- -- -- --

// Create the main page manager
//  - Not related to pxlNav -
const procPages = new ProcPages();
procPages.init();
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
pxlNavOptions.antiAliasing = antiAliasing;
pxlNavOptions.staticCamera = enableStaticCamera;
pxlNavOptions.pxlRoomRoot = pxlRoomRootPath;
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
