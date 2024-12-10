Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");let t=Object(e);for(let n=1;n<arguments.length;n++){let i=arguments[n];if(i!=null)for(let r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t});var Fh="118";var Uh=0,kc=1,zh=2;var Su=1,Hh=2,_r=3,ao=0,at=1,pt=2,Tu=1;var Dn=0,wr=1,Wc=2,jc=3,qc=4,Gh=5,Ci=100,Vh=101,kh=102,Xc=103,Yc=104,Wh=200,jh=201,qh=202,Xh=203,Eu=204,Au=205,Yh=206,Zh=207,Jh=208,$h=209,Qh=210,Kh=0,ef=1,tf=2,Ra=3,nf=4,rf=5,of=6,sf=7,ks=0,af=1,cf=2,Oi=0,lf=1,uf=2,hf=3,ff=4,df=5,Mc=300,Sc=301,Tc=302,Cu=303,Ec=304,co=306,Ac=307,ft=1e3,_t=1001,ss=1002,Ue=1003,Vt=1004;var Bn=1005;var Qe=1006,Lu=1007;var Ws=1008;var lo=1009,pf=1010,mf=1011,as=1012,gf=1013,rs=1014,Pn=1015,cs=1016,vf=1017,yf=1018,xf=1019,Mr=1020,_f=1021,$n=1022,Ht=1023,bf=1024,wf=1025,Mf=Ht,Bi=1026,Ar=1027,Sf=1028,Tf=1029,Ef=1030,Af=1031,Cf=1032,Lf=1033,Zc=33776,Jc=33777,$c=33778,Qc=33779,Kc=35840,el=35841,tl=35842,nl=35843,Pf=36196,il=37492,rl=37496,Rf=37808,Df=37809,If=37810,Nf=37811,Of=37812,Bf=37813,Ff=37814,Uf=37815,zf=37816,Hf=37817,Gf=37818,Vf=37819,kf=37820,Wf=37821,jf=36492,qf=37840,Xf=37841,Yf=37842,Zf=37843,Jf=37844,$f=37845,Qf=37846,Kf=37847,ed=37848,td=37849,nd=37850,id=37851,rd=37852,od=37853,sd=2200,ad=2201,cd=2202,ls=2300,os=2301,Ks=2302,Ui=2400,Pi=2401,us=2402,Cc=2500,Pu=2501,ld=0;var bt=3e3,js=3001,Lc=3007,Pc=3002,ud=3003,Ru=3004,Du=3005,Iu=3006,hd=3200,fd=3201,or=0,dd=1;var ea=7680;var pd=519,qs=35044,Cr=35048;function vn(){}Object.assign(vn.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e)}}});var ct=[];for(let e=0;e<256;e++)ct[e]=(e<16?"0":"")+e.toString(16);var Me={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+"-"+ct[t&255]+ct[t>>8&255]+"-"+ct[t>>16&15|64]+ct[t>>24&255]+"-"+ct[n&63|128]+ct[n>>8&255]+"-"+ct[n>>16&255]+ct[n>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*Me.DEG2RAD},radToDeg:function(e){return e*Me.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){let o=Math.cos,s=Math.sin,a=o(n/2),c=s(n/2),l=o((t+i)/2),h=s((t+i)/2),u=o((t-i)/2),d=s((t-i)/2),f=o((i-t)/2),p=s((i-t)/2);switch(r){case"XYX":e.set(a*h,c*u,c*d,a*l);break;case"YZY":e.set(c*d,a*h,c*u,a*l);break;case"ZXZ":e.set(c*u,c*d,a*h,a*l);break;case"XZX":e.set(a*h,c*p,c*f,a*l);break;case"YXY":e.set(c*f,a*h,c*p,a*l);break;case"ZYZ":e.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function z(e=0,t=0){this.x=e,this.y=t}Object.defineProperties(z.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}});Object.assign(z.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this},clampLength:function(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function ht(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(ht.prototype,{isMatrix3:!0,set:function(e,t,n,i,r,o,s,a,c){let l=this.elements;return l[0]=e,l[1]=i,l[2]=s,l[3]=t,l[4]=r,l[5]=a,l[6]=n,l[7]=o,l[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this},extractBasis:function(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},setFromMatrix4:function(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],a=n[6],c=n[1],l=n[4],h=n[7],u=n[2],d=n[5],f=n[8],p=i[0],y=i[3],v=i[6],m=i[1],g=i[4],_=i[7],x=i[2],w=i[5],E=i[8];return r[0]=o*p+s*m+a*x,r[3]=o*y+s*g+a*w,r[6]=o*v+s*_+a*E,r[1]=c*p+l*m+h*x,r[4]=c*y+l*g+h*w,r[7]=c*v+l*_+h*E,r[2]=u*p+d*m+f*x,r[5]=u*y+d*g+f*w,r[8]=u*v+d*_+f*E,this},multiplyScalar:function(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],a=e[6],c=e[7],l=e[8];return t*o*l-t*s*c-n*r*l+n*s*a+i*r*c-i*o*a},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");let n=e.elements,i=this.elements,r=n[0],o=n[1],s=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=d*c-l*u,p=l*h-d*a,y=u*a-c*h,v=r*f+o*p+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/v;return i[0]=f*m,i[1]=(s*u-d*o)*m,i[2]=(l*o-s*c)*m,i[3]=p*m,i[4]=(d*r-s*h)*m,i[5]=(s*a-l*r)*m,i[6]=y*m,i[7]=(o*h-u*r)*m,i[8]=(c*r-o*a)*m,this},transpose:function(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,n,i,r,o,s){let a=Math.cos(r),c=Math.sin(r);this.set(n*a,n*c,-n*(a*o+c*s)+o+e,-i*c,i*a,-i*(-c*o+a*s)+s+t,0,0,1)},scale:function(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this},rotate:function(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],s=i[6],a=i[1],c=i[4],l=i[7];return i[0]=t*r+n*a,i[3]=t*o+n*c,i[6]=t*s+n*l,i[1]=-n*r+t*a,i[4]=-n*o+t*c,i[7]=-n*s+t*l,this},translate:function(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this},equals:function(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}});var hi,Kn={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),hi.width=e.width,hi.height=e.height;let n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}},md=0;function Be(e,t,n,i,r,o,s,a,c,l){Object.defineProperty(this,"id",{value:md++}),this.uuid=Me.generateUUID(),this.name="",this.image=e!==void 0?e:Be.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:Be.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:_t,this.wrapT=i!==void 0?i:_t,this.magFilter=r!==void 0?r:Qe,this.minFilter=o!==void 0?o:Ws,this.anisotropy=c!==void 0?c:1,this.format=s!==void 0?s:Ht,this.internalFormat=null,this.type=a!==void 0?a:lo,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:bt,this.version=0,this.onUpdate=null}Be.DEFAULT_IMAGE=void 0;Be.DEFAULT_MAPPING=Mc;Be.prototype=Object.assign(Object.create(vn.prototype),{constructor:Be,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Me.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)r.push(Kn.getDataURL(i[o]))}else r=Kn.getDataURL(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ft:e.x=e.x-Math.floor(e.x);break;case _t:e.x=e.x<0?0:1;break;case ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ft:e.y=e.y-Math.floor(e.y);break;case _t:e.y=e.y<0?0:1;break;case ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(Be.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Ne(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}Object.defineProperties(Ne.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}});Object.assign(Ne.prototype,{isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){let t,n,i,r,a=e.elements,c=a[0],l=a[4],h=a[8],u=a[1],d=a[5],f=a[9],p=a[2],y=a[6],v=a[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(f-y)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,_=(d+1)/2,x=(v+1)/2,w=(l+u)/4,E=(h+p)/4,A=(f+y)/4;return g>_&&g>x?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=w/n,r=E/n):_>x?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=A/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=E/r,i=A/r),this.set(n,i,r,t),this}let m=Math.sqrt((y-f)*(y-f)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(y-f)/m,this.y=(h-p)/m,this.z=(u-l)/m,this.w=Math.acos((c+d+v-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this},clampLength:function(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Lt(e,t,n){this.width=e,this.height=t,this.scissor=new Ne(0,0,e,t),this.scissorTest=!1,this.viewport=new Ne(0,0,e,t),n=n||{},this.texture=new Be(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Lt.prototype=Object.assign(Object.create(vn.prototype),{constructor:Lt,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function ol(e,t,n){Lt.call(this,e,t,n),this.samples=4}ol.prototype=Object.assign(Object.create(Lt.prototype),{constructor:ol,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Lt.prototype.copy.call(this,e),this.samples=e.samples,this}});function ot(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}Object.assign(ot,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,o,s){let a=n[i+0],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o+0],d=r[o+1],f=r[o+2],p=r[o+3];if(h!==p||a!==u||c!==d||l!==f){let y=1-s,v=a*u+c*d+l*f+h*p,m=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let x=Math.sqrt(g),w=Math.atan2(x,v*m);y=Math.sin(y*w)/x,s=Math.sin(s*w)/x}let _=s*m;if(a=a*y+u*_,c=c*y+d*_,l=l*y+f*_,h=h*y+p*_,y===1-s){let x=1/Math.sqrt(a*a+c*c+l*l+h*h);a*=x,c*=x,l*=x,h*=x}}e[t]=a,e[t+1]=c,e[t+2]=l,e[t+3]=h},multiplyQuaternionsFlat:function(e,t,n,i,r,o){let s=n[i],a=n[i+1],c=n[i+2],l=n[i+3],h=r[o],u=r[o+1],d=r[o+2],f=r[o+3];return e[t]=s*f+l*h+a*d-c*u,e[t+1]=a*f+l*u+c*h-s*d,e[t+2]=c*f+l*d+s*u-a*h,e[t+3]=l*f-s*h-a*u-c*d,e}});Object.defineProperties(ot.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}});Object.assign(ot.prototype,{isQuaternion:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,o=e.order,s=Math.cos,a=Math.sin,c=s(n/2),l=s(i/2),h=s(r/2),u=a(n/2),d=a(i/2),f=a(r/2);switch(o){case"XYZ":this._x=u*l*h+c*d*f,this._y=c*d*h-u*l*f,this._z=c*l*f+u*d*h,this._w=c*l*h-u*d*f;break;case"YXZ":this._x=u*l*h+c*d*f,this._y=c*d*h-u*l*f,this._z=c*l*f-u*d*h,this._w=c*l*h+u*d*f;break;case"ZXY":this._x=u*l*h-c*d*f,this._y=c*d*h+u*l*f,this._z=c*l*f+u*d*h,this._w=c*l*h-u*d*f;break;case"ZYX":this._x=u*l*h-c*d*f,this._y=c*d*h+u*l*f,this._z=c*l*f-u*d*h,this._w=c*l*h+u*d*f;break;case"YZX":this._x=u*l*h+c*d*f,this._y=c*d*h+u*l*f,this._z=c*l*f-u*d*h,this._w=c*l*h-u*d*f;break;case"XZY":this._x=u*l*h-c*d*f,this._y=c*d*h-u*l*f,this._z=c*l*f+u*d*h,this._w=c*l*h+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this},setFromRotationMatrix:function(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],a=t[9],c=t[2],l=t[6],h=t[10],u=n+s+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(l-a)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>s&&n>h){let d=2*Math.sqrt(1+n-s-h);this._w=(l-a)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(s>h){let d=2*Math.sqrt(1+s-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(a+l)/d}else{let d=2*Math.sqrt(1+h-n-s);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(a+l)/d,this._z=.25*d}return this._onChangeCallback(),this},setFromUnitVectors:function(e,t){let i=e.dot(t)+1;return i<1e-6?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()},angleTo:function(e){return 2*Math.acos(Math.abs(Me.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,a=t._y,c=t._z,l=t._w;return this._x=n*l+o*s+i*c-r*a,this._y=i*l+o*a+r*s-n*c,this._z=r*l+o*c+n*a-i*s,this._w=o*l-n*s-i*a-r*c,this._onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let a=1-s*s;if(a<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(a),l=Math.atan2(c,s),h=Math.sin((1-t)*l)/c,u=Math.sin(t*l)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},fromBufferAttribute:function(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});var ta=new b,sl=new ot;function b(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}Object.assign(b.prototype,{isVector3:!0,set:function(e,t,n){return this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(sl.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))},applyMatrix3:function(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this},applyQuaternion:function(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,a=e.w,c=a*t+o*i-s*n,l=a*n+s*t-r*i,h=a*i+r*n-o*t,u=-r*t-o*n-s*i;return this.x=c*a+u*-r+l*-s-h*-o,this.y=l*a+u*-o+h*-r-c*-s,this.z=h*a+u*-s+c*-o-l*-r,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this},clampLength:function(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this},cross:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,a=t.z;return this.x=i*a-r*s,this.y=r*o-n*a,this.z=n*s-i*o,this},projectOnVector:function(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)},projectOnPlane:function(e){return ta.copy(this).projectOnVector(e),this.sub(ta)},reflect:function(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Me.clamp(n,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this},setFromMatrixPosition:function(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,t*4)},setFromMatrix3Column:function(e,t){return this.fromArray(e.elements,t*3)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});var fi=new b,Ot=new Ae,gd=new b(0,0,0),vd=new b(1,1,1),wn=new b,xo=new b,Mt=new b;function Ae(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(Ae.prototype,{isMatrix4:!0,set:function(e,t,n,i,r,o,s,a,c,l,h,u,d,f,p,y){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=s,v[13]=a,v[2]=c,v[6]=l,v[10]=h,v[14]=u,v[3]=d,v[7]=f,v[11]=p,v[15]=y,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new Ae().fromArray(this.elements)},copy:function(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this},copyPosition:function(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(e){let t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*l,d=o*h,f=s*l,p=s*h;t[0]=a*l,t[4]=-a*h,t[8]=c,t[1]=d+f*c,t[5]=u-p*c,t[9]=-s*a,t[2]=p-u*c,t[6]=f+d*c,t[10]=o*a}else if(e.order==="YXZ"){let u=a*l,d=a*h,f=c*l,p=c*h;t[0]=u+p*s,t[4]=f*s-d,t[8]=o*c,t[1]=o*h,t[5]=o*l,t[9]=-s,t[2]=d*s-f,t[6]=p+u*s,t[10]=o*a}else if(e.order==="ZXY"){let u=a*l,d=a*h,f=c*l,p=c*h;t[0]=u-p*s,t[4]=-o*h,t[8]=f+d*s,t[1]=d+f*s,t[5]=o*l,t[9]=p-u*s,t[2]=-o*c,t[6]=s,t[10]=o*a}else if(e.order==="ZYX"){let u=o*l,d=o*h,f=s*l,p=s*h;t[0]=a*l,t[4]=f*c-d,t[8]=u*c+p,t[1]=a*h,t[5]=p*c+u,t[9]=d*c-f,t[2]=-c,t[6]=s*a,t[10]=o*a}else if(e.order==="YZX"){let u=o*a,d=o*c,f=s*a,p=s*c;t[0]=a*l,t[4]=p-u*h,t[8]=f*h+d,t[1]=h,t[5]=o*l,t[9]=-s*l,t[2]=-c*l,t[6]=d*h+f,t[10]=u-p*h}else if(e.order==="XZY"){let u=o*a,d=o*c,f=s*a,p=s*c;t[0]=a*l,t[4]=-h,t[8]=c*l,t[1]=u*h+p,t[5]=o*l,t[9]=d*h-f,t[2]=f*h-d,t[6]=s*l,t[10]=p*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(gd,e,vd)},lookAt:function(e,t,n){let i=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),wn.crossVectors(n,Mt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),wn.crossVectors(n,Mt)),wn.normalize(),xo.crossVectors(Mt,wn),i[0]=wn.x,i[4]=xo.x,i[8]=Mt.x,i[1]=wn.y,i[5]=xo.y,i[9]=Mt.y,i[2]=wn.z,i[6]=xo.z,i[10]=Mt.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],a=n[8],c=n[12],l=n[1],h=n[5],u=n[9],d=n[13],f=n[2],p=n[6],y=n[10],v=n[14],m=n[3],g=n[7],_=n[11],x=n[15],w=i[0],E=i[4],A=i[8],F=i[12],C=i[1],q=i[5],N=i[9],O=i[13],I=i[2],R=i[6],L=i[10],U=i[14],W=i[3],Q=i[7],ie=i[11],le=i[15];return r[0]=o*w+s*C+a*I+c*W,r[4]=o*E+s*q+a*R+c*Q,r[8]=o*A+s*N+a*L+c*ie,r[12]=o*F+s*O+a*U+c*le,r[1]=l*w+h*C+u*I+d*W,r[5]=l*E+h*q+u*R+d*Q,r[9]=l*A+h*N+u*L+d*ie,r[13]=l*F+h*O+u*U+d*le,r[2]=f*w+p*C+y*I+v*W,r[6]=f*E+p*q+y*R+v*Q,r[10]=f*A+p*N+y*L+v*ie,r[14]=f*F+p*O+y*U+v*le,r[3]=m*w+g*C+_*I+x*W,r[7]=m*E+g*q+_*R+x*Q,r[11]=m*A+g*N+_*L+x*ie,r[15]=m*F+g*O+_*U+x*le,this},multiplyScalar:function(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},determinant:function(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],a=e[9],c=e[13],l=e[2],h=e[6],u=e[10],d=e[14],f=e[3],p=e[7],y=e[11],v=e[15];return f*(+r*a*h-i*c*h-r*s*u+n*c*u+i*s*d-n*a*d)+p*(+t*a*d-t*c*u+r*o*u-i*o*d+i*c*l-r*a*l)+y*(+t*c*h-t*s*d-r*o*h+n*o*d+r*s*l-n*c*l)+v*(-i*s*l-t*a*h+t*s*u+i*o*h-n*o*u+n*a*l)},transpose:function(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");let n=this.elements,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],f=i[9],p=i[10],y=i[11],v=i[12],m=i[13],g=i[14],_=i[15],x=f*g*u-m*p*u+m*h*y-l*g*y-f*h*_+l*p*_,w=v*p*u-d*g*u-v*h*y+c*g*y+d*h*_-c*p*_,E=d*m*u-v*f*u+v*l*y-c*m*y-d*l*_+c*f*_,A=v*f*h-d*m*h-v*l*p+c*m*p+d*l*g-c*f*g,F=r*x+o*w+s*E+a*A;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/F;return n[0]=x*C,n[1]=(m*p*a-f*g*a-m*s*y+o*g*y+f*s*_-o*p*_)*C,n[2]=(l*g*a-m*h*a+m*s*u-o*g*u-l*s*_+o*h*_)*C,n[3]=(f*h*a-l*p*a-f*s*u+o*p*u+l*s*y-o*h*y)*C,n[4]=w*C,n[5]=(d*g*a-v*p*a+v*s*y-r*g*y-d*s*_+r*p*_)*C,n[6]=(v*h*a-c*g*a-v*s*u+r*g*u+c*s*_-r*h*_)*C,n[7]=(c*p*a-d*h*a+d*s*u-r*p*u-c*s*y+r*h*y)*C,n[8]=E*C,n[9]=(v*f*a-d*m*a-v*o*y+r*m*y+d*o*_-r*f*_)*C,n[10]=(c*m*a-v*l*a+v*o*u-r*m*u-c*o*_+r*l*_)*C,n[11]=(d*l*a-c*f*a-d*o*u+r*f*u+c*o*y-r*l*y)*C,n[12]=A*C,n[13]=(d*m*s-v*f*s+v*o*p-r*m*p-d*o*g+r*f*g)*C,n[14]=(v*l*s-c*m*s-v*o*h+r*m*h+c*o*g-r*l*g)*C,n[15]=(c*f*s-d*l*s+d*o*h-r*f*h-c*o*p+r*l*p)*C,this},scale:function(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,a=e.z,c=r*o,l=r*s;return this.set(c*o+n,c*s-i*a,c*a+i*s,0,c*s+i*a,l*s+n,l*a-i*o,0,c*a-i*s,l*a+i*o,r*a*a+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){let i=this.elements,r=t._x,o=t._y,s=t._z,a=t._w,c=r+r,l=o+o,h=s+s,u=r*c,d=r*l,f=r*h,p=o*l,y=o*h,v=s*h,m=a*c,g=a*l,_=a*h,x=n.x,w=n.y,E=n.z;return i[0]=(1-(p+v))*x,i[1]=(d+_)*x,i[2]=(f-g)*x,i[3]=0,i[4]=(d-_)*w,i[5]=(1-(u+v))*w,i[6]=(y+m)*w,i[7]=0,i[8]=(f+g)*E,i[9]=(y-m)*E,i[10]=(1-(u+p))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},decompose:function(e,t,n){let i=this.elements,r=fi.set(i[0],i[1],i[2]).length(),o=fi.set(i[4],i[5],i[6]).length(),s=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ot.copy(this);let c=1/r,l=1/o,h=1/s;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=l,Ot.elements[5]*=l,Ot.elements[6]*=l,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,t.setFromRotationMatrix(Ot),n.x=r,n.y=o,n.z=s,this},makePerspective:function(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let s=this.elements,a=2*r/(t-e),c=2*r/(n-i),l=(t+e)/(t-e),h=(n+i)/(n-i),u=-(o+r)/(o-r),d=-2*o*r/(o-r);return s[0]=a,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=d,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makeOrthographic:function(e,t,n,i,r,o){let s=this.elements,a=1/(t-e),c=1/(n-i),l=1/(o-r),h=(t+e)*a,u=(n+i)*c,d=(o+r)*l;return s[0]=2*a,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-d,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}});var al=new Ae,cl=new ot;function li(e=0,t=0,n=0,i=li.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}li.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];li.DefaultOrder="XYZ";Object.defineProperties(li.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}});Object.assign(li.prototype,{isEuler:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){let i=Me.clamp,r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});function Rc(){this.mask=1}Object.assign(Rc.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},disableAll:function(){this.mask=0},test:function(e){return(this.mask&e.mask)!==0}});var yd=0,ll=new b,di=new ot,on=new Ae,_o=new b,ur=new b,xd=new b,_d=new ot,ul=new b(1,0,0),hl=new b(0,1,0),fl=new b(0,0,1),bd={type:"added"},wd={type:"removed"};function te(){Object.defineProperty(this,"id",{value:yd++}),this.uuid=Me.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DefaultUp.clone();let e=new b,t=new li,n=new ot,i=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ht}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=te.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}te.DefaultUp=new b(0,1,0);te.DefaultMatrixAutoUpdate=!0;te.prototype=Object.assign(Object.create(vn.prototype),{constructor:te,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this},rotateOnWorldAxis:function(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this},rotateX:function(e){return this.rotateOnAxis(ul,e)},rotateY:function(e){return this.rotateOnAxis(hl,e)},rotateZ:function(e){return this.rotateOnAxis(fl,e)},translateOnAxis:function(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(ul,e)},translateY:function(e){return this.translateOnAxis(hl,e)},translateZ:function(e){return this.translateOnAxis(fl,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(on.getInverse(this.matrixWorld))},lookAt:function(e,t,n){e.isVector3?_o.copy(e):_o.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(ur,_o,this.up):on.lookAt(_o,ur,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),di.setFromRotationMatrix(on),this.quaternion.premultiply(di.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),on.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new b),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new ot),this.updateMatrixWorld(!0),this.matrixWorld.decompose(ur,e,xd),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new b),this.updateMatrixWorld(!0),this.matrixWorld.decompose(ur,_d,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new b),this.updateMatrixWorld(!0);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(s,a){return s[a.uuid]===void 0&&(s[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let a=s.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let h=a[c];r(e.shapes,h)}else r(e.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let a=0,c=this.material.length;a<c;a++)s.push(r(e.materials,this.material[a]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(t){let s=o(e.geometries),a=o(e.materials),c=o(e.textures),l=o(e.images),h=o(e.shapes);s.length>0&&(n.geometries=s),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h)}return n.object=i,n;function o(s){let a=[];for(let c in s){let l=s[c];delete l.metadata,a.push(l)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}});function hs(){te.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}hs.prototype=Object.assign(Object.create(te.prototype),{constructor:hs,isScene:!0,copy:function(e,t){return te.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:"dispose"})}});var sn=[new b,new b,new b,new b,new b,new b,new b,new b],hr=new b,na=new tn,pi=new b,mi=new b,gi=new b,Mn=new b,Sn=new b,Vn=new b,fr=new b,bo=new b,wo=new b,kn=new b;function tn(e,t){this.min=e!==void 0?e:new b(1/0,1/0,1/0),this.max=t!==void 0?t:new b(-1/0,-1/0,-1/0)}Object.assign(tn.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let a=0,c=e.length;a<c;a+=3){let l=e[a],h=e[a+1],u=e[a+2];l<t&&(t=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>o&&(o=h),u>s&&(s=u)}return this.min.set(t,n,i),this.max.set(r,o,s),this},setFromBufferAttribute:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let a=0,c=e.count;a<c;a++){let l=e.getX(a),h=e.getY(a),u=e.getZ(a);l<t&&(t=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>o&&(o=h),u>s&&(s=u)}return this.min.set(t,n,i),this.max.set(r,o,s),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){let n=hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox),na.applyMatrix4(e.matrixWorld),this.union(na));let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new b),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,hr),hr.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(fr),bo.subVectors(this.max,fr),pi.subVectors(e.a,fr),mi.subVectors(e.b,fr),gi.subVectors(e.c,fr),Mn.subVectors(mi,pi),Sn.subVectors(gi,mi),Vn.subVectors(pi,gi);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Vn.z,Vn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Vn.z,0,-Vn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Vn.y,Vn.x,0];return!ia(t,pi,mi,gi,bo)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,pi,mi,gi,bo))?!1:(wo.crossVectors(Mn,Sn),t=[wo.x,wo.y,wo.z],ia(t,pi,mi,gi,bo))},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new b),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return hr.copy(e).clamp(this.min,this.max).sub(e).length()},getBoundingSphere:function(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(hr).length()*.5,e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function ia(e,t,n,i,r){for(let o=0,s=e.length-3;o<=s;o+=3){kn.fromArray(e,o);let a=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),c=t.dot(kn),l=n.dot(kn),h=i.dot(kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Md=new tn;function yn(e,t){this.center=e!==void 0?e:new b,this.radius=t!==void 0?t:-1}Object.assign(yn.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){let n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new b),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new tn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}});var an=new b,ra=new b,Mo=new b,Tn=new b,oa=new b,So=new b,sa=new b;function sr(e,t){this.origin=e!==void 0?e:new b,this.direction=t!==void 0?t:new b(0,0,-1)}Object.assign(sr.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new b),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,an)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new b),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){let t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.direction).multiplyScalar(t).add(this.origin),an.distanceToSquared(e))},distanceSqToSegment:function(e,t,n,i){ra.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(ra);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),s=Tn.dot(this.direction),a=-Tn.dot(Mo),c=Tn.lengthSq(),l=Math.abs(1-o*o),h,u,d,f;if(l>0)if(h=o*a-s,u=o*s-a,f=r*l,h>=0)if(u>=-f)if(u<=f){let p=1/l;h*=p,u*=p,d=h*(h+o*u+2*s)+u*(o*h+u+2*a)+c}else u=r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*a)+c;else u=-r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*a)+c;else u<=-f?(h=Math.max(0,-(-o*r+s)),u=h>0?-r:Math.min(Math.max(-r,-a),r),d=-h*h+u*(u+2*a)+c):u<=f?(h=0,u=Math.min(Math.max(-r,-a),r),d=u*(u+2*a)+c):(h=Math.max(0,-(o*r+s)),u=h>0?r:Math.min(Math.max(-r,-a),r),d=-h*h+u*(u+2*a)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*a)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Mo).multiplyScalar(u).add(ra),d},intersectSphere:function(e,t){an.subVectors(e.center,this.origin);let n=an.dot(this.direction),i=an.dot(an)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),s=n-o,a=n+o;return s<0&&a<0?null:s<0?this.at(a,t):this.at(s,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null},intersectPlane:function(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)},intersectsPlane:function(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0},intersectBox:function(e,t){let n,i,r,o,s,a,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),l>=0?(r=(e.min.y-u.y)*l,o=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,o=(e.min.y-u.y)*l),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(s=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h),n>a||s>i)||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)},intersectsBox:function(e){return this.intersectBox(e,an)!==null},intersectTriangle:function(e,t,n,i,r){oa.subVectors(t,e),So.subVectors(n,e),sa.crossVectors(oa,So);let o=this.direction.dot(sa),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Tn.subVectors(this.origin,e);let a=s*this.direction.dot(So.crossVectors(Tn,So));if(a<0)return null;let c=s*this.direction.dot(oa.cross(Tn));if(c<0||a+c>o)return null;let l=-s*Tn.dot(sa);return l<0?null:this.at(l/o,r)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}});var aa=new b,Sd=new b,Td=new ht;function Xt(e,t){this.normal=e!==void 0?e:new b(1,0,0),this.constant=t!==void 0?t:0}Object.assign(Xt.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,n){let i=aa.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new b),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new b);let n=e.delta(aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;let r=-(e.start.dot(this.normal)+this.constant)/i;if(!(r<0||r>1))return t.copy(n).multiplyScalar(r).add(e.start)},intersectsLine:function(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new b),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){let n=t||Td.getNormalMatrix(e),i=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}});var Ut=new b,ln=new b,ca=new b,cn=new b,vi=new b,yi=new b,dl=new b,la=new b,ua=new b,ha=new b;function lt(e,t,n){this.a=e!==void 0?e:new b,this.b=t!==void 0?t:new b,this.c=n!==void 0?n:new b}Object.assign(lt,{getNormal:function(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new b),i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)},getBarycoord:function(e,t,n,i,r){Ut.subVectors(i,t),ln.subVectors(n,t),ca.subVectors(e,t);let o=Ut.dot(Ut),s=Ut.dot(ln),a=Ut.dot(ca),c=ln.dot(ln),l=ln.dot(ca),h=o*c-s*s;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new b),h===0)return r.set(-2,-1,-1);let u=1/h,d=(c*a-s*l)*u,f=(o*l-s*a)*u;return r.set(1-d-f,f,d)},containsPoint:function(e,t,n,i){return lt.getBarycoord(e,t,n,i,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1},getUV:function(e,t,n,i,r,o,s,a){return this.getBarycoord(e,t,n,i,cn),a.set(0,0),a.addScaledVector(r,cn.x),a.addScaledVector(o,cn.y),a.addScaledVector(s,cn.z),a},isFrontFacing:function(e,t,n,i){return Ut.subVectors(n,t),ln.subVectors(e,t),Ut.cross(ln).dot(i)<0}});Object.assign(lt.prototype,{set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return Ut.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ut.cross(ln).length()*.5},getMidpoint:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new b),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return lt.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Xt),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return lt.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,n,i,r){return lt.getUV(e,this.a,this.b,this.c,t,n,i,r)},containsPoint:function(e){return lt.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return lt.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new b);let n=this.a,i=this.b,r=this.c,o,s;vi.subVectors(i,n),yi.subVectors(r,n),la.subVectors(e,n);let a=vi.dot(la),c=yi.dot(la);if(a<=0&&c<=0)return t.copy(n);ua.subVectors(e,i);let l=vi.dot(ua),h=yi.dot(ua);if(l>=0&&h<=l)return t.copy(i);let u=a*h-l*c;if(u<=0&&a>=0&&l<=0)return o=a/(a-l),t.copy(n).addScaledVector(vi,o);ha.subVectors(e,r);let d=vi.dot(ha),f=yi.dot(ha);if(f>=0&&d<=f)return t.copy(r);let p=d*c-a*f;if(p<=0&&c>=0&&f<=0)return s=c/(c-f),t.copy(n).addScaledVector(yi,s);let y=l*f-d*h;if(y<=0&&h-l>=0&&d-f>=0)return dl.subVectors(r,i),s=(h-l)/(h-l+(d-f)),t.copy(i).addScaledVector(dl,s);let v=1/(y+p+u);return o=p*v,s=u*v,t.copy(n).addScaledVector(vi,o).addScaledVector(yi,s)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}});var Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},To={h:0,s:0,l:0};function re(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}function fa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function da(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function pa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}Object.assign(re.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(e,t,n){if(e=Me.euclideanModulo(e,1),t=Me.clamp(t,0,1),n=Me.clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=fa(r,i,e+1/3),this.g=fa(r,i,e),this.b=fa(r,i,e-1/3)}return this},setStyle:function(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let i,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){let s=parseFloat(i[1])/360,a=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(s,a,c)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this},setColorName:function(e){let t=Nu[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this},copyLinearToSRGB:function(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i),s,a,c=(o+r)/2;if(o===r)s=0,a=0;else{let l=r-o;switch(a=c<=.5?l/(r+o):l/(2-r-o),r){case t:s=(n-i)/l+(n<i?6:0);break;case n:s=(i-t)/l+2;break;case i:s=(t-n)/l+4;break}s/=6}return e.h=s,e.s=a,e.l=c,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(Bt),e.getHSL(To);let n=Me.lerp(Bt.h,To.h,t),i=Me.lerp(Bt.s,To.s,t),r=Me.lerp(Bt.l,To.l,t);return this.setHSL(n,i,r),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},fromBufferAttribute:function(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});re.NAMES=Nu;function fs(e,t,n,i,r,o){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new b,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new re,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=o!==void 0?o:0}Object.assign(fs.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});var Ed=0;function ve(){Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Me.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=wr,this.side=ao,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Eu,this.blendDst=Au,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}ve.prototype=Object.assign(Object.create(vn.prototype),{constructor:ve,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Tu;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==ao&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let o=[];for(let s in r){let a=r[s];delete a.metadata,o.push(a)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(ve.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function kt(e){ve.call(this),this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}kt.prototype=Object.create(ve.prototype);kt.prototype.constructor=kt;kt.prototype.isMeshBasicMaterial=!0;kt.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};var Fe=new b,Eo=new z;function ge(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(ge.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(ge.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new re),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this},copyVector2sArray:function(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new z),t[n++]=o.x,t[n++]=o.y}return this},copyVector3sArray:function(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new b),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this},copyVector4sArray:function(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ne),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Fe.fromBufferAttribute(this,t),Fe.applyMatrix3(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.applyMatrix4(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.applyNormalMatrix(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.transformDirection(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Da(e,t,n){ge.call(this,new Int8Array(e),t,n)}Da.prototype=Object.create(ge.prototype);Da.prototype.constructor=Da;function Ia(e,t,n){ge.call(this,new Uint8Array(e),t,n)}Ia.prototype=Object.create(ge.prototype);Ia.prototype.constructor=Ia;function Na(e,t,n){ge.call(this,new Uint8ClampedArray(e),t,n)}Na.prototype=Object.create(ge.prototype);Na.prototype.constructor=Na;function Oa(e,t,n){ge.call(this,new Int16Array(e),t,n)}Oa.prototype=Object.create(ge.prototype);Oa.prototype.constructor=Oa;function Lr(e,t,n){ge.call(this,new Uint16Array(e),t,n)}Lr.prototype=Object.create(ge.prototype);Lr.prototype.constructor=Lr;function Ba(e,t,n){ge.call(this,new Int32Array(e),t,n)}Ba.prototype=Object.create(ge.prototype);Ba.prototype.constructor=Ba;function Pr(e,t,n){ge.call(this,new Uint32Array(e),t,n)}Pr.prototype=Object.create(ge.prototype);Pr.prototype.constructor=Pr;function ee(e,t,n){ge.call(this,new Float32Array(e),t,n)}ee.prototype=Object.create(ge.prototype);ee.prototype.constructor=ee;function Fa(e,t,n){ge.call(this,new Float64Array(e),t,n)}Fa.prototype=Object.create(ge.prototype);Fa.prototype.constructor=Fa;function Ou(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Ou.prototype,{computeGroups:function(e){let t=[],n,i,r,o=e.faces;for(i=0;i<o.length;i++){let s=o[i];s.materialIndex!==r&&(r=s.materialIndex,n!==void 0&&(n.count=i*3-n.start,t.push(n)),n={start:i*3,materialIndex:r})}n!==void 0&&(n.count=i*3-n.start,t.push(n)),this.groups=t},fromGeometry:function(e){let t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,o=i[1]&&i[1].length>0,s=e.morphTargets,a=s.length,c;if(a>0){c=[];for(let v=0;v<a;v++)c[v]={name:s[v].name,data:[]};this.morphTargets.position=c}let l=e.morphNormals,h=l.length,u;if(h>0){u=[];for(let v=0;v<h;v++)u[v]={name:l[v].name,data:[]};this.morphTargets.normal=u}let d=e.skinIndices,f=e.skinWeights,p=d.length===n.length,y=f.length===n.length;n.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let v=0;v<t.length;v++){let m=t[v];this.vertices.push(n[m.a],n[m.b],n[m.c]);let g=m.vertexNormals;if(g.length===3)this.normals.push(g[0],g[1],g[2]);else{let x=m.normal;this.normals.push(x,x,x)}let _=m.vertexColors;if(_.length===3)this.colors.push(_[0],_[1],_[2]);else{let x=m.color;this.colors.push(x,x,x)}if(r===!0){let x=i[0][v];x!==void 0?this.uvs.push(x[0],x[1],x[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",v),this.uvs.push(new z,new z,new z))}if(o===!0){let x=i[1][v];x!==void 0?this.uvs2.push(x[0],x[1],x[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",v),this.uvs2.push(new z,new z,new z))}for(let x=0;x<a;x++){let w=s[x].vertices;c[x].data.push(w[m.a],w[m.b],w[m.c])}for(let x=0;x<h;x++){let w=l[x].vertexNormals[v];u[x].data.push(w.a,w.b,w.c)}p&&this.skinIndices.push(d[m.a],d[m.b],d[m.c]),y&&this.skinWeights.push(f[m.a],f[m.b],f[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}});function Bu(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}var Ad=1,Wt=new Ae,ma=new te,xi=new b,St=new tn,dr=new tn,st=new b;function oe(){Object.defineProperty(this,"id",{value:Ad+=2}),this.uuid=Me.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}oe.prototype=Object.assign(Object.create(vn.prototype),{constructor:oe,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(Bu(e)>65535?Pr:Lr)(e,1):this.index=e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this},rotateY:function(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this},rotateZ:function(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this},translate:function(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this},scale:function(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this},lookAt:function(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this},setFromObject:function(e){let t=e.geometry;if(e.isPoints||e.isLine){let n=new ee(t.vertices.length*3,3),i=new ee(t.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(t.vertices)),this.setAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){let r=new ee(t.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}if(t.verticesNeedUpdate===!0){let n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(t.vertices),n.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){let n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(t.normals),n.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){let n=this.attributes.color;n!==void 0&&(n.copyColorsArray(t.colors),n.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){let n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(t.uvs),n.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){let n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(t.lineDistances),n.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new Ou().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){let t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new ge(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){let n=new Float32Array(e.normals.length*3);this.setAttribute("normal",new ge(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){let n=new Float32Array(e.colors.length*3);this.setAttribute("color",new ge(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){let n=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new ge(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){let n=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new ge(n,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(let n in e.morphTargets){let i=[],r=e.morphTargets[n];for(let o=0,s=r.length;o<s;o++){let a=r[o],c=new ee(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(e.skinIndices.length>0){let n=new ee(e.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){let n=new ee(e.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];St.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e){let n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let s=t[r];dr.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(St.min,dr.min),St.expandByPoint(st),st.addVectors(St.max,dr.max),St.expandByPoint(st)):(St.expandByPoint(dr.min),St.expandByPoint(dr.max))}St.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)st.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(st));if(t)for(let r=0,o=t.length;r<o;r++){let s=t[r],a=this.morphTargetsRelative;for(let c=0,l=s.count;c<l;c++)st.fromBufferAttribute(s,c),a&&(xi.fromBufferAttribute(e,c),st.add(xi)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new b,r=new b,o=new b,s=new b,a=new b,c=new b,l=new b,h=new b;if(e)for(let u=0,d=e.count;u<d;u+=3){let f=e.getX(u+0),p=e.getX(u+1),y=e.getX(u+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,y),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),s.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),s.add(l),a.add(l),c.add(l),n.setXYZ(f,s.x,s.y,s.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,s=e.attributes[i],a=s.array,c=s.itemSize*t,l=Math.min(a.length,o.length-c);for(let h=0,u=c;h<l;h++,u++)o[u]=a[h]}return this},normalizeNormals:function(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)},toNonIndexed:function(){function e(s,a){let c=s.array,l=s.itemSize,h=s.normalized,u=new c.constructor(a.length*l),d=0,f=0;for(let p=0,y=a.length;p<y;p++){d=a[p]*l;for(let v=0;v<l;v++)u[f++]=c[d++]}return new ge(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let t=new oe,n=this.index.array,i=this.attributes;for(let s in i){let a=i[s],c=e(a,n);t.setAttribute(s,c)}let r=this.morphAttributes;for(let s in r){let a=[],c=r[s];for(let l=0,h=c.length;l<h;l++){let u=c[l],d=e(u,n);a.push(d)}t.morphAttributes[s]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,a=o.length;s<a;s++){let c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t},toJSON:function(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let c=n[a],l=c.toJSON(e.data);c.name!==""&&(l.name=c.name),e.data.attributes[a]=l}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=d.toJSON(e.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e},clone:function(){return new oe().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(t))}let r=e.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,l=o.length;c<l;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var pl=new Ae,Wn=new sr,ga=new yn,En=new b,An=new b,Cn=new b,va=new b,ya=new b,xa=new b,Ao=new b,Co=new b,Lo=new b,Ri=new z,Di=new z,Ii=new z,Sr=new b,Po=new b;function He(e,t){te.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new oe,this.material=t!==void 0?t:new kt,this.updateMorphTargets()}He.prototype=Object.assign(Object.create(te.prototype),{constructor:He,isMesh:!0,copy:function(e){return te.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),e.ray.intersectsSphere(ga)===!1)||(pl.getInverse(r),Wn.copy(e.ray).applyMatrix4(pl),n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let s=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){let v=d[p],m=i[v.materialIndex],g=Math.max(v.start,f.start),_=Math.min(v.start+v.count,f.start+f.count);for(let x=g,w=_;x<w;x+=3){let E=s.getX(x),A=s.getX(x+1),F=s.getX(x+2);o=Ro(this,m,e,Wn,a,c,l,h,u,E,A,F),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let p=Math.max(0,f.start),y=Math.min(s.count,f.start+f.count);for(let v=p,m=y;v<m;v+=3){let g=s.getX(v),_=s.getX(v+1),x=s.getX(v+2);o=Ro(this,i,e,Wn,a,c,l,h,u,g,_,x),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){let v=d[p],m=i[v.materialIndex],g=Math.max(v.start,f.start),_=Math.min(v.start+v.count,f.start+f.count);for(let x=g,w=_;x<w;x+=3){let E=x,A=x+1,F=x+2;o=Ro(this,m,e,Wn,a,c,l,h,u,E,A,F),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let v=p,m=y;v<m;v+=3){let g=v,_=v+1,x=v+2;o=Ro(this,i,e,Wn,a,c,l,h,u,g,_,x),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else if(n.isGeometry){let s=Array.isArray(i),a=n.vertices,c=n.faces,l,h=n.faceVertexUvs[0];h.length>0&&(l=h);for(let u=0,d=c.length;u<d;u++){let f=c[u],p=s?i[f.materialIndex]:i;if(p===void 0)continue;let y=a[f.a],v=a[f.b],m=a[f.c];if(o=Fu(this,p,e,Wn,y,v,m,Sr),o){if(l&&l[u]){let g=l[u];Ri.copy(g[0]),Di.copy(g[1]),Ii.copy(g[2]),o.uv=lt.getUV(Sr,y,v,m,Ri,Di,Ii,new z)}o.face=f,o.faceIndex=u,t.push(o)}}}}});function Fu(e,t,n,i,r,o,s,a){let c;if(t.side===at?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,t.side!==pt,a),c===null)return null;Po.copy(a),Po.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Po);return l<n.near||l>n.far?null:{distance:l,point:Po.clone(),object:e}}function Ro(e,t,n,i,r,o,s,a,c,l,h,u){En.fromBufferAttribute(r,l),An.fromBufferAttribute(r,h),Cn.fromBufferAttribute(r,u);let d=e.morphTargetInfluences;if(t.morphTargets&&o&&d){Ao.set(0,0,0),Co.set(0,0,0),Lo.set(0,0,0);for(let p=0,y=o.length;p<y;p++){let v=d[p],m=o[p];v!==0&&(va.fromBufferAttribute(m,l),ya.fromBufferAttribute(m,h),xa.fromBufferAttribute(m,u),s?(Ao.addScaledVector(va,v),Co.addScaledVector(ya,v),Lo.addScaledVector(xa,v)):(Ao.addScaledVector(va.sub(En),v),Co.addScaledVector(ya.sub(An),v),Lo.addScaledVector(xa.sub(Cn),v)))}En.add(Ao),An.add(Co),Cn.add(Lo)}e.isSkinnedMesh&&(e.boneTransform(l,En),e.boneTransform(h,An),e.boneTransform(u,Cn));let f=Fu(e,t,n,i,En,An,Cn,Sr);if(f){a&&(Ri.fromBufferAttribute(a,l),Di.fromBufferAttribute(a,h),Ii.fromBufferAttribute(a,u),f.uv=lt.getUV(Sr,En,An,Cn,Ri,Di,Ii,new z)),c&&(Ri.fromBufferAttribute(c,l),Di.fromBufferAttribute(c,h),Ii.fromBufferAttribute(c,u),f.uv2=lt.getUV(Sr,En,An,Cn,Ri,Di,Ii,new z));let p=new fs(l,h,u);lt.getNormal(En,An,Cn,p.normal),f.face=p}return f}var Cd=0,jt=new Ae,_a=new te,Do=new b;function _e(){Object.defineProperty(this,"id",{value:Cd+=2}),this.uuid=Me.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}_e.prototype=Object.assign(Object.create(vn.prototype),{constructor:_e,isGeometry:!0,applyMatrix4:function(e){let t=new ht().getNormalMatrix(e);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(e);for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(let o=0,s=r.vertexNormals.length;o<s;o++)r.vertexNormals[o].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this},rotateY:function(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this},rotateZ:function(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this},translate:function(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this},scale:function(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this},lookAt:function(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this},fromBufferGeometry:function(e){let t=this,n=e.index!==null?e.index:void 0,i=e.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let r=i.position,o=i.normal,s=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<r.count;u++)t.vertices.push(new b().fromBufferAttribute(r,u)),s!==void 0&&t.colors.push(new re().fromBufferAttribute(s,u));function l(u,d,f,p){let y=s===void 0?[]:[t.colors[u].clone(),t.colors[d].clone(),t.colors[f].clone()],v=o===void 0?[]:[new b().fromBufferAttribute(o,u),new b().fromBufferAttribute(o,d),new b().fromBufferAttribute(o,f)],m=new fs(u,d,f,v,y,p);t.faces.push(m),a!==void 0&&t.faceVertexUvs[0].push([new z().fromBufferAttribute(a,u),new z().fromBufferAttribute(a,d),new z().fromBufferAttribute(a,f)]),c!==void 0&&t.faceVertexUvs[1].push([new z().fromBufferAttribute(c,u),new z().fromBufferAttribute(c,d),new z().fromBufferAttribute(c,f)])}let h=e.groups;if(h.length>0)for(let u=0;u<h.length;u++){let d=h[u],f=d.start,p=d.count;for(let y=f,v=f+p;y<v;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),d.materialIndex):l(y,y+1,y+2,d.materialIndex)}else if(n!==void 0)for(let u=0;u<n.count;u+=3)l(n.getX(u),n.getX(u+1),n.getX(u+2));else for(let u=0;u<r.count;u+=3)l(u,u+1,u+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this},normalize:function(){this.computeBoundingSphere();let e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new Ae;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){let e=new b,t=new b;for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],o=this.vertices[r.a],s=this.vertices[r.b],a=this.vertices[r.c];e.subVectors(a,s),t.subVectors(o,s),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);let t=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)t[n]=new b;if(e){let n=new b,i=new b;for(let r=0,o=this.faces.length;r<o;r++){let s=this.faces[r],a=this.vertices[s.a],c=this.vertices[s.b],l=this.vertices[s.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),t[s.a].add(n),t[s.b].add(n),t[s.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];t[r.a].add(r.normal),t[r.b].add(r.normal),t[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)t[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],o=r.vertexNormals;o.length===3?(o[0].copy(t[r.a]),o[1].copy(t[r.b]),o[2].copy(t[r.c])):(o[0]=t[r.a].clone(),o[1]=t[r.b].clone(),o[2]=t[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){let n=this.faces[e],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,n=this.faces.length;t<n;t++){let i=this.faces[t];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,o=i.vertexNormals.length;r<o;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}let e=new _e;e.faces=this.faces;for(let t=0,n=this.morphTargets.length;t<n;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];let r=this.morphNormals[t].faceNormals,o=this.morphNormals[t].vertexNormals;for(let s=0,a=this.faces.length;s<a;s++){let c=new b,l={a:new b,b:new b,c:new b};r.push(c),o.push(l)}}let i=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let r=0,o=this.faces.length;r<o;r++){let s=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(s.normal),c.a.copy(s.vertexNormals[0]),c.b.copy(s.vertexNormals[1]),c.c.copy(s.vertexNormals[2])}}for(let t=0,n=this.faces.length;t<n;t++){let i=this.faces[t];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let i,r=this.vertices.length,o=this.vertices,s=e.vertices,a=this.faces,c=e.faces,l=this.colors,h=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new ht().getNormalMatrix(t));for(let u=0,d=s.length;u<d;u++){let p=s[u].clone();t!==void 0&&p.applyMatrix4(t),o.push(p)}for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone());for(let u=0,d=c.length;u<d;u++){let f=c[u],p,y,v,m=f.vertexNormals,g=f.vertexColors;p=new fs(f.a+r,f.b+r,f.c+r),p.normal.copy(f.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let _=0,x=m.length;_<x;_++)y=m[_].clone(),i!==void 0&&y.applyMatrix3(i).normalize(),p.vertexNormals.push(y);p.color.copy(f.color);for(let _=0,x=g.length;_<x;_++)v=g[_],p.vertexColors.push(v.clone());p.materialIndex=f.materialIndex+n,a.push(p)}for(let u=0,d=e.faceVertexUvs.length;u<d;u++){let f=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,y=f.length;p<y;p++){let v=f[p],m=[];for(let g=0,_=v.length;g<_;g++)m.push(v[g].clone());this.faceVertexUvs[u].push(m)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){let e={},t=[],n=[],r=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){let l=this.vertices[a],h=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[h]===void 0?(e[h]=a,t.push(this.vertices[a]),n[a]=t.length-1):n[a]=n[e[h]]}let o=[];for(let a=0,c=this.faces.length;a<c;a++){let l=this.faces[a];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];let h=[l.a,l.b,l.c];for(let u=0;u<3;u++)if(h[u]===h[(u+1)%3]){o.push(a);break}}for(let a=o.length-1;a>=0;a--){let c=o[a];this.faces.splice(c,1);for(let l=0,h=this.faceVertexUvs.length;l<h;l++)this.faceVertexUvs[l].splice(c,1)}let s=this.vertices.length-t.length;return this.vertices=t,s},setFromPoints:function(e){this.vertices=[];for(let t=0,n=e.length;t<n;t++){let i=e[t];this.vertices.push(new b(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){let e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}e.sort(n);let i=this.faceVertexUvs[0],r=this.faceVertexUvs[1],o,s;i&&i.length===t&&(o=[]),r&&r.length===t&&(s=[]);for(let a=0;a<t;a++){let c=e[a]._id;o&&o.push(i[c]),s&&s.push(r[c])}o&&(this.faceVertexUvs[0]=o),s&&(this.faceVertexUvs[1]=s)},toJSON:function(){let e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){let f=this.parameters;for(let p in f)f[p]!==void 0&&(e[p]=f[p]);return e}let t=[];for(let f=0;f<this.vertices.length;f++){let p=this.vertices[f];t.push(p.x,p.y,p.z)}let n=[],i=[],r={},o=[],s={},a=[],c={};for(let f=0;f<this.faces.length;f++){let p=this.faces[f],y=!0,v=!1,m=this.faceVertexUvs[0][f]!==void 0,g=p.normal.length()>0,_=p.vertexNormals.length>0,x=p.color.r!==1||p.color.g!==1||p.color.b!==1,w=p.vertexColors.length>0,E=0;if(E=l(E,0,0),E=l(E,1,y),E=l(E,2,v),E=l(E,3,m),E=l(E,4,g),E=l(E,5,_),E=l(E,6,x),E=l(E,7,w),n.push(E),n.push(p.a,p.b,p.c),n.push(p.materialIndex),m){let A=this.faceVertexUvs[0][f];n.push(d(A[0]),d(A[1]),d(A[2]))}if(g&&n.push(h(p.normal)),_){let A=p.vertexNormals;n.push(h(A[0]),h(A[1]),h(A[2]))}if(x&&n.push(u(p.color)),w){let A=p.vertexColors;n.push(u(A[0]),u(A[1]),u(A[2]))}}function l(f,p,y){return y?f|1<<p:f&~(1<<p)}function h(f){let p=f.x.toString()+f.y.toString()+f.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(f.x,f.y,f.z)),r[p]}function u(f){let p=f.r.toString()+f.g.toString()+f.b.toString();return s[p]!==void 0||(s[p]=o.length,o.push(f.getHex())),s[p]}function d(f){let p=f.x.toString()+f.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(f.x,f.y)),c[p]}return e.data={},e.data.vertices=t,e.data.normals=i,o.length>0&&(e.data.colors=o),a.length>0&&(e.data.uvs=[a]),e.data.faces=n,e},clone:function(){return new _e().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;let t=e.vertices;for(let u=0,d=t.length;u<d;u++)this.vertices.push(t[u].clone());let n=e.colors;for(let u=0,d=n.length;u<d;u++)this.colors.push(n[u].clone());let i=e.faces;for(let u=0,d=i.length;u<d;u++)this.faces.push(i[u].clone());for(let u=0,d=e.faceVertexUvs.length;u<d;u++){let f=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,y=f.length;p<y;p++){let v=f[p],m=[];for(let g=0,_=v.length;g<_;g++){let x=v[g];m.push(x.clone())}this.faceVertexUvs[u].push(m)}}let r=e.morphTargets;for(let u=0,d=r.length;u<d;u++){let f={};if(f.name=r[u].name,r[u].vertices!==void 0){f.vertices=[];for(let p=0,y=r[u].vertices.length;p<y;p++)f.vertices.push(r[u].vertices[p].clone())}if(r[u].normals!==void 0){f.normals=[];for(let p=0,y=r[u].normals.length;p<y;p++)f.normals.push(r[u].normals[p].clone())}this.morphTargets.push(f)}let o=e.morphNormals;for(let u=0,d=o.length;u<d;u++){let f={};if(o[u].vertexNormals!==void 0){f.vertexNormals=[];for(let p=0,y=o[u].vertexNormals.length;p<y;p++){let v=o[u].vertexNormals[p],m={};m.a=v.a.clone(),m.b=v.b.clone(),m.c=v.c.clone(),f.vertexNormals.push(m)}}if(o[u].faceNormals!==void 0){f.faceNormals=[];for(let p=0,y=o[u].faceNormals.length;p<y;p++)f.faceNormals.push(o[u].faceNormals[p].clone())}this.morphNormals.push(f)}let s=e.skinWeights;for(let u=0,d=s.length;u<d;u++)this.skinWeights.push(s[u].clone());let a=e.skinIndices;for(let u=0,d=a.length;u<d;u++)this.skinIndices.push(a[u].clone());let c=e.lineDistances;for(let u=0,d=c.length;u<d;u++)this.lineDistances.push(c[u]);let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ua=class extends _e{constructor(t,n,i,r,o,s){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s},this.fromBufferGeometry(new zi(t,n,i,r,o,s)),this.mergeVertices()}},zi=class extends oe{constructor(t,n,i,r,o,s){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;t=t||1,n=n||1,i=i||1,r=Math.floor(r)||1,o=Math.floor(o)||1,s=Math.floor(s)||1;let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,n,t,s,o,0),p("z","y","x",1,-1,i,n,-t,s,o,1),p("x","z","y",1,1,t,i,n,r,s,2),p("x","z","y",1,-1,t,i,-n,r,s,3),p("x","y","z",1,-1,t,n,i,r,o,4),p("x","y","z",-1,-1,t,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function p(y,v,m,g,_,x,w,E,A,F,C){let q=x/A,N=w/F,O=x/2,I=w/2,R=E/2,L=A+1,U=F+1,W=0,Q=0,ie=new b;for(let le=0;le<U;le++){let ue=le*N-I;for(let De=0;De<L;De++){let Se=De*q-O;ie[y]=Se*g,ie[v]=ue*_,ie[m]=R,l.push(ie.x,ie.y,ie.z),ie[y]=0,ie[v]=0,ie[m]=E>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(De/A),u.push(1-le/F),W+=1}}for(let le=0;le<F;le++)for(let ue=0;ue<A;ue++){let De=d+ue+L*le,Se=d+ue+L*(le+1),qe=d+(ue+1)+L*(le+1),Ie=d+(ue+1)+L*le;c.push(De,Se,Ie),c.push(Se,qe,Ie),Q+=6}a.addGroup(f,Q,C),f+=Q,d+=W}}};function Hi(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function ut(e){let t={};for(let n=0;n<e.length;n++){let i=Hi(e[n]);for(let r in i)t[r]=i[r]}return t}var ui={clone:Hi,merge:ut},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function wt(e){ve.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ld,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}wt.prototype=Object.create(ve.prototype);wt.prototype.constructor=wt;wt.prototype.isShaderMaterial=!0;wt.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this};wt.prototype.toJSON=function(e){let t=ve.prototype.toJSON.call(this,e);t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function hn(){te.call(this),this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}hn.prototype=Object.assign(Object.create(te.prototype),{constructor:hn,isCamera:!0,copy:function(e,t){return te.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new b),this.updateMatrixWorld(!0);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){te.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){te.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function rt(e,t,n,i){hn.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}rt.prototype=Object.assign(Object.create(hn.prototype),{constructor:rt,isPerspectiveCamera:!0,copy:function(e,t){return hn.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){let t=.5*this.getFilmHeight()/e;this.fov=Me.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){let e=Math.tan(Me.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return Me.RAD2DEG*2*Math.atan(Math.tan(Me.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=this.near,t=e*Math.tan(Me.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}let s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});var _i=90,bi=1;function Rr(e,t,n){if(te.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new rt(_i,bi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(1,0,0)),this.add(i);let r=new rt(_i,bi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(-1,0,0)),this.add(r);let o=new rt(_i,bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);let s=new rt(_i,bi,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new b(0,-1,0)),this.add(s);let a=new rt(_i,bi,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new b(0,0,1)),this.add(a);let c=new rt(_i,bi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c),this.update=function(l,h){this.parent===null&&this.updateMatrixWorld();let u=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(h,i),l.setRenderTarget(n,1),l.render(h,r),l.setRenderTarget(n,2),l.render(h,o),l.setRenderTarget(n,3),l.render(h,s),l.setRenderTarget(n,4),l.render(h,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(h,c),l.setRenderTarget(d),l.xr.enabled=u},this.clear=function(l,h,u,d){let f=l.getRenderTarget();for(let p=0;p<6;p++)l.setRenderTarget(n,p),l.clear(h,u,d);l.setRenderTarget(f)}}Rr.prototype=Object.create(te.prototype);Rr.prototype.constructor=Rr;function Dr(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),Lt.call(this,e,e,t)}Dr.prototype=Object.create(Lt.prototype);Dr.prototype.constructor=Dr;Dr.prototype.isWebGLCubeRenderTarget=!0;Dr.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=t.format,this.texture.encoding=t.encoding;let n=new hs,i={uniforms:{tEquirect:{value:null}},vertexShader:["varying vec3 vWorldDirection;","vec3 transformDirection( in vec3 dir, in mat4 matrix ) {","	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );","}","void main() {","	vWorldDirection = transformDirection( position, modelMatrix );","	#include <begin_vertex>","	#include <project_vertex>","}"].join(`
`),fragmentShader:["uniform sampler2D tEquirect;","varying vec3 vWorldDirection;","#include <common>","void main() {","	vec3 direction = normalize( vWorldDirection );","	vec2 sampleUV = equirectUv( direction );","	gl_FragColor = texture2D( tEquirect, sampleUV );","}"].join(`
`)},r=new wt({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:at,blending:Dn});r.uniforms.tEquirect.value=t;let o=new He(new zi(5,5,5),r);return n.add(o),new Rr(1,10,this).update(e,n),o.geometry.dispose(),o.material.dispose(),this};function Gi(e,t,n,i,r,o,s,a,c,l,h,u){Be.call(this,null,o,s,a,c,l,i,r,h,u),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Ue,this.minFilter=l!==void 0?l:Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Gi.prototype=Object.create(Be.prototype);Gi.prototype.constructor=Gi;Gi.prototype.isDataTexture=!0;var wi=new yn,Io=new b;function uo(e,t,n,i,r,o){this.planes=[e!==void 0?e:new Xt,t!==void 0?t:new Xt,n!==void 0?n:new Xt,i!==void 0?i:new Xt,r!==void 0?r:new Xt,o!==void 0?o:new Xt]}Object.assign(uo.prototype,{set:function(e,t,n,i,r,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromProjectionMatrix:function(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],a=n[4],c=n[5],l=n[6],h=n[7],u=n[8],d=n[9],f=n[10],p=n[11],y=n[12],v=n[13],m=n[14],g=n[15];return t[0].setComponents(s-i,h-a,p-u,g-y).normalize(),t[1].setComponents(s+i,h+a,p+u,g+y).normalize(),t[2].setComponents(s+r,h+c,p+d,g+v).normalize(),t[3].setComponents(s-r,h-c,p-d,g-v).normalize(),t[4].setComponents(s-o,h-l,p-f,g-m).normalize(),t[5].setComponents(s+o,h+l,p+f,g+m).normalize(),this},intersectsObject:function(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)},intersectsSprite:function(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)},intersectsSphere:function(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0},intersectsBox:function(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Io.x=i.normal.x>0?e.max.x:e.min.x,Io.y=i.normal.y>0?e.max.y:e.min.y,Io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Io)<0)return!1}return!0},containsPoint:function(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}});var Z={common:{diffuse:{value:new re(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ht},uv2Transform:{value:new ht},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new re(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ht}},sprite:{diffuse:{value:new re(15658734)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ht}}};function Uu(){let e=null,t=!1,n=null,i=null;function r(o,s){n(o,s),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){e=o}}}function Rd(e,t){let n=t.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=e.createBuffer();e.bindBuffer(h,f),e.bufferData(h,u,d),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function o(l,h,u){let d=h.array,f=h.updateRange;e.bindBuffer(u,l),f.count===-1?e.bufferSubData(u,0,d):(n?e.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):e.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(e.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(o(u.buffer,l,h),u.version=l.version)}return{get:s,remove:a,update:c}}function ds(e,t,n,i){_e.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new Vi(e,t,n,i)),this.mergeVertices()}ds.prototype=Object.create(_e.prototype);ds.prototype.constructor=ds;function Vi(e,t,n,i){oe.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},e=e||1,t=t||1;let r=e/2,o=t/2,s=Math.floor(n)||1,a=Math.floor(i)||1,c=s+1,l=a+1,h=e/s,u=t/a,d=[],f=[],p=[],y=[];for(let v=0;v<l;v++){let m=v*u-o;for(let g=0;g<c;g++){let _=g*h-r;f.push(_,-m,0),p.push(0,0,1),y.push(g/s),y.push(1-v/a)}}for(let v=0;v<a;v++)for(let m=0;m<s;m++){let g=m+c*v,_=m+c*(v+1),x=m+1+c*(v+1),w=m+1+c*v;d.push(g,_,w),d.push(_,x,w)}this.setIndex(d),this.setAttribute("position",new ee(f,3)),this.setAttribute("normal",new ee(p,3)),this.setAttribute("uv",new ee(y,2))}Vi.prototype=Object.create(oe.prototype);Vi.prototype.constructor=Vi;var Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd="vec3 transformed = vec3( position );",Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,qd=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Xd=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Yd=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,Zd=`#define PI 3.141592653589793
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
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`
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
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`vec3 diffuse = vec3( 1.0 );
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
#endif`,vp=`uniform bool receiveShadow;
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
#endif`,yp=`#if defined( USE_ENVMAP )
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
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Mp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,Tp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,zp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef FLAT_SHADED
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
vec3 geometryNormal = normal;`,Vp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#ifdef USE_SHADOWMAP
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
#endif`,tm=`#ifdef USE_SHADOWMAP
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
#endif`,nm=`#ifdef USE_SHADOWMAP
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
#endif`,im=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,dm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,pm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,gm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`#include <envmap_common_pars_fragment>
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#include <common>
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
}`,Tm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform vec3 diffuse;
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
}`,Pm=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,Fm=`#define TOON
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
}`,Um=`#define TOON
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
}`,zm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,km=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,jm=`uniform vec3 diffuse;
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
}`,qm=`uniform float size;
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
}`,Xm=`uniform vec3 color;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`uniform float rotation;
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
}`,ce={alphamap_fragment:Dd,alphamap_pars_fragment:Id,alphatest_fragment:Nd,aomap_fragment:Od,aomap_pars_fragment:Bd,begin_vertex:Fd,beginnormal_vertex:Ud,bsdfs:zd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Wd,color_fragment:jd,color_pars_fragment:qd,color_pars_vertex:Xd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Qd,displacementmap_vertex:Kd,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,encodings_fragment:np,encodings_pars_fragment:ip,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:sp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:yp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:up,fog_fragment:hp,fog_pars_fragment:fp,gradientmap_pars_fragment:dp,lightmap_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_vertex:gp,lights_pars_begin:vp,lights_toon_fragment:xp,lights_toon_pars_fragment:_p,lights_phong_fragment:bp,lights_phong_pars_fragment:wp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:Tp,lights_fragment_maps:Ep,lights_fragment_end:Ap,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Rp,map_fragment:Dp,map_pars_fragment:Ip,map_particle_fragment:Np,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:Fp,morphnormal_vertex:Up,morphtarget_pars_vertex:zp,morphtarget_vertex:Hp,normal_fragment_begin:Gp,normal_fragment_maps:Vp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:qp,packing:Xp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:rm,skinning_pars_vertex:om,skinning_vertex:sm,skinnormal_vertex:am,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:um,tonemapping_pars_fragment:hm,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,uv2_pars_fragment:mm,uv2_pars_vertex:gm,uv2_vertex:vm,worldpos_vertex:ym,background_frag:xm,background_vert:_m,cube_frag:bm,cube_vert:wm,depth_frag:Mm,depth_vert:Sm,distanceRGBA_frag:Tm,distanceRGBA_vert:Em,equirect_frag:Am,equirect_vert:Cm,linedashed_frag:Lm,linedashed_vert:Pm,meshbasic_frag:Rm,meshbasic_vert:Dm,meshlambert_frag:Im,meshlambert_vert:Nm,meshmatcap_frag:Om,meshmatcap_vert:Bm,meshtoon_frag:Fm,meshtoon_vert:Um,meshphong_frag:zm,meshphong_vert:Hm,meshphysical_frag:Gm,meshphysical_vert:Vm,normal_frag:km,normal_vert:Wm,points_frag:jm,points_vert:qm,shadow_frag:Xm,shadow_vert:Ym,sprite_frag:Zm,sprite_vert:Jm},un={basic:{uniforms:ut([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:ut([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.fog,Z.lights,{emissive:{value:new re(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:ut([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:ut([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:ut([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new re(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:ut([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:ut([Z.points,Z.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:ut([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:ut([Z.common,Z.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:ut([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:ce.normal_vert,fragmentShader:ce.normal_frag},sprite:{uniforms:ut([Z.sprite,Z.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},cube:{uniforms:ut([Z.envmap,{opacity:{value:1}}]),vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:ut([Z.common,Z.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:ut([Z.lights,Z.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};un.physical={uniforms:ut([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new re(0)},transparency:{value:0}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};function $m(e,t,n,i){let r=new re(0),o=0,s,a,c=null,l=0,h=null;function u(f,p,y,v){let m=p.isScene===!0?p.background:null,g=e.xr,_=g.getSession&&g.getSession();if(_&&_.environmentBlendMode==="additive"&&(m=null),m===null?d(r,o):m&&m.isColor&&(d(m,1),v=!0),(e.autoClear||v)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===co)){a===void 0&&(a=new He(new zi(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Hi(un.cube.uniforms),vertexShader:un.cube.vertexShader,fragmentShader:un.cube.fragmentShader,side:at,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a));let x=m.isWebGLCubeRenderTarget?m.texture:m;a.material.uniforms.envMap.value=x,a.material.uniforms.flipEnvMap.value=x.isCubeTexture?-1:1,(c!==m||l!==x.version||h!==e.toneMapping)&&(a.material.needsUpdate=!0,c=m,l=x.version,h=e.toneMapping),f.unshift(a,a.geometry,a.material,0,0,null)}else m&&m.isTexture&&(s===void 0&&(s=new He(new Vi(2,2),new wt({name:"BackgroundMaterial",uniforms:Hi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ao,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(s)),s.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),s.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||l!==m.version||h!==e.toneMapping)&&(s.material.needsUpdate=!0,c=m,l=m.version,h=e.toneMapping),f.unshift(s,s.geometry,s.material,0,0,null))}function d(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,i)}return{getClearColor:function(){return r},setClearColor:function(f,p){r.set(f),o=p!==void 0?p:1,d(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,d(r,o)},render:u}}function Qm(e,t,n,i){let r=e.getParameter(34921),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},c=y(null),l=c;function h(I,R,L,U,W){let Q=!1;if(s){let ie=p(U,L,R);l!==ie&&(l=ie,d(l.object)),Q=v(U),Q&&m(U)}else{let ie=R.wireframe===!0;(l.geometry!==U.id||l.program!==L.id||l.wireframe!==ie)&&(l.geometry=U.id,l.program=L.id,l.wireframe=ie,Q=!0)}I.isInstancedMesh===!0&&(Q=!0),W!==null&&n.update(W,34963),Q&&(A(I,R,L,U),W!==null&&e.bindBuffer(34963,n.get(W).buffer))}function u(){return i.isWebGL2?e.createVertexArray():o.createVertexArrayOES()}function d(I){return i.isWebGL2?e.bindVertexArray(I):o.bindVertexArrayOES(I)}function f(I){return i.isWebGL2?e.deleteVertexArray(I):o.deleteVertexArrayOES(I)}function p(I,R,L){let U=L.wireframe===!0,W=a[I.id];W===void 0&&(W={},a[I.id]=W);let Q=W[R.id];Q===void 0&&(Q={},W[R.id]=Q);let ie=Q[U];return ie===void 0&&(ie=y(u()),Q[U]=ie),ie}function y(I){let R=[],L=[],U=[];for(let W=0;W<r;W++)R[W]=0,L[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:U,object:I,attributes:{}}}function v(I){let R=l.attributes,L=I.attributes;if(Object.keys(R).length!==Object.keys(L).length)return!0;for(let U in L){let W=R[U],Q=L[U];if(W.attribute!==Q||W.data!==Q.data)return!0}return!1}function m(I){let R={},L=I.attributes;for(let U in L){let W=L[U],Q={};Q.attribute=W,W.data&&(Q.data=W.data),R[U]=Q}l.attributes=R}function g(){let I=l.newAttributes;for(let R=0,L=I.length;R<L;R++)I[R]=0}function _(I){x(I,0)}function x(I,R){let L=l.newAttributes,U=l.enabledAttributes,W=l.attributeDivisors;L[I]=1,U[I]===0&&(e.enableVertexAttribArray(I),U[I]=1),W[I]!==R&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,R),W[I]=R)}function w(){let I=l.newAttributes,R=l.enabledAttributes;for(let L=0,U=R.length;L<U;L++)R[L]!==I[L]&&(e.disableVertexAttribArray(L),R[L]=0)}function E(I,R,L,U,W,Q){i.isWebGL2===!0&&(L===5124||L===5125)?e.vertexAttribIPointer(I,R,L,U,W,Q):e.vertexAttribPointer(I,R,L,U,W,Q)}function A(I,R,L,U){if(i.isWebGL2===!1&&(I.isInstancedMesh||U.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let W=U.attributes,Q=L.getAttributes(),ie=R.defaultAttributeValues;for(let le in Q){let ue=Q[le];if(ue>=0){let De=W[le];if(De!==void 0){let Se=De.normalized,qe=De.itemSize,Ie=n.get(De);if(Ie===void 0)continue;let V=Ie.buffer,et=Ie.type,Ce=Ie.bytesPerElement;if(De.isInterleavedBufferAttribute){let Le=De.data,be=Le.stride,k=De.offset;Le&&Le.isInstancedInterleavedBuffer?(x(ue,Le.meshPerAttribute),U._maxInstanceCount===void 0&&(U._maxInstanceCount=Le.meshPerAttribute*Le.count)):_(ue),e.bindBuffer(34962,V),E(ue,qe,et,Se,be*Ce,k*Ce)}else De.isInstancedBufferAttribute?(x(ue,De.meshPerAttribute),U._maxInstanceCount===void 0&&(U._maxInstanceCount=De.meshPerAttribute*De.count)):_(ue),e.bindBuffer(34962,V),E(ue,qe,et,Se,0,0)}else if(le==="instanceMatrix"){let Se=n.get(I.instanceMatrix);if(Se===void 0)continue;let qe=Se.buffer,Ie=Se.type;x(ue+0,1),x(ue+1,1),x(ue+2,1),x(ue+3,1),e.bindBuffer(34962,qe),e.vertexAttribPointer(ue+0,4,Ie,!1,64,0),e.vertexAttribPointer(ue+1,4,Ie,!1,64,16),e.vertexAttribPointer(ue+2,4,Ie,!1,64,32),e.vertexAttribPointer(ue+3,4,Ie,!1,64,48)}else if(ie!==void 0){let Se=ie[le];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(ue,Se);break;case 3:e.vertexAttrib3fv(ue,Se);break;case 4:e.vertexAttrib4fv(ue,Se);break;default:e.vertexAttrib1fv(ue,Se)}}}}w()}function F(){N();for(let I in a){let R=a[I];for(let L in R){let U=R[L];for(let W in U)f(U[W].object),delete U[W];delete R[L]}delete a[I]}}function C(I){if(a[I.id]===void 0)return;let R=a[I.id];for(let L in R){let U=R[L];for(let W in U)f(U[W].object),delete U[W];delete R[L]}delete a[I.id]}function q(I){for(let R in a){let L=a[R];if(L[I.id]===void 0)continue;let U=L[I.id];for(let W in U)f(U[W].object),delete U[W];delete L[I.id]}}function N(){O(),l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:_,disableUnusedAttributes:w}}function Km(e,t,n,i){let r=i.isWebGL2,o;function s(l){o=l}function a(l,h){e.drawArrays(o,l,h),n.update(h,o)}function c(l,h,u,d){if(d===0)return;let f,p;if(r)f=e,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](o,h,u,d),n.update(u,o,d)}this.setMode=s,this.render=a,this.renderInstances=c}function eg(e,t,n){let i;function r(){if(i!==void 0)return i;let E=t.get("EXT_texture_filter_anisotropic");return E!==null?i=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function o(E){if(E==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext,a=n.precision!==void 0?n.precision:"highp",c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=n.logarithmicDepthBuffer===!0,h=e.getParameter(34930),u=e.getParameter(35660),d=e.getParameter(3379),f=e.getParameter(34076),p=e.getParameter(34921),y=e.getParameter(36347),v=e.getParameter(36348),m=e.getParameter(36349),g=u>0,_=s||!!t.get("OES_texture_float"),x=g&&_,w=s?e.getParameter(36183):0;return{isWebGL2:s,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:x,maxSamples:w}}function tg(){let e=this,t=null,n=0,i=!1,r=!1,o=new Xt,s=new ht,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,d){let f=h.length!==0||u||n!==0||i;return i=u,t=l(h,d,0),n=h.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,u,d,f,p,y){if(!i||h===null||h.length===0||r&&!d)r?l(null):c();else{let v=r?0:n,m=v*4,g=p.clippingState||null;a.value=g,g=l(h,f,m,y);for(let _=0;_!==m;++_)g[_]=t[_];p.clippingState=g,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=v}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,u,d,f){let p=h!==null?h.length:0,y=null;if(p!==0){if(y=a.value,f!==!0||y===null){let v=d+p*4,m=u.matrixWorldInverse;s.getNormalMatrix(m),(y===null||y.length<v)&&(y=new Float32Array(v));for(let g=0,_=d;g!==p;++g,_+=4)o.copy(h[g]).applyMatrix4(m,s),o.normal.toArray(y,_),y[_+3]=o.constant}a.value=y,a.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,y}}function ng(e){let t={};return{get:function(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]=i,i}}}function ig(e,t,n,i){let r=new WeakMap,o=new WeakMap;function s(u){let d=u.target,f=r.get(d);f.index!==null&&t.remove(f.index);for(let y in f.attributes)t.remove(f.attributes[y]);d.removeEventListener("dispose",s),r.delete(d);let p=o.get(f);p&&(t.remove(p),o.delete(f)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){let f=r.get(d);return f||(d.addEventListener("dispose",s),d.isBufferGeometry?f=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new oe().setFromObject(u)),f=d._bufferGeometry),r.set(d,f),n.memory.geometries++,f)}function c(u){let d=u.attributes;for(let p in d)t.update(d[p],34962);let f=u.morphAttributes;for(let p in f){let y=f[p];for(let v=0,m=y.length;v<m;v++)t.update(y[v],34962)}}function l(u){let d=[],f=u.index,p=u.attributes.position,y=0;if(f!==null){let g=f.array;y=f.version;for(let _=0,x=g.length;_<x;_+=3){let w=g[_+0],E=g[_+1],A=g[_+2];d.push(w,E,E,A,A,w)}}else{let g=p.array;y=p.version;for(let _=0,x=g.length/3-1;_<x;_+=3){let w=_+0,E=_+1,A=_+2;d.push(w,E,E,A,A,w)}}let v=new(Bu(d)>65535?Pr:Lr)(d,1);v.version=y;let m=o.get(u);m&&t.remove(m),o.set(u,v)}function h(u){let d=o.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rg(e,t,n,i){let r=i.isWebGL2,o;function s(d){o=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){e.drawElements(o,f,a,d*c),n.update(f,o)}function u(d,f,p,y){if(y===0)return;let v,m;if(r)v=e,m="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,p,a,f*c,y),n.update(p,o,y)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u}function og(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(a=a||1,n.calls++,s){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sg(e,t){return e[0]-t[0]}function ag(e,t){return Math.abs(t[1])-Math.abs(e[1])}function cg(e){let t={},n=new Float32Array(8),i=[];for(let o=0;o<8;o++)i[o]=[o,0];function r(o,s,a,c){let l=o.morphTargetInfluences,h=l===void 0?0:l.length,u=t[s.id];if(u===void 0){u=[];for(let v=0;v<h;v++)u[v]=[v,0];t[s.id]=u}for(let v=0;v<h;v++){let m=u[v];m[0]=v,m[1]=l[v]}u.sort(ag);for(let v=0;v<8;v++)v<h&&u[v][1]?(i[v][0]=u[v][0],i[v][1]=u[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(sg);let d=a.morphTargets&&s.morphAttributes.position,f=a.morphNormals&&s.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let m=i[v],g=m[0],_=m[1];g!==Number.MAX_SAFE_INTEGER&&_?(d&&s.getAttribute("morphTarget"+v)!==d[g]&&s.setAttribute("morphTarget"+v,d[g]),f&&s.getAttribute("morphNormal"+v)!==f[g]&&s.setAttribute("morphNormal"+v,f[g]),n[v]=_,p+=_):(d&&s.getAttribute("morphTarget"+v)!==void 0&&s.deleteAttribute("morphTarget"+v),f&&s.getAttribute("morphNormal"+v)!==void 0&&s.deleteAttribute("morphNormal"+v),n[v]=0)}let y=s.morphTargetsRelative?1:1-p;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function lg(e,t,n,i){let r=new WeakMap;function o(a){let c=i.render.frame,l=a.geometry,h=t.get(a,l);return r.get(h)!==c&&(l.isGeometry&&h.updateFromObject(a),t.update(h),r.set(h,c)),a.isInstancedMesh&&n.update(a.instanceMatrix,34962),h}function s(){r=new WeakMap}return{update:o,dispose:s}}function Fn(e,t,n,i,r,o,s,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:Sc,s=s!==void 0?s:$n,Be.call(this,e,t,n,i,r,o,s,a,c,l),this.flipY=!1}Fn.prototype=Object.create(Be.prototype);Fn.prototype.constructor=Fn;Fn.prototype.isCubeTexture=!0;Object.defineProperty(Fn.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function Ir(e,t,n,i){Be.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Ir.prototype=Object.create(Be.prototype);Ir.prototype.constructor=Ir;Ir.prototype.isDataTexture2DArray=!0;function Nr(e,t,n,i){Be.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Nr.prototype=Object.create(Be.prototype);Nr.prototype.constructor=Nr;Nr.prototype.isDataTexture3D=!0;var zu=new Be,ug=new Ir,hg=new Nr,Hu=new Fn,ml=[],gl=[],vl=new Float32Array(16),yl=new Float32Array(9),xl=new Float32Array(4);function ar(e,t,n){let i=e[0];if(i<=0||i>0)return e;let r=t*n,o=ml[r];if(o===void 0&&(o=new Float32Array(r),ml[r]=o),t!==0){i.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=n,e[s].toArray(o,a)}return o}function Rt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Tt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Gu(e,t){let n=gl[t];n===void 0&&(n=new Int32Array(t),gl[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function fg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function dg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Rt(n,t))return;e.uniform2fv(this.addr,t),Tt(n,t)}}function pg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Rt(n,t))return;e.uniform3fv(this.addr,t),Tt(n,t)}}function mg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Rt(n,t))return;e.uniform4fv(this.addr,t),Tt(n,t)}}function gg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Rt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Tt(n,t)}else{if(Rt(n,i))return;xl.set(i),e.uniformMatrix2fv(this.addr,!1,xl),Tt(n,i)}}function vg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Rt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Tt(n,t)}else{if(Rt(n,i))return;yl.set(i),e.uniformMatrix3fv(this.addr,!1,yl),Tt(n,i)}}function yg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Rt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Tt(n,t)}else{if(Rt(n,i))return;vl.set(i),e.uniformMatrix4fv(this.addr,!1,vl),Tt(n,i)}}function xg(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||zu,r)}function _g(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||ug,r)}function bg(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||hg,r)}function wg(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||Hu,r)}function Mg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Sg(e,t){let n=this.cache;Rt(n,t)||(e.uniform2iv(this.addr,t),Tt(n,t))}function Tg(e,t){let n=this.cache;Rt(n,t)||(e.uniform3iv(this.addr,t),Tt(n,t))}function Eg(e,t){let n=this.cache;Rt(n,t)||(e.uniform4iv(this.addr,t),Tt(n,t))}function Ag(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Cg(e){switch(e){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return Tg;case 35669:case 35673:return Eg;case 5125:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return _g}}function Lg(e,t){e.uniform1fv(this.addr,t)}function Pg(e,t){e.uniform1iv(this.addr,t)}function Rg(e,t){e.uniform2iv(this.addr,t)}function Dg(e,t){e.uniform3iv(this.addr,t)}function Ig(e,t){e.uniform4iv(this.addr,t)}function Ng(e,t){let n=ar(t,this.size,2);e.uniform2fv(this.addr,n)}function Og(e,t){let n=ar(t,this.size,3);e.uniform3fv(this.addr,n)}function Bg(e,t){let n=ar(t,this.size,4);e.uniform4fv(this.addr,n)}function Fg(e,t){let n=ar(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ug(e,t){let n=ar(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zg(e,t){let n=ar(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Hg(e,t,n){let i=t.length,r=Gu(n,i);e.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)n.safeSetTexture2D(t[o]||zu,r[o])}function Gg(e,t,n){let i=t.length,r=Gu(n,i);e.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)n.safeSetTextureCube(t[o]||Hu,r[o])}function Vg(e){switch(e){case 5126:return Lg;case 35664:return Ng;case 35665:return Og;case 35666:return Bg;case 35674:return Fg;case 35675:return Ug;case 35676:return zg;case 5124:case 35670:return Pg;case 35667:case 35671:return Rg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg}}function kg(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Cg(t.type)}function Vu(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vg(t.type)}Vu.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),Tt(t,e)};function ku(e){this.id=e,this.seq=[],this.map={}}ku.prototype.setValue=function(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let s=i[r];s.setValue(e,t[s.id],n)}};var ba=/([\w\d_]+)(\])?(\[|\.)?/g;function _l(e,t){e.seq.push(t),e.map[t.id]=t}function Wg(e,t,n){let i=e.name,r=i.length;for(ba.lastIndex=0;;){let o=ba.exec(i),s=ba.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){_l(n,l===void 0?new kg(a,e,t):new Vu(a,e,t));break}else{let u=n.map[a];u===void 0&&(u=new ku(a),_l(n,u)),n=u}}}function In(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Wg(r,o,this)}}In.prototype.setValue=function(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)};In.prototype.setOptional=function(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)};In.upload=function(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let s=t[r],a=n[s.id];a.needsUpdate!==!1&&s.setValue(e,a.value,i)}};In.seqWithValue=function(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n};function bl(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var jg=0;function qg(e){let t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Wu(e){switch(e){case bt:return["Linear","( value )"];case js:return["sRGB","( value )"];case Pc:return["RGBE","( value )"];case Ru:return["RGBM","( value, 7.0 )"];case Du:return["RGBM","( value, 16.0 )"];case Iu:return["RGBD","( value, 256.0 )"];case Lc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case ud:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function wl(e,t,n){let i=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";let o=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+qg(o)}function pr(e,t){let n=Wu(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Xg(e,t){let n=Wu(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Yg(e,t){let n;switch(t){case lf:n="Linear";break;case uf:n="Reinhard";break;case hf:n="OptimizedCineon";break;case ff:n="ACESFilmic";break;case df:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Zg(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function Jg(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function $g(e,t){let n={},i=e.getProgramParameter(t,35721);for(let r=0;r<i;r++){let s=e.getActiveAttrib(t,r).name;n[s]=e.getAttribLocation(t,s)}return n}function br(e){return e!==""}function Ml(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(e){return e.replace(Qg,Kg)}function Kg(e,t){let n=ce[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return za(n)}var ev=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,tv=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function Tl(e){return e.replace(tv,ju).replace(ev,nv)}function nv(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ju(e,t,n,i)}function ju(e,t,n,i){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=i.replace(/\[ i \]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function El(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iv(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===_r&&(t="SHADOWMAP_TYPE_VSM"),t}function rv(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Sc:case Tc:t="ENVMAP_TYPE_CUBE";break;case co:case Ac:t="ENVMAP_TYPE_CUBE_UV";break;case Cu:case Ec:t="ENVMAP_TYPE_EQUIREC";break}return t}function ov(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Tc:case Ec:t="ENVMAP_MODE_REFRACTION";break}return t}function sv(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ks:t="ENVMAP_BLENDING_MULTIPLY";break;case af:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function av(e,t,n,i){let r=e.getContext(),o=n.defines,s=n.vertexShader,a=n.fragmentShader,c=iv(n),l=rv(n),h=ov(n),u=sv(n),d=e.gammaFactor>0?e.gammaFactor:1,f=n.isWebGL2?"":Zg(n),p=Jg(o),y=r.createProgram(),v,m;if(n.isRawShaderMaterial?(v=[p].filter(br).join(`
`),v.length>0&&(v+=`
`),m=[f,p].filter(br).join(`
`),m.length>0&&(m+=`
`)):(v=[El(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[f,El(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?ce.tonemapping_pars_fragment:"",n.toneMapping!==Oi?Yg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",ce.encodings_pars_fragment,n.map?pr("mapTexelToLinear",n.mapEncoding):"",n.matcap?pr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?pr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?pr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?pr("lightMapTexelToLinear",n.lightMapEncoding):"",Xg("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(br).join(`
`)),s=za(s),s=Ml(s,n),s=Sl(s,n),a=za(a),a=Ml(a,n),a=Sl(a,n),s=Tl(s),a=Tl(a),n.isWebGL2&&!n.isRawShaderMaterial){let F=!1,C=/^\s*#version\s+300\s+es\s*\n/;n.isShaderMaterial&&s.match(C)!==null&&a.match(C)!==null&&(F=!0,s=s.replace(C,""),a=a.replace(C,"")),v=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=[`#version 300 es
`,"#define varying in",F?"":"out highp vec4 pc_fragColor;",F?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m}let g=v+s,_=m+a,x=bl(r,35633,g),w=bl(r,35632,_);if(r.attachShader(y,x),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),e.debug.checkShaderErrors){let F=r.getProgramInfoLog(y).trim(),C=r.getShaderInfoLog(x).trim(),q=r.getShaderInfoLog(w).trim(),N=!0,O=!0;if(r.getProgramParameter(y,35714)===!1){N=!1;let I=wl(r,x,"vertex"),R=wl(r,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",F,I,R)}else F!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",F):(C===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:N,programLog:F,vertexShader:{log:C,prefix:v},fragmentShader:{log:q,prefix:m}})}r.deleteShader(x),r.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new In(r,y)),E};let A;return this.getAttributes=function(){return A===void 0&&(A=$g(r,y)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=x,this.fragmentShader=w,this}function cv(e,t,n,i){let r=[],o=n.isWebGL2,s=n.logarithmicDepthBuffer,a=n.floatVertexTextures,c=n.maxVertexUniforms,l=n.vertexTextures,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},d=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen"];function f(x,w){let E;if(w){let A=un[w];E={name:x.name||x.type,uniforms:ui.clone(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader}}else E={name:x.name||x.type,uniforms:x.uniforms,vertexShader:x.vertexShader,fragmentShader:x.fragmentShader};return E}function p(x){let E=x.skeleton.bones;if(a)return 1024;{let F=Math.floor((c-20)/4),C=Math.min(F,E.length);return C<E.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+E.length+" bones. This GPU supports "+C+"."),0):C}}function y(x){let w;return x?x.isTexture?w=x.encoding:x.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=x.texture.encoding):w=bt,w}function v(x,w,E,A,F,C,q){let N=A.fog,O=x.isMeshStandardMaterial?A.environment:null,I=x.envMap||O,R=u[x.type],L=q.isSkinnedMesh?p(q):0;x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let U=f(x,R);x.onBeforeCompile(U,e);let W=e.getRenderTarget();return{isWebGL2:o,shaderID:R,shaderName:U.name,uniforms:U.uniforms,vertexShader:U.vertexShader,fragmentShader:U.fragmentShader,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial,isShaderMaterial:x.isShaderMaterial,precision:h,instancing:q.isInstancedMesh===!0,supportsVertexTextures:l,outputEncoding:W!==null?y(W.texture):e.outputEncoding,map:!!x.map,mapEncoding:y(x.map),matcap:!!x.matcap,matcapEncoding:y(x.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:y(I),envMapCubeUV:!!I&&(I.mapping===co||I.mapping===Ac),lightMap:!!x.lightMap,lightMapEncoding:y(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:y(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===dd,tangentSpaceNormalMap:x.normalMapType===or,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:s,skinning:x.skinning&&L>0,maxBones:L,useVertexTexture:a,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:F,numClipIntersection:C,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&E.length>0,shadowMapType:e.shadowMap.type,toneMapping:x.toneMapped?e.toneMapping:Oi,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===pt,flipSided:x.side===at,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:o||t.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:o||t.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:x.customProgramCacheKey()}}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.fragmentShader),w.push(x.vertexShader)),x.defines!==void 0)for(let E in x.defines)w.push(E),w.push(x.defines[E]);if(x.isRawShaderMaterial===void 0){for(let E=0;E<d.length;E++)w.push(x[d[E]]);w.push(e.outputEncoding),w.push(e.gammaFactor)}return w.push(x.customProgramCacheKey),w.join()}function g(x,w){let E;for(let A=0,F=r.length;A<F;A++){let C=r[A];if(C.cacheKey===w){E=C,++E.usedTimes;break}}return E===void 0&&(E=new av(e,w,x,i),r.push(E)),E}function _(x){if(--x.usedTimes===0){let w=r.indexOf(x);r[w]=r[r.length-1],r.pop(),x.destroy()}}return{getParameters:v,getProgramCacheKey:m,acquireProgram:g,releaseProgram:_,programs:r}}function lv(){let e=new WeakMap;function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function n(o){e.delete(o)}function i(o,s,a){e.get(o)[s]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function uv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function hv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Al(){let e=[],t=0,n=[],i=[],r={id:-1};function o(){t=0,n.length=0,i.length=0}function s(u,d,f,p,y,v){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,program:f.program||r,groupOrder:p,renderOrder:u.renderOrder,z:y,group:v},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.program=f.program||r,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=y,m.group=v),t++,m}function a(u,d,f,p,y,v){let m=s(u,d,f,p,y,v);(f.transparent===!0?i:n).push(m)}function c(u,d,f,p,y,v){let m=s(u,d,f,p,y,v);(f.transparent===!0?i:n).unshift(m)}function l(u,d){n.length>1&&n.sort(u||uv),i.length>1&&i.sort(d||hv)}function h(){for(let u=t,d=e.length;u<d;u++){let f=e[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.program=null,f.group=null}}return{opaque:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function fv(){let e=new WeakMap;function t(r){let o=r.target;o.removeEventListener("dispose",t),e.delete(o)}function n(r,o){let s=e.get(r),a;return s===void 0?(a=new Al,e.set(r,new WeakMap),e.get(r).set(o,a),r.addEventListener("dispose",t)):(a=s.get(o),a===void 0&&(a=new Al,s.set(o,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function dv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new b,color:new re};break;case"SpotLight":n={position:new b,direction:new b,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new b,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new b,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new b,halfWidth:new b,halfHeight:new b};break}return e[t.id]=n,n}}}function pv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var mv=0;function gv(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function vv(){let e=new dv,t=pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)n.probe.push(new b);let i=new b,r=new Ae,o=new Ae;function s(a,c,l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,y=0,v=0,m=0,g=0,_=0,x=0,w=l.matrixWorldInverse;a.sort(gv);for(let A=0,F=a.length;A<F;A++){let C=a[A],q=C.color,N=C.intensity,O=C.distance,I=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=q.r*N,u+=q.g*N,d+=q.b*N;else if(C.isLightProbe)for(let R=0;R<9;R++)n.probe[R].addScaledVector(C.sh.coefficients[R],N);else if(C.isDirectionalLight){let R=e.get(C);if(R.color.copy(C.color).multiplyScalar(C.intensity),R.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(w),C.castShadow){let L=C.shadow,U=t.get(C);U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=C.shadow.matrix,g++}n.directional[f]=R,f++}else if(C.isSpotLight){let R=e.get(C);if(R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(w),R.color.copy(q).multiplyScalar(N),R.distance=O,R.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(w),R.coneCos=Math.cos(C.angle),R.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),R.decay=C.decay,C.castShadow){let L=C.shadow,U=t.get(C);U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,n.spotShadow[y]=U,n.spotShadowMap[y]=I,n.spotShadowMatrix[y]=C.shadow.matrix,x++}n.spot[y]=R,y++}else if(C.isRectAreaLight){let R=e.get(C);R.color.copy(q).multiplyScalar(N),R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(w),o.identity(),r.copy(C.matrixWorld),r.premultiply(w),o.extractRotation(r),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),n.rectArea[v]=R,v++}else if(C.isPointLight){let R=e.get(C);if(R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(w),R.color.copy(C.color).multiplyScalar(C.intensity),R.distance=C.distance,R.decay=C.decay,C.castShadow){let L=C.shadow,U=t.get(C);U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,U.shadowCameraNear=L.camera.near,U.shadowCameraFar=L.camera.far,n.pointShadow[p]=U,n.pointShadowMap[p]=I,n.pointShadowMatrix[p]=C.shadow.matrix,_++}n.point[p]=R,p++}else if(C.isHemisphereLight){let R=e.get(C);R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(w),R.direction.normalize(),R.skyColor.copy(C.color).multiplyScalar(N),R.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[m]=R,m++}}n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let E=n.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==y||E.rectAreaLength!==v||E.hemiLength!==m||E.numDirectionalShadows!==g||E.numPointShadows!==_||E.numSpotShadows!==x)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=v,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=_,n.spotShadowMatrix.length=x,E.directionalLength=f,E.pointLength=p,E.spotLength=y,E.rectAreaLength=v,E.hemiLength=m,E.numDirectionalShadows=g,E.numPointShadows=_,E.numSpotShadows=x,n.version=mv++)}return{setup:s,state:n}}function Cl(){let e=new vv,t=[],n=[];function i(){t.length=0,n.length=0}function r(c){t.push(c)}function o(c){n.push(c)}function s(c){e.setup(t,n,c)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e},setupLights:s,pushLight:r,pushShadow:o}}function yv(){let e=new WeakMap;function t(r){let o=r.target;o.removeEventListener("dispose",t),e.delete(o)}function n(r,o){let s;return e.has(r)===!1?(s=new Cl,e.set(r,new WeakMap),e.get(r).set(o,s),r.addEventListener("dispose",t)):e.get(r).has(o)===!1?(s=new Cl,e.get(r).set(o,s)):s=e.get(r).get(o),s}function i(){e=new WeakMap}return{get:n,dispose:i}}function ei(e){ve.call(this),this.type="MeshDepthMaterial",this.depthPacking=hd,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}ei.prototype=Object.create(ve.prototype);ei.prototype.constructor=ei;ei.prototype.isMeshDepthMaterial=!0;ei.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function ti(e){ve.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}ti.prototype=Object.create(ve.prototype);ti.prototype.constructor=ti;ti.prototype.isMeshDistanceMaterial=!0;ti.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var xv=`uniform sampler2D shadow_pass;
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
}`,_v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function qu(e,t,n){let i=new uo,r=new z,o=new z,s=new Ne,a=[],c=[],l={},h={0:at,1:ao,2:pt},u=new wt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:_v,fragmentShader:xv}),d=u.clone();d.defines.HORIZONAL_PASS=1;let f=new oe;f.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new He(f,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su,this.render=function(w,E,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||w.length===0)return;let F=e.getRenderTarget(),C=e.getActiveCubeFace(),q=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Dn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let O=0,I=w.length;O<I;O++){let R=w[O],L=R.shadow;if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;if(L===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}r.copy(L.mapSize);let U=L.getFrameExtents();if(r.multiply(U),o.copy(L.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(o.x=Math.floor(n/U.x),r.x=o.x*U.x,L.mapSize.x=o.x),r.y>n&&(o.y=Math.floor(n/U.y),r.y=o.y*U.y,L.mapSize.y=o.y)),L.map===null&&!L.isPointLightShadow&&this.type===_r){let Q={minFilter:Qe,magFilter:Qe,format:Ht};L.map=new Lt(r.x,r.y,Q),L.map.texture.name=R.name+".shadowMap",L.mapPass=new Lt(r.x,r.y,Q),L.camera.updateProjectionMatrix()}if(L.map===null){let Q={minFilter:Ue,magFilter:Ue,format:Ht};L.map=new Lt(r.x,r.y,Q),L.map.texture.name=R.name+".shadowMap",L.camera.updateProjectionMatrix()}e.setRenderTarget(L.map),e.clear();let W=L.getViewportCount();for(let Q=0;Q<W;Q++){let ie=L.getViewport(Q);s.set(o.x*ie.x,o.y*ie.y,o.x*ie.z,o.y*ie.w),N.viewport(s),L.updateMatrices(R,Q),i=L.getFrustum(),x(E,A,L.camera,R,this.type)}!L.isPointLightShadow&&this.type===_r&&v(L,A),L.needsUpdate=!1}y.needsUpdate=!1,e.setRenderTarget(F,C,q)};function v(w,E){let A=t.update(p);u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(E,null,A,u,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(E,null,A,d,p,null)}function m(w,E,A){let F=w<<0|E<<1|A<<2,C=a[F];return C===void 0&&(C=new ei({depthPacking:fd,morphTargets:w,skinning:E}),a[F]=C),C}function g(w,E,A){let F=w<<0|E<<1|A<<2,C=c[F];return C===void 0&&(C=new ti({morphTargets:w,skinning:E}),c[F]=C),C}function _(w,E,A,F,C,q,N){let O=null,I=m,R=w.customDepthMaterial;if(F.isPointLight===!0&&(I=g,R=w.customDistanceMaterial),R===void 0){let L=!1;A.morphTargets===!0&&(L=E.morphAttributes&&E.morphAttributes.position&&E.morphAttributes.position.length>0);let U=!1;w.isSkinnedMesh===!0&&(A.skinning===!0?U=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));let W=w.isInstancedMesh===!0;O=I(L,U,W)}else O=R;if(e.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){let L=O.uuid,U=A.uuid,W=l[L];W===void 0&&(W={},l[L]=W);let Q=W[U];Q===void 0&&(Q=O.clone(),W[U]=Q),O=Q}return O.visible=A.visible,O.wireframe=A.wireframe,N===_r?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:h[A.side],O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,F.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(F.matrixWorld),O.nearDistance=C,O.farDistance=q),O}function x(w,E,A,F,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===_r)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let O=t.update(w),I=w.material;if(Array.isArray(I)){let R=O.groups;for(let L=0,U=R.length;L<U;L++){let W=R[L],Q=I[W.materialIndex];if(Q&&Q.visible){let ie=_(w,O,Q,F,A.near,A.far,C);e.renderBufferDirect(A,null,O,ie,w,W)}}}else if(I.visible){let R=_(w,O,I,F,A.near,A.far,C);e.renderBufferDirect(A,null,O,R,w,null)}}let N=w.children;for(let O=0,I=N.length;O<I;O++)x(N[O],E,A,F,C)}}function bv(e,t,n){let i=n.isWebGL2;function r(){let P=!1,$=new Ne,K=null,me=new Ne(0,0,0,0);return{setMask:function(Y){K!==Y&&!P&&(e.colorMask(Y,Y,Y,Y),K=Y)},setLocked:function(Y){P=Y},setClear:function(Y,ae,Pe,ye,fe){fe===!0&&(Y*=ye,ae*=ye,Pe*=ye),$.set(Y,ae,Pe,ye),me.equals($)===!1&&(e.clearColor(Y,ae,Pe,ye),me.copy($))},reset:function(){P=!1,K=null,me.set(-1,0,0,0)}}}function o(){let P=!1,$=null,K=null,me=null;return{setTest:function(Y){Y?le(2929):ue(2929)},setMask:function(Y){$!==Y&&!P&&(e.depthMask(Y),$=Y)},setFunc:function(Y){if(K!==Y){if(Y)switch(Y){case Kh:e.depthFunc(512);break;case ef:e.depthFunc(519);break;case tf:e.depthFunc(513);break;case Ra:e.depthFunc(515);break;case nf:e.depthFunc(514);break;case rf:e.depthFunc(518);break;case of:e.depthFunc(516);break;case sf:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);K=Y}},setLocked:function(Y){P=Y},setClear:function(Y){me!==Y&&(e.clearDepth(Y),me=Y)},reset:function(){P=!1,$=null,K=null,me=null}}}function s(){let P=!1,$=null,K=null,me=null,Y=null,ae=null,Pe=null,ye=null,fe=null;return{setTest:function(xe){P||(xe?le(2960):ue(2960))},setMask:function(xe){$!==xe&&!P&&(e.stencilMask(xe),$=xe)},setFunc:function(xe,tt,xt){(K!==xe||me!==tt||Y!==xt)&&(e.stencilFunc(xe,tt,xt),K=xe,me=tt,Y=xt)},setOp:function(xe,tt,xt){(ae!==xe||Pe!==tt||ye!==xt)&&(e.stencilOp(xe,tt,xt),ae=xe,Pe=tt,ye=xt)},setLocked:function(xe){P=xe},setClear:function(xe){fe!==xe&&(e.clearStencil(xe),fe=xe)},reset:function(){P=!1,$=null,K=null,me=null,Y=null,ae=null,Pe=null,ye=null,fe=null}}}let a=new r,c=new o,l=new s,h={},u=null,d=null,f=null,p=null,y=null,v=null,m=null,g=null,_=null,x=!1,w=null,E=null,A=null,F=null,C=null,q=e.getParameter(35661),N=!1,O=0,I=e.getParameter(7938);I.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL\ ([0-9])/.exec(I)[1]),N=O>=1):I.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(I)[1]),N=O>=2);let R=null,L={},U=new Ne,W=new Ne;function Q(P,$,K){let me=new Uint8Array(4),Y=e.createTexture();e.bindTexture(P,Y),e.texParameteri(P,10241,9728),e.texParameteri(P,10240,9728);for(let ae=0;ae<K;ae++)e.texImage2D($+ae,0,6408,1,1,0,6408,5121,me);return Y}let ie={};ie[3553]=Q(3553,3553,1),ie[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),le(2929),c.setFunc(Ra),et(!1),Ce(kc),le(2884),Ie(Dn);function le(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function ue(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function De(P){return u!==P?(e.useProgram(P),u=P,!0):!1}let Se={[Ci]:32774,[Vh]:32778,[kh]:32779};if(i)Se[Xc]=32775,Se[Yc]=32776;else{let P=t.get("EXT_blend_minmax");P!==null&&(Se[Xc]=P.MIN_EXT,Se[Yc]=P.MAX_EXT)}let qe={[Wh]:0,[jh]:1,[qh]:768,[Eu]:770,[Qh]:776,[Jh]:774,[Yh]:772,[Xh]:769,[Au]:771,[$h]:775,[Zh]:773};function Ie(P,$,K,me,Y,ae,Pe,ye){if(P===Dn){d&&(ue(3042),d=!1);return}if(d||(le(3042),d=!0),P!==Gh){if(P!==f||ye!==x){if((p!==Ci||m!==Ci)&&(e.blendEquation(32774),p=Ci,m=Ci),ye)switch(P){case wr:e.blendFuncSeparate(1,771,1,771);break;case Wc:e.blendFunc(1,1);break;case jc:e.blendFuncSeparate(0,0,769,771);break;case qc:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case wr:e.blendFuncSeparate(770,771,1,771);break;case Wc:e.blendFunc(770,1);break;case jc:e.blendFunc(0,769);break;case qc:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,v=null,g=null,_=null,f=P,x=ye}return}Y=Y||$,ae=ae||K,Pe=Pe||me,($!==p||Y!==m)&&(e.blendEquationSeparate(Se[$],Se[Y]),p=$,m=Y),(K!==y||me!==v||ae!==g||Pe!==_)&&(e.blendFuncSeparate(qe[K],qe[me],qe[ae],qe[Pe]),y=K,v=me,g=ae,_=Pe),f=P,x=null}function V(P,$){P.side===pt?ue(2884):le(2884);let K=P.side===at;$&&(K=!K),et(K),P.blending===wr&&P.transparent===!1?Ie(Dn):Ie(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let me=P.stencilWrite;l.setTest(me),me&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits)}function et(P){w!==P&&(P?e.frontFace(2304):e.frontFace(2305),w=P)}function Ce(P){P!==Uh?(le(2884),P!==E&&(P===kc?e.cullFace(1029):P===zh?e.cullFace(1028):e.cullFace(1032))):ue(2884),E=P}function Le(P){P!==A&&(N&&e.lineWidth(P),A=P)}function be(P,$,K){P?(le(32823),(F!==$||C!==K)&&(e.polygonOffset($,K),F=$,C=K)):ue(32823)}function k(P){P?le(3089):ue(3089)}function j(P){P===void 0&&(P=33984+q-1),R!==P&&(e.activeTexture(P),R=P)}function J(P,$){R===null&&j();let K=L[R];K===void 0&&(K={type:void 0,texture:void 0},L[R]=K),(K.type!==P||K.texture!==$)&&(e.bindTexture(P,$||ie[P]),K.type=P,K.texture=$)}function he(){let P=L[R];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function se(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function T(P){U.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),U.copy(P))}function X(P){W.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function G(){h={},R=null,L={},u=null,f=null,w=null,E=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:le,disable:ue,useProgram:De,setBlending:Ie,setMaterial:V,setFlipSided:et,setCullFace:Ce,setLineWidth:Le,setPolygonOffset:be,setScissorTest:k,activeTexture:j,bindTexture:J,unbindTexture:he,compressedTexImage2D:se,texImage2D:Te,texImage3D:M,scissor:T,viewport:X,reset:G}}function wv(e,t,n,i,r,o,s){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap,f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,T){return p?new OffscreenCanvas(M,T):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(M,T,X,G){let P=1;if((M.width>G||M.height>G)&&(P=G/Math.max(M.width,M.height)),P<1||T===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let $=T?Me.floorPowerOfTwo:Math.floor,K=$(P*M.width),me=$(P*M.height);f===void 0&&(f=y(K,me));let Y=X?y(K,me):f;return Y.width=K,Y.height=me,Y.getContext("2d").drawImage(M,0,0,K,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+K+"x"+me+")."),Y}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Me.isPowerOfTwo(M.width)&&Me.isPowerOfTwo(M.height)}function g(M){return a?!1:M.wrapS!==_t||M.wrapT!==_t||M.minFilter!==Ue&&M.minFilter!==Qe}function _(M,T){return M.generateMipmaps&&T&&M.minFilter!==Ue&&M.minFilter!==Qe}function x(M,T,X,G){e.generateMipmap(M);let P=i.get(T);P.__maxMipLevel=Math.log(Math.max(X,G))*Math.LOG2E}function w(M,T,X){if(a===!1)return T;if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=T;return T===6403&&(X===5126&&(G=33326),X===5131&&(G=33325),X===5121&&(G=33321)),T===6407&&(X===5126&&(G=34837),X===5131&&(G=34843),X===5121&&(G=32849)),T===6408&&(X===5126&&(G=34836),X===5131&&(G=34842),X===5121&&(G=32856)),(G===33325||G===33326||G===34842||G===34836)&&t.get("EXT_color_buffer_float"),G}function E(M){return M===Ue||M===Vt||M===Bn?9728:9729}function A(M){let T=M.target;T.removeEventListener("dispose",A),C(T),T.isVideoTexture&&d.delete(T),s.memory.textures--}function F(M){let T=M.target;T.removeEventListener("dispose",F),q(T),s.memory.textures--}function C(M){let T=i.get(M);T.__webglInit!==void 0&&(e.deleteTexture(T.__webglTexture),i.remove(M))}function q(M){let T=i.get(M),X=i.get(M.texture);if(M){if(X.__webglTexture!==void 0&&e.deleteTexture(X.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++)e.deleteFramebuffer(T.__webglFramebuffer[G]),T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[G]);else e.deleteFramebuffer(T.__webglFramebuffer),T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer&&e.deleteRenderbuffer(T.__webglColorRenderbuffer),T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}}let N=0;function O(){N=0}function I(){let M=N;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),N+=1,M}function R(M,T){let X=i.get(M);if(M.isVideoTexture&&j(M),M.version>0&&X.__version!==M.version){let G=M.image;if(G===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(X,M,T);return}}n.activeTexture(33984+T),n.bindTexture(3553,X.__webglTexture)}function L(M,T){let X=i.get(M);if(M.version>0&&X.__version!==M.version){Se(X,M,T);return}n.activeTexture(33984+T),n.bindTexture(35866,X.__webglTexture)}function U(M,T){let X=i.get(M);if(M.version>0&&X.__version!==M.version){Se(X,M,T);return}n.activeTexture(33984+T),n.bindTexture(32879,X.__webglTexture)}function W(M,T){if(M.image.length!==6)return;let X=i.get(M);if(M.version>0&&X.__version!==M.version){De(X,M),n.activeTexture(33984+T),n.bindTexture(34067,X.__webglTexture),e.pixelStorei(37440,M.flipY);let G=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),P=M.image[0]&&M.image[0].isDataTexture,$=[];for(let fe=0;fe<6;fe++)!G&&!P?$[fe]=v(M.image[fe],!1,!0,l):$[fe]=P?M.image[fe].image:M.image[fe];let K=$[0],me=m(K)||a,Y=o.convert(M.format),ae=o.convert(M.type),Pe=w(M.internalFormat,Y,ae);ue(34067,M,me);let ye;if(G){for(let fe=0;fe<6;fe++){ye=$[fe].mipmaps;for(let xe=0;xe<ye.length;xe++){let tt=ye[xe];M.format!==Ht&&M.format!==$n?Y!==null?n.compressedTexImage2D(34069+fe,xe,Pe,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+fe,xe,Pe,tt.width,tt.height,0,Y,ae,tt.data)}}X.__maxMipLevel=ye.length-1}else{ye=M.mipmaps;for(let fe=0;fe<6;fe++)if(P){n.texImage2D(34069+fe,0,Pe,$[fe].width,$[fe].height,0,Y,ae,$[fe].data);for(let xe=0;xe<ye.length;xe++){let xt=ye[xe].image[fe].image;n.texImage2D(34069+fe,xe+1,Pe,xt.width,xt.height,0,Y,ae,xt.data)}}else{n.texImage2D(34069+fe,0,Pe,Y,ae,$[fe]);for(let xe=0;xe<ye.length;xe++){let tt=ye[xe];n.texImage2D(34069+fe,xe+1,Pe,Y,ae,tt.image[fe])}}X.__maxMipLevel=ye.length}_(M,me)&&x(34067,M,K.width,K.height),X.__version=M.version,M.onUpdate&&M.onUpdate(M)}else n.activeTexture(33984+T),n.bindTexture(34067,X.__webglTexture)}function Q(M,T){n.activeTexture(33984+T),n.bindTexture(34067,i.get(M).__webglTexture)}let ie={[ft]:10497,[_t]:33071,[ss]:33648},le={[Ue]:9728,[Vt]:9984,[Bn]:9986,[Qe]:9729,[Lu]:9985,[Ws]:9987};function ue(M,T,X){X?(e.texParameteri(M,10242,ie[T.wrapS]),e.texParameteri(M,10243,ie[T.wrapT]),(M===32879||M===35866)&&e.texParameteri(M,32882,ie[T.wrapR]),e.texParameteri(M,10240,le[T.magFilter]),e.texParameteri(M,10241,le[T.minFilter])):(e.texParameteri(M,10242,33071),e.texParameteri(M,10243,33071),(M===32879||M===35866)&&e.texParameteri(M,32882,33071),(T.wrapS!==_t||T.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(M,10240,E(T.magFilter)),e.texParameteri(M,10241,E(T.minFilter)),T.minFilter!==Ue&&T.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let G=t.get("EXT_texture_filter_anisotropic");if(G){if(T.type===Pn&&t.get("OES_texture_float_linear")===null||T.type===cs&&(a||t.get("OES_texture_half_float_linear"))===null)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(e.texParameterf(M,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function De(M,T){M.__webglInit===void 0&&(M.__webglInit=!0,T.addEventListener("dispose",A),M.__webglTexture=e.createTexture(),s.memory.textures++)}function Se(M,T,X){let G=3553;T.isDataTexture2DArray&&(G=35866),T.isDataTexture3D&&(G=32879),De(M,T),n.activeTexture(33984+X),n.bindTexture(G,M.__webglTexture),e.pixelStorei(37440,T.flipY),e.pixelStorei(37441,T.premultiplyAlpha),e.pixelStorei(3317,T.unpackAlignment);let P=g(T)&&m(T.image)===!1,$=v(T.image,P,!1,h),K=m($)||a,me=o.convert(T.format),Y=o.convert(T.type),ae=w(T.internalFormat,me,Y);ue(G,T,K);let Pe,ye=T.mipmaps;if(T.isDepthTexture)ae=6402,a?T.type===Pn?ae=36012:T.type===rs?ae=33190:T.type===Mr?ae=35056:ae=33189:T.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Bi&&ae===6402&&T.type!==as&&T.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=as,Y=o.convert(T.type)),T.format===Ar&&ae===6402&&(ae=34041,T.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Mr,Y=o.convert(T.type))),n.texImage2D(3553,0,ae,$.width,$.height,0,me,Y,null);else if(T.isDataTexture)if(ye.length>0&&K){for(let fe=0,xe=ye.length;fe<xe;fe++)Pe=ye[fe],n.texImage2D(3553,fe,ae,Pe.width,Pe.height,0,me,Y,Pe.data);T.generateMipmaps=!1,M.__maxMipLevel=ye.length-1}else n.texImage2D(3553,0,ae,$.width,$.height,0,me,Y,$.data),M.__maxMipLevel=0;else if(T.isCompressedTexture){for(let fe=0,xe=ye.length;fe<xe;fe++)Pe=ye[fe],T.format!==Ht&&T.format!==$n?me!==null?n.compressedTexImage2D(3553,fe,ae,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,fe,ae,Pe.width,Pe.height,0,me,Y,Pe.data);M.__maxMipLevel=ye.length-1}else if(T.isDataTexture2DArray)n.texImage3D(35866,0,ae,$.width,$.height,$.depth,0,me,Y,$.data),M.__maxMipLevel=0;else if(T.isDataTexture3D)n.texImage3D(32879,0,ae,$.width,$.height,$.depth,0,me,Y,$.data),M.__maxMipLevel=0;else if(ye.length>0&&K){for(let fe=0,xe=ye.length;fe<xe;fe++)Pe=ye[fe],n.texImage2D(3553,fe,ae,me,Y,Pe);T.generateMipmaps=!1,M.__maxMipLevel=ye.length-1}else n.texImage2D(3553,0,ae,me,Y,$),M.__maxMipLevel=0;_(T,K)&&x(G,T,$.width,$.height),M.__version=T.version,T.onUpdate&&T.onUpdate(T)}function qe(M,T,X,G){let P=o.convert(T.texture.format),$=o.convert(T.texture.type),K=w(T.texture.internalFormat,P,$);n.texImage2D(G,0,K,T.width,T.height,0,P,$,null),e.bindFramebuffer(36160,M),e.framebufferTexture2D(36160,X,G,i.get(T.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ie(M,T,X){if(e.bindRenderbuffer(36161,M),T.depthBuffer&&!T.stencilBuffer){let G=33189;if(X){let P=T.depthTexture;P&&P.isDepthTexture&&(P.type===Pn?G=36012:P.type===rs&&(G=33190));let $=k(T);e.renderbufferStorageMultisample(36161,$,G,T.width,T.height)}else e.renderbufferStorage(36161,G,T.width,T.height);e.framebufferRenderbuffer(36160,36096,36161,M)}else if(T.depthBuffer&&T.stencilBuffer){if(X){let G=k(T);e.renderbufferStorageMultisample(36161,G,35056,T.width,T.height)}else e.renderbufferStorage(36161,34041,T.width,T.height);e.framebufferRenderbuffer(36160,33306,36161,M)}else{let G=o.convert(T.texture.format),P=o.convert(T.texture.type),$=w(T.texture.internalFormat,G,P);if(X){let K=k(T);e.renderbufferStorageMultisample(36161,K,$,T.width,T.height)}else e.renderbufferStorage(36161,$,T.width,T.height)}e.bindRenderbuffer(36161,null)}function V(M,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),R(T.depthTexture,0);let G=i.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===Bi)e.framebufferTexture2D(36160,36096,3553,G,0);else if(T.depthTexture.format===Ar)e.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function et(M){let T=i.get(M),X=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");V(T.__webglFramebuffer,M)}else if(X){T.__webglDepthbuffer=[];for(let G=0;G<6;G++)e.bindFramebuffer(36160,T.__webglFramebuffer[G]),T.__webglDepthbuffer[G]=e.createRenderbuffer(),Ie(T.__webglDepthbuffer[G],M,!1)}else e.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=e.createRenderbuffer(),Ie(T.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function Ce(M){let T=i.get(M),X=i.get(M.texture);M.addEventListener("dispose",F),X.__webglTexture=e.createTexture(),s.memory.textures++;let G=M.isWebGLCubeRenderTarget===!0,P=M.isWebGLMultisampleRenderTarget===!0,$=m(M)||a;if(a&&M.texture.format===$n&&(M.texture.type===Pn||M.texture.type===cs)&&(M.texture.format=Ht,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),G){T.__webglFramebuffer=[];for(let K=0;K<6;K++)T.__webglFramebuffer[K]=e.createFramebuffer()}else if(T.__webglFramebuffer=e.createFramebuffer(),P)if(a){T.__webglMultisampledFramebuffer=e.createFramebuffer(),T.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,T.__webglColorRenderbuffer);let K=o.convert(M.texture.format),me=o.convert(M.texture.type),Y=w(M.texture.internalFormat,K,me),ae=k(M);e.renderbufferStorageMultisample(36161,ae,Y,M.width,M.height),e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,T.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),M.depthBuffer&&(T.__webglDepthRenderbuffer=e.createRenderbuffer(),Ie(T.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(G){n.bindTexture(34067,X.__webglTexture),ue(34067,M.texture,$);for(let K=0;K<6;K++)qe(T.__webglFramebuffer[K],M,36064,34069+K);_(M.texture,$)&&x(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,X.__webglTexture),ue(3553,M.texture,$),qe(T.__webglFramebuffer,M,36064,3553),_(M.texture,$)&&x(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&et(M)}function Le(M){let T=M.texture,X=m(M)||a;if(_(T,X)){let G=M.isWebGLCubeRenderTarget?34067:3553,P=i.get(T).__webglTexture;n.bindTexture(G,P),x(G,T,M.width,M.height),n.bindTexture(G,null)}}function be(M){if(M.isWebGLMultisampleRenderTarget)if(a){let T=i.get(M);e.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,T.__webglFramebuffer);let X=M.width,G=M.height,P=16384;M.depthBuffer&&(P|=256),M.stencilBuffer&&(P|=1024),e.blitFramebuffer(0,0,X,G,0,0,X,G,P,9728),e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function k(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(u,M.samples):0}function j(M){let T=s.render.frame;d.get(M)!==T&&(d.set(M,T),M.update())}let J=!1,he=!1;function se(M,T){M&&M.isWebGLRenderTarget&&(J===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),J=!0),M=M.texture),R(M,T)}function Te(M,T){M&&M.isWebGLCubeRenderTarget&&(he===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),he=!0),M=M.texture),M&&M.isCubeTexture||Array.isArray(M.image)&&M.image.length===6?W(M,T):Q(M,T)}this.allocateTextureUnit=I,this.resetTextureUnits=O,this.setTexture2D=R,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=W,this.setTextureCubeDynamic=Q,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=be,this.safeSetTexture2D=se,this.safeSetTextureCube=Te}function Mv(e,t,n){let i=n.isWebGL2;function r(o){let s;if(o===lo)return 5121;if(o===vf)return 32819;if(o===yf)return 32820;if(o===xf)return 33635;if(o===pf)return 5120;if(o===mf)return 5122;if(o===as)return 5123;if(o===gf)return 5124;if(o===rs)return 5125;if(o===Pn)return 5126;if(o===cs)return i?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===_f)return 6406;if(o===$n)return 6407;if(o===Ht)return 6408;if(o===bf)return 6409;if(o===wf)return 6410;if(o===Bi)return 6402;if(o===Ar)return 34041;if(o===Sf)return 6403;if(o===Tf)return 36244;if(o===Ef)return 33319;if(o===Af)return 33320;if(o===Cf)return 36248;if(o===Lf)return 36249;if(o===Zc||o===Jc||o===$c||o===Qc)if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===$c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Qc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Kc||o===el||o===tl||o===nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Pf)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((o===il||o===rl)&&(s=t.get("WEBGL_compressed_texture_etc"),s!==null)){if(o===il)return s.COMPRESSED_RGB8_ETC2;if(o===rl)return s.COMPRESSED_RGBA8_ETC2_EAC}if(o===Rf||o===Df||o===If||o===Nf||o===Of||o===Bf||o===Ff||o===Uf||o===zf||o===Hf||o===Gf||o===Vf||o===kf||o===Wf||o===qf||o===Xf||o===Yf||o===Zf||o===Jf||o===$f||o===Qf||o===Kf||o===ed||o===td||o===nd||o===id||o===rd||o===od)return s=t.get("WEBGL_compressed_texture_astc"),s!==null?o:null;if(o===jf)return s=t.get("EXT_texture_compression_bptc"),s!==null?o:null;if(o===Mr)return i?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ha(e){rt.call(this),this.cameras=e||[]}Ha.prototype=Object.assign(Object.create(rt.prototype),{constructor:Ha,isArrayCamera:!0});function ni(){te.call(this),this.type="Group"}ni.prototype=Object.assign(Object.create(te.prototype),{constructor:ni,isGroup:!0});function ps(){this._targetRay=null,this._grip=null}Object.assign(ps.prototype,{constructor:ps,getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this},update:function(e,t,n){let i=null,r=null,o=this._targetRay,s=this._grip;return e&&(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),s!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale)))),o!==null&&(o.visible=i!==null),s!==null&&(s.visible=r!==null),this}});function Xu(e,t){let n=this,i=null,r=1,o=null,s="local-floor",a=null,c=[],l=new Map,h=new rt;h.layers.enable(1),h.viewport=new Ne;let u=new rt;u.layers.enable(2),u.viewport=new Ne;let d=[h,u],f=new Ha;f.layers.enable(1),f.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=c[N];return O===void 0&&(O=new ps,c[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=c[N];return O===void 0&&(O=new ps,c[N]=O),O.getGripSpace()};function v(N){let O=l.get(N.inputSource);O&&O.dispatchEvent({type:N.type})}function m(){l.forEach(function(N,O){N.disconnect(O)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function g(N){o=N,q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return i},this.setSession=function(N){if(i=N,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",m);let O=t.getContextAttributes();O.xrCompatible!==!0&&t.makeXRCompatible();let I={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r},R=new XRWebGLLayer(i,t,I);i.updateRenderState({baseLayer:R}),i.requestReferenceSpace(s).then(g),i.addEventListener("inputsourceschange",_)}};function _(N){let O=i.inputSources;for(let I=0;I<c.length;I++)l.set(O[I],c[I]);for(let I=0;I<N.removed.length;I++){let R=N.removed[I],L=l.get(R);L&&(L.dispatchEvent({type:"disconnected",data:R}),l.delete(R))}for(let I=0;I<N.added.length;I++){let R=N.added[I],L=l.get(R);L&&L.dispatchEvent({type:"connected",data:R})}}let x=new b,w=new b;function E(N,O,I){x.setFromMatrixPosition(O.matrixWorld),w.setFromMatrixPosition(I.matrixWorld);let R=x.distanceTo(w),L=O.projectionMatrix.elements,U=I.projectionMatrix.elements,W=L[14]/(L[10]-1),Q=L[14]/(L[10]+1),ie=(L[9]+1)/L[5],le=(L[9]-1)/L[5],ue=(L[8]-1)/L[0],De=(U[8]+1)/U[0],Se=W*ue,qe=W*De,Ie=R/(-ue+De),V=Ie*-ue;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(V),N.translateZ(Ie),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.getInverse(N.matrixWorld);let et=W+Ie,Ce=Q+Ie,Le=Se-V,be=qe+(R-V),k=ie*Q/Ce*et,j=le*Q/Ce*et;N.projectionMatrix.makePerspective(Le,be,k,j,et,Ce)}function A(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.getInverse(N.matrixWorld)}this.getCamera=function(N){f.near=u.near=h.near=N.near,f.far=u.far=h.far=N.far,(p!==f.near||y!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,y=f.far);let O=N.parent,I=f.cameras;A(f,O);for(let L=0;L<I.length;L++)A(I[L],O);N.matrixWorld.copy(f.matrixWorld);let R=N.children;for(let L=0,U=R.length;L<U;L++)R[L].updateMatrixWorld(!0);return I.length===2?E(f,h,u):f.projectionMatrix.copy(h.projectionMatrix),f};let F=null;function C(N,O){if(a=O.getViewerPose(o),a!==null){let R=a.views,L=i.renderState.baseLayer;e.setFramebuffer(L.framebuffer);let U=!1;R.length!==f.cameras.length&&(f.cameras.length=0,U=!0);for(let W=0;W<R.length;W++){let Q=R[W],ie=L.getViewport(Q),le=d[W];le.matrix.fromArray(Q.transform.matrix),le.projectionMatrix.fromArray(Q.projectionMatrix),le.viewport.set(ie.x,ie.y,ie.width,ie.height),W===0&&f.matrix.copy(le.matrix),U===!0&&f.cameras.push(le)}}let I=i.inputSources;for(let R=0;R<c.length;R++){let L=c[R],U=I[R];L.update(U,O,o)}F&&F(N,O)}let q=new Uu;q.setAnimationLoop(C),this.setAnimationLoop=function(N){F=N},this.dispose=function(){}}Object.assign(Xu.prototype,vn.prototype);function Sv(e){function t(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,x,w){g.isMeshBasicMaterial?i(m,g):g.isMeshLambertMaterial?(i(m,g),c(m,g)):g.isMeshToonMaterial?(i(m,g),h(m,g)):g.isMeshPhongMaterial?(i(m,g),l(m,g)):g.isMeshStandardMaterial?(i(m,g,_),g.isMeshPhysicalMaterial?d(m,g,_):u(m,g,_)):g.isMeshMatcapMaterial?(i(m,g),f(m,g)):g.isMeshDepthMaterial?(i(m,g),p(m,g)):g.isMeshDistanceMaterial?(i(m,g),y(m,g)):g.isMeshNormalMaterial?(i(m,g),v(m,g)):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?s(m,g,x,w):g.isSpriteMaterial?a(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(m,g,_){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);let x=g.envMap||_;x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio,m.maxMipLevel.value=e.get(x).__maxMipLevel),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let w;g.map?w=g.map:g.specularMap?w=g.specularMap:g.displacementMap?w=g.displacementMap:g.normalMap?w=g.normalMap:g.bumpMap?w=g.bumpMap:g.roughnessMap?w=g.roughnessMap:g.metalnessMap?w=g.metalnessMap:g.alphaMap?w=g.alphaMap:g.emissiveMap&&(w=g.emissiveMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let E;g.aoMap?E=g.aoMap:g.lightMap&&(E=g.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function s(m,g,_,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=x*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let w;g.map?w=g.map:g.alphaMap&&(w=g.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let _;g.map?_=g.map:g.alphaMap&&(_=g.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function l(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===at&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===at&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===at&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===at&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g,_){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===at&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===at&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),(g.envMap||_)&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){u(m,g,_),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===at&&m.clearcoatNormalScale.value.negate()),m.transparency.value=g.transparency}function f(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===at&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===at&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function y(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function v(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===at&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===at&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xs(e){e=e||{};let t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,o=e.stencil!==void 0?e.stencil:!0,s=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",h=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1,u=null,d=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=bt,this.physicallyCorrectLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let f=this,p=!1,y=null,v=0,m=0,g=null,_=null,x=-1,w=null,E=null,A=new Ne,F=new Ne,C=null,q=t.width,N=t.height,O=1,I=null,R=null,L=new Ne(0,0,q,N),U=new Ne(0,0,q,N),W=!1,Q=new uo,ie=new tg,le=!1,ue=!1,De=new Ae,Se=new b,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return g===null?O:1}let V=n;function et(S,B){for(let D=0;D<S.length;D++){let H=S[D],ne=t.getContext(H,B);if(ne!==null)return ne}return null}try{let S={alpha:i,depth:r,stencil:o,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",tt,!1),V===null){let B=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&B.shift(),V=et(B,S),V===null)throw et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ce,Le,be,k,j,J,he,se,Te,M,T,X,G,P,$,K,me,Y,ae;function Pe(){Ce=new ng(V),Le=new eg(V,Ce,e),Le.isWebGL2===!1&&(Ce.get("WEBGL_depth_texture"),Ce.get("OES_texture_float"),Ce.get("OES_texture_half_float"),Ce.get("OES_texture_half_float_linear"),Ce.get("OES_standard_derivatives"),Ce.get("OES_element_index_uint"),Ce.get("OES_vertex_array_object"),Ce.get("ANGLE_instanced_arrays")),Ce.get("OES_texture_float_linear"),Y=new Mv(V,Ce,Le),be=new bv(V,Ce,Le),be.scissor(F.copy(U).multiplyScalar(O).floor()),be.viewport(A.copy(L).multiplyScalar(O).floor()),k=new og(V),j=new lv,J=new wv(V,Ce,be,j,Le,Y,k),he=new Rd(V,Le),ae=new Qm(V,Ce,he,Le),se=new ig(V,he,k,ae),Te=new lg(V,se,he,k),$=new cg(V),M=new cv(f,Ce,Le,ae),T=new Sv(j),X=new fv,G=new yv,P=new $m(f,be,Te,a),K=new Km(V,Ce,k,Le),me=new rg(V,Ce,k,Le),k.programs=M.programs,f.capabilities=Le,f.extensions=Ce,f.properties=j,f.renderLists=X,f.state=be,f.info=k}Pe();let ye=new Xu(f,V);this.xr=ye;let fe=new qu(f,Te,Le.maxTextureSize);this.shadowMap=fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=Ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(q,N,!1))},this.getSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),S=new z),S.set(q,N)},this.setSize=function(S,B,D){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,N=B,t.width=Math.floor(S*O),t.height=Math.floor(B*O),D!==!1&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),S=new z),S.set(q*O,N*O).floor()},this.setDrawingBufferSize=function(S,B,D){q=S,N=B,O=D,t.width=Math.floor(S*D),t.height=Math.floor(B*D),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),S=new Ne),S.copy(A)},this.getViewport=function(S){return S.copy(L)},this.setViewport=function(S,B,D,H){S.isVector4?L.set(S.x,S.y,S.z,S.w):L.set(S,B,D,H),be.viewport(A.copy(L).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,B,D,H){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,B,D,H),be.scissor(F.copy(U).multiplyScalar(O).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(S){be.setScissorTest(W=S)},this.setOpaqueSort=function(S){I=S},this.setTransparentSort=function(S){R=S},this.getClearColor=function(){return P.getClearColor()},this.setClearColor=function(){P.setClearColor.apply(P,arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha.apply(P,arguments)},this.clear=function(S,B,D){let H=0;(S===void 0||S)&&(H|=16384),(B===void 0||B)&&(H|=256),(D===void 0||D)&&(H|=1024),V.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",tt,!1),X.dispose(),G.dispose(),j.dispose(),Te.dispose(),ae.dispose(),ye.dispose(),cr.stop()};function xe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,Pe()}function xt(S){let B=S.target;B.removeEventListener("dispose",xt),Dh(B)}function Dh(S){Uc(S),j.remove(S)}function Uc(S){let B=j.get(S).program;S.program=void 0,B!==void 0&&M.releaseProgram(B)}function Ih(S,B){S.render(function(D){f.renderBufferImmediate(D,B)})}this.renderBufferImmediate=function(S,B){ae.initAttributes();let D=j.get(S);S.hasPositions&&!D.position&&(D.position=V.createBuffer()),S.hasNormals&&!D.normal&&(D.normal=V.createBuffer()),S.hasUvs&&!D.uv&&(D.uv=V.createBuffer()),S.hasColors&&!D.color&&(D.color=V.createBuffer());let H=B.getAttributes();S.hasPositions&&(V.bindBuffer(34962,D.position),V.bufferData(34962,S.positionArray,35048),ae.enableAttribute(H.position),V.vertexAttribPointer(H.position,3,5126,!1,0,0)),S.hasNormals&&(V.bindBuffer(34962,D.normal),V.bufferData(34962,S.normalArray,35048),ae.enableAttribute(H.normal),V.vertexAttribPointer(H.normal,3,5126,!1,0,0)),S.hasUvs&&(V.bindBuffer(34962,D.uv),V.bufferData(34962,S.uvArray,35048),ae.enableAttribute(H.uv),V.vertexAttribPointer(H.uv,2,5126,!1,0,0)),S.hasColors&&(V.bindBuffer(34962,D.color),V.bufferData(34962,S.colorArray,35048),ae.enableAttribute(H.color),V.vertexAttribPointer(H.color,3,5126,!1,0,0)),ae.disableUnusedAttributes(),V.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,B,D,H,ne,Re){B===null&&(B=qe);let Ee=ne.isMesh&&ne.matrixWorld.determinant()<0,pe=Vc(S,B,H,ne);be.setMaterial(H,Ee);let Xe=D.index,ke=D.attributes.position;if(Xe===null){if(ke===void 0||ke.count===0)return}else if(Xe.count===0)return;let Ve=1;H.wireframe===!0&&(Xe=se.getWireframeAttribute(D),Ve=2),(H.morphTargets||H.morphNormals)&&$.update(ne,D,H,pe),ae.setup(ne,H,pe,D,Xe);let Je,we=K;Xe!==null&&(Je=he.get(Xe),we=me,we.setIndex(Je));let Ye=Xe!==null?Xe.count:ke.count,it=D.drawRange.start*Ve,ze=D.drawRange.count*Ve,vo=Re!==null?Re.start*Ve:0,Nt=Re!==null?Re.count*Ve:1/0,bn=Math.max(it,vo),Qs=Math.min(Ye,it+ze,vo+Nt)-1,yo=Math.max(0,Qs-bn+1);if(yo!==0){if(ne.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Ie()),we.setMode(1)):we.setMode(4);else if(ne.isLine){let lr=H.linewidth;lr===void 0&&(lr=1),be.setLineWidth(lr*Ie()),ne.isLineSegments?we.setMode(1):ne.isLineLoop?we.setMode(2):we.setMode(3)}else ne.isPoints?we.setMode(0):ne.isSprite&&we.setMode(4);if(ne.isInstancedMesh)we.renderInstances(D,bn,yo,ne.count);else if(D.isInstancedBufferGeometry){let lr=Math.min(D.instanceCount,D._maxInstanceCount);we.renderInstances(D,bn,yo,lr)}else we.render(bn,yo)}},this.compile=function(S,B){d=G.get(S,B),d.init(),S.traverse(function(H){H.isLight&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(B);let D=new WeakMap;S.traverse(function(H){let ne=H.material;if(ne)if(Array.isArray(ne))for(let Re=0;Re<ne.length;Re++){let Ee=ne[Re];D.has(Ee)===!1&&(rn(Ee,S,H),D.set(Ee))}else D.has(ne)===!1&&(rn(ne,S,H),D.set(ne))})};let $s=null;function Nh(S){ye.isPresenting||$s&&$s(S)}let cr=new Uu;cr.setAnimationLoop(Nh),typeof window<"u"&&cr.setContext(window),this.setAnimationLoop=function(S){$s=S,ye.setAnimationLoop(S),S===null?cr.stop():cr.start()},this.render=function(S,B){let D,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),D=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;ae.resetDefaultState(),x=-1,w=null,S.autoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(B=ye.getCamera(B)),S.isScene===!0&&S.onBeforeRender(f,S,B,D||g),d=G.get(S,B),d.init(),De.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(De),ue=this.localClippingEnabled,le=ie.init(this.clippingPlanes,ue,B),u=X.get(S,B),u.init(),zc(S,B,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(I,R),le===!0&&ie.beginShadows();let ne=d.state.shadowsArray;fe.render(ne,S,B),d.setupLights(B),le===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),D!==void 0&&this.setRenderTarget(D),P.render(u,S,B,H);let Re=u.opaque,Ee=u.transparent;Re.length>0&&Hc(Re,S,B),Ee.length>0&&Hc(Ee,S,B),S.isScene===!0&&S.onAfterRender(f,S,B),g!==null&&(J.updateRenderTargetMipmap(g),J.updateMultisampleRenderTarget(g)),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1),u=null,d=null};function zc(S,B,D,H){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)D=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){H&&Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);let Ee=Te.update(S),pe=S.material;pe.visible&&u.push(S,Ee,pe,D,Se.z,null)}}else if(S.isImmediateRenderObject)H&&Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De),u.push(S,null,S.material,D,Se.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==k.render.frame&&(S.skeleton.update(),S.skeleton.frame=k.render.frame),!S.frustumCulled||Q.intersectsObject(S))){H&&Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);let Ee=Te.update(S),pe=S.material;if(Array.isArray(pe)){let Xe=Ee.groups;for(let ke=0,Ve=Xe.length;ke<Ve;ke++){let Je=Xe[ke],we=pe[Je.materialIndex];we&&we.visible&&u.push(S,Ee,we,D,Se.z,Je)}}else pe.visible&&u.push(S,Ee,pe,D,Se.z,null)}}let Re=S.children;for(let Ee=0,pe=Re.length;Ee<pe;Ee++)zc(Re[Ee],B,D,H)}function Hc(S,B,D){let H=B.isScene===!0?B.overrideMaterial:null;for(let ne=0,Re=S.length;ne<Re;ne++){let Ee=S[ne],pe=Ee.object,Xe=Ee.geometry,ke=H===null?Ee.material:H,Ve=Ee.group;if(D.isArrayCamera){E=D;let Je=D.cameras;for(let we=0,Ye=Je.length;we<Ye;we++){let it=Je[we];pe.layers.test(it.layers)&&(be.viewport(A.copy(it.viewport)),d.setupLights(it),Gc(pe,B,it,Xe,ke,Ve))}}else E=null,Gc(pe,B,D,Xe,ke,Ve)}}function Gc(S,B,D,H,ne,Re){if(S.onBeforeRender(f,B,D,H,ne,Re),d=G.get(B,E||D),S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){let Ee=Vc(D,B,ne,S);be.setMaterial(ne),ae.reset(),Ih(S,Ee)}else f.renderBufferDirect(D,B,H,ne,S,Re);S.onAfterRender(f,B,D,H,ne,Re),d=G.get(B,E||D)}function rn(S,B,D){B.isScene!==!0&&(B=qe);let H=j.get(S),ne=d.state.lights,Re=d.state.shadowsArray,Ee=ne.state.version,pe=M.getParameters(S,ne.state,Re,B,ie.numPlanes,ie.numIntersection,D),Xe=M.getProgramCacheKey(pe),ke=H.program,Ve=!0;if(ke===void 0)S.addEventListener("dispose",xt);else if(ke.cacheKey!==Xe)Uc(S);else if(H.lightsStateVersion!==Ee)H.lightsStateVersion=Ee,Ve=!1;else{if(pe.shaderID!==void 0)return;Ve=!1}Ve&&(ke=M.acquireProgram(pe,Xe),H.program=ke,H.uniforms=pe.uniforms,H.outputEncoding=pe.outputEncoding,S.program=ke);let Je=ke.getAttributes();if(S.morphTargets){S.numSupportedMorphTargets=0;for(let ze=0;ze<f.maxMorphTargets;ze++)Je["morphTarget"+ze]>=0&&S.numSupportedMorphTargets++}if(S.morphNormals){S.numSupportedMorphNormals=0;for(let ze=0;ze<f.maxMorphNormals;ze++)Je["morphNormal"+ze]>=0&&S.numSupportedMorphNormals++}let we=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(H.numClippingPlanes=ie.numPlanes,H.numIntersection=ie.numIntersection,we.clippingPlanes=ie.uniform),H.environment=S.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.needsLights=Bh(S),H.lightsStateVersion=Ee,H.needsLights&&(we.ambientLightColor.value=ne.state.ambient,we.lightProbe.value=ne.state.probe,we.directionalLights.value=ne.state.directional,we.directionalLightShadows.value=ne.state.directionalShadow,we.spotLights.value=ne.state.spot,we.spotLightShadows.value=ne.state.spotShadow,we.rectAreaLights.value=ne.state.rectArea,we.pointLights.value=ne.state.point,we.pointLightShadows.value=ne.state.pointShadow,we.hemisphereLights.value=ne.state.hemi,we.directionalShadowMap.value=ne.state.directionalShadowMap,we.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,we.spotShadowMap.value=ne.state.spotShadowMap,we.spotShadowMatrix.value=ne.state.spotShadowMatrix,we.pointShadowMap.value=ne.state.pointShadowMap,we.pointShadowMatrix.value=ne.state.pointShadowMatrix);let Ye=H.program.getUniforms(),it=In.seqWithValue(Ye.seq,we);H.uniformsList=it}function Vc(S,B,D,H){B.isScene!==!0&&(B=qe),J.resetTextureUnits();let ne=B.fog,Re=D.isMeshStandardMaterial?B.environment:null,Ee=g===null?f.outputEncoding:g.texture.encoding,pe=j.get(D),Xe=d.state.lights;if(le===!0&&(ue===!0||S!==w)){let ze=S===w&&D.id===x;ie.setState(D.clippingPlanes,D.clipIntersection,D.clipShadows,S,pe,ze)}D.version===pe.__version?(pe.program===void 0||D.fog&&pe.fog!==ne||pe.environment!==Re||pe.needsLights&&pe.lightsStateVersion!==Xe.state.version||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==ie.numPlanes||pe.numIntersection!==ie.numIntersection)||pe.outputEncoding!==Ee)&&rn(D,B,H):(rn(D,B,H),pe.__version=D.version);let ke=!1,Ve=!1,Je=!1,we=pe.program,Ye=we.getUniforms(),it=pe.uniforms;if(be.useProgram(we.program)&&(ke=!0,Ve=!0,Je=!0),D.id!==x&&(x=D.id,Ve=!0),ke||w!==S){if(Ye.setValue(V,"projectionMatrix",S.projectionMatrix),Le.logarithmicDepthBuffer&&Ye.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Ve=!0,Je=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let ze=Ye.map.cameraPosition;ze!==void 0&&ze.setValue(V,Se.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Ye.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||D.skinning)&&Ye.setValue(V,"viewMatrix",S.matrixWorldInverse)}if(D.skinning){Ye.setOptional(V,H,"bindMatrix"),Ye.setOptional(V,H,"bindMatrixInverse");let ze=H.skeleton;if(ze){let vo=ze.bones;if(Le.floatVertexTextures){if(ze.boneTexture===void 0){let Nt=Math.sqrt(vo.length*4);Nt=Me.ceilPowerOfTwo(Nt),Nt=Math.max(Nt,4);let bn=new Float32Array(Nt*Nt*4);bn.set(ze.boneMatrices);let Qs=new Gi(bn,Nt,Nt,Ht,Pn);ze.boneMatrices=bn,ze.boneTexture=Qs,ze.boneTextureSize=Nt}Ye.setValue(V,"boneTexture",ze.boneTexture,J),Ye.setValue(V,"boneTextureSize",ze.boneTextureSize)}else Ye.setOptional(V,ze,"boneMatrices")}}return(Ve||pe.receiveShadow!==H.receiveShadow)&&(pe.receiveShadow=H.receiveShadow,Ye.setValue(V,"receiveShadow",H.receiveShadow)),Ve&&(Ye.setValue(V,"toneMappingExposure",f.toneMappingExposure),pe.needsLights&&Oh(it,Je),ne&&D.fog&&T.refreshFogUniforms(it,ne),T.refreshMaterialUniforms(it,D,Re,O,N),it.ltc_1!==void 0&&(it.ltc_1.value=Z.LTC_1),it.ltc_2!==void 0&&(it.ltc_2.value=Z.LTC_2),In.upload(V,pe.uniformsList,it,J)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(In.upload(V,pe.uniformsList,it,J),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Ye.setValue(V,"center",H.center),Ye.setValue(V,"modelViewMatrix",H.modelViewMatrix),Ye.setValue(V,"normalMatrix",H.normalMatrix),Ye.setValue(V,"modelMatrix",H.matrixWorld),we}function Oh(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Bh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.setFramebuffer=function(S){y!==S&&g===null&&V.bindFramebuffer(36160,S),y=S},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return g},this.setRenderTarget=function(S,B,D){g=S,v=B,m=D,S&&j.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S);let H=y,ne=!1;if(S){let Re=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(H=Re[B||0],ne=!0):S.isWebGLMultisampleRenderTarget?H=j.get(S).__webglMultisampledFramebuffer:H=Re,A.copy(S.viewport),F.copy(S.scissor),C=S.scissorTest}else A.copy(L).multiplyScalar(O).floor(),F.copy(U).multiplyScalar(O).floor(),C=W;if(_!==H&&(V.bindFramebuffer(36160,H),_=H),be.viewport(A),be.scissor(F),be.setScissorTest(C),ne){let Re=j.get(S.texture);V.framebufferTexture2D(36160,36064,34069+(B||0),Re.__webglTexture,D||0)}},this.readRenderTargetPixels=function(S,B,D,H,ne,Re,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(pe=pe[Ee]),pe){let Xe=!1;pe!==_&&(V.bindFramebuffer(36160,pe),Xe=!0);try{let ke=S.texture,Ve=ke.format,Je=ke.type;if(Ve!==Ht&&Y.convert(Ve)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je!==lo&&Y.convert(Je)!==V.getParameter(35738)&&!(Je===Pn&&(Le.isWebGL2||Ce.get("OES_texture_float")||Ce.get("WEBGL_color_buffer_float")))&&!(Je===cs&&(Le.isWebGL2?Ce.get("EXT_color_buffer_float"):Ce.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?B>=0&&B<=S.width-H&&D>=0&&D<=S.height-ne&&V.readPixels(B,D,H,ne,Y.convert(Ve),Y.convert(Je),Re):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Xe&&V.bindFramebuffer(36160,_)}}},this.copyFramebufferToTexture=function(S,B,D){D===void 0&&(D=0);let H=Math.pow(2,-D),ne=Math.floor(B.image.width*H),Re=Math.floor(B.image.height*H),Ee=Y.convert(B.format);J.setTexture2D(B,0),V.copyTexImage2D(3553,D,Ee,S.x,S.y,ne,Re,0),be.unbindTexture()},this.copyTextureToTexture=function(S,B,D,H){H===void 0&&(H=0);let ne=B.image.width,Re=B.image.height,Ee=Y.convert(D.format),pe=Y.convert(D.type);J.setTexture2D(D,0),V.pixelStorei(37440,D.flipY),V.pixelStorei(37441,D.premultiplyAlpha),V.pixelStorei(3317,D.unpackAlignment),B.isDataTexture?V.texSubImage2D(3553,H,S.x,S.y,ne,Re,Ee,pe,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(3553,H,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):V.texSubImage2D(3553,H,S.x,S.y,Ee,pe,B.image),H===0&&D.generateMipmaps&&V.generateMipmap(3553),be.unbindTexture()},this.initTexture=function(S){J.setTexture2D(S,0),be.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Ll(e){Xs.call(this,e)}Ll.prototype=Object.assign(Object.create(Xs.prototype),{constructor:Ll,isWebGL1Renderer:!0});function ii(e,t){this.name="",this.color=new re(e),this.density=t!==void 0?t:25e-5}Object.assign(ii.prototype,{isFogExp2:!0,clone:function(){return new ii(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function Ga(e,t,n){this.name="",this.color=new re(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}Object.assign(Ga.prototype,{isFog:!0,clone:function(){return new Ga(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function Ct(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Me.generateUUID()}Object.defineProperty(Ct.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Ct.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Me.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new Ct(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Me.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var jn=new b;function ri(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(ri.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(ri.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)jn.x=this.getX(t),jn.y=this.getY(t),jn.z=this.getZ(t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ri(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function oi(e){ve.call(this),this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}oi.prototype=Object.create(ve.prototype);oi.prototype.constructor=oi;oi.prototype.isSpriteMaterial=!0;oi.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};var Mi,mr=new b,Si=new b,Ti=new b,Ei=new z,gr=new z,Yu=new Ae,No=new b,vr=new b,Oo=new b,Pl=new z,wa=new z,Rl=new z;function Va(e){if(te.call(this),this.type="Sprite",Mi===void 0){Mi=new oe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ct(t,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new ri(n,3,0,!1)),Mi.setAttribute("uv",new ri(n,2,3,!1))}this.geometry=Mi,this.material=e!==void 0?e:new oi,this.center=new z(.5,.5)}Va.prototype=Object.assign(Object.create(te.prototype),{constructor:Va,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),Yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-Ti.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Bo(No.set(-.5,-.5,0),Ti,o,Si,i,r),Bo(vr.set(.5,-.5,0),Ti,o,Si,i,r),Bo(Oo.set(.5,.5,0),Ti,o,Si,i,r),Pl.set(0,0),wa.set(1,0),Rl.set(1,1);let s=e.ray.intersectTriangle(No,vr,Oo,!1,mr);if(s===null&&(Bo(vr.set(-.5,.5,0),Ti,o,Si,i,r),wa.set(0,1),s=e.ray.intersectTriangle(No,Oo,vr,!1,mr),s===null))return;let a=e.ray.origin.distanceTo(mr);a<e.near||a>e.far||t.push({distance:a,point:mr.clone(),uv:lt.getUV(mr,No,vr,Oo,Pl,wa,Rl,new z),face:null,object:this})},copy:function(e){return te.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Bo(e,t,n,i,r,o){Ei.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(gr.x=o*Ei.x-r*Ei.y,gr.y=r*Ei.x+o*Ei.y):gr.copy(Ei),e.copy(t),e.x+=gr.x,e.y+=gr.y,e.applyMatrix4(Yu)}var Fo=new b,Dl=new b;function ms(){te.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}ms.prototype=Object.assign(Object.create(te.prototype),{constructor:ms,isLOD:!0,copy:function(e){te.prototype.copy.call(this,e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);let n=this.levels,i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){if(this.levels.length>0){Fo.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Fo);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){let t=this.levels;if(t.length>1){Fo.setFromMatrixPosition(e.matrixWorld),Dl.setFromMatrixPosition(this.matrixWorld);let n=Fo.distanceTo(Dl)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}});function ka(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),He.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}ka.prototype=Object.assign(Object.create(He.prototype),{constructor:ka,isSkinnedMesh:!0,copy:function(e){return He.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let e=new Ne,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){He.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let e=new b,t=new Ne,n=new Ne,i=new b,r=new Ae;return function(o,s){let a=this.skeleton,c=this.geometry;t.fromBufferAttribute(c.attributes.skinIndex,o),n.fromBufferAttribute(c.attributes.skinWeight,o),e.fromBufferAttribute(c.attributes.position,o).applyMatrix4(this.bindMatrix),s.set(0,0,0);for(let l=0;l<4;l++){let h=n.getComponent(l);if(h!==0){let u=t.getComponent(l);r.multiplyMatrices(a.bones[u].matrixWorld,a.boneInverses[u]),s.addScaledVector(i.copy(e).applyMatrix4(r),h)}}return s.applyMatrix4(this.bindMatrixInverse)}}()});var Il=new Ae,Tv=new Ae;function Wa(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}Object.assign(Wa.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){let n=new Ae;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let s=e[r]?e[r].matrixWorld:Tv;Il.multiplyMatrices(s,t[r]),Il.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new Wa(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Nl(){te.call(this),this.type="Bone"}Nl.prototype=Object.assign(Object.create(te.prototype),{constructor:Nl,isBone:!0});var Ol=new Ae,Bl=new Ae,Uo=[],yr=new He;function ja(e,t,n){He.call(this,e,t),this.instanceMatrix=new ge(new Float32Array(n*16),16),this.count=n,this.frustumCulled=!1}ja.prototype=Object.assign(Object.create(He.prototype),{constructor:ja,isInstancedMesh:!0,copy:function(e){return He.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){let n=this.matrixWorld,i=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ol),Bl.multiplyMatrices(n,Ol),yr.matrixWorld=Bl,yr.raycast(e,Uo);for(let o=0,s=Uo.length;o<s;o++){let a=Uo[o];a.instanceId=r,a.object=this,t.push(a)}Uo.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function Ke(e){ve.call(this),this.type="LineBasicMaterial",this.color=new re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}Ke.prototype=Object.create(ve.prototype);Ke.prototype.constructor=Ke;Ke.prototype.isLineBasicMaterial=!0;Ke.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};var Fl=new b,Ul=new b,zl=new Ae,zo=new sr,Ho=new yn;function Dt(e,t,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),te.call(this),this.type="Line",this.geometry=e!==void 0?e:new oe,this.material=t!==void 0?t:new Ke,this.updateMorphTargets()}Dt.prototype=Object.assign(Object.create(te.prototype),{constructor:Dt,isLine:!0,copy:function(e){return te.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fl.fromBufferAttribute(t,i-1),Ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fl.distanceTo(Ul);e.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){let t=e.vertices,n=e.lineDistances;n[0]=0;for(let i=1,r=t.length;i<r;i++)n[i]=n[i-1],n[i]+=t[i-1].distanceTo(t[i])}return this},raycast:function(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;zl.getInverse(i),zo.copy(e.ray).applyMatrix4(zl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,a=new b,c=new b,l=new b,h=new b,u=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){let d=n.index,p=n.attributes.position.array;if(d!==null){let y=d.array;for(let v=0,m=y.length-1;v<m;v+=u){let g=y[v],_=y[v+1];if(a.fromArray(p,g*3),c.fromArray(p,_*3),zo.distanceSqToSegment(a,c,h,l)>s)continue;h.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=p.length/3-1;y<v;y+=u){if(a.fromArray(p,3*y),c.fromArray(p,3*y+3),zo.distanceSqToSegment(a,c,h,l)>s)continue;h.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(h);g<e.near||g>e.far||t.push({distance:g,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){let d=n.vertices,f=d.length;for(let p=0;p<f-1;p+=u){if(zo.distanceSqToSegment(d[p],d[p+1],h,l)>s)continue;h.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Go=new b,Vo=new b;function nt(e,t){Dt.call(this,e,t),this.type="LineSegments"}nt.prototype=Object.assign(Object.create(Dt.prototype),{constructor:nt,isLineSegments:!0,computeLineDistances:function(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Go.fromBufferAttribute(t,i),Vo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Go.distanceTo(Vo);e.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){let t=e.vertices,n=e.lineDistances;for(let i=0,r=t.length;i<r;i+=2)Go.copy(t[i]),Vo.copy(t[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Go.distanceTo(Vo)}return this}});function qa(e,t){Dt.call(this,e,t),this.type="LineLoop"}qa.prototype=Object.assign(Object.create(Dt.prototype),{constructor:qa,isLineLoop:!0});function si(e){ve.call(this),this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}si.prototype=Object.create(ve.prototype);si.prototype.constructor=si;si.prototype.isPointsMaterial=!0;si.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};var Hl=new Ae,Xa=new sr,ko=new yn,Wo=new b;function Or(e,t){te.call(this),this.type="Points",this.geometry=e!==void 0?e:new oe,this.material=t!==void 0?t:new si,this.updateMorphTargets()}Or.prototype=Object.assign(Object.create(te.prototype),{constructor:Or,isPoints:!0,copy:function(e){return te.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Hl.getInverse(i),Xa.copy(e.ray).applyMatrix4(Hl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position.array;if(a!==null){let h=a.array;for(let u=0,d=h.length;u<d;u++){let f=h[u];Wo.fromArray(l,f*3),Ma(Wo,f,s,i,e,t,this)}}else for(let h=0,u=l.length/3;h<u;h++)Wo.fromArray(l,h*3),Ma(Wo,h,s,i,e,t,this)}else{let a=n.vertices;for(let c=0,l=a.length;c<l;c++)Ma(a[c],c,s,i,e,t,this)}},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Ma(e,t,n,i,r,o,s){let a=Xa.distanceSqToPoint(e);if(a<n){let c=new b;Xa.closestPointToPoint(e,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:s})}}function Gl(e,t,n,i,r,o,s,a,c){Be.call(this,e,t,n,i,r,o,s,a,c),this.format=s!==void 0?s:$n,this.minFilter=o!==void 0?o:Qe,this.magFilter=r!==void 0?r:Qe,this.generateMipmaps=!1}Gl.prototype=Object.assign(Object.create(Be.prototype),{constructor:Gl,isVideoTexture:!0,update:function(){let e=this.image;e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Br(e,t,n,i,r,o,s,a,c,l,h,u){Be.call(this,null,o,s,a,c,l,i,r,h,u),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Br.prototype=Object.create(Be.prototype);Br.prototype.constructor=Br;Br.prototype.isCompressedTexture=!0;function gs(e,t,n,i,r,o,s,a,c){Be.call(this,e,t,n,i,r,o,s,a,c),this.needsUpdate=!0}gs.prototype=Object.create(Be.prototype);gs.prototype.constructor=gs;gs.prototype.isCanvasTexture=!0;function vs(e,t,n,i,r,o,s,a,c,l){if(l=l!==void 0?l:Bi,l!==Bi&&l!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Bi&&(n=as),n===void 0&&l===Ar&&(n=Mr),Be.call(this,null,i,r,o,s,a,l,n,c),this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ue,this.minFilter=a!==void 0?a:Ue,this.flipY=!1,this.generateMipmaps=!1}vs.prototype=Object.create(Be.prototype);vs.prototype.constructor=vs;vs.prototype.isDepthTexture=!0;function ys(e){oe.call(this),this.type="WireframeGeometry";let t=[],n=[0,0],i={},r=["a","b","c"];if(e&&e.isGeometry){let o=e.faces;for(let s=0,a=o.length;s<a;s++){let c=o[s];for(let l=0;l<3;l++){let h=c[r[l]],u=c[r[(l+1)%3]];n[0]=Math.min(h,u),n[1]=Math.max(h,u);let d=n[0]+","+n[1];i[d]===void 0&&(i[d]={index1:n[0],index2:n[1]})}}for(let s in i){let a=i[s],c=e.vertices[a.index1];t.push(c.x,c.y,c.z),c=e.vertices[a.index2],t.push(c.x,c.y,c.z)}}else if(e&&e.isBufferGeometry){let o=new b;if(e.index!==null){let s=e.attributes.position,a=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,f=u.count;for(let p=d,y=d+f;p<y;p+=3)for(let v=0;v<3;v++){let m=a.getX(p+v),g=a.getX(p+(v+1)%3);n[0]=Math.min(m,g),n[1]=Math.max(m,g);let _=n[0]+","+n[1];i[_]===void 0&&(i[_]={index1:n[0],index2:n[1]})}}for(let l in i){let h=i[l];o.fromBufferAttribute(s,h.index1),t.push(o.x,o.y,o.z),o.fromBufferAttribute(s,h.index2),t.push(o.x,o.y,o.z)}}else{let s=e.attributes.position;for(let a=0,c=s.count/3;a<c;a++)for(let l=0;l<3;l++){let h=3*a+l;o.fromBufferAttribute(s,h),t.push(o.x,o.y,o.z);let u=3*a+(l+1)%3;o.fromBufferAttribute(s,u),t.push(o.x,o.y,o.z)}}}this.setAttribute("position",new ee(t,3))}ys.prototype=Object.create(oe.prototype);ys.prototype.constructor=ys;function xs(e,t,n){_e.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new Fr(e,t,n)),this.mergeVertices()}xs.prototype=Object.create(_e.prototype);xs.prototype.constructor=xs;function Fr(e,t,n){oe.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};let i=[],r=[],o=[],s=[],a=1e-5,c=new b,l=new b,h=new b,u=new b,d=new b;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=t+1;for(let p=0;p<=n;p++){let y=p/n;for(let v=0;v<=t;v++){let m=v/t;e(m,y,l),r.push(l.x,l.y,l.z),m-a>=0?(e(m-a,y,h),u.subVectors(l,h)):(e(m+a,y,h),u.subVectors(h,l)),y-a>=0?(e(m,y-a,h),d.subVectors(l,h)):(e(m,y+a,h),d.subVectors(h,l)),c.crossVectors(u,d).normalize(),o.push(c.x,c.y,c.z),s.push(m,y)}}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=p*f+y,m=p*f+y+1,g=(p+1)*f+y+1,_=(p+1)*f+y;i.push(v,m,_),i.push(m,g,_)}this.setIndex(i),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(s,2))}Fr.prototype=Object.create(oe.prototype);Fr.prototype.constructor=Fr;function _s(e,t,n,i){_e.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new Et(e,t,n,i)),this.mergeVertices()}_s.prototype=Object.create(_e.prototype);_s.prototype.constructor=_s;function Et(e,t,n,i){oe.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1,i=i||0;let r=[],o=[];s(i),c(n),l(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(m){let g=new b,_=new b,x=new b;for(let w=0;w<t.length;w+=3)d(t[w+0],g),d(t[w+1],_),d(t[w+2],x),a(g,_,x,m)}function a(m,g,_,x){let w=Math.pow(2,x),E=[];for(let A=0;A<=w;A++){E[A]=[];let F=m.clone().lerp(_,A/w),C=g.clone().lerp(_,A/w),q=w-A;for(let N=0;N<=q;N++)N===0&&A===w?E[A][N]=F:E[A][N]=F.clone().lerp(C,N/q)}for(let A=0;A<w;A++)for(let F=0;F<2*(w-A)-1;F++){let C=Math.floor(F/2);F%2===0?(u(E[A][C+1]),u(E[A+1][C]),u(E[A][C])):(u(E[A][C+1]),u(E[A+1][C+1]),u(E[A+1][C]))}}function c(m){let g=new b;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(m),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z}function l(){let m=new b;for(let g=0;g<r.length;g+=3){m.x=r[g+0],m.y=r[g+1],m.z=r[g+2];let _=y(m)/2/Math.PI+.5,x=v(m)/Math.PI+.5;o.push(_,1-x)}f(),h()}function h(){for(let m=0;m<o.length;m+=6){let g=o[m+0],_=o[m+2],x=o[m+4],w=Math.max(g,_,x),E=Math.min(g,_,x);w>.9&&E<.1&&(g<.2&&(o[m+0]+=1),_<.2&&(o[m+2]+=1),x<.2&&(o[m+4]+=1))}}function u(m){r.push(m.x,m.y,m.z)}function d(m,g){let _=m*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function f(){let m=new b,g=new b,_=new b,x=new b,w=new z,E=new z,A=new z;for(let F=0,C=0;F<r.length;F+=9,C+=6){m.set(r[F+0],r[F+1],r[F+2]),g.set(r[F+3],r[F+4],r[F+5]),_.set(r[F+6],r[F+7],r[F+8]),w.set(o[C+0],o[C+1]),E.set(o[C+2],o[C+3]),A.set(o[C+4],o[C+5]),x.copy(m).add(g).add(_).divideScalar(3);let q=y(x);p(w,C+0,m,q),p(E,C+2,g,q),p(A,C+4,_,q)}}function p(m,g,_,x){x<0&&m.x===1&&(o[g]=m.x-1),_.x===0&&_.z===0&&(o[g]=x/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function v(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}Et.prototype=Object.create(oe.prototype);Et.prototype.constructor=Et;function bs(e,t){_e.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ur(e,t)),this.mergeVertices()}bs.prototype=Object.create(_e.prototype);bs.prototype.constructor=bs;function Ur(e,t){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];Et.call(this,n,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ur.prototype=Object.create(Et.prototype);Ur.prototype.constructor=Ur;function ws(e,t){_e.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ki(e,t)),this.mergeVertices()}ws.prototype=Object.create(_e.prototype);ws.prototype.constructor=ws;function ki(e,t){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Et.call(this,n,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}ki.prototype=Object.create(Et.prototype);ki.prototype.constructor=ki;function Ms(e,t){_e.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new zr(e,t)),this.mergeVertices()}Ms.prototype=Object.create(_e.prototype);Ms.prototype.constructor=Ms;function zr(e,t){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Et.call(this,i,r,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}zr.prototype=Object.create(Et.prototype);zr.prototype.constructor=zr;function Ss(e,t){_e.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Hr(e,t)),this.mergeVertices()}Ss.prototype=Object.create(_e.prototype);Ss.prototype.constructor=Ss;function Hr(e,t){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Et.call(this,r,o,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}Hr.prototype=Object.create(Et.prototype);Hr.prototype.constructor=Hr;function Ts(e,t,n,i,r,o){_e.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},o!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");let s=new Wi(e,t,n,i,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals,this.fromBufferGeometry(s),this.mergeVertices()}Ts.prototype=Object.create(_e.prototype);Ts.prototype.constructor=Ts;function Wi(e,t,n,i,r){oe.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let s=new b,a=new b,c=new z,l=new b,h=[],u=[],d=[],f=[];p(),this.setIndex(f),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function p(){for(let g=0;g<t;g++)y(g);y(r===!1?t:0),m(),v()}function y(g){l=e.getPointAt(g/t,l);let _=o.normals[g],x=o.binormals[g];for(let w=0;w<=i;w++){let E=w/i*Math.PI*2,A=Math.sin(E),F=-Math.cos(E);a.x=F*_.x+A*x.x,a.y=F*_.y+A*x.y,a.z=F*_.z+A*x.z,a.normalize(),u.push(a.x,a.y,a.z),s.x=l.x+n*a.x,s.y=l.y+n*a.y,s.z=l.z+n*a.z,h.push(s.x,s.y,s.z)}}function v(){for(let g=1;g<=t;g++)for(let _=1;_<=i;_++){let x=(i+1)*(g-1)+(_-1),w=(i+1)*g+(_-1),E=(i+1)*g+_,A=(i+1)*(g-1)+_;f.push(x,w,A),f.push(w,E,A)}}function m(){for(let g=0;g<=t;g++)for(let _=0;_<=i;_++)c.x=g/t,c.y=_/i,d.push(c.x,c.y)}}Wi.prototype=Object.create(oe.prototype);Wi.prototype.constructor=Wi;Wi.prototype.toJSON=function(){let e=oe.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e};function Es(e,t,n,i,r,o,s){_e.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},s!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Gr(e,t,n,i,r,o)),this.mergeVertices()}Es.prototype=Object.create(_e.prototype);Es.prototype.constructor=Es;function Gr(e,t,n,i,r,o){oe.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},e=e||1,t=t||.4,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,o=o||3;let s=[],a=[],c=[],l=[],h=new b,u=new b,d=new b,f=new b,p=new b,y=new b,v=new b;for(let g=0;g<=n;++g){let _=g/n*r*Math.PI*2;m(_,r,o,e,d),m(_+.01,r,o,e,f),y.subVectors(f,d),v.addVectors(f,d),p.crossVectors(y,v),v.crossVectors(p,y),p.normalize(),v.normalize();for(let x=0;x<=i;++x){let w=x/i*Math.PI*2,E=-t*Math.cos(w),A=t*Math.sin(w);h.x=d.x+(E*v.x+A*p.x),h.y=d.y+(E*v.y+A*p.y),h.z=d.z+(E*v.z+A*p.z),a.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/n),l.push(x/i)}}for(let g=1;g<=n;g++)for(let _=1;_<=i;_++){let x=(i+1)*(g-1)+(_-1),w=(i+1)*g+(_-1),E=(i+1)*g+_,A=(i+1)*(g-1)+_;s.push(x,w,A),s.push(w,E,A)}this.setIndex(s),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2));function m(g,_,x,w,E){let A=Math.cos(g),F=Math.sin(g),C=x/_*g,q=Math.cos(C);E.x=w*(2+q)*.5*A,E.y=w*(2+q)*F*.5,E.z=w*Math.sin(C)*.5}}Gr.prototype=Object.create(oe.prototype);Gr.prototype.constructor=Gr;function As(e,t,n,i,r){_e.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new Vr(e,t,n,i,r)),this.mergeVertices()}As.prototype=Object.create(_e.prototype);As.prototype.constructor=As;function Vr(e,t,n,i,r){oe.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||1,t=t||.4,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;let o=[],s=[],a=[],c=[],l=new b,h=new b,u=new b;for(let d=0;d<=n;d++)for(let f=0;f<=i;f++){let p=f/i*r,y=d/n*Math.PI*2;h.x=(e+t*Math.cos(y))*Math.cos(p),h.y=(e+t*Math.cos(y))*Math.sin(p),h.z=t*Math.sin(y),s.push(h.x,h.y,h.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),u.subVectors(h,l).normalize(),a.push(u.x,u.y,u.z),c.push(f/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=i;f++){let p=(i+1)*d+f-1,y=(i+1)*(d-1)+f-1,v=(i+1)*(d-1)+f,m=(i+1)*d+f;o.push(p,y,m),o.push(y,v,m)}this.setIndex(o),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}Vr.prototype=Object.create(oe.prototype);Vr.prototype.constructor=Vr;var Ev={triangulate:function(e,t,n){n=n||2;let i=t&&t.length,r=i?t[0]*n:e.length,o=Zu(e,0,r,n,!0),s=[];if(!o||o.next===o.prev)return s;let a,c,l,h,u,d,f;if(i&&(o=Rv(e,t,o,n)),e.length>80*n){a=l=e[0],c=h=e[1];for(let p=n;p<r;p+=n)u=e[p],d=e[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return kr(o,s,n,a,c,f),s}};function Zu(e,t,n,i,r){let o,s;if(r===Vv(e,t,n,i)>0)for(o=t;o<n;o+=i)s=Vl(o,e[o],e[o+1],s);else for(o=n-i;o>=t;o-=i)s=Vl(o,e[o],e[o+1],s);return s&&Ys(s,s.next)&&(jr(s),s=s.next),s}function Un(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Ys(n,n.next)||je(n.prev,n,n.next)===0)){if(jr(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function kr(e,t,n,i,r,o,s){if(!e)return;!s&&o&&Bv(e,i,r,o);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,o?Cv(e,i,r,o):Av(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),jr(e),e=l.next,a=l.next;continue}if(e=l,e===a){s?s===1?(e=Lv(Un(e),t,n),kr(e,t,n,i,r,o,2)):s===2&&Pv(e,t,n,i,r,o):kr(Un(e),t,n,i,r,o,1);break}}}function Av(e){let t=e.prev,n=e,i=e.next;if(je(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(Ni(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&je(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Cv(e,t,n,i){let r=e.prev,o=e,s=e.next;if(je(r,o,s)>=0)return!1;let a=r.x<o.x?r.x<s.x?r.x:s.x:o.x<s.x?o.x:s.x,c=r.y<o.y?r.y<s.y?r.y:s.y:o.y<s.y?o.y:s.y,l=r.x>o.x?r.x>s.x?r.x:s.x:o.x>s.x?o.x:s.x,h=r.y>o.y?r.y>s.y?r.y:s.y:o.y>s.y?o.y:s.y,u=Ya(a,c,t,n,i),d=Ya(l,h,t,n,i),f=e.prevZ,p=e.nextZ;for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==e.prev&&f!==e.next&&Ni(r.x,r.y,o.x,o.y,s.x,s.y,f.x,f.y)&&je(f.prev,f,f.next)>=0||(f=f.prevZ,p!==e.prev&&p!==e.next&&Ni(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&je(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=u;){if(f!==e.prev&&f!==e.next&&Ni(r.x,r.y,o.x,o.y,s.x,s.y,f.x,f.y)&&je(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&Ni(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Lv(e,t,n){let i=e;do{let r=i.prev,o=i.next.next;!Ys(r,o)&&Ju(r,i,i.next,o)&&Wr(r,o)&&Wr(o,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(o.i/n),jr(i),jr(i.next),i=e=o),i=i.next}while(i!==e);return Un(i)}function Pv(e,t,n,i,r,o){let s=e;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&zv(s,a)){let c=$u(s,a);s=Un(s,s.next),c=Un(c,c.next),kr(s,t,n,i,r,o),kr(c,t,n,i,r,o);return}a=a.next}s=s.next}while(s!==e)}function Rv(e,t,n,i){let r=[],o,s,a,c,l;for(o=0,s=t.length;o<s;o++)a=t[o]*i,c=o<s-1?t[o+1]*i:e.length,l=Zu(e,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Uv(l));for(r.sort(Dv),o=0;o<r.length;o++)Iv(r[o],n),n=Un(n,n.next);return n}function Dv(e,t){return e.x-t.x}function Iv(e,t){if(t=Nv(e,t),t){let n=$u(t,e);Un(t,t.next),Un(n,n.next)}}function Nv(e,t){let n=t,i=e.x,r=e.y,o=-1/0,s;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>o){if(o=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}s=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!s)return null;if(i===o)return s;let a=s,c=s.x,l=s.y,h=1/0,u;n=s;do i>=n.x&&n.x>=c&&i!==n.x&&Ni(r<l?i:o,r,c,l,r<l?o:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),Wr(n,e)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&Ov(s,n)))&&(s=n,h=u)),n=n.next;while(n!==a);return s}function Ov(e,t){return je(e.prev,e,t.prev)<0&&je(t.next,e,e.next)<0}function Bv(e,t,n,i){let r=e;do r.z===null&&(r.z=Ya(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Fv(r)}function Fv(e){let t,n,i,r,o,s,a,c,l=1;do{for(n=e,e=null,o=null,s=0;n;){for(s++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),o?o.nextZ=r:e=r,r.prevZ=o,o=r;n=i}o.nextZ=null,l*=2}while(s>1);return e}function Ya(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Uv(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ni(e,t,n,i,r,o,s,a){return(r-s)*(t-a)-(e-s)*(o-a)>=0&&(e-s)*(i-a)-(n-s)*(t-a)>=0&&(n-s)*(o-a)-(r-s)*(i-a)>=0}function zv(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Hv(e,t)&&(Wr(e,t)&&Wr(t,e)&&Gv(e,t)&&(je(e.prev,e,t.prev)||je(e,t.prev,t))||Ys(e,t)&&je(e.prev,e,e.next)>0&&je(t.prev,t,t.next)>0)}function je(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ys(e,t){return e.x===t.x&&e.y===t.y}function Ju(e,t,n,i){let r=qo(je(e,t,n)),o=qo(je(e,t,i)),s=qo(je(n,i,e)),a=qo(je(n,i,t));return!!(r!==o&&s!==a||r===0&&jo(e,n,t)||o===0&&jo(e,i,t)||s===0&&jo(n,e,i)||a===0&&jo(n,t,i))}function jo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function qo(e){return e>0?1:e<0?-1:0}function Hv(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ju(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Wr(e,t){return je(e.prev,e,e.next)<0?je(e,t,e.next)>=0&&je(e,e.prev,t)>=0:je(e,t,e.prev)<0||je(e,e.next,t)<0}function Gv(e,t){let n=e,i=!1,r=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function $u(e,t){let n=new Za(e.i,e.x,e.y),i=new Za(t.i,t.x,t.y),r=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Vl(e,t,n,i){let r=new Za(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Za(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vv(e,t,n,i){let r=0;for(let o=t,s=n-i;o<n;o+=i)r+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return r}var Nn={area:function(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return Nn.area(e)<0},triangulateShape:function(e,t){let n=[],i=[],r=[];kl(e),Wl(n,e);let o=e.length;t.forEach(kl);for(let a=0;a<t.length;a++)i.push(o),o+=t[a].length,Wl(n,t[a]);let s=Ev.triangulate(n,i);for(let a=0;a<s.length;a+=3)r.push(s.slice(a,a+3));return r}};function kl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Wl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function ji(e,t){_e.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new fn(e,t)),this.mergeVertices()}ji.prototype=Object.create(_e.prototype);ji.prototype.constructor=ji;ji.prototype.toJSON=function(){let e=_e.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Qu(t,n,e)};function fn(e,t){oe.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let s=0,a=e.length;s<a;s++){let c=e[s];o(c)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(s){let a=[],c=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:100,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,f=t.bevelSize!==void 0?t.bevelSize:d-2,p=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:kv;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let g,_=!1,x,w,E,A;v&&(g=v.getSpacedPoints(l),_=!0,u=!1,x=v.computeFrenetFrames(l,!1),w=new b,E=new b,A=new b),u||(y=0,d=0,f=0,p=0);let F=s.extractPoints(c),C=F.shape,q=F.holes;if(!Nn.isClockWise(C)){C=C.reverse();for(let k=0,j=q.length;k<j;k++){let J=q[k];Nn.isClockWise(J)&&(q[k]=J.reverse())}}let O=Nn.triangulateShape(C,q),I=C;for(let k=0,j=q.length;k<j;k++){let J=q[k];C=C.concat(J)}function R(k,j,J){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(J).add(k)}let L=C.length,U=O.length;function W(k,j,J){let he,se,Te,M=k.x-j.x,T=k.y-j.y,X=J.x-k.x,G=J.y-k.y,P=M*M+T*T,$=M*G-T*X;if(Math.abs($)>Number.EPSILON){let K=Math.sqrt(P),me=Math.sqrt(X*X+G*G),Y=j.x-T/K,ae=j.y+M/K,Pe=J.x-G/me,ye=J.y+X/me,fe=((Pe-Y)*G-(ye-ae)*X)/(M*G-T*X);he=Y+M*fe-k.x,se=ae+T*fe-k.y;let xe=he*he+se*se;if(xe<=2)return new z(he,se);Te=Math.sqrt(xe/2)}else{let K=!1;M>Number.EPSILON?X>Number.EPSILON&&(K=!0):M<-Number.EPSILON?X<-Number.EPSILON&&(K=!0):Math.sign(T)===Math.sign(G)&&(K=!0),K?(he=-T,se=M,Te=Math.sqrt(P)):(he=M,se=T,Te=Math.sqrt(P/2))}return new z(he/Te,se/Te)}let Q=[];for(let k=0,j=I.length,J=j-1,he=k+1;k<j;k++,J++,he++)J===j&&(J=0),he===j&&(he=0),Q[k]=W(I[k],I[J],I[he]);let ie=[],le,ue=Q.concat();for(let k=0,j=q.length;k<j;k++){let J=q[k];le=[];for(let he=0,se=J.length,Te=se-1,M=he+1;he<se;he++,Te++,M++)Te===se&&(Te=0),M===se&&(M=0),le[he]=W(J[he],J[Te],J[M]);ie.push(le),ue=ue.concat(le)}for(let k=0;k<y;k++){let j=k/y,J=d*Math.cos(j*Math.PI/2),he=f*Math.sin(j*Math.PI/2)+p;for(let se=0,Te=I.length;se<Te;se++){let M=R(I[se],Q[se],he);V(M.x,M.y,-J)}for(let se=0,Te=q.length;se<Te;se++){let M=q[se];le=ie[se];for(let T=0,X=M.length;T<X;T++){let G=R(M[T],le[T],he);V(G.x,G.y,-J)}}}let De=f+p;for(let k=0;k<L;k++){let j=u?R(C[k],ue[k],De):C[k];_?(E.copy(x.normals[0]).multiplyScalar(j.x),w.copy(x.binormals[0]).multiplyScalar(j.y),A.copy(g[0]).add(E).add(w),V(A.x,A.y,A.z)):V(j.x,j.y,0)}for(let k=1;k<=l;k++)for(let j=0;j<L;j++){let J=u?R(C[j],ue[j],De):C[j];_?(E.copy(x.normals[k]).multiplyScalar(J.x),w.copy(x.binormals[k]).multiplyScalar(J.y),A.copy(g[k]).add(E).add(w),V(A.x,A.y,A.z)):V(J.x,J.y,h/l*k)}for(let k=y-1;k>=0;k--){let j=k/y,J=d*Math.cos(j*Math.PI/2),he=f*Math.sin(j*Math.PI/2)+p;for(let se=0,Te=I.length;se<Te;se++){let M=R(I[se],Q[se],he);V(M.x,M.y,h+J)}for(let se=0,Te=q.length;se<Te;se++){let M=q[se];le=ie[se];for(let T=0,X=M.length;T<X;T++){let G=R(M[T],le[T],he);_?V(G.x,G.y+g[l-1].y,g[l-1].x+J):V(G.x,G.y,h+J)}}}Se(),qe();function Se(){let k=i.length/3;if(u){let j=0,J=L*j;for(let he=0;he<U;he++){let se=O[he];et(se[2]+J,se[1]+J,se[0]+J)}j=l+y*2,J=L*j;for(let he=0;he<U;he++){let se=O[he];et(se[0]+J,se[1]+J,se[2]+J)}}else{for(let j=0;j<U;j++){let J=O[j];et(J[2],J[1],J[0])}for(let j=0;j<U;j++){let J=O[j];et(J[0]+L*l,J[1]+L*l,J[2]+L*l)}}n.addGroup(k,i.length/3-k,0)}function qe(){let k=i.length/3,j=0;Ie(I,j),j+=I.length;for(let J=0,he=q.length;J<he;J++){let se=q[J];Ie(se,j),j+=se.length}n.addGroup(k,i.length/3-k,1)}function Ie(k,j){let J=k.length;for(;--J>=0;){let he=J,se=J-1;se<0&&(se=k.length-1);for(let Te=0,M=l+y*2;Te<M;Te++){let T=L*Te,X=L*(Te+1),G=j+he+T,P=j+se+T,$=j+se+X,K=j+he+X;Ce(G,P,$,K)}}}function V(k,j,J){a.push(k),a.push(j),a.push(J)}function et(k,j,J){Le(k),Le(j),Le(J);let he=i.length/3,se=m.generateTopUV(n,i,he-3,he-2,he-1);be(se[0]),be(se[1]),be(se[2])}function Ce(k,j,J,he){Le(k),Le(j),Le(he),Le(j),Le(J),Le(he);let se=i.length/3,Te=m.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);be(Te[0]),be(Te[1]),be(Te[3]),be(Te[1]),be(Te[2]),be(Te[3])}function Le(k){i.push(a[k*3+0]),i.push(a[k*3+1]),i.push(a[k*3+2])}function be(k){r.push(k.x),r.push(k.y)}}}fn.prototype=Object.create(oe.prototype);fn.prototype.constructor=fn;fn.prototype.toJSON=function(){let e=oe.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Qu(t,n,e)};var kv={generateTopUV:function(e,t,n,i,r){let o=t[n*3],s=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],h=t[r*3+1];return[new z(o,s),new z(a,c),new z(l,h)]},generateSideWallUV:function(e,t,n,i,r,o){let s=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[r*3],f=t[r*3+1],p=t[r*3+2],y=t[o*3],v=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<.01?[new z(s,1-c),new z(l,1-u),new z(d,1-p),new z(y,1-m)]:[new z(a,1-c),new z(h,1-u),new z(f,1-p),new z(v,1-m)]}};function Qu(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let o=e[i];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Cs(e,t){_e.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new qr(e,t)),this.mergeVertices()}Cs.prototype=Object.create(_e.prototype);Cs.prototype.constructor=Cs;function qr(e,t){t=t||{};let n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new _e;let i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),fn.call(this,i,t),this.type="TextBufferGeometry"}qr.prototype=Object.create(fn.prototype);qr.prototype.constructor=qr;function Ls(e,t,n,i,r,o,s){_e.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},this.fromBufferGeometry(new qi(e,t,n,i,r,o,s)),this.mergeVertices()}Ls.prototype=Object.create(_e.prototype);Ls.prototype.constructor=Ls;function qi(e,t,n,i,r,o,s){oe.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},e=e||1,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,o=o!==void 0?o:0,s=s!==void 0?s:Math.PI;let a=Math.min(o+s,Math.PI),c=0,l=[],h=new b,u=new b,d=[],f=[],p=[],y=[];for(let v=0;v<=n;v++){let m=[],g=v/n,_=0;v==0&&o==0?_=.5/t:v==n&&a==Math.PI&&(_=-.5/t);for(let x=0;x<=t;x++){let w=x/t;h.x=-e*Math.cos(i+w*r)*Math.sin(o+g*s),h.y=e*Math.cos(o+g*s),h.z=e*Math.sin(i+w*r)*Math.sin(o+g*s),f.push(h.x,h.y,h.z),u.copy(h).normalize(),p.push(u.x,u.y,u.z),y.push(w+_,1-g),m.push(c++)}l.push(m)}for(let v=0;v<n;v++)for(let m=0;m<t;m++){let g=l[v][m+1],_=l[v][m],x=l[v+1][m],w=l[v+1][m+1];(v!==0||o>0)&&d.push(g,_,w),(v!==n-1||a<Math.PI)&&d.push(_,x,w)}this.setIndex(d),this.setAttribute("position",new ee(f,3)),this.setAttribute("normal",new ee(p,3)),this.setAttribute("uv",new ee(y,2))}qi.prototype=Object.create(oe.prototype);qi.prototype.constructor=qi;function Ps(e,t,n,i,r,o){_e.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},this.fromBufferGeometry(new Xr(e,t,n,i,r,o)),this.mergeVertices()}Ps.prototype=Object.create(_e.prototype);Ps.prototype.constructor=Ps;function Xr(e,t,n,i,r,o){oe.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},e=e||.5,t=t||1,r=r!==void 0?r:0,o=o!==void 0?o:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;let s=[],a=[],c=[],l=[],h=e,u=(t-e)/i,d=new b,f=new z;for(let p=0;p<=i;p++){for(let y=0;y<=n;y++){let v=r+y/n*o;d.x=h*Math.cos(v),d.y=h*Math.sin(v),a.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,l.push(f.x,f.y)}h+=u}for(let p=0;p<i;p++){let y=p*(n+1);for(let v=0;v<n;v++){let m=v+y,g=m,_=m+n+1,x=m+n+2,w=m+1;s.push(g,_,w),s.push(_,x,w)}}this.setIndex(s),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}Xr.prototype=Object.create(oe.prototype);Xr.prototype.constructor=Xr;function Rs(e,t,n,i){_e.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new Yr(e,t,n,i)),this.mergeVertices()}Rs.prototype=Object.create(_e.prototype);Rs.prototype.constructor=Rs;function Yr(e,t,n,i){oe.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||Math.PI*2,i=Me.clamp(i,0,Math.PI*2);let r=[],o=[],s=[],a=1/t,c=new b,l=new z;for(let h=0;h<=t;h++){let u=n+h*a*i,d=Math.sin(u),f=Math.cos(u);for(let p=0;p<=e.length-1;p++)c.x=e[p].x*d,c.y=e[p].y,c.z=e[p].x*f,o.push(c.x,c.y,c.z),l.x=h/t,l.y=p/(e.length-1),s.push(l.x,l.y)}for(let h=0;h<t;h++)for(let u=0;u<e.length-1;u++){let d=u+h*e.length,f=d,p=d+e.length,y=d+e.length+1,v=d+1;r.push(f,p,v),r.push(p,y,v)}if(this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals(),i===Math.PI*2){let h=this.attributes.normal.array,u=new b,d=new b,f=new b,p=t*e.length*3;for(let y=0,v=0;y<e.length;y++,v+=3)u.x=h[v+0],u.y=h[v+1],u.z=h[v+2],d.x=h[p+v+0],d.y=h[p+v+1],d.z=h[p+v+2],f.addVectors(u,d).normalize(),h[v+0]=h[p+v+0]=f.x,h[v+1]=h[p+v+1]=f.y,h[v+2]=h[p+v+2]=f.z}}Yr.prototype=Object.create(oe.prototype);Yr.prototype.constructor=Yr;function Xi(e,t){_e.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Yi(e,t)),this.mergeVertices()}Xi.prototype=Object.create(_e.prototype);Xi.prototype.constructor=Xi;Xi.prototype.toJSON=function(){let e=_e.prototype.toJSON.call(this),t=this.parameters.shapes;return Ku(t,e)};function Yi(e,t){oe.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;let n=[],i=[],r=[],o=[],s=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let l=0;l<e.length;l++)c(e[l]),this.addGroup(s,a,l),s+=a,a=0;this.setIndex(n),this.setAttribute("position",new ee(i,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(l){let h=i.length/3,u=l.extractPoints(t),d=u.shape,f=u.holes;Nn.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,v=f.length;y<v;y++){let m=f[y];Nn.isClockWise(m)===!0&&(f[y]=m.reverse())}let p=Nn.triangulateShape(d,f);for(let y=0,v=f.length;y<v;y++){let m=f[y];d=d.concat(m)}for(let y=0,v=d.length;y<v;y++){let m=d[y];i.push(m.x,m.y,0),r.push(0,0,1),o.push(m.x,m.y)}for(let y=0,v=p.length;y<v;y++){let m=p[y],g=m[0]+h,_=m[1]+h,x=m[2]+h;n.push(g,_,x),a+=3}}}Yi.prototype=Object.create(oe.prototype);Yi.prototype.constructor=Yi;Yi.prototype.toJSON=function(){let e=oe.prototype.toJSON.call(this),t=this.parameters.shapes;return Ku(t,e)};function Ku(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function Ds(e,t){oe.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1;let n=[],i=Math.cos(Me.DEG2RAD*t),r=[0,0],o={},s,a,c,l=["a","b","c"],h;e.isBufferGeometry?(h=new _e,h.fromBufferGeometry(e)):h=e.clone(),h.mergeVertices(),h.computeFaceNormals();let u=h.vertices,d=h.faces;for(let f=0,p=d.length;f<p;f++){let y=d[f];for(let v=0;v<3;v++)s=y[l[v]],a=y[l[(v+1)%3]],r[0]=Math.min(s,a),r[1]=Math.max(s,a),c=r[0]+","+r[1],o[c]===void 0?o[c]={index1:r[0],index2:r[1],face1:f,face2:void 0}:o[c].face2=f}for(c in o){let f=o[c];if(f.face2===void 0||d[f.face1].normal.dot(d[f.face2].normal)<=i){let p=u[f.index1];n.push(p.x,p.y,p.z),p=u[f.index2],n.push(p.x,p.y,p.z)}}this.setAttribute("position",new ee(n,3))}Ds.prototype=Object.create(oe.prototype);Ds.prototype.constructor=Ds;function Zi(e,t,n,i,r,o,s,a){_e.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a},this.fromBufferGeometry(new zn(e,t,n,i,r,o,s,a)),this.mergeVertices()}Zi.prototype=Object.create(_e.prototype);Zi.prototype.constructor=Zi;function zn(e,t,n,i,r,o,s,a){oe.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a};let c=this;e=e!==void 0?e:1,t=t!==void 0?t:1,n=n||1,i=Math.floor(i)||8,r=Math.floor(r)||1,o=o!==void 0?o:!1,s=s!==void 0?s:0,a=a!==void 0?a:Math.PI*2;let l=[],h=[],u=[],d=[],f=0,p=[],y=n/2,v=0;m(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(l),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function m(){let _=new b,x=new b,w=0,E=(t-e)/n;for(let A=0;A<=r;A++){let F=[],C=A/r,q=C*(t-e)+e;for(let N=0;N<=i;N++){let O=N/i,I=O*a+s,R=Math.sin(I),L=Math.cos(I);x.x=q*R,x.y=-C*n+y,x.z=q*L,h.push(x.x,x.y,x.z),_.set(R,E,L).normalize(),u.push(_.x,_.y,_.z),d.push(O,1-C),F.push(f++)}p.push(F)}for(let A=0;A<i;A++)for(let F=0;F<r;F++){let C=p[F][A],q=p[F+1][A],N=p[F+1][A+1],O=p[F][A+1];l.push(C,q,O),l.push(q,N,O),w+=6}c.addGroup(v,w,0),v+=w}function g(_){let x,w,E=new z,A=new b,F=0,C=_===!0?e:t,q=_===!0?1:-1;x=f;for(let N=1;N<=i;N++)h.push(0,y*q,0),u.push(0,q,0),d.push(.5,.5),f++;w=f;for(let N=0;N<=i;N++){let I=N/i*a+s,R=Math.cos(I),L=Math.sin(I);A.x=C*L,A.y=y*q,A.z=C*R,h.push(A.x,A.y,A.z),u.push(0,q,0),E.x=R*.5+.5,E.y=L*.5*q+.5,d.push(E.x,E.y),f++}for(let N=0;N<i;N++){let O=x+N,I=w+N;_===!0?l.push(I,I+1,O):l.push(I+1,I,O),F+=3}c.addGroup(v,F,_===!0?1:2),v+=F}}zn.prototype=Object.create(oe.prototype);zn.prototype.constructor=zn;function Is(e,t,n,i,r,o,s){Zi.call(this,0,e,t,n,i,r,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}Is.prototype=Object.create(Zi.prototype);Is.prototype.constructor=Is;function Ns(e,t,n,i,r,o,s){zn.call(this,0,e,t,n,i,r,o,s),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}Ns.prototype=Object.create(zn.prototype);Ns.prototype.constructor=Ns;function Os(e,t,n,i){_e.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new Zr(e,t,n,i)),this.mergeVertices()}Os.prototype=Object.create(_e.prototype);Os.prototype.constructor=Os;function Zr(e,t,n,i){oe.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||1,t=t!==void 0?Math.max(3,t):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;let r=[],o=[],s=[],a=[],c=new b,l=new z;o.push(0,0,0),s.push(0,0,1),a.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),s.push(0,0,1),l.x=(o[u]/e+1)/2,l.y=(o[u+1]/e+1)/2,a.push(l.x,l.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(s,3)),this.setAttribute("uv",new ee(a,2))}Zr.prototype=Object.create(oe.prototype);Zr.prototype.constructor=Zr;var mt=Object.freeze({__proto__:null,WireframeGeometry:ys,ParametricGeometry:xs,ParametricBufferGeometry:Fr,TetrahedronGeometry:bs,TetrahedronBufferGeometry:Ur,OctahedronGeometry:ws,OctahedronBufferGeometry:ki,IcosahedronGeometry:Ms,IcosahedronBufferGeometry:zr,DodecahedronGeometry:Ss,DodecahedronBufferGeometry:Hr,PolyhedronGeometry:_s,PolyhedronBufferGeometry:Et,TubeGeometry:Ts,TubeBufferGeometry:Wi,TorusKnotGeometry:Es,TorusKnotBufferGeometry:Gr,TorusGeometry:As,TorusBufferGeometry:Vr,TextGeometry:Cs,TextBufferGeometry:qr,SphereGeometry:Ls,SphereBufferGeometry:qi,RingGeometry:Ps,RingBufferGeometry:Xr,PlaneGeometry:ds,PlaneBufferGeometry:Vi,LatheGeometry:Rs,LatheBufferGeometry:Yr,ShapeGeometry:Xi,ShapeBufferGeometry:Yi,ExtrudeGeometry:ji,ExtrudeBufferGeometry:fn,EdgesGeometry:Ds,ConeGeometry:Is,ConeBufferGeometry:Ns,CylinderGeometry:Zi,CylinderBufferGeometry:zn,CircleGeometry:Os,CircleBufferGeometry:Zr,BoxGeometry:Ua,BoxBufferGeometry:zi});function Ji(e){ve.call(this),this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.setValues(e)}Ji.prototype=Object.create(ve.prototype);Ji.prototype.constructor=Ji;Ji.prototype.isShadowMaterial=!0;Ji.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this};function Hn(e){wt.call(this,e),this.type="RawShaderMaterial"}Hn.prototype=Object.create(wt.prototype);Hn.prototype.constructor=Hn;Hn.prototype.isRawShaderMaterial=!0;function dn(e){ve.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}dn.prototype=Object.create(ve.prototype);dn.prototype.constructor=dn;dn.prototype.isMeshStandardMaterial=!0;dn.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function $i(e){dn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transparency=0,this.setValues(e)}$i.prototype=Object.create(dn.prototype);$i.prototype.constructor=$i;$i.prototype.isMeshPhysicalMaterial=!0;$i.prototype.copy=function(e){return dn.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new re).copy(e.sheen):this.sheen=null,this.transparency=e.transparency,this};function ai(e){ve.call(this),this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ai.prototype=Object.create(ve.prototype);ai.prototype.constructor=ai;ai.prototype.isMeshPhongMaterial=!0;ai.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Qi(e){ve.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Qi.prototype=Object.create(ve.prototype);Qi.prototype.constructor=Qi;Qi.prototype.isMeshToonMaterial=!0;Qi.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Ki(e){ve.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Ki.prototype=Object.create(ve.prototype);Ki.prototype.constructor=Ki;Ki.prototype.isMeshNormalMaterial=!0;Ki.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function er(e){ve.call(this),this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}er.prototype=Object.create(ve.prototype);er.prototype.constructor=er;er.prototype.isMeshLambertMaterial=!0;er.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function tr(e){ve.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}tr.prototype=Object.create(ve.prototype);tr.prototype.constructor=tr;tr.prototype.isMeshMatcapMaterial=!0;tr.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function nr(e){Ke.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}nr.prototype=Object.create(Ke.prototype);nr.prototype.constructor=nr;nr.prototype.isLineDashedMaterial=!0;nr.prototype.copy=function(e){return Ke.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Wv=Object.freeze({__proto__:null,ShadowMaterial:Ji,SpriteMaterial:oi,RawShaderMaterial:Hn,ShaderMaterial:wt,PointsMaterial:si,MeshPhysicalMaterial:$i,MeshStandardMaterial:dn,MeshPhongMaterial:ai,MeshToonMaterial:Qi,MeshNormalMaterial:Ki,MeshLambertMaterial:er,MeshDepthMaterial:ei,MeshDistanceMaterial:ti,MeshBasicMaterial:kt,MeshMatcapMaterial:tr,LineDashedMaterial:nr,LineBasicMaterial:Ke,Material:ve}),We={arraySlice:function(e,t,n){return We.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,o){return e[r]-e[o]}let n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){let i=e.length,r=new e.constructor(i);for(let o=0,s=0;s!==i;++o){let a=n[o]*t;for(let c=0;c!==t;++c)r[s++]=e[a+c]}return r},flattenJSON:function(e,t,n,i){let r=1,o=e[0];for(;o!==void 0&&o[i]===void 0;)o=e[r++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(t.push(o.time),n.push.apply(n,s)),o=e[r++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(t.push(o.time),s.toArray(n,n.length)),o=e[r++];while(o!==void 0);else do s=o[i],s!==void 0&&(t.push(o.time),n.push(s)),o=e[r++];while(o!==void 0)},subclip:function(e,t,n,i,r){r=r||30;let o=e.clone();o.name=t;let s=[];for(let c=0;c<o.tracks.length;++c){let l=o.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){let p=l.times[f]*r;if(!(p<n||p>=i)){u.push(l.times[f]);for(let y=0;y<h;++y)d.push(l.values[f*h+y])}}u.length!==0&&(l.times=We.convertArray(u,l.times.constructor),l.values=We.convertArray(d,l.values.constructor),s.push(l))}o.tracks=s;let a=1/0;for(let c=0;c<o.tracks.length;++c)a>o.tracks[c].times[0]&&(a=o.tracks[c].times[0]);for(let c=0;c<o.tracks.length;++c)o.tracks[c].shift(-1*a);return o.resetDuration(),o},makeClipAdditive:function(e,t,n,i){t===void 0&&(t=0),n===void 0&&(n=e),(i===void 0||i<=0)&&(i=30);let r=e.tracks.length,o=t/i;for(let s=0;s<r;++s){let a=n.tracks[s],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=e.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=a.getValueSize(),u=a.times.length-1,d;if(o<=a.times[0])d=We.arraySlice(a.values,0,a.valueSize);else if(o>=a.times[u]){let p=u*h;d=We.arraySlice(a.values,p)}else{let p=a.createInterpolant();p.evaluate(o),d=p.resultBuffer}c==="quaternion"&&new ot(d[0],d[1],d[2],d[3]).normalize().conjugate().toArray(d);let f=l.times.length;for(let p=0;p<f;++p){let y=p*h;if(c==="quaternion")ot.multiplyQuaternionsFlat(l.values,y,d,0,l.values,y);else for(let v=0;v<h;++v)l.values[y+v]-=d[v]}}return e.blendMode=Pu,e}};function Pt(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(Pt.prototype,{evaluate:function(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let s=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===s)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let s=t[1];e<s&&(n=2,r=s);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let s=n+o>>>1;e<t[s]?o=s:n=s+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Pt.prototype,{beforeStart_:Pt.prototype.copySampleValue_,afterEnd_:Pt.prototype.copySampleValue_});function Ja(e,t,n,i){Pt.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Ja.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ja,DefaultSettings_:{endingStart:Ui,endingEnd:Ui},intervalChanged_:function(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,s=i[r],a=i[o];if(s===void 0)switch(this.getSettings_().endingStart){case Pi:r=e,s=2*t-n;break;case us:r=i.length-2,s=t+i[r]-i[r+1];break;default:r=e,s=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Pi:o=e,a=2*n-t;break;case us:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-s),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=o*l},interpolate_:function(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,a=e*s,c=a-s,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(n-t)/(i-t),p=f*f,y=p*f,v=-u*y+2*u*p-u*f,m=(1+u)*y+(-1.5-2*u)*p+(-.5+u)*f+1,g=(-1-d)*y+(1.5+d)*p+.5*f,_=d*y-d*p;for(let x=0;x!==s;++x)r[x]=v*o[l+x]+m*o[c+x]+g*o[a+x]+_*o[h+x];return r}});function Bs(e,t,n,i){Pt.call(this,e,t,n,i)}Bs.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Bs,interpolate_:function(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,a=e*s,c=a-s,l=(n-t)/(i-t),h=1-l;for(let u=0;u!==s;++u)r[u]=o[c+u]*h+o[a+u]*l;return r}});function $a(e,t,n,i){Pt.call(this,e,t,n,i)}$a.prototype=Object.assign(Object.create(Pt.prototype),{constructor:$a,interpolate_:function(e){return this.copySampleValue_(e-1)}});function dt(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=We.convertArray(t,this.TimeBufferType),this.values=We.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(dt,{toJSON:function(e){let t=e.constructor,n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:We.convertArray(e.times,Array),values:We.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}});Object.assign(dt.prototype,{constructor:dt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:os,InterpolantFactoryMethodDiscrete:function(e){return new $a(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Bs(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new Ja(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case Ks:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return Ks}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let s=this.getValueSize();this.times=We.arraySlice(n,r,o),this.values=We.arraySlice(this.values,r*s,o*s)}return this},validate:function(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==r;s++){let a=n[s];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,a),e=!1;break}if(o!==null&&o>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,a,o),e=!1;break}o=a}if(i!==void 0&&We.isTypedArray(i))for(let s=0,a=i.length;s!==a;++s){let c=i[s];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,c),e=!1;break}}return e},optimize:function(){let e=We.arraySlice(this.times),t=We.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ks,r=e.length-1,o=1;for(let s=1;s<r;++s){let a=!1,c=e[s],l=e[s+1];if(c!==l&&(s!==1||c!==c[0]))if(i)a=!0;else{let h=s*n,u=h-n,d=h+n;for(let f=0;f!==n;++f){let p=t[h+f];if(p!==t[u+f]||p!==t[d+f]){a=!0;break}}}if(a){if(s!==o){e[o]=e[s];let h=s*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let s=r*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[s+c];++o}return o!==e.length?(this.times=We.arraySlice(e,0,o),this.values=We.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this},clone:function(){let e=We.arraySlice(this.times,0),t=We.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function Qa(e,t,n){dt.call(this,e,t,n)}Qa.prototype=Object.assign(Object.create(dt.prototype),{constructor:Qa,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:ls,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ka(e,t,n,i){dt.call(this,e,t,n,i)}Ka.prototype=Object.assign(Object.create(dt.prototype),{constructor:Ka,ValueTypeName:"color"});function Jr(e,t,n,i){dt.call(this,e,t,n,i)}Jr.prototype=Object.assign(Object.create(dt.prototype),{constructor:Jr,ValueTypeName:"number"});function ec(e,t,n,i){Pt.call(this,e,t,n,i)}ec.prototype=Object.assign(Object.create(Pt.prototype),{constructor:ec,interpolate_:function(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,a=(n-t)/(i-t),c=e*s;for(let l=c+s;c!==l;c+=4)ot.slerpFlat(r,0,o,c-s,o,c,a);return r}});function Fs(e,t,n,i){dt.call(this,e,t,n,i)}Fs.prototype=Object.assign(Object.create(dt.prototype),{constructor:Fs,ValueTypeName:"quaternion",DefaultInterpolation:os,InterpolantFactoryMethodLinear:function(e){return new ec(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function tc(e,t,n,i){dt.call(this,e,t,n,i)}tc.prototype=Object.assign(Object.create(dt.prototype),{constructor:tc,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:ls,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function $r(e,t,n,i){dt.call(this,e,t,n,i)}$r.prototype=Object.assign(Object.create(dt.prototype),{constructor:$r,ValueTypeName:"vector"});function zt(e,t,n,i){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.blendMode=i!==void 0?i:Cc,this.uuid=Me.generateUUID(),this.duration<0&&this.resetDuration()}function jv(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return $r;case"color":return Ka;case"quaternion":return Fs;case"bool":case"boolean":return Qa;case"string":return tc}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function qv(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=jv(e.type);if(e.times===void 0){let n=[],i=[];We.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(zt,{parse:function(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(qv(n[r]).scale(i));return new zt(e.name,e.duration,t,e.blendMode)},toJSON:function(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(dt.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){let r=t.length,o=[];for(let s=0;s<r;s++){let a=[],c=[];a.push((s+r-1)%r,s,(s+1)%r),c.push(0,1,0);let l=We.getKeyframeOrder(a);a=We.sortedArray(a,1,l),c=We.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),o.push(new Jr(".morphTargetInfluences["+t[s].name+"]",a,c).scale(1/n))}return new zt(e,-1,o)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let s=0,a=e.length;s<a;s++){let c=e[s],l=c.name.match(r);if(l&&l.length>1){let h=l[1],u=i[h];u||(i[h]=u=[]),u.push(c)}}let o=[];for(let s in i)o.push(zt.CreateFromMorphTargetSequence(s,i[s],t,n));return o},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,f,p){if(d.length!==0){let y=[],v=[];We.flattenJSON(d,y,v,f),y.length!==0&&p.push(new h(u,y,v))}},i=[],r=e.name||"default",o=e.fps||30,s=e.blendMode,a=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},f;for(f=0;f<u.length;f++)if(u[f].morphTargets)for(let p=0;p<u[f].morphTargets.length;p++)d[u[f].morphTargets[p]]=-1;for(let p in d){let y=[],v=[];for(let m=0;m!==u[f].morphTargets.length;++m){let g=u[f];y.push(g.time),v.push(g.morphTarget===p?1:0)}i.push(new Jr(".morphTargetInfluence["+p+"]",y,v))}a=d.length*(o||1)}else{let d=".bones["+t[h].name+"]";n($r,d+".position",u,"pos",i),n(Fs,d+".quaternion",u,"rot",i),n($r,d+".scale",u,"scl",i)}}return i.length===0?null:new zt(r,a,i,s)}});Object.assign(zt.prototype,{resetDuration:function(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new zt(this.name,this.duration,e,this.blendMode)}});var ir={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function eh(e,t,n){let i=this,r=!1,o=0,s=0,a,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){s++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,s),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],f=c[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}var Xv=new eh;function Oe(e){this.manager=e!==void 0?e:Xv,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Oe.prototype,{load:function(){},loadAsync:function(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});var Ft={};function Jt(e){Oe.call(this,e)}Jt.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Jt,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ir.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;if(Ft[e]!==void 0){Ft[e].push({onLoad:t,onProgress:n,onError:i});return}let s=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(s),c;if(a){let l=a[1],h=!!a[2],u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let p=new Uint8Array(u.length);for(let v=0;v<u.length;v++)p[v]=u.charCodeAt(v);f==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(u,l);break;case"json":d=JSON.parse(u);break;default:d=u;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Ft[e]=[],Ft[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(l){let h=this.response,u=Ft[e];if(delete Ft[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ir.add(e,h);for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(h)}r.manager.itemEnd(e)}else{for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(l){let h=Ft[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let h=Ft[e];delete Ft[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(l){let h=Ft[e];delete Ft[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(e),c},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function jl(e){Oe.call(this,e)}jl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:jl,load:function(e,t,n,i){let r=this,o=new Jt(r.manager);o.setPath(r.path),o.load(e,function(s){try{t(r.parse(JSON.parse(s)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){let t=[];for(let n=0;n<e.length;n++){let i=zt.parse(e[n]);t.push(i)}return t}});function ql(e){Oe.call(this,e)}ql.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ql,load:function(e,t,n,i){let r=this,o=[],s=new Br;s.image=o;let a=new Jt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer");let c=0;function l(h){a.load(e[h],function(u){let d=r.parse(u,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(s.minFilter=Qe),s.format=d.format,s.needsUpdate=!0,t&&t(s))},n,i)}if(Array.isArray(e))for(let h=0,u=e.length;h<u;++h)l(h);else a.load(e,function(h){let u=r.parse(h,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let f=0;f<d;f++){o[f]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)o[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+p]),o[f].format=u.format,o[f].width=u.width,o[f].height=u.height}}else s.image.width=u.width,s.image.height=u.height,s.mipmaps=u.mipmaps;u.mipmapCount===1&&(s.minFilter=Qe),s.format=u.format,s.needsUpdate=!0,t&&t(s)},n,i);return s}});function Xl(e){Oe.call(this,e)}Xl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Xl,load:function(e,t,n,i){let r=this,o=new Gi,s=new Jt(this.manager);return s.setResponseType("arraybuffer"),s.setPath(this.path),s.load(e,function(a){let c=r.parse(a);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_t,o.wrapT=c.wrapT!==void 0?c.wrapT:_t,o.magFilter=c.magFilter!==void 0?c.magFilter:Qe,o.minFilter=c.minFilter!==void 0?c.minFilter:Qe,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ws),c.mipmapCount===1&&(o.minFilter=Qe),o.needsUpdate=!0,t&&t(o,c))},n,i),o}});function Qr(e){Oe.call(this,e)}Qr.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Qr,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ir.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let s=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1),ir.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}return s.addEventListener("load",a,!1),s.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}});function nc(e){Oe.call(this,e)}nc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:nc,load:function(e,t,n,i){let r=new Fn,o=new Qr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let s=0;function a(c){o.load(e[c],function(l){r.images[c]=l,s++,s===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)a(c);return r}});function ic(e){Oe.call(this,e)}ic.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ic,load:function(e,t,n,i){let r=new Be,o=new Qr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s;let a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=a?$n:Ht,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function de(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(de.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e){e===void 0&&(e=5);let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){let e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let s=0,a=r-1,c;for(;s<=a;)if(i=Math.floor(s+(a-s)/2),c=n[i]-o,c<0)s=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===o)return i/(r-1);let l=n[i],u=n[i+1]-l,d=(o-l)/u;return(i+d)/(r-1)},getTangent:function(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),s=this.getPoint(r),a=t||(o.isVector2?new z:new b);return a.copy(s).sub(o).normalize(),a},getTangentAt:function(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){let n=new b,i=[],r=[],o=[],s=new b,a=new Ae;for(let d=0;d<=e;d++){let f=d/e;i[d]=this.getTangentAt(f,new b),i[d].normalize()}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Me.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(s,f))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Me.clamp(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(d=-d);for(let f=1;f<=e;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function It(e,t,n,i,r,o,s,a){de.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=o||2*Math.PI,this.aClockwise=s||!1,this.aRotation=a||0}It.prototype=Object.create(de.prototype);It.prototype.constructor=It;It.prototype.isEllipseCurve=!0;It.prototype.getPoint=function(e,t){let n=t||new z,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let s=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,d=c-this.aY;a=u*l-d*h+this.aX,c=u*h+d*l+this.aY}return n.set(a,c)};It.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};It.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};It.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function Kr(e,t,n,i,r,o){It.call(this,e,t,n,n,i,r,o),this.type="ArcCurve"}Kr.prototype=Object.create(It.prototype);Kr.prototype.constructor=Kr;Kr.prototype.isArcCurve=!0;function Dc(){let e=0,t=0,n=0,i=0;function r(o,s,a,c){e=o,t=a,n=-3*o+3*s-2*a-c,i=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,h,u){let d=(s-o)/l-(a-o)/(l+h)+(a-s)/h,f=(a-s)/h-(c-s)/(h+u)+(c-a)/u;d*=h,f*=h,r(s,a,d,f)},calc:function(o){let s=o*o,a=s*o;return e+t*o+n*s+i*a}}}var Xo=new b,Sa=new Dc,Ta=new Dc,Ea=new Dc;function vt(e,t,n,i){de.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=n||"centripetal",this.tension=i||.5}vt.prototype=Object.create(de.prototype);vt.prototype.constructor=vt;vt.prototype.isCatmullRomCurve3=!0;vt.prototype.getPoint=function(e,t){let n=t||new b,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,s=Math.floor(o),a=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/r)+1)*r:a===0&&s===r-1&&(s=r-2,a=1);let c,l,h,u;if(this.closed||s>0?c=i[(s-1)%r]:(Xo.subVectors(i[0],i[1]).add(i[0]),c=Xo),l=i[s%r],h=i[(s+1)%r],this.closed||s+2<r?u=i[(s+2)%r]:(Xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(l),d),p=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(u),d);p<1e-4&&(p=1),f<1e-4&&(f=p),y<1e-4&&(y=p),Sa.initNonuniformCatmullRom(c.x,l.x,h.x,u.x,f,p,y),Ta.initNonuniformCatmullRom(c.y,l.y,h.y,u.y,f,p,y),Ea.initNonuniformCatmullRom(c.z,l.z,h.z,u.z,f,p,y)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,l.x,h.x,u.x,this.tension),Ta.initCatmullRom(c.y,l.y,h.y,u.y,this.tension),Ea.initCatmullRom(c.z,l.z,h.z,u.z,this.tension));return n.set(Sa.calc(a),Ta.calc(a),Ea.calc(a)),n};vt.prototype.copy=function(e){de.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};vt.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};vt.prototype.fromJSON=function(e){de.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function Yl(e,t,n,i,r){let o=(i-t)*.5,s=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+o+s)*c+(-3*n+3*i-2*o-s)*a+o*e+n}function Yv(e,t){let n=1-e;return n*n*t}function Zv(e,t){return 2*(1-e)*e*t}function Jv(e,t){return e*e*t}function Tr(e,t,n,i){return Yv(e,t)+Zv(e,n)+Jv(e,i)}function $v(e,t){let n=1-e;return n*n*n*t}function Qv(e,t){let n=1-e;return 3*n*n*e*t}function Kv(e,t){return 3*(1-e)*e*e*t}function ey(e,t){return e*e*e*t}function Er(e,t,n,i,r){return $v(e,t)+Qv(e,n)+Kv(e,i)+ey(e,r)}function $t(e,t,n,i){de.call(this),this.type="CubicBezierCurve",this.v0=e||new z,this.v1=t||new z,this.v2=n||new z,this.v3=i||new z}$t.prototype=Object.create(de.prototype);$t.prototype.constructor=$t;$t.prototype.isCubicBezierCurve=!0;$t.prototype.getPoint=function(e,t){let n=t||new z,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(Er(e,i.x,r.x,o.x,s.x),Er(e,i.y,r.y,o.y,s.y)),n};$t.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};$t.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};$t.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function pn(e,t,n,i){de.call(this),this.type="CubicBezierCurve3",this.v0=e||new b,this.v1=t||new b,this.v2=n||new b,this.v3=i||new b}pn.prototype=Object.create(de.prototype);pn.prototype.constructor=pn;pn.prototype.isCubicBezierCurve3=!0;pn.prototype.getPoint=function(e,t){let n=t||new b,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(Er(e,i.x,r.x,o.x,s.x),Er(e,i.y,r.y,o.y,s.y),Er(e,i.z,r.z,o.z,s.z)),n};pn.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};pn.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};pn.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function At(e,t){de.call(this),this.type="LineCurve",this.v1=e||new z,this.v2=t||new z}At.prototype=Object.create(de.prototype);At.prototype.constructor=At;At.prototype.isLineCurve=!0;At.prototype.getPoint=function(e,t){let n=t||new z;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};At.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};At.prototype.getTangent=function(e,t){let n=t||new z;return n.copy(this.v2).sub(this.v1).normalize(),n};At.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};At.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};At.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Qt(e,t){de.call(this),this.type="LineCurve3",this.v1=e||new b,this.v2=t||new b}Qt.prototype=Object.create(de.prototype);Qt.prototype.constructor=Qt;Qt.prototype.isLineCurve3=!0;Qt.prototype.getPoint=function(e,t){let n=t||new b;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};Qt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Qt.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Qt.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Qt.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Kt(e,t,n){de.call(this),this.type="QuadraticBezierCurve",this.v0=e||new z,this.v1=t||new z,this.v2=n||new z}Kt.prototype=Object.create(de.prototype);Kt.prototype.constructor=Kt;Kt.prototype.isQuadraticBezierCurve=!0;Kt.prototype.getPoint=function(e,t){let n=t||new z,i=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,i.x,r.x,o.x),Tr(e,i.y,r.y,o.y)),n};Kt.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Kt.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Kt.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function mn(e,t,n){de.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new b,this.v1=t||new b,this.v2=n||new b}mn.prototype=Object.create(de.prototype);mn.prototype.constructor=mn;mn.prototype.isQuadraticBezierCurve3=!0;mn.prototype.getPoint=function(e,t){let n=t||new b,i=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,i.x,r.x,o.x),Tr(e,i.y,r.y,o.y),Tr(e,i.z,r.z,o.z)),n};mn.prototype.copy=function(e){return de.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};mn.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};mn.prototype.fromJSON=function(e){return de.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function en(e){de.call(this),this.type="SplineCurve",this.points=e||[]}en.prototype=Object.create(de.prototype);en.prototype.constructor=en;en.prototype.isSplineCurve=!0;en.prototype.getPoint=function(e,t){let n=t||new z,i=this.points,r=(i.length-1)*e,o=Math.floor(r),s=r-o,a=i[o===0?o:o-1],c=i[o],l=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Yl(s,a.x,c.x,l.x,h.x),Yl(s,a.y,c.y,l.y,h.y)),n};en.prototype.copy=function(e){de.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this};en.prototype.toJSON=function(){let e=de.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e};en.prototype.fromJSON=function(e){de.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new z().fromArray(i))}return this};var rc=Object.freeze({__proto__:null,ArcCurve:Kr,CatmullRomCurve3:vt,CubicBezierCurve:$t,CubicBezierCurve3:pn,EllipseCurve:It,LineCurve:At,LineCurve3:Qt,QuadraticBezierCurve:Kt,QuadraticBezierCurve3:mn,SplineCurve:en});function Rn(){de.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Rn.prototype=Object.assign(Object.create(de.prototype),{constructor:Rn,add:function(e){this.curves.push(e)},closePath:function(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new At(t,e))},getPoint:function(e){let t=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=t){let r=n[i]-t,o=this.curves[i],s=o.getLength(),a=s===0?0:1-r/s;return o.getPointAt(a)}i++}return null},getLength:function(){let e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],s=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,a=o.getPoints(s);for(let c=0;c<a.length;c++){let l=a[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){de.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){let e=de.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){de.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new rc[i.type]().fromJSON(i))}return this}});function Yt(e){Rn.call(this),this.type="Path",this.currentPoint=new z,e&&this.setFromPoints(e)}Yt.prototype=Object.assign(Object.create(Rn.prototype),{constructor:Yt,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){let n=new At(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){let r=new Kt(this.currentPoint.clone(),new z(e,t),new z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,o){let s=new $t(this.currentPoint.clone(),new z(e,t),new z(n,i),new z(r,o));return this.curves.push(s),this.currentPoint.set(r,o),this},splineThru:function(e){let t=[this.currentPoint.clone()].concat(e),n=new en(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,o){let s=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+s,t+a,n,i,r,o),this},absarc:function(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this},ellipse:function(e,t,n,i,r,o,s,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,i,r,o,s,a),this},absellipse:function(e,t,n,i,r,o,s,a){let c=new It(e,t,n,i,r,o,s,a);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return Rn.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){let e=Rn.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Rn.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function Qn(e){Yt.call(this,e),this.uuid=Me.generateUUID(),this.type="Shape",this.holes=[]}Qn.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Qn,getPointsHoles:function(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Yt.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){let e=Yt.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){Yt.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Yt().fromJSON(i))}return this}});function Ge(e,t){te.call(this),this.type="Light",this.color=new re(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}Ge.prototype=Object.assign(Object.create(te.prototype),{constructor:Ge,isLight:!0,copy:function(e){return te.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function oc(e,t,n){Ge.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(te.DefaultUp),this.updateMatrix(),this.groundColor=new re(t)}oc.prototype=Object.assign(Object.create(Ge.prototype),{constructor:oc,isHemisphereLight:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function gn(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new z(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}Object.assign(gn.prototype,{_projScreenMatrix:new Ae,_lightPositionWorld:new b,_lookTarget:new b,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){let t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,o=this._lightPositionWorld;o.setFromMatrixPosition(e.matrixWorld),t.position.copy(o),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function sc(){gn.call(this,new rt(50,1,.5,500))}sc.prototype=Object.assign(Object.create(gn.prototype),{constructor:sc,isSpotLightShadow:!0,updateMatrices:function(e){let t=this.camera,n=Me.RAD2DEG*2*e.angle,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),gn.prototype.updateMatrices.call(this,e)}});function ac(e,t,n,i,r,o){Ge.call(this,e,t),this.type="SpotLight",this.position.copy(te.DefaultUp),this.updateMatrix(),this.target=new te,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=o!==void 0?o:1,this.shadow=new sc}ac.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ac,isSpotLight:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function cc(){gn.call(this,new rt(90,1,.5,500)),this._frameExtents=new z(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}cc.prototype=Object.assign(Object.create(gn.prototype),{constructor:cc,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);let n=this.camera,i=this.matrix,r=this._lightPositionWorld,o=this._lookTarget,s=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),o.copy(n.position),o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(o),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),s.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s)}});function lc(e,t,n,i){Ge.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new cc}lc.prototype=Object.assign(Object.create(Ge.prototype),{constructor:lc,isPointLight:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function eo(e,t,n,i,r,o){hn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=o!==void 0?o:2e3,this.updateProjectionMatrix()}eo.prototype=Object.assign(Object.create(hn.prototype),{constructor:eo,isOrthographicCamera:!0,copy:function(e,t){return hn.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,s=i+t,a=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=l*this.view.offsetY,a=s-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function uc(){gn.call(this,new eo(-5,5,5,-5,.5,500))}uc.prototype=Object.assign(Object.create(gn.prototype),{constructor:uc,isDirectionalLightShadow:!0,updateMatrices:function(e){gn.prototype.updateMatrices.call(this,e)}});function hc(e,t){Ge.call(this,e,t),this.type="DirectionalLight",this.position.copy(te.DefaultUp),this.updateMatrix(),this.target=new te,this.shadow=new uc}hc.prototype=Object.assign(Object.create(Ge.prototype),{constructor:hc,isDirectionalLight:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function to(e,t){Ge.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}to.prototype=Object.assign(Object.create(Ge.prototype),{constructor:to,isAmbientLight:!0});function fc(e,t,n,i){Ge.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}fc.prototype=Object.assign(Object.create(Ge.prototype),{constructor:fc,isRectAreaLight:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){let t=Ge.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});function Ic(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}Object.assign(Ic.prototype,{isSphericalHarmonics3:!0,set:function(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this},zero:function(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this},getAt:function(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t},getIrradianceAt:function(e,t){let n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t},add:function(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this},addScaledSH:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this},scale:function(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this},lerp:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this},equals:function(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0},copy:function(e){return this.set(e.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(e,t){t===void 0&&(t=0);let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}});Object.assign(Ic,{getBasisAt:function(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}});function Gt(e,t){Ge.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new Ic}Gt.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Gt,isLightProbe:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){let t=Ge.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function dc(e){Oe.call(this,e),this.textures={}}dc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:dc,load:function(e,t,n,i){let r=this,o=new Jt(r.manager);o.setPath(r.path),o.load(e,function(s){try{t(r.parse(JSON.parse(s)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=new Wv[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new re().setHex(e.sheen)),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new re().setHex(o.value);break;case"v2":i.uniforms[r].value=new z().fromArray(o.value);break;case"v3":i.uniforms[r].value=new b().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Ne().fromArray(o.value);break;case"m3":i.uniforms[r].value=new ht().fromArray(o.value);case"m4":i.uniforms[r].value=new Ae().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new z().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),i},setTextures:function(e){return this.textures=e,this}});var th={decodeText:function(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function Us(){oe.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Us.prototype=Object.assign(Object.create(oe.prototype),{constructor:Us,isInstancedBufferGeometry:!0,copy:function(e){return oe.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let e=oe.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function pc(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),ge.call(this,e,t,n),this.meshPerAttribute=i||1}pc.prototype=Object.assign(Object.create(ge.prototype),{constructor:pc,isInstancedBufferAttribute:!0,copy:function(e){return ge.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){let e=ge.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function mc(e){Oe.call(this,e)}mc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:mc,load:function(e,t,n,i){let r=this,o=new Jt(r.manager);o.setPath(r.path),o.load(e,function(s){try{t(r.parse(JSON.parse(s)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){let t={},n={};function i(d,f){if(t[f]!==void 0)return t[f];let y=d.interleavedBuffers[f],v=r(d,y.buffer),m=new Yo[y.type](v),g=new Ct(m,y.stride);return g.uuid=y.uuid,t[f]=g,g}function r(d,f){if(n[f]!==void 0)return n[f];let y=d.arrayBuffers[f],v=new Uint32Array(y).buffer;return n[f]=v,v}let o=e.isInstancedBufferGeometry?new Us:new oe,s=e.data.index;if(s!==void 0){let d=new Yo[s.type](s.array);o.setIndex(new ge(d,1))}let a=e.data.attributes;for(let d in a){let f=a[d],p;if(f.isInterleavedBufferAttribute){let y=i(e.data,f.data);p=new ri(y,f.itemSize,f.offset,f.normalized)}else{let y=new Yo[f.type](f.array),v=f.isInstancedBufferAttribute?pc:ge;p=new v(y,f.itemSize,f.normalized)}f.name!==void 0&&(p.name=f.name),o.setAttribute(d,p)}let c=e.data.morphAttributes;if(c)for(let d in c){let f=c[d],p=[];for(let y=0,v=f.length;y<v;y++){let m=f[y],g;if(m.isInterleavedBufferAttribute){let _=i(e.data,m.data);g=new ri(_,m.itemSize,m.offset,m.normalized)}else{let _=new Yo[m.type](m.array);g=new ge(_,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),p.push(g)}o.morphAttributes[d]=p}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,f=h.length;d!==f;++d){let p=h[d];o.addGroup(p.start,p.count,p.materialIndex)}let u=e.data.boundingSphere;if(u!==void 0){let d=new b;u.center!==void 0&&d.fromArray(u.center),o.boundingSphere=new yn(d,u.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}});var Yo={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gc(e){Oe.call(this,e)}gc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:gc,load:function(e,t,n,i){let r=this,o=this.path===""?th.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let s=new Jt(r.manager);s.setPath(this.path),s.load(e,function(a){let c=null;try{c=JSON.parse(a)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}let l=c.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)},parse:function(e,t){let n=this.parseShape(e.shapes),i=this.parseGeometries(e.geometries,n),r=this.parseImages(e.images,function(){t!==void 0&&t(a)}),o=this.parseTextures(e.textures,r),s=this.parseMaterials(e.materials,o),a=this.parseObject(e.object,i,s);return e.animations&&(a.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(a),a},parseShape:function(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Qn().fromJSON(e[n]);t[r.uuid]=r}return t},parseGeometries:function(e,t){let n={},i;if(e!==void 0){let r=new mc;for(let o=0,s=e.length;o<s;o++){let a,c=e[o];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new mt[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":a=new mt[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":a=new mt[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":a=new mt[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":a=new mt[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":a=new mt[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":a=new mt[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":a=new mt[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":a=new mt[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":a=new mt[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":a=new mt[c.type](new rc[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":a=new mt[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":a=new mt[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let h=0,u=c.shapes.length;h<u;h++){let d=t[c.shapes[h]];i.push(d)}a=new mt[c.type](i,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let h=0,u=c.shapes.length;h<u;h++){let d=t[c.shapes[h]];i.push(d)}let l=c.options.extrudePath;l!==void 0&&(c.options.extrudePath=new rc[l.type]().fromJSON(l)),a=new mt[c.type](i,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),a.isBufferGeometry===!0&&c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n},parseMaterials:function(e,t){let n={},i={};if(e!==void 0){let r=new dc;r.setTextures(t);for(let o=0,s=e.length;o<s;o++){let a=e[o];if(a.type==="MultiMaterial"){let c=[];for(let l=0;l<a.materials.length;l++){let h=a.materials[l];n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),c.push(n[h.uuid])}i[a.uuid]=c}else n[a.uuid]===void 0&&(n[a.uuid]=r.parse(a)),i[a.uuid]=n[a.uuid]}}return i},parseAnimations:function(e){let t=[];for(let n=0;n<e.length;n++){let i=e[n],r=zt.parse(i);i.uuid!==void 0&&(r.uuid=i.uuid),t.push(r)}return t},parseImages:function(e,t){let n=this,i={},r;function o(s){return n.manager.itemStart(s),r.load(s,function(){n.manager.itemEnd(s)},void 0,function(){n.manager.itemError(s),n.manager.itemEnd(s)})}if(e!==void 0&&e.length>0){let s=new eh(t);r=new Qr(s),r.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.url;if(Array.isArray(h)){i[l.uuid]=[];for(let u=0,d=h.length;u<d;u++){let f=h[u],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;i[l.uuid].push(o(p))}}else{let u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.resourcePath+l.url;i[l.uuid]=o(u)}}}return i},parseTextures:function(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){let s=e[r];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),t[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);let a;Array.isArray(t[s.image])?a=new Fn(t[s.image]):a=new Be(t[s.image]),a.needsUpdate=!0,a.uuid=s.uuid,s.name!==void 0&&(a.name=s.name),s.mapping!==void 0&&(a.mapping=n(s.mapping,ty)),s.offset!==void 0&&a.offset.fromArray(s.offset),s.repeat!==void 0&&a.repeat.fromArray(s.repeat),s.center!==void 0&&a.center.fromArray(s.center),s.rotation!==void 0&&(a.rotation=s.rotation),s.wrap!==void 0&&(a.wrapS=n(s.wrap[0],Zl),a.wrapT=n(s.wrap[1],Zl)),s.format!==void 0&&(a.format=s.format),s.type!==void 0&&(a.type=s.type),s.encoding!==void 0&&(a.encoding=s.encoding),s.minFilter!==void 0&&(a.minFilter=n(s.minFilter,Jl)),s.magFilter!==void 0&&(a.magFilter=n(s.magFilter,Jl)),s.anisotropy!==void 0&&(a.anisotropy=s.anisotropy),s.flipY!==void 0&&(a.flipY=s.flipY),s.premultiplyAlpha!==void 0&&(a.premultiplyAlpha=s.premultiplyAlpha),s.unpackAlignment!==void 0&&(a.unpackAlignment=s.unpackAlignment),i[s.uuid]=a}return i},parseObject:function(e,t,n){let i;function r(c){return t[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",c),t[c]}function o(c){if(c!==void 0){if(Array.isArray(c)){let l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),l.push(n[d])}return l}return n[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",c),n[c]}}let s,a;switch(e.type){case"Scene":i=new hs,e.background!==void 0&&Number.isInteger(e.background)&&(i.background=new re(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?i.fog=new Ga(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(i.fog=new ii(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":i=new rt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(i.focus=e.focus),e.zoom!==void 0&&(i.zoom=e.zoom),e.filmGauge!==void 0&&(i.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(i.filmOffset=e.filmOffset),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"OrthographicCamera":i=new eo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(i.zoom=e.zoom),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"AmbientLight":i=new to(e.color,e.intensity);break;case"DirectionalLight":i=new hc(e.color,e.intensity);break;case"PointLight":i=new lc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":i=new fc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":i=new ac(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":i=new oc(e.color,e.groundColor,e.intensity);break;case"LightProbe":i=new Gt().fromJSON(e);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":s=r(e.geometry),a=o(e.material),i=new He(s,a);break;case"InstancedMesh":s=r(e.geometry),a=o(e.material);let c=e.count,l=e.instanceMatrix;i=new ja(s,a,c),i.instanceMatrix=new ge(new Float32Array(l.array),16);break;case"LOD":i=new ms;break;case"Line":i=new Dt(r(e.geometry),o(e.material),e.mode);break;case"LineLoop":i=new qa(r(e.geometry),o(e.material));break;case"LineSegments":i=new nt(r(e.geometry),o(e.material));break;case"PointCloud":case"Points":i=new Or(r(e.geometry),o(e.material));break;case"Sprite":i=new Va(o(e.material));break;case"Group":i=new ni;break;default:i=new te}if(i.uuid=e.uuid,e.name!==void 0&&(i.name=e.name),e.matrix!==void 0?(i.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=e.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(e.position!==void 0&&i.position.fromArray(e.position),e.rotation!==void 0&&i.rotation.fromArray(e.rotation),e.quaternion!==void 0&&i.quaternion.fromArray(e.quaternion),e.scale!==void 0&&i.scale.fromArray(e.scale)),e.castShadow!==void 0&&(i.castShadow=e.castShadow),e.receiveShadow!==void 0&&(i.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(i.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(i.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(i.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(i.visible=e.visible),e.frustumCulled!==void 0&&(i.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(i.renderOrder=e.renderOrder),e.userData!==void 0&&(i.userData=e.userData),e.layers!==void 0&&(i.layers.mask=e.layers),e.children!==void 0){let c=e.children;for(let l=0;l<c.length;l++)i.add(this.parseObject(c[l],t,n))}if(e.type==="LOD"){e.autoUpdate!==void 0&&(i.autoUpdate=e.autoUpdate);let c=e.levels;for(let l=0;l<c.length;l++){let h=c[l],u=i.getObjectByProperty("uuid",h.object);u!==void 0&&i.addLevel(u,h.distance)}}return i}});var ty={UVMapping:Mc,CubeReflectionMapping:Sc,CubeRefractionMapping:Tc,EquirectangularReflectionMapping:Cu,EquirectangularRefractionMapping:Ec,CubeUVReflectionMapping:co,CubeUVRefractionMapping:Ac},Zl={RepeatWrapping:ft,ClampToEdgeWrapping:_t,MirroredRepeatWrapping:ss},Jl={NearestFilter:Ue,NearestMipmapNearestFilter:Vt,NearestMipmapLinearFilter:Bn,LinearFilter:Qe,LinearMipmapNearestFilter:Lu,LinearMipmapLinearFilter:Ws};function $l(e){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Oe.call(this,e),this.options={premultiplyAlpha:"none"}}$l.prototype=Object.assign(Object.create(Oe.prototype),{constructor:$l,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ir.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;fetch(e).then(function(s){return s.blob()}).then(function(s){return createImageBitmap(s,r.options)}).then(function(s){ir.add(e,s),t&&t(s),r.manager.itemEnd(e)}).catch(function(s){i&&i(s),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function nh(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}Object.assign(nh.prototype,{moveTo:function(e,t){return this.currentPath=new Yt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(m){let g=[];for(let _=0,x=m.length;_<x;_++){let w=m[_],E=new Qn;E.curves=w.curves,g.push(E)}return g}function i(m,g){let _=g.length,x=!1;for(let w=_-1,E=0;E<_;w=E++){let A=g[w],F=g[E],C=F.x-A.x,q=F.y-A.y;if(Math.abs(q)>Number.EPSILON){if(q<0&&(A=g[E],C=-C,F=g[w],q=-q),m.y<A.y||m.y>F.y)continue;if(m.y===A.y){if(m.x===A.x)return!0}else{let N=q*(m.x-A.x)-C*(m.y-A.y);if(N===0)return!0;if(N<0)continue;x=!x}}else{if(m.y!==A.y)continue;if(F.x<=m.x&&m.x<=A.x||A.x<=m.x&&m.x<=F.x)return!0}}return x}let r=Nn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let s,a,c,l=[];if(o.length===1)return a=o[0],c=new Qn,c.curves=a.curves,l.push(c),l;let h=!r(o[0].getPoints());h=e?!h:h;let u=[],d=[],f=[],p=0,y;d[p]=void 0,f[p]=[];for(let m=0,g=o.length;m<g;m++)a=o[m],y=a.getPoints(),s=r(y),s=e?!s:s,s?(!h&&d[p]&&p++,d[p]={s:new Qn,p:y},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:y[0]});if(!d[0])return n(o);if(d.length>1){let m=!1,g=[];for(let _=0,x=d.length;_<x;_++)u[_]=[];for(let _=0,x=d.length;_<x;_++){let w=f[_];for(let E=0;E<w.length;E++){let A=w[E],F=!0;for(let C=0;C<d.length;C++)i(A.p,d[C].p)&&(_!==C&&g.push({froms:_,tos:C,hole:E}),F?(F=!1,u[C].push(A)):m=!0);F&&u[_].push(A)}}g.length>0&&(m||(f=u))}let v;for(let m=0,g=d.length;m<g;m++){c=d[m].s,l.push(c),v=f[m];for(let _=0,x=v.length;_<x;_++)c.holes.push(v[_].h)}return l}});function ih(e){this.type="Font",this.data=e}Object.assign(ih.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);let n=[],i=ny(e,t,this.data);for(let r=0,o=i.length;r<o;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function ny(e,t,n){let i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,s=[],a=0,c=0;for(let l=0;l<i.length;l++){let h=i[l];if(h===`
`)a=0,c-=o;else{let u=iy(h,r,a,c,n);a+=u.offsetX,s.push(u.path)}}return s}function iy(e,t,n,i,r){let o=r.glyphs[e]||r.glyphs["?"];if(!o){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}let s=new nh,a,c,l,h,u,d,f,p;if(o.o){let y=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let v=0,m=y.length;v<m;)switch(y[v++]){case"m":a=y[v++]*t+n,c=y[v++]*t+i,s.moveTo(a,c);break;case"l":a=y[v++]*t+n,c=y[v++]*t+i,s.lineTo(a,c);break;case"q":l=y[v++]*t+n,h=y[v++]*t+i,u=y[v++]*t+n,d=y[v++]*t+i,s.quadraticCurveTo(u,d,l,h);break;case"b":l=y[v++]*t+n,h=y[v++]*t+i,u=y[v++]*t+n,d=y[v++]*t+i,f=y[v++]*t+n,p=y[v++]*t+i,s.bezierCurveTo(u,d,f,p,l,h);break}}return{offsetX:o.ha*t,path:s}}function Ql(e){Oe.call(this,e)}Ql.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Ql,load:function(e,t,n,i){let r=this,o=new Jt(this.manager);o.setPath(this.path),o.load(e,function(s){let a;try{a=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(s.substring(65,s.length-2))}let c=r.parse(a);t&&t(c)},n,i)},parse:function(e){return new ih(e)}});var Zo,rh={getContext:function(){return Zo===void 0&&(Zo=new(window.AudioContext||window.webkitAudioContext)),Zo},setContext:function(e){Zo=e}};function vc(e){Oe.call(this,e)}vc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:vc,load:function(e,t,n,i){let r=this,o=new Jt(r.manager);o.setResponseType("arraybuffer"),o.setPath(r.path),o.load(e,function(s){try{let a=s.slice(0);rh.getContext().decodeAudioData(a,function(l){t(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)}});function Kl(e,t,n){Gt.call(this,void 0,n);let i=new re().set(e),r=new re().set(t),o=new b(i.r,i.g,i.b),s=new b(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(s).multiplyScalar(a),this.sh.coefficients[1].copy(o).sub(s).multiplyScalar(c)}Kl.prototype=Object.assign(Object.create(Gt.prototype),{constructor:Kl,isHemisphereLightProbe:!0,copy:function(e){return Gt.prototype.copy.call(this,e),this},toJSON:function(e){return Gt.prototype.toJSON.call(this,e)}});function eu(e,t){Gt.call(this,void 0,t);let n=new re().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}eu.prototype=Object.assign(Object.create(Gt.prototype),{constructor:eu,isAmbientLightProbe:!0,copy:function(e){return Gt.prototype.copy.call(this,e),this},toJSON:function(e){return Gt.prototype.toJSON.call(this,e)}});var tu=new Ae,nu=new Ae;function ry(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new rt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new rt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(ry.prototype,{update:function(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;let i=e.projectionMatrix.clone(),r=t.eyeSep/2,o=r*t.near/t.focus,s=t.near*Math.tan(Me.DEG2RAD*t.fov*.5)/t.zoom,a,c;nu.elements[12]=-r,tu.elements[12]=r,a=-s*t.aspect+o,c=s*t.aspect+o,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-s*t.aspect-o,c=s*t.aspect-o,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(nu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(tu)}});function oh(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(oh.prototype,{start:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=(typeof performance>"u"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}});var qn=new b,iu=new ot,oy=new b,Xn=new b;function ru(){te.call(this),this.type="AudioListener",this.context=rh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new oh}ru.prototype=Object.assign(Object.create(te.prototype),{constructor:ru,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this},updateMatrixWorld:function(e){te.prototype.updateMatrixWorld.call(this,e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(qn,iu,oy),Xn.set(0,0,-1).applyQuaternion(iu),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(qn.x,i),t.positionY.linearRampToValueAtTime(qn.y,i),t.positionZ.linearRampToValueAtTime(qn.z,i),t.forwardX.linearRampToValueAtTime(Xn.x,i),t.forwardY.linearRampToValueAtTime(Xn.y,i),t.forwardZ.linearRampToValueAtTime(Xn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(qn.x,qn.y,qn.z),t.setOrientation(Xn.x,Xn.y,Xn.z,n.x,n.y,n.z)}});function no(e){te.call(this),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}no.prototype=Object.assign(Object.create(te.prototype),{constructor:no,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setMediaElementSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this},setMediaStreamSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},setDetune:function(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(e){return this.loopStart=e,this},setLoopEnd:function(e){return this.loopEnd=e,this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}});var Yn=new b,ou=new ot,sy=new b,Zn=new b;function su(e){no.call(this,e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}su.prototype=Object.assign(Object.create(no.prototype),{constructor:su,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){return this.panner.refDistance=e,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){return this.panner.rolloffFactor=e,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){return this.panner.distanceModel=e,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){return this.panner.maxDistance=e,this},setDirectionalCone:function(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(e){if(te.prototype.updateMatrixWorld.call(this,e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Yn,ou,sy),Zn.set(0,0,1).applyQuaternion(ou);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Yn.x,n),t.positionY.linearRampToValueAtTime(Yn.y,n),t.positionZ.linearRampToValueAtTime(Yn.z,n),t.orientationX.linearRampToValueAtTime(Zn.x,n),t.orientationY.linearRampToValueAtTime(Zn.y,n),t.orientationZ.linearRampToValueAtTime(Zn.z,n)}else t.setPosition(Yn.x,Yn.y,Yn.z),t.setOrientation(Zn.x,Zn.y,Zn.z)}});function sh(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(sh.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}});function ah(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(ah.prototype,{accumulate:function(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let s=0;s!==i;++s)n[r+s]=n[s];o=t}else{o+=t;let s=t/o;this._mixBufferRegion(n,r,0,s,i)}this.cumulativeWeight=o},accumulateAdditive:function(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){s.setValue(n,i);break}},saveOriginalState:function(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]},_slerp:function(e,t,n,i){ot.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){let o=this._workIndex*r;ot.multiplyQuaternionsFlat(e,o,e,t,e,n),ot.slerpFlat(e,t,e,t,e,o,i)},_lerp:function(e,t,n,i,r){let o=1-i;for(let s=0;s!==r;++s){let a=t+s;e[a]=e[a]*o+e[n+s]*i}},_lerpAdditive:function(e,t,n,i,r){for(let o=0;o!==r;++o){let s=t+o;e[s]=e[s]+e[n+o]*i}}});var Nc="\\[\\]\\.:\\/",ay=new RegExp("["+Nc+"]","g"),Oc="[^"+Nc+"]",cy="[^"+Nc.replace("\\.","")+"]",ly=/((?:WC+[\/:])*)/.source.replace("WC",Oc),uy=/(WCOD+)?/.source.replace("WCOD",cy),hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),dy=new RegExp("^"+ly+uy+hy+fy+"$"),py=["material","materials","bones"];function ch(e,t,n){let i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(ch.prototype,{getValue:function(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function gt(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(gt,{Composite:ch,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(ay,"")},parseTrackName:function(e){let t=dy.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);py.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let s=r[o];if(s.name===t||s.uuid===t)return s;let a=n(s.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}});Object.assign(gt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++]},function(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][s]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(gt.prototype,{_getValue_unbound:gt.prototype.getValue,_setValue_unbound:gt.prototype.setValue});function my(){this.uuid=Me.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(my.prototype,{isAnimationObjectGroup:!0,add:function(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,s,a=e.length,c=this.nCachedObjects_;for(let l=0,h=arguments.length;l!==h;++l){let u=arguments[l],d=u.uuid,f=t[d];if(f===void 0){f=a++,t[d]=f,e.push(u);for(let p=0,y=o;p!==y;++p)r[p].push(new gt(u,n[p],i[p]))}else if(f<c){s=e[f];let p=--c,y=e[p];t[y.uuid]=f,e[f]=y,t[d]=p,e[p]=u;for(let v=0,m=o;v!==m;++v){let g=r[v],_=g[p],x=g[f];g[f]=_,x===void 0&&(x=new gt(u,n[v],i[v])),g[p]=x}}else e[f]!==s&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,s=arguments.length;o!==s;++o){let a=arguments[o],c=a.uuid,l=t[c];if(l!==void 0&&l>=r){let h=r++,u=e[h];t[u.uuid]=l,e[l]=u,t[c]=h,e[h]=a;for(let d=0,f=i;d!==f;++d){let p=n[d],y=p[h],v=p[l];p[l]=y,p[h]=v}}}this.nCachedObjects_=r},uncache:function(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=e.length;for(let s=0,a=arguments.length;s!==a;++s){let c=arguments[s],l=c.uuid,h=t[l];if(h!==void 0)if(delete t[l],h<r){let u=--r,d=e[u],f=--o,p=e[f];t[d.uuid]=h,e[h]=d,t[p.uuid]=u,e[u]=p,e.pop();for(let y=0,v=i;y!==v;++y){let m=n[y],g=m[u],_=m[f];m[h]=g,m[u]=_,m.pop()}}else{let u=--o,d=e[u];t[d.uuid]=h,e[h]=d,e.pop();for(let f=0,p=i;f!==p;++f){let y=n[f];y[h]=y[u],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,s=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,h=new Array(c);i=r.length,n[e]=i,o.push(e),s.push(t),r.push(h);for(let u=l,d=a.length;u!==d;++u){let f=a[u];h[u]=new gt(f,e,t)}return h},unsubscribe_:function(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,s=o.length-1,a=o[s],c=e[s];t[c]=n,o[n]=a,o.pop(),r[n]=r[s],r.pop(),i[n]=i[s],i.pop()}}});function lh(e,t,n,i){this._mixer=e,this._clip=t,this._localRoot=n||null,this.blendMode=i||t.blendMode;let r=t.tracks,o=r.length,s=new Array(o),a={endingStart:Ui,endingEnd:Ui};for(let c=0;c!==o;++c){let l=r[c].createInterpolant(null);s[c]=l,l.settings=a}this._interpolantSettings=a,this._interpolants=s,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(lh.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,s=i/r;e.warp(1,o,t),this.warp(s,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,s=this._timeScaleInterpolant;s===null&&(s=i._lendControlInterpolant(),this._timeScaleInterpolant=s);let a=s.parameterPositions,c=s.sampleValues;return a[0]=r,a[1]=r+n,c[0]=e/o,c[1]=t/o,this},stopWarping:function(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let a=(e-r)*n;if(a<0||n===0)return;this._startTime=null,t=n*a}t*=this._updateTimeScale(e);let o=this._updateTime(t),s=this._updateWeight(e);if(s>0){let a=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pu:for(let l=0,h=a.length;l!==h;++l)a[l].evaluate(o),c[l].accumulateAdditive(s);break;case Cc:default:for(let l=0,h=a.length;l!==h;++l)a[l].evaluate(o),c[l].accumulate(i,s)}}},_updateWeight:function(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t},_updateTime:function(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===cd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===sd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let s=Math.floor(i/t);i-=t*s,r+=Math.abs(s);let a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i},_setEndings:function(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Pi,i.endingEnd=Pi):(e?i.endingStart=this.zeroSlopeAtStart?Pi:Ui:i.endingStart=us,t?i.endingEnd=this.zeroSlopeAtEnd?Pi:Ui:i.endingEnd=us)},_scheduleFading:function(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let s=o.parameterPositions,a=o.sampleValues;return s[0]=r,a[0]=t,s[1]=r+e,a[1]=n,this}});function au(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}au.prototype=Object.assign(Object.create(vn.prototype),{constructor:au,_bindAction:function(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,s=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let h=0;h!==r;++h){let u=i[h],d=u.name,f=l[d];if(f!==void 0)o[h]=f;else{if(f=o[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,d));continue}let p=t&&t._propertyBindings[h].binding.parsedPath;f=new ah(gt.create(n,d,p),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,d),o[h]=f}s[h].resultBuffer=f.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let s=o.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e},_removeInactiveAction:function(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,s=o[r],a=s.knownActions,c=a[a.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),e._byClipCacheIndex=null;let h=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],a.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,s=o[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete s[r],Object.keys(s).length===0&&delete o[i]},_lendBinding:function(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Bs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?zt.findByName(i,e):e,s=o!==null?o.uuid:e,a=this._actionsByClip[s],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Cc),a!==void 0){let h=a.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=a.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let l=new lh(this,o,t,n);return this._bindAction(l,c),this._addInactiveAction(l,s,r),l},existingAction:function(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?zt.findByName(n,e):e,o=r?r.uuid:e,s=this._actionsByClip[o];return s!==void 0&&s.actionByRoot[i]||null},stopAllAction:function(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let s=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)s[c].apply(o);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let s=0,a=o.length;s!==a;++s){let c=o[s];this._deactivateAction(c);let l=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let s=n[o].actionByRoot,a=s[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let s=r[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function yc(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}yc.prototype.clone=function(){return new yc(this.value.clone===void 0?this.value:this.value.clone())};function cu(e,t,n){Ct.call(this,e,t),this.meshPerAttribute=n||1}cu.prototype=Object.assign(Object.create(Ct.prototype),{constructor:cu,isInstancedInterleavedBuffer:!0,copy:function(e){return Ct.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){let t=Ct.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){let t=Ct.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function uh(e,t,n,i){this.ray=new sr(e,t),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function lu(e,t){return e.distance-t.distance}function xc(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){let r=e.children;for(let o=0,s=r.length;o<s;o++)xc(r[o],t,n,!0)}}Object.assign(uh.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,n){let i=n||[];return xc(e,this,i,t),i.sort(lu),i},intersectObjects:function(e,t,n){let i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,o=e.length;r<o;r++)xc(e[r],this,i,t);return i.sort(lu),i}});function gy(e,t,n){return this.radius=e!==void 0?e:1,this.phi=t!==void 0?t:0,this.theta=n!==void 0?n:0,this}Object.assign(gy.prototype,{set:function(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this},makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Me.clamp(t/this.radius,-1,1))),this}});function vy(e,t,n){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=n!==void 0?n:0,this}Object.assign(vy.prototype,{set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}});var uu=new z;function hh(e,t){this.min=e!==void 0?e:new z(1/0,1/0),this.max=t!==void 0?t:new z(-1/0,-1/0)}Object.assign(hh.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){let n=uu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new z),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new z),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new z),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new z),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return uu.copy(e).clamp(this.min,this.max).sub(e).length()},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});var hu=new b,Jo=new b;function fh(e,t){this.start=e!==void 0?e:new b,this.end=t!==void 0?t:new b}Object.assign(fh.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new b),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new b),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new b),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(e,t){hu.subVectors(e,this.start),Jo.subVectors(this.end,this.start);let n=Jo.dot(Jo),r=Jo.dot(hu)/n;return t&&(r=Me.clamp(r,0,1)),r},closestPointToPoint:function(e,t,n){let i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new b),this.delta(n).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}});function zs(e){te.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}zs.prototype=Object.create(te.prototype);zs.prototype.constructor=zs;zs.prototype.isImmediateRenderObject=!0;var fu=new b;function io(e,t){te.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;let n=new oe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,s=1,a=32;o<a;o++,s++){let c=o/a*Math.PI*2,l=s/a*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(l),Math.sin(l),1)}n.setAttribute("position",new ee(i,3));let r=new Ke({fog:!1,toneMapped:!1});this.cone=new nt(n,r),this.add(this.cone),this.update()}io.prototype=Object.create(te.prototype);io.prototype.constructor=io;io.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};io.prototype.update=function(){this.light.updateMatrixWorld();let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),fu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(fu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var Ln=new b,$o=new Ae,Aa=new Ae;function dh(e){let t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,dh(e.children[n]));return t}function rr(e){let t=dh(e),n=new oe,i=[],r=[],o=new re(0,0,1),s=new re(0,1,0);for(let c=0;c<t.length;c++){let l=t[c];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(s.r,s.g,s.b))}n.setAttribute("position",new ee(i,3)),n.setAttribute("color",new ee(r,3));let a=new Ke({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});nt.call(this,n,a),this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}rr.prototype=Object.create(nt.prototype);rr.prototype.constructor=rr;rr.prototype.isSkeletonHelper=!0;rr.prototype.updateMatrixWorld=function(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Aa.getInverse(this.root.matrixWorld);for(let r=0,o=0;r<t.length;r++){let s=t[r];s.parent&&s.parent.isBone&&($o.multiplyMatrices(Aa,s.matrixWorld),Ln.setFromMatrixPosition($o),i.setXYZ(o,Ln.x,Ln.y,Ln.z),$o.multiplyMatrices(Aa,s.parent.matrixWorld),Ln.setFromMatrixPosition($o),i.setXYZ(o+1,Ln.x,Ln.y,Ln.z),o+=2)}n.getAttribute("position").needsUpdate=!0,te.prototype.updateMatrixWorld.call(this,e)};function ro(e,t,n){this.light=e,this.light.updateMatrixWorld(),this.color=n;let i=new qi(t,4,2),r=new kt({wireframe:!0,fog:!1,toneMapped:!1});He.call(this,i,r),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}ro.prototype=Object.create(He.prototype);ro.prototype.constructor=ro;ro.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};ro.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};var yy=new b,du=new re,pu=new re;function oo(e,t,n){te.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;let i=new ki(t);i.rotateY(Math.PI*.5),this.material=new kt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new ge(o,3)),this.add(new He(i,this.material)),this.update()}oo.prototype=Object.create(te.prototype);oo.prototype.constructor=oo;oo.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};oo.prototype.update=function(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");du.copy(this.light.color),pu.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?du:pu;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(yy.setFromMatrixPosition(this.light.matrixWorld).negate())};function _c(e,t,n,i){e=e||10,t=t||10,n=new re(n!==void 0?n:4473924),i=new re(i!==void 0?i:8947848);let r=t/2,o=e/t,s=e/2,a=[],c=[];for(let u=0,d=0,f=-s;u<=t;u++,f+=o){a.push(-s,0,f,s,0,f),a.push(f,0,-s,f,0,s);let p=u===r?n:i;p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3}let l=new oe;l.setAttribute("position",new ee(a,3)),l.setAttribute("color",new ee(c,3));let h=new Ke({vertexColors:!0,toneMapped:!1});nt.call(this,l,h),this.type="GridHelper"}_c.prototype=Object.assign(Object.create(nt.prototype),{constructor:_c,copy:function(e){return nt.prototype.copy.call(this,e),this.geometry.copy(e.geometry),this.material.copy(e.material),this},clone:function(){return new this.constructor().copy(this)}});function bc(e,t,n,i,r,o){e=e||10,t=t||16,n=n||8,i=i||64,r=new re(r!==void 0?r:4473924),o=new re(o!==void 0?o:8947848);let s=[],a=[];for(let h=0;h<=t;h++){let u=h/t*(Math.PI*2),d=Math.sin(u)*e,f=Math.cos(u)*e;s.push(0,0,0),s.push(d,0,f);let p=h&1?r:o;a.push(p.r,p.g,p.b),a.push(p.r,p.g,p.b)}for(let h=0;h<=n;h++){let u=h&1?r:o,d=e-e/n*h;for(let f=0;f<i;f++){let p=f/i*(Math.PI*2),y=Math.sin(p)*d,v=Math.cos(p)*d;s.push(y,0,v),a.push(u.r,u.g,u.b),p=(f+1)/i*(Math.PI*2),y=Math.sin(p)*d,v=Math.cos(p)*d,s.push(y,0,v),a.push(u.r,u.g,u.b)}}let c=new oe;c.setAttribute("position",new ee(s,3)),c.setAttribute("color",new ee(a,3));let l=new Ke({vertexColors:!0,toneMapped:!1});nt.call(this,c,l),this.type="PolarGridHelper"}bc.prototype=Object.create(nt.prototype);bc.prototype.constructor=bc;var mu=new b,Qo=new b,gu=new b;function so(e,t,n){te.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new oe;i.setAttribute("position",new ee([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Ke({fog:!1,toneMapped:!1});this.lightPlane=new Dt(i,r),this.add(this.lightPlane),i=new oe,i.setAttribute("position",new ee([0,0,0,0,0,1],3)),this.targetLine=new Dt(i,r),this.add(this.targetLine),this.update()}so.prototype=Object.create(te.prototype);so.prototype.constructor=so;so.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};so.prototype.update=function(){mu.setFromMatrixPosition(this.light.matrixWorld),Qo.setFromMatrixPosition(this.light.target.matrixWorld),gu.subVectors(Qo,mu),this.lightPlane.lookAt(Qo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Qo),this.targetLine.scale.z=gu.length()};var Ko=new b,Ze=new hn;function Hs(e){let t=new oe,n=new Ke({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={},s=new re(16755200),a=new re(16711680),c=new re(43775),l=new re(16777215),h=new re(3355443);u("n1","n2",s),u("n2","n4",s),u("n4","n3",s),u("n3","n1",s),u("f1","f2",s),u("f2","f4",s),u("f4","f3",s),u("f3","f1",s),u("n1","f1",s),u("n2","f2",s),u("n3","f3",s),u("n4","f4",s),u("p","n1",a),u("p","n2",a),u("p","n3",a),u("p","n4",a),u("u1","u2",c),u("u2","u3",c),u("u3","u1",c),u("c","t",l),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h);function u(f,p,y){d(f,y),d(p,y)}function d(f,p){i.push(0,0,0),r.push(p.r,p.g,p.b),o[f]===void 0&&(o[f]=[]),o[f].push(i.length/3-1)}t.setAttribute("position",new ee(i,3)),t.setAttribute("color",new ee(r,3)),nt.call(this,t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}Hs.prototype=Object.create(nt.prototype);Hs.prototype.constructor=Hs;Hs.prototype.update=function(){let e=this.geometry,t=this.pointMap,n=1,i=1;Ze.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$e("c",t,e,Ze,0,0,-1),$e("t",t,e,Ze,0,0,1),$e("n1",t,e,Ze,-n,-i,-1),$e("n2",t,e,Ze,n,-i,-1),$e("n3",t,e,Ze,-n,i,-1),$e("n4",t,e,Ze,n,i,-1),$e("f1",t,e,Ze,-n,-i,1),$e("f2",t,e,Ze,n,-i,1),$e("f3",t,e,Ze,-n,i,1),$e("f4",t,e,Ze,n,i,1),$e("u1",t,e,Ze,n*.7,i*1.1,-1),$e("u2",t,e,Ze,-n*.7,i*1.1,-1),$e("u3",t,e,Ze,0,i*2,-1),$e("cf1",t,e,Ze,-n,0,1),$e("cf2",t,e,Ze,n,0,1),$e("cf3",t,e,Ze,0,-i,1),$e("cf4",t,e,Ze,0,i,1),$e("cn1",t,e,Ze,-n,0,-1),$e("cn2",t,e,Ze,n,0,-1),$e("cn3",t,e,Ze,0,-i,-1),$e("cn4",t,e,Ze,0,i,-1),e.getAttribute("position").needsUpdate=!0};function $e(e,t,n,i,r,o,s){Ko.set(r,o,s).unproject(i);let a=t[e];if(a!==void 0){let c=n.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],Ko.x,Ko.y,Ko.z)}}var es=new tn;function ci(e,t){this.object=e,t===void 0&&(t=16776960);let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new oe;r.setIndex(new ge(n,1)),r.setAttribute("position",new ge(i,3)),nt.call(this,r,new Ke({color:t,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}ci.prototype=Object.create(nt.prototype);ci.prototype.constructor=ci;ci.prototype.update=function(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&es.setFromObject(this.object),es.isEmpty())return;let t=es.min,n=es.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()};ci.prototype.setFromObject=function(e){return this.object=e,this.update(),this};ci.prototype.copy=function(e){return nt.prototype.copy.call(this,e),this.object=e.object,this};ci.prototype.clone=function(){return new this.constructor().copy(this)};function Gs(e,t){this.type="Box3Helper",this.box=e,t=t||16776960;let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new oe;r.setIndex(new ge(n,1)),r.setAttribute("position",new ee(i,3)),nt.call(this,r,new Ke({color:t,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Gs.prototype=Object.create(nt.prototype);Gs.prototype.constructor=Gs;Gs.prototype.updateMatrixWorld=function(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),te.prototype.updateMatrixWorld.call(this,e))};function Vs(e,t,n){this.plane=e,this.size=t===void 0?1:t;let i=n!==void 0?n:16776960,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new oe;o.setAttribute("position",new ee(r,3)),o.computeBoundingSphere(),Dt.call(this,o,new Ke({color:i,toneMapped:!1})),this.type="PlaneHelper";let s=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],a=new oe;a.setAttribute("position",new ee(s,3)),a.computeBoundingSphere(),this.add(new He(a,new kt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}Vs.prototype=Object.create(Dt.prototype);Vs.prototype.constructor=Vs;Vs.prototype.updateMatrixWorld=function(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?at:ao,this.lookAt(this.plane.normal),te.prototype.updateMatrixWorld.call(this,e)};var vu=new b,ts,Ca;function Gn(e,t,n,i,r,o){te.call(this),this.type="ArrowHelper",e===void 0&&(e=new b(0,0,1)),t===void 0&&(t=new b(0,0,0)),n===void 0&&(n=1),i===void 0&&(i=16776960),r===void 0&&(r=.2*n),o===void 0&&(o=.2*r),ts===void 0&&(ts=new oe,ts.setAttribute("position",new ee([0,0,0,0,1,0],3)),Ca=new zn(0,.5,1,5,1),Ca.translate(0,-.5,0)),this.position.copy(t),this.line=new Dt(ts,new Ke({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new He(Ca,new kt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}Gn.prototype=Object.create(te.prototype);Gn.prototype.constructor=Gn;Gn.prototype.setDirection=function(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{vu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(vu,t)}};Gn.prototype.setLength=function(e,t,n){t===void 0&&(t=.2*e),n===void 0&&(n=.2*t),this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()};Gn.prototype.setColor=function(e){this.line.material.color.set(e),this.cone.material.color.set(e)};Gn.prototype.copy=function(e){return te.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this};Gn.prototype.clone=function(){return new this.constructor().copy(this)};function wc(e){e=e||1;let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new oe;i.setAttribute("position",new ee(t,3)),i.setAttribute("color",new ee(n,3));let r=new Ke({vertexColors:!0,toneMapped:!1});nt.call(this,i,r),this.type="AxesHelper"}wc.prototype=Object.create(nt.prototype);wc.prototype.constructor=wc;var Fi=4,On=8,qt=Math.pow(2,On),ph=[.125,.215,.35,.446,.526,.582],mh=On-Fi+1+ph.length,Li=20,Zt={[bt]:0,[js]:1,[Pc]:2,[Ru]:3,[Du]:4,[Iu]:5,[Lc]:6},La=new eo,{_lodPlanes:xr,_sizeLods:yu,_sigmas:ns}=_y(),Pa=null,Jn=(1+Math.sqrt(5))/2,Ai=1/Jn,xu=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Jn,Ai),new b(0,Jn,-Ai),new b(Ai,0,Jn),new b(-Ai,0,Jn),new b(Jn,Ai,0),new b(-Jn,Ai,0)];function _u(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=by(Li),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}_u.prototype={constructor:_u,fromScene:function(e,t=0,n=.1,i=100){Pa=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r},fromEquirectangular:function(e){return this._fromTexture(e)},fromCubemap:function(e){return this._fromTexture(e)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=Mu(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=wu(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<xr.length;e++)xr[e].dispose()},_cleanup:function(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Pa),e.scissorTest=!1,is(e,0,0,e.width,e.height)},_fromTexture:function(e){Pa=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t},_allocateTargets:function(e){let t={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:lo,format:Mf,encoding:xy(e)?e.encoding:Pc,depthBuffer:!1,stencilBuffer:!1},n=bu(t);return n.depthBuffer=!e,this._pingPongRenderTarget=bu(t),n},_compileMaterial:function(e){let t=new He(xr[0],e);this._renderer.compile(t,La)},_sceneToCubeUV:function(e,t,n,i){let s=new rt(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.outputEncoding,u=l.toneMapping,d=l.getClearColor(),f=l.getClearAlpha();l.toneMapping=Oi,l.outputEncoding=bt;let p=e.background;if(p&&p.isColor){p.convertSRGBToLinear();let y=Math.max(p.r,p.g,p.b),v=Math.min(Math.max(Math.ceil(Math.log2(y)),-128),127);p=p.multiplyScalar(Math.pow(2,-v));let m=(v+128)/255;l.setClearColor(p,m),e.background=null}for(let y=0;y<6;y++){let v=y%3;v==0?(s.up.set(0,a[y],0),s.lookAt(c[y],0,0)):v==1?(s.up.set(0,0,a[y]),s.lookAt(0,c[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,c[y])),is(i,v*qt,y>2?qt:0,qt,qt),l.setRenderTarget(i),l.render(e,s)}l.toneMapping=u,l.outputEncoding=h,l.setClearColor(d,f)},_textureToCubeUV:function(e,t){let n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Mu()):this._equirectShader==null&&(this._equirectShader=wu());let i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new He(xr[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Zt[e.encoding],o.outputEncoding.value=Zt[t.texture.encoding],is(t,0,0,3*qt,2*qt),n.setRenderTarget(t),n.render(r,La)},_applyPMREM:function(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<mh;i++){let r=Math.sqrt(ns[i]*ns[i]-ns[i-1]*ns[i-1]),o=xu[(i-1)%xu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n},_blur:function(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)},_halfBlur:function(e,t,n,i,r,o,s){let a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,h=new He(xr[i],c),u=c.uniforms,d=yu[n]-1,f=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Li-1),p=r/f,y=isFinite(r)?1+Math.floor(l*p):Li;y>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Li}`);let v=[],m=0;for(let w=0;w<Li;++w){let E=w/p,A=Math.exp(-E*E/2);v.push(A),w==0?m+=A:w<y&&(m+=2*A)}for(let w=0;w<v.length;w++)v[w]=v[w]/m;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=v,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s),u.dTheta.value=f,u.mipInt.value=On-n,u.inputEncoding.value=Zt[e.texture.encoding],u.outputEncoding.value=Zt[e.texture.encoding];let g=yu[i],_=3*Math.max(0,qt-2*g),x=(i===0?0:2*qt)+2*g*(i>On-Fi?i-On+Fi:0);is(t,_,x,3*g,2*g),a.setRenderTarget(t),a.render(h,La)}};function xy(e){return e===void 0||e.type!==lo?!1:e.encoding===bt||e.encoding===js||e.encoding===Lc}function _y(){let e=[],t=[],n=[],i=On;for(let r=0;r<mh;r++){let o=Math.pow(2,i);t.push(o);let s=1/o;r>On-Fi?s=ph[r-On+Fi-1]:r==0&&(s=0),n.push(s);let a=1/(o-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=2,y=1,v=new Float32Array(f*d*u),m=new Float32Array(p*d*u),g=new Float32Array(y*d*u);for(let x=0;x<u;x++){let w=x%3*2/3-1,E=x>2?0:-1,A=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];v.set(A,f*d*x),m.set(h,p*d*x);let F=[x,x,x,x,x,x];g.set(F,y*d*x)}let _=new oe;_.setAttribute("position",new ge(v,f)),_.setAttribute("uv",new ge(m,p)),_.setAttribute("faceIndex",new ge(g,y)),e.push(_),i>Fi&&i--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}function bu(e){let t=new Lt(3*qt,3*qt,e);return t.texture.mapping=co,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function is(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function by(e){let t=new Float32Array(e),n=new b(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:Zt[bt]},outputEncoding:{value:Zt[bt]}},vertexShader:Bc(),fragmentShader:`
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

${Fc()}

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function wu(){let e=new z(1,1);return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:e},inputEncoding:{value:Zt[bt]},outputEncoding:{value:Zt[bt]}},vertexShader:Bc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Fc()}

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Mu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Zt[bt]},outputEncoding:{value:Zt[bt]}},vertexShader:Bc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Fc()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Bc(){return`
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
	`}function Fc(){return`
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
	`}de.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(de.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(Rn.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=new _e;for(let n=0,i=e.length;n<i;n++){let r=e[n];t.vertices.push(new b(r.x,r.y,r.z||0))}return t}});Object.assign(Yt.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function wy(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),vt.call(this,e),this.type="catmullrom",this.closed=!0}wy.prototype=Object.create(vt.prototype);function My(e){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),vt.call(this,e),this.type="catmullrom"}My.prototype=Object.create(vt.prototype);function gh(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),vt.call(this,e),this.type="catmullrom"}gh.prototype=Object.create(vt.prototype);Object.assign(gh.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});_c.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};rr.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Oe.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),th.extractUrlBase(e)}});Oe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(gc.prototype,{setTexturePath:function(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}});Object.assign(hh.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(tn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(yn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});uo.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};fh.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(Me,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Me.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Me.ceilPowerOfTwo(e)}});Object.assign(ht.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(Ae.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,o){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,o)}});Xt.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};ot.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(sr.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(lt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(lt,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),lt.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),lt.getNormal(e,t,n,i)}});Object.assign(Qn.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ji(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Xi(this,e)}});Object.assign(z.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(b.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ne.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(_e.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(te.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(te.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(He.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(He.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),ld},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(ms.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Wa.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});ka.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(de.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});rt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Ge.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(ge.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Cr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Cr)}}});Object.assign(ge.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Cr:qs),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(oe.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new ge(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(oe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Us.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(uh.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(Ct.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Cr},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(Ct.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Cr:qs),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(fn.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(yc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(ve.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new re}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Tu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(ai.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(wt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(Xs.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Xs.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?js:bt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(qu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Lt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(no.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let t=this;return new vc().load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});sh.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Rr.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};Kn.crossOrigin=void 0;Kn.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new ic;r.setCrossOrigin(this.crossOrigin);let o=r.load(e,n,void 0,i);return t&&(o.mapping=t),o};Kn.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new nc;r.setCrossOrigin(this.crossOrigin);let o=r.load(e,n,void 0,i);return t&&(o.mapping=t),o};Kn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Kn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));function yt(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}function vh(){let e=yt();return e+=`
    
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
    

    ${ce.common}
    ${ce.skinning_pars_vertex}
    ${ce.shadowmap_pars_vertex}
    
    void main(){
        vUv=uv;
        vCd=color;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 objectTangent = vec3( tangent.xyz );
        vec3 transformedNormal = objectNormal;


        vec3 blendPos = color.rgb;
        transformed = mix( transformed, blendPos, eyeBlink.x );
        
        ${ce.skinbase_vertex}
        ${ce.skinnormal_vertex}
        ${ce.skinning_vertex}
        
        vTan = objectTangent;
        vObjN = objectNormal;

        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalPos = transformed;
        vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;

        ${ce.worldpos_vertex}
        ${ce.shadowmap_vertex}
    }`,e}function yh(){return`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    
    ${ce.common}
    ${ce.lightmap_pars_fragment}

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    varying vec3 vObjN;
    
    varying float vFlicker;
    
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
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    ${ce.packing}
    
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
      for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 lightVector = normalize(vPos - pointLights[shadowIndex].position);
          vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[shadowIndex].color;
          lightInf *=  1.0-min(1.0, length(vPos - pointLights[shadowIndex].position) * pointLights[shadowIndex].decay );
          lights.rgb += lightInf;
      }
      //outCd.rgb *= lights.rgb;
      
      float shadowInf = 0.0;
      float detailInf = 0.0;
      float lShadow = 0.0;
      int i = 0;
      
      // Read from Point Lights
      //lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[0].shadowMapSize, pointLightShadows[0].shadowBias, pointLightShadows[0].shadowRadius, vPointShadowCoord[0], pointLightShadows[0].shadowCameraNear, pointLightShadows[0].shadowCameraFar );
      //shadowInf = max( lShadow, shadowInf);

      
      //outCd.rgb*=shadowInf;
      
      lights = vec4(0.0, 0.0, 0.0, 1.0);
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refTan = reflect( normalize(vLocalPos), vTan ) * (dot(normalize(vec3(.1, -0.5, .30)), vObjN));
          refTan = normalize( refTan + vec3(.0, 0.45*(nCd.x*nCd.y*nCd.z*.5+.25) , -0.50+areCd.g) );
          vec3 refNorm = 1.0-reflect(  vObjN, normalize(vPos) );
          refNorm = min( refNorm, refTan );
          //refTan = vec3(1.0, 1.0, 1.0);
          //refNorm = vec3(1.0, 1.0, 1.0);
          vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction, refTan * refNorm ))) * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb )*1.5;
      outCd.rgb = mix(outCd.rgb*(1.0-(1.0-outCd.rgb)), outCd.rgb+vec3(1.0, .85, .70) * (outCd.rgb*.5+.5)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g;

      
      // Add some ambient color to the back rim of the object
      float d = dot( vec3(1.0, 0.0, 0.0), -vObjN )*.5+.25;
      outCd.rgb = mix( outCd.rgb, vec3(.0, .10, .50), d*lMag);

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`}function xh(){let e=yt();return e+=`
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    ${ce.common}
    ${ce.shadowmap_pars_vertex}
    
    
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
        
        ${ce.worldpos_vertex}
        ${ce.shadowmap_vertex}
        
    }`,e}function _h(){let e=yt();return e+=`
        
    uniform sampler2D diffuse;
    uniform sampler2D dirtDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
    uniform sampler2D crossNoise;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    
    #define PI 3.1415926535897932384626
    
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
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    ${ce.packing}
    
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
        
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        //Ease patch noise, dirt / path / woods / grass
        
        pos = vLocalPos*.03;
        uv.x = ( pos.x );
        uv.y = ( pos.z ); 
        
        // UV & Color Noise
        vec3 nCd=(texture2D(noiseTexture,uv).rgb);
        uv = ( uv.yx+nCd.rg*.1 );
        nCd= (nCd+(texture2D(noiseTexture,uv).rgb))*.5;
        
        vec2 detailUv = fract(abs(pos.xz*.2 + nCd.rg*nCd.b*.2));
        float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
        float dirtNoise = texture2D(uniformNoise,detailUv).r;
        float baseDirtNoise = dirtNoise;
        dirtNoise = dirtNoise*.7+.3;
        
        
        // Dirt Base Color
        vec2 dirtUv = vUv;
        vec4 Cd = texture2D(diffuse,dirtUv) ;
        Cd.rgb *= dirtNoise;
        
        // Dirt Patch Color
        dirtUv = fract(pos.xz);//vUv*20.0);
        dirtNoise = min(1.0, texture2D(uniformNoise,dirtUv).r*.3+.7);
        dirtUv = fract(pos.xz*.1);
        vec3 dirtCd = texture2D(dirtDiffuse,dirtUv).rgb;
        //dirtCd += dirtNoise*.05;
        dirtCd *= detailMult*(1.0-depth) + depth*.65;
        
        
        // Region Blending
        vec2 unUv = uv;
        float uniNoise = texture2D(uniformNoise,unUv).r*depthFade;
        vec2 cnUv = pos.xz*.05;
        float cNoise = texture2D(crossNoise,cnUv).r;
        cNoise = cNoise*cNoise;
        cNoise = mix( cNoise*cNoise, 1.0-(1.0-cNoise)*(1.0-cNoise), cNoise );
        
        Cd.rgb = mix( dirtCd, Cd.rgb, cNoise );
        
        
        vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            int shadowIndex = i;
            vec3 lightVector = normalize(vPos - pointLights[shadowIndex].position);
            vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[shadowIndex].color;
            lightInf *=  1.0-min(1.0, length(vPos - pointLights[shadowIndex].position) * pointLights[shadowIndex].decay*.006 );
            lights.rgb += lightInf;
        }
        Cd.rgb *= lights.rgb*.7+.3;
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        float lShadow = 0.0;
        int i = 0;
        
        // Read from Point Lights
        lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[0].shadowMapSize, pointLightShadows[0].shadowBias, pointLightShadows[0].shadowRadius, vPointShadowCoord[0], pointLightShadows[0].shadowCameraNear, pointLightShadows[0].shadowCameraFar );
        shadowInf = max( lShadow, shadowInf);

        
        Cd.rgb*=(shadowInf*.7+.3);
        
        pos = vPos;
        lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            int shadowIndex = i;
            vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction, reflect( normalize(pos), vN ) ))*.65) * directionalLights[shadowIndex].color;
            lights.rgb += lightInf*.4;
        }
        Cd.rgb += lights.rgb*baseDirtNoise;
        
        float shade = clamp(dot(vN, reflect( normalize(vPos), vN ))+depthFade, 0.0, 1.0 );
        Cd.rgb=  mix( Cd.rgb*shade, fogColor, depth );
        
        gl_FragColor=Cd;
    }`,e}function bh(){return`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying float vFlicker;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPosW;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    
    
    void main(){
        vUv=uv;
        
        vCd=color;
        
        vLocalN = normal;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        
        
        float timer = time.x*.01;
        vec3 np = position*.001;
        vec2 nuv = uv;
        nuv.x = fract( np.x+timer );
        nuv.y = fract( np.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,nuv).rgb-.5)*10.;
        vec3 pos = position;
        
        vec4 mvPos=modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        vPos = pos.xyz;// mvPos.xyz;
        vPosW = position.xyz;
        
    }`}function wh(){return`
    
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D baseTexture;
    uniform sampler2D midEmberTexture;
    uniform sampler2D heavyEmberTexture;
    uniform sampler2D dataTexture;
    uniform sampler2D noiseTexture;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vCam;
    varying vec3 vPosW;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    varying float vFlicker;
    
    #define PI 3.14159265358979
    
    void main(){
        float timer = time.x*0.06;
        vec3 pos = vPos*0.3;
        vec2 uv = vUv*.9;
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,uv*.1).rgb-.5)*2.0;
        uv.x = fract( pos.x+timer*1.2 + nCd.x*1.2 + nCd.z );
        uv.y = fract( pos.z-timer*2.1  + nCd.y - nCd.x); 
        nCd=(texture2D(noiseTexture,uv).rgb-.5)*10.3;
        vec3 vertCd=vCd + nCd;
        
        vec4 Cd=vec4( vertCd, 1.0 );
        
        vec4 baseCd=texture2D(baseTexture,vUv);
        vec4 midEmberCd=texture2D(midEmberTexture,vUv);
        vec4 heavyEmberCd=texture2D(heavyEmberTexture,vUv);
        vec4 dataTexCd=texture2D(dataTexture,vUv);
        
        float blender = max(0.0, dataTexCd.g * (1.0 + nCd.x * nCd.y * nCd.z*5.0) + (dataTexCd.z*40.0));
        float centerMass = length(vPos)*.29;
        centerMass = 1.0-(centerMass*centerMass);
        blender =  clamp((blender * clamp((centerMass*15.5+.5), 0.0, 1.0 ) + centerMass*(.2+nCd.y*nCd.x)), 0.0, 1.0 );
        Cd.rgb = mix( midEmberCd.rgb, heavyEmberCd.rgb, blender );
        //Cd.rgb = mix( baseCd.rgb, Cd.rgb, (centerMass+centerMass)*(1.0-blender) );
        //Cd.rgb = vec3(blender);
        
        gl_FragColor=Cd;
    }`}function Mh(){let e=yt();return e+=`
  uniform vec2 time;
  uniform sampler2D noiseTexture;
  uniform sampler2D smoothNoiseTexture;
  uniform sampler2D webNoise;
          
  varying vec2 vUv;
  varying vec3 vCd;
  varying vec3 vPos;
  varying vec3 vCamPos;
  varying vec3 vN;
  varying float vInf;
  varying vec3 vShift;
  varying float vShiftDist;
  varying float vBBY;
  varying float vInnerFlame;
  
  
  vec3 noiseLayerInf = vec3(0.85, 1.5, 1.15) ;
  vec3 layerPush = vec3(0.0140, 0.35, 2.15) ;
    
  void main(){
    vUv=uv;
    vN = normal;
    vCamPos = cameraPosition;
    
    vec3 pos = position;
    
    float facingCam = dot(vN, normalize( vCamPos - pos));
    float camInf = 1.0-abs( facingCam );
    camInf *= camInf*camInf;
    vInnerFlame = camInf;
    
    
    float t = time.x * .085;
    float inf = clamp( (pos.y-.05), 0.0, 1.0 );
    vec3 nInfv = noiseLayerInf * inf;
    
    // Base Shape Noise; Central spiky moving
    vec2 nUv = fract( vUv + vec2(t*(.3+pos.y*.09)) + pos.yy * inf  );
    vec4 nCd=texture2D( noiseTexture, nUv );
    nCd.y += .2;
    nCd = (nCd-.5)*nInfv.x;
    
    inf *= max(0.0, 1.0-length( pos.xz * nCd.x*inf ) );
    vInf = inf;
    
    nUv = fract( vUv + vec2(t*.1) * pos.xz*.1  * pos.yy*.1 + nCd.xy*.01 );
    vec4 snCd=texture2D( smoothNoiseTexture, nUv );
    snCd = -(snCd-.5)*nInfv.y;
    snCd.y *= 1.6;
    //snCd *= sin( t );
    
    nUv = fract( vUv + vec2(t*.1 + nCd.x*.01, t*.15 + snCd.z*.01 ));
    vec4 webCd=texture2D( webNoise, nUv );
    webCd = (webCd-.5) * nInfv.z;
    
    vec3 infv = vec3(  inf  );
    infv.xz *= .1  ; 
    vShift = (nCd.rgb * nInfv.x + snCd.rgb * nInfv.y ) * layerPush;
    vShift -= webCd.rgb * nInfv.z * infv.z;
    vShift *= vec3(inf, 1.0, inf) * min(1.0,pos.y*pos.y);
    
    
    pos += vShift + vec3( 0.0, length( vShift.xz )*.3, 0.0);
    vPos = pos;
    vBBY = max( 0.0, pos.y );
    
    vec3 delta = pos-position;
    float dist = length( pos.xz ) * min(1.0, vBBY*.5);
    pos.y += dist * inf * .65;
    vShiftDist = length( pos*vec3(1.0, .0, 1.0) - position );
    
    
    vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    
    vCd = vec3(nCd.xyz);
  }`,e}function Sh(){let e=yt();return e+=`
    uniform vec2 time;
    uniform sampler2D noiseTexture;
    uniform sampler2D smoothNoiseTexture;
    uniform sampler2D webNoise;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec3 vN;
    varying float vInf;
    varying vec3 vShift;
    varying float vShiftDist;
    varying float vBBY;
    varying float vInnerFlame;
    
    #define CD_BASE_MID_BLEND .3
    #define CD_MID_TIP_BLEND .85
    const vec3 cd_base = vec3(0.45,.22,0.0);
    const vec3 cd_mid = vec3(0.57, 0.24, 0.0);
    const vec3 cd_bodyCenter = vec3(0.74, 0.4, 0.0);
    const vec3 cd_tip = vec3(0.44,.24,.0);
    
    const float finalColorBoost = .2;
    
    
    void main() {
    
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      
      float t = time.x*1.0 ;
      float inf = vInf*.8+.2;
      
      
      vec3 nInfv = vec3(1.8, 1.2, 2.15) * inf;
      vec3 layerInf = vec3(0.0140, 0.25, -1.15) ;
      
      vec3 shift = layerInf;
      
      
      // Base Shape Noise; Central spiky moving
      vec2 uvSqueeze = vec2( 30.0, 1.0);
      vec2 nUv = fract( vUv*uvSqueeze + vec2(0.0, t*(1.64+vInf*.9 * vUv.x) ) + vShift.yy * inf  );
      vec4 nCd=texture2D( noiseTexture, nUv );
      nCd = (nCd-.4)*nInfv.x;
      
      // Adds a slight haze on the bottom inside of the flame
      nCd.y = clamp( nCd.y + 6.2, 0.0, 1.0 );
      
      
      nUv = fract( vUv + vec2(-t*.2, t*1.5 * vShiftDist) * vShiftDist *.1  * vShift.yy*.01 + nCd.xz*.2 );
      vec4 snCd=texture2D( smoothNoiseTexture, nUv );
      snCd = -(snCd-.5)*nInfv.y;
      
      nUv = fract( vUv*vec2(1.0, .60)*uvSqueeze - vec2(t*.20 + nCd.x*.01, t*1.5 + snCd.z - vShiftDist*(vBBY*1.7+.5)*.1 ));
      vec4 webCd=texture2D( webNoise, nUv );
      webCd = (webCd-.5) * nInfv.z;
      
      vec3 infv = vec3(  inf  );
      infv.xz *= .1 ; 
      
      
      shift = (nCd.rgb * nInfv.x + snCd.rgb * nInfv.y ) * layerInf;
      shift -= webCd.rgb * nInfv.z * infv.z;
      shift.xz *= inf;
      
      
      float toCam = clamp( dot( vN, normalize( vCamPos - vPos ) )*0.85, 0.0, 1.0 );
      
      vec3 baseCd = cd_base * (1.0 + nCd.rgb + webCd.rgb + (1.0-vShiftDist)*.5);
      vec3 midCd = cd_mid ;
      vec3 tipCd = cd_tip * (webCd.rgb*.2+.8);
      
      
      
      outCd.rgb = vec3(shift.xyz) * outCd.rgb;
      float shiftLen = length( shift.xyz )*.5+.45;
      shiftLen = 1.0-vInf * shiftLen;
      //outCd.rgb = vec3(vShiftDist*.2);
      
      float cdLen = length(outCd.rgb * shiftLen) ;
      outCd.a = min( cdLen+.1 + shiftLen,  shiftLen );
      
      float blender =  (vBBY*100.0+vShiftDist+cdLen)-CD_BASE_MID_BLEND - vShiftDist*toCam;
      blender = clamp( blender * snCd.x  * nCd.y * webCd.z + (1.0-vInnerFlame), 0.0, 1.0 );
      //blender *= blender;
      vec3 blendedCd = mix( baseCd, midCd, blender ) ;
      
      blender = min(1.0, max(0.0, vBBY - CD_MID_TIP_BLEND) + vShiftDist * vBBY);
      blender *= blender*blender;
      blendedCd = mix( blendedCd, tipCd, blender ) ;
      
      blender = clamp( toCam*(.8*webCd.x*webCd.y*webCd.z*snCd.x*snCd.y*snCd.z + .1 + vBBY*.3 + (.80-vInnerFlame) ), 0.0, 1.0);
      blendedCd = mix( blendedCd, cd_bodyCenter, blender ) ;
      
      outCd.rgb = blendedCd;
      outCd.rgb = mix( outCd.rgb, normalize(outCd.rgb), finalColorBoost );
      outCd.a *= min(1.0, max( 0.0, vShiftDist + max(0.0,1.0-length(outCd.rgb)) )) * .5;
      outCd.a = max(outCd.a + (1.0-vBBY)*.3, webCd.z*webCd.y*(snCd.x*.5+1.0)+outCd.a );
      outCd.a += toCam*.4*webCd.z*(1.0-vBBY);
      outCd.a *= min( 1.0, vBBY * (1.0+(nCd.x*nCd.y*nCd.z)) );
      
      gl_FragColor = outCd;
    }`,e}var ho=z,nn=b;function Th(e=!1){let t=`
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
    `;return e&&(t+=`
        ${ce.common}
        ${ce.shadowmap_pars_vertex}
      `),t+=`
    
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
        
        `,e&&(t+=`
            ${ce.worldpos_vertex}
            ${ce.shadowmap_vertex}
          `),t+=`
    }`,t}function Eh(e,t,n,i,r,o){let s=!1,a=1;e.hasOwnProperty("Specular")&&e.Specular>0&&(s=!0,a=e.Specular);let c=!1;e.PointColor&&(c=!0);let l=!0,h="1.0";e.hasOwnProperty("SurfaceNoise")&&(e.SurfaceNoise%1==0&&(h=e.SurfaceNoise+".0"),h=="0.0"&&(l=!1));let u=`
        `;if(t||(u+="uniform sampler2D dTexture;"),u+=`
    
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
      
      ${ce.packing}
      
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
      `,c)u+="vec3 vertCd = vCd;";else if(t){let y=_=>_%1==0?_+".0":_+"",v=y(t.r),m=y(t.g),g=y(t.b);u+=`vec3 vertCd = vec3( ${v}, ${m}, ${g} ) ;`}else u+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";u+=`
        
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
            `;for(let y=0;y<o;++y)u+=`
                i=${y};
                lShadow = getPointShadow( pointShadowMap[${y}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
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
    }`,u}var fo=class{constructor(t="CampfireEnvironment",n=null,i=null,r=null,o=null,s=null,a=null,c=null,l=null,h=null,u=null){this.roomName=t,this.pxlFile=i,this.pxlUtils=o,this.pxlAnim=r,this.pxlDevice=s,this.pxlEnv=a,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=n+"Assets/",this.mobile=s.mobile,this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animFile=this.assetPath+"Campfire_RabbitDruidA_anim.fbx",this.animClips={},this.animMixer=null,this.envObjName="environmentGround",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new nn(0,0,-30),this.camThumbLookAt=new nn(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new nn(0,0,0),this.cameraAimTarget=new te(0,0,0),this.camHoldWarpPos=!0,this.camLocation={},this.pxlCamFOV=this.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new re(.01,.02,.05),this.fogExp=7e-4,this.fog=new ii(this.fogColor,this.fogExp),this.userAvatarGroup=new ni,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new nn(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new ho(0,0),this.msRunner=c,this.camera=l,this.autoCamPaths={},this.scene=h,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.portalList={},this.hoverableExists=!1,this.hoverableList=[],this.hoverableObj=null,this.clickableExists=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.cloud3dTexture=this.pxlEnv.cloud3dTexture,this.cloud3dTexture.wrapS=ft,this.cloud3dTexture.wrapT=ft,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture,this.smoothNoiseTexture.wrapS=ft,this.smoothNoiseTexture.wrapT=ft}start(){this.booted&&this.resetCamera()}step(){this.runTime.x=this.msRunner.x}stop(){}resize(t,n){}setUserHeight(t=1){this.pxlEnv.pxlCamera.userScale=t}resetCamera(){this.pxlEnv.pxlCamera.setTransform(this.camInitPos,this.camInitLookAt)}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(t,n=null){this.geoList.MainRoomWarp.material.map=t}applyRoomPass(t=null){}getArtistInfo(){return null}setFog(t){}getShaderList(){let t={};return Object.keys(this.textureList).forEach(i=>{t[i]=i}),t}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(t="",n=null){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(n||(n=new nn),this.textureList[this.currentShader].uniforms.sliders.value=n,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=t,this.textureList[this.currentShader]}setShader(t,n,i){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(r=>{let o=r.material;o.vertexShader=n,o.fragmentShader=i,o.needsUpdate=!0}),this.textureList[this.currentShader].vertexShader=n,this.textureList[this.currentShader].fragmentShader=i,this.textureList[this.currentShader].needsUpdate=!0}castRay(t,n){if(!t&&!this.hoverableExists||t&&!this.clickableExists)return;let i=[];if(!t&&this.hoverableExists?i=this.hoverableList:t&&this.clickableExists&&(i=this.clickableList),i.length>0){let o=new ho(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(o,this.pxlEnv.pxlCamera.camera);var r=[];r=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(i)}}toCameraPos(t){if(this.cameraBooted&&this.camLocation.hasOwnProperty(t)){let n=this.mobile?"PositionMobile":"Position",i=this.mobile?"LookAtMobile":"LookAt",r=this.camLocation[t][n],o=this.camLocation[t][i];o||(o=new nn(0,0,1),o.addVectors(r,o)),this.pxlEnv.pxlCamera.setTransform(this.camLocation[t][n],this.camLocation[t][i]),this.setUserHeight(this.camInitPos.y)}}fbxPostLoad(){this.toCameraPos("Default");let t=0;if(this.lightList.hasOwnProperty("PointLight")&&(t=this.lightList.PointLight.length),this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(o=>{o.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let o=this.geoList.Sky_EqRect_Mesh.material;o.uniforms&&o.uniforms.envDiffuse&&(o.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var n=new to(3158064);this.scene.add(n);let i=Object.keys(this.lightList);if(i.length>0&&i.forEach(o=>{this.lightList[o].forEach(s=>{o=="DirectionalLight"?s.castShadow=!1:o=="PointLight"&&(s.shadow.radius=5,s.shadow.receiveShadow=!0,s.shadow.mapSize.width=512,s.shadow.mapSize.height=512,s.shadow.camera.near=.5,s.shadow.camera.far=35,s.shadow.bias=.025,s.shadow.radius=5)})}),this.shaderGeoList)for(let o in this.shaderGeoList){let s=this.shaderGeoList[o];if(s.userData&&s.userData.Shader=="pxlPrincipled"){let a=ui.merge([Z.common,Z.lights,Z.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var r={};r.USE_MAP="";let c={},l=!0,h=s.userData.castShadow==!0||s.userData.receiveShadow==!0,u=!0,d=!1;s.material.map||(d=s.material.color.clone()),s.userData.ShaderParms&&s.userData.ShaderParms!=""&&(c=JSON.parse(s.userData.ShaderParms));let f=this.pxlFile.pxlShaderBuilder(a,Th(h),Eh(c,d,u,l,h,t),r);f.transparent=!1,f.lights=!0,d||(f.uniforms.dTexture.value=s.material.map),f.uniforms.noiseTexture.value=this.cloud3dTexture,f.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,s.material=f,this.textureList[s.name]=f}}}animPostLoad(t,n){}build(){}onMessage(t,n){switch(console.log("Room : "+this.roomName+" - Message Received: "+t),console.log("Message : "+n),t=t.toLowerCase(),t){case"roomwarp":this.roomWarp=n;break;default:case"roommessage":console.log("-- Message Type Not Recognized -- "),console.log("Room : "+this.roomName),console.log("Message Received: "+t),console.log("Message : "+n);break}}};function Zs(e,t=120){let n=yt();return n+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,e>0&&(n+=`uniform vec3[${e}] lightPos;`),n+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${t.toFixed(3)}
    #define PROX_INV 1.0/${(t*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${e}
    
    
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

  `,e>1?n+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:e==1&&(n+=`
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
    }`,n}function Js(){let e=yt();return e+=`
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
    }`,e}var _n=class{constructor(t=null,n="particles"){this.name=n,this.room=t,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new ho(0,0),this.position=new nn(0,0,0),this.atlasPath=this.room.assetPath+"sprite_dustLiquid.png"}build(t=30,n=6,i=4,r=null){r||(r=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(t,n,i,r)}setPosition(...t){t.length===1?this.position=t[0]:this.position=new nn(...t),this.points&&this.points.position.copy(this.position)}addToScene(t=30,n=6,i=null,r=4,o=[[0,0]],s=!1){this.count=t,this.pscale.x=n*this.room.pxlEnv.pxlQuality.screenResPerc;let a=null;s?(a=this.atlasRandomGen,o=r):a=this.atlasArrayPicker,i||(i=this.newMaterial());let c=[],l=[],h=[];for(let v=0;v<t;++v)c.push(0,0,0),l.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),h.push(...a(o));let u=new ee(c,3),d=new ee(l,4),f=new ee(h,2),p=new oe;p.setAttribute("position",u),p.setAttribute("seeds",d),p.setAttribute("atlas",f);let y=new Or(p,i);return y.sortParticles=!1,y.frustumCulled=!1,this.room.scene.add(y),y.layers.set(1),y.pBaseScale=n,this.room.geoList[this.name]=y,this.geometry=p,this.material=i,this.points=y,y.position.copy(this.position),y}setUserHeight(t){this.pxlEnv.pxlCamera.userScale=t}atlasRandomGen(t=4,n=2){let i=1/t;return Array.from({length:n}).map(()=>Math.floor(Math.random()*648405.71%t)*i)}atlasRandomList(t=4,n=4,i=2){return Array.from({length:t}).map(r=>this.atlasRandomGen(n,i))}atlasArrayPicker(t){return t[Math.floor(Math.random()*92314.75%t.length)]}dupeArray(t,n){return Array.from({length:n}).fill(t)}elementDuplicator(t,n=4){return t.map(i=>this.dupeArray(i,n)).flat(1)}findLightPositions(){let t=[],n=0;return this.room.lightList.hasOwnProperty("PointLight")&&(n=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(i=>{t.push(i.position.clone())})),t}setAtlasPath(t){this.atlasPath=t}newMaterial(t=!0){let n=this.findLightPositions(),i={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:n}},r=this.room.pxlFile.pxlShaderBuilder(i,Zs(n.length),Js());return r.side=pt,r.transparent=!0,r.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:Ue,minFilter:Vt}),r.uniforms.noiseTexture.value=this.room.softNoiseTexture,r.depthTest=!0,r.depthWrite=!1,t&&(this.room.textureList[this.name]=r),r}};function Ah(){let e=yt();return e+=` 
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
        
        
    }`,e}function Ch(){let e=yt();return e+=`
        
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
    }`,e}var po=class extends _n{constructor(t=null,n="billowSmoke"){super(t,n),this.name=n,this.room=t}build(t=50,n=56,i=4,r=null){r||(r=[...super.dupeArray([0,0],4),...super.dupeArray([.25,0],4),...super.dupeArray([.5,0],2),...super.dupeArray([.5,.25],2),...super.dupeArray([.5,.5],2),...super.dupeArray([.5,.75],2),...super.dupeArray([.75,.75],4),...super.dupeArray([.75,.25],3),...super.dupeArray([.75,.25],3)]);let o={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:.8},rate:{type:"f",value:2}},s=this.room.pxlFile.pxlShaderBuilder(o,Ah(),Ch());s.side=pt,s.transparent=!0,s.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:Ue,minFilter:Vt}),s.uniforms.noiseTexture.value=this.room.softNoiseTexture,s.depthTest=!0,s.depthWrite=!1,this.room.textureList[this.name]=s,super.addToScene(t,n,s,i,r)}};function Lh(){let e=yt();return e+=`
        
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
        

        pos.xz=(noiseCd.rg*noiseCd.r)*(seeds.x)*emberSpread*(life*seeds.zy*(seeds.w*4.0-2.));
        
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
        
    }`,e}function Ph(){let e=yt();return e+=`        
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
    }`,e}var mo=class extends _n{constructor(t=null,n="emberWisps"){super(t,n),this.name=n,this.room=t}build(t=30,n=6,i=4,r=null){r||(r=super.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4));let o={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:5.5}},s=this.room.pxlFile.pxlShaderBuilder(o,Lh(),Ph());s.side=pt,s.transparent=!0,s.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:Ue,minFilter:Vt}),s.uniforms.noiseTexture.value=this.room.softNoiseTexture,s.depthTest=!0,s.depthWrite=!1,this.room.textureList[this.name]=s,super.addToScene(t,n,s,i,r)}};var go=class extends _n{constructor(t=null,n="floatingDust"){super(t,n),this.name=n,this.room=t}build(t=1e3,n=7,i=120,r=[0,0,0],o=[0,1],s=[[0,0]],a=!0){let c=super.findLightPositions();o=new z(o[0],o[1]),r=new b(r[0],r[1],r[2]);let l={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:r},windDir:{type:"v",value:o},lightPos:{value:c}},h=this.room.pxlFile.pxlShaderBuilder(l,Zs(c.length,i),Js());h.side=pt,h.transparent=!0,h.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:Ue,minFilter:Vt}),h.uniforms.noiseTexture.value=this.room.softNoiseTexture,h.depthTest=!0,h.depthWrite=!1,this.room.textureList[this.name]=h,super.addToScene(t,n,h,4,s,a)}};var Rh=class extends fo{constructor(t="CampfireEnvironment",n=null,i=null,r=null,o=null,s=null,a=null,c=null,l=null,h=null,u=null){super(t,n,i,r,o,s,a,c,l,h,u),this.assetPath=n+"Assets/",this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animInitCycle="Sit_Idle",this.animRigName="RabbitDruidA",this.animSource={RabbitDruidA:{rig:this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",anim:{Sit_Idle:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_idle.fbx",Sit_Stoke:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_stoke.fbx"},stateConnections:{Sit_Idle:["Sit_Idle","Sit_Stoke"],Sit_Stoke:["Sit_Idle"]}}},this.animMixer=null,this.envObjName="environmentGround",this.textureList={},this.particleList={},this.pxlCamFOV=s.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=1,this.pxlCamFarClipping=1e4,this.fogColor=new re(.01,.02,.05),this.fogExp=7e-4,this.fog=new ii(this.fogColor,this.fogExp),this.perspectiveInstances=160,this.eyeBlinkInf=new z(0,0),this.eyeBlinkMinMaxDelay=[1,8],this.eyeBlinkMinMaxRate=[.035,.06],this.eyeBlinkNext=0,this.eyeBlinkAnim=0,this.eyeBlinkRate=0}init(){super.init()}start(){this.booted&&this.resetCamera();let t=this.animRigName;if(this.geoList.hasOwnProperty(t)&&this.geoList.Scripted.hasOwnProperty("Offset_loc")){let n=this.geoList.Scripted.Offset_loc,i=this.geoList[t],r=n.position.clone(),o=n.rotation.clone(),s=n.scale.clone();i.position.set(r.x,r.y,r.z),i.rotation.set(o.x,o.y,o.z),i.scale.set(s.x,s.y,s.z)}this.pxlAnim&&this.pxlAnim.hasClip(t,this.animInitCycle)&&this.pxlAnim.playClip(t,this.animInitCycle),this.geoList.hasOwnProperty("Scripted")&&this.geoList.Scripted.hasOwnProperty("pokinStick_geo")&&(this.geoList.Scripted.pokinStick_geo.visible=!0)}step(){super.step(),this.animMixer&&(this.pxlAnim.step(this.animRigName),this.checkEyeBlink())}checkEyeBlink(){if(this.eyeBlinkAnim>0){this.eyeBlinkAnim-=this.eyeBlinkRate;let t=(Math.min(.5,this.eyeBlinkAnim)-Math.max(0,this.eyeBlinkAnim-.5))*2;this.eyeBlinkInf.x=t,this.eyeBlinkAnim<=0&&(this.eyeBlinkNext=this.msRunner.x+this.pxlUtils.randomFloat(this.eyeBlinkMinMaxDelay[0],this.eyeBlinkMinMaxDelay[1]))}else this.eyeBlinkInf.x=0,this.msRunner.x>this.eyeBlinkNext&&(this.eyeBlinkRate=this.pxlUtils.randomFloat(this.eyeBlinkMinMaxRate[0],this.eyeBlinkMinMaxRate[1]),this.eyeBlinkAnim=1);this.textureList.RabbitDruidA.uniforms.eyeBlink.value=this.eyeBlinkInf}fbxPostLoad(){super.fbxPostLoad();let n=this.geoList.Scripted.ParticleSource_loc.position,i="billowSmoke",r=new po(this,i);this.particleList[i]=r;let o=this.assetPath+"sprite_dustLiquid.png";r.setAtlasPath(o),r.setPosition(n);let s=[...r.dupeArray([0,0],4),...r.dupeArray([.25,0],4),...r.dupeArray([.5,0],2),...r.dupeArray([.5,.25],2),...r.dupeArray([.5,.5],2),...r.dupeArray([.5,.75],2),...r.dupeArray([.75,.75],4),...r.dupeArray([.75,.25],3),...r.dupeArray([.75,.25],3)];r.build(600,56,4,s),i="emberWisps";let a=new mo(this,i);this.particleList[i]=a,o=this.assetPath+"sprite_dustLiquid.png",a.setAtlasPath(o),a.setPosition(n);let c=a.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4);if(a.build(30,5,4,c),i="floatingDust",this.particleList[i]=new go(this,i),o=this.assetPath+"sprite_dustFloaters.png",this.particleList[i].setAtlasPath(o),this.particleList[i].build(1e3,7),this.geoList.hasOwnProperty("InstancesObjects")){for(let l in this.geoList.InstancesObjects)if(l.includes("campfireLog")){let h=null;if(this.textureList.hasOwnProperty("CampfireLogs"))h=this.textureList.CampfireLogs;else{let u={baseTexture:{type:"t",value:null},midEmberTexture:{type:"t",value:null},heavyEmberTexture:{type:"t",value:null},dataTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.msRunner},intensity:{type:"f",value:1},rate:{type:"f",value:.035}};h=this.pxlFile.pxlShaderBuilder(u,bh(),wh()),h.uniforms.baseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_diffuse_charred.jpg",4,{magFilter:Qe,minFilter:Bn}),h.uniforms.midEmberTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_diffuse_charredEmberGlow.jpg",4,{magFilter:Qe,minFilter:Bn}),h.uniforms.heavyEmberTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_diffuse_emberGlow.jpg",4,{magFilter:Qe,minFilter:Bn}),h.uniforms.dataTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_dataMask.jpg",4,{magFilter:Qe,minFilter:Bn}),h.uniforms.noiseTexture.value=this.smoothNoiseTexture,this.textureList.CampfireLogs=h}this.geoList.InstancesObjects[l].material=h}}this.setUserHeight(this.camInitPos.y),this.booted=!0}animPostLoad(t){if(this.pxlAnim.hasClip(t,this.animInitCycle)){let i=this.pxlAnim.getMixer(t);this.animMixer=i,this.pxlAnim.playClip(t,this.animInitCycle)}else this.animInitCycle=fallback,this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");let n=this.pxlAnim.getMesh(t);if(n){let i=n.material;i.side=pt;let r=i.vertexShader,o=i.fragmentShader,s=this.setSkinnedMaterial(n,vh(),yh());this.textureList.RabbitDruidA=s}if(this.geoList.Scripted.hasOwnProperty("pokinStick_geo")){let i=this.geoList.Scripted.pokinStick_geo.material;i.shininess=0}}setSkinnedMaterial(t,n=null,i=null){let r=ui.merge([Z.common,Z.lights,{diffuseTexture:{type:"t",value:null},areTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},eyeBlink:{type:"v2",value:this.eyeBlinkInf},mult:{type:"f",value:1}}]);r.diffuseTexture.value=t.material.map,r.areTexture.value=this.pxlUtils.loadTexture(this.assetPath+"RabbitDruidA/RabbitDruidA_lowRes_ARE.jpg"),r.noiseTexture.value=this.cloud3dTexture;let o=this.pxlFile.pxlShaderBuilder(r,n,i);return o.skinning=!0,o.side=pt,o.lights=!0,t.material=o,o}build(){let t=this.animRigName,n=this.pxlFile.loadAnimFBX(this,t,this.animSource[t].rig,this.animSource[t].anim,this.animSource[t].stateConnections),i=ui.merge([Z.common,Z.lights,Z.shadowmap,{diffuse:{type:"t",value:null},dirtDiffuse:{type:"t",value:null},mult:{type:"f",value:1},fogColor:{type:"c",value:null},noiseTexture:{type:"t",value:null},uniformNoise:{type:"t",value:null},crossNoise:{type:"t",value:null}}]);i.fogColor.value=this.fogColor,i.diffuse.value=this.pxlUtils.loadTexture(this.assetPath+"EnvGround_Diffuse.jpg"),i.dirtDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"Dirt_Diffuse.jpg"),i.noiseTexture.value=this.cloud3dTexture,i.uniformNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg"),i.crossNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_NCross.jpg");let r=this.pxlFile.pxlShaderBuilder(i,xh(),_h(4));r.lights=!0,r.transparent=!1,i.uniformNoise.value.wrapS=ft,i.uniformNoise.value.wrapT=ft,i.crossNoise.value.wrapS=ft,i.crossNoise.value.wrapT=ft,i.dirtDiffuse.value.wrapS=ft,i.dirtDiffuse.value.wrapT=ft;let o=ui.merge([Z.lights,{noiseTexture:{type:"t",value:null},smoothNoiseTexture:{type:"t",value:null},webNoise:{type:"t",value:null}}]);o.noiseTexture.value=this.cloud3dTexture,o.smoothNoiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg"),o.webNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_NCross.jpg");let s=this.pxlFile.pxlShaderBuilder(o,Mh(),Sh());return s.side=pt,s.transparent=!0,s.lights=!1,this.textureList.EnvironmentGround_geo=r,this.textureList.CampfireFlame_geo=s,this.pxlFile.loadRoomFBX(this,this.sceneFile,this.envObjName,this.textureList)}};export{Rh as CampfireEnvironment};
