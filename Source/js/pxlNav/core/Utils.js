
import { Vector2, Vector3 } from "./Types.js";
import * as THREE from "../../libs/three/three.module.js";

export class Utils{
  constructor(assetRoot="images/assets/", mobile ){
    this.assetRoot=assetRoot;
    this.mobile=mobile;
    this.pxlTimer=null;
    this.verboseLoading=false;
    this.texLoader=new THREE.ImageLoader();
    this.textLoaderArray=[];
    // Texture formats, use as needed
    // THREE.ImageLoader's defauls; images load as RGBAFormat by default, and JPG as RGBAFormat
    this.channelFormats=[ THREE.AlphaFormat, THREE.RedFormat, THREE.RGFormat, THREE.RGBFormat, THREE.RGBAFormat, THREE.LuminanceFormat, THREE.DepthFormat ];
  }

  get curMS(){
      return this.pxlTimer.curMS;
  }

  setDependencies( pxlNav ){
    this.pxlTimer=pxlNav.pxlTimer;
  }
  
  updateUrl(url,state={},title=""){
      if (window.history.replaceState) {
          window.history.replaceState(state, title, url);
      }else{
          window.history.pushState(state, title, url);
      }
  }
  
  copyRoomUrl(){
      let url=window.location;
      let tmpFocus=document.activeElement;
      let tmpText = document.createElement("textarea");
      tmpText.value = url;

      document.body.appendChild(tmpText);
      tmpText.focus();
      tmpText.select();

      let status=false;
      try{
          let callback = document.execCommand('copy');
          status = callback ? 'successful' : 'unsuccessful';
      }catch(err){}

      document.body.removeChild(tmpText);
      tmpFocus.focus();  
      
      return status;
  }
    
  checkInt(val){
    return (val%1)==0;
  }

  degToRad(deg){
    return deg*(Math.PI/180);
  }

  toHundreths(val){ // int(val*100)*.01 returns an erronious float on semi ussual basis...
    if(!val) return 0;

    if( Number.isInteger(val) ){
      return val;
    }else{
      let sp=(val+"").split(".");
      let ret=parseFloat(sp[0]+"."+sp[1].substr(0,2));
      return ret;
    }
  }

  toTenths(val){ // int(val*100)*.01 returns an erronious float on semi ussual basis...
    if(!val) return 0;

    if( Number.isInteger(val) ){
      return val;
    }else{
      let sp=(val+"").split(".");
      let ret=parseFloat(sp[0]+"."+sp[1].substr(0,1));
      return ret;
    }
  }
  
  getDateTime(){
    let d=new Date();
    let date=(d.getFullYear()+"").padStart(2,'0')+"-"+((d.getMonth()+1)+"").padStart(2,'0')+"-"+(d.getDate()+"").padStart(2,'0');
    let time=(d.getHours()+"").padStart(2,'0')+":"+(d.getMinutes()+"").padStart(2,'0')+":"+(d.getSeconds()+"").padStart(2,'0');
    return [date, time];
  }
  
  cleanStrict( messageString ){
    let strip=document.createElement( "div" );
    strip.innerHTML=messageString;
    strip=strip.innerText;
    let matcher=strip.match(/([a-zA-Z0-9])\w+/g);

    if(matcher){
      strip=matcher.join(" ");
    }
    return strip;
  }
    
  cleanBasic( messageString ){
    let strip=document.createElement( "div" );
    strip.innerHTML=messageString;
    strip=strip.innerText;
    let matcher=strip.match(/([a-zA-Z0-9\s\w-+()\[\]])+/g);

    if(matcher){
      strip=matcher.join("");
    }
    return strip;
  }
    
  cleanString( messageString ){
    let strip=document.createElement( "div" );
    strip.innerHTML=messageString;
    strip=strip.innerText;
    return strip;
  }
    
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.padStart(2,'0');
  }
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(Math.min(255, Math.max(0,Math.round(r)))) + this.componentToHex(Math.min(255, Math.max(0,Math.round(g)))) + this.componentToHex(Math.min(255, Math.max(0,Math.round(b))));
  }
  
  hexToRgb( hex ) {
    let buffer=hex[0];
    if(buffer=="#"){
      hex=hex.substr( 1, 6 );
    }else{
      hex=hex.substr( 0, 6 );
    }
    let r,g,b;
    if(hex.length==3){
      r=hex[0]+hex[0];
      g=hex[1]+hex[1];
      b=hex[2]+hex[2];
    }else{
      r=hex[0]+hex[1];
      g=hex[2]+hex[3];
      b=hex[4]+hex[5];
    }
    r=parseInt(r,16);
    g=parseInt(g,16);
    b=parseInt(b,16);
    return [r,g,b];
  }
    
    stringToRgb( string, boost=null, zoFit=false ){
        let stringColor=[255,0,0];
        if( string ){
            let sLength=string.length;
            let charCode="";
            for(let x=0; x<sLength; ++x){
                charCode+=string[ (sLength-1-x) ].charCodeAt(0).toString(16);
            }

            let ccLength=charCode.length;
            if(ccLength>6){
                let offset=1;
                if(string=="tussin"){
                    offset=0;
                }else if(string=="fexofenadine"){
                    offset=-1;
                }
                let reader=Math.max(0,parseInt((ccLength-6)/2+offset));
                charCode=charCode.substr(reader,6);
            }
            
            stringColor=this.hexToRgb( charCode );
        }
        
        if( boost != null){
            let maxCd=Math.max(...stringColor);
            let minCd=Math.min(...stringColor);
            let boostCd=maxCd*boost;
            stringColor[0]= parseInt( Math.min(255, ((stringColor[0]-minCd) / (maxCd-minCd))*255+boostCd) );
            stringColor[1]= parseInt( Math.min(255, ((stringColor[1]-minCd) / (maxCd-minCd))*255+boostCd) );
            stringColor[2]= parseInt( Math.min(255, ((stringColor[2]-minCd) / (maxCd-minCd))*255+boostCd) );
            /*
            stringColor[0]= Math.max(0, Math.min(255, (stringColor[0]-100)*boost+100));
            stringColor[1]= Math.max(0, Math.min(255, (stringColor[1]-100)*boost+100));
            stringColor[2]= Math.max(0, Math.min(255, (stringColor[2]-100)*boost+100));
            */
        }
        
        if( zoFit==true ){
            stringColor[0]=stringColor[0]/255;
            stringColor[1]=stringColor[1]/255;
            stringColor[2]=stringColor[2]/255;
        }
        
        return stringColor;
    }
    
  randomizeArray(inputArr){
    let tmpArr=[...inputArr];
    let retArr=[];
    while( tmpArr.length > 0){
      let rand=tmpArr.length==1 ? 0 : parseInt(Math.random()*21*tmpArr.length)%tmpArr.length;
      retArr.push( tmpArr.splice( rand, 1 )[0] );
    }
    return retArr;
  }
    
    getRandom( list, seed=1.14 ){
        let randEl= Math.floor( Math.random( seed ) * list.length);
        return list[ randEl ];
    }
    
  applyTransformList(curObj,transList){
    var rotate=transList["r"];
    curObj.rotateX(rotate[0]);
    curObj.rotateY(rotate[1]);
    curObj.rotateZ(rotate[2]);
    if(typeof(transList["rOrder"]) !== "undefined" ){
      curObj.rotation.order=transList["rOrder"];
    }
    var pos=transList["t"];
    curObj.position.set(pos[0],pos[1],pos[2]);
    var scale=transList["s"];
    curObj.scale.set(scale[0],scale[1],scale[2]);
    
    curObj.matrixAutoUpdate=false;
    curObj.updateMatrix();
  }
  
    vec2(x=null,y=null){
        return new Vector2(x,y);
    }
    vec3(x=0,y=0,z=0){
        return new Vector3(x,y,z);
    }
    
  //this.channelFormats=[ THREE.AlphaFormat, THREE.RedFormat, THREE.RGFormat, THREE.RGBFormat, THREE.RGBAFormat, THREE.LuminanceFormat, THREE.DepthFormat ];
  loadTexture(imgPath,channels=null,mods={}){
    // ## Check how textLoaderArray textures are being handled after being disposed
    if(typeof(this.textLoaderArray[imgPath]) != "undefined"){
      texture=this.textLoaderArray[imgPath];
    }else{
      //var texLoader=new THREE.ImageLoader(verboseLoading);
      var texture=new THREE.Texture();
      this.texLoader.load(imgPath,
        (tex)=>{
          if(channels!=null){
            texture.format = this.channelFormats[ channels ];
          }
          texture.image=tex;
          texture.needsUpdate=true;
          //texture.encoding=THREE.LinearEncoding;
          //texture.encoding=THREE.sRGBEncoding;
          //texture.mapping = THREE.CubeUVRefractionMapping;
          if(mods.length>0){
            let keys=Object.keys(mods);
            keys.forEach((x)=>{
              texture[x]=mods[x];
            });
          }
        }
      );
      this.textLoaderArray[imgPath]=texture;
    }
    return texture;
  }

    getVideoTexture( videoObject ){
        let videoTexture=new THREE.VideoTexture(videoObject);
        videoTexture.minFilter=THREE.LinearFilter;
        videoTexture.magFilter=THREE.LinearFilter; // faster, lower samples, THREE.NearestFilter
        videoTexture.format=THREE.RGBFormat;
        
        return videoTexture;
    }
    
    getCanvasTexture( canvas ){
        const texture = new THREE.CanvasTexture(canvas);
         
        const material = new THREE.MeshBasicMaterial({
          map: texture,
        });
        return {texture, material};
    }
}