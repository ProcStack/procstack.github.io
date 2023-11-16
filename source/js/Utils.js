// NeurousNet - Utilities Class
//  Written by Kevin Edzenga; October 2021
//
//  Common HTML5 Canvas & Math Functions

const Utils = {
  
  // Sign of Variable
  //   Math.sign(0) returns 0
  //   sign(0) returns 1
  sign : (e)=>{
    return e<0?-1:1
  },
  
  // == == == == == == == == == == == == ==
  
  // -- -- -- -- -- -- -- -- --
  // -- Vector2 Math - -- -- -- --
  // -- -- -- -- -- -- -- -- -- -- --
  
  add : (e,b)=>{
    if( typeof(b) == "object" ){ // Faster than Array.isArray
      return Utils.addVec(e,b);
    }else{
      return Utils.addFloat(e,b);
    }
  },
  addFloat : (e,b)=>{
    return e.map( (x,c)=>{
      return x+b;
    });
  },
  addVec : (e,b)=>{
    return e.map( (x,c)=>{
      return x+b[c];
    });
  },
  
  // --
  
  sub : (e,b)=>{
    if( typeof(b) == "object" ){ // Faster than Array.isArray
      return Utils.subVec(e,b);
    }else{
      return Utils.subFloat(e,b);
    }
  },
  subFloat : (e,b)=>{
    return e.map( (x,c)=>{
      return x-b;
    });
  },
  subVec : (e,b)=>{ // ( To, From )
    return e.map( (x,c)=>{
      return x-b[c];
    });
  },
  
  // --
  
  mult : (e,b)=>{
    if( typeof(b) == "object" ){ // Faster than Array.isArray
      return Utils.multVec(e,b);
    }else{
      return Utils.multFloat(e,b);
    }
  },
  multFloat : (e,b)=>{
    return e.map( (x,c)=>{
      return x*b;
    });
  },
  multVec : (e,b)=>{
    return e.map( (x,c)=>{
      return x*b[c];
    });
  },
  
  // --
  
  // Dot Product of two Vector2s [x,y]
  dot : (e,b)=>{
    return e[0]*b[0]+e[1]*b[1]
  },
  
  // Megnitude of Vector2 [x,y]
  mag : (e)=>{
    return (e[0]**2+e[1]**2)**.5
  },
  
  // Normalize the length of a Vector2 [x,y]
  normalize : (e)=>{
    let l=e[0]*Utils.sign(e[0])+e[1]*Utils.sign(e[1]);
    return l==0 ? [0,0] : [e[0]/l,e[1]/l];
  },
  
  // Linear blend Values together
  lerp : (x,c,v)=>{
    //return x*(1-v) + c*v // Known valid
    return x + (c-x)*v // To compare
  },
  
  // Linear blend Vector2s together
  lerpVec : (x,c,v)=>{
    return [ Utils.lerp(x[0],c[0],v), Utils.lerp(x[1],c[1],v) ]
  },
  
  // == == == == == == == == == == == == ==
  
  // -- -- -- -- -- -- -- -- --
  // -- Color Functions - -- -- --
  // -- -- -- -- -- -- -- -- -- -- --

  // Convert Number to Hex
  componentToHex : (c)=>{
      let hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  },

  // Convert RGB (0-255) to Hex Color (#RRGGBB)
  rgbToHex : (rgb)=>{
      return "#" + Utils.componentToHex(Math.min(255, Math.max(0,Math.round(rgb[0])))) + Utils.componentToHex(Math.min(255, Math.max(0,Math.round(rgb[1])))) + Utils.componentToHex(Math.min(255, Math.max(0,Math.round(rgb[2]))));
  },
  
  
  // Convert RGB (0-255) to Hue/Saturation/Value (HSV)
  toHSV : (RGB)=>{
    let fitMaxMult = 1/255
    let r=RGB[0] * fitMaxMult;
    let g=RGB[1] * fitMaxMult;
    let b=RGB[2] * fitMaxMult;
    let minv=Math.min(r,g,b);
    let maxv=Math.max(r,g,b);
    let H,S,V=maxv;
    let d=maxv-minv;
    
    if(maxv != 0){
      S=d/maxv;
    }else{
      S=0;
      //H=0;
      //return [H,S,V];
    }
    if(minv==maxv){
      H=0;
    }else{
      if(r == maxv){
        H=(g-b)/d;
        if(g<b){
          H+=6;
        }
      }else if(g == maxv){
        H=2+(b-r)/d;
      }else{
        H=4+(r-g)/d;
      }
      H/=6;
      ////H *= 60;
      //if(H < 0){
      //	H += 360;
      //}
    }
    
    return [H,S,V];
  },

  // Convert Hue/Saturation/Value (HSV) to RGB (0-255)
  toRGB : (HSV)=>{
    let R,G,B;
    let H=HSV[0];
    let S=HSV[1];
    let V=HSV[2];
    
    let i=Math.floor(H*6);
    let f=H*6-i;
    let p=V*(1-S);
    let q=V*(1-S*f);
    let t=V*(1-S*(1-f));
    
    i=i%6;
    if(i == 0){
      R=V;
      G=t;
      B=p;
    }else if(i == 1){
      R=q;
      G=V;
      B=p;
    }else if(i == 2){
      R=p;
      G=V;
      B=t;
    }else if(i == 3){
      R=p;
      G=q;
      B=V;
    }else if(i == 4){
      R=t;
      G=p;
      B=V;
    }else if(i == 5){
      R=V;
      G=p;
      B=q;
    }

    return [R*255,G*255,B*255];
  },
  
  // == == == == == == == == == == == == ==
  
  // -- -- -- -- -- -- -- -- --
  // -- Canvas Functions  -- -- --
  // -- -- -- -- -- -- -- -- -- -- --
  
  // Draw Geometry
  // Filled, Open Outline, Closed Outline, Composition Value 
  // Supports -
  // 'loc'; Location Array - [x,y] / [x1,y1,x2,y2,x3,y3,...,xN,yN]
  // 'thickness'; Line Thickness / Filled -  '-1' will Fill the draw, any positive number will set Line Thickness
  // 'comp'; Composition Type - See Canvas Context spec for values
  //   https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  drawGeo : (loc,eCount,size,color,alpha,thickness,canvas,comp=null)=>{
    let x=loc[0];
    let y=loc[1];
    let R=color[0];
    let G=color[1];
    let B=color[2];
    let hex=Utils.rgbToHex([Math.floor(R),Math.floor(G),Math.floor(B)] );
    let csW=canvas.width*.5;
    let csH=canvas.height*.5;
    
    let draw=canvas.getContext('2d');
    if( comp!=null ){
      draw.globalCompositeOperation=comp;
    }

    let runCount=1;
    draw.globalAlpha=alpha;
    for(let c=0;c<runCount;c+=1){
      draw.beginPath();
      draw.lineWidth=Math.max(1,thickness);
      if(thickness==-1){
        draw.fillStyle=hex;
      }else{
        draw.strokeStyle=hex;
      }
      if(eCount<=2){
        if(eCount==1){
          let grad=draw.createRadialGradient((x-csW)+csW,(y-csH)+csH,1,(x-csW)+csW,(y-csH)+csH,size/2);
          grad.addColorStop(0,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',1)');
          if(color.length>4){
            grad.addColorStop(1,'rgba('+Math.floor(color[3])+','+Math.floor(color[4])+','+Math.floor(color[5])+',0)');
          }else{
            grad.addColorStop(1,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',0)');
          }
          draw.fillStyle=grad;
        }else if(eCount==2){
          let grad=draw.createRadialGradient((x-csW)+csW,(y-csH)+csH,1,(x-csW)+csW,(y-csH)+csH,size/2);
          grad.addColorStop(0,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',0)');
          if(color.length>4){
            grad.addColorStop(1,'rgba('+Math.floor(color[3])+','+Math.floor(color[4])+','+Math.floor(color[5])+',1)');
          }else{
            grad.addColorStop(1,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',1)');
          }
          draw.fillStyle=grad;
        }
        draw.arc((x-csW)+csW,(y-csH)+csH,size/2,0,Math.PI*2);
      }else{
        if(loc.length>2){
          if(eCount==3){
            draw.moveTo((x-csW)+csW,(y-csH)+csH);
            //draw.moveTo(x,y);
            for(let v=2; v<loc.length; v+=2){
              draw.lineTo((loc[v]-csW)+csW,(loc[v+1]-csH)+csH);
            }
            draw.lineJoin = 'round';
            if(size==1 && thickness!=-1){
              draw.closePath();
            }else{
              draw.lineJoin = 'miter';
            }
          }else{
            draw.lineJoin = 'round';
            draw.moveTo((x-csW)+csW,(y-csH)+csH);
            for(let v=2; v<loc.length; v+=4){
              draw.quadraticCurveTo((loc[v]-csW)+csW,(loc[v+1]-csH)+csH, (loc[v+2]-csW)+csW,(loc[v+3]-csH)+csH);
            }
            if(size==1){
              draw.quadraticCurveTo((loc[loc.length-2]-csW)+csW,(loc[loc.length-1]-csH)+csH, (loc[0]-csW)+csW,(loc[1]-csH)+csH);
            }
            /*
            draw.moveTo(x,y);
            for(let v=2; v<loc.length; v+=4){
              draw.quadraticCurveTo(loc[v],loc[v+1], loc[v+2],loc[v+3]);
            }
            if(size==1){
              draw.quadraticCurveTo(loc[loc.length-2],loc[loc.length-1], loc[0],loc[1]);
            }*/
            if(size==1 && thickness!=-1){
              draw.closePath();
            }else{
              draw.lineJoin = 'miter';
            }
          }
        }
      }
      if(thickness==-1){
        draw.fill();
      }else{
        draw.stroke();
      }
    }
  },

  // HTML5 Canvas; Draw a Line
  drawLine : (points,width,color,alpha,arcType,canvas,dash)=>{
    let hex,draw;
    let R=color[0];
    let G=color[1];
    let B=color[2];	
    hex=rgbToHex([Math.floor(R),Math.floor(G),Math.floor(B)] );
    if(typeof(canvas)==="string"){
      draw=canvas.getContext('2d');
    }else{
      draw=canvas;
    }
    
    draw.beginPath();
    if(dash[0]!=-1){
      draw.globalAlpha=alpha/2;
    }
    draw.strokeStyle=hex;
    draw.lineWidth=width;
    draw.moveTo(points[0],points[1]);
    for(let x=2; x<(points.length); x+=2){
      draw.lineTo(points[x],points[x+1]);
    }
    if(arcType==0){
      arcType='round';
    }else if(arcType==1){
      arcType='miter';
    }else if(arcType==2){
      arcType='bevel';
    }else{
      arcType='round';
    }
    draw.lineJoin = arcType;
    draw.lineCap = arcType;
    draw.stroke();
    if(dash[0]!=-1){
      draw.globalAlpha=alpha;
      draw.setLineDash(dash);
      draw.stroke();
    }
  },

  // Apply Gradient to a Canvas
  gradientRunner : (canvas,colorFrom,colorTo,runBlur)=>{
    let drawBG=canvas.getContext("2d");
    let cW=canvas.width;
    let cH=canvas.height;

    drawBG.rect(0, 0, cW, cH);
    let grd = drawBG.createLinearGradient(0,0,cW,cH);
    grd.addColorStop(0, colorFrom);
    grd.addColorStop(1, colorTo);
    drawBG.fillStyle = grd;
    drawBG.fill();

    if(runBlur==1){
      Utils.blurEffect(drawBG,drawBG,1,80,3);
      //Utils.blurEffect(drawBG,drawBG,1,70,5);
    }
  },
  
  // Blur one Canvas and output its result into an Output Canvas ( Can be the same canvas )
  blurEffect : (input,output,fullCanvas,dist,levels)=>{
    if(dist.constructor !== Array){
      let tmpDist=dist;
      dist = new Array();
      dist[0]=tmpDist;
      dist[1]=tmpDist;
    }
    let cW;
    let cH;
    if(typeof input == "string"){
      let cn=document.getElementById(input);
      if( !cn ){
        console.warn("'blurEffect' cannot find Input Object ")
      }
      cW=cn.width;
      cH=cn.height;
      let input=cn.getContext("2d");
      output=input;
    }else{
      cW=input.width;
      cH=input.height;
    }
    //let canvas=document.getElementById(drawCanvas);
    //let draw=canvas.getContext("2d");
    fader=input.getImageData(0,0,cW,cH);
    pix = fader.data;
    let rx,ry,rpix,px,py ;
    let checker,rCalc,gCalc,bCalc,aCalc,stageX,stageY,mather;
    
    let startPix, endPix,rPix;
    let percer = 1;
    if(fullCanvas==1){
      startPix=0;
      endPix=pix.length;
      percer=1;
    }else{
      startPix=cW*4*(parseInt(refreshWindow[1])-2);
      endPix=(cW*4*(parseInt(refreshWindow[3])+2));
      let percObj = document.getElementById("sl"+diaVal+"_filterPercent_val")
      if( percObj ){
        percer=percObj.val();
      }
    }
    levels=Math.max(1,levels);
    let blendcount=0;
    if(dist[0]>0 || dist[1]>0 || fullCanvas==1){
      for (let i=startPix; i<endPix; i+=4) {
        if( ((i/4)%cW>parseInt(refreshWindow[0])-2 && (i/4)%cW<parseInt(refreshWindow[2])+1) || fullCanvas==1){
          if(pix[i+3]>0){
            blendcount=Math.max(1,levels/2);
            px=(i/4)%cW;
            py=Math.floor((i/4)/cW);
            rCalc=pix[i]*blendcount;
            gCalc=pix[i+1]*blendcount;
            bCalc=pix[i+2]*blendcount;
            aCalc=pix[i+3]*blendcount;
            for (let v=0; v<levels; ++v) {
              rx=Math.round(Math.random()*dist[0]-(dist[0]/2)+px);
              rx=Math.max(0,Math.min(rx,cW-1))-Math.max(0, rx-cW);
              
              ry=Math.round(Math.random()*dist[1]-(dist[1]/2)+py);
              ry=Math.max(0,Math.min(ry,cH-1))-Math.max(0, ry-cH);
              rpix=(ry*cW+rx)*4;
                rCalc+=pix[rpix];
                gCalc+=pix[rpix+1];
                bCalc+=pix[rpix+2];
                aCalc+=pix[rpix+3];
              blendcount++;
            }
              if(percer==1){
                rCalc=(rCalc/blendcount);
                gCalc=(gCalc/blendcount);
                bCalc=(bCalc/blendcount);
                aCalc=(aCalc/blendcount);
              }else{
                rCalc=pix[i]*(1-percer)+(rCalc/blendcount)*percer;
                gCalc=pix[i+1]*(1-percer)+(gCalc/blendcount)*percer;
                bCalc=pix[i+2]*(1-percer)+(bCalc/blendcount)*percer;
                aCalc=pix[i+3]*(1-percer)+(aCalc/blendcount)*percer;
              }
              pix[rpix]=rCalc;
              pix[rpix+1]=gCalc;
              pix[rpix+2]=bCalc;
              pix[rpix+3]=aCalc;
          }
        }
      }
    }	
    for (let i=startPix; i<endPix; i+=4) {
      if( ((i/4)%cW>parseInt(refreshWindow[0])-2 && (i/4)%cW<parseInt(refreshWindow[2])+1) || fullCanvas==1){
        if(pix[i+3]>0){
          blendcount=2;
          px=(i/4)%cW;
          py=Math.floor((i/4)/cW);
          rCalc=pix[i]*2;
          gCalc=pix[i+1]*2;
          bCalc=pix[i+2]*2;
          aCalc=pix[i+3]*2;
          if(py>0){
            rCalc+=pix[i-cW*4];
            gCalc+=pix[i+1-cW*4];
            bCalc+=pix[i+2-cW*4];
            aCalc+=pix[i+3-cW*4];
            blendcount+=1;
          }
          if(py<cH-1){
            rCalc+=pix[i+cW*4];
            gCalc+=pix[i+1+cW*4];
            bCalc+=pix[i+2+cW*4];
            aCalc+=pix[i+3+cW*4];
            blendcount+=1;
          }
          if(px>0){
            rCalc+=pix[i-4];
            gCalc+=pix[i+1-4];
            bCalc+=pix[i+2-4];
            aCalc+=pix[i+3-4];
            blendcount+=1;
          }
          
          if(px<cW-1){
            rCalc+=pix[i+4];
            gCalc+=pix[i+1+4];
            bCalc+=pix[i+2+4];
            aCalc+=pix[i+3+4];
            blendcount+=1;
          }
          if(percer==1){
            rCalc=(rCalc/blendcount);
            gCalc=(gCalc/blendcount);
            bCalc=(bCalc/blendcount);
            aCalc=(aCalc/blendcount);
          }else{
            rCalc=pix[i]*(1-percer)+(rCalc/blendcount)*percer;
            gCalc=pix[i+1]*(1-percer)+(gCalc/blendcount)*percer;
            bCalc=pix[i+2]*(1-percer)+(bCalc/blendcount)*percer;
            aCalc=pix[i+3]*(1-percer)+(aCalc/blendcount)*percer;
          }
          pix[i]=rCalc;
          pix[i+1]=gCalc;
          pix[i+2]=bCalc;
          pix[i+3]=aCalc;
          
        }
      }
    }
    output.putImageData(fader, 0, 0);
  }
}

export default Utils

