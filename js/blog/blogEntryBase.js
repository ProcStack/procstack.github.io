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
    // -- -- --
    this.headerBodySpacer = document.createElement('div');
    // -- -- --
    this.bodyObj = document.createElement('p');
    this.tagsObj = document.createElement('p');
    this.tagsObj.classList.add('blogEntryTagStyle');
    this.titleObj.innerHTML = this.title;
    this.dateObj.innerHTML = this.date;
    this.readTimeObj.innerHTML = this.getReadTime( this.body );
    this.bodyObj.innerHTML = this.body;
    this.tagsObj.innerHTML = this.tags.join(', ');
    this.titleRowObj.appendChild(this.titleObj);
    this.titleRowObj.appendChild(this.dateObj);
    this.titleRowObj.appendChild(this.readTimeObj);
    this.blogEntryObj.appendChild(this.titleRowObj);
    this.blogEntryObj.appendChild(this.headerBodySpacer);
    this.blogEntryObj.appendChild(this.bodyObj);
    this.blogEntryObj.appendChild(this.tagsObj);
    parentObj.appendChild(this.blogEntryObj);
  }

  getReadTime( text ){
    let wordsPerMinute_low = 180;
    let wordsPerMinute_high = 300;
    let textLength = text.split(' ').length;
    let readTime_low = Math.ceil( textLength / wordsPerMinute_low );
    let readTime_high = Math.ceil( textLength / wordsPerMinute_high );
    let retVal = `${readTime_high}<span class="textShrinkRay">&nbsp;</span>-<span class="textShrinkRay">&nbsp;</span>${readTime_low} min read`;
    if( readTime_low === readTime_high ){
      retVal = `${readTime_low} min read`;
    }
    return retVal;
  }

  show(){
    this.blogEntryObj.style.display = 'block';
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

}