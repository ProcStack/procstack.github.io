// Core ProcPages content manager


export class ProcPage {
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

    this.layoutTypes = ['single', 'triple', 'vertical'];
    this.layout = 'triple';
    if( contentObject.hasOwnProperty('layout') && this.layoutTypes.includes(contentObject.layout) ){
      this.layout = contentObject.layout;
    }

    this.navButton = null;
    this.pageObject = null;
    this.pageContent = {};
    this.prevSection = null;
    this.pageSectionsObject = null;
    this.pageSectionListObject = null;
    this.pageContentView = null;
    this.mediaViewObject = null;

    // -- -- --

    this.defaultSectionData = {
      'isLoaded' : false,
      'isActive' : false,
      'name' : '',
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
  }

  // -- -- --

  getDefaultData(){
    return Object.assign({}, this.defaultSectionData);
  }
  getDefaultMedia(){
    return Object.assign({}, this.defaultMediaData);
  }
  
  // -- -- --

  setMetaData( metaData ){
    this.metaData = metaData;
  }

  // -- -- --
  
  addSection( sectionName, sectionContent ){
    this.sectionTitles.push(sectionName);
    if( !this.sectionData.hasOwnProperty(sectionName) ){
      sectionContent = Object.assign({}, this.defaultSectionData, sectionContent);
    }
    sectionContent.sectionName = sectionContent.name || sectionName;
    this.sectionData[sectionName] = sectionContent;
  }
  
  removeSection( sectionName ){
    if( !this.sectionTitles.includes( sectionName ) ) return;
    
    this.sectionTitles.splice( this.sectionTitles.indexOf(sectionName), 1 );
    delete this.sectionData[sectionName];
  }

// -- -- -- -- -- -- -- -- -- --
// -- Page Section Helpers  - -- --
// -- -- -- -- -- -- -- -- -- -- -- --

  getSection( sectionName ){
    return this.sectionData[sectionName];
  }

  setContent( sectionName, sectionContent ){
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, sectionContent );
    }
    this.sectionData[sectionName].content = sectionContent;
  }

  setSectionName( sectionName, sectionTitle ){
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, {} );
    }
    this.sectionData[sectionName].name = sectionTitle;
  }

// -- -- -- -- -- -- -- --
// -- Media Helpers  -- -- --
// -- -- -- -- -- -- -- -- -- --

  // Apply style to media objects if specified
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

  buildImage( mediaData ){
    let img = document.createElement('img');
    img.src = mediaData.src;
    img.alt = mediaData.alt;
    if( this.layout == 'vertical' ){
      img.classList.add('procPagesVerticalLockMediaImage');
    }else{
      img.classList.add('procPagesMediaImage');
    }
    
    this.applyStyle( mediaData, img );

    return img;
  }

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
      manualClass.forEach( (c)=>{ img.classList.add(c); });
      img.onload = () => {
        manualObj.innerHTML = "";
        manualObj.appendChild(img);
      };
      // Remove the placeholder after the image starts loading
      manualObj.innerHTML = "";
      manualObj.appendChild(img);
    });

    // Add the style classes to the manualObj
    this.applyStyle( mediaData, manualObj );

    // Append the placeholder to the manualObj
    manualObj.appendChild(placeholder);

    return manualObj;
  }
  // -- -- --


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
    }
    if( !this.validMediaTypes.includes(videoData.type) ){
      videoData.type = 'video';
    }
    
    let videoObject = this.buildVideoEmbed( videoData );
    videoData.object = videoObject;


    this.sectionData[sectionName].media.push( videoData );
  }

  buildVideoEmbed( mediaData ){
    let vidSrc = mediaData.src;
    let vidAlt = mediaData.alt;

    let vidEmbed = document.createElement('video');
    vidEmbed.src = vidSrc;
    vidEmbed.alt = vidAlt;
    vidEmbed.loop = true;
    vidEmbed.controls = true;
    //vidEmbed.classList.add('procPagesMediaVideo');

    this.applyStyle( mediaData, vidEmbed );
  
    return vidEmbed;

  }

  // -- -- --

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
      ytEmbed.allow = "encrypted-media; picture-in-picture; web-share";
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
      let pageSectionList = document.createElement('div');
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
      pageMediaView = document.createElement('div');
      pageMediaView.classList.add('procPageMediaView');
      
      this.applyPageStyle( 'media', pageMediaView );

      pageSections.appendChild( pageMediaView );
      this.mediaViewObject = pageMediaView;
    }

    // -- -- --

    let pageContentView = document.createElement('div');
    if( this.layout == 'triple' ){
      pageContentView.classList.add('procPageContentView');
    }else if( this.layout == 'vertical' ){
      pageContentView.classList.add('procPageVerticalLockContentView');
    }
    
    this.applyPageStyle( 'content', pageContentView );

    pageSections.appendChild( pageContentView );
    this.pageContentView = pageContentView;

    // -- -- --


    if( this.layout == 'single' ){
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

      }
    });
  }

  // -- -- --

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

    //pageSections.appendChild( section );

    this.sectionData[sectionName].isLoaded = true;

  }

  activateSection( sectionName ){

    if( Number.isInteger(sectionName) ){
      sectionName = this.sectionTitles[sectionName];
    }

    if( this.prevSection != null ){
      this.deactivateSection( this.prevSection );
    }

    this.prevSection = sectionName;
    this.sectionData[ sectionName ].isActive = true;

    if( this.sectionData[ sectionName ].isLoaded == false ){
      this.buildSection( sectionName );
    }

    this.sectionData[ sectionName ].header.classList.add( 'procPagesNavActive' );
    if( this.pageStyles.hasOwnProperty('sectionNavButtonActive') && Array.isArray( this.pageStyles['sectionNavButtonActive'] ) ){
      this.pageStyles['sectionNavButtonActive'].forEach(( style )=>{
        this.sectionData[ sectionName ].header.classList.add( style );
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
        this.mediaViewObject.style.alignContent = "center";
        this.mediaViewObject.style.height = "auto";
      }
    }else if( this.layout == "vertical" ){ // Vertical locked layout
      if( mediaLength == 0 ){
        this.pageSectionsObject.classList.add('procPageNoMediaLockVerticalStyle');
        this.mediaViewObject.style.display = "none";
      }else if( mediaLength == 1 ){
        this.mediaViewObject.style.alignContent = "center";
        this.mediaViewObject.style.height = "auto";
      }
    }

    this.sectionData[ sectionName ].objects.forEach(( obj )=>{
      obj.classList.add('procPagesSectionActive');
      obj.classList.add('pagesVisOn');
      obj.classList.remove('pagesVisOff');
      obj.scrollTop = 0;
    });
  }



  deactivateSection( sectionName ){
    this.sectionData[ sectionName ].isActive = false;
    this.sectionData[ sectionName] .header.classList.remove('procPagesNavActive');
    if( this.pageStyles.hasOwnProperty('sectionNavButtonActive') && Array.isArray( this.pageStyles['sectionNavButtonActive'] ) ){
      this.pageStyles['sectionNavButtonActive'].forEach(( style )=>{
          this.sectionData[ sectionName ].header.classList.remove( style );
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

  // TODO - Implement Vertical Page Layout
  buildVerticalPage(){
    this.buildHorizontalPage();
  }


  // -- -- --

  buildSinglePageSection( sectionData, sectionContentParent ){
    if( sectionData.content != '' ){
      let sectionContentDiv = document.createElement('div');
      sectionContentDiv.classList.add('procPagesInnerContentSingleStyle');
      sectionContentDiv.innerHTML = sectionData.content;
      this.applyPageStyle( 'sectionContent', sectionContentDiv );

      sectionContentParent.appendChild( sectionContentDiv );
    }
  }

  buildTriplePageSection( sectionData, sectionContentParent, sectionMediaParent ){
    let ret = {
      'content' : [],
      'media' : []
    };

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


  applyPageStyle( styleType, obj ){
    if( this.pageStyles.hasOwnProperty( styleType ) && Array.isArray( this.pageStyles[ styleType ] ) ){
      this.pageStyles[ styleType ].forEach(( style )=>{ style!=''&&obj.classList.add(style) });
    }
  }

  hasPageStyle( styleType ){
    return this.pageStyles.hasOwnProperty( styleType );
  }

}