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
    this.metaDataObjects = {};

    this.navBarLinks = [];
    this.navBarObjs = {};
    this.pageDisplayURL = [];
    this.verifiedPages = {};
    this.toggleDomEvents = {};
    this.resObjsVis = true;
    this.resBasedObjs = [];
    this.triggerEmitFunc = null;
    // this.navBar.init();

    this.lazyLoadObjs = [];
    this.pageStyleOverrides = {};
    this.runningTimeouts = {};

    this.domEventStates = {
      'ToggleDOM' : false,
    };
  }

  // TODO : Update to support Blog post loading
  hashListener() {
    let tmpThis = this;
    /*window.addEventListener("hashchange", (e) => {
      let newHash = this.getHash();
      if( newHash != this.curPageName){
        if( newHash == "Blog"){
          this.showPage("Blog");
        }
        this.changePage(newHash);
      }
    });*/
  }

  domContentListener(){
    let tmpThis = this;
    document.addEventListener("DOMContentLoaded", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get('redirect');
    
      if (redirectPath) {
        // Extract the page name
        const pageName = redirectPath.replace('/', '').replace('.htm', '');
        
        // Navigate to the appropriate page
        this.changePage(pageName);
      }
    });

    // Check for forward-back history navigation
    window.addEventListener("popstate", (e) => {
      let newPage = this.getPageURL();
      if( newPage != this.curPageName ){

        // Swap page content
        this.changePage(newPage);

        // Run page theming and callback functions
        if( this.pageListing.hasOwnProperty(newPage) ){
          this.curPage = this.pageListing[newPage]["obj"];
          this.postLoad();
        }
      }
    });

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

  init(){
    this.mainDiv = document.getElementById("procStackGitBlock");
    this.navBar = document.getElementById("gitPageNav");
    this.navBarLinks = [...this.navBar.getElementsByTagName("a")];

    this.navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.getAttribute("page-name");
      this.navBarObjs[linkText] = navLink;
    });

    this.resBasedObjs = [...document.getElementsByClassName("squashInLowRes")];
    this.contentParent = document.getElementById("gitPageContentParent");
    let pageDivsStyles = document.getElementsByName("gitPage");
    let pageDivs = [...pageDivsStyles];

    // Gather verified pages before URL state changes based on query params
    pageDivs.forEach( (pageDiv)=>{
      let pageId = null;
      if( pageDiv.hasAttribute("page-id") ){
        pageId = pageDiv.getAttribute("page-id");
      }else{
        pageId = pageDiv.id;
        pageDiv.setAttribute("page-id", pageId);
      }

      if( pageDiv.hasAttribute("page-url") ){
        pageId = pageDiv.getAttribute("page-url");
      }
        
      this.verifiedPages[ pageId.toLocaleLowerCase() ] = pageId;
    });

    // Rectify the URL state and set the current page
    let pageURL = this.getPageURL();
    
    // Find the lazy load elements
    this.findLazyLoadElements();

    // Find the dom user clickable actions
    this.findDomUserEvents();


    // Prep the page divs
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

      let pageId = pageDiv.getAttribute("page-id");
      this.pageListing[ pageId ] = {};
      this.pageListing[ pageId ]["obj"] = pageDiv;
      this.pageListing[ pageId ]["room"] = null;
      this.pageListing[ pageId ]["view"] = null;
      this.pageListing[ pageId ]["theme"] = null;
      if( pageId == pageURL ){
        this.curPageName = pageId;
        this.curPage = pageDiv;
        this.toggleFader( this.curPage, true );
      }else{
        pageDiv.style.display = "none";
      }

    });

    this.navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.getAttribute("page-name");
      let pageTheme = navLink.getAttribute("page-theme");
      let pxlRoomName = navLink.getAttribute("pxlRoomName");
      let pxlCameraView = navLink.getAttribute("pxlCameraView");
      if( !this.pageListing.hasOwnProperty(linkText) ){
        return;
      }


      this.pageListing[ linkText ]["room"] = pxlRoomName;
      this.pageListing[ linkText ]["view"] = pxlCameraView;
      this.pageListing[ linkText ]["theme"] = pageTheme;
      
      linkText = linkText.replace(/(?: |\/|\.|\n)/g, "");

      if( linkText == pageURL ){
        this.curRoom = navLink.getAttribute("pxlRoomName");
        this.curLocation = navLink.getAttribute("pxlCameraView");
      }

      navLink.addEventListener("click", (e)=>{
        e.preventDefault();
        let curPageId = this.curPage.getAttribute("page-id");
        if( linkText == curPageId ){
          return;
        }
        this.changePage( linkText, pxlRoomName, pxlCameraView );
      });

    });

    window.addEventListener("resize", this.onResize.bind(this));

    this.updateMetaData( pageURL );

    this.setStyleOverrides();
    this.hashListener();
    this.domContentListener();

    // Let the dom settle for a step
    setTimeout( ()=>{
      this.checkNavBarSize();
    });

  }

  // -- -- --

  // Set browser theme if 'pageTheme' exists on the nav bar link
  setBrowserTheme( theme ){
    if( !theme ){
      document.querySelector("meta[name='theme-color']").removeAttribute("content");
      return;
    }
    document.querySelector("meta[name='theme-color']").setAttribute("content", theme );
  }
  
  // -- -- --

  findLazyLoadElements(){
    let lazyLoadObjs = [...document.getElementsByClassName("lazyLoad")];
    lazyLoadObjs.forEach( (lazyObj)=>{
      let lazySrc = lazyObj.getAttribute("ll-src");
      let lazyThumb = lazyObj.getAttribute("ll-thumb");
      let lazyWidth = lazyObj.getAttribute("ll-width");
      let lazyHeight = lazyObj.getAttribute("ll-height");
      let lazyAlt = lazyObj.getAttribute("alt");
      let lazyClass = lazyObj.getAttribute("class");
      lazyClass = lazyClass.split(" ");
      lazyClass = lazyClass.filter( (c)=>{ return c != "lazyLoad"; });

      // Create the placeholder div
      let placeholder = document.createElement('div');
      placeholder.innerHTML = "&lt; Click to Play &gt;";
      placeholder.classList.add('lazyLoadPlaceholder');
      placeholder.style.aspectRatio = lazyWidth+"/"+lazyHeight;
      lazyClass.forEach( (c)=>{ placeholder.classList.add(c); });
      if( lazyThumb ){
        placeholder.style.backgroundImage = "url('"+lazyThumb+"')";
      }

      // Add click event listener to the placeholder
      placeholder.addEventListener('click', () => {
        let img = new Image();
        img.src = lazySrc;
        img.width = lazyWidth;
        img.height = lazyHeight;
        img.alt = lazyAlt;
        lazyClass.forEach( (c)=>{ img.classList.add(c); });
        img.onload = () => {
          lazyObj.innerHTML = "";
          lazyObj.appendChild(img);
        };
        // Remove the placeholder after the image starts loading
        lazyObj.innerHTML = "";
        lazyObj.appendChild(img);
      });

      // Append the placeholder to the lazyObj
      lazyObj.appendChild(placeholder);
    });
  }

  // -- -- --
  

  findDomUserEvents(){
    let toggleDomObjs = [...document.getElementById("gitPageToggleDOM").children];
    toggleDomObjs.forEach( (toggleLink)=>{
      let domEventType = toggleLink.getAttribute("pageEvent");
      if( !this.toggleDomEvents.hasOwnProperty(domEventType) ){
        this.toggleDomEvents[domEventType] = {};
      }
      
      // Toggle event obj value to display when value is 1:true / 0:false
      let domEventValue = parseInt( toggleLink.getAttribute("pageValue") );
      // Flip it from 1 to true, 0 to false
      domEventValue = !!domEventValue;
      
      if( domEventValue ){
        this.toggleDomEvents[domEventType]["on"] = toggleLink;
      }else{
        this.toggleDomEvents[domEventType]["off"] = toggleLink;
      }
      if( domEventValue == this.domEventStates[domEventType] ){
        toggleLink.style.display = "none";
      }else{
        toggleLink.style.display = "";//"block";
      }
    });
    
    let toggleDomKeys = Object.keys(this.toggleDomEvents);
    toggleDomKeys.forEach( (key)=>{
      let curObj = this.toggleDomEvents[key];
      if( curObj.hasOwnProperty("on") && curObj.hasOwnProperty("off") ){
        curObj["on"].addEventListener("click", (e)=>{
          this.toggleDomEvents[key]["on"].style.display = "none";
          this.toggleDomEvents[key]["off"].style.display = "block";
          this.toggleMidFader( this.mainDiv, true );
        });
        curObj["off"].addEventListener("click", (e)=>{
          this.toggleDomEvents[key]["off"].style.display = "none";
          this.toggleDomEvents[key]["on"].style.display = "block";
          this.toggleMidFader( this.mainDiv, false );
        });
      }
    });
  }

  // -- -- --
  
  triggerDomEvent( eventType, value ){
    if( this.toggleDomEvents.hasOwnProperty(eventType) ){
      let curObj = this.toggleDomEvents[eventType];
      if( curObj.hasOwnProperty("on") && curObj.hasOwnProperty("off") ){
        if( value ){
          curObj["on"].style.display = "none";
          curObj["off"].style.display = "block";
        }else{
          curObj["off"].style.display = "none";
          curObj["on"].style.display = "block";
        }
      }
    }
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
    let curPageId = this.curPage.getAttribute("page-id");
    if( this.pageListing.hasOwnProperty(curPageId) ){
      let curRoom = this.pageListing[curPageId]["room"];
      let curView = this.pageListing[curPageId]["view"];

      this.setBrowserTheme( this.pageListing[curPageId]["theme"] );

      // Trigger pxlNav room warp
      this.triggerEmitFunc( "warpToRoom", curRoom, curView );
    }

    // Show the gui
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

  setPageMetaData( metaData ){
    let metaDataMerge = Object.assign({}, this.metaDataObjects, metaData);
    this.metaDataObjects = metaDataMerge;
  }

  updateMetaData( pageName ){
    if( this.metaDataObjects.hasOwnProperty( pageName ) ){
      let pageMetaData = this.metaDataObjects[ pageName ];
      let metaObjs = pageMetaData.metaTagList;
      if( metaObjs != null ){
        let metaKeys = Object.keys(metaObjs);
        metaKeys.forEach( (metaTags)=>{
          let curMetaTags = metaObjs[metaTags];
          curMetaTags.forEach( (tag)=>{
            if( tag == "title" ){
              document.title = pageMetaData[metaTags];
              return;
            }
            let curMeta = document.querySelector("meta[name='"+tag+"']");
            if( curMeta ){
              curMeta.setAttribute("content", pageMetaData[metaTags]);
            }else{
              let newMeta = document.createElement("meta");
              newMeta.setAttribute("name", tag);
              newMeta.setAttribute("content", pageMetaData[metaTags]);
              document.head.appendChild(newMeta);
            }
          });
        });
      }
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

      if( this.domEventStates.ToggleDOM ){
        this.toggleMidFader( this.mainDiv, false );
        this.triggerDomEvent("ToggleDOM", false);
      }

      // Set current page value
      this.curPageName = pageName;
      this.curPage = this.pageListing[pageName]["obj"];

      // Update URL page display & history state
      this.shiftHistoryState( pageName );

      // Update Meta Data
      this.updateMetaData( pageName );

      // Set the browser theme ( also meta data )
      this.setBrowserTheme( this.pageListing[pageName]["theme"] );


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

  // TODO : Update for Blog post loading, in tandem with hashListener()
  getHash(){
    let hash = window.location.hash;
    hash = hash.replace("#","");
    if( hash == "" ){
      return this.defaultPage;
    }
    return hash;
  }

  // -- -- --

  shiftHistoryState( pageName ){
    let urlDisplay = pageName;
    
    if( urlDisplay.includes(".htm") ){
      urlDisplay = urlDisplay.split(".")[0];
    }

    // Check for specific capitalization of file url names
    let verifiedKeys = Object.keys(this.verifiedPages);
    if( verifiedKeys.includes(urlDisplay.toLocaleLowerCase()) ){
      urlDisplay = this.verifiedPages[urlDisplay.toLocaleLowerCase()];
    }else{
      // No specified page display name
      //   Capitalize the first letter of the page name, so it looks purddy
      if( !this.pageDisplayURL.includes(urlDisplay) ){
        urlDisplay = urlDisplay.charAt(0).toUpperCase() + urlDisplay.slice(1);
      }
    }

    if( !urlDisplay.includes(".htm") ){
      urlDisplay += ".htm";
    }

    let urlFolderPath = window.location.pathname;
    if( urlFolderPath.includes(".htm") ){
      urlFolderPath = urlFolderPath.split("/");
      urlFolderPath = urlFolderPath.filter( (path)=>{ return path != ""; });
      urlFolderPath.pop();
      urlFolderPath = urlFolderPath.join("/");
      urlFolderPath = urlFolderPath+"/";
    }
    let url = window.location.origin + urlFolderPath + urlDisplay;
    window.history.pushState({path:url}, '', url);

  }

  checkForRedirect(){
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    if (redirectPath) {
      // Extract the page name from the redirect path
      const pageName = redirectPath.replace('/', '');
      
      this.shiftHistoryState(pageName);
    }
  }

  getPageURL(){
    let ret = this.defaultPage;

    this.checkForRedirect();

    // Pull base name from the url
    let url = window.location.href;
    let urlSplit = url.split("/");
    let urlLast = urlSplit[urlSplit.length-1];
    if( urlLast != "" ){
      let urlSplitDot = urlLast.split(".");
      let urlPage = urlSplitDot[0];
      if( urlPage != "" ){
        ret = urlPage;
      }
    }
    if( ret.toLocaleLowerCase() == "index" ){
      ret = this.defaultPage;
      this.shiftHistoryState( ret );
    }
    return ret;
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
    buttonWidthAgr += this.toggleDomEvents["ToggleDOM"]["on"].offsetWidth;

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
        obj.style.display = "contents";
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
      obj.style.display = "";//"block";
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
      this.domEventStates.ToggleDOM = true;
      obj.style.display = "";//"block";
      obj.classList.add("pagesVisMid");
      obj.classList.remove("pagesVisOn");

      pageDivsStyles.forEach( (pageDiv)=>{
        pageDiv.style.maxHeight="0px";
        pageDiv.style.minHeight="0px";
        pageDiv.style.padding="0px 10px";
        pageDiv.classList.add("gpcpHiddenStyle");
        pageDiv.classList.remove("gpcpVisibleStyle");
        
        pageDiv.style.border = "0px";
      });
    } else {
      this.domEventStates.ToggleDOM = false;
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisMid");
      pageDivsStyles.forEach( (pageDiv)=>{
        pageDiv.style.maxHeight = "";
        pageDiv.style.minHeight = "";
        pageDiv.style.padding = "";
        pageDiv.classList.add("gpcpVisibleStyle");
        pageDiv.classList.remove("gpcpHiddenStyle");

        
        pageDiv.style.border = "";
      });
    }
  }

  hidePage( pageName ){
    if( this.navBarObjs.hasOwnProperty(pageName) ){
      let pageObj = this.navBarObjs[pageName];
      pageObj.style.display = "none";
    }
  }
  showPage( pageName ){
    if( this.navBarObjs.hasOwnProperty(pageName) ){
      let pageObj = this.navBarObjs[pageName];
      pageObj.style.display = "";//"block";
    }
  }
}
