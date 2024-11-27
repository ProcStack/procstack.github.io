var jf=Object.defineProperty;var Nn=(t,i)=>{for(var n in i)jf(t,n,{get:i[n],enumerable:!0})};Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t});Math.sign===void 0&&(Math.sign=function(t){return t<0?-1:t>0?1:+t});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(t){if(t==null)throw new TypeError("Cannot convert undefined or null to object");let i=Object(t);for(let n=1;n<arguments.length;n++){let s=arguments[n];if(s!=null)for(let r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])}return i});var Xf="118";var qf=0,ru=1,Yf=2;var gc=0,Oh=1,vc=2,ar=3,At=0,ft=1,Ft=2,Fh=1;var Ki=0,cr=1,ms=2,ou=3,au=4,Qf=5,rs=100,Zf=101,Kf=102,lu=103,cu=104,Jf=200,$f=201,ep=202,tp=203,kh=204,Hh=205,ip=206,np=207,sp=208,rp=209,op=210,ap=0,lp=1,cp=2,Ll=3,up=4,hp=5,dp=6,fp=7,Fa=0,pp=1,mp=2,ds=0,gp=1,vp=2,xp=3,yp=4,bp=5,xc=300,yc=301,bc=302,ka=303,wc=304,Yr=306,_c=307,Bt=1e3,Tt=1001,sa=1002,st=1003,pr=1004;var Rl=1005;var Ge=1006,Gh=1007;var Ha=1008;var Qr=1009,wp=1010,_p=1011,gs=1012,Mp=1013,fs=1014,jt=1015,tn=1016,Sp=1017,Ep=1018,Tp=1019,ur=1020,Mc=1021,vi=1022,Ze=1023,Sc=1024,Cp=1025,Pp=Ze,qt=1026,mr=1027,Ec=1028,Ap=1029,Tc=1030,Lp=1031,Rp=1032,Dp=1033,uu=33776,hu=33777,du=33778,fu=33779,pu=35840,mu=35841,gu=35842,vu=35843,Ip=36196,xu=37492,yu=37496,Bp=37808,Up=37809,Op=37810,Fp=37811,kp=37812,Hp=37813,Gp=37814,Np=37815,Vp=37816,zp=37817,Wp=37818,jp=37819,Xp=37820,qp=37821,Yp=36492,Qp=37840,Zp=37841,Kp=37842,Jp=37843,$p=37844,em=37845,tm=37846,im=37847,nm=37848,sm=37849,rm=37850,om=37851,am=37852,lm=37853,cm=2200,um=2201,hm=2202,ra=2300,na=2301,Ja=2302,vs=2400,as=2401,oa=2402,Cc=2500,Nh=2501,dm=0;var Ut=3e3,Fi=3001,Zr=3007,Pc=3002,fm=3003,Vh=3004,zh=3005,Wh=3006,pm=3200,mm=3201,Gs=0,gm=1;var $a=7680;var vm=519,Ga=35044,nn=35048;function ki(){}Object.assign(ki.prototype,{addEventListener:function(t,i){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(i)===-1&&n[t].push(i)},hasEventListener:function(t,i){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(i)!==-1},removeEventListener:function(t,i){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(i);r!==-1&&s.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t)}}});var St=[];for(let t=0;t<256;t++)St[t]=(t<16?"0":"")+t.toString(16);var be={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(St[t&255]+St[t>>8&255]+St[t>>16&255]+St[t>>24&255]+"-"+St[i&255]+St[i>>8&255]+"-"+St[i>>16&15|64]+St[i>>24&255]+"-"+St[n&63|128]+St[n>>8&255]+"-"+St[n>>16&255]+St[n>>24&255]+St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]).toUpperCase()},clamp:function(t,i,n){return Math.max(i,Math.min(n,t))},euclideanModulo:function(t,i){return(t%i+i)%i},mapLinear:function(t,i,n,s,r){return s+(t-i)*(r-s)/(n-i)},lerp:function(t,i,n){return(1-n)*t+n*i},smoothstep:function(t,i,n){return t<=i?0:t>=n?1:(t=(t-i)/(n-i),t*t*(3-2*t))},smootherstep:function(t,i,n){return t<=i?0:t>=n?1:(t=(t-i)/(n-i),t*t*t*(t*(t*6-15)+10))},randInt:function(t,i){return t+Math.floor(Math.random()*(i-t+1))},randFloat:function(t,i){return t+Math.random()*(i-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*be.DEG2RAD},radToDeg:function(t){return t*be.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,i,n,s,r){let o=Math.cos,a=Math.sin,l=o(n/2),c=a(n/2),u=o((i+s)/2),d=a((i+s)/2),h=o((i-s)/2),p=a((i-s)/2),f=o((s-i)/2),m=a((s-i)/2);switch(r){case"XYX":t.set(l*d,c*h,c*p,l*u);break;case"YZY":t.set(c*p,l*d,c*h,l*u);break;case"ZXZ":t.set(c*h,c*p,l*d,l*u);break;case"XZX":t.set(l*d,c*m,c*f,l*u);break;case"YXY":t.set(c*f,l*d,c*m,l*u);break;case"ZYZ":t.set(c*m,c*f,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function z(t=0,i=0){this.x=t,this.y=i}Object.defineProperties(z.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}});Object.assign(z.prototype,{isVector2:!0,set:function(t,i){return this.x=t,this.y=i,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,i){return i!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this},addScaledVector:function(t,i){return this.x+=t.x*i,this.y+=t.y*i,this},sub:function(t,i){return i!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){let i=this.x,n=this.y,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this},clampScalar:function(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this},clampLength:function(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(i,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){let i=this.x-t.x,n=this.y-t.y;return i*i+n*n},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this},lerpVectors:function(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,i){return i===void 0&&(i=0),this.x=t[i],this.y=t[i+1],this},toArray:function(t,i){return t===void 0&&(t=[]),i===void 0&&(i=0),t[i]=this.x,t[i+1]=this.y,t},fromBufferAttribute:function(t,i,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(i),this.y=t.getY(i),this},rotateAround:function(t,i){let n=Math.cos(i),s=Math.sin(i),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function wt(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(wt.prototype,{isMatrix3:!0,set:function(t,i,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=i,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(t){let i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this},extractBasis:function(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},setFromMatrix4:function(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this},multiply:function(t){return this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,i){let n=t.elements,s=i.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],f=n[8],m=s[0],w=s[3],y=s[6],g=s[1],v=s[4],C=s[7],E=s[2],A=s[5],R=s[8];return r[0]=o*m+a*g+l*E,r[3]=o*w+a*v+l*A,r[6]=o*y+a*C+l*R,r[1]=c*m+u*g+d*E,r[4]=c*w+u*v+d*A,r[7]=c*y+u*C+d*R,r[2]=h*m+p*g+f*E,r[5]=h*w+p*v+f*A,r[8]=h*y+p*C+f*R,this},multiplyScalar:function(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this},determinant:function(){let t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return i*o*u-i*a*c-n*r*u+n*a*l+s*r*c-s*o*l},getInverse:function(t,i){i!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");let n=t.elements,s=this.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],d=n[6],h=n[7],p=n[8],f=p*c-u*h,m=u*d-p*l,w=h*l-c*d,y=r*f+o*m+a*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/y;return s[0]=f*g,s[1]=(a*h-p*o)*g,s[2]=(u*o-a*c)*g,s[3]=m*g,s[4]=(p*r-a*d)*g,s[5]=(a*l-u*r)*g,s[6]=w*g,s[7]=(o*d-h*r)*g,s[8]=(c*r-o*l)*g,this},transpose:function(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this},getNormalMatrix:function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},transposeIntoArray:function(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this},setUvTransform:function(t,i,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+i,0,0,1)},scale:function(t,i){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=i,n[4]*=i,n[7]*=i,this},rotate:function(t){let i=Math.cos(t),n=Math.sin(t),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=i*r+n*l,s[3]=i*o+n*c,s[6]=i*a+n*u,s[1]=-n*r+i*l,s[4]=-n*o+i*c,s[7]=-n*a+i*u,this},translate:function(t,i){let n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=i*n[2],n[4]+=i*n[5],n[7]+=i*n[8],this},equals:function(t){let i=this.elements,n=t.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0},fromArray:function(t,i){i===void 0&&(i=0);for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this},toArray:function(t,i){t===void 0&&(t=[]),i===void 0&&(i=0);let n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}});var Vn,Tn={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vn===void 0&&(Vn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Vn.width=t.width,Vn.height=t.height;let n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Vn}return i.width>2048||i.height>2048?i.toDataURL("image/jpeg",.6):i.toDataURL("image/png")}},xm=0;function je(t,i,n,s,r,o,a,l,c,u){Object.defineProperty(this,"id",{value:xm++}),this.uuid=be.generateUUID(),this.name="",this.image=t!==void 0?t:je.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=i!==void 0?i:je.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:Tt,this.wrapT=s!==void 0?s:Tt,this.magFilter=r!==void 0?r:Ge,this.minFilter=o!==void 0?o:Ha,this.anisotropy=c!==void 0?c:1,this.format=a!==void 0?a:Ze,this.internalFormat=null,this.type=l!==void 0?l:Qr,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u!==void 0?u:Ut,this.version=0,this.onUpdate=null}je.DEFAULT_IMAGE=void 0;je.DEFAULT_MAPPING=xc;je.prototype=Object.assign(Object.create(ki.prototype),{constructor:je,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let s=this.image;if(s.uuid===void 0&&(s.uuid=be.generateUUID()),!i&&t.images[s.uuid]===void 0){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)r.push(Tn.getDataURL(s[o]))}else r=Tn.getDataURL(s);t.images[s.uuid]={uuid:s.uuid,url:r}}n.image=s.uuid}return i||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bt:t.x=t.x-Math.floor(t.x);break;case Tt:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bt:t.y=t.y-Math.floor(t.y);break;case Tt:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(je.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function ke(t=0,i=0,n=0,s=1){this.x=t,this.y=i,this.z=n,this.w=s}Object.defineProperties(ke.prototype,{width:{get:function(){return this.z},set:function(t){this.z=t}},height:{get:function(){return this.w},set:function(t){this.w=t}}});Object.assign(ke.prototype,{isVector4:!0,set:function(t,i,n,s){return this.x=t,this.y=i,this.z=n,this.w=s,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setW:function(t){return this.w=t,this},setComponent:function(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this},add:function(t,i){return i!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},addVectors:function(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this},addScaledVector:function(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this},sub:function(t,i){return i!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},subVectors:function(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},applyMatrix4:function(t){let i=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*i+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*i+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*i+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*i+o[7]*n+o[11]*s+o[15]*r,this},divideScalar:function(t){return this.multiplyScalar(1/t)},setAxisAngleFromQuaternion:function(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this},setAxisAngleFromRotationMatrix:function(t){let i,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],m=l[2],w=l[6],y=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-m)<.01&&Math.abs(f-w)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+m)<.1&&Math.abs(f+w)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let v=(c+1)/2,C=(p+1)/2,E=(y+1)/2,A=(u+h)/4,R=(d+m)/4,O=(f+w)/4;return v>C&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=R/n):C>E?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=A/s,r=O/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=O/r),this.set(n,s,r,i),this}let g=Math.sqrt((w-f)*(w-f)+(d-m)*(d-m)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(w-f)/g,this.y=(d-m)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+y-1)/2),this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},clamp:function(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this},clampScalar:function(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this},clampLength:function(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(i,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this},lerpVectors:function(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},fromArray:function(t,i){return i===void 0&&(i=0),this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this},toArray:function(t,i){return t===void 0&&(t=[]),i===void 0&&(i=0),t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t},fromBufferAttribute:function(t,i,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function et(t,i,n){this.width=t,this.height=i,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i),n=n||{},this.texture=new je(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=i,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ge,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}et.prototype=Object.assign(Object.create(ki.prototype),{constructor:et,isWebGLRenderTarget:!0,setSize:function(t,i){(this.width!==t||this.height!==i)&&(this.width=t,this.height=i,this.texture.image.width=t,this.texture.image.height=i,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function bu(t,i,n){et.call(this,t,i,n),this.samples=4}bu.prototype=Object.assign(Object.create(et.prototype),{constructor:bu,isWebGLMultisampleRenderTarget:!0,copy:function(t){return et.prototype.copy.call(this,t),this.samples=t.samples,this}});function Ue(t=0,i=0,n=0,s=1){this._x=t,this._y=i,this._z=n,this._w=s}Object.assign(Ue,{slerp:function(t,i,n,s){return n.copy(t).slerp(i,s)},slerpFlat:function(t,i,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],p=r[o+1],f=r[o+2],m=r[o+3];if(d!==m||l!==h||c!==p||u!==f){let w=1-a,y=l*h+c*p+u*f+d*m,g=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let E=Math.sqrt(v),A=Math.atan2(E,y*g);w=Math.sin(w*A)/E,a=Math.sin(a*A)/E}let C=a*g;if(l=l*w+h*C,c=c*w+p*C,u=u*w+f*C,d=d*w+m*C,w===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}t[i]=l,t[i+1]=c,t[i+2]=u,t[i+3]=d},multiplyQuaternionsFlat:function(t,i,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return t[i]=a*f+u*d+l*p-c*h,t[i+1]=l*f+u*h+c*d-a*p,t[i+2]=c*f+u*p+a*h-l*d,t[i+3]=u*f-a*d-l*h-c*p,t}});Object.defineProperties(Ue.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(t){this._w=t,this._onChangeCallback()}}});Object.assign(Ue.prototype,{isQuaternion:!0,set:function(t,i,n,s){return this._x=t,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this},setFromEuler:function(t,i){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=t._x,s=t._y,r=t._z,o=t.order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return i!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(t,i){let n=i/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this},setFromRotationMatrix:function(t){let i=t.elements,n=i[0],s=i[4],r=i[8],o=i[1],a=i[5],l=i[9],c=i[2],u=i[6],d=i[10],h=n+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this},setFromUnitVectors:function(t,i){let s=t.dot(i)+1;return s<1e-6?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()},angleTo:function(t){return 2*Math.acos(Math.abs(be.clamp(this.dot(t),-1,1)))},rotateTowards:function(t,i){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,i/n);return this.slerp(t,s),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this},multiply:function(t,i){return i!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,i)):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,i){let n=t._x,s=t._y,r=t._z,o=t._w,a=i._x,l=i._y,c=i._z,u=i._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this},slerp:function(t,i){if(i===0)return this;if(i===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-i;return this._w=p*o+i*this._w,this._x=p*n+i*this._x,this._y=p*s+i*this._y,this._z=p*r+i*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-i)*u)/c,h=Math.sin(i*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,i){return i===void 0&&(i=0),this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this},toArray:function(t,i){return t===void 0&&(t=[]),i===void 0&&(i=0),t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t},fromBufferAttribute:function(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}});var el=new L,wu=new Ue;function L(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}Object.assign(L.prototype,{isVector3:!0,set:function(t,i,n){return this.x=t,this.y=i,this.z=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,i){return i!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this},addScaledVector:function(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this},sub:function(t,i){return i!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this},multiply:function(t,i){return i!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,i)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this},multiplyVectors:function(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this},applyEuler:function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(wu.setFromEuler(t))},applyAxisAngle:function(t,i){return this.applyQuaternion(wu.setFromAxisAngle(t,i))},applyMatrix3:function(t){let i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this},applyNormalMatrix:function(t){return this.applyMatrix3(t).normalize()},applyMatrix4:function(t){let i=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*o,this},applyQuaternion:function(t){let i=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*i+o*s-a*n,u=l*n+a*i-r*s,d=l*s+r*n-o*i,h=-r*i-o*n-a*s;return this.x=c*l+h*-r+u*-a-d*-o,this.y=u*l+h*-o+d*-r-c*-a,this.z=d*l+h*-a+c*-o-u*-r,this},project:function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},unproject:function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},transformDirection:function(t){let i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this},clampScalar:function(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this},clampLength:function(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(i,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this},lerpVectors:function(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this},cross:function(t,i){return i!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,i)):this.crossVectors(this,t)},crossVectors:function(t,i){let n=t.x,s=t.y,r=t.z,o=i.x,a=i.y,l=i.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this},projectOnVector:function(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)},projectOnPlane:function(t){return el.copy(this).projectOnVector(t),this.sub(el)},reflect:function(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))},angleTo:function(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(t)/i;return Math.acos(be.clamp(n,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){let i=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return i*i+n*n+s*s},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},setFromSphericalCoords:function(t,i,n){let s=Math.sin(i)*t;return this.x=s*Math.sin(n),this.y=Math.cos(i)*t,this.z=s*Math.cos(n),this},setFromCylindrical:function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},setFromCylindricalCoords:function(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this},setFromMatrixPosition:function(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this},setFromMatrixScale:function(t){let i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=s,this},setFromMatrixColumn:function(t,i){return this.fromArray(t.elements,i*4)},setFromMatrix3Column:function(t,i){return this.fromArray(t.elements,i*3)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,i){return i===void 0&&(i=0),this.x=t[i],this.y=t[i+1],this.z=t[i+2],this},toArray:function(t,i){return t===void 0&&(t=[]),i===void 0&&(i=0),t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t},fromBufferAttribute:function(t,i,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});var zn=new L,ii=new de,ym=new L(0,0,0),bm=new L(1,1,1),Vi=new L,xo=new L,kt=new L;function de(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(de.prototype,{isMatrix4:!0,set:function(t,i,n,s,r,o,a,l,c,u,d,h,p,f,m,w){let y=this.elements;return y[0]=t,y[4]=i,y[8]=n,y[12]=s,y[1]=r,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=d,y[14]=h,y[3]=p,y[7]=f,y[11]=m,y[15]=w,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new de().fromArray(this.elements)},copy:function(t){let i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this},copyPosition:function(t){let i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this},extractBasis:function(t,i,n){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this},extractRotation:function(t){let i=this.elements,n=t.elements,s=1/zn.setFromMatrixColumn(t,0).length(),r=1/zn.setFromMatrixColumn(t,1).length(),o=1/zn.setFromMatrixColumn(t,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*o,i[9]=n[9]*o,i[10]=n[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this},makeRotationFromEuler:function(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let i=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*d,f=a*u,m=a*d;i[0]=l*u,i[4]=-l*d,i[8]=c,i[1]=p+f*c,i[5]=h-m*c,i[9]=-a*l,i[2]=m-h*c,i[6]=f+p*c,i[10]=o*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,f=c*u,m=c*d;i[0]=h+m*a,i[4]=f*a-p,i[8]=o*c,i[1]=o*d,i[5]=o*u,i[9]=-a,i[2]=p*a-f,i[6]=m+h*a,i[10]=o*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,f=c*u,m=c*d;i[0]=h-m*a,i[4]=-o*d,i[8]=f+p*a,i[1]=p+f*a,i[5]=o*u,i[9]=m-h*a,i[2]=-o*c,i[6]=a,i[10]=o*l}else if(t.order==="ZYX"){let h=o*u,p=o*d,f=a*u,m=a*d;i[0]=l*u,i[4]=f*c-p,i[8]=h*c+m,i[1]=l*d,i[5]=m*c+h,i[9]=p*c-f,i[2]=-c,i[6]=a*l,i[10]=o*l}else if(t.order==="YZX"){let h=o*l,p=o*c,f=a*l,m=a*c;i[0]=l*u,i[4]=m-h*d,i[8]=f*d+p,i[1]=d,i[5]=o*u,i[9]=-a*u,i[2]=-c*u,i[6]=p*d+f,i[10]=h-m*d}else if(t.order==="XZY"){let h=o*l,p=o*c,f=a*l,m=a*c;i[0]=l*u,i[4]=-d,i[8]=c*u,i[1]=h*d+m,i[5]=o*u,i[9]=p*d-f,i[2]=f*d-p,i[6]=a*u,i[10]=m*d+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this},makeRotationFromQuaternion:function(t){return this.compose(ym,t,bm)},lookAt:function(t,i,n){let s=this.elements;return kt.subVectors(t,i),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Vi.crossVectors(n,kt),Vi.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Vi.crossVectors(n,kt)),Vi.normalize(),xo.crossVectors(kt,Vi),s[0]=Vi.x,s[4]=xo.x,s[8]=kt.x,s[1]=Vi.y,s[5]=xo.y,s[9]=kt.y,s[2]=Vi.z,s[6]=xo.z,s[10]=kt.z,this},multiply:function(t,i){return i!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,i)):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,i){let n=t.elements,s=i.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],f=n[2],m=n[6],w=n[10],y=n[14],g=n[3],v=n[7],C=n[11],E=n[15],A=s[0],R=s[4],O=s[8],V=s[12],k=s[1],b=s[5],_=s[9],M=s[13],T=s[2],S=s[6],P=s[10],D=s[14],U=s[3],H=s[7],W=s[11],G=s[15];return r[0]=o*A+a*k+l*T+c*U,r[4]=o*R+a*b+l*S+c*H,r[8]=o*O+a*_+l*P+c*W,r[12]=o*V+a*M+l*D+c*G,r[1]=u*A+d*k+h*T+p*U,r[5]=u*R+d*b+h*S+p*H,r[9]=u*O+d*_+h*P+p*W,r[13]=u*V+d*M+h*D+p*G,r[2]=f*A+m*k+w*T+y*U,r[6]=f*R+m*b+w*S+y*H,r[10]=f*O+m*_+w*P+y*W,r[14]=f*V+m*M+w*D+y*G,r[3]=g*A+v*k+C*T+E*U,r[7]=g*R+v*b+C*S+E*H,r[11]=g*O+v*_+C*P+E*W,r[15]=g*V+v*M+C*D+E*G,this},multiplyScalar:function(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this},determinant:function(){let t=this.elements,i=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],f=t[3],m=t[7],w=t[11],y=t[15];return f*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*p-n*l*p)+m*(+i*l*p-i*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+w*(+i*c*d-i*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+y*(-s*a*u-i*l*d+i*a*h+s*o*d-n*o*h+n*l*u)},transpose:function(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this},setPosition:function(t,i,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=n),this},getInverse:function(t,i){i!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");let n=this.elements,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],f=s[9],m=s[10],w=s[11],y=s[12],g=s[13],v=s[14],C=s[15],E=f*v*h-g*m*h+g*d*w-u*v*w-f*d*C+u*m*C,A=y*m*h-p*v*h-y*d*w+c*v*w+p*d*C-c*m*C,R=p*g*h-y*f*h+y*u*w-c*g*w-p*u*C+c*f*C,O=y*f*d-p*g*d-y*u*m+c*g*m+p*u*v-c*f*v,V=r*E+o*A+a*R+l*O;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/V;return n[0]=E*k,n[1]=(g*m*l-f*v*l-g*a*w+o*v*w+f*a*C-o*m*C)*k,n[2]=(u*v*l-g*d*l+g*a*h-o*v*h-u*a*C+o*d*C)*k,n[3]=(f*d*l-u*m*l-f*a*h+o*m*h+u*a*w-o*d*w)*k,n[4]=A*k,n[5]=(p*v*l-y*m*l+y*a*w-r*v*w-p*a*C+r*m*C)*k,n[6]=(y*d*l-c*v*l-y*a*h+r*v*h+c*a*C-r*d*C)*k,n[7]=(c*m*l-p*d*l+p*a*h-r*m*h-c*a*w+r*d*w)*k,n[8]=R*k,n[9]=(y*f*l-p*g*l-y*o*w+r*g*w+p*o*C-r*f*C)*k,n[10]=(c*g*l-y*u*l+y*o*h-r*g*h-c*o*C+r*u*C)*k,n[11]=(p*u*l-c*f*l-p*o*h+r*f*h+c*o*w-r*u*w)*k,n[12]=O*k,n[13]=(p*g*a-y*f*a+y*o*m-r*g*m-p*o*v+r*f*v)*k,n[14]=(y*u*a-c*g*a-y*o*d+r*g*d+c*o*v-r*u*v)*k,n[15]=(c*f*a-p*u*a+p*o*d-r*f*d-c*o*m+r*u*m)*k,this},scale:function(t){let i=this.elements,n=t.x,s=t.y,r=t.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this},getMaxScaleOnAxis:function(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,s))},makeTranslation:function(t,i,n){return this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this},makeRotationX:function(t){let i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this},makeRotationY:function(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this},makeRotationZ:function(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,i){let n=Math.cos(i),s=Math.sin(i),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this},makeScale:function(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(t,i,n){return this.set(1,i,n,0,t,1,n,0,t,i,1,0,0,0,0,1),this},compose:function(t,i,n){let s=this.elements,r=i._x,o=i._y,a=i._z,l=i._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,f=r*d,m=o*u,w=o*d,y=a*d,g=l*c,v=l*u,C=l*d,E=n.x,A=n.y,R=n.z;return s[0]=(1-(m+y))*E,s[1]=(p+C)*E,s[2]=(f-v)*E,s[3]=0,s[4]=(p-C)*A,s[5]=(1-(h+y))*A,s[6]=(w+g)*A,s[7]=0,s[8]=(f+v)*R,s[9]=(w-g)*R,s[10]=(1-(h+m))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this},decompose:function(t,i,n){let s=this.elements,r=zn.set(s[0],s[1],s[2]).length(),o=zn.set(s[4],s[5],s[6]).length(),a=zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);let c=1/r,u=1/o,d=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,i.setFromRotationMatrix(ii),n.x=r,n.y=o,n.z=a,this},makePerspective:function(t,i,n,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*r/(i-t),c=2*r/(n-s),u=(i+t)/(i-t),d=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this},makeOrthographic:function(t,i,n,s,r,o){let a=this.elements,l=1/(i-t),c=1/(n-s),u=1/(o-r),d=(i+t)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this},equals:function(t){let i=this.elements,n=t.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0},fromArray:function(t,i){i===void 0&&(i=0);for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this},toArray:function(t,i){t===void 0&&(t=[]),i===void 0&&(i=0);let n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}});var _u=new de,Mu=new Ue;function vt(t=0,i=0,n=0,s=vt.DefaultOrder){this._x=t,this._y=i,this._z=n,this._order=s}vt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];vt.DefaultOrder="XYZ";Object.defineProperties(vt.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()}}});Object.assign(vt.prototype,{isEuler:!0,set:function(t,i,n,s){return this._x=t,this._y=i,this._z=n,this._order=s||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},setFromRotationMatrix:function(t,i,n){let s=be.clamp,r=t.elements,o=r[0],a=r[4],l=r[8],c=r[1],u=r[5],d=r[9],h=r[2],p=r[6],f=r[10];switch(i=i||this._order,i){case"XYZ":this._y=Math.asin(s(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-s(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(s(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-s(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(s(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-s(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(t,i,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,i,n)},setFromVector3:function(t,i){return this.set(t.x,t.y,t.z,i||this._order)},reorder:function(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this},toArray:function(t,i){return t===void 0&&(t=[]),i===void 0&&(i=0),t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}});function Ac(){this.mask=1}Object.assign(Ac.prototype,{set:function(t){this.mask=1<<t|0},enable:function(t){this.mask|=1<<t|0},enableAll:function(){this.mask=-1},toggle:function(t){this.mask^=1<<t|0},disable:function(t){this.mask&=~(1<<t|0)},disableAll:function(){this.mask=0},test:function(t){return(this.mask&t.mask)!==0}});var wm=0,Su=new L,Wn=new Ue,Ti=new de,yo=new L,Ks=new L,_m=new L,Mm=new Ue,Eu=new L(1,0,0),Tu=new L(0,1,0),Cu=new L(0,0,1),Sm={type:"added"},Em={type:"removed"};function re(){Object.defineProperty(this,"id",{value:wm++}),this.uuid=be.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DefaultUp.clone();let t=new L,i=new vt,n=new Ue,s=new L(1,1,1);function r(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new wt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=re.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}re.DefaultUp=new L(0,1,0);re.DefaultMatrixAutoUpdate=!0;re.prototype=Object.assign(Object.create(ki.prototype),{constructor:re,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,i){this.quaternion.setFromAxisAngle(t,i)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,i){return Wn.setFromAxisAngle(t,i),this.quaternion.multiply(Wn),this},rotateOnWorldAxis:function(t,i){return Wn.setFromAxisAngle(t,i),this.quaternion.premultiply(Wn),this},rotateX:function(t){return this.rotateOnAxis(Eu,t)},rotateY:function(t){return this.rotateOnAxis(Tu,t)},rotateZ:function(t){return this.rotateOnAxis(Cu,t)},translateOnAxis:function(t,i){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(i)),this},translateX:function(t){return this.translateOnAxis(Eu,t)},translateY:function(t){return this.translateOnAxis(Tu,t)},translateZ:function(t){return this.translateOnAxis(Cu,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(Ti.getInverse(this.matrixWorld))},lookAt:function(t,i,n){t.isVector3?yo.copy(t):yo.set(t,i,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ks,yo,this.up):Ti.lookAt(yo,Ks,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Wn.setFromRotationMatrix(Ti),this.quaternion.premultiply(Wn.inverse()))},add:function(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Em)),this},attach:function(t){return this.updateWorldMatrix(!0,!1),Ti.getInverse(this.matrixWorld),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,i){if(this[t]===i)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,i);if(o!==void 0)return o}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new L),this.updateMatrixWorld(!0),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new Ue),this.updateMatrixWorld(!0),this.matrixWorld.decompose(Ks,t,_m),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new L),this.updateMatrixWorld(!0),this.matrixWorld.decompose(Ks,Mm,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new L),this.updateMatrixWorld(!0);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()},raycast:function(){},traverse:function(t){t(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(t)},traverseAncestors:function(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,i){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON());function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(i){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,i){if(i===void 0&&(i=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}});function sn(){re.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}sn.prototype=Object.assign(Object.create(re.prototype),{constructor:sn,isScene:!0,copy:function(t,i){return re.prototype.copy.call(this,t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this},toJSON:function(t){let i=re.prototype.toJSON.call(this,t);return this.background!==null&&(i.object.background=this.background.toJSON(t)),this.environment!==null&&(i.object.environment=this.environment.toJSON(t)),this.fog!==null&&(i.object.fog=this.fog.toJSON()),i},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ci=[new L,new L,new L,new L,new L,new L,new L,new L],Js=new L,tl=new $t,jn=new L,Xn=new L,qn=new L,zi=new L,Wi=new L,gn=new L,$s=new L,bo=new L,wo=new L,vn=new L;function $t(t,i){this.min=t!==void 0?t:new L(1/0,1/0,1/0),this.max=i!==void 0?i:new L(-1/0,-1/0,-1/0)}Object.assign($t.prototype,{isBox3:!0,set:function(t,i){return this.min.copy(t),this.max.copy(i),this},setFromArray:function(t){let i=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){let u=t[l],d=t[l+1],h=t[l+2];u<i&&(i=u),d<n&&(n=d),h<s&&(s=h),u>r&&(r=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(i,n,s),this.max.set(r,o,a),this},setFromBufferAttribute:function(t){let i=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){let u=t.getX(l),d=t.getY(l),h=t.getZ(l);u<i&&(i=u),d<n&&(n=d),h<s&&(s=h),u>r&&(r=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(i,n,s),this.max.set(r,o,a),this},setFromPoints:function(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i++)this.expandByPoint(t[i]);return this},setFromCenterAndSize:function(t,i){let n=Js.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this},setFromObject:function(t){return this.makeEmpty(),this.expandByObject(t)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new L),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new L),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},expandByObject:function(t){t.updateWorldMatrix(!1,!1);let i=t.geometry;i!==void 0&&(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox),tl.applyMatrix4(t.matrixWorld),this.union(tl));let n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s]);return this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},getParameter:function(t,i){return i===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),i=new L),i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},intersectsSphere:function(t){return this.clampPoint(t.center,Js),Js.distanceToSquared(t.center)<=t.radius*t.radius},intersectsPlane:function(t){let i,n;return t.normal.x>0?(i=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),i<=-t.constant&&n>=-t.constant},intersectsTriangle:function(t){if(this.isEmpty())return!1;this.getCenter($s),bo.subVectors(this.max,$s),jn.subVectors(t.a,$s),Xn.subVectors(t.b,$s),qn.subVectors(t.c,$s),zi.subVectors(Xn,jn),Wi.subVectors(qn,Xn),gn.subVectors(jn,qn);let i=[0,-zi.z,zi.y,0,-Wi.z,Wi.y,0,-gn.z,gn.y,zi.z,0,-zi.x,Wi.z,0,-Wi.x,gn.z,0,-gn.x,-zi.y,zi.x,0,-Wi.y,Wi.x,0,-gn.y,gn.x,0];return!il(i,jn,Xn,qn,bo)||(i=[1,0,0,0,1,0,0,0,1],!il(i,jn,Xn,qn,bo))?!1:(wo.crossVectors(zi,Wi),i=[wo.x,wo.y,wo.z],il(i,jn,Xn,qn,bo))},clampPoint:function(t,i){return i===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),i=new L),i.copy(t).clamp(this.min,this.max)},distanceToPoint:function(t){return Js.copy(t).clamp(this.min,this.max).sub(t).length()},getBoundingSphere:function(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(Js).length()*.5,t},intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},applyMatrix4:function(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});function il(t,i,n,s,r){for(let o=0,a=t.length-3;o<=a;o+=3){vn.fromArray(t,o);let l=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),c=i.dot(vn),u=n.dot(vn),d=s.dot(vn);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}var Tm=new $t;function Hi(t,i){this.center=t!==void 0?t:new L,this.radius=i!==void 0?i:-1}Object.assign(Hi.prototype,{set:function(t,i){return this.center.copy(t),this.radius=i,this},setFromPoints:function(t,i){let n=this.center;i!==void 0?n.copy(i):Tm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(t){return t.distanceTo(this.center)-this.radius},intersectsSphere:function(t){let i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i},intersectsBox:function(t){return t.intersectsSphere(this)},intersectsPlane:function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},clampPoint:function(t,i){let n=this.center.distanceToSquared(t);return i===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),i=new L),i.copy(t),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i},getBoundingBox:function(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new $t),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)},applyMatrix4:function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},translate:function(t){return this.center.add(t),this},equals:function(t){return t.center.equals(this.center)&&t.radius===this.radius}});var Pi=new L,nl=new L,_o=new L,ji=new L,sl=new L,Mo=new L,rl=new L;function Ns(t,i){this.origin=t!==void 0?t:new L,this.direction=i!==void 0?i:new L(0,0,-1)}Object.assign(Ns.prototype,{set:function(t,i){return this.origin.copy(t),this.direction.copy(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,i){return i===void 0&&(console.warn("THREE.Ray: .at() target is now required"),i=new L),i.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:function(t){return this.origin.copy(this.at(t,Pi)),this},closestPointToPoint:function(t,i){i===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),i=new L),i.subVectors(t,this.origin);let n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(t){let i=Pi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Pi.copy(this.direction).multiplyScalar(i).add(this.origin),Pi.distanceToSquared(t))},distanceSqToSegment:function(t,i,n,s){nl.copy(t).add(i).multiplyScalar(.5),_o.copy(i).sub(t).normalize(),ji.copy(this.origin).sub(nl);let r=t.distanceTo(i)*.5,o=-this.direction.dot(_o),a=ji.dot(this.direction),l=-ji.dot(_o),c=ji.lengthSq(),u=Math.abs(1-o*o),d,h,p,f;if(u>0)if(d=o*l-a,h=o*a-l,f=r*u,d>=0)if(h>=-f)if(h<=f){let m=1/u;d*=m,h*=m,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(_o).multiplyScalar(h).add(nl),p},intersectSphere:function(t,i){Pi.subVectors(t.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,i):this.at(a,i)},intersectsSphere:function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},distanceToPlane:function(t){let i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?n:null},intersectPlane:function(t,i){let n=this.distanceToPlane(t);return n===null?null:this.at(n,i)},intersectsPlane:function(t){let i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0},intersectBox:function(t,i){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)},intersectsBox:function(t){return this.intersectBox(t,Pi)!==null},intersectTriangle:function(t,i,n,s,r){sl.subVectors(i,t),Mo.subVectors(n,t),rl.crossVectors(sl,Mo);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,t);let l=a*this.direction.dot(Mo.crossVectors(ji,Mo));if(l<0)return null;let c=a*this.direction.dot(sl.cross(ji));if(c<0||l+c>o)return null;let u=-a*ji.dot(rl);return u<0?null:this.at(u/o,r)},applyMatrix4:function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}});var ol=new L,Cm=new L,Pm=new wt;function fi(t,i){this.normal=t!==void 0?t:new L(1,0,0),this.constant=i!==void 0?i:0}Object.assign(fi.prototype,{isPlane:!0,set:function(t,i){return this.normal.copy(t),this.constant=i,this},setComponents:function(t,i,n,s){return this.normal.set(t,i,n),this.constant=s,this},setFromNormalAndCoplanarPoint:function(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this},setFromCoplanarPoints:function(t,i,n){let s=ol.subVectors(n,i).cross(Cm.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,i){return i===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),i=new L),i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},intersectLine:function(t,i){i===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),i=new L);let n=t.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):void 0;let r=-(t.start.dot(this.normal)+this.constant)/s;if(!(r<0||r>1))return i.copy(n).multiplyScalar(r).add(t.start)},intersectsLine:function(t){let i=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return i<0&&n>0||n<0&&i>0},intersectsBox:function(t){return t.intersectsPlane(this)},intersectsSphere:function(t){return t.intersectsPlane(this)},coplanarPoint:function(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new L),t.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(t,i){let n=i||Pm.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this},translate:function(t){return this.constant-=t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant}});var ri=new L,Li=new L,al=new L,Ai=new L,Yn=new L,Qn=new L,Pu=new L,ll=new L,cl=new L,ul=new L;function Et(t,i,n){this.a=t!==void 0?t:new L,this.b=i!==void 0?i:new L,this.c=n!==void 0?n:new L}Object.assign(Et,{getNormal:function(t,i,n,s){s===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),s=new L),s.subVectors(n,i),ri.subVectors(t,i),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)},getBarycoord:function(t,i,n,s,r){ri.subVectors(s,i),Li.subVectors(n,i),al.subVectors(t,i);let o=ri.dot(ri),a=ri.dot(Li),l=ri.dot(al),c=Li.dot(Li),u=Li.dot(al),d=o*c-a*a;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new L),d===0)return r.set(-2,-1,-1);let h=1/d,p=(c*l-a*u)*h,f=(o*u-a*l)*h;return r.set(1-p-f,f,p)},containsPoint:function(t,i,n,s){return Et.getBarycoord(t,i,n,s,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1},getUV:function(t,i,n,s,r,o,a,l){return this.getBarycoord(t,i,n,s,Ai),l.set(0,0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l},isFrontFacing:function(t,i,n,s){return ri.subVectors(n,i),Li.subVectors(t,i),ri.cross(Li).dot(s)<0}});Object.assign(Et.prototype,{set:function(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this},setFromPointsAndIndices:function(t,i,n,s){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[s]),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},getArea:function(){return ri.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ri.cross(Li).length()*.5},getMidpoint:function(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new L),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(t){return Et.getNormal(this.a,this.b,this.c,t)},getPlane:function(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new fi),t.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(t,i){return Et.getBarycoord(t,this.a,this.b,this.c,i)},getUV:function(t,i,n,s,r){return Et.getUV(t,this.a,this.b,this.c,i,n,s,r)},containsPoint:function(t){return Et.containsPoint(t,this.a,this.b,this.c)},isFrontFacing:function(t){return Et.isFrontFacing(this.a,this.b,this.c,t)},intersectsBox:function(t){return t.intersectsTriangle(this)},closestPointToPoint:function(t,i){i===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),i=new L);let n=this.a,s=this.b,r=this.c,o,a;Yn.subVectors(s,n),Qn.subVectors(r,n),ll.subVectors(t,n);let l=Yn.dot(ll),c=Qn.dot(ll);if(l<=0&&c<=0)return i.copy(n);cl.subVectors(t,s);let u=Yn.dot(cl),d=Qn.dot(cl);if(u>=0&&d<=u)return i.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),i.copy(n).addScaledVector(Yn,o);ul.subVectors(t,r);let p=Yn.dot(ul),f=Qn.dot(ul);if(f>=0&&p<=f)return i.copy(r);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return a=c/(c-f),i.copy(n).addScaledVector(Qn,a);let w=u*f-p*d;if(w<=0&&d-u>=0&&p-f>=0)return Pu.subVectors(r,s),a=(d-u)/(d-u+(p-f)),i.copy(s).addScaledVector(Pu,a);let y=1/(w+m+h);return o=m*y,a=h*y,i.copy(n).addScaledVector(Yn,o).addScaledVector(Qn,a)},equals:function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}});var jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},So={h:0,s:0,l:0};function te(t,i,n){return i===void 0&&n===void 0?this.set(t):this.setRGB(t,i,n)}function hl(t,i,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(i-t)*6*n:n<1/2?i:n<2/3?t+(i-t)*6*(2/3-n):t}function dl(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}Object.assign(te.prototype,{isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this},setRGB:function(t,i,n){return this.r=t,this.g=i,this.b=n,this},setHSL:function(t,i,n){if(t=be.euclideanModulo(t,1),i=be.clamp(i,0,1),n=be.clamp(n,0,1),i===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+i):n+i-n*i,r=2*n-s;this.r=hl(r,s,t+1/3),this.g=hl(r,s,t),this.b=hl(r,s,t-1/3)}return this},setStyle:function(t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){let s,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,i(s[5]),this;if(s=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,i(s[5]),this;break;case"hsl":case"hsla":if(s=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){let a=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[5]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(t)){let s=n[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this},setColorName:function(t){let i=jh[t];return i!==void 0?this.setHex(i):console.warn("THREE.Color: Unknown color "+t),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,i){return i===void 0&&(i=2),this.r=Math.pow(t.r,i),this.g=Math.pow(t.g,i),this.b=Math.pow(t.b,i),this},copyLinearToGamma:function(t,i){i===void 0&&(i=2);let n=i>0?1/i:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},convertGammaToLinear:function(t){return this.copyGammaToLinear(this,t),this},convertLinearToGamma:function(t){return this.copyLinearToGamma(this,t),this},copySRGBToLinear:function(t){return this.r=dl(t.r),this.g=dl(t.g),this.b=dl(t.b),this},copyLinearToSRGB:function(t){return this.r=fl(t.r),this.g=fl(t.g),this.b=fl(t.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});let i=this.r,n=this.g,s=this.b,r=Math.max(i,n,s),o=Math.min(i,n,s),a,l,c=(o+r)/2;if(o===r)a=0,l=0;else{let u=r-o;switch(l=c<=.5?u/(r+o):u/(2-r-o),r){case i:a=(n-s)/u+(n<s?6:0);break;case n:a=(s-i)/u+2;break;case s:a=(i-n)/u+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(t,i,n){return this.getHSL(ni),ni.h+=t,ni.s+=i,ni.l+=n,this.setHSL(ni.h,ni.s,ni.l),this},add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this},lerpHSL:function(t,i){this.getHSL(ni),t.getHSL(So);let n=be.lerp(ni.h,So.h,i),s=be.lerp(ni.s,So.s,i),r=be.lerp(ni.l,So.l,i);return this.setHSL(n,s,r),this},equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,i){return i===void 0&&(i=0),this.r=t[i],this.g=t[i+1],this.b=t[i+2],this},toArray:function(t,i){return t===void 0&&(t=[]),i===void 0&&(i=0),t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t},fromBufferAttribute:function(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});te.NAMES=jh;function aa(t,i,n,s,r,o){this.a=t,this.b=i,this.c=n,this.normal=s&&s.isVector3?s:new L,this.vertexNormals=Array.isArray(s)?s:[],this.color=r&&r.isColor?r:new te,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=o!==void 0?o:0}Object.assign(aa.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(let i=0,n=t.vertexNormals.length;i<n;i++)this.vertexNormals[i]=t.vertexNormals[i].clone();for(let i=0,n=t.vertexColors.length;i<n;i++)this.vertexColors[i]=t.vertexColors[i].clone();return this}});var Am=0;function Ce(){Object.defineProperty(this,"id",{value:Am++}),this.uuid=be.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=cr,this.side=At,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kh,this.blendDst=Hh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Ce.prototype=Object.assign(Object.create(ki.prototype),{constructor:Ce,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(let i in t){let n=t[i];if(n===void 0){console.warn("THREE.Material: '"+i+"' parameter is undefined.");continue}if(i==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Fh;continue}let s=this[i];if(s===void 0){console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}},toJSON:function(t){let i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==At&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(i){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let i=t.clippingPlanes,n=null;if(i!==null){let s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Ce.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function _t(t){Ce.call(this),this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}_t.prototype=Object.create(Ce.prototype);_t.prototype.constructor=_t;_t.prototype.isMeshBasicMaterial=!0;_t.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var qe=new L,Eo=new z;function Se(t,i,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=n===!0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Se.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Se.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,i,n){t*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=i.array[n+s];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){let i=this.array,n=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new te),i[n++]=o.r,i[n++]=o.g,i[n++]=o.b}return this},copyVector2sArray:function(t){let i=this.array,n=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new z),i[n++]=o.x,i[n++]=o.y}return this},copyVector3sArray:function(t){let i=this.array,n=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new L),i[n++]=o.x,i[n++]=o.y,i[n++]=o.z}return this},copyVector4sArray:function(t){let i=this.array,n=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new ke),i[n++]=o.x,i[n++]=o.y,i[n++]=o.z,i[n++]=o.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)Eo.fromBufferAttribute(this,i),Eo.applyMatrix3(t),this.setXY(i,Eo.x,Eo.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)qe.fromBufferAttribute(this,i),qe.applyMatrix3(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this},applyMatrix4:function(t){for(let i=0,n=this.count;i<n;i++)qe.x=this.getX(i),qe.y=this.getY(i),qe.z=this.getZ(i),qe.applyMatrix4(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this},applyNormalMatrix:function(t){for(let i=0,n=this.count;i<n;i++)qe.x=this.getX(i),qe.y=this.getY(i),qe.z=this.getZ(i),qe.applyNormalMatrix(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this},transformDirection:function(t){for(let i=0,n=this.count;i<n;i++)qe.x=this.getX(i),qe.y=this.getY(i),qe.z=this.getZ(i),qe.transformDirection(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this},set:function(t,i){return i===void 0&&(i=0),this.array.set(t,i),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,i){return this.array[t*this.itemSize]=i,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,i){return this.array[t*this.itemSize+1]=i,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,i){return this.array[t*this.itemSize+2]=i,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,i){return this.array[t*this.itemSize+3]=i,this},setXY:function(t,i,n){return t*=this.itemSize,this.array[t+0]=i,this.array[t+1]=n,this},setXYZ:function(t,i,n,s){return t*=this.itemSize,this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=s,this},setXYZW:function(t,i,n,s,r){return t*=this.itemSize,this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Dl(t,i,n){Se.call(this,new Int8Array(t),i,n)}Dl.prototype=Object.create(Se.prototype);Dl.prototype.constructor=Dl;function Il(t,i,n){Se.call(this,new Uint8Array(t),i,n)}Il.prototype=Object.create(Se.prototype);Il.prototype.constructor=Il;function Bl(t,i,n){Se.call(this,new Uint8ClampedArray(t),i,n)}Bl.prototype=Object.create(Se.prototype);Bl.prototype.constructor=Bl;function Ul(t,i,n){Se.call(this,new Int16Array(t),i,n)}Ul.prototype=Object.create(Se.prototype);Ul.prototype.constructor=Ul;function Cn(t,i,n){Se.call(this,new Uint16Array(t),i,n)}Cn.prototype=Object.create(Se.prototype);Cn.prototype.constructor=Cn;function Ol(t,i,n){Se.call(this,new Int32Array(t),i,n)}Ol.prototype=Object.create(Se.prototype);Ol.prototype.constructor=Ol;function gr(t,i,n){Se.call(this,new Uint32Array(t),i,n)}gr.prototype=Object.create(Se.prototype);gr.prototype.constructor=gr;function se(t,i,n){Se.call(this,new Float32Array(t),i,n)}se.prototype=Object.create(Se.prototype);se.prototype.constructor=se;function Fl(t,i,n){Se.call(this,new Float64Array(t),i,n)}Fl.prototype=Object.create(Se.prototype);Fl.prototype.constructor=Fl;function Xh(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Xh.prototype,{computeGroups:function(t){let i=[],n,s,r,o=t.faces;for(s=0;s<o.length;s++){let a=o[s];a.materialIndex!==r&&(r=a.materialIndex,n!==void 0&&(n.count=s*3-n.start,i.push(n)),n={start:s*3,materialIndex:r})}n!==void 0&&(n.count=s*3-n.start,i.push(n)),this.groups=i},fromGeometry:function(t){let i=t.faces,n=t.vertices,s=t.faceVertexUvs,r=s[0]&&s[0].length>0,o=s[1]&&s[1].length>0,a=t.morphTargets,l=a.length,c;if(l>0){c=[];for(let y=0;y<l;y++)c[y]={name:a[y].name,data:[]};this.morphTargets.position=c}let u=t.morphNormals,d=u.length,h;if(d>0){h=[];for(let y=0;y<d;y++)h[y]={name:u[y].name,data:[]};this.morphTargets.normal=h}let p=t.skinIndices,f=t.skinWeights,m=p.length===n.length,w=f.length===n.length;n.length>0&&i.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let y=0;y<i.length;y++){let g=i[y];this.vertices.push(n[g.a],n[g.b],n[g.c]);let v=g.vertexNormals;if(v.length===3)this.normals.push(v[0],v[1],v[2]);else{let E=g.normal;this.normals.push(E,E,E)}let C=g.vertexColors;if(C.length===3)this.colors.push(C[0],C[1],C[2]);else{let E=g.color;this.colors.push(E,E,E)}if(r===!0){let E=s[0][y];E!==void 0?this.uvs.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",y),this.uvs.push(new z,new z,new z))}if(o===!0){let E=s[1][y];E!==void 0?this.uvs2.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",y),this.uvs2.push(new z,new z,new z))}for(let E=0;E<l;E++){let A=a[E].vertices;c[E].data.push(A[g.a],A[g.b],A[g.c])}for(let E=0;E<d;E++){let A=u[E].vertexNormals[y];h[E].data.push(A.a,A.b,A.c)}m&&this.skinIndices.push(p[g.a],p[g.b],p[g.c]),w&&this.skinWeights.push(f[g.a],f[g.b],f[g.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this}});function qh(t){if(t.length===0)return-1/0;let i=t[0];for(let n=1,s=t.length;n<s;++n)t[n]>i&&(i=t[n]);return i}var Lm=1,ui=new de,pl=new re,Zn=new L,Ht=new $t,er=new $t,bt=new L;function ce(){Object.defineProperty(this,"id",{value:Lm+=2}),this.uuid=be.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}ce.prototype=Object.assign(Object.create(ki.prototype),{constructor:ce,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){Array.isArray(t)?this.index=new(qh(t)>65535?gr:Cn)(t,1):this.index=t},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,i){return this.attributes[t]=i,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,i,n){this.groups.push({start:t,count:i,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,i){this.drawRange.start=t,this.drawRange.count=i},applyMatrix4:function(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this},rotateY:function(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this},rotateZ:function(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this},translate:function(t,i,n){return ui.makeTranslation(t,i,n),this.applyMatrix4(ui),this},scale:function(t,i,n){return ui.makeScale(t,i,n),this.applyMatrix4(ui),this},lookAt:function(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this},setFromObject:function(t){let i=t.geometry;if(t.isPoints||t.isLine){let n=new se(i.vertices.length*3,3),s=new se(i.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(i.vertices)),this.setAttribute("color",s.copyColorsArray(i.colors)),i.lineDistances&&i.lineDistances.length===i.vertices.length){let r=new se(i.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(i.lineDistances))}i.boundingSphere!==null&&(this.boundingSphere=i.boundingSphere.clone()),i.boundingBox!==null&&(this.boundingBox=i.boundingBox.clone())}else t.isMesh&&i&&i.isGeometry&&this.fromGeometry(i);return this},setFromPoints:function(t){let i=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];i.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(i,3)),this},updateFromObject:function(t){let i=t.geometry;if(t.isMesh){let n=i.__directGeometry;if(i.elementsNeedUpdate===!0&&(n=void 0,i.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(i);n.verticesNeedUpdate=i.verticesNeedUpdate,n.normalsNeedUpdate=i.normalsNeedUpdate,n.colorsNeedUpdate=i.colorsNeedUpdate,n.uvsNeedUpdate=i.uvsNeedUpdate,n.groupsNeedUpdate=i.groupsNeedUpdate,i.verticesNeedUpdate=!1,i.normalsNeedUpdate=!1,i.colorsNeedUpdate=!1,i.uvsNeedUpdate=!1,i.groupsNeedUpdate=!1,i=n}if(i.verticesNeedUpdate===!0){let n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(i.vertices),n.needsUpdate=!0),i.verticesNeedUpdate=!1}if(i.normalsNeedUpdate===!0){let n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(i.normals),n.needsUpdate=!0),i.normalsNeedUpdate=!1}if(i.colorsNeedUpdate===!0){let n=this.attributes.color;n!==void 0&&(n.copyColorsArray(i.colors),n.needsUpdate=!0),i.colorsNeedUpdate=!1}if(i.uvsNeedUpdate){let n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(i.uvs),n.needsUpdate=!0),i.uvsNeedUpdate=!1}if(i.lineDistancesNeedUpdate){let n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(i.lineDistances),n.needsUpdate=!0),i.lineDistancesNeedUpdate=!1}return i.groupsNeedUpdate&&(i.computeGroups(t.geometry),this.groups=i.groups,i.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new Xh().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){let i=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new Se(i,3).copyVector3sArray(t.vertices)),t.normals.length>0){let n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new Se(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){let n=new Float32Array(t.colors.length*3);this.setAttribute("color",new Se(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){let n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new Se(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){let n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new Se(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(let n in t.morphTargets){let s=[],r=t.morphTargets[n];for(let o=0,a=r.length;o<a;o++){let l=r[o],c=new se(l.data.length*3,3);c.name=l.name,s.push(c.copyVector3sArray(l.data))}this.morphAttributes[n]=s}if(t.skinIndices.length>0){let n=new se(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){let n=new se(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new $t);let t=this.attributes.position,i=this.morphAttributes.position;if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let r=i[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,i=this.morphAttributes.position;if(t){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(t),i)for(let r=0,o=i.length;r<o;r++){let a=i[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Ht.min,er.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,er.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(er.min),Ht.expandByPoint(er.max))}Ht.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)bt.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(bt));if(i)for(let r=0,o=i.length;r<o;r++){let a=i[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(Zn.fromBufferAttribute(t,c),bt.add(Zn)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){let f=t.getX(h+0),m=t.getX(h+1),w=t.getX(h+2);s.fromBufferAttribute(i,f),r.fromBufferAttribute(i,m),o.fromBufferAttribute(i,w),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,w),a.add(u),l.add(u),c.add(u),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z)}else for(let h=0,p=i.count;h<p;h+=3)s.fromBufferAttribute(i,h+0),r.fromBufferAttribute(i,h+1),o.fromBufferAttribute(i,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,i){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}i===void 0&&(i=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let s in n){if(t.attributes[s]===void 0)continue;let o=n[s].array,a=t.attributes[s],l=a.array,c=a.itemSize*i,u=Math.min(l.length,o.length-c);for(let d=0,h=c;d<u;d++,h++)o[h]=l[d]}return this},normalizeNormals:function(){let t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)bt.fromBufferAttribute(t,i),bt.normalize(),t.setXYZ(i,bt.x,bt.y,bt.z)},toNonIndexed:function(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let m=0,w=l.length;m<w;m++){p=l[m]*u;for(let y=0;y<u;y++)h[f++]=c[p++]}return new Se(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let i=new ce,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);i.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,n);l.push(p)}i.morphAttributes[a]=l}i.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];i.addGroup(c.start,c.count,c.materialIndex)}return i},toJSON:function(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let n=this.attributes;for(let l in n){let c=n[l],u=c.toJSON(t.data);c.name!==""&&(u.name=c.name),t.data.attributes[l]=u}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d],f=p.toJSON(t.data);p.name!==""&&(f.name=p.name),u.push(f)}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t},clone:function(){return new ce().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(i));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(i))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(i));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Au=new de,xn=new Ns,ml=new Hi,Xi=new L,qi=new L,Yi=new L,gl=new L,vl=new L,xl=new L,To=new L,Co=new L,Po=new L,ls=new z,cs=new z,us=new z,hr=new L,Ao=new L;function Ve(t,i){re.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new ce,this.material=i!==void 0?i:new _t,this.updateMorphTargets()}Ve.prototype=Object.assign(Object.create(re.prototype),{constructor:Ve,isMesh:!0,copy:function(t){return re.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let i=t.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let i=t.morphTargets;i!==void 0&&i.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,i){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),t.ray.intersectsSphere(ml)===!1)||(Au.getInverse(r),xn.copy(t.ray).applyMatrix4(Au),n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,p=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,w=p.length;m<w;m++){let y=p[m],g=s[y.materialIndex],v=Math.max(y.start,f.start),C=Math.min(y.start+y.count,f.start+f.count);for(let E=v,A=C;E<A;E+=3){let R=a.getX(E),O=a.getX(E+1),V=a.getX(E+2);o=Lo(this,g,t,xn,l,c,u,d,h,R,O,V),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{let m=Math.max(0,f.start),w=Math.min(a.count,f.start+f.count);for(let y=m,g=w;y<g;y+=3){let v=a.getX(y),C=a.getX(y+1),E=a.getX(y+2);o=Lo(this,s,t,xn,l,c,u,d,h,v,C,E),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,w=p.length;m<w;m++){let y=p[m],g=s[y.materialIndex],v=Math.max(y.start,f.start),C=Math.min(y.start+y.count,f.start+f.count);for(let E=v,A=C;E<A;E+=3){let R=E,O=E+1,V=E+2;o=Lo(this,g,t,xn,l,c,u,d,h,R,O,V),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{let m=Math.max(0,f.start),w=Math.min(l.count,f.start+f.count);for(let y=m,g=w;y<g;y+=3){let v=y,C=y+1,E=y+2;o=Lo(this,s,t,xn,l,c,u,d,h,v,C,E),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}else if(n.isGeometry){let a=Array.isArray(s),l=n.vertices,c=n.faces,u,d=n.faceVertexUvs[0];d.length>0&&(u=d);for(let h=0,p=c.length;h<p;h++){let f=c[h],m=a?s[f.materialIndex]:s;if(m===void 0)continue;let w=l[f.a],y=l[f.b],g=l[f.c];if(o=Yh(this,m,t,xn,w,y,g,hr),o){if(u&&u[h]){let v=u[h];ls.copy(v[0]),cs.copy(v[1]),us.copy(v[2]),o.uv=Et.getUV(hr,w,y,g,ls,cs,us,new z)}o.face=f,o.faceIndex=h,i.push(o)}}}}});function Yh(t,i,n,s,r,o,a,l){let c;if(i.side===ft?c=s.intersectTriangle(a,o,r,!0,l):c=s.intersectTriangle(r,o,a,i.side!==Ft,l),c===null)return null;Ao.copy(l),Ao.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(Ao);return u<n.near||u>n.far?null:{distance:u,point:Ao.clone(),object:t}}function Lo(t,i,n,s,r,o,a,l,c,u,d,h){Xi.fromBufferAttribute(r,u),qi.fromBufferAttribute(r,d),Yi.fromBufferAttribute(r,h);let p=t.morphTargetInfluences;if(i.morphTargets&&o&&p){To.set(0,0,0),Co.set(0,0,0),Po.set(0,0,0);for(let m=0,w=o.length;m<w;m++){let y=p[m],g=o[m];y!==0&&(gl.fromBufferAttribute(g,u),vl.fromBufferAttribute(g,d),xl.fromBufferAttribute(g,h),a?(To.addScaledVector(gl,y),Co.addScaledVector(vl,y),Po.addScaledVector(xl,y)):(To.addScaledVector(gl.sub(Xi),y),Co.addScaledVector(vl.sub(qi),y),Po.addScaledVector(xl.sub(Yi),y)))}Xi.add(To),qi.add(Co),Yi.add(Po)}t.isSkinnedMesh&&(t.boneTransform(u,Xi),t.boneTransform(d,qi),t.boneTransform(h,Yi));let f=Yh(t,i,n,s,Xi,qi,Yi,hr);if(f){l&&(ls.fromBufferAttribute(l,u),cs.fromBufferAttribute(l,d),us.fromBufferAttribute(l,h),f.uv=Et.getUV(hr,Xi,qi,Yi,ls,cs,us,new z)),c&&(ls.fromBufferAttribute(c,u),cs.fromBufferAttribute(c,d),us.fromBufferAttribute(c,h),f.uv2=Et.getUV(hr,Xi,qi,Yi,ls,cs,us,new z));let m=new aa(u,d,h);Et.getNormal(Xi,qi,Yi,m.normal),f.face=m}return f}var Rm=0,hi=new de,yl=new re,Ro=new L;function Le(){Object.defineProperty(this,"id",{value:Rm+=2}),this.uuid=be.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Le.prototype=Object.assign(Object.create(ki.prototype),{constructor:Le,isGeometry:!0,applyMatrix4:function(t){let i=new wt().getNormalMatrix(t);for(let n=0,s=this.vertices.length;n<s;n++)this.vertices[n].applyMatrix4(t);for(let n=0,s=this.faces.length;n<s;n++){let r=this.faces[n];r.normal.applyMatrix3(i).normalize();for(let o=0,a=r.vertexNormals.length;o<a;o++)r.vertexNormals[o].applyMatrix3(i).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this},rotateY:function(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this},rotateZ:function(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this},translate:function(t,i,n){return hi.makeTranslation(t,i,n),this.applyMatrix4(hi),this},scale:function(t,i,n){return hi.makeScale(t,i,n),this.applyMatrix4(hi),this},lookAt:function(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this},fromBufferGeometry:function(t){let i=this,n=t.index!==null?t.index:void 0,s=t.attributes;if(s.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let r=s.position,o=s.normal,a=s.color,l=s.uv,c=s.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)i.vertices.push(new L().fromBufferAttribute(r,h)),a!==void 0&&i.colors.push(new te().fromBufferAttribute(a,h));function u(h,p,f,m){let w=a===void 0?[]:[i.colors[h].clone(),i.colors[p].clone(),i.colors[f].clone()],y=o===void 0?[]:[new L().fromBufferAttribute(o,h),new L().fromBufferAttribute(o,p),new L().fromBufferAttribute(o,f)],g=new aa(h,p,f,y,w,m);i.faces.push(g),l!==void 0&&i.faceVertexUvs[0].push([new z().fromBufferAttribute(l,h),new z().fromBufferAttribute(l,p),new z().fromBufferAttribute(l,f)]),c!==void 0&&i.faceVertexUvs[1].push([new z().fromBufferAttribute(c,h),new z().fromBufferAttribute(c,p),new z().fromBufferAttribute(c,f)])}let d=t.groups;if(d.length>0)for(let h=0;h<d.length;h++){let p=d[h],f=p.start,m=p.count;for(let w=f,y=f+m;w<y;w+=3)n!==void 0?u(n.getX(w),n.getX(w+1),n.getX(w+2),p.materialIndex):u(w,w+1,w+2,p.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)u(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)u(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this},normalize:function(){this.computeBoundingSphere();let t=this.boundingSphere.center,i=this.boundingSphere.radius,n=i===0?1:1/i,s=new de;return s.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(s),this},computeFaceNormals:function(){let t=new L,i=new L;for(let n=0,s=this.faces.length;n<s;n++){let r=this.faces[n],o=this.vertices[r.a],a=this.vertices[r.b],l=this.vertices[r.c];t.subVectors(l,a),i.subVectors(o,a),t.cross(i),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){t===void 0&&(t=!0);let i=new Array(this.vertices.length);for(let n=0,s=this.vertices.length;n<s;n++)i[n]=new L;if(t){let n=new L,s=new L;for(let r=0,o=this.faces.length;r<o;r++){let a=this.faces[r],l=this.vertices[a.a],c=this.vertices[a.b],u=this.vertices[a.c];n.subVectors(u,c),s.subVectors(l,c),n.cross(s),i[a.a].add(n),i[a.b].add(n),i[a.c].add(n)}}else{this.computeFaceNormals();for(let n=0,s=this.faces.length;n<s;n++){let r=this.faces[n];i[r.a].add(r.normal),i[r.b].add(r.normal),i[r.c].add(r.normal)}}for(let n=0,s=this.vertices.length;n<s;n++)i[n].normalize();for(let n=0,s=this.faces.length;n<s;n++){let r=this.faces[n],o=r.vertexNormals;o.length===3?(o[0].copy(i[r.a]),o[1].copy(i[r.b]),o[2].copy(i[r.c])):(o[0]=i[r.a].clone(),o[1]=i[r.b].clone(),o[2]=i[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,i=this.faces.length;t<i;t++){let n=this.faces[t],s=n.vertexNormals;s.length===3?(s[0].copy(n.normal),s[1].copy(n.normal),s[2].copy(n.normal)):(s[0]=n.normal.clone(),s[1]=n.normal.clone(),s[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let i=0,n=this.faces.length;i<n;i++){let s=this.faces[i];s.__originalFaceNormal?s.__originalFaceNormal.copy(s.normal):s.__originalFaceNormal=s.normal.clone(),s.__originalVertexNormals||(s.__originalVertexNormals=[]);for(let r=0,o=s.vertexNormals.length;r<o;r++)s.__originalVertexNormals[r]?s.__originalVertexNormals[r].copy(s.vertexNormals[r]):s.__originalVertexNormals[r]=s.vertexNormals[r].clone()}let t=new Le;t.faces=this.faces;for(let i=0,n=this.morphTargets.length;i<n;i++){if(!this.morphNormals[i]){this.morphNormals[i]={},this.morphNormals[i].faceNormals=[],this.morphNormals[i].vertexNormals=[];let r=this.morphNormals[i].faceNormals,o=this.morphNormals[i].vertexNormals;for(let a=0,l=this.faces.length;a<l;a++){let c=new L,u={a:new L,b:new L,c:new L};r.push(c),o.push(u)}}let s=this.morphNormals[i];t.vertices=this.morphTargets[i].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,o=this.faces.length;r<o;r++){let a=this.faces[r],l=s.faceNormals[r],c=s.vertexNormals[r];l.copy(a.normal),c.a.copy(a.vertexNormals[0]),c.b.copy(a.vertexNormals[1]),c.c.copy(a.vertexNormals[2])}}for(let i=0,n=this.faces.length;i<n;i++){let s=this.faces[i];s.normal=s.__originalFaceNormal,s.vertexNormals=s.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Hi),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,i,n){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let s,r=this.vertices.length,o=this.vertices,a=t.vertices,l=this.faces,c=t.faces,u=this.colors,d=t.colors;n===void 0&&(n=0),i!==void 0&&(s=new wt().getNormalMatrix(i));for(let h=0,p=a.length;h<p;h++){let m=a[h].clone();i!==void 0&&m.applyMatrix4(i),o.push(m)}for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone());for(let h=0,p=c.length;h<p;h++){let f=c[h],m,w,y,g=f.vertexNormals,v=f.vertexColors;m=new aa(f.a+r,f.b+r,f.c+r),m.normal.copy(f.normal),s!==void 0&&m.normal.applyMatrix3(s).normalize();for(let C=0,E=g.length;C<E;C++)w=g[C].clone(),s!==void 0&&w.applyMatrix3(s).normalize(),m.vertexNormals.push(w);m.color.copy(f.color);for(let C=0,E=v.length;C<E;C++)y=v[C],m.vertexColors.push(y.clone());m.materialIndex=f.materialIndex+n,l.push(m)}for(let h=0,p=t.faceVertexUvs.length;h<p;h++){let f=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let m=0,w=f.length;m<w;m++){let y=f[m],g=[];for(let v=0,C=y.length;v<C;v++)g.push(y[v].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(){let t={},i=[],n=[],r=Math.pow(10,4);for(let l=0,c=this.vertices.length;l<c;l++){let u=this.vertices[l],d=Math.round(u.x*r)+"_"+Math.round(u.y*r)+"_"+Math.round(u.z*r);t[d]===void 0?(t[d]=l,i.push(this.vertices[l]),n[l]=i.length-1):n[l]=n[t[d]]}let o=[];for(let l=0,c=this.faces.length;l<c;l++){let u=this.faces[l];u.a=n[u.a],u.b=n[u.b],u.c=n[u.c];let d=[u.a,u.b,u.c];for(let h=0;h<3;h++)if(d[h]===d[(h+1)%3]){o.push(l);break}}for(let l=o.length-1;l>=0;l--){let c=o[l];this.faces.splice(c,1);for(let u=0,d=this.faceVertexUvs.length;u<d;u++)this.faceVertexUvs[u].splice(c,1)}let a=this.vertices.length-i.length;return this.vertices=i,a},setFromPoints:function(t){this.vertices=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];this.vertices.push(new L(s.x,s.y,s.z||0))}return this},sortFacesByMaterialIndex:function(){let t=this.faces,i=t.length;for(let l=0;l<i;l++)t[l]._id=l;function n(l,c){return l.materialIndex-c.materialIndex}t.sort(n);let s=this.faceVertexUvs[0],r=this.faceVertexUvs[1],o,a;s&&s.length===i&&(o=[]),r&&r.length===i&&(a=[]);for(let l=0;l<i;l++){let c=t[l]._id;o&&o.push(s[c]),a&&a.push(r[c])}o&&(this.faceVertexUvs[0]=o),a&&(this.faceVertexUvs[1]=a)},toJSON:function(){let t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){let f=this.parameters;for(let m in f)f[m]!==void 0&&(t[m]=f[m]);return t}let i=[];for(let f=0;f<this.vertices.length;f++){let m=this.vertices[f];i.push(m.x,m.y,m.z)}let n=[],s=[],r={},o=[],a={},l=[],c={};for(let f=0;f<this.faces.length;f++){let m=this.faces[f],w=!0,y=!1,g=this.faceVertexUvs[0][f]!==void 0,v=m.normal.length()>0,C=m.vertexNormals.length>0,E=m.color.r!==1||m.color.g!==1||m.color.b!==1,A=m.vertexColors.length>0,R=0;if(R=u(R,0,0),R=u(R,1,w),R=u(R,2,y),R=u(R,3,g),R=u(R,4,v),R=u(R,5,C),R=u(R,6,E),R=u(R,7,A),n.push(R),n.push(m.a,m.b,m.c),n.push(m.materialIndex),g){let O=this.faceVertexUvs[0][f];n.push(p(O[0]),p(O[1]),p(O[2]))}if(v&&n.push(d(m.normal)),C){let O=m.vertexNormals;n.push(d(O[0]),d(O[1]),d(O[2]))}if(E&&n.push(h(m.color)),A){let O=m.vertexColors;n.push(h(O[0]),h(O[1]),h(O[2]))}}function u(f,m,w){return w?f|1<<m:f&~(1<<m)}function d(f){let m=f.x.toString()+f.y.toString()+f.z.toString();return r[m]!==void 0||(r[m]=s.length/3,s.push(f.x,f.y,f.z)),r[m]}function h(f){let m=f.r.toString()+f.g.toString()+f.b.toString();return a[m]!==void 0||(a[m]=o.length,o.push(f.getHex())),a[m]}function p(f){let m=f.x.toString()+f.y.toString();return c[m]!==void 0||(c[m]=l.length/2,l.push(f.x,f.y)),c[m]}return t.data={},t.data.vertices=i,t.data.normals=s,o.length>0&&(t.data.colors=o),l.length>0&&(t.data.uvs=[l]),t.data.faces=n,t},clone:function(){return new Le().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;let i=t.vertices;for(let h=0,p=i.length;h<p;h++)this.vertices.push(i[h].clone());let n=t.colors;for(let h=0,p=n.length;h<p;h++)this.colors.push(n[h].clone());let s=t.faces;for(let h=0,p=s.length;h<p;h++)this.faces.push(s[h].clone());for(let h=0,p=t.faceVertexUvs.length;h<p;h++){let f=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let m=0,w=f.length;m<w;m++){let y=f[m],g=[];for(let v=0,C=y.length;v<C;v++){let E=y[v];g.push(E.clone())}this.faceVertexUvs[h].push(g)}}let r=t.morphTargets;for(let h=0,p=r.length;h<p;h++){let f={};if(f.name=r[h].name,r[h].vertices!==void 0){f.vertices=[];for(let m=0,w=r[h].vertices.length;m<w;m++)f.vertices.push(r[h].vertices[m].clone())}if(r[h].normals!==void 0){f.normals=[];for(let m=0,w=r[h].normals.length;m<w;m++)f.normals.push(r[h].normals[m].clone())}this.morphTargets.push(f)}let o=t.morphNormals;for(let h=0,p=o.length;h<p;h++){let f={};if(o[h].vertexNormals!==void 0){f.vertexNormals=[];for(let m=0,w=o[h].vertexNormals.length;m<w;m++){let y=o[h].vertexNormals[m],g={};g.a=y.a.clone(),g.b=y.b.clone(),g.c=y.c.clone(),f.vertexNormals.push(g)}}if(o[h].faceNormals!==void 0){f.faceNormals=[];for(let m=0,w=o[h].faceNormals.length;m<w;m++)f.faceNormals.push(o[h].faceNormals[m].clone())}this.morphNormals.push(f)}let a=t.skinWeights;for(let h=0,p=a.length;h<p;h++)this.skinWeights.push(a[h].clone());let l=t.skinIndices;for(let h=0,p=l.length;h<p;h++)this.skinIndices.push(l[h].clone());let c=t.lineDistances;for(let h=0,p=c.length;h<p;h++)this.lineDistances.push(c[h]);let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var kl=class extends Le{constructor(i,n,s,r,o,a){super(),this.type="BoxGeometry",this.parameters={width:i,height:n,depth:s,widthSegments:r,heightSegments:o,depthSegments:a},this.fromBufferGeometry(new xs(i,n,s,r,o,a)),this.mergeVertices()}},xs=class extends ce{constructor(i,n,s,r,o,a){super(),this.type="BoxBufferGeometry",this.parameters={width:i,height:n,depth:s,widthSegments:r,heightSegments:o,depthSegments:a};let l=this;i=i||1,n=n||1,s=s||1,r=Math.floor(r)||1,o=Math.floor(o)||1,a=Math.floor(a)||1;let c=[],u=[],d=[],h=[],p=0,f=0;m("z","y","x",-1,-1,s,n,i,a,o,0),m("z","y","x",1,-1,s,n,-i,a,o,1),m("x","z","y",1,1,i,s,n,r,a,2),m("x","z","y",1,-1,i,s,-n,r,a,3),m("x","y","z",1,-1,i,n,s,r,o,4),m("x","y","z",-1,-1,i,n,-s,r,o,5),this.setIndex(c),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(h,2));function m(w,y,g,v,C,E,A,R,O,V,k){let b=E/O,_=A/V,M=E/2,T=A/2,S=R/2,P=O+1,D=V+1,U=0,H=0,W=new L;for(let G=0;G<D;G++){let q=G*_-T;for(let Z=0;Z<P;Z++){let ue=Z*b-M;W[w]=ue*v,W[y]=q*C,W[g]=S,u.push(W.x,W.y,W.z),W[w]=0,W[y]=0,W[g]=R>0?1:-1,d.push(W.x,W.y,W.z),h.push(Z/O),h.push(1-G/V),U+=1}}for(let G=0;G<V;G++)for(let q=0;q<O;q++){let Z=p+q+P*G,ue=p+q+P*(G+1),Oe=p+(q+1)+P*(G+1),xe=p+(q+1)+P*G;c.push(Z,ue,xe),c.push(ue,Oe,xe),H+=6}l.addGroup(f,H,k),f+=H,p+=U}}};function ys(t){let i={};for(let n in t){i[n]={};for(let s in t[n]){let r=t[n][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?i[n][s]=r.clone():Array.isArray(r)?i[n][s]=r.slice():i[n][s]=r}}return i}function Ct(t){let i={};for(let n=0;n<t.length;n++){let s=ys(t[n]);for(let r in s)i[r]=s[r]}return i}var Vs={clone:ys,merge:Ct},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function we(t){Ce.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Dm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}we.prototype=Object.create(Ce.prototype);we.prototype.constructor=we;we.prototype.isShaderMaterial=!0;we.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this};we.prototype.toJSON=function(t){let i=Ce.prototype.toJSON.call(this,t);i.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?i.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?i.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?i.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?i.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?i.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?i.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?i.uniforms[s]={type:"m4",value:o.toArray()}:i.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i};function Di(){re.call(this),this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}Di.prototype=Object.assign(Object.create(re.prototype),{constructor:Di,isCamera:!0,copy:function(t,i){return re.prototype.copy.call(this,t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new L),this.updateMatrixWorld(!0);let i=this.matrixWorld.elements;return t.set(-i[8],-i[9],-i[10]).normalize()},updateMatrixWorld:function(t){re.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(t,i){re.prototype.updateWorldMatrix.call(this,t,i),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function nt(t,i,n,s){Di.call(this),this.type="PerspectiveCamera",this.fov=t!==void 0?t:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=s!==void 0?s:2e3,this.focus=10,this.aspect=i!==void 0?i:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}nt.prototype=Object.assign(Object.create(Di.prototype),{constructor:nt,isPerspectiveCamera:!0,copy:function(t,i){return Di.prototype.copy.call(this,t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){let i=.5*this.getFilmHeight()/t;this.fov=be.RAD2DEG*2*Math.atan(i),this.updateProjectionMatrix()},getFocalLength:function(){let t=Math.tan(be.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return be.RAD2DEG*2*Math.atan(Math.tan(be.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,i,n,s,r,o){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=this.near,i=t*Math.tan(be.DEG2RAD*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,i-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){let i=re.prototype.toJSON.call(this,t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}});var Kn=90,Jn=1;function vr(t,i,n){if(re.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let s=new nt(Kn,Jn,t,i);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);let r=new nt(Kn,Jn,t,i);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);let o=new nt(Kn,Jn,t,i);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);let a=new nt(Kn,Jn,t,i);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);let l=new nt(Kn,Jn,t,i);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);let c=new nt(Kn,Jn,t,i);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c),this.update=function(u,d){this.parent===null&&this.updateMatrixWorld();let h=u.xr.enabled,p=u.getRenderTarget();u.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,u.setRenderTarget(n,0),u.render(d,s),u.setRenderTarget(n,1),u.render(d,r),u.setRenderTarget(n,2),u.render(d,o),u.setRenderTarget(n,3),u.render(d,a),u.setRenderTarget(n,4),u.render(d,l),n.texture.generateMipmaps=f,u.setRenderTarget(n,5),u.render(d,c),u.setRenderTarget(p),u.xr.enabled=h},this.clear=function(u,d,h,p){let f=u.getRenderTarget();for(let m=0;m<6;m++)u.setRenderTarget(n,m),u.clear(d,h,p);u.setRenderTarget(f)}}vr.prototype=Object.create(re.prototype);vr.prototype.constructor=vr;function xr(t,i,n){Number.isInteger(i)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),i=n),et.call(this,t,t,i)}xr.prototype=Object.create(et.prototype);xr.prototype.constructor=xr;xr.prototype.isWebGLCubeRenderTarget=!0;xr.prototype.fromEquirectangularTexture=function(t,i){this.texture.type=i.type,this.texture.format=i.format,this.texture.encoding=i.encoding;let n=new sn,s={uniforms:{tEquirect:{value:null}},vertexShader:["varying vec3 vWorldDirection;","vec3 transformDirection( in vec3 dir, in mat4 matrix ) {","	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );","}","void main() {","	vWorldDirection = transformDirection( position, modelMatrix );","	#include <begin_vertex>","	#include <project_vertex>","}"].join(`
`),fragmentShader:["uniform sampler2D tEquirect;","varying vec3 vWorldDirection;","#include <common>","void main() {","	vec3 direction = normalize( vWorldDirection );","	vec2 sampleUV = equirectUv( direction );","	gl_FragColor = texture2D( tEquirect, sampleUV );","}"].join(`
`)},r=new we({name:"CubemapFromEquirect",uniforms:ys(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ft,blending:Ki});r.uniforms.tEquirect.value=i;let o=new Ve(new xs(5,5,5),r);return n.add(o),new vr(1,10,this).update(t,n),o.geometry.dispose(),o.material.dispose(),this};function bs(t,i,n,s,r,o,a,l,c,u,d,h){je.call(this,null,o,a,l,c,u,s,r,d,h),this.image={data:t||null,width:i||1,height:n||1},this.magFilter=c!==void 0?c:st,this.minFilter=u!==void 0?u:st,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}bs.prototype=Object.create(je.prototype);bs.prototype.constructor=bs;bs.prototype.isDataTexture=!0;var $n=new Hi,Do=new L;function Kr(t,i,n,s,r,o){this.planes=[t!==void 0?t:new fi,i!==void 0?i:new fi,n!==void 0?n:new fi,s!==void 0?s:new fi,r!==void 0?r:new fi,o!==void 0?o:new fi]}Object.assign(Kr.prototype,{set:function(t,i,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(i),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){let i=this.planes;for(let n=0;n<6;n++)i[n].copy(t.planes[n]);return this},setFromProjectionMatrix:function(t){let i=this.planes,n=t.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],p=n[9],f=n[10],m=n[11],w=n[12],y=n[13],g=n[14],v=n[15];return i[0].setComponents(a-s,d-l,m-h,v-w).normalize(),i[1].setComponents(a+s,d+l,m+h,v+w).normalize(),i[2].setComponents(a+r,d+c,m+p,v+y).normalize(),i[3].setComponents(a-r,d-c,m-p,v-y).normalize(),i[4].setComponents(a-o,d-u,m-f,v-g).normalize(),i[5].setComponents(a+o,d+u,m+f,v+g).normalize(),this},intersectsObject:function(t){let i=t.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),$n.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere($n)},intersectsSprite:function(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)},intersectsSphere:function(t){let i=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0},intersectsBox:function(t){let i=this.planes;for(let n=0;n<6;n++){let s=i[n];if(Do.x=s.normal.x>0?t.max.x:t.min.x,Do.y=s.normal.y>0?t.max.y:t.min.y,Do.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Do)<0)return!1}return!0},containsPoint:function(t){let i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(t)<0)return!1;return!0}});var he={common:{diffuse:{value:new te(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new te(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wt}},sprite:{diffuse:{value:new te(15658734)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wt}}};function Qh(){let t=null,i=!1,n=null,s=null;function r(o,a){n(o,a),s=t.requestAnimationFrame(r)}return{start:function(){i!==!0&&n!==null&&(s=t.requestAnimationFrame(r),i=!0)},stop:function(){t.cancelAnimationFrame(s),i=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Bm(t,i){let n=i.isWebGL2,s=new WeakMap;function r(u,d){let h=u.array,p=u.usage,f=t.createBuffer();t.bindBuffer(d,f),t.bufferData(d,h,p),u.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:h instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function o(u,d,h){let p=d.array,f=d.updateRange;t.bindBuffer(h,u),f.count===-1?t.bufferSubData(h,0,p):(n?t.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):t.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),s.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);let d=s.get(u);d&&(t.deleteBuffer(d.buffer),s.delete(u))}function c(u,d){u.isInterleavedBufferAttribute&&(u=u.data);let h=s.get(u);h===void 0?s.set(u,r(u,d)):h.version<u.version&&(o(h.buffer,u,d),h.version=u.version)}return{get:a,remove:l,update:c}}function la(t,i,n,s){Le.call(this),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:s},this.fromBufferGeometry(new Qt(t,i,n,s)),this.mergeVertices()}la.prototype=Object.create(Le.prototype);la.prototype.constructor=la;function Qt(t,i,n,s){ce.call(this),this.type="PlaneBufferGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:s},t=t||1,i=i||1;let r=t/2,o=i/2,a=Math.floor(n)||1,l=Math.floor(s)||1,c=a+1,u=l+1,d=t/a,h=i/l,p=[],f=[],m=[],w=[];for(let y=0;y<u;y++){let g=y*h-o;for(let v=0;v<c;v++){let C=v*d-r;f.push(C,-g,0),m.push(0,0,1),w.push(v/a),w.push(1-y/l)}}for(let y=0;y<l;y++)for(let g=0;g<a;g++){let v=g+c*y,C=g+c*(y+1),E=g+1+c*(y+1),A=g+1+c*y;p.push(v,C,A),p.push(C,E,A)}this.setIndex(p),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(m,3)),this.setAttribute("uv",new se(w,2))}Qt.prototype=Object.create(ce.prototype);Qt.prototype.constructor=Qt;var Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm="vec3 transformed = vec3( position );",Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Qm=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Zm=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Km=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {
      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {
      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {
      uv = vec2(direction.x, direction.y) / abs(direction.z);    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		reflectVec = normalize( reflectVec );
		vec2 sampleUV = equirectUv( reflectVec );
		vec4 envColor = texture2D( envMap, sampleUV );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,wg=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV = equirectUv( reflectVec );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3	diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Cg=`struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ug=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Wg=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,jg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,qg=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
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
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_v=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Av=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Vv=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Wv=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Xv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,qv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Kv=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Be={alphamap_fragment:Um,alphamap_pars_fragment:Om,alphatest_fragment:Fm,aomap_fragment:km,aomap_pars_fragment:Hm,begin_vertex:Gm,beginnormal_vertex:Nm,bsdfs:Vm,bumpmap_pars_fragment:zm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:Ym,color_pars_fragment:Qm,color_pars_vertex:Zm,color_vertex:Km,common:Jm,cube_uv_reflection_fragment:$m,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ig,emissivemap_fragment:ng,emissivemap_pars_fragment:sg,encodings_fragment:rg,encodings_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:wg,envmap_vertex:hg,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_fragment:vg,lightmap_pars_fragment:xg,lights_lambert_vertex:yg,lights_pars_begin:bg,lights_toon_fragment:_g,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Pg,lights_fragment_maps:Ag,lights_fragment_end:Lg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Bg,map_fragment:Ug,map_pars_fragment:Og,map_particle_fragment:Fg,map_particle_pars_fragment:kg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Gg,morphnormal_vertex:Ng,morphtarget_pars_vertex:Vg,morphtarget_vertex:zg,normal_fragment_begin:Wg,normal_fragment_maps:jg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:Qg,packing:Zg,premultiplied_alpha_fragment:Kg,project_vertex:Jg,dithering_fragment:$g,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:sv,shadowmap_vertex:rv,shadowmask_pars_fragment:ov,skinbase_vertex:av,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:uv,specularmap_fragment:hv,specularmap_pars_fragment:dv,tonemapping_fragment:fv,tonemapping_pars_fragment:pv,uv_pars_fragment:mv,uv_pars_vertex:gv,uv_vertex:vv,uv2_pars_fragment:xv,uv2_pars_vertex:yv,uv2_vertex:bv,worldpos_vertex:wv,background_frag:_v,background_vert:Mv,cube_frag:Sv,cube_vert:Ev,depth_frag:Tv,depth_vert:Cv,distanceRGBA_frag:Pv,distanceRGBA_vert:Av,equirect_frag:Lv,equirect_vert:Rv,linedashed_frag:Dv,linedashed_vert:Iv,meshbasic_frag:Bv,meshbasic_vert:Uv,meshlambert_frag:Ov,meshlambert_vert:Fv,meshmatcap_frag:kv,meshmatcap_vert:Hv,meshtoon_frag:Gv,meshtoon_vert:Nv,meshphong_frag:Vv,meshphong_vert:zv,meshphysical_frag:Wv,meshphysical_vert:jv,normal_frag:Xv,normal_vert:qv,points_frag:Yv,points_vert:Qv,shadow_frag:Zv,shadow_vert:Kv,sprite_frag:Jv,sprite_vert:$v},Ri={basic:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.fog,he.lights,{emissive:{value:new te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ct([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ct([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ct([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ct([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ct([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.normal_vert,fragmentShader:Be.normal_frag},sprite:{uniforms:Ct([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:Ct([he.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ct([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ct([he.lights,he.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Ri.physical={uniforms:Ct([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new te(0)},transparency:{value:0}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function ex(t,i,n,s){let r=new te(0),o=0,a,l,c=null,u=0,d=null;function h(f,m,w,y){let g=m.isScene===!0?m.background:null,v=t.xr,C=v.getSession&&v.getSession();if(C&&C.environmentBlendMode==="additive"&&(g=null),g===null?p(r,o):g&&g.isColor&&(p(g,1),y=!0),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.isWebGLCubeRenderTarget||g.mapping===Yr)){l===void 0&&(l=new Ve(new xs(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:ys(Ri.cube.uniforms),vertexShader:Ri.cube.vertexShader,fragmentShader:Ri.cube.fragmentShader,side:ft,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l));let E=g.isWebGLCubeRenderTarget?g.texture:g;l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture?-1:1,(c!==g||u!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=g,u=E.version,d=t.toneMapping),f.unshift(l,l.geometry,l.material,0,0,null)}else g&&g.isTexture&&(a===void 0&&(a=new Ve(new Qt(2,2),new we({name:"BackgroundMaterial",uniforms:ys(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||u!==g.version||d!==t.toneMapping)&&(a.material.needsUpdate=!0,c=g,u=g.version,d=t.toneMapping),f.unshift(a,a.geometry,a.material,0,0,null))}function p(f,m){i.buffers.color.setClear(f.r,f.g,f.b,m,s)}return{getClearColor:function(){return r},setClearColor:function(f,m){r.set(f),o=m!==void 0?m:1,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,p(r,o)},render:h}}function tx(t,i,n,s){let r=t.getParameter(34921),o=s.isWebGL2?null:i.get("OES_vertex_array_object"),a=s.isWebGL2||o!==null,l={},c=w(null),u=c;function d(T,S,P,D,U){let H=!1;if(a){let W=m(D,P,S);u!==W&&(u=W,p(u.object)),H=y(D),H&&g(D)}else{let W=S.wireframe===!0;(u.geometry!==D.id||u.program!==P.id||u.wireframe!==W)&&(u.geometry=D.id,u.program=P.id,u.wireframe=W,H=!0)}T.isInstancedMesh===!0&&(H=!0),U!==null&&n.update(U,34963),H&&(O(T,S,P,D),U!==null&&t.bindBuffer(34963,n.get(U).buffer))}function h(){return s.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(T){return s.isWebGL2?t.bindVertexArray(T):o.bindVertexArrayOES(T)}function f(T){return s.isWebGL2?t.deleteVertexArray(T):o.deleteVertexArrayOES(T)}function m(T,S,P){let D=P.wireframe===!0,U=l[T.id];U===void 0&&(U={},l[T.id]=U);let H=U[S.id];H===void 0&&(H={},U[S.id]=H);let W=H[D];return W===void 0&&(W=w(h()),H[D]=W),W}function w(T){let S=[],P=[],D=[];for(let U=0;U<r;U++)S[U]=0,P[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:P,attributeDivisors:D,object:T,attributes:{}}}function y(T){let S=u.attributes,P=T.attributes;if(Object.keys(S).length!==Object.keys(P).length)return!0;for(let D in P){let U=S[D],H=P[D];if(U.attribute!==H||U.data!==H.data)return!0}return!1}function g(T){let S={},P=T.attributes;for(let D in P){let U=P[D],H={};H.attribute=U,U.data&&(H.data=U.data),S[D]=H}u.attributes=S}function v(){let T=u.newAttributes;for(let S=0,P=T.length;S<P;S++)T[S]=0}function C(T){E(T,0)}function E(T,S){let P=u.newAttributes,D=u.enabledAttributes,U=u.attributeDivisors;P[T]=1,D[T]===0&&(t.enableVertexAttribArray(T),D[T]=1),U[T]!==S&&((s.isWebGL2?t:i.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,S),U[T]=S)}function A(){let T=u.newAttributes,S=u.enabledAttributes;for(let P=0,D=S.length;P<D;P++)S[P]!==T[P]&&(t.disableVertexAttribArray(P),S[P]=0)}function R(T,S,P,D,U,H){s.isWebGL2===!0&&(P===5124||P===5125)?t.vertexAttribIPointer(T,S,P,D,U,H):t.vertexAttribPointer(T,S,P,D,U,H)}function O(T,S,P,D){if(s.isWebGL2===!1&&(T.isInstancedMesh||D.isInstancedBufferGeometry)&&i.get("ANGLE_instanced_arrays")===null)return;v();let U=D.attributes,H=P.getAttributes(),W=S.defaultAttributeValues;for(let G in H){let q=H[G];if(q>=0){let Z=U[G];if(Z!==void 0){let ue=Z.normalized,Oe=Z.itemSize,xe=n.get(Z);if(xe===void 0)continue;let Y=xe.buffer,We=xe.type,Te=xe.bytesPerElement;if(Z.isInterleavedBufferAttribute){let Re=Z.data,_e=Re.stride,J=Z.offset;Re&&Re.isInstancedInterleavedBuffer?(E(q,Re.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=Re.meshPerAttribute*Re.count)):C(q),t.bindBuffer(34962,Y),R(q,Oe,We,ue,_e*Te,J*Te)}else Z.isInstancedBufferAttribute?(E(q,Z.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)):C(q),t.bindBuffer(34962,Y),R(q,Oe,We,ue,0,0)}else if(G==="instanceMatrix"){let ue=n.get(T.instanceMatrix);if(ue===void 0)continue;let Oe=ue.buffer,xe=ue.type;E(q+0,1),E(q+1,1),E(q+2,1),E(q+3,1),t.bindBuffer(34962,Oe),t.vertexAttribPointer(q+0,4,xe,!1,64,0),t.vertexAttribPointer(q+1,4,xe,!1,64,16),t.vertexAttribPointer(q+2,4,xe,!1,64,32),t.vertexAttribPointer(q+3,4,xe,!1,64,48)}else if(W!==void 0){let ue=W[G];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(q,ue);break;case 3:t.vertexAttrib3fv(q,ue);break;case 4:t.vertexAttrib4fv(q,ue);break;default:t.vertexAttrib1fv(q,ue)}}}}A()}function V(){_();for(let T in l){let S=l[T];for(let P in S){let D=S[P];for(let U in D)f(D[U].object),delete D[U];delete S[P]}delete l[T]}}function k(T){if(l[T.id]===void 0)return;let S=l[T.id];for(let P in S){let D=S[P];for(let U in D)f(D[U].object),delete D[U];delete S[P]}delete l[T.id]}function b(T){for(let S in l){let P=l[S];if(P[T.id]===void 0)continue;let D=P[T.id];for(let U in D)f(D[U].object),delete D[U];delete P[T.id]}}function _(){M(),u!==c&&(u=c,p(u.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:_,resetDefaultState:M,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:C,disableUnusedAttributes:A}}function ix(t,i,n,s){let r=s.isWebGL2,o;function a(u){o=u}function l(u,d){t.drawArrays(o,u,d),n.update(d,o)}function c(u,d,h,p){if(p===0)return;let f,m;if(r)f=t,m="drawArraysInstanced";else if(f=i.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](o,d,h,p),n.update(h,o,p)}this.setMode=a,this.render=l,this.renderInstances=c}function nx(t,i,n){let s;function r(){if(s!==void 0)return s;let R=i.get("EXT_texture_filter_anisotropic");return R!==null?s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT):s=0,s}function o(R){if(R==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext,l=n.precision!==void 0?n.precision:"highp",c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let u=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),h=t.getParameter(35660),p=t.getParameter(3379),f=t.getParameter(34076),m=t.getParameter(34921),w=t.getParameter(36347),y=t.getParameter(36348),g=t.getParameter(36349),v=h>0,C=a||!!i.get("OES_texture_float"),E=v&&C,A=a?t.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:C,floatVertexTextures:E,maxSamples:A}}function sx(){let t=this,i=null,n=0,s=!1,r=!1,o=new fi,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,p){let f=d.length!==0||h||n!==0||s;return s=h,i=u(d,p,0),n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,h,p,f,m,w){if(!s||d===null||d.length===0||r&&!p)r?u(null):c();else{let y=r?0:n,g=y*4,v=m.clippingState||null;l.value=v,v=u(d,f,g,w);for(let C=0;C!==g;++C)v[C]=i[C];m.clippingState=v,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,f){let m=d!==null?d.length:0,w=null;if(m!==0){if(w=l.value,f!==!0||w===null){let y=p+m*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(w===null||w.length<y)&&(w=new Float32Array(y));for(let v=0,C=p;v!==m;++v,C+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(w,C),w[C+3]=o.constant}l.value=w,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,w}}function rx(t){let i={};return{get:function(n){if(i[n]!==void 0)return i[n];let s;switch(n){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(n)}return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i[n]=s,s}}}function ox(t,i,n,s){let r=new WeakMap,o=new WeakMap;function a(h){let p=h.target,f=r.get(p);f.index!==null&&i.remove(f.index);for(let w in f.attributes)i.remove(f.attributes[w]);p.removeEventListener("dispose",a),r.delete(p);let m=o.get(f);m&&(i.remove(m),o.delete(f)),s.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function l(h,p){let f=r.get(p);return f||(p.addEventListener("dispose",a),p.isBufferGeometry?f=p:p.isGeometry&&(p._bufferGeometry===void 0&&(p._bufferGeometry=new ce().setFromObject(h)),f=p._bufferGeometry),r.set(p,f),n.memory.geometries++,f)}function c(h){let p=h.attributes;for(let m in p)i.update(p[m],34962);let f=h.morphAttributes;for(let m in f){let w=f[m];for(let y=0,g=w.length;y<g;y++)i.update(w[y],34962)}}function u(h){let p=[],f=h.index,m=h.attributes.position,w=0;if(f!==null){let v=f.array;w=f.version;for(let C=0,E=v.length;C<E;C+=3){let A=v[C+0],R=v[C+1],O=v[C+2];p.push(A,R,R,O,O,A)}}else{let v=m.array;w=m.version;for(let C=0,E=v.length/3-1;C<E;C+=3){let A=C+0,R=C+1,O=C+2;p.push(A,R,R,O,O,A)}}let y=new(qh(p)>65535?gr:Cn)(p,1);y.version=w;let g=o.get(h);g&&i.remove(g),o.set(h,y)}function d(h){let p=o.get(h);if(p){let f=h.index;f!==null&&p.version<f.version&&u(h)}else u(h);return o.get(h)}return{get:l,update:c,getWireframeAttribute:d}}function ax(t,i,n,s){let r=s.isWebGL2,o;function a(p){o=p}let l,c;function u(p){l=p.type,c=p.bytesPerElement}function d(p,f){t.drawElements(o,f,l,p*c),n.update(f,o)}function h(p,f,m,w){if(w===0)return;let y,g;if(r)y=t,g="drawElementsInstanced";else if(y=i.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](o,m,l,f*c,w),n.update(m,o,w)}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h}function lx(t){let i={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(o,a,l){switch(l=l||1,n.calls++,a){case 4:n.triangles+=l*(o/3);break;case 1:n.lines+=l*(o/2);break;case 3:n.lines+=l*(o-1);break;case 2:n.lines+=l*o;break;case 0:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:i,render:n,programs:null,autoReset:!0,reset:r,update:s}}function cx(t,i){return t[0]-i[0]}function ux(t,i){return Math.abs(i[1])-Math.abs(t[1])}function hx(t){let i={},n=new Float32Array(8),s=[];for(let o=0;o<8;o++)s[o]=[o,0];function r(o,a,l,c){let u=o.morphTargetInfluences,d=u===void 0?0:u.length,h=i[a.id];if(h===void 0){h=[];for(let y=0;y<d;y++)h[y]=[y,0];i[a.id]=h}for(let y=0;y<d;y++){let g=h[y];g[0]=y,g[1]=u[y]}h.sort(ux);for(let y=0;y<8;y++)y<d&&h[y][1]?(s[y][0]=h[y][0],s[y][1]=h[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(cx);let p=l.morphTargets&&a.morphAttributes.position,f=l.morphNormals&&a.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let g=s[y],v=g[0],C=g[1];v!==Number.MAX_SAFE_INTEGER&&C?(p&&a.getAttribute("morphTarget"+y)!==p[v]&&a.setAttribute("morphTarget"+y,p[v]),f&&a.getAttribute("morphNormal"+y)!==f[v]&&a.setAttribute("morphNormal"+y,f[v]),n[y]=C,m+=C):(p&&a.getAttribute("morphTarget"+y)!==void 0&&a.deleteAttribute("morphTarget"+y),f&&a.getAttribute("morphNormal"+y)!==void 0&&a.deleteAttribute("morphNormal"+y),n[y]=0)}let w=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",w),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function dx(t,i,n,s){let r=new WeakMap;function o(l){let c=s.render.frame,u=l.geometry,d=i.get(l,u);return r.get(d)!==c&&(u.isGeometry&&d.updateFromObject(l),i.update(d),r.set(d,c)),l.isInstancedMesh&&n.update(l.instanceMatrix,34962),d}function a(){r=new WeakMap}return{update:o,dispose:a}}function rn(t,i,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],i=i!==void 0?i:yc,a=a!==void 0?a:vi,je.call(this,t,i,n,s,r,o,a,l,c,u),this.flipY=!1}rn.prototype=Object.create(je.prototype);rn.prototype.constructor=rn;rn.prototype.isCubeTexture=!0;Object.defineProperty(rn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function yr(t,i,n,s){je.call(this,null),this.image={data:t||null,width:i||1,height:n||1,depth:s||1},this.magFilter=st,this.minFilter=st,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}yr.prototype=Object.create(je.prototype);yr.prototype.constructor=yr;yr.prototype.isDataTexture2DArray=!0;function br(t,i,n,s){je.call(this,null),this.image={data:t||null,width:i||1,height:n||1,depth:s||1},this.magFilter=st,this.minFilter=st,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}br.prototype=Object.create(je.prototype);br.prototype.constructor=br;br.prototype.isDataTexture3D=!0;var Zh=new je,fx=new yr,px=new br,Kh=new rn,Lu=[],Ru=[],Du=new Float32Array(16),Iu=new Float32Array(9),Bu=new Float32Array(4);function zs(t,i,n){let s=t[0];if(s<=0||s>0)return t;let r=i*n,o=Lu[r];if(o===void 0&&(o=new Float32Array(r),Lu[r]=o),i!==0){s.toArray(o,0);for(let a=1,l=0;a!==i;++a)l+=n,t[a].toArray(o,l)}return o}function Zt(t,i){if(t.length!==i.length)return!1;for(let n=0,s=t.length;n<s;n++)if(t[n]!==i[n])return!1;return!0}function Nt(t,i){for(let n=0,s=i.length;n<s;n++)t[n]=i[n]}function Jh(t,i){let n=Ru[i];n===void 0&&(n=new Int32Array(i),Ru[i]=n);for(let s=0;s!==i;++s)n[s]=t.allocateTextureUnit();return n}function mx(t,i){let n=this.cache;n[0]!==i&&(t.uniform1f(this.addr,i),n[0]=i)}function gx(t,i){let n=this.cache;if(i.x!==void 0)(n[0]!==i.x||n[1]!==i.y)&&(t.uniform2f(this.addr,i.x,i.y),n[0]=i.x,n[1]=i.y);else{if(Zt(n,i))return;t.uniform2fv(this.addr,i),Nt(n,i)}}function vx(t,i){let n=this.cache;if(i.x!==void 0)(n[0]!==i.x||n[1]!==i.y||n[2]!==i.z)&&(t.uniform3f(this.addr,i.x,i.y,i.z),n[0]=i.x,n[1]=i.y,n[2]=i.z);else if(i.r!==void 0)(n[0]!==i.r||n[1]!==i.g||n[2]!==i.b)&&(t.uniform3f(this.addr,i.r,i.g,i.b),n[0]=i.r,n[1]=i.g,n[2]=i.b);else{if(Zt(n,i))return;t.uniform3fv(this.addr,i),Nt(n,i)}}function xx(t,i){let n=this.cache;if(i.x!==void 0)(n[0]!==i.x||n[1]!==i.y||n[2]!==i.z||n[3]!==i.w)&&(t.uniform4f(this.addr,i.x,i.y,i.z,i.w),n[0]=i.x,n[1]=i.y,n[2]=i.z,n[3]=i.w);else{if(Zt(n,i))return;t.uniform4fv(this.addr,i),Nt(n,i)}}function yx(t,i){let n=this.cache,s=i.elements;if(s===void 0){if(Zt(n,i))return;t.uniformMatrix2fv(this.addr,!1,i),Nt(n,i)}else{if(Zt(n,s))return;Bu.set(s),t.uniformMatrix2fv(this.addr,!1,Bu),Nt(n,s)}}function bx(t,i){let n=this.cache,s=i.elements;if(s===void 0){if(Zt(n,i))return;t.uniformMatrix3fv(this.addr,!1,i),Nt(n,i)}else{if(Zt(n,s))return;Iu.set(s),t.uniformMatrix3fv(this.addr,!1,Iu),Nt(n,s)}}function wx(t,i){let n=this.cache,s=i.elements;if(s===void 0){if(Zt(n,i))return;t.uniformMatrix4fv(this.addr,!1,i),Nt(n,i)}else{if(Zt(n,s))return;Du.set(s),t.uniformMatrix4fv(this.addr,!1,Du),Nt(n,s)}}function _x(t,i,n){let s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(t.uniform1i(this.addr,r),s[0]=r),n.safeSetTexture2D(i||Zh,r)}function Mx(t,i,n){let s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(t.uniform1i(this.addr,r),s[0]=r),n.setTexture2DArray(i||fx,r)}function Sx(t,i,n){let s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(t.uniform1i(this.addr,r),s[0]=r),n.setTexture3D(i||px,r)}function Ex(t,i,n){let s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(t.uniform1i(this.addr,r),s[0]=r),n.safeSetTextureCube(i||Kh,r)}function Tx(t,i){let n=this.cache;n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i)}function Cx(t,i){let n=this.cache;Zt(n,i)||(t.uniform2iv(this.addr,i),Nt(n,i))}function Px(t,i){let n=this.cache;Zt(n,i)||(t.uniform3iv(this.addr,i),Nt(n,i))}function Ax(t,i){let n=this.cache;Zt(n,i)||(t.uniform4iv(this.addr,i),Nt(n,i))}function Lx(t,i){let n=this.cache;n[0]!==i&&(t.uniform1ui(this.addr,i),n[0]=i)}function Rx(t){switch(t){case 5126:return mx;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return yx;case 35675:return bx;case 35676:return wx;case 5124:case 35670:return Tx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Ax;case 5125:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Mx}}function Dx(t,i){t.uniform1fv(this.addr,i)}function Ix(t,i){t.uniform1iv(this.addr,i)}function Bx(t,i){t.uniform2iv(this.addr,i)}function Ux(t,i){t.uniform3iv(this.addr,i)}function Ox(t,i){t.uniform4iv(this.addr,i)}function Fx(t,i){let n=zs(i,this.size,2);t.uniform2fv(this.addr,n)}function kx(t,i){let n=zs(i,this.size,3);t.uniform3fv(this.addr,n)}function Hx(t,i){let n=zs(i,this.size,4);t.uniform4fv(this.addr,n)}function Gx(t,i){let n=zs(i,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Nx(t,i){let n=zs(i,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vx(t,i){let n=zs(i,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zx(t,i,n){let s=i.length,r=Jh(n,s);t.uniform1iv(this.addr,r);for(let o=0;o!==s;++o)n.safeSetTexture2D(i[o]||Zh,r[o])}function Wx(t,i,n){let s=i.length,r=Jh(n,s);t.uniform1iv(this.addr,r);for(let o=0;o!==s;++o)n.safeSetTextureCube(i[o]||Kh,r[o])}function jx(t){switch(t){case 5126:return Dx;case 35664:return Fx;case 35665:return kx;case 35666:return Hx;case 35674:return Gx;case 35675:return Nx;case 35676:return Vx;case 5124:case 35670:return Ix;case 35667:case 35671:return Bx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35680:case 36300:case 36308:case 36293:return Wx}}function Xx(t,i,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Rx(i.type)}function $h(t,i,n){this.id=t,this.addr=n,this.cache=[],this.size=i.size,this.setValue=jx(i.type)}$h.prototype.updateCache=function(t){let i=this.cache;t instanceof Float32Array&&i.length!==t.length&&(this.cache=new Float32Array(t.length)),Nt(i,t)};function ed(t){this.id=t,this.seq=[],this.map={}}ed.prototype.setValue=function(t,i,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,i[a.id],n)}};var bl=/([\w\d_]+)(\])?(\[|\.)?/g;function Uu(t,i){t.seq.push(i),t.map[i.id]=i}function qx(t,i,n){let s=t.name,r=s.length;for(bl.lastIndex=0;;){let o=bl.exec(s),a=bl.lastIndex,l=o[1],c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Uu(n,u===void 0?new Xx(l,t,i):new $h(l,t,i));break}else{let h=n.map[l];h===void 0&&(h=new ed(l),Uu(n,h)),n=h}}}function Ji(t,i){this.seq=[],this.map={};let n=t.getProgramParameter(i,35718);for(let s=0;s<n;++s){let r=t.getActiveUniform(i,s),o=t.getUniformLocation(i,r.name);qx(r,o,this)}}Ji.prototype.setValue=function(t,i,n,s){let r=this.map[i];r!==void 0&&r.setValue(t,n,s)};Ji.prototype.setOptional=function(t,i,n){let s=i[n];s!==void 0&&this.setValue(t,n,s)};Ji.upload=function(t,i,n,s){for(let r=0,o=i.length;r!==o;++r){let a=i[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}};Ji.seqWithValue=function(t,i){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in i&&n.push(o)}return n};function Ou(t,i,n){let s=t.createShader(i);return t.shaderSource(s,n),t.compileShader(s),s}var Yx=0;function Qx(t){let i=t.split(`
`);for(let n=0;n<i.length;n++)i[n]=n+1+": "+i[n];return i.join(`
`)}function td(t){switch(t){case Ut:return["Linear","( value )"];case Fi:return["sRGB","( value )"];case Pc:return["RGBE","( value )"];case Vh:return["RGBM","( value, 7.0 )"];case zh:return["RGBM","( value, 16.0 )"];case Wh:return["RGBD","( value, 256.0 )"];case Zr:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case fm:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Fu(t,i,n){let s=t.getShaderParameter(i,35713),r=t.getShaderInfoLog(i).trim();if(s&&r==="")return"";let o=t.getShaderSource(i);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Qx(o)}function tr(t,i){let n=td(i);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Zx(t,i){let n=td(i);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Kx(t,i){let n;switch(i){case gp:n="Linear";break;case vp:n="Reinhard";break;case xp:n="OptimizedCineon";break;case yp:n="ACESFilmic";break;case bp:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",i),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Jx(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function $x(t){let i=[];for(let n in t){let s=t[n];s!==!1&&i.push("#define "+n+" "+s)}return i.join(`
`)}function ey(t,i){let n={},s=t.getProgramParameter(i,35721);for(let r=0;r<s;r++){let a=t.getActiveAttrib(i,r).name;n[a]=t.getAttribLocation(i,a)}return n}function lr(t){return t!==""}function ku(t,i){return t.replace(/NUM_DIR_LIGHTS/g,i.numDirLights).replace(/NUM_SPOT_LIGHTS/g,i.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,i.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,i.numPointLights).replace(/NUM_HEMI_LIGHTS/g,i.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,i.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,i.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,i.numPointLightShadows)}function Hu(t,i){return t.replace(/NUM_CLIPPING_PLANES/g,i.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,i.numClippingPlanes-i.numClipIntersection)}var ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(t){return t.replace(ty,iy)}function iy(t,i){let n=Be[i];if(n===void 0)throw new Error("Can not resolve #include <"+i+">");return Hl(n)}var ny=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,sy=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function Gu(t){return t.replace(sy,id).replace(ny,ry)}function ry(t,i,n,s){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),id(t,i,n,s)}function id(t,i,n,s){let r="";for(let o=parseInt(i);o<parseInt(n);o++)r+=s.replace(/\[ i \]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Nu(t){let i="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?i+=`
#define HIGH_PRECISION`:t.precision==="mediump"?i+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(i+=`
#define LOW_PRECISION`),i}function oy(t){let i="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Oh?i="SHADOWMAP_TYPE_PCF":t.shadowMapType===vc?i="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ar&&(i="SHADOWMAP_TYPE_VSM"),i}function ay(t){let i="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case yc:case bc:i="ENVMAP_TYPE_CUBE";break;case Yr:case _c:i="ENVMAP_TYPE_CUBE_UV";break;case ka:case wc:i="ENVMAP_TYPE_EQUIREC";break}return i}function ly(t){let i="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bc:case wc:i="ENVMAP_MODE_REFRACTION";break}return i}function cy(t){let i="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fa:i="ENVMAP_BLENDING_MULTIPLY";break;case pp:i="ENVMAP_BLENDING_MIX";break;case mp:i="ENVMAP_BLENDING_ADD";break}return i}function uy(t,i,n,s){let r=t.getContext(),o=n.defines,a=n.vertexShader,l=n.fragmentShader,c=oy(n),u=ay(n),d=ly(n),h=cy(n),p=t.gammaFactor>0?t.gammaFactor:1,f=n.isWebGL2?"":Jx(n),m=$x(o),w=r.createProgram(),y,g;if(n.isRawShaderMaterial?(y=[m].filter(lr).join(`
`),y.length>0&&(y+=`
`),g=[f,m].filter(lr).join(`
`),g.length>0&&(g+=`
`)):(y=[Nu(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),g=[f,Nu(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?Be.tonemapping_pars_fragment:"",n.toneMapping!==ds?Kx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Be.encodings_pars_fragment,n.map?tr("mapTexelToLinear",n.mapEncoding):"",n.matcap?tr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?tr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?tr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?tr("lightMapTexelToLinear",n.lightMapEncoding):"",Zx("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lr).join(`
`)),a=Hl(a),a=ku(a,n),a=Hu(a,n),l=Hl(l),l=ku(l,n),l=Hu(l,n),a=Gu(a),l=Gu(l),n.isWebGL2&&!n.isRawShaderMaterial){let V=!1,k=/^\s*#version\s+300\s+es\s*\n/;n.isShaderMaterial&&a.match(k)!==null&&l.match(k)!==null&&(V=!0,a=a.replace(k,""),l=l.replace(k,"")),y=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=[`#version 300 es
`,"#define varying in",V?"":"out highp vec4 pc_fragColor;",V?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g}let v=y+a,C=g+l,E=Ou(r,35633,v),A=Ou(r,35632,C);if(r.attachShader(w,E),r.attachShader(w,A),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w),t.debug.checkShaderErrors){let V=r.getProgramInfoLog(w).trim(),k=r.getShaderInfoLog(E).trim(),b=r.getShaderInfoLog(A).trim(),_=!0,M=!0;if(r.getProgramParameter(w,35714)===!1){_=!1;let T=Fu(r,E,"vertex"),S=Fu(r,A,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(w,35715),"gl.getProgramInfoLog",V,T,S)}else V!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",V):(k===""||b==="")&&(M=!1);M&&(this.diagnostics={runnable:_,programLog:V,vertexShader:{log:k,prefix:y},fragmentShader:{log:b,prefix:g}})}r.deleteShader(E),r.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Ji(r,w)),R};let O;return this.getAttributes=function(){return O===void 0&&(O=ey(r,w)),O},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.name=n.shaderName,this.id=Yx++,this.cacheKey=i,this.usedTimes=1,this.program=w,this.vertexShader=E,this.fragmentShader=A,this}function hy(t,i,n,s){let r=[],o=n.isWebGL2,a=n.logarithmicDepthBuffer,l=n.floatVertexTextures,c=n.maxVertexUniforms,u=n.vertexTextures,d=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen"];function f(E,A){let R;if(A){let O=Ri[A];R={name:E.name||E.type,uniforms:Vs.clone(O.uniforms),vertexShader:O.vertexShader,fragmentShader:O.fragmentShader}}else R={name:E.name||E.type,uniforms:E.uniforms,vertexShader:E.vertexShader,fragmentShader:E.fragmentShader};return R}function m(E){let R=E.skeleton.bones;if(l)return 1024;{let V=Math.floor((c-20)/4),k=Math.min(V,R.length);return k<R.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+R.length+" bones. This GPU supports "+k+"."),0):k}}function w(E){let A;return E?E.isTexture?A=E.encoding:E.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=E.texture.encoding):A=Ut,A}function y(E,A,R,O,V,k,b){let _=O.fog,M=E.isMeshStandardMaterial?O.environment:null,T=E.envMap||M,S=h[E.type],P=b.isSkinnedMesh?m(b):0;E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let D=f(E,S);E.onBeforeCompile(D,t);let U=t.getRenderTarget();return{isWebGL2:o,shaderID:S,shaderName:D.name,uniforms:D.uniforms,vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,defines:E.defines,isRawShaderMaterial:E.isRawShaderMaterial,isShaderMaterial:E.isShaderMaterial,precision:d,instancing:b.isInstancedMesh===!0,supportsVertexTextures:u,outputEncoding:U!==null?w(U.texture):t.outputEncoding,map:!!E.map,mapEncoding:w(E.map),matcap:!!E.matcap,matcapEncoding:w(E.matcap),envMap:!!T,envMapMode:T&&T.mapping,envMapEncoding:w(T),envMapCubeUV:!!T&&(T.mapping===Yr||T.mapping===_c),lightMap:!!E.lightMap,lightMapEncoding:w(E.lightMap),aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,emissiveMapEncoding:w(E.emissiveMap),bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===gm,tangentSpaceNormalMap:E.normalMapType===Gs,clearcoatMap:!!E.clearcoatMap,clearcoatRoughnessMap:!!E.clearcoatRoughnessMap,clearcoatNormalMap:!!E.clearcoatNormalMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,alphaMap:!!E.alphaMap,gradientMap:!!E.gradientMap,sheen:!!E.sheen,combine:E.combine,vertexTangents:E.normalMap&&E.vertexTangents,vertexColors:E.vertexColors,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.displacementMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap)&&!!E.displacementMap,fog:!!_,useFog:E.fog,fogExp2:_&&_.isFogExp2,flatShading:E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:a,skinning:E.skinning&&P>0,maxBones:P,useVertexTexture:l,morphTargets:E.morphTargets,morphNormals:E.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:V,numClipIntersection:k,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:E.toneMapped?t.toneMapping:ds,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:E.premultipliedAlpha,alphaTest:E.alphaTest,doubleSided:E.side===Ft,flipSided:E.side===ft,depthPacking:E.depthPacking!==void 0?E.depthPacking:!1,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||i.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:o||i.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:o||i.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:E.customProgramCacheKey()}}function g(E){let A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.fragmentShader),A.push(E.vertexShader)),E.defines!==void 0)for(let R in E.defines)A.push(R),A.push(E.defines[R]);if(E.isRawShaderMaterial===void 0){for(let R=0;R<p.length;R++)A.push(E[p[R]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(E.customProgramCacheKey),A.join()}function v(E,A){let R;for(let O=0,V=r.length;O<V;O++){let k=r[O];if(k.cacheKey===A){R=k,++R.usedTimes;break}}return R===void 0&&(R=new uy(t,A,E,s),r.push(R)),R}function C(E){if(--E.usedTimes===0){let A=r.indexOf(E);r[A]=r[r.length-1],r.pop(),E.destroy()}}return{getParameters:y,getProgramCacheKey:g,acquireProgram:v,releaseProgram:C,programs:r}}function dy(){let t=new WeakMap;function i(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{get:i,remove:n,update:s,dispose:r}}function fy(t,i){return t.groupOrder!==i.groupOrder?t.groupOrder-i.groupOrder:t.renderOrder!==i.renderOrder?t.renderOrder-i.renderOrder:t.program!==i.program?t.program.id-i.program.id:t.material.id!==i.material.id?t.material.id-i.material.id:t.z!==i.z?t.z-i.z:t.id-i.id}function py(t,i){return t.groupOrder!==i.groupOrder?t.groupOrder-i.groupOrder:t.renderOrder!==i.renderOrder?t.renderOrder-i.renderOrder:t.z!==i.z?i.z-t.z:t.id-i.id}function Vu(){let t=[],i=0,n=[],s=[],r={id:-1};function o(){i=0,n.length=0,s.length=0}function a(h,p,f,m,w,y){let g=t[i];return g===void 0?(g={id:h.id,object:h,geometry:p,material:f,program:f.program||r,groupOrder:m,renderOrder:h.renderOrder,z:w,group:y},t[i]=g):(g.id=h.id,g.object=h,g.geometry=p,g.material=f,g.program=f.program||r,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=w,g.group=y),i++,g}function l(h,p,f,m,w,y){let g=a(h,p,f,m,w,y);(f.transparent===!0?s:n).push(g)}function c(h,p,f,m,w,y){let g=a(h,p,f,m,w,y);(f.transparent===!0?s:n).unshift(g)}function u(h,p){n.length>1&&n.sort(h||fy),s.length>1&&s.sort(p||py)}function d(){for(let h=i,p=t.length;h<p;h++){let f=t[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.program=null,f.group=null}}return{opaque:n,transparent:s,init:o,push:l,unshift:c,finish:d,sort:u}}function my(){let t=new WeakMap;function i(r){let o=r.target;o.removeEventListener("dispose",i),t.delete(o)}function n(r,o){let a=t.get(r),l;return a===void 0?(l=new Vu,t.set(r,new WeakMap),t.get(r).set(o,l),r.addEventListener("dispose",i)):(l=a.get(o),l===void 0&&(l=new Vu,a.set(o,l))),l}function s(){t=new WeakMap}return{get:n,dispose:s}}function gy(){let t={};return{get:function(i){if(t[i.id]!==void 0)return t[i.id];let n;switch(i.type){case"DirectionalLight":n={direction:new L,color:new te};break;case"SpotLight":n={position:new L,direction:new L,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new L,halfWidth:new L,halfHeight:new L};break}return t[i.id]=n,n}}}function vy(){let t={};return{get:function(i){if(t[i.id]!==void 0)return t[i.id];let n;switch(i.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[i.id]=n,n}}}var xy=0;function yy(t,i){return(i.castShadow?1:0)-(t.castShadow?1:0)}function by(){let t=new gy,i=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new de,o=new de;function a(l,c,u){let d=0,h=0,p=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,w=0,y=0,g=0,v=0,C=0,E=0,A=u.matrixWorldInverse;l.sort(yy);for(let O=0,V=l.length;O<V;O++){let k=l[O],b=k.color,_=k.intensity,M=k.distance,T=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=b.r*_,h+=b.g*_,p+=b.b*_;else if(k.isLightProbe)for(let S=0;S<9;S++)n.probe[S].addScaledVector(k.sh.coefficients[S],_);else if(k.isDirectionalLight){let S=t.get(k);if(S.color.copy(k.color).multiplyScalar(k.intensity),S.direction.setFromMatrixPosition(k.matrixWorld),s.setFromMatrixPosition(k.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(A),k.castShadow){let P=k.shadow,D=i.get(k);D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=T,n.directionalShadowMatrix[f]=k.shadow.matrix,v++}n.directional[f]=S,f++}else if(k.isSpotLight){let S=t.get(k);if(S.position.setFromMatrixPosition(k.matrixWorld),S.position.applyMatrix4(A),S.color.copy(b).multiplyScalar(_),S.distance=M,S.direction.setFromMatrixPosition(k.matrixWorld),s.setFromMatrixPosition(k.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(A),S.coneCos=Math.cos(k.angle),S.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),S.decay=k.decay,k.castShadow){let P=k.shadow,D=i.get(k);D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,n.spotShadow[w]=D,n.spotShadowMap[w]=T,n.spotShadowMatrix[w]=k.shadow.matrix,E++}n.spot[w]=S,w++}else if(k.isRectAreaLight){let S=t.get(k);S.color.copy(b).multiplyScalar(_),S.position.setFromMatrixPosition(k.matrixWorld),S.position.applyMatrix4(A),o.identity(),r.copy(k.matrixWorld),r.premultiply(A),o.extractRotation(r),S.halfWidth.set(k.width*.5,0,0),S.halfHeight.set(0,k.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),n.rectArea[y]=S,y++}else if(k.isPointLight){let S=t.get(k);if(S.position.setFromMatrixPosition(k.matrixWorld),S.position.applyMatrix4(A),S.color.copy(k.color).multiplyScalar(k.intensity),S.distance=k.distance,S.decay=k.decay,k.castShadow){let P=k.shadow,D=i.get(k);D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,D.shadowCameraNear=P.camera.near,D.shadowCameraFar=P.camera.far,n.pointShadow[m]=D,n.pointShadowMap[m]=T,n.pointShadowMatrix[m]=k.shadow.matrix,C++}n.point[m]=S,m++}else if(k.isHemisphereLight){let S=t.get(k);S.direction.setFromMatrixPosition(k.matrixWorld),S.direction.transformDirection(A),S.direction.normalize(),S.skyColor.copy(k.color).multiplyScalar(_),S.groundColor.copy(k.groundColor).multiplyScalar(_),n.hemi[g]=S,g++}}n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;let R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==w||R.rectAreaLength!==y||R.hemiLength!==g||R.numDirectionalShadows!==v||R.numPointShadows!==C||R.numSpotShadows!==E)&&(n.directional.length=f,n.spot.length=w,n.rectArea.length=y,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=C,n.spotShadowMatrix.length=E,R.directionalLength=f,R.pointLength=m,R.spotLength=w,R.rectAreaLength=y,R.hemiLength=g,R.numDirectionalShadows=v,R.numPointShadows=C,R.numSpotShadows=E,n.version=xy++)}return{setup:a,state:n}}function zu(){let t=new by,i=[],n=[];function s(){i.length=0,n.length=0}function r(c){i.push(c)}function o(c){n.push(c)}function a(c){t.setup(i,n,c)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:a,pushLight:r,pushShadow:o}}function wy(){let t=new WeakMap;function i(r){let o=r.target;o.removeEventListener("dispose",i),t.delete(o)}function n(r,o){let a;return t.has(r)===!1?(a=new zu,t.set(r,new WeakMap),t.get(r).set(o,a),r.addEventListener("dispose",i)):t.get(r).has(o)===!1?(a=new zu,t.get(r).set(o,a)):a=t.get(r).get(o),a}function s(){t=new WeakMap}return{get:n,dispose:s}}function Pn(t){Ce.call(this),this.type="MeshDepthMaterial",this.depthPacking=pm,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Pn.prototype=Object.create(Ce.prototype);Pn.prototype.constructor=Pn;Pn.prototype.isMeshDepthMaterial=!0;Pn.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function An(t){Ce.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}An.prototype=Object.create(Ce.prototype);An.prototype.constructor=An;An.prototype.isMeshDistanceMaterial=!0;An.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var _y=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function nd(t,i,n){let s=new Kr,r=new z,o=new z,a=new ke,l=[],c=[],u={},d={0:ft,1:At,2:Ft},h=new we({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:My,fragmentShader:_y}),p=h.clone();p.defines.HORIZONAL_PASS=1;let f=new ce;f.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Ve(f,h),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh,this.render=function(A,R,O){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||A.length===0)return;let V=t.getRenderTarget(),k=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),_=t.state;_.setBlending(Ki),_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);for(let M=0,T=A.length;M<T;M++){let S=A[M],P=S.shadow;if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;if(P===void 0){console.warn("THREE.WebGLShadowMap:",S,"has no shadow.");continue}r.copy(P.mapSize);let D=P.getFrameExtents();if(r.multiply(D),o.copy(P.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(o.x=Math.floor(n/D.x),r.x=o.x*D.x,P.mapSize.x=o.x),r.y>n&&(o.y=Math.floor(n/D.y),r.y=o.y*D.y,P.mapSize.y=o.y)),P.map===null&&!P.isPointLightShadow&&this.type===ar){let H={minFilter:Ge,magFilter:Ge,format:Ze};P.map=new et(r.x,r.y,H),P.map.texture.name=S.name+".shadowMap",P.mapPass=new et(r.x,r.y,H),P.camera.updateProjectionMatrix()}if(P.map===null){let H={minFilter:st,magFilter:st,format:Ze};P.map=new et(r.x,r.y,H),P.map.texture.name=S.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();let U=P.getViewportCount();for(let H=0;H<U;H++){let W=P.getViewport(H);a.set(o.x*W.x,o.y*W.y,o.x*W.z,o.y*W.w),_.viewport(a),P.updateMatrices(S,H),s=P.getFrustum(),E(R,O,P.camera,S,this.type)}!P.isPointLightShadow&&this.type===ar&&y(P,O),P.needsUpdate=!1}w.needsUpdate=!1,t.setRenderTarget(V,k,b)};function y(A,R){let O=i.update(m);h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,O,h,m,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,O,p,m,null)}function g(A,R,O){let V=A<<0|R<<1|O<<2,k=l[V];return k===void 0&&(k=new Pn({depthPacking:mm,morphTargets:A,skinning:R}),l[V]=k),k}function v(A,R,O){let V=A<<0|R<<1|O<<2,k=c[V];return k===void 0&&(k=new An({morphTargets:A,skinning:R}),c[V]=k),k}function C(A,R,O,V,k,b,_){let M=null,T=g,S=A.customDepthMaterial;if(V.isPointLight===!0&&(T=v,S=A.customDistanceMaterial),S===void 0){let P=!1;O.morphTargets===!0&&(P=R.morphAttributes&&R.morphAttributes.position&&R.morphAttributes.position.length>0);let D=!1;A.isSkinnedMesh===!0&&(O.skinning===!0?D=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",A));let U=A.isInstancedMesh===!0;M=T(P,D,U)}else M=S;if(t.localClippingEnabled&&O.clipShadows===!0&&O.clippingPlanes.length!==0){let P=M.uuid,D=O.uuid,U=u[P];U===void 0&&(U={},u[P]=U);let H=U[D];H===void 0&&(H=M.clone(),U[D]=H),M=H}return M.visible=O.visible,M.wireframe=O.wireframe,_===ar?M.side=O.shadowSide!==null?O.shadowSide:O.side:M.side=O.shadowSide!==null?O.shadowSide:d[O.side],M.clipShadows=O.clipShadows,M.clippingPlanes=O.clippingPlanes,M.clipIntersection=O.clipIntersection,M.wireframeLinewidth=O.wireframeLinewidth,M.linewidth=O.linewidth,V.isPointLight===!0&&M.isMeshDistanceMaterial===!0&&(M.referencePosition.setFromMatrixPosition(V.matrixWorld),M.nearDistance=k,M.farDistance=b),M}function E(A,R,O,V,k){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===ar)&&(!A.frustumCulled||s.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let M=i.update(A),T=A.material;if(Array.isArray(T)){let S=M.groups;for(let P=0,D=S.length;P<D;P++){let U=S[P],H=T[U.materialIndex];if(H&&H.visible){let W=C(A,M,H,V,O.near,O.far,k);t.renderBufferDirect(O,null,M,W,A,U)}}}else if(T.visible){let S=C(A,M,T,V,O.near,O.far,k);t.renderBufferDirect(O,null,M,S,A,null)}}let _=A.children;for(let M=0,T=_.length;M<T;M++)E(_[M],R,O,V,k)}}function Sy(t,i,n){let s=n.isWebGL2;function r(){let N=!1,oe=new ke,ae=null,Ee=new ke(0,0,0,0);return{setMask:function(ne){ae!==ne&&!N&&(t.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){N=ne},setClear:function(ne,ge,He,Pe,ye){ye===!0&&(ne*=Pe,ge*=Pe,He*=Pe),oe.set(ne,ge,He,Pe),Ee.equals(oe)===!1&&(t.clearColor(ne,ge,He,Pe),Ee.copy(oe))},reset:function(){N=!1,ae=null,Ee.set(-1,0,0,0)}}}function o(){let N=!1,oe=null,ae=null,Ee=null;return{setTest:function(ne){ne?G(2929):q(2929)},setMask:function(ne){oe!==ne&&!N&&(t.depthMask(ne),oe=ne)},setFunc:function(ne){if(ae!==ne){if(ne)switch(ne){case ap:t.depthFunc(512);break;case lp:t.depthFunc(519);break;case cp:t.depthFunc(513);break;case Ll:t.depthFunc(515);break;case up:t.depthFunc(514);break;case hp:t.depthFunc(518);break;case dp:t.depthFunc(516);break;case fp:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);ae=ne}},setLocked:function(ne){N=ne},setClear:function(ne){Ee!==ne&&(t.clearDepth(ne),Ee=ne)},reset:function(){N=!1,oe=null,ae=null,Ee=null}}}function a(){let N=!1,oe=null,ae=null,Ee=null,ne=null,ge=null,He=null,Pe=null,ye=null;return{setTest:function(Ae){N||(Ae?G(2960):q(2960))},setMask:function(Ae){oe!==Ae&&!N&&(t.stencilMask(Ae),oe=Ae)},setFunc:function(Ae,pt,It){(ae!==Ae||Ee!==pt||ne!==It)&&(t.stencilFunc(Ae,pt,It),ae=Ae,Ee=pt,ne=It)},setOp:function(Ae,pt,It){(ge!==Ae||He!==pt||Pe!==It)&&(t.stencilOp(Ae,pt,It),ge=Ae,He=pt,Pe=It)},setLocked:function(Ae){N=Ae},setClear:function(Ae){ye!==Ae&&(t.clearStencil(Ae),ye=Ae)},reset:function(){N=!1,oe=null,ae=null,Ee=null,ne=null,ge=null,He=null,Pe=null,ye=null}}}let l=new r,c=new o,u=new a,d={},h=null,p=null,f=null,m=null,w=null,y=null,g=null,v=null,C=null,E=!1,A=null,R=null,O=null,V=null,k=null,b=t.getParameter(35661),_=!1,M=0,T=t.getParameter(7938);T.indexOf("WebGL")!==-1?(M=parseFloat(/^WebGL\ ([0-9])/.exec(T)[1]),_=M>=1):T.indexOf("OpenGL ES")!==-1&&(M=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(T)[1]),_=M>=2);let S=null,P={},D=new ke,U=new ke;function H(N,oe,ae){let Ee=new Uint8Array(4),ne=t.createTexture();t.bindTexture(N,ne),t.texParameteri(N,10241,9728),t.texParameteri(N,10240,9728);for(let ge=0;ge<ae;ge++)t.texImage2D(oe+ge,0,6408,1,1,0,6408,5121,Ee);return ne}let W={};W[3553]=H(3553,3553,1),W[34067]=H(34067,34069,6),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),G(2929),c.setFunc(Ll),We(!1),Te(ru),G(2884),xe(Ki);function G(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function q(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Z(N){return h!==N?(t.useProgram(N),h=N,!0):!1}let ue={[rs]:32774,[Zf]:32778,[Kf]:32779};if(s)ue[lu]=32775,ue[cu]=32776;else{let N=i.get("EXT_blend_minmax");N!==null&&(ue[lu]=N.MIN_EXT,ue[cu]=N.MAX_EXT)}let Oe={[Jf]:0,[$f]:1,[ep]:768,[kh]:770,[op]:776,[sp]:774,[ip]:772,[tp]:769,[Hh]:771,[rp]:775,[np]:773};function xe(N,oe,ae,Ee,ne,ge,He,Pe){if(N===Ki){p&&(q(3042),p=!1);return}if(p||(G(3042),p=!0),N!==Qf){if(N!==f||Pe!==E){if((m!==rs||g!==rs)&&(t.blendEquation(32774),m=rs,g=rs),Pe)switch(N){case cr:t.blendFuncSeparate(1,771,1,771);break;case ms:t.blendFunc(1,1);break;case ou:t.blendFuncSeparate(0,0,769,771);break;case au:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case cr:t.blendFuncSeparate(770,771,1,771);break;case ms:t.blendFunc(770,1);break;case ou:t.blendFunc(0,769);break;case au:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,y=null,v=null,C=null,f=N,E=Pe}return}ne=ne||oe,ge=ge||ae,He=He||Ee,(oe!==m||ne!==g)&&(t.blendEquationSeparate(ue[oe],ue[ne]),m=oe,g=ne),(ae!==w||Ee!==y||ge!==v||He!==C)&&(t.blendFuncSeparate(Oe[ae],Oe[Ee],Oe[ge],Oe[He]),w=ae,y=Ee,v=ge,C=He),f=N,E=null}function Y(N,oe){N.side===Ft?q(2884):G(2884);let ae=N.side===ft;oe&&(ae=!ae),We(ae),N.blending===cr&&N.transparent===!1?xe(Ki):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),l.setMask(N.colorWrite);let Ee=N.stencilWrite;u.setTest(Ee),Ee&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_e(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits)}function We(N){A!==N&&(N?t.frontFace(2304):t.frontFace(2305),A=N)}function Te(N){N!==qf?(G(2884),N!==R&&(N===ru?t.cullFace(1029):N===Yf?t.cullFace(1028):t.cullFace(1032))):q(2884),R=N}function Re(N){N!==O&&(_&&t.lineWidth(N),O=N)}function _e(N,oe,ae){N?(G(32823),(V!==oe||k!==ae)&&(t.polygonOffset(oe,ae),V=oe,k=ae)):q(32823)}function J(N){N?G(3089):q(3089)}function $(N){N===void 0&&(N=33984+b-1),S!==N&&(t.activeTexture(N),S=N)}function ee(N,oe){S===null&&$();let ae=P[S];ae===void 0&&(ae={type:void 0,texture:void 0},P[S]=ae),(ae.type!==N||ae.texture!==oe)&&(t.bindTexture(N,oe||W[N]),ae.type=N,ae.texture=oe)}function me(){let N=P[S];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(N){D.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),D.copy(N))}function ie(N){U.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),U.copy(N))}function K(){d={},S=null,P={},h=null,f=null,A=null,R=null,l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:G,disable:q,useProgram:Z,setBlending:xe,setMaterial:Y,setFlipSided:We,setCullFace:Te,setLineWidth:Re,setPolygonOffset:_e,setScissorTest:J,activeTexture:$,bindTexture:ee,unbindTexture:me,compressedTexImage2D:fe,texImage2D:De,texImage3D:I,scissor:F,viewport:ie,reset:K}}function Ey(t,i,n,s,r,o,a){let l=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,p=new WeakMap,f,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,F){return m?new OffscreenCanvas(I,F):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(I,F,ie,K){let N=1;if((I.width>K||I.height>K)&&(N=K/Math.max(I.width,I.height)),N<1||F===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let oe=F?be.floorPowerOfTwo:Math.floor,ae=oe(N*I.width),Ee=oe(N*I.height);f===void 0&&(f=w(ae,Ee));let ne=ie?w(ae,Ee):f;return ne.width=ae,ne.height=Ee,ne.getContext("2d").drawImage(I,0,0,ae,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ae+"x"+Ee+")."),ne}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function g(I){return be.isPowerOfTwo(I.width)&&be.isPowerOfTwo(I.height)}function v(I){return l?!1:I.wrapS!==Tt||I.wrapT!==Tt||I.minFilter!==st&&I.minFilter!==Ge}function C(I,F){return I.generateMipmaps&&F&&I.minFilter!==st&&I.minFilter!==Ge}function E(I,F,ie,K){t.generateMipmap(I);let N=s.get(F);N.__maxMipLevel=Math.log(Math.max(ie,K))*Math.LOG2E}function A(I,F,ie){if(l===!1)return F;if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=F;return F===6403&&(ie===5126&&(K=33326),ie===5131&&(K=33325),ie===5121&&(K=33321)),F===6407&&(ie===5126&&(K=34837),ie===5131&&(K=34843),ie===5121&&(K=32849)),F===6408&&(ie===5126&&(K=34836),ie===5131&&(K=34842),ie===5121&&(K=32856)),(K===33325||K===33326||K===34842||K===34836)&&i.get("EXT_color_buffer_float"),K}function R(I){return I===st||I===pr||I===Rl?9728:9729}function O(I){let F=I.target;F.removeEventListener("dispose",O),k(F),F.isVideoTexture&&p.delete(F),a.memory.textures--}function V(I){let F=I.target;F.removeEventListener("dispose",V),b(F),a.memory.textures--}function k(I){let F=s.get(I);F.__webglInit!==void 0&&(t.deleteTexture(F.__webglTexture),s.remove(I))}function b(I){let F=s.get(I),ie=s.get(I.texture);if(I){if(ie.__webglTexture!==void 0&&t.deleteTexture(ie.__webglTexture),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)t.deleteFramebuffer(F.__webglFramebuffer[K]),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[K]);else t.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer&&t.deleteRenderbuffer(F.__webglColorRenderbuffer),F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer);s.remove(I.texture),s.remove(I)}}let _=0;function M(){_=0}function T(){let I=_;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),_+=1,I}function S(I,F){let ie=s.get(I);if(I.isVideoTexture&&$(I),I.version>0&&ie.__version!==I.version){let K=I.image;if(K===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(ie,I,F);return}}n.activeTexture(33984+F),n.bindTexture(3553,ie.__webglTexture)}function P(I,F){let ie=s.get(I);if(I.version>0&&ie.__version!==I.version){ue(ie,I,F);return}n.activeTexture(33984+F),n.bindTexture(35866,ie.__webglTexture)}function D(I,F){let ie=s.get(I);if(I.version>0&&ie.__version!==I.version){ue(ie,I,F);return}n.activeTexture(33984+F),n.bindTexture(32879,ie.__webglTexture)}function U(I,F){if(I.image.length!==6)return;let ie=s.get(I);if(I.version>0&&ie.__version!==I.version){Z(ie,I),n.activeTexture(33984+F),n.bindTexture(34067,ie.__webglTexture),t.pixelStorei(37440,I.flipY);let K=I&&(I.isCompressedTexture||I.image[0].isCompressedTexture),N=I.image[0]&&I.image[0].isDataTexture,oe=[];for(let ye=0;ye<6;ye++)!K&&!N?oe[ye]=y(I.image[ye],!1,!0,u):oe[ye]=N?I.image[ye].image:I.image[ye];let ae=oe[0],Ee=g(ae)||l,ne=o.convert(I.format),ge=o.convert(I.type),He=A(I.internalFormat,ne,ge);q(34067,I,Ee);let Pe;if(K){for(let ye=0;ye<6;ye++){Pe=oe[ye].mipmaps;for(let Ae=0;Ae<Pe.length;Ae++){let pt=Pe[Ae];I.format!==Ze&&I.format!==vi?ne!==null?n.compressedTexImage2D(34069+ye,Ae,He,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ye,Ae,He,pt.width,pt.height,0,ne,ge,pt.data)}}ie.__maxMipLevel=Pe.length-1}else{Pe=I.mipmaps;for(let ye=0;ye<6;ye++)if(N){n.texImage2D(34069+ye,0,He,oe[ye].width,oe[ye].height,0,ne,ge,oe[ye].data);for(let Ae=0;Ae<Pe.length;Ae++){let It=Pe[Ae].image[ye].image;n.texImage2D(34069+ye,Ae+1,He,It.width,It.height,0,ne,ge,It.data)}}else{n.texImage2D(34069+ye,0,He,ne,ge,oe[ye]);for(let Ae=0;Ae<Pe.length;Ae++){let pt=Pe[Ae];n.texImage2D(34069+ye,Ae+1,He,ne,ge,pt.image[ye])}}ie.__maxMipLevel=Pe.length}C(I,Ee)&&E(34067,I,ae.width,ae.height),ie.__version=I.version,I.onUpdate&&I.onUpdate(I)}else n.activeTexture(33984+F),n.bindTexture(34067,ie.__webglTexture)}function H(I,F){n.activeTexture(33984+F),n.bindTexture(34067,s.get(I).__webglTexture)}let W={[Bt]:10497,[Tt]:33071,[sa]:33648},G={[st]:9728,[pr]:9984,[Rl]:9986,[Ge]:9729,[Gh]:9985,[Ha]:9987};function q(I,F,ie){ie?(t.texParameteri(I,10242,W[F.wrapS]),t.texParameteri(I,10243,W[F.wrapT]),(I===32879||I===35866)&&t.texParameteri(I,32882,W[F.wrapR]),t.texParameteri(I,10240,G[F.magFilter]),t.texParameteri(I,10241,G[F.minFilter])):(t.texParameteri(I,10242,33071),t.texParameteri(I,10243,33071),(I===32879||I===35866)&&t.texParameteri(I,32882,33071),(F.wrapS!==Tt||F.wrapT!==Tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(I,10240,R(F.magFilter)),t.texParameteri(I,10241,R(F.minFilter)),F.minFilter!==st&&F.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let K=i.get("EXT_texture_filter_anisotropic");if(K){if(F.type===jt&&i.get("OES_texture_float_linear")===null||F.type===tn&&(l||i.get("OES_texture_half_float_linear"))===null)return;(F.anisotropy>1||s.get(F).__currentAnisotropy)&&(t.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),s.get(F).__currentAnisotropy=F.anisotropy)}}function Z(I,F){I.__webglInit===void 0&&(I.__webglInit=!0,F.addEventListener("dispose",O),I.__webglTexture=t.createTexture(),a.memory.textures++)}function ue(I,F,ie){let K=3553;F.isDataTexture2DArray&&(K=35866),F.isDataTexture3D&&(K=32879),Z(I,F),n.activeTexture(33984+ie),n.bindTexture(K,I.__webglTexture),t.pixelStorei(37440,F.flipY),t.pixelStorei(37441,F.premultiplyAlpha),t.pixelStorei(3317,F.unpackAlignment);let N=v(F)&&g(F.image)===!1,oe=y(F.image,N,!1,d),ae=g(oe)||l,Ee=o.convert(F.format),ne=o.convert(F.type),ge=A(F.internalFormat,Ee,ne);q(K,F,ae);let He,Pe=F.mipmaps;if(F.isDepthTexture)ge=6402,l?F.type===jt?ge=36012:F.type===fs?ge=33190:F.type===ur?ge=35056:ge=33189:F.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F.format===qt&&ge===6402&&F.type!==gs&&F.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F.type=gs,ne=o.convert(F.type)),F.format===mr&&ge===6402&&(ge=34041,F.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F.type=ur,ne=o.convert(F.type))),n.texImage2D(3553,0,ge,oe.width,oe.height,0,Ee,ne,null);else if(F.isDataTexture)if(Pe.length>0&&ae){for(let ye=0,Ae=Pe.length;ye<Ae;ye++)He=Pe[ye],n.texImage2D(3553,ye,ge,He.width,He.height,0,Ee,ne,He.data);F.generateMipmaps=!1,I.__maxMipLevel=Pe.length-1}else n.texImage2D(3553,0,ge,oe.width,oe.height,0,Ee,ne,oe.data),I.__maxMipLevel=0;else if(F.isCompressedTexture){for(let ye=0,Ae=Pe.length;ye<Ae;ye++)He=Pe[ye],F.format!==Ze&&F.format!==vi?Ee!==null?n.compressedTexImage2D(3553,ye,ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,ye,ge,He.width,He.height,0,Ee,ne,He.data);I.__maxMipLevel=Pe.length-1}else if(F.isDataTexture2DArray)n.texImage3D(35866,0,ge,oe.width,oe.height,oe.depth,0,Ee,ne,oe.data),I.__maxMipLevel=0;else if(F.isDataTexture3D)n.texImage3D(32879,0,ge,oe.width,oe.height,oe.depth,0,Ee,ne,oe.data),I.__maxMipLevel=0;else if(Pe.length>0&&ae){for(let ye=0,Ae=Pe.length;ye<Ae;ye++)He=Pe[ye],n.texImage2D(3553,ye,ge,Ee,ne,He);F.generateMipmaps=!1,I.__maxMipLevel=Pe.length-1}else n.texImage2D(3553,0,ge,Ee,ne,oe),I.__maxMipLevel=0;C(F,ae)&&E(K,F,oe.width,oe.height),I.__version=F.version,F.onUpdate&&F.onUpdate(F)}function Oe(I,F,ie,K){let N=o.convert(F.texture.format),oe=o.convert(F.texture.type),ae=A(F.texture.internalFormat,N,oe);n.texImage2D(K,0,ae,F.width,F.height,0,N,oe,null),t.bindFramebuffer(36160,I),t.framebufferTexture2D(36160,ie,K,s.get(F.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(I,F,ie){if(t.bindRenderbuffer(36161,I),F.depthBuffer&&!F.stencilBuffer){let K=33189;if(ie){let N=F.depthTexture;N&&N.isDepthTexture&&(N.type===jt?K=36012:N.type===fs&&(K=33190));let oe=J(F);t.renderbufferStorageMultisample(36161,oe,K,F.width,F.height)}else t.renderbufferStorage(36161,K,F.width,F.height);t.framebufferRenderbuffer(36160,36096,36161,I)}else if(F.depthBuffer&&F.stencilBuffer){if(ie){let K=J(F);t.renderbufferStorageMultisample(36161,K,35056,F.width,F.height)}else t.renderbufferStorage(36161,34041,F.width,F.height);t.framebufferRenderbuffer(36160,33306,36161,I)}else{let K=o.convert(F.texture.format),N=o.convert(F.texture.type),oe=A(F.texture.internalFormat,K,N);if(ie){let ae=J(F);t.renderbufferStorageMultisample(36161,ae,oe,F.width,F.height)}else t.renderbufferStorage(36161,oe,F.width,F.height)}t.bindRenderbuffer(36161,null)}function Y(I,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(F.depthTexture).__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),S(F.depthTexture,0);let K=s.get(F.depthTexture).__webglTexture;if(F.depthTexture.format===qt)t.framebufferTexture2D(36160,36096,3553,K,0);else if(F.depthTexture.format===mr)t.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function We(I){let F=s.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Y(F.__webglFramebuffer,I)}else if(ie){F.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,F.__webglFramebuffer[K]),F.__webglDepthbuffer[K]=t.createRenderbuffer(),xe(F.__webglDepthbuffer[K],I,!1)}else t.bindFramebuffer(36160,F.__webglFramebuffer),F.__webglDepthbuffer=t.createRenderbuffer(),xe(F.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function Te(I){let F=s.get(I),ie=s.get(I.texture);I.addEventListener("dispose",V),ie.__webglTexture=t.createTexture(),a.memory.textures++;let K=I.isWebGLCubeRenderTarget===!0,N=I.isWebGLMultisampleRenderTarget===!0,oe=g(I)||l;if(l&&I.texture.format===vi&&(I.texture.type===jt||I.texture.type===tn)&&(I.texture.format=Ze,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),K){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)F.__webglFramebuffer[ae]=t.createFramebuffer()}else if(F.__webglFramebuffer=t.createFramebuffer(),N)if(l){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,F.__webglColorRenderbuffer);let ae=o.convert(I.texture.format),Ee=o.convert(I.texture.type),ne=A(I.texture.internalFormat,ae,Ee),ge=J(I);t.renderbufferStorageMultisample(36161,ge,ne,I.width,I.height),t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,F.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),I.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(F.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(K){n.bindTexture(34067,ie.__webglTexture),q(34067,I.texture,oe);for(let ae=0;ae<6;ae++)Oe(F.__webglFramebuffer[ae],I,36064,34069+ae);C(I.texture,oe)&&E(34067,I.texture,I.width,I.height),n.bindTexture(34067,null)}else n.bindTexture(3553,ie.__webglTexture),q(3553,I.texture,oe),Oe(F.__webglFramebuffer,I,36064,3553),C(I.texture,oe)&&E(3553,I.texture,I.width,I.height),n.bindTexture(3553,null);I.depthBuffer&&We(I)}function Re(I){let F=I.texture,ie=g(I)||l;if(C(F,ie)){let K=I.isWebGLCubeRenderTarget?34067:3553,N=s.get(F).__webglTexture;n.bindTexture(K,N),E(K,F,I.width,I.height),n.bindTexture(K,null)}}function _e(I){if(I.isWebGLMultisampleRenderTarget)if(l){let F=s.get(I);t.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,F.__webglFramebuffer);let ie=I.width,K=I.height,N=16384;I.depthBuffer&&(N|=256),I.stencilBuffer&&(N|=1024),t.blitFramebuffer(0,0,ie,K,0,0,ie,K,N,9728),t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function J(I){return l&&I.isWebGLMultisampleRenderTarget?Math.min(h,I.samples):0}function $(I){let F=a.render.frame;p.get(I)!==F&&(p.set(I,F),I.update())}let ee=!1,me=!1;function fe(I,F){I&&I.isWebGLRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ee=!0),I=I.texture),S(I,F)}function De(I,F){I&&I.isWebGLCubeRenderTarget&&(me===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),me=!0),I=I.texture),I&&I.isCubeTexture||Array.isArray(I.image)&&I.image.length===6?U(I,F):H(I,F)}this.allocateTextureUnit=T,this.resetTextureUnits=M,this.setTexture2D=S,this.setTexture2DArray=P,this.setTexture3D=D,this.setTextureCube=U,this.setTextureCubeDynamic=H,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=_e,this.safeSetTexture2D=fe,this.safeSetTextureCube=De}function Ty(t,i,n){let s=n.isWebGL2;function r(o){let a;if(o===Qr)return 5121;if(o===Sp)return 32819;if(o===Ep)return 32820;if(o===Tp)return 33635;if(o===wp)return 5120;if(o===_p)return 5122;if(o===gs)return 5123;if(o===Mp)return 5124;if(o===fs)return 5125;if(o===jt)return 5126;if(o===tn)return s?5131:(a=i.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Mc)return 6406;if(o===vi)return 6407;if(o===Ze)return 6408;if(o===Sc)return 6409;if(o===Cp)return 6410;if(o===qt)return 6402;if(o===mr)return 34041;if(o===Ec)return 6403;if(o===Ap)return 36244;if(o===Tc)return 33319;if(o===Lp)return 33320;if(o===Rp)return 36248;if(o===Dp)return 36249;if(o===uu||o===hu||o===du||o===fu)if(a=i.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===uu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===du)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===fu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===pu||o===mu||o===gu||o===vu)if(a=i.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===pu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===mu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===gu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===vu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ip)return a=i.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((o===xu||o===yu)&&(a=i.get("WEBGL_compressed_texture_etc"),a!==null)){if(o===xu)return a.COMPRESSED_RGB8_ETC2;if(o===yu)return a.COMPRESSED_RGBA8_ETC2_EAC}if(o===Bp||o===Up||o===Op||o===Fp||o===kp||o===Hp||o===Gp||o===Np||o===Vp||o===zp||o===Wp||o===jp||o===Xp||o===qp||o===Qp||o===Zp||o===Kp||o===Jp||o===$p||o===em||o===tm||o===im||o===nm||o===sm||o===rm||o===om||o===am||o===lm)return a=i.get("WEBGL_compressed_texture_astc"),a!==null?o:null;if(o===Yp)return a=i.get("EXT_texture_compression_bptc"),a!==null?o:null;if(o===ur)return s?34042:(a=i.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Gl(t){nt.call(this),this.cameras=t||[]}Gl.prototype=Object.assign(Object.create(nt.prototype),{constructor:Gl,isArrayCamera:!0});function Rt(){re.call(this),this.type="Group"}Rt.prototype=Object.assign(Object.create(re.prototype),{constructor:Rt,isGroup:!0});function ca(){this._targetRay=null,this._grip=null}Object.assign(ca.prototype,{constructor:ca,getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this},update:function(t,i,n){let s=null,r=null,o=this._targetRay,a=this._grip;return t&&(o!==null&&(s=i.getPose(t.targetRaySpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=i.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)))),o!==null&&(o.visible=s!==null),a!==null&&(a.visible=r!==null),this}});function sd(t,i){let n=this,s=null,r=1,o=null,a="local-floor",l=null,c=[],u=new Map,d=new nt;d.layers.enable(1),d.viewport=new ke;let h=new nt;h.layers.enable(2),h.viewport=new ke;let p=[d,h],f=new Gl;f.layers.enable(1),f.layers.enable(2);let m=null,w=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(_){let M=c[_];return M===void 0&&(M=new ca,c[_]=M),M.getTargetRaySpace()},this.getControllerGrip=function(_){let M=c[_];return M===void 0&&(M=new ca,c[_]=M),M.getGripSpace()};function y(_){let M=u.get(_.inputSource);M&&M.dispatchEvent({type:_.type})}function g(){u.forEach(function(_,M){_.disconnect(M)}),u.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),b.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function v(_){o=_,b.setContext(s),b.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(_){r=_,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_){a=_,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return s},this.setSession=function(_){if(s=_,s!==null){s.addEventListener("select",y),s.addEventListener("selectstart",y),s.addEventListener("selectend",y),s.addEventListener("squeeze",y),s.addEventListener("squeezestart",y),s.addEventListener("squeezeend",y),s.addEventListener("end",g);let M=i.getContextAttributes();M.xrCompatible!==!0&&i.makeXRCompatible();let T={antialias:M.antialias,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r},S=new XRWebGLLayer(s,i,T);s.updateRenderState({baseLayer:S}),s.requestReferenceSpace(a).then(v),s.addEventListener("inputsourceschange",C)}};function C(_){let M=s.inputSources;for(let T=0;T<c.length;T++)u.set(M[T],c[T]);for(let T=0;T<_.removed.length;T++){let S=_.removed[T],P=u.get(S);P&&(P.dispatchEvent({type:"disconnected",data:S}),u.delete(S))}for(let T=0;T<_.added.length;T++){let S=_.added[T],P=u.get(S);P&&P.dispatchEvent({type:"connected",data:S})}}let E=new L,A=new L;function R(_,M,T){E.setFromMatrixPosition(M.matrixWorld),A.setFromMatrixPosition(T.matrixWorld);let S=E.distanceTo(A),P=M.projectionMatrix.elements,D=T.projectionMatrix.elements,U=P[14]/(P[10]-1),H=P[14]/(P[10]+1),W=(P[9]+1)/P[5],G=(P[9]-1)/P[5],q=(P[8]-1)/P[0],Z=(D[8]+1)/D[0],ue=U*q,Oe=U*Z,xe=S/(-q+Z),Y=xe*-q;M.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(Y),_.translateZ(xe),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.getInverse(_.matrixWorld);let We=U+xe,Te=H+xe,Re=ue-Y,_e=Oe+(S-Y),J=W*H/Te*We,$=G*H/Te*We;_.projectionMatrix.makePerspective(Re,_e,J,$,We,Te)}function O(_,M){M===null?_.matrixWorld.copy(_.matrix):_.matrixWorld.multiplyMatrices(M.matrixWorld,_.matrix),_.matrixWorldInverse.getInverse(_.matrixWorld)}this.getCamera=function(_){f.near=h.near=d.near=_.near,f.far=h.far=d.far=_.far,(m!==f.near||w!==f.far)&&(s.updateRenderState({depthNear:f.near,depthFar:f.far}),m=f.near,w=f.far);let M=_.parent,T=f.cameras;O(f,M);for(let P=0;P<T.length;P++)O(T[P],M);_.matrixWorld.copy(f.matrixWorld);let S=_.children;for(let P=0,D=S.length;P<D;P++)S[P].updateMatrixWorld(!0);return T.length===2?R(f,d,h):f.projectionMatrix.copy(d.projectionMatrix),f};let V=null;function k(_,M){if(l=M.getViewerPose(o),l!==null){let S=l.views,P=s.renderState.baseLayer;t.setFramebuffer(P.framebuffer);let D=!1;S.length!==f.cameras.length&&(f.cameras.length=0,D=!0);for(let U=0;U<S.length;U++){let H=S[U],W=P.getViewport(H),G=p[U];G.matrix.fromArray(H.transform.matrix),G.projectionMatrix.fromArray(H.projectionMatrix),G.viewport.set(W.x,W.y,W.width,W.height),U===0&&f.matrix.copy(G.matrix),D===!0&&f.cameras.push(G)}}let T=s.inputSources;for(let S=0;S<c.length;S++){let P=c[S],D=T[S];P.update(D,M,o)}V&&V(_,M)}let b=new Qh;b.setAnimationLoop(k),this.setAnimationLoop=function(_){V=_},this.dispose=function(){}}Object.assign(sd.prototype,ki.prototype);function Cy(t){function i(g,v){g.fogColor.value.copy(v.color),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function n(g,v,C,E,A){v.isMeshBasicMaterial?s(g,v):v.isMeshLambertMaterial?(s(g,v),c(g,v)):v.isMeshToonMaterial?(s(g,v),d(g,v)):v.isMeshPhongMaterial?(s(g,v),u(g,v)):v.isMeshStandardMaterial?(s(g,v,C),v.isMeshPhysicalMaterial?p(g,v,C):h(g,v,C)):v.isMeshMatcapMaterial?(s(g,v),f(g,v)):v.isMeshDepthMaterial?(s(g,v),m(g,v)):v.isMeshDistanceMaterial?(s(g,v),w(g,v)):v.isMeshNormalMaterial?(s(g,v),y(g,v)):v.isLineBasicMaterial?(r(g,v),v.isLineDashedMaterial&&o(g,v)):v.isPointsMaterial?a(g,v,E,A):v.isSpriteMaterial?l(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(g,v,C){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map),v.alphaMap&&(g.alphaMap.value=v.alphaMap),v.specularMap&&(g.specularMap.value=v.specularMap);let E=v.envMap||C;E&&(g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture?-1:1,g.reflectivity.value=v.reflectivity,g.refractionRatio.value=v.refractionRatio,g.maxMipLevel.value=t.get(E).__maxMipLevel),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity);let A;v.map?A=v.map:v.specularMap?A=v.specularMap:v.displacementMap?A=v.displacementMap:v.normalMap?A=v.normalMap:v.bumpMap?A=v.bumpMap:v.roughnessMap?A=v.roughnessMap:v.metalnessMap?A=v.metalnessMap:v.alphaMap?A=v.alphaMap:v.emissiveMap&&(A=v.emissiveMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix));let R;v.aoMap?R=v.aoMap:v.lightMap&&(R=v.lightMap),R!==void 0&&(R.isWebGLRenderTarget&&(R=R.texture),R.matrixAutoUpdate===!0&&R.updateMatrix(),g.uv2Transform.value.copy(R.matrix))}function r(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity}function o(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function a(g,v,C,E){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*C,g.scale.value=E*.5,v.map&&(g.map.value=v.map),v.alphaMap&&(g.alphaMap.value=v.alphaMap);let A;v.map?A=v.map:v.alphaMap&&(A=v.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function l(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map),v.alphaMap&&(g.alphaMap.value=v.alphaMap);let C;v.map?C=v.map:v.alphaMap&&(C=v.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),g.uvTransform.value.copy(C.matrix))}function c(g,v){v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap)}function u(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap),v.bumpMap&&(g.bumpMap.value=v.bumpMap,g.bumpScale.value=v.bumpScale,v.side===ft&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,g.normalScale.value.copy(v.normalScale),v.side===ft&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias)}function d(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap),v.bumpMap&&(g.bumpMap.value=v.bumpMap,g.bumpScale.value=v.bumpScale,v.side===ft&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,g.normalScale.value.copy(v.normalScale),v.side===ft&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias)}function h(g,v,C){g.roughness.value=v.roughness,g.metalness.value=v.metalness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap),v.bumpMap&&(g.bumpMap.value=v.bumpMap,g.bumpScale.value=v.bumpScale,v.side===ft&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,g.normalScale.value.copy(v.normalScale),v.side===ft&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),(v.envMap||C)&&(g.envMapIntensity.value=v.envMapIntensity)}function p(g,v,C){h(g,v,C),g.reflectivity.value=v.reflectivity,g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.sheen&&g.sheen.value.copy(v.sheen),v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),g.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===ft&&g.clearcoatNormalScale.value.negate()),g.transparency.value=v.transparency}function f(g,v){v.matcap&&(g.matcap.value=v.matcap),v.bumpMap&&(g.bumpMap.value=v.bumpMap,g.bumpScale.value=v.bumpScale,v.side===ft&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,g.normalScale.value.copy(v.normalScale),v.side===ft&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias)}function m(g,v){v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias)}function w(g,v){v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),g.referencePosition.value.copy(v.referencePosition),g.nearDistance.value=v.nearDistance,g.farDistance.value=v.farDistance}function y(g,v){v.bumpMap&&(g.bumpMap.value=v.bumpMap,g.bumpScale.value=v.bumpScale,v.side===ft&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,g.normalScale.value.copy(v.normalScale),v.side===ft&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias)}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ws(t){t=t||{};let i=t.canvas!==void 0?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=t.context!==void 0?t.context:null,s=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,o=t.stencil!==void 0?t.stencil:!0,a=t.antialias!==void 0?t.antialias:!1,l=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,u=t.powerPreference!==void 0?t.powerPreference:"default",d=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1,h=null,p=null;this.domElement=i,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Ut,this.physicallyCorrectLights=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let f=this,m=!1,w=null,y=0,g=0,v=null,C=null,E=-1,A=null,R=null,O=new ke,V=new ke,k=null,b=i.width,_=i.height,M=1,T=null,S=null,P=new ke(0,0,b,_),D=new ke(0,0,b,_),U=!1,H=new Kr,W=new sx,G=!1,q=!1,Z=new de,ue=new L,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return v===null?M:1}let Y=n;function We(B,X){for(let j=0;j<B.length;j++){let Q=B[j],pe=i.getContext(Q,X);if(pe!==null)return pe}return null}try{let B={alpha:s,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if(i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",pt,!1),Y===null){let X=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&X.shift(),Y=We(X,B),Y===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Te,Re,_e,J,$,ee,me,fe,De,I,F,ie,K,N,oe,ae,Ee,ne,ge;function He(){Te=new rx(Y),Re=new nx(Y,Te,t),Re.isWebGL2===!1&&(Te.get("WEBGL_depth_texture"),Te.get("OES_texture_float"),Te.get("OES_texture_half_float"),Te.get("OES_texture_half_float_linear"),Te.get("OES_standard_derivatives"),Te.get("OES_element_index_uint"),Te.get("OES_vertex_array_object"),Te.get("ANGLE_instanced_arrays")),Te.get("OES_texture_float_linear"),ne=new Ty(Y,Te,Re),_e=new Sy(Y,Te,Re),_e.scissor(V.copy(D).multiplyScalar(M).floor()),_e.viewport(O.copy(P).multiplyScalar(M).floor()),J=new lx(Y),$=new dy,ee=new Ey(Y,Te,_e,$,Re,ne,J),me=new Bm(Y,Re),ge=new tx(Y,Te,me,Re),fe=new ox(Y,me,J,ge),De=new dx(Y,fe,me,J),oe=new hx(Y),I=new hy(f,Te,Re,ge),F=new Cy($),ie=new my,K=new wy,N=new ex(f,_e,De,l),ae=new ix(Y,Te,J,Re),Ee=new ax(Y,Te,J,Re),J.programs=I.programs,f.capabilities=Re,f.extensions=Te,f.properties=$,f.renderLists=ie,f.state=_e,f.info=J}He();let Pe=new sd(f,Y);this.xr=Pe;let ye=new nd(f,De,Re.maxTextureSize);this.shadowMap=ye,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let B=Te.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=Te.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(B){B!==void 0&&(M=B,this.setSize(b,_,!1))},this.getSize=function(B){return B===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),B=new z),B.set(b,_)},this.setSize=function(B,X,j){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=B,_=X,i.width=Math.floor(B*M),i.height=Math.floor(X*M),j!==!1&&(i.style.width=B+"px",i.style.height=X+"px"),this.setViewport(0,0,B,X)},this.getDrawingBufferSize=function(B){return B===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),B=new z),B.set(b*M,_*M).floor()},this.setDrawingBufferSize=function(B,X,j){b=B,_=X,M=j,i.width=Math.floor(B*j),i.height=Math.floor(X*j),this.setViewport(0,0,B,X)},this.getCurrentViewport=function(B){return B===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),B=new ke),B.copy(O)},this.getViewport=function(B){return B.copy(P)},this.setViewport=function(B,X,j,Q){B.isVector4?P.set(B.x,B.y,B.z,B.w):P.set(B,X,j,Q),_e.viewport(O.copy(P).multiplyScalar(M).floor())},this.getScissor=function(B){return B.copy(D)},this.setScissor=function(B,X,j,Q){B.isVector4?D.set(B.x,B.y,B.z,B.w):D.set(B,X,j,Q),_e.scissor(V.copy(D).multiplyScalar(M).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(B){_e.setScissorTest(U=B)},this.setOpaqueSort=function(B){T=B},this.setTransparentSort=function(B){S=B},this.getClearColor=function(){return N.getClearColor()},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(B,X,j){let Q=0;(B===void 0||B)&&(Q|=16384),(X===void 0||X)&&(Q|=256),(j===void 0||j)&&(Q|=1024),Y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",pt,!1),ie.dispose(),K.dispose(),$.dispose(),De.dispose(),ge.dispose(),Pe.dispose(),Qs.stop()};function Ae(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1,He()}function It(B){let X=B.target;X.removeEventListener("dispose",It),Gf(X)}function Gf(B){eu(B),$.remove(B)}function eu(B){let X=$.get(B).program;B.program=void 0,X!==void 0&&I.releaseProgram(X)}function Nf(B,X){B.render(function(j){f.renderBufferImmediate(j,X)})}this.renderBufferImmediate=function(B,X){ge.initAttributes();let j=$.get(B);B.hasPositions&&!j.position&&(j.position=Y.createBuffer()),B.hasNormals&&!j.normal&&(j.normal=Y.createBuffer()),B.hasUvs&&!j.uv&&(j.uv=Y.createBuffer()),B.hasColors&&!j.color&&(j.color=Y.createBuffer());let Q=X.getAttributes();B.hasPositions&&(Y.bindBuffer(34962,j.position),Y.bufferData(34962,B.positionArray,35048),ge.enableAttribute(Q.position),Y.vertexAttribPointer(Q.position,3,5126,!1,0,0)),B.hasNormals&&(Y.bindBuffer(34962,j.normal),Y.bufferData(34962,B.normalArray,35048),ge.enableAttribute(Q.normal),Y.vertexAttribPointer(Q.normal,3,5126,!1,0,0)),B.hasUvs&&(Y.bindBuffer(34962,j.uv),Y.bufferData(34962,B.uvArray,35048),ge.enableAttribute(Q.uv),Y.vertexAttribPointer(Q.uv,2,5126,!1,0,0)),B.hasColors&&(Y.bindBuffer(34962,j.color),Y.bufferData(34962,B.colorArray,35048),ge.enableAttribute(Q.color),Y.vertexAttribPointer(Q.color,3,5126,!1,0,0)),ge.disableUnusedAttributes(),Y.drawArrays(4,0,B.count),B.count=0},this.renderBufferDirect=function(B,X,j,Q,pe,Ne){X===null&&(X=Oe);let Fe=pe.isMesh&&pe.matrixWorld.determinant()<0,Me=su(B,X,Q,pe);_e.setMaterial(Q,Fe);let at=j.index,tt=j.attributes.position;if(at===null){if(tt===void 0||tt.count===0)return}else if(at.count===0)return;let $e=1;Q.wireframe===!0&&(at=fe.getWireframeAttribute(j),$e=2),(Q.morphTargets||Q.morphNormals)&&oe.update(pe,j,Q,Me),ge.setup(pe,Q,Me,j,at);let ht,Ie=ae;at!==null&&(ht=me.get(at),Ie=Ee,Ie.setIndex(ht));let lt=at!==null?at.count:tt.count,xt=j.drawRange.start*$e,Qe=j.drawRange.count*$e,go=Ne!==null?Ne.start*$e:0,ti=Ne!==null?Ne.count*$e:1/0,Ni=Math.max(xt,go),Ka=Math.min(lt,xt+Qe,go+ti)-1,vo=Math.max(0,Ka-Ni+1);if(vo!==0){if(pe.isMesh)Q.wireframe===!0?(_e.setLineWidth(Q.wireframeLinewidth*xe()),Ie.setMode(1)):Ie.setMode(4);else if(pe.isLine){let Zs=Q.linewidth;Zs===void 0&&(Zs=1),_e.setLineWidth(Zs*xe()),pe.isLineSegments?Ie.setMode(1):pe.isLineLoop?Ie.setMode(2):Ie.setMode(3)}else pe.isPoints?Ie.setMode(0):pe.isSprite&&Ie.setMode(4);if(pe.isInstancedMesh)Ie.renderInstances(j,Ni,vo,pe.count);else if(j.isInstancedBufferGeometry){let Zs=Math.min(j.instanceCount,j._maxInstanceCount);Ie.renderInstances(j,Ni,vo,Zs)}else Ie.render(Ni,vo)}},this.compile=function(B,X){p=K.get(B,X),p.init(),B.traverse(function(Q){Q.isLight&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(X);let j=new WeakMap;B.traverse(function(Q){let pe=Q.material;if(pe)if(Array.isArray(pe))for(let Ne=0;Ne<pe.length;Ne++){let Fe=pe[Ne];j.has(Fe)===!1&&(Ei(Fe,B,Q),j.set(Fe))}else j.has(pe)===!1&&(Ei(pe,B,Q),j.set(pe))})};let Za=null;function Vf(B){Pe.isPresenting||Za&&Za(B)}let Qs=new Qh;Qs.setAnimationLoop(Vf),typeof window<"u"&&Qs.setContext(window),this.setAnimationLoop=function(B){Za=B,Pe.setAnimationLoop(B),B===null?Qs.stop():Qs.start()},this.render=function(B,X){let j,Q;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),j=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),Q=arguments[3]),X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;ge.resetDefaultState(),E=-1,A=null,B.autoUpdate===!0&&B.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(X=Pe.getCamera(X)),B.isScene===!0&&B.onBeforeRender(f,B,X,j||v),p=K.get(B,X),p.init(),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H.setFromProjectionMatrix(Z),q=this.localClippingEnabled,G=W.init(this.clippingPlanes,q,X),h=ie.get(B,X),h.init(),tu(B,X,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(T,S),G===!0&&W.beginShadows();let pe=p.state.shadowsArray;ye.render(pe,B,X),p.setupLights(X),G===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),j!==void 0&&this.setRenderTarget(j),N.render(h,B,X,Q);let Ne=h.opaque,Fe=h.transparent;Ne.length>0&&iu(Ne,B,X),Fe.length>0&&iu(Fe,B,X),B.isScene===!0&&B.onAfterRender(f,B,X),v!==null&&(ee.updateRenderTargetMipmap(v),ee.updateMultisampleRenderTarget(v)),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1),h=null,p=null};function tu(B,X,j,Q){if(B.visible===!1)return;if(B.layers.test(X.layers)){if(B.isGroup)j=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(X);else if(B.isLight)p.pushLight(B),B.castShadow&&p.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||H.intersectsSprite(B)){Q&&ue.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Z);let Fe=De.update(B),Me=B.material;Me.visible&&h.push(B,Fe,Me,j,ue.z,null)}}else if(B.isImmediateRenderObject)Q&&ue.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Z),h.push(B,null,B.material,j,ue.z,null);else if((B.isMesh||B.isLine||B.isPoints)&&(B.isSkinnedMesh&&B.skeleton.frame!==J.render.frame&&(B.skeleton.update(),B.skeleton.frame=J.render.frame),!B.frustumCulled||H.intersectsObject(B))){Q&&ue.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Z);let Fe=De.update(B),Me=B.material;if(Array.isArray(Me)){let at=Fe.groups;for(let tt=0,$e=at.length;tt<$e;tt++){let ht=at[tt],Ie=Me[ht.materialIndex];Ie&&Ie.visible&&h.push(B,Fe,Ie,j,ue.z,ht)}}else Me.visible&&h.push(B,Fe,Me,j,ue.z,null)}}let Ne=B.children;for(let Fe=0,Me=Ne.length;Fe<Me;Fe++)tu(Ne[Fe],X,j,Q)}function iu(B,X,j){let Q=X.isScene===!0?X.overrideMaterial:null;for(let pe=0,Ne=B.length;pe<Ne;pe++){let Fe=B[pe],Me=Fe.object,at=Fe.geometry,tt=Q===null?Fe.material:Q,$e=Fe.group;if(j.isArrayCamera){R=j;let ht=j.cameras;for(let Ie=0,lt=ht.length;Ie<lt;Ie++){let xt=ht[Ie];Me.layers.test(xt.layers)&&(_e.viewport(O.copy(xt.viewport)),p.setupLights(xt),nu(Me,X,xt,at,tt,$e))}}else R=null,nu(Me,X,j,at,tt,$e)}}function nu(B,X,j,Q,pe,Ne){if(B.onBeforeRender(f,X,j,Q,pe,Ne),p=K.get(X,R||j),B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),B.isImmediateRenderObject){let Fe=su(j,X,pe,B);_e.setMaterial(pe),ge.reset(),Nf(B,Fe)}else f.renderBufferDirect(j,X,Q,pe,B,Ne);B.onAfterRender(f,X,j,Q,pe,Ne),p=K.get(X,R||j)}function Ei(B,X,j){X.isScene!==!0&&(X=Oe);let Q=$.get(B),pe=p.state.lights,Ne=p.state.shadowsArray,Fe=pe.state.version,Me=I.getParameters(B,pe.state,Ne,X,W.numPlanes,W.numIntersection,j),at=I.getProgramCacheKey(Me),tt=Q.program,$e=!0;if(tt===void 0)B.addEventListener("dispose",It);else if(tt.cacheKey!==at)eu(B);else if(Q.lightsStateVersion!==Fe)Q.lightsStateVersion=Fe,$e=!1;else{if(Me.shaderID!==void 0)return;$e=!1}$e&&(tt=I.acquireProgram(Me,at),Q.program=tt,Q.uniforms=Me.uniforms,Q.outputEncoding=Me.outputEncoding,B.program=tt);let ht=tt.getAttributes();if(B.morphTargets){B.numSupportedMorphTargets=0;for(let Qe=0;Qe<f.maxMorphTargets;Qe++)ht["morphTarget"+Qe]>=0&&B.numSupportedMorphTargets++}if(B.morphNormals){B.numSupportedMorphNormals=0;for(let Qe=0;Qe<f.maxMorphNormals;Qe++)ht["morphNormal"+Qe]>=0&&B.numSupportedMorphNormals++}let Ie=Q.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Q.numClippingPlanes=W.numPlanes,Q.numIntersection=W.numIntersection,Ie.clippingPlanes=W.uniform),Q.environment=B.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.needsLights=Wf(B),Q.lightsStateVersion=Fe,Q.needsLights&&(Ie.ambientLightColor.value=pe.state.ambient,Ie.lightProbe.value=pe.state.probe,Ie.directionalLights.value=pe.state.directional,Ie.directionalLightShadows.value=pe.state.directionalShadow,Ie.spotLights.value=pe.state.spot,Ie.spotLightShadows.value=pe.state.spotShadow,Ie.rectAreaLights.value=pe.state.rectArea,Ie.pointLights.value=pe.state.point,Ie.pointLightShadows.value=pe.state.pointShadow,Ie.hemisphereLights.value=pe.state.hemi,Ie.directionalShadowMap.value=pe.state.directionalShadowMap,Ie.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Ie.spotShadowMap.value=pe.state.spotShadowMap,Ie.spotShadowMatrix.value=pe.state.spotShadowMatrix,Ie.pointShadowMap.value=pe.state.pointShadowMap,Ie.pointShadowMatrix.value=pe.state.pointShadowMatrix);let lt=Q.program.getUniforms(),xt=Ji.seqWithValue(lt.seq,Ie);Q.uniformsList=xt}function su(B,X,j,Q){X.isScene!==!0&&(X=Oe),ee.resetTextureUnits();let pe=X.fog,Ne=j.isMeshStandardMaterial?X.environment:null,Fe=v===null?f.outputEncoding:v.texture.encoding,Me=$.get(j),at=p.state.lights;if(G===!0&&(q===!0||B!==A)){let Qe=B===A&&j.id===E;W.setState(j.clippingPlanes,j.clipIntersection,j.clipShadows,B,Me,Qe)}j.version===Me.__version?(Me.program===void 0||j.fog&&Me.fog!==pe||Me.environment!==Ne||Me.needsLights&&Me.lightsStateVersion!==at.state.version||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==W.numPlanes||Me.numIntersection!==W.numIntersection)||Me.outputEncoding!==Fe)&&Ei(j,X,Q):(Ei(j,X,Q),Me.__version=j.version);let tt=!1,$e=!1,ht=!1,Ie=Me.program,lt=Ie.getUniforms(),xt=Me.uniforms;if(_e.useProgram(Ie.program)&&(tt=!0,$e=!0,ht=!0),j.id!==E&&(E=j.id,$e=!0),tt||A!==B){if(lt.setValue(Y,"projectionMatrix",B.projectionMatrix),Re.logarithmicDepthBuffer&&lt.setValue(Y,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),A!==B&&(A=B,$e=!0,ht=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){let Qe=lt.map.cameraPosition;Qe!==void 0&&Qe.setValue(Y,ue.setFromMatrixPosition(B.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&lt.setValue(Y,"isOrthographic",B.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||j.skinning)&&lt.setValue(Y,"viewMatrix",B.matrixWorldInverse)}if(j.skinning){lt.setOptional(Y,Q,"bindMatrix"),lt.setOptional(Y,Q,"bindMatrixInverse");let Qe=Q.skeleton;if(Qe){let go=Qe.bones;if(Re.floatVertexTextures){if(Qe.boneTexture===void 0){let ti=Math.sqrt(go.length*4);ti=be.ceilPowerOfTwo(ti),ti=Math.max(ti,4);let Ni=new Float32Array(ti*ti*4);Ni.set(Qe.boneMatrices);let Ka=new bs(Ni,ti,ti,Ze,jt);Qe.boneMatrices=Ni,Qe.boneTexture=Ka,Qe.boneTextureSize=ti}lt.setValue(Y,"boneTexture",Qe.boneTexture,ee),lt.setValue(Y,"boneTextureSize",Qe.boneTextureSize)}else lt.setOptional(Y,Qe,"boneMatrices")}}return($e||Me.receiveShadow!==Q.receiveShadow)&&(Me.receiveShadow=Q.receiveShadow,lt.setValue(Y,"receiveShadow",Q.receiveShadow)),$e&&(lt.setValue(Y,"toneMappingExposure",f.toneMappingExposure),Me.needsLights&&zf(xt,ht),pe&&j.fog&&F.refreshFogUniforms(xt,pe),F.refreshMaterialUniforms(xt,j,Ne,M,_),xt.ltc_1!==void 0&&(xt.ltc_1.value=he.LTC_1),xt.ltc_2!==void 0&&(xt.ltc_2.value=he.LTC_2),Ji.upload(Y,Me.uniformsList,xt,ee)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ji.upload(Y,Me.uniformsList,xt,ee),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&lt.setValue(Y,"center",Q.center),lt.setValue(Y,"modelViewMatrix",Q.modelViewMatrix),lt.setValue(Y,"normalMatrix",Q.normalMatrix),lt.setValue(Y,"modelMatrix",Q.matrixWorld),Ie}function zf(B,X){B.ambientLightColor.needsUpdate=X,B.lightProbe.needsUpdate=X,B.directionalLights.needsUpdate=X,B.directionalLightShadows.needsUpdate=X,B.pointLights.needsUpdate=X,B.pointLightShadows.needsUpdate=X,B.spotLights.needsUpdate=X,B.spotLightShadows.needsUpdate=X,B.rectAreaLights.needsUpdate=X,B.hemisphereLights.needsUpdate=X}function Wf(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.setFramebuffer=function(B){w!==B&&v===null&&Y.bindFramebuffer(36160,B),w=B},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return v},this.setRenderTarget=function(B,X,j){v=B,y=X,g=j,B&&$.get(B).__webglFramebuffer===void 0&&ee.setupRenderTarget(B);let Q=w,pe=!1;if(B){let Ne=$.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Q=Ne[X||0],pe=!0):B.isWebGLMultisampleRenderTarget?Q=$.get(B).__webglMultisampledFramebuffer:Q=Ne,O.copy(B.viewport),V.copy(B.scissor),k=B.scissorTest}else O.copy(P).multiplyScalar(M).floor(),V.copy(D).multiplyScalar(M).floor(),k=U;if(C!==Q&&(Y.bindFramebuffer(36160,Q),C=Q),_e.viewport(O),_e.scissor(V),_e.setScissorTest(k),pe){let Ne=$.get(B.texture);Y.framebufferTexture2D(36160,36064,34069+(X||0),Ne.__webglTexture,j||0)}},this.readRenderTargetPixels=function(B,X,j,Q,pe,Ne,Fe){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=$.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Fe!==void 0&&(Me=Me[Fe]),Me){let at=!1;Me!==C&&(Y.bindFramebuffer(36160,Me),at=!0);try{let tt=B.texture,$e=tt.format,ht=tt.type;if($e!==Ze&&ne.convert($e)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ht!==Qr&&ne.convert(ht)!==Y.getParameter(35738)&&!(ht===jt&&(Re.isWebGL2||Te.get("OES_texture_float")||Te.get("WEBGL_color_buffer_float")))&&!(ht===tn&&(Re.isWebGL2?Te.get("EXT_color_buffer_float"):Te.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y.checkFramebufferStatus(36160)===36053?X>=0&&X<=B.width-Q&&j>=0&&j<=B.height-pe&&Y.readPixels(X,j,Q,pe,ne.convert($e),ne.convert(ht),Ne):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{at&&Y.bindFramebuffer(36160,C)}}},this.copyFramebufferToTexture=function(B,X,j){j===void 0&&(j=0);let Q=Math.pow(2,-j),pe=Math.floor(X.image.width*Q),Ne=Math.floor(X.image.height*Q),Fe=ne.convert(X.format);ee.setTexture2D(X,0),Y.copyTexImage2D(3553,j,Fe,B.x,B.y,pe,Ne,0),_e.unbindTexture()},this.copyTextureToTexture=function(B,X,j,Q){Q===void 0&&(Q=0);let pe=X.image.width,Ne=X.image.height,Fe=ne.convert(j.format),Me=ne.convert(j.type);ee.setTexture2D(j,0),Y.pixelStorei(37440,j.flipY),Y.pixelStorei(37441,j.premultiplyAlpha),Y.pixelStorei(3317,j.unpackAlignment),X.isDataTexture?Y.texSubImage2D(3553,Q,B.x,B.y,pe,Ne,Fe,Me,X.image.data):X.isCompressedTexture?Y.compressedTexSubImage2D(3553,Q,B.x,B.y,X.mipmaps[0].width,X.mipmaps[0].height,Fe,X.mipmaps[0].data):Y.texSubImage2D(3553,Q,B.x,B.y,Fe,Me,X.image),Q===0&&j.generateMipmaps&&Y.generateMipmap(3553),_e.unbindTexture()},this.initTexture=function(B){ee.setTexture2D(B,0),_e.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Wu(t){Ws.call(this,t)}Wu.prototype=Object.assign(Object.create(Ws.prototype),{constructor:Wu,isWebGL1Renderer:!0});function wr(t,i){this.name="",this.color=new te(t),this.density=i!==void 0?i:25e-5}Object.assign(wr.prototype,{isFogExp2:!0,clone:function(){return new wr(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function Nl(t,i,n){this.name="",this.color=new te(t),this.near=i!==void 0?i:1,this.far=n!==void 0?n:1e3}Object.assign(Nl.prototype,{isFog:!0,clone:function(){return new Nl(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function Xt(t,i){this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=be.generateUUID()}Object.defineProperty(Xt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Xt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,i,n){t*=this.stride,n*=i.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=i.array[n+s];return this},set:function(t,i){return i===void 0&&(i=0),this.array.set(t,i),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=be.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new Xt(i,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=be.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var yn=new L;function Ln(t,i,n,s){this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=s===!0}Object.defineProperties(Ln.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Ln.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let i=0,n=this.data.count;i<n;i++)yn.x=this.getX(i),yn.y=this.getY(i),yn.z=this.getZ(i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this},setX:function(t,i){return this.data.array[t*this.data.stride+this.offset]=i,this},setY:function(t,i){return this.data.array[t*this.data.stride+this.offset+1]=i,this},setZ:function(t,i){return this.data.array[t*this.data.stride+this.offset+2]=i,this},setW:function(t,i){return this.data.array[t*this.data.stride+this.offset+3]=i,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,i,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=i,this.data.array[t+1]=n,this},setXYZ:function(t,i,n,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=s,this},setXYZW:function(t,i,n,s,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let i=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)i.push(this.data.array[s+r])}return new Se(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ln(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let i=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)i.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Rn(t){Ce.call(this),this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Rn.prototype=Object.create(Ce.prototype);Rn.prototype.constructor=Rn;Rn.prototype.isSpriteMaterial=!0;Rn.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var es,ir=new L,ts=new L,is=new L,ns=new z,nr=new z,rd=new de,Io=new L,sr=new L,Bo=new L,ju=new z,wl=new z,Xu=new z;function Vl(t){if(re.call(this),this.type="Sprite",es===void 0){es=new ce;let i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xt(i,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Ln(n,3,0,!1)),es.setAttribute("uv",new Ln(n,2,3,!1))}this.geometry=es,this.material=t!==void 0?t:new Rn,this.center=new z(.5,.5)}Vl.prototype=Object.assign(Object.create(re.prototype),{constructor:Vl,isSprite:!0,raycast:function(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Uo(Io.set(-.5,-.5,0),is,o,ts,s,r),Uo(sr.set(.5,-.5,0),is,o,ts,s,r),Uo(Bo.set(.5,.5,0),is,o,ts,s,r),ju.set(0,0),wl.set(1,0),Xu.set(1,1);let a=t.ray.intersectTriangle(Io,sr,Bo,!1,ir);if(a===null&&(Uo(sr.set(-.5,.5,0),is,o,ts,s,r),wl.set(0,1),a=t.ray.intersectTriangle(Io,Bo,sr,!1,ir),a===null))return;let l=t.ray.origin.distanceTo(ir);l<t.near||l>t.far||i.push({distance:l,point:ir.clone(),uv:Et.getUV(ir,Io,sr,Bo,ju,wl,Xu,new z),face:null,object:this})},copy:function(t){return re.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Uo(t,i,n,s,r,o){ns.subVectors(t,n).addScalar(.5).multiply(s),r!==void 0?(nr.x=o*ns.x-r*ns.y,nr.y=r*ns.x+o*ns.y):nr.copy(ns),t.copy(i),t.x+=nr.x,t.y+=nr.y,t.applyMatrix4(rd)}var Oo=new L,qu=new L;function ua(){re.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}ua.prototype=Object.assign(Object.create(re.prototype),{constructor:ua,isLOD:!0,copy:function(t){re.prototype.copy.call(this,t,!1);let i=t.levels;for(let n=0,s=i.length;n<s;n++){let r=i[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,i){i===void 0&&(i=0),i=Math.abs(i);let n=this.levels,s;for(s=0;s<n.length&&!(i<n[s].distance);s++);return n.splice(s,0,{distance:i,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){let i=this.levels;if(i.length>0){let n,s;for(n=1,s=i.length;n<s&&!(t<i[n].distance);n++);return i[n-1].object}return null},raycast:function(t,i){if(this.levels.length>0){Oo.setFromMatrixPosition(this.matrixWorld);let s=t.ray.origin.distanceTo(Oo);this.getObjectForDistance(s).raycast(t,i)}},update:function(t){let i=this.levels;if(i.length>1){Oo.setFromMatrixPosition(t.matrixWorld),qu.setFromMatrixPosition(this.matrixWorld);let n=Oo.distanceTo(qu)/t.zoom;i[0].object.visible=!0;let s,r;for(s=1,r=i.length;s<r&&n>=i[s].distance;s++)i[s-1].object.visible=!1,i[s].object.visible=!0;for(this._currentLevel=s-1;s<r;s++)i[s].object.visible=!1}},toJSON:function(t){let i=re.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(i.object.autoUpdate=!1),i.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];i.object.levels.push({object:o.object.uuid,distance:o.distance})}return i}});function _r(t,i){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Ve.call(this,t,i),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new de,this.bindMatrixInverse=new de}_r.prototype=Object.assign(Object.create(Ve.prototype),{constructor:_r,isSkinnedMesh:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,i){this.skeleton=t,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.getInverse(i)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let t=new ke,i=this.geometry.attributes.skinWeight;for(let n=0,s=i.count;n<s;n++){t.x=i.getX(n),t.y=i.getY(n),t.z=i.getZ(n),t.w=i.getW(n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),i.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Ve.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let t=new L,i=new ke,n=new ke,s=new L,r=new de;return function(o,a){let l=this.skeleton,c=this.geometry;i.fromBufferAttribute(c.attributes.skinIndex,o),n.fromBufferAttribute(c.attributes.skinWeight,o),t.fromBufferAttribute(c.attributes.position,o).applyMatrix4(this.bindMatrix),a.set(0,0,0);for(let u=0;u<4;u++){let d=n.getComponent(u);if(d!==0){let h=i.getComponent(u);r.multiplyMatrices(l.bones[h].matrixWorld,l.boneInverses[h]),a.addScaledVector(s.copy(t).applyMatrix4(r),d)}}return a.applyMatrix4(this.bindMatrixInverse)}}()});var Yu=new de,Py=new de;function Mr(t,i){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,i===void 0)this.calculateInverses();else if(this.bones.length===i.length)this.boneInverses=i.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new de)}}Object.assign(Mr.prototype,{calculateInverses:function(){this.boneInverses=[];for(let t=0,i=this.bones.length;t<i;t++){let n=new de;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];n&&n.matrixWorld.getInverse(this.boneInverses[t])}for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let t=this.bones,i=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Py;Yu.multiplyMatrices(a,i[r]),Yu.toArray(n,r*16)}s!==void 0&&(s.needsUpdate=!0)},clone:function(){return new Mr(this.bones,this.boneInverses)},getBoneByName:function(t){for(let i=0,n=this.bones.length;i<n;i++){let s=this.bones[i];if(s.name===t)return s}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Sr(){re.call(this),this.type="Bone"}Sr.prototype=Object.assign(Object.create(re.prototype),{constructor:Sr,isBone:!0});var Qu=new de,Zu=new de,Fo=[],rr=new Ve;function ws(t,i,n){Ve.call(this,t,i),this.instanceMatrix=new Se(new Float32Array(n*16),16),this.count=n,this.frustumCulled=!1}ws.prototype=Object.assign(Object.create(Ve.prototype),{constructor:ws,isInstancedMesh:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getMatrixAt:function(t,i){i.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,i){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Qu),Zu.multiplyMatrices(n,Qu),rr.matrixWorld=Zu,rr.raycast(t,Fo);for(let o=0,a=Fo.length;o<a;o++){let l=Fo[o];l.instanceId=r,l.object=this,i.push(l)}Fo.length=0}},setMatrixAt:function(t,i){i.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){}});function ot(t){Ce.call(this),this.type="LineBasicMaterial",this.color=new te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}ot.prototype=Object.create(Ce.prototype);ot.prototype.constructor=ot;ot.prototype.isLineBasicMaterial=!0;ot.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var Ku=new L,Ju=new L,$u=new de,ko=new Ns,Ho=new Hi;function Ot(t,i,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),re.call(this),this.type="Line",this.geometry=t!==void 0?t:new ce,this.material=i!==void 0?i:new ot,this.updateMorphTargets()}Ot.prototype=Object.assign(Object.create(re.prototype),{constructor:Ot,isLine:!0,copy:function(t){return re.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let i=t.attributes.position,n=[0];for(let s=1,r=i.count;s<r;s++)Ku.fromBufferAttribute(i,s-1),Ju.fromBufferAttribute(i,s),n[s]=n[s-1],n[s]+=Ku.distanceTo(Ju);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let i=t.vertices,n=t.lineDistances;n[0]=0;for(let s=1,r=i.length;s<r;s++)n[s]=n[s-1],n[s]+=i[s-1].distanceTo(i[s])}return this},raycast:function(t,i){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;$u.getInverse(s),ko.copy(t.ray).applyMatrix4($u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new L,c=new L,u=new L,d=new L,h=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){let p=n.index,m=n.attributes.position.array;if(p!==null){let w=p.array;for(let y=0,g=w.length-1;y<g;y+=h){let v=w[y],C=w[y+1];if(l.fromArray(m,v*3),c.fromArray(m,C*3),ko.distanceSqToSegment(l,c,d,u)>a)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||i.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let w=0,y=m.length/3-1;w<y;w+=h){if(l.fromArray(m,3*w),c.fromArray(m,3*w+3),ko.distanceSqToSegment(l,c,d,u)>a)continue;d.applyMatrix4(this.matrixWorld);let v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||i.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){let p=n.vertices,f=p.length;for(let m=0;m<f-1;m+=h){if(ko.distanceSqToSegment(p[m],p[m+1],d,u)>a)continue;d.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||i.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let i=t.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let i=t.morphTargets;i!==void 0&&i.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Go=new L,No=new L;function gt(t,i){Ot.call(this,t,i),this.type="LineSegments"}gt.prototype=Object.assign(Object.create(Ot.prototype),{constructor:gt,isLineSegments:!0,computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let i=t.attributes.position,n=[];for(let s=0,r=i.count;s<r;s+=2)Go.fromBufferAttribute(i,s),No.fromBufferAttribute(i,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Go.distanceTo(No);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let i=t.vertices,n=t.lineDistances;for(let s=0,r=i.length;s<r;s+=2)Go.copy(i[s]),No.copy(i[s+1]),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Go.distanceTo(No)}return this}});function zl(t,i){Ot.call(this,t,i),this.type="LineLoop"}zl.prototype=Object.assign(Object.create(Ot.prototype),{constructor:zl,isLineLoop:!0});function Dn(t){Ce.call(this),this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}Dn.prototype=Object.create(Ce.prototype);Dn.prototype.constructor=Dn;Dn.prototype.isPointsMaterial=!0;Dn.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var eh=new de,Wl=new Ns,Vo=new Hi,zo=new L;function Er(t,i){re.call(this),this.type="Points",this.geometry=t!==void 0?t:new ce,this.material=i!==void 0?i:new Dn,this.updateMorphTargets()}Er.prototype=Object.assign(Object.create(re.prototype),{constructor:Er,isPoints:!0,copy:function(t){return re.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,i){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;eh.getInverse(s),Wl.copy(t.ray).applyMatrix4(eh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o;if(n.isBufferGeometry){let l=n.index,u=n.attributes.position.array;if(l!==null){let d=l.array;for(let h=0,p=d.length;h<p;h++){let f=d[h];zo.fromArray(u,f*3),_l(zo,f,a,s,t,i,this)}}else for(let d=0,h=u.length/3;d<h;d++)zo.fromArray(u,d*3),_l(zo,d,a,s,t,i,this)}else{let l=n.vertices;for(let c=0,u=l.length;c<u;c++)_l(l[c],c,a,s,t,i,this)}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let i=t.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{let i=t.morphTargets;i!==void 0&&i.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function _l(t,i,n,s,r,o,a){let l=Wl.distanceSqToPoint(t);if(l<n){let c=new L;Wl.closestPointToPoint(t,c),c.applyMatrix4(s);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:i,face:null,object:a})}}function ha(t,i,n,s,r,o,a,l,c){je.call(this,t,i,n,s,r,o,a,l,c),this.format=a!==void 0?a:vi,this.minFilter=o!==void 0?o:Ge,this.magFilter=r!==void 0?r:Ge,this.generateMipmaps=!1}ha.prototype=Object.assign(Object.create(je.prototype),{constructor:ha,isVideoTexture:!0,update:function(){let t=this.image;t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Tr(t,i,n,s,r,o,a,l,c,u,d,h){je.call(this,null,o,a,l,c,u,s,r,d,h),this.image={width:i,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Tr.prototype=Object.create(je.prototype);Tr.prototype.constructor=Tr;Tr.prototype.isCompressedTexture=!0;function _s(t,i,n,s,r,o,a,l,c){je.call(this,t,i,n,s,r,o,a,l,c),this.needsUpdate=!0}_s.prototype=Object.create(je.prototype);_s.prototype.constructor=_s;_s.prototype.isCanvasTexture=!0;function on(t,i,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:qt,u!==qt&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qt&&(n=gs),n===void 0&&u===mr&&(n=ur),je.call(this,null,s,r,o,a,l,u,n,c),this.image={width:t,height:i},this.magFilter=a!==void 0?a:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1}on.prototype=Object.create(je.prototype);on.prototype.constructor=on;on.prototype.isDepthTexture=!0;function da(t){ce.call(this),this.type="WireframeGeometry";let i=[],n=[0,0],s={},r=["a","b","c"];if(t&&t.isGeometry){let o=t.faces;for(let a=0,l=o.length;a<l;a++){let c=o[a];for(let u=0;u<3;u++){let d=c[r[u]],h=c[r[(u+1)%3]];n[0]=Math.min(d,h),n[1]=Math.max(d,h);let p=n[0]+","+n[1];s[p]===void 0&&(s[p]={index1:n[0],index2:n[1]})}}for(let a in s){let l=s[a],c=t.vertices[l.index1];i.push(c.x,c.y,c.z),c=t.vertices[l.index2],i.push(c.x,c.y,c.z)}}else if(t&&t.isBufferGeometry){let o=new L;if(t.index!==null){let a=t.attributes.position,l=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,d=c.length;u<d;++u){let h=c[u],p=h.start,f=h.count;for(let m=p,w=p+f;m<w;m+=3)for(let y=0;y<3;y++){let g=l.getX(m+y),v=l.getX(m+(y+1)%3);n[0]=Math.min(g,v),n[1]=Math.max(g,v);let C=n[0]+","+n[1];s[C]===void 0&&(s[C]={index1:n[0],index2:n[1]})}}for(let u in s){let d=s[u];o.fromBufferAttribute(a,d.index1),i.push(o.x,o.y,o.z),o.fromBufferAttribute(a,d.index2),i.push(o.x,o.y,o.z)}}else{let a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let u=0;u<3;u++){let d=3*l+u;o.fromBufferAttribute(a,d),i.push(o.x,o.y,o.z);let h=3*l+(u+1)%3;o.fromBufferAttribute(a,h),i.push(o.x,o.y,o.z)}}}this.setAttribute("position",new se(i,3))}da.prototype=Object.create(ce.prototype);da.prototype.constructor=da;function fa(t,i,n){Le.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:i,stacks:n},this.fromBufferGeometry(new Cr(t,i,n)),this.mergeVertices()}fa.prototype=Object.create(Le.prototype);fa.prototype.constructor=fa;function Cr(t,i,n){ce.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:i,stacks:n};let s=[],r=[],o=[],a=[],l=1e-5,c=new L,u=new L,d=new L,h=new L,p=new L;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=i+1;for(let m=0;m<=n;m++){let w=m/n;for(let y=0;y<=i;y++){let g=y/i;t(g,w,u),r.push(u.x,u.y,u.z),g-l>=0?(t(g-l,w,d),h.subVectors(u,d)):(t(g+l,w,d),h.subVectors(d,u)),w-l>=0?(t(g,w-l,d),p.subVectors(u,d)):(t(g,w+l,d),p.subVectors(d,u)),c.crossVectors(h,p).normalize(),o.push(c.x,c.y,c.z),a.push(g,w)}}for(let m=0;m<n;m++)for(let w=0;w<i;w++){let y=m*f+w,g=m*f+w+1,v=(m+1)*f+w+1,C=(m+1)*f+w;s.push(y,g,C),s.push(g,v,C)}this.setIndex(s),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(a,2))}Cr.prototype=Object.create(ce.prototype);Cr.prototype.constructor=Cr;function pa(t,i,n,s){Le.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:s},this.fromBufferGeometry(new Vt(t,i,n,s)),this.mergeVertices()}pa.prototype=Object.create(Le.prototype);pa.prototype.constructor=pa;function Vt(t,i,n,s){ce.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:s},n=n||1,s=s||0;let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(g){let v=new L,C=new L,E=new L;for(let A=0;A<i.length;A+=3)p(i[A+0],v),p(i[A+1],C),p(i[A+2],E),l(v,C,E,g)}function l(g,v,C,E){let A=Math.pow(2,E),R=[];for(let O=0;O<=A;O++){R[O]=[];let V=g.clone().lerp(C,O/A),k=v.clone().lerp(C,O/A),b=A-O;for(let _=0;_<=b;_++)_===0&&O===A?R[O][_]=V:R[O][_]=V.clone().lerp(k,_/b)}for(let O=0;O<A;O++)for(let V=0;V<2*(A-O)-1;V++){let k=Math.floor(V/2);V%2===0?(h(R[O][k+1]),h(R[O+1][k]),h(R[O][k])):(h(R[O][k+1]),h(R[O+1][k+1]),h(R[O+1][k]))}}function c(g){let v=new L;for(let C=0;C<r.length;C+=3)v.x=r[C+0],v.y=r[C+1],v.z=r[C+2],v.normalize().multiplyScalar(g),r[C+0]=v.x,r[C+1]=v.y,r[C+2]=v.z}function u(){let g=new L;for(let v=0;v<r.length;v+=3){g.x=r[v+0],g.y=r[v+1],g.z=r[v+2];let C=w(g)/2/Math.PI+.5,E=y(g)/Math.PI+.5;o.push(C,1-E)}f(),d()}function d(){for(let g=0;g<o.length;g+=6){let v=o[g+0],C=o[g+2],E=o[g+4],A=Math.max(v,C,E),R=Math.min(v,C,E);A>.9&&R<.1&&(v<.2&&(o[g+0]+=1),C<.2&&(o[g+2]+=1),E<.2&&(o[g+4]+=1))}}function h(g){r.push(g.x,g.y,g.z)}function p(g,v){let C=g*3;v.x=t[C+0],v.y=t[C+1],v.z=t[C+2]}function f(){let g=new L,v=new L,C=new L,E=new L,A=new z,R=new z,O=new z;for(let V=0,k=0;V<r.length;V+=9,k+=6){g.set(r[V+0],r[V+1],r[V+2]),v.set(r[V+3],r[V+4],r[V+5]),C.set(r[V+6],r[V+7],r[V+8]),A.set(o[k+0],o[k+1]),R.set(o[k+2],o[k+3]),O.set(o[k+4],o[k+5]),E.copy(g).add(v).add(C).divideScalar(3);let b=w(E);m(A,k+0,g,b),m(R,k+2,v,b),m(O,k+4,C,b)}}function m(g,v,C,E){E<0&&g.x===1&&(o[v]=g.x-1),C.x===0&&C.z===0&&(o[v]=E/2/Math.PI+.5)}function w(g){return Math.atan2(g.z,-g.x)}function y(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}Vt.prototype=Object.create(ce.prototype);Vt.prototype.constructor=Vt;function ma(t,i){Le.call(this),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i},this.fromBufferGeometry(new Pr(t,i)),this.mergeVertices()}ma.prototype=Object.create(Le.prototype);ma.prototype.constructor=ma;function Pr(t,i){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];Vt.call(this,n,s,t,i),this.type="TetrahedronBufferGeometry",this.parameters={radius:t,detail:i}}Pr.prototype=Object.create(Vt.prototype);Pr.prototype.constructor=Pr;function ga(t,i){Le.call(this),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i},this.fromBufferGeometry(new Ms(t,i)),this.mergeVertices()}ga.prototype=Object.create(Le.prototype);ga.prototype.constructor=ga;function Ms(t,i){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Vt.call(this,n,s,t,i),this.type="OctahedronBufferGeometry",this.parameters={radius:t,detail:i}}Ms.prototype=Object.create(Vt.prototype);Ms.prototype.constructor=Ms;function va(t,i){Le.call(this),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i},this.fromBufferGeometry(new Ar(t,i)),this.mergeVertices()}va.prototype=Object.create(Le.prototype);va.prototype.constructor=va;function Ar(t,i){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Vt.call(this,s,r,t,i),this.type="IcosahedronBufferGeometry",this.parameters={radius:t,detail:i}}Ar.prototype=Object.create(Vt.prototype);Ar.prototype.constructor=Ar;function xa(t,i){Le.call(this),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i},this.fromBufferGeometry(new Lr(t,i)),this.mergeVertices()}xa.prototype=Object.create(Le.prototype);xa.prototype.constructor=xa;function Lr(t,i){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Vt.call(this,r,o,t,i),this.type="DodecahedronBufferGeometry",this.parameters={radius:t,detail:i}}Lr.prototype=Object.create(Vt.prototype);Lr.prototype.constructor=Lr;function ya(t,i,n,s,r,o){Le.call(this),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:s,closed:r},o!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");let a=new Ss(t,i,n,s,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals,this.fromBufferGeometry(a),this.mergeVertices()}ya.prototype=Object.create(Le.prototype);ya.prototype.constructor=ya;function Ss(t,i,n,s,r){ce.call(this),this.type="TubeBufferGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:s,closed:r},i=i||64,n=n||1,s=s||8,r=r||!1;let o=t.computeFrenetFrames(i,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new z,u=new L,d=[],h=[],p=[],f=[];m(),this.setIndex(f),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function m(){for(let v=0;v<i;v++)w(v);w(r===!1?i:0),g(),y()}function w(v){u=t.getPointAt(v/i,u);let C=o.normals[v],E=o.binormals[v];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,O=Math.sin(R),V=-Math.cos(R);l.x=V*C.x+O*E.x,l.y=V*C.y+O*E.y,l.z=V*C.z+O*E.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function y(){for(let v=1;v<=i;v++)for(let C=1;C<=s;C++){let E=(s+1)*(v-1)+(C-1),A=(s+1)*v+(C-1),R=(s+1)*v+C,O=(s+1)*(v-1)+C;f.push(E,A,O),f.push(A,R,O)}}function g(){for(let v=0;v<=i;v++)for(let C=0;C<=s;C++)c.x=v/i,c.y=C/s,p.push(c.x,c.y)}}Ss.prototype=Object.create(ce.prototype);Ss.prototype.constructor=Ss;Ss.prototype.toJSON=function(){let t=ce.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t};function ba(t,i,n,s,r,o,a){Le.call(this),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:n,radialSegments:s,p:r,q:o},a!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Rr(t,i,n,s,r,o)),this.mergeVertices()}ba.prototype=Object.create(Le.prototype);ba.prototype.constructor=ba;function Rr(t,i,n,s,r,o){ce.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:t,tube:i,tubularSegments:n,radialSegments:s,p:r,q:o},t=t||1,i=i||.4,n=Math.floor(n)||64,s=Math.floor(s)||8,r=r||2,o=o||3;let a=[],l=[],c=[],u=[],d=new L,h=new L,p=new L,f=new L,m=new L,w=new L,y=new L;for(let v=0;v<=n;++v){let C=v/n*r*Math.PI*2;g(C,r,o,t,p),g(C+.01,r,o,t,f),w.subVectors(f,p),y.addVectors(f,p),m.crossVectors(w,y),y.crossVectors(m,w),m.normalize(),y.normalize();for(let E=0;E<=s;++E){let A=E/s*Math.PI*2,R=-i*Math.cos(A),O=i*Math.sin(A);d.x=p.x+(R*y.x+O*m.x),d.y=p.y+(R*y.y+O*m.y),d.z=p.z+(R*y.z+O*m.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),u.push(v/n),u.push(E/s)}}for(let v=1;v<=n;v++)for(let C=1;C<=s;C++){let E=(s+1)*(v-1)+(C-1),A=(s+1)*v+(C-1),R=(s+1)*v+C,O=(s+1)*(v-1)+C;a.push(E,A,O),a.push(A,R,O)}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2));function g(v,C,E,A,R){let O=Math.cos(v),V=Math.sin(v),k=E/C*v,b=Math.cos(k);R.x=A*(2+b)*.5*O,R.y=A*(2+b)*V*.5,R.z=A*Math.sin(k)*.5}}Rr.prototype=Object.create(ce.prototype);Rr.prototype.constructor=Rr;function wa(t,i,n,s,r){Le.call(this),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:n,tubularSegments:s,arc:r},this.fromBufferGeometry(new Dr(t,i,n,s,r)),this.mergeVertices()}wa.prototype=Object.create(Le.prototype);wa.prototype.constructor=wa;function Dr(t,i,n,s,r){ce.call(this),this.type="TorusBufferGeometry",this.parameters={radius:t,tube:i,radialSegments:n,tubularSegments:s,arc:r},t=t||1,i=i||.4,n=Math.floor(n)||8,s=Math.floor(s)||6,r=r||Math.PI*2;let o=[],a=[],l=[],c=[],u=new L,d=new L,h=new L;for(let p=0;p<=n;p++)for(let f=0;f<=s;f++){let m=f/s*r,w=p/n*Math.PI*2;d.x=(t+i*Math.cos(w))*Math.cos(m),d.y=(t+i*Math.cos(w))*Math.sin(m),d.z=i*Math.sin(w),a.push(d.x,d.y,d.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(f/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=s;f++){let m=(s+1)*p+f-1,w=(s+1)*(p-1)+f-1,y=(s+1)*(p-1)+f,g=(s+1)*p+f;o.push(m,w,g),o.push(w,y,g)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}Dr.prototype=Object.create(ce.prototype);Dr.prototype.constructor=Dr;var Ay={triangulate:function(t,i,n){n=n||2;let s=i&&i.length,r=s?i[0]*n:t.length,o=od(t,0,r,n,!0),a=[];if(!o||o.next===o.prev)return a;let l,c,u,d,h,p,f;if(s&&(o=By(t,i,o,n)),t.length>80*n){l=u=t[0],c=d=t[1];for(let m=n;m<r;m+=n)h=t[m],p=t[m+1],h<l&&(l=h),p<c&&(c=p),h>u&&(u=h),p>d&&(d=p);f=Math.max(u-l,d-c),f=f!==0?1/f:0}return Ir(o,a,n,l,c,f),a}};function od(t,i,n,s,r){let o,a;if(r===jy(t,i,n,s)>0)for(o=i;o<n;o+=s)a=th(o,t[o],t[o+1],a);else for(o=n-s;o>=i;o-=s)a=th(o,t[o],t[o+1],a);return a&&Na(a,a.next)&&(Ur(a),a=a.next),a}function an(t,i){if(!t)return t;i||(i=t);let n=t,s;do if(s=!1,!n.steiner&&(Na(n,n.next)||rt(n.prev,n,n.next)===0)){if(Ur(n),n=i=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==i);return i}function Ir(t,i,n,s,r,o,a){if(!t)return;!a&&o&&Hy(t,s,r,o);let l=t,c,u;for(;t.prev!==t.next;){if(c=t.prev,u=t.next,o?Ry(t,s,r,o):Ly(t)){i.push(c.i/n),i.push(t.i/n),i.push(u.i/n),Ur(t),t=u.next,l=u.next;continue}if(t=u,t===l){a?a===1?(t=Dy(an(t),i,n),Ir(t,i,n,s,r,o,2)):a===2&&Iy(t,i,n,s,r,o):Ir(an(t),i,n,s,r,o,1);break}}}function Ly(t){let i=t.prev,n=t,s=t.next;if(rt(i,n,s)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(hs(i.x,i.y,n.x,n.y,s.x,s.y,r.x,r.y)&&rt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Ry(t,i,n,s){let r=t.prev,o=t,a=t.next;if(rt(r,o,a)>=0)return!1;let l=r.x<o.x?r.x<a.x?r.x:a.x:o.x<a.x?o.x:a.x,c=r.y<o.y?r.y<a.y?r.y:a.y:o.y<a.y?o.y:a.y,u=r.x>o.x?r.x>a.x?r.x:a.x:o.x>a.x?o.x:a.x,d=r.y>o.y?r.y>a.y?r.y:a.y:o.y>a.y?o.y:a.y,h=jl(l,c,i,n,s),p=jl(u,d,i,n,s),f=t.prevZ,m=t.nextZ;for(;f&&f.z>=h&&m&&m.z<=p;){if(f!==t.prev&&f!==t.next&&hs(r.x,r.y,o.x,o.y,a.x,a.y,f.x,f.y)&&rt(f.prev,f,f.next)>=0||(f=f.prevZ,m!==t.prev&&m!==t.next&&hs(r.x,r.y,o.x,o.y,a.x,a.y,m.x,m.y)&&rt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=h;){if(f!==t.prev&&f!==t.next&&hs(r.x,r.y,o.x,o.y,a.x,a.y,f.x,f.y)&&rt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=p;){if(m!==t.prev&&m!==t.next&&hs(r.x,r.y,o.x,o.y,a.x,a.y,m.x,m.y)&&rt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Dy(t,i,n){let s=t;do{let r=s.prev,o=s.next.next;!Na(r,o)&&ad(r,s,s.next,o)&&Br(r,o)&&Br(o,r)&&(i.push(r.i/n),i.push(s.i/n),i.push(o.i/n),Ur(s),Ur(s.next),s=t=o),s=s.next}while(s!==t);return an(s)}function Iy(t,i,n,s,r,o){let a=t;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Vy(a,l)){let c=ld(a,l);a=an(a,a.next),c=an(c,c.next),Ir(a,i,n,s,r,o),Ir(c,i,n,s,r,o);return}l=l.next}a=a.next}while(a!==t)}function By(t,i,n,s){let r=[],o,a,l,c,u;for(o=0,a=i.length;o<a;o++)l=i[o]*s,c=o<a-1?i[o+1]*s:t.length,u=od(t,l,c,s,!1),u===u.next&&(u.steiner=!0),r.push(Ny(u));for(r.sort(Uy),o=0;o<r.length;o++)Oy(r[o],n),n=an(n,n.next);return n}function Uy(t,i){return t.x-i.x}function Oy(t,i){if(i=Fy(t,i),i){let n=ld(i,t);an(i,i.next),an(n,n.next)}}function Fy(t,i){let n=i,s=t.x,r=t.y,o=-1/0,a;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let p=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=s&&p>o){if(o=p,p===s){if(r===n.y)return n;if(r===n.next.y)return n.next}a=n.x<n.next.x?n:n.next}}n=n.next}while(n!==i);if(!a)return null;if(s===o)return a;let l=a,c=a.x,u=a.y,d=1/0,h;n=a;do s>=n.x&&n.x>=c&&s!==n.x&&hs(r<u?s:o,r,c,u,r<u?o:s,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(s-n.x),Br(n,t)&&(h<d||h===d&&(n.x>a.x||n.x===a.x&&ky(a,n)))&&(a=n,d=h)),n=n.next;while(n!==l);return a}function ky(t,i){return rt(t.prev,t,i.prev)<0&&rt(i.next,t,t.next)<0}function Hy(t,i,n,s){let r=t;do r.z===null&&(r.z=jl(r.x,r.y,i,n,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Gy(r)}function Gy(t){let i,n,s,r,o,a,l,c,u=1;do{for(n=t,t=null,o=null,a=0;n;){for(a++,s=n,l=0,i=0;i<u&&(l++,s=s.nextZ,!!s);i++);for(c=u;l>0||c>0&&s;)l!==0&&(c===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,l--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=s}o.nextZ=null,u*=2}while(a>1);return t}function jl(t,i,n,s,r){return t=32767*(t-n)*r,i=32767*(i-s)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t|i<<1}function Ny(t){let i=t,n=t;do(i.x<n.x||i.x===n.x&&i.y<n.y)&&(n=i),i=i.next;while(i!==t);return n}function hs(t,i,n,s,r,o,a,l){return(r-a)*(i-l)-(t-a)*(o-l)>=0&&(t-a)*(s-l)-(n-a)*(i-l)>=0&&(n-a)*(o-l)-(r-a)*(s-l)>=0}function Vy(t,i){return t.next.i!==i.i&&t.prev.i!==i.i&&!zy(t,i)&&(Br(t,i)&&Br(i,t)&&Wy(t,i)&&(rt(t.prev,t,i.prev)||rt(t,i.prev,i))||Na(t,i)&&rt(t.prev,t,t.next)>0&&rt(i.prev,i,i.next)>0)}function rt(t,i,n){return(i.y-t.y)*(n.x-i.x)-(i.x-t.x)*(n.y-i.y)}function Na(t,i){return t.x===i.x&&t.y===i.y}function ad(t,i,n,s){let r=jo(rt(t,i,n)),o=jo(rt(t,i,s)),a=jo(rt(n,s,t)),l=jo(rt(n,s,i));return!!(r!==o&&a!==l||r===0&&Wo(t,n,i)||o===0&&Wo(t,s,i)||a===0&&Wo(n,t,s)||l===0&&Wo(n,i,s))}function Wo(t,i,n){return i.x<=Math.max(t.x,n.x)&&i.x>=Math.min(t.x,n.x)&&i.y<=Math.max(t.y,n.y)&&i.y>=Math.min(t.y,n.y)}function jo(t){return t>0?1:t<0?-1:0}function zy(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&ad(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}function Br(t,i){return rt(t.prev,t,t.next)<0?rt(t,i,t.next)>=0&&rt(t,t.prev,i)>=0:rt(t,i,t.prev)<0||rt(t,t.next,i)<0}function Wy(t,i){let n=t,s=!1,r=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}function ld(t,i){let n=new Xl(t.i,t.x,t.y),s=new Xl(i.i,i.x,i.y),r=t.next,o=i.prev;return t.next=i,i.prev=t,n.next=r,r.prev=n,s.next=n,n.prev=s,o.next=s,s.prev=o,s}function th(t,i,n,s){let r=new Xl(t,i,n);return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function Ur(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Xl(t,i,n){this.i=t,this.x=i,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jy(t,i,n,s){let r=0;for(let o=i,a=n-s;o<n;o+=s)r+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o;return r}var $i={area:function(t){let i=t.length,n=0;for(let s=i-1,r=0;r<i;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5},isClockWise:function(t){return $i.area(t)<0},triangulateShape:function(t,i){let n=[],s=[],r=[];ih(t),nh(n,t);let o=t.length;i.forEach(ih);for(let l=0;l<i.length;l++)s.push(o),o+=i[l].length,nh(n,i[l]);let a=Ay.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ih(t){let i=t.length;i>2&&t[i-1].equals(t[0])&&t.pop()}function nh(t,i){for(let n=0;n<i.length;n++)t.push(i[n].x),t.push(i[n].y)}function Es(t,i){Le.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},this.fromBufferGeometry(new Ii(t,i)),this.mergeVertices()}Es.prototype=Object.create(Le.prototype);Es.prototype.constructor=Es;Es.prototype.toJSON=function(){let t=Le.prototype.toJSON.call(this),i=this.parameters.shapes,n=this.parameters.options;return cd(i,n,t)};function Ii(t,i){ce.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:100,h=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:6,f=i.bevelSize!==void 0?i.bevelSize:p-2,m=i.bevelOffset!==void 0?i.bevelOffset:0,w=i.bevelSegments!==void 0?i.bevelSegments:3,y=i.extrudePath,g=i.UVGenerator!==void 0?i.UVGenerator:Xy;i.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=i.amount);let v,C=!1,E,A,R,O;y&&(v=y.getSpacedPoints(u),C=!0,h=!1,E=y.computeFrenetFrames(u,!1),A=new L,R=new L,O=new L),h||(w=0,p=0,f=0,m=0);let V=a.extractPoints(c),k=V.shape,b=V.holes;if(!$i.isClockWise(k)){k=k.reverse();for(let J=0,$=b.length;J<$;J++){let ee=b[J];$i.isClockWise(ee)&&(b[J]=ee.reverse())}}let M=$i.triangulateShape(k,b),T=k;for(let J=0,$=b.length;J<$;J++){let ee=b[J];k=k.concat(ee)}function S(J,$,ee){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(ee).add(J)}let P=k.length,D=M.length;function U(J,$,ee){let me,fe,De,I=J.x-$.x,F=J.y-$.y,ie=ee.x-J.x,K=ee.y-J.y,N=I*I+F*F,oe=I*K-F*ie;if(Math.abs(oe)>Number.EPSILON){let ae=Math.sqrt(N),Ee=Math.sqrt(ie*ie+K*K),ne=$.x-F/ae,ge=$.y+I/ae,He=ee.x-K/Ee,Pe=ee.y+ie/Ee,ye=((He-ne)*K-(Pe-ge)*ie)/(I*K-F*ie);me=ne+I*ye-J.x,fe=ge+F*ye-J.y;let Ae=me*me+fe*fe;if(Ae<=2)return new z(me,fe);De=Math.sqrt(Ae/2)}else{let ae=!1;I>Number.EPSILON?ie>Number.EPSILON&&(ae=!0):I<-Number.EPSILON?ie<-Number.EPSILON&&(ae=!0):Math.sign(F)===Math.sign(K)&&(ae=!0),ae?(me=-F,fe=I,De=Math.sqrt(N)):(me=I,fe=F,De=Math.sqrt(N/2))}return new z(me/De,fe/De)}let H=[];for(let J=0,$=T.length,ee=$-1,me=J+1;J<$;J++,ee++,me++)ee===$&&(ee=0),me===$&&(me=0),H[J]=U(T[J],T[ee],T[me]);let W=[],G,q=H.concat();for(let J=0,$=b.length;J<$;J++){let ee=b[J];G=[];for(let me=0,fe=ee.length,De=fe-1,I=me+1;me<fe;me++,De++,I++)De===fe&&(De=0),I===fe&&(I=0),G[me]=U(ee[me],ee[De],ee[I]);W.push(G),q=q.concat(G)}for(let J=0;J<w;J++){let $=J/w,ee=p*Math.cos($*Math.PI/2),me=f*Math.sin($*Math.PI/2)+m;for(let fe=0,De=T.length;fe<De;fe++){let I=S(T[fe],H[fe],me);Y(I.x,I.y,-ee)}for(let fe=0,De=b.length;fe<De;fe++){let I=b[fe];G=W[fe];for(let F=0,ie=I.length;F<ie;F++){let K=S(I[F],G[F],me);Y(K.x,K.y,-ee)}}}let Z=f+m;for(let J=0;J<P;J++){let $=h?S(k[J],q[J],Z):k[J];C?(R.copy(E.normals[0]).multiplyScalar($.x),A.copy(E.binormals[0]).multiplyScalar($.y),O.copy(v[0]).add(R).add(A),Y(O.x,O.y,O.z)):Y($.x,$.y,0)}for(let J=1;J<=u;J++)for(let $=0;$<P;$++){let ee=h?S(k[$],q[$],Z):k[$];C?(R.copy(E.normals[J]).multiplyScalar(ee.x),A.copy(E.binormals[J]).multiplyScalar(ee.y),O.copy(v[J]).add(R).add(A),Y(O.x,O.y,O.z)):Y(ee.x,ee.y,d/u*J)}for(let J=w-1;J>=0;J--){let $=J/w,ee=p*Math.cos($*Math.PI/2),me=f*Math.sin($*Math.PI/2)+m;for(let fe=0,De=T.length;fe<De;fe++){let I=S(T[fe],H[fe],me);Y(I.x,I.y,d+ee)}for(let fe=0,De=b.length;fe<De;fe++){let I=b[fe];G=W[fe];for(let F=0,ie=I.length;F<ie;F++){let K=S(I[F],G[F],me);C?Y(K.x,K.y+v[u-1].y,v[u-1].x+ee):Y(K.x,K.y,d+ee)}}}ue(),Oe();function ue(){let J=s.length/3;if(h){let $=0,ee=P*$;for(let me=0;me<D;me++){let fe=M[me];We(fe[2]+ee,fe[1]+ee,fe[0]+ee)}$=u+w*2,ee=P*$;for(let me=0;me<D;me++){let fe=M[me];We(fe[0]+ee,fe[1]+ee,fe[2]+ee)}}else{for(let $=0;$<D;$++){let ee=M[$];We(ee[2],ee[1],ee[0])}for(let $=0;$<D;$++){let ee=M[$];We(ee[0]+P*u,ee[1]+P*u,ee[2]+P*u)}}n.addGroup(J,s.length/3-J,0)}function Oe(){let J=s.length/3,$=0;xe(T,$),$+=T.length;for(let ee=0,me=b.length;ee<me;ee++){let fe=b[ee];xe(fe,$),$+=fe.length}n.addGroup(J,s.length/3-J,1)}function xe(J,$){let ee=J.length;for(;--ee>=0;){let me=ee,fe=ee-1;fe<0&&(fe=J.length-1);for(let De=0,I=u+w*2;De<I;De++){let F=P*De,ie=P*(De+1),K=$+me+F,N=$+fe+F,oe=$+fe+ie,ae=$+me+ie;Te(K,N,oe,ae)}}}function Y(J,$,ee){l.push(J),l.push($),l.push(ee)}function We(J,$,ee){Re(J),Re($),Re(ee);let me=s.length/3,fe=g.generateTopUV(n,s,me-3,me-2,me-1);_e(fe[0]),_e(fe[1]),_e(fe[2])}function Te(J,$,ee,me){Re(J),Re($),Re(me),Re($),Re(ee),Re(me);let fe=s.length/3,De=g.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);_e(De[0]),_e(De[1]),_e(De[3]),_e(De[1]),_e(De[2]),_e(De[3])}function Re(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function _e(J){r.push(J.x),r.push(J.y)}}}Ii.prototype=Object.create(ce.prototype);Ii.prototype.constructor=Ii;Ii.prototype.toJSON=function(){let t=ce.prototype.toJSON.call(this),i=this.parameters.shapes,n=this.parameters.options;return cd(i,n,t)};var Xy={generateTopUV:function(t,i,n,s,r){let o=i[n*3],a=i[n*3+1],l=i[s*3],c=i[s*3+1],u=i[r*3],d=i[r*3+1];return[new z(o,a),new z(l,c),new z(u,d)]},generateSideWallUV:function(t,i,n,s,r,o){let a=i[n*3],l=i[n*3+1],c=i[n*3+2],u=i[s*3],d=i[s*3+1],h=i[s*3+2],p=i[r*3],f=i[r*3+1],m=i[r*3+2],w=i[o*3],y=i[o*3+1],g=i[o*3+2];return Math.abs(l-d)<.01?[new z(a,1-c),new z(u,1-h),new z(p,1-m),new z(w,1-g)]:[new z(l,1-c),new z(d,1-h),new z(f,1-m),new z(y,1-g)]}};function cd(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,r=t.length;s<r;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}function _a(t,i){Le.call(this),this.type="TextGeometry",this.parameters={text:t,parameters:i},this.fromBufferGeometry(new Or(t,i)),this.mergeVertices()}_a.prototype=Object.create(Le.prototype);_a.prototype.constructor=_a;function Or(t,i){i=i||{};let n=i.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Le;let s=n.generateShapes(t,i.size);i.depth=i.height!==void 0?i.height:50,i.bevelThickness===void 0&&(i.bevelThickness=10),i.bevelSize===void 0&&(i.bevelSize=8),i.bevelEnabled===void 0&&(i.bevelEnabled=!1),Ii.call(this,s,i),this.type="TextBufferGeometry"}Or.prototype=Object.create(Ii.prototype);Or.prototype.constructor=Or;function Ma(t,i,n,s,r,o,a){Le.call(this),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new Ts(t,i,n,s,r,o,a)),this.mergeVertices()}Ma.prototype=Object.create(Le.prototype);Ma.prototype.constructor=Ma;function Ts(t,i,n,s,r,o,a){ce.call(this),this.type="SphereBufferGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=t||1,i=Math.max(3,Math.floor(i)||8),n=Math.max(2,Math.floor(n)||6),s=s!==void 0?s:0,r=r!==void 0?r:Math.PI*2,o=o!==void 0?o:0,a=a!==void 0?a:Math.PI;let l=Math.min(o+a,Math.PI),c=0,u=[],d=new L,h=new L,p=[],f=[],m=[],w=[];for(let y=0;y<=n;y++){let g=[],v=y/n,C=0;y==0&&o==0?C=.5/i:y==n&&l==Math.PI&&(C=-.5/i);for(let E=0;E<=i;E++){let A=E/i;d.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),f.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),w.push(A+C,1-v),g.push(c++)}u.push(g)}for(let y=0;y<n;y++)for(let g=0;g<i;g++){let v=u[y][g+1],C=u[y][g],E=u[y+1][g],A=u[y+1][g+1];(y!==0||o>0)&&p.push(v,C,A),(y!==n-1||l<Math.PI)&&p.push(C,E,A)}this.setIndex(p),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(m,3)),this.setAttribute("uv",new se(w,2))}Ts.prototype=Object.create(ce.prototype);Ts.prototype.constructor=Ts;function Sa(t,i,n,s,r,o){Le.call(this),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},this.fromBufferGeometry(new Fr(t,i,n,s,r,o)),this.mergeVertices()}Sa.prototype=Object.create(Le.prototype);Sa.prototype.constructor=Sa;function Fr(t,i,n,s,r,o){ce.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},t=t||.5,i=i||1,r=r!==void 0?r:0,o=o!==void 0?o:Math.PI*2,n=n!==void 0?Math.max(3,n):8,s=s!==void 0?Math.max(1,s):1;let a=[],l=[],c=[],u=[],d=t,h=(i-t)/s,p=new L,f=new z;for(let m=0;m<=s;m++){for(let w=0;w<=n;w++){let y=r+w/n*o;p.x=d*Math.cos(y),p.y=d*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/i+1)/2,f.y=(p.y/i+1)/2,u.push(f.x,f.y)}d+=h}for(let m=0;m<s;m++){let w=m*(n+1);for(let y=0;y<n;y++){let g=y+w,v=g,C=g+n+1,E=g+n+2,A=g+1;a.push(v,C,A),a.push(C,E,A)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}Fr.prototype=Object.create(ce.prototype);Fr.prototype.constructor=Fr;function Ea(t,i,n,s){Le.call(this),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:s},this.fromBufferGeometry(new kr(t,i,n,s)),this.mergeVertices()}Ea.prototype=Object.create(Le.prototype);Ea.prototype.constructor=Ea;function kr(t,i,n,s){ce.call(this),this.type="LatheBufferGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:s},i=Math.floor(i)||12,n=n||0,s=s||Math.PI*2,s=be.clamp(s,0,Math.PI*2);let r=[],o=[],a=[],l=1/i,c=new L,u=new z;for(let d=0;d<=i;d++){let h=n+d*l*s,p=Math.sin(h),f=Math.cos(h);for(let m=0;m<=t.length-1;m++)c.x=t[m].x*p,c.y=t[m].y,c.z=t[m].x*f,o.push(c.x,c.y,c.z),u.x=d/i,u.y=m/(t.length-1),a.push(u.x,u.y)}for(let d=0;d<i;d++)for(let h=0;h<t.length-1;h++){let p=h+d*t.length,f=p,m=p+t.length,w=p+t.length+1,y=p+1;r.push(f,m,y),r.push(m,w,y)}if(this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.computeVertexNormals(),s===Math.PI*2){let d=this.attributes.normal.array,h=new L,p=new L,f=new L,m=i*t.length*3;for(let w=0,y=0;w<t.length;w++,y+=3)h.x=d[y+0],h.y=d[y+1],h.z=d[y+2],p.x=d[m+y+0],p.y=d[m+y+1],p.z=d[m+y+2],f.addVectors(h,p).normalize(),d[y+0]=d[m+y+0]=f.x,d[y+1]=d[m+y+1]=f.y,d[y+2]=d[m+y+2]=f.z}}kr.prototype=Object.create(ce.prototype);kr.prototype.constructor=kr;function Cs(t,i){Le.call(this),this.type="ShapeGeometry",typeof i=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),i=i.curveSegments),this.parameters={shapes:t,curveSegments:i},this.fromBufferGeometry(new Ps(t,i)),this.mergeVertices()}Cs.prototype=Object.create(Le.prototype);Cs.prototype.constructor=Cs;Cs.prototype.toJSON=function(){let t=Le.prototype.toJSON.call(this),i=this.parameters.shapes;return ud(i,t)};function Ps(t,i){ce.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:i},i=i||12;let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function c(u){let d=s.length/3,h=u.extractPoints(i),p=h.shape,f=h.holes;$i.isClockWise(p)===!1&&(p=p.reverse());for(let w=0,y=f.length;w<y;w++){let g=f[w];$i.isClockWise(g)===!0&&(f[w]=g.reverse())}let m=$i.triangulateShape(p,f);for(let w=0,y=f.length;w<y;w++){let g=f[w];p=p.concat(g)}for(let w=0,y=p.length;w<y;w++){let g=p[w];s.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let w=0,y=m.length;w<y;w++){let g=m[w],v=g[0]+d,C=g[1]+d,E=g[2]+d;n.push(v,C,E),l+=3}}}Ps.prototype=Object.create(ce.prototype);Ps.prototype.constructor=Ps;Ps.prototype.toJSON=function(){let t=ce.prototype.toJSON.call(this),i=this.parameters.shapes;return ud(i,t)};function ud(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let r=t[n];i.shapes.push(r.uuid)}else i.shapes.push(t.uuid);return i}function Ta(t,i){ce.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:i},i=i!==void 0?i:1;let n=[],s=Math.cos(be.DEG2RAD*i),r=[0,0],o={},a,l,c,u=["a","b","c"],d;t.isBufferGeometry?(d=new Le,d.fromBufferGeometry(t)):d=t.clone(),d.mergeVertices(),d.computeFaceNormals();let h=d.vertices,p=d.faces;for(let f=0,m=p.length;f<m;f++){let w=p[f];for(let y=0;y<3;y++)a=w[u[y]],l=w[u[(y+1)%3]],r[0]=Math.min(a,l),r[1]=Math.max(a,l),c=r[0]+","+r[1],o[c]===void 0?o[c]={index1:r[0],index2:r[1],face1:f,face2:void 0}:o[c].face2=f}for(c in o){let f=o[c];if(f.face2===void 0||p[f.face1].normal.dot(p[f.face2].normal)<=s){let m=h[f.index1];n.push(m.x,m.y,m.z),m=h[f.index2],n.push(m.x,m.y,m.z)}}this.setAttribute("position",new se(n,3))}Ta.prototype=Object.create(ce.prototype);Ta.prototype.constructor=Ta;function As(t,i,n,s,r,o,a,l){Le.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l},this.fromBufferGeometry(new ln(t,i,n,s,r,o,a,l)),this.mergeVertices()}As.prototype=Object.create(Le.prototype);As.prototype.constructor=As;function ln(t,i,n,s,r,o,a,l){ce.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;t=t!==void 0?t:1,i=i!==void 0?i:1,n=n||1,s=Math.floor(s)||8,r=Math.floor(r)||1,o=o!==void 0?o:!1,a=a!==void 0?a:0,l=l!==void 0?l:Math.PI*2;let u=[],d=[],h=[],p=[],f=0,m=[],w=n/2,y=0;g(),o===!1&&(t>0&&v(!0),i>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function g(){let C=new L,E=new L,A=0,R=(i-t)/n;for(let O=0;O<=r;O++){let V=[],k=O/r,b=k*(i-t)+t;for(let _=0;_<=s;_++){let M=_/s,T=M*l+a,S=Math.sin(T),P=Math.cos(T);E.x=b*S,E.y=-k*n+w,E.z=b*P,d.push(E.x,E.y,E.z),C.set(S,R,P).normalize(),h.push(C.x,C.y,C.z),p.push(M,1-k),V.push(f++)}m.push(V)}for(let O=0;O<s;O++)for(let V=0;V<r;V++){let k=m[V][O],b=m[V+1][O],_=m[V+1][O+1],M=m[V][O+1];u.push(k,b,M),u.push(b,_,M),A+=6}c.addGroup(y,A,0),y+=A}function v(C){let E,A,R=new z,O=new L,V=0,k=C===!0?t:i,b=C===!0?1:-1;E=f;for(let _=1;_<=s;_++)d.push(0,w*b,0),h.push(0,b,0),p.push(.5,.5),f++;A=f;for(let _=0;_<=s;_++){let T=_/s*l+a,S=Math.cos(T),P=Math.sin(T);O.x=k*P,O.y=w*b,O.z=k*S,d.push(O.x,O.y,O.z),h.push(0,b,0),R.x=S*.5+.5,R.y=P*.5*b+.5,p.push(R.x,R.y),f++}for(let _=0;_<s;_++){let M=E+_,T=A+_;C===!0?u.push(T,T+1,M):u.push(T+1,T,M),V+=3}c.addGroup(y,V,C===!0?1:2),y+=V}}ln.prototype=Object.create(ce.prototype);ln.prototype.constructor=ln;function Ca(t,i,n,s,r,o,a){As.call(this,0,t,i,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}Ca.prototype=Object.create(As.prototype);Ca.prototype.constructor=Ca;function Pa(t,i,n,s,r,o,a){ln.call(this,0,t,i,n,s,r,o,a),this.type="ConeBufferGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}Pa.prototype=Object.create(ln.prototype);Pa.prototype.constructor=Pa;function Aa(t,i,n,s){Le.call(this),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:s},this.fromBufferGeometry(new Hr(t,i,n,s)),this.mergeVertices()}Aa.prototype=Object.create(Le.prototype);Aa.prototype.constructor=Aa;function Hr(t,i,n,s){ce.call(this),this.type="CircleBufferGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:s},t=t||1,i=i!==void 0?Math.max(3,i):8,n=n!==void 0?n:0,s=s!==void 0?s:Math.PI*2;let r=[],o=[],a=[],l=[],c=new L,u=new z;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=i;d++,h+=3){let p=n+d/i*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=i;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}Hr.prototype=Object.create(ce.prototype);Hr.prototype.constructor=Hr;var Lt=Object.freeze({__proto__:null,WireframeGeometry:da,ParametricGeometry:fa,ParametricBufferGeometry:Cr,TetrahedronGeometry:ma,TetrahedronBufferGeometry:Pr,OctahedronGeometry:ga,OctahedronBufferGeometry:Ms,IcosahedronGeometry:va,IcosahedronBufferGeometry:Ar,DodecahedronGeometry:xa,DodecahedronBufferGeometry:Lr,PolyhedronGeometry:pa,PolyhedronBufferGeometry:Vt,TubeGeometry:ya,TubeBufferGeometry:Ss,TorusKnotGeometry:ba,TorusKnotBufferGeometry:Rr,TorusGeometry:wa,TorusBufferGeometry:Dr,TextGeometry:_a,TextBufferGeometry:Or,SphereGeometry:Ma,SphereBufferGeometry:Ts,RingGeometry:Sa,RingBufferGeometry:Fr,PlaneGeometry:la,PlaneBufferGeometry:Qt,LatheGeometry:Ea,LatheBufferGeometry:kr,ShapeGeometry:Cs,ShapeBufferGeometry:Ps,ExtrudeGeometry:Es,ExtrudeBufferGeometry:Ii,EdgesGeometry:Ta,ConeGeometry:Ca,ConeBufferGeometry:Pa,CylinderGeometry:As,CylinderBufferGeometry:ln,CircleGeometry:Aa,CircleBufferGeometry:Hr,BoxGeometry:kl,BoxBufferGeometry:xs});function Ls(t){Ce.call(this),this.type="ShadowMaterial",this.color=new te(0),this.transparent=!0,this.setValues(t)}Ls.prototype=Object.create(Ce.prototype);Ls.prototype.constructor=Ls;Ls.prototype.isShadowMaterial=!0;Ls.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this};function cn(t){we.call(this,t),this.type="RawShaderMaterial"}cn.prototype=Object.create(we.prototype);cn.prototype.constructor=cn;cn.prototype.isRawShaderMaterial=!0;function ai(t){Ce.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}ai.prototype=Object.create(Ce.prototype);ai.prototype.constructor=ai;ai.prototype.isMeshStandardMaterial=!0;ai.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Rs(t){ai.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transparency=0,this.setValues(t)}Rs.prototype=Object.create(ai.prototype);Rs.prototype.constructor=Rs;Rs.prototype.isMeshPhysicalMaterial=!0;Rs.prototype.copy=function(t){return ai.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new te).copy(t.sheen):this.sheen=null,this.transparency=t.transparency,this};function li(t){Ce.call(this),this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}li.prototype=Object.create(Ce.prototype);li.prototype.constructor=li;li.prototype.isMeshPhongMaterial=!0;li.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Ds(t){Ce.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Ds.prototype=Object.create(Ce.prototype);Ds.prototype.constructor=Ds;Ds.prototype.isMeshToonMaterial=!0;Ds.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Is(t){Ce.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Is.prototype=Object.create(Ce.prototype);Is.prototype.constructor=Is;Is.prototype.isMeshNormalMaterial=!0;Is.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function xi(t){Ce.call(this),this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}xi.prototype=Object.create(Ce.prototype);xi.prototype.constructor=xi;xi.prototype.isMeshLambertMaterial=!0;xi.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Bs(t){Ce.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Bs.prototype=Object.create(Ce.prototype);Bs.prototype.constructor=Bs;Bs.prototype.isMeshMatcapMaterial=!0;Bs.prototype.copy=function(t){return Ce.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Us(t){ot.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}Us.prototype=Object.create(ot.prototype);Us.prototype.constructor=Us;Us.prototype.isLineDashedMaterial=!0;Us.prototype.copy=function(t){return ot.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var qy=Object.freeze({__proto__:null,ShadowMaterial:Ls,SpriteMaterial:Rn,RawShaderMaterial:cn,ShaderMaterial:we,PointsMaterial:Dn,MeshPhysicalMaterial:Rs,MeshStandardMaterial:ai,MeshPhongMaterial:li,MeshToonMaterial:Ds,MeshNormalMaterial:Is,MeshLambertMaterial:xi,MeshDepthMaterial:Pn,MeshDistanceMaterial:An,MeshBasicMaterial:_t,MeshMatcapMaterial:Bs,LineDashedMaterial:Us,LineBasicMaterial:ot,Material:Ce}),it={arraySlice:function(t,i,n){return it.isTypedArray(t)?new t.constructor(t.subarray(i,n!==void 0?n:t.length)):t.slice(i,n)},convertArray:function(t,i,n){return!t||!n&&t.constructor===i?t:typeof i.BYTES_PER_ELEMENT=="number"?new i(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function i(r,o){return t[r]-t[o]}let n=t.length,s=new Array(n);for(let r=0;r!==n;++r)s[r]=r;return s.sort(i),s},sortedArray:function(t,i,n){let s=t.length,r=new t.constructor(s);for(let o=0,a=0;a!==s;++o){let l=n[o]*i;for(let c=0;c!==i;++c)r[a++]=t[l+c]}return r},flattenJSON:function(t,i,n,s){let r=1,o=t[0];for(;o!==void 0&&o[s]===void 0;)o=t[r++];if(o===void 0)return;let a=o[s];if(a!==void 0)if(Array.isArray(a))do a=o[s],a!==void 0&&(i.push(o.time),n.push.apply(n,a)),o=t[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[s],a!==void 0&&(i.push(o.time),a.toArray(n,n.length)),o=t[r++];while(o!==void 0);else do a=o[s],a!==void 0&&(i.push(o.time),n.push(a)),o=t[r++];while(o!==void 0)},subclip:function(t,i,n,s,r){r=r||30;let o=t.clone();o.name=i;let a=[];for(let c=0;c<o.tracks.length;++c){let u=o.tracks[c],d=u.getValueSize(),h=[],p=[];for(let f=0;f<u.times.length;++f){let m=u.times[f]*r;if(!(m<n||m>=s)){h.push(u.times[f]);for(let w=0;w<d;++w)p.push(u.values[f*d+w])}}h.length!==0&&(u.times=it.convertArray(h,u.times.constructor),u.values=it.convertArray(p,u.values.constructor),a.push(u))}o.tracks=a;let l=1/0;for(let c=0;c<o.tracks.length;++c)l>o.tracks[c].times[0]&&(l=o.tracks[c].times[0]);for(let c=0;c<o.tracks.length;++c)o.tracks[c].shift(-1*l);return o.resetDuration(),o},makeClipAdditive:function(t,i,n,s){i===void 0&&(i=0),n===void 0&&(n=t),(s===void 0||s<=0)&&(s=30);let r=t.tracks.length,o=i/s;for(let a=0;a<r;++a){let l=n.tracks[a],c=l.ValueTypeName;if(c==="bool"||c==="string")continue;let u=t.tracks.find(function(m){return m.name===l.name&&m.ValueTypeName===c});if(u===void 0)continue;let d=l.getValueSize(),h=l.times.length-1,p;if(o<=l.times[0])p=it.arraySlice(l.values,0,l.valueSize);else if(o>=l.times[h]){let m=h*d;p=it.arraySlice(l.values,m)}else{let m=l.createInterpolant();m.evaluate(o),p=m.resultBuffer}c==="quaternion"&&new Ue(p[0],p[1],p[2],p[3]).normalize().conjugate().toArray(p);let f=u.times.length;for(let m=0;m<f;++m){let w=m*d;if(c==="quaternion")Ue.multiplyQuaternionsFlat(u.values,w,p,0,u.values,w);else for(let y=0;y<d;++y)u.values[w+y]-=p[y]}}return t.blendMode=Nh,t}};function Yt(t,i,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new i.constructor(n),this.sampleValues=i,this.valueSize=n}Object.assign(Yt.prototype,{evaluate:function(t){let i=this.parameterPositions,n=this._cachedIndex,s=i[n],r=i[n-1];e:{t:{let o;i:{n:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break n;return n=i.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===a)break;if(r=s,s=i[++n],t<s)break t}o=i.length;break i}if(!(t>=r)){let a=i[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,s);if(n===l)break;if(s=r,r=i[--n-1],t>=r)break t}o=n,n=0;break i}break e}for(;n<o;){let a=n+o>>>1;t<i[a]?o=a:n=a+1}if(s=i[n],r=i[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,s);if(s===void 0)return n=i.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){let i=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)i[o]=n[r+o];return i},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Yt.prototype,{beforeStart_:Yt.prototype.copySampleValue_,afterEnd_:Yt.prototype.copySampleValue_});function ql(t,i,n,s){Yt.call(this,t,i,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ql.prototype=Object.assign(Object.create(Yt.prototype),{constructor:ql,DefaultSettings_:{endingStart:vs,endingEnd:vs},intervalChanged_:function(t,i,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case as:r=t,a=2*i-n;break;case oa:r=s.length-2,a=i+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case as:o=t,l=2*n-i;break;case oa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=i}let c=(n-i)*.5,u=this.valueSize;this._weightPrev=c/(i-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u},interpolate_:function(t,i,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(n-i)/(s-i),m=f*f,w=m*f,y=-h*w+2*h*m-h*f,g=(1+h)*w+(-1.5-2*h)*m+(-.5+h)*f+1,v=(-1-p)*w+(1.5+p)*m+.5*f,C=p*w-p*m;for(let E=0;E!==a;++E)r[E]=y*o[u+E]+g*o[c+E]+v*o[l+E]+C*o[d+E];return r}});function La(t,i,n,s){Yt.call(this,t,i,n,s)}La.prototype=Object.assign(Object.create(Yt.prototype),{constructor:La,interpolate_:function(t,i,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-i)/(s-i),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}});function Yl(t,i,n,s){Yt.call(this,t,i,n,s)}Yl.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Yl,interpolate_:function(t){return this.copySampleValue_(t-1)}});function Pt(t,i,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=it.convertArray(i,this.TimeBufferType),this.values=it.convertArray(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}Object.assign(Pt,{toJSON:function(t){let i=t.constructor,n;if(i.toJSON!==void 0)n=i.toJSON(t);else{n={name:t.name,times:it.convertArray(t.times,Array),values:it.convertArray(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}});Object.assign(Pt.prototype,{constructor:Pt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:na,InterpolantFactoryMethodDiscrete:function(t){return new Yl(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new La(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new ql(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let i;switch(t){case ra:i=this.InterpolantFactoryMethodDiscrete;break;case na:i=this.InterpolantFactoryMethodLinear;break;case Ja:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=i,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Ja}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){let i=this.times;for(let n=0,s=i.length;n!==s;++n)i[n]+=t}return this},scale:function(t){if(t!==1){let i=this.times;for(let n=0,s=i.length;n!==s;++n)i[n]*=t}return this},trim:function(t,i){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>i;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=it.arraySlice(n,r,o),this.values=it.arraySlice(this.values,r*a,o*a)}return this},validate:function(){let t=!0,i=this.getValueSize();i-Math.floor(i)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&it.isTypedArray(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t},optimize:function(){let t=it.arraySlice(this.times),i=it.arraySlice(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==c[0]))if(s)l=!0;else{let d=a*n,h=d-n,p=d+n;for(let f=0;f!==n;++f){let m=i[d+f];if(m!==i[h+f]||m!==i[p+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let p=0;p!==n;++p)i[h+p]=i[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)i[l+c]=i[a+c];++o}return o!==t.length?(this.times=it.arraySlice(t,0,o),this.values=it.arraySlice(i,0,o*n)):(this.times=t,this.values=i),this},clone:function(){let t=it.arraySlice(this.times,0),i=it.arraySlice(this.values,0),n=this.constructor,s=new n(this.name,t,i);return s.createInterpolant=this.createInterpolant,s}});function Ql(t,i,n){Pt.call(this,t,i,n)}Ql.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ql,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:ra,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Zl(t,i,n,s){Pt.call(this,t,i,n,s)}Zl.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Zl,ValueTypeName:"color"});function In(t,i,n,s){Pt.call(this,t,i,n,s)}In.prototype=Object.assign(Object.create(Pt.prototype),{constructor:In,ValueTypeName:"number"});function Kl(t,i,n,s){Yt.call(this,t,i,n,s)}Kl.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Kl,interpolate_:function(t,i,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-i)/(s-i),c=t*a;for(let u=c+a;c!==u;c+=4)Ue.slerpFlat(r,0,o,c-a,o,c,l);return r}});function Os(t,i,n,s){Pt.call(this,t,i,n,s)}Os.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Os,ValueTypeName:"quaternion",DefaultInterpolation:na,InterpolantFactoryMethodLinear:function(t){return new Kl(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Jl(t,i,n,s){Pt.call(this,t,i,n,s)}Jl.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Jl,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:ra,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Bn(t,i,n,s){Pt.call(this,t,i,n,s)}Bn.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Bn,ValueTypeName:"vector"});function Gt(t,i,n,s){this.name=t,this.tracks=n,this.duration=i!==void 0?i:-1,this.blendMode=s!==void 0?s:Cc,this.uuid=be.generateUUID(),this.duration<0&&this.resetDuration()}function Yy(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return In;case"vector":case"vector2":case"vector3":case"vector4":return Bn;case"color":return Zl;case"quaternion":return Os;case"bool":case"boolean":return Ql;case"string":return Jl}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Qy(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let i=Yy(t.type);if(t.times===void 0){let n=[],s=[];it.flattenJSON(t.keys,n,s,"value"),t.times=n,t.values=s}return i.parse!==void 0?i.parse(t):new i(t.name,t.times,t.values,t.interpolation)}Object.assign(Gt,{parse:function(t){let i=[],n=t.tracks,s=1/(t.fps||1);for(let r=0,o=n.length;r!==o;++r)i.push(Qy(n[r]).scale(s));return new Gt(t.name,t.duration,i,t.blendMode)},toJSON:function(t){let i=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:i,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)i.push(Pt.toJSON(n[r]));return s},CreateFromMorphTargetSequence:function(t,i,n,s){let r=i.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=it.getKeyframeOrder(l);l=it.sortedArray(l,1,u),c=it.sortedArray(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new In(".morphTargetInfluences["+i[a].name+"]",l,c).scale(1/n))}return new Gt(t,-1,o)},findByName:function(t,i){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===i)return n[s];return null},CreateClipsFromMorphTargetSequences:function(t,i,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let o=[];for(let a in s)o.push(Gt.CreateFromMorphTargetSequence(a,s[a],i,n));return o},parseAnimation:function(t,i){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,h,p,f,m){if(p.length!==0){let w=[],y=[];it.flattenJSON(p,w,y,f),w.length!==0&&m.push(new d(h,w,y))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let p={},f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let m=0;m<h[f].morphTargets.length;m++)p[h[f].morphTargets[m]]=-1;for(let m in p){let w=[],y=[];for(let g=0;g!==h[f].morphTargets.length;++g){let v=h[f];w.push(v.time),y.push(v.morphTarget===m?1:0)}s.push(new In(".morphTargetInfluence["+m+"]",w,y))}l=p.length*(o||1)}else{let p=".bones["+i[d].name+"]";n(Bn,p+".position",h,"pos",s),n(Os,p+".quaternion",h,"rot",s),n(Bn,p+".scale",h,"scl",s)}}return s.length===0?null:new Gt(r,l,s,a)}});Object.assign(Gt.prototype,{resetDuration:function(){let t=this.tracks,i=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];i=Math.max(i,r.times[r.times.length-1])}return this.duration=i,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let i=0;i<this.tracks.length;i++)t=t&&this.tracks[i].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){let t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());return new Gt(this.name,this.duration,t,this.blendMode)}});var Fs={enabled:!1,files:{},add:function(t,i){this.enabled!==!1&&(this.files[t]=i)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function hd(t,i,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null}}var Zy=new hd;function Xe(t){this.manager=t!==void 0?t:Zy,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Xe.prototype,{load:function(){},loadAsync:function(t,i){let n=this;return new Promise(function(s,r){n.load(t,s,i,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var si={};function Kt(t){Xe.call(this,t)}Kt.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Kt,load:function(t,i,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fs.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){i&&i(o),r.manager.itemEnd(t)},0),o;if(si[t]!==void 0){si[t].push({onLoad:i,onProgress:n,onError:s});return}let a=/^data:(.*?)(;base64)?,(.*)$/,l=t.match(a),c;if(l){let u=l[1],d=!!l[2],h=l[3];h=decodeURIComponent(h),d&&(h=atob(h));try{let p,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let m=new Uint8Array(h.length);for(let y=0;y<h.length;y++)m[y]=h.charCodeAt(y);f==="blob"?p=new Blob([m.buffer],{type:u}):p=m.buffer;break;case"document":p=new DOMParser().parseFromString(h,u);break;case"json":p=JSON.parse(h);break;default:p=h;break}setTimeout(function(){i&&i(p),r.manager.itemEnd(t)},0)}catch(p){setTimeout(function(){s&&s(p),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{si[t]=[],si[t].push({onLoad:i,onProgress:n,onError:s}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(u){let d=this.response,h=si[t];if(delete si[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Fs.add(t,d);for(let p=0,f=h.length;p<f;p++){let m=h[p];m.onLoad&&m.onLoad(d)}r.manager.itemEnd(t)}else{for(let p=0,f=h.length;p<f;p++){let m=h[p];m.onError&&m.onError(u)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(u){let d=si[t];for(let h=0,p=d.length;h<p;h++){let f=d[h];f.onProgress&&f.onProgress(u)}},!1),c.addEventListener("error",function(u){let d=si[t];delete si[t];for(let h=0,p=d.length;h<p;h++){let f=d[h];f.onError&&f.onError(u)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(u){let d=si[t];delete si[t];for(let h=0,p=d.length;h<p;h++){let f=d[h];f.onError&&f.onError(u)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this}});function sh(t){Xe.call(this,t)}sh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:sh,load:function(t,i,n,s){let r=this,o=new Kt(r.manager);o.setPath(r.path),o.load(t,function(a){try{i(r.parse(JSON.parse(a)))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)},parse:function(t){let i=[];for(let n=0;n<t.length;n++){let s=Gt.parse(t[n]);i.push(s)}return i}});function rh(t){Xe.call(this,t)}rh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:rh,load:function(t,i,n,s){let r=this,o=[],a=new Tr;a.image=o;let l=new Kt(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer");let c=0;function u(d){l.load(t[d],function(h){let p=r.parse(h,!0);o[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=Ge),a.format=p.format,a.needsUpdate=!0,i&&i(a))},n,s)}if(Array.isArray(t))for(let d=0,h=t.length;d<h;++d)u(d);else l.load(t,function(d){let h=r.parse(d,!0);if(h.isCubemap){let p=h.mipmaps.length/h.mipmapCount;for(let f=0;f<p;f++){o[f]={mipmaps:[]};for(let m=0;m<h.mipmapCount;m++)o[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+m]),o[f].format=h.format,o[f].width=h.width,o[f].height=h.height}}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=Ge),a.format=h.format,a.needsUpdate=!0,i&&i(a)},n,s);return a}});function oh(t){Xe.call(this,t)}oh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:oh,load:function(t,i,n,s){let r=this,o=new bs,a=new Kt(this.manager);return a.setResponseType("arraybuffer"),a.setPath(this.path),a.load(t,function(l){let c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Tt,o.wrapT=c.wrapT!==void 0?c.wrapT:Tt,o.magFilter=c.magFilter!==void 0?c.magFilter:Ge,o.minFilter=c.minFilter!==void 0?c.minFilter:Ge,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ha),c.mipmapCount===1&&(o.minFilter=Ge),o.needsUpdate=!0,i&&i(o,c))},n,s),o}});function Un(t){Xe.call(this,t)}Un.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Un,load:function(t,i,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fs.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){i&&i(o),r.manager.itemEnd(t)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),Fs.add(t,this),i&&i(this),r.manager.itemEnd(t)}function c(u){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}});function $l(t){Xe.call(this,t)}$l.prototype=Object.assign(Object.create(Xe.prototype),{constructor:$l,load:function(t,i,n,s){let r=new rn,o=new Un(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,i&&i(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}});function Gr(t){Xe.call(this,t)}Gr.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Gr,load:function(t,i,n,s){let r=new je,o=new Un(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a;let l=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=l?vi:Ze,r.needsUpdate=!0,i!==void 0&&i(r)},n,s),r}});function ve(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ve.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,i){let n=this.getUtoTmapping(t);return this.getPoint(n,i)},getPoints:function(t){t===void 0&&(t=5);let i=[];for(let n=0;n<=t;n++)i.push(this.getPoint(n/t));return i},getSpacedPoints:function(t){t===void 0&&(t=5);let i=[];for(let n=0;n<=t;n++)i.push(this.getPointAt(n/t));return i},getLength:function(){let t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let i=[],n,s=this.getPoint(0),r=0;i.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),i.push(r),s=n;return this.cacheArcLengths=i,i},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,i){let n=this.getLengths(),s=0,r=n.length,o;i?o=i:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)},getTangent:function(t,i){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=i||(o.isVector2?new z:new L);return l.copy(a).sub(o).normalize(),l},getTangentAt:function(t,i){let n=this.getUtoTmapping(t);return this.getTangent(n,i)},computeFrenetFrames:function(t,i){let n=new L,s=[],r=[],o=[],a=new L,l=new de;for(let p=0;p<=t;p++){let f=p/t;s[p]=this.getTangentAt(f,new L),s[p].normalize()}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(be.clamp(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(i===!0){let p=Math.acos(be.clamp(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){let t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Jt(t,i,n,s,r,o,a,l){ve.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=i||0,this.xRadius=n||1,this.yRadius=s||1,this.aStartAngle=r||0,this.aEndAngle=o||2*Math.PI,this.aClockwise=a||!1,this.aRotation=l||0}Jt.prototype=Object.create(ve.prototype);Jt.prototype.constructor=Jt;Jt.prototype.isEllipseCurve=!0;Jt.prototype.getPoint=function(t,i){let n=i||new z,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)};Jt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};Jt.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};Jt.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function Nr(t,i,n,s,r,o){Jt.call(this,t,i,n,n,s,r,o),this.type="ArcCurve"}Nr.prototype=Object.create(Jt.prototype);Nr.prototype.constructor=Nr;Nr.prototype.isArcCurve=!0;function Lc(){let t=0,i=0,n=0,s=0;function r(o,a,l,c){t=o,i=l,n=-3*o+3*a-2*l-c,s=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,u){r(a,l,u*(l-o),u*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,u,d,h){let p=(a-o)/u-(l-o)/(u+d)+(l-a)/d,f=(l-a)/d-(c-a)/(d+h)+(c-l)/h;p*=d,f*=d,r(a,l,p,f)},calc:function(o){let a=o*o,l=a*o;return t+i*o+n*a+s*l}}}var Xo=new L,Ml=new Lc,Sl=new Lc,El=new Lc;function Dt(t,i,n,s){ve.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=i||!1,this.curveType=n||"centripetal",this.tension=s||.5}Dt.prototype=Object.create(ve.prototype);Dt.prototype.constructor=Dt;Dt.prototype.isCatmullRomCurve3=!0;Dt.prototype.getPoint=function(t,i){let n=i||new L,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u,d,h;if(this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo),u=s[a%r],d=s[(a+1)%r],this.closed||a+2<r?h=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),w=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),f<1e-4&&(f=m),w<1e-4&&(w=m),Ml.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,m,w),Sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,m,w),El.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,m,w)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ml.calc(l),Sl.calc(l),El.calc(l)),n};Dt.prototype.copy=function(t){ve.prototype.copy.call(this,t),this.points=[];for(let i=0,n=t.points.length;i<n;i++){let s=t.points[i];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};Dt.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);t.points=[];for(let i=0,n=this.points.length;i<n;i++){let s=this.points[i];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};Dt.prototype.fromJSON=function(t){ve.prototype.fromJSON.call(this,t),this.points=[];for(let i=0,n=t.points.length;i<n;i++){let s=t.points[i];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function ah(t,i,n,s,r){let o=(s-i)*.5,a=(r-n)*.5,l=t*t,c=t*l;return(2*n-2*s+o+a)*c+(-3*n+3*s-2*o-a)*l+o*t+n}function Ky(t,i){let n=1-t;return n*n*i}function Jy(t,i){return 2*(1-t)*t*i}function $y(t,i){return t*t*i}function dr(t,i,n,s){return Ky(t,i)+Jy(t,n)+$y(t,s)}function e0(t,i){let n=1-t;return n*n*n*i}function t0(t,i){let n=1-t;return 3*n*n*t*i}function i0(t,i){return 3*(1-t)*t*t*i}function n0(t,i){return t*t*t*i}function fr(t,i,n,s,r){return e0(t,i)+t0(t,n)+i0(t,s)+n0(t,r)}function yi(t,i,n,s){ve.call(this),this.type="CubicBezierCurve",this.v0=t||new z,this.v1=i||new z,this.v2=n||new z,this.v3=s||new z}yi.prototype=Object.create(ve.prototype);yi.prototype.constructor=yi;yi.prototype.isCubicBezierCurve=!0;yi.prototype.getPoint=function(t,i){let n=i||new z,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y)),n};yi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};yi.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};yi.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Bi(t,i,n,s){ve.call(this),this.type="CubicBezierCurve3",this.v0=t||new L,this.v1=i||new L,this.v2=n||new L,this.v3=s||new L}Bi.prototype=Object.create(ve.prototype);Bi.prototype.constructor=Bi;Bi.prototype.isCubicBezierCurve3=!0;Bi.prototype.getPoint=function(t,i){let n=i||new L,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y),fr(t,s.z,r.z,o.z,a.z)),n};Bi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Bi.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Bi.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function zt(t,i){ve.call(this),this.type="LineCurve",this.v1=t||new z,this.v2=i||new z}zt.prototype=Object.create(ve.prototype);zt.prototype.constructor=zt;zt.prototype.isLineCurve=!0;zt.prototype.getPoint=function(t,i){let n=i||new z;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};zt.prototype.getPointAt=function(t,i){return this.getPoint(t,i)};zt.prototype.getTangent=function(t,i){let n=i||new z;return n.copy(this.v2).sub(this.v1).normalize(),n};zt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};zt.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};zt.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function bi(t,i){ve.call(this),this.type="LineCurve3",this.v1=t||new L,this.v2=i||new L}bi.prototype=Object.create(ve.prototype);bi.prototype.constructor=bi;bi.prototype.isLineCurve3=!0;bi.prototype.getPoint=function(t,i){let n=i||new L;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};bi.prototype.getPointAt=function(t,i){return this.getPoint(t,i)};bi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};bi.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};bi.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function wi(t,i,n){ve.call(this),this.type="QuadraticBezierCurve",this.v0=t||new z,this.v1=i||new z,this.v2=n||new z}wi.prototype=Object.create(ve.prototype);wi.prototype.constructor=wi;wi.prototype.isQuadraticBezierCurve=!0;wi.prototype.getPoint=function(t,i){let n=i||new z,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y)),n};wi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};wi.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};wi.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ui(t,i,n){ve.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new L,this.v1=i||new L,this.v2=n||new L}Ui.prototype=Object.create(ve.prototype);Ui.prototype.constructor=Ui;Ui.prototype.isQuadraticBezierCurve3=!0;Ui.prototype.getPoint=function(t,i){let n=i||new L,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y),dr(t,s.z,r.z,o.z)),n};Ui.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Ui.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Ui.prototype.fromJSON=function(t){return ve.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function _i(t){ve.call(this),this.type="SplineCurve",this.points=t||[]}_i.prototype=Object.create(ve.prototype);_i.prototype.constructor=_i;_i.prototype.isSplineCurve=!0;_i.prototype.getPoint=function(t,i){let n=i||new z,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ah(a,l.x,c.x,u.x,d.x),ah(a,l.y,c.y,u.y,d.y)),n};_i.prototype.copy=function(t){ve.prototype.copy.call(this,t),this.points=[];for(let i=0,n=t.points.length;i<n;i++){let s=t.points[i];this.points.push(s.clone())}return this};_i.prototype.toJSON=function(){let t=ve.prototype.toJSON.call(this);t.points=[];for(let i=0,n=this.points.length;i<n;i++){let s=this.points[i];t.points.push(s.toArray())}return t};_i.prototype.fromJSON=function(t){ve.prototype.fromJSON.call(this,t),this.points=[];for(let i=0,n=t.points.length;i<n;i++){let s=t.points[i];this.points.push(new z().fromArray(s))}return this};var ec=Object.freeze({__proto__:null,ArcCurve:Nr,CatmullRomCurve3:Dt,CubicBezierCurve:yi,CubicBezierCurve3:Bi,EllipseCurve:Jt,LineCurve:zt,LineCurve3:bi,QuadraticBezierCurve:wi,QuadraticBezierCurve3:Ui,SplineCurve:_i});function Zi(){ve.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Zi.prototype=Object.assign(Object.create(ve.prototype),{constructor:Zi,add:function(t){this.curves.push(t)},closePath:function(){let t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);t.equals(i)||this.curves.push(new zt(i,t))},getPoint:function(t){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let r=n[s]-i,o=this.curves[s],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l)}s++}return null},getLength:function(){let t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],i=0;for(let n=0,s=this.curves.length;n<s;n++)i+=this.curves[n].getLength(),t.push(i);return this.cacheLengths=t,t},getSpacedPoints:function(t){t===void 0&&(t=40);let i=[];for(let n=0;n<=t;n++)i.push(this.getPoint(n/t));return this.autoClose&&i.push(i[0]),i},getPoints:function(t){t=t||12;let i=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o&&o.isEllipseCurve?t*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(i.push(u),n=u)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i},copy:function(t){ve.prototype.copy.call(this,t),this.curves=[];for(let i=0,n=t.curves.length;i<n;i++){let s=t.curves[i];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){let t=ve.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let i=0,n=this.curves.length;i<n;i++){let s=this.curves[i];t.curves.push(s.toJSON())}return t},fromJSON:function(t){ve.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,n=t.curves.length;i<n;i++){let s=t.curves[i];this.curves.push(new ec[s.type]().fromJSON(s))}return this}});function mi(t){Zi.call(this),this.type="Path",this.currentPoint=new z,t&&this.setFromPoints(t)}mi.prototype=Object.assign(Object.create(Zi.prototype),{constructor:mi,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let i=1,n=t.length;i<n;i++)this.lineTo(t[i].x,t[i].y);return this},moveTo:function(t,i){return this.currentPoint.set(t,i),this},lineTo:function(t,i){let n=new zt(this.currentPoint.clone(),new z(t,i));return this.curves.push(n),this.currentPoint.set(t,i),this},quadraticCurveTo:function(t,i,n,s){let r=new wi(this.currentPoint.clone(),new z(t,i),new z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this},bezierCurveTo:function(t,i,n,s,r,o){let a=new yi(this.currentPoint.clone(),new z(t,i),new z(n,s),new z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this},splineThru:function(t){let i=[this.currentPoint.clone()].concat(t),n=new _i(i);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,i,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,i+l,n,s,r,o),this},absarc:function(t,i,n,s,r,o){return this.absellipse(t,i,n,n,s,r,o),this},ellipse:function(t,i,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,i+u,n,s,r,o,a,l),this},absellipse:function(t,i,n,s,r,o,a,l){let c=new Jt(t,i,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this},copy:function(t){return Zi.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){let t=Zi.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return Zi.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function En(t){mi.call(this,t),this.uuid=be.generateUUID(),this.type="Shape",this.holes=[]}En.prototype=Object.assign(Object.create(mi.prototype),{constructor:En,getPointsHoles:function(t){let i=[];for(let n=0,s=this.holes.length;n<s;n++)i[n]=this.holes[n].getPoints(t);return i},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){mi.prototype.copy.call(this,t),this.holes=[];for(let i=0,n=t.holes.length;i<n;i++){let s=t.holes[i];this.holes.push(s.clone())}return this},toJSON:function(){let t=mi.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let i=0,n=this.holes.length;i<n;i++){let s=this.holes[i];t.holes.push(s.toJSON())}return t},fromJSON:function(t){mi.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let i=0,n=t.holes.length;i<n;i++){let s=t.holes[i];this.holes.push(new mi().fromJSON(s))}return this}});function Ke(t,i){re.call(this),this.type="Light",this.color=new te(t),this.intensity=i!==void 0?i:1,this.receiveShadow=void 0}Ke.prototype=Object.assign(Object.create(re.prototype),{constructor:Ke,isLight:!0,copy:function(t){return re.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){let i=re.prototype.toJSON.call(this,t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}});function tc(t,i,n){Ke.call(this,t,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(re.DefaultUp),this.updateMatrix(),this.groundColor=new te(i)}tc.prototype=Object.assign(Object.create(Ke.prototype),{constructor:tc,isHemisphereLight:!0,copy:function(t){return Ke.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function Oi(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new z(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}Object.assign(Oi.prototype,{_projScreenMatrix:new de,_lightPositionWorld:new L,_lookTarget:new L,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){let i=this.camera,n=this.matrix,s=this._projScreenMatrix,r=this._lookTarget,o=this._lightPositionWorld;o.setFromMatrixPosition(t.matrixWorld),i.position.copy(o),r.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(r),i.updateMatrixWorld(),s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(i.projectionMatrix),n.multiply(i.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function ic(){Oi.call(this,new nt(50,1,.5,500))}ic.prototype=Object.assign(Object.create(Oi.prototype),{constructor:ic,isSpotLightShadow:!0,updateMatrices:function(t){let i=this.camera,n=be.RAD2DEG*2*t.angle,s=this.mapSize.width/this.mapSize.height,r=t.distance||i.far;(n!==i.fov||s!==i.aspect||r!==i.far)&&(i.fov=n,i.aspect=s,i.far=r,i.updateProjectionMatrix()),Oi.prototype.updateMatrices.call(this,t)}});function Vr(t,i,n,s,r,o){Ke.call(this,t,i),this.type="SpotLight",this.position.copy(re.DefaultUp),this.updateMatrix(),this.target=new re,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=s!==void 0?s:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=o!==void 0?o:1,this.shadow=new ic}Vr.prototype=Object.assign(Object.create(Ke.prototype),{constructor:Vr,isSpotLight:!0,copy:function(t){return Ke.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function nc(){Oi.call(this,new nt(90,1,.5,500)),this._frameExtents=new z(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}nc.prototype=Object.assign(Object.create(Oi.prototype),{constructor:nc,isPointLightShadow:!0,updateMatrices:function(t,i){i===void 0&&(i=0);let n=this.camera,s=this.matrix,r=this._lightPositionWorld,o=this._lookTarget,a=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),o.copy(n.position),o.add(this._cubeDirections[i]),n.up.copy(this._cubeUps[i]),n.lookAt(o),n.updateMatrixWorld(),s.makeTranslation(-r.x,-r.y,-r.z),a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a)}});function ks(t,i,n,s){Ke.call(this,t,i),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=s!==void 0?s:1,this.shadow=new nc}ks.prototype=Object.assign(Object.create(Ke.prototype),{constructor:ks,isPointLight:!0,copy:function(t){return Ke.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function ci(t,i,n,s,r,o){Di.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=i!==void 0?i:1,this.top=n!==void 0?n:1,this.bottom=s!==void 0?s:-1,this.near=r!==void 0?r:.1,this.far=o!==void 0?o:2e3,this.updateProjectionMatrix()}ci.prototype=Object.assign(Object.create(Di.prototype),{constructor:ci,isOrthographicCamera:!0,copy:function(t,i){return Di.prototype.copy.call(this,t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,i,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+i,l=s-i;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){let i=re.prototype.toJSON.call(this,t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}});function sc(){Oi.call(this,new ci(-5,5,5,-5,.5,500))}sc.prototype=Object.assign(Object.create(Oi.prototype),{constructor:sc,isDirectionalLightShadow:!0,updateMatrices:function(t){Oi.prototype.updateMatrices.call(this,t)}});function On(t,i){Ke.call(this,t,i),this.type="DirectionalLight",this.position.copy(re.DefaultUp),this.updateMatrix(),this.target=new re,this.shadow=new sc}On.prototype=Object.assign(Object.create(Ke.prototype),{constructor:On,isDirectionalLight:!0,copy:function(t){return Ke.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Fn(t,i){Ke.call(this,t,i),this.type="AmbientLight",this.castShadow=void 0}Fn.prototype=Object.assign(Object.create(Ke.prototype),{constructor:Fn,isAmbientLight:!0});function rc(t,i,n,s){Ke.call(this,t,i),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=s!==void 0?s:10}rc.prototype=Object.assign(Object.create(Ke.prototype),{constructor:rc,isRectAreaLight:!0,copy:function(t){return Ke.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){let i=Ke.prototype.toJSON.call(this,t);return i.object.width=this.width,i.object.height=this.height,i}});function Rc(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}Object.assign(Rc.prototype,{isSphericalHarmonics3:!0,set:function(t){for(let i=0;i<9;i++)this.coefficients[i].copy(t[i]);return this},zero:function(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},getAt:function(t,i){let n=t.x,s=t.y,r=t.z,o=this.coefficients;return i.copy(o[0]).multiplyScalar(.282095),i.addScaledVector(o[1],.488603*s),i.addScaledVector(o[2],.488603*r),i.addScaledVector(o[3],.488603*n),i.addScaledVector(o[4],1.092548*(n*s)),i.addScaledVector(o[5],1.092548*(s*r)),i.addScaledVector(o[6],.315392*(3*r*r-1)),i.addScaledVector(o[7],1.092548*(n*r)),i.addScaledVector(o[8],.546274*(n*n-s*s)),i},getIrradianceAt:function(t,i){let n=t.x,s=t.y,r=t.z,o=this.coefficients;return i.copy(o[0]).multiplyScalar(.886227),i.addScaledVector(o[1],2*.511664*s),i.addScaledVector(o[2],2*.511664*r),i.addScaledVector(o[3],2*.511664*n),i.addScaledVector(o[4],2*.429043*n*s),i.addScaledVector(o[5],2*.429043*s*r),i.addScaledVector(o[6],.743125*r*r-.247708),i.addScaledVector(o[7],2*.429043*n*r),i.addScaledVector(o[8],.429043*(n*n-s*s)),i},add:function(t){for(let i=0;i<9;i++)this.coefficients[i].add(t.coefficients[i]);return this},addScaledSH:function(t,i){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],i);return this},scale:function(t){for(let i=0;i<9;i++)this.coefficients[i].multiplyScalar(t);return this},lerp:function(t,i){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],i);return this},equals:function(t){for(let i=0;i<9;i++)if(!this.coefficients[i].equals(t.coefficients[i]))return!1;return!0},copy:function(t){return this.set(t.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(t,i){i===void 0&&(i=0);let n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(t,i+s*3);return this},toArray:function(t,i){t===void 0&&(t=[]),i===void 0&&(i=0);let n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(t,i+s*3);return t}});Object.assign(Rc,{getBasisAt:function(t,i){let n=t.x,s=t.y,r=t.z;i[0]=.282095,i[1]=.488603*s,i[2]=.488603*r,i[3]=.488603*n,i[4]=1.092548*n*s,i[5]=1.092548*s*r,i[6]=.315392*(3*r*r-1),i[7]=1.092548*n*r,i[8]=.546274*(n*n-s*s)}});function oi(t,i){Ke.call(this,void 0,i),this.type="LightProbe",this.sh=t!==void 0?t:new Rc}oi.prototype=Object.assign(Object.create(Ke.prototype),{constructor:oi,isLightProbe:!0,copy:function(t){return Ke.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){let i=Ke.prototype.toJSON.call(this,t);return i.object.sh=this.sh.toArray(),i}});function oc(t){Xe.call(this,t),this.textures={}}oc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:oc,load:function(t,i,n,s){let r=this,o=new Kt(r.manager);o.setPath(r.path),o.load(t,function(a){try{i(r.parse(JSON.parse(a)))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)},parse:function(t){let i=this.textures;function n(r){return i[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),i[r]}let s=new qy[t.type];if(t.uuid!==void 0&&(s.uuid=t.uuid),t.name!==void 0&&(s.name=t.name),t.color!==void 0&&s.color.setHex(t.color),t.roughness!==void 0&&(s.roughness=t.roughness),t.metalness!==void 0&&(s.metalness=t.metalness),t.sheen!==void 0&&(s.sheen=new te().setHex(t.sheen)),t.emissive!==void 0&&s.emissive.setHex(t.emissive),t.specular!==void 0&&s.specular.setHex(t.specular),t.shininess!==void 0&&(s.shininess=t.shininess),t.clearcoat!==void 0&&(s.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(s.fog=t.fog),t.flatShading!==void 0&&(s.flatShading=t.flatShading),t.blending!==void 0&&(s.blending=t.blending),t.combine!==void 0&&(s.combine=t.combine),t.side!==void 0&&(s.side=t.side),t.opacity!==void 0&&(s.opacity=t.opacity),t.transparent!==void 0&&(s.transparent=t.transparent),t.alphaTest!==void 0&&(s.alphaTest=t.alphaTest),t.depthTest!==void 0&&(s.depthTest=t.depthTest),t.depthWrite!==void 0&&(s.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(s.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(s.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(s.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(s.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(s.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(s.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(s.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(s.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(s.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(s.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(s.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(s.rotation=t.rotation),t.linewidth!==1&&(s.linewidth=t.linewidth),t.dashSize!==void 0&&(s.dashSize=t.dashSize),t.gapSize!==void 0&&(s.gapSize=t.gapSize),t.scale!==void 0&&(s.scale=t.scale),t.polygonOffset!==void 0&&(s.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(s.skinning=t.skinning),t.morphTargets!==void 0&&(s.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(s.morphNormals=t.morphNormals),t.dithering!==void 0&&(s.dithering=t.dithering),t.vertexTangents!==void 0&&(s.vertexTangents=t.vertexTangents),t.visible!==void 0&&(s.visible=t.visible),t.toneMapped!==void 0&&(s.toneMapped=t.toneMapped),t.userData!==void 0&&(s.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?s.vertexColors=t.vertexColors>0:s.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(s.uniforms[r]={},o.type){case"t":s.uniforms[r].value=n(o.value);break;case"c":s.uniforms[r].value=new te().setHex(o.value);break;case"v2":s.uniforms[r].value=new z().fromArray(o.value);break;case"v3":s.uniforms[r].value=new L().fromArray(o.value);break;case"v4":s.uniforms[r].value=new ke().fromArray(o.value);break;case"m3":s.uniforms[r].value=new wt().fromArray(o.value);case"m4":s.uniforms[r].value=new de().fromArray(o.value);break;default:s.uniforms[r].value=o.value}}if(t.defines!==void 0&&(s.defines=t.defines),t.vertexShader!==void 0&&(s.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(s.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(let r in t.extensions)s.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(s.flatShading=t.shading===1),t.size!==void 0&&(s.size=t.size),t.sizeAttenuation!==void 0&&(s.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(s.map=n(t.map)),t.matcap!==void 0&&(s.matcap=n(t.matcap)),t.alphaMap!==void 0&&(s.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(s.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(s.bumpScale=t.bumpScale),t.normalMap!==void 0&&(s.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(s.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new z().fromArray(r)}return t.displacementMap!==void 0&&(s.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(s.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(s.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(s.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(s.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(s.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(s.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(s.specularMap=n(t.specularMap)),t.envMap!==void 0&&(s.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(s.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(s.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(s.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(s.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(s.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(s.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(s.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(s.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(s.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new z().fromArray(t.clearcoatNormalScale)),s},setTextures:function(t){return this.textures=t,this}});var js={decodeText:function(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let i="";for(let n=0,s=t.length;n<s;n++)i+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(i))}catch{return i}},extractUrlBase:function(t){let i=t.lastIndexOf("/");return i===-1?"./":t.substr(0,i+1)}};function Ra(){ce.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Ra.prototype=Object.assign(Object.create(ce.prototype),{constructor:Ra,isInstancedBufferGeometry:!0,copy:function(t){return ce.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t=ce.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function ac(t,i,n,s){typeof n=="number"&&(s=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Se.call(this,t,i,n),this.meshPerAttribute=s||1}ac.prototype=Object.assign(Object.create(Se.prototype),{constructor:ac,isInstancedBufferAttribute:!0,copy:function(t){return Se.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){let t=Se.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function lc(t){Xe.call(this,t)}lc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:lc,load:function(t,i,n,s){let r=this,o=new Kt(r.manager);o.setPath(r.path),o.load(t,function(a){try{i(r.parse(JSON.parse(a)))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)},parse:function(t){let i={},n={};function s(p,f){if(i[f]!==void 0)return i[f];let w=p.interleavedBuffers[f],y=r(p,w.buffer),g=new qo[w.type](y),v=new Xt(g,w.stride);return v.uuid=w.uuid,i[f]=v,v}function r(p,f){if(n[f]!==void 0)return n[f];let w=p.arrayBuffers[f],y=new Uint32Array(w).buffer;return n[f]=y,y}let o=t.isInstancedBufferGeometry?new Ra:new ce,a=t.data.index;if(a!==void 0){let p=new qo[a.type](a.array);o.setIndex(new Se(p,1))}let l=t.data.attributes;for(let p in l){let f=l[p],m;if(f.isInterleavedBufferAttribute){let w=s(t.data,f.data);m=new Ln(w,f.itemSize,f.offset,f.normalized)}else{let w=new qo[f.type](f.array),y=f.isInstancedBufferAttribute?ac:Se;m=new y(w,f.itemSize,f.normalized)}f.name!==void 0&&(m.name=f.name),o.setAttribute(p,m)}let c=t.data.morphAttributes;if(c)for(let p in c){let f=c[p],m=[];for(let w=0,y=f.length;w<y;w++){let g=f[w],v;if(g.isInterleavedBufferAttribute){let C=s(t.data,g.data);v=new Ln(C,g.itemSize,g.offset,g.normalized)}else{let C=new qo[g.type](g.array);v=new Se(C,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),m.push(v)}o.morphAttributes[p]=m}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let p=0,f=d.length;p!==f;++p){let m=d[p];o.addGroup(m.start,m.count,m.materialIndex)}let h=t.data.boundingSphere;if(h!==void 0){let p=new L;h.center!==void 0&&p.fromArray(h.center),o.boundingSphere=new Hi(p,h.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}});var qo={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function cc(t){Xe.call(this,t)}cc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:cc,load:function(t,i,n,s){let r=this,o=this.path===""?js.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new Kt(r.manager);a.setPath(this.path),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,i)},n,s)},parse:function(t,i){let n=this.parseShape(t.shapes),s=this.parseGeometries(t.geometries,n),r=this.parseImages(t.images,function(){i!==void 0&&i(l)}),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,s,a);return t.animations&&(l.animations=this.parseAnimations(t.animations)),(t.images===void 0||t.images.length===0)&&i!==void 0&&i(l),l},parseShape:function(t){let i={};if(t!==void 0)for(let n=0,s=t.length;n<s;n++){let r=new En().fromJSON(t[n]);i[r.uuid]=r}return i},parseGeometries:function(t,i){let n={},s;if(t!==void 0){let r=new lc;for(let o=0,a=t.length;o<a;o++){let l,c=t[o];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":l=new Lt[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":l=new Lt[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":l=new Lt[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":l=new Lt[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":l=new Lt[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":l=new Lt[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":l=new Lt[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":l=new Lt[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":l=new Lt[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":l=new Lt[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":l=new Lt[c.type](new ec[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":l=new Lt[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":l=new Lt[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":s=[];for(let d=0,h=c.shapes.length;d<h;d++){let p=i[c.shapes[d]];s.push(p)}l=new Lt[c.type](s,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":s=[];for(let d=0,h=c.shapes.length;d<h;d++){let p=i[c.shapes[d]];s.push(p)}let u=c.options.extrudePath;u!==void 0&&(c.options.extrudePath=new ec[u.type]().fromJSON(u)),l=new Lt[c.type](s,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":l=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}l.uuid=c.uuid,c.name!==void 0&&(l.name=c.name),l.isBufferGeometry===!0&&c.userData!==void 0&&(l.userData=c.userData),n[c.uuid]=l}}return n},parseMaterials:function(t,i){let n={},s={};if(t!==void 0){let r=new oc;r.setTextures(i);for(let o=0,a=t.length;o<a;o++){let l=t[o];if(l.type==="MultiMaterial"){let c=[];for(let u=0;u<l.materials.length;u++){let d=l.materials[u];n[d.uuid]===void 0&&(n[d.uuid]=r.parse(d)),c.push(n[d.uuid])}s[l.uuid]=c}else n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s},parseAnimations:function(t){let i=[];for(let n=0;n<t.length;n++){let s=t[n],r=Gt.parse(s);s.uuid!==void 0&&(r.uuid=s.uuid),i.push(r)}return i},parseImages:function(t,i){let n=this,s={},r;function o(a){return n.manager.itemStart(a),r.load(a,function(){n.manager.itemEnd(a)},void 0,function(){n.manager.itemError(a),n.manager.itemEnd(a)})}if(t!==void 0&&t.length>0){let a=new hd(i);r=new Un(a),r.setCrossOrigin(this.crossOrigin);for(let l=0,c=t.length;l<c;l++){let u=t[l],d=u.url;if(Array.isArray(d)){s[u.uuid]=[];for(let h=0,p=d.length;h<p;h++){let f=d[h],m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;s[u.uuid].push(o(m))}}else{let h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u.url)?u.url:n.resourcePath+u.url;s[u.uuid]=o(h)}}}return s},parseTextures:function(t,i){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let s={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),i[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l;Array.isArray(i[a.image])?l=new rn(i[a.image]):l=new je(i[a.image]),l.needsUpdate=!0,l.uuid=a.uuid,a.name!==void 0&&(l.name=a.name),a.mapping!==void 0&&(l.mapping=n(a.mapping,s0)),a.offset!==void 0&&l.offset.fromArray(a.offset),a.repeat!==void 0&&l.repeat.fromArray(a.repeat),a.center!==void 0&&l.center.fromArray(a.center),a.rotation!==void 0&&(l.rotation=a.rotation),a.wrap!==void 0&&(l.wrapS=n(a.wrap[0],lh),l.wrapT=n(a.wrap[1],lh)),a.format!==void 0&&(l.format=a.format),a.type!==void 0&&(l.type=a.type),a.encoding!==void 0&&(l.encoding=a.encoding),a.minFilter!==void 0&&(l.minFilter=n(a.minFilter,ch)),a.magFilter!==void 0&&(l.magFilter=n(a.magFilter,ch)),a.anisotropy!==void 0&&(l.anisotropy=a.anisotropy),a.flipY!==void 0&&(l.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(l.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(l.unpackAlignment=a.unpackAlignment),s[a.uuid]=l}return s},parseObject:function(t,i,n){let s;function r(c){return i[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",c),i[c]}function o(c){if(c!==void 0){if(Array.isArray(c)){let u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),u.push(n[p])}return u}return n[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",c),n[c]}}let a,l;switch(t.type){case"Scene":s=new sn,t.background!==void 0&&Number.isInteger(t.background)&&(s.background=new te(t.background)),t.fog!==void 0&&(t.fog.type==="Fog"?s.fog=new Nl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(s.fog=new wr(t.fog.color,t.fog.density)));break;case"PerspectiveCamera":s=new nt(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(s.focus=t.focus),t.zoom!==void 0&&(s.zoom=t.zoom),t.filmGauge!==void 0&&(s.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(s.filmOffset=t.filmOffset),t.view!==void 0&&(s.view=Object.assign({},t.view));break;case"OrthographicCamera":s=new ci(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(s.zoom=t.zoom),t.view!==void 0&&(s.view=Object.assign({},t.view));break;case"AmbientLight":s=new Fn(t.color,t.intensity);break;case"DirectionalLight":s=new On(t.color,t.intensity);break;case"PointLight":s=new ks(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":s=new rc(t.color,t.intensity,t.width,t.height);break;case"SpotLight":s=new Vr(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":s=new tc(t.color,t.groundColor,t.intensity);break;case"LightProbe":s=new oi().fromJSON(t);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":a=r(t.geometry),l=o(t.material),s=new Ve(a,l);break;case"InstancedMesh":a=r(t.geometry),l=o(t.material);let c=t.count,u=t.instanceMatrix;s=new ws(a,l,c),s.instanceMatrix=new Se(new Float32Array(u.array),16);break;case"LOD":s=new ua;break;case"Line":s=new Ot(r(t.geometry),o(t.material),t.mode);break;case"LineLoop":s=new zl(r(t.geometry),o(t.material));break;case"LineSegments":s=new gt(r(t.geometry),o(t.material));break;case"PointCloud":case"Points":s=new Er(r(t.geometry),o(t.material));break;case"Sprite":s=new Vl(o(t.material));break;case"Group":s=new Rt;break;default:s=new re}if(s.uuid=t.uuid,t.name!==void 0&&(s.name=t.name),t.matrix!==void 0?(s.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=t.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(t.position!==void 0&&s.position.fromArray(t.position),t.rotation!==void 0&&s.rotation.fromArray(t.rotation),t.quaternion!==void 0&&s.quaternion.fromArray(t.quaternion),t.scale!==void 0&&s.scale.fromArray(t.scale)),t.castShadow!==void 0&&(s.castShadow=t.castShadow),t.receiveShadow!==void 0&&(s.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(s.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(s.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(s.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(s.visible=t.visible),t.frustumCulled!==void 0&&(s.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(s.renderOrder=t.renderOrder),t.userData!==void 0&&(s.userData=t.userData),t.layers!==void 0&&(s.layers.mask=t.layers),t.children!==void 0){let c=t.children;for(let u=0;u<c.length;u++)s.add(this.parseObject(c[u],i,n))}if(t.type==="LOD"){t.autoUpdate!==void 0&&(s.autoUpdate=t.autoUpdate);let c=t.levels;for(let u=0;u<c.length;u++){let d=c[u],h=s.getObjectByProperty("uuid",d.object);h!==void 0&&s.addLevel(h,d.distance)}}return s}});var s0={UVMapping:xc,CubeReflectionMapping:yc,CubeRefractionMapping:bc,EquirectangularReflectionMapping:ka,EquirectangularRefractionMapping:wc,CubeUVReflectionMapping:Yr,CubeUVRefractionMapping:_c},lh={RepeatWrapping:Bt,ClampToEdgeWrapping:Tt,MirroredRepeatWrapping:sa},ch={NearestFilter:st,NearestMipmapNearestFilter:pr,NearestMipmapLinearFilter:Rl,LinearFilter:Ge,LinearMipmapNearestFilter:Gh,LinearMipmapLinearFilter:Ha};function uh(t){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Xe.call(this,t),this.options={premultiplyAlpha:"none"}}uh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:uh,isImageBitmapLoader:!0,setOptions:function(i){return this.options=i,this},load:function(t,i,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fs.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){i&&i(o),r.manager.itemEnd(t)},0),o;fetch(t).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){Fs.add(t,a),i&&i(a),r.manager.itemEnd(t)}).catch(function(a){s&&s(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function dd(){this.type="ShapePath",this.color=new te,this.subPaths=[],this.currentPath=null}Object.assign(dd.prototype,{moveTo:function(t,i){return this.currentPath=new mi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,i),this},lineTo:function(t,i){return this.currentPath.lineTo(t,i),this},quadraticCurveTo:function(t,i,n,s){return this.currentPath.quadraticCurveTo(t,i,n,s),this},bezierCurveTo:function(t,i,n,s,r,o){return this.currentPath.bezierCurveTo(t,i,n,s,r,o),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,i){function n(g){let v=[];for(let C=0,E=g.length;C<E;C++){let A=g[C],R=new En;R.curves=A.curves,v.push(R)}return v}function s(g,v){let C=v.length,E=!1;for(let A=C-1,R=0;R<C;A=R++){let O=v[A],V=v[R],k=V.x-O.x,b=V.y-O.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(O=v[R],k=-k,V=v[A],b=-b),g.y<O.y||g.y>V.y)continue;if(g.y===O.y){if(g.x===O.x)return!0}else{let _=b*(g.x-O.x)-k*(g.y-O.y);if(_===0)return!0;if(_<0)continue;E=!E}}else{if(g.y!==O.y)continue;if(V.x<=g.x&&g.x<=O.x||O.x<=g.x&&g.x<=V.x)return!0}}return E}let r=$i.isClockWise,o=this.subPaths;if(o.length===0)return[];if(i===!0)return n(o);let a,l,c,u=[];if(o.length===1)return l=o[0],c=new En,c.curves=l.curves,u.push(c),u;let d=!r(o[0].getPoints());d=t?!d:d;let h=[],p=[],f=[],m=0,w;p[m]=void 0,f[m]=[];for(let g=0,v=o.length;g<v;g++)l=o[g],w=l.getPoints(),a=r(w),a=t?!a:a,a?(!d&&p[m]&&m++,p[m]={s:new En,p:w},p[m].s.curves=l.curves,d&&m++,f[m]=[]):f[m].push({h:l,p:w[0]});if(!p[0])return n(o);if(p.length>1){let g=!1,v=[];for(let C=0,E=p.length;C<E;C++)h[C]=[];for(let C=0,E=p.length;C<E;C++){let A=f[C];for(let R=0;R<A.length;R++){let O=A[R],V=!0;for(let k=0;k<p.length;k++)s(O.p,p[k].p)&&(C!==k&&v.push({froms:C,tos:k,hole:R}),V?(V=!1,h[k].push(O)):g=!0);V&&h[C].push(O)}}v.length>0&&(g||(f=h))}let y;for(let g=0,v=p.length;g<v;g++){c=p[g].s,u.push(c),y=f[g];for(let C=0,E=y.length;C<E;C++)c.holes.push(y[C].h)}return u}});function fd(t){this.type="Font",this.data=t}Object.assign(fd.prototype,{isFont:!0,generateShapes:function(t,i){i===void 0&&(i=100);let n=[],s=r0(t,i,this.data);for(let r=0,o=s.length;r<o;r++)Array.prototype.push.apply(n,s[r].toShapes());return n}});function r0(t,i,n){let s=Array.from?Array.from(t):String(t).split(""),r=i/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,a=[],l=0,c=0;for(let u=0;u<s.length;u++){let d=s[u];if(d===`
`)l=0,c-=o;else{let h=o0(d,r,l,c,n);l+=h.offsetX,a.push(h.path)}}return a}function o0(t,i,n,s,r){let o=r.glyphs[t]||r.glyphs["?"];if(!o){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}let a=new dd,l,c,u,d,h,p,f,m;if(o.o){let w=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let y=0,g=w.length;y<g;)switch(w[y++]){case"m":l=w[y++]*i+n,c=w[y++]*i+s,a.moveTo(l,c);break;case"l":l=w[y++]*i+n,c=w[y++]*i+s,a.lineTo(l,c);break;case"q":u=w[y++]*i+n,d=w[y++]*i+s,h=w[y++]*i+n,p=w[y++]*i+s,a.quadraticCurveTo(h,p,u,d);break;case"b":u=w[y++]*i+n,d=w[y++]*i+s,h=w[y++]*i+n,p=w[y++]*i+s,f=w[y++]*i+n,m=w[y++]*i+s,a.bezierCurveTo(h,p,f,m,u,d);break}}return{offsetX:o.ha*i,path:a}}function hh(t){Xe.call(this,t)}hh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:hh,load:function(t,i,n,s){let r=this,o=new Kt(this.manager);o.setPath(this.path),o.load(t,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}let c=r.parse(l);i&&i(c)},n,s)},parse:function(t){return new fd(t)}});var Yo,pd={getContext:function(){return Yo===void 0&&(Yo=new(window.AudioContext||window.webkitAudioContext)),Yo},setContext:function(t){Yo=t}};function uc(t){Xe.call(this,t)}uc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:uc,load:function(t,i,n,s){let r=this,o=new Kt(r.manager);o.setResponseType("arraybuffer"),o.setPath(r.path),o.load(t,function(a){try{let l=a.slice(0);pd.getContext().decodeAudioData(l,function(u){i(u)})}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}});function dh(t,i,n){oi.call(this,void 0,n);let s=new te().set(t),r=new te().set(i),o=new L(s.r,s.g,s.b),a=new L(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}dh.prototype=Object.assign(Object.create(oi.prototype),{constructor:dh,isHemisphereLightProbe:!0,copy:function(t){return oi.prototype.copy.call(this,t),this},toJSON:function(t){return oi.prototype.toJSON.call(this,t)}});function fh(t,i){oi.call(this,void 0,i);let n=new te().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}fh.prototype=Object.assign(Object.create(oi.prototype),{constructor:fh,isAmbientLightProbe:!0,copy:function(t){return oi.prototype.copy.call(this,t),this},toJSON:function(t){return oi.prototype.toJSON.call(this,t)}});var ph=new de,mh=new de;function a0(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(a0.prototype,{update:function(t){let i=this._cache;if(i.focus!==t.focus||i.fov!==t.fov||i.aspect!==t.aspect*this.aspect||i.near!==t.near||i.far!==t.far||i.zoom!==t.zoom||i.eyeSep!==this.eyeSep){i.focus=t.focus,i.fov=t.fov,i.aspect=t.aspect*this.aspect,i.near=t.near,i.far=t.far,i.zoom=t.zoom,i.eyeSep=this.eyeSep;let s=t.projectionMatrix.clone(),r=i.eyeSep/2,o=r*i.near/i.focus,a=i.near*Math.tan(be.DEG2RAD*i.fov*.5)/i.zoom,l,c;mh.elements[12]=-r,ph.elements[12]=r,l=-a*i.aspect+o,c=a*i.aspect+o,s.elements[0]=2*i.near/(c-l),s.elements[8]=(c+l)/(c-l),this.cameraL.projectionMatrix.copy(s),l=-a*i.aspect-o,c=a*i.aspect-o,s.elements[0]=2*i.near/(c-l),s.elements[8]=(c+l)/(c-l),this.cameraR.projectionMatrix.copy(s)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(mh),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ph)}});function Xs(t){this.autoStart=t!==void 0?t:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Xs.prototype,{start:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let i=(typeof performance>"u"?Date:performance).now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}});var bn=new L,gh=new Ue,l0=new L,wn=new L;function vh(){re.call(this),this.type="AudioListener",this.context=pd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Xs}vh.prototype=Object.assign(Object.create(re.prototype),{constructor:vh,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},updateMatrixWorld:function(t){re.prototype.updateMatrixWorld.call(this,t);let i=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(bn,gh,l0),wn.set(0,0,-1).applyQuaternion(gh),i.positionX){let s=this.context.currentTime+this.timeDelta;i.positionX.linearRampToValueAtTime(bn.x,s),i.positionY.linearRampToValueAtTime(bn.y,s),i.positionZ.linearRampToValueAtTime(bn.z,s),i.forwardX.linearRampToValueAtTime(wn.x,s),i.forwardY.linearRampToValueAtTime(wn.y,s),i.forwardZ.linearRampToValueAtTime(wn.z,s),i.upX.linearRampToValueAtTime(n.x,s),i.upY.linearRampToValueAtTime(n.y,s),i.upZ.linearRampToValueAtTime(n.z,s)}else i.setPosition(bn.x,bn.y,bn.z),i.setOrientation(wn.x,wn.y,wn.z,n.x,n.y,n.z)}});function zr(t){re.call(this),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}zr.prototype=Object.assign(Object.create(re.prototype),{constructor:zr,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},setMediaElementSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this},setMediaStreamSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(t){if(t===void 0&&(t=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let i=this.context.createBufferSource();return i.buffer=this.buffer,i.loop=this.loop,i.loopStart=this.loopStart,i.loopEnd=this.loopEnd,i.onended=this.onEnded.bind(this),i.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=i,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,i=this.filters.length;t<i;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,i=this.filters.length;t<i;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),this.isPlaying===!0?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},setDetune:function(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(t){return this.loopStart=t,this},setLoopEnd:function(t){return this.loopEnd=t,this},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}});var _n=new L,xh=new Ue,c0=new L,Mn=new L;function yh(t){zr.call(this,t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}yh.prototype=Object.assign(Object.create(zr.prototype),{constructor:yh,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){return this.panner.refDistance=t,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){return this.panner.rolloffFactor=t,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){return this.panner.distanceModel=t,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){return this.panner.maxDistance=t,this},setDirectionalCone:function(t,i,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=i,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(t){if(re.prototype.updateMatrixWorld.call(this,t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_n,xh,c0),Mn.set(0,0,1).applyQuaternion(xh);let i=this.panner;if(i.positionX){let n=this.context.currentTime+this.listener.timeDelta;i.positionX.linearRampToValueAtTime(_n.x,n),i.positionY.linearRampToValueAtTime(_n.y,n),i.positionZ.linearRampToValueAtTime(_n.z,n),i.orientationX.linearRampToValueAtTime(Mn.x,n),i.orientationY.linearRampToValueAtTime(Mn.y,n),i.orientationZ.linearRampToValueAtTime(Mn.z,n)}else i.setPosition(_n.x,_n.y,_n.z),i.setOrientation(Mn.x,Mn.y,Mn.z)}});function md(t,i){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=i!==void 0?i:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}Object.assign(md.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let t=0,i=this.getFrequencyData();for(let n=0;n<i.length;n++)t+=i[n];return t/i.length}});function gd(t,i,n){this.binding=t,this.valueSize=n;let s,r,o;switch(i){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(gd.prototype,{accumulate:function(t,i){let n=this.buffer,s=this.valueSize,r=t*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=i}else{o+=i;let a=i/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o},accumulateAdditive:function(t){let i=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(i,s,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){let i=this.valueSize,n=this.buffer,s=t*i+i,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=i*this._origIndex;this._mixBufferRegion(n,s,l,1-r,i)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*i,1,i);for(let l=i,c=i+i;l!==c;++l)if(n[l]!==n[l+i]){a.setValue(n,s);break}},saveOriginalState:function(){let t=this.binding,i=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(i,s);for(let r=n,o=s;r!==o;++r)i[r]=i[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){let t=this._addIndex*this.valueSize,i=t+this.valueSize;for(let n=t;n<i;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){let t=this._origIndex*this.valueSize,i=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[i+n]=this.buffer[t+n]},_select:function(t,i,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[i+o]=t[n+o]},_slerp:function(t,i,n,s){Ue.slerpFlat(t,i,t,i,t,n,s)},_slerpAdditive:function(t,i,n,s,r){let o=this._workIndex*r;Ue.multiplyQuaternionsFlat(t,o,t,i,t,n),Ue.slerpFlat(t,i,t,i,t,o,s)},_lerp:function(t,i,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=i+a;t[l]=t[l]*o+t[n+a]*s}},_lerpAdditive:function(t,i,n,s,r){for(let o=0;o!==r;++o){let a=i+o;t[a]=t[a]+t[n+o]*s}}});var Dc="\\[\\]\\.:\\/",u0=new RegExp("["+Dc+"]","g"),Ic="[^"+Dc+"]",h0="[^"+Dc.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",Ic),f0=/(WCOD+)?/.source.replace("WCOD",h0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),g0=new RegExp("^"+d0+f0+p0+m0+"$"),v0=["material","materials","bones"];function vd(t,i,n){let s=n||mt.parseTrackName(i);this._targetGroup=t,this._bindings=t.subscribe_(i,s)}Object.assign(vd.prototype,{getValue:function(t,i){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,i)},setValue:function(t,i){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,i)},bind:function(){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].bind()},unbind:function(){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].unbind()}});function mt(t,i,n){this.path=i,this.parsedPath=n||mt.parseTrackName(i),this.node=mt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(mt,{Composite:vd,create:function(t,i,n){return t&&t.isAnimationObjectGroup?new mt.Composite(t,i,n):new mt(t,i,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(u0,"")},parseTrackName:function(t){let i=g0.exec(t);if(!i)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,i){if(!i||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===i||a.uuid===i)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}});Object.assign(mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(i,n){i[n]=this.node[this.propertyName]},function(i,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)i[n++]=s[r]},function(i,n){i[n]=this.resolvedProperty[this.propertyIndex]},function(i,n){this.resolvedProperty.toArray(i,n)}],SetterByBindingTypeAndVersioning:[[function(i,n){this.targetObject[this.propertyName]=i[n]},function(i,n){this.targetObject[this.propertyName]=i[n],this.targetObject.needsUpdate=!0},function(i,n){this.targetObject[this.propertyName]=i[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(i,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=i[n++]},function(i,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=i[n++];this.targetObject.needsUpdate=!0},function(i,n){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=i[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(i,n){this.resolvedProperty[this.propertyIndex]=i[n]},function(i,n){this.resolvedProperty[this.propertyIndex]=i[n],this.targetObject.needsUpdate=!0},function(i,n){this.resolvedProperty[this.propertyIndex]=i[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(i,n){this.resolvedProperty.fromArray(i,n)},function(i,n){this.resolvedProperty.fromArray(i,n),this.targetObject.needsUpdate=!0},function(i,n){this.resolvedProperty.fromArray(i,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(i,n){this.bind(),this.getValue(i,n)},setValue:function(i,n){this.bind(),this.setValue(i,n)},bind:function(){let t=this.node,i=this.parsedPath,n=i.objectName,s=i.propertyName,r=i.propertyIndex;if(t||(t=mt.findNode(this.rootNode,i.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(mt.prototype,{_getValue_unbound:mt.prototype.getValue,_setValue_unbound:mt.prototype.setValue});function x0(){this.uuid=be.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,s=arguments.length;n!==s;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let i=this;this.stats={objects:{get total(){return i._objects.length},get inUse(){return this.total-i.nCachedObjects_}},get bindingsPerObject(){return i._bindings.length}}}Object.assign(x0.prototype,{isAnimationObjectGroup:!0,add:function(){let t=this._objects,i=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){let h=arguments[u],p=h.uuid,f=i[p];if(f===void 0){f=l++,i[p]=f,t.push(h);for(let m=0,w=o;m!==w;++m)r[m].push(new mt(h,n[m],s[m]))}else if(f<c){a=t[f];let m=--c,w=t[m];i[w.uuid]=f,t[f]=w,i[p]=m,t[m]=h;for(let y=0,g=o;y!==g;++y){let v=r[y],C=v[m],E=v[f];v[f]=C,E===void 0&&(E=new mt(h,n[y],s[y])),v[m]=E}}else t[f]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let t=this._objects,i=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=i[c];if(u!==void 0&&u>=r){let d=r++,h=t[d];i[h.uuid]=u,t[u]=h,i[c]=d,t[d]=l;for(let p=0,f=s;p!==f;++p){let m=n[p],w=m[d],y=m[u];m[u]=w,m[d]=y}}}this.nCachedObjects_=r},uncache:function(){let t=this._objects,i=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,d=i[u];if(d!==void 0)if(delete i[u],d<r){let h=--r,p=t[h],f=--o,m=t[f];i[p.uuid]=d,t[d]=p,i[m.uuid]=h,t[h]=m,t.pop();for(let w=0,y=s;w!==y;++w){let g=n[w],v=g[h],C=g[f];g[d]=v,g[h]=C,g.pop()}}else{let h=--o,p=t[h];i[p.uuid]=d,t[d]=p,t.pop();for(let f=0,m=s;f!==m;++f){let w=n[f];w[d]=w[h],w.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,i){let n=this._bindingsIndicesByPath,s=n[t],r=this._bindings;if(s!==void 0)return r[s];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);s=r.length,n[t]=s,o.push(t),a.push(i),r.push(d);for(let h=u,p=l.length;h!==p;++h){let f=l[h];d[h]=new mt(f,t,i)}return d},unsubscribe_:function(t){let i=this._bindingsIndicesByPath,n=i[t];if(n!==void 0){let s=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=t[a];i[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),s[n]=s[a],s.pop()}}});function xd(t,i,n,s){this._mixer=t,this._clip=i,this._localRoot=n||null,this.blendMode=s||i.blendMode;let r=i.tracks,o=r.length,a=new Array(o),l={endingStart:vs,endingEnd:vs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=um,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(xd.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(t){return this._startTime=t,this},setLoop:function(t,i){return this.loop=t,this.repetitions=i,this},setEffectiveWeight:function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(t){return this._scheduleFading(t,0,1)},fadeOut:function(t){return this._scheduleFading(t,1,0)},crossFadeFrom:function(t,i,n){if(t.fadeOut(i),this.fadeIn(i),n){let s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,i),this.warp(a,1,i)}return this},crossFadeTo:function(t,i,n){return t.crossFadeFrom(this,i,n)},stopFading:function(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},setEffectiveTimeScale:function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},syncWith:function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},halt:function(t){return this.warp(this._effectiveTimeScale,0,t)},warp:function(t,i,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=i/o,this},stopWarping:function(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(t,i,n,s){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;if(l<0||n===0)return;this._startTime=null,i=n*l}i*=this._updateTimeScale(t);let o=this._updateTime(i),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nh:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Cc:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}},_updateWeight:function(t){let i=0;if(this.enabled){i=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(t)[0];i*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=i,i},_updateTimeScale:function(t){let i=0;if(!this.paused){i=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(t)[0];i*=s,t>n.parameterPositions[1]&&(this.stopWarping(),i===0?this.paused=!0:this.timeScale=i)}}return this._effectiveTimeScale=i,i},_updateTime:function(t){let i=this._clip.duration,n=this.loop,s=this.time+t,r=this._loopCount,o=n===hm;if(t===0)return r===-1?s:o&&(r&1)===1?i-s:s;if(n===cm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=i)s=i;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=i||s<0){let a=Math.floor(s/i);s-=i*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?i:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return i-s}return s},_setEndings:function(t,i,n){let s=this._interpolantSettings;n?(s.endingStart=as,s.endingEnd=as):(t?s.endingStart=this.zeroSlopeAtStart?as:vs:s.endingStart=oa,i?s.endingEnd=this.zeroSlopeAtEnd?as:vs:s.endingEnd=oa)},_scheduleFading:function(t,i,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=i,a[1]=r+t,l[1]=n,this}});function Da(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Da.prototype=Object.assign(Object.create(ki.prototype),{constructor:Da,_bindAction:function(t,i){let n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){let h=s[d],p=h.name,f=u[p];if(f!==void 0)o[d]=f;else{if(f=o[d],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let m=i&&i._propertyBindings[d].binding.parsedPath;f=new gd(mt.create(n,p,m),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),o[d]=f}a[d].resultBuffer=f.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}let i=t._propertyBindings;for(let n=0,s=i.length;n!==s;++n){let r=i[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){let i=t._propertyBindings;for(let n=0,s=i.length;n!==s;++n){let r=i[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){let i=t._cacheIndex;return i!==null&&i<this._nActiveActions},_addInactiveAction:function(t,i,n){let s=this._actions,r=this._actionsByClip,o=r[i];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[i]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t},_removeInactiveAction:function(t){let i=this._actions,n=i[i.length-1],s=t._cacheIndex;n._cacheIndex=s,i[s]=n,i.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;let d=a.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){let i=t._propertyBindings;for(let n=0,s=i.length;n!==s;++n){let r=i[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){let i=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=i[s];t._cacheIndex=s,i[s]=t,r._cacheIndex=n,i[n]=r},_takeBackAction:function(t){let i=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=i[s];t._cacheIndex=s,i[s]=t,r._cacheIndex=n,i[n]=r},_addInactiveBinding:function(t,i,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[i];o===void 0&&(o={},s[i]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){let i=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=i[i.length-1],c=t._cacheIndex;l._cacheIndex=c,i[c]=l,i.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]},_lendBinding:function(t){let i=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=i[s];t._cacheIndex=s,i[s]=t,r._cacheIndex=n,i[n]=r},_takeBackBinding:function(t){let i=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=i[s];t._cacheIndex=s,i[s]=t,r._cacheIndex=n,i[n]=r},_lendControlInterpolant:function(){let t=this._controlInterpolants,i=this._nActiveControlInterpolants++,n=t[i];return n===void 0&&(n=new La(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=i,t[i]=n),n},_takeBackControlInterpolant:function(t){let i=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=i[s];t.__cacheIndex=s,i[s]=t,r.__cacheIndex=n,i[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,i,n){let s=i||this._root,r=s.uuid,o=typeof t=="string"?Gt.findByName(s,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Cc),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new xd(this,o,i,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u},existingAction:function(t,i){let n=i||this._root,s=n.uuid,r=typeof t=="string"?Gt.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null},stopAllAction:function(){let t=this._actions,i=this._nActiveActions;for(let n=i-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;let i=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)i[c]._update(s,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this},setTime:function(t){this.time=0;for(let i=0;i<this._actions.length;i++)this._actions[i].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){let i=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,d=i[i.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,i[u]=d,i.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}},uncacheRoot:function(t){let i=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[i];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[i];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}},uncacheAction:function(t,i){let n=this.existingAction(t,i);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function hc(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}hc.prototype.clone=function(){return new hc(this.value.clone===void 0?this.value:this.value.clone())};function bh(t,i,n){Xt.call(this,t,i),this.meshPerAttribute=n||1}bh.prototype=Object.assign(Object.create(Xt.prototype),{constructor:bh,isInstancedInterleavedBuffer:!0,copy:function(t){return Xt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){let i=Xt.prototype.clone.call(this,t);return i.meshPerAttribute=this.meshPerAttribute,i},toJSON:function(t){let i=Xt.prototype.toJSON.call(this,t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}});function Va(t,i,n,s){this.ray=new Ns(t,i),this.near=n||0,this.far=s||1/0,this.camera=null,this.layers=new Ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function wh(t,i){return t.distance-i.distance}function dc(t,i,n,s){if(t.layers.test(i.layers)&&t.raycast(i,n),s===!0){let r=t.children;for(let o=0,a=r.length;o<a;o++)dc(r[o],i,n,!0)}}Object.assign(Va.prototype,{set:function(t,i){this.ray.set(t,i)},setFromCamera:function(t,i){i&&i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i&&i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,i,n){let s=n||[];return dc(t,this,s,i),s.sort(wh),s},intersectObjects:function(t,i,n){let s=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),s;for(let r=0,o=t.length;r<o;r++)dc(t[r],this,s,i);return s.sort(wh),s}});function y0(t,i,n){return this.radius=t!==void 0?t:1,this.phi=i!==void 0?i:0,this.theta=n!==void 0?n:0,this}Object.assign(y0.prototype,{set:function(t,i,n){return this.radius=t,this.phi=i,this.theta=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,i,n){return this.radius=Math.sqrt(t*t+i*i+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be.clamp(i/this.radius,-1,1))),this}});function b0(t,i,n){return this.radius=t!==void 0?t:1,this.theta=i!==void 0?i:0,this.y=n!==void 0?n:0,this}Object.assign(b0.prototype,{set:function(t,i,n){return this.radius=t,this.theta=i,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,i,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=i,this}});var _h=new z;function yd(t,i){this.min=t!==void 0?t:new z(1/0,1/0),this.max=i!==void 0?i:new z(-1/0,-1/0)}Object.assign(yd.prototype,{set:function(t,i){return this.min.copy(t),this.max.copy(i),this},setFromPoints:function(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i++)this.expandByPoint(t[i]);return this},setFromCenterAndSize:function(t,i){let n=_h.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new z),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new z),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},getParameter:function(t,i){return i===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),i=new z),i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},clampPoint:function(t,i){return i===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),i=new z),i.copy(t).clamp(this.min,this.max)},distanceToPoint:function(t){return _h.copy(t).clamp(this.min,this.max).sub(t).length()},intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});var Mh=new L,Qo=new L;function bd(t,i){this.start=t!==void 0?t:new L,this.end=i!==void 0?i:new L}Object.assign(bd.prototype,{set:function(t,i){return this.start.copy(t),this.end.copy(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.start.copy(t.start),this.end.copy(t.end),this},getCenter:function(t){return t===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new L),t.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(t){return t===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),t=new L),t.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(t,i){return i===void 0&&(console.warn("THREE.Line3: .at() target is now required"),i=new L),this.delta(i).multiplyScalar(t).add(this.start)},closestPointToPointParameter:function(t,i){Mh.subVectors(t,this.start),Qo.subVectors(this.end,this.start);let n=Qo.dot(Qo),r=Qo.dot(Mh)/n;return i&&(r=be.clamp(r,0,1)),r},closestPointToPoint:function(t,i,n){let s=this.closestPointToPointParameter(t,i);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new L),this.delta(n).multiplyScalar(s).add(this.start)},applyMatrix4:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},equals:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}});function Ia(t){re.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Ia.prototype=Object.create(re.prototype);Ia.prototype.constructor=Ia;Ia.prototype.isImmediateRenderObject=!0;var Sh=new L;function Wr(t,i){re.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;let n=new ce,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,u=a/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new se(s,3));let r=new ot({fog:!1,toneMapped:!1});this.cone=new gt(n,r),this.add(this.cone),this.update()}Wr.prototype=Object.create(re.prototype);Wr.prototype.constructor=Wr;Wr.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};Wr.prototype.update=function(){this.light.updateMatrixWorld();let t=this.light.distance?this.light.distance:1e3,i=t*Math.tan(this.light.angle);this.cone.scale.set(i,i,t),Sh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Sh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var Qi=new L,Zo=new de,Tl=new de;function wd(t){let i=[];t&&t.isBone&&i.push(t);for(let n=0;n<t.children.length;n++)i.push.apply(i,wd(t.children[n]));return i}function Hs(t){let i=wd(t),n=new ce,s=[],r=[],o=new te(0,0,1),a=new te(0,1,0);for(let c=0;c<i.length;c++){let u=i[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new se(s,3)),n.setAttribute("color",new se(r,3));let l=new ot({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});gt.call(this,n,l),this.type="SkeletonHelper",this.root=t,this.bones=i,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}Hs.prototype=Object.create(gt.prototype);Hs.prototype.constructor=Hs;Hs.prototype.isSkeletonHelper=!0;Hs.prototype.updateMatrixWorld=function(t){let i=this.bones,n=this.geometry,s=n.getAttribute("position");Tl.getInverse(this.root.matrixWorld);for(let r=0,o=0;r<i.length;r++){let a=i[r];a.parent&&a.parent.isBone&&(Zo.multiplyMatrices(Tl,a.matrixWorld),Qi.setFromMatrixPosition(Zo),s.setXYZ(o,Qi.x,Qi.y,Qi.z),Zo.multiplyMatrices(Tl,a.parent.matrixWorld),Qi.setFromMatrixPosition(Zo),s.setXYZ(o+1,Qi.x,Qi.y,Qi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,re.prototype.updateMatrixWorld.call(this,t)};function jr(t,i,n){this.light=t,this.light.updateMatrixWorld(),this.color=n;let s=new Ts(i,4,2),r=new _t({wireframe:!0,fog:!1,toneMapped:!1});Ve.call(this,s,r),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}jr.prototype=Object.create(Ve.prototype);jr.prototype.constructor=jr;jr.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};jr.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};var w0=new L,Eh=new te,Th=new te;function Xr(t,i,n){re.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;let s=new Ms(i);s.rotateY(Math.PI*.5),this.material=new _t({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),o=new Float32Array(r.count*3);s.setAttribute("color",new Se(o,3)),this.add(new Ve(s,this.material)),this.update()}Xr.prototype=Object.create(re.prototype);Xr.prototype.constructor=Xr;Xr.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};Xr.prototype.update=function(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let i=t.geometry.getAttribute("color");Eh.copy(this.light.color),Th.copy(this.light.groundColor);for(let n=0,s=i.count;n<s;n++){let r=n<s/2?Eh:Th;i.setXYZ(n,r.r,r.g,r.b)}i.needsUpdate=!0}t.lookAt(w0.setFromMatrixPosition(this.light.matrixWorld).negate())};function fc(t,i,n,s){t=t||10,i=i||10,n=new te(n!==void 0?n:4473924),s=new te(s!==void 0?s:8947848);let r=i/2,o=t/i,a=t/2,l=[],c=[];for(let h=0,p=0,f=-a;h<=i;h++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);let m=h===r?n:s;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}let u=new ce;u.setAttribute("position",new se(l,3)),u.setAttribute("color",new se(c,3));let d=new ot({vertexColors:!0,toneMapped:!1});gt.call(this,u,d),this.type="GridHelper"}fc.prototype=Object.assign(Object.create(gt.prototype),{constructor:fc,copy:function(t){return gt.prototype.copy.call(this,t),this.geometry.copy(t.geometry),this.material.copy(t.material),this},clone:function(){return new this.constructor().copy(this)}});function pc(t,i,n,s,r,o){t=t||10,i=i||16,n=n||8,s=s||64,r=new te(r!==void 0?r:4473924),o=new te(o!==void 0?o:8947848);let a=[],l=[];for(let d=0;d<=i;d++){let h=d/i*(Math.PI*2),p=Math.sin(h)*t,f=Math.cos(h)*t;a.push(0,0,0),a.push(p,0,f);let m=d&1?r:o;l.push(m.r,m.g,m.b),l.push(m.r,m.g,m.b)}for(let d=0;d<=n;d++){let h=d&1?r:o,p=t-t/n*d;for(let f=0;f<s;f++){let m=f/s*(Math.PI*2),w=Math.sin(m)*p,y=Math.cos(m)*p;a.push(w,0,y),l.push(h.r,h.g,h.b),m=(f+1)/s*(Math.PI*2),w=Math.sin(m)*p,y=Math.cos(m)*p,a.push(w,0,y),l.push(h.r,h.g,h.b)}}let c=new ce;c.setAttribute("position",new se(a,3)),c.setAttribute("color",new se(l,3));let u=new ot({vertexColors:!0,toneMapped:!1});gt.call(this,c,u),this.type="PolarGridHelper"}pc.prototype=Object.create(gt.prototype);pc.prototype.constructor=pc;var Ch=new L,Ko=new L,Ph=new L;function qr(t,i,n){re.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,i===void 0&&(i=1);let s=new ce;s.setAttribute("position",new se([-i,i,0,i,i,0,i,-i,0,-i,-i,0,-i,i,0],3));let r=new ot({fog:!1,toneMapped:!1});this.lightPlane=new Ot(s,r),this.add(this.lightPlane),s=new ce,s.setAttribute("position",new se([0,0,0,0,0,1],3)),this.targetLine=new Ot(s,r),this.add(this.targetLine),this.update()}qr.prototype=Object.create(re.prototype);qr.prototype.constructor=qr;qr.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};qr.prototype.update=function(){Ch.setFromMatrixPosition(this.light.matrixWorld),Ko.setFromMatrixPosition(this.light.target.matrixWorld),Ph.subVectors(Ko,Ch),this.lightPlane.lookAt(Ko),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ko),this.targetLine.scale.z=Ph.length()};var Jo=new L,ct=new Di;function Ba(t){let i=new ce,n=new ot({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={},a=new te(16755200),l=new te(16711680),c=new te(43775),u=new te(16777215),d=new te(3355443);h("n1","n2",a),h("n2","n4",a),h("n4","n3",a),h("n3","n1",a),h("f1","f2",a),h("f2","f4",a),h("f4","f3",a),h("f3","f1",a),h("n1","f1",a),h("n2","f2",a),h("n3","f3",a),h("n4","f4",a),h("p","n1",l),h("p","n2",l),h("p","n3",l),h("p","n4",l),h("u1","u2",c),h("u2","u3",c),h("u3","u1",c),h("c","t",u),h("p","c",d),h("cn1","cn2",d),h("cn3","cn4",d),h("cf1","cf2",d),h("cf3","cf4",d);function h(f,m,w){p(f,w),p(m,w)}function p(f,m){s.push(0,0,0),r.push(m.r,m.g,m.b),o[f]===void 0&&(o[f]=[]),o[f].push(s.length/3-1)}i.setAttribute("position",new se(s,3)),i.setAttribute("color",new se(r,3)),gt.call(this,i,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}Ba.prototype=Object.create(gt.prototype);Ba.prototype.constructor=Ba;Ba.prototype.update=function(){let t=this.geometry,i=this.pointMap,n=1,s=1;ct.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),dt("c",i,t,ct,0,0,-1),dt("t",i,t,ct,0,0,1),dt("n1",i,t,ct,-n,-s,-1),dt("n2",i,t,ct,n,-s,-1),dt("n3",i,t,ct,-n,s,-1),dt("n4",i,t,ct,n,s,-1),dt("f1",i,t,ct,-n,-s,1),dt("f2",i,t,ct,n,-s,1),dt("f3",i,t,ct,-n,s,1),dt("f4",i,t,ct,n,s,1),dt("u1",i,t,ct,n*.7,s*1.1,-1),dt("u2",i,t,ct,-n*.7,s*1.1,-1),dt("u3",i,t,ct,0,s*2,-1),dt("cf1",i,t,ct,-n,0,1),dt("cf2",i,t,ct,n,0,1),dt("cf3",i,t,ct,0,-s,1),dt("cf4",i,t,ct,0,s,1),dt("cn1",i,t,ct,-n,0,-1),dt("cn2",i,t,ct,n,0,-1),dt("cn3",i,t,ct,0,-s,-1),dt("cn4",i,t,ct,0,s,-1),t.getAttribute("position").needsUpdate=!0};function dt(t,i,n,s,r,o,a){Jo.set(r,o,a).unproject(s);let l=i[t];if(l!==void 0){let c=n.getAttribute("position");for(let u=0,d=l.length;u<d;u++)c.setXYZ(l[u],Jo.x,Jo.y,Jo.z)}}var $o=new $t;function kn(t,i){this.object=t,i===void 0&&(i=16776960);let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new ce;r.setIndex(new Se(n,1)),r.setAttribute("position",new Se(s,3)),gt.call(this,r,new ot({color:i,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}kn.prototype=Object.create(gt.prototype);kn.prototype.constructor=kn;kn.prototype.update=function(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&$o.setFromObject(this.object),$o.isEmpty())return;let i=$o.min,n=$o.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=i.x,r[4]=n.y,r[5]=n.z,r[6]=i.x,r[7]=i.y,r[8]=n.z,r[9]=n.x,r[10]=i.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=i.z,r[15]=i.x,r[16]=n.y,r[17]=i.z,r[18]=i.x,r[19]=i.y,r[20]=i.z,r[21]=n.x,r[22]=i.y,r[23]=i.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()};kn.prototype.setFromObject=function(t){return this.object=t,this.update(),this};kn.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.object=t.object,this};kn.prototype.clone=function(){return new this.constructor().copy(this)};function Ua(t,i){this.type="Box3Helper",this.box=t,i=i||16776960;let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ce;r.setIndex(new Se(n,1)),r.setAttribute("position",new se(s,3)),gt.call(this,r,new ot({color:i,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Ua.prototype=Object.create(gt.prototype);Ua.prototype.constructor=Ua;Ua.prototype.updateMatrixWorld=function(t){let i=this.box;i.isEmpty()||(i.getCenter(this.position),i.getSize(this.scale),this.scale.multiplyScalar(.5),re.prototype.updateMatrixWorld.call(this,t))};function Oa(t,i,n){this.plane=t,this.size=i===void 0?1:i;let s=n!==void 0?n:16776960,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new ce;o.setAttribute("position",new se(r,3)),o.computeBoundingSphere(),Ot.call(this,o,new ot({color:s,toneMapped:!1})),this.type="PlaneHelper";let a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],l=new ce;l.setAttribute("position",new se(a,3)),l.computeBoundingSphere(),this.add(new Ve(l,new _t({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}Oa.prototype=Object.create(Ot.prototype);Oa.prototype.constructor=Oa;Oa.prototype.updateMatrixWorld=function(t){let i=-this.plane.constant;Math.abs(i)<1e-8&&(i=1e-8),this.scale.set(.5*this.size,.5*this.size,i),this.children[0].material.side=i<0?ft:At,this.lookAt(this.plane.normal),re.prototype.updateMatrixWorld.call(this,t)};var Ah=new L,ea,Cl;function un(t,i,n,s,r,o){re.call(this),this.type="ArrowHelper",t===void 0&&(t=new L(0,0,1)),i===void 0&&(i=new L(0,0,0)),n===void 0&&(n=1),s===void 0&&(s=16776960),r===void 0&&(r=.2*n),o===void 0&&(o=.2*r),ea===void 0&&(ea=new ce,ea.setAttribute("position",new se([0,0,0,0,1,0],3)),Cl=new ln(0,.5,1,5,1),Cl.translate(0,-.5,0)),this.position.copy(i),this.line=new Ot(ea,new ot({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ve(Cl,new _t({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}un.prototype=Object.create(re.prototype);un.prototype.constructor=un;un.prototype.setDirection=function(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ah.set(t.z,0,-t.x).normalize();let i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ah,i)}};un.prototype.setLength=function(t,i,n){i===void 0&&(i=.2*t),n===void 0&&(n=.2*i),this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(n,i,n),this.cone.position.y=t,this.cone.updateMatrix()};un.prototype.setColor=function(t){this.line.material.color.set(t),this.cone.material.color.set(t)};un.prototype.copy=function(t){return re.prototype.copy.call(this,t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this};un.prototype.clone=function(){return new this.constructor().copy(this)};function mc(t){t=t||1;let i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ce;s.setAttribute("position",new se(i,3)),s.setAttribute("color",new se(n,3));let r=new ot({vertexColors:!0,toneMapped:!1});gt.call(this,s,r),this.type="AxesHelper"}mc.prototype=Object.create(gt.prototype);mc.prototype.constructor=mc;var ps=4,en=8,di=Math.pow(2,en),_d=[.125,.215,.35,.446,.526,.582],Md=en-ps+1+_d.length,os=20,gi={[Ut]:0,[Fi]:1,[Pc]:2,[Vh]:3,[zh]:4,[Wh]:5,[Zr]:6},Pl=new ci,{_lodPlanes:or,_sizeLods:Lh,_sigmas:ta}=M0(),Al=null,Sn=(1+Math.sqrt(5))/2,ss=1/Sn,Rh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Sn,ss),new L(0,Sn,-ss),new L(ss,0,Sn),new L(-ss,0,Sn),new L(Sn,ss,0),new L(-Sn,ss,0)];function Dh(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=S0(os),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}Dh.prototype={constructor:Dh,fromScene:function(t,i=0,n=.1,s=100){Al=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(t,n,s,r),i>0&&this._blur(r,0,0,i),this._applyPMREM(r),this._cleanup(r),r},fromEquirectangular:function(t){return this._fromTexture(t)},fromCubemap:function(t){return this._fromTexture(t)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=Uh(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=Bh(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<or.length;t++)or[t].dispose()},_cleanup:function(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Al),t.scissorTest=!1,ia(t,0,0,t.width,t.height)},_fromTexture:function(t){Al=this._renderer.getRenderTarget();let i=this._allocateTargets(t);return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i},_allocateTargets:function(t){let i={magFilter:st,minFilter:st,generateMipmaps:!1,type:Qr,format:Pp,encoding:_0(t)?t.encoding:Pc,depthBuffer:!1,stencilBuffer:!1},n=Ih(i);return n.depthBuffer=!t,this._pingPongRenderTarget=Ih(i),n},_compileMaterial:function(t){let i=new Ve(or[0],t);this._renderer.compile(i,Pl)},_sceneToCubeUV:function(t,i,n,s){let a=new nt(90,1,i,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.outputEncoding,h=u.toneMapping,p=u.getClearColor(),f=u.getClearAlpha();u.toneMapping=ds,u.outputEncoding=Ut;let m=t.background;if(m&&m.isColor){m.convertSRGBToLinear();let w=Math.max(m.r,m.g,m.b),y=Math.min(Math.max(Math.ceil(Math.log2(w)),-128),127);m=m.multiplyScalar(Math.pow(2,-y));let g=(y+128)/255;u.setClearColor(m,g),t.background=null}for(let w=0;w<6;w++){let y=w%3;y==0?(a.up.set(0,l[w],0),a.lookAt(c[w],0,0)):y==1?(a.up.set(0,0,l[w]),a.lookAt(0,c[w],0)):(a.up.set(0,l[w],0),a.lookAt(0,0,c[w])),ia(s,y*di,w>2?di:0,di,di),u.setRenderTarget(s),u.render(t,a)}u.toneMapping=h,u.outputEncoding=d,u.setClearColor(p,f)},_textureToCubeUV:function(t,i){let n=this._renderer;t.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Uh()):this._equirectShader==null&&(this._equirectShader=Bh());let s=t.isCubeTexture?this._cubemapShader:this._equirectShader,r=new Ve(or[0],s),o=s.uniforms;o.envMap.value=t,t.isCubeTexture||o.texelSize.value.set(1/t.image.width,1/t.image.height),o.inputEncoding.value=gi[t.encoding],o.outputEncoding.value=gi[i.texture.encoding],ia(i,0,0,3*di,2*di),n.setRenderTarget(i),n.render(r,Pl)},_applyPMREM:function(t){let i=this._renderer,n=i.autoClear;i.autoClear=!1;for(let s=1;s<Md;s++){let r=Math.sqrt(ta[s]*ta[s]-ta[s-1]*ta[s-1]),o=Rh[(s-1)%Rh.length];this._blur(t,s-1,s,r,o)}i.autoClear=n},_blur:function(t,i,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,i,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)},_halfBlur:function(t,i,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ve(or[s],c),h=c.uniforms,p=Lh[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*os-1),m=r/f,w=isFinite(r)?1+Math.floor(u*m):os;w>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${os}`);let y=[],g=0;for(let A=0;A<os;++A){let R=A/m,O=Math.exp(-R*R/2);y.push(O),A==0?g+=O:A<w&&(g+=2*O)}for(let A=0;A<y.length;A++)y[A]=y[A]/g;h.envMap.value=t.texture,h.samples.value=w,h.weights.value=y,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=f,h.mipInt.value=en-n,h.inputEncoding.value=gi[t.texture.encoding],h.outputEncoding.value=gi[t.texture.encoding];let v=Lh[s],C=3*Math.max(0,di-2*v),E=(s===0?0:2*di)+2*v*(s>en-ps?s-en+ps:0);ia(i,C,E,3*v,2*v),l.setRenderTarget(i),l.render(d,Pl)}};function _0(t){return t===void 0||t.type!==Qr?!1:t.encoding===Ut||t.encoding===Fi||t.encoding===Zr}function M0(){let t=[],i=[],n=[],s=en;for(let r=0;r<Md;r++){let o=Math.pow(2,s);i.push(o);let a=1/o;r>en-ps?a=_d[r-en+ps-1]:r==0&&(a=0),n.push(a);let l=1/(o-1),c=-l/2,u=1+l/2,d=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,p=6,f=3,m=2,w=1,y=new Float32Array(f*p*h),g=new Float32Array(m*p*h),v=new Float32Array(w*p*h);for(let E=0;E<h;E++){let A=E%3*2/3-1,R=E>2?0:-1,O=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(O,f*p*E),g.set(d,m*p*E);let V=[E,E,E,E,E,E];v.set(V,w*p*E)}let C=new ce;C.setAttribute("position",new Se(y,f)),C.setAttribute("uv",new Se(g,m)),C.setAttribute("faceIndex",new Se(v,w)),t.push(C),s>ps&&s--}return{_lodPlanes:t,_sizeLods:i,_sigmas:n}}function Ih(t){let i=new et(3*di,3*di,t);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(t,i,n,s,r){t.viewport.set(i,n,s,r),t.scissor.set(i,n,s,r)}function S0(t){let i=new Float32Array(t),n=new L(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:gi[Ut]},outputEncoding:{value:gi[Ut]}},vertexShader:Bc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform int samples;
uniform float weights[n];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

${Uc()}

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

vec3 getSample(float theta, vec3 axis) {
	float cosTheta = cos(theta);
	// Rodrigues' axis-angle rotation
	vec3 sampleDirection = vOutputDirection * cosTheta
		+ cross(axis, vOutputDirection) * sin(theta)
		+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);
	return bilinearCubeUV(envMap, sampleDirection, mipInt);
}

void main() {
	vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);
	if (all(equal(axis, vec3(0.0))))
		axis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);
	axis = normalize(axis);
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb += weights[0] * getSample(0.0, axis);
	for (int i = 1; i < n; i++) {
		if (i >= samples)
			break;
		float theta = dTheta * float(i);
		gl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);
		gl_FragColor.rgb += weights[i] * getSample(theta, axis);
	}
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Bh(){let t=new z(1,1);return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:gi[Ut]},outputEncoding:{value:gi[Ut]}},vertexShader:Bc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Uc()}

#include <common>

void main() {
	gl_FragColor = vec4(0.0);
	vec3 outputDirection = normalize(vOutputDirection);
	vec2 uv = equirectUv( outputDirection );
	vec2 f = fract(uv / texelSize - 0.5);
	uv -= f * texelSize;
	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x += texelSize.x;
	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.y += texelSize.y;
	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x -= texelSize.x;
	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	vec3 tm = mix(tl, tr, f.x);
	vec3 bm = mix(bl, br, f.x);
	gl_FragColor.rgb = mix(tm, bm, f.y);
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Uh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:gi[Ut]},outputEncoding:{value:gi[Ut]}},vertexShader:Bc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Uc()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Bc(){return`
precision mediump float;
precision mediump int;
attribute vec3 position;
attribute vec2 uv;
attribute float faceIndex;
varying vec3 vOutputDirection;

// RH coordinate system; PMREM face-indexing convention
vec3 getDirection(vec2 uv, float face) {
	uv = 2.0 * uv - 1.0;
	vec3 direction = vec3(uv, 1.0);
	if (face == 0.0) {
		direction = direction.zyx; // ( 1, v, u ) pos x
	} else if (face == 1.0) {
		direction = direction.xzy;
		direction.xz *= -1.0; // ( -u, 1, -v ) pos y
	} else if (face == 2.0) {
		direction.x *= -1.0; // ( -u, v, 1 ) pos z
	} else if (face == 3.0) {
		direction = direction.zyx;
		direction.xz *= -1.0; // ( -1, v, -u ) neg x
	} else if (face == 4.0) {
		direction = direction.xzy;
		direction.xy *= -1.0; // ( -u, -1, v ) neg y
	} else if (face == 5.0) {
		direction.z *= -1.0; // ( u, v, -1 ) neg z
	}
	return direction;
}

void main() {
	vOutputDirection = getDirection(uv, faceIndex);
	gl_Position = vec4( position, 1.0 );
}
	`}function Uc(){return`
uniform int inputEncoding;
uniform int outputEncoding;

#include <encodings_pars_fragment>

vec4 inputTexelToLinear(vec4 value){
	if(inputEncoding == 0){
		return value;
	}else if(inputEncoding == 1){
		return sRGBToLinear(value);
	}else if(inputEncoding == 2){
		return RGBEToLinear(value);
	}else if(inputEncoding == 3){
		return RGBMToLinear(value, 7.0);
	}else if(inputEncoding == 4){
		return RGBMToLinear(value, 16.0);
	}else if(inputEncoding == 5){
		return RGBDToLinear(value, 256.0);
	}else{
		return GammaToLinear(value, 2.2);
	}
}

vec4 linearToOutputTexel(vec4 value){
	if(outputEncoding == 0){
		return value;
	}else if(outputEncoding == 1){
		return LinearTosRGB(value);
	}else if(outputEncoding == 2){
		return LinearToRGBE(value);
	}else if(outputEncoding == 3){
		return LinearToRGBM(value, 7.0);
	}else if(outputEncoding == 4){
		return LinearToRGBM(value, 16.0);
	}else if(outputEncoding == 5){
		return LinearToRGBD(value, 256.0);
	}else{
		return LinearToGamma(value, 2.2);
	}
}

vec4 envMapTexelToLinear(vec4 color) {
	return inputTexelToLinear(color);
}
	`}ve.create=function(t,i){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(ve.prototype),t.prototype.constructor=t,t.prototype.getPoint=i,t};Object.assign(Zi.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let i=this.getPoints(t);return this.createGeometry(i)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let i=this.getSpacedPoints(t);return this.createGeometry(i)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let i=new Le;for(let n=0,s=t.length;n<s;n++){let r=t[n];i.vertices.push(new L(r.x,r.y,r.z||0))}return i}});Object.assign(mi.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function E0(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Dt.call(this,t),this.type="catmullrom",this.closed=!0}E0.prototype=Object.create(Dt.prototype);function T0(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Dt.call(this,t),this.type="catmullrom"}T0.prototype=Object.create(Dt.prototype);function Sd(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Dt.call(this,t),this.type="catmullrom"}Sd.prototype=Object.create(Dt.prototype);Object.assign(Sd.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});fc.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Hs.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Xe.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),js.extractUrlBase(t)}});Xe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(cc.prototype,{setTexturePath:function(t){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(t)}});Object.assign(yd.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign($t.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Hi.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});Kr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};bd.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(be,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),be.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),be.ceilPowerOfTwo(t)}});Object.assign(wt.prototype,{flattenToArrayOffset:function(t,i){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,i)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(de.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,i){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,i)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,i,n,s,r,o){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,i,s,n,r,o)}});fi.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Ue.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)};Object.assign(Ns.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(Et.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,i)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(Et,{barycoordFromPoint:function(t,i,n,s,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Et.getBarycoord(t,i,n,s,r)},normal:function(t,i,n,s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Et.getNormal(t,i,n,s)}});Object.assign(En.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Es(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Cs(this,t)}});Object.assign(z.prototype,{fromAttribute:function(t,i,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,i,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(L.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,i){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(i,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,i,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,i,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(ke.prototype,{fromAttribute:function(t,i,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,i,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Le.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.assign(re.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,i){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(i,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(re.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Ve.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Ve.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),dm},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(ua.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Mr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});_r.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(ve.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});nt.prototype.setLens=function(t,i){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),i!==void 0&&(this.filmGauge=i),this.setFocalLength(t)};Object.defineProperties(Ke.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(Se.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===nn},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(nn)}}});Object.assign(Se.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?nn:Ga),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(ce.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,i){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(i&&i.isBufferAttribute)&&!(i&&i.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new Se(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(i),this):this.setAttribute(t,i)},addDrawCall:function(t,i,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,i)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ce.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Ra.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(Va.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(Xt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===nn},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(Xt.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?nn:Ga),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Ii.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(hc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(Ce.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new te}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Fh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(li.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(we.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(Ws.prototype,{clearTarget:function(t,i,n,s){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(i,n,s)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Ws.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?Fi:Ut}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(nd.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(et.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties(zr.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let i=this;return new uc().load(t,function(s){i.setBuffer(s)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});md.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};vr.prototype.updateCubeMap=function(t,i){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,i)};Tn.crossOrigin=void 0;Tn.loadTexture=function(t,i,n,s){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Gr;r.setCrossOrigin(this.crossOrigin);let o=r.load(t,n,void 0,s);return i&&(o.mapping=i),o};Tn.loadTextureCube=function(t,i,n,s){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new $l;r.setCrossOrigin(this.crossOrigin);let o=r.load(t,n,void 0,s);return i&&(o.mapping=i),o};Tn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Tn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));var ze=z,yt=L,Ed=ke;var hn={NONE:0,ERROR:1,WARN:2,INFO:3};var Jr=class{constructor(i="images/assets/",n){this.assetRoot=i,this.mobile=n,this.pxlTimer=null,this.verboseLoading=!1,this.texLoader=new Un,this.textLoaderArray=[],this.channelFormats=[Mc,Ec,Tc,vi,Ze,Sc,qt]}get curMS(){return this.pxlTimer.curMS}setDependencies(i){this.pxlTimer=i.pxlTimer}updateUrl(i,n={},s=""){window.history.replaceState?window.history.replaceState(n,s,i):window.history.pushState(n,s,i)}copyRoomUrl(){let i=window.location,n=document.activeElement,s=document.createElement("textarea");s.value=i,document.body.appendChild(s),s.focus(),s.select();let r=!1;try{r=document.execCommand("copy")?"successful":"unsuccessful"}catch{}return document.body.removeChild(s),n.focus(),r}checkInt(i){return i%1==0}degToRad(i){return i*(Math.PI/180)}toHundreths(i){if(!i)return 0;if(Number.isInteger(i))return i;{let n=(i+"").split(".");return parseFloat(n[0]+"."+n[1].substr(0,2))}}toTenths(i){if(!i)return 0;if(Number.isInteger(i))return i;{let n=(i+"").split(".");return parseFloat(n[0]+"."+n[1].substr(0,1))}}getDateTime(){let i=new Date,n=(i.getFullYear()+"").padStart(2,"0")+"-"+(i.getMonth()+1+"").padStart(2,"0")+"-"+(i.getDate()+"").padStart(2,"0"),s=(i.getHours()+"").padStart(2,"0")+":"+(i.getMinutes()+"").padStart(2,"0")+":"+(i.getSeconds()+"").padStart(2,"0");return[n,s]}cleanStrict(i){let n=document.createElement("div");n.innerHTML=i,n=n.innerText;let s=n.match(/([a-zA-Z0-9])\w+/g);return s&&(n=s.join(" ")),n}cleanBasic(i){let n=document.createElement("div");n.innerHTML=i,n=n.innerText;let s=n.match(/([a-zA-Z0-9\s\w-+()\[\]])+/g);return s&&(n=s.join("")),n}cleanString(i){let n=document.createElement("div");return n.innerHTML=i,n=n.innerText,n}componentToHex(i){var n=i.toString(16);return n.padStart(2,"0")}rgbToHex(i,n,s){return"#"+this.componentToHex(Math.min(255,Math.max(0,Math.round(i))))+this.componentToHex(Math.min(255,Math.max(0,Math.round(n))))+this.componentToHex(Math.min(255,Math.max(0,Math.round(s))))}hexToRgb(i){i[0]=="#"?i=i.substr(1,6):i=i.substr(0,6);let s,r,o;return i.length==3?(s=i[0]+i[0],r=i[1]+i[1],o=i[2]+i[2]):(s=i[0]+i[1],r=i[2]+i[3],o=i[4]+i[5]),s=parseInt(s,16),r=parseInt(r,16),o=parseInt(o,16),[s,r,o]}stringToRgb(i,n=null,s=!1){let r=[255,0,0];if(i){let o=i.length,a="";for(let c=0;c<o;++c)a+=i[o-1-c].charCodeAt(0).toString(16);let l=a.length;if(l>6){let c=1;i=="tussin"?c=0:i=="fexofenadine"&&(c=-1);let u=Math.max(0,parseInt((l-6)/2+c));a=a.substr(u,6)}r=this.hexToRgb(a)}if(n!=null){let o=Math.max(...r),a=Math.min(...r),l=o*n;r[0]=parseInt(Math.min(255,(r[0]-a)/(o-a)*255+l)),r[1]=parseInt(Math.min(255,(r[1]-a)/(o-a)*255+l)),r[2]=parseInt(Math.min(255,(r[2]-a)/(o-a)*255+l))}return s==!0&&(r[0]=r[0]/255,r[1]=r[1]/255,r[2]=r[2]/255),r}randomizeArray(i){let n=[...i],s=[];for(;n.length>0;){let r=n.length==1?0:parseInt(Math.random()*21*n.length)%n.length;s.push(n.splice(r,1)[0])}return s}getRandom(i,n=1.14){let s=Math.floor(Math.random(n)*i.length);return i[s]}applyTransformList(i,n){var s=n.r;i.rotateX(s[0]),i.rotateY(s[1]),i.rotateZ(s[2]),typeof n.rOrder<"u"&&(i.rotation.order=n.rOrder);var r=n.t;i.position.set(r[0],r[1],r[2]);var o=n.s;i.scale.set(o[0],o[1],o[2]),i.matrixAutoUpdate=!1,i.updateMatrix()}vec2(i=null,n=null){return new ze(i,n)}vec3(i=0,n=0,s=0){return new yt(i,n,s)}loadTexture(i,n=null,s={}){if(typeof this.textLoaderArray[i]<"u")r=this.textLoaderArray[i];else{var r=new je;this.texLoader.load(i,o=>{n!=null&&(r.format=this.channelFormats[n]),r.image=o,r.needsUpdate=!0,s.length>0&&Object.keys(s).forEach(l=>{r[l]=s[l]})}),this.textLoaderArray[i]=r}return r}getVideoTexture(i){let n=new ha(i);return n.minFilter=Ge,n.magFilter=Ge,n.format=vi,n}getCanvasTexture(i){let n=new _s(i),s=new _t({map:n});return{texture:n,material:s}}};var Od={},Wt=void 0,C0=Od;function Gc(t,i){var n=t.split("."),s=C0;!(n[0]in s)&&s.execScript&&s.execScript("var "+n[0]);for(var r;n.length&&(r=n.shift());)!n.length&&i!==Wt?s[r]=i:s=s[r]?s[r]:s[r]={}}var Je=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u"&&typeof DataView<"u";function Gn(t){var i=t.length,n=0,s=Number.POSITIVE_INFINITY,r,o,a,l,c,u,d,h,p,f;for(h=0;h<i;++h)t[h]>n&&(n=t[h]),t[h]<s&&(s=t[h]);for(r=1<<n,o=new(Je?Uint32Array:Array)(r),a=1,l=0,c=2;a<=n;){for(h=0;h<i;++h)if(t[h]===a){for(u=0,d=l,p=0;p<a;++p)u=u<<1|d&1,d>>=1;for(f=a<<16|h,p=u;p<r;p+=c)o[p]=f;++l}++a,l<<=1,c<<=1}return[o,n,s]}function dn(t,i){switch(this.g=[],this.h=32768,this.d=this.f=this.a=this.l=0,this.input=Je?new Uint8Array(t):t,this.m=!1,this.i=Wa,this.r=!1,(i||!(i={}))&&(i.index&&(this.a=i.index),i.bufferSize&&(this.h=i.bufferSize),i.bufferType&&(this.i=i.bufferType),i.resize&&(this.r=i.resize)),this.i){case Nc:this.b=32768,this.c=new(Je?Uint8Array:Array)(32768+this.h+258);break;case Wa:this.b=0,this.c=new(Je?Uint8Array:Array)(this.h),this.e=this.z,this.n=this.v,this.j=this.w;break;default:throw Error("invalid inflate mode")}}var Nc=0,Wa=1,Td={t:Nc,s:Wa};dn.prototype.k=function(){for(;!this.m;){var t=ei(this,3);switch(t&1&&(this.m=!0),t>>>=1,t){case 0:var i=this.input,n=this.a,s=this.c,r=this.b,o=i.length,a=Wt,l=Wt,c=s.length,u=Wt;if(this.d=this.f=0,n+1>=o)throw Error("invalid uncompressed block header: LEN");if(a=i[n++]|i[n++]<<8,n+1>=o)throw Error("invalid uncompressed block header: NLEN");if(l=i[n++]|i[n++]<<8,a===~l)throw Error("invalid uncompressed block header: length verify");if(n+a>i.length)throw Error("input buffer is broken");switch(this.i){case Nc:for(;r+a>s.length;){if(u=c-r,a-=u,Je)s.set(i.subarray(n,n+u),r),r+=u,n+=u;else for(;u--;)s[r++]=i[n++];this.b=r,s=this.e(),r=this.b}break;case Wa:for(;r+a>s.length;)s=this.e({p:2});break;default:throw Error("invalid inflate mode")}if(Je)s.set(i.subarray(n,n+a),r),r+=a,n+=a;else for(;a--;)s[r++]=i[n++];this.a=n,this.b=r,this.c=s;break;case 1:this.j(P0,A0);break;case 2:for(var d=ei(this,5)+257,h=ei(this,5)+1,p=ei(this,4)+4,f=new(Je?Uint8Array:Array)(Oc.length),m=Wt,w=Wt,y=Wt,g=Wt,v=Wt,C=Wt,E=Wt,R=Wt,A=Wt,R=0;R<p;++R)f[Oc[R]]=ei(this,3);if(!Je)for(R=p,p=f.length;R<p;++R)f[Oc[R]]=0;for(m=Gn(f),g=new(Je?Uint8Array:Array)(d+h),R=0,A=d+h;R<A;)switch(v=to(this,m),v){case 16:for(E=3+ei(this,2);E--;)g[R++]=C;break;case 17:for(E=3+ei(this,3);E--;)g[R++]=0;C=0;break;case 18:for(E=11+ei(this,7);E--;)g[R++]=0;C=0;break;default:C=g[R++]=v}w=Gn(Je?g.subarray(0,d):g.slice(0,d)),y=Gn(Je?g.subarray(d):g.slice(d)),this.j(w,y);break;default:throw Error("unknown BTYPE: "+t)}}return this.n()};var Cd=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Oc=Je?new Uint16Array(Cd):Cd,Pd=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],Fd=Je?new Uint16Array(Pd):Pd,Ad=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],ja=Je?new Uint8Array(Ad):Ad,Ld=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],kd=Je?new Uint16Array(Ld):Ld,Rd=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Xa=Je?new Uint8Array(Rd):Rd,Fc=new(Je?Uint8Array:Array)(288),Hn,Dd;Hn=0;for(Dd=Fc.length;Hn<Dd;++Hn)Fc[Hn]=143>=Hn?8:255>=Hn?9:279>=Hn?7:8;var P0=Gn(Fc),kc=new(Je?Uint8Array:Array)(30),za,Id;za=0;for(Id=kc.length;za<Id;++za)kc[za]=5;var A0=Gn(kc);function ei(t,i){for(var n=t.f,s=t.d,r=t.input,o=t.a,a=r.length,l;s<i;){if(o>=a)throw Error("input buffer is broken");n|=r[o++]<<s,s+=8}return l=n&(1<<i)-1,t.f=n>>>i,t.d=s-i,t.a=o,l}function to(t,i){for(var n=t.f,s=t.d,r=t.input,o=t.a,a=r.length,l=i[0],c=i[1],u,d;s<c&&!(o>=a);)n|=r[o++]<<s,s+=8;if(u=l[n&(1<<c)-1],d=u>>>16,d>s)throw Error("invalid code length: "+d);return t.f=n>>d,t.d=s-d,t.a=o,u&65535}dn.prototype.j=function(t,i){var n=this.c,s=this.b;this.o=t;for(var r=n.length-258,o,a,l,c;(o=to(this,t))!==256;)if(256>o)s>=r&&(this.b=s,n=this.e(),s=this.b),n[s++]=o;else for(a=o-257,c=Fd[a],0<ja[a]&&(c+=ei(this,ja[a])),o=to(this,i),l=kd[o],0<Xa[o]&&(l+=ei(this,Xa[o])),s>=r&&(this.b=s,n=this.e(),s=this.b);c--;)n[s]=n[s++-l];for(;8<=this.d;)this.d-=8,this.a--;this.b=s};dn.prototype.w=function(t,i){var n=this.c,s=this.b;this.o=t;for(var r=n.length,o,a,l,c;(o=to(this,t))!==256;)if(256>o)s>=r&&(n=this.e(),r=n.length),n[s++]=o;else for(a=o-257,c=Fd[a],0<ja[a]&&(c+=ei(this,ja[a])),o=to(this,i),l=kd[o],0<Xa[o]&&(l+=ei(this,Xa[o])),s+c>r&&(n=this.e(),r=n.length);c--;)n[s]=n[s++-l];for(;8<=this.d;)this.d-=8,this.a--;this.b=s};dn.prototype.e=function(){var t=new(Je?Uint8Array:Array)(this.b-32768),i=this.b-32768,n,s,r=this.c;if(Je)t.set(r.subarray(32768,t.length));else for(n=0,s=t.length;n<s;++n)t[n]=r[n+32768];if(this.g.push(t),this.l+=t.length,Je)r.set(r.subarray(i,i+32768));else for(n=0;32768>n;++n)r[n]=r[i+n];return this.b=32768,r};dn.prototype.z=function(t){var i,n=this.input.length/this.a+1|0,s,r,o,a=this.input,l=this.c;return t&&(typeof t.p=="number"&&(n=t.p),typeof t.u=="number"&&(n+=t.u)),2>n?(s=(a.length-this.a)/this.o[2],o=258*(s/2)|0,r=o<l.length?l.length+o:l.length<<1):r=l.length*n,Je?(i=new Uint8Array(r),i.set(l)):i=l,this.c=i};dn.prototype.n=function(){var t=0,i=this.c,n=this.g,s,r=new(Je?Uint8Array:Array)(this.l+(this.b-32768)),o,a,l,c;if(n.length===0)return Je?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);for(o=0,a=n.length;o<a;++o)for(s=n[o],l=0,c=s.length;l<c;++l)r[t++]=s[l];for(o=32768,a=this.b;o<a;++o)r[t++]=i[o];return this.g=[],this.buffer=r};dn.prototype.v=function(){var t,i=this.b;return Je?this.r?(t=new Uint8Array(i),t.set(this.c.subarray(0,i))):t=this.c.subarray(0,i):(this.c.length>i&&(this.c.length=i),t=this.c),this.buffer=t};function Vc(t,i){var n,s;switch(this.input=t,this.a=0,(i||!(i={}))&&(i.index&&(this.a=i.index),i.verify&&(this.A=i.verify)),n=t[this.a++],s=t[this.a++],n&15){case Bd:this.method=Bd;break;default:throw Error("unsupported compression method")}if(((n<<8)+s)%31!==0)throw Error("invalid fcheck flag:"+((n<<8)+s)%31);if(s&32)throw Error("fdict flag is not supported");this.q=new dn(t,{index:this.a,bufferSize:i.bufferSize,bufferType:i.bufferType,resize:i.resize})}Vc.prototype.k=function(){var t=this.input,i,n;if(i=this.q.k(),this.a=this.q.a,this.A){n=(t[this.a++]<<24|t[this.a++]<<16|t[this.a++]<<8|t[this.a++])>>>0;var s=i;if(typeof s=="string"){var r=s.split(""),o,a;for(o=0,a=r.length;o<a;o++)r[o]=(r[o].charCodeAt(0)&255)>>>0;s=r}for(var l=1,c=0,u=s.length,d,h=0;0<u;){d=1024<u?1024:u,u-=d;do l+=s[h++],c+=l;while(--d);l%=65521,c%=65521}if(n!==(c<<16|l)>>>0)throw Error("invalid adler-32 checksum")}return i};var Bd=8;Gc("Zlib.Inflate",Vc);Gc("Zlib.Inflate.prototype.decompress",Vc.prototype.k);var Hc={ADAPTIVE:Td.s,BLOCK:Td.t},$r,eo,qs,Ud;if(Object.keys)$r=Object.keys(Hc);else for(eo in $r=[],qs=0,Hc)$r[qs++]=eo;qs=0;for(Ud=$r.length;qs<Ud;++qs)eo=$r[qs],Gc("Zlib.Inflate.BufferType."+eo,Hc[eo]);var zc=Od.Zlib;var Wc={findSpan:function(t,i,n){var s=n.length-t-1;if(i>=n[s])return s-1;if(i<=n[t])return t;for(var r=t,o=s,a=Math.floor((r+o)/2);i<n[a]||i>=n[a+1];)i<n[a]?o=a:r=a,a=Math.floor((r+o)/2);return a},calcBasisFunctions:function(t,i,n,s){var r=[],o=[],a=[];r[0]=1;for(var l=1;l<=n;++l){o[l]=i-s[t+1-l],a[l]=s[t+l]-i;for(var c=0,u=0;u<l;++u){var d=a[u+1],h=o[l-u],p=r[u]/(d+h);r[u]=c+d*p,c=h*p}r[l]=c}return r},calcBSplinePoint:function(t,i,n,s){for(var r=this.findSpan(t,s,i),o=this.calcBasisFunctions(r,s,t,i),a=new ke(0,0,0,0),l=0;l<=t;++l){var c=n[r-t+l],u=o[l],d=c.w*u;a.x+=c.x*d,a.y+=c.y*d,a.z+=c.z*d,a.w+=c.w*u}return a},calcBasisFunctionDerivatives:function(t,i,n,s,r){for(var o=[],a=0;a<=n;++a)o[a]=0;for(var l=[],a=0;a<=s;++a)l[a]=o.slice(0);for(var c=[],a=0;a<=n;++a)c[a]=o.slice(0);c[0][0]=1;for(var u=o.slice(0),d=o.slice(0),h=1;h<=n;++h){u[h]=i-r[t+1-h],d[h]=r[t+h]-i;for(var p=0,k=0;k<h;++k){var f=d[k+1],m=u[h-k];c[h][k]=f+m;var w=c[k][h-1]/c[h][k];c[k][h]=p+f*w,p=m*w}c[h][h]=p}for(var h=0;h<=n;++h)l[0][h]=c[h][n];for(var k=0;k<=n;++k){for(var y=0,g=1,v=[],a=0;a<=n;++a)v[a]=o.slice(0);v[0][0]=1;for(var C=1;C<=s;++C){var E=0,A=k-C,R=n-C;k>=C&&(v[g][0]=v[y][0]/c[R+1][A],E=v[g][0]*c[A][R]);for(var O=A>=-1?1:-A,V=k-1<=R?C-1:n-k,h=O;h<=V;++h)v[g][h]=(v[y][h]-v[y][h-1])/c[R+1][A+h],E+=v[g][h]*c[A+h][R];k<=R&&(v[g][C]=-v[y][C-1]/c[R+1][k],E+=v[g][C]*c[k][R]),l[C][k]=E;var h=y;y=g,g=h}}for(var k=n,C=1;C<=s;++C){for(var h=0;h<=n;++h)l[C][h]*=k;k*=n-C}return l},calcBSplineDerivatives:function(t,i,n,s,r){for(var o=r<t?r:t,a=[],l=this.findSpan(t,s,i),c=this.calcBasisFunctionDerivatives(l,s,t,o,i),u=[],d=0;d<n.length;++d){var h=n[d].clone(),p=h.w;h.x*=p,h.y*=p,h.z*=p,u[d]=h}for(var f=0;f<=o;++f){for(var h=u[l-t].clone().multiplyScalar(c[f][0]),m=1;m<=t;++m)h.add(u[l-t+m].clone().multiplyScalar(c[f][m]));a[f]=h}for(var f=o+1;f<=r+1;++f)a[f]=new ke(0,0,0);return a},calcKoverI:function(t,i){for(var n=1,s=2;s<=t;++s)n*=s;for(var r=1,s=2;s<=i;++s)r*=s;for(var s=2;s<=t-i;++s)r*=s;return n/r},calcRationalCurveDerivatives:function(t){for(var i=t.length,n=[],s=[],r=0;r<i;++r){var o=t[r];n[r]=new L(o.x,o.y,o.z),s[r]=o.w}for(var a=[],l=0;l<i;++l){for(var c=n[l].clone(),r=1;r<=l;++r)c.sub(a[l-r].clone().multiplyScalar(this.calcKoverI(l,r)*s[r]));a[l]=c.divideScalar(s[0])}return a},calcNURBSDerivatives:function(t,i,n,s,r){var o=this.calcBSplineDerivatives(t,i,n,s,r);return this.calcRationalCurveDerivatives(o)},calcSurfacePoint:function(t,i,n,s,r,o,a,l){for(var c=this.findSpan(t,o,n),u=this.findSpan(i,a,s),d=this.calcBasisFunctions(c,o,t,n),h=this.calcBasisFunctions(u,a,i,s),p=[],f=0;f<=i;++f){p[f]=new ke(0,0,0,0);for(var m=0;m<=t;++m){var w=r[c-t+m][u-i+f].clone(),y=w.w;w.x*=y,w.y*=y,w.z*=y,p[f].add(w.multiplyScalar(d[m]))}}for(var g=new ke(0,0,0,0),f=0;f<=i;++f)g.add(p[f].multiplyScalar(h[f]));g.divideScalar(g.w),l.set(g.x,g.y,g.z)}};var fn=function(t,i,n,s,r){ve.call(this),this.degree=t,this.knots=i,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||this.knots.length-1;for(var o=0;o<n.length;++o){var a=n[o];this.controlPoints[o]=new ke(a.x,a.y,a.z,a.w)}};fn.prototype=Object.create(ve.prototype);fn.prototype.constructor=fn;fn.prototype.getPoint=function(t,i){var n=i||new L,s=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Wc.calcBSplinePoint(this.degree,this.knots,this.controlPoints,s);return r.w!=1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)};fn.prototype.getTangent=function(t,i){var n=i||new L,s=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),r=Wc.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,s,1);return n.copy(r[1]).normalize(),n};var io=function(){var t,i,n;function s(b){Xe.call(this,b)}s.prototype=Object.assign(Object.create(Xe.prototype),{constructor:s,load:function(b,_,M,T){var S=this,P=S.path===""?js.extractUrlBase(b):S.path,D=new Kt(this.manager);D.setPath(S.path),D.setResponseType("arraybuffer"),D.load(b,function(U){try{_(S.parse(U,P))}catch(H){setTimeout(function(){T&&T(H),S.manager.itemError(b)},0)}},M,T)},parse:function(b,_){if(h(b))t=new c().parse(b);else{var M=R(b);if(!p(M))throw new Error("THREE.FBXLoader: Unknown format.");if(f(M)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+f(M));t=new l().parse(M)}var T=new Gr(this.manager).setPath(this.resourcePath||_).setCrossOrigin(this.crossOrigin);return new r(T,this.manager).parse(t)}});function r(b,_){this.textureLoader=b,this.manager=_}r.prototype={constructor:r,parse:function(){i=this.parseConnections();var b=this.parseImages(),_=this.parseTextures(b),M=this.parseMaterials(_),T=this.parseDeformers(),S=new o().parse(T);return this.parseScene(T,S,M),n},parseConnections:function(){var b=new Map;if("Connections"in t){var _=t.Connections.connections;_.forEach(function(M){var T=M[0],S=M[1],P=M[2];b.has(T)||b.set(T,{parents:[],children:[]});var D={ID:S,relationship:P};b.get(T).parents.push(D),b.has(S)||b.set(S,{parents:[],children:[]});var U={ID:T,relationship:P};b.get(S).children.push(U)})}return b},parseImages:function(){var b={},_={};if("Video"in t.Objects){var M=t.Objects.Video;for(var T in M){var S=M[T],P=parseInt(T);if(b[P]=S.RelativeFilename||S.Filename,"Content"in S){var D=S.Content instanceof ArrayBuffer&&S.Content.byteLength>0,U=typeof S.Content=="string"&&S.Content!=="";if(D||U){var H=this.parseImage(M[T]);_[S.RelativeFilename||S.Filename]=H}}}}for(var P in b){var W=b[P];_[W]!==void 0?b[P]=_[W]:b[P]=b[P].split("\\").pop()}return b},parseImage:function(b){var _=b.Content,M=b.RelativeFilename||b.Filename,T=M.slice(M.lastIndexOf(".")+1).toLowerCase(),S;switch(T){case"bmp":S="image/bmp";break;case"jpg":case"jpeg":S="image/jpeg";break;case"png":S="image/png";break;case"tif":S="image  iff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",M),S="image  ga";break;default:console.warn('FBXLoader: Image type "'+T+'" is not supported.');return}if(typeof _=="string")return"data:"+S+";base64,"+_;var P=new Uint8Array(_);return window.URL.createObjectURL(new Blob([P],{type:S}))},parseTextures:function(b){var _=new Map;if("Texture"in t.Objects){var M=t.Objects.Texture;for(var T in M){var S=this.parseTexture(M[T],b);_.set(parseInt(T),S)}}return _},parseTexture:function(b,_){var M=this.loadTexture(b,_);M.ID=b.id,M.name=b.attrName;var T=b.WrapModeU,S=b.WrapModeV,P=T!==void 0?T.value:0,D=S!==void 0?S.value:0;if(M.wrapS=P===0?Bt:Tt,M.wrapT=D===0?Bt:Tt,"Scaling"in b){var U=b.Scaling.value;M.repeat.x=U[0],M.repeat.y=U[1]}return M},loadTexture:function(b,_){var M,T=this.textureLoader.path,S=i.get(b.id).children;S!==void 0&&S.length>0&&_[S[0].ID]!==void 0&&(M=_[S[0].ID],(M.indexOf("blob:")===0||M.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));var P,D=b.FileName.slice(-3).toLowerCase();if(D==="tga"){var U=this.manager.getHandler(".tga");U===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",b.RelativeFilename),P=new je):P=U.load(M)}else D==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",b.RelativeFilename),P=new je):P=this.textureLoader.load(M);return this.textureLoader.setPath(T),P},parseMaterials:function(b){var _=new Map;if("Material"in t.Objects){var M=t.Objects.Material;for(var T in M){var S=this.parseMaterial(M[T],b);S!==null&&_.set(parseInt(T),S)}}return _},parseMaterial:function(b,_){var M=b.id,T=b.attrName,S=b.ShadingModel;if(typeof S=="object"&&(S=S.value),!i.has(M))return null;var P=this.parseParameters(b,_,M),D;switch(S.toLowerCase()){case"phong":D=new li;break;case"lambert":D=new xi;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',S),D=new li;break}return D.setValues(P),D.name=T,D},parseParameters:function(b,_,M){var T={};b.BumpFactor&&(T.bumpScale=b.BumpFactor.value),b.Diffuse?T.color=new te().fromArray(b.Diffuse.value):b.DiffuseColor&&b.DiffuseColor.type==="Color"&&(T.color=new te().fromArray(b.DiffuseColor.value)),b.DisplacementFactor&&(T.displacementScale=b.DisplacementFactor.value),b.Emissive?T.emissive=new te().fromArray(b.Emissive.value):b.EmissiveColor&&b.EmissiveColor.type==="Color"&&(T.emissive=new te().fromArray(b.EmissiveColor.value)),b.EmissiveFactor&&(T.emissiveIntensity=parseFloat(b.EmissiveFactor.value)),b.Opacity&&(T.opacity=parseFloat(b.Opacity.value)),T.opacity<1&&(T.transparent=!0),b.ReflectionFactor&&(T.reflectivity=b.ReflectionFactor.value),b.Shininess&&(T.shininess=b.Shininess.value),b.Specular?T.specular=new te().fromArray(b.Specular.value):b.SpecularColor&&b.SpecularColor.type==="Color"&&(T.specular=new te().fromArray(b.SpecularColor.value));var S=this;return i.get(M).children.forEach(function(P){var D=P.relationship;switch(D){case"Bump":T.bumpMap=S.getTexture(_,P.ID);break;case"Maya|TEX_ao_map":T.aoMap=S.getTexture(_,P.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":T.map=S.getTexture(_,P.ID),T.map.encoding=Fi;break;case"DisplacementColor":T.displacementMap=S.getTexture(_,P.ID);break;case"AmbientColor":case"EmissiveColor":T.emissiveMap=S.getTexture(_,P.ID),T.emissiveMap.encoding=Fi;break;case"NormalMap":case"Maya|TEX_normal_map":T.normalMap=S.getTexture(_,P.ID);break;case"ReflectionColor":T.envMap=S.getTexture(_,P.ID),T.envMap.mapping=ka,T.envMap.encoding=Fi;break;case"SpecularColor":T.specularMap=S.getTexture(_,P.ID),T.specularMap.encoding=Fi;break;case"TransparentColor":case"TransparencyFactor":T.alphaMap=S.getTexture(_,P.ID),T.transparent=!0;break;case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",D);break}}),T},getTexture:function(b,_){return"LayeredTexture"in t.Objects&&_ in t.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),_=i.get(_).children[0].ID),b.get(_)},parseDeformers:function(){var b={},_={};if("Deformer"in t.Objects){var M=t.Objects.Deformer;for(var T in M){var S=M[T],P=i.get(parseInt(T));if(S.attrType==="Skin"){var D=this.parseSkeleton(P,M);D.ID=T,P.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),D.geometryID=P.parents[0].ID,b[T]=D}else if(S.attrType==="BlendShape"){var U={id:T};U.rawTargets=this.parseMorphTargets(P,M),U.id=T,P.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),_[T]=U}}}return{skeletons:b,morphTargets:_}},parseSkeleton:function(b,_){var M=[];return b.children.forEach(function(T){var S=_[T.ID];if(S.attrType==="Cluster"){var P={ID:T.ID,indices:[],weights:[],transformLink:new de().fromArray(S.TransformLink.a)};"Indexes"in S&&(P.indices=S.Indexes.a,P.weights=S.Weights.a),M.push(P)}}),{rawBones:M,bones:[]}},parseMorphTargets:function(b,_){for(var M=[],T=0;T<b.children.length;T++){var S=b.children[T],P=_[S.ID],D={name:P.attrName,initialWeight:P.DeformPercent,id:P.id,fullWeights:P.FullWeights.a};if(P.attrType!=="BlendShapeChannel")return;D.geoID=i.get(parseInt(S.ID)).children.filter(function(U){return U.relationship===void 0})[0].ID,M.push(D)}return M},parseScene:function(b,_,M){n=new Rt;var T=this.parseModels(b.skeletons,_,M),S=t.Objects.Model,P=this;T.forEach(function(U){var H=S[U.ID];P.setLookAtProperties(U,H);var W=i.get(U.ID).parents;W.forEach(function(G){var q=T.get(G.ID);q!==void 0&&q.add(U)}),U.parent===null&&n.add(U)}),this.bindSkeleton(b.skeletons,_,T),this.createAmbientLight(),this.setupMorphMaterials(),n.traverse(function(U){if(U.userData.transformData){U.parent&&(U.userData.transformData.parentMatrixWorld=U.parent.matrix);var H=C(U.userData.transformData);U.applyMatrix4(H)}});var D=new a().parse();n.children.length===1&&n.children[0].isGroup&&(n.children[0].animations=D,n=n.children[0]),n.animations=D},parseModels:function(b,_,M){var T=new Map,S=t.Objects.Model,P=["Culling","DefaultAttributeIndex","InheritType","Lcl_Translation","Lcl_Rotation","Lcl_Scaling","RotationPivot","ScalingPivot","RotationActive","ScalingMax","RotationOffset","fbx_node_path","Shading","Version","attrName","attrType","currentUVSet","id","name","propertyList","singleProperty"];for(var D in S){var U=parseInt(D),H=S[D],W=i.get(U),G=this.buildSkeleton(W,b,U,H.attrName);if(!G){switch(H.attrType){case"Camera":G=this.createCamera(W);break;case"Light":G=this.createLight(W);break;case"Mesh":G=this.createMesh(W,_,M);break;case"NurbsCurve":G=this.createCurve(W,_);break;case"LimbNode":case"Root":G=new Sr;break;case"Null":default:G=new Rt;break}G.name=H.attrName?mt.sanitizeNodeName(H.attrName):"",G.ID=U}Object.keys(H).forEach(Z=>{P.includes(Z)||(G.userData[Z]=H[Z].value)}),this.getTransformData(G,H),T.set(U,G)}return T},buildSkeleton:function(b,_,M,T){var S=null;return b.parents.forEach(function(P){for(var D in _){var U=_[D];U.rawBones.forEach(function(H,W){if(H.ID===P.ID){var G=S;S=new Sr,S.matrixWorld.copy(H.transformLink),S.name=T?mt.sanitizeNodeName(T):"",S.ID=M,U.bones[W]=S,G!==null&&S.add(G)}})}}),S},createCamera:function(b){var _,M;if(b.children.forEach(function(q){var Z=t.Objects.NodeAttribute[q.ID];Z!==void 0&&(M=Z)}),M===void 0)_=new re;else{var T=0;M.CameraProjectionType!==void 0&&M.CameraProjectionType.value===1&&(T=1);var S=1;M.NearPlane!==void 0&&(S=M.NearPlane.value/1e3);var P=1e3;M.FarPlane!==void 0&&(P=M.FarPlane.value/1e3);var D=window.innerWidth,U=window.innerHeight;M.AspectWidth!==void 0&&M.AspectHeight!==void 0&&(D=M.AspectWidth.value,U=M.AspectHeight.value);var H=D/U,W=45;M.FieldOfView!==void 0&&(W=M.FieldOfView.value);var G=M.FocalLength?M.FocalLength.value:null;switch(T){case 0:_=new nt(W,H,S,P),G!==null&&_.setFocalLength(G);break;case 1:_=new ci(-D/2,D/2,U/2,-U/2,S,P);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+T+"."),_=new re;break}}return _},createLight:function(b){var _,M;if(b.children.forEach(function(G){var q=t.Objects.NodeAttribute[G.ID];q!==void 0&&(M=q)}),M===void 0)_=new re;else{var T;M.LightType===void 0?T=0:T=M.LightType.value;var S=16777215;M.Color!==void 0&&(S=new te().fromArray(M.Color.value));var P=M.Intensity===void 0?1:M.Intensity.value/100;M.CastLightOnObject!==void 0&&M.CastLightOnObject.value===0&&(P=0);var D=0;M.FarAttenuationEnd!==void 0&&(M.EnableFarAttenuation!==void 0&&M.EnableFarAttenuation.value===0?D=0:D=M.FarAttenuationEnd.value);var U=1;switch(T){case 0:_=new ks(S,P,D,U);break;case 1:_=new On(S,P);break;case 2:var H=Math.PI/3;M.InnerAngle!==void 0&&(H=be.degToRad(M.InnerAngle.value));var W=0;M.OuterAngle!==void 0&&(W=be.degToRad(M.OuterAngle.value),W=Math.max(W,1)),_=new Vr(S,P,D,H,W,U);break;default:console.warn("THREE.FBXLoader: Unknown light type "+M.LightType.value+", defaulting to a PointLight."),_=new ks(S,P);break}M.CastShadows!==void 0&&M.CastShadows.value===1&&(_.castShadow=!0)}return _},createMesh:function(b,_,M){var T,S=null,P=null,D=[];return b.children.forEach(function(U){_.has(U.ID)&&(S=_.get(U.ID)),M.has(U.ID)&&D.push(M.get(U.ID))}),D.length>1?P=D:D.length>0?P=D[0]:(P=new li({color:13421772}),D.push(P)),"color"in S.attributes&&D.forEach(function(U){U.vertexColors=!0}),S.FBX_Deformer?(D.forEach(function(U){U.skinning=!0}),T=new _r(S,P),T.normalizeSkinWeights()):T=new Ve(S,P),T},createCurve:function(b,_){var M=b.children.reduce(function(S,P){return _.has(P.ID)&&(S=_.get(P.ID)),S},null),T=new ot({color:3342591,linewidth:1});return new Ot(M,T)},getTransformData:function(b,_){var M={};"InheritType"in _&&(M.inheritType=parseInt(_.InheritType.value)),"RotationOrder"in _?M.eulerOrder=E(_.RotationOrder.value):M.eulerOrder="ZYX","Lcl_Translation"in _&&(M.translation=_.Lcl_Translation.value),"PreRotation"in _&&(M.preRotation=_.PreRotation.value),"Lcl_Rotation"in _&&(M.rotation=_.Lcl_Rotation.value),"PostRotation"in _&&(M.postRotation=_.PostRotation.value),"Lcl_Scaling"in _&&(M.scale=_.Lcl_Scaling.value),"ScalingOffset"in _&&(M.scalingOffset=_.ScalingOffset.value),"ScalingPivot"in _&&(M.scalingPivot=_.ScalingPivot.value),"RotationOffset"in _&&(M.rotationOffset=_.RotationOffset.value),"RotationPivot"in _&&(M.rotationPivot=_.RotationPivot.value),b.userData.transformData=M},setLookAtProperties:function(b,_){if("LookAtProperty"in _){var M=i.get(b.ID).children;M.forEach(function(T){if(T.relationship==="LookAtProperty"){var S=t.Objects.Model[T.ID];if("Lcl_Translation"in S){var P=S.Lcl_Translation.value;b.target!==void 0?(b.target.position.fromArray(P),n.add(b.target)):b.lookAt(new L().fromArray(P))}}})}},bindSkeleton:function(b,_,M){var T=this.parsePoseNodes();for(var S in b){var P=b[S],D=i.get(parseInt(P.ID)).parents;D.forEach(function(U){if(_.has(U.ID)){var H=U.ID,W=i.get(H);W.parents.forEach(function(G){if(M.has(G.ID)){var q=M.get(G.ID);q.bind(new Mr(P.bones),T[G.ID])}})}})}},parsePoseNodes:function(){var b={};if("Pose"in t.Objects){var _=t.Objects.Pose;for(var M in _)if(_[M].attrType==="BindPose"){var T=_[M].PoseNode;Array.isArray(T)?T.forEach(function(S){b[S.Node]=new de().fromArray(S.Matrix.a)}):b[T.Node]=new de().fromArray(T.Matrix.a)}}return b},createAmbientLight:function(){if("GlobalSettings"in t&&"AmbientColor"in t.GlobalSettings){var b=t.GlobalSettings.AmbientColor.value,_=b[0],M=b[1],T=b[2];if(_!==0||M!==0||T!==0){var S=new te(_,M,T);n.add(new Fn(S,1))}}},setupMorphMaterials:function(){var b=this;n.traverse(function(_){_.isMesh&&_.geometry.morphAttributes.position&&_.geometry.morphAttributes.position.length&&(Array.isArray(_.material)?_.material.forEach(function(M,T){b.setupMorphMaterial(_,M,T)}):b.setupMorphMaterial(_,_.material))})},setupMorphMaterial:function(b,_,M){var T=b.uuid,S=_.uuid,P=!1;if(n.traverse(function(U){U.isMesh&&(Array.isArray(U.material)?U.material.forEach(function(H){H.uuid===S&&U.uuid!==T&&(P=!0)}):U.material.uuid===S&&U.uuid!==T&&(P=!0))}),P===!0){var D=_.clone();D.morphTargets=!0,M===void 0?b.material=D:b.material[M]=D}else _.morphTargets=!0}};function o(){}o.prototype={constructor:o,parse:function(b){var _=new Map;if("Geometry"in t.Objects){var M=t.Objects.Geometry;for(var T in M){var S=i.get(parseInt(T)),P=this.parseGeometry(S,M[T],b);_.set(parseInt(T),P)}}return _},parseGeometry:function(b,_,M){switch(_.attrType){case"Mesh":return this.parseMeshGeometry(b,_,M);case"NurbsCurve":return this.parseNurbsGeometry(_)}},parseMeshGeometry:function(b,_,M){var T=M.skeletons,S=[],P=b.parents.map(function(G){return t.Objects.Model[G.ID]});if(P.length!==0){var D=b.children.reduce(function(G,q){return T[q.ID]!==void 0&&(G=T[q.ID]),G},null);b.children.forEach(function(G){M.morphTargets[G.ID]!==void 0&&S.push(M.morphTargets[G.ID])});var U=P[0],H={};"RotationOrder"in U&&(H.eulerOrder=E(U.RotationOrder.value)),"InheritType"in U&&(H.inheritType=parseInt(U.InheritType.value)),"GeometricTranslation"in U&&(H.translation=U.GeometricTranslation.value),"GeometricRotation"in U&&(H.rotation=U.GeometricRotation.value),"GeometricScaling"in U&&(H.scale=U.GeometricScaling.value);var W=C(H);return this.genGeometry(_,D,S,W)}},genGeometry:function(b,_,M,T){var S=new ce;b.attrName&&(S.name=b.attrName);var P=this.parseGeoNode(b,_),D=this.genBuffers(P),U=new se(D.vertex,3);if(U.applyMatrix4(T),S.setAttribute("position",U),D.colors.length>0&&S.setAttribute("color",new se(D.colors,3)),_&&(S.setAttribute("skinIndex",new Cn(D.weightsIndices,4)),S.setAttribute("skinWeight",new se(D.vertexWeights,4)),S.FBX_Deformer=_),D.normal.length>0){var H=new wt().getNormalMatrix(T),W=new se(D.normal,3);W.applyNormalMatrix(H),S.setAttribute("normal",W)}if(D.uvs.forEach(function(Oe,xe){var Y="uv"+(xe+1).toString();xe===0&&(Y="uv"),S.setAttribute(Y,new se(D.uvs[xe],2))}),P.material&&P.material.mappingType!=="AllSame"){var G=D.materialIndex[0],q=0;if(D.materialIndex.forEach(function(Oe,xe){Oe!==G&&(S.addGroup(q,xe-q,G),G=Oe,q=xe)}),S.groups.length>0){var Z=S.groups[S.groups.length-1],ue=Z.start+Z.count;ue!==D.materialIndex.length&&S.addGroup(ue,D.materialIndex.length-ue,G)}S.groups.length===0&&S.addGroup(0,D.materialIndex.length,D.materialIndex[0])}return this.addMorphTargets(S,b,M,T),S},parseGeoNode:function(b,_){var M={};if(M.vertexPositions=b.Vertices!==void 0?b.Vertices.a:[],M.vertexIndices=b.PolygonVertexIndex!==void 0?b.PolygonVertexIndex.a:[],b.LayerElementColor&&(M.color=this.parseVertexColors(b.LayerElementColor[0])),b.LayerElementMaterial&&(M.material=this.parseMaterialIndices(b.LayerElementMaterial[0])),b.LayerElementNormal&&(M.normal=this.parseNormals(b.LayerElementNormal[0])),b.LayerElementUV){M.uv=[];for(var T=0;b.LayerElementUV[T];)M.uv.push(this.parseUVs(b.LayerElementUV[T])),T++}if(b.LayerElementUserData){M.userAttrs=[];for(var T=0;b.LayerElementUserData[T];)T++}return M.weightTable={},_!==null&&(M.skeleton=_,_.rawBones.forEach(function(S,P){S.indices.forEach(function(D,U){M.weightTable[D]===void 0&&(M.weightTable[D]=[]),M.weightTable[D].push({id:P,weight:S.weights[U]})})})),M},genBuffers:function(b){var _={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},M=0,T=0,S=!1,P=[],D=[],U=[],H=[],W=[],G=[],q=this;return b.vertexIndices.forEach(function(Z,ue){var Oe=!1;Z<0&&(Z=Z^-1,Oe=!0);var xe=[],Y=[];if(P.push(Z*3,Z*3+1,Z*3+2),b.color){var We=y(ue,M,Z,b.color);U.push(We[0],We[1],We[2])}if(b.skeleton){if(b.weightTable[Z]!==void 0&&b.weightTable[Z].forEach(function($){Y.push($.weight),xe.push($.id)}),Y.length>4){S||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),S=!0);var Te=[0,0,0,0],Re=[0,0,0,0];Y.forEach(function($,ee){var me=$,fe=xe[ee];Re.forEach(function(De,I,F){if(me>De){F[I]=me,me=De;var ie=Te[I];Te[I]=fe,fe=ie}})}),xe=Te,Y=Re}for(;Y.length<4;)Y.push(0),xe.push(0);for(var _e=0;_e<4;++_e)W.push(Y[_e]),G.push(xe[_e])}if(b.normal){var We=y(ue,M,Z,b.normal);D.push(We[0],We[1],We[2])}if(b.material&&b.material.mappingType!=="AllSame")var J=y(ue,M,Z,b.material)[0];b.uv&&b.uv.forEach(function($,ee){var me=y(ue,M,Z,$);H[ee]===void 0&&(H[ee]=[]),H[ee].push(me[0]),H[ee].push(me[1])}),T++,Oe&&(q.genFace(_,b,P,J,D,U,H,W,G,T),M++,T=0,P=[],D=[],U=[],H=[],W=[],G=[])}),_},genFace:function(b,_,M,T,S,P,D,U,H,W){for(var G=2;G<W;G++)b.vertex.push(_.vertexPositions[M[0]]),b.vertex.push(_.vertexPositions[M[1]]),b.vertex.push(_.vertexPositions[M[2]]),b.vertex.push(_.vertexPositions[M[(G-1)*3]]),b.vertex.push(_.vertexPositions[M[(G-1)*3+1]]),b.vertex.push(_.vertexPositions[M[(G-1)*3+2]]),b.vertex.push(_.vertexPositions[M[G*3]]),b.vertex.push(_.vertexPositions[M[G*3+1]]),b.vertex.push(_.vertexPositions[M[G*3+2]]),_.skeleton&&(b.vertexWeights.push(U[0]),b.vertexWeights.push(U[1]),b.vertexWeights.push(U[2]),b.vertexWeights.push(U[3]),b.vertexWeights.push(U[(G-1)*4]),b.vertexWeights.push(U[(G-1)*4+1]),b.vertexWeights.push(U[(G-1)*4+2]),b.vertexWeights.push(U[(G-1)*4+3]),b.vertexWeights.push(U[G*4]),b.vertexWeights.push(U[G*4+1]),b.vertexWeights.push(U[G*4+2]),b.vertexWeights.push(U[G*4+3]),b.weightsIndices.push(H[0]),b.weightsIndices.push(H[1]),b.weightsIndices.push(H[2]),b.weightsIndices.push(H[3]),b.weightsIndices.push(H[(G-1)*4]),b.weightsIndices.push(H[(G-1)*4+1]),b.weightsIndices.push(H[(G-1)*4+2]),b.weightsIndices.push(H[(G-1)*4+3]),b.weightsIndices.push(H[G*4]),b.weightsIndices.push(H[G*4+1]),b.weightsIndices.push(H[G*4+2]),b.weightsIndices.push(H[G*4+3])),_.color&&(b.colors.push(P[0]),b.colors.push(P[1]),b.colors.push(P[2]),b.colors.push(P[(G-1)*3]),b.colors.push(P[(G-1)*3+1]),b.colors.push(P[(G-1)*3+2]),b.colors.push(P[G*3]),b.colors.push(P[G*3+1]),b.colors.push(P[G*3+2])),_.material&&_.material.mappingType!=="AllSame"&&(b.materialIndex.push(T),b.materialIndex.push(T),b.materialIndex.push(T)),_.normal&&(b.normal.push(S[0]),b.normal.push(S[1]),b.normal.push(S[2]),b.normal.push(S[(G-1)*3]),b.normal.push(S[(G-1)*3+1]),b.normal.push(S[(G-1)*3+2]),b.normal.push(S[G*3]),b.normal.push(S[G*3+1]),b.normal.push(S[G*3+2])),_.uv&&_.uv.forEach(function(q,Z){b.uvs[Z]===void 0&&(b.uvs[Z]=[]),b.uvs[Z].push(D[Z][0]),b.uvs[Z].push(D[Z][1]),b.uvs[Z].push(D[Z][(G-1)*2]),b.uvs[Z].push(D[Z][(G-1)*2+1]),b.uvs[Z].push(D[Z][G*2]),b.uvs[Z].push(D[Z][G*2+1])})},addMorphTargets:function(b,_,M,T){if(M.length!==0){b.morphTargetsRelative=!0,b.morphAttributes.position=[];var S=this;M.forEach(function(P){P.rawTargets.forEach(function(D){var U=t.Objects.Geometry[D.geoID];U!==void 0&&S.genMorphGeometry(b,_,U,T,D.name)})})}},genMorphGeometry:function(b,_,M,T,S){for(var P=_.PolygonVertexIndex!==void 0?_.PolygonVertexIndex.a:[],D=M.Vertices!==void 0?M.Vertices.a:[],U=M.Indexes!==void 0?M.Indexes.a:[],H=b.attributes.position.count*3,W=new Float32Array(H),G=0;G<U.length;G++){var q=U[G]*3;W[q]=D[G*3],W[q+1]=D[G*3+1],W[q+2]=D[G*3+2]}var Z={vertexIndices:P,vertexPositions:W},ue=this.genBuffers(Z),Oe=new se(ue.vertex,3);Oe.name=S||M.attrName,Oe.applyMatrix4(T),b.morphAttributes.position.push(Oe)},parseNormals:function(b){var _=b.MappingInformationType,M=b.ReferenceInformationType,T=b.Normals.a,S=[];return M==="IndexToDirect"&&("NormalIndex"in b?S=b.NormalIndex.a:"NormalsIndex"in b&&(S=b.NormalsIndex.a)),{dataSize:3,buffer:T,indices:S,mappingType:_,referenceType:M}},parseUVs:function(b){var _=b.MappingInformationType,M=b.ReferenceInformationType,T=b.UV.a,S=[];return M==="IndexToDirect"&&(S=b.UVIndex.a),{dataSize:2,buffer:T,indices:S,mappingType:_,referenceType:M}},parseVertexColors:function(b){var _=b.MappingInformationType,M=b.ReferenceInformationType,T=b.Colors.a,S=[];return M==="IndexToDirect"&&(S=b.ColorIndex.a),{dataSize:4,buffer:T,indices:S,mappingType:_,referenceType:M}},parseMaterialIndices:function(b){var _=b.MappingInformationType,M=b.ReferenceInformationType;if(_==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:M};for(var T=b.Materials.a,S=[],P=0;P<T.length;++P)S.push(P);return{dataSize:1,buffer:T,indices:S,mappingType:_,referenceType:M}},parseNurbsGeometry:function(b){if(fn===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new ce;var _=parseInt(b.Order);if(isNaN(_))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",b.Order,b.id),new ce;for(var M=_-1,T=b.KnotVector.a,S=[],P=b.Points.a,D=0,U=P.length;D<U;D+=4)S.push(new ke().fromArray(P,D));var H,W;if(b.Form==="Closed")S.push(S[0]);else if(b.Form==="Periodic"){H=M,W=T.length-1-H;for(var D=0;D<M;++D)S.push(S[D])}var G=new fn(M,T,S,H,W),q=G.getPoints(S.length*7),Z=new Float32Array(q.length*3);q.forEach(function(Oe,xe){Oe.toArray(Z,xe*3)});var ue=new ce;return ue.setAttribute("position",new Se(Z,3)),ue}};function a(){}a.prototype={constructor:a,parse:function(){var b=[],_=this.parseClips();if(_!==void 0)for(var M in _){var T=_[M],S=this.addClip(T);b.push(S)}return b},parseClips:function(){if(t.Objects.AnimationCurve!==void 0){var b=this.parseAnimationCurveNodes();this.parseAnimationCurves(b);var _=this.parseAnimationLayers(b),M=this.parseAnimStacks(_);return M}},parseAnimationCurveNodes:function(){var b=t.Objects.AnimationCurveNode,_=new Map;for(var M in b){var T=b[M];if(T.attrName.match(/S|R|T|DeformPercent/)!==null){var S={id:T.id,attr:T.attrName,curves:{}};_.set(S.id,S)}}return _},parseAnimationCurves:function(b){var _=t.Objects.AnimationCurve;for(var M in _){var T={id:_[M].id,times:_[M].KeyTime.a.map(m),values:_[M].KeyValueFloat.a},S=i.get(T.id);if(S!==void 0){var P=S.parents[0].ID,D=S.parents[0].relationship;D.match(/X/)?b.get(P).curves.x=T:D.match(/Y/)?b.get(P).curves.y=T:D.match(/Z/)?b.get(P).curves.z=T:D.match(/d|DeformPercent/)&&b.has(P)&&(b.get(P).curves.morph=T)}}},parseAnimationLayers:function(b){var _=t.Objects.AnimationLayer,M=new Map;for(var T in _){var S=[],P=i.get(parseInt(T));if(P!==void 0){var D=P.children;D.forEach(function(U,H){if(b.has(U.ID)){var W=b.get(U.ID);if(W.curves.x!==void 0||W.curves.y!==void 0||W.curves.z!==void 0){if(S[H]===void 0){var G=i.get(U.ID).parents.filter(function(Y){return Y.relationship!==void 0})[0].ID;if(G!==void 0){var q=t.Objects.Model[G.toString()],Z={modelName:q.attrName?mt.sanitizeNodeName(q.attrName):"",ID:q.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};n.traverse(function(Y){Y.ID===q.id&&(Z.transform=Y.matrix,Y.userData.transformData&&(Z.eulerOrder=Y.userData.transformData.eulerOrder))}),Z.transform||(Z.transform=new de),"PreRotation"in q&&(Z.preRotation=q.PreRotation.value),"PostRotation"in q&&(Z.postRotation=q.PostRotation.value),S[H]=Z}}S[H]&&(S[H][W.attr]=W)}else if(W.curves.morph!==void 0){if(S[H]===void 0){var ue=i.get(U.ID).parents.filter(function(Re){return Re.relationship!==void 0})[0].ID,Oe=i.get(ue).parents[0].ID,xe=i.get(Oe).parents[0].ID,G=i.get(xe).parents[0].ID,q=t.Objects.Model[G],Z={modelName:q.attrName?mt.sanitizeNodeName(q.attrName):"",morphName:t.Objects.Deformer[ue].attrName};S[H]=Z}S[H][W.attr]=W}}}),M.set(parseInt(T),S)}}return M},parseAnimStacks:function(b){var _=t.Objects.AnimationStack,M={};for(var T in _){var S=i.get(parseInt(T)).children;S.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");var P=b.get(S[0].ID);M[T]={name:_[T].attrName,layer:P}}return M},addClip:function(b){var _=[],M=this;return b.layer.forEach(function(T){_=_.concat(M.generateTracks(T))}),new Gt(b.name,-1,_)},generateTracks:function(b){var _=[],M=new L,T=new Ue,S=new L;if(b.transform&&b.transform.decompose(M,T,S),M=M.toArray(),T=new vt().setFromQuaternion(T,b.eulerOrder).toArray(),S=S.toArray(),b.T!==void 0&&Object.keys(b.T.curves).length>0){var P=this.generateVectorTrack(b.modelName,b.T.curves,M,"position");P!==void 0&&_.push(P)}if(b.R!==void 0&&Object.keys(b.R.curves).length>0){var D=this.generateRotationTrack(b.modelName,b.R.curves,T,b.preRotation,b.postRotation,b.eulerOrder);D!==void 0&&_.push(D)}if(b.S!==void 0&&Object.keys(b.S.curves).length>0){var U=this.generateVectorTrack(b.modelName,b.S.curves,S,"scale");U!==void 0&&_.push(U)}if(b.DeformPercent!==void 0){var H=this.generateMorphTrack(b);H!==void 0&&_.push(H)}return _},generateVectorTrack:function(b,_,M,T){var S=this.getTimesForAllAxes(_),P=this.getKeyframeTrackValues(S,_,M);return new Bn(b+"."+T,S,P)},generateRotationTrack:function(b,_,M,T,S,P){_.x!==void 0&&(this.interpolateRotations(_.x),_.x.values=_.x.values.map(be.degToRad)),_.y!==void 0&&(this.interpolateRotations(_.y),_.y.values=_.y.values.map(be.degToRad)),_.z!==void 0&&(this.interpolateRotations(_.z),_.z.values=_.z.values.map(be.degToRad));var D=this.getTimesForAllAxes(_),U=this.getKeyframeTrackValues(D,_,M);T!==void 0&&(T=T.map(be.degToRad),T.push(P),T=new vt().fromArray(T),T=new Ue().setFromEuler(T)),S!==void 0&&(S=S.map(be.degToRad),S.push(P),S=new vt().fromArray(S),S=new Ue().setFromEuler(S).inverse());for(var H=new Ue,W=new vt,G=[],q=0;q<U.length;q+=3)W.set(U[q],U[q+1],U[q+2],P),H.setFromEuler(W),T!==void 0&&H.premultiply(T),S!==void 0&&H.multiply(S),H.toArray(G,q/3*4);return new Os(b+".quaternion",D,G)},generateMorphTrack:function(b){var _=b.DeformPercent.curves.morph,M=_.values.map(function(S){return S/100}),T=n.getObjectByName(b.modelName).morphTargetDictionary[b.morphName];return new In(b.modelName+".morphTargetInfluences["+T+"]",_.times,M)},getTimesForAllAxes:function(b){var _=[];return b.x!==void 0&&(_=_.concat(b.x.times)),b.y!==void 0&&(_=_.concat(b.y.times)),b.z!==void 0&&(_=_.concat(b.z.times)),_=_.sort(function(M,T){return M-T}).filter(function(M,T,S){return S.indexOf(M)==T}),_},getKeyframeTrackValues:function(b,_,M){var T=M,S=[],P=-1,D=-1,U=-1;return b.forEach(function(H){if(_.x&&(P=_.x.times.indexOf(H)),_.y&&(D=_.y.times.indexOf(H)),_.z&&(U=_.z.times.indexOf(H)),P!==-1){var W=_.x.values[P];S.push(W),T[0]=W}else S.push(T[0]);if(D!==-1){var G=_.y.values[D];S.push(G),T[1]=G}else S.push(T[1]);if(U!==-1){var q=_.z.values[U];S.push(q),T[2]=q}else S.push(T[2])}),S},interpolateRotations:function(b){for(var _=1;_<b.values.length;_++){var M=b.values[_-1],T=b.values[_]-M,S=Math.abs(T);if(S>=180){for(var P=S/180,D=T/P,U=M+D,H=b.times[_-1],W=b.times[_]-H,G=W/P,q=H+G,Z=[],ue=[];q<b.times[_];)Z.push(q),q+=G,ue.push(U),U+=D;b.times=k(b.times,_,Z),b.values=k(b.values,_,ue)}}}};function l(){}l.prototype={constructor:l,getPrevNode:function(){return this.nodeStack[this.currentIndent-2]},getCurrentNode:function(){return this.nodeStack[this.currentIndent-1]},getCurrentProp:function(){return this.currentProp},pushStack:function(b){this.nodeStack.push(b),this.currentIndent+=1},popStack:function(){this.nodeStack.pop(),this.currentIndent-=1},setCurrentProp:function(b,_){this.currentProp=b,this.currentPropName=_},parse:function(b){this.currentIndent=0,this.allNodes=new d,this.nodeStack=[],this.currentProp=[],this.currentPropName="";var _=this,M=b.split(/[\r\n]+/);return M.forEach(function(T,S){var P=T.match(/^[\s\t]*;/),D=T.match(/^[\s\t]*$/);if(!(P||D)){var U=T.match("^\\t{"+_.currentIndent+"}(\\w+):(.*){",""),H=T.match("^\\t{"+_.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),W=T.match("^\\t{"+(_.currentIndent-1)+"}}");U?_.parseNodeBegin(T,U):H?_.parseNodeProperty(T,H,M[++S]):W?_.popStack():T.match(/^[^\s\t}]/)&&_.parseNodePropertyContinued(T)}}),this.allNodes},parseNodeBegin:function(b,_){var M=_[1].trim().replace(/^"/,"").replace(/"$/,""),T=_[2].split(",").map(function(U){return U.trim().replace(/^"/,"").replace(/"$/,"")}),S={name:M},P=this.parseNodeAttr(T),D=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(M,S):M in D?(M==="PoseNode"?D.PoseNode.push(S):D[M].id!==void 0&&(D[M]={},D[M][D[M].id]=D[M]),P.id!==""&&(D[M][P.id]=S)):typeof P.id=="number"?(D[M]={},D[M][P.id]=S):M!=="Properties70"&&(M==="PoseNode"?D[M]=[S]:D[M]=S),typeof P.id=="number"&&(S.id=P.id),P.name!==""&&(S.attrName=P.name),P.type!==""&&(S.attrType=P.type),this.pushStack(S)},parseNodeAttr:function(b){var _=b[0];b[0]!==""&&(_=parseInt(b[0]),isNaN(_)&&(_=b[0]));var M="",T="";return b.length>1&&(M=b[1].replace(/^(\w+)::/,""),T=b[2]),{id:_,name:M,type:T}},parseNodeProperty:function(b,_,M){var T=_[1].replace(/^"/,"").replace(/"$/,"").trim(),S=_[2].replace(/^"/,"").replace(/"$/,"").trim();T==="Content"&&S===","&&(S=M.replace(/"/g,"").replace(/,$/,"").trim());var P=this.getCurrentNode(),D=P.name;if(D==="Properties70"){this.parseNodeSpecialProperty(b,T,S);return}if(T==="C"){var U=S.split(",").slice(1),H=parseInt(U[0]),W=parseInt(U[1]),G=S.split(",").slice(3);G=G.map(function(q){return q.trim().replace(/^"/,"")}),T="connections",S=[H,W],O(S,G),P[T]===void 0&&(P[T]=[])}T==="Node"&&(P.id=S),T in P&&Array.isArray(P[T])?P[T].push(S):T!=="a"?P[T]=S:P.a=S,this.setCurrentProp(P,T),T==="a"&&S.slice(-1)!==","&&(P.a=A(S))},parseNodePropertyContinued:function(b){var _=this.getCurrentNode();_.a+=b,b.slice(-1)!==","&&(_.a=A(_.a))},parseNodeSpecialProperty:function(b,_,M){var T=M.split('",').map(function(W){return W.trim().replace(/^\"/,"").replace(/\s/,"_")}),S=T[0],P=T[1],D=T[2],U=T[3],H=T[4];switch(P){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":H=parseFloat(H);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":H=A(H);break}this.getPrevNode()[S]={type:P,type2:D,flag:U,value:H},this.setCurrentProp(this.getPrevNode(),S)}};function c(){}c.prototype={constructor:c,parse:function(b){var _=new u(b);_.skip(23);for(var M=_.getUint32(),T=new d;!this.endOfContent(_);){var S=this.parseNode(_,M);S!==null&&T.add(S.name,S)}return T},endOfContent:function(b){return b.size()%16===0?(b.getOffset()+160+16&-16)>=b.size():b.getOffset()+160+16>=b.size()},parseNode:function(b,_){var M={},T=_>=7500?b.getUint64():b.getUint32(),S=_>=7500?b.getUint64():b.getUint32();_>=7500?b.getUint64():b.getUint32();var P=b.getUint8(),D=b.getString(P);if(T===0)return null;for(var U=[],H=0;H<S;H++)U.push(this.parseProperty(b));var W=U.length>0?U[0]:"",G=U.length>1?U[1]:"",q=U.length>2?U[2]:"";for(M.singleProperty=S===1&&b.getOffset()===T;T>b.getOffset();){var Z=this.parseNode(b,_);Z!==null&&this.parseSubNode(D,M,Z)}return M.propertyList=U,typeof W=="number"&&(M.id=W),G!==""&&(M.attrName=G),q!==""&&(M.attrType=q),D!==""&&(M.name=D),M},parseSubNode:function(b,_,M){if(M.singleProperty===!0){var T=M.propertyList[0];Array.isArray(T)?(_[M.name]=M,M.a=T):_[M.name]=T}else if(b==="Connections"&&M.name==="C"){var S=[];M.propertyList.forEach(function(q,Z){Z!==0&&S.push(q)}),_.connections===void 0&&(_.connections=[]),_.connections.push(S)}else if(M.name==="Properties70"){var P=Object.keys(M);P.forEach(function(q){_[q]=M[q]})}else if(b==="Properties70"&&M.name==="P"){var D=M.propertyList[0],U=M.propertyList[1],H=M.propertyList[2],W=M.propertyList[3],G;D.indexOf("Lcl ")===0&&(D=D.replace("Lcl ","Lcl_")),U.indexOf("Lcl ")===0&&(U=U.replace("Lcl ","Lcl_")),U==="Color"||U==="ColorRGB"||U==="Vector"||U==="Vector3D"||U.indexOf("Lcl_")===0?G=[M.propertyList[4],M.propertyList[5],M.propertyList[6]]:G=M.propertyList[4],_[D]={type:U,type2:H,flag:W,value:G}}else _[M.name]===void 0?typeof M.id=="number"?(_[M.name]={},_[M.name][M.id]=M):_[M.name]=M:M.name==="PoseNode"?(Array.isArray(_[M.name])||(_[M.name]=[_[M.name]]),_[M.name].push(M)):_[M.name][M.id]===void 0&&(_[M.name][M.id]=M)},parseProperty:function(b){var _=b.getString(1);switch(_){case"C":return b.getBoolean();case"D":return b.getFloat64();case"F":return b.getFloat32();case"I":return b.getInt32();case"L":return b.getInt64();case"R":var M=b.getUint32();return b.getArrayBuffer(M);case"S":var M=b.getUint32();return b.getString(M);case"Y":return b.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var T=b.getUint32(),S=b.getUint32(),P=b.getUint32();if(S===0)switch(_){case"b":case"c":return b.getBooleanArray(T);case"d":return b.getFloat64Array(T);case"f":return b.getFloat32Array(T);case"i":return b.getInt32Array(T);case"l":return b.getInt64Array(T)}typeof zc>"u"&&console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var D=new zc.Inflate(new Uint8Array(b.getArrayBuffer(P))),U=new u(D.decompress().buffer);switch(_){case"b":case"c":return U.getBooleanArray(T);case"d":return U.getFloat64Array(T);case"f":return U.getFloat32Array(T);case"i":return U.getInt32Array(T);case"l":return U.getInt64Array(T)}default:throw new Error("THREE.FBXLoader: Unknown property type "+_)}}};function u(b,_){this.dv=new DataView(b),this.offset=0,this.littleEndian=_!==void 0?_:!0}u.prototype={constructor:u,getOffset:function(){return this.offset},size:function(){return this.dv.buffer.byteLength},skip:function(b){this.offset+=b},getBoolean:function(){return(this.getUint8()&1)===1},getBooleanArray:function(b){for(var _=[],M=0;M<b;M++)_.push(this.getBoolean());return _},getUint8:function(){var b=this.dv.getUint8(this.offset);return this.offset+=1,b},getInt16:function(){var b=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,b},getInt32:function(){var b=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,b},getInt32Array:function(b){for(var _=[],M=0;M<b;M++)_.push(this.getInt32());return _},getUint32:function(){var b=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,b},getInt64:function(){var b,_;return this.littleEndian?(b=this.getUint32(),_=this.getUint32()):(_=this.getUint32(),b=this.getUint32()),_&2147483648?(_=~_&4294967295,b=~b&4294967295,b===4294967295&&(_=_+1&4294967295),b=b+1&4294967295,-(_*4294967296+b)):_*4294967296+b},getInt64Array:function(b){for(var _=[],M=0;M<b;M++)_.push(this.getInt64());return _},getUint64:function(){var b,_;return this.littleEndian?(b=this.getUint32(),_=this.getUint32()):(_=this.getUint32(),b=this.getUint32()),_*4294967296+b},getFloat32:function(){var b=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,b},getFloat32Array:function(b){for(var _=[],M=0;M<b;M++)_.push(this.getFloat32());return _},getFloat64:function(){var b=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,b},getFloat64Array:function(b){for(var _=[],M=0;M<b;M++)_.push(this.getFloat64());return _},getArrayBuffer:function(b){var _=this.dv.buffer.slice(this.offset,this.offset+b);return this.offset+=b,_},getString:function(b){for(var _=[],M=0;M<b;M++)_[M]=this.getUint8();var T=_.indexOf(0);return T>=0&&(_=_.slice(0,T)),js.decodeText(new Uint8Array(_))}};function d(){}d.prototype={constructor:d,add:function(b,_){this[b]=_}};function h(b){var _="Kaydara FBX Binary  \0";return b.byteLength>=_.length&&_===R(b,0,_.length)}function p(b){var _=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],M=0;function T(D){var U=b[D-1];return b=b.slice(M+D),M++,U}for(var S=0;S<_.length;++S){var P=T(1);if(P===_[S])return!1}return!0}function f(b){var _=/FBXVersion: (\d+)/,M=b.match(_);if(M){var T=parseInt(M[1]);return T}throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function m(b){return b/46186158e3}var w=[];function y(b,_,M,T){var S;switch(T.mappingType){case"ByPolygonVertex":S=b;break;case"ByPolygon":S=_;break;case"ByVertice":S=M;break;case"AllSame":S=T.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+T.mappingType)}T.referenceType==="IndexToDirect"&&(S=T.indices[S]);var P=S*T.dataSize,D=P+T.dataSize;return V(w,T.buffer,P,D)}var g=new vt,v=new L;function C(b){var _=new de,M=new de,T=new de,S=new de,P=new de,D=new de,U=new de,H=new de,W=new de,G=new de,q=new de,Z=b.inheritType?b.inheritType:0;if(b.translation&&_.setPosition(v.fromArray(b.translation)),b.preRotation){var ue=b.preRotation.map(be.degToRad);ue.push(b.eulerOrder),M.makeRotationFromEuler(g.fromArray(ue))}if(b.rotation){var ue=b.rotation.map(be.degToRad);ue.push(b.eulerOrder),T.makeRotationFromEuler(g.fromArray(ue))}if(b.postRotation){var ue=b.postRotation.map(be.degToRad);ue.push(b.eulerOrder),S.makeRotationFromEuler(g.fromArray(ue))}b.scale&&P.scale(v.fromArray(b.scale)),b.scalingOffset&&U.setPosition(v.fromArray(b.scalingOffset)),b.scalingPivot&&D.setPosition(v.fromArray(b.scalingPivot)),b.rotationOffset&&H.setPosition(v.fromArray(b.rotationOffset)),b.rotationPivot&&W.setPosition(v.fromArray(b.rotationPivot)),b.parentMatrixWorld&&(G=b.parentMatrixWorld);var Oe=M.multiply(T).multiply(S),xe=new de;G.extractRotation(xe);var Y=new de;Y.copyPosition(G);var We=new de;We.getInverse(xe).multiply(G);var Te=new de;if(Z===0)Te.copy(xe).multiply(Oe).multiply(We).multiply(P);else if(Z===1)Te.copy(xe).multiply(We).multiply(Oe).multiply(P);else{var Re=new de().getInverse(P),_e=new de().multiply(We).multiply(Re);Te.copy(xe).multiply(Oe).multiply(_e).multiply(P)}var J=new de().getInverse(W),$=new de().getInverse(D),ee=new de;ee.copy(_).multiply(H).multiply(W).multiply(M).multiply(T).multiply(S).multiply(J).multiply(U).multiply(D).multiply(P).multiply($);var me=new de().copyPosition(ee),fe=new de().copy(G).multiply(me);return q.copyPosition(fe),ee=new de().multiply(q).multiply(Te),ee}function E(b){b=b||0;var _=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return b===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),_[0]):_[b]}function A(b){var _=b.split(",").map(function(M){return parseFloat(M)});return _}function R(b,_,M){return _===void 0&&(_=0),M===void 0&&(M=b.byteLength),js.decodeText(new Uint8Array(b,_,M))}function O(b,_){for(var M=0,T=b.length,S=_.length;M<S;M++,T++)b[T]=_[M]}function V(b,_,M,T){for(var S=M,P=0;S<T;S++,P++)b[P]=_[S];return b}function k(b,_,M){return b.slice(0,_).concat(M).concat(b.slice(_))}return s}();var Si=class{constructor(i={}){this.pxlTimer=null,this.pxlUtils=null,this.pxlQuality=null,this.pxlVideo=null,this.pxlCamera=null,this.pxlAutoCam=null,this.pxlUser=null,this.pxlEnv=null,this.pxlAnim=null,this.pxlDevice=null,this.pxlShaders=null,this.runDebugger=!1,this.assetRoot=this.findInDict(i,"assetRoot","images/assets/"),this.guiRoot=this.findInDict(i,"guiRoot","images/GUI/"),this.roomRoot=this.findInDict(i,"roomRoot","images/rooms/"),this.vidRoot=this.findInDict(i,"vidRoot","images/screenContent/"),this.workerList=[]}setDependencies(i){this.pxlTimer=i.pxlTimer,this.pxlUtils=i.pxlUtils,this.pxlQuality=i.pxlQuality,this.pxlVideo=i.pxlVideo,this.pxlCamera=i.pxlCamera,this.pxlAutoCam=i.pxlAutoCam,this.pxlUser=i.pxlUser,this.pxlEnv=i.pxlEnv,this.pxlAnim=i.pxlAnim,this.pxlDevice=i.pxlDevice,this.pxlShaders=i.pxlShaders}log(...i){this.runDebugger&&(console.log("---"),i.forEach(n=>{console.log(n)}))}findInDict(i,n,s){return i.hasOwnProperty(n)?i[n]:(i[n]=s,s)}checkForUserData(i,n,s){if(s.hasOwnProperty("userData")){if(s.userData.hasOwnProperty("GlowPass")&&s.userData.GlowPass&&(i.geoList.GlowPass||(i.geoList.GlowPass=[]),i.geoList.GlowPass.push(s)),s.userData.hasOwnProperty("GlowPassMask")&&s.userData.GlowPass&&(i.geoList.GlowPassMask||(i.geoList.GlowPassMask=[]),i.geoList.GlowPassMask.push(s)),s.userData.hasOwnProperty("castShadow")&&s.userData.castShadow&&(s.castShadow=!0),s.userData.hasOwnProperty("receiveShadow")&&s.userData.receiveShadow&&(s.receiveShadow=!0),s.userData.hasOwnProperty("Shader")&&s.userData.Shader!=""){let r=s.userData.Shader.trim();i.shaderGeoList||(i.shaderGeoList={}),i.shaderGeoList[s.name]=s}s.userData.hasOwnProperty("Emitter")&&s.userData.Emitter!=""&&(i.emitterList||(i.emitterList={}),i.emitterList[s.userData.Emitter]||(i.emitterList[s.userData.Emitter]={},i.emitterList[s.userData.Emitter].Emitter=[],i.emitterList[s.userData.Emitter].Particles=[]),i.emitterList[s.userData.Emitter].Emitter.push(s)),s.userData.hasOwnProperty("Hover")&&s.userData.Hover&&(i.hoverableExists=!0,i.hoverableList.push(s)),s.userData.hasOwnProperty("Click")&&s.userData.Click&&(i.clickableExists=!0,i.clickableList.push(s)),this.checkObjectInstancing(i,n,s),s.userData.hasOwnProperty("Scripted")&&(i.geoList.hasOwnProperty("Scripted")||(i.geoList.Scripted={}),i.geoList.Scripted[s.name]=s,s.children.forEach(o=>{if(o.name.includes("Geo")){let a=s.position,l=s.rotation,c=s.scale;o.position.set(a.x,a.y,a.z),o.rotation.set(l.x,l.y,l.z),o.scale.set(c.x,c.y,c.z),o.updateMatrix(),o.children.forEach(d=>{this.checkForUserData(i,n,d),d.type=="Group"&&(d.position.set(a.x+d.position.x,a.y+d.position.y,a.z+d.position.z),d.rotation.set(l.x,l.y,l.z),d.scale.set(c.x,c.y,c.z)),d.updateMatrix()})}else if(o.name.includes("Colliders")){let a=s.position,l=s.rotation,c=s.scale;o.position.set(a.x,a.y,a.z),o.rotation.set(l.x,l.y,l.z),o.scale.set(c.x,c.y,c.z),o.updateMatrix(),o.visible=!1}}))}}canAppendChildren(i,n){if(n.type!="Group")return!1;let s=!0;return i.geoList.hasOwnProperty("Scripted")&&i.geoList.Scripted.hasOwnProperty(n.name)&&(console.log(i.geoList.Scripted,i.geoList.Scripted.hasOwnProperty(n.name),n.name),s=!1),s}canAddToScene(i,n){let s=!0;return n.hasOwnProperty("userData")&&n.userData.hasOwnProperty("Instance")&&i.hasOwnProperty("baseInstancesNames")&&i.baseInstancesNames.hasOwnProperty(n.userData.Instance)&&(s=!1),s}checkIsGlassLiquid(i,n,s,r){let o=!1;if(s.userData.hasOwnProperty("isGlass")&&s.userData.isGlass&&(o=!0),s.userData.hasOwnProperty("isLiquid")&&s.userData.isLiquid&&(o=!0),!o)return!1;if(this.log("Glass Detected - ",s.name),!i.glassGroup){let f=new Rt;i.glassGroup=f,n.add(f)}let a=s.material.clone();s.material=a,s.material.transparent=!0,s.material.opacity=.5,s.material.shininess=20,s.material.specular=s.material.color.clone(),s.material.specular.r=s.material.specular.r*.5+.1,s.material.specular.g=s.material.specular.g*.5+.1,s.material.specular.b=s.material.specular.b*.5+.1,s.material.side=ft,s.material.depthWrite=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,i.glassList.push(s),i.glassGroup.add(s);let l=s.geometry.clone(),c=s.material.clone();c.copy(s.material);let u=new Ve(l,c);u.name=s.name+"_Front",u.material.shininess=40,u.material.side=At,u.matrixAutoUpdate=!1,u.renderOrder=2;let d=s.position,h=s.rotation,p=s.scale;return u.rotation.set(h.x,h.y,h.z),u.position.set(d.x,d.y,d.z),u.scale.set(p.x,p.y,p.z),u.updateMatrix(),s.parent.add(u),i.glassList.push(u),i.glassGroup.add(u),o}checkObjectInstancing(i,n,s){if(!i.hasOwnProperty("baseInstancesNames")||!i.hasOwnProperty("baseInstancesList"))return!1;if(s.hasOwnProperty("userData")&&s.userData.hasOwnProperty("Instance")&&i.baseInstancesList.hasOwnProperty(s.userData.Instance)){let r=s.name;this.log("Generate Instance - ",r),i.geoList.hasOwnProperty("InstancesObjects")||(i.geoList.InstancesObjects={});let o=s.position,a=s.rotation,l=s.scale,c=i.baseInstancesList[s.userData.Instance];if(s.type=="Mesh"){let u=new ws(c.geometry,c.material,s.geometry.attributes.position.count);u.instanceMatrix.setUsage(nn),u.name=r+"Geo";let d=new de,h=new L,p=new L,f=new Ue,m=new L(1,1,1),w=s.geometry.attributes.hasOwnProperty("color"),y={};for(let g=0;g<s.geometry.attributes.position.count;g++){h.fromBufferAttribute(s.geometry.attributes.position,g);let v=h.toArray();if(v=v.join(","),!y.hasOwnProperty(v)){p.fromBufferAttribute(s.geometry.attributes.normal,g);let C=new vt(0,Math.random()*2*Math.PI,0);f.setFromEuler(C);let E=m;if(w){let A=s.geometry.attributes.color.getX(g);E=new L(A,A,A)}d.compose(h,f,E),u.setMatrixAt(g,d),y[v]=!0}}u.visible=!0,u.updateMatrix(),i.geoList.InstancesObjects[r]=u,s.parent.add(u),s.visible=!1,s.parent.remove(s)}else{let u=new ws(c.geometry,c.material,1);u.instanceMatrix.setUsage(nn),u.name=r+"Geo";let d=!1;if(s.userData.hasOwnProperty("fixInstMatrix")&&(d=!!s.userData.fixInstMatrix),d)u.rotation.set(a.x,a.y,a.z),u.position.set(o.x,o.y,o.z),u.scale.set(l.x,l.y,l.z);else{let h=new de;h.compose(o,new Ue().setFromEuler(a),l),u.setMatrixAt(0,h)}u.visible=!0,u.updateMatrix(),i.geoList.InstancesObjects[r]=u,s.parent.add(u),s.visible=!1,s.parent.remove(s)}}}loadSceneFBX(i,n,s,r,o,a){o!=""&&(this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[o]=0);let l=0,c=0;var u=new io;return u.load(i,d=>{let h=d.children,p={},f=[];h.forEach((m,w)=>{f.push(m.name),p[m.name]=w}),f.forEach(m=>{if(m.includes("Camera")&&(h[p[m]].children.forEach((y,g)=>{if(y.matrixAutoUpdate=!1,y.name.includes("Position")){let v=y.position.clone();this.pxlCamera.cameraPrevPos=v.clone(),this.pxlCamera.camera.position.copy(v),this.pxlCamera.cameraPos.copy(v),this.pxlCamera.camera.updateMatrixWorld(),this.pxlCamera.cameraBooted=!0,this.pxlEnv.camInitPos=v,this.pxlEnv.camThumbPos=this.pxlEnv.camThumbPos.clone().add(v.clone())}else if(y.name.includes("LookAt")){let v=y.position.clone();this.pxlCamera.cameraAimTarget.position.copy(v),this.pxlCamera.camera.lookAt(v),this.pxlCamera.camera.updateMatrixWorld(),this.pxlCamera.cameraPrevLookAt=new yt,this.pxlEnv.camInitLookAt=v,this.pxlEnv.camThumbLookAt=this.pxlEnv.camThumbLookAt.clone().add(v.clone())}else if(y.name.includes("ReturnPosition")){let v=y.position.clone();this.pxlEnv.camReturnPos=v}else if(y.name.includes("ReturnLookAt")){let v=y.position.clone();this.pxlEnv.camReturnLookAt=v}}),this.pxlDevice.touchMouseData.initialQuat=this.pxlCamera.camera.quaternion.clone()),m.includes("Items")){let w=h[p[m]].children,y=null,g=null,v=null,C=null,E=null;for(;w.length>0;){let A=w.pop();A.type=="Group"&&(A.children.forEach(O=>{O.name.includes("Item")?(A.name.includes("LowGravity")?(g==null&&(g=new we({uniforms:{color:{value:O.material.emissive.clone()},alphaMap:{type:"t",value:O.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.objects.itemVert(),fragmentShader:this.pxlShaders.objects.itemFrag(),transparent:!0,side:Ft,depthTest:!0,depthWrite:!1})),O.material=g):A.name.includes("LizardKing")?(v==null&&(v=O.material.clone(),v.emissiveMap=v.map,v.emissive=new te(8421504)),O.material=v):A.name.includes("StarField")||A.name.includes("InfinityZoom")&&(C==null&&(C=new we({uniforms:{color:{value:O.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.objects.itemZoomFrag(),transparent:!0,side:Ft,depthTest:!0,depthWrite:!0})),O.material=C),this.pxlUser.itemList[A.name]=O):O.name.includes("ItemBase")&&(y==null&&(y=new we({uniforms:{color:{value:O.material.emissive.clone()},alphaMap:{type:"t",value:O.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemBaseRotateRate}},vertexShader:this.pxlShaders.objects.itemBaseVert(),fragmentShader:this.pxlShaders.objects.itemBaseFrag(),transparent:!0,side:Ft,depthTest:!0,depthWrite:!1})),O.material=y,this.pxlUser.itemBaseList.push(O))}),a[0].add(A),this.pxlUser.itemGroupList[A.name]=A,this.pxlUser.itemListNames.push(A.name))}}}),o!=""&&(this.pxlEnv.geoList[o]=d,this.pxlEnv.geoLoadList[o]=1),this.pxlEnv.geoLoadList[o]=1},void 0,d=>{o!=""&&(this.pxlEnv.geoLoadList[o]=1)}),u}loadRoomFBX(i,n,s,r){s==""&&(s=i.roomName),this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[s]=0;let o=0,a=i.scene;var l=new io;return l.load(n,c=>{let u=c.children,d={},h=[];u.forEach((f,m)=>{let w=f.name.split("_")[0];h.push(w),d[w]=m});let p=0;if(h.indexOf("Camera")>-1){let f=u[d.Camera].children;this.log("Camera - ",u[d.Camera]),f.forEach((m,w)=>{if(m.matrixAutoUpdate=!1,m.name.includes("Position")){let y=m.position.clone();i.cameraBooted=!0,i.camInitPos=y}else if(m.name.includes("LookAt")){let y=m.position.clone();i.camInitLookAt=y}else if(m.name.includes("ReturnPosition")){let y=m.position.clone();i.camReturnPos=y}else if(m.name.includes("ReturnLookAt")){let y=m.position.clone();i.camReturnLookAt=y}})}if(h.indexOf("AutoCamPaths")>-1){let f=u[d.AutoCamPaths].children;for(this.log("AutoCamPaths - ",u[d.AutoCamPaths]),this.pxlAutoCam.autoCamPaths[i.roomName]=[];f.length>0;){let m=f.pop();if(m.type=="Group"){let w={};m.children.forEach(g=>{g.matrixAutoUpdate=!1,w[g.name]=g}),m.visible=!1,m.matrixAutoUpdate=!1,a.add(m),this.pxlAutoCam.autoCamPaths[i.roomName].push(w)}}}if(h.indexOf("Instances")>-1&&this.pxlQuality.detailLimit==0){let f=[...u[d.Instances].children];if(this.log("Instances - ",u[d.Instances]),f.length>0){i.hasOwnProperty("baseInstancesNames")||(i.baseInstancesNames=[]),i.hasOwnProperty("baseInstancesList")||(i.baseInstancesList={});let m=[];f.forEach((w,y)=>{this.checkForUserData(i,a,w),i.baseInstancesNames.push(w),i.baseInstancesList[w.name]=w})}}if(h.indexOf("Lights")>-1){let f=u[d.Lights].children;for(this.log("Lights - ",u[d.Lights]);f.length>0;){let m=f.pop();f.push(...m.children),m.type.includes("Light")&&(i.hasOwnProperty("lightList")||(i.lightList={}),i.geoList.hasOwnProperty("lights")||(i.geoList.lights=[]),m.type=="PointLight"&&(m.decay=3,m.distance=20*m.intensity,m.intensity=2),i.lightList.hasOwnProperty(m.type)||(i.lightList[m.type]=[]),i.lightList[m.type].push(m),i.geoList.lights.push(m),m.matrixAutoUpdate=!1,a.add(m))}}if(h.includes("Scene")||h.includes("MainScene")){let f=d.Scene||d.MainScene,m=u[f].children;this.log("MainScene - ",u[f]);let w=-1;for(;w<m.length&&(w++,!(w>=m.length));){let y=m[w];if(this.checkForUserData(i,a,y),y.isMesh){y.userData.hasOwnProperty("Show")&&(!y.userData.Show||y.userData.Show==0)&&(y.visible=!1),i.geoList[y.name]=y;let g=At;if(y.userData.doubleSided&&(g=Ft),r.hasOwnProperty(y.name)){let C=null;y.material.map&&(C=y.material.map),y.material=r[y.name],C&&(y.material.uniforms.hasOwnProperty("diffuse")&&(y.material.uniforms.diffuse.value=C),y.material.hasOwnProperty("emissiveMap")&&(y.material.emissiveMap=C,y.material.emissive.r>0&&(y.material.emissiveIntensity=y.material.emissive.r))),y.matrixAutoUpdate=!1;continue}let v=y.material;Array.isArray(y.material)||(v=[y.material]),this.checkIsGlassLiquid(i,a,y,v)||v.forEach(C=>{C.map&&!C.emissiveMap&&C.emissive.r>0&&(C.emissiveMap=C.map,C.emissiveIntensity=C.emissive.r,C.emissive=new te(16777215)),C.side=g})}else if(y.type.includes("Light"))i.lightList.hasOwnProperty(y.type)||(i.lightList[y.type]=[]),i.lightList[y.type].push(y);else if(y.type=="Group"){let g=!0;if(i.geoList.hasOwnProperty("Scripted")){let v=Object.keys(i.geoList.Scripted)}g&&m.push(...y.children)}}a.add(u[f])}if(h.indexOf("Glass")>-1){let f=u[d.Glass].children;if(this.log("Glass - ",u[d.Glass]),f.length>0){if(!i.glassGroup){let m=new Rt;i.glassGroup=m,a.add(m)}for(;f.length>0;){let m=f.pop();if(f.push(...m.children),m.isMesh){this.checkForUserData(i,a,m);let w=m.material.clone();m.material=w,m.material.transparent=!0,m.material.opacity=.5,m.material.shininess=20,m.material.specular=m.material.color.clone(),m.material.specular.r=m.material.specular.r*.5+.1,m.material.specular.g=m.material.specular.g*.5+.1,m.material.specular.b=m.material.specular.b*.5+.1,m.material.side=ft,m.material.depthWrite=!1,m.matrixAutoUpdate=!1,m.renderOrder=1,i.glassList.push(m),i.glassGroup.add(m);let y=m.geometry.clone(),g=m.material.clone();g.copy(m.material);let v=new Ve(y,g);v.material.shininess=40,v.material.side=At,v.matrixAutoUpdate=!1,v.renderOrder=2;let C=m.position,E=m.rotation,A=m.scale;v.rotation.set(E.x,E.y,E.z),v.position.set(C.x,C.y,C.z),v.scale.set(A.x,A.y,A.z),v.updateMatrix(),a.add(v),i.glassList.push(v),i.glassGroup.add(v)}}}}if(h.indexOf("Colliders")>-1){let f=u[d.Colliders];this.log("Colliders - ",u[d.Colliders]);let m=f.children;i.collidersExist=m.length>0;for(let w=0;w<m.length;++w){let y=m[w].name,g=m[w].children;for(;g.length>0;){let v=g.pop();if(g.push(...v.children),v.isMesh){v.visible=!1;let C="noAxis";v.userData.checkX&&v.userData.checkZ&&(C=~~(v.userData.checkX>0)+(~~(v.userData.checkZ>0)+"")),y=="ColliderWalls"?(i.antiColliderActive=!0,i.antiColliderList[C].push(v)):y=="ColliderTops"?(i.antiColliderTopActive=!0,i.antiColliderTopList[C].push(v)):(y=="RoomWarpZone"&&i.roomWarp.push(v),i.colliderActive=!0,i.colliderList[C].push(v)),v.matrixAutoUpdate=!1,a.add(v),i.geoList[v.name]=v}}}}if(h.indexOf("PortalExit")>-1){let f=u[d.PortalExit].children;for(this.log("PortalExit - ",u[d.PortalExit]);f.length>0;){let m=f.pop();m.matrixAutoUpdate=!1,i.portalList[m.name]=m}}if(h.indexOf("FlatColor")>-1){let f=u[d.FlatColor].children;for(this.log("FlatColor - ",u[d.FlatColor]);f.length>0;){let m=f.pop();if(f.push(...m.children),m.isMesh){this.checkForUserData(i,a,m);let w=new _t({color:m.material.color.clone()});w.side=At,w.flatShading=!0,m.material=w,m.matrixAutoUpdate=!1,a.add(m)}}}if(h.indexOf("LambertColor")>-1){let f=u[d.LambertColor].children;for(this.log("LambertColor - ",u[d.LambertColor]);f.length>0;){let m=f.pop();if(f.push(...m.children),m.isMesh){this.checkForUserData(i,a,m);let w=new xi;if(m.material.map){let y=m.material.map.clone();w.map=y,w.emissiveMap=y,w.emissiveIntensity=.5,m.material=w}else w.color=m.material.color.clone(),w.emissive=m.material.emissive.clone(),w.side=At,w.flatShading=!0,m.material=w;m.matrixAutoUpdate=!1,a.add(m)}}}if(h.indexOf("Sky")>-1){let f=u[d.Sky].children;for(this.log("Sky - ",u[d.Sky]);f.length>0;){let m=f.pop();if(f.push(...m.children),m.isMesh){let w=new we({uniforms:{diffuse:{type:"t",value:m.material.map},envDiffuse:{type:"t",value:null},noiseTexture:{type:"t",value:this.pxlEnv.cloud3dTexture},fogColor:{value:a.fog.color},time:{value:this.pxlTimer.msRunner},camNear:{type:"f",value:i.camera.near},camFar:{type:"f",value:i.camera.far*.85},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.scene.skyObjectVert(),fragmentShader:this.pxlShaders.scene.skyObjectFrag()});m.geometry.computeFaceNormals(),m.geometry.computeVertexNormals(),m.material=w,m.matrixAutoUpdate=!1,m.frustumCulled=!1,m.layers.set(this.pxlEnv.renderLayerEnum.SKY),i.geoList[m.name]=m,i.textureList[m.name]=w,a.add(m)}}}if(h.indexOf("AnimatedTextures")>-1){let f=u[d.AnimatedTextures].children;for(this.log("AnimatedTextures - ",u[d.AnimatedTextures]);f.length>0;){let m=f.pop();if(f.push(...m.children),m.isMesh){this.checkForUserData(i,a,m);let w={time:{value:this.pxlTimer.msRunner},glowTexture:{type:"t",value:m.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},glowColor:{value:new yt(.01,.35,.55)},intensity:{type:"f",value:.35},rate:{type:"f",value:2},freq:{type:"f",value:1}},y=this.pxlShaders.animated.animTextureVert(),g=this.pxlShaders.animated.animTextureFrag(),v=new we({uniforms:w,vertexShader:y,fragmentShader:g,transparent:!0,side:At});m.geometry.computeFaceNormals(),m.geometry.computeVertexNormals(),m.material=v,m.matrixAutoUpdate=!1,a.add(m)}}}if(h.indexOf("ScrollingTextures")>-1){let f=u[d.ScrollingTextures].children;this.log("ScrollingTextures - ",u[d.ScrollingTextures]);let m=1;for(;f.length>0;){m+=1;let w=f.pop();if(f.push(...w.children),w.isMesh){this.checkForUserData(i,a,w);let y=w.name,g=.05;y.indexOf("_")>-1&&(g=y.split("_")[1],g=parseInt(g)*.01);let v=new we({uniforms:{scrollTexture:{type:"t",value:w.material.map},time:{value:this.pxlTimer.msRunner},speed:{value:g},seed:{type:"f",value:m*1.1423},boostPerc:{value:1}},vertexShader:this.pxlShaders.animated.scrollingTextureVert(),fragmentShader:this.pxlShaders.animated.scrollingTextureFrag(),transparent:!0,side:At});w.geometry.computeFaceNormals(),w.geometry.computeVertexNormals(),w.material=v,w.matrixAutoUpdate=!1,a.add(w)}}}if(h.indexOf("UserScreens")>-1){let f=u[d.UserScreens].children;this.log("UserScreens - ",u[d.UserScreens]);let m=0,w=[new yt(1,0,0),new yt(0,1,0),new yt(0,0,1)],y=[this.assetRoot+"DJ_Vector_Masks_1.jpg",this.assetRoot+"DJ_Vector_Masks_2.jpg",this.assetRoot+"DJ_Vector_Masks_3.jpg"],g=0,v=0,C=w.length;for(;f.length>0;){let E=f.pop();if(f.push(...E.children),E.isMesh){let A=new we({uniforms:{camExists:{type:"f",value:0},time:{value:this.pxlTimer.msRunner},seed:{type:"f",value:m*1.1423},alpha:{type:"f",value:1},boostPerc:{value:i.userScreenIntensity},scale:{value:new ze(100,100)},ratio:{value:new ze(1,1)},videoFeed:{type:"t",value:null},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},maskChannel:{value:w[g]},maskMap:{type:"t",value:this.pxlUtils.loadTexture(y[v])}},vertexShader:i.userScreenVert,fragmentShader:i.userScreenFrag,transparent:!0,side:At});E.geometry.computeFaceNormals(),E.geometry.computeVertexNormals(),E.material=A,E.matrixAutoUpdate=!1,i.pxlEnv.camScreenData.screenGeoList.push(E),a.add(E),m+=1,g=m%C,v=Math.floor(m/3)%C}}}if(h.indexOf("Items")>-1){let f=u[d.Items].children;for(this.log("Items - ",u[d.Items]);f.length>0;){let m=f.pop();if(m.type=="Group"){let w=m.children;w.length>0&&(w.forEach(y=>{if(y.name.includes("Item")){let g=new we({uniforms:{color:{value:y.material.emissive.clone()},alphaMap:{type:"t",value:y.material.map},cloudNoise:{type:"t",value:this.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.objects.itemVert(),fragmentShader:this.pxlShaders.objects.itemFrag(),transparent:!0,side:Ft,depthTest:!0,depthWrite:!1});y.material=g,this.pxlUser.itemList[m.name]=y}else if(y.name.includes("Base")){let g=new we({uniforms:{color:{value:y.material.emissive.clone()},alphaMap:{type:"t",value:y.material.map},cloudNoise:{type:"t",value:this.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemBaseRotateRate}},vertexShader:this.pxlShaders.objects.itemBaseVert(),fragmentShader:this.pxlShaders.objects.itemBaseFrag(),transparent:!0,side:Ft,depthTest:!0,depthWrite:!1});y.material=g,this.pxlUser.itemBaseList.push(y)}}),a.add(m),this.pxlUser.itemGroupList[m.name]=m,this.pxlUser.itemListNames.push(m.name))}}}if(h.includes("Scripted")){let f=u[d.Scripted].children;for(this.log("Scripted - ",u[d.Scripted]);f.length>0;){let m=f.pop();m.isMesh&&(i.geoList[m.name]=m,a.add(m))}}if(h.includes("Clickable")){let f=u[d.Clickable];this.log("Clickable - ",u[d.Clickable]);let m=f.children;for(let w=0;w<m.length;++w){let y=m[w].name,g=m[w].children;for(;g.length>0;){let v=g.pop();if(g.push(...v.children),v.isMesh){let C=new _t;C.color=new te(16777215),v.material.emissive=new te(4473924),v.material.emissiveMap=v.material.map,v.matrixAutoUpdate=!1,i.objectClickableObjectList[v.name]||(i.objectClickableObjectList[v.name]={}),i.objectClickableObjectList[v.name][y]=v,i.objectClickable.push(v),a.add(v),y=="Hover"&&(v.visible=!1)}}}}if(h.includes("Markers")){let f=u[d.Markers].children;for(this.log("Markers - ",u[d.Markers]);f.length>0;){let m=f.pop();i.marker[m.name]=m.position}}this.pxlEnv.geoList[s]=c,this.pxlEnv.geoLoadList[s]=1,i.fbxPostLoad()},null,c=>{s!=""&&(this.pxlEnv.geoLoadList[s]=1)}),l}loadAnimFBX(i,n,s,r,o){n==""&&(n=i.roomName),this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[n]=0;let a=0,l=i.scene;var c=new io;return c.load(s,u=>{let d=u.children,h={},p=[];d.forEach((y,g)=>{let v=y.name.split("_")[0];p.push(v),h[v]=g}),u.traverse(y=>{this.checkForUserData(i,l,y)}),this.pxlAnim.initObject(n,u),this.log("Animation FBX - ",p[0]),l.add(u),u.frustumCulled=!1;var f=new io;let m=[];Object.keys(r).forEach(y=>{let g=r[y],v=new Promise((C,E)=>{f.load(g,A=>{A.animations.length==0&&(this.log("No animations found in file",g),this.log(A),C()),this.pxlAnim.addClips(n,y,A),this.log("Animation Loaded",y),C()},null,A=>{this.log("Animation Load Error"),this.log(A),E(A)})});m.push(v)}),Promise.all(m).then(()=>{this.pxlAnim.setStateConnections(n,o),i.geoList[n]=u,this.pxlEnv.geoLoadList[n]=1,i.animPostLoad(n)}).catch(y=>{this.log("Error loading animations",y)})},null,u=>{n!=""&&(this.pxlEnv.geoLoadList[n]=1)}),c}pxlShaderBuilder(i,n,s,r=null){var o,a={diffuse:{type:"t",value:null},time:{value:this.pxlTimer.msRunner}};i!=null&&(a=Object.assign({},a,i));let l={uniforms:a,vertexShader:n,fragmentShader:s};return r&&(l.defines=r),o=new we(l),o.transparent=!0,o.depthTest=!0,o}removeChildren(i){for(var n=0,s=i.children,r=0;r<s.length;++r)s[r].type=="Group"&&(i.remove(s[r]),n++);return n}findMesh(i){for(var n=null,s=i.children,r=0;r<s.length;++r)if(s[r].type=="Mesh"){n=s[r];break}return n}getBBoxCentroid(i){try{var n=new $t().setFromObject(i),s=n.min,r=n.max,o=new yt().addVectors(r,s).multiplyScalar(.5);i.userData={bbox:n,centroid:o},mapBookHelper?.update()}catch(a){console.log("- - - - - - - - ERROR - - - - - - - -"),console.log(`     Object does not exist.
           - Error Info -`),console.log(a),console.log("- - - - - - - - - - - - - - - - - - -")}}loadScript(i){return new Promise((n,s)=>{let r=document.createElement("script");r.type="text/javascript",r.src=i,r.async=!0,r.onreadystatechange=()=>{n(!0)},r.onload=()=>{n(!0)},document.head.appendChild(r)})}xmlHttp(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}static getURLContent(i){return new Promise((n,s)=>{let r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("GET",i),r.onload=o=>{r.readyState==4&&r.status>=200&&r.status<300?n(r.response):n(r.statusText)},r.onerror=()=>s(r.statusText),r.send()})}getExternalHTML(i,n){if(!window.XMLHttpRequest){window.open(i,"_blank");return}let s=this.xmlHttp();s.onreadystatechange=function(){this.readyState==4&&this.status==200&&n&&typeof n=="function"&&n(s.responseText)},s.open("GET",i,!0),s.responceType="document",s.send()}fetchURLStatus(i,n,s){fetch(i,{method:"HEAD"}).then(r=>{n(r.status,s)}).catch(r=>{n(404,s)})}urlExistsFallback(i){return new Promise((n,s)=>{let r=this.xmlHttp();r.open("HEAD",i,!0),r.send(),console.log(r),r.onreadystatechange=function(){this.readyState==this.DONE&&n(this.status<400)},r.onerror=o=>{n(!1)},r.ontimeout=o=>{n(!1)}})}urlExists(i){var n;return Worker&&(n=new Worker("js/pxlBase/webWorkers/FileWorkerIO.js")),new Promise((s,r)=>{if(n)n.onmessage=function(o){s(o.data.data)},n.onerror=function(o){s(!1)},n.postMessage({type:"urlExists",data:i});else{let o=this.urlExistsFallback(i).then(a=>{s(a)})}}).then(s=>(n&&n.terminate(),s)).catch(s=>(n&&n.terminate(),!1))}};var no=class{constructor(i,n=!1,s={}){this.pxlTimer=null,this.pxlCookie=null,this.pxlDevice=null,this.pxlEnv=null,this.msLog=0,this.prevMS=new Date().getTime()*.001,this.autoQuality=!1,this.percent=1,this.verbose=i,this.screenResPerc=1,this.mBlurPercMult=n?.65:1,this.bloomPercMult=n?.65:1,this.bufferPercMult=1,this.renderTargetScale=10,this.percentSteps=[.3,.45,.85],this.fpsCounter=new yt(30,0,new Date().getTime()*.001),this.countAtLevel=0,this.shiftRate=.01,this.moduleQualityList=[],this.qualityStep=-1,this.qualityMaxSteps=3,this.qualityStepValues=[.25,.5,.75,1],this.benchmarkStart=-1,this.benchmarkTime=-1,this.benchmarkRating=-1,this.benchmarkTimes=[9,17],this.setFromBenchmark=!0,this.benchmarkQuality=1,this.benchmarkQualityRange=[.25,1],this.settingsQualityChoice=null,this.detailLimitOverride=Object.keys(s).includes("dlimit")?s.dlimit:0,this.detailLimit=this.detailLimitOverride!=null?this.detailLimitOverride:0,this.settings={leftRight:!0,mouse:!0,graphics:2,resolution:1,fog:2,bloom:!0,motion:!1},this.settingsLow={resolution:.5,fog:0,bloom:!1,motion:!1},this.settingsMedium={resolution:.75,fog:1,bloom:!0,motion:!1},this.settingsHigh={resolution:1,fog:2,bloom:!0,motion:!1},this.settingsCustom=null}setDependencies(i){this.pxlTimer=i.pxlTimer,this.pxlCookie=i.pxlCookie,this.pxlDevice=i.pxlDevice,this.pxlEnv=i.pxlEnv}init(){this.detailLimitOverride!=null?this.detailLimit=this.detailLimitOverride:this.pxlCookie.hasCookie("detailLimit")&&(this.detailLimit=this.pxlCookie.parseCookie("detailLimit")),this.verbose>=hn.INFO&&console.log("Graphics Limiting is set to level ",this.detailLimit),this.setFromBenchmark=!this.pxlCookie.parseDict(this.settings),this.pxlCookie.hasCookie("leftRight")&&(this.settings.leftRight=this.pxlCookie.parseCookie("leftRight")),this.pxlCookie.hasCookie("mouse")&&(this.settings.mouse=this.pxlCookie.parseCookie("mouse"));let i=Object.keys(this.settingsHigh);if(this.pxlCookie.hasCookie("qualitySetting")){let n=this.pxlCookie.parseCookie("qualitySetting");this.settings.graphics=n,this.settingsQualityChoice=n}}step(){this.mapFpsQualitCheck()}attachModule(i=null){i&&this.moduleQualityList.push(i)}startBenchmark(){this.pxlTimer.step(),this.benchmarkStart=this.pxlTimer.curMS}endBenchmark(){this.pxlTimer.step();let i=this.pxlTimer.curMS-this.benchmarkStart;this.benchmarkTime=i,this.benchmarkRating=1-Math.min(1,Math.max(0,(i-this.benchmarkTimes[0])/(this.benchmarkTimes[1]-this.benchmarkTimes[0]))),this.benchmarkQuality=this.benchmarkRating*(this.benchmarkQualityRange[1]-this.benchmarkQualityRange[0])+this.benchmarkQualityRange[0];let n=Math.min(1,Math.max(0,this.benchmarkRating));if(n=Math.ceil(Math.max(.05,n)*this.qualityMaxSteps)-1,this.qualityStep=n,this.setFromBenchmark){let s=["Low","Medium","High"][this.qualityStep];this.setQualityLevel(this.qualityStep)}else this.settingsQualityChoice==null&&(this.settingsQualityChoice=3),this.settingsCustom={},Object.keys(this.settingsHigh).forEach(r=>{this.settingsCustom[r]=this.settings[r]});this.setDependentSettings()}mapFpsQualitCheck(){if(this.pxlTimer.curMS-this.fpsCounter.z>1){this.fpsCounter.x=this.fpsCounter.y,this.fpsCounter.y=0,this.fpsCounter.z=this.pxlTimer.curMS;let i=1;this.fpsCounter.x<15&&(i=-1);let n=Math.min(1,Math.max(0,this.percent+this.shiftRate*i));this.autoQuality&&this.mapAutoQualityUpdate(n,!1)}this.fpsCounter.y+=1,this.pxlTimer.prevMS=this.pxlTimer.curMS}mapAutoQualityUpdate(i=null,n=!1){let s=Math.min(1,Math.max(0,i));s=Math.ceil(Math.max(.05,s)*this.qualityMaxSteps)-1,this.qualityStep=s}setGraphicsSettings(i=null,n=3){if(i==null)if(this.qualityStep==0)i=this.settingsLow;else if(this.qualityStep==1)i=this.settingsMedium;else if(this.qualityStep==2)i=this.settingsHigh;else return;n==3&&this.checkCustomDict(),Object.keys(i).forEach(r=>{this.setComponentQuality(r,i[r]),this.settings[r]=i[r],n==3&&(this.settingsCustom[r]=i[r])}),this.setDependentSettings(),this.colliderPrevObjHit=null,n!=null&&(this.settings.graphics=n)}reapplySettings(){Object.keys(this.settingsLow).forEach(n=>{this.setComponentQuality(n,this.settings[n],!1)}),this.setDependentSettings()}setQualityLevel(i){this.pxlDevice.mobile&&(i=1),this.setQualityCookie(i),i==0?this.setLowQuality():i==1?this.setMediumQuality():i==2?this.setHighQuality():i==3&&this.setCustomQuality()}setLowQuality(){this.settingsQualityChoice=0,this.setGraphicsSettings(this.settingsLow,0)}setMediumQuality(){this.settingsQualityChoice=1,this.setGraphicsSettings(this.settingsMedium,1)}setHighQuality(){this.settingsQualityChoice=2,this.setGraphicsSettings(this.settingsHigh,2)}setCustomQuality(){this.checkCustomDict(),this.settingsQualityChoice=3,this.setGraphicsSettings(this.settingsCustom)}checkCustomDict(){if(this.settingsCustom==null){this.settingsCustom={};let i=this.settingsHigh;this.settingsQualityChoice&&(this.settingsQualityChoice==0?i=this.settingsLow:this.settingsQualityChoice==1?i=this.settingsMedium:this.settingsQualityChoice==2&&(i=this.settingsHigh)),Object.assign(this.settingsCustom,i)}}setQualityCookie(i){this.pxlCookie.setCookie("qualitySetting",i)}setComponentQuality(i,n,s=!0){switch(i){case"leftRight":this.settings[i]=n;break;case"mouse":this.settings[i]=n;break;case"resolution":this.screenResPerc=n,this.pxlDevice.resizeRenderResolution(),this.settings[i]=n,this.pxlEnv.geoList.snow&&this.pxlEnv.geoList.snow.material&&(this.pxlEnv.geoList.snow.material.uniforms.pointScale.value=this.pxlEnv.geoList.snow.pBaseScale*n);break;case"fog":this.pxlEnv.mapOverlayHeavyPass.enabled=n==2,this.pxlEnv.mapOverlayPass.enabled=n==1,this.pxlEnv.mapOverlaySlimPass.enabled=n==0,this.pxlEnv.mapBoxAAPass.enabled=n==2,this.pxlEnv.mapCrossAAPass.enabled=n==1,this.pxlEnv.portaluserScreenIntensity.x=1,this.pxlEnv.userScreenIntensity.x=.65,this.pxlEnv.userScreenIntensity.y=0,this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=n==0?.7:.3),this.settings[i]=n;break;case"bloom":this.pxlEnv.portaluserScreenIntensity.x=n?.4:1,this.pxlEnv.mapGlowPass.enabled=n,this.pxlEnv.roomBloomPass.enabled=n,this.pxlEnv.roomGlowPass.enabled=n,this.pxlEnv.userScreenIntensity.x=n?.65:.8,this.pxlEnv.userScreenIntensity.y=n?0:.8,this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=n==0?.7:.3),this.pxlEnv.mapMotionBlurPass.enabled=n,this.settings[i]=n;break;case"motion":this.pxlEnv.mapMotionBlurPass.enabled=n,this.settings[i]=n;break;default:break}s&&this.pxlCookie.setCookie(i,n)}setDependentSettings(){let i=1,n=1,s=0,r=.6;this.settings.fog==2?(this.pxlEnv.mapMotionBlurPass.enabled=!0,this.pxlEnv.mapOverlayHeavyPass.enabled=!0,this.pxlEnv.mapOverlayPass.enabled=!1,this.pxlEnv.mapOverlaySlimPass.enabled=!1,this.pxlEnv.mapBoxAAPass.enabled=!0,this.pxlEnv.mapCrossAAPass.enabled=!1,i=1,n=.5):this.settings.fog==1?(this.pxlEnv.mapMotionBlurPass.enabled=!0,this.pxlEnv.mapOverlayHeavyPass.enabled=!1,this.pxlEnv.mapOverlayPass.enabled=!0,this.pxlEnv.mapOverlaySlimPass.enabled=!1,this.pxlEnv.mapBoxAAPass.enabled=!1,this.pxlEnv.mapCrossAAPass.enabled=!0,i=1.15,n=.5):(this.pxlEnv.mapMotionBlurPass.enabled=!1,this.pxlEnv.mapOverlayPass.enabled=!1,this.pxlEnv.mapOverlaySlimPass.enabled=!0,this.pxlEnv.mapBoxAAPass.enabled=!1,this.pxlEnv.mapCrossAAPass.enabled=!1,i=1,n=.4),this.settings.bloom?(this.pxlEnv.mapGlowPass.enabled=!0,this.pxlEnv.roomBloomPass.enabled=!0,this.pxlEnv.roomGlowPass.enabled=!0,this.pxlEnv.userScreenIntensity.x=.65,this.pxlEnv.userScreenIntensity.y=0,s=1,r=.25):(this.pxlEnv.mapGlowPass.enabled=!1,this.pxlEnv.roomBloomPass.enabled=!1,this.pxlEnv.roomGlowPass.enabled=!1,this.pxlEnv.engine.setRenderTarget(this.pxlEnv.mapComposerGlow.renderTarget2),this.pxlEnv.engine.clear(),this.pxlEnv.engine.setRenderTarget(this.pxlEnv.roomGlowPass.renderTarget2),this.pxlEnv.engine.clear(),this.pxlEnv.engine.setRenderTarget(null),this.pxlEnv.userScreenIntensity.x=.8,this.pxlEnv.userScreenIntensity.y=0,n=1,s=0,r=.5);let o=this.pxlEnv.geoList.Circular_Gate;o&&(o.material.uniforms.bloomBoost.value=s),this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=this.settings.bloom?.3:.7);let a=this.pxlEnv.geoList.CirculateGateVideoSphere;a&&(a.material.color.r=r,a.material.color.g=r,a.material.color.b=r),this.pxlEnv.portaluserScreenIntensity.x=n,this.pxlEnv.pxlCamera.colliderCurObjHit=null}};var so=class{constructor(t="pxlNav-",i="/",n=30){let s=t.substring(-1)=="-"?t:t+"-";this.prepend=s,this.exp=n,this.path="path="+i,this.deleteDate="expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.sub="_%_"}pullData(){let t=document.cookie}getExpiration(){let t=new Date;return t.setTime(t.getTime()+this.exp*24*60*60*1e3),"expires="+t.toGMTString()+";"}valueToString(t){let i=typeof t;return isNaN(Number(t))?i=="string"?"'"+t+"'":i=="boolean"?t?"true":"false":t==null?"null":isNaN(Number(t))?"NaN":t:t}variableToString(t){return Array.isArray(t)?"["+t.map(n=>Array.isArray(n)?this.variableToString(n):this.valueToString(n)).join(",")+"]":this.valueToString(t)}hasCookie(t){return document.cookie.includes(this.prepend+t)}readCookie(t){if(this.hasCookie(t)){let i=new RegExp("(?="+this.prepend+t+").*?((?=;)|(?=$))","g");return document.cookie.match(i)[0].split("=")[1].replace(this.prepend,"").replace(this.sub,";")}return null}parseCookie(t){if(this.hasCookie(t)){let i=new RegExp("(?="+this.prepend+t+").*?((?=;)|(?=$))","g"),n=document.cookie.match(i)[0].split("=")[1].replace(this.prepend,"").replace(this.sub,";");return n=="true"?n=!0:n=="false"?n=!1:parseInt(n)==n?n=parseInt(n):parseFloat(n)==n&&(n=parseFloat(n)),n}return null}isEqual(cName){return this.hasCookie(cName)?this.readCookie(cName)==this.variableToString(eval(cName)):!1}evalCookie(cName){if(cName){if(this.hasCookie(cName)){let reg=new RegExp("(?="+this.prepend+cName+").*?((?=;)|(?=$))","g");return eval(document.cookie.match(reg)[0].replace(this.prepend,"").replace(this.sub,";")),!0}return!1}else{let reg=new RegExp("(?="+this.prepend+").*?((?=;)|(?=$))","g");return document.cookie.match(reg).forEach(e=>{eval(e.replace(this.prepend,"").replace(this.sub,";"))}),!0}}setCookie(t,i){i=this.variableToString(i),i.replace&&i.replace(";",this.sub),document.cookie=this.prepend+t+"="+i+";"+this.getExpiration()+this.path}addDictionary(t){let i=Object.keys(t);for(let n=0;n<i.length;++n){let s=t[i[n]];s=this.variableToString(s),s.replace&&s.replace(";",this.sub),document.cookie=this.prepend+i[n]+"="+s+";"+this.getExpiration()+this.path}}parseDict(t){let i=Object.keys(t),n=!1;return i.forEach(s=>{this.hasCookie(s)&&(t[s]=this.parseCookie(s),n=!0)}),n}clearCookie(t){if(t)typeof t=="string"&&(t=[t]),t.forEach(i=>{document.cookie=i+"=;"+this.deleteDate+this.path});else{let i=new RegExp("(?="+this.prepend+").*?(?==)","g");document.cookie.match(i).forEach(s=>{document.cookie=s+"=;"+this.deleteDate+this.path})}}};var ro=class{constructor(){this.active=!1,this.msRunner=new ze(0,0),this.msLog=0,this.fpsStats=-1;let i=new Date().getTime()*.001;this._curMS=i,this._prevMS=i,this.videoFeeds=[]}init(){this.prevMS=this.curMS,this.msRunner.x=0,this.msRunner.y=0,this.step()}get curMS(){return this._curMS}updateTime(){this._curMS=new Date().getTime()*.001}get prevMS(){return this._prevMS}set prevMS(i){this._prevMS=i}start(){this.play()}pause(){return this.active=!this.active,this.active}play(){return this.active=!0,this.active}stop(){return this.active=!1,this.active}toggleMSLog(){this.msLog=(this.msLog+1)%2}step(){this.prevMS=this._curMS,this.updateTime(),this.fpsStats!=-1&&this.fpsStats.update();let i=this.curMS-this.prevMS;this.msRunner.x+=i>0?i:0,this.msRunner.y=(this.msRunner.y+i)*.5}};var oo=class{constructor(t=null){this.id=null,this.jitsiUserId=null,this.jmaActive=!1,this.jmaConnectObj=!1,this.jmaServer=!1,this.jmaRoom=!1,this.jmaUserId=null,this.jmaUserName=null,this.jmaTempUserIdActive=!1,this.pxlEnv=null,this.welcome=!1,this.tankStrafe=!1,this.invertMouse=!1,this.renderSettingsCookie="settings_renderSettings",this.controlModeCookie="settings_controlMode",this.tankStrageCookie="settings_tankStrage",this.invertMouseCookie="settings_invertMouse",this.rootUserCookie="data_userEnlil",this.adminUserCookie="data_userNanna",this.localUserMoved=!1,this.localUserTurned=!1,this.itemRunTime=60,this.itemGroupList=[],this.itemList={},this.itemListNames=[],this.itemBaseList=[],this.itemActiveList=[],this.itemInactiveCmd=[],this.itemActiveTimer=[],this.itemRotateRate=.65,this.itemBaseRotateRate=.1,this.itemBobRate=.35,this.itemBobMag=0,this.mPick=[],this.activeEffects={},this.lowGrav=0,this.lKing=0,this.lKingInactive=[.025,.018],this.lKingActive=[.35,.25],this.lKingWarp=0,this.lKingPass=null,this.sField=0,this.sFieldWarp=0,this.sFieldPass=null,this.iZoom=0,this.iZoomWarp=0,this.iZoomPass=null,this.gravityRate=0,this.gravityMax=5.44,this.gravityMPS=[.15,.05]}get getGravityMPS(){return this.gravityMPS[this.lowGrav]}checkItemWearOff(curTime){if(this.itemActiveList.length>0){let timeLeft=this.itemActiveTimer[0]-curTime;if(timeLeft<=0){let cmd=this.itemInactiveCmd.shift();return eval(cmd),this.itemActiveTimer.shift(),this.itemActiveList.shift(),!0}}return!1}checkItemPickUp(t){if(t=="LowGravity")return this.lowGrav==0?(this.lowGrav=1,!0):!1;if(t=="LizardKing")return this.lKing==0?(this.lKing=1,this.lKingWarp.set(...this.lKingActive),this.lKingPass.enabled=!0,!0):!1;if(t=="StarField")return this.sField==0?(this.sField=1,this.sFieldPass.enabled=!0,!0):!1;if(t=="InfinityZoom")return this.iZoom==0?(this.iZoom=1,this.iZoomPass.enabled=!0,!0):!1}toggleTankRotate(t=null){this.tankStrafe=t??!this.tankStrafe,this.tankStrageText=this.tankStrafe?"Left/Right Rotation":"Left/Right Strafe"}toggleMouseInf(t=null){this.invertMouse=t??!this.invertMouse,this.invertMouseText=this.invertMouse?"Revert Mouse":"Invert Mouse"}toggleFpsStats(){pxlTimer.fpsStats==-1?(pxlTimer.fpsStats=new Stats,document.body.appendChild(pxlTimer.fpsStats.domElement),pxlTimer.fpsStats.update(),this.fpsDisplayText="Hide FPS Stats"):(pxlTimer.fpsStats.domElement.remove(),pxlTimer.fpsStats=-1,this.fpsDisplayText="Display FPS Stats")}};var ao=class{constructor(i,n,s){this.projectTitle=i,this.pxlCore=n,this.pxlEnv=null,this.pxlTimer=null,this.pxlAudio=null,this.pxlUser=null,this.pxlCamera=null,this.pxlAutoCam=null,this.pxlGuiDraws=null,this.pxlQuality=null,this.allowCursorSwap=!1;let r=window.innerWidth,o=window.innerHeight;this.sW=r,this.sH=o,this.touchScreen=!1,this.x=r*.5,this.y=o*.5,this.screenRes=new ze(1/r,1/o),this.screenAspect=new ze(1,1),this.screenRatio=new ze(r/o,o/r),this.origRes=new ze(r,o),this.screenResDeltaPerc=new ze(1,1),this.mapW=1,this.mapH=1,this.gammaCorrection=new yt(1,1,1),this.firefox=/Firefox/i.test(navigator.userAgent),this.mobile=s,this.button=0,this.inputActive=!1,this.startPos=[0,0],this.endPos=[0,0],this.dragCount=0,this.dragTotal=0,this.latched=!1,this.windowHidden=!1,this.mouseX=r/2,this.mouseY=o/2,this.keyDownCount=[0,0,0],this.directionKeyDown=!1,this.directionKeysPressed=[0,0,0,0],this.shiftBoost=0,this.controlKey=!1,this.objectPercList=[],this.objectPercFuncList={},this.objectPerc={active:!1,object:null,left:0,top:0,width:0,height:0,startX:0,startY:0,offsetX:0,offsetY:0,percX:0,percY:0,offsetPercX:0,offsetPercY:0},this.canCursorLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,this.cursorLockActive=!1,this.cursorRightButtonLockActive=!1,this.gyroGravity=[0,0,0],this.touchMouseData={active:!1,lock:!1,mode:0,updated:0,button:0,dragCount:0,dragTotal:0,startPos:null,moveMult:new ze(1,1),velocityEase:new ze(0,0),velocityEasePrev:null,velocity:new ze(0,0),mBlurVelInf:new ze(2*this.screenRes.x,2*this.screenRes.y),prevDeltaPos:[0,0,0],endPos:null,latchMatrix:null,netDistance:new ze(0,0),netDistYPerc:0,curDistance:new ze(0,0),curFadeOut:new ze(0,0),curStepDistance:new ze(0,0),initialQuat:new Ue,releaseTime:0},this.init()}setDependencies(i){this.pxlEnv=i.pxlEnv,this.pxlTimer=i.pxlTimer,this.pxlAudio=i.pxlAudio,this.pxlUser=i.pxlUser,this.pxlCamera=i.pxlCamera,this.pxlAutoCam=i.pxlAutoCam,this.pxlGuiDraws=i.pxlGuiDraws,this.pxlQuality=i.pxlQuality}init(){this.setGammaCorrection();let i=this;document.addEventListener("mousedown",s=>{i.onmousedown(i,s)},!1),document.addEventListener("mousemove",s=>{i.onmousemove(i,s)},!1),document.addEventListener("mouseup",s=>{i.onmouseup(i,s)},!1),document.addEventListener("contextmenu",s=>{i.oncontextmenu(s)},!1),window.addEventListener("resize",s=>{i.resizeRenderResolution()},!1),document.addEventListener("touchstart",function(s){i.touchstart(i,s)},{passive:!0}),document.addEventListener("touchmove",function(s){i.touchmove(i,s)},{passive:!0}),document.addEventListener("touchend",function(s){i.touchend(i,s)},{passive:!0}),document.onkeydown=s=>{i.onkeydown(i,s)},document.onkeyup=s=>{i.onkeyup(i,s)};let n=this;document.addEventListener("visibilitychange",function(s){n.windowHidden=document.hidden,n.directionKeysPressed=[0,0,0,0],n.directionKeyDown=!1,n.shiftBoost=0,n.pxlCamera.workerFunc("focus",!document.hidden),n.runHiddenCalcs()}),typeof window.onblur=="object"&&(window.onblur=s=>{n.resetUserInput(s)}),window.addEventListener("beforeunload",s=>{if(n.controlKey==!0)return s.preventDefault(),s.returnValue="Close tab?",n.controlKey=!1,n.mapLockCursor(!1,0),"Close tab?"})}setGammaCorrection(i=null){if(i!=null){this.gammaCorrection=new yt(1/i,i,i);return}let n=1.5,s=1.2,r=.5;if(window&&window.navigator&&window.navigator.userAgent){let o=window.navigator.userAgent.match(/(windows|win32|win64|wince)/i);if(o&&o.length>0)n=2.2,s=1,r=0;else{let a=window.navigator.userAgent.match(/(macintosh|macintel|macppc|mac68k|iphone|ipad|ipod)/i);a&&a.length>0?(n=1.8,s=.97,r=.5):(n=1,s=.95,r=1)}}this.gammaCorrection=new yt(1/n,s,r)}runHiddenCalcs(){this.windowHidden&&setTimeout(()=>{this.runHiddenCalcs()},100)}resetUserInput(i){this.directionKeysPressed=[0,0,0,0],this.directionKeyDown=!1,this.shiftBoost=0,this.mapLockCursor(!1,0),this.pxlCamera.camJumpKey(!1),this.pxlCamera.deviceKey("space",!1),this.touchMouseData.active&&(this.touchScreen?this.endTouch(i):this.mapOnUp(i))}onmousemove(i,n){i.mapOnMove(n)}onmousedown(i,n){i.mapOnDown(n)}onmouseup(i,n){i.mapOnUp(n)}oncontextmenu(i){return i.preventDefault(),!1}touchstart(i,n){i.startTouch(n)}touchmove(i,n){i.doTouch(n)}touchend(i,n){i.endTouch(n)}onkeydown(i,n){i.keyDownCall(n)}onkeyup(i,n){i.keyUpCall(n)}get active(){return this.inputActive}set active(i){this.inputActive=!!i}preventDefault(i){i=i||window.event,i.preventDefault(i)&&i.preventDefault(i)(),i.returnValue=!1}setCursor(i){if(this.allowCursorSwap){if(i=="activeLatch"){let n=["grab","grabbing","all-scroll"][this.touchMouseData.button]}document.body.style.cursor=i}}getMouseXY(i){if(this.mobile)try{touch=i.touches[0],this.mouseX=touch.pageX,this.mouseY=touch.pageY}catch{}else{let n=this.pxlQuality.settings.mouse?-1:1;this.cursorLockActive?(this.mouseX+=(i.movementX||i.mozMovementX||i.webkitMovementX||0)*n,this.mouseY+=(i.movementY||i.mozMovementY||i.webkitMovementY||0)*n):(this.mouseX=i.clientX,this.mouseY=i.clientY)}}mapLockCursor(i=!1,n){this.canCursorLock&&!this.mobile&&(n==2?(!i&&this.cursorRightButtonLockActive?this.cursorRightButtonLockActive=!1:!i&&!this.cursorRightButtonLockActive&&(this.cursorRightButtonLockActive=!0),i=i||this.cursorRightButtonLockActive):i||(this.cursorRightButtonLockActive=i),i==!0?(this.pxlGuiDraws.pxlNavCanvas.focus(),this.pxlGuiDraws.pxlNavCanvas.requestPointerLock()):document.exitPointerLock(),this.cursorLockActive=i)}mapOnDown(i){let n=i.target;n.getAttribute&&n.getAttribute("id")==this.pxlCore&&this.pxlTimer.active&&(this.pxlGuiDraws.chatMessageInput&&this.pxlGuiDraws.chatMessageInput.blur(),this.pxlGuiDraws.pxlNavCanvas.focus(),this.preventDefault(i),this.touchMouseData.button=i.which,this.touchMouseData.active=!0,this.touchMouseData.mode=this.touchMouseData.button,this.touchMouseData.startPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.endPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.curDistance=new ze(0,0),this.touchMouseData.curStepDistance=new ze(0,0),this.touchMouseData.dragCount=0,this.pxlAutoCam.touchBlender=!1,this.setCursor("grabbing"),this.mapLockCursor(!0,i.button))}mapOnMove(i){let n=i.target;if(n.getAttribute&&n.getAttribute("id")==this.pxlCore&&this.pxlTimer.active||this.cursorLockActive)if(this.preventDefault(i),this.getMouseXY(i),(this.touchMouseData.active||this.cursorLockActive)&&this.touchMouseData.startPos){this.touchMouseData.dragCount++;let s=this.touchMouseData.endPos.clone();this.touchMouseData.endPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.curDistance=this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos),this.touchMouseData.curStepDistance=this.touchMouseData.endPos.clone().sub(s),this.touchMouseData.netDistance.add(this.touchMouseData.curStepDistance.clone());let r=this.touchMouseData.velocity.clone();this.touchMouseData.velocity=this.touchMouseData.velocity.clone().multiplyScalar(3).add(this.touchMouseData.curStepDistance).multiplyScalar(.25),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)*8e-4,this.touchMouseData.curFadeOut.add(s.sub(this.touchMouseData.endPos))}else this.pxlEnv.hoverUserDetect()}mapOnUp(i){let n=i.target;if(this.pxlAudio.djVolumeParentObj&&(this.pxlAudio.djVolumeParentObj.down=!1),n.getAttribute&&n.getAttribute("id")==this.pxlCore)if(this.pxlGuiDraws.checkFocus(n.getAttribute("id"),!0),this.mobile)this.pxlAutoCam.getNextPath(!1,1);else return this.preventDefault(i),this.touchMouseData.dragCount++,this.touchMouseData.dragTotal+=this.touchMouseData.dragCount,this.touchMouseData.active=!1,this.touchMouseData.releaseTime=this.pxlTimer.curMS,this.pxlAutoCam.touchBlender=!0,this.pxlAutoCam.setNextTrigger(),this.touchMouseData.dragCount<9&&this.pxlEnv.clickUserDetect(),this.touchMouseData.endPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+250)/1250,this.setCursor("grab"),this.mapLockCursor(!1,i.button),i.preventDefault(),!1}startTouch(i){this.touchScreen=!0;var n=i.touches[0];this.mouseX=n.pageX,this.mouseY=n.pageY,this.touchMouseData.active=!0,this.touchMouseData.mode=this.touchMouseData.button,this.touchMouseData.startPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.endPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.curDistance=new ze(0,0),this.touchMouseData.curStepDistance=new ze(0,0),this.touchMouseData.dragCount=0,this.pxlAutoCam.touchBlender=!1,this.touchMouseData.releaseTime=this.pxlTimer.curMS;let s=i.target;if(s.getAttribute){let r=s.getAttribute("id");if(this.objectPercList.includes(r)){r=="djPlayerVolume"&&(s=this.pxlAudio.djVolumeParentObj,r=s.getAttribute("id"));let o=s.getBoundingClientRect();this.objectPerc.active=!0,this.objectPerc.object=s,this.objectPerc.left=o.left,this.objectPerc.top=o.top,this.objectPerc.width=o.width,this.objectPerc.height=o.height,this.objectPerc.startX=this.mouseX-o.left,this.objectPerc.startY=this.mouseY-o.top,this.objectPerc.percX=(this.mouseX-this.objectPerc.left)/this.objectPerc.width,this.objectPerc.percY=(this.mouseY-this.objectPerc.top)/this.objectPerc.height,this.objectPerc.offsetX=0,this.objectPerc.offsetY=0,this.objectPerc.offsetPercX=0,this.objectPerc.offsetPercY=0,this.objectPercFuncList[r]&&this.objectPercFuncList[r](i)}}}doTouch(i){var n=i.touches[0];if(this.mouseX=n.pageX,this.mouseY=n.pageY,this.touchMouseData.active){if(this.touchMouseData.dragCount++,typeof i.touches[1]<"u"){var s=i.touches[1];i.touches.length>1&&this.touchMouseData.dragCount>10&&(this.touchMouseData.lock=!0,n=i.touches[1],this.pxlEnv.setFogHue([this.mouseX,this.mouseY],[n.pageX,n.pageY]));return}let r=this.touchMouseData.endPos.clone();this.touchMouseData.endPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.curDistance=this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos),this.touchMouseData.curStepDistance=this.touchMouseData.endPos.clone().sub(r),this.touchMouseData.netDistance.add(this.touchMouseData.curStepDistance.clone()),this.touchMouseData.velocity.add(this.touchMouseData.curStepDistance).multiplyScalar(.5),this.touchMouseData.velocityEase.add(this.touchMouseData.curStepDistance).multiplyScalar(.5),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)/1250,this.touchMouseData.curFadeOut.add(r.sub(this.touchMouseData.endPos))}this.objectPerc.active&&(this.objectPerc.percX=(this.mouseX-this.objectPerc.left)/this.objectPerc.width,this.objectPerc.percY=(this.mouseY-this.objectPerc.top)/this.objectPerc.height,this.objectPerc.offsetX=this.mouseX-this.objectPerc.startX,this.objectPerc.offsetY=this.mouseY-this.objectPerc.startY,this.objectPerc.offsetPercX=this.objectPerc.offsetX/this.objectPerc.width,this.objectPerc.offsetPercY=this.objectPerc.offsetY/this.objectPerc.height)}endTouch(i){if(this.touchScreen=!1,this.touchMouseData.dragCount++,this.touchMouseData.dragTotal+=this.touchMouseData.dragCount,this.touchMouseData.active=!1,this.touchMouseData.endPos=new ze(this.mouseX,this.mouseY),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+250)/1250,this.touchMouseData.curDistance.multiplyScalar(0),this.touchMouseData.curStepDistance.multiplyScalar(0),this.mobile&&this.touchMouseData.dragCount<10&&this.pxlTimer.curMS-this.touchMouseData.releaseTime>.5&&(this.pxlCamera.itemTrigger(),this.touchMouseData.lock=!0),this.touchMouseData.releaseTime=this.pxlTimer.curMS,this.touchMouseData.lock){this.touchMouseData.lock=!1;return}this.pxlAutoCam.touchBlender=!0,this.pxlAutoCam.setNextTrigger();let n=i.target;this.touchMouseData.dragCount<10&&n.getAttribute&&n.getAttribute("id")==this.pxlCore&&this.pxlAutoCam.getNextPath(!1,0),this.objectPerc.active=!1,this.pxlAudio.djVolumeParentObj&&(this.pxlAudio.djVolumeParentObj.down=!1)}async keyDownCall(i){if(i.ctrlKey&&(this.controlKey=!0),document.activeElement.type==null&&this.pxlTimer.active){let n=i.keyCode||i.which;(n==37||n==65)&&(this.directionKeyDown=!0,this.keyDownCount[0]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[0]=1,this.pxlCamera.deviceKey(0,!0)),i.ctrlKey&&n==87&&this.directionKeysPressed[1]==1&&i.this.preventDefault(i)(),(n==38||n==87)&&(this.directionKeyDown=!0,this.keyDownCount[1]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[1]=1,this.pxlCamera.deviceKey(1,!0)),(n==39||n==68)&&(this.directionKeyDown=!0,this.keyDownCount[0]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[2]=1,this.pxlCamera.deviceKey(2,!0)),(n==40||n==83)&&(this.directionKeyDown=!0,this.keyDownCount[1]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[3]=1,this.pxlCamera.deviceKey(3,!0)),(n==16||n==224)&&(this.shiftBoost=7,this.pxlCamera.deviceKey("shift",!0)),n==32&&(this.pxlCamera.camJumpKey(!0),this.pxlCamera.deviceKey("space",!0))}}async keyUpCall(i){if(i.ctrlKey)return this.controlKey=!1,i.preventDefault(),!1;if(document.activeElement.type==null){let s=i.keyCode||i.which,r=i.code||i.which;if(!i.isTrusted)return!1;if(i.ctrlKey||i.altKey||i.code.includes("F"))return i.preventDefault(),!1;if(r=="Backquote"){this.pxlGuiDraws.guiToggleVisibility();return}if(s==89&&this.pxlGuiDraws.toggleShaderEditor(),s==220){console.log("Saving screenshot");let o=this.pxlQuality.screenResPerc;this.pxlQuality.screenResPerc=1,this.pxlEnv.mapRender(!1);let a=this.pxlGuiDraws.pxlNavCanvas.toDataURL("image/png"),l=atob(a.split(",")[1]),c=l.length,u=new Uint8Array(c);for(var n=0;n<c;++n)u[n]=l.charCodeAt(n);let d=URL.createObjectURL(new Blob([u])),h=new Date,p=h.getDate(),f=h.getMonth()+1,w=h.getFullYear()+"-"+f+"-"+p+"_"+h.getHours()+"-"+h.getMinutes()+"-"+h.getSeconds(),y=document.createElement("a");y.download=this.projectTitle+"_"+w+".png",y.href=d,document.body.appendChild(y),y.click(),y.parentNode.removeChild(y),this.pxlQuality.screenResPerc=o,this.pxlEnv.mapRender(!1);return}if(this.pxlTimer.active){if((s==37||s==65)&&(this.directionKeysPressed[0]=0,this.pxlAutoCam.getNextPath(!1,-1),this.pxlCamera.deviceKey(0,!1)),(s==38||s==87)&&(this.directionKeysPressed[1]=0,this.pxlAutoCam.active&&(this.pxlAutoCam.step(!0),this.pxlCamera.deviceKey(1,!1))),(s==39||s==68)&&(this.directionKeysPressed[2]=0,this.pxlAutoCam.getNextPath(!1,1),this.pxlCamera.deviceKey(2,!1)),(s==40||s==83)&&(this.directionKeysPressed[3]=0,this.pxlAutoCam.active&&(this.pxlAutoCam.setRoom(!0),this.pxlCamera.deviceKey(3,!1))),this.directionKeysPressed.includes(1)||(this.directionKeyDown=!1),s==16||s==224){this.shiftBoost=0,this.pxlCamera.deviceKey("shift",!1);return}if(s==32){this.pxlCamera.camJumpKey(!1),this.pxlCamera.deviceKey("space",!1);return}if(!this.directionKeyDown){if(s==49||s==97){this.pxlCamera.fastTravel(0);return}if(s==50||s==98){this.pxlCamera.fastTravel(1);return}if(s==51||s==99){this.pxlCamera.fastTravel(2);return}if(s==52||s==100){this.pxlCamera.fastTravel(3);return}if(s==53||s==101){this.pxlAutoCam.preAutoCamToggle();return}}if(s==75||s==107||s==187,s==74||s==109||s==189,s==76,s==48,s==221){this.pxlUser?.itemInactiveCmd?.length>0&&console.log(this.pxlUser.itemInactiveCmd.pop());return}s==106}if(s==27||s==13&&!i.ctrlKey){this.pxlGuiDraws.toggleHudBlock(!1,!0),this.pxlGuiDraws.toggleGuiWindowContainer(!1,!1,!0);return}if(i.altKey||i.ctrlKey||i.shiftKey)return;if(s==85,s==73){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.infoIcon,"info");return}if(s==71){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.settingsIcon,"settings");return}if(s==67,s==66){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.musicIcon,"musicToggle");return}if(s==78){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.speakerIcon,"speakerToggle");return}if(s==77,s==86,s==191){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.helpIcon,"help");return}if(s==80){this.directionKeysPressed=[0,0,0,0],this.directionKeyDown=!1,this.pxlTimer.pause(),this.pxlTimer.active&&this.pxlEnv.mapRender(),this.pxlCamera.workerFunc("activeToggle",this.pxlTimer.active);return}}}resizeRenderResolution(i=null,n=null){if(i=i||window.innerWidth,n=n||window.innerHeight,this.mapW=(this.sW=i)*this.pxlQuality.screenResPerc,this.mapH=(this.sH=n)*this.pxlQuality.screenResPerc,this.screenRes.x=1/this.mapW,this.screenRes.y=1/this.mapH,this.screenRatio.x=this.sW/this.sH,this.screenRatio.y=this.sH/this.sW,this.pxlEnv.geoList.HDRView){let a=this.mapW>this.mapH?1:this.mapW/this.mapH;this.pxlEnv.geoList.HDRView.material.uniforms.ratioU.value=a}if(this.touchMouseData.mBlurVelInf=new ze(2*this.screenRes.x,2*this.screenRes.y),!this.pxlEnv.mapGlowPass)return;this.pxlEnv.scene.renderTarget.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult),this.pxlEnv.scene.renderWorldPos.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult),this.pxlEnv.mapComposer.setSize(this.mapW,this.mapH),this.pxlEnv.mapComposerGlow.setSize(this.mapW,this.mapH),this.pxlEnv.roomComposer.setSize(this.mapW,this.mapH),this.pxlEnv.roomGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult),this.pxlEnv.delayComposer.setSize(this.mapW,this.mapH),this.pxlEnv.mapGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult),this.pxlEnv.mapMotionBlurPass.setSize(this.mapW*this.pxlQuality.mBlurPercMult,this.mapH*this.pxlQuality.mBlurPercMult),this.pxlEnv.mapOverlayHeavyPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlayPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlaySlimPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlayHeavyPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlEnv.mapOverlayPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlEnv.mapOverlaySlimPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlGuiDraws.pxlNavCanvas.width=this.sW,this.pxlGuiDraws.pxlNavCanvas.height=this.sH,this.pxlGuiDraws.loading=!0,this.pxlEnv.engine.setPixelRatio(window.devicePixelRatio*this.pxlQuality.screenResPerc),this.pxlEnv.engine.setSize(this.sW,this.sH);var s=this.mapW/this.mapH;this.pxlCamera.camera.aspect=s,this.pxlCamera.camera.updateProjectionMatrix();let r=[this.sW/this.sH,this.sH/this.sW];var o=[1,1];o[0]=s>r[0]?1:this.sW/(this.sH*r[0]),o[1]=s>r[1]?this.sH/(this.sW*r[1]):1,o[0]>1?(o[1]*=1/o[0],o[0]=1):o[1]>1&&(o[0]*=1/o[1],o[1]=1),this.screenAspect.x=o[0]*(1/(.5**2+.5**2)**.5),this.screenAspect.y=o[1],this.screenResDeltaPerc.x=this.sW/this.origRes.x,this.screenResDeltaPerc.y=this.sH/this.origRes.y,this.pxlEnv.roomSubList.Lobby&&this.pxlEnv.roomSubList.Lobby.setShaders(),this.pxlEnv.updateCompUniforms(),this.pxlGuiDraws.resize(),this.pxlEnv.roomNameList.forEach(a=>{this.pxlEnv.roomSceneList[a].pxlCamAspect=s,this.pxlEnv.roomSceneList[a]?.resize&&this.pxlEnv.roomSceneList[a].resize(this.mapW,this.mapH)}),this.pxlTimer.active||this.pxlEnv.mapRender(!1)}};var lo=class{constructor(i=null,n=null){this.pxlEnv=null,this.assetPath=i,this.verbose=!1,this.animInitEntry={rig:null,mesh:null,mixer:null,clips:{},state:null,hasConnection:!1,prevTime:-1,connected:[],connections:{}},this.objNames=[],this.objects={},this.animMixer={},this.msRunner=n,this.clock=new Xs}setDependencies(i){this.pxlEnv=i}log(i){this.verbose&&console.log(i)}initObject(i,n){let s=null,r=null,o=n.children.length,a=0,l=[...n.children],c=0,u=0,d=0,h=0;for(;a<o;){let f=l[a];switch(f.type){case"Bone":++u,s=f;break;case"Mesh":++c,f.visible=!1;break;case"SkinnedMesh":++d,r=f;break;case"Group":++h,l=l.concat(f.children),o=l.length;break;default:break}++a}let p=!1;if(s||(this.log("Error, No Bone/Rig Root Found; Please move your rig to the scene's root. Grouped rigs aren't supported yet."),p=!0),r||(this.log("Error, No SkinnedMesh Found; Please ensure your rig has a mesh to animate."),p=!0),p){console.log("Unable to prepare '"+i+"' for animation"),console.log("Group Count: "+h),console.log("Bone Root Found : "+(u>0)),console.log("Bone Count : "+u),console.log("Mesh Count: "+c),console.log("SkinnedMesh Count: "+d);return}if(!this.objNames.includes(i)){this.objNames.push(i);let f=Object.assign({},this.animInitEntry);f.rig=s,f.mesh=r,this.animMixer[i]=new Da(s),f.mixer=this.animMixer[i],this.objects[i]=f;let m=new ai({skinning:!0});m.map=r.material.map,r.material=m}}addClips(i,n,s){if(!this.objNames.includes(i)){this.log("Error, '"+i+"' not found in Animation Manager");return}Object.keys(this.objects[i].clips).includes(n)&&this.log("Warning, '"+n+"' already exists in '"+i+"'");let a=this.animMixer[i].clipAction(s.animations[0]);this.objects[i].clips[n]=a}hasClip(i,n){return this.objNames.includes(i)?Object.keys(this.objects[i].clips).includes(n):!1}getMixer(i){return this.objNames.includes(i)?this.animMixer[i]:null}getRig(i){return this.objNames.includes(i)?this.objects[i].rig:null}getMesh(i){return this.objNames.includes(i)?this.objects[i].mesh:null}playClip(i,n){if(this.objNames.includes(i)&&Object.keys(this.objects[i].clips).includes(n)){let r=this.objects[i].clips[n];this.objects[i].state=n,this.objects[i].prevTime=-1,this.objects[i].hasConnection=this.objects[i].connected.includes(n),this.setWeight(i,n,1,!0),r.reset(),r.play()}}setWeight(i,n,s,r=!1){if(this.objNames.includes(i)){let o=Object.keys(this.objects[i].clips);if(o.includes(n)){let a=this.objects[i].clips[n];a.enabled=!0,a.setEffectiveTimeScale(1),a.setEffectiveWeight(s),r&&o.forEach(l=>{if(l!=n){let c=this.objects[i].clips[l];c.enabled=!1,c.setEffectiveTimeScale(1),c.setEffectiveWeight(0)}})}}}setStateConnections(i,n){if(this.objNames.includes(i)){let s=Object.keys(n);this.objects[i].connected=s,this.objects[i].connections=n}}step(i){if(this.objNames.includes(i)){if(!this.objects[i].hasConnection){this.animMixer[i].update(this.clock.getDelta());return}let s=this.objects[i].state;if(s){let o=this.objects[i].clips[s].time;if(this.objects[i].prevTime>o){let l=this.objects[i].connections[s],c=l[Math.floor(Math.random()*l.length)];this.playClip(i,c)}else this.animMixer[i].update(this.clock.getDelta()),this.objects[i].prevTime=o}else this.animMixer[i].update(this.clock.getDelta())}}destroy(i){if(this.objNames.includes(i)){this.animMixer[i].stopAllAction(),delete this.animMixer[i],delete this.objects[i];let n=this.objNames.indexOf(i);this.objNames.splice(n,1)}}};var Gi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	gl_FragColor = opacity * texel;","}"].join(`
`)};function Mt(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(Mt.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});Mt.FullScreenQuad=function(){var t=new ci(-1,1,1,-1,0,1),i=new Qt(2,2),n=function(s){this._mesh=new Ve(i,s)};return Object.defineProperty(n.prototype,"material",{get:function(){return this._mesh.material},set:function(s){this._mesh.material=s}}),Object.assign(n.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(s){s.render(this._mesh,t)}}),n}();var Ye=function(t,i){Mt.call(this),this.textureID=i!==void 0?i:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vs.clone(t.uniforms),this.material=new we({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mt.FullScreenQuad(this.material)};Ye.prototype=Object.assign(Object.create(Mt.prototype),{constructor:Ye,render:function(t,i,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}});var co=function(t,i){Mt.call(this),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1};co.prototype=Object.assign(Object.create(Mt.prototype),{constructor:co,render:function(t,i,n){var s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);var o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}});var qa=function(){Mt.call(this),this.needsSwap=!1};qa.prototype=Object.create(Mt.prototype);Object.assign(qa.prototype,{render:function(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}});var pn=function(t,i){if(this.renderer=t,i===void 0){var n={minFilter:Ge,magFilter:Ge,format:Ze,stencilBuffer:!1},s=t.getSize(new z);this._pixelRatio=t.getPixelRatio(),this._width=s.width,this._height=s.height,i=new et(this._width*this._pixelRatio,this._height*this._pixelRatio,n),i.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Gi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ye===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ye(Gi),this.clock=new Xs};Object.assign(pn.prototype,{swapBuffers:function(){var t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t},addPass:function(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(t){for(var i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0},render:function(t){t===void 0&&(t=this.clock.getDelta());var i=this.renderer.getRenderTarget(),n=!1,s,r,o=this.passes.length;for(r=0;r<o;r++)if(s=this.passes[r],s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),s.needsSwap){if(n){var a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}co!==void 0&&(s instanceof co?n=!0:s instanceof qa&&(n=!1))}this.renderer.setRenderTarget(i)},reset:function(t){if(t===void 0){var i=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(t,i){this._width=t,this._height=i;var n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(var r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)},setPixelRatio:function(t){this._pixelRatio=t,this.setSize(this._width,this._height)}});var Hd=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(Hd.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});Hd.FullScreenQuad=function(){var t=new ci(-1,1,1,-1,0,1),i=new Qt(2,2),n=function(s){this._mesh=new Ve(i,s)};return Object.defineProperty(n.prototype,"material",{get:function(){return this._mesh.material},set:function(s){this._mesh.material=s}}),Object.assign(n.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(s){s.render(this._mesh,t)}}),n}();var Ys=function(t,i,n,s,r){Mt.call(this),this.scene=t,this.camera=i,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};Ys.prototype=Object.assign(Object.create(Mt.prototype),{constructor:Ys,render:function(t,i,n){var s=t.autoClear;t.autoClear=!1;var r,o,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(r=t.getClearColor().getHex(),o=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(r,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),t.autoClear=s}});var jc={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	vec3 luma = vec3( 0.299, 0.587, 0.114 );","	float v = dot( texel.xyz, luma );","	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","	gl_FragColor = mix( outputColor, texel, alpha );","}"].join(`
`)};var mn=function(t,i,n,s){Mt.call(this),this.strength=i!==void 0?i:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new z(t.x,t.y):new z(256,256),this.clearColor=new te(0,0,0);var r={minFilter:Ge,magFilter:Ge,format:Ze};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var d=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new et(d,h,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var o=0;o<this.nMips;o++){var a=new et(d,h,r);a.texture.name="UnrealBloomPass.h"+o,a.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(a);var l=new et(d,h,r);l.texture.name="UnrealBloomPass.v"+o,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),d=Math.round(d/2),h=Math.round(h/2)}jc===void 0&&console.error("UnrealBloomPass relies on LuminosityHighPassShader");var c=jc;this.highPassUniforms=Vs.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,defines:{}}),this.separableBlurMaterials=[];for(var u=[3,5,7,9,11],d=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2),o=0;o<this.nMips;o++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[o])),this.separableBlurMaterials[o].uniforms.texSize.value=new z(d,h),d=Math.round(d/2),h=Math.round(h/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;var p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Gi===void 0&&console.error("UnrealBloomPass relies on CopyShader");var f=Gi;this.copyUniforms=Vs.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new we({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:ms,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this.oldClearColor=new te,this.oldClearAlpha=1,this.basic=new _t,this.fsQuad=new Mt.FullScreenQuad(null)};mn.prototype=Object.assign(Object.create(Mt.prototype),{constructor:mn,dispose:function(){for(var t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(var t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose()},setSize:function(t,i){var n=Math.round(t/2),s=Math.round(i/2);this.renderTargetBright.setSize(n,s);for(var r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.texSize.value=new z(n,s),n=Math.round(n/2),s=Math.round(s/2)},render:function(t,i,n,s,r){this.oldClearColor.copy(t.getClearColor()),this.oldClearAlpha=t.getClearAlpha();var o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);for(var a=this.renderTargetBright,l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=mn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=mn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this.oldClearColor,this.oldClearAlpha),t.autoClear=o},getSeperableBlurMaterial:function(t){return new we({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;				uniform vec2 direction;								float gaussianPdf(in float x, in float sigma) {					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;				}				void main() {
					vec2 invSize = 1.0 / texSize;					float fSigma = float(SIGMA);					float weightSum = gaussianPdf(0.0, fSigma);					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {						float x = float(i);						float w = gaussianPdf(x, fSigma);						vec2 uvOffset = direction * invSize * x;						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;						diffuseSum += (sample1 + sample2) * w;						weightSum += 2.0 * w;					}					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})},getCompositeMaterial:function(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:"varying vec2 vUv;				uniform sampler2D blurTexture1;				uniform sampler2D blurTexture2;				uniform sampler2D blurTexture3;				uniform sampler2D blurTexture4;				uniform sampler2D blurTexture5;				uniform sampler2D dirtTexture;				uniform float bloomStrength;				uniform float bloomRadius;				uniform float bloomFactors[NUM_MIPS];				uniform vec3 bloomTintColors[NUM_MIPS];								float lerpBloomFactor(const in float factor) { 					float mirrorFactor = 1.2 - factor;					return mix(factor, mirrorFactor, bloomRadius);				}								void main() {					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + 													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + 													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + 													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + 													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );				}"})}});mn.BlurDirectionX=new z(1,0);mn.BlurDirectionY=new z(0,1);var uo=class{constructor(t="Default",i="pxlRooms",n,s){this.verbose=n,this.engine=null,this.scene=null,this.parentGroupList={},this.parentGroupList[t]=[],this.parentNameList=[],this.prevRenderMS=0,this.nextRenderMS=0,this.fps=s?30:60,this.renderInterval=1/this.fps,this.pxlRoomAbsRoot=i;let r=i.split("/");r.splice(0,1),r=r.join("/"),this.pxlRoomLclRoot="../../"+i.split("/").pop(),this.mainRoom=t,this.bootRoom=t,this.bootLocation=null,this.currentRoom=t,this.roomNameList=[t],this.roomSubList={},this.roomSceneList={},this.roomSceneList[t]=this,this.roomPostGuiCalls=[],this.jmaCheckConnection=!1,this.checkContext=0,this.activeContext=!1,this.warpPortalTextures={},this.warpZoneRenderTarget=null,this.currentAudioZone=0,this.pxlUtils=null,this.pxlTimer=null,this.pxlAnim=null,this.pxlAutoCam=null,this.pxlAudio=null,this.pxlFile=null,this.pxlVideo=null,this.pxlQuality=null,this.pxlUser=null,this.pxlShaders=null,this.pxlDevice=null,this.pxlCamera=null,this.pxlGuiDraws=null,this.renderLayerEnum={SCENE:0,PARTICLES:1,GLOW:2,SKY:3},this.cloud3dTexture=null,this.softNoiseTexture=null,this.detailNoiseTexture=null,this.chroAberUVTexture=null,this.blockAnimTexture=null,this.userScreenIntensity=new z(0,.8),this.portaluserScreenIntensity=new z(1,0),this.portalMtlRate=.7,this.mobile=s,this.camNear=.1,this.camFar=5e3,this.fogMult=new z(0,0),this.fogColor=new te(.07,.07,.1),this.fogColorSky=new te(.1,.1,.12),this.fogExp=3e-4,this.fog=new wr(this.fogColor,this.fogExp),this.listener=null,this.posted=!1,this.postIntro=!1,this.camInitPos=new L(0,15,0),this.camInitLookAt=new L(0,15,0),this.camThumbPos=new L(0,0,0),this.camThumbLookAt=new L(0,20,0),this.camReturnPos=new L(0,0,0),this.camReturnLookAt=new L(0,0,0),this.camLobbyPos=new L(0,15,0),this.camLobbyLookAt=new L(0,15,-100),this.pxlCamFOV=s?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=this.camNear,this.pxlCamFarClipping=this.camFar,this.groupList=[],this.geoList=[],this.geoLoadList=[],this.geoLoadListComplete=0,this.lightList=[],this.returnPortalGlowList=[],this.roomWarpVisuals={},this.proximityGeo=null,this.userAvatarGroup=new Rt,this.warpVisualActive=!1,this.warpVisualMaxTime=[1.5,1],this.warpVisualStartTime=0,this.warpVisualFader=new z(0,1),this.warpVisualCmd=null,this.stepShaderFuncArr=[],this.mapMotionBlurPass=null,this.mapCopyMotionBlurPass=null,this.mapOverlayHeavyPass=null,this.mapOverlayPass=null,this.mapOverlaySlimPass=null,this.mapBoxAAPass=null,this.mapCrossAAPass=null,this.mapWorldPosMaterial=null,this.mapGlowPass=null,this.mapGlowMotionBlur=null,this.mapComposer=null,this.mapComposerMotionBlur=null,this.mapComposerBloom=null,this.mapComposerGlow=null,this.chroAberrationPass=null,this.chroAberrationRoomPass=null,this.lizardKingPass=null,this.lizardKingRoomPass=null,this.mapComposerWarpPass=null,this.blurScreenMerge=null,this.pxlRenderSettings={exposure:1,mult:s?1.5:1,bloomStrength:.5,bloomThresh:.6,bloomRadius:.05},this.exposureShiftActive=!1,this.delayComposer=null,this.delayPass=null,this.chroAberMult=new z(1,0),this.blurDirCur=new z(0,0),this.blurDirPrev=new z(0,0),this.shaderPasses={},this.roomComposer=null,this.roomRenderPass=null,this.roomBloomPass=null,this.roomGlowPass=null,this.blurComposer=null,this.glowPassMask=new z(1,0),this.objectClickable=[],this.objectClickableObjectList={},this.clickablePrevActiveObject=null,this.promoClickable=[],this.promoClickableObjectList={},this.promoPrevActiveObject=null,this.promoClickableLinks={},this.remoteVideoTextureList=[],this.remoteUserNameList=[],this.remoteUserMediaList={},this.remoteUserVideoList=[],this.remoteUserAudioList=[],this.camScreenData={count:0,prevCount:0,checkUserCount:!0,checkVideoStatus:!0,findCamCount:()=>{},videoObjectList:[],screenGeoList:[],screenClickable:[],screenMtlUniforms:[],userDataList:[],camFindInfoList:[]},this.curUserCount=0,this.prevUserCount=0,this.emit=(o,a)=>{}}setDependencies(t){this.scene=t.scene,this.pxlUtils=t.pxlUtils,this.pxlTimer=t.pxlTimer,this.pxlAnim=t.pxlAnim,this.pxlAutoCam=t.pxlAutoCam,this.pxlAudio=t.pxlAudio,this.pxlFile=t.pxlFile,this.pxlVideo=t.pxlVideo,this.pxlQuality=t.pxlQuality,this.pxlUser=t.pxlUser,this.pxlShaders=t.pxlShaders,this.pxlDevice=t.pxlDevice,this.pxlCamera=t.pxlCamera,this.pxlGuiDraws=t.pxlGuiDraws,this.emit=t.emit.bind(t)}init(){let t=Object.keys(this.roomSubList);console.log("subList",t),t.forEach(i=>{this.roomSubList[i].init()})}boot(){}setBootRoom(t,i){console.log(t,i),this.bootRoom=t,this.bootLocation=i}postBoot(){this.pxlGuiDraws.togglePageDisplay(),this.roomSceneList[this.bootRoom].start(),this.posted=!0}postHelpIntro(){!this.pxlDevice.mobile&&!this.pxlAutoCam.enabled?this.pxlCamera.jogServerMemory():(this.pxlCamera.colliderValid=!0,this.pxlCamera.eventCheckStatus=!0,this.pxlCamera.colliderShiftActive=!0,this.pxlCamera.nearestFloorObjName="mobile",this.pxlCamera.colliderCurObjHit="AudioTrigger_2",this.pxlCamera.proximityScaleTrigger=!0,this.exposureShiftActive=!0,this.pxlDevice.mobile||(this.pxlAudio.play(),setTimeout(()=>{this.pxlAudio.initPlay()},100))),this.postIntro=!0}start(){this.init()}step(){if(this.pxlTimer.step(),this.pxlAudio.step(),this.pxlQuality.step(),this.pxlAutoCam.step()&&this.pxlCamera.step(),this.pxlGuiDraws.step(),this.stepWarpPass(),this.pxlTimer.msRunner.x>this.checkContext&&this.activeContext){this.checkContext=this.pxlTimer.msRunner.x+1;let t=document.createElement("canvas");try{let i=!!t.getContext("webgl")}catch{this.activeContext=!0,this.pxlGuiDraws.pxlNavCanvas.style.display="none"}}this.pxlDevice.mobile&&this.exposureShiftActive}async stop(){this.setExposure(0),Object.keys(this.roomSubList).forEach(i=>{this.roomSubList[i].stop()})}loadRoom(t){return new Promise((i,n)=>{this.verbose>2&&console.log("Loading Room - ",t);var s=import(`${this.pxlRoomLclRoot}/${t}/${t}.js`);s.then(r=>{let o=new r[t](t,`../${this.pxlRoomLclRoot}/${t}/`,this.pxlFile,this.pxlAnim,this.pxlUtils,this.pxlDevice,this,this.pxlTimer.msRunner,null,null,this.cloud3dTexture);o.camera=this.pxlCamera.camera,o.scene=new sn,o.userAvatarGroup||(o.userAvatarGroup=new Rt),o.scene.add(o.userAvatarGroup);var a={format:Ze,antialias:!1,sortObjects:!0,alpha:!0,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?tn:jt};o.scene.renderTarget=new et(this.pxlDevice.sW*this.pxlQuality.screenResPerc,this.pxlDevice.sH*this.pxlQuality.screenResPerc,a),o.scene.renderTarget.texture.format=Ze,o.scene.renderTarget.texture.minFilter=Ge,o.scene.renderTarget.texture.magFilter=Ge,o.scene.renderTarget.texture.generateMipmaps=!1,o.scene.renderTarget.depthBuffer=!0,o.scene.renderTarget.depthTexture=new on(this.pxlDevice.sW*this.pxlQuality.screenResPerc,this.pxlDevice.sH*this.pxlQuality.screenResPerc),o.scene.renderTarget.depthTexture.format=qt,o.scene.renderTarget.depthTexture.type=gs,o.cloud3dTexture=this.cloud3dTexture,this.roomNameList.includes(t)||this.roomNameList.push(t),this.roomSceneList[t]=o,i(!0)})})}startAllRooms(){this.roomNameList.forEach(t=>{this.startRoom(this.roomSceneList[t])})}startRoom(t){t.active=!1,t.startTime=this.pxlTimer.msRunner.x}newSubRoom(t){this.roomSubList[t.roomName]=t}addToRooms(t){let i={};return this.roomNameList.forEach(n=>{let s=t.clone();this.roomSceneList[n].scene.add(s),i[n]=s}),i}addToRoomLayers(t,i=1){let n={};return this.roomNameList.forEach(s=>{let r=t.clone();this.roomSceneList[s].scene.add(r),n[s]=r,r.layers.set(i)}),n}addToRoomParents(t,i){let n={};return this.parentNameList.includes(i)||this.parentNameList.push(i),this.roomNameList.forEach(s=>{let r=t.clone();if(this.parentGroupList[s]||(this.parentGroupList[s]={}),!this.parentGroupList[s][i]){let o=new Rt;this.parentGroupList[s][i]=o,this.roomSceneList[s].scene.add(o)}this.parentGroupList[s][i].add(r),n[s]=r}),n}buildRoomEnvironments(){let t=[];this.roomNameList.forEach(i=>{this.roomSceneList[i].init(),this.roomSceneList[i].build()})}getArtistInfo(){return null}setFogHue(t=[0,0],i=[1,1]){let n=this.fog.color.getHSL(),s=[i[0]-t[0],i[1]-t[1]],r=Math.abs(Math.atan2(s[0],s[1])*.3183098861837907),o=(s[0]**2+s[1]**2)**.5/Math.max(this.pxlDevice.sW,this.pxlDevice.sH);this.fog.color.setHSL(r,o*.5+.3,o*.5),this.roomSceneList[this.currentRoom]&&this.roomSceneList[this.currentRoom].setFog&&this.roomSceneList[this.currentRoom].setFog(this.fog.color)}readShader(t=""){if(t=="script_fog"){if(this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.mapOverlayHeavyPass.enabled==!0)return this.mapOverlayHeavyPass.material;if(this.mapOverlayPass.enabled==!0)return this.mapOverlayPass.material;if(this.mapOverlaySlimPass.enabled==!0)return this.mapOverlaySlimPass.material}else{if(t=="script_dArrows")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.geoList.dArrows[0].material;if(t=="script_userScreens")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.camScreenData.screenGeoList[0].material;if(t=="script_warpZonePortals")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.returnPortalGlowList[0].material;if(t=="script_lizardking")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.lizardKingPass.material;if(t=="script_majorTom")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.pxlUser.sFieldPass.material;if(t=="script_fractalSubstrate")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.pxlUser.iZoomPass.material;if(t=="script_fractalEcho")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.delayPass.material;{let i=t.split("_");if(i.shift(),i=i.join("_"),this.geoList[i])return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.geoList[i].material}}}setShader(t,i,n){let s,r=this.pxlGuiDraws.guiWindows.shaderGui.currentShader;if(r=="script_fog")this.mapOverlayHeavyPass.enabled==!0?s=this.mapOverlayHeavyPass.material:this.mapOverlayPass.enabled==!0?s=this.mapOverlayPass.material:this.mapOverlaySlimPass.enabled==!0&&(s=this.mapOverlaySlimPass.material);else if(r=="script_dArrows"){this.geoList.dArrows.forEach(o=>{s=o.material,s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0});return}else if(r=="script_userScreens"){this.camScreenData.screenGeoList.forEach(o=>{s=o.material,s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0});return}else if(r=="script_warpZonePortals"){this.returnPortalGlowList.forEach(o=>{s=o.material,s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0});return}else if(r=="script_lizardking")s=this.lizardKingPass.material;else if(r=="script_majorTom")s=this.pxlUser.sFieldPass.material;else if(r=="script_fractalSubstrate")s=this.pxlUser.iZoomPass.material;else if(r=="script_fractalEcho")s=this.delayPass.material;else{let o=r.split("_");o.shift(),o=o.join("_"),this.geoList[o]&&(s=this.geoList[o].material)}s&&(s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0)}buildSnow(){let t=12e3,i=12,n=new ce,s=[],r=[],o=[],a=()=>Math.floor(Math.random()*4e3%4)*.25;for(let f=0;f<t;++f)s.push(0,0,0),r.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*.5+.5),o.push(a(),a());let l=new se(s,3),c=new se(r,4),u=new se(o,2);n.setAttribute("position",l),n.setAttribute("seeds",c),n.setAttribute("atlas",u);let d={snowTexture:{type:"t",value:this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"snow.jpg",1,{magFilter:st,minFilter:pr})},pointScale:{type:"f",value:i*this.pxlQuality.screenResPerc},intensity:{type:"f",value:1},rate:{type:"f",value:.035}},h=this.pxlFile.pxlShaderBuilder(d,this.pxlShaders.particles.snowVert(this.mobile),this.pxlShaders.particles.snowFrag());h.side=Ft,h.transparent=!0,h.blending=ms,h.depthTest=!0,h.depthWrite=!1;let p=new Er(n,h);p.sortParticles=!1,p.frustumCulled=!1,this.scene.add(p),p.layers.set(1),p.pBaseScale=i,this.geoList.snow=p}buildBackgroundObject(t={},i=null,n=null){let s=new Qt,r={};Object.assign(r,t),(i==null||typeof i!="string")&&(i=this.pxlShaders.scene.bgScreenVert()),(n==null||typeof n!="string")&&(n=this.pxlShaders.scene.bgScreenFrag());let o=this.pxlFile.pxlShaderBuilder(r,i,n);o.side=Ft,o.depthTest=!0,o.depthWrite=!1;let a=new Ve(s,o);return a.frustumCulled=!1,a}clickUserDetect(){if(this.roomSceneList[this.currentRoom].castRay&&this.roomSceneList[this.currentRoom].castRay(!0,this.pxlDevice.touchMouseData.button),this.pxlDevice.mobile)return;let t=null,i=new z(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlCamera.objRaycast.setFromCamera(i,this.pxlCamera.camera);var n=[];if(this.objectClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let l=r.distance;l<a&&(t=r.object,a=Math.min(a,l))}}t&&this.clickableActions(t.name);let o=null;if(this.promoClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let u=r.distance;u<a&&(o=r.object,a=Math.min(a,u))}}o&&this.promoActions(o)}clickableActions(t=null){t=="CallToAction"&&this.clickablePrevActiveObject&&(this.pxlGuiDraws.ctaBuildPopup(),this.objectClickableObjectList[this.clickablePrevActiveObject].Inactive.visible=!0,this.objectClickableObjectList[this.clickablePrevActiveObject].Hover.visible=!1,this.clickablePrevActiveObject=null)}promoActions(t=null){let i=t.userData.video,n=t.name;if(this.promoClickableLinks.hasOwnProperty(i)){var s=window.open(this.promoClickableLinks[i],"_blank");s.focus()}}hoverUserDetect(){this.roomSceneList[this.currentRoom].castRay&&this.roomSceneList[this.currentRoom].castRay(!1,this.pxlDevice.touchMouseData.button);let t=null,i=new z(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlCamera.objRaycast.setFromCamera(i,this.pxlCamera.camera);var n=[];if(this.objectClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let l=r.distance;l<a&&(t=r.object,a=Math.min(a,l))}}if(t){this.pxlDevice.setCursor("help"),this.objectClickableObjectList[t.name]&&(this.clickablePrevActiveObject==null&&(this.clickablePrevActiveObject=t.name),this.objectClickableObjectList[t.name].Inactive.visible=!1,this.objectClickableObjectList[t.name].Hover.visible=!0);return}else this.clickablePrevActiveObject&&(this.objectClickableObjectList[this.clickablePrevActiveObject].Inactive.visible=!0,this.objectClickableObjectList[this.clickablePrevActiveObject].Hover.visible=!1,this.clickablePrevActiveObject=null),this.pxlDevice.setCursor("grab");let o=null;if(this.promoClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let u=r.distance;u<a&&(o=r.object,a=Math.min(a,u))}}o?(this.pxlDevice.setCursor("alias"),this.promoClickableObjectList[o.name]&&(this.promoPrevActiveObject==null&&(this.promoPrevActiveObject=o.name),this.promoClickableObjectList[o.name].x=1)):(this.promoPrevActiveObject&&(this.promoClickableObjectList[this.promoPrevActiveObject].x=.1,this.promoPrevActiveObject=null),this.pxlDevice.setCursor("grab"))}updateCompUniforms(t=null){t&&(this.pxlRenderSettings.exposure=t*this.pxlRenderSettings.mult),this.mapOverlayPass&&(this.mapMotionBlurPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlayHeavyPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlayPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlaySlimPass.uniforms.exposure.value=this.pxlRenderSettings.exposure)}sendRoomMessage(t,i,n){this.roomSceneList[t]&&this.roomSceneList[t].onMessage(i,n)}buildComposers(){this.mapWorldPosMaterial=new we({uniforms:{camNear:{type:"f",value:this.pxlCamera.camera.near},camFar:{type:"f",value:this.pxlCamera.camera.far}},vertexShader:this.pxlShaders.rendering.worldPositionVert(),fragmentShader:this.pxlShaders.rendering.worldPositionFrag()}),this.mapWorldPosMaterial.side=At,this.blurComposer=new pn(this.engine),this.shaderPasses.blurXShaderPass=new Ye(new we({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.directionalBlurPass("pDiffuse",[1,0],14,1.8),defines:{}}),"tDiffuse"),this.shaderPasses.blurXShaderPass.material.transparent=!0,this.shaderPasses.blurXShaderPass.needsSwap=!0,this.blurComposer.addPass(this.shaderPasses.blurXShaderPass);let t=new Ye(Gi);this.blurComposer.addPass(t),this.shaderPasses.blurYShaderPass=new Ye(new we({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.directionalBlurPass("pDiffuse",[0,1],14,1.3),defines:{}}),"tDiffuse"),this.shaderPasses.blurYShaderPass.material.transparent=!0,this.blurComposer.addPass(this.shaderPasses.blurYShaderPass),this.shaderPasses.scatterMixShaderPass=new Ye(new we({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.mixBlurShaderPass(),defines:{}}),"tDiffuse"),this.shaderPasses.scatterMixShaderPass.material.transparent=!0,this.blurComposer.addPass(this.shaderPasses.scatterMixShaderPass),this.mapComposerMotionBlur=new pn(this.engine),this.mapMotionBlurPass=new Ye(new we({uniforms:{tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camRotXYZ:{value:this.pxlCamera.camRotXYZ},blurDirCur:{type:"f",value:this.blurDirCur},blurDirPrev:{type:"f",value:this.blurDirPrev},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.motionBlurPostProcess(this.pxlDevice.screenRes,this.pxlDevice.mobile),defines:{}}),"tDiffuse"),this.mapMotionBlurPass.needsSwap=!0,this.mapComposerMotionBlur.addPass(this.mapMotionBlurPass),this.mapMotionBlurPass.enabled=!1,this.mapComposerMotionBlur.renderToScreen=!1,this.mapComposerGlow=new pn(this.engine);let i=new Ys(this.scene,this.pxlCamera.camera);this.mapComposerGlow.addPass(i),this.blurScreenMerge=new Ye(new we({uniforms:{tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},mtDiffuse:{value:this.scene.renderTarget.texture},exposure:{type:"f",value:this.pxlRenderSettings.exposure}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.compLayersPostProcess(),defines:{}}),"tDiffuse"),this.blurScreenMerge.needsSwap=!0,this.mapComposerGlow.addPass(this.blurScreenMerge);let n=new Ye(Gi);this.mapComposerGlow.addPass(n),this.mapComposerGlow.renderToScreen=!1,this.mapComposerGlow.autoClear=!0,this.mapOverlayHeavyPass=new Ye(new we({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},scenePos:{value:this.scene.renderWorldPos.texture},noiseTexture:{value:this.cloud3dTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlayHeavyShader(),defines:{}}),"tDiffuse"),this.mapOverlayHeavyPass.needsSwap=!0,this.mapOverlayPass=new Ye(new we({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},scenePos:{value:this.scene.renderWorldPos.texture},noiseTexture:{value:this.cloud3dTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlayShader(),defines:{}}),"tDiffuse"),this.mapOverlayPass.needsSwap=!0,this.mapOverlaySlimPass=new Ye(new we({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlaySlimShader(),defines:{}}),"tDiffuse"),this.mapOverlaySlimPass.needsSwap=!0,this.mapGlowPass=new Ye(new we({uniforms:{time:{value:this.pxlTimer.msRunner},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderGlowTarget.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.glowPassPostProcess(),defines:{}}),"tDiffuse"),this.mapGlowPass.needsSwap=!0,this.mapComposer=new pn(this.engine),this.mapComposer.addPass(this.mapOverlayHeavyPass),this.mapComposer.addPass(this.mapOverlayPass),this.mapComposer.addPass(this.mapOverlaySlimPass),this.mapComposer.addPass(this.mapGlowPass),this.mapOverlayHeavyPass.enabled=!1,this.mapOverlayPass.enabled=!1,this.pxlUser.lKingWarp=new z(...this.pxlUser.lKingInactive),this.lizardKingPass=new Ye(new we({uniforms:{tDiffuse:{value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.lKingPostProcess(),defines:{}}),"tDiffuse"),this.pxlUser.lKingPass=this.lizardKingPass,this.lizardKingPass.enabled=!1,this.pxlUser.sFieldPass=new Ye(new we({uniforms:{tDiffuse:{value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture},starTexture:{value:this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"starNoise_1k.jpg")}},vertexShader:this.pxlShaders.rendering.sFieldPostProcessVert(),fragmentShader:this.pxlShaders.rendering.sFieldPostProcessFrag(),defines:{}}),"tDiffuse"),this.pxlUser.sFieldPass.enabled=!1,this.pxlUser.iZoomPass=new Ye(new we({uniforms:{tDiffuse:{value:null},tDiffusePrev:{type:"t",value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.iZoomPostProcess(),defines:{}}),"tDiffuse"),this.pxlUser.iZoomPass.enabled=!1,this.chroAberrationPass=new Ye(new we({uniforms:{tDiffuse:{value:null},ratio:{value:this.pxlDevice.screenRes},warpMult:{value:this.chroAberMult},chroAberUVTexture:{value:this.chroAberUVTexture},lKing:{value:this.pxlUser.lKingWarp}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.chroAberPostProcess(),defines:{}}),"tDiffuse"),this.chroAberrationPass.enabled=!1,this.mapComposer.addPass(this.chroAberrationPass),this.mapComposer.addPass(this.lizardKingPass),this.mapComposer.addPass(this.pxlUser.sFieldPass),this.mapComposer.addPass(this.pxlUser.iZoomPass),this.mapComposerWarpPass=new Ye(new we({uniforms:{time:{value:this.pxlTimer.msRunner},fader:{value:this.warpVisualFader},tDiffuse:{value:null},noiseTexture:{value:this.cloud3dTexture},animTexture:{value:this.blockAnimTexture}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.warpPostProcess(),defines:{}}),"tDiffuse"),this.mapComposerWarpPass.needsSwap=!0,this.mapComposerWarpPass.enabled=!1,this.mapComposer.addPass(this.mapComposerWarpPass),this.mapBoxAAPass=new Ye(new we({uniforms:{tDiffuse:{value:null},resUV:{type:"f",value:this.pxlDevice.screenRes},ratio:{type:"f",value:1},gamma:{type:"f",value:this.pxlDevice.gammaCorrection}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.boxAntiAliasPass(),defines:{}}),"tDiffuse"),this.mapBoxAAPass.enabled=!1,this.mapComposer.addPass(this.mapBoxAAPass),this.mapCrossAAPass=new Ye(new we({uniforms:{tDiffuse:{value:null},resUV:{type:"f",value:this.pxlDevice.screenRes},ratio:{type:"f",value:1},gamma:{type:"f",value:this.pxlDevice.gammaCorrection}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.crossAntiAliasPass(),defines:{}}),"tDiffuse"),this.mapCrossAAPass.enabled=!1,this.mapComposer.addPass(this.mapCrossAAPass),this.mapComposer.autoClear=!0;let s=this.roomSceneList[this.bootRoom].scene;this.roomComposer=new pn(this.engine),this.roomRenderPass=new Ys(s,this.pxlCamera.camera),this.roomComposer.addPass(this.roomRenderPass),this.roomNameList.forEach(o=>{if(o!=this.mainRoom){let a=this.roomSceneList[o].applyRoomPass(this.roomComposer);a&&(a.enabled=!1,this.roomComposer.addPass(a))}}),this.roomBloomPass=new mn(new z(this.pxlDevice.mapW*.5,this.pxlDevice.mapH*.5),1.5,.8,.85),this.roomBloomPass.threshold=this.pxlRenderSettings.bloomThresh,this.roomBloomPass.strength=this.pxlRenderSettings.bloomStrength,this.roomBloomPass.radius=this.pxlRenderSettings.bloomRadius,this.roomComposer.addPass(this.roomBloomPass),this.roomGlowPass=new Ye(new we({uniforms:{time:{value:this.pxlTimer.msRunner},ratio:{type:"f",value:1},tDiffuse:{value:null},gDiffuse:{value:this.blurComposer.writeBuffer.texture},rDiffuse:{value:this.blurComposer.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.glowPassPostProcess(),defines:{}}),"tDiffuse"),this.roomGlowPass.needsSwap=!0,this.roomComposer.addPass(this.roomGlowPass),this.roomComposer.addPass(this.chroAberrationPass),this.roomComposer.addPass(this.lizardKingPass),this.roomComposer.addPass(this.pxlUser.sFieldPass),this.roomComposer.addPass(this.pxlUser.iZoomPass),this.roomComposer.addPass(this.mapComposerWarpPass),this.roomComposer.addPass(this.mapCrossAAPass),this.roomComposer.addPass(this.mapBoxAAPass),this.roomComposer.autoClear=!0,this.delayComposer=new pn(this.engine);let r=new Ys(this.scene,this.pxlCamera.camera);this.delayPass=new Ye(new we({uniforms:{tDiffuse:{value:null},roomComposer:{type:"f",value:0},tDiffusePrev:{value:this.mapComposer.renderTarget1.texture},tDiffusePrevRoom:{value:this.roomComposer.renderTarget1.texture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.textureStorePass(),defines:{}}),"tDiffuse"),this.delayPass.clear=!1,this.delayComposer.addPass(this.delayPass),this.delayComposer.renderToScreen=!1,this.delayComposer.autoClear=!1,this.pxlUser.iZoomPass.uniforms.tDiffusePrev.value=this.delayComposer.renderTarget2.texture}setExposure(t){t=t*1,this.pxlCamera.uniformScalars.exposureUniformBase=t,this.updateCompUniforms(t)}stepWarpPass(){if(this.warpVisualActive){let t=(this.pxlTimer.curMS-this.warpVisualStartTime)/this.warpVisualMaxTime[this.pxlCamera.warpType],i=Math.min(1,t*3),n=Math.min(1,3-t*3);i==1&&n==1&&this.pxlCamera.warpActive&&this.pxlCamera.warpCamRun(),this.warpVisualFader.x=i,this.warpVisualFader.y=n,n<=0&&this.stopWarpVisual()}}checkUserVideoStatus(t){}remoteUserUpdateMedia(t,i=!1,n=null){}userRemoveRemoteData(t){}stepShaderValues(){this.stepShaderFuncArr.forEach(x=>{typeof x=="object"?x.step():typeof x=="string"&&eval(x)})}stepAnimatedObjects(){this.pxlUser.itemListNames.length>0&&this.pxlUser.itemListNames.forEach(t=>{this.pxlUser.itemList[t].rotation.y=this.pxlTimer.msRunner.x*this.pxlUser.itemRotateRate})}initWarpVisual(t){this.warpVisualActive=!0,this.warpVisualFader.x=0,this.warpVisualFader.y=1,this.warpVisualStartTime=this.pxlTimer.curMS,this.mapComposerWarpPass.enabled=!0}stopWarpVisual(){this.warpVisualActive=!1,this.warpVisualFader.x=1,this.warpVisualFader.y=0,this.mapComposerWarpPass.enabled=!!this.pxlUser.iZoom}prepPortalRender(){}cleanupPortalRender(){}setPortalTexture(t,i){this.roomWarpVisuals[i].material.map=t}warpPortalQueue(){return Object.keys(this.roomSceneList).reverse()}getSceneSnapshot(t){let i=this.roomSceneList[t];this.engine.setRenderTarget(i.warpZoneRenderTarget),i.prepPortalRender(),this.engine.render(i.scene||i.scene,this.pxlCamera.camera),i.cleanupPortalRender(),this.engine.setRenderTarget(null)}mapRender(t=!0){if(this.pxlTimer.active&&this.step(),this.pxlTimer.curMS>this.nextRenderMS||t==!1){this.prevRenderMS=this.nextRenderMS,this.nextRenderMS=this.pxlTimer.curMS+this.renderInterval,this.stepShaderValues(),this.stepAnimatedObjects();let i=this.roomSceneList[this.currentRoom];i&&i.booted&&(i.step(),i.camera.layers.disable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(i.scene.renderTarget),this.engine.clear(),this.engine.render(i.scene,i.camera),this.engine.setRenderTarget(null),i.camera.layers.enable(this.renderLayerEnum.SKY),this.mapComposerGlow&&(this.pxlQuality.settings.bloom||this.pxlQuality.settings.fog)&&this.mapComposerGlow.render(),this.mapRenderBlurStack(i,i.camera,i.scene,this.scene.renderGlowTarget),this.roomComposer.render()),this.pxlUser.iZoom&&this.delayComposer.render()}this.pxlTimer.active&&t&&requestAnimationFrame(()=>{this.mapRender()})}mapRenderBlurStack(t,i,n,s){if(this.blurComposer){t.geoList.GlowPass&&(t.geoList.GlowPass.forEach(a=>{if(a.userData.hasOwnProperty("GlowPerc")){let l=a.userData.GlowPerc;a.material.hasOwnProperty("uniforms")&&a.material.uniforms.mult&&(a.material.uniforms.mult.value=l)}}),t.geoList.hasOwnProperty("GlowPassMask")&&t.geoList.GlowPassMask.forEach(a=>{a.material.uniforms&&a.material.uniforms.cdMult&&(a.material.uniforms.cdMult.value=0)})),i.layers.disable(this.renderLayerEnum.SCENE),i.layers.disable(this.renderLayerEnum.PARTICLES),i.layers.disable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(s);let r=0,o=n.background.clone();n.background.set(r),this.engine.setClearColor(r,0),this.engine.render(n,i),n.background.r=o.r,n.background.g=o.g,n.background.b=o.b,i.layers.enable(this.renderLayerEnum.SCENE),i.layers.enable(this.renderLayerEnum.PARTICLES),i.layers.enable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(null),t.geoList.GlowPass&&(t.geoList.GlowPass.forEach(a=>{a.userData.hasOwnProperty("GlowPerc")&&a.material.hasOwnProperty("uniforms")&&a.material.uniforms.mult&&(a.material.uniforms.mult.value=1)}),t.geoList.hasOwnProperty("GlowPassMask")&&t.geoList.GlowPassMask.forEach(a=>{a.material.uniforms&&a.material.uniforms.cdMult&&(a.material.uniforms.cdMult.value=1)})),this.blurComposer.render(),this.roomBloomPass.enabled=!1}}};var ut=class{static svgPromise(i,n,s=null,r=null){let o={},a=document.getElementById(n);if(!a)return;s!=null&&a.classList.add(s);let l=this,c=Promise.resolve(Si.getURLContent(i));return c.then(u=>{a.innerHTML=u,o.svg=a.getElementsByTagName("svg")[0],r!=null&&o.svg.classList.add(r)}),o.promise=c,o}static svgRawPromise(i){let n={},s=this;return Promise.resolve(Si.getURLContent(i)).then(o=>{let a=document.createElement("div");a.innerHTML=o,n.svg=a.getElementsByTagName("svg")[0]}),n}static svgIconPromise(i,n,s,r=null,o=null){let a=this,l={};l.hover=null,l.mute=null,l.caret=null,l.indicator=null,l.waiting=[],l.state=null,l.eventType=s;let c=document.getElementById(n);if(!c)return;o?c.classList.add(o):c.classList.add("iconStyle"),l.parent=c.parentNode,l.parent.classList.add("iconHover"),l.parent.addEventListener("click",d=>{a.iconEvent("click",l,s)});let u=Promise.resolve(Si.getURLContent(i));return u.then(d=>{if(c.innerHTML=d,l.svg=c.getElementsByTagName("svg")[0],l.svg){o?l.svg.classList.add(o):l.svg.classList.add("iconStyle");let h=l.svg.children,p=l.svg.getAttribute("xmlns"),f=l.svg.getAttribute("height"),m=l.svg.getAttribute("width");for(let y=0;y<h.length;++y){let g=h[y];if(n=="speakerIcon"){let C=c.getAttribute("xmlns"),E=parseInt(f),A=parseInt(m),R=document.createElementNS(C,"rect");R.setAttribute("x",-1),R.setAttribute("y",-1),R.setAttribute("fill","white"),R.setAttribute("fill-opacity",0),R.setAttribute("height",f+2),R.setAttribute("width",m+2),R.setAttribute("z-index",-1),c.appendChild(R),l.hover=R,l.svg.setAttribute("fill-opacity",this.toggleOpacity[0])}let v=g.getAttribute("id");if(v=="mute"){l.mute=g,l.mute.style.transformOrigin="50% 50%",l.mute.style.filter="alpha(opacity=0)",l.mute.style.opacity="0",l.mute.style.transform="scale(0,0)",l.mute.style.transition="scale 1s, opacity .5s, filter .5s";let C=document.createElement("style");C.type="text/css",C.innerHTML=`
                                @keyframes loadingSpinner{
                                    0%{
                                        transform: rotate(0deg);
                                    }
                                    100%{
                                        transform: rotate(360deg);
                                    }
                                }
                            `,l.svg.appendChild(C);let E=Math.max(2,Math.min(f,m)*.25),A=m*.5,R=f*.5,O=document.createElementNS(p,"path");O.setAttribute("d",` M ${A} ${R-E} A ${E} ${E} 0 1 1 ${A-E} ${R} `),O.setAttribute("stroke","white"),O.setAttribute("stroke-width","2"),O.style.display="none",O.style.transformOrigin="50% 50%",O.style.animation="loadingSpinner 1s linear infinite",O.style.animationDuration="2s",O.style.animationPlayState="paused",l.indicator=O,l.svg.appendChild(O),this.toggleIcon(l,r)}else v=="caret"?(l.caret=g,l.caret.style.transformOrigin="50% 50%",l.caret.style.transition="transform .5s",this.flipIcon(l,!1)):v=="state"?(g.style.display="none",l.state=g):l.waiting.push(g)}let w=document.createElementNS(p,"rect");w.classList.add("iconHover"),w.setAttribute("x",0),w.setAttribute("y",0),w.setAttribute("height",f),w.setAttribute("width",m),l.svg.appendChild(w)}}),l.promise=u,l}static svgButtonPromise(i,n,s=null,r=!1,o=null){if(typeof n=="string"&&(n=document.getElementById(n),!n))return;let a=this;Promise.resolve(Si.getURLContent(i)).then(c=>{n.innerHTML=c;let u=n.getElementsByTagName("svg");if(u.length>0&&(u=u[0],s&&(s=typeof s=="string"?[s]:s,s.forEach(d=>{u.classList.add(d)})),r)){let d=u.getAttribute("xmlns"),h=parseInt(u.getAttribute("height")),p=parseInt(u.getAttribute("width")),f=document.createElementNS(d,"rect");f.setAttribute("x",-1),f.setAttribute("y",-1),f.setAttribute("fill","white"),f.setAttribute("fill-opacity",0),f.setAttribute("height",h+2),f.setAttribute("width",p+2),f.setAttribute("z-index",-1),u.appendChild(f);let m=u.getElementById("state");m&&m.setAttribute("fill-opacity",this.toggleOpacity[0]),o&&(u.onclick=w=>{a.svgCheckClick(w,o)},a.pxlDevice.mobile?(u.ontouchstart=w=>{a.svgStylize(w,!0)},u.ontouchend=w=>{a.svgStylize(w,!1)}):(u.onmouseover=w=>{a.svgStylize(w,!0)},u.onmouseout=w=>{a.svgStylize(w,!1)}))}})}};var Ya=class{constructor(t,i="Metal-Asylum",n="images/assets/",s="images/GUI/"){this.projectTitle=i,this.verbose=t,this.sW=window.innerWidth,this.sH=window.innerHeight,this.mobile=!1,this.pxlFile=null,this.pxlCookie=null,this.pxlTimer=null,this.pxlAudio=null,this.pxlUtils=null,this.pxlUser=null,this.pxlDevice=null,this.pxlAutoCam=null,this.pxlCamera=null,this.pxlNavCanvas=null,this.pxlQuality=null,this.pxlEnv=null,this.assetRoot=n,this.guiRoot=s,this.introHelpActive=!0,this.branding={title:i,loader:s+".svg",logo:s+".svg",medalion:s+".svg",stack:s+".svg"},this.lableBoxSize=40,this.optionWidthRound=10,this.optionWidthAdd=25,this.deviceOptionHeight=[0,300],this.pxlLoader=null,this.pxlLoaderCount=0,this.pxlLoaderTotal=5,this.hudBlock={obj:null,active:!1},this.userControlBlock=null,this.hudVisibility=!0,this.hudIcons={},this.hudElements={},this.guiWindows={},this.msgCount=0,this.hudMedalionBar=null,this.userProfileMessageInput=null,this.userProfileReturnMessage=null,this.userCountObj=null,this.userCountCur=0,this.messageCountObj=null,this.messageCountCur=0,this.chatMessageDisplay=null,this.chatMessageInput=null,this.camChoicesActive=!1,this.micChoicesActive=!1,this.pxlNavData={active:!1,gui:null,height:null,fpsSet:0,fps:null,dl:null,ul:null},this.djPlayerObj=null,this.buildGuiStatus={hud:!1,userTopBar:!1,bottomBar:!1,djPlayer:!1,roomControls:!1,verseList:!1,medalion:!0,loadingBranding:!1},this.requestVerseList=!1,this.verseList=[],this.verseUserCounts={},this.verseTitlePrefix="",this.verseTitleSuffix="'s Room",this.multiverseData={fromVerse:null,toVerse:null,electedVerse:null,mitosisState:!1,mitosisBufferTime:15,mitosisTime:0,mitosisUpdateTime:0},this.textDescriptions={chatIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat',pos:[1,-1.5]},multiverseIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection',pos:[0,-1.3]},djPlayerVolumeParent:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume',pos:[0,-1.5]},speakerIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output',pos:[0,-1.5]},micIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input',pos:[0,-1.5]},camIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input',pos:[0,-1.5]},helpIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions',pos:[0,-1.5]},infoIconParent:{text:'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>',pos:[-1,0],offset:[-10,0]},settingsIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation',pos:[0,-1.5]},muteAllIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users',pos:[1,0]},fullScreenIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen',pos:[-1,0]},videoQualityIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings',pos:[-1,0]},statsIcon:{text:"jitsi connection status; toggle connection ",pos:[1,0]},usersIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools',pos:[1,0]},ft2Button:{text:"Environment",pos:[-1,0],offset:[-10,0]},ft3Button:{text:"Invite Friends",pos:[-1,0],offset:[-10,0]},hud_userCount:{text:"# of People",pos:[-1,0],offset:[-10,0]}},this.loading=!0,this.disclaimer=!1,this.mapPrompt=null,this.mapPromptBG=null,this.delayLoadChatWindow=!1,this.renderSettings=null,this.controlSettings=null,this.shaderEditorDisplay=null,this.radioControls=[],this.controlState=[!0,!1,!1,!1],this.controlToggle=[!0,!0,!1,!1],this.buttonPadding=6,this.toggleOpacity=[.6,1],this.qualityText=["Netbook","Laptop","Desktop Computer","Gamer Rig"],this.activeItem=null,this.jmaWindowVis=!1,this.actionPopUp=null,this.ctaLocalDocURL={},this.ctaContentLoading=!1,this.googleDocHTML=null,this.googleDocURL=""}setDependencies(t){this.pxlFile=t.pxlFile,this.pxlCookie=t.pxlCookie,this.pxlTimer=t.pxlTimer,this.pxlAudio=t.pxlAudio,this.pxlUtils=t.pxlUtils,this.pxlUser=t.pxlUser,this.pxlDevice=t.pxlDevice,this.pxlAutoCam=t.pxlAutoCam,this.pxlCamera=t.pxlCamera,this.pxlNavCanvas=t.pxlNavCanvas,this.pxlQuality=t.pxlQuality,this.pxlEnv=t.pxlEnv,this.mobile=t.mobile,this.renderSettings=this.pxlCookie.readCookie(this.pxlUser.renderSettingsCookie),this.controlSettings=this.pxlCookie.readCookie(this.pxlUser.controlModeCookie),super.setDependencies(t)}init(){this.cssBuildClasses(),this.buildConsole()}prepLoader(){this.mapPromptBG=document.createElement("div"),this.mapPromptBG.classList.add("mapPromptBackgroundStyle"),document.body.appendChild(this.mapPromptBG),this.mapPrompt=document.createElement("div"),this.mapPrompt.setAttribute("id","mapPrompt"),this.mapPrompt.classList.add("mapPromptStyle"),this.mapPrompt.classList.add("fader"),this.mapPrompt.classList.add("visOn"),this.mapPrompt.innerHTML=`
            <div id="loaderBranding" class='pxlLoaderTitle'>${this.projectTitle}</div>
            <div class='loadStyleParent'>
              <div id='pxlLoader' class='loadStyle'></div>
              <div id='pxlLoaderBackground' class='loadStyleBackground'></div>
            </div>
          `,document.body.appendChild(this.mapPrompt),this.buildGuiStatus.loadingBranding&&ut.svgPromise(this.branding.loader,"loaderBranding","pxlLoaderTitle","loadBrandingLogo"),this.pxlLoader=document.getElementById("pxlLoader"),this.pxlLoader.style.width="2%";let t=document.createElement("div");t.classList.add("canvasCrashPromptBackgroundStyle"),document.body.appendChild(t);let i=document.createElement("div");i.classList.add("canvasCrashPromptStyle"),t.appendChild(i);let n;this.pxlQuality&&(parseInt(this.pxlQuality.detailLimit)==0?n=`Looks like your computer is having a hard time, but we\u2019ve got your fix.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle}.
          <br>If you\u2019re still having issues, drop us a line in the chat.`:n=`Looks like your computer is still having trouble, but we\u2019ve got another fix for ya.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle} again.
          <br>Again, if you\u2019re still having issues, drop us a line in the chat.`),i.innerHTML=n;let s=document.getElementById("crashLink"),r=this;s&&(s.onclick=o=>{r.crashLinkTrigger(o,r)})}stepLoader(t=""){this.pxlLoaderCount+=1;let i=Math.min(100,this.pxlLoaderCount/(this.pxlLoaderTotal-1)*100);i==100&&(this.pxlLoader.style.borderRadius="5px"),this.pxlLoader.style.width=i+"%",this.verbose>=hn.INFO&&console.log("Loader",this.pxlLoaderCount,this.pxlLoader.style.width,"; "+t)}booted(){this.buildHudBlock(),this.buildTopBar(),this.buildBottomBar(),this.buildGuiWindowContainer(),this.buildUserControlBlock(),this.buildRawHtml(),this.prepPageDisplay()}step(){this.updateGuiPositions(),this.pxlUser?.checkItemWearOff(this.pxlTimer.prevMS)&&this.hideItemHud(),this.pxlNavDataUpdate()}resize(){this.sW=window.innerWidth,this.sH=window.innerHeight,this.resetHelpTextPlacement(),["videoinput","audioinput","audiooutput"].forEach(i=>{let n=null,s=null;i=="videoinput"?(n="camChoiceOptionsBlock",s=this.hudIcons.camChoiceIcon):i=="audioinput"?(n="micChoiceOptionsBlock",s=this.hudIcons.micChoiceIcon):i=="audiooutput"&&(n="speakerChoiceOptionsBlock",s=this.hudIcons.speakerChoiceIcon);let r=document.getElementById(n);if(r&&s){let o=r.getBoundingClientRect().width,a=s.parent.getBoundingClientRect();r.style.left=a.x-o*.5,r.style.bottom=this.sH-this.hudBottomBar.getBoundingClientRect().y}}),this.setUserControlPosition(),this.inviteUserPosition(),this.setArtistInfoSizing()}resetHelpTextPlacement(){Object.keys(this.textDescriptions).forEach(i=>{let n=this.textDescriptions[i];if(n){let s=document.getElementById("helpText_"+i);if(!s)return;let r=document.getElementById(i);if(r){let o=2,a=n.pos,l=n.offset?n.offset:[0,0],c=r.getBoundingClientRect(),u=s.getBoundingClientRect(),d=0,h=0,p=!1;a[1]<0?(h=c.y+u.height*a[1],p=!0):a[1]==0?h=c.y+c.height*.5-u.height*.5:a[1]>0&&(h=c.y+c.height+u.height*(a[1]-1),p=!0),p?a[0]<0?d=c.x+c.width+u.width*a[0]:a[0]==0?d=c.x+c.width*.5-u.width*.5:a[0]>0&&(d=c.x+c.width*(a[0]-1)):a[0]<0?d=c.x+u.width*a[0]:a[0]==0?d=c.x+c.width*.5-u.width*.5:a[0]>0&&(d=c.x+c.width*2*a[0]),d=d+l[0],d+u.width>this.sW-o?d=this.sW-o-u.width:d<o&&(d=o),h=h+l[1],s.style.left=d,s.style.top=h}else s.style.display="none"}})}crashLinkTrigger(t,i){let n=location.search.match(/[a-zA-Z0-9=]+/g),s="?";n.forEach(r=>{let o=r.split("=");o[0]=="dlimit"?s+=o[0]+"="+(parseInt(o[1])+1)+"&":s+=r+"&"}),location.search=s}guiToggleVisibility(t=null){if(t=t??!this.hudVisibility,this.hudVisibility=t,this.hudTopBar&&!this.hudTopBar.origDisplay&&(this.hudTopBar.origDisplay=this.hudTopBar.style.display),this.fastTravelBar&&!this.fastTravelBar.origDisplay&&(this.fastTravelBar.origDisplay=this.fastTravelBar.style.display),this.hudBottomBar&&!this.hudBottomBar.origDisplay&&(this.hudBottomBar.origDisplay=this.hudBottomBar.style.display),t){if(this.hudTopBar&&this.hudTopBar.removeAttribute("style"),this.fastTravelBar&&this.fastTravelBar.removeAttribute("style"),this.hudBottomBar&&this.hudBottomBar.removeAttribute("style"),this.userControlBlock){let i=this.userControlBlock.gui.style.top;this.userControlBlock.gui.removeAttribute("style"),this.userControlBlock.gui.style.top=i}}else this.hudTopBar&&(this.hudTopBar.style.display="none"),this.fastTravelBar&&(this.fastTravelBar.style.display="none"),this.hudBottomBar&&(this.hudBottomBar.style.display="none"),this.userControlBlock&&(this.userControlBlock.gui.style.display="none");this.hudElements.artistInfo&&(this.hudElements.artistInfo.parent.style.display=t?"grid":"none")}cssBuildClasses(){let t=document.createElement("style");t.type="text/css",t.innerHTML=`
			.fader{
				transition: opacity .8s, filter .8s;
			}
			.visOn{
				filter:alpha(opacity=100);
				opacity:1.0;
			}
			.visOff{
				filter:alpha(opacity=0);
				opacity:0.0;
			}
		`,document.getElementsByTagName("head")[0].appendChild(t)}prepPromptFader(t,i=!1){let n=t;typeof n=="string"&&(n=document.getElementById(n),!n)||(n.classList.add("fader"),n.classList.add(i?"visOn":"visOff"),n.style.display=i?"inline-block":"none")}promptFader(t,i,n=null,s=!1){typeof t=="string"&&(t=document.getElementById(t),!t)||(t.classList.value.indexOf("fader")<0&&t.classList.add("fader"),i?(t.style.display="inline-block",setTimeout(()=>{t.classList.contains("visOff")&&(t.classList.remove("visOff"),t.classList.add("visOn"),n!=null&&(t.setAttribute("fadeOut",clockTime+n*1e3),fadeOutList.push(t)))},50)):(t.classList.remove("visOn"),t.classList.add("visOff"),s?["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"].forEach(o=>{t.addEventListener(o,()=>{let a=t.parentNode;a&&a.removeChild(t)})}):setTimeout(()=>{t.classList.contains("visOff")&&(t.style.display="none")},1e3)))}buildConsole(){let t=document.createElement("div");t.id="consoleBlock",t.classList.add("consoleBlockStyle"),document.body.appendChild(t),this.guiWindows.consoleBlock={active:!1,gui:t}}buildMessageBlock(t,i="Info"){let n=document.createElement("div");this.msgCount++,n.id="messageBlock-"+this.msgCount,n.classList.add("messageBlockStyle"),n.classList.add("message"+i);let s=this,r=document.createElement("div");r.classList.add("messageCloseBtn"),r.innerHTML="X",r.addEventListener("click",function(){s.removeMessage(n)});let o=document.createElement("div");o.classList.add("messageTopBarStyle");let a=document.createElement("div");a.classList.add("messageHeaderStyle"),a.innerHTML=i,o.appendChild(a),o.appendChild(r),n.appendChild(o);let l=document.createElement("div");return l.classList.add("messageContentStyle"),l.innerHTML=t,n.appendChild(l),n}print(t){this.guiWindows.consoleBlock||this.buildConsole(),this.guiWindows.consoleBlock.active||(this.guiWindows.consoleBlock.active=!0,this.promptFader(this.guiWindows.consoleBlock.gui,!0));let i=this.guiWindows.consoleBlock.gui,n=this.buildMessageBlock(t);i.appendChild(n)}buildHudBlock(){if(!this.buildGuiStatus.hud)return;let t=document.createElement("div");t.id="hudBlock",t.classList.add("hudBlockStyle"),this.hudBlock.obj=t,document.body.appendChild(this.hudBlock.obj),this.hudBlock.obj.style.display="none";let i=this;this.hudBlock.obj.addEventListener("click",n=>{i.toggleHudBlock(!1,!0)})}toggleHudBlock(t=null,i=!1){if(!this.hudBlock)return;t=t??!this.hudBlock.active,this.hudBlock.active=t;let n=!1;t?n="inline-block":this.checkOpenWindows(i)||(n="none",this.pxlNavCanvas&&this.pxlNavCanvas.focus()),this.hudBlock.obj&&this.hudBlock.obj.style&&n!=!1&&(this.hudBlock.obj.style.display=n)}checkOpenWindows(t=!1){let i=Object.keys(this.guiWindows),n=!1;return i.forEach(s=>{s!="chatBoxGui"&&(t&&(this.guiWindows[s].button&&this.flipIcon(this.guiWindows[s].button,!1),this.guiWindows[s].gui&&this.guiWindows[s].active&&(this.guiWindows[s].active=!1,this.promptFader(this.guiWindows[s].gui,!1),s=="settingsGui"&&this.togglePxlNavDataDisplay(!1))),n=n||this.guiWindows[s].active)}),n}checkFocus(t=null,i=null){i===!0&&this.guiWindows.inviteUserGui&&this.guiWindows.inviteUserGui.active&&this.toggleInviteUser(!1)}buildRawHtml(){}buildTopBar(){if(this.mobile||!this.buildGuiStatus.userTopBar)return;let t=document.createElement("div");t.id="hud_topBar",t.classList.add("hud_topBarBlockStyle"),this.hudTopBar=t,document.body.appendChild(this.hudTopBar);let i="";i='<div id="statsIcon"></div>',i+=`</div>
		<div id="usersIconParent">
			<div id="usersIcon"></div>`;let n;n=`
			<div id="hud_localVideoStyle" class="hud_localVideoStyle"></div>
			<div id="hud_topBarParent" class="hud_topBarParentStyle">
		<div id="statsIconParent">
			${i}
		</div>
		<div  class="hud_topBarVSpacerStyle"></div>
			</div>
		`,t.innerHTML=n,this.hudIcons.statsIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_stats.svg`,"statsIcon","stats"),this.hudIcons.statsIcon.promise.finally(()=>{}),this.hudIcons.usersIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_user.svg`,"usersIcon","users");let s=document.createElement("div");s.id="hud_pxlNavData",s.classList.add("hud_pxlNavDataParentStyle"),t.appendChild(s),this.pxlNavData.gui=s;let r=document.createElement("div");r.id="hud_pxlNavData",r.classList.add("hud_pxlNavDataStyle"),s.appendChild(r),n=`
      <div class="hud_pxlNavData_FPS gui_boldText">FPS</div><div class="hud_pxlNavData_FPS">:</div><div id="hud_pxlFPS" class="hud_pxlNavData_FPS"> - </div>
      <div class="hud_pxlNavData_UL gui_boldText">\u2191</div><div class="hud_pxlNavData_UL">:</div><div id="hud_pxlUL" class="hud_pxlNavData_UL"> - </div>
      <div class="hud_pxlNavData_DL gui_boldText">\u2193</div><div class="hud_pxlNavData_DL">:</div><div id="hud_pxlDL" class="hud_pxlNavData_DL"> - </div>
    `,r.innerHTML=n,this.pxlNavData.fps=document.getElementById("hud_pxlFPS"),this.pxlNavData.ul=document.getElementById("hud_pxlUL"),this.pxlNavData.dl=document.getElementById("hud_pxlDL")}buildUserControlBlock(){this.userControlBlock={},this.userControlBlock.activeList=[],this.userControlBlock.userList={},this.userControlBlock.mutedList=[];let t=document.createElement("div");t.classList.add("userControlBlockStyle"),document.body.appendChild(t),this.userControlBlock.gui=t,this.userControlBlock.speakerIcon=ut.svgRawPromise(`${this.guiRoot}icons/icon_userSpeaker.svg`)}buildMedalionBar(){if(this.buildGuiStatus.medalion){let t=document.createElement("div");t.id="hud_medalionBar",t.classList.add("hud_medalionIconBlockStyle"),this.hudMedalionBar=t,document.body.appendChild(this.hudMedalionBar);let i=`
        <div id="medalionIconParent" class="hud_speakerIconStyle">
          <div id="medalionIcon"></div>
        </div>
        <div id="medalionTitle" class="medalionTitleStyle">${this.branding.title}</div>
      `;this.hudMedalionBar.innerHTML=i;let n=document.getElementById("medalionIcon"),s=document.getElementById("medalionTitle");n.addEventListener("mouseover",()=>{s.classList.add("medalionTitleGrowStyle")}),n.addEventListener("mouseout",()=>{s.classList.remove("medalionTitleGrowStyle")}),this.hudIcons.medalionIcon=ut.svgIconPromise(this.branding.medalion,"medalionIcon","info",null,"medalionStyle")}}buildBottomBar(){if(!this.buildGuiStatus.bottomBar)return;let t=document.createElement("div");t.id="hud_bottomBar",t.classList.add("hud_bottomBarStyle"),this.hudBottomBar=t,document.body.appendChild(this.hudBottomBar);let i="";if(i+=`
    <div id="hud_chatIconBlock" class="hud_bottomLeftBlockStyle">
        <div id="settingsIconParent" class="hud_settingsIconStyle">
          <object id="settingsIcon"></object>
        </div>
  <div></div>
        <div id="helpIconParent" class="hud_helpIconStyle">
          <object id="helpIcon"></object>
        </div>
        `,!this.mobile&&this.buildGuiStatus.verseList&&(i+=`<div class="hud_usersIconStyle">
            <div id="multiverseIcon"></div>
          </div>
          <div></div>`),i+="</div>",this.mobile||(i+=`
        <div class="hud_micCamIconsBlockStyle">
          <div id="speakerIconParent" class="hud_speakerIconStyle">
            <div id="speakerIcon"></div>
          </div>
          <div id="speakerChoiceIconParent" class="hud_speakerChoiceIconStyle">
            <div id="speakerChoiceOptionsBlock" class="gui_iconButtonPopup">
            </div>
            <div id="speakerChoiceIconParent">
              <div id="speakerChoiceIcon" class="iconCaretStyle"></div>
            </div>
          </div>
          <div class="hud_micCamSpacerStyle"></div>
          <div id="micIconParent" class="hud_micIconStyle">
            <div id="micIcon"></div>
          </div>
          <div id="micChoiceIconParent" class="hud_micChoiceIconStyle">
            <div id="micChoiceOptionsBlock" class="gui_iconButtonPopup">
            </div>
            <div id="camChoiceIconParent">
              <div id="micChoiceIcon" class="iconCaretStyle"></div>
            </div>
          </div>
          <div class="hud_micCamSpacerStyle"></div>
          <div id="camIconParent" class="hud_camIconStyle">
            <div id="camIcon"></div>
          </div>
          <div id="camChoiceIconBlock" class="hud_camChoiceIconStyle">
            <div id="camChoiceOptionsBlock" class="gui_iconButtonPopup">
            </div>
            <div id="camChoiceIconParent">
              <div id="camChoiceIcon" class="iconCaretStyle"></div>
            </div>
          </div>
        </div>
        
        <div id="hud_helpInfoSettingsBlock" class="hud_helpInfoSettingsBlockStyle">
          <div class="guiVerseHudTitle">
            <span id="guiVerseTitle"></span>
          </div>
          <div></div>
          <div id="chatIconParent" class="hud_chatIconStyle">
            <div id="chatIcon"></div>
          </div>
          <div id="hud_messageCount" class="hud_userCountStyle hud_messageCountBaseStyle">0</div>
        </div>
      `),this.hudBottomBar.innerHTML=i,this.messageCountObj=document.getElementById("hud_messageCount"),this.hudIcons.chatIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_chat.svg`,"chatIcon","chat"),!this.mobile&&!this.pxlAutoCam.enabled){this.hudIcons.multiverseIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_multiverse.svg`,"multiverseIcon","multiverse"),this.hudIcons.speakerIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_ProxAudio.svg`,"speakerIcon","speakerToggle",!1),this.hudIcons.speakerChoiceIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"speakerChoiceIcon","speakerChoice",!1,"iconCaretStyle"),this.hudIcons.micIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_mic.svg`,"micIcon","micToggle",!1),this.hudIcons.micChoiceIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"micChoiceIcon","micChoice",!1,"iconCaretStyle"),this.hudIcons.camIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_camera.svg`,"camIcon","camToggle",!1),this.hudIcons.camChoiceIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"camChoiceIcon","camChoice",!1,"iconCaretStyle"),this.hudIcons.helpIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_help.svg`,"helpIcon","help"),this.hudIcons.settingsIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_settings.svg`,"settingsIcon","settings");let n=document.getElementById("guiVerseTitle"),s=this}else{let n=document.getElementById("hud_chatIconBlock");n.style.gridAutoColumns="max-content max-content auto max-content",n.style.margin="0px 10px"}}prepArtistInfo(t=null){if(!(!this.pxlEnv?.postIntro||t=="")){if(!this.hudElements.artistInfo){this.hudElements.artistInfo={},this.hudElements.artistInfo.active=!1;let i=document.createElement("div");i.classList.add("hud_aristInfoParentStyle"),this.hudElements.artistInfo.parent=i;let n=document.createElement("div");n.classList.add("hud_aristInfoButtonStyle"),i.appendChild(n);let s=this;n.onclick=()=>{s.toggleArtistInfo()},this.hudElements.artistInfo.button=n;let r=document.createElement("div");r.classList.add("hud_aristInfoButtonTextStyle"),r.innerHTML="artwork info&nbsp;&nbsp;",n.appendChild(r),this.hudElements.artistInfo.buttonText=r;let o=document.createElement("div");o.classList.add("hud_aristInfoCarrotXStyle"),o.id="artistInfoCarrotX",n.appendChild(o);let a=document.createElement("div");a.classList.add("hud_aristInfoInner"),a.innerHTML=t,i.appendChild(a),this.hudElements.artistInfo.inner=a,document.body.appendChild(i),this.hudElements.artistInfo.closeSvg=ut.svgPromise(`${this.guiRoot}global/carrotCloseAnimate.svg`,"artistInfoCarrotX"),this.hudElements.artistInfo.closeSvg.promise.finally(()=>{this.artistInfoButtonPrep()})}this.toggleArtistInfo(!1),t!=null&&this.hudVisibility&&!this.pxlAutoCam.active?(this.hudElements.artistInfo.parent.style.zIndex=155,this.hudElements.artistInfo.parent.style.display="grid",this.hudElements.artistInfo.inner.innerHTML=t,setTimeout(()=>{this.setArtistInfoSizing()},20)):(this.hudElements.artistInfo.parent.style.zIndex=-5,this.hudElements.artistInfo.parent.style.display="none")}}artistInfoButtonPrep(t=0){let i=this.hudElements.artistInfo.closeSvg.svg;if(i){let n=i.getElementById("carrotToClone_on"),s=i.getElementById("carrotToClone_off");n&&s?(this.hudElements.artistInfo.onAnim=n,this.hudElements.artistInfo.offAnim=s):t==2||setTimeout(()=>{this.artistInfoButtonPrep(t+=1)},100)}}setArtistInfoSizing(){if(this.hudElements.artistInfo){let t=this.hudElements.artistInfo.inner.clientHeight,i=this.hudElements.artistInfo.inner.clientWidth,n=this.hudElements.artistInfo.button.clientHeight,s=this.hudElements.artistInfo.button.clientWidth;this.hudElements.artistInfo.innerHeight=t,this.hudElements.artistInfo.innerWidth=i,this.hudElements.artistInfo.baseHeight=n,this.hudElements.artistInfo.baseWidth=s,this.hudElements.artistInfo.parent.style.height=t+"px",this.hudElements.artistInfo.parent.style.width=i+"px";let r=this.hudElements.artistInfo.buttonText.clientWidth;this.hudElements.artistInfo.buttonText.maxWidth=r,this.hudElements.artistInfo.buttonText.style.maxWidth=r+"px",this.toggleArtistInfo(this.hudElements.artistInfo.active)}}toggleArtistInfo(t=null){t=t??!this.hudElements.artistInfo.active,this.hudElements.artistInfo.active=t;let i=this.hudElements.artistInfo.innerHeight,n=Math.min(this.pxlDevice.sW*.3,this.hudElements.artistInfo.innerWidth),s=this.hudElements.artistInfo.baseHeight,r=this.hudElements.artistInfo.baseWidth;this.hudElements.artistInfo.parent.style.maxHeight=t?i+"px":s+"px",this.hudElements.artistInfo.parent.style.maxWidth=t?n+"px":r+"px",this.hudElements.artistInfo.parent.style.padding=t?"5px":"0px";let o=this.hudElements.artistInfo.buttonText.maxWidth;this.hudElements.artistInfo.buttonText.style.maxWidth=t?"0px":o+"px",this.hudElements.artistInfo.buttonText.style.opacity=t?"0":"1",this.hudElements.artistInfo.buttonText.style.filter="alpha(opacity="+(t?"0":"1000")+")",this.hudElements.artistInfo.inner.style.opacity=t?"1":"0",this.hudElements.artistInfo.inner.style.filter="alpha(opacity="+(t?"100":"0")+")",this.hudElements.artistInfo.onAnim&&(t?this.hudElements.artistInfo.onAnim.beginElement():this.hudElements.artistInfo.offAnim.beginElement())}prepPageDisplay(t=null){if(!(!this.pxlEnv?.postIntro||t=="")){if(!this.hudElements.artistInfo){this.hudElements.artistInfo={},this.hudElements.artistInfo.active=!1;let i=document.createElement("div");i.classList.add("hud_aristInfoParentStyle"),this.hudElements.artistInfo.parent=i;let n=document.createElement("div");n.classList.add("hud_aristInfoButtonStyle"),i.appendChild(n);let s=this;n.onclick=()=>{s.togglePageDisplay()},this.hudElements.artistInfo.button=n;let r=document.createElement("div");r.classList.add("hud_aristInfoButtonTextStyle"),r.innerHTML="artwork info&nbsp;&nbsp;",n.appendChild(r),this.hudElements.artistInfo.buttonText=r;let o=document.createElement("div");o.classList.add("hud_aristInfoCarrotXStyle"),o.id="artistInfoCarrotX",n.appendChild(o);let a=document.createElement("div");a.classList.add("hud_aristInfoInner"),a.innerHTML=t,i.appendChild(a),this.hudElements.artistInfo.inner=a,document.body.appendChild(i)}this.togglePageDisplay(!1),t!=null&&this.hudVisibility&&!this.pxlAutoCam.active?(this.hudElements.artistInfo.parent.style.zIndex=155,this.hudElements.artistInfo.parent.style.display="grid",this.hudElements.artistInfo.inner.innerHTML=t,setTimeout(()=>{this.setArtistInfoSizing()},20)):(this.hudElements.artistInfo.parent.style.zIndex=-5,this.hudElements.artistInfo.parent.style.display="none")}}setPageToDisplay(){if(this.hudElements.artistInfo){let t=this.hudElements.artistInfo.inner.clientHeight,i=this.hudElements.artistInfo.inner.clientWidth,n=this.hudElements.artistInfo.button.clientHeight,s=this.hudElements.artistInfo.button.clientWidth;this.hudElements.artistInfo.innerHeight=t,this.hudElements.artistInfo.innerWidth=i,this.hudElements.artistInfo.baseHeight=n,this.hudElements.artistInfo.baseWidth=s,this.hudElements.artistInfo.parent.style.height=t+"px",this.hudElements.artistInfo.parent.style.width=i+"px";let r=this.hudElements.artistInfo.buttonText.clientWidth;this.hudElements.artistInfo.buttonText.maxWidth=r,this.hudElements.artistInfo.buttonText.style.maxWidth=r+"px",this.toggleArtistInfo(this.hudElements.artistInfo.active)}}togglePageDisplay(t=null){if(this.hudElements.artistInfo){t=t??!this.hudElements.artistInfo.active,this.hudElements?.artistInfo&&(this.hudElements.artistInfo.active=t);let i=this.hudElements.artistInfo.innerHeight,n=Math.min(this.pxlDevice.sW*.3,this.hudElements.artistInfo.innerWidth),s=this.hudElements.artistInfo.baseHeight,r=this.hudElements.artistInfo.baseWidth;this.hudElements.artistInfo.parent.style.maxHeight=t?i+"px":s+"px",this.hudElements.artistInfo.parent.style.maxWidth=t?n+"px":r+"px",this.hudElements.artistInfo.parent.style.padding=t?"5px":"0px";let o=this.hudElements.artistInfo.buttonText.maxWidth;this.hudElements.artistInfo.buttonText.style.maxWidth=t?"0px":o+"px",this.hudElements.artistInfo.buttonText.style.opacity=t?"0":"1",this.hudElements.artistInfo.buttonText.style.filter="alpha(opacity="+(t?"0":"1000")+")",this.hudElements.artistInfo.inner.style.opacity=t?"1":"0",this.hudElements.artistInfo.inner.style.filter="alpha(opacity="+(t?"100":"0")+")",this.hudElements.artistInfo.onAnim&&(t?this.hudElements.artistInfo.onAnim.beginElement():this.hudElements.artistInfo.offAnim.beginElement())}}iconEvent(t,i,n=null){if(this.hudBlock.obj&&(this.hudBlock.obj.style.display="none"),t=="click"){if(n=="chat"){this.toggleChatBox();return}else if(n=="musicToggle"){this.pxlAudio.djPlayerMuteToggle(),this.toggleIcon(i,!this.pxlAudio.djMuted,!0);return}else if(n=="userSpeakerToggle"){this.setUserControls(i);return}else if(n=="speakerToggle"){this.toggleIcon(i,!1,!0);return}else if(n=="speakerChoice"){let s="audiooutput";this.flipIcon(i,this.guiWindows[s]&&this.guiWindows[s].active);return}else if(n=="help"){let s=this.guiWindows.helpGui?this.guiWindows.helpGui.active:!1;this.checkOpenWindows(!0),this.helpGuiToggle(!s);return}else if(n=="info"){let s=this.guiWindows.infoGui?this.guiWindows.infoGui.active:!1;this.checkOpenWindows(!0),this.infoGuiToggle(!s);return}else if(n=="settings"){let s=this.guiWindows.settingsGui?this.guiWindows.settingsGui.active:!1;this.checkOpenWindows(!0),this.settingsGuiToggle(!s);return}else if(n=="userProfile"){this.toggleUserProfile();return}else if(n!="users"){if(n=="stats")return}}}setMicVolumeLevel(t){this.hudIcons.micIcon.volumeMask||(this.hudIcons.micIcon.volumeMask=document.getElementById("gui_micVolumeMask"),this.hudIcons.micIcon.timer=this.pxlTimer.msRunner.x-1);let i=12-t*11;this.hudIcons.micIcon.volumeMask.setAttribute("y",i)}toggleIcon(t,i,n=!1){if(t){if(t.mute.style.filter=i?"alpha(opacity=0)":"alpha(opacity=100)",t.mute.style.opacity=i?"0":"1",t.mute.style.transform=i?"scale(0,0)":"scale(1,1)",["camToggle","speakerToggle"].includes(t.eventType))return;let r={speakerToggle:"speaker",micToggle:"audio",camToggle:"video"}[t.eventType];r&&n&&this.loadingDeviceChange(r,i)}}flipIcon(t,i){t.caret.style.transform=`rotate( ${i?"180deg":"0deg"} )`}loadingDeviceChange(t,i=!0){let n=null;t=="speaker"?n=this.hudIcons.speakerIcon:t=="audio"?n=this.hudIcons.micIcon:t=="video"&&(n=this.hudIcons.camIcon),n.indicator.style.display=i?"inline-block":"none",n.indicator.style.animationPlayState=i?"running":"paused",n.waiting.forEach(s=>{s.setAttribute("fill-opacity",i?".5":"1")}),i&&setTimeout(()=>{this.loadingDeviceChange(t,!1)},1e3)}djBuildPlayer(){if(this.buildGuiStatus.djPlayer){this.djPlayerObj=document.createElement("div"),this.djPlayerObj.id="djPlayer";let t=`
          <audio id="djStream" playsinline muted>
            <source src="`+this.pxlAudio.djUrlSource+`"></source>
          </audio>
          <table cellpadding=0 cellspacing=5 border=0 style="height:100%;"><tbody><tr>
              <td align="left">
                  <div id="djPlayerVol"></div>
              <  d><td valign="center" align="left" width=100%>
                  <div id="djPlayerVolumeParent" class="volParent"><div id="djPlayerVolume" class="volSlider"></div></div>
              <  d><  r>
          <  body><  able>`;this.djPlayerObj.innerHTML=t,document.getElementById("musicControllerBlock").appendChild(this.djPlayerObj),this.hudIcons.musicIcon=ut.svgIconPromise(`${this.guiRoot}icons/icon_music.svg`,"djPlayerVol","musicToggle",!this.pxlAudio.djMuted),this.pxlAudio.djBuildPlayer()}}buildItemHud(t,i){this.activeItem.innerHTML=i,this.activeItem.style.opacity="1",this.activeItem.style.filter="alpha(opacity=100)",this.activeItem.style.textShadow="1px 1px 3px #000000",setTimeout(()=>{this.activeItem.style.fontSize="1.5em",this.activeItem.style.top=".5%",this.activeItem.style.right="140px",this.activeItem.style.transform="translateX(0%)"},1500)}hideItemHud(){this.activeItem.innerHTML="",this.activeItem.style.fontSize="3em",this.activeItem.style.top="10%",this.activeItem.style.right="50%",this.activeItem.style.transform="translateX(50%)",this.activeItem.style.opacity="0",this.activeItem.style.filter="alpha(opacity=0)"}mapPrepPrompts(){this.activeItem=document.createElement("div"),this.activeItem.classList.add("activeItemStyle"),document.body.appendChild(this.activeItem)}updateGuiPositions(){if(this.loading){let t=this.radioControls.length,i=!1;for(let n=0;n<t;++n){if(!this.radioControls[n][3]){i=!0;break}let s=this.radioControls[n][0],o=this.radioControls[n][2].getBoundingClientRect(),a=o.width+this.buttonPadding*2,l=o.height+this.buttonPadding*2,c=o.top-this.buttonPadding,u=o.left-this.buttonPadding;s.style.width=a,s.style.height=l,s.style.top=c,s.style.left=u,this.radioControls[n][1].style.width=a,this.radioControls[n][1].style.height=l,this.radioControls[n][1].style.top=c,this.radioControls[n][1].style.left=u}this.loading=i}}togglGuiWindow(t=null,i=!1){t=="helpGui"?this.helpGuiToggle(i,!1):t=="infoGui"?this.infoGuiToggle(i,!1):t=="settingsGui"&&this.settingsGuiToggle(i,!1)}svgCheckClick(t=null,i=null){if(i)if(i=="close"){this.toggleGuiWindowContainer(null,!1,!0);return}else{if(i=="ft1")return;if(i=="ft2")return;if(i=="ft3"){this.toggleInviteUser();return}else{if(i=="ft4")return;if(i=="ft5"){this.pxlAutoCam.toggleAutoCam();return}}}}svgStylize(t=null,i=!1){if(!t)return;let n=t.path?t.path[1]:t.target.parentNode,s=n.getElementById("state");if(s){let o=i?"white":"none";s.setAttribute("fill",o)}let r=n.getElementById("hover");r&&r.setAttribute("fill",color)}renderQualitySettings(t){this.pxlQuality.percent=t,this.pxlQuality.screenResPerc=t*.75+.25,this.pxlQuality.mapAutoQualityUpdate(t,!0),this.pxlDevice.resizeRenderResolution()}pxlNavDataUpdate(){this.pxlNavData.active&&this.pxlTimer.msRunner.x>this.pxlNavData.fpsSet&&(this.pxlNavData.fpsSet=this.pxlTimer.msRunner.x+1,this.pxlNavData.fps.innerText=parseInt(1/this.pxlTimer.msRunner.y))}buildGuiWindowContainer(){let t=document.createElement("div");t.classList.id="guiWindowBackground",t.classList.add("guiWindowBackground"),t.classList.add("fader"),t.classList.add("visOff"),t.style.display="none";let i=this;t.onclick=n=>{i.toggleGuiWindowContainer(n,!1,!0)},this.guiWindowBG=t,document.body.appendChild(t)}toggleGuiWindowContainer(t,i,n=!1){if(t){let o=(t.path?t.path[0]:t.target).getAttribute("id");if(o!="guiWindowBackground"&&!["gui_helpGuiWindow","gui_helpContent","gui_infoGuiWindow","gui_infoContent","gui_settingsGuiWindow","gui_settingsContent"].includes(o))return null}let s=this.checkOpenWindows(n);this.guiWindowBG&&s==i&&this.promptFader(this.guiWindowBG,i,null,!1),i?this.pxlNavCanvas.blur():this.pxlNavCanvas.focus()}helpGuiBuild(){this.guiWindows.helpGui={},this.guiWindows.helpGui.gui=null,this.guiWindows.helpGui.active=!1;let t=document.createElement("div");t.id="gui_helpGuiWindow",t.classList.add("gui_helpGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="";i+=`
    <div id="gui_helpContent" class="gui_contentStyle">
  <div class="gui_body">
    <div id="gui_helpGui_keyboardParent" class="gui_helpGui_keyboardParent">
    <div id="gui_helpGui_controlsKeyboard" class="guiPadding settings_sectionHeader">keyboard controls</div>
    <div class="gui_helpGui_ASDWorUDLR">
      <div id="gui_helpGui_asdw" class="gui_helpGui_asdw"></div>
      <div id="gui_helpGui_or" class="gui_helpGui_text">or</div>
      <div id="gui_helpGui_udlr" class="gui_helpGui_udlr"></div>
    </div>
    <div id="gui_helpGui_useKeys" class="gui_helpGui_text" style="display:inline-block;">Use your keyboard <span class="gui_boldText">ARROWS</span> or<br><span class="gui_boldText">AWSD</span> keys to move around</div>
    </div>
    <div id="gui_helpGui_mouse" class="gui_helpGui_mouse">
    <div id="gui_helpGui_MouseControls" class="guiPadding settings_sectionHeader">mouse controls</div>
    <div id="gui_helpGui_MouseOutlined" class="gui_helpGui_mouseOutline"></div>
    <div id="gui_helpGui_useMouse" class="guiPadding gui_helpGui_text" style="display:inline-block;">To orient your view:<br><span class="gui_boldText">LEFT CLICK</span> and drag your mouse<br><span class="gui_boldText">RIGHT CLICK</span> to lock your mouse</div>
    </div>
  </div>
  <div id="gui_helpGui_hotKeys" class="gui_helpGui_hotKeys">
          You can change <span class="gui_boldText">Navigation</span> and <span class="gui_boldText">Look controls</span> in the <span class="gui_boldText">Settings</span> <span id="gui_helpGui_settingIcon"></span> menu
        </div>
  <div id="guiHelpFooter" class="gui_footer">
    <div class="guiButton" id="guiHelpBackButton">close</div>
  </div>
  <div class="gui_spacer"></div>
    </div>
  `,t.innerHTML=i,[[this.guiRoot+"keyboard/asdw.svg","gui_helpGui_asdw","guiKeyDispSVG",!1],[this.guiRoot+"keyboard/udlr.svg","gui_helpGui_udlr","guiKeyDispSVG",!1],[this.guiRoot+"mouse/MouseOutlined.svg","gui_helpGui_MouseOutlined","guiMouseDispSVG",!1]].forEach(l=>{ut.svgButtonPromise(...l)});let s=this,r=document.getElementById("guiHelpBackButton");r.onclick=l=>{s.introHelpActive&&(s.introHelpActive=!1,s.pxlEnv.postHelpIntro()),s.svgCheckClick(l,"close")},Object.keys(this.textDescriptions).forEach(l=>{let c=this.textDescriptions[l];if(c){let u=c.text,d=c.pos,h=document.createElement("div");h.id="helpText_"+l,h.classList.add("helpTextDescriptionParent"),h.innerHTML=u,t.appendChild(h),this.textDescriptions[l].obj=h}});let a=document.getElementById("gui_helpGui_settingIcon");a&&this.hudIcons.settingsIcon&&(a.innerHTML=this.hudIcons.settingsIcon.svg.parentNode.innerHTML,a.style.position="relative",a.style.top="7.3px",a.style.width="30px",a.style.padding="2px",a.style.cursor="pointer",a.children[0].style.height="26px",a.onclick=()=>{s.iconEvent("click",null,"settings")}),this.guiWindows.helpGui.gui=t,setTimeout(()=>{this.resize()},50)}helpGuiToggle(t=null,i=!0){this.guiWindows.helpGui||this.helpGuiBuild(),t=t??!this.guiWindows.helpGui.active,this.guiWindows.helpGui.active=t,this.promptFader(this.guiWindows.helpGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t),this.introHelpActive&&!t&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro()),setTimeout(()=>{this.resetHelpTextPlacement()},20)}infoGuiBuild(){this.guiWindows.infoGui={},this.guiWindows.infoGui.gui=null,this.guiWindows.infoGui.active=!1;let t=document.createElement("div");t.id="gui_infoGuiWindow",t.classList.add("gui_infoGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="";i+=`
    <div id="gui_infoContent" class="gui_contentInfoStyle">
  <div class="gui_infoBody">
    <div id="gui_infoGuiParent" class="gui_infoGuiParent">
    <br>${this.projectTitle}, created by <a href="https://www.theumbrella.nyc/">The Umbrella</a>,
    <br>an experience design collective.
    <br>
    <br>Want to chat?
    <br><a href="mailto:info@theumbrella.nyc">info@theumbrella.nyc</a>
    <br>
    <br>We\u2019re in active development. Get in touch if you have any issues.
    <br>
    </div>
  </div>
  <div id="guiInfoFooter" class="gui_footer">
    <div class="guiButton" id="guiInfoBackButton">close</div>
  </div>
    </div>
  `,t.innerHTML=i;let n=this,s=document.getElementById("guiInfoBackButton");s.onclick=r=>{n.svgCheckClick(r,"close")},this.guiWindows.infoGui.gui=t}infoGuiToggle(t=null,i=!0){this.guiWindows.infoGui||this.infoGuiBuild(),t=t??!this.guiWindows.infoGui.active,this.guiWindows.infoGui.active=t,this.promptFader(this.guiWindows.infoGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t),this.introHelpActive&&!t&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro())}applyCookies(){this.controlSettings&&(this.controlSettings=eval(this.controlSettings)),this.renderSettings&&(this.renderSettings=eval(this.renderSettings))}settingsGuiBuild(){this.guiWindows.settingsGui={},this.guiWindows.settingsGui.gui=null,this.guiWindows.settingsGui.active=!1;let t=document.createElement("div");t.id="gui_settingsGuiWindow",t.classList.add("gui_settingsGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="Default";i=i||"";let n=`
    <div id="gui_settingsContent" class="gui_contentSettingsStyle">
  <div class="gui_settingsBody">
    <div class="gui_settingsParentGrid">
      <!-- -- Username -- -- -->
    <div class="cellMargin settings_icon" id="settings_user"></div>
    <div class="settings_optionHeader">Username</div>
    <div class="settings_radio" style="grid-auto-flow: row; justify-content: start;">
                    <div id="guiuserProfileBoxFieldParent" class="gui_userProfileBoxFieldParentStyle">
                      <input type="text" placeholder="Set your username" value="${i}" id="settings_usernameInput" class="settings_usernameInput"></input>
                      <input type="button" value="Set" id="settings_sendUsername" class="sendUsername">
                    </div>
                    <div id="settings_usernameResponseMessage" class="usernameResponseMessageStyle"></div>
                </div>
      <!-- -- -- -- -- -- -->
    <div class="settingsGridSpan settingsSpacer"></div>
      <!-- -- Left/Right -- -- -->
    <div class="cellMargin settings_icon" id="settings_left_right"></div>
    <div class="settings_optionHeader">Left/Right</div>
    <div class="settings_radio" id="settingsRadioBlock_leftRight">
      <span>
      <input type="radio" id="settings_tankTurning" name="settings_leftRight" value="0" hidden>
      <label for="settings_tankTurning">Turn</label>
      </span>
      <span>
      <input type="radio" id="settings_strafing" name="settings_leftRight" value="1" hidden>
      <label for="settings_strafing">Strafe</label>
      </span>
    </div>
      <!-- -- Mouse -- -- -->
    <div class="cellMargin settings_icon" id="settings_mouse"></div>
    <div class="settings_optionHeader">Mouse Looking</div>
    <div class="settings_radio" id="settingsRadioBlock_mouse">
      <span>
      <input type="radio" id="settings_dragLooking" name="settings_mouse" value="0" hidden>
      <label for="settings_dragLooking">Native</label>
      </span>
      <span>
      <input type="radio" id="settings_pointLooking" name="settings_mouse" value="1" hidden>
      <label for="settings_pointLooking">Inverted</label>
      </span>
    </div>
      <!-- -- -- -- -- -- -->
    <div class="settingsGridSpan settingsSpacer"></div>
      <!-- -- Graphics Quality -- -- -->
    <div class="cellMargin settings_icon" id="settings_graphics"></div>
    <div class="settings_optionHeader">Graphics Quality</div>
    <div class="settings_radio" id="settingsRadioBlock_graphics">
      <span>
      <input type="radio" id="settings_graphicsQuality_low" name="settings_autoQuality" value="0" hidden>
      <label for="settings_graphicsQuality_low">Low</label>
      </span>
      <span>
      <input type="radio" id="settings_graphicsQuality_med" name="settings_autoQuality" value="1" hidden>
      <label for="settings_graphicsQuality_med">Medium</label>
      </span>
      <span>
      <input type="radio" id="settings_graphicsQuality_high" name="settings_autoQuality" value="2" hidden>
      <label for="settings_graphicsQuality_high">High</label>
      </span>
      <span>
      <input type="radio" id="settings_graphicsQuality_custom" name="settings_autoQuality" value="3" hidden>
      <label for="settings_graphicsQuality_custom">Custom</label>
      </span>
    </div>
      <!-- -- -- -- -->
      <div class="r7Adv gui_settingsAdvancedParentGrid" id="gui_advancedSettings">
    <!-- -- -- -- -->
      <div class="cellMargin settings_icon" id="settings_render"></div>
      <div class="settings_optionHeader">Render Resolution</div>
      <div class="settings_radio" id="settingsRadioBlock_resolution">
      <span>
        <input type="radio" id="settings_render_25" name="settings_renderPerc" value=".25" hidden>
        <label for="settings_render_25">25%</label>
      </span>
      <span>
        <input type="radio" id="settings_render_50" name="settings_renderPerc" value=".5" hidden>
        <label for="settings_render_50">50%</label>
      </span>
      <span>
        <input type="radio" id="settings_render_75" name="settings_renderPerc" value=".75" hidden>
        <label for="settings_render_75">75%</label>
      </span>
      <span>
        <input type="radio" id="settings_render_100" name="settings_renderPerc" value="1" hidden>
        <label for="settings_render_100">100%</label>
      </span>
      </div>
    <!-- -- -- -- -->
      <div class="cellMargin settings_icon" id="settings_fog"></div>
      <div class="settings_optionHeader">Fog Quality</div>
      <div class="settings_radio" id="settingsRadioBlock_fog">
      <span>
        <input type="radio" id="settings_noRedFog" name="settings_fogLevel" value="0" hidden>
        <label for="settings_noRedFog">Low</label>
      </span>
      <span>
        <input type="radio" id="settings_cheapResFog" name="settings_fogLevel" value="1" hidden>
        <label for="settings_cheapResFog">Medium</label>
      </span>
      <span>
        <input type="radio" id="settings_highResFog" name="settings_fogLevel" value="2" hidden>
        <label for="settings_highResFog">High</label>
      </span>
      </div>
    <!-- -- -- -- -->
      <div class="cellMargin settings_icon" id="settings_bloom"></div>
      <div class="settings_optionHeader">Bloom Effects</div>
      <div class="settings_radio" id="settingsRadioBlock_bloom">
      <span>
        <input type="radio" id="settings_noBloom" name="settings_bloomEffects" value="0" hidden>
        <label for="settings_noBloom">Off</label>
      </span>
      <span>
        <input type="radio" id="settings_bloomActive" name="settings_bloomEffects" value="1" hidden>
        <label for="settings_bloomActive">On</label>
      </span>
      </div>
    <!-- -- -- -- -->
      </div>
    </div>
      <div class="settingsGridSpan settingsEmptySpacer"></div>
    </div>
    <div class="guiSettingsFooterButtons">
    <div class="guiButton" id="guiSettingsBackButton">close</div>
    </div>
  </div>
    </div>
  `;t.innerHTML=n,this.guiWindows.settingsGui.gui=t;let s=this;this.qualitySlider=document.getElementById("SettingsGraphicsQualitySlider");let r=document.getElementById("guiSettingsBackButton");r.onclick=h=>{s.svgCheckClick(h,"close")},[[this.guiRoot+"settingsIcons/settings_user.svg","settings_user",["settings_icon_scale"],!1],[this.guiRoot+"settingsIcons/settings_left_right.svg","settings_left_right",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_mouse.svg","settings_mouse",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_graphics.svg","settings_graphics",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_render.svg","settings_render",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_fog.svg","settings_fog",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_bloom.svg","settings_bloom",["settingsIconStyle"],!1]].forEach(h=>{ut.svgButtonPromise(...h)});let a=document.getElementById("settings_usernameInput");a.onkeyup=h=>{s.keyUsernameSet(h)},a.onkeydown=h=>{s.keyDownUsernameSet(h)},this.guiWindows.settingsGui.usernameInput=a,document.getElementById("settings_sendUsername").addEventListener("click",()=>{s.sendUsernameUpdate(a)});let c=document.getElementById("settings_usernameResponseMessage");this.guiWindows.settingsGui.usernameReturn=c;let u,d;this.guiWindows.settingsGui.advObj=document.getElementById("gui_advancedSettings"),this.guiWindows.settingsGui.customObj=document.getElementById("settings_graphicsQuality_custom"),u=["settings_graphicsQuality_low","settings_graphicsQuality_med","settings_graphicsQuality_high","settings_graphicsQuality_custom"],d=u.length;for(let h=0;h<d;++h){let p=u[h],f=document.getElementById(p);this.setRadioStyle(f,h,d);let m=parseInt(f.value);f.addEventListener("change",w=>{s.pxlQuality.setQualityLevel(m),s.setRadioValues()})}u=["settings_render_25","settings_render_50","settings_render_75","settings_render_100"],d=u.length;for(let h=0;h<d;++h){let p=u[h],f=document.getElementById(p);this.setRadioStyle(f,h,d);let m=parseFloat(f.value);f.addEventListener("change",w=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({resolution:m}),s.pxlQuality.setQualityCookie(3)})}u=["settings_noRedFog","settings_cheapResFog","settings_highResFog"],d=u.length;for(let h=0;h<d;++h){let p=u[h],f=document.getElementById(p);this.setRadioStyle(f,h,d);let m=f.value;f.addEventListener("change",w=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({fog:m}),s.pxlQuality.setQualityCookie(3)})}u=["settings_noBloom","settings_bloomActive"],d=u.length;for(let h=0;h<d;++h){let p=u[h],f=document.getElementById(p);this.setRadioStyle(f,h,d);let m=f.value==1;f.addEventListener("change",w=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({bloom:m}),s.pxlQuality.setQualityCookie(3)})}u=["settings_tankTurning","settings_strafing"],d=u.length;for(let h=0;h<d;++h){let p=u[h],f=document.getElementById(p);this.setRadioStyle(f,h,d);let m=f.value==1;f.addEventListener("change",w=>{s.pxlQuality.setGraphicsSettings({leftRight:m},null)})}u=["settings_dragLooking","settings_pointLooking"],d=u.length;for(let h=0;h<d;++h){let p=u[h],f=document.getElementById(p);this.setRadioStyle(f,h,d);let m=f.value==1;f.addEventListener("change",w=>{s.pxlQuality.setGraphicsSettings({mouse:m},null)})}this.setRadioValues()}setRadioStyle(t,i,n){let s="settings_radio_label_mid";i==0?s="settings_radio_label_start":i==n-1&&(s="settings_radio_label_end"),t.parentNode.children[1].classList.add(s)}setRadioValues(){let t=this.pxlQuality.settings;Object.keys(t).forEach(n=>{let s=document.getElementById("settingsRadioBlock_"+n);if(s){let r=n=="resolution"?t[n]*4-1:~~t[n];s.children[r].children[0].checked=!0}})}settingsGuiAdvObjSizing(t=!0){let i=this.guiWindows.settingsGui.advObj,n=i.offsetHeight;i.style.maxHeight=(t?n:0)+"px",i.setAttribute("maxHeight",n)}settingsGuiToggle(t=null,i=!0){this.guiWindows.settingsGui||this.settingsGuiBuild(),t=t??!this.guiWindows.settingsGui.active,t&&this.guiWindows.settingsGui&&(this.guiWindows.settingsGui.usernameReturn.innerText=""),this.guiWindows.settingsGui.active=t,this.promptFader(this.guiWindows.settingsGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t),this.toggleHudBlock(t,!1),this.togglePxlNavDataDisplay(t),this.introHelpActive&&!t&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro())}togglePxlNavDataDisplay(t=null){t==null&&(this.guiWindows.settingsGui?t=this.guiWindows.settingsGui.active:t=!1),this.pxlNavData.active=t;let i=this.pxlNavData.height||200;this.pxlNavData.gui.style.maxHeight=t?i+"px":"0px",t||(this.pxlNavData.height=this.pxlNavData.gui.offsetHeight)}renderRadius(t){this.pxlEnv.mapGlowPass.strength=Number(t),this.pxlEnv.roomBloomPass.strength=Number(t)}renderThreshold(t){this.pxlEnv.mapGlowPass.threshold=Number(t),this.pxlEnv.roomBloomPass.threshold=Number(t)}renderGlowRadius(t){this.pxlEnv.mapGlowPass.radius=Number(t),this.pxlEnv.roomBloomPass.radius=Number(t)}renderResolution(t){this.pxlQuality.screenResPerc=t*.75+.25,this.pxlDevice.resizeRenderResolution()}inviteUserBuild(){this.guiWindows.inviteUserGui={},this.guiWindows.inviteUserGui.gui=null,this.guiWindows.inviteUserGui.active=!1;let t=document.createElement("div");t.id="gui_inviteUserWindow",t.classList.add("gui_inviteUserParentStyle"),this.prepPromptFader(t),document.body.appendChild(t);let i=window.location+"";console.log(i),i=i.replace(/^https?:\/\//,""),console.log(i);let n="";n+=`
      <div class="gui_inviteUserBody">
        <div class="iu_urlStyle">${i}</div>
        <div id="iu_copy" class="iu_copyStyle">Copy</div>
      </div>
  `,t.innerHTML=n;let s=this.pxlUtils,r=document.getElementById("iu_copy");r.addEventListener("click",()=>{s.copyRoomUrl()?r.innerText="Copied":r.innerText="Error",r.timeout&&clearTimeout(r.timeout),r.timeout=setTimeout(()=>{r.innerText="Copy",clearTimeout(r.timeout)},2e3)}),this.guiWindows.inviteUserGui.gui=t}inviteUserPosition(){if(this.guiWindows.inviteUserGui&&this.guiWindows.inviteUserGui.active){let i=document.getElementById("ft3Button").getBoundingClientRect();this.guiWindows.inviteUserGui.gui.style.display="grid",this.guiWindows.inviteUserGui.gui.style.top=i.y,this.guiWindows.inviteUserGui.gui.style.right=this.pxlDevice.sW-i.x+5,this.guiWindows.inviteUserGui.gui.style.minHeight=i.height}}toggleInviteUser(t=null){this.guiWindows.inviteUserGui||this.inviteUserBuild(),t=t??!this.guiWindows.inviteUserGui.active,this.guiWindows.inviteUserGui.active=t,this.promptFader(this.guiWindows.inviteUserGui.gui,t),this.inviteUserPosition()}buildMobileWelcome(){this.guiWindows.mobileGui={},this.guiWindows.mobileGui.gui=null,this.guiWindows.mobileGui.active=!1;let t=document.createElement("div");t.id="gui_mobileWelcomeGuiWindow",t.classList.add("gui_helpGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="";i+=`
    <div id="gui_helpContent" class="gui_contentStyle" style="min-height:45%;">
  <div class="gui_mobileBody">
    welcome to
          <br>${this.projectTitle}
  </div>
  <div id="guiHelpFooter" class="gui_footer" style="margin-bottom: 4vh;">
    <div class="guiButton" style="font-weight: 700; font-size: 5vw;" id="guiMobileWelcomeButton">enter</div>
  </div>
  <div class="gui_spacer"></div>
    </div>
  `,t.innerHTML=i;let n=this,s=document.getElementById("guiMobileWelcomeButton");s.onclick=r=>{n.toggleMobileWelcome(!1),n.pxlEnv.postHelpIntro()},this.guiWindows.mobileGui.gui=t}toggleMobileWelcome(t=null){this.guiWindows.mobileGui||this.buildMobileWelcome(),t=t??!this.guiWindows.mobileGui.active,this.guiWindows.mobileGui.active=t,this.promptFader(this.guiWindows.mobileGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t)}ctaBuildPopup(t=""){this.ctaContentLoading||(this.googleDocHTML?this.ctaDisplayPopup():(this.ctaContentLoading=!0,this.pxlFile.getURLContent(this.ctaLocalDocURL.blmSupport).then(i=>{this.ctaContentLoading=!1,this.googleDocHTML=i,this.ctaDisplayPopup()})))}ctaDisplayPopup(){this.actionPopUp&&this.actionPopUp.parentNode.removeChild(this.actionPopUp);let t=this.googleDocHTML;this.actionPopUp=document.createElement("div"),this.actionPopUp.setAttribute("id","ctaPopup"),this.actionPopUp.classList.add("parentGoogleLinkDoc"),this.actionPopUp.classList.add("fader"),this.actionPopUp.classList.add("visOff");let i=document.createElement("div");i.setAttribute("id","ctaPopupInner"),this.actionPopUp.appendChild(i),document.body.appendChild(this.actionPopUp);let n=null;t==""||!t?(n=document.createElement("iframe"),n.src="",n.classList.add("iframeGoogleLinkDoc"),i.appendChild(n),n.referrerpolicy="unsafe-url"):(i.innerHTML=t,i.classList.add("iframeGoogleLinkDoc"));let s=this;this.actionPopUp.onclick=function(r){r.srcElement.getAttribute("id")=="ctaPopup"&&(s.promptFader(this,!1,null,!0),s.actionPopUp=null)},n?n.onload=function(){setTimeout(()=>{this.promptFader(this.actionPopUp,!0,null,!1)},100)}:setTimeout(()=>{this.promptFader(this.actionPopUp,!0,null,!1)},100)}getUserControls(t){if(!t)return[null];let i=t,n=i.userStatusGui,s=i.audio,r=i.audioMuted,o=i.userSoundGui,a=i.displayName,l=i.userNameGui,c=i.verse;return{curAvatar:i,curName:a,curAudio:s,curAudioMuted:r,curGui:n,curNameGui:l,curAudioGui:o,curVerse:c}}async setUserControlPosition(){if(this.userControlBlock){let t=0,i=0;if(this.hudTopBar){let n=this.hudTopBar.getBoundingClientRect();t=n.y+n.height}this.userControlBlock.gui.style.top=t+"px"}}buildUserSpeaker(){let t={},i=this.userControlBlock.speakerIcon.svg.cloneNode(!0);i.classList.add("userControlSpeakerStyle"),i.classList.add("userControlSpeakerButtonStyle"),t.gui=i,t.remoteMuted=!1,t.volPrev=0;let n=i.children;for(let r=0;r<n.length;++r){let o=n[r],a=o.getAttribute("id");t[a]=o,a=="mute"?o.classList.add("userControlVisStyle"):a=="button"&&o.classList.add("userControlSpeakerButtonStyle")}let s=t.volLines.children;for(let r=0;r<s.length;++r){let o=s[r],a=o.getAttribute("id");t[a]=o}s=t.remoteMutedLines.children;for(let r=0;r<s.length;++r){let o=s[r],a=o.getAttribute("id");t[a]=o}return t}async addUserControls(t,i=!1){let{curAvatar:n,curName:s,curGui:r}=this.getUserControls(t),o=document.createElement("div");o.classList.add("userControlProximityOff"),o.classList.add("userControlParentStyle"),o.classList.add("userControlSpeakerButtonStyle"),this.mobile&&(o.style.display="none");let a=this;o.onclick=()=>{a.setUserControlMute(t)},n.userStatusGui=o,this.userControlBlock.gui.appendChild(o);let l=document.createElement("div");l.classList.add("userControlInnerParentStyle"),o.appendChild(l);let c=document.createElement("div");c.classList.add("userControlSpeakerParentStyle");let u=this.buildUserSpeaker();c.appendChild(u.gui),n.userSoundGui=u,l.appendChild(c);let d=document.createElement("div");d.classList.add("userControlNameStyle"),d.innerText=s,n.userNameGui=d,l.appendChild(d),this.setUserControlColor(t)}async setUserControlVolume(t,i,n=!0){if(this.userControlBlock.activeList.includes(t)){let{curAudioGui:s,curAudioMuted:r}=this.getUserControls(t);s&&(!r||i==0)&&(s.remoteMuted?i=0:n&&i>0&&(i*=2,i=Math.min(1,Math.max(i,(i+s.volPrev)*.5))),s.volPrev=i,s.volLines.style.opacity=i,s.volLines.style.filter="alpha(opacity="+i*100+")")}}async setUserControlMute(t){let{curAvatar:i,curAudio:n,curAudioMuted:s,curAudioGui:r}=this.getUserControls(t);if(n){let o=!s;o?(this.setUserControlVolume(t,0,!1),r.mute.classList.add("userControlVisible"),n.volume=0,n.muted=!0):(r.mute.classList.remove("userControlVisible"),n.muted=!1,n.volume=1),i.audioMuted=o}}async setUserControlRemoteMute(t,i=null,n=!0,s="#ffffff"){let{curAudio:r,curAudioGui:o}=this.getUserControls(t);if(o){i==null&&(r?i=r.muted:i=!1);let a=typeof i=="object"?i.muted:i;o.remoteMuted=a,o.base.setAttribute("fill",a?"#ff0000":s),o.remoteMutedLines.style.display=a||!n?"inline-block":"none",o.remoteS1.setAttribute("stroke",n?"#ff0000":s),o.remoteS2.setAttribute("stroke",n?"#ff0000":s),this.setUserControlVolume(t,0,!1)}}async setUserControlVis(t,i=null,n=!1){let{curAvatar:s,curGui:r,curAudio:o}=this.getUserControls(t);if(r){let a="userControlProximityOff";if(i==null&&(i=!r.classList.contains(a)),i)r.classList.remove(a),r.style.maxWidth=r.children[0].getBoundingClientRect().width+"px",this.setUserControlVolume(t,0),this.userControlBlock.activeList.includes(t)||this.userControlBlock.activeList.push(t);else{r.classList.add(a),r.style.maxWidth="30px";let l=this.userControlBlock.activeList.indexOf(t);l>-1&&this.userControlBlock.activeList.splice(l,1)}this.userControlBlock.gui.style.padding=this.userControlBlock.activeList.length==0?"0px":"5px"}}async deleteUserControlVis(t){let{curAvatar:i,curGui:n}=this.getUserControls(t);if(n){n.classList.add("userControlProximityOff"),n.style.maxWidth="30px";let r=this.userControlBlock.activeList.indexOf(t);r>-1&&this.userControlBlock.activeList.splice(r,1),this.userControlBlock.gui.style.padding=this.userControlBlock.activeList.length==0?"0px":"5px",n&&n.parentNode.removeChild(n)}}userControlsSwap(t,i){let n=this.userControlBlock.activeList.indexOf(t);n>-1&&(this.userControlBlock.activeList.splice(n,1),this.userControlBlock.activeList.includes(i)||this.userControlBlock.activeList.push(i))}setUserControlColor(t,i=null){let{curAvatar:n,curGui:s,curAudioGui:r,curVerse:o}=this.getUserControls(t),a=!0;if(i==null)if(a)i="#ffffff";else{let c=this.pxlUtils.stringToRgb(o,.3);i=this.pxlUtils.rgbToHex(...c)}s.style.color=i,r.base.setAttribute("fill",i),r.mute.setAttribute("stroke",i),r.mid.setAttribute("fill",i),r.max.setAttribute("fill",i),r.volPrev=0,r.volLines.style.opacity=0,r.volLines.style.filter="alpha(opacity=0)";let l=this;n.userStatusGui.onclick=()=>{l.setUserControlMute(t)},this.setUserControlRemoteMute(t,null,a,i)}toggleUserControls(t){if(!t)return null}};var Qa=class{constructor(i,n){this.active=!1,this.name="GLSL Editor",this.type="shaderGui",this.pxlCore=i,this.pxlEnv=i.pxlEnv,this.guiManager=n,this.parent=null,this.gui=null,this.helpGui=null,this.shaderEditorDisplay=null,this.children={},this.uniformsObj=null,this.vertObj=null,this.fragObj=null,this.currentShader=null,this.shaderSliderValues=new yt,this.editorWidthMinMax={min:30,max:70}}addSlider(i,n,s,r,o,a,l,c){typeof i=="string"&&(i=document.getElementById(i));let u=document.createElement("div");u.style.display="grid",u.style.gridAutoFlow="column",u.style.alignItems="center",u.style.gridAutoColumns="max-content auto max-content",u.innerHTML="<div class='input_sliderLabel'>"+n+" : </div>";let d=document.createElement("input");d.type="range",d.classList.add("input_sliderRange"),d.min=r,d.max=o,d.step=a,d.value=s,u.appendChild(d);let h=document.createElement("input");h.type="number",h.classList.add("gui_defaultInput"),h.classList.add("input_numberInput"),h.value=s,u.appendChild(h),h.onchange=p=>{d.value=p.target.value},d.onchange=p=>{h.value=p.target.value,l(p.target.value,...c)},d.oninput=p=>{h.value=p.target.value,l(p.target.value,...c)},i.appendChild(u)}updateShaderTextFields(i=null){let n,s="shaderGui";i||(i=this.pxlEnv.currentRoom==this.pxlEnv.mainRoom?this.currentShader:this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getCurrentShader());try{n=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].readShader(i,this.shaderSliderValues)}catch{return}let r,o,a;r=o=a="Unable To Load";try{n.uniforms.sliders={type:"v",value:this.shaderSliderValues},r=JSON.stringify(n.uniforms),o=n.vertexShader,a=n.fragmentShader,r="";for(let l in n.uniforms){let c="float",u={t:"sampler2D",b:"bool",i:"int",f:"float",v:"vec",c:"vec"};if(c=typeof n.uniforms[l].value,c=="object"){if(c="",!n.uniforms[l].value)continue;"image"in n.uniforms[l].value?c="sampler2D":c=c+"vec"+Object.keys(n.uniforms[l].value).length}else u.hasOwnProperty(n.uniforms[l].type)&&(c=n.uniforms[l].type=="i"?"i":""),u.hasOwnProperty(n.uniforms[l].type)&&(c=u[n.uniforms[l].type]);r+=`uniform ${c} ${l};   `}o=o.replace(/[\t]/g,"  "),a=a.replace(/[\t]/g,"  ")}catch(l){console.log("Error Reading Shader"),console.log(l)}n&&(n.needsUpdate=!0,this.children.uniformsObj.value=r,this.children.vertObj.value=o,this.children.fragObj.value=a)}buildShaderEditor(){let i="shaderGui",n=document.createElement("div");n.id="guiShaderEditorBlock",n.classList.add("gui_shaderEditorBlockStyle"),n.style.transition="max-width .5s ease, opacity .8s, filter .8s",this.pxlEnv.pxlGuiDraws.prepPromptFader(n),this.pxlEnv.pxlGuiDraws.guiWindows[i]={},this.pxlEnv.pxlGuiDraws.guiWindows[i].gui=n,this.pxlEnv.pxlGuiDraws.guiWindows[i].active=!1,this.gui=n;let s=document.createElement("div");s.id="guiShaderHelpBlock",s.classList.add("gui_shaderHelpBlockStyle"),s.style.transition="left .3s ease, opacity .8s, filter .8s",this.pxlEnv.pxlGuiDraws.prepPromptFader(s),this.pxlEnv.pxlGuiDraws.guiWindows[i].help=s,this.helpGui=s;let r=this.pxlEnv.currentRoom,o=this.pxlEnv.roomSceneList[r].geoList,a=Object.keys(o),l="";a.forEach(y=>{if(["Mesh","Points"].includes(o[y].type)&&o[y].material.type=="ShaderMaterial"){let g=y.substring(0,1).toUpperCase()+y.substring(1,y.length);l+="<option value='geo_"+y+"'>"+g+"</option>"}});let c="",u="selected";this.pxlEnv.pxlGuiDraws.guiWindows[i].currentShader="script_fog";let d=`
    <div id="gui_shaderEditorParent" class="gui_shaderEditorParentStyle">
      <div class="gui_shaderEditorHeaderBlock">
      <div class="gui_shaderEditorOptionBlock">
        <div class="gui_shaderEditorTitleBlock">
        <div class="gui_shaderEditorTitleParent">
            <div id="gui_shaderEditorTitle" clsss="gui_shaderEditorTitleStyle">GLSL Shader Editor</div>
            <div id="gui_shaderEditorHeaderList" clsss="gui_shaderEditorHeaderListStyle">
              <label for="shaderEditor_loadShader" style="font-size:.75em;">Edit Shader</label>
              <select name="shaderEditor_loadShader" id="shaderEditor_loadShader" class="pickerStyle gui_shaderPickerStyle">
                <option value="script_avatar" ${c}>Avatar</option>
                <option value="script_fog" ${u}>Fog</option>
                <option value="script_dArrows">Direction Arrows</option>
                <option value="script_userScreens">User Screens</option>
                <option value="script_warpZonePortals">Warp Zone Portals</option>
                <option value="script_lizardking">Item; Lizard King</option>
                <option value="script_majorTom">Item; Major Tom</option>
                <option value="script_fractalSubstrate">Item; Fractal Substrate</option>
                <option value="script_fractalEcho">Item; Fractal Echo Pass</option>
                ${l}
              </select>
            </div>
          </div>
        </div>
        <div class="gui_shaderEditorHeaderLine"></div>
        <div id="guiShaderUserSliders"></div>
        <div class="gui_shaderEditorHeaderLine"></div>
      </div>
      </div>
      
      
      <div id="guiShaderFieldParent" class="gui_shaderEditorFieldParentStyle">
        <span style='height:12px'>Uniforms -</span>
        <textarea spellcheck="false" placeholder="Shader Uniforms" rows="3" id="shaderEditor_uniformInput" style="height:unset;" readonly></textarea>
        <span style='height:12px'>Vertex Shader -</span>
        <textarea spellcheck="false" placeholder="Vertex Shader" id="shaderEditor_vertInput"></textarea>
        <span style='height:12px'>Fragment Shader -</span>
        <textarea spellcheck="false" placeholder="Fragment Shader" id="shaderEditor_fragInput"></textarea>
      </div>
      <div id="shader_updateShader" class="shaderEditor_sendMessage">Update Shader</div>
    </div>
    `,h="<div class='gui_shaderHelpSpacerStyle'></div>";d+=`
    <div id="gui_shaderHelpBlock" class="gui_shaderHelpBlockStyle">
      <div class="gui_shaderHelpTitle">:: Keyboard Shortcuts ::</div>
      ${h}
      <span><span class="gui_boldText">Ctrl + Enter</span><br> - Update Shader on Material</span>
      <br>&nbsp;&nbsp;<span>Returns use existing indent type (Spaces or Tabs)</span>
      ${h}
      <span><span class="gui_boldText">Ctrl + D</span><br> - Duplicate current line</span>
      ${h}
      <span><span class="gui_boldText">Ctrl + K</span><br> - Comment current/selected lines</span>
      ${h}
      <span><span class="gui_boldText">Ctrl + Shift + K</span><br> - Uncomment current/selected lines</span>
      ${h}
      <span><span class="gui_boldText">Ctrl + NumPad {1,2,3}</span><br> - Add selection or '.0' into float(), vec2(), vec3() </span>
      ${h}
      <span><span class="gui_boldText">Ctrl + {Up,Down,Left,Right}</span><br> - Searches for current selection in direction</span>
      ${h}
      <span><span class="gui_boldText">Y</span><br> - To close the Shader Editor</span>
      ${h}
    </div>
    `,n.innerHTML=d,document.body.appendChild(n);let p=document.getElementById("guiShaderUserSliders");this.parentObj=p;let f=this.shaderSliderValues,m=(y,...g)=>{f[g[0]]=y};this.addSlider(p,"sliders.x",0,-1,1,.01,m,["x"]),this.addSlider(p,"sliders.y",0,-5,5,.1,m,["y"]),this.addSlider(p,"sliders.z",0,-10,10,.1,m,["z"]),this.children.shaderSliders=p,this.children.shaderParentObj=document.getElementById("shaderEditor_uniformInput").parentNode,this.children.shaderEditor=document.getElementById("gui_shaderEditorParent"),this.children.titleObj=document.getElementById("gui_shaderEditorTitle"),this.children.uniformsObj=document.getElementById("shaderEditor_uniformInput"),this.children.vertObj=document.getElementById("shaderEditor_vertInput"),this.children.fragObj=document.getElementById("shaderEditor_fragInput"),this.children.updateObj=document.getElementById("shader_updateShader"),this.children.helpDiv=document.getElementById("gui_shaderHelpBlock"),this.children.shaderList=document.getElementById("gui_shaderEditorHeaderList"),this.children.shaderFieldParent=document.getElementById("guiShaderFieldParent"),this.shaderEditorDisplay=document.getElementById("shaderEditorDisplay"),this.children.shaderSelect=document.getElementById("shaderEditor_loadShader");let w=this;this.children.shaderSelect.onchange=y=>{w.updateShaderTextFields(this.children.shaderSelect.value)},this.children.updateObj.addEventListener("click",()=>{let g=document.getElementById("shaderEditor_uniformInput").value,v=document.getElementById("shaderEditor_vertInput"),C=v.value,E=document.getElementById("shaderEditor_fragInput"),A=E.value,R=document.createElement("div");R.innerHTML=g,g=R.innerText,R.innerHTML=C,C=R.innerText,R.innerHTML=A,A=R.innerText,w.pxlEnv.roomSceneList[w.pxlEnv.currentRoom].setShader(g,C,A),v.blur(),E.blur(),w.guiManager.pxlNavCanvas.focus()}),this.children.vertObj.onfocus=y=>{w.focusShaderMessage(y,"vertObj")},this.children.vertObj.onkeydown=y=>{w.keyShaderMessage(y)},this.children.vertObj.onmousedown=y=>{w.mDownShaderMessage(y)},this.children.vertObj.onclick=y=>{w.clickShaderMessage(y)},this.children.vertObj.ondblclick=y=>{w.dblclickShaderMessage(y)},this.children.fragObj.onfocus=y=>{w.focusShaderMessage(y,"fragObj")},this.children.fragObj.onkeydown=y=>{w.keyShaderMessage(y)},this.children.fragObj.onmousedown=y=>{w.mDownShaderMessage(y)},this.children.fragObj.onclick=y=>{w.clickShaderMessage(y)},this.children.fragObj.ondblclick=y=>{w.dblclickShaderMessage(y)},this.mouseX=0,this.mouseY=0,this.prevSelectStart=0,this.prevSelectEnd=0}mDownShaderMessage(i){this.mouseX=i.x,this.mouseY=i.y}clickShaderMessage(i){if(!this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive){let n=Math.abs(this.mouseX-i.x),s=Math.abs(this.mouseY-i.y);if(Math.max(n,s)<5){let o=i.target,a=o.selectionStart,l=o.selectionEnd,c=parseInt((a+l)*.5);a!=l&&(this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectStart=a,this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectEnd=l)}}}dblclickShaderMessage(i){let n=this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectStart,s=this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectEnd,r=i.target,o=r.selectionStart,a=r.selectionEnd,c=r.value.substring(n,s+20),u=c.match(/[a-zA-Z0-9\.\_\[\]]+/);u&&!c[0].match(/\n/)&&(s=n+u[0].length),r.setSelectionRange(n,s),this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive=!0,setTimeout(()=>{this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive=!1},500)}keyShaderMessage(i){if(i.repeat)return!1;let n=i.key,s=i.code,r=i.shiftKey,o=i.ctrlKey,a=i.altKey,l=s.includes("Numpad");if(!(n=="Enter"||n=="Tab"||s=="KeyD"&&o||s=="KeyK"&&o||l&&o||s.includes("Arrow")&&o))return!1;i.preventDefault();let u=i.target;if(s=="NumpadAdd"){let y=window.getComputedStyle(u),g=parseFloat(y.fontSize)+2;return u.style.fontSize=g,!1}if(s=="NumpadSubtract"){let y=window.getComputedStyle(u),g=parseFloat(y.fontSize)-2;return u.style.fontSize=g,!1}let d=u.selectionStart,h=u.selectionEnd,p=u.value;if(s.includes("Arrow")){if(d==h)return!1;let y=p.substring(d,h),g,v,C;if(s=="ArrowUp"?(v=p.substring(0,d),d=v.search(/.*$/),s="ArrowLeft"):s=="ArrowDown"&&(v=p.substring(h,p.length),h=v.search(/\n/)+h,s="ArrowRight"),s=="ArrowLeft"){g=new RegExp(y+".*","gm"),v=p.substring(0,d);let E=[...v.matchAll(y,"g")];if(E.length==0&&(E=[...p.matchAll(y,"g")],E.length==0))return!1;C=E.pop().index}if(s=="ArrowRight"){g=new RegExp(y,"m"),v=p.substring(h,p.length);let E=g.exec(v);if(E)C=E.index+h;else{if(E=g.exec(p),!E)return!1;C=E.index}}if(C>-1){let E=C+y.length;u.setSelectionRange(C,E);let A=u.getBoundingClientRect(),O=window.getComputedStyle(u).font,V=[p.slice(0,C),"<span id='tmpShaderPosition'>.</span>",p.slice(C)].join("");V=V.replace(/(?:\r\n|\r|\n)/g,"<br>");let k=document.createElement("div");k.style.position="fixed",k.style.width=A.width,k.style.height=A.height,k.style.overflowY="scroll",k.style.font=O,k.innerHTML=V,document.body.appendChild(k);let _=k.querySelector("#tmpShaderPosition").offsetTop-200;document.body.removeChild(k),u.scrollTo(0,_)}return!1}if(n=="Enter"&&o)return this.children.updateObj.click(),u.focus(),u.setSelectionRange(d,h),!1;if(l){let g=p.substring(d,h),v=g.length>0,C=p.substr(d-1,1);C=/[\w|\d]/.test(C)&&g.length==0?" ":"";let E=p.substr(h+1,1);E=/[\w|\d]/.test(E)&&g.length==0?" ":"";let A=d+C.length;if(s=="Numpad1"){let R="float(";A+=R.length,g=v?g:".0",g=R+g+")"}else if(s=="Numpad2"){let R="vec2(";A+=R.length,g=v?g:".0, .0",g=R+g+")"}else if(s=="Numpad3"){let R="vec3(";A+=R.length,g=v?g:".0, .0, .0",g=R+g+")"}return g=C+g+E,document.execCommand("insertText",!1,g),v||u.setSelectionRange(A,A),!1}let f=Math.min(d,h),m=p.substr(0,f);if(s=="KeyK"){let y=!1,g=!1,v=[],C,E,A;if(d!=h&&(C=m.search(/.*$/),E=h,A=p.substring(C,h),y=/\n/.test(A)),!y){let R=m.search(/[\S\w].*$/),O=!1;if(R==-1){if(R=p.substring(f,p.length).search(/(?:[^\s])/),R==-1)return!1;R+=f,O=!0}let V=R,k=V,b="";if(r){if(k+=2,p.substr(V,2)!="//")return!1;d-=2,h-=2}else{if(p.substr(V,2)=="//")return!1;b="//",d+=2,h+=2}return u.setSelectionRange(V,k),document.execCommand("insertText",!1,b),u.setSelectionRange(d,h),!1}if(y){let R=p.substring(E,p.length),O=E+R.search(/\n./),V=p.substring(C,O),k=r?-2:2,b=[...V.matchAll(/[\S\w].*/g)],_=[],M=d-C,T=E-C;return b.forEach(S=>{let P=S.index;_.push(P)}),_=_.reverse(),_.forEach(S=>{let P=V.substr(S,2);if(r){if(P!="//")return;V=V.substring(0,S)+V.substring(S+2,V.length)}else{if(P=="//")return;V=V.substring(0,S)+"//"+V.substring(S,V.length)}d+=S<M?k:0,h+=S<T?k:0}),u.setSelectionRange(C,O),document.execCommand("insertText",!1,V),u.setSelectionRange(d,h),!1}return!1}let w=m.split(`
`);if(n=="Enter"||n=="Tab"){let y=w.pop();y.length==0&&(y=w.pop());let g=y.replace(/[\S\w].*$/g,"");n=="Tab"?(g=g.length==0?" ":g.substr(0,1),g===" "?g="  ":g="	"):g=`
`+g;let v=g,C=d,E=h;if(n=="Tab"&&d!=h){let A=p.substring(d,h);A=A.split(`
`),r?A=A.map(R=>R==""?R:R.replace(g,"")):A=A.map(R=>R==""?R:g+R),v=A.join(`
`),E=C+v.length}else C=C+v.length,E=C;return document.execCommand("insertText",!1,v),u.setSelectionRange(C,E),!1}if(s=="KeyD"&&o)if(d==h){let y=p.split(`
`);w.pop();let g=w.length,v=y[g],A=[...w,v].join(`
`).length;v=`
`+v,u.setSelectionRange(A,A),document.execCommand("insertText",!1,v),A=f+v.length,u.setSelectionRange(A,A)}else{let y=p.substring(d,h);u.setSelectionRange(h,h),document.execCommand("insertText",!1,y),h+=y.length,u.setSelectionRange(h,h)}return!1}toggleShaderEditor(i=null){this.gui||this.buildShaderEditor(),this.updateShaderList(),this.updateShaderTextFields(this.children.shaderSelect.value),i=i??!this.active,this.active=i,this.guiManager.promptFader(this.gui,i),this.guiManager.promptFader(this.helpGui,i),this.pxlEnv.emit("shaderEditorVis",i),i?this.guiManager.pxlNavCanvas.addEventListener("mousedown",this.blurShaderEditor.bind(this)):this.guiManager.pxlNavCanvas.removeEventListener("mousedown",this.blurShaderEditor.bind(this)),setTimeout(()=>{this.resizeShaderElements()},10)}updateShaderList(){let i=this.children.shaderSelect;if(!i){console.log("No pulldown"),console.log(this.gui);return}let n=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getShaderList(),s="inline-block";if(n){let r=Object.keys(n),o="",a=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getCurrentShader();r.forEach(l=>{let c=l==a?" selected":"";o+=`<option value="${l}" ${c}>${n[l]}</option>`}),i.innerHTML=o}else s="none";this.children.shaderList.style.display=s}blurShaderEditor(){document.activeElement.blur();let i=document.getElementById("guiShaderEditorBlock");i.style.maxWidth=this.editorWidthMinMax.min+"vw";let n=document.getElementById("gui_shaderHelpBlock");n&&(n.style.left="max("+this.editorWidthMinMax.min+"vw, 430px)");let s=document.getElementById("shaderEditor_loadShader");s&&(s.style.maxWidth="85px")}resizeShaderElements(){let i=0;if(this.hudBottomBar&&(i=this.hudBottomBar.offsetHeight),this.gui){this.gui.style.height=this.guiManager.sH-i;let n=this.children.vertObj.getBoundingClientRect().top,s=this.children.updateObj.getBoundingClientRect().height;s+=40;let r=this.guiManager.sH-s-n;this.children.vertObj.style.maxHeight=r*.4+"px",this.children.vertObj.displayHeight=r*.4,this.children.fragObj.style.maxHeight=r*.6+"px",this.children.fragObj.displayHeight=r*.6,this.children.fieldBodyHeight=r}}focusShaderMessage(i,n){let s=this.children,r=s.vertObj.displayHeight,o=s.fragObj.displayHeight,a=Math.max(150,this.guiManager.sH*.135),l=s.fieldBodyHeight-a;r=n=="vertObj"?l:a,o=n=="fragObj"?l:a,s.vertObj.style.maxHeight=r+"px",s.fragObj.style.maxHeight=o+"px";let c=document.getElementById("gui_shaderEditorParent");this.gui.style.maxWidth=this.editorWidthMinMax.max+"vw",this.children?.shaderSelect&&(this.children.shaderSelect.style.maxWidth="225px");let u=document.getElementById("gui_shaderHelpBlock");u&&(u.style.left=this.editorWidthMinMax.max+"vw")}};var ho=class extends Ya{constructor(i,n="Metal-Asylum",s="images/assets/",r="images/GUI/"){super(i,n,s,r),this.verbose=i,this.lableBoxSize=40,this.optionWidthRound=10,this.optionWidthAdd=25,this.deviceOptionHeight=[0,300],this.ShaderEditor=null,this.pxlLoaderTotal=5,this.hudVisibility=!0,this.camChoicesActive=!1,this.micChoicesActive=!1,this.textDescriptions={chatIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat',pos:[1,-1.5]},multiverseIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection',pos:[0,-1.3]},djPlayerVolumeParent:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume',pos:[0,-1.5]},speakerIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output',pos:[0,-1.5]},micIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input',pos:[0,-1.5]},camIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input',pos:[0,-1.5]},helpIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions',pos:[0,-1.5]},infoIconParent:{text:'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>',pos:[-1,0],offset:[-10,0]},settingsIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation',pos:[0,-1.5]},muteAllIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users',pos:[1,0]},fullScreenIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen',pos:[-1,0]},videoQualityIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings',pos:[-1,0]},statsIcon:{text:"jitsi connection status; toggle connection ",pos:[1,0]},usersIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools',pos:[1,0]},ft2Button:{text:"Environment",pos:[-1,0],offset:[-10,0]},ft3Button:{text:"Invite Friends",pos:[-1,0],offset:[-10,0]},hud_userCount:{text:"# of People",pos:[-1,0],offset:[-10,0]}},this.activeItem=null,this.actionPopUp=null,this.init()}setDependencies(i){this.ShaderEditor=new Qa(i,this)}init(){super.init()}booted(){super.booted()}step(){super.step()}toggleShaderEditor(){this.ShaderEditor.toggleShaderEditor()}};var fo=class{constructor(){this.pxlAudio=null,this.pxlTimer=null,this.pxlAutoCam=null,this.pxlEnv=null,this.pxlUser=null,this.pxlUtils=null,this.pxlDevice=null,this.pxlGuiDraws=null,this.pxlQuality=null,this.socket=null,this.camera=null,this.HDRView=!1,this.objRaycast=new Va,this.camUpdated=!0,this.cameraBooted=!1,this.userScale=5.5,this.standingHeight=1,this.standingHeightGravInfluence=0,this.standingMaxGravityOffset=.5,this.maxStepHeight=.6,this.walkBounce=0,this.walkBounceSeed=230,this.walkBouncePerc=0,this.posRotEasingThreshold=.01,this.cameraMovement=[0,0],this.cameraMovementEase=.8,this.cameraMoveLength=0,this.cameraMoveLengthMult=.2,this.camPosBlend=.55,this.camRotXYZ=new L(0,0,0),this.camRotPitch=new z(0,0),this.cameraJumpActive=!1,this.cameraAllowJump=!0,this.cameraJumpHeight=0,this.cameraJumpInitImpulse=[.06,.15],this.cameraJumpImpulse=0,this.cameraJumpImpulseEaseOut=.8,this.cameraMaxJumpHold=[.6,3],this.cameraJumpInAir=!1,this.floorColliderInitialHit=!1,this.colliderValidityChecked=!0,this.nearestFloorHit=new L(0,0,0),this.nearestFloorObjName=null,this.nearestFloorHitPrev=new L(0,0,0),this.nearestFloorObjNamePrev=null,this.objectJumpLock=!1,this.gravityActive=!1,this.gravitySourceActive=!1,this.gravityDirection=new L(0,-1,0),this.gravityEaseOutRate=.8,this.jump=0,this.runMain=!0,this.workerActive=!1,this.worker=null,this.workerTransfers=!1,this.workerMessage=()=>{},this.workerFunc=()=>{},this.deviceKey=()=>{},this.portalList={},this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarpZone=[],this.colliderCurObjHit=null,this.colliderPrevObjHit=null,this.colliderValid=!1,this.colliderFail=!1,this.warpActive=!1,this.warpType=0,this.warpObj=null,this.warpTarget=null,this.hotKeyTriggered=!1,this.eventCheckStatus=!1,this.proximityScaleTrigger=!1,this.colliderShiftActive=!0,this.colliderAdjustPerc=0,this.colliderAdjustRate=.02,this.gyroGravity=[0,0,0],this.cameraPose={alpha:null,beta:null,gamma:null,alphaOffset:0,betaOffset:0,gammaOffset:0,orientation:window.orientation||0,pos:[0,0,0],posOffset:[0,0,0],rx:()=>this.beta,ry:()=>this.alpha,rz:()=>this.gamma,accelZeroed:[0,0,0],accelCalibration:10,accelCalDiv:1/10,accelCalCount:0,accelTotal:[0,0,0],accelPrev:null,accelDelta:[0,0,0],accelClearDelta:()=>{this.accelDelta=[0,0,0]}},this.uniformScalars={curExp:1,darkBase:.1,brightBase:.5,exposureUniformBase:1},this.cameraPos=new L(0,0,0),this.cameraPrevPos=new L(0,0,0),this.cameraPrevLookAt=new L(0,0,0),this.cameraAim=new L(0,0,1),this.cameraAimTarget=new L(0,0,0),this.cameraCross=new L(1,0,0),this.lookAtTargetActive=new L(0,0,0),this.lookAtPerc=new z(1,0),this.lookAtLockPerc=0,this.lookAtLockFader=0,this.lookAtLockFadeRate=.01,this.prevQuaternion=new Ue,this.pi=3.14159265358979,this.init()}setDependencies(i){this.pxlAudio=i.pxlAudio,this.pxlTimer=i.pxlTimer,this.pxlAutoCam=i.pxlAutoCam,this.pxlEnv=i.pxlEnv,this.pxlUser=i.pxlUser,this.pxlUtils=i.pxlUtils,this.pxlDevice=i.pxlDevice,this.pxlGuiDraws=i.pxlGuiDraws,this.pxlQuality=i.pxlQuality,this.socket=i.socket}init(){var i}updateMainValues(i){let{gravityRate:n,standingHeightGravInfluence:s,cameraJumpImpulse:r}=i;n!=null&&(this.pxlUser.gravityRate=n),s!=null&&(this.standingHeightGravInfluence=s),r!=null&&(this.cameraJumpImpulse+=r),this.camUpdated=!0}step(){this.pxlDevice.directionKeyDown&&this.updateMovement(this.pxlTimer.prevMS),this.runMain&&(this.gravityActive&&this.cameraJumpActive?this.camJump(this.pxlTimer.prevMS):this.cameraJumpImpulse>0&&this.killJumpImpulse()),this.camUpdated=this.camUpdated||this.cameraMovement[0]!=0||this.cameraMovement[1]||this.gravityActive||this.pxlDevice.cursorLockActive,this.updateCamera(),this.lowQualityUpdates(),this.midQualityUpdates(),this.eventCheck()}eventCheck(){this.colliderValid&&this.eventCheckStatus&&this.eventTrigger(this.nearestFloorObjName)&&this.warpEventTriggered(1,this.nearestFloorObjName)}updateDeviceValues(i){if(!this.pxlQuality.settings.leftRight){let n=-this.cameraMovement[0];this.pxlDevice.touchMouseData.active||(this.pxlDevice.touchMouseData.velocity.x+=n),this.pxlDevice.touchMouseData.netDistance.x+=n*4}this.pxlDevice.touchMouseData.velocity!=null&&this.pxlDevice.mobile==0&&(i<this.posRotEasingThreshold?this.pxlDevice.touchMouseData.velocity.multiplyScalar(0):this.pxlDevice.touchMouseData.velocity.multiplyScalar(.7),this.pxlDevice.touchMouseData.netDistance.add(this.pxlDevice.touchMouseData.velocity.clone().multiply(this.pxlDevice.touchMouseData.moveMult)))}buildDeviceMonitors(){let i=this}updateCameraMatrices(){this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.camera.updateWorldMatrix()}resetCameraCalculations(i){this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0),this.pxlDevice.touchMouseData.netDistance.set(0,0),this.camera.position.copy(i),this.updateCameraMatrices(),this.cameraPos.copy(i),this.cameraPrevPos.copy(i),this.colliderCurObjHit=null,this.colliderPrevObjHit=null,this.camUpdated=!0}setFOV(i){this.camera.fov=i,this.camera.updateProjectionMatrix(),this.camUpdated=!0}setStats(i,n,s,r){this.camera.near=s,this.camera.far=r,this.setFOV(i)}setTransform(i,n=null){this.resetCameraCalculations(i),n&&(this.cameraAimTarget.position.copy(n),this.camera.lookAt(n),this.cameraPrevLookAt.copy(n),this.updateCameraMatrices(),this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone()),this.resetGravity(),this.camUpdated=!0}setToObj(i,n=null){if(this.resetCameraCalculations(i.position),n){let s=n.position.clone();this.cameraAimTarget.position.copy(s),this.camera.lookAt(s),this.cameraPrevLookAt.copy(s),this.updateCameraMatrices(),this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone()}else this.pxlDevice.touchMouseData.initialQuat=i.quaternion.clone(),this.camera.setRotationFromQuaternion(this.pxlDevice.touchMouseData.initialQuat),this.updateCameraMatrices();this.resetGravity(),this.camUpdated=!0,this.mainColliderCheck(i.position,null),this.nearestFloorObjName=null}warpToRoom(i,n=!1,s=null){this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].stop();let r=this.pxlEnv.currentRoom,o=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].camHoldWarpPos;this.pxlEnv.currentRoom=i,this.pxlAutoCam.curRoom=i;let a=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom],l=i==this.pxlEnv.mainRoom;if(this.pxlUser.iZoom){let u=l?this.pxlEnv.roomComposer:this.pxlEnv.mapComposer,d=l?this.pxlEnv.mapComposer:this.pxlEnv.roomComposer;this.pxlEnv.delayPass.uniforms.tDiffusePrev.value=u.renderTarget1.texture,this.pxlEnv.delayPass.uniforms.tDiffusePrevRoom.value=d.renderTarget1.texture,setTimeout(()=>{r!=i&&(l?this.pxlEnv.roomComposer.reset():this.pxlEnv.mapComposer.reset()),setTimeout(()=>{this.pxlEnv.mapComposerWarpPass.needsSwap=!1},500)},100)}n?(i!=r&&a.start(),this.pxlEnv.roomRenderPass.scene=a.scene,a.camInitPos&&a.camInitLookAt&&(!o||!this.pxlEnv.postIntro||this.hotKeyTriggered)&&(this.setTransform(a.camInitPos,a.camInitLookAt),this.hotKeyTriggered=!1)):(!o||!this.pxlEnv.postIntro||this.hotKeyTriggered)&&(s!=null?this.setToObj(s):this.setTransform(a.camReturnPos,a.camReturnLookAt),this.hotKeyTriggered=!1),this.pxlGuiDraws.prepArtistInfo(a.getArtistInfo()),this.camUpdated=!0,this.camera.fov=a.pxlCamFOV,this.camera.zoom=a.pxlCamZoom,this.camera.aspect=a.pxlCamAspect,this.camera.near=a.pxlCamNearClipping,this.camera.far=a.pxlCamFarClipping,this.camera.updateProjectionMatrix();let c=this.getUserHeight();this.emitCameraTransforms(this.camera.position.clone(),c,!0),this.pxlAutoCam.checkStatus()}warpToRoomSnapshot(i){this.pxlEnv.currentRoom=i;let n=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];this.camera.fov=n.pxlCamFOV,this.camera.zoom=n.pxlCamZoom,this.camera.aspect=n.pxlCamAspect,this.camera.near=n.pxlCamNearClipping,this.camera.far=n.pxlCamFarClipping,this.camera.updateProjectionMatrix(),this.setTransform(n.camThumbPos,n.camThumbLookAt);let s=this.getUserHeight();this.emitCameraTransforms(this.camera.position.clone(),s,!0)}fastTravel(i=0){this.pxlAutoCam.enabled||((this.pxlAutoCam.active||this.pxlAutoCam.autoCamActive)&&this.pxlAutoCam.preAutoCamToggle(),this.hotKeyTriggered=!0,i==0&&this.warpEventTriggered(1,this.pxlEnv.currentRoom,"init"))}camJumpKey(i=!1){i?this.camInitJump():(this.cameraJumpActive&&(this.cameraJumpActive=!1),this.cameraAllowJump=!0)}camInitJump(){!this.gravityActive&&this.cameraAllowJump&&(this.pxlDevice.keyDownCount[2]=this.pxlTimer.prevMS,this.cameraAllowJump=!1,this.cameraJumpActive=!0,this.cameraJumpInAir=!0,this.gravityActive=!0,this.pxlUser.gravityRate=0,this.cameraJumpImpulse=this.cameraJumpInitImpulse[this.pxlUser.lowGrav]*this.userScale,this.objectJumpLock&&(this.objectJumpLock=!1,this.nearestFloorHit=this.nearestFloorHitPrev))}camJump(i){let n=i-this.pxlDevice.keyDownCount[2],s=1,r=Math.min(1,n/this.cameraMaxJumpHold[this.pxlUser.lowGrav]);if(this.cameraJumpActive){let o=r;o==1?this.cameraJumpActive=!1:(o=(1-o)*(1-o),o=o*(o*.5+.5)),this.cameraJumpImpulse+=Math.max(0,o)}this.cameraJumpImpulse*=1-r,r==1&&(this.cameraJumpActive=!1)}killJumpImpulse(){let i=this.cameraJumpImpulse*this.cameraJumpImpulseEaseOut;this.cameraJumpImpulse=i>.1?i:0,this.workerFunc("killJumpImpulse")}updateGravity(){if(this.runMain&&(this.pxlUser.gravityRate=Math.max(0,this.pxlUser.gravityRate-this.cameraJumpImpulse*.2),this.gravityActive&&(this.pxlUser.gravityRate=Math.min(this.pxlUser.gravityMax,this.pxlUser.gravityRate+this.pxlUser.gravityMax*this.pxlTimer.msRunner.y)),this.pxlUser.gravityRate!=0)){let i=1;this.gravityActive?i=this.pxlUser.gravityRate*.08:(this.pxlUser.gravityRate=this.pxlUser.gravityRate>.01?this.pxlUser.gravityRate*this.gravityEaseOutRate:0,i=this.pxlUser.gravityRate),i=Math.min(1,i),this.standingHeightGravInfluence=Math.min(1,this.pxlUser.gravityRate*1.2/this.pxlUser.gravityMax)*this.standingMaxGravityOffset}}resetGravity(){this.pxlUser.gravityRate=0,this.workerFunc("resetGravity"),this.jumpLanding(!1)}jumpLanding(i=!0){this.gravityActive=!1,this.cameraJumpImpulse=0,this.cameraJumpInAir=!1,this.cameraJumpActive=!1,i&&this.workerFunc("jumpLanding")}mainColliderCheck(i,n){let s=null;if(this.movementBlocked=!1,(this.cameraMoveLength>0||this.colliderPrevObjHit==null||this.nearestFloorObjName==null)&&this.cameraBooted&&this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].collidersExist){this.colliderValidityChecked=!0;let l=new L(0,-1,0),c=i.clone(),u=1500;c.y=u,this.objRaycast.set(c,l);let d=!1;var r=[];let h=~~(c.x>0)+(~~(c.z>0)+"");if(r.length>0)if(this.antiColliderTopActive){let p=this.objRaycast.intersectObjects([...this.antiColliderTopList.noAxis,...this.antiColliderTopList[h]]),f=-99999,m=i.y,w,y=this.nearestFloorHit,g=!1;for(var o=0;o<p.length;++o){var a=p[o];w=a.object.name;let C=a.point,E=a.distance,R=C.y-i.y<this.maxStepHeight;g=g||R,(E<f&&valid||s==null)&&(s=w,f=E,y=C)}let v;(!g||i.y<y.y&&this.nearestFloorHitPrev.y-y.y>this.maxStepHeight+this.getStandingHeight()&&!this.gravityActive&&i.y+this.maxStepHeight+this.getStandingHeight()<y.y&&this.gravityActive)&&((this.cameraMovement[0]!=0||this.cameraMovement[1]!=0)&&(g=!0,this.gravityActive=!1,this.objectJumpLock=!0),v=this.cameraPos.clone(),v.y=Math.min(i.y,v.y),i=v,y=i,this.gravityActive?y.y=this.nearestFloorHitPrev.y:y.y=this.cameraPos.y,this.cameraJumpActive=!1,this.cameraAllowJump=!0,this.cameraJumpInAir=!1,this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0)),g&&(s==null?(this.nearestFloorHit=this.nearestFloorHitPrev,this.nearestFloorObjName=this.nearestFloorObjNamePrev,Math.abs(i.y-this.nearestFloorHit.y)>this.maxStepHeight+this.getStandingHeight()&&(this.colliderValid=!1,this.gravityActive=!0)):(this.nearestFloorHitPrev=this.nearestFloorHit,this.nearestFloorObjNamePrev=this.nearestFloorObjName,this.nearestFloorHit=y,this.nearestFloorObjName=s))}else this.colliderFail=!0,this.movementBlocked=!0;else{let p=this.maxStepHeight+this.cameraJumpImpulse,f=p+this.maxStepHeight+this.pxlUser.gravityRate;if(c.y=i.y+p,this.objRaycast.set(c,l),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList||(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList={}),!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[h]){let m=[],w=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];m.push(...w.colliderList.noAxis),m.push(...w.colliderList[h]),m.push(...w.antiColliderTopList.noAxis),m.push(...w.antiColliderTopList[h]),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[h]=m}if(this.colliderActive&&this.antiColliderTopActive||this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive)r=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[h]);else return i;if(r.length>0){this.floorColliderInitialHit=!0;let m=-99999,w,y=this.nearestFloorHit;for(let g=0;g<r.length;++g){let v=r[g],C=v.distance,E=v.point,A=!1;if(w=v.object.name,A=E.distanceTo(i)<this.maxStepHeight,(this.portalList[w]||this.roomWarpZone.includes(w))&&A){s=w,y=E;break}else this.itemCheck(w,A)||(C<m||s==null)&&(s=w,m=C,y=E)}this.nearestFloorObjName==null&&s!=null&&(this.nearestFloorHitPrev=y,this.nearestFloorObjNamePrev=s,this.nearestFloorHit=y,this.nearestFloorObjName=s),this.nearestFloorHitPrev.y-y.y>this.maxStepHeight+this.getStandingHeight()&&!this.gravityActive?(s?i=this.cameraPos.clone():i=this.cameraPrevPos.clone(),s=this.nearestFloorObjName,this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0)):(this.nearestFloorHitPrev=this.nearestFloorHit,this.nearestFloorObjNamePrev=this.nearestFloorObjName,this.nearestFloorHit=y,this.nearestFloorObjName=s,s==null&&(this.colliderValid=!1,this.gravityActive=!0))}else this.colliderFail=!0,this.movementBlocked=!0,this.colliderValidityChecked=!1,i=this.cameraPos.clone()}}else this.colliderValidityChecked=!1;return this.colliderValidityChecked=!1,i}roomColliderCheck(i){this.colliderValidityChecked=!0,this.colliderValid=!1,this.colliderFail=!1;let n=i.clone();if(n.y=0,this.nearestFloorHit=n,this.nearestFloorObjName="None",!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp)return i;if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp.length>0){let r=new L(0,-1,0),o=i.clone(),a=1500;o.y=a,this.objRaycast.set(o,r);var s=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp);if(s.length>0)return this.pxlEnv.currentAudioZone=0,this.warpEventTriggered(1,this.pxlEnv.mainRoom),i;let l=i.y,c=i;if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive==!0){if(!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList){let u=[];Object.keys(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList).forEach(h=>{u.push(...this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList[h])}),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList=u}if(this.objRaycast.set(o,r),s=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList),s.length==0)return this.cameraPrevPos.clone();if(s.forEach(u=>{let d=u.distance,h=i.y-u.point.y;d>i.y&&h<i.y+this.maxStepHeight&&(l=d,c=u.point)}),i.y<c.y)return c.clone()}}return i}checkColliderValid(i){this.colliderValidityChecked=!0;let n=this.maxStepHeight+this.pxlUser.gravityRate,s=i.distanceTo(this.nearestFloorHit),r=s<n;return this.colliderValid=r,s}eventTrigger(i=null){if(!i)return!1;if(this.portalList[i])return this.warpEventTriggered(0,this.portalList[i]),this.eventCheckStatus=!1,!0;if(this.roomWarpZone.includes(i))return this.warpEventTriggered(1,i),this.eventCheckStatus=!1,!0;if(this.colliderShiftActive=this.colliderCurObjHit!=i||this.colliderShiftActive,this.colliderPrevObjHit=this.colliderCurObjHit,this.colliderCurObjHit=i,this.colliderShiftActive=this.colliderShiftActive||!(this.colliderAdjustPerc==1||this.colliderAdjustPerc==0),this.colliderShiftActive&&this.colliderCurObjHit){let n=1;this.colliderCurObjHit.includes("AudioTrigger")&&(n=-1),this.colliderAdjustPerc=Math.min(1,Math.max(0,this.colliderAdjustPerc+this.colliderAdjustRate*n));let r=1-this.colliderAdjustPerc,o=1;if(this.colliderCurObjHit=="AudioTrigger_1"?(this.pxlEnv.currentAudioZone=1,o=o-r*this.uniformScalars.darkBase,this.uniformScalars.exposureUniformBase=o):this.colliderCurObjHit=="AudioTrigger_2"?(this.pxlEnv.currentAudioZone=2,o=this.uniformScalars.curExp+r*this.uniformScalars.brightBase*1,this.uniformScalars.exposureUniformBase=o,this.rolLobby,this.proximityScaleTrigger=!0,this.pxlAudio.setFadeActive(-1)):this.colliderCurObjHit=="MainRoom"?(this.pxlEnv.currentAudioZone=3,this.warpEventTriggered(1,"ShadowPlanet")):(this.pxlEnv.currentAudioZone=0,o=o*(1-r)+this.uniformScalars.exposureUniformBase*r),this.colliderShiftActive=!(this.colliderAdjustPerc==1||this.colliderAdjustPerc==0),this.colliderPrevObjHit=="AudioTrigger_2"&&this.colliderCurObjHit!=this.colliderPrevObjHit&&(this.proximityScaleTrigger=!0,this.pxlAudio.setFadeActive(1)),this.pxlDevice.mobile&&(o=this.colliderAdjustPerc),this.pxlEnv.updateCompUniforms(o),this.proximityScaleTrigger&&!this.pxlDevice.mobile&&!this.pxlAutoCam.enabled){let a=this.colliderAdjustPerc;a=1-(1-a)*(1-a),this.pxlEnv.fogMult.x=a,this.colliderShiftActive||(this.proximityScaleTrigger=!1)}this.eventCheckStatus=this.colliderShiftActive}}itemCheck(i,n){if(!n)return!1;let s=i.split("_").shift();return this.pxlUser.itemListNames.includes(i)&&this.pxlUser.checkItemPickUp(s)?this.itemActive(s,i):!1}itemTrigger(){if(this.pxlUser.itemActiveTimer.length>0)this.pxlUser.itemActiveTimer[0]=this.pxlTimer.curMS;else{this.pxlUser.mPick.length==0&&(this.pxlUser.mPick=this.pxlUtils.randomizeArray(["LizardKing","StarField","InfinityZoom"]));let i=this.pxlUser.mPick.pop();this.pxlUser.checkItemPickUp(i),this.itemActive(i)}}itemActive(i=null,n=null){if(i==null)return!1;let s=this.pxlTimer.prevMS+this.pxlUser.itemRunTime,r="",o="";if(i=="LowGravity")o="Low Gravity",r="this.lowGrav=0;this.itemGroupList['"+n+"'].visible=true;",s=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(i=="LizardKing")o="I am the Lizard King",r="this.lKing=0;this.lKingWarp.set(...this.lKingInactive);this.lKingPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+n+"'].visible=true;"),s=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(i=="StarField")o="Major Tom",r="this.sField=0;this.sFieldPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+n+"'].visible=true;"),s=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(i=="InfinityZoom")o="Fractal Substrate",r="this.iZoom=0;this.iZoomPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+n+"'].visible=true;this.pxlEnv.mapComposerWarpPass.needsSwap=true;this.pxlEnv.mapComposerWarpPass.enabled=false;"),s=this.pxlTimer.prevMS+this.pxlUser.itemRunTime,this.pxlEnv.mapComposerWarpPass.needsSwap=!0,setTimeout(()=>{this.pxlEnv.mapComposer.render(),this.pxlEnv.roomComposer.render(),setTimeout(()=>{this.pxlEnv.mapComposerWarpPass.needsSwap=!1,this.pxlEnv.mapComposerWarpPass.enabled=!0},500)},500);else return!1;return this.pxlGuiDraws.buildItemHud(i,o),this.pxlDevice.mobile||(this.pxlUser.itemGroupList[n].visible=!1),this.pxlUser.itemInactiveCmd.push(r),this.pxlUser.itemActiveTimer.push(s),this.pxlUser.itemActiveList.push(o),!0}updateMovement(i){let n=[0,0],s=[...this.pxlDevice.directionKeysPressed],r=0,o=0,a=[i-this.pxlDevice.keyDownCount[0],i-this.pxlDevice.keyDownCount[1]];if(s[0]+s[2]==1){r=s[2]-s[0];let l=this.pxlQuality.settings.leftRight?1.5:1-Math.min(1,Math.abs(this.cameraMovement[1]*.1))*.6;n[0]=((this.pxlQuality.settings.leftRight?2:6)+(1+a[0]*(a[0]+1))*.1)*l}else this.pxlDevice.keyDownCount[0]=i;if(s[1]+s[3]==1){o=s[3]-s[1];let l=1-Math.min(1,Math.abs(this.cameraMovement[0]*.07))*.65;n[1]=(1+a[1]*(a[1]*3+2+this.pxlDevice.shiftBoost)*.15)*l,n[1]=Math.min(30,n[1])}else this.pxlDevice.keyDownCount[1]=i;this.cameraMovement[0]+=r*n[0],this.cameraMovement[1]+=o*n[1]}initFrameCamPosition(){let i=this.cameraPos.clone();if(!this.cameraBooted)this.cameraAimTarget.position.set(0,0,0),this.cameraPrevPos=new L(i.clone()),this.cameraPrevLookAt=new L(0,0,1);else{let n;n=new L(this.pxlQuality.settings.leftRight?this.cameraMovement[0]*.5:0,0,this.cameraMovement[1]),this.cameraMoveLength=n.length(),n.applyQuaternion(this.camera.quaternion),n.normalize().multiply(new L(1,0,1)).multiplyScalar(this.cameraMoveLength*this.cameraMoveLengthMult),i.add(n),this.cameraMovement[0]=Math.abs(this.cameraMovement[0])<this.posRotEasingThreshold?0:this.cameraMovement[0]*this.cameraMovementEase,this.cameraMovement[1]=Math.abs(this.cameraMovement[1])<this.posRotEasingThreshold?0:this.cameraMovement[1]*this.cameraMovementEase,i.y=this.cameraPos.y+this.cameraJumpImpulse,this.workerActive&&(this.cameraJumpImpulse=0)}return this.cameraCross=new L(1,0,0).applyQuaternion(this.camera.quaternion),i}updateCamPosition(i){if(this.gravityActive){let n=this.maxStepHeight+this.pxlUser.gravityRate;if(i.y<this.nearestFloorHit.y){let r=this.nearestFloorHitPrev;i.y=Math.max(r.y,i.y),i.y<0&&(i.x=r.x,i.z=r.z)}else i.y=Math.max(this.nearestFloorHit.y,i.y-this.pxlUser.gravityRate),i.y==this.nearestFloorHit.y&&i.y<this.cameraPrevPos.y&&this.jumpLanding()}else if(i.distanceTo(this.nearestFloorHit)<this.maxStepHeight)i.y=this.nearestFloorHit.y;else{i=this.cameraPos.clone();let s=i.y>this.nearestFloorHit.y;this.gravityActive=s,this.colliderFail=!s,this.workerFunc("jumpLanding")}return i}getStandingHeight(){return this.standingHeight*this.userScale}getUserHeight(){let i=Math.min(1,Math.abs(this.cameraMovement[1]));this.walkBouncePerc=this.walkBouncePerc>=1?1:this.walkBouncePerc+.05,this.walkBounce+=i,this.walkBouncePerc=this.walkBouncePerc*.9+i,this.walkBouncePerc<.03&&(this.walkBouncePerc=0,this.walkBounce=0,this.walkBounceSeed=Math.random()*2351.3256);let n=Math.sin(this.walkBounce*.4+this.walkBounceSeed+this.cameraMovement[1]*.2)*this.walkBouncePerc*.3;return this.getStandingHeight()-this.standingHeightGravInfluence+n}camApplyMobileRotation(){if(this.cameraPose.alpha!=null){let i=.017453292519943278,n=2.23606797749979,s=new Ue,r=this.cameraPose.alpha*i+this.cameraPose.alphaOffset+2.1,o=this.cameraPose.beta*i,a=this.cameraPose.gamma*i,l=new L(0,0,1),c=new Ue,u=new Ue(-n,0,0,n),d=new vt;d.set(o,r,-a,"YXZ"),s.setFromEuler(d),s.multiply(u),s.multiply(c.setFromAxisAngle(l,-this.cameraPose.orientation)),s.normalize();let h=new Ue;Ue.slerp(this.camera.quaternion,s,h,.35),this.camera.setRotationFromQuaternion(h)}}updateCameraRotation(){if(this.cameraPose.alpha==null){let i=this.pxlDevice.gyroGravity[2],n=new L(0,0,1),s=new Ue;this.pxlDevice.touchMouseData.netDistance.y=Math.min(this.pi*500,Math.max(-this.pi*500,this.pxlDevice.touchMouseData.netDistance.y));let r=new vt;r.set(this.pxlDevice.touchMouseData.netDistance.y*.001,this.pxlDevice.touchMouseData.netDistance.x*.001+i,0,"YXZ");let o=new Ue;o.setFromEuler(r),o=this.pxlDevice.touchMouseData.initialQuat.clone().multiply(o),o.normalize();let a=new Ue;Ue.slerp(this.camera.quaternion,o,a,.35),a=a.normalize(),this.camera.setRotationFromQuaternion(a)}}lookAtTargetLock(){if(this.lookAtTargetActive&&this.lookAtTargetActive&&(this.lookAtLockFader!=0&&(this.lookAtLockPerc+=(this.lookAtLockFader+Math.min(1,this.pxlDevice.touchMouseData.velocity.length()*.001))*this.lookAtLockFadeRate,(this.lookAtLockPerc<0||this.lookAtLockPerc>1)&&(this.lookAtLockPerc=this.lookAtLockPerc<0?0:1,this.lookAtLockFader=0),this.lookAtPerc.x=this.lookAtLockPerc),this.lookAtLockPerc>0)){let i=this.camera.quaternion.clone();this.camera.lookAt(this.cameraAimTarget.position);let n=this.camera.quaternion.clone();this.lookAtLockPerc==1?this.camera.setRotationFromQuaternion(n):this.camera.setRotationFromQuaternion(n.slerp(i,Math.cos(this.lookAtLockPerc*pi)*.5+.5))}}warpEventTriggered(i=0,n=null,s="init"){this.warpActive||(this.pxlEnv.mapComposerWarpPass.needsSwap=!0,this.warpType=i,this.warpObj=n,this.warpTarget=s,this.warpActive=!0,this.pxlEnv.initWarpVisual(i))}warpCamRun(){if(this.warpType==0)this.setToObj(this.warpObj);else if(this.warpType==1){let i=this.warpTarget=="init";this.warpToRoom(this.warpObj,i,this.warpTarget)}this.pxlEnv.setExposure(this.uniformScalars.exposureUniformBase),this.warpObj=null,this.warpTarget=null,this.warpActive=!1}lowQualityUpdates(){if(this.HDRView){let i=new L(0,0,-1).applyQuaternion(this.camera.quaternion),n=i.clone().multiply(new L(1,0,1)).normalize();this.camRotPitch.set(-Math.atan2(n.x,n.z)*.1591549430918955,i.y*.5)}}midQualityUpdates(){if(this.pxlQuality.settings.motion){let i=new L(0,0,0);i.applyQuaternion(this.camera.quaternion),this.camRotXYZ.multiplyScalar(.8).add(i.multiplyScalar(.2));let n;if(this.pxlDevice.mobile){let o=sW*.5,a=sH*.5,l=new L(0,0,10),c=new L(0,0,10);l.applyQuaternion(this.camera.quaternion.clone()).project(this.camera),c.applyQuaternion(this.prevQuaternion).project(this.camera),l.x=(l.x+1)*o,l.y=-(l.y-1)*a,c.x=(c.x+1)*o,c.y=-(c.y-1)*a,n=c.clone().sub(l.clone()).multiplyScalar(.6).multiply(new L(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y,0));let u=.1;n.length>u&&n.normalize().multiplyScalar(u)}else n=this.pxlDevice.touchMouseData.velocity.clone().multiplyScalar(Math.max(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y));let s=new z(n.x,-n.y),r=new z(0,0).lerpVectors(this.pxlEnv.blurDirPrev,s,.85);this.pxlEnv.blurDirPrev.set(this.pxlEnv.blurDirCur),this.pxlEnv.blurDirCur.set(r)}}emitCameraTransforms(i,n,s=!1){}jogServerMemory(){let i=this.cameraPos.clone(),n=this.getUserHeight();this.emitCameraTransforms(i,n,!0)}updateCamera(){let i=this.pxlDevice.touchMouseData.velocity.length();if(this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(.7),this.camUpdated||i!=0||this.pxlDevice.touchMouseData.active){this.camUpdated=!1;let n=!1;this.updateDeviceValues(i),this.pxlUser.localUserTurned=this.pxlDevice.touchMouseData.velocity.length()==0,this.prevQuaternion.copy(this.camera.quaternion);let s=this.initFrameCamPosition(),r=this.getUserHeight();{let o=null,a=!1;s=this.mainColliderCheck(s,o)}this.updateGravity(),!this.colliderValid&&!this.colliderValidityChecked?this.jump=this.checkColliderValid(s):this.jump=0,this.eventCheckStatus=!0,s=this.updateCamPosition(s),this.pxlUser.localUserMoved=this.gravityActive||(this.cameraMovement[0]**2+this.cameraMovement[1]**2)**.5>0,this.cameraPrevPos=this.cameraPos.clone(),this.cameraPos=s.clone(),s.y+=r,this.camera.position.copy(s),this.updateCameraRotation(),this.camera.updateMatrixWorld(),this.emitCameraTransforms(s,r),this.cameraBooted=!0}else this.pxlUser.localUserMoved=!1,this.pxlUser.localUserTurned=!1}};var po=class{constructor(i=!1){this.enabled=i,this.active=!1,this.mobile=null,this.pxlTimer=null,this.pxlUtils=null,this.pxlDevice=null,this.pxlAudio=null,this.pxlCamera=null,this.pxlEnv=null,this.camera=null,this.netDistance=new z,this.prevCamChange=0,this.nextCamChange=0,this.delayRange=[25,45],this.autoCamActive=!1,this.autoCamMode=0,this.autoCamPaths={},this.resetAutoCam=!0,this.autoCamPrevPos=null,this.autoCamPrevLookAt=null,this.touchBlender=!1,this.autoCamId=0,this.camMode=0,this.curModeCount=0,this.curRoom="",this.curRoomIndex=0,this.curPath=0,this.roomList=[],this.pathCounts={},this.forceNewRoom=!1,this.curRoomCount=0,this.avatarMin=0,this.avatarValid=!1,this.curAvatar=null,this.clusterReturn=!1,this.curCluster=[],this.clusterValid=2,this.clusterRotation=0,this.clusterRotRate=.005}setDependencies(i){this.pxlTimer=i.pxlTimer,this.pxlUtils=i.pxlUtils,this.pxlDevice=i.pxlDevice,this.pxlAudio=i.pxlAudio,this.pxlCamera=i.pxlCamera,this.pxlEnv=i.pxlEnv,this.camera=i.pxlCamera.camera}init(){this.active=this.enabled||this.mobile,this.autoCamActive=this.autoCamActive||this.mobile;let{roomList:i,pathCounts:n}=this.getAutoCamData();this.roomList=i,this.curRoom=this.roomList[0],this.pathCounts=n,this.setRoom(!1,!0),this.getNextPath(),this.checkStatus()}step(i=!1){if(this.active==!1)if(this.autoCamActive)this.updateAutoCamera();else return!0;if((this.pxlTimer.curMS>=this.nextCamChange||i)&&this.active&&!this.pxlDevice.touchMouseData.active){if(!i||!this.enabled){let n=this.checkCamMode();this.setNextTrigger(n)}this.curAvatar=0,this.camera.up.set(0,1,0),this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0),this.camMode==1?this.setCamMode(0):this.camMode==2?this.setCamMode(0):(this.curCluster=[],this.stepDroneCam()),this.setAutoCamMode(this.camMode)}return this.updateAutoCamera(),this.applyTouchRotate(),!1}checkCamMode(){let i=1,n=this.camMode;return this.camMode=0,!this.enabled||!this.active||this.camMode!=n&&this.camMode==0&&(this.forceNewRoom=!0),i}setCamMode(i){let n=1;i.type==1||i.type==2?n=1:(this.camMode=0,this.forceNewRoom=!0),this.step(!0)}stepDroneCam(){let i=!0,n=Math.random(this.nextCamChange),s=this.pathCounts[this.pxlEnv.currentRoom];this.curRoomCount>=s*2&&(this.forceNewRoom=!0),(n<.3||this.forceNewRoom)&&(this.setRoom(),i=!1),this.curRoomCount+=1,this.getNextPath(i)}setRoom(i=!1,n=!1){if(this.active||this.autoCamActive){let s=this.curRoomIndex,r=this.roomList.length;this.pxlEnv.postIntro?n||(i?s=(s+1)%r:(s=Math.floor(Math.random()*r),s==this.curRoomIndex&&(s=(s+1)%r))):s=0,this.curRoomIndex=s,this.curRoom!=this.roomList[s]&&(this.curRoom=this.roomList[s],this.forceNewRoom=!1,this.curRoomCount=0,this.pxlCamera.warpEventTriggered(1,this.curRoom,"init"))}}setNextTrigger(i=1){let n=Math.random(this.nextCamChange);n=(this.delayRange[1]-this.delayRange[0])*n+this.delayRange[0],this.nextCamChange=this.pxlTimer.curMS+n*i}getNextPath(i=!0,n=1){if(this.autoCamPaths.hasOwnProperty(this.pxlEnv.currentRoom)){let s=this.autoCamPaths[this.pxlEnv.currentRoom].length;if(this.curPath=(this.curPath+n)%s,i&&n==0){let r=Math.random(this.nextCamChange);r=Math.floor(r*this.autoCamPaths[this.pxlEnv.currentRoom].length),this.curPath==r&&(r=(r+1)%s),this.curPath=r}else this.curPath=this.curPath<0?s-1:this.curPath,this.setNextTrigger(1);this.setAutoCamPath(this.curPath)}}checkStatus(){(this.autoCamActive||this.pxlDevice.mobile||this.active)&&this.toggleAutoCam(!0)}preAutoCamToggle(){this.autoCamActive||this.pxlCamera.colliderCurObjHit=="AudioTrigger_2"&&(this.pxlCamera.proximityScaleTrigger=!0,this.exposureShiftActive=!0),this.toggleAutoCam()}setAutoCamMode(i=0){this.autoCamMode=i,i==1&&(this.resetAutoCam=!0)}setPosQuat(i,n){this.camera.quaternion.copy(n),this.camera.position.copy(i),this.pxlCamera.updateCameraMatrices(),this.pxlCamera.camUpdated=!0}toggleAutoCam(i=null,n=1){if(this.pxlEnv.fogMult.x=1,this.autoCamPaths[this.pxlEnv.currentRoom]){this.curRoom=this.pxlEnv.currentRoom;let s=this.autoCamPaths[this.pxlEnv.currentRoom].length;isNaN(this.autoCamId)&&(this.autoCamId=s-1);let r=this.autoCamActive;if(this.autoCamActive=i==null&&s>0?!this.autoCamActive:i,this.autoCamActive=this.mobile||this.autoCamActive,!r&&this.autoCamActive&&(this.netDistance=new z().copy(this.pxlDevice.touchMouseData.netDistance)),this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0),this.autoCamActive){this.pxlCamera.resetGravity(),this.autoCamId=(this.autoCamId+n)%s,this.autoCamId=this.autoCamId<0?s-1:this.autoCamId;let o=this.autoCamPaths[this.pxlEnv.currentRoom][this.autoCamId];this.totalLoopDuration=o.position.userData.duration;try{this.autoCamPositions=o.position.geometry.attributes.position,this.autoCamLookAt=o.lookAt.geometry.attributes.position,o.up?this.autoCamUp=o.up.geometry.attributes.position:(this.autoCamUp=null,this.camera.up.set(0,1,0)),this.numControlPoints=this.autoCamPositions.array.length/3,this.autoCamStartTime=this.pxlTimer.curMS-this.totalLoopDuration*Math.random()}catch{}}else this.setPosQuat(this.pxlCamera.cameraPrevPos.clone(),this.pxlCamera.prevQuaternion.clone()),this.pxlDevice.touchMouseData.netDistance.copy(this.netDistance)}}prevNextAutoCam(i=1,n=!1){this.autoCamActive&&(this.enabled&&this.active&&!n?this.nextCamChange=this.pxlTimer.curMS:this.toggleAutoCam(!0,i))}setAutoCamPath(i=0){this.autoCamActive&&(this.autoCamId=i,this.toggleAutoCam(!0,0))}getAutoCamData(){let i=Object.keys(this.autoCamPaths),n={};return i.forEach(s=>{n[s]=this.autoCamPaths[s].length}),{roomList:i,pathCounts:n}}getAutoCamValueFromCurve(i,n,s,r=!1){let o=i[n*3],a=i[n*3+1],l=i[n*3+2],c=(n+1)%this.numControlPoints,u=i[c*3],d=i[c*3+1],h=i[c*3+2],p=new L(o,a,l),f=new L(u,d,h);return p.lerp(f,s),p}updateAutoCamera(){if(!this.autoCamPositions||!this.autoCamPositions.array)return;let n=(this.pxlTimer.curMS-this.autoCamStartTime)%this.totalLoopDuration/this.totalLoopDuration;n*=this.numControlPoints-1;let s=Math.floor(n),r=n-s,o=this.getAutoCamValueFromCurve(this.autoCamPositions.array,s,r,!1);this.camera.position.copy(o);let a=this.getAutoCamValueFromCurve(this.autoCamLookAt.array,s,r);if(this.camera.lookAt(a),this.autoCamUp){let l=this.getAutoCamValueFromCurve(this.autoCamUp.array,s,r);l=l.sub(o).normalize(),this.camera.up.copy(l)}}applyTouchRotate(){let i=1;this.touchBlender?(i=Math.min(1,Math.max(0,this.pxlTimer.curMS-this.pxlDevice.touchMouseData.releaseTime-1)*.3),i*=i,this.pxlDevice.touchMouseData.netDistance.multiplyScalar(1-i*.3),this.touchBlender=i<1):this.pxlDevice.touchMouseData.netDistance.multiplyScalar(.5);let n=new vt;n.set(this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2,this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2,0,"YXZ");let s=new Ue().clone(this.camera.quaternion);s.setFromEuler(n),s=this.camera.quaternion.clone().multiply(s),s.normalize(),this.touchBlender&&s.slerp(this.camera.quaternion.clone(),i).normalize();let r=new L(0,0,-10).applyQuaternion(s).add(this.camera.position);this.camera.setRotationFromQuaternion(s),this.camera.lookAt(r),this.camera.up.set(0,1,0)}};var mo=class{constructor(){this.pxlTimer=null,this.pxlVideo=null,this.pxlDevice=null,this.pxlEnv=null,this.pxlGuiDraws=null,this.pxlSocket=null,this.active=!1,this.audioTimer=new yt(0,0,0),this.audioEq=new Ed(0,0,0,0),this.audioWorker=null,this.audioProcessor=null,this.djUrlSource="//",this.djMuted=!1,this.djAudioVolume=0,this.djAudioVolumeMax=.65,this.djAudioVolumeMin=.25,this.djAudioVolumeScalar=.25,this.djAudioObj=null,this.djTimecodeObj=null,this.djVolumeParentObj=null,this.djVolumeObj=null,this.roomAudioStopped=!0,this.videoStreamObjects=[],this.colliderVolActive=!1,this.isVideoObject=!1,this.activeObject=null,this.fadeActive=!1,this.fadeAdjustRate=.02,this.fadeDir=0,this.fadePerc=0,this.audioContext=null}setDependencies(i){this.pxlTimer=i.pxlTimer,this.pxlVideo=i.pxlVideo,this.pxlDevice=i.pxlDevice,this.pxlEnv=i.pxlEnv,this.pxlGuiDraws=i.pxlGuiDraws,this.pxlSocket=i.pxlSocket}init(){this.active=!0}postBoot(){if(this.djAudioObj){if(this.pxlEnv.pxlAutoCam.enabled)this.djAudioVolumeMax=1,this.djAudioVolumeMin=0;else if(this.pxlEnv.mobile){let a=function(l){setTimeout(()=>{s.djAudioVolume=0,s.djAudioVolumeMax=r,s.djAudioVolumeMin=0,s.djAudioObj.byScript=!0,s.djAudioObj.volume=0,i.play().then(()=>{s.djPlayerMuteToggle(!1),s.setFadeActive(.5)}),o.removeEventListener("click",a),o.removeEventListener("touchstart",a)},500)},s=this,r=this.djAudioVolumeMax,o=document.getElementById("guiMobileWelcomeButton");o.addEventListener("click",a),o.addEventListener("touchstart",a)}this.djAudioVolume=this.pxlEnv.enabled?0:this.djAudioVolumeMin,this.djAudioObj.volume=this.pxlEnv.enabled?0:this.djAudioVolumeMin,this.djPlayerMuteToggle(!1),this.djPlayerAdjustVolume({}),this.djPlayerSetSliderGui();let i=this.djAudioObj;i.setAttribute("autoplay",!0);let n=this;this.djAudioObj.addEventListener("volumechange",s=>{n.djPlayerSetSliderGui()},!0)}}start(){}step(){this.djAudioObj&&this.djAudioObj.paused&&(this.djAudioObj.play().catch(i=>{}),this.djAudioObj.muted=this.djMuted||!this.roomAudioStopped),this.fadeAudioEvent()}isPaused(){let i=!0;return this.djAudioObj&&(i=this.djAudioObj.paused),i}pausePlayback(){this.active=this.pxlTimer.active,this.active?this.play():this.stop()}initPlay(){this.pxlVideo.canUnmute("dj")&&!this.isPaused()&&(this.djPlayerMuteToggle(!1),this.setFadeActive(1),this.pxlDevice.mobile&&this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon,!this.djMuted,!0))}play(){if(this.active=!0,this.isVideoObject)this.pxlVideo.setVolume("dj",this.djAudioVolume),this.pxlVideo.setMuted("dj",this.djMuted);else{this.djAudioObj.byScript=!0;let i=this.djAudioObj;i.children[0].setAttribute("src",this.djUrlSource),setTimeout(()=>{i.load(),setTimeout(()=>{i.volume=this.djAudioVolume,i.muted=this.djMuted||!this.roomAudioStopped,i.paused&&i.play()},20)},20)}}stop(){if(this.active=!1,this.isVideoObject)this.pxlVideo.setMuted("dj",!0);else{let i=this.djAudioObj;i.children[0].setAttribute("src",""),i.pause(),setTimeout(()=>{i.load()},20)}}djBuildPlayer(){this.djAudioObj=document.getElementById("djStream"),this.djVolumeParentObj=document.getElementById("djPlayerVolumeParent"),this.djVolumeObj=document.getElementById("djPlayerVolume"),this.djAudioObj.byScript=!1,this.djAudioObj.volume=0,this.djVolumeObj.style.width="0%";let i=this;this.pxlDevice.objectPercList.push("djPlayerVolume"),this.pxlDevice.objectPercList.push("djPlayerVolumeParent"),this.pxlDevice.objectPercFuncList.djPlayerVolumeParent=n=>{i.djPlayerAdjustVolume(n)},this.djVolumeParentObj.down=!1,this.djVolumeParentObj.addEventListener("mousedown",n=>{i.djVolumeParentObj.down=!0,i.djPlayerAdjustVolume(n)}),this.djVolumeParentObj.addEventListener("mousemove",n=>{i.djPlayerAdjustVolume(n)}),this.djVolumeParentObj.addEventListener("mouseup",n=>{i.djVolumeParentObj.down=!1}),this.pxlDevice.mobile&&(this.djVolumeParentObj.style.width="30vw",this.djVolumeParentObj.addEventListener("touchstart",n=>{i.djVolumeParentObj.down=!0},{passive:!0}),this.djVolumeParentObj.addEventListener("touchmove",n=>{i.djPlayerAdjustVolume(n)},{passive:!0}),this.djVolumeParentObj.addEventListener("touchend",n=>{i.djVolumeParentObj.down=!1},{passive:!0})),this.djAudioObj.muted=!0,this.prepAudioProcessor()}prepAudioProcessor(){}stepAudioProcessor(){}recieveAudioProcessor(i){}buildRemoteAudioMixer(i,n){if(0)var s,r,o;return!1}loadStreamPromise(){let i=this.djAudioObj;return new Promise((n,s)=>{this.djAudioObj.byScript=!0,i.children[0].setAttribute("src",this.djUrlSource),i.load(),i.muted=this.djMuted||!this.roomAudioStopped}).then(()=>{}).catch(n=>{console.log("error source")})}djPlayerSetSliderGui(){this.djAudioObj.byScript||!this.pxlEnv.postIntro||this.pxlEnv.pxlAutoCam.enabled?this.djAudioObj.byScript=!1:(this.fadeActive=!1,this.djAudioVolumeMax=this.djAudioVolume,this.djAudioVolumeMin=this.djAudioVolume*this.djAudioVolumeScalar),this.djVolumeObj.style.width=this.djAudioVolume*100*~~!this.djMuted+"%"}djPlayerAdjustVolume(i){if(this.djVolumeParentObj.down||this.djVolumeParentObj.down&&i.touches){let n=this.djVolumeParentObj.offsetWidth,s=0;i.touches?s=this.pxlDevice.objectPerc.percX:s=i.offsetX/n;let r=Math.max(0,Math.min(1,s));this.djAudioVolume=r,this.djAudioVolumeMax=r,this.djAudioVolumeMin=r*.1,r*=r,this.djAudioObj&&(this.djAudioObj.volume=r),i.touches&&this.djPlayerSetSliderGui()}this.pxlVideo&&this.pxlEnv.posted&&this.pxlVideo.setVolume("dj",this.djAudioVolume)}djPlayerMuteToggle(i=null){this.djMuted=i??!this.djMuted,i!=null&&this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon,!i,!0),this.djAudioObj&&(this.djAudioObj.muted=this.djMuted,this.djAudioObj.byScript=!0,this.djAudioObj.volume=this.djAudioObj.volume),this.pxlVideo&&this.pxlEnv.posted&&this.pxlVideo.setMuted("dj",this.djMuted)}setFadeActive(i=1){this.fadeDir!=i&&(this.fadeDir=i,this.fadeActive=!0)}fadeAudioEvent(){if(this.djVolumeParentObj&&!this.djVolumeParentObj.down&&this.fadeActive&&this.pxlEnv.postIntro){if(this.fadePerc+=this.fadeAdjustRate*this.fadeDir,this.fadePerc<0||this.fadePerc>1){this.fadePerc=this.fadeDir==1?1:0,this.fadeActive=!1;return}let i=(this.djAudioVolumeMax-this.djAudioVolumeMin)*this.fadePerc+this.djAudioVolumeMin;this.djAudioVolume=i,i*=i,this.djAudioObj&&(this.djAudioObj.byScript=!0,this.djAudioObj.volume=i),this.pxlVideo.setVolume("dj",this.djAudioVolume)}}};var Xc={};Nn(Xc,{camPosVert:()=>Vd,defaultShiftVert:()=>Nd,defaultVert:()=>Gd,discardFrag:()=>zd,shaderHeader:()=>le});function le(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}function Gd(){let t=le();return t+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,t}function Nd(){let t=le();return t+=`
  varying vec2 vUv;
  varying vec2 vUvShift;
  void main(){
    vUv=uv;
        vUvShift=uv-.5;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,t}function Vd(){let t=le();return t+=`
  varying vec3 camPos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    camPos=(modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
  }`,t}function zd(){let t=le();return t+=`
  void main(){
    discard;
    gl_FragColor=vec4(.0,.0,.0,0.0);
  }`,t}var qc={};Nn(qc,{animTextureFrag:()=>jd,animTextureVert:()=>Wd,clickableBevelFrag:()=>qd,clickableBevelVert:()=>Xd,portalBaseFrag:()=>Qd,portalBaseVert:()=>Yd});function Wd(){let t=le();return t+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,t}function jd(){let t=le();return t+=`
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
  }`,t}function Xd(){let t=le();return t+=`
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
      
    }`,t}function qd(){let t=le();return t+=`
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
    }`,t}function Yd(){let t=le();return t+=`
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
            
        }`,t}function Qd(){let t=le();return t+=`
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
        }`,t}var Yc={};Nn(Yc,{itemBaseFrag:()=>Kd,itemBaseVert:()=>Zd,itemFrag:()=>$d,itemVert:()=>Jd,itemZoomFrag:()=>ef,pxlPrincipledFrag:()=>nf,pxlPrincipledVert:()=>tf});function Zd(){let t=le();return t+=`
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
      
    }`,t}function Kd(){let t=le();return t+=`
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
    }`,t}function Jd(){let t=le();return t+=`
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
      
    }`,t}function $d(){let t=le();return t+=`
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
    }`,t}function ef(){let t=le();return t+=`
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
    }`,t}function tf(t=!1){let i=`
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
    `;return t&&(i+=`
        ${Be.common}
        ${Be.shadowmap_pars_vertex}
      `),i+=`
    
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
        
        `,t&&(i+=`
            ${Be.worldpos_vertex}
            ${Be.shadowmap_vertex}
          `),i+=`
    }`,i}function nf(t,i,n,s,r,o){let a=!1,l=1;t.hasOwnProperty("Specular")&&t.Specular>0&&(a=!0,l=t.Specular);let c=!1;t.PointColor&&(c=!0);let u=!0,d="1.0";t.hasOwnProperty("SurfaceNoise")&&(t.SurfaceNoise%1==0&&(d=t.SurfaceNoise+".0"),d=="0.0"&&(u=!1));let h=`
        `;if(i||(h+="uniform sampler2D dTexture;"),h+=`
    
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
    `,s&&(h+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),r&&(h+=`
      
      ${Be.packing}
      
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
          return texture2D( pointShadowMap[1], cubeToUV( bd3D, texelSize.y )).rgb;
      }
      `),h+=`
    void main(){
      `,c)h+="vec3 vertCd = vCd;";else if(i){let w=C=>C%1==0?C+".0":C+"",y=w(i.r),g=w(i.g),v=w(i.b);h+=`vec3 vertCd = vec3( ${y}, ${g}, ${v} ) ;`}else h+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";h+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,n&&(h+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let p="",f="",m="";if(u&&(d!="1.0"&&(p="*"+d),h+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,f=`+detailMult * (shadowInf*.5+.5) ${p}`,m=`(detailMult+.5) ${p}`),s&&(h+=`
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
                `,a&&(h+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),h+=`
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
          `,a&&(h+=`
            Cd.rgb += vertCd * specular * ${l};
            `)),r){h+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let w=0;w<o;++w)h+=`
                i=${w};
                lShadow = getPointShadow( pointShadowMap[${w}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;h+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${f} ;
            `,u&&(h+=`
              #else
                Cd.rgb*=${m};
              `),h+=`
          #endif
          `}else u&&(h+=`
            Cd.rgb*=${m};
            `);return h+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,h}var Qc={};Nn(Qc,{dustFrag:()=>af,dustVert:()=>of,emberWispsFrag:()=>rf,emberWispsVert:()=>sf,smokeFrag:()=>cf,smokeVert:()=>lf,snowFrag:()=>hf,snowVert:()=>uf});function sf(){let t=le();return t+=`
        
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
    
    const vec2 windForce = vec2(-0.135, 0.15);
    
    const vec3 earlyCd = vec3( 1.0, 0.7, .1 );
    const vec3 oldCd = vec3( 0.634, 0.50, 0.20 );
    const float emberSpread = 15.0;
    const float emberFadeDistance = 0.05;
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
        float shiftY= mod( t+t*seeds.x+seeds.z*8.0+noiseCd.r*10.20*(seeds.y*2.0-1.0)+noiseCd.b+(-seeds.x+seeds.y)*4.0, 8.0);
        float life = 1.0-max(0.0,abs(shiftY-seeds.x*.1)*(1.0-(seeds.x*1.0)) );
        life = 1.0-((shiftY*.001-seeds.x*.2) );
        
        pOff.y=shiftY*seeds.y;
        
        pOff.y=(pOff.y)+shiftY; 
        vec3 pos= pOff ;
        

        pos.xz=(noiseCd.rg*noiseCd.r)*(seeds.x)*emberSpread*(life*seeds.zy*(seeds.w*4.0-2.)) * 1.9;
        
        float yPush = ( life * (life*.5+.5))  * min(1.0,pos.y*.12) * 5.8;
        pos.xz += windForce * yPush * pos.y;
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
        
    }`,t}function rf(){let t=le();return t+=`        
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
    }`,t}function of(t,i=120){let n=le();return n+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,t>0&&(n+=`uniform vec3[${t}] lightPos;`),n+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${i.toFixed(3)}
    #define PROX_INV 1.0/${(i*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${t}
    
    
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

  `,t>1?n+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:t==1&&(n+=`
        vec3 lightVector = normalize(pos - lightPos[0]);
        float lightInf = length(pos - lightPos[0]) *.02;
        vAlpha*=(1.0-lightInf)*.8+.2;
    `),n+=`
        vScalar = pScalar ;
        //float pScale = pointScale.x * ((seeds.w+.75)*.5) * pScalar + 1.0;
        float pScale = pointScale.x * (seeds.w*.5+.5)*pScalar + 1.0;
        pScale *= step( .5, atlas.x )*.5+1.;
        //pScale = 10.0;
       
        gl_PointSize = pScale;
        
        pos+=positionOffset;
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,n}function af(){let t=le();return t+=`
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
    }`,t}function lf(){let t=le();return t+=` 
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
    float smokeDensity = 0.60;
        
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
        vec2 windDir = vec2( windInf*9.7, windInf * 8.4 );
        pos.xz += windDir;
        
        
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
        
        
    }`,t}function cf(){let t=le();return t+=`
        
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
    }`,t}function uf(t=!1){let i=!t,n=le();return n+=`
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
    `,i&&(n+=`
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
        `),n+=`  
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
    }`,n}function hf(){let t=le();return t+=`
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
    }`,t}var Zc={};Nn(Zc,{boxAntiAliasPass:()=>vf,chroAberPostProcess:()=>_f,compLayersPostProcess:()=>gf,crossAntiAliasPass:()=>xf,directionalBlurPass:()=>yf,finalOverlayHeavyShader:()=>Pf,finalOverlayShader:()=>Af,finalOverlaySlimShader:()=>Lf,glowPassPostProcess:()=>pf,iZoomPostProcess:()=>Sf,lKingPostProcess:()=>Mf,mixBlurShaderPass:()=>bf,motionBlurPostProcess:()=>wf,sFieldPostProcessFrag:()=>Tf,sFieldPostProcessVert:()=>Ef,textureStorePass:()=>mf,warpPostProcess:()=>Cf,worldPositionFrag:()=>ff,worldPositionVert:()=>df});function df(){let t=le();return t+=`
  varying vec3 pos;
  
  void main(){
    vec3 transformed = vec3( position );
      vec4 mvPosition = modelViewMatrix  * vec4( transformed, 1.0 );
    pos=((projectionMatrix * modelMatrix * vec4( transformed-vec3(0.0,0.0,-500.0), 1.0 )).xyz*.0001)*.5+.5;
    
    gl_Position = projectionMatrix * mvPosition;
  }`,t}function ff(){let t=le();return t=`#include <packing>
  `+t,t+=`
    uniform sampler2D diffuse;
    uniform sampler2D depth;
    uniform float camNear;
    uniform float camFar;
    varying vec3 pos;
    
    void main() {
      
      vec4 Cd=vec4( pos, 1.0 );
      gl_FragColor = Cd;
    }`,t}function pf(){let t=le();return t+=`
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
    }`,t}function mf(){let t=le();return t+=`
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
    }`,t}function gf(){let t="";return t+=`
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
    }`,t}function vf(){let t=le();return t+=`
    uniform sampler2D tDiffuse;
    uniform vec2 resUV;
    uniform float ratio;
    uniform vec3 gamma;
    varying vec2 vUv;

        #define AADIV 0.1

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*2.0;
            
            float dist = 1.0;
      vec2 baseUV=vUv;
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
    }`,t}function xf(){let t=le();return t+=`
    uniform sampler2D tDiffuse;
    uniform vec2 resUV;
    uniform float ratio;
    uniform vec3 gamma;
    varying vec2 vUv;

        #define AADIV 0.16666666666666666

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*2.0;
            
            float dist = 1.0;
      vec2 baseUV=vUv;
      const int runCount=4;
      vec2 runDir[runCount];
      runDir[0]=vec2(1.0, 1.0);
      runDir[1]=vec2(-1.0, 1.0);
      runDir[2]=vec2(-1.0, -1.0);
      runDir[3]=vec2(1.0, -1.0);
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
    }`,t}function yf(t,i,n,s){let r=le();return r+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;
  
        #define PI 3.14159265358979
        
        void main() {
          
          float dist = 2.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
            
          const int blurCount=${n};
          const int runCount=2;
          vec2 runDir[runCount];
          runDir[0]=vec2(${i[0]}.0, ${i[1]}.0);
          runDir[1]=vec2(-${i[0]}.0, -${i[1]}.0);
          vec2 curUV;
          vec4 curCd;
          vec4 blurCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 1.0 + float(b)*${s};
            fade = (1.0-float(b+1)/float(blurCount+2));
            //fade = 1.- (1.-fade)*(1.-fade);
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curUV = min( vec2(1.), max( vec2(0.), curUV ));
              curCd = texture2D(${t},curUV);
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
        }`,r}function bf(){let t=le();return t+=`
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
        }`,t}function wf(t,i){let n=le();return n+=`
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
      vec2 blurDir=normalize(blurDirCur);//+(vUv-.5)*2.0);`,i||(n+=`
        blurDir=normalize( blurDir + (noiseCd.gb-.5)*(dot(blurDir,noiseCd.gb)*.5+.5) );
      `),n+=`
      vec2 deltaDir=normalize(blurDirPrev);
      deltaDir.x+=sin((blurDir.x-deltaDir.x));
      deltaDir.y+=sin((blurDir.y-deltaDir.y));
      
      vec4 bloomAdd=vec4( directionalBlur(bloomCd.rgb, rDiffuse, vUv, blurDir, deltaDir, `+t.y+"*"+(i?"3.0":"5.0")+`*(1.5)*blurDist, .5)*(1.0+exposure*.4), 1.0);
      vec4 Cd= bloomAdd* ( 0.50+bloomCd)*exposure;//getTexture( rDiffuse ) + bloomAdd;//+ vec4( 1.0 ) * bloomCd + bloomAdd;
      //Cd.a=bloomAdd.a-bloomCd.a;
      
      Cd.a=1.0;
      gl_FragColor = Cd;
      
    }`,n}function _f(){let t=le();return t+=`
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
    }`,t}function Mf(){let t=le();return t+=`
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
    }`,t}function Sf(){let t=le();return t+=`
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
    }`,t}function Ef(){let t=le();return t+=`
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
    }`,t}function Tf(){let t=le();return t+=`
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
        }`,t}function Cf(){let t=le();return t+=`
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
      gl_FragColor = Cd;
    }`,t}function Pf(){let t=le();return t+=`
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
    }`,t}function Af(){let t=le();return t+=`
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
        }`,t}function Lf(){let t=le();return t+=`
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
            
            Cd.a=1.0;
            gl_FragColor = Cd;
        }`,t}var Kc={};Nn(Kc,{bgScreenFrag:()=>Df,bgScreenVert:()=>Rf,skyObjectFrag:()=>Bf,skyObjectVert:()=>If});function Rf(){let t=le();return t+=`
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
    }`,t}function Df(){let t=le();return t+=`
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
    }`,t}function If(){let t=le();return t+=`
    uniform float camFar;
    uniform vec2 resUV;
    
    varying vec2 vUv;
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    void main(){
        vUv=uv;
        vLocalPos=position;
        
        vec3 pos = position;
        vec4 modelViewPosition=projectionMatrix * viewMatrix * vec4(normalize(position)*camFar, 1.0);
        gl_Position = modelViewPosition;
        
        vWorldPos = modelViewPosition;
        
    }`,t}function Bf(){let t=le();return t+=`
     
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
        float t = time.x*.6;
        
        vec2 nUv = fract( vec2(vUv.x*2.0, vUv.y - t*.01) );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = fract( nUv+noiseCd.rg*(noiseCd.b-.5));
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
        for(int s=0; s<7; ++s){
            uvShift = mix(noiseCd.r, noiseCd.g, noiseCd.b)*15.0;
            curUV = baseUV+vec2(0.0,resUV.y*-(dist+uvShift) );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = fitDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.0 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep*curPerc;
            dist+=dist*dot(noiseCd.rgb, vec3(0.0,0.0,1.0));
        }
        reachDepth *= blend*stencil;
        
        vec3 normPos = normalize(vLocalPos);
        normPos.y = 1.0-min(1.0,(normPos.y)*2.0);
        normPos.y = normPos.y*normPos.y*normPos.y;
        depth = clamp(reachDepth+normPos.y, 0.0, 1.0);
        
        vec3 baseColor = fogColor+(sin(noiseCd.r*PI+t+uv.x)*.008)*max(0.0,1.0-depth);
        baseColor = (baseColor);//+Cd.rgb*.2);
        Cd.rgb = mix(Cd.rgb, baseColor, depth);
        
        gl_FragColor=Cd;
    }`,t}var Uf={animated:qc,core:Xc,objects:Yc,particles:Qc,rendering:Zc,scene:Kc};var V_="0.0.8",R0=!0,Of="pxlNav-coreCanvas";var Ff,kf,Jc=window.innerWidth,$c=window.innerHeight,Hf=class{constructor(i,n,s,r,o){this._active=!1,this.verbose=i,this.projectTitle=n,this.startingRoom=r,o.includes(r)||o.push(r),this.roomBootList=o,this.callbacks={},this.uriHashParms=this.findHashParms(),this.mobile=this.isMobile(),this.autoCam=this.getHashParm("autoCam",!1),this.loadPercent=0,this.folderDict={assetRoot:"assets/",guiRoot:"assets/GUI/",roomRoot:"assets/rooms/",vidRoot:"assets/screenContent/"},this.validEvents={booted:"Emitted after the engine has fully booted and is ready to be addressed.",shaderEditorVis:"Returns a [bool]; Emitted when the shader editor is toggled on or off.","roomChange-Start":"Emitted when the room change transition begins.","roomChange-Middle":"Emitted when the room change process occurs mid transition.","roomChange-End":"Returns a [bool]; Emitted when the room change transition ends.",fromRoom:"Returns a custom object; Emitted from your Room code you choose to emit during run time.",pxlNavEventNameHere:"Never emitted; You did some copy'pasta.","":"** NOTE : callbacks get an event object shaped -  **","":"** { 'type' : *eventName*, 'value' : *data* } **","":"",help:"Hello! I'm here to help you!",pingPong:"Send 'ping', Get 'pong'! - pxlNav.trigger('ping');"},this.validEventsKeys=Object.keys(this.validEvents),this.pxlTimer=new ro,this.pxlShaders=Uf,this.pxlCookie=new so(n,"/"),this.pxlCookie.hasCookie("forceMobile")&&(this.mobile=pxlCookie.parseCookie("forceMobile")),this.pxlQuality=new no(this.verbose,this.mobile,this.uriHashParms),this.pxlUtils=new Jr(this.folderDict.assetRoot,this.mobile),this.pxlFile=new Si(this.folderDict),this.pxlAudio=new mo(this.pxlTimer),this.pxlAutoCam=new po(this.autoCam,this.mobile),this.pxlAutoCam.active=!1,this.pxlUser=new oo,this.pxlEnv=new uo(this.startingRoom,s,this.verbose,this.mobile),this.pxlDevice=new ao(n,Of,this.mobile,this.autoCam),this.pxlCamera=new fo,this.pxlAnim=new lo(this.folderDict.assetRoot,this.pxlTimer),this.pxlGuiDraws=new ho(this.verbose,n,this.folderDict.assetRoot,this.folderDict.guiRoot),this.pxlQuality.setDependencies(this),this.pxlUtils.setDependencies(this),this.pxlFile.setDependencies(this),this.pxlAudio.setDependencies(this),this.pxlAutoCam.setDependencies(this),this.pxlEnv.setDependencies(this),this.pxlAnim.setDependencies(this),this.pxlDevice.setDependencies(this),this.pxlCamera.setDependencies(this),this.pxlGuiDraws.setDependencies(this),this.pxlGuiDraws.prepLoader(),this.pxlQuality.init()}set active(i=null){i==null&&(i=!this.pxlTimer.active),i==!0?(this.pxlTimer.play(),this.step(!0)):this.pxlTimer.stop()}get active(){return this.pxlTimer.active}start(){this.active=!0}stop(){this.active=!1}init(){this.pxlEnv.boot(),this.pxlQuality.startBenchmark(),this.buildGui().then(()=>{this.tickLoader(),this.bootEnvironment()}).then(()=>{this.tickLoader(),this.bootEngine()}).then(()=>{this.tickLoader(),this.pxlEnv.buildComposers(),this.cameraRunAnimatorMobile(this),this.pxlGuiDraws.stepLoader("postBoot"),this.pxlEnv.mapRender(),this.pxlDevice.setCursor("grab")}).catch(i=>{this.verbose>hn.NONE&&(console.error("Error in pxlNavCore.init(); Load level - ",i),console.error(i))}).finally(()=>{this.verbose>hn.ERROR&&console.log("pxlNavCore Promise Chain Completed; ",this.loadPercent),this.start()})}buildGui(){return new Promise((i,n)=>{this.pxlGuiDraws.booted(),this.pxlGuiDraws.pxlNavCanvas=document.getElementById(Of),Ff=window.innerWidth*this.pxlQuality.screenResPerc,this.pxlGuiDraws.pxlNavCanvas.width=window.innerWidth,kf=window.innerHeight*this.pxlQuality.screenResPerc,this.pxlGuiDraws.pxlNavCanvas.height=window.innerHeight,this.pxlDevice.canCursorLock&&(this.pxlGuiDraws.pxlNavCanvas.requestPointerLock=this.pxlGuiDraws.pxlNavCanvas.requestPointerLock||this.pxlGuiDraws.pxlNavCanvas.mozRequestPointerLock||this.pxlGuiDraws.pxlNavCanvas.webkitRequestPointerLock,document.requestPointerLock=this.pxlGuiDraws.pxlNavCanvas.exitPointerLock||this.pxlGuiDraws.pxlNavCanvas.mozExitPointerLock||this.pxlGuiDraws.pxlNavCanvas.webkitExitPointerLock),this.pxlGuiDraws.mapPrepPrompts(),i(!0)})}isMobile(){var i=!1;return i=/\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent),i=this.getHashParm("m",i),i}findHashParms(){var i={},n=window.location.hash;if(n.length>1){n=n.substring(1);for(var s=n.split("&"),r=0;r<s.length;r++){var o=s[r].split("=");i[o[0]]=o[1]}}return i}getHashParm(i,n){return Object.keys(this.uriHashParms).includes(i)?this.uriHashParms[i]:n}tickLoader(){this.loadPercent+=1}bootEngine(){return new Promise((i,n)=>{let s=[];for(let r=0;r<this.roomBootList.length;++r)s.push(this.pxlEnv.loadRoom(this.roomBootList[r]));Promise.all(s).then(()=>{i(!0)})})}bootEnvironment(){return new Promise((i,n)=>{this.pxlEnv.engine=new Ws({canvas:this.pxlGuiDraws.pxlNavCanvas,alpha:!0,antialias:!1,sortObjects:!0,depth:!0});var s={format:Ze,antialias:!1,sortObjects:!0,alpha:!0,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?tn:jt};this.pxlEnv.engine.autoClear=!0,this.pxlEnv.engine.debug.checkShaderErrors=!1,this.pxlEnv.engine.debug.checkShaderErrors=!0,this.verbose>=hn.INFO&&(this.pxlEnv.engine.extensions.get("WEBGL_depth_texture")?console.log("  ** WebGL Depth Texture support enabled **"):console.log("  ** WebGL Depth Texture NOT supported **"),console.log("-- Depth Composer pass currently not used, --"),console.log("  -- A future technology for Metal Asylum --"));let r=0,o="#000000";this.pxlEnv.engine.setClearColor(this.pxlEnv.fogColor,0),this.pxlEnv.engine.setSize(Ff/this.pxlQuality.screenResPerc,kf/this.pxlQuality.screenResPerc),this.pxlEnv.engine.setPixelRatio(1),this.pxlEnv.engine.outputEncoding=Zr,this.pxlEnv.engine.shadowMap.enabled=!0,this.pxlEnv.engine.shadowMap.type=gc,this.pxlEnv.scene=new sn,this.pxlEnv.scene.fog=this.pxlEnv.fog,this.pxlEnv.scene.background=new te(o),this.pxlEnv.scene.renderTarget=new et(Jc*this.pxlQuality.screenResPerc,$c*this.pxlQuality.screenResPerc,s),this.pxlEnv.scene.renderTarget.texture.format=Ze,this.pxlEnv.scene.renderTarget.texture.minFilter=Ge,this.pxlEnv.scene.renderTarget.texture.magFilter=Ge,this.pxlEnv.scene.renderTarget.texture.generateMipmaps=!1,this.pxlEnv.scene.renderTarget.depthBuffer=!0,this.pxlEnv.scene.renderTarget.depthTexture=new on,this.pxlEnv.scene.renderTarget.depthTexture.format=qt,this.pxlEnv.scene.renderTarget.depthTexture.type=fs,this.pxlEnv.scene.renderWorldPos=new et(Jc*this.pxlQuality.screenResPerc,$c*this.pxlQuality.screenResPerc,s),this.pxlEnv.scene.renderWorldPos.texture.format=Ze,this.pxlEnv.scene.renderWorldPos.texture.minFilter=st,this.pxlEnv.scene.renderWorldPos.texture.magFilter=st,this.pxlEnv.scene.renderWorldPos.texture.generateMipmaps=!1,s.alpha=!0,this.pxlEnv.scene.renderGlowTarget=new et(parseInt(Jc*this.pxlQuality.screenResPerc),parseInt($c*this.pxlQuality.screenResPerc),s),this.pxlEnv.scene.renderGlowTarget.texture.format=Ze,this.pxlEnv.scene.renderGlowTarget.texture.generateMipmaps=!1;var a=this.pxlGuiDraws.pxlNavCanvas.width/this.pxlGuiDraws.pxlNavCanvas.height;this.pxlCamera.camera=new nt(this.pxlEnv.pxlCamFOV,1,this.pxlEnv.camNear,this.pxlEnv.camFar),this.pxlAutoCam.camera=this.pxlCamera.camera,this.pxlCamera.cameraAimTarget=new re,this.pxlEnv.scene.add(this.pxlCamera.cameraAimTarget),this.pxlCamera.camera.target=this.pxlCamera.cameraAimTarget,this.pxlCamera.camera.layers.enable(1),this.pxlCamera.camera.layers.enable(2),this.pxlEnv.scene.add(this.pxlEnv.userAvatarGroup),this.pxlEnv.cloud3dTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"cloud3d_lowRes.jpg"),this.pxlEnv.cloud3dTexture.wrapS=Bt,this.pxlEnv.cloud3dTexture.wrapT=Bt,this.pxlEnv.softNoiseTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"SoftNoise_512.jpg"),this.pxlEnv.softNoiseTexture.wrapS=Bt,this.pxlEnv.softNoiseTexture.wrapT=Bt,this.pxlEnv.detailNoiseTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_UniformSmooth.jpg"),this.pxlEnv.detailNoiseTexture.wrapS=Bt,this.pxlEnv.detailNoiseTexture.wrapT=Bt;let l=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"ChromaticAberrationUV.png");l.minFilter=Ge,l.magFilter=Ge,this.pxlEnv.chroAberUVTexture=l,this.pxlEnv.blockAnimTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"blockPortalWarp_1k.jpg"),this.pxlEnv.blockAnimTexture.minFilter=Ge,this.pxlEnv.blockAnimTexture.magFilter=Ge,this.pxlEnv.mathFuncsTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"MathFuncs_512.jpg"),this.pxlEnv.mathFuncsTexture.minFilter=Ge,this.pxlEnv.mathFuncsTexture.magFilter=Ge;var c,u,d=(m=null)=>{var w={t:[0,0,0],r:[0,0,0],s:[1,1,1]};return m!=null&&(w[m[0]]=m[1]),w};u=d();let h="";if(this.mobile&&(h="_mobile"),R0){let m=this.folderDict.assetRoot+"EnvironmentAssets"+h+".fbx";this.pxlFile.loadSceneFBX(m,c,u,this.verbose,"EnvironmentAssets",[this.pxlEnv.scene])}this.pxlEnv.engine.shadowMap.enabled=!0,this.mobile?this.pxlEnv.engine.shadowMap.type=gc:this.pxlEnv.engine.shadowMap.type=vc;var p=new Fn(16777215,.05);this.pxlEnv.lightList.push(p),this.pxlEnv.scene.add(p);var f=new On(16777215,.1);f.position.set(1e3,550,1200),this.pxlEnv.lightList.push(f),this.pxlEnv.scene.add(f),i(!0)})}cameraRunAnimatorMobile(i){let n=!1,s=Object.keys(i.pxlEnv.geoLoadList);for(let r=0;r<s.length&&(n=i.pxlEnv.geoLoadList[s[r]]==0,n=n&&!i.pxlEnv.roomSceneList[r]?.booted,!n);++r);n?setTimeout(()=>{i.cameraRunAnimatorMobile(i)},300):i.initRoomList(i)}initRoomList(i){i.pxlGuiDraws.stepLoader("camAnim"),i.pxlCamera.setTransform(i.pxlEnv.camInitPos,i.pxlEnv.camInitLookAt),i.pxlCamera.updateCamera(),i.pxlEnv.buildRoomEnvironments(),i.monitorRoomLoad(i)}monitorRoomLoad(i,n=0){let s=!1,r=Object.keys(i.pxlEnv.geoLoadList);for(let o=0;o<r.length&&(s=i.pxlEnv.geoLoadList[r[o]]==0,s=s&&!i.pxlEnv.roomSceneList[o]?.booted,!s);++o);s?setTimeout(()=>{i.monitorRoomLoad(i)},300):(i.pxlQuality.mapAutoQualityUpdate(1,!0),i.runPrepDrawScenes(0,!0,[]))}runPrepDrawScenes(i=0,n=!0,s=[]){if(i++,s.length>0){if(n){n=!1;let r=s[s.length-1];this.pxlCamera.warpToRoom(r)}if(this.pxlCamera.colliderPrevObjHit=null,this.pxlEnv.mapRender(!1),i%10==0){let r=s.pop();n=!0,this.pxlGuiDraws.stepLoader(r)}requestAnimationFrame(()=>{this.runPrepDrawScenes(i,n,s)})}else this.pxlGuiDraws.stepLoader("Post Room Prep"),this.pxlNavPrepSettings()}pxlNavPrepSettings(){this.pxlCamera.warpToRoom(this.pxlEnv.bootRoom,!0),this.pxlQuality.endBenchmark(),this.pxlGuiDraws.stepLoader("Nav Settings"),this.startPxlNav()}startPxlNav(){this.pxlTimer.init(),this.pxlTimer.play(),this.pxlGuiDraws.applyCookies(),this.pxlGuiDraws.pxlNavCanvas&&this.pxlGuiDraws.pxlNavCanvas.focus();let i=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];i.active=!0,i.startTime=this.pxlTimer.msRunner.x,this.pxlEnv.roomPostGuiCalls.forEach(s=>{s.postGuiEvent()}),this.pxlEnv.roomPostGuiCalls=[],this.pxlAutoCam.enabled&&this.pxlGuiDraws.guiToggleVisibility(!1),this.pxlAutoCam.init(),this.pxlDevice.resizeRenderResolution(),this.pxlEnv.mapRender(),this.pxlQuality.setDependentSettings(),this.pxlGuiDraws.stepLoader("Starting...");let n=this;setTimeout(()=>{n.pxlEnv.postBoot(),n.pxlGuiDraws.mapPrompt&&n.pxlGuiDraws.promptFader(n.pxlGuiDraws.mapPrompt,!1,null,!0),n.pxlGuiDraws.mapPromptBG&&n.pxlGuiDraws.promptFader(n.pxlGuiDraws.mapPromptBG,!1,null,!1),n.emit("booted",!0)},200)}step(i=!0){this.pxlTimer.active&&(this.pxlTimer.step(),requestAnimationFrame(()=>{this.step()}))}bootTimer(){this.pxlTimer.init(),this.pxlTimer.play()}stopTimer(){this.pxlTimer.stop()}pauseTimer(){this.pxlTimer.pause()}prepPromptFader(i,n=!1){let s=i;typeof s=="string"&&(s=document.getElementById(s),!s)||(s.classList.add("fader"),s.classList.add(n?"visOn":"visOff"),s.style.display=n?"inline-block":"none")}promptFader(i,n,s=null,r=!1){typeof i=="string"&&(i=document.getElementById(i),!i)||(i.classList.value.indexOf("fader")<0&&i.classList.add("fader"),n?(i.style.display="inline-block",setTimeout(()=>{i.classList.contains("visOff")&&(i.classList.remove("visOff"),i.classList.add("visOn"),s!=null&&(i.setAttribute("fadeOut",clockTime+s*1e3),fadeOutList.push(i)))},50)):(i.classList.remove("visOn"),i.classList.add("visOff"),r?["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"].forEach(a=>{i.addEventListener(a,()=>{let l=i.parentNode;l&&l.removeChild(i)})}):setTimeout(()=>{i.classList.contains("visOff")&&(i.style.display="none")},1e3)))}addRooms(i){for(let n=0;n<i.length;++n)this.pxlEnv.roomNameList.includes(i[n])||this.booted||this.roomBootList.push(i[n])}setBootRoom(i,n){console.log(i,n),this.pxlEnv.bootRoom=i,this.pxlEnv.bootLocation=n}trigger(i,n=null,s=null){switch(i=i.toLowerCase(),i){case"warptoroom":this.pxlCamera.warpToRoom(n,!0,s);break;case"ping":this.emit("pingPong","pong");break;case"roommessage":let r=s.type,o=s.value;n==null&&(n=this.pxlEnv.currentRoom),this.pxlEnv.sendRoomMessage(n,r,o);default:break}}subscribe(i,n){let s=!1;this.validEventsKeys.includes(i)?i=="pxlNavEventNameHere"||i=="help"||i=="test"?(console.warn("Warning : `pxlNav.subscribe( 'pxlNavEventNameHere', ... )` was used; need some help?"),console.log("Valid Event Types : "),this.validEventsKeys.forEach(r=>{console.log("  - ",r," : ",this.validEvents[r])})):this.callbacks[i]=n:console.warn("Warning : `pxlNav.subscribe( '"+i+"', ... )` was used; use 'help' for a list of valid events.")}emit(i,n,s=null){if(this.callbacks[i]){let r={type:i,value:n};s!==null&&(r.status=s),this.callbacks[i](r)}}};export{Hf as pxlNav,V_ as pxlNavVersion};
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
