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

import { pxlNav, VERBOSE_LEVEL } from './pxlNav.js';
import { ProcstackPages } from './ProcstackPages.js';

// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = VERBOSE_LEVEL.ERROR;

// The Title of your Project
//   This will be displayed on the 
const projectTitle = "ProcStack.git.io";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "./pxlRooms";

// Current possible rooms - "CampfireEnvironment"
const startingRoom = "CampfireEnvironment"; 
const bootRoomList = ["CampfireEnvironment"];//, "SaltFlatsEnvironment"];


// -- -- -- -- --

const pxlNavr = new pxlNav( verbose, projectTitle, pxlRoomRootPath, startingRoom, bootRoomList );

// -- -- -- -- --

const procPages = new ProcstackPages();
pxlNavr.subscribe("booted", procPages.postLoad.bind(procPages));

// -- -- --

function init(){
  procPages.init();

  pxlNavr.bootTimer();
  pxlNavr.init();
  
}
(()=>{init()})();
