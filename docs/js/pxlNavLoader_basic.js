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

import { pxlNav, pxlNavVersion, VERBOSE_LEVEL, PXLNAV_OPTIONS, ANTI_ALIASING } from './pxlNav.min.js';


// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = VERBOSE_LEVEL.INFO;

// Anti-aliasing level
//   Options are - NONE, LOW, MEDIUM, HIGH
const antiAliasing = ANTI_ALIASING.LOW;

// The Title of your Project
//   This will be displayed on the 
const projectTitle = "pxlNav : Field Env.";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "pxlRooms";

// Current possible rooms - "CampfireEnvironment", "SaltFlatsEnvironment", "FieldEnvironment", "VoidEnvironment"
const bootRoomList = ["FieldEnvironment"];//, "VoidEnvironment"];
const startingRoom = bootRoomList[0];


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



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// -- Below are the initialization and event handling for pxlNav
// --   No need to edit the below code unless you're adding custom event handling

// -- Prepare pxlNav options --

let pxlNavOptions = Object.assign({},PXLNAV_OPTIONS);
pxlNavOptions.verbose = verbose;
pxlNavOptions.antiAliasing = antiAliasing;
pxlNavOptions.pxlRoomRoot = pxlRoomRootPath;


// Create the pxlNav environment manager
const pxlNavEnv = new pxlNav( pxlNavOptions, projectTitle, startingRoom, bootRoomList );

// -- -- --

// Set or Update the loader message
pxlNavEnv.setLoaderPhrases( loaderPhrases );

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