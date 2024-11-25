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

    this.resObjsVis = true;
    this.resBasedObjs = [];
    // this.navBar.init();
  }
  init(){
    this.mainDiv = document.getElementById("procStackGitBlock");
    this.navBar = document.getElementById("gitPageNav");
    this.navBarLinks = [...this.navBar.getElementsByTagName("a")];

    this.resBasedObjs = [...document.getElementsByClassName("squashInLowRes")];
    this.contentParent = document.getElementById("gitPageContentParent");
    let linkList = [...document.getElementById("gitPageNav").children];
    let pageDivs = [...document.getElementById("gitPageContent").children];
    let pageHash = this.getHash();
    

    pageDivs.forEach( (pageDiv)=>{
      this.prepFader(pageDiv);
      this.pageListing[pageDiv.id] = pageDiv;
      if( pageDiv.id == pageHash ){
        this.curPage = pageDiv;
        this.toggleFader( this.curPage, true );
      }else{
        pageDiv.style.display = "none";
      }
    });

    this.navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.getAttribute("pageName");
      linkText = linkText.replace(/(?: |\/|\.|\n)/g, "");
      navLink.addEventListener("click", (e)=>{
        e.preventDefault();
        if( linkText == this.curPage.id ){
          return;
        }
        window.location.hash = linkText;
        this.changePage( linkText );
      });
    });

    window.addEventListener("resize", this.onResize.bind(this));

    // Let the dom settle for a step
    setTimeout( ()=>{
      this.checkNavBarSize();
    });

  }

  // -- -- --

  eventHandler( e ){
    if( e.type == "booted" ){
      this.postLoad();
    }else if( e.type == "shaderEditorVis" ){
      this.toggleMidFader(this.mainDiv, e.value);
    }else if( e.type == "roomChange-Start" ){
      console.log("Room Change Start");
    }else if( e.type == "roomChange-End" ){
      console.log("Room Change End");
    }else if( e.type == "pong" ){
      console.log("Pong!");
    }
  }

  // -- -- --
  
  postLoad(){
    this.toggleFader(this.mainDiv, true);
    
  }

  // -- -- --

  getHash(){
    let hash = window.location.hash;
    hash = hash.replace("#","");
    if( hash == "" ){
      return this.defaultPage;
    }
    return hash;
  }
  onResize(){
    this.checkNavBarSize();
  }
  
  checkNavBarSize(){
    let sw=window.innerWidth;
    let sh=window.innerHeight;

    let buttonWidthAgr = 0;
    this.navBarLinks.forEach( (navLink)=>{
      let btnWidth = navLink.offsetWidth;
      buttonWidthAgr += btnWidth;
    });

    let navBarWidth = this.navBar.offsetWidth * 0.9;
    let navBarThreshold = this.navBar.offsetWidth * 0.6;
    if( this.resObjsVis && buttonWidthAgr > navBarWidth ){
      this.resObjsVis = false;
      this.resBasedObjs.forEach( (obj)=>{
        obj.style.display = "none";
      });
    }else if( !this.resObjsVis && buttonWidthAgr < navBarThreshold ){
      this.resObjsVis = true;
      this.resBasedObjs.forEach( (obj)=>{
        obj.style.display = "block";
      });
    }

    // Adjust menu padding on thin screens
    let targetWidth = 60;
    if( sw < 1000 ){
      let sidePadding = 1.0-Math.max(0.0, (sw * 0.001)*2.0-1.0);
      targetWidth += sidePadding * 40;
    }
    this.navBar.style.width = targetWidth + "vw";
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

  toggleMidFader( obj, vis=false ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( !obj ){
      return;
    }

    if( vis ){
      obj.style.display = "block";
      obj.classList.add("pagesVisMid");
      obj.classList.remove("pagesVisOn");

      this.contentParent.classList.add("gpcpHiddenStyle");
      this.contentParent.classList.remove("gpcpVisibleStyle");
    } else {
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisMid");
      this.contentParent.classList.add("gpcpVisibleStyle");
      this.contentParent.classList.remove("gpcpHiddenStyle");
    }
  }

  changePage( pageName ){
    if( pageName != this.curPage && Object.keys(this.pageListing).includes(pageName) ){
      this.toggleFader(this.curPage, false);
      this.curPage = this.pageListing[pageName];
      this.toggleFader(this.curPage, true);
      this.curPage.parentElement.scrollTop = 0;
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
