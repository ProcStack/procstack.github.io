// Page Management For Some Git.io Example Site To Show Off pxlNav Cause I Couldn't Come Up With A Better Idea v0.0.1
//  Written by Kevin Edzenga; 2024,2025
//
// Should this be Next & Tailwind?
//   Maybe
// React is heavy though, so naw...
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
//      `<div name="procPages" page-id="Repos" page-style="footerBar:repoPage_footerBar;[...]" class="[...]"> [...] </div>`
//     Then set a default class to revert if I want to with -
//      `pages-default-class="footerBar"`
//
//     There is no need for yet another page manager, but I could always use a good bootstrapper for myself,
//       And my blatently ESM ways.
//
//

/**
 * @class ProcPageManager
 * @description Page management system for single page applications. Handles page transitions,
 * URL routing, navigation state, and page-specific styling overrides.
 * Made with callbacks in mind; to be used with pxlNav for room/view management in Three.js
 */
export class ProcPageManager {
  /**
   * @constructor
   * @description Initializes a new ProcPageManager instance with default settings
   */
  constructor(originUrl) {
    this.originUrl = originUrl || window.location.origin;
    this.mainDiv = null;
    this.curPage = null;
    this.curRoom = null;
    this.curLocation = null;
    this.defaultPage = "Init";
    this.pageListing = {};
    this.curPageName = this.defaultPage;
    this.prevPageName = this.defaultPage;

    this.versionReplace = '';

    this.faderTimeout = 850;

    this.defaultPageListing = {
      "booted" : false,
      'obj' : null,
      'pageData' : null,
      'room' : null,
      'view' : null,
      'theme' : null
    };

    this.parentObjectData = {
      "body" : {
        "name" : "pxlPagesContentParent",
        "obj" : null
      }
    };

    this.navBarLinks = [];
    this.navBarObjs = {};
    this.pageDisplayURL = [];
    this.verifiedPages = {};
    this.toggleDomEvents = {};
    this.resObjsVis = true;
    this.resBasedObjs = [];
    this.triggerEmitFunc = null;
    // this.navBar.init();

    this.botRoot = null;
    this.metaAlternateLink = document.querySelector("link[rel='alternate']");
    if( this.metaAlternateLink && this.metaAlternateLink.hasAttribute('href') ){
      let conHref = this.metaAlternateLink.getAttribute('href');
      conHref = conHref.split('/');
      conHref = conHref.slice(0, 4).join('/');
      if( conHref && conHref != '' ){
        this.botRoot = conHref;
      }
    }

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
      let urlData = this.getPageURL();
      let newPage = urlData.page;

      if( !this.pageListing.hasOwnProperty(newPage) ){
        console.warn("Page not found in pageListing: " + newPage);
        newPage = this.defaultPage;
      }

      if( newPage != this.curPageName ){
        // Swap page content
        this.changePage(newPage);

        // Run page theming and callback functions
        this.prevPageName = this.curPageName;
        this.curPageName = newPage;
        this.curPage = this.pageListing[newPage]["obj"];
        this.postLoad();
      }

      if( urlData.section != null ){
        let pageData = this.pageListing[newPage]["pageData"];
        pageData.activateSection( urlData.section );
      }
    });

  }

/**
 * @method setVersion
 * @param {string} version - Version string to set
 * @description Sets the version string used for version replacement in the UI
 */
  setVersion( version ){
    this.versionReplace = version;
  }
  
/**
 * @method setPxlNavVersion
 * @param {string|null} version - Version string to set for pxlNav elements
 * @description Updates pxlNav version numbers in DOM elements.
 */
  setPxlNavVersion( version=null ){
    if( version == null ){
      version = this.versionReplace;
    }
    if( version[0] != "v" ){
      version = "v" + version;
    }
    let pnv = [...document.getElementsByClassName("pxlNavVersion")];
    pnv.forEach(curPNV => {
      if( !curPNV.hasAttribute("versionAdded") ){
        curPNV.setAttribute("versionAdded", version);
        curPNV.innerText = version;
      }
    });
  }

/**
 * @method init
 * @description Initializes the page manager, sets up event listeners, and prepares the initial page state
 */
  init(){
    this.mainDiv = document.getElementById("procPagesMainBlock");
    this.navBar = document.getElementById("procPagesNav");

    // Find divs used to parent page content to
    let parentDivKeys = Object.keys(this.parentObjectData);
    parentDivKeys.forEach( (key)=>{
      let parentObj = document.getElementById( this.parentObjectData[key]["name"] );
      if( parentObj ){
        this.parentObjectData[key]["obj"] = parentObj;

        // Empty the body object
        //   This is a hold over until I can connect the static page system to the page manager
        parentObj.innerHTML = '';
      }
    });

    // Rectify the URL state and set the current page
    let pageURLData = this.getPageURL();
    let pageURL = pageURLData.page;
    let pageSection = pageURLData.section;
    
    
    // Find the dom user clickable actions
    this.findDomUserEvents();

    // When the page gets too narrow,
    //   Hide some of the gui elements,
    //     Like sections of link names
    this.resBasedObjs = [...document.getElementsByClassName("squashInLowRes")];
    let pageListingKeys = Object.keys(this.pageListing);

    // Gather the nav bar links
    this.navBarLinks = [...this.navBar.getElementsByTagName("a")];
    this.navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.getAttribute("page-name");
      this.navBarObjs[linkText] = navLink;
      // Show page link if directly linked to it
      if( linkText != pageURL && this.pageListing.hasOwnProperty(linkText) && !this.pageListing[linkText].pageData.visible ){
        navLink.style.display = "none";
      }
    });

    // Gather verified pages before URL state changes based on query params
    pageListingKeys.forEach( (pageKey)=>{
      let pageId = this.pageListing[pageKey]['pageData']["page"];
      this.verifiedPages[ pageId.toLocaleLowerCase() ] = pageId;
    });

    
    // -- Error check; user put in a bad URL --
    if( !pageListingKeys.includes( pageURL ) ){
      pageURL = this.defaultPage;
      this.shiftHistoryState( pageURL );
      this.updateDocumentMetaData( pageURL );
    }


    this.prevPageName = this.curPageName;
    this.curPageName = pageURL;


    // Prep the page divs
    pageListingKeys.forEach( (pageKey)=>{
      let curPage = this.pageListing[pageKey];
      let curPageData = curPage["pageData"];
      let pageId = curPageData["page"];
      let pageDiv = curPage["obj"];
      this.prepFader(pageDiv);

      if( curPage.hasOwnProperty("styleOverrides") ){
        let styleOverrides = Object.keys(curPage["styleOverrides"]);
        styleOverrides.forEach( (styleKey)=>{
          if( !this.pageStyleOverrides.hasOwnProperty(pageKey) ){
            this.pageStyleOverrides[pageKey] = {};
          }
          this.pageStyleOverrides[pageKey][styleKey] = curPage["styleOverrides"][styleKey];
        });
      }

      if( !this.pageListing.hasOwnProperty( pageId ) ){
        this.pageListing[ pageId ] = Object.assign({}, this.defaultPageListing);
      }

      this.pageListing[ pageId ]["obj"] = pageDiv;
      if( pageId == pageURL ){
        this.prevPageName = this.curPageName;
        this.curPageName = pageId;
        this.curPage = pageDiv;
        this.toggleFader( this.curPage, true );
      }else{
        pageDiv.style.display = "none";
      }

    });


    this.navBarLinks.forEach( (navLink)=>{
      let linkText = navLink.getAttribute("page-name");
      let pxlRoomName = navLink.getAttribute("pxlRoomName");
      let pxlCameraView = navLink.getAttribute("pxlCameraView");
      if( !this.pageListing.hasOwnProperty(linkText) ){
        return;
      }


      let pageTheme = this.pageListing[ linkText ]["pageData"]["theme"];


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
        let curPageId = this.curPageName;
        if( linkText == curPageId ){
          this.checkDisplayState( false );
          return;
        }
        this.changePage( linkText, pxlRoomName, pxlCameraView );
      });

      // Ensure navigation links are properly accessible (redundant for <a> tags but good practice)
      if( !navLink.hasAttribute('role') ){
        navLink.setAttribute('role', 'button');
      }
      if( !navLink.hasAttribute('aria-label') && !navLink.hasAttribute('aria-labelledby') ){
        const pageName = navLink.getAttribute("page-name") || linkText;
        navLink.setAttribute('aria-label', `Navigate to ${pageName} page`);
      }

    });

    window.addEventListener("resize", this.onResize.bind(this));


    this.setStyleOverrides();
    this.hashListener();
    this.domContentListener();

    // Final init steps
    if( !this.pageListing[ this.curPageName ]["booted"] ){
      this.pageListing[ this.curPageName ].booted = true;
      this.parentObjectData["body"]["obj"].appendChild( this.curPage );
    }

    //this.runHidePages();
    this.activateNavButton( this.curPageName );

    // Check the current page section
    if( pageSection != null && pageSection != "" ){
      let pageData = this.pageListing[pageURL]["pageData"];
      if( pageData ){
        pageData.activateSection( pageSection );
      }
    }

    this.updateDocumentMetaData( pageURL );

  }

  // -- -- --

  // Set browser theme if 'pageTheme' exists on the nav bar link
  setBrowserTheme( theme ){
    if( !theme ){
      document.querySelector("meta[name='theme-color']").removeAttribute("body");
      return;
    }
    document.querySelector("meta[name='theme-color']").setAttribute("body", theme );
  }
  
  // -- -- --


  // -- -- --
  
/**
 * @method findDomUserEvents
 * @description Finds and sets up DOM user events for toggling page elements based on user interactions.
 * This is used for toggling DOM visibility when the 'pageEvent="ToggleDOM"' attribute is set on the 'procPagesToggleDOM' links.
 */
  findDomUserEvents(){
    let toggleDomObjs = [...document.getElementById("procPagesToggleDOM").children];
    toggleDomObjs.forEach( (toggleLink)=>{
      // Add accessibility attributes if they don't exist
      if( !toggleLink.hasAttribute('role') ){
        toggleLink.setAttribute('role', 'button');
      }
      if( !toggleLink.hasAttribute('tabindex') ){
        toggleLink.setAttribute('tabindex', '0');
      }
      if( !toggleLink.hasAttribute('aria-label') && !toggleLink.hasAttribute('aria-labelledby') ){
        const eventType = toggleLink.getAttribute("pageEvent");
        const eventValue = toggleLink.getAttribute("pageValue");
        
        // Create more descriptive labels based on the toggle function
        let ariaLabel = '';
        if( eventType === "ToggleDOM" ){
          ariaLabel = eventValue === "1" ? "Switch to full 3D environment view" : "Switch back to page content view";
        }else{
          // Fallback for other event types
          const actionText = eventValue === "1" ? "Enable" : "Disable";
          ariaLabel = `${actionText} ${eventType} functionality`;
        }
        
        toggleLink.setAttribute( 'aria-label', ariaLabel );
      }
      
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
        
        // Keyboard handlers for accessibility
        curObj["on"].addEventListener("keydown", (e)=>{
          if( e.key === 'Enter' || e.key === ' ' ){
            e.preventDefault();
            this.toggleDomEvents[key]["on"].style.display = "none";
            this.toggleDomEvents[key]["off"].style.display = "block";
            this.toggleMidFader( this.mainDiv, true );
          }
        });
        curObj["off"].addEventListener("keydown", (e)=>{
          if( e.key === 'Enter' || e.key === ' ' ){
            e.preventDefault();
            this.toggleDomEvents[key]["off"].style.display = "none";
            this.toggleDomEvents[key]["on"].style.display = "block";
            this.toggleMidFader( this.mainDiv, false );
          }
        });
      }
    });
  }

  // -- -- --

/**
 * @method triggerDomEvent
 * @returns {string} - The current page URL
 * @description Retrieves the current page URL from the browser's address bar
 */
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

/**
 * @method eventHandler
 * @param {Event} e - Event object
 * @description Handles various page manager events (booted, shader editor, room changes)
 */
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

/**
 * @method bindTriggerEmits
 * @param {Function} emitFunc - Function to handle event emissions
 * @description Binds an event emission function for page manager events
 */
  bindTriggerEmits( emitFunc ){
    this.triggerEmitFunc = emitFunc;
  }
  unbindTriggerEmits(){
    this.triggerEmitFunc = null;
  }


  // -- -- --
  
  postLoad(){
    
    let curPageId = this.curPageName;
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

/**
 * @method setStyleOverrides
 * @description Applies page-specific style overrides based on current page configuration
 */
  setStyleOverrides(){
    if(!this.curPage){
      return;
    }

    // There is an issue with the initial load of the page,
    //   The previous page's style overrides aren't stored.
    // TODO : Find the source of this issue.
    let prevPageListing = this.pageListing[this.prevPageName];
    if( prevPageListing && prevPageListing["pageData"].hasOwnProperty("styleOverrides") ){
      let overrideKeys = Object.keys(prevPageListing["pageData"]["styleOverrides"]);
      overrideKeys.forEach( (key)=>{
        let curObj = document.getElementById(key);
        if( curObj ){
          let attrName = prevPageListing["pageData"]["styleOverrides"][key];
          if( curObj.classList.contains(attrName) ){
            curObj.classList.remove(attrName);
          }
        }
      });
    }

    let curPageId = this.curPageName;
    let pageListing = this.pageListing[curPageId];
    if( pageListing && pageListing["pageData"].hasOwnProperty("styleOverrides") ){
      let overrideKeys = Object.keys( pageListing["pageData"]["styleOverrides"] );
      overrideKeys.forEach( (key)=>{
        let curObj = document.getElementById( key );
        if( curObj ){
          if( curObj.hasAttribute("pages-default-class") ){
            let defaultClass = curObj.getAttribute("pages-default-class");
            curObj.classList.remove( defaultClass );
          }
          curObj.classList.add( pageListing["pageData"]["styleOverrides"][key] );
        }
      });
    }
  }


/**
 * @method addPageListing
 * @param {Object} pageData - Object containing page configuration data
 * @description Adds new pages to the page manager's listing
 */
  addPageListing( pageData ){
    let pageKeys = Object.keys( pageData );
    let listingKeys = Object.keys( this.pageListing );
    pageKeys.forEach( (pageKey)=>{
      if( !listingKeys.includes(pageKey) ){
        this.pageListing[pageKey] = Object.assign({}, this.defaultPageListing);
      }
      
      this.pageListing[pageKey][ "pageData" ] = pageData[pageKey];
      if( pageData[pageKey].hasOwnProperty("metaData") ){
        this.pageListing[pageKey][ "metaData" ] = pageData[pageKey].metaData;
      }

      let pageObj = pageData[pageKey].buildPage();
      this.pageListing[pageKey][ "obj" ] = pageObj;

      // Connect when sections change, to update the page manager
      //   This is used for history state pushes to a `folder/page` URL
      pageData[pageKey].subscribe( this.sectionChangeCallback.bind(this) );
    });

  }

/**
 * @method setPageMetaData
 * @param {string} pageName - Name of the page to update
 * @param {Object} metaData - Metadata object containing page information
 * @description Sets metadata for a specific page
 */
  setPageMetaData( pageName, metaData ){
    if( this.pageListing.hasOwnProperty(pageName) ){
      let pageObj = this.pageListing[pageName];
      pageObj["metaData"] = metaData;
    }
  }

  getMetaData( pageName ){
    if( this.pageListing.hasOwnProperty(pageName) ){
      let pageObj = this.pageListing[pageName];
      return pageObj["metaData"];
    }
  }

/**
 * @method updateDocumentMetaData
 * @param {string} pageName - Name of the page to update document metadata for
 * @description Updates document metadata (title, meta tags) based on page configuration
 */
  updateDocumentMetaData( pageName ){
    if( !this.pageListing.hasOwnProperty(pageName) ){
      return;
    }
    let pageObj = this.pageListing[pageName];
    let siteUrl = window.location.origin;
    
    let prevSection = pageObj.pageData.prevSection;
    if( !prevSection || prevSection == "" ){
      prevSection = pageObj.pageData.sectionTitles[0];
    }
    const subPageData = pageObj.pageData.sectionData[ prevSection ];

    const schemaData = subPageData.schemaData || pageObj.metaData.schemaData || {};
    if( schemaData && Object.keys(schemaData).length > 0 ){
      let schemaScript = document.querySelector("script[type='application/ld+json']");
      if( !schemaScript ){
        // Create new schema script
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
        document.head.appendChild(schemaScript);
      }

      // Update existing schema script
      schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    }else{
      // Remove existing schema script if no data
      let schemaScript = document.querySelector("script[type='application/ld+json']");
      if( schemaScript ){
        schemaScript.remove();
      }
      console.warn("ProcPageManager; No schemaData found for page: " + pageName);
    }
    
    const title = (`${subPageData.title} - ${pageObj.metaData.title}`) || pageObj.metaData.title || pageName.split('.')[0] ;
    if( title && title != "" ){
      document.title = title;
    }else{
      document.title = "ProcStack";
    }
    
    // Update Open Graph and Twitter Card meta tags
    const description = subPageData.description || pageObj.metaData.description || '';
    const keywords = subPageData.keywords || pageObj.metaData.keywords.join(", ") || '';

    //const image = subPageData.image || '';
    const fileName = subPageData.htmlName;
    let url = `${siteUrl}/${pageObj.pageData.page}/${fileName}`;
    if( fileName == null || fileName == "" ){
      url = `${siteUrl}/${pageObj.pageData.page}.htm`;
    }

    //Update Conical Link
    let conicalLink = document.querySelector("link[rel='canonical']");
    if( conicalLink ){
      conicalLink.setAttribute("href", url);
    }else{
      conicalLink = document.createElement("link");
      conicalLink.setAttribute("rel", "canonical");
      conicalLink.setAttribute("href", url);
      document.head.appendChild(conicalLink);
    }


    const metaTags = {
      'title': ['title', 'og:title', 'twitter:title'],
      'description': ['description', 'og:description', 'twitter:description'],
      'keywords': ['keywords'],
      //'image': ['og:image', 'twitter:image'],
      'url': ['og:url']
    };
    const metaData = {
      'title': title,
      'description': description,
      'keywords': keywords,
      //'image': image,
      'url': url
    };
    Object.keys(metaTags).forEach((key) => {
      const tags = metaTags[key];
      const content = metaData[key];
      tags.forEach((tag) => {
        let metaElement = document.querySelector(`meta[name='${tag}']`);
        if (!metaElement) {
          metaElement = document.createElement('meta');
          metaElement.setAttribute('name', tag);
          document.head.appendChild(metaElement);
        }
        metaElement.setAttribute('content', content);
        if (tag === 'title') {
          document.title = content; // Update document title
        }

      });
    });



    /*if( pageObj.hasOwnProperty("metaData") ){
      let pageMetaData = pageObj["metaData"];
      console.log("Updating page meta data for: " + pageName);

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
            let curContent = pageMetaData[metaTags];
            if( tag == "keywords" && curContent != "" && typeof(curContent) == "object" ){
              curContent = curContent.join(", ");
            }
            if( curMeta ){
              curMeta.setAttribute("body", curContent);
            }else{
              let newMeta = document.createElement("meta");
              newMeta.setAttribute("name", tag);
              newMeta.setAttribute("body", curContent);
              document.head.appendChild(newMeta);
            }
          });
        });
      }
    }*/
  }

/**
 * @method activateNavButton
 * @param {string} pageName - Name of the page to activate navigation for
 * @description Updates navigation button states based on current page
 */
  activateNavButton( pageName ){
    let navKeys = Object.keys(this.navBarObjs);
    navKeys.forEach( (navKey)=>{
      if( navKey == null ) return;

      let curNav = this.navBarObjs[navKey];
      if( this.pageListing.hasOwnProperty(navKey) ){
        let pageData = this.pageListing[navKey]["pageData"];
        if( navKey == pageName ){
          if( pageData.hasOwnProperty("activeNavButton") && Array.isArray(pageData["activeNavButton"]) ){
            pageData["activeNavButton"].forEach( (activeNavButton)=>{ curNav.classList.add(activeNavButton); });
          }
        }else{
          if( pageData.hasOwnProperty("activeNavButton") && Array.isArray(pageData["activeNavButton"]) ){
            pageData["activeNavButton"].forEach( (activeNavButton)=>{ curNav.classList.remove(activeNavButton); });
          }
        }
      }
    });
  }

/**
 * @method changePage
 * @param {string} pageName - The name/ID of the page to display
 * @param {string|null} roomName - Optional room name for pxlNav integration
 * @param {string|null} locationName - Optional location name within the room
 * @description Changes the current page, handles transitions, updates URL state, and triggers room changes
 */
  changePage( pageName, roomName=null, locationName=null ){
    if( pageName != this.curPage && Object.keys(this.pageListing).includes(pageName) ){
      this.toggleFader(this.curPage, false);
      // Remove previous page styles
      if( this.curPage != null ){
        this.prevPageName = this.curPageName;
        let prevPageListing = this.pageListing[ this.curPageName ];
        if( prevPageListing && prevPageListing["pageData"].hasOwnProperty("styleOverrides") ){
          // Iterate page css overrides and remove them to allow for the new page's styles, if they exist
          let curOverrides = prevPageListing["pageData"]["styleOverrides"];
          let overrideKeys = Object.keys( curOverrides );
          overrideKeys.forEach( (key)=>{
            let curObj = document.getElementById( key );
            if( curObj ){
              if( curOverrides.hasOwnProperty( key ) && curObj.classList.contains( curOverrides[key] ) ){
                curObj.classList.remove( curOverrides[key] );
                if( curObj.hasAttribute("pages-default-class") ){
                  let defaultClass = curObj.getAttribute("pages-default-class");
                  curObj.classList.add( defaultClass );
                }
              }
            }
          });
          
          // Stop any playing media on the page
          if( prevPageListing.hasOwnProperty('pageData') ){
            prevPageListing.pageData.stopSectionMedia();
          }
        }
      }

      this.checkDisplayState( false );

      // Set current page value
      let pageListing = this.pageListing[pageName];
      this.curPageName = pageName;
      this.curPage = pageListing["obj"];

      if( !pageListing.booted ){
        this.pageListing[pageName].booted = true;
        this.parentObjectData["body"]["obj"].appendChild( this.curPage );
      }

      // Update URL page display & history state
      let pageData = this.pageListing[pageName]['pageData'];
      let prevSection = pageData['prevSection'];
      let sectionData =  pageData['sectionData'][ prevSection ];
      if( sectionData && sectionData.hasOwnProperty("htmlName") ){
        let htmlName = sectionData["htmlName"];
        let formattedURL = this.formatURL( pageName, htmlName );
        this.shiftHistoryState( formattedURL );
      }else{
        this.shiftHistoryState( pageName );
      }

      // Update Meta Data
      this.updateDocumentMetaData( pageName );

      // Set the browser theme ( also meta data )
      this.setBrowserTheme( this.pageListing[pageName]["theme"] );


      // Trigger css animation to bring the new page in
      this.toggleFader(this.curPage, true);

      //Activate nav button
      this.activateNavButton( pageName );

      // Apply new page styles
      this.setStyleOverrides();

      // Check for missing version entries after a built page
      this.setPxlNavVersion();

      // Correct the scroll position from previous time on the page
      // TODO: Review; I may want to remove this. It was a fix for when all of the pages were in the same div
      //         Since they've split out, this may not be necessary
      if( this.curPage.parentElement ){
        this.curPage.parentElement.scrollTop = 0;
      }
      
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

/**
 * @method getHash
 * @returns {string} Current hash value from the URL or default page if empty
 * @description Extracts the hash from the URL and returns it, or returns the default page if the hash is empty
 * TODO : Update for Blog post loading, in tandem with hashListener()
 */
  getHash(){
    let hash = window.location.hash;
    hash = hash.replace("#","");
    if( hash == "" ){
      return this.defaultPage;
    }
    return hash;
  }

  // -- -- --

/**
 * @method shiftHistoryState
 * @param {string} pageName - Page name to update in browser history
 * @description Updates browser history state with new page URL
 */
  shiftHistoryState( pageName ){
    let urlDisplay = pageName;
    
    let urlCheck = urlDisplay.split("/")[0];
    if( urlCheck.includes(".htm") ){
      urlCheck = urlCheck.split(".")[0];
    }

    // Check for specific capitalization of file url names
    let verifiedKeys = Object.keys(this.pageListing);

    for( let x=0; x<verifiedKeys.length; ++x ){
      if( urlDisplay.toLowerCase() == verifiedKeys[x].toLowerCase() ){
        urlDisplay = verifiedKeys[x];
        break;
      }
    }

    if( !urlDisplay.includes(".htm") ){
      urlDisplay += ".htm";
    }

    /*
    let urlFolderPath = window.location.pathname;
    if( urlFolderPath.includes(".htm") ){
      urlFolderPath = urlFolderPath.split("/");
      urlFolderPath = urlFolderPath.filter( (path)=>{ return path != ""; });
      urlFolderPath.pop();
      urlFolderPath = urlFolderPath.join("/");
      urlFolderPath = urlFolderPath+"/";
    }
    let url = window.location.origin + urlFolderPath + urlDisplay;
    */
    if( !urlDisplay.startsWith("/") ){
      urlDisplay = "/" + urlDisplay;
    }
    let url = window.location.origin + urlDisplay;
    window.history.pushState({path:url}, '', url);

  }

/**
 * Recieve page section change callback from the page itself
 * 
 * This is used to push state to the browser history when the page has a section change
 * @method sectionChangeCallback
 * @param {Object} sectionData - Data object containing section information
 */
  sectionChangeCallback( sectionData ){
    let pageName = null;
    let sectionName = null;
    if( !sectionData || !sectionData.hasOwnProperty("page") ){
      pageName = this.curPageName;
    }else{
      pageName = sectionData['dir'];
      if( sectionData.hasOwnProperty("page") ){
        sectionName = sectionData['page'];
      }
    }

    let formattedURL = this.formatURL( pageName, sectionName );
    this.shiftHistoryState( formattedURL );

    //this.curPageName = sectionName;

    let altLinkHref = `${this.botRoot}/${pageName}_${sectionName}.json`;

    if( this.metaAlternateLink ){
      this.metaAlternateLink.setAttribute("href", altLinkHref);
    }else{
      
      this.metaAlternateLink = document.querySelector("link[rel='alternate']");
      if( this.metaAlternateLink ){
        this.metaAlternateLink.setAttribute("href", altLinkHref);
      }else{
        this.metaAlternateLink = document.createElement("link");
        this.metaAlternateLink.setAttribute("rel", "alternate");
        this.metaAlternateLink.setAttribute("href", altLinkHref);
        document.head.appendChild(this.metaAlternateLink);
      }
    }

    // Update Meta Data
    this.updateDocumentMetaData( pageName );
  }

/**
 * Format URL from page + section callback
 */
  formatURL( pageName, sectionName ){
    let urlDisplay = pageName;

    if( sectionName != null ){
      urlDisplay += "/" + sectionName;
    }
    if( !urlDisplay.includes(".htm") ){
      urlDisplay += ".htm";
    }
    return urlDisplay;
  }


/**
 * @method checkForRedirect
 * @description Checks the URL for a 'redirect' query parameter and updates the page state accordingly
 */
  checkForRedirect(){
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    if (redirectPath) {
      // Extract the page name from the redirect path
      const pageName = redirectPath.replace('/', '');
      
      this.shiftHistoryState(pageName);
    }
  }

/**
 * @method getPageURL
 * @returns {string} Current page name from URL
 * @description Extracts and returns the current page name from the URL
 */
  getPageURL(){
    let ret = this.defaultPage;

    this.checkForRedirect();

    // Pull base name from the url
    let url = window.location.pathname;
    
    if( url == "/index.htm" || url == "/" ){
      this.shiftHistoryState( this.defaultPage );
      return {'page':this.defaultPage, 'section':null};
    }

    let urlSplit = url.split("/");

    let urlLast = urlSplit[urlSplit.length-1];
    if( urlLast != "" ){
      let urlSplitDot = urlLast.split(".");
      let urlPage = urlSplitDot[0];
      if( urlPage != "" ){
        ret = urlPage;
      }
    }

    urlSplit = urlSplit.filter( (path)=>{ return path != ""; });

    
    let urlFolderPath = null;
    let urlPagePath = urlSplit.pop();
    if( urlSplit.length > 0 ){
      urlFolderPath = urlSplit.join("/");
    }

    let pageCheck = (urlFolderPath || urlPagePath).toLowerCase();
    if( pageCheck.includes(".htm") ){
      pageCheck = pageCheck.split(".")[0];
    }

    if( (urlFolderPath == null || urlFolderPath == "") && urlPagePath != "" ){
      urlFolderPath = urlPagePath;
      urlPagePath = "";
    }
    urlFolderPath = urlFolderPath.replace(/\.htm/g, "");
    if( urlFolderPath == "" ){
      urlFolderPath = this.defaultPage;
      urlPagePath = "";
    }

    return {'page':urlFolderPath, 'section':urlPagePath};
  }



  onResize(){}
  
/**
 * @method prepFader
 * @param {HTMLElement|string} obj - DOM element or element ID to prepare for fading
 * @description Prepares a DOM element for fade transitions by adding necessary CSS classes
 */
  prepFader( obj ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( obj ){
      obj.classList.add("pagesFader");
      obj.classList.add("pagesVisOff");
    }
  }

/**
 * @method toggleFader
 * @param {HTMLElement|string} obj - DOM element or element ID to fade
 * @param {boolean} vis - Visibility state to set
 * @description Toggles the visibility of DOM elements.
 */
  toggleFader( obj, vis=false ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( !obj ){
      return;
    }
    
    let curId = this.curPageName;
    if( vis ){
      obj.style.display = "";//"block";
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisOff");

      // Check for the display:none timeout & clear it
      let curTimeout = this.runningTimeouts[curId];
      if( curTimeout ){
        clearTimeout(curTimeout);
      }

      this.runningTimeouts[curId] = null;

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

/**
 * @method toggleMidFader
 * @param {HTMLElement|string} obj - DOM element or element ID to toggle visibility for
 * @param {boolean} vis - Visibility state to set
 * @description Toggles the mid-way visibility of DOM elements, triggered on pxlNav UI callbacks
 */
  toggleMidFader( obj, vis=false ){
    if( typeof(obj)=="string" ){
      obj = document.getElementById(obj);
    }
    if( !obj ){
      return;
    }

    //let pageDiv = this.pageListing[this.curPageName]["obj"];
    let pageDiv = this.curPage;
    if( vis ){
      this.domEventStates.ToggleDOM = true;
      obj.style.display = "";//"block";
      obj.classList.add("pagesVisMid");
      obj.classList.remove("pagesVisOn");

      pageDiv.style.maxHeight="0px";
      pageDiv.style.minHeight="0px";
      pageDiv.style.padding="0px 10px";
      pageDiv.classList.add("gpcpHiddenStyle");
      pageDiv.classList.remove("gpcpVisibleStyle");
      
      pageDiv.style.border = "0px";

    }else{
      this.domEventStates.ToggleDOM = false;
      obj.classList.add("pagesVisOn");
      obj.classList.remove("pagesVisMid");

      pageDiv.style.maxHeight = "";
      pageDiv.style.minHeight = "";
      pageDiv.style.padding = "";
      pageDiv.classList.add("gpcpVisibleStyle");
      pageDiv.classList.remove("gpcpHiddenStyle");

      
      pageDiv.style.border = "";

    }
  }

  checkDisplayState( toggleState=null){
    if( toggleState == null ){
      toggleState = this.domEventStates.ToggleDOM
    }
    
    //if( this.domEventStates.ToggleDOM ){
      this.toggleMidFader( this.mainDiv, toggleState );
      this.triggerDomEvent("ToggleDOM", toggleState);
    //}
  }

  /*runHidePages(){
    let pageListingKeys = Object.keys(this.pageListing);
    pageListingKeys.forEach( (pageKey)=>{
      let curPage = this.pageListing[pageKey];
      console.log(curPage)
      //if( curPage["obj"] != this.curPage ){
      //  curPage["obj"].style.display = "none";
      //}
    });
  }*/

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
