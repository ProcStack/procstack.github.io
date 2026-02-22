
export const ENTRY_MARK_ENUM = {
  NONE: 0,
  FEATURED: 1,
  PICK: 2,
  IMPORTANT: 3
};

export const baseEntryStruct = () =>{
  return {
    'eid': '',
    'title': '',
    'marked': ENTRY_MARK_ENUM.NONE,
    'date': '',
    'tags': [],
    'body': ''
  };
}

export class blogEntry{
  constructor( parent, entryData ){
    this.id = null;
    this.parent = parent;
    //this.rawEntryData = entryData; // I have no need for it yet, but maybe
    this.title = entryData.title;
    this.marked = entryData.marked || ENTRY_MARK_ENUM.NONE;
    this.date = entryData.date;
    this.body = entryData.body;
    this.tags = entryData.tags;

    this.readTimes = null;
    
    this.blogEntryObj = null;
    this.titleObj = null;
    this.dateObj = null;
    this.bodyObj = null;
    this.tagsObj = null;
    
    this.urlRoute = "";
    if( this.title && this.date ){
      const formattedTitle = this.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]*/g, '').toLowerCase();
      const blogRoute = `${this.date}/${formattedTitle}.htm`;
      this.urlRoute = blogRoute;
    }

    this.callbacks = [];
  }
  setId( id ){
    this.id = id;
  }
  setParent( parent ){
    this.parent = parent;
  }
  build( parent=null ){
    let parentObj = parent;
    if( parentObj == null ){
      if( this.parent == null ){
        console.error('No Parent Object set');
        return;
      }
      parentObj = this.parent;
    }

    // Calculate read times for the entry
    //   Used in the pc & mobile listing, and in the entry header on
    this.readTimes = this.getReadTimes( this.body );

    this.blogEntryObj = document.createElement('div');
    this.titleRowObj = document.createElement('div');
    this.titleRowObj.classList.add('blogEntryTitleRowStyle');
    this.titleObj = document.createElement('h1');
    this.titleObj.classList.add('blogEntryTitleStyle');
    this.dateObj = document.createElement('p');
    this.dateObj.classList.add('blogEntryDateStyle');

    this.readTimeBodyObj = document.createElement('p');
    this.readTimeBodyObj.classList.add('blogEntryReadTimeStyle');

    this.accessibilityObj = document.createElement('p');
    this.accessibilityObj.classList.add('blogEntryAccessibilityStyle');
    // -- -- --
    
    let titlePadding = document.createElement('div');
    titlePadding.classList.add('blogEntryTitlePaddingStyle');
    titlePadding.appendChild( this.titleRowObj );
    
    // -- -- --
    this.headerBodySpacer = document.createElement('div');
    // -- -- --
    this.bodyObj = document.createElement('p');
    this.bodyObj.style.fontSize = '1.2em';
    this.tagsObj = document.createElement('p');
    this.tagsObj.classList.add('blogEntryTagStyle');
    this.titleObj.innerHTML = this.title;
    this.dateObj.innerHTML = this.date;
    this.readTimeBodyObj.innerHTML = this.getReadTimeContent();
    this.bodyObj.innerHTML = this.body;
    this.tagsObj.innerHTML = this.tags.join(', ');
    // -- -- --
    // Accessibility Buttons; Font Size +/- for now
    let plusBtn = document.createElement('button');
    plusBtn.classList.add('blogEntryAccessibilityButtonStyle');
    plusBtn.classList.add('procPagesNavSectionStyle');
    plusBtn.classList.add('procPagesButtonStyle');
    plusBtn.classList.add('procPagesSectionNavColor');
    //procPagesNavSectionStyle procPagesButtonStyle procPagesSectionNavColor aiDevPage-sectionNavButtonStyle
    plusBtn.innerHTML = '+';
    plusBtn.title = 'Increase Font Size';
    this.accessibilityObj.appendChild(plusBtn);
    plusBtn.addEventListener('click', (e)=>{this.resizeText(.2);});
    let minusBtn = document.createElement('button');
    minusBtn.classList.add('blogEntryAccessibilityButtonStyle');
    minusBtn.classList.add('procPagesNavSectionStyle');
    minusBtn.classList.add('procPagesButtonStyle');
    minusBtn.classList.add('procPagesSectionNavColor');
    minusBtn.innerHTML = '-';
    minusBtn.title = 'Decrease Font Size';
    this.accessibilityObj.appendChild(minusBtn);
    minusBtn.addEventListener('click', (e)=>{this.resizeText(-.2);});
    // -- -- --
    this.titleRowObj.appendChild(this.titleObj);
    this.titleRowObj.appendChild(this.dateObj);
    this.titleRowObj.appendChild(this.readTimeBodyObj);

    let clonedTitleRow = this.titleRowObj.cloneNode( true );

    this.titleRowObj.appendChild(this.accessibilityObj);

    // -- -- --

    // Duplicate accessibility objects for sticky header
    // Remake Plus & Minus buttons to get listeners working again
    let stickyAccessibilityObj = document.createElement('div');
    stickyAccessibilityObj.classList.add('blogEntryAccessibilityStyle');
    let stickyPlusBtn = plusBtn.cloneNode( true );
    stickyPlusBtn.addEventListener('click', (e)=>{this.resizeText(.2);});
    let stickyMinusBtn = minusBtn.cloneNode( true );
    stickyMinusBtn.addEventListener('click', (e)=>{this.resizeText(-.2);});
    stickyAccessibilityObj.appendChild( stickyPlusBtn );
    stickyAccessibilityObj.appendChild( stickyMinusBtn );

    clonedTitleRow.appendChild(stickyAccessibilityObj);


    // -- -- --

    this.blogEntryObj.appendChild( titlePadding );
    this.blogEntryObj.appendChild( this.headerBodySpacer );

    // -- -- --

    let bodyPadding = document.createElement('div');
    bodyPadding.classList.add('blogEntryPaddingStyle');
    bodyPadding.appendChild( this.bodyObj );
    //this.bodyObj = bodyPadding;

    this.blogEntryObj.appendChild( bodyPadding );
    this.blogEntryObj.appendChild( this.tagsObj );
    parentObj.appendChild( this.blogEntryObj );
  }

  getReadTimes( text ){
    // Average is 200-250 words per minute,
    //   But I was a slow reader when I was younger.
    //     Benefit of the doubt
    let wordsPerMinute_low = 150;
    let wordsPerMinute_high = 270;

    let textLength = text.split(' ').length;
    let readTime_low = Math.ceil( textLength / wordsPerMinute_low );
    let readTime_high = Math.ceil( textLength / wordsPerMinute_high );

    return {
      low: readTime_low,
      high: readTime_high
    };
  }

  getReadTimeContent( addReadText=true, toggleMobileView=true ){

    if( this.readTimes == null ){
      this.readTimes = this.getReadTimes( this.body );
    }

    let retVal = "";

    if( this.readTimes.low === this.readTimes.high ){
      retVal = `${this.readTimes.low} min`;
    }else{
      retVal = `${this.readTimes.high}<span class="textShrinkRay">&nbsp;</span>-<span class="textShrinkRay">&nbsp;</span>${this.readTimes.low} min`;
    }

    if( addReadText ){
      if( toggleMobileView ){
        retVal += `<span class='hideOnMobile'> read</span>`;
      }else{
        retVal += ` read`;
      }
    }
    return retVal;
  }

  resizeText( dir ){
      let currentSize = this.bodyObj.style.fontSize;
      currentSize = parseFloat(currentSize);
      let toSize = Math.min( Math.max( currentSize + dir, .6 ), 3.5 );
      this.bodyObj.style.fontSize = toSize + 'em';
  }

  show(){
    this.blogEntryObj.style.display = 'block';
    this.updateURL();
  }
  hide(){
    this.blogEntryObj.style.display = 'none';
  }

  addBlogEntryStyle( style ){
    if( this.blogEntryObj ){
      this.blogEntryObj.classList.add(style);
    }
  }

  addHeaderSpacerStyle( style ){
    if( this.headerBodySpacer ){
      this.headerBodySpacer.classList.add(style);
    }
  }

  subscribeToURLChange( callback ){
    this.callbacks.push( callback );
  }
  updateURL(){
    this.callbacks.forEach( (cb)=>{ cb( this.urlRoute ); } );
  }
}