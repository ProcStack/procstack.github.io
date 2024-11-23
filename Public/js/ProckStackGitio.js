// ProcStack.Git.io Javascript
//  Written by Kevin Edzenga; 2024
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//   This is an example implementation of `pxlNav` in a project;
//     Tieing in `ProcstackPages` to manage the pages of the site,
//       Listening to / triggering events on `pxlNav`
//   For `pxlNav` scripting, the entry-point is `./Source/js/pxlNavCore.js`
//

import { pxlNav, pxlNavVersion } from './pxlNav.js';
import { ProcstackPages } from './ProcstackPages.js';


// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = 0

// The Title of your Project
//   This will be displayed on the 
const projectTitle = "procstack.git.io";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "./pxlRooms";

// Current possible rooms - "CampfireEnvironment"
const startingRoom = "CampfireEnvironment"; 
const bootRoomList = ["CampfireEnvironment"];//, "SaltFlatsEnvironment"];


// -- -- -- -- --


// Create the pxlNav environment manager
const pxlNavr = new pxlNav( verbose, projectTitle, pxlRoomRootPath, startingRoom, bootRoomList );


// -- -- -- -- --


// Create the main page manager
const procPages = new ProcstackPages();


// -- -- -- -- --


// Subscribe to events emitted from pxlNav for callback handling
//   Non loop - pxlNavObj.subscribe("pxlNavEventNameHere", procPages.functionName.bind(procPages));
const pageListenEvents = [ "booted", "shaderEditorVis", "roomChange-End", "fromRoom" ];
pageListenEvents.forEach( (e)=>{
  pxlNavr.subscribe( e, procPages.eventHandler.bind(procPages) );
});


// -- -- --


function init(){
  procPages.init();
  procPages.setPxlNavVersion(pxlNavVersion);

  pxlNavr.bootTimer();
  pxlNavr.init();

}
(()=>{init()})();
