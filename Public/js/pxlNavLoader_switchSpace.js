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


// Console logging level
//   Options are - NONE, ERROR, WARN, INFO
const verbose = pxlEnums.VERBOSE_LEVEL.NONE;

// The Title of your Project
//   This will be displayed on the load bar
const projectTitle = "pxlNav : Field Env.";

// pxlRoom folder path, available to change folder names or locations if desired
const pxlRoomRootPath = "../pxlRooms";

// Current possible rooms - "CampfireEnvironment", "SaltFlatsEnvironment", "FieldEnvironment", "VoidEnvironment"
const bootRoomList = ["VoidEnvironment"];//,"FieldEnvironment"];
const startingRoom = bootRoomList[0];

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

// Visual effect for the sky
// Default is `OFF`
//  Options are - OFF, VAPOR
const skyHaze = pxlEnums.SKY_HAZE.VAPOR;



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- //



// -- Below are the initialization and event handling for pxlNav
// --   No need to edit the below code unless you're adding custom event handling

// -- Prepare pxlNav options --

let pxlNavOptions = Object.assign({},pxlOptions);
pxlNavOptions.verbose = verbose;
pxlNavOptions.antiAliasing = antiAliasing;
pxlNavOptions.pxlRoomRoot = pxlRoomRootPath;
pxlNavOptions.staticCamera = enableStaticCamera;
pxlNavOptions.skyHaze = skyHaze;
pxlNavOptions.shadowMapBiasing = shadowMapBiasing;
pxlNavOptions.loaderPhrases = loaderPhrases;



// Create the pxlNav environment manager
const pxlNavEnv = new pxlNav( pxlNavOptions, projectTitle, startingRoom, bootRoomList );


// -- -- --

// <div id="roomToggle" roomToggles="VoidEnvironment:Void Space;FieldEnvironment:Field">Void Space</div>

let switchButton = document.getElementById("roomToggle");
if( switchButton && switchButton.hasAttribute("roomToggles") ){
  let roomValues = switchButton.getAttribute("roomToggles").split(";");
  let roomLabelDict = {};
  roomValues.forEach(curVal => {
    let curPair = curVal.split(":");
    roomLabelDict[curPair[0]] = curPair[1];
  });
  
  switchButton.addEventListener("click", function(){
    let switchButtonObj = document.getElementById("roomToggle");
    if( switchButtonObj && switchButtonObj.hasAttribute("curRoom") ){ 
      let curVal = switchButtonObj.getAttribute("curRoom");
      let nextVal = "";
      let labelKeys = Object.keys(roomLabelDict);
      let curIndex = labelKeys.indexOf(curVal);
      curIndex = (curIndex + 1) % labelKeys.length;
      nextVal = labelKeys[curIndex];
      switchButtonObj.innerText = roomLabelDict[nextVal];
      switchButtonObj.setAttribute("curRoom", nextVal);
      pxlNavEnv.emit( 'warptoroom', nextVal, 'default' );
    }
  });
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