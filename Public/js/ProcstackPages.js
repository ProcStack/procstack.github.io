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
    this.curPage = null;
    this.defaultPage = "Init";
    this.pageListing = {};
    // this.navBar = new pxlNavr();
    // this.navBar.init();
  }
  init(){
    this.mainDiv = document.getElementById("procStackGitBlock");
    let navBar = document.getElementById("gitPageNav");
    let navBarLinks = [...navBar.getElementsByTagName("a")];
    let linkList = [...document.getElementById("gitPageNav").children];
    let pageDivs = [...document.getElementById("gitPageContent").children];
    let pageHash = this.getHash();

    pageDivs.forEach( (pageDiv)=>{
      this.prepFader(pageDiv);
      this.pageListing[pageDiv.id] = pageDiv;
      if( pageDiv.id == pageHash ){
        this.curPage = pageDiv;
        this.toggleFader( this.curPage, true );
      }
    });

    navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.innerText;
      linkText = linkText.replace(/(?: |\/|\.)/g, "");
      navLink.addEventListener("click", (e)=>{
        e.preventDefault();
        if( linkText == this.curPage.id ){
          return;
        }
        window.location.hash = linkText;
        this.changePage( linkText );
      });
    });

  }
  getHash(){
    let hash = window.location.hash;
    hash = hash.replace("#","");
    if( hash == "" ){
      return this.defaultPage;
    }
    return hash;
  }
  postLoad(){
    this.toggleFader(this.mainDiv, true);
  }
  prepFader( obj ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( obj ){
      obj.classList.add("pagesFader");
      obj.classList.add("pagesVisOff");
    }
  }
  toggleFader( obj, vis=false ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( !obj ){
      return;
    }
    if( vis ){
      obj.style.display = "block";
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisOff");
    } else {
      obj.classList.add("pagesVisOff");
      obj.classList.remove("pagesVisOn");
      setTimeout( ()=>{
        obj.style.display = "none";
      }, 800);
    }
  }
  changePage( pageName ){
    if( pageName != this.curPage && Object.keys(this.pageListing).includes(pageName) ){
      this.toggleFader(this.curPage, false);
      this.curPage = this.pageListing[pageName];
      this.toggleFader(this.curPage, true);
    }
  }
  setPxlNavVersion( version ){
    if( version[0] != "v" ){
      version = "v" + version;
    }
    let pnv = document.getElementById("pxlNavVersion");
    if( pnv ){
      pnv.innerText = version;
    }
    let pnpv = document.getElementById("pxlNavPageVersion");
    if( pnpv ){
      pnpv.innerText = version;
    }
  }
}
