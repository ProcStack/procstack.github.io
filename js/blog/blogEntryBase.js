export const baseEntryStruct = () =>{
  return {
    'eid': '',
    'title': '',
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
    this.date = entryData.date;
    this.body = entryData.body;
    this.tags = entryData.tags;
    
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
    this.blogEntryObj = document.createElement('div');
    this.titleRowObj = document.createElement('div');
    this.titleRowObj.classList.add('blogEntryTitleRowStyle');
    this.titleObj = document.createElement('h1');
    this.titleObj.classList.add('blogEntryTitleStyle');
    this.dateObj = document.createElement('p');
    this.dateObj.classList.add('blogEntryDateStyle');
    this.readTimeObj = document.createElement('p');
    this.readTimeObj.classList.add('blogEntryReadTimeStyle');
    this.accessibilityObj = document.createElement('p');
    this.accessibilityObj.classList.add('blogEntryAccessibilityStyle');
    // -- -- --
    this.headerBodySpacer = document.createElement('div');
    // -- -- --
    this.bodyObj = document.createElement('p');
    this.bodyObj.style.fontSize = '1.2em';
    this.tagsObj = document.createElement('p');
    this.tagsObj.classList.add('blogEntryTagStyle');
    this.titleObj.innerHTML = this.title;
    this.dateObj.innerHTML = this.date;
    this.readTimeObj.innerHTML = this.getReadTime( this.body );
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
    this.titleRowObj.appendChild(this.readTimeObj);
    this.titleRowObj.appendChild(this.accessibilityObj);
    this.blogEntryObj.appendChild(this.titleRowObj);
    this.blogEntryObj.appendChild(this.headerBodySpacer);
    this.blogEntryObj.appendChild(this.bodyObj);
    this.blogEntryObj.appendChild(this.tagsObj);
    parentObj.appendChild(this.blogEntryObj);
  }

  getReadTime( text, toggleMobileView=true ){
    let wordsPerMinute_low = 150;
    let wordsPerMinute_high = 300;
    let textLength = text.split(' ').length;
    let readTime_low = Math.ceil( textLength / wordsPerMinute_low );
    let readTime_high = Math.ceil( textLength / wordsPerMinute_high );
    let retVal = `${readTime_high}<span class="textShrinkRay">&nbsp;</span>-<span class="textShrinkRay">&nbsp;</span>${readTime_low} min`;
    if( toggleMobileView ){
      retVal += `<span class='hideOnMobile'> read</span>`;
    }else{
      retVal += ` read`;
    }
    if( readTime_low === readTime_high ){
      retVal = `${readTime_low} min<span class='hideOnMobile'> read</span>`;
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