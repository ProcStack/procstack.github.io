var mp=Object.create;var sl=Object.defineProperty;var gp=Object.getOwnPropertyDescriptor;var vp=Object.getOwnPropertyNames;var xp=Object.getPrototypeOf,yp=Object.prototype.hasOwnProperty;var vu=e=>t=>{var i=e[t];if(i)return i();throw new Error("Module not found in bundle: "+t)};var gn=(e,t)=>()=>(e&&(t=e(e=0)),t);var bp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),zt=(e,t)=>{for(var i in t)sl(e,i,{get:t[i],enumerable:!0})},wp=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of vp(t))!yp.call(e,s)&&s!==i&&sl(e,s,{get:()=>t[s],enumerable:!(n=gp(t,s))||n.enumerable});return e};var _p=(e,t,i)=>(i=e!=null?mp(xp(e)):{},wp(t||!e||!e.__esModule?sl(i,"default",{value:e,enumerable:!0}):i,e));var $d={};zt($d,{ExtensionBase:()=>Ni});var Ni,yo=gn(()=>{Ni=class{constructor(){this.active=!1,this.verbose=!1,this.callbacks={}}init(){}start(){this.active=!0}pause(){this.stop()}stop(){this.active=!1}subscribe(t,i){this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(i)}unsubscribe(t,i){this.callbacks[t]&&(this.callbacks[t]=this.callbacks[t].filter(n=>n!==i))}emit(t,i){this.callbacks[t]&&this.callbacks[t].forEach(n=>n(i))}destroy(){this.disable()}}});var ef={};zt(ef,{default:()=>tl});var tl,tf=gn(()=>{yo();tl=class extends Ni{constructor(t){this.status=!1,this.accessToken="",this.jwtToken="",this.socket=io("https://www.www.com",{transports:["websocket"]})}init(){socket.on("event",t=>{console.log(t)}),socket.on("connect",onConnect),socket.on("disconnect",onDisconnect),socket.on("authenticated",onAuthenticated),socket.on("unauthorized",console.error)}onConnect(){console.log("Successfully connected to the websocket"),socket.emit("authenticate",{method:"jwt",token:this.jwtToken})}onDisconnect(){console.log("Disconnected from websocket"),this.status=!1,onConnect()}onAuthenticated(t){let{channelId:i}=t;console.log(`Successfully connected to channel ${i}`),this.status=!0}}});var nf={};zt(nf,{PoseEngine:()=>$c});var $c,sf=gn(()=>{yo();$c=class extends Ni{constructor(t){switch(this.active=!1,this.verbose=!1,t){case"MediaPipe":this.model=new MediaPipePose;break;default:throw new Error("Unknown pose estimation '"+t+"' model")}}async estimatePose(t){return await this.model.estimate(t)}}});var rf={};zt(rf,{MediaPipePlugin:()=>eu});var eu,of=gn(()=>{eu=class e{constructor(){this.workerScriptUrl="./PoseEngine_worker.js",this.worker=null,this.booted=!1}static async loadScriptWithProgress(t,i){return new Promise((n,s)=>{let r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="text",r.onprogress=o=>{if(o.lengthComputable&&typeof i=="function"){let a=Math.round(o.loaded/o.total*100);i(a)}},r.onload=()=>{if(r.status===200){let o=document.createElement("script");o.textContent=r.responseText,document.head.appendChild(o),n()}else s(new Error(`Failed to load script: ${t}`))},r.onerror=()=>s(new Error(`Network error while loading: ${t}`)),r.send()})}async init(t){let i="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js";try{console.log("Loading MediaPipe..."),await e.loadScriptWithProgress(i,t),this.worker=new Worker(this.workerScriptUrl),this.booted=!0,console.log("MediaPipe Plugin Initialized")}catch(n){console.error("Error initializing MediaPipePlugin:",n)}}sendMessage(t){if(!this.booted){console.warn("MediaPipePlugin is not initialized.");return}this.worker.postMessage(t)}onMessage(t){if(!this.worker){console.warn("WebWorker not initialized.");return}this.worker.onmessage=i=>t(i.data)}terminateWorker(){this.worker&&(this.worker.terminate(),this.worker=null,console.log("WebWorker terminated."))}}});var af=bp(()=>{self.onmessage=async e=>{let{type:t,data:i}=e.data;switch(t){case"processFrame":let n=await poseModel.estimate(imageData);self.postMessage({type:"result",pose:n});break;default:console.warn("Unknown message type:",t)}}});var lf={};zt(lf,{WebCamera:()=>tu});var tu,cf=gn(()=>{yo();tu=class extends Ni{constructor(){this.video=document.createElement("video"),this.stream=null,this.isInitialized=!1,this.active=!1}init(t){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(i=>{this.stream=i,this.video.srcObject=this.stream,this.video.play(),this.isInitialized=!0,console.log("WebCamera Initialized"),t&&t(null)}).catch(i=>{console.error("Error initializing WebCamera:",i),t&&t(i)})}start(t){this.isInitialized?(this.active=!0,console.log("WebCamera Started"),t&&t(null)):(console.error("WebCamera is not initialized"),t&&t(new Error("WebCamera is not initialized")))}pause(t){this.stop(t)}stop(t){this.stream?(this.stream.getTracks().forEach(i=>i.stop()),this.video.srcObject=null,this.isInitialized=!1,console.log("WebCamera Stopped"),this.active=!1,t&&t(null)):t&&t(new Error("WebCamera is not initialized"))}}});var ab,iu=gn(()=>{ab=vu({"./ExtensionBase.js":()=>Promise.resolve().then(()=>(yo(),$d)),"./Extensions.js":()=>Promise.resolve().then(()=>(nu(),uf)),"./Networking.js":()=>Promise.resolve().then(()=>(tf(),ef)),"./PoseEngine.js":()=>Promise.resolve().then(()=>(sf(),nf)),"./PoseEngine/MediaPipe.js":()=>Promise.resolve().then(()=>(of(),rf)),"./PoseEngine/PoseEngine_worker.js":()=>Promise.resolve().then(()=>_p(af())),"./WebCam.js":()=>Promise.resolve().then(()=>(cf(),lf))})});var uf={};zt(uf,{Extensions:()=>Ks});var lb,Ks,nu=gn(()=>{iu();lb=["PoseEngine"],Ks=class{constructor(){this.plugins={},this.verbose=!1}init(t,i,n,s=!1){!this.plugins[t]||s?this.load(t,(r,o)=>{r?n?n(r):this.verbose&&console.error(r):i&&i(o)}):(this.verbose&&console.log(`Extension ${t} already booted, skipping...`),i&&i(this.plugins[t]))}async load(t,i){if(lb.includes(t))try{let n=await ab(`./${t}.js`),s=new n.default;try{this.boot(t,s)}catch(r){console.error(`Error (2) Booting extension '${t}':`,r)}i&&i(null,s)}catch(n){console.error(`Error (1) Importing / Parsing extension '${t}':`,n),i&&i(err,null)}else{let n=new Error(`Extension ${t} not found`);console.error(n),i&&i(n,null)}}start(t){let i=this.get(t);i&&i.start()}pause(t){let i=this.get(t);i&&i.pause()}stop(t){let i=this.get(t);i&&i.stop()}status(t){let i=this.get(t);return i?i.active:!1}boot(t,i){this.plugins[t]=i,i.init()}get(t){return this.plugins[t]?this.plugins[t]:(console.warn(`Extension ${t} not found`),null)}unload(t){let i=this.get(t);i&&(i.destroy(),delete this.plugins[t])}}});Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");let t=Object(e);for(let i=1;i<arguments.length;i++){let n=arguments[i];if(n!=null)for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t});var Mp="118";var Sp=0,xu=1,Ep=2;var Mc=0,Qh=1,Sc=2,ur=3,Et=0,ut=1,Pt=2,Zh=1;var Ji=0,dr=1,ms=2,yu=3,bu=4,Tp=5,rs=100,Cp=101,Pp=102,wu=103,_u=104,Ap=200,Lp=201,Dp=202,Rp=203,Kh=204,Jh=205,Ip=206,Bp=207,Up=208,Op=209,Fp=210,kp=0,Hp=1,Gp=2,Fl=3,Np=4,Vp=5,zp=6,Wp=7,Va=0,jp=1,Xp=2,ds=0,qp=1,Yp=2,Qp=3,Zp=4,Kp=5,Ec=300,Tc=301,Cc=302,za=303,Pc=304,Kr=306,Ac=307,It=1e3,St=1001,ca=1002,it=1003,vr=1004;var kl=1005;var ke=1006,$h=1007;var Wa=1008;var Jr=1009,Jp=1010,$p=1011,gs=1012,em=1013,fs=1014,Wt=1015,nn=1016,tm=1017,im=1018,nm=1019,fr=1020,Lc=1021,gi=1022,Ye=1023,Dc=1024,sm=1025,rm=Ye,Xt=1026,xr=1027,Rc=1028,om=1029,Ic=1030,am=1031,lm=1032,cm=1033,Mu=33776,Su=33777,Eu=33778,Tu=33779,Cu=35840,Pu=35841,Au=35842,Lu=35843,um=36196,Du=37492,Ru=37496,hm=37808,dm=37809,fm=37810,pm=37811,mm=37812,gm=37813,vm=37814,xm=37815,ym=37816,bm=37817,wm=37818,_m=37819,Mm=37820,Sm=37821,Em=36492,Tm=37840,Cm=37841,Pm=37842,Am=37843,Lm=37844,Dm=37845,Rm=37846,Im=37847,Bm=37848,Um=37849,Om=37850,Fm=37851,km=37852,Hm=37853,Gm=2200,Nm=2201,Vm=2202,ua=2300,la=2301,rl=2302,vs=2400,as=2401,ha=2402,Bc=2500,ed=2501,zm=0;var Bt=3e3,Oi=3001,$r=3007,Uc=3002,Wm=3003,td=3004,id=3005,nd=3006,jm=3200,Xm=3201,Gs=0,qm=1;var ol=7680;var Ym=519,ja=35044,sn=35048;function Fi(){}Object.assign(Fi.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e)}}});var _t=[];for(let e=0;e<256;e++)_t[e]=(e<16?"0":"")+e.toString(16);var xe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[e&255]+_t[e>>8&255]+_t[e>>16&255]+_t[e>>24&255]+"-"+_t[t&255]+_t[t>>8&255]+"-"+_t[t>>16&15|64]+_t[t>>24&255]+"-"+_t[i&63|128]+_t[i>>8&255]+"-"+_t[i>>16&255]+_t[i>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toUpperCase()},clamp:function(e,t,i){return Math.max(t,Math.min(i,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,i,n,s){return n+(e-t)*(s-n)/(i-t)},lerp:function(e,t,i){return(1-i)*e+i*t},smoothstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))},smootherstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*xe.DEG2RAD},radToDeg:function(e){return e*xe.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,i,n,s){let r=Math.cos,o=Math.sin,a=r(i/2),l=o(i/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":e.set(a*h,l*u,l*f,a*c);break;case"YZY":e.set(l*f,a*h,l*u,a*c);break;case"ZXZ":e.set(l*u,l*f,a*h,a*c);break;case"XZX":e.set(a*h,l*p,l*d,a*c);break;case"YXY":e.set(l*d,a*h,l*p,a*c);break;case"ZYZ":e.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}};function N(e=0,t=0){this.x=e,this.y=t}Object.defineProperties(N.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}});Object.assign(N.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this},clampLength:function(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function yt(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(yt.prototype,{isMatrix3:!0,set:function(e,t,i,n,s,r,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=a,c[6]=i,c[7]=r,c[8]=l,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this},extractBasis:function(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this},setFromMatrix4:function(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],u=i[2],f=i[5],d=i[8],p=n[0],y=n[3],v=n[6],m=n[1],g=n[4],E=n[7],M=n[2],C=n[5],L=n[8];return s[0]=r*p+o*m+a*M,s[3]=r*y+o*g+a*C,s[6]=r*v+o*E+a*L,s[1]=l*p+c*m+h*M,s[4]=l*y+c*g+h*C,s[7]=l*v+c*E+h*L,s[2]=u*p+f*m+d*M,s[5]=u*y+f*g+d*C,s[8]=u*v+f*E+d*L,this},multiplyScalar:function(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*r*c-t*o*l-i*s*c+i*o*a+n*s*l-n*r*a},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");let i=e.elements,n=this.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],d=f*l-c*u,p=c*h-f*a,y=u*a-l*h,v=s*d+r*p+o*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/v;return n[0]=d*m,n[1]=(o*u-f*r)*m,n[2]=(c*r-o*l)*m,n[3]=p*m,n[4]=(f*s-o*h)*m,n[5]=(o*a-c*s)*m,n[6]=y*m,n[7]=(r*h-u*s)*m,n[8]=(l*s-r*a)*m,this},transpose:function(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,i,n,s,r,o){let a=Math.cos(s),l=Math.sin(s);this.set(i*a,i*l,-i*(a*r+l*o)+r+e,-n*l,n*a,-n*(-l*r+a*o)+o+t,0,0,1)},scale:function(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this},rotate:function(e){let t=Math.cos(e),i=Math.sin(e),n=this.elements,s=n[0],r=n[3],o=n[6],a=n[1],l=n[4],c=n[7];return n[0]=t*s+i*a,n[3]=t*r+i*l,n[6]=t*o+i*c,n[1]=-i*s+t*a,n[4]=-i*r+t*l,n[7]=-i*o+t*c,this},translate:function(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this},equals:function(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}});var Vn,Cn={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Vn.width=e.width,Vn.height=e.height;let i=Vn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}},Qm=0;function ze(e,t,i,n,s,r,o,a,l,c){Object.defineProperty(this,"id",{value:Qm++}),this.uuid=xe.generateUUID(),this.name="",this.image=e!==void 0?e:ze.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:ze.DEFAULT_MAPPING,this.wrapS=i!==void 0?i:St,this.wrapT=n!==void 0?n:St,this.magFilter=s!==void 0?s:ke,this.minFilter=r!==void 0?r:Wa,this.anisotropy=l!==void 0?l:1,this.format=o!==void 0?o:Ye,this.internalFormat=null,this.type=a!==void 0?a:Jr,this.offset=new N(0,0),this.repeat=new N(1,1),this.center=new N(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c!==void 0?c:Bt,this.version=0,this.onUpdate=null}ze.DEFAULT_IMAGE=void 0;ze.DEFAULT_MAPPING=Ec;ze.prototype=Object.assign(Object.create(Fi.prototype),{constructor:ze,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let n=this.image;if(n.uuid===void 0&&(n.uuid=xe.generateUUID()),!t&&e.images[n.uuid]===void 0){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)s.push(Cn.getDataURL(n[r]))}else s=Cn.getDataURL(n);e.images[n.uuid]={uuid:n.uuid,url:s}}i.image=n.uuid}return t||(e.textures[this.uuid]=i),i},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case It:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case It:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(ze.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Oe(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}Object.defineProperties(Oe.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}});Object.assign(Oe.prototype,{isVector4:!0,set:function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){let t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){let t,i,n,s,a=e.elements,l=a[0],c=a[4],h=a[8],u=a[1],f=a[5],d=a[9],p=a[2],y=a[6],v=a[10];if(Math.abs(c-u)<.01&&Math.abs(h-p)<.01&&Math.abs(d-y)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(l+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,E=(f+1)/2,M=(v+1)/2,C=(c+u)/4,L=(h+p)/4,B=(d+y)/4;return g>E&&g>M?g<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(g),n=C/i,s=L/i):E>M?E<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(E),i=C/n,s=B/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=L/s,n=B/s),this.set(i,n,s,t),this}let m=Math.sqrt((y-d)*(y-d)+(h-p)*(h-p)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(y-d)/m,this.y=(h-p)/m,this.z=(u-c)/m,this.w=Math.acos((l+f+v-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this},clampLength:function(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Je(e,t,i){this.width=e,this.height=t,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),i=i||{},this.texture=new ze(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ke,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!0,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}Je.prototype=Object.assign(Object.create(Fi.prototype),{constructor:Je,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Iu(e,t,i){Je.call(this,e,t,i),this.samples=4}Iu.prototype=Object.assign(Object.create(Je.prototype),{constructor:Iu,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Je.prototype.copy.call(this,e),this.samples=e.samples,this}});function Ie(e=0,t=0,i=0,n=1){this._x=e,this._y=t,this._z=i,this._w=n}Object.assign(Ie,{slerp:function(e,t,i,n){return i.copy(e).slerp(t,n)},slerpFlat:function(e,t,i,n,s,r,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r+0],f=s[r+1],d=s[r+2],p=s[r+3];if(h!==p||a!==u||l!==f||c!==d){let y=1-o,v=a*u+l*f+c*d+h*p,m=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let M=Math.sqrt(g),C=Math.atan2(M,v*m);y=Math.sin(y*C)/M,o=Math.sin(o*C)/M}let E=o*m;if(a=a*y+u*E,l=l*y+f*E,c=c*y+d*E,h=h*y+p*E,y===1-o){let M=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=M,l*=M,c*=M,h*=M}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h},multiplyQuaternionsFlat:function(e,t,i,n,s,r){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=s[r],u=s[r+1],f=s[r+2],d=s[r+3];return e[t]=o*d+c*h+a*f-l*u,e[t+1]=a*d+c*u+l*h-o*f,e[t+2]=l*d+c*f+o*u-a*h,e[t+3]=c*d-o*h-a*u-l*f,e}});Object.defineProperties(Ie.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}});Object.assign(Ie.prototype,{isQuaternion:!0,set:function(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,n=e._y,s=e._z,r=e.order,o=Math.cos,a=Math.sin,l=o(i/2),c=o(n/2),h=o(s/2),u=a(i/2),f=a(n/2),d=a(s/2);switch(r){case"XYZ":this._x=u*c*h+l*f*d,this._y=l*f*h-u*c*d,this._z=l*c*d+u*f*h,this._w=l*c*h-u*f*d;break;case"YXZ":this._x=u*c*h+l*f*d,this._y=l*f*h-u*c*d,this._z=l*c*d-u*f*h,this._w=l*c*h+u*f*d;break;case"ZXY":this._x=u*c*h-l*f*d,this._y=l*f*h+u*c*d,this._z=l*c*d+u*f*h,this._w=l*c*h-u*f*d;break;case"ZYX":this._x=u*c*h-l*f*d,this._y=l*f*h+u*c*d,this._z=l*c*d-u*f*h,this._w=l*c*h+u*f*d;break;case"YZX":this._x=u*c*h+l*f*d,this._y=l*f*h+u*c*d,this._z=l*c*d-u*f*h,this._w=l*c*h-u*f*d;break;case"XZY":this._x=u*c*h-l*f*d,this._y=l*f*h-u*c*d,this._z=l*c*d+u*f*h,this._w=l*c*h+u*f*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this},setFromRotationMatrix:function(e){let t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],u=i+o+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-a)*f,this._y=(s-l)*f,this._z=(r-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(c-a)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(a+c)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(r-n)/f,this._x=(s+l)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this},setFromUnitVectors:function(e,t){let n=e.dot(t)+1;return n<1e-6?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()},angleTo:function(e){return 2*Math.acos(Math.abs(xe.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,a=t._y,l=t._z,c=t._w;return this._x=i*c+r*o+n*l-s*a,this._y=n*c+r*a+s*o-i*l,this._z=s*c+r*l+i*a-n*o,this._w=r*c-i*o-n*a-s*l,this._onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,r=this._w,o=r*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;let a=1-o*o;if(a<=Number.EPSILON){let f=1-t;return this._w=f*r+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},fromBufferAttribute:function(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});var al=new P,Bu=new Ie;function P(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}Object.assign(P.prototype,{isVector3:!0,set:function(e,t,i){return this.x=e,this.y=t,this.z=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Bu.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))},applyMatrix3:function(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(e){let t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this},applyQuaternion:function(e){let t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,a=e.w,l=a*t+r*n-o*i,c=a*i+o*t-s*n,h=a*n+s*i-r*t,u=-s*t-r*i-o*n;return this.x=l*a+u*-s+c*-o-h*-r,this.y=c*a+u*-r+h*-s-l*-o,this.z=h*a+u*-o+l*-r-c*-s,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this},clampLength:function(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this},cross:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){let i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=n*a-s*o,this.y=s*r-i*a,this.z=i*o-n*r,this},projectOnVector:function(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)},projectOnPlane:function(e){return al.copy(this).projectOnVector(e),this.sub(al)},reflect:function(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xe.clamp(i,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this},setFromMatrixPosition:function(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,t*4)},setFromMatrix3Column:function(e,t){return this.fromArray(e.elements,t*3)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});var zn=new P,ti=new ue,Zm=new P(0,0,0),Km=new P(1,1,1),zi=new P,Mo=new P,Ot=new P;function ue(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(ue.prototype,{isMatrix4:!0,set:function(e,t,i,n,s,r,o,a,l,c,h,u,f,d,p,y){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=s,v[5]=r,v[9]=o,v[13]=a,v[2]=l,v[6]=c,v[10]=h,v[14]=u,v[3]=f,v[7]=d,v[11]=p,v[15]=y,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new ue().fromArray(this.elements)},copy:function(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this},copyPosition:function(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this},extractBasis:function(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this},extractRotation:function(e){let t=this.elements,i=e.elements,n=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),r=1/zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=r*c,f=r*h,d=o*c,p=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=f+d*l,t[5]=u-p*l,t[9]=-o*a,t[2]=p-u*l,t[6]=d+f*l,t[10]=r*a}else if(e.order==="YXZ"){let u=a*c,f=a*h,d=l*c,p=l*h;t[0]=u+p*o,t[4]=d*o-f,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-o,t[2]=f*o-d,t[6]=p+u*o,t[10]=r*a}else if(e.order==="ZXY"){let u=a*c,f=a*h,d=l*c,p=l*h;t[0]=u-p*o,t[4]=-r*h,t[8]=d+f*o,t[1]=f+d*o,t[5]=r*c,t[9]=p-u*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){let u=r*c,f=r*h,d=o*c,p=o*h;t[0]=a*c,t[4]=d*l-f,t[8]=u*l+p,t[1]=a*h,t[5]=p*l+u,t[9]=f*l-d,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){let u=r*a,f=r*l,d=o*a,p=o*l;t[0]=a*c,t[4]=p-u*h,t[8]=d*h+f,t[1]=h,t[5]=r*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*h+d,t[10]=u-p*h}else if(e.order==="XZY"){let u=r*a,f=r*l,d=o*a,p=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=u*h+p,t[5]=r*c,t[9]=f*h-d,t[2]=d*h-f,t[6]=o*c,t[10]=p*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(Zm,e,Km)},lookAt:function(e,t,i){let n=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),zi.crossVectors(i,Ot),zi.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),zi.crossVectors(i,Ot)),zi.normalize(),Mo.crossVectors(Ot,zi),n[0]=zi.x,n[4]=Mo.x,n[8]=Ot.x,n[1]=zi.y,n[5]=Mo.y,n[9]=Ot.y,n[2]=zi.z,n[6]=Mo.z,n[10]=Ot.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],u=i[9],f=i[13],d=i[2],p=i[6],y=i[10],v=i[14],m=i[3],g=i[7],E=i[11],M=i[15],C=n[0],L=n[4],B=n[8],G=n[12],O=n[1],x=n[5],b=n[9],w=n[13],S=n[2],_=n[6],T=n[10],A=n[14],I=n[3],F=n[7],V=n[11],k=n[15];return s[0]=r*C+o*O+a*S+l*I,s[4]=r*L+o*x+a*_+l*F,s[8]=r*B+o*b+a*T+l*V,s[12]=r*G+o*w+a*A+l*k,s[1]=c*C+h*O+u*S+f*I,s[5]=c*L+h*x+u*_+f*F,s[9]=c*B+h*b+u*T+f*V,s[13]=c*G+h*w+u*A+f*k,s[2]=d*C+p*O+y*S+v*I,s[6]=d*L+p*x+y*_+v*F,s[10]=d*B+p*b+y*T+v*V,s[14]=d*G+p*w+y*A+v*k,s[3]=m*C+g*O+E*S+M*I,s[7]=m*L+g*x+E*_+M*F,s[11]=m*B+g*b+E*T+M*V,s[15]=m*G+g*w+E*A+M*k,this},multiplyScalar:function(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},determinant:function(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],u=e[10],f=e[14],d=e[3],p=e[7],y=e[11],v=e[15];return d*(+s*a*h-n*l*h-s*o*u+i*l*u+n*o*f-i*a*f)+p*(+t*a*f-t*l*u+s*r*u-n*r*f+n*l*c-s*a*c)+y*(+t*l*h-t*o*f-s*r*h+i*r*f+s*o*c-i*l*c)+v*(-n*o*c-t*a*h+t*o*u+n*r*h-i*r*u+i*a*c)},transpose:function(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");let i=this.elements,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],p=n[10],y=n[11],v=n[12],m=n[13],g=n[14],E=n[15],M=d*g*u-m*p*u+m*h*y-c*g*y-d*h*E+c*p*E,C=v*p*u-f*g*u-v*h*y+l*g*y+f*h*E-l*p*E,L=f*m*u-v*d*u+v*c*y-l*m*y-f*c*E+l*d*E,B=v*d*h-f*m*h-v*c*p+l*m*p+f*c*g-l*d*g,G=s*M+r*C+o*L+a*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/G;return i[0]=M*O,i[1]=(m*p*a-d*g*a-m*o*y+r*g*y+d*o*E-r*p*E)*O,i[2]=(c*g*a-m*h*a+m*o*u-r*g*u-c*o*E+r*h*E)*O,i[3]=(d*h*a-c*p*a-d*o*u+r*p*u+c*o*y-r*h*y)*O,i[4]=C*O,i[5]=(f*g*a-v*p*a+v*o*y-s*g*y-f*o*E+s*p*E)*O,i[6]=(v*h*a-l*g*a-v*o*u+s*g*u+l*o*E-s*h*E)*O,i[7]=(l*p*a-f*h*a+f*o*u-s*p*u-l*o*y+s*h*y)*O,i[8]=L*O,i[9]=(v*d*a-f*m*a-v*r*y+s*m*y+f*r*E-s*d*E)*O,i[10]=(l*m*a-v*c*a+v*r*u-s*m*u-l*r*E+s*c*E)*O,i[11]=(f*c*a-l*d*a-f*r*u+s*d*u+l*r*y-s*c*y)*O,i[12]=B*O,i[13]=(f*m*o-v*d*o+v*r*p-s*m*p-f*r*g+s*d*g)*O,i[14]=(v*c*o-l*m*o-v*r*h+s*m*h+l*r*g-s*c*g)*O,i[15]=(l*d*o-f*c*o+f*r*h-s*d*h-l*r*p+s*c*p)*O,this},scale:function(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this},getMaxScaleOnAxis:function(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))},makeTranslation:function(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this},makeRotationX:function(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this},makeRotationY:function(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this},makeRotationZ:function(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,a=e.z,l=s*r,c=s*o;return this.set(l*r+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*r,0,l*a-n*o,c*a+n*r,s*a*a+i,0,0,0,0,1),this},makeScale:function(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this},makeShear:function(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,i){let n=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,l=s+s,c=r+r,h=o+o,u=s*l,f=s*c,d=s*h,p=r*c,y=r*h,v=o*h,m=a*l,g=a*c,E=a*h,M=i.x,C=i.y,L=i.z;return n[0]=(1-(p+v))*M,n[1]=(f+E)*M,n[2]=(d-g)*M,n[3]=0,n[4]=(f-E)*C,n[5]=(1-(u+v))*C,n[6]=(y+m)*C,n[7]=0,n[8]=(d+g)*L,n[9]=(y-m)*L,n[10]=(1-(u+p))*L,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this},decompose:function(e,t,i){let n=this.elements,s=zn.set(n[0],n[1],n[2]).length(),r=zn.set(n[4],n[5],n[6]).length(),o=zn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ti.copy(this);let l=1/s,c=1/r,h=1/o;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=c,ti.elements[5]*=c,ti.elements[6]*=c,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),i.x=s,i.y=r,i.z=o,this},makePerspective:function(e,t,i,n,s,r){r===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let o=this.elements,a=2*s/(t-e),l=2*s/(i-n),c=(t+e)/(t-e),h=(i+n)/(i-n),u=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(e,t,i,n,s,r){let o=this.elements,a=1/(t-e),l=1/(i-n),c=1/(r-s),h=(t+e)*a,u=(i+n)*l,f=(r+s)*c;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}});var Uu=new ue,Ou=new Ie;function ht(e=0,t=0,i=0,n=ht.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=n}ht.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];ht.DefaultOrder="XYZ";Object.defineProperties(ht.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}});Object.assign(ht.prototype,{isEuler:!0,set:function(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._order=n||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(e,t,i){let n=xe.clamp,s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new P(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});function Oc(){this.mask=1}Object.assign(Oc.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},disableAll:function(){this.mask=0},test:function(e){return(this.mask&e.mask)!==0}});var Jm=0,Fu=new P,Wn=new Ie,Ei=new ue,So=new P,er=new P,$m=new P,eg=new Ie,ku=new P(1,0,0),Hu=new P(0,1,0),Gu=new P(0,0,1),tg={type:"added"},ig={type:"removed"};function ne(){Object.defineProperty(this,"id",{value:Jm++}),this.uuid=xe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DefaultUp.clone();let e=new P,t=new ht,i=new Ie,n=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new yt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}ne.DefaultUp=new P(0,1,0);ne.DefaultMatrixAutoUpdate=!0;ne.prototype=Object.assign(Object.create(Fi.prototype),{constructor:ne,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this},rotateOnWorldAxis:function(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this},rotateX:function(e){return this.rotateOnAxis(ku,e)},rotateY:function(e){return this.rotateOnAxis(Hu,e)},rotateZ:function(e){return this.rotateOnAxis(Gu,e)},translateOnAxis:function(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(ku,e)},translateY:function(e){return this.translateOnAxis(Hu,e)},translateZ:function(e){return this.translateOnAxis(Gu,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(Ei.getInverse(this.matrixWorld))},lookAt:function(e,t,i){e.isVector3?So.copy(e):So.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(er,So,this.up):Ei.lookAt(So,er,this.up),this.quaternion.setFromRotationMatrix(Ei),n&&(Ei.extractRotation(n.matrixWorld),Wn.setFromRotationMatrix(Ei),this.quaternion.premultiply(Wn.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ig)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),Ei.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new P),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Ie),this.updateMatrixWorld(!0),this.matrixWorld.decompose(er,e,$m),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new P),this.updateMatrixWorld(!0),this.matrixWorld.decompose(er,eg,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new P),this.updateMatrixWorld(!0);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)},traverseAncestors:function(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}},toJSON:function(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON());function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];s(e.shapes,h)}else s(e.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(t){let o=r(e.geometries),a=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes);o.length>0&&(i.geometries=o),a.length>0&&(i.materials=a),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h)}return i.object=n,i;function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}});function rn(){ne.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}rn.prototype=Object.assign(Object.create(ne.prototype),{constructor:rn,isScene:!0,copy:function(e,t){return ne.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){let t=ne.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ti=[new P,new P,new P,new P,new P,new P,new P,new P],tr=new P,ll=new Jt,jn=new P,Xn=new P,qn=new P,Wi=new P,ji=new P,vn=new P,ir=new P,Eo=new P,To=new P,xn=new P;function Jt(e,t){this.min=e!==void 0?e:new P(1/0,1/0,1/0),this.max=t!==void 0?t:new P(-1/0,-1/0,-1/0)}Object.assign(Jt.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=3){let c=e[a],h=e[a+1],u=e[a+2];c<t&&(t=c),h<i&&(i=h),u<n&&(n=u),c>s&&(s=c),h>r&&(r=h),u>o&&(o=u)}return this.min.set(t,i,n),this.max.set(s,r,o),this},setFromBufferAttribute:function(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.count;a<l;a++){let c=e.getX(a),h=e.getY(a),u=e.getZ(a);c<t&&(t=c),h<i&&(i=h),u<n&&(n=u),c>s&&(s=c),h>r&&(r=h),u>o&&(o=u)}return this.min.set(t,i,n),this.max.set(s,r,o),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){let i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new P),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new P),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox),ll.applyMatrix4(e.matrixWorld),this.union(ll));let i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new P),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(ir),Eo.subVectors(this.max,ir),jn.subVectors(e.a,ir),Xn.subVectors(e.b,ir),qn.subVectors(e.c,ir),Wi.subVectors(Xn,jn),ji.subVectors(qn,Xn),vn.subVectors(jn,qn);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-vn.z,vn.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,vn.z,0,-vn.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-vn.y,vn.x,0];return!cl(t,jn,Xn,qn,Eo)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,jn,Xn,qn,Eo))?!1:(To.crossVectors(Wi,ji),t=[To.x,To.y,To.z],cl(t,jn,Xn,qn,Eo))},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new P),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return tr.copy(e).clamp(this.min,this.max).sub(e).length()},getBoundingSphere:function(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5,e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function cl(e,t,i,n,s){for(let r=0,o=e.length-3;r<=o;r+=3){xn.fromArray(e,r);let a=s.x*Math.abs(xn.x)+s.y*Math.abs(xn.y)+s.z*Math.abs(xn.z),l=t.dot(xn),c=i.dot(xn),h=n.dot(xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ng=new Jt;function ki(e,t){this.center=e!==void 0?e:new P,this.radius=t!==void 0?t:-1}Object.assign(ki.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){let i=this.center;t!==void 0?i.copy(t):ng.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new P),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Jt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}});var Ci=new P,ul=new P,Co=new P,Xi=new P,hl=new P,Po=new P,dl=new P;function Ns(e,t){this.origin=e!==void 0?e:new P,this.direction=t!==void 0?t:new P(0,0,-1)}Object.assign(Ns.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new P),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,Ci)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new P),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.direction).multiplyScalar(t).add(this.origin),Ci.distanceToSquared(e))},distanceSqToSegment:function(e,t,i,n){ul.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(ul);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Co),o=Xi.dot(this.direction),a=-Xi.dot(Co),l=Xi.lengthSq(),c=Math.abs(1-r*r),h,u,f,d;if(c>0)if(h=r*a-o,u=r*o-a,d=s*c,h>=0)if(u>=-d)if(u<=d){let p=1/c;h*=p,u*=p,f=h*(h+r*u+2*o)+u*(r*h+u+2*a)+l}else u=s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*a)+l;else u=-s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*a)+l;else u<=-d?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-a),s),f=-h*h+u*(u+2*a)+l):u<=d?(h=0,u=Math.min(Math.max(-s,-a),s),f=u*(u+2*a)+l):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-a),s),f=-h*h+u*(u+2*a)+l);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*a)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),n&&n.copy(Co).multiplyScalar(u).add(ul),f},intersectSphere:function(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(n>s)return null;let r=Math.sqrt(s-n),o=i-r,a=i+r;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null},intersectPlane:function(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)},intersectsPlane:function(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0},intersectBox:function(e,t){let i,n,s,r,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l),c>=0?(s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c),i>r||s>n||((s>i||i!==i)&&(i=s),(r<n||n!==n)&&(n=r),h>=0?(o=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h),i>a||o>n)||((o>i||i!==i)&&(i=o),(a<n||n!==n)&&(n=a),n<0)?null:this.at(i>=0?i:n,t)},intersectsBox:function(e){return this.intersectBox(e,Ci)!==null},intersectTriangle:function(e,t,i,n,s){hl.subVectors(t,e),Po.subVectors(i,e),dl.crossVectors(hl,Po);let r=this.direction.dot(dl),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xi.subVectors(this.origin,e);let a=o*this.direction.dot(Po.crossVectors(Xi,Po));if(a<0)return null;let l=o*this.direction.dot(hl.cross(Xi));if(l<0||a+l>r)return null;let c=-o*Xi.dot(dl);return c<0?null:this.at(c/r,s)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}});var fl=new P,sg=new P,rg=new yt;function di(e,t){this.normal=e!==void 0?e:new P(1,0,0),this.constant=t!==void 0?t:0}Object.assign(di.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,i){let n=fl.subVectors(i,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new P),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new P);let i=e.delta(fl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;let s=-(e.start.dot(this.normal)+this.constant)/n;if(!(s<0||s>1))return t.copy(i).multiplyScalar(s).add(e.start)},intersectsLine:function(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new P),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){let i=t||rg.getNormalMatrix(e),n=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}});var si=new P,Ai=new P,pl=new P,Pi=new P,Yn=new P,Qn=new P,Nu=new P,ml=new P,gl=new P,vl=new P;function Mt(e,t,i){this.a=e!==void 0?e:new P,this.b=t!==void 0?t:new P,this.c=i!==void 0?i:new P}Object.assign(Mt,{getNormal:function(e,t,i,n){n===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),n=new P),n.subVectors(i,t),si.subVectors(e,t),n.cross(si);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)},getBarycoord:function(e,t,i,n,s){si.subVectors(n,t),Ai.subVectors(i,t),pl.subVectors(e,t);let r=si.dot(si),o=si.dot(Ai),a=si.dot(pl),l=Ai.dot(Ai),c=Ai.dot(pl),h=r*l-o*o;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new P),h===0)return s.set(-2,-1,-1);let u=1/h,f=(l*a-o*c)*u,d=(r*c-o*a)*u;return s.set(1-f-d,d,f)},containsPoint:function(e,t,i,n){return Mt.getBarycoord(e,t,i,n,Pi),Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1},getUV:function(e,t,i,n,s,r,o,a){return this.getBarycoord(e,t,i,n,Pi),a.set(0,0),a.addScaledVector(s,Pi.x),a.addScaledVector(r,Pi.y),a.addScaledVector(o,Pi.z),a},isFrontFacing:function(e,t,i,n){return si.subVectors(i,t),Ai.subVectors(e,t),si.cross(Ai).dot(n)<0}});Object.assign(Mt.prototype,{set:function(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this},setFromPointsAndIndices:function(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return si.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),si.cross(Ai).length()*.5},getMidpoint:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new P),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return Mt.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new di),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return Mt.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,i,n,s){return Mt.getUV(e,this.a,this.b,this.c,t,i,n,s)},containsPoint:function(e){return Mt.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return Mt.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new P);let i=this.a,n=this.b,s=this.c,r,o;Yn.subVectors(n,i),Qn.subVectors(s,i),ml.subVectors(e,i);let a=Yn.dot(ml),l=Qn.dot(ml);if(a<=0&&l<=0)return t.copy(i);gl.subVectors(e,n);let c=Yn.dot(gl),h=Qn.dot(gl);if(c>=0&&h<=c)return t.copy(n);let u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(i).addScaledVector(Yn,r);vl.subVectors(e,s);let f=Yn.dot(vl),d=Qn.dot(vl);if(d>=0&&f<=d)return t.copy(s);let p=f*l-a*d;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Qn,o);let y=c*d-f*h;if(y<=0&&h-c>=0&&f-d>=0)return Nu.subVectors(s,n),o=(h-c)/(h-c+(f-d)),t.copy(n).addScaledVector(Nu,o);let v=1/(y+p+u);return r=p*v,o=u*v,t.copy(i).addScaledVector(Yn,r).addScaledVector(Qn,o)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}});var sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function $(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}function xl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function yl(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function bl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}Object.assign($.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,i){return this.r=e,this.g=t,this.b=i,this},setHSL:function(e,t,i){if(e=xe.euclideanModulo(e,1),t=xe.clamp(t,0,1),i=xe.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=xl(s,n,e+1/3),this.g=xl(s,n,e),this.b=xl(s,n,e-1/3)}return this},setStyle:function(e){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let n,s=i[1],r=i[2];switch(s){case"rgb":case"rgba":if(n=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,t(n[5]),this;if(n=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,t(n[5]),this;break;case"hsl":case"hsla":if(n=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)){let o=parseFloat(n[1])/360,a=parseInt(n[2],10)/100,l=parseInt(n[3],10)/100;return t(n[5]),this.setHSL(o,a,l)}break}}else if(i=/^\#([A-Fa-f0-9]+)$/.exec(e)){let n=i[1],s=n.length;if(s===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this},setColorName:function(e){let t=sd[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=yl(e.r),this.g=yl(e.g),this.b=yl(e.b),this},copyLinearToSRGB:function(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,n=this.b,s=Math.max(t,i,n),r=Math.min(t,i,n),o,a,l=(r+s)/2;if(r===s)o=0,a=0;else{let c=s-r;switch(a=l<=.5?c/(s+r):c/(2-s-r),s){case t:o=(i-n)/c+(i<n?6:0);break;case i:o=(n-t)/c+2;break;case n:o=(t-i)/c+4;break}o/=6}return e.h=o,e.s=a,e.l=l,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,i){return this.getHSL(ii),ii.h+=e,ii.s+=t,ii.l+=i,this.setHSL(ii.h,ii.s,ii.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(ii),e.getHSL(Ao);let i=xe.lerp(ii.h,Ao.h,t),n=xe.lerp(ii.s,Ao.s,t),s=xe.lerp(ii.l,Ao.l,t);return this.setHSL(i,n,s),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},fromBufferAttribute:function(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});$.NAMES=sd;function da(e,t,i,n,s,r){this.a=e,this.b=t,this.c=i,this.normal=n&&n.isVector3?n:new P,this.vertexNormals=Array.isArray(n)?n:[],this.color=s&&s.isColor?s:new $,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=r!==void 0?r:0}Object.assign(da.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,i=e.vertexNormals.length;t<i;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,i=e.vertexColors.length;t<i;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});var og=0;function Ee(){Object.defineProperty(this,"id",{value:og++}),this.uuid=xe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=dr,this.side=Et,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kh,this.blendDst=Jh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ol,this.stencilZFail=ol,this.stencilZPass=ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Ee.prototype=Object.assign(Object.create(Fi.prototype),{constructor:Ee,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Zh;continue}let n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}},toJSON:function(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(i.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,i.reflectivity=this.reflectivity,i.refractionRatio=this.refractionRatio,this.combine!==void 0&&(i.combine=this.combine),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.flatShading===!0&&(i.flatShading=this.flatShading),this.side!==Et&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(i.morphTargets=!0),this.morphNormals===!0&&(i.morphNormals=!0),this.skinning===!0&&(i.skinning=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(t){let s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Ee.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function bt(e){Ee.call(this),this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}bt.prototype=Object.create(Ee.prototype);bt.prototype.constructor=bt;bt.prototype.isMeshBasicMaterial=!0;bt.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};var je=new P,Lo=new N;function _e(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ja,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(_e.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(_e.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){let t=this.array,i=0;for(let n=0,s=e.length;n<s;n++){let r=e[n];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),r=new $),t[i++]=r.r,t[i++]=r.g,t[i++]=r.b}return this},copyVector2sArray:function(e){let t=this.array,i=0;for(let n=0,s=e.length;n<s;n++){let r=e[n];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),r=new N),t[i++]=r.x,t[i++]=r.y}return this},copyVector3sArray:function(e){let t=this.array,i=0;for(let n=0,s=e.length;n<s;n++){let r=e[n];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),r=new P),t[i++]=r.x,t[i++]=r.y,t[i++]=r.z}return this},copyVector4sArray:function(e){let t=this.array,i=0;for(let n=0,s=e.length;n<s;n++){let r=e[n];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),r=new Oe),t[i++]=r.x,t[i++]=r.y,t[i++]=r.z,t[i++]=r.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this},applyMatrix4:function(e){for(let t=0,i=this.count;t<i;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this},applyNormalMatrix:function(e){for(let t=0,i=this.count;t<i;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this},transformDirection:function(e){for(let t=0,i=this.count;t<i;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this},setXYZ:function(e,t,i,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this},setXYZW:function(e,t,i,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Hl(e,t,i){_e.call(this,new Int8Array(e),t,i)}Hl.prototype=Object.create(_e.prototype);Hl.prototype.constructor=Hl;function Gl(e,t,i){_e.call(this,new Uint8Array(e),t,i)}Gl.prototype=Object.create(_e.prototype);Gl.prototype.constructor=Gl;function Nl(e,t,i){_e.call(this,new Uint8ClampedArray(e),t,i)}Nl.prototype=Object.create(_e.prototype);Nl.prototype.constructor=Nl;function Vl(e,t,i){_e.call(this,new Int16Array(e),t,i)}Vl.prototype=Object.create(_e.prototype);Vl.prototype.constructor=Vl;function Pn(e,t,i){_e.call(this,new Uint16Array(e),t,i)}Pn.prototype=Object.create(_e.prototype);Pn.prototype.constructor=Pn;function zl(e,t,i){_e.call(this,new Int32Array(e),t,i)}zl.prototype=Object.create(_e.prototype);zl.prototype.constructor=zl;function yr(e,t,i){_e.call(this,new Uint32Array(e),t,i)}yr.prototype=Object.create(_e.prototype);yr.prototype.constructor=yr;function ie(e,t,i){_e.call(this,new Float32Array(e),t,i)}ie.prototype=Object.create(_e.prototype);ie.prototype.constructor=ie;function Wl(e,t,i){_e.call(this,new Float64Array(e),t,i)}Wl.prototype=Object.create(_e.prototype);Wl.prototype.constructor=Wl;function rd(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(rd.prototype,{computeGroups:function(e){let t=[],i,n,s,r=e.faces;for(n=0;n<r.length;n++){let o=r[n];o.materialIndex!==s&&(s=o.materialIndex,i!==void 0&&(i.count=n*3-i.start,t.push(i)),i={start:n*3,materialIndex:s})}i!==void 0&&(i.count=n*3-i.start,t.push(i)),this.groups=t},fromGeometry:function(e){let t=e.faces,i=e.vertices,n=e.faceVertexUvs,s=n[0]&&n[0].length>0,r=n[1]&&n[1].length>0,o=e.morphTargets,a=o.length,l;if(a>0){l=[];for(let v=0;v<a;v++)l[v]={name:o[v].name,data:[]};this.morphTargets.position=l}let c=e.morphNormals,h=c.length,u;if(h>0){u=[];for(let v=0;v<h;v++)u[v]={name:c[v].name,data:[]};this.morphTargets.normal=u}let f=e.skinIndices,d=e.skinWeights,p=f.length===i.length,y=d.length===i.length;i.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let v=0;v<t.length;v++){let m=t[v];this.vertices.push(i[m.a],i[m.b],i[m.c]);let g=m.vertexNormals;if(g.length===3)this.normals.push(g[0],g[1],g[2]);else{let M=m.normal;this.normals.push(M,M,M)}let E=m.vertexColors;if(E.length===3)this.colors.push(E[0],E[1],E[2]);else{let M=m.color;this.colors.push(M,M,M)}if(s===!0){let M=n[0][v];M!==void 0?this.uvs.push(M[0],M[1],M[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",v),this.uvs.push(new N,new N,new N))}if(r===!0){let M=n[1][v];M!==void 0?this.uvs2.push(M[0],M[1],M[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",v),this.uvs2.push(new N,new N,new N))}for(let M=0;M<a;M++){let C=o[M].vertices;l[M].data.push(C[m.a],C[m.b],C[m.c])}for(let M=0;M<h;M++){let C=c[M].vertexNormals[v];u[M].data.push(C.a,C.b,C.c)}p&&this.skinIndices.push(f[m.a],f[m.b],f[m.c]),y&&this.skinWeights.push(d[m.a],d[m.b],d[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}});function od(e){if(e.length===0)return-1/0;let t=e[0];for(let i=1,n=e.length;i<n;++i)e[i]>t&&(t=e[i]);return t}var ag=1,ci=new ue,wl=new ne,Zn=new P,Ft=new Jt,nr=new Jt,xt=new P;function ae(){Object.defineProperty(this,"id",{value:ag+=2}),this.uuid=xe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}ae.prototype=Object.assign(Object.create(Fi.prototype),{constructor:ae,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(od(e)>65535?yr:Pn)(e,1):this.index=e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,i){this.groups.push({start:e,count:t,materialIndex:i!==void 0?i:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new yt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this},rotateY:function(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this},rotateZ:function(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this},translate:function(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this},scale:function(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this},lookAt:function(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this},setFromObject:function(e){let t=e.geometry;if(e.isPoints||e.isLine){let i=new ie(t.vertices.length*3,3),n=new ie(t.colors.length*3,3);if(this.setAttribute("position",i.copyVector3sArray(t.vertices)),this.setAttribute("color",n.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){let s=new ie(t.lineDistances.length,1);this.setAttribute("lineDistance",s.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let i=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(i=void 0,t.elementsNeedUpdate=!1),i===void 0)return this.fromGeometry(t);i.verticesNeedUpdate=t.verticesNeedUpdate,i.normalsNeedUpdate=t.normalsNeedUpdate,i.colorsNeedUpdate=t.colorsNeedUpdate,i.uvsNeedUpdate=t.uvsNeedUpdate,i.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=i}if(t.verticesNeedUpdate===!0){let i=this.attributes.position;i!==void 0&&(i.copyVector3sArray(t.vertices),i.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){let i=this.attributes.normal;i!==void 0&&(i.copyVector3sArray(t.normals),i.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){let i=this.attributes.color;i!==void 0&&(i.copyColorsArray(t.colors),i.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){let i=this.attributes.uv;i!==void 0&&(i.copyVector2sArray(t.uvs),i.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){let i=this.attributes.lineDistance;i!==void 0&&(i.copyArray(t.lineDistances),i.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new rd().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){let t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new _e(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){let i=new Float32Array(e.normals.length*3);this.setAttribute("normal",new _e(i,3).copyVector3sArray(e.normals))}if(e.colors.length>0){let i=new Float32Array(e.colors.length*3);this.setAttribute("color",new _e(i,3).copyColorsArray(e.colors))}if(e.uvs.length>0){let i=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new _e(i,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){let i=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new _e(i,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(let i in e.morphTargets){let n=[],s=e.morphTargets[i];for(let r=0,o=s.length;r<o;r++){let a=s[r],l=new ie(a.data.length*3,3);l.name=a.name,n.push(l.copyVector3sArray(a.data))}this.morphAttributes[i]=n}if(e.skinIndices.length>0){let i=new ie(e.skinIndices.length*4,4);this.setAttribute("skinIndex",i.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){let i=new ie(e.skinWeights.length*4,4);this.setAttribute("skinWeight",i.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e){let i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Ft.min,nr.min),Ft.expandByPoint(xt),xt.addVectors(Ft.max,nr.max),Ft.expandByPoint(xt)):(Ft.expandByPoint(nr.min),Ft.expandByPoint(nr.max))}Ft.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)xt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(xt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)xt.fromBufferAttribute(o,l),a&&(Zn.fromBufferAttribute(e,l),xt.add(Zn)),n=Math.max(n,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new P,s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let d=e.getX(u+0),p=e.getX(u+1),y=e.getX(u+2);n.fromBufferAttribute(t,d),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),c.subVectors(r,s),h.subVectors(n,s),c.cross(h),o.fromBufferAttribute(i,d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),o.add(c),a.add(c),l.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),h.subVectors(n,s),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let n in i){if(e.attributes[n]===void 0)continue;let r=i[n].array,o=e.attributes[n],a=o.array,l=o.itemSize*t,c=Math.min(a.length,r.length-l);for(let h=0,u=l;h<c;h++,u++)r[u]=a[h]}return this},normalizeNormals:function(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)},toNonIndexed:function(){function e(o,a){let l=o.array,c=o.itemSize,h=o.normalized,u=new l.constructor(a.length*c),f=0,d=0;for(let p=0,y=a.length;p<y;p++){f=a[p]*c;for(let v=0;v<c;v++)u[d++]=l[f++]}return new _e(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let t=new ae,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let a=[],l=s[o];for(let c=0,h=l.length;c<h;c++){let u=l[c],f=e(u,i);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t},toJSON:function(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let a in i){let l=i[a],c=l.toJSON(e.data);l.name!==""&&(c.name=l.name),e.data.attributes[a]=c}let n={},s=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=f.toJSON(e.data);f.name!==""&&(d.name=f.name),c.push(d)}c.length>0&&(n[a]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e},clone:function(){return new ae().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Vu=new ue,yn=new Ns,_l=new ki,qi=new P,Yi=new P,Qi=new P,Ml=new P,Sl=new P,El=new P,Do=new P,Ro=new P,Io=new P,ls=new N,cs=new N,us=new N,pr=new P,Bo=new P;function Ge(e,t){ne.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new ae,this.material=t!==void 0?t:new bt,this.updateMorphTargets()}Ge.prototype=Object.assign(Object.create(ne.prototype),{constructor:Ge,isMesh:!0,copy:function(e){return ne.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),e.ray.intersectsSphere(_l)===!1)||(Vu.getInverse(s),yn.copy(e.ray).applyMatrix4(Vu),i.boundingBox!==null&&yn.intersectsBox(i.boundingBox)===!1))return;let r;if(i.isBufferGeometry){let o=i.index,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative,h=i.attributes.uv,u=i.attributes.uv2,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(n))for(let p=0,y=f.length;p<y;p++){let v=f[p],m=n[v.materialIndex],g=Math.max(v.start,d.start),E=Math.min(v.start+v.count,d.start+d.count);for(let M=g,C=E;M<C;M+=3){let L=o.getX(M),B=o.getX(M+1),G=o.getX(M+2);r=Uo(this,m,e,yn,a,l,c,h,u,L,B,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let v=p,m=y;v<m;v+=3){let g=o.getX(v),E=o.getX(v+1),M=o.getX(v+2);r=Uo(this,n,e,yn,a,l,c,h,u,g,E,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(n))for(let p=0,y=f.length;p<y;p++){let v=f[p],m=n[v.materialIndex],g=Math.max(v.start,d.start),E=Math.min(v.start+v.count,d.start+d.count);for(let M=g,C=E;M<C;M+=3){let L=M,B=M+1,G=M+2;r=Uo(this,m,e,yn,a,l,c,h,u,L,B,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let v=p,m=y;v<m;v+=3){let g=v,E=v+1,M=v+2;r=Uo(this,n,e,yn,a,l,c,h,u,g,E,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}else if(i.isGeometry){let o=Array.isArray(n),a=i.vertices,l=i.faces,c,h=i.faceVertexUvs[0];h.length>0&&(c=h);for(let u=0,f=l.length;u<f;u++){let d=l[u],p=o?n[d.materialIndex]:n;if(p===void 0)continue;let y=a[d.a],v=a[d.b],m=a[d.c];if(r=ad(this,p,e,yn,y,v,m,pr),r){if(c&&c[u]){let g=c[u];ls.copy(g[0]),cs.copy(g[1]),us.copy(g[2]),r.uv=Mt.getUV(pr,y,v,m,ls,cs,us,new N)}r.face=d,r.faceIndex=u,t.push(r)}}}}});function ad(e,t,i,n,s,r,o,a){let l;if(t.side===ut?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side!==Pt,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Bo);return c<i.near||c>i.far?null:{distance:c,point:Bo.clone(),object:e}}function Uo(e,t,i,n,s,r,o,a,l,c,h,u){qi.fromBufferAttribute(s,c),Yi.fromBufferAttribute(s,h),Qi.fromBufferAttribute(s,u);let f=e.morphTargetInfluences;if(t.morphTargets&&r&&f){Do.set(0,0,0),Ro.set(0,0,0),Io.set(0,0,0);for(let p=0,y=r.length;p<y;p++){let v=f[p],m=r[p];v!==0&&(Ml.fromBufferAttribute(m,c),Sl.fromBufferAttribute(m,h),El.fromBufferAttribute(m,u),o?(Do.addScaledVector(Ml,v),Ro.addScaledVector(Sl,v),Io.addScaledVector(El,v)):(Do.addScaledVector(Ml.sub(qi),v),Ro.addScaledVector(Sl.sub(Yi),v),Io.addScaledVector(El.sub(Qi),v)))}qi.add(Do),Yi.add(Ro),Qi.add(Io)}e.isSkinnedMesh&&(e.boneTransform(c,qi),e.boneTransform(h,Yi),e.boneTransform(u,Qi));let d=ad(e,t,i,n,qi,Yi,Qi,pr);if(d){a&&(ls.fromBufferAttribute(a,c),cs.fromBufferAttribute(a,h),us.fromBufferAttribute(a,u),d.uv=Mt.getUV(pr,qi,Yi,Qi,ls,cs,us,new N)),l&&(ls.fromBufferAttribute(l,c),cs.fromBufferAttribute(l,h),us.fromBufferAttribute(l,u),d.uv2=Mt.getUV(pr,qi,Yi,Qi,ls,cs,us,new N));let p=new da(c,h,u);Mt.getNormal(qi,Yi,Qi,p.normal),d.face=p}return d}var lg=0,ui=new ue,Tl=new ne,Oo=new P;function Pe(){Object.defineProperty(this,"id",{value:lg+=2}),this.uuid=xe.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Pe.prototype=Object.assign(Object.create(Fi.prototype),{constructor:Pe,isGeometry:!0,applyMatrix4:function(e){let t=new yt().getNormalMatrix(e);for(let i=0,n=this.vertices.length;i<n;i++)this.vertices[i].applyMatrix4(e);for(let i=0,n=this.faces.length;i<n;i++){let s=this.faces[i];s.normal.applyMatrix3(t).normalize();for(let r=0,o=s.vertexNormals.length;r<o;r++)s.vertexNormals[r].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this},rotateY:function(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this},rotateZ:function(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this},translate:function(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this},scale:function(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this},lookAt:function(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this},fromBufferGeometry:function(e){let t=this,i=e.index!==null?e.index:void 0,n=e.attributes;if(n.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let s=n.position,r=n.normal,o=n.color,a=n.uv,l=n.uv2;l!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<s.count;u++)t.vertices.push(new P().fromBufferAttribute(s,u)),o!==void 0&&t.colors.push(new $().fromBufferAttribute(o,u));function c(u,f,d,p){let y=o===void 0?[]:[t.colors[u].clone(),t.colors[f].clone(),t.colors[d].clone()],v=r===void 0?[]:[new P().fromBufferAttribute(r,u),new P().fromBufferAttribute(r,f),new P().fromBufferAttribute(r,d)],m=new da(u,f,d,v,y,p);t.faces.push(m),a!==void 0&&t.faceVertexUvs[0].push([new N().fromBufferAttribute(a,u),new N().fromBufferAttribute(a,f),new N().fromBufferAttribute(a,d)]),l!==void 0&&t.faceVertexUvs[1].push([new N().fromBufferAttribute(l,u),new N().fromBufferAttribute(l,f),new N().fromBufferAttribute(l,d)])}let h=e.groups;if(h.length>0)for(let u=0;u<h.length;u++){let f=h[u],d=f.start,p=f.count;for(let y=d,v=d+p;y<v;y+=3)i!==void 0?c(i.getX(y),i.getX(y+1),i.getX(y+2),f.materialIndex):c(y,y+1,y+2,f.materialIndex)}else if(i!==void 0)for(let u=0;u<i.count;u+=3)c(i.getX(u),i.getX(u+1),i.getX(u+2));else for(let u=0;u<s.count;u+=3)c(u,u+1,u+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this},normalize:function(){this.computeBoundingSphere();let e=this.boundingSphere.center,t=this.boundingSphere.radius,i=t===0?1:1/t,n=new ue;return n.set(i,0,0,-i*e.x,0,i,0,-i*e.y,0,0,i,-i*e.z,0,0,0,1),this.applyMatrix4(n),this},computeFaceNormals:function(){let e=new P,t=new P;for(let i=0,n=this.faces.length;i<n;i++){let s=this.faces[i],r=this.vertices[s.a],o=this.vertices[s.b],a=this.vertices[s.c];e.subVectors(a,o),t.subVectors(r,o),e.cross(t),e.normalize(),s.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);let t=new Array(this.vertices.length);for(let i=0,n=this.vertices.length;i<n;i++)t[i]=new P;if(e){let i=new P,n=new P;for(let s=0,r=this.faces.length;s<r;s++){let o=this.faces[s],a=this.vertices[o.a],l=this.vertices[o.b],c=this.vertices[o.c];i.subVectors(c,l),n.subVectors(a,l),i.cross(n),t[o.a].add(i),t[o.b].add(i),t[o.c].add(i)}}else{this.computeFaceNormals();for(let i=0,n=this.faces.length;i<n;i++){let s=this.faces[i];t[s.a].add(s.normal),t[s.b].add(s.normal),t[s.c].add(s.normal)}}for(let i=0,n=this.vertices.length;i<n;i++)t[i].normalize();for(let i=0,n=this.faces.length;i<n;i++){let s=this.faces[i],r=s.vertexNormals;r.length===3?(r[0].copy(t[s.a]),r[1].copy(t[s.b]),r[2].copy(t[s.c])):(r[0]=t[s.a].clone(),r[1]=t[s.b].clone(),r[2]=t[s.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){let i=this.faces[e],n=i.vertexNormals;n.length===3?(n[0].copy(i.normal),n[1].copy(i.normal),n[2].copy(i.normal)):(n[0]=i.normal.clone(),n[1]=i.normal.clone(),n[2]=i.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,i=this.faces.length;t<i;t++){let n=this.faces[t];n.__originalFaceNormal?n.__originalFaceNormal.copy(n.normal):n.__originalFaceNormal=n.normal.clone(),n.__originalVertexNormals||(n.__originalVertexNormals=[]);for(let s=0,r=n.vertexNormals.length;s<r;s++)n.__originalVertexNormals[s]?n.__originalVertexNormals[s].copy(n.vertexNormals[s]):n.__originalVertexNormals[s]=n.vertexNormals[s].clone()}let e=new Pe;e.faces=this.faces;for(let t=0,i=this.morphTargets.length;t<i;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];let s=this.morphNormals[t].faceNormals,r=this.morphNormals[t].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){let l=new P,c={a:new P,b:new P,c:new P};s.push(l),r.push(c)}}let n=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let s=0,r=this.faces.length;s<r;s++){let o=this.faces[s],a=n.faceNormals[s],l=n.vertexNormals[s];a.copy(o.normal),l.a.copy(o.vertexNormals[0]),l.b.copy(o.vertexNormals[1]),l.c.copy(o.vertexNormals[2])}}for(let t=0,i=this.faces.length;t<i;t++){let n=this.faces[t];n.normal=n.__originalFaceNormal,n.vertexNormals=n.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,i){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let n,s=this.vertices.length,r=this.vertices,o=e.vertices,a=this.faces,l=e.faces,c=this.colors,h=e.colors;i===void 0&&(i=0),t!==void 0&&(n=new yt().getNormalMatrix(t));for(let u=0,f=o.length;u<f;u++){let p=o[u].clone();t!==void 0&&p.applyMatrix4(t),r.push(p)}for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone());for(let u=0,f=l.length;u<f;u++){let d=l[u],p,y,v,m=d.vertexNormals,g=d.vertexColors;p=new da(d.a+s,d.b+s,d.c+s),p.normal.copy(d.normal),n!==void 0&&p.normal.applyMatrix3(n).normalize();for(let E=0,M=m.length;E<M;E++)y=m[E].clone(),n!==void 0&&y.applyMatrix3(n).normalize(),p.vertexNormals.push(y);p.color.copy(d.color);for(let E=0,M=g.length;E<M;E++)v=g[E],p.vertexColors.push(v.clone());p.materialIndex=d.materialIndex+i,a.push(p)}for(let u=0,f=e.faceVertexUvs.length;u<f;u++){let d=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,y=d.length;p<y;p++){let v=d[p],m=[];for(let g=0,E=v.length;g<E;g++)m.push(v[g].clone());this.faceVertexUvs[u].push(m)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){let e={},t=[],i=[],s=Math.pow(10,4);for(let a=0,l=this.vertices.length;a<l;a++){let c=this.vertices[a],h=Math.round(c.x*s)+"_"+Math.round(c.y*s)+"_"+Math.round(c.z*s);e[h]===void 0?(e[h]=a,t.push(this.vertices[a]),i[a]=t.length-1):i[a]=i[e[h]]}let r=[];for(let a=0,l=this.faces.length;a<l;a++){let c=this.faces[a];c.a=i[c.a],c.b=i[c.b],c.c=i[c.c];let h=[c.a,c.b,c.c];for(let u=0;u<3;u++)if(h[u]===h[(u+1)%3]){r.push(a);break}}for(let a=r.length-1;a>=0;a--){let l=r[a];this.faces.splice(l,1);for(let c=0,h=this.faceVertexUvs.length;c<h;c++)this.faceVertexUvs[c].splice(l,1)}let o=this.vertices.length-t.length;return this.vertices=t,o},setFromPoints:function(e){this.vertices=[];for(let t=0,i=e.length;t<i;t++){let n=e[t];this.vertices.push(new P(n.x,n.y,n.z||0))}return this},sortFacesByMaterialIndex:function(){let e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function i(a,l){return a.materialIndex-l.materialIndex}e.sort(i);let n=this.faceVertexUvs[0],s=this.faceVertexUvs[1],r,o;n&&n.length===t&&(r=[]),s&&s.length===t&&(o=[]);for(let a=0;a<t;a++){let l=e[a]._id;r&&r.push(n[l]),o&&o.push(s[l])}r&&(this.faceVertexUvs[0]=r),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){let e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){let d=this.parameters;for(let p in d)d[p]!==void 0&&(e[p]=d[p]);return e}let t=[];for(let d=0;d<this.vertices.length;d++){let p=this.vertices[d];t.push(p.x,p.y,p.z)}let i=[],n=[],s={},r=[],o={},a=[],l={};for(let d=0;d<this.faces.length;d++){let p=this.faces[d],y=!0,v=!1,m=this.faceVertexUvs[0][d]!==void 0,g=p.normal.length()>0,E=p.vertexNormals.length>0,M=p.color.r!==1||p.color.g!==1||p.color.b!==1,C=p.vertexColors.length>0,L=0;if(L=c(L,0,0),L=c(L,1,y),L=c(L,2,v),L=c(L,3,m),L=c(L,4,g),L=c(L,5,E),L=c(L,6,M),L=c(L,7,C),i.push(L),i.push(p.a,p.b,p.c),i.push(p.materialIndex),m){let B=this.faceVertexUvs[0][d];i.push(f(B[0]),f(B[1]),f(B[2]))}if(g&&i.push(h(p.normal)),E){let B=p.vertexNormals;i.push(h(B[0]),h(B[1]),h(B[2]))}if(M&&i.push(u(p.color)),C){let B=p.vertexColors;i.push(u(B[0]),u(B[1]),u(B[2]))}}function c(d,p,y){return y?d|1<<p:d&~(1<<p)}function h(d){let p=d.x.toString()+d.y.toString()+d.z.toString();return s[p]!==void 0||(s[p]=n.length/3,n.push(d.x,d.y,d.z)),s[p]}function u(d){let p=d.r.toString()+d.g.toString()+d.b.toString();return o[p]!==void 0||(o[p]=r.length,r.push(d.getHex())),o[p]}function f(d){let p=d.x.toString()+d.y.toString();return l[p]!==void 0||(l[p]=a.length/2,a.push(d.x,d.y)),l[p]}return e.data={},e.data.vertices=t,e.data.normals=n,r.length>0&&(e.data.colors=r),a.length>0&&(e.data.uvs=[a]),e.data.faces=i,e},clone:function(){return new Pe().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;let t=e.vertices;for(let u=0,f=t.length;u<f;u++)this.vertices.push(t[u].clone());let i=e.colors;for(let u=0,f=i.length;u<f;u++)this.colors.push(i[u].clone());let n=e.faces;for(let u=0,f=n.length;u<f;u++)this.faces.push(n[u].clone());for(let u=0,f=e.faceVertexUvs.length;u<f;u++){let d=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,y=d.length;p<y;p++){let v=d[p],m=[];for(let g=0,E=v.length;g<E;g++){let M=v[g];m.push(M.clone())}this.faceVertexUvs[u].push(m)}}let s=e.morphTargets;for(let u=0,f=s.length;u<f;u++){let d={};if(d.name=s[u].name,s[u].vertices!==void 0){d.vertices=[];for(let p=0,y=s[u].vertices.length;p<y;p++)d.vertices.push(s[u].vertices[p].clone())}if(s[u].normals!==void 0){d.normals=[];for(let p=0,y=s[u].normals.length;p<y;p++)d.normals.push(s[u].normals[p].clone())}this.morphTargets.push(d)}let r=e.morphNormals;for(let u=0,f=r.length;u<f;u++){let d={};if(r[u].vertexNormals!==void 0){d.vertexNormals=[];for(let p=0,y=r[u].vertexNormals.length;p<y;p++){let v=r[u].vertexNormals[p],m={};m.a=v.a.clone(),m.b=v.b.clone(),m.c=v.c.clone(),d.vertexNormals.push(m)}}if(r[u].faceNormals!==void 0){d.faceNormals=[];for(let p=0,y=r[u].faceNormals.length;p<y;p++)d.faceNormals.push(r[u].faceNormals[p].clone())}this.morphNormals.push(d)}let o=e.skinWeights;for(let u=0,f=o.length;u<f;u++)this.skinWeights.push(o[u].clone());let a=e.skinIndices;for(let u=0,f=a.length;u<f;u++)this.skinIndices.push(a[u].clone());let l=e.lineDistances;for(let u=0,f=l.length;u<f;u++)this.lineDistances.push(l[u]);let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var jl=class extends Pe{constructor(t,i,n,s,r,o){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:o},this.fromBufferGeometry(new xs(t,i,n,s,r,o)),this.mergeVertices()}},xs=class extends ae{constructor(t,i,n,s,r,o){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;t=t||1,i=i||1,n=n||1,s=Math.floor(s)||1,r=Math.floor(r)||1,o=Math.floor(o)||1;let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,i,t,o,r,0),p("z","y","x",1,-1,n,i,-t,o,r,1),p("x","z","y",1,1,t,n,i,s,o,2),p("x","z","y",1,-1,t,n,-i,s,o,3),p("x","y","z",1,-1,t,i,n,s,r,4),p("x","y","z",-1,-1,t,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function p(y,v,m,g,E,M,C,L,B,G,O){let x=M/B,b=C/G,w=M/2,S=C/2,_=L/2,T=B+1,A=G+1,I=0,F=0,V=new P;for(let k=0;k<A;k++){let j=k*b-S;for(let Y=0;Y<T;Y++){let le=Y*x-w;V[y]=le*g,V[v]=j*E,V[m]=_,c.push(V.x,V.y,V.z),V[y]=0,V[v]=0,V[m]=L>0?1:-1,h.push(V.x,V.y,V.z),u.push(Y/B),u.push(1-k/G),I+=1}}for(let k=0;k<G;k++)for(let j=0;j<B;j++){let Y=f+j+T*k,le=f+j+T*(k+1),Be=f+(j+1)+T*(k+1),ge=f+(j+1)+T*k;l.push(Y,le,ge),l.push(le,Be,ge),F+=6}a.addGroup(d,F,O),d+=F,f+=I}}};function ys(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let s=e[i][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture)?t[i][n]=s.clone():Array.isArray(s)?t[i][n]=s.slice():t[i][n]=s}}return t}function Tt(e){let t={};for(let i=0;i<e.length;i++){let n=ys(e[i]);for(let s in n)t[s]=n[s]}return t}var Vs={clone:ys,merge:Tt},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function ye(e){Ee.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=cg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}ye.prototype=Object.create(Ee.prototype);ye.prototype.constructor=ye;ye.prototype.isShaderMaterial=!0;ye.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this};ye.prototype.toJSON=function(e){let t=Ee.prototype.toJSON.call(this,e);t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t};function Di(){ne.call(this),this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}Di.prototype=Object.assign(Object.create(ne.prototype),{constructor:Di,isCamera:!0,copy:function(e,t){return ne.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new P),this.updateMatrixWorld(!0);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){ne.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){ne.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function tt(e,t,i,n){Di.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=i!==void 0?i:.1,this.far=n!==void 0?n:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}tt.prototype=Object.assign(Object.create(Di.prototype),{constructor:tt,isPerspectiveCamera:!0,copy:function(e,t){return Di.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){let t=.5*this.getFilmHeight()/e;this.fov=xe.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){let e=Math.tan(xe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return xe.RAD2DEG*2*Math.atan(Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=this.near,t=e*Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*n/a,t-=r.offsetY*i/l,n*=r.width/a,i*=r.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){let t=ne.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});var Kn=90,Jn=1;function br(e,t,i){if(ne.call(this),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let n=new tt(Kn,Jn,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new P(1,0,0)),this.add(n);let s=new tt(Kn,Jn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);let r=new tt(Kn,Jn,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new P(0,1,0)),this.add(r);let o=new tt(Kn,Jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);let a=new tt(Kn,Jn,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new P(0,0,1)),this.add(a);let l=new tt(Kn,Jn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l),this.update=function(c,h){this.parent===null&&this.updateMatrixWorld();let u=c.xr.enabled,f=c.getRenderTarget();c.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,c.setRenderTarget(i,0),c.render(h,n),c.setRenderTarget(i,1),c.render(h,s),c.setRenderTarget(i,2),c.render(h,r),c.setRenderTarget(i,3),c.render(h,o),c.setRenderTarget(i,4),c.render(h,a),i.texture.generateMipmaps=d,c.setRenderTarget(i,5),c.render(h,l),c.setRenderTarget(f),c.xr.enabled=u},this.clear=function(c,h,u,f){let d=c.getRenderTarget();for(let p=0;p<6;p++)c.setRenderTarget(i,p),c.clear(h,u,f);c.setRenderTarget(d)}}br.prototype=Object.create(ne.prototype);br.prototype.constructor=br;function wr(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),Je.call(this,e,e,t)}wr.prototype=Object.create(Je.prototype);wr.prototype.constructor=wr;wr.prototype.isWebGLCubeRenderTarget=!0;wr.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=t.format,this.texture.encoding=t.encoding;let i=new rn,n={uniforms:{tEquirect:{value:null}},vertexShader:["varying vec3 vWorldDirection;","vec3 transformDirection( in vec3 dir, in mat4 matrix ) {","	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );","}","void main() {","	vWorldDirection = transformDirection( position, modelMatrix );","	#include <begin_vertex>","	#include <project_vertex>","}"].join(`
`),fragmentShader:["uniform sampler2D tEquirect;","varying vec3 vWorldDirection;","#include <common>","void main() {","	vec3 direction = normalize( vWorldDirection );","	vec2 sampleUV = equirectUv( direction );","	gl_FragColor = texture2D( tEquirect, sampleUV );","}"].join(`
`)},s=new ye({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ut,blending:Ji});s.uniforms.tEquirect.value=t;let r=new Ge(new xs(5,5,5),s);return i.add(r),new br(1,10,this).update(e,i),r.geometry.dispose(),r.material.dispose(),this};function bs(e,t,i,n,s,r,o,a,l,c,h,u){ze.call(this,null,r,o,a,l,c,n,s,h,u),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:it,this.minFilter=c!==void 0?c:it,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}bs.prototype=Object.create(ze.prototype);bs.prototype.constructor=bs;bs.prototype.isDataTexture=!0;var $n=new ki,Fo=new P;function eo(e,t,i,n,s,r){this.planes=[e!==void 0?e:new di,t!==void 0?t:new di,i!==void 0?i:new di,n!==void 0?n:new di,s!==void 0?s:new di,r!==void 0?r:new di]}Object.assign(eo.prototype,{set:function(e,t,i,n,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this},setFromProjectionMatrix:function(e){let t=this.planes,i=e.elements,n=i[0],s=i[1],r=i[2],o=i[3],a=i[4],l=i[5],c=i[6],h=i[7],u=i[8],f=i[9],d=i[10],p=i[11],y=i[12],v=i[13],m=i[14],g=i[15];return t[0].setComponents(o-n,h-a,p-u,g-y).normalize(),t[1].setComponents(o+n,h+a,p+u,g+y).normalize(),t[2].setComponents(o+s,h+l,p+f,g+v).normalize(),t[3].setComponents(o-s,h-l,p-f,g-v).normalize(),t[4].setComponents(o-r,h-c,p-d,g-m).normalize(),t[5].setComponents(o+r,h+c,p+d,g+m).normalize(),this},intersectsObject:function(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere($n)},intersectsSprite:function(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)},intersectsSphere:function(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0},intersectsBox:function(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Fo.x=n.normal.x>0?e.max.x:e.min.x,Fo.y=n.normal.y>0?e.max.y:e.min.y,Fo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Fo)<0)return!1}return!0},containsPoint:function(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}});var ce={common:{diffuse:{value:new $(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new N(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new $(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new yt}},sprite:{diffuse:{value:new $(15658734)},opacity:{value:1},center:{value:new N(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new yt}}};function ld(){let e=null,t=!1,i=null,n=null;function s(r,o){i(r,o),n=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&(n=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){i=r},setContext:function(r){e=r}}}function hg(e,t){let i=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=e.createBuffer();e.bindBuffer(h,d),e.bufferData(h,u,f),c.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){let f=h.array,d=h.updateRange;e.bindBuffer(u,c),d.count===-1?e.bufferSubData(u,0,f):(i?e.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):e.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(e.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,s(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}function fa(e,t,i,n){Pe.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n},this.fromBufferGeometry(new Yt(e,t,i,n)),this.mergeVertices()}fa.prototype=Object.create(Pe.prototype);fa.prototype.constructor=fa;function Yt(e,t,i,n){ae.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n},e=e||1,t=t||1;let s=e/2,r=t/2,o=Math.floor(i)||1,a=Math.floor(n)||1,l=o+1,c=a+1,h=e/o,u=t/a,f=[],d=[],p=[],y=[];for(let v=0;v<c;v++){let m=v*u-r;for(let g=0;g<l;g++){let E=g*h-s;d.push(E,-m,0),p.push(0,0,1),y.push(g/o),y.push(1-v/a)}}for(let v=0;v<a;v++)for(let m=0;m<o;m++){let g=m+l*v,E=m+l*(v+1),M=m+1+l*(v+1),C=m+1+l*v;f.push(g,E,C),f.push(E,M,C)}this.setIndex(f),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(y,2))}Yt.prototype=Object.create(ae.prototype);Yt.prototype.constructor=Yt;var dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,mg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg="vec3 transformed = vec3( position );",xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Cg=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Pg=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,Ag=`#define PI 3.141592653589793
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
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`
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
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Kg=`uniform bool receiveShadow;
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
#endif`,Jg=`#if defined( USE_ENVMAP )
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,nv=`PhysicalMaterial material;
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
#endif`,sv=`struct PhysicalMaterial {
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
}`,rv=`
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
#endif`,ov=`#if defined( RE_IndirectDiffuse )
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dv=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,yv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,wv=`#ifdef FLAT_SHADED
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
vec3 geometryNormal = normal;`,_v=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,Sv=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#ifdef USE_SHADOWMAP
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
#endif`,Uv=`#ifdef USE_SHADOWMAP
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
#endif`,Ov=`#ifdef USE_SHADOWMAP
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
#endif`,Fv=`float getShadowMask() {
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
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$v=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`#include <envmap_common_pars_fragment>
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,sx=`#include <common>
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
}`,rx=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`uniform float scale;
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
}`,hx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,vx=`#define TOON
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
}`,xx=`#define TOON
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
}`,yx=`#define PHONG
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
}`,bx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`uniform float size;
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
}`,Cx=`uniform vec3 color;
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
}`,Px=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Lx=`uniform float rotation;
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
}`,Re={alphamap_fragment:dg,alphamap_pars_fragment:fg,alphatest_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,begin_vertex:vg,beginnormal_vertex:xg,bsdfs:yg,bumpmap_pars_fragment:bg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:Sg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Cg,color_vertex:Pg,common:Ag,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Ig,emissivemap_fragment:Bg,emissivemap_pars_fragment:Ug,encodings_fragment:Og,encodings_pars_fragment:Fg,envmap_fragment:kg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Gg,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:Jg,envmap_vertex:Vg,fog_vertex:zg,fog_pars_vertex:Wg,fog_fragment:jg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_fragment:Yg,lightmap_pars_fragment:Qg,lights_lambert_vertex:Zg,lights_pars_begin:Kg,lights_toon_fragment:$g,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:iv,lights_physical_fragment:nv,lights_physical_pars_fragment:sv,lights_fragment_begin:rv,lights_fragment_maps:ov,lights_fragment_end:av,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:uv,logdepthbuf_vertex:hv,map_fragment:dv,map_pars_fragment:fv,map_particle_fragment:pv,map_particle_pars_fragment:mv,metalnessmap_fragment:gv,metalnessmap_pars_fragment:vv,morphnormal_vertex:xv,morphtarget_pars_vertex:yv,morphtarget_vertex:bv,normal_fragment_begin:wv,normal_fragment_maps:_v,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:Tv,packing:Cv,premultiplied_alpha_fragment:Pv,project_vertex:Av,dithering_fragment:Lv,dithering_pars_fragment:Dv,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Fv,skinbase_vertex:kv,skinning_pars_vertex:Hv,skinning_vertex:Gv,skinnormal_vertex:Nv,specularmap_fragment:Vv,specularmap_pars_fragment:zv,tonemapping_fragment:Wv,tonemapping_pars_fragment:jv,uv_pars_fragment:Xv,uv_pars_vertex:qv,uv_vertex:Yv,uv2_pars_fragment:Qv,uv2_pars_vertex:Zv,uv2_vertex:Kv,worldpos_vertex:Jv,background_frag:$v,background_vert:ex,cube_frag:tx,cube_vert:ix,depth_frag:nx,depth_vert:sx,distanceRGBA_frag:rx,distanceRGBA_vert:ox,equirect_frag:ax,equirect_vert:lx,linedashed_frag:cx,linedashed_vert:ux,meshbasic_frag:hx,meshbasic_vert:dx,meshlambert_frag:fx,meshlambert_vert:px,meshmatcap_frag:mx,meshmatcap_vert:gx,meshtoon_frag:vx,meshtoon_vert:xx,meshphong_frag:yx,meshphong_vert:bx,meshphysical_frag:wx,meshphysical_vert:_x,normal_frag:Mx,normal_vert:Sx,points_frag:Ex,points_vert:Tx,shadow_frag:Cx,shadow_vert:Px,sprite_frag:Ax,sprite_vert:Lx},Li={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new $(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Re.normal_vert,fragmentShader:Re.normal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:Tt([ce.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Li.physical={uniforms:Tt([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new N(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new $(0)},transparency:{value:0}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Dx(e,t,i,n){let s=new $(0),r=0,o,a,l=null,c=0,h=null;function u(d,p,y,v){let m=p.isScene===!0?p.background:null,g=e.xr,E=g.getSession&&g.getSession();if(E&&E.environmentBlendMode==="additive"&&(m=null),m===null?f(s,r):m&&m.isColor&&(f(m,1),v=!0),(e.autoClear||v)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===Kr)){a===void 0&&(a=new Ge(new xs(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:ys(Li.cube.uniforms),vertexShader:Li.cube.vertexShader,fragmentShader:Li.cube.fragmentShader,side:ut,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(C,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a));let M=m.isWebGLCubeRenderTarget?m.texture:m;a.material.uniforms.envMap.value=M,a.material.uniforms.flipEnvMap.value=M.isCubeTexture?-1:1,(l!==m||c!==M.version||h!==e.toneMapping)&&(a.material.needsUpdate=!0,l=m,c=M.version,h=e.toneMapping),d.unshift(a,a.geometry,a.material,0,0,null)}else m&&m.isTexture&&(o===void 0&&(o=new Ge(new Yt(2,2),new ye({name:"BackgroundMaterial",uniforms:ys(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||c!==m.version||h!==e.toneMapping)&&(o.material.needsUpdate=!0,l=m,c=m.version,h=e.toneMapping),d.unshift(o,o.geometry,o.material,0,0,null))}function f(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,n)}return{getClearColor:function(){return s},setClearColor:function(d,p){s.set(d),r=p!==void 0?p:1,f(s,r)},getClearAlpha:function(){return r},setClearAlpha:function(d){r=d,f(s,r)},render:u}}function Rx(e,t,i,n){let s=e.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=y(null),c=l;function h(S,_,T,A,I){let F=!1;if(o){let V=p(A,T,_);c!==V&&(c=V,f(c.object)),F=v(A),F&&m(A)}else{let V=_.wireframe===!0;(c.geometry!==A.id||c.program!==T.id||c.wireframe!==V)&&(c.geometry=A.id,c.program=T.id,c.wireframe=V,F=!0)}S.isInstancedMesh===!0&&(F=!0),I!==null&&i.update(I,34963),F&&(B(S,_,T,A),I!==null&&e.bindBuffer(34963,i.get(I).buffer))}function u(){return n.isWebGL2?e.createVertexArray():r.createVertexArrayOES()}function f(S){return n.isWebGL2?e.bindVertexArray(S):r.bindVertexArrayOES(S)}function d(S){return n.isWebGL2?e.deleteVertexArray(S):r.deleteVertexArrayOES(S)}function p(S,_,T){let A=T.wireframe===!0,I=a[S.id];I===void 0&&(I={},a[S.id]=I);let F=I[_.id];F===void 0&&(F={},I[_.id]=F);let V=F[A];return V===void 0&&(V=y(u()),F[A]=V),V}function y(S){let _=[],T=[],A=[];for(let I=0;I<s;I++)_[I]=0,T[I]=0,A[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:T,attributeDivisors:A,object:S,attributes:{}}}function v(S){let _=c.attributes,T=S.attributes;if(Object.keys(_).length!==Object.keys(T).length)return!0;for(let A in T){let I=_[A],F=T[A];if(I.attribute!==F||I.data!==F.data)return!0}return!1}function m(S){let _={},T=S.attributes;for(let A in T){let I=T[A],F={};F.attribute=I,I.data&&(F.data=I.data),_[A]=F}c.attributes=_}function g(){let S=c.newAttributes;for(let _=0,T=S.length;_<T;_++)S[_]=0}function E(S){M(S,0)}function M(S,_){let T=c.newAttributes,A=c.enabledAttributes,I=c.attributeDivisors;T[S]=1,A[S]===0&&(e.enableVertexAttribArray(S),A[S]=1),I[S]!==_&&((n.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,_),I[S]=_)}function C(){let S=c.newAttributes,_=c.enabledAttributes;for(let T=0,A=_.length;T<A;T++)_[T]!==S[T]&&(e.disableVertexAttribArray(T),_[T]=0)}function L(S,_,T,A,I,F){n.isWebGL2===!0&&(T===5124||T===5125)?e.vertexAttribIPointer(S,_,T,A,I,F):e.vertexAttribPointer(S,_,T,A,I,F)}function B(S,_,T,A){if(n.isWebGL2===!1&&(S.isInstancedMesh||A.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let I=A.attributes,F=T.getAttributes(),V=_.defaultAttributeValues;for(let k in F){let j=F[k];if(j>=0){let Y=I[k];if(Y!==void 0){let le=Y.normalized,Be=Y.itemSize,ge=i.get(Y);if(ge===void 0)continue;let X=ge.buffer,Ve=ge.type,Se=ge.bytesPerElement;if(Y.isInterleavedBufferAttribute){let Ae=Y.data,be=Ae.stride,Z=Y.offset;Ae&&Ae.isInstancedInterleavedBuffer?(M(j,Ae.meshPerAttribute),A._maxInstanceCount===void 0&&(A._maxInstanceCount=Ae.meshPerAttribute*Ae.count)):E(j),e.bindBuffer(34962,X),L(j,Be,Ve,le,be*Se,Z*Se)}else Y.isInstancedBufferAttribute?(M(j,Y.meshPerAttribute),A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)):E(j),e.bindBuffer(34962,X),L(j,Be,Ve,le,0,0)}else if(k==="instanceMatrix"){let le=i.get(S.instanceMatrix);if(le===void 0)continue;let Be=le.buffer,ge=le.type;M(j+0,1),M(j+1,1),M(j+2,1),M(j+3,1),e.bindBuffer(34962,Be),e.vertexAttribPointer(j+0,4,ge,!1,64,0),e.vertexAttribPointer(j+1,4,ge,!1,64,16),e.vertexAttribPointer(j+2,4,ge,!1,64,32),e.vertexAttribPointer(j+3,4,ge,!1,64,48)}else if(V!==void 0){let le=V[k];if(le!==void 0)switch(le.length){case 2:e.vertexAttrib2fv(j,le);break;case 3:e.vertexAttrib3fv(j,le);break;case 4:e.vertexAttrib4fv(j,le);break;default:e.vertexAttrib1fv(j,le)}}}}C()}function G(){b();for(let S in a){let _=a[S];for(let T in _){let A=_[T];for(let I in A)d(A[I].object),delete A[I];delete _[T]}delete a[S]}}function O(S){if(a[S.id]===void 0)return;let _=a[S.id];for(let T in _){let A=_[T];for(let I in A)d(A[I].object),delete A[I];delete _[T]}delete a[S.id]}function x(S){for(let _ in a){let T=a[_];if(T[S.id]===void 0)continue;let A=T[S.id];for(let I in A)d(A[I].object),delete A[I];delete T[S.id]}}function b(){w(),c!==l&&(c=l,f(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:b,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:E,disableUnusedAttributes:C}}function Ix(e,t,i,n){let s=n.isWebGL2,r;function o(c){r=c}function a(c,h){e.drawArrays(r,c,h),i.update(h,r)}function l(c,h,u,f){if(f===0)return;let d,p;if(s)d=e,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,h,u,f),i.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Bx(e,t,i){let n;function s(){if(n!==void 0)return n;let L=t.get("EXT_texture_filter_anisotropic");return L!==null?n=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT):n=0,n}function r(L){if(L==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext,a=i.precision!==void 0?i.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=i.logarithmicDepthBuffer===!0,h=e.getParameter(34930),u=e.getParameter(35660),f=e.getParameter(3379),d=e.getParameter(34076),p=e.getParameter(34921),y=e.getParameter(36347),v=e.getParameter(36348),m=e.getParameter(36349),g=u>0,E=o||!!t.get("OES_texture_float"),M=g&&E,C=o?e.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:C}}function Ux(){let e=this,t=null,i=0,n=!1,s=!1,r=new di,o=new yt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,f){let d=h.length!==0||u||i!==0||n;return n=u,t=c(h,f,0),i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,u,f,d,p,y){if(!n||h===null||h.length===0||s&&!f)s?c(null):l();else{let v=s?0:i,m=v*4,g=p.clippingState||null;a.value=g,g=c(h,d,m,y);for(let E=0;E!==m;++E)g[E]=t[E];p.clippingState=g,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=v}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,u,f,d){let p=h!==null?h.length:0,y=null;if(p!==0){if(y=a.value,d!==!0||y===null){let v=f+p*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(y===null||y.length<v)&&(y=new Float32Array(v));for(let g=0,E=f;g!==p;++g,E+=4)r.copy(h[g]).applyMatrix4(m,o),r.normal.toArray(y,E),y[E+3]=r.constant}a.value=y,a.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,y}}function Ox(e){let t={};return{get:function(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(i)}return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),t[i]=n,n}}}function Fx(e,t,i,n){let s=new WeakMap,r=new WeakMap;function o(u){let f=u.target,d=s.get(f);d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);f.removeEventListener("dispose",o),s.delete(f);let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,i.memory.geometries--}function a(u,f){let d=s.get(f);return d||(f.addEventListener("dispose",o),f.isBufferGeometry?d=f:f.isGeometry&&(f._bufferGeometry===void 0&&(f._bufferGeometry=new ae().setFromObject(u)),d=f._bufferGeometry),s.set(f,d),i.memory.geometries++,d)}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],34962);let d=u.morphAttributes;for(let p in d){let y=d[p];for(let v=0,m=y.length;v<m;v++)t.update(y[v],34962)}}function c(u){let f=[],d=u.index,p=u.attributes.position,y=0;if(d!==null){let g=d.array;y=d.version;for(let E=0,M=g.length;E<M;E+=3){let C=g[E+0],L=g[E+1],B=g[E+2];f.push(C,L,L,B,B,C)}}else{let g=p.array;y=p.version;for(let E=0,M=g.length/3-1;E<M;E+=3){let C=E+0,L=E+1,B=E+2;f.push(C,L,L,B,B,C)}}let v=new(od(f)>65535?yr:Pn)(f,1);v.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,v)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kx(e,t,i,n){let s=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,d){e.drawElements(r,d,a,f*l),i.update(d,r)}function u(f,d,p,y){if(y===0)return;let v,m;if(s)v=e,m="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](r,p,a,d*l,y),i.update(p,r,y)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Hx(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(a=a||1,i.calls++,o){case 4:i.triangles+=a*(r/3);break;case 1:i.lines+=a*(r/2);break;case 3:i.lines+=a*(r-1);break;case 2:i.lines+=a*r;break;case 0:i.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:n}}function Gx(e,t){return e[0]-t[0]}function Nx(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Vx(e){let t={},i=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function s(r,o,a,l){let c=r.morphTargetInfluences,h=c===void 0?0:c.length,u=t[o.id];if(u===void 0){u=[];for(let v=0;v<h;v++)u[v]=[v,0];t[o.id]=u}for(let v=0;v<h;v++){let m=u[v];m[0]=v,m[1]=c[v]}u.sort(Nx);for(let v=0;v<8;v++)v<h&&u[v][1]?(n[v][0]=u[v][0],n[v][1]=u[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(Gx);let f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let m=n[v],g=m[0],E=m[1];g!==Number.MAX_SAFE_INTEGER&&E?(f&&o.getAttribute("morphTarget"+v)!==f[g]&&o.setAttribute("morphTarget"+v,f[g]),d&&o.getAttribute("morphNormal"+v)!==d[g]&&o.setAttribute("morphNormal"+v,d[g]),i[v]=E,p+=E):(f&&o.getAttribute("morphTarget"+v)!==void 0&&o.deleteAttribute("morphTarget"+v),d&&o.getAttribute("morphNormal"+v)!==void 0&&o.deleteAttribute("morphNormal"+v),i[v]=0)}let y=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",i)}return{update:s}}function zx(e,t,i,n){let s=new WeakMap;function r(a){let l=n.render.frame,c=a.geometry,h=t.get(a,c);return s.get(h)!==l&&(c.isGeometry&&h.updateFromObject(a),t.update(h),s.set(h,l)),a.isInstancedMesh&&i.update(a.instanceMatrix,34962),h}function o(){s=new WeakMap}return{update:r,dispose:o}}function on(e,t,i,n,s,r,o,a,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Tc,o=o!==void 0?o:gi,ze.call(this,e,t,i,n,s,r,o,a,l,c),this.flipY=!1}on.prototype=Object.create(ze.prototype);on.prototype.constructor=on;on.prototype.isCubeTexture=!0;Object.defineProperty(on.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function _r(e,t,i,n){ze.call(this,null),this.image={data:e||null,width:t||1,height:i||1,depth:n||1},this.magFilter=it,this.minFilter=it,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}_r.prototype=Object.create(ze.prototype);_r.prototype.constructor=_r;_r.prototype.isDataTexture2DArray=!0;function Mr(e,t,i,n){ze.call(this,null),this.image={data:e||null,width:t||1,height:i||1,depth:n||1},this.magFilter=it,this.minFilter=it,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Mr.prototype=Object.create(ze.prototype);Mr.prototype.constructor=Mr;Mr.prototype.isDataTexture3D=!0;var cd=new ze,Wx=new _r,jx=new Mr,ud=new on,zu=[],Wu=[],ju=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function zs(e,t,i){let n=e[0];if(n<=0||n>0)return e;let s=t*i,r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(r,a)}return r}function Qt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ht(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function hd(e,t){let i=Wu[t];i===void 0&&(i=new Int32Array(t),Wu[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Xx(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function qx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qt(i,t))return;e.uniform2fv(this.addr,t),Ht(i,t)}}function Yx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Qt(i,t))return;e.uniform3fv(this.addr,t),Ht(i,t)}}function Qx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qt(i,t))return;e.uniform4fv(this.addr,t),Ht(i,t)}}function Zx(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Qt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ht(i,t)}else{if(Qt(i,n))return;qu.set(n),e.uniformMatrix2fv(this.addr,!1,qu),Ht(i,n)}}function Kx(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Qt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ht(i,t)}else{if(Qt(i,n))return;Xu.set(n),e.uniformMatrix3fv(this.addr,!1,Xu),Ht(i,n)}}function Jx(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Qt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ht(i,t)}else{if(Qt(i,n))return;ju.set(n),e.uniformMatrix4fv(this.addr,!1,ju),Ht(i,n)}}function $x(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.safeSetTexture2D(t||cd,s)}function ey(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(t||Wx,s)}function ty(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(t||jx,s)}function iy(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.safeSetTextureCube(t||ud,s)}function ny(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function sy(e,t){let i=this.cache;Qt(i,t)||(e.uniform2iv(this.addr,t),Ht(i,t))}function ry(e,t){let i=this.cache;Qt(i,t)||(e.uniform3iv(this.addr,t),Ht(i,t))}function oy(e,t){let i=this.cache;Qt(i,t)||(e.uniform4iv(this.addr,t),Ht(i,t))}function ay(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function ly(e){switch(e){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Qx;case 35674:return Zx;case 35675:return Kx;case 35676:return Jx;case 5124:case 35670:return ny;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ey}}function cy(e,t){e.uniform1fv(this.addr,t)}function uy(e,t){e.uniform1iv(this.addr,t)}function hy(e,t){e.uniform2iv(this.addr,t)}function dy(e,t){e.uniform3iv(this.addr,t)}function fy(e,t){e.uniform4iv(this.addr,t)}function py(e,t){let i=zs(t,this.size,2);e.uniform2fv(this.addr,i)}function my(e,t){let i=zs(t,this.size,3);e.uniform3fv(this.addr,i)}function gy(e,t){let i=zs(t,this.size,4);e.uniform4fv(this.addr,i)}function vy(e,t){let i=zs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function xy(e,t){let i=zs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function yy(e,t){let i=zs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function by(e,t,i){let n=t.length,s=hd(i,n);e.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)i.safeSetTexture2D(t[r]||cd,s[r])}function wy(e,t,i){let n=t.length,s=hd(i,n);e.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)i.safeSetTextureCube(t[r]||ud,s[r])}function _y(e){switch(e){case 5126:return cy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35680:case 36300:case 36308:case 36293:return wy}}function My(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ly(t.type)}function dd(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=_y(t.type)}dd.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),Ht(t,e)};function fd(e){this.id=e,this.seq=[],this.map={}}fd.prototype.setValue=function(e,t,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let o=n[s];o.setValue(e,t[o.id],i)}};var Cl=/([\w\d_]+)(\])?(\[|\.)?/g;function Yu(e,t){e.seq.push(t),e.map[t.id]=t}function Sy(e,t,i){let n=e.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),o=Cl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yu(i,c===void 0?new My(a,e,t):new dd(a,e,t));break}else{let u=i.map[a];u===void 0&&(u=new fd(a),Yu(i,u)),i=u}}}function $i(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);Sy(s,r,this)}}$i.prototype.setValue=function(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)};$i.prototype.setOptional=function(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)};$i.upload=function(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){let o=t[s],a=i[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,n)}};$i.seqWithValue=function(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.id in t&&i.push(r)}return i};function Qu(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Ey=0;function Ty(e){let t=e.split(`
`);for(let i=0;i<t.length;i++)t[i]=i+1+": "+t[i];return t.join(`
`)}function pd(e){switch(e){case Bt:return["Linear","( value )"];case Oi:return["sRGB","( value )"];case Uc:return["RGBE","( value )"];case td:return["RGBM","( value, 7.0 )"];case id:return["RGBM","( value, 16.0 )"];case nd:return["RGBD","( value, 256.0 )"];case $r:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Wm:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Zu(e,t,i){let n=e.getShaderParameter(t,35713),s=e.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+i+`
`+s+Ty(r)}function sr(e,t){let i=pd(t);return"vec4 "+e+"( vec4 value ) { return "+i[0]+"ToLinear"+i[1]+"; }"}function Cy(e,t){let i=pd(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function Py(e,t){let i;switch(t){case qp:i="Linear";break;case Yp:i="Reinhard";break;case Qp:i="OptimizedCineon";break;case Zp:i="ACESFilmic";break;case Kp:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Ay(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function Ly(e){let t=[];for(let i in e){let n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function Dy(e,t){let i={},n=e.getProgramParameter(t,35721);for(let s=0;s<n;s++){let o=e.getActiveAttrib(t,s).name;i[o]=e.getAttribLocation(t,o)}return i}function hr(e){return e!==""}function Ku(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(e){return e.replace(Ry,Iy)}function Iy(e,t){let i=Re[t];if(i===void 0)throw new Error("Can not resolve #include <"+t+">");return Xl(i)}var By=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Uy=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function $u(e){return e.replace(Uy,md).replace(By,Oy)}function Oy(e,t,i,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),md(e,t,i,n)}function md(e,t,i,n){let s="";for(let r=parseInt(t);r<parseInt(i);r++)s+=n.replace(/\[ i \]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fy(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ur&&(t="SHADOWMAP_TYPE_VSM"),t}function ky(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Tc:case Cc:t="ENVMAP_TYPE_CUBE";break;case Kr:case Ac:t="ENVMAP_TYPE_CUBE_UV";break;case za:case Pc:t="ENVMAP_TYPE_EQUIREC";break}return t}function Hy(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Cc:case Pc:t="ENVMAP_MODE_REFRACTION";break}return t}function Gy(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Va:t="ENVMAP_BLENDING_MULTIPLY";break;case jp:t="ENVMAP_BLENDING_MIX";break;case Xp:t="ENVMAP_BLENDING_ADD";break}return t}function Ny(e,t,i,n){let s=e.getContext(),r=i.defines,o=i.vertexShader,a=i.fragmentShader,l=Fy(i),c=ky(i),h=Hy(i),u=Gy(i),f=e.gammaFactor>0?e.gammaFactor:1,d=i.isWebGL2?"":Ay(i),p=Ly(r),y=s.createProgram(),v,m;if(i.isRawShaderMaterial?(v=[p].filter(hr).join(`
`),v.length>0&&(v+=`
`),m=[d,p].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(v=[eh(i),"#define SHADER_NAME "+i.shaderName,p,i.instancing?"#define USE_INSTANCING":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+i.maxBones,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.useVertexTexture?"#define BONE_TEXTURE":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[d,eh(i),"#define SHADER_NAME "+i.shaderName,p,i.alphaTest?"#define ALPHATEST "+i.alphaTest+(i.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.sheen?"#define USE_SHEEN":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(i.extensionShaderTextureLOD||i.envMap)&&i.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ds?"#define TONE_MAPPING":"",i.toneMapping!==ds?Re.tonemapping_pars_fragment:"",i.toneMapping!==ds?Py("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",Re.encodings_pars_fragment,i.map?sr("mapTexelToLinear",i.mapEncoding):"",i.matcap?sr("matcapTexelToLinear",i.matcapEncoding):"",i.envMap?sr("envMapTexelToLinear",i.envMapEncoding):"",i.emissiveMap?sr("emissiveMapTexelToLinear",i.emissiveMapEncoding):"",i.lightMap?sr("lightMapTexelToLinear",i.lightMapEncoding):"",Cy("linearToOutputTexel",i.outputEncoding),i.depthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hr).join(`
`)),o=Xl(o),o=Ku(o,i),o=Ju(o,i),a=Xl(a),a=Ku(a,i),a=Ju(a,i),o=$u(o),a=$u(a),i.isWebGL2&&!i.isRawShaderMaterial){let G=!1,O=/^\s*#version\s+300\s+es\s*\n/;i.isShaderMaterial&&o.match(O)!==null&&a.match(O)!==null&&(G=!0,o=o.replace(O,""),a=a.replace(O,"")),v=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=[`#version 300 es
`,"#define varying in",G?"":"out highp vec4 pc_fragColor;",G?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m}let g=v+o,E=m+a,M=Qu(s,35633,g),C=Qu(s,35632,E);if(s.attachShader(y,M),s.attachShader(y,C),i.index0AttributeName!==void 0?s.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y),e.debug.checkShaderErrors){let G=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(M).trim(),x=s.getShaderInfoLog(C).trim(),b=!0,w=!0;if(s.getProgramParameter(y,35714)===!1){b=!1;let S=Zu(s,M,"vertex"),_=Zu(s,C,"fragment");console.error("THREE.WebGLProgram: shader error: ",s.getError(),"35715",s.getProgramParameter(y,35715),"gl.getProgramInfoLog",G,S,_)}else G!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",G):(O===""||x==="")&&(w=!1);w&&(this.diagnostics={runnable:b,programLog:G,vertexShader:{log:O,prefix:v},fragmentShader:{log:x,prefix:m}})}s.deleteShader(M),s.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new $i(s,y)),L};let B;return this.getAttributes=function(){return B===void 0&&(B=Dy(s,y)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.name=i.shaderName,this.id=Ey++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=C,this}function Vy(e,t,i,n){let s=[],r=i.isWebGL2,o=i.logarithmicDepthBuffer,a=i.floatVertexTextures,l=i.maxVertexUniforms,c=i.vertexTextures,h=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},f=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen"];function d(M,C){let L;if(C){let B=Li[C];L={name:M.name||M.type,uniforms:Vs.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader}}else L={name:M.name||M.type,uniforms:M.uniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader};return L}function p(M){let L=M.skeleton.bones;if(a)return 1024;{let G=Math.floor((l-20)/4),O=Math.min(G,L.length);return O<L.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+L.length+" bones. This GPU supports "+O+"."),0):O}}function y(M){let C;return M?M.isTexture?C=M.encoding:M.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),C=M.texture.encoding):C=Bt,C}function v(M,C,L,B,G,O,x){let b=B.fog,w=M.isMeshStandardMaterial?B.environment:null,S=M.envMap||w,_=u[M.type],T=x.isSkinnedMesh?p(x):0;M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let A=d(M,_);M.onBeforeCompile(A,e);let I=e.getRenderTarget();return{isWebGL2:r,shaderID:_,shaderName:A.name,uniforms:A.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,defines:M.defines,isRawShaderMaterial:M.isRawShaderMaterial,isShaderMaterial:M.isShaderMaterial,precision:h,instancing:x.isInstancedMesh===!0,supportsVertexTextures:c,outputEncoding:I!==null?y(I.texture):e.outputEncoding,map:!!M.map,mapEncoding:y(M.map),matcap:!!M.matcap,matcapEncoding:y(M.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:y(S),envMapCubeUV:!!S&&(S.mapping===Kr||S.mapping===Ac),lightMap:!!M.lightMap,lightMapEncoding:y(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:y(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===qm,tangentSpaceNormalMap:M.normalMapType===Gs,clearcoatMap:!!M.clearcoatMap,clearcoatRoughnessMap:!!M.clearcoatRoughnessMap,clearcoatNormalMap:!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,alphaMap:!!M.alphaMap,gradientMap:!!M.gradientMap,sheen:!!M.sheen,combine:M.combine,vertexTangents:M.normalMap&&M.vertexTangents,vertexColors:M.vertexColors,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap)&&!!M.displacementMap,fog:!!b,useFog:M.fog,fogExp2:b&&b.isFogExp2,flatShading:M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:o,skinning:M.skinning&&T>0,maxBones:T,useVertexTexture:a,morphTargets:M.morphTargets,morphNormals:M.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:G,numClipIntersection:O,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:M.toneMapped?e.toneMapping:ds,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,alphaTest:M.alphaTest,doubleSided:M.side===Pt,flipSided:M.side===ut,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:r||t.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:r||t.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:r||t.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.fragmentShader),C.push(M.vertexShader)),M.defines!==void 0)for(let L in M.defines)C.push(L),C.push(M.defines[L]);if(M.isRawShaderMaterial===void 0){for(let L=0;L<f.length;L++)C.push(M[f[L]]);C.push(e.outputEncoding),C.push(e.gammaFactor)}return C.push(M.customProgramCacheKey),C.join()}function g(M,C){let L;for(let B=0,G=s.length;B<G;B++){let O=s[B];if(O.cacheKey===C){L=O,++L.usedTimes;break}}return L===void 0&&(L=new Ny(e,C,M,n),s.push(L)),L}function E(M){if(--M.usedTimes===0){let C=s.indexOf(M);s[C]=s[s.length-1],s.pop(),M.destroy()}}return{getParameters:v,getProgramCacheKey:m,acquireProgram:g,releaseProgram:E,programs:s}}function zy(){let e=new WeakMap;function t(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function n(r,o,a){e.get(r)[o]=a}function s(){e=new WeakMap}return{get:t,remove:i,update:n,dispose:s}}function Wy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function jy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function th(){let e=[],t=0,i=[],n=[],s={id:-1};function r(){t=0,i.length=0,n.length=0}function o(u,f,d,p,y,v){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,program:d.program||s,groupOrder:p,renderOrder:u.renderOrder,z:y,group:v},e[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.program=d.program||s,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=y,m.group=v),t++,m}function a(u,f,d,p,y,v){let m=o(u,f,d,p,y,v);(d.transparent===!0?n:i).push(m)}function l(u,f,d,p,y,v){let m=o(u,f,d,p,y,v);(d.transparent===!0?n:i).unshift(m)}function c(u,f){i.length>1&&i.sort(u||Wy),n.length>1&&n.sort(f||jy)}function h(){for(let u=t,f=e.length;u<f;u++){let d=e[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.program=null,d.group=null}}return{opaque:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function Xy(){let e=new WeakMap;function t(s){let r=s.target;r.removeEventListener("dispose",t),e.delete(r)}function i(s,r){let o=e.get(s),a;return o===void 0?(a=new th,e.set(s,new WeakMap),e.get(s).set(r,a),s.addEventListener("dispose",t)):(a=o.get(r),a===void 0&&(a=new th,o.set(r,a))),a}function n(){e=new WeakMap}return{get:i,dispose:n}}function qy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new P,color:new $};break;case"SpotLight":i={position:new P,direction:new P,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new $,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new $,groundColor:new $};break;case"RectAreaLight":i={color:new $,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function Yy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Qy=0;function Zy(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function Ky(){let e=new qy,t=Yy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)i.probe.push(new P);let n=new P,s=new ue,r=new ue;function o(a,l,c){let h=0,u=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,p=0,y=0,v=0,m=0,g=0,E=0,M=0,C=c.matrixWorldInverse;a.sort(Zy);for(let B=0,G=a.length;B<G;B++){let O=a[B],x=O.color,b=O.intensity,w=O.distance,S=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=x.r*b,u+=x.g*b,f+=x.b*b;else if(O.isLightProbe)for(let _=0;_<9;_++)i.probe[_].addScaledVector(O.sh.coefficients[_],b);else if(O.isDirectionalLight){let _=e.get(O);if(_.color.copy(O.color).multiplyScalar(O.intensity),_.direction.setFromMatrixPosition(O.matrixWorld),n.setFromMatrixPosition(O.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(C),O.castShadow){let T=O.shadow,A=t.get(O);A.shadowBias=T.bias,A.shadowNormalBias=T.normalBias,A.shadowRadius=T.radius,A.shadowMapSize=T.mapSize,i.directionalShadow[d]=A,i.directionalShadowMap[d]=S,i.directionalShadowMatrix[d]=O.shadow.matrix,g++}i.directional[d]=_,d++}else if(O.isSpotLight){let _=e.get(O);if(_.position.setFromMatrixPosition(O.matrixWorld),_.position.applyMatrix4(C),_.color.copy(x).multiplyScalar(b),_.distance=w,_.direction.setFromMatrixPosition(O.matrixWorld),n.setFromMatrixPosition(O.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(C),_.coneCos=Math.cos(O.angle),_.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),_.decay=O.decay,O.castShadow){let T=O.shadow,A=t.get(O);A.shadowBias=T.bias,A.shadowNormalBias=T.normalBias,A.shadowRadius=T.radius,A.shadowMapSize=T.mapSize,i.spotShadow[y]=A,i.spotShadowMap[y]=S,i.spotShadowMatrix[y]=O.shadow.matrix,M++}i.spot[y]=_,y++}else if(O.isRectAreaLight){let _=e.get(O);_.color.copy(x).multiplyScalar(b),_.position.setFromMatrixPosition(O.matrixWorld),_.position.applyMatrix4(C),r.identity(),s.copy(O.matrixWorld),s.premultiply(C),r.extractRotation(s),_.halfWidth.set(O.width*.5,0,0),_.halfHeight.set(0,O.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),i.rectArea[v]=_,v++}else if(O.isPointLight){let _=e.get(O);if(_.position.setFromMatrixPosition(O.matrixWorld),_.position.applyMatrix4(C),_.color.copy(O.color).multiplyScalar(O.intensity),_.distance=O.distance,_.decay=O.decay,O.castShadow){let T=O.shadow,A=t.get(O);A.shadowBias=T.bias,A.shadowNormalBias=T.normalBias,A.shadowRadius=T.radius,A.shadowMapSize=T.mapSize,A.shadowCameraNear=T.camera.near,A.shadowCameraFar=T.camera.far,i.pointShadow[p]=A,i.pointShadowMap[p]=S,i.pointShadowMatrix[p]=O.shadow.matrix,E++}i.point[p]=_,p++}else if(O.isHemisphereLight){let _=e.get(O);_.direction.setFromMatrixPosition(O.matrixWorld),_.direction.transformDirection(C),_.direction.normalize(),_.skyColor.copy(O.color).multiplyScalar(b),_.groundColor.copy(O.groundColor).multiplyScalar(b),i.hemi[m]=_,m++}}i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==y||L.rectAreaLength!==v||L.hemiLength!==m||L.numDirectionalShadows!==g||L.numPointShadows!==E||L.numSpotShadows!==M)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=v,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=M,L.directionalLength=d,L.pointLength=p,L.spotLength=y,L.rectAreaLength=v,L.hemiLength=m,L.numDirectionalShadows=g,L.numPointShadows=E,L.numSpotShadows=M,i.version=Qy++)}return{setup:o,state:i}}function ih(){let e=new Ky,t=[],i=[];function n(){t.length=0,i.length=0}function s(l){t.push(l)}function r(l){i.push(l)}function o(l){e.setup(t,i,l)}return{init:n,state:{lightsArray:t,shadowsArray:i,lights:e},setupLights:o,pushLight:s,pushShadow:r}}function Jy(){let e=new WeakMap;function t(s){let r=s.target;r.removeEventListener("dispose",t),e.delete(r)}function i(s,r){let o;return e.has(s)===!1?(o=new ih,e.set(s,new WeakMap),e.get(s).set(r,o),s.addEventListener("dispose",t)):e.get(s).has(r)===!1?(o=new ih,e.get(s).set(r,o)):o=e.get(s).get(r),o}function n(){e=new WeakMap}return{get:i,dispose:n}}function An(e){Ee.call(this),this.type="MeshDepthMaterial",this.depthPacking=jm,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}An.prototype=Object.create(Ee.prototype);An.prototype.constructor=An;An.prototype.isMeshDepthMaterial=!0;An.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function Ln(e){Ee.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}Ln.prototype=Object.create(Ee.prototype);Ln.prototype.constructor=Ln;Ln.prototype.isMeshDistanceMaterial=!0;Ln.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var $y=`uniform sampler2D shadow_pass;
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
}`,e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function gd(e,t,i){let n=new eo,s=new N,r=new N,o=new Oe,a=[],l=[],c={},h={0:ut,1:Et,2:Pt},u=new ye({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new N},radius:{value:4}},vertexShader:e0,fragmentShader:$y}),f=u.clone();f.defines.HORIZONAL_PASS=1;let d=new ae;d.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Ge(d,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh,this.render=function(C,L,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;let G=e.getRenderTarget(),O=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.state;b.setBlending(Ji),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let w=0,S=C.length;w<S;w++){let _=C[w],T=_.shadow;if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;if(T===void 0){console.warn("THREE.WebGLShadowMap:",_,"has no shadow.");continue}s.copy(T.mapSize);let A=T.getFrameExtents();if(s.multiply(A),r.copy(T.mapSize),(s.x>i||s.y>i)&&(s.x>i&&(r.x=Math.floor(i/A.x),s.x=r.x*A.x,T.mapSize.x=r.x),s.y>i&&(r.y=Math.floor(i/A.y),s.y=r.y*A.y,T.mapSize.y=r.y)),T.map===null&&!T.isPointLightShadow&&this.type===ur){let F={minFilter:ke,magFilter:ke,format:Ye};T.map=new Je(s.x,s.y,F),T.map.texture.name=_.name+".shadowMap",T.mapPass=new Je(s.x,s.y,F),T.camera.updateProjectionMatrix()}if(T.map===null){let F={minFilter:it,magFilter:it,format:Ye};T.map=new Je(s.x,s.y,F),T.map.texture.name=_.name+".shadowMap",T.camera.updateProjectionMatrix()}e.setRenderTarget(T.map),e.clear();let I=T.getViewportCount();for(let F=0;F<I;F++){let V=T.getViewport(F);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),b.viewport(o),T.updateMatrices(_,F),n=T.getFrustum(),M(L,B,T.camera,_,this.type)}!T.isPointLightShadow&&this.type===ur&&v(T,B),T.needsUpdate=!1}y.needsUpdate=!1,e.setRenderTarget(G,O,x)};function v(C,L){let B=t.update(p);u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(L,null,B,u,p,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(L,null,B,f,p,null)}function m(C,L,B){let G=C<<0|L<<1|B<<2,O=a[G];return O===void 0&&(O=new An({depthPacking:Xm,morphTargets:C,skinning:L}),a[G]=O),O}function g(C,L,B){let G=C<<0|L<<1|B<<2,O=l[G];return O===void 0&&(O=new Ln({morphTargets:C,skinning:L}),l[G]=O),O}function E(C,L,B,G,O,x,b){let w=null,S=m,_=C.customDepthMaterial;if(G.isPointLight===!0&&(S=g,_=C.customDistanceMaterial),_===void 0){let T=!1;B.morphTargets===!0&&(T=L.morphAttributes&&L.morphAttributes.position&&L.morphAttributes.position.length>0);let A=!1;C.isSkinnedMesh===!0&&(B.skinning===!0?A=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",C));let I=C.isInstancedMesh===!0;w=S(T,A,I)}else w=_;if(e.localClippingEnabled&&B.clipShadows===!0&&B.clippingPlanes.length!==0){let T=w.uuid,A=B.uuid,I=c[T];I===void 0&&(I={},c[T]=I);let F=I[A];F===void 0&&(F=w.clone(),I[A]=F),w=F}return w.visible=B.visible,w.wireframe=B.wireframe,b===ur?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:h[B.side],w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(G.matrixWorld),w.nearDistance=O,w.farDistance=x),w}function M(C,L,B,G,O){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===ur)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);let w=t.update(C),S=C.material;if(Array.isArray(S)){let _=w.groups;for(let T=0,A=_.length;T<A;T++){let I=_[T],F=S[I.materialIndex];if(F&&F.visible){let V=E(C,w,F,G,B.near,B.far,O);e.renderBufferDirect(B,null,w,V,C,I)}}}else if(S.visible){let _=E(C,w,S,G,B.near,B.far,O);e.renderBufferDirect(B,null,w,_,C,null)}}let b=C.children;for(let w=0,S=b.length;w<S;w++)M(b[w],L,B,G,O)}}function t0(e,t,i){let n=i.isWebGL2;function s(){let H=!1,se=new Oe,re=null,Me=new Oe(0,0,0,0);return{setMask:function(te){re!==te&&!H&&(e.colorMask(te,te,te,te),re=te)},setLocked:function(te){H=te},setClear:function(te,pe,Fe,Te,ve){ve===!0&&(te*=Te,pe*=Te,Fe*=Te),se.set(te,pe,Fe,Te),Me.equals(se)===!1&&(e.clearColor(te,pe,Fe,Te),Me.copy(se))},reset:function(){H=!1,re=null,Me.set(-1,0,0,0)}}}function r(){let H=!1,se=null,re=null,Me=null;return{setTest:function(te){te?k(2929):j(2929)},setMask:function(te){se!==te&&!H&&(e.depthMask(te),se=te)},setFunc:function(te){if(re!==te){if(te)switch(te){case kp:e.depthFunc(512);break;case Hp:e.depthFunc(519);break;case Gp:e.depthFunc(513);break;case Fl:e.depthFunc(515);break;case Np:e.depthFunc(514);break;case Vp:e.depthFunc(518);break;case zp:e.depthFunc(516);break;case Wp:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);re=te}},setLocked:function(te){H=te},setClear:function(te){Me!==te&&(e.clearDepth(te),Me=te)},reset:function(){H=!1,se=null,re=null,Me=null}}}function o(){let H=!1,se=null,re=null,Me=null,te=null,pe=null,Fe=null,Te=null,ve=null;return{setTest:function(Ce){H||(Ce?k(2960):j(2960))},setMask:function(Ce){se!==Ce&&!H&&(e.stencilMask(Ce),se=Ce)},setFunc:function(Ce,pt,Rt){(re!==Ce||Me!==pt||te!==Rt)&&(e.stencilFunc(Ce,pt,Rt),re=Ce,Me=pt,te=Rt)},setOp:function(Ce,pt,Rt){(pe!==Ce||Fe!==pt||Te!==Rt)&&(e.stencilOp(Ce,pt,Rt),pe=Ce,Fe=pt,Te=Rt)},setLocked:function(Ce){H=Ce},setClear:function(Ce){ve!==Ce&&(e.clearStencil(Ce),ve=Ce)},reset:function(){H=!1,se=null,re=null,Me=null,te=null,pe=null,Fe=null,Te=null,ve=null}}}let a=new s,l=new r,c=new o,h={},u=null,f=null,d=null,p=null,y=null,v=null,m=null,g=null,E=null,M=!1,C=null,L=null,B=null,G=null,O=null,x=e.getParameter(35661),b=!1,w=0,S=e.getParameter(7938);S.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL\ ([0-9])/.exec(S)[1]),b=w>=1):S.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(S)[1]),b=w>=2);let _=null,T={},A=new Oe,I=new Oe;function F(H,se,re){let Me=new Uint8Array(4),te=e.createTexture();e.bindTexture(H,te),e.texParameteri(H,10241,9728),e.texParameteri(H,10240,9728);for(let pe=0;pe<re;pe++)e.texImage2D(se+pe,0,6408,1,1,0,6408,5121,Me);return te}let V={};V[3553]=F(3553,3553,1),V[34067]=F(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(2929),l.setFunc(Fl),Ve(!1),Se(xu),k(2884),ge(Ji);function k(H){h[H]!==!0&&(e.enable(H),h[H]=!0)}function j(H){h[H]!==!1&&(e.disable(H),h[H]=!1)}function Y(H){return u!==H?(e.useProgram(H),u=H,!0):!1}let le={[rs]:32774,[Cp]:32778,[Pp]:32779};if(n)le[wu]=32775,le[_u]=32776;else{let H=t.get("EXT_blend_minmax");H!==null&&(le[wu]=H.MIN_EXT,le[_u]=H.MAX_EXT)}let Be={[Ap]:0,[Lp]:1,[Dp]:768,[Kh]:770,[Fp]:776,[Up]:774,[Ip]:772,[Rp]:769,[Jh]:771,[Op]:775,[Bp]:773};function ge(H,se,re,Me,te,pe,Fe,Te){if(H===Ji){f&&(j(3042),f=!1);return}if(f||(k(3042),f=!0),H!==Tp){if(H!==d||Te!==M){if((p!==rs||m!==rs)&&(e.blendEquation(32774),p=rs,m=rs),Te)switch(H){case dr:e.blendFuncSeparate(1,771,1,771);break;case ms:e.blendFunc(1,1);break;case yu:e.blendFuncSeparate(0,0,769,771);break;case bu:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case dr:e.blendFuncSeparate(770,771,1,771);break;case ms:e.blendFunc(770,1);break;case yu:e.blendFunc(0,769);break;case bu:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,v=null,g=null,E=null,d=H,M=Te}return}te=te||se,pe=pe||re,Fe=Fe||Me,(se!==p||te!==m)&&(e.blendEquationSeparate(le[se],le[te]),p=se,m=te),(re!==y||Me!==v||pe!==g||Fe!==E)&&(e.blendFuncSeparate(Be[re],Be[Me],Be[pe],Be[Fe]),y=re,v=Me,g=pe,E=Fe),d=H,M=null}function X(H,se){H.side===Pt?j(2884):k(2884);let re=H.side===ut;se&&(re=!re),Ve(re),H.blending===dr&&H.transparent===!1?ge(Ji):ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Me=H.stencilWrite;c.setTest(Me),Me&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),be(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits)}function Ve(H){C!==H&&(H?e.frontFace(2304):e.frontFace(2305),C=H)}function Se(H){H!==Sp?(k(2884),H!==L&&(H===xu?e.cullFace(1029):H===Ep?e.cullFace(1028):e.cullFace(1032))):j(2884),L=H}function Ae(H){H!==B&&(b&&e.lineWidth(H),B=H)}function be(H,se,re){H?(k(32823),(G!==se||O!==re)&&(e.polygonOffset(se,re),G=se,O=re)):j(32823)}function Z(H){H?k(3089):j(3089)}function K(H){H===void 0&&(H=33984+x-1),_!==H&&(e.activeTexture(H),_=H)}function J(H,se){_===null&&K();let re=T[_];re===void 0&&(re={type:void 0,texture:void 0},T[_]=re),(re.type!==H||re.texture!==se)&&(e.bindTexture(H,se||V[H]),re.type=H,re.texture=se)}function fe(){let H=T[_];H!==void 0&&H.type!==void 0&&(e.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function he(){try{e.compressedTexImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{e.texImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function D(){try{e.texImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function U(H){A.equals(H)===!1&&(e.scissor(H.x,H.y,H.z,H.w),A.copy(H))}function ee(H){I.equals(H)===!1&&(e.viewport(H.x,H.y,H.z,H.w),I.copy(H))}function Q(){h={},_=null,T={},u=null,d=null,C=null,L=null,a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:k,disable:j,useProgram:Y,setBlending:ge,setMaterial:X,setFlipSided:Ve,setCullFace:Se,setLineWidth:Ae,setPolygonOffset:be,setScissorTest:Z,activeTexture:K,bindTexture:J,unbindTexture:fe,compressedTexImage2D:he,texImage2D:Le,texImage3D:D,scissor:U,viewport:ee,reset:Q}}function i0(e,t,i,n,s,r,o){let a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,f=new WeakMap,d,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,U){return p?new OffscreenCanvas(D,U):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(D,U,ee,Q){let H=1;if((D.width>Q||D.height>Q)&&(H=Q/Math.max(D.width,D.height)),H<1||U===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let se=U?xe.floorPowerOfTwo:Math.floor,re=se(H*D.width),Me=se(H*D.height);d===void 0&&(d=y(re,Me));let te=ee?y(re,Me):d;return te.width=re,te.height=Me,te.getContext("2d").drawImage(D,0,0,re,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+re+"x"+Me+")."),te}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return xe.isPowerOfTwo(D.width)&&xe.isPowerOfTwo(D.height)}function g(D){return a?!1:D.wrapS!==St||D.wrapT!==St||D.minFilter!==it&&D.minFilter!==ke}function E(D,U){return D.generateMipmaps&&U&&D.minFilter!==it&&D.minFilter!==ke}function M(D,U,ee,Q){e.generateMipmap(D);let H=n.get(U);H.__maxMipLevel=Math.log(Math.max(ee,Q))*Math.LOG2E}function C(D,U,ee){if(a===!1)return U;if(D!==null){if(e[D]!==void 0)return e[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=U;return U===6403&&(ee===5126&&(Q=33326),ee===5131&&(Q=33325),ee===5121&&(Q=33321)),U===6407&&(ee===5126&&(Q=34837),ee===5131&&(Q=34843),ee===5121&&(Q=32849)),U===6408&&(ee===5126&&(Q=34836),ee===5131&&(Q=34842),ee===5121&&(Q=32856)),(Q===33325||Q===33326||Q===34842||Q===34836)&&t.get("EXT_color_buffer_float"),Q}function L(D){return D===it||D===vr||D===kl?9728:9729}function B(D){let U=D.target;U.removeEventListener("dispose",B),O(U),U.isVideoTexture&&f.delete(U),o.memory.textures--}function G(D){let U=D.target;U.removeEventListener("dispose",G),x(U),o.memory.textures--}function O(D){let U=n.get(D);U.__webglInit!==void 0&&(e.deleteTexture(U.__webglTexture),n.remove(D))}function x(D){let U=n.get(D),ee=n.get(D.texture);if(D){if(ee.__webglTexture!==void 0&&e.deleteTexture(ee.__webglTexture),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)e.deleteFramebuffer(U.__webglFramebuffer[Q]),U.__webglDepthbuffer&&e.deleteRenderbuffer(U.__webglDepthbuffer[Q]);else e.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&e.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&e.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer&&e.deleteRenderbuffer(U.__webglColorRenderbuffer),U.__webglDepthRenderbuffer&&e.deleteRenderbuffer(U.__webglDepthRenderbuffer);n.remove(D.texture),n.remove(D)}}let b=0;function w(){b=0}function S(){let D=b;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),b+=1,D}function _(D,U){let ee=n.get(D);if(D.isVideoTexture&&K(D),D.version>0&&ee.__version!==D.version){let Q=D.image;if(Q===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(ee,D,U);return}}i.activeTexture(33984+U),i.bindTexture(3553,ee.__webglTexture)}function T(D,U){let ee=n.get(D);if(D.version>0&&ee.__version!==D.version){le(ee,D,U);return}i.activeTexture(33984+U),i.bindTexture(35866,ee.__webglTexture)}function A(D,U){let ee=n.get(D);if(D.version>0&&ee.__version!==D.version){le(ee,D,U);return}i.activeTexture(33984+U),i.bindTexture(32879,ee.__webglTexture)}function I(D,U){if(D.image.length!==6)return;let ee=n.get(D);if(D.version>0&&ee.__version!==D.version){Y(ee,D),i.activeTexture(33984+U),i.bindTexture(34067,ee.__webglTexture),e.pixelStorei(37440,D.flipY);let Q=D&&(D.isCompressedTexture||D.image[0].isCompressedTexture),H=D.image[0]&&D.image[0].isDataTexture,se=[];for(let ve=0;ve<6;ve++)!Q&&!H?se[ve]=v(D.image[ve],!1,!0,c):se[ve]=H?D.image[ve].image:D.image[ve];let re=se[0],Me=m(re)||a,te=r.convert(D.format),pe=r.convert(D.type),Fe=C(D.internalFormat,te,pe);j(34067,D,Me);let Te;if(Q){for(let ve=0;ve<6;ve++){Te=se[ve].mipmaps;for(let Ce=0;Ce<Te.length;Ce++){let pt=Te[Ce];D.format!==Ye&&D.format!==gi?te!==null?i.compressedTexImage2D(34069+ve,Ce,Fe,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):i.texImage2D(34069+ve,Ce,Fe,pt.width,pt.height,0,te,pe,pt.data)}}ee.__maxMipLevel=Te.length-1}else{Te=D.mipmaps;for(let ve=0;ve<6;ve++)if(H){i.texImage2D(34069+ve,0,Fe,se[ve].width,se[ve].height,0,te,pe,se[ve].data);for(let Ce=0;Ce<Te.length;Ce++){let Rt=Te[Ce].image[ve].image;i.texImage2D(34069+ve,Ce+1,Fe,Rt.width,Rt.height,0,te,pe,Rt.data)}}else{i.texImage2D(34069+ve,0,Fe,te,pe,se[ve]);for(let Ce=0;Ce<Te.length;Ce++){let pt=Te[Ce];i.texImage2D(34069+ve,Ce+1,Fe,te,pe,pt.image[ve])}}ee.__maxMipLevel=Te.length}E(D,Me)&&M(34067,D,re.width,re.height),ee.__version=D.version,D.onUpdate&&D.onUpdate(D)}else i.activeTexture(33984+U),i.bindTexture(34067,ee.__webglTexture)}function F(D,U){i.activeTexture(33984+U),i.bindTexture(34067,n.get(D).__webglTexture)}let V={[It]:10497,[St]:33071,[ca]:33648},k={[it]:9728,[vr]:9984,[kl]:9986,[ke]:9729,[$h]:9985,[Wa]:9987};function j(D,U,ee){ee?(e.texParameteri(D,10242,V[U.wrapS]),e.texParameteri(D,10243,V[U.wrapT]),(D===32879||D===35866)&&e.texParameteri(D,32882,V[U.wrapR]),e.texParameteri(D,10240,k[U.magFilter]),e.texParameteri(D,10241,k[U.minFilter])):(e.texParameteri(D,10242,33071),e.texParameteri(D,10243,33071),(D===32879||D===35866)&&e.texParameteri(D,32882,33071),(U.wrapS!==St||U.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(D,10240,L(U.magFilter)),e.texParameteri(D,10241,L(U.minFilter)),U.minFilter!==it&&U.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let Q=t.get("EXT_texture_filter_anisotropic");if(Q){if(U.type===Wt&&t.get("OES_texture_float_linear")===null||U.type===nn&&(a||t.get("OES_texture_half_float_linear"))===null)return;(U.anisotropy>1||n.get(U).__currentAnisotropy)&&(e.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,s.getMaxAnisotropy())),n.get(U).__currentAnisotropy=U.anisotropy)}}function Y(D,U){D.__webglInit===void 0&&(D.__webglInit=!0,U.addEventListener("dispose",B),D.__webglTexture=e.createTexture(),o.memory.textures++)}function le(D,U,ee){let Q=3553;U.isDataTexture2DArray&&(Q=35866),U.isDataTexture3D&&(Q=32879),Y(D,U),i.activeTexture(33984+ee),i.bindTexture(Q,D.__webglTexture),e.pixelStorei(37440,U.flipY),e.pixelStorei(37441,U.premultiplyAlpha),e.pixelStorei(3317,U.unpackAlignment);let H=g(U)&&m(U.image)===!1,se=v(U.image,H,!1,h),re=m(se)||a,Me=r.convert(U.format),te=r.convert(U.type),pe=C(U.internalFormat,Me,te);j(Q,U,re);let Fe,Te=U.mipmaps;if(U.isDepthTexture)pe=6402,a?U.type===Wt?pe=36012:U.type===fs?pe=33190:U.type===fr?pe=35056:pe=33189:U.type===Wt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),U.format===Xt&&pe===6402&&U.type!==gs&&U.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),U.type=gs,te=r.convert(U.type)),U.format===xr&&pe===6402&&(pe=34041,U.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),U.type=fr,te=r.convert(U.type))),i.texImage2D(3553,0,pe,se.width,se.height,0,Me,te,null);else if(U.isDataTexture)if(Te.length>0&&re){for(let ve=0,Ce=Te.length;ve<Ce;ve++)Fe=Te[ve],i.texImage2D(3553,ve,pe,Fe.width,Fe.height,0,Me,te,Fe.data);U.generateMipmaps=!1,D.__maxMipLevel=Te.length-1}else i.texImage2D(3553,0,pe,se.width,se.height,0,Me,te,se.data),D.__maxMipLevel=0;else if(U.isCompressedTexture){for(let ve=0,Ce=Te.length;ve<Ce;ve++)Fe=Te[ve],U.format!==Ye&&U.format!==gi?Me!==null?i.compressedTexImage2D(3553,ve,pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):i.texImage2D(3553,ve,pe,Fe.width,Fe.height,0,Me,te,Fe.data);D.__maxMipLevel=Te.length-1}else if(U.isDataTexture2DArray)i.texImage3D(35866,0,pe,se.width,se.height,se.depth,0,Me,te,se.data),D.__maxMipLevel=0;else if(U.isDataTexture3D)i.texImage3D(32879,0,pe,se.width,se.height,se.depth,0,Me,te,se.data),D.__maxMipLevel=0;else if(Te.length>0&&re){for(let ve=0,Ce=Te.length;ve<Ce;ve++)Fe=Te[ve],i.texImage2D(3553,ve,pe,Me,te,Fe);U.generateMipmaps=!1,D.__maxMipLevel=Te.length-1}else i.texImage2D(3553,0,pe,Me,te,se),D.__maxMipLevel=0;E(U,re)&&M(Q,U,se.width,se.height),D.__version=U.version,U.onUpdate&&U.onUpdate(U)}function Be(D,U,ee,Q){let H=r.convert(U.texture.format),se=r.convert(U.texture.type),re=C(U.texture.internalFormat,H,se);i.texImage2D(Q,0,re,U.width,U.height,0,H,se,null),e.bindFramebuffer(36160,D),e.framebufferTexture2D(36160,ee,Q,n.get(U.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function ge(D,U,ee){if(e.bindRenderbuffer(36161,D),U.depthBuffer&&!U.stencilBuffer){let Q=33189;if(ee){let H=U.depthTexture;H&&H.isDepthTexture&&(H.type===Wt?Q=36012:H.type===fs&&(Q=33190));let se=Z(U);e.renderbufferStorageMultisample(36161,se,Q,U.width,U.height)}else e.renderbufferStorage(36161,Q,U.width,U.height);e.framebufferRenderbuffer(36160,36096,36161,D)}else if(U.depthBuffer&&U.stencilBuffer){if(ee){let Q=Z(U);e.renderbufferStorageMultisample(36161,Q,35056,U.width,U.height)}else e.renderbufferStorage(36161,34041,U.width,U.height);e.framebufferRenderbuffer(36160,33306,36161,D)}else{let Q=r.convert(U.texture.format),H=r.convert(U.texture.type),se=C(U.texture.internalFormat,Q,H);if(ee){let re=Z(U);e.renderbufferStorageMultisample(36161,re,se,U.width,U.height)}else e.renderbufferStorage(36161,se,U.width,U.height)}e.bindRenderbuffer(36161,null)}function X(D,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,D),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),_(U.depthTexture,0);let Q=n.get(U.depthTexture).__webglTexture;if(U.depthTexture.format===Xt)e.framebufferTexture2D(36160,36096,3553,Q,0);else if(U.depthTexture.format===xr)e.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Ve(D){let U=n.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");X(U.__webglFramebuffer,D)}else if(ee){U.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,U.__webglFramebuffer[Q]),U.__webglDepthbuffer[Q]=e.createRenderbuffer(),ge(U.__webglDepthbuffer[Q],D,!1)}else e.bindFramebuffer(36160,U.__webglFramebuffer),U.__webglDepthbuffer=e.createRenderbuffer(),ge(U.__webglDepthbuffer,D,!1);e.bindFramebuffer(36160,null)}function Se(D){let U=n.get(D),ee=n.get(D.texture);D.addEventListener("dispose",G),ee.__webglTexture=e.createTexture(),o.memory.textures++;let Q=D.isWebGLCubeRenderTarget===!0,H=D.isWebGLMultisampleRenderTarget===!0,se=m(D)||a;if(a&&D.texture.format===gi&&(D.texture.type===Wt||D.texture.type===nn)&&(D.texture.format=Ye,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Q){U.__webglFramebuffer=[];for(let re=0;re<6;re++)U.__webglFramebuffer[re]=e.createFramebuffer()}else if(U.__webglFramebuffer=e.createFramebuffer(),H)if(a){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,U.__webglColorRenderbuffer);let re=r.convert(D.texture.format),Me=r.convert(D.texture.type),te=C(D.texture.internalFormat,re,Me),pe=Z(D);e.renderbufferStorageMultisample(36161,pe,te,D.width,D.height),e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,U.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),D.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(U.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Q){i.bindTexture(34067,ee.__webglTexture),j(34067,D.texture,se);for(let re=0;re<6;re++)Be(U.__webglFramebuffer[re],D,36064,34069+re);E(D.texture,se)&&M(34067,D.texture,D.width,D.height),i.bindTexture(34067,null)}else i.bindTexture(3553,ee.__webglTexture),j(3553,D.texture,se),Be(U.__webglFramebuffer,D,36064,3553),E(D.texture,se)&&M(3553,D.texture,D.width,D.height),i.bindTexture(3553,null);D.depthBuffer&&Ve(D)}function Ae(D){let U=D.texture,ee=m(D)||a;if(E(U,ee)){let Q=D.isWebGLCubeRenderTarget?34067:3553,H=n.get(U).__webglTexture;i.bindTexture(Q,H),M(Q,U,D.width,D.height),i.bindTexture(Q,null)}}function be(D){if(D.isWebGLMultisampleRenderTarget)if(a){let U=n.get(D);e.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,U.__webglFramebuffer);let ee=D.width,Q=D.height,H=16384;D.depthBuffer&&(H|=256),D.stencilBuffer&&(H|=1024),e.blitFramebuffer(0,0,ee,Q,0,0,ee,Q,H,9728),e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Z(D){return a&&D.isWebGLMultisampleRenderTarget?Math.min(u,D.samples):0}function K(D){let U=o.render.frame;f.get(D)!==U&&(f.set(D,U),D.update())}let J=!1,fe=!1;function he(D,U){D&&D.isWebGLRenderTarget&&(J===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),J=!0),D=D.texture),_(D,U)}function Le(D,U){D&&D.isWebGLCubeRenderTarget&&(fe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),fe=!0),D=D.texture),D&&D.isCubeTexture||Array.isArray(D.image)&&D.image.length===6?I(D,U):F(D,U)}this.allocateTextureUnit=S,this.resetTextureUnits=w,this.setTexture2D=_,this.setTexture2DArray=T,this.setTexture3D=A,this.setTextureCube=I,this.setTextureCubeDynamic=F,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=be,this.safeSetTexture2D=he,this.safeSetTextureCube=Le}function n0(e,t,i){let n=i.isWebGL2;function s(r){let o;if(r===Jr)return 5121;if(r===tm)return 32819;if(r===im)return 32820;if(r===nm)return 33635;if(r===Jp)return 5120;if(r===$p)return 5122;if(r===gs)return 5123;if(r===em)return 5124;if(r===fs)return 5125;if(r===Wt)return 5126;if(r===nn)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Lc)return 6406;if(r===gi)return 6407;if(r===Ye)return 6408;if(r===Dc)return 6409;if(r===sm)return 6410;if(r===Xt)return 6402;if(r===xr)return 34041;if(r===Rc)return 6403;if(r===om)return 36244;if(r===Ic)return 33319;if(r===am)return 33320;if(r===lm)return 36248;if(r===cm)return 36249;if(r===Mu||r===Su||r===Eu||r===Tu)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Mu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cu||r===Pu||r===Au||r===Lu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Au)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===um)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Du||r===Ru)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(r===Du)return o.COMPRESSED_RGB8_ETC2;if(r===Ru)return o.COMPRESSED_RGBA8_ETC2_EAC}if(r===hm||r===dm||r===fm||r===pm||r===mm||r===gm||r===vm||r===xm||r===ym||r===bm||r===wm||r===_m||r===Mm||r===Sm||r===Tm||r===Cm||r===Pm||r===Am||r===Lm||r===Dm||r===Rm||r===Im||r===Bm||r===Um||r===Om||r===Fm||r===km||r===Hm)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?r:null;if(r===Em)return o=t.get("EXT_texture_compression_bptc"),o!==null?r:null;if(r===fr)return n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:s}}function ql(e){tt.call(this),this.cameras=e||[]}ql.prototype=Object.assign(Object.create(tt.prototype),{constructor:ql,isArrayCamera:!0});function Lt(){ne.call(this),this.type="Group"}Lt.prototype=Object.assign(Object.create(ne.prototype),{constructor:Lt,isGroup:!0});function pa(){this._targetRay=null,this._grip=null}Object.assign(pa.prototype,{constructor:pa,getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this},update:function(e,t,i){let n=null,s=null,r=this._targetRay,o=this._grip;return e&&(r!==null&&(n=t.getPose(e.targetRaySpace,i),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale))),o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale)))),r!==null&&(r.visible=n!==null),o!==null&&(o.visible=s!==null),this}});function vd(e,t){let i=this,n=null,s=1,r=null,o="local-floor",a=null,l=[],c=new Map,h=new tt;h.layers.enable(1),h.viewport=new Oe;let u=new tt;u.layers.enable(2),u.viewport=new Oe;let f=[h,u],d=new ql;d.layers.enable(1),d.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let w=l[b];return w===void 0&&(w=new pa,l[b]=w),w.getTargetRaySpace()},this.getControllerGrip=function(b){let w=l[b];return w===void 0&&(w=new pa,l[b]=w),w.getGripSpace()};function v(b){let w=c.get(b.inputSource);w&&w.dispatchEvent({type:b.type})}function m(){c.forEach(function(b,w){b.disconnect(w)}),c.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),x.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function g(b){r=b,x.setContext(n),x.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(b){s=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return r},this.getSession=function(){return n},this.setSession=function(b){if(n=b,n!==null){n.addEventListener("select",v),n.addEventListener("selectstart",v),n.addEventListener("selectend",v),n.addEventListener("squeeze",v),n.addEventListener("squeezestart",v),n.addEventListener("squeezeend",v),n.addEventListener("end",m);let w=t.getContextAttributes();w.xrCompatible!==!0&&t.makeXRCompatible();let S={antialias:w.antialias,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s},_=new XRWebGLLayer(n,t,S);n.updateRenderState({baseLayer:_}),n.requestReferenceSpace(o).then(g),n.addEventListener("inputsourceschange",E)}};function E(b){let w=n.inputSources;for(let S=0;S<l.length;S++)c.set(w[S],l[S]);for(let S=0;S<b.removed.length;S++){let _=b.removed[S],T=c.get(_);T&&(T.dispatchEvent({type:"disconnected",data:_}),c.delete(_))}for(let S=0;S<b.added.length;S++){let _=b.added[S],T=c.get(_);T&&T.dispatchEvent({type:"connected",data:_})}}let M=new P,C=new P;function L(b,w,S){M.setFromMatrixPosition(w.matrixWorld),C.setFromMatrixPosition(S.matrixWorld);let _=M.distanceTo(C),T=w.projectionMatrix.elements,A=S.projectionMatrix.elements,I=T[14]/(T[10]-1),F=T[14]/(T[10]+1),V=(T[9]+1)/T[5],k=(T[9]-1)/T[5],j=(T[8]-1)/T[0],Y=(A[8]+1)/A[0],le=I*j,Be=I*Y,ge=_/(-j+Y),X=ge*-j;w.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(X),b.translateZ(ge),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.getInverse(b.matrixWorld);let Ve=I+ge,Se=F+ge,Ae=le-X,be=Be+(_-X),Z=V*F/Se*Ve,K=k*F/Se*Ve;b.projectionMatrix.makePerspective(Ae,be,Z,K,Ve,Se)}function B(b,w){w===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(w.matrixWorld,b.matrix),b.matrixWorldInverse.getInverse(b.matrixWorld)}this.getCamera=function(b){d.near=u.near=h.near=b.near,d.far=u.far=h.far=b.far,(p!==d.near||y!==d.far)&&(n.updateRenderState({depthNear:d.near,depthFar:d.far}),p=d.near,y=d.far);let w=b.parent,S=d.cameras;B(d,w);for(let T=0;T<S.length;T++)B(S[T],w);b.matrixWorld.copy(d.matrixWorld);let _=b.children;for(let T=0,A=_.length;T<A;T++)_[T].updateMatrixWorld(!0);return S.length===2?L(d,h,u):d.projectionMatrix.copy(h.projectionMatrix),d};let G=null;function O(b,w){if(a=w.getViewerPose(r),a!==null){let _=a.views,T=n.renderState.baseLayer;e.setFramebuffer(T.framebuffer);let A=!1;_.length!==d.cameras.length&&(d.cameras.length=0,A=!0);for(let I=0;I<_.length;I++){let F=_[I],V=T.getViewport(F),k=f[I];k.matrix.fromArray(F.transform.matrix),k.projectionMatrix.fromArray(F.projectionMatrix),k.viewport.set(V.x,V.y,V.width,V.height),I===0&&d.matrix.copy(k.matrix),A===!0&&d.cameras.push(k)}}let S=n.inputSources;for(let _=0;_<l.length;_++){let T=l[_],A=S[_];T.update(A,w,r)}G&&G(b,w)}let x=new ld;x.setAnimationLoop(O),this.setAnimationLoop=function(b){G=b},this.dispose=function(){}}Object.assign(vd.prototype,Fi.prototype);function s0(e){function t(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,E,M,C){g.isMeshBasicMaterial?n(m,g):g.isMeshLambertMaterial?(n(m,g),l(m,g)):g.isMeshToonMaterial?(n(m,g),h(m,g)):g.isMeshPhongMaterial?(n(m,g),c(m,g)):g.isMeshStandardMaterial?(n(m,g,E),g.isMeshPhysicalMaterial?f(m,g,E):u(m,g,E)):g.isMeshMatcapMaterial?(n(m,g),d(m,g)):g.isMeshDepthMaterial?(n(m,g),p(m,g)):g.isMeshDistanceMaterial?(n(m,g),y(m,g)):g.isMeshNormalMaterial?(n(m,g),v(m,g)):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&r(m,g)):g.isPointsMaterial?o(m,g,M,C):g.isSpriteMaterial?a(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(m,g,E){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);let M=g.envMap||E;M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio,m.maxMipLevel.value=e.get(M).__maxMipLevel),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let C;g.map?C=g.map:g.specularMap?C=g.specularMap:g.displacementMap?C=g.displacementMap:g.normalMap?C=g.normalMap:g.bumpMap?C=g.bumpMap:g.roughnessMap?C=g.roughnessMap:g.metalnessMap?C=g.metalnessMap:g.alphaMap?C=g.alphaMap:g.emissiveMap&&(C=g.emissiveMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix));let L;g.aoMap?L=g.aoMap:g.lightMap&&(L=g.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),m.uv2Transform.value.copy(L.matrix))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function r(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,E,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=M*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let C;g.map?C=g.map:g.alphaMap&&(C=g.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let E;g.map?E=g.map:g.alphaMap&&(E=g.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g,E){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),(g.envMap||E)&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,E){u(m,g,E),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===ut&&m.clearcoatNormalScale.value.negate()),m.transparency.value=g.transparency}function d(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function y(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function v(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Ws(e){e=e||{};let t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),i=e.context!==void 0?e.context:null,n=e.alpha!==void 0?e.alpha:!1,s=e.depth!==void 0?e.depth:!0,r=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,l=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,c=e.powerPreference!==void 0?e.powerPreference:"default",h=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1,u=null,f=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Bt,this.physicallyCorrectLights=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let d=this,p=!1,y=null,v=0,m=0,g=null,E=null,M=-1,C=null,L=null,B=new Oe,G=new Oe,O=null,x=t.width,b=t.height,w=1,S=null,_=null,T=new Oe(0,0,x,b),A=new Oe(0,0,x,b),I=!1,F=new eo,V=new Ux,k=!1,j=!1,Y=new ue,le=new P,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return g===null?w:1}let X=i;function Ve(R,W){for(let z=0;z<R.length;z++){let q=R[z],de=t.getContext(q,W);if(de!==null)return de}return null}try{let R={alpha:n,depth:s,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",pt,!1),X===null){let W=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&W.shift(),X=Ve(W,R),X===null)throw Ve(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Se,Ae,be,Z,K,J,fe,he,Le,D,U,ee,Q,H,se,re,Me,te,pe;function Fe(){Se=new Ox(X),Ae=new Bx(X,Se,e),Ae.isWebGL2===!1&&(Se.get("WEBGL_depth_texture"),Se.get("OES_texture_float"),Se.get("OES_texture_half_float"),Se.get("OES_texture_half_float_linear"),Se.get("OES_standard_derivatives"),Se.get("OES_element_index_uint"),Se.get("OES_vertex_array_object"),Se.get("ANGLE_instanced_arrays")),Se.get("OES_texture_float_linear"),te=new n0(X,Se,Ae),be=new t0(X,Se,Ae),be.scissor(G.copy(A).multiplyScalar(w).floor()),be.viewport(B.copy(T).multiplyScalar(w).floor()),Z=new Hx(X),K=new zy,J=new i0(X,Se,be,K,Ae,te,Z),fe=new hg(X,Ae),pe=new Rx(X,Se,fe,Ae),he=new Fx(X,fe,Z,pe),Le=new zx(X,he,fe,Z),se=new Vx(X),D=new Vy(d,Se,Ae,pe),U=new s0(K),ee=new Xy,Q=new Jy,H=new Dx(d,be,Le,a),re=new Ix(X,Se,Z,Ae),Me=new kx(X,Se,Z,Ae),Z.programs=D.programs,d.capabilities=Ae,d.extensions=Se,d.properties=K,d.renderLists=ee,d.state=be,d.info=Z}Fe();let Te=new vd(d,X);this.xr=Te;let ve=new gd(d,Le,Ae.maxTextureSize);this.shadowMap=ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(R){R!==void 0&&(w=R,this.setSize(x,b,!1))},this.getSize=function(R){return R===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),R=new N),R.set(x,b)},this.setSize=function(R,W,z){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}x=R,b=W,t.width=Math.floor(R*w),t.height=Math.floor(W*w),z!==!1&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),R=new N),R.set(x*w,b*w).floor()},this.setDrawingBufferSize=function(R,W,z){x=R,b=W,w=z,t.width=Math.floor(R*z),t.height=Math.floor(W*z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),R=new Oe),R.copy(B)},this.getViewport=function(R){return R.copy(T)},this.setViewport=function(R,W,z,q){R.isVector4?T.set(R.x,R.y,R.z,R.w):T.set(R,W,z,q),be.viewport(B.copy(T).multiplyScalar(w).floor())},this.getScissor=function(R){return R.copy(A)},this.setScissor=function(R,W,z,q){R.isVector4?A.set(R.x,R.y,R.z,R.w):A.set(R,W,z,q),be.scissor(G.copy(A).multiplyScalar(w).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(R){be.setScissorTest(I=R)},this.setOpaqueSort=function(R){S=R},this.setTransparentSort=function(R){_=R},this.getClearColor=function(){return H.getClearColor()},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(R,W,z){let q=0;(R===void 0||R)&&(q|=16384),(W===void 0||W)&&(q|=256),(z===void 0||z)&&(q|=1024),X.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",pt,!1),ee.dispose(),Q.dispose(),K.dispose(),Le.dispose(),pe.dispose(),Te.dispose(),Js.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,Fe()}function Rt(R){let W=R.target;W.removeEventListener("dispose",Rt),up(W)}function up(R){du(R),K.remove(R)}function du(R){let W=K.get(R).program;R.program=void 0,W!==void 0&&D.releaseProgram(W)}function hp(R,W){R.render(function(z){d.renderBufferImmediate(z,W)})}this.renderBufferImmediate=function(R,W){pe.initAttributes();let z=K.get(R);R.hasPositions&&!z.position&&(z.position=X.createBuffer()),R.hasNormals&&!z.normal&&(z.normal=X.createBuffer()),R.hasUvs&&!z.uv&&(z.uv=X.createBuffer()),R.hasColors&&!z.color&&(z.color=X.createBuffer());let q=W.getAttributes();R.hasPositions&&(X.bindBuffer(34962,z.position),X.bufferData(34962,R.positionArray,35048),pe.enableAttribute(q.position),X.vertexAttribPointer(q.position,3,5126,!1,0,0)),R.hasNormals&&(X.bindBuffer(34962,z.normal),X.bufferData(34962,R.normalArray,35048),pe.enableAttribute(q.normal),X.vertexAttribPointer(q.normal,3,5126,!1,0,0)),R.hasUvs&&(X.bindBuffer(34962,z.uv),X.bufferData(34962,R.uvArray,35048),pe.enableAttribute(q.uv),X.vertexAttribPointer(q.uv,2,5126,!1,0,0)),R.hasColors&&(X.bindBuffer(34962,z.color),X.bufferData(34962,R.colorArray,35048),pe.enableAttribute(q.color),X.vertexAttribPointer(q.color,3,5126,!1,0,0)),pe.disableUnusedAttributes(),X.drawArrays(4,0,R.count),R.count=0},this.renderBufferDirect=function(R,W,z,q,de,He){W===null&&(W=Be);let Ue=de.isMesh&&de.matrixWorld.determinant()<0,we=gu(R,W,q,de);be.setMaterial(q,Ue);let rt=z.index,$e=z.attributes.position;if(rt===null){if($e===void 0||$e.count===0)return}else if(rt.count===0)return;let Ke=1;q.wireframe===!0&&(rt=he.getWireframeAttribute(z),Ke=2),(q.morphTargets||q.morphNormals)&&se.update(de,z,q,we),pe.setup(de,q,we,z,rt);let lt,De=re;rt!==null&&(lt=fe.get(rt),De=Me,De.setIndex(lt));let ot=rt!==null?rt.count:$e.count,vt=z.drawRange.start*Ke,qe=z.drawRange.count*Ke,wo=He!==null?He.start*Ke:0,ei=He!==null?He.count*Ke:1/0,Vi=Math.max(vt,wo),nl=Math.min(ot,vt+qe,wo+ei)-1,_o=Math.max(0,nl-Vi+1);if(_o!==0){if(de.isMesh)q.wireframe===!0?(be.setLineWidth(q.wireframeLinewidth*ge()),De.setMode(1)):De.setMode(4);else if(de.isLine){let $s=q.linewidth;$s===void 0&&($s=1),be.setLineWidth($s*ge()),de.isLineSegments?De.setMode(1):de.isLineLoop?De.setMode(2):De.setMode(3)}else de.isPoints?De.setMode(0):de.isSprite&&De.setMode(4);if(de.isInstancedMesh)De.renderInstances(z,Vi,_o,de.count);else if(z.isInstancedBufferGeometry){let $s=Math.min(z.instanceCount,z._maxInstanceCount);De.renderInstances(z,Vi,_o,$s)}else De.render(Vi,_o)}},this.compile=function(R,W){f=Q.get(R,W),f.init(),R.traverse(function(q){q.isLight&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights(W);let z=new WeakMap;R.traverse(function(q){let de=q.material;if(de)if(Array.isArray(de))for(let He=0;He<de.length;He++){let Ue=de[He];z.has(Ue)===!1&&(Si(Ue,R,q),z.set(Ue))}else z.has(de)===!1&&(Si(de,R,q),z.set(de))})};let il=null;function dp(R){Te.isPresenting||il&&il(R)}let Js=new ld;Js.setAnimationLoop(dp),typeof window<"u"&&Js.setContext(window),this.setAnimationLoop=function(R){il=R,Te.setAnimationLoop(R),R===null?Js.stop():Js.start()},this.render=function(R,W){let z,q;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),z=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),q=arguments[3]),W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;pe.resetDefaultState(),M=-1,C=null,R.autoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(W=Te.getCamera(W)),R.isScene===!0&&R.onBeforeRender(d,R,W,z||g),f=Q.get(R,W),f.init(),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(Y),j=this.localClippingEnabled,k=V.init(this.clippingPlanes,j,W),u=ee.get(R,W),u.init(),fu(R,W,0,d.sortObjects),u.finish(),d.sortObjects===!0&&u.sort(S,_),k===!0&&V.beginShadows();let de=f.state.shadowsArray;ve.render(de,R,W),f.setupLights(W),k===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),z!==void 0&&this.setRenderTarget(z),H.render(u,R,W,q);let He=u.opaque,Ue=u.transparent;He.length>0&&pu(He,R,W),Ue.length>0&&pu(Ue,R,W),R.isScene===!0&&R.onAfterRender(d,R,W),g!==null&&(J.updateRenderTargetMipmap(g),J.updateMultisampleRenderTarget(g)),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1),u=null,f=null};function fu(R,W,z,q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){q&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Y);let Ue=Le.update(R),we=R.material;we.visible&&u.push(R,Ue,we,z,le.z,null)}}else if(R.isImmediateRenderObject)q&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Y),u.push(R,null,R.material,z,le.z,null);else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Z.render.frame&&(R.skeleton.update(),R.skeleton.frame=Z.render.frame),!R.frustumCulled||F.intersectsObject(R))){q&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Y);let Ue=Le.update(R),we=R.material;if(Array.isArray(we)){let rt=Ue.groups;for(let $e=0,Ke=rt.length;$e<Ke;$e++){let lt=rt[$e],De=we[lt.materialIndex];De&&De.visible&&u.push(R,Ue,De,z,le.z,lt)}}else we.visible&&u.push(R,Ue,we,z,le.z,null)}}let He=R.children;for(let Ue=0,we=He.length;Ue<we;Ue++)fu(He[Ue],W,z,q)}function pu(R,W,z){let q=W.isScene===!0?W.overrideMaterial:null;for(let de=0,He=R.length;de<He;de++){let Ue=R[de],we=Ue.object,rt=Ue.geometry,$e=q===null?Ue.material:q,Ke=Ue.group;if(z.isArrayCamera){L=z;let lt=z.cameras;for(let De=0,ot=lt.length;De<ot;De++){let vt=lt[De];we.layers.test(vt.layers)&&(be.viewport(B.copy(vt.viewport)),f.setupLights(vt),mu(we,W,vt,rt,$e,Ke))}}else L=null,mu(we,W,z,rt,$e,Ke)}}function mu(R,W,z,q,de,He){if(R.onBeforeRender(d,W,z,q,de,He),f=Q.get(W,L||z),R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),R.isImmediateRenderObject){let Ue=gu(z,W,de,R);be.setMaterial(de),pe.reset(),hp(R,Ue)}else d.renderBufferDirect(z,W,q,de,R,He);R.onAfterRender(d,W,z,q,de,He),f=Q.get(W,L||z)}function Si(R,W,z){W.isScene!==!0&&(W=Be);let q=K.get(R),de=f.state.lights,He=f.state.shadowsArray,Ue=de.state.version,we=D.getParameters(R,de.state,He,W,V.numPlanes,V.numIntersection,z),rt=D.getProgramCacheKey(we),$e=q.program,Ke=!0;if($e===void 0)R.addEventListener("dispose",Rt);else if($e.cacheKey!==rt)du(R);else if(q.lightsStateVersion!==Ue)q.lightsStateVersion=Ue,Ke=!1;else{if(we.shaderID!==void 0)return;Ke=!1}Ke&&($e=D.acquireProgram(we,rt),q.program=$e,q.uniforms=we.uniforms,q.outputEncoding=we.outputEncoding,R.program=$e);let lt=$e.getAttributes();if(R.morphTargets){R.numSupportedMorphTargets=0;for(let qe=0;qe<d.maxMorphTargets;qe++)lt["morphTarget"+qe]>=0&&R.numSupportedMorphTargets++}if(R.morphNormals){R.numSupportedMorphNormals=0;for(let qe=0;qe<d.maxMorphNormals;qe++)lt["morphNormal"+qe]>=0&&R.numSupportedMorphNormals++}let De=q.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(q.numClippingPlanes=V.numPlanes,q.numIntersection=V.numIntersection,De.clippingPlanes=V.uniform),q.environment=R.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.needsLights=pp(R),q.lightsStateVersion=Ue,q.needsLights&&(De.ambientLightColor.value=de.state.ambient,De.lightProbe.value=de.state.probe,De.directionalLights.value=de.state.directional,De.directionalLightShadows.value=de.state.directionalShadow,De.spotLights.value=de.state.spot,De.spotLightShadows.value=de.state.spotShadow,De.rectAreaLights.value=de.state.rectArea,De.pointLights.value=de.state.point,De.pointLightShadows.value=de.state.pointShadow,De.hemisphereLights.value=de.state.hemi,De.directionalShadowMap.value=de.state.directionalShadowMap,De.directionalShadowMatrix.value=de.state.directionalShadowMatrix,De.spotShadowMap.value=de.state.spotShadowMap,De.spotShadowMatrix.value=de.state.spotShadowMatrix,De.pointShadowMap.value=de.state.pointShadowMap,De.pointShadowMatrix.value=de.state.pointShadowMatrix);let ot=q.program.getUniforms(),vt=$i.seqWithValue(ot.seq,De);q.uniformsList=vt}function gu(R,W,z,q){W.isScene!==!0&&(W=Be),J.resetTextureUnits();let de=W.fog,He=z.isMeshStandardMaterial?W.environment:null,Ue=g===null?d.outputEncoding:g.texture.encoding,we=K.get(z),rt=f.state.lights;if(k===!0&&(j===!0||R!==C)){let qe=R===C&&z.id===M;V.setState(z.clippingPlanes,z.clipIntersection,z.clipShadows,R,we,qe)}z.version===we.__version?(we.program===void 0||z.fog&&we.fog!==de||we.environment!==He||we.needsLights&&we.lightsStateVersion!==rt.state.version||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==V.numPlanes||we.numIntersection!==V.numIntersection)||we.outputEncoding!==Ue)&&Si(z,W,q):(Si(z,W,q),we.__version=z.version);let $e=!1,Ke=!1,lt=!1,De=we.program,ot=De.getUniforms(),vt=we.uniforms;if(be.useProgram(De.program)&&($e=!0,Ke=!0,lt=!0),z.id!==M&&(M=z.id,Ke=!0),$e||C!==R){if(ot.setValue(X,"projectionMatrix",R.projectionMatrix),Ae.logarithmicDepthBuffer&&ot.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),C!==R&&(C=R,Ke=!0,lt=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let qe=ot.map.cameraPosition;qe!==void 0&&qe.setValue(X,le.setFromMatrixPosition(R.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||z.skinning)&&ot.setValue(X,"viewMatrix",R.matrixWorldInverse)}if(z.skinning){ot.setOptional(X,q,"bindMatrix"),ot.setOptional(X,q,"bindMatrixInverse");let qe=q.skeleton;if(qe){let wo=qe.bones;if(Ae.floatVertexTextures){if(qe.boneTexture===void 0){let ei=Math.sqrt(wo.length*4);ei=xe.ceilPowerOfTwo(ei),ei=Math.max(ei,4);let Vi=new Float32Array(ei*ei*4);Vi.set(qe.boneMatrices);let nl=new bs(Vi,ei,ei,Ye,Wt);qe.boneMatrices=Vi,qe.boneTexture=nl,qe.boneTextureSize=ei}ot.setValue(X,"boneTexture",qe.boneTexture,J),ot.setValue(X,"boneTextureSize",qe.boneTextureSize)}else ot.setOptional(X,qe,"boneMatrices")}}return(Ke||we.receiveShadow!==q.receiveShadow)&&(we.receiveShadow=q.receiveShadow,ot.setValue(X,"receiveShadow",q.receiveShadow)),Ke&&(ot.setValue(X,"toneMappingExposure",d.toneMappingExposure),we.needsLights&&fp(vt,lt),de&&z.fog&&U.refreshFogUniforms(vt,de),U.refreshMaterialUniforms(vt,z,He,w,b),vt.ltc_1!==void 0&&(vt.ltc_1.value=ce.LTC_1),vt.ltc_2!==void 0&&(vt.ltc_2.value=ce.LTC_2),$i.upload(X,we.uniformsList,vt,J)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($i.upload(X,we.uniformsList,vt,J),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(X,"center",q.center),ot.setValue(X,"modelViewMatrix",q.modelViewMatrix),ot.setValue(X,"normalMatrix",q.normalMatrix),ot.setValue(X,"modelMatrix",q.matrixWorld),De}function fp(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function pp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.setFramebuffer=function(R){y!==R&&g===null&&X.bindFramebuffer(36160,R),y=R},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return g},this.setRenderTarget=function(R,W,z){g=R,v=W,m=z,R&&K.get(R).__webglFramebuffer===void 0&&J.setupRenderTarget(R);let q=y,de=!1;if(R){let He=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(q=He[W||0],de=!0):R.isWebGLMultisampleRenderTarget?q=K.get(R).__webglMultisampledFramebuffer:q=He,B.copy(R.viewport),G.copy(R.scissor),O=R.scissorTest}else B.copy(T).multiplyScalar(w).floor(),G.copy(A).multiplyScalar(w).floor(),O=I;if(E!==q&&(X.bindFramebuffer(36160,q),E=q),be.viewport(B),be.scissor(G),be.setScissorTest(O),de){let He=K.get(R.texture);X.framebufferTexture2D(36160,36064,34069+(W||0),He.__webglTexture,z||0)}},this.readRenderTargetPixels=function(R,W,z,q,de,He,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(we=we[Ue]),we){let rt=!1;we!==E&&(X.bindFramebuffer(36160,we),rt=!0);try{let $e=R.texture,Ke=$e.format,lt=$e.type;if(Ke!==Ye&&te.convert(Ke)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt!==Jr&&te.convert(lt)!==X.getParameter(35738)&&!(lt===Wt&&(Ae.isWebGL2||Se.get("OES_texture_float")||Se.get("WEBGL_color_buffer_float")))&&!(lt===nn&&(Ae.isWebGL2?Se.get("EXT_color_buffer_float"):Se.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X.checkFramebufferStatus(36160)===36053?W>=0&&W<=R.width-q&&z>=0&&z<=R.height-de&&X.readPixels(W,z,q,de,te.convert(Ke),te.convert(lt),He):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{rt&&X.bindFramebuffer(36160,E)}}},this.copyFramebufferToTexture=function(R,W,z){z===void 0&&(z=0);let q=Math.pow(2,-z),de=Math.floor(W.image.width*q),He=Math.floor(W.image.height*q),Ue=te.convert(W.format);J.setTexture2D(W,0),X.copyTexImage2D(3553,z,Ue,R.x,R.y,de,He,0),be.unbindTexture()},this.copyTextureToTexture=function(R,W,z,q){q===void 0&&(q=0);let de=W.image.width,He=W.image.height,Ue=te.convert(z.format),we=te.convert(z.type);J.setTexture2D(z,0),X.pixelStorei(37440,z.flipY),X.pixelStorei(37441,z.premultiplyAlpha),X.pixelStorei(3317,z.unpackAlignment),W.isDataTexture?X.texSubImage2D(3553,q,R.x,R.y,de,He,Ue,we,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(3553,q,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Ue,W.mipmaps[0].data):X.texSubImage2D(3553,q,R.x,R.y,Ue,we,W.image),q===0&&z.generateMipmaps&&X.generateMipmap(3553),be.unbindTexture()},this.initTexture=function(R){J.setTexture2D(R,0),be.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function nh(e){Ws.call(this,e)}nh.prototype=Object.assign(Object.create(Ws.prototype),{constructor:nh,isWebGL1Renderer:!0});function Sr(e,t){this.name="",this.color=new $(e),this.density=t!==void 0?t:25e-5}Object.assign(Sr.prototype,{isFogExp2:!0,clone:function(){return new Sr(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function Yl(e,t,i){this.name="",this.color=new $(e),this.near=t!==void 0?t:1,this.far=i!==void 0?i:1e3}Object.assign(Yl.prototype,{isFog:!0,clone:function(){return new Yl(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function jt(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xe.generateUUID()}Object.defineProperty(jt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(jt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new jt(t,this.stride);return i.setUsage(this.usage),i},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var bn=new P;function Dn(e,t,i,n){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}Object.defineProperties(Dn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Dn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,i=this.data.count;t<i;t++)bn.x=this.getX(t),bn.y=this.getY(t),bn.z=this.getZ(t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this},setXYZ:function(e,t,i,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this},setXYZW:function(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new _e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Rn(e){Ee.call(this),this.type="SpriteMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Rn.prototype=Object.create(Ee.prototype);Rn.prototype.constructor=Rn;Rn.prototype.isSpriteMaterial=!0;Rn.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};var es,rr=new P,ts=new P,is=new P,ns=new N,or=new N,xd=new ue,ko=new P,ar=new P,Ho=new P,sh=new N,Pl=new N,rh=new N;function Ql(e){if(ne.call(this),this.type="Sprite",es===void 0){es=new ae;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jt(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Dn(i,3,0,!1)),es.setAttribute("uv",new Dn(i,2,3,!1))}this.geometry=es,this.material=e!==void 0?e:new Rn,this.center=new N(.5,.5)}Ql.prototype=Object.assign(Object.create(ne.prototype),{constructor:Ql,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),xd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-is.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let r=this.center;Go(ko.set(-.5,-.5,0),is,r,ts,n,s),Go(ar.set(.5,-.5,0),is,r,ts,n,s),Go(Ho.set(.5,.5,0),is,r,ts,n,s),sh.set(0,0),Pl.set(1,0),rh.set(1,1);let o=e.ray.intersectTriangle(ko,ar,Ho,!1,rr);if(o===null&&(Go(ar.set(-.5,.5,0),is,r,ts,n,s),Pl.set(0,1),o=e.ray.intersectTriangle(ko,Ho,ar,!1,rr),o===null))return;let a=e.ray.origin.distanceTo(rr);a<e.near||a>e.far||t.push({distance:a,point:rr.clone(),uv:Mt.getUV(rr,ko,ar,Ho,sh,Pl,rh,new N),face:null,object:this})},copy:function(e){return ne.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Go(e,t,i,n,s,r){ns.subVectors(e,i).addScalar(.5).multiply(n),s!==void 0?(or.x=r*ns.x-s*ns.y,or.y=s*ns.x+r*ns.y):or.copy(ns),e.copy(t),e.x+=or.x,e.y+=or.y,e.applyMatrix4(xd)}var No=new P,oh=new P;function ma(){ne.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}ma.prototype=Object.assign(Object.create(ne.prototype),{constructor:ma,isLOD:!0,copy:function(e){ne.prototype.copy.call(this,e,!1);let t=e.levels;for(let i=0,n=t.length;i<n;i++){let s=t[i];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);let i=this.levels,n;for(n=0;n<i.length&&!(t<i[n].distance);n++);return i.splice(n,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){let t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n&&!(e<t[i].distance);i++);return t[i-1].object}return null},raycast:function(e,t){if(this.levels.length>0){No.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo(No);this.getObjectForDistance(n).raycast(e,t)}},update:function(e){let t=this.levels;if(t.length>1){No.setFromMatrixPosition(e.matrixWorld),oh.setFromMatrixPosition(this.matrixWorld);let i=No.distanceTo(oh)/e.zoom;t[0].object.visible=!0;let n,s;for(n=1,s=t.length;n<s&&i>=t[n].distance;n++)t[n-1].object.visible=!1,t[n].object.visible=!0;for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}},toJSON:function(e){let t=ne.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let n=0,s=i.length;n<s;n++){let r=i[n];t.object.levels.push({object:r.object.uuid,distance:r.distance})}return t}});function Er(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Ge.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}Er.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Er,isSkinnedMesh:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let e=new Oe,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){Ge.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let e=new P,t=new Oe,i=new Oe,n=new P,s=new ue;return function(r,o){let a=this.skeleton,l=this.geometry;t.fromBufferAttribute(l.attributes.skinIndex,r),i.fromBufferAttribute(l.attributes.skinWeight,r),e.fromBufferAttribute(l.attributes.position,r).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let c=0;c<4;c++){let h=i.getComponent(c);if(h!==0){let u=t.getComponent(c);s.multiplyMatrices(a.bones[u].matrixWorld,a.boneInverses[u]),o.addScaledVector(n.copy(e).applyMatrix4(s),h)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});var ah=new ue,r0=new ue;function Tr(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new ue)}}Object.assign(Tr.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){let i=new ue;this.bones[e]&&i.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(i)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.getInverse(i.parent.matrixWorld),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}},update:function(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:r0;ah.multiplyMatrices(o,t[s]),ah.toArray(i,s*16)}n!==void 0&&(n.needsUpdate=!0)},clone:function(){return new Tr(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Cr(){ne.call(this),this.type="Bone"}Cr.prototype=Object.assign(Object.create(ne.prototype),{constructor:Cr,isBone:!0});var lh=new ue,ch=new ue,Vo=[],lr=new Ge;function ws(e,t,i){Ge.call(this,e,t),this.instanceMatrix=new _e(new Float32Array(i*16),16),this.count=i,this.frustumCulled=!1}ws.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ws,isInstancedMesh:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){let i=this.matrixWorld,n=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,lh),ch.multiplyMatrices(i,lh),lr.matrixWorld=ch,lr.raycast(e,Vo);for(let r=0,o=Vo.length;r<o;r++){let a=Vo[r];a.instanceId=s,a.object=this,t.push(a)}Vo.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function st(e){Ee.call(this),this.type="LineBasicMaterial",this.color=new $(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}st.prototype=Object.create(Ee.prototype);st.prototype.constructor=st;st.prototype.isLineBasicMaterial=!0;st.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};var uh=new P,hh=new P,dh=new ue,zo=new Ns,Wo=new ki;function Ut(e,t,i){i===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),ne.call(this),this.type="Line",this.geometry=e!==void 0?e:new ae,this.material=t!==void 0?t:new st,this.updateMorphTargets()}Ut.prototype=Object.assign(Object.create(ne.prototype),{constructor:Ut,isLine:!0,copy:function(e){return ne.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)uh.fromBufferAttribute(t,n-1),hh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=uh.distanceTo(hh);e.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){let t=e.vertices,i=e.lineDistances;i[0]=0;for(let n=1,s=t.length;n<s;n++)i[n]=i[n-1],i[n]+=t[n-1].distanceTo(t[n])}return this},raycast:function(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(n),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;dh.getInverse(n),zo.copy(e.ray).applyMatrix4(dh);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=r*r,a=new P,l=new P,c=new P,h=new P,u=this&&this.isLineSegments?2:1;if(i.isBufferGeometry){let f=i.index,p=i.attributes.position.array;if(f!==null){let y=f.array;for(let v=0,m=y.length-1;v<m;v+=u){let g=y[v],E=y[v+1];if(a.fromArray(p,g*3),l.fromArray(p,E*3),zo.distanceSqToSegment(a,l,h,c)>o)continue;h.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:c.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=p.length/3-1;y<v;y+=u){if(a.fromArray(p,3*y),l.fromArray(p,3*y+3),zo.distanceSqToSegment(a,l,h,c)>o)continue;h.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(h);g<e.near||g>e.far||t.push({distance:g,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(i.isGeometry){let f=i.vertices,d=f.length;for(let p=0;p<d-1;p+=u){if(zo.distanceSqToSegment(f[p],f[p+1],h,c)>o)continue;h.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:c.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var jo=new P,Xo=new P;function gt(e,t){Ut.call(this,e,t),this.type="LineSegments"}gt.prototype=Object.assign(Object.create(Ut.prototype),{constructor:gt,isLineSegments:!0,computeLineDistances:function(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)jo.fromBufferAttribute(t,n),Xo.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jo.distanceTo(Xo);e.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){let t=e.vertices,i=e.lineDistances;for(let n=0,s=t.length;n<s;n+=2)jo.copy(t[n]),Xo.copy(t[n+1]),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jo.distanceTo(Xo)}return this}});function Zl(e,t){Ut.call(this,e,t),this.type="LineLoop"}Zl.prototype=Object.assign(Object.create(Ut.prototype),{constructor:Zl,isLineLoop:!0});function In(e){Ee.call(this),this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}In.prototype=Object.create(Ee.prototype);In.prototype.constructor=In;In.prototype.isPointsMaterial=!0;In.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};var fh=new ue,Kl=new Ns,qo=new ki,Yo=new P;function Pr(e,t){ne.call(this),this.type="Points",this.geometry=e!==void 0?e:new ae,this.material=t!==void 0?t:new In,this.updateMorphTargets()}Pr.prototype=Object.assign(Object.create(ne.prototype),{constructor:Pr,isPoints:!0,copy:function(e){return ne.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(n),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;fh.getInverse(n),Kl.copy(e.ray).applyMatrix4(fh);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=r*r;if(i.isBufferGeometry){let a=i.index,c=i.attributes.position.array;if(a!==null){let h=a.array;for(let u=0,f=h.length;u<f;u++){let d=h[u];Yo.fromArray(c,d*3),Al(Yo,d,o,n,e,t,this)}}else for(let h=0,u=c.length/3;h<u;h++)Yo.fromArray(c,h*3),Al(Yo,h,o,n,e,t,this)}else{let a=i.vertices;for(let l=0,c=a.length;l<c;l++)Al(a[l],l,o,n,e,t,this)}},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Al(e,t,i,n,s,r,o){let a=Kl.distanceSqToPoint(e);if(a<i){let l=new P;Kl.closestPointToPoint(e,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}function ga(e,t,i,n,s,r,o,a,l){ze.call(this,e,t,i,n,s,r,o,a,l),this.format=o!==void 0?o:gi,this.minFilter=r!==void 0?r:ke,this.magFilter=s!==void 0?s:ke,this.generateMipmaps=!1}ga.prototype=Object.assign(Object.create(ze.prototype),{constructor:ga,isVideoTexture:!0,update:function(){let e=this.image;e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Ar(e,t,i,n,s,r,o,a,l,c,h,u){ze.call(this,null,r,o,a,l,c,n,s,h,u),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Ar.prototype=Object.create(ze.prototype);Ar.prototype.constructor=Ar;Ar.prototype.isCompressedTexture=!0;function _s(e,t,i,n,s,r,o,a,l){ze.call(this,e,t,i,n,s,r,o,a,l),this.needsUpdate=!0}_s.prototype=Object.create(ze.prototype);_s.prototype.constructor=_s;_s.prototype.isCanvasTexture=!0;function an(e,t,i,n,s,r,o,a,l,c){if(c=c!==void 0?c:Xt,c!==Xt&&c!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xt&&(i=gs),i===void 0&&c===xr&&(i=fr),ze.call(this,null,n,s,r,o,a,c,i,l),this.image={width:e,height:t},this.magFilter=o!==void 0?o:it,this.minFilter=a!==void 0?a:it,this.flipY=!1,this.generateMipmaps=!1}an.prototype=Object.create(ze.prototype);an.prototype.constructor=an;an.prototype.isDepthTexture=!0;function va(e){ae.call(this),this.type="WireframeGeometry";let t=[],i=[0,0],n={},s=["a","b","c"];if(e&&e.isGeometry){let r=e.faces;for(let o=0,a=r.length;o<a;o++){let l=r[o];for(let c=0;c<3;c++){let h=l[s[c]],u=l[s[(c+1)%3]];i[0]=Math.min(h,u),i[1]=Math.max(h,u);let f=i[0]+","+i[1];n[f]===void 0&&(n[f]={index1:i[0],index2:i[1]})}}for(let o in n){let a=n[o],l=e.vertices[a.index1];t.push(l.x,l.y,l.z),l=e.vertices[a.index2],t.push(l.x,l.y,l.z)}}else if(e&&e.isBufferGeometry){let r=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let p=f,y=f+d;p<y;p+=3)for(let v=0;v<3;v++){let m=a.getX(p+v),g=a.getX(p+(v+1)%3);i[0]=Math.min(m,g),i[1]=Math.max(m,g);let E=i[0]+","+i[1];n[E]===void 0&&(n[E]={index1:i[0],index2:i[1]})}}for(let c in n){let h=n[c];r.fromBufferAttribute(o,h.index1),t.push(r.x,r.y,r.z),r.fromBufferAttribute(o,h.index2),t.push(r.x,r.y,r.z)}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c;r.fromBufferAttribute(o,h),t.push(r.x,r.y,r.z);let u=3*a+(c+1)%3;r.fromBufferAttribute(o,u),t.push(r.x,r.y,r.z)}}}this.setAttribute("position",new ie(t,3))}va.prototype=Object.create(ae.prototype);va.prototype.constructor=va;function xa(e,t,i){Pe.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:i},this.fromBufferGeometry(new Lr(e,t,i)),this.mergeVertices()}xa.prototype=Object.create(Pe.prototype);xa.prototype.constructor=xa;function Lr(e,t,i){ae.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:i};let n=[],s=[],r=[],o=[],a=1e-5,l=new P,c=new P,h=new P,u=new P,f=new P;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let d=t+1;for(let p=0;p<=i;p++){let y=p/i;for(let v=0;v<=t;v++){let m=v/t;e(m,y,c),s.push(c.x,c.y,c.z),m-a>=0?(e(m-a,y,h),u.subVectors(c,h)):(e(m+a,y,h),u.subVectors(h,c)),y-a>=0?(e(m,y-a,h),f.subVectors(c,h)):(e(m,y+a,h),f.subVectors(h,c)),l.crossVectors(u,f).normalize(),r.push(l.x,l.y,l.z),o.push(m,y)}}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let v=p*d+y,m=p*d+y+1,g=(p+1)*d+y+1,E=(p+1)*d+y;n.push(v,m,E),n.push(m,g,E)}this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2))}Lr.prototype=Object.create(ae.prototype);Lr.prototype.constructor=Lr;function ya(e,t,i,n){Pe.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n},this.fromBufferGeometry(new Gt(e,t,i,n)),this.mergeVertices()}ya.prototype=Object.create(Pe.prototype);ya.prototype.constructor=ya;function Gt(e,t,i,n){ae.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n},i=i||1,n=n||0;let s=[],r=[];o(n),l(i),c(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let g=new P,E=new P,M=new P;for(let C=0;C<t.length;C+=3)f(t[C+0],g),f(t[C+1],E),f(t[C+2],M),a(g,E,M,m)}function a(m,g,E,M){let C=Math.pow(2,M),L=[];for(let B=0;B<=C;B++){L[B]=[];let G=m.clone().lerp(E,B/C),O=g.clone().lerp(E,B/C),x=C-B;for(let b=0;b<=x;b++)b===0&&B===C?L[B][b]=G:L[B][b]=G.clone().lerp(O,b/x)}for(let B=0;B<C;B++)for(let G=0;G<2*(C-B)-1;G++){let O=Math.floor(G/2);G%2===0?(u(L[B][O+1]),u(L[B+1][O]),u(L[B][O])):(u(L[B][O+1]),u(L[B+1][O+1]),u(L[B+1][O]))}}function l(m){let g=new P;for(let E=0;E<s.length;E+=3)g.x=s[E+0],g.y=s[E+1],g.z=s[E+2],g.normalize().multiplyScalar(m),s[E+0]=g.x,s[E+1]=g.y,s[E+2]=g.z}function c(){let m=new P;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];let E=y(m)/2/Math.PI+.5,M=v(m)/Math.PI+.5;r.push(E,1-M)}d(),h()}function h(){for(let m=0;m<r.length;m+=6){let g=r[m+0],E=r[m+2],M=r[m+4],C=Math.max(g,E,M),L=Math.min(g,E,M);C>.9&&L<.1&&(g<.2&&(r[m+0]+=1),E<.2&&(r[m+2]+=1),M<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function f(m,g){let E=m*3;g.x=e[E+0],g.y=e[E+1],g.z=e[E+2]}function d(){let m=new P,g=new P,E=new P,M=new P,C=new N,L=new N,B=new N;for(let G=0,O=0;G<s.length;G+=9,O+=6){m.set(s[G+0],s[G+1],s[G+2]),g.set(s[G+3],s[G+4],s[G+5]),E.set(s[G+6],s[G+7],s[G+8]),C.set(r[O+0],r[O+1]),L.set(r[O+2],r[O+3]),B.set(r[O+4],r[O+5]),M.copy(m).add(g).add(E).divideScalar(3);let x=y(M);p(C,O+0,m,x),p(L,O+2,g,x),p(B,O+4,E,x)}}function p(m,g,E,M){M<0&&m.x===1&&(r[g]=m.x-1),E.x===0&&E.z===0&&(r[g]=M/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function v(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}Gt.prototype=Object.create(ae.prototype);Gt.prototype.constructor=Gt;function ba(e,t){Pe.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Dr(e,t)),this.mergeVertices()}ba.prototype=Object.create(Pe.prototype);ba.prototype.constructor=ba;function Dr(e,t){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];Gt.call(this,i,n,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}Dr.prototype=Object.create(Gt.prototype);Dr.prototype.constructor=Dr;function wa(e,t){Pe.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ms(e,t)),this.mergeVertices()}wa.prototype=Object.create(Pe.prototype);wa.prototype.constructor=wa;function Ms(e,t){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Gt.call(this,i,n,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ms.prototype=Object.create(Gt.prototype);Ms.prototype.constructor=Ms;function _a(e,t){Pe.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Rr(e,t)),this.mergeVertices()}_a.prototype=Object.create(Pe.prototype);_a.prototype.constructor=_a;function Rr(e,t){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Gt.call(this,n,s,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}Rr.prototype=Object.create(Gt.prototype);Rr.prototype.constructor=Rr;function Ma(e,t){Pe.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ir(e,t)),this.mergeVertices()}Ma.prototype=Object.create(Pe.prototype);Ma.prototype.constructor=Ma;function Ir(e,t){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Gt.call(this,s,r,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ir.prototype=Object.create(Gt.prototype);Ir.prototype.constructor=Ir;function Sa(e,t,i,n,s,r){Pe.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s},r!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");let o=new Ss(e,t,i,n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals,this.fromBufferGeometry(o),this.mergeVertices()}Sa.prototype=Object.create(Pe.prototype);Sa.prototype.constructor=Sa;function Ss(e,t,i,n,s){ae.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s},t=t||64,i=i||1,n=n||8,s=s||!1;let r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new P,a=new P,l=new N,c=new P,h=[],u=[],f=[],d=[];p(),this.setIndex(d),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function p(){for(let g=0;g<t;g++)y(g);y(s===!1?t:0),m(),v()}function y(g){c=e.getPointAt(g/t,c);let E=r.normals[g],M=r.binormals[g];for(let C=0;C<=n;C++){let L=C/n*Math.PI*2,B=Math.sin(L),G=-Math.cos(L);a.x=G*E.x+B*M.x,a.y=G*E.y+B*M.y,a.z=G*E.z+B*M.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function v(){for(let g=1;g<=t;g++)for(let E=1;E<=n;E++){let M=(n+1)*(g-1)+(E-1),C=(n+1)*g+(E-1),L=(n+1)*g+E,B=(n+1)*(g-1)+E;d.push(M,C,B),d.push(C,L,B)}}function m(){for(let g=0;g<=t;g++)for(let E=0;E<=n;E++)l.x=g/t,l.y=E/n,f.push(l.x,l.y)}}Ss.prototype=Object.create(ae.prototype);Ss.prototype.constructor=Ss;Ss.prototype.toJSON=function(){let e=ae.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e};function Ea(e,t,i,n,s,r,o){Pe.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:r},o!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Br(e,t,i,n,s,r)),this.mergeVertices()}Ea.prototype=Object.create(Pe.prototype);Ea.prototype.constructor=Ea;function Br(e,t,i,n,s,r){ae.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:r},e=e||1,t=t||.4,i=Math.floor(i)||64,n=Math.floor(n)||8,s=s||2,r=r||3;let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P,d=new P,p=new P,y=new P,v=new P;for(let g=0;g<=i;++g){let E=g/i*s*Math.PI*2;m(E,s,r,e,f),m(E+.01,s,r,e,d),y.subVectors(d,f),v.addVectors(d,f),p.crossVectors(y,v),v.crossVectors(p,y),p.normalize(),v.normalize();for(let M=0;M<=n;++M){let C=M/n*Math.PI*2,L=-t*Math.cos(C),B=t*Math.sin(C);h.x=f.x+(L*v.x+B*p.x),h.y=f.y+(L*v.y+B*p.y),h.z=f.z+(L*v.z+B*p.z),a.push(h.x,h.y,h.z),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(M/n)}}for(let g=1;g<=i;g++)for(let E=1;E<=n;E++){let M=(n+1)*(g-1)+(E-1),C=(n+1)*g+(E-1),L=(n+1)*g+E,B=(n+1)*(g-1)+E;o.push(M,C,B),o.push(C,L,B)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2));function m(g,E,M,C,L){let B=Math.cos(g),G=Math.sin(g),O=M/E*g,x=Math.cos(O);L.x=C*(2+x)*.5*B,L.y=C*(2+x)*G*.5,L.z=C*Math.sin(O)*.5}}Br.prototype=Object.create(ae.prototype);Br.prototype.constructor=Br;function Ta(e,t,i,n,s){Pe.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},this.fromBufferGeometry(new Ur(e,t,i,n,s)),this.mergeVertices()}Ta.prototype=Object.create(Pe.prototype);Ta.prototype.constructor=Ta;function Ur(e,t,i,n,s){ae.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},e=e||1,t=t||.4,i=Math.floor(i)||8,n=Math.floor(n)||6,s=s||Math.PI*2;let r=[],o=[],a=[],l=[],c=new P,h=new P,u=new P;for(let f=0;f<=i;f++)for(let d=0;d<=n;d++){let p=d/n*s,y=f/i*Math.PI*2;h.x=(e+t*Math.cos(y))*Math.cos(p),h.y=(e+t*Math.cos(y))*Math.sin(p),h.z=t*Math.sin(y),o.push(h.x,h.y,h.z),c.x=e*Math.cos(p),c.y=e*Math.sin(p),u.subVectors(h,c).normalize(),a.push(u.x,u.y,u.z),l.push(d/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let d=1;d<=n;d++){let p=(n+1)*f+d-1,y=(n+1)*(f-1)+d-1,v=(n+1)*(f-1)+d,m=(n+1)*f+d;r.push(p,y,m),r.push(y,v,m)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}Ur.prototype=Object.create(ae.prototype);Ur.prototype.constructor=Ur;var o0={triangulate:function(e,t,i){i=i||2;let n=t&&t.length,s=n?t[0]*i:e.length,r=yd(e,0,s,i,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=h0(e,t,r,i)),e.length>80*i){a=c=e[0],l=h=e[1];for(let p=i;p<s;p+=i)u=e[p],f=e[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?1/d:0}return Or(r,o,i,a,l,d),o}};function yd(e,t,i,n,s){let r,o;if(s===_0(e,t,i,n)>0)for(r=t;r<i;r+=n)o=ph(r,e[r],e[r+1],o);else for(r=i-n;r>=t;r-=n)o=ph(r,e[r],e[r+1],o);return o&&Xa(o,o.next)&&(kr(o),o=o.next),o}function ln(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(Xa(i,i.next)||nt(i.prev,i,i.next)===0)){if(kr(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Or(e,t,i,n,s,r,o){if(!e)return;!o&&r&&g0(e,n,s,r);let a=e,l,c;for(;e.prev!==e.next;){if(l=e.prev,c=e.next,r?l0(e,n,s,r):a0(e)){t.push(l.i/i),t.push(e.i/i),t.push(c.i/i),kr(e),e=c.next,a=c.next;continue}if(e=c,e===a){o?o===1?(e=c0(ln(e),t,i),Or(e,t,i,n,s,r,2)):o===2&&u0(e,t,i,n,s,r):Or(ln(e),t,i,n,s,r,1);break}}}function a0(e){let t=e.prev,i=e,n=e.next;if(nt(t,i,n)>=0)return!1;let s=e.next.next;for(;s!==e.prev;){if(hs(t.x,t.y,i.x,i.y,n.x,n.y,s.x,s.y)&&nt(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function l0(e,t,i,n){let s=e.prev,r=e,o=e.next;if(nt(s,r,o)>=0)return!1;let a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,l=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,c=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,h=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,u=Jl(a,l,t,i,n),f=Jl(c,h,t,i,n),d=e.prevZ,p=e.nextZ;for(;d&&d.z>=u&&p&&p.z<=f;){if(d!==e.prev&&d!==e.next&&hs(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&nt(d.prev,d,d.next)>=0||(d=d.prevZ,p!==e.prev&&p!==e.next&&hs(s.x,s.y,r.x,r.y,o.x,o.y,p.x,p.y)&&nt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=u;){if(d!==e.prev&&d!==e.next&&hs(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&nt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=f;){if(p!==e.prev&&p!==e.next&&hs(s.x,s.y,r.x,r.y,o.x,o.y,p.x,p.y)&&nt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function c0(e,t,i){let n=e;do{let s=n.prev,r=n.next.next;!Xa(s,r)&&bd(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(t.push(s.i/i),t.push(n.i/i),t.push(r.i/i),kr(n),kr(n.next),n=e=r),n=n.next}while(n!==e);return ln(n)}function u0(e,t,i,n,s,r){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&y0(o,a)){let l=wd(o,a);o=ln(o,o.next),l=ln(l,l.next),Or(o,t,i,n,s,r),Or(l,t,i,n,s,r);return}a=a.next}o=o.next}while(o!==e)}function h0(e,t,i,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:e.length,c=yd(e,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(x0(c));for(s.sort(d0),r=0;r<s.length;r++)f0(s[r],i),i=ln(i,i.next);return i}function d0(e,t){return e.x-t.x}function f0(e,t){if(t=p0(e,t),t){let i=wd(t,e);ln(t,t.next),ln(i,i.next)}}function p0(e,t){let i=t,n=e.x,s=e.y,r=-1/0,o;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){let f=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=n&&f>r){if(r=f,f===n){if(s===i.y)return i;if(s===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!o)return null;if(n===r)return o;let a=o,l=o.x,c=o.y,h=1/0,u;i=o;do n>=i.x&&i.x>=l&&n!==i.x&&hs(s<c?n:r,s,l,c,s<c?r:n,s,i.x,i.y)&&(u=Math.abs(s-i.y)/(n-i.x),Fr(i,e)&&(u<h||u===h&&(i.x>o.x||i.x===o.x&&m0(o,i)))&&(o=i,h=u)),i=i.next;while(i!==a);return o}function m0(e,t){return nt(e.prev,e,t.prev)<0&&nt(t.next,e,e.next)<0}function g0(e,t,i,n){let s=e;do s.z===null&&(s.z=Jl(s.x,s.y,t,i,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,v0(s)}function v0(e){let t,i,n,s,r,o,a,l,c=1;do{for(i=e,e=null,r=null,o=0;i;){for(o++,n=i,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||i.z<=n.z)?(s=i,i=i.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:e=s,s.prevZ=r,r=s;i=n}r.nextZ=null,c*=2}while(o>1);return e}function Jl(e,t,i,n,s){return e=32767*(e-i)*s,t=32767*(t-n)*s,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function x0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function hs(e,t,i,n,s,r,o,a){return(s-o)*(t-a)-(e-o)*(r-a)>=0&&(e-o)*(n-a)-(i-o)*(t-a)>=0&&(i-o)*(r-a)-(s-o)*(n-a)>=0}function y0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!b0(e,t)&&(Fr(e,t)&&Fr(t,e)&&w0(e,t)&&(nt(e.prev,e,t.prev)||nt(e,t.prev,t))||Xa(e,t)&&nt(e.prev,e,e.next)>0&&nt(t.prev,t,t.next)>0)}function nt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Xa(e,t){return e.x===t.x&&e.y===t.y}function bd(e,t,i,n){let s=Zo(nt(e,t,i)),r=Zo(nt(e,t,n)),o=Zo(nt(i,n,e)),a=Zo(nt(i,n,t));return!!(s!==r&&o!==a||s===0&&Qo(e,i,t)||r===0&&Qo(e,n,t)||o===0&&Qo(i,e,n)||a===0&&Qo(i,t,n))}function Qo(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Zo(e){return e>0?1:e<0?-1:0}function b0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&bd(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Fr(e,t){return nt(e.prev,e,e.next)<0?nt(e,t,e.next)>=0&&nt(e,e.prev,t)>=0:nt(e,t,e.prev)<0||nt(e,e.next,t)<0}function w0(e,t){let i=e,n=!1,s=(e.x+t.x)/2,r=(e.y+t.y)/2;do i.y>r!=i.next.y>r&&i.next.y!==i.y&&s<(i.next.x-i.x)*(r-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}function wd(e,t){let i=new $l(e.i,e.x,e.y),n=new $l(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,i.next=s,s.prev=i,n.next=i,i.prev=n,r.next=n,n.prev=r,n}function ph(e,t,i,n){let s=new $l(e,t,i);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $l(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _0(e,t,i,n){let s=0;for(let r=t,o=i-n;r<i;r+=n)s+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return s}var en={area:function(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5},isClockWise:function(e){return en.area(e)<0},triangulateShape:function(e,t){let i=[],n=[],s=[];mh(e),gh(i,e);let r=e.length;t.forEach(mh);for(let a=0;a<t.length;a++)n.push(r),r+=t[a].length,gh(i,t[a]);let o=o0.triangulate(i,n);for(let a=0;a<o.length;a+=3)s.push(o.slice(a,a+3));return s}};function mh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function gh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}function Es(e,t){Pe.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new Ri(e,t)),this.mergeVertices()}Es.prototype=Object.create(Pe.prototype);Es.prototype.constructor=Es;Es.prototype.toJSON=function(){let e=Pe.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return _d(t,i,e)};function Ri(e,t){ae.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];r(l)}this.setAttribute("position",new ie(n,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function r(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:100,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,d=t.bevelSize!==void 0?t.bevelSize:f-2,p=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:M0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let g,E=!1,M,C,L,B;v&&(g=v.getSpacedPoints(c),E=!0,u=!1,M=v.computeFrenetFrames(c,!1),C=new P,L=new P,B=new P),u||(y=0,f=0,d=0,p=0);let G=o.extractPoints(l),O=G.shape,x=G.holes;if(!en.isClockWise(O)){O=O.reverse();for(let Z=0,K=x.length;Z<K;Z++){let J=x[Z];en.isClockWise(J)&&(x[Z]=J.reverse())}}let w=en.triangulateShape(O,x),S=O;for(let Z=0,K=x.length;Z<K;Z++){let J=x[Z];O=O.concat(J)}function _(Z,K,J){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(J).add(Z)}let T=O.length,A=w.length;function I(Z,K,J){let fe,he,Le,D=Z.x-K.x,U=Z.y-K.y,ee=J.x-Z.x,Q=J.y-Z.y,H=D*D+U*U,se=D*Q-U*ee;if(Math.abs(se)>Number.EPSILON){let re=Math.sqrt(H),Me=Math.sqrt(ee*ee+Q*Q),te=K.x-U/re,pe=K.y+D/re,Fe=J.x-Q/Me,Te=J.y+ee/Me,ve=((Fe-te)*Q-(Te-pe)*ee)/(D*Q-U*ee);fe=te+D*ve-Z.x,he=pe+U*ve-Z.y;let Ce=fe*fe+he*he;if(Ce<=2)return new N(fe,he);Le=Math.sqrt(Ce/2)}else{let re=!1;D>Number.EPSILON?ee>Number.EPSILON&&(re=!0):D<-Number.EPSILON?ee<-Number.EPSILON&&(re=!0):Math.sign(U)===Math.sign(Q)&&(re=!0),re?(fe=-U,he=D,Le=Math.sqrt(H)):(fe=D,he=U,Le=Math.sqrt(H/2))}return new N(fe/Le,he/Le)}let F=[];for(let Z=0,K=S.length,J=K-1,fe=Z+1;Z<K;Z++,J++,fe++)J===K&&(J=0),fe===K&&(fe=0),F[Z]=I(S[Z],S[J],S[fe]);let V=[],k,j=F.concat();for(let Z=0,K=x.length;Z<K;Z++){let J=x[Z];k=[];for(let fe=0,he=J.length,Le=he-1,D=fe+1;fe<he;fe++,Le++,D++)Le===he&&(Le=0),D===he&&(D=0),k[fe]=I(J[fe],J[Le],J[D]);V.push(k),j=j.concat(k)}for(let Z=0;Z<y;Z++){let K=Z/y,J=f*Math.cos(K*Math.PI/2),fe=d*Math.sin(K*Math.PI/2)+p;for(let he=0,Le=S.length;he<Le;he++){let D=_(S[he],F[he],fe);X(D.x,D.y,-J)}for(let he=0,Le=x.length;he<Le;he++){let D=x[he];k=V[he];for(let U=0,ee=D.length;U<ee;U++){let Q=_(D[U],k[U],fe);X(Q.x,Q.y,-J)}}}let Y=d+p;for(let Z=0;Z<T;Z++){let K=u?_(O[Z],j[Z],Y):O[Z];E?(L.copy(M.normals[0]).multiplyScalar(K.x),C.copy(M.binormals[0]).multiplyScalar(K.y),B.copy(g[0]).add(L).add(C),X(B.x,B.y,B.z)):X(K.x,K.y,0)}for(let Z=1;Z<=c;Z++)for(let K=0;K<T;K++){let J=u?_(O[K],j[K],Y):O[K];E?(L.copy(M.normals[Z]).multiplyScalar(J.x),C.copy(M.binormals[Z]).multiplyScalar(J.y),B.copy(g[Z]).add(L).add(C),X(B.x,B.y,B.z)):X(J.x,J.y,h/c*Z)}for(let Z=y-1;Z>=0;Z--){let K=Z/y,J=f*Math.cos(K*Math.PI/2),fe=d*Math.sin(K*Math.PI/2)+p;for(let he=0,Le=S.length;he<Le;he++){let D=_(S[he],F[he],fe);X(D.x,D.y,h+J)}for(let he=0,Le=x.length;he<Le;he++){let D=x[he];k=V[he];for(let U=0,ee=D.length;U<ee;U++){let Q=_(D[U],k[U],fe);E?X(Q.x,Q.y+g[c-1].y,g[c-1].x+J):X(Q.x,Q.y,h+J)}}}le(),Be();function le(){let Z=n.length/3;if(u){let K=0,J=T*K;for(let fe=0;fe<A;fe++){let he=w[fe];Ve(he[2]+J,he[1]+J,he[0]+J)}K=c+y*2,J=T*K;for(let fe=0;fe<A;fe++){let he=w[fe];Ve(he[0]+J,he[1]+J,he[2]+J)}}else{for(let K=0;K<A;K++){let J=w[K];Ve(J[2],J[1],J[0])}for(let K=0;K<A;K++){let J=w[K];Ve(J[0]+T*c,J[1]+T*c,J[2]+T*c)}}i.addGroup(Z,n.length/3-Z,0)}function Be(){let Z=n.length/3,K=0;ge(S,K),K+=S.length;for(let J=0,fe=x.length;J<fe;J++){let he=x[J];ge(he,K),K+=he.length}i.addGroup(Z,n.length/3-Z,1)}function ge(Z,K){let J=Z.length;for(;--J>=0;){let fe=J,he=J-1;he<0&&(he=Z.length-1);for(let Le=0,D=c+y*2;Le<D;Le++){let U=T*Le,ee=T*(Le+1),Q=K+fe+U,H=K+he+U,se=K+he+ee,re=K+fe+ee;Se(Q,H,se,re)}}}function X(Z,K,J){a.push(Z),a.push(K),a.push(J)}function Ve(Z,K,J){Ae(Z),Ae(K),Ae(J);let fe=n.length/3,he=m.generateTopUV(i,n,fe-3,fe-2,fe-1);be(he[0]),be(he[1]),be(he[2])}function Se(Z,K,J,fe){Ae(Z),Ae(K),Ae(fe),Ae(K),Ae(J),Ae(fe);let he=n.length/3,Le=m.generateSideWallUV(i,n,he-6,he-3,he-2,he-1);be(Le[0]),be(Le[1]),be(Le[3]),be(Le[1]),be(Le[2]),be(Le[3])}function Ae(Z){n.push(a[Z*3+0]),n.push(a[Z*3+1]),n.push(a[Z*3+2])}function be(Z){s.push(Z.x),s.push(Z.y)}}}Ri.prototype=Object.create(ae.prototype);Ri.prototype.constructor=Ri;Ri.prototype.toJSON=function(){let e=ae.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return _d(t,i,e)};var M0={generateTopUV:function(e,t,i,n,s){let r=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new N(r,o),new N(a,l),new N(c,h)]},generateSideWallUV:function(e,t,i,n,s,r){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],y=t[r*3],v=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<.01?[new N(o,1-l),new N(c,1-u),new N(f,1-p),new N(y,1-m)]:[new N(a,1-l),new N(h,1-u),new N(d,1-p),new N(v,1-m)]}};function _d(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,s=e.length;n<s;n++){let r=e[n];i.shapes.push(r.uuid)}else i.shapes.push(e.uuid);return t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function Ca(e,t){Pe.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new Hr(e,t)),this.mergeVertices()}Ca.prototype=Object.create(Pe.prototype);Ca.prototype.constructor=Ca;function Hr(e,t){t=t||{};let i=t.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Pe;let n=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),Ri.call(this,n,t),this.type="TextBufferGeometry"}Hr.prototype=Object.create(Ri.prototype);Hr.prototype.constructor=Hr;function Pa(e,t,i,n,s,r,o){Pe.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},this.fromBufferGeometry(new Ts(e,t,i,n,s,r,o)),this.mergeVertices()}Pa.prototype=Object.create(Pe.prototype);Pa.prototype.constructor=Pa;function Ts(e,t,i,n,s,r,o){ae.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=e||1,t=Math.max(3,Math.floor(t)||8),i=Math.max(2,Math.floor(i)||6),n=n!==void 0?n:0,s=s!==void 0?s:Math.PI*2,r=r!==void 0?r:0,o=o!==void 0?o:Math.PI;let a=Math.min(r+o,Math.PI),l=0,c=[],h=new P,u=new P,f=[],d=[],p=[],y=[];for(let v=0;v<=i;v++){let m=[],g=v/i,E=0;v==0&&r==0?E=.5/t:v==i&&a==Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){let C=M/t;h.x=-e*Math.cos(n+C*s)*Math.sin(r+g*o),h.y=e*Math.cos(r+g*o),h.z=e*Math.sin(n+C*s)*Math.sin(r+g*o),d.push(h.x,h.y,h.z),u.copy(h).normalize(),p.push(u.x,u.y,u.z),y.push(C+E,1-g),m.push(l++)}c.push(m)}for(let v=0;v<i;v++)for(let m=0;m<t;m++){let g=c[v][m+1],E=c[v][m],M=c[v+1][m],C=c[v+1][m+1];(v!==0||r>0)&&f.push(g,E,C),(v!==i-1||a<Math.PI)&&f.push(E,M,C)}this.setIndex(f),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(y,2))}Ts.prototype=Object.create(ae.prototype);Ts.prototype.constructor=Ts;function Aa(e,t,i,n,s,r){Pe.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},this.fromBufferGeometry(new Gr(e,t,i,n,s,r)),this.mergeVertices()}Aa.prototype=Object.create(Pe.prototype);Aa.prototype.constructor=Aa;function Gr(e,t,i,n,s,r){ae.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},e=e||.5,t=t||1,s=s!==void 0?s:0,r=r!==void 0?r:Math.PI*2,i=i!==void 0?Math.max(3,i):8,n=n!==void 0?Math.max(1,n):1;let o=[],a=[],l=[],c=[],h=e,u=(t-e)/n,f=new P,d=new N;for(let p=0;p<=n;p++){for(let y=0;y<=i;y++){let v=s+y/i*r;f.x=h*Math.cos(v),f.y=h*Math.sin(v),a.push(f.x,f.y,f.z),l.push(0,0,1),d.x=(f.x/t+1)/2,d.y=(f.y/t+1)/2,c.push(d.x,d.y)}h+=u}for(let p=0;p<n;p++){let y=p*(i+1);for(let v=0;v<i;v++){let m=v+y,g=m,E=m+i+1,M=m+i+2,C=m+1;o.push(g,E,C),o.push(E,M,C)}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}Gr.prototype=Object.create(ae.prototype);Gr.prototype.constructor=Gr;function La(e,t,i,n){Pe.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},this.fromBufferGeometry(new Nr(e,t,i,n)),this.mergeVertices()}La.prototype=Object.create(Pe.prototype);La.prototype.constructor=La;function Nr(e,t,i,n){ae.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t)||12,i=i||0,n=n||Math.PI*2,n=xe.clamp(n,0,Math.PI*2);let s=[],r=[],o=[],a=1/t,l=new P,c=new N;for(let h=0;h<=t;h++){let u=i+h*a*n,f=Math.sin(u),d=Math.cos(u);for(let p=0;p<=e.length-1;p++)l.x=e[p].x*f,l.y=e[p].y,l.z=e[p].x*d,r.push(l.x,l.y,l.z),c.x=h/t,c.y=p/(e.length-1),o.push(c.x,c.y)}for(let h=0;h<t;h++)for(let u=0;u<e.length-1;u++){let f=u+h*e.length,d=f,p=f+e.length,y=f+e.length+1,v=f+1;s.push(d,p,v),s.push(p,y,v)}if(this.setIndex(s),this.setAttribute("position",new ie(r,3)),this.setAttribute("uv",new ie(o,2)),this.computeVertexNormals(),n===Math.PI*2){let h=this.attributes.normal.array,u=new P,f=new P,d=new P,p=t*e.length*3;for(let y=0,v=0;y<e.length;y++,v+=3)u.x=h[v+0],u.y=h[v+1],u.z=h[v+2],f.x=h[p+v+0],f.y=h[p+v+1],f.z=h[p+v+2],d.addVectors(u,f).normalize(),h[v+0]=h[p+v+0]=d.x,h[v+1]=h[p+v+1]=d.y,h[v+2]=h[p+v+2]=d.z}}Nr.prototype=Object.create(ae.prototype);Nr.prototype.constructor=Nr;function Cs(e,t){Pe.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Ps(e,t)),this.mergeVertices()}Cs.prototype=Object.create(Pe.prototype);Cs.prototype.constructor=Cs;Cs.prototype.toJSON=function(){let e=Pe.prototype.toJSON.call(this),t=this.parameters.shapes;return Md(t,e)};function Ps(e,t){ae.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;let i=[],n=[],s=[],r=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new ie(n,3)),this.setAttribute("normal",new ie(s,3)),this.setAttribute("uv",new ie(r,2));function l(c){let h=n.length/3,u=c.extractPoints(t),f=u.shape,d=u.holes;en.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,v=d.length;y<v;y++){let m=d[y];en.isClockWise(m)===!0&&(d[y]=m.reverse())}let p=en.triangulateShape(f,d);for(let y=0,v=d.length;y<v;y++){let m=d[y];f=f.concat(m)}for(let y=0,v=f.length;y<v;y++){let m=f[y];n.push(m.x,m.y,0),s.push(0,0,1),r.push(m.x,m.y)}for(let y=0,v=p.length;y<v;y++){let m=p[y],g=m[0]+h,E=m[1]+h,M=m[2]+h;i.push(g,E,M),a+=3}}}Ps.prototype=Object.create(ae.prototype);Ps.prototype.constructor=Ps;Ps.prototype.toJSON=function(){let e=ae.prototype.toJSON.call(this),t=this.parameters.shapes;return Md(t,e)};function Md(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let s=e[i];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}function Da(e,t){ae.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1;let i=[],n=Math.cos(xe.DEG2RAD*t),s=[0,0],r={},o,a,l,c=["a","b","c"],h;e.isBufferGeometry?(h=new Pe,h.fromBufferGeometry(e)):h=e.clone(),h.mergeVertices(),h.computeFaceNormals();let u=h.vertices,f=h.faces;for(let d=0,p=f.length;d<p;d++){let y=f[d];for(let v=0;v<3;v++)o=y[c[v]],a=y[c[(v+1)%3]],s[0]=Math.min(o,a),s[1]=Math.max(o,a),l=s[0]+","+s[1],r[l]===void 0?r[l]={index1:s[0],index2:s[1],face1:d,face2:void 0}:r[l].face2=d}for(l in r){let d=r[l];if(d.face2===void 0||f[d.face1].normal.dot(f[d.face2].normal)<=n){let p=u[d.index1];i.push(p.x,p.y,p.z),p=u[d.index2],i.push(p.x,p.y,p.z)}}this.setAttribute("position",new ie(i,3))}Da.prototype=Object.create(ae.prototype);Da.prototype.constructor=Da;function As(e,t,i,n,s,r,o,a){Pe.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new cn(e,t,i,n,s,r,o,a)),this.mergeVertices()}As.prototype=Object.create(Pe.prototype);As.prototype.constructor=As;function cn(e,t,i,n,s,r,o,a){ae.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};let l=this;e=e!==void 0?e:1,t=t!==void 0?t:1,i=i||1,n=Math.floor(n)||8,s=Math.floor(s)||1,r=r!==void 0?r:!1,o=o!==void 0?o:0,a=a!==void 0?a:Math.PI*2;let c=[],h=[],u=[],f=[],d=0,p=[],y=i/2,v=0;m(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function m(){let E=new P,M=new P,C=0,L=(t-e)/i;for(let B=0;B<=s;B++){let G=[],O=B/s,x=O*(t-e)+e;for(let b=0;b<=n;b++){let w=b/n,S=w*a+o,_=Math.sin(S),T=Math.cos(S);M.x=x*_,M.y=-O*i+y,M.z=x*T,h.push(M.x,M.y,M.z),E.set(_,L,T).normalize(),u.push(E.x,E.y,E.z),f.push(w,1-O),G.push(d++)}p.push(G)}for(let B=0;B<n;B++)for(let G=0;G<s;G++){let O=p[G][B],x=p[G+1][B],b=p[G+1][B+1],w=p[G][B+1];c.push(O,x,w),c.push(x,b,w),C+=6}l.addGroup(v,C,0),v+=C}function g(E){let M,C,L=new N,B=new P,G=0,O=E===!0?e:t,x=E===!0?1:-1;M=d;for(let b=1;b<=n;b++)h.push(0,y*x,0),u.push(0,x,0),f.push(.5,.5),d++;C=d;for(let b=0;b<=n;b++){let S=b/n*a+o,_=Math.cos(S),T=Math.sin(S);B.x=O*T,B.y=y*x,B.z=O*_,h.push(B.x,B.y,B.z),u.push(0,x,0),L.x=_*.5+.5,L.y=T*.5*x+.5,f.push(L.x,L.y),d++}for(let b=0;b<n;b++){let w=M+b,S=C+b;E===!0?c.push(S,S+1,w):c.push(S+1,S,w),G+=3}l.addGroup(v,G,E===!0?1:2),v+=G}}cn.prototype=Object.create(ae.prototype);cn.prototype.constructor=cn;function Ra(e,t,i,n,s,r,o){As.call(this,0,e,t,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}Ra.prototype=Object.create(As.prototype);Ra.prototype.constructor=Ra;function Ia(e,t,i,n,s,r,o){cn.call(this,0,e,t,i,n,s,r,o),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}Ia.prototype=Object.create(cn.prototype);Ia.prototype.constructor=Ia;function Ba(e,t,i,n){Pe.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},this.fromBufferGeometry(new Vr(e,t,i,n)),this.mergeVertices()}Ba.prototype=Object.create(Pe.prototype);Ba.prototype.constructor=Ba;function Vr(e,t,i,n){ae.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},e=e||1,t=t!==void 0?Math.max(3,t):8,i=i!==void 0?i:0,n=n!==void 0?n:Math.PI*2;let s=[],r=[],o=[],a=[],l=new P,c=new N;r.push(0,0,0),o.push(0,0,1),a.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=i+h/t*n;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(r[u]/e+1)/2,c.y=(r[u+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(a,2))}Vr.prototype=Object.create(ae.prototype);Vr.prototype.constructor=Vr;var At=Object.freeze({__proto__:null,WireframeGeometry:va,ParametricGeometry:xa,ParametricBufferGeometry:Lr,TetrahedronGeometry:ba,TetrahedronBufferGeometry:Dr,OctahedronGeometry:wa,OctahedronBufferGeometry:Ms,IcosahedronGeometry:_a,IcosahedronBufferGeometry:Rr,DodecahedronGeometry:Ma,DodecahedronBufferGeometry:Ir,PolyhedronGeometry:ya,PolyhedronBufferGeometry:Gt,TubeGeometry:Sa,TubeBufferGeometry:Ss,TorusKnotGeometry:Ea,TorusKnotBufferGeometry:Br,TorusGeometry:Ta,TorusBufferGeometry:Ur,TextGeometry:Ca,TextBufferGeometry:Hr,SphereGeometry:Pa,SphereBufferGeometry:Ts,RingGeometry:Aa,RingBufferGeometry:Gr,PlaneGeometry:fa,PlaneBufferGeometry:Yt,LatheGeometry:La,LatheBufferGeometry:Nr,ShapeGeometry:Cs,ShapeBufferGeometry:Ps,ExtrudeGeometry:Es,ExtrudeBufferGeometry:Ri,EdgesGeometry:Da,ConeGeometry:Ra,ConeBufferGeometry:Ia,CylinderGeometry:As,CylinderBufferGeometry:cn,CircleGeometry:Ba,CircleBufferGeometry:Vr,BoxGeometry:jl,BoxBufferGeometry:xs});function Ls(e){Ee.call(this),this.type="ShadowMaterial",this.color=new $(0),this.transparent=!0,this.setValues(e)}Ls.prototype=Object.create(Ee.prototype);Ls.prototype.constructor=Ls;Ls.prototype.isShadowMaterial=!0;Ls.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this};function un(e){ye.call(this,e),this.type="RawShaderMaterial"}un.prototype=Object.create(ye.prototype);un.prototype.constructor=un;un.prototype.isRawShaderMaterial=!0;function oi(e){Ee.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}oi.prototype=Object.create(Ee.prototype);oi.prototype.constructor=oi;oi.prototype.isMeshStandardMaterial=!0;oi.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function Ds(e){oi.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new N(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transparency=0,this.setValues(e)}Ds.prototype=Object.create(oi.prototype);Ds.prototype.constructor=Ds;Ds.prototype.isMeshPhysicalMaterial=!0;Ds.prototype.copy=function(e){return oi.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new $).copy(e.sheen):this.sheen=null,this.transparency=e.transparency,this};function ai(e){Ee.call(this),this.type="MeshPhongMaterial",this.color=new $(16777215),this.specular=new $(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ai.prototype=Object.create(Ee.prototype);ai.prototype.constructor=ai;ai.prototype.isMeshPhongMaterial=!0;ai.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Rs(e){Ee.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new $(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Rs.prototype=Object.create(Ee.prototype);Rs.prototype.constructor=Rs;Rs.prototype.isMeshToonMaterial=!0;Rs.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Is(e){Ee.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Is.prototype=Object.create(Ee.prototype);Is.prototype.constructor=Is;Is.prototype.isMeshNormalMaterial=!0;Is.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function vi(e){Ee.call(this),this.type="MeshLambertMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}vi.prototype=Object.create(Ee.prototype);vi.prototype.constructor=vi;vi.prototype.isMeshLambertMaterial=!0;vi.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Bs(e){Ee.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new $(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Bs.prototype=Object.create(Ee.prototype);Bs.prototype.constructor=Bs;Bs.prototype.isMeshMatcapMaterial=!0;Bs.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Us(e){st.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Us.prototype=Object.create(st.prototype);Us.prototype.constructor=Us;Us.prototype.isLineDashedMaterial=!0;Us.prototype.copy=function(e){return st.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var S0=Object.freeze({__proto__:null,ShadowMaterial:Ls,SpriteMaterial:Rn,RawShaderMaterial:un,ShaderMaterial:ye,PointsMaterial:In,MeshPhysicalMaterial:Ds,MeshStandardMaterial:oi,MeshPhongMaterial:ai,MeshToonMaterial:Rs,MeshNormalMaterial:Is,MeshLambertMaterial:vi,MeshDepthMaterial:An,MeshDistanceMaterial:Ln,MeshBasicMaterial:bt,MeshMatcapMaterial:Bs,LineDashedMaterial:Us,LineBasicMaterial:st,Material:Ee}),et={arraySlice:function(e,t,i){return et.isTypedArray(e)?new e.constructor(e.subarray(t,i!==void 0?i:e.length)):e.slice(t,i)},convertArray:function(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(s,r){return e[s]-e[r]}let i=e.length,n=new Array(i);for(let s=0;s!==i;++s)n[s]=s;return n.sort(t),n},sortedArray:function(e,t,i){let n=e.length,s=new e.constructor(n);for(let r=0,o=0;o!==n;++r){let a=i[r]*t;for(let l=0;l!==t;++l)s[o++]=e[a+l]}return s},flattenJSON:function(e,t,i,n){let s=1,r=e[0];for(;r!==void 0&&r[n]===void 0;)r=e[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),i.push.apply(i,o)),r=e[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(i,i.length)),r=e[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),i.push(o)),r=e[s++];while(r!==void 0)},subclip:function(e,t,i,n,s){s=s||30;let r=e.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){let p=c.times[d]*s;if(!(p<i||p>=n)){u.push(c.times[d]);for(let y=0;y<h;++y)f.push(c.values[d*h+y])}}u.length!==0&&(c.times=et.convertArray(u,c.times.constructor),c.values=et.convertArray(f,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(e,t,i,n){t===void 0&&(t=0),i===void 0&&(i=e),(n===void 0||n<=0)&&(n=30);let s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){let a=i.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=e.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=a.getValueSize(),u=a.times.length-1,f;if(r<=a.times[0])f=et.arraySlice(a.values,0,a.valueSize);else if(r>=a.times[u]){let p=u*h;f=et.arraySlice(a.values,p)}else{let p=a.createInterpolant();p.evaluate(r),f=p.resultBuffer}l==="quaternion"&&new Ie(f[0],f[1],f[2],f[3]).normalize().conjugate().toArray(f);let d=c.times.length;for(let p=0;p<d;++p){let y=p*h;if(l==="quaternion")Ie.multiplyQuaternionsFlat(c.values,y,f,0,c.values,y);else for(let v=0;v<h;++v)c.values[y+v]-=f[v]}}return e.blendMode=ed,e}};function qt(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i}Object.assign(qt.prototype,{evaluate:function(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let a=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(i===a)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(qt.prototype,{beforeStart_:qt.prototype.copySampleValue_,afterEnd_:qt.prototype.copySampleValue_});function ec(e,t,i,n){qt.call(this,e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ec.prototype=Object.assign(Object.create(qt.prototype),{constructor:ec,DefaultSettings_:{endingStart:vs,endingEnd:vs},intervalChanged_:function(e,t,i){let n=this.parameterPositions,s=e-2,r=e+1,o=n[s],a=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case as:s=e,o=2*t-i;break;case ha:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case as:r=e,a=2*i-t;break;case ha:r=1,a=i+n[1]-n[0];break;default:r=e-1,a=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=s*c,this._offsetNext=r*c},interpolate_:function(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,d=(i-t)/(n-t),p=d*d,y=p*d,v=-u*y+2*u*p-u*d,m=(1+u)*y+(-1.5-2*u)*p+(-.5+u)*d+1,g=(-1-f)*y+(1.5+f)*p+.5*d,E=f*y-f*p;for(let M=0;M!==o;++M)s[M]=v*r[c+M]+m*r[l+M]+g*r[a+M]+E*r[h+M];return s}});function Ua(e,t,i,n){qt.call(this,e,t,i,n)}Ua.prototype=Object.assign(Object.create(qt.prototype),{constructor:Ua,interpolate_:function(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==o;++u)s[u]=r[l+u]*h+r[a+u]*c;return s}});function tc(e,t,i,n){qt.call(this,e,t,i,n)}tc.prototype=Object.assign(Object.create(qt.prototype),{constructor:tc,interpolate_:function(e){return this.copySampleValue_(e-1)}});function Ct(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=et.convertArray(t,this.TimeBufferType),this.values=et.convertArray(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}Object.assign(Ct,{toJSON:function(e){let t=e.constructor,i;if(t.toJSON!==void 0)i=t.toJSON(e);else{i={name:e.name,times:et.convertArray(e.times,Array),values:et.convertArray(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}});Object.assign(Ct.prototype,{constructor:Ct,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:la,InterpolantFactoryMethodDiscrete:function(e){return new tc(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Ua(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new ec(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return rl}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this},scale:function(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this},trim:function(e,t){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=et.arraySlice(i,s,r),this.values=et.arraySlice(this.values,s*o,r*o)}return this},validate:function(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let a=i[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(n!==void 0&&et.isTypedArray(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e},optimize:function(){let e=et.arraySlice(this.times),t=et.arraySlice(this.values),i=this.getValueSize(),n=this.getInterpolation()===rl,s=e.length-1,r=1;for(let o=1;o<s;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==l[0]))if(n)a=!0;else{let h=o*i,u=h-i,f=h+i;for(let d=0;d!==i;++d){let p=t[h+d];if(p!==t[u+d]||p!==t[f+d]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];let h=o*i,u=r*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,a=r*i,l=0;l!==i;++l)t[a+l]=t[o+l];++r}return r!==e.length?(this.times=et.arraySlice(e,0,r),this.values=et.arraySlice(t,0,r*i)):(this.times=e,this.values=t),this},clone:function(){let e=et.arraySlice(this.times,0),t=et.arraySlice(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}});function ic(e,t,i){Ct.call(this,e,t,i)}ic.prototype=Object.assign(Object.create(Ct.prototype),{constructor:ic,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:ua,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function nc(e,t,i,n){Ct.call(this,e,t,i,n)}nc.prototype=Object.assign(Object.create(Ct.prototype),{constructor:nc,ValueTypeName:"color"});function Bn(e,t,i,n){Ct.call(this,e,t,i,n)}Bn.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Bn,ValueTypeName:"number"});function sc(e,t,i,n){qt.call(this,e,t,i,n)}sc.prototype=Object.assign(Object.create(qt.prototype),{constructor:sc,interpolate_:function(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)Ie.slerpFlat(s,0,r,l-o,r,l,a);return s}});function Os(e,t,i,n){Ct.call(this,e,t,i,n)}Os.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Os,ValueTypeName:"quaternion",DefaultInterpolation:la,InterpolantFactoryMethodLinear:function(e){return new sc(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function rc(e,t,i,n){Ct.call(this,e,t,i,n)}rc.prototype=Object.assign(Object.create(Ct.prototype),{constructor:rc,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:ua,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Un(e,t,i,n){Ct.call(this,e,t,i,n)}Un.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Un,ValueTypeName:"vector"});function kt(e,t,i,n){this.name=e,this.tracks=i,this.duration=t!==void 0?t:-1,this.blendMode=n!==void 0?n:Bc,this.uuid=xe.generateUUID(),this.duration<0&&this.resetDuration()}function E0(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bn;case"vector":case"vector2":case"vector3":case"vector4":return Un;case"color":return nc;case"quaternion":return Os;case"bool":case"boolean":return ic;case"string":return rc}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function T0(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=E0(e.type);if(e.times===void 0){let i=[],n=[];et.flattenJSON(e.keys,i,n,"value"),e.times=i,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(kt,{parse:function(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,r=i.length;s!==r;++s)t.push(T0(i[s]).scale(n));return new kt(e.name,e.duration,t,e.blendMode)},toJSON:function(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(Ct.toJSON(i[s]));return n},CreateFromMorphTargetSequence:function(e,t,i,n){let s=t.length,r=[];for(let o=0;o<s;o++){let a=[],l=[];a.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let c=et.getKeyframeOrder(a);a=et.sortedArray(a,1,c),l=et.sortedArray(l,1,c),!n&&a[0]===0&&(a.push(s),l.push(l[0])),r.push(new Bn(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/i))}return new kt(e,-1,r)},findByName:function(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null},CreateClipsFromMorphTargetSequences:function(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.name.match(s);if(c&&c.length>1){let h=c[1],u=n[h];u||(n[h]=u=[]),u.push(l)}}let r=[];for(let o in n)r.push(kt.CreateFromMorphTargetSequence(o,n[o],t,i));return r},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,u,f,d,p){if(f.length!==0){let y=[],v=[];et.flattenJSON(f,y,v,d),y.length!==0&&p.push(new h(u,y,v))}},n=[],s=e.name||"default",r=e.fps||30,o=e.blendMode,a=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},d;for(d=0;d<u.length;d++)if(u[d].morphTargets)for(let p=0;p<u[d].morphTargets.length;p++)f[u[d].morphTargets[p]]=-1;for(let p in f){let y=[],v=[];for(let m=0;m!==u[d].morphTargets.length;++m){let g=u[d];y.push(g.time),v.push(g.morphTarget===p?1:0)}n.push(new Bn(".morphTargetInfluence["+p+"]",y,v))}a=f.length*(r||1)}else{let f=".bones["+t[h].name+"]";i(Un,f+".position",u,"pos",n),i(Os,f+".quaternion",u,"rot",n),i(Un,f+".scale",u,"scl",n)}}return n.length===0?null:new kt(s,a,n,o)}});Object.assign(kt.prototype,{resetDuration:function(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new kt(this.name,this.duration,e,this.blendMode)}});var Fs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Sd(e,t,i){let n=this,s=!1,r=0,o=0,a,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,s===!1&&n.onStart!==void 0&&n.onStart(c,r,o),s=!0},this.itemEnd=function(c){r++,n.onProgress!==void 0&&n.onProgress(c,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let f=l[h],d=l[h+1];if(f.global&&(f.lastIndex=0),f.test(c))return d}return null}}var C0=new Sd;function We(e){this.manager=e!==void 0?e:C0,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(We.prototype,{load:function(){},loadAsync:function(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});var ni={};function Zt(e){We.call(this,e)}Zt.prototype=Object.assign(Object.create(We.prototype),{constructor:Zt,load:function(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Fs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:n});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(o),l;if(a){let c=a[1],h=!!a[2],u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let f,d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":let p=new Uint8Array(u.length);for(let v=0;v<u.length;v++)p[v]=u.charCodeAt(v);d==="blob"?f=new Blob([p.buffer],{type:c}):f=p.buffer;break;case"document":f=new DOMParser().parseFromString(u,c);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){t&&t(f),s.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){n&&n(f),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:n}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(c){let h=this.response,u=ni[e];if(delete ni[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Fs.add(e,h);for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onLoad&&p.onLoad(h)}s.manager.itemEnd(e)}else{for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onError&&p.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(c){let h=ni[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onProgress&&d.onProgress(c)}},!1),l.addEventListener("error",function(c){let h=ni[e];delete ni[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),l.addEventListener("abort",function(c){let h=ni[e];delete ni[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let c in this.requestHeader)l.setRequestHeader(c,this.requestHeader[c]);l.send(null)}return s.manager.itemStart(e),l},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function vh(e){We.call(this,e)}vh.prototype=Object.assign(Object.create(We.prototype),{constructor:vh,load:function(e,t,i,n){let s=this,r=new Zt(s.manager);r.setPath(s.path),r.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(a){n?n(a):console.error(a),s.manager.itemError(e)}},i,n)},parse:function(e){let t=[];for(let i=0;i<e.length;i++){let n=kt.parse(e[i]);t.push(n)}return t}});function xh(e){We.call(this,e)}xh.prototype=Object.assign(Object.create(We.prototype),{constructor:xh,load:function(e,t,i,n){let s=this,r=[],o=new Ar;o.image=r;let a=new Zt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer");let l=0;function c(h){a.load(e[h],function(u){let f=s.parse(u,!0);r[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=ke),o.format=f.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let h=0,u=e.length;h<u;++h)c(h);else a.load(e,function(h){let u=s.parse(h,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let d=0;d<f;d++){r[d]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)r[d].mipmaps.push(u.mipmaps[d*u.mipmapCount+p]),r[d].format=u.format,r[d].width=u.width,r[d].height=u.height}}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=ke),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}});function yh(e){We.call(this,e)}yh.prototype=Object.assign(Object.create(We.prototype),{constructor:yh,load:function(e,t,i,n){let s=this,r=new bs,o=new Zt(this.manager);return o.setResponseType("arraybuffer"),o.setPath(this.path),o.load(e,function(a){let l=s.parse(a);l&&(l.image!==void 0?r.image=l.image:l.data!==void 0&&(r.image.width=l.width,r.image.height=l.height,r.image.data=l.data),r.wrapS=l.wrapS!==void 0?l.wrapS:St,r.wrapT=l.wrapT!==void 0?l.wrapT:St,r.magFilter=l.magFilter!==void 0?l.magFilter:ke,r.minFilter=l.minFilter!==void 0?l.minFilter:ke,r.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.format!==void 0&&(r.format=l.format),l.type!==void 0&&(r.type=l.type),l.mipmaps!==void 0&&(r.mipmaps=l.mipmaps,r.minFilter=Wa),l.mipmapCount===1&&(r.minFilter=ke),r.needsUpdate=!0,t&&t(r,l))},i,n),r}});function On(e){We.call(this,e)}On.prototype=Object.assign(Object.create(We.prototype),{constructor:On,load:function(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Fs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),Fs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(c){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),n&&n(c),s.manager.itemError(e),s.manager.itemEnd(e)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}});function oc(e){We.call(this,e)}oc.prototype=Object.assign(Object.create(We.prototype),{constructor:oc,load:function(e,t,i,n){let s=new on,r=new On(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let o=0;function a(l){r.load(e[l],function(c){s.images[l]=c,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let l=0;l<e.length;++l)a(l);return s}});function zr(e){We.call(this,e)}zr.prototype=Object.assign(Object.create(We.prototype),{constructor:zr,load:function(e,t,i,n){let s=new ze,r=new On(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o;let a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=a?gi:Ye,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}});function me(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(me.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)},getPoints:function(e){e===void 0&&(e=5);let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t},getLength:function(){let e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){let i=this.getLengths(),n=0,s=i.length,r;t?r=t:r=e*i[s-1];let o=0,a=s-1,l;for(;o<=a;)if(n=Math.floor(o+(a-o)/2),l=i[n]-r,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===r)return n/(s-1);let c=i[n],u=i[n+1]-c,f=(r-c)/u;return(n+f)/(s-1)},getTangent:function(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let r=this.getPoint(n),o=this.getPoint(s),a=t||(r.isVector2?new N:new P);return a.copy(o).sub(r).normalize(),a},getTangentAt:function(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)},computeFrenetFrames:function(e,t){let i=new P,n=[],s=[],r=[],o=new P,a=new ue;for(let f=0;f<=e;f++){let d=f/e;n[f]=this.getTangentAt(d,new P),n[f].normalize()}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(xe.clamp(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(a.makeRotationAxis(o,d))}r[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(xe.clamp(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let d=1;d<=e;d++)s[d].applyMatrix4(a.makeRotationAxis(n[d],f*d)),r[d].crossVectors(n[d],s[d])}return{tangents:n,normals:s,binormals:r}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function Kt(e,t,i,n,s,r,o,a){me.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=i||1,this.yRadius=n||1,this.aStartAngle=s||0,this.aEndAngle=r||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Kt.prototype=Object.create(me.prototype);Kt.prototype.constructor=Kt;Kt.prototype.isEllipseCurve=!0;Kt.prototype.getPoint=function(e,t){let i=t||new N,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+e*s,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=l-this.aY;a=u*c-f*h+this.aX,l=u*h+f*c+this.aY}return i.set(a,l)};Kt.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};Kt.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};Kt.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function Wr(e,t,i,n,s,r){Kt.call(this,e,t,i,i,n,s,r),this.type="ArcCurve"}Wr.prototype=Object.create(Kt.prototype);Wr.prototype.constructor=Wr;Wr.prototype.isArcCurve=!0;function Fc(){let e=0,t=0,i=0,n=0;function s(r,o,a,l){e=r,t=a,i=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return e+t*r+i*o+n*a}}}var Ko=new P,Ll=new Fc,Dl=new Fc,Rl=new Fc;function Dt(e,t,i,n){me.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=i||"centripetal",this.tension=n||.5}Dt.prototype=Object.create(me.prototype);Dt.prototype.constructor=Dt;Dt.prototype.isCatmullRomCurve3=!0;Dt.prototype.getPoint=function(e,t){let i=t||new P,n=this.points,s=n.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),a=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:a===0&&o===s-1&&(o=s-2,a=1);let l,c,h,u;if(this.closed||o>0?l=n[(o-1)%s]:(Ko.subVectors(n[0],n[1]).add(n[0]),l=Ko),c=n[o%s],h=n[(o+1)%s],this.closed||o+2<s?u=n[(o+2)%s]:(Ko.subVectors(n[s-1],n[s-2]).add(n[s-1]),u=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,d=Math.pow(l.distanceToSquared(c),f),p=Math.pow(c.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f);p<1e-4&&(p=1),d<1e-4&&(d=p),y<1e-4&&(y=p),Ll.initNonuniformCatmullRom(l.x,c.x,h.x,u.x,d,p,y),Dl.initNonuniformCatmullRom(l.y,c.y,h.y,u.y,d,p,y),Rl.initNonuniformCatmullRom(l.z,c.z,h.z,u.z,d,p,y)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(l.x,c.x,h.x,u.x,this.tension),Dl.initCatmullRom(l.y,c.y,h.y,u.y,this.tension),Rl.initCatmullRom(l.z,c.z,h.z,u.z,this.tension));return i.set(Ll.calc(a),Dl.calc(a),Rl.calc(a)),i};Dt.prototype.copy=function(e){me.prototype.copy.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};Dt.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};Dt.prototype.fromJSON=function(e){me.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function bh(e,t,i,n,s){let r=(n-t)*.5,o=(s-i)*.5,a=e*e,l=e*a;return(2*i-2*n+r+o)*l+(-3*i+3*n-2*r-o)*a+r*e+i}function P0(e,t){let i=1-e;return i*i*t}function A0(e,t){return 2*(1-e)*e*t}function L0(e,t){return e*e*t}function mr(e,t,i,n){return P0(e,t)+A0(e,i)+L0(e,n)}function D0(e,t){let i=1-e;return i*i*i*t}function R0(e,t){let i=1-e;return 3*i*i*e*t}function I0(e,t){return 3*(1-e)*e*e*t}function B0(e,t){return e*e*e*t}function gr(e,t,i,n,s){return D0(e,t)+R0(e,i)+I0(e,n)+B0(e,s)}function xi(e,t,i,n){me.call(this),this.type="CubicBezierCurve",this.v0=e||new N,this.v1=t||new N,this.v2=i||new N,this.v3=n||new N}xi.prototype=Object.create(me.prototype);xi.prototype.constructor=xi;xi.prototype.isCubicBezierCurve=!0;xi.prototype.getPoint=function(e,t){let i=t||new N,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(gr(e,n.x,s.x,r.x,o.x),gr(e,n.y,s.y,r.y,o.y)),i};xi.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};xi.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};xi.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Ii(e,t,i,n){me.call(this),this.type="CubicBezierCurve3",this.v0=e||new P,this.v1=t||new P,this.v2=i||new P,this.v3=n||new P}Ii.prototype=Object.create(me.prototype);Ii.prototype.constructor=Ii;Ii.prototype.isCubicBezierCurve3=!0;Ii.prototype.getPoint=function(e,t){let i=t||new P,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(gr(e,n.x,s.x,r.x,o.x),gr(e,n.y,s.y,r.y,o.y),gr(e,n.z,s.z,r.z,o.z)),i};Ii.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};Ii.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};Ii.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Nt(e,t){me.call(this),this.type="LineCurve",this.v1=e||new N,this.v2=t||new N}Nt.prototype=Object.create(me.prototype);Nt.prototype.constructor=Nt;Nt.prototype.isLineCurve=!0;Nt.prototype.getPoint=function(e,t){let i=t||new N;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i};Nt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Nt.prototype.getTangent=function(e,t){let i=t||new N;return i.copy(this.v2).sub(this.v1).normalize(),i};Nt.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Nt.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Nt.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function yi(e,t){me.call(this),this.type="LineCurve3",this.v1=e||new P,this.v2=t||new P}yi.prototype=Object.create(me.prototype);yi.prototype.constructor=yi;yi.prototype.isLineCurve3=!0;yi.prototype.getPoint=function(e,t){let i=t||new P;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i};yi.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};yi.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};yi.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};yi.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function bi(e,t,i){me.call(this),this.type="QuadraticBezierCurve",this.v0=e||new N,this.v1=t||new N,this.v2=i||new N}bi.prototype=Object.create(me.prototype);bi.prototype.constructor=bi;bi.prototype.isQuadraticBezierCurve=!0;bi.prototype.getPoint=function(e,t){let i=t||new N,n=this.v0,s=this.v1,r=this.v2;return i.set(mr(e,n.x,s.x,r.x),mr(e,n.y,s.y,r.y)),i};bi.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};bi.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};bi.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Bi(e,t,i){me.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new P,this.v1=t||new P,this.v2=i||new P}Bi.prototype=Object.create(me.prototype);Bi.prototype.constructor=Bi;Bi.prototype.isQuadraticBezierCurve3=!0;Bi.prototype.getPoint=function(e,t){let i=t||new P,n=this.v0,s=this.v1,r=this.v2;return i.set(mr(e,n.x,s.x,r.x),mr(e,n.y,s.y,r.y),mr(e,n.z,s.z,r.z)),i};Bi.prototype.copy=function(e){return me.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Bi.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Bi.prototype.fromJSON=function(e){return me.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function wi(e){me.call(this),this.type="SplineCurve",this.points=e||[]}wi.prototype=Object.create(me.prototype);wi.prototype.constructor=wi;wi.prototype.isSplineCurve=!0;wi.prototype.getPoint=function(e,t){let i=t||new N,n=this.points,s=(n.length-1)*e,r=Math.floor(s),o=s-r,a=n[r===0?r:r-1],l=n[r],c=n[r>n.length-2?n.length-1:r+1],h=n[r>n.length-3?n.length-1:r+2];return i.set(bh(o,a.x,l.x,c.x,h.x),bh(o,a.y,l.y,c.y,h.y)),i};wi.prototype.copy=function(e){me.prototype.copy.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this};wi.prototype.toJSON=function(){let e=me.prototype.toJSON.call(this);e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e};wi.prototype.fromJSON=function(e){me.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new N().fromArray(n))}return this};var ac=Object.freeze({__proto__:null,ArcCurve:Wr,CatmullRomCurve3:Dt,CubicBezierCurve:xi,CubicBezierCurve3:Ii,EllipseCurve:Kt,LineCurve:Nt,LineCurve3:yi,QuadraticBezierCurve:bi,QuadraticBezierCurve3:Bi,SplineCurve:wi});function Ki(){me.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Ki.prototype=Object.assign(Object.create(me.prototype),{constructor:Ki,add:function(e){this.curves.push(e)},closePath:function(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Nt(t,e))},getPoint:function(e){let t=e*this.getLength(),i=this.getCurveLengths(),n=0;for(;n<i.length;){if(i[n]>=t){let s=i[n]-t,r=this.curves[n],o=r.getLength(),a=o===0?0:1-s/o;return r.getPointAt(a)}n++}return null},getLength:function(){let e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let r=s[n],o=r&&r.isEllipseCurve?e*2:r&&(r.isLineCurve||r.isLineCurve3)?1:r&&r.isSplineCurve?e*r.points.length:e,a=r.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){me.prototype.copy.call(this,e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){let e=me.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e},fromJSON:function(e){me.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ac[n.type]().fromJSON(n))}return this}});function fi(e){Ki.call(this),this.type="Path",this.currentPoint=new N,e&&this.setFromPoints(e)}fi.prototype=Object.assign(Object.create(Ki.prototype),{constructor:fi,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){let i=new Nt(this.currentPoint.clone(),new N(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,i,n){let s=new bi(this.currentPoint.clone(),new N(e,t),new N(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this},bezierCurveTo:function(e,t,i,n,s,r){let o=new xi(this.currentPoint.clone(),new N(e,t),new N(i,n),new N(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this},splineThru:function(e){let t=[this.currentPoint.clone()].concat(e),i=new wi(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,i,n,s,r){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,s,r),this},absarc:function(e,t,i,n,s,r){return this.absellipse(e,t,i,i,n,s,r),this},ellipse:function(e,t,i,n,s,r,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,s,r,o,a),this},absellipse:function(e,t,i,n,s,r,o,a){let l=new Kt(e,t,i,n,s,r,o,a);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this},copy:function(e){return Ki.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){let e=Ki.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Ki.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function Tn(e){fi.call(this,e),this.uuid=xe.generateUUID(),this.type="Shape",this.holes=[]}Tn.prototype=Object.assign(Object.create(fi.prototype),{constructor:Tn,getPointsHoles:function(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){fi.prototype.copy.call(this,e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this},toJSON:function(){let e=fi.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e},fromJSON:function(e){fi.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new fi().fromJSON(n))}return this}});function Qe(e,t){ne.call(this),this.type="Light",this.color=new $(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}Qe.prototype=Object.assign(Object.create(ne.prototype),{constructor:Qe,isLight:!0,copy:function(e){return ne.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){let t=ne.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function lc(e,t,i){Qe.call(this,e,i),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(ne.DefaultUp),this.updateMatrix(),this.groundColor=new $(t)}lc.prototype=Object.assign(Object.create(Qe.prototype),{constructor:lc,isHemisphereLight:!0,copy:function(e){return Qe.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function Ui(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new N(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new N(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}Object.assign(Ui.prototype,{_projScreenMatrix:new ue,_lightPositionWorld:new P,_lookTarget:new P,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){let t=this.camera,i=this.matrix,n=this._projScreenMatrix,s=this._lookTarget,r=this._lightPositionWorld;r.setFromMatrixPosition(e.matrixWorld),t.position.copy(r),s.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s),t.updateMatrixWorld(),n.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function cc(){Ui.call(this,new tt(50,1,.5,500))}cc.prototype=Object.assign(Object.create(Ui.prototype),{constructor:cc,isSpotLightShadow:!0,updateMatrices:function(e){let t=this.camera,i=xe.RAD2DEG*2*e.angle,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),Ui.prototype.updateMatrices.call(this,e)}});function jr(e,t,i,n,s,r){Qe.call(this,e,t),this.type="SpotLight",this.position.copy(ne.DefaultUp),this.updateMatrix(),this.target=new ne,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=i!==void 0?i:0,this.angle=n!==void 0?n:Math.PI/3,this.penumbra=s!==void 0?s:0,this.decay=r!==void 0?r:1,this.shadow=new cc}jr.prototype=Object.assign(Object.create(Qe.prototype),{constructor:jr,isSpotLight:!0,copy:function(e){return Qe.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function uc(){Ui.call(this,new tt(90,1,.5,500)),this._frameExtents=new N(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}uc.prototype=Object.assign(Object.create(Ui.prototype),{constructor:uc,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);let i=this.camera,n=this.matrix,s=this._lightPositionWorld,r=this._lookTarget,o=this._projScreenMatrix;s.setFromMatrixPosition(e.matrixWorld),i.position.copy(s),r.copy(i.position),r.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(r),i.updateMatrixWorld(),n.makeTranslation(-s.x,-s.y,-s.z),o.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function ks(e,t,i,n){Qe.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(s){this.intensity=s/(4*Math.PI)}}),this.distance=i!==void 0?i:0,this.decay=n!==void 0?n:1,this.shadow=new uc}ks.prototype=Object.assign(Object.create(Qe.prototype),{constructor:ks,isPointLight:!0,copy:function(e){return Qe.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function li(e,t,i,n,s,r){Di.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=i!==void 0?i:1,this.bottom=n!==void 0?n:-1,this.near=s!==void 0?s:.1,this.far=r!==void 0?r:2e3,this.updateProjectionMatrix()}li.prototype=Object.assign(Object.create(Di.prototype),{constructor:li,isOrthographicCamera:!0,copy:function(e,t){return Di.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,r=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){let t=ne.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function hc(){Ui.call(this,new li(-5,5,5,-5,.5,500))}hc.prototype=Object.assign(Object.create(Ui.prototype),{constructor:hc,isDirectionalLightShadow:!0,updateMatrices:function(e){Ui.prototype.updateMatrices.call(this,e)}});function Fn(e,t){Qe.call(this,e,t),this.type="DirectionalLight",this.position.copy(ne.DefaultUp),this.updateMatrix(),this.target=new ne,this.shadow=new hc}Fn.prototype=Object.assign(Object.create(Qe.prototype),{constructor:Fn,isDirectionalLight:!0,copy:function(e){return Qe.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function kn(e,t){Qe.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}kn.prototype=Object.assign(Object.create(Qe.prototype),{constructor:kn,isAmbientLight:!0});function dc(e,t,i,n){Qe.call(this,e,t),this.type="RectAreaLight",this.width=i!==void 0?i:10,this.height=n!==void 0?n:10}dc.prototype=Object.assign(Object.create(Qe.prototype),{constructor:dc,isRectAreaLight:!0,copy:function(e){return Qe.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){let t=Qe.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});function kc(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}Object.assign(kc.prototype,{isSphericalHarmonics3:!0,set:function(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this},zero:function(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this},getAt:function(e,t){let i=e.x,n=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*n),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*i),t.addScaledVector(r[4],1.092548*(i*n)),t.addScaledVector(r[5],1.092548*(n*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(i*s)),t.addScaledVector(r[8],.546274*(i*i-n*n)),t},getIrradianceAt:function(e,t){let i=e.x,n=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*n),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*i),t.addScaledVector(r[4],2*.429043*i*n),t.addScaledVector(r[5],2*.429043*n*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*i*s),t.addScaledVector(r[8],.429043*(i*i-n*n)),t},add:function(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this},addScaledSH:function(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this},scale:function(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this},lerp:function(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this},equals:function(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0},copy:function(e){return this.set(e.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(e,t){t===void 0&&(t=0);let i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);let i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}});Object.assign(kc,{getBasisAt:function(e,t){let i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}});function ri(e,t){Qe.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new kc}ri.prototype=Object.assign(Object.create(Qe.prototype),{constructor:ri,isLightProbe:!0,copy:function(e){return Qe.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){let t=Qe.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function fc(e){We.call(this,e),this.textures={}}fc.prototype=Object.assign(Object.create(We.prototype),{constructor:fc,load:function(e,t,i,n){let s=this,r=new Zt(s.manager);r.setPath(s.path),r.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(a){n?n(a):console.error(a),s.manager.itemError(e)}},i,n)},parse:function(e){let t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let n=new S0[e.type];if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=new $().setHex(e.sheen)),e.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular.setHex(e.specular),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==1&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(n.skinning=e.skinning),e.morphTargets!==void 0&&(n.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(n.morphNormals=e.morphNormals),e.dithering!==void 0&&(n.dithering=e.dithering),e.vertexTangents!==void 0&&(n.vertexTangents=e.vertexTangents),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let r=e.uniforms[s];switch(n.uniforms[s]={},r.type){case"t":n.uniforms[s].value=i(r.value);break;case"c":n.uniforms[s].value=new $().setHex(r.value);break;case"v2":n.uniforms[s].value=new N().fromArray(r.value);break;case"v3":n.uniforms[s].value=new P().fromArray(r.value);break;case"v4":n.uniforms[s].value=new Oe().fromArray(r.value);break;case"m3":n.uniforms[s].value=new yt().fromArray(r.value);case"m4":n.uniforms[s].value=new ue().fromArray(r.value);break;default:n.uniforms[s].value=r.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(let s in e.extensions)n.extensions[s]=e.extensions[s];if(e.shading!==void 0&&(n.flatShading=e.shading===1),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new N().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new N().fromArray(e.clearcoatNormalScale)),n},setTextures:function(e){return this.textures=e,this}});var js={decodeText:function(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function Oa(){ae.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Oa.prototype=Object.assign(Object.create(ae.prototype),{constructor:Oa,isInstancedBufferGeometry:!0,copy:function(e){return ae.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let e=ae.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function pc(e,t,i,n){typeof i=="number"&&(n=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),_e.call(this,e,t,i),this.meshPerAttribute=n||1}pc.prototype=Object.assign(Object.create(_e.prototype),{constructor:pc,isInstancedBufferAttribute:!0,copy:function(e){return _e.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){let e=_e.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function mc(e){We.call(this,e)}mc.prototype=Object.assign(Object.create(We.prototype),{constructor:mc,load:function(e,t,i,n){let s=this,r=new Zt(s.manager);r.setPath(s.path),r.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(a){n?n(a):console.error(a),s.manager.itemError(e)}},i,n)},parse:function(e){let t={},i={};function n(f,d){if(t[d]!==void 0)return t[d];let y=f.interleavedBuffers[d],v=s(f,y.buffer),m=new Jo[y.type](v),g=new jt(m,y.stride);return g.uuid=y.uuid,t[d]=g,g}function s(f,d){if(i[d]!==void 0)return i[d];let y=f.arrayBuffers[d],v=new Uint32Array(y).buffer;return i[d]=v,v}let r=e.isInstancedBufferGeometry?new Oa:new ae,o=e.data.index;if(o!==void 0){let f=new Jo[o.type](o.array);r.setIndex(new _e(f,1))}let a=e.data.attributes;for(let f in a){let d=a[f],p;if(d.isInterleavedBufferAttribute){let y=n(e.data,d.data);p=new Dn(y,d.itemSize,d.offset,d.normalized)}else{let y=new Jo[d.type](d.array),v=d.isInstancedBufferAttribute?pc:_e;p=new v(y,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),r.setAttribute(f,p)}let l=e.data.morphAttributes;if(l)for(let f in l){let d=l[f],p=[];for(let y=0,v=d.length;y<v;y++){let m=d[y],g;if(m.isInterleavedBufferAttribute){let E=n(e.data,m.data);g=new Dn(E,m.itemSize,m.offset,m.normalized)}else{let E=new Jo[m.type](m.array);g=new _e(E,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),p.push(g)}r.morphAttributes[f]=p}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,d=h.length;f!==d;++f){let p=h[f];r.addGroup(p.start,p.count,p.materialIndex)}let u=e.data.boundingSphere;if(u!==void 0){let f=new P;u.center!==void 0&&f.fromArray(u.center),r.boundingSphere=new ki(f,u.radius)}return e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}});var Jo={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gc(e){We.call(this,e)}gc.prototype=Object.assign(Object.create(We.prototype),{constructor:gc,load:function(e,t,i,n){let s=this,r=this.path===""?js.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let o=new Zt(s.manager);o.setPath(this.path),o.load(e,function(a){let l=null;try{l=JSON.parse(a)}catch(h){n!==void 0&&n(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}let c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},i,n)},parse:function(e,t){let i=this.parseShape(e.shapes),n=this.parseGeometries(e.geometries,i),s=this.parseImages(e.images,function(){t!==void 0&&t(a)}),r=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,r),a=this.parseObject(e.object,n,o);return e.animations&&(a.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(a),a},parseShape:function(e){let t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){let s=new Tn().fromJSON(e[i]);t[s.uuid]=s}return t},parseGeometries:function(e,t){let i={},n;if(e!==void 0){let s=new mc;for(let r=0,o=e.length;r<o;r++){let a,l=e[r];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new At[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":a=new At[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":a=new At[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":a=new At[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":a=new At[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":a=new At[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":a=new At[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":a=new At[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":a=new At[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":a=new At[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":a=new At[l.type](new ac[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":a=new At[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":a=new At[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":n=[];for(let h=0,u=l.shapes.length;h<u;h++){let f=t[l.shapes[h]];n.push(f)}a=new At[l.type](n,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":n=[];for(let h=0,u=l.shapes.length;h<u;h++){let f=t[l.shapes[h]];n.push(f)}let c=l.options.extrudePath;c!==void 0&&(l.options.extrudePath=new ac[c.type]().fromJSON(c)),a=new At[l.type](n,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":a=s.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),a.isBufferGeometry===!0&&l.userData!==void 0&&(a.userData=l.userData),i[l.uuid]=a}}return i},parseMaterials:function(e,t){let i={},n={};if(e!==void 0){let s=new fc;s.setTextures(t);for(let r=0,o=e.length;r<o;r++){let a=e[r];if(a.type==="MultiMaterial"){let l=[];for(let c=0;c<a.materials.length;c++){let h=a.materials[c];i[h.uuid]===void 0&&(i[h.uuid]=s.parse(h)),l.push(i[h.uuid])}n[a.uuid]=l}else i[a.uuid]===void 0&&(i[a.uuid]=s.parse(a)),n[a.uuid]=i[a.uuid]}}return n},parseAnimations:function(e){let t=[];for(let i=0;i<e.length;i++){let n=e[i],s=kt.parse(n);n.uuid!==void 0&&(s.uuid=n.uuid),t.push(s)}return t},parseImages:function(e,t){let i=this,n={},s;function r(o){return i.manager.itemStart(o),s.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}if(e!==void 0&&e.length>0){let o=new Sd(t);s=new On(o),s.setCrossOrigin(this.crossOrigin);for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.url;if(Array.isArray(h)){n[c.uuid]=[];for(let u=0,f=h.length;u<f;u++){let d=h[u],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(d)?d:i.resourcePath+d;n[c.uuid].push(r(p))}}else{let u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url)?c.url:i.resourcePath+c.url;n[c.uuid]=r(u)}}}return n},parseTextures:function(e,t){function i(s,r){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),r[s])}let n={};if(e!==void 0)for(let s=0,r=e.length;s<r;s++){let o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let a;Array.isArray(t[o.image])?a=new on(t[o.image]):a=new ze(t[o.image]),a.needsUpdate=!0,a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.mapping!==void 0&&(a.mapping=i(o.mapping,U0)),o.offset!==void 0&&a.offset.fromArray(o.offset),o.repeat!==void 0&&a.repeat.fromArray(o.repeat),o.center!==void 0&&a.center.fromArray(o.center),o.rotation!==void 0&&(a.rotation=o.rotation),o.wrap!==void 0&&(a.wrapS=i(o.wrap[0],wh),a.wrapT=i(o.wrap[1],wh)),o.format!==void 0&&(a.format=o.format),o.type!==void 0&&(a.type=o.type),o.encoding!==void 0&&(a.encoding=o.encoding),o.minFilter!==void 0&&(a.minFilter=i(o.minFilter,_h)),o.magFilter!==void 0&&(a.magFilter=i(o.magFilter,_h)),o.anisotropy!==void 0&&(a.anisotropy=o.anisotropy),o.flipY!==void 0&&(a.flipY=o.flipY),o.premultiplyAlpha!==void 0&&(a.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(a.unpackAlignment=o.unpackAlignment),n[o.uuid]=a}return n},parseObject:function(e,t,i){let n;function s(l){return t[l]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",l),t[l]}function r(l){if(l!==void 0){if(Array.isArray(l)){let c=[];for(let h=0,u=l.length;h<u;h++){let f=l[h];i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),c.push(i[f])}return c}return i[l]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",l),i[l]}}let o,a;switch(e.type){case"Scene":n=new rn,e.background!==void 0&&Number.isInteger(e.background)&&(n.background=new $(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?n.fog=new Yl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(n.fog=new Sr(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":n=new tt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(n.focus=e.focus),e.zoom!==void 0&&(n.zoom=e.zoom),e.filmGauge!==void 0&&(n.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(n.filmOffset=e.filmOffset),e.view!==void 0&&(n.view=Object.assign({},e.view));break;case"OrthographicCamera":n=new li(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(n.zoom=e.zoom),e.view!==void 0&&(n.view=Object.assign({},e.view));break;case"AmbientLight":n=new kn(e.color,e.intensity);break;case"DirectionalLight":n=new Fn(e.color,e.intensity);break;case"PointLight":n=new ks(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":n=new dc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":n=new jr(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":n=new lc(e.color,e.groundColor,e.intensity);break;case"LightProbe":n=new ri().fromJSON(e);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":o=s(e.geometry),a=r(e.material),n=new Ge(o,a);break;case"InstancedMesh":o=s(e.geometry),a=r(e.material);let l=e.count,c=e.instanceMatrix;n=new ws(o,a,l),n.instanceMatrix=new _e(new Float32Array(c.array),16);break;case"LOD":n=new ma;break;case"Line":n=new Ut(s(e.geometry),r(e.material),e.mode);break;case"LineLoop":n=new Zl(s(e.geometry),r(e.material));break;case"LineSegments":n=new gt(s(e.geometry),r(e.material));break;case"PointCloud":case"Points":n=new Pr(s(e.geometry),r(e.material));break;case"Sprite":n=new Ql(r(e.material));break;case"Group":n=new Lt;break;default:n=new ne}if(n.uuid=e.uuid,e.name!==void 0&&(n.name=e.name),e.matrix!==void 0?(n.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(n.matrixAutoUpdate=e.matrixAutoUpdate),n.matrixAutoUpdate&&n.matrix.decompose(n.position,n.quaternion,n.scale)):(e.position!==void 0&&n.position.fromArray(e.position),e.rotation!==void 0&&n.rotation.fromArray(e.rotation),e.quaternion!==void 0&&n.quaternion.fromArray(e.quaternion),e.scale!==void 0&&n.scale.fromArray(e.scale)),e.castShadow!==void 0&&(n.castShadow=e.castShadow),e.receiveShadow!==void 0&&(n.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(n.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(n.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(n.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&n.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(n.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(n.visible=e.visible),e.frustumCulled!==void 0&&(n.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(n.renderOrder=e.renderOrder),e.userData!==void 0&&(n.userData=e.userData),e.layers!==void 0&&(n.layers.mask=e.layers),e.children!==void 0){let l=e.children;for(let c=0;c<l.length;c++)n.add(this.parseObject(l[c],t,i))}if(e.type==="LOD"){e.autoUpdate!==void 0&&(n.autoUpdate=e.autoUpdate);let l=e.levels;for(let c=0;c<l.length;c++){let h=l[c],u=n.getObjectByProperty("uuid",h.object);u!==void 0&&n.addLevel(u,h.distance)}}return n}});var U0={UVMapping:Ec,CubeReflectionMapping:Tc,CubeRefractionMapping:Cc,EquirectangularReflectionMapping:za,EquirectangularRefractionMapping:Pc,CubeUVReflectionMapping:Kr,CubeUVRefractionMapping:Ac},wh={RepeatWrapping:It,ClampToEdgeWrapping:St,MirroredRepeatWrapping:ca},_h={NearestFilter:it,NearestMipmapNearestFilter:vr,NearestMipmapLinearFilter:kl,LinearFilter:ke,LinearMipmapNearestFilter:$h,LinearMipmapLinearFilter:Wa};function Mh(e){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),We.call(this,e),this.options={premultiplyAlpha:"none"}}Mh.prototype=Object.assign(Object.create(We.prototype),{constructor:Mh,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Fs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;fetch(e).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,s.options)}).then(function(o){Fs.add(e,o),t&&t(o),s.manager.itemEnd(e)}).catch(function(o){n&&n(o),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}});function Ed(){this.type="ShapePath",this.color=new $,this.subPaths=[],this.currentPath=null}Object.assign(Ed.prototype,{moveTo:function(e,t){return this.currentPath=new fi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this},bezierCurveTo:function(e,t,i,n,s,r){return this.currentPath.bezierCurveTo(e,t,i,n,s,r),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function i(m){let g=[];for(let E=0,M=m.length;E<M;E++){let C=m[E],L=new Tn;L.curves=C.curves,g.push(L)}return g}function n(m,g){let E=g.length,M=!1;for(let C=E-1,L=0;L<E;C=L++){let B=g[C],G=g[L],O=G.x-B.x,x=G.y-B.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(B=g[L],O=-O,G=g[C],x=-x),m.y<B.y||m.y>G.y)continue;if(m.y===B.y){if(m.x===B.x)return!0}else{let b=x*(m.x-B.x)-O*(m.y-B.y);if(b===0)return!0;if(b<0)continue;M=!M}}else{if(m.y!==B.y)continue;if(G.x<=m.x&&m.x<=B.x||B.x<=m.x&&m.x<=G.x)return!0}}return M}let s=en.isClockWise,r=this.subPaths;if(r.length===0)return[];if(t===!0)return i(r);let o,a,l,c=[];if(r.length===1)return a=r[0],l=new Tn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;let u=[],f=[],d=[],p=0,y;f[p]=void 0,d[p]=[];for(let m=0,g=r.length;m<g;m++)a=r[m],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!h&&f[p]&&p++,f[p]={s:new Tn,p:y},f[p].s.curves=a.curves,h&&p++,d[p]=[]):d[p].push({h:a,p:y[0]});if(!f[0])return i(r);if(f.length>1){let m=!1,g=[];for(let E=0,M=f.length;E<M;E++)u[E]=[];for(let E=0,M=f.length;E<M;E++){let C=d[E];for(let L=0;L<C.length;L++){let B=C[L],G=!0;for(let O=0;O<f.length;O++)n(B.p,f[O].p)&&(E!==O&&g.push({froms:E,tos:O,hole:L}),G?(G=!1,u[O].push(B)):m=!0);G&&u[E].push(B)}}g.length>0&&(m||(d=u))}let v;for(let m=0,g=f.length;m<g;m++){l=f[m].s,c.push(l),v=d[m];for(let E=0,M=v.length;E<M;E++)l.holes.push(v[E].h)}return c}});function Td(e){this.type="Font",this.data=e}Object.assign(Td.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);let i=[],n=O0(e,t,this.data);for(let s=0,r=n.length;s<r;s++)Array.prototype.push.apply(i,n[s].toShapes());return i}});function O0(e,t,i){let n=Array.from?Array.from(e):String(e).split(""),s=t/i.resolution,r=(i.boundingBox.yMax-i.boundingBox.yMin+i.underlineThickness)*s,o=[],a=0,l=0;for(let c=0;c<n.length;c++){let h=n[c];if(h===`
`)a=0,l-=r;else{let u=F0(h,s,a,l,i);a+=u.offsetX,o.push(u.path)}}return o}function F0(e,t,i,n,s){let r=s.glyphs[e]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+e+'" does not exists in font family '+s.familyName+".");return}let o=new Ed,a,l,c,h,u,f,d,p;if(r.o){let y=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let v=0,m=y.length;v<m;)switch(y[v++]){case"m":a=y[v++]*t+i,l=y[v++]*t+n,o.moveTo(a,l);break;case"l":a=y[v++]*t+i,l=y[v++]*t+n,o.lineTo(a,l);break;case"q":c=y[v++]*t+i,h=y[v++]*t+n,u=y[v++]*t+i,f=y[v++]*t+n,o.quadraticCurveTo(u,f,c,h);break;case"b":c=y[v++]*t+i,h=y[v++]*t+n,u=y[v++]*t+i,f=y[v++]*t+n,d=y[v++]*t+i,p=y[v++]*t+n,o.bezierCurveTo(u,f,d,p,c,h);break}}return{offsetX:r.ha*t,path:o}}function Sh(e){We.call(this,e)}Sh.prototype=Object.assign(Object.create(We.prototype),{constructor:Sh,load:function(e,t,i,n){let s=this,r=new Zt(this.manager);r.setPath(this.path),r.load(e,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}let l=s.parse(a);t&&t(l)},i,n)},parse:function(e){return new Td(e)}});var $o,Cd={getContext:function(){return $o===void 0&&($o=new(window.AudioContext||window.webkitAudioContext)),$o},setContext:function(e){$o=e}};function vc(e){We.call(this,e)}vc.prototype=Object.assign(Object.create(We.prototype),{constructor:vc,load:function(e,t,i,n){let s=this,r=new Zt(s.manager);r.setResponseType("arraybuffer"),r.setPath(s.path),r.load(e,function(o){try{let a=o.slice(0);Cd.getContext().decodeAudioData(a,function(c){t(c)})}catch(a){n?n(a):console.error(a),s.manager.itemError(e)}},i,n)}});function Eh(e,t,i){ri.call(this,void 0,i);let n=new $().set(e),s=new $().set(t),r=new P(n.r,n.g,n.b),o=new P(s.r,s.g,s.b),a=Math.sqrt(Math.PI),l=a*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(r).sub(o).multiplyScalar(l)}Eh.prototype=Object.assign(Object.create(ri.prototype),{constructor:Eh,isHemisphereLightProbe:!0,copy:function(e){return ri.prototype.copy.call(this,e),this},toJSON:function(e){return ri.prototype.toJSON.call(this,e)}});function Th(e,t){ri.call(this,void 0,t);let i=new $().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}Th.prototype=Object.assign(Object.create(ri.prototype),{constructor:Th,isAmbientLightProbe:!0,copy:function(e){return ri.prototype.copy.call(this,e),this},toJSON:function(e){return ri.prototype.toJSON.call(this,e)}});var Ch=new ue,Ph=new ue;function k0(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new tt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new tt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(k0.prototype,{update:function(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;let n=e.projectionMatrix.clone(),s=t.eyeSep/2,r=s*t.near/t.focus,o=t.near*Math.tan(xe.DEG2RAD*t.fov*.5)/t.zoom,a,l;Ph.elements[12]=-s,Ch.elements[12]=s,a=-o*t.aspect+r,l=o*t.aspect+r,n.elements[0]=2*t.near/(l-a),n.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(n),a=-o*t.aspect-r,l=o*t.aspect-r,n.elements[0]=2*t.near/(l-a),n.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(n)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ph),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Ch)}});function Xs(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Xs.prototype,{start:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=(typeof performance>"u"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}});var wn=new P,Ah=new Ie,H0=new P,_n=new P;function Lh(){ne.call(this),this.type="AudioListener",this.context=Cd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Xs}Lh.prototype=Object.assign(Object.create(ne.prototype),{constructor:Lh,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this},updateMatrixWorld:function(e){ne.prototype.updateMatrixWorld.call(this,e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(wn,Ah,H0),_n.set(0,0,-1).applyQuaternion(Ah),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(wn.x,n),t.positionY.linearRampToValueAtTime(wn.y,n),t.positionZ.linearRampToValueAtTime(wn.z,n),t.forwardX.linearRampToValueAtTime(_n.x,n),t.forwardY.linearRampToValueAtTime(_n.y,n),t.forwardZ.linearRampToValueAtTime(_n.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(wn.x,wn.y,wn.z),t.setOrientation(_n.x,_n.y,_n.z,i.x,i.y,i.z)}});function Xr(e){ne.call(this),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}Xr.prototype=Object.assign(Object.create(ne.prototype),{constructor:Xr,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setMediaElementSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this},setMediaStreamSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},setDetune:function(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(e){return this.loopStart=e,this},setLoopEnd:function(e){return this.loopEnd=e,this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}});var Mn=new P,Dh=new Ie,G0=new P,Sn=new P;function Rh(e){Xr.call(this,e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}Rh.prototype=Object.assign(Object.create(Xr.prototype),{constructor:Rh,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){return this.panner.refDistance=e,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){return this.panner.rolloffFactor=e,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){return this.panner.distanceModel=e,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){return this.panner.maxDistance=e,this},setDirectionalCone:function(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this},updateMatrixWorld:function(e){if(ne.prototype.updateMatrixWorld.call(this,e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Mn,Dh,G0),Sn.set(0,0,1).applyQuaternion(Dh);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Mn.x,i),t.positionY.linearRampToValueAtTime(Mn.y,i),t.positionZ.linearRampToValueAtTime(Mn.z,i),t.orientationX.linearRampToValueAtTime(Sn.x,i),t.orientationY.linearRampToValueAtTime(Sn.y,i),t.orientationZ.linearRampToValueAtTime(Sn.z,i)}else t.setPosition(Mn.x,Mn.y,Mn.z),t.setOrientation(Sn.x,Sn.y,Sn.z)}});function Pd(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(Pd.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}});function Ad(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Ad.prototype,{accumulate:function(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)i[s+o]=i[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=r},accumulateAdditive:function(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e},apply:function(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let a=t*this._origIndex;this._mixBufferRegion(i,n,a,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let a=t,l=t+t;a!==l;++a)if(i[a]!==i[a+t]){o.setValue(i,n);break}},saveOriginalState:function(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]},_select:function(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]},_slerp:function(e,t,i,n){Ie.slerpFlat(e,t,e,t,e,i,n)},_slerpAdditive:function(e,t,i,n,s){let r=this._workIndex*s;Ie.multiplyQuaternionsFlat(e,r,e,t,e,i),Ie.slerpFlat(e,t,e,t,e,r,n)},_lerp:function(e,t,i,n,s){let r=1-n;for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]*r+e[i+o]*n}},_lerpAdditive:function(e,t,i,n,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[i+r]*n}}});var Hc="\\[\\]\\.:\\/",N0=new RegExp("["+Hc+"]","g"),Gc="[^"+Hc+"]",V0="[^"+Hc.replace("\\.","")+"]",z0=/((?:WC+[\/:])*)/.source.replace("WC",Gc),W0=/(WCOD+)?/.source.replace("WCOD",V0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),q0=new RegExp("^"+z0+W0+j0+X0+"$"),Y0=["material","materials","bones"];function Ld(e,t,i){let n=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}Object.assign(Ld.prototype,{getValue:function(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)},setValue:function(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)},bind:function(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()},unbind:function(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}});function mt(e,t,i){this.path=t,this.parsedPath=i||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(mt,{Composite:Ld,create:function(e,t,i){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,i):new mt(e,t,i)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(N0,"")},parseTrackName:function(e){let t=q0.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Y0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}});Object.assign(mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,i){t[i]=this.node[this.propertyName]},function(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[i++]=n[s]},function(t,i){t[i]=this.resolvedProperty[this.propertyIndex]},function(t,i){this.resolvedProperty.toArray(t,i)}],SetterByBindingTypeAndVersioning:[[function(t,i){this.targetObject[this.propertyName]=t[i]},function(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0},function(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++]},function(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++];this.targetObject.needsUpdate=!0},function(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,i){this.resolvedProperty[this.propertyIndex]=t[i]},function(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0},function(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,i){this.resolvedProperty.fromArray(t,i)},function(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0},function(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,i){this.bind(),this.getValue(t,i)},setValue:function(t,i){this.bind(),this.setValue(t,i)},bind:function(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[n];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(mt.prototype,{_getValue_unbound:mt.prototype.getValue,_setValue_unbound:mt.prototype.setValue});function Q0(){this.uuid=xe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(Q0.prototype,{isAnimationObjectGroup:!0,add:function(){let e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,s=this._bindings,r=s.length,o,a=e.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){let u=arguments[c],f=u.uuid,d=t[f];if(d===void 0){d=a++,t[f]=d,e.push(u);for(let p=0,y=r;p!==y;++p)s[p].push(new mt(u,i[p],n[p]))}else if(d<l){o=e[d];let p=--l,y=e[p];t[y.uuid]=d,e[d]=y,t[f]=p,e[p]=u;for(let v=0,m=r;v!==m;++v){let g=s[v],E=g[p],M=g[d];g[d]=E,M===void 0&&(M=new mt(u,i[v],n[v])),g[p]=M}}else e[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l},remove:function(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,s=this.nCachedObjects_;for(let r=0,o=arguments.length;r!==o;++r){let a=arguments[r],l=a.uuid,c=t[l];if(c!==void 0&&c>=s){let h=s++,u=e[h];t[u.uuid]=c,e[c]=u,t[l]=h,e[h]=a;for(let f=0,d=n;f!==d;++f){let p=i[f],y=p[h],v=p[c];p[c]=y,p[h]=v}}}this.nCachedObjects_=s},uncache:function(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length,s=this.nCachedObjects_,r=e.length;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0)if(delete t[c],h<s){let u=--s,f=e[u],d=--r,p=e[d];t[f.uuid]=h,e[h]=f,t[p.uuid]=u,e[u]=p,e.pop();for(let y=0,v=n;y!==v;++y){let m=i[y],g=m[u],E=m[d];m[h]=g,m[u]=E,m.pop()}}else{let u=--r,f=e[u];t[f.uuid]=h,e[h]=f,e.pop();for(let d=0,p=n;d!==p;++d){let y=i[d];y[h]=y[u],y.pop()}}}this.nCachedObjects_=s},subscribe_:function(e,t){let i=this._bindingsIndicesByPath,n=i[e],s=this._bindings;if(n!==void 0)return s[n];let r=this._paths,o=this._parsedPaths,a=this._objects,l=a.length,c=this.nCachedObjects_,h=new Array(l);n=s.length,i[e]=n,r.push(e),o.push(t),s.push(h);for(let u=c,f=a.length;u!==f;++u){let d=a[u];h[u]=new mt(d,e,t)}return h},unsubscribe_:function(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length-1,a=r[o],l=e[o];t[l]=i,r[i]=a,r.pop(),s[i]=s[o],s.pop(),n[i]=n[o],n.pop()}}});function Dd(e,t,i,n){this._mixer=e,this._clip=t,this._localRoot=i||null,this.blendMode=n||t.blendMode;let s=t.tracks,r=s.length,o=new Array(r),a={endingStart:vs,endingEnd:vs};for(let l=0;l!==r;++l){let c=s[l].createInterpolant(null);o[l]=c,c.settings=a}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Nm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(Dd.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let n=this._clip.duration,s=e._clip.duration,r=s/n,o=n/s;e.warp(1,r,t),this.warp(o,1,t)}return this},crossFadeTo:function(e,t,i){return e.crossFadeFrom(this,t,i)},stopFading:function(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,i){let n=this._mixer,s=n.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,a[1]=s+i,l[0]=e/r,l[1]=t/r,this},stopWarping:function(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let a=(e-s)*i;if(a<0||i===0)return;this._startTime=null,t=i*a}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let a=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ed:for(let c=0,h=a.length;c!==h;++c)a[c].evaluate(r),l[c].accumulateAdditive(o);break;case Bc:default:for(let c=0,h=a.length;c!==h;++c)a[c].evaluate(r),l[c].accumulate(n,o)}}},_updateWeight:function(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t},_updateTime:function(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,r=i===Vm;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===Gm){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let a=this.repetitions-s;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n},_setEndings:function(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=as,n.endingEnd=as):(e?n.endingStart=this.zeroSlopeAtStart?as:vs:n.endingStart=ha,t?n.endingEnd=this.zeroSlopeAtEnd?as:vs:n.endingEnd=ha)},_scheduleFading:function(e,t,i){let n=this._mixer,s=n.time,r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,a=r.sampleValues;return o[0]=s,a[0]=t,o[1]=s+e,a[1]=i,this}});function Fa(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Fa.prototype=Object.assign(Object.create(Fi.prototype),{constructor:Fa,_bindAction:function(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,o=e._interpolants,a=i.uuid,l=this._bindingsByRootAndName,c=l[a];c===void 0&&(c={},l[a]=c);for(let h=0;h!==s;++h){let u=n[h],f=u.name,d=c[f];if(d!==void 0)r[h]=d;else{if(d=r[h],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,a,f));continue}let p=t&&t._propertyBindings[h].binding.parsedPath;d=new Ad(mt.create(i,f,p),u.ValueTypeName,u.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,a,f),r[h]=d}o[h].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,i){let n=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e},_removeInactiveAction:function(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],a=o.knownActions,l=a[a.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,a[c]=l,a.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],a.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}},_lendAction:function(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s},_takeBackAction:function(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s},_addInactiveBinding:function(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)},_removeInactiveBinding:function(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,o=r[n],a=t[t.length-1],l=e._cacheIndex;a._cacheIndex=l,t[l]=a,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[n]},_lendBinding:function(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s},_takeBackBinding:function(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s},_lendControlInterpolant:function(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Ua(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i},_takeBackControlInterpolant:function(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,i){let n=t||this._root,s=n.uuid,r=typeof e=="string"?kt.findByName(n,e):e,o=r!==null?r.uuid:e,a=this._actionsByClip[o],l=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Bc),a!==void 0){let h=a.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;l=a.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;let c=new Dd(this,r,t,i);return this._bindAction(c,l),this._addInactiveAction(c,o,s),c},existingAction:function(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?kt.findByName(i,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null},stopAllAction:function(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this},update:function(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(n,e,s,r);let o=this._bindings,a=this._nActiveBindings;for(let l=0;l!==a;++l)o[l].apply(r);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let r=s.knownActions;for(let o=0,a=r.length;o!==a;++o){let l=r[o];this._deactivateAction(l);let c=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}},uncacheRoot:function(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let o=i[r].actionByRoot,a=o[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}});function xc(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}xc.prototype.clone=function(){return new xc(this.value.clone===void 0?this.value:this.value.clone())};function Ih(e,t,i){jt.call(this,e,t),this.meshPerAttribute=i||1}Ih.prototype=Object.assign(Object.create(jt.prototype),{constructor:Ih,isInstancedInterleavedBuffer:!0,copy:function(e){return jt.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){let t=jt.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){let t=jt.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function qa(e,t,i,n){this.ray=new Ns(e,t),this.near=i||0,this.far=n||1/0,this.camera=null,this.layers=new Oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Bh(e,t){return e.distance-t.distance}function yc(e,t,i,n){if(e.layers.test(t.layers)&&e.raycast(t,i),n===!0){let s=e.children;for(let r=0,o=s.length;r<o;r++)yc(s[r],t,i,!0)}}Object.assign(qa.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,i){let n=i||[];return yc(e,this,n,t),n.sort(Bh),n},intersectObjects:function(e,t,i){let n=i||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),n;for(let s=0,r=e.length;s<r;s++)yc(e[s],this,n,t);return n.sort(Bh),n}});function Z0(e,t,i){return this.radius=e!==void 0?e:1,this.phi=t!==void 0?t:0,this.theta=i!==void 0?i:0,this}Object.assign(Z0.prototype,{set:function(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this},makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xe.clamp(t/this.radius,-1,1))),this}});function K0(e,t,i){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=i!==void 0?i:0,this}Object.assign(K0.prototype,{set:function(e,t,i){return this.radius=e,this.theta=t,this.y=i,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}});var Uh=new N;function Rd(e,t){this.min=e!==void 0?e:new N(1/0,1/0),this.max=t!==void 0?t:new N(-1/0,-1/0)}Object.assign(Rd.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){let i=Uh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new N),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new N),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new N),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new N),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return Uh.copy(e).clamp(this.min,this.max).sub(e).length()},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});var Oh=new P,ea=new P;function Id(e,t){this.start=e!==void 0?e:new P,this.end=t!==void 0?t:new P}Object.assign(Id.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new P),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new P),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new P),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(e,t){Oh.subVectors(e,this.start),ea.subVectors(this.end,this.start);let i=ea.dot(ea),s=ea.dot(Oh)/i;return t&&(s=xe.clamp(s,0,1)),s},closestPointToPoint:function(e,t,i){let n=this.closestPointToPointParameter(e,t);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new P),this.delta(i).multiplyScalar(n).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}});function ka(e){ne.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}ka.prototype=Object.create(ne.prototype);ka.prototype.constructor=ka;ka.prototype.isImmediateRenderObject=!0;var Fh=new P;function qr(e,t){ne.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;let i=new ae,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,o=1,a=32;r<a;r++,o++){let l=r/a*Math.PI*2,c=o/a*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}i.setAttribute("position",new ie(n,3));let s=new st({fog:!1,toneMapped:!1});this.cone=new gt(i,s),this.add(this.cone),this.update()}qr.prototype=Object.create(ne.prototype);qr.prototype.constructor=qr;qr.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};qr.prototype.update=function(){this.light.updateMatrixWorld();let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Fh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Fh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var Zi=new P,ta=new ue,Il=new ue;function Bd(e){let t=[];e&&e.isBone&&t.push(e);for(let i=0;i<e.children.length;i++)t.push.apply(t,Bd(e.children[i]));return t}function Hs(e){let t=Bd(e),i=new ae,n=[],s=[],r=new $(0,0,1),o=new $(0,1,0);for(let l=0;l<t.length;l++){let c=t[l];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(r.r,r.g,r.b),s.push(o.r,o.g,o.b))}i.setAttribute("position",new ie(n,3)),i.setAttribute("color",new ie(s,3));let a=new st({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});gt.call(this,i,a),this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}Hs.prototype=Object.create(gt.prototype);Hs.prototype.constructor=Hs;Hs.prototype.isSkeletonHelper=!0;Hs.prototype.updateMatrixWorld=function(e){let t=this.bones,i=this.geometry,n=i.getAttribute("position");Il.getInverse(this.root.matrixWorld);for(let s=0,r=0;s<t.length;s++){let o=t[s];o.parent&&o.parent.isBone&&(ta.multiplyMatrices(Il,o.matrixWorld),Zi.setFromMatrixPosition(ta),n.setXYZ(r,Zi.x,Zi.y,Zi.z),ta.multiplyMatrices(Il,o.parent.matrixWorld),Zi.setFromMatrixPosition(ta),n.setXYZ(r+1,Zi.x,Zi.y,Zi.z),r+=2)}i.getAttribute("position").needsUpdate=!0,ne.prototype.updateMatrixWorld.call(this,e)};function Yr(e,t,i){this.light=e,this.light.updateMatrixWorld(),this.color=i;let n=new Ts(t,4,2),s=new bt({wireframe:!0,fog:!1,toneMapped:!1});Ge.call(this,n,s),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Yr.prototype=Object.create(Ge.prototype);Yr.prototype.constructor=Yr;Yr.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};Yr.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};var J0=new P,kh=new $,Hh=new $;function Qr(e,t,i){ne.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;let n=new Ms(t);n.rotateY(Math.PI*.5),this.material=new bt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=n.getAttribute("position"),r=new Float32Array(s.count*3);n.setAttribute("color",new _e(r,3)),this.add(new Ge(n,this.material)),this.update()}Qr.prototype=Object.create(ne.prototype);Qr.prototype.constructor=Qr;Qr.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};Qr.prototype.update=function(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");kh.copy(this.light.color),Hh.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){let s=i<n/2?kh:Hh;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}e.lookAt(J0.setFromMatrixPosition(this.light.matrixWorld).negate())};function bc(e,t,i,n){e=e||10,t=t||10,i=new $(i!==void 0?i:4473924),n=new $(n!==void 0?n:8947848);let s=t/2,r=e/t,o=e/2,a=[],l=[];for(let u=0,f=0,d=-o;u<=t;u++,d+=r){a.push(-o,0,d,o,0,d),a.push(d,0,-o,d,0,o);let p=u===s?i:n;p.toArray(l,f),f+=3,p.toArray(l,f),f+=3,p.toArray(l,f),f+=3,p.toArray(l,f),f+=3}let c=new ae;c.setAttribute("position",new ie(a,3)),c.setAttribute("color",new ie(l,3));let h=new st({vertexColors:!0,toneMapped:!1});gt.call(this,c,h),this.type="GridHelper"}bc.prototype=Object.assign(Object.create(gt.prototype),{constructor:bc,copy:function(e){return gt.prototype.copy.call(this,e),this.geometry.copy(e.geometry),this.material.copy(e.material),this},clone:function(){return new this.constructor().copy(this)}});function wc(e,t,i,n,s,r){e=e||10,t=t||16,i=i||8,n=n||64,s=new $(s!==void 0?s:4473924),r=new $(r!==void 0?r:8947848);let o=[],a=[];for(let h=0;h<=t;h++){let u=h/t*(Math.PI*2),f=Math.sin(u)*e,d=Math.cos(u)*e;o.push(0,0,0),o.push(f,0,d);let p=h&1?s:r;a.push(p.r,p.g,p.b),a.push(p.r,p.g,p.b)}for(let h=0;h<=i;h++){let u=h&1?s:r,f=e-e/i*h;for(let d=0;d<n;d++){let p=d/n*(Math.PI*2),y=Math.sin(p)*f,v=Math.cos(p)*f;o.push(y,0,v),a.push(u.r,u.g,u.b),p=(d+1)/n*(Math.PI*2),y=Math.sin(p)*f,v=Math.cos(p)*f,o.push(y,0,v),a.push(u.r,u.g,u.b)}}let l=new ae;l.setAttribute("position",new ie(o,3)),l.setAttribute("color",new ie(a,3));let c=new st({vertexColors:!0,toneMapped:!1});gt.call(this,l,c),this.type="PolarGridHelper"}wc.prototype=Object.create(gt.prototype);wc.prototype.constructor=wc;var Gh=new P,ia=new P,Nh=new P;function Zr(e,t,i){ne.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,t===void 0&&(t=1);let n=new ae;n.setAttribute("position",new ie([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new st({fog:!1,toneMapped:!1});this.lightPlane=new Ut(n,s),this.add(this.lightPlane),n=new ae,n.setAttribute("position",new ie([0,0,0,0,0,1],3)),this.targetLine=new Ut(n,s),this.add(this.targetLine),this.update()}Zr.prototype=Object.create(ne.prototype);Zr.prototype.constructor=Zr;Zr.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};Zr.prototype.update=function(){Gh.setFromMatrixPosition(this.light.matrixWorld),ia.setFromMatrixPosition(this.light.target.matrixWorld),Nh.subVectors(ia,Gh),this.lightPlane.lookAt(ia),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ia),this.targetLine.scale.z=Nh.length()};var na=new P,at=new Di;function Ha(e){let t=new ae,i=new st({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],s=[],r={},o=new $(16755200),a=new $(16711680),l=new $(43775),c=new $(16777215),h=new $(3355443);u("n1","n2",o),u("n2","n4",o),u("n4","n3",o),u("n3","n1",o),u("f1","f2",o),u("f2","f4",o),u("f4","f3",o),u("f3","f1",o),u("n1","f1",o),u("n2","f2",o),u("n3","f3",o),u("n4","f4",o),u("p","n1",a),u("p","n2",a),u("p","n3",a),u("p","n4",a),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",c),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h);function u(d,p,y){f(d,y),f(p,y)}function f(d,p){n.push(0,0,0),s.push(p.r,p.g,p.b),r[d]===void 0&&(r[d]=[]),r[d].push(n.length/3-1)}t.setAttribute("position",new ie(n,3)),t.setAttribute("color",new ie(s,3)),gt.call(this,t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update()}Ha.prototype=Object.create(gt.prototype);Ha.prototype.constructor=Ha;Ha.prototype.update=function(){let e=this.geometry,t=this.pointMap,i=1,n=1;at.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ct("c",t,e,at,0,0,-1),ct("t",t,e,at,0,0,1),ct("n1",t,e,at,-i,-n,-1),ct("n2",t,e,at,i,-n,-1),ct("n3",t,e,at,-i,n,-1),ct("n4",t,e,at,i,n,-1),ct("f1",t,e,at,-i,-n,1),ct("f2",t,e,at,i,-n,1),ct("f3",t,e,at,-i,n,1),ct("f4",t,e,at,i,n,1),ct("u1",t,e,at,i*.7,n*1.1,-1),ct("u2",t,e,at,-i*.7,n*1.1,-1),ct("u3",t,e,at,0,n*2,-1),ct("cf1",t,e,at,-i,0,1),ct("cf2",t,e,at,i,0,1),ct("cf3",t,e,at,0,-n,1),ct("cf4",t,e,at,0,n,1),ct("cn1",t,e,at,-i,0,-1),ct("cn2",t,e,at,i,0,-1),ct("cn3",t,e,at,0,-n,-1),ct("cn4",t,e,at,0,n,-1),e.getAttribute("position").needsUpdate=!0};function ct(e,t,i,n,s,r,o){na.set(s,r,o).unproject(n);let a=t[e];if(a!==void 0){let l=i.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],na.x,na.y,na.z)}}var sa=new Jt;function Hn(e,t){this.object=e,t===void 0&&(t=16776960);let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(8*3),s=new ae;s.setIndex(new _e(i,1)),s.setAttribute("position",new _e(n,3)),gt.call(this,s,new st({color:t,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}Hn.prototype=Object.create(gt.prototype);Hn.prototype.constructor=Hn;Hn.prototype.update=function(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&sa.setFromObject(this.object),sa.isEmpty())return;let t=sa.min,i=sa.max,n=this.geometry.attributes.position,s=n.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()};Hn.prototype.setFromObject=function(e){return this.object=e,this.update(),this};Hn.prototype.copy=function(e){return gt.prototype.copy.call(this,e),this.object=e.object,this};Hn.prototype.clone=function(){return new this.constructor().copy(this)};function Ga(e,t){this.type="Box3Helper",this.box=e,t=t||16776960;let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ae;s.setIndex(new _e(i,1)),s.setAttribute("position",new ie(n,3)),gt.call(this,s,new st({color:t,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Ga.prototype=Object.create(gt.prototype);Ga.prototype.constructor=Ga;Ga.prototype.updateMatrixWorld=function(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),ne.prototype.updateMatrixWorld.call(this,e))};function Na(e,t,i){this.plane=e,this.size=t===void 0?1:t;let n=i!==void 0?i:16776960,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],r=new ae;r.setAttribute("position",new ie(s,3)),r.computeBoundingSphere(),Ut.call(this,r,new st({color:n,toneMapped:!1})),this.type="PlaneHelper";let o=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],a=new ae;a.setAttribute("position",new ie(o,3)),a.computeBoundingSphere(),this.add(new Ge(a,new bt({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}Na.prototype=Object.create(Ut.prototype);Na.prototype.constructor=Na;Na.prototype.updateMatrixWorld=function(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?ut:Et,this.lookAt(this.plane.normal),ne.prototype.updateMatrixWorld.call(this,e)};var Vh=new P,ra,Bl;function hn(e,t,i,n,s,r){ne.call(this),this.type="ArrowHelper",e===void 0&&(e=new P(0,0,1)),t===void 0&&(t=new P(0,0,0)),i===void 0&&(i=1),n===void 0&&(n=16776960),s===void 0&&(s=.2*i),r===void 0&&(r=.2*s),ra===void 0&&(ra=new ae,ra.setAttribute("position",new ie([0,0,0,0,1,0],3)),Bl=new cn(0,.5,1,5,1),Bl.translate(0,-.5,0)),this.position.copy(t),this.line=new Ut(ra,new st({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ge(Bl,new bt({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,r)}hn.prototype=Object.create(ne.prototype);hn.prototype.constructor=hn;hn.prototype.setDirection=function(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Vh.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Vh,t)}};hn.prototype.setLength=function(e,t,i){t===void 0&&(t=.2*e),i===void 0&&(i=.2*t),this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()};hn.prototype.setColor=function(e){this.line.material.color.set(e),this.cone.material.color.set(e)};hn.prototype.copy=function(e){return ne.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this};hn.prototype.clone=function(){return new this.constructor().copy(this)};function _c(e){e=e||1;let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new ae;n.setAttribute("position",new ie(t,3)),n.setAttribute("color",new ie(i,3));let s=new st({vertexColors:!0,toneMapped:!1});gt.call(this,n,s),this.type="AxesHelper"}_c.prototype=Object.create(gt.prototype);_c.prototype.constructor=_c;var ps=4,tn=8,hi=Math.pow(2,tn),Ud=[.125,.215,.35,.446,.526,.582],Od=tn-ps+1+Ud.length,os=20,mi={[Bt]:0,[Oi]:1,[Uc]:2,[td]:3,[id]:4,[nd]:5,[$r]:6},Ul=new li,{_lodPlanes:cr,_sizeLods:zh,_sigmas:oa}=eb(),Ol=null,En=(1+Math.sqrt(5))/2,ss=1/En,Wh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,En,ss),new P(0,En,-ss),new P(ss,0,En),new P(-ss,0,En),new P(En,ss,0),new P(-En,ss,0)];function jh(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=tb(os),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}jh.prototype={constructor:jh,fromScene:function(e,t=0,i=.1,n=100){Ol=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s},fromEquirectangular:function(e){return this._fromTexture(e)},fromCubemap:function(e){return this._fromTexture(e)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=Yh(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=qh(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<cr.length;e++)cr[e].dispose()},_cleanup:function(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ol),e.scissorTest=!1,aa(e,0,0,e.width,e.height)},_fromTexture:function(e){Ol=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t},_allocateTargets:function(e){let t={magFilter:it,minFilter:it,generateMipmaps:!1,type:Jr,format:rm,encoding:$0(e)?e.encoding:Uc,depthBuffer:!1,stencilBuffer:!1},i=Xh(t);return i.depthBuffer=!e,this._pingPongRenderTarget=Xh(t),i},_compileMaterial:function(e){let t=new Ge(cr[0],e);this._renderer.compile(t,Ul)},_sceneToCubeUV:function(e,t,i,n){let o=new tt(90,1,t,i),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.outputEncoding,u=c.toneMapping,f=c.getClearColor(),d=c.getClearAlpha();c.toneMapping=ds,c.outputEncoding=Bt;let p=e.background;if(p&&p.isColor){p.convertSRGBToLinear();let y=Math.max(p.r,p.g,p.b),v=Math.min(Math.max(Math.ceil(Math.log2(y)),-128),127);p=p.multiplyScalar(Math.pow(2,-v));let m=(v+128)/255;c.setClearColor(p,m),e.background=null}for(let y=0;y<6;y++){let v=y%3;v==0?(o.up.set(0,a[y],0),o.lookAt(l[y],0,0)):v==1?(o.up.set(0,0,a[y]),o.lookAt(0,l[y],0)):(o.up.set(0,a[y],0),o.lookAt(0,0,l[y])),aa(n,v*hi,y>2?hi:0,hi,hi),c.setRenderTarget(n),c.render(e,o)}c.toneMapping=u,c.outputEncoding=h,c.setClearColor(f,d)},_textureToCubeUV:function(e,t){let i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Yh()):this._equirectShader==null&&(this._equirectShader=qh());let n=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Ge(cr[0],n),r=n.uniforms;r.envMap.value=e,e.isCubeTexture||r.texelSize.value.set(1/e.image.width,1/e.image.height),r.inputEncoding.value=mi[e.encoding],r.outputEncoding.value=mi[t.texture.encoding],aa(t,0,0,3*hi,2*hi),i.setRenderTarget(t),i.render(s,Ul)},_applyPMREM:function(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<Od;n++){let s=Math.sqrt(oa[n]*oa[n]-oa[n-1]*oa[n-1]),r=Wh[(n-1)%Wh.length];this._blur(e,n-1,n,s,r)}t.autoClear=i},_blur:function(e,t,i,n,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)},_halfBlur:function(e,t,i,n,s,r,o){let a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new Ge(cr[n],l),u=l.uniforms,f=zh[i]-1,d=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*os-1),p=s/d,y=isFinite(s)?1+Math.floor(c*p):os;y>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${os}`);let v=[],m=0;for(let C=0;C<os;++C){let L=C/p,B=Math.exp(-L*L/2);v.push(B),C==0?m+=B:C<y&&(m+=2*B)}for(let C=0;C<v.length;C++)v[C]=v[C]/m;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=v,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=d,u.mipInt.value=tn-i,u.inputEncoding.value=mi[e.texture.encoding],u.outputEncoding.value=mi[e.texture.encoding];let g=zh[n],E=3*Math.max(0,hi-2*g),M=(n===0?0:2*hi)+2*g*(n>tn-ps?n-tn+ps:0);aa(t,E,M,3*g,2*g),a.setRenderTarget(t),a.render(h,Ul)}};function $0(e){return e===void 0||e.type!==Jr?!1:e.encoding===Bt||e.encoding===Oi||e.encoding===$r}function eb(){let e=[],t=[],i=[],n=tn;for(let s=0;s<Od;s++){let r=Math.pow(2,n);t.push(r);let o=1/r;s>tn-ps?o=Ud[s-tn+ps-1]:s==0&&(o=0),i.push(o);let a=1/(r-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=2,y=1,v=new Float32Array(d*f*u),m=new Float32Array(p*f*u),g=new Float32Array(y*f*u);for(let M=0;M<u;M++){let C=M%3*2/3-1,L=M>2?0:-1,B=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(B,d*f*M),m.set(h,p*f*M);let G=[M,M,M,M,M,M];g.set(G,y*f*M)}let E=new ae;E.setAttribute("position",new _e(v,d)),E.setAttribute("uv",new _e(m,p)),E.setAttribute("faceIndex",new _e(g,y)),e.push(E),n>ps&&n--}return{_lodPlanes:e,_sizeLods:t,_sigmas:i}}function Xh(e){let t=new Je(3*hi,3*hi,e);return t.texture.mapping=Kr,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function aa(e,t,i,n,s){e.viewport.set(t,i,n,s),e.scissor.set(t,i,n,s)}function tb(e){let t=new Float32Array(e),i=new P(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i},inputEncoding:{value:mi[Bt]},outputEncoding:{value:mi[Bt]}},vertexShader:Nc(),fragmentShader:`
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

${Vc()}

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function qh(){let e=new N(1,1);return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:e},inputEncoding:{value:mi[Bt]},outputEncoding:{value:mi[Bt]}},vertexShader:Nc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Vc()}

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Yh(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:mi[Bt]},outputEncoding:{value:mi[Bt]}},vertexShader:Nc(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Vc()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Nc(){return`
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
	`}function Vc(){return`
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
	`}me.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(me.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(Ki.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=new Pe;for(let i=0,n=e.length;i<n;i++){let s=e[i];t.vertices.push(new P(s.x,s.y,s.z||0))}return t}});Object.assign(fi.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function ib(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Dt.call(this,e),this.type="catmullrom",this.closed=!0}ib.prototype=Object.create(Dt.prototype);function nb(e){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Dt.call(this,e),this.type="catmullrom"}nb.prototype=Object.create(Dt.prototype);function Fd(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Dt.call(this,e),this.type="catmullrom"}Fd.prototype=Object.create(Dt.prototype);Object.assign(Fd.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});bc.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Hs.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(We.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),js.extractUrlBase(e)}});We.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(gc.prototype,{setTexturePath:function(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}});Object.assign(Rd.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Jt.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(ki.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});eo.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};Id.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(xe,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),xe.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),xe.ceilPowerOfTwo(e)}});Object.assign(yt.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(ue.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new P().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,i,n,s,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,n,i,s,r)}});di.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};Ie.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(Ns.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(Mt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(Mt,{barycoordFromPoint:function(e,t,i,n,s){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Mt.getBarycoord(e,t,i,n,s)},normal:function(e,t,i,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Mt.getNormal(e,t,i,n)}});Object.assign(Tn.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Es(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Cs(this,e)}});Object.assign(N.prototype,{fromAttribute:function(e,t,i){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,i)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(P.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,i){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,i)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Oe.prototype,{fromAttribute:function(e,t,i){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,i)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Pe.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(ne.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(ne.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Ge.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Ge.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),zm},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(ma.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Tr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Er.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(me.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});tt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Qe.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(_e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===sn},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(sn)}}});Object.assign(_e.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?sn:ja),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(ae.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new _e(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,i){i!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(ae.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Oa.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(qa.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(jt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===sn},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(jt.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?sn:ja),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Ri.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(xc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(Ee.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new $}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Zh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(ai.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(ye.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(Ws.prototype,{clearTarget:function(e,t,i,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,i,n)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Ws.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?Oi:Bt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(gd.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Je.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(Xr.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let t=this;return new vc().load(e,function(n){t.setBuffer(n)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Pd.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};br.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};Cn.crossOrigin=void 0;Cn.loadTexture=function(e,t,i,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let s=new zr;s.setCrossOrigin(this.crossOrigin);let r=s.load(e,i,void 0,n);return t&&(r.mapping=t),r};Cn.loadTextureCube=function(e,t,i,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let s=new oc;s.setCrossOrigin(this.crossOrigin);let r=s.load(e,i,void 0,n);return t&&(r.mapping=t),r};Cn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Cn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));var Ne=N,dt=P,kd=Oe;var Hi={NONE:0,ERROR:1,WARN:2,INFO:3},qs={OFF:0,LOW:1,MEDIUM:2,HIGH:3},Ys={verbose:Hi.NONE,antiAliasing:qs.LOW,LoadEnvAssetFile:!1};var to=class{constructor(t="images/assets/",i){this.assetRoot=t,this.mobile=i,this.pxlTimer=null,this.verboseLoading=!1,this.texLoader=new On,this.textLoaderArray=[],this.channelFormats=[Lc,Rc,Ic,gi,Ye,Dc,Xt]}get curMS(){return this.pxlTimer.curMS}setDependencies(t){this.pxlTimer=t.pxlTimer}updateUrl(t,i={},n=""){window.history.replaceState?window.history.replaceState(i,n,t):window.history.pushState(i,n,t)}copyRoomUrl(){let t=window.location,i=document.activeElement,n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.focus(),n.select();let s=!1;try{s=document.execCommand("copy")?"successful":"unsuccessful"}catch{}return document.body.removeChild(n),i.focus(),s}checkInt(t){return t%1==0}degToRad(t){return t*(Math.PI/180)}toHundreths(t){if(!t)return 0;if(Number.isInteger(t))return t;{let i=(t+"").split(".");return parseFloat(i[0]+"."+i[1].substr(0,2))}}toTenths(t){if(!t)return 0;if(Number.isInteger(t))return t;{let i=(t+"").split(".");return parseFloat(i[0]+"."+i[1].substr(0,1))}}getDateTime(){let t=new Date,i=(t.getFullYear()+"").padStart(2,"0")+"-"+(t.getMonth()+1+"").padStart(2,"0")+"-"+(t.getDate()+"").padStart(2,"0"),n=(t.getHours()+"").padStart(2,"0")+":"+(t.getMinutes()+"").padStart(2,"0")+":"+(t.getSeconds()+"").padStart(2,"0");return[i,n]}cleanStrict(t){let i=document.createElement("div");i.innerHTML=t,i=i.innerText;let n=i.match(/([a-zA-Z0-9])\w+/g);return n&&(i=n.join(" ")),i}cleanBasic(t){let i=document.createElement("div");i.innerHTML=t,i=i.innerText;let n=i.match(/([a-zA-Z0-9\s\w-+()\[\]])+/g);return n&&(i=n.join("")),i}cleanString(t){let i=document.createElement("div");return i.innerHTML=t,i=i.innerText,i}randomFloat(t,i){return Math.random()*(i-t)+t}componentToHex(t){var i=t.toString(16);return i.padStart(2,"0")}rgbToHex(t,i,n){return"#"+this.componentToHex(Math.min(255,Math.max(0,Math.round(t))))+this.componentToHex(Math.min(255,Math.max(0,Math.round(i))))+this.componentToHex(Math.min(255,Math.max(0,Math.round(n))))}hexToRgb(t){t[0]=="#"?t=t.substr(1,6):t=t.substr(0,6);let n,s,r;return t.length==3?(n=t[0]+t[0],s=t[1]+t[1],r=t[2]+t[2]):(n=t[0]+t[1],s=t[2]+t[3],r=t[4]+t[5]),n=parseInt(n,16),s=parseInt(s,16),r=parseInt(r,16),[n,s,r]}stringToRgb(t,i=null,n=!1){let s=[255,0,0];if(t){let r=t.length,o="";for(let l=0;l<r;++l)o+=t[r-1-l].charCodeAt(0).toString(16);let a=o.length;if(a>6){let l=1;t=="tussin"?l=0:t=="fexofenadine"&&(l=-1);let c=Math.max(0,parseInt((a-6)/2+l));o=o.substr(c,6)}s=this.hexToRgb(o)}if(i!=null){let r=Math.max(...s),o=Math.min(...s),a=r*i;s[0]=parseInt(Math.min(255,(s[0]-o)/(r-o)*255+a)),s[1]=parseInt(Math.min(255,(s[1]-o)/(r-o)*255+a)),s[2]=parseInt(Math.min(255,(s[2]-o)/(r-o)*255+a))}return n==!0&&(s[0]=s[0]/255,s[1]=s[1]/255,s[2]=s[2]/255),s}randomizeArray(t){let i=[...t],n=[];for(;i.length>0;){let s=i.length==1?0:parseInt(Math.random()*21*i.length)%i.length;n.push(i.splice(s,1)[0])}return n}getRandom(t,i=1.14){let n=Math.floor(Math.random(i)*t.length);return t[n]}applyTransformList(t,i){var n=i.r;t.rotateX(n[0]),t.rotateY(n[1]),t.rotateZ(n[2]),typeof i.rOrder<"u"&&(t.rotation.order=i.rOrder);var s=i.t;t.position.set(s[0],s[1],s[2]);var r=i.s;t.scale.set(r[0],r[1],r[2]),t.matrixAutoUpdate=!1,t.updateMatrix()}vec2(t=null,i=null){return new Ne(t,i)}vec3(t=0,i=0,n=0){return new dt(t,i,n)}loadTexture(t,i=null,n={}){if(typeof this.textLoaderArray[t]<"u")s=this.textLoaderArray[t];else{var s=new ze;this.texLoader.load(t,r=>{i!=null&&(s.format=this.channelFormats[i]),s.image=r,s.needsUpdate=!0,n.length>0&&Object.keys(n).forEach(a=>{s[a]=n[a]})}),this.textLoaderArray[t]=s}return s}getVideoTexture(t){let i=new ga(t);return i.minFilter=ke,i.magFilter=ke,i.format=gi,i}getCanvasTexture(t){let i=new _s(t),n=new bt({map:i});return{texture:i,material:n}}};var Qd={},Vt=void 0,sb=Qd;function qc(e,t){var i=e.split("."),n=sb;!(i[0]in n)&&n.execScript&&n.execScript("var "+i[0]);for(var s;i.length&&(s=i.shift());)!i.length&&t!==Vt?n[s]=t:n=n[s]?n[s]:n[s]={}}var Ze=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u"&&typeof DataView<"u";function Nn(e){var t=e.length,i=0,n=Number.POSITIVE_INFINITY,s,r,o,a,l,c,h,u,f,d;for(u=0;u<t;++u)e[u]>i&&(i=e[u]),e[u]<n&&(n=e[u]);for(s=1<<i,r=new(Ze?Uint32Array:Array)(s),o=1,a=0,l=2;o<=i;){for(u=0;u<t;++u)if(e[u]===o){for(c=0,h=a,f=0;f<o;++f)c=c<<1|h&1,h>>=1;for(d=o<<16|u,f=c;f<s;f+=l)r[f]=d;++a}++o,a<<=1,l<<=1}return[r,i,n]}function dn(e,t){switch(this.g=[],this.h=32768,this.d=this.f=this.a=this.l=0,this.input=Ze?new Uint8Array(e):e,this.m=!1,this.i=Qa,this.r=!1,(t||!(t={}))&&(t.index&&(this.a=t.index),t.bufferSize&&(this.h=t.bufferSize),t.bufferType&&(this.i=t.bufferType),t.resize&&(this.r=t.resize)),this.i){case Yc:this.b=32768,this.c=new(Ze?Uint8Array:Array)(32768+this.h+258);break;case Qa:this.b=0,this.c=new(Ze?Uint8Array:Array)(this.h),this.e=this.z,this.n=this.v,this.j=this.w;break;default:throw Error("invalid inflate mode")}}var Yc=0,Qa=1,Hd={t:Yc,s:Qa};dn.prototype.k=function(){for(;!this.m;){var e=$t(this,3);switch(e&1&&(this.m=!0),e>>>=1,e){case 0:var t=this.input,i=this.a,n=this.c,s=this.b,r=t.length,o=Vt,a=Vt,l=n.length,c=Vt;if(this.d=this.f=0,i+1>=r)throw Error("invalid uncompressed block header: LEN");if(o=t[i++]|t[i++]<<8,i+1>=r)throw Error("invalid uncompressed block header: NLEN");if(a=t[i++]|t[i++]<<8,o===~a)throw Error("invalid uncompressed block header: length verify");if(i+o>t.length)throw Error("input buffer is broken");switch(this.i){case Yc:for(;s+o>n.length;){if(c=l-s,o-=c,Ze)n.set(t.subarray(i,i+c),s),s+=c,i+=c;else for(;c--;)n[s++]=t[i++];this.b=s,n=this.e(),s=this.b}break;case Qa:for(;s+o>n.length;)n=this.e({p:2});break;default:throw Error("invalid inflate mode")}if(Ze)n.set(t.subarray(i,i+o),s),s+=o,i+=o;else for(;o--;)n[s++]=t[i++];this.a=i,this.b=s,this.c=n;break;case 1:this.j(rb,ob);break;case 2:for(var h=$t(this,5)+257,u=$t(this,5)+1,f=$t(this,4)+4,d=new(Ze?Uint8Array:Array)(zc.length),p=Vt,y=Vt,v=Vt,m=Vt,g=Vt,E=Vt,M=Vt,L=Vt,C=Vt,L=0;L<f;++L)d[zc[L]]=$t(this,3);if(!Ze)for(L=f,f=d.length;L<f;++L)d[zc[L]]=0;for(p=Nn(d),m=new(Ze?Uint8Array:Array)(h+u),L=0,C=h+u;L<C;)switch(g=ro(this,p),g){case 16:for(M=3+$t(this,2);M--;)m[L++]=E;break;case 17:for(M=3+$t(this,3);M--;)m[L++]=0;E=0;break;case 18:for(M=11+$t(this,7);M--;)m[L++]=0;E=0;break;default:E=m[L++]=g}y=Nn(Ze?m.subarray(0,h):m.slice(0,h)),v=Nn(Ze?m.subarray(h):m.slice(h)),this.j(y,v);break;default:throw Error("unknown BTYPE: "+e)}}return this.n()};var Gd=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],zc=Ze?new Uint16Array(Gd):Gd,Nd=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],Zd=Ze?new Uint16Array(Nd):Nd,Vd=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Za=Ze?new Uint8Array(Vd):Vd,zd=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],Kd=Ze?new Uint16Array(zd):zd,Wd=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ka=Ze?new Uint8Array(Wd):Wd,Wc=new(Ze?Uint8Array:Array)(288),Gn,jd;Gn=0;for(jd=Wc.length;Gn<jd;++Gn)Wc[Gn]=143>=Gn?8:255>=Gn?9:279>=Gn?7:8;var rb=Nn(Wc),jc=new(Ze?Uint8Array:Array)(30),Ya,Xd;Ya=0;for(Xd=jc.length;Ya<Xd;++Ya)jc[Ya]=5;var ob=Nn(jc);function $t(e,t){for(var i=e.f,n=e.d,s=e.input,r=e.a,o=s.length,a;n<t;){if(r>=o)throw Error("input buffer is broken");i|=s[r++]<<n,n+=8}return a=i&(1<<t)-1,e.f=i>>>t,e.d=n-t,e.a=r,a}function ro(e,t){for(var i=e.f,n=e.d,s=e.input,r=e.a,o=s.length,a=t[0],l=t[1],c,h;n<l&&!(r>=o);)i|=s[r++]<<n,n+=8;if(c=a[i&(1<<l)-1],h=c>>>16,h>n)throw Error("invalid code length: "+h);return e.f=i>>h,e.d=n-h,e.a=r,c&65535}dn.prototype.j=function(e,t){var i=this.c,n=this.b;this.o=e;for(var s=i.length-258,r,o,a,l;(r=ro(this,e))!==256;)if(256>r)n>=s&&(this.b=n,i=this.e(),n=this.b),i[n++]=r;else for(o=r-257,l=Zd[o],0<Za[o]&&(l+=$t(this,Za[o])),r=ro(this,t),a=Kd[r],0<Ka[r]&&(a+=$t(this,Ka[r])),n>=s&&(this.b=n,i=this.e(),n=this.b);l--;)i[n]=i[n++-a];for(;8<=this.d;)this.d-=8,this.a--;this.b=n};dn.prototype.w=function(e,t){var i=this.c,n=this.b;this.o=e;for(var s=i.length,r,o,a,l;(r=ro(this,e))!==256;)if(256>r)n>=s&&(i=this.e(),s=i.length),i[n++]=r;else for(o=r-257,l=Zd[o],0<Za[o]&&(l+=$t(this,Za[o])),r=ro(this,t),a=Kd[r],0<Ka[r]&&(a+=$t(this,Ka[r])),n+l>s&&(i=this.e(),s=i.length);l--;)i[n]=i[n++-a];for(;8<=this.d;)this.d-=8,this.a--;this.b=n};dn.prototype.e=function(){var e=new(Ze?Uint8Array:Array)(this.b-32768),t=this.b-32768,i,n,s=this.c;if(Ze)e.set(s.subarray(32768,e.length));else for(i=0,n=e.length;i<n;++i)e[i]=s[i+32768];if(this.g.push(e),this.l+=e.length,Ze)s.set(s.subarray(t,t+32768));else for(i=0;32768>i;++i)s[i]=s[t+i];return this.b=32768,s};dn.prototype.z=function(e){var t,i=this.input.length/this.a+1|0,n,s,r,o=this.input,a=this.c;return e&&(typeof e.p=="number"&&(i=e.p),typeof e.u=="number"&&(i+=e.u)),2>i?(n=(o.length-this.a)/this.o[2],r=258*(n/2)|0,s=r<a.length?a.length+r:a.length<<1):s=a.length*i,Ze?(t=new Uint8Array(s),t.set(a)):t=a,this.c=t};dn.prototype.n=function(){var e=0,t=this.c,i=this.g,n,s=new(Ze?Uint8Array:Array)(this.l+(this.b-32768)),r,o,a,l;if(i.length===0)return Ze?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);for(r=0,o=i.length;r<o;++r)for(n=i[r],a=0,l=n.length;a<l;++a)s[e++]=n[a];for(r=32768,o=this.b;r<o;++r)s[e++]=t[r];return this.g=[],this.buffer=s};dn.prototype.v=function(){var e,t=this.b;return Ze?this.r?(e=new Uint8Array(t),e.set(this.c.subarray(0,t))):e=this.c.subarray(0,t):(this.c.length>t&&(this.c.length=t),e=this.c),this.buffer=e};function Qc(e,t){var i,n;switch(this.input=e,this.a=0,(t||!(t={}))&&(t.index&&(this.a=t.index),t.verify&&(this.A=t.verify)),i=e[this.a++],n=e[this.a++],i&15){case qd:this.method=qd;break;default:throw Error("unsupported compression method")}if(((i<<8)+n)%31!==0)throw Error("invalid fcheck flag:"+((i<<8)+n)%31);if(n&32)throw Error("fdict flag is not supported");this.q=new dn(e,{index:this.a,bufferSize:t.bufferSize,bufferType:t.bufferType,resize:t.resize})}Qc.prototype.k=function(){var e=this.input,t,i;if(t=this.q.k(),this.a=this.q.a,this.A){i=(e[this.a++]<<24|e[this.a++]<<16|e[this.a++]<<8|e[this.a++])>>>0;var n=t;if(typeof n=="string"){var s=n.split(""),r,o;for(r=0,o=s.length;r<o;r++)s[r]=(s[r].charCodeAt(0)&255)>>>0;n=s}for(var a=1,l=0,c=n.length,h,u=0;0<c;){h=1024<c?1024:c,c-=h;do a+=n[u++],l+=a;while(--h);a%=65521,l%=65521}if(i!==(l<<16|a)>>>0)throw Error("invalid adler-32 checksum")}return t};var qd=8;qc("Zlib.Inflate",Qc);qc("Zlib.Inflate.prototype.decompress",Qc.prototype.k);var Xc={ADAPTIVE:Hd.s,BLOCK:Hd.t},no,so,Qs,Yd;if(Object.keys)no=Object.keys(Xc);else for(so in no=[],Qs=0,Xc)no[Qs++]=so;Qs=0;for(Yd=no.length;Qs<Yd;++Qs)so=no[Qs],qc("Zlib.Inflate.BufferType."+so,Xc[so]);var Zc=Qd.Zlib;var Kc={findSpan:function(e,t,i){var n=i.length-e-1;if(t>=i[n])return n-1;if(t<=i[e])return e;for(var s=e,r=n,o=Math.floor((s+r)/2);t<i[o]||t>=i[o+1];)t<i[o]?r=o:s=o,o=Math.floor((s+r)/2);return o},calcBasisFunctions:function(e,t,i,n){var s=[],r=[],o=[];s[0]=1;for(var a=1;a<=i;++a){r[a]=t-n[e+1-a],o[a]=n[e+a]-t;for(var l=0,c=0;c<a;++c){var h=o[c+1],u=r[a-c],f=s[c]/(h+u);s[c]=l+h*f,l=u*f}s[a]=l}return s},calcBSplinePoint:function(e,t,i,n){for(var s=this.findSpan(e,n,t),r=this.calcBasisFunctions(s,n,e,t),o=new Oe(0,0,0,0),a=0;a<=e;++a){var l=i[s-e+a],c=r[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o},calcBasisFunctionDerivatives:function(e,t,i,n,s){for(var r=[],o=0;o<=i;++o)r[o]=0;for(var a=[],o=0;o<=n;++o)a[o]=r.slice(0);for(var l=[],o=0;o<=i;++o)l[o]=r.slice(0);l[0][0]=1;for(var c=r.slice(0),h=r.slice(0),u=1;u<=i;++u){c[u]=t-s[e+1-u],h[u]=s[e+u]-t;for(var f=0,O=0;O<u;++O){var d=h[O+1],p=c[u-O];l[u][O]=d+p;var y=l[O][u-1]/l[u][O];l[O][u]=f+d*y,f=p*y}l[u][u]=f}for(var u=0;u<=i;++u)a[0][u]=l[u][i];for(var O=0;O<=i;++O){for(var v=0,m=1,g=[],o=0;o<=i;++o)g[o]=r.slice(0);g[0][0]=1;for(var E=1;E<=n;++E){var M=0,C=O-E,L=i-E;O>=E&&(g[m][0]=g[v][0]/l[L+1][C],M=g[m][0]*l[C][L]);for(var B=C>=-1?1:-C,G=O-1<=L?E-1:i-O,u=B;u<=G;++u)g[m][u]=(g[v][u]-g[v][u-1])/l[L+1][C+u],M+=g[m][u]*l[C+u][L];O<=L&&(g[m][E]=-g[v][E-1]/l[L+1][O],M+=g[m][E]*l[O][L]),a[E][O]=M;var u=v;v=m,m=u}}for(var O=i,E=1;E<=n;++E){for(var u=0;u<=i;++u)a[E][u]*=O;O*=i-E}return a},calcBSplineDerivatives:function(e,t,i,n,s){for(var r=s<e?s:e,o=[],a=this.findSpan(e,n,t),l=this.calcBasisFunctionDerivatives(a,n,e,r,t),c=[],h=0;h<i.length;++h){var u=i[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(var d=0;d<=r;++d){for(var u=c[a-e].clone().multiplyScalar(l[d][0]),p=1;p<=e;++p)u.add(c[a-e+p].clone().multiplyScalar(l[d][p]));o[d]=u}for(var d=r+1;d<=s+1;++d)o[d]=new Oe(0,0,0);return o},calcKoverI:function(e,t){for(var i=1,n=2;n<=e;++n)i*=n;for(var s=1,n=2;n<=t;++n)s*=n;for(var n=2;n<=e-t;++n)s*=n;return i/s},calcRationalCurveDerivatives:function(e){for(var t=e.length,i=[],n=[],s=0;s<t;++s){var r=e[s];i[s]=new P(r.x,r.y,r.z),n[s]=r.w}for(var o=[],a=0;a<t;++a){for(var l=i[a].clone(),s=1;s<=a;++s)l.sub(o[a-s].clone().multiplyScalar(this.calcKoverI(a,s)*n[s]));o[a]=l.divideScalar(n[0])}return o},calcNURBSDerivatives:function(e,t,i,n,s){var r=this.calcBSplineDerivatives(e,t,i,n,s);return this.calcRationalCurveDerivatives(r)},calcSurfacePoint:function(e,t,i,n,s,r,o,a){for(var l=this.findSpan(e,r,i),c=this.findSpan(t,o,n),h=this.calcBasisFunctions(l,r,e,i),u=this.calcBasisFunctions(c,o,t,n),f=[],d=0;d<=t;++d){f[d]=new Oe(0,0,0,0);for(var p=0;p<=e;++p){var y=s[l-e+p][c-t+d].clone(),v=y.w;y.x*=v,y.y*=v,y.z*=v,f[d].add(y.multiplyScalar(h[p]))}}for(var m=new Oe(0,0,0,0),d=0;d<=t;++d)m.add(f[d].multiplyScalar(u[d]));m.divideScalar(m.w),a.set(m.x,m.y,m.z)}};var fn=function(e,t,i,n,s){me.call(this),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=n||0,this.endKnot=s||this.knots.length-1;for(var r=0;r<i.length;++r){var o=i[r];this.controlPoints[r]=new Oe(o.x,o.y,o.z,o.w)}};fn.prototype=Object.create(me.prototype);fn.prototype.constructor=fn;fn.prototype.getPoint=function(e,t){var i=t||new P,n=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Kc.calcBSplinePoint(this.degree,this.knots,this.controlPoints,n);return s.w!=1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)};fn.prototype.getTangent=function(e,t){var i=t||new P,n=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Kc.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,n,1);return i.copy(s[1]).normalize(),i};var oo=function(){var e,t,i;function n(x){We.call(this,x)}n.prototype=Object.assign(Object.create(We.prototype),{constructor:n,load:function(x,b,w,S){var _=this,T=_.path===""?js.extractUrlBase(x):_.path,A=new Zt(this.manager);A.setPath(_.path),A.setResponseType("arraybuffer"),A.load(x,function(I){try{b(_.parse(I,T))}catch(F){setTimeout(function(){S&&S(F),_.manager.itemError(x)},0)}},w,S)},parse:function(x,b){if(u(x))e=new l().parse(x);else{var w=L(x);if(!f(w))throw new Error("THREE.FBXLoader: Unknown format.");if(d(w)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+d(w));e=new a().parse(w)}var S=new zr(this.manager).setPath(this.resourcePath||b).setCrossOrigin(this.crossOrigin);return new s(S,this.manager).parse(e)}});function s(x,b){this.textureLoader=x,this.manager=b}s.prototype={constructor:s,parse:function(){t=this.parseConnections();var x=this.parseImages(),b=this.parseTextures(x),w=this.parseMaterials(b),S=this.parseDeformers(),_=new r().parse(S);return this.parseScene(S,_,w),i},parseConnections:function(){var x=new Map;if("Connections"in e){var b=e.Connections.connections;b.forEach(function(w){var S=w[0],_=w[1],T=w[2];x.has(S)||x.set(S,{parents:[],children:[]});var A={ID:_,relationship:T};x.get(S).parents.push(A),x.has(_)||x.set(_,{parents:[],children:[]});var I={ID:S,relationship:T};x.get(_).children.push(I)})}return x},parseImages:function(){var x={},b={};if("Video"in e.Objects){var w=e.Objects.Video;for(var S in w){var _=w[S],T=parseInt(S);if(x[T]=_.RelativeFilename||_.Filename,"Content"in _){var A=_.Content instanceof ArrayBuffer&&_.Content.byteLength>0,I=typeof _.Content=="string"&&_.Content!=="";if(A||I){var F=this.parseImage(w[S]);b[_.RelativeFilename||_.Filename]=F}}}}for(var T in x){var V=x[T];b[V]!==void 0?x[T]=b[V]:x[T]=x[T].split("\\").pop()}return x},parseImage:function(x){var b=x.Content,w=x.RelativeFilename||x.Filename,S=w.slice(w.lastIndexOf(".")+1).toLowerCase(),_;switch(S){case"bmp":_="image/bmp";break;case"jpg":case"jpeg":_="image/jpeg";break;case"png":_="image/png";break;case"tif":_="image  iff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",w),_="image  ga";break;default:console.warn('FBXLoader: Image type "'+S+'" is not supported.');return}if(typeof b=="string")return"data:"+_+";base64,"+b;var T=new Uint8Array(b);return window.URL.createObjectURL(new Blob([T],{type:_}))},parseTextures:function(x){var b=new Map;if("Texture"in e.Objects){var w=e.Objects.Texture;for(var S in w){var _=this.parseTexture(w[S],x);b.set(parseInt(S),_)}}return b},parseTexture:function(x,b){var w=this.loadTexture(x,b);w.ID=x.id,w.name=x.attrName;var S=x.WrapModeU,_=x.WrapModeV,T=S!==void 0?S.value:0,A=_!==void 0?_.value:0;if(w.wrapS=T===0?It:St,w.wrapT=A===0?It:St,"Scaling"in x){var I=x.Scaling.value;w.repeat.x=I[0],w.repeat.y=I[1]}return w},loadTexture:function(x,b){var w,S=this.textureLoader.path,_=t.get(x.id).children;_!==void 0&&_.length>0&&b[_[0].ID]!==void 0&&(w=b[_[0].ID],(w.indexOf("blob:")===0||w.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));var T,A=x.FileName.slice(-3).toLowerCase();if(A==="tga"){var I=this.manager.getHandler(".tga");I===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",x.RelativeFilename),T=new ze):T=I.load(w)}else A==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",x.RelativeFilename),T=new ze):T=this.textureLoader.load(w);return this.textureLoader.setPath(S),T},parseMaterials:function(x){var b=new Map;if("Material"in e.Objects){var w=e.Objects.Material;for(var S in w){var _=this.parseMaterial(w[S],x);_!==null&&b.set(parseInt(S),_)}}return b},parseMaterial:function(x,b){var w=x.id,S=x.attrName,_=x.ShadingModel;if(typeof _=="object"&&(_=_.value),!t.has(w))return null;var T=this.parseParameters(x,b,w),A;switch(_.toLowerCase()){case"phong":A=new ai;break;case"lambert":A=new vi;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',_),A=new ai;break}return A.setValues(T),A.name=S,A},parseParameters:function(x,b,w){var S={};x.BumpFactor&&(S.bumpScale=x.BumpFactor.value),x.Diffuse?S.color=new $().fromArray(x.Diffuse.value):x.DiffuseColor&&x.DiffuseColor.type==="Color"&&(S.color=new $().fromArray(x.DiffuseColor.value)),x.DisplacementFactor&&(S.displacementScale=x.DisplacementFactor.value),x.Emissive?S.emissive=new $().fromArray(x.Emissive.value):x.EmissiveColor&&x.EmissiveColor.type==="Color"&&(S.emissive=new $().fromArray(x.EmissiveColor.value)),x.EmissiveFactor&&(S.emissiveIntensity=parseFloat(x.EmissiveFactor.value)),x.Opacity&&(S.opacity=parseFloat(x.Opacity.value)),S.opacity<1&&(S.transparent=!0),x.ReflectionFactor&&(S.reflectivity=x.ReflectionFactor.value),x.Shininess&&(S.shininess=x.Shininess.value),x.Specular?S.specular=new $().fromArray(x.Specular.value):x.SpecularColor&&x.SpecularColor.type==="Color"&&(S.specular=new $().fromArray(x.SpecularColor.value));var _=this;return t.get(w).children.forEach(function(T){var A=T.relationship;switch(A){case"Bump":S.bumpMap=_.getTexture(b,T.ID);break;case"Maya|TEX_ao_map":S.aoMap=_.getTexture(b,T.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":S.map=_.getTexture(b,T.ID),S.map.encoding=Oi;break;case"DisplacementColor":S.displacementMap=_.getTexture(b,T.ID);break;case"AmbientColor":case"EmissiveColor":S.emissiveMap=_.getTexture(b,T.ID),S.emissiveMap.encoding=Oi;break;case"NormalMap":case"Maya|TEX_normal_map":S.normalMap=_.getTexture(b,T.ID);break;case"ReflectionColor":S.envMap=_.getTexture(b,T.ID),S.envMap.mapping=za,S.envMap.encoding=Oi;break;case"SpecularColor":S.specularMap=_.getTexture(b,T.ID),S.specularMap.encoding=Oi;break;case"TransparentColor":case"TransparencyFactor":S.alphaMap=_.getTexture(b,T.ID),S.transparent=!0;break;case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",A);break}}),S},getTexture:function(x,b){return"LayeredTexture"in e.Objects&&b in e.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),b=t.get(b).children[0].ID),x.get(b)},parseDeformers:function(){var x={},b={};if("Deformer"in e.Objects){var w=e.Objects.Deformer;for(var S in w){var _=w[S],T=t.get(parseInt(S));if(_.attrType==="Skin"){var A=this.parseSkeleton(T,w);A.ID=S,T.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),A.geometryID=T.parents[0].ID,x[S]=A}else if(_.attrType==="BlendShape"){var I={id:S};I.rawTargets=this.parseMorphTargets(T,w),I.id=S,T.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),b[S]=I}}}return{skeletons:x,morphTargets:b}},parseSkeleton:function(x,b){var w=[];return x.children.forEach(function(S){var _=b[S.ID];if(_.attrType==="Cluster"){var T={ID:S.ID,indices:[],weights:[],transformLink:new ue().fromArray(_.TransformLink.a)};"Indexes"in _&&(T.indices=_.Indexes.a,T.weights=_.Weights.a),w.push(T)}}),{rawBones:w,bones:[]}},parseMorphTargets:function(x,b){for(var w=[],S=0;S<x.children.length;S++){var _=x.children[S],T=b[_.ID],A={name:T.attrName,initialWeight:T.DeformPercent,id:T.id,fullWeights:T.FullWeights.a};if(T.attrType!=="BlendShapeChannel")return;A.geoID=t.get(parseInt(_.ID)).children.filter(function(I){return I.relationship===void 0})[0].ID,w.push(A)}return w},parseScene:function(x,b,w){i=new Lt;var S=this.parseModels(x.skeletons,b,w),_=e.Objects.Model,T=this;S.forEach(function(I){var F=_[I.ID];T.setLookAtProperties(I,F);var V=t.get(I.ID).parents;V.forEach(function(k){var j=S.get(k.ID);j!==void 0&&j.add(I)}),I.parent===null&&i.add(I)}),this.bindSkeleton(x.skeletons,b,S),this.createAmbientLight(),this.setupMorphMaterials(),i.traverse(function(I){if(I.userData.transformData){I.parent&&(I.userData.transformData.parentMatrixWorld=I.parent.matrix);var F=E(I.userData.transformData);I.applyMatrix4(F)}});var A=new o().parse();i.children.length===1&&i.children[0].isGroup&&(i.children[0].animations=A,i=i.children[0]),i.animations=A},parseModels:function(x,b,w){var S=new Map,_=e.Objects.Model,T=["Culling","DefaultAttributeIndex","InheritType","Lcl_Translation","Lcl_Rotation","Lcl_Scaling","RotationPivot","ScalingPivot","RotationActive","ScalingMax","RotationOffset","fbx_node_path","Shading","Version","attrName","attrType","currentUVSet","id","name","propertyList","singleProperty"];for(var A in _){var I=parseInt(A),F=_[A],V=t.get(I),k=this.buildSkeleton(V,x,I,F.attrName);if(!k){switch(F.attrType){case"Camera":k=this.createCamera(V);break;case"Light":k=this.createLight(V);break;case"Mesh":k=this.createMesh(V,b,w);break;case"NurbsCurve":k=this.createCurve(V,b);break;case"LimbNode":case"Root":k=new Cr;break;case"Null":default:k=new Lt;break}k.name=F.attrName?mt.sanitizeNodeName(F.attrName):"",k.ID=I}Object.keys(F).forEach(Y=>{T.includes(Y)||(k.userData[Y]=F[Y].value)}),this.getTransformData(k,F),S.set(I,k)}return S},buildSkeleton:function(x,b,w,S){var _=null;return x.parents.forEach(function(T){for(var A in b){var I=b[A];I.rawBones.forEach(function(F,V){if(F.ID===T.ID){var k=_;_=new Cr,_.matrixWorld.copy(F.transformLink),_.name=S?mt.sanitizeNodeName(S):"",_.ID=w,I.bones[V]=_,k!==null&&_.add(k)}})}}),_},createCamera:function(x){var b,w;if(x.children.forEach(function(j){var Y=e.Objects.NodeAttribute[j.ID];Y!==void 0&&(w=Y)}),w===void 0)b=new ne;else{var S=0;w.CameraProjectionType!==void 0&&w.CameraProjectionType.value===1&&(S=1);var _=1;w.NearPlane!==void 0&&(_=w.NearPlane.value/1e3);var T=1e3;w.FarPlane!==void 0&&(T=w.FarPlane.value/1e3);var A=window.innerWidth,I=window.innerHeight;w.AspectWidth!==void 0&&w.AspectHeight!==void 0&&(A=w.AspectWidth.value,I=w.AspectHeight.value);var F=A/I,V=45;w.FieldOfView!==void 0&&(V=w.FieldOfView.value);var k=w.FocalLength?w.FocalLength.value:null;switch(S){case 0:b=new tt(V,F,_,T),k!==null&&b.setFocalLength(k);break;case 1:b=new li(-A/2,A/2,I/2,-I/2,_,T);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+S+"."),b=new ne;break}}return b},createLight:function(x){var b,w;if(x.children.forEach(function(k){var j=e.Objects.NodeAttribute[k.ID];j!==void 0&&(w=j)}),w===void 0)b=new ne;else{var S;w.LightType===void 0?S=0:S=w.LightType.value;var _=16777215;w.Color!==void 0&&(_=new $().fromArray(w.Color.value));var T=w.Intensity===void 0?1:w.Intensity.value/100;w.CastLightOnObject!==void 0&&w.CastLightOnObject.value===0&&(T=0);var A=0;w.FarAttenuationEnd!==void 0&&(w.EnableFarAttenuation!==void 0&&w.EnableFarAttenuation.value===0?A=0:A=w.FarAttenuationEnd.value);var I=1;switch(S){case 0:b=new ks(_,T,A,I);break;case 1:b=new Fn(_,T);break;case 2:var F=Math.PI/3;w.InnerAngle!==void 0&&(F=xe.degToRad(w.InnerAngle.value));var V=0;w.OuterAngle!==void 0&&(V=xe.degToRad(w.OuterAngle.value),V=Math.max(V,1)),b=new jr(_,T,A,F,V,I);break;default:console.warn("THREE.FBXLoader: Unknown light type "+w.LightType.value+", defaulting to a PointLight."),b=new ks(_,T);break}w.CastShadows!==void 0&&w.CastShadows.value===1&&(b.castShadow=!0)}return b},createMesh:function(x,b,w){var S,_=null,T=null,A=[];return x.children.forEach(function(I){b.has(I.ID)&&(_=b.get(I.ID)),w.has(I.ID)&&A.push(w.get(I.ID))}),A.length>1?T=A:A.length>0?T=A[0]:(T=new ai({color:13421772}),A.push(T)),"color"in _.attributes&&A.forEach(function(I){I.vertexColors=!0}),_.FBX_Deformer?(A.forEach(function(I){I.skinning=!0}),S=new Er(_,T),S.normalizeSkinWeights()):S=new Ge(_,T),S},createCurve:function(x,b){var w=x.children.reduce(function(_,T){return b.has(T.ID)&&(_=b.get(T.ID)),_},null),S=new st({color:3342591,linewidth:1});return new Ut(w,S)},getTransformData:function(x,b){var w={};"InheritType"in b&&(w.inheritType=parseInt(b.InheritType.value)),"RotationOrder"in b?w.eulerOrder=M(b.RotationOrder.value):w.eulerOrder="ZYX","Lcl_Translation"in b&&(w.translation=b.Lcl_Translation.value),"PreRotation"in b&&(w.preRotation=b.PreRotation.value),"Lcl_Rotation"in b&&(w.rotation=b.Lcl_Rotation.value),"PostRotation"in b&&(w.postRotation=b.PostRotation.value),"Lcl_Scaling"in b&&(w.scale=b.Lcl_Scaling.value),"ScalingOffset"in b&&(w.scalingOffset=b.ScalingOffset.value),"ScalingPivot"in b&&(w.scalingPivot=b.ScalingPivot.value),"RotationOffset"in b&&(w.rotationOffset=b.RotationOffset.value),"RotationPivot"in b&&(w.rotationPivot=b.RotationPivot.value),x.userData.transformData=w},setLookAtProperties:function(x,b){if("LookAtProperty"in b){var w=t.get(x.ID).children;w.forEach(function(S){if(S.relationship==="LookAtProperty"){var _=e.Objects.Model[S.ID];if("Lcl_Translation"in _){var T=_.Lcl_Translation.value;x.target!==void 0?(x.target.position.fromArray(T),i.add(x.target)):x.lookAt(new P().fromArray(T))}}})}},bindSkeleton:function(x,b,w){var S=this.parsePoseNodes();for(var _ in x){var T=x[_],A=t.get(parseInt(T.ID)).parents;A.forEach(function(I){if(b.has(I.ID)){var F=I.ID,V=t.get(F);V.parents.forEach(function(k){if(w.has(k.ID)){var j=w.get(k.ID);j.bind(new Tr(T.bones),S[k.ID])}})}})}},parsePoseNodes:function(){var x={};if("Pose"in e.Objects){var b=e.Objects.Pose;for(var w in b)if(b[w].attrType==="BindPose"){var S=b[w].PoseNode;Array.isArray(S)?S.forEach(function(_){x[_.Node]=new ue().fromArray(_.Matrix.a)}):x[S.Node]=new ue().fromArray(S.Matrix.a)}}return x},createAmbientLight:function(){if("GlobalSettings"in e&&"AmbientColor"in e.GlobalSettings){var x=e.GlobalSettings.AmbientColor.value,b=x[0],w=x[1],S=x[2];if(b!==0||w!==0||S!==0){var _=new $(b,w,S);i.add(new kn(_,1))}}},setupMorphMaterials:function(){var x=this;i.traverse(function(b){b.isMesh&&b.geometry.morphAttributes.position&&b.geometry.morphAttributes.position.length&&(Array.isArray(b.material)?b.material.forEach(function(w,S){x.setupMorphMaterial(b,w,S)}):x.setupMorphMaterial(b,b.material))})},setupMorphMaterial:function(x,b,w){var S=x.uuid,_=b.uuid,T=!1;if(i.traverse(function(I){I.isMesh&&(Array.isArray(I.material)?I.material.forEach(function(F){F.uuid===_&&I.uuid!==S&&(T=!0)}):I.material.uuid===_&&I.uuid!==S&&(T=!0))}),T===!0){var A=b.clone();A.morphTargets=!0,w===void 0?x.material=A:x.material[w]=A}else b.morphTargets=!0}};function r(){}r.prototype={constructor:r,parse:function(x){var b=new Map;if("Geometry"in e.Objects){var w=e.Objects.Geometry;for(var S in w){var _=t.get(parseInt(S)),T=this.parseGeometry(_,w[S],x);b.set(parseInt(S),T)}}return b},parseGeometry:function(x,b,w){switch(b.attrType){case"Mesh":return this.parseMeshGeometry(x,b,w);case"NurbsCurve":return this.parseNurbsGeometry(b)}},parseMeshGeometry:function(x,b,w){var S=w.skeletons,_=[],T=x.parents.map(function(k){return e.Objects.Model[k.ID]});if(T.length!==0){var A=x.children.reduce(function(k,j){return S[j.ID]!==void 0&&(k=S[j.ID]),k},null);x.children.forEach(function(k){w.morphTargets[k.ID]!==void 0&&_.push(w.morphTargets[k.ID])});var I=T[0],F={};"RotationOrder"in I&&(F.eulerOrder=M(I.RotationOrder.value)),"InheritType"in I&&(F.inheritType=parseInt(I.InheritType.value)),"GeometricTranslation"in I&&(F.translation=I.GeometricTranslation.value),"GeometricRotation"in I&&(F.rotation=I.GeometricRotation.value),"GeometricScaling"in I&&(F.scale=I.GeometricScaling.value);var V=E(F);return this.genGeometry(b,A,_,V)}},genGeometry:function(x,b,w,S){var _=new ae;x.attrName&&(_.name=x.attrName);var T=this.parseGeoNode(x,b),A=this.genBuffers(T),I=new ie(A.vertex,3);if(I.applyMatrix4(S),_.setAttribute("position",I),A.colors.length>0&&_.setAttribute("color",new ie(A.colors,3)),b&&(_.setAttribute("skinIndex",new Pn(A.weightsIndices,4)),_.setAttribute("skinWeight",new ie(A.vertexWeights,4)),_.FBX_Deformer=b),A.normal.length>0){var F=new yt().getNormalMatrix(S),V=new ie(A.normal,3);V.applyNormalMatrix(F),_.setAttribute("normal",V)}if(A.uvs.forEach(function(Be,ge){var X="uv"+(ge+1).toString();ge===0&&(X="uv"),_.setAttribute(X,new ie(A.uvs[ge],2))}),T.material&&T.material.mappingType!=="AllSame"){var k=A.materialIndex[0],j=0;if(A.materialIndex.forEach(function(Be,ge){Be!==k&&(_.addGroup(j,ge-j,k),k=Be,j=ge)}),_.groups.length>0){var Y=_.groups[_.groups.length-1],le=Y.start+Y.count;le!==A.materialIndex.length&&_.addGroup(le,A.materialIndex.length-le,k)}_.groups.length===0&&_.addGroup(0,A.materialIndex.length,A.materialIndex[0])}return this.addMorphTargets(_,x,w,S),_},parseGeoNode:function(x,b){var w={};if(w.vertexPositions=x.Vertices!==void 0?x.Vertices.a:[],w.vertexIndices=x.PolygonVertexIndex!==void 0?x.PolygonVertexIndex.a:[],x.LayerElementColor&&(w.color=this.parseVertexColors(x.LayerElementColor[0])),x.LayerElementMaterial&&(w.material=this.parseMaterialIndices(x.LayerElementMaterial[0])),x.LayerElementNormal&&(w.normal=this.parseNormals(x.LayerElementNormal[0])),x.LayerElementUV){w.uv=[];for(var S=0;x.LayerElementUV[S];)w.uv.push(this.parseUVs(x.LayerElementUV[S])),S++}if(x.LayerElementUserData){w.userAttrs=[];for(var S=0;x.LayerElementUserData[S];)S++}return w.weightTable={},b!==null&&(w.skeleton=b,b.rawBones.forEach(function(_,T){_.indices.forEach(function(A,I){w.weightTable[A]===void 0&&(w.weightTable[A]=[]),w.weightTable[A].push({id:T,weight:_.weights[I]})})})),w},genBuffers:function(x){var b={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},w=0,S=0,_=!1,T=[],A=[],I=[],F=[],V=[],k=[],j=this;return x.vertexIndices.forEach(function(Y,le){var Be=!1;Y<0&&(Y=Y^-1,Be=!0);var ge=[],X=[];if(T.push(Y*3,Y*3+1,Y*3+2),x.color){var Ve=v(le,w,Y,x.color);I.push(Ve[0],Ve[1],Ve[2])}if(x.skeleton){if(x.weightTable[Y]!==void 0&&x.weightTable[Y].forEach(function(K){X.push(K.weight),ge.push(K.id)}),X.length>4){_||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),_=!0);var Se=[0,0,0,0],Ae=[0,0,0,0];X.forEach(function(K,J){var fe=K,he=ge[J];Ae.forEach(function(Le,D,U){if(fe>Le){U[D]=fe,fe=Le;var ee=Se[D];Se[D]=he,he=ee}})}),ge=Se,X=Ae}for(;X.length<4;)X.push(0),ge.push(0);for(var be=0;be<4;++be)V.push(X[be]),k.push(ge[be])}if(x.normal){var Ve=v(le,w,Y,x.normal);A.push(Ve[0],Ve[1],Ve[2])}if(x.material&&x.material.mappingType!=="AllSame")var Z=v(le,w,Y,x.material)[0];x.uv&&x.uv.forEach(function(K,J){var fe=v(le,w,Y,K);F[J]===void 0&&(F[J]=[]),F[J].push(fe[0]),F[J].push(fe[1])}),S++,Be&&(j.genFace(b,x,T,Z,A,I,F,V,k,S),w++,S=0,T=[],A=[],I=[],F=[],V=[],k=[])}),b},genFace:function(x,b,w,S,_,T,A,I,F,V){for(var k=2;k<V;k++)x.vertex.push(b.vertexPositions[w[0]]),x.vertex.push(b.vertexPositions[w[1]]),x.vertex.push(b.vertexPositions[w[2]]),x.vertex.push(b.vertexPositions[w[(k-1)*3]]),x.vertex.push(b.vertexPositions[w[(k-1)*3+1]]),x.vertex.push(b.vertexPositions[w[(k-1)*3+2]]),x.vertex.push(b.vertexPositions[w[k*3]]),x.vertex.push(b.vertexPositions[w[k*3+1]]),x.vertex.push(b.vertexPositions[w[k*3+2]]),b.skeleton&&(x.vertexWeights.push(I[0]),x.vertexWeights.push(I[1]),x.vertexWeights.push(I[2]),x.vertexWeights.push(I[3]),x.vertexWeights.push(I[(k-1)*4]),x.vertexWeights.push(I[(k-1)*4+1]),x.vertexWeights.push(I[(k-1)*4+2]),x.vertexWeights.push(I[(k-1)*4+3]),x.vertexWeights.push(I[k*4]),x.vertexWeights.push(I[k*4+1]),x.vertexWeights.push(I[k*4+2]),x.vertexWeights.push(I[k*4+3]),x.weightsIndices.push(F[0]),x.weightsIndices.push(F[1]),x.weightsIndices.push(F[2]),x.weightsIndices.push(F[3]),x.weightsIndices.push(F[(k-1)*4]),x.weightsIndices.push(F[(k-1)*4+1]),x.weightsIndices.push(F[(k-1)*4+2]),x.weightsIndices.push(F[(k-1)*4+3]),x.weightsIndices.push(F[k*4]),x.weightsIndices.push(F[k*4+1]),x.weightsIndices.push(F[k*4+2]),x.weightsIndices.push(F[k*4+3])),b.color&&(x.colors.push(T[0]),x.colors.push(T[1]),x.colors.push(T[2]),x.colors.push(T[(k-1)*3]),x.colors.push(T[(k-1)*3+1]),x.colors.push(T[(k-1)*3+2]),x.colors.push(T[k*3]),x.colors.push(T[k*3+1]),x.colors.push(T[k*3+2])),b.material&&b.material.mappingType!=="AllSame"&&(x.materialIndex.push(S),x.materialIndex.push(S),x.materialIndex.push(S)),b.normal&&(x.normal.push(_[0]),x.normal.push(_[1]),x.normal.push(_[2]),x.normal.push(_[(k-1)*3]),x.normal.push(_[(k-1)*3+1]),x.normal.push(_[(k-1)*3+2]),x.normal.push(_[k*3]),x.normal.push(_[k*3+1]),x.normal.push(_[k*3+2])),b.uv&&b.uv.forEach(function(j,Y){x.uvs[Y]===void 0&&(x.uvs[Y]=[]),x.uvs[Y].push(A[Y][0]),x.uvs[Y].push(A[Y][1]),x.uvs[Y].push(A[Y][(k-1)*2]),x.uvs[Y].push(A[Y][(k-1)*2+1]),x.uvs[Y].push(A[Y][k*2]),x.uvs[Y].push(A[Y][k*2+1])})},addMorphTargets:function(x,b,w,S){if(w.length!==0){x.morphTargetsRelative=!0,x.morphAttributes.position=[];var _=this;w.forEach(function(T){T.rawTargets.forEach(function(A){var I=e.Objects.Geometry[A.geoID];I!==void 0&&_.genMorphGeometry(x,b,I,S,A.name)})})}},genMorphGeometry:function(x,b,w,S,_){for(var T=b.PolygonVertexIndex!==void 0?b.PolygonVertexIndex.a:[],A=w.Vertices!==void 0?w.Vertices.a:[],I=w.Indexes!==void 0?w.Indexes.a:[],F=x.attributes.position.count*3,V=new Float32Array(F),k=0;k<I.length;k++){var j=I[k]*3;V[j]=A[k*3],V[j+1]=A[k*3+1],V[j+2]=A[k*3+2]}var Y={vertexIndices:T,vertexPositions:V},le=this.genBuffers(Y),Be=new ie(le.vertex,3);Be.name=_||w.attrName,Be.applyMatrix4(S),x.morphAttributes.position.push(Be)},parseNormals:function(x){var b=x.MappingInformationType,w=x.ReferenceInformationType,S=x.Normals.a,_=[];return w==="IndexToDirect"&&("NormalIndex"in x?_=x.NormalIndex.a:"NormalsIndex"in x&&(_=x.NormalsIndex.a)),{dataSize:3,buffer:S,indices:_,mappingType:b,referenceType:w}},parseUVs:function(x){var b=x.MappingInformationType,w=x.ReferenceInformationType,S=x.UV.a,_=[];return w==="IndexToDirect"&&(_=x.UVIndex.a),{dataSize:2,buffer:S,indices:_,mappingType:b,referenceType:w}},parseVertexColors:function(x){var b=x.MappingInformationType,w=x.ReferenceInformationType,S=x.Colors.a,_=[];return w==="IndexToDirect"&&(_=x.ColorIndex.a),{dataSize:4,buffer:S,indices:_,mappingType:b,referenceType:w}},parseMaterialIndices:function(x){var b=x.MappingInformationType,w=x.ReferenceInformationType;if(b==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:w};for(var S=x.Materials.a,_=[],T=0;T<S.length;++T)_.push(T);return{dataSize:1,buffer:S,indices:_,mappingType:b,referenceType:w}},parseNurbsGeometry:function(x){if(fn===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new ae;var b=parseInt(x.Order);if(isNaN(b))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",x.Order,x.id),new ae;for(var w=b-1,S=x.KnotVector.a,_=[],T=x.Points.a,A=0,I=T.length;A<I;A+=4)_.push(new Oe().fromArray(T,A));var F,V;if(x.Form==="Closed")_.push(_[0]);else if(x.Form==="Periodic"){F=w,V=S.length-1-F;for(var A=0;A<w;++A)_.push(_[A])}var k=new fn(w,S,_,F,V),j=k.getPoints(_.length*7),Y=new Float32Array(j.length*3);j.forEach(function(Be,ge){Be.toArray(Y,ge*3)});var le=new ae;return le.setAttribute("position",new _e(Y,3)),le}};function o(){}o.prototype={constructor:o,parse:function(){var x=[],b=this.parseClips();if(b!==void 0)for(var w in b){var S=b[w],_=this.addClip(S);x.push(_)}return x},parseClips:function(){if(e.Objects.AnimationCurve!==void 0){var x=this.parseAnimationCurveNodes();this.parseAnimationCurves(x);var b=this.parseAnimationLayers(x),w=this.parseAnimStacks(b);return w}},parseAnimationCurveNodes:function(){var x=e.Objects.AnimationCurveNode,b=new Map;for(var w in x){var S=x[w];if(S.attrName.match(/S|R|T|DeformPercent/)!==null){var _={id:S.id,attr:S.attrName,curves:{}};b.set(_.id,_)}}return b},parseAnimationCurves:function(x){var b=e.Objects.AnimationCurve;for(var w in b){var S={id:b[w].id,times:b[w].KeyTime.a.map(p),values:b[w].KeyValueFloat.a},_=t.get(S.id);if(_!==void 0){var T=_.parents[0].ID,A=_.parents[0].relationship;A.match(/X/)?x.get(T).curves.x=S:A.match(/Y/)?x.get(T).curves.y=S:A.match(/Z/)?x.get(T).curves.z=S:A.match(/d|DeformPercent/)&&x.has(T)&&(x.get(T).curves.morph=S)}}},parseAnimationLayers:function(x){var b=e.Objects.AnimationLayer,w=new Map;for(var S in b){var _=[],T=t.get(parseInt(S));if(T!==void 0){var A=T.children;A.forEach(function(I,F){if(x.has(I.ID)){var V=x.get(I.ID);if(V.curves.x!==void 0||V.curves.y!==void 0||V.curves.z!==void 0){if(_[F]===void 0){var k=t.get(I.ID).parents.filter(function(X){return X.relationship!==void 0})[0].ID;if(k!==void 0){var j=e.Objects.Model[k.toString()],Y={modelName:j.attrName?mt.sanitizeNodeName(j.attrName):"",ID:j.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};i.traverse(function(X){X.ID===j.id&&(Y.transform=X.matrix,X.userData.transformData&&(Y.eulerOrder=X.userData.transformData.eulerOrder))}),Y.transform||(Y.transform=new ue),"PreRotation"in j&&(Y.preRotation=j.PreRotation.value),"PostRotation"in j&&(Y.postRotation=j.PostRotation.value),_[F]=Y}}_[F]&&(_[F][V.attr]=V)}else if(V.curves.morph!==void 0){if(_[F]===void 0){var le=t.get(I.ID).parents.filter(function(Ae){return Ae.relationship!==void 0})[0].ID,Be=t.get(le).parents[0].ID,ge=t.get(Be).parents[0].ID,k=t.get(ge).parents[0].ID,j=e.Objects.Model[k],Y={modelName:j.attrName?mt.sanitizeNodeName(j.attrName):"",morphName:e.Objects.Deformer[le].attrName};_[F]=Y}_[F][V.attr]=V}}}),w.set(parseInt(S),_)}}return w},parseAnimStacks:function(x){var b=e.Objects.AnimationStack,w={};for(var S in b){var _=t.get(parseInt(S)).children;_.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");var T=x.get(_[0].ID);w[S]={name:b[S].attrName,layer:T}}return w},addClip:function(x){var b=[],w=this;return x.layer.forEach(function(S){b=b.concat(w.generateTracks(S))}),new kt(x.name,-1,b)},generateTracks:function(x){var b=[],w=new P,S=new Ie,_=new P;if(x.transform&&x.transform.decompose(w,S,_),w=w.toArray(),S=new ht().setFromQuaternion(S,x.eulerOrder).toArray(),_=_.toArray(),x.T!==void 0&&Object.keys(x.T.curves).length>0){var T=this.generateVectorTrack(x.modelName,x.T.curves,w,"position");T!==void 0&&b.push(T)}if(x.R!==void 0&&Object.keys(x.R.curves).length>0){var A=this.generateRotationTrack(x.modelName,x.R.curves,S,x.preRotation,x.postRotation,x.eulerOrder);A!==void 0&&b.push(A)}if(x.S!==void 0&&Object.keys(x.S.curves).length>0){var I=this.generateVectorTrack(x.modelName,x.S.curves,_,"scale");I!==void 0&&b.push(I)}if(x.DeformPercent!==void 0){var F=this.generateMorphTrack(x);F!==void 0&&b.push(F)}return b},generateVectorTrack:function(x,b,w,S){var _=this.getTimesForAllAxes(b),T=this.getKeyframeTrackValues(_,b,w);return new Un(x+"."+S,_,T)},generateRotationTrack:function(x,b,w,S,_,T){b.x!==void 0&&(this.interpolateRotations(b.x),b.x.values=b.x.values.map(xe.degToRad)),b.y!==void 0&&(this.interpolateRotations(b.y),b.y.values=b.y.values.map(xe.degToRad)),b.z!==void 0&&(this.interpolateRotations(b.z),b.z.values=b.z.values.map(xe.degToRad));var A=this.getTimesForAllAxes(b),I=this.getKeyframeTrackValues(A,b,w);S!==void 0&&(S=S.map(xe.degToRad),S.push(T),S=new ht().fromArray(S),S=new Ie().setFromEuler(S)),_!==void 0&&(_=_.map(xe.degToRad),_.push(T),_=new ht().fromArray(_),_=new Ie().setFromEuler(_).inverse());for(var F=new Ie,V=new ht,k=[],j=0;j<I.length;j+=3)V.set(I[j],I[j+1],I[j+2],T),F.setFromEuler(V),S!==void 0&&F.premultiply(S),_!==void 0&&F.multiply(_),F.toArray(k,j/3*4);return new Os(x+".quaternion",A,k)},generateMorphTrack:function(x){var b=x.DeformPercent.curves.morph,w=b.values.map(function(_){return _/100}),S=i.getObjectByName(x.modelName).morphTargetDictionary[x.morphName];return new Bn(x.modelName+".morphTargetInfluences["+S+"]",b.times,w)},getTimesForAllAxes:function(x){var b=[];return x.x!==void 0&&(b=b.concat(x.x.times)),x.y!==void 0&&(b=b.concat(x.y.times)),x.z!==void 0&&(b=b.concat(x.z.times)),b=b.sort(function(w,S){return w-S}).filter(function(w,S,_){return _.indexOf(w)==S}),b},getKeyframeTrackValues:function(x,b,w){var S=w,_=[],T=-1,A=-1,I=-1;return x.forEach(function(F){if(b.x&&(T=b.x.times.indexOf(F)),b.y&&(A=b.y.times.indexOf(F)),b.z&&(I=b.z.times.indexOf(F)),T!==-1){var V=b.x.values[T];_.push(V),S[0]=V}else _.push(S[0]);if(A!==-1){var k=b.y.values[A];_.push(k),S[1]=k}else _.push(S[1]);if(I!==-1){var j=b.z.values[I];_.push(j),S[2]=j}else _.push(S[2])}),_},interpolateRotations:function(x){for(var b=1;b<x.values.length;b++){var w=x.values[b-1],S=x.values[b]-w,_=Math.abs(S);if(_>=180){for(var T=_/180,A=S/T,I=w+A,F=x.times[b-1],V=x.times[b]-F,k=V/T,j=F+k,Y=[],le=[];j<x.times[b];)Y.push(j),j+=k,le.push(I),I+=A;x.times=O(x.times,b,Y),x.values=O(x.values,b,le)}}}};function a(){}a.prototype={constructor:a,getPrevNode:function(){return this.nodeStack[this.currentIndent-2]},getCurrentNode:function(){return this.nodeStack[this.currentIndent-1]},getCurrentProp:function(){return this.currentProp},pushStack:function(x){this.nodeStack.push(x),this.currentIndent+=1},popStack:function(){this.nodeStack.pop(),this.currentIndent-=1},setCurrentProp:function(x,b){this.currentProp=x,this.currentPropName=b},parse:function(x){this.currentIndent=0,this.allNodes=new h,this.nodeStack=[],this.currentProp=[],this.currentPropName="";var b=this,w=x.split(/[\r\n]+/);return w.forEach(function(S,_){var T=S.match(/^[\s\t]*;/),A=S.match(/^[\s\t]*$/);if(!(T||A)){var I=S.match("^\\t{"+b.currentIndent+"}(\\w+):(.*){",""),F=S.match("^\\t{"+b.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),V=S.match("^\\t{"+(b.currentIndent-1)+"}}");I?b.parseNodeBegin(S,I):F?b.parseNodeProperty(S,F,w[++_]):V?b.popStack():S.match(/^[^\s\t}]/)&&b.parseNodePropertyContinued(S)}}),this.allNodes},parseNodeBegin:function(x,b){var w=b[1].trim().replace(/^"/,"").replace(/"$/,""),S=b[2].split(",").map(function(I){return I.trim().replace(/^"/,"").replace(/"$/,"")}),_={name:w},T=this.parseNodeAttr(S),A=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(w,_):w in A?(w==="PoseNode"?A.PoseNode.push(_):A[w].id!==void 0&&(A[w]={},A[w][A[w].id]=A[w]),T.id!==""&&(A[w][T.id]=_)):typeof T.id=="number"?(A[w]={},A[w][T.id]=_):w!=="Properties70"&&(w==="PoseNode"?A[w]=[_]:A[w]=_),typeof T.id=="number"&&(_.id=T.id),T.name!==""&&(_.attrName=T.name),T.type!==""&&(_.attrType=T.type),this.pushStack(_)},parseNodeAttr:function(x){var b=x[0];x[0]!==""&&(b=parseInt(x[0]),isNaN(b)&&(b=x[0]));var w="",S="";return x.length>1&&(w=x[1].replace(/^(\w+)::/,""),S=x[2]),{id:b,name:w,type:S}},parseNodeProperty:function(x,b,w){var S=b[1].replace(/^"/,"").replace(/"$/,"").trim(),_=b[2].replace(/^"/,"").replace(/"$/,"").trim();S==="Content"&&_===","&&(_=w.replace(/"/g,"").replace(/,$/,"").trim());var T=this.getCurrentNode(),A=T.name;if(A==="Properties70"){this.parseNodeSpecialProperty(x,S,_);return}if(S==="C"){var I=_.split(",").slice(1),F=parseInt(I[0]),V=parseInt(I[1]),k=_.split(",").slice(3);k=k.map(function(j){return j.trim().replace(/^"/,"")}),S="connections",_=[F,V],B(_,k),T[S]===void 0&&(T[S]=[])}S==="Node"&&(T.id=_),S in T&&Array.isArray(T[S])?T[S].push(_):S!=="a"?T[S]=_:T.a=_,this.setCurrentProp(T,S),S==="a"&&_.slice(-1)!==","&&(T.a=C(_))},parseNodePropertyContinued:function(x){var b=this.getCurrentNode();b.a+=x,x.slice(-1)!==","&&(b.a=C(b.a))},parseNodeSpecialProperty:function(x,b,w){var S=w.split('",').map(function(V){return V.trim().replace(/^\"/,"").replace(/\s/,"_")}),_=S[0],T=S[1],A=S[2],I=S[3],F=S[4];switch(T){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":F=parseFloat(F);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":F=C(F);break}this.getPrevNode()[_]={type:T,type2:A,flag:I,value:F},this.setCurrentProp(this.getPrevNode(),_)}};function l(){}l.prototype={constructor:l,parse:function(x){var b=new c(x);b.skip(23);for(var w=b.getUint32(),S=new h;!this.endOfContent(b);){var _=this.parseNode(b,w);_!==null&&S.add(_.name,_)}return S},endOfContent:function(x){return x.size()%16===0?(x.getOffset()+160+16&-16)>=x.size():x.getOffset()+160+16>=x.size()},parseNode:function(x,b){var w={},S=b>=7500?x.getUint64():x.getUint32(),_=b>=7500?x.getUint64():x.getUint32();b>=7500?x.getUint64():x.getUint32();var T=x.getUint8(),A=x.getString(T);if(S===0)return null;for(var I=[],F=0;F<_;F++)I.push(this.parseProperty(x));var V=I.length>0?I[0]:"",k=I.length>1?I[1]:"",j=I.length>2?I[2]:"";for(w.singleProperty=_===1&&x.getOffset()===S;S>x.getOffset();){var Y=this.parseNode(x,b);Y!==null&&this.parseSubNode(A,w,Y)}return w.propertyList=I,typeof V=="number"&&(w.id=V),k!==""&&(w.attrName=k),j!==""&&(w.attrType=j),A!==""&&(w.name=A),w},parseSubNode:function(x,b,w){if(w.singleProperty===!0){var S=w.propertyList[0];Array.isArray(S)?(b[w.name]=w,w.a=S):b[w.name]=S}else if(x==="Connections"&&w.name==="C"){var _=[];w.propertyList.forEach(function(j,Y){Y!==0&&_.push(j)}),b.connections===void 0&&(b.connections=[]),b.connections.push(_)}else if(w.name==="Properties70"){var T=Object.keys(w);T.forEach(function(j){b[j]=w[j]})}else if(x==="Properties70"&&w.name==="P"){var A=w.propertyList[0],I=w.propertyList[1],F=w.propertyList[2],V=w.propertyList[3],k;A.indexOf("Lcl ")===0&&(A=A.replace("Lcl ","Lcl_")),I.indexOf("Lcl ")===0&&(I=I.replace("Lcl ","Lcl_")),I==="Color"||I==="ColorRGB"||I==="Vector"||I==="Vector3D"||I.indexOf("Lcl_")===0?k=[w.propertyList[4],w.propertyList[5],w.propertyList[6]]:k=w.propertyList[4],b[A]={type:I,type2:F,flag:V,value:k}}else b[w.name]===void 0?typeof w.id=="number"?(b[w.name]={},b[w.name][w.id]=w):b[w.name]=w:w.name==="PoseNode"?(Array.isArray(b[w.name])||(b[w.name]=[b[w.name]]),b[w.name].push(w)):b[w.name][w.id]===void 0&&(b[w.name][w.id]=w)},parseProperty:function(x){var b=x.getString(1);switch(b){case"C":return x.getBoolean();case"D":return x.getFloat64();case"F":return x.getFloat32();case"I":return x.getInt32();case"L":return x.getInt64();case"R":var w=x.getUint32();return x.getArrayBuffer(w);case"S":var w=x.getUint32();return x.getString(w);case"Y":return x.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var S=x.getUint32(),_=x.getUint32(),T=x.getUint32();if(_===0)switch(b){case"b":case"c":return x.getBooleanArray(S);case"d":return x.getFloat64Array(S);case"f":return x.getFloat32Array(S);case"i":return x.getInt32Array(S);case"l":return x.getInt64Array(S)}typeof Zc>"u"&&console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var A=new Zc.Inflate(new Uint8Array(x.getArrayBuffer(T))),I=new c(A.decompress().buffer);switch(b){case"b":case"c":return I.getBooleanArray(S);case"d":return I.getFloat64Array(S);case"f":return I.getFloat32Array(S);case"i":return I.getInt32Array(S);case"l":return I.getInt64Array(S)}default:throw new Error("THREE.FBXLoader: Unknown property type "+b)}}};function c(x,b){this.dv=new DataView(x),this.offset=0,this.littleEndian=b!==void 0?b:!0}c.prototype={constructor:c,getOffset:function(){return this.offset},size:function(){return this.dv.buffer.byteLength},skip:function(x){this.offset+=x},getBoolean:function(){return(this.getUint8()&1)===1},getBooleanArray:function(x){for(var b=[],w=0;w<x;w++)b.push(this.getBoolean());return b},getUint8:function(){var x=this.dv.getUint8(this.offset);return this.offset+=1,x},getInt16:function(){var x=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,x},getInt32:function(){var x=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,x},getInt32Array:function(x){for(var b=[],w=0;w<x;w++)b.push(this.getInt32());return b},getUint32:function(){var x=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,x},getInt64:function(){var x,b;return this.littleEndian?(x=this.getUint32(),b=this.getUint32()):(b=this.getUint32(),x=this.getUint32()),b&2147483648?(b=~b&4294967295,x=~x&4294967295,x===4294967295&&(b=b+1&4294967295),x=x+1&4294967295,-(b*4294967296+x)):b*4294967296+x},getInt64Array:function(x){for(var b=[],w=0;w<x;w++)b.push(this.getInt64());return b},getUint64:function(){var x,b;return this.littleEndian?(x=this.getUint32(),b=this.getUint32()):(b=this.getUint32(),x=this.getUint32()),b*4294967296+x},getFloat32:function(){var x=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,x},getFloat32Array:function(x){for(var b=[],w=0;w<x;w++)b.push(this.getFloat32());return b},getFloat64:function(){var x=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,x},getFloat64Array:function(x){for(var b=[],w=0;w<x;w++)b.push(this.getFloat64());return b},getArrayBuffer:function(x){var b=this.dv.buffer.slice(this.offset,this.offset+x);return this.offset+=x,b},getString:function(x){for(var b=[],w=0;w<x;w++)b[w]=this.getUint8();var S=b.indexOf(0);return S>=0&&(b=b.slice(0,S)),js.decodeText(new Uint8Array(b))}};function h(){}h.prototype={constructor:h,add:function(x,b){this[x]=b}};function u(x){var b="Kaydara FBX Binary  \0";return x.byteLength>=b.length&&b===L(x,0,b.length)}function f(x){var b=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],w=0;function S(A){var I=x[A-1];return x=x.slice(w+A),w++,I}for(var _=0;_<b.length;++_){var T=S(1);if(T===b[_])return!1}return!0}function d(x){var b=/FBXVersion: (\d+)/,w=x.match(b);if(w){var S=parseInt(w[1]);return S}throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function p(x){return x/46186158e3}var y=[];function v(x,b,w,S){var _;switch(S.mappingType){case"ByPolygonVertex":_=x;break;case"ByPolygon":_=b;break;case"ByVertice":_=w;break;case"AllSame":_=S.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+S.mappingType)}S.referenceType==="IndexToDirect"&&(_=S.indices[_]);var T=_*S.dataSize,A=T+S.dataSize;return G(y,S.buffer,T,A)}var m=new ht,g=new P;function E(x){var b=new ue,w=new ue,S=new ue,_=new ue,T=new ue,A=new ue,I=new ue,F=new ue,V=new ue,k=new ue,j=new ue,Y=x.inheritType?x.inheritType:0;if(x.translation&&b.setPosition(g.fromArray(x.translation)),x.preRotation){var le=x.preRotation.map(xe.degToRad);le.push(x.eulerOrder),w.makeRotationFromEuler(m.fromArray(le))}if(x.rotation){var le=x.rotation.map(xe.degToRad);le.push(x.eulerOrder),S.makeRotationFromEuler(m.fromArray(le))}if(x.postRotation){var le=x.postRotation.map(xe.degToRad);le.push(x.eulerOrder),_.makeRotationFromEuler(m.fromArray(le))}x.scale&&T.scale(g.fromArray(x.scale)),x.scalingOffset&&I.setPosition(g.fromArray(x.scalingOffset)),x.scalingPivot&&A.setPosition(g.fromArray(x.scalingPivot)),x.rotationOffset&&F.setPosition(g.fromArray(x.rotationOffset)),x.rotationPivot&&V.setPosition(g.fromArray(x.rotationPivot)),x.parentMatrixWorld&&(k=x.parentMatrixWorld);var Be=w.multiply(S).multiply(_),ge=new ue;k.extractRotation(ge);var X=new ue;X.copyPosition(k);var Ve=new ue;Ve.getInverse(ge).multiply(k);var Se=new ue;if(Y===0)Se.copy(ge).multiply(Be).multiply(Ve).multiply(T);else if(Y===1)Se.copy(ge).multiply(Ve).multiply(Be).multiply(T);else{var Ae=new ue().getInverse(T),be=new ue().multiply(Ve).multiply(Ae);Se.copy(ge).multiply(Be).multiply(be).multiply(T)}var Z=new ue().getInverse(V),K=new ue().getInverse(A),J=new ue;J.copy(b).multiply(F).multiply(V).multiply(w).multiply(S).multiply(_).multiply(Z).multiply(I).multiply(A).multiply(T).multiply(K);var fe=new ue().copyPosition(J),he=new ue().copy(k).multiply(fe);return j.copyPosition(he),J=new ue().multiply(j).multiply(Se),J}function M(x){x=x||0;var b=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return x===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),b[0]):b[x]}function C(x){var b=x.split(",").map(function(w){return parseFloat(w)});return b}function L(x,b,w){return b===void 0&&(b=0),w===void 0&&(w=x.byteLength),js.decodeText(new Uint8Array(x,b,w))}function B(x,b){for(var w=0,S=x.length,_=b.length;w<_;w++,S++)x[S]=b[w]}function G(x,b,w,S){for(var _=w,T=0;_<S;_++,T++)x[T]=b[_];return x}function O(x,b,w){return x.slice(0,b).concat(w).concat(x.slice(b))}return n}();var Mi=class{constructor(t={}){this.pxlTimer=null,this.pxlUtils=null,this.pxlQuality=null,this.pxlVideo=null,this.pxlCamera=null,this.pxlAutoCam=null,this.pxlUser=null,this.pxlEnv=null,this.pxlAnim=null,this.pxlDevice=null,this.pxlShaders=null,this.runDebugger=!1,this.assetRoot=this.findInDict(t,"assetRoot","images/assets/"),this.guiRoot=this.findInDict(t,"guiRoot","images/GUI/"),this.roomRoot=this.findInDict(t,"roomRoot","images/rooms/"),this.vidRoot=this.findInDict(t,"vidRoot","images/screenContent/"),this.workerList=[]}setDependencies(t){this.pxlTimer=t.pxlTimer,this.pxlUtils=t.pxlUtils,this.pxlQuality=t.pxlQuality,this.pxlVideo=t.pxlVideo,this.pxlCamera=t.pxlCamera,this.pxlAutoCam=t.pxlAutoCam,this.pxlUser=t.pxlUser,this.pxlEnv=t.pxlEnv,this.pxlAnim=t.pxlAnim,this.pxlDevice=t.pxlDevice,this.pxlShaders=t.pxlShaders}log(...t){this.runDebugger&&(console.log("---"),t.forEach(i=>{console.log(i)}))}findInDict(t,i,n){return t.hasOwnProperty(i)?t[i]:(t[i]=n,n)}checkForUserData(t,i,n){if(n.hasOwnProperty("userData")){if(n.hasOwnProperty("material")&&(n.userData.hasOwnProperty("doubleSided")&&n.userData.doubleSided?n.material.side=Pt:n.material.side=Et),n.userData.hasOwnProperty("GlowPass")&&n.userData.GlowPass&&(t.geoList.GlowPass||(t.geoList.GlowPass=[]),t.geoList.GlowPass.push(n)),n.userData.hasOwnProperty("GlowPassMask")&&n.userData.GlowPass&&(t.geoList.GlowPassMask||(t.geoList.GlowPassMask=[]),t.geoList.GlowPassMask.push(n)),n.userData.hasOwnProperty("castShadow")&&n.userData.castShadow&&(n.castShadow=!0),n.userData.hasOwnProperty("receiveShadow")&&n.userData.receiveShadow&&(n.receiveShadow=!0),n.userData.hasOwnProperty("Shader")&&n.userData.Shader!=""){let s=n.userData.Shader.trim();t.shaderGeoList||(t.shaderGeoList={}),t.shaderGeoList[n.name]=n}n.userData.hasOwnProperty("Emitter")&&n.userData.Emitter!=""&&(t.emitterList||(t.emitterList={}),t.emitterList[n.userData.Emitter]||(t.emitterList[n.userData.Emitter]={},t.emitterList[n.userData.Emitter].Emitter=[],t.emitterList[n.userData.Emitter].Particles=[]),t.emitterList[n.userData.Emitter].Emitter.push(n)),n.userData.hasOwnProperty("Hover")&&n.userData.Hover&&(t.hoverableExists=!0,t.hoverableList.push(n)),n.userData.hasOwnProperty("Click")&&n.userData.Click&&(t.clickableExists=!0,t.clickableList.push(n)),this.checkObjectInstancing(t,i,n),n.userData.hasOwnProperty("Scripted")&&(t.geoList.hasOwnProperty("Scripted")||(t.geoList.Scripted={}),t.geoList.Scripted[n.name]=n,n.children.forEach(r=>{if(r.name.includes("Geo")){let o=n.position,a=n.rotation,l=n.scale;r.position.set(o.x,o.y,o.z),r.rotation.set(a.x,a.y,a.z),r.scale.set(l.x,l.y,l.z),r.updateMatrix(),r.children.forEach(h=>{this.checkForUserData(t,i,h),h.type=="Group"&&(h.position.set(o.x+h.position.x,o.y+h.position.y,o.z+h.position.z),h.rotation.set(a.x,a.y,a.z),h.scale.set(l.x,l.y,l.z)),h.updateMatrix()})}else if(r.name.includes("Colliders")){let o=n.position,a=n.rotation,l=n.scale;r.position.set(o.x,o.y,o.z),r.rotation.set(a.x,a.y,a.z),r.scale.set(l.x,l.y,l.z),r.updateMatrix(),r.visible=!1}}))}}canAppendChildren(t,i){if(i.type!="Group")return!1;let n=!0;return t.geoList.hasOwnProperty("Scripted")&&t.geoList.Scripted.hasOwnProperty(i.name)&&(console.log(t.geoList.Scripted,t.geoList.Scripted.hasOwnProperty(i.name),i.name),n=!1),n}canAddToScene(t,i){let n=!0;return i.hasOwnProperty("userData")&&i.userData.hasOwnProperty("Instance")&&t.hasOwnProperty("baseInstancesNames")&&t.baseInstancesNames.hasOwnProperty(i.userData.Instance)&&(n=!1),n}checkIsGlassLiquid(t,i,n,s){let r=!1;if(n.userData.hasOwnProperty("isGlass")&&n.userData.isGlass&&(r=!0),n.userData.hasOwnProperty("isLiquid")&&n.userData.isLiquid&&(r=!0),!r)return!1;if(this.log("Glass Detected - ",n.name),!t.glassGroup){let d=new Lt;t.glassGroup=d,i.add(d)}let o=n.material.clone();n.material=o,n.material.transparent=!0,n.material.opacity=.5,n.material.shininess=20,n.material.specular=n.material.color.clone(),n.material.specular.r=n.material.specular.r*.5+.1,n.material.specular.g=n.material.specular.g*.5+.1,n.material.specular.b=n.material.specular.b*.5+.1,n.material.side=ut,n.material.depthWrite=!1,n.matrixAutoUpdate=!1,n.renderOrder=1,t.glassList.push(n),t.glassGroup.add(n);let a=n.geometry.clone(),l=n.material.clone();l.copy(n.material);let c=new Ge(a,l);c.name=n.name+"_Front",c.material.shininess=40,c.material.side=Et,c.matrixAutoUpdate=!1,c.renderOrder=2;let h=n.position,u=n.rotation,f=n.scale;return c.rotation.set(u.x,u.y,u.z),c.position.set(h.x,h.y,h.z),c.scale.set(f.x,f.y,f.z),c.updateMatrix(),n.parent.add(c),t.glassList.push(c),t.glassGroup.add(c),r}checkObjectInstancing(t,i,n){if(!t.hasOwnProperty("baseInstancesNames")||!t.hasOwnProperty("baseInstancesList"))return!1;if(n.hasOwnProperty("userData")&&n.userData.hasOwnProperty("Instance")&&t.baseInstancesList.hasOwnProperty(n.userData.Instance)){let s=n.name;this.log("Generate Instance - ",s),t.geoList.hasOwnProperty("InstanceObjects")||(t.geoList.InstanceObjects={});let r=n.position,o=n.rotation,a=n.scale,l=t.baseInstancesList[n.userData.Instance];if(n.type=="Mesh"){let c=new ws(l.geometry,l.material,n.geometry.attributes.position.count);c.instanceMatrix.setUsage(sn),c.name=s+"Geo";let h=new ue,u=new P,f=new P,d=new Ie,p=new P(1,1,1),y=n.geometry.attributes.hasOwnProperty("color"),v={};for(let m=0;m<n.geometry.attributes.position.count;m++){u.fromBufferAttribute(n.geometry.attributes.position,m);let g=u.toArray();if(g=g.join(","),!v.hasOwnProperty(g)){f.fromBufferAttribute(n.geometry.attributes.normal,m);let E=new ht(0,Math.random()*2*Math.PI,0);d.setFromEuler(E);let M=p;if(y){let C=n.geometry.attributes.color.getX(m);M=new P(C,C,C)}h.compose(u,d,M),c.setMatrixAt(m,h),v[g]=!0}}c.visible=!0,c.updateMatrix(),t.geoList.InstanceObjects[s]=c,n.parent.add(c),n.visible=!1,n.parent.remove(n)}else{let c=new ws(l.geometry,l.material,1);c.instanceMatrix.setUsage(sn),c.name=s+"Geo";let h=!1;if(n.userData.hasOwnProperty("fixInstMatrix")&&(h=!!n.userData.fixInstMatrix),h)c.rotation.set(o.x,o.y,o.z),c.position.set(r.x,r.y,r.z),c.scale.set(a.x,a.y,a.z);else{let u=new ue;u.compose(r,new Ie().setFromEuler(o),a),c.setMatrixAt(0,u)}c.visible=!0,c.updateMatrix(),t.geoList.InstanceObjects[s]=c,n.parent.add(c),n.visible=!1,n.parent.remove(n)}}}loadSceneFBX(t,i,n,s,r,o){r!=""&&(this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[r]=0);let a=0,l=0;var c=new oo;return c.load(t,h=>{let u=h.children,f={},d=[];u.forEach((p,y)=>{d.push(p.name),f[p.name]=y}),d.forEach(p=>{if(p.includes("Camera")&&(u[f[p]].children.forEach((v,m)=>{if(v.matrixAutoUpdate=!1,v.name.includes("Position")){let g=v.position.clone();this.pxlCamera.cameraPrevPos=g.clone(),this.pxlCamera.camera.position.copy(g),this.pxlCamera.cameraPos.copy(g),this.pxlCamera.camera.updateMatrixWorld(),this.pxlCamera.cameraBooted=!0,this.pxlEnv.camInitPos=g,this.pxlEnv.camThumbPos=this.pxlEnv.camThumbPos.clone().add(g.clone())}else if(v.name.includes("LookAt")){let g=v.position.clone();this.pxlCamera.cameraAimTarget.position.copy(g),this.pxlCamera.camera.lookAt(g),this.pxlCamera.camera.updateMatrixWorld(),this.pxlCamera.cameraPrevLookAt=new dt,this.pxlEnv.camInitLookAt=g,this.pxlEnv.camThumbLookAt=this.pxlEnv.camThumbLookAt.clone().add(g.clone())}else if(v.name.includes("ReturnPosition")){let g=v.position.clone();this.pxlEnv.camReturnPos=g}else if(v.name.includes("ReturnLookAt")){let g=v.position.clone();this.pxlEnv.camReturnLookAt=g}}),this.pxlDevice.touchMouseData.initialQuat=this.pxlCamera.camera.quaternion.clone()),p.includes("Items")){let y=u[f[p]].children,v=null,m=null,g=null,E=null,M=null;for(;y.length>0;){let C=y.pop();C.type=="Group"&&(C.children.forEach(B=>{B.name.includes("Item")?(C.name.includes("LowGravity")?(m==null&&(m=new ye({uniforms:{color:{value:B.material.emissive.clone()},alphaMap:{type:"t",value:B.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.objects.itemVert(),fragmentShader:this.pxlShaders.objects.itemFrag(),transparent:!0,side:Pt,depthTest:!0,depthWrite:!1})),B.material=m):C.name.includes("LizardKing")?(g==null&&(g=B.material.clone(),g.emissiveMap=g.map,g.emissive=new $(8421504)),B.material=g):C.name.includes("StarField")||C.name.includes("InfinityZoom")&&(E==null&&(E=new ye({uniforms:{color:{value:B.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.objects.itemZoomFrag(),transparent:!0,side:Pt,depthTest:!0,depthWrite:!0})),B.material=E),this.pxlUser.itemList[C.name]=B):B.name.includes("ItemBase")&&(v==null&&(v=new ye({uniforms:{color:{value:B.material.emissive.clone()},alphaMap:{type:"t",value:B.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemBaseRotateRate}},vertexShader:this.pxlShaders.objects.itemBaseVert(),fragmentShader:this.pxlShaders.objects.itemBaseFrag(),transparent:!0,side:Pt,depthTest:!0,depthWrite:!1})),B.material=v,this.pxlUser.itemBaseList.push(B))}),o[0].add(C),this.pxlUser.itemGroupList[C.name]=C,this.pxlUser.itemListNames.push(C.name))}}}),r!=""&&(this.pxlEnv.geoList[r]=h,this.pxlEnv.geoLoadList[r]=1),this.pxlEnv.geoLoadList[r]=1},void 0,h=>{r!=""&&(this.pxlEnv.geoLoadList[r]=1)}),c}loadRoomFBX(t,i,n,s){n==""&&(n=t.roomName),this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[n]=0;let r=0,o=t.scene;var a=new oo;return a.load(i,l=>{let c=l.children,h={},u=[];c.forEach((d,p)=>{let y=d.name.split("_")[0];u.push(y),h[y]=p});let f=0;if(u.indexOf("Camera")>-1){let d=[];this.log("Camera - ",c[h.Camera]);let p=!1;c[h.Camera].children.forEach((m,g)=>{m.name.includes("Position")||m.name.includes("LookAt")||m.name.includes("ReturnPosition")||m.name.includes("ReturnLookAt")?(d.push(m),p=!0):m.children.length>0&&d.push(...m.children)}),d.forEach((m,g)=>{m.matrixAutoUpdate=!1;let E=m.parent.name;if(E==c[h.Camera].name&&(E="Default"),t.camLocation.hasOwnProperty(E)||(t.camLocation[E]={},t.camLocation[E].Position=new dt(0,0,-10),t.camLocation[E].LookAt=new dt(0,0,0)),m.name.includes("PositionMobile")){let M=m.position.clone();t.cameraBooted=!0,t.camInitPos=M,t.camLocation[E].PositionMobile=M}else if(m.name.includes("LookAtMobile")){let M=m.position.clone();t.camInitLookAt=M,t.camLocation[E].LookAtMobile=M}else if(m.name.includes("Position")){let M=m.position.clone();t.cameraBooted=!0,t.camInitPos=M,t.camLocation[E].Position=M}else if(m.name.includes("LookAt")){let M=m.position.clone();t.camInitLookAt=M,t.camLocation[E].LookAt=M}else if(m.name.includes("ReturnPosition")){let M=m.position.clone();t.camReturnPos=M,t.camLocation[E].ReturnPosition=M}else if(m.name.includes("ReturnLookAt")){let M=m.position.clone();t.camReturnLookAt=M,t.camLocation[E].ReturnLookAt=M}}),Object.keys(t.camLocation).forEach(m=>{let g=t.camLocation[m];g.hasOwnProperty("PositionMobile")||(g.PositionMobile=g.Position),g.hasOwnProperty("LookAtMobile")||(g.LookAtMobile=g.LookAt)})}if(u.indexOf("AutoCamPaths")>-1){let d=c[h.AutoCamPaths].children;for(this.log("AutoCamPaths - ",c[h.AutoCamPaths]),this.pxlAutoCam.autoCamPaths[t.roomName]=[];d.length>0;){let p=d.pop();if(p.type=="Group"){let y={};p.children.forEach(m=>{m.matrixAutoUpdate=!1,y[m.name]=m}),p.visible=!1,p.matrixAutoUpdate=!1,o.add(p),this.pxlAutoCam.autoCamPaths[t.roomName].push(y)}}}if(u.indexOf("Instances")>-1&&this.pxlQuality.detailLimit==0){let d=[...c[h.Instances].children];if(this.log("Instances - ",c[h.Instances]),d.length>0){t.hasOwnProperty("baseInstancesNames")||(t.baseInstancesNames=[]),t.hasOwnProperty("baseInstancesList")||(t.baseInstancesList={});let p=[];d.forEach((y,v)=>{this.checkForUserData(t,o,y),t.baseInstancesNames.push(y),t.baseInstancesList[y.name]=y})}}if(u.indexOf("Lights")>-1){let d=c[h.Lights].children;for(this.log("Lights - ",c[h.Lights]);d.length>0;){let p=d.pop();d.push(...p.children),p.type.includes("Light")&&(t.hasOwnProperty("lightList")||(t.lightList={}),t.geoList.hasOwnProperty("lights")||(t.geoList.lights=[]),p.type=="PointLight"&&(p.decay=3,p.distance=20*p.intensity,p.intensity=2),t.lightList.hasOwnProperty(p.type)||(t.lightList[p.type]=[]),t.lightList[p.type].push(p),t.geoList.lights.push(p),p.matrixAutoUpdate=!1,o.add(p))}}if(u.includes("Scene")||u.includes("MainScene")){let d=h.Scene||h.MainScene,p=c[d].children;this.log("MainScene - ",c[d]);let y=-1;for(;y<p.length&&(y++,!(y>=p.length));){let v=p[y];if(this.checkForUserData(t,o,v),v.isMesh){v.userData.hasOwnProperty("Show")&&(!v.userData.Show||v.userData.Show==0)&&(v.visible=!1),t.geoList[v.name]=v;let m=Et;if(v.userData.doubleSided&&(m=Pt),s.hasOwnProperty(v.name)){let g=null;v.material.map&&(g=v.material.map),v.material=s[v.name],g&&(v.material.uniforms.hasOwnProperty("diffuse")&&(v.material.uniforms.diffuse.value=g),v.material.hasOwnProperty("emissiveMap")&&(v.material.emissiveMap=g,v.material.emissive.r>0&&(v.material.emissiveIntensity=v.material.emissive.r))),v.matrixAutoUpdate=!1}else{let g=v.material;Array.isArray(v.material)||(g=[v.material]),this.checkIsGlassLiquid(t,o,v,g)||g.forEach(E=>{E.map&&!E.emissiveMap&&E.emissive.r>0&&(E.emissiveMap=E.map,E.emissiveIntensity=E.emissive.r,E.emissive=new $(16777215)),E.side=m})}}else if(v.type.includes("Light"))t.lightList.hasOwnProperty(v.type)||(t.lightList[v.type]=[]),t.lightList[v.type].push(v);else if(v.type=="Group"){let m=!0;if(t.geoList.hasOwnProperty("Scripted")){let g=Object.keys(t.geoList.Scripted)}m&&p.push(...v.children)}}o.add(c[d])}if(u.indexOf("Glass")>-1){let d=c[h.Glass].children;if(this.log("Glass - ",c[h.Glass]),d.length>0){if(!t.glassGroup){let p=new Lt;t.glassGroup=p,o.add(p)}for(;d.length>0;){let p=d.pop();if(d.push(...p.children),p.isMesh){this.checkForUserData(t,o,p);let y=p.material.clone();p.material=y,p.material.transparent=!0,p.material.opacity=.5,p.material.shininess=20,p.material.specular=p.material.color.clone(),p.material.specular.r=p.material.specular.r*.5+.1,p.material.specular.g=p.material.specular.g*.5+.1,p.material.specular.b=p.material.specular.b*.5+.1,p.material.side=ut,p.material.depthWrite=!1,p.matrixAutoUpdate=!1,p.renderOrder=1,t.glassList.push(p),t.glassGroup.add(p);let v=p.geometry.clone(),m=p.material.clone();m.copy(p.material);let g=new Ge(v,m);g.material.shininess=40,g.material.side=Et,g.matrixAutoUpdate=!1,g.renderOrder=2;let E=p.position,M=p.rotation,C=p.scale;g.rotation.set(M.x,M.y,M.z),g.position.set(E.x,E.y,E.z),g.scale.set(C.x,C.y,C.z),g.updateMatrix(),o.add(g),t.glassList.push(g),t.glassGroup.add(g)}}}}if(u.indexOf("Colliders")>-1){let d=c[h.Colliders];this.log("Colliders - ",c[h.Colliders]);let p=d.children;t.collidersExist=p.length>0;for(let y=0;y<p.length;++y){let v=p[y].name,m=p[y].children;for(;m.length>0;){let g=m.pop();if(m.push(...g.children),g.isMesh){g.visible=!1;let E="noAxis";g.userData.checkX&&g.userData.checkZ&&(E=~~(g.userData.checkX>0)+(~~(g.userData.checkZ>0)+"")),v=="ColliderWalls"?(t.antiColliderActive=!0,t.antiColliderList[E].push(g)):v=="ColliderTops"?(t.antiColliderTopActive=!0,t.antiColliderTopList[E].push(g)):(v=="RoomWarpZone"&&t.roomWarp.push(g),t.colliderActive=!0,t.colliderList[E].push(g)),g.matrixAutoUpdate=!1,o.add(g),t.geoList[g.name]=g}}}}if(u.indexOf("PortalExit")>-1){let d=c[h.PortalExit].children;for(this.log("PortalExit - ",c[h.PortalExit]);d.length>0;){let p=d.pop();p.matrixAutoUpdate=!1,t.portalList[p.name]=p}}if(u.indexOf("FlatColor")>-1){let d=c[h.FlatColor].children;for(this.log("FlatColor - ",c[h.FlatColor]);d.length>0;){let p=d.pop();if(d.push(...p.children),p.isMesh){this.checkForUserData(t,o,p);let y=new bt({color:p.material.color.clone()});y.side=Et,y.flatShading=!0,p.material=y,p.matrixAutoUpdate=!1,o.add(p)}}}if(u.indexOf("LambertColor")>-1){let d=c[h.LambertColor].children;for(this.log("LambertColor - ",c[h.LambertColor]);d.length>0;){let p=d.pop();if(d.push(...p.children),p.isMesh){this.checkForUserData(t,o,p);let y=new vi;if(p.material.map){let v=p.material.map.clone();y.map=v,y.emissiveMap=v,y.emissiveIntensity=.5,p.material=y}else y.color=p.material.color.clone(),y.emissive=p.material.emissive.clone(),y.side=Et,y.flatShading=!0,p.material=y;p.matrixAutoUpdate=!1,o.add(p)}}}if(u.indexOf("Sky")>-1){let d=c[h.Sky].children;for(this.log("Sky - ",c[h.Sky]);d.length>0;){let p=d.pop();if(d.push(...p.children),p.isMesh){let y=new ye({uniforms:{diffuse:{type:"t",value:p.material.map},envDiffuse:{type:"t",value:null},noiseTexture:{type:"t",value:this.pxlEnv.cloud3dTexture},fogColor:{value:o.fog.color},time:{value:this.pxlTimer.msRunner},camNear:{type:"f",value:t.camera.near},camFar:{type:"f",value:t.camera.far*.85},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.scene.skyObjectVert(),fragmentShader:this.pxlShaders.scene.skyObjectFrag()});p.geometry.computeFaceNormals(),p.geometry.computeVertexNormals(),p.material=y,p.matrixAutoUpdate=!1,p.frustumCulled=!1,p.layers.set(this.pxlEnv.renderLayerEnum.SKY),t.geoList[p.name]=p,t.textureList[p.name]=y,o.add(p)}}}if(u.indexOf("AnimatedTextures")>-1){let d=c[h.AnimatedTextures].children;for(this.log("AnimatedTextures - ",c[h.AnimatedTextures]);d.length>0;){let p=d.pop();if(d.push(...p.children),p.isMesh){this.checkForUserData(t,o,p);let y={time:{value:this.pxlTimer.msRunner},glowTexture:{type:"t",value:p.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},glowColor:{value:new dt(.01,.35,.55)},intensity:{type:"f",value:.35},rate:{type:"f",value:2},freq:{type:"f",value:1}},v=this.pxlShaders.animated.animTextureVert(),m=this.pxlShaders.animated.animTextureFrag(),g=new ye({uniforms:y,vertexShader:v,fragmentShader:m,transparent:!0,side:Et});p.geometry.computeFaceNormals(),p.geometry.computeVertexNormals(),p.material=g,p.matrixAutoUpdate=!1,o.add(p)}}}if(u.indexOf("ScrollingTextures")>-1){let d=c[h.ScrollingTextures].children;this.log("ScrollingTextures - ",c[h.ScrollingTextures]);let p=1;for(;d.length>0;){p+=1;let y=d.pop();if(d.push(...y.children),y.isMesh){this.checkForUserData(t,o,y);let v=y.name,m=.05;v.indexOf("_")>-1&&(m=v.split("_")[1],m=parseInt(m)*.01);let g=new ye({uniforms:{scrollTexture:{type:"t",value:y.material.map},time:{value:this.pxlTimer.msRunner},speed:{value:m},seed:{type:"f",value:p*1.1423},boostPerc:{value:1}},vertexShader:this.pxlShaders.animated.scrollingTextureVert(),fragmentShader:this.pxlShaders.animated.scrollingTextureFrag(),transparent:!0,side:Et});y.geometry.computeFaceNormals(),y.geometry.computeVertexNormals(),y.material=g,y.matrixAutoUpdate=!1,o.add(y)}}}if(u.indexOf("UserScreens")>-1){let d=c[h.UserScreens].children;this.log("UserScreens - ",c[h.UserScreens]);let p=0,y=[new dt(1,0,0),new dt(0,1,0),new dt(0,0,1)],v=[this.assetRoot+"DJ_Vector_Masks_1.jpg",this.assetRoot+"DJ_Vector_Masks_2.jpg",this.assetRoot+"DJ_Vector_Masks_3.jpg"],m=0,g=0,E=y.length;for(;d.length>0;){let M=d.pop();if(d.push(...M.children),M.isMesh){let C=new ye({uniforms:{camExists:{type:"f",value:0},time:{value:this.pxlTimer.msRunner},seed:{type:"f",value:p*1.1423},alpha:{type:"f",value:1},boostPerc:{value:t.userScreenIntensity},scale:{value:new Ne(100,100)},ratio:{value:new Ne(1,1)},videoFeed:{type:"t",value:null},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},maskChannel:{value:y[m]},maskMap:{type:"t",value:this.pxlUtils.loadTexture(v[g])}},vertexShader:t.userScreenVert,fragmentShader:t.userScreenFrag,transparent:!0,side:Et});M.geometry.computeFaceNormals(),M.geometry.computeVertexNormals(),M.material=C,M.matrixAutoUpdate=!1,t.pxlEnv.camScreenData.screenGeoList.push(M),o.add(M),p+=1,m=p%E,g=Math.floor(p/3)%E}}}if(u.indexOf("Items")>-1){let d=c[h.Items].children;for(this.log("Items - ",c[h.Items]);d.length>0;){let p=d.pop();if(p.type=="Group"){let y=p.children;y.length>0&&(y.forEach(v=>{if(v.name.includes("Item")){let m=new ye({uniforms:{color:{value:v.material.emissive.clone()},alphaMap:{type:"t",value:v.material.map},cloudNoise:{type:"t",value:this.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.objects.itemVert(),fragmentShader:this.pxlShaders.objects.itemFrag(),transparent:!0,side:Pt,depthTest:!0,depthWrite:!1});v.material=m,this.pxlUser.itemList[p.name]=v}else if(v.name.includes("Base")){let m=new ye({uniforms:{color:{value:v.material.emissive.clone()},alphaMap:{type:"t",value:v.material.map},cloudNoise:{type:"t",value:this.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemBaseRotateRate}},vertexShader:this.pxlShaders.objects.itemBaseVert(),fragmentShader:this.pxlShaders.objects.itemBaseFrag(),transparent:!0,side:Pt,depthTest:!0,depthWrite:!1});v.material=m,this.pxlUser.itemBaseList.push(v)}}),o.add(p),this.pxlUser.itemGroupList[p.name]=p,this.pxlUser.itemListNames.push(p.name))}}}if(u.includes("Scripted")){let d=c[h.Scripted].children;for(this.log("Scripted - ",c[h.Scripted]);d.length>0;){let p=d.pop();p.isMesh&&(t.geoList[p.name]=p,o.add(p))}}if(u.includes("Clickable")){let d=c[h.Clickable];this.log("Clickable - ",c[h.Clickable]);let p=d.children;for(let y=0;y<p.length;++y){let v=p[y].name,m=p[y].children;for(;m.length>0;){let g=m.pop();if(m.push(...g.children),g.isMesh){let E=new bt;E.color=new $(16777215),g.material.emissive=new $(4473924),g.material.emissiveMap=g.material.map,g.matrixAutoUpdate=!1,t.objectClickableObjectList[g.name]||(t.objectClickableObjectList[g.name]={}),t.objectClickableObjectList[g.name][v]=g,t.objectClickable.push(g),o.add(g),v=="Hover"&&(g.visible=!1)}}}}if(u.includes("Markers")){let d=c[h.Markers].children;for(this.log("Markers - ",c[h.Markers]);d.length>0;){let p=d.pop();t.marker[p.name]=p.position}}this.pxlEnv.geoList[n]=l,this.pxlEnv.geoLoadList[n]=1,t.fbxPostLoad()},null,l=>{n!=""&&(this.pxlEnv.geoLoadList[n]=1)}),a}loadAnimFBX(t,i,n,s,r){i==""&&(i=t.roomName),this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[i]=0;let o=0,a=t.scene;var l=new oo;return l.load(n,c=>{let h=c.children,u={},f=[];h.forEach((v,m)=>{let g=v.name.split("_")[0];f.push(g),u[g]=m}),c.traverse(v=>{this.checkForUserData(t,a,v),v.userData.hasOwnProperty("doubleSided")&&v.userData.doubleSided&&(v.material.side=Pt)}),this.pxlAnim.initObject(i,c),this.log("Animation FBX - ",f[0]),a.add(c),c.frustumCulled=!1;var d=new oo;let p=[];Object.keys(s).forEach(v=>{let m=s[v],g=new Promise((E,M)=>{d.load(m,C=>{C.animations.length==0&&(this.log("No animations found in file",m),this.log(C),E()),this.pxlAnim.addClips(i,v,C),this.log("Animation Loaded",v),E()},null,C=>{this.log("Animation Load Error"),this.log(C),M(C)})});p.push(g)}),Promise.all(p).then(()=>{this.pxlAnim.setStateConnections(i,r),t.geoList[i]=c,this.pxlEnv.geoLoadList[i]=1,t.animPostLoad(i)}).catch(v=>{this.log("Error loading animations",v)})},null,c=>{i!=""&&(this.pxlEnv.geoLoadList[i]=1)}),l}pxlShaderBuilder(t,i,n,s=null){var r,o={diffuse:{type:"t",value:null},time:{value:this.pxlTimer.msRunner}};t!=null&&(o=Object.assign({},o,t));let a={uniforms:o,vertexShader:i,fragmentShader:n};return s&&(a.defines=s),r=new ye(a),r.transparent=!0,r.depthTest=!0,r}removeChildren(t){for(var i=0,n=t.children,s=0;s<n.length;++s)n[s].type=="Group"&&(t.remove(n[s]),i++);return i}findMesh(t){for(var i=null,n=t.children,s=0;s<n.length;++s)if(n[s].type=="Mesh"){i=n[s];break}return i}getBBoxCentroid(t){try{var i=new Jt().setFromObject(t),n=i.min,s=i.max,r=new dt().addVectors(s,n).multiplyScalar(.5);t.userData={bbox:i,centroid:r},mapBookHelper?.update()}catch(o){console.log("- - - - - - - - ERROR - - - - - - - -"),console.log(`     Object does not exist.
           - Error Info -`),console.log(o),console.log("- - - - - - - - - - - - - - - - - - -")}}loadScript(t){return new Promise((i,n)=>{let s=document.createElement("script");s.type="text/javascript",s.src=t,s.async=!0,s.onreadystatechange=()=>{i(!0)},s.onload=()=>{i(!0)},document.head.appendChild(s)})}xmlHttp(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}static getURLContent(t){return new Promise((i,n)=>{let s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");s.open("GET",t),s.onload=r=>{s.readyState==4&&s.status>=200&&s.status<300?i(s.response):i(s.statusText)},s.onerror=()=>n(s.statusText),s.send()})}getExternalHTML(t,i){if(!window.XMLHttpRequest){window.open(t,"_blank");return}let n=this.xmlHttp();n.onreadystatechange=function(){this.readyState==4&&this.status==200&&i&&typeof i=="function"&&i(n.responseText)},n.open("GET",t,!0),n.responceType="document",n.send()}fetchURLStatus(t,i,n){fetch(t,{method:"HEAD"}).then(s=>{i(s.status,n)}).catch(s=>{i(404,n)})}urlExistsFallback(t){return new Promise((i,n)=>{let s=this.xmlHttp();s.open("HEAD",t,!0),s.send(),console.log(s),s.onreadystatechange=function(){this.readyState==this.DONE&&i(this.status<400)},s.onerror=r=>{i(!1)},s.ontimeout=r=>{i(!1)}})}urlExists(t){var i;return Worker&&(i=new Worker("js/pxlBase/webWorkers/FileWorkerIO.js")),new Promise((n,s)=>{if(i)i.onmessage=function(r){n(r.data.data)},i.onerror=function(r){n(!1)},i.postMessage({type:"urlExists",data:t});else{let r=this.urlExistsFallback(t).then(o=>{n(o)})}}).then(n=>(i&&i.terminate(),n)).catch(n=>(i&&i.terminate(),!1))}};var ao=class{constructor(t,i=!1,n={}){this.pxlTimer=null,this.pxlCookie=null,this.pxlDevice=null,this.pxlEnv=null,this.msLog=0,this.prevMS=new Date().getTime()*.001,this.autoQuality=!1,this.percent=1,this.verbose=t,this.screenResPerc=1,this.mBlurPercMult=i?.65:1,this.bloomPercMult=i?.65:1,this.bufferPercMult=1,this.renderTargetScale=10,this.percentSteps=[.3,.45,.85],this.fpsCounter=new dt(30,0,new Date().getTime()*.001),this.countAtLevel=0,this.shiftRate=.01,this.moduleQualityList=[],this.qualityStep=-1,this.qualityMaxSteps=3,this.qualityStepValues=[.25,.5,.75,1],this.benchmarkStart=-1,this.benchmarkTime=-1,this.benchmarkRating=-1,this.benchmarkTimes=[9,17],this.setFromBenchmark=!0,this.benchmarkQuality=1,this.benchmarkQualityRange=[.25,1],this.settingsQualityChoice=null,this.detailLimitOverride=Object.keys(n).includes("dlimit")?n.dlimit:0,this.detailLimit=this.detailLimitOverride!=null?this.detailLimitOverride:0,this.settings={leftRight:!0,mouse:!0,graphics:2,resolution:1,fog:2,bloom:!0,motion:!1},this.settingsLow={resolution:.5,fog:0,bloom:!1,motion:!1},this.settingsMedium={resolution:.75,fog:1,bloom:!0,motion:!1},this.settingsHigh={resolution:1,fog:2,bloom:!0,motion:!1},this.settingsCustom=null}setDependencies(t){this.pxlTimer=t.pxlTimer,this.pxlCookie=t.pxlCookie,this.pxlDevice=t.pxlDevice,this.pxlEnv=t.pxlEnv}init(){this.detailLimitOverride!=null?this.detailLimit=this.detailLimitOverride:this.pxlCookie.hasCookie("detailLimit")&&(this.detailLimit=this.pxlCookie.parseCookie("detailLimit")),this.verbose>=Hi.INFO&&console.log("Graphics Limiting is set to level ",this.detailLimit),this.setFromBenchmark=!this.pxlCookie.parseDict(this.settings),this.pxlCookie.hasCookie("leftRight")&&(this.settings.leftRight=this.pxlCookie.parseCookie("leftRight")),this.pxlCookie.hasCookie("mouse")&&(this.settings.mouse=this.pxlCookie.parseCookie("mouse"));let t=Object.keys(this.settingsHigh);if(this.pxlCookie.hasCookie("qualitySetting")){let i=this.pxlCookie.parseCookie("qualitySetting");this.settings.graphics=i,this.settingsQualityChoice=i}}step(){this.mapFpsQualitCheck()}attachModule(t=null){t&&this.moduleQualityList.push(t)}startBenchmark(){this.pxlTimer.step(),this.benchmarkStart=this.pxlTimer.curMS}endBenchmark(){this.pxlTimer.step();let t=this.pxlTimer.curMS-this.benchmarkStart;this.benchmarkTime=t,this.benchmarkRating=1-Math.min(1,Math.max(0,(t-this.benchmarkTimes[0])/(this.benchmarkTimes[1]-this.benchmarkTimes[0]))),this.benchmarkQuality=this.benchmarkRating*(this.benchmarkQualityRange[1]-this.benchmarkQualityRange[0])+this.benchmarkQualityRange[0];let i=Math.min(1,Math.max(0,this.benchmarkRating));if(i=Math.ceil(Math.max(.05,i)*this.qualityMaxSteps)-1,this.qualityStep=i,this.setFromBenchmark){let n=["Low","Medium","High"][this.qualityStep];this.setQualityLevel(this.qualityStep)}else this.settingsQualityChoice==null&&(this.settingsQualityChoice=3),this.settingsCustom={},Object.keys(this.settingsHigh).forEach(s=>{this.settingsCustom[s]=this.settings[s]});this.setDependentSettings()}mapFpsQualitCheck(){if(this.pxlTimer.curMS-this.fpsCounter.z>1){this.fpsCounter.x=this.fpsCounter.y,this.fpsCounter.y=0,this.fpsCounter.z=this.pxlTimer.curMS;let t=1;this.fpsCounter.x<15&&(t=-1);let i=Math.min(1,Math.max(0,this.percent+this.shiftRate*t));this.autoQuality&&this.mapAutoQualityUpdate(i,!1)}this.fpsCounter.y+=1,this.pxlTimer.prevMS=this.pxlTimer.curMS}mapAutoQualityUpdate(t=null,i=!1){let n=Math.min(1,Math.max(0,t));n=Math.ceil(Math.max(.05,n)*this.qualityMaxSteps)-1,this.qualityStep=n}setGraphicsSettings(t=null,i=3){if(t==null)if(this.qualityStep==0)t=this.settingsLow;else if(this.qualityStep==1)t=this.settingsMedium;else if(this.qualityStep==2)t=this.settingsHigh;else return;i==3&&this.checkCustomDict(),Object.keys(t).forEach(s=>{this.setComponentQuality(s,t[s]),this.settings[s]=t[s],i==3&&(this.settingsCustom[s]=t[s])}),this.setDependentSettings(),this.colliderPrevObjHit=null,i!=null&&(this.settings.graphics=i)}reapplySettings(){Object.keys(this.settingsLow).forEach(i=>{this.setComponentQuality(i,this.settings[i],!1)}),this.setDependentSettings()}setQualityLevel(t){this.pxlDevice.mobile&&(t=1),this.setQualityCookie(t),t==0?this.setLowQuality():t==1?this.setMediumQuality():t==2?this.setHighQuality():t==3&&this.setCustomQuality()}setLowQuality(){this.settingsQualityChoice=0,this.setGraphicsSettings(this.settingsLow,0)}setMediumQuality(){this.settingsQualityChoice=1,this.setGraphicsSettings(this.settingsMedium,1)}setHighQuality(){this.settingsQualityChoice=2,this.setGraphicsSettings(this.settingsHigh,2)}setCustomQuality(){this.checkCustomDict(),this.settingsQualityChoice=3,this.setGraphicsSettings(this.settingsCustom)}checkCustomDict(){if(this.settingsCustom==null){this.settingsCustom={};let t=this.settingsHigh;this.settingsQualityChoice&&(this.settingsQualityChoice==0?t=this.settingsLow:this.settingsQualityChoice==1?t=this.settingsMedium:this.settingsQualityChoice==2&&(t=this.settingsHigh)),Object.assign(this.settingsCustom,t)}}setQualityCookie(t){this.pxlCookie.setCookie("qualitySetting",t)}setComponentQuality(t,i,n=!0){switch(t){case"leftRight":this.settings[t]=i;break;case"mouse":this.settings[t]=i;break;case"resolution":this.screenResPerc=i,this.pxlDevice.resizeRenderResolution(),this.settings[t]=i,this.pxlEnv.geoList.snow&&this.pxlEnv.geoList.snow.material&&(this.pxlEnv.geoList.snow.material.uniforms.pointScale.value=this.pxlEnv.geoList.snow.pBaseScale*i);break;case"fog":this.pxlEnv.mapOverlayHeavyPass.enabled=i==2,this.pxlEnv.mapOverlayPass.enabled=i==1,this.pxlEnv.mapOverlaySlimPass.enabled=i==0,this.pxlEnv.mapBoxAAPass.enabled=i==2,this.pxlEnv.mapCrossAAPass.enabled=i==1,this.pxlEnv.portaluserScreenIntensity.x=1,this.pxlEnv.userScreenIntensity.x=.65,this.pxlEnv.userScreenIntensity.y=0,this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=i==0?.7:.3),this.settings[t]=i;break;case"bloom":this.pxlEnv.portaluserScreenIntensity.x=i?.4:1,this.pxlEnv.mapGlowPass.enabled=i,this.pxlEnv.roomBloomPass.enabled=i,this.pxlEnv.roomGlowPass.enabled=i,this.pxlEnv.userScreenIntensity.x=i?.65:.8,this.pxlEnv.userScreenIntensity.y=i?0:.8,this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=i==0?.7:.3),this.pxlEnv.mapMotionBlurPass.enabled=i,this.settings[t]=i;break;case"motion":this.pxlEnv.mapMotionBlurPass.enabled=i,this.settings[t]=i;break;default:break}n&&this.pxlCookie.setCookie(t,i)}setDependentSettings(){let t=1,i=1,n=0,s=.6;this.settings.fog==2?(this.pxlEnv.mapMotionBlurPass.enabled=!0,this.pxlEnv.mapOverlayHeavyPass.enabled=!0,this.pxlEnv.mapOverlayPass.enabled=!1,this.pxlEnv.mapOverlaySlimPass.enabled=!1,this.pxlEnv.mapBoxAAPass.enabled=!0,this.pxlEnv.mapCrossAAPass.enabled=!1,t=1,i=.5):this.settings.fog==1?(this.pxlEnv.mapMotionBlurPass.enabled=!0,this.pxlEnv.mapOverlayHeavyPass.enabled=!1,this.pxlEnv.mapOverlayPass.enabled=!0,this.pxlEnv.mapOverlaySlimPass.enabled=!1,this.pxlEnv.mapBoxAAPass.enabled=!1,this.pxlEnv.mapCrossAAPass.enabled=!0,t=1.15,i=.5):(this.pxlEnv.mapMotionBlurPass.enabled=!1,this.pxlEnv.mapOverlayPass.enabled=!1,this.pxlEnv.mapOverlaySlimPass.enabled=!0,this.pxlEnv.mapBoxAAPass.enabled=!1,this.pxlEnv.mapCrossAAPass.enabled=!1,t=1,i=.4),this.settings.bloom?(this.pxlEnv.mapGlowPass.enabled=!0,this.pxlEnv.roomBloomPass.enabled=!0,this.pxlEnv.roomGlowPass.enabled=!0,this.pxlEnv.userScreenIntensity.x=.65,this.pxlEnv.userScreenIntensity.y=0,n=1,s=.25):(this.pxlEnv.mapGlowPass.enabled=!1,this.pxlEnv.roomBloomPass.enabled=!1,this.pxlEnv.roomGlowPass.enabled=!1,this.pxlEnv.engine.setRenderTarget(this.pxlEnv.mapComposerGlow.renderTarget2),this.pxlEnv.engine.clear(),this.pxlEnv.engine.setRenderTarget(this.pxlEnv.roomGlowPass.renderTarget2),this.pxlEnv.engine.clear(),this.pxlEnv.engine.setRenderTarget(null),this.pxlEnv.userScreenIntensity.x=.8,this.pxlEnv.userScreenIntensity.y=0,i=1,n=0,s=.5);let r=this.pxlEnv.geoList.Circular_Gate;r&&(r.material.uniforms.bloomBoost.value=n),this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=this.settings.bloom?.3:.7);let o=this.pxlEnv.geoList.CirculateGateVideoSphere;o&&(o.material.color.r=s,o.material.color.g=s,o.material.color.b=s),this.pxlEnv.portaluserScreenIntensity.x=i,this.pxlEnv.pxlCamera.colliderCurObjHit=null}};var lo=class{constructor(t="pxlNav-",i="/",n=30){let s=t.substring(-1)=="-"?t:t+"-";this.prepend=s,this.exp=n,this.path="path="+i,this.deleteDate="expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.sub="_%_"}pullData(){let t=document.cookie}getExpiration(){let t=new Date;return t.setTime(t.getTime()+this.exp*24*60*60*1e3),"expires="+t.toGMTString()+";"}valueToString(t){let i=typeof t;return isNaN(Number(t))?i=="string"?"'"+t+"'":i=="boolean"?t?"true":"false":t==null?"null":isNaN(Number(t))?"NaN":t:t}variableToString(t){return Array.isArray(t)?"["+t.map(n=>Array.isArray(n)?this.variableToString(n):this.valueToString(n)).join(",")+"]":this.valueToString(t)}hasCookie(t){return document.cookie.includes(this.prepend+t)}readCookie(t){if(this.hasCookie(t)){let i=new RegExp("(?="+this.prepend+t+").*?((?=;)|(?=$))","g");return document.cookie.match(i)[0].split("=")[1].replace(this.prepend,"").replace(this.sub,";")}return null}parseCookie(t){if(this.hasCookie(t)){let i=new RegExp("(?="+this.prepend+t+").*?((?=;)|(?=$))","g"),n=document.cookie.match(i)[0].split("=")[1].replace(this.prepend,"").replace(this.sub,";");return n=="true"?n=!0:n=="false"?n=!1:parseInt(n)==n?n=parseInt(n):parseFloat(n)==n&&(n=parseFloat(n)),n}return null}isEqual(t){return this.hasCookie(t)?(console.log(t),this.readCookie(t)==this.variableToString(t)):!1}evalCookie(t){if(t){if(this.hasCookie(t)){let i=new RegExp("(?="+this.prepend+t+").*?((?=;)|(?=$))","g");return console.log("Eval Cookie has been limited, responce is: "),console.log(document.cookie.match(i)[0].replace(this.prepend,"").replace(this.sub,";")),!0}return!1}else{let i=new RegExp("(?="+this.prepend+").*?((?=;)|(?=$))","g");return console.log("Eval Cookie has been limited, may error."),document.cookie.match(i).forEach(n=>{n.replace(this.prepend,"").replace(this.sub,";")}),!0}}setCookie(t,i){i=this.variableToString(i),i.replace&&i.replace(";",this.sub),document.cookie=this.prepend+t+"="+i+";"+this.getExpiration()+this.path}addDictionary(t){let i=Object.keys(t);for(let n=0;n<i.length;++n){let s=t[i[n]];s=this.variableToString(s),s.replace&&s.replace(";",this.sub),document.cookie=this.prepend+i[n]+"="+s+";"+this.getExpiration()+this.path}}parseDict(t){let i=Object.keys(t),n=!1;return i.forEach(s=>{this.hasCookie(s)&&(t[s]=this.parseCookie(s),n=!0)}),n}clearCookie(t){if(t)typeof t=="string"&&(t=[t]),t.forEach(i=>{document.cookie=i+"=;"+this.deleteDate+this.path});else{let i=new RegExp("(?="+this.prepend+").*?(?==)","g");document.cookie.match(i).forEach(s=>{document.cookie=s+"=;"+this.deleteDate+this.path})}}};var co=class{constructor(){this.active=!1,this.msRunner=new Ne(0,0),this.msLog=0,this.fpsStats=-1;let t=new Date().getTime()*.001;this._curMS=t,this._prevMS=t,this.videoFeeds=[]}init(){this.prevMS=this.curMS,this.msRunner.x=0,this.msRunner.y=0,this.step()}get curMS(){return this._curMS}updateTime(){this._curMS=new Date().getTime()*.001}get prevMS(){return this._prevMS}set prevMS(t){this._prevMS=t}start(){this.play()}pause(){return this.active=!this.active,this.active}play(){return this.active=!0,this.active}stop(){return this.active=!1,this.active}toggleMSLog(){this.msLog=(this.msLog+1)%2}step(){this.prevMS=this._curMS,this.updateTime(),this.fpsStats!=-1&&this.fpsStats.update();let t=this.curMS-this.prevMS;this.msRunner.x+=t>0?t:0,this.msRunner.y=(this.msRunner.y+t)*.5}};var uo=class{constructor(t=null){this.id=null,this.jitsiUserId=null,this.jmaActive=!1,this.jmaConnectObj=!1,this.jmaServer=!1,this.jmaRoom=!1,this.jmaUserId=null,this.jmaUserName=null,this.jmaTempUserIdActive=!1,this.pxlEnv=null,this.welcome=!1,this.tankStrafe=!1,this.invertMouse=!1,this.renderSettingsCookie="settings_renderSettings",this.controlModeCookie="settings_controlMode",this.tankStrageCookie="settings_tankStrage",this.invertMouseCookie="settings_invertMouse",this.rootUserCookie="data_userEnlil",this.adminUserCookie="data_userNanna",this.localUserMoved=!1,this.localUserTurned=!1,this.itemRunTime=60,this.itemGroupList=[],this.itemList={},this.itemListNames=[],this.itemBaseList=[],this.itemActiveList=[],this.itemInactiveCmd=[],this.itemActiveTimer=[],this.itemRotateRate=.65,this.itemBaseRotateRate=.1,this.itemBobRate=.35,this.itemBobMag=0,this.mPick=[],this.activeEffects={},this.lowGrav=0,this.lKing=0,this.lKingInactive=[.025,.018],this.lKingActive=[.35,.25],this.lKingWarp=0,this.lKingPass=null,this.sField=0,this.sFieldWarp=0,this.sFieldPass=null,this.iZoom=0,this.iZoomWarp=0,this.iZoomPass=null,this.gravityRate=0,this.gravityMax=5.44,this.gravityMPS=[.15,.05]}get getGravityMPS(){return this.gravityMPS[this.lowGrav]}checkItemWearOff(t){return this.itemActiveList.length>0&&this.itemActiveTimer[0]-t<=0?(this.itemInactiveCmd.shift()(),this.itemActiveTimer.shift(),this.itemActiveList.shift(),!0):!1}checkItemPickUp(t){if(t=="LowGravity")return this.lowGrav==0?(this.lowGrav=1,!0):!1;if(t=="LizardKing")return this.lKing==0?(this.lKing=1,this.lKingWarp.set(...this.lKingActive),this.lKingPass.enabled=!0,!0):!1;if(t=="StarField")return this.sField==0?(this.sField=1,this.sFieldPass.enabled=!0,!0):!1;if(t=="InfinityZoom")return this.iZoom==0?(this.iZoom=1,this.iZoomPass.enabled=!0,!0):!1}toggleTankRotate(t=null){this.tankStrafe=t??!this.tankStrafe,this.tankStrageText=this.tankStrafe?"Left/Right Rotation":"Left/Right Strafe"}toggleMouseInf(t=null){this.invertMouse=t??!this.invertMouse,this.invertMouseText=this.invertMouse?"Revert Mouse":"Invert Mouse"}toggleFpsStats(){pxlTimer.fpsStats==-1?(pxlTimer.fpsStats=new Stats,document.body.appendChild(pxlTimer.fpsStats.domElement),pxlTimer.fpsStats.update(),this.fpsDisplayText="Hide FPS Stats"):(pxlTimer.fpsStats.domElement.remove(),pxlTimer.fpsStats=-1,this.fpsDisplayText="Display FPS Stats")}};var ho=class{constructor(t,i,n){this.projectTitle=t,this.pxlCore=i,this.pxlEnv=null,this.pxlTimer=null,this.pxlAudio=null,this.pxlUser=null,this.pxlCamera=null,this.pxlAutoCam=null,this.pxlGuiDraws=null,this.pxlQuality=null,this.allowCursorSwap=!1,this.longTouchLength=.75;let s=window.innerWidth,r=window.innerHeight;this.sW=s,this.sH=r,this.touchScreen=!1,this.x=s*.5,this.y=r*.5,this.screenRes=new Ne(1/s,1/r),this.screenAspect=new Ne(1,1),this.screenRatio=new Ne(s/r,r/s),this.origRes=new Ne(s,r),this.screenResDeltaPerc=new Ne(1,1),this.mapW=1,this.mapH=1,this.gammaCorrection=new dt(1,1,1),this.firefox=/Firefox/i.test(navigator.userAgent),this.mobile=n,this.button=0,this.inputActive=!1,this.startPos=[0,0],this.endPos=[0,0],this.dragCount=0,this.dragTotal=0,this.latched=!1,this.windowHidden=!1,this.mouseX=s/2,this.mouseY=r/2,this.keyDownCount=[0,0,0],this.directionKeyDown=!1,this.directionKeysPressed=[0,0,0,0],this.shiftBoost=0,this.controlKey=!1,this.objectPercList=[],this.objectPercFuncList={},this.objectPerc={active:!1,object:null,left:0,top:0,width:0,height:0,startX:0,startY:0,offsetX:0,offsetY:0,percX:0,percY:0,offsetPercX:0,offsetPercY:0},this.canCursorLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,this.cursorLockActive=!1,this.cursorRightButtonLockActive=!1,this.gyroGravity=[0,0,0],this.touchMouseData={active:!1,lock:!1,mode:0,updated:0,button:0,dragCount:0,dragTotal:0,startPos:null,moveMult:new Ne(1,1),velocityEase:new Ne(0,0),velocityEasePrev:null,velocity:new Ne(0,0),mBlurVelInf:new Ne(2*this.screenRes.x,2*this.screenRes.y),prevDeltaPos:[0,0,0],endPos:null,latchMatrix:null,netDistance:new Ne(0,0),netDistYPerc:0,curDistance:new Ne(0,0),curFadeOut:new Ne(0,0),curStepDistance:new Ne(0,0),initialQuat:new Ie,releaseTime:0},this.init()}setDependencies(t){this.pxlEnv=t.pxlEnv,this.pxlTimer=t.pxlTimer,this.pxlAudio=t.pxlAudio,this.pxlUser=t.pxlUser,this.pxlCamera=t.pxlCamera,this.pxlAutoCam=t.pxlAutoCam,this.pxlGuiDraws=t.pxlGuiDraws,this.pxlQuality=t.pxlQuality}init(){this.setGammaCorrection();let t=this;document.addEventListener("mousedown",n=>{t.onmousedown(t,n)},!1),document.addEventListener("mousemove",n=>{t.onmousemove(t,n)},!1),document.addEventListener("mouseup",n=>{t.onmouseup(t,n)},!1),document.addEventListener("contextmenu",n=>{t.oncontextmenu(n)},!1),window.addEventListener("resize",n=>{t.resizeRenderResolution()},!1),document.addEventListener("touchstart",function(n){t.touchstart(t,n)},{passive:!0}),document.addEventListener("touchmove",function(n){t.touchmove(t,n)},{passive:!0}),document.addEventListener("touchend",function(n){t.touchend(t,n)},{passive:!0}),document.onkeydown=n=>{t.onkeydown(t,n)},document.onkeyup=n=>{t.onkeyup(t,n)};let i=this;document.addEventListener("visibilitychange",function(n){i.windowHidden=document.hidden,i.directionKeysPressed=[0,0,0,0],i.directionKeyDown=!1,i.shiftBoost=0,i.pxlCamera.workerFunc("focus",!document.hidden),i.runHiddenCalcs()}),typeof window.onblur=="object"&&(window.onblur=n=>{i.resetUserInput(n)}),window.addEventListener("beforeunload",n=>{if(i.controlKey==!0)return n.preventDefault(),n.returnValue="Close tab?",i.controlKey=!1,i.mapLockCursor(!1,0),"Close tab?"})}setGammaCorrection(t=null){if(t!=null){this.gammaCorrection=new dt(1/t,t,t);return}let i=1.5,n=1.2,s=.5;if(window&&window.navigator&&window.navigator.userAgent){let r=window.navigator.userAgent.match(/(windows|win32|win64|wince)/i);if(r&&r.length>0)i=2.2,n=1,s=0;else{let o=window.navigator.userAgent.match(/(macintosh|macintel|macppc|mac68k|iphone|ipad|ipod)/i);o&&o.length>0?(i=1.8,n=.97,s=.5):(i=1,n=.95,s=1)}}this.gammaCorrection=new dt(1/i,n,s)}runHiddenCalcs(){this.windowHidden&&setTimeout(()=>{this.runHiddenCalcs()},100)}resetUserInput(t){this.directionKeysPressed=[0,0,0,0],this.directionKeyDown=!1,this.shiftBoost=0,this.mapLockCursor(!1,0),this.pxlCamera.camJumpKey(!1),this.pxlCamera.deviceKey("space",!1),this.touchMouseData.active&&(this.touchScreen?this.endTouch(t):this.mapOnUp(t))}onmousemove(t,i){t.mapOnMove(i)}onmousedown(t,i){t.mapOnDown(i)}onmouseup(t,i){t.mapOnUp(i)}oncontextmenu(t){return t.preventDefault(),!1}touchstart(t,i){t.startTouch(i)}touchmove(t,i){t.doTouch(i)}touchend(t,i){t.endTouch(i)}onkeydown(t,i){t.keyDownCall(i)}onkeyup(t,i){t.keyUpCall(i)}get active(){return this.inputActive}set active(t){this.inputActive=!!t}preventDefault(t){t=t||window.event,t.preventDefault(t)&&t.preventDefault(t)(),t.returnValue=!1}setCursor(t){if(this.allowCursorSwap){if(t=="activeLatch"){let i=["grab","grabbing","all-scroll"][this.touchMouseData.button]}document.body.style.cursor=t}}getMouseXY(t){if(this.mobile)try{touch=t.touches[0],this.mouseX=touch.pageX,this.mouseY=touch.pageY}catch{}else{let i=this.pxlQuality.settings.mouse?-1:1;this.cursorLockActive?(this.mouseX+=(t.movementX||t.mozMovementX||t.webkitMovementX||0)*i,this.mouseY+=(t.movementY||t.mozMovementY||t.webkitMovementY||0)*i):(this.mouseX=t.clientX,this.mouseY=t.clientY)}}mapLockCursor(t=!1,i){this.canCursorLock&&!this.mobile&&(i==2?(!t&&this.cursorRightButtonLockActive?this.cursorRightButtonLockActive=!1:!t&&!this.cursorRightButtonLockActive&&(this.cursorRightButtonLockActive=!0),t=t||this.cursorRightButtonLockActive):t||(this.cursorRightButtonLockActive=t),t==!0?(this.pxlGuiDraws.pxlNavCanvas.focus(),this.pxlGuiDraws.pxlNavCanvas.requestPointerLock()):document.exitPointerLock(),this.cursorLockActive=t)}mapOnDown(t){let i=t.target;i.getAttribute&&i.getAttribute("id")==this.pxlCore&&this.pxlTimer.active&&(this.pxlGuiDraws.chatMessageInput&&this.pxlGuiDraws.chatMessageInput.blur(),this.pxlGuiDraws.pxlNavCanvas.focus(),this.preventDefault(t),this.touchMouseData.button=t.which,this.touchMouseData.active=!0,this.touchMouseData.mode=this.touchMouseData.button,this.touchMouseData.startPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.endPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.curDistance=new Ne(0,0),this.touchMouseData.curStepDistance=new Ne(0,0),this.touchMouseData.dragCount=0,this.pxlAutoCam.touchBlender=!1,this.setCursor("grabbing"),this.mapLockCursor(!0,t.button))}mapOnMove(t){let i=t.target;if(i.getAttribute&&i.getAttribute("id")==this.pxlCore&&this.pxlTimer.active||this.cursorLockActive)if(this.preventDefault(t),this.getMouseXY(t),(this.touchMouseData.active||this.cursorLockActive)&&this.touchMouseData.startPos){this.touchMouseData.dragCount++;let n=this.touchMouseData.endPos.clone();this.touchMouseData.endPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.curDistance=this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos),this.touchMouseData.curStepDistance=this.touchMouseData.endPos.clone().sub(n),this.touchMouseData.netDistance.add(this.touchMouseData.curStepDistance.clone());let s=this.touchMouseData.velocity.clone();this.touchMouseData.velocity=this.touchMouseData.velocity.clone().multiplyScalar(3).add(this.touchMouseData.curStepDistance).multiplyScalar(.25),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)*8e-4,this.touchMouseData.curFadeOut.add(n.sub(this.touchMouseData.endPos))}else this.pxlEnv.hoverUserDetect()}mapOnUp(t){let i=t.target;if(this.pxlAudio.djVolumeParentObj&&(this.pxlAudio.djVolumeParentObj.down=!1),i.getAttribute&&i.getAttribute("id")==this.pxlCore)if(this.pxlGuiDraws.checkFocus(i.getAttribute("id"),!0),this.mobile)this.pxlAutoCam.getNextPath(!1,1);else return this.preventDefault(t),this.touchMouseData.dragCount++,this.touchMouseData.dragTotal+=this.touchMouseData.dragCount,this.touchMouseData.active=!1,this.touchMouseData.releaseTime=this.pxlTimer.curMS,this.pxlAutoCam.touchBlender=!0,this.pxlAutoCam.setNextTrigger(),this.touchMouseData.dragCount<9&&this.pxlEnv.clickUserDetect(),this.touchMouseData.endPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+250)/1250,this.setCursor("grab"),this.mapLockCursor(!1,t.button),t.preventDefault(),!1}startTouch(t){let i=t.target;if(!(i.getAttribute&&i.getAttribute("id")==this.pxlCore&&this.pxlTimer.active))return;this.touchScreen=!0;var s=t.touches[0];this.mouseX=s.pageX,this.mouseY=s.pageY,this.touchMouseData.active=!0,this.touchMouseData.mode=this.touchMouseData.button,this.touchMouseData.startPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.endPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.curDistance=new Ne(0,0),this.touchMouseData.curStepDistance=new Ne(0,0),this.touchMouseData.dragCount=0,this.pxlAutoCam.touchBlender=!1,this.touchMouseData.releaseTime=this.pxlTimer.curMS;let r=i.getAttribute("id");if(this.objectPercList.includes(r)){r=="djPlayerVolume"&&(i=this.pxlAudio.djVolumeParentObj,r=i.getAttribute("id"));let o=i.getBoundingClientRect();this.objectPerc.active=!0,this.objectPerc.object=i,this.objectPerc.left=o.left,this.objectPerc.top=o.top,this.objectPerc.width=o.width,this.objectPerc.height=o.height,this.objectPerc.startX=this.mouseX-o.left,this.objectPerc.startY=this.mouseY-o.top,this.objectPerc.percX=(this.mouseX-this.objectPerc.left)/this.objectPerc.width,this.objectPerc.percY=(this.mouseY-this.objectPerc.top)/this.objectPerc.height,this.objectPerc.offsetX=0,this.objectPerc.offsetY=0,this.objectPerc.offsetPercX=0,this.objectPerc.offsetPercY=0,this.objectPercFuncList[r]&&this.objectPercFuncList[r](t)}}doTouch(t){if(!this.touchMouseData.active)return;let i=t.target;var n=t.touches[0];if(this.mouseX=n.pageX,this.mouseY=n.pageY,this.touchMouseData.active){if(this.touchMouseData.dragCount++,typeof t.touches[1]<"u"){var s=t.touches[1];t.touches.length>1&&this.touchMouseData.dragCount>10&&(this.touchMouseData.lock=!0,n=t.touches[1],this.pxlEnv.setFogHue([this.mouseX,this.mouseY],[n.pageX,n.pageY]));return}let r=this.touchMouseData.endPos.clone();this.touchMouseData.endPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.curDistance=this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos),this.touchMouseData.curStepDistance=this.touchMouseData.endPos.clone().sub(r),this.touchMouseData.netDistance.add(this.touchMouseData.curStepDistance.clone()),this.touchMouseData.velocity.add(this.touchMouseData.curStepDistance).multiplyScalar(.5),this.touchMouseData.velocityEase.add(this.touchMouseData.curStepDistance).multiplyScalar(.5),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)/1250,this.touchMouseData.curFadeOut.add(r.sub(this.touchMouseData.endPos))}this.objectPerc.active&&(this.objectPerc.percX=(this.mouseX-this.objectPerc.left)/this.objectPerc.width,this.objectPerc.percY=(this.mouseY-this.objectPerc.top)/this.objectPerc.height,this.objectPerc.offsetX=this.mouseX-this.objectPerc.startX,this.objectPerc.offsetY=this.mouseY-this.objectPerc.startY,this.objectPerc.offsetPercX=this.objectPerc.offsetX/this.objectPerc.width,this.objectPerc.offsetPercY=this.objectPerc.offsetY/this.objectPerc.height)}endTouch(t){if(!this.touchMouseData.active)return;if(this.touchScreen=!1,this.touchMouseData.dragCount++,this.touchMouseData.dragTotal+=this.touchMouseData.dragCount,this.touchMouseData.active=!1,this.touchMouseData.endPos=new Ne(this.mouseX,this.mouseY),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+250)/1250,this.touchMouseData.curDistance.multiplyScalar(0),this.touchMouseData.curStepDistance.multiplyScalar(0),this.touchMouseData.releaseTime=this.pxlTimer.curMS,this.touchMouseData.lock){this.touchMouseData.lock=!1;return}this.pxlAutoCam.touchBlender=!0,this.pxlAutoCam.setNextTrigger();let i=t.target;this.touchMouseData.dragCount<10&&i.getAttribute&&i.getAttribute("id")==this.pxlCore&&this.pxlAutoCam.getNextPath(!1,0),this.objectPerc.active=!1,this.pxlAudio.djVolumeParentObj&&(this.pxlAudio.djVolumeParentObj.down=!1)}async keyDownCall(t){if(t.ctrlKey&&(this.controlKey=!0),document.activeElement.type==null&&this.pxlTimer.active){let i=t.keyCode||t.which;(i==37||i==65)&&(this.directionKeyDown=!0,this.keyDownCount[0]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[0]=1,this.pxlCamera.deviceKey(0,!0)),t.ctrlKey&&i==87&&this.directionKeysPressed[1]==1&&t.this.preventDefault(t)(),(i==38||i==87)&&(this.directionKeyDown=!0,this.keyDownCount[1]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[1]=1,this.pxlCamera.deviceKey(1,!0)),(i==39||i==68)&&(this.directionKeyDown=!0,this.keyDownCount[0]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[2]=1,this.pxlCamera.deviceKey(2,!0)),(i==40||i==83)&&(this.directionKeyDown=!0,this.keyDownCount[1]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[3]=1,this.pxlCamera.deviceKey(3,!0)),(i==16||i==224)&&(this.shiftBoost=7,this.pxlCamera.deviceKey("shift",!0)),i==32&&(this.pxlCamera.camJumpKey(!0),this.pxlCamera.deviceKey("space",!0))}}async keyUpCall(t){if(t.ctrlKey)return this.controlKey=!1,t.preventDefault(),!1;if(document.activeElement.type==null){let n=t.keyCode||t.which,s=t.code||t.which;if(!t.isTrusted)return!1;if(t.ctrlKey||t.altKey||t.code.includes("F"))return t.preventDefault(),!1;if(s=="Backquote"){this.pxlGuiDraws.guiToggleVisibility();return}if(n==89&&this.pxlGuiDraws.toggleShaderEditor(),n==220){console.log("Saving screenshot");let r=this.pxlQuality.screenResPerc;this.pxlQuality.screenResPerc=1,this.pxlEnv.mapRender(!1);let o=this.pxlGuiDraws.pxlNavCanvas.toDataURL("image/png"),a=atob(o.split(",")[1]),l=a.length,c=new Uint8Array(l);for(var i=0;i<l;++i)c[i]=a.charCodeAt(i);let h=URL.createObjectURL(new Blob([c])),u=new Date,f=u.getDate(),d=u.getMonth()+1,y=u.getFullYear()+"-"+d+"-"+f+"_"+u.getHours()+"-"+u.getMinutes()+"-"+u.getSeconds(),v=document.createElement("a");v.download=this.projectTitle+"_"+y+".png",v.href=h,document.body.appendChild(v),v.click(),v.parentNode.removeChild(v),this.pxlQuality.screenResPerc=r,this.pxlEnv.mapRender(!1);return}if(this.pxlTimer.active){if((n==37||n==65)&&(this.directionKeysPressed[0]=0,this.pxlAutoCam.getNextPath(!1,-1),this.pxlCamera.deviceKey(0,!1)),(n==38||n==87)&&(this.directionKeysPressed[1]=0,this.pxlAutoCam.active&&(this.pxlAutoCam.step(!0),this.pxlCamera.deviceKey(1,!1))),(n==39||n==68)&&(this.directionKeysPressed[2]=0,this.pxlAutoCam.getNextPath(!1,1),this.pxlCamera.deviceKey(2,!1)),(n==40||n==83)&&(this.directionKeysPressed[3]=0,this.pxlAutoCam.active&&(this.pxlAutoCam.setRoom(!0),this.pxlCamera.deviceKey(3,!1))),this.directionKeysPressed.includes(1)||(this.directionKeyDown=!1),n==16||n==224){this.shiftBoost=0,this.pxlCamera.deviceKey("shift",!1);return}if(n==32){this.pxlCamera.camJumpKey(!1),this.pxlCamera.deviceKey("space",!1);return}if(!this.directionKeyDown){if(n==49||n==97){this.pxlCamera.fastTravel(0);return}if(n==50||n==98){this.pxlCamera.fastTravel(1);return}if(n==51||n==99){this.pxlCamera.fastTravel(2);return}if(n==52||n==100){this.pxlCamera.fastTravel(3);return}if(n==53||n==101){this.pxlAutoCam.preAutoCamToggle();return}}if(n==75||n==107||n==187,n==74||n==109||n==189,n==76,n==48,n==221){this.pxlUser?.itemInactiveCmd?.length>0&&console.log(this.pxlUser.itemInactiveCmd.pop());return}n==106}if(n==27||n==13&&!t.ctrlKey){this.pxlGuiDraws.toggleHudBlock(!1,!0),this.pxlGuiDraws.toggleGuiWindowContainer(!1,!1,!0);return}if(t.altKey||t.ctrlKey||t.shiftKey)return;if(n==85,n==73){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.infoIcon,"info");return}if(n==71){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.settingsIcon,"settings");return}if(n==67,n==66){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.musicIcon,"musicToggle");return}if(n==78){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.speakerIcon,"speakerToggle");return}if(n==77,n==86,n==191){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.helpIcon,"help");return}if(n==80){this.directionKeysPressed=[0,0,0,0],this.directionKeyDown=!1,this.pxlTimer.pause(),this.pxlTimer.active&&this.pxlEnv.mapRender(),this.pxlCamera.workerFunc("activeToggle",this.pxlTimer.active);return}}}resizeRenderResolution(t=null,i=null){if(t=t||window.innerWidth,i=i||window.innerHeight,this.mapW=(this.sW=t)*this.pxlQuality.screenResPerc,this.mapH=(this.sH=i)*this.pxlQuality.screenResPerc,this.screenRes.x=1/this.mapW,this.screenRes.y=1/this.mapH,this.screenRatio.x=this.sW/this.sH,this.screenRatio.y=this.sH/this.sW,this.pxlEnv.geoList.HDRView){let o=this.mapW>this.mapH?1:this.mapW/this.mapH;this.pxlEnv.geoList.HDRView.material.uniforms.ratioU.value=o}if(this.touchMouseData.mBlurVelInf=new Ne(2*this.screenRes.x,2*this.screenRes.y),!this.pxlEnv.mapGlowPass)return;this.pxlEnv.scene.renderTarget.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult),this.pxlEnv.scene.renderWorldPos.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult),this.pxlEnv.mapComposer.setSize(this.mapW,this.mapH),this.pxlEnv.mapComposerGlow.setSize(this.mapW,this.mapH),this.pxlEnv.roomComposer.setSize(this.mapW,this.mapH),this.pxlEnv.roomGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult),this.pxlEnv.delayComposer.setSize(this.mapW,this.mapH),this.pxlEnv.mapGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult),this.pxlEnv.mapMotionBlurPass.setSize(this.mapW*this.pxlQuality.mBlurPercMult,this.mapH*this.pxlQuality.mBlurPercMult),this.pxlEnv.mapOverlayHeavyPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlayPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlaySlimPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlayHeavyPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlEnv.mapOverlayPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlEnv.mapOverlaySlimPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlGuiDraws.pxlNavCanvas.width=this.sW,this.pxlGuiDraws.pxlNavCanvas.height=this.sH,this.pxlGuiDraws.loading=!0,this.pxlEnv.engine.setPixelRatio(window.devicePixelRatio*this.pxlQuality.screenResPerc),this.pxlEnv.engine.setSize(this.sW,this.sH);var n=this.mapW/this.mapH;this.pxlCamera.camera.aspect=n,this.pxlCamera.camera.updateProjectionMatrix();let s=[this.sW/this.sH,this.sH/this.sW];var r=[1,1];r[0]=n>s[0]?1:this.sW/(this.sH*s[0]),r[1]=n>s[1]?this.sH/(this.sW*s[1]):1,r[0]>1?(r[1]*=1/r[0],r[0]=1):r[1]>1&&(r[0]*=1/r[1],r[1]=1),this.screenAspect.x=r[0]*(1/(.5**2+.5**2)**.5),this.screenAspect.y=r[1],this.screenResDeltaPerc.x=this.sW/this.origRes.x,this.screenResDeltaPerc.y=this.sH/this.origRes.y,this.pxlEnv.roomSubList.Lobby&&this.pxlEnv.roomSubList.Lobby.setShaders(),this.pxlEnv.updateCompUniforms(),this.pxlGuiDraws.resize(),this.pxlEnv.roomNameList.forEach(o=>{this.pxlEnv.roomSceneList[o].pxlCamAspect=n,this.pxlEnv.roomSceneList[o]?.resize&&this.pxlEnv.roomSceneList[o].resize(this.mapW,this.mapH)}),this.pxlTimer.active||this.pxlEnv.mapRender(!1)}};var fo=class{constructor(t=null,i=null){this.pxlEnv=null,this.assetPath=t,this.verbose=!1,this.animInitEntry={rig:null,mesh:null,mixer:null,clips:{},state:null,hasConnection:!1,prevTime:-1,connected:[],connections:{}},this.objNames=[],this.objects={},this.animMixer={},this.msRunner=i,this.clock=new Xs}setDependencies(t){this.pxlEnv=t}log(t){this.verbose&&console.log(t)}initObject(t,i){let n=null,s=null,r=i.children.length,o=0,a=[...i.children],l=0,c=0,h=0,u=0;for(;o<r;){let d=a[o];switch(d.type){case"Bone":++c,n=d;break;case"Mesh":++l,d.visible=!1;break;case"SkinnedMesh":++h,s=d;break;case"Group":++u,a=a.concat(d.children),r=a.length;break;default:break}++o}let f=!1;if(n||(this.log("Error, No Bone/Rig Root Found; Please move your rig to the scene's root. Grouped rigs aren't supported yet."),f=!0),s||(this.log("Error, No SkinnedMesh Found; Please ensure your rig has a mesh to animate."),f=!0),f){console.log("Unable to prepare '"+t+"' for animation"),console.log("Group Count: "+u),console.log("Bone Root Found : "+(c>0)),console.log("Bone Count : "+c),console.log("Mesh Count: "+l),console.log("SkinnedMesh Count: "+h);return}if(!this.objNames.includes(t)){this.objNames.push(t);let d=Object.assign({},this.animInitEntry);d.rig=n,d.mesh=s,this.animMixer[t]=new Fa(n),d.mixer=this.animMixer[t],this.objects[t]=d;let p=new oi({skinning:!0});p.map=s.material.map,s.material=p}}addClips(t,i,n){if(!this.objNames.includes(t)){this.log("Error, '"+t+"' not found in Animation Manager");return}Object.keys(this.objects[t].clips).includes(i)&&this.log("Warning, '"+i+"' already exists in '"+t+"'");let o=this.animMixer[t].clipAction(n.animations[0]);this.objects[t].clips[i]=o}hasClip(t,i){return this.objNames.includes(t)?Object.keys(this.objects[t].clips).includes(i):!1}getMixer(t){return this.objNames.includes(t)?this.animMixer[t]:null}getRig(t){return this.objNames.includes(t)?this.objects[t].rig:null}getMesh(t){return this.objNames.includes(t)?this.objects[t].mesh:null}playClip(t,i){if(this.objNames.includes(t)&&Object.keys(this.objects[t].clips).includes(i)){let s=this.objects[t].clips[i];this.objects[t].state=i,this.objects[t].prevTime=-1,this.objects[t].hasConnection=this.objects[t].connected.includes(i),this.setWeight(t,i,1,!0),s.reset(),s.play()}}setWeight(t,i,n,s=!1){if(this.objNames.includes(t)){let r=Object.keys(this.objects[t].clips);if(r.includes(i)){let o=this.objects[t].clips[i];o.enabled=!0,o.setEffectiveTimeScale(1),o.setEffectiveWeight(n),s&&r.forEach(a=>{if(a!=i){let l=this.objects[t].clips[a];l.enabled=!1,l.setEffectiveTimeScale(1),l.setEffectiveWeight(0)}})}}}setStateConnections(t,i){if(this.objNames.includes(t)){let n=Object.keys(i);this.objects[t].connected=n,this.objects[t].connections=i}}step(t){if(this.objNames.includes(t)){if(!this.objects[t].hasConnection){this.animMixer[t].update(this.clock.getDelta());return}let n=this.objects[t].state;if(n){let r=this.objects[t].clips[n].time;if(this.objects[t].prevTime>r){let a=this.objects[t].connections[n],l=a[Math.floor(Math.random()*a.length)];this.playClip(t,l)}else this.animMixer[t].update(this.clock.getDelta()),this.objects[t].prevTime=r}else this.animMixer[t].update(this.clock.getDelta())}}destroy(t){if(this.objNames.includes(t)){this.animMixer[t].stopAllAction(),delete this.animMixer[t],delete this.objects[t];let i=this.objNames.indexOf(t);this.objNames.splice(i,1)}}};var Gi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	gl_FragColor = opacity * texel;","}"].join(`
`)};function wt(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(wt.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});wt.FullScreenQuad=function(){var e=new li(-1,1,1,-1,0,1),t=new Yt(2,2),i=function(n){this._mesh=new Ge(t,n)};return Object.defineProperty(i.prototype,"material",{get:function(){return this._mesh.material},set:function(n){this._mesh.material=n}}),Object.assign(i.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(n){n.render(this._mesh,e)}}),i}();var Xe=function(e,t){wt.call(this),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ye?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vs.clone(e.uniforms),this.material=new ye({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wt.FullScreenQuad(this.material)};Xe.prototype=Object.assign(Object.create(wt.prototype),{constructor:Xe,render:function(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}});var po=function(e,t){wt.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1};po.prototype=Object.assign(Object.create(wt.prototype),{constructor:po,render:function(e,t,i){var n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);var r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}});var Ja=function(){wt.call(this),this.needsSwap=!1};Ja.prototype=Object.create(wt.prototype);Object.assign(Ja.prototype,{render:function(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}});var pn=function(e,t){if(this.renderer=e,t===void 0){var i={minFilter:ke,magFilter:ke,format:Ye,stencilBuffer:!1},n=e.getSize(new N);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,i),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Gi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Xe===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Xe(Gi),this.clock=new Xs};Object.assign(pn.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(e){for(var t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0},render:function(e){e===void 0&&(e=this.clock.getDelta());var t=this.renderer.getRenderTarget(),i=!1,n,s,r=this.passes.length;for(s=0;s<r;s++)if(n=this.passes[s],n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){var o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}po!==void 0&&(n instanceof po?i=!0:n instanceof Ja&&(i=!1))}this.renderer.setRenderTarget(t)},reset:function(e){if(e===void 0){var t=this.renderer.getSize(new N);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this._width=e,this._height=t;var i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(var s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)},setPixelRatio:function(e){this._pixelRatio=e,this.setSize(this._width,this._height)}});var Jd=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(Jd.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});Jd.FullScreenQuad=function(){var e=new li(-1,1,1,-1,0,1),t=new Yt(2,2),i=function(n){this._mesh=new Ge(t,n)};return Object.defineProperty(i.prototype,"material",{get:function(){return this._mesh.material},set:function(n){this._mesh.material=n}}),Object.assign(i.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(n){n.render(this._mesh,e)}}),i}();var Zs=function(e,t,i,n,s){wt.call(this),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};Zs.prototype=Object.assign(Object.create(wt.prototype),{constructor:Zs,render:function(e,t,i){var n=e.autoClear;e.autoClear=!1;var s,r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(s=e.getClearColor().getHex(),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(s,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=n}});var Jc={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	vec3 luma = vec3( 0.299, 0.587, 0.114 );","	float v = dot( texel.xyz, luma );","	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","	gl_FragColor = mix( outputColor, texel, alpha );","}"].join(`
`)};var mn=function(e,t,i,n){wt.call(this),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new N(e.x,e.y):new N(256,256),this.clearColor=new $(0,0,0);var s={minFilter:ke,magFilter:ke,format:Ye};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(h,u,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var r=0;r<this.nMips;r++){var o=new Je(h,u,s);o.texture.name="UnrealBloomPass.h"+r,o.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(o);var a=new Je(h,u,s);a.texture.name="UnrealBloomPass.v"+r,a.texture.generateMipmaps=!1,this.renderTargetsVertical.push(a),h=Math.round(h/2),u=Math.round(u/2)}Jc===void 0&&console.error("UnrealBloomPass relies on LuminosityHighPassShader");var l=Jc;this.highPassUniforms=Vs.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];for(var c=[3,5,7,9,11],h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2),r=0;r<this.nMips;r++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[r])),this.separableBlurMaterials[r].uniforms.texSize.value=new N(h,u),h=Math.round(h/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;var f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Gi===void 0&&console.error("UnrealBloomPass relies on CopyShader");var d=Gi;this.copyUniforms=Vs.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ye({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ms,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this.oldClearColor=new $,this.oldClearAlpha=1,this.basic=new bt,this.fsQuad=new wt.FullScreenQuad(null)};mn.prototype=Object.assign(Object.create(wt.prototype),{constructor:mn,dispose:function(){for(var e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(var e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()},setSize:function(e,t){var i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(var s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.texSize.value=new N(i,n),i=Math.round(i/2),n=Math.round(n/2)},render:function(e,t,i,n,s){this.oldClearColor.copy(e.getClearColor()),this.oldClearAlpha=e.getClearAlpha();var r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);for(var o=this.renderTargetBright,a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=mn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=mn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor,this.oldClearAlpha),e.autoClear=r},getSeperableBlurMaterial:function(e){return new ye({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new N(.5,.5)},direction:{value:new N(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;				uniform vec2 direction;								float gaussianPdf(in float x, in float sigma) {					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;				}				void main() {
					vec2 invSize = 1.0 / texSize;					float fSigma = float(SIGMA);					float weightSum = gaussianPdf(0.0, fSigma);					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {						float x = float(i);						float w = gaussianPdf(x, fSigma);						vec2 uvOffset = direction * invSize * x;						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;						diffuseSum += (sample1 + sample2) * w;						weightSum += 2.0 * w;					}					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})},getCompositeMaterial:function(e){return new ye({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:"varying vec2 vUv;				uniform sampler2D blurTexture1;				uniform sampler2D blurTexture2;				uniform sampler2D blurTexture3;				uniform sampler2D blurTexture4;				uniform sampler2D blurTexture5;				uniform sampler2D dirtTexture;				uniform float bloomStrength;				uniform float bloomRadius;				uniform float bloomFactors[NUM_MIPS];				uniform vec3 bloomTintColors[NUM_MIPS];								float lerpBloomFactor(const in float factor) { 					float mirrorFactor = 1.2 - factor;					return mix(factor, mirrorFactor, bloomRadius);				}								void main() {					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + 													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + 													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + 													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + 													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );				}"})}});mn.BlurDirectionX=new N(1,0);mn.BlurDirectionY=new N(0,1);var mo=class{constructor(t,i="Default",n="pxlRooms",s,r){this.verbose=s,this.engine=null,this.scene=null,this.parentGroupList={},this.parentGroupList[i]=[],this.parentNameList=[],this.options=t,this.prevRenderMS=0,this.nextRenderMS=0,this.fps=r?30:60,this.renderInterval=1/this.fps,this.pxlRoomAbsRoot=n;let o=n.split("/");o.splice(0,1),o=o.join("/"),this.pxlRoomLclRoot="../../"+n.split("/").pop(),this.mainRoom=i,this.bootRoom=i,this.bootLocation=null,this.currentRoom=i,this.roomNameList=[i],this.roomSubList={},this.roomSceneList={},this.roomSceneList[i]=this,this.roomPostGuiCalls=[],this.jmaCheckConnection=!1,this.checkContext=0,this.activeContext=!1,this.warpPortalTextures={},this.warpZoneRenderTarget=null,this.currentAudioZone=0,this.pxlUtils=null,this.pxlTimer=null,this.pxlAnim=null,this.pxlAutoCam=null,this.pxlAudio=null,this.pxlFile=null,this.pxlVideo=null,this.pxlQuality=null,this.pxlUser=null,this.pxlShaders=null,this.pxlDevice=null,this.pxlCamera=null,this.pxlGuiDraws=null,this.renderLayerEnum={SCENE:0,PARTICLES:1,GLOW:2,SKY:3},this.cloud3dTexture=null,this.softNoiseTexture=null,this.detailNoiseTexture=null,this.chroAberUVTexture=null,this.blockAnimTexture=null,this.userScreenIntensity=new N(0,.8),this.portaluserScreenIntensity=new N(1,0),this.portalMtlRate=.7,this.mobile=r,this.camNear=.1,this.camFar=5e3,this.fogMult=new N(0,0),this.fogColor=new $(.07,.07,.1),this.fogColorSky=new $(.1,.1,.12),this.fogExp=3e-4,this.fog=new Sr(this.fogColor,this.fogExp),this.listener=null,this.posted=!1,this.postIntro=!1,this.camLocation={},this.camInitPos=new P(0,15,0),this.camInitLookAt=new P(0,15,0),this.camThumbPos=new P(0,0,0),this.camThumbLookAt=new P(0,20,0),this.camReturnPos=new P(0,0,0),this.camReturnLookAt=new P(0,0,0),this.camLobbyPos=new P(0,15,0),this.camLobbyLookAt=new P(0,15,-100),this.pxlCamFOV=r?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=this.camNear,this.pxlCamFarClipping=this.camFar,this.groupList=[],this.geoList=[],this.geoLoadList=[],this.geoLoadListComplete=0,this.lightList=[],this.returnPortalGlowList=[],this.roomWarpVisuals={},this.proximityGeo=null,this.userAvatarGroup=new Lt,this.warpVisualActive=!1,this.warpVisualMaxTime=[1.5,1],this.warpVisualStartTime=0,this.warpVisualFader=new N(0,1),this.warpVisualCmd=null,this.stepShaderFuncArr=[],this.mapMotionBlurPass=null,this.mapCopyMotionBlurPass=null,this.mapOverlayHeavyPass=null,this.mapOverlayPass=null,this.mapOverlaySlimPass=null,this.mapBoxAAPass=null,this.mapCrossAAPass=null,this.mapWorldPosMaterial=null,this.mapGlowPass=null,this.mapGlowMotionBlur=null,this.mapComposer=null,this.mapComposerMotionBlur=null,this.mapComposerBloom=null,this.mapComposerGlow=null,this.chroAberrationPass=null,this.chroAberrationRoomPass=null,this.lizardKingPass=null,this.lizardKingRoomPass=null,this.mapComposerWarpPass=null,this.blurScreenMerge=null,this.pxlRenderSettings={exposure:1,mult:r?1.5:1,bloomStrength:.5,bloomThresh:.6,bloomRadius:.05},this.exposureShiftActive=!1,this.delayComposer=null,this.delayPass=null,this.chroAberMult=new N(1,0),this.blurDirCur=new N(0,0),this.blurDirPrev=new N(0,0),this.shaderPasses={},this.roomComposer=null,this.roomRenderPass=null,this.roomBloomPass=null,this.roomGlowPass=null,this.blurComposer=null,this.glowPassMask=new N(1,0),this.objectClickable=[],this.objectClickableObjectList={},this.clickablePrevActiveObject=null,this.promoClickable=[],this.promoClickableObjectList={},this.promoPrevActiveObject=null,this.promoClickableLinks={},this.remoteVideoTextureList=[],this.remoteUserNameList=[],this.remoteUserMediaList={},this.remoteUserVideoList=[],this.remoteUserAudioList=[],this.camScreenData={count:0,prevCount:0,checkUserCount:!0,checkVideoStatus:!0,findCamCount:()=>{},videoObjectList:[],screenGeoList:[],screenClickable:[],screenMtlUniforms:[],userDataList:[],camFindInfoList:[]},this.curUserCount=0,this.prevUserCount=0,this.emit=(a,l)=>{}}setDependencies(t){this.scene=t.scene,this.pxlUtils=t.pxlUtils,this.pxlTimer=t.pxlTimer,this.pxlAnim=t.pxlAnim,this.pxlAutoCam=t.pxlAutoCam,this.pxlAudio=t.pxlAudio,this.pxlFile=t.pxlFile,this.pxlVideo=t.pxlVideo,this.pxlQuality=t.pxlQuality,this.pxlUser=t.pxlUser,this.pxlShaders=t.pxlShaders,this.pxlDevice=t.pxlDevice,this.pxlCamera=t.pxlCamera,this.pxlGuiDraws=t.pxlGuiDraws,this.emit=t.emit.bind(t)}init(){let t=Object.keys(this.options);Object.keys(Ys).forEach(s=>{t.includes(s)||(this.options[s]=Ys[s])});let n=Object.keys(this.roomSubList);console.log("subList",n),n.forEach(s=>{this.roomSubList[s].init()})}boot(){}setBootRoom(t,i){console.log(t,i),this.bootRoom=t,this.bootLocation=i}postBoot(){this.pxlGuiDraws.togglePageDisplay(),this.roomSceneList[this.bootRoom].start(),this.posted=!0}postHelpIntro(){!this.pxlDevice.mobile&&!this.pxlAutoCam.enabled?this.pxlCamera.jogServerMemory():(this.pxlCamera.colliderValid=!0,this.pxlCamera.eventCheckStatus=!0,this.pxlCamera.colliderShiftActive=!0,this.pxlCamera.nearestFloorObjName="mobile",this.pxlCamera.colliderCurObjHit="AudioTrigger_2",this.pxlCamera.proximityScaleTrigger=!0,this.exposureShiftActive=!0,this.pxlDevice.mobile||(this.pxlAudio.play(),setTimeout(()=>{this.pxlAudio.initPlay()},100))),this.postIntro=!0}start(){this.init()}step(){if(this.pxlTimer.step(),this.pxlAudio.step(),this.pxlQuality.step(),this.pxlAutoCam.step()&&this.pxlCamera.step(),this.pxlGuiDraws.step(),this.stepWarpPass(),this.pxlTimer.msRunner.x>this.checkContext&&this.activeContext){this.checkContext=this.pxlTimer.msRunner.x+1;let t=document.createElement("canvas");try{let i=!!t.getContext("webgl")}catch{this.activeContext=!0,this.pxlGuiDraws.pxlNavCanvas.style.display="none"}}this.pxlDevice.mobile&&this.exposureShiftActive}async stop(){this.setExposure(0),Object.keys(this.roomSubList).forEach(i=>{this.roomSubList[i].stop()})}loadRoom(t){return new Promise((i,n)=>{this.verbose>2&&console.log("Loading Room - ",t);var s=import(`${this.pxlRoomLclRoot}/${t}/${t}.js`);s.then(r=>{let o=new r[t](t,`../${this.pxlRoomLclRoot}/${t}/`,this.pxlFile,this.pxlAnim,this.pxlUtils,this.pxlDevice,this,this.pxlTimer.msRunner,null,null,this.cloud3dTexture);o.camera=this.pxlCamera.camera,o.scene=new rn,o.userAvatarGroup||(o.userAvatarGroup=new Lt),o.scene.add(o.userAvatarGroup);var a={format:Ye,antialias:!1,sortObjects:!0,alpha:!0,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?nn:Wt};o.scene.renderTarget=new Je(this.pxlDevice.sW*this.pxlQuality.screenResPerc,this.pxlDevice.sH*this.pxlQuality.screenResPerc,a),o.scene.renderTarget.texture.format=Ye,o.scene.renderTarget.texture.minFilter=ke,o.scene.renderTarget.texture.magFilter=ke,o.scene.renderTarget.texture.generateMipmaps=!1,o.scene.renderTarget.depthBuffer=!0,o.scene.renderTarget.depthTexture=new an(this.pxlDevice.sW*this.pxlQuality.screenResPerc,this.pxlDevice.sH*this.pxlQuality.screenResPerc),o.scene.renderTarget.depthTexture.format=Xt,o.scene.renderTarget.depthTexture.type=gs,o.cloud3dTexture=this.cloud3dTexture,this.roomNameList.includes(t)||this.roomNameList.push(t),this.roomSceneList[t]=o,i(!0)})})}startAllRooms(){this.roomNameList.forEach(t=>{this.startRoom(this.roomSceneList[t])})}startRoom(t){t.active=!1,t.startTime=this.pxlTimer.msRunner.x}newSubRoom(t){this.roomSubList[t.roomName]=t}addToRooms(t){let i={};return this.roomNameList.forEach(n=>{let s=t.clone();this.roomSceneList[n].scene.add(s),i[n]=s}),i}addToRoomLayers(t,i=1){let n={};return this.roomNameList.forEach(s=>{let r=t.clone();this.roomSceneList[s].scene.add(r),n[s]=r,r.layers.set(i)}),n}addToRoomParents(t,i){let n={};return this.parentNameList.includes(i)||this.parentNameList.push(i),this.roomNameList.forEach(s=>{let r=t.clone();if(this.parentGroupList[s]||(this.parentGroupList[s]={}),!this.parentGroupList[s][i]){let o=new Lt;this.parentGroupList[s][i]=o,this.roomSceneList[s].scene.add(o)}this.parentGroupList[s][i].add(r),n[s]=r}),n}buildRoomEnvironments(){let t=[];this.roomNameList.forEach(i=>{this.roomSceneList[i].init(),this.roomSceneList[i].build()})}getArtistInfo(){return null}setFogHue(t=[0,0],i=[1,1]){let n=this.fog.color.getHSL(),s=[i[0]-t[0],i[1]-t[1]],r=Math.abs(Math.atan2(s[0],s[1])*.3183098861837907),o=(s[0]**2+s[1]**2)**.5/Math.max(this.pxlDevice.sW,this.pxlDevice.sH);this.fog.color.setHSL(r,o*.5+.3,o*.5),this.roomSceneList[this.currentRoom]&&this.roomSceneList[this.currentRoom].setFog&&this.roomSceneList[this.currentRoom].setFog(this.fog.color)}readShader(t=""){if(t=="script_fog"){if(this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.mapOverlayHeavyPass.enabled==!0)return this.mapOverlayHeavyPass.material;if(this.mapOverlayPass.enabled==!0)return this.mapOverlayPass.material;if(this.mapOverlaySlimPass.enabled==!0)return this.mapOverlaySlimPass.material}else{if(t=="script_dArrows")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.geoList.dArrows[0].material;if(t=="script_userScreens")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.camScreenData.screenGeoList[0].material;if(t=="script_warpZonePortals")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.returnPortalGlowList[0].material;if(t=="script_lizardking")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.lizardKingPass.material;if(t=="script_majorTom")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.pxlUser.sFieldPass.material;if(t=="script_fractalSubstrate")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.pxlUser.iZoomPass.material;if(t=="script_fractalEcho")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.delayPass.material;{let i=t.split("_");if(i.shift(),i=i.join("_"),this.geoList[i])return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=t,this.geoList[i].material}}}setShader(t,i,n){let s,r=this.pxlGuiDraws.guiWindows.shaderGui.currentShader;if(r=="script_fog")this.mapOverlayHeavyPass.enabled==!0?s=this.mapOverlayHeavyPass.material:this.mapOverlayPass.enabled==!0?s=this.mapOverlayPass.material:this.mapOverlaySlimPass.enabled==!0&&(s=this.mapOverlaySlimPass.material);else if(r=="script_dArrows"){this.geoList.dArrows.forEach(o=>{s=o.material,s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0});return}else if(r=="script_userScreens"){this.camScreenData.screenGeoList.forEach(o=>{s=o.material,s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0});return}else if(r=="script_warpZonePortals"){this.returnPortalGlowList.forEach(o=>{s=o.material,s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0});return}else if(r=="script_lizardking")s=this.lizardKingPass.material;else if(r=="script_majorTom")s=this.pxlUser.sFieldPass.material;else if(r=="script_fractalSubstrate")s=this.pxlUser.iZoomPass.material;else if(r=="script_fractalEcho")s=this.delayPass.material;else{let o=r.split("_");o.shift(),o=o.join("_"),this.geoList[o]&&(s=this.geoList[o].material)}s&&(s.vertexShader=i,s.fragmentShader=n,s.needsUpdate=!0)}buildSnow(){let t=12e3,i=12,n=new ae,s=[],r=[],o=[],a=()=>Math.floor(Math.random()*4e3%4)*.25;for(let p=0;p<t;++p)s.push(0,0,0),r.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*.5+.5),o.push(a(),a());let l=new ie(s,3),c=new ie(r,4),h=new ie(o,2);n.setAttribute("position",l),n.setAttribute("seeds",c),n.setAttribute("atlas",h);let u={snowTexture:{type:"t",value:this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"snow.jpg",1,{magFilter:it,minFilter:vr})},pointScale:{type:"f",value:i*this.pxlQuality.screenResPerc},intensity:{type:"f",value:1},rate:{type:"f",value:.035}};console.log(this.pxlShaders.particles);let f=this.pxlFile.pxlShaderBuilder(u,this.pxlShaders.particles.snowVert(this.mobile),this.pxlShaders.particles.snowFrag());f.side=Pt,f.transparent=!0,f.blending=ms,f.depthTest=!0,f.depthWrite=!1;let d=new Pr(n,f);d.sortParticles=!1,d.frustumCulled=!1,this.scene.add(d),d.layers.set(1),d.pBaseScale=i,this.geoList.snow=d}buildBackgroundObject(t={},i=null,n=null){let s=new Yt,r={};Object.assign(r,t),(i==null||typeof i!="string")&&(i=this.pxlShaders.scene.bgScreenVert()),(n==null||typeof n!="string")&&(n=this.pxlShaders.scene.bgScreenFrag());let o=this.pxlFile.pxlShaderBuilder(r,i,n);o.side=Pt,o.depthTest=!0,o.depthWrite=!1;let a=new Ge(s,o);return a.frustumCulled=!1,a}clickUserDetect(){if(this.roomSceneList[this.currentRoom].castRay&&this.roomSceneList[this.currentRoom].castRay(!0,this.pxlDevice.touchMouseData.button),this.pxlDevice.mobile)return;let t=null,i=new N(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlCamera.objRaycast.setFromCamera(i,this.pxlCamera.camera);var n=[];if(this.objectClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let l=r.distance;l<a&&(t=r.object,a=Math.min(a,l))}}t&&this.clickableActions(t.name);let o=null;if(this.promoClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let h=r.distance;h<a&&(o=r.object,a=Math.min(a,h))}}o&&this.promoActions(o)}clickableActions(t=null){t=="CallToAction"&&this.clickablePrevActiveObject&&(this.pxlGuiDraws.ctaBuildPopup(),this.objectClickableObjectList[this.clickablePrevActiveObject].Inactive.visible=!0,this.objectClickableObjectList[this.clickablePrevActiveObject].Hover.visible=!1,this.clickablePrevActiveObject=null)}promoActions(t=null){let i=t.userData.video,n=t.name;if(this.promoClickableLinks.hasOwnProperty(i)){var s=window.open(this.promoClickableLinks[i],"_blank");s.focus()}}hoverUserDetect(){this.roomSceneList[this.currentRoom].castRay&&this.roomSceneList[this.currentRoom].castRay(!1,this.pxlDevice.touchMouseData.button);let t=null,i=new N(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlCamera.objRaycast.setFromCamera(i,this.pxlCamera.camera);var n=[];if(this.objectClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let l=r.distance;l<a&&(t=r.object,a=Math.min(a,l))}}if(t){this.pxlDevice.setCursor("help"),this.objectClickableObjectList[t.name]&&(this.clickablePrevActiveObject==null&&(this.clickablePrevActiveObject=t.name),this.objectClickableObjectList[t.name].Inactive.visible=!1,this.objectClickableObjectList[t.name].Hover.visible=!0);return}else this.clickablePrevActiveObject&&(this.objectClickableObjectList[this.clickablePrevActiveObject].Inactive.visible=!0,this.objectClickableObjectList[this.clickablePrevActiveObject].Hover.visible=!1,this.clickablePrevActiveObject=null),this.pxlDevice.setCursor("grab");let o=null;if(this.promoClickable.length>0&&(n=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable)),n.length>0){let a=99999;for(var s=0;s<n.length;++s){var r=n[s];let h=r.distance;h<a&&(o=r.object,a=Math.min(a,h))}}o?(this.pxlDevice.setCursor("alias"),this.promoClickableObjectList[o.name]&&(this.promoPrevActiveObject==null&&(this.promoPrevActiveObject=o.name),this.promoClickableObjectList[o.name].x=1)):(this.promoPrevActiveObject&&(this.promoClickableObjectList[this.promoPrevActiveObject].x=.1,this.promoPrevActiveObject=null),this.pxlDevice.setCursor("grab"))}updateCompUniforms(t=null){t&&(this.pxlRenderSettings.exposure=t*this.pxlRenderSettings.mult),this.mapOverlayPass&&(this.mapMotionBlurPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlayHeavyPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlayPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlaySlimPass.uniforms.exposure.value=this.pxlRenderSettings.exposure)}sendRoomMessage(t,i,n){this.roomSceneList[t]&&this.roomSceneList[t].onMessage(i,n)}buildComposers(){this.mapWorldPosMaterial=new ye({uniforms:{camNear:{type:"f",value:this.pxlCamera.camera.near},camFar:{type:"f",value:this.pxlCamera.camera.far}},vertexShader:this.pxlShaders.rendering.worldPositionVert(),fragmentShader:this.pxlShaders.rendering.worldPositionFrag()}),this.mapWorldPosMaterial.side=Et,this.blurComposer=new pn(this.engine),this.shaderPasses.blurXShaderPass=new Xe(new ye({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.directionalBlurPass("pDiffuse",[1,0],4,1.8),defines:{}}),"tDiffuse"),this.shaderPasses.blurXShaderPass.material.transparent=!0,this.shaderPasses.blurXShaderPass.needsSwap=!0,this.shaderPasses.blurXShaderPass.enabled=!1,this.blurComposer.addPass(this.shaderPasses.blurXShaderPass),this.shaderPasses.dirBlurCopyPass=new Xe(Gi),this.shaderPasses.dirBlurCopyPass.enabled=!1,this.blurComposer.addPass(this.shaderPasses.dirBlurCopyPass),this.shaderPasses.blurYShaderPass=new Xe(new ye({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.directionalBlurPass("pDiffuse",[0,1],4,1.3),defines:{}}),"tDiffuse"),this.shaderPasses.blurYShaderPass.material.transparent=!0,this.shaderPasses.blurYShaderPass.enabled=!1,this.blurComposer.addPass(this.shaderPasses.blurYShaderPass),this.shaderPasses.scatterMixShaderPass=new Xe(new ye({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.mixBlurShaderPass(),defines:{}}),"tDiffuse"),this.shaderPasses.scatterMixShaderPass.material.transparent=!0,this.shaderPasses.scatterMixShaderPass.enabled=!1,this.blurComposer.addPass(this.shaderPasses.scatterMixShaderPass),this.options.antiAliasing==qs.LOW?this.shaderPasses.scatterMixShaderPass.enabled=!0:this.options.antiAliasing==qs.MEDIUM?(this.shaderPasses.blurXShaderPass.enabled=!0,this.shaderPasses.dirBlurCopyPass.enabled=!0,this.shaderPasses.blurYShaderPass.enabled=!0):this.options.antiAliasing==qs.HIGH&&(this.shaderPasses.blurXShaderPass.enabled=!0,this.shaderPasses.dirBlurCopyPass.enabled=!0,this.shaderPasses.blurYShaderPass.enabled=!0,this.shaderPasses.scatterMixShaderPass.enabled=!0),this.mapComposerMotionBlur=new pn(this.engine),this.mapMotionBlurPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camRotXYZ:{value:this.pxlCamera.camRotXYZ},blurDirCur:{type:"f",value:this.blurDirCur},blurDirPrev:{type:"f",value:this.blurDirPrev},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.motionBlurPostProcess(this.pxlDevice.screenRes,this.pxlDevice.mobile),defines:{}}),"tDiffuse"),this.mapMotionBlurPass.needsSwap=!0,this.mapComposerMotionBlur.addPass(this.mapMotionBlurPass),this.mapMotionBlurPass.enabled=!1,this.mapComposerMotionBlur.renderToScreen=!1,this.mapComposerGlow=new pn(this.engine);let t=new Zs(this.scene,this.pxlCamera.camera);this.mapComposerGlow.addPass(t),this.blurScreenMerge=new Xe(new ye({uniforms:{tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},mtDiffuse:{value:this.scene.renderTarget.texture},exposure:{type:"f",value:this.pxlRenderSettings.exposure}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.compLayersPostProcess(),defines:{}}),"tDiffuse"),this.blurScreenMerge.needsSwap=!0,this.mapComposerGlow.addPass(this.blurScreenMerge);let i=new Xe(Gi);this.mapComposerGlow.addPass(i),this.mapComposerGlow.renderToScreen=!1,this.mapComposerGlow.autoClear=!0,this.mapOverlayHeavyPass=new Xe(new ye({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},scenePos:{value:this.scene.renderWorldPos.texture},noiseTexture:{value:this.cloud3dTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlayHeavyShader(),defines:{}}),"tDiffuse"),this.mapOverlayHeavyPass.needsSwap=!0,this.mapOverlayPass=new Xe(new ye({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},scenePos:{value:this.scene.renderWorldPos.texture},noiseTexture:{value:this.cloud3dTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlayShader(),defines:{}}),"tDiffuse"),this.mapOverlayPass.needsSwap=!0,this.mapOverlaySlimPass=new Xe(new ye({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlaySlimShader(),defines:{}}),"tDiffuse"),this.mapOverlaySlimPass.needsSwap=!0,this.mapGlowPass=new Xe(new ye({uniforms:{time:{value:this.pxlTimer.msRunner},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderGlowTarget.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.glowPassPostProcess(),defines:{}}),"tDiffuse"),this.mapGlowPass.needsSwap=!0,this.mapComposer=new pn(this.engine),this.mapComposer.addPass(this.mapOverlayHeavyPass),this.mapComposer.addPass(this.mapOverlayPass),this.mapComposer.addPass(this.mapOverlaySlimPass),this.mapComposer.addPass(this.mapGlowPass),this.mapOverlayHeavyPass.enabled=!1,this.mapOverlayPass.enabled=!1,this.pxlUser.lKingWarp=new N(...this.pxlUser.lKingInactive),this.lizardKingPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.lKingPostProcess(),defines:{}}),"tDiffuse"),this.pxlUser.lKingPass=this.lizardKingPass,this.lizardKingPass.enabled=!1,this.pxlUser.sFieldPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture},starTexture:{value:this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"uv_starNoise.jpg")}},vertexShader:this.pxlShaders.rendering.sFieldPostProcessVert(),fragmentShader:this.pxlShaders.rendering.sFieldPostProcessFrag(),defines:{}}),"tDiffuse"),this.pxlUser.sFieldPass.enabled=!1,this.pxlUser.iZoomPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},tDiffusePrev:{type:"t",value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.iZoomPostProcess(),defines:{}}),"tDiffuse"),this.pxlUser.iZoomPass.enabled=!1,this.chroAberrationPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},ratio:{value:this.pxlDevice.screenRes},warpMult:{value:this.chroAberMult},chroAberUVTexture:{value:this.chroAberUVTexture},lKing:{value:this.pxlUser.lKingWarp}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.chroAberPostProcess(),defines:{}}),"tDiffuse"),this.chroAberrationPass.enabled=!1,this.mapComposer.addPass(this.chroAberrationPass),this.mapComposer.addPass(this.lizardKingPass),this.mapComposer.addPass(this.pxlUser.sFieldPass),this.mapComposer.addPass(this.pxlUser.iZoomPass),this.mapComposerWarpPass=new Xe(new ye({uniforms:{time:{value:this.pxlTimer.msRunner},fader:{value:this.warpVisualFader},tDiffuse:{value:null},noiseTexture:{value:this.cloud3dTexture},animTexture:{value:this.blockAnimTexture}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.warpPostProcess(),defines:{}}),"tDiffuse"),this.mapComposerWarpPass.needsSwap=!0,this.mapComposerWarpPass.enabled=!1,this.mapComposer.addPass(this.mapComposerWarpPass),this.mapBoxAAPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},resUV:{type:"f",value:this.pxlDevice.screenRes},ratio:{type:"f",value:1},gamma:{type:"f",value:this.pxlDevice.gammaCorrection}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.boxAntiAliasPass(),defines:{}}),"tDiffuse"),this.mapBoxAAPass.enabled=!1,this.mapComposer.addPass(this.mapBoxAAPass),this.mapCrossAAPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},resUV:{type:"f",value:this.pxlDevice.screenRes},ratio:{type:"f",value:1},gamma:{type:"f",value:this.pxlDevice.gammaCorrection}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.crossAntiAliasPass(),defines:{}}),"tDiffuse"),this.mapCrossAAPass.enabled=!1,this.mapComposer.addPass(this.mapCrossAAPass),this.mapComposer.autoClear=!0;let n=this.roomSceneList[this.bootRoom].scene;this.roomComposer=new pn(this.engine),this.roomRenderPass=new Zs(n,this.pxlCamera.camera),this.roomComposer.addPass(this.roomRenderPass),this.roomNameList.forEach(r=>{if(r!=this.mainRoom){let o=this.roomSceneList[r].applyRoomPass(this.roomComposer);o&&(o.enabled=!1,this.roomComposer.addPass(o))}}),this.roomBloomPass=new mn(new N(this.pxlDevice.mapW*.5,this.pxlDevice.mapH*.5),1.5,.8,.85),this.roomBloomPass.threshold=this.pxlRenderSettings.bloomThresh,this.roomBloomPass.strength=this.pxlRenderSettings.bloomStrength,this.roomBloomPass.radius=this.pxlRenderSettings.bloomRadius,this.roomComposer.addPass(this.roomBloomPass),this.roomGlowPass=new Xe(new ye({uniforms:{time:{value:this.pxlTimer.msRunner},ratio:{type:"f",value:1},tDiffuse:{value:null},gDiffuse:{value:this.blurComposer.writeBuffer.texture},rDiffuse:{value:this.blurComposer.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.glowPassPostProcess(),defines:{}}),"tDiffuse"),this.roomGlowPass.needsSwap=!0,this.roomComposer.addPass(this.roomGlowPass),this.roomComposer.addPass(this.chroAberrationPass),this.roomComposer.addPass(this.lizardKingPass),this.roomComposer.addPass(this.pxlUser.sFieldPass),this.roomComposer.addPass(this.pxlUser.iZoomPass),this.roomComposer.addPass(this.mapComposerWarpPass),this.roomComposer.addPass(this.mapCrossAAPass),this.roomComposer.addPass(this.mapBoxAAPass),this.roomComposer.autoClear=!0,this.delayComposer=new pn(this.engine);let s=new Zs(this.scene,this.pxlCamera.camera);this.delayPass=new Xe(new ye({uniforms:{tDiffuse:{value:null},roomComposer:{type:"f",value:0},tDiffusePrev:{value:this.mapComposer.renderTarget1.texture},tDiffusePrevRoom:{value:this.roomComposer.renderTarget1.texture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.textureStorePass(),defines:{}}),"tDiffuse"),this.delayPass.clear=!1,this.delayComposer.addPass(this.delayPass),this.delayComposer.renderToScreen=!1,this.delayComposer.autoClear=!1,this.pxlUser.iZoomPass.uniforms.tDiffusePrev.value=this.delayComposer.renderTarget2.texture}setExposure(t){t=t*1,this.pxlCamera.uniformScalars.exposureUniformBase=t,this.updateCompUniforms(t)}stepWarpPass(){if(this.warpVisualActive){let t=(this.pxlTimer.curMS-this.warpVisualStartTime)/this.warpVisualMaxTime[this.pxlCamera.warpType],i=Math.min(1,t*3),n=Math.min(1,3-t*3);i==1&&n==1&&this.pxlCamera.warpActive&&this.pxlCamera.warpCamRun(),this.warpVisualFader.x=i,this.warpVisualFader.y=n,n<=0&&this.stopWarpVisual()}}checkUserVideoStatus(t){}remoteUserUpdateMedia(t,i=!1,n=null){}userRemoveRemoteData(t){}stepShaderValues(){this.stepShaderFuncArr.forEach(t=>{typeof t=="object"?t.step():typeof t=="string"&&(console.log("Does this trigger?"),console.log(t))})}stepAnimatedObjects(){this.pxlUser.itemListNames.length>0&&this.pxlUser.itemListNames.forEach(t=>{this.pxlUser.itemList[t].rotation.y=this.pxlTimer.msRunner.x*this.pxlUser.itemRotateRate})}initWarpVisual(t){this.warpVisualActive=!0,this.warpVisualFader.x=0,this.warpVisualFader.y=1,this.warpVisualStartTime=this.pxlTimer.curMS,this.mapComposerWarpPass.enabled=!0}stopWarpVisual(){this.warpVisualActive=!1,this.warpVisualFader.x=1,this.warpVisualFader.y=0,this.mapComposerWarpPass.enabled=!!this.pxlUser.iZoom}prepPortalRender(){}cleanupPortalRender(){}setPortalTexture(t,i){this.roomWarpVisuals[i].material.map=t}warpPortalQueue(){return Object.keys(this.roomSceneList).reverse()}getSceneSnapshot(t){let i=this.roomSceneList[t];this.engine.setRenderTarget(i.warpZoneRenderTarget),i.prepPortalRender(),this.engine.render(i.scene||i.scene,this.pxlCamera.camera),i.cleanupPortalRender(),this.engine.setRenderTarget(null)}mapRender(t=!0){if(this.pxlTimer.active&&this.step(),this.pxlTimer.curMS>this.nextRenderMS||t==!1){this.prevRenderMS=this.nextRenderMS,this.nextRenderMS=this.pxlTimer.curMS+this.renderInterval,this.stepShaderValues(),this.stepAnimatedObjects();let i=this.roomSceneList[this.currentRoom];i&&i.booted&&(i.step(),i.camera.layers.disable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(i.scene.renderTarget),this.engine.clear(),this.engine.render(i.scene,i.camera),this.engine.setRenderTarget(null),i.camera.layers.enable(this.renderLayerEnum.SKY),this.mapComposerGlow&&(this.pxlQuality.settings.bloom||this.pxlQuality.settings.fog)&&this.mapComposerGlow.render(),this.mapRenderBlurStack(i,i.camera,i.scene,this.scene.renderGlowTarget),this.roomComposer.render()),this.pxlUser.iZoom&&this.delayComposer.render()}this.pxlTimer.active&&t&&requestAnimationFrame(()=>{this.mapRender()})}mapRenderBlurStack(t,i,n,s){if(this.blurComposer){t.geoList.GlowPass&&(t.geoList.GlowPass.forEach(a=>{if(a.userData.hasOwnProperty("GlowPerc")){let l=a.userData.GlowPerc;a.material.hasOwnProperty("uniforms")&&a.material.uniforms.mult&&(a.material.uniforms.mult.value=l)}}),t.geoList.hasOwnProperty("GlowPassMask")&&t.geoList.GlowPassMask.forEach(a=>{a.material.uniforms&&a.material.uniforms.cdMult&&(a.material.uniforms.cdMult.value=0)})),i.layers.disable(this.renderLayerEnum.SCENE),i.layers.disable(this.renderLayerEnum.PARTICLES),i.layers.disable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(s);let r=0,o=n.background.clone();n.background.set(r),this.engine.setClearColor(r,0),this.engine.render(n,i),n.background.r=o.r,n.background.g=o.g,n.background.b=o.b,i.layers.enable(this.renderLayerEnum.SCENE),i.layers.enable(this.renderLayerEnum.PARTICLES),i.layers.enable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(null),t.geoList.GlowPass&&(t.geoList.GlowPass.forEach(a=>{a.userData.hasOwnProperty("GlowPerc")&&a.material.hasOwnProperty("uniforms")&&a.material.uniforms.mult&&(a.material.uniforms.mult.value=1)}),t.geoList.hasOwnProperty("GlowPassMask")&&t.geoList.GlowPassMask.forEach(a=>{a.material.uniforms&&a.material.uniforms.cdMult&&(a.material.uniforms.cdMult.value=1)})),this.blurComposer.render(),this.roomBloomPass.enabled=!1}}};var ft=class{static svgPromise(t,i,n=null,s=null){let r={},o=document.getElementById(i);if(!o)return;n!=null&&o.classList.add(n);let a=this,l=Promise.resolve(Mi.getURLContent(t));return l.then(c=>{o.innerHTML=c,r.svg=o.getElementsByTagName("svg")[0],s!=null&&r.svg.classList.add(s)}),r.promise=l,r}static svgRawPromise(t){let i={},n=this;return Promise.resolve(Mi.getURLContent(t)).then(r=>{let o=document.createElement("div");o.innerHTML=r,i.svg=o.getElementsByTagName("svg")[0]}),i}static svgIconPromise(t,i,n,s=null,r=null){let o=this,a={};a.hover=null,a.mute=null,a.caret=null,a.indicator=null,a.waiting=[],a.state=null,a.eventType=n;let l=document.getElementById(i);if(!l)return;r?l.classList.add(r):l.classList.add("iconStyle"),a.parent=l.parentNode,a.parent.classList.add("iconHover"),a.parent.addEventListener("click",h=>{o.iconEvent("click",a,n)});let c=Promise.resolve(Mi.getURLContent(t));return c.then(h=>{if(l.innerHTML=h,a.svg=l.getElementsByTagName("svg")[0],a.svg){r?a.svg.classList.add(r):a.svg.classList.add("iconStyle");let u=a.svg.children,f=a.svg.getAttribute("xmlns"),d=a.svg.getAttribute("height"),p=a.svg.getAttribute("width");for(let v=0;v<u.length;++v){let m=u[v];if(i=="speakerIcon"){let E=l.getAttribute("xmlns"),M=parseInt(d),C=parseInt(p),L=document.createElementNS(E,"rect");L.setAttribute("x",-1),L.setAttribute("y",-1),L.setAttribute("fill","white"),L.setAttribute("fill-opacity",0),L.setAttribute("height",d+2),L.setAttribute("width",p+2),L.setAttribute("z-index",-1),l.appendChild(L),a.hover=L,a.svg.setAttribute("fill-opacity",this.toggleOpacity[0])}let g=m.getAttribute("id");if(g=="mute"){a.mute=m,a.mute.style.transformOrigin="50% 50%",a.mute.style.filter="alpha(opacity=0)",a.mute.style.opacity="0",a.mute.style.transform="scale(0,0)",a.mute.style.transition="scale 1s, opacity .5s, filter .5s";let E=document.createElement("style");E.type="text/css",E.innerHTML=`
                                @keyframes loadingSpinner{
                                    0%{
                                        transform: rotate(0deg);
                                    }
                                    100%{
                                        transform: rotate(360deg);
                                    }
                                }
                            `,a.svg.appendChild(E);let M=Math.max(2,Math.min(d,p)*.25),C=p*.5,L=d*.5,B=document.createElementNS(f,"path");B.setAttribute("d",` M ${C} ${L-M} A ${M} ${M} 0 1 1 ${C-M} ${L} `),B.setAttribute("stroke","white"),B.setAttribute("stroke-width","2"),B.style.display="none",B.style.transformOrigin="50% 50%",B.style.animation="loadingSpinner 1s linear infinite",B.style.animationDuration="2s",B.style.animationPlayState="paused",a.indicator=B,a.svg.appendChild(B),this.toggleIcon(a,s)}else g=="caret"?(a.caret=m,a.caret.style.transformOrigin="50% 50%",a.caret.style.transition="transform .5s",this.flipIcon(a,!1)):g=="state"?(m.style.display="none",a.state=m):a.waiting.push(m)}let y=document.createElementNS(f,"rect");y.classList.add("iconHover"),y.setAttribute("x",0),y.setAttribute("y",0),y.setAttribute("height",d),y.setAttribute("width",p),a.svg.appendChild(y)}}),a.promise=c,a}static svgButtonPromise(t,i,n=null,s=!1,r=null){if(typeof i=="string"&&(i=document.getElementById(i),!i))return;let o=this;Promise.resolve(Mi.getURLContent(t)).then(l=>{i.innerHTML=l;let c=i.getElementsByTagName("svg");if(c.length>0&&(c=c[0],n&&(n=typeof n=="string"?[n]:n,n.forEach(h=>{c.classList.add(h)})),s)){let h=c.getAttribute("xmlns"),u=parseInt(c.getAttribute("height")),f=parseInt(c.getAttribute("width")),d=document.createElementNS(h,"rect");d.setAttribute("x",-1),d.setAttribute("y",-1),d.setAttribute("fill","white"),d.setAttribute("fill-opacity",0),d.setAttribute("height",u+2),d.setAttribute("width",f+2),d.setAttribute("z-index",-1),c.appendChild(d);let p=c.getElementById("state");p&&p.setAttribute("fill-opacity",this.toggleOpacity[0]),r&&(c.onclick=y=>{o.svgCheckClick(y,r)},o.pxlDevice.mobile?(c.ontouchstart=y=>{o.svgStylize(y,!0)},c.ontouchend=y=>{o.svgStylize(y,!1)}):(c.onmouseover=y=>{o.svgStylize(y,!0)},c.onmouseout=y=>{o.svgStylize(y,!1)}))}})}};var $a=class{constructor(t,i="Metal-Asylum",n="images/assets/",s="images/GUI/"){this.projectTitle=i,this.verbose=t,this.sW=window.innerWidth,this.sH=window.innerHeight,this.mobile=!1,this.pxlFile=null,this.pxlCookie=null,this.pxlTimer=null,this.pxlAudio=null,this.pxlUtils=null,this.pxlUser=null,this.pxlDevice=null,this.pxlAutoCam=null,this.pxlCamera=null,this.pxlNavCanvas=null,this.pxlQuality=null,this.pxlEnv=null,this.assetRoot=n,this.guiRoot=s,this.introHelpActive=!0,this.branding={title:i,loader:s+".svg",logo:s+".svg",medalion:s+".svg",stack:s+".svg"},this.loaderPhrases=["Loading..."],this.lableBoxSize=40,this.optionWidthRound=10,this.optionWidthAdd=25,this.deviceOptionHeight=[0,300],this.pxlLoader=null,this.pxlLoaderCount=0,this.pxlLoaderTotal=5,this.hudBlock={obj:null,active:!1},this.userControlBlock=null,this.hudVisibility=!0,this.hudIcons={},this.hudElements={},this.guiWindows={},this.msgCount=0,this.hudMedalionBar=null,this.userProfileMessageInput=null,this.userProfileReturnMessage=null,this.userCountObj=null,this.userCountCur=0,this.messageCountObj=null,this.messageCountCur=0,this.chatMessageDisplay=null,this.chatMessageInput=null,this.camChoicesActive=!1,this.micChoicesActive=!1,this.pxlNavData={active:!1,gui:null,height:null,fpsSet:0,fps:null,dl:null,ul:null},this.djPlayerObj=null,this.buildGuiStatus={hud:!1,userTopBar:!1,bottomBar:!1,djPlayer:!1,roomControls:!1,verseList:!1,medalion:!0,loadingBranding:!1},this.requestVerseList=!1,this.verseList=[],this.verseUserCounts={},this.verseTitlePrefix="",this.verseTitleSuffix="'s Room",this.multiverseData={fromVerse:null,toVerse:null,electedVerse:null,mitosisState:!1,mitosisBufferTime:15,mitosisTime:0,mitosisUpdateTime:0},this.textDescriptions={chatIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat',pos:[1,-1.5]},multiverseIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection',pos:[0,-1.3]},djPlayerVolumeParent:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume',pos:[0,-1.5]},speakerIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output',pos:[0,-1.5]},micIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input',pos:[0,-1.5]},camIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input',pos:[0,-1.5]},helpIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions',pos:[0,-1.5]},infoIconParent:{text:'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>',pos:[-1,0],offset:[-10,0]},settingsIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation',pos:[0,-1.5]},muteAllIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users',pos:[1,0]},fullScreenIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen',pos:[-1,0]},videoQualityIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings',pos:[-1,0]},statsIcon:{text:"jitsi connection status; toggle connection ",pos:[1,0]},usersIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools',pos:[1,0]},ft2Button:{text:"Environment",pos:[-1,0],offset:[-10,0]},ft3Button:{text:"Invite Friends",pos:[-1,0],offset:[-10,0]},hud_userCount:{text:"# of People",pos:[-1,0],offset:[-10,0]}},this.loading=!0,this.disclaimer=!1,this.mapPrompt=null,this.mapPromptBG=null,this.delayLoadChatWindow=!1,this.renderSettings=null,this.controlSettings=null,this.shaderEditorDisplay=null,this.radioControls=[],this.controlState=[!0,!1,!1,!1],this.controlToggle=[!0,!0,!1,!1],this.buttonPadding=6,this.toggleOpacity=[.6,1],this.qualityText=["Netbook","Laptop","Desktop Computer","Gamer Rig"],this.activeItem=null,this.jmaWindowVis=!1,this.actionPopUp=null,this.ctaLocalDocURL={},this.ctaContentLoading=!1,this.googleDocHTML=null,this.googleDocURL=""}setDependencies(t){this.pxlFile=t.pxlFile,this.pxlCookie=t.pxlCookie,this.pxlTimer=t.pxlTimer,this.pxlAudio=t.pxlAudio,this.pxlUtils=t.pxlUtils,this.pxlUser=t.pxlUser,this.pxlDevice=t.pxlDevice,this.pxlAutoCam=t.pxlAutoCam,this.pxlCamera=t.pxlCamera,this.pxlNavCanvas=t.pxlNavCanvas,this.pxlQuality=t.pxlQuality,this.pxlEnv=t.pxlEnv,this.mobile=t.mobile,this.renderSettings=this.pxlCookie.readCookie(this.pxlUser.renderSettingsCookie),this.controlSettings=this.pxlCookie.readCookie(this.pxlUser.controlModeCookie),super.setDependencies(t)}init(){this.cssBuildClasses(),this.buildConsole()}prepLoader(){this.mapPromptBG=document.createElement("div"),this.mapPromptBG.classList.add("mapPromptBackgroundStyle"),document.body.appendChild(this.mapPromptBG),this.mapPrompt=document.createElement("div"),this.mapPrompt.setAttribute("id","mapPrompt"),this.mapPrompt.classList.add("mapPromptStyle"),this.mapPrompt.classList.add("fader"),this.mapPrompt.classList.add("visOn"),this.mapPrompt.innerHTML=`
            <div id="loaderLogoBranding" class='pxlLoaderLogo'></div>
            <div class='loadStyleParent'>
              <div id='pxlLoader' class='loadStyle'></div>
              <div id='pxlLoaderBackground' class='loadStyleBackground'></div>
            </div>
            <div id="loaderBranding" class='pxlLoaderTitle'>${this.projectTitle}</div>
            <div id="loaderMessage" class='pxlLoaderMessage'></div>
          `,document.body.appendChild(this.mapPrompt);let t=document.getElementById("loaderMessage");if(t){let a=this.loaderPhrases[Math.floor(Math.random()*this.loaderPhrases.length)];t.innerHTML=a}this.buildGuiStatus.loadingBranding&&ft.svgPromise(this.branding.loader,"loaderBranding","pxlLoaderTitle","loadBrandingLogo"),this.pxlLoader=document.getElementById("pxlLoader"),this.pxlLoader.style.width="2%";let i=document.createElement("div");i.classList.add("canvasCrashPromptBackgroundStyle"),document.body.appendChild(i);let n=document.createElement("div");n.classList.add("canvasCrashPromptStyle"),i.appendChild(n);let s;this.pxlQuality&&(parseInt(this.pxlQuality.detailLimit)==0?s=`Looks like your computer is having a hard time, but we\u2019ve got your fix.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle}.
          <br>If you\u2019re still having issues, drop us a line in the chat.`:s=`Looks like your computer is still having trouble, but we\u2019ve got another fix for ya.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle} again.
          <br>Again, if you\u2019re still having issues, drop us a line in the chat.`),n.innerHTML=s;let r=document.getElementById("crashLink"),o=this;r&&(r.onclick=a=>{o.crashLinkTrigger(a,o)})}stepLoader(t=""){this.pxlLoaderCount+=1;let i=Math.min(100,this.pxlLoaderCount/(this.pxlLoaderTotal-1)*100);i==100&&(this.pxlLoader.style.borderRadius="5px"),this.pxlLoader.style.width=i+"%",this.verbose>=Hi.INFO&&console.log("Loader",this.pxlLoaderCount,this.pxlLoader.style.width,"; "+t)}setLoaderPhrases(t,i=!0){t&&t.length>0&&(i&&(this.loaderPhrases=[]),this.loaderPhrases=this.loaderPhrases.concat(t),this.setLoaderObjMessage())}setLoaderObjMessage(){let t=document.getElementById("loaderMessage");if(t){let i=Math.floor(Math.random()*17391.537193*this.loaderPhrases.length%this.loaderPhrases.length),n=this.loaderPhrases[i];t.innerHTML=n}}booted(){this.buildHudBlock(),this.buildTopBar(),this.buildBottomBar(),this.buildGuiWindowContainer(),this.buildUserControlBlock(),this.buildRawHtml(),this.prepPageDisplay()}step(){this.updateGuiPositions(),this.pxlUser?.checkItemWearOff(this.pxlTimer.prevMS)&&this.hideItemHud(),this.pxlNavDataUpdate()}resize(){this.sW=window.innerWidth,this.sH=window.innerHeight,this.resetHelpTextPlacement(),["videoinput","audioinput","audiooutput"].forEach(i=>{let n=null,s=null;i=="videoinput"?(n="camChoiceOptionsBlock",s=this.hudIcons.camChoiceIcon):i=="audioinput"?(n="micChoiceOptionsBlock",s=this.hudIcons.micChoiceIcon):i=="audiooutput"&&(n="speakerChoiceOptionsBlock",s=this.hudIcons.speakerChoiceIcon);let r=document.getElementById(n);if(r&&s){let o=r.getBoundingClientRect().width,a=s.parent.getBoundingClientRect();r.style.left=a.x-o*.5,r.style.bottom=this.sH-this.hudBottomBar.getBoundingClientRect().y}}),this.setUserControlPosition(),this.inviteUserPosition(),this.setArtistInfoSizing()}resetHelpTextPlacement(){Object.keys(this.textDescriptions).forEach(i=>{let n=this.textDescriptions[i];if(n){let s=document.getElementById("helpText_"+i);if(!s)return;let r=document.getElementById(i);if(r){let o=2,a=n.pos,l=n.offset?n.offset:[0,0],c=r.getBoundingClientRect(),h=s.getBoundingClientRect(),u=0,f=0,d=!1;a[1]<0?(f=c.y+h.height*a[1],d=!0):a[1]==0?f=c.y+c.height*.5-h.height*.5:a[1]>0&&(f=c.y+c.height+h.height*(a[1]-1),d=!0),d?a[0]<0?u=c.x+c.width+h.width*a[0]:a[0]==0?u=c.x+c.width*.5-h.width*.5:a[0]>0&&(u=c.x+c.width*(a[0]-1)):a[0]<0?u=c.x+h.width*a[0]:a[0]==0?u=c.x+c.width*.5-h.width*.5:a[0]>0&&(u=c.x+c.width*2*a[0]),u=u+l[0],u+h.width>this.sW-o?u=this.sW-o-h.width:u<o&&(u=o),f=f+l[1],s.style.left=u,s.style.top=f}else s.style.display="none"}})}crashLinkTrigger(t,i){let n=location.search.match(/[a-zA-Z0-9=]+/g),s="?";n.forEach(r=>{let o=r.split("=");o[0]=="dlimit"?s+=o[0]+"="+(parseInt(o[1])+1)+"&":s+=r+"&"}),location.search=s}guiToggleVisibility(t=null){if(t=t??!this.hudVisibility,this.hudVisibility=t,this.hudTopBar&&!this.hudTopBar.origDisplay&&(this.hudTopBar.origDisplay=this.hudTopBar.style.display),this.fastTravelBar&&!this.fastTravelBar.origDisplay&&(this.fastTravelBar.origDisplay=this.fastTravelBar.style.display),this.hudBottomBar&&!this.hudBottomBar.origDisplay&&(this.hudBottomBar.origDisplay=this.hudBottomBar.style.display),t){if(this.hudTopBar&&this.hudTopBar.removeAttribute("style"),this.fastTravelBar&&this.fastTravelBar.removeAttribute("style"),this.hudBottomBar&&this.hudBottomBar.removeAttribute("style"),this.userControlBlock){let i=this.userControlBlock.gui.style.top;this.userControlBlock.gui.removeAttribute("style"),this.userControlBlock.gui.style.top=i}}else this.hudTopBar&&(this.hudTopBar.style.display="none"),this.fastTravelBar&&(this.fastTravelBar.style.display="none"),this.hudBottomBar&&(this.hudBottomBar.style.display="none"),this.userControlBlock&&(this.userControlBlock.gui.style.display="none");this.hudElements.artistInfo&&(this.hudElements.artistInfo.parent.style.display=t?"grid":"none")}cssBuildClasses(){let t=document.createElement("style");t.type="text/css",t.innerHTML=`
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
		`,t.innerHTML=n,this.hudIcons.statsIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_stats.svg`,"statsIcon","stats"),this.hudIcons.statsIcon.promise.finally(()=>{}),this.hudIcons.usersIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_user.svg`,"usersIcon","users");let s=document.createElement("div");s.id="hud_pxlNavData",s.classList.add("hud_pxlNavDataParentStyle"),t.appendChild(s),this.pxlNavData.gui=s;let r=document.createElement("div");r.id="hud_pxlNavData",r.classList.add("hud_pxlNavDataStyle"),s.appendChild(r),n=`
      <div class="hud_pxlNavData_FPS gui_boldText">FPS</div><div class="hud_pxlNavData_FPS">:</div><div id="hud_pxlFPS" class="hud_pxlNavData_FPS"> - </div>
      <div class="hud_pxlNavData_UL gui_boldText">\u2191</div><div class="hud_pxlNavData_UL">:</div><div id="hud_pxlUL" class="hud_pxlNavData_UL"> - </div>
      <div class="hud_pxlNavData_DL gui_boldText">\u2193</div><div class="hud_pxlNavData_DL">:</div><div id="hud_pxlDL" class="hud_pxlNavData_DL"> - </div>
    `,r.innerHTML=n,this.pxlNavData.fps=document.getElementById("hud_pxlFPS"),this.pxlNavData.ul=document.getElementById("hud_pxlUL"),this.pxlNavData.dl=document.getElementById("hud_pxlDL")}buildUserControlBlock(){this.userControlBlock={},this.userControlBlock.activeList=[],this.userControlBlock.userList={},this.userControlBlock.mutedList=[];let t=document.createElement("div");t.classList.add("userControlBlockStyle"),document.body.appendChild(t),this.userControlBlock.gui=t,this.userControlBlock.speakerIcon=null}buildMedalionBar(){if(this.buildGuiStatus.medalion){let t=document.createElement("div");t.id="hud_medalionBar",t.classList.add("hud_medalionIconBlockStyle"),this.hudMedalionBar=t,document.body.appendChild(this.hudMedalionBar);let i=`
        <div id="medalionIconParent" class="hud_speakerIconStyle">
          <div id="medalionIcon"></div>
        </div>
        <div id="medalionTitle" class="medalionTitleStyle">${this.branding.title}</div>
      `;this.hudMedalionBar.innerHTML=i;let n=document.getElementById("medalionIcon"),s=document.getElementById("medalionTitle");n.addEventListener("mouseover",()=>{s.classList.add("medalionTitleGrowStyle")}),n.addEventListener("mouseout",()=>{s.classList.remove("medalionTitleGrowStyle")}),this.hudIcons.medalionIcon=ft.svgIconPromise(this.branding.medalion,"medalionIcon","info",null,"medalionStyle")}}buildBottomBar(){if(!this.buildGuiStatus.bottomBar)return;let t=document.createElement("div");t.id="hud_bottomBar",t.classList.add("hud_bottomBarStyle"),this.hudBottomBar=t,document.body.appendChild(this.hudBottomBar);let i="";if(i+=`
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
      `),this.hudBottomBar.innerHTML=i,this.messageCountObj=document.getElementById("hud_messageCount"),this.hudIcons.chatIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_chat.svg`,"chatIcon","chat"),!this.mobile&&!this.pxlAutoCam.enabled){this.hudIcons.multiverseIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_multiverse.svg`,"multiverseIcon","multiverse"),this.hudIcons.speakerIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_ProxAudio.svg`,"speakerIcon","speakerToggle",!1),this.hudIcons.speakerChoiceIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"speakerChoiceIcon","speakerChoice",!1,"iconCaretStyle"),this.hudIcons.micIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_mic.svg`,"micIcon","micToggle",!1),this.hudIcons.micChoiceIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"micChoiceIcon","micChoice",!1,"iconCaretStyle"),this.hudIcons.camIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_camera.svg`,"camIcon","camToggle",!1),this.hudIcons.camChoiceIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"camChoiceIcon","camChoice",!1,"iconCaretStyle"),this.hudIcons.helpIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_help.svg`,"helpIcon","help"),this.hudIcons.settingsIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_settings.svg`,"settingsIcon","settings");let n=document.getElementById("guiVerseTitle"),s=this}else{let n=document.getElementById("hud_chatIconBlock");n.style.gridAutoColumns="max-content max-content auto max-content",n.style.margin="0px 10px"}}prepArtistInfo(t=null){if(!(!this.pxlEnv?.postIntro||t=="")){if(!this.hudElements.artistInfo){this.hudElements.artistInfo={},this.hudElements.artistInfo.active=!1;let i=document.createElement("div");i.classList.add("hud_aristInfoParentStyle"),this.hudElements.artistInfo.parent=i;let n=document.createElement("div");n.classList.add("hud_aristInfoButtonStyle"),i.appendChild(n);let s=this;n.onclick=()=>{s.toggleArtistInfo()},this.hudElements.artistInfo.button=n;let r=document.createElement("div");r.classList.add("hud_aristInfoButtonTextStyle"),r.innerHTML="artwork info&nbsp;&nbsp;",n.appendChild(r),this.hudElements.artistInfo.buttonText=r;let o=document.createElement("div");o.classList.add("hud_aristInfoCarrotXStyle"),o.id="artistInfoCarrotX",n.appendChild(o);let a=document.createElement("div");a.classList.add("hud_aristInfoInner"),a.innerHTML=t,i.appendChild(a),this.hudElements.artistInfo.inner=a,document.body.appendChild(i),this.hudElements.artistInfo.closeSvg=ft.svgPromise(`${this.guiRoot}global/carrotCloseAnimate.svg`,"artistInfoCarrotX"),this.hudElements.artistInfo.closeSvg.promise.finally(()=>{this.artistInfoButtonPrep()})}this.toggleArtistInfo(!1),t!=null&&this.hudVisibility&&!this.pxlAutoCam.active?(this.hudElements.artistInfo.parent.style.zIndex=155,this.hudElements.artistInfo.parent.style.display="grid",this.hudElements.artistInfo.inner.innerHTML=t,setTimeout(()=>{this.setArtistInfoSizing()},20)):(this.hudElements.artistInfo.parent.style.zIndex=-5,this.hudElements.artistInfo.parent.style.display="none")}}artistInfoButtonPrep(t=0){let i=this.hudElements.artistInfo.closeSvg.svg;if(i){let n=i.getElementById("carrotToClone_on"),s=i.getElementById("carrotToClone_off");n&&s?(this.hudElements.artistInfo.onAnim=n,this.hudElements.artistInfo.offAnim=s):t==2||setTimeout(()=>{this.artistInfoButtonPrep(t+=1)},100)}}setArtistInfoSizing(){if(this.hudElements.artistInfo){let t=this.hudElements.artistInfo.inner.clientHeight,i=this.hudElements.artistInfo.inner.clientWidth,n=this.hudElements.artistInfo.button.clientHeight,s=this.hudElements.artistInfo.button.clientWidth;this.hudElements.artistInfo.innerHeight=t,this.hudElements.artistInfo.innerWidth=i,this.hudElements.artistInfo.baseHeight=n,this.hudElements.artistInfo.baseWidth=s,this.hudElements.artistInfo.parent.style.height=t+"px",this.hudElements.artistInfo.parent.style.width=i+"px";let r=this.hudElements.artistInfo.buttonText.clientWidth;this.hudElements.artistInfo.buttonText.maxWidth=r,this.hudElements.artistInfo.buttonText.style.maxWidth=r+"px",this.toggleArtistInfo(this.hudElements.artistInfo.active)}}toggleArtistInfo(t=null){t=t??!this.hudElements.artistInfo.active,this.hudElements.artistInfo.active=t;let i=this.hudElements.artistInfo.innerHeight,n=Math.min(this.pxlDevice.sW*.3,this.hudElements.artistInfo.innerWidth),s=this.hudElements.artistInfo.baseHeight,r=this.hudElements.artistInfo.baseWidth;this.hudElements.artistInfo.parent.style.maxHeight=t?i+"px":s+"px",this.hudElements.artistInfo.parent.style.maxWidth=t?n+"px":r+"px",this.hudElements.artistInfo.parent.style.padding=t?"5px":"0px";let o=this.hudElements.artistInfo.buttonText.maxWidth;this.hudElements.artistInfo.buttonText.style.maxWidth=t?"0px":o+"px",this.hudElements.artistInfo.buttonText.style.opacity=t?"0":"1",this.hudElements.artistInfo.buttonText.style.filter="alpha(opacity="+(t?"0":"1000")+")",this.hudElements.artistInfo.inner.style.opacity=t?"1":"0",this.hudElements.artistInfo.inner.style.filter="alpha(opacity="+(t?"100":"0")+")",this.hudElements.artistInfo.onAnim&&(t?this.hudElements.artistInfo.onAnim.beginElement():this.hudElements.artistInfo.offAnim.beginElement())}prepPageDisplay(t=null){if(!(!this.pxlEnv?.postIntro||t=="")){if(!this.hudElements.artistInfo){this.hudElements.artistInfo={},this.hudElements.artistInfo.active=!1;let i=document.createElement("div");i.classList.add("hud_aristInfoParentStyle"),this.hudElements.artistInfo.parent=i;let n=document.createElement("div");n.classList.add("hud_aristInfoButtonStyle"),i.appendChild(n);let s=this;n.onclick=()=>{s.togglePageDisplay()},this.hudElements.artistInfo.button=n;let r=document.createElement("div");r.classList.add("hud_aristInfoButtonTextStyle"),r.innerHTML="artwork info&nbsp;&nbsp;",n.appendChild(r),this.hudElements.artistInfo.buttonText=r;let o=document.createElement("div");o.classList.add("hud_aristInfoCarrotXStyle"),o.id="artistInfoCarrotX",n.appendChild(o);let a=document.createElement("div");a.classList.add("hud_aristInfoInner"),a.innerHTML=t,i.appendChild(a),this.hudElements.artistInfo.inner=a,document.body.appendChild(i)}this.togglePageDisplay(!1),t!=null&&this.hudVisibility&&!this.pxlAutoCam.active?(this.hudElements.artistInfo.parent.style.zIndex=155,this.hudElements.artistInfo.parent.style.display="grid",this.hudElements.artistInfo.inner.innerHTML=t,setTimeout(()=>{this.setArtistInfoSizing()},20)):(this.hudElements.artistInfo.parent.style.zIndex=-5,this.hudElements.artistInfo.parent.style.display="none")}}setPageToDisplay(){if(this.hudElements.artistInfo){let t=this.hudElements.artistInfo.inner.clientHeight,i=this.hudElements.artistInfo.inner.clientWidth,n=this.hudElements.artistInfo.button.clientHeight,s=this.hudElements.artistInfo.button.clientWidth;this.hudElements.artistInfo.innerHeight=t,this.hudElements.artistInfo.innerWidth=i,this.hudElements.artistInfo.baseHeight=n,this.hudElements.artistInfo.baseWidth=s,this.hudElements.artistInfo.parent.style.height=t+"px",this.hudElements.artistInfo.parent.style.width=i+"px";let r=this.hudElements.artistInfo.buttonText.clientWidth;this.hudElements.artistInfo.buttonText.maxWidth=r,this.hudElements.artistInfo.buttonText.style.maxWidth=r+"px",this.toggleArtistInfo(this.hudElements.artistInfo.active)}}togglePageDisplay(t=null){if(this.hudElements.artistInfo){t=t??!this.hudElements.artistInfo.active,this.hudElements?.artistInfo&&(this.hudElements.artistInfo.active=t);let i=this.hudElements.artistInfo.innerHeight,n=Math.min(this.pxlDevice.sW*.3,this.hudElements.artistInfo.innerWidth),s=this.hudElements.artistInfo.baseHeight,r=this.hudElements.artistInfo.baseWidth;this.hudElements.artistInfo.parent.style.maxHeight=t?i+"px":s+"px",this.hudElements.artistInfo.parent.style.maxWidth=t?n+"px":r+"px",this.hudElements.artistInfo.parent.style.padding=t?"5px":"0px";let o=this.hudElements.artistInfo.buttonText.maxWidth;this.hudElements.artistInfo.buttonText.style.maxWidth=t?"0px":o+"px",this.hudElements.artistInfo.buttonText.style.opacity=t?"0":"1",this.hudElements.artistInfo.buttonText.style.filter="alpha(opacity="+(t?"0":"1000")+")",this.hudElements.artistInfo.inner.style.opacity=t?"1":"0",this.hudElements.artistInfo.inner.style.filter="alpha(opacity="+(t?"100":"0")+")",this.hudElements.artistInfo.onAnim&&(t?this.hudElements.artistInfo.onAnim.beginElement():this.hudElements.artistInfo.offAnim.beginElement())}}iconEvent(t,i,n=null){if(this.hudBlock.obj&&(this.hudBlock.obj.style.display="none"),t=="click"){if(n=="chat"){this.toggleChatBox();return}else if(n=="musicToggle"){this.pxlAudio.djPlayerMuteToggle(),this.toggleIcon(i,!this.pxlAudio.djMuted,!0);return}else if(n=="userSpeakerToggle"){this.setUserControls(i);return}else if(n=="speakerToggle"){this.toggleIcon(i,!1,!0);return}else if(n=="speakerChoice"){let s="audiooutput";this.flipIcon(i,this.guiWindows[s]&&this.guiWindows[s].active);return}else if(n=="help"){let s=this.guiWindows.helpGui?this.guiWindows.helpGui.active:!1;this.checkOpenWindows(!0),this.helpGuiToggle(!s);return}else if(n=="info"){let s=this.guiWindows.infoGui?this.guiWindows.infoGui.active:!1;this.checkOpenWindows(!0),this.infoGuiToggle(!s);return}else if(n=="settings"){let s=this.guiWindows.settingsGui?this.guiWindows.settingsGui.active:!1;this.checkOpenWindows(!0),this.settingsGuiToggle(!s);return}else if(n=="userProfile"){this.toggleUserProfile();return}else if(n!="users"){if(n=="stats")return}}}setMicVolumeLevel(t){this.hudIcons.micIcon.volumeMask||(this.hudIcons.micIcon.volumeMask=document.getElementById("gui_micVolumeMask"),this.hudIcons.micIcon.timer=this.pxlTimer.msRunner.x-1);let i=12-t*11;this.hudIcons.micIcon.volumeMask.setAttribute("y",i)}toggleIcon(t,i,n=!1){if(t){if(t.mute.style.filter=i?"alpha(opacity=0)":"alpha(opacity=100)",t.mute.style.opacity=i?"0":"1",t.mute.style.transform=i?"scale(0,0)":"scale(1,1)",["camToggle","speakerToggle"].includes(t.eventType))return;let r={speakerToggle:"speaker",micToggle:"audio",camToggle:"video"}[t.eventType];r&&n&&this.loadingDeviceChange(r,i)}}flipIcon(t,i){t.caret.style.transform=`rotate( ${i?"180deg":"0deg"} )`}loadingDeviceChange(t,i=!0){let n=null;t=="speaker"?n=this.hudIcons.speakerIcon:t=="audio"?n=this.hudIcons.micIcon:t=="video"&&(n=this.hudIcons.camIcon),n.indicator.style.display=i?"inline-block":"none",n.indicator.style.animationPlayState=i?"running":"paused",n.waiting.forEach(s=>{s.setAttribute("fill-opacity",i?".5":"1")}),i&&setTimeout(()=>{this.loadingDeviceChange(t,!1)},1e3)}djBuildPlayer(){if(this.buildGuiStatus.djPlayer){this.djPlayerObj=document.createElement("div"),this.djPlayerObj.id="djPlayer";let t=`
          <audio id="djStream" playsinline muted>
            <source src="`+this.pxlAudio.djUrlSource+`"></source>
          </audio>
          <table cellpadding=0 cellspacing=5 border=0 style="height:100%;"><tbody><tr>
              <td align="left">
                  <div id="djPlayerVol"></div>
              <  d><td valign="center" align="left" width=100%>
                  <div id="djPlayerVolumeParent" class="volParent"><div id="djPlayerVolume" class="volSlider"></div></div>
              <  d><  r>
          <  body><  able>`;this.djPlayerObj.innerHTML=t,document.getElementById("musicControllerBlock").appendChild(this.djPlayerObj),this.hudIcons.musicIcon=ft.svgIconPromise(`${this.guiRoot}icons/icon_music.svg`,"djPlayerVol","musicToggle",!this.pxlAudio.djMuted),this.pxlAudio.djBuildPlayer()}}buildItemHud(t,i){this.activeItem.innerHTML=i,this.activeItem.style.opacity="1",this.activeItem.style.filter="alpha(opacity=100)",this.activeItem.style.textShadow="1px 1px 3px #000000",setTimeout(()=>{this.activeItem.style.fontSize="1.5em",this.activeItem.style.top=".5%",this.activeItem.style.right="140px",this.activeItem.style.transform="translateX(0%)"},1500)}hideItemHud(){this.activeItem.innerHTML="",this.activeItem.style.fontSize="3em",this.activeItem.style.top="10%",this.activeItem.style.right="50%",this.activeItem.style.transform="translateX(50%)",this.activeItem.style.opacity="0",this.activeItem.style.filter="alpha(opacity=0)"}mapPrepPrompts(){this.activeItem=document.createElement("div"),this.activeItem.classList.add("activeItemStyle"),document.body.appendChild(this.activeItem)}updateGuiPositions(){if(this.loading){let t=this.radioControls.length,i=!1;for(let n=0;n<t;++n){if(!this.radioControls[n][3]){i=!0;break}let s=this.radioControls[n][0],o=this.radioControls[n][2].getBoundingClientRect(),a=o.width+this.buttonPadding*2,l=o.height+this.buttonPadding*2,c=o.top-this.buttonPadding,h=o.left-this.buttonPadding;s.style.width=a,s.style.height=l,s.style.top=c,s.style.left=h,this.radioControls[n][1].style.width=a,this.radioControls[n][1].style.height=l,this.radioControls[n][1].style.top=c,this.radioControls[n][1].style.left=h}this.loading=i}}togglGuiWindow(t=null,i=!1){t=="helpGui"?this.helpGuiToggle(i,!1):t=="infoGui"?this.infoGuiToggle(i,!1):t=="settingsGui"&&this.settingsGuiToggle(i,!1)}svgCheckClick(t=null,i=null){if(i)if(i=="close"){this.toggleGuiWindowContainer(null,!1,!0);return}else{if(i=="ft1")return;if(i=="ft2")return;if(i=="ft3"){this.toggleInviteUser();return}else{if(i=="ft4")return;if(i=="ft5"){this.pxlAutoCam.toggleAutoCam();return}}}}svgStylize(t=null,i=!1){if(!t)return;let n=t.path?t.path[1]:t.target.parentNode,s=n.getElementById("state");if(s){let o=i?"white":"none";s.setAttribute("fill",o)}let r=n.getElementById("hover");r&&r.setAttribute("fill",color)}renderQualitySettings(t){this.pxlQuality.percent=t,this.pxlQuality.screenResPerc=t*.75+.25,this.pxlQuality.mapAutoQualityUpdate(t,!0),this.pxlDevice.resizeRenderResolution()}pxlNavDataUpdate(){this.pxlNavData.active&&this.pxlTimer.msRunner.x>this.pxlNavData.fpsSet&&(this.pxlNavData.fpsSet=this.pxlTimer.msRunner.x+1,this.pxlNavData.fps.innerText=parseInt(1/this.pxlTimer.msRunner.y))}buildGuiWindowContainer(){let t=document.createElement("div");t.classList.id="guiWindowBackground",t.classList.add("guiWindowBackground"),t.classList.add("fader"),t.classList.add("visOff"),t.style.display="none";let i=this;t.onclick=n=>{i.toggleGuiWindowContainer(n,!1,!0)},this.guiWindowBG=t,document.body.appendChild(t)}toggleGuiWindowContainer(t,i,n=!1){if(t){let o=(t.path?t.path[0]:t.target).getAttribute("id");if(o!="guiWindowBackground"&&!["gui_helpGuiWindow","gui_helpContent","gui_infoGuiWindow","gui_infoContent","gui_settingsGuiWindow","gui_settingsContent"].includes(o))return null}let s=this.checkOpenWindows(n);this.guiWindowBG&&s==i&&this.promptFader(this.guiWindowBG,i,null,!1),i?this.pxlNavCanvas.blur():this.pxlNavCanvas.focus()}helpGuiBuild(){this.guiWindows.helpGui={},this.guiWindows.helpGui.gui=null,this.guiWindows.helpGui.active=!1;let t=document.createElement("div");t.id="gui_helpGuiWindow",t.classList.add("gui_helpGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="";i+=`
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
  `,t.innerHTML=i,[[this.guiRoot+"keyboard/asdw.svg","gui_helpGui_asdw","guiKeyDispSVG",!1],[this.guiRoot+"keyboard/udlr.svg","gui_helpGui_udlr","guiKeyDispSVG",!1],[this.guiRoot+"mouse/MouseOutlined.svg","gui_helpGui_MouseOutlined","guiMouseDispSVG",!1]].forEach(l=>{ft.svgButtonPromise(...l)});let s=this,r=document.getElementById("guiHelpBackButton");r.onclick=l=>{s.introHelpActive&&(s.introHelpActive=!1,s.pxlEnv.postHelpIntro()),s.svgCheckClick(l,"close")},Object.keys(this.textDescriptions).forEach(l=>{let c=this.textDescriptions[l];if(c){let h=c.text,u=c.pos,f=document.createElement("div");f.id="helpText_"+l,f.classList.add("helpTextDescriptionParent"),f.innerHTML=h,t.appendChild(f),this.textDescriptions[l].obj=f}});let a=document.getElementById("gui_helpGui_settingIcon");a&&this.hudIcons.settingsIcon&&(a.innerHTML=this.hudIcons.settingsIcon.svg.parentNode.innerHTML,a.style.position="relative",a.style.top="7.3px",a.style.width="30px",a.style.padding="2px",a.style.cursor="pointer",a.children[0].style.height="26px",a.onclick=()=>{s.iconEvent("click",null,"settings")}),this.guiWindows.helpGui.gui=t,setTimeout(()=>{this.resize()},50)}helpGuiToggle(t=null,i=!0){this.guiWindows.helpGui||this.helpGuiBuild(),t=t??!this.guiWindows.helpGui.active,this.guiWindows.helpGui.active=t,this.promptFader(this.guiWindows.helpGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t),this.introHelpActive&&!t&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro()),setTimeout(()=>{this.resetHelpTextPlacement()},20)}infoGuiBuild(){this.guiWindows.infoGui={},this.guiWindows.infoGui.gui=null,this.guiWindows.infoGui.active=!1;let t=document.createElement("div");t.id="gui_infoGuiWindow",t.classList.add("gui_infoGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="";i+=`
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
  `,t.innerHTML=i;let n=this,s=document.getElementById("guiInfoBackButton");s.onclick=r=>{n.svgCheckClick(r,"close")},this.guiWindows.infoGui.gui=t}infoGuiToggle(t=null,i=!0){this.guiWindows.infoGui||this.infoGuiBuild(),t=t??!this.guiWindows.infoGui.active,this.guiWindows.infoGui.active=t,this.promptFader(this.guiWindows.infoGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t),this.introHelpActive&&!t&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro())}applyCookies(){this.controlSettings&&(console.log(this.controlSettings),this.controlSettings=this.controlSettings),this.renderSettings&&(console.log(this.renderSettings),this.renderSettings=this.renderSettings)}settingsGuiBuild(){this.guiWindows.settingsGui={},this.guiWindows.settingsGui.gui=null,this.guiWindows.settingsGui.active=!1;let t=document.createElement("div");t.id="gui_settingsGuiWindow",t.classList.add("gui_settingsGuiParentStyle"),this.prepPromptFader(t),this.guiWindowBG.appendChild(t);let i="Default";i=i||"";let n=`
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
  `;t.innerHTML=n,this.guiWindows.settingsGui.gui=t;let s=this;this.qualitySlider=document.getElementById("SettingsGraphicsQualitySlider");let r=document.getElementById("guiSettingsBackButton");r.onclick=f=>{s.svgCheckClick(f,"close")},[[this.guiRoot+"settingsIcons/settings_user.svg","settings_user",["settings_icon_scale"],!1],[this.guiRoot+"settingsIcons/settings_left_right.svg","settings_left_right",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_mouse.svg","settings_mouse",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_graphics.svg","settings_graphics",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_render.svg","settings_render",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_fog.svg","settings_fog",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_bloom.svg","settings_bloom",["settingsIconStyle"],!1]].forEach(f=>{ft.svgButtonPromise(...f)});let a=document.getElementById("settings_usernameInput");a.onkeyup=f=>{s.keyUsernameSet(f)},a.onkeydown=f=>{s.keyDownUsernameSet(f)},this.guiWindows.settingsGui.usernameInput=a,document.getElementById("settings_sendUsername").addEventListener("click",()=>{s.sendUsernameUpdate(a)});let c=document.getElementById("settings_usernameResponseMessage");this.guiWindows.settingsGui.usernameReturn=c;let h,u;this.guiWindows.settingsGui.advObj=document.getElementById("gui_advancedSettings"),this.guiWindows.settingsGui.customObj=document.getElementById("settings_graphicsQuality_custom"),h=["settings_graphicsQuality_low","settings_graphicsQuality_med","settings_graphicsQuality_high","settings_graphicsQuality_custom"],u=h.length;for(let f=0;f<u;++f){let d=h[f],p=document.getElementById(d);this.setRadioStyle(p,f,u);let y=parseInt(p.value);p.addEventListener("change",v=>{s.pxlQuality.setQualityLevel(y),s.setRadioValues()})}h=["settings_render_25","settings_render_50","settings_render_75","settings_render_100"],u=h.length;for(let f=0;f<u;++f){let d=h[f],p=document.getElementById(d);this.setRadioStyle(p,f,u);let y=parseFloat(p.value);p.addEventListener("change",v=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({resolution:y}),s.pxlQuality.setQualityCookie(3)})}h=["settings_noRedFog","settings_cheapResFog","settings_highResFog"],u=h.length;for(let f=0;f<u;++f){let d=h[f],p=document.getElementById(d);this.setRadioStyle(p,f,u);let y=p.value;p.addEventListener("change",v=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({fog:y}),s.pxlQuality.setQualityCookie(3)})}h=["settings_noBloom","settings_bloomActive"],u=h.length;for(let f=0;f<u;++f){let d=h[f],p=document.getElementById(d);this.setRadioStyle(p,f,u);let y=p.value==1;p.addEventListener("change",v=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({bloom:y}),s.pxlQuality.setQualityCookie(3)})}h=["settings_tankTurning","settings_strafing"],u=h.length;for(let f=0;f<u;++f){let d=h[f],p=document.getElementById(d);this.setRadioStyle(p,f,u);let y=p.value==1;p.addEventListener("change",v=>{s.pxlQuality.setGraphicsSettings({leftRight:y},null)})}h=["settings_dragLooking","settings_pointLooking"],u=h.length;for(let f=0;f<u;++f){let d=h[f],p=document.getElementById(d);this.setRadioStyle(p,f,u);let y=p.value==1;p.addEventListener("change",v=>{s.pxlQuality.setGraphicsSettings({mouse:y},null)})}this.setRadioValues()}setRadioStyle(t,i,n){let s="settings_radio_label_mid";i==0?s="settings_radio_label_start":i==n-1&&(s="settings_radio_label_end"),t.parentNode.children[1].classList.add(s)}setRadioValues(){let t=this.pxlQuality.settings;Object.keys(t).forEach(n=>{let s=document.getElementById("settingsRadioBlock_"+n);if(s){let r=n=="resolution"?t[n]*4-1:~~t[n];s.children[r].children[0].checked=!0}})}settingsGuiAdvObjSizing(t=!0){let i=this.guiWindows.settingsGui.advObj,n=i.offsetHeight;i.style.maxHeight=(t?n:0)+"px",i.setAttribute("maxHeight",n)}settingsGuiToggle(t=null,i=!0){this.guiWindows.settingsGui||this.settingsGuiBuild(),t=t??!this.guiWindows.settingsGui.active,t&&this.guiWindows.settingsGui&&(this.guiWindows.settingsGui.usernameReturn.innerText=""),this.guiWindows.settingsGui.active=t,this.promptFader(this.guiWindows.settingsGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t),this.toggleHudBlock(t,!1),this.togglePxlNavDataDisplay(t),this.introHelpActive&&!t&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro())}togglePxlNavDataDisplay(t=null){t==null&&(this.guiWindows.settingsGui?t=this.guiWindows.settingsGui.active:t=!1),this.pxlNavData.active=t;let i=this.pxlNavData.height||200;this.pxlNavData.gui.style.maxHeight=t?i+"px":"0px",t||(this.pxlNavData.height=this.pxlNavData.gui.offsetHeight)}renderRadius(t){this.pxlEnv.mapGlowPass.strength=Number(t),this.pxlEnv.roomBloomPass.strength=Number(t)}renderThreshold(t){this.pxlEnv.mapGlowPass.threshold=Number(t),this.pxlEnv.roomBloomPass.threshold=Number(t)}renderGlowRadius(t){this.pxlEnv.mapGlowPass.radius=Number(t),this.pxlEnv.roomBloomPass.radius=Number(t)}renderResolution(t){this.pxlQuality.screenResPerc=t*.75+.25,this.pxlDevice.resizeRenderResolution()}inviteUserBuild(){this.guiWindows.inviteUserGui={},this.guiWindows.inviteUserGui.gui=null,this.guiWindows.inviteUserGui.active=!1;let t=document.createElement("div");t.id="gui_inviteUserWindow",t.classList.add("gui_inviteUserParentStyle"),this.prepPromptFader(t),document.body.appendChild(t);let i=window.location+"";console.log(i),i=i.replace(/^https?:\/\//,""),console.log(i);let n="";n+=`
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
  `,t.innerHTML=i;let n=this,s=document.getElementById("guiMobileWelcomeButton");s.onclick=r=>{n.toggleMobileWelcome(!1),n.pxlEnv.postHelpIntro()},this.guiWindows.mobileGui.gui=t}toggleMobileWelcome(t=null){this.guiWindows.mobileGui||this.buildMobileWelcome(),t=t??!this.guiWindows.mobileGui.active,this.guiWindows.mobileGui.active=t,this.promptFader(this.guiWindows.mobileGui.gui,t),this.toggleGuiWindowContainer(null,t),this.hudBlock.active&&this.toggleHudBlock(t)}ctaBuildPopup(t=""){this.ctaContentLoading||(this.googleDocHTML?this.ctaDisplayPopup():(this.ctaContentLoading=!0,this.pxlFile.getURLContent(this.ctaLocalDocURL.blmSupport).then(i=>{this.ctaContentLoading=!1,this.googleDocHTML=i,this.ctaDisplayPopup()})))}ctaDisplayPopup(){this.actionPopUp&&this.actionPopUp.parentNode.removeChild(this.actionPopUp);let t=this.googleDocHTML;this.actionPopUp=document.createElement("div"),this.actionPopUp.setAttribute("id","ctaPopup"),this.actionPopUp.classList.add("parentGoogleLinkDoc"),this.actionPopUp.classList.add("fader"),this.actionPopUp.classList.add("visOff");let i=document.createElement("div");i.setAttribute("id","ctaPopupInner"),this.actionPopUp.appendChild(i),document.body.appendChild(this.actionPopUp);let n=null;t==""||!t?(n=document.createElement("iframe"),n.src="",n.classList.add("iframeGoogleLinkDoc"),i.appendChild(n),n.referrerpolicy="unsafe-url"):(i.innerHTML=t,i.classList.add("iframeGoogleLinkDoc"));let s=this;this.actionPopUp.onclick=function(r){r.srcElement.getAttribute("id")=="ctaPopup"&&(s.promptFader(this,!1,null,!0),s.actionPopUp=null)},n?n.onload=function(){setTimeout(()=>{this.promptFader(this.actionPopUp,!0,null,!1)},100)}:setTimeout(()=>{this.promptFader(this.actionPopUp,!0,null,!1)},100)}getUserControls(t){if(!t)return[null];let i=t,n=i.userStatusGui,s=i.audio,r=i.audioMuted,o=i.userSoundGui,a=i.displayName,l=i.userNameGui,c=i.verse;return{curAvatar:i,curName:a,curAudio:s,curAudioMuted:r,curGui:n,curNameGui:l,curAudioGui:o,curVerse:c}}async setUserControlPosition(){if(this.userControlBlock){let t=0,i=0;if(this.hudTopBar){let n=this.hudTopBar.getBoundingClientRect();t=n.y+n.height}this.userControlBlock.gui.style.top=t+"px"}}buildUserSpeaker(){let t={},i=this.userControlBlock.speakerIcon.svg.cloneNode(!0);i.classList.add("userControlSpeakerStyle"),i.classList.add("userControlSpeakerButtonStyle"),t.gui=i,t.remoteMuted=!1,t.volPrev=0;let n=i.children;for(let r=0;r<n.length;++r){let o=n[r],a=o.getAttribute("id");t[a]=o,a=="mute"?o.classList.add("userControlVisStyle"):a=="button"&&o.classList.add("userControlSpeakerButtonStyle")}let s=t.volLines.children;for(let r=0;r<s.length;++r){let o=s[r],a=o.getAttribute("id");t[a]=o}s=t.remoteMutedLines.children;for(let r=0;r<s.length;++r){let o=s[r],a=o.getAttribute("id");t[a]=o}return t}async addUserControls(t,i=!1){let{curAvatar:n,curName:s,curGui:r}=this.getUserControls(t),o=document.createElement("div");o.classList.add("userControlProximityOff"),o.classList.add("userControlParentStyle"),o.classList.add("userControlSpeakerButtonStyle"),this.mobile&&(o.style.display="none");let a=this;o.onclick=()=>{a.setUserControlMute(t)},n.userStatusGui=o,this.userControlBlock.gui.appendChild(o);let l=document.createElement("div");l.classList.add("userControlInnerParentStyle"),o.appendChild(l);let c=document.createElement("div");c.classList.add("userControlSpeakerParentStyle");let h=this.buildUserSpeaker();c.appendChild(h.gui),n.userSoundGui=h,l.appendChild(c);let u=document.createElement("div");u.classList.add("userControlNameStyle"),u.innerText=s,n.userNameGui=u,l.appendChild(u),this.setUserControlColor(t)}async setUserControlVolume(t,i,n=!0){if(this.userControlBlock.activeList.includes(t)){let{curAudioGui:s,curAudioMuted:r}=this.getUserControls(t);s&&(!r||i==0)&&(s.remoteMuted?i=0:n&&i>0&&(i*=2,i=Math.min(1,Math.max(i,(i+s.volPrev)*.5))),s.volPrev=i,s.volLines.style.opacity=i,s.volLines.style.filter="alpha(opacity="+i*100+")")}}async setUserControlMute(t){let{curAvatar:i,curAudio:n,curAudioMuted:s,curAudioGui:r}=this.getUserControls(t);if(n){let o=!s;o?(this.setUserControlVolume(t,0,!1),r.mute.classList.add("userControlVisible"),n.volume=0,n.muted=!0):(r.mute.classList.remove("userControlVisible"),n.muted=!1,n.volume=1),i.audioMuted=o}}async setUserControlRemoteMute(t,i=null,n=!0,s="#ffffff"){let{curAudio:r,curAudioGui:o}=this.getUserControls(t);if(o){i==null&&(r?i=r.muted:i=!1);let a=typeof i=="object"?i.muted:i;o.remoteMuted=a,o.base.setAttribute("fill",a?"#ff0000":s),o.remoteMutedLines.style.display=a||!n?"inline-block":"none",o.remoteS1.setAttribute("stroke",n?"#ff0000":s),o.remoteS2.setAttribute("stroke",n?"#ff0000":s),this.setUserControlVolume(t,0,!1)}}async setUserControlVis(t,i=null,n=!1){let{curAvatar:s,curGui:r,curAudio:o}=this.getUserControls(t);if(r){let a="userControlProximityOff";if(i==null&&(i=!r.classList.contains(a)),i)r.classList.remove(a),r.style.maxWidth=r.children[0].getBoundingClientRect().width+"px",this.setUserControlVolume(t,0),this.userControlBlock.activeList.includes(t)||this.userControlBlock.activeList.push(t);else{r.classList.add(a),r.style.maxWidth="30px";let l=this.userControlBlock.activeList.indexOf(t);l>-1&&this.userControlBlock.activeList.splice(l,1)}this.userControlBlock.gui.style.padding=this.userControlBlock.activeList.length==0?"0px":"5px"}}async deleteUserControlVis(t){let{curAvatar:i,curGui:n}=this.getUserControls(t);if(n){n.classList.add("userControlProximityOff"),n.style.maxWidth="30px";let r=this.userControlBlock.activeList.indexOf(t);r>-1&&this.userControlBlock.activeList.splice(r,1),this.userControlBlock.gui.style.padding=this.userControlBlock.activeList.length==0?"0px":"5px",n&&n.parentNode.removeChild(n)}}userControlsSwap(t,i){let n=this.userControlBlock.activeList.indexOf(t);n>-1&&(this.userControlBlock.activeList.splice(n,1),this.userControlBlock.activeList.includes(i)||this.userControlBlock.activeList.push(i))}setUserControlColor(t,i=null){let{curAvatar:n,curGui:s,curAudioGui:r,curVerse:o}=this.getUserControls(t),a=!0;if(i==null)if(a)i="#ffffff";else{let c=this.pxlUtils.stringToRgb(o,.3);i=this.pxlUtils.rgbToHex(...c)}s.style.color=i,r.base.setAttribute("fill",i),r.mute.setAttribute("stroke",i),r.mid.setAttribute("fill",i),r.max.setAttribute("fill",i),r.volPrev=0,r.volLines.style.opacity=0,r.volLines.style.filter="alpha(opacity=0)";let l=this;n.userStatusGui.onclick=()=>{l.setUserControlMute(t)},this.setUserControlRemoteMute(t,null,a,i)}toggleUserControls(t){if(!t)return null}};var el=class{constructor(t,i){this.active=!1,this.name="GLSL Editor",this.type="shaderGui",this.pxlCore=t,this.pxlEnv=t.pxlEnv,this.guiManager=i,this.parent=null,this.gui=null,this.helpGui=null,this.shaderEditorDisplay=null,this.children={},this.uniformsObj=null,this.vertObj=null,this.fragObj=null,this.currentShader=null,this.shaderSliderValues=new dt,this.editorWidthMinMax={min:30,max:70}}addSlider(t,i,n,s,r,o,a,l){typeof t=="string"&&(t=document.getElementById(t));let c=document.createElement("div");c.style.display="grid",c.style.gridAutoFlow="column",c.style.alignItems="center",c.style.gridAutoColumns="max-content auto max-content",c.innerHTML="<div class='input_sliderLabel'>"+i+" : </div>";let h=document.createElement("input");h.type="range",h.classList.add("input_sliderRange"),h.min=s,h.max=r,h.step=o,h.value=n,c.appendChild(h);let u=document.createElement("input");u.type="number",u.classList.add("gui_defaultInput"),u.classList.add("input_numberInput"),u.value=n,c.appendChild(u),u.onchange=f=>{h.value=f.target.value},h.onchange=f=>{u.value=f.target.value,a(f.target.value,...l)},h.oninput=f=>{u.value=f.target.value,a(f.target.value,...l)},t.appendChild(c)}updateShaderTextFields(t=null){let i,n="shaderGui";t||(t=this.pxlEnv.currentRoom==this.pxlEnv.mainRoom?this.currentShader:this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getCurrentShader());try{i=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].readShader(t,this.shaderSliderValues)}catch{return}let s,r,o;s=r=o="Unable To Load";try{i.uniforms.sliders={type:"v",value:this.shaderSliderValues},s=JSON.stringify(i.uniforms),r=i.vertexShader,o=i.fragmentShader,s="";for(let a in i.uniforms){let l="float",c={t:"sampler2D",b:"bool",i:"int",f:"float",v:"vec",c:"vec"};if(l=typeof i.uniforms[a].value,l=="object"){if(l="",!i.uniforms[a].value)continue;"image"in i.uniforms[a].value?l="sampler2D":l=l+"vec"+Object.keys(i.uniforms[a].value).length}else c.hasOwnProperty(i.uniforms[a].type)&&(l=i.uniforms[a].type=="i"?"i":""),c.hasOwnProperty(i.uniforms[a].type)&&(l=c[i.uniforms[a].type]);s+=`uniform ${l} ${a};   `}r=r.replace(/[\t]/g,"  "),o=o.replace(/[\t]/g,"  ")}catch(a){console.log("Error Reading Shader"),console.log(a)}i&&(i.needsUpdate=!0,this.children.uniformsObj.value=s,this.children.vertObj.value=r,this.children.fragObj.value=o)}buildShaderEditor(){let t="shaderGui",i=document.createElement("div");i.id="guiShaderEditorBlock",i.classList.add("gui_shaderEditorBlockStyle"),i.style.transition="max-width .5s ease, opacity .8s, filter .8s",this.pxlEnv.pxlGuiDraws.prepPromptFader(i),this.pxlEnv.pxlGuiDraws.guiWindows[t]={},this.pxlEnv.pxlGuiDraws.guiWindows[t].gui=i,this.pxlEnv.pxlGuiDraws.guiWindows[t].active=!1,this.gui=i;let n=document.createElement("div");n.id="guiShaderHelpBlock",n.classList.add("gui_shaderHelpBlockStyle"),n.style.transition="left .3s ease, opacity .8s, filter .8s",this.pxlEnv.pxlGuiDraws.prepPromptFader(n),this.pxlEnv.pxlGuiDraws.guiWindows[t].help=n,this.helpGui=n;let s=this.pxlEnv.currentRoom,r=this.pxlEnv.roomSceneList[s].geoList,o=Object.keys(r),a="";o.forEach(E=>{if(["Mesh","Points"].includes(r[E].type)&&r[E].material.type=="ShaderMaterial"){let M=E.substring(0,1).toUpperCase()+E.substring(1,E.length);a+="<option value='geo_"+E+"'>"+M+"</option>"}});let l="",c="selected";this.pxlEnv.pxlGuiDraws.guiWindows[t].currentShader="script_fog";let h=`
    <div id="gui_shaderEditorParent" class="gui_shaderEditorParentStyle">
      <div class="gui_shaderEditorHeaderBlock">
      <div class="gui_shaderEditorOptionBlock">
        <div class="gui_shaderEditorTitleBlock">
        <div class="gui_shaderEditorTitleParent">
            <div id="gui_shaderEditorTitle" clsss="gui_shaderEditorTitleStyle">GLSL Shader Editor</div>
            <div id="gui_shaderEditorHeaderList" clsss="gui_shaderEditorHeaderListStyle">
              <label for="shaderEditor_loadShader" style="font-size:.75em;">Edit Shader</label>
              <select name="shaderEditor_loadShader" id="shaderEditor_loadShader" class="pickerStyle gui_shaderPickerStyle">
                <option value="script_avatar" ${l}>Avatar</option>
                <option value="script_fog" ${c}>Fog</option>
                <option value="script_dArrows">Direction Arrows</option>
                <option value="script_userScreens">User Screens</option>
                <option value="script_warpZonePortals">Warp Zone Portals</option>
                <option value="script_lizardking">Item; Lizard King</option>
                <option value="script_majorTom">Item; Major Tom</option>
                <option value="script_fractalSubstrate">Item; Fractal Substrate</option>
                <option value="script_fractalEcho">Item; Fractal Echo Pass</option>
                ${a}
              </select>
            </div>
            <div id="gui_shaderEditorFontSize" clsss="gui_shaderEditorFontSizeStyle">
              <span  style="font-size:.75em;margin-right:5px;">Font Size</span>
              <span id="gui_shaderEditorFontSmaller" class="shaderEditor_settingsButton">-</span>
              <span id="gui_shaderEditorFontLarger" class="shaderEditor_settingsButton">+</span>
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
    `,u="<div class='gui_shaderHelpSpacerStyle'></div>";h+=`
    <div id="gui_shaderHelpBlock" class="gui_shaderHelpBlockStyle">
      <div class="gui_shaderHelpTitle">:: Keyboard Shortcuts ::</div>
      ${u}
      <span><span class="gui_boldText">Ctrl + Enter</span><br> - Update Shader on Material</span>
      <br>&nbsp;&nbsp;<span>Returns use existing indent type (Spaces or Tabs)</span>
      ${u}
      <span><span class="gui_boldText">Ctrl + D</span><br> - Duplicate current line</span>
      ${u}
      <span><span class="gui_boldText">Ctrl + K</span><br> - Comment current/selected lines</span>
      ${u}
      <span><span class="gui_boldText">Ctrl + Shift + K</span><br> - Uncomment current/selected lines</span>
      ${u}
      <span><span class="gui_boldText">Ctrl + NumPad {1,2,3}</span><br> - Add selection or '.0' into float(), vec2(), vec3() </span>
      ${u}
      <span><span class="gui_boldText">Ctrl + {Up,Down,Left,Right}</span><br> - Searches for current selection in direction</span>
      ${u}
      <span><span class="gui_boldText">Y</span><br> - To close the Shader Editor</span>
      ${u}
    </div>
    `,i.innerHTML=h,document.body.appendChild(i);let f=document.getElementById("guiShaderUserSliders");this.parentObj=f;let d=this.shaderSliderValues,p=(E,...M)=>{d[M[0]]=E};this.addSlider(f,"sliders.x",0,-1,1,.01,p,["x"]),this.addSlider(f,"sliders.y",0,-5,5,.1,p,["y"]),this.addSlider(f,"sliders.z",0,-10,10,.1,p,["z"]),this.children.shaderSliders=f,this.children.shaderParentObj=document.getElementById("shaderEditor_uniformInput").parentNode,this.children.shaderEditor=document.getElementById("gui_shaderEditorParent"),this.children.titleObj=document.getElementById("gui_shaderEditorTitle"),this.children.uniformsObj=document.getElementById("shaderEditor_uniformInput"),this.children.vertObj=document.getElementById("shaderEditor_vertInput"),this.children.fragObj=document.getElementById("shaderEditor_fragInput"),this.children.updateObj=document.getElementById("shader_updateShader"),this.children.helpDiv=document.getElementById("gui_shaderHelpBlock"),this.children.shaderList=document.getElementById("gui_shaderEditorHeaderList"),this.children.shaderFieldParent=document.getElementById("guiShaderFieldParent"),this.shaderEditorDisplay=document.getElementById("shaderEditorDisplay"),this.children.shaderSelect=document.getElementById("shaderEditor_loadShader");let y=document.getElementById("gui_shaderEditorFontSize");y.style.justifySelf="end",y.style.marginTop="2px",y.style.marginRight="3px",y.style.userSelect="none",y.style.display="flex",y.style.alignItems="center";let v=this;this.children.shaderSelect.onchange=E=>{v.updateShaderTextFields(this.children.shaderSelect.value)};let m=document.getElementById("gui_shaderEditorFontSmaller");m.onclick=E=>{v.shiftFontSize(-.25)};let g=document.getElementById("gui_shaderEditorFontLarger");g.onclick=E=>{v.shiftFontSize(.25)},this.children.updateObj.addEventListener("click",()=>{let M=document.getElementById("shaderEditor_uniformInput").value,C=document.getElementById("shaderEditor_vertInput"),L=C.value,B=document.getElementById("shaderEditor_fragInput"),G=B.value,O=document.createElement("div");O.innerHTML=M,M=O.innerText,O.innerHTML=L,L=O.innerText,O.innerHTML=G,G=O.innerText,v.pxlEnv.roomSceneList[v.pxlEnv.currentRoom].setShader(M,L,G),C.blur(),B.blur(),v.guiManager.pxlNavCanvas.focus()}),this.children.vertObj.onfocus=E=>{v.focusShaderMessage(E,"vertObj")},this.children.vertObj.onkeydown=E=>{v.keyShaderMessage(E)},this.children.vertObj.onmousedown=E=>{v.mDownShaderMessage(E)},this.children.vertObj.onclick=E=>{v.clickShaderMessage(E)},this.children.vertObj.ondblclick=E=>{v.dblclickShaderMessage(E)},this.children.fragObj.onfocus=E=>{v.focusShaderMessage(E,"fragObj")},this.children.fragObj.onkeydown=E=>{v.keyShaderMessage(E)},this.children.fragObj.onmousedown=E=>{v.mDownShaderMessage(E)},this.children.fragObj.onclick=E=>{v.clickShaderMessage(E)},this.children.fragObj.ondblclick=E=>{v.dblclickShaderMessage(E)},this.mouseX=0,this.mouseY=0,this.prevSelectStart=0,this.prevSelectEnd=0}shiftFontSize(t){let i=document.getElementById("gui_shaderEditorParent");if(!i)return;i.hasAttribute("styleStore")||i.setAttribute("styleStore",1);let r=parseFloat(i.getAttribute("styleStore"))+t;i.setAttribute("styleStore",r),i.style.fontSize=r+"em";let o=document.getElementById("shaderEditor_uniformInput");o&&(o.style.fontSize=r+"em");let a=document.getElementById("shaderEditor_vertInput");a&&(a.style.fontSize=r+"em");let l=document.getElementById("shaderEditor_fragInput");l&&(l.style.fontSize=r+"em"),this.resizeShaderElements()}mDownShaderMessage(t){this.mouseX=t.x,this.mouseY=t.y}clickShaderMessage(t){if(!this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive){let i=Math.abs(this.mouseX-t.x),n=Math.abs(this.mouseY-t.y);if(Math.max(i,n)<5){let r=t.target,o=r.selectionStart,a=r.selectionEnd,l=parseInt((o+a)*.5);o!=a&&(this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectStart=o,this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectEnd=a)}}}dblclickShaderMessage(t){let i=this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectStart,n=this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectEnd,s=t.target,r=s.selectionStart,o=s.selectionEnd,l=s.value.substring(i,n+20),c=l.match(/[a-zA-Z0-9\.\_\[\]]+/);c&&!l[0].match(/\n/)&&(n=i+c[0].length),s.setSelectionRange(i,n),this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive=!0,setTimeout(()=>{this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive=!1},500)}keyShaderMessage(t){if(t.repeat)return!1;let i=t.key,n=t.code,s=t.shiftKey,r=t.ctrlKey,o=t.altKey,a=n.includes("Numpad");if(!(i=="Enter"||i=="Tab"||n=="KeyD"&&r||n=="KeyK"&&r||a&&r||n.includes("Arrow")&&r))return!1;t.preventDefault();let c=t.target;if(n=="NumpadAdd"){let v=window.getComputedStyle(c),m=parseFloat(v.fontSize)+2;return c.style.fontSize=m,!1}if(n=="NumpadSubtract"){let v=window.getComputedStyle(c),m=parseFloat(v.fontSize)-2;return c.style.fontSize=m,!1}let h=c.selectionStart,u=c.selectionEnd,f=c.value;if(n.includes("Arrow")){if(h==u)return!1;let v=f.substring(h,u),m,g,E;if(n=="ArrowUp"?(g=f.substring(0,h),h=g.search(/.*$/),n="ArrowLeft"):n=="ArrowDown"&&(g=f.substring(u,f.length),u=g.search(/\n/)+u,n="ArrowRight"),n=="ArrowLeft"){m=new RegExp(v+".*","gm"),g=f.substring(0,h);let M=[...g.matchAll(v,"g")];if(M.length==0&&(M=[...f.matchAll(v,"g")],M.length==0))return!1;E=M.pop().index}if(n=="ArrowRight"){m=new RegExp(v,"m"),g=f.substring(u,f.length);let M=m.exec(g);if(M)E=M.index+u;else{if(M=m.exec(f),!M)return!1;E=M.index}}if(E>-1){let M=E+v.length;c.setSelectionRange(E,M);let C=c.getBoundingClientRect(),B=window.getComputedStyle(c).font,G=[f.slice(0,E),"<span id='tmpShaderPosition'>.</span>",f.slice(E)].join("");G=G.replace(/(?:\r\n|\r|\n)/g,"<br>");let O=document.createElement("div");O.style.position="fixed",O.style.width=C.width,O.style.height=C.height,O.style.overflowY="scroll",O.style.font=B,O.innerHTML=G,document.body.appendChild(O);let b=O.querySelector("#tmpShaderPosition").offsetTop-200;document.body.removeChild(O),c.scrollTo(0,b)}return!1}if(i=="Enter"&&r)return this.children.updateObj.click(),c.focus(),c.setSelectionRange(h,u),!1;if(a){let m=f.substring(h,u),g=m.length>0,E=f.substr(h-1,1);E=/[\w|\d]/.test(E)&&m.length==0?" ":"";let M=f.substr(u+1,1);M=/[\w|\d]/.test(M)&&m.length==0?" ":"";let C=h+E.length;if(n=="Numpad1"){let L="float(";C+=L.length,m=g?m:".0",m=L+m+")"}else if(n=="Numpad2"){let L="vec2(";C+=L.length,m=g?m:".0, .0",m=L+m+")"}else if(n=="Numpad3"){let L="vec3(";C+=L.length,m=g?m:".0, .0, .0",m=L+m+")"}return m=E+m+M,document.execCommand("insertText",!1,m),g||c.setSelectionRange(C,C),!1}let d=Math.min(h,u),p=f.substr(0,d);if(n=="KeyK"){let v=!1,m=!1,g=[],E,M,C;if(h!=u&&(E=p.search(/.*$/),M=u,C=f.substring(E,u),v=/\n/.test(C)),!v){let L=p.search(/[\S\w].*$/),B=!1;if(L==-1){if(L=f.substring(d,f.length).search(/(?:[^\s])/),L==-1)return!1;L+=d,B=!0}let G=L,O=G,x="";if(s){if(O+=2,f.substr(G,2)!="//")return!1;h-=2,u-=2}else{if(f.substr(G,2)=="//")return!1;x="//",h+=2,u+=2}return c.setSelectionRange(G,O),document.execCommand("insertText",!1,x),c.setSelectionRange(h,u),!1}if(v){let L=f.substring(M,f.length),B=M+L.search(/\n./),G=f.substring(E,B),O=s?-2:2,x=[...G.matchAll(/[\S\w].*/g)],b=[],w=h-E,S=M-E;return x.forEach(_=>{let T=_.index;b.push(T)}),b=b.reverse(),b.forEach(_=>{let T=G.substr(_,2);if(s){if(T!="//")return;G=G.substring(0,_)+G.substring(_+2,G.length)}else{if(T=="//")return;G=G.substring(0,_)+"//"+G.substring(_,G.length)}h+=_<w?O:0,u+=_<S?O:0}),c.setSelectionRange(E,B),document.execCommand("insertText",!1,G),c.setSelectionRange(h,u),!1}return!1}let y=p.split(`
`);if(i=="Enter"||i=="Tab"){let v=y.pop();v.length==0&&(v=y.pop());let m=v.replace(/[\S\w].*$/g,"");i=="Tab"?(m=m.length==0?" ":m.substr(0,1),m===" "?m="  ":m="	"):m=`
`+m;let g=m,E=h,M=u;if(i=="Tab"&&h!=u){let C=f.substring(h,u);C=C.split(`
`),s?C=C.map(L=>L==""?L:L.replace(m,"")):C=C.map(L=>L==""?L:m+L),g=C.join(`
`),M=E+g.length}else E=E+g.length,M=E;return document.execCommand("insertText",!1,g),c.setSelectionRange(E,M),!1}if(n=="KeyD"&&r)if(h==u){let v=f.split(`
`);y.pop();let m=y.length,g=v[m],C=[...y,g].join(`
`).length;g=`
`+g,c.setSelectionRange(C,C),document.execCommand("insertText",!1,g),C=d+g.length,c.setSelectionRange(C,C)}else{let v=f.substring(h,u);c.setSelectionRange(u,u),document.execCommand("insertText",!1,v),u+=v.length,c.setSelectionRange(u,u)}return!1}toggleShaderEditor(t=null){this.gui||this.buildShaderEditor(),this.updateShaderList(),this.updateShaderTextFields(this.children.shaderSelect.value),t=t??!this.active,this.active=t,this.guiManager.promptFader(this.gui,t),this.guiManager.promptFader(this.helpGui,t),this.pxlEnv.emit("shaderEditorVis",t),t?this.guiManager.pxlNavCanvas.addEventListener("mousedown",this.blurShaderEditor.bind(this)):this.guiManager.pxlNavCanvas.removeEventListener("mousedown",this.blurShaderEditor.bind(this)),setTimeout(()=>{this.resizeShaderElements()},10)}updateShaderList(){let t=this.children.shaderSelect;if(!t){console.log("No pulldown"),console.log(this.gui);return}let i=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getShaderList(),n="inline-block";if(i){let s=Object.keys(i),r="",o=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getCurrentShader();s.forEach(a=>{let l=a==o?" selected":"";r+=`<option value="${a}" ${l}>${i[a]}</option>`}),t.innerHTML=r}else n="none";this.children.shaderList.style.display=n}blurShaderEditor(){document.activeElement.blur();let t=document.getElementById("guiShaderEditorBlock");t.style.maxWidth=this.editorWidthMinMax.min+"vw";let i=document.getElementById("gui_shaderHelpBlock");i&&(i.style.left="max("+this.editorWidthMinMax.min+"vw, 430px)");let n=document.getElementById("shaderEditor_loadShader");n&&(n.style.maxWidth="85px")}resizeShaderElements(){let t=0;if(this.hudBottomBar&&(t=this.hudBottomBar.offsetHeight),this.gui){this.gui.style.height=this.guiManager.sH-t;let i=this.children.vertObj.getBoundingClientRect().top,n=this.children.updateObj.getBoundingClientRect().height;n+=40;let s=this.guiManager.sH-n-i;this.children.vertObj.style.maxHeight=s*.4+"px",this.children.vertObj.displayHeight=s*.4,this.children.fragObj.style.maxHeight=s*.6+"px",this.children.fragObj.displayHeight=s*.6,this.children.fieldBodyHeight=s}}focusShaderMessage(t,i){let n=this.children,s=n.vertObj.displayHeight,r=n.fragObj.displayHeight,o=Math.max(150,this.guiManager.sH*.135),a=n.fieldBodyHeight-o;s=i=="vertObj"?a:o,r=i=="fragObj"?a:o,n.vertObj.style.maxHeight=s+"px",n.fragObj.style.maxHeight=r+"px";let l=document.getElementById("gui_shaderEditorParent");this.gui.style.maxWidth=this.editorWidthMinMax.max+"vw",this.children?.shaderSelect&&(this.children.shaderSelect.style.maxWidth="225px");let c=document.getElementById("gui_shaderHelpBlock");c&&(c.style.left=this.editorWidthMinMax.max+"vw")}};var go=class extends $a{constructor(t,i="Metal-Asylum",n="images/assets/",s="images/GUI/"){super(t,i,n,s),this.verbose=t,this.lableBoxSize=40,this.optionWidthRound=10,this.optionWidthAdd=25,this.deviceOptionHeight=[0,300],this.ShaderEditor=null,this.pxlLoaderTotal=5,this.hudVisibility=!0,this.camChoicesActive=!1,this.micChoicesActive=!1,this.textDescriptions={chatIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat',pos:[1,-1.5]},multiverseIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection',pos:[0,-1.3]},djPlayerVolumeParent:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume',pos:[0,-1.5]},speakerIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output',pos:[0,-1.5]},micIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input',pos:[0,-1.5]},camIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input',pos:[0,-1.5]},helpIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions',pos:[0,-1.5]},infoIconParent:{text:'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>',pos:[-1,0],offset:[-10,0]},settingsIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation',pos:[0,-1.5]},muteAllIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users',pos:[1,0]},fullScreenIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen',pos:[-1,0]},videoQualityIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings',pos:[-1,0]},statsIcon:{text:"jitsi connection status; toggle connection ",pos:[1,0]},usersIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools',pos:[1,0]},ft2Button:{text:"Environment",pos:[-1,0],offset:[-10,0]},ft3Button:{text:"Invite Friends",pos:[-1,0],offset:[-10,0]},hud_userCount:{text:"# of People",pos:[-1,0],offset:[-10,0]}},this.activeItem=null,this.actionPopUp=null,this.init()}setDependencies(t){this.ShaderEditor=new el(t,this)}init(){super.init()}booted(){super.booted()}step(){super.step()}toggleShaderEditor(){this.ShaderEditor.toggleShaderEditor()}};var vo=class{constructor(){this.pxlAudio=null,this.pxlTimer=null,this.pxlAutoCam=null,this.pxlEnv=null,this.pxlUser=null,this.pxlUtils=null,this.pxlDevice=null,this.pxlGuiDraws=null,this.pxlQuality=null,this.socket=null,this.camera=null,this.HDRView=!1,this.objRaycast=new qa,this.camUpdated=!0,this.cameraBooted=!1,this.userScale=5.5,this.cameraEasing=[.65,.45],this.standingHeight=1,this.standingHeightGravInfluence=0,this.standingMaxGravityOffset=.5,this.maxStepHeight=.6,this.walkBounce=0,this.walkBounceSeed=230,this.walkBouncePerc=0,this.posRotEasingThreshold=.01,this.cameraMovement=[0,0],this.cameraMovementEase=.8,this.cameraMoveLength=0,this.cameraMoveLengthMult=.2,this.camPosBlend=.55,this.camRotXYZ=new P(0,0,0),this.camRotPitch=new N(0,0),this.cameraJumpActive=!1,this.cameraAllowJump=!0,this.cameraJumpHeight=0,this.cameraJumpInitImpulse=[.06,.15],this.cameraJumpImpulse=0,this.cameraJumpImpulseEaseOut=.8,this.cameraMaxJumpHold=[.6,3],this.cameraJumpInAir=!1,this.floorColliderInitialHit=!1,this.colliderValidityChecked=!0,this.nearestFloorHit=new P(0,0,0),this.nearestFloorObjName=null,this.nearestFloorHitPrev=new P(0,0,0),this.nearestFloorObjNamePrev=null,this.objectJumpLock=!1,this.gravityActive=!1,this.gravitySourceActive=!1,this.gravityDirection=new P(0,-1,0),this.gravityEaseOutRate=.8,this.jump=0,this.runMain=!0,this.workerActive=!1,this.worker=null,this.workerTransfers=!1,this.workerMessage=()=>{},this.workerFunc=()=>{},this.deviceKey=()=>{},this.portalList={},this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarpZone=[],this.colliderCurObjHit=null,this.colliderPrevObjHit=null,this.colliderValid=!1,this.colliderFail=!1,this.warpActive=!1,this.warpType=0,this.warpObj=null,this.warpTarget=null,this.hotKeyTriggered=!1,this.eventCheckStatus=!1,this.proximityScaleTrigger=!1,this.colliderShiftActive=!0,this.colliderAdjustPerc=0,this.colliderAdjustRate=.02,this.gyroGravity=[0,0,0],this.cameraPose={alpha:null,beta:null,gamma:null,alphaOffset:0,betaOffset:0,gammaOffset:0,orientation:window.orientation||0,pos:[0,0,0],posOffset:[0,0,0],rx:()=>this.beta,ry:()=>this.alpha,rz:()=>this.gamma,accelZeroed:[0,0,0],accelCalibration:10,accelCalDiv:1/10,accelCalCount:0,accelTotal:[0,0,0],accelPrev:null,accelDelta:[0,0,0],accelClearDelta:()=>{this.accelDelta=[0,0,0]}},this.uniformScalars={curExp:1,darkBase:.1,brightBase:.5,exposureUniformBase:1},this.cameraPosLookAtNames={default:{pos:"Position",lookAt:"LookAt"},mobile:{pos:"PositionMobile",lookAt:"LookAtMobile"},vr:{pos:"PositionVR",lookAt:"LookAtVR"}},this.cameraPos=new P(0,0,0),this.cameraPrevPos=new P(0,0,0),this.cameraPrevLookAt=new P(0,0,0),this.cameraAim=new P(0,0,1),this.cameraAimTarget=new P(0,0,0),this.cameraCross=new P(1,0,0),this.lookAtTargetActive=new P(0,0,0),this.lookAtPerc=new N(1,0),this.lookAtLockPerc=0,this.lookAtLockFader=0,this.lookAtLockFadeRate=.01,this.prevQuaternion=new Ie,this.pi=3.14159265358979,this.init()}setDependencies(t){this.pxlAudio=t.pxlAudio,this.pxlTimer=t.pxlTimer,this.pxlAutoCam=t.pxlAutoCam,this.pxlEnv=t.pxlEnv,this.pxlUser=t.pxlUser,this.pxlUtils=t.pxlUtils,this.pxlDevice=t.pxlDevice,this.pxlGuiDraws=t.pxlGuiDraws,this.pxlQuality=t.pxlQuality,this.socket=t.socket}init(){var t}updateMainValues(t){let{gravityRate:i,standingHeightGravInfluence:n,cameraJumpImpulse:s}=t;i!=null&&(this.pxlUser.gravityRate=i),n!=null&&(this.standingHeightGravInfluence=n),s!=null&&(this.cameraJumpImpulse+=s),this.camUpdated=!0}step(){this.pxlDevice.directionKeyDown&&this.updateMovement(this.pxlTimer.prevMS),this.runMain&&(this.gravityActive&&this.cameraJumpActive?this.camJump(this.pxlTimer.prevMS):this.cameraJumpImpulse>0&&this.killJumpImpulse()),this.camUpdated=this.camUpdated||this.cameraMovement[0]!=0||this.cameraMovement[1]||this.gravityActive||this.pxlDevice.cursorLockActive,this.updateCamera(),this.lowQualityUpdates(),this.midQualityUpdates(),this.eventCheck()}eventCheck(){this.colliderValid&&this.eventCheckStatus&&this.eventTrigger(this.nearestFloorObjName)&&this.warpEventTriggered(1,this.nearestFloorObjName)}updateDeviceValues(t){if(!this.pxlQuality.settings.leftRight){let i=-this.cameraMovement[0];this.pxlDevice.touchMouseData.active||(this.pxlDevice.touchMouseData.velocity.x+=i),this.pxlDevice.touchMouseData.netDistance.x+=i*4}if(this.pxlDevice.touchMouseData.velocity!=null&&this.pxlDevice.mobile==0){if(t<this.posRotEasingThreshold)this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);else{let i=this.cameraEasing[this.pxlDevice.mobile?1:0];this.pxlDevice.touchMouseData.velocity.multiplyScalar(i)}this.pxlDevice.touchMouseData.netDistance.add(this.pxlDevice.touchMouseData.velocity.clone().multiply(this.pxlDevice.touchMouseData.moveMult))}}buildDeviceMonitors(){let t=this}updateCameraMatrices(){this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.camera.updateWorldMatrix()}resetCameraCalculations(t){this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0),this.pxlDevice.touchMouseData.netDistance.set(0,0),this.camera.position.copy(t),this.updateCameraMatrices(),this.cameraPos.copy(t),this.cameraPrevPos.copy(t),this.colliderCurObjHit=null,this.colliderPrevObjHit=null,this.camUpdated=!0}setFOV(t){this.camera.fov=t,this.camera.updateProjectionMatrix(),this.camUpdated=!0}setStats(t,i,n,s){this.camera.near=n,this.camera.far=s,this.setFOV(t)}setTransform(t,i=null){this.resetCameraCalculations(t),i&&(this.cameraAimTarget.position.copy(i),this.camera.lookAt(i),this.cameraPrevLookAt.copy(i),this.updateCameraMatrices(),this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone()),this.resetGravity(),this.camUpdated=!0}setToObj(t,i=null){if(this.resetCameraCalculations(t.position),i){let n=i.position.clone();this.cameraAimTarget.position.copy(n),this.camera.lookAt(n),this.cameraPrevLookAt.copy(n),this.updateCameraMatrices(),this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone()}else this.pxlDevice.touchMouseData.initialQuat=t.quaternion.clone(),this.camera.setRotationFromQuaternion(this.pxlDevice.touchMouseData.initialQuat),this.updateCameraMatrices();this.resetGravity(),this.camUpdated=!0,this.mainColliderCheck(t.position,null),this.nearestFloorObjName=null}warpToRoom(t,i=!1,n=null){this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].stop();let s=this.pxlEnv.currentRoom,r=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].camHoldWarpPos;this.pxlEnv.currentRoom=t,this.pxlAutoCam.curRoom=t;let o=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom],a=t==this.pxlEnv.mainRoom;if(this.pxlUser.iZoom){let c=a?this.pxlEnv.roomComposer:this.pxlEnv.mapComposer,h=a?this.pxlEnv.mapComposer:this.pxlEnv.roomComposer;this.pxlEnv.delayPass.uniforms.tDiffusePrev.value=c.renderTarget1.texture,this.pxlEnv.delayPass.uniforms.tDiffusePrevRoom.value=h.renderTarget1.texture,setTimeout(()=>{s!=t&&(a?this.pxlEnv.roomComposer.reset():this.pxlEnv.mapComposer.reset()),setTimeout(()=>{this.pxlEnv.mapComposerWarpPass.needsSwap=!1},500)},100)}if(i)if(t!=s&&o.start(),this.pxlEnv.roomRenderPass.scene=o.scene,o.camLocation.hasOwnProperty(n)){let c=this.cameraPosLookAtNames.default.pos,h=this.cameraPosLookAtNames.default.lookAt;this.pxlDevice.mobile&&(o.camLocation[n].hasOwnProperty(this.cameraPosLookAtNames.mobile.pos)&&(c=this.cameraPosLookAtNames.mobile.pos),o.camLocation[n].hasOwnProperty(this.cameraPosLookAtNames.mobile.lookAt)&&(h=this.cameraPosLookAtNames.mobile.lookAt));let u=o.camLocation[n][c],f=o.camLocation[n][h];this.setTransform(u,f)}else o.camInitPos&&o.camInitLookAt&&(!r||!this.pxlEnv.postIntro||this.hotKeyTriggered)&&(this.setTransform(o.camInitPos,o.camInitLookAt),this.hotKeyTriggered=!1);else(!r||!this.pxlEnv.postIntro||this.hotKeyTriggered)&&(n!=null?this.setToObj(n):this.setTransform(o.camReturnPos,o.camReturnLookAt),this.hotKeyTriggered=!1);this.pxlGuiDraws.prepArtistInfo(o.getArtistInfo()),this.camUpdated=!0,this.camera.fov=o.pxlCamFOV,this.camera.zoom=o.pxlCamZoom,this.camera.aspect=o.pxlCamAspect,this.camera.near=o.pxlCamNearClipping,this.camera.far=o.pxlCamFarClipping,this.camera.updateProjectionMatrix();let l=this.getUserHeight();this.emitCameraTransforms(this.camera.position.clone(),l,!0),this.pxlAutoCam.checkStatus()}warpToRoomSnapshot(t){this.pxlEnv.currentRoom=t;let i=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];this.camera.fov=i.pxlCamFOV,this.camera.zoom=i.pxlCamZoom,this.camera.aspect=i.pxlCamAspect,this.camera.near=i.pxlCamNearClipping,this.camera.far=i.pxlCamFarClipping,this.camera.updateProjectionMatrix(),this.setTransform(i.camThumbPos,i.camThumbLookAt);let n=this.getUserHeight();this.emitCameraTransforms(this.camera.position.clone(),n,!0)}fastTravel(t=0){this.pxlAutoCam.enabled||((this.pxlAutoCam.active||this.pxlAutoCam.autoCamActive)&&this.pxlAutoCam.preAutoCamToggle(),this.hotKeyTriggered=!0,t==0&&this.warpEventTriggered(1,this.pxlEnv.currentRoom,"init"))}camJumpKey(t=!1){t?this.camInitJump():(this.cameraJumpActive&&(this.cameraJumpActive=!1),this.cameraAllowJump=!0)}camInitJump(){!this.gravityActive&&this.cameraAllowJump&&(this.pxlDevice.keyDownCount[2]=this.pxlTimer.prevMS,this.cameraAllowJump=!1,this.cameraJumpActive=!0,this.cameraJumpInAir=!0,this.gravityActive=!0,this.pxlUser.gravityRate=0,this.cameraJumpImpulse=this.cameraJumpInitImpulse[this.pxlUser.lowGrav]*this.userScale,this.objectJumpLock&&(this.objectJumpLock=!1,this.nearestFloorHit=this.nearestFloorHitPrev))}camJump(t){let i=t-this.pxlDevice.keyDownCount[2],n=1,s=Math.min(1,i/this.cameraMaxJumpHold[this.pxlUser.lowGrav]);if(this.cameraJumpActive){let r=s;r==1?this.cameraJumpActive=!1:(r=(1-r)*(1-r),r=r*(r*.5+.5)),this.cameraJumpImpulse+=Math.max(0,r)}this.cameraJumpImpulse*=1-s,s==1&&(this.cameraJumpActive=!1)}killJumpImpulse(){let t=this.cameraJumpImpulse*this.cameraJumpImpulseEaseOut;this.cameraJumpImpulse=t>.1?t:0,this.workerFunc("killJumpImpulse")}updateGravity(){if(this.runMain&&(this.pxlUser.gravityRate=Math.max(0,this.pxlUser.gravityRate-this.cameraJumpImpulse*.2),this.gravityActive&&(this.pxlUser.gravityRate=Math.min(this.pxlUser.gravityMax,this.pxlUser.gravityRate+this.pxlUser.gravityMax*this.pxlTimer.msRunner.y)),this.pxlUser.gravityRate!=0)){let t=1;this.gravityActive?t=this.pxlUser.gravityRate*.08:(this.pxlUser.gravityRate=this.pxlUser.gravityRate>.01?this.pxlUser.gravityRate*this.gravityEaseOutRate:0,t=this.pxlUser.gravityRate),t=Math.min(1,t),this.standingHeightGravInfluence=Math.min(1,this.pxlUser.gravityRate*1.2/this.pxlUser.gravityMax)*this.standingMaxGravityOffset}}resetGravity(){this.pxlUser.gravityRate=0,this.workerFunc("resetGravity"),this.jumpLanding(!1)}jumpLanding(t=!0){this.gravityActive=!1,this.cameraJumpImpulse=0,this.cameraJumpInAir=!1,this.cameraJumpActive=!1,t&&this.workerFunc("jumpLanding")}mainColliderCheck(t,i){let n=null;if(this.movementBlocked=!1,(this.cameraMoveLength>0||this.colliderPrevObjHit==null||this.nearestFloorObjName==null)&&this.cameraBooted&&this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].collidersExist){this.colliderValidityChecked=!0;let a=new P(0,-1,0),l=t.clone(),c=1500;l.y=c,this.objRaycast.set(l,a);let h=!1;var s=[];let u=~~(l.x>0)+(~~(l.z>0)+"");if(s.length>0)if(this.antiColliderTopActive){let f=this.objRaycast.intersectObjects([...this.antiColliderTopList.noAxis,...this.antiColliderTopList[u]]),d=-99999,p=t.y,y,v=this.nearestFloorHit,m=!1;for(var r=0;r<f.length;++r){var o=f[r];y=o.object.name;let E=o.point,M=o.distance,L=E.y-t.y<this.maxStepHeight;m=m||L,(M<d&&valid||n==null)&&(n=y,d=M,v=E)}let g;(!m||t.y<v.y&&this.nearestFloorHitPrev.y-v.y>this.maxStepHeight+this.getStandingHeight()&&!this.gravityActive&&t.y+this.maxStepHeight+this.getStandingHeight()<v.y&&this.gravityActive)&&((this.cameraMovement[0]!=0||this.cameraMovement[1]!=0)&&(m=!0,this.gravityActive=!1,this.objectJumpLock=!0),g=this.cameraPos.clone(),g.y=Math.min(t.y,g.y),t=g,v=t,this.gravityActive?v.y=this.nearestFloorHitPrev.y:v.y=this.cameraPos.y,this.cameraJumpActive=!1,this.cameraAllowJump=!0,this.cameraJumpInAir=!1,this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0)),m&&(n==null?(this.nearestFloorHit=this.nearestFloorHitPrev,this.nearestFloorObjName=this.nearestFloorObjNamePrev,Math.abs(t.y-this.nearestFloorHit.y)>this.maxStepHeight+this.getStandingHeight()&&(this.colliderValid=!1,this.gravityActive=!0)):(this.nearestFloorHitPrev=this.nearestFloorHit,this.nearestFloorObjNamePrev=this.nearestFloorObjName,this.nearestFloorHit=v,this.nearestFloorObjName=n))}else this.colliderFail=!0,this.movementBlocked=!0;else{let f=this.maxStepHeight+this.cameraJumpImpulse,d=f+this.maxStepHeight+this.pxlUser.gravityRate;if(l.y=t.y+f,this.objRaycast.set(l,a),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList||(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList={}),!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[u]){let p=[],y=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];p.push(...y.colliderList.noAxis),p.push(...y.colliderList[u]),p.push(...y.antiColliderTopList.noAxis),p.push(...y.antiColliderTopList[u]),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[u]=p}if(this.colliderActive&&this.antiColliderTopActive||this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive)s=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[u]);else return t;if(s.length>0){this.floorColliderInitialHit=!0;let p=-99999,y,v=this.nearestFloorHit;for(let m=0;m<s.length;++m){let g=s[m],E=g.distance,M=g.point,C=!1;if(y=g.object.name,C=M.distanceTo(t)<this.maxStepHeight,(this.portalList[y]||this.roomWarpZone.includes(y))&&C){n=y,v=M;break}else this.itemCheck(y,C)||(E<p||n==null)&&(n=y,p=E,v=M)}this.nearestFloorObjName==null&&n!=null&&(this.nearestFloorHitPrev=v,this.nearestFloorObjNamePrev=n,this.nearestFloorHit=v,this.nearestFloorObjName=n),this.nearestFloorHitPrev.y-v.y>this.maxStepHeight+this.getStandingHeight()&&!this.gravityActive?(n?t=this.cameraPos.clone():t=this.cameraPrevPos.clone(),n=this.nearestFloorObjName,this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0)):(this.nearestFloorHitPrev=this.nearestFloorHit,this.nearestFloorObjNamePrev=this.nearestFloorObjName,this.nearestFloorHit=v,this.nearestFloorObjName=n,n==null&&(this.colliderValid=!1,this.gravityActive=!0))}else this.colliderFail=!0,this.movementBlocked=!0,this.colliderValidityChecked=!1,t=this.cameraPos.clone()}}else this.colliderValidityChecked=!1;return this.colliderValidityChecked=!1,t}roomColliderCheck(t){this.colliderValidityChecked=!0,this.colliderValid=!1,this.colliderFail=!1;let i=t.clone();if(i.y=0,this.nearestFloorHit=i,this.nearestFloorObjName="None",!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp)return t;if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp.length>0){let s=new P(0,-1,0),r=t.clone(),o=1500;r.y=o,this.objRaycast.set(r,s);var n=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp);if(n.length>0)return this.pxlEnv.currentAudioZone=0,this.warpEventTriggered(1,this.pxlEnv.mainRoom),t;let a=t.y,l=t;if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive==!0){if(!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList){let c=[];Object.keys(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList).forEach(u=>{c.push(...this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList[u])}),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList=c}if(this.objRaycast.set(r,s),n=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList),n.length==0)return this.cameraPrevPos.clone();if(n.forEach(c=>{let h=c.distance,u=t.y-c.point.y;h>t.y&&u<t.y+this.maxStepHeight&&(a=h,l=c.point)}),t.y<l.y)return l.clone()}}return t}checkColliderValid(t){this.colliderValidityChecked=!0;let i=this.maxStepHeight+this.pxlUser.gravityRate,n=t.distanceTo(this.nearestFloorHit),s=n<i;return this.colliderValid=s,n}eventTrigger(t=null){if(!t)return!1;if(this.portalList[t])return this.warpEventTriggered(0,this.portalList[t]),this.eventCheckStatus=!1,!0;if(this.roomWarpZone.includes(t))return this.warpEventTriggered(1,t),this.eventCheckStatus=!1,!0;if(this.colliderShiftActive=this.colliderCurObjHit!=t||this.colliderShiftActive,this.colliderPrevObjHit=this.colliderCurObjHit,this.colliderCurObjHit=t,this.colliderShiftActive=this.colliderShiftActive||!(this.colliderAdjustPerc==1||this.colliderAdjustPerc==0),this.colliderShiftActive&&this.colliderCurObjHit){let i=1;this.colliderCurObjHit.includes("AudioTrigger")&&(i=-1),this.colliderAdjustPerc=Math.min(1,Math.max(0,this.colliderAdjustPerc+this.colliderAdjustRate*i));let s=1-this.colliderAdjustPerc,r=1;if(this.colliderCurObjHit=="AudioTrigger_1"?(this.pxlEnv.currentAudioZone=1,r=r-s*this.uniformScalars.darkBase,this.uniformScalars.exposureUniformBase=r):this.colliderCurObjHit=="AudioTrigger_2"?(this.pxlEnv.currentAudioZone=2,r=this.uniformScalars.curExp+s*this.uniformScalars.brightBase*1,this.uniformScalars.exposureUniformBase=r,this.rolLobby,this.proximityScaleTrigger=!0,this.pxlAudio.setFadeActive(-1)):this.colliderCurObjHit=="MainRoom"?(this.pxlEnv.currentAudioZone=3,this.warpEventTriggered(1,"ShadowPlanet")):(this.pxlEnv.currentAudioZone=0,r=r*(1-s)+this.uniformScalars.exposureUniformBase*s),this.colliderShiftActive=!(this.colliderAdjustPerc==1||this.colliderAdjustPerc==0),this.colliderPrevObjHit=="AudioTrigger_2"&&this.colliderCurObjHit!=this.colliderPrevObjHit&&(this.proximityScaleTrigger=!0,this.pxlAudio.setFadeActive(1)),this.pxlDevice.mobile&&(r=this.colliderAdjustPerc),this.pxlEnv.updateCompUniforms(r),this.proximityScaleTrigger&&!this.pxlDevice.mobile&&!this.pxlAutoCam.enabled){let o=this.colliderAdjustPerc;o=1-(1-o)*(1-o),this.pxlEnv.fogMult.x=o,this.colliderShiftActive||(this.proximityScaleTrigger=!1)}this.eventCheckStatus=this.colliderShiftActive}}itemCheck(t,i){if(!i)return!1;let n=t.split("_").shift();return this.pxlUser.itemListNames.includes(t)&&this.pxlUser.checkItemPickUp(n)?this.itemActive(n,t):!1}itemTrigger(){if(this.pxlUser.itemActiveTimer.length>0)this.pxlUser.itemActiveTimer[0]=this.pxlTimer.curMS;else{this.pxlUser.mPick.length==0&&(this.pxlUser.mPick=this.pxlUtils.randomizeArray(["LizardKing","StarField","InfinityZoom"]));let t=this.pxlUser.mPick.pop();this.pxlUser.checkItemPickUp(t),this.itemActive(t)}}itemActive(t=null,i=null){if(t==null)return!1;let n=this.pxlTimer.prevMS+this.pxlUser.itemRunTime,s="",r="";if(t=="LowGravity")r="Low Gravity",s="this.lowGrav=0;this.itemGroupList['"+i+"'].visible=true;",n=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(t=="LizardKing")r="I am the Lizard King",s="this.lKing=0;this.lKingWarp.set(...this.lKingInactive);this.lKingPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+i+"'].visible=true;"),n=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(t=="StarField")r="Major Tom",s="this.sField=0;this.sFieldPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+i+"'].visible=true;"),n=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(t=="InfinityZoom")r="Fractal Substrate",s="this.iZoom=0;this.iZoomPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+i+"'].visible=true;this.pxlEnv.mapComposerWarpPass.needsSwap=true;this.pxlEnv.mapComposerWarpPass.enabled=false;"),n=this.pxlTimer.prevMS+this.pxlUser.itemRunTime,this.pxlEnv.mapComposerWarpPass.needsSwap=!0,setTimeout(()=>{this.pxlEnv.mapComposer.render(),this.pxlEnv.roomComposer.render(),setTimeout(()=>{this.pxlEnv.mapComposerWarpPass.needsSwap=!1,this.pxlEnv.mapComposerWarpPass.enabled=!0},500)},500);else return!1;return this.pxlGuiDraws.buildItemHud(t,r),this.pxlDevice.mobile||(this.pxlUser.itemGroupList[i].visible=!1),this.pxlUser.itemInactiveCmd.push(s),this.pxlUser.itemActiveTimer.push(n),this.pxlUser.itemActiveList.push(r),!0}updateMovement(t){let i=[0,0],n=[...this.pxlDevice.directionKeysPressed],s=0,r=0,o=[t-this.pxlDevice.keyDownCount[0],t-this.pxlDevice.keyDownCount[1]];if(n[0]+n[2]==1){s=n[2]-n[0];let a=this.pxlQuality.settings.leftRight?1.5:1-Math.min(1,Math.abs(this.cameraMovement[1]*.1))*.6;i[0]=((this.pxlQuality.settings.leftRight?2:6)+(1+o[0]*(o[0]+1))*.1)*a}else this.pxlDevice.keyDownCount[0]=t;if(n[1]+n[3]==1){r=n[3]-n[1];let a=1-Math.min(1,Math.abs(this.cameraMovement[0]*.07))*.65;i[1]=(1+o[1]*(o[1]*3+2+this.pxlDevice.shiftBoost)*.15)*a,i[1]=Math.min(30,i[1])}else this.pxlDevice.keyDownCount[1]=t;this.cameraMovement[0]+=s*i[0],this.cameraMovement[1]+=r*i[1]}initFrameCamPosition(){let t=this.cameraPos.clone();if(!this.cameraBooted)this.cameraAimTarget.position.set(0,0,0),this.cameraPrevPos=new P(t.clone()),this.cameraPrevLookAt=new P(0,0,1);else{let i;i=new P(this.pxlQuality.settings.leftRight?this.cameraMovement[0]*.5:0,0,this.cameraMovement[1]),this.cameraMoveLength=i.length(),i.applyQuaternion(this.camera.quaternion),i.normalize().multiply(new P(1,0,1)).multiplyScalar(this.cameraMoveLength*this.cameraMoveLengthMult),t.add(i),this.cameraMovement[0]=Math.abs(this.cameraMovement[0])<this.posRotEasingThreshold?0:this.cameraMovement[0]*this.cameraMovementEase,this.cameraMovement[1]=Math.abs(this.cameraMovement[1])<this.posRotEasingThreshold?0:this.cameraMovement[1]*this.cameraMovementEase,t.y=this.cameraPos.y+this.cameraJumpImpulse,this.workerActive&&(this.cameraJumpImpulse=0)}return this.cameraCross=new P(1,0,0).applyQuaternion(this.camera.quaternion),t}updateCamPosition(t){if(this.gravityActive){let i=this.maxStepHeight+this.pxlUser.gravityRate;if(t.y<this.nearestFloorHit.y){let s=this.nearestFloorHitPrev;t.y=Math.max(s.y,t.y),t.y<0&&(t.x=s.x,t.z=s.z)}else t.y=Math.max(this.nearestFloorHit.y,t.y-this.pxlUser.gravityRate),t.y==this.nearestFloorHit.y&&t.y<this.cameraPrevPos.y&&this.jumpLanding()}else if(t.distanceTo(this.nearestFloorHit)<this.maxStepHeight)t.y=this.nearestFloorHit.y;else{t=this.cameraPos.clone();let n=t.y>this.nearestFloorHit.y;this.gravityActive=n,this.colliderFail=!n,this.workerFunc("jumpLanding")}return t}getStandingHeight(){return this.standingHeight*this.userScale}getUserHeight(){let t=Math.min(1,Math.abs(this.cameraMovement[1]));this.walkBouncePerc=this.walkBouncePerc>=1?1:this.walkBouncePerc+.05,this.walkBounce+=t,this.walkBouncePerc=this.walkBouncePerc*.9+t,this.walkBouncePerc<.03&&(this.walkBouncePerc=0,this.walkBounce=0,this.walkBounceSeed=Math.random()*2351.3256);let i=Math.sin(this.walkBounce*.4+this.walkBounceSeed+this.cameraMovement[1]*.2)*this.walkBouncePerc*.3;return this.getStandingHeight()-this.standingHeightGravInfluence+i}camApplyMobileRotation(){if(this.cameraPose.alpha!=null){let t=.017453292519943278,i=2.23606797749979,n=new Ie,s=this.cameraPose.alpha*t+this.cameraPose.alphaOffset+2.1,r=this.cameraPose.beta*t,o=this.cameraPose.gamma*t,a=new P(0,0,1),l=new Ie,c=new Ie(-i,0,0,i),h=new ht;h.set(r,s,-o,"YXZ"),n.setFromEuler(h),n.multiply(c),n.multiply(l.setFromAxisAngle(a,-this.cameraPose.orientation)),n.normalize();let u=new Ie;Ie.slerp(this.camera.quaternion,n,u,.35);let f=new ht().setFromQuaternion(u);f.x=Math.max(-.95*Math.PI/2,Math.min(.95*Math.PI/2,f.x)),u.setFromEuler(f),this.camera.setRotationFromQuaternion(u)}}updateCameraRotation(){if(this.cameraPose.alpha==null){let t=this.pxlDevice.gyroGravity[2],i=new P(0,0,1),n=new Ie;this.pxlDevice.touchMouseData.netDistance.y=Math.min(this.pi*500,Math.max(-this.pi*500,this.pxlDevice.touchMouseData.netDistance.y));let s=new ht;s.set(this.pxlDevice.touchMouseData.netDistance.y*.001,this.pxlDevice.touchMouseData.netDistance.x*.001+t,0,"YXZ");let r=new Ie;r.setFromEuler(s),r=this.pxlDevice.touchMouseData.initialQuat.clone().multiply(r),r.normalize();let o=new Ie;Ie.slerp(this.camera.quaternion,r,o,.35),o=o.normalize(),this.camera.setRotationFromQuaternion(o)}}lookAtTargetLock(){if(this.lookAtTargetActive&&this.lookAtTargetActive&&(this.lookAtLockFader!=0&&(this.lookAtLockPerc+=(this.lookAtLockFader+Math.min(1,this.pxlDevice.touchMouseData.velocity.length()*.001))*this.lookAtLockFadeRate,(this.lookAtLockPerc<0||this.lookAtLockPerc>1)&&(this.lookAtLockPerc=this.lookAtLockPerc<0?0:1,this.lookAtLockFader=0),this.lookAtPerc.x=this.lookAtLockPerc),this.lookAtLockPerc>0)){let t=this.camera.quaternion.clone();this.camera.lookAt(this.cameraAimTarget.position);let i=this.camera.quaternion.clone();this.lookAtLockPerc==1?this.camera.setRotationFromQuaternion(i):this.camera.setRotationFromQuaternion(i.slerp(t,Math.cos(this.lookAtLockPerc*pi)*.5+.5))}}warpEventTriggered(t=0,i=null,n="init"){this.warpActive||(this.pxlEnv.mapComposerWarpPass.needsSwap=!0,this.warpType=t,this.warpObj=i,this.warpTarget=n,this.warpActive=!0,this.pxlEnv.initWarpVisual(t))}warpCamRun(){if(this.warpType==0)this.setToObj(this.warpObj);else if(this.warpType==1){let t=this.warpTarget=="init";this.warpToRoom(this.warpObj,t,this.warpTarget)}this.pxlEnv.setExposure(this.uniformScalars.exposureUniformBase),this.warpObj=null,this.warpTarget=null,this.warpActive=!1}lowQualityUpdates(){if(this.HDRView){let t=new P(0,0,-1).applyQuaternion(this.camera.quaternion),i=t.clone().multiply(new P(1,0,1)).normalize();this.camRotPitch.set(-Math.atan2(i.x,i.z)*.1591549430918955,t.y*.5)}}midQualityUpdates(){if(this.pxlQuality.settings.motion){let t=new P(0,0,0);t.applyQuaternion(this.camera.quaternion),this.camRotXYZ.multiplyScalar(.8).add(t.multiplyScalar(.2));let i;if(this.pxlDevice.mobile){let r=sW*.5,o=sH*.5,a=new P(0,0,10),l=new P(0,0,10);a.applyQuaternion(this.camera.quaternion.clone()).project(this.camera),l.applyQuaternion(this.prevQuaternion).project(this.camera),a.x=(a.x+1)*r,a.y=-(a.y-1)*o,l.x=(l.x+1)*r,l.y=-(l.y-1)*o,i=l.clone().sub(a.clone()).multiplyScalar(.6).multiply(new P(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y,0));let c=.1;i.length>c&&i.normalize().multiplyScalar(c)}else i=this.pxlDevice.touchMouseData.velocity.clone().multiplyScalar(Math.max(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y));let n=new N(i.x,-i.y),s=new N(0,0).lerpVectors(this.pxlEnv.blurDirPrev,n,.85);this.pxlEnv.blurDirPrev.set(this.pxlEnv.blurDirCur),this.pxlEnv.blurDirCur.set(s)}}emitCameraTransforms(t,i,n=!1){}jogServerMemory(){let t=this.cameraPos.clone(),i=this.getUserHeight();this.emitCameraTransforms(t,i,!0)}updateCamera(){let t=this.pxlDevice.touchMouseData.velocity.length();if(this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(.7),this.camUpdated||t!=0||this.pxlDevice.touchMouseData.active){this.camUpdated=!1;let i=!1;this.updateDeviceValues(t),this.pxlUser.localUserTurned=this.pxlDevice.touchMouseData.velocity.length()==0,this.prevQuaternion.copy(this.camera.quaternion);let n=this.initFrameCamPosition(),s=this.getUserHeight();{let r=null,o=!1;n=this.mainColliderCheck(n,r)}this.updateGravity(),!this.colliderValid&&!this.colliderValidityChecked?this.jump=this.checkColliderValid(n):this.jump=0,this.eventCheckStatus=!0,n=this.updateCamPosition(n),this.pxlUser.localUserMoved=this.gravityActive||(this.cameraMovement[0]**2+this.cameraMovement[1]**2)**.5>0,this.cameraPrevPos=this.cameraPos.clone(),this.cameraPos=n.clone(),n.y+=s,this.camera.position.copy(n),this.updateCameraRotation(),this.camera.updateMatrixWorld(),this.emitCameraTransforms(n,s),this.cameraBooted=!0}else this.pxlUser.localUserMoved=!1,this.pxlUser.localUserTurned=!1}};var xo=class{constructor(t=!1){this.enabled=t,this.active=!1,this.mobile=null,this.pxlTimer=null,this.pxlUtils=null,this.pxlDevice=null,this.pxlAudio=null,this.pxlCamera=null,this.pxlEnv=null,this.camera=null,this.netDistance=new N,this.prevCamChange=0,this.nextCamChange=0,this.delayRange=[25,45],this.autoCamActive=!1,this.autoCamMode=0,this.autoCamPaths={},this.resetAutoCam=!0,this.autoCamPrevPos=null,this.autoCamPrevLookAt=null,this.touchBlender=!1,this.autoCamId=0,this.camMode=0,this.curModeCount=0,this.curRoom="",this.curRoomIndex=0,this.curPath=0,this.roomList=[],this.pathCounts={},this.forceNewRoom=!1,this.curRoomCount=0,this.avatarMin=0,this.avatarValid=!1,this.curAvatar=null,this.clusterReturn=!1,this.curCluster=[],this.clusterValid=2,this.clusterRotation=0,this.clusterRotRate=.005}setDependencies(t){this.pxlTimer=t.pxlTimer,this.pxlUtils=t.pxlUtils,this.pxlDevice=t.pxlDevice,this.pxlAudio=t.pxlAudio,this.pxlCamera=t.pxlCamera,this.pxlEnv=t.pxlEnv,this.camera=t.pxlCamera.camera}init(){this.active=this.enabled||this.mobile,this.autoCamActive=this.autoCamActive||this.mobile;let{roomList:t,pathCounts:i}=this.getAutoCamData();this.roomList=t,this.curRoom=this.roomList[0],this.pathCounts=i,this.setRoom(!1,!0),this.getNextPath(),this.checkStatus()}step(t=!1){if(this.active==!1)if(this.autoCamActive)this.updateAutoCamera();else return!0;if((this.pxlTimer.curMS>=this.nextCamChange||t)&&this.active&&!this.pxlDevice.touchMouseData.active){if(!t||!this.enabled){let i=this.checkCamMode();this.setNextTrigger(i)}this.curAvatar=0,this.camera.up.set(0,1,0),this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0),this.camMode==1?this.setCamMode(0):this.camMode==2?this.setCamMode(0):(this.curCluster=[],this.stepDroneCam()),this.setAutoCamMode(this.camMode)}return this.updateAutoCamera(),this.applyTouchRotate(),!1}checkCamMode(){let t=1,i=this.camMode;return this.camMode=0,!this.enabled||!this.active||this.camMode!=i&&this.camMode==0&&(this.forceNewRoom=!0),t}setCamMode(t){let i=1;t.type==1||t.type==2?i=1:(this.camMode=0,this.forceNewRoom=!0),this.step(!0)}stepDroneCam(){let t=!0,i=Math.random(this.nextCamChange),n=this.pathCounts[this.pxlEnv.currentRoom];this.curRoomCount>=n*2&&(this.forceNewRoom=!0),(i<.3||this.forceNewRoom)&&(this.setRoom(),t=!1),this.curRoomCount+=1,this.getNextPath(t)}setRoom(t=!1,i=!1){if(this.active||this.autoCamActive){let n=this.curRoomIndex,s=this.roomList.length;this.pxlEnv.postIntro?i||(t?n=(n+1)%s:(n=Math.floor(Math.random()*s),n==this.curRoomIndex&&(n=(n+1)%s))):n=0,this.curRoomIndex=n,this.curRoom!=this.roomList[n]&&(this.curRoom=this.roomList[n],this.forceNewRoom=!1,this.curRoomCount=0,this.pxlCamera.warpEventTriggered(1,this.curRoom,"init"))}}setNextTrigger(t=1){let i=Math.random(this.nextCamChange);i=(this.delayRange[1]-this.delayRange[0])*i+this.delayRange[0],this.nextCamChange=this.pxlTimer.curMS+i*t}getNextPath(t=!0,i=1){if(this.autoCamPaths.hasOwnProperty(this.pxlEnv.currentRoom)){let n=this.autoCamPaths[this.pxlEnv.currentRoom].length;if(this.curPath=(this.curPath+i)%n,t&&i==0){let s=Math.random(this.nextCamChange);s=Math.floor(s*this.autoCamPaths[this.pxlEnv.currentRoom].length),this.curPath==s&&(s=(s+1)%n),this.curPath=s}else this.curPath=this.curPath<0?n-1:this.curPath,this.setNextTrigger(1);this.setAutoCamPath(this.curPath)}}checkStatus(){(this.autoCamActive||this.pxlDevice.mobile||this.active)&&this.toggleAutoCam(!0)}preAutoCamToggle(){this.autoCamActive||this.pxlCamera.colliderCurObjHit=="AudioTrigger_2"&&(this.pxlCamera.proximityScaleTrigger=!0,this.exposureShiftActive=!0),this.toggleAutoCam()}setAutoCamMode(t=0){this.autoCamMode=t,t==1&&(this.resetAutoCam=!0)}setPosQuat(t,i){this.camera.quaternion.copy(i),this.camera.position.copy(t),this.pxlCamera.updateCameraMatrices(),this.pxlCamera.camUpdated=!0}toggleAutoCam(t=null,i=1){if(this.pxlEnv.fogMult.x=1,this.autoCamPaths[this.pxlEnv.currentRoom]){this.curRoom=this.pxlEnv.currentRoom;let n=this.autoCamPaths[this.pxlEnv.currentRoom].length;isNaN(this.autoCamId)&&(this.autoCamId=n-1);let s=this.autoCamActive;if(this.autoCamActive=t==null&&n>0?!this.autoCamActive:t,this.autoCamActive=this.mobile||this.autoCamActive,!s&&this.autoCamActive&&(this.netDistance=new N().copy(this.pxlDevice.touchMouseData.netDistance)),this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0),this.autoCamActive){this.pxlCamera.resetGravity(),this.autoCamId=(this.autoCamId+i)%n,this.autoCamId=this.autoCamId<0?n-1:this.autoCamId;let r=this.autoCamPaths[this.pxlEnv.currentRoom][this.autoCamId];this.totalLoopDuration=r.position.userData.duration;try{this.autoCamPositions=r.position.geometry.attributes.position,this.autoCamLookAt=r.lookAt.geometry.attributes.position,r.up?this.autoCamUp=r.up.geometry.attributes.position:(this.autoCamUp=null,this.camera.up.set(0,1,0)),this.numControlPoints=this.autoCamPositions.array.length/3,this.autoCamStartTime=this.pxlTimer.curMS-this.totalLoopDuration*Math.random()}catch{}}else this.setPosQuat(this.pxlCamera.cameraPrevPos.clone(),this.pxlCamera.prevQuaternion.clone()),this.pxlDevice.touchMouseData.netDistance.copy(this.netDistance)}}prevNextAutoCam(t=1,i=!1){this.autoCamActive&&(this.enabled&&this.active&&!i?this.nextCamChange=this.pxlTimer.curMS:this.toggleAutoCam(!0,t))}setAutoCamPath(t=0){this.autoCamActive&&(this.autoCamId=t,this.toggleAutoCam(!0,0))}getAutoCamData(){let t=Object.keys(this.autoCamPaths),i={};return t.forEach(n=>{i[n]=this.autoCamPaths[n].length}),{roomList:t,pathCounts:i}}getAutoCamValueFromCurve(t,i,n,s=!1){let r=t[i*3],o=t[i*3+1],a=t[i*3+2],l=(i+1)%this.numControlPoints,c=t[l*3],h=t[l*3+1],u=t[l*3+2],f=new P(r,o,a),d=new P(c,h,u);return f.lerp(d,n),f}updateAutoCamera(){if(!this.autoCamPositions||!this.autoCamPositions.array)return;let i=(this.pxlTimer.curMS-this.autoCamStartTime)%this.totalLoopDuration/this.totalLoopDuration;i*=this.numControlPoints-1;let n=Math.floor(i),s=i-n,r=this.getAutoCamValueFromCurve(this.autoCamPositions.array,n,s,!1);this.camera.position.copy(r);let o=this.getAutoCamValueFromCurve(this.autoCamLookAt.array,n,s);if(this.camera.lookAt(o),this.autoCamUp){let a=this.getAutoCamValueFromCurve(this.autoCamUp.array,n,s);a=a.sub(r).normalize(),this.camera.up.copy(a)}}applyTouchRotate(){let t=1;this.touchBlender?(t=Math.min(1,Math.max(0,this.pxlTimer.curMS-this.pxlDevice.touchMouseData.releaseTime)),t*=t,this.pxlDevice.touchMouseData.netDistance.multiplyScalar(1-t),this.touchBlender=t<1):this.pxlDevice.touchMouseData.netDistance.multiplyScalar(.5);let i=new ht;i.set(this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2,this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2,0,"YXZ");let n=new Ie().clone(this.camera.quaternion);n.setFromEuler(i),n=this.camera.quaternion.clone().multiply(n),n.normalize(),this.touchBlender&&n.slerp(this.camera.quaternion.clone(),t).normalize();let s=new P(0,0,-10).applyQuaternion(n).add(this.camera.position);this.camera.setRotationFromQuaternion(n),this.camera.lookAt(s),this.camera.up.set(0,1,0)}};nu();var bo=class{constructor(){this.pxlTimer=null,this.pxlVideo=null,this.pxlDevice=null,this.pxlEnv=null,this.pxlGuiDraws=null,this.pxlSocket=null,this.active=!1,this.audioTimer=new dt(0,0,0),this.audioEq=new kd(0,0,0,0),this.audioWorker=null,this.audioProcessor=null,this.djUrlSource="//",this.djMuted=!1,this.djAudioVolume=0,this.djAudioVolumeMax=.65,this.djAudioVolumeMin=.25,this.djAudioVolumeScalar=.25,this.djAudioObj=null,this.djTimecodeObj=null,this.djVolumeParentObj=null,this.djVolumeObj=null,this.roomAudioStopped=!0,this.videoStreamObjects=[],this.colliderVolActive=!1,this.isVideoObject=!1,this.activeObject=null,this.fadeActive=!1,this.fadeAdjustRate=.02,this.fadeDir=0,this.fadePerc=0,this.audioContext=null}setDependencies(t){this.pxlTimer=t.pxlTimer,this.pxlVideo=t.pxlVideo,this.pxlDevice=t.pxlDevice,this.pxlEnv=t.pxlEnv,this.pxlGuiDraws=t.pxlGuiDraws,this.pxlSocket=t.pxlSocket}init(){this.active=!0}postBoot(){if(this.djAudioObj){if(this.pxlEnv.pxlAutoCam.enabled)this.djAudioVolumeMax=1,this.djAudioVolumeMin=0;else if(this.pxlEnv.mobile){let o=function(a){setTimeout(()=>{n.djAudioVolume=0,n.djAudioVolumeMax=s,n.djAudioVolumeMin=0,n.djAudioObj.byScript=!0,n.djAudioObj.volume=0,t.play().then(()=>{n.djPlayerMuteToggle(!1),n.setFadeActive(.5)}),r.removeEventListener("click",o),r.removeEventListener("touchstart",o)},500)},n=this,s=this.djAudioVolumeMax,r=document.getElementById("guiMobileWelcomeButton");r.addEventListener("click",o),r.addEventListener("touchstart",o)}this.djAudioVolume=this.pxlEnv.enabled?0:this.djAudioVolumeMin,this.djAudioObj.volume=this.pxlEnv.enabled?0:this.djAudioVolumeMin,this.djPlayerMuteToggle(!1),this.djPlayerAdjustVolume({}),this.djPlayerSetSliderGui();let t=this.djAudioObj;t.setAttribute("autoplay",!0);let i=this;this.djAudioObj.addEventListener("volumechange",n=>{i.djPlayerSetSliderGui()},!0)}}start(){}step(){this.djAudioObj&&this.djAudioObj.paused&&(this.djAudioObj.play().catch(t=>{}),this.djAudioObj.muted=this.djMuted||!this.roomAudioStopped),this.fadeAudioEvent()}isPaused(){let t=!0;return this.djAudioObj&&(t=this.djAudioObj.paused),t}pausePlayback(){this.active=this.pxlTimer.active,this.active?this.play():this.stop()}initPlay(){this.pxlVideo.canUnmute("dj")&&!this.isPaused()&&(this.djPlayerMuteToggle(!1),this.setFadeActive(1),this.pxlDevice.mobile&&this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon,!this.djMuted,!0))}play(){if(this.active=!0,this.isVideoObject)this.pxlVideo.setVolume("dj",this.djAudioVolume),this.pxlVideo.setMuted("dj",this.djMuted);else{this.djAudioObj.byScript=!0;let t=this.djAudioObj;t.children[0].setAttribute("src",this.djUrlSource),setTimeout(()=>{t.load(),setTimeout(()=>{t.volume=this.djAudioVolume,t.muted=this.djMuted||!this.roomAudioStopped,t.paused&&t.play()},20)},20)}}stop(){if(this.active=!1,this.isVideoObject)this.pxlVideo.setMuted("dj",!0);else{let t=this.djAudioObj;t.children[0].setAttribute("src",""),t.pause(),setTimeout(()=>{t.load()},20)}}djBuildPlayer(){this.djAudioObj=document.getElementById("djStream"),this.djVolumeParentObj=document.getElementById("djPlayerVolumeParent"),this.djVolumeObj=document.getElementById("djPlayerVolume"),this.djAudioObj.byScript=!1,this.djAudioObj.volume=0,this.djVolumeObj.style.width="0%";let t=this;this.pxlDevice.objectPercList.push("djPlayerVolume"),this.pxlDevice.objectPercList.push("djPlayerVolumeParent"),this.pxlDevice.objectPercFuncList.djPlayerVolumeParent=i=>{t.djPlayerAdjustVolume(i)},this.djVolumeParentObj.down=!1,this.djVolumeParentObj.addEventListener("mousedown",i=>{t.djVolumeParentObj.down=!0,t.djPlayerAdjustVolume(i)}),this.djVolumeParentObj.addEventListener("mousemove",i=>{t.djPlayerAdjustVolume(i)}),this.djVolumeParentObj.addEventListener("mouseup",i=>{t.djVolumeParentObj.down=!1}),this.pxlDevice.mobile&&(this.djVolumeParentObj.style.width="30vw",this.djVolumeParentObj.addEventListener("touchstart",i=>{t.djVolumeParentObj.down=!0},{passive:!0}),this.djVolumeParentObj.addEventListener("touchmove",i=>{t.djPlayerAdjustVolume(i)},{passive:!0}),this.djVolumeParentObj.addEventListener("touchend",i=>{t.djVolumeParentObj.down=!1},{passive:!0})),this.djAudioObj.muted=!0,this.prepAudioProcessor()}prepAudioProcessor(){}stepAudioProcessor(){}recieveAudioProcessor(t){}buildRemoteAudioMixer(t,i){if(0)var n,s,r;return!1}loadStreamPromise(){let t=this.djAudioObj;return new Promise((i,n)=>{this.djAudioObj.byScript=!0,t.children[0].setAttribute("src",this.djUrlSource),t.load(),t.muted=this.djMuted||!this.roomAudioStopped}).then(()=>{}).catch(i=>{console.log("error source")})}djPlayerSetSliderGui(){this.djAudioObj.byScript||!this.pxlEnv.postIntro||this.pxlEnv.pxlAutoCam.enabled?this.djAudioObj.byScript=!1:(this.fadeActive=!1,this.djAudioVolumeMax=this.djAudioVolume,this.djAudioVolumeMin=this.djAudioVolume*this.djAudioVolumeScalar),this.djVolumeObj.style.width=this.djAudioVolume*100*~~!this.djMuted+"%"}djPlayerAdjustVolume(t){if(this.djVolumeParentObj.down||this.djVolumeParentObj.down&&t.touches){let i=this.djVolumeParentObj.offsetWidth,n=0;t.touches?n=this.pxlDevice.objectPerc.percX:n=t.offsetX/i;let s=Math.max(0,Math.min(1,n));this.djAudioVolume=s,this.djAudioVolumeMax=s,this.djAudioVolumeMin=s*.1,s*=s,this.djAudioObj&&(this.djAudioObj.volume=s),t.touches&&this.djPlayerSetSliderGui()}this.pxlVideo&&this.pxlEnv.posted&&this.pxlVideo.setVolume("dj",this.djAudioVolume)}djPlayerMuteToggle(t=null){this.djMuted=t??!this.djMuted,t!=null&&this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon,!t,!0),this.djAudioObj&&(this.djAudioObj.muted=this.djMuted,this.djAudioObj.byScript=!0,this.djAudioObj.volume=this.djAudioObj.volume),this.pxlVideo&&this.pxlEnv.posted&&this.pxlVideo.setMuted("dj",this.djMuted)}setFadeActive(t=1){this.fadeDir!=t&&(this.fadeDir=t,this.fadeActive=!0)}fadeAudioEvent(){if(this.djVolumeParentObj&&!this.djVolumeParentObj.down&&this.fadeActive&&this.pxlEnv.postIntro){if(this.fadePerc+=this.fadeAdjustRate*this.fadeDir,this.fadePerc<0||this.fadePerc>1){this.fadePerc=this.fadeDir==1?1:0,this.fadeActive=!1;return}let t=(this.djAudioVolumeMax-this.djAudioVolumeMin)*this.fadePerc+this.djAudioVolumeMin;this.djAudioVolume=t,t*=t,this.djAudioObj&&(this.djAudioObj.byScript=!0,this.djAudioObj.volume=t),this.pxlVideo.setVolume("dj",this.djAudioVolume)}}};var su={};zt(su,{camPosVert:()=>ff,defaultShiftVert:()=>df,defaultVert:()=>hf,discardFrag:()=>pf,shaderHeader:()=>oe});function oe(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}function hf(){let e=oe();return e+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,e}function df(){let e=oe();return e+=`
  varying vec2 vUv;
  varying vec2 vUvShift;
  void main(){
    vUv=uv;
        vUvShift=uv-.5;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,e}function ff(){let e=oe();return e+=`
  varying vec3 camPos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    camPos=(modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
  }`,e}function pf(){let e=oe();return e+=`
  void main(){
    discard;
    gl_FragColor=vec4(.0,.0,.0,0.0);
  }`,e}var ru={};zt(ru,{animTextureFrag:()=>gf,animTextureVert:()=>mf,clickableBevelFrag:()=>xf,clickableBevelVert:()=>vf,portalBaseFrag:()=>bf,portalBaseVert:()=>yf});function mf(){let e=oe();return e+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,e}function gf(){let e=oe();return e+=`
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
  }`,e}function vf(){let e=oe();return e+=`
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
      
    }`,e}function xf(){let e=oe();return e+=`
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
    }`,e}function yf(){let e=oe();return e+=`
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
            
        }`,e}function bf(){let e=oe();return e+=`
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
        }`,e}var ou={};zt(ou,{itemBaseFrag:()=>_f,itemBaseVert:()=>wf,itemFrag:()=>Sf,itemVert:()=>Mf,itemZoomFrag:()=>Ef,pxlPrincipledFrag:()=>Cf,pxlPrincipledVert:()=>Tf});function wf(){let e=oe();return e+=`
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
      
    }`,e}function _f(){let e=oe();return e+=`
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
    }`,e}function Mf(){let e=oe();return e+=`
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
      
    }`,e}function Sf(){let e=oe();return e+=`
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
    }`,e}function Ef(){let e=oe();return e+=`
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
    }`,e}function Tf(e=!1){let t=`
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
        ${Re.common}
        ${Re.shadowmap_pars_vertex}
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
            ${Re.worldpos_vertex}
            ${Re.shadowmap_vertex}
          `),t+=`
    }`,t}function Cf(e,t,i,n,s,r){let o=!1,a=1;e.hasOwnProperty("Specular")&&e.Specular>0&&(o=!0,a=e.Specular);let l=!1;e.PointColor&&(l=!0);let c=!0,h="1.0";e.hasOwnProperty("SurfaceNoise")&&(e.SurfaceNoise%1==0&&(h=e.SurfaceNoise+".0"),h=="0.0"&&(c=!1));let u=`
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
    `,n&&(u+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),s&&(u+=`
      
      ${Re.packing}
      
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
      `,l)u+="vec3 vertCd = vCd;";else if(t){let y=E=>E%1==0?E+".0":E+"",v=y(t.r),m=y(t.g),g=y(t.b);u+=`vec3 vertCd = vec3( ${v}, ${m}, ${g} ) ;`}else u+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";u+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,i&&(u+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let f="",d="",p="";if(c&&(h!="1.0"&&(f="*"+h),u+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,d=`+detailMult * (shadowInf*.5+.5) ${f}`,p=`(detailMult+.5) ${f}`),n&&(u+=`
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
                `,o&&(u+=`
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
          `,o&&(u+=`
            Cd.rgb += vertCd * specular * ${a};
            `)),s){u+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let y=0;y<r;++y)u+=`
                i=${y};
                lShadow = getPointShadow( pointShadowMap[${y}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;u+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${d} ;
            `,c&&(u+=`
              #else
                Cd.rgb*=${p};
              `),u+=`
          #endif
          `}else c&&(u+=`
            Cd.rgb*=${p};
            `);return u+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,u}var au={};zt(au,{dustFrag:()=>Df,dustVert:()=>Lf,emberWispsFrag:()=>Af,emberWispsVert:()=>Pf,smokeFrag:()=>If,smokeVert:()=>Rf,snowFrag:()=>Uf,snowVert:()=>Bf});function Pf(){let e=oe();return e+=`
        
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
        
    }`,e}function Af(){let e=oe();return e+=`        
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
    }`,e}function Lf(e,t=120){let i=oe();return i+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,e>0&&(i+=`uniform vec3[${e}] lightPos;`),i+=`
    
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

  `,e>1?i+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:e==1&&(i+=`
        vec3 lightVector = normalize(pos - lightPos[0]);
        float lightInf = length(pos - lightPos[0]) *.02;
        vAlpha*=(1.0-lightInf)*.8+.2;
    `),i+=`
        vScalar = pScalar ;
        //float pScale = pointScale.x * ((seeds.w+.75)*.5) * pScalar + 1.0;
        float pScale = pointScale.x * (seeds.w*.5+.5)*pScalar + 1.0;
        pScale *= step( .5, atlas.x )*.5+1.;
        //pScale = 10.0;
       
        gl_PointSize = pScale;
        
        pos+=positionOffset;
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,i}function Df(){let e=oe();return e+=`
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
    }`,e}function Rf(){let e=oe();return e+=` 
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
        
        
    }`,e}function If(){let e=oe();return e+=`
        
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
    }`,e}function Bf(e=!1){let t=!e,i=oe();return i+=`
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
    `,t&&(i+=`
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
        `),i+=`  
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
    }`,i}function Uf(){let e=oe();return e+=`
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
    }`,e}var lu={};zt(lu,{boxAntiAliasPass:()=>Nf,chroAberPostProcess:()=>Xf,compLayersPostProcess:()=>Gf,crossAntiAliasPass:()=>Vf,directionalBlurPass:()=>zf,finalOverlayHeavyShader:()=>Jf,finalOverlayShader:()=>$f,finalOverlaySlimShader:()=>ep,glowPassPostProcess:()=>kf,iZoomPostProcess:()=>Yf,lKingPostProcess:()=>qf,mixBlurShaderPass:()=>Wf,motionBlurPostProcess:()=>jf,sFieldPostProcessFrag:()=>Zf,sFieldPostProcessVert:()=>Qf,textureStorePass:()=>Hf,warpPostProcess:()=>Kf,worldPositionFrag:()=>Ff,worldPositionVert:()=>Of});function Of(){let e=oe();return e+=`
  varying vec3 pos;
  
  void main(){
    vec3 transformed = vec3( position );
      vec4 mvPosition = modelViewMatrix  * vec4( transformed, 1.0 );
    pos=((projectionMatrix * modelMatrix * vec4( transformed-vec3(0.0,0.0,-500.0), 1.0 )).xyz*.0001)*.5+.5;
    
    gl_Position = projectionMatrix * mvPosition;
  }`,e}function Ff(){let e=oe();return e=`#include <packing>
  `+e,e+=`
    uniform sampler2D diffuse;
    uniform sampler2D depth;
    uniform float camNear;
    uniform float camFar;
    varying vec3 pos;
    
    void main() {
      
      vec4 Cd=vec4( pos, 1.0 );
      gl_FragColor = Cd;
    }`,e}function kf(){let e=oe();return e+=`
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
    }`,e}function Hf(){let e=oe();return e+=`
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
    }`,e}function Gf(){let e="";return e+=`
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
    }`,e}function Nf(){let e=oe();return e+=`
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
    }`,e}function Vf(){let e=oe();return e+=`
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
    }`,e}function zf(e,t,i,n){let s=oe();return s+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;
  
        #define PI 3.14159265358979
        
        void main() {
          
          float dist = 2.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
            
          const int blurCount=${i};
          const int runCount=2;
          vec2 runDir[runCount];
          runDir[0]=vec2(${t[0]}.0, ${t[1]}.0);
          runDir[1]=vec2(-${t[0]}.0, -${t[1]}.0);
          vec2 curUV;
          vec4 curCd;
          vec4 blurCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 1.0 + float(b)*${n};
            fade = (1.0-float(b+1)/float(blurCount+2));
            //fade = 1.- (1.-fade)*(1.-fade);
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curUV = min( vec2(1.), max( vec2(0.), curUV ));
              curCd = texture2D(${e},curUV);
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
        }`,s}function Wf(){let e=oe();return e+=`
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
        }`,e}function jf(e,t){let i=oe();return i+=`
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
      vec2 blurDir=normalize(blurDirCur);//+(vUv-.5)*2.0);`,t||(i+=`
        blurDir=normalize( blurDir + (noiseCd.gb-.5)*(dot(blurDir,noiseCd.gb)*.5+.5) );
      `),i+=`
      vec2 deltaDir=normalize(blurDirPrev);
      deltaDir.x+=sin((blurDir.x-deltaDir.x));
      deltaDir.y+=sin((blurDir.y-deltaDir.y));
      
      vec4 bloomAdd=vec4( directionalBlur(bloomCd.rgb, rDiffuse, vUv, blurDir, deltaDir, `+e.y+"*"+(t?"3.0":"5.0")+`*(1.5)*blurDist, .5)*(1.0+exposure*.4), 1.0);
      vec4 Cd= bloomAdd* ( 0.50+bloomCd)*exposure;//getTexture( rDiffuse ) + bloomAdd;//+ vec4( 1.0 ) * bloomCd + bloomAdd;
      //Cd.a=bloomAdd.a-bloomCd.a;
      
      Cd.a=1.0;
      gl_FragColor = Cd;
      
    }`,i}function Xf(){let e=oe();return e+=`
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
    }`,e}function qf(){let e=oe();return e+=`
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
    }`,e}function Yf(){let e=oe();return e+=`
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
    }`,e}function Qf(){let e=oe();return e+=`
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
    }`,e}function Zf(){let e=oe();return e+=`
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
        }`,e}function Kf(){let e=oe();return e+=`
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
    }`,e}function Jf(){let e=oe();return e+=`
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
    }`,e}function $f(){let e=oe();return e+=`
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
        }`,e}function ep(){let e=oe();return e+=`
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
        }`,e}var cu={};zt(cu,{bgScreenFrag:()=>ip,bgScreenVert:()=>tp,skyObjectFrag:()=>sp,skyObjectVert:()=>np});function tp(){let e=oe();return e+=`
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
    }`,e}function ip(){let e=oe();return e+=`
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
    }`,e}function np(){let e=oe();return e+=`
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
        
    }`,e}function sp(){let e=oe();return e+=`     
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
        
        vec2 nUv = ( vec2(vUv.x*0.40, vUv.y - t*.01) );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = ( nUv+noiseCd.rg*(noiseCd.b));
        //nUv.y *= .5;
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
            uvShift = mix(noiseCd.r, noiseCd.g, fract(noiseCd.b+float(s)*193.5247))*15.0;
            curUV = baseUV+vec2(0.0,resUV.y*-(dist+uvShift) );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = fitDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.0 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep;
            dist+=dist*dot(noiseCd.rgb, vec3(0.0,0.0,1.0));
        }
        reachDepth *= blend*stencil*3.0;
        
        vec3 normPos = normalize(vLocalPos);
        normPos.y = 1.0-min(1.0,(normPos.y)*2.0);
        normPos.y = normPos.y*normPos.y*normPos.y;
        depth = clamp(reachDepth+normPos.y, 0.0, 1.0);
        
        float blender = (sin(noiseCd.r*PI+t+uv.x)*.03)*max(0.0,1.0-depth);
        vec3 baseColor = (fogColor+blender);
        Cd.rgb = mix(Cd.rgb*1.5, baseColor, depth);
        
        gl_FragColor=Cd;
    }`,e}var rp={animated:ru,core:su,objects:ou,particles:au,rendering:lu,scene:cu};var PM="0.0.14";var op="pxlNav-coreCanvas";var ap,lp,uu=window.innerWidth,hu=window.innerHeight,cp=class{constructor(t,i,n,s,r){this._active=!1,this.options={loadList:["Cloud3d","SoftNoise","SmoothNoise","WarpAnimTexture"]},this.options=Object.assign(this.options,t);let o=Object.keys(this.options);Object.keys(Ys).forEach(l=>{o.includes(l)||(this.options[l]=Ys[l])}),this.verbose=this.options.verbose,this.projectTitle=i,this.startingRoom=s,r.includes(s)||r.push(s),this.roomBootList=r,this.callbacks={},this.uriHashParms=this.findHashParms(),this.mobile=this.isMobile(),this.autoCam=this.getHashParm("autoCam",!1),this.loadPercent=0,this.folderDict={assetRoot:"assets/",guiRoot:"assets/GUI/",roomRoot:"assets/rooms/",vidRoot:"assets/screenContent/"},this.validEvents={booted:"Emitted after the engine has fully booted and is ready to be addressed.",shaderEditorVis:"Returns a [bool]; Emitted when the shader editor is toggled on or off.","roomChange-Start":"Emitted when the room change transition begins.","roomChange-Middle":"Emitted when the room change process occurs mid transition.","roomChange-End":"Returns a [bool]; Emitted when the room change transition ends.",fromRoom:"Returns a custom object; Emitted from your Room code you choose to emit during run time.",pxlNavEventNameHere:"Never emitted; You did some copy'pasta.","":"** NOTE : callbacks get an event object shaped -  **","":"** { 'type' : *eventName*, 'value' : *data* } **","":"",help:"Hello! I'm here to help you!",pingPong:"Send 'ping', Get 'pong'! - pxlNav.trigger('ping');"},this.validEventsKeys=Object.keys(this.validEvents),this.loadEnvAssetFile=!0,this.pxlTimer=new co,this.pxlShaders=rp,this.pxlCookie=new lo(i,"/"),this.pxlCookie.hasCookie("forceMobile")&&(this.mobile=pxlCookie.parseCookie("forceMobile")),this.pxlQuality=new ao(this.verbose,this.mobile,this.uriHashParms),this.pxlUtils=new to(this.folderDict.assetRoot,this.mobile),this.pxlFile=new Mi(this.folderDict),this.pxlExtensions=new Ks,this.pxlAudio=new bo(this.pxlTimer),this.pxlAutoCam=new xo(this.autoCam,this.mobile),this.pxlAutoCam.active=!1,this.pxlUser=new uo,this.pxlEnv=new mo(this.options,this.startingRoom,n,this.verbose,this.mobile),this.pxlDevice=new ho(i,op,this.mobile,this.autoCam),this.pxlCamera=new vo,this.pxlAnim=new fo(this.folderDict.assetRoot,this.pxlTimer),this.pxlGuiDraws=new go(this.verbose,i,this.folderDict.assetRoot,this.folderDict.guiRoot),this.pxlQuality.setDependencies(this),this.pxlUtils.setDependencies(this),this.pxlFile.setDependencies(this),this.pxlAudio.setDependencies(this),this.pxlAutoCam.setDependencies(this),this.pxlEnv.setDependencies(this),this.pxlAnim.setDependencies(this),this.pxlDevice.setDependencies(this),this.pxlCamera.setDependencies(this),this.pxlGuiDraws.setDependencies(this),this.pxlGuiDraws.prepLoader(),this.pxlQuality.init()}set active(t=null){t==null&&(t=!this.pxlTimer.active),t==!0?(this.pxlTimer.play(),this.step(!1)):this.pxlTimer.stop()}get active(){return this.pxlTimer.active}start(){this.active=!0}stop(){this.active=!1}init(){this.pxlEnv.boot(),this.pxlQuality.startBenchmark(),this.buildGui().then(()=>{this.tickLoader(),this.bootEnvironment()}).then(()=>{this.tickLoader(),this.bootEngine()}).then(()=>{this.tickLoader(),this.pxlEnv.buildComposers(),this.cameraRunAnimatorMobile(this),this.pxlGuiDraws.stepLoader("postBoot"),this.pxlEnv.mapRender(),this.pxlDevice.setCursor("grab")}).catch(t=>{this.verbose>Hi.NONE&&(console.error("Error in pxlNavCore.init(); Load level - ",t),console.error(t))}).finally(()=>{this.verbose>Hi.ERROR&&console.log("pxlNavCore Promise Chain Completed; ",this.loadPercent),this.start()})}buildGui(){return new Promise((t,i)=>{this.pxlGuiDraws.booted(),this.pxlGuiDraws.pxlNavCanvas=document.getElementById(op),ap=window.innerWidth*this.pxlQuality.screenResPerc,this.pxlGuiDraws.pxlNavCanvas.width=window.innerWidth,lp=window.innerHeight*this.pxlQuality.screenResPerc,this.pxlGuiDraws.pxlNavCanvas.height=window.innerHeight,this.pxlDevice.canCursorLock&&(this.pxlGuiDraws.pxlNavCanvas.requestPointerLock=this.pxlGuiDraws.pxlNavCanvas.requestPointerLock||this.pxlGuiDraws.pxlNavCanvas.mozRequestPointerLock||this.pxlGuiDraws.pxlNavCanvas.webkitRequestPointerLock,document.requestPointerLock=this.pxlGuiDraws.pxlNavCanvas.exitPointerLock||this.pxlGuiDraws.pxlNavCanvas.mozExitPointerLock||this.pxlGuiDraws.pxlNavCanvas.webkitExitPointerLock),this.pxlGuiDraws.mapPrepPrompts(),t(!0)})}isMobile(){var t=!1;return t=/\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent),t=this.getHashParm("m",t),t}findHashParms(){var t={},i=window.location.hash;if(i.length>1){i=i.substring(1);for(var n=i.split("&"),s=0;s<n.length;s++){var r=n[s].split("=");t[r[0]]=r[1]}}return t}getHashParm(t,i){return Object.keys(this.uriHashParms).includes(t)?this.uriHashParms[t]:i}tickLoader(){this.loadPercent+=1}bootEngine(){return new Promise((t,i)=>{let n=[];for(let s=0;s<this.roomBootList.length;++s)n.push(this.pxlEnv.loadRoom(this.roomBootList[s]));Promise.all(n).then(()=>{t(!0)})})}bootEnvironment(){return new Promise((t,i)=>{this.pxlEnv.engine=new Ws({canvas:this.pxlGuiDraws.pxlNavCanvas,alpha:!0,antialias:!1,sortObjects:!0,depth:!0});var n={format:Ye,antialias:!1,sortObjects:!0,alpha:!0,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?nn:Wt};this.pxlEnv.engine.autoClear=!0,this.pxlEnv.engine.debug.checkShaderErrors=!1,this.pxlEnv.engine.debug.checkShaderErrors=!0,this.verbose>=Hi.INFO&&(this.pxlEnv.engine.extensions.get("WEBGL_depth_texture")?console.log("  ** WebGL Depth Texture support enabled **"):console.log("  ** WebGL Depth Texture NOT supported **"),console.log("-- Depth Composer pass currently not used, --"),console.log("  -- A future technology for Metal Asylum --"));let s=0,r="#000000";this.pxlEnv.engine.setClearColor(this.pxlEnv.fogColor,0),this.pxlEnv.engine.setSize(ap/this.pxlQuality.screenResPerc,lp/this.pxlQuality.screenResPerc),this.pxlEnv.engine.setPixelRatio(1),this.pxlEnv.engine.outputEncoding=$r,this.pxlEnv.engine.shadowMap.enabled=!0,this.pxlEnv.engine.shadowMap.type=Mc,this.pxlEnv.scene=new rn,this.pxlEnv.scene.fog=this.pxlEnv.fog,this.pxlEnv.scene.background=new $(r),this.pxlEnv.scene.renderTarget=new Je(uu*this.pxlQuality.screenResPerc,hu*this.pxlQuality.screenResPerc,n),this.pxlEnv.scene.renderTarget.texture.format=Ye,this.pxlEnv.scene.renderTarget.texture.minFilter=ke,this.pxlEnv.scene.renderTarget.texture.magFilter=ke,this.pxlEnv.scene.renderTarget.texture.generateMipmaps=!1,this.pxlEnv.scene.renderTarget.depthBuffer=!0,this.pxlEnv.scene.renderTarget.depthTexture=new an,this.pxlEnv.scene.renderTarget.depthTexture.format=Xt,this.pxlEnv.scene.renderTarget.depthTexture.type=fs,this.pxlEnv.scene.renderWorldPos=new Je(uu*this.pxlQuality.screenResPerc,hu*this.pxlQuality.screenResPerc,n),this.pxlEnv.scene.renderWorldPos.texture.format=Ye,this.pxlEnv.scene.renderWorldPos.texture.minFilter=it,this.pxlEnv.scene.renderWorldPos.texture.magFilter=it,this.pxlEnv.scene.renderWorldPos.texture.generateMipmaps=!1,n.alpha=!0,this.pxlEnv.scene.renderGlowTarget=new Je(parseInt(uu*this.pxlQuality.screenResPerc),parseInt(hu*this.pxlQuality.screenResPerc),n),this.pxlEnv.scene.renderGlowTarget.texture.format=Ye,this.pxlEnv.scene.renderGlowTarget.texture.generateMipmaps=!1;var o=this.pxlGuiDraws.pxlNavCanvas.width/this.pxlGuiDraws.pxlNavCanvas.height;if(this.pxlCamera.camera=new tt(this.pxlEnv.pxlCamFOV,1,this.pxlEnv.camNear,this.pxlEnv.camFar),this.pxlAutoCam.camera=this.pxlCamera.camera,this.pxlCamera.cameraAimTarget=new ne,this.pxlEnv.scene.add(this.pxlCamera.cameraAimTarget),this.pxlCamera.camera.target=this.pxlCamera.cameraAimTarget,this.pxlCamera.camera.layers.enable(1),this.pxlCamera.camera.layers.enable(2),this.pxlEnv.scene.add(this.pxlEnv.userAvatarGroup),this.options.loadList.includes("Cloud3d")&&(this.pxlEnv.cloud3dTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_Cloud3d.jpg"),this.pxlEnv.cloud3dTexture.wrapS=It,this.pxlEnv.cloud3dTexture.wrapT=It),this.options.loadList.includes("SoftNoise")&&(this.pxlEnv.softNoiseTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_Soft3d.jpg"),this.pxlEnv.softNoiseTexture.wrapS=It,this.pxlEnv.softNoiseTexture.wrapT=It),this.options.loadList.includes("SmoothNoise")&&(this.pxlEnv.detailNoiseTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_UniformSmooth.jpg"),this.pxlEnv.detailNoiseTexture.wrapS=It,this.pxlEnv.detailNoiseTexture.wrapT=It),this.options.loadList.includes("ChromaticAberration")){let d=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"uv_ChromaticAberration.png");d.minFilter=ke,d.magFilter=ke,this.pxlEnv.chroAberUVTexture=d}this.options.loadList.includes("WarpAnimTexture")&&(this.pxlEnv.blockAnimTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"uv_blockPortalWarp.jpg"),this.pxlEnv.blockAnimTexture.minFilter=ke,this.pxlEnv.blockAnimTexture.magFilter=ke),this.options.loadList.includes("MathFuncs")&&(this.pxlEnv.mathFuncsTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"MathFuncs.jpg"),this.pxlEnv.mathFuncsTexture.minFilter=ke,this.pxlEnv.mathFuncsTexture.magFilter=ke);var a,l,c=(d=null)=>{var p={t:[0,0,0],r:[0,0,0],s:[1,1,1]};return d!=null&&(p[d[0]]=d[1]),p};l=c();let h="";if(this.mobile&&(h="_mobile"),this.loadEnvAssetFile){let d=this.folderDict.assetRoot+"EnvironmentAssets.fbx";this.pxlFile.loadSceneFBX(d,a,l,this.verbose,"EnvironmentAssets",[this.pxlEnv.scene])}this.pxlEnv.engine.shadowMap.enabled=!0,this.mobile?this.pxlEnv.engine.shadowMap.type=Mc:this.pxlEnv.engine.shadowMap.type=Sc;var u=new kn(16777215,.05);this.pxlEnv.lightList.push(u),this.pxlEnv.scene.add(u);var f=new Fn(16777215,.1);f.position.set(1e3,550,1200),this.pxlEnv.lightList.push(f),this.pxlEnv.scene.add(f),t(!0)})}cameraRunAnimatorMobile(t){let i=!1,n=Object.keys(t.pxlEnv.geoLoadList);for(let s=0;s<n.length&&(i=t.pxlEnv.geoLoadList[n[s]]==0,i=i&&!t.pxlEnv.roomSceneList[s]?.booted,!i);++s);i?setTimeout(()=>{t.cameraRunAnimatorMobile(t)},300):t.initRoomList(t)}initRoomList(t){t.pxlGuiDraws.stepLoader("camAnim"),t.pxlCamera.setTransform(t.pxlEnv.camInitPos,t.pxlEnv.camInitLookAt),t.pxlCamera.updateCamera(),t.pxlEnv.buildRoomEnvironments(),t.monitorRoomLoad(t)}monitorRoomLoad(t,i=0){let n=!1,s=Object.keys(t.pxlEnv.geoLoadList);for(let r=0;r<s.length&&(n=t.pxlEnv.geoLoadList[s[r]]==0,n=n&&!t.pxlEnv.roomSceneList[r]?.booted,!n);++r);n?setTimeout(()=>{t.monitorRoomLoad(t)},300):(t.pxlQuality.mapAutoQualityUpdate(1,!0),t.runPrepDrawScenes(0,!0,[]))}runPrepDrawScenes(t=0,i=!0,n=[]){if(t++,n.length>0){if(i){i=!1;let s=n[n.length-1];this.pxlCamera.warpToRoom(s)}if(this.pxlCamera.colliderPrevObjHit=null,this.pxlEnv.mapRender(!1),t%10==0){let s=n.pop();i=!0,this.pxlGuiDraws.stepLoader(s)}requestAnimationFrame(()=>{this.runPrepDrawScenes(t,i,n)})}else this.pxlGuiDraws.stepLoader("Post Room Prep"),this.pxlNavPrepSettings()}pxlNavPrepSettings(){this.pxlCamera.warpToRoom(this.pxlEnv.bootRoom,!0),this.pxlQuality.endBenchmark(),this.pxlGuiDraws.stepLoader("Nav Settings"),this.startPxlNav()}startPxlNav(){this.pxlTimer.init(),this.pxlTimer.play(),this.pxlGuiDraws.applyCookies(),this.pxlGuiDraws.pxlNavCanvas&&this.pxlGuiDraws.pxlNavCanvas.focus();let t=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];t.active=!0,t.startTime=this.pxlTimer.msRunner.x,this.pxlEnv.roomPostGuiCalls.forEach(n=>{n.postGuiEvent()}),this.pxlEnv.roomPostGuiCalls=[],this.pxlAutoCam.enabled&&this.pxlGuiDraws.guiToggleVisibility(!1),this.pxlAutoCam.init(),this.pxlDevice.resizeRenderResolution(),this.pxlEnv.mapRender(),this.pxlQuality.setDependentSettings(),this.pxlGuiDraws.stepLoader("Starting...");let i=this;setTimeout(()=>{i.pxlEnv.postBoot(),i.pxlGuiDraws.mapPrompt&&i.pxlGuiDraws.promptFader(i.pxlGuiDraws.mapPrompt,!1,null,!0),i.pxlGuiDraws.mapPromptBG&&i.pxlGuiDraws.promptFader(i.pxlGuiDraws.mapPromptBG,!1,null,!1),i.emit("booted",!0)},200)}step(t=!1){this.pxlTimer.active&&(this.pxlTimer.step(),t&&requestAnimationFrame(()=>{this.step()}))}bootTimer(){this.pxlTimer.init(),this.pxlTimer.play()}stopTimer(){this.pxlTimer.stop()}pauseTimer(){this.pxlTimer.pause()}prepPromptFader(t,i=!1){let n=t;typeof n=="string"&&(n=document.getElementById(n),!n)||(n.classList.add("fader"),n.classList.add(i?"visOn":"visOff"),n.style.display=i?"inline-block":"none")}promptFader(t,i,n=null,s=!1){typeof t=="string"&&(t=document.getElementById(t),!t)||(t.classList.value.indexOf("fader")<0&&t.classList.add("fader"),i?(t.style.display="inline-block",setTimeout(()=>{t.classList.contains("visOff")&&(t.classList.remove("visOff"),t.classList.add("visOn"),n!=null&&(t.setAttribute("fadeOut",clockTime+n*1e3),fadeOutList.push(t)))},50)):(t.classList.remove("visOn"),t.classList.add("visOff"),s?["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"].forEach(o=>{t.addEventListener(o,()=>{let a=t.parentNode;a&&a.removeChild(t)})}):setTimeout(()=>{t.classList.contains("visOff")&&(t.style.display="none")},1e3)))}addRooms(t){for(let i=0;i<t.length;++i)this.pxlEnv.roomNameList.includes(t[i])||this.booted||this.roomBootList.push(t[i])}setBootRoom(t,i){console.log(t,i),this.pxlEnv.bootRoom=t,this.pxlEnv.bootLocation=i}setLoaderPhrases(t){this.pxlGuiDraws.setLoaderPhrases(t)}initExtension(t,i,n){this.pxlExtensions.init(t,i,n)}startExtension(t,i,n){this.pxlExtensions.start(t,i,n)}stopExtension(t,i,n){this.pxlExtensions.stop(t,i,n)}extensionStatus(t){return this.pxlExtensions.status(t)}trigger(t,i=null,n=null){switch(t=t.toLowerCase(),t){case"warptoroom":this.pxlCamera.warpToRoom(i,!0,n);break;case"ping":this.emit("pingPong","pong");break;case"roommessage":let s=n.type,r=n.value;i==null&&(i=this.pxlEnv.currentRoom),this.pxlEnv.sendRoomMessage(i,s,r);default:break}}subscribe(t,i){let n=!1;this.validEventsKeys.includes(t)?t=="pxlNavEventNameHere"||t=="help"||t=="test"?(console.warn("Warning : `pxlNav.subscribe( 'pxlNavEventNameHere', ... )` was used; need some help?"),console.log("Valid Event Types : "),this.validEventsKeys.forEach(s=>{console.log("  - ",s," : ",this.validEvents[s])})):this.callbacks[t]=i:console.warn("Warning : `pxlNav.subscribe( '"+t+"', ... )` was used; use 'help' for a list of valid events.")}emit(t,i,n=null){if(this.callbacks[t]){let s={type:t,value:i};n!==null&&(s.status=n),this.callbacks[t](s)}}};export{qs as ANTI_ALIASING,Ys as PXLNAV_OPTIONS,Hi as VERBOSE_LEVEL,cp as pxlNav,PM as pxlNavVersion};
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
