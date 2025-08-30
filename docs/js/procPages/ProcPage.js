// Core ProcPages content manager
//   Written by Kevin Edzenga; 2024-2025
//

/**
 * @fileoverview Core ProcPages content manager that handles page layout and content organization
 * @module ProcPage
 */

/**
 * @typedef {Object} MediaData
 * @property {boolean} isLoaded - Internal flag indicating if media is loaded
 * @property {('image'|'manualLoad'|'video'|'audio'|'youtube')} type - Type of media
 * @property {string} sectionName - Name of the section containing this media
 * @property {string} src - Source URL for the media
 * @property {string} [thumb] - Thumbnail URL for manual loading
 * @property {number} [width] - Width for manual loading
 * @property {number} [height] - Height for manual loading
 * @property {string|string[]} [style] - CSS class(es) to apply
 * @property {HTMLElement} [object] - Internal reference to DOM element
 * @property {string[]} [caption] - Caption text to display under media
 * @property {string} [alt] - Alt text for accessibility
 */

/**
 * @typedef {Object} SectionData
 * @property {boolean} isLoaded - Whether the section has been loaded
 * @property {boolean} isActive - Whether the section is currently active
 * @property {string} name - Display name of the section
 * @property {string} navGroup - Navigation group this section belongs to
 * @property {string} content - HTML content for the section
 * @property {MediaData[]} media - Array of media items in this section
 * @property {Object[]} ytPlayers - YouTube player instances
 * @property {HTMLElement} header - Section header DOM element
 * @property {HTMLElement[]} objects - DOM elements for this section
 * @property {HTMLElement[]} mediaObjects - Media DOM elements for this section
 */

/**
 * Class representing a ProcPage that manages page content and layout
 */

import { BlogManager } from '../BlogManager.js';

export class ProcPage {
  /**
   * Create a ProcPage
   * @param {Object} contentObject - Configuration object for the page
   * @param {Object} [contentObject.metaData] - Metadata for the page
   * @param {boolean} [contentObject.visible=true] - Whether the page is visible
   * @param {string} [contentObject.id] - Unique identifier for the page
   * @param {string} [contentObject.idPrefix="pxlPage_"] - Prefix for auto-generated IDs
   * @param {string} [contentObject.page="Default"] - Page name
   * @param {string} [contentObject.name=""] - Display name
   * @param {string} [contentObject.header=""] - Page header content
   * @param {string} [contentObject.subHeader=""] - Page subheader content
   * @param {string} [contentObject.footer=""] - Page footer content
   * @param {string} [contentObject.pageStyles=""] - Additional page styles
   * @param {Object} [contentObject.styleOverrides={}] - Style override definitions
   * @param {number} [contentObject.initialSection=0] - Initial active section index
   * @param {string[]} [contentObject.activeNavButton=[]] - Initially active navigation buttons
   * @param {('single'|'triple'|'vertical')} [contentObject.layout='triple'] - Page layout type
   * @param {Object} [contentObject.sections] - Section definitions
   */
  constructor( contentObject ){
    this.metaData = contentObject.metaData || {};
    this.visible = contentObject.hasOwnProperty('visible') ? contentObject.visible : true;
    this.id = contentObject.id || null;
    this.idPrefix = contentObject.idPrefix || "pxlPage_";
    this.page = contentObject.page || "Default";
    this.name = contentObject.name || "";
    this.header = contentObject.header || "";
    this.subHeader = contentObject.subHeader || "";
    this.footer = contentObject.footer || "";
    this.pageStyles = contentObject.pageStyles || "";
    this.styleOverrides = contentObject.styleOverrides || {};
    this.initialSection = contentObject.initialSection || 0;
    this.activeNavButton = contentObject.activeNavButton || [];
    
    // Optional features - [ 'blogManager' ]
    this.features = contentObject.features || [];


    this.layoutTypes = ['single', 'triple', 'vertical'];
    this.layout = 'triple';
    if( contentObject.hasOwnProperty('layout') && this.layoutTypes.includes(contentObject.layout) ){
      this.layout = contentObject.layout;
    }

    this.navButton = null;
    this.pageObject = null;
    this.pageContent = {};
    this.currentPageUrl = null;
    this.prevSection = null;
    this.pageSectionsObject = null;
    this.pageSectionListObject = null;
    this.pageContentView = null;
    this.mediaViewObject = null;

    // -- -- --

    this.defaultSectionData = {
      'htmlName' : '',
      'isLoaded' : false,
      'isActive' : false,
      'name' : '',
      'description' : '',
      'keywords' : '',
      'navGroup' : '',
      'content' : '',
      'media' : [],
      'ytPlayers' : [],
      'header' : null,
      'objects' : [],
      'mediaObjects' : []
    };

    this.validMediaTypes = ['image', 'manualLoad', 'video', 'audio', 'youtube'];
    this.defaultMediaData = {
      'isLoaded' : false, // internal use
      'type':'image', // required - image, manualLoad, youtube, ...
      'sectionName' : '', // internal use
      'src' : '', // required - Source URL
      'thumb' : '', // optional - Thumbnail for manual loading
      'width' : 0, // optional - Width for manual loading
      'height' : 0, // optional - Height for manual loading
      'style' : '', // optional - CSS Class
      'object' : null, // internal use
      'caption' : [''], // optional - Display under media
      'alt' : '' // optional - Accessibility
    };

    this.sectionTitles = [];
    this.sectionData = {};
    if( contentObject.hasOwnProperty('sections') ){
      let sectionKeys = Object.keys(contentObject[ 'sections' ]);
      sectionKeys.forEach( sectionKey => {
        if( Array.isArray(contentObject[ 'sections' ][ sectionKey ]) ){
          contentObject[ 'sections' ][ sectionKey ].forEach(( sectionContent )=>{
            this.addSection( sectionKey, sectionContent );
          });
        }else if( typeof( contentObject[ 'sections' ][ sectionKey ] ) == 'object' ){
          let sectionContent = Object.assign({}, this.defaultSectionData, contentObject[ 'sections' ][ sectionKey ]);
          this.addSection( sectionKey, sectionContent );
        }
      });
    }

    this.callbacks = [];
  }

  // -- -- --
/**
 * Get a copy of the default section data
 * @returns {SectionData} Default section data object
 */
  getDefaultData(){
    return Object.assign({}, this.defaultSectionData);
  }

/**
 * Get a copy of the default media data
 * @returns {MediaData} Default media data object 
 */
  getDefaultMedia(){
    return Object.assign({}, this.defaultMediaData);
  }
  
  // -- -- --

/**
 * Set page metadata
 * @param {Object} metaData - Metadata object to set
 */
  setMetaData( metaData ){
    this.metaData = metaData;
  }

  // -- -- --
  
/**
 * Add a new section to the page
 * @param {string} sectionName - Unique identifier for the section
 * @param {Object} sectionContent - Section content and configuration
 */
  addSection( sectionName, sectionContent ){
    this.sectionTitles.push(sectionName);
    if( !this.sectionData.hasOwnProperty(sectionName) ){
      sectionContent = Object.assign({}, this.defaultSectionData, sectionContent);
    }
    sectionContent.sectionName = sectionContent.name || sectionName;
    this.sectionData[sectionName] = sectionContent;
  }

/**
 * Remove a section from the page
 * @param {string} sectionName - Name of section to remove
 */
  removeSection( sectionName ){
    if( !this.sectionTitles.includes( sectionName ) ) return;
    
    this.sectionTitles.splice( this.sectionTitles.indexOf(sectionName), 1 );
    delete this.sectionData[sectionName];
  }

// -- -- -- -- -- -- -- -- -- --
// -- Page Section Helpers  - -- --
// -- -- -- -- -- -- -- -- -- -- -- --

/**
 * Get section data by name
 * @param {string} sectionName - Name of section to retrieve
 * @returns {SectionData} Section data object
 */
  getSection( sectionName ){
    return this.sectionData[sectionName];
  }

/**
 * Set content for a page's titled section
 * @param {string} sectionName - Name of section to update
 * @param {string} sectionContent - HTML content for the section
 */
  setContent( sectionName, sectionContent ){
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, sectionContent );
    }
    this.sectionData[sectionName].content = sectionContent;
  }

/**
 * Set display name for a page's section
 * @param {string} sectionName - Name of section to update
 * @param {string} sectionTitle - Display name to set
 */
  setSectionName( sectionName, sectionTitle ){
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, {} );
    }
    this.sectionData[sectionName].name = sectionTitle;
  }

// -- -- -- -- -- -- -- --
// -- Media Helpers  -- -- --
// -- -- -- -- -- -- -- -- -- --

/**
 * Apply style to media objects if specified
 * @param {MediaData} mediaData - Media data containing style information
 * @param {HTMLElement} obj - DOM element to apply styles to
 */
  applyStyle( mediaData, obj ){
    if( mediaData.hasOwnProperty('style') ){
      if( typeof mediaData.style == 'string' && mediaData.style != '' ){
        obj.classList.add(mediaData.style);
      } else if( Array.isArray(mediaData.style) ){
        mediaData.style.forEach( (c)=>{
           let curObj = obj;
           if( curObj.getIframe ){
             curObj = curObj.getIframe();
           }
           if( curObj && curObj.classList ){
            curObj.classList.add(c); 
           }
        });
      }
    }
  }

  // -- -- --
/**
 * Creates an image element from media data
 * @param {MediaData} mediaData - Media data containing image properties
 * @returns {HTMLImageElement} Created image element
 */
  buildImage( mediaData ){
    let img = document.createElement('img');
    img.src = mediaData.src;
    img.alt = mediaData.alt;
    img.loading = 'lazy';
    if( this.layout == 'vertical' ){
      img.classList.add('procPagesVerticalLockMediaImage');
    }else{
      img.classList.add('procPagesMediaImage');
    }
    
    this.applyStyle( mediaData, img );

    return img;
  }

/**
 * Creates a lazy-loading image container with placeholder
 * @param {MediaData|string} mediaData - Media data or image URL
 * @returns {HTMLDivElement} Container with placeholder and lazy-loaded image
 */
  buildManualLoad( mediaData ){
    if( typeof mediaData == 'string' ){
      let imgPath = mediaData;
      mediaData = Object.assign({}, this.defaultMediaData);
      mediaData.type = 'image';
      mediaData.src = imgPath;

    }
    if( !this.validMediaTypes.includes(mediaData.type) ){
      mediaData.type = 'image';
    }

    let manualSrc = mediaData.src;
    let manualThumb = mediaData.thumb || '';
    let manualAlt = mediaData.alt || '';
    let manualClass = mediaData.style || [];
    let manualWidth = null;
    let manualHeight = null;
    let manualAspectRatio = 1;

    let manualObj = document.createElement('div');
    manualObj.classList.add('manualLoadImage');
    if( mediaData.hasOwnProperty('width') ){
      manualObj.style.width = manualWidth+"px";
    }
    if( mediaData.hasOwnProperty('height') ){
      manualObj.style.height = manualHeight+"px";
    }
    
    
    // Create the placeholder div
    let placeholder = document.createElement('div');
    placeholder.innerHTML = "&lt; Click to Play &gt;";
    placeholder.classList.add('manualLoadPlaceholder');
    
    // Add accessibility attributes for interactive placeholder
    placeholder.setAttribute('role', 'button');
    placeholder.setAttribute('tabindex', '0');
    placeholder.setAttribute('aria-label', `Load image: ${manualAlt || 'Click to load image'}`);
    
    if( mediaData.hasOwnProperty('aspectRatio') ){
      placeholder.style.aspectRatio = mediaData.aspectRatio;
    }
    
    if( typeof manualClass == 'string' ){
      manualClass = manualClass=='' ? [] : [ manualClass ];
    }

    manualClass.forEach( (c)=>{ placeholder.classList.add(c); });
    if( manualThumb || manualThumb != '' ){
      placeholder.style.backgroundImage = "url('"+manualThumb+"')";
    }

    // Add click event listener to the placeholder
    placeholder.addEventListener('click', () => {
      let img = new Image();
      img.src = manualSrc;
      img.width = manualWidth;
      img.height = manualHeight;
      img.alt = manualAlt;
      img.loading = 'lazy';
      manualClass.forEach( (c)=>{ img.classList.add(c); });
      img.onload = () => {
        manualObj.innerHTML = "";
        manualObj.appendChild(img);
      };
      // Remove the placeholder after the image starts loading
      manualObj.innerHTML = "";
      manualObj.appendChild(img);
    });

    // Add keyboard support for accessibility
    placeholder.addEventListener('keydown', (e)=>{
      if( e.key === 'Enter' || e.key === ' ' ){
        e.preventDefault();
        // Trigger the same logic as click
        let img = new Image();
        img.src = manualSrc;
        img.width = manualWidth;
        img.height = manualHeight;
        img.alt = manualAlt;
        img.loading = 'lazy';
        manualClass.forEach( (c)=>{ img.classList.add(c); });
        img.onload = ()=>{
          manualObj.innerHTML = "";
          manualObj.appendChild(img);
        };
        // Remove the placeholder after the image starts loading
        manualObj.innerHTML = "";
        manualObj.appendChild(img);
      }
    });

    // Add the style classes to the manualObj
    this.applyStyle( mediaData, manualObj );

    // Append the placeholder to the manualObj
    manualObj.appendChild(placeholder);

    return manualObj;
  }
  // -- -- --


/**
 * Adds a video to a page section
 * @param {string} sectionName - Name of section to add video to
 * @param {MediaData|string} videoData - Video data or URL
 * @param {string} [altText=''] - Alternative text for accessibility
 */
  addVideo( sectionName, videoData, altText='' ){
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, {} );
    }
    if( typeof videoData == 'string' ){
      let vidPath = videoData;
      videoData = Object.assign({}, this.defaultMediaData);
      videoData.type = 'video';
      videoData.src = vidPath;
      videoData.alt = altText;
      videoData.loading = 'lazy';
    }
    if( !this.validMediaTypes.includes(videoData.type) ){
      videoData.type = 'video';
    }
    
    let videoObject = this.buildVideoEmbed( videoData );
    videoData.object = videoObject;


    this.sectionData[sectionName].media.push( videoData );
  }

/**
 * Creates a video element from media data
 * @param {MediaData} mediaData - Media data containing video properties
 * @returns {HTMLVideoElement} Created video element
 */
  buildVideoEmbed( mediaData ){
    let vidSrc = mediaData.src;
    let vidAlt = mediaData.alt;

    let vidEmbed = document.createElement('video');
    vidEmbed.src = vidSrc;
    vidEmbed.alt = vidAlt;
    vidEmbed.loop = true;
    vidEmbed.controls = true;
    vidEmbed.preload = 'metadata';
    vidEmbed.loading = 'lazy';
    //vidEmbed.classList.add('procPagesMediaVideo');

    this.applyStyle( mediaData, vidEmbed );
  
    return vidEmbed;

  }

  // -- -- --

/**
 * Creates a YouTube embed from media data
 * 
 * Check's if the Youtube API is loaded, if not, it falls back to a simple iframe embed.
 * <br>Without the Youtube API, iframe embeds reset their `.src` to stop the video when the page is changed.
 * @param {HTMLElement} parentObj - Parent element to attach player to
 * @param {MediaData} mediaData - Media data containing YouTube video ID
 * @returns {HTMLIFrameElement|HTMLDivElement} YouTube player element
 */
  buildYoutubeEmbed( parentObj, mediaData ){
    //let embedParent = document.createElement('div');
    //this.applyStyle( mediaData, embedParent );

    let vidId = mediaData.src;
    let ytEmbed;
    if( typeof YT === 'undefined' || typeof YT.Player === 'undefined' ){
      // Fallback to iframe if YT API is not loaded
      ytEmbed = document.createElement('iframe');
      ytEmbed.src = "https://www.youtube-nocookie.com/embed/"+vidId;
      ytEmbed.title = mediaData.alt;
      ytEmbed.setAttribute( "frameborder", 0 );
      //ytEmbed.allow = "encrypted-media; picture-in-picture; web-share"; // Google was flagging 'web-share' unrecognized
      ytEmbed.allow = "encrypted-media; picture-in-picture";
      ytEmbed.setAttribute( "referrerpolicy", "strict-origin-when-cross-origin" );
      ytEmbed.setAttribute( "allowfullscreen", true );
      this.applyStyle( mediaData, ytEmbed );
    }else{
      ytEmbed = document.createElement('div');
      ytEmbed.id = vidId+'-player';
      parentObj.appendChild( ytEmbed );

      // Function ran once Youtube player is ready
      const setYTStyle = ( e )=>{
        let target = e.target;
        let sectionName = mediaData.sectionName;
        let sectionHeaders = Object.keys( this.sectionData );
        sectionHeaders.forEach(( sectionHeader )=>{
          let section = this.sectionData[sectionHeader];
          if( section.name == sectionName ){
            section.ytPlayers.push( target );
          }
        });

        // Get the iframe object and set the style
        let curIframe = target.getIframe();
        this.applyStyle( mediaData, curIframe );

        if(ytEmbed.parentObj){
          ytEmbed.parentObj.removeChild( ytEmbed );
        }
      };

      let ytPlayer = new YT.Player( ytEmbed, {
        height: '390',
        width: '640',
        videoId: vidId,
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': setYTStyle
        }
      });
    }

    //embedParent.appendChild( ytEmbed );


    return ytEmbed;
    //return embedParent;
  }

  // -- -- --

/**
 * Creates appropriate media element based on media type
 * @param {HTMLElement} parentObj - Parent element to attach media to
 * @param {MediaData} mediaData - Media data for creating element
 * @returns {HTMLElement} Created media element
 */
  buildMedia( parentObj, mediaData ){
    let media = null;
    switch( mediaData.type ){
      case 'image':
        media = this.buildImage( mediaData );
        break;
      case 'manualLoad':
        media = this.buildManualLoad( mediaData );
        break;
      case 'video':
        media = this.buildVideoEmbed( mediaData );
        break;
      case 'audio':
        media = this.buildAudio( mediaData );
        break;
      case 'youtube':
        media = this.buildYoutubeEmbed( parentObj, mediaData );
        break;
      default:
        console.error("Unknown media type: "+mediaData.type);
        break;
    }

    mediaData.object = media;

    if( mediaData.hasOwnProperty('href') && mediaData.href != '' ){
      let mediaLink = document.createElement('a');
      mediaLink.href = mediaData.href;
      mediaLink.target = "_blank";
      mediaLink.appendChild( media );
      media = mediaLink;
    }

    return media;
  }



// -- -- -- -- -- -- -- --
// -- Page Building  -- -- --
// -- -- -- -- -- -- -- -- -- --

/**
 * Creates the page layout structure
 * @returns {HTMLDivElement} Root page content element
 */
  buildPage(){

    let pageContent = document.createElement('div');
    
    pageContent.classList.add("gpcpVisibleStyle");
    pageContent.classList.add('procPagesContentStyle');
    if( this.layout == 'triple' ){
      pageContent.classList.add('procPagesPlacementTripleStyle');
    }else if( this.layout == 'vertical' ){
      pageContent.classList.add('procPagesPlacementVerticalStyle');
      pageContent.classList.add('procPagesLockVertical');
    }
    let setPageType = "block";
    if( this.pageStyles.hasOwnProperty( setPageType ) && Array.isArray( this.pageStyles[ setPageType ] ) ){
      this.pageStyles[ setPageType ].forEach(( style )=>{ pageContent.classList.add(style) });
    }
    this.applyPageStyle( 'block', pageContent );

    // -- -- --

    setPageType = "before";
    if( this.pageStyles.hasOwnProperty( setPageType ) && Array.isArray( this.pageStyles[ setPageType ] ) ){
      let pageBeforeBody = document.createElement('div');
      this.pageStyles[ setPageType ].forEach(( style )=>{ pageBeforeBody.classList.add(style) });
      pageContent.appendChild( pageBeforeBody );
    }

    // -- -- --

    setPageType = "parent";
    let pageInnerContent = document.createElement('div');
    if(this.layout == 'triple'){
      pageInnerContent.classList.add('procPagesInnerStyle');
    }
    this.applyPageStyle( 'parent', pageInnerContent );
    pageContent.appendChild( pageInnerContent );

    // -- -- --

    setPageType = "after";
    if( this.pageStyles.hasOwnProperty( setPageType ) && Array.isArray( this.pageStyles[ setPageType ] ) ){
      let pageAfterBody = document.createElement('div');
      this.pageStyles[ setPageType ].forEach(( style )=>{ pageAfterBody.classList.add(style) });
      pageContent.appendChild( pageAfterBody );
    }


    // -- -- -- -- -- -- -- -- -- --


    let curId = this.id;
    if( !curId || curId == '' ){
      curId = this.idPrefix + this.page;
      this.id = curId;
    }
    pageInnerContent.id = curId;
    
    if( this.header != '' ){
      let pageHeader = document.createElement('div');
      pageHeader.classList.add('procPageHeader');
      pageHeader.innerHTML = this.header;

      this.applyPageStyle( 'header', pageHeader );

      pageInnerContent.appendChild( pageHeader );
    }

    if( this.subHeader != '' ){
      let pageSubHeader = document.createElement('div');
      pageSubHeader.classList.add('procPageSubHeader');
      pageSubHeader.innerHTML = this.subHeader;

      this.applyPageStyle( 'subHeader', pageSubHeader );

      pageInnerContent.appendChild( pageSubHeader );
    }

    if( this.hasPageStyle( 'headerLine' ) ){
      let headerLineObj = document.createElement('div');
      headerLineObj.classList.add('procPagesHeaderLine');
      this.applyPageStyle( 'headerLine', headerLineObj );
      pageInnerContent.appendChild( headerLineObj );
    }


    let pageSections = pageInnerContent;
    if( false && this.layout == 'triple' ){
      pageSections = document.createElement('div');
      pageSections.classList.add('procPageSections');

      this.applyPageStyle( 'inner', pageSections );

      pageInnerContent.appendChild( pageSections );
    }
    this.pageSectionsObject = pageSections;

    // -- -- -- -- -- --

    if( this.layout != 'single' ){
      let pageSectionList = document.createElement('nav');
      pageSectionList.setAttribute('role', 'navigation');
      pageSectionList.setAttribute('aria-label', 'Page sections');
      
      if( this.layout == 'triple' ){
        pageSectionList.classList.add('procPageSectionList');
      }else if( this.layout == 'vertical' ){
        pageSectionList.classList.add('procPageVerticalLockSectionList');
      }

      this.applyPageStyle( 'sectionNavList', pageSectionList );

      pageSections.appendChild( pageSectionList );
      this.pageSectionListObject = pageSectionList;
    }

    // -- -- --

    let pageMediaView;
    if( this.layout != 'single' ){
      pageMediaView = document.createElement( 'section' );
      pageMediaView.classList.add( 'procPageMediaView' );
      pageMediaView.setAttribute( 'role', 'region' );
      pageMediaView.setAttribute( 'aria-label', `Media gallery for ${this.page} page sections` );
      pageMediaView.setAttribute( 'aria-describedby', 'Dynamic media content that changes based on selected section' );
      
      this.applyPageStyle( 'media', pageMediaView );

      pageSections.appendChild( pageMediaView );
      this.mediaViewObject = pageMediaView;
    }

    // -- -- --

    let pageContentView = document.createElement( 'section' );
    if( this.layout == 'triple' ){
      pageContentView.classList.add( 'procPageContentView' );
    }else if( this.layout == 'vertical' ){
      pageContentView.classList.add( 'procPageVerticalLockContentView' );
    }
    
    pageContentView.setAttribute( 'role', 'main' );
    pageContentView.setAttribute( 'aria-label', `Primary content area for ${this.page} page` );
    pageContentView.setAttribute( 'aria-describedby', 'Main content that updates dynamically based on selected section navigation' );
    
    this.applyPageStyle( 'content', pageContentView );

    pageSections.appendChild( pageContentView );
    this.pageContentView = pageContentView;


    // -- -- --


    if( this.layout == 'single' ){
      // Just the Init. page for now, no sections or button navigation
      let curKey = Object.keys( this.sectionTitles )[0];
      let curSectionData = this.sectionData[curKey];
      this.buildSinglePageSection( curSectionData, pageContentView);
      this.sectionData[curKey].isLoaded = true;
    }else{

      this.buildSectionNav( this.pageSectionListObject );

      // Turn on the first section to display
      this.activateSection( this.initialSection );

    }


    // -- -- --

    if( this.footer != '' ){
      let pageContentAfter = document.createElement('div');
      pageContentAfter.classList.add('procPageContentAfterStyle');
      pageContentAfter.innerHTML = this.footer;
      pageInnerContent.appendChild( pageContentAfter );
    }

    // -- -- --
    
    this.pageObject = pageContent;

    return pageContent;
  }

  // -- -- --

/**
 * Creates the section navigation buttons
 * @param {HTMLElement} sectionNav - Container element for section navigation
 */
  buildSectionNav( sectionNav ){

    let sectionTitles = [];
    if( Array.isArray(this.sectionTitles) ){
      sectionTitles = this.sectionTitles;
    }else if( typeof this.sectionTitles == 'object' ){
      sectionTitles = Object.keys(this.sectionTitles);
    }

    sectionTitles.forEach(( sectionName )=>{

      let sectionData = this.sectionData[sectionName];

      if( sectionData.name != '' ){
        let sectionTitleDiv = document.createElement('div');
        if( this.layout == 'triple' ){
          sectionTitleDiv.classList.add('procPagesNavSectionStyle');
        }else if( this.layout == 'vertical' ){
          sectionTitleDiv.classList.add('procPagesVerticalLockNavSectionStyle');
        }
        sectionTitleDiv.classList.add('procPagesButtonStyle');
        sectionTitleDiv.classList.add('procPagesSectionNavColor');
        
        // Add accessibility attributes for crawlers and screen readers
        sectionTitleDiv.setAttribute( 'role', 'button' );
        sectionTitleDiv.setAttribute( 'tabindex', '0' );
        sectionTitleDiv.setAttribute( 'aria-label', `Navigate to ${sectionData.name} section` );
        
        sectionTitleDiv.innerHTML = sectionData.name;

        this.applyPageStyle( 'sectionNavButton', sectionTitleDiv );
        if( this.hasPageStyle('sectionNavButtonBackground') ){
          let buttonBgObj = document.createElement('div');
          buttonBgObj.classList.add('procPagesSectionNavButtonBackground');
          this.applyPageStyle( 'sectionNavButtonBackground', buttonBgObj );

          let styleType = "navStyle";
          if( sectionData.hasOwnProperty( styleType ) && Array.isArray( sectionData[ styleType ] ) ){
            sectionData[ styleType ].forEach(( style )=>{ style!=''&&buttonBgObj.classList.add(style) });
          }

          buttonBgObj.appendChild( sectionTitleDiv );
          sectionNav.appendChild( buttonBgObj );
        }else{

          let styleType = "navStyle";
          if( sectionData.hasOwnProperty( styleType ) && Array.isArray( sectionData[ styleType ] ) ){
            sectionData[ styleType ].forEach(( style )=>{ style!=''&&sectionTitleDiv.classList.add(style) });
          }

          sectionNav.appendChild( sectionTitleDiv );
        }
        
        this.sectionData[sectionName].header = sectionTitleDiv;

        // Handle click events for the section nav buttons
        sectionTitleDiv.addEventListener('click', (e)=>{
          e.preventDefault();
          this.activateSection(sectionName);
        });

        // Add keyboard support for accessibility
        sectionTitleDiv.addEventListener( 'keydown', (e)=>{
          if( e.key === 'Enter' || e.key === ' ' ){
            e.preventDefault();
            this.activateSection(sectionName);
          }
        });

      }else if(sectionData.type === 'spacer'){
        let spacerHeight = sectionData.height || '3px';
        let spacerDiv = document.createElement('div');
        spacerDiv.style.height = spacerHeight;

        if( sectionData.hasOwnProperty('style') && Array.isArray(sectionData.style) ){
          sectionData.style.forEach(( style )=>{ style != '' && spacerDiv.classList.add(style) });
        }

        sectionNav.appendChild(spacerDiv);
      }
    });
  }

  // -- -- --

/**
 * Builds a section's content and media elements
 * @param {string} sectionName - Name of section to build
 */
  buildSection( sectionName ){
    if( !this.sectionData.hasOwnProperty( sectionName ) ){
      console.error("Section '"+sectionName+"' does not exist.");
      return;
    }
    let sectionTitles = [];
    if( Array.isArray(this.sectionTitles) ){
      sectionTitles = this.sectionTitles;
    }else if( typeof this.sectionTitles == 'object' ){
      sectionTitles = Object.keys(this.sectionTitles);
    }

    // Add the sections to the page

    let sectionData = this.sectionData[sectionName];

    let sectionContentBlock = document.createElement('div');
    sectionContentBlock.classList.add('procPageSectionContentStyle');
    sectionContentBlock.classList.add('pagesVisOff');
    sectionContentBlock.id = sectionName;

    if( sectionData.hasOwnProperty( 'contentStyle' ) && Array.isArray( sectionData.contentStyle ) ){
      sectionData.contentStyle.forEach(( style )=>{ style!=''&&sectionContentBlock.classList.add(style) });
    }

    
    this.applyPageStyle( 'sectionNav', sectionContentBlock );

    this.pageContentView.appendChild( sectionContentBlock );

    // Build Nav-Content-Media page layout sections
    let builtObjs = this.buildTriplePageSection( sectionData, sectionContentBlock, this.mediaViewObject );


    if( !this.sectionData[sectionName].hasOwnProperty('objects') ){
      this.sectionData[sectionName].objects = [];
    }

    if( builtObjs['content'].length > 0 ){
      this.sectionData[sectionName].objects.push( ...builtObjs['content'] );
    }

    
    builtObjs.content.push( sectionContentBlock );
    sectionContentBlock.classList.add('pagesVisOn');
    this.sectionData[sectionName].objects = builtObjs.content;

    if( builtObjs['media'].length > 0 ){
      this.sectionData[sectionName].mediaObjects.push( ...builtObjs['media'] );
      this.sectionData[sectionName].mediaObjects.push( ...builtObjs['media'] );
    }

    if( builtObjs['blog'] != null ){
      this.sectionData[sectionName].blogManager = builtObjs['blog'];
    }

    //pageSections.appendChild( section );

    this.sectionData[sectionName].isLoaded = true;

  }

/**
 * Activates a section and displays its content
 * @param {string|number} sectionName - Section name or index to activate
 */
  activateSection( sectionName ){

    if( Number.isInteger(sectionName) ){
      sectionName = this.sectionTitles[sectionName];
      this.currentPageUrl = sectionName;
    }else if( typeof sectionName == 'string' && sectionName.includes(".htm") ){
      this.currentPageUrl = sectionName;
      let foundSectionTitle = this.sectionTitles[0];
      for( let x=0; x<this.sectionTitles.length; ++x ){
        let htmlName = this.sectionData[ this.sectionTitles[x] ].htmlName;
        if( sectionName == htmlName ){
          foundSectionTitle = this.sectionTitles[x];
          break;
        }
      }
      sectionName = foundSectionTitle;
    }

    // -- -- --
    
    if( this.prevSection != null ){
      this.deactivateSection( this.prevSection );
    }

    this.prevSection = sectionName;
    this.sectionData[ sectionName ].isActive = true;

    if( this.sectionData[ sectionName ].isLoaded == false ){
      this.buildSection( sectionName );
    }

    this.sectionData[ sectionName ].header?.classList?.add( 'procPagesNavActive' );
    if( this.pageStyles.hasOwnProperty('sectionNavButtonActive') && Array.isArray( this.pageStyles['sectionNavButtonActive'] ) ){
      this.pageStyles['sectionNavButtonActive'].forEach(( style )=>{
        this.sectionData[ sectionName ].header?.classList?.add( style );
      });
    }



    // Modify page's media display
    //   Vertical center single media
    //   Hide media area if no media exists for the current section
    let mediaLength = this.sectionData[ sectionName ].media.length;
    if( this.layout == "triple" ){ // Triple Layout Section
      if( this.sectionData[ sectionName ].media.length == 0 ){
        this.pageSectionsObject.classList.add('procPageNoMediaStyle');
        this.mediaViewObject.style.display = "none";
      }else if(this.sectionData[ sectionName ].media.length == 1){
        //this.mediaViewObject.style.alignContent = "center";
        this.mediaViewObject.style.alignItems = "center";
        
        this.mediaViewObject.style.height = "auto";
      }
    }else if( this.layout == "vertical" ){ // Vertical locked layout
      if( mediaLength == 0 ){
        this.pageSectionsObject.classList.add('procPageNoMediaLockVerticalStyle');
        this.mediaViewObject.style.display = "none";
      }else if( mediaLength == 1 ){
        this.mediaViewObject.style.alignItems = "center";
        this.mediaViewObject.style.height = "auto";
      }
    }

    this.sectionData[ sectionName ].objects.forEach(( obj )=>{
      obj.classList.add('procPagesSectionActive');
      obj.classList.add('pagesVisOn');
      obj.classList.remove('pagesVisOff');
      obj.scrollTop = 0;
    });

    let emitData = {
      'dir' : this.page,
      'page' : this.sectionData[ sectionName ].htmlName
    };

    this.emit( emitData );
  }


/**
 * Deactivates a section and hides its content
 * @param {string} sectionName - Name of section to deactivate
 */
  deactivateSection( sectionName ){
    this.sectionData[ sectionName ].isActive = false;
    this.sectionData[ sectionName ].header?.classList?.remove('procPagesNavActive');
    if( this.pageStyles.hasOwnProperty('sectionNavButtonActive') && Array.isArray( this.pageStyles['sectionNavButtonActive'] ) ){
      this.pageStyles['sectionNavButtonActive'].forEach(( style )=>{
          this.sectionData[ sectionName ].header?.classList?.remove( style );
      });
    }
    
    let mediaLength = this.sectionData[ sectionName ].media.length;
    if( this.layout == "triple" ){ // Triple Layout Section
      if( mediaLength == 0 ){
        this.pageSectionsObject.classList.remove('procPageNoMediaStyle');
        this.mediaViewObject.style.display = "";
      }else if( mediaLength == 1 ){
        this.mediaViewObject.style.alignContent = "";
        this.mediaViewObject.style.height = "";
      }
    }else if( this.layout == "vertical" ){ // Vertical locked layout
      if( mediaLength == 0 ){
        this.pageSectionsObject.classList.remove('procPageNoMediaLockVerticalStyle');
        this.mediaViewObject.style.display = "";
      }else if( mediaLength == 1 ){
        this.mediaViewObject.style.alignContent = "";
        this.mediaViewObject.style.height = "";
      }
    }

    this.sectionData[ sectionName ].objects.forEach(( obj )=>{
      obj.classList.remove('procPagesSectionActive');
      obj.classList.remove('pagesVisOn');
      obj.classList.add('pagesVisOff');
    });

    this.stopSectionMedia( sectionName );

  }


  // -- -- --

/**
 * Stops all media playback in a section
 * @param {string} [sectionName=null] - Name of section to stop media in
 */
  stopSectionMedia( sectionName=null ){
    if( sectionName == null ){
      sectionName = this.prevSection;
    }

    if( !this.sectionData.hasOwnProperty( sectionName ) ){
      return;
    }
    
    this.sectionData[ sectionName ].media.forEach(( mediaData )=>{
      let mediaType = mediaData.type;
      if( mediaType == 'video' ){
        mediaData.object.pause();
      }else if( mediaType == 'youtube' ){
        let ytPlayer = mediaData.object;
        if( ytPlayer?.src && ytPlayer.src != '' ){
          ytPlayer.src = ytPlayer.src;
        }
      }
    });

    this.sectionData[ sectionName ].ytPlayers.forEach(( ytPlayer )=>{
      ytPlayer.pauseVideo();
    });
  }

  // -- -- --

/**
 * Builds page layout for vertical mode
 * TODO - Implement Vertical Page Layout
 */
  buildVerticalPage(){
    this.buildHorizontalPage();
  }


  // -- -- --

/**
 * Builds content for single layout mode
 * @param {SectionData} sectionData - Section data to build
 * @param {HTMLElement} sectionContentParent - Parent element for section content
 */
  // TODO : Since I'm only using this for Init right now,
  //          I should add the blog system integration here
  buildSinglePageSection( sectionData, sectionContentParent ){
    if( sectionData.content != '' ){
      let sectionContentDiv = document.createElement('div');
      sectionContentDiv.classList.add('procPagesInnerContentSingleStyle');
      sectionContentDiv.innerHTML = sectionData.content;
      this.applyPageStyle( 'sectionContent', sectionContentDiv );

      sectionContentParent.appendChild( sectionContentDiv );
    }
  }

/**
 * Builds content for triple layout mode
 * @param {SectionData} sectionData - Section data to build
 * @param {HTMLElement} sectionContentParent - Parent element for section content
 * @param {HTMLElement} sectionMediaParent - Parent element for section media
 * @returns {{content: HTMLElement[], media: HTMLElement[]}} Created content and media elements
 */
  buildTriplePageSection( sectionData, sectionContentParent, sectionMediaParent ){
    let ret = {
      'content' : [],
      'media' : [],
      'blog' : null
    };

    if( sectionData.hasOwnProperty( 'features' ) && typeof sectionData.features === 'object' && Object.keys( sectionData.features ).length > 0 ){
      // Build feature elements
      // Currently supports - { 'blogManager' : {} }

      // Build blog manager element
      if( sectionData.features.hasOwnProperty('blogManager') && typeof sectionData.features.blogManager === 'object' ){

        let sectionContentDiv = document.createElement('div');
        sectionContentDiv.classList.add('blogManagerBlockStyle');
        if( sectionData.hasOwnProperty('contentStyle') && Array.isArray(sectionData.contentStyle) ){
          sectionData.contentStyle.forEach( style => {
            sectionContentDiv.classList.add(style);
          });
        }

        let blogListing = document.createElement('div');
        blogListing.classList.add('blogEntryListStyle');
        this.applyPageStyle( 'sectionListing', blogListing );

        let blogListingMobile = document.createElement('div');
        blogListingMobile.classList.add('blogEntryListMobileStyle');
        this.applyPageStyle( 'sectionListing', blogListingMobile );

        let blogContent = document.createElement('div');
        blogContent.classList.add('blogEntryContentStyle');
        this.applyPageStyle( 'blogEntryContent', blogContent );
        
        let tempContent = document.createElement('div');
        tempContent.classList.add('procPagesTempContentStyle');
        tempContent.innerHTML = sectionData.content;
        blogContent.appendChild( tempContent );

        let entries = sectionData.features.blogManager.entries || [];
        let blogOptions = sectionData.features.blogManager;
        delete blogOptions.entries;
        if( blogOptions.hasOwnProperty('contentStyle') && Array.isArray(blogOptions.contentStyle) ){
          blogOptions.contentStyle.forEach( style => {
            blogContent.classList.add(style);
          });
        }

        const blogData = {
          listParent: blogListing,
          listParentMobile: blogListingMobile,
          contentParent: blogContent,
          options: blogOptions,
          entries: entries
        };
        let pageBlogManager = new BlogManager( sectionContentDiv, blogData );

        sectionContentDiv.appendChild( blogListing );
        sectionContentDiv.appendChild( blogListingMobile );
        sectionContentDiv.appendChild( blogContent );
        sectionContentParent.appendChild( sectionContentDiv );

        pageBlogManager.init();
        pageBlogManager.build();

        
        let entryContentStyles = sectionData.features.blogManager?.contentStyle || [];
        entryContentStyles.forEach( style => {
          pageBlogManager.applyEntryStyle(style);
        });
        let headerSpacerStyles = sectionData.features.blogManager?.spacerStyle || [];
        headerSpacerStyles.forEach( style => {
          pageBlogManager.addSpacerStyle(style);
        });
        
        ret['blog'] = pageBlogManager;
        ret['content'].push( blogListing );
        ret['content'].push( blogContent );
        return ret;
      }
    }

    if( sectionData.content != '' ){
      let sectionContentDiv = document.createElement('div');
      sectionContentDiv.classList.add('procPagesInnerContentStyle');
      sectionContentDiv.innerHTML = sectionData.content;
      sectionContentDiv.classList.add('pagesVisOff');
      this.applyPageStyle( 'sectionContent', sectionContentDiv );

      sectionContentParent.appendChild( sectionContentDiv );
      ret['content'].push( sectionContentDiv );
    }

    if( sectionData.media.length > 0 ){
      let sectionMedia = document.createElement('div');
      sectionMedia.classList.add('procPagesMediaListStyle');
      sectionMediaParent.appendChild( sectionMedia );
      sectionData.media.forEach( mediaData => {
        mediaData['sectionName'] = sectionData.sectionName;
        let media = this.buildMedia( sectionMedia, mediaData );
        this.applyPageStyle( 'sectionMedia', media );
        sectionMedia.appendChild( media );

        if( mediaData.hasOwnProperty('caption') ){
          let innerHtml = '';
          if( typeof mediaData.caption == 'string' && mediaData.caption != '' ){
            innerHtml = mediaData.caption;
          }else if( Array.isArray(mediaData.caption) && mediaData.caption.length > 0 ){
            innerHtml = mediaData.caption.join('<br>');
          }
          if( innerHtml != '' ){
            let captionParent = document.createElement('div');
            captionParent.classList.add('procPagesMediaCaptionParentStyle');

            this.applyPageStyle( 'sectionCaption', captionParent );

            let caption = document.createElement('div');
            caption.classList.add('procPagesMediaCaptionStyle');
            caption.innerHTML = innerHtml;


            captionParent.appendChild( caption );
            sectionMedia.appendChild( captionParent );
          }
        }else if( sectionData.media.length > 1 ){
          media.classList.add('procPagesMediaPad');
        }
      });
      sectionMedia.classList.add('pagesVisOff');
      ret['content'].push( sectionMedia );
      ret['media'].push( sectionMedia );
    }
    return ret;
  }

  // -- -- --


/**
 * Applies page styles to an element
 * @param {string} styleType - Style type to apply
 * @param {HTMLElement} obj - Element to apply styles to
 */
  applyPageStyle( styleType, obj ){
    if( this.pageStyles.hasOwnProperty( styleType ) && Array.isArray( this.pageStyles[ styleType ] ) ){
      this.pageStyles[ styleType ].forEach(( style )=>{ style!=''&&obj.classList.add(style) });
    }
  }

/**
 * Checks if page has a specific style type
 * @param {string} styleType - Style type to check for
 * @returns {boolean} True if style type exists
 */
  hasPageStyle( styleType ){
    return this.pageStyles.hasOwnProperty( styleType );
  }


  subscribe( callback ){
    if( typeof callback == 'function' ){
      this.callbacks.push( callback );
    }
  }
  emit( ...args ){
    this.callbacks.forEach( (callbackFn)=>{
      if( typeof callbackFn == 'function' ){
        callbackFn( ...args );
      }
    });
  }

}