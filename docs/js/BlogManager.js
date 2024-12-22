// Simple blog manager for my procstack blog


import { blogEntries } from './blog/blogEntries.js';

export class BlogManager {
  constructor( listParent, contentParent ){
    this.listParent = listParent;
    this.contentParent = contentParent;
    this.blogEntries = [];
    this.currentEntry = null;
  }
  init(){
    let blogEntryKeys = Object.keys(blogEntries);
    for( let i = 0; i < blogEntryKeys.length; i++ ){
      this.blogEntries.push(  blogEntries[blogEntryKeys[i]] );
    }
  }
  setListParent( listParent ){
    this.listParent = listParent;
  }
  setContentParent( contentParent ){
    this.contentParent = contentParent;
  }
  addBlogEntry( title, date, tags, body ){
    let blogEntry = new blogEntries( this.parent, title, date, tags, body );
    this.blogEntries.push( blogEntry );
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

    for( let i = 0; i < this.blogEntries.length; i++ ){
      // Content Prep
      this.blogEntries[i].setId( i );
      this.blogEntries[i].build( parentObj );
      this.blogEntries[i].hide();

      // Listing Prep
      let curEntryName = this.blogEntries[i].title + ' :: ' + this.blogEntries[i].date;
      this.addListing( curEntryName, i );
    }
  }

  addListing( name, index ){
    let entry = document.createElement('button');
    entry.textContent = name;
    entry.classList.add('blogEntryListingStyle');
    entry.addEventListener('click', () => {
      this.showEntry( index );
    });
    this.listParent.appendChild(entry);
  }

  showEntry( index ){
    if( index == -1 || index >= this.blogEntries.length){
      index = this.blogEntries.length - 1;
    }
    if( this.currentEntry != null ){
      this.currentEntry.hide();
    }
    this.currentEntry = this.blogEntries[index];
    this.currentEntry.show();
  }
}
