
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
    this.isMobile = false;
    this.parent = parent;
    //this.rawEntryData = entryData; // I have no need for it yet, but maybe
    this.title = entryData.title;
    this.marked = entryData.marked || ENTRY_MARK_ENUM.NONE;
    this.date = entryData.date;
    this.body = entryData.body;
    this.tags = entryData.tags;
    
    // -- -- --
    // Bionic Reading Data & State
    //   Neurodivergent Text Mode for Autism & ADHD
    //   Bolded initial letters of words to allow the brain to fill in the rest of the word for easier reading.
    //     https://bionic-reading.com/
    
    this.autoBuildBionic = true;
    this.bionicMode = false;
    this.isBionicTextBuilding = false;

    this.bionicPercentConversion = .5; // Percent of the word to convert to bold 
    this.bionicPercentConversion_desktop = .5;
    this.bionicPercentConversion_mobile = .35;
    this.bionicBuildWaitTime = 50; // MS Waittime between building chunks of bionic text
    this.bionicBuildRunMax = 10; // Number of lines of text to convert per wait time timeout into bionic text, avoids thread locking the browser on long entries.
    this.body_bionic_toProcess = entryData.body.split('\n'); // To Convert; Unprocessed body -> bionic conversion
    this.body_bionic = null; // Built on demand
    this.body_typical = entryData.body;
    this.bionicTimeout = null;
    
    // -- -- --
    
    this.readTimes = null;
    
    this.blogEntryObj = null;
    this.accessibilityObj = null;
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
  setMobile( isMobile ){
    this.isMobile = !!isMobile;
    if( this.isMobile ){
      this.bionicPercentConversion = this.bionicPercentConversion_mobile;
    }else{
      this.bionicPercentConversion = this.bionicPercentConversion_desktop;
    }

    // Re-trigger Bionic Text Building from scratch
    //  TODO : I should pass bionic build through the pageManager, but for now, I'm just re-running it.
    if( this.isBionicTextBuilding ){
      clearTimeout( this.bionicTimeout );
      this.isBionicTextBuilding = false;
      this.body_bionic = null;
      this.body_bionic_toProcess = this.body.split('\n');
      this.buildBionicBody();
    }
  }

  // -- -- -- 

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
    plusBtn.classList.add('accessibilitySectionStyle');
    plusBtn.classList.add('procPagesButtonStyle');
    plusBtn.classList.add('procPagesSectionNavColor');
    //procPagesNavSectionStyle procPagesButtonStyle procPagesSectionNavColor aiDevPage-sectionNavButtonStyle
    plusBtn.innerHTML = '+';
    plusBtn.title = 'Increase Font Size';
    this.accessibilityObj.appendChild(plusBtn);
    plusBtn.addEventListener('click', (e)=>{this.resizeText(.2);});
    let minusBtn = document.createElement('button');
    minusBtn.classList.add('blogEntryAccessibilityButtonStyle');
    minusBtn.classList.add('accessibilitySectionStyle');
    minusBtn.classList.add('procPagesButtonStyle');
    minusBtn.classList.add('procPagesSectionNavColor');
    minusBtn.innerHTML = '-';
    minusBtn.title = 'Decrease Font Size';
    this.accessibilityObj.appendChild(minusBtn);
    minusBtn.addEventListener('click', (e)=>{this.resizeText(-.2);});

    // Bionic Reading Toggle
    //   Neurodivergent Text Mode for Autism & ADHD
    //   Bolded initial letters of words to allow the brain to fill in the rest of the word for easier reading.
    //     https://bionic-reading.com/
    let bionicButton = document.createElement('button');
    bionicButton.classList.add('blogEntryAccessibilityButtonStyle');
    bionicButton.classList.add('accessibilitySectionStyle');
    bionicButton.classList.add('procPagesButtonStyle');
    bionicButton.classList.add('procPagesSectionNavColor');
    bionicButton.classList.add('bionicToggleButtonStyle');
    bionicButton.innerHTML = '<span class="hideOnMobile">To&nbsp;</span>Bionic';
    bionicButton.title = 'Toggle Bionic Reading';
    this.accessibilityObj.appendChild(bionicButton);
    bionicButton.addEventListener('click', (e)=>{this.toggleBionicReading( bionicButton );});


    // -- -- --

    // Build title row

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

    // Giscus Comment Container
    this.commentObj = document.createElement('div');
    this.commentObj.id = `giscus-container-${this.id}`;
    this.blogEntryObj.appendChild(this.commentObj);

    parentObj.appendChild( this.blogEntryObj );


    // -- -- --

    // Initialize Bionic Text Conversion
    if( this.autoBuildBionic ){
      this.buildBionicBody();
    }
  }

  // -- -- --

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
  
  // -- -- --

  resizeText( dir ){
      let currentSize = this.bodyObj.style.fontSize;
      currentSize = parseFloat(currentSize);
      let toSize = Math.min( Math.max( currentSize + dir, .6 ), 3.5 );
      this.bodyObj.style.fontSize = toSize + 'em';
  }

  // -- -- --

  toggleBionicReading(  buttonObj=null ){

    let isBuilding = this.isBionicTextBuilding;
    if( this.isBionicTextBuilding ){
      if( this.bionicTimeout ){
        clearTimeout( this.bionicTimeout );
      }
      this.isBionicTextBuilding = false;
    }

    this.bionicMode = !this.bionicMode;

    // End processing and process the rest of the toProcess bionic body text
    if( this.bionicMode && this.verifyBionicBuilt() ){
      this.bodyObj.innerHTML = this.body_bionic;
    }else{
      this.bodyObj.innerHTML = this.body_typical;
    }

    // Update button text
    if( buttonObj ){
      if( this.bionicMode ){
        buttonObj.innerHTML = '<span class="hideOnMobile">To&nbsp;</span>Typical';
      }else{
        buttonObj.innerHTML = '<span class="hideOnMobile">To&nbsp;</span>Bionic';
      }
    }
  }

  // Process line chunks of the body text into bionic text,
  //   Building up `this.body_bionic` until all lines are processed.
  buildBionicBody(){
    this.isBionicTextBuilding = true;

    let selectedLines = this.body_bionic_toProcess.splice( 0, this.bionicBuildRunMax );
    this.processBionicLines( selectedLines );
    if( this.body_bionic_toProcess.length > 0 ){
      this.bionicTimeout = setTimeout( () => { this.buildBionicBody(); }, this.bionicBuildWaitTime );
    }else{
      this.isBionicTextBuilding = false;
      this.body_bionic_toProcess = null;
      this.bionicTimeout = null;
    }
  }

  // Process a provided array of lines into bionic text
  //   This will process all lines if the full `this.body_bionic_toProcess` is provided
  processBionicLines( lines ){
    let keepMatch = /(&nbsp;|[</](br|div|span|p|)|(class.+>))/g;
    if( lines.length === 0 ){
      this.isBionicTextBuilding = false;
      return;
    }
    let toProcess = lines.splice( 0, this.bionicBuildRunMax );
    toProcess.forEach( (line) => {
      let textBreaks = line.split(' ');
      let convertedLine = textBreaks.map( word => { 
                            // Find and return HTML tags & &nbsp;
                            let hasMatch = word.match( keepMatch );
                            if( hasMatch != null && hasMatch.length > 0 ){
                              return word;
                            }

                            // Find dashes in word
                            let hyph = word.split('-');
                            if( hyph.length > 1 ){
                              return hyph.map( part => this.convertToBionic(part) ).join('-');
                            }

                            hyph = word.split('+');
                            if( hyph.length > 1 ){
                              return hyph.map( part => this.convertToBionic(part) ).join('+');
                            }
                            
                            // Convert word to bionic
                            return this.convertToBionic(word);
                          } ).join(' ');
      if( this.body_bionic == null ){
        this.body_bionic = convertedLine;
      }else{
        this.body_bionic += '\n' + convertedLine;
      }
    });
  }

  // Verify if the body needs to be fully processed in one go
  //   The user clicked the Bionic button before processing finished
  verifyBionicBuilt(){
    if( this.body_bionic_toProcess != null && this.body_bionic_toProcess.length > 0 ){
      clearTimeout( this.bionicTimeout );
      this.processBionicLines( this.body_bionic_toProcess );
      this.body_bionic_toProcess = null;
      this.isBionicTextBuilding = false;
    }
    return true;
  }

  // Bolden the first X% of the word, minimum 1 letter
  //   Percentage set in `this.bionicPercentConversion`
  convertToBionic( text ){
    if( text.trim().length === 0 ){
      return text;
    }
    let matchReg = /(?!.*[<>])([\d\D])/g;
    let matchOnce = text.match( matchReg );
    if( matchOnce == null ){
      return text;
    }
    
    let stringRun = Math.ceil(text.length * this.bionicPercentConversion);
    stringRun = Math.max( stringRun, 1 );

    let retVal = "";
    retVal += `<span class="textBold">${text.substring(0, stringRun)}</span>`;
    retVal += text.substring(stringRun);
    return retVal;
  }

  // -- -- --

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