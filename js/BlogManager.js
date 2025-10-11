// Simple blog manager for my procstack blog


import { blogEntries as procBlogEntries } from './blog/blogEntries.js';
import { blogEntry } from './blog/blogEntryBase.js';

export class BlogManager {
  /**
   * @param {HTMLElement} listParent - DOM parent for the blog listing (buttons/links)
   * @param {HTMLElement} contentParent - DOM parent where blog content entries will be built
   * @param {Object} [options] - Optional settings: { entryData: blogEntry[], listingContainer: String, entryContainer: String, spacerStyle: String[] }
   */
  constructor( blockParent, blogData = {} ){
    this.blockParent = blockParent;
    this.listParent = blogData.listParent || null;
    this.listParentMobile = blogData.listParentMobile || null;
    this.contentParent = blogData.contentParent || null;
    this.options = blogData.options || {};
    this.blogEntries = blogData.entries || [];
    this.mobileIndex = 0;
    this.mobileListPage = 0;
    this.currentEntry = null;
    this.tempContent = [...(this.contentParent?.childNodes || [])];
    this.runTempDestroy = false;

    this.urlBasePath = "";
    if( blogData.hasOwnProperty('pageName') ){
      this.urlBasePath += `/${blogData.pageName}`;
    }
    if( blogData.hasOwnProperty('htmlName') ){
      let urlStrip = blogData.htmlName.replace('.htm','').replace('.html','');
      this.urlBasePath += `/${urlStrip}`;
    }
    this.currentUrlPath = "";
  }

  /**
   * Initialize blog entries.
   */
  init(){
    if( this.options.hasOwnProperty('entries') && this.options.entries.length > 0 ){
      this.blogEntries.push( ...this.options.entries );
      return;
    }

    // Fallback to the default bundled blogEntries
    if( this.blogEntries.length === 0 && Array.isArray(procBlogEntries) ){
      this.loadFromObject( procBlogEntries );
    }
  }

  loadFromObject( entriesObj ){
    //this.blogEntries = [];
    let blogEntryKeys = Object.keys(entriesObj || {});
    console.log(blogEntryKeys.length)
    for( let i = 0; i < blogEntryKeys.length; i++ ){
      let curEntry = entriesObj[blogEntryKeys[i]];
      this.blogEntries.push( curEntry );
      curEntry.subscribeToURLChange( this.entryURLChange.bind(this) )
    }
  }
  setListParent( listParent ){
    this.listParent = listParent;
  }
  setContentParent( contentParent ){
    this.contentParent = contentParent;
  }
  addBlogEntry( title, date, tags, body ){
    // Ensure we pass a sensible parent to the blogEntry constructor
    let parentForEntry = this.contentParent || this.listParent || null;

    let newBlogEntry = new blogEntry( parentForEntry, title, date, tags, body );
    newBlogEntry.setId( this.blogEntries.length );
    newBlogEntry.subscribeToURLChange( this.entryURLChange.bind(this) );

    this.blogEntries.push( newBlogEntry );
  }
  build( parent=null ){
    let parentObj = parent;
    if( parentObj == null ){
      if( this.contentParent == null ){
        console.error('No Parent Object set');
        return;
      }
      parentObj = this.contentParent;
    }
    let entryOrder = this.blogEntries;
    if( this.options.order === 'descending' ){
      entryOrder = [...entryOrder].reverse();
    }
    for( let i = 0; i < entryOrder.length; i++ ){
      // Content Prep
      entryOrder[i].setId( i );
      entryOrder[i].build( parentObj );
      entryOrder[i].hide();

      // Listing Prep
      let curEntryName = `
        ${entryOrder[i].title}
        ${this.getDateDisplay(entryOrder[i].date)}`;
      this.addListing( curEntryName, i );
      // mobile listing is handled by a single control bar + popup
    }
    // create mobile controls after entries are prepared
    if( this.listParentMobile ){
      this.buildMobileControls();
    }

    
    if( this.options.order === 'descending' ){
      this.mobileIndex = 0;
    }else{
      this.mobileIndex = this.blogEntries.length - 1;
    }

    this.runTempDestroy = false;

    this.showEntry( this.mobileIndex );
    
    this.runTempDestroy = true;
  }

  getDateDisplay( dateStr ){
    let ret = `<div class='blogSubListingStyle'>:: ${dateStr}</div>`;
    return ret;
  }

  addListing( titleHtml, index ){
    let entry = document.createElement('button');
    entry.innerHTML = titleHtml;
    entry.classList.add('blogEntryListingStyle');
    entry.addEventListener('click', () => {
      this.showEntry( index );
    });
    this.listParent.appendChild(entry);
  }

  applyEntryStyle( entryStyle ){
    if( this.blogEntries.length > 0 ){
      this.blogEntries.forEach( entry => {
        entry.addBlogEntryStyle(entryStyle);
      });
    }
  }

  addSpacerStyle( entryStyle ){
    if( this.blogEntries.length > 0 ){
      this.blogEntries.forEach( entry => {
        entry.addHeaderSpacerStyle(entryStyle);
      });
    }
  }

  /**
   * Build the mobile control bar (prev, current, next) and the popup list.
   */
  buildMobileControls(){
    if( this.mobileControlsBuilt ) return;
    this.mobileControlsBuilt = true;
    this.mobileIndex = 0;

    // container for controls
    let container = document.createElement('div');
    container.classList.add('mobileListControls');

    // Prev button
    let prevBtn = document.createElement('button');
    prevBtn.classList.add('blogEntryListingStyle');
    prevBtn.classList.add('blogMobilePrev');
    prevBtn.innerText = '\u25C0 Older'; // ◀
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); this.mobilePrev(); });

    // Current display (opens popup)
    let curBtn = document.createElement('button');
    curBtn.classList.add('blogEntryListingStyle');
    curBtn.classList.add('blogMobileCurrent');
    curBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openMobilePopup(); });

    // Next button
    let nextBtn = document.createElement('button');
    nextBtn.classList.add('blogEntryListingStyle');
    nextBtn.classList.add('blogMobileNext');
    nextBtn.innerText = 'Newer \u25B6'; // ▶
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); this.mobileNext(); });

    this.listParentMobile.appendChild(prevBtn);
    this.listParentMobile.appendChild(curBtn);
    this.listParentMobile.appendChild(nextBtn);

    //this.listParentMobile.appendChild(container);

    // save references
    this._mobile = {
      container, prevBtn, curBtn, nextBtn, popup: null
    };

    if( this.options.order === 'descending' ){
      this.mobileIndex = this.blogEntries.length - 1;
    }else{
      this.mobileIndex = (this.mobileIndex - 1 + this.blogEntries.length) % this.blogEntries.length;
    }

    this.updateMobileCurrentDisplay();
  }

  updateMobileCurrentDisplay(){
    if( !this._mobile ) return;
    if( this.blogEntries.length === 0 ){
      this._mobile.curBtn.innerHTML = 'No entries';
      return;
    }
    // clamp index
    if( this.mobileIndex < 0 ) this.mobileIndex = 0;
    if( this.mobileIndex >= this.blogEntries.length ){
      this.mobileIndex = this.blogEntries.length - 1;
    }
    let entry = this.blogEntries[this.mobileIndex];
    let curEntryName = `\n      ${entry.title}\n      ${this.getDateDisplay(entry.date)}`;
    this._mobile.curBtn.innerHTML = curEntryName;
  }

  mobilePrev(){
    if( this.blogEntries.length === 0 ) return;
    if( this.options.loopBack ){
      if( this.options.order === 'descending' ){
        this.mobileIndex = (this.mobileIndex - 1 + this.blogEntries.length) % this.blogEntries.length;
      }else{
        this.mobileIndex = (this.mobileIndex + 1) % this.blogEntries.length;
      }
    }else{
      if( this.options.order === 'descending' ){
        this.mobileIndex = Math.max(this.mobileIndex - 1, 0);
      }else{
        this.mobileIndex = Math.min(this.mobileIndex + 1, this.blogEntries.length - 1);
      }
    }
    this.showEntry( this.blogEntries[this.mobileIndex].id );
    //this.updateMobileCurrentDisplay();
  }

  mobileNext(){
    if( this.blogEntries.length === 0 ) return;
    if( this.options.loopBack ){
      if( this.options.order === 'descending' ){
        this.mobileIndex = (this.mobileIndex + 1) % this.blogEntries.length;
      }else{
        this.mobileIndex = (this.mobileIndex - 1 + this.blogEntries.length) % this.blogEntries.length;
      }
    }else{
      if( this.options.order === 'descending' ){
        this.mobileIndex = Math.min(this.mobileIndex + 1, this.blogEntries.length - 1);
      }else{
        this.mobileIndex = Math.min(this.mobileIndex - 1, 0);
      }
    }
    this.showEntry( this.blogEntries[this.mobileIndex].id );
    //this.updateMobileCurrentDisplay();
  }


  updatePrevNextButtonStates(){
    if( !this._mobile ) return;
    if( !this.options.loopBack ){
      let prev = this._mobile.prevBtn;
      let next = this._mobile.nextBtn;
      if( prev.classList.contains('blogDisabledButtonStyle') && this.mobileIndex > 0 ){
        prev.classList.remove('blogDisabledButtonStyle');
      }else if( !prev.classList.contains('blogDisabledButtonStyle') && this.mobileIndex === 0 ){
        prev.classList.add('blogDisabledButtonStyle');
      }
      if( next.classList.contains('blogDisabledButtonStyle') && this.mobileIndex < this.blogEntries.length - 1 ){
        next.classList.remove('blogDisabledButtonStyle');
      }else if( !next.classList.contains('blogDisabledButtonStyle') && this.mobileIndex === this.blogEntries.length - 1 ){
        next.classList.add('blogDisabledButtonStyle');
      }
    }
  }

  openMobilePopup(){
    if( this._mobile.popup ) return; // already open
    // overlay
    let overlay = document.createElement('div');
    overlay.classList.add('blogMobilePopupOverlay');

    // Stop the bubble!
    overlay.addEventListener('click', () => { this.closeMobilePopup(); });

    // popup window
    let popup = document.createElement('div');
    popup.classList.add('blogMobilePopupWindow');
    // Stop the bubble!
    popup.addEventListener('click', (e) => { e.stopPropagation(); });

    // title row
    let heading = document.createElement('div');
    heading.classList.add('blogMobilePopupHeading');
    heading.innerText = 'All Entries';
    popup.appendChild(heading);

    // list
    let list = document.createElement('div');
    list.classList.add('blogMobilePopupList');

    
    let entryOrder = this.blogEntries;
    if( this.options.order === 'descending' ){
      entryOrder = [...entryOrder].reverse();
    }
    for( let i = 0; i < entryOrder.length; i++ ){
      let btn = document.createElement('button');
      btn.classList.add('blogEntryListingStyle');
      btn.classList.add('blogMobilePopupEntry');
      btn.innerHTML = `\n        ${entryOrder[i].title}\n        ${this.getDateDisplay(entryOrder[i].date)}`;
      // clicking an entry should close popup and show entry

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeMobilePopup();
        this.showEntry(entryOrder[i].id);
      });
      list.appendChild(btn);
    }
    popup.appendChild(list);


    // Mobile Page Controls
    //  - Prev, Current, Next -

    // Previous page button
    let prevPageBtn = document.createElement('button');
    prevPageBtn.classList.add('blogEntryListingStyle');
    prevPageBtn.innerText = '\u25C0 Prev'; // ◀
    prevPageBtn.addEventListener('click', (e) => { e.stopPropagation(); this.mobileChangePage(-1); });

    // Article Count & Current Page of Pages
    let curPageBtn = document.createElement('div');
    curPageBtn.classList.add('blogEntryListingStyle');
    curPageBtn.classList.add('blogMobileCurrent');
    
    // Next page button
    let nextPageBtn = document.createElement('button');
    nextPageBtn.classList.add('blogEntryListingStyle');
    nextPageBtn.classList.add('blogMobileNext');
    nextPageBtn.innerText = 'Next \u25B6'; // ▶
    nextPageBtn.addEventListener('click', (e) => { e.stopPropagation(); this.mobileChangePage(1); });

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    this._mobile.popup = overlay;
  }

  closeMobilePopup(){
    if( !this._mobile || !this._mobile.popup ) return;
    let overlay = this._mobile.popup;
    if( overlay.parentNode ) overlay.parentNode.removeChild( overlay );
    this._mobile.popup = null;
  }

  mobileChangePage( dir=0 ){

  }

  showEntry( index ){
    if( this.runTempDestroy && this.tempContent.length > 0 ){
      this.tempContent.forEach( node => {
        let curParent = node.parentNode;
        if( curParent ){
          curParent.removeChild( node );
        }
      });
      this.runTempDestroy = false;
    }

    if( index == -1 || index >= this.blogEntries.length){
      index = this.blogEntries.length - 1;
    }
    if( this.options.order === 'descending' ){
      index = this.blogEntries.length - 1 - index;
    }
    if( this.currentEntry != null ){
      this.currentEntry.hide();
    }
    this.currentEntry = this.blogEntries[index];
    this.currentEntry.show();

    // Check for URL update
    // TODO : Update how entries buttons are added to the DOM,
    //          This seems like incorrect behaviour to include here in `showEntry()`
    //        The entry object's callback isn't triggering, yet is added to the class.
    let curEntryUrl = this.currentEntry.urlRoute;
    if( curEntryUrl.length > 0 ){
      this.entryURLChange( curEntryUrl );
    }

    // keep mobile controls in sync
    if( typeof this.mobileIndex !== 'undefined' ){
      this.mobileIndex = index;
      this.updateMobileCurrentDisplay();
      // close popup if it was open
      this.closeMobilePopup();
      this.updatePrevNextButtonStates();
    }
  }

  entryURLChange( targetUrl ){
    if( this.urlBasePath.length > 0 && targetUrl.length > 0 ){
      let newUrl = `${this.urlBasePath}/${targetUrl}`;
      this.currentUrlPath = newUrl;
      if( window.history && window.history.pushState ){
        setTimeout( () => {
          window.history.pushState( { path: newUrl }, '', newUrl );
        },100);
      }
    }
  }
}
