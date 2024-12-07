// SVG Helper Utilities

import { FileIO } from '../../core/FileIO.js'; // File In / Out

export class SVGUtils {

  // Only Used Twice
  static svgPromise( url, id,style=null, svgStyle=null ){
    let ret={};
    let svgObj=document.getElementById( id );
    if(!svgObj){
      return;
    }
    if(style!=null){
      svgObj.classList.add(style);
    }
        
    let tmpThis=this;
    let svgPromiseObj=Promise.resolve( FileIO.getURLContent( url ) );
    svgPromiseObj.then( (c)=>{
      svgObj.innerHTML=c;
      ret.svg=svgObj.getElementsByTagName( "svg" )[0];
      if(svgStyle!=null){
          ret.svg.classList.add(svgStyle);
      }
    });
    ret.promise = svgPromiseObj;
    
    return ret;
  }
  
  // Only Used Once
  static svgRawPromise( url ){
    let ret={};
        
    let tmpThis=this;
    let svgPromiseObj=Promise.resolve( FileIO.getURLContent( url ) );
    svgPromiseObj.then( (c)=>{
      let tmpDiv=document.createElement( "div" );
      tmpDiv.innerHTML=c;
      ret.svg=tmpDiv.getElementsByTagName( "svg" )[0];
    });
    
    return ret;
  }
    
  static svgIconPromise( url, id, clickEvent, curVal=null, style=null ){
    //contentDocument
    let tmpThis=this;
    let ret={};
    ret.hover=null;
    ret.mute=null;
    ret.caret=null;
    ret.indicator=null;
    ret.waiting=[];
    ret.state=null;
    ret.eventType=clickEvent;
    let svgObj=document.getElementById( id );
    if(!svgObj){
      return;
    }
    if(!style){
      svgObj.classList.add("iconStyle");
    }else{
      svgObj.classList.add(style);
    }
    ret.parent=svgObj.parentNode;
    ret.parent.classList.add("iconHover");
    
    ret.parent.addEventListener("click", (e)=>{ tmpThis.iconEvent( "click", ret, clickEvent ); } );
    //ret.parent.addEventListener("onmouseover", (e)=>{ tmpThis.iconEvent( "over", ret ); } );
    //ret.parent.addEventListener("onmousedown", (e)=>{ tmpThis.iconEvent( "down", ret ); } );
    //ret.parent.addEventListener("onmouseout", (e)=>{ tmpThis.iconEvent( "out", ret ); } );
    
    let svgPromiseObj=Promise.resolve( FileIO.getURLContent( url ) );
    svgPromiseObj.then( (c)=>{
    //svgObj.addEventListener( "load", ()=>{
      svgObj.innerHTML=c;
      //let svgDoc=svgObj.contentDocument;
      ret.svg=svgObj.getElementsByTagName( "svg" )[0];
            if( ret.svg ){
                if(!style){
                    ret.svg.classList.add("iconStyle");
                }else{
                    ret.svg.classList.add(style);
                }
                let children=ret.svg.children;
                
                let svgNS=ret.svg.getAttribute("xmlns");

                let svgHeight=ret.svg.getAttribute("height");
                let svgWidth=ret.svg.getAttribute("width");
                for(let c=0; c<children.length; ++c){
                    let curChild=children[c];
                    if(id=="speakerIcon"){
                        let svgNS=svgObj.getAttribute("xmlns");
                        let svgHeightBox=parseInt( svgHeight );
                        let svgWidthBox=parseInt( svgWidth );
                        let iconButton = document.createElementNS(svgNS, "rect");
                        iconButton.setAttribute( "x", -1 );
                        iconButton.setAttribute( "y", -1 );
                        iconButton.setAttribute( "fill", "white" );
                        iconButton.setAttribute( "fill-opacity", 0 );
                        iconButton.setAttribute( "height", svgHeight+2 );
                        iconButton.setAttribute( "width", svgWidth+2 );
                        iconButton.setAttribute( "z-index", -1 );
                        svgObj.appendChild(iconButton);
                        ret.hover = iconButton;
                        
                        ret.svg.setAttribute( "fill-opacity", this.toggleOpacity[0] );
                        
                    }
                    let cId=curChild.getAttribute( "id" );
                    if(cId=="mute"){
                        ret.mute=curChild;
                        ret.mute.style.transformOrigin= "50% 50%";
                        ret.mute.style.filter= "alpha(opacity=0)";
                        ret.mute.style.opacity= "0";
                        ret.mute.style.transform= "scale(0,0)";
                        ret.mute.style.transition= "scale 1s, opacity .5s, filter .5s";
                        
                        let loaderStyle=document.createElement('style');
                        loaderStyle.type="text/css";
                        loaderStyle.innerHTML=`
                                @keyframes loadingSpinner{
                                    0%{
                                        transform: rotate(0deg);
                                    }
                                    100%{
                                        transform: rotate(360deg);
                                    }
                                }
                            `;
                        ret.svg.appendChild(loaderStyle);
                        
                        let minWH=Math.max(2, Math.min( svgHeight, svgWidth )*.25 );
                        let cx=svgWidth*.5;
                        let cy=svgHeight*.5;
                        let loadingPath = document.createElementNS(svgNS, "path");
                        loadingPath.setAttribute( "d", ` M ${cx} ${cy-minWH} A ${minWH} ${minWH} 0 1 1 ${cx-minWH} ${cy} ` );
                        loadingPath.setAttribute( "stroke", "white" );
                        loadingPath.setAttribute( "stroke-width", "2" );
                        loadingPath.style.display="none";
                        loadingPath.style.transformOrigin= "50% 50%";
                        loadingPath.style.animation="loadingSpinner 1s linear infinite";
                        loadingPath.style.animationDuration="2s";
                        loadingPath.style.animationPlayState="paused";
                        
                        ret.indicator=loadingPath;
                        ret.svg.appendChild(loadingPath);
                        
                        this.toggleIcon( ret, curVal );
                    }else if(cId=="caret"){
                        ret.caret=curChild;
                        ret.caret.style.transformOrigin= "50% 50%";
                        ret.caret.style.transition= "transform .5s";
                        this.flipIcon( ret, false );
                    }else if(cId=="state"){
                        curChild.style.display= "none";
                        ret.state= curChild ;
                    }else{
                        ret.waiting.push( curChild );
                    }
                }
                
                let iconButton = document.createElementNS(svgNS, "rect");
                iconButton.classList.add( "iconHover" );
                iconButton.setAttribute( "x", 0 );
                iconButton.setAttribute( "y", 0 );
                iconButton.setAttribute( "height", svgHeight );
                iconButton.setAttribute( "width", svgWidth );
                ret.svg.appendChild(iconButton);
                
            }
    });
    
        ret.promise=svgPromiseObj;
        
    return ret;
  }
    
  /**
  * Get SVG source and load the content directly into the provided div.
  * This prevents creation of an Object with nested document.
  * Also allows using primary DOM css, instead of injecting a new style object and classes
  * @param {string} url Desired SVG url
  * @param {(string|object)} obj Target DOM object to insert aquired SVG source into.
  * @param {string=} svgStyle Optional class style to add to the SVG
  * @param {button=} button Option to make the SVG clickable.  Transparent backgrounds don't catch mouse  ouch events.
  */
  static svgButtonPromise(url, obj, svgStyle=null, button=false, action=null){ // SVG Path, [guiDiv,guiObj,null,null]
    if(typeof(obj)=="string"){
      obj=document.getElementById(obj);
      if(!obj){ return; }
    }
    let tmpThis=this;
    let svgPromiseObj=Promise.resolve( FileIO.getURLContent( url ) );
    svgPromiseObj.then( (c)=>{
      obj.innerHTML=c;
      let svgObj=obj.getElementsByTagName("svg");
      if( svgObj.length>0 ){
        svgObj=svgObj[0];
        if(svgStyle){
          svgStyle= typeof(svgStyle)=="string" ? [ svgStyle ] : svgStyle;
          svgStyle.forEach( (s)=>{
            svgObj.classList.add( s );
          });
        }
        if(button){
          let svgNS=svgObj.getAttribute("xmlns");
          let svgHeight=parseInt( svgObj.getAttribute("height") );
          let svgWidth=parseInt( svgObj.getAttribute("width") );
          let iconButton = document.createElementNS(svgNS, "rect");
          iconButton.setAttribute( "x", -1 );
          iconButton.setAttribute( "y", -1 );
          iconButton.setAttribute( "fill", "white" );
          iconButton.setAttribute( "fill-opacity", 0 );
          iconButton.setAttribute( "height", svgHeight+2 );
          iconButton.setAttribute( "width", svgWidth+2 );
          iconButton.setAttribute( "z-index", -1 );
          svgObj.appendChild(iconButton);
          
          let svgBG=svgObj.getElementById("state");
          if(svgBG){
            svgBG.setAttribute( "fill-opacity", this.toggleOpacity[0] );
          }
          if(action){
            svgObj.onclick=(e)=>{ tmpThis.svgCheckClick(e, action); };
            if( tmpThis.pxlDevice.mobile ){
                svgObj.ontouchstart=(e)=>{ tmpThis.svgStylize(e, true); };
                svgObj.ontouchend=(e)=>{ tmpThis.svgStylize(e, false); };
            }else{
                svgObj.onmouseover=(e)=>{ tmpThis.svgStylize(e, true); };
                svgObj.onmouseout=(e)=>{ tmpThis.svgStylize(e, false); };
            }
          }
        }
      }
    });
  }

}
