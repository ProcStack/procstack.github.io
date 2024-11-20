// Page Management For Some Git.io Example Site To Show Off pxlNav Cause I Couldn't Come Up With A Better Idea v0.0.1
//  Written by Kevin Edzenga; 2024
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//   This is an example implementation of `pxlNav` in a project;
//   For `pxlNav` scripting, the entry-point is `./Source/js/pxlNavCore.js`
//

export class ProcstackPages {
  constructor() {
    this.mainDiv = null;
    // this.navBar = new pxlNavr();
    // this.navBar.init();
  }
  init(){
    let pageDivs = [...document.getElementById("gitPageContent").children];
    this.mainDiv = document.getElementById("procStackGitParent");
  }
  postLoad(){
    this.toggleFader(true);
  }
  toggleFader( vis=false ){
    if( vis ){
      this.mainDiv.classList.add("visOn");
      this.mainDiv.classList.remove("visOff");
    } else {
      this.mainDiv.classList.add("visOff");
      this.mainDiv.classList.remove("visOn");
    }
  }
}
