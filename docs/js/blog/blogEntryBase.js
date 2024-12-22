export class blogEntry{
  constructor( parent, title, date, tags, body ){
    this.id = null;
    this.parent = parent;
    this.title = title;
    this.date = date;
    this.body = body;
    this.tags = tags;

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
    this.titleObj = document.createElement('h1');
    this.dateObj = document.createElement('p');
    this.bodyObj = document.createElement('p');
    this.tagsObj = document.createElement('p');
    this.titleObj.innerHTML = this.title;
    this.dateObj.innerHTML = this.date;
    this.bodyObj.innerHTML = this.body;
    this.tagsObj.innerHTML = this.tags;
    this.blogEntryObj.appendChild(this.titleObj);
    this.blogEntryObj.appendChild(this.dateObj);
    this.blogEntryObj.appendChild(this.bodyObj);
    this.blogEntryObj.appendChild(this.tagsObj);
    parentObj.appendChild(this.blogEntryObj);
  }

  show(){
    this.blogEntryObj.style.display = 'block';
  }
  hide(){
    this.blogEntryObj.style.display = 'none';
  }

}