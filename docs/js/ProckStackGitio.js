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

import { pxlNav, pxlNavVersion } from './pxlNav.min.js';
import { ProcPages } from './ProcPages.js';


// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = 0

// The Title of your Project
//   This will be displayed on the 
const projectTitle = "procstack.github.io";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "./pxlRooms";

// Current possible rooms - "CampfireEnvironment"
const startingRoom = "CampfireEnvironment"; 
//const startingRoom = "SaltFlatsEnvironment"; 
const bootRoomList = ["CampfireEnvironment", "SaltFlatsEnvironment"];
//const bootRoomList = ["SaltFlatsEnvironment"];//, "SaltFlatsEnvironment"];


// -- -- -- -- --

// Create the main page manager
const procPages = new ProcPages();
procPages.init();
procPages.setPxlNavVersion(pxlNavVersion);

// Create the pxlNav environment manager
const pxlNavr = new pxlNav( verbose, projectTitle, pxlRoomRootPath, procPages.curRoom, bootRoomList );

// -- -- -- -- --


// Set or Update the loader message
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

pxlNavr.setLoaderPhrases( loaderPhrases );



// -- -- -- -- --


// Subscribe to events emitted from pxlNav for callback handling
//   Non loop - pxlNavObj.subscribe("pxlNavEventNameHere", procPages.functionName.bind(procPages));
const pageListenEvents = [ "booted", "shaderEditorVis", "roomChange-End", "fromRoom" ];
pageListenEvents.forEach( (e)=>{
  pxlNavr.subscribe( e, procPages.eventHandler.bind(procPages) );
});


// -- -- --

// Connect ProcPages' trigger emit function to into `pxlNav`
procPages.bindTriggerEmits( pxlNavr.trigger.bind(pxlNavr) );

// -- -- --


function init(){


  pxlNavr.bootTimer();
  pxlNavr.init();

}
(()=>{init()})();
