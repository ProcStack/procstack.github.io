// Core ProcPages content manager


export class ProcPage {
  constructor( contentObject ){
    this.metaData = contentObject.metaData || {};
    this.visible = contentObject.visible ? contentObject.visible : true;
    this.id = contentObject.id || null;
    this.idPrefix = contentObject.idPrefix || "pxlPage_";
    this.page = contentObject.page || "Default";
    this.name = contentObject.name || "";
    this.header = contentObject.header || "";
    this.subHeader = contentObject.subHeader || "";
    this.footer = contentObject.footer || "";
    this.pageStyles = contentObject.pageStyles || "";
    this.styleOverrides = contentObject.styleOverrides || {};

    this.pageObject = null;
    this.pageContent = {};

    // -- -- --

    this.defaultSectionData = {
      'isLoaded' : false,
      'name' : '',
      'content' : '',
      'media' : []
    };

    this.validMediaTypes = ['image', 'manualLoad', 'video', 'audio', 'youtube'];
    this.defaultMediaData = {
      'isLoaded' : false, // internal use
      'type':'image', // required - image, manualLoad, youtube, ...
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
        let sectionContent = Object.assign({}, this.defaultSectionData, contentObject[ 'sections' ][ sectionKey ]);
        this.addSection( sectionKey, sectionContent );
      });
    }
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
    this.sectionData[sectionName] = sectionContent;
  }
  
  removeSection( sectionName ){
    if( !this.sectionTitles.includes( sectionName ) ) return;
    
    this.sectionTitles.splice( this.sectionTitles.indexOf(sectionName), 1 );
    delete this.sectionData[sectionName];
  }

  // -- -- --

  getDefaultData(){
    return Object.assign({}, this.defaultSectionData);
  }
  getDefaultMedia(){
    return Object.assign({}, this.defaultMediaData);
  }

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

  buildImages( sectionName, imageList ){
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, {} );
    }
    if( !Array.isArray(imageList) ){
      imageList = [imageList];
    }
    imageList.forEach( image => {
      if( typeof image == 'string' ){
        let imgPath = image;
        image = Object.assign({}, this.defaultMediaData);
        image.type = 'image';
        image.src = imgPath;
      }

      let newImage = this.buildImage( image );
      this.sectionData[sectionName].media.push( newImage );
    });
  }

  // -- -- --

  buildImage( mediaData ){
    let img = document.createElement('img');
    img.src = mediaData.src;
    img.alt = mediaData.alt;
    img.classList.add('mediaImage');
    if( mediaData.style ){
      if( typeof mediaData.style == 'string' ){
        img.classList.add(mediaData.style);
      } else if( Array.isArray(mediaData.style) ){
        mediaData.style.forEach( (c)=>{ img.classList.add(c); });
      }
    }
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
    let manualWidth = mediaData.width || 320;
    let manualHeight = mediaData.height || 240;
    let manualAlt = mediaData.alt || '';
    let manualClass = mediaData.style || [];

    let manualObj = document.createElement('div');
    manualObj.classList.add('manualLoadImage');
    manualObj.style.width = manualWidth+"px";
    manualObj.style.height = manualHeight+"px";
    
    
    // Create the placeholder div
    let placeholder = document.createElement('div');
    placeholder.innerHTML = "&lt; Click to Play &gt;";
    placeholder.classList.add('manualLoadPlaceholder');
    placeholder.style.aspectRatio = manualWidth+"/"+manualHeight;
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
    this.sectionData[sectionName].media.push( videoData );
    this.buildVideoEmbed( sectionName, videoData );
  }

  // -- -- --

  addYoutube( sectionName, youtubeID='', altText='' ){
    if( !youtubeID || youtubeID == '' ){
      console.error("No youtube ID provided for section: "+sectionName);
      return;
    }
    if( !this.sectionTitles.includes( sectionName ) ){
      this.addSection( sectionName, {} );
    }
    let ytData = Object.assign({}, this.defaultMediaData);
    ytData.type = 'youtube';
    ytData.src = youtubeID;
    ytData.alt = altText;

    let youtubeEmbed = this.buildYoutubeEmbed( ytData );
    ytData.object = youtubeEmbed;

    this.sectionData[sectionName].media.push( ytData );
  }

  buildYoutubeEmbed( mediaData ){
    let vidId = mediaData.src;
    let ytEmbed = document.createElement('iframe');
    ytEmbed.src = "https://www.youtube-nocookie.com/embed/"+vidId;
    ytEmbed.title = mediaData.alt;
    ytEmbed.frameborder = 0;
    ytEmbed.allow = "encrypted-media; picture-in-picture; web-share";
    ytEmbed.referrerpolicy = "strict-origin-when-cross-origin";
    ytEmbed.allowfullscreen = true;
    return ytEmbed;
  }

  // -- -- --

  buildMedia( mediaData ){
    let media = null;
    switch( mediaData.type ){
      case 'image':
        media = this.buildImage( mediaData );
        break;
      case 'manualLoad':
        media = this.buildManualLoad( mediaData );
        break;
      case 'video':
        media = this.buildVideo( mediaData );
        break;
      case 'audio':
        media = this.buildAudio( mediaData );
        break;
      case 'youtube':
        media = this.buildYoutubeEmbed( mediaData );
        break;
      default:
        console.error("Unknown media type: "+mediaData.type);
        break;
    }
    return media;
  }



  // -- -- --


  buildPage(){
    let pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    this.pageStyles.forEach(( style )=>{ pageContent.classList.add(style) });
    
    let curId = this.id;
    if( !curId || curId == '' ){
      curId = this.idPrefix + this.page;
      this.id = curId;
    }
    pageContent.id = curId;
    
    let pageHeader = document.createElement('div');
    pageHeader.classList.add('pageHeader');
    pageHeader.innerHTML = this.header;
    pageContent.appendChild( pageHeader );
    this.pageContent['header'] = pageHeader;

    let pageSubHeader = document.createElement('div');
    pageSubHeader.classList.add('pageSubHeader');
    pageSubHeader.innerHTML = this.subHeader;
    pageContent.appendChild( pageSubHeader );
    this.pageContent['subHeader'] = pageSubHeader

    let pageSections = document.createElement('div');
    pageSections.classList.add('pageSections');
    this.sectionTitles.forEach( sectionTitle => {
      let sectionData = this.sectionData[sectionTitle];
      let section = this.buildSection( sectionTitle, sectionData );
      pageSections.appendChild( section );
    });
    pageContent.appendChild( pageSections );
    this.pageContent['sections'] = pageSections;

    let pageFooter = document.createElement('div');
    pageFooter.classList.add('pageFooter');
    pageFooter.innerHTML = this.footer;
    pageContent.appendChild( pageFooter );
    this.pageContent['footer'] = pageFooter;

    this.pageObject = pageContent;

    return pageContent;
  }

  buildSection( sectionTitle, sectionData ){
    let section = document.createElement('div');
    section.classList.add('ProcPageSectionStyle');
    section.id = sectionTitle;

    let sectionTitleDiv = document.createElement('div');
    sectionTitleDiv.classList.add('sectionTitle');
    sectionTitleDiv.innerHTML = sectionData.name;
    section.appendChild( sectionTitleDiv );

    let sectionContent = document.createElement('div');
    sectionContent.classList.add('ProcPageContentStyle');
    sectionContent.innerHTML = sectionData.content;
    section.appendChild( sectionContent );

    let sectionMedia = document.createElement('div');
    sectionMedia.classList.add('ProcPageMediaStyle');
    sectionData.media.forEach( mediaData => {
      let media = this.buildMedia( mediaData );
      sectionMedia.appendChild( media );
    });
    section.appendChild( sectionMedia );

    return section;
  }
}