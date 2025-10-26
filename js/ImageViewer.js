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

    this.verbose = false;
    this.debug = false;

    this.viewerStats = {
      offsetX: 0,
      offsetY: 0,

      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      
      zoom: 1.0,
      zoomMin: 0.1,
      zoomMax: 10.0,
      zoomStep: 0.1,

      isZooming: false,
      zoomStartDist: 0,
      zoomStart: 1.0,
      zoomPosA:{ x: 0, y: 0 },
      zoomPosB:{ x: 0, y: 0 },
      zoomPosCentroid:{ x: 0, y: 0 }

    };

    this.imageElem = null;
    this.imageLoaded = false;
    this.rightClickDown = false;
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

    let touchCount = 0;

    this.viewerDiv.addEventListener('click', (e)=>{
      //document.body.removeChild(this.viewerDiv);
      this.toggleVisibility( false );
    });
    

    this.viewerDiv.addEventListener('mousedown', (e)=>{
      if( e.button === 2 ){
        this.rightClickDown = true;
        this.zoomPrep( e );
      }else{
        this.onMouseDown(e);
      }
    });
    this.viewerDiv.addEventListener('mouseup', (e)=>{
      this.onMouseUp(e);
      this.zoomEnd( e );
      this.rightClickDown = false;
    });
    this.viewerDiv.addEventListener('mousemove', (e)=>{
      if( this.rightClickDown ){
        this.zoomScale( e );
      }else{
        this.onMouseMove( e );
      }
    });


    this.viewerDiv.addEventListener('touchstart', (e)=>{
      touchCount = 0;
      if( e.touches.length > 1 ){
        this.zoomPrepMobile( e );
        e.preventDefault();
      }
    });
    this.viewerDiv.addEventListener('touchmove', (e)=>{
      touchCount += 1;
      if( e.touches.length > 1 ){
        this.zoomScaleMobile( e );
        e.preventDefault();
      }
    });
    this.viewerDiv.addEventListener('touchend', (e)=>{
      if( touchCount < 6 ){
        this.toggleVisibility( false );
      }
      this.onMouseUp( e );
      this.zoomEndMobile( e );
      e.preventDefault();
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
      if( e.button === 2 ){
        this.rightClickDown = true;
        this.zoomPrep( e );
      }else{
        this.onMouseDown(e);
      }
    });
    this.viewerImg.addEventListener('mouseup', (e)=>{
      this.onMouseUp(e);
      this.zoomEnd( e );
      this.rightClickDown = false;
    });
    this.viewerImg.addEventListener('mousemove', (e)=>{
      if( this.rightClickDown ){
        this.zoomScale( e );
      }else{
        this.onMouseMove( e );
      }
    });

    this.viewerImg.addEventListener('touchstart', (e)=>{
      if( e.touches.length === 1 ){
        this.onMouseDown(e.touches[0]);
      }else{
        this.zoomPrepMobile( e );
      }
      e.preventDefault();
    });
    this.viewerImg.addEventListener('touchend', (e)=>{
      this.onMouseUp( e );
      this.zoomEndMobile( e );
      e.preventDefault();
    });
    this.viewerImg.addEventListener('touchmove', (e)=>{
      if( e.touches.length === 1 ){
        this.onMouseMove(e.touches[0]);
      }else if( e.touches.length === 2 ){
        this.zoomScaleMobile( e );
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


  toggleVisibility( state=null ){
    if( state === null ){
      state = !this.active;
    }
    this.active = state;
    if( this.active ){
      this.viewerDiv.style.display = 'grid';
      this.viewerDiv.style.zIndex = 500;
    } else {
      this.viewerDiv.style.display = 'none';
      this.viewerDiv.style.zIndex = -1;
      this.active = false;
    }
  }

  // -- -- --
  
  // Mouse wheel stepped zoom
  zoomInStepped( e ){
    if( this.imageLoaded ){
      this.checkDebug();
      if( e.deltaY < 0 ){
        // Zoom in
        this.viewerStats.zoom = Math.min( this.viewerStats.zoom + this.viewerStats.zoomStep, this.viewerStats.zoomMax );
      } else {
        // Zoom out
        this.viewerStats.zoom = Math.max( this.viewerStats.zoom - this.viewerStats.zoomStep, this.viewerStats.zoomMin );
      }
      this.viewerImg.style.transform = `translate(${this.viewerStats.offsetX}px, ${this.viewerStats.offsetY}px) scale(${this.viewerStats.zoom})`;
      this.log(`Zoom: ${this.viewerStats.zoom.toFixed(2)}`);
    }
    e.preventDefault();
  }
  

  // -- -- --

  // Zoom helper functions for Mouse
  
  zoomPrep( e ){
    if( this.imageLoaded ){
      this.viewerStats.isZooming = true;
      this.viewerStats.zoomStart = this.viewerStats.zoom;
      this.viewerStats.zoomPosA.x = e.clientX;
      this.viewerStats.zoomPosA.y = e.clientY;
    } 
    e.preventDefault && e.preventDefault();
  }

  zoomScale( e ){
    if( this.imageLoaded && this.viewerStats.isZooming ){
      this.checkDebug();
      let dy = e.clientY - this.viewerStats.zoomPosA.y;
      let dx = e.clientX - this.viewerStats.zoomPosA.x;
      let dist = -dx;//(dx*dx + dy*dy) ** .5;
      //dist *= dy<0 || dx<0 ? -1 : 1;
      let scale = 1.0 - (dist * 0.005);
      this.viewerStats.zoom = Math.min( Math.max( this.viewerStats.zoomStart * scale, this.viewerStats.zoomMin), this.viewerStats.zoomMax );
      this.viewerImg.style.transform = `translate(${this.viewerStats.offsetX}px, ${this.viewerStats.offsetY}px) scale(${this.viewerStats.zoom})`;

      if( this.verbose ){
        let debugText = '';
        debugText += `Zoom: ${this.viewerStats.zoom.toFixed(2)}\n`;
        debugText += `Mouse Pos: (${e.clientX}, ${e.clientY})\n`;
        this.log(debugText);
      }
      e.preventDefault && e.preventDefault();
    }
  }

  zoomEnd( e ){
    if( this.viewerStats.isZooming ){
      this.viewerStats.isZooming = false;
      this.viewerStats.zoom = Math.min( Math.max(this.viewerStats.zoom, this.viewerStats.zoomMin), this.viewerStats.zoomMax );
    }
    e.preventDefault && e.preventDefault();
  }

  // -- -- --

  // Zoom helper functions for Touch

  zoomPrepMobile( e ){
    if( this.viewerStats.isZooming ) return;
    this.viewerStats.isZooming = true;
    const touches = e.touches;
    if( touches.length < 2 ) return;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    const curDist = ( dx*dx + dy*dy ) ** .5;
    this.viewerStats.zoomStart = this.viewerStats.zoom;
    this.viewerStats.zoomStartDist = curDist;

    this.viewerStats.zoomPosA.x = touches[0].clientX;
    this.viewerStats.zoomPosA.y = touches[0].clientY;
    this.viewerStats.zoomPosB.x = touches[1].clientX;
    this.viewerStats.zoomPosB.y = touches[1].clientY;
    this.viewerStats.zoomPosCentroid.x = (touches[0].clientX + touches[1].clientX) * .5;
    this.viewerStats.zoomPosCentroid.y = (touches[0].clientY + touches[1].clientY) * .5;
    
    e.preventDefault && e.preventDefault();
  }

  zoomScaleMobile(e){
    if( e.touches.length < 2 ) return;

    this.checkDebug();

    let dx = e.touches[0].clientX - e.touches[1].clientX;
    let dy = e.touches[0].clientY - e.touches[1].clientY;
    let curDist = ( dx*dx + dy*dy ) ** .5;
    let scale = curDist / this.viewerStats.zoomStartDist;
    this.viewerStats.zoom = Math.min( Math.max( this.viewerStats.zoomStart * scale, this.viewerStats.zoomMin), this.viewerStats.zoomMax );

    let offx = (e.touches[0].clientX + e.touches[1].clientX) * .5 - this.viewerStats.zoomPosCentroid.x;
    let offy = (e.touches[0].clientY + e.touches[1].clientY) * .5 - this.viewerStats.zoomPosCentroid.y;
    this.viewerStats.offsetX += offx;
    this.viewerStats.offsetY += offy;
    this.viewerStats.zoomPosCentroid.x += offx;
    this.viewerStats.zoomPosCentroid.y += offy;

    this.viewerImg.style.transform = `translate(${this.viewerStats.offsetX}px, ${this.viewerStats.offsetY}px) scale(${this.viewerStats.zoom})`;

    if( this.verbose ){
      let debugText = '';
      debugText += `Zoom: ${this.viewerStats.zoom.toFixed(2)}\n`;
      debugText += `Touch 1: (${e.touches[0].clientX}, ${e.touches[0].clientY})\n`;
      debugText += `Touch 2: (${e.touches[1].clientX}, ${e.touches[1].clientY})\n`;
      this.log(debugText);
    }

    e.preventDefault && e.preventDefault();
  }

  zoomEndMobile(e){
    if( this.viewerStats.isZooming ){
      this.viewerStats.isZooming = false;
      this.viewerStats.zoom = Math.min( Math.max(this.viewerStats.zoom, this.viewerStats.zoomMin), this.viewerStats.zoomMax );
    }
    e.preventDefault && e.preventDefault();
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

  checkDebug(){
    if( this.verbose && !this.debug ){
      this.debug = document.createElement('div');
      this.debug.style.position = 'fixed';
      this.debug.style.top = '0px';
      this.debug.style.left = '0px';
      this.debug.style.backgroundColor = 'rgba(0,0,0,0.5)';
      this.debug.style.color = 'white';
      this.debug.style.padding = '5px';
      this.debug.style.zIndex = 1000;
      this.debug.style.fontSize = '2.5em';
      document.body.appendChild(this.debug);
    }
  }

  log(msg){
    if( this.verbose && this.debug ){
      this.debug.innerText += `${msg}\n`;
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

    this.toggleVisibility( true );

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