// ProcStack.Git.io Javascript
//  Written by Kevin Edzenga; 2024
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//   This is an example implementation of `pxlNav` in a project;
//   For `pxlNav` scripting, the entry-point is `./Source/js/pxlNavCore.js`
//

import { pxlNav } from './pxlNavCore.js';

class ProcStackGitPage {
  constructor() {
    // this.navBar = new pxlNav();
    // this.navBar.init();
  }
  init(){
    let pageDivs = [...document.getElementById("gitPageContent").children];
    console.log(pageDivs);
  }
  postLoad(){
    console.log("ProcStackGitPage.postLoad");
  }
}



console.log(pxlNav);


const psGitPages = new ProcStackGitPage();

pxlNav.subscribe("booted", psGitPages.postLoad.bind(psGitPages));

function init(){
  psGitPages.init();
  
}
(()=>{init()})();