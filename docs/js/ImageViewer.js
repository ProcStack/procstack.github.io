// Image Viewer Class
//   Written by Kevin Edzenga (ProcStack / Trancor)
//     https://procstack.github.io
//
// Builds Div to view an image, with zoom and pan controls 

export class ImageViewer{
  constructor( parentDiv=null, styleOverrides={} ){
    if( parentDiv === null ){
      parentDiv = document.body;
    }
    this.parentDiv = parentDiv;
    this.styleOverrides = styleOverrides;
    this.imageSrc = "";
    this.imageAlt = "";
    this.captionText = "";

    this.active = false;
    this.viewerDiv = null;
    this.viewerImg = null;


    this.viewerStats = {
      offsetX: 0,
      offsetY: 0,

      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      
      zoom: 1.0,
      zoomMin: 0.1,
      zoomMax: 10.0,
      zoomStep: 0.1
    };

    this.imageElem = null;
    this.imageLoaded = false;
  }
  init(){

    this.viewerDiv = document.createElement('div');

    this.viewerDiv.classList.add('procPagesImageViewerOverlay');
    if( this.styleOverrides.hasOwnProperty('imageViewer') ){
      Object.assign(this.viewerDiv.style, this.styleOverrides.imageViewer);
    }
    document.body.appendChild(this.viewerDiv);

    // -- -- --
    
    this.buildImageElement();

    // -- -- --

    this.viewerDiv.addEventListener('click', ()=>{
      //document.body.removeChild(this.viewerDiv);
      this.viewerDiv.style.display = 'none';
      this.viewerDiv.style.zIndex = -1;
      this.active = false;
    });
    this.viewerDiv.addEventListener('wheel', (e)=>{
      this.zoomInStepped(e);
    });
  }
  
  buildImageElement(){
    this.viewerImg = document.createElement('img');
    this.viewerImg.classList.add('procPagesImageViewerImage');
    this.viewerDiv.appendChild(this.viewerImg);

    this.viewerImg.addEventListener('click', (e)=>{
      //this.viewerDiv.style.display = 'none';
      //this.viewerDiv.style.zIndex = -1;
      e.stopPropagation();
    });


    
    this.viewerImg.addEventListener('wheel', (e)=>{
      this.zoomInStepped(e);
    });

    this.viewerImg.addEventListener('mousedown', (e)=>{
      this.onMouseDown(e);
    });
    this.viewerImg.addEventListener('mouseup', (e)=>{
      this.onMouseUp(e);
    });
    this.viewerImg.addEventListener('mousemove', (e)=>{
      this.onMouseMove(e);
    });

    this.viewerImg.addEventListener('touchstart', (e)=>{
      if( e.touches.length === 1 ){
        this.onMouseDown(e.touches[0]);
      }
      e.preventDefault();
    });
    this.viewerImg.addEventListener('touchend', (e)=>{
      this.onMouseUp(e);
      e.preventDefault();
    });
    this.viewerImg.addEventListener('touchmove', (e)=>{
      if( e.touches.length === 1 ){
        this.onMouseMove(e.touches[0]);
      }
      e.preventDefault();
    });

    this.viewerImg.addEventListener('dragover', (e)=>{
      e.preventDefault();
    });
    this.viewerImg.addEventListener('dragstart', (e)=>{
      console.log("dragstart");
      e.preventDefault();
      return false;
    });
    this.viewerImg.addEventListener('dragend', (e)=>{
      console.log("dragend");
      e.preventDefault();
      return false;
    });
    this.viewerImg.addEventListener('drag', (e)=>{
      consol.log("drag");
      e.preventDefault();
      return false;
    });
  }

  // -- -- --

  // Mouse wheel stepped zoom
  zoomInStepped( e ){
    if( this.imageLoaded ){
      if( e.deltaY < 0 ){
        // Zoom in
        this.viewerStats.zoom = Math.min( this.viewerStats.zoom + this.viewerStats.zoomStep, this.viewerStats.zoomMax );
      } else {
        // Zoom out
        this.viewerStats.zoom = Math.max( this.viewerStats.zoom - this.viewerStats.zoomStep, this.viewerStats.zoomMin );
      }
      this.viewerImg.style.transform = `translate(${this.viewerStats.offsetX}px, ${this.viewerStats.offsetY}px) scale(${this.viewerStats.zoom})`;
    }
    e.preventDefault();
  }

  // -- -- --

  onMouseDown(e){
    if( this.imageLoaded ){
      this.viewerStats.dragging = true;
      this.viewerStats.dragStartX = e.clientX - this.viewerStats.offsetX;
      this.viewerStats.dragStartY = e.clientY - this.viewerStats.offsetY;
      e.preventDefault && e.preventDefault();
    }
  }

  onMouseUp(e){
    this.viewerStats.dragging = false;
  }

  onMouseMove(e){
    if( this.viewerStats.dragging && this.imageLoaded ){
      this.viewerStats.offsetX = e.clientX - this.viewerStats.dragStartX;
      this.viewerStats.offsetY = e.clientY - this.viewerStats.dragStartY;
      this.viewerImg.style.transform = `translate(${this.viewerStats.offsetX}px, ${this.viewerStats.offsetY}px) scale(${this.viewerStats.zoom})`;
      e.preventDefault && e.preventDefault();
    }
  }

  // -- -- --

  openImageViewer( imgData, styleOverrides={} ){
    if( !this.viewerImg ){
      this.buildImageElement();
    }
    if( typeof(styleOverrides) === 'object' && Object.keys(styleOverrides).length > 0 ){
      Object.assign(this.viewerImg.style, styleOverrides);
    }

    this.viewerDiv.style.display = 'grid';
    this.viewerDiv.style.zIndex = 500;

    this.viewerImg.src = imgData.src;
    this.viewerImg.alt = imgData.alt || '';
    this.captionText = imgData.caption || '';

    this.imageLoaded = true;
    this.viewerStats.offsetX = 0;
    this.viewerStats.offsetY = 0;
    this.viewerStats.zoom = 1.0;
    this.viewerImg.style.transform = `translate(0px, 0px) scale(1.0)`;

  }
}