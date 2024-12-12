Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t});Math.sign===void 0&&(Math.sign=function(t){return t<0?-1:t>0?1:+t});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(t){if(t==null)throw new TypeError("Cannot convert undefined or null to object");let e=Object(t);for(let n=1;n<arguments.length;n++){let i=arguments[n];if(i!=null)for(let r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e});var Eh="118";var Th=0,Hc=1,Ah=2;var wu=1,Lh=2,xr=3,oi=0,se=1,$e=2,Mu=1;var Ln=0,_r=1,kc=2,Vc=3,Wc=4,Rh=5,Ei=100,Ch=101,Ph=102,jc=103,qc=104,Dh=200,Ih=201,Nh=202,Oh=203,Su=204,Eu=205,Fh=206,Bh=207,Uh=208,zh=209,Gh=210,Hh=0,kh=1,Vh=2,La=3,Wh=4,jh=5,qh=6,Xh=7,Gs=0,Yh=1,Zh=2,Di=0,Jh=1,$h=2,Qh=3,Kh=4,tf=5,bc=300,wc=301,Mc=302,Tu=303,Sc=304,oo=306,Ec=307,cn=1e3,ye=1001,is=1002,Zt=1003,Yn=1004;var Ra=1005;var ue=1006,Au=1007;var Hs=1008;var so=1009,ef=1010,nf=1011,rs=1012,rf=1013,es=1014,Tn=1015,os=1016,of=1017,sf=1018,af=1019,br=1020,cf=1021,qn=1022,Be=1023,lf=1024,uf=1025,hf=Be,Ii=1026,Er=1027,ff=1028,df=1029,pf=1030,mf=1031,gf=1032,yf=1033,Xc=33776,Yc=33777,Zc=33778,Jc=33779,$c=35840,Qc=35841,Kc=35842,tl=35843,xf=36196,el=37492,nl=37496,vf=37808,_f=37809,bf=37810,wf=37811,Mf=37812,Sf=37813,Ef=37814,Tf=37815,Af=37816,Lf=37817,Rf=37818,Cf=37819,Pf=37820,Df=37821,If=36492,Nf=37840,Of=37841,Ff=37842,Bf=37843,Uf=37844,zf=37845,Gf=37846,Hf=37847,kf=37848,Vf=37849,Wf=37850,jf=37851,qf=37852,Xf=37853,Yf=2200,Zf=2201,Jf=2202,ss=2300,ns=2301,Js=2302,Oi=2400,Ai=2401,as=2402,Tc=2500,Lu=2501,$f=0;var xe=3e3,ks=3001,Ac=3007,Lc=3002,Qf=3003,Ru=3004,Cu=3005,Pu=3006,Kf=3200,td=3201,nr=0,ed=1;var $s=7680;var nd=519,Vs=35044,Tr=35048;function mn(){}Object.assign(mn.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t)}}});var ae=[];for(let t=0;t<256;t++)ae[t]=(t<16?"0":"")+t.toString(16);var Mt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ae[t&255]+ae[t>>8&255]+ae[t>>16&255]+ae[t>>24&255]+"-"+ae[e&255]+ae[e>>8&255]+"-"+ae[e>>16&15|64]+ae[e>>24&255]+"-"+ae[n&63|128]+ae[n>>8&255]+"-"+ae[n>>16&255]+ae[n>>24&255]+ae[i&255]+ae[i>>8&255]+ae[i>>16&255]+ae[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*Mt.DEG2RAD},radToDeg:function(t){return t*Mt.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let o=Math.cos,s=Math.sin,a=o(n/2),c=s(n/2),l=o((e+i)/2),h=s((e+i)/2),u=o((e-i)/2),d=s((e-i)/2),f=o((i-e)/2),p=s((i-e)/2);switch(r){case"XYX":t.set(a*h,c*u,c*d,a*l);break;case"YZY":t.set(c*d,a*h,c*u,a*l);break;case"ZXZ":t.set(c*u,c*d,a*h,a*l);break;case"XZX":t.set(a*h,c*p,c*f,a*l);break;case"YXY":t.set(c*f,a*h,c*p,a*l);break;case"ZYZ":t.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function z(t=0,e=0){this.x=t,this.y=e}Object.defineProperties(z.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}});Object.assign(z.prototype,{isVector2:!0,set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this},clampLength:function(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return e===void 0&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.x,t[e+1]=this.y,t},fromBufferAttribute:function(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this},rotateAround:function(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function he(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(he.prototype,{isMatrix3:!0,set:function(t,e,n,i,r,o,s,a,c){let l=this.elements;return l[0]=t,l[1]=i,l[2]=s,l[3]=e,l[4]=r,l[5]=a,l[6]=n,l[7]=o,l[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this},extractBasis:function(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},setFromMatrix4:function(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this},multiply:function(t){return this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],s=n[3],a=n[6],c=n[1],l=n[4],h=n[7],u=n[2],d=n[5],f=n[8],p=i[0],x=i[3],y=i[6],m=i[1],g=i[4],_=i[7],v=i[2],w=i[5],T=i[8];return r[0]=o*p+s*m+a*v,r[3]=o*x+s*g+a*w,r[6]=o*y+s*_+a*T,r[1]=c*p+l*m+h*v,r[4]=c*x+l*g+h*w,r[7]=c*y+l*_+h*T,r[2]=u*p+d*m+f*v,r[5]=u*x+d*g+f*w,r[8]=u*y+d*_+f*T,this},multiplyScalar:function(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},determinant:function(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],s=t[5],a=t[6],c=t[7],l=t[8];return e*o*l-e*s*c-n*r*l+n*s*a+i*r*c-i*o*a},getInverse:function(t,e){e!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");let n=t.elements,i=this.elements,r=n[0],o=n[1],s=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=d*c-l*u,p=l*h-d*a,x=u*a-c*h,y=r*f+o*p+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/y;return i[0]=f*m,i[1]=(s*u-d*o)*m,i[2]=(l*o-s*c)*m,i[3]=p*m,i[4]=(d*r-s*h)*m,i[5]=(s*a-l*r)*m,i[6]=x*m,i[7]=(o*h-u*r)*m,i[8]=(c*r-o*a)*m,this},transpose:function(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},transposeIntoArray:function(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this},setUvTransform:function(t,e,n,i,r,o,s){let a=Math.cos(r),c=Math.sin(r);this.set(n*a,n*c,-n*(a*o+c*s)+o+t,-i*c,i*a,-i*(-c*o+a*s)+s+e,0,0,1)},scale:function(t,e){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this},rotate:function(t){let e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],o=i[3],s=i[6],a=i[1],c=i[4],l=i[7];return i[0]=e*r+n*a,i[3]=e*o+n*c,i[6]=e*s+n*l,i[1]=-n*r+e*a,i[4]=-n*o+e*c,i[7]=-n*s+e*l,this},translate:function(t,e){let n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this},equals:function(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0},fromArray:function(t,e){e===void 0&&(e=0);for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){t===void 0&&(t=[]),e===void 0&&(e=0);let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}});var ci,Zn={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),ci.width=t.width,ci.height=t.height;let n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}},id=0;function Ft(t,e,n,i,r,o,s,a,c,l){Object.defineProperty(this,"id",{value:id++}),this.uuid=Mt.generateUUID(),this.name="",this.image=t!==void 0?t:Ft.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=e!==void 0?e:Ft.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:ye,this.wrapT=i!==void 0?i:ye,this.magFilter=r!==void 0?r:ue,this.minFilter=o!==void 0?o:Hs,this.anisotropy=c!==void 0?c:1,this.format=s!==void 0?s:Be,this.internalFormat=null,this.type=a!==void 0?a:so,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:xe,this.version=0,this.onUpdate=null}Ft.DEFAULT_IMAGE=void 0;Ft.DEFAULT_MAPPING=bc;Ft.prototype=Object.assign(Object.create(mn.prototype),{constructor:Ft,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Mt.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)r.push(Zn.getDataURL(i[o]))}else r=Zn.getDataURL(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cn:t.x=t.x-Math.floor(t.x);break;case ye:t.x=t.x<0?0:1;break;case is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cn:t.y=t.y-Math.floor(t.y);break;case ye:t.y=t.y<0?0:1;break;case is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(Ft.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Nt(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}Object.defineProperties(Nt.prototype,{width:{get:function(){return this.z},set:function(t){this.z=t}},height:{get:function(){return this.w},set:function(t){this.w=t}}});Object.assign(Nt.prototype,{isVector4:!0,set:function(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setW:function(t){return this.w=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this},add:function(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this},sub:function(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},applyMatrix4:function(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this},divideScalar:function(t){return this.multiplyScalar(1/t)},setAxisAngleFromQuaternion:function(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this},setAxisAngleFromRotationMatrix:function(t){let e,n,i,r,a=t.elements,c=a[0],l=a[4],h=a[8],u=a[1],d=a[5],f=a[9],p=a[2],x=a[6],y=a[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(f-x)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(c+1)/2,_=(d+1)/2,v=(y+1)/2,w=(l+u)/4,T=(h+p)/4,A=(f+x)/4;return g>_&&g>v?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=w/n,r=T/n):_>v?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=A/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=T/r,i=A/r),this.set(n,i,r,e),this}let m=Math.sqrt((x-f)*(x-f)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(x-f)/m,this.y=(h-p)/m,this.z=(u-l)/m,this.w=Math.acos((c+d+y-1)/2),this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this},clampLength:function(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this},lerpVectors:function(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},fromArray:function(t,e){return e===void 0&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t},fromBufferAttribute:function(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Te(t,e,n){this.width=t,this.height=e,this.scissor=new Nt(0,0,t,e),this.scissorTest=!1,this.viewport=new Nt(0,0,t,e),n=n||{},this.texture=new Ft(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ue,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Te.prototype=Object.assign(Object.create(mn.prototype),{constructor:Te,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function il(t,e,n){Te.call(this,t,e,n),this.samples=4}il.prototype=Object.assign(Object.create(Te.prototype),{constructor:il,isWebGLMultisampleRenderTarget:!0,copy:function(t){return Te.prototype.copy.call(this,t),this.samples=t.samples,this}});function re(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}Object.assign(re,{slerp:function(t,e,n,i){return n.copy(t).slerp(e,i)},slerpFlat:function(t,e,n,i,r,o,s){let a=n[i+0],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o+0],d=r[o+1],f=r[o+2],p=r[o+3];if(h!==p||a!==u||c!==d||l!==f){let x=1-s,y=a*u+c*d+l*f+h*p,m=y>=0?1:-1,g=1-y*y;if(g>Number.EPSILON){let v=Math.sqrt(g),w=Math.atan2(v,y*m);x=Math.sin(x*w)/v,s=Math.sin(s*w)/v}let _=s*m;if(a=a*x+u*_,c=c*x+d*_,l=l*x+f*_,h=h*x+p*_,x===1-s){let v=1/Math.sqrt(a*a+c*c+l*l+h*h);a*=v,c*=v,l*=v,h*=v}}t[e]=a,t[e+1]=c,t[e+2]=l,t[e+3]=h},multiplyQuaternionsFlat:function(t,e,n,i,r,o){let s=n[i],a=n[i+1],c=n[i+2],l=n[i+3],h=r[o],u=r[o+1],d=r[o+2],f=r[o+3];return t[e]=s*f+l*h+a*d-c*u,t[e+1]=a*f+l*u+c*h-s*d,t[e+2]=c*f+l*d+s*u-a*h,t[e+3]=l*f-s*h-a*u-c*d,t}});Object.defineProperties(re.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(t){this._w=t,this._onChangeCallback()}}});Object.assign(re.prototype,{isQuaternion:!0,set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this},setFromEuler:function(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=t._x,i=t._y,r=t._z,o=t.order,s=Math.cos,a=Math.sin,c=s(n/2),l=s(i/2),h=s(r/2),u=a(n/2),d=a(i/2),f=a(r/2);switch(o){case"XYZ":this._x=u*l*h+c*d*f,this._y=c*d*h-u*l*f,this._z=c*l*f+u*d*h,this._w=c*l*h-u*d*f;break;case"YXZ":this._x=u*l*h+c*d*f,this._y=c*d*h-u*l*f,this._z=c*l*f-u*d*h,this._w=c*l*h+u*d*f;break;case"ZXY":this._x=u*l*h-c*d*f,this._y=c*d*h+u*l*f,this._z=c*l*f+u*d*h,this._w=c*l*h-u*d*f;break;case"ZYX":this._x=u*l*h-c*d*f,this._y=c*d*h+u*l*f,this._z=c*l*f-u*d*h,this._w=c*l*h+u*d*f;break;case"YZX":this._x=u*l*h+c*d*f,this._y=c*d*h+u*l*f,this._z=c*l*f-u*d*h,this._w=c*l*h-u*d*f;break;case"XZY":this._x=u*l*h-c*d*f,this._y=c*d*h-u*l*f,this._z=c*l*f+u*d*h,this._w=c*l*h+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this},setFromRotationMatrix:function(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],s=e[5],a=e[9],c=e[2],l=e[6],h=e[10],u=n+s+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(l-a)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>s&&n>h){let d=2*Math.sqrt(1+n-s-h);this._w=(l-a)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(s>h){let d=2*Math.sqrt(1+s-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(a+l)/d}else{let d=2*Math.sqrt(1+h-n-s);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(a+l)/d,this._z=.25*d}return this._onChangeCallback(),this},setFromUnitVectors:function(t,e){let i=t.dot(e)+1;return i<1e-6?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()},angleTo:function(t){return 2*Math.acos(Math.abs(Mt.clamp(this.dot(t),-1,1)))},rotateTowards:function(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this},multiply:function(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,s=e._x,a=e._y,c=e._z,l=e._w;return this._x=n*l+o*s+i*c-r*a,this._y=i*l+o*a+r*s-n*c,this._z=r*l+o*c+n*a-i*s,this._w=o*l-n*s-i*a-r*c,this._onChangeCallback(),this},slerp:function(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,s=o*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let a=1-s*s;if(a<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(a),l=Math.atan2(c,s),h=Math.sin((1-e)*l)/c,u=Math.sin(e*l)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,e){return e===void 0&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},fromBufferAttribute:function(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}});var Qs=new b,rl=new re;function b(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}Object.assign(b.prototype,{isVector3:!0,set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},sub:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyEuler:function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(rl.setFromEuler(t))},applyAxisAngle:function(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))},applyMatrix3:function(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this},applyNormalMatrix:function(t){return this.applyMatrix3(t).normalize()},applyMatrix4:function(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this},applyQuaternion:function(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,s=t.z,a=t.w,c=a*e+o*i-s*n,l=a*n+s*e-r*i,h=a*i+r*n-o*e,u=-r*e-o*n-s*i;return this.x=c*a+u*-r+l*-s-h*-o,this.y=l*a+u*-o+h*-r-c*-s,this.z=h*a+u*-s+c*-o-l*-r,this},project:function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},unproject:function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},transformDirection:function(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this},clampLength:function(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},lerpVectors:function(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this},cross:function(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)},crossVectors:function(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,s=e.y,a=e.z;return this.x=i*a-r*s,this.y=r*o-n*a,this.z=n*s-i*o,this},projectOnVector:function(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)},projectOnPlane:function(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)},reflect:function(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))},angleTo:function(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mt.clamp(n,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},setFromSphericalCoords:function(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this},setFromCylindrical:function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},setFromCylindricalCoords:function(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this},setFromMatrixPosition:function(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this},setFromMatrixScale:function(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this},setFromMatrixColumn:function(t,e){return this.fromArray(t.elements,e*4)},setFromMatrix3Column:function(t,e){return this.fromArray(t.elements,e*3)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,e){return e===void 0&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},fromBufferAttribute:function(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});var li=new b,De=new At,rd=new b(0,0,0),od=new b(1,1,1),xn=new b,go=new b,_e=new b;function At(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(At.prototype,{isMatrix4:!0,set:function(t,e,n,i,r,o,s,a,c,l,h,u,d,f,p,x){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=r,y[5]=o,y[9]=s,y[13]=a,y[2]=c,y[6]=l,y[10]=h,y[14]=u,y[3]=d,y[7]=f,y[11]=p,y[15]=x,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new At().fromArray(this.elements)},copy:function(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this},copyPosition:function(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this},extractBasis:function(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this},extractRotation:function(t){let e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromEuler:function(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),s=Math.sin(n),a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*l,d=o*h,f=s*l,p=s*h;e[0]=a*l,e[4]=-a*h,e[8]=c,e[1]=d+f*c,e[5]=u-p*c,e[9]=-s*a,e[2]=p-u*c,e[6]=f+d*c,e[10]=o*a}else if(t.order==="YXZ"){let u=a*l,d=a*h,f=c*l,p=c*h;e[0]=u+p*s,e[4]=f*s-d,e[8]=o*c,e[1]=o*h,e[5]=o*l,e[9]=-s,e[2]=d*s-f,e[6]=p+u*s,e[10]=o*a}else if(t.order==="ZXY"){let u=a*l,d=a*h,f=c*l,p=c*h;e[0]=u-p*s,e[4]=-o*h,e[8]=f+d*s,e[1]=d+f*s,e[5]=o*l,e[9]=p-u*s,e[2]=-o*c,e[6]=s,e[10]=o*a}else if(t.order==="ZYX"){let u=o*l,d=o*h,f=s*l,p=s*h;e[0]=a*l,e[4]=f*c-d,e[8]=u*c+p,e[1]=a*h,e[5]=p*c+u,e[9]=d*c-f,e[2]=-c,e[6]=s*a,e[10]=o*a}else if(t.order==="YZX"){let u=o*a,d=o*c,f=s*a,p=s*c;e[0]=a*l,e[4]=p-u*h,e[8]=f*h+d,e[1]=h,e[5]=o*l,e[9]=-s*l,e[2]=-c*l,e[6]=d*h+f,e[10]=u-p*h}else if(t.order==="XZY"){let u=o*a,d=o*c,f=s*a,p=s*c;e[0]=a*l,e[4]=-h,e[8]=c*l,e[1]=u*h+p,e[5]=o*l,e[9]=d*h-f,e[2]=f*h-d,e[6]=s*l,e[10]=p*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromQuaternion:function(t){return this.compose(rd,t,od)},lookAt:function(t,e,n){let i=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),xn.crossVectors(n,_e),xn.lengthSq()===0&&(Math.abs(n.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),xn.crossVectors(n,_e)),xn.normalize(),go.crossVectors(_e,xn),i[0]=xn.x,i[4]=go.x,i[8]=_e.x,i[1]=xn.y,i[5]=go.y,i[9]=_e.y,i[2]=xn.z,i[6]=go.z,i[10]=_e.z,this},multiply:function(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],s=n[4],a=n[8],c=n[12],l=n[1],h=n[5],u=n[9],d=n[13],f=n[2],p=n[6],x=n[10],y=n[14],m=n[3],g=n[7],_=n[11],v=n[15],w=i[0],T=i[4],A=i[8],B=i[12],L=i[1],q=i[5],N=i[9],O=i[13],I=i[2],P=i[6],R=i[10],U=i[14],W=i[3],$=i[7],it=i[11],ct=i[15];return r[0]=o*w+s*L+a*I+c*W,r[4]=o*T+s*q+a*P+c*$,r[8]=o*A+s*N+a*R+c*it,r[12]=o*B+s*O+a*U+c*ct,r[1]=l*w+h*L+u*I+d*W,r[5]=l*T+h*q+u*P+d*$,r[9]=l*A+h*N+u*R+d*it,r[13]=l*B+h*O+u*U+d*ct,r[2]=f*w+p*L+x*I+y*W,r[6]=f*T+p*q+x*P+y*$,r[10]=f*A+p*N+x*R+y*it,r[14]=f*B+p*O+x*U+y*ct,r[3]=m*w+g*L+_*I+v*W,r[7]=m*T+g*q+_*P+v*$,r[11]=m*A+g*N+_*R+v*it,r[15]=m*B+g*O+_*U+v*ct,this},multiplyScalar:function(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},determinant:function(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],s=t[5],a=t[9],c=t[13],l=t[2],h=t[6],u=t[10],d=t[14],f=t[3],p=t[7],x=t[11],y=t[15];return f*(+r*a*h-i*c*h-r*s*u+n*c*u+i*s*d-n*a*d)+p*(+e*a*d-e*c*u+r*o*u-i*o*d+i*c*l-r*a*l)+x*(+e*c*h-e*s*d-r*o*h+n*o*d+r*s*l-n*c*l)+y*(-i*s*l-e*a*h+e*s*u+i*o*h-n*o*u+n*a*l)},transpose:function(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this},setPosition:function(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this},getInverse:function(t,e){e!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");let n=this.elements,i=t.elements,r=i[0],o=i[1],s=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],f=i[9],p=i[10],x=i[11],y=i[12],m=i[13],g=i[14],_=i[15],v=f*g*u-m*p*u+m*h*x-l*g*x-f*h*_+l*p*_,w=y*p*u-d*g*u-y*h*x+c*g*x+d*h*_-c*p*_,T=d*m*u-y*f*u+y*l*x-c*m*x-d*l*_+c*f*_,A=y*f*h-d*m*h-y*l*p+c*m*p+d*l*g-c*f*g,B=r*v+o*w+s*T+a*A;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/B;return n[0]=v*L,n[1]=(m*p*a-f*g*a-m*s*x+o*g*x+f*s*_-o*p*_)*L,n[2]=(l*g*a-m*h*a+m*s*u-o*g*u-l*s*_+o*h*_)*L,n[3]=(f*h*a-l*p*a-f*s*u+o*p*u+l*s*x-o*h*x)*L,n[4]=w*L,n[5]=(d*g*a-y*p*a+y*s*x-r*g*x-d*s*_+r*p*_)*L,n[6]=(y*h*a-c*g*a-y*s*u+r*g*u+c*s*_-r*h*_)*L,n[7]=(c*p*a-d*h*a+d*s*u-r*p*u-c*s*x+r*h*x)*L,n[8]=T*L,n[9]=(y*f*a-d*m*a-y*o*x+r*m*x+d*o*_-r*f*_)*L,n[10]=(c*m*a-y*l*a+y*o*u-r*m*u-c*o*_+r*l*_)*L,n[11]=(d*l*a-c*f*a-d*o*u+r*f*u+c*o*x-r*l*x)*L,n[12]=A*L,n[13]=(d*m*s-y*f*s+y*o*p-r*m*p-d*o*g+r*f*g)*L,n[14]=(y*l*s-c*m*s-y*o*h+r*m*h+c*o*g-r*l*g)*L,n[15]=(c*f*s-d*l*s+d*o*h-r*f*h-c*o*p+r*l*p)*L,this},scale:function(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this},getMaxScaleOnAxis:function(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))},makeTranslation:function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},makeRotationX:function(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this},makeRotationY:function(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this},makeRotationZ:function(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,s=t.y,a=t.z,c=r*o,l=r*s;return this.set(c*o+n,c*s-i*a,c*a+i*s,0,c*s+i*a,l*s+n,l*a-i*o,0,c*a-i*s,l*a+i*o,r*a*a+n,0,0,0,0,1),this},makeScale:function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this},compose:function(t,e,n){let i=this.elements,r=e._x,o=e._y,s=e._z,a=e._w,c=r+r,l=o+o,h=s+s,u=r*c,d=r*l,f=r*h,p=o*l,x=o*h,y=s*h,m=a*c,g=a*l,_=a*h,v=n.x,w=n.y,T=n.z;return i[0]=(1-(p+y))*v,i[1]=(d+_)*v,i[2]=(f-g)*v,i[3]=0,i[4]=(d-_)*w,i[5]=(1-(u+y))*w,i[6]=(x+m)*w,i[7]=0,i[8]=(f+g)*T,i[9]=(x-m)*T,i[10]=(1-(u+p))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this},decompose:function(t,e,n){let i=this.elements,r=li.set(i[0],i[1],i[2]).length(),o=li.set(i[4],i[5],i[6]).length(),s=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],De.copy(this);let c=1/r,l=1/o,h=1/s;return De.elements[0]*=c,De.elements[1]*=c,De.elements[2]*=c,De.elements[4]*=l,De.elements[5]*=l,De.elements[6]*=l,De.elements[8]*=h,De.elements[9]*=h,De.elements[10]*=h,e.setFromRotationMatrix(De),n.x=r,n.y=o,n.z=s,this},makePerspective:function(t,e,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let s=this.elements,a=2*r/(e-t),c=2*r/(n-i),l=(e+t)/(e-t),h=(n+i)/(n-i),u=-(o+r)/(o-r),d=-2*o*r/(o-r);return s[0]=a,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=d,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makeOrthographic:function(t,e,n,i,r,o){let s=this.elements,a=1/(e-t),c=1/(n-i),l=1/(o-r),h=(e+t)*a,u=(n+i)*c,d=(o+r)*l;return s[0]=2*a,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-d,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0},fromArray:function(t,e){e===void 0&&(e=0);for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){t===void 0&&(t=[]),e===void 0&&(e=0);let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}});var ol=new At,sl=new re;function si(t=0,e=0,n=0,i=si.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}si.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];si.DefaultOrder="XYZ";Object.defineProperties(si.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()}}});Object.assign(si.prototype,{isEuler:!0,set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},setFromRotationMatrix:function(t,e,n){let i=Mt.clamp,r=t.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e=e||this._order,e){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)},setFromVector3:function(t,e){return this.set(t.x,t.y,t.z,e||this._order)},reorder:function(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}});function Rc(){this.mask=1}Object.assign(Rc.prototype,{set:function(t){this.mask=1<<t|0},enable:function(t){this.mask|=1<<t|0},enableAll:function(){this.mask=-1},toggle:function(t){this.mask^=1<<t|0},disable:function(t){this.mask&=~(1<<t|0)},disableAll:function(){this.mask=0},test:function(t){return(this.mask&t.mask)!==0}});var sd=0,al=new b,ui=new re,en=new At,yo=new b,cr=new b,ad=new b,cd=new re,cl=new b(1,0,0),ll=new b(0,1,0),ul=new b(0,0,1),ld={type:"added"},ud={type:"removed"};function et(){Object.defineProperty(this,"id",{value:sd++}),this.uuid=Mt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DefaultUp.clone();let t=new b,e=new si,n=new re,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new he}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}et.DefaultUp=new b(0,1,0);et.DefaultMatrixAutoUpdate=!0;et.prototype=Object.assign(Object.create(mn.prototype),{constructor:et,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this},rotateOnWorldAxis:function(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this},rotateX:function(t){return this.rotateOnAxis(cl,t)},rotateY:function(t){return this.rotateOnAxis(ll,t)},rotateZ:function(t){return this.rotateOnAxis(ul,t)},translateOnAxis:function(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(cl,t)},translateY:function(t){return this.translateOnAxis(ll,t)},translateZ:function(t){return this.translateOnAxis(ul,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(en.getInverse(this.matrixWorld))},lookAt:function(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(cr,yo,this.up):en.lookAt(yo,cr,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(en),this.quaternion.premultiply(ui.inverse()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ud)),this},attach:function(t){return this.updateWorldMatrix(!0,!1),en.getInverse(this.matrixWorld),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new b),this.updateMatrixWorld(!0),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new re),this.updateMatrixWorld(!0),this.matrixWorld.decompose(cr,t,ad),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new b),this.updateMatrixWorld(!0),this.matrixWorld.decompose(cr,cd,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new b),this.updateMatrixWorld(!0);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(s,a){return s[a.uuid]===void 0&&(s[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let a=s.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let h=a[c];r(t.shapes,h)}else r(t.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let a=0,c=this.material.length;a<c;a++)s.push(r(t.materials,this.material[a]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(e){let s=o(t.geometries),a=o(t.materials),c=o(t.textures),l=o(t.images),h=o(t.shapes);s.length>0&&(n.geometries=s),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h)}return n.object=i,n;function o(s){let a=[];for(let c in s){let l=s[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e){if(e===void 0&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}});function cs(){et.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}cs.prototype=Object.assign(Object.create(et.prototype),{constructor:cs,isScene:!0,copy:function(t,e){return et.prototype.copy.call(this,t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this},toJSON:function(t){let e=et.prototype.toJSON.call(this,t);return this.background!==null&&(e.object.background=this.background.toJSON(t)),this.environment!==null&&(e.object.environment=this.environment.toJSON(t)),this.fog!==null&&(e.object.fog=this.fog.toJSON()),e},dispose:function(){this.dispatchEvent({type:"dispose"})}});var nn=[new b,new b,new b,new b,new b,new b,new b,new b],lr=new b,Ks=new Qe,hi=new b,fi=new b,di=new b,vn=new b,_n=new b,Bn=new b,ur=new b,xo=new b,vo=new b,Un=new b;function Qe(t,e){this.min=t!==void 0?t:new b(1/0,1/0,1/0),this.max=e!==void 0?e:new b(-1/0,-1/0,-1/0)}Object.assign(Qe.prototype,{isBox3:!0,set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromArray:function(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let a=0,c=t.length;a<c;a+=3){let l=t[a],h=t[a+1],u=t[a+2];l<e&&(e=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>o&&(o=h),u>s&&(s=u)}return this.min.set(e,n,i),this.max.set(r,o,s),this},setFromBufferAttribute:function(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let a=0,c=t.count;a<c;a++){let l=t.getX(a),h=t.getY(a),u=t.getZ(a);l<e&&(e=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>o&&(o=h),u>s&&(s=u)}return this.min.set(e,n,i),this.max.set(r,o,s),this},setFromPoints:function(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(t,e){let n=lr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this},setFromObject:function(t){return this.makeEmpty(),this.expandByObject(t)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new b),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new b),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},expandByObject:function(t){t.updateWorldMatrix(!1,!1);let e=t.geometry;e!==void 0&&(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox),Ks.applyMatrix4(t.matrixWorld),this.union(Ks));let n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},getParameter:function(t,e){return e===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),e=new b),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},intersectsSphere:function(t){return this.clampPoint(t.center,lr),lr.distanceToSquared(t.center)<=t.radius*t.radius},intersectsPlane:function(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant},intersectsTriangle:function(t){if(this.isEmpty())return!1;this.getCenter(ur),xo.subVectors(this.max,ur),hi.subVectors(t.a,ur),fi.subVectors(t.b,ur),di.subVectors(t.c,ur),vn.subVectors(fi,hi),_n.subVectors(di,fi),Bn.subVectors(hi,di);let e=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Bn.z,Bn.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Bn.z,0,-Bn.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Bn.y,Bn.x,0];return!ta(e,hi,fi,di,xo)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,hi,fi,di,xo))?!1:(vo.crossVectors(vn,_n),e=[vo.x,vo.y,vo.z],ta(e,hi,fi,di,xo))},clampPoint:function(t,e){return e===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),e=new b),e.copy(t).clamp(this.min,this.max)},distanceToPoint:function(t){return lr.copy(t).clamp(this.min,this.max).sub(t).length()},getBoundingSphere:function(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(lr).length()*.5,t},intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},applyMatrix4:function(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});function ta(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Un.fromArray(t,o);let a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=n.dot(Un),h=i.dot(Un);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hd=new Qe;function gn(t,e){this.center=t!==void 0?t:new b,this.radius=e!==void 0?e:-1}Object.assign(gn.prototype,{set:function(t,e){return this.center.copy(t),this.radius=e,this},setFromPoints:function(t,e){let n=this.center;e!==void 0?n.copy(e):hd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(t){return t.distanceTo(this.center)-this.radius},intersectsSphere:function(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e},intersectsBox:function(t){return t.intersectsSphere(this)},intersectsPlane:function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},clampPoint:function(t,e){let n=this.center.distanceToSquared(t);return e===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),e=new b),e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e},getBoundingBox:function(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Qe),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)},applyMatrix4:function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},translate:function(t){return this.center.add(t),this},equals:function(t){return t.center.equals(this.center)&&t.radius===this.radius}});var rn=new b,ea=new b,_o=new b,bn=new b,na=new b,bo=new b,ia=new b;function ir(t,e){this.origin=t!==void 0?t:new b,this.direction=e!==void 0?e:new b(0,0,-1)}Object.assign(ir.prototype,{set:function(t,e){return this.origin.copy(t),this.direction.copy(e),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,e){return e===void 0&&(console.warn("THREE.Ray: .at() target is now required"),e=new b),e.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:function(t){return this.origin.copy(this.at(t,rn)),this},closestPointToPoint:function(t,e){e===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),e=new b),e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.direction).multiplyScalar(e).add(this.origin),rn.distanceToSquared(t))},distanceSqToSegment:function(t,e,n,i){ea.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),s=bn.dot(this.direction),a=-bn.dot(_o),c=bn.lengthSq(),l=Math.abs(1-o*o),h,u,d,f;if(l>0)if(h=o*a-s,u=o*s-a,f=r*l,h>=0)if(u>=-f)if(u<=f){let p=1/l;h*=p,u*=p,d=h*(h+o*u+2*s)+u*(o*h+u+2*a)+c}else u=r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*a)+c;else u=-r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*a)+c;else u<=-f?(h=Math.max(0,-(-o*r+s)),u=h>0?-r:Math.min(Math.max(-r,-a),r),d=-h*h+u*(u+2*a)+c):u<=f?(h=0,u=Math.min(Math.max(-r,-a),r),d=u*(u+2*a)+c):(h=Math.max(0,-(o*r+s)),u=h>0?r:Math.min(Math.max(-r,-a),r),d=-h*h+u*(u+2*a)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*a)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(_o).multiplyScalar(u).add(ea),d},intersectSphere:function(t,e){rn.subVectors(t.center,this.origin);let n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),s=n-o,a=n+o;return s<0&&a<0?null:s<0?this.at(a,e):this.at(s,e)},intersectsSphere:function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},distanceToPlane:function(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null},intersectPlane:function(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)},intersectsPlane:function(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0},intersectBox:function(t,e){let n,i,r,o,s,a,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),l>=0?(r=(t.min.y-u.y)*l,o=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,o=(t.min.y-u.y)*l),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(s=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h):(s=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h),n>a||s>i)||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)},intersectsBox:function(t){return this.intersectBox(t,rn)!==null},intersectTriangle:function(t,e,n,i,r){na.subVectors(e,t),bo.subVectors(n,t),ia.crossVectors(na,bo);let o=this.direction.dot(ia),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;bn.subVectors(this.origin,t);let a=s*this.direction.dot(bo.crossVectors(bn,bo));if(a<0)return null;let c=s*this.direction.dot(na.cross(bn));if(c<0||a+c>o)return null;let l=-s*bn.dot(ia);return l<0?null:this.at(l/o,r)},applyMatrix4:function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}});var ra=new b,fd=new b,dd=new he;function Ve(t,e){this.normal=t!==void 0?t:new b(1,0,0),this.constant=e!==void 0?e:0}Object.assign(Ve.prototype,{isPlane:!0,set:function(t,e){return this.normal.copy(t),this.constant=e,this},setComponents:function(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this},setFromCoplanarPoints:function(t,e,n){let i=ra.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,e){return e===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),e=new b),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},intersectLine:function(t,e){e===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),e=new b);let n=t.delta(ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):void 0;let r=-(t.start.dot(this.normal)+this.constant)/i;if(!(r<0||r>1))return e.copy(n).multiplyScalar(r).add(t.start)},intersectsLine:function(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0},intersectsBox:function(t){return t.intersectsPlane(this)},intersectsSphere:function(t){return t.intersectsPlane(this)},coplanarPoint:function(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new b),t.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(t,e){let n=e||dd.getNormalMatrix(t),i=this.coplanarPoint(ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this},translate:function(t){return this.constant-=t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant}});var Oe=new b,sn=new b,oa=new b,on=new b,pi=new b,mi=new b,hl=new b,sa=new b,aa=new b,ca=new b;function ce(t,e,n){this.a=t!==void 0?t:new b,this.b=e!==void 0?e:new b,this.c=n!==void 0?n:new b}Object.assign(ce,{getNormal:function(t,e,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new b),i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)},getBarycoord:function(t,e,n,i,r){Oe.subVectors(i,e),sn.subVectors(n,e),oa.subVectors(t,e);let o=Oe.dot(Oe),s=Oe.dot(sn),a=Oe.dot(oa),c=sn.dot(sn),l=sn.dot(oa),h=o*c-s*s;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new b),h===0)return r.set(-2,-1,-1);let u=1/h,d=(c*a-s*l)*u,f=(o*l-s*a)*u;return r.set(1-d-f,f,d)},containsPoint:function(t,e,n,i){return ce.getBarycoord(t,e,n,i,on),on.x>=0&&on.y>=0&&on.x+on.y<=1},getUV:function(t,e,n,i,r,o,s,a){return this.getBarycoord(t,e,n,i,on),a.set(0,0),a.addScaledVector(r,on.x),a.addScaledVector(o,on.y),a.addScaledVector(s,on.z),a},isFrontFacing:function(t,e,n,i){return Oe.subVectors(n,e),sn.subVectors(t,e),Oe.cross(sn).dot(i)<0}});Object.assign(ce.prototype,{set:function(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this},setFromPointsAndIndices:function(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},getArea:function(){return Oe.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Oe.cross(sn).length()*.5},getMidpoint:function(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new b),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(t){return ce.getNormal(this.a,this.b,this.c,t)},getPlane:function(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new Ve),t.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(t,e){return ce.getBarycoord(t,this.a,this.b,this.c,e)},getUV:function(t,e,n,i,r){return ce.getUV(t,this.a,this.b,this.c,e,n,i,r)},containsPoint:function(t){return ce.containsPoint(t,this.a,this.b,this.c)},isFrontFacing:function(t){return ce.isFrontFacing(this.a,this.b,this.c,t)},intersectsBox:function(t){return t.intersectsTriangle(this)},closestPointToPoint:function(t,e){e===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),e=new b);let n=this.a,i=this.b,r=this.c,o,s;pi.subVectors(i,n),mi.subVectors(r,n),sa.subVectors(t,n);let a=pi.dot(sa),c=mi.dot(sa);if(a<=0&&c<=0)return e.copy(n);aa.subVectors(t,i);let l=pi.dot(aa),h=mi.dot(aa);if(l>=0&&h<=l)return e.copy(i);let u=a*h-l*c;if(u<=0&&a>=0&&l<=0)return o=a/(a-l),e.copy(n).addScaledVector(pi,o);ca.subVectors(t,r);let d=pi.dot(ca),f=mi.dot(ca);if(f>=0&&d<=f)return e.copy(r);let p=d*c-a*f;if(p<=0&&c>=0&&f<=0)return s=c/(c-f),e.copy(n).addScaledVector(mi,s);let x=l*f-d*h;if(x<=0&&h-l>=0&&d-f>=0)return hl.subVectors(r,i),s=(h-l)/(h-l+(d-f)),e.copy(i).addScaledVector(hl,s);let y=1/(x+p+u);return o=p*y,s=u*y,e.copy(n).addScaledVector(pi,o).addScaledVector(mi,s)},equals:function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}});var Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ie={h:0,s:0,l:0},wo={h:0,s:0,l:0};function rt(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}function la(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ua(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ha(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}Object.assign(rt.prototype,{isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this},setRGB:function(t,e,n){return this.r=t,this.g=e,this.b=n,this},setHSL:function(t,e,n){if(t=Mt.euclideanModulo(t,1),e=Mt.clamp(e,0,1),n=Mt.clamp(n,0,1),e===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=la(r,i,t+1/3),this.g=la(r,i,t),this.b=la(r,i,t-1/3)}return this},setStyle:function(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){let i,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){let s=parseFloat(i[1])/360,a=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[5]),this.setHSL(s,a,c)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(t)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this},setColorName:function(t){let e=Du[t];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,e){return e===void 0&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},copyLinearToGamma:function(t,e){e===void 0&&(e=2);let n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},convertGammaToLinear:function(t){return this.copyGammaToLinear(this,t),this},convertLinearToGamma:function(t){return this.copyLinearToGamma(this,t),this},copySRGBToLinear:function(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this},copyLinearToSRGB:function(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});let e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),o=Math.min(e,n,i),s,a,c=(o+r)/2;if(o===r)s=0,a=0;else{let l=r-o;switch(a=c<=.5?l/(r+o):l/(2-r-o),r){case e:s=(n-i)/l+(n<i?6:0);break;case n:s=(i-e)/l+2;break;case i:s=(e-n)/l+4;break}s/=6}return t.h=s,t.s=a,t.l=c,t},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(t,e,n){return this.getHSL(Ie),Ie.h+=t,Ie.s+=e,Ie.l+=n,this.setHSL(Ie.h,Ie.s,Ie.l),this},add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this},lerpHSL:function(t,e){this.getHSL(Ie),t.getHSL(wo);let n=Mt.lerp(Ie.h,wo.h,e),i=Mt.lerp(Ie.s,wo.s,e),r=Mt.lerp(Ie.l,wo.l,e);return this.setHSL(n,i,r),this},equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,e){return e===void 0&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this},toArray:function(t,e){return t===void 0&&(t=[]),e===void 0&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t},fromBufferAttribute:function(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});rt.NAMES=Du;function ls(t,e,n,i,r,o){this.a=t,this.b=e,this.c=n,this.normal=i&&i.isVector3?i:new b,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new rt,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=o!==void 0?o:0}Object.assign(ls.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(let e=0,n=t.vertexNormals.length;e<n;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(let e=0,n=t.vertexColors.length;e<n;e++)this.vertexColors[e]=t.vertexColors[e].clone();return this}});var pd=0;function gt(){Object.defineProperty(this,"id",{value:pd++}),this.uuid=Mt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=_r,this.side=oi,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Su,this.blendDst=Eu,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}gt.prototype=Object.assign(Object.create(mn.prototype),{constructor:gt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Mu;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let o=[];for(let s in r){let a=r[s];delete a.metadata,o.push(a)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(gt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function ze(t){gt.call(this),this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}ze.prototype=Object.create(gt.prototype);ze.prototype.constructor=ze;ze.prototype.isMeshBasicMaterial=!0;ze.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var Bt=new b,Mo=new z;function mt(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Vs,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(mt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(mt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new rt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this},copyVector2sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new z),e[n++]=o.x,e[n++]=o.y}return this},copyVector3sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new b),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this},copyVector4sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Nt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Bt.fromBufferAttribute(this,e),Bt.applyMatrix3(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Bt.x=this.getX(e),Bt.y=this.getY(e),Bt.z=this.getZ(e),Bt.applyMatrix4(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Bt.x=this.getX(e),Bt.y=this.getY(e),Bt.z=this.getZ(e),Bt.applyNormalMatrix(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Bt.x=this.getX(e),Bt.y=this.getY(e),Bt.z=this.getZ(e),Bt.transformDirection(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Ca(t,e,n){mt.call(this,new Int8Array(t),e,n)}Ca.prototype=Object.create(mt.prototype);Ca.prototype.constructor=Ca;function Pa(t,e,n){mt.call(this,new Uint8Array(t),e,n)}Pa.prototype=Object.create(mt.prototype);Pa.prototype.constructor=Pa;function Da(t,e,n){mt.call(this,new Uint8ClampedArray(t),e,n)}Da.prototype=Object.create(mt.prototype);Da.prototype.constructor=Da;function Ia(t,e,n){mt.call(this,new Int16Array(t),e,n)}Ia.prototype=Object.create(mt.prototype);Ia.prototype.constructor=Ia;function Ar(t,e,n){mt.call(this,new Uint16Array(t),e,n)}Ar.prototype=Object.create(mt.prototype);Ar.prototype.constructor=Ar;function Na(t,e,n){mt.call(this,new Int32Array(t),e,n)}Na.prototype=Object.create(mt.prototype);Na.prototype.constructor=Na;function Lr(t,e,n){mt.call(this,new Uint32Array(t),e,n)}Lr.prototype=Object.create(mt.prototype);Lr.prototype.constructor=Lr;function tt(t,e,n){mt.call(this,new Float32Array(t),e,n)}tt.prototype=Object.create(mt.prototype);tt.prototype.constructor=tt;function Oa(t,e,n){mt.call(this,new Float64Array(t),e,n)}Oa.prototype=Object.create(mt.prototype);Oa.prototype.constructor=Oa;function Iu(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Iu.prototype,{computeGroups:function(t){let e=[],n,i,r,o=t.faces;for(i=0;i<o.length;i++){let s=o[i];s.materialIndex!==r&&(r=s.materialIndex,n!==void 0&&(n.count=i*3-n.start,e.push(n)),n={start:i*3,materialIndex:r})}n!==void 0&&(n.count=i*3-n.start,e.push(n)),this.groups=e},fromGeometry:function(t){let e=t.faces,n=t.vertices,i=t.faceVertexUvs,r=i[0]&&i[0].length>0,o=i[1]&&i[1].length>0,s=t.morphTargets,a=s.length,c;if(a>0){c=[];for(let y=0;y<a;y++)c[y]={name:s[y].name,data:[]};this.morphTargets.position=c}let l=t.morphNormals,h=l.length,u;if(h>0){u=[];for(let y=0;y<h;y++)u[y]={name:l[y].name,data:[]};this.morphTargets.normal=u}let d=t.skinIndices,f=t.skinWeights,p=d.length===n.length,x=f.length===n.length;n.length>0&&e.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let y=0;y<e.length;y++){let m=e[y];this.vertices.push(n[m.a],n[m.b],n[m.c]);let g=m.vertexNormals;if(g.length===3)this.normals.push(g[0],g[1],g[2]);else{let v=m.normal;this.normals.push(v,v,v)}let _=m.vertexColors;if(_.length===3)this.colors.push(_[0],_[1],_[2]);else{let v=m.color;this.colors.push(v,v,v)}if(r===!0){let v=i[0][y];v!==void 0?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",y),this.uvs.push(new z,new z,new z))}if(o===!0){let v=i[1][y];v!==void 0?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",y),this.uvs2.push(new z,new z,new z))}for(let v=0;v<a;v++){let w=s[v].vertices;c[v].data.push(w[m.a],w[m.b],w[m.c])}for(let v=0;v<h;v++){let w=l[v].vertexNormals[y];u[v].data.push(w.a,w.b,w.c)}p&&this.skinIndices.push(d[m.a],d[m.b],d[m.c]),x&&this.skinWeights.push(f[m.a],f[m.b],f[m.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this}});function Nu(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}var md=1,Ge=new At,fa=new et,gi=new b,be=new Qe,hr=new Qe,oe=new b;function ot(){Object.defineProperty(this,"id",{value:md+=2}),this.uuid=Mt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}ot.prototype=Object.assign(Object.create(mn.prototype),{constructor:ot,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){Array.isArray(t)?this.index=new(Nu(t)>65535?Lr:Ar)(t,1):this.index=t},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this},rotateY:function(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this},rotateZ:function(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this},translate:function(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this},scale:function(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this},lookAt:function(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this},setFromObject:function(t){let e=t.geometry;if(t.isPoints||t.isLine){let n=new tt(e.vertices.length*3,3),i=new tt(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){let r=new tt(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){let n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){let n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){let n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){let n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){let n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new Iu().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){let e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new mt(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){let n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new mt(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){let n=new Float32Array(t.colors.length*3);this.setAttribute("color",new mt(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){let n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new mt(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){let n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new mt(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(let n in t.morphTargets){let i=[],r=t.morphTargets[n];for(let o=0,s=r.length;o<s;o++){let a=r[o],c=new tt(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){let n=new tt(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){let n=new tt(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];be.setFromBufferAttribute(r),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t){let n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let s=e[r];hr.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(be.min,hr.min),be.expandByPoint(oe),oe.addVectors(be.max,hr.max),be.expandByPoint(oe)):(be.expandByPoint(hr.min),be.expandByPoint(hr.max))}be.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(oe));if(e)for(let r=0,o=e.length;r<o;r++){let s=e[r],a=this.morphTargetsRelative;for(let c=0,l=s.count;c<l;c++)oe.fromBufferAttribute(s,c),a&&(gi.fromBufferAttribute(t,c),oe.add(gi)),i=Math.max(i,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new b,r=new b,o=new b,s=new b,a=new b,c=new b,l=new b,h=new b;if(t)for(let u=0,d=t.count;u<d;u+=3){let f=t.getX(u+0),p=t.getX(u+1),x=t.getX(u+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,x),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),s.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),s.add(l),a.add(l),c.add(l),n.setXYZ(f,s.x,s.y,s.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(t.attributes[i]===void 0)continue;let o=n[i].array,s=t.attributes[i],a=s.array,c=s.itemSize*e,l=Math.min(a.length,o.length-c);for(let h=0,u=c;h<l;h++,u++)o[u]=a[h]}return this},normalizeNormals:function(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)},toNonIndexed:function(){function t(s,a){let c=s.array,l=s.itemSize,h=s.normalized,u=new c.constructor(a.length*l),d=0,f=0;for(let p=0,x=a.length;p<x;p++){d=a[p]*l;for(let y=0;y<l;y++)u[f++]=c[d++]}return new mt(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let e=new ot,n=this.index.array,i=this.attributes;for(let s in i){let a=i[s],c=t(a,n);e.setAttribute(s,c)}let r=this.morphAttributes;for(let s in r){let a=[],c=r[s];for(let l=0,h=c.length;l<h;l++){let u=c[l],d=t(u,n);a.push(d)}e.morphAttributes[s]=a}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,a=o.length;s<a;s++){let c=o[s];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=d.toJSON(t.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t},clone:function(){return new ot().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=t.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,l=o.length;c<l;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var fl=new At,zn=new ir,da=new gn,wn=new b,Mn=new b,Sn=new b,pa=new b,ma=new b,ga=new b,So=new b,Eo=new b,To=new b,Li=new z,Ri=new z,Ci=new z,wr=new b,Ao=new b;function zt(t,e){et.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new ot,this.material=e!==void 0?e:new ze,this.updateMorphTargets()}zt.prototype=Object.assign(Object.create(et.prototype),{constructor:zt,isMesh:!0,copy:function(t){return et.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),t.ray.intersectsSphere(da)===!1)||(fl.getInverse(r),zn.copy(t.ray).applyMatrix4(fl),n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let s=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,x=d.length;p<x;p++){let y=d[p],m=i[y.materialIndex],g=Math.max(y.start,f.start),_=Math.min(y.start+y.count,f.start+f.count);for(let v=g,w=_;v<w;v+=3){let T=s.getX(v),A=s.getX(v+1),B=s.getX(v+2);o=Lo(this,m,t,zn,a,c,l,h,u,T,A,B),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let p=Math.max(0,f.start),x=Math.min(s.count,f.start+f.count);for(let y=p,m=x;y<m;y+=3){let g=s.getX(y),_=s.getX(y+1),v=s.getX(y+2);o=Lo(this,i,t,zn,a,c,l,h,u,g,_,v),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,x=d.length;p<x;p++){let y=d[p],m=i[y.materialIndex],g=Math.max(y.start,f.start),_=Math.min(y.start+y.count,f.start+f.count);for(let v=g,w=_;v<w;v+=3){let T=v,A=v+1,B=v+2;o=Lo(this,m,t,zn,a,c,l,h,u,T,A,B),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let y=p,m=x;y<m;y+=3){let g=y,_=y+1,v=y+2;o=Lo(this,i,t,zn,a,c,l,h,u,g,_,v),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}}else if(n.isGeometry){let s=Array.isArray(i),a=n.vertices,c=n.faces,l,h=n.faceVertexUvs[0];h.length>0&&(l=h);for(let u=0,d=c.length;u<d;u++){let f=c[u],p=s?i[f.materialIndex]:i;if(p===void 0)continue;let x=a[f.a],y=a[f.b],m=a[f.c];if(o=Ou(this,p,t,zn,x,y,m,wr),o){if(l&&l[u]){let g=l[u];Li.copy(g[0]),Ri.copy(g[1]),Ci.copy(g[2]),o.uv=ce.getUV(wr,x,y,m,Li,Ri,Ci,new z)}o.face=f,o.faceIndex=u,e.push(o)}}}}});function Ou(t,e,n,i,r,o,s,a){let c;if(e.side===se?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side!==$e,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Ao);return l<n.near||l>n.far?null:{distance:l,point:Ao.clone(),object:t}}function Lo(t,e,n,i,r,o,s,a,c,l,h,u){wn.fromBufferAttribute(r,l),Mn.fromBufferAttribute(r,h),Sn.fromBufferAttribute(r,u);let d=t.morphTargetInfluences;if(e.morphTargets&&o&&d){So.set(0,0,0),Eo.set(0,0,0),To.set(0,0,0);for(let p=0,x=o.length;p<x;p++){let y=d[p],m=o[p];y!==0&&(pa.fromBufferAttribute(m,l),ma.fromBufferAttribute(m,h),ga.fromBufferAttribute(m,u),s?(So.addScaledVector(pa,y),Eo.addScaledVector(ma,y),To.addScaledVector(ga,y)):(So.addScaledVector(pa.sub(wn),y),Eo.addScaledVector(ma.sub(Mn),y),To.addScaledVector(ga.sub(Sn),y)))}wn.add(So),Mn.add(Eo),Sn.add(To)}t.isSkinnedMesh&&(t.boneTransform(l,wn),t.boneTransform(h,Mn),t.boneTransform(u,Sn));let f=Ou(t,e,n,i,wn,Mn,Sn,wr);if(f){a&&(Li.fromBufferAttribute(a,l),Ri.fromBufferAttribute(a,h),Ci.fromBufferAttribute(a,u),f.uv=ce.getUV(wr,wn,Mn,Sn,Li,Ri,Ci,new z)),c&&(Li.fromBufferAttribute(c,l),Ri.fromBufferAttribute(c,h),Ci.fromBufferAttribute(c,u),f.uv2=ce.getUV(wr,wn,Mn,Sn,Li,Ri,Ci,new z));let p=new ls(l,h,u);ce.getNormal(wn,Mn,Sn,p.normal),f.face=p}return f}var gd=0,He=new At,ya=new et,Ro=new b;function vt(){Object.defineProperty(this,"id",{value:gd+=2}),this.uuid=Mt.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}vt.prototype=Object.assign(Object.create(mn.prototype),{constructor:vt,isGeometry:!0,applyMatrix4:function(t){let e=new he().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let o=0,s=r.vertexNormals.length;o<s;o++)r.vertexNormals[o].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return He.makeRotationX(t),this.applyMatrix4(He),this},rotateY:function(t){return He.makeRotationY(t),this.applyMatrix4(He),this},rotateZ:function(t){return He.makeRotationZ(t),this.applyMatrix4(He),this},translate:function(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this},scale:function(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this},lookAt:function(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this},fromBufferGeometry:function(t){let e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let r=i.position,o=i.normal,s=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<r.count;u++)e.vertices.push(new b().fromBufferAttribute(r,u)),s!==void 0&&e.colors.push(new rt().fromBufferAttribute(s,u));function l(u,d,f,p){let x=s===void 0?[]:[e.colors[u].clone(),e.colors[d].clone(),e.colors[f].clone()],y=o===void 0?[]:[new b().fromBufferAttribute(o,u),new b().fromBufferAttribute(o,d),new b().fromBufferAttribute(o,f)],m=new ls(u,d,f,y,x,p);e.faces.push(m),a!==void 0&&e.faceVertexUvs[0].push([new z().fromBufferAttribute(a,u),new z().fromBufferAttribute(a,d),new z().fromBufferAttribute(a,f)]),c!==void 0&&e.faceVertexUvs[1].push([new z().fromBufferAttribute(c,u),new z().fromBufferAttribute(c,d),new z().fromBufferAttribute(c,f)])}let h=t.groups;if(h.length>0)for(let u=0;u<h.length;u++){let d=h[u],f=d.start,p=d.count;for(let x=f,y=f+p;x<y;x+=3)n!==void 0?l(n.getX(x),n.getX(x+1),n.getX(x+2),d.materialIndex):l(x,x+1,x+2,d.materialIndex)}else if(n!==void 0)for(let u=0;u<n.count;u+=3)l(n.getX(u),n.getX(u+1),n.getX(u+2));else for(let u=0;u<r.count;u+=3)l(u,u+1,u+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this},normalize:function(){this.computeBoundingSphere();let t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new At;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){let t=new b,e=new b;for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],o=this.vertices[r.a],s=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,s),e.subVectors(o,s),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){t===void 0&&(t=!0);let e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new b;if(t){let n=new b,i=new b;for(let r=0,o=this.faces.length;r<o;r++){let s=this.faces[r],a=this.vertices[s.a],c=this.vertices[s.b],l=this.vertices[s.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[s.a].add(n),e[s.b].add(n),e[s.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],o=r.vertexNormals;o.length===3?(o[0].copy(e[r.a]),o[1].copy(e[r.b]),o[2].copy(e[r.c])):(o[0]=e[r.a].clone(),o[1]=e[r.b].clone(),o[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){let n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){let i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,o=i.vertexNormals.length;r<o;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}let t=new vt;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];let r=this.morphNormals[e].faceNormals,o=this.morphNormals[e].vertexNormals;for(let s=0,a=this.faces.length;s<a;s++){let c=new b,l={a:new b,b:new b,c:new b};r.push(c),o.push(l)}}let i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,o=this.faces.length;r<o;r++){let s=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(s.normal),c.a.copy(s.vertexNormals[0]),c.b.copy(s.vertexNormals[1]),c.c.copy(s.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){let i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Qe),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i,r=this.vertices.length,o=this.vertices,s=t.vertices,a=this.faces,c=t.faces,l=this.colors,h=t.colors;n===void 0&&(n=0),e!==void 0&&(i=new he().getNormalMatrix(e));for(let u=0,d=s.length;u<d;u++){let p=s[u].clone();e!==void 0&&p.applyMatrix4(e),o.push(p)}for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone());for(let u=0,d=c.length;u<d;u++){let f=c[u],p,x,y,m=f.vertexNormals,g=f.vertexColors;p=new ls(f.a+r,f.b+r,f.c+r),p.normal.copy(f.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let _=0,v=m.length;_<v;_++)x=m[_].clone(),i!==void 0&&x.applyMatrix3(i).normalize(),p.vertexNormals.push(x);p.color.copy(f.color);for(let _=0,v=g.length;_<v;_++)y=g[_],p.vertexColors.push(y.clone());p.materialIndex=f.materialIndex+n,a.push(p)}for(let u=0,d=t.faceVertexUvs.length;u<d;u++){let f=t.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,x=f.length;p<x;p++){let y=f[p],m=[];for(let g=0,_=y.length;g<_;g++)m.push(y[g].clone());this.faceVertexUvs[u].push(m)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(){let t={},e=[],n=[],r=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){let l=this.vertices[a],h=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);t[h]===void 0?(t[h]=a,e.push(this.vertices[a]),n[a]=e.length-1):n[a]=n[t[h]]}let o=[];for(let a=0,c=this.faces.length;a<c;a++){let l=this.faces[a];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];let h=[l.a,l.b,l.c];for(let u=0;u<3;u++)if(h[u]===h[(u+1)%3]){o.push(a);break}}for(let a=o.length-1;a>=0;a--){let c=o[a];this.faces.splice(c,1);for(let l=0,h=this.faceVertexUvs.length;l<h;l++)this.faceVertexUvs[l].splice(c,1)}let s=this.vertices.length-e.length;return this.vertices=e,s},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){let i=t[e];this.vertices.push(new b(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){let t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);let i=this.faceVertexUvs[0],r=this.faceVertexUvs[1],o,s;i&&i.length===e&&(o=[]),r&&r.length===e&&(s=[]);for(let a=0;a<e;a++){let c=t[a]._id;o&&o.push(i[c]),s&&s.push(r[c])}o&&(this.faceVertexUvs[0]=o),s&&(this.faceVertexUvs[1]=s)},toJSON:function(){let t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){let f=this.parameters;for(let p in f)f[p]!==void 0&&(t[p]=f[p]);return t}let e=[];for(let f=0;f<this.vertices.length;f++){let p=this.vertices[f];e.push(p.x,p.y,p.z)}let n=[],i=[],r={},o=[],s={},a=[],c={};for(let f=0;f<this.faces.length;f++){let p=this.faces[f],x=!0,y=!1,m=this.faceVertexUvs[0][f]!==void 0,g=p.normal.length()>0,_=p.vertexNormals.length>0,v=p.color.r!==1||p.color.g!==1||p.color.b!==1,w=p.vertexColors.length>0,T=0;if(T=l(T,0,0),T=l(T,1,x),T=l(T,2,y),T=l(T,3,m),T=l(T,4,g),T=l(T,5,_),T=l(T,6,v),T=l(T,7,w),n.push(T),n.push(p.a,p.b,p.c),n.push(p.materialIndex),m){let A=this.faceVertexUvs[0][f];n.push(d(A[0]),d(A[1]),d(A[2]))}if(g&&n.push(h(p.normal)),_){let A=p.vertexNormals;n.push(h(A[0]),h(A[1]),h(A[2]))}if(v&&n.push(u(p.color)),w){let A=p.vertexColors;n.push(u(A[0]),u(A[1]),u(A[2]))}}function l(f,p,x){return x?f|1<<p:f&~(1<<p)}function h(f){let p=f.x.toString()+f.y.toString()+f.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(f.x,f.y,f.z)),r[p]}function u(f){let p=f.r.toString()+f.g.toString()+f.b.toString();return s[p]!==void 0||(s[p]=o.length,o.push(f.getHex())),s[p]}function d(f){let p=f.x.toString()+f.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(f.x,f.y)),c[p]}return t.data={},t.data.vertices=e,t.data.normals=i,o.length>0&&(t.data.colors=o),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new vt().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;let e=t.vertices;for(let u=0,d=e.length;u<d;u++)this.vertices.push(e[u].clone());let n=t.colors;for(let u=0,d=n.length;u<d;u++)this.colors.push(n[u].clone());let i=t.faces;for(let u=0,d=i.length;u<d;u++)this.faces.push(i[u].clone());for(let u=0,d=t.faceVertexUvs.length;u<d;u++){let f=t.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,x=f.length;p<x;p++){let y=f[p],m=[];for(let g=0,_=y.length;g<_;g++){let v=y[g];m.push(v.clone())}this.faceVertexUvs[u].push(m)}}let r=t.morphTargets;for(let u=0,d=r.length;u<d;u++){let f={};if(f.name=r[u].name,r[u].vertices!==void 0){f.vertices=[];for(let p=0,x=r[u].vertices.length;p<x;p++)f.vertices.push(r[u].vertices[p].clone())}if(r[u].normals!==void 0){f.normals=[];for(let p=0,x=r[u].normals.length;p<x;p++)f.normals.push(r[u].normals[p].clone())}this.morphTargets.push(f)}let o=t.morphNormals;for(let u=0,d=o.length;u<d;u++){let f={};if(o[u].vertexNormals!==void 0){f.vertexNormals=[];for(let p=0,x=o[u].vertexNormals.length;p<x;p++){let y=o[u].vertexNormals[p],m={};m.a=y.a.clone(),m.b=y.b.clone(),m.c=y.c.clone(),f.vertexNormals.push(m)}}if(o[u].faceNormals!==void 0){f.faceNormals=[];for(let p=0,x=o[u].faceNormals.length;p<x;p++)f.faceNormals.push(o[u].faceNormals[p].clone())}this.morphNormals.push(f)}let s=t.skinWeights;for(let u=0,d=s.length;u<d;u++)this.skinWeights.push(s[u].clone());let a=t.skinIndices;for(let u=0,d=a.length;u<d;u++)this.skinIndices.push(a[u].clone());let c=t.lineDistances;for(let u=0,d=c.length;u<d;u++)this.lineDistances.push(c[u]);let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Fa=class extends vt{constructor(e,n,i,r,o,s){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s},this.fromBufferGeometry(new Fi(e,n,i,r,o,s)),this.mergeVertices()}},Fi=class extends ot{constructor(e,n,i,r,o,s){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;e=e||1,n=n||1,i=i||1,r=Math.floor(r)||1,o=Math.floor(o)||1,s=Math.floor(s)||1;let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,n,e,s,o,0),p("z","y","x",1,-1,i,n,-e,s,o,1),p("x","z","y",1,1,e,i,n,r,s,2),p("x","z","y",1,-1,e,i,-n,r,s,3),p("x","y","z",1,-1,e,n,i,r,o,4),p("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function p(x,y,m,g,_,v,w,T,A,B,L){let q=v/A,N=w/B,O=v/2,I=w/2,P=T/2,R=A+1,U=B+1,W=0,$=0,it=new b;for(let ct=0;ct<U;ct++){let lt=ct*N-I;for(let Dt=0;Dt<R;Dt++){let St=Dt*q-O;it[x]=St*g,it[y]=lt*_,it[m]=P,l.push(it.x,it.y,it.z),it[x]=0,it[y]=0,it[m]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Dt/A),u.push(1-ct/B),W+=1}}for(let ct=0;ct<B;ct++)for(let lt=0;lt<A;lt++){let Dt=d+lt+R*ct,St=d+lt+R*(ct+1),jt=d+(lt+1)+R*(ct+1),It=d+(lt+1)+R*ct;c.push(Dt,St,It),c.push(St,jt,It),$+=6}a.addGroup(f,$,L),f+=$,d+=W}}};function Bi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function le(t){let e={};for(let n=0;n<t.length;n++){let i=Bi(t[n]);for(let r in i)e[r]=i[r]}return e}var ao={clone:Bi,merge:le},yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function ve(t){gt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=yd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}ve.prototype=Object.create(gt.prototype);ve.prototype.constructor=ve;ve.prototype.isShaderMaterial=!0;ve.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this};ve.prototype.toJSON=function(t){let e=gt.prototype.toJSON.call(this,t);e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function ln(){et.call(this),this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At}ln.prototype=Object.assign(Object.create(et.prototype),{constructor:ln,isCamera:!0,copy:function(t,e){return et.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new b),this.updateMatrixWorld(!0);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){et.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(t,e){et.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function ie(t,e,n,i){ln.call(this),this.type="PerspectiveCamera",this.fov=t!==void 0?t:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=e!==void 0?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}ie.prototype=Object.assign(Object.create(ln.prototype),{constructor:ie,isPerspectiveCamera:!0,copy:function(t,e){return ln.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){let e=.5*this.getFilmHeight()/t;this.fov=Mt.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let t=Math.tan(Mt.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return Mt.RAD2DEG*2*Math.atan(Math.tan(Mt.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=this.near,e=t*Math.tan(Mt.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/a,e-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}let s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){let e=et.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var yi=90,xi=1;function Rr(t,e,n){if(et.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new ie(yi,xi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(1,0,0)),this.add(i);let r=new ie(yi,xi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(-1,0,0)),this.add(r);let o=new ie(yi,xi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);let s=new ie(yi,xi,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new b(0,-1,0)),this.add(s);let a=new ie(yi,xi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new b(0,0,1)),this.add(a);let c=new ie(yi,xi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c),this.update=function(l,h){this.parent===null&&this.updateMatrixWorld();let u=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(h,i),l.setRenderTarget(n,1),l.render(h,r),l.setRenderTarget(n,2),l.render(h,o),l.setRenderTarget(n,3),l.render(h,s),l.setRenderTarget(n,4),l.render(h,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(h,c),l.setRenderTarget(d),l.xr.enabled=u},this.clear=function(l,h,u,d){let f=l.getRenderTarget();for(let p=0;p<6;p++)l.setRenderTarget(n,p),l.clear(h,u,d);l.setRenderTarget(f)}}Rr.prototype=Object.create(et.prototype);Rr.prototype.constructor=Rr;function Cr(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),Te.call(this,t,t,e)}Cr.prototype=Object.create(Te.prototype);Cr.prototype.constructor=Cr;Cr.prototype.isWebGLCubeRenderTarget=!0;Cr.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=e.format,this.texture.encoding=e.encoding;let n=new cs,i={uniforms:{tEquirect:{value:null}},vertexShader:["varying vec3 vWorldDirection;","vec3 transformDirection( in vec3 dir, in mat4 matrix ) {","	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );","}","void main() {","	vWorldDirection = transformDirection( position, modelMatrix );","	#include <begin_vertex>","	#include <project_vertex>","}"].join(`
`),fragmentShader:["uniform sampler2D tEquirect;","varying vec3 vWorldDirection;","#include <common>","void main() {","	vec3 direction = normalize( vWorldDirection );","	vec2 sampleUV = equirectUv( direction );","	gl_FragColor = texture2D( tEquirect, sampleUV );","}"].join(`
`)},r=new ve({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:se,blending:Ln});r.uniforms.tEquirect.value=e;let o=new zt(new Fi(5,5,5),r);return n.add(o),new Rr(1,10,this).update(t,n),o.geometry.dispose(),o.material.dispose(),this};function Ui(t,e,n,i,r,o,s,a,c,l,h,u){Ft.call(this,null,o,s,a,c,l,i,r,h,u),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:Zt,this.minFilter=l!==void 0?l:Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ui.prototype=Object.create(Ft.prototype);Ui.prototype.constructor=Ui;Ui.prototype.isDataTexture=!0;var vi=new gn,Co=new b;function co(t,e,n,i,r,o){this.planes=[t!==void 0?t:new Ve,e!==void 0?e:new Ve,n!==void 0?n:new Ve,i!==void 0?i:new Ve,r!==void 0?r:new Ve,o!==void 0?o:new Ve]}Object.assign(co.prototype,{set:function(t,e,n,i,r,o){let s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this},setFromProjectionMatrix:function(t){let e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],s=n[3],a=n[4],c=n[5],l=n[6],h=n[7],u=n[8],d=n[9],f=n[10],p=n[11],x=n[12],y=n[13],m=n[14],g=n[15];return e[0].setComponents(s-i,h-a,p-u,g-x).normalize(),e[1].setComponents(s+i,h+a,p+u,g+x).normalize(),e[2].setComponents(s+r,h+c,p+d,g+y).normalize(),e[3].setComponents(s-r,h-c,p-d,g-y).normalize(),e[4].setComponents(s-o,h-l,p-f,g-m).normalize(),e[5].setComponents(s+o,h+l,p+f,g+m).normalize(),this},intersectsObject:function(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)},intersectsSprite:function(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)},intersectsSphere:function(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0},intersectsBox:function(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Co.x=i.normal.x>0?t.max.x:t.min.x,Co.y=i.normal.y>0?t.max.y:t.min.y,Co.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Co)<0)return!1}return!0},containsPoint:function(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}});var K={common:{diffuse:{value:new rt(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new he},uv2Transform:{value:new he},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new rt(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new he}},sprite:{diffuse:{value:new rt(15658734)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new he}}};function Fu(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function vd(t,e){let n=e.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=t.createBuffer();t.bindBuffer(h,f),t.bufferData(h,u,d),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function o(l,h,u){let d=h.array,f=h.updateRange;t.bindBuffer(u,l),f.count===-1?t.bufferSubData(u,0,d):(n?t.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):t.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(t.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(o(u.buffer,l,h),u.version=l.version)}return{get:s,remove:a,update:c}}function us(t,e,n,i){vt.call(this),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new zi(t,e,n,i)),this.mergeVertices()}us.prototype=Object.create(vt.prototype);us.prototype.constructor=us;function zi(t,e,n,i){ot.call(this),this.type="PlaneBufferGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i},t=t||1,e=e||1;let r=t/2,o=e/2,s=Math.floor(n)||1,a=Math.floor(i)||1,c=s+1,l=a+1,h=t/s,u=e/a,d=[],f=[],p=[],x=[];for(let y=0;y<l;y++){let m=y*u-o;for(let g=0;g<c;g++){let _=g*h-r;f.push(_,-m,0),p.push(0,0,1),x.push(g/s),x.push(1-y/a)}}for(let y=0;y<a;y++)for(let m=0;m<s;m++){let g=m+c*y,_=m+c*(y+1),v=m+1+c*(y+1),w=m+1+c*y;d.push(g,_,w),d.push(_,v,w)}this.setIndex(d),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(x,2))}zi.prototype=Object.create(ot.prototype);zi.prototype.constructor=zi;var _d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed="vec3 transformed = vec3( position );",Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Od=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Fd=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,Bd=`#define PI 3.141592653589793
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
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`
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
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`vec3 diffuse = vec3( 1.0 );
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
#endif`,op=`uniform bool receiveShadow;
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
#endif`,sp=`#if defined( USE_ENVMAP )
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,hp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_p=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef FLAT_SHADED
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
vec3 geometryNormal = normal;`,Cp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#ifdef USE_SHADOWMAP
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
#endif`,Vp=`#ifdef USE_SHADOWMAP
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
#endif`,Wp=`#ifdef USE_SHADOWMAP
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
#endif`,jp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,em=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,nm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,im=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,om=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,am=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`#include <envmap_common_pars_fragment>
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#include <common>
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform vec3 diffuse;
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
}`,xm=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,Em=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Am=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Im=`uniform vec3 diffuse;
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
}`,Nm=`uniform float size;
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
}`,Om=`uniform vec3 color;
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
}`,Fm=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Um=`uniform float rotation;
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
}`,_t={alphamap_fragment:_d,alphamap_pars_fragment:bd,alphatest_fragment:wd,aomap_fragment:Md,aomap_pars_fragment:Sd,begin_vertex:Ed,beginnormal_vertex:Td,bsdfs:Ad,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Dd,color_fragment:Id,color_pars_fragment:Nd,color_pars_vertex:Od,color_vertex:Fd,common:Bd,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:zd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Hd,emissivemap_fragment:kd,emissivemap_pars_fragment:Vd,encodings_fragment:Wd,encodings_pars_fragment:jd,envmap_fragment:qd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:Yd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:sp,envmap_vertex:Jd,fog_vertex:$d,fog_pars_vertex:Qd,fog_fragment:Kd,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_fragment:np,lightmap_pars_fragment:ip,lights_lambert_vertex:rp,lights_pars_begin:op,lights_toon_fragment:ap,lights_toon_pars_fragment:cp,lights_phong_fragment:lp,lights_phong_pars_fragment:up,lights_physical_fragment:hp,lights_physical_pars_fragment:fp,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:vp,map_fragment:_p,map_pars_fragment:bp,map_particle_fragment:wp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Lp,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Np,packing:Op,premultiplied_alpha_fragment:Fp,project_vertex:Bp,dithering_fragment:Up,dithering_pars_fragment:zp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Wp,shadowmask_pars_fragment:jp,skinbase_vertex:qp,skinning_pars_vertex:Xp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:Jp,specularmap_pars_fragment:$p,tonemapping_fragment:Qp,tonemapping_pars_fragment:Kp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,uv2_pars_fragment:im,uv2_pars_vertex:rm,uv2_vertex:om,worldpos_vertex:sm,background_frag:am,background_vert:cm,cube_frag:lm,cube_vert:um,depth_frag:hm,depth_vert:fm,distanceRGBA_frag:dm,distanceRGBA_vert:pm,equirect_frag:mm,equirect_vert:gm,linedashed_frag:ym,linedashed_vert:xm,meshbasic_frag:vm,meshbasic_vert:_m,meshlambert_frag:bm,meshlambert_vert:wm,meshmatcap_frag:Mm,meshmatcap_vert:Sm,meshtoon_frag:Em,meshtoon_vert:Tm,meshphong_frag:Am,meshphong_vert:Lm,meshphysical_frag:Rm,meshphysical_vert:Cm,normal_frag:Pm,normal_vert:Dm,points_frag:Im,points_vert:Nm,shadow_frag:Om,shadow_vert:Fm,sprite_frag:Bm,sprite_vert:Um},an={basic:{uniforms:le([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:le([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new rt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:le([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:le([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:le([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new rt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:le([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:le([K.points,K.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:le([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:le([K.common,K.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:le([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:_t.normal_vert,fragmentShader:_t.normal_frag},sprite:{uniforms:le([K.sprite,K.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},cube:{uniforms:le([K.envmap,{opacity:{value:1}}]),vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:le([K.common,K.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:le([K.lights,K.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};an.physical={uniforms:le([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new rt(0)},transparency:{value:0}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};function zm(t,e,n,i){let r=new rt(0),o=0,s,a,c=null,l=0,h=null;function u(f,p,x,y){let m=p.isScene===!0?p.background:null,g=t.xr,_=g.getSession&&g.getSession();if(_&&_.environmentBlendMode==="additive"&&(m=null),m===null?d(r,o):m&&m.isColor&&(d(m,1),y=!0),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===oo)){a===void 0&&(a=new zt(new Fi(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Bi(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:se,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a));let v=m.isWebGLCubeRenderTarget?m.texture:m;a.material.uniforms.envMap.value=v,a.material.uniforms.flipEnvMap.value=v.isCubeTexture?-1:1,(c!==m||l!==v.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,c=m,l=v.version,h=t.toneMapping),f.unshift(a,a.geometry,a.material,0,0,null)}else m&&m.isTexture&&(s===void 0&&(s=new zt(new zi(2,2),new ve({name:"BackgroundMaterial",uniforms:Bi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(s)),s.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),s.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||l!==m.version||h!==t.toneMapping)&&(s.material.needsUpdate=!0,c=m,l=m.version,h=t.toneMapping),f.unshift(s,s.geometry,s.material,0,0,null))}function d(f,p){e.buffers.color.setClear(f.r,f.g,f.b,p,i)}return{getClearColor:function(){return r},setClearColor:function(f,p){r.set(f),o=p!==void 0?p:1,d(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,d(r,o)},render:u}}function Gm(t,e,n,i){let r=t.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},c=x(null),l=c;function h(I,P,R,U,W){let $=!1;if(s){let it=p(U,R,P);l!==it&&(l=it,d(l.object)),$=y(U),$&&m(U)}else{let it=P.wireframe===!0;(l.geometry!==U.id||l.program!==R.id||l.wireframe!==it)&&(l.geometry=U.id,l.program=R.id,l.wireframe=it,$=!0)}I.isInstancedMesh===!0&&($=!0),W!==null&&n.update(W,34963),$&&(A(I,P,R,U),W!==null&&t.bindBuffer(34963,n.get(W).buffer))}function u(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):o.bindVertexArrayOES(I)}function f(I){return i.isWebGL2?t.deleteVertexArray(I):o.deleteVertexArrayOES(I)}function p(I,P,R){let U=R.wireframe===!0,W=a[I.id];W===void 0&&(W={},a[I.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let it=$[U];return it===void 0&&(it=x(u()),$[U]=it),it}function x(I){let P=[],R=[],U=[];for(let W=0;W<r;W++)P[W]=0,R[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:R,attributeDivisors:U,object:I,attributes:{}}}function y(I){let P=l.attributes,R=I.attributes;if(Object.keys(P).length!==Object.keys(R).length)return!0;for(let U in R){let W=P[U],$=R[U];if(W.attribute!==$||W.data!==$.data)return!0}return!1}function m(I){let P={},R=I.attributes;for(let U in R){let W=R[U],$={};$.attribute=W,W.data&&($.data=W.data),P[U]=$}l.attributes=P}function g(){let I=l.newAttributes;for(let P=0,R=I.length;P<R;P++)I[P]=0}function _(I){v(I,0)}function v(I,P){let R=l.newAttributes,U=l.enabledAttributes,W=l.attributeDivisors;R[I]=1,U[I]===0&&(t.enableVertexAttribArray(I),U[I]=1),W[I]!==P&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,P),W[I]=P)}function w(){let I=l.newAttributes,P=l.enabledAttributes;for(let R=0,U=P.length;R<U;R++)P[R]!==I[R]&&(t.disableVertexAttribArray(R),P[R]=0)}function T(I,P,R,U,W,$){i.isWebGL2===!0&&(R===5124||R===5125)?t.vertexAttribIPointer(I,P,R,U,W,$):t.vertexAttribPointer(I,P,R,U,W,$)}function A(I,P,R,U){if(i.isWebGL2===!1&&(I.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let W=U.attributes,$=R.getAttributes(),it=P.defaultAttributeValues;for(let ct in $){let lt=$[ct];if(lt>=0){let Dt=W[ct];if(Dt!==void 0){let St=Dt.normalized,jt=Dt.itemSize,It=n.get(Dt);if(It===void 0)continue;let k=It.buffer,Kt=It.type,Lt=It.bytesPerElement;if(Dt.isInterleavedBufferAttribute){let Rt=Dt.data,bt=Rt.stride,V=Dt.offset;Rt&&Rt.isInstancedInterleavedBuffer?(v(lt,Rt.meshPerAttribute),U._maxInstanceCount===void 0&&(U._maxInstanceCount=Rt.meshPerAttribute*Rt.count)):_(lt),t.bindBuffer(34962,k),T(lt,jt,Kt,St,bt*Lt,V*Lt)}else Dt.isInstancedBufferAttribute?(v(lt,Dt.meshPerAttribute),U._maxInstanceCount===void 0&&(U._maxInstanceCount=Dt.meshPerAttribute*Dt.count)):_(lt),t.bindBuffer(34962,k),T(lt,jt,Kt,St,0,0)}else if(ct==="instanceMatrix"){let St=n.get(I.instanceMatrix);if(St===void 0)continue;let jt=St.buffer,It=St.type;v(lt+0,1),v(lt+1,1),v(lt+2,1),v(lt+3,1),t.bindBuffer(34962,jt),t.vertexAttribPointer(lt+0,4,It,!1,64,0),t.vertexAttribPointer(lt+1,4,It,!1,64,16),t.vertexAttribPointer(lt+2,4,It,!1,64,32),t.vertexAttribPointer(lt+3,4,It,!1,64,48)}else if(it!==void 0){let St=it[ct];if(St!==void 0)switch(St.length){case 2:t.vertexAttrib2fv(lt,St);break;case 3:t.vertexAttrib3fv(lt,St);break;case 4:t.vertexAttrib4fv(lt,St);break;default:t.vertexAttrib1fv(lt,St)}}}}w()}function B(){N();for(let I in a){let P=a[I];for(let R in P){let U=P[R];for(let W in U)f(U[W].object),delete U[W];delete P[R]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;let P=a[I.id];for(let R in P){let U=P[R];for(let W in U)f(U[W].object),delete U[W];delete P[R]}delete a[I.id]}function q(I){for(let P in a){let R=a[P];if(R[I.id]===void 0)continue;let U=R[I.id];for(let W in U)f(U[W].object),delete U[W];delete R[I.id]}}function N(){O(),l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:O,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:_,disableUnusedAttributes:w}}function Hm(t,e,n,i){let r=i.isWebGL2,o;function s(l){o=l}function a(l,h){t.drawArrays(o,l,h),n.update(h,o)}function c(l,h,u,d){if(d===0)return;let f,p;if(r)f=t,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](o,h,u,d),n.update(u,o,d)}this.setMode=s,this.render=a,this.renderInstances=c}function km(t,e,n){let i;function r(){if(i!==void 0)return i;let T=e.get("EXT_texture_filter_anisotropic");return T!==null?i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext,a=n.precision!==void 0?n.precision:"highp",c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=n.logarithmicDepthBuffer===!0,h=t.getParameter(34930),u=t.getParameter(35660),d=t.getParameter(3379),f=t.getParameter(34076),p=t.getParameter(34921),x=t.getParameter(36347),y=t.getParameter(36348),m=t.getParameter(36349),g=u>0,_=s||!!e.get("OES_texture_float"),v=g&&_,w=s?t.getParameter(36183):0;return{isWebGL2:s,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:v,maxSamples:w}}function Vm(){let t=this,e=null,n=0,i=!1,r=!1,o=new Ve,s=new he,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,d){let f=h.length!==0||u||n!==0||i;return i=u,e=l(h,d,0),n=h.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,u,d,f,p,x){if(!i||h===null||h.length===0||r&&!d)r?l(null):c();else{let y=r?0:n,m=y*4,g=p.clippingState||null;a.value=g,g=l(h,f,m,x);for(let _=0;_!==m;++_)g[_]=e[_];p.clippingState=g,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=y}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,u,d,f){let p=h!==null?h.length:0,x=null;if(p!==0){if(x=a.value,f!==!0||x===null){let y=d+p*4,m=u.matrixWorldInverse;s.getNormalMatrix(m),(x===null||x.length<y)&&(x=new Float32Array(y));for(let g=0,_=d;g!==p;++g,_+=4)o.copy(h[g]).applyMatrix4(m,s),o.normal.toArray(x,_),x[_+3]=o.constant}a.value=x,a.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,x}}function Wm(t){let e={};return{get:function(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]=i,i}}}function jm(t,e,n,i){let r=new WeakMap,o=new WeakMap;function s(u){let d=u.target,f=r.get(d);f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);d.removeEventListener("dispose",s),r.delete(d);let p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){let f=r.get(d);return f||(d.addEventListener("dispose",s),d.isBufferGeometry?f=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new ot().setFromObject(u)),f=d._bufferGeometry),r.set(d,f),n.memory.geometries++,f)}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],34962);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let y=0,m=x.length;y<m;y++)e.update(x[y],34962)}}function l(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let g=f.array;x=f.version;for(let _=0,v=g.length;_<v;_+=3){let w=g[_+0],T=g[_+1],A=g[_+2];d.push(w,T,T,A,A,w)}}else{let g=p.array;x=p.version;for(let _=0,v=g.length/3-1;_<v;_+=3){let w=_+0,T=_+1,A=_+2;d.push(w,T,T,A,A,w)}}let y=new(Nu(d)>65535?Lr:Ar)(d,1);y.version=x;let m=o.get(u);m&&e.remove(m),o.set(u,y)}function h(u){let d=o.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function qm(t,e,n,i){let r=i.isWebGL2,o;function s(d){o=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){t.drawElements(o,f,a,d*c),n.update(f,o)}function u(d,f,p,x){if(x===0)return;let y,m;if(r)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](o,p,a,f*c,x),n.update(p,o,x)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u}function Xm(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(a=a||1,n.calls++,s){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ym(t,e){return t[0]-e[0]}function Zm(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Jm(t){let e={},n=new Float32Array(8),i=[];for(let o=0;o<8;o++)i[o]=[o,0];function r(o,s,a,c){let l=o.morphTargetInfluences,h=l===void 0?0:l.length,u=e[s.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];e[s.id]=u}for(let y=0;y<h;y++){let m=u[y];m[0]=y,m[1]=l[y]}u.sort(Zm);for(let y=0;y<8;y++)y<h&&u[y][1]?(i[y][0]=u[y][0],i[y][1]=u[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(Ym);let d=a.morphTargets&&s.morphAttributes.position,f=a.morphNormals&&s.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let m=i[y],g=m[0],_=m[1];g!==Number.MAX_SAFE_INTEGER&&_?(d&&s.getAttribute("morphTarget"+y)!==d[g]&&s.setAttribute("morphTarget"+y,d[g]),f&&s.getAttribute("morphNormal"+y)!==f[g]&&s.setAttribute("morphNormal"+y,f[g]),n[y]=_,p+=_):(d&&s.getAttribute("morphTarget"+y)!==void 0&&s.deleteAttribute("morphTarget"+y),f&&s.getAttribute("morphNormal"+y)!==void 0&&s.deleteAttribute("morphNormal"+y),n[y]=0)}let x=s.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function $m(t,e,n,i){let r=new WeakMap;function o(a){let c=i.render.frame,l=a.geometry,h=e.get(a,l);return r.get(h)!==c&&(l.isGeometry&&h.updateFromObject(a),e.update(h),r.set(h,c)),a.isInstancedMesh&&n.update(a.instanceMatrix,34962),h}function s(){r=new WeakMap}return{update:o,dispose:s}}function Dn(t,e,n,i,r,o,s,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:wc,s=s!==void 0?s:qn,Ft.call(this,t,e,n,i,r,o,s,a,c,l),this.flipY=!1}Dn.prototype=Object.create(Ft.prototype);Dn.prototype.constructor=Dn;Dn.prototype.isCubeTexture=!0;Object.defineProperty(Dn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function Pr(t,e,n,i){Ft.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ye,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Pr.prototype=Object.create(Ft.prototype);Pr.prototype.constructor=Pr;Pr.prototype.isDataTexture2DArray=!0;function Dr(t,e,n,i){Ft.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ye,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Dr.prototype=Object.create(Ft.prototype);Dr.prototype.constructor=Dr;Dr.prototype.isDataTexture3D=!0;var Bu=new Ft,Qm=new Pr,Km=new Dr,Uu=new Dn,dl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),yl=new Float32Array(4);function rr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,o=dl[r];if(o===void 0&&(o=new Float32Array(r),dl[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Le(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function we(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zu(t,e){let n=pl[e];n===void 0&&(n=new Int32Array(e),pl[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eg(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Le(n,e))return;t.uniform2fv(this.addr,e),we(n,e)}}function ng(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Le(n,e))return;t.uniform3fv(this.addr,e),we(n,e)}}function ig(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Le(n,e))return;t.uniform4fv(this.addr,e),we(n,e)}}function rg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),we(n,e)}else{if(Le(n,i))return;yl.set(i),t.uniformMatrix2fv(this.addr,!1,yl),we(n,i)}}function og(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),we(n,e)}else{if(Le(n,i))return;gl.set(i),t.uniformMatrix3fv(this.addr,!1,gl),we(n,i)}}function sg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),we(n,e)}else{if(Le(n,i))return;ml.set(i),t.uniformMatrix4fv(this.addr,!1,ml),we(n,i)}}function ag(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Bu,r)}function cg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qm,r)}function lg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Km,r)}function ug(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Uu,r)}function hg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fg(t,e){let n=this.cache;Le(n,e)||(t.uniform2iv(this.addr,e),we(n,e))}function dg(t,e){let n=this.cache;Le(n,e)||(t.uniform3iv(this.addr,e),we(n,e))}function pg(t,e){let n=this.cache;Le(n,e)||(t.uniform4iv(this.addr,e),we(n,e))}function mg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gg(t){switch(t){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return og;case 35676:return sg;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return cg}}function yg(t,e){t.uniform1fv(this.addr,e)}function xg(t,e){t.uniform1iv(this.addr,e)}function vg(t,e){t.uniform2iv(this.addr,e)}function _g(t,e){t.uniform3iv(this.addr,e)}function bg(t,e){t.uniform4iv(this.addr,e)}function wg(t,e){let n=rr(e,this.size,2);t.uniform2fv(this.addr,n)}function Mg(t,e){let n=rr(e,this.size,3);t.uniform3fv(this.addr,n)}function Sg(t,e){let n=rr(e,this.size,4);t.uniform4fv(this.addr,n)}function Eg(t,e){let n=rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Tg(t,e){let n=rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ag(t,e){let n=rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Lg(t,e,n){let i=e.length,r=zu(n,i);t.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)n.safeSetTexture2D(e[o]||Bu,r[o])}function Rg(t,e,n){let i=e.length,r=zu(n,i);t.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)n.safeSetTextureCube(e[o]||Uu,r[o])}function Cg(t){switch(t){case 5126:return yg;case 35664:return wg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35680:case 36300:case 36308:case 36293:return Rg}}function Pg(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gg(e.type)}function Gu(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Cg(e.type)}Gu.prototype.updateCache=function(t){let e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),we(e,t)};function Hu(t){this.id=t,this.seq=[],this.map={}}Hu.prototype.setValue=function(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let s=i[r];s.setValue(t,e[s.id],n)}};var xa=/([\w\d_]+)(\])?(\[|\.)?/g;function xl(t,e){t.seq.push(e),t.map[e.id]=e}function Dg(t,e,n){let i=t.name,r=i.length;for(xa.lastIndex=0;;){let o=xa.exec(i),s=xa.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){xl(n,l===void 0?new Pg(a,t,e):new Gu(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new Hu(a),xl(n,u)),n=u}}}function Rn(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Dg(r,o,this)}}Rn.prototype.setValue=function(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)};Rn.prototype.setOptional=function(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)};Rn.upload=function(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let s=e[r],a=n[s.id];a.needsUpdate!==!1&&s.setValue(t,a.value,i)}};Rn.seqWithValue=function(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n};function vl(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Ig=0;function Ng(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function ku(t){switch(t){case xe:return["Linear","( value )"];case ks:return["sRGB","( value )"];case Lc:return["RGBE","( value )"];case Ru:return["RGBM","( value, 7.0 )"];case Cu:return["RGBM","( value, 16.0 )"];case Pu:return["RGBD","( value, 256.0 )"];case Ac:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Qf:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function _l(t,e,n){let i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let o=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Ng(o)}function fr(t,e){let n=ku(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Og(t,e){let n=ku(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Fg(t,e){let n;switch(e){case Jh:n="Linear";break;case $h:n="Reinhard";break;case Qh:n="OptimizedCineon";break;case Kh:n="ACESFilmic";break;case tf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Bg(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function Ug(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zg(t,e){let n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r).name;n[s]=t.getAttribLocation(e,s)}return n}function vr(t){return t!==""}function bl(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(t){return t.replace(Gg,Hg)}function Hg(t,e){let n=_t[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ba(n)}var kg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Vg=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function Ml(t){return t.replace(Vg,Vu).replace(kg,Wg)}function Wg(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Vu(t,e,n,i)}function Vu(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[ i \]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Sl(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jg(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case wc:case Mc:e="ENVMAP_TYPE_CUBE";break;case oo:case Ec:e="ENVMAP_TYPE_CUBE_UV";break;case Tu:case Sc:e="ENVMAP_TYPE_EQUIREC";break}return e}function Xg(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Mc:case Sc:e="ENVMAP_MODE_REFRACTION";break}return e}function Yg(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gs:e="ENVMAP_BLENDING_MULTIPLY";break;case Yh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(t,e,n,i){let r=t.getContext(),o=n.defines,s=n.vertexShader,a=n.fragmentShader,c=jg(n),l=qg(n),h=Xg(n),u=Yg(n),d=t.gammaFactor>0?t.gammaFactor:1,f=n.isWebGL2?"":Bg(n),p=Ug(o),x=r.createProgram(),y,m;if(n.isRawShaderMaterial?(y=[p].filter(vr).join(`
`),y.length>0&&(y+=`
`),m=[f,p].filter(vr).join(`
`),m.length>0&&(m+=`
`)):(y=[Sl(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),m=[f,Sl(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?_t.tonemapping_pars_fragment:"",n.toneMapping!==Di?Fg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",_t.encodings_pars_fragment,n.map?fr("mapTexelToLinear",n.mapEncoding):"",n.matcap?fr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?fr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?fr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?fr("lightMapTexelToLinear",n.lightMapEncoding):"",Og("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vr).join(`
`)),s=Ba(s),s=bl(s,n),s=wl(s,n),a=Ba(a),a=bl(a,n),a=wl(a,n),s=Ml(s),a=Ml(a),n.isWebGL2&&!n.isRawShaderMaterial){let B=!1,L=/^\s*#version\s+300\s+es\s*\n/;n.isShaderMaterial&&s.match(L)!==null&&a.match(L)!==null&&(B=!0,s=s.replace(L,""),a=a.replace(L,"")),y=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=[`#version 300 es
`,"#define varying in",B?"":"out highp vec4 pc_fragColor;",B?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m}let g=y+s,_=m+a,v=vl(r,35633,g),w=vl(r,35632,_);if(r.attachShader(x,v),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){let B=r.getProgramInfoLog(x).trim(),L=r.getShaderInfoLog(v).trim(),q=r.getShaderInfoLog(w).trim(),N=!0,O=!0;if(r.getProgramParameter(x,35714)===!1){N=!1;let I=_l(r,v,"vertex"),P=_l(r,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(x,35715),"gl.getProgramInfoLog",B,I,P)}else B!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",B):(L===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:N,programLog:B,vertexShader:{log:L,prefix:y},fragmentShader:{log:q,prefix:m}})}r.deleteShader(v),r.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new Rn(r,x)),T};let A;return this.getAttributes=function(){return A===void 0&&(A=zg(r,x)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=n.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=w,this}function Jg(t,e,n,i){let r=[],o=n.isWebGL2,s=n.logarithmicDepthBuffer,a=n.floatVertexTextures,c=n.maxVertexUniforms,l=n.vertexTextures,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},d=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen"];function f(v,w){let T;if(w){let A=an[w];T={name:v.name||v.type,uniforms:ao.clone(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader}}else T={name:v.name||v.type,uniforms:v.uniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader};return T}function p(v){let T=v.skeleton.bones;if(a)return 1024;{let B=Math.floor((c-20)/4),L=Math.min(B,T.length);return L<T.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+T.length+" bones. This GPU supports "+L+"."),0):L}}function x(v){let w;return v?v.isTexture?w=v.encoding:v.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=v.texture.encoding):w=xe,w}function y(v,w,T,A,B,L,q){let N=A.fog,O=v.isMeshStandardMaterial?A.environment:null,I=v.envMap||O,P=u[v.type],R=q.isSkinnedMesh?p(q):0;v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let U=f(v,P);v.onBeforeCompile(U,t);let W=t.getRenderTarget();return{isWebGL2:o,shaderID:P,shaderName:U.name,uniforms:U.uniforms,vertexShader:U.vertexShader,fragmentShader:U.fragmentShader,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial,isShaderMaterial:v.isShaderMaterial,precision:h,instancing:q.isInstancedMesh===!0,supportsVertexTextures:l,outputEncoding:W!==null?x(W.texture):t.outputEncoding,map:!!v.map,mapEncoding:x(v.map),matcap:!!v.matcap,matcapEncoding:x(v.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:x(I),envMapCubeUV:!!I&&(I.mapping===oo||I.mapping===Ec),lightMap:!!v.lightMap,lightMapEncoding:x(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:x(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ed,tangentSpaceNormalMap:v.normalMapType===nr,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog,fogExp2:N&&N.isFogExp2,flatShading:v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:s,skinning:v.skinning&&R>0,maxBones:R,useVertexTexture:a,morphTargets:v.morphTargets,morphNormals:v.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:B,numClipIntersection:L,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:Di,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===$e,flipSided:v.side===se,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||e.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:o||e.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:o||e.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.fragmentShader),w.push(v.vertexShader)),v.defines!==void 0)for(let T in v.defines)w.push(T),w.push(v.defines[T]);if(v.isRawShaderMaterial===void 0){for(let T=0;T<d.length;T++)w.push(v[d[T]]);w.push(t.outputEncoding),w.push(t.gammaFactor)}return w.push(v.customProgramCacheKey),w.join()}function g(v,w){let T;for(let A=0,B=r.length;A<B;A++){let L=r[A];if(L.cacheKey===w){T=L,++T.usedTimes;break}}return T===void 0&&(T=new Zg(t,w,v,i),r.push(T)),T}function _(v){if(--v.usedTimes===0){let w=r.indexOf(v);r[w]=r[r.length-1],r.pop(),v.destroy()}}return{getParameters:y,getProgramCacheKey:m,acquireProgram:g,releaseProgram:_,programs:r}}function $g(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Kg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function El(){let t=[],e=0,n=[],i=[],r={id:-1};function o(){e=0,n.length=0,i.length=0}function s(u,d,f,p,x,y){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,program:f.program||r,groupOrder:p,renderOrder:u.renderOrder,z:x,group:y},t[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.program=f.program||r,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=y),e++,m}function a(u,d,f,p,x,y){let m=s(u,d,f,p,x,y);(f.transparent===!0?i:n).push(m)}function c(u,d,f,p,x,y){let m=s(u,d,f,p,x,y);(f.transparent===!0?i:n).unshift(m)}function l(u,d){n.length>1&&n.sort(u||Qg),i.length>1&&i.sort(d||Kg)}function h(){for(let u=e,d=t.length;u<d;u++){let f=t[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.program=null,f.group=null}}return{opaque:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function ty(){let t=new WeakMap;function e(r){let o=r.target;o.removeEventListener("dispose",e),t.delete(o)}function n(r,o){let s=t.get(r),a;return s===void 0?(a=new El,t.set(r,new WeakMap),t.get(r).set(o,a),r.addEventListener("dispose",e)):(a=s.get(o),a===void 0&&(a=new El,s.set(o,a))),a}function i(){t=new WeakMap}return{get:n,dispose:i}}function ey(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new b,color:new rt};break;case"SpotLight":n={position:new b,direction:new b,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new b,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new b,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new b,halfWidth:new b,halfHeight:new b};break}return t[e.id]=n,n}}}function ny(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var iy=0;function ry(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function oy(){let t=new ey,e=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)n.probe.push(new b);let i=new b,r=new At,o=new At;function s(a,c,l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,x=0,y=0,m=0,g=0,_=0,v=0,w=l.matrixWorldInverse;a.sort(ry);for(let A=0,B=a.length;A<B;A++){let L=a[A],q=L.color,N=L.intensity,O=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=q.r*N,u+=q.g*N,d+=q.b*N;else if(L.isLightProbe)for(let P=0;P<9;P++)n.probe[P].addScaledVector(L.sh.coefficients[P],N);else if(L.isDirectionalLight){let P=t.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),P.direction.setFromMatrixPosition(L.matrixWorld),i.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(w),L.castShadow){let R=L.shadow,U=e.get(L);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=L.shadow.matrix,g++}n.directional[f]=P,f++}else if(L.isSpotLight){let P=t.get(L);if(P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(w),P.color.copy(q).multiplyScalar(N),P.distance=O,P.direction.setFromMatrixPosition(L.matrixWorld),i.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(w),P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,L.castShadow){let R=L.shadow,U=e.get(L);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=I,n.spotShadowMatrix[x]=L.shadow.matrix,v++}n.spot[x]=P,x++}else if(L.isRectAreaLight){let P=t.get(L);P.color.copy(q).multiplyScalar(N),P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(w),o.identity(),r.copy(L.matrixWorld),r.premultiply(w),o.extractRotation(r),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),n.rectArea[y]=P,y++}else if(L.isPointLight){let P=t.get(L);if(P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(w),P.color.copy(L.color).multiplyScalar(L.intensity),P.distance=L.distance,P.decay=L.decay,L.castShadow){let R=L.shadow,U=e.get(L);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,U.shadowCameraNear=R.camera.near,U.shadowCameraFar=R.camera.far,n.pointShadow[p]=U,n.pointShadowMap[p]=I,n.pointShadowMatrix[p]=L.shadow.matrix,_++}n.point[p]=P,p++}else if(L.isHemisphereLight){let P=t.get(L);P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(w),P.direction.normalize(),P.skyColor.copy(L.color).multiplyScalar(N),P.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[m]=P,m++}}n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==y||T.hemiLength!==m||T.numDirectionalShadows!==g||T.numPointShadows!==_||T.numSpotShadows!==v)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=_,n.spotShadowMatrix.length=v,T.directionalLength=f,T.pointLength=p,T.spotLength=x,T.rectAreaLength=y,T.hemiLength=m,T.numDirectionalShadows=g,T.numPointShadows=_,T.numSpotShadows=v,n.version=iy++)}return{setup:s,state:n}}function Tl(){let t=new oy,e=[],n=[];function i(){e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function s(c){t.setup(e,n,c)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t},setupLights:s,pushLight:r,pushShadow:o}}function sy(){let t=new WeakMap;function e(r){let o=r.target;o.removeEventListener("dispose",e),t.delete(o)}function n(r,o){let s;return t.has(r)===!1?(s=new Tl,t.set(r,new WeakMap),t.get(r).set(o,s),r.addEventListener("dispose",e)):t.get(r).has(o)===!1?(s=new Tl,t.get(r).set(o,s)):s=t.get(r).get(o),s}function i(){t=new WeakMap}return{get:n,dispose:i}}function Jn(t){gt.call(this),this.type="MeshDepthMaterial",this.depthPacking=Kf,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Jn.prototype=Object.create(gt.prototype);Jn.prototype.constructor=Jn;Jn.prototype.isMeshDepthMaterial=!0;Jn.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function $n(t){gt.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}$n.prototype=Object.create(gt.prototype);$n.prototype.constructor=$n;$n.prototype.isMeshDistanceMaterial=!0;$n.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var ay=`uniform sampler2D shadow_pass;
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
}`,cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Wu(t,e,n){let i=new co,r=new z,o=new z,s=new Nt,a=[],c=[],l={},h={0:se,1:oi,2:$e},u=new ve({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:cy,fragmentShader:ay}),d=u.clone();d.defines.HORIZONAL_PASS=1;let f=new ot;f.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new zt(f,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu,this.render=function(w,T,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;let B=t.getRenderTarget(),L=t.getActiveCubeFace(),q=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Ln),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let O=0,I=w.length;O<I;O++){let P=w[O],R=P.shadow;if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}r.copy(R.mapSize);let U=R.getFrameExtents();if(r.multiply(U),o.copy(R.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(o.x=Math.floor(n/U.x),r.x=o.x*U.x,R.mapSize.x=o.x),r.y>n&&(o.y=Math.floor(n/U.y),r.y=o.y*U.y,R.mapSize.y=o.y)),R.map===null&&!R.isPointLightShadow&&this.type===xr){let $={minFilter:ue,magFilter:ue,format:Be};R.map=new Te(r.x,r.y,$),R.map.texture.name=P.name+".shadowMap",R.mapPass=new Te(r.x,r.y,$),R.camera.updateProjectionMatrix()}if(R.map===null){let $={minFilter:Zt,magFilter:Zt,format:Be};R.map=new Te(r.x,r.y,$),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();let W=R.getViewportCount();for(let $=0;$<W;$++){let it=R.getViewport($);s.set(o.x*it.x,o.y*it.y,o.x*it.z,o.y*it.w),N.viewport(s),R.updateMatrices(P,$),i=R.getFrustum(),v(T,A,R.camera,P,this.type)}!R.isPointLightShadow&&this.type===xr&&y(R,A),R.needsUpdate=!1}x.needsUpdate=!1,t.setRenderTarget(B,L,q)};function y(w,T){let A=e.update(p);u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,A,u,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,A,d,p,null)}function m(w,T,A){let B=w<<0|T<<1|A<<2,L=a[B];return L===void 0&&(L=new Jn({depthPacking:td,morphTargets:w,skinning:T}),a[B]=L),L}function g(w,T,A){let B=w<<0|T<<1|A<<2,L=c[B];return L===void 0&&(L=new $n({morphTargets:w,skinning:T}),c[B]=L),L}function _(w,T,A,B,L,q,N){let O=null,I=m,P=w.customDepthMaterial;if(B.isPointLight===!0&&(I=g,P=w.customDistanceMaterial),P===void 0){let R=!1;A.morphTargets===!0&&(R=T.morphAttributes&&T.morphAttributes.position&&T.morphAttributes.position.length>0);let U=!1;w.isSkinnedMesh===!0&&(A.skinning===!0?U=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));let W=w.isInstancedMesh===!0;O=I(R,U,W)}else O=P;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){let R=O.uuid,U=A.uuid,W=l[R];W===void 0&&(W={},l[R]=W);let $=W[U];$===void 0&&($=O.clone(),W[U]=$),O=$}return O.visible=A.visible,O.wireframe=A.wireframe,N===xr?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:h[A.side],O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,B.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(B.matrixWorld),O.nearDistance=L,O.farDistance=q),O}function v(w,T,A,B,L){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===xr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let O=e.update(w),I=w.material;if(Array.isArray(I)){let P=O.groups;for(let R=0,U=P.length;R<U;R++){let W=P[R],$=I[W.materialIndex];if($&&$.visible){let it=_(w,O,$,B,A.near,A.far,L);t.renderBufferDirect(A,null,O,it,w,W)}}}else if(I.visible){let P=_(w,O,I,B,A.near,A.far,L);t.renderBufferDirect(A,null,O,P,w,null)}}let N=w.children;for(let O=0,I=N.length;O<I;O++)v(N[O],T,A,B,L)}}function ly(t,e,n){let i=n.isWebGL2;function r(){let C=!1,J=new Nt,Q=null,pt=new Nt(0,0,0,0);return{setMask:function(Y){Q!==Y&&!C&&(t.colorMask(Y,Y,Y,Y),Q=Y)},setLocked:function(Y){C=Y},setClear:function(Y,at,Ct,yt,ht){ht===!0&&(Y*=yt,at*=yt,Ct*=yt),J.set(Y,at,Ct,yt),pt.equals(J)===!1&&(t.clearColor(Y,at,Ct,yt),pt.copy(J))},reset:function(){C=!1,Q=null,pt.set(-1,0,0,0)}}}function o(){let C=!1,J=null,Q=null,pt=null;return{setTest:function(Y){Y?ct(2929):lt(2929)},setMask:function(Y){J!==Y&&!C&&(t.depthMask(Y),J=Y)},setFunc:function(Y){if(Q!==Y){if(Y)switch(Y){case Hh:t.depthFunc(512);break;case kh:t.depthFunc(519);break;case Vh:t.depthFunc(513);break;case La:t.depthFunc(515);break;case Wh:t.depthFunc(514);break;case jh:t.depthFunc(518);break;case qh:t.depthFunc(516);break;case Xh:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Q=Y}},setLocked:function(Y){C=Y},setClear:function(Y){pt!==Y&&(t.clearDepth(Y),pt=Y)},reset:function(){C=!1,J=null,Q=null,pt=null}}}function s(){let C=!1,J=null,Q=null,pt=null,Y=null,at=null,Ct=null,yt=null,ht=null;return{setTest:function(xt){C||(xt?ct(2960):lt(2960))},setMask:function(xt){J!==xt&&!C&&(t.stencilMask(xt),J=xt)},setFunc:function(xt,te,ge){(Q!==xt||pt!==te||Y!==ge)&&(t.stencilFunc(xt,te,ge),Q=xt,pt=te,Y=ge)},setOp:function(xt,te,ge){(at!==xt||Ct!==te||yt!==ge)&&(t.stencilOp(xt,te,ge),at=xt,Ct=te,yt=ge)},setLocked:function(xt){C=xt},setClear:function(xt){ht!==xt&&(t.clearStencil(xt),ht=xt)},reset:function(){C=!1,J=null,Q=null,pt=null,Y=null,at=null,Ct=null,yt=null,ht=null}}}let a=new r,c=new o,l=new s,h={},u=null,d=null,f=null,p=null,x=null,y=null,m=null,g=null,_=null,v=!1,w=null,T=null,A=null,B=null,L=null,q=t.getParameter(35661),N=!1,O=0,I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL\ ([0-9])/.exec(I)[1]),N=O>=1):I.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(I)[1]),N=O>=2);let P=null,R={},U=new Nt,W=new Nt;function $(C,J,Q){let pt=new Uint8Array(4),Y=t.createTexture();t.bindTexture(C,Y),t.texParameteri(C,10241,9728),t.texParameteri(C,10240,9728);for(let at=0;at<Q;at++)t.texImage2D(J+at,0,6408,1,1,0,6408,5121,pt);return Y}let it={};it[3553]=$(3553,3553,1),it[34067]=$(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ct(2929),c.setFunc(La),Kt(!1),Lt(Hc),ct(2884),It(Ln);function ct(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function lt(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function Dt(C){return u!==C?(t.useProgram(C),u=C,!0):!1}let St={[Ei]:32774,[Ch]:32778,[Ph]:32779};if(i)St[jc]=32775,St[qc]=32776;else{let C=e.get("EXT_blend_minmax");C!==null&&(St[jc]=C.MIN_EXT,St[qc]=C.MAX_EXT)}let jt={[Dh]:0,[Ih]:1,[Nh]:768,[Su]:770,[Gh]:776,[Uh]:774,[Fh]:772,[Oh]:769,[Eu]:771,[zh]:775,[Bh]:773};function It(C,J,Q,pt,Y,at,Ct,yt){if(C===Ln){d&&(lt(3042),d=!1);return}if(d||(ct(3042),d=!0),C!==Rh){if(C!==f||yt!==v){if((p!==Ei||m!==Ei)&&(t.blendEquation(32774),p=Ei,m=Ei),yt)switch(C){case _r:t.blendFuncSeparate(1,771,1,771);break;case kc:t.blendFunc(1,1);break;case Vc:t.blendFuncSeparate(0,0,769,771);break;case Wc:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case _r:t.blendFuncSeparate(770,771,1,771);break;case kc:t.blendFunc(770,1);break;case Vc:t.blendFunc(0,769);break;case Wc:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,y=null,g=null,_=null,f=C,v=yt}return}Y=Y||J,at=at||Q,Ct=Ct||pt,(J!==p||Y!==m)&&(t.blendEquationSeparate(St[J],St[Y]),p=J,m=Y),(Q!==x||pt!==y||at!==g||Ct!==_)&&(t.blendFuncSeparate(jt[Q],jt[pt],jt[at],jt[Ct]),x=Q,y=pt,g=at,_=Ct),f=C,v=null}function k(C,J){C.side===$e?lt(2884):ct(2884);let Q=C.side===se;J&&(Q=!Q),Kt(Q),C.blending===_r&&C.transparent===!1?It(Ln):It(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let pt=C.stencilWrite;l.setTest(pt),pt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),bt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits)}function Kt(C){w!==C&&(C?t.frontFace(2304):t.frontFace(2305),w=C)}function Lt(C){C!==Th?(ct(2884),C!==T&&(C===Hc?t.cullFace(1029):C===Ah?t.cullFace(1028):t.cullFace(1032))):lt(2884),T=C}function Rt(C){C!==A&&(N&&t.lineWidth(C),A=C)}function bt(C,J,Q){C?(ct(32823),(B!==J||L!==Q)&&(t.polygonOffset(J,Q),B=J,L=Q)):lt(32823)}function V(C){C?ct(3089):lt(3089)}function j(C){C===void 0&&(C=33984+q-1),P!==C&&(t.activeTexture(C),P=C)}function Z(C,J){P===null&&j();let Q=R[P];Q===void 0&&(Q={type:void 0,texture:void 0},R[P]=Q),(Q.type!==C||Q.texture!==J)&&(t.bindTexture(C,J||it[C]),Q.type=C,Q.texture=J)}function ut(){let C=R[P];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function st(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function M(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function E(C){U.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),U.copy(C))}function X(C){W.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),W.copy(C))}function H(){h={},P=null,R={},u=null,f=null,w=null,T=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ct,disable:lt,useProgram:Dt,setBlending:It,setMaterial:k,setFlipSided:Kt,setCullFace:Lt,setLineWidth:Rt,setPolygonOffset:bt,setScissorTest:V,activeTexture:j,bindTexture:Z,unbindTexture:ut,compressedTexImage2D:st,texImage2D:Et,texImage3D:M,scissor:E,viewport:X,reset:H}}function uy(t,e,n,i,r,o,s){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap,f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,E){return p?new OffscreenCanvas(M,E):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(M,E,X,H){let C=1;if((M.width>H||M.height>H)&&(C=H/Math.max(M.width,M.height)),C<1||E===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let J=E?Mt.floorPowerOfTwo:Math.floor,Q=J(C*M.width),pt=J(C*M.height);f===void 0&&(f=x(Q,pt));let Y=X?x(Q,pt):f;return Y.width=Q,Y.height=pt,Y.getContext("2d").drawImage(M,0,0,Q,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Q+"x"+pt+")."),Y}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Mt.isPowerOfTwo(M.width)&&Mt.isPowerOfTwo(M.height)}function g(M){return a?!1:M.wrapS!==ye||M.wrapT!==ye||M.minFilter!==Zt&&M.minFilter!==ue}function _(M,E){return M.generateMipmaps&&E&&M.minFilter!==Zt&&M.minFilter!==ue}function v(M,E,X,H){t.generateMipmap(M);let C=i.get(E);C.__maxMipLevel=Math.log(Math.max(X,H))*Math.LOG2E}function w(M,E,X){if(a===!1)return E;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H=E;return E===6403&&(X===5126&&(H=33326),X===5131&&(H=33325),X===5121&&(H=33321)),E===6407&&(X===5126&&(H=34837),X===5131&&(H=34843),X===5121&&(H=32849)),E===6408&&(X===5126&&(H=34836),X===5131&&(H=34842),X===5121&&(H=32856)),(H===33325||H===33326||H===34842||H===34836)&&e.get("EXT_color_buffer_float"),H}function T(M){return M===Zt||M===Yn||M===Ra?9728:9729}function A(M){let E=M.target;E.removeEventListener("dispose",A),L(E),E.isVideoTexture&&d.delete(E),s.memory.textures--}function B(M){let E=M.target;E.removeEventListener("dispose",B),q(E),s.memory.textures--}function L(M){let E=i.get(M);E.__webglInit!==void 0&&(t.deleteTexture(E.__webglTexture),i.remove(M))}function q(M){let E=i.get(M),X=i.get(M.texture);if(M){if(X.__webglTexture!==void 0&&t.deleteTexture(X.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let H=0;H<6;H++)t.deleteFramebuffer(E.__webglFramebuffer[H]),E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[H]);else t.deleteFramebuffer(E.__webglFramebuffer),E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer&&t.deleteRenderbuffer(E.__webglColorRenderbuffer),E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}}let N=0;function O(){N=0}function I(){let M=N;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),N+=1,M}function P(M,E){let X=i.get(M);if(M.isVideoTexture&&j(M),M.version>0&&X.__version!==M.version){let H=M.image;if(H===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(X,M,E);return}}n.activeTexture(33984+E),n.bindTexture(3553,X.__webglTexture)}function R(M,E){let X=i.get(M);if(M.version>0&&X.__version!==M.version){St(X,M,E);return}n.activeTexture(33984+E),n.bindTexture(35866,X.__webglTexture)}function U(M,E){let X=i.get(M);if(M.version>0&&X.__version!==M.version){St(X,M,E);return}n.activeTexture(33984+E),n.bindTexture(32879,X.__webglTexture)}function W(M,E){if(M.image.length!==6)return;let X=i.get(M);if(M.version>0&&X.__version!==M.version){Dt(X,M),n.activeTexture(33984+E),n.bindTexture(34067,X.__webglTexture),t.pixelStorei(37440,M.flipY);let H=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),C=M.image[0]&&M.image[0].isDataTexture,J=[];for(let ht=0;ht<6;ht++)!H&&!C?J[ht]=y(M.image[ht],!1,!0,l):J[ht]=C?M.image[ht].image:M.image[ht];let Q=J[0],pt=m(Q)||a,Y=o.convert(M.format),at=o.convert(M.type),Ct=w(M.internalFormat,Y,at);lt(34067,M,pt);let yt;if(H){for(let ht=0;ht<6;ht++){yt=J[ht].mipmaps;for(let xt=0;xt<yt.length;xt++){let te=yt[xt];M.format!==Be&&M.format!==qn?Y!==null?n.compressedTexImage2D(34069+ht,xt,Ct,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ht,xt,Ct,te.width,te.height,0,Y,at,te.data)}}X.__maxMipLevel=yt.length-1}else{yt=M.mipmaps;for(let ht=0;ht<6;ht++)if(C){n.texImage2D(34069+ht,0,Ct,J[ht].width,J[ht].height,0,Y,at,J[ht].data);for(let xt=0;xt<yt.length;xt++){let ge=yt[xt].image[ht].image;n.texImage2D(34069+ht,xt+1,Ct,ge.width,ge.height,0,Y,at,ge.data)}}else{n.texImage2D(34069+ht,0,Ct,Y,at,J[ht]);for(let xt=0;xt<yt.length;xt++){let te=yt[xt];n.texImage2D(34069+ht,xt+1,Ct,Y,at,te.image[ht])}}X.__maxMipLevel=yt.length}_(M,pt)&&v(34067,M,Q.width,Q.height),X.__version=M.version,M.onUpdate&&M.onUpdate(M)}else n.activeTexture(33984+E),n.bindTexture(34067,X.__webglTexture)}function $(M,E){n.activeTexture(33984+E),n.bindTexture(34067,i.get(M).__webglTexture)}let it={[cn]:10497,[ye]:33071,[is]:33648},ct={[Zt]:9728,[Yn]:9984,[Ra]:9986,[ue]:9729,[Au]:9985,[Hs]:9987};function lt(M,E,X){X?(t.texParameteri(M,10242,it[E.wrapS]),t.texParameteri(M,10243,it[E.wrapT]),(M===32879||M===35866)&&t.texParameteri(M,32882,it[E.wrapR]),t.texParameteri(M,10240,ct[E.magFilter]),t.texParameteri(M,10241,ct[E.minFilter])):(t.texParameteri(M,10242,33071),t.texParameteri(M,10243,33071),(M===32879||M===35866)&&t.texParameteri(M,32882,33071),(E.wrapS!==ye||E.wrapT!==ye)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,10240,T(E.magFilter)),t.texParameteri(M,10241,T(E.minFilter)),E.minFilter!==Zt&&E.minFilter!==ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let H=e.get("EXT_texture_filter_anisotropic");if(H){if(E.type===Tn&&e.get("OES_texture_float_linear")===null||E.type===os&&(a||e.get("OES_texture_half_float_linear"))===null)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(M,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Dt(M,E){M.__webglInit===void 0&&(M.__webglInit=!0,E.addEventListener("dispose",A),M.__webglTexture=t.createTexture(),s.memory.textures++)}function St(M,E,X){let H=3553;E.isDataTexture2DArray&&(H=35866),E.isDataTexture3D&&(H=32879),Dt(M,E),n.activeTexture(33984+X),n.bindTexture(H,M.__webglTexture),t.pixelStorei(37440,E.flipY),t.pixelStorei(37441,E.premultiplyAlpha),t.pixelStorei(3317,E.unpackAlignment);let C=g(E)&&m(E.image)===!1,J=y(E.image,C,!1,h),Q=m(J)||a,pt=o.convert(E.format),Y=o.convert(E.type),at=w(E.internalFormat,pt,Y);lt(H,E,Q);let Ct,yt=E.mipmaps;if(E.isDepthTexture)at=6402,a?E.type===Tn?at=36012:E.type===es?at=33190:E.type===br?at=35056:at=33189:E.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ii&&at===6402&&E.type!==rs&&E.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=rs,Y=o.convert(E.type)),E.format===Er&&at===6402&&(at=34041,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,Y=o.convert(E.type))),n.texImage2D(3553,0,at,J.width,J.height,0,pt,Y,null);else if(E.isDataTexture)if(yt.length>0&&Q){for(let ht=0,xt=yt.length;ht<xt;ht++)Ct=yt[ht],n.texImage2D(3553,ht,at,Ct.width,Ct.height,0,pt,Y,Ct.data);E.generateMipmaps=!1,M.__maxMipLevel=yt.length-1}else n.texImage2D(3553,0,at,J.width,J.height,0,pt,Y,J.data),M.__maxMipLevel=0;else if(E.isCompressedTexture){for(let ht=0,xt=yt.length;ht<xt;ht++)Ct=yt[ht],E.format!==Be&&E.format!==qn?pt!==null?n.compressedTexImage2D(3553,ht,at,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,ht,at,Ct.width,Ct.height,0,pt,Y,Ct.data);M.__maxMipLevel=yt.length-1}else if(E.isDataTexture2DArray)n.texImage3D(35866,0,at,J.width,J.height,J.depth,0,pt,Y,J.data),M.__maxMipLevel=0;else if(E.isDataTexture3D)n.texImage3D(32879,0,at,J.width,J.height,J.depth,0,pt,Y,J.data),M.__maxMipLevel=0;else if(yt.length>0&&Q){for(let ht=0,xt=yt.length;ht<xt;ht++)Ct=yt[ht],n.texImage2D(3553,ht,at,pt,Y,Ct);E.generateMipmaps=!1,M.__maxMipLevel=yt.length-1}else n.texImage2D(3553,0,at,pt,Y,J),M.__maxMipLevel=0;_(E,Q)&&v(H,E,J.width,J.height),M.__version=E.version,E.onUpdate&&E.onUpdate(E)}function jt(M,E,X,H){let C=o.convert(E.texture.format),J=o.convert(E.texture.type),Q=w(E.texture.internalFormat,C,J);n.texImage2D(H,0,Q,E.width,E.height,0,C,J,null),t.bindFramebuffer(36160,M),t.framebufferTexture2D(36160,X,H,i.get(E.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function It(M,E,X){if(t.bindRenderbuffer(36161,M),E.depthBuffer&&!E.stencilBuffer){let H=33189;if(X){let C=E.depthTexture;C&&C.isDepthTexture&&(C.type===Tn?H=36012:C.type===es&&(H=33190));let J=V(E);t.renderbufferStorageMultisample(36161,J,H,E.width,E.height)}else t.renderbufferStorage(36161,H,E.width,E.height);t.framebufferRenderbuffer(36160,36096,36161,M)}else if(E.depthBuffer&&E.stencilBuffer){if(X){let H=V(E);t.renderbufferStorageMultisample(36161,H,35056,E.width,E.height)}else t.renderbufferStorage(36161,34041,E.width,E.height);t.framebufferRenderbuffer(36160,33306,36161,M)}else{let H=o.convert(E.texture.format),C=o.convert(E.texture.type),J=w(E.texture.internalFormat,H,C);if(X){let Q=V(E);t.renderbufferStorageMultisample(36161,Q,J,E.width,E.height)}else t.renderbufferStorage(36161,J,E.width,E.height)}t.bindRenderbuffer(36161,null)}function k(M,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),P(E.depthTexture,0);let H=i.get(E.depthTexture).__webglTexture;if(E.depthTexture.format===Ii)t.framebufferTexture2D(36160,36096,3553,H,0);else if(E.depthTexture.format===Er)t.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function Kt(M){let E=i.get(M),X=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");k(E.__webglFramebuffer,M)}else if(X){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]=t.createRenderbuffer(),It(E.__webglDepthbuffer[H],M,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),It(E.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function Lt(M){let E=i.get(M),X=i.get(M.texture);M.addEventListener("dispose",B),X.__webglTexture=t.createTexture(),s.memory.textures++;let H=M.isWebGLCubeRenderTarget===!0,C=M.isWebGLMultisampleRenderTarget===!0,J=m(M)||a;if(a&&M.texture.format===qn&&(M.texture.type===Tn||M.texture.type===os)&&(M.texture.format=Be,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),H){E.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)E.__webglFramebuffer[Q]=t.createFramebuffer()}else if(E.__webglFramebuffer=t.createFramebuffer(),C)if(a){E.__webglMultisampledFramebuffer=t.createFramebuffer(),E.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,E.__webglColorRenderbuffer);let Q=o.convert(M.texture.format),pt=o.convert(M.texture.type),Y=w(M.texture.internalFormat,Q,pt),at=V(M);t.renderbufferStorageMultisample(36161,at,Y,M.width,M.height),t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,E.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),M.depthBuffer&&(E.__webglDepthRenderbuffer=t.createRenderbuffer(),It(E.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(H){n.bindTexture(34067,X.__webglTexture),lt(34067,M.texture,J);for(let Q=0;Q<6;Q++)jt(E.__webglFramebuffer[Q],M,36064,34069+Q);_(M.texture,J)&&v(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,X.__webglTexture),lt(3553,M.texture,J),jt(E.__webglFramebuffer,M,36064,3553),_(M.texture,J)&&v(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&Kt(M)}function Rt(M){let E=M.texture,X=m(M)||a;if(_(E,X)){let H=M.isWebGLCubeRenderTarget?34067:3553,C=i.get(E).__webglTexture;n.bindTexture(H,C),v(H,E,M.width,M.height),n.bindTexture(H,null)}}function bt(M){if(M.isWebGLMultisampleRenderTarget)if(a){let E=i.get(M);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);let X=M.width,H=M.height,C=16384;M.depthBuffer&&(C|=256),M.stencilBuffer&&(C|=1024),t.blitFramebuffer(0,0,X,H,0,0,X,H,C,9728),t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function V(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(u,M.samples):0}function j(M){let E=s.render.frame;d.get(M)!==E&&(d.set(M,E),M.update())}let Z=!1,ut=!1;function st(M,E){M&&M.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),M=M.texture),P(M,E)}function Et(M,E){M&&M.isWebGLCubeRenderTarget&&(ut===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ut=!0),M=M.texture),M&&M.isCubeTexture||Array.isArray(M.image)&&M.image.length===6?W(M,E):$(M,E)}this.allocateTextureUnit=I,this.resetTextureUnits=O,this.setTexture2D=P,this.setTexture2DArray=R,this.setTexture3D=U,this.setTextureCube=W,this.setTextureCubeDynamic=$,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=bt,this.safeSetTexture2D=st,this.safeSetTextureCube=Et}function hy(t,e,n){let i=n.isWebGL2;function r(o){let s;if(o===so)return 5121;if(o===of)return 32819;if(o===sf)return 32820;if(o===af)return 33635;if(o===ef)return 5120;if(o===nf)return 5122;if(o===rs)return 5123;if(o===rf)return 5124;if(o===es)return 5125;if(o===Tn)return 5126;if(o===os)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===cf)return 6406;if(o===qn)return 6407;if(o===Be)return 6408;if(o===lf)return 6409;if(o===uf)return 6410;if(o===Ii)return 6402;if(o===Er)return 34041;if(o===ff)return 6403;if(o===df)return 36244;if(o===pf)return 33319;if(o===mf)return 33320;if(o===gf)return 36248;if(o===yf)return 36249;if(o===Xc||o===Yc||o===Zc||o===Jc)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Zc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Jc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$c||o===Qc||o===Kc||o===tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===$c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xf)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((o===el||o===nl)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(o===el)return s.COMPRESSED_RGB8_ETC2;if(o===nl)return s.COMPRESSED_RGBA8_ETC2_EAC}if(o===vf||o===_f||o===bf||o===wf||o===Mf||o===Sf||o===Ef||o===Tf||o===Af||o===Lf||o===Rf||o===Cf||o===Pf||o===Df||o===Nf||o===Of||o===Ff||o===Bf||o===Uf||o===zf||o===Gf||o===Hf||o===kf||o===Vf||o===Wf||o===jf||o===qf||o===Xf)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?o:null;if(o===If)return s=e.get("EXT_texture_compression_bptc"),s!==null?o:null;if(o===br)return i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ua(t){ie.call(this),this.cameras=t||[]}Ua.prototype=Object.assign(Object.create(ie.prototype),{constructor:Ua,isArrayCamera:!0});function Qn(){et.call(this),this.type="Group"}Qn.prototype=Object.assign(Object.create(et.prototype),{constructor:Qn,isGroup:!0});function hs(){this._targetRay=null,this._grip=null}Object.assign(hs.prototype,{constructor:hs,getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this},update:function(t,e,n){let i=null,r=null,o=this._targetRay,s=this._grip;return t&&(o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),s!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale)))),o!==null&&(o.visible=i!==null),s!==null&&(s.visible=r!==null),this}});function ju(t,e){let n=this,i=null,r=1,o=null,s="local-floor",a=null,c=[],l=new Map,h=new ie;h.layers.enable(1),h.viewport=new Nt;let u=new ie;u.layers.enable(2),u.viewport=new Nt;let d=[h,u],f=new Ua;f.layers.enable(1),f.layers.enable(2);let p=null,x=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=c[N];return O===void 0&&(O=new hs,c[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=c[N];return O===void 0&&(O=new hs,c[N]=O),O.getGripSpace()};function y(N){let O=l.get(N.inputSource);O&&O.dispatchEvent({type:N.type})}function m(){l.forEach(function(N,O){N.disconnect(O)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function g(N){o=N,q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return i},this.setSession=function(N){if(i=N,i!==null){i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",m);let O=e.getContextAttributes();O.xrCompatible!==!0&&e.makeXRCompatible();let I={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r},P=new XRWebGLLayer(i,e,I);i.updateRenderState({baseLayer:P}),i.requestReferenceSpace(s).then(g),i.addEventListener("inputsourceschange",_)}};function _(N){let O=i.inputSources;for(let I=0;I<c.length;I++)l.set(O[I],c[I]);for(let I=0;I<N.removed.length;I++){let P=N.removed[I],R=l.get(P);R&&(R.dispatchEvent({type:"disconnected",data:P}),l.delete(P))}for(let I=0;I<N.added.length;I++){let P=N.added[I],R=l.get(P);R&&R.dispatchEvent({type:"connected",data:P})}}let v=new b,w=new b;function T(N,O,I){v.setFromMatrixPosition(O.matrixWorld),w.setFromMatrixPosition(I.matrixWorld);let P=v.distanceTo(w),R=O.projectionMatrix.elements,U=I.projectionMatrix.elements,W=R[14]/(R[10]-1),$=R[14]/(R[10]+1),it=(R[9]+1)/R[5],ct=(R[9]-1)/R[5],lt=(R[8]-1)/R[0],Dt=(U[8]+1)/U[0],St=W*lt,jt=W*Dt,It=P/(-lt+Dt),k=It*-lt;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(k),N.translateZ(It),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.getInverse(N.matrixWorld);let Kt=W+It,Lt=$+It,Rt=St-k,bt=jt+(P-k),V=it*$/Lt*Kt,j=ct*$/Lt*Kt;N.projectionMatrix.makePerspective(Rt,bt,V,j,Kt,Lt)}function A(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.getInverse(N.matrixWorld)}this.getCamera=function(N){f.near=u.near=h.near=N.near,f.far=u.far=h.far=N.far,(p!==f.near||x!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,x=f.far);let O=N.parent,I=f.cameras;A(f,O);for(let R=0;R<I.length;R++)A(I[R],O);N.matrixWorld.copy(f.matrixWorld);let P=N.children;for(let R=0,U=P.length;R<U;R++)P[R].updateMatrixWorld(!0);return I.length===2?T(f,h,u):f.projectionMatrix.copy(h.projectionMatrix),f};let B=null;function L(N,O){if(a=O.getViewerPose(o),a!==null){let P=a.views,R=i.renderState.baseLayer;t.setFramebuffer(R.framebuffer);let U=!1;P.length!==f.cameras.length&&(f.cameras.length=0,U=!0);for(let W=0;W<P.length;W++){let $=P[W],it=R.getViewport($),ct=d[W];ct.matrix.fromArray($.transform.matrix),ct.projectionMatrix.fromArray($.projectionMatrix),ct.viewport.set(it.x,it.y,it.width,it.height),W===0&&f.matrix.copy(ct.matrix),U===!0&&f.cameras.push(ct)}}let I=i.inputSources;for(let P=0;P<c.length;P++){let R=c[P],U=I[P];R.update(U,O,o)}B&&B(N,O)}let q=new Fu;q.setAnimationLoop(L),this.setAnimationLoop=function(N){B=N},this.dispose=function(){}}Object.assign(ju.prototype,mn.prototype);function fy(t){function e(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,v,w){g.isMeshBasicMaterial?i(m,g):g.isMeshLambertMaterial?(i(m,g),c(m,g)):g.isMeshToonMaterial?(i(m,g),h(m,g)):g.isMeshPhongMaterial?(i(m,g),l(m,g)):g.isMeshStandardMaterial?(i(m,g,_),g.isMeshPhysicalMaterial?d(m,g,_):u(m,g,_)):g.isMeshMatcapMaterial?(i(m,g),f(m,g)):g.isMeshDepthMaterial?(i(m,g),p(m,g)):g.isMeshDistanceMaterial?(i(m,g),x(m,g)):g.isMeshNormalMaterial?(i(m,g),y(m,g)):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?s(m,g,v,w):g.isSpriteMaterial?a(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(m,g,_){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);let v=g.envMap||_;v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio,m.maxMipLevel.value=t.get(v).__maxMipLevel),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let w;g.map?w=g.map:g.specularMap?w=g.specularMap:g.displacementMap?w=g.displacementMap:g.normalMap?w=g.normalMap:g.bumpMap?w=g.bumpMap:g.roughnessMap?w=g.roughnessMap:g.metalnessMap?w=g.metalnessMap:g.alphaMap?w=g.alphaMap:g.emissiveMap&&(w=g.emissiveMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let T;g.aoMap?T=g.aoMap:g.lightMap&&(T=g.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uv2Transform.value.copy(T.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function s(m,g,_,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=v*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let w;g.map?w=g.map:g.alphaMap&&(w=g.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let _;g.map?_=g.map:g.alphaMap&&(_=g.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function l(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===se&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===se&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===se&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===se&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g,_){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===se&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===se&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),(g.envMap||_)&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){u(m,g,_),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===se&&m.clearcoatNormalScale.value.negate()),m.transparency.value=g.transparency}function f(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===se&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===se&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function x(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function y(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===se&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===se&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Ws(t){t=t||{};let e=t.canvas!==void 0?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,o=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",h=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1,u=null,d=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=xe,this.physicallyCorrectLights=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let f=this,p=!1,x=null,y=0,m=0,g=null,_=null,v=-1,w=null,T=null,A=new Nt,B=new Nt,L=null,q=e.width,N=e.height,O=1,I=null,P=null,R=new Nt(0,0,q,N),U=new Nt(0,0,q,N),W=!1,$=new co,it=new Vm,ct=!1,lt=!1,Dt=new At,St=new b,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return g===null?O:1}let k=n;function Kt(S,F){for(let D=0;D<S.length;D++){let G=S[D],nt=e.getContext(G,F);if(nt!==null)return nt}return null}try{let S={alpha:i,depth:r,stencil:o,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",te,!1),k===null){let F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),k=Kt(F,S),k===null)throw Kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Lt,Rt,bt,V,j,Z,ut,st,Et,M,E,X,H,C,J,Q,pt,Y,at;function Ct(){Lt=new Wm(k),Rt=new km(k,Lt,t),Rt.isWebGL2===!1&&(Lt.get("WEBGL_depth_texture"),Lt.get("OES_texture_float"),Lt.get("OES_texture_half_float"),Lt.get("OES_texture_half_float_linear"),Lt.get("OES_standard_derivatives"),Lt.get("OES_element_index_uint"),Lt.get("OES_vertex_array_object"),Lt.get("ANGLE_instanced_arrays")),Lt.get("OES_texture_float_linear"),Y=new hy(k,Lt,Rt),bt=new ly(k,Lt,Rt),bt.scissor(B.copy(U).multiplyScalar(O).floor()),bt.viewport(A.copy(R).multiplyScalar(O).floor()),V=new Xm(k),j=new $g,Z=new uy(k,Lt,bt,j,Rt,Y,V),ut=new vd(k,Rt),at=new Gm(k,Lt,ut,Rt),st=new jm(k,ut,V,at),Et=new $m(k,st,ut,V),J=new Jm(k),M=new Jg(f,Lt,Rt,at),E=new fy(j),X=new ty,H=new sy,C=new zm(f,bt,Et,a),Q=new Hm(k,Lt,V,Rt),pt=new qm(k,Lt,V,Rt),V.programs=M.programs,f.capabilities=Rt,f.extensions=Lt,f.properties=j,f.renderLists=X,f.state=bt,f.info=V}Ct();let yt=new ju(f,k);this.xr=yt;let ht=new Wu(f,Et,Rt.maxTextureSize);this.shadowMap=ht,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=Lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(q,N,!1))},this.getSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),S=new z),S.set(q,N)},this.setSize=function(S,F,D){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,N=F,e.width=Math.floor(S*O),e.height=Math.floor(F*O),D!==!1&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),S=new z),S.set(q*O,N*O).floor()},this.setDrawingBufferSize=function(S,F,D){q=S,N=F,O=D,e.width=Math.floor(S*D),e.height=Math.floor(F*D),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),S=new Nt),S.copy(A)},this.getViewport=function(S){return S.copy(R)},this.setViewport=function(S,F,D,G){S.isVector4?R.set(S.x,S.y,S.z,S.w):R.set(S,F,D,G),bt.viewport(A.copy(R).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,F,D,G){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,F,D,G),bt.scissor(B.copy(U).multiplyScalar(O).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(S){bt.setScissorTest(W=S)},this.setOpaqueSort=function(S){I=S},this.setTransparentSort=function(S){P=S},this.getClearColor=function(){return C.getClearColor()},this.setClearColor=function(){C.setClearColor.apply(C,arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha.apply(C,arguments)},this.clear=function(S,F,D){let G=0;(S===void 0||S)&&(G|=16384),(F===void 0||F)&&(G|=256),(D===void 0||D)&&(G|=1024),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",te,!1),X.dispose(),H.dispose(),j.dispose(),Et.dispose(),at.dispose(),yt.dispose(),sr.stop()};function xt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,Ct()}function ge(S){let F=S.target;F.removeEventListener("dispose",ge),_h(F)}function _h(S){Fc(S),j.remove(S)}function Fc(S){let F=j.get(S).program;S.program=void 0,F!==void 0&&M.releaseProgram(F)}function bh(S,F){S.render(function(D){f.renderBufferImmediate(D,F)})}this.renderBufferImmediate=function(S,F){at.initAttributes();let D=j.get(S);S.hasPositions&&!D.position&&(D.position=k.createBuffer()),S.hasNormals&&!D.normal&&(D.normal=k.createBuffer()),S.hasUvs&&!D.uv&&(D.uv=k.createBuffer()),S.hasColors&&!D.color&&(D.color=k.createBuffer());let G=F.getAttributes();S.hasPositions&&(k.bindBuffer(34962,D.position),k.bufferData(34962,S.positionArray,35048),at.enableAttribute(G.position),k.vertexAttribPointer(G.position,3,5126,!1,0,0)),S.hasNormals&&(k.bindBuffer(34962,D.normal),k.bufferData(34962,S.normalArray,35048),at.enableAttribute(G.normal),k.vertexAttribPointer(G.normal,3,5126,!1,0,0)),S.hasUvs&&(k.bindBuffer(34962,D.uv),k.bufferData(34962,S.uvArray,35048),at.enableAttribute(G.uv),k.vertexAttribPointer(G.uv,2,5126,!1,0,0)),S.hasColors&&(k.bindBuffer(34962,D.color),k.bufferData(34962,S.colorArray,35048),at.enableAttribute(G.color),k.vertexAttribPointer(G.color,3,5126,!1,0,0)),at.disableUnusedAttributes(),k.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,F,D,G,nt,Pt){F===null&&(F=jt);let Tt=nt.isMesh&&nt.matrixWorld.determinant()<0,dt=Gc(S,F,G,nt);bt.setMaterial(G,Tt);let qt=D.index,kt=D.attributes.position;if(qt===null){if(kt===void 0||kt.count===0)return}else if(qt.count===0)return;let Ht=1;G.wireframe===!0&&(qt=st.getWireframeAttribute(D),Ht=2),(G.morphTargets||G.morphNormals)&&J.update(nt,D,G,dt),at.setup(nt,G,dt,D,qt);let Jt,wt=Q;qt!==null&&(Jt=ut.get(qt),wt=pt,wt.setIndex(Jt));let Xt=qt!==null?qt.count:kt.count,ne=D.drawRange.start*Ht,Ut=D.drawRange.count*Ht,po=Pt!==null?Pt.start*Ht:0,Pe=Pt!==null?Pt.count*Ht:1/0,yn=Math.max(ne,po),Zs=Math.min(Xt,ne+Ut,po+Pe)-1,mo=Math.max(0,Zs-yn+1);if(mo!==0){if(nt.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*It()),wt.setMode(1)):wt.setMode(4);else if(nt.isLine){let ar=G.linewidth;ar===void 0&&(ar=1),bt.setLineWidth(ar*It()),nt.isLineSegments?wt.setMode(1):nt.isLineLoop?wt.setMode(2):wt.setMode(3)}else nt.isPoints?wt.setMode(0):nt.isSprite&&wt.setMode(4);if(nt.isInstancedMesh)wt.renderInstances(D,yn,mo,nt.count);else if(D.isInstancedBufferGeometry){let ar=Math.min(D.instanceCount,D._maxInstanceCount);wt.renderInstances(D,yn,mo,ar)}else wt.render(yn,mo)}},this.compile=function(S,F){d=H.get(S,F),d.init(),S.traverse(function(G){G.isLight&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(F);let D=new WeakMap;S.traverse(function(G){let nt=G.material;if(nt)if(Array.isArray(nt))for(let Pt=0;Pt<nt.length;Pt++){let Tt=nt[Pt];D.has(Tt)===!1&&(tn(Tt,S,G),D.set(Tt))}else D.has(nt)===!1&&(tn(nt,S,G),D.set(nt))})};let Ys=null;function wh(S){yt.isPresenting||Ys&&Ys(S)}let sr=new Fu;sr.setAnimationLoop(wh),typeof window<"u"&&sr.setContext(window),this.setAnimationLoop=function(S){Ys=S,yt.setAnimationLoop(S),S===null?sr.stop():sr.start()},this.render=function(S,F){let D,G;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),D=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),G=arguments[3]),F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;at.resetDefaultState(),v=-1,w=null,S.autoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(F=yt.getCamera(F)),S.isScene===!0&&S.onBeforeRender(f,S,F,D||g),d=H.get(S,F),d.init(),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Dt),lt=this.localClippingEnabled,ct=it.init(this.clippingPlanes,lt,F),u=X.get(S,F),u.init(),Bc(S,F,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(I,P),ct===!0&&it.beginShadows();let nt=d.state.shadowsArray;ht.render(nt,S,F),d.setupLights(F),ct===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),D!==void 0&&this.setRenderTarget(D),C.render(u,S,F,G);let Pt=u.opaque,Tt=u.transparent;Pt.length>0&&Uc(Pt,S,F),Tt.length>0&&Uc(Tt,S,F),S.isScene===!0&&S.onAfterRender(f,S,F),g!==null&&(Z.updateRenderTargetMipmap(g),Z.updateMultisampleRenderTarget(g)),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1),u=null,d=null};function Bc(S,F,D,G){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)D=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){G&&St.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Dt);let Tt=Et.update(S),dt=S.material;dt.visible&&u.push(S,Tt,dt,D,St.z,null)}}else if(S.isImmediateRenderObject)G&&St.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Dt),u.push(S,null,S.material,D,St.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==V.render.frame&&(S.skeleton.update(),S.skeleton.frame=V.render.frame),!S.frustumCulled||$.intersectsObject(S))){G&&St.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Dt);let Tt=Et.update(S),dt=S.material;if(Array.isArray(dt)){let qt=Tt.groups;for(let kt=0,Ht=qt.length;kt<Ht;kt++){let Jt=qt[kt],wt=dt[Jt.materialIndex];wt&&wt.visible&&u.push(S,Tt,wt,D,St.z,Jt)}}else dt.visible&&u.push(S,Tt,dt,D,St.z,null)}}let Pt=S.children;for(let Tt=0,dt=Pt.length;Tt<dt;Tt++)Bc(Pt[Tt],F,D,G)}function Uc(S,F,D){let G=F.isScene===!0?F.overrideMaterial:null;for(let nt=0,Pt=S.length;nt<Pt;nt++){let Tt=S[nt],dt=Tt.object,qt=Tt.geometry,kt=G===null?Tt.material:G,Ht=Tt.group;if(D.isArrayCamera){T=D;let Jt=D.cameras;for(let wt=0,Xt=Jt.length;wt<Xt;wt++){let ne=Jt[wt];dt.layers.test(ne.layers)&&(bt.viewport(A.copy(ne.viewport)),d.setupLights(ne),zc(dt,F,ne,qt,kt,Ht))}}else T=null,zc(dt,F,D,qt,kt,Ht)}}function zc(S,F,D,G,nt,Pt){if(S.onBeforeRender(f,F,D,G,nt,Pt),d=H.get(F,T||D),S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){let Tt=Gc(D,F,nt,S);bt.setMaterial(nt),at.reset(),bh(S,Tt)}else f.renderBufferDirect(D,F,G,nt,S,Pt);S.onAfterRender(f,F,D,G,nt,Pt),d=H.get(F,T||D)}function tn(S,F,D){F.isScene!==!0&&(F=jt);let G=j.get(S),nt=d.state.lights,Pt=d.state.shadowsArray,Tt=nt.state.version,dt=M.getParameters(S,nt.state,Pt,F,it.numPlanes,it.numIntersection,D),qt=M.getProgramCacheKey(dt),kt=G.program,Ht=!0;if(kt===void 0)S.addEventListener("dispose",ge);else if(kt.cacheKey!==qt)Fc(S);else if(G.lightsStateVersion!==Tt)G.lightsStateVersion=Tt,Ht=!1;else{if(dt.shaderID!==void 0)return;Ht=!1}Ht&&(kt=M.acquireProgram(dt,qt),G.program=kt,G.uniforms=dt.uniforms,G.outputEncoding=dt.outputEncoding,S.program=kt);let Jt=kt.getAttributes();if(S.morphTargets){S.numSupportedMorphTargets=0;for(let Ut=0;Ut<f.maxMorphTargets;Ut++)Jt["morphTarget"+Ut]>=0&&S.numSupportedMorphTargets++}if(S.morphNormals){S.numSupportedMorphNormals=0;for(let Ut=0;Ut<f.maxMorphNormals;Ut++)Jt["morphNormal"+Ut]>=0&&S.numSupportedMorphNormals++}let wt=G.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(G.numClippingPlanes=it.numPlanes,G.numIntersection=it.numIntersection,wt.clippingPlanes=it.uniform),G.environment=S.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.needsLights=Sh(S),G.lightsStateVersion=Tt,G.needsLights&&(wt.ambientLightColor.value=nt.state.ambient,wt.lightProbe.value=nt.state.probe,wt.directionalLights.value=nt.state.directional,wt.directionalLightShadows.value=nt.state.directionalShadow,wt.spotLights.value=nt.state.spot,wt.spotLightShadows.value=nt.state.spotShadow,wt.rectAreaLights.value=nt.state.rectArea,wt.pointLights.value=nt.state.point,wt.pointLightShadows.value=nt.state.pointShadow,wt.hemisphereLights.value=nt.state.hemi,wt.directionalShadowMap.value=nt.state.directionalShadowMap,wt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,wt.spotShadowMap.value=nt.state.spotShadowMap,wt.spotShadowMatrix.value=nt.state.spotShadowMatrix,wt.pointShadowMap.value=nt.state.pointShadowMap,wt.pointShadowMatrix.value=nt.state.pointShadowMatrix);let Xt=G.program.getUniforms(),ne=Rn.seqWithValue(Xt.seq,wt);G.uniformsList=ne}function Gc(S,F,D,G){F.isScene!==!0&&(F=jt),Z.resetTextureUnits();let nt=F.fog,Pt=D.isMeshStandardMaterial?F.environment:null,Tt=g===null?f.outputEncoding:g.texture.encoding,dt=j.get(D),qt=d.state.lights;if(ct===!0&&(lt===!0||S!==w)){let Ut=S===w&&D.id===v;it.setState(D.clippingPlanes,D.clipIntersection,D.clipShadows,S,dt,Ut)}D.version===dt.__version?(dt.program===void 0||D.fog&&dt.fog!==nt||dt.environment!==Pt||dt.needsLights&&dt.lightsStateVersion!==qt.state.version||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==it.numPlanes||dt.numIntersection!==it.numIntersection)||dt.outputEncoding!==Tt)&&tn(D,F,G):(tn(D,F,G),dt.__version=D.version);let kt=!1,Ht=!1,Jt=!1,wt=dt.program,Xt=wt.getUniforms(),ne=dt.uniforms;if(bt.useProgram(wt.program)&&(kt=!0,Ht=!0,Jt=!0),D.id!==v&&(v=D.id,Ht=!0),kt||w!==S){if(Xt.setValue(k,"projectionMatrix",S.projectionMatrix),Rt.logarithmicDepthBuffer&&Xt.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Ht=!0,Jt=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let Ut=Xt.map.cameraPosition;Ut!==void 0&&Ut.setValue(k,St.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Xt.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||D.skinning)&&Xt.setValue(k,"viewMatrix",S.matrixWorldInverse)}if(D.skinning){Xt.setOptional(k,G,"bindMatrix"),Xt.setOptional(k,G,"bindMatrixInverse");let Ut=G.skeleton;if(Ut){let po=Ut.bones;if(Rt.floatVertexTextures){if(Ut.boneTexture===void 0){let Pe=Math.sqrt(po.length*4);Pe=Mt.ceilPowerOfTwo(Pe),Pe=Math.max(Pe,4);let yn=new Float32Array(Pe*Pe*4);yn.set(Ut.boneMatrices);let Zs=new Ui(yn,Pe,Pe,Be,Tn);Ut.boneMatrices=yn,Ut.boneTexture=Zs,Ut.boneTextureSize=Pe}Xt.setValue(k,"boneTexture",Ut.boneTexture,Z),Xt.setValue(k,"boneTextureSize",Ut.boneTextureSize)}else Xt.setOptional(k,Ut,"boneMatrices")}}return(Ht||dt.receiveShadow!==G.receiveShadow)&&(dt.receiveShadow=G.receiveShadow,Xt.setValue(k,"receiveShadow",G.receiveShadow)),Ht&&(Xt.setValue(k,"toneMappingExposure",f.toneMappingExposure),dt.needsLights&&Mh(ne,Jt),nt&&D.fog&&E.refreshFogUniforms(ne,nt),E.refreshMaterialUniforms(ne,D,Pt,O,N),ne.ltc_1!==void 0&&(ne.ltc_1.value=K.LTC_1),ne.ltc_2!==void 0&&(ne.ltc_2.value=K.LTC_2),Rn.upload(k,dt.uniformsList,ne,Z)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Rn.upload(k,dt.uniformsList,ne,Z),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Xt.setValue(k,"center",G.center),Xt.setValue(k,"modelViewMatrix",G.modelViewMatrix),Xt.setValue(k,"normalMatrix",G.normalMatrix),Xt.setValue(k,"modelMatrix",G.matrixWorld),wt}function Mh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Sh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.setFramebuffer=function(S){x!==S&&g===null&&k.bindFramebuffer(36160,S),x=S},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return g},this.setRenderTarget=function(S,F,D){g=S,y=F,m=D,S&&j.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S);let G=x,nt=!1;if(S){let Pt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(G=Pt[F||0],nt=!0):S.isWebGLMultisampleRenderTarget?G=j.get(S).__webglMultisampledFramebuffer:G=Pt,A.copy(S.viewport),B.copy(S.scissor),L=S.scissorTest}else A.copy(R).multiplyScalar(O).floor(),B.copy(U).multiplyScalar(O).floor(),L=W;if(_!==G&&(k.bindFramebuffer(36160,G),_=G),bt.viewport(A),bt.scissor(B),bt.setScissorTest(L),nt){let Pt=j.get(S.texture);k.framebufferTexture2D(36160,36064,34069+(F||0),Pt.__webglTexture,D||0)}},this.readRenderTargetPixels=function(S,F,D,G,nt,Pt,Tt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(dt=dt[Tt]),dt){let qt=!1;dt!==_&&(k.bindFramebuffer(36160,dt),qt=!0);try{let kt=S.texture,Ht=kt.format,Jt=kt.type;if(Ht!==Be&&Y.convert(Ht)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt!==so&&Y.convert(Jt)!==k.getParameter(35738)&&!(Jt===Tn&&(Rt.isWebGL2||Lt.get("OES_texture_float")||Lt.get("WEBGL_color_buffer_float")))&&!(Jt===os&&(Rt.isWebGL2?Lt.get("EXT_color_buffer_float"):Lt.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k.checkFramebufferStatus(36160)===36053?F>=0&&F<=S.width-G&&D>=0&&D<=S.height-nt&&k.readPixels(F,D,G,nt,Y.convert(Ht),Y.convert(Jt),Pt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{qt&&k.bindFramebuffer(36160,_)}}},this.copyFramebufferToTexture=function(S,F,D){D===void 0&&(D=0);let G=Math.pow(2,-D),nt=Math.floor(F.image.width*G),Pt=Math.floor(F.image.height*G),Tt=Y.convert(F.format);Z.setTexture2D(F,0),k.copyTexImage2D(3553,D,Tt,S.x,S.y,nt,Pt,0),bt.unbindTexture()},this.copyTextureToTexture=function(S,F,D,G){G===void 0&&(G=0);let nt=F.image.width,Pt=F.image.height,Tt=Y.convert(D.format),dt=Y.convert(D.type);Z.setTexture2D(D,0),k.pixelStorei(37440,D.flipY),k.pixelStorei(37441,D.premultiplyAlpha),k.pixelStorei(3317,D.unpackAlignment),F.isDataTexture?k.texSubImage2D(3553,G,S.x,S.y,nt,Pt,Tt,dt,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(3553,G,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Tt,F.mipmaps[0].data):k.texSubImage2D(3553,G,S.x,S.y,Tt,dt,F.image),G===0&&D.generateMipmaps&&k.generateMipmap(3553),bt.unbindTexture()},this.initTexture=function(S){Z.setTexture2D(S,0),bt.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Al(t){Ws.call(this,t)}Al.prototype=Object.assign(Object.create(Ws.prototype),{constructor:Al,isWebGL1Renderer:!0});function Kn(t,e){this.name="",this.color=new rt(t),this.density=e!==void 0?e:25e-5}Object.assign(Kn.prototype,{isFogExp2:!0,clone:function(){return new Kn(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function za(t,e,n){this.name="",this.color=new rt(t),this.near=e!==void 0?e:1,this.far=n!==void 0?n:1e3}Object.assign(za.prototype,{isFog:!0,clone:function(){return new za(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function Ee(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mt.generateUUID()}Object.defineProperty(Ee.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Ee.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mt.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new Ee(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mt.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Gn=new b;function ti(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(ti.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(ti.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)Gn.x=this.getX(e),Gn.y=this.getY(e),Gn.z=this.getZ(e),Gn.applyMatrix4(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new mt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ti(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function ei(t){gt.call(this),this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}ei.prototype=Object.create(gt.prototype);ei.prototype.constructor=ei;ei.prototype.isSpriteMaterial=!0;ei.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var _i,dr=new b,bi=new b,wi=new b,Mi=new z,pr=new z,qu=new At,Po=new b,mr=new b,Do=new b,Ll=new z,va=new z,Rl=new z;function Ga(t){if(et.call(this),this.type="Sprite",_i===void 0){_i=new ot;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ee(e,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new ti(n,3,0,!1)),_i.setAttribute("uv",new ti(n,2,3,!1))}this.geometry=_i,this.material=t!==void 0?t:new ei,this.center=new z(.5,.5)}Ga.prototype=Object.assign(Object.create(et.prototype),{constructor:Ga,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-wi.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Io(Po.set(-.5,-.5,0),wi,o,bi,i,r),Io(mr.set(.5,-.5,0),wi,o,bi,i,r),Io(Do.set(.5,.5,0),wi,o,bi,i,r),Ll.set(0,0),va.set(1,0),Rl.set(1,1);let s=t.ray.intersectTriangle(Po,mr,Do,!1,dr);if(s===null&&(Io(mr.set(-.5,.5,0),wi,o,bi,i,r),va.set(0,1),s=t.ray.intersectTriangle(Po,Do,mr,!1,dr),s===null))return;let a=t.ray.origin.distanceTo(dr);a<t.near||a>t.far||e.push({distance:a,point:dr.clone(),uv:ce.getUV(dr,Po,mr,Do,Ll,va,Rl,new z),face:null,object:this})},copy:function(t){return et.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Io(t,e,n,i,r,o){Mi.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(pr.x=o*Mi.x-r*Mi.y,pr.y=r*Mi.x+o*Mi.y):pr.copy(Mi),t.copy(e),t.x+=pr.x,t.y+=pr.y,t.applyMatrix4(qu)}var No=new b,Cl=new b;function fs(){et.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}fs.prototype=Object.assign(Object.create(et.prototype),{constructor:fs,isLOD:!0,copy:function(t){et.prototype.copy.call(this,t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e){e===void 0&&(e=0),e=Math.abs(e);let n=this.levels,i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){No.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(No);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){let e=this.levels;if(e.length>1){No.setFromMatrixPosition(t.matrixWorld),Cl.setFromMatrixPosition(this.matrixWorld);let n=No.distanceTo(Cl)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){let e=et.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance})}return e}});function Ha(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),zt.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new At,this.bindMatrixInverse=new At}Ha.prototype=Object.assign(Object.create(zt.prototype),{constructor:Ha,isSkinnedMesh:!0,copy:function(t){return zt.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let t=new Nt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){zt.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let t=new b,e=new Nt,n=new Nt,i=new b,r=new At;return function(o,s){let a=this.skeleton,c=this.geometry;e.fromBufferAttribute(c.attributes.skinIndex,o),n.fromBufferAttribute(c.attributes.skinWeight,o),t.fromBufferAttribute(c.attributes.position,o).applyMatrix4(this.bindMatrix),s.set(0,0,0);for(let l=0;l<4;l++){let h=n.getComponent(l);if(h!==0){let u=e.getComponent(l);r.multiplyMatrices(a.bones[u].matrixWorld,a.boneInverses[u]),s.addScaledVector(i.copy(t).applyMatrix4(r),h)}}return s.applyMatrix4(this.bindMatrixInverse)}}()});var Pl=new At,dy=new At;function ka(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,e===void 0)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new At)}}Object.assign(ka.prototype,{calculateInverses:function(){this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++){let n=new At;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.getInverse(this.boneInverses[t])}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let s=t[r]?t[r].matrixWorld:dy;Pl.multiplyMatrices(s,e[r]),Pl.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new ka(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Dl(){et.call(this),this.type="Bone"}Dl.prototype=Object.assign(Object.create(et.prototype),{constructor:Dl,isBone:!0});var Il=new At,Nl=new At,Oo=[],gr=new zt;function Va(t,e,n){zt.call(this,t,e),this.instanceMatrix=new mt(new Float32Array(n*16),16),this.count=n,this.frustumCulled=!1}Va.prototype=Object.assign(Object.create(zt.prototype),{constructor:Va,isInstancedMesh:!0,copy:function(t){return zt.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){let n=this.matrixWorld,i=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Il),Nl.multiplyMatrices(n,Il),gr.matrixWorld=Nl,gr.raycast(t,Oo);for(let o=0,s=Oo.length;o<s;o++){let a=Oo[o];a.instanceId=r,a.object=this,e.push(a)}Oo.length=0}},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){}});function Qt(t){gt.call(this),this.type="LineBasicMaterial",this.color=new rt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}Qt.prototype=Object.create(gt.prototype);Qt.prototype.constructor=Qt;Qt.prototype.isLineBasicMaterial=!0;Qt.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var Ol=new b,Fl=new b,Bl=new At,Fo=new ir,Bo=new gn;function Re(t,e,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),et.call(this),this.type="Line",this.geometry=t!==void 0?t:new ot,this.material=e!==void 0?e:new Qt,this.updateMorphTargets()}Re.prototype=Object.assign(Object.create(et.prototype),{constructor:Re,isLine:!0,copy:function(t){return et.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ol.fromBufferAttribute(e,i-1),Fl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ol.distanceTo(Fl);t.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;Bl.getInverse(i),Fo.copy(t.ray).applyMatrix4(Bl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,a=new b,c=new b,l=new b,h=new b,u=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){let d=n.index,p=n.attributes.position.array;if(d!==null){let x=d.array;for(let y=0,m=x.length-1;y<m;y+=u){let g=x[y],_=x[y+1];if(a.fromArray(p,g*3),c.fromArray(p,_*3),Fo.distanceSqToSegment(a,c,h,l)>s)continue;h.applyMatrix4(this.matrixWorld);let w=t.ray.origin.distanceTo(h);w<t.near||w>t.far||e.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let x=0,y=p.length/3-1;x<y;x+=u){if(a.fromArray(p,3*x),c.fromArray(p,3*x+3),Fo.distanceSqToSegment(a,c,h,l)>s)continue;h.applyMatrix4(this.matrixWorld);let g=t.ray.origin.distanceTo(h);g<t.near||g>t.far||e.push({distance:g,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){let d=n.vertices,f=d.length;for(let p=0;p<f-1;p+=u){if(Fo.distanceSqToSegment(d[p],d[p+1],h,l)>s)continue;h.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(h);y<t.near||y>t.far||e.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Uo=new b,zo=new b;function ee(t,e){Re.call(this,t,e),this.type="LineSegments"}ee.prototype=Object.assign(Object.create(Re.prototype),{constructor:ee,isLineSegments:!0,computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Uo.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uo.distanceTo(zo);t.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)Uo.copy(e[i]),zo.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uo.distanceTo(zo)}return this}});function Wa(t,e){Re.call(this,t,e),this.type="LineLoop"}Wa.prototype=Object.assign(Object.create(Re.prototype),{constructor:Wa,isLineLoop:!0});function ni(t){gt.call(this),this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}ni.prototype=Object.create(gt.prototype);ni.prototype.constructor=ni;ni.prototype.isPointsMaterial=!0;ni.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var Ul=new At,ja=new ir,Go=new gn,Ho=new b;function Ir(t,e){et.call(this),this.type="Points",this.geometry=t!==void 0?t:new ot,this.material=e!==void 0?e:new ni,this.updateMorphTargets()}Ir.prototype=Object.assign(Object.create(et.prototype),{constructor:Ir,isPoints:!0,copy:function(t){return et.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;Ul.getInverse(i),ja.copy(t.ray).applyMatrix4(Ul);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position.array;if(a!==null){let h=a.array;for(let u=0,d=h.length;u<d;u++){let f=h[u];Ho.fromArray(l,f*3),_a(Ho,f,s,i,t,e,this)}}else for(let h=0,u=l.length/3;h<u;h++)Ho.fromArray(l,h*3),_a(Ho,h,s,i,t,e,this)}else{let a=n.vertices;for(let c=0,l=a.length;c<l;c++)_a(a[c],c,s,i,t,e,this)}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function _a(t,e,n,i,r,o,s){let a=ja.distanceSqToPoint(t);if(a<n){let c=new b;ja.closestPointToPoint(t,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:s})}}function zl(t,e,n,i,r,o,s,a,c){Ft.call(this,t,e,n,i,r,o,s,a,c),this.format=s!==void 0?s:qn,this.minFilter=o!==void 0?o:ue,this.magFilter=r!==void 0?r:ue,this.generateMipmaps=!1}zl.prototype=Object.assign(Object.create(Ft.prototype),{constructor:zl,isVideoTexture:!0,update:function(){let t=this.image;t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Nr(t,e,n,i,r,o,s,a,c,l,h,u){Ft.call(this,null,o,s,a,c,l,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Nr.prototype=Object.create(Ft.prototype);Nr.prototype.constructor=Nr;Nr.prototype.isCompressedTexture=!0;function ds(t,e,n,i,r,o,s,a,c){Ft.call(this,t,e,n,i,r,o,s,a,c),this.needsUpdate=!0}ds.prototype=Object.create(Ft.prototype);ds.prototype.constructor=ds;ds.prototype.isCanvasTexture=!0;function ps(t,e,n,i,r,o,s,a,c,l){if(l=l!==void 0?l:Ii,l!==Ii&&l!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Ii&&(n=rs),n===void 0&&l===Er&&(n=br),Ft.call(this,null,i,r,o,s,a,l,n,c),this.image={width:t,height:e},this.magFilter=s!==void 0?s:Zt,this.minFilter=a!==void 0?a:Zt,this.flipY=!1,this.generateMipmaps=!1}ps.prototype=Object.create(Ft.prototype);ps.prototype.constructor=ps;ps.prototype.isDepthTexture=!0;function ms(t){ot.call(this),this.type="WireframeGeometry";let e=[],n=[0,0],i={},r=["a","b","c"];if(t&&t.isGeometry){let o=t.faces;for(let s=0,a=o.length;s<a;s++){let c=o[s];for(let l=0;l<3;l++){let h=c[r[l]],u=c[r[(l+1)%3]];n[0]=Math.min(h,u),n[1]=Math.max(h,u);let d=n[0]+","+n[1];i[d]===void 0&&(i[d]={index1:n[0],index2:n[1]})}}for(let s in i){let a=i[s],c=t.vertices[a.index1];e.push(c.x,c.y,c.z),c=t.vertices[a.index2],e.push(c.x,c.y,c.z)}}else if(t&&t.isBufferGeometry){let o=new b;if(t.index!==null){let s=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let y=0;y<3;y++){let m=a.getX(p+y),g=a.getX(p+(y+1)%3);n[0]=Math.min(m,g),n[1]=Math.max(m,g);let _=n[0]+","+n[1];i[_]===void 0&&(i[_]={index1:n[0],index2:n[1]})}}for(let l in i){let h=i[l];o.fromBufferAttribute(s,h.index1),e.push(o.x,o.y,o.z),o.fromBufferAttribute(s,h.index2),e.push(o.x,o.y,o.z)}}else{let s=t.attributes.position;for(let a=0,c=s.count/3;a<c;a++)for(let l=0;l<3;l++){let h=3*a+l;o.fromBufferAttribute(s,h),e.push(o.x,o.y,o.z);let u=3*a+(l+1)%3;o.fromBufferAttribute(s,u),e.push(o.x,o.y,o.z)}}}this.setAttribute("position",new tt(e,3))}ms.prototype=Object.create(ot.prototype);ms.prototype.constructor=ms;function gs(t,e,n){vt.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new Or(t,e,n)),this.mergeVertices()}gs.prototype=Object.create(vt.prototype);gs.prototype.constructor=gs;function Or(t,e,n){ot.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};let i=[],r=[],o=[],s=[],a=1e-5,c=new b,l=new b,h=new b,u=new b,d=new b;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=e+1;for(let p=0;p<=n;p++){let x=p/n;for(let y=0;y<=e;y++){let m=y/e;t(m,x,l),r.push(l.x,l.y,l.z),m-a>=0?(t(m-a,x,h),u.subVectors(l,h)):(t(m+a,x,h),u.subVectors(h,l)),x-a>=0?(t(m,x-a,h),d.subVectors(l,h)):(t(m,x+a,h),d.subVectors(h,l)),c.crossVectors(u,d).normalize(),o.push(c.x,c.y,c.z),s.push(m,x)}}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let y=p*f+x,m=p*f+x+1,g=(p+1)*f+x+1,_=(p+1)*f+x;i.push(y,m,_),i.push(m,g,_)}this.setIndex(i),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(s,2))}Or.prototype=Object.create(ot.prototype);Or.prototype.constructor=Or;function ys(t,e,n,i){vt.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i},this.fromBufferGeometry(new Me(t,e,n,i)),this.mergeVertices()}ys.prototype=Object.create(vt.prototype);ys.prototype.constructor=ys;function Me(t,e,n,i){ot.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i},n=n||1,i=i||0;let r=[],o=[];s(i),c(n),l(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(m){let g=new b,_=new b,v=new b;for(let w=0;w<e.length;w+=3)d(e[w+0],g),d(e[w+1],_),d(e[w+2],v),a(g,_,v,m)}function a(m,g,_,v){let w=Math.pow(2,v),T=[];for(let A=0;A<=w;A++){T[A]=[];let B=m.clone().lerp(_,A/w),L=g.clone().lerp(_,A/w),q=w-A;for(let N=0;N<=q;N++)N===0&&A===w?T[A][N]=B:T[A][N]=B.clone().lerp(L,N/q)}for(let A=0;A<w;A++)for(let B=0;B<2*(w-A)-1;B++){let L=Math.floor(B/2);B%2===0?(u(T[A][L+1]),u(T[A+1][L]),u(T[A][L])):(u(T[A][L+1]),u(T[A+1][L+1]),u(T[A+1][L]))}}function c(m){let g=new b;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(m),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z}function l(){let m=new b;for(let g=0;g<r.length;g+=3){m.x=r[g+0],m.y=r[g+1],m.z=r[g+2];let _=x(m)/2/Math.PI+.5,v=y(m)/Math.PI+.5;o.push(_,1-v)}f(),h()}function h(){for(let m=0;m<o.length;m+=6){let g=o[m+0],_=o[m+2],v=o[m+4],w=Math.max(g,_,v),T=Math.min(g,_,v);w>.9&&T<.1&&(g<.2&&(o[m+0]+=1),_<.2&&(o[m+2]+=1),v<.2&&(o[m+4]+=1))}}function u(m){r.push(m.x,m.y,m.z)}function d(m,g){let _=m*3;g.x=t[_+0],g.y=t[_+1],g.z=t[_+2]}function f(){let m=new b,g=new b,_=new b,v=new b,w=new z,T=new z,A=new z;for(let B=0,L=0;B<r.length;B+=9,L+=6){m.set(r[B+0],r[B+1],r[B+2]),g.set(r[B+3],r[B+4],r[B+5]),_.set(r[B+6],r[B+7],r[B+8]),w.set(o[L+0],o[L+1]),T.set(o[L+2],o[L+3]),A.set(o[L+4],o[L+5]),v.copy(m).add(g).add(_).divideScalar(3);let q=x(v);p(w,L+0,m,q),p(T,L+2,g,q),p(A,L+4,_,q)}}function p(m,g,_,v){v<0&&m.x===1&&(o[g]=m.x-1),_.x===0&&_.z===0&&(o[g]=v/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function y(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}Me.prototype=Object.create(ot.prototype);Me.prototype.constructor=Me;function xs(t,e){vt.call(this),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Fr(t,e)),this.mergeVertices()}xs.prototype=Object.create(vt.prototype);xs.prototype.constructor=xs;function Fr(t,e){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];Me.call(this,n,i,t,e),this.type="TetrahedronBufferGeometry",this.parameters={radius:t,detail:e}}Fr.prototype=Object.create(Me.prototype);Fr.prototype.constructor=Fr;function vs(t,e){vt.call(this),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Gi(t,e)),this.mergeVertices()}vs.prototype=Object.create(vt.prototype);vs.prototype.constructor=vs;function Gi(t,e){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Me.call(this,n,i,t,e),this.type="OctahedronBufferGeometry",this.parameters={radius:t,detail:e}}Gi.prototype=Object.create(Me.prototype);Gi.prototype.constructor=Gi;function _s(t,e){vt.call(this),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Br(t,e)),this.mergeVertices()}_s.prototype=Object.create(vt.prototype);_s.prototype.constructor=_s;function Br(t,e){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Me.call(this,i,r,t,e),this.type="IcosahedronBufferGeometry",this.parameters={radius:t,detail:e}}Br.prototype=Object.create(Me.prototype);Br.prototype.constructor=Br;function bs(t,e){vt.call(this),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Ur(t,e)),this.mergeVertices()}bs.prototype=Object.create(vt.prototype);bs.prototype.constructor=bs;function Ur(t,e){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Me.call(this,r,o,t,e),this.type="DodecahedronBufferGeometry",this.parameters={radius:t,detail:e}}Ur.prototype=Object.create(Me.prototype);Ur.prototype.constructor=Ur;function ws(t,e,n,i,r,o){vt.call(this),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r},o!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");let s=new Hi(t,e,n,i,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals,this.fromBufferGeometry(s),this.mergeVertices()}ws.prototype=Object.create(vt.prototype);ws.prototype.constructor=ws;function Hi(t,e,n,i,r){ot.call(this),this.type="TubeBufferGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r},e=e||64,n=n||1,i=i||8,r=r||!1;let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let s=new b,a=new b,c=new z,l=new b,h=[],u=[],d=[],f=[];p(),this.setIndex(f),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function p(){for(let g=0;g<e;g++)x(g);x(r===!1?e:0),m(),y()}function x(g){l=t.getPointAt(g/e,l);let _=o.normals[g],v=o.binormals[g];for(let w=0;w<=i;w++){let T=w/i*Math.PI*2,A=Math.sin(T),B=-Math.cos(T);a.x=B*_.x+A*v.x,a.y=B*_.y+A*v.y,a.z=B*_.z+A*v.z,a.normalize(),u.push(a.x,a.y,a.z),s.x=l.x+n*a.x,s.y=l.y+n*a.y,s.z=l.z+n*a.z,h.push(s.x,s.y,s.z)}}function y(){for(let g=1;g<=e;g++)for(let _=1;_<=i;_++){let v=(i+1)*(g-1)+(_-1),w=(i+1)*g+(_-1),T=(i+1)*g+_,A=(i+1)*(g-1)+_;f.push(v,w,A),f.push(w,T,A)}}function m(){for(let g=0;g<=e;g++)for(let _=0;_<=i;_++)c.x=g/e,c.y=_/i,d.push(c.x,c.y)}}Hi.prototype=Object.create(ot.prototype);Hi.prototype.constructor=Hi;Hi.prototype.toJSON=function(){let t=ot.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t};function Ms(t,e,n,i,r,o,s){vt.call(this),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},s!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new zr(t,e,n,i,r,o)),this.mergeVertices()}Ms.prototype=Object.create(vt.prototype);Ms.prototype.constructor=Ms;function zr(t,e,n,i,r,o){ot.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},t=t||1,e=e||.4,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,o=o||3;let s=[],a=[],c=[],l=[],h=new b,u=new b,d=new b,f=new b,p=new b,x=new b,y=new b;for(let g=0;g<=n;++g){let _=g/n*r*Math.PI*2;m(_,r,o,t,d),m(_+.01,r,o,t,f),x.subVectors(f,d),y.addVectors(f,d),p.crossVectors(x,y),y.crossVectors(p,x),p.normalize(),y.normalize();for(let v=0;v<=i;++v){let w=v/i*Math.PI*2,T=-e*Math.cos(w),A=e*Math.sin(w);h.x=d.x+(T*y.x+A*p.x),h.y=d.y+(T*y.y+A*p.y),h.z=d.z+(T*y.z+A*p.z),a.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/n),l.push(v/i)}}for(let g=1;g<=n;g++)for(let _=1;_<=i;_++){let v=(i+1)*(g-1)+(_-1),w=(i+1)*g+(_-1),T=(i+1)*g+_,A=(i+1)*(g-1)+_;s.push(v,w,A),s.push(w,T,A)}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2));function m(g,_,v,w,T){let A=Math.cos(g),B=Math.sin(g),L=v/_*g,q=Math.cos(L);T.x=w*(2+q)*.5*A,T.y=w*(2+q)*B*.5,T.z=w*Math.sin(L)*.5}}zr.prototype=Object.create(ot.prototype);zr.prototype.constructor=zr;function Ss(t,e,n,i,r){vt.call(this),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new Gr(t,e,n,i,r)),this.mergeVertices()}Ss.prototype=Object.create(vt.prototype);Ss.prototype.constructor=Ss;function Gr(t,e,n,i,r){ot.call(this),this.type="TorusBufferGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},t=t||1,e=e||.4,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;let o=[],s=[],a=[],c=[],l=new b,h=new b,u=new b;for(let d=0;d<=n;d++)for(let f=0;f<=i;f++){let p=f/i*r,x=d/n*Math.PI*2;h.x=(t+e*Math.cos(x))*Math.cos(p),h.y=(t+e*Math.cos(x))*Math.sin(p),h.z=e*Math.sin(x),s.push(h.x,h.y,h.z),l.x=t*Math.cos(p),l.y=t*Math.sin(p),u.subVectors(h,l).normalize(),a.push(u.x,u.y,u.z),c.push(f/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=i;f++){let p=(i+1)*d+f-1,x=(i+1)*(d-1)+f-1,y=(i+1)*(d-1)+f,m=(i+1)*d+f;o.push(p,x,m),o.push(x,y,m)}this.setIndex(o),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}Gr.prototype=Object.create(ot.prototype);Gr.prototype.constructor=Gr;var py={triangulate:function(t,e,n){n=n||2;let i=e&&e.length,r=i?e[0]*n:t.length,o=Xu(t,0,r,n,!0),s=[];if(!o||o.next===o.prev)return s;let a,c,l,h,u,d,f;if(i&&(o=vy(t,e,o,n)),t.length>80*n){a=l=t[0],c=h=t[1];for(let p=n;p<r;p+=n)u=t[p],d=t[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return Hr(o,s,n,a,c,f),s}};function Xu(t,e,n,i,r){let o,s;if(r===Cy(t,e,n,i)>0)for(o=e;o<n;o+=i)s=Gl(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=Gl(o,t[o],t[o+1],s);return s&&js(s,s.next)&&(Vr(s),s=s.next),s}function In(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(js(n,n.next)||Wt(n.prev,n,n.next)===0)){if(Vr(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Hr(t,e,n,i,r,o,s){if(!t)return;!s&&o&&Sy(t,i,r,o);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,o?gy(t,i,r,o):my(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),Vr(t),t=l.next,a=l.next;continue}if(t=l,t===a){s?s===1?(t=yy(In(t),e,n),Hr(t,e,n,i,r,o,2)):s===2&&xy(t,e,n,i,r,o):Hr(In(t),e,n,i,r,o,1);break}}}function my(t){let e=t.prev,n=t,i=t.next;if(Wt(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(Pi(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Wt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function gy(t,e,n,i){let r=t.prev,o=t,s=t.next;if(Wt(r,o,s)>=0)return!1;let a=r.x<o.x?r.x<s.x?r.x:s.x:o.x<s.x?o.x:s.x,c=r.y<o.y?r.y<s.y?r.y:s.y:o.y<s.y?o.y:s.y,l=r.x>o.x?r.x>s.x?r.x:s.x:o.x>s.x?o.x:s.x,h=r.y>o.y?r.y>s.y?r.y:s.y:o.y>s.y?o.y:s.y,u=qa(a,c,e,n,i),d=qa(l,h,e,n,i),f=t.prevZ,p=t.nextZ;for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==t.prev&&f!==t.next&&Pi(r.x,r.y,o.x,o.y,s.x,s.y,f.x,f.y)&&Wt(f.prev,f,f.next)>=0||(f=f.prevZ,p!==t.prev&&p!==t.next&&Pi(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&Wt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=u;){if(f!==t.prev&&f!==t.next&&Pi(r.x,r.y,o.x,o.y,s.x,s.y,f.x,f.y)&&Wt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==t.prev&&p!==t.next&&Pi(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function yy(t,e,n){let i=t;do{let r=i.prev,o=i.next.next;!js(r,o)&&Yu(r,i,i.next,o)&&kr(r,o)&&kr(o,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(o.i/n),Vr(i),Vr(i.next),i=t=o),i=i.next}while(i!==t);return In(i)}function xy(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Ay(s,a)){let c=Zu(s,a);s=In(s,s.next),c=In(c,c.next),Hr(s,e,n,i,r,o),Hr(c,e,n,i,r,o);return}a=a.next}s=s.next}while(s!==t)}function vy(t,e,n,i){let r=[],o,s,a,c,l;for(o=0,s=e.length;o<s;o++)a=e[o]*i,c=o<s-1?e[o+1]*i:t.length,l=Xu(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Ty(l));for(r.sort(_y),o=0;o<r.length;o++)by(r[o],n),n=In(n,n.next);return n}function _y(t,e){return t.x-e.x}function by(t,e){if(e=wy(t,e),e){let n=Zu(e,t);In(e,e.next),In(n,n.next)}}function wy(t,e){let n=e,i=t.x,r=t.y,o=-1/0,s;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>o){if(o=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}s=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!s)return null;if(i===o)return s;let a=s,c=s.x,l=s.y,h=1/0,u;n=s;do i>=n.x&&n.x>=c&&i!==n.x&&Pi(r<l?i:o,r,c,l,r<l?o:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),kr(n,t)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&My(s,n)))&&(s=n,h=u)),n=n.next;while(n!==a);return s}function My(t,e){return Wt(t.prev,t,e.prev)<0&&Wt(e.next,t,t.next)<0}function Sy(t,e,n,i){let r=t;do r.z===null&&(r.z=qa(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Ey(r)}function Ey(t){let e,n,i,r,o,s,a,c,l=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,l*=2}while(s>1);return t}function qa(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Ty(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Pi(t,e,n,i,r,o,s,a){return(r-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(i-a)-(n-s)*(e-a)>=0&&(n-s)*(o-a)-(r-s)*(i-a)>=0}function Ay(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ly(t,e)&&(kr(t,e)&&kr(e,t)&&Ry(t,e)&&(Wt(t.prev,t,e.prev)||Wt(t,e.prev,e))||js(t,e)&&Wt(t.prev,t,t.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function js(t,e){return t.x===e.x&&t.y===e.y}function Yu(t,e,n,i){let r=Vo(Wt(t,e,n)),o=Vo(Wt(t,e,i)),s=Vo(Wt(n,i,t)),a=Vo(Wt(n,i,e));return!!(r!==o&&s!==a||r===0&&ko(t,n,e)||o===0&&ko(t,i,e)||s===0&&ko(n,t,i)||a===0&&ko(n,e,i))}function ko(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Vo(t){return t>0?1:t<0?-1:0}function Ly(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Yu(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function kr(t,e){return Wt(t.prev,t,t.next)<0?Wt(t,e,t.next)>=0&&Wt(t,t.prev,e)>=0:Wt(t,e,t.prev)<0||Wt(t,t.next,e)<0}function Ry(t,e){let n=t,i=!1,r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Zu(t,e){let n=new Xa(t.i,t.x,t.y),i=new Xa(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Gl(t,e,n,i){let r=new Xa(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Vr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Xa(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(t,e,n,i){let r=0;for(let o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}var Cn={area:function(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return Cn.area(t)<0},triangulateShape:function(t,e){let n=[],i=[],r=[];Hl(t),kl(n,t);let o=t.length;e.forEach(Hl);for(let a=0;a<e.length;a++)i.push(o),o+=e[a].length,kl(n,e[a]);let s=py.triangulate(n,i);for(let a=0;a<s.length;a+=3)r.push(s.slice(a,a+3));return r}};function Hl(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function kl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}function ki(t,e){vt.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},this.fromBufferGeometry(new un(t,e)),this.mergeVertices()}ki.prototype=Object.create(vt.prototype);ki.prototype.constructor=ki;ki.prototype.toJSON=function(){let t=vt.prototype.toJSON.call(this),e=this.parameters.shapes,n=this.parameters.options;return Ju(e,n,t)};function un(t,e){ot.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let s=0,a=t.length;s<a;s++){let c=t[s];o(c)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(s){let a=[],c=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:100,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:6,f=e.bevelSize!==void 0?e.bevelSize:d-2,p=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,m=e.UVGenerator!==void 0?e.UVGenerator:Py;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=e.amount);let g,_=!1,v,w,T,A;y&&(g=y.getSpacedPoints(l),_=!0,u=!1,v=y.computeFrenetFrames(l,!1),w=new b,T=new b,A=new b),u||(x=0,d=0,f=0,p=0);let B=s.extractPoints(c),L=B.shape,q=B.holes;if(!Cn.isClockWise(L)){L=L.reverse();for(let V=0,j=q.length;V<j;V++){let Z=q[V];Cn.isClockWise(Z)&&(q[V]=Z.reverse())}}let O=Cn.triangulateShape(L,q),I=L;for(let V=0,j=q.length;V<j;V++){let Z=q[V];L=L.concat(Z)}function P(V,j,Z){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(Z).add(V)}let R=L.length,U=O.length;function W(V,j,Z){let ut,st,Et,M=V.x-j.x,E=V.y-j.y,X=Z.x-V.x,H=Z.y-V.y,C=M*M+E*E,J=M*H-E*X;if(Math.abs(J)>Number.EPSILON){let Q=Math.sqrt(C),pt=Math.sqrt(X*X+H*H),Y=j.x-E/Q,at=j.y+M/Q,Ct=Z.x-H/pt,yt=Z.y+X/pt,ht=((Ct-Y)*H-(yt-at)*X)/(M*H-E*X);ut=Y+M*ht-V.x,st=at+E*ht-V.y;let xt=ut*ut+st*st;if(xt<=2)return new z(ut,st);Et=Math.sqrt(xt/2)}else{let Q=!1;M>Number.EPSILON?X>Number.EPSILON&&(Q=!0):M<-Number.EPSILON?X<-Number.EPSILON&&(Q=!0):Math.sign(E)===Math.sign(H)&&(Q=!0),Q?(ut=-E,st=M,Et=Math.sqrt(C)):(ut=M,st=E,Et=Math.sqrt(C/2))}return new z(ut/Et,st/Et)}let $=[];for(let V=0,j=I.length,Z=j-1,ut=V+1;V<j;V++,Z++,ut++)Z===j&&(Z=0),ut===j&&(ut=0),$[V]=W(I[V],I[Z],I[ut]);let it=[],ct,lt=$.concat();for(let V=0,j=q.length;V<j;V++){let Z=q[V];ct=[];for(let ut=0,st=Z.length,Et=st-1,M=ut+1;ut<st;ut++,Et++,M++)Et===st&&(Et=0),M===st&&(M=0),ct[ut]=W(Z[ut],Z[Et],Z[M]);it.push(ct),lt=lt.concat(ct)}for(let V=0;V<x;V++){let j=V/x,Z=d*Math.cos(j*Math.PI/2),ut=f*Math.sin(j*Math.PI/2)+p;for(let st=0,Et=I.length;st<Et;st++){let M=P(I[st],$[st],ut);k(M.x,M.y,-Z)}for(let st=0,Et=q.length;st<Et;st++){let M=q[st];ct=it[st];for(let E=0,X=M.length;E<X;E++){let H=P(M[E],ct[E],ut);k(H.x,H.y,-Z)}}}let Dt=f+p;for(let V=0;V<R;V++){let j=u?P(L[V],lt[V],Dt):L[V];_?(T.copy(v.normals[0]).multiplyScalar(j.x),w.copy(v.binormals[0]).multiplyScalar(j.y),A.copy(g[0]).add(T).add(w),k(A.x,A.y,A.z)):k(j.x,j.y,0)}for(let V=1;V<=l;V++)for(let j=0;j<R;j++){let Z=u?P(L[j],lt[j],Dt):L[j];_?(T.copy(v.normals[V]).multiplyScalar(Z.x),w.copy(v.binormals[V]).multiplyScalar(Z.y),A.copy(g[V]).add(T).add(w),k(A.x,A.y,A.z)):k(Z.x,Z.y,h/l*V)}for(let V=x-1;V>=0;V--){let j=V/x,Z=d*Math.cos(j*Math.PI/2),ut=f*Math.sin(j*Math.PI/2)+p;for(let st=0,Et=I.length;st<Et;st++){let M=P(I[st],$[st],ut);k(M.x,M.y,h+Z)}for(let st=0,Et=q.length;st<Et;st++){let M=q[st];ct=it[st];for(let E=0,X=M.length;E<X;E++){let H=P(M[E],ct[E],ut);_?k(H.x,H.y+g[l-1].y,g[l-1].x+Z):k(H.x,H.y,h+Z)}}}St(),jt();function St(){let V=i.length/3;if(u){let j=0,Z=R*j;for(let ut=0;ut<U;ut++){let st=O[ut];Kt(st[2]+Z,st[1]+Z,st[0]+Z)}j=l+x*2,Z=R*j;for(let ut=0;ut<U;ut++){let st=O[ut];Kt(st[0]+Z,st[1]+Z,st[2]+Z)}}else{for(let j=0;j<U;j++){let Z=O[j];Kt(Z[2],Z[1],Z[0])}for(let j=0;j<U;j++){let Z=O[j];Kt(Z[0]+R*l,Z[1]+R*l,Z[2]+R*l)}}n.addGroup(V,i.length/3-V,0)}function jt(){let V=i.length/3,j=0;It(I,j),j+=I.length;for(let Z=0,ut=q.length;Z<ut;Z++){let st=q[Z];It(st,j),j+=st.length}n.addGroup(V,i.length/3-V,1)}function It(V,j){let Z=V.length;for(;--Z>=0;){let ut=Z,st=Z-1;st<0&&(st=V.length-1);for(let Et=0,M=l+x*2;Et<M;Et++){let E=R*Et,X=R*(Et+1),H=j+ut+E,C=j+st+E,J=j+st+X,Q=j+ut+X;Lt(H,C,J,Q)}}}function k(V,j,Z){a.push(V),a.push(j),a.push(Z)}function Kt(V,j,Z){Rt(V),Rt(j),Rt(Z);let ut=i.length/3,st=m.generateTopUV(n,i,ut-3,ut-2,ut-1);bt(st[0]),bt(st[1]),bt(st[2])}function Lt(V,j,Z,ut){Rt(V),Rt(j),Rt(ut),Rt(j),Rt(Z),Rt(ut);let st=i.length/3,Et=m.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);bt(Et[0]),bt(Et[1]),bt(Et[3]),bt(Et[1]),bt(Et[2]),bt(Et[3])}function Rt(V){i.push(a[V*3+0]),i.push(a[V*3+1]),i.push(a[V*3+2])}function bt(V){r.push(V.x),r.push(V.y)}}}un.prototype=Object.create(ot.prototype);un.prototype.constructor=un;un.prototype.toJSON=function(){let t=ot.prototype.toJSON.call(this),e=this.parameters.shapes,n=this.parameters.options;return Ju(e,n,t)};var Py={generateTopUV:function(t,e,n,i,r){let o=e[n*3],s=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new z(o,s),new z(a,c),new z(l,h)]},generateSideWallUV:function(t,e,n,i,r,o){let s=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],x=e[o*3],y=e[o*3+1],m=e[o*3+2];return Math.abs(a-h)<.01?[new z(s,1-c),new z(l,1-u),new z(d,1-p),new z(x,1-m)]:[new z(a,1-c),new z(h,1-u),new z(f,1-p),new z(y,1-m)]}};function Ju(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function Es(t,e){vt.call(this),this.type="TextGeometry",this.parameters={text:t,parameters:e},this.fromBufferGeometry(new Wr(t,e)),this.mergeVertices()}Es.prototype=Object.create(vt.prototype);Es.prototype.constructor=Es;function Wr(t,e){e=e||{};let n=e.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new vt;let i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),un.call(this,i,e),this.type="TextBufferGeometry"}Wr.prototype=Object.create(un.prototype);Wr.prototype.constructor=Wr;function Ts(t,e,n,i,r,o,s){vt.call(this),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},this.fromBufferGeometry(new Vi(t,e,n,i,r,o,s)),this.mergeVertices()}Ts.prototype=Object.create(vt.prototype);Ts.prototype.constructor=Ts;function Vi(t,e,n,i,r,o,s){ot.call(this),this.type="SphereBufferGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},t=t||1,e=Math.max(3,Math.floor(e)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,o=o!==void 0?o:0,s=s!==void 0?s:Math.PI;let a=Math.min(o+s,Math.PI),c=0,l=[],h=new b,u=new b,d=[],f=[],p=[],x=[];for(let y=0;y<=n;y++){let m=[],g=y/n,_=0;y==0&&o==0?_=.5/e:y==n&&a==Math.PI&&(_=-.5/e);for(let v=0;v<=e;v++){let w=v/e;h.x=-t*Math.cos(i+w*r)*Math.sin(o+g*s),h.y=t*Math.cos(o+g*s),h.z=t*Math.sin(i+w*r)*Math.sin(o+g*s),f.push(h.x,h.y,h.z),u.copy(h).normalize(),p.push(u.x,u.y,u.z),x.push(w+_,1-g),m.push(c++)}l.push(m)}for(let y=0;y<n;y++)for(let m=0;m<e;m++){let g=l[y][m+1],_=l[y][m],v=l[y+1][m],w=l[y+1][m+1];(y!==0||o>0)&&d.push(g,_,w),(y!==n-1||a<Math.PI)&&d.push(_,v,w)}this.setIndex(d),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(x,2))}Vi.prototype=Object.create(ot.prototype);Vi.prototype.constructor=Vi;function As(t,e,n,i,r,o){vt.call(this),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},this.fromBufferGeometry(new jr(t,e,n,i,r,o)),this.mergeVertices()}As.prototype=Object.create(vt.prototype);As.prototype.constructor=As;function jr(t,e,n,i,r,o){ot.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},t=t||.5,e=e||1,r=r!==void 0?r:0,o=o!==void 0?o:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;let s=[],a=[],c=[],l=[],h=t,u=(e-t)/i,d=new b,f=new z;for(let p=0;p<=i;p++){for(let x=0;x<=n;x++){let y=r+x/n*o;d.x=h*Math.cos(y),d.y=h*Math.sin(y),a.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/e+1)/2,f.y=(d.y/e+1)/2,l.push(f.x,f.y)}h+=u}for(let p=0;p<i;p++){let x=p*(n+1);for(let y=0;y<n;y++){let m=y+x,g=m,_=m+n+1,v=m+n+2,w=m+1;s.push(g,_,w),s.push(_,v,w)}}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}jr.prototype=Object.create(ot.prototype);jr.prototype.constructor=jr;function Ls(t,e,n,i){vt.call(this),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},this.fromBufferGeometry(new qr(t,e,n,i)),this.mergeVertices()}Ls.prototype=Object.create(vt.prototype);Ls.prototype.constructor=Ls;function qr(t,e,n,i){ot.call(this),this.type="LatheBufferGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e)||12,n=n||0,i=i||Math.PI*2,i=Mt.clamp(i,0,Math.PI*2);let r=[],o=[],s=[],a=1/e,c=new b,l=new z;for(let h=0;h<=e;h++){let u=n+h*a*i,d=Math.sin(u),f=Math.cos(u);for(let p=0;p<=t.length-1;p++)c.x=t[p].x*d,c.y=t[p].y,c.z=t[p].x*f,o.push(c.x,c.y,c.z),l.x=h/e,l.y=p/(t.length-1),s.push(l.x,l.y)}for(let h=0;h<e;h++)for(let u=0;u<t.length-1;u++){let d=u+h*t.length,f=d,p=d+t.length,x=d+t.length+1,y=d+1;r.push(f,p,y),r.push(p,x,y)}if(this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals(),i===Math.PI*2){let h=this.attributes.normal.array,u=new b,d=new b,f=new b,p=e*t.length*3;for(let x=0,y=0;x<t.length;x++,y+=3)u.x=h[y+0],u.y=h[y+1],u.z=h[y+2],d.x=h[p+y+0],d.y=h[p+y+1],d.z=h[p+y+2],f.addVectors(u,d).normalize(),h[y+0]=h[p+y+0]=f.x,h[y+1]=h[p+y+1]=f.y,h[y+2]=h[p+y+2]=f.z}}qr.prototype=Object.create(ot.prototype);qr.prototype.constructor=qr;function Wi(t,e){vt.call(this),this.type="ShapeGeometry",typeof e=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),e=e.curveSegments),this.parameters={shapes:t,curveSegments:e},this.fromBufferGeometry(new ji(t,e)),this.mergeVertices()}Wi.prototype=Object.create(vt.prototype);Wi.prototype.constructor=Wi;Wi.prototype.toJSON=function(){let t=vt.prototype.toJSON.call(this),e=this.parameters.shapes;return $u(e,t)};function ji(t,e){ot.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:e},e=e||12;let n=[],i=[],r=[],o=[],s=0,a=0;if(Array.isArray(t)===!1)c(t);else for(let l=0;l<t.length;l++)c(t[l]),this.addGroup(s,a,l),s+=a,a=0;this.setIndex(n),this.setAttribute("position",new tt(i,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(o,2));function c(l){let h=i.length/3,u=l.extractPoints(e),d=u.shape,f=u.holes;Cn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,y=f.length;x<y;x++){let m=f[x];Cn.isClockWise(m)===!0&&(f[x]=m.reverse())}let p=Cn.triangulateShape(d,f);for(let x=0,y=f.length;x<y;x++){let m=f[x];d=d.concat(m)}for(let x=0,y=d.length;x<y;x++){let m=d[x];i.push(m.x,m.y,0),r.push(0,0,1),o.push(m.x,m.y)}for(let x=0,y=p.length;x<y;x++){let m=p[x],g=m[0]+h,_=m[1]+h,v=m[2]+h;n.push(g,_,v),a+=3}}}ji.prototype=Object.create(ot.prototype);ji.prototype.constructor=ji;ji.prototype.toJSON=function(){let t=ot.prototype.toJSON.call(this),e=this.parameters.shapes;return $u(e,t)};function $u(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function Rs(t,e){ot.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:e},e=e!==void 0?e:1;let n=[],i=Math.cos(Mt.DEG2RAD*e),r=[0,0],o={},s,a,c,l=["a","b","c"],h;t.isBufferGeometry?(h=new vt,h.fromBufferGeometry(t)):h=t.clone(),h.mergeVertices(),h.computeFaceNormals();let u=h.vertices,d=h.faces;for(let f=0,p=d.length;f<p;f++){let x=d[f];for(let y=0;y<3;y++)s=x[l[y]],a=x[l[(y+1)%3]],r[0]=Math.min(s,a),r[1]=Math.max(s,a),c=r[0]+","+r[1],o[c]===void 0?o[c]={index1:r[0],index2:r[1],face1:f,face2:void 0}:o[c].face2=f}for(c in o){let f=o[c];if(f.face2===void 0||d[f.face1].normal.dot(d[f.face2].normal)<=i){let p=u[f.index1];n.push(p.x,p.y,p.z),p=u[f.index2],n.push(p.x,p.y,p.z)}}this.setAttribute("position",new tt(n,3))}Rs.prototype=Object.create(ot.prototype);Rs.prototype.constructor=Rs;function qi(t,e,n,i,r,o,s,a){vt.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a},this.fromBufferGeometry(new Nn(t,e,n,i,r,o,s,a)),this.mergeVertices()}qi.prototype=Object.create(vt.prototype);qi.prototype.constructor=qi;function Nn(t,e,n,i,r,o,s,a){ot.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a};let c=this;t=t!==void 0?t:1,e=e!==void 0?e:1,n=n||1,i=Math.floor(i)||8,r=Math.floor(r)||1,o=o!==void 0?o:!1,s=s!==void 0?s:0,a=a!==void 0?a:Math.PI*2;let l=[],h=[],u=[],d=[],f=0,p=[],x=n/2,y=0;m(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function m(){let _=new b,v=new b,w=0,T=(e-t)/n;for(let A=0;A<=r;A++){let B=[],L=A/r,q=L*(e-t)+t;for(let N=0;N<=i;N++){let O=N/i,I=O*a+s,P=Math.sin(I),R=Math.cos(I);v.x=q*P,v.y=-L*n+x,v.z=q*R,h.push(v.x,v.y,v.z),_.set(P,T,R).normalize(),u.push(_.x,_.y,_.z),d.push(O,1-L),B.push(f++)}p.push(B)}for(let A=0;A<i;A++)for(let B=0;B<r;B++){let L=p[B][A],q=p[B+1][A],N=p[B+1][A+1],O=p[B][A+1];l.push(L,q,O),l.push(q,N,O),w+=6}c.addGroup(y,w,0),y+=w}function g(_){let v,w,T=new z,A=new b,B=0,L=_===!0?t:e,q=_===!0?1:-1;v=f;for(let N=1;N<=i;N++)h.push(0,x*q,0),u.push(0,q,0),d.push(.5,.5),f++;w=f;for(let N=0;N<=i;N++){let I=N/i*a+s,P=Math.cos(I),R=Math.sin(I);A.x=L*R,A.y=x*q,A.z=L*P,h.push(A.x,A.y,A.z),u.push(0,q,0),T.x=P*.5+.5,T.y=R*.5*q+.5,d.push(T.x,T.y),f++}for(let N=0;N<i;N++){let O=v+N,I=w+N;_===!0?l.push(I,I+1,O):l.push(I+1,I,O),B+=3}c.addGroup(y,B,_===!0?1:2),y+=B}}Nn.prototype=Object.create(ot.prototype);Nn.prototype.constructor=Nn;function Cs(t,e,n,i,r,o,s){qi.call(this,0,t,e,n,i,r,o,s),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}Cs.prototype=Object.create(qi.prototype);Cs.prototype.constructor=Cs;function Ps(t,e,n,i,r,o,s){Nn.call(this,0,t,e,n,i,r,o,s),this.type="ConeBufferGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}Ps.prototype=Object.create(Nn.prototype);Ps.prototype.constructor=Ps;function Ds(t,e,n,i){vt.call(this),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new Xr(t,e,n,i)),this.mergeVertices()}Ds.prototype=Object.create(vt.prototype);Ds.prototype.constructor=Ds;function Xr(t,e,n,i){ot.call(this),this.type="CircleBufferGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},t=t||1,e=e!==void 0?Math.max(3,e):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;let r=[],o=[],s=[],a=[],c=new b,l=new z;o.push(0,0,0),s.push(0,0,1),a.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),s.push(0,0,1),l.x=(o[u]/t+1)/2,l.y=(o[u+1]/t+1)/2,a.push(l.x,l.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(a,2))}Xr.prototype=Object.create(ot.prototype);Xr.prototype.constructor=Xr;var de=Object.freeze({__proto__:null,WireframeGeometry:ms,ParametricGeometry:gs,ParametricBufferGeometry:Or,TetrahedronGeometry:xs,TetrahedronBufferGeometry:Fr,OctahedronGeometry:vs,OctahedronBufferGeometry:Gi,IcosahedronGeometry:_s,IcosahedronBufferGeometry:Br,DodecahedronGeometry:bs,DodecahedronBufferGeometry:Ur,PolyhedronGeometry:ys,PolyhedronBufferGeometry:Me,TubeGeometry:ws,TubeBufferGeometry:Hi,TorusKnotGeometry:Ms,TorusKnotBufferGeometry:zr,TorusGeometry:Ss,TorusBufferGeometry:Gr,TextGeometry:Es,TextBufferGeometry:Wr,SphereGeometry:Ts,SphereBufferGeometry:Vi,RingGeometry:As,RingBufferGeometry:jr,PlaneGeometry:us,PlaneBufferGeometry:zi,LatheGeometry:Ls,LatheBufferGeometry:qr,ShapeGeometry:Wi,ShapeBufferGeometry:ji,ExtrudeGeometry:ki,ExtrudeBufferGeometry:un,EdgesGeometry:Rs,ConeGeometry:Cs,ConeBufferGeometry:Ps,CylinderGeometry:qi,CylinderBufferGeometry:Nn,CircleGeometry:Ds,CircleBufferGeometry:Xr,BoxGeometry:Fa,BoxBufferGeometry:Fi});function Xi(t){gt.call(this),this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.setValues(t)}Xi.prototype=Object.create(gt.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isShadowMaterial=!0;Xi.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this};function On(t){ve.call(this,t),this.type="RawShaderMaterial"}On.prototype=Object.create(ve.prototype);On.prototype.constructor=On;On.prototype.isRawShaderMaterial=!0;function hn(t){gt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}hn.prototype=Object.create(gt.prototype);hn.prototype.constructor=hn;hn.prototype.isMeshStandardMaterial=!0;hn.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Yi(t){hn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transparency=0,this.setValues(t)}Yi.prototype=Object.create(hn.prototype);Yi.prototype.constructor=Yi;Yi.prototype.isMeshPhysicalMaterial=!0;Yi.prototype.copy=function(t){return hn.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new rt).copy(t.sheen):this.sheen=null,this.transparency=t.transparency,this};function ii(t){gt.call(this),this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ii.prototype=Object.create(gt.prototype);ii.prototype.constructor=ii;ii.prototype.isMeshPhongMaterial=!0;ii.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Zi(t){gt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new rt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Zi.prototype=Object.create(gt.prototype);Zi.prototype.constructor=Zi;Zi.prototype.isMeshToonMaterial=!0;Zi.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Ji(t){gt.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Ji.prototype=Object.create(gt.prototype);Ji.prototype.constructor=Ji;Ji.prototype.isMeshNormalMaterial=!0;Ji.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function $i(t){gt.call(this),this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}$i.prototype=Object.create(gt.prototype);$i.prototype.constructor=$i;$i.prototype.isMeshLambertMaterial=!0;$i.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Qi(t){gt.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new rt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Qi.prototype=Object.create(gt.prototype);Qi.prototype.constructor=Qi;Qi.prototype.isMeshMatcapMaterial=!0;Qi.prototype.copy=function(t){return gt.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Ki(t){Qt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}Ki.prototype=Object.create(Qt.prototype);Ki.prototype.constructor=Ki;Ki.prototype.isLineDashedMaterial=!0;Ki.prototype.copy=function(t){return Qt.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Dy=Object.freeze({__proto__:null,ShadowMaterial:Xi,SpriteMaterial:ei,RawShaderMaterial:On,ShaderMaterial:ve,PointsMaterial:ni,MeshPhysicalMaterial:Yi,MeshStandardMaterial:hn,MeshPhongMaterial:ii,MeshToonMaterial:Zi,MeshNormalMaterial:Ji,MeshLambertMaterial:$i,MeshDepthMaterial:Jn,MeshDistanceMaterial:$n,MeshBasicMaterial:ze,MeshMatcapMaterial:Qi,LineDashedMaterial:Ki,LineBasicMaterial:Qt,Material:gt}),Vt={arraySlice:function(t,e,n){return Vt.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,o){return t[r]-t[o]}let n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){let i=t.length,r=new t.constructor(i);for(let o=0,s=0;s!==i;++o){let a=n[o]*e;for(let c=0;c!==e;++c)r[s++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,o=t[0];for(;o!==void 0&&o[i]===void 0;)o=t[r++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(e.push(o.time),n.push.apply(n,s)),o=t[r++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(e.push(o.time),s.toArray(n,n.length)),o=t[r++];while(o!==void 0);else do s=o[i],s!==void 0&&(e.push(o.time),n.push(s)),o=t[r++];while(o!==void 0)},subclip:function(t,e,n,i,r){r=r||30;let o=t.clone();o.name=e;let s=[];for(let c=0;c<o.tracks.length;++c){let l=o.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){let p=l.times[f]*r;if(!(p<n||p>=i)){u.push(l.times[f]);for(let x=0;x<h;++x)d.push(l.values[f*h+x])}}u.length!==0&&(l.times=Vt.convertArray(u,l.times.constructor),l.values=Vt.convertArray(d,l.values.constructor),s.push(l))}o.tracks=s;let a=1/0;for(let c=0;c<o.tracks.length;++c)a>o.tracks[c].times[0]&&(a=o.tracks[c].times[0]);for(let c=0;c<o.tracks.length;++c)o.tracks[c].shift(-1*a);return o.resetDuration(),o},makeClipAdditive:function(t,e,n,i){e===void 0&&(e=0),n===void 0&&(n=t),(i===void 0||i<=0)&&(i=30);let r=t.tracks.length,o=e/i;for(let s=0;s<r;++s){let a=n.tracks[s],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=t.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=a.getValueSize(),u=a.times.length-1,d;if(o<=a.times[0])d=Vt.arraySlice(a.values,0,a.valueSize);else if(o>=a.times[u]){let p=u*h;d=Vt.arraySlice(a.values,p)}else{let p=a.createInterpolant();p.evaluate(o),d=p.resultBuffer}c==="quaternion"&&new re(d[0],d[1],d[2],d[3]).normalize().conjugate().toArray(d);let f=l.times.length;for(let p=0;p<f;++p){let x=p*h;if(c==="quaternion")re.multiplyQuaternionsFlat(l.values,x,d,0,l.values,x);else for(let y=0;y<h;++y)l.values[x+y]-=d[y]}}return t.blendMode=Lu,t}};function Ae(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(Ae.prototype,{evaluate:function(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let s=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===s)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let s=e[1];t<s&&(n=2,r=s);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let s=n+o>>>1;t<e[s]?o=s:n=s+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Ae.prototype,{beforeStart_:Ae.prototype.copySampleValue_,afterEnd_:Ae.prototype.copySampleValue_});function Ya(t,e,n,i){Ae.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Ya.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Ya,DefaultSettings_:{endingStart:Oi,endingEnd:Oi},intervalChanged_:function(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,s=i[r],a=i[o];if(s===void 0)switch(this.getSettings_().endingStart){case Ai:r=t,s=2*e-n;break;case as:r=i.length-2,s=e+i[r]-i[r+1];break;default:r=t,s=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ai:o=t,a=2*n-e;break;case as:o=1,a=n+i[1]-i[0];break;default:o=t-1,a=e}let c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-s),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=o*l},interpolate_:function(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,a=t*s,c=a-s,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(n-e)/(i-e),p=f*f,x=p*f,y=-u*x+2*u*p-u*f,m=(1+u)*x+(-1.5-2*u)*p+(-.5+u)*f+1,g=(-1-d)*x+(1.5+d)*p+.5*f,_=d*x-d*p;for(let v=0;v!==s;++v)r[v]=y*o[l+v]+m*o[c+v]+g*o[a+v]+_*o[h+v];return r}});function Is(t,e,n,i){Ae.call(this,t,e,n,i)}Is.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Is,interpolate_:function(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,a=t*s,c=a-s,l=(n-e)/(i-e),h=1-l;for(let u=0;u!==s;++u)r[u]=o[c+u]*h+o[a+u]*l;return r}});function Za(t,e,n,i){Ae.call(this,t,e,n,i)}Za.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Za,interpolate_:function(t){return this.copySampleValue_(t-1)}});function fe(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vt.convertArray(e,this.TimeBufferType),this.values=Vt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(fe,{toJSON:function(t){let e=t.constructor,n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:Vt.convertArray(t.times,Array),values:Vt.convertArray(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(fe.prototype,{constructor:fe,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:ns,InterpolantFactoryMethodDiscrete:function(t){return new Za(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Is(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Ya(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case ns:e=this.InterpolantFactoryMethodLinear;break;case Js:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Js}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let s=this.getValueSize();this.times=Vt.arraySlice(n,r,o),this.values=Vt.arraySlice(this.values,r*s,o*s)}return this},validate:function(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let s=0;s!==r;s++){let a=n[s];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,a),t=!1;break}if(o!==null&&o>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,a,o),t=!1;break}o=a}if(i!==void 0&&Vt.isTypedArray(i))for(let s=0,a=i.length;s!==a;++s){let c=i[s];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,c),t=!1;break}}return t},optimize:function(){let t=Vt.arraySlice(this.times),e=Vt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Js,r=t.length-1,o=1;for(let s=1;s<r;++s){let a=!1,c=t[s],l=t[s+1];if(c!==l&&(s!==1||c!==c[0]))if(i)a=!0;else{let h=s*n,u=h-n,d=h+n;for(let f=0;f!==n;++f){let p=e[h+f];if(p!==e[u+f]||p!==e[d+f]){a=!0;break}}}if(a){if(s!==o){t[o]=t[s];let h=s*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let s=r*n,a=o*n,c=0;c!==n;++c)e[a+c]=e[s+c];++o}return o!==t.length?(this.times=Vt.arraySlice(t,0,o),this.values=Vt.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this},clone:function(){let t=Vt.arraySlice(this.times,0),e=Vt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function Ja(t,e,n){fe.call(this,t,e,n)}Ja.prototype=Object.assign(Object.create(fe.prototype),{constructor:Ja,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:ss,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function $a(t,e,n,i){fe.call(this,t,e,n,i)}$a.prototype=Object.assign(Object.create(fe.prototype),{constructor:$a,ValueTypeName:"color"});function Yr(t,e,n,i){fe.call(this,t,e,n,i)}Yr.prototype=Object.assign(Object.create(fe.prototype),{constructor:Yr,ValueTypeName:"number"});function Qa(t,e,n,i){Ae.call(this,t,e,n,i)}Qa.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Qa,interpolate_:function(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,a=(n-e)/(i-e),c=t*s;for(let l=c+s;c!==l;c+=4)re.slerpFlat(r,0,o,c-s,o,c,a);return r}});function Ns(t,e,n,i){fe.call(this,t,e,n,i)}Ns.prototype=Object.assign(Object.create(fe.prototype),{constructor:Ns,ValueTypeName:"quaternion",DefaultInterpolation:ns,InterpolantFactoryMethodLinear:function(t){return new Qa(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Ka(t,e,n,i){fe.call(this,t,e,n,i)}Ka.prototype=Object.assign(Object.create(fe.prototype),{constructor:Ka,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:ss,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Zr(t,e,n,i){fe.call(this,t,e,n,i)}Zr.prototype=Object.assign(Object.create(fe.prototype),{constructor:Zr,ValueTypeName:"vector"});function Fe(t,e,n,i){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.blendMode=i!==void 0?i:Tc,this.uuid=Mt.generateUUID(),this.duration<0&&this.resetDuration()}function Iy(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return $a;case"quaternion":return Ns;case"bool":case"boolean":return Ja;case"string":return Ka}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Ny(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Iy(t.type);if(t.times===void 0){let n=[],i=[];Vt.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Fe,{parse:function(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,o=n.length;r!==o;++r)e.push(Ny(n[r]).scale(i));return new Fe(t.name,t.duration,e,t.blendMode)},toJSON:function(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(fe.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){let r=e.length,o=[];for(let s=0;s<r;s++){let a=[],c=[];a.push((s+r-1)%r,s,(s+1)%r),c.push(0,1,0);let l=Vt.getKeyframeOrder(a);a=Vt.sortedArray(a,1,l),c=Vt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),o.push(new Yr(".morphTargetInfluences["+e[s].name+"]",a,c).scale(1/n))}return new Fe(t,-1,o)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let s=0,a=t.length;s<a;s++){let c=t[s],l=c.name.match(r);if(l&&l.length>1){let h=l[1],u=i[h];u||(i[h]=u=[]),u.push(c)}}let o=[];for(let s in i)o.push(Fe.CreateFromMorphTargetSequence(s,i[s],e,n));return o},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,f,p){if(d.length!==0){let x=[],y=[];Vt.flattenJSON(d,x,y,f),x.length!==0&&p.push(new h(u,x,y))}},i=[],r=t.name||"default",o=t.fps||30,s=t.blendMode,a=t.length||-1,c=t.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},f;for(f=0;f<u.length;f++)if(u[f].morphTargets)for(let p=0;p<u[f].morphTargets.length;p++)d[u[f].morphTargets[p]]=-1;for(let p in d){let x=[],y=[];for(let m=0;m!==u[f].morphTargets.length;++m){let g=u[f];x.push(g.time),y.push(g.morphTarget===p?1:0)}i.push(new Yr(".morphTargetInfluence["+p+"]",x,y))}a=d.length*(o||1)}else{let d=".bones["+e[h].name+"]";n(Zr,d+".position",u,"pos",i),n(Ns,d+".quaternion",u,"rot",i),n(Zr,d+".scale",u,"scl",i)}}return i.length===0?null:new Fe(r,a,i,s)}});Object.assign(Fe.prototype,{resetDuration:function(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Fe(this.name,this.duration,t,this.blendMode)}});var tr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Qu(t,e,n){let i=this,r=!1,o=0,s=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){s++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,s),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],f=c[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}var Oy=new Qu;function Ot(t){this.manager=t!==void 0?t:Oy,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ot.prototype,{load:function(){},loadAsync:function(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var Ne={};function qe(t){Ot.call(this,t)}qe.prototype=Object.assign(Object.create(Ot.prototype),{constructor:qe,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=tr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;if(Ne[t]!==void 0){Ne[t].push({onLoad:e,onProgress:n,onError:i});return}let s=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(s),c;if(a){let l=a[1],h=!!a[2],u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let p=new Uint8Array(u.length);for(let y=0;y<u.length;y++)p[y]=u.charCodeAt(y);f==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(u,l);break;case"json":d=JSON.parse(u);break;default:d=u;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(t)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ne[t]=[],Ne[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){let h=this.response,u=Ne[t];if(delete Ne[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),tr.add(t,h);for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(h)}r.manager.itemEnd(t)}else{for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){let h=Ne[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let h=Ne[t];delete Ne[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){let h=Ne[t];delete Ne[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this}});function Vl(t){Ot.call(this,t)}Vl.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Vl,load:function(t,e,n,i){let r=this,o=new qe(r.manager);o.setPath(r.path),o.load(t,function(s){try{e(r.parse(JSON.parse(s)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=[];for(let n=0;n<t.length;n++){let i=Fe.parse(t[n]);e.push(i)}return e}});function Wl(t){Ot.call(this,t)}Wl.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Wl,load:function(t,e,n,i){let r=this,o=[],s=new Nr;s.image=o;let a=new qe(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer");let c=0;function l(h){a.load(t[h],function(u){let d=r.parse(u,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(s.minFilter=ue),s.format=d.format,s.needsUpdate=!0,e&&e(s))},n,i)}if(Array.isArray(t))for(let h=0,u=t.length;h<u;++h)l(h);else a.load(t,function(h){let u=r.parse(h,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let f=0;f<d;f++){o[f]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)o[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+p]),o[f].format=u.format,o[f].width=u.width,o[f].height=u.height}}else s.image.width=u.width,s.image.height=u.height,s.mipmaps=u.mipmaps;u.mipmapCount===1&&(s.minFilter=ue),s.format=u.format,s.needsUpdate=!0,e&&e(s)},n,i);return s}});function jl(t){Ot.call(this,t)}jl.prototype=Object.assign(Object.create(Ot.prototype),{constructor:jl,load:function(t,e,n,i){let r=this,o=new Ui,s=new qe(this.manager);return s.setResponseType("arraybuffer"),s.setPath(this.path),s.load(t,function(a){let c=r.parse(a);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ye,o.wrapT=c.wrapT!==void 0?c.wrapT:ye,o.magFilter=c.magFilter!==void 0?c.magFilter:ue,o.minFilter=c.minFilter!==void 0?c.minFilter:ue,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Hs),c.mipmapCount===1&&(o.minFilter=ue),o.needsUpdate=!0,e&&e(o,c))},n,i),o}});function Jr(t){Ot.call(this,t)}Jr.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Jr,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=tr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let s=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1),tr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return s.addEventListener("load",a,!1),s.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}});function tc(t){Ot.call(this,t)}tc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:tc,load:function(t,e,n,i){let r=new Dn,o=new Jr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let s=0;function a(c){o.load(t[c],function(l){r.images[c]=l,s++,s===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function ec(t){Ot.call(this,t)}ec.prototype=Object.assign(Object.create(Ot.prototype),{constructor:ec,load:function(t,e,n,i){let r=new Ft,o=new Jr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(s){r.image=s;let a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?qn:Be,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function ft(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ft.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){t===void 0&&(t=5);let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){t===void 0&&(t=5);let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){let t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let s=0,a=r-1,c;for(;s<=a;)if(i=Math.floor(s+(a-s)/2),c=n[i]-o,c<0)s=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===o)return i/(r-1);let l=n[i],u=n[i+1]-l,d=(o-l)/u;return(i+d)/(r-1)},getTangent:function(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),s=this.getPoint(r),a=e||(o.isVector2?new z:new b);return a.copy(s).sub(o).normalize(),a},getTangentAt:function(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){let n=new b,i=[],r=[],o=[],s=new b,a=new At;for(let d=0;d<=t;d++){let f=d/t;i[d]=this.getTangentAt(f,new b),i[d].normalize()}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Mt.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(s,f))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Mt.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(s.crossVectors(r[0],r[t]))>0&&(d=-d);for(let f=1;f<=t;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){let t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Ce(t,e,n,i,r,o,s,a){ft.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=o||2*Math.PI,this.aClockwise=s||!1,this.aRotation=a||0}Ce.prototype=Object.create(ft.prototype);Ce.prototype.constructor=Ce;Ce.prototype.isEllipseCurve=!0;Ce.prototype.getPoint=function(t,e){let n=e||new z,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let s=this.aStartAngle+t*r,a=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,d=c-this.aY;a=u*l-d*h+this.aX,c=u*h+d*l+this.aY}return n.set(a,c)};Ce.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};Ce.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};Ce.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function $r(t,e,n,i,r,o){Ce.call(this,t,e,n,n,i,r,o),this.type="ArcCurve"}$r.prototype=Object.create(Ce.prototype);$r.prototype.constructor=$r;$r.prototype.isArcCurve=!0;function Cc(){let t=0,e=0,n=0,i=0;function r(o,s,a,c){t=o,e=a,n=-3*o+3*s-2*a-c,i=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,h,u){let d=(s-o)/l-(a-o)/(l+h)+(a-s)/h,f=(a-s)/h-(c-s)/(h+u)+(c-a)/u;d*=h,f*=h,r(s,a,d,f)},calc:function(o){let s=o*o,a=s*o;return t+e*o+n*s+i*a}}}var Wo=new b,ba=new Cc,wa=new Cc,Ma=new Cc;function me(t,e,n,i){ft.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=n||"centripetal",this.tension=i||.5}me.prototype=Object.create(ft.prototype);me.prototype.constructor=me;me.prototype.isCatmullRomCurve3=!0;me.prototype.getPoint=function(t,e){let n=e||new b,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,s=Math.floor(o),a=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/r)+1)*r:a===0&&s===r-1&&(s=r-2,a=1);let c,l,h,u;if(this.closed||s>0?c=i[(s-1)%r]:(Wo.subVectors(i[0],i[1]).add(i[0]),c=Wo),l=i[s%r],h=i[(s+1)%r],this.closed||s+2<r?u=i[(s+2)%r]:(Wo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(l),d),p=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d);p<1e-4&&(p=1),f<1e-4&&(f=p),x<1e-4&&(x=p),ba.initNonuniformCatmullRom(c.x,l.x,h.x,u.x,f,p,x),wa.initNonuniformCatmullRom(c.y,l.y,h.y,u.y,f,p,x),Ma.initNonuniformCatmullRom(c.z,l.z,h.z,u.z,f,p,x)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,l.x,h.x,u.x,this.tension),wa.initCatmullRom(c.y,l.y,h.y,u.y,this.tension),Ma.initCatmullRom(c.z,l.z,h.z,u.z,this.tension));return n.set(ba.calc(a),wa.calc(a),Ma.calc(a)),n};me.prototype.copy=function(t){ft.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};me.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};me.prototype.fromJSON=function(t){ft.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new b().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function ql(t,e,n,i,r){let o=(i-e)*.5,s=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+o+s)*c+(-3*n+3*i-2*o-s)*a+o*t+n}function Fy(t,e){let n=1-t;return n*n*e}function By(t,e){return 2*(1-t)*t*e}function Uy(t,e){return t*t*e}function Mr(t,e,n,i){return Fy(t,e)+By(t,n)+Uy(t,i)}function zy(t,e){let n=1-t;return n*n*n*e}function Gy(t,e){let n=1-t;return 3*n*n*t*e}function Hy(t,e){return 3*(1-t)*t*t*e}function ky(t,e){return t*t*t*e}function Sr(t,e,n,i,r){return zy(t,e)+Gy(t,n)+Hy(t,i)+ky(t,r)}function Xe(t,e,n,i){ft.call(this),this.type="CubicBezierCurve",this.v0=t||new z,this.v1=e||new z,this.v2=n||new z,this.v3=i||new z}Xe.prototype=Object.create(ft.prototype);Xe.prototype.constructor=Xe;Xe.prototype.isCubicBezierCurve=!0;Xe.prototype.getPoint=function(t,e){let n=e||new z,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(Sr(t,i.x,r.x,o.x,s.x),Sr(t,i.y,r.y,o.y,s.y)),n};Xe.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Xe.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Xe.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function fn(t,e,n,i){ft.call(this),this.type="CubicBezierCurve3",this.v0=t||new b,this.v1=e||new b,this.v2=n||new b,this.v3=i||new b}fn.prototype=Object.create(ft.prototype);fn.prototype.constructor=fn;fn.prototype.isCubicBezierCurve3=!0;fn.prototype.getPoint=function(t,e){let n=e||new b,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(Sr(t,i.x,r.x,o.x,s.x),Sr(t,i.y,r.y,o.y,s.y),Sr(t,i.z,r.z,o.z,s.z)),n};fn.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};fn.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};fn.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Se(t,e){ft.call(this),this.type="LineCurve",this.v1=t||new z,this.v2=e||new z}Se.prototype=Object.create(ft.prototype);Se.prototype.constructor=Se;Se.prototype.isLineCurve=!0;Se.prototype.getPoint=function(t,e){let n=e||new z;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Se.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Se.prototype.getTangent=function(t,e){let n=e||new z;return n.copy(this.v2).sub(this.v1).normalize(),n};Se.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Se.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Se.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ye(t,e){ft.call(this),this.type="LineCurve3",this.v1=t||new b,this.v2=e||new b}Ye.prototype=Object.create(ft.prototype);Ye.prototype.constructor=Ye;Ye.prototype.isLineCurve3=!0;Ye.prototype.getPoint=function(t,e){let n=e||new b;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Ye.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Ye.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Ye.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Ye.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ze(t,e,n){ft.call(this),this.type="QuadraticBezierCurve",this.v0=t||new z,this.v1=e||new z,this.v2=n||new z}Ze.prototype=Object.create(ft.prototype);Ze.prototype.constructor=Ze;Ze.prototype.isQuadraticBezierCurve=!0;Ze.prototype.getPoint=function(t,e){let n=e||new z,i=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,i.x,r.x,o.x),Mr(t,i.y,r.y,o.y)),n};Ze.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Ze.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Ze.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function dn(t,e,n){ft.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new b,this.v1=e||new b,this.v2=n||new b}dn.prototype=Object.create(ft.prototype);dn.prototype.constructor=dn;dn.prototype.isQuadraticBezierCurve3=!0;dn.prototype.getPoint=function(t,e){let n=e||new b,i=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,i.x,r.x,o.x),Mr(t,i.y,r.y,o.y),Mr(t,i.z,r.z,o.z)),n};dn.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};dn.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};dn.prototype.fromJSON=function(t){return ft.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Je(t){ft.call(this),this.type="SplineCurve",this.points=t||[]}Je.prototype=Object.create(ft.prototype);Je.prototype.constructor=Je;Je.prototype.isSplineCurve=!0;Je.prototype.getPoint=function(t,e){let n=e||new z,i=this.points,r=(i.length-1)*t,o=Math.floor(r),s=r-o,a=i[o===0?o:o-1],c=i[o],l=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ql(s,a.x,c.x,l.x,h.x),ql(s,a.y,c.y,l.y,h.y)),n};Je.prototype.copy=function(t){ft.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this};Je.prototype.toJSON=function(){let t=ft.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t};Je.prototype.fromJSON=function(t){ft.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new z().fromArray(i))}return this};var nc=Object.freeze({__proto__:null,ArcCurve:$r,CatmullRomCurve3:me,CubicBezierCurve:Xe,CubicBezierCurve3:fn,EllipseCurve:Ce,LineCurve:Se,LineCurve3:Ye,QuadraticBezierCurve:Ze,QuadraticBezierCurve3:dn,SplineCurve:Je});function An(){ft.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}An.prototype=Object.assign(Object.create(ft.prototype),{constructor:An,add:function(t){this.curves.push(t)},closePath:function(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Se(e,t))},getPoint:function(t){let e=t*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=e){let r=n[i]-e,o=this.curves[i],s=o.getLength(),a=s===0?0:1-r/s;return o.getPointAt(a)}i++}return null},getLength:function(){let t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){t===void 0&&(t=40);let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],s=o&&o.isEllipseCurve?t*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?t*o.points.length:t,a=o.getPoints(s);for(let c=0;c<a.length;c++){let l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){ft.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){let t=ft.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){ft.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new nc[i.type]().fromJSON(i))}return this}});function We(t){An.call(this),this.type="Path",this.currentPoint=new z,t&&this.setFromPoints(t)}We.prototype=Object.assign(Object.create(An.prototype),{constructor:We,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){let n=new Se(this.currentPoint.clone(),new z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){let r=new Ze(this.currentPoint.clone(),new z(t,e),new z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,o){let s=new Xe(this.currentPoint.clone(),new z(t,e),new z(n,i),new z(r,o));return this.curves.push(s),this.currentPoint.set(r,o),this},splineThru:function(t){let e=[this.currentPoint.clone()].concat(t),n=new Je(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,o){let s=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+s,e+a,n,i,r,o),this},absarc:function(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this},ellipse:function(t,e,n,i,r,o,s,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,o,s,a),this},absellipse:function(t,e,n,i,r,o,s,a){let c=new Ce(t,e,n,i,r,o,s,a);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return An.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){let t=An.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return An.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function Xn(t){We.call(this,t),this.uuid=Mt.generateUUID(),this.type="Shape",this.holes=[]}Xn.prototype=Object.assign(Object.create(We.prototype),{constructor:Xn,getPointsHoles:function(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){We.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){let t=We.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){We.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new We().fromJSON(i))}return this}});function Gt(t,e){et.call(this),this.type="Light",this.color=new rt(t),this.intensity=e!==void 0?e:1,this.receiveShadow=void 0}Gt.prototype=Object.assign(Object.create(et.prototype),{constructor:Gt,isLight:!0,copy:function(t){return et.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){let e=et.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function ic(t,e,n){Gt.call(this,t,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(et.DefaultUp),this.updateMatrix(),this.groundColor=new rt(e)}ic.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ic,isHemisphereLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function pn(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new z(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}Object.assign(pn.prototype,{_projScreenMatrix:new At,_lightPositionWorld:new b,_lookTarget:new b,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){let e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,o=this._lightPositionWorld;o.setFromMatrixPosition(t.matrixWorld),e.position.copy(o),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function rc(){pn.call(this,new ie(50,1,.5,500))}rc.prototype=Object.assign(Object.create(pn.prototype),{constructor:rc,isSpotLightShadow:!0,updateMatrices:function(t){let e=this.camera,n=Mt.RAD2DEG*2*t.angle,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),pn.prototype.updateMatrices.call(this,t)}});function oc(t,e,n,i,r,o){Gt.call(this,t,e),this.type="SpotLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=o!==void 0?o:1,this.shadow=new rc}oc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:oc,isSpotLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function sc(){pn.call(this,new ie(90,1,.5,500)),this._frameExtents=new z(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}sc.prototype=Object.assign(Object.create(pn.prototype),{constructor:sc,isPointLightShadow:!0,updateMatrices:function(t,e){e===void 0&&(e=0);let n=this.camera,i=this.matrix,r=this._lightPositionWorld,o=this._lookTarget,s=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),o.copy(n.position),o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(o),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),s.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s)}});function ac(t,e,n,i){Gt.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new sc}ac.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ac,isPointLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function Qr(t,e,n,i,r,o){ln.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=e!==void 0?e:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=o!==void 0?o:2e3,this.updateProjectionMatrix()}Qr.prototype=Object.assign(Object.create(ln.prototype),{constructor:Qr,isOrthographicCamera:!0,copy:function(t,e){return ln.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,s=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=l*this.view.offsetY,a=s-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){let e=et.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function cc(){pn.call(this,new Qr(-5,5,5,-5,.5,500))}cc.prototype=Object.assign(Object.create(pn.prototype),{constructor:cc,isDirectionalLightShadow:!0,updateMatrices:function(t){pn.prototype.updateMatrices.call(this,t)}});function lc(t,e){Gt.call(this,t,e),this.type="DirectionalLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.shadow=new cc}lc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:lc,isDirectionalLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Kr(t,e){Gt.call(this,t,e),this.type="AmbientLight",this.castShadow=void 0}Kr.prototype=Object.assign(Object.create(Gt.prototype),{constructor:Kr,isAmbientLight:!0});function uc(t,e,n,i){Gt.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}uc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:uc,isRectAreaLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){let e=Gt.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});function Pc(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new b)}Object.assign(Pc.prototype,{isSphericalHarmonics3:!0,set:function(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this},zero:function(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},getAt:function(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e},getIrradianceAt:function(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e},add:function(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this},addScaledSH:function(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this},scale:function(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this},lerp:function(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this},equals:function(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0},copy:function(t){return this.set(t.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(t,e){e===void 0&&(e=0);let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this},toArray:function(t,e){t===void 0&&(t=[]),e===void 0&&(e=0);let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}});Object.assign(Pc,{getBasisAt:function(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}});function Ue(t,e){Gt.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Pc}Ue.prototype=Object.assign(Object.create(Gt.prototype),{constructor:Ue,isLightProbe:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){let e=Gt.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function hc(t){Ot.call(this,t),this.textures={}}hc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:hc,load:function(t,e,n,i){let r=this,o=new qe(r.manager);o.setPath(r.path),o.load(t,function(s){try{e(r.parse(JSON.parse(s)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=new Dy[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new rt().setHex(t.sheen)),t.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new rt().setHex(o.value);break;case"v2":i.uniforms[r].value=new z().fromArray(o.value);break;case"v3":i.uniforms[r].value=new b().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Nt().fromArray(o.value);break;case"m3":i.uniforms[r].value=new he().fromArray(o.value);case"m4":i.uniforms[r].value=new At().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new z().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new z().fromArray(t.clearcoatNormalScale)),i},setTextures:function(t){return this.textures=t,this}});var Ku={decodeText:function(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(t){let e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function Os(){ot.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Os.prototype=Object.assign(Object.create(ot.prototype),{constructor:Os,isInstancedBufferGeometry:!0,copy:function(t){return ot.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t=ot.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function fc(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),mt.call(this,t,e,n),this.meshPerAttribute=i||1}fc.prototype=Object.assign(Object.create(mt.prototype),{constructor:fc,isInstancedBufferAttribute:!0,copy:function(t){return mt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){let t=mt.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function dc(t){Ot.call(this,t)}dc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:dc,load:function(t,e,n,i){let r=this,o=new qe(r.manager);o.setPath(r.path),o.load(t,function(s){try{e(r.parse(JSON.parse(s)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e={},n={};function i(d,f){if(e[f]!==void 0)return e[f];let x=d.interleavedBuffers[f],y=r(d,x.buffer),m=new jo[x.type](y),g=new Ee(m,x.stride);return g.uuid=x.uuid,e[f]=g,g}function r(d,f){if(n[f]!==void 0)return n[f];let x=d.arrayBuffers[f],y=new Uint32Array(x).buffer;return n[f]=y,y}let o=t.isInstancedBufferGeometry?new Os:new ot,s=t.data.index;if(s!==void 0){let d=new jo[s.type](s.array);o.setIndex(new mt(d,1))}let a=t.data.attributes;for(let d in a){let f=a[d],p;if(f.isInterleavedBufferAttribute){let x=i(t.data,f.data);p=new ti(x,f.itemSize,f.offset,f.normalized)}else{let x=new jo[f.type](f.array),y=f.isInstancedBufferAttribute?fc:mt;p=new y(x,f.itemSize,f.normalized)}f.name!==void 0&&(p.name=f.name),o.setAttribute(d,p)}let c=t.data.morphAttributes;if(c)for(let d in c){let f=c[d],p=[];for(let x=0,y=f.length;x<y;x++){let m=f[x],g;if(m.isInterleavedBufferAttribute){let _=i(t.data,m.data);g=new ti(_,m.itemSize,m.offset,m.normalized)}else{let _=new jo[m.type](m.array);g=new mt(_,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),p.push(g)}o.morphAttributes[d]=p}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let d=0,f=h.length;d!==f;++d){let p=h[d];o.addGroup(p.start,p.count,p.materialIndex)}let u=t.data.boundingSphere;if(u!==void 0){let d=new b;u.center!==void 0&&d.fromArray(u.center),o.boundingSphere=new gn(d,u.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}});var jo={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function pc(t){Ot.call(this,t)}pc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:pc,load:function(t,e,n,i){let r=this,o=this.path===""?Ku.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let s=new qe(r.manager);s.setPath(this.path),s.load(t,function(a){let c=null;try{c=JSON.parse(a)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+t+".",h.message);return}let l=c.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)},parse:function(t,e){let n=this.parseShape(t.shapes),i=this.parseGeometries(t.geometries,n),r=this.parseImages(t.images,function(){e!==void 0&&e(a)}),o=this.parseTextures(t.textures,r),s=this.parseMaterials(t.materials,o),a=this.parseObject(t.object,i,s);return t.animations&&(a.animations=this.parseAnimations(t.animations)),(t.images===void 0||t.images.length===0)&&e!==void 0&&e(a),a},parseShape:function(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new Xn().fromJSON(t[n]);e[r.uuid]=r}return e},parseGeometries:function(t,e){let n={},i;if(t!==void 0){let r=new dc;for(let o=0,s=t.length;o<s;o++){let a,c=t[o];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new de[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":a=new de[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":a=new de[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":a=new de[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":a=new de[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":a=new de[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":a=new de[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":a=new de[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":a=new de[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":a=new de[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":a=new de[c.type](new nc[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":a=new de[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":a=new de[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let h=0,u=c.shapes.length;h<u;h++){let d=e[c.shapes[h]];i.push(d)}a=new de[c.type](i,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let h=0,u=c.shapes.length;h<u;h++){let d=e[c.shapes[h]];i.push(d)}let l=c.options.extrudePath;l!==void 0&&(c.options.extrudePath=new nc[l.type]().fromJSON(l)),a=new de[c.type](i,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),a.isBufferGeometry===!0&&c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n},parseMaterials:function(t,e){let n={},i={};if(t!==void 0){let r=new hc;r.setTextures(e);for(let o=0,s=t.length;o<s;o++){let a=t[o];if(a.type==="MultiMaterial"){let c=[];for(let l=0;l<a.materials.length;l++){let h=a.materials[l];n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),c.push(n[h.uuid])}i[a.uuid]=c}else n[a.uuid]===void 0&&(n[a.uuid]=r.parse(a)),i[a.uuid]=n[a.uuid]}}return i},parseAnimations:function(t){let e=[];for(let n=0;n<t.length;n++){let i=t[n],r=Fe.parse(i);i.uuid!==void 0&&(r.uuid=i.uuid),e.push(r)}return e},parseImages:function(t,e){let n=this,i={},r;function o(s){return n.manager.itemStart(s),r.load(s,function(){n.manager.itemEnd(s)},void 0,function(){n.manager.itemError(s),n.manager.itemEnd(s)})}if(t!==void 0&&t.length>0){let s=new Qu(e);r=new Jr(s),r.setCrossOrigin(this.crossOrigin);for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.url;if(Array.isArray(h)){i[l.uuid]=[];for(let u=0,d=h.length;u<d;u++){let f=h[u],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;i[l.uuid].push(o(p))}}else{let u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.resourcePath+l.url;i[l.uuid]=o(u)}}}return i},parseTextures:function(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let s=t[r];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),e[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);let a;Array.isArray(e[s.image])?a=new Dn(e[s.image]):a=new Ft(e[s.image]),a.needsUpdate=!0,a.uuid=s.uuid,s.name!==void 0&&(a.name=s.name),s.mapping!==void 0&&(a.mapping=n(s.mapping,Vy)),s.offset!==void 0&&a.offset.fromArray(s.offset),s.repeat!==void 0&&a.repeat.fromArray(s.repeat),s.center!==void 0&&a.center.fromArray(s.center),s.rotation!==void 0&&(a.rotation=s.rotation),s.wrap!==void 0&&(a.wrapS=n(s.wrap[0],Xl),a.wrapT=n(s.wrap[1],Xl)),s.format!==void 0&&(a.format=s.format),s.type!==void 0&&(a.type=s.type),s.encoding!==void 0&&(a.encoding=s.encoding),s.minFilter!==void 0&&(a.minFilter=n(s.minFilter,Yl)),s.magFilter!==void 0&&(a.magFilter=n(s.magFilter,Yl)),s.anisotropy!==void 0&&(a.anisotropy=s.anisotropy),s.flipY!==void 0&&(a.flipY=s.flipY),s.premultiplyAlpha!==void 0&&(a.premultiplyAlpha=s.premultiplyAlpha),s.unpackAlignment!==void 0&&(a.unpackAlignment=s.unpackAlignment),i[s.uuid]=a}return i},parseObject:function(t,e,n){let i;function r(c){return e[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",c),e[c]}function o(c){if(c!==void 0){if(Array.isArray(c)){let l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),l.push(n[d])}return l}return n[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",c),n[c]}}let s,a;switch(t.type){case"Scene":i=new cs,t.background!==void 0&&Number.isInteger(t.background)&&(i.background=new rt(t.background)),t.fog!==void 0&&(t.fog.type==="Fog"?i.fog=new za(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(i.fog=new Kn(t.fog.color,t.fog.density)));break;case"PerspectiveCamera":i=new ie(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(i.focus=t.focus),t.zoom!==void 0&&(i.zoom=t.zoom),t.filmGauge!==void 0&&(i.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(i.filmOffset=t.filmOffset),t.view!==void 0&&(i.view=Object.assign({},t.view));break;case"OrthographicCamera":i=new Qr(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(i.zoom=t.zoom),t.view!==void 0&&(i.view=Object.assign({},t.view));break;case"AmbientLight":i=new Kr(t.color,t.intensity);break;case"DirectionalLight":i=new lc(t.color,t.intensity);break;case"PointLight":i=new ac(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":i=new uc(t.color,t.intensity,t.width,t.height);break;case"SpotLight":i=new oc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":i=new ic(t.color,t.groundColor,t.intensity);break;case"LightProbe":i=new Ue().fromJSON(t);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":s=r(t.geometry),a=o(t.material),i=new zt(s,a);break;case"InstancedMesh":s=r(t.geometry),a=o(t.material);let c=t.count,l=t.instanceMatrix;i=new Va(s,a,c),i.instanceMatrix=new mt(new Float32Array(l.array),16);break;case"LOD":i=new fs;break;case"Line":i=new Re(r(t.geometry),o(t.material),t.mode);break;case"LineLoop":i=new Wa(r(t.geometry),o(t.material));break;case"LineSegments":i=new ee(r(t.geometry),o(t.material));break;case"PointCloud":case"Points":i=new Ir(r(t.geometry),o(t.material));break;case"Sprite":i=new Ga(o(t.material));break;case"Group":i=new Qn;break;default:i=new et}if(i.uuid=t.uuid,t.name!==void 0&&(i.name=t.name),t.matrix!==void 0?(i.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=t.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(t.position!==void 0&&i.position.fromArray(t.position),t.rotation!==void 0&&i.rotation.fromArray(t.rotation),t.quaternion!==void 0&&i.quaternion.fromArray(t.quaternion),t.scale!==void 0&&i.scale.fromArray(t.scale)),t.castShadow!==void 0&&(i.castShadow=t.castShadow),t.receiveShadow!==void 0&&(i.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(i.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(i.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(i.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(i.visible=t.visible),t.frustumCulled!==void 0&&(i.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(i.renderOrder=t.renderOrder),t.userData!==void 0&&(i.userData=t.userData),t.layers!==void 0&&(i.layers.mask=t.layers),t.children!==void 0){let c=t.children;for(let l=0;l<c.length;l++)i.add(this.parseObject(c[l],e,n))}if(t.type==="LOD"){t.autoUpdate!==void 0&&(i.autoUpdate=t.autoUpdate);let c=t.levels;for(let l=0;l<c.length;l++){let h=c[l],u=i.getObjectByProperty("uuid",h.object);u!==void 0&&i.addLevel(u,h.distance)}}return i}});var Vy={UVMapping:bc,CubeReflectionMapping:wc,CubeRefractionMapping:Mc,EquirectangularReflectionMapping:Tu,EquirectangularRefractionMapping:Sc,CubeUVReflectionMapping:oo,CubeUVRefractionMapping:Ec},Xl={RepeatWrapping:cn,ClampToEdgeWrapping:ye,MirroredRepeatWrapping:is},Yl={NearestFilter:Zt,NearestMipmapNearestFilter:Yn,NearestMipmapLinearFilter:Ra,LinearFilter:ue,LinearMipmapNearestFilter:Au,LinearMipmapLinearFilter:Hs};function Zl(t){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ot.call(this,t),this.options={premultiplyAlpha:"none"}}Zl.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Zl,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=tr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;fetch(t).then(function(s){return s.blob()}).then(function(s){return createImageBitmap(s,r.options)}).then(function(s){tr.add(t,s),e&&e(s),r.manager.itemEnd(t)}).catch(function(s){i&&i(s),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function th(){this.type="ShapePath",this.color=new rt,this.subPaths=[],this.currentPath=null}Object.assign(th.prototype,{moveTo:function(t,e){return this.currentPath=new We,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(m){let g=[];for(let _=0,v=m.length;_<v;_++){let w=m[_],T=new Xn;T.curves=w.curves,g.push(T)}return g}function i(m,g){let _=g.length,v=!1;for(let w=_-1,T=0;T<_;w=T++){let A=g[w],B=g[T],L=B.x-A.x,q=B.y-A.y;if(Math.abs(q)>Number.EPSILON){if(q<0&&(A=g[T],L=-L,B=g[w],q=-q),m.y<A.y||m.y>B.y)continue;if(m.y===A.y){if(m.x===A.x)return!0}else{let N=q*(m.x-A.x)-L*(m.y-A.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(m.y!==A.y)continue;if(B.x<=m.x&&m.x<=A.x||A.x<=m.x&&m.x<=B.x)return!0}}return v}let r=Cn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(e===!0)return n(o);let s,a,c,l=[];if(o.length===1)return a=o[0],c=new Xn,c.curves=a.curves,l.push(c),l;let h=!r(o[0].getPoints());h=t?!h:h;let u=[],d=[],f=[],p=0,x;d[p]=void 0,f[p]=[];for(let m=0,g=o.length;m<g;m++)a=o[m],x=a.getPoints(),s=r(x),s=t?!s:s,s?(!h&&d[p]&&p++,d[p]={s:new Xn,p:x},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!d[0])return n(o);if(d.length>1){let m=!1,g=[];for(let _=0,v=d.length;_<v;_++)u[_]=[];for(let _=0,v=d.length;_<v;_++){let w=f[_];for(let T=0;T<w.length;T++){let A=w[T],B=!0;for(let L=0;L<d.length;L++)i(A.p,d[L].p)&&(_!==L&&g.push({froms:_,tos:L,hole:T}),B?(B=!1,u[L].push(A)):m=!0);B&&u[_].push(A)}}g.length>0&&(m||(f=u))}let y;for(let m=0,g=d.length;m<g;m++){c=d[m].s,l.push(c),y=f[m];for(let _=0,v=y.length;_<v;_++)c.holes.push(y[_].h)}return l}});function eh(t){this.type="Font",this.data=t}Object.assign(eh.prototype,{isFont:!0,generateShapes:function(t,e){e===void 0&&(e=100);let n=[],i=Wy(t,e,this.data);for(let r=0,o=i.length;r<o;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function Wy(t,e,n){let i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,s=[],a=0,c=0;for(let l=0;l<i.length;l++){let h=i[l];if(h===`
`)a=0,c-=o;else{let u=jy(h,r,a,c,n);a+=u.offsetX,s.push(u.path)}}return s}function jy(t,e,n,i,r){let o=r.glyphs[t]||r.glyphs["?"];if(!o){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}let s=new th,a,c,l,h,u,d,f,p;if(o.o){let x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let y=0,m=x.length;y<m;)switch(x[y++]){case"m":a=x[y++]*e+n,c=x[y++]*e+i,s.moveTo(a,c);break;case"l":a=x[y++]*e+n,c=x[y++]*e+i,s.lineTo(a,c);break;case"q":l=x[y++]*e+n,h=x[y++]*e+i,u=x[y++]*e+n,d=x[y++]*e+i,s.quadraticCurveTo(u,d,l,h);break;case"b":l=x[y++]*e+n,h=x[y++]*e+i,u=x[y++]*e+n,d=x[y++]*e+i,f=x[y++]*e+n,p=x[y++]*e+i,s.bezierCurveTo(u,d,f,p,l,h);break}}return{offsetX:o.ha*e,path:s}}function Jl(t){Ot.call(this,t)}Jl.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Jl,load:function(t,e,n,i){let r=this,o=new qe(this.manager);o.setPath(this.path),o.load(t,function(s){let a;try{a=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(s.substring(65,s.length-2))}let c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new eh(t)}});var qo,nh={getContext:function(){return qo===void 0&&(qo=new(window.AudioContext||window.webkitAudioContext)),qo},setContext:function(t){qo=t}};function mc(t){Ot.call(this,t)}mc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:mc,load:function(t,e,n,i){let r=this,o=new qe(r.manager);o.setResponseType("arraybuffer"),o.setPath(r.path),o.load(t,function(s){try{let a=s.slice(0);nh.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function $l(t,e,n){Ue.call(this,void 0,n);let i=new rt().set(t),r=new rt().set(e),o=new b(i.r,i.g,i.b),s=new b(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(s).multiplyScalar(a),this.sh.coefficients[1].copy(o).sub(s).multiplyScalar(c)}$l.prototype=Object.assign(Object.create(Ue.prototype),{constructor:$l,isHemisphereLightProbe:!0,copy:function(t){return Ue.prototype.copy.call(this,t),this},toJSON:function(t){return Ue.prototype.toJSON.call(this,t)}});function Ql(t,e){Ue.call(this,void 0,e);let n=new rt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Ql.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Ql,isAmbientLightProbe:!0,copy:function(t){return Ue.prototype.copy.call(this,t),this},toJSON:function(t){return Ue.prototype.toJSON.call(this,t)}});var Kl=new At,tu=new At;function qy(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ie,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ie,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(qy.prototype,{update:function(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;let i=t.projectionMatrix.clone(),r=e.eyeSep/2,o=r*e.near/e.focus,s=e.near*Math.tan(Mt.DEG2RAD*e.fov*.5)/e.zoom,a,c;tu.elements[12]=-r,Kl.elements[12]=r,a=-s*e.aspect+o,c=s*e.aspect+o,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-s*e.aspect-o,c=s*e.aspect-o,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(tu),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Kl)}});function ih(t){this.autoStart=t!==void 0?t:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(ih.prototype,{start:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=(typeof performance>"u"?Date:performance).now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}});var Hn=new b,eu=new re,Xy=new b,kn=new b;function nu(){et.call(this),this.type="AudioListener",this.context=nh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ih}nu.prototype=Object.assign(Object.create(et.prototype),{constructor:nu,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},updateMatrixWorld:function(t){et.prototype.updateMatrixWorld.call(this,t);let e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Hn,eu,Xy),kn.set(0,0,-1).applyQuaternion(eu),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Hn.x,i),e.positionY.linearRampToValueAtTime(Hn.y,i),e.positionZ.linearRampToValueAtTime(Hn.z,i),e.forwardX.linearRampToValueAtTime(kn.x,i),e.forwardY.linearRampToValueAtTime(kn.y,i),e.forwardZ.linearRampToValueAtTime(kn.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Hn.x,Hn.y,Hn.z),e.setOrientation(kn.x,kn.y,kn.z,n.x,n.y,n.z)}});function to(t){et.call(this),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}to.prototype=Object.assign(Object.create(et.prototype),{constructor:to,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},setMediaElementSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this},setMediaStreamSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(t){if(t===void 0&&(t=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),this.isPlaying===!0?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},setDetune:function(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(t){return this.loopStart=t,this},setLoopEnd:function(t){return this.loopEnd=t,this},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}});var Vn=new b,iu=new re,Yy=new b,Wn=new b;function ru(t){to.call(this,t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}ru.prototype=Object.assign(Object.create(to.prototype),{constructor:ru,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){return this.panner.refDistance=t,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){return this.panner.rolloffFactor=t,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){return this.panner.distanceModel=t,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){return this.panner.maxDistance=t,this},setDirectionalCone:function(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(t){if(et.prototype.updateMatrixWorld.call(this,t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Vn,iu,Yy),Wn.set(0,0,1).applyQuaternion(iu);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Vn.x,n),e.positionY.linearRampToValueAtTime(Vn.y,n),e.positionZ.linearRampToValueAtTime(Vn.z,n),e.orientationX.linearRampToValueAtTime(Wn.x,n),e.orientationY.linearRampToValueAtTime(Wn.y,n),e.orientationZ.linearRampToValueAtTime(Wn.z,n)}else e.setPosition(Vn.x,Vn.y,Vn.z),e.setOrientation(Wn.x,Wn.y,Wn.z)}});function rh(t,e){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e!==void 0?e:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}Object.assign(rh.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}});function oh(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(oh.prototype,{accumulate:function(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let s=0;s!==i;++s)n[r+s]=n[s];o=e}else{o+=e;let s=e/o;this._mixBufferRegion(n,r,0,s,i)}this.cumulativeWeight=o},accumulateAdditive:function(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){s.setValue(n,i);break}},saveOriginalState:function(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]},_slerp:function(t,e,n,i){re.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){let o=this._workIndex*r;re.multiplyQuaternionsFlat(t,o,t,e,t,n),re.slerpFlat(t,e,t,e,t,o,i)},_lerp:function(t,e,n,i,r){let o=1-i;for(let s=0;s!==r;++s){let a=e+s;t[a]=t[a]*o+t[n+s]*i}},_lerpAdditive:function(t,e,n,i,r){for(let o=0;o!==r;++o){let s=e+o;t[s]=t[s]+t[n+o]*i}}});var Dc="\\[\\]\\.:\\/",Zy=new RegExp("["+Dc+"]","g"),Ic="[^"+Dc+"]",Jy="[^"+Dc.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",Ic),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),Ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),ex=new RegExp("^"+$y+Qy+Ky+tx+"$"),nx=["material","materials","bones"];function sh(t,e,n){let i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(sh.prototype,{getValue:function(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function pe(t,e,n){this.path=e,this.parsedPath=n||pe.parseTrackName(e),this.node=pe.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(pe,{Composite:sh,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new pe.Composite(t,e,n):new pe(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Zy,"")},parseTrackName:function(t){let e=ex.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let s=r[o];if(s.name===e||s.uuid===e)return s;let a=n(s.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(pe.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[n++]},function(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=pe.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][s]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(pe.prototype,{_getValue_unbound:pe.prototype.getValue,_setValue_unbound:pe.prototype.setValue});function ix(){this.uuid=Mt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(ix.prototype,{isAnimationObjectGroup:!0,add:function(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,s,a=t.length,c=this.nCachedObjects_;for(let l=0,h=arguments.length;l!==h;++l){let u=arguments[l],d=u.uuid,f=e[d];if(f===void 0){f=a++,e[d]=f,t.push(u);for(let p=0,x=o;p!==x;++p)r[p].push(new pe(u,n[p],i[p]))}else if(f<c){s=t[f];let p=--c,x=t[p];e[x.uuid]=f,t[f]=x,e[d]=p,t[p]=u;for(let y=0,m=o;y!==m;++y){let g=r[y],_=g[p],v=g[f];g[f]=_,v===void 0&&(v=new pe(u,n[y],i[y])),g[p]=v}}else t[f]!==s&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,s=arguments.length;o!==s;++o){let a=arguments[o],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){let h=r++,u=t[h];e[u.uuid]=l,t[l]=u,e[c]=h,t[h]=a;for(let d=0,f=i;d!==f;++d){let p=n[d],x=p[h],y=p[l];p[l]=x,p[h]=y}}}this.nCachedObjects_=r},uncache:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let s=0,a=arguments.length;s!==a;++s){let c=arguments[s],l=c.uuid,h=e[l];if(h!==void 0)if(delete e[l],h<r){let u=--r,d=t[u],f=--o,p=t[f];e[d.uuid]=h,t[h]=d,e[p.uuid]=u,t[u]=p,t.pop();for(let x=0,y=i;x!==y;++x){let m=n[x],g=m[u],_=m[f];m[h]=g,m[u]=_,m.pop()}}else{let u=--o,d=t[u];e[d.uuid]=h,t[h]=d,t.pop();for(let f=0,p=i;f!==p;++f){let x=n[f];x[h]=x[u],x.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,s=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,o.push(t),s.push(e),r.push(h);for(let u=l,d=a.length;u!==d;++u){let f=a[u];h[u]=new pe(f,t,e)}return h},unsubscribe_:function(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,s=o.length-1,a=o[s],c=t[s];e[c]=n,o[n]=a,o.pop(),r[n]=r[s],r.pop(),i[n]=i[s],i.pop()}}});function ah(t,e,n,i){this._mixer=t,this._clip=e,this._localRoot=n||null,this.blendMode=i||e.blendMode;let r=e.tracks,o=r.length,s=new Array(o),a={endingStart:Oi,endingEnd:Oi};for(let c=0;c!==o;++c){let l=r[c].createInterpolant(null);s[c]=l,l.settings=a}this._interpolantSettings=a,this._interpolants=s,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(ah.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(t){return this._startTime=t,this},setLoop:function(t,e){return this.loop=t,this.repetitions=e,this},setEffectiveWeight:function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(t){return this._scheduleFading(t,0,1)},fadeOut:function(t){return this._scheduleFading(t,1,0)},crossFadeFrom:function(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,s=i/r;t.warp(1,o,e),this.warp(s,1,e)}return this},crossFadeTo:function(t,e,n){return t.crossFadeFrom(this,e,n)},stopFading:function(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},setEffectiveTimeScale:function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},syncWith:function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},halt:function(t){return this.warp(this._effectiveTimeScale,0,t)},warp:function(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,s=this._timeScaleInterpolant;s===null&&(s=i._lendControlInterpolant(),this._timeScaleInterpolant=s);let a=s.parameterPositions,c=s.sampleValues;return a[0]=r,a[1]=r+n,c[0]=t/o,c[1]=e/o,this},stopWarping:function(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let a=(t-r)*n;if(a<0||n===0)return;this._startTime=null,e=n*a}e*=this._updateTimeScale(t);let o=this._updateTime(e),s=this._updateWeight(t);if(s>0){let a=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Lu:for(let l=0,h=a.length;l!==h;++l)a[l].evaluate(o),c[l].accumulateAdditive(s);break;case Tc:default:for(let l=0,h=a.length;l!==h;++l)a[l].evaluate(o),c[l].accumulate(i,s)}}},_updateWeight:function(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e},_updateTimeScale:function(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e},_updateTime:function(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===Jf;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Yf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let s=Math.floor(i/e);i-=e*s,r+=Math.abs(s);let a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(a===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i},_setEndings:function(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ai,i.endingEnd=Ai):(t?i.endingStart=this.zeroSlopeAtStart?Ai:Oi:i.endingStart=as,e?i.endingEnd=this.zeroSlopeAtEnd?Ai:Oi:i.endingEnd=as)},_scheduleFading:function(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let s=o.parameterPositions,a=o.sampleValues;return s[0]=r,a[0]=e,s[1]=r+t,a[1]=n,this}});function ou(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}ou.prototype=Object.assign(Object.create(mn.prototype),{constructor:ou,_bindAction:function(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,s=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let h=0;h!==r;++h){let u=i[h],d=u.name,f=l[d];if(f!==void 0)o[h]=f;else{if(f=o[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,d));continue}let p=e&&e._propertyBindings[h].binding.parsedPath;f=new oh(pe.create(n,d,p),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,d),o[h]=f}s[h].resultBuffer=f.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let s=o.knownActions;t._byClipCacheIndex=s.length,s.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t},_removeInactiveAction:function(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,s=o[r],a=s.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;let h=s.actionByRoot,u=(t._localRoot||this._root).uuid;delete h[u],a.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,s=o[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete s[r],Object.keys(s).length===0&&delete o[i]},_lendBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Is(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Fe.findByName(i,t):t,s=o!==null?o.uuid:t,a=this._actionsByClip[s],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Tc),a!==void 0){let h=a.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=a.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let l=new ah(this,o,e,n);return this._bindAction(l,c),this._addInactiveAction(l,s,r),l},existingAction:function(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Fe.findByName(n,t):t,o=r?r.uuid:t,s=this._actionsByClip[o];return s!==void 0&&s.actionByRoot[i]||null},stopAllAction:function(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let s=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)s[c].apply(o);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let s=0,a=o.length;s!==a;++s){let c=o[s];this._deactivateAction(c);let l=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=l,e[l]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let s=n[o].actionByRoot,a=s[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let s=r[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function gc(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}gc.prototype.clone=function(){return new gc(this.value.clone===void 0?this.value:this.value.clone())};function su(t,e,n){Ee.call(this,t,e),this.meshPerAttribute=n||1}su.prototype=Object.assign(Object.create(Ee.prototype),{constructor:su,isInstancedInterleavedBuffer:!0,copy:function(t){return Ee.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){let e=Ee.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){let e=Ee.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function ch(t,e,n,i){this.ray=new ir(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function au(t,e){return t.distance-e.distance}function yc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){let r=t.children;for(let o=0,s=r.length;o<s;o++)yc(r[o],e,n,!0)}}Object.assign(ch.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e,n){let i=n||[];return yc(t,this,i,e),i.sort(au),i},intersectObjects:function(t,e,n){let i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,o=t.length;r<o;r++)yc(t[r],this,i,e);return i.sort(au),i}});function rx(t,e,n){return this.radius=t!==void 0?t:1,this.phi=e!==void 0?e:0,this.theta=n!==void 0?n:0,this}Object.assign(rx.prototype,{set:function(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Mt.clamp(e/this.radius,-1,1))),this}});function ox(t,e,n){return this.radius=t!==void 0?t:1,this.theta=e!==void 0?e:0,this.y=n!==void 0?n:0,this}Object.assign(ox.prototype,{set:function(t,e,n){return this.radius=t,this.theta=e,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}});var cu=new z;function lh(t,e){this.min=t!==void 0?t:new z(1/0,1/0),this.max=e!==void 0?e:new z(-1/0,-1/0)}Object.assign(lh.prototype,{set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromPoints:function(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(t,e){let n=cu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new z),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new z),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},getParameter:function(t,e){return e===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),e=new z),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},clampPoint:function(t,e){return e===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),e=new z),e.copy(t).clamp(this.min,this.max)},distanceToPoint:function(t){return cu.copy(t).clamp(this.min,this.max).sub(t).length()},intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});var lu=new b,Xo=new b;function uh(t,e){this.start=t!==void 0?t:new b,this.end=e!==void 0?e:new b}Object.assign(uh.prototype,{set:function(t,e){return this.start.copy(t),this.end.copy(e),this},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.start.copy(t.start),this.end.copy(t.end),this},getCenter:function(t){return t===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new b),t.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(t){return t===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),t=new b),t.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(t,e){return e===void 0&&(console.warn("THREE.Line3: .at() target is now required"),e=new b),this.delta(e).multiplyScalar(t).add(this.start)},closestPointToPointParameter:function(t,e){lu.subVectors(t,this.start),Xo.subVectors(this.end,this.start);let n=Xo.dot(Xo),r=Xo.dot(lu)/n;return e&&(r=Mt.clamp(r,0,1)),r},closestPointToPoint:function(t,e,n){let i=this.closestPointToPointParameter(t,e);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new b),this.delta(n).multiplyScalar(i).add(this.start)},applyMatrix4:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},equals:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}});function Fs(t){et.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Fs.prototype=Object.create(et.prototype);Fs.prototype.constructor=Fs;Fs.prototype.isImmediateRenderObject=!0;var uu=new b;function eo(t,e){et.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;let n=new ot,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,s=1,a=32;o<a;o++,s++){let c=o/a*Math.PI*2,l=s/a*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(l),Math.sin(l),1)}n.setAttribute("position",new tt(i,3));let r=new Qt({fog:!1,toneMapped:!1});this.cone=new ee(n,r),this.add(this.cone),this.update()}eo.prototype=Object.create(et.prototype);eo.prototype.constructor=eo;eo.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};eo.prototype.update=function(){this.light.updateMatrixWorld();let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),uu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(uu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var En=new b,Yo=new At,Sa=new At;function hh(t){let e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,hh(t.children[n]));return e}function er(t){let e=hh(t),n=new ot,i=[],r=[],o=new rt(0,0,1),s=new rt(0,1,0);for(let c=0;c<e.length;c++){let l=e[c];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(s.r,s.g,s.b))}n.setAttribute("position",new tt(i,3)),n.setAttribute("color",new tt(r,3));let a=new Qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});ee.call(this,n,a),this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}er.prototype=Object.create(ee.prototype);er.prototype.constructor=er;er.prototype.isSkeletonHelper=!0;er.prototype.updateMatrixWorld=function(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Sa.getInverse(this.root.matrixWorld);for(let r=0,o=0;r<e.length;r++){let s=e[r];s.parent&&s.parent.isBone&&(Yo.multiplyMatrices(Sa,s.matrixWorld),En.setFromMatrixPosition(Yo),i.setXYZ(o,En.x,En.y,En.z),Yo.multiplyMatrices(Sa,s.parent.matrixWorld),En.setFromMatrixPosition(Yo),i.setXYZ(o+1,En.x,En.y,En.z),o+=2)}n.getAttribute("position").needsUpdate=!0,et.prototype.updateMatrixWorld.call(this,t)};function no(t,e,n){this.light=t,this.light.updateMatrixWorld(),this.color=n;let i=new Vi(e,4,2),r=new ze({wireframe:!0,fog:!1,toneMapped:!1});zt.call(this,i,r),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}no.prototype=Object.create(zt.prototype);no.prototype.constructor=no;no.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};no.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};var sx=new b,hu=new rt,fu=new rt;function io(t,e,n){et.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;let i=new Gi(e);i.rotateY(Math.PI*.5),this.material=new ze({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new mt(o,3)),this.add(new zt(i,this.material)),this.update()}io.prototype=Object.create(et.prototype);io.prototype.constructor=io;io.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};io.prototype.update=function(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");hu.copy(this.light.color),fu.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?hu:fu;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}t.lookAt(sx.setFromMatrixPosition(this.light.matrixWorld).negate())};function xc(t,e,n,i){t=t||10,e=e||10,n=new rt(n!==void 0?n:4473924),i=new rt(i!==void 0?i:8947848);let r=e/2,o=t/e,s=t/2,a=[],c=[];for(let u=0,d=0,f=-s;u<=e;u++,f+=o){a.push(-s,0,f,s,0,f),a.push(f,0,-s,f,0,s);let p=u===r?n:i;p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3}let l=new ot;l.setAttribute("position",new tt(a,3)),l.setAttribute("color",new tt(c,3));let h=new Qt({vertexColors:!0,toneMapped:!1});ee.call(this,l,h),this.type="GridHelper"}xc.prototype=Object.assign(Object.create(ee.prototype),{constructor:xc,copy:function(t){return ee.prototype.copy.call(this,t),this.geometry.copy(t.geometry),this.material.copy(t.material),this},clone:function(){return new this.constructor().copy(this)}});function vc(t,e,n,i,r,o){t=t||10,e=e||16,n=n||8,i=i||64,r=new rt(r!==void 0?r:4473924),o=new rt(o!==void 0?o:8947848);let s=[],a=[];for(let h=0;h<=e;h++){let u=h/e*(Math.PI*2),d=Math.sin(u)*t,f=Math.cos(u)*t;s.push(0,0,0),s.push(d,0,f);let p=h&1?r:o;a.push(p.r,p.g,p.b),a.push(p.r,p.g,p.b)}for(let h=0;h<=n;h++){let u=h&1?r:o,d=t-t/n*h;for(let f=0;f<i;f++){let p=f/i*(Math.PI*2),x=Math.sin(p)*d,y=Math.cos(p)*d;s.push(x,0,y),a.push(u.r,u.g,u.b),p=(f+1)/i*(Math.PI*2),x=Math.sin(p)*d,y=Math.cos(p)*d,s.push(x,0,y),a.push(u.r,u.g,u.b)}}let c=new ot;c.setAttribute("position",new tt(s,3)),c.setAttribute("color",new tt(a,3));let l=new Qt({vertexColors:!0,toneMapped:!1});ee.call(this,c,l),this.type="PolarGridHelper"}vc.prototype=Object.create(ee.prototype);vc.prototype.constructor=vc;var du=new b,Zo=new b,pu=new b;function ro(t,e,n){et.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,e===void 0&&(e=1);let i=new ot;i.setAttribute("position",new tt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Qt({fog:!1,toneMapped:!1});this.lightPlane=new Re(i,r),this.add(this.lightPlane),i=new ot,i.setAttribute("position",new tt([0,0,0,0,0,1],3)),this.targetLine=new Re(i,r),this.add(this.targetLine),this.update()}ro.prototype=Object.create(et.prototype);ro.prototype.constructor=ro;ro.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};ro.prototype.update=function(){du.setFromMatrixPosition(this.light.matrixWorld),Zo.setFromMatrixPosition(this.light.target.matrixWorld),pu.subVectors(Zo,du),this.lightPlane.lookAt(Zo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Zo),this.targetLine.scale.z=pu.length()};var Jo=new b,Yt=new ln;function Bs(t){let e=new ot,n=new Qt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={},s=new rt(16755200),a=new rt(16711680),c=new rt(43775),l=new rt(16777215),h=new rt(3355443);u("n1","n2",s),u("n2","n4",s),u("n4","n3",s),u("n3","n1",s),u("f1","f2",s),u("f2","f4",s),u("f4","f3",s),u("f3","f1",s),u("n1","f1",s),u("n2","f2",s),u("n3","f3",s),u("n4","f4",s),u("p","n1",a),u("p","n2",a),u("p","n3",a),u("p","n4",a),u("u1","u2",c),u("u2","u3",c),u("u3","u1",c),u("c","t",l),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h);function u(f,p,x){d(f,x),d(p,x)}function d(f,p){i.push(0,0,0),r.push(p.r,p.g,p.b),o[f]===void 0&&(o[f]=[]),o[f].push(i.length/3-1)}e.setAttribute("position",new tt(i,3)),e.setAttribute("color",new tt(r,3)),ee.call(this,e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}Bs.prototype=Object.create(ee.prototype);Bs.prototype.constructor=Bs;Bs.prototype.update=function(){let t=this.geometry,e=this.pointMap,n=1,i=1;Yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$t("c",e,t,Yt,0,0,-1),$t("t",e,t,Yt,0,0,1),$t("n1",e,t,Yt,-n,-i,-1),$t("n2",e,t,Yt,n,-i,-1),$t("n3",e,t,Yt,-n,i,-1),$t("n4",e,t,Yt,n,i,-1),$t("f1",e,t,Yt,-n,-i,1),$t("f2",e,t,Yt,n,-i,1),$t("f3",e,t,Yt,-n,i,1),$t("f4",e,t,Yt,n,i,1),$t("u1",e,t,Yt,n*.7,i*1.1,-1),$t("u2",e,t,Yt,-n*.7,i*1.1,-1),$t("u3",e,t,Yt,0,i*2,-1),$t("cf1",e,t,Yt,-n,0,1),$t("cf2",e,t,Yt,n,0,1),$t("cf3",e,t,Yt,0,-i,1),$t("cf4",e,t,Yt,0,i,1),$t("cn1",e,t,Yt,-n,0,-1),$t("cn2",e,t,Yt,n,0,-1),$t("cn3",e,t,Yt,0,-i,-1),$t("cn4",e,t,Yt,0,i,-1),t.getAttribute("position").needsUpdate=!0};function $t(t,e,n,i,r,o,s){Jo.set(r,o,s).unproject(i);let a=e[t];if(a!==void 0){let c=n.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],Jo.x,Jo.y,Jo.z)}}var $o=new Qe;function ri(t,e){this.object=t,e===void 0&&(e=16776960);let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new ot;r.setIndex(new mt(n,1)),r.setAttribute("position",new mt(i,3)),ee.call(this,r,new Qt({color:e,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}ri.prototype=Object.create(ee.prototype);ri.prototype.constructor=ri;ri.prototype.update=function(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&$o.setFromObject(this.object),$o.isEmpty())return;let e=$o.min,n=$o.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()};ri.prototype.setFromObject=function(t){return this.object=t,this.update(),this};ri.prototype.copy=function(t){return ee.prototype.copy.call(this,t),this.object=t.object,this};ri.prototype.clone=function(){return new this.constructor().copy(this)};function Us(t,e){this.type="Box3Helper",this.box=t,e=e||16776960;let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ot;r.setIndex(new mt(n,1)),r.setAttribute("position",new tt(i,3)),ee.call(this,r,new Qt({color:e,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Us.prototype=Object.create(ee.prototype);Us.prototype.constructor=Us;Us.prototype.updateMatrixWorld=function(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),et.prototype.updateMatrixWorld.call(this,t))};function zs(t,e,n){this.plane=t,this.size=e===void 0?1:e;let i=n!==void 0?n:16776960,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new ot;o.setAttribute("position",new tt(r,3)),o.computeBoundingSphere(),Re.call(this,o,new Qt({color:i,toneMapped:!1})),this.type="PlaneHelper";let s=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],a=new ot;a.setAttribute("position",new tt(s,3)),a.computeBoundingSphere(),this.add(new zt(a,new ze({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}zs.prototype=Object.create(Re.prototype);zs.prototype.constructor=zs;zs.prototype.updateMatrixWorld=function(t){let e=-this.plane.constant;Math.abs(e)<1e-8&&(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e<0?se:oi,this.lookAt(this.plane.normal),et.prototype.updateMatrixWorld.call(this,t)};var mu=new b,Qo,Ea;function Fn(t,e,n,i,r,o){et.call(this),this.type="ArrowHelper",t===void 0&&(t=new b(0,0,1)),e===void 0&&(e=new b(0,0,0)),n===void 0&&(n=1),i===void 0&&(i=16776960),r===void 0&&(r=.2*n),o===void 0&&(o=.2*r),Qo===void 0&&(Qo=new ot,Qo.setAttribute("position",new tt([0,0,0,0,1,0],3)),Ea=new Nn(0,.5,1,5,1),Ea.translate(0,-.5,0)),this.position.copy(e),this.line=new Re(Qo,new Qt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new zt(Ea,new ze({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}Fn.prototype=Object.create(et.prototype);Fn.prototype.constructor=Fn;Fn.prototype.setDirection=function(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{mu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(mu,e)}};Fn.prototype.setLength=function(t,e,n){e===void 0&&(e=.2*t),n===void 0&&(n=.2*e),this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()};Fn.prototype.setColor=function(t){this.line.material.color.set(t),this.cone.material.color.set(t)};Fn.prototype.copy=function(t){return et.prototype.copy.call(this,t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this};Fn.prototype.clone=function(){return new this.constructor().copy(this)};function _c(t){t=t||1;let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ot;i.setAttribute("position",new tt(e,3)),i.setAttribute("color",new tt(n,3));let r=new Qt({vertexColors:!0,toneMapped:!1});ee.call(this,i,r),this.type="AxesHelper"}_c.prototype=Object.create(ee.prototype);_c.prototype.constructor=_c;var Ni=4,Pn=8,ke=Math.pow(2,Pn),fh=[.125,.215,.35,.446,.526,.582],dh=Pn-Ni+1+fh.length,Ti=20,je={[xe]:0,[ks]:1,[Lc]:2,[Ru]:3,[Cu]:4,[Pu]:5,[Ac]:6},Ta=new Qr,{_lodPlanes:yr,_sizeLods:gu,_sigmas:Ko}=cx(),Aa=null,jn=(1+Math.sqrt(5))/2,Si=1/jn,yu=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,jn,Si),new b(0,jn,-Si),new b(Si,0,jn),new b(-Si,0,jn),new b(jn,Si,0),new b(-jn,Si,0)];function xu(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=lx(Ti),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}xu.prototype={constructor:xu,fromScene:function(t,e=0,n=.1,i=100){Aa=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r},fromEquirectangular:function(t){return this._fromTexture(t)},fromCubemap:function(t){return this._fromTexture(t)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=bu(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=_u(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<yr.length;t++)yr[t].dispose()},_cleanup:function(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Aa),t.scissorTest=!1,ts(t,0,0,t.width,t.height)},_fromTexture:function(t){Aa=this._renderer.getRenderTarget();let e=this._allocateTargets(t);return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e},_allocateTargets:function(t){let e={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:so,format:hf,encoding:ax(t)?t.encoding:Lc,depthBuffer:!1,stencilBuffer:!1},n=vu(e);return n.depthBuffer=!t,this._pingPongRenderTarget=vu(e),n},_compileMaterial:function(t){let e=new zt(yr[0],t);this._renderer.compile(e,Ta)},_sceneToCubeUV:function(t,e,n,i){let s=new ie(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.outputEncoding,u=l.toneMapping,d=l.getClearColor(),f=l.getClearAlpha();l.toneMapping=Di,l.outputEncoding=xe;let p=t.background;if(p&&p.isColor){p.convertSRGBToLinear();let x=Math.max(p.r,p.g,p.b),y=Math.min(Math.max(Math.ceil(Math.log2(x)),-128),127);p=p.multiplyScalar(Math.pow(2,-y));let m=(y+128)/255;l.setClearColor(p,m),t.background=null}for(let x=0;x<6;x++){let y=x%3;y==0?(s.up.set(0,a[x],0),s.lookAt(c[x],0,0)):y==1?(s.up.set(0,0,a[x]),s.lookAt(0,c[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,c[x])),ts(i,y*ke,x>2?ke:0,ke,ke),l.setRenderTarget(i),l.render(t,s)}l.toneMapping=u,l.outputEncoding=h,l.setClearColor(d,f)},_textureToCubeUV:function(t,e){let n=this._renderer;t.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=bu()):this._equirectShader==null&&(this._equirectShader=_u());let i=t.isCubeTexture?this._cubemapShader:this._equirectShader,r=new zt(yr[0],i),o=i.uniforms;o.envMap.value=t,t.isCubeTexture||o.texelSize.value.set(1/t.image.width,1/t.image.height),o.inputEncoding.value=je[t.encoding],o.outputEncoding.value=je[e.texture.encoding],ts(e,0,0,3*ke,2*ke),n.setRenderTarget(e),n.render(r,Ta)},_applyPMREM:function(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<dh;i++){let r=Math.sqrt(Ko[i]*Ko[i]-Ko[i-1]*Ko[i-1]),o=yu[(i-1)%yu.length];this._blur(t,i-1,i,r,o)}e.autoClear=n},_blur:function(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)},_halfBlur:function(t,e,n,i,r,o,s){let a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,h=new zt(yr[i],c),u=c.uniforms,d=gu[n]-1,f=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),p=r/f,x=isFinite(r)?1+Math.floor(l*p):Ti;x>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ti}`);let y=[],m=0;for(let w=0;w<Ti;++w){let T=w/p,A=Math.exp(-T*T/2);y.push(A),w==0?m+=A:w<x&&(m+=2*A)}for(let w=0;w<y.length;w++)y[w]=y[w]/m;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=y,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s),u.dTheta.value=f,u.mipInt.value=Pn-n,u.inputEncoding.value=je[t.texture.encoding],u.outputEncoding.value=je[t.texture.encoding];let g=gu[i],_=3*Math.max(0,ke-2*g),v=(i===0?0:2*ke)+2*g*(i>Pn-Ni?i-Pn+Ni:0);ts(e,_,v,3*g,2*g),a.setRenderTarget(e),a.render(h,Ta)}};function ax(t){return t===void 0||t.type!==so?!1:t.encoding===xe||t.encoding===ks||t.encoding===Ac}function cx(){let t=[],e=[],n=[],i=Pn;for(let r=0;r<dh;r++){let o=Math.pow(2,i);e.push(o);let s=1/o;r>Pn-Ni?s=fh[r-Pn+Ni-1]:r==0&&(s=0),n.push(s);let a=1/(o-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=2,x=1,y=new Float32Array(f*d*u),m=new Float32Array(p*d*u),g=new Float32Array(x*d*u);for(let v=0;v<u;v++){let w=v%3*2/3-1,T=v>2?0:-1,A=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(A,f*d*v),m.set(h,p*d*v);let B=[v,v,v,v,v,v];g.set(B,x*d*v)}let _=new ot;_.setAttribute("position",new mt(y,f)),_.setAttribute("uv",new mt(m,p)),_.setAttribute("faceIndex",new mt(g,x)),t.push(_),i>Ni&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function vu(t){let e=new Te(3*ke,3*ke,t);return e.texture.mapping=oo,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ts(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lx(t){let e=new Float32Array(t),n=new b(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:je[xe]},outputEncoding:{value:je[xe]}},vertexShader:Nc(),fragmentShader:`
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

${Oc()}

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function _u(){let t=new z(1,1);return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:je[xe]},outputEncoding:{value:je[xe]}},vertexShader:Nc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Oc()}

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function bu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:je[xe]},outputEncoding:{value:je[xe]}},vertexShader:Nc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Oc()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Nc(){return`
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
	`}function Oc(){return`
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
	`}ft.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(ft.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(An.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=new vt;for(let n=0,i=t.length;n<i;n++){let r=t[n];e.vertices.push(new b(r.x,r.y,r.z||0))}return e}});Object.assign(We.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function ux(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),me.call(this,t),this.type="catmullrom",this.closed=!0}ux.prototype=Object.create(me.prototype);function hx(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),me.call(this,t),this.type="catmullrom"}hx.prototype=Object.create(me.prototype);function ph(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),me.call(this,t),this.type="catmullrom"}ph.prototype=Object.create(me.prototype);Object.assign(ph.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});xc.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};er.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Ot.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ku.extractUrlBase(t)}});Ot.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(pc.prototype,{setTexturePath:function(t){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(t)}});Object.assign(lh.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Qe.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(gn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});co.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};uh.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(Mt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Mt.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Mt.ceilPowerOfTwo(t)}});Object.assign(he.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(At.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,o){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,o)}});Ve.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};re.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)};Object.assign(ir.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(ce.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(ce,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ce.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ce.getNormal(t,e,n,i)}});Object.assign(Xn.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ki(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Wi(this,t)}});Object.assign(z.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(b.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Nt.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(vt.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.assign(et.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(et.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(zt.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(zt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),$f},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(fs.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(ka.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Ha.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(ft.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});ie.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Gt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(mt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Tr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Tr)}}});Object.assign(mt.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Tr:Vs),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(ot.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new mt(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ot.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Os.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(ch.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(Ee.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Tr},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(Ee.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Tr:Vs),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(un.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(gc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(gt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new rt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Mu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(ii.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(ve.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(Ws.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Ws.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?ks:xe}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Wu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Te.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties(to.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new mc().load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});rh.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Rr.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};Zn.crossOrigin=void 0;Zn.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new ec;r.setCrossOrigin(this.crossOrigin);let o=r.load(t,n,void 0,i);return e&&(o.mapping=e),o};Zn.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new tc;r.setCrossOrigin(this.crossOrigin);let o=r.load(t,n,void 0,i);return e&&(o.mapping=e),o};Zn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Zn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));function or(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}function mh(){let t=or();return t+=`
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    ${_t.common}
    
    void main(){
        vUv=uv;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;
        
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        ${_t.worldpos_vertex}
        
    }`,t}function gh(){let t=or();return t+=`
        
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
    uniform sampler2D crossNoise;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    
    #define PI 3.1415926535897932384626
    
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        vec4 Cd = texture2D(diffuse,vUv);
        Cd.a=1.0;
        gl_FragColor=Cd;
    }`,t}var lo=z,Ke=b;var fx={NONE:0,ERROR:1,WARN:2,INFO:3},dx={OFF:0,LOW:1,MEDIUM:2,HIGH:3},yx={verbose:fx.NONE,antiAliasing:dx.LOW};function yh(t=!1){let e=`
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
    `;return t&&(e+=`
        ${_t.common}
        ${_t.shadowmap_pars_vertex}
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
        
        `,t&&(e+=`
            ${_t.worldpos_vertex}
            ${_t.shadowmap_vertex}
          `),e+=`
    }`,e}function xh(t,e,n,i,r,o){let s=!1,a=1;t.hasOwnProperty("Specular")&&t.Specular>0&&(s=!0,a=t.Specular);let c=!1;t.PointColor&&(c=!0);let l=!0,h="1.0";t.hasOwnProperty("SurfaceNoise")&&(t.SurfaceNoise%1==0&&(h=t.SurfaceNoise+".0"),h=="0.0"&&(l=!1));let u=`
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
      `),r&&(u+=`
      
      ${_t.packing}
      
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
      `),u+=`
    void main(){
      `,c)u+="vec3 vertCd = vCd;";else if(e){let x=_=>_%1==0?_+".0":_+"",y=x(e.r),m=x(e.g),g=x(e.b);u+=`vec3 vertCd = vec3( ${y}, ${m}, ${g} ) ;`}else u+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";u+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,n&&(u+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let d="",f="",p="";if(l&&(h!="1.0"&&(d="*"+h),u+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,f=`+detailMult * (shadowInf*.5+.5) ${d}`,p=`(detailMult+.5) ${d}`),i&&(u+=`
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
            `)),r){u+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let x=0;x<o;++x)u+=`
                i=${x};
                lShadow = getPointShadow( pointShadowMap[${x}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;u+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${f} ;
            `,l&&(u+=`
              #else
                Cd.rgb*=${p};
              `),u+=`
          #endif
          `}else l&&(u+=`
            Cd.rgb*=${p};
            `);return u+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,u}var uo=class{constructor(e="CampfireEnvironment",n=null,i=null,r=null,o=null,s=null,a=null,c=null,l=null,h=null,u=null){this.roomName=e,this.pxlFile=i,this.pxlUtils=o,this.pxlAnim=r,this.pxlDevice=s,this.pxlEnv=a,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=n+"Assets/",this.mobile=s.mobile,this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animFile=this.assetPath+"Campfire_RabbitDruidA_anim.fbx",this.animClips={},this.animMixer=null,this.envObjName="environmentGround",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new Ke(0,0,-30),this.camThumbLookAt=new Ke(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new Ke(0,0,0),this.cameraAimTarget=new et(0,0,0),this.camHoldWarpPos=!0,this.camLocation={},this.pxlCamFOV=this.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new rt(.01,.02,.05),this.fogExp=7e-4,this.fog=new Kn(this.fogColor,this.fogExp),this.userAvatarGroup=new Qn,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new Ke(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new lo(0,0),this.msRunner=c,this.camera=l,this.autoCamPaths={},this.scene=h,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.portalList={},this.hoverableExists=!1,this.hoverableList=[],this.hoverableObj=null,this.clickableExists=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.cloud3dTexture=this.pxlEnv.cloud3dTexture,this.cloud3dTexture.wrapS=cn,this.cloud3dTexture.wrapT=cn,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture,this.smoothNoiseTexture.wrapS=cn,this.smoothNoiseTexture.wrapT=cn}start(){this.booted&&this.resetCamera()}step(){this.runTime.x=this.msRunner.x}stop(){}resize(e,n){}setUserHeight(e=1){this.pxlEnv.pxlCamera.userScale=e}resetCamera(){this.pxlEnv.pxlCamera.setTransform(this.camInitPos,this.camInitLookAt)}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(e,n=null){this.geoList.MainRoomWarp.material.map=e}applyRoomPass(e=null){}getArtistInfo(){return null}setFog(e){}getShaderList(){let e={};return Object.keys(this.textureList).forEach(i=>{e[i]=i}),e}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(e="",n=null){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(n||(n=new Ke),this.textureList[this.currentShader].uniforms.sliders.value=n,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=e,this.textureList[this.currentShader]}setShader(e,n,i){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(r=>{let o=r.material;o.vertexShader=n,o.fragmentShader=i,o.needsUpdate=!0}),this.textureList[this.currentShader].vertexShader=n,this.textureList[this.currentShader].fragmentShader=i,this.textureList[this.currentShader].needsUpdate=!0}castRay(e,n){if(!e&&!this.hoverableExists||e&&!this.clickableExists)return;let i=[];if(!e&&this.hoverableExists?i=this.hoverableList:e&&this.clickableExists&&(i=this.clickableList),i.length>0){let o=new lo(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(o,this.pxlEnv.pxlCamera.camera);var r=[];r=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(i)}}toCameraPos(e){if(this.cameraBooted&&this.camLocation.hasOwnProperty(e)){let n=this.mobile?"PositionMobile":"Position",i=this.mobile?"LookAtMobile":"LookAt",r=this.camLocation[e][n],o=this.camLocation[e][i];o||(o=new Ke(0,0,1),o.addVectors(r,o)),this.pxlEnv.pxlCamera.setTransform(this.camLocation[e][n],this.camLocation[e][i]),this.setUserHeight(this.camInitPos.y)}}fbxPostLoad(){this.toCameraPos("Default");let e=0;if(this.lightList.hasOwnProperty("PointLight")&&(e=this.lightList.PointLight.length),this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(o=>{o.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let o=this.geoList.Sky_EqRect_Mesh.material;o.uniforms&&o.uniforms.envDiffuse&&(o.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var n=new Kr(3158064);this.scene.add(n);let i=Object.keys(this.lightList);if(i.length>0&&i.forEach(o=>{this.lightList[o].forEach(s=>{o=="DirectionalLight"?s.castShadow=!1:o=="PointLight"&&(s.shadow.radius=5,s.shadow.receiveShadow=!0,s.shadow.mapSize.width=512,s.shadow.mapSize.height=512,s.shadow.camera.near=.5,s.shadow.camera.far=35,s.shadow.bias=.025,s.shadow.radius=5)})}),this.shaderGeoList)for(let o in this.shaderGeoList){let s=this.shaderGeoList[o];if(s.userData&&s.userData.Shader=="pxlPrincipled"){let a=ao.merge([K.common,K.lights,K.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var r={};r.USE_MAP="";let c={},l=!0,h=s.userData.castShadow==!0||s.userData.receiveShadow==!0,u=!0,d=!1;s.material.map||(d=s.material.color.clone()),s.userData.ShaderParms&&s.userData.ShaderParms!=""&&(c=JSON.parse(s.userData.ShaderParms));let f=this.pxlFile.pxlShaderBuilder(a,yh(h),xh(c,d,u,l,h,e),r);f.transparent=!1,f.lights=!0,d||(f.uniforms.dTexture.value=s.material.map),f.uniforms.noiseTexture.value=this.cloud3dTexture,f.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,s.material=f,this.textureList[s.name]=f}}}animPostLoad(e,n){}build(){}onMessage(e,n){switch(console.log("Room : "+this.roomName+" - Message Received: "+e),console.log("Message : "+n),e=e.toLowerCase(),e){case"roomwarp":this.roomWarp=n;break;default:case"roommessage":console.log("-- Message Type Not Recognized -- "),console.log("Room : "+this.roomName),console.log("Message Received: "+e),console.log("Message : "+n);break}}};function qs(t,e=120){let n=or();return n+=`
                
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
    
    #define PROX ${e.toFixed(3)}
    #define PROX_INV 1.0/${(e*1.8).toFixed(3)}
    
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
    }`,n}function Xs(){let t=or();return t+=`
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
    }`,t}var ho=class{constructor(e=null,n="particles"){this.name=n,this.room=e,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new lo(0,0),this.position=new Ke(0,0,0),this.atlasPath=this.room.assetPath+"sprite_dustLiquid.png"}build(e=30,n=6,i=4,r=null){r||(r=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(e,n,i,r)}setPosition(...e){e.length===1?this.position=e[0]:this.position=new Ke(...e),this.points&&this.points.position.copy(this.position)}addToScene(e=30,n=6,i=null,r=4,o=[[0,0]],s=!1){this.count=e,this.pscale.x=n*this.room.pxlEnv.pxlQuality.screenResPerc;let a=null;s?(a=this.atlasRandomGen,o=r):a=this.atlasArrayPicker,i||(i=this.newMaterial());let c=[],l=[],h=[];for(let y=0;y<e;++y)c.push(0,0,0),l.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),h.push(...a(o));let u=new tt(c,3),d=new tt(l,4),f=new tt(h,2),p=new ot;p.setAttribute("position",u),p.setAttribute("seeds",d),p.setAttribute("atlas",f);let x=new Ir(p,i);return x.sortParticles=!1,x.frustumCulled=!1,this.room.scene.add(x),x.layers.set(1),x.pBaseScale=n,this.room.geoList[this.name]=x,this.geometry=p,this.material=i,this.points=x,x.position.copy(this.position),x}setUserHeight(e){this.pxlEnv.pxlCamera.userScale=e}atlasRandomGen(e=4,n=2){let i=1/e;return Array.from({length:n}).map(()=>Math.floor(Math.random()*648405.71%e)*i)}atlasRandomList(e=4,n=4,i=2){return Array.from({length:e}).map(r=>this.atlasRandomGen(n,i))}atlasArrayPicker(e){return e[Math.floor(Math.random()*92314.75%e.length)]}dupeArray(e,n){return Array.from({length:n}).fill(e)}elementDuplicator(e,n=4){return e.map(i=>this.dupeArray(i,n)).flat(1)}findLightPositions(){let e=[],n=0;return this.room.lightList.hasOwnProperty("PointLight")&&(n=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(i=>{e.push(i.position.clone())})),e}setAtlasPath(e){this.atlasPath=e}newMaterial(e=!0){let n=this.findLightPositions(),i={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:n}},r=this.room.pxlFile.pxlShaderBuilder(i,qs(n.length),Xs());return r.side=$e,r.transparent=!0,r.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:Zt,minFilter:Yn}),r.uniforms.noiseTexture.value=this.room.softNoiseTexture,r.depthTest=!0,r.depthWrite=!1,e&&(this.room.textureList[this.name]=r),r}};var fo=class extends ho{constructor(e=null,n="floatingDust"){super(e,n),this.name=n,this.room=e}build(e=1e3,n=7,i=120,r=[0,0,0],o=[0,1],s=[[0,0]],a=!0){let c=super.findLightPositions();o=new z(o[0],o[1]),r=new b(r[0],r[1],r[2]);let l={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:r},windDir:{type:"v",value:o},lightPos:{value:c}},h=this.room.pxlFile.pxlShaderBuilder(l,qs(c.length,i),Xs());h.side=$e,h.transparent=!0,h.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:Zt,minFilter:Yn}),h.uniforms.noiseTexture.value=this.room.softNoiseTexture,h.depthTest=!0,h.depthWrite=!1,this.room.textureList[this.name]=h,super.addToScene(e,n,h,4,s,a)}};var vh=class extends uo{constructor(e="SaltFlatsEnvironment",n=null,i=null,r=null,o=null,s=null,a=null,c=null,l=null,h=null,u=null){super(e,n,i,r,o,s,a,c,l,h,u),this.assetPath=n+"Assets/",this.sceneFile=this.assetPath+"SaltFlatsEnvironment.fbx",this.animInitCycle="Walk",this.animRigName="RabbitDruidASalt",this.animSource={RabbitDruidASalt:{rig:this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",anim:{Walk:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_walk.fbx"},stateConnections:{Walk:["Walk"]}}},this.animMixer=null,this.envObjName="EnvGround_geo",this.textureList={},this.particleList={},this.pxlCamFOV=s.mobile?80:40,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=1,this.pxlCamFarClipping=1e4,this.fogColor=new rt(.31,.42,.55),this.fogExp=7e-4,this.fog=new Kn(this.fogColor,this.fogExp),this.perspectiveInstances=160}init(){super.init()}start(){this.booted&&this.resetCamera();let e=this.animRigName;if(this.geoList.hasOwnProperty(e)&&this.geoList.Scripted.hasOwnProperty("Offset_loc")){let n=this.geoList.Scripted.Offset_loc,i=this.geoList[e],r=n.position.clone(),o=n.rotation.clone(),s=n.scale.clone();i.position.set(r.x,r.y,r.z),i.rotation.set(o.x,o.y,o.z),i.scale.set(s.x,s.y,s.z)}this.pxlAnim&&this.pxlAnim.hasClip(e,this.animInitCycle)&&this.pxlAnim.playClip(e,this.animInitCycle),this.geoList.Scripted.hasOwnProperty("pokinStick_geo")&&(this.geoList.Scripted.pokinStick_geo.visible=!1)}step(){super.step(),this.animMixer&&this.pxlAnim.step(this.animRigName);let e=this.geoList.Scripted.MovingEng_grp;if(e){e.position.z=3.6*this.msRunner.x%150;let r=150-0;e.position.z>r&&(e.position.z-=r)}}fbxPostLoad(){super.fbxPostLoad();let e="floatingDust";this.particleList[e]=new fo(this,e);let n=this.assetPath+"sprite_dustLiquid.png";this.particleList[e].setAtlasPath(n),this.particleList[e].build(1e3,10,120,[-40,-10,0],[0,5],[[.25,0],[.25,.25]],!1),this.booted=!0}animPostLoad(e){if(this.pxlAnim.hasClip(e,this.animInitCycle)){let i=this.pxlAnim.getMixer(e);this.animMixer=i,this.pxlAnim.playClip(e,this.animInitCycle)}else this.animInitCycle=fallback,this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");let n=this.pxlAnim.getMesh(e);if(n){let i=n.material;i.side=$e}}build(){let e=this.animRigName,n=this.pxlFile.loadAnimFBX(this,e,this.animSource[e].rig,this.animSource[e].anim,this.animSource[e].stateConnections),i=ao.merge([{diffuse:{type:"t",value:null},noiseTexture:{type:"t",value:this.cloud3dTexture},baseCd:{type:"f",value:.1},fogColor:{type:"c",value:this.fogColor}}]),r=this.pxlFile.pxlShaderBuilder(i,mh(),gh());return r.side=oi,this.textureList.EnvGround_geo=r,this.pxlFile.loadRoomFBX(this,this.sceneFile,this.envObjName,this.textureList)}};export{vh as SaltFlatsEnvironment};
