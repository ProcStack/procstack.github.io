var Ba=Object.defineProperty;var _t=(l,e)=>{for(var t in e)Ba(l,t,{get:e[t],enumerable:!0})};var Tr="171";var Lt=0,Ls=1,ve=2;var Br=0,zr=1,Vr=2,kr=3,Gr=4,Hr=5,Wr=6,Xr=7;var jr=300,Is=301;var et=1e3,jt=1001,wr=1002,se=1003,De=1004;var Hn=1006;var Us=1009;var Ns=1014,Fs=1015;var Er=1026,Cr=1027;var qt=2300,qi=2301,Xi=2302,Ar=2400,Rr=2401,Pr=2402;var ye="srgb",Yt="srgb-linear",Dr="linear",ji="srgb";var ut=7680;var Lr=35044;var Zt=2e3,Yi=2001,dt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var za=Math.PI/180,Va=180/Math.PI;function Nt(){let l=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ae[255&l]+ae[l>>8&255]+ae[l>>16&255]+ae[l>>24&255]+"-"+ae[255&e]+ae[e>>8&255]+"-"+ae[e>>16&15|64]+ae[e>>24&255]+"-"+ae[63&t|128]+ae[t>>8&255]+"-"+ae[t>>16&255]+ae[t>>24&255]+ae[255&i]+ae[i>>8&255]+ae[i>>16&255]+ae[i>>24&255]).toLowerCase()}function V(l,e,t){return Math.max(e,Math.min(t,l))}function ka(l,e){return(l%e+e)%e}function $n(l,e,t){return(1-t)*l+t*e}function zt(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function ue(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return Math.round(4294967295*l);case Uint16Array:return Math.round(65535*l);case Uint8Array:return Math.round(255*l);case Int32Array:return Math.round(2147483647*l);case Int16Array:return Math.round(32767*l);case Int8Array:return Math.round(127*l);default:throw new Error("Invalid component type.")}}var w=class l{constructor(e=0,t=0){l.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(V(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(V(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},z=class l{constructor(e,t,i,n,r,s,a,o,c){l.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,a,o,c)}set(e,t,i,n,r,s,a,o,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=o,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],c=i[1],h=i[4],u=i[7],p=i[2],d=i[5],m=i[8],f=n[0],v=n[3],x=n[6],_=n[1],y=n[4],M=n[7],b=n[2],S=n[5],T=n[8];return r[0]=s*f+a*_+o*b,r[3]=s*v+a*y+o*S,r[6]=s*x+a*M+o*T,r[1]=c*f+h*_+u*b,r[4]=c*v+h*y+u*S,r[7]=c*x+h*M+u*T,r[2]=p*f+d*_+m*b,r[5]=p*v+d*y+m*S,r[8]=p*x+d*M+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-i*r*h+i*a*o+n*r*c-n*s*o}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],h=e[8],u=h*s-a*c,p=a*o-h*r,d=c*r-s*o,m=t*u+i*p+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/m;return e[0]=u*f,e[1]=(n*c-h*i)*f,e[2]=(a*i-n*s)*f,e[3]=p*f,e[4]=(h*t-n*o)*f,e[5]=(n*r-a*t)*f,e[6]=d*f,e[7]=(i*o-c*t)*f,e[8]=(s*t-i*r)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,a){let o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*s+c*a)+s+e,-n*c,n*o,-n*(-c*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qn.makeScale(e,t)),this}rotate(e){return this.premultiply(Qn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qn=new z;function Os(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function Ir(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}var hs=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),us=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ga(){let l={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(n,r,s){return this.enabled!==!1&&r!==s&&r&&s&&(this.spaces[r].transfer===ji&&(n.r=He(n.r),n.g=He(n.g),n.b=He(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ji&&(n.r=Dt(n.r),n.g=Dt(n.g),n.b=Dt(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?Dr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return l.define({[Yt]:{primaries:e,whitePoint:i,transfer:Dr,toXYZ:hs,fromXYZ:us,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:e,whitePoint:i,transfer:ji,toXYZ:hs,fromXYZ:us,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),l}var _e=Ga();function He(l){return l<.04045?.0773993808*l:Math.pow(.9478672986*l+.0521327014,2.4)}function Dt(l){return l<.0031308?12.92*l:1.055*Math.pow(l,.41666)-.055}var yt,Zi=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yt===void 0&&(yt=Ir("canvas")),yt.width=e.width,yt.height=e.height;let i=yt.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yt}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=255*He(r[s]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*He(t[i]/255)):t[i]=He(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ha=0,Ji=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ha++}),this.uuid=Nt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(er(n[s].image)):r.push(er(n[s]))}else r=er(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function er(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Zi.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wa=0,Ce=class l extends dt{constructor(e=l.DEFAULT_IMAGE,t=l.DEFAULT_MAPPING,i=1001,n=1001,r=1006,s=1008,a=1023,o=Us,c=l.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wa++}),this.uuid=Nt(),this.name="",this.source=new Ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new w(0,0),this.repeat=new w(1,1),this.center=new w(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case et:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case et:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ce.DEFAULT_IMAGE=null,Ce.DEFAULT_MAPPING=jr,Ce.DEFAULT_ANISOTROPY=1;var tt=class l{constructor(e=0,t=0,i=0,n=1){l.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,o=e.elements,c=o[0],h=o[4],u=o[8],p=o[1],d=o[5],m=o[9],f=o[2],v=o[6],x=o[10];if(Math.abs(h-p)<.01&&Math.abs(u-f)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+f)<.1&&Math.abs(m+v)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(d+1)/2,b=(x+1)/2,S=(h+p)/4,T=(u+f)/4,C=(m+v)/4;return y>M&&y>b?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=S/i,r=T/i):M>b?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=S/n,r=C/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=T/r,n=C/r),this.set(i,n,r,t),this}let _=Math.sqrt((v-m)*(v-m)+(u-f)*(u-f)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(u-f)/_,this.z=(p-h)/_,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(V(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Ki=class extends Ce{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=se,this.minFilter=se,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $i=class extends Ce{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=se,this.minFilter=se,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ae=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],p=r[s+0],d=r[s+1],m=r[s+2],f=r[s+3];if(a===0)return e[t+0]=o,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(a===1)return e[t+0]=p,e[t+1]=d,e[t+2]=m,void(e[t+3]=f);if(u!==f||o!==p||c!==d||h!==m){let v=1-a,x=o*p+c*d+h*m+u*f,_=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){let b=Math.sqrt(y),S=Math.atan2(b,x*_);v=Math.sin(v*S)/b,a=Math.sin(a*S)/b}let M=a*_;if(o=o*v+p*M,c=c*v+d*M,h=h*v+m*M,u=u*v+f*M,v===1-a){let b=1/Math.sqrt(o*o+c*c+h*h+u*u);o*=b,c*=b,h*=b,u*=b}}e[t]=o,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,s){let a=i[n],o=i[n+1],c=i[n+2],h=i[n+3],u=r[s],p=r[s+1],d=r[s+2],m=r[s+3];return e[t]=a*m+h*u+o*d-c*p,e[t+1]=o*m+h*p+c*u-a*d,e[t+2]=c*m+h*d+a*p-o*u,e[t+3]=h*m-a*u-o*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),p=o(i/2),d=o(n/2),m=o(r/2);switch(s){case"XYZ":this._x=p*h*u+c*d*m,this._y=c*d*u-p*h*m,this._z=c*h*m+p*d*u,this._w=c*h*u-p*d*m;break;case"YXZ":this._x=p*h*u+c*d*m,this._y=c*d*u-p*h*m,this._z=c*h*m-p*d*u,this._w=c*h*u+p*d*m;break;case"ZXY":this._x=p*h*u-c*d*m,this._y=c*d*u+p*h*m,this._z=c*h*m+p*d*u,this._w=c*h*u-p*d*m;break;case"ZYX":this._x=p*h*u-c*d*m,this._y=c*d*u+p*h*m,this._z=c*h*m-p*d*u,this._w=c*h*u+p*d*m;break;case"YZX":this._x=p*h*u+c*d*m,this._y=c*d*u+p*h*m,this._z=c*h*m-p*d*u,this._w=c*h*u-p*d*m;break;case"XZY":this._x=p*h*u-c*d*m,this._y=c*d*u-p*h*m,this._z=c*h*m+p*d*u,this._w=c*h*u+p*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10],p=i+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-o)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-o)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,h=t._w;return this._x=i*h+s*a+n*c-r*o,this._y=n*h+s*o+r*a-i*c,this._z=r*h+s*c+i*o-n*a,this._w=s*h-i*a-n*o-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,s=this._w,a=s*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(o),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=s*u+this._w*p,this._x=i*u+this._x*p,this._y=n*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},g=class l{constructor(e=0,t=0,i=0){l.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ds.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ds.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,a=e.z,o=e.w,c=2*(s*n-a*i),h=2*(a*t-r*n),u=2*(r*i-s*t);return this.x=t+o*c+s*u-a*h,this.y=i+o*h+a*c-r*u,this.z=n+o*u+r*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(V(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tr.copy(this).projectOnVector(e),this.sub(tr)}reflect(e){return this.sub(tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(V(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tr=new g,ds=new Ae,Re=class{constructor(e=new g(1/0,1/0,1/0),t=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Te.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Te.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Te.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Te):Te.fromBufferAttribute(r,s),Te.applyMatrix4(e.matrixWorld),this.expandByPoint(Te);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_i.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_i.copy(i.boundingBox)),_i.applyMatrix4(e.matrixWorld),this.union(_i)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Te),Te.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vt),yi.subVectors(this.max,Vt),Mt.subVectors(e.a,Vt),bt.subVectors(e.b,Vt),St.subVectors(e.c,Vt),qe.subVectors(bt,Mt),Ye.subVectors(St,bt),ot.subVectors(Mt,St);let t=[0,-qe.z,qe.y,0,-Ye.z,Ye.y,0,-ot.z,ot.y,qe.z,0,-qe.x,Ye.z,0,-Ye.x,ot.z,0,-ot.x,-qe.y,qe.x,0,-Ye.y,Ye.x,0,-ot.y,ot.x,0];return!!ir(t,Mt,bt,St,yi)&&(t=[1,0,0,0,1,0,0,0,1],!!ir(t,Mt,bt,St,yi)&&(Mi.crossVectors(qe,Ye),t=[Mi.x,Mi.y,Mi.z],ir(t,Mt,bt,St,yi)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Te).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Te).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Fe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fe)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Fe=[new g,new g,new g,new g,new g,new g,new g,new g],Te=new g,_i=new Re,Mt=new g,bt=new g,St=new g,qe=new g,Ye=new g,ot=new g,Vt=new g,yi=new g,Mi=new g,lt=new g;function ir(l,e,t,i,n){for(let r=0,s=l.length-3;r<=s;r+=3){lt.fromArray(l,r);let a=n.x*Math.abs(lt.x)+n.y*Math.abs(lt.y)+n.z*Math.abs(lt.z),o=e.dot(lt),c=t.dot(lt),h=i.dot(lt);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>a)return!1}return!0}var Xa=new Re,kt=new g,nr=new g,Pe=class{constructor(e=new g,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xa.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kt.subVectors(e,this.center);let t=kt.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(kt,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kt.copy(e.center).add(nr)),this.expandByPoint(kt.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Oe=new g,rr=new g,bi=new g,Ze=new g,sr=new g,Si=new g,ar=new g,pt=class{constructor(e=new g,t=new g(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oe)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oe.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oe.copy(this.origin).addScaledVector(this.direction,t),Oe.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){rr.copy(e).add(t).multiplyScalar(.5),bi.copy(t).sub(e).normalize(),Ze.copy(this.origin).sub(rr);let r=.5*e.distanceTo(t),s=-this.direction.dot(bi),a=Ze.dot(this.direction),o=-Ze.dot(bi),c=Ze.lengthSq(),h=Math.abs(1-s*s),u,p,d,m;if(h>0)if(u=s*o-a,p=s*a-o,m=r*h,u>=0)if(p>=-m)if(p<=m){let f=1/h;u*=f,p*=f,d=u*(u+s*p+2*a)+p*(s*u+p+2*o)+c}else p=r,u=Math.max(0,-(s*p+a)),d=-u*u+p*(p+2*o)+c;else p=-r,u=Math.max(0,-(s*p+a)),d=-u*u+p*(p+2*o)+c;else p<=-m?(u=Math.max(0,-(-s*r+a)),p=u>0?-r:Math.min(Math.max(-r,-o),r),d=-u*u+p*(p+2*o)+c):p<=m?(u=0,p=Math.min(Math.max(-r,-o),r),d=p*(p+2*o)+c):(u=Math.max(0,-(s*r+a)),p=u>0?r:Math.min(Math.max(-r,-o),r),d=-u*u+p*(p+2*o)+c);else p=s>0?-r:r,u=Math.max(0,-(s*p+a)),d=-u*u+p*(p+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(rr).addScaledVector(bi,p),d}intersectSphere(e,t){Oe.subVectors(e.center,this.origin);let i=Oe.dot(this.direction),n=Oe.dot(Oe)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,n=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,n=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),i>s||r>n?null:((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),u>=0?(a=(e.min.z-p.z)*u,o=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,o=(e.min.z-p.z)*u),i>o||a>n?null:((a>i||i!=i)&&(i=a),(o<n||n!=n)&&(n=o),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Oe)!==null}intersectTriangle(e,t,i,n,r){sr.subVectors(t,e),Si.subVectors(i,e),ar.crossVectors(sr,Si);let s,a=this.direction.dot(ar);if(a>0){if(n)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}Ze.subVectors(this.origin,e);let o=s*this.direction.dot(Si.crossVectors(Ze,Si));if(o<0)return null;let c=s*this.direction.dot(sr.cross(Ze));if(c<0||o+c>a)return null;let h=-s*Ze.dot(ar);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},G=class l{constructor(e,t,i,n,r,s,a,o,c,h,u,p,d,m,f,v){l.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,a,o,c,h,u,p,d,m,f,v)}set(e,t,i,n,r,s,a,o,c,h,u,p,d,m,f,v){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=n,x[1]=r,x[5]=s,x[9]=a,x[13]=o,x[2]=c,x[6]=h,x[10]=u,x[14]=p,x[3]=d,x[7]=m,x[11]=f,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new l().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Tt.setFromMatrixColumn(e,0).length(),r=1/Tt.setFromMatrixColumn(e,1).length(),s=1/Tt.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),a=Math.sin(i),o=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=s*h,d=s*u,m=a*h,f=a*u;t[0]=o*h,t[4]=-o*u,t[8]=c,t[1]=d+m*c,t[5]=p-f*c,t[9]=-a*o,t[2]=f-p*c,t[6]=m+d*c,t[10]=s*o}else if(e.order==="YXZ"){let p=o*h,d=o*u,m=c*h,f=c*u;t[0]=p+f*a,t[4]=m*a-d,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=d*a-m,t[6]=f+p*a,t[10]=s*o}else if(e.order==="ZXY"){let p=o*h,d=o*u,m=c*h,f=c*u;t[0]=p-f*a,t[4]=-s*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=s*h,t[9]=f-p*a,t[2]=-s*c,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){let p=s*h,d=s*u,m=a*h,f=a*u;t[0]=o*h,t[4]=m*c-d,t[8]=p*c+f,t[1]=o*u,t[5]=f*c+p,t[9]=d*c-m,t[2]=-c,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){let p=s*o,d=s*c,m=a*o,f=a*c;t[0]=o*h,t[4]=f-p*u,t[8]=m*u+d,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=p-f*u}else if(e.order==="XZY"){let p=s*o,d=s*c,m=a*o,f=a*c;t[0]=o*h,t[4]=-u,t[8]=c*h,t[1]=p*u+f,t[5]=s*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=f*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ja,e,qa)}lookAt(e,t,i){let n=this.elements;return me.subVectors(e,t),me.lengthSq()===0&&(me.z=1),me.normalize(),Je.crossVectors(i,me),Je.lengthSq()===0&&(Math.abs(i.z)===1?me.x+=1e-4:me.z+=1e-4,me.normalize(),Je.crossVectors(i,me)),Je.normalize(),Ti.crossVectors(me,Je),n[0]=Je.x,n[4]=Ti.x,n[8]=me.x,n[1]=Je.y,n[5]=Ti.y,n[9]=me.y,n[2]=Je.z,n[6]=Ti.z,n[10]=me.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[4],o=i[8],c=i[12],h=i[1],u=i[5],p=i[9],d=i[13],m=i[2],f=i[6],v=i[10],x=i[14],_=i[3],y=i[7],M=i[11],b=i[15],S=n[0],T=n[4],C=n[8],O=n[12],B=n[1],I=n[5],k=n[9],H=n[13],ie=n[2],J=n[6],be=n[10],Le=n[14],pe=n[3],ee=n[7],Y=n[11],ne=n[15];return r[0]=s*S+a*B+o*ie+c*pe,r[4]=s*T+a*I+o*J+c*ee,r[8]=s*C+a*k+o*be+c*Y,r[12]=s*O+a*H+o*Le+c*ne,r[1]=h*S+u*B+p*ie+d*pe,r[5]=h*T+u*I+p*J+d*ee,r[9]=h*C+u*k+p*be+d*Y,r[13]=h*O+u*H+p*Le+d*ne,r[2]=m*S+f*B+v*ie+x*pe,r[6]=m*T+f*I+v*J+x*ee,r[10]=m*C+f*k+v*be+x*Y,r[14]=m*O+f*H+v*Le+x*ne,r[3]=_*S+y*B+M*ie+b*pe,r[7]=_*T+y*I+M*J+b*ee,r[11]=_*C+y*k+M*be+b*Y,r[15]=_*O+y*H+M*Le+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],a=e[5],o=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14];return e[3]*(+r*o*u-n*c*u-r*a*p+i*c*p+n*a*d-i*o*d)+e[7]*(+t*o*d-t*c*p+r*s*p-n*s*d+n*c*h-r*o*h)+e[11]*(+t*c*u-t*a*d-r*s*u+i*s*d+r*a*h-i*c*h)+e[15]*(-n*a*h-t*o*u+t*a*p+n*s*u-i*s*p+i*o*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],m=e[12],f=e[13],v=e[14],x=e[15],_=u*v*c-f*p*c+f*o*d-a*v*d-u*o*x+a*p*x,y=m*p*c-h*v*c-m*o*d+s*v*d+h*o*x-s*p*x,M=h*f*c-m*u*c+m*a*d-s*f*d-h*a*x+s*u*x,b=m*u*o-h*f*o-m*a*p+s*f*p+h*a*v-s*u*v,S=t*_+i*y+n*M+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=_*T,e[1]=(f*p*r-u*v*r-f*n*d+i*v*d+u*n*x-i*p*x)*T,e[2]=(a*v*r-f*o*r+f*n*c-i*v*c-a*n*x+i*o*x)*T,e[3]=(u*o*r-a*p*r-u*n*c+i*p*c+a*n*d-i*o*d)*T,e[4]=y*T,e[5]=(h*v*r-m*p*r+m*n*d-t*v*d-h*n*x+t*p*x)*T,e[6]=(m*o*r-s*v*r-m*n*c+t*v*c+s*n*x-t*o*x)*T,e[7]=(s*p*r-h*o*r+h*n*c-t*p*c-s*n*d+t*o*d)*T,e[8]=M*T,e[9]=(m*u*r-h*f*r-m*i*d+t*f*d+h*i*x-t*u*x)*T,e[10]=(s*f*r-m*a*r+m*i*c-t*f*c-s*i*x+t*a*x)*T,e[11]=(h*a*r-s*u*r-h*i*c+t*u*c+s*i*d-t*a*d)*T,e[12]=b*T,e[13]=(h*f*n-m*u*n+m*i*p-t*f*p-h*i*v+t*u*v)*T,e[14]=(m*a*n-s*f*n-m*i*o+t*f*o+s*i*v-t*a*v)*T,e[15]=(s*u*n-h*a*n+h*i*o-t*u*o-s*i*p+t*a*p)*T,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,a=e.y,o=e.z,c=r*s,h=r*a;return this.set(c*s+i,c*a-n*o,c*o+n*a,0,c*a+n*o,h*a+i,h*o-n*s,0,c*o-n*a,h*o+n*s,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,c=r+r,h=s+s,u=a+a,p=r*c,d=r*h,m=r*u,f=s*h,v=s*u,x=a*u,_=o*c,y=o*h,M=o*u,b=i.x,S=i.y,T=i.z;return n[0]=(1-(f+x))*b,n[1]=(d+M)*b,n[2]=(m-y)*b,n[3]=0,n[4]=(d-M)*S,n[5]=(1-(p+x))*S,n[6]=(v+_)*S,n[7]=0,n[8]=(m+y)*T,n[9]=(v-_)*T,n[10]=(1-(p+f))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=Tt.set(n[0],n[1],n[2]).length(),s=Tt.set(n[4],n[5],n[6]).length(),a=Tt.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],we.copy(this);let o=1/r,c=1/s,h=1/a;return we.elements[0]*=o,we.elements[1]*=o,we.elements[2]*=o,we.elements[4]*=c,we.elements[5]*=c,we.elements[6]*=c,we.elements[8]*=h,we.elements[9]*=h,we.elements[10]*=h,t.setFromRotationMatrix(we),i.x=r,i.y=s,i.z=a,this}makePerspective(e,t,i,n,r,s,a=2e3){let o=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),p=(i+n)/(i-n),d,m;if(a===Zt)d=-(s+r)/(s-r),m=-2*s*r/(s-r);else{if(a!==Yi)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);d=-s/(s-r),m=-s*r/(s-r)}return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,r,s,a=2e3){let o=this.elements,c=1/(t-e),h=1/(i-n),u=1/(s-r),p=(t+e)*c,d=(i+n)*h,m,f;if(a===Zt)m=(s+r)*u,f=-2*u;else{if(a!==Yi)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);m=r*u,f=-1*u}return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=f,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Tt=new g,we=new G,ja=new g(0,0,0),qa=new g(1,1,1),Je=new g,Ti=new g,me=new g,ps=new G,ms=new Ae,it=class l{constructor(e=0,t=0,i=0,n=l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],a=n[8],o=n[1],c=n[5],h=n[9],u=n[2],p=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-V(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(V(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ps.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ps,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ms.setFromEuler(this),this.setFromQuaternion(ms,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};it.DEFAULT_ORDER="XYZ";var Qi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Ya=0,fs=new g,wt=new Ae,Be=new G,wi=new g,Gt=new g,Za=new g,Ja=new Ae,gs=new g(1,0,0),vs=new g(0,1,0),xs=new g(0,0,1),_s={type:"added"},Ka={type:"removed"},Et={type:"childadded",child:null},or={type:"childremoved",child:null},de=class l extends dt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ya++}),this.uuid=Nt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=l.DEFAULT_UP.clone();let e=new g,t=new it,i=new Ae,n=new g(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new G},normalMatrix:{value:new z}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=l.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wt.setFromAxisAngle(e,t),this.quaternion.multiply(wt),this}rotateOnWorldAxis(e,t){return wt.setFromAxisAngle(e,t),this.quaternion.premultiply(wt),this}rotateX(e){return this.rotateOnAxis(gs,e)}rotateY(e){return this.rotateOnAxis(vs,e)}rotateZ(e){return this.rotateOnAxis(xs,e)}translateOnAxis(e,t){return fs.copy(e).applyQuaternion(this.quaternion),this.position.add(fs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gs,e)}translateY(e){return this.translateOnAxis(vs,e)}translateZ(e){return this.translateOnAxis(xs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Be.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wi.copy(e):wi.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Gt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Be.lookAt(Gt,wi,this.up):Be.lookAt(wi,Gt,this.up),this.quaternion.setFromRotationMatrix(Be),n&&(Be.extractRotation(n.matrixWorld),wt.setFromRotationMatrix(Be),this.quaternion.premultiply(wt.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_s),Et.child=e,this.dispatchEvent(Et),Et.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ka),or.child=e,this.dispatchEvent(or),or.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Be.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Be.multiply(e.parent.matrixWorld)),e.applyMatrix4(Be),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_s),Et.child=e,this.dispatchEvent(Et),Et.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gt,e,Za),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gt,Ja,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){let u=o[c];r(e.shapes,u)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(r(e.materials,this.material[o]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];n.animations.push(r(e.animations,o))}}if(t){let a=s(e.geometries),o=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),p=s(e.skeletons),d=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function s(a){let o=[];for(let c in a){let h=a[c];delete h.metadata,o.push(h)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};de.DEFAULT_UP=new g(0,1,0),de.DEFAULT_MATRIX_AUTO_UPDATE=!0,de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=new g,ze=new g,lr=new g,Ve=new g,Ct=new g,At=new g,ys=new g,cr=new g,hr=new g,ur=new g,dr=new tt,pr=new tt,mr=new tt,Ge=class l{constructor(e=new g,t=new g,i=new g){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ee.subVectors(e,t),n.cross(Ee);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Ee.subVectors(n,t),ze.subVectors(i,t),lr.subVectors(e,t);let s=Ee.dot(Ee),a=Ee.dot(ze),o=Ee.dot(lr),c=ze.dot(ze),h=ze.dot(lr),u=s*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*o-a*h)*p,m=(s*h-a*o)*p;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ve)!==null&&Ve.x>=0&&Ve.y>=0&&Ve.x+Ve.y<=1}static getInterpolation(e,t,i,n,r,s,a,o){return this.getBarycoord(e,t,i,n,Ve)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ve.x),o.addScaledVector(s,Ve.y),o.addScaledVector(a,Ve.z),o)}static getInterpolatedAttribute(e,t,i,n,r,s){return dr.setScalar(0),pr.setScalar(0),mr.setScalar(0),dr.fromBufferAttribute(e,t),pr.fromBufferAttribute(e,i),mr.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(dr,r.x),s.addScaledVector(pr,r.y),s.addScaledVector(mr,r.z),s}static isFrontFacing(e,t,i,n){return Ee.subVectors(i,t),ze.subVectors(e,t),Ee.cross(ze).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ee.subVectors(this.c,this.b),ze.subVectors(this.a,this.b),.5*Ee.cross(ze).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return l.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return l.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return l.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return l.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return l.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,a;Ct.subVectors(n,i),At.subVectors(r,i),cr.subVectors(e,i);let o=Ct.dot(cr),c=At.dot(cr);if(o<=0&&c<=0)return t.copy(i);hr.subVectors(e,n);let h=Ct.dot(hr),u=At.dot(hr);if(h>=0&&u<=h)return t.copy(n);let p=o*u-h*c;if(p<=0&&o>=0&&h<=0)return s=o/(o-h),t.copy(i).addScaledVector(Ct,s);ur.subVectors(e,r);let d=Ct.dot(ur),m=At.dot(ur);if(m>=0&&d<=m)return t.copy(r);let f=d*c-o*m;if(f<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(At,a);let v=h*m-d*u;if(v<=0&&u-h>=0&&d-m>=0)return ys.subVectors(r,n),a=(u-h)/(u-h+(d-m)),t.copy(n).addScaledVector(ys,a);let x=1/(v+f+p);return s=f*x,a=p*x,t.copy(i).addScaledVector(Ct,s).addScaledVector(At,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function fr(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+6*(e-l)*t:t<.5?e:t<2/3?l+6*(e-l)*(2/3-t):l}var W=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,_e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=_e.workingColorSpace){return this.r=e,this.g=t,this.b=i,_e.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=_e.workingColorSpace){if(e=ka(e,1),t=V(t,0,1),i=V(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=fr(s,r,e+1/3),this.g=fr(s,r,e),this.b=fr(s,r,e-1/3)}return _e.toWorkingColorSpace(this,n),this}setStyle(e,t=ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ye){let i=Bs[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=He(e.r),this.g=He(e.g),this.b=He(e.b),this}copyLinearToSRGB(e){return this.r=Dt(e.r),this.g=Dt(e.g),this.b=Dt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ye){return _e.fromWorkingColorSpace(oe.copy(this),e),65536*Math.round(V(255*oe.r,0,255))+256*Math.round(V(255*oe.g,0,255))+Math.round(V(255*oe.b,0,255))}getHexString(e=ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_e.workingColorSpace){_e.fromWorkingColorSpace(oe.copy(this),t);let i=oe.r,n=oe.g,r=oe.b,s=Math.max(i,n,r),a=Math.min(i,n,r),o,c,h=(a+s)/2;if(a===s)o=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case i:o=(n-r)/u+(n<r?6:0);break;case n:o=(r-i)/u+2;break;case r:o=(i-n)/u+4}o/=6}return e.h=o,e.s=c,e.l=h,e}getRGB(e,t=_e.workingColorSpace){return _e.fromWorkingColorSpace(oe.copy(this),t),e.r=oe.r,e.g=oe.g,e.b=oe.b,e}getStyle(e=ye){_e.fromWorkingColorSpace(oe.copy(this),e);let t=oe.r,i=oe.g,n=oe.b;return e!==ye?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ke),this.setHSL(Ke.h+e,Ke.s+t,Ke.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ke),e.getHSL(Ei);let i=$n(Ke.h,Ei.h,t),n=$n(Ke.s,Ei.s,t),r=$n(Ke.l,Ei.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oe=new W;W.NAMES=Bs;var $a=0,Jt=class extends dt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$a++}),this.uuid=Nt(),this.name="",this.type="Material",this.blending=1,this.side=Lt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ut,this.stencilZFail=ut,this.stencilZPass=ut,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let s=[];for(let a in r){let o=r[a];delete o.metadata,s.push(o)}return s}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Lt&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ut&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ut&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ut&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},en=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new it,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bo=Qa();function Qa(){let l=new ArrayBuffer(4),e=new Float32Array(l),t=new Uint32Array(l),i=new Uint32Array(512),n=new Uint32Array(512);for(let o=0;o<256;++o){let c=o-127;c<-27?(i[o]=0,i[256|o]=32768,n[o]=24,n[256|o]=24):c<-14?(i[o]=1024>>-c-14,i[256|o]=1024>>-c-14|32768,n[o]=-c-1,n[256|o]=-c-1):c<=15?(i[o]=c+15<<10,i[256|o]=c+15<<10|32768,n[o]=13,n[256|o]=13):c<128?(i[o]=31744,i[256|o]=64512,n[o]=24,n[256|o]=24):(i[o]=31744,i[256|o]=64512,n[o]=13,n[256|o]=13)}let r=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let o=1;o<1024;++o){let c=o<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[o]=c|h}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)s[o]=o<<23;s[31]=1199570944,s[32]=2147483648;for(let o=33;o<63;++o)s[o]=2147483648+(o-32<<23);s[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(a[o]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:s,offsetTable:a}}var te=new g,Ci=new w,We=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lr,this.updateRanges=[],this.gpuType=Fs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix3(e),this.setXY(t,Ci.x,Ci.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)te.fromBufferAttribute(this,t),te.applyMatrix3(e),this.setXYZ(t,te.x,te.y,te.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)te.fromBufferAttribute(this,t),te.applyMatrix4(e),this.setXYZ(t,te.x,te.y,te.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)te.fromBufferAttribute(this,t),te.applyNormalMatrix(e),this.setXYZ(t,te.x,te.y,te.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)te.fromBufferAttribute(this,t),te.transformDirection(e),this.setXYZ(t,te.x,te.y,te.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ue(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ue(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ue(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ue(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ue(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ue(t,this.array),i=ue(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ue(t,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ue(t,this.array),i=ue(i,this.array),n=ue(n,this.array),r=ue(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lr&&(e.usage=this.usage),e}};var tn=class extends We{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var nn=class extends We{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var U=class extends We{constructor(e,t,i){super(new Float32Array(e),t,i)}},eo=0,xe=new G,gr=new de,Rt=new g,fe=new Re,Ht=new Re,re=new g,Q=class l extends dt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=Nt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Os(e)?nn:tn)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new z().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xe.makeRotationFromQuaternion(e),this.applyMatrix4(xe),this}rotateX(e){return xe.makeRotationX(e),this.applyMatrix4(xe),this}rotateY(e){return xe.makeRotationY(e),this.applyMatrix4(xe),this}rotateZ(e){return xe.makeRotationZ(e),this.applyMatrix4(xe),this}translate(e,t,i){return xe.makeTranslation(e,t,i),this.applyMatrix4(xe),this}scale(e,t,i){return xe.makeScale(e,t,i),this.applyMatrix4(xe),this}lookAt(e){return gr.lookAt(e),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rt).negate(),this.translate(Rt.x,Rt.y,Rt.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new U(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Re);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];fe.setFromBufferAttribute(r),this.morphTargetsRelative?(re.addVectors(this.boundingBox.min,fe.min),this.boundingBox.expandByPoint(re),re.addVectors(this.boundingBox.max,fe.max),this.boundingBox.expandByPoint(re)):(this.boundingBox.expandByPoint(fe.min),this.boundingBox.expandByPoint(fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new g,1/0);if(e){let i=this.boundingSphere.center;if(fe.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let a=t[r];Ht.setFromBufferAttribute(a),this.morphTargetsRelative?(re.addVectors(fe.min,Ht.min),fe.expandByPoint(re),re.addVectors(fe.max,Ht.max),fe.expandByPoint(re)):(fe.expandByPoint(Ht.min),fe.expandByPoint(Ht.max))}fe.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)re.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(re));if(t)for(let r=0,s=t.length;r<s;r++){let a=t[r],o=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)re.fromBufferAttribute(a,c),o&&(Rt.fromBufferAttribute(e,c),re.add(Rt)),n=Math.max(n,i.distanceToSquared(re))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],o=[];for(let C=0;C<i.count;C++)a[C]=new g,o[C]=new g;let c=new g,h=new g,u=new g,p=new w,d=new w,m=new w,f=new g,v=new g;function x(C,O,B){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,O),u.fromBufferAttribute(i,B),p.fromBufferAttribute(r,C),d.fromBufferAttribute(r,O),m.fromBufferAttribute(r,B),h.sub(c),u.sub(c),d.sub(p),m.sub(p);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),v.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[C].add(f),a[O].add(f),a[B].add(f),o[C].add(v),o[O].add(v),o[B].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,O=_.length;C<O;++C){let B=_[C],I=B.start;for(let k=I,H=I+B.count;k<H;k+=3)x(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new g,M=new g,b=new g,S=new g;function T(C){b.fromBufferAttribute(n,C),S.copy(b);let O=a[C];y.copy(O),y.sub(b.multiplyScalar(b.dot(O))).normalize(),M.crossVectors(S,O);let B=M.dot(o[C])<0?-1:1;s.setXYZW(C,y.x,y.y,y.z,B)}for(let C=0,O=_.length;C<O;++C){let B=_[C],I=B.start;for(let k=I,H=I+B.count;k<H;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new We(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let n=new g,r=new g,s=new g,a=new g,o=new g,c=new g,h=new g,u=new g;if(e)for(let p=0,d=e.count;p<d;p+=3){let m=e.getX(p+0),f=e.getX(p+1),v=e.getX(p+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),h.subVectors(s,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,m),o.fromBufferAttribute(i,f),c.fromBufferAttribute(i,v),a.add(h),o.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)n.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),h.subVectors(s,r),u.subVectors(n,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)re.fromBufferAttribute(e,t),re.normalize(),e.setXYZ(t,re.x,re.y,re.z)}toNonIndexed(){function e(a,o){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(o.length*h),d=0,m=0;for(let f=0,v=o.length;f<v;f++){d=a.isInterleavedBufferAttribute?o[f]*a.data.stride+a.offset:o[f]*h;for(let x=0;x<h;x++)p[m++]=c[d++]}return new We(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new l,i=this.index.array,n=this.attributes;for(let a in n){let o=e(n[a],i);t.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let o=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=e(c[h],i);o.push(p)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,o=s.length;a<o;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let o in i){let c=i[o];e.data.attributes[o]=c.toJSON(e.data)}let n={},r=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[o]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ms=new G,ct=new pt,Ai=new Pe,bs=new g,Ri=new g,Pi=new g,Di=new g,vr=new g,Li=new g,Ss=new g,Ii=new g,Kt=class extends de{constructor(e=new Q,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){Li.set(0,0,0);for(let o=0,c=r.length;o<c;o++){let h=a[o],u=r[o];h!==0&&(vr.fromBufferAttribute(u,e),s?Li.addScaledVector(vr,h):Li.addScaledVector(vr.sub(t),h))}t.add(Li)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ai.copy(i.boundingSphere),Ai.applyMatrix4(r),ct.copy(e.ray).recast(e.near),Ai.containsPoint(ct.origin)===!1&&(ct.intersectSphere(Ai,bs)===null||ct.origin.distanceToSquared(bs)>(e.far-e.near)**2))return;Ms.copy(r).invert(),ct.copy(e.ray).applyMatrix4(Ms),i.boundingBox!==null&&ct.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,ct)}}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,f=p.length;m<f;m++){let v=p[m],x=s[v.materialIndex];for(let _=Math.max(v.start,d.start),y=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));_<y;_+=3)n=Ui(this,x,e,i,c,h,u,a.getX(_),a.getX(_+1),a.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let m=Math.max(0,d.start),f=Math.min(a.count,d.start+d.count);m<f;m+=3)n=Ui(this,s,e,i,c,h,u,a.getX(m),a.getX(m+1),a.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(o!==void 0)if(Array.isArray(s))for(let m=0,f=p.length;m<f;m++){let v=p[m],x=s[v.materialIndex];for(let _=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));_<y;_+=3)n=Ui(this,x,e,i,c,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let m=Math.max(0,d.start),f=Math.min(o.count,d.start+d.count);m<f;m+=3)n=Ui(this,s,e,i,c,h,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function Ui(l,e,t,i,n,r,s,a,o,c){l.getVertexPosition(a,Ri),l.getVertexPosition(o,Pi),l.getVertexPosition(c,Di);let h=function(u,p,d,m,f,v,x,_){let y;if(y=p.side===Ls?m.intersectTriangle(x,v,f,!0,_):m.intersectTriangle(f,v,x,p.side===Lt,_),y===null)return null;Ii.copy(_),Ii.applyMatrix4(u.matrixWorld);let M=d.ray.origin.distanceTo(Ii);return M<d.near||M>d.far?null:{distance:M,point:Ii.clone(),object:u}}(l,e,t,i,Ri,Pi,Di,Ss);if(h){let u=new g;Ge.getBarycoord(Ss,Ri,Pi,Di,u),n&&(h.uv=Ge.getInterpolatedAttribute(n,a,o,c,u,new w)),r&&(h.uv1=Ge.getInterpolatedAttribute(r,a,o,c,u,new w)),s&&(h.normal=Ge.getInterpolatedAttribute(s,a,o,c,u,new g),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:o,c,normal:new g,materialIndex:0};Ge.getNormal(Ri,Pi,Di,p.normal),h.face=p,h.barycoord=u}return h}var rn=class l extends Q{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let a=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let o=[],c=[],h=[],u=[],p=0,d=0;function m(f,v,x,_,y,M,b,S,T,C,O){let B=M/T,I=b/C,k=M/2,H=b/2,ie=S/2,J=T+1,be=C+1,Le=0,pe=0,ee=new g;for(let Y=0;Y<be;Y++){let ne=Y*I-H;for(let Ie=0;Ie<J;Ie++){let rt=Ie*B-k;ee[f]=rt*_,ee[v]=ne*y,ee[x]=ie,c.push(ee.x,ee.y,ee.z),ee[f]=0,ee[v]=0,ee[x]=S>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Ie/T),u.push(1-Y/C),Le+=1}}for(let Y=0;Y<C;Y++)for(let ne=0;ne<T;ne++){let Ie=p+ne+J*Y,rt=p+ne+J*(Y+1),Se=p+(ne+1)+J*(Y+1),st=p+(ne+1)+J*Y;o.push(Ie,rt,st),o.push(rt,Se,st),pe+=6}a.addGroup(d,pe,O),d+=pe,p+=Le}m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(o),this.setAttribute("position",new U(c,3)),this.setAttribute("normal",new U(h,3)),this.setAttribute("uv",new U(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qr(l){let e={};for(let t in l){e[t]={};for(let i in l[t]){let n=l[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function le(l){let e={};for(let t=0;t<l.length;t++){let i=qr(l[t]);for(let n in i)e[n]=i[n]}return e}var vt={clone:qr,merge:le};var $t=class extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},So=new g,To=new w,wo=new w;var sn=class extends Ce{constructor(e,t,i,n,r,s,a,o,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Is,i,n,r,s,a,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var mt=class l{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new W(e),this.density=t}clone(){return new l(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Eo=new g;var Co=new g,Ao=new g,Ro=new g,Po=new w,Do=new w,Lo=new G,Io=new g,Uo=new g,No=new g,Fo=new w,Oo=new w,Bo=new w;var zo=new g,Vo=new g;var ko=new g,Go=new tt,Ho=new tt,Wo=new g,Xo=new G,jo=new g,qo=new Pe,Yo=new G,Zo=new pt;var Jo=new G,Ko=new G;var $o=new G,Qo=new G;var el=new Re,tl=new G,il=new Kt,nl=new Pe;var xr=new g,to=new g,io=new z,ke=class{constructor(e=new g(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=xr.subVectors(i,t).cross(to.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||io.getNormalMatrix(e),n=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ht=new Pe,Ni=new g,an=class{constructor(e=new ke,t=new ke,i=new ke,n=new ke,r=new ke,s=new ke){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],c=n[4],h=n[5],u=n[6],p=n[7],d=n[8],m=n[9],f=n[10],v=n[11],x=n[12],_=n[13],y=n[14],M=n[15];if(i[0].setComponents(o-r,p-c,v-d,M-x).normalize(),i[1].setComponents(o+r,p+c,v+d,M+x).normalize(),i[2].setComponents(o+s,p+h,v+m,M+_).normalize(),i[3].setComponents(o-s,p-h,v-m,M-_).normalize(),i[4].setComponents(o-a,p-u,v-f,M-y).normalize(),t===Zt)i[5].setComponents(o+a,p+u,v+f,M+y).normalize();else{if(t!==Yi)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(a,u,f,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ht.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ht.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ht)}intersectsSprite(e){return ht.center.set(0,0,0),ht.radius=.7071067811865476,ht.applyMatrix4(e.matrixWorld),this.intersectsSphere(ht)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ni.x=n.normal.x>0?e.max.x:e.min.x,Ni.y=n.normal.y>0?e.max.y:e.min.y,Ni.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=n}reset(){this.list.length=0,this.index=0}},rl=new G,sl=new W(1,1,1),al=new an,ol=new Re,ll=new Pe,cl=new g,hl=new g,ul=new g,dl=new Ur,pl=new Kt;var ml=new g,fl=new g,gl=new G,vl=new pt,xl=new Pe,_l=new g,yl=new g;var Ml=new g,bl=new g;var on=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts=new G,Nr=new pt,Fi=new Pe,Oi=new g,Qt=class extends de{constructor(e=new Q,t=new on){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fi.copy(i.boundingSphere),Fi.applyMatrix4(n),Fi.radius+=r,e.ray.intersectsSphere(Fi)===!1)return;Ts.copy(n).invert(),Nr.copy(e.ray).applyMatrix4(Ts);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);u<p;u++){let d=c.getX(u);Oi.fromBufferAttribute(h,d),ws(Oi,d,o,n,e,t,this)}else for(let u=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);u<p;u++)Oi.fromBufferAttribute(h,u),ws(Oi,u,o,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function ws(l,e,t,i,n,r,s){let a=Nr.distanceSqToPoint(l);if(a<t){let o=new g;Nr.closestPointToPoint(l,o),o.applyMatrix4(i);let c=n.ray.origin.distanceTo(o);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var ei=class extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}};var ln=class extends Ce{constructor(e,t,i,n,r,s,a,o,c,h=1026){if(h!==Er&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Er&&(i=Ns),i===void 0&&h===Cr&&(i=1020),super(null,n,r,s,a,o,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:se,this.minFilter=o!==void 0?o:se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ge=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,s;s=t||e*i[r-1];let a,o=0,c=r-1;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),a=i[n]-s,a<0)o=n+1;else{if(!(a>0)){c=n;break}c=n-1}if(n=c,i[n]===s)return n/(r-1);let h=i[n];return(n+(s-h)/(i[n+1]-h))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new w:new g);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new g,n=[],r=[],s=[],a=new g,o=new G;for(let d=0;d<=e;d++){let m=d/e;n[d]=this.getTangentAt(m,new g)}r[0]=new g,s[0]=new g;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),p=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(V(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(o.makeRotationAxis(a,m))}s[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(V(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(o.makeRotationAxis(n[m],d*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},It=class extends ge{constructor(e=0,t=0,i=1,n=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new w){let i=t,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=s?0:n),this.aClockwise!==!0||s||(r===n?r=-n:r-=n);let a=this.aStartAngle+e*r,o=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=o-this.aX,d=c-this.aY;o=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return i.set(o,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cn=class extends It{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Yr(){let l=0,e=0,t=0,i=0;function n(r,s,a,o){l=r,e=a,t=-3*r+3*s-2*a-o,i=2*r-2*s+a+o}return{initCatmullRom:function(r,s,a,o,c){n(s,a,c*(a-r),c*(o-s))},initNonuniformCatmullRom:function(r,s,a,o,c,h,u){let p=(s-r)/c-(a-r)/(c+h)+(a-s)/h,d=(a-s)/h-(o-s)/(h+u)+(o-a)/u;p*=h,d*=h,n(s,a,p,d)},calc:function(r){let s=r*r;return l+e*r+t*s+i*(s*r)}}}var Bi=new g,_r=new Yr,yr=new Yr,Mr=new Yr,hn=class extends ge{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new g){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,a,o,c=Math.floor(s),h=s-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?a=n[(c-1)%r]:(Bi.subVectors(n[0],n[1]).add(n[0]),a=Bi);let u=n[c%r],p=n[(c+1)%r];if(this.closed||c+2<r?o=n[(c+2)%r]:(Bi.subVectors(n[r-1],n[r-2]).add(n[r-1]),o=Bi),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(a.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(o),d);f<1e-4&&(f=1),m<1e-4&&(m=f),v<1e-4&&(v=f),_r.initNonuniformCatmullRom(a.x,u.x,p.x,o.x,m,f,v),yr.initNonuniformCatmullRom(a.y,u.y,p.y,o.y,m,f,v),Mr.initNonuniformCatmullRom(a.z,u.z,p.z,o.z,m,f,v)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(a.x,u.x,p.x,o.x,this.tension),yr.initCatmullRom(a.y,u.y,p.y,o.y,this.tension),Mr.initCatmullRom(a.z,u.z,p.z,o.z,this.tension));return i.set(_r.calc(h),yr.calc(h),Mr.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new g().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Es(l,e,t,i,n){let r=.5*(i-e),s=.5*(n-t),a=l*l;return(2*t-2*i+r+s)*(l*a)+(-3*t+3*i-2*r-s)*a+r*l+t}function Wt(l,e,t,i){return function(n,r){let s=1-n;return s*s*r}(l,e)+function(n,r){return 2*(1-n)*n*r}(l,t)+function(n,r){return n*n*r}(l,i)}function Xt(l,e,t,i,n){return function(r,s){let a=1-r;return a*a*a*s}(l,e)+function(r,s){let a=1-r;return 3*a*a*r*s}(l,t)+function(r,s){return 3*(1-r)*r*r*s}(l,i)+function(r,s){return r*r*r*s}(l,n)}var ti=class extends ge{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){let i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Xt(e,n.x,r.x,s.x,a.x),Xt(e,n.y,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},un=class extends ge{constructor(e=new g,t=new g,i=new g,n=new g){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new g){let i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Xt(e,n.x,r.x,s.x,a.x),Xt(e,n.y,r.y,s.y,a.y),Xt(e,n.z,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ii=class extends ge{constructor(e=new w,t=new w){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dn=class extends ge{constructor(e=new g,t=new g){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new g){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new g){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ni=class extends ge{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Wt(e,n.x,r.x,s.x),Wt(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ri=class extends ge{constructor(e=new g,t=new g,i=new g){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new g){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Wt(e,n.x,r.x,s.x),Wt(e,n.y,r.y,s.y),Wt(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},si=class extends ge{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new w){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],c=n[s],h=n[s>n.length-2?n.length-1:s+1],u=n[s>n.length-3?n.length-1:s+2];return i.set(Es(a,o.x,c.x,h.x,u.x),Es(a,o.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new w().fromArray(n))}return this}},pn=Object.freeze({__proto__:null,ArcCurve:cn,CatmullRomCurve3:hn,CubicBezierCurve:ti,CubicBezierCurve3:un,EllipseCurve:It,LineCurve:ii,LineCurve3:dn,QuadraticBezierCurve:ni,QuadraticBezierCurve3:ri,SplineCurve:si}),mn=class extends ge{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let s=n[r]-i,a=this.curves[r],o=a.getLength(),c=o===0?0:1-s/o;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],a=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let c=0;c<o.length;c++){let h=o[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new pn[n.type]().fromJSON(n))}return this}},Ut=class extends mn{constructor(e){super(),this.type="Path",this.currentPoint=new w,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ii(this.currentPoint.clone(),new w(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new ni(this.currentPoint.clone(),new w(e,t),new w(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let a=new ti(this.currentPoint.clone(),new w(e,t),new w(i,n),new w(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new si(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){let c=new It(e,t,i,n,r,s,a,o);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class l extends Q{constructor(e=[new w(0,-.5),new w(.5,0),new w(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=V(n,0,2*Math.PI);let r=[],s=[],a=[],o=[],c=[],h=1/t,u=new g,p=new w,d=new g,m=new g,f=new g,v=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=1*x,d.y=-v,d.z=0*x,f.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case e.length-1:o.push(f.x,f.y,f.z);break;default:v=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=1*x,d.y=-v,d.z=0*x,m.copy(d),d.x+=f.x,d.y+=f.y,d.z+=f.z,d.normalize(),o.push(d.x,d.y,d.z),f.copy(m)}for(let _=0;_<=t;_++){let y=i+_*h*n,M=Math.sin(y),b=Math.cos(y);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*b,s.push(u.x,u.y,u.z),p.x=_/t,p.y=S/(e.length-1),a.push(p.x,p.y);let T=o[3*S+0]*M,C=o[3*S+1],O=o[3*S+0]*b;c.push(T,C,O)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let M=y+_*e.length,b=M,S=M+e.length,T=M+e.length+1,C=M+1;r.push(b,S,C),r.push(T,C,S)}this.setIndex(r),this.setAttribute("position",new U(s,3)),this.setAttribute("uv",new U(a,2)),this.setAttribute("normal",new U(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.points,e.segments,e.phiStart,e.phiLength)}},fn=class l extends ai{constructor(e=1,t=1,i=4,n=8){let r=new Ut;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new l(e.radius,e.length,e.capSegments,e.radialSegments)}},gn=class l extends Q{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],a=[],o=[],c=new g,h=new w;s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*n;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[p]/e+1)/2,h.y=(s[p+1]/e+1)/2,o.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new U(s,3)),this.setAttribute("normal",new U(a,3)),this.setAttribute("uv",new U(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.radius,e.segments,e.thetaStart,e.thetaLength)}},oi=class l extends Q{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],p=[],d=[],m=0,f=[],v=i/2,x=0;function _(y){let M=m,b=new w,S=new g,T=0,C=y===!0?e:t,O=y===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,v*O,0),p.push(0,O,0),d.push(.5,.5),m++;let B=m;for(let I=0;I<=n;I++){let k=I/n*o+a,H=Math.cos(k),ie=Math.sin(k);S.x=C*ie,S.y=v*O,S.z=C*H,u.push(S.x,S.y,S.z),p.push(0,O,0),b.x=.5*H+.5,b.y=.5*ie*O+.5,d.push(b.x,b.y),m++}for(let I=0;I<n;I++){let k=M+I,H=B+I;y===!0?h.push(H,H+1,k):h.push(H+1,H,k),T+=3}c.addGroup(x,T,y===!0?1:2),x+=T}(function(){let y=new g,M=new g,b=0,S=(t-e)/i;for(let T=0;T<=r;T++){let C=[],O=T/r,B=O*(t-e)+e;for(let I=0;I<=n;I++){let k=I/n,H=k*o+a,ie=Math.sin(H),J=Math.cos(H);M.x=B*ie,M.y=-O*i+v,M.z=B*J,u.push(M.x,M.y,M.z),y.set(ie,S,J).normalize(),p.push(y.x,y.y,y.z),d.push(k,1-O),C.push(m++)}f.push(C)}for(let T=0;T<n;T++)for(let C=0;C<r;C++){let O=f[C][T],B=f[C+1][T],I=f[C+1][T+1],k=f[C][T+1];(e>0||C!==0)&&(h.push(O,B,k),b+=3),(t>0||C!==r-1)&&(h.push(B,I,k),b+=3)}c.addGroup(x,b,0),x+=b})(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new U(u,3)),this.setAttribute("normal",new U(p,3)),this.setAttribute("uv",new U(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vn=class l extends oi{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,a=2*Math.PI){super(0,e,t,i,n,r,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(e){return new l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nt=class l extends Q{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];function a(p,d,m,f){let v=f+1,x=[];for(let _=0;_<=v;_++){x[_]=[];let y=p.clone().lerp(m,_/v),M=d.clone().lerp(m,_/v),b=v-_;for(let S=0;S<=b;S++)x[_][S]=S===0&&_===v?y:y.clone().lerp(M,S/b)}for(let _=0;_<v;_++)for(let y=0;y<2*(v-_)-1;y++){let M=Math.floor(y/2);y%2==0?(o(x[_][M+1]),o(x[_+1][M]),o(x[_][M])):(o(x[_][M+1]),o(x[_+1][M+1]),o(x[_+1][M]))}}function o(p){r.push(p.x,p.y,p.z)}function c(p,d){let m=3*p;d.x=e[m+0],d.y=e[m+1],d.z=e[m+2]}function h(p,d,m,f){f<0&&p.x===1&&(s[d]=p.x-1),m.x===0&&m.z===0&&(s[d]=f/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}(function(p){let d=new g,m=new g,f=new g;for(let v=0;v<t.length;v+=3)c(t[v+0],d),c(t[v+1],m),c(t[v+2],f),a(d,m,f,p)})(n),function(p){let d=new g;for(let m=0;m<r.length;m+=3)d.x=r[m+0],d.y=r[m+1],d.z=r[m+2],d.normalize().multiplyScalar(p),r[m+0]=d.x,r[m+1]=d.y,r[m+2]=d.z}(i),function(){let p=new g;for(let m=0;m<r.length;m+=3){p.x=r[m+0],p.y=r[m+1],p.z=r[m+2];let f=u(p)/2/Math.PI+.5,v=(d=p,Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))/Math.PI+.5);s.push(f,1-v)}var d;(function(){let m=new g,f=new g,v=new g,x=new g,_=new w,y=new w,M=new w;for(let b=0,S=0;b<r.length;b+=9,S+=6){m.set(r[b+0],r[b+1],r[b+2]),f.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),_.set(s[S+0],s[S+1]),y.set(s[S+2],s[S+3]),M.set(s[S+4],s[S+5]),x.copy(m).add(f).add(v).divideScalar(3);let T=u(x);h(_,S+0,m,T),h(y,S+2,f,T),h(M,S+4,v,T)}})(),function(){for(let m=0;m<s.length;m+=6){let f=s[m+0],v=s[m+2],x=s[m+4],_=Math.max(f,v,x),y=Math.min(f,v,x);_>.9&&y<.1&&(f<.2&&(s[m+0]+=1),v<.2&&(s[m+2]+=1),x<.2&&(s[m+4]+=1))}}()}(),this.setAttribute("position",new U(r,3)),this.setAttribute("normal",new U(r.slice(),3)),this.setAttribute("uv",new U(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.vertices,e.indices,e.radius,e.details)}},xn=class l extends nt{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new l(e.radius,e.detail)}},zi=new g,Vi=new g,br=new g,ki=new Ge,_n=class extends Q{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(za*t),s=e.getIndex(),a=e.getAttribute("position"),o=s?s.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let m=0;m<o;m+=3){s?(c[0]=s.getX(m),c[1]=s.getX(m+1),c[2]=s.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:f,b:v,c:x}=ki;if(f.fromBufferAttribute(a,c[0]),v.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),ki.getNormal(br),u[0]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[2]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let y=(_+1)%3,M=u[_],b=u[y],S=ki[h[_]],T=ki[h[y]],C=`${M}_${b}`,O=`${b}_${M}`;O in p&&p[O]?(br.dot(p[O].normal)<=r&&(d.push(S.x,S.y,S.z),d.push(T.x,T.y,T.z)),p[O]=null):C in p||(p[C]={index0:c[_],index1:c[y],normal:br.clone()})}}for(let m in p)if(p[m]){let{index0:f,index1:v}=p[m];zi.fromBufferAttribute(a,f),Vi.fromBufferAttribute(a,v),d.push(zi.x,zi.y,zi.z),d.push(Vi.x,Vi.y,Vi.z)}this.setAttribute("position",new U(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},li=class extends Ut{constructor(e){super(e),this.uuid=Nt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Ut().fromJSON(n))}return this}},no=function(l,e,t=2){let i=e&&e.length,n=i?e[0]*t:l.length,r=Cs(l,0,n,t,!0),s=[];if(!r||r.next===r.prev)return s;let a,o,c,h,u,p,d;if(i&&(r=function(m,f,v,x){let _=[],y,M,b,S,T;for(y=0,M=f.length;y<M;y++)b=f[y]*x,S=y<M-1?f[y+1]*x:m.length,T=Cs(m,b,S,x,!1),T===T.next&&(T.steiner=!0),_.push(uo(T));for(_.sort(lo),y=0;y<_.length;y++)v=co(_[y],v);return v}(l,e,r,t)),l.length>80*t){a=c=l[0],o=h=l[1];for(let m=t;m<n;m+=t)u=l[m],p=l[m+1],u<a&&(a=u),p<o&&(o=p),u>c&&(c=u),p>h&&(h=p);d=Math.max(c-a,h-o),d=d!==0?32767/d:0}return ci(r,s,t,a,o,d,0),s};function Cs(l,e,t,i,n){let r,s;if(n===function(a,o,c,h){let u=0;for(let p=o,d=c-h;p<c;p+=h)u+=(a[d]-a[p])*(a[p+1]+a[d+1]),d=p;return u}(l,e,t,i)>0)for(r=e;r<t;r+=i)s=As(r,l[r],l[r+1],s);else for(r=t-i;r>=e;r-=i)s=As(r,l[r],l[r+1],s);return s&&Wn(s,s.next)&&(ui(s),s=s.next),s}function ft(l,e){if(!l)return l;e||(e=l);let t,i=l;do if(t=!1,i.steiner||!Wn(i,i.next)&&K(i.prev,i,i.next)!==0)i=i.next;else{if(ui(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ci(l,e,t,i,n,r,s){if(!l)return;!s&&r&&function(h,u,p,d){let m=h;do m.z===0&&(m.z=Fr(m.x,m.y,u,p,d)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,function(f){let v,x,_,y,M,b,S,T,C=1;do{for(x=f,f=null,M=null,b=0;x;){for(b++,_=x,S=0,v=0;v<C&&(S++,_=_.nextZ,_);v++);for(T=C;S>0||T>0&&_;)S!==0&&(T===0||!_||x.z<=_.z)?(y=x,x=x.nextZ,S--):(y=_,_=_.nextZ,T--),M?M.nextZ=y:f=y,y.prevZ=M,M=y;x=_}M.nextZ=null,C*=2}while(b>1)}(m)}(l,i,n,r);let a,o,c=l;for(;l.prev!==l.next;)if(a=l.prev,o=l.next,r?so(l,i,n,r):ro(l))e.push(a.i/t|0),e.push(l.i/t|0),e.push(o.i/t|0),ui(l),l=o.next,c=o.next;else if((l=o)===c){s?s===1?ci(l=ao(ft(l),e,t),e,t,i,n,r,2):s===2&&oo(l,e,t,i,n,r):ci(ft(l),e,t,i,n,r,1);break}}function ro(l){let e=l.prev,t=l,i=l.next;if(K(e,t,i)>=0)return!1;let n=e.x,r=t.x,s=i.x,a=e.y,o=t.y,c=i.y,h=n<r?n<s?n:s:r<s?r:s,u=a<o?a<c?a:c:o<c?o:c,p=n>r?n>s?n:s:r>s?r:s,d=a>o?a>c?a:c:o>c?o:c,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=p&&m.y>=u&&m.y<=d&&Pt(n,a,r,o,s,c,m.x,m.y)&&K(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function so(l,e,t,i){let n=l.prev,r=l,s=l.next;if(K(n,r,s)>=0)return!1;let a=n.x,o=r.x,c=s.x,h=n.y,u=r.y,p=s.y,d=a<o?a<c?a:c:o<c?o:c,m=h<u?h<p?h:p:u<p?u:p,f=a>o?a>c?a:c:o>c?o:c,v=h>u?h>p?h:p:u>p?u:p,x=Fr(d,m,e,t,i),_=Fr(f,v,e,t,i),y=l.prevZ,M=l.nextZ;for(;y&&y.z>=x&&M&&M.z<=_;){if(y.x>=d&&y.x<=f&&y.y>=m&&y.y<=v&&y!==n&&y!==s&&Pt(a,h,o,u,c,p,y.x,y.y)&&K(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=f&&M.y>=m&&M.y<=v&&M!==n&&M!==s&&Pt(a,h,o,u,c,p,M.x,M.y)&&K(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=x;){if(y.x>=d&&y.x<=f&&y.y>=m&&y.y<=v&&y!==n&&y!==s&&Pt(a,h,o,u,c,p,y.x,y.y)&&K(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=f&&M.y>=m&&M.y<=v&&M!==n&&M!==s&&Pt(a,h,o,u,c,p,M.x,M.y)&&K(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ao(l,e,t){let i=l;do{let n=i.prev,r=i.next.next;!Wn(n,r)&&zs(n,i,i.next,r)&&hi(n,r)&&hi(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),ui(i),ui(i.next),i=l=r),i=i.next}while(i!==l);return ft(i)}function oo(l,e,t,i,n,r){let s=l;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&po(s,a)){let o=Vs(s,a);return s=ft(s,s.next),o=ft(o,o.next),ci(s,e,t,i,n,r,0),void ci(o,e,t,i,n,r,0)}a=a.next}s=s.next}while(s!==l)}function lo(l,e){return l.x-e.x}function co(l,e){let t=function(n,r){let s,a=r,o=-1/0,c=n.x,h=n.y;do{if(h<=a.y&&h>=a.next.y&&a.next.y!==a.y){let v=a.x+(h-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=c&&v>o&&(o=v,s=a.x<a.next.x?a:a.next,v===c))return s}a=a.next}while(a!==r);if(!s)return null;let u=s,p=s.x,d=s.y,m,f=1/0;a=s;do c>=a.x&&a.x>=p&&c!==a.x&&Pt(h<d?c:o,h,p,d,h<d?o:c,h,a.x,a.y)&&(m=Math.abs(h-a.y)/(c-a.x),hi(a,n)&&(m<f||m===f&&(a.x>s.x||a.x===s.x&&ho(s,a)))&&(s=a,f=m)),a=a.next;while(a!==u);return s}(l,e);if(!t)return e;let i=Vs(t,l);return ft(i,i.next),ft(t,t.next)}function ho(l,e){return K(l.prev,l,e.prev)<0&&K(e.next,l,l.next)<0}function Fr(l,e,t,i,n){return(l=1431655765&((l=858993459&((l=252645135&((l=16711935&((l=(l-t)*n|0)|l<<8))|l<<4))|l<<2))|l<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function uo(l){let e=l,t=l;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==l);return t}function Pt(l,e,t,i,n,r,s,a){return(n-s)*(e-a)>=(l-s)*(r-a)&&(l-s)*(i-a)>=(t-s)*(e-a)&&(t-s)*(r-a)>=(n-s)*(i-a)}function po(l,e){return l.next.i!==e.i&&l.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&zs(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(l,e)&&(hi(l,e)&&hi(e,l)&&function(t,i){let n=t,r=!1,s=(t.x+i.x)/2,a=(t.y+i.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}(l,e)&&(K(l.prev,l,e.prev)||K(l,e.prev,e))||Wn(l,e)&&K(l.prev,l,l.next)>0&&K(e.prev,e,e.next)>0)}function K(l,e,t){return(e.y-l.y)*(t.x-e.x)-(e.x-l.x)*(t.y-e.y)}function Wn(l,e){return l.x===e.x&&l.y===e.y}function zs(l,e,t,i){let n=Hi(K(l,e,t)),r=Hi(K(l,e,i)),s=Hi(K(t,i,l)),a=Hi(K(t,i,e));return n!==r&&s!==a||!(n!==0||!Gi(l,t,e))||!(r!==0||!Gi(l,i,e))||!(s!==0||!Gi(t,l,i))||!(a!==0||!Gi(t,e,i))}function Gi(l,e,t){return e.x<=Math.max(l.x,t.x)&&e.x>=Math.min(l.x,t.x)&&e.y<=Math.max(l.y,t.y)&&e.y>=Math.min(l.y,t.y)}function Hi(l){return l>0?1:l<0?-1:0}function hi(l,e){return K(l.prev,l,l.next)<0?K(l,e,l.next)>=0&&K(l,l.prev,e)>=0:K(l,e,l.prev)<0||K(l,l.next,e)<0}function Vs(l,e){let t=new Or(l.i,l.x,l.y),i=new Or(e.i,e.x,e.y),n=l.next,r=e.prev;return l.next=e,e.prev=l,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function As(l,e,t,i){let n=new Or(l,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ui(l){l.next.prev=l.prev,l.prev.next=l.next,l.prevZ&&(l.prevZ.nextZ=l.nextZ),l.nextZ&&(l.nextZ.prevZ=l.prevZ)}function Or(l,e,t){this.i=l,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Xe=class l{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return l.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Rs(e),Ps(i,e);let s=e.length;t.forEach(Rs);for(let o=0;o<t.length;o++)n.push(s),s+=t[o].length,Ps(i,t[o]);let a=no(i,n);for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3));return r}};function Rs(l){let e=l.length;e>2&&l[e-1].equals(l[0])&&l.pop()}function Ps(l,e){for(let t=0;t<e.length;t++)l.push(e[t].x),l.push(e[t].y)}var yn=class l extends Q{constructor(e=new li([new w(.5,.5),new w(-.5,.5),new w(-.5,-.5),new w(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let a=0,o=e.length;a<o;a++)s(e[a]);function s(a){let o=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:mo,y,M,b,S,T,C=!1;x&&(y=x.getSpacedPoints(h),C=!0,p=!1,M=x.computeFrenetFrames(h,!1),b=new g,S=new g,T=new g),p||(v=0,d=0,m=0,f=0);let O=a.extractPoints(c),B=O.shape,I=O.holes;if(!Xe.isClockWise(B)){B=B.reverse();for(let R=0,P=I.length;R<P;R++){let D=I[R];Xe.isClockWise(D)&&(I[R]=D.reverse())}}let k=Xe.triangulateShape(B,I),H=B;for(let R=0,P=I.length;R<P;R++){let D=I[R];B=B.concat(D)}function ie(R,P,D){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(P,D)}let J=B.length,be=k.length;function Le(R,P,D){let F,L,j,q=R.x-P.x,$=R.y-P.y,ce=D.x-R.x,he=D.y-R.y,Kn=q*q+$*$,Oa=q*he-$*ce;if(Math.abs(Oa)>Number.EPSILON){let at=Math.sqrt(Kn),ss=Math.sqrt(ce*ce+he*he),as=P.x-$/at,os=P.y+q/at,ls=((D.x-he/ss-as)*he-(D.y+ce/ss-os)*ce)/(q*he-$*ce);F=as+q*ls-R.x,L=os+$*ls-R.y;let cs=F*F+L*L;if(cs<=2)return new w(F,L);j=Math.sqrt(cs/2)}else{let at=!1;q>Number.EPSILON?ce>Number.EPSILON&&(at=!0):q<-Number.EPSILON?ce<-Number.EPSILON&&(at=!0):Math.sign($)===Math.sign(he)&&(at=!0),at?(F=-$,L=q,j=Math.sqrt(Kn)):(F=q,L=$,j=Math.sqrt(Kn/2))}return new w(F/j,L/j)}let pe=[];for(let R=0,P=H.length,D=P-1,F=R+1;R<P;R++,D++,F++)D===P&&(D=0),F===P&&(F=0),pe[R]=Le(H[R],H[D],H[F]);let ee=[],Y,ne=pe.concat();for(let R=0,P=I.length;R<P;R++){let D=I[R];Y=[];for(let F=0,L=D.length,j=L-1,q=F+1;F<L;F++,j++,q++)j===L&&(j=0),q===L&&(q=0),Y[F]=Le(D[F],D[j],D[q]);ee.push(Y),ne=ne.concat(Y)}for(let R=0;R<v;R++){let P=R/v,D=d*Math.cos(P*Math.PI/2),F=m*Math.sin(P*Math.PI/2)+f;for(let L=0,j=H.length;L<j;L++){let q=ie(H[L],pe[L],F);Se(q.x,q.y,-D)}for(let L=0,j=I.length;L<j;L++){let q=I[L];Y=ee[L];for(let $=0,ce=q.length;$<ce;$++){let he=ie(q[$],Y[$],F);Se(he.x,he.y,-D)}}}let Ie=m+f;for(let R=0;R<J;R++){let P=p?ie(B[R],ne[R],Ie):B[R];C?(S.copy(M.normals[0]).multiplyScalar(P.x),b.copy(M.binormals[0]).multiplyScalar(P.y),T.copy(y[0]).add(S).add(b),Se(T.x,T.y,T.z)):Se(P.x,P.y,0)}for(let R=1;R<=h;R++)for(let P=0;P<J;P++){let D=p?ie(B[P],ne[P],Ie):B[P];C?(S.copy(M.normals[R]).multiplyScalar(D.x),b.copy(M.binormals[R]).multiplyScalar(D.y),T.copy(y[R]).add(S).add(b),Se(T.x,T.y,T.z)):Se(D.x,D.y,u/h*R)}for(let R=v-1;R>=0;R--){let P=R/v,D=d*Math.cos(P*Math.PI/2),F=m*Math.sin(P*Math.PI/2)+f;for(let L=0,j=H.length;L<j;L++){let q=ie(H[L],pe[L],F);Se(q.x,q.y,u+D)}for(let L=0,j=I.length;L<j;L++){let q=I[L];Y=ee[L];for(let $=0,ce=q.length;$<ce;$++){let he=ie(q[$],Y[$],F);C?Se(he.x,he.y+y[h-1].y,y[h-1].x+D):Se(he.x,he.y,u+D)}}}function rt(R,P){let D=R.length;for(;--D>=0;){let F=D,L=D-1;L<0&&(L=R.length-1);for(let j=0,q=h+2*v;j<q;j++){let $=J*j,ce=J*(j+1);Fa(P+F+$,P+L+$,P+L+ce,P+F+ce)}}}function Se(R,P,D){o.push(R),o.push(P),o.push(D)}function st(R,P,D){Ue(R),Ue(P),Ue(D);let F=n.length/3,L=_.generateTopUV(i,n,F-3,F-2,F-1);Ne(L[0]),Ne(L[1]),Ne(L[2])}function Fa(R,P,D,F){Ue(R),Ue(P),Ue(F),Ue(P),Ue(D),Ue(F);let L=n.length/3,j=_.generateSideWallUV(i,n,L-6,L-3,L-2,L-1);Ne(j[0]),Ne(j[1]),Ne(j[3]),Ne(j[1]),Ne(j[2]),Ne(j[3])}function Ue(R){n.push(o[3*R+0]),n.push(o[3*R+1]),n.push(o[3*R+2])}function Ne(R){r.push(R.x),r.push(R.y)}(function(){let R=n.length/3;if(p){let P=0,D=J*P;for(let F=0;F<be;F++){let L=k[F];st(L[2]+D,L[1]+D,L[0]+D)}P=h+2*v,D=J*P;for(let F=0;F<be;F++){let L=k[F];st(L[0]+D,L[1]+D,L[2]+D)}}else{for(let P=0;P<be;P++){let D=k[P];st(D[2],D[1],D[0])}for(let P=0;P<be;P++){let D=k[P];st(D[0]+J*h,D[1]+J*h,D[2]+J*h)}}i.addGroup(R,n.length/3-R,0)})(),function(){let R=n.length/3,P=0;rt(H,P),P+=H.length;for(let D=0,F=I.length;D<F;D++){let L=I[D];rt(L,P),P+=L.length}i.addGroup(R,n.length/3-R,1)}()}this.setAttribute("position",new U(n,3)),this.setAttribute("uv",new U(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new pn[n.type]().fromJSON(n)),new l(i,e.options)}},mo={generateTopUV:function(l,e,t,i,n){let r=e[3*t],s=e[3*t+1],a=e[3*i],o=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new w(r,s),new w(a,o),new w(c,h)]},generateSideWallUV:function(l,e,t,i,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],p=e[3*n],d=e[3*n+1],m=e[3*n+2],f=e[3*r],v=e[3*r+1],x=e[3*r+2];return Math.abs(a-h)<Math.abs(s-c)?[new w(s,1-o),new w(c,1-u),new w(p,1-m),new w(f,1-x)]:[new w(a,1-o),new w(h,1-u),new w(d,1-m),new w(v,1-x)]}},Mn=class l extends nt{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new l(e.radius,e.detail)}},bn=class l extends nt{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new l(e.radius,e.detail)}},Sn=class l extends Q{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,a=Math.floor(i),o=Math.floor(n),c=a+1,h=o+1,u=e/a,p=t/o,d=[],m=[],f=[],v=[];for(let x=0;x<h;x++){let _=x*p-s;for(let y=0;y<c;y++){let M=y*u-r;m.push(M,-_,0),f.push(0,0,1),v.push(y/a),v.push(1-x/o)}}for(let x=0;x<o;x++)for(let _=0;_<a;_++){let y=_+c*x,M=_+c*(x+1),b=_+1+c*(x+1),S=_+1+c*x;d.push(y,M,S),d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new U(m,3)),this.setAttribute("normal",new U(f,3)),this.setAttribute("uv",new U(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.width,e.height,e.widthSegments,e.heightSegments)}},Tn=class l extends Q{constructor(e=.5,t=1,i=32,n=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i);let a=[],o=[],c=[],h=[],u=e,p=(t-e)/(n=Math.max(1,n)),d=new g,m=new w;for(let f=0;f<=n;f++){for(let v=0;v<=i;v++){let x=r+v/i*s;d.x=u*Math.cos(x),d.y=u*Math.sin(x),o.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=p}for(let f=0;f<n;f++){let v=f*(i+1);for(let x=0;x<i;x++){let _=x+v,y=_,M=_+i+1,b=_+i+2,S=_+1;a.push(y,M,S),a.push(M,b,S)}}this.setIndex(a),this.setAttribute("position",new U(o,3)),this.setAttribute("normal",new U(c,3)),this.setAttribute("uv",new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},wn=class l extends Q{constructor(e=new li([new w(0,.5),new w(-.5,-.5),new w(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],a=0,o=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,o,h),a+=o,o=0;function c(h){let u=n.length/3,p=h.extractPoints(t),d=p.shape,m=p.holes;Xe.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,x=m.length;v<x;v++){let _=m[v];Xe.isClockWise(_)===!0&&(m[v]=_.reverse())}let f=Xe.triangulateShape(d,m);for(let v=0,x=m.length;v<x;v++){let _=m[v];d=d.concat(_)}for(let v=0,x=d.length;v<x;v++){let _=d[v];n.push(_.x,_.y,0),r.push(0,0,1),s.push(_.x,_.y)}for(let v=0,x=f.length;v<x;v++){let _=f[v],y=_[0]+u,M=_[1]+u,b=_[2]+u;i.push(y,M,b),o+=3}}this.setIndex(i),this.setAttribute("position",new U(n,3)),this.setAttribute("normal",new U(r,3)),this.setAttribute("uv",new U(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let s=t[n];i.shapes.push(s.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new l(i,e.curveSegments)}},En=class l extends Q{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let o=Math.min(s+a,Math.PI),c=0,h=[],u=new g,p=new g,d=[],m=[],f=[],v=[];for(let x=0;x<=i;x++){let _=[],y=x/i,M=0;x===0&&s===0?M=.5/t:x===i&&o===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(n+S*r)*Math.sin(s+y*a),u.y=e*Math.cos(s+y*a),u.z=e*Math.sin(n+S*r)*Math.sin(s+y*a),m.push(u.x,u.y,u.z),p.copy(u).normalize(),f.push(p.x,p.y,p.z),v.push(S+M,1-y),_.push(c++)}h.push(_)}for(let x=0;x<i;x++)for(let _=0;_<t;_++){let y=h[x][_+1],M=h[x][_],b=h[x+1][_],S=h[x+1][_+1];(x!==0||s>0)&&d.push(y,M,S),(x!==i-1||o<Math.PI)&&d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new U(m,3)),this.setAttribute("normal",new U(f,3)),this.setAttribute("uv",new U(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Cn=class l extends nt{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new l(e.radius,e.detail)}},An=class l extends Q{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let s=[],a=[],o=[],c=[],h=new g,u=new g,p=new g;for(let d=0;d<=i;d++)for(let m=0;m<=n;m++){let f=m/n*r,v=d/i*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(f),u.y=(e+t*Math.cos(v))*Math.sin(f),u.z=t*Math.sin(v),a.push(u.x,u.y,u.z),h.x=e*Math.cos(f),h.y=e*Math.sin(f),p.subVectors(u,h).normalize(),o.push(p.x,p.y,p.z),c.push(m/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=n;m++){let f=(n+1)*d+m-1,v=(n+1)*(d-1)+m-1,x=(n+1)*(d-1)+m,_=(n+1)*d+m;s.push(f,v,_),s.push(v,x,_)}this.setIndex(s),this.setAttribute("position",new U(a,3)),this.setAttribute("normal",new U(o,3)),this.setAttribute("uv",new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Rn=class l extends Q{constructor(e=1,t=.4,i=64,n=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],h=[],u=new g,p=new g,d=new g,m=new g,f=new g,v=new g,x=new g;for(let y=0;y<=i;++y){let M=y/i*r*Math.PI*2;_(M,r,s,e,d),_(M+.01,r,s,e,m),v.subVectors(m,d),x.addVectors(m,d),f.crossVectors(v,x),x.crossVectors(f,v),f.normalize(),x.normalize();for(let b=0;b<=n;++b){let S=b/n*Math.PI*2,T=-t*Math.cos(S),C=t*Math.sin(S);u.x=d.x+(T*x.x+C*f.x),u.y=d.y+(T*x.y+C*f.y),u.z=d.z+(T*x.z+C*f.z),o.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(y/i),h.push(b/n)}}for(let y=1;y<=i;y++)for(let M=1;M<=n;M++){let b=(n+1)*(y-1)+(M-1),S=(n+1)*y+(M-1),T=(n+1)*y+M,C=(n+1)*(y-1)+M;a.push(b,S,C),a.push(S,T,C)}function _(y,M,b,S,T){let C=Math.cos(y),O=Math.sin(y),B=b/M*y,I=Math.cos(B);T.x=S*(2+I)*.5*C,T.y=S*(2+I)*O*.5,T.z=S*Math.sin(B)*.5}this.setIndex(a),this.setAttribute("position",new U(o,3)),this.setAttribute("normal",new U(c,3)),this.setAttribute("uv",new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Pn=class l extends Q{constructor(e=new ri(new g(-1,-1,0),new g(-1,1,0),new g(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new g,o=new g,c=new w,h=new g,u=[],p=[],d=[],m=[];function f(v){h=e.getPointAt(v/t,h);let x=s.normals[v],_=s.binormals[v];for(let y=0;y<=n;y++){let M=y/n*Math.PI*2,b=Math.sin(M),S=-Math.cos(M);o.x=S*x.x+b*_.x,o.y=S*x.y+b*_.y,o.z=S*x.z+b*_.z,o.normalize(),p.push(o.x,o.y,o.z),a.x=h.x+i*o.x,a.y=h.y+i*o.y,a.z=h.z+i*o.z,u.push(a.x,a.y,a.z)}}(function(){for(let v=0;v<t;v++)f(v);f(r===!1?t:0),function(){for(let v=0;v<=t;v++)for(let x=0;x<=n;x++)c.x=v/t,c.y=x/n,d.push(c.x,c.y)}(),function(){for(let v=1;v<=t;v++)for(let x=1;x<=n;x++){let _=(n+1)*(v-1)+(x-1),y=(n+1)*v+(x-1),M=(n+1)*v+x,b=(n+1)*(v-1)+x;m.push(_,y,b),m.push(y,M,b)}}()})(),this.setIndex(m),this.setAttribute("position",new U(u,3)),this.setAttribute("normal",new U(p,3)),this.setAttribute("uv",new U(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new l(new pn[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Dn=class extends Q{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new g,r=new g;if(e.index!==null){let s=e.attributes.position,a=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=o.length;c<h;++c){let u=o[c],p=u.start;for(let d=p,m=p+u.count;d<m;d+=3)for(let f=0;f<3;f++){let v=a.getX(d+f),x=a.getX(d+(f+1)%3);n.fromBufferAttribute(s,v),r.fromBufferAttribute(s,x),Ds(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let s=e.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;n.fromBufferAttribute(s,h),r.fromBufferAttribute(s,u),Ds(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new U(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ds(l,e,t){let i=`${l.x},${l.y},${l.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${l.x},${l.y},${l.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Sl=Object.freeze({__proto__:null,BoxGeometry:rn,CapsuleGeometry:fn,CircleGeometry:gn,ConeGeometry:vn,CylinderGeometry:oi,DodecahedronGeometry:xn,EdgesGeometry:_n,ExtrudeGeometry:yn,IcosahedronGeometry:Mn,LatheGeometry:ai,OctahedronGeometry:bn,PlaneGeometry:Sn,PolyhedronGeometry:nt,RingGeometry:Tn,ShapeGeometry:wn,SphereGeometry:En,TetrahedronGeometry:Cn,TorusGeometry:An,TorusKnotGeometry:Rn,TubeGeometry:Pn,WireframeGeometry:Dn});function Wi(l,e,t){return!l||!t&&l.constructor===e?l:typeof e.BYTES_PER_ELEMENT=="number"?new e(l):Array.prototype.slice.call(l)}function fo(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}var gt=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];t:{e:{let s;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break i}if(e>=r)break t;{let a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0}}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ln=class extends gt{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ar,endingEnd:Ar}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case Rr:r=e,a=2*t-i;break;case Pr:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Rr:s=e,o=2*i-t;break;case Pr:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(o-i),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,m=(i-t)/(n-t),f=m*m,v=f*m,x=-p*v+2*p*f-p*m,_=(1+p)*v+(-1.5-2*p)*f+(-.5+p)*m+1,y=(-1-d)*v+(1.5+d)*f+.5*m,M=d*v-d*f;for(let b=0;b!==a;++b)r[b]=x*s[h+b]+_*s[c+b]+y*s[o+b]+M*s[u+b];return r}},In=class extends gt{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,h=(i-t)/(n-t),u=1-h;for(let p=0;p!==a;++p)r[p]=s[c+p]*u+s[o+p]*h;return r}},Un=class extends gt{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Me=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Un(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new In(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ln(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qt:t=this.InterpolantFactoryMethodDiscrete;break;case qi:t=this.InterpolantFactoryMethodLinear;break;case Xi:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qt;case this.InterpolantFactoryMethodLinear:return qi;case this.InterpolantFactoryMethodSmooth:return Xi}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){let o=i[a];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&fo(n))for(let a=0,o=n.length;a!==o;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Xi,r=e.length-1,s=1;for(let a=1;a<r;++a){let o=!1,c=e[a];if(c!==e[a+1]&&(a!==1||c!==e[0]))if(n)o=!0;else{let h=a*i,u=h-i,p=h+i;for(let d=0;d!==i;++d){let m=t[h+d];if(m!==t[u+d]||m!==t[p+d]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];let h=a*i,u=s*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,c=0;c!==i;++c)t[o+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Me.prototype.TimeBufferType=Float32Array,Me.prototype.ValueBufferType=Float32Array,Me.prototype.DefaultInterpolation=qi;var $e=class extends Me{constructor(e,t,i){super(e,t,i)}};$e.prototype.ValueTypeName="bool",$e.prototype.ValueBufferType=Array,$e.prototype.DefaultInterpolation=qt,$e.prototype.InterpolantFactoryMethodLinear=void 0,$e.prototype.InterpolantFactoryMethodSmooth=void 0;var Nn=class extends Me{};Nn.prototype.ValueTypeName="color";var Fn=class extends Me{};Fn.prototype.ValueTypeName="number";var On=class extends gt{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ae.slerpFlat(r,0,s,c-a,s,c,o);return r}},di=class extends Me{InterpolantFactoryMethodLinear(e){return new On(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion",di.prototype.InterpolantFactoryMethodSmooth=void 0;var Qe=class extends Me{constructor(e,t,i){super(e,t,i)}};Qe.prototype.ValueTypeName="string",Qe.prototype.ValueBufferType=Array,Qe.prototype.DefaultInterpolation=qt,Qe.prototype.InterpolantFactoryMethodLinear=void 0,Qe.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends Me{};Bn.prototype.ValueTypeName="vector";var zn=class{constructor(e,t,i){let n=this,r,s=!1,a=0,o=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},ks=new zn,Vn=class{constructor(e){this.manager=e!==void 0?e:ks,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn=class extends de{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new W(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Tl=new G,wl=new g,El=new g;var Cl=new G,Al=new g,Rl=new g;var Gn=class extends $t{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var pi=class extends kn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pl=new G,Dl=new G,Ll=new G;var Il=new g,Ul=new Ae,Nl=new g,Fl=new g;var Ol=new g,Bl=new Ae,zl=new g,Vl=new g;var Zr="\\[\\]\\.:\\/",go=new RegExp("["+Zr+"]","g"),Sr="[^"+Zr+"]",vo="[^"+Zr.replace("\\.","")+"]",xo=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Sr)+/(WCOD+)?/.source.replace("WCOD",vo)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sr)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sr)+"$"),_o=["material","materials","bones","map"],Z=class l{constructor(e,t,i){this.path=t,this.parsedPath=i||l.parseTrackName(t),this.node=l.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new l.Composite(e,t,i):new l(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(go,"")}static parseTrackName(e){let t=xo.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);_o.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===t||a.uuid===t)return a;let o=i(a.children);if(o)return o}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=l.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let s=e[n];if(s===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Z.Composite=class{constructor(l,e,t){let i=t||Z.parseTrackName(e);this._targetGroup=l,this._bindings=l.subscribe_(e,i)}getValue(l,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(l,e)}setValue(l,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(l,e)}bind(){let l=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=l.length;e!==t;++e)l[e].bind()}unbind(){let l=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=l.length;e!==t;++e)l[e].unbind()}},Z.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Z.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Z.prototype.GetterByBindingType=[Z.prototype._getValue_direct,Z.prototype._getValue_array,Z.prototype._getValue_arrayElement,Z.prototype._getValue_toArray],Z.prototype.SetterByBindingTypeAndVersioning=[[Z.prototype._setValue_direct,Z.prototype._setValue_direct_setNeedsUpdate,Z.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Z.prototype._setValue_array,Z.prototype._setValue_array_setNeedsUpdate,Z.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Z.prototype._setValue_arrayElement,Z.prototype._setValue_arrayElement_setNeedsUpdate,Z.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Z.prototype._setValue_fromArray,Z.prototype._setValue_fromArray_setNeedsUpdate,Z.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kl=new Float32Array(1);var Gl=new G;var Hl=new w;var Wl=new g,Xl=new g;var jl=new g;var ql=new g,Yl=new G,Zl=new G;var Jl=new g,Kl=new W,$l=new W;var Ql=new g,ec=new g,tc=new g;var ic=new g,nc=new $t;var rc=new Re;var sc=new g;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);var N={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},E={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new w(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new w(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Gs={basic:{uniforms:le([E.common,E.specularmap,E.envmap,E.aomap,E.lightmap,E.fog]),vertexShader:N.meshbasic_vert,fragmentShader:N.meshbasic_frag},lambert:{uniforms:le([E.common,E.specularmap,E.envmap,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,E.displacementmap,E.fog,E.lights,{emissive:{value:new W(0)}}]),vertexShader:N.meshlambert_vert,fragmentShader:N.meshlambert_frag},phong:{uniforms:le([E.common,E.specularmap,E.envmap,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,E.displacementmap,E.fog,E.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:N.meshphong_vert,fragmentShader:N.meshphong_frag},standard:{uniforms:le([E.common,E.envmap,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,E.displacementmap,E.roughnessmap,E.metalnessmap,E.fog,E.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag},toon:{uniforms:le([E.common,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,E.displacementmap,E.gradientmap,E.fog,E.lights,{emissive:{value:new W(0)}}]),vertexShader:N.meshtoon_vert,fragmentShader:N.meshtoon_frag},matcap:{uniforms:le([E.common,E.bumpmap,E.normalmap,E.displacementmap,E.fog,{matcap:{value:null}}]),vertexShader:N.meshmatcap_vert,fragmentShader:N.meshmatcap_frag},points:{uniforms:le([E.points,E.fog]),vertexShader:N.points_vert,fragmentShader:N.points_frag},dashed:{uniforms:le([E.common,E.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N.linedashed_vert,fragmentShader:N.linedashed_frag},depth:{uniforms:le([E.common,E.displacementmap]),vertexShader:N.depth_vert,fragmentShader:N.depth_frag},normal:{uniforms:le([E.common,E.bumpmap,E.normalmap,E.displacementmap,{opacity:{value:1}}]),vertexShader:N.meshnormal_vert,fragmentShader:N.meshnormal_frag},sprite:{uniforms:le([E.sprite,E.fog]),vertexShader:N.sprite_vert,fragmentShader:N.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:N.background_vert,fragmentShader:N.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:N.backgroundCube_vert,fragmentShader:N.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:N.cube_vert,fragmentShader:N.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N.equirect_vert,fragmentShader:N.equirect_frag},distanceRGBA:{uniforms:le([E.common,E.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:N.distanceRGBA_vert,fragmentShader:N.distanceRGBA_frag},shadow:{uniforms:le([E.lights,E.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:N.shadow_vert,fragmentShader:N.shadow_frag}};Gs.physical={uniforms:le([Gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new w(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new w},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new w},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag};var Mm=new it,bm=new G;var Sm=new Gn,Tm=new W;var xt=(1+Math.sqrt(5))/2,Ft=1/xt,wm=[new g(-xt,Ft,0),new g(xt,Ft,0),new g(-Ft,0,xt),new g(Ft,0,xt),new g(0,xt,-Ft),new g(0,xt,Ft),new g(-1,1,-1),new g(1,1,-1),new g(-1,1,1),new g(1,1,1)];var Em=new Ce,Cm=new ln(1,1),Am=new Ki,Rm=new $i,Pm=new sn;var Dm=new Float32Array(16),Lm=new Float32Array(9),Im=new Float32Array(4);var Um=new z;var Nm=new g;var Fm={[Br]:zr,[Vr]:Wr,[Gr]:Xr,[kr]:Hr,[zr]:Br,[Wr]:Vr,[Xr]:Gr,[Hr]:kr};var Om=new it,Bm=new G;var Jr={OFF:0,VAPOR:1};var X={FLOOR:0,WALL:1,WALL_TOP:2,CEILING:3,PORTAL_WARP:4,ROOM_WARP:5,ITEM:6,SCRIPTED:7,HOVERABLE:8,CLICKABLE:9};var Kr={};_t(Kr,{camPosVert:()=>Xs,defaultShiftVert:()=>Ws,defaultVert:()=>Hs,discardFrag:()=>js,shaderHeader:()=>A});function A(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}function Hs(){let l=A();return l+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,l}function Ws(){let l=A();return l+=`
  varying vec2 vUv;
  varying vec2 vUvShift;
  void main(){
    vUv=uv;
        vUvShift=uv-.5;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,l}function Xs(){let l=A();return l+=`
  varying vec3 camPos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    camPos=(modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
  }`,l}function js(){let l=A();return l+=`
  void main(){
    discard;
    gl_FragColor=vec4(.0,.0,.0,0.0);
  }`,l}var $r={};_t($r,{animTextureFrag:()=>Ys,animTextureVert:()=>qs,clickableBevelFrag:()=>Js,clickableBevelVert:()=>Zs,portalBaseFrag:()=>$s,portalBaseVert:()=>Ks});function qs(){let l=A();return l+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,l}function Ys(){let l=A();return l+=`
  uniform vec2 time;
  uniform float rate;
  uniform float freq;
  uniform float intensity;
  uniform vec3 glowColor;
  uniform sampler2D glowTexture;
  varying vec2 vUv;
  float pi=3.14159265358979;
  
  void main(){
    vec4 glowCd=texture2D(glowTexture, vUv);
    vec4 Cd=vec4(glowColor,1.0);
    Cd.rgb*=(cos(glowCd.g*pi*freq+time.x*rate)*.5+.5)*(1.0-glowCd.b)*intensity+glowCd.b;
    Cd.rgb*=glowCd.r*glowCd.a;
    gl_FragColor=Cd;
  }`,l}function Zs(){let l=A();return l+=`
    uniform vec2 time;
    uniform float rate;
    varying vec3 pos;
    varying float nDot;
    varying vec2 vUv;
    
    void main(){
      vUv=uv+vec2(rate*time.x, 0.0);
      vec3 camDir=normalize( (projectionMatrix*viewMatrix*vec4(0.0,0.0,-1.0,1.0)).xyz );
      nDot=dot( normal, camDir );
      
      pos=position;
      vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix*modelViewPosition;
      
    }`,l}function Js(){let l=A();return l+=`
    uniform sampler2D alphaMap;
    uniform sampler2D cloudNoise;
    uniform vec2 time;
    uniform vec2 intensity;
    uniform float rate;
    varying vec3 pos;
    varying float nDot;
    varying vec2 vUv;
    
    void main() {
      vec4 Cd=vec4( 1.0 );
      Cd.rgb= mix( vec3(.05,.1,.5), vec3(.3,.5,1.0), intensity.x);
      
      vec2 nUV=pos.xy*.01+vec2(time.x*rate*.1, time.x*rate*.1);
      vec4 noiseCd=texture2D(cloudNoise,nUV);
      noiseCd.xyz=noiseCd.xyz*2.0-1.0;
      nUV=vUv+noiseCd.xy*.05;
      
      float alpha=texture2D(alphaMap,nUV).r;
      float blender=(nDot*.5+.5);
      Cd.rgb=Cd.rgb*(1.0+alpha);//mix( vec3(0.5,0.5,1.0), vec3(0.0,0.2,0.8), blender); // Center Color, Edge Color
      alpha=1.0-(1.0-alpha)*(1.0-alpha);
      alpha*=alpha;
      Cd.a=alpha+alpha;
      gl_FragColor = Cd;
    }`,l}function Ks(){let l=A();return l+=`
        uniform vec2 time;
        uniform float rate;
        varying vec2 shiftUv;
        varying vec2 wUv;
        
        void main(){
            shiftUv=(uv-.5);
            
            float t=time.x*rate;
            vec2 rot=vec2( sin(t), cos(t) );
            vec2 rotUV=vec2(0.0);
            rotUV.x=rot.y*(uv.x-.5) + rot.x*(uv.y-.5);
            rotUV.y=rot.y*(uv.y-.5) - rot.x*(uv.x-.5);
            wUv=rotUV+.5;
            
            vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix*modelViewPosition;
            
        }`,l}function $s(){let l=A();return l+=`
        uniform vec3 color;
        uniform sampler2D alphaMap;
        uniform sampler2D cloudNoise;
        uniform vec2 intensity;
        varying vec2 shiftUv;
        varying vec2 wUv;
        
        #define TAU 6.28318530717958
        void main() {
            float suvLength=length(shiftUv)+.1;
            vec2 suvSign=sign(shiftUv);
            
            vec2 rUv=sin( (suvLength+wUv*10.*shiftUv)*.5 );
            rUv *= suvLength ;
            
            vec4 noiseCd=texture2D(cloudNoise,rUv);
            vec2 aUv=wUv*(noiseCd.xy*.5+wUv);
            
            float alpha=texture2D(alphaMap,aUv).r;
            
            vec4 Cd=vec4( color*intensity.x*(1.0+alpha)*mix( noiseCd.rgb, vec3(1.0), alpha), 1.);
            alpha*=max(0.0, alpha-noiseCd.r*noiseCd.g*noiseCd.b );
            Cd.a=min(1.0, alpha);
            
            gl_FragColor = Cd;
        }`,l}var Qr={};_t(Qr,{itemBaseFrag:()=>ea,itemBaseVert:()=>Qs,itemFrag:()=>ia,itemVert:()=>ta,itemZoomFrag:()=>na,pxlPrincipledFrag:()=>jn,pxlPrincipledVert:()=>Xn});function Qs(){let l=A();return l+=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    varying vec3 pos;
    varying float nDot;
    varying vec2 vUv;
    
    void main(){
      vUv=uv+vec2(rate*time.x, 0.0);
      vec3 camDir=normalize( (projectionMatrix*viewMatrix*vec4(0.0,0.0,-1.0,1.0)).xyz );
      nDot=dot( normal, camDir );
      
      pos=position;
      vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix*modelViewPosition;
      
    }`,l}function ea(){let l=A();return l+=`
    uniform vec3 color;
    uniform sampler2D alphaMap;
    uniform sampler2D cloudNoise;
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    varying vec3 pos;
    varying float nDot;
    varying vec2 vUv;
    
    void main() {
      vec4 Cd=vec4( color, 1.0);
      
      
      vec2 nUV=pos.xy*.01+vec2(time.x*rate*.1, time.x*rate*.1);
      vec4 noiseCd=texture2D(cloudNoise,nUV);
      noiseCd.xyz=noiseCd.xyz*2.0-1.0;
      nUV=vUv+noiseCd.xy*.05;
      
      float alpha=texture2D(alphaMap,nUV).r;
      float blender=(nDot*.5+.5);
      Cd.rgb=color*intensity*(1.0+alpha);//mix( vec3(0.5,0.5,1.0), vec3(0.0,0.2,0.8), blender); // Center Color, Edge Color
      alpha=1.0-(1.0-alpha)*(1.0-alpha);
      alpha*=alpha;
      Cd.a=alpha+alpha;
      gl_FragColor = Cd;
    }`,l}function ta(){let l=A();return l+=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    varying vec3 pos;
    varying float nDot;
    varying vec2 vUv;
    varying vec2 nUv;
    
    void main(){
      vUv=uv;
      nUv=uv*.5+vec2(rate*time.x*-.1, 0.0);
      nUv.x=sin(nUv.x)*.5+.5;
      vec3 camDir=normalize( (projectionMatrix*viewMatrix*vec4(0.0,0.0,-1.0,1.0)).xyz );
      nDot=dot( normal, camDir );
      
      vec2 nUV=position.xy*.01+vec2(time.x*rate*.1, time.x*rate*.1);
      vec3 pos=position;
      vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix*modelViewPosition;
      
    }`,l}function ia(){let l=A();return l+=`
    uniform vec3 color;
    uniform sampler2D alphaMap;
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D cloudNoise;
    varying vec3 pos;
    varying float nDot;
    varying vec2 vUv;
    varying vec2 nUv;
    
    void main() {
      vec4 Cd=vec4( color, 1.0);
      float alpha=texture2D(alphaMap,vUv).r;
      float noise=length(texture2D(cloudNoise,nUv).rgb)*.5;
      float blender=(nDot*.5+.5);
      Cd.rgb=color*blender;
      Cd.rgb*=intensity*alpha;
      Cd.a=blender*alpha+noise*alpha;
      gl_FragColor = Cd;
    }`,l}function na(){let l=A();return l+=`
    uniform sampler2D color;
    uniform vec2 time;
    uniform float intensity;
    uniform sampler2D cloudNoise;
    varying vec2 vUv;
    
    void main() {
      vec4 Cd=texture2D(color,vUv);
      Cd.a=Cd.b;
      Cd.rgb=vec3( Cd.rg*Cd.a, 0.0 );
      Cd.rgb*=Cd.a* mix(.7, 1.0, gl_FrontFacing);
      gl_FragColor = Cd;
    }`,l}function Xn(l=!1){let e=`
    attribute vec3 color;
    attribute vec3 shading;

    varying float vFlicker;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    `;return l&&(e+=`
        ${N.common}
        ${N.shadowmap_pars_vertex}
      `),e+=`
    
    void main(){
        vUv=uv;
        
        vShading=shading;
        
        vCd=color;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;
        
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        `,l&&(e+=`
            ${N.worldpos_vertex}
            ${N.shadowmap_vertex}
          `),e+=`
    }`,e}function jn(l,e,t,i,n,r){let s=!1,a=1;l.hasOwnProperty("Specular")&&l.Specular>0&&(s=!0,a=l.Specular);let o=!1;l.PointColor&&(o=!0);let c=!0,h="1.0";l.hasOwnProperty("SurfaceNoise")&&(l.SurfaceNoise%1==0&&(h=l.SurfaceNoise+".0"),h=="0.0"&&(c=!1));let u=`
        `;if(e||(u+="uniform sampler2D dTexture;"),u+=`
    
    uniform sampler2D noiseTexture;
    uniform sampler2D detailTexture;
        
    uniform vec2 time;
    uniform float cdMult;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    
    varying float vFlicker;
    
    #define PI 3.14159265358979
    
    struct PointLight {
      vec3 color;
      float decay;
      float distance;
      vec3 position;
    };
    struct DirLight {
      vec3 color;
      vec3 direction;
    };
    `,i&&(u+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),n&&(u+=`
      
      ${N.packing}
      
      #if NUM_POINT_LIGHT_SHADOWS > 0
          uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
          varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
          struct PointLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
              float shadowCameraNear;
              float shadowCameraFar;
          };
          uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
      #endif
      float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
          return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
      }
      vec2 cubeToUV( vec3 v, float texelSizeY ) {
          vec3 absV = abs( v );
          float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
          absV *= scaleToCube;
          v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
          vec2 planar = v.xy;
          float almostATexel = 1.5 * texelSizeY;
          float almostOne = 1.0 - almostATexel;
          if ( absV.z >= almostOne ) {
              if ( v.z > 0.0 )
                  planar.x = 4.0 - v.x;
          } else if ( absV.x >= almostOne ) {
              float signX = sign( v.x );
              planar.x = v.z * signX + 2.0 * signX;
          } else if ( absV.y >= almostOne ) {
              float signY = sign( v.y );
              planar.x = v.x + 2.0 * signY + 2.0;
              planar.y = v.z * signY - 2.0;
          }
          return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
      }
      float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
          vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
          vec3 lightToPosition = shadowCoord.xyz;
          float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
           dp += shadowBias;
          vec3 bd3D = normalize( lightToPosition );
          #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
              vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
              return (
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
              ) * ( .11111111111 ) * (1.0-dp);
          #else
              return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) * (1.0-dp);
          #endif
      }
    
      vec3 directionToLight( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar  ){
          vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
          vec3 lightToPosition = shadowCoord.xyz;
          float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
          dp += shadowBias;
          vec3 bd3D = normalize( lightToPosition );
          vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
          return texture2D( pointShadowMap[0], cubeToUV( bd3D, texelSize.y )).rgb;
      }
      `),u+=`
    void main(){
      `,o)u+="vec3 vertCd = vCd;";else if(e){let f=y=>y%1==0?y+".0":y+"",v=f(e.r),x=f(e.g),_=f(e.b);u+=`vec3 vertCd = vec3( ${v}, ${x}, ${_} ) ;`}else u+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";u+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,t&&(u+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let p="",d="",m="";if(c&&(h!="1.0"&&(p="*"+h),u+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,d=`+detailMult * (shadowInf*.5+.5) ${p}`,m=`(detailMult+.5) ${p}`),i&&(u+=`
          #if NUM_POINT_LIGHTS > 0 || NUM_DIR_LIGHTS > 0
            vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
          #endif
          
          #if NUM_POINT_LIGHTS > 0
            for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
                vec3 lightVector = normalize(vPos - pointLights[i].position);
                vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[i].color;
                //lightInf = mix( lightInf, 1.0-(1.0-lightInf)*(1.0-lightInf), .2);
                float distFalloff =  1.0-min(1.0, length(vPos - pointLights[i].position) * pointLights[i].decay*.008 );
                lightInf *=  distFalloff;
                lights.rgb += lightInf;
                `,s&&(u+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),u+=`
            }
          #endif
            
          #if NUM_DIR_LIGHTS > 0
            for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
                vec3 lightInf= max(0.0, dot(directionalLights[i].direction, vN)*.65+.35) * directionalLights[i].color;
                lights.rgb += lightInf;
            }
          #endif
            
            
          #if NUM_POINT_LIGHTS > 0 || NUM_DIR_LIGHTS > 0
            Cd.rgb *= lights.rgb;
          #endif
          `,s&&(u+=`
            Cd.rgb += vertCd * specular * ${a};
            `)),n){u+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let f=0;f<r;++f)u+=`
                i=${f};
                lShadow = getPointShadow( pointShadowMap[${f}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.75, pointLightShadows[i].shadowRadius*1.65, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;u+=`
            shadowInf = shadowInf;
            Cd.rgb*=shadowInf ${d} ;
            `,c&&(u+=`
              #else
                Cd.rgb*=${m};
              `),u+=`
          #endif
          `}else c&&(u+=`
            Cd.rgb*=${m};
            `);return u+=`
        Cd*=cdMult;
        
        // Convert to sRGB
        Cd.rgb = mix( 12.92 * Cd.rgb, 1.055 * pow(Cd.rgb, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, Cd.rgb) );

        gl_FragColor=Cd;
    }`,u}var es={};_t(es,{dustFrag:()=>Bt,dustVert:()=>Ot,emberWispsFrag:()=>Yn,emberWispsVert:()=>qn,smokeFrag:()=>Jn,smokeVert:()=>Zn,snowFallFrag:()=>sa,snowFallVert:()=>ra});function qn(l=[-.13,.15]){let e=A();return e+=`
        
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 sliders;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec3 vCd;
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    #define PROX 60.0
    #define LAND 10.0
    
    const vec2 windForce = vec2(${l[0]}, ${l[1]});
    
    const vec3 earlyCd = vec3( 1.0, 0.7, .1 );
    const vec3 oldCd = vec3( 0.634, 0.50, 0.20 );
    const float emberSpread = 15.0;
    const float emberFadeDistance = 0.04;
    const float baseSpeed = 0.47;
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        vec3 pOff=vec3(seeds.z, seeds.y, seeds.w) * vec3(PROX);
        
        vec2 sinUV=abs(sin(pOff.xz*.5+seeds.zw+time.x*.1)*.5+.5);
        vec3 noiseCd=texture2D(noiseTexture, sinUV ).rgb*4.5 + 0.50;
        
        float rateShift = (baseSpeed*(seeds.x*.4+.6));
        float t=time.x*rate*rateShift;
        float shiftY= mod( t+t*seeds.x+seeds.z*8.0+noiseCd.r*10.20*(seeds.y*2.0-1.0)+noiseCd.b+(-seeds.x+seeds.y)*4.0, 10.0);
        float life = 1.0-max(0.0,abs(shiftY-seeds.x*.1)*(1.0-(seeds.x*1.0)) );
        life = 1.0-((shiftY*.001-seeds.x*.2) );
        
        pOff.y=shiftY*seeds.y;
        
        pOff.y=(pOff.y)+shiftY; 
        vec3 pos= pOff ;
        

        pos.xz=(noiseCd.rg*noiseCd.r)*(seeds.x)*emberSpread*(life*seeds.zy*(seeds.w*4.0-2.));
        
        float yPush = ( life * (life*.5+.5))  * min(1.0,pos.y*.12) * 5.8;
        pos.xz += windForce * yPush * pos.y + vec2(1.25, .0);
        pos.y += yPush;
        
        
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.017)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.15+.7) * aMult;

        
        vAlpha=max(0.0, life*life-seeds.z-seeds.z);
        float distMult = ( length( pos )*emberFadeDistance );
        distMult = 1.0 - ( distMult * distMult );
        vAlpha *= distMult;
        
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.3+vec2(0.0,pos.y)).rgb*2.0 ;
        pos.xz+=doubleCd.rb ;
        
        
        float pScale = pointScale.x * seeds.w * pScalar + 2.0;
        
        gl_PointSize = pScale;
        
        pos += modelMatrix[3].xyz - vec3(1.0, 0.50, 0.2);
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        float cdAge = clamp( 1.0 - life, 0.0, 1.0);
    
    //earlyCd, oldCd
        vCd = mix( earlyCd, oldCd, cdAge )  ;
        vBrightness = 1.45;
        
    } `,e}function Yn(){let l=A();return l+=`        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec3 vCd;
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha;
        
        //dustCd.rgb = 1.0 - (1.0 - dustCd.rgb ) * vBrightness;
        dustCd.rgb *= vBrightness;
        
        vec4 Cd=vec4( dustCd.rgb * vCd * vBrightness, alpha );
        gl_FragColor=Cd;
    }`,l}function Ot(l,e=120){let t=A();return t+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,l>0&&(t+=`uniform vec3[${l}] lightPos;`),t+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${e.toFixed(3)}
    #define PROX_INV 1.0/${(e*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${l}
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        float t=time.x*rate;
        
        vec3 pOff=seeds.xyz * vec3(PROX);
        
        // Loop point positions based on camera location
        float yFract=fract(t+seeds.x);
        pOff.y+=cameraPosition.y ; 
        pOff.x+=time.x*windDir.x; 
        pOff.z+=time.x*windDir.y; 
        vec3 pos= pOff ;
        
        vec3 noiseCd=texture2D(noiseTexture, sin(pos.xz*.05+seeds.xz+time.x*.1)*.5+.5 ).rgb-.5;
        
        pos.y = (pos.y-.1)*.45;
        pos.y+=sin(seeds.x+seeds.z+noiseCd.r*noiseCd.g+noiseCd.b+time.x*.2)*2.;//+noiseCd.r*noiseCd.g*noiseCd.b*20.;

        pos.xz+=(noiseCd.rg*noiseCd.b)*((seeds.w+.75)*4.);
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*PROX_INV)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

  `,l>1?t+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:l==1&&(t+=`
        vec3 lightVector = normalize(pos - lightPos[0]);
        float lightInf = length(pos - lightPos[0]) *.02;
        vAlpha*=(1.0-lightInf)*.8+.2;
    `),t+=`
        vScalar = pScalar ;
        //float pScale = pointScale.x * ((seeds.w+.75)*.5) * pScalar + 1.0;
        float pScale = pointScale.x * (seeds.w*.5+.5)*pScalar + 1.0;
        pScale *= step( .5, atlas.x )*.5+1.;
        //pScale = 10.0;
       
        gl_PointSize = pScale;
        
        pos+=positionOffset;
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,t}function Bt(){let l=A();return l+=`
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha; // *vScalar;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        gl_FragColor=Cd;
    }`,l}function Zn(l=[8.7,8.4]){let e=A();return e+=` 
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    
    #define PROX 6.0
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
     
    
    // Attempted de-Magic-num-ification
    float baseSpread = 110.0;
    float innerBulster = -0.110;
    float smokeDensity = 0.25;
        
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        vec3 pOff=vec3(seeds.z, seeds.y, seeds.w) ;
        
        vec2 sinUV=abs(sin(pOff.xz*.5+seeds.zw+time.x*.1)*.5+.5);
        vec3 noiseCd=texture2D(noiseTexture, sinUV ).rgb*4.5 + 0.50;
        
        float t=time.x*rate;
        float shiftY= mod( t+t*seeds.x+seeds.z*24.0+noiseCd.r+noiseCd.b+(seeds.x+seeds.y)*2.0, 14.0);
        float life = max(0.0,(shiftY-seeds.x)*0.07142857142857142)*.9+.2;
        float alphaMult = (1.0-(1.0-life)*(1.0-life))*smokeDensity;
        
        pOff.y=shiftY*seeds.y*life - (1.0-life);
        
        pOff.y=(pOff.y*.5)+shiftY; 
        vec3 pos= pOff ;
        

        
        // Magic numbers!  Boo!!
        float tightenTip = max(0.0,life-.63)*1.3;
        tightenTip = 1.0 - (1.0-tightenTip) * (1.0-tightenTip);
        //tightenTip *= tightenTip;
        float tightenBase = max(0.0, (1.0-life)*innerBulster);
        float tightenMid = max(0.0, 0.60 - tightenTip - tightenBase - seeds.x*.2);
        
        baseSpread = baseSpread*tightenBase + baseSpread*tightenMid + baseSpread*tightenTip ;
        
        pos.xz=(noiseCd.rg*noiseCd.b)*seeds.w*baseSpread*(life*(seeds.zy*.6));
        
        // Wind -- Forces
        //   Magic numbers, yarb!
        float windInf = life * life * (life*.5+.5);
        vec2 windDir = vec2( windInf*${l[0]}, windInf * ${l[1]} );
        pos.xz += windDir + vec2(-.5, .0);
        
        
        // Alpha with cam distance inf
        float pScalar = 1.0-min( 1.0, (length(pos-cameraPosition )*0.004) );
        pScalar=1.0-(pScalar*pScalar);
        float aMult = min(1.0, pScalar*2.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        
        // Alpha from gettin' old
        vAlpha=(1.0-life)*min(1.0,alphaMult);
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.5+vec2(seeds.y,pos.y)).rgb ;
        pos.xz=(pos.xz*seeds.xy+doubleCd.rb*10.0)*min(1.0,life+seeds.y);
        
        
        // Draw size, particle scale
        pScalar = 1.0-(1.0-pScalar)*.75*(1.0-pScalar);
        float pScale = pointScale.x * seeds.w * 0.006 * pScalar + (200.0+125.0*life*pScalar)*(1.0-pScalar);
        pScale += 150.0*(clamp(-(pScalar-.45)*10.0,0.0,1.0));

        gl_PointSize = pScale;
        
        // Brightness multiplier
        vBrightness = 1.0-tightenMid*.81 - tightenTip + tightenBase;
        float originDelta = length(pos)*(-innerBulster);
        vBrightness *= max(0.0, 1.0-originDelta * life * 0.807);
        
        
        // Add Particle System position
        pos += modelMatrix[3].xyz;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        
    }`,e}function Jn(){let l=A();return l+=`
        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        Cd.rgb *= vec3(vBrightness);
        
        gl_FragColor=Cd;
    }`,l}function ra(l=!1){let e=!l,t=A();return t+=`
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    
    #define PROX 1000.0
    #define LAND 50.0
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        float t=time.x*rate;
        
        vec3 pOff=vec3( seeds.x, 0, seeds.y)* vec3(PROX);
        
        // Loop point positions based on camera location
        float yFract=fract(t+seeds.z);
        pOff.y=PROX-yFract*(PROX+LAND); 
        vec3 pos= pOff ;
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        
        // Get some roof tops working
        //   Using opposing points and 2 normals in xz space to determin y floor position
        // Find rooves from xz pos + dot products
        float floor=0.0;
    `,e&&(t+=`
        // -- --
        vec2 lp1=vec2( -186.0, -1002.0 ); // Point 1
        vec2 l1n1=vec2(-.1,1.); // Normal 1
        vec2 l1n2=vec2(1.,-.1); // Normal 2
        vec2 lp2=vec2( -1101.0, -1720.0 ); // Point 2
        vec2 l2n1=vec2(.1,-1.1);
        vec2 l2n2=vec2(-1.,.1);
        floor = max( floor, 170.0*colDetect( pos.xz, lp1,l1n1,l1n2 ) * colDetect( pos.xz, lp2,l2n1,l2n2 ) ); // Lobby roof

        lp1=vec2( -217.0, 786.0 ); // Point 1
        l1n1=vec2(.2,-1.); // Normal 1
        l1n2=vec2(1.,.1); // Normal 2
        lp2=vec2( -940.0, 1293.0 ); // Point 2
        l2n1=vec2(-.2,1.);
        l2n2=vec2(-1.,-.1);
        floor = max( floor, 500.0*colDetect( pos.xz, lp1,l1n1,l1n2 ) * colDetect( pos.xz, lp2,l2n1,l2n2 ) ); // sunflower roof

        lp1=vec2( 204.028, 56.7629 ); // Point 1
        l1n1=vec2( 0.152344, -0.988327 ); // Normal 1
        l1n2=vec2( -0.999862, 0.0165819 ); // Normal 2
        lp2=vec2( 755.264, 754.843 ); // Point 2
        l2n1=vec2( -0.160366, 0.987058 );
        l2n2=vec2( 0.999849, 0.0173488 );
        floor = max( floor, 150.0*colDetect( pos.xz, lp1,l1n1,l1n2 ) * colDetect( pos.xz, lp2,l2n1,l2n2 ) ); // sunflower roof
        `),t+=`  
        // Prevent snow drifting after hitting the ground
        float yLimit=max( floor, pos.y ) * .08 * seeds.z;
        pos.xz+=vec2( sin(pos.x+yLimit*seeds.x), sin(pos.z+pos.x+yLimit*seeds.y) )*10.; // Snow sway in the sky
        
        // Shift Y position per camera height
        pos.y+=cameraPosition.y-yFract*(cameraPosition.y); 
        pos.y=max( floor+1.5, pos.y );
        
        float melt=min(1.0, (pOff.y+LAND-floor)*.02);
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.001) * melt );
        
        vScalar = pScalar;
        float pScale = pointScale * seeds.w * pScalar ;
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,t}function sa(){let l=A();return l+=`
    uniform sampler2D snowTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = uv-.5;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        float alpha=texture2D(snowTexture,rotUV).r * vScalar;
        vec4 Cd=vec4( vec3(1.), alpha );

        gl_FragColor=Cd;
    }`,l}var ts={};_t(ts,{boxAntiAliasPass:()=>da,chroAberPostProcess:()=>ga,compLayersPostProcess:()=>ha,crossAntiAliasPass:()=>ua,directionalBlurPass:()=>pa,finalOverlayHeavyShader:()=>ba,finalOverlayShader:()=>Sa,finalOverlaySlimShader:()=>Ta,glowPassPostProcess:()=>la,iZoomPostProcess:()=>xa,lKingPostProcess:()=>va,mixBlurShaderPass:()=>ma,motionBlurPostProcess:()=>fa,sFieldPostProcessFrag:()=>ya,sFieldPostProcessVert:()=>_a,textureStorePass:()=>ca,warpPostProcess:()=>Ma,worldPositionFrag:()=>oa,worldPositionVert:()=>aa});function aa(){let l=A();return l+=`
  varying vec3 pos;
  
  void main(){
    vec3 transformed = vec3( position );
      vec4 mvPosition = modelViewMatrix  * vec4( transformed, 1.0 );
    pos=((projectionMatrix * modelMatrix * vec4( transformed-vec3(0.0,0.0,-500.0), 1.0 )).xyz*.0001)*.5+.5;
    
    gl_Position = projectionMatrix * mvPosition;
  }`,l}function oa(){let l=A();return l=`#include <packing>
  `+l,l+=`
    uniform sampler2D diffuse;
    uniform sampler2D depth;
    uniform float camNear;
    uniform float camFar;
    varying vec3 pos;
    
    void main() {
      
      vec4 Cd=vec4( pos, 1.0 );
      gl_FragColor = Cd;
    }`,l}function la(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D gDiffuse;
    uniform sampler2D rDiffuse;
    uniform sampler2D sceneDepth;
    uniform vec2 time;
    uniform vec2 ratio;
    varying vec2 vUv;

        #define PI 3.14159265358979
        
    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv );
      vec4 gCd=texture2D( gDiffuse, vUv );
      vec4 rCd=texture2D( rDiffuse, vUv );
      
      Cd.rgb=gCd.rgb + gCd.rgb*length(gCd.rgb) + rCd.rgb  + Cd.rgb ;

      Cd.a=1.0;
      gl_FragColor = Cd;
    }`,l}function ca(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D tDiffusePrev;
    uniform sampler2D tDiffusePrevRoom;
    uniform float roomComposer;
    varying vec2 vUv;
        
    void main() {
      vec4 Cd = texture2D( tDiffusePrev, vUv );
      vec3 prevRoomCd = texture2D( tDiffusePrevRoom, vUv ).rgb;
      Cd.rgb=mix( Cd.rgb, prevRoomCd, roomComposer);
      //Cd.rgb=Cd.rgb + prevRoomCd;
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`,l}function ha(){let l="";return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D mtDiffuse;
    uniform sampler2D sceneDepth;
    uniform sampler2D noiseTexture;
    uniform float exposure;
    uniform vec2 camRotPitch;
    uniform vec2 time;
    varying vec2 vUv;

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*exposure;
      vec4 mBlurCd=texture2D(mtDiffuse,vUv)*exposure;
      vec4 depth=texture2D(sceneDepth,vUv);
      
  ////////////////////////
  /*
      vec2 uv=vUv;
      float pi=3.14159265358979;
      float t=-time.x*.007;
      float pitch=camRotPitch.y;//depth.w*2.0-1.0;
      float yaw=camRotPitch.x;
      
      float distMult=depth.x*2.0;
      vec2 noiseUV=vec2(fract(uv.x*distMult+t+yaw), fract(uv.y*distMult+pitch));
      vec3 noiseCd=texture2D(noiseTexture,noiseUV).rgb;
      noiseUV=vec2(fract(uv.x*distMult+t*.5+yaw), fract(uv.y*.5*distMult+t*.25+pitch));
      noiseCd.g=texture2D(noiseTexture,noiseUV).g;
      noiseUV=vec2(fract(uv.x*.8*distMult+t*1.3+yaw), fract(uv.y*.3*distMult+t*.5+ pitch + depth.x*2.0));
      noiseCd.b=texture2D(noiseTexture,noiseUV).b;
      float mult=noiseCd.x*noiseCd.y*noiseCd.z*1.3;
      mult*=max(0.0, 1.0-depth.x) + (1.0-depth.z*.6);
      
      float bg=length(depth.rgb)<.02 ? 0.0 : 1.0;
      float bval=length(bloomCd.rgb);
      mult= mult*(bg+bval) ;//*(1.0-depth.z);
      Cd.rgb= mix( Cd.rgb, vec3(mult*.2), mult );
      */
      
      Cd.rgb+=mBlurCd.rgb;
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`,l}function ua(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform vec2 resUV;
    uniform float ratio;
    uniform vec3 gamma;
    varying vec2 vUv;

    // 1/4 ==  0.25
    //  + 2 center samples, 1/6 ==  0.166...
    #define AADIV 0.1666666666666666
    const int runCount = 4;
    const vec2 runDir[4] = vec2[4](
                              vec2( -1.0, -1.0 ),
                              vec2( -1.0, 1.0 ),
                              vec2( 1.0, -1.0 ),
                              vec2( 1.0, 1.0 )
                            );

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*2.0;
            
      float dist = 1.0;
      vec2 baseUV=vUv;
      vec2 curUV;
      vec3 curCd;
      for(int s=0; s<runCount; ++s){
        curUV = baseUV+runDir[s]*(resUV);//*dist);
        curCd = texture2D(tDiffuse,curUV).rgb;
        Cd.rgb+=curCd;
      }
      Cd.rgb=Cd.rgb*AADIV;
      Cd.a=1.0;
      
      //Cd.rgb = pow(Cd.rgb, vec3(gamma.x));
      Cd.rgb = vec3(1.0)-(vec3(1.0)-Cd.rgb)*gamma.y + Cd.rgb*(1.0-min(1.0,length(Cd.rgb)))*gamma.z;
      gl_FragColor = Cd;
    }`,l}function da(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform vec2 resUV;
    uniform float ratio;
    uniform vec3 gamma;
    varying vec2 vUv;

    // 1/8 ==  0.125
    //  + 2 center samples, 1/10 ==  0.1
    #define AADIV 0.1
    const int runCount = 8;
    const vec2 runDir[8] = vec2[8](
                              vec2( -1.0, -1.0 ),
                              vec2( -1.0, 1.0 ),
                              vec2( 1.0, -1.0 ),
                              vec2( 1.0, 1.0 ),

                              vec2( -1.0, 0.0 ),
                              vec2( 0.0, -1.0 ),
                              vec2( 0.0, 1.0 ),
                              vec2( 1.0, 0.0 )
                            );

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*2.0;
            
      float dist = 1.0;
      vec2 baseUV=vUv;
      vec2 curUV;
      vec3 curCd;
      for(int s=0; s<runCount; ++s){
        curUV = baseUV+runDir[s]*(resUV);//*dist);
        curCd = texture2D(tDiffuse,curUV).rgb;
                Cd.rgb+=curCd;
      }
      Cd.rgb=Cd.rgb*AADIV;
      Cd.a=1.0;
      
      //Cd.rgb = pow(Cd.rgb, vec3(gamma.x));
      Cd.rgb = vec3(1.0)-(vec3(1.0)-Cd.rgb)*gamma.y + Cd.rgb*(1.0-min(1.0,length(Cd.rgb)))*gamma.z;
      gl_FragColor = Cd;
    }`,l}function pa(l,e,t,i){let n=A();return n+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;
  
        #define PI 3.14159265358979
        
        void main() {
          
          float dist = 2.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
            
          const int blurCount=${t};
          const int runCount=2;
          vec2 runDir[runCount];
          runDir[0]=vec2(${e[0]}.0, ${e[1]}.0);
          runDir[1]=vec2(-${e[0]}.0, -${e[1]}.0);
          vec2 curUV;
          vec4 curCd;
          vec4 blurCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 1.0 + float(b)*${i};
            fade = (1.0-float(b+1)/float(blurCount+2));
            //fade = 1.- (1.-fade)*(1.-fade);
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curUV = min( vec2(1.), max( vec2(0.), curUV ));
              curCd = texture2D(${l},curUV);
              curCd.a *= fade*(length(curCd.rgb)*.6);
              blurCd.r = max( blurCd.r, curCd.r );
              blurCd.g = max( blurCd.g, curCd.g );
              blurCd.b = max( blurCd.b, curCd.b );
              //blurCd.rgb += curCd.rgb;
              blurCd.a = max( blurCd.a, curCd.a );
            }
          }
          vec4 Cd=blurCd;
          //Cd.a=.01;
          gl_FragColor = Cd;
        }`,n}function ma(){let l=A();return l+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;
        
        #define PI 3.14159265358979
        
        void main() {

          float dist = 3.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
          const int blurCount=3;
          const int runCount=8;
          vec2 runDir[runCount];
          runDir[0]=vec2(1.0, 0.0);
          runDir[1]=vec2(1.0, 1.0);
          runDir[2]=vec2(0.0, 1.0);
          runDir[3]=vec2(-1.0, 1.0);
          runDir[4]=vec2(-1.0, 0.0);
          runDir[5]=vec2(-1.0, -1.0);
          runDir[6]=vec2(0.0, -1.0);
          runDir[7]=vec2(1.0, -1.0);
          vec2 curUV;
          vec4 curCd;
          vec4 scatterCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 1.5*(1.0+float(b));
            fade = .1*(1.0-float(b)/float(blurCount));
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curCd = texture2D(pDiffuse,curUV);
              curCd.a *= fade;
              scatterCd.rgb += curCd.rgb;
              scatterCd.a = max( scatterCd.a, curCd.a );
            }
          }
          vec4 Cd=scatterCd;
          
          vec4 blurCd=texture2D(tDiffuse,vUv);
          blurCd.rgb = normalize( blurCd.rgb );
          
          Cd = mix( blurCd, Cd, Cd.a);
          Cd = texture2D(tDiffuse,vUv);
          //Cd.a=.01;
          gl_FragColor = Cd;
        }`,l}function fa(l,e){let t=A();return t+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D rDiffuse;
    uniform sampler2D noiseTexture;
    
    uniform float exposure;
    uniform vec2 time;
    uniform vec3 camRotXYZ;
    uniform vec2 blurDirCur;
    uniform vec2 blurDirPrev;
    varying vec2 vUv;

    vec4 getTexture( sampler2D texelToLinearTexture ) {
      return mapTexelToLinear( texture2D( texelToLinearTexture , vUv ) );
    }
    
    vec3 directionalBlur(vec3 origCd, sampler2D tex, vec2 uv, vec2 dir, vec2 deltaDir, float dist, float thresh){
      float perc;
      float curPerc=1.0;
      vec2 curUV;
      float origLength=length(origCd.rgb);
      vec3 curCd;
      vec3 retCd=origCd;
      float delta;
      float threshTrigger=1.0;
      float dropoff;
      float percCurve;
      float d=dot(dir,deltaDir)*.5+.5;
      for(int r=0; r<10; ++r){
        perc=(float(r)/10.0);
        percCurve=perc*.5;
        dropoff=(dist*float(r))*perc*d;
        curUV=uv+normalize(deltaDir*percCurve+dir*(1.0-percCurve))*dropoff;
        //curUV=uv+dir*dropoff;
        curCd=texture2D(tex,curUV).rgb;
        delta=length(curCd.rgb);
        delta=origLength<delta?1.0-perc*perc:0.0;
        //delta=1.0-perc*perc;
        retCd+=curCd.rgb*delta;
        curPerc+=delta;
        
        percCurve*=percCurve;
        curUV=uv-normalize(-deltaDir*percCurve+dir*(1.0-percCurve))*dropoff*.4;
        //curUV=uv-dir*dropoff*.4;
        curCd=texture2D(tex,curUV).rgb;
        delta=length(curCd.rgb);
        delta=origLength<delta?1.0-perc*perc:0.0;
        //delta=1.0-perc*perc;
        retCd+=curCd.rgb*delta;
        curPerc+=delta;
        
      }
      return retCd /curPerc;
    }

    void main() {
      
      
      vec4 bloomCd=getTexture( rDiffuse );
      float noise=sin(time.x*1.8+vUv.x*length(bloomCd.rgb)*12.523+cos(time.x*.4+vUv.y*length(bloomCd.rgb)*2.352)*1.9)*.4+.8;
      noise=1.0-min(1.0, max(0.0, noise*sin(time.x*.4+24.512)*3.0+1.0));
      vec2 noiseUV=vUv*0.1;//+vec2(camRotXYZ.x+time.x*.05,-camRotXYZ.y);
      vec4 noiseCd=texture2D(noiseTexture,noiseUV);
      float blurDist=length(blurDirCur);
      blurDist=min(1.0,blurDist*15.0);
      //blurDist=(1.0-(1.0-blurDist)*(1.0-blurDist));
      vec2 blurDir=normalize(blurDirCur);//+(vUv-.5)*2.0);`,e||(t+=`
        blurDir=normalize( blurDir + (noiseCd.gb-.5)*(dot(blurDir,noiseCd.gb)*.5+.5) );
      `),t+=`
      vec2 deltaDir=normalize(blurDirPrev);
      deltaDir.x+=sin((blurDir.x-deltaDir.x));
      deltaDir.y+=sin((blurDir.y-deltaDir.y));
      
      vec4 bloomAdd=vec4( directionalBlur(bloomCd.rgb, rDiffuse, vUv, blurDir, deltaDir, `+l.y+"*"+(e?"3.0":"5.0")+`*(1.5)*blurDist, .5)*(1.0+exposure*.4), 1.0);
      vec4 Cd= bloomAdd* ( 0.50+bloomCd)*exposure;//getTexture( rDiffuse ) + bloomAdd;//+ vec4( 1.0 ) * bloomCd + bloomAdd;
      //Cd.a=bloomAdd.a-bloomCd.a;
      
      Cd.a=1.0;
      gl_FragColor = Cd;
      
    }`,t}function ga(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D chroAberUVTexture;
    uniform vec2 ratio;
    uniform vec2 warpMult;
        uniform vec2 lKing;
    varying vec2 vUv;

    void main() {
      // I don't know, sRGB to Linear. Keeping it Linear doesn't work, PNG encoding to blame
      vec4 caCd= texture2D( chroAberUVTexture, vUv )-vec4(vec3(0.7294118), 0.5019608);
      //caCd*=mix( .025, .018, length(caCd.rg)*4.0 );
      caCd*=mix( lKing.x, lKing.y, length(caCd.rg)*4.0 )+warpMult.x;
      
      vec2 bUv=vUv+caCd.rg;
      vec2 rUv=vUv+caCd.ba;
      vec2 gUv=vUv+(caCd.rg+caCd.ba);
      vec4 rCd=texture2D( tDiffuse, rUv );
      vec4 Cd=texture2D( tDiffuse, gUv );
      vec4 bCd=texture2D( tDiffuse, bUv );
      
      Cd.rgb=vec3( rCd.r, Cd.g, bCd.b );
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`,l}function va(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform vec2 ratio;
    varying vec2 vUv;

        #define PI 3.14159265358979
        
    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv )*.2;
      vec4 noiseCd= (texture2D( noiseTexture, vec2( fract(vUv.x*.2-time.x*.02+sin(time.x*.1+vUv.y*PI+Cd.r+Cd.g)),fract( vUv.y*.2+time.x*.01+cos(-time.x*.2+1.15+vUv.x*PI+Cd.g+Cd.b)) ) )-.5)*.025;
      
      vec2 bUv=vUv+noiseCd.rg;
      vec2 rUv=vUv+noiseCd.gb;
      vec2 gUv=vUv+noiseCd.br;
      vec4 rCd=texture2D( tDiffuse, rUv );
      vec4 gCd=texture2D( tDiffuse, gUv );
      vec4 bCd=texture2D( tDiffuse, bUv );
      
      Cd.rgb=vec3( rCd.r, gCd.g, bCd.b );
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`,l}function xa(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D tDiffusePrev;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform vec2 ratio;
    varying vec2 vUv;

        #define PI 3.14159265358979
        
    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv );
            vec4 pCd=texture2D( tDiffusePrev, vUv );
            vec3 dCd=Cd.rgb-pCd.rgb;
            vec3 b1Cd= texture2D( tDiffuse, vUv-vec2( dCd.rg*.1 ) ).rgb;
            vec3 b2Cd= texture2D( tDiffusePrev, vUv+vec2( dCd.rg*.1 ) ).rgb;
            b1Cd=mix( b1Cd, b2Cd, step( length(b1Cd), length(b2Cd) ) );
            
            vec4 outCd=vec4(1.0);
            outCd.rgb= mix(  Cd.rgb, b1Cd, length(dCd) );
            
      vec3 noiseCd=texture2D( noiseTexture, fract( vUv*50.0+dCd.rg*.1 + length(Cd.rgb*30.0) + time.x) ).rgb;

            outCd.rgb= mix( vec3(length(outCd.rgb)*.333-length(noiseCd)*.1), outCd.rgb, min(1.0,length(dCd))*.5+.5 );
            outCd.rgb+= dCd.gbr;
            
            
            
      outCd.a=1.0;
      gl_FragColor = outCd;
    }`,l}function _a(){let l=A();return l+=`
    uniform vec2 time;
    varying vec2 vUv;
    varying vec2 vUvShift;
    varying vec2 starUv;
    varying float vTimer;

    void main(){
        vUv=uv;
        vUvShift=uv-.5;
        
        vec2 rUv=vUvShift*0.7071067811865476;
        vec2 tmpUv=rUv;
        float rot=time.x*.1;
        vec2 sinCos=vec2( sin(rot), cos(rot) );
        rUv.x=sinCos.x*tmpUv.x + sinCos.y*tmpUv.y;
        rUv.y=sinCos.y*tmpUv.x - sinCos.x*tmpUv.y;
        rUv=(rUv+.5);
        
        float starTimer=sin(time.x*.2)*.1+.1;
        starUv=mix( vUv, rUv, starTimer);
        
        vTimer=time.x*.5;
        
        vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*modelViewPosition;
    }`,l}function ya(){let l=A();return l+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D starTexture;
        varying vec2 vUv;
        varying vec2 vUvShift;
        varying vec2 starUv;
        varying float vTimer;

        #define PI 3.14159265358979
        
        void main() {
            float uvDist=length(vUvShift);
            
            vec3 starCd=texture2D( starTexture, starUv ).rgb*uvDist;
            
            float blender=uvDist*starCd.b * abs((fract(starCd.b*PI+vTimer))*2.0-1.0)*.5;
            vec2 starBlendUV=starCd.rg*blender;
            
            vec2 cdUv = vUv+starBlendUV;
            vec4 Cd=texture2D( tDiffuse, cdUv );
            
            vec3 negCd= mix( Cd.brg, Cd.gbr, length(Cd.rgb-Cd.rgb) );
            float cdBlender=step(.015,starBlendUV.x*uvDist)+starCd.b;
            Cd.rgb= mix( Cd.rgb, negCd, cdBlender );
            
            gl_FragColor = Cd;
        }`,l}function Ma(){let l=A();return l+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D animTexture;
    uniform vec2 time;
    uniform vec2 fader;
    varying vec2 vUv;

    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv );
      vec4 animCd=texture2D( animTexture, vUv );
      float timer=time.x*.2;
      vec2 animUV=vec2( mod(animCd.r+Cd.r+Cd.g+timer, 1.0), mod(animCd.g+Cd.g+Cd.b+timer, 1.0) );
      animCd=texture2D( animTexture, animUV );
      
      vec2 noiseUV=animUV+animCd.rg;
      vec4 noiseCd=texture2D(noiseTexture,noiseUV);
      noiseCd.rgb=vec3( length( noiseCd.rgb )*.5-.25 );
      
      float blend=fader.x*fader.y;
      Cd=mix( Cd, noiseCd, blend);
      
      Cd.a=1.0;
      Cd.r=1.0;
      gl_FragColor = Cd;
    }`,l}function ba(){let l=A();return l+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D rDiffuse;
        uniform sampler2D bloomTexture;
        uniform sampler2D sceneDepth;
        uniform sampler2D scenePos;
        uniform sampler2D noiseTexture;
        uniform vec3 camPos;
        uniform vec2 time;
        uniform vec2 fogMult;
        uniform vec2 proximityMult;
        uniform float ratio;
        uniform float exposure;
        varying vec2 vUv;

        vec3 fogValue( vec3 worldPos, float time ){
            float wpDist = worldPos.x+worldPos.z*2.0;
            vec2 noiseUV = vec2( ((time*.5+wpDist*.60)), (worldPos.y*.7+time*.25 ));
            vec3 noiseCd = texture2D(noiseTexture,noiseUV).rgb;
            noiseUV=vec2( ((time*.3+wpDist*.55)), (worldPos.x*.5+time*.35 ));
            noiseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,time)).g;
            noiseUV=vec2( ((time*1.2+wpDist*.83)), (worldPos.y+time*.15  ));
            noiseCd.b=texture2D(noiseTexture,noiseUV).b;
            
            return noiseCd;
        }

        #define PROX_WARP 3.14159265358979*.45
        
        void main() {
            vec4 Cd=texture2D(rDiffuse,vUv);
            float depth=texture2D(sceneDepth,vUv).r;
            
            vec3 worldPos = texture2D(scenePos,vUv).rgb;
            float t = -time.x*.003;
            vec3 baseNoiseCd=fogValue( worldPos, t );
            
            float mult=0.0;
            vec3 noiseCd;
            vec3 curNoiseCd;
            vec3 samplePos;
            float samples=4.3;//+sin(time.x*.001);
            float blender;
            float blenderMax=0.0;
            for( int x=0; x<=3; ++x){
                blender=( float(x+1) / samples );
                samplePos=worldPos*blender;
                curNoiseCd=fogValue( samplePos, t );
                noiseCd=max(noiseCd, curNoiseCd * blender );
                blenderMax+=blender;
            }
            noiseCd += baseNoiseCd*.2;
            mult= noiseCd.x*noiseCd.y*noiseCd.z*1.2;
            //mult*=mult;
            
            // Distance Mapping
            float proxWarp= cos(( vUv.x-.5 ) * PROX_WARP*ratio );
            float mDepth= pow( depth, 28.*proxWarp );
            
            float fogDap= max(0.0, 1.0-mDepth);
            fogDap=1.0-fogDap*fogDap;
            mult*=max(0.0, (worldPos.y-0.04)*1.65) * fogMult.x * fogDap ;
            
            
            Cd.rgb= mix( Cd.rgb, vec3(mult*.7), mult)-mult*.35;
 
            vec3 bloomCd=texture2D(bloomTexture,vUv).rgb;
            Cd.rgb+= bloomCd;
            Cd.rgb*=exposure;
            
            // Proximity Draw Over
            float dProx=  ((mDepth-.5)*-10.);
            dProx= max(0.0, (1.0-dProx)*step( 0., dProx));
            float yProxMult= 1.0-min(1.0, max(0.0, (worldPos.y-.5 )*1000.));
            dProx*= dProx* yProxMult * proximityMult.x;
            vec3 proxCd = (vec3(.5,.5,.2)*dProx)*.5;
            Cd.rgb+=proxCd*mult;
            
            Cd.a=1.0;
            gl_FragColor = Cd;
    }`,l}function Sa(){let l=A();return l+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D rDiffuse;
        uniform sampler2D bloomTexture;
        uniform sampler2D sceneDepth;
        uniform sampler2D scenePos;
        uniform sampler2D noiseTexture;
        uniform vec2 time;
        uniform vec2 fogMult;
        uniform vec2 proximityMult;
        uniform vec2 lookAtPerc;
        uniform vec2 resUV;
        uniform float ratio;
        uniform float exposure;
        varying vec2 vUv;

        #define PROX_WARP 3.14159265358979*.45

        void main() {
            vec4 Cd=texture2D(rDiffuse,vUv);
            float depth=texture2D(sceneDepth,vUv).r;
            
            vec3 worldPos = texture2D(scenePos,vUv).rgb;
            float wpDist = worldPos.x+worldPos.z*2.0;
            float t = -time.x*.003;
            
            vec2 noiseUV = vec2( ((t*.5+wpDist*.60)), (worldPos.y*.7+t*.25 ));
            vec3 noiseCd = texture2D(noiseTexture,noiseUV).rgb;
            noiseUV=vec2( ((t*.3+wpDist*.55)), (worldPos.x*.5+t*.35 ));
            noiseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,t)).g;
            noiseUV=vec2( ((t*1.2+wpDist*.83)), (worldPos.y+t*.15  ));
            noiseCd.b=texture2D(noiseTexture,noiseUV).b;
            
            
            // Distance Mapping
            float proxWarp= cos(( vUv.x-.5 ) * PROX_WARP*ratio );
            float mDepth= pow( depth, 28.*proxWarp );
            
            float fogDap= max(0.0, 1.0-mDepth);
            fogDap=1.0-fogDap*fogDap;
            float mult=noiseCd.x*noiseCd.y*noiseCd.z*1.3;
            mult*=max(0.0, (worldPos.y-0.04)*1.65) * fogMult.x * fogDap;
            
            
            Cd.rgb= mix( Cd.rgb, vec3(mult), mult)-mult*.4;
 
            vec3 bloomCd=texture2D(bloomTexture,vUv).rgb;
            Cd.rgb+= bloomCd;
            Cd.rgb*=exposure;
            
            // Proximity Draw Over
            float dProx=  ((mDepth-.5)*-10.);
            dProx= max(0.0, (1.0-dProx)*step( 0., dProx));
            float yProxMult= 1.0-min(1.0, max(0.0, (worldPos.y-.5 )*1000.));
            dProx*= dProx* yProxMult * proximityMult.x;
            vec3 proxCd = (vec3(.5,.5,.2)*dProx)*.5;
            Cd.rgb+=proxCd*mult;
            
            Cd.a=1.0;
            gl_FragColor = Cd;
        }`,l}function Ta(){let l=A();return l+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D rDiffuse;
        uniform sampler2D bloomTexture;
        uniform sampler2D sceneDepth;
        uniform vec2 time;
        uniform vec2 proximityMult;
        uniform vec2 lookAtPerc;
        uniform vec2 resUV;
        uniform float ratio;
        uniform float exposure;
        varying vec2 vUv;

        #define PROX_WARP 3.14159265358979*.4
        #define PI 3.14159265358979
        
        vec3 boostHighs( vec3 Cd ){
            float sat=max(max(Cd.r,Cd.g),Cd.b) - min(min(Cd.r,Cd.g),Cd.b);
            sat=(1.0-sat);
            sat=1.0-sat*sat;
            Cd+=Cd*sat;
            return Cd;
        }
        
        vec3 boostMids( vec3 Cd ){
            float sat=max(max(Cd.r,Cd.g),Cd.b) - min(min(Cd.r,Cd.g),Cd.b);
            sat=sin( sat*PI );
            Cd+=Cd*sat;
            return Cd;
        }
        
        void main() {
            vec4 Cd=texture2D(rDiffuse,vUv);
            vec2 uv=vUv;
            
            vec3 bloomCd=texture2D(bloomTexture,uv).rgb;
            bloomCd= mix( boostHighs(Cd.rgb), bloomCd,  step( 0.01, length( bloomCd )) );
            
            Cd.rgb+= bloomCd;

            // Proximity Draw Over
            float depth=texture2D(sceneDepth,vUv).r;
            
            // Distance Mapping
            float proxWarp= cos(( vUv.x-.5 ) * PROX_WARP*ratio );
            float mDepth= pow( depth, 28.*proxWarp );
            
            // Proximity Draw Over
            float dProx=  ((mDepth-.5)*-10.);
            dProx= max(0.0, (1.0-dProx)*step( 0., dProx));
            dProx*= dProx * proximityMult.x;
            vec3 proxCd = (vec3(.5,.5,.2)*dProx)*.5;
            Cd.rgb+=proxCd;
            Cd.r=1.0;
            Cd.a=1.0;
            gl_FragColor = Cd;
        }`,l}var is={};_t(is,{bgScreenFrag:()=>Ea,bgScreenVert:()=>wa,skyObjectFrag:()=>Aa,skyObjectVert:()=>Ca});function wa(){let l=A();return l+=`
    uniform vec2 time;
    
    varying vec2 vUv;
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    varying vec3 vSunPos;
    
    void main(){
        vUv=uv;
        
        mat4 pvMat=projectionMatrix * viewMatrix;
        pvMat[3] = vec4(.0, .0, .0, 1.0);
        mat3 pvRot = inverse( mat3( pvMat ) );
        vCamNormal= pvRot * vec3( position*.2 + vec3(.0, .0, 1.0));
        vWorldNormal= normalize( pvRot[2] *vec3(1.,0.,1.));
        vWorldCross= normalize( pvRot[0]*vec3(1.,0.,1.));
        
        float timeRate = time.x * .1;
        vec3 sunPos = normalize( vec3(.3, 1.0, 1.0) );
        vec3 sunRef = sunPos;
        sunPos.y= sin(timeRate) * sunRef.y + cos(timeRate)*sunRef.z;
        sunPos.z= sin(timeRate) * sunRef.z - cos(timeRate)*sunRef.y;
        sunPos.x = sin( timeRate ) * .1;
        
        vSunPos = normalize( sunPos );
        
        vec4 modelViewPosition= vec4(position*2.0 + vec3(.0, .0, 1.0), 1.0);
        gl_Position = modelViewPosition;
    }`,l}function Ea(){let l=A();return l+=`
    uniform sampler2D noiseTexture;
    varying vec2 vUv;
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    varying vec3 vSunPos;
    
    void main(){
        vec4 Cd=vec4( vec3(1.0, .10, .10), 1.0);
        
        float sunDot = dot( vSunPos, vCamNormal )*.5 +.5;
        sunDot *= max(0.0, dot( vSunPos, vec3(.0, 1.0, .0)) );
        
        vec2 xOffset = vec2( .0, .0);
        vec3 nCd=texture2D(noiseTexture,vUv*.1+vSunPos.zy*vec2(.15,.22) + xOffset ).rgb;
        nCd*=texture2D(noiseTexture,vUv*.1+vSunPos.yx*.2).rgb;
        sunDot *= nCd.x*nCd.y*nCd.z;
        nCd= vec3( length( nCd ) );
        
        float mixVal= min(1.0, sunDot+(1.-(vWorldNormal.y*.5+.5)));
        Cd.rgb= mix(vec3(0.0, .20, 1.0)+nCd*vWorldNormal.y, vec3(.0, .0, .0), mixVal);
        Cd.rgb=mix( vec3(.0), Cd.rgb, vWorldNormal.y );
        Cd.rgb=vec3(mix( vWorldNormal, vWorldCross, step(.4, vUv.x)));
        Cd.rgb=vec3(mix( vWorldCross, Cd.rgb, step(vUv.y,.9)));
        gl_FragColor=Cd;
    }`,l}function Ca(){let l=A();return l+=`
    uniform float camFar;
    uniform vec2 resUV;
    
    varying vec2 vUv;
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    void main(){
        vUv=uv;
        vLocalPos=position;
        
        vec3 pos = position;
        vec4 modelViewPosition=projectionMatrix * vec4(mat3(viewMatrix)*normalize(pos)*camFar, 1.0);
        gl_Position = modelViewPosition;
        
        vWorldPos = modelViewPosition;
        
    }`,l}function Aa(l=Jr.OFF){let e=A();return e+=`     
    uniform sampler2D diffuse;
    uniform sampler2D envDiffuse;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float camNear;
    uniform float camFar;
    uniform vec2 resUV;

    uniform float rate;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    #define PI 3.14159265358979323

    float fitDepth( float zDepth ){
        float viewZ = ( camNear * camFar ) / ( ( camFar - camNear ) * zDepth - camFar );
        return ( viewZ + camNear ) / ( camNear - camFar );
    }
    
    void main(){
        vec2 uv=vUv;
        vec2 screenUV=(vec2(vWorldPos.xy/vWorldPos.w))*.5+.5;
        vec4 Cd=texture2D(diffuse,uv);
  `,l==Jr.VAPOR&&(e+=`

        
        vec3 lPos = vLocalPos;
        lPos.y = abs(lPos.y)*0.05;

        float t = time.x*.6;

        vec2 nUv =  vec2(vUv.x*0.20, vUv.y - t*.0065  - lPos.y );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = ( nUv+noiseCd.rg*(noiseCd.b) + t*.02);
        noiseCd = texture2D( noiseTexture, nUv ).rgb;
        noiseCd.rg = noiseCd.rg*2.0-1.0;
        
        float zFrag = texture2D( envDiffuse, screenUV ).x;
        float depth = fitDepth( zFrag );
        float stencil = zFrag==1.0 ? 1.0 : 0.0;
        
        float reachDepth = 0.0 ;
        

        vec2 baseUV=screenUV;
        vec2 curUV=vec2(0.0);
        float curDepth=0.0;
        float curPerc = 0.0;
        float dist = 11.0;
        float blendStep = .4;
        float blend = 0.0;
        float uvShift=0.0;
        for(int s=0; s<5; ++s){
            uvShift = mix(noiseCd.r, noiseCd.g, (noiseCd.b+float(s)*193.5247))*15.0;
            curUV = baseUV+vec2(0.0,resUV.y*-(dist+uvShift)  - t*.005 );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = fitDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.00 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep;
            dist+=dist*dot(noiseCd.rgb, vec3(0.0,0.0,1.0));
        }
        reachDepth *= blend*stencil*3.0;

        vec3 normPos = normalize(vLocalPos);
        normPos.y = 1.0-min(1.0,(normPos.y)*2.0);
        normPos.y = normPos.y*normPos.y*normPos.y;
        depth = clamp(reachDepth+normPos.y, 0.0, 1.0)*.1;
        
        float fogMixer = (Cd.r+Cd.g+Cd.b) - (fogColor.r+fogColor.g+fogColor.b) ;
        vec3 toFogColor = mix( fogColor, Cd.rgb, step(0.0, fogMixer) );
        float blender = (sin(noiseCd.r*PI+t+uv.x))*max(0.0,1.0-(depth+fogMixer))*.1 ;
        vec3 baseColor = (toFogColor-min(1.0,blender+ depth*10.0)) ;
        
        
        Cd.rgb = mix(Cd.rgb, baseColor, depth);

    `),e+=`

        gl_FragColor=Cd;
    }`,e}var ns={animated:$r,core:Kr,objects:Qr,particles:es,rendering:ts,scene:is};var je=class{constructor(e=null,t="particles"){this.name=t,this.room=e,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new w(0,0),this.position=new g(0,0,0),this.atlasPath="sprite_dustLiquid.png",this.atlasPath="sprite_dustAtlas.png"}build(e=30,t=6,i=4,n=null){n||(n=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(e,t,i,n)}setPosition(...e){e.length===1?this.position=e[0]:this.position=new g(...e),this.points&&this.points.position.copy(this.position)}addToScene(e=30,t=6,i=null,n=4,r=[[0,0]],s=!1){this.count=e,this.pscale.x=t*this.room.pxlEnv.pxlQuality.screenResPerc,this.isInternalTexture=!1;let a=null;s?(a=this.atlasRandomGen,r=n):a=this.atlasArrayPicker,i||(i=this.newMaterial());let o=[],c=[],h=[];for(let v=0;v<e;++v)o.push(0,0,0),c.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),h.push(...a(r));let u=new U(o,3),p=new U(c,4),d=new U(h,2),m=new Q;m.setAttribute("position",u),m.setAttribute("seeds",p),m.setAttribute("atlas",d);let f=new Qt(m,i);return f.sortParticles=!1,f.frustumCulled=!1,this.room.scene.add(f),f.layers.set(1),f.pBaseScale=t,this.room.geoList[this.name]=f,this.geometry=m,this.material=i,this.points=f,f.position.copy(this.position),f}setUserHeight(e){this.pxlEnv.pxlCamera.userScale=e}atlasRandomGen(e=4,t=2){let i=1/e;return Array.from({length:t}).map(()=>Math.floor(Math.random()*648405.71%e)*i)}atlasRandomList(e=4,t=4,i=2){return Array.from({length:e}).map(n=>this.atlasRandomGen(t,i))}atlasArrayPicker(e){return e[Math.floor(Math.random()*92314.75%e.length)]}dupeArray(e,t){return Array.from({length:t}).fill(e)}elementDuplicator(e,t=4){return e.map(i=>this.dupeArray(i,t)).flat(1)}findLightPositions(){let e=[],t=0;return this.room.lightList.hasOwnProperty("PointLight")&&(t=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(i=>{e.push(i.position.clone())})),e}setAtlasPath(e){this.atlasPath=e,this.isInternalTexture=!1}useInternalAsset(e){this.atlasPath=e,this.isInternalTexture=!0}newMaterial(e=!0){let t=this.findLightPositions(),i={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:t}},n=this.room.pxlFile.pxlShaderBuilder(i,Ot(t.length),Bt());return n.side=ve,n.transparent=!0,this.isInternalTexture?n.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:se,minFilter:De}):n.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:se,minFilter:De}),n.uniforms.noiseTexture.value=this.room.softNoiseTexture,n.depthTest=!0,n.depthWrite=!1,e&&(this.room.materialList[this.name]=n),n}};var mi=class extends je{constructor(e=null,t="billowSmoke"){super(e,t),this.name=t,this.room=e}build(e=50,t=56,i=4,n=null){n||(n=[...super.dupeArray([0,0],4),...super.dupeArray([.25,0],4),...super.dupeArray([.5,0],2),...super.dupeArray([.5,.25],2),...super.dupeArray([.5,.5],2),...super.dupeArray([.5,.75],2),...super.dupeArray([.75,.75],4),...super.dupeArray([.75,.25],3),...super.dupeArray([.75,.25],3)]);let r={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:.8},rate:{type:"f",value:2.85}},s=this.room.pxlFile.pxlShaderBuilder(r,Zn(),Jn());s.side=ve,s.transparent=!0,s.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:se,minFilter:De}),s.uniforms.noiseTexture.value=this.room.softNoiseTexture,s.depthTest=!0,s.depthWrite=!1,this.room.materialList[this.name]=s,super.addToScene(e,t,s,i,n)}};var fi=class extends je{constructor(e=null,t="emberWisps"){super(e,t),this.name=t,this.room=e}build(e=30,t=6,i=4,n=null){n||(n=super.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4));let r={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:5.5}},s=this.room.pxlFile.pxlShaderBuilder(r,qn(),Yn());s.side=ve,s.transparent=!0,s.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:se,minFilter:De}),s.uniforms.noiseTexture.value=this.room.softNoiseTexture,s.depthTest=!0,s.depthWrite=!1,this.room.materialList[this.name]=s,super.addToScene(e,t,s,i,n)}};var gi=class extends je{constructor(e=null,t="floatingDust"){super(e,t),this.name=t,this.room=e}build(e=1e3,t=7,i=120,n=[0,0,0],r=[0,1],s=null,a=!0){s||(s=[...super.dupeArray([0,0],4),...super.dupeArray([.25,0],4),...super.dupeArray([.5,0],2),...super.dupeArray([.5,.25],2),...super.dupeArray([.5,.5],2),...super.dupeArray([.5,.75],2),...super.dupeArray([.75,.75],4),...super.dupeArray([.75,.25],3),...super.dupeArray([.75,.25],3)]);let o=super.findLightPositions();r=new w(r[0],r[1]),n=new g(n[0],n[1],n[2]);let c={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:n},windDir:{type:"v",value:r},lightPos:{value:o}},h=this.room.pxlFile.pxlShaderBuilder(c,Ot(o.length,i),Bt());h.side=ve,h.transparent=!0,this.isInternalTexture?h.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:se,minFilter:De}):h.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:se,minFilter:De}),h.uniforms.noiseTexture.value=this.room.softNoiseTexture,h.depthTest=!0,h.depthWrite=!1,this.room.materialList[this.name]=h,super.addToScene(e,t,h,4,s,a)}};var rs={pxlParticles:{BillowSmoke:mi,EmberWisps:fi,FloatingDust:gi}};var vi=class{constructor(e="CampfireEnvironment",t=null,i=null,n=null,r=null,s=null){this.roomName=e,this.pxlFile=null,this.pxlUtils=null,this.pxlAnim=null,this.pxlColliders=null,this.pxlDevice=null,this.pxlEnv=null,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=t+"Assets/",this.mobile=!1,this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animFile=this.assetPath+"Campfire_RabbitDruidA_anim.fbx",this.animClips={},this.animMixer=null,this.spiralizerUniforms={},this.materialList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new g(0,0,-30),this.camThumbLookAt=new g(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new g(0,0,0),this.cameraAimTarget=new de(0,0,0),this.camHoldWarpPos=!0,this.camLocation={},this.pxlCamFOV={PC:60,MOBILE:80},this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new W(.01,.02,.05),this.fogExp=7e-4,this.fog=new mt(this.fogColor,this.fogExp),this.userAvatarGroup=new ei,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new g(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new w(0,0),this.msRunner=i,this.camera=n,this.autoCamPaths={},this.scene=r,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.particleList={},this.enableRaycast=!1,this.hasHoverables=!1,this.hoverableList=[],this.hoverableObj=null,this.hasClickables=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderHashMap={},this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.hasPortalExit=!1,this.portalList={},this.hasRoomWarp=!1,this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.hasHelpers=!1,this.helperObjects={},this.currentShader=null}setDependencies(e){this.pxlEnv=e,this.pxlFile=e.pxlFile,this.pxlAnim=e.pxlAnim,this.pxlUtils=e.pxlUtils,this.pxlDevice=e.pxlDevice,this.pxlColliders=e.pxlColliders,this.mobile=e.mobile}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.cloud3dTexture=this.pxlEnv.cloud3dTexture,this.cloud3dTexture.wrapS=et,this.cloud3dTexture.wrapT=et,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture,this.smoothNoiseTexture.wrapS=et,this.smoothNoiseTexture.wrapT=et}start(){this.booted&&this.resetCamera()}step(){this.runTime.x=this.msRunner.x,this.stepColliderHelper(X.FLOOR)}stop(){}resize(e,t){}setUserHeight(e=1){this.pxlEnv.pxlCamera.setUserHeight(e,this.roomName)}resetCamera(){this.pxlEnv.pxlCamera.setTransform(this.camInitPos,this.camInitLookAt)}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(e,t=null){this.geoList.MainRoomWarp.material.map=e}applyRoomPass(e=null){}getName(){return this.roomName}getArtistInfo(){return null}setFog(e){}getShaderList(){let e={};return Object.keys(this.materialList).forEach(i=>{e[i]=i}),e}getCurrentShader(){return this.currentShader||Object.keys(this.materialList)[0]}readShader(e="",t=null){return this.currentShader!=null&&this.materialList[this.currentShader].hasOwnProperty("uniforms")&&(t||(t=new g),this.materialList[this.currentShader].uniforms.sliders.value=t,this.materialList[this.currentShader].needsUpdate=!0),this.currentShader=e,this.materialList[this.currentShader]}setShader(e,t,i){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(n=>{let r=n.material;r.vertexShader=t,r.fragmentShader=i,r.needsUpdate=!0}),this.materialList[this.currentShader].vertexShader=t,this.materialList[this.currentShader].fragmentShader=i,this.materialList[this.currentShader].needsUpdate=!0}castRay(e,t){if(!this.enableRaycast)return;if(!e&&!this.hasHoverables||e&&!this.hasClickables){this.mouseRayHits=[];return}let i=[];!e&&this.hasHoverables?i=this.hoverableList:e&&this.hasClickables&&(i=this.clickableList);var n=[];if(i.length>0){let r=new w(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(r,this.pxlEnv.pxlCamera.camera),n=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(i)}this.mouseRayHits=n}hitColliders(e=[],t=X.FLOOR){e.length!=0}hasColliders(){return this.collidersExist}hasColliderType(e=X.FLOOR){let t=!1;if(!this.hasColliders())return t;switch(e){case X.FLOOR:t=this.colliderActive;break;case X.WALL:t=this.antiColliderActive;break;case X.WALL_TOP:t=this.antiColliderTopActive;break;case X.CEILING:break;case X.PORTAL_WARP:t=this.hasPortalExit;break;case X.ROOM_WARP:t=this.hasRoomWarp;break;case X.ITEM:break;case X.SCRIPTED:break;case X.HOVERABLE:t=this.hasHoverables;break;case X.CLICKABLE:t=this.hasClickables;break}return t}getColliders(e=X.FLOOR){let t=[];if(!this.hasColliders())return t;if(e==X.WALL&&!this.antiColliderActive)return t=this.antiColliderList,t;if(e==X.WALL_TOP&&!this.antiColliderTopActive)return t=this.antiColliderTopList,t;if(e==X.PORTAL_WARP&&!this.hasPortalExit)return t=this.portalList,t;if(e==X.ROOM_WARP&&!this.hasRoomWarp)return t=this.roomWarp,t;if(e==X.HOVERABLE&&!this.hasHoverables)return t=this.hoverableList,t;if(e==X.CLICKABLE&&!this.hasClickables)return t=this.clickableList,t;switch(e){case X.FLOOR:t=[...this.colliderList.noAxis,...this.colliderList[11],...this.colliderList["01"],...this.colliderList[10],...this.colliderList["00"]];break;case X.WALL:t=[...this.colliderList.noAxis,...this.colliderList[11],...this.colliderList["01"],...this.colliderList[10],...this.colliderList["00"]];break;case X.WALL_TOP:t=[...this.antiColliderTopList.noAxis,...this.antiColliderTopList[11],...this.antiColliderTopList["01"],...this.antiColliderTopList[10],...this.antiColliderTopList["00"]];break;case X.CEILING:break;case X.PORTAL_WARP:t=this.portalList;break;case X.ROOM_WARP:t=this.roomWarp;break;case X.ITEM:break;case X.SCRIPTED:break;default:break}return t}addColliderHelper(e=X.FLOOR){this.hasColliders()&&(this.helperObjects.hasOwnProperty("colliders")?this.helperObjects.colliders.hasOwnProperty(e)||(this.helperObjects.colliders[e]=null):(this.helperObjects.colliders={},this.helperObjects.colliders[e]=null),this.helperObjects.colliders[e]=this.pxlColliders.buildHelper(this,e),this.helperObjects.colliders[e]&&(this.scene.add(this.helperObjects.colliders[e]),this.hasHelpers=!0))}stepColliderHelper(e=X.FLOOR){!this.hasHelpers||!this.hasColliders()||!this.helperObjects.hasOwnProperty("colliders")||!this.helperObjects.colliders.hasOwnProperty(e)||this.helperObjects.colliders[e].stepHelper(this,e)}toCameraPos(e){if(this.cameraBooted&&this.camLocation.hasOwnProperty(e)){let t=this.mobile?"PositionMobile":"Position",i=this.mobile?"LookAtMobile":"LookAt",n=this.camLocation[e][t],r=this.camLocation[e][i];r||(r=new g(0,0,1),r.addVectors(n,r)),this.pxlEnv.pxlCamera.setTransform(this.camLocation[e][t],this.camLocation[e][i]),this.setUserHeight(this.camInitPos.y)}}fbxPostLoad(){this.toCameraPos("Default");let e=0;if(this.lightList.hasOwnProperty("PointLight")&&(e=this.lightList.PointLight.length),this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(r=>{r.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let r=this.geoList.Sky_EqRect_Mesh.material;r.uniforms&&r.uniforms.envDiffuse&&(r.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var t=new pi(3158064);this.scene.add(t);let i=Object.keys(this.lightList);if(i.length>0&&i.forEach(r=>{this.lightList[r].forEach(s=>{r=="DirectionalLight"?s.castShadow=!1:r=="PointLight"&&(s.shadow.radius=5,s.shadow.receiveShadow=!0,s.shadow.mapSize.width=512,s.shadow.mapSize.height=512,s.shadow.camera.near=.5,s.shadow.camera.far=35,s.shadow.bias=.025,s.shadow.radius=5)})}),this.shaderGeoList)for(let r in this.shaderGeoList){let s=this.shaderGeoList[r];if(s.userData&&s.userData.Shader=="pxlPrincipled"){let a=vt.merge([E.common,E.lights,E.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var n={};n.USE_MAP="";let o={},c=!0,h=s.userData.castShadow==!0||s.userData.receiveShadow==!0,u=!0,p=!1;s.material.map||(p=s.material.color.clone()),s.userData.ShaderParms&&s.userData.ShaderParms!=""&&(o=JSON.parse(s.userData.ShaderParms));let d=this.pxlFile.pxlShaderBuilder(a,Xn(h),jn(o,p,u,c,h,e),n);d.transparent=!1,d.lights=!0,p||(d.uniforms.dTexture.value=s.material.map),d.uniforms.noiseTexture.value=this.cloud3dTexture,d.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,s.material=d,this.materialList[s.name]=d}}}animPostLoad(e,t){if(this.pxlAnim.hasClip(e,this.animInitCycle)){let i=this.pxlAnim.getMixer(e);this.animMixer=i,this.pxlAnim.playClip(e,this.animInitCycle)}else this.animInitCycle=fallback,this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead")}build(){}onMessage(e,t){switch(console.log("Room : "+this.roomName+" - Message Received: "+e),console.log("Message : "+t),e=e.toLowerCase(),e){case"roomwarp":this.roomWarp=t;break;default:case"roommessage":console.log("-- Message Type Not Recognized -- "),console.log("Room : "+this.roomName),console.log("Message Received: "+e),console.log("Message : "+t);break}}};var tv=window.innerWidth,iv=window.innerHeight;var xi=ns.core.shaderHeader;function Ra(){let l=xi();return l+=`
    
    #define USE_TANGENT
    #define USE_ENVMAP
    #define USE_SKINNING

    uniform vec2 eyeBlink;

    attribute vec4 color;

    #ifdef USE_TANGENT
      attribute vec4 tangent;
    #endif


    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    varying vec3 vObjN;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${N.common}
    ${N.skinning_pars_vertex}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 objectTangent = vec3( tangent.xyz );
      vec3 transformedNormal = objectNormal;
      
      
      vec3 blendPos = color.rgb;
      transformed = mix( transformed, blendPos, eyeBlink.x );
      
      
      /***********************************/
      /** Start of THREE Shader Includes **/
      /***********************************/
      ${N.skinbase_vertex}
      ${N.skinnormal_vertex}
      ${N.skinning_vertex}
      /*********************************/
      /** End of THREE Shader Includes **/
      /*********************************/
      
      // TODO : Pullrequest this to Three.js
      objectNormal = normalize(objectNormal);
      objectTangent = normalize( objectTangent );
      
      
      vTan =  objectTangent;
      vN =  objectNormal;
      vPos = transformed;
      
      vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
      vLocalPos = transformed;
      vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix*mvPos;
      
      
      
      }`,l}function Pa(){return`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    
    varying float vFlicker;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };
     
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    
        
    
    void main(){
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      vec4 diffCd=texture2D(diffuseTexture,vUv);
      vec4 areCd=texture2D(areTexture,vUv);
      outCd = diffCd;
      
      
      vec2 animUv = vUv*.01;
      animUv.y -= time.x*.1;
      vec4 nCd=texture2D(noiseTexture,animUv);
      
      // -- -- -- //

      vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
      

      
      //outCd.rgb*=shadowInf;
      
      lights = vec4(0.0, 0.0, 0.0, 1.0);
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refNorm = reflect(  normalize(vPos),  vN );
          vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction,  refNorm ))) * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb );
      outCd.rgb = mix(outCd.rgb, outCd.rgb+(outCd.rgb*.55)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g;

      
      // Add some ambient color to the back rim of the object
      float d = dot( normalize(vec3(0.250, 1.0, 0.50)), -vN )*.5+.35;
      outCd.rgb = mix( outCd.rgb, vec3(.05, .18, .35), d);

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`}function Da(){let l=xi();return l+=`
    #define USE_INSTANCING

    attribute vec4 color;

    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    void main(){
        vUv=uv;
        vCd=color.rgb;
        vCd.g = 1.0-vCd.g;
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;

        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif

        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vPos = position;
        
    }`,l}function La(){let l=xi();return l+=`
        
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vCd;
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        vec3 lights = vec3(0.0, 0.0, 0.0);
        #if NUM_DIR_LIGHTS > 0
          vec2 nUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lightNoise = texture2D(noiseTexture,nUv).r;

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(vPos), vN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)*.5+.5)+.5);
          //
        #endif
        
        
        Cd.rgb += Cd.rgb*lights;

        Cd.a=1.0;
        gl_FragColor=Cd;
    }`,l}function Ia(){let l=xi();return l+=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vToCam;
    
    void main(){
        vUv=uv;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vCd=color;
        
        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif
        
        vPos = pos.xyz;

        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vWorldPos = gl_Position.xyz;
    }`,l}function Ua(){let l=xi();return l+=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;

    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vToCam;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    
    void main(){
        vec4 Cd = vec4( 0.4982, 0.65104, 0.69153, 1.0 );
        Cd.rgb *= vCd;
        
        float d = dot( vN, normalize( vWorldPos ) );
        Cd.rgb*=vec3(d*.2+.8);
        
        Cd.a=1.0-min(1.0,length(vCd)*.2 - (d*0.2-0.1));
        
        float time = -time.x*.2;
        vec2 nUv = fract( vec2( (vUv.x + vPos.x+vPos.z + time )* (1.0+vCd.y*2.5) , vUv.y + vPos.z + time ) );
        vec3 nCd = texture2D(noiseTexture,nUv).rgb;
        
        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vWorldPos;
          vec2 lnUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lnCd = texture2D(noiseTexture,lnUv).r;
          float lightNoise = lnCd;

          vec3 lights = vec3(0.0, 0.0, 0.0);
          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(pos), vLocalN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)*.5+.5)+.5);
          //
          Cd.rgb += Cd.rgb*lights;
          Cd.a = min(1.0, Cd.a+length(lights)*0.5);
        #endif
        
        Cd.rgb += Cd.rgb*nCd*.5;
        Cd.a*= clamp( Cd.a * (2.0-min(nCd.r,min(nCd.g,nCd.b))), 0.0, 1.0 );
        
        
                        
        gl_FragColor=Cd;
    }`,l}var yo=rs.pxlParticles.FloatingDust,Na=class extends vi{constructor(e="SaltFlatsEnvironment",t=null,i=null,n=null,r=null,s=null){super(e,t,i,n,r,s),this.assetPath=t+"Assets/",this.assetPath="./js/pxlRooms/SaltFlatsEnvironment/Assets/",this.sceneFile=this.assetPath+"SaltFlatsEnvironment.fbx",this.animInitCycle="Walk",this.animRigName="RabbitDruidASalt",this.animSource={RabbitDruidASalt:{rig:this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",anim:{Walk:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_walk.fbx"},stateConnections:{Walk:["Walk"]}}},this.animMixer=null,this.materialList={},this.particleList={},this.pxlCamFOV={PC:40,MOBILE:80},this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=1,this.pxlCamFarClipping=1e4,this.fogColor=new W(.45,.65,.72),this.fogExp=7e-4,this.fog=new mt(this.fogColor,this.fogExp),this.perspectiveInstances=160,this.eyeBlinkInf=new w(0,0),this.eyeBlinkMinMaxDelay=[1,7],this.eyeBlinkMinMaxRate=[.06,.1],this.eyeBlinkNext=0,this.eyeBlinkAnim=0,this.eyeBlinkRate=0}init(){super.init()}start(){this.booted&&this.resetCamera();let e=this.animRigName,t=this.geoList.hasOwnProperty("Scripted");if(this.geoList.hasOwnProperty(e)&&t&&this.geoList.Scripted.hasOwnProperty("Offset_loc")){let i=this.geoList.Scripted.Offset_loc,n=this.geoList[e],r=i.position.clone(),s=i.rotation.clone(),a=i.scale.clone();n.position.set(r.x,r.y,r.z),n.rotation.set(s.x,s.y,s.z),n.scale.set(a.x,a.y,a.z)}this.pxlAnim&&this.pxlAnim.hasClip(e,this.animInitCycle)&&this.pxlAnim.playClip(e,this.animInitCycle),t&&this.geoList.Scripted.hasOwnProperty("pokinStick_geo")&&(this.geoList.Scripted.pokinStick_geo.visible=!1)}step(){super.step(),this.animMixer&&(this.pxlAnim.step(this.animRigName),this.checkEyeBlink());let e=this.geoList.Scripted.MovingEng_grp;if(e){e.position.z=3.6*this.msRunner.x%150;let n=150-0;e.position.z>n&&(e.position.z-=n)}}checkEyeBlink(){if(this.eyeBlinkAnim>0){this.eyeBlinkAnim-=this.eyeBlinkRate;let e=(Math.min(.5,this.eyeBlinkAnim)-Math.max(0,this.eyeBlinkAnim-.5))*2;this.eyeBlinkInf.x=e,this.eyeBlinkAnim<=0&&(this.eyeBlinkNext=this.msRunner.x+this.pxlUtils.randomFloat(this.eyeBlinkMinMaxDelay[0],this.eyeBlinkMinMaxDelay[1]))}else this.eyeBlinkInf.x=0,this.msRunner.x>this.eyeBlinkNext&&(this.eyeBlinkRate=this.pxlUtils.randomFloat(this.eyeBlinkMinMaxRate[0],this.eyeBlinkMinMaxRate[1]),this.eyeBlinkAnim=1);this.materialList.RabbitDruidA.uniforms.eyeBlink.value=this.eyeBlinkInf}fbxPostLoad(){super.fbxPostLoad(),this.geoList.hasOwnProperty("lights")&&this.geoList.lights.forEach(n=>{n.name=="dirLight_key_lit"?n.castShadow=!0:n.castShadow=!1});let e="floatingDust";this.particleList[e]=new yo(this,e);let t=this.assetPath+"sprite_dustLiquid.png";this.particleList[e].setAtlasPath(t),this.particleList[e].build(1e3,10,120,[-40,-10,0],[0,5],[[.25,0],[.25,.25]],!1);let i=this.materialList.TerraceBasin_geo;i&&i.uniforms.map&&(i.uniforms.map.minFilter=Hn,i.uniforms.map.magFilter=Hn,i.uniforms.map.value.encoding=Yt),this.booted=!0}animPostLoad(e){if(this.pxlAnim.hasClip(e,this.animInitCycle)){let i=this.pxlAnim.getMixer(e);this.animMixer=i,this.pxlAnim.playClip(e,this.animInitCycle)}else this.animInitCycle=fallback,this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");let t=this.pxlAnim.getMesh(e);if(t){let i=t.material;i.side=ve;let n=this.setSkinnedMaterial(t,Ra(),Pa());this.materialList.RabbitDruidA=n}}setSkinnedMaterial(e,t=null,i=null){let n=vt.merge([E.common,E.lights,{diffuseTexture:{type:"t",value:null},areTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},eyeBlink:{type:"v2",value:this.eyeBlinkInf},mult:{type:"f",value:1}}]);n.diffuseTexture.value=e.material.map,n.areTexture.value=this.pxlUtils.loadTexture(this.assetPath+"RabbitDruidA/RabbitDruidA_lowRes_ARE.jpg"),n.noiseTexture.value=this.cloud3dTexture,n.noiseTexture.value=this.cloud3dTexture;let r=this.pxlFile.pxlShaderBuilder(n,t,i);return r.skinning=!0,r.side=ve,r.lights=!0,e.material=r,r}build(){let e=this.animRigName,t=this.pxlFile.loadAnimFBX(this,e,this.animSource[e].rig,this.animSource[e].anim,this.animSource[e].stateConnections),i=vt.merge([E.lights,{noiseTexture:{type:"t",value:null},fogColor:{type:"c",value:this.fogColor}}]);i.noiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg");let n=this.pxlFile.pxlShaderBuilder(i,Da(),La());n.side=Lt,n.lights=!0,this.materialList.TerraceBasin_geo=n;let r=vt.merge([E.lights,{noiseTexture:{type:"t",value:null}}]);r.noiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg");let s=this.pxlFile.pxlShaderBuilder(r,Ia(),Ua());return s.side=ve,s.lights=!0,this.materialList.SalioaPlant_geo=s,this.pxlFile.loadRoomFBX(this)}};export{Na as SaltFlatsEnvironment};
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
