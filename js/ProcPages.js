// Page Management For Some Git.io Example Site To Show Off pxlNav Cause I Couldn't Come Up With A Better Idea v0.0.1
//  Written by Kevin Edzenga; 2024
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//   This is an example implementation of `pxlNav` in a project;
//   For `pxlNav` scripting, the entry-point is `./Source/js/pxlNavCore.js`
//

export class ProcPages {
  constructor() {
    this.mainDiv = null;
    this.curPage = null;
    this.curRoom = null;
    this.curLocation = null;
    this.defaultPage = "Init";
    this.pageListing = {};

    this.resObjsVis = true;
    this.resBasedObjs = [];
    this.triggerEmitFunc = null;
    // this.navBar.init();

    this.pageStyleOverrides = {};
  }
  init(){
    this.mainDiv = document.getElementById("procStackGitBlock");
    this.navBar = document.getElementById("gitPageNav");
    this.navBarLinks = [...this.navBar.getElementsByTagName("a")];

    this.resBasedObjs = [...document.getElementsByClassName("squashInLowRes")];
    this.contentParent = document.getElementById("gitPageContentParent");
    let linkList = [...document.getElementById("gitPageNav").children];
    let pageDivsStyles = document.getElementsByName("gitPage");
    let pageDivs = [...pageDivsStyles];
    let pageHash = this.getHash();
    

    pageDivs.forEach( (pageDiv)=>{
      this.prepFader(pageDiv);

      if( pageDiv.hasAttribute("page-style") ){
        let pageStyle = pageDiv.getAttribute("page-style");
        pageStyle = pageStyle.split(";");
        pageStyle.forEach( (styleStr)=>{
          let divOverride = styleStr.split(":");
          if( divOverride.length == 2 ){
            this.pageStyleOverrides[ pageDiv.id ] = this.pageStyleOverrides[ pageDiv.id ] || {};
            this.pageStyleOverrides[ pageDiv.id ][ divOverride[0] ] = divOverride[1];
          }
        });
      }
      let pageId = null;
      if( pageDiv.hasAttribute("page-id") ){
        pageId = pageDiv.getAttribute("page-id");
      }else{
        pageId = pageDiv.id;
        pageDiv.setAttribute("page-id", pageId);
      }

      this.pageListing[ pageId ] = pageDiv;
      if( pageId == pageHash ){
        this.curPage = pageDiv;
        this.toggleFader( this.curPage, true );
      }else{
        pageDiv.style.display = "none";
      }
    });

    this.navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.getAttribute("pageName");
      let pxlRoomName = navLink.getAttribute("pxlRoomName");
      let pxlCameraView = navLink.getAttribute("pxlCameraView");
      
      linkText = linkText.replace(/(?: |\/|\.|\n)/g, "");

      if( linkText == pageHash ){
        this.curRoom = navLink.getAttribute("pxlRoomName");
        this.curLocation = navLink.getAttribute("pxlCameraView");
      }

      navLink.addEventListener("click", (e)=>{
        e.preventDefault();
        let pageId = this.curPage.getAttribute("page-id");
        if( linkText == pageId ){
          return;
        }
        window.location.hash = linkText;
        this.changePage( linkText, pxlRoomName, pxlCameraView );
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

  bindTriggerEmits( emitFunc ){
    this.triggerEmitFunc = emitFunc;
  }
  unbindTriggerEmits(){
    this.triggerEmitFunc = null;
  }


  // -- -- --
  
  postLoad(){
    this.toggleFader(this.mainDiv, true);
    
  }

  // -- -- --
  
  changePage( pageName, roomName=null, locationName=null ){
    if( pageName != this.curPage && Object.keys(this.pageListing).includes(pageName) ){
      this.toggleFader(this.curPage, false);

      // Remove previous page styles
      if( this.curPage != null ){
        let prevPageId = this.curPage.getAttribute("page-id");
        if( this.pageStyleOverrides.hasOwnProperty(prevPageId) ){
          let overrideKeys = Object.keys(this.pageStyleOverrides[prevPageId]);
          overrideKeys.forEach( (key)=>{
            let curObj = document.getElementById( key );
            if( curObj && curObj.classList.contains( this.pageStyleOverrides[prevPageId][key] )) {
              curObj.classList.remove (this.pageStyleOverrides[prevPageId][key] );
            }
          });
        }
      }

      // Set current page value
      this.curPage = this.pageListing[pageName];

      // Trigger css animation to bring the new page in
      this.toggleFader(this.curPage, true);

      // Apply new page styles
      let curPageId = this.curPage.getAttribute("page-id");
      if( this.pageStyleOverrides.hasOwnProperty(curPageId) ){
        let overrideKeys = Object.keys(this.pageStyleOverrides[curPageId]);
        overrideKeys.forEach( (key)=>{
          this.curPage.style[key] = this.pageStyleOverrides[curPageId][key];
        });
      }

      // Correct the scroll position from previous time on the page
      // TODO: Review; I may want to remove this. It was a fix for when all of the pages were in the same div
      //         Since they've split out, this may not be necessary
      this.curPage.parentElement.scrollTop = 0;
      
      // Set the current room and location
      if(this.triggerEmitFunc && roomName!=null){
        if( locationName == null ){
          locationName = "init";
        }
        
        // Trigger the room change event
        this.triggerEmitFunc( "warpToRoom", roomName, locationName );
      }
    }
  }


  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- //


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
