// Page Management For Some Git.io Example Site To Show Off pxlNav Cause I Couldn't Come Up With A Better Idea v0.0.1
//  Written by Kevin Edzenga; 2024
//
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
//   Note December 3rd, 2024:
//     Well, this system has turned into a nice little bit of a page manager for my site.
//     Hmmm, perhaps I should have make a pxlPages that could make pxlNav integration easier.
//       But this is a general page manager... eh, whichever.
//
//     I just like I can set css overrides from the page divs themselves;
//      `page-style="divId:className;divId2:className2;[...]"`
//     Marking a div as a page with css overrides like this -
//      `<div name="gitPage" page-id="Repos" page-style="footerBar:repoPage_footerBar;[...]" class="[...]"> [...] </div>`
//     Then set a default class to revert if I want to with -
//      `pages-default-class="footerBar"`
//
//     There is no need for yet another page manager, but I could always use a good bootstrapper for myself,
//       And my blatently ESM ways.
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
    this.runningTimeouts = {};
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
            let curId = pageDiv.getAttribute("page-id");
            this.pageStyleOverrides[ curId ] = this.pageStyleOverrides[ curId ] || {};
            this.pageStyleOverrides[ curId ][ divOverride[0] ] = divOverride[1];
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


    this.setStyleOverrides();

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

  setStyleOverrides(){
    if(!this.curPage){
      return;
    }

    let curPageId = this.curPage.getAttribute("page-id");
    if( this.pageStyleOverrides.hasOwnProperty(curPageId) ){
      let overrideKeys = Object.keys(this.pageStyleOverrides[curPageId]);
      overrideKeys.forEach( (key)=>{
        let curObj = document.getElementById( key );
        if( curObj ){
          if( curObj.hasAttribute("pages-default-class") ){
            let defaultClass = curObj.getAttribute("pages-default-class");
            curObj.classList.remove( defaultClass );
          }
          curObj.classList.add( this.pageStyleOverrides[curPageId][key] );
        }
      });
    }
  }
  
  changePage( pageName, roomName=null, locationName=null ){
    if( pageName != this.curPage && Object.keys(this.pageListing).includes(pageName) ){
      this.toggleFader(this.curPage, false);

      // Remove previous page styles
      if( this.curPage != null ){
        let prevPageId = this.curPage.getAttribute("page-id");
        if( this.pageStyleOverrides.hasOwnProperty(prevPageId) ){
          // Iterate page css overrides and remove them to allow for the new page's styles, if they exist
          let overrideKeys = Object.keys(this.pageStyleOverrides[prevPageId]);
          overrideKeys.forEach( (key)=>{
            let curObj = document.getElementById( key );
            if( curObj ){
              if(curObj.classList.contains( this.pageStyleOverrides[prevPageId][key] )) {
                curObj.classList.remove(this.pageStyleOverrides[prevPageId][key] );
                if( curObj.hasAttribute("pages-default-class") ){
                  let defaultClass = curObj.getAttribute("pages-default-class");
                  curObj.classList.add( defaultClass );
                }
              }
            }
          });
        }
      }

      // Set current page value
      this.curPage = this.pageListing[pageName];

      // Trigger css animation to bring the new page in
      this.toggleFader(this.curPage, true);

      // Apply new page styles
      this.setStyleOverrides();

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
  
  // TODO : So, my dingus of a butt has realized how much access `calc()` in css now has.
  //          One of those things that grew in functionality while I didn't pay attention.
  //        MUCH of this can be handled in purely css now, no javascript needed.
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
    let curId = obj.getAttribute("page-id");
    if( vis ){
      obj.style.display = "block";
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisOff");

      // Check for the display:none timeout & clear it
      let curTimeout = this.runningTimeouts[curId];
      if( curTimeout ){
        clearTimeout(curTimeout);
      }else{
        this.runningTimeouts[curId] = null;
      }
    } else {
      obj.classList.add("pagesVisOff");
      obj.classList.remove("pagesVisOn");

      // Let the page fade out before hiding it
      //   Allow the browser to handle display:none behaviour
      let pageTimout = setTimeout( ()=>{
        obj.style.display = "none";
      }, 800);
      this.runningTimeouts[curId] = pageTimout;
    }
  }

  toggleMidFader( obj, vis=false ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( !obj ){
      return;
    }

    let pageDivsStyles = document.getElementsByName("gitPage");
    if( vis ){
      obj.style.display = "block";
      obj.classList.add("pagesVisMid");
      obj.classList.remove("pagesVisOn");

      pageDivsStyles.forEach( (pageDiv)=>{
        pageDiv.style.maxHeight="0px";
        pageDiv.style.minHeight="0px";
        pageDiv.classList.add("gpcpHiddenStyle");
        pageDiv.classList.remove("gpcpVisibleStyle");
      });
    } else {
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisMid");
      pageDivsStyles.forEach( (pageDiv)=>{
        pageDiv.style.maxHeight = "";
        pageDiv.style.minHeight = "";
        pageDiv.classList.add("gpcpVisibleStyle");
        pageDiv.classList.remove("gpcpHiddenStyle");
      });
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
