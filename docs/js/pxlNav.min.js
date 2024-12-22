var Zl=Object.create;var di=Object.defineProperty;var ql=Object.getOwnPropertyDescriptor;var en=Object.getOwnPropertyNames;var tn=Object.getPrototypeOf,sn=Object.prototype.hasOwnProperty;var Bt=r=>e=>{var t=r[e];if(t)return t();throw new Error("Module not found in bundle: "+e)};var k=(r,e)=>()=>(r&&(e=r(r=0)),e);var pt=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),U=(r,e)=>{for(var t in e)di(r,t,{get:e[t],enumerable:!0})},rn=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of en(e))!sn.call(r,s)&&s!==t&&di(r,s,{get:()=>e[s],enumerable:!(i=ql(e,s))||i.enumerable});return r};var We=(r,e,t)=>(t=r!=null?Zl(tn(r)):{},rn(e||!r||!r.__esModule?di(t,"default",{value:r,enumerable:!0}):t,r));var Zr={};U(Zr,{ANTI_ALIASING:()=>Ue,Color:()=>un,Euler:()=>nn,Matrix3:()=>an,Matrix4:()=>on,PXLNAV_OPTIONS:()=>Ie,Quaternion:()=>ln,SHADOW_MAP:()=>fi,SKY_HAZE:()=>ze,VERBOSE_LEVEL:()=>xe,Vector2:()=>K,Vector3:()=>te,Vector4:()=>mi,pxlEnums:()=>Ce});import*as le from"./three.module.js";var K,te,mi,an,on,ln,nn,un,xe,Ue,ze,fi,Ce,Ie,ue=k(()=>{K=le.Vector2,te=le.Vector3,mi=le.Vector4,an=le.Matrix3,on=le.Matrix4,ln=le.Quaternion,nn=le.Euler,un=le.Color,xe={NONE:0,ERROR:1,WARN:2,INFO:3},Ue={OFF:0,LOW:1,MEDIUM:2,HIGH:3},ze={OFF:0,VAPOR:1},fi={OFF:0,BASIC:1,SOFT:2},Ce={VERBOSE_LEVEL:xe,ANTI_ALIASING:Ue,SKY_HAZE:ze,SHADOW_MAP:fi},Ie={verbose:xe.NONE,pxlRoomRoot:"./pxlRooms",staticCamera:!1,autoCamera:!1,antiAliasing:Ue.LOW,shadowMapBiasing:fi.BASIC,LoadEnvAssetFile:!1,skyHaze:ze.OFF,loaderPhrases:["...loading the pixels..."]}});var qr={};U(qr,{Utils:()=>Ne});import*as Y from"./three.module.js";var Ne,vi=k(()=>{ue();Ne=class{constructor(e="images/assets/",t){this.assetRoot=e,this.mobile=t,this.pxlTimer=null,this.verboseLoading=!1,this.texLoader=new Y.ImageLoader,this.textLoaderArray=[],this.channelFormats=[Y.AlphaFormat,Y.RedFormat,Y.RGFormat,Y.RGBFormat,Y.RGBAFormat,Y.LuminanceFormat,Y.DepthFormat]}get curMS(){return this.pxlTimer.curMS}setDependencies(e){this.pxlTimer=e.pxlTimer}updateUrl(e,t={},i=""){window.history.replaceState?window.history.replaceState(t,i,e):window.history.pushState(t,i,e)}copyRoomUrl(){let e=window.location,t=document.activeElement,i=document.createElement("textarea");i.value=e,document.body.appendChild(i),i.focus(),i.select();let s=!1;try{s=document.execCommand("copy")?"successful":"unsuccessful"}catch{}return document.body.removeChild(i),t.focus(),s}checkInt(e){return e%1==0}degToRad(e){return e*(Math.PI/180)}toHundreths(e){if(!e)return 0;if(Number.isInteger(e))return e;{let t=(e+"").split(".");return parseFloat(t[0]+"."+t[1].substr(0,2))}}toTenths(e){if(!e)return 0;if(Number.isInteger(e))return e;{let t=(e+"").split(".");return parseFloat(t[0]+"."+t[1].substr(0,1))}}getDateTime(){let e=new Date,t=(e.getFullYear()+"").padStart(2,"0")+"-"+(e.getMonth()+1+"").padStart(2,"0")+"-"+(e.getDate()+"").padStart(2,"0"),i=(e.getHours()+"").padStart(2,"0")+":"+(e.getMinutes()+"").padStart(2,"0")+":"+(e.getSeconds()+"").padStart(2,"0");return[t,i]}cleanStrict(e){let t=document.createElement("div");t.innerHTML=e,t=t.innerText;let i=t.match(/([a-zA-Z0-9])\w+/g);return i&&(t=i.join(" ")),t}cleanBasic(e){let t=document.createElement("div");t.innerHTML=e,t=t.innerText;let i=t.match(/([a-zA-Z0-9\s\w-+()\[\]])+/g);return i&&(t=i.join("")),t}cleanString(e){let t=document.createElement("div");return t.innerHTML=e,t=t.innerText,t}randomFloat(e,t){return Math.random()*(t-e)+e}componentToHex(e){var t=e.toString(16);return t.padStart(2,"0")}rgbToHex(e,t,i){return"#"+this.componentToHex(Math.min(255,Math.max(0,Math.round(e))))+this.componentToHex(Math.min(255,Math.max(0,Math.round(t))))+this.componentToHex(Math.min(255,Math.max(0,Math.round(i))))}hexToRgb(e){e[0]=="#"?e=e.substr(1,6):e=e.substr(0,6);let i,s,a;return e.length==3?(i=e[0]+e[0],s=e[1]+e[1],a=e[2]+e[2]):(i=e[0]+e[1],s=e[2]+e[3],a=e[4]+e[5]),i=parseInt(i,16),s=parseInt(s,16),a=parseInt(a,16),[i,s,a]}stringToRgb(e,t=null,i=!1){let s=[255,0,0];if(e){let a=e.length,l="";for(let v=0;v<a;++v)l+=e[a-1-v].charCodeAt(0).toString(16);let n=l.length;if(n>6){let v=1;e=="tussin"?v=0:e=="fexofenadine"&&(v=-1);let p=Math.max(0,parseInt((n-6)/2+v));l=l.substr(p,6)}s=this.hexToRgb(l)}if(t!=null){let a=Math.max(...s),l=Math.min(...s),n=a*t;s[0]=parseInt(Math.min(255,(s[0]-l)/(a-l)*255+n)),s[1]=parseInt(Math.min(255,(s[1]-l)/(a-l)*255+n)),s[2]=parseInt(Math.min(255,(s[2]-l)/(a-l)*255+n))}return i==!0&&(s[0]=s[0]/255,s[1]=s[1]/255,s[2]=s[2]/255),s}randomizeArray(e){let t=[...e],i=[];for(;t.length>0;){let s=t.length==1?0:parseInt(Math.random()*21*t.length)%t.length;i.push(t.splice(s,1)[0])}return i}getRandom(e,t=1.14){let i=Math.floor(Math.random(t)*e.length);return e[i]}applyTransformList(e,t){var i=t.r;e.rotateX(i[0]),e.rotateY(i[1]),e.rotateZ(i[2]),typeof t.rOrder<"u"&&(e.rotation.order=t.rOrder);var s=t.t;e.position.set(s[0],s[1],s[2]);var a=t.s;e.scale.set(a[0],a[1],a[2]),e.matrixAutoUpdate=!1,e.updateMatrix()}vec2(e=null,t=null){return new K(e,t)}vec3(e=0,t=0,i=0){return new te(e,t,i)}loadTexture(e,t=null,i={}){if(typeof this.textLoaderArray[e]<"u")s=this.textLoaderArray[e];else{var s=new Y.Texture;this.texLoader.load(e,a=>{t!=null&&(s.format=this.channelFormats[t]),s.image=a,s.needsUpdate=!0,i.length>0&&Object.keys(i).forEach(n=>{s[n]=i[n]})}),this.textLoaderArray[e]=s}return s}getVideoTexture(e){let t=new Y.VideoTexture(e);return t.minFilter=Y.LinearFilter,t.magFilter=Y.LinearFilter,t.format=Y.RGBFormat,t}getCanvasTexture(e){let t=new Y.CanvasTexture(e),i=new Y.MeshBasicMaterial({map:t});return{texture:t,material:i}}}});var pa={};U(pa,{Zlib:()=>jt});function Ci(r,e){var t=r.split("."),i=hn;!(t[0]in i)&&i.execScript&&i.execScript("var "+t[0]);for(var s;t.length&&(s=t.shift());)!t.length&&e!==he?i[s]=e:i=i[s]?i[s]:i[s]={}}function He(r){var e=r.length,t=0,i=Number.POSITIVE_INFINITY,s,a,l,n,v,p,f,m,C,x;for(m=0;m<e;++m)r[m]>t&&(t=r[m]),r[m]<i&&(i=r[m]);for(s=1<<t,a=new(ee?Uint32Array:Array)(s),l=1,n=0,v=2;l<=t;){for(m=0;m<e;++m)if(r[m]===l){for(p=0,f=n,C=0;C<l;++C)p=p<<1|f&1,f>>=1;for(x=l<<16|m,C=p;C<s;C+=v)a[C]=x;++n}++l,n<<=1,v<<=1}return[a,t,i]}function Ae(r,e){switch(this.g=[],this.h=32768,this.d=this.f=this.a=this.l=0,this.input=ee?new Uint8Array(r):r,this.m=!1,this.i=Ft,this.r=!1,(e||!(e={}))&&(e.index&&(this.a=e.index),e.bufferSize&&(this.h=e.bufferSize),e.bufferType&&(this.i=e.bufferType),e.resize&&(this.r=e.resize)),this.i){case Si:this.b=32768,this.c=new(ee?Uint8Array:Array)(32768+this.h+258);break;case Ft:this.b=0,this.c=new(ee?Uint8Array:Array)(this.h),this.e=this.z,this.n=this.v,this.j=this.w;break;default:throw Error("invalid inflate mode")}}function pe(r,e){for(var t=r.f,i=r.d,s=r.input,a=r.a,l=s.length,n;i<e;){if(a>=l)throw Error("input buffer is broken");t|=s[a++]<<i,i+=8}return n=t&(1<<e)-1,r.f=t>>>e,r.d=i-e,r.a=a,n}function vt(r,e){for(var t=r.f,i=r.d,s=r.input,a=r.a,l=s.length,n=e[0],v=e[1],p,f;i<v&&!(a>=l);)t|=s[a++]<<i,i+=8;if(p=n[t&(1<<v)-1],f=p>>>16,f>i)throw Error("invalid code length: "+f);return r.f=t>>f,r.d=i-f,r.a=a,p&65535}function Pi(r,e){var t,i;switch(this.input=r,this.a=0,(e||!(e={}))&&(e.index&&(this.a=e.index),e.verify&&(this.A=e.verify)),t=r[this.a++],i=r[this.a++],t&15){case na:this.method=na;break;default:throw Error("unsupported compression method")}if(((t<<8)+i)%31!==0)throw Error("invalid fcheck flag:"+((t<<8)+i)%31);if(i&32)throw Error("fdict flag is not supported");this.q=new Ae(r,{index:this.a,bufferSize:e.bufferSize,bufferType:e.bufferType,resize:e.resize})}var ha,he,hn,ee,Si,Ft,ea,ta,gi,ia,ca,sa,Vt,ra,da,aa,_t,xi,Be,oa,cn,yi,Ht,la,dn,na,bi,mt,ft,Qe,ua,jt,wi=k(()=>{ha={},he=void 0,hn=ha;ee=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u"&&typeof DataView<"u";Si=0,Ft=1,ea={t:Si,s:Ft};Ae.prototype.k=function(){for(;!this.m;){var r=pe(this,3);switch(r&1&&(this.m=!0),r>>>=1,r){case 0:var e=this.input,t=this.a,i=this.c,s=this.b,a=e.length,l=he,n=he,v=i.length,p=he;if(this.d=this.f=0,t+1>=a)throw Error("invalid uncompressed block header: LEN");if(l=e[t++]|e[t++]<<8,t+1>=a)throw Error("invalid uncompressed block header: NLEN");if(n=e[t++]|e[t++]<<8,l===~n)throw Error("invalid uncompressed block header: length verify");if(t+l>e.length)throw Error("input buffer is broken");switch(this.i){case Si:for(;s+l>i.length;){if(p=v-s,l-=p,ee)i.set(e.subarray(t,t+p),s),s+=p,t+=p;else for(;p--;)i[s++]=e[t++];this.b=s,i=this.e(),s=this.b}break;case Ft:for(;s+l>i.length;)i=this.e({p:2});break;default:throw Error("invalid inflate mode")}if(ee)i.set(e.subarray(t,t+l),s),s+=l,t+=l;else for(;l--;)i[s++]=e[t++];this.a=t,this.b=s,this.c=i;break;case 1:this.j(cn,dn);break;case 2:for(var f=pe(this,5)+257,m=pe(this,5)+1,C=pe(this,4)+4,x=new(ee?Uint8Array:Array)(gi.length),g=he,S=he,b=he,P=he,E=he,R=he,T=he,V=he,B=he,V=0;V<C;++V)x[gi[V]]=pe(this,3);if(!ee)for(V=C,C=x.length;V<C;++V)x[gi[V]]=0;for(g=He(x),P=new(ee?Uint8Array:Array)(f+m),V=0,B=f+m;V<B;)switch(E=vt(this,g),E){case 16:for(T=3+pe(this,2);T--;)P[V++]=R;break;case 17:for(T=3+pe(this,3);T--;)P[V++]=0;R=0;break;case 18:for(T=11+pe(this,7);T--;)P[V++]=0;R=0;break;default:R=P[V++]=E}S=He(ee?P.subarray(0,f):P.slice(0,f)),b=He(ee?P.subarray(f):P.slice(f)),this.j(S,b);break;default:throw Error("unknown BTYPE: "+r)}}return this.n()};ta=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],gi=ee?new Uint16Array(ta):ta,ia=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],ca=ee?new Uint16Array(ia):ia,sa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Vt=ee?new Uint8Array(sa):sa,ra=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],da=ee?new Uint16Array(ra):ra,aa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],_t=ee?new Uint8Array(aa):aa,xi=new(ee?Uint8Array:Array)(288);Be=0;for(oa=xi.length;Be<oa;++Be)xi[Be]=143>=Be?8:255>=Be?9:279>=Be?7:8;cn=He(xi),yi=new(ee?Uint8Array:Array)(30);Ht=0;for(la=yi.length;Ht<la;++Ht)yi[Ht]=5;dn=He(yi);Ae.prototype.j=function(r,e){var t=this.c,i=this.b;this.o=r;for(var s=t.length-258,a,l,n,v;(a=vt(this,r))!==256;)if(256>a)i>=s&&(this.b=i,t=this.e(),i=this.b),t[i++]=a;else for(l=a-257,v=ca[l],0<Vt[l]&&(v+=pe(this,Vt[l])),a=vt(this,e),n=da[a],0<_t[a]&&(n+=pe(this,_t[a])),i>=s&&(this.b=i,t=this.e(),i=this.b);v--;)t[i]=t[i++-n];for(;8<=this.d;)this.d-=8,this.a--;this.b=i};Ae.prototype.w=function(r,e){var t=this.c,i=this.b;this.o=r;for(var s=t.length,a,l,n,v;(a=vt(this,r))!==256;)if(256>a)i>=s&&(t=this.e(),s=t.length),t[i++]=a;else for(l=a-257,v=ca[l],0<Vt[l]&&(v+=pe(this,Vt[l])),a=vt(this,e),n=da[a],0<_t[a]&&(n+=pe(this,_t[a])),i+v>s&&(t=this.e(),s=t.length);v--;)t[i]=t[i++-n];for(;8<=this.d;)this.d-=8,this.a--;this.b=i};Ae.prototype.e=function(){var r=new(ee?Uint8Array:Array)(this.b-32768),e=this.b-32768,t,i,s=this.c;if(ee)r.set(s.subarray(32768,r.length));else for(t=0,i=r.length;t<i;++t)r[t]=s[t+32768];if(this.g.push(r),this.l+=r.length,ee)s.set(s.subarray(e,e+32768));else for(t=0;32768>t;++t)s[t]=s[e+t];return this.b=32768,s};Ae.prototype.z=function(r){var e,t=this.input.length/this.a+1|0,i,s,a,l=this.input,n=this.c;return r&&(typeof r.p=="number"&&(t=r.p),typeof r.u=="number"&&(t+=r.u)),2>t?(i=(l.length-this.a)/this.o[2],a=258*(i/2)|0,s=a<n.length?n.length+a:n.length<<1):s=n.length*t,ee?(e=new Uint8Array(s),e.set(n)):e=n,this.c=e};Ae.prototype.n=function(){var r=0,e=this.c,t=this.g,i,s=new(ee?Uint8Array:Array)(this.l+(this.b-32768)),a,l,n,v;if(t.length===0)return ee?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);for(a=0,l=t.length;a<l;++a)for(i=t[a],n=0,v=i.length;n<v;++n)s[r++]=i[n];for(a=32768,l=this.b;a<l;++a)s[r++]=e[a];return this.g=[],this.buffer=s};Ae.prototype.v=function(){var r,e=this.b;return ee?this.r?(r=new Uint8Array(e),r.set(this.c.subarray(0,e))):r=this.c.subarray(0,e):(this.c.length>e&&(this.c.length=e),r=this.c),this.buffer=r};Pi.prototype.k=function(){var r=this.input,e,t;if(e=this.q.k(),this.a=this.q.a,this.A){t=(r[this.a++]<<24|r[this.a++]<<16|r[this.a++]<<8|r[this.a++])>>>0;var i=e;if(typeof i=="string"){var s=i.split(""),a,l;for(a=0,l=s.length;a<l;a++)s[a]=(s[a].charCodeAt(0)&255)>>>0;i=s}for(var n=1,v=0,p=i.length,f,m=0;0<p;){f=1024<p?1024:p,p-=f;do n+=i[m++],v+=n;while(--f);n%=65521,v%=65521}if(t!==(v<<16|n)>>>0)throw Error("invalid adler-32 checksum")}return e};na=8;Ci("Zlib.Inflate",Pi);Ci("Zlib.Inflate.prototype.decompress",Pi.prototype.k);bi={ADAPTIVE:ea.s,BLOCK:ea.t};if(Object.keys)mt=Object.keys(bi);else for(ft in mt=[],Qe=0,bi)mt[Qe++]=ft;Qe=0;for(ua=mt.length;Qe<ua;++Qe)ft=mt[Qe],Ci("Zlib.Inflate.BufferType."+ft,bi[ft]);jt=ha.Zlib});var ma={};U(ma,{NURBSUtils:()=>Gt});import{Vector3 as pn,Vector4 as Ot}from"./three.module.js";var Gt,Ei=k(()=>{Gt={findSpan:function(r,e,t){var i=t.length-r-1;if(e>=t[i])return i-1;if(e<=t[r])return r;for(var s=r,a=i,l=Math.floor((s+a)/2);e<t[l]||e>=t[l+1];)e<t[l]?a=l:s=l,l=Math.floor((s+a)/2);return l},calcBasisFunctions:function(r,e,t,i){var s=[],a=[],l=[];s[0]=1;for(var n=1;n<=t;++n){a[n]=e-i[r+1-n],l[n]=i[r+n]-e;for(var v=0,p=0;p<n;++p){var f=l[p+1],m=a[n-p],C=s[p]/(f+m);s[p]=v+f*C,v=m*C}s[n]=v}return s},calcBSplinePoint:function(r,e,t,i){for(var s=this.findSpan(r,i,e),a=this.calcBasisFunctions(s,i,r,e),l=new Ot(0,0,0,0),n=0;n<=r;++n){var v=t[s-r+n],p=a[n],f=v.w*p;l.x+=v.x*f,l.y+=v.y*f,l.z+=v.z*f,l.w+=v.w*p}return l},calcBasisFunctionDerivatives:function(r,e,t,i,s){for(var a=[],l=0;l<=t;++l)a[l]=0;for(var n=[],l=0;l<=i;++l)n[l]=a.slice(0);for(var v=[],l=0;l<=t;++l)v[l]=a.slice(0);v[0][0]=1;for(var p=a.slice(0),f=a.slice(0),m=1;m<=t;++m){p[m]=e-s[r+1-m],f[m]=s[r+m]-e;for(var C=0,z=0;z<m;++z){var x=f[z+1],g=p[m-z];v[m][z]=x+g;var S=v[z][m-1]/v[m][z];v[z][m]=C+x*S,C=g*S}v[m][m]=C}for(var m=0;m<=t;++m)n[0][m]=v[m][t];for(var z=0;z<=t;++z){for(var b=0,P=1,E=[],l=0;l<=t;++l)E[l]=a.slice(0);E[0][0]=1;for(var R=1;R<=i;++R){var T=0,B=z-R,V=t-R;z>=R&&(E[P][0]=E[b][0]/v[V+1][B],T=E[P][0]*v[B][V]);for(var Q=B>=-1?1:-B,$=z-1<=V?R-1:t-z,m=Q;m<=$;++m)E[P][m]=(E[b][m]-E[b][m-1])/v[V+1][B+m],T+=E[P][m]*v[B+m][V];z<=V&&(E[P][R]=-E[b][R-1]/v[V+1][z],T+=E[P][R]*v[z][V]),n[R][z]=T;var m=b;b=P,P=m}}for(var z=t,R=1;R<=i;++R){for(var m=0;m<=t;++m)n[R][m]*=z;z*=t-R}return n},calcBSplineDerivatives:function(r,e,t,i,s){for(var a=s<r?s:r,l=[],n=this.findSpan(r,i,e),v=this.calcBasisFunctionDerivatives(n,i,r,a,e),p=[],f=0;f<t.length;++f){var m=t[f].clone(),C=m.w;m.x*=C,m.y*=C,m.z*=C,p[f]=m}for(var x=0;x<=a;++x){for(var m=p[n-r].clone().multiplyScalar(v[x][0]),g=1;g<=r;++g)m.add(p[n-r+g].clone().multiplyScalar(v[x][g]));l[x]=m}for(var x=a+1;x<=s+1;++x)l[x]=new Ot(0,0,0);return l},calcKoverI:function(r,e){for(var t=1,i=2;i<=r;++i)t*=i;for(var s=1,i=2;i<=e;++i)s*=i;for(var i=2;i<=r-e;++i)s*=i;return t/s},calcRationalCurveDerivatives:function(r){for(var e=r.length,t=[],i=[],s=0;s<e;++s){var a=r[s];t[s]=new pn(a.x,a.y,a.z),i[s]=a.w}for(var l=[],n=0;n<e;++n){for(var v=t[n].clone(),s=1;s<=n;++s)v.sub(l[n-s].clone().multiplyScalar(this.calcKoverI(n,s)*i[s]));l[n]=v.divideScalar(i[0])}return l},calcNURBSDerivatives:function(r,e,t,i,s){var a=this.calcBSplineDerivatives(r,e,t,i,s);return this.calcRationalCurveDerivatives(a)},calcSurfacePoint:function(r,e,t,i,s,a,l,n){for(var v=this.findSpan(r,a,t),p=this.findSpan(e,l,i),f=this.calcBasisFunctions(v,a,r,t),m=this.calcBasisFunctions(p,l,e,i),C=[],x=0;x<=e;++x){C[x]=new Ot(0,0,0,0);for(var g=0;g<=r;++g){var S=s[v-r+g][p-e+x].clone(),b=S.w;S.x*=b,S.y*=b,S.z*=b,C[x].add(S.multiplyScalar(f[g]))}}for(var P=new Ot(0,0,0,0),x=0;x<=e;++x)P.add(C[x].multiplyScalar(m[x]));P.divideScalar(P.w),n.set(P.x,P.y,P.z)}}});var ga={};U(ga,{NURBSCurve:()=>Se});import{Curve as fa,Vector3 as va,Vector4 as mn}from"./three.module.js";var Se,Di=k(()=>{Ei();Se=function(r,e,t,i,s){fa.call(this),this.degree=r,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(var a=0;a<t.length;++a){var l=t[a];this.controlPoints[a]=new mn(l.x,l.y,l.z,l.w)}};Se.prototype=Object.create(fa.prototype);Se.prototype.constructor=Se;Se.prototype.getPoint=function(r,e){var t=e||new va,i=this.knots[this.startKnot]+r*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Gt.calcBSplinePoint(this.degree,this.knots,this.controlPoints,i);return s.w!=1&&s.divideScalar(s.w),t.set(s.x,s.y,s.z)};Se.prototype.getTangent=function(r,e){var t=e||new va,i=this.knots[0]+r*(this.knots[this.knots.length-1]-this.knots[0]),s=Gt.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,i,1);return t.copy(s[1]).normalize(),t}});var Ea={};U(Ea,{FBXLoader:()=>Xe});import{AmbientLight as fn,AnimationClip as vn,Bone as xa,BufferAttribute as gn,BufferGeometry as Wt,ClampToEdgeWrapping as ya,Color as Re,DirectionalLight as xn,EquirectangularReflectionMapping as yn,Euler as gt,FileLoader as bn,Float32BufferAttribute as Ke,Group as ba,Line as Cn,LineBasicMaterial as Sn,Loader as Ca,LoaderUtils as Ti,MathUtils as ye,Matrix3 as Pn,Matrix4 as Z,Mesh as wn,MeshLambertMaterial as En,MeshPhongMaterial as Mi,NumberKeyframeTrack as Dn,Object3D as Ai,OrthographicCamera as Tn,PerspectiveCamera as Mn,PointLight as Sa,PropertyBinding as zt,Quaternion as Nt,QuaternionKeyframeTrack as An,RepeatWrapping as Pa,Skeleton as Rn,SkinnedMesh as Ln,SpotLight as kn,Texture as wa,TextureLoader as Un,Uint16BufferAttribute as In,Vector3 as Qt,Vector4 as Bn,VectorKeyframeTrack as Hn,sRGBEncoding as Kt}from"./three.module.js";var Xe,Ri=k(()=>{wi();Di();Xe=function(){var r,e,t;function i(o){Ca.call(this,o)}i.prototype=Object.assign(Object.create(Ca.prototype),{constructor:i,load:function(o,u,h,d){var c=this,y=c.path===""?Ti.extractUrlBase(o):c.path,w=new bn(this.manager);w.setPath(c.path),w.setResponseType("arraybuffer"),w.load(o,function(D){try{u(c.parse(D,y))}catch(L){setTimeout(function(){d&&d(L),c.manager.itemError(o)},0)}},h,d)},parse:function(o,u){if(m(o))r=new v().parse(o);else{var h=V(o);if(!C(h))throw new Error("THREE.FBXLoader: Unknown format.");if(x(h)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+x(h));r=new n().parse(h)}var d=new Un(this.manager).setPath(this.resourcePath||u).setCrossOrigin(this.crossOrigin);return new s(d,this.manager).parse(r)}});function s(o,u){this.textureLoader=o,this.manager=u}s.prototype={constructor:s,parse:function(){e=this.parseConnections();var o=this.parseImages(),u=this.parseTextures(o),h=this.parseMaterials(u),d=this.parseDeformers(),c=new a().parse(d);return this.parseScene(d,c,h),t},parseConnections:function(){var o=new Map;if("Connections"in r){var u=r.Connections.connections;u.forEach(function(h){var d=h[0],c=h[1],y=h[2];o.has(d)||o.set(d,{parents:[],children:[]});var w={ID:c,relationship:y};o.get(d).parents.push(w),o.has(c)||o.set(c,{parents:[],children:[]});var D={ID:d,relationship:y};o.get(c).children.push(D)})}return o},parseImages:function(){var o={},u={};if("Video"in r.Objects){var h=r.Objects.Video;for(var d in h){var c=h[d],y=parseInt(d);if(o[y]=c.RelativeFilename||c.Filename,"Content"in c){var w=c.Content instanceof ArrayBuffer&&c.Content.byteLength>0,D=typeof c.Content=="string"&&c.Content!=="";if(w||D){var L=this.parseImage(h[d]);u[c.RelativeFilename||c.Filename]=L}}}}for(var y in o){var H=o[y];u[H]!==void 0?o[y]=u[H]:o[y]=o[y].split("\\").pop()}return o},parseImage:function(o){var u=o.Content,h=o.RelativeFilename||o.Filename,d=h.slice(h.lastIndexOf(".")+1).toLowerCase(),c;switch(d){case"bmp":c="image/bmp";break;case"jpg":case"jpeg":c="image/jpeg";break;case"png":c="image/png";break;case"tif":c="image  iff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",h),c="image  ga";break;default:console.warn('FBXLoader: Image type "'+d+'" is not supported.');return}if(typeof u=="string")return"data:"+c+";base64,"+u;var y=new Uint8Array(u);return window.URL.createObjectURL(new Blob([y],{type:c}))},parseTextures:function(o){var u=new Map;if("Texture"in r.Objects){var h=r.Objects.Texture;for(var d in h){var c=this.parseTexture(h[d],o);u.set(parseInt(d),c)}}return u},parseTexture:function(o,u){var h=this.loadTexture(o,u);h.ID=o.id,h.name=o.attrName;var d=o.WrapModeU,c=o.WrapModeV,y=d!==void 0?d.value:0,w=c!==void 0?c.value:0;if(h.wrapS=y===0?Pa:ya,h.wrapT=w===0?Pa:ya,"Scaling"in o){var D=o.Scaling.value;h.repeat.x=D[0],h.repeat.y=D[1]}return h},loadTexture:function(o,u){var h,d=this.textureLoader.path,c=e.get(o.id).children;c!==void 0&&c.length>0&&u[c[0].ID]!==void 0&&(h=u[c[0].ID],(h.indexOf("blob:")===0||h.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));var y,w=o.FileName.slice(-3).toLowerCase();if(w==="tga"){var D=this.manager.getHandler(".tga");D===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",o.RelativeFilename),y=new wa):y=D.load(h)}else w==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",o.RelativeFilename),y=new wa):y=this.textureLoader.load(h);return this.textureLoader.setPath(d),y},parseMaterials:function(o){var u=new Map;if("Material"in r.Objects){var h=r.Objects.Material;for(var d in h){var c=this.parseMaterial(h[d],o);c!==null&&u.set(parseInt(d),c)}}return u},parseMaterial:function(o,u){var h=o.id,d=o.attrName,c=o.ShadingModel;if(typeof c=="object"&&(c=c.value),!e.has(h))return null;var y=this.parseParameters(o,u,h),w;switch(c.toLowerCase()){case"phong":w=new Mi;break;case"lambert":w=new En;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',c),w=new Mi;break}return w.setValues(y),w.name=d,w},parseParameters:function(o,u,h){var d={};o.BumpFactor&&(d.bumpScale=o.BumpFactor.value),o.Diffuse?d.color=new Re().fromArray(o.Diffuse.value):o.DiffuseColor&&o.DiffuseColor.type==="Color"&&(d.color=new Re().fromArray(o.DiffuseColor.value)),o.DisplacementFactor&&(d.displacementScale=o.DisplacementFactor.value),o.Emissive?d.emissive=new Re().fromArray(o.Emissive.value):o.EmissiveColor&&o.EmissiveColor.type==="Color"&&(d.emissive=new Re().fromArray(o.EmissiveColor.value)),o.EmissiveFactor&&(d.emissiveIntensity=parseFloat(o.EmissiveFactor.value)),o.Opacity&&(d.opacity=parseFloat(o.Opacity.value)),d.opacity<1&&(d.transparent=!0),o.ReflectionFactor&&(d.reflectivity=o.ReflectionFactor.value),o.Shininess&&(d.shininess=o.Shininess.value),o.Specular?d.specular=new Re().fromArray(o.Specular.value):o.SpecularColor&&o.SpecularColor.type==="Color"&&(d.specular=new Re().fromArray(o.SpecularColor.value));var c=this;return e.get(h).children.forEach(function(y){var w=y.relationship;switch(w){case"Bump":d.bumpMap=c.getTexture(u,y.ID);break;case"Maya|TEX_ao_map":d.aoMap=c.getTexture(u,y.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":d.map=c.getTexture(u,y.ID),d.map.encoding=Kt;break;case"DisplacementColor":d.displacementMap=c.getTexture(u,y.ID);break;case"AmbientColor":case"EmissiveColor":d.emissiveMap=c.getTexture(u,y.ID),d.emissiveMap.encoding=Kt;break;case"NormalMap":case"Maya|TEX_normal_map":d.normalMap=c.getTexture(u,y.ID);break;case"ReflectionColor":d.envMap=c.getTexture(u,y.ID),d.envMap.mapping=yn,d.envMap.encoding=Kt;break;case"SpecularColor":d.specularMap=c.getTexture(u,y.ID),d.specularMap.encoding=Kt;break;case"TransparentColor":case"TransparencyFactor":d.alphaMap=c.getTexture(u,y.ID),d.transparent=!0;break;case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",w);break}}),d},getTexture:function(o,u){return"LayeredTexture"in r.Objects&&u in r.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),u=e.get(u).children[0].ID),o.get(u)},parseDeformers:function(){var o={},u={};if("Deformer"in r.Objects){var h=r.Objects.Deformer;for(var d in h){var c=h[d],y=e.get(parseInt(d));if(c.attrType==="Skin"){var w=this.parseSkeleton(y,h);w.ID=d,y.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),w.geometryID=y.parents[0].ID,o[d]=w}else if(c.attrType==="BlendShape"){var D={id:d};D.rawTargets=this.parseMorphTargets(y,h),D.id=d,y.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),u[d]=D}}}return{skeletons:o,morphTargets:u}},parseSkeleton:function(o,u){var h=[];return o.children.forEach(function(d){var c=u[d.ID];if(c.attrType==="Cluster"){var y={ID:d.ID,indices:[],weights:[],transformLink:new Z().fromArray(c.TransformLink.a)};"Indexes"in c&&(y.indices=c.Indexes.a,y.weights=c.Weights.a),h.push(y)}}),{rawBones:h,bones:[]}},parseMorphTargets:function(o,u){for(var h=[],d=0;d<o.children.length;d++){var c=o.children[d],y=u[c.ID],w={name:y.attrName,initialWeight:y.DeformPercent,id:y.id,fullWeights:y.FullWeights.a};if(y.attrType!=="BlendShapeChannel")return;w.geoID=e.get(parseInt(c.ID)).children.filter(function(D){return D.relationship===void 0})[0].ID,h.push(w)}return h},parseScene:function(o,u,h){t=new ba;var d=this.parseModels(o.skeletons,u,h),c=r.Objects.Model,y=this;d.forEach(function(D){var L=c[D.ID];y.setLookAtProperties(D,L);var H=e.get(D.ID).parents;H.forEach(function(M){var j=d.get(M.ID);j!==void 0&&j.add(D)}),D.parent===null&&t.add(D)}),this.bindSkeleton(o.skeletons,u,d),this.createAmbientLight(),this.setupMorphMaterials(),t.traverse(function(D){if(D.userData.transformData){D.parent&&(D.userData.transformData.parentMatrixWorld=D.parent.matrix);var L=R(D.userData.transformData);D.applyMatrix4(L)}});var w=new l().parse();t.children.length===1&&t.children[0].isGroup&&(t.children[0].animations=w,t=t.children[0]),t.animations=w},parseModels:function(o,u,h){var d=new Map,c=r.Objects.Model,y=["Culling","DefaultAttributeIndex","InheritType","Lcl_Translation","Lcl_Rotation","Lcl_Scaling","RotationPivot","ScalingPivot","RotationActive","ScalingMax","RotationOffset","fbx_node_path","Shading","Version","attrName","attrType","currentUVSet","id","name","propertyList","singleProperty"];for(var w in c){var D=parseInt(w),L=c[w],H=e.get(D),M=this.buildSkeleton(H,o,D,L.attrName);if(!M){switch(L.attrType){case"Camera":M=this.createCamera(H);break;case"Light":M=this.createLight(H);break;case"Mesh":M=this.createMesh(H,u,h);break;case"NurbsCurve":M=this.createCurve(H,u);break;case"LimbNode":case"Root":M=new xa;break;case"Null":default:M=new ba;break}M.name=L.attrName?zt.sanitizeNodeName(L.attrName):"",M.ID=D}Object.keys(L).forEach(O=>{y.includes(O)||(M.userData[O]=L[O].value)}),this.getTransformData(M,L),d.set(D,M)}return d},buildSkeleton:function(o,u,h,d){var c=null;return o.parents.forEach(function(y){for(var w in u){var D=u[w];D.rawBones.forEach(function(L,H){if(L.ID===y.ID){var M=c;c=new xa,c.matrixWorld.copy(L.transformLink),c.name=d?zt.sanitizeNodeName(d):"",c.ID=h,D.bones[H]=c,M!==null&&c.add(M)}})}}),c},createCamera:function(o){var u,h;if(o.children.forEach(function(j){var O=r.Objects.NodeAttribute[j.ID];O!==void 0&&(h=O)}),h===void 0)u=new Ai;else{var d=0;h.CameraProjectionType!==void 0&&h.CameraProjectionType.value===1&&(d=1);var c=1;h.NearPlane!==void 0&&(c=h.NearPlane.value/1e3);var y=1e3;h.FarPlane!==void 0&&(y=h.FarPlane.value/1e3);var w=window.innerWidth,D=window.innerHeight;h.AspectWidth!==void 0&&h.AspectHeight!==void 0&&(w=h.AspectWidth.value,D=h.AspectHeight.value);var L=w/D,H=45;h.FieldOfView!==void 0&&(H=h.FieldOfView.value);var M=h.FocalLength?h.FocalLength.value:null;switch(d){case 0:u=new Mn(H,L,c,y),M!==null&&u.setFocalLength(M);break;case 1:u=new Tn(-w/2,w/2,D/2,-D/2,c,y);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+d+"."),u=new Ai;break}}return u},createLight:function(o){var u,h;if(o.children.forEach(function(M){var j=r.Objects.NodeAttribute[M.ID];j!==void 0&&(h=j)}),h===void 0)u=new Ai;else{var d;h.LightType===void 0?d=0:d=h.LightType.value;var c=16777215;h.Color!==void 0&&(c=new Re().fromArray(h.Color.value));var y=h.Intensity===void 0?1:h.Intensity.value/100;h.CastLightOnObject!==void 0&&h.CastLightOnObject.value===0&&(y=0);var w=0;h.FarAttenuationEnd!==void 0&&(h.EnableFarAttenuation!==void 0&&h.EnableFarAttenuation.value===0?w=0:w=h.FarAttenuationEnd.value);var D=1;switch(d){case 0:u=new Sa(c,y,w,D);break;case 1:u=new xn(c,y);break;case 2:var L=Math.PI/3;h.InnerAngle!==void 0&&(L=ye.degToRad(h.InnerAngle.value));var H=0;h.OuterAngle!==void 0&&(H=ye.degToRad(h.OuterAngle.value),H=Math.max(H,1)),u=new kn(c,y,w,L,H,D);break;default:console.warn("THREE.FBXLoader: Unknown light type "+h.LightType.value+", defaulting to a PointLight."),u=new Sa(c,y);break}h.CastShadows!==void 0&&h.CastShadows.value===1&&(u.castShadow=!0)}return u},createMesh:function(o,u,h){var d,c=null,y=null,w=[];return o.children.forEach(function(D){u.has(D.ID)&&(c=u.get(D.ID)),h.has(D.ID)&&w.push(h.get(D.ID))}),w.length>1?y=w:w.length>0?y=w[0]:(y=new Mi({color:13421772}),w.push(y)),"color"in c.attributes&&w.forEach(function(D){D.vertexColors=!0}),c.FBX_Deformer?(w.forEach(function(D){D.skinning=!0}),d=new Ln(c,y),d.normalizeSkinWeights()):d=new wn(c,y),d},createCurve:function(o,u){var h=o.children.reduce(function(c,y){return u.has(y.ID)&&(c=u.get(y.ID)),c},null),d=new Sn({color:3342591,linewidth:1});return new Cn(h,d)},getTransformData:function(o,u){var h={};"InheritType"in u&&(h.inheritType=parseInt(u.InheritType.value)),"RotationOrder"in u?h.eulerOrder=T(u.RotationOrder.value):h.eulerOrder="ZYX","Lcl_Translation"in u&&(h.translation=u.Lcl_Translation.value),"PreRotation"in u&&(h.preRotation=u.PreRotation.value),"Lcl_Rotation"in u&&(h.rotation=u.Lcl_Rotation.value),"PostRotation"in u&&(h.postRotation=u.PostRotation.value),"Lcl_Scaling"in u&&(h.scale=u.Lcl_Scaling.value),"ScalingOffset"in u&&(h.scalingOffset=u.ScalingOffset.value),"ScalingPivot"in u&&(h.scalingPivot=u.ScalingPivot.value),"RotationOffset"in u&&(h.rotationOffset=u.RotationOffset.value),"RotationPivot"in u&&(h.rotationPivot=u.RotationPivot.value),o.userData.transformData=h},setLookAtProperties:function(o,u){if("LookAtProperty"in u){var h=e.get(o.ID).children;h.forEach(function(d){if(d.relationship==="LookAtProperty"){var c=r.Objects.Model[d.ID];if("Lcl_Translation"in c){var y=c.Lcl_Translation.value;o.target!==void 0?(o.target.position.fromArray(y),t.add(o.target)):o.lookAt(new Qt().fromArray(y))}}})}},bindSkeleton:function(o,u,h){var d=this.parsePoseNodes();for(var c in o){var y=o[c],w=e.get(parseInt(y.ID)).parents;w.forEach(function(D){if(u.has(D.ID)){var L=D.ID,H=e.get(L);H.parents.forEach(function(M){if(h.has(M.ID)){var j=h.get(M.ID);j.bind(new Rn(y.bones),d[M.ID])}})}})}},parsePoseNodes:function(){var o={};if("Pose"in r.Objects){var u=r.Objects.Pose;for(var h in u)if(u[h].attrType==="BindPose"){var d=u[h].PoseNode;Array.isArray(d)?d.forEach(function(c){o[c.Node]=new Z().fromArray(c.Matrix.a)}):o[d.Node]=new Z().fromArray(d.Matrix.a)}}return o},createAmbientLight:function(){if("GlobalSettings"in r&&"AmbientColor"in r.GlobalSettings){var o=r.GlobalSettings.AmbientColor.value,u=o[0],h=o[1],d=o[2];if(u!==0||h!==0||d!==0){var c=new Re(u,h,d);t.add(new fn(c,1))}}},setupMorphMaterials:function(){var o=this;t.traverse(function(u){u.isMesh&&u.geometry.morphAttributes.position&&u.geometry.morphAttributes.position.length&&(Array.isArray(u.material)?u.material.forEach(function(h,d){o.setupMorphMaterial(u,h,d)}):o.setupMorphMaterial(u,u.material))})},setupMorphMaterial:function(o,u,h){var d=o.uuid,c=u.uuid,y=!1;if(t.traverse(function(D){D.isMesh&&(Array.isArray(D.material)?D.material.forEach(function(L){L.uuid===c&&D.uuid!==d&&(y=!0)}):D.material.uuid===c&&D.uuid!==d&&(y=!0))}),y===!0){var w=u.clone();w.morphTargets=!0,h===void 0?o.material=w:o.material[h]=w}else u.morphTargets=!0}};function a(){}a.prototype={constructor:a,parse:function(o){var u=new Map;if("Geometry"in r.Objects){var h=r.Objects.Geometry;for(var d in h){var c=e.get(parseInt(d)),y=this.parseGeometry(c,h[d],o);u.set(parseInt(d),y)}}return u},parseGeometry:function(o,u,h){switch(u.attrType){case"Mesh":return this.parseMeshGeometry(o,u,h);case"NurbsCurve":return this.parseNurbsGeometry(u)}},parseMeshGeometry:function(o,u,h){var d=h.skeletons,c=[],y=o.parents.map(function(M){return r.Objects.Model[M.ID]});if(y.length!==0){var w=o.children.reduce(function(M,j){return d[j.ID]!==void 0&&(M=d[j.ID]),M},null);o.children.forEach(function(M){h.morphTargets[M.ID]!==void 0&&c.push(h.morphTargets[M.ID])});var D=y[0],L={};"RotationOrder"in D&&(L.eulerOrder=T(D.RotationOrder.value)),"InheritType"in D&&(L.inheritType=parseInt(D.InheritType.value)),"GeometricTranslation"in D&&(L.translation=D.GeometricTranslation.value),"GeometricRotation"in D&&(L.rotation=D.GeometricRotation.value),"GeometricScaling"in D&&(L.scale=D.GeometricScaling.value);var H=R(L);return this.genGeometry(u,w,c,H)}},genGeometry:function(o,u,h,d){var c=new Wt;o.attrName&&(c.name=o.attrName);var y=this.parseGeoNode(o,u),w=this.genBuffers(y),D=new Ke(w.vertex,3);if(D.applyMatrix4(d),c.setAttribute("position",D),w.colors.length>0&&c.setAttribute("color",new Ke(w.colors,3)),u&&(c.setAttribute("skinIndex",new In(w.weightsIndices,4)),c.setAttribute("skinWeight",new Ke(w.vertexWeights,4)),c.FBX_Deformer=u),w.normal.length>0){var L=new Pn().getNormalMatrix(d),H=new Ke(w.normal,3);H.applyNormalMatrix(L),c.setAttribute("normal",H)}if(w.uvs.forEach(function(oe,se){var ae="uv"+(se+1).toString();se===0&&(ae="uv"),c.setAttribute(ae,new Ke(w.uvs[se],2))}),y.material&&y.material.mappingType!=="AllSame"){var M=w.materialIndex[0],j=0;if(w.materialIndex.forEach(function(oe,se){oe!==M&&(c.addGroup(j,se-j,M),M=oe,j=se)}),c.groups.length>0){var O=c.groups[c.groups.length-1],X=O.start+O.count;X!==w.materialIndex.length&&c.addGroup(X,w.materialIndex.length-X,M)}c.groups.length===0&&c.addGroup(0,w.materialIndex.length,w.materialIndex[0])}return this.addMorphTargets(c,o,h,d),c},parseGeoNode:function(o,u){var h={};if(h.vertexPositions=o.Vertices!==void 0?o.Vertices.a:[],h.vertexIndices=o.PolygonVertexIndex!==void 0?o.PolygonVertexIndex.a:[],o.LayerElementColor&&(h.color=this.parseVertexColors(o.LayerElementColor[0])),o.LayerElementMaterial&&(h.material=this.parseMaterialIndices(o.LayerElementMaterial[0])),o.LayerElementNormal&&(h.normal=this.parseNormals(o.LayerElementNormal[0])),o.LayerElementUV){h.uv=[];for(var d=0;o.LayerElementUV[d];)h.uv.push(this.parseUVs(o.LayerElementUV[d])),d++}if(o.LayerElementUserData){h.userAttrs=[];for(var d=0;o.LayerElementUserData[d];)d++}return h.weightTable={},u!==null&&(h.skeleton=u,u.rawBones.forEach(function(c,y){c.indices.forEach(function(w,D){h.weightTable[w]===void 0&&(h.weightTable[w]=[]),h.weightTable[w].push({id:y,weight:c.weights[D]})})})),h},genBuffers:function(o){var u={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},h=0,d=0,c=!1,y=[],w=[],D=[],L=[],H=[],M=[],j=this;return o.vertexIndices.forEach(function(O,X){var oe=!1;O<0&&(O=O^-1,oe=!0);var se=[],ae=[];if(y.push(O*3,O*3+1,O*3+2),o.color){var de=b(X,h,O,o.color);D.push(de[0],de[1],de[2])}if(o.skeleton){if(o.weightTable[O]!==void 0&&o.weightTable[O].forEach(function(Te){ae.push(Te.weight),se.push(Te.id)}),ae.length>4){c||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),c=!0);var De=[0,0,0,0],Oe=[0,0,0,0];ae.forEach(function(Te,fe){var Me=Te,It=se[fe];Oe.forEach(function($r,ci,Jl){if(Me>$r){Jl[ci]=Me,Me=$r;var $l=De[ci];De[ci]=It,It=$l}})}),se=De,ae=Oe}for(;ae.length<4;)ae.push(0),se.push(0);for(var Ge=0;Ge<4;++Ge)H.push(ae[Ge]),M.push(se[Ge])}if(o.normal){var de=b(X,h,O,o.normal);w.push(de[0],de[1],de[2])}if(o.material&&o.material.mappingType!=="AllSame")var hi=b(X,h,O,o.material)[0];o.uv&&o.uv.forEach(function(Te,fe){var Me=b(X,h,O,Te);L[fe]===void 0&&(L[fe]=[]),L[fe].push(Me[0]),L[fe].push(Me[1])}),d++,oe&&(j.genFace(u,o,y,hi,w,D,L,H,M,d),h++,d=0,y=[],w=[],D=[],L=[],H=[],M=[])}),u},genFace:function(o,u,h,d,c,y,w,D,L,H){for(var M=2;M<H;M++)o.vertex.push(u.vertexPositions[h[0]]),o.vertex.push(u.vertexPositions[h[1]]),o.vertex.push(u.vertexPositions[h[2]]),o.vertex.push(u.vertexPositions[h[(M-1)*3]]),o.vertex.push(u.vertexPositions[h[(M-1)*3+1]]),o.vertex.push(u.vertexPositions[h[(M-1)*3+2]]),o.vertex.push(u.vertexPositions[h[M*3]]),o.vertex.push(u.vertexPositions[h[M*3+1]]),o.vertex.push(u.vertexPositions[h[M*3+2]]),u.skeleton&&(o.vertexWeights.push(D[0]),o.vertexWeights.push(D[1]),o.vertexWeights.push(D[2]),o.vertexWeights.push(D[3]),o.vertexWeights.push(D[(M-1)*4]),o.vertexWeights.push(D[(M-1)*4+1]),o.vertexWeights.push(D[(M-1)*4+2]),o.vertexWeights.push(D[(M-1)*4+3]),o.vertexWeights.push(D[M*4]),o.vertexWeights.push(D[M*4+1]),o.vertexWeights.push(D[M*4+2]),o.vertexWeights.push(D[M*4+3]),o.weightsIndices.push(L[0]),o.weightsIndices.push(L[1]),o.weightsIndices.push(L[2]),o.weightsIndices.push(L[3]),o.weightsIndices.push(L[(M-1)*4]),o.weightsIndices.push(L[(M-1)*4+1]),o.weightsIndices.push(L[(M-1)*4+2]),o.weightsIndices.push(L[(M-1)*4+3]),o.weightsIndices.push(L[M*4]),o.weightsIndices.push(L[M*4+1]),o.weightsIndices.push(L[M*4+2]),o.weightsIndices.push(L[M*4+3])),u.color&&(o.colors.push(y[0]),o.colors.push(y[1]),o.colors.push(y[2]),o.colors.push(y[(M-1)*3]),o.colors.push(y[(M-1)*3+1]),o.colors.push(y[(M-1)*3+2]),o.colors.push(y[M*3]),o.colors.push(y[M*3+1]),o.colors.push(y[M*3+2])),u.material&&u.material.mappingType!=="AllSame"&&(o.materialIndex.push(d),o.materialIndex.push(d),o.materialIndex.push(d)),u.normal&&(o.normal.push(c[0]),o.normal.push(c[1]),o.normal.push(c[2]),o.normal.push(c[(M-1)*3]),o.normal.push(c[(M-1)*3+1]),o.normal.push(c[(M-1)*3+2]),o.normal.push(c[M*3]),o.normal.push(c[M*3+1]),o.normal.push(c[M*3+2])),u.uv&&u.uv.forEach(function(j,O){o.uvs[O]===void 0&&(o.uvs[O]=[]),o.uvs[O].push(w[O][0]),o.uvs[O].push(w[O][1]),o.uvs[O].push(w[O][(M-1)*2]),o.uvs[O].push(w[O][(M-1)*2+1]),o.uvs[O].push(w[O][M*2]),o.uvs[O].push(w[O][M*2+1])})},addMorphTargets:function(o,u,h,d){if(h.length!==0){o.morphTargetsRelative=!0,o.morphAttributes.position=[];var c=this;h.forEach(function(y){y.rawTargets.forEach(function(w){var D=r.Objects.Geometry[w.geoID];D!==void 0&&c.genMorphGeometry(o,u,D,d,w.name)})})}},genMorphGeometry:function(o,u,h,d,c){for(var y=u.PolygonVertexIndex!==void 0?u.PolygonVertexIndex.a:[],w=h.Vertices!==void 0?h.Vertices.a:[],D=h.Indexes!==void 0?h.Indexes.a:[],L=o.attributes.position.count*3,H=new Float32Array(L),M=0;M<D.length;M++){var j=D[M]*3;H[j]=w[M*3],H[j+1]=w[M*3+1],H[j+2]=w[M*3+2]}var O={vertexIndices:y,vertexPositions:H},X=this.genBuffers(O),oe=new Ke(X.vertex,3);oe.name=c||h.attrName,oe.applyMatrix4(d),o.morphAttributes.position.push(oe)},parseNormals:function(o){var u=o.MappingInformationType,h=o.ReferenceInformationType,d=o.Normals.a,c=[];return h==="IndexToDirect"&&("NormalIndex"in o?c=o.NormalIndex.a:"NormalsIndex"in o&&(c=o.NormalsIndex.a)),{dataSize:3,buffer:d,indices:c,mappingType:u,referenceType:h}},parseUVs:function(o){var u=o.MappingInformationType,h=o.ReferenceInformationType,d=o.UV.a,c=[];return h==="IndexToDirect"&&(c=o.UVIndex.a),{dataSize:2,buffer:d,indices:c,mappingType:u,referenceType:h}},parseVertexColors:function(o){var u=o.MappingInformationType,h=o.ReferenceInformationType,d=o.Colors.a,c=[];return h==="IndexToDirect"&&(c=o.ColorIndex.a),{dataSize:4,buffer:d,indices:c,mappingType:u,referenceType:h}},parseMaterialIndices:function(o){var u=o.MappingInformationType,h=o.ReferenceInformationType;if(u==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:h};for(var d=o.Materials.a,c=[],y=0;y<d.length;++y)c.push(y);return{dataSize:1,buffer:d,indices:c,mappingType:u,referenceType:h}},parseNurbsGeometry:function(o){if(Se===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Wt;var u=parseInt(o.Order);if(isNaN(u))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",o.Order,o.id),new Wt;for(var h=u-1,d=o.KnotVector.a,c=[],y=o.Points.a,w=0,D=y.length;w<D;w+=4)c.push(new Bn().fromArray(y,w));var L,H;if(o.Form==="Closed")c.push(c[0]);else if(o.Form==="Periodic"){L=h,H=d.length-1-L;for(var w=0;w<h;++w)c.push(c[w])}var M=new Se(h,d,c,L,H),j=M.getPoints(c.length*7),O=new Float32Array(j.length*3);j.forEach(function(oe,se){oe.toArray(O,se*3)});var X=new Wt;return X.setAttribute("position",new gn(O,3)),X}};function l(){}l.prototype={constructor:l,parse:function(){var o=[],u=this.parseClips();if(u!==void 0)for(var h in u){var d=u[h],c=this.addClip(d);o.push(c)}return o},parseClips:function(){if(r.Objects.AnimationCurve!==void 0){var o=this.parseAnimationCurveNodes();this.parseAnimationCurves(o);var u=this.parseAnimationLayers(o),h=this.parseAnimStacks(u);return h}},parseAnimationCurveNodes:function(){var o=r.Objects.AnimationCurveNode,u=new Map;for(var h in o){var d=o[h];if(d.attrName.match(/S|R|T|DeformPercent/)!==null){var c={id:d.id,attr:d.attrName,curves:{}};u.set(c.id,c)}}return u},parseAnimationCurves:function(o){var u=r.Objects.AnimationCurve;for(var h in u){var d={id:u[h].id,times:u[h].KeyTime.a.map(g),values:u[h].KeyValueFloat.a},c=e.get(d.id);if(c!==void 0){var y=c.parents[0].ID,w=c.parents[0].relationship;w.match(/X/)?o.get(y).curves.x=d:w.match(/Y/)?o.get(y).curves.y=d:w.match(/Z/)?o.get(y).curves.z=d:w.match(/d|DeformPercent/)&&o.has(y)&&(o.get(y).curves.morph=d)}}},parseAnimationLayers:function(o){var u=r.Objects.AnimationLayer,h=new Map;for(var d in u){var c=[],y=e.get(parseInt(d));if(y!==void 0){var w=y.children;w.forEach(function(D,L){if(o.has(D.ID)){var H=o.get(D.ID);if(H.curves.x!==void 0||H.curves.y!==void 0||H.curves.z!==void 0){if(c[L]===void 0){var M=e.get(D.ID).parents.filter(function(ae){return ae.relationship!==void 0})[0].ID;if(M!==void 0){var j=r.Objects.Model[M.toString()],O={modelName:j.attrName?zt.sanitizeNodeName(j.attrName):"",ID:j.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};t.traverse(function(ae){ae.ID===j.id&&(O.transform=ae.matrix,ae.userData.transformData&&(O.eulerOrder=ae.userData.transformData.eulerOrder))}),O.transform||(O.transform=new Z),"PreRotation"in j&&(O.preRotation=j.PreRotation.value),"PostRotation"in j&&(O.postRotation=j.PostRotation.value),c[L]=O}}c[L]&&(c[L][H.attr]=H)}else if(H.curves.morph!==void 0){if(c[L]===void 0){var X=e.get(D.ID).parents.filter(function(Oe){return Oe.relationship!==void 0})[0].ID,oe=e.get(X).parents[0].ID,se=e.get(oe).parents[0].ID,M=e.get(se).parents[0].ID,j=r.Objects.Model[M],O={modelName:j.attrName?zt.sanitizeNodeName(j.attrName):"",morphName:r.Objects.Deformer[X].attrName};c[L]=O}c[L][H.attr]=H}}}),h.set(parseInt(d),c)}}return h},parseAnimStacks:function(o){var u=r.Objects.AnimationStack,h={};for(var d in u){var c=e.get(parseInt(d)).children;c.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");var y=o.get(c[0].ID);h[d]={name:u[d].attrName,layer:y}}return h},addClip:function(o){var u=[],h=this;return o.layer.forEach(function(d){u=u.concat(h.generateTracks(d))}),new vn(o.name,-1,u)},generateTracks:function(o){var u=[],h=new Qt,d=new Nt,c=new Qt;if(o.transform&&o.transform.decompose(h,d,c),h=h.toArray(),d=new gt().setFromQuaternion(d,o.eulerOrder).toArray(),c=c.toArray(),o.T!==void 0&&Object.keys(o.T.curves).length>0){var y=this.generateVectorTrack(o.modelName,o.T.curves,h,"position");y!==void 0&&u.push(y)}if(o.R!==void 0&&Object.keys(o.R.curves).length>0){var w=this.generateRotationTrack(o.modelName,o.R.curves,d,o.preRotation,o.postRotation,o.eulerOrder);w!==void 0&&u.push(w)}if(o.S!==void 0&&Object.keys(o.S.curves).length>0){var D=this.generateVectorTrack(o.modelName,o.S.curves,c,"scale");D!==void 0&&u.push(D)}if(o.DeformPercent!==void 0){var L=this.generateMorphTrack(o);L!==void 0&&u.push(L)}return u},generateVectorTrack:function(o,u,h,d){var c=this.getTimesForAllAxes(u),y=this.getKeyframeTrackValues(c,u,h);return new Hn(o+"."+d,c,y)},generateRotationTrack:function(o,u,h,d,c,y){u.x!==void 0&&(this.interpolateRotations(u.x),u.x.values=u.x.values.map(ye.degToRad)),u.y!==void 0&&(this.interpolateRotations(u.y),u.y.values=u.y.values.map(ye.degToRad)),u.z!==void 0&&(this.interpolateRotations(u.z),u.z.values=u.z.values.map(ye.degToRad));var w=this.getTimesForAllAxes(u),D=this.getKeyframeTrackValues(w,u,h);d!==void 0&&(d=d.map(ye.degToRad),d.push(y),d=new gt().fromArray(d),d=new Nt().setFromEuler(d)),c!==void 0&&(c=c.map(ye.degToRad),c.push(y),c=new gt().fromArray(c),c=new Nt().setFromEuler(c).inverse());for(var L=new Nt,H=new gt,M=[],j=0;j<D.length;j+=3)H.set(D[j],D[j+1],D[j+2],y),L.setFromEuler(H),d!==void 0&&L.premultiply(d),c!==void 0&&L.multiply(c),L.toArray(M,j/3*4);return new An(o+".quaternion",w,M)},generateMorphTrack:function(o){var u=o.DeformPercent.curves.morph,h=u.values.map(function(c){return c/100}),d=t.getObjectByName(o.modelName).morphTargetDictionary[o.morphName];return new Dn(o.modelName+".morphTargetInfluences["+d+"]",u.times,h)},getTimesForAllAxes:function(o){var u=[];return o.x!==void 0&&(u=u.concat(o.x.times)),o.y!==void 0&&(u=u.concat(o.y.times)),o.z!==void 0&&(u=u.concat(o.z.times)),u=u.sort(function(h,d){return h-d}).filter(function(h,d,c){return c.indexOf(h)==d}),u},getKeyframeTrackValues:function(o,u,h){var d=h,c=[],y=-1,w=-1,D=-1;return o.forEach(function(L){if(u.x&&(y=u.x.times.indexOf(L)),u.y&&(w=u.y.times.indexOf(L)),u.z&&(D=u.z.times.indexOf(L)),y!==-1){var H=u.x.values[y];c.push(H),d[0]=H}else c.push(d[0]);if(w!==-1){var M=u.y.values[w];c.push(M),d[1]=M}else c.push(d[1]);if(D!==-1){var j=u.z.values[D];c.push(j),d[2]=j}else c.push(d[2])}),c},interpolateRotations:function(o){for(var u=1;u<o.values.length;u++){var h=o.values[u-1],d=o.values[u]-h,c=Math.abs(d);if(c>=180){for(var y=c/180,w=d/y,D=h+w,L=o.times[u-1],H=o.times[u]-L,M=H/y,j=L+M,O=[],X=[];j<o.times[u];)O.push(j),j+=M,X.push(D),D+=w;o.times=z(o.times,u,O),o.values=z(o.values,u,X)}}}};function n(){}n.prototype={constructor:n,getPrevNode:function(){return this.nodeStack[this.currentIndent-2]},getCurrentNode:function(){return this.nodeStack[this.currentIndent-1]},getCurrentProp:function(){return this.currentProp},pushStack:function(o){this.nodeStack.push(o),this.currentIndent+=1},popStack:function(){this.nodeStack.pop(),this.currentIndent-=1},setCurrentProp:function(o,u){this.currentProp=o,this.currentPropName=u},parse:function(o){this.currentIndent=0,this.allNodes=new f,this.nodeStack=[],this.currentProp=[],this.currentPropName="";var u=this,h=o.split(/[\r\n]+/);return h.forEach(function(d,c){var y=d.match(/^[\s\t]*;/),w=d.match(/^[\s\t]*$/);if(!(y||w)){var D=d.match("^\\t{"+u.currentIndent+"}(\\w+):(.*){",""),L=d.match("^\\t{"+u.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),H=d.match("^\\t{"+(u.currentIndent-1)+"}}");D?u.parseNodeBegin(d,D):L?u.parseNodeProperty(d,L,h[++c]):H?u.popStack():d.match(/^[^\s\t}]/)&&u.parseNodePropertyContinued(d)}}),this.allNodes},parseNodeBegin:function(o,u){var h=u[1].trim().replace(/^"/,"").replace(/"$/,""),d=u[2].split(",").map(function(D){return D.trim().replace(/^"/,"").replace(/"$/,"")}),c={name:h},y=this.parseNodeAttr(d),w=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(h,c):h in w?(h==="PoseNode"?w.PoseNode.push(c):w[h].id!==void 0&&(w[h]={},w[h][w[h].id]=w[h]),y.id!==""&&(w[h][y.id]=c)):typeof y.id=="number"?(w[h]={},w[h][y.id]=c):h!=="Properties70"&&(h==="PoseNode"?w[h]=[c]:w[h]=c),typeof y.id=="number"&&(c.id=y.id),y.name!==""&&(c.attrName=y.name),y.type!==""&&(c.attrType=y.type),this.pushStack(c)},parseNodeAttr:function(o){var u=o[0];o[0]!==""&&(u=parseInt(o[0]),isNaN(u)&&(u=o[0]));var h="",d="";return o.length>1&&(h=o[1].replace(/^(\w+)::/,""),d=o[2]),{id:u,name:h,type:d}},parseNodeProperty:function(o,u,h){var d=u[1].replace(/^"/,"").replace(/"$/,"").trim(),c=u[2].replace(/^"/,"").replace(/"$/,"").trim();d==="Content"&&c===","&&(c=h.replace(/"/g,"").replace(/,$/,"").trim());var y=this.getCurrentNode(),w=y.name;if(w==="Properties70"){this.parseNodeSpecialProperty(o,d,c);return}if(d==="C"){var D=c.split(",").slice(1),L=parseInt(D[0]),H=parseInt(D[1]),M=c.split(",").slice(3);M=M.map(function(j){return j.trim().replace(/^"/,"")}),d="connections",c=[L,H],Q(c,M),y[d]===void 0&&(y[d]=[])}d==="Node"&&(y.id=c),d in y&&Array.isArray(y[d])?y[d].push(c):d!=="a"?y[d]=c:y.a=c,this.setCurrentProp(y,d),d==="a"&&c.slice(-1)!==","&&(y.a=B(c))},parseNodePropertyContinued:function(o){var u=this.getCurrentNode();u.a+=o,o.slice(-1)!==","&&(u.a=B(u.a))},parseNodeSpecialProperty:function(o,u,h){var d=h.split('",').map(function(H){return H.trim().replace(/^\"/,"").replace(/\s/,"_")}),c=d[0],y=d[1],w=d[2],D=d[3],L=d[4];switch(y){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":L=parseFloat(L);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":L=B(L);break}this.getPrevNode()[c]={type:y,type2:w,flag:D,value:L},this.setCurrentProp(this.getPrevNode(),c)}};function v(){}v.prototype={constructor:v,parse:function(o){var u=new p(o);u.skip(23);for(var h=u.getUint32(),d=new f;!this.endOfContent(u);){var c=this.parseNode(u,h);c!==null&&d.add(c.name,c)}return d},endOfContent:function(o){return o.size()%16===0?(o.getOffset()+160+16&-16)>=o.size():o.getOffset()+160+16>=o.size()},parseNode:function(o,u){var h={},d=u>=7500?o.getUint64():o.getUint32(),c=u>=7500?o.getUint64():o.getUint32();u>=7500?o.getUint64():o.getUint32();var y=o.getUint8(),w=o.getString(y);if(d===0)return null;for(var D=[],L=0;L<c;L++)D.push(this.parseProperty(o));var H=D.length>0?D[0]:"",M=D.length>1?D[1]:"",j=D.length>2?D[2]:"";for(h.singleProperty=c===1&&o.getOffset()===d;d>o.getOffset();){var O=this.parseNode(o,u);O!==null&&this.parseSubNode(w,h,O)}return h.propertyList=D,typeof H=="number"&&(h.id=H),M!==""&&(h.attrName=M),j!==""&&(h.attrType=j),w!==""&&(h.name=w),h},parseSubNode:function(o,u,h){if(h.singleProperty===!0){var d=h.propertyList[0];Array.isArray(d)?(u[h.name]=h,h.a=d):u[h.name]=d}else if(o==="Connections"&&h.name==="C"){var c=[];h.propertyList.forEach(function(j,O){O!==0&&c.push(j)}),u.connections===void 0&&(u.connections=[]),u.connections.push(c)}else if(h.name==="Properties70"){var y=Object.keys(h);y.forEach(function(j){u[j]=h[j]})}else if(o==="Properties70"&&h.name==="P"){var w=h.propertyList[0],D=h.propertyList[1],L=h.propertyList[2],H=h.propertyList[3],M;w.indexOf("Lcl ")===0&&(w=w.replace("Lcl ","Lcl_")),D.indexOf("Lcl ")===0&&(D=D.replace("Lcl ","Lcl_")),D==="Color"||D==="ColorRGB"||D==="Vector"||D==="Vector3D"||D.indexOf("Lcl_")===0?M=[h.propertyList[4],h.propertyList[5],h.propertyList[6]]:M=h.propertyList[4],u[w]={type:D,type2:L,flag:H,value:M}}else u[h.name]===void 0?typeof h.id=="number"?(u[h.name]={},u[h.name][h.id]=h):u[h.name]=h:h.name==="PoseNode"?(Array.isArray(u[h.name])||(u[h.name]=[u[h.name]]),u[h.name].push(h)):u[h.name][h.id]===void 0&&(u[h.name][h.id]=h)},parseProperty:function(o){var u=o.getString(1);switch(u){case"C":return o.getBoolean();case"D":return o.getFloat64();case"F":return o.getFloat32();case"I":return o.getInt32();case"L":return o.getInt64();case"R":var h=o.getUint32();return o.getArrayBuffer(h);case"S":var h=o.getUint32();return o.getString(h);case"Y":return o.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var d=o.getUint32(),c=o.getUint32(),y=o.getUint32();if(c===0)switch(u){case"b":case"c":return o.getBooleanArray(d);case"d":return o.getFloat64Array(d);case"f":return o.getFloat32Array(d);case"i":return o.getInt32Array(d);case"l":return o.getInt64Array(d)}typeof jt>"u"&&console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var w=new jt.Inflate(new Uint8Array(o.getArrayBuffer(y))),D=new p(w.decompress().buffer);switch(u){case"b":case"c":return D.getBooleanArray(d);case"d":return D.getFloat64Array(d);case"f":return D.getFloat32Array(d);case"i":return D.getInt32Array(d);case"l":return D.getInt64Array(d)}default:throw new Error("THREE.FBXLoader: Unknown property type "+u)}}};function p(o,u){this.dv=new DataView(o),this.offset=0,this.littleEndian=u!==void 0?u:!0}p.prototype={constructor:p,getOffset:function(){return this.offset},size:function(){return this.dv.buffer.byteLength},skip:function(o){this.offset+=o},getBoolean:function(){return(this.getUint8()&1)===1},getBooleanArray:function(o){for(var u=[],h=0;h<o;h++)u.push(this.getBoolean());return u},getUint8:function(){var o=this.dv.getUint8(this.offset);return this.offset+=1,o},getInt16:function(){var o=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,o},getInt32:function(){var o=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,o},getInt32Array:function(o){for(var u=[],h=0;h<o;h++)u.push(this.getInt32());return u},getUint32:function(){var o=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,o},getInt64:function(){var o,u;return this.littleEndian?(o=this.getUint32(),u=this.getUint32()):(u=this.getUint32(),o=this.getUint32()),u&2147483648?(u=~u&4294967295,o=~o&4294967295,o===4294967295&&(u=u+1&4294967295),o=o+1&4294967295,-(u*4294967296+o)):u*4294967296+o},getInt64Array:function(o){for(var u=[],h=0;h<o;h++)u.push(this.getInt64());return u},getUint64:function(){var o,u;return this.littleEndian?(o=this.getUint32(),u=this.getUint32()):(u=this.getUint32(),o=this.getUint32()),u*4294967296+o},getFloat32:function(){var o=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,o},getFloat32Array:function(o){for(var u=[],h=0;h<o;h++)u.push(this.getFloat32());return u},getFloat64:function(){var o=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,o},getFloat64Array:function(o){for(var u=[],h=0;h<o;h++)u.push(this.getFloat64());return u},getArrayBuffer:function(o){var u=this.dv.buffer.slice(this.offset,this.offset+o);return this.offset+=o,u},getString:function(o){for(var u=[],h=0;h<o;h++)u[h]=this.getUint8();var d=u.indexOf(0);return d>=0&&(u=u.slice(0,d)),Ti.decodeText(new Uint8Array(u))}};function f(){}f.prototype={constructor:f,add:function(o,u){this[o]=u}};function m(o){var u="Kaydara FBX Binary  \0";return o.byteLength>=u.length&&u===V(o,0,u.length)}function C(o){var u=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],h=0;function d(w){var D=o[w-1];return o=o.slice(h+w),h++,D}for(var c=0;c<u.length;++c){var y=d(1);if(y===u[c])return!1}return!0}function x(o){var u=/FBXVersion: (\d+)/,h=o.match(u);if(h){var d=parseInt(h[1]);return d}throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function g(o){return o/46186158e3}var S=[];function b(o,u,h,d){var c;switch(d.mappingType){case"ByPolygonVertex":c=o;break;case"ByPolygon":c=u;break;case"ByVertice":c=h;break;case"AllSame":c=d.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+d.mappingType)}d.referenceType==="IndexToDirect"&&(c=d.indices[c]);var y=c*d.dataSize,w=y+d.dataSize;return $(S,d.buffer,y,w)}var P=new gt,E=new Qt;function R(o){var u=new Z,h=new Z,d=new Z,c=new Z,y=new Z,w=new Z,D=new Z,L=new Z,H=new Z,M=new Z,j=new Z,O=o.inheritType?o.inheritType:0;if(o.translation&&u.setPosition(E.fromArray(o.translation)),o.preRotation){var X=o.preRotation.map(ye.degToRad);X.push(o.eulerOrder),h.makeRotationFromEuler(P.fromArray(X))}if(o.rotation){var X=o.rotation.map(ye.degToRad);X.push(o.eulerOrder),d.makeRotationFromEuler(P.fromArray(X))}if(o.postRotation){var X=o.postRotation.map(ye.degToRad);X.push(o.eulerOrder),c.makeRotationFromEuler(P.fromArray(X))}o.scale&&y.scale(E.fromArray(o.scale)),o.scalingOffset&&D.setPosition(E.fromArray(o.scalingOffset)),o.scalingPivot&&w.setPosition(E.fromArray(o.scalingPivot)),o.rotationOffset&&L.setPosition(E.fromArray(o.rotationOffset)),o.rotationPivot&&H.setPosition(E.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(M=o.parentMatrixWorld);var oe=h.multiply(d).multiply(c),se=new Z;M.extractRotation(se);var ae=new Z;ae.copyPosition(M);var de=new Z;de.getInverse(se).multiply(M);var De=new Z;if(O===0)De.copy(se).multiply(oe).multiply(de).multiply(y);else if(O===1)De.copy(se).multiply(de).multiply(oe).multiply(y);else{var Oe=new Z().getInverse(y),Ge=new Z().multiply(de).multiply(Oe);De.copy(se).multiply(oe).multiply(Ge).multiply(y)}var hi=new Z().getInverse(H),Te=new Z().getInverse(w),fe=new Z;fe.copy(u).multiply(L).multiply(H).multiply(h).multiply(d).multiply(c).multiply(hi).multiply(D).multiply(w).multiply(y).multiply(Te);var Me=new Z().copyPosition(fe),It=new Z().copy(M).multiply(Me);return j.copyPosition(It),fe=new Z().multiply(j).multiply(De),fe}function T(o){o=o||0;var u=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),u[0]):u[o]}function B(o){var u=o.split(",").map(function(h){return parseFloat(h)});return u}function V(o,u,h){return u===void 0&&(u=0),h===void 0&&(h=o.byteLength),Ti.decodeText(new Uint8Array(o,u,h))}function Q(o,u){for(var h=0,d=o.length,c=u.length;h<c;h++,d++)o[d]=u[h]}function $(o,u,h,d){for(var c=h,y=0;c<d;c++,y++)o[y]=u[c];return o}function z(o,u,h){return o.slice(0,u).concat(h).concat(o.slice(u))}return i}()});var Da={};U(Da,{FileIO:()=>ve});import*as _ from"./three.module.js";var ve,Xt=k(()=>{ue();Ri();ve=class{constructor(e={}){this.pxlTimer=null,this.pxlUtils=null,this.pxlQuality=null,this.pxlVideo=null,this.pxlCamera=null,this.pxlAutoCam=null,this.pxlUser=null,this.pxlEnv=null,this.pxlAnim=null,this.pxlDevice=null,this.pxlShaders=null,this.options={},this.runDebugger=!1,this.assetRoot=this.findInDict(e,"assetRoot","images/assets/"),this.guiRoot=this.findInDict(e,"guiRoot","images/GUI/"),this.roomRoot=this.findInDict(e,"roomRoot","images/rooms/"),this.vidRoot=this.findInDict(e,"vidRoot","images/screenContent/"),this.workerList=[]}setDependencies(e){this.pxlTimer=e.pxlTimer,this.pxlUtils=e.pxlUtils,this.pxlQuality=e.pxlQuality,this.pxlVideo=e.pxlVideo,this.pxlCamera=e.pxlCamera,this.pxlAutoCam=e.pxlAutoCam,this.pxlUser=e.pxlUser,this.pxlEnv=e.pxlEnv,this.pxlAnim=e.pxlAnim,this.pxlDevice=e.pxlDevice,this.pxlShaders=e.pxlShaders,this.options=e.options}log(...e){this.runDebugger&&(console.log("---"),e.forEach(t=>{console.log(t)}))}findInDict(e,t,i){return e.hasOwnProperty(t)?e[t]:(e[t]=i,i)}checkForUserData(e,t,i){if(i.hasOwnProperty("userData")){if(i.hasOwnProperty("material")&&(i.userData.hasOwnProperty("doubleSided")&&i.userData.doubleSided?i.material.side=_.DoubleSide:i.material.side=_.FrontSide),i.userData.hasOwnProperty("GlowPass")&&i.userData.GlowPass&&(e.geoList.GlowPass||(e.geoList.GlowPass=[]),e.geoList.GlowPass.push(i)),i.userData.hasOwnProperty("GlowPassMask")&&i.userData.GlowPass&&(e.geoList.GlowPassMask||(e.geoList.GlowPassMask=[]),e.geoList.GlowPassMask.push(i)),i.userData.hasOwnProperty("castShadow")&&i.userData.castShadow&&(i.castShadow=!0),i.userData.hasOwnProperty("receiveShadow")&&i.userData.receiveShadow&&(i.receiveShadow=!0),i.userData.hasOwnProperty("Shader")&&i.userData.Shader!=""){let s=i.userData.Shader.trim();e.shaderGeoList||(e.shaderGeoList={}),e.shaderGeoList[i.name]=i}i.userData.hasOwnProperty("Emitter")&&i.userData.Emitter!=""&&(e.emitterList||(e.emitterList={}),e.emitterList[i.userData.Emitter]||(e.emitterList[i.userData.Emitter]={},e.emitterList[i.userData.Emitter].Emitter=[],e.emitterList[i.userData.Emitter].Particles=[]),e.emitterList[i.userData.Emitter].Emitter.push(i)),i.userData.hasOwnProperty("Hover")&&i.userData.Hover&&(e.hoverableExists=!0,e.hoverableList.push(i)),i.userData.hasOwnProperty("Click")&&i.userData.Click&&(e.clickableExists=!0,e.clickableList.push(i)),this.checkObjectInstancing(e,t,i),i.userData.hasOwnProperty("Scripted")&&(e.geoList.hasOwnProperty("Scripted")||(e.geoList.Scripted={}),e.geoList.Scripted[i.name]=i,i.children.forEach(a=>{if(a.name.includes("Geo")){let l=i.position,n=i.rotation,v=i.scale;a.position.set(l.x,l.y,l.z),a.rotation.set(n.x,n.y,n.z),a.scale.set(v.x,v.y,v.z),a.updateMatrix(),a.children.forEach(f=>{this.checkForUserData(e,t,f),f.type=="Group"&&(f.position.set(l.x+f.position.x,l.y+f.position.y,l.z+f.position.z),f.rotation.set(n.x,n.y,n.z),f.scale.set(v.x,v.y,v.z)),f.updateMatrix()})}else if(a.name.includes("Colliders")){let l=i.position,n=i.rotation,v=i.scale;a.position.set(l.x,l.y,l.z),a.rotation.set(n.x,n.y,n.z),a.scale.set(v.x,v.y,v.z),a.updateMatrix(),a.visible=!1}}))}}canAppendChildren(e,t){if(t.type!="Group")return!1;let i=!0;return e.geoList.hasOwnProperty("Scripted")&&e.geoList.Scripted.hasOwnProperty(t.name)&&(console.log(e.geoList.Scripted,e.geoList.Scripted.hasOwnProperty(t.name),t.name),i=!1),i}canAddToScene(e,t){let i=!0;return t.hasOwnProperty("userData")&&t.userData.hasOwnProperty("Instance")&&e.hasOwnProperty("baseInstancesNames")&&e.baseInstancesNames.hasOwnProperty(t.userData.Instance)&&(i=!1),i}checkIsGlassLiquid(e,t,i,s){let a=!1;if(i.userData.hasOwnProperty("isGlass")&&i.userData.isGlass&&(a=!0),i.userData.hasOwnProperty("isLiquid")&&i.userData.isLiquid&&(a=!0),!a)return!1;if(this.log("Glass Detected - ",i.name),!e.glassGroup){let x=new _.Group;e.glassGroup=x,t.add(x)}let l=i.material.clone();i.material=l,i.material.transparent=!0,i.material.opacity=.5,i.material.shininess=20,i.material.specular=i.material.color.clone(),i.material.specular.r=i.material.specular.r*.5+.1,i.material.specular.g=i.material.specular.g*.5+.1,i.material.specular.b=i.material.specular.b*.5+.1,i.material.side=_.BackSide,i.material.depthWrite=!1,i.matrixAutoUpdate=!1,i.renderOrder=1,e.glassList.push(i),e.glassGroup.add(i);let n=i.geometry.clone(),v=i.material.clone();v.copy(i.material);let p=new _.Mesh(n,v);p.name=i.name+"_Front",p.material.shininess=40,p.material.side=_.FrontSide,p.matrixAutoUpdate=!1,p.renderOrder=2;let f=i.position,m=i.rotation,C=i.scale;return p.rotation.set(m.x,m.y,m.z),p.position.set(f.x,f.y,f.z),p.scale.set(C.x,C.y,C.z),p.updateMatrix(),i.parent.add(p),e.glassList.push(p),e.glassGroup.add(p),a}checkObjectInstancing(e,t,i){if(!e.hasOwnProperty("baseInstancesNames")||!e.hasOwnProperty("baseInstancesList"))return!1;if(i.hasOwnProperty("userData")&&i.userData.hasOwnProperty("Instance")&&e.baseInstancesList.hasOwnProperty(i.userData.Instance)){let s=i.name;this.log("Generate Instance - ",s),e.geoList.hasOwnProperty("InstanceObjects")||(e.geoList.InstanceObjects={});let a=i.position,l=i.rotation,n=i.scale,v=e.baseInstancesList[i.userData.Instance];if(i.type=="Mesh"){let p=new _.InstancedMesh(v.geometry,v.material,i.geometry.attributes.position.count);p.instanceMatrix.setUsage(_.DynamicDrawUsage),p.name=s+"Geo";let f=new _.Matrix4,m=new _.Vector3,C=new _.Vector3,x=new _.Quaternion,g=new _.Vector3(1,1,1),S=i.geometry.attributes.hasOwnProperty("color"),b={};for(let P=0;P<i.geometry.attributes.position.count;P++){m.fromBufferAttribute(i.geometry.attributes.position,P);let E=m.toArray();if(E=E.join(","),!b.hasOwnProperty(E)){C.fromBufferAttribute(i.geometry.attributes.normal,P);let R=new _.Euler(0,Math.random()*2*Math.PI,0);x.setFromEuler(R);let T=g;if(S){let B=i.geometry.attributes.color.getX(P);T=new _.Vector3(B,B,B)}f.compose(m,x,T),p.setMatrixAt(P,f),b[E]=!0}}p.visible=!0,p.updateMatrix(),e.geoList.InstanceObjects[s]=p,i.parent.add(p),i.visible=!1,i.parent.remove(i)}else{let p=new _.InstancedMesh(v.geometry,v.material,1);p.instanceMatrix.setUsage(_.DynamicDrawUsage),p.name=s+"Geo";let f=!1;if(i.userData.hasOwnProperty("fixInstMatrix")&&(f=!!i.userData.fixInstMatrix),f)p.rotation.set(l.x,l.y,l.z),p.position.set(a.x,a.y,a.z),p.scale.set(n.x,n.y,n.z);else{let m=new _.Matrix4;m.compose(a,new _.Quaternion().setFromEuler(l),n),p.setMatrixAt(0,m)}p.visible=!0,p.updateMatrix(),e.geoList.InstanceObjects[s]=p,i.parent.add(p),i.visible=!1,i.parent.remove(i)}}}loadSceneFBX(e,t,i,s,a,l){a!=""&&(this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[a]=0);let n=0,v=0;var p=new Xe;return p.load(e,f=>{let m=f.children,C={},x=[];m.forEach((g,S)=>{x.push(g.name),C[g.name]=S}),x.forEach(g=>{if(g.includes("Camera")&&(m[C[g]].children.forEach((b,P)=>{if(b.matrixAutoUpdate=!1,b.name.includes("Position")){let E=b.position.clone();this.pxlCamera.cameraPrevPos=E.clone(),this.pxlCamera.camera.position.copy(E),this.pxlCamera.cameraPos.copy(E),this.pxlCamera.camera.updateMatrixWorld(),this.pxlCamera.cameraBooted=!0,this.pxlEnv.camInitPos=E,this.pxlEnv.camThumbPos=this.pxlEnv.camThumbPos.clone().add(E.clone())}else if(b.name.includes("LookAt")){let E=b.position.clone();this.pxlCamera.cameraAimTarget.position.copy(E),this.pxlCamera.camera.lookAt(E),this.pxlCamera.camera.updateMatrixWorld(),this.pxlCamera.cameraPrevLookAt=new te,this.pxlEnv.camInitLookAt=E,this.pxlEnv.camThumbLookAt=this.pxlEnv.camThumbLookAt.clone().add(E.clone())}else if(b.name.includes("ReturnPosition")){let E=b.position.clone();this.pxlEnv.camReturnPos=E}else if(b.name.includes("ReturnLookAt")){let E=b.position.clone();this.pxlEnv.camReturnLookAt=E}}),this.pxlDevice.touchMouseData.initialQuat=this.pxlCamera.camera.quaternion.clone()),g.includes("Items")){let S=m[C[g]].children,b=null,P=null,E=null,R=null,T=null;for(;S.length>0;){let B=S.pop();B.type=="Group"&&(B.children.forEach(Q=>{Q.name.includes("Item")?(B.name.includes("LowGravity")?(P==null&&(P=new _.ShaderMaterial({uniforms:{color:{value:Q.material.emissive.clone()},alphaMap:{type:"t",value:Q.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.objects.itemVert(),fragmentShader:this.pxlShaders.objects.itemFrag(),transparent:!0,side:_.DoubleSide,depthTest:!0,depthWrite:!1})),Q.material=P):B.name.includes("LizardKing")?(E==null&&(E=Q.material.clone(),E.emissiveMap=E.map,E.emissive=new _.Color(8421504)),Q.material=E):B.name.includes("StarField")||B.name.includes("InfinityZoom")&&(R==null&&(R=new _.ShaderMaterial({uniforms:{color:{value:Q.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.objects.itemZoomFrag(),transparent:!0,side:_.DoubleSide,depthTest:!0,depthWrite:!0})),Q.material=R),this.pxlUser.itemList[B.name]=Q):Q.name.includes("ItemBase")&&(b==null&&(b=new _.ShaderMaterial({uniforms:{color:{value:Q.material.emissive.clone()},alphaMap:{type:"t",value:Q.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemBaseRotateRate}},vertexShader:this.pxlShaders.objects.itemBaseVert(),fragmentShader:this.pxlShaders.objects.itemBaseFrag(),transparent:!0,side:_.DoubleSide,depthTest:!0,depthWrite:!1})),Q.material=b,this.pxlUser.itemBaseList.push(Q))}),l[0].add(B),this.pxlUser.itemGroupList[B.name]=B,this.pxlUser.itemListNames.push(B.name))}}}),a!=""&&(this.pxlEnv.geoList[a]=f,this.pxlEnv.geoLoadList[a]=1),this.pxlEnv.geoLoadList[a]=1},void 0,f=>{a!=""&&(this.pxlEnv.geoLoadList[a]=1)}),p}loadRoomFBX(e,t,i,s){i==""&&(i=e.roomName),this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[i]=0;let a=0,l=e.scene;var n=new Xe;return n.load(t,v=>{let p=v.children,f={},m=[];p.forEach((x,g)=>{let S=x.name.split("_")[0];m.push(S),f[S]=g});let C=0;if(m.indexOf("Camera")>-1){let x=[];this.log("Camera - ",p[f.Camera]);let g=!1;p[f.Camera].children.forEach((P,E)=>{P.name.includes("Position")||P.name.includes("LookAt")||P.name.includes("ReturnPosition")||P.name.includes("ReturnLookAt")?(x.push(P),g=!0):P.children.length>0&&x.push(...P.children)}),x.forEach((P,E)=>{P.matrixAutoUpdate=!1;let R=P.parent.name;if(R==p[f.Camera].name&&(R="Default"),e.camLocation.hasOwnProperty(R)||(e.camLocation[R]={},e.camLocation[R].Position=new te(0,0,-10),e.camLocation[R].LookAt=new te(0,0,0)),P.name.includes("PositionMobile")){let T=P.position.clone();e.cameraBooted=!0,e.camInitPos=T,e.camLocation[R].PositionMobile=T}else if(P.name.includes("LookAtMobile")){let T=P.position.clone();e.camInitLookAt=T,e.camLocation[R].LookAtMobile=T}else if(P.name.includes("Position")){let T=P.position.clone();e.cameraBooted=!0,e.camInitPos=T,e.camLocation[R].Position=T}else if(P.name.includes("LookAt")){let T=P.position.clone();e.camInitLookAt=T,e.camLocation[R].LookAt=T}else if(P.name.includes("ReturnPosition")){let T=P.position.clone();e.camReturnPos=T,e.camLocation[R].ReturnPosition=T}else if(P.name.includes("ReturnLookAt")){let T=P.position.clone();e.camReturnLookAt=T,e.camLocation[R].ReturnLookAt=T}}),Object.keys(e.camLocation).forEach(P=>{let E=e.camLocation[P];E.hasOwnProperty("PositionMobile")||(E.PositionMobile=E.Position),E.hasOwnProperty("LookAtMobile")||(E.LookAtMobile=E.LookAt)})}if(m.indexOf("AutoCamPaths")>-1){let x=p[f.AutoCamPaths].children;for(this.log("AutoCamPaths - ",p[f.AutoCamPaths]),this.pxlAutoCam.autoCamPaths[e.roomName]=[];x.length>0;){let g=x.pop();if(g.type=="Group"){let S={};g.children.forEach(P=>{P.matrixAutoUpdate=!1,S[P.name]=P}),g.visible=!1,g.matrixAutoUpdate=!1,l.add(g),this.pxlAutoCam.autoCamPaths[e.roomName].push(S)}}}if(m.indexOf("Instances")>-1&&this.pxlQuality.detailLimit==0){let x=[...p[f.Instances].children];if(this.log("Instances - ",p[f.Instances]),x.length>0){e.hasOwnProperty("baseInstancesNames")||(e.baseInstancesNames=[]),e.hasOwnProperty("baseInstancesList")||(e.baseInstancesList={});let g=[];x.forEach((S,b)=>{if(this.checkForUserData(e,l,S),s.hasOwnProperty(S.name)){let P=null;S.material.map&&(P=S.material.map),S.material=s[S.name],P&&(S.material.uniforms.hasOwnProperty("diffuse")&&(S.material.uniforms.diffuse.value=P),S.material.hasOwnProperty("emissiveMap")&&(S.material.emissiveMap=P,S.material.emissive.r>0&&(S.material.emissiveIntensity=S.material.emissive.r))),S.matrixAutoUpdate=!1}e.baseInstancesNames.push(S),e.baseInstancesList[S.name]=S})}}if(m.indexOf("Lights")>-1){let x=p[f.Lights].children;for(this.log("Lights - ",p[f.Lights]);x.length>0;){let g=x.pop();x.push(...g.children),g.type.includes("Light")&&(e.hasOwnProperty("lightList")||(e.lightList={}),e.geoList.hasOwnProperty("lights")||(e.geoList.lights=[]),g.type=="PointLight"&&(g.decay=3,g.distance=20*g.intensity,g.intensity=2),e.lightList.hasOwnProperty(g.type)||(e.lightList[g.type]=[]),e.lightList[g.type].push(g),e.geoList.lights.push(g),g.matrixAutoUpdate=!1,l.add(g))}}if(m.includes("Scene")||m.includes("MainScene")){let x=f.Scene||f.MainScene,g=p[x].children;this.log("MainScene - ",p[x]);let S=-1;for(;S<g.length&&(S++,!(S>=g.length));){let b=g[S];if(this.checkForUserData(e,l,b),b.isMesh){b.userData.hasOwnProperty("Show")&&(!b.userData.Show||b.userData.Show==0)&&(b.visible=!1),e.geoList[b.name]=b;let P=_.FrontSide;if(b.userData.doubleSided&&(P=_.DoubleSide),s.hasOwnProperty(b.name)){let E=null;b.material.map&&(E=b.material.map),b.material=s[b.name],E&&(b.material.uniforms.hasOwnProperty("diffuse")&&(b.material.uniforms.diffuse.value=E),b.material.hasOwnProperty("emissiveMap")&&(b.material.emissiveMap=E,b.material.emissive.r>0&&(b.material.emissiveIntensity=b.material.emissive.r))),b.matrixAutoUpdate=!1}else{let E=b.material;Array.isArray(b.material)||(E=[b.material]),this.checkIsGlassLiquid(e,l,b,E)||E.forEach(R=>{R.map&&!R.emissiveMap&&R.emissive.r>0&&(R.emissiveMap=R.map,R.emissiveIntensity=R.emissive.r,R.emissive=new _.Color(16777215)),R.side=P})}}else if(b.type.includes("Light"))e.lightList.hasOwnProperty(b.type)||(e.lightList[b.type]=[]),e.lightList[b.type].push(b);else if(b.type=="Group"){let P=!0;if(e.geoList.hasOwnProperty("Scripted")){let E=Object.keys(e.geoList.Scripted)}P&&g.push(...b.children)}}l.add(p[x])}if(m.indexOf("Glass")>-1){let x=p[f.Glass].children;if(this.log("Glass - ",p[f.Glass]),x.length>0){if(!e.glassGroup){let g=new _.Group;e.glassGroup=g,l.add(g)}for(;x.length>0;){let g=x.pop();if(x.push(...g.children),g.isMesh){this.checkForUserData(e,l,g);let S=g.material.clone();g.material=S,g.material.transparent=!0,g.material.opacity=.5,g.material.shininess=20,g.material.specular=g.material.color.clone(),g.material.specular.r=g.material.specular.r*.5+.1,g.material.specular.g=g.material.specular.g*.5+.1,g.material.specular.b=g.material.specular.b*.5+.1,g.material.side=_.BackSide,g.material.depthWrite=!1,g.matrixAutoUpdate=!1,g.renderOrder=1,e.glassList.push(g),e.glassGroup.add(g);let b=g.geometry.clone(),P=g.material.clone();P.copy(g.material);let E=new _.Mesh(b,P);E.material.shininess=40,E.material.side=_.FrontSide,E.matrixAutoUpdate=!1,E.renderOrder=2;let R=g.position,T=g.rotation,B=g.scale;E.rotation.set(T.x,T.y,T.z),E.position.set(R.x,R.y,R.z),E.scale.set(B.x,B.y,B.z),E.updateMatrix(),l.add(E),e.glassList.push(E),e.glassGroup.add(E)}}}}if(m.indexOf("Colliders")>-1){let x=p[f.Colliders];this.log("Colliders - ",p[f.Colliders]);let g=x.children;e.collidersExist=g.length>0;for(let S=0;S<g.length;++S){let b=g[S].name,P=g[S].children;for(;P.length>0;){let E=P.pop();if(P.push(...E.children),E.isMesh){E.visible=!1;let R="noAxis";E.userData.checkX&&E.userData.checkZ&&(R=~~(E.userData.checkX>0)+(~~(E.userData.checkZ>0)+"")),b=="ColliderWalls"?(e.antiColliderActive=!0,e.antiColliderList[R].push(E)):b=="ColliderTops"?(e.antiColliderTopActive=!0,e.antiColliderTopList[R].push(E)):(b=="RoomWarpZone"&&e.roomWarp.push(E),e.colliderActive=!0,e.colliderList[R].push(E)),E.matrixAutoUpdate=!1,l.add(E),e.geoList[E.name]=E}}}}if(m.indexOf("PortalExit")>-1){let x=p[f.PortalExit].children;for(this.log("PortalExit - ",p[f.PortalExit]);x.length>0;){let g=x.pop();g.matrixAutoUpdate=!1,e.portalList[g.name]=g}}if(m.indexOf("FlatColor")>-1){let x=p[f.FlatColor].children;for(this.log("FlatColor - ",p[f.FlatColor]);x.length>0;){let g=x.pop();if(x.push(...g.children),g.isMesh){this.checkForUserData(e,l,g);let S=new _.MeshBasicMaterial({color:g.material.color.clone()});S.side=_.FrontSide,S.flatShading=!0,g.material=S,g.matrixAutoUpdate=!1,l.add(g)}}}if(m.indexOf("LambertColor")>-1){let x=p[f.LambertColor].children;for(this.log("LambertColor - ",p[f.LambertColor]);x.length>0;){let g=x.pop();if(x.push(...g.children),g.isMesh){this.checkForUserData(e,l,g);let S=new _.MeshLambertMaterial;if(g.material.map){let b=g.material.map.clone();S.map=b,S.emissiveMap=b,S.emissiveIntensity=.5,g.material=S}else S.color=g.material.color.clone(),S.emissive=g.material.emissive.clone(),S.side=_.FrontSide,S.flatShading=!0,g.material=S;g.matrixAutoUpdate=!1,l.add(g)}}}if(m.indexOf("Sky")>-1){let x=p[f.Sky].children;for(this.log("Sky - ",p[f.Sky]);x.length>0;){let g=x.pop();if(x.push(...g.children),g.isMesh){let S=new _.ShaderMaterial({uniforms:{diffuse:{type:"t",value:g.material.map},envDiffuse:{type:"t",value:null},noiseTexture:{type:"t",value:this.pxlEnv.cloud3dTexture},fogColor:{value:l.fog.color},time:{value:this.pxlTimer.msRunner},camNear:{type:"f",value:e.camera.near},camFar:{type:"f",value:e.camera.far*.85},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.scene.skyObjectVert(),fragmentShader:this.pxlShaders.scene.skyObjectFrag(this.options.skyHaze)});g.geometry.computeFaceNormals(),g.geometry.computeVertexNormals(),g.material=S,g.matrixAutoUpdate=!1,g.frustumCulled=!1,g.layers.set(this.pxlEnv.renderLayerEnum.SKY),e.geoList[g.name]=g,e.textureList[g.name]=S,l.add(g)}}}if(m.indexOf("AnimatedTextures")>-1){let x=p[f.AnimatedTextures].children;for(this.log("AnimatedTextures - ",p[f.AnimatedTextures]);x.length>0;){let g=x.pop();if(x.push(...g.children),g.isMesh){this.checkForUserData(e,l,g);let S={time:{value:this.pxlTimer.msRunner},glowTexture:{type:"t",value:g.material.map},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},glowColor:{value:new te(.01,.35,.55)},intensity:{type:"f",value:.35},rate:{type:"f",value:2},freq:{type:"f",value:1}},b=this.pxlShaders.animated.animTextureVert(),P=this.pxlShaders.animated.animTextureFrag(),E=new _.ShaderMaterial({uniforms:S,vertexShader:b,fragmentShader:P,transparent:!0,side:_.FrontSide});g.geometry.computeFaceNormals(),g.geometry.computeVertexNormals(),g.material=E,g.matrixAutoUpdate=!1,l.add(g)}}}if(m.indexOf("ScrollingTextures")>-1){let x=p[f.ScrollingTextures].children;this.log("ScrollingTextures - ",p[f.ScrollingTextures]);let g=1;for(;x.length>0;){g+=1;let S=x.pop();if(x.push(...S.children),S.isMesh){this.checkForUserData(e,l,S);let b=S.name,P=.05;b.indexOf("_")>-1&&(P=b.split("_")[1],P=parseInt(P)*.01);let E=new _.ShaderMaterial({uniforms:{scrollTexture:{type:"t",value:S.material.map},time:{value:this.pxlTimer.msRunner},speed:{value:P},seed:{type:"f",value:g*1.1423},boostPerc:{value:1}},vertexShader:this.pxlShaders.animated.scrollingTextureVert(),fragmentShader:this.pxlShaders.animated.scrollingTextureFrag(),transparent:!0,side:_.FrontSide});S.geometry.computeFaceNormals(),S.geometry.computeVertexNormals(),S.material=E,S.matrixAutoUpdate=!1,l.add(S)}}}if(m.indexOf("UserScreens")>-1){let x=p[f.UserScreens].children;this.log("UserScreens - ",p[f.UserScreens]);let g=0,S=[new te(1,0,0),new te(0,1,0),new te(0,0,1)],b=[this.assetRoot+"DJ_Vector_Masks_1.jpg",this.assetRoot+"DJ_Vector_Masks_2.jpg",this.assetRoot+"DJ_Vector_Masks_3.jpg"],P=0,E=0,R=S.length;for(;x.length>0;){let T=x.pop();if(x.push(...T.children),T.isMesh){let B=new _.ShaderMaterial({uniforms:{camExists:{type:"f",value:0},time:{value:this.pxlTimer.msRunner},seed:{type:"f",value:g*1.1423},alpha:{type:"f",value:1},boostPerc:{value:e.userScreenIntensity},scale:{value:new K(100,100)},ratio:{value:new K(1,1)},videoFeed:{type:"t",value:null},cloudNoise:{type:"t",value:this.pxlEnv.cloud3dTexture},maskChannel:{value:S[P]},maskMap:{type:"t",value:this.pxlUtils.loadTexture(b[E])}},vertexShader:e.userScreenVert,fragmentShader:e.userScreenFrag,transparent:!0,side:_.FrontSide});T.geometry.computeFaceNormals(),T.geometry.computeVertexNormals(),T.material=B,T.matrixAutoUpdate=!1,e.pxlEnv.camScreenData.screenGeoList.push(T),l.add(T),g+=1,P=g%R,E=Math.floor(g/3)%R}}}if(m.indexOf("Items")>-1){let x=p[f.Items].children;for(this.log("Items - ",p[f.Items]);x.length>0;){let g=x.pop();if(g.type=="Group"){let S=g.children;S.length>0&&(S.forEach(b=>{if(b.name.includes("Item")){let P=new _.ShaderMaterial({uniforms:{color:{value:b.material.emissive.clone()},alphaMap:{type:"t",value:b.material.map},cloudNoise:{type:"t",value:this.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemRotateRate}},vertexShader:this.pxlShaders.objects.itemVert(),fragmentShader:this.pxlShaders.objects.itemFrag(),transparent:!0,side:_.DoubleSide,depthTest:!0,depthWrite:!1});b.material=P,this.pxlUser.itemList[g.name]=b}else if(b.name.includes("Base")){let P=new _.ShaderMaterial({uniforms:{color:{value:b.material.emissive.clone()},alphaMap:{type:"t",value:b.material.map},cloudNoise:{type:"t",value:this.cloud3dTexture},time:{value:this.pxlTimer.msRunner},intensity:{type:"f",value:1.5},rate:{type:"f",value:this.pxlUser.itemBaseRotateRate}},vertexShader:this.pxlShaders.objects.itemBaseVert(),fragmentShader:this.pxlShaders.objects.itemBaseFrag(),transparent:!0,side:_.DoubleSide,depthTest:!0,depthWrite:!1});b.material=P,this.pxlUser.itemBaseList.push(b)}}),l.add(g),this.pxlUser.itemGroupList[g.name]=g,this.pxlUser.itemListNames.push(g.name))}}}if(m.includes("Scripted")){let x=p[f.Scripted].children;for(this.log("Scripted - ",p[f.Scripted]);x.length>0;){let g=x.pop();g.isMesh&&(e.geoList[g.name]=g,l.add(g))}}if(m.includes("Clickable")){let x=p[f.Clickable];this.log("Clickable - ",p[f.Clickable]);let g=x.children;for(let S=0;S<g.length;++S){let b=g[S].name,P=g[S].children;for(;P.length>0;){let E=P.pop();if(P.push(...E.children),E.isMesh){let R=new _.MeshBasicMaterial;R.color=new _.Color(16777215),E.material.emissive=new _.Color(4473924),E.material.emissiveMap=E.material.map,E.matrixAutoUpdate=!1,e.objectClickableObjectList[E.name]||(e.objectClickableObjectList[E.name]={}),e.objectClickableObjectList[E.name][b]=E,e.objectClickable.push(E),l.add(E),b=="Hover"&&(E.visible=!1)}}}}if(m.includes("Markers")){let x=p[f.Markers].children;for(this.log("Markers - ",p[f.Markers]);x.length>0;){let g=x.pop();e.marker[g.name]=g.position}}this.pxlEnv.geoList[i]=v,this.pxlEnv.geoLoadList[i]=1,e.fbxPostLoad()},null,v=>{i!=""&&(this.pxlEnv.geoLoadList[i]=1)}),n}loadAnimFBX(e,t,i,s,a){t==""&&(t=e.roomName),this.pxlEnv.geoLoadListComplete=0,this.pxlEnv.geoLoadList[t]=0;let l=0,n=e.scene;var v=new Xe;return v.load(i,p=>{let f=p.children,m={},C=[];f.forEach((b,P)=>{let E=b.name.split("_")[0];C.push(E),m[E]=P}),p.traverse(b=>{this.checkForUserData(e,n,b),b.userData.hasOwnProperty("doubleSided")&&b.userData.doubleSided&&(b.material.side=_.DoubleSide)}),this.pxlAnim.initObject(t,p),this.log("Animation FBX - ",C[0]),n.add(p),p.frustumCulled=!1;var x=new Xe;let g=[];Object.keys(s).forEach(b=>{let P=s[b],E=new Promise((R,T)=>{x.load(P,B=>{B.animations.length==0&&(this.log("No animations found in file",P),this.log(B),R()),this.pxlAnim.addClips(t,b,B),this.log("Animation Loaded",b),R()},null,B=>{this.log("Animation Load Error"),this.log(B),T(B)})});g.push(E)}),Promise.all(g).then(()=>{this.pxlAnim.setStateConnections(t,a),e.geoList[t]=p,this.pxlEnv.geoLoadList[t]=1,e.animPostLoad(t)}).catch(b=>{this.log("Error loading animations",b)})},null,p=>{t!=""&&(this.pxlEnv.geoLoadList[t]=1)}),v}pxlShaderBuilder(e,t,i,s=null){var a,l={diffuse:{type:"t",value:null},time:{value:this.pxlTimer.msRunner}};e!=null&&(l=Object.assign({},l,e));let n={uniforms:l,vertexShader:t,fragmentShader:i};return s&&(n.defines=s),a=new _.ShaderMaterial(n),a.transparent=!0,a.depthTest=!0,a}removeChildren(e){for(var t=0,i=e.children,s=0;s<i.length;++s)i[s].type=="Group"&&(e.remove(i[s]),t++);return t}findMesh(e){for(var t=null,i=e.children,s=0;s<i.length;++s)if(i[s].type=="Mesh"){t=i[s];break}return t}getBBoxCentroid(e){try{var t=new _.Box3().setFromObject(e),i=t.min,s=t.max,a=new te().addVectors(s,i).multiplyScalar(.5);e.userData={bbox:t,centroid:a},mapBookHelper?.update()}catch(l){console.log("- - - - - - - - ERROR - - - - - - - -"),console.log(`     Object does not exist.
           - Error Info -`),console.log(l),console.log("- - - - - - - - - - - - - - - - - - -")}}loadScript(e){return new Promise((t,i)=>{let s=document.createElement("script");s.type="text/javascript",s.src=e,s.async=!0,s.onreadystatechange=()=>{t(!0)},s.onload=()=>{t(!0)},document.head.appendChild(s)})}xmlHttp(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}static getURLContent(e){return new Promise((t,i)=>{let s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");s.open("GET",e),s.onload=a=>{s.readyState==4&&s.status>=200&&s.status<300?t(s.response):t(s.statusText)},s.onerror=()=>i(s.statusText),s.send()})}getExternalHTML(e,t){if(!window.XMLHttpRequest){window.open(e,"_blank");return}let i=this.xmlHttp();i.onreadystatechange=function(){this.readyState==4&&this.status==200&&t&&typeof t=="function"&&t(i.responseText)},i.open("GET",e,!0),i.responceType="document",i.send()}fetchURLStatus(e,t,i){fetch(e,{method:"HEAD"}).then(s=>{t(s.status,i)}).catch(s=>{t(404,i)})}urlExistsFallback(e){return new Promise((t,i)=>{let s=this.xmlHttp();s.open("HEAD",e,!0),s.send(),console.log(s),s.onreadystatechange=function(){this.readyState==this.DONE&&t(this.status<400)},s.onerror=a=>{t(!1)},s.ontimeout=a=>{t(!1)}})}urlExists(e){var t;return Worker&&(t=new Worker("js/pxlBase/webWorkers/FileWorkerIO.js")),new Promise((i,s)=>{if(t)t.onmessage=function(a){i(a.data.data)},t.onerror=function(a){i(!1)},t.postMessage({type:"urlExists",data:e});else{let a=this.urlExistsFallback(e).then(l=>{i(l)})}}).then(i=>(t&&t.terminate(),i)).catch(i=>(t&&t.terminate(),!1))}}});var Ta={};U(Ta,{QualityController:()=>Ye});var Ye,Li=k(()=>{ue();Ye=class{constructor(e,t=!1,i={}){this.pxlTimer=null,this.pxlCookie=null,this.pxlDevice=null,this.pxlEnv=null,this.msLog=0,this.prevMS=new Date().getTime()*.001,this.autoQuality=!1,this.percent=1,this.verbose=e,this.screenResPerc=1,this.mBlurPercMult=t?.65:1,this.bloomPercMult=t?.65:1,this.bufferPercMult=1,this.renderTargetScale=10,this.percentSteps=[.3,.45,.85],this.fpsCounter=new te(30,0,new Date().getTime()*.001),this.countAtLevel=0,this.shiftRate=.01,this.moduleQualityList=[],this.qualityStep=-1,this.qualityMaxSteps=3,this.qualityStepValues=[.25,.5,.75,1],this.benchmarkStart=-1,this.benchmarkTime=-1,this.benchmarkRating=-1,this.benchmarkTimes=[9,17],this.setFromBenchmark=!0,this.benchmarkQuality=1,this.benchmarkQualityRange=[.25,1],this.settingsQualityChoice=null,this.detailLimitOverride=Object.keys(i).includes("dlimit")?i.dlimit:0,this.detailLimit=this.detailLimitOverride!=null?this.detailLimitOverride:0,this.settings={leftRight:!0,mouse:!0,graphics:2,resolution:1,fog:2,bloom:!0,motion:!1},this.settingsLow={resolution:.5,fog:0,bloom:!1,motion:!1},this.settingsMedium={resolution:.75,fog:1,bloom:!0,motion:!1},this.settingsHigh={resolution:1,fog:2,bloom:!0,motion:!1},this.settingsCustom=null}setDependencies(e){this.pxlTimer=e.pxlTimer,this.pxlCookie=e.pxlCookie,this.pxlDevice=e.pxlDevice,this.pxlEnv=e.pxlEnv}init(){this.detailLimitOverride!=null?this.detailLimit=this.detailLimitOverride:this.pxlCookie.hasCookie("detailLimit")&&(this.detailLimit=this.pxlCookie.parseCookie("detailLimit")),this.verbose>=xe.INFO&&console.log("Graphics Limiting is set to level ",this.detailLimit),this.setFromBenchmark=!this.pxlCookie.parseDict(this.settings),this.pxlCookie.hasCookie("leftRight")&&(this.settings.leftRight=this.pxlCookie.parseCookie("leftRight")),this.pxlCookie.hasCookie("mouse")&&(this.settings.mouse=this.pxlCookie.parseCookie("mouse"));let e=Object.keys(this.settingsHigh);if(this.pxlCookie.hasCookie("qualitySetting")){let t=this.pxlCookie.parseCookie("qualitySetting");this.settings.graphics=t,this.settingsQualityChoice=t}}step(){this.mapFpsQualitCheck()}attachModule(e=null){e&&this.moduleQualityList.push(e)}startBenchmark(){this.pxlTimer.step(),this.benchmarkStart=this.pxlTimer.curMS}endBenchmark(){this.pxlTimer.step();let e=this.pxlTimer.curMS-this.benchmarkStart;this.benchmarkTime=e,this.benchmarkRating=1-Math.min(1,Math.max(0,(e-this.benchmarkTimes[0])/(this.benchmarkTimes[1]-this.benchmarkTimes[0]))),this.benchmarkQuality=this.benchmarkRating*(this.benchmarkQualityRange[1]-this.benchmarkQualityRange[0])+this.benchmarkQualityRange[0];let t=Math.min(1,Math.max(0,this.benchmarkRating));if(t=Math.ceil(Math.max(.05,t)*this.qualityMaxSteps)-1,this.qualityStep=t,this.setFromBenchmark){let i=["Low","Medium","High"][this.qualityStep];this.setQualityLevel(this.qualityStep)}else this.settingsQualityChoice==null&&(this.settingsQualityChoice=3),this.settingsCustom={},Object.keys(this.settingsHigh).forEach(s=>{this.settingsCustom[s]=this.settings[s]});this.setDependentSettings()}mapFpsQualitCheck(){if(this.pxlTimer.curMS-this.fpsCounter.z>1){this.fpsCounter.x=this.fpsCounter.y,this.fpsCounter.y=0,this.fpsCounter.z=this.pxlTimer.curMS;let e=1;this.fpsCounter.x<15&&(e=-1);let t=Math.min(1,Math.max(0,this.percent+this.shiftRate*e));this.autoQuality&&this.mapAutoQualityUpdate(t,!1)}this.fpsCounter.y+=1,this.pxlTimer.prevMS=this.pxlTimer.curMS}mapAutoQualityUpdate(e=null,t=!1){let i=Math.min(1,Math.max(0,e));i=Math.ceil(Math.max(.05,i)*this.qualityMaxSteps)-1,this.qualityStep=i}setGraphicsSettings(e=null,t=3){if(e==null)if(this.qualityStep==0)e=this.settingsLow;else if(this.qualityStep==1)e=this.settingsMedium;else if(this.qualityStep==2)e=this.settingsHigh;else return;t==3&&this.checkCustomDict(),Object.keys(e).forEach(s=>{this.setComponentQuality(s,e[s]),this.settings[s]=e[s],t==3&&(this.settingsCustom[s]=e[s])}),this.setDependentSettings(),this.colliderPrevObjHit=null,t!=null&&(this.settings.graphics=t)}reapplySettings(){Object.keys(this.settingsLow).forEach(t=>{this.setComponentQuality(t,this.settings[t],!1)}),this.setDependentSettings()}setQualityLevel(e){this.pxlDevice.mobile&&(e=1),this.setQualityCookie(e),e==0?this.setLowQuality():e==1?this.setMediumQuality():e==2?this.setHighQuality():e==3&&this.setCustomQuality()}setLowQuality(){this.settingsQualityChoice=0,this.setGraphicsSettings(this.settingsLow,0)}setMediumQuality(){this.settingsQualityChoice=1,this.setGraphicsSettings(this.settingsMedium,1)}setHighQuality(){this.settingsQualityChoice=2,this.setGraphicsSettings(this.settingsHigh,2)}setCustomQuality(){this.checkCustomDict(),this.settingsQualityChoice=3,this.setGraphicsSettings(this.settingsCustom)}checkCustomDict(){if(this.settingsCustom==null){this.settingsCustom={};let e=this.settingsHigh;this.settingsQualityChoice&&(this.settingsQualityChoice==0?e=this.settingsLow:this.settingsQualityChoice==1?e=this.settingsMedium:this.settingsQualityChoice==2&&(e=this.settingsHigh)),Object.assign(this.settingsCustom,e)}}setQualityCookie(e){this.pxlCookie.setCookie("qualitySetting",e)}setComponentQuality(e,t,i=!0){switch(e){case"leftRight":this.settings[e]=t;break;case"mouse":this.settings[e]=t;break;case"resolution":this.screenResPerc=t,this.pxlDevice.resizeRenderResolution(),this.settings[e]=t,this.pxlEnv.geoList.snow&&this.pxlEnv.geoList.snow.material&&(this.pxlEnv.geoList.snow.material.uniforms.pointScale.value=this.pxlEnv.geoList.snow.pBaseScale*t);break;case"fog":this.pxlEnv.mapOverlayHeavyPass.enabled=t==2,this.pxlEnv.mapOverlayPass.enabled=t==1,this.pxlEnv.mapOverlaySlimPass.enabled=t==0,this.pxlEnv.mapBoxAAPass.enabled=t==2,this.pxlEnv.mapCrossAAPass.enabled=t==1,this.pxlEnv.portaluserScreenIntensity.x=1,this.pxlEnv.userScreenIntensity.x=.65,this.pxlEnv.userScreenIntensity.y=0,this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=t==0?.7:.3),this.settings[e]=t;break;case"bloom":this.pxlEnv.portaluserScreenIntensity.x=t?.4:1,this.pxlEnv.mapGlowPass.enabled=t,this.pxlEnv.roomBloomPass.enabled=t,this.pxlEnv.roomGlowPass.enabled=t,this.pxlEnv.userScreenIntensity.x=t?.65:.8,this.pxlEnv.userScreenIntensity.y=t?0:.8,this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=t==0?.7:.3),this.pxlEnv.mapMotionBlurPass.enabled=t,this.settings[e]=t;break;case"motion":this.pxlEnv.mapMotionBlurPass.enabled=t,this.settings[e]=t;break;default:break}i&&this.pxlCookie.setCookie(e,t)}setDependentSettings(){let e=1,t=1,i=0,s=.6;this.settings.fog==2?(this.pxlEnv.mapMotionBlurPass.enabled=!1,this.pxlEnv.mapOverlayHeavyPass.enabled=!0,this.pxlEnv.mapOverlayPass.enabled=!1,this.pxlEnv.mapOverlaySlimPass.enabled=!1,this.pxlEnv.mapBoxAAPass.enabled=!0,this.pxlEnv.mapCrossAAPass.enabled=!1,e=1,t=.5):this.settings.fog==1?(this.pxlEnv.mapMotionBlurPass.enabled=!1,this.pxlEnv.mapOverlayHeavyPass.enabled=!1,this.pxlEnv.mapOverlayPass.enabled=!0,this.pxlEnv.mapOverlaySlimPass.enabled=!1,this.pxlEnv.mapBoxAAPass.enabled=!1,this.pxlEnv.mapCrossAAPass.enabled=!0,e=1.15,t=.5):(this.pxlEnv.mapMotionBlurPass.enabled=!1,this.pxlEnv.mapOverlayPass.enabled=!1,this.pxlEnv.mapOverlaySlimPass.enabled=!0,this.pxlEnv.mapBoxAAPass.enabled=!1,this.pxlEnv.mapCrossAAPass.enabled=!1,e=1,t=.4),this.settings.bloom?(this.pxlEnv.mapGlowPass.enabled=!0,this.pxlEnv.roomBloomPass.enabled=!0,this.pxlEnv.roomGlowPass.enabled=!0,this.pxlEnv.userScreenIntensity.x=.65,this.pxlEnv.userScreenIntensity.y=0,i=1,s=.25):(this.pxlEnv.mapGlowPass.enabled=!1,this.pxlEnv.roomBloomPass.enabled=!1,this.pxlEnv.roomGlowPass.enabled=!1,this.pxlEnv.engine.setRenderTarget(this.pxlEnv.mapComposerGlow.renderTarget2),this.pxlEnv.engine.clear(),this.pxlEnv.engine.setRenderTarget(this.pxlEnv.roomGlowPass.renderTarget2),this.pxlEnv.engine.clear(),this.pxlEnv.engine.setRenderTarget(null),this.pxlEnv.userScreenIntensity.x=.8,this.pxlEnv.userScreenIntensity.y=0,t=1,i=0,s=.5);let a=this.pxlEnv.geoList.Circular_Gate;a&&(a.material.uniforms.bloomBoost.value=i),this.pxlEnv.geoList.HDRView&&(this.pxlEnv.geoList.HDRView.material.uniforms.cdMult.value=this.settings.bloom?.3:.7);let l=this.pxlEnv.geoList.CirculateGateVideoSphere;l&&(l.material.color.r=s,l.material.color.g=s,l.material.color.b=s),this.pxlEnv.portaluserScreenIntensity.x=t,this.pxlEnv.pxlCamera.colliderCurObjHit=null}}});var Ma={};U(Ma,{CookieManager:()=>Je});var Je,ki=k(()=>{Je=class{constructor(e="pxlNav-",t="/",i=30){let s=e.substring(-1)=="-"?e:e+"-";this.prepend=s,this.exp=i,this.path="path="+t,this.deleteDate="expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.sub="_%_"}pullData(){let e=document.cookie}getExpiration(){let e=new Date;return e.setTime(e.getTime()+this.exp*24*60*60*1e3),"expires="+e.toGMTString()+";"}valueToString(e){let t=typeof e;return isNaN(Number(e))?t=="string"?"'"+e+"'":t=="boolean"?e?"true":"false":e==null?"null":isNaN(Number(e))?"NaN":e:e}variableToString(e){return Array.isArray(e)?"["+e.map(i=>Array.isArray(i)?this.variableToString(i):this.valueToString(i)).join(",")+"]":this.valueToString(e)}hasCookie(e){return document.cookie.includes(this.prepend+e)}readCookie(e){if(this.hasCookie(e)){let t=new RegExp("(?="+this.prepend+e+").*?((?=;)|(?=$))","g");return document.cookie.match(t)[0].split("=")[1].replace(this.prepend,"").replace(this.sub,";")}return null}parseCookie(e){if(this.hasCookie(e)){let t=new RegExp("(?="+this.prepend+e+").*?((?=;)|(?=$))","g"),i=document.cookie.match(t)[0].split("=")[1].replace(this.prepend,"").replace(this.sub,";");return i=="true"?i=!0:i=="false"?i=!1:parseInt(i)==i?i=parseInt(i):parseFloat(i)==i&&(i=parseFloat(i)),i}return null}isEqual(e){return this.hasCookie(e)?(console.log(e),this.readCookie(e)==this.variableToString(e)):!1}evalCookie(e){if(e){if(this.hasCookie(e)){let t=new RegExp("(?="+this.prepend+e+").*?((?=;)|(?=$))","g");return console.log("Eval Cookie has been limited, responce is: "),console.log(document.cookie.match(t)[0].replace(this.prepend,"").replace(this.sub,";")),!0}return!1}else{let t=new RegExp("(?="+this.prepend+").*?((?=;)|(?=$))","g");return console.log("Eval Cookie has been limited, may error."),document.cookie.match(t).forEach(i=>{i.replace(this.prepend,"").replace(this.sub,";")}),!0}}setCookie(e,t){t=this.variableToString(t),t.replace&&t.replace(";",this.sub),document.cookie=this.prepend+e+"="+t+";"+this.getExpiration()+this.path}addDictionary(e){let t=Object.keys(e);for(let i=0;i<t.length;++i){let s=e[t[i]];s=this.variableToString(s),s.replace&&s.replace(";",this.sub),document.cookie=this.prepend+t[i]+"="+s+";"+this.getExpiration()+this.path}}parseDict(e){let t=Object.keys(e),i=!1;return t.forEach(s=>{this.hasCookie(s)&&(e[s]=this.parseCookie(s),i=!0)}),i}clearCookie(e){if(e)typeof e=="string"&&(e=[e]),e.forEach(t=>{document.cookie=t+"=;"+this.deleteDate+this.path});else{let t=new RegExp("(?="+this.prepend+").*?(?==)","g");document.cookie.match(t).forEach(s=>{document.cookie=s+"=;"+this.deleteDate+this.path})}}}});var Aa={};U(Aa,{Timer:()=>$e});var $e,Ui=k(()=>{ue();$e=class{constructor(){this.active=!1,this.msRunner=new K(0,0),this.msLog=0,this.fpsStats=-1;let e=new Date().getTime()*.001;this._bootMS=e,this._curMS=e,this._prevMS=e,this.videoFeeds=[],this.booted=!1}init(){this.booted||(this.prevMS=this.curMS,this.msRunner.x=0,this.msRunner.y=0,this.step(),this.booted=!0)}get runtime(){return this._curMS-this._bootMS}get curMS(){return this._curMS}updateTime(){this._curMS=new Date().getTime()*.001}get prevMS(){return this._prevMS}set prevMS(e){this._prevMS=e}start(){this.play()}pause(){return this.active=!this.active,this.active}play(){return this.active=!0,this.active}stop(){return this.active=!1,this.active}toggleMSLog(){this.msLog=(this.msLog+1)%2}step(){this.prevMS=this._curMS,this.updateTime(),this.fpsStats!=-1&&this.fpsStats.update();let e=this.curMS-this.prevMS;this.msRunner.x+=e>0?e:0,this.msRunner.y=(this.msRunner.y+e)*.5}}});var Ra={};U(Ra,{User:()=>Ze});var Ze,Ii=k(()=>{Ze=class{constructor(e=null){this.id=null,this.jitsiUserId=null,this.jmaActive=!1,this.jmaConnectObj=!1,this.jmaServer=!1,this.jmaRoom=!1,this.jmaUserId=null,this.jmaUserName=null,this.jmaTempUserIdActive=!1,this.pxlEnv=null,this.welcome=!1,this.tankStrafe=!1,this.invertMouse=!1,this.renderSettingsCookie="settings_renderSettings",this.controlModeCookie="settings_controlMode",this.tankStrageCookie="settings_tankStrage",this.invertMouseCookie="settings_invertMouse",this.rootUserCookie="data_userEnlil",this.adminUserCookie="data_userNanna",this.localUserMoved=!1,this.localUserTurned=!1,this.itemRunTime=60,this.itemGroupList=[],this.itemList={},this.itemListNames=[],this.itemBaseList=[],this.itemActiveList=[],this.itemInactiveCmd=[],this.itemActiveTimer=[],this.itemRotateRate=.65,this.itemBaseRotateRate=.1,this.itemBobRate=.35,this.itemBobMag=0,this.mPick=[],this.activeEffects={},this.lowGrav=0,this.lKing=0,this.lKingInactive=[.025,.018],this.lKingActive=[.35,.25],this.lKingWarp=0,this.lKingPass=null,this.sField=0,this.sFieldWarp=0,this.sFieldPass=null,this.iZoom=0,this.iZoomWarp=0,this.iZoomPass=null}checkItemWearOff(e){return this.itemActiveList.length>0&&this.itemActiveTimer[0]-e<=0?(this.itemInactiveCmd.shift()(),this.itemActiveTimer.shift(),this.itemActiveList.shift(),!0):!1}checkItemPickUp(e){if(e=="LowGravity")return this.lowGrav==0?(this.lowGrav=1,!0):!1;if(e=="LizardKing")return this.lKing==0?(this.lKing=1,this.lKingWarp.set(...this.lKingActive),this.lKingPass.enabled=!0,!0):!1;if(e=="StarField")return this.sField==0?(this.sField=1,this.sFieldPass.enabled=!0,!0):!1;if(e=="InfinityZoom")return this.iZoom==0?(this.iZoom=1,this.iZoomPass.enabled=!0,!0):!1}toggleTankRotate(e=null){this.tankStrafe=e??!this.tankStrafe,this.tankStrageText=this.tankStrafe?"Left/Right Rotation":"Left/Right Strafe"}toggleMouseInf(e=null){this.invertMouse=e??!this.invertMouse,this.invertMouseText=this.invertMouse?"Revert Mouse":"Invert Mouse"}toggleFpsStats(){pxlTimer.fpsStats==-1?(pxlTimer.fpsStats=new Stats,document.body.appendChild(pxlTimer.fpsStats.domElement),pxlTimer.fpsStats.update(),this.fpsDisplayText="Hide FPS Stats"):(pxlTimer.fpsStats.domElement.remove(),pxlTimer.fpsStats=-1,this.fpsDisplayText="Display FPS Stats")}}});var ka={};U(ka,{Device:()=>qe});import*as La from"./three.module.js";var qe,Bi=k(()=>{ue();qe=class{constructor(e,t,i){this.projectTitle=e,this.pxlCore=t,this.pxlEnv=null,this.pxlTimer=null,this.pxlAudio=null,this.pxlUser=null,this.pxlCamera=null,this.pxlAutoCam=null,this.pxlGuiDraws=null,this.pxlQuality=null,this.allowCursorSwap=!1,this.longTouchLength=.75;let s=window.innerWidth,a=window.innerHeight;this.sW=s,this.sH=a,this.touchScreen=!1,this.x=s*.5,this.y=a*.5,this.screenRes=new K(1/s,1/a),this.screenAspect=new K(1,1),this.screenRatio=new K(s/a,a/s),this.origRes=new K(s,a),this.screenResDeltaPerc=new K(1,1),this.mapW=1,this.mapH=1,this.gammaCorrection=new te(1,1,1),this.lightShift=new K(1,1),this.firefox=/Firefox/i.test(navigator.userAgent),this.mobile=i,this.button=0,this.inputActive=!1,this.startPos=[0,0],this.endPos=[0,0],this.dragCount=0,this.dragTotal=0,this.latched=!1,this.windowHidden=!1,this.mouseX=s/2,this.mouseY=a/2,this.keyDownCount=[0,0,0],this.directionKeyDown=!1,this.directionKeysPressed=[0,0,0,0],this.shiftBoost=1,this.controlKey=!1,this.objectPercList=[],this.objectPercFuncList={},this.objectPerc={active:!1,object:null,left:0,top:0,width:0,height:0,startX:0,startY:0,offsetX:0,offsetY:0,percX:0,percY:0,offsetPercX:0,offsetPercY:0},this.canCursorLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,this.cursorLockActive=!1,this.cursorRightButtonLockActive=!1,this.gyroGravity=[0,0,0],this.touchMouseData={active:!1,lock:!1,mode:0,updated:0,button:0,dragCount:0,dragTotal:0,startPos:null,moveMult:new K(1,1),velocityEase:new K(0,0),velocityEasePrev:null,velocity:new K(0,0),mBlurVelInf:new K(2*this.screenRes.x,2*this.screenRes.y),prevDeltaPos:[0,0,0],endPos:null,latchMatrix:null,netDistance:new K(0,0),netDistYPerc:0,curDistance:new K(0,0),curFadeOut:new K(0,0),curStepDistance:new K(0,0),initialQuat:new La.Quaternion,releaseTime:0},this.subscriptableEvents=["keydown","keyup","resize"],this.callbackList={},this.init()}setDependencies(e){this.pxlEnv=e.pxlEnv,this.pxlTimer=e.pxlTimer,this.pxlAudio=e.pxlAudio,this.pxlUser=e.pxlUser,this.pxlCamera=e.pxlCamera,this.pxlAutoCam=e.pxlAutoCam,this.pxlGuiDraws=e.pxlGuiDraws,this.pxlQuality=e.pxlQuality}init(){this.setGammaCorrection();let e=this;document.addEventListener("mousedown",i=>{e.onmousedown(e,i)},!1),document.addEventListener("mousemove",i=>{e.onmousemove(e,i)},!1),document.addEventListener("mouseup",i=>{e.onmouseup(e,i)},!1),document.addEventListener("contextmenu",i=>{e.oncontextmenu(i)},!1),window.addEventListener("resize",i=>{e.resizeRenderResolution()},!1),document.addEventListener("touchstart",function(i){e.touchstart(e,i)},{passive:!0}),document.addEventListener("touchmove",function(i){e.touchmove(e,i)},{passive:!0}),document.addEventListener("touchend",function(i){e.touchend(e,i)},{passive:!0}),document.onkeydown=i=>{e.onkeydown(e,i)},document.onkeyup=i=>{e.onkeyup(e,i)};let t=this;document.addEventListener("visibilitychange",function(i){t.windowHidden=document.hidden,t.directionKeysPressed=[0,0,0,0],t.directionKeyDown=!1,t.shiftBoost=1,t.pxlCamera.workerFunc("focus",!document.hidden),t.runHiddenCalcs()}),typeof window.onblur=="object"&&(window.onblur=i=>{t.resetUserInput(i)}),window.addEventListener("beforeunload",i=>{if(t.controlKey==!0)return i.preventDefault(),i.returnValue="Close tab?",t.controlKey=!1,t.mapLockCursor(!1,0),"Close tab?"})}setGammaCorrection(e=null){if(e!=null){this.gammaCorrection.x=1/e,this.gammaCorrection.y=e,this.gammaCorrection.z=e;return}let t=1.5,i=1.1,s=1.2,a=.5;if(window&&window.navigator&&window.navigator.userAgent){let l=window.navigator.userAgent.match(/(windows|win32|win64|wince)/i);if(l&&l.length>0)t=2.2,i=.95,s=1,a=0;else{let n=window.navigator.userAgent.match(/(macintosh|macintel|macppc|mac68k|iphone|ipad|ipod)/i);n&&n.length>0?(t=1.8,i=.9,s=.97,a=.1):(t=1.8,i=.7,s=.96,a=.1)}}this.gammaCorrection.x=1/t,this.gammaCorrection.y=s,this.gammaCorrection.z=a,this.lightShift.x=i}runHiddenCalcs(){this.windowHidden&&setTimeout(()=>{this.runHiddenCalcs()},100)}resetUserInput(e){this.directionKeysPressed=[0,0,0,0],this.directionKeyDown=!1,this.shiftBoost=1,this.mapLockCursor(!1,0),this.pxlCamera.camJumpKey(!1),this.pxlCamera.deviceKey("space",!1),this.touchMouseData.active&&(this.touchScreen?this.endTouch(e):this.mapOnUp(e))}onmousemove(e,t){e.mapOnMove(t)}onmousedown(e,t){e.mapOnDown(t)}onmouseup(e,t){e.mapOnUp(t)}oncontextmenu(e){return e.preventDefault(),!1}touchstart(e,t){e.startTouch(t)}touchmove(e,t){e.doTouch(t)}touchend(e,t){e.endTouch(t)}onkeydown(e,t){e.keyDownCall(t)}onkeyup(e,t){e.keyUpCall(t)}get active(){return this.inputActive}set active(e){this.inputActive=!!e}preventDefault(e){e=e||window.event,e.preventDefault(e)&&e.preventDefault(e)(),e.returnValue=!1}setCursor(e){if(this.allowCursorSwap){if(e=="activeLatch"){let t=["grab","grabbing","all-scroll"][this.touchMouseData.button]}document.body.style.cursor=e}}getMouseXY(e){if(this.mobile)try{touch=e.touches[0],this.mouseX=touch.pageX,this.mouseY=touch.pageY}catch{}else{let t=this.pxlQuality.settings.mouse?-1:1;this.cursorLockActive?(this.mouseX+=(e.movementX||e.mozMovementX||e.webkitMovementX||0)*t,this.mouseY+=(e.movementY||e.mozMovementY||e.webkitMovementY||0)*t):(this.mouseX=e.clientX,this.mouseY=e.clientY)}}mapLockCursor(e=!1,t){this.canCursorLock&&!this.mobile&&(t==2?(!e&&this.cursorRightButtonLockActive?this.cursorRightButtonLockActive=!1:!e&&!this.cursorRightButtonLockActive&&(this.cursorRightButtonLockActive=!0),e=e||this.cursorRightButtonLockActive):e||(this.cursorRightButtonLockActive=e),e==!0?(this.pxlGuiDraws.pxlNavCanvas.focus(),this.pxlGuiDraws.pxlNavCanvas.requestPointerLock().catch(i=>{})):document.pointerLockElement&&document.exitPointerLock(),this.cursorLockActive=e)}mapOnDown(e){let t=e.target;t.getAttribute&&t.getAttribute("id")==this.pxlCore&&this.pxlTimer.active&&(this.pxlGuiDraws.chatMessageInput&&this.pxlGuiDraws.chatMessageInput.blur(),this.pxlGuiDraws.pxlNavCanvas.focus(),this.preventDefault(e),this.touchMouseData.button=e.which,this.touchMouseData.active=!0,this.touchMouseData.mode=this.touchMouseData.button,this.touchMouseData.startPos=new K(this.mouseX,this.mouseY),this.touchMouseData.endPos=new K(this.mouseX,this.mouseY),this.touchMouseData.curDistance=new K(0,0),this.touchMouseData.curStepDistance=new K(0,0),this.touchMouseData.dragCount=0,this.pxlAutoCam.touchBlender=!1,this.setCursor("grabbing"),this.mapLockCursor(!0,e.button))}mapOnMove(e){let t=e.target;if(t.getAttribute&&t.getAttribute("id")==this.pxlCore&&this.pxlTimer.active||this.cursorLockActive)if(this.preventDefault(e),this.getMouseXY(e),(this.touchMouseData.active||this.cursorLockActive)&&this.touchMouseData.startPos){this.touchMouseData.dragCount++;let i=this.touchMouseData.endPos.clone();this.touchMouseData.endPos=new K(this.mouseX,this.mouseY),this.touchMouseData.curDistance=this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos),this.touchMouseData.curStepDistance=this.touchMouseData.endPos.clone().sub(i),this.touchMouseData.netDistance.add(this.touchMouseData.curStepDistance.clone());let s=this.touchMouseData.velocity.clone();this.touchMouseData.velocity=this.touchMouseData.velocity.clone().multiplyScalar(3).add(this.touchMouseData.curStepDistance).multiplyScalar(.25),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)*8e-4,this.touchMouseData.curFadeOut.add(i.sub(this.touchMouseData.endPos))}else this.pxlEnv.hoverUserDetect()}mapOnUp(e){let t=e.target;if(this.pxlAudio.djVolumeParentObj&&(this.pxlAudio.djVolumeParentObj.down=!1),t.getAttribute&&t.getAttribute("id")==this.pxlCore)if(this.pxlGuiDraws.checkFocus(t.getAttribute("id"),!0),this.mobile)this.pxlAutoCam.getNextPath(!1,1);else return this.preventDefault(e),this.touchMouseData.dragCount++,this.touchMouseData.dragTotal+=this.touchMouseData.dragCount,this.touchMouseData.active=!1,this.touchMouseData.releaseTime=this.pxlTimer.curMS,this.pxlAutoCam.touchBlender=!0,this.pxlAutoCam.setNextTrigger(),this.touchMouseData.dragCount<9&&this.pxlEnv.clickUserDetect(),this.touchMouseData.endPos=new K(this.mouseX,this.mouseY),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+250)/1250,this.setCursor("grab"),this.mapLockCursor(!1,e.button),e.preventDefault(),!1}startTouch(e){let t=e.target;if(!(t.getAttribute&&t.getAttribute("id")==this.pxlCore&&this.pxlTimer.active))return;this.touchScreen=!0;var s=e.touches[0];this.mouseX=s.pageX,this.mouseY=s.pageY,this.touchMouseData.active=!0,this.touchMouseData.mode=this.touchMouseData.button,this.touchMouseData.startPos=new K(this.mouseX,this.mouseY),this.touchMouseData.endPos=new K(this.mouseX,this.mouseY),this.touchMouseData.curDistance=new K(0,0),this.touchMouseData.curStepDistance=new K(0,0),this.touchMouseData.dragCount=0,this.pxlAutoCam.touchBlender=!1,this.touchMouseData.releaseTime=this.pxlTimer.curMS;let a=t.getAttribute("id");if(this.objectPercList.includes(a)){a=="djPlayerVolume"&&(t=this.pxlAudio.djVolumeParentObj,a=t.getAttribute("id"));let l=t.getBoundingClientRect();this.objectPerc.active=!0,this.objectPerc.object=t,this.objectPerc.left=l.left,this.objectPerc.top=l.top,this.objectPerc.width=l.width,this.objectPerc.height=l.height,this.objectPerc.startX=this.mouseX-l.left,this.objectPerc.startY=this.mouseY-l.top,this.objectPerc.percX=(this.mouseX-this.objectPerc.left)/this.objectPerc.width,this.objectPerc.percY=(this.mouseY-this.objectPerc.top)/this.objectPerc.height,this.objectPerc.offsetX=0,this.objectPerc.offsetY=0,this.objectPerc.offsetPercX=0,this.objectPerc.offsetPercY=0,this.objectPercFuncList[a]&&this.objectPercFuncList[a](e)}}doTouch(e){if(!this.touchMouseData.active)return;let t=e.target;var i=e.touches[0];if(this.mouseX=i.pageX,this.mouseY=i.pageY,this.touchMouseData.active){if(this.touchMouseData.dragCount++,typeof e.touches[1]<"u"){var s=e.touches[1];e.touches.length>1&&this.touchMouseData.dragCount>10&&(this.touchMouseData.lock=!0,i=e.touches[1],this.pxlEnv.setFogHue([this.mouseX,this.mouseY],[i.pageX,i.pageY]));return}let a=this.touchMouseData.endPos.clone();this.touchMouseData.endPos=new K(this.mouseX,this.mouseY),this.touchMouseData.curDistance=this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos),this.touchMouseData.curStepDistance=this.touchMouseData.endPos.clone().sub(a),this.touchMouseData.netDistance.add(this.touchMouseData.curStepDistance.clone()),this.touchMouseData.velocity.add(this.touchMouseData.curStepDistance).multiplyScalar(.5),this.touchMouseData.velocityEase.add(this.touchMouseData.curStepDistance).multiplyScalar(.5),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)/1250,this.touchMouseData.curFadeOut.add(a.sub(this.touchMouseData.endPos))}this.objectPerc.active&&(this.objectPerc.percX=(this.mouseX-this.objectPerc.left)/this.objectPerc.width,this.objectPerc.percY=(this.mouseY-this.objectPerc.top)/this.objectPerc.height,this.objectPerc.offsetX=this.mouseX-this.objectPerc.startX,this.objectPerc.offsetY=this.mouseY-this.objectPerc.startY,this.objectPerc.offsetPercX=this.objectPerc.offsetX/this.objectPerc.width,this.objectPerc.offsetPercY=this.objectPerc.offsetY/this.objectPerc.height)}endTouch(e){if(!this.touchMouseData.active)return;if(this.touchScreen=!1,this.touchMouseData.dragCount++,this.touchMouseData.dragTotal+=this.touchMouseData.dragCount,this.touchMouseData.active=!1,this.touchMouseData.endPos=new K(this.mouseX,this.mouseY),this.touchMouseData.netDistYPerc=(this.touchMouseData.netDistance.y+250)/1250,this.touchMouseData.curDistance.multiplyScalar(0),this.touchMouseData.curStepDistance.multiplyScalar(0),this.touchMouseData.releaseTime=this.pxlTimer.curMS,this.touchMouseData.lock){this.touchMouseData.lock=!1;return}this.pxlAutoCam.touchBlender=!0,this.pxlAutoCam.setNextTrigger();let t=e.target;this.touchMouseData.dragCount<10&&t.getAttribute&&t.getAttribute("id")==this.pxlCore&&this.pxlAutoCam.getNextPath(!1,0),this.objectPerc.active=!1,this.pxlAudio.djVolumeParentObj&&(this.pxlAudio.djVolumeParentObj.down=!1)}async keyDownCall(e){if(this.emit("keydown",e),e.ctrlKey&&(this.controlKey=!0),document.activeElement.type==null&&this.pxlTimer.active){if(e.repeat)return;let t=e.keyCode||e.which;(t==37||t==65)&&(this.directionKeyDown=!0,this.keyDownCount[0]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[0]=1,this.pxlCamera.deviceKey(0,!0)),e.ctrlKey&&t==87&&this.directionKeysPressed[1]==1&&e.this.preventDefault(e)(),(t==38||t==87)&&(this.directionKeyDown=!0,this.keyDownCount[1]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[1]=1,this.pxlCamera.deviceKey(1,!0)),(t==39||t==68)&&(this.directionKeyDown=!0,this.keyDownCount[0]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[2]=1,this.pxlCamera.deviceKey(2,!0)),(t==40||t==83)&&(this.directionKeyDown=!0,this.keyDownCount[1]=this.pxlQuality.fpsCounter.z,this.directionKeysPressed[3]=1,this.pxlCamera.deviceKey(3,!0)),(t==16||t==224)&&(this.shiftBoost=7,this.pxlCamera.deviceKey("shift",!0)),t==32&&(this.pxlCamera.camJumpKey(!0),this.pxlCamera.deviceKey("space",!0))}}async keyUpCall(e){if(this.emit("keyup",e),e.ctrlKey)return this.controlKey=!1,e.preventDefault(),!1;if(document.activeElement.type==null){let i=e.keyCode||e.which,s=e.code||e.which;if(!e.isTrusted)return!1;if(e.ctrlKey||e.altKey||e.code.includes("F"))return e.preventDefault(),!1;if(s=="Backquote"){this.pxlGuiDraws.guiToggleVisibility();return}if(i==89&&this.pxlGuiDraws.toggleShaderEditor(),i==220){console.log("Saving screenshot");let a=this.pxlQuality.screenResPerc;this.pxlQuality.screenResPerc=1,this.pxlEnv.mapRender(!1);let l=this.pxlGuiDraws.pxlNavCanvas.toDataURL("image/png"),n=atob(l.split(",")[1]),v=n.length,p=new Uint8Array(v);for(var t=0;t<v;++t)p[t]=n.charCodeAt(t);let f=URL.createObjectURL(new Blob([p])),m=new Date,C=m.getDate(),x=m.getMonth()+1,S=m.getFullYear()+"-"+x+"-"+C+"_"+m.getHours()+"-"+m.getMinutes()+"-"+m.getSeconds(),b=document.createElement("a");b.download=this.projectTitle+"_"+S+".png",b.href=f,document.body.appendChild(b),b.click(),b.parentNode.removeChild(b),this.pxlQuality.screenResPerc=a,this.pxlEnv.mapRender(!1);return}if(this.pxlTimer.active){if((i==37||i==65)&&(this.directionKeysPressed[0]=0,this.pxlCamera.deviceKey(0,!1)),(i==38||i==87)&&(this.directionKeysPressed[1]=0,this.pxlAutoCam.active&&this.pxlAutoCam.step(!0),this.pxlCamera.deviceKey(1,!1)),(i==39||i==68)&&(this.directionKeysPressed[2]=0,this.pxlCamera.deviceKey(2,!1)),(i==40||i==83)&&(this.directionKeysPressed[3]=0,this.pxlAutoCam.active&&this.pxlAutoCam.setRoom(!0),this.pxlCamera.deviceKey(3,!1)),this.directionKeysPressed.includes(1)||(this.directionKeyDown=!1),i==16||i==224){this.shiftBoost=1,this.pxlCamera.deviceKey("shift",!1);return}if(i==32){this.pxlCamera.camJumpKey(!1),this.pxlCamera.deviceKey("space",!1);return}if(!this.directionKeyDown){if(i==49||i==97){this.pxlCamera.fastTravel(0);return}if(i==50||i==98){this.pxlCamera.fastTravel(1);return}if(i==51||i==99){this.pxlCamera.fastTravel(2);return}if(i==52||i==100){this.pxlCamera.fastTravel(3);return}if(i==53||i==101){this.pxlAutoCam.preAutoCamToggle();return}}if(i==75||i==107||i==187,i==74||i==109||i==189,i==76,i==48,i==221){this.pxlUser?.itemInactiveCmd?.length>0&&console.log(this.pxlUser.itemInactiveCmd.pop());return}i==106}if(i==27||i==13&&!e.ctrlKey){this.pxlGuiDraws.toggleHudBlock(!1,!0),this.pxlGuiDraws.toggleGuiWindowContainer(!1,!1,!0);return}if(e.altKey||e.ctrlKey||e.shiftKey)return;if(i==85,i==73){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.infoIcon,"info");return}if(i==71){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.settingsIcon,"settings");return}if(i==67,i==66){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.musicIcon,"musicToggle");return}if(i==78){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.speakerIcon,"speakerToggle");return}if(i==77,i==86,i==191){this.pxlGuiDraws.iconEvent("click",this.pxlGuiDraws.hudIcons.helpIcon,"help");return}if(i==80){this.directionKeysPressed=[0,0,0,0],this.directionKeyDown=!1,this.pxlTimer.pause(),this.pxlTimer.active&&this.pxlEnv.mapRender(),this.pxlCamera.workerFunc("activeToggle",this.pxlTimer.active);return}}}resizeRenderResolution(e=null,t=null){if(e=e||window.innerWidth,t=t||window.innerHeight,this.mapW=(this.sW=e)*this.pxlQuality.screenResPerc,this.mapH=(this.sH=t)*this.pxlQuality.screenResPerc,this.screenRes.x=1/this.mapW,this.screenRes.y=1/this.mapH,this.screenRatio.x=this.sW/this.sH,this.screenRatio.y=this.sH/this.sW,this.pxlEnv.geoList.HDRView){let l=this.mapW>this.mapH?1:this.mapW/this.mapH;this.pxlEnv.geoList.HDRView.material.uniforms.ratioU.value=l}if(this.touchMouseData.mBlurVelInf=new K(2*this.screenRes.x,2*this.screenRes.y),!this.pxlEnv.mapGlowPass)return;this.pxlEnv.scene.renderTarget.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult),this.pxlEnv.scene.renderWorldPos.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult),this.pxlEnv.mapComposer.setSize(this.mapW,this.mapH),this.pxlEnv.mapComposerGlow.setSize(this.mapW,this.mapH),this.pxlEnv.roomComposer.setSize(this.mapW,this.mapH),this.pxlEnv.roomGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult),this.pxlEnv.delayComposer.setSize(this.mapW,this.mapH),this.pxlEnv.mapGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult),this.pxlEnv.mapMotionBlurPass.setSize(this.mapW*this.pxlQuality.mBlurPercMult,this.mapH*this.pxlQuality.mBlurPercMult),this.pxlEnv.mapOverlayHeavyPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlayPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlaySlimPass.setSize(this.mapW,this.mapH),this.pxlEnv.mapOverlayHeavyPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlEnv.mapOverlayPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlEnv.mapOverlaySlimPass.uniforms.ratio.value=Math.min(1,this.mapW/this.mapH),this.pxlGuiDraws.pxlNavCanvas.width=this.sW,this.pxlGuiDraws.pxlNavCanvas.height=this.sH,this.pxlGuiDraws.loading=!0,this.pxlEnv.engine.setPixelRatio(window.devicePixelRatio*this.pxlQuality.screenResPerc),this.pxlEnv.engine.setSize(this.sW,this.sH);var i=this.mapW/this.mapH;this.pxlCamera.camera.aspect=i,this.pxlCamera.camera.updateProjectionMatrix();let s=[this.sW/this.sH,this.sH/this.sW];var a=[1,1];a[0]=i>s[0]?1:this.sW/(this.sH*s[0]),a[1]=i>s[1]?this.sH/(this.sW*s[1]):1,a[0]>1?(a[1]*=1/a[0],a[0]=1):a[1]>1&&(a[0]*=1/a[1],a[1]=1),this.screenAspect.x=a[0]*(1/(.5**2+.5**2)**.5),this.screenAspect.y=a[1],this.screenResDeltaPerc.x=this.sW/this.origRes.x,this.screenResDeltaPerc.y=this.sH/this.origRes.y,this.pxlEnv.roomSubList.Lobby&&this.pxlEnv.roomSubList.Lobby.setShaders(),this.pxlEnv.updateCompUniforms(),this.pxlEnv.roomNameList.forEach(l=>{this.pxlEnv.roomSceneList[l].pxlCamAspect=i,this.pxlEnv.roomSceneList[l]?.resize&&this.pxlEnv.roomSceneList[l].resize(this.mapW,this.mapH)}),this.emit("resize",{width:this.mapW,height:this.mapH,xPixelPerc:this.screenRes.x,yPixelPerc:this.screenRes.y,aspectRatio:i}),this.pxlTimer.active||this.pxlEnv.mapRender(!1)}subscribe(e,t){if(!this.subscriptableEvents.includes(e)){console.error("Event type not subscribable: ",e);return}this.callbackList[e]||(this.callbackList[e]=[]),this.callbackList[e].push(t)}unsubscribe(e,t){if(this.callbackList[e]){let i=this.callbackList[e].indexOf(t);i>=0&&this.callbackList[e].splice(i,1)}}emit(e,t){this.callbackList.hasOwnProperty(e)&&this.callbackList[e].forEach(i=>{i(t)})}}});var Ua={};U(Ua,{Animation:()=>et});import*as tt from"./three.module.js";var et,Hi=k(()=>{et=class{constructor(e=null,t=null){this.pxlEnv=null,this.assetPath=e,this.verbose=!1,this.animInitEntry={rig:null,mesh:null,mixer:null,clips:{},state:null,hasConnection:!1,prevTime:-1,connected:[],connections:{}},this.objNames=[],this.objects={},this.animMixer={},this.msRunner=t,this.clock=new tt.Clock}setDependencies(e){this.pxlEnv=e}log(e){this.verbose&&console.log(e)}initObject(e,t){let i=null,s=null,a=t.children.length,l=0,n=[...t.children],v=0,p=0,f=0,m=0;for(;l<a;){let x=n[l];switch(x.type){case"Bone":++p,i=x;break;case"Mesh":++v,x.visible=!1;break;case"SkinnedMesh":++f,s=x;break;case"Group":++m,n=n.concat(x.children),a=n.length;break;default:break}++l}let C=!1;if(i||(this.log("Error, No Bone/Rig Root Found; Please move your rig to the scene's root. Grouped rigs aren't supported yet."),C=!0),s||(this.log("Error, No SkinnedMesh Found; Please ensure your rig has a mesh to animate."),C=!0),C){console.log("Unable to prepare '"+e+"' for animation"),console.log("Group Count: "+m),console.log("Bone Root Found : "+(p>0)),console.log("Bone Count : "+p),console.log("Mesh Count: "+v),console.log("SkinnedMesh Count: "+f);return}if(!this.objNames.includes(e)){this.objNames.push(e);let x=Object.assign({},this.animInitEntry);x.rig=i,x.mesh=s,this.animMixer[e]=new tt.AnimationMixer(i),x.mixer=this.animMixer[e],this.objects[e]=x;let g=new tt.MeshStandardMaterial({skinning:!0});g.map=s.material.map,s.material=g}}addClips(e,t,i){if(!this.objNames.includes(e)){this.log("Error, '"+e+"' not found in Animation Manager");return}Object.keys(this.objects[e].clips).includes(t)&&this.log("Warning, '"+t+"' already exists in '"+e+"'");let l=this.animMixer[e].clipAction(i.animations[0]);this.objects[e].clips[t]=l}hasClip(e,t){return this.objNames.includes(e)?Object.keys(this.objects[e].clips).includes(t):!1}getMixer(e){return this.objNames.includes(e)?this.animMixer[e]:null}getRig(e){return this.objNames.includes(e)?this.objects[e].rig:null}getMesh(e){return this.objNames.includes(e)?this.objects[e].mesh:null}playClip(e,t){if(this.objNames.includes(e)&&Object.keys(this.objects[e].clips).includes(t)){let s=this.objects[e].clips[t];this.objects[e].state=t,this.objects[e].prevTime=-1,this.objects[e].hasConnection=this.objects[e].connected.includes(t),this.setWeight(e,t,1,!0),s.reset(),s.play()}}setWeight(e,t,i,s=!1){if(this.objNames.includes(e)){let a=Object.keys(this.objects[e].clips);if(a.includes(t)){let l=this.objects[e].clips[t];l.enabled=!0,l.setEffectiveTimeScale(1),l.setEffectiveWeight(i),s&&a.forEach(n=>{if(n!=t){let v=this.objects[e].clips[n];v.enabled=!1,v.setEffectiveTimeScale(1),v.setEffectiveWeight(0)}})}}}setStateConnections(e,t){if(this.objNames.includes(e)){let i=Object.keys(t);this.objects[e].connected=i,this.objects[e].connections=t}}step(e){if(this.objNames.includes(e)){if(!this.objects[e].hasConnection){this.animMixer[e].update(this.clock.getDelta());return}let i=this.objects[e].state;if(i){let a=this.objects[e].clips[i].time;if(this.objects[e].prevTime>a){let n=this.objects[e].connections[i],v=n[Math.floor(Math.random()*n.length)];this.playClip(e,v)}else this.animMixer[e].update(this.clock.getDelta()),this.objects[e].prevTime=a}else this.animMixer[e].update(this.clock.getDelta())}}destroy(e){if(this.objNames.includes(e)){this.animMixer[e].stopAllAction(),delete this.animMixer[e],delete this.objects[e];let t=this.objNames.indexOf(e);this.objNames.splice(t,1)}}}});var Ia={};U(Ia,{CopyShader:()=>ce});var ce,it=k(()=>{ce={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	gl_FragColor = opacity * texel;","}"].join(`
`)}});var Ba={};U(Ba,{Pass:()=>ie});import{OrthographicCamera as Fn,PlaneBufferGeometry as Vn,Mesh as _n}from"./three.module.js";function ie(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}var Fe=k(()=>{Object.assign(ie.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});ie.FullScreenQuad=function(){var r=new Fn(-1,1,1,-1,0,1),e=new Vn(2,2),t=function(i){this._mesh=new _n(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,r)}}),t}()});var Fa={};U(Fa,{ShaderPass:()=>q});import{ShaderMaterial as Ha,UniformsUtils as jn}from"./three.module.js";var q,Yt=k(()=>{Fe();q=function(r,e){ie.call(this),this.textureID=e!==void 0?e:"tDiffuse",r instanceof Ha?(this.uniforms=r.uniforms,this.material=r):r&&(this.uniforms=jn.clone(r.uniforms),this.material=new Ha({defines:Object.assign({},r.defines),uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader})),this.fsQuad=new ie.FullScreenQuad(this.material)};q.prototype=Object.assign(Object.create(ie.prototype),{constructor:q,render:function(r,e,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this.fsQuad.material=this.material,this.renderToScreen?(r.setRenderTarget(null),this.fsQuad.render(r)):(r.setRenderTarget(e),this.clear&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),this.fsQuad.render(r))}})});var Va={};U(Va,{ClearMaskPass:()=>xt,MaskPass:()=>st});var st,xt,Jt=k(()=>{Fe();st=function(r,e){ie.call(this),this.scene=r,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1};st.prototype=Object.assign(Object.create(ie.prototype),{constructor:st,render:function(r,e,t){var i=r.getContext(),s=r.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);var a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),r.setRenderTarget(t),this.clear&&r.clear(),r.render(this.scene,this.camera),r.setRenderTarget(e),this.clear&&r.clear(),r.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}});xt=function(){ie.call(this),this.needsSwap=!1};xt.prototype=Object.create(ie.prototype);Object.assign(xt.prototype,{render:function(r){r.state.buffers.stencil.setLocked(!1),r.state.buffers.stencil.setTest(!1)}})});var Oa={};U(Oa,{EffectComposer:()=>Pe,Pass:()=>Fi});import{Clock as On,LinearFilter as _a,Mesh as Gn,OrthographicCamera as Wn,PlaneBufferGeometry as zn,RGBAFormat as Nn,Vector2 as ja,WebGLRenderTarget as Qn}from"./three.module.js";var Pe,Fi,Vi=k(()=>{it();Yt();Jt();Jt();Pe=function(r,e){if(this.renderer=r,e===void 0){var t={minFilter:_a,magFilter:_a,format:Nn,stencilBuffer:!1},i=r.getSize(new ja);this._pixelRatio=r.getPixelRatio(),this._width=i.width,this._height=i.height,e=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,t),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ce===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),q===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new q(ce),this.clock=new On};Object.assign(Pe.prototype,{swapBuffers:function(){var r=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=r},addPass:function(r){this.passes.push(r),r.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(r,e){this.passes.splice(e,0,r),r.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(r){for(var e=r+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0},render:function(r){r===void 0&&(r=this.clock.getDelta());var e=this.renderer.getRenderTarget(),t=!1,i,s,a=this.passes.length;for(s=0;s<a;s++)if(i=this.passes[s],i.enabled!==!1){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),i.render(this.renderer,this.writeBuffer,this.readBuffer,r,t),i.needsSwap){if(t){var l=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,r),n.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}st!==void 0&&(i instanceof st?t=!0:i instanceof xt&&(t=!1))}this.renderer.setRenderTarget(e)},reset:function(r){if(r===void 0){var e=this.renderer.getSize(new ja);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,r=this.renderTarget1.clone(),r.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=r,this.renderTarget2=r.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(r,e){this._width=r,this._height=e;var t=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(t,i),this.renderTarget2.setSize(t,i);for(var s=0;s<this.passes.length;s++)this.passes[s].setSize(t,i)},setPixelRatio:function(r){this._pixelRatio=r,this.setSize(this._width,this._height)}});Fi=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(Fi.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});Fi.FullScreenQuad=function(){var r=new Wn(-1,1,1,-1,0,1),e=new zn(2,2),t=function(i){this._mesh=new Gn(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,r)}}),t}()});var Ga={};U(Ga,{RenderPass:()=>Ve});var Ve,_i=k(()=>{Fe();Ve=function(r,e,t,i,s){ie.call(this),this.scene=r,this.camera=e,this.overrideMaterial=t,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};Ve.prototype=Object.assign(Object.create(ie.prototype),{constructor:Ve,render:function(r,e,t){var i=r.autoClear;r.autoClear=!1;var s,a,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(s=r.getClearColor().getHex(),a=r.getClearAlpha(),r.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&r.clearDepth(),r.setRenderTarget(this.renderToScreen?null:t),this.clear&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),r.render(this.scene,this.camera),this.clearColor&&r.setClearColor(s,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),r.autoClear=i}})});var Wa={};U(Wa,{LuminosityHighPassShader:()=>$t});import{Color as Kn}from"./three.module.js";var $t,ji=k(()=>{$t={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Kn(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	vec3 luma = vec3( 0.299, 0.587, 0.114 );","	float v = dot( texel.xyz, luma );","	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","	gl_FragColor = mix( outputColor, texel, alpha );","}"].join(`
`)}});var Ka={};U(Ka,{UnrealBloomPass:()=>we});import{AdditiveBlending as Xn,Color as za,LinearFilter as Na,MeshBasicMaterial as Yn,RGBAFormat as Jn,ShaderMaterial as Zt,UniformsUtils as Qa,Vector2 as Le,Vector3 as yt,WebGLRenderTarget as Oi}from"./three.module.js";var we,Gi=k(()=>{Fe();it();ji();we=function(r,e,t,i){ie.call(this),this.strength=e!==void 0?e:1,this.radius=t,this.threshold=i,this.resolution=r!==void 0?new Le(r.x,r.y):new Le(256,256),this.clearColor=new za(0,0,0);var s={minFilter:Na,magFilter:Na,format:Jn};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var f=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);this.renderTargetBright=new Oi(f,m,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var a=0;a<this.nMips;a++){var l=new Oi(f,m,s);l.texture.name="UnrealBloomPass.h"+a,l.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(l);var n=new Oi(f,m,s);n.texture.name="UnrealBloomPass.v"+a,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),f=Math.round(f/2),m=Math.round(m/2)}$t===void 0&&console.error("UnrealBloomPass relies on LuminosityHighPassShader");var v=$t;this.highPassUniforms=Qa.clone(v.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,defines:{}}),this.separableBlurMaterials=[];for(var p=[3,5,7,9,11],f=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2),a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[a])),this.separableBlurMaterials[a].uniforms.texSize.value=new Le(f,m),f=Math.round(f/2),m=Math.round(m/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;var C=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=C,this.bloomTintColors=[new yt(1,1,1),new yt(1,1,1),new yt(1,1,1),new yt(1,1,1),new yt(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ce===void 0&&console.error("UnrealBloomPass relies on CopyShader");var x=ce;this.copyUniforms=Qa.clone(x.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Zt({uniforms:this.copyUniforms,vertexShader:x.vertexShader,fragmentShader:x.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this.oldClearColor=new za,this.oldClearAlpha=1,this.basic=new Yn,this.fsQuad=new ie.FullScreenQuad(null)};we.prototype=Object.assign(Object.create(ie.prototype),{constructor:we,dispose:function(){for(var r=0;r<this.renderTargetsHorizontal.length;r++)this.renderTargetsHorizontal[r].dispose();for(var r=0;r<this.renderTargetsVertical.length;r++)this.renderTargetsVertical[r].dispose();this.renderTargetBright.dispose()},setSize:function(r,e){var t=Math.round(r/2),i=Math.round(e/2);this.renderTargetBright.setSize(t,i);for(var s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(t,i),this.renderTargetsVertical[s].setSize(t,i),this.separableBlurMaterials[s].uniforms.texSize.value=new Le(t,i),t=Math.round(t/2),i=Math.round(i/2)},render:function(r,e,t,i,s){this.oldClearColor.copy(r.getClearColor()),this.oldClearAlpha=r.getClearAlpha();var a=r.autoClear;r.autoClear=!1,r.setClearColor(this.clearColor,0),s&&r.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=t.texture,r.setRenderTarget(null),r.clear(),this.fsQuad.render(r)),this.highPassUniforms.tDiffuse.value=t.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,r.setRenderTarget(this.renderTargetBright),r.clear(),this.fsQuad.render(r);for(var l=this.renderTargetBright,n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[n].uniforms.direction.value=we.BlurDirectionX,r.setRenderTarget(this.renderTargetsHorizontal[n]),r.clear(),this.fsQuad.render(r),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=we.BlurDirectionY,r.setRenderTarget(this.renderTargetsVertical[n]),r.clear(),this.fsQuad.render(r),l=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,r.setRenderTarget(this.renderTargetsHorizontal[0]),r.clear(),this.fsQuad.render(r),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&r.state.buffers.stencil.setTest(!0),this.renderToScreen?(r.setRenderTarget(null),this.fsQuad.render(r)):(r.setRenderTarget(t),this.fsQuad.render(r)),r.setClearColor(this.oldClearColor,this.oldClearAlpha),r.autoClear=a},getSeperableBlurMaterial:function(r){return new Zt({defines:{KERNEL_RADIUS:r,SIGMA:r},uniforms:{colorTexture:{value:null},texSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;				uniform vec2 direction;								float gaussianPdf(in float x, in float sigma) {					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;				}				void main() {
					vec2 invSize = 1.0 / texSize;					float fSigma = float(SIGMA);					float weightSum = gaussianPdf(0.0, fSigma);					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {						float x = float(i);						float w = gaussianPdf(x, fSigma);						vec2 uvOffset = direction * invSize * x;						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;						diffuseSum += (sample1 + sample2) * w;						weightSum += 2.0 * w;					}					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})},getCompositeMaterial:function(r){return new Zt({defines:{NUM_MIPS:r},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:"varying vec2 vUv;				uniform sampler2D blurTexture1;				uniform sampler2D blurTexture2;				uniform sampler2D blurTexture3;				uniform sampler2D blurTexture4;				uniform sampler2D blurTexture5;				uniform sampler2D dirtTexture;				uniform float bloomStrength;				uniform float bloomRadius;				uniform float bloomFactors[NUM_MIPS];				uniform vec3 bloomTintColors[NUM_MIPS];								float lerpBloomFactor(const in float factor) { 					float mirrorFactor = 1.2 - factor;					return mix(factor, mirrorFactor, bloomRadius);				}								void main() {					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + 													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + 													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + 													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + 													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );				}"})}});we.BlurDirectionX=new Le(1,0);we.BlurDirectionY=new Le(0,1)});var Xa={};U(Xa,{ConvolutionShader:()=>bt});import{Vector2 as $n}from"./three.module.js";var bt,Wi=k(()=>{bt={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new $n(.001953125,0)},cKernel:{value:[]}},vertexShader:["uniform vec2 uImageIncrement;","varying vec2 vUv;","void main() {","	vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float cKernel[ KERNEL_SIZE_INT ];","uniform sampler2D tDiffuse;","uniform vec2 uImageIncrement;","varying vec2 vUv;","void main() {","	vec2 imageCoord = vUv;","	vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );","	for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {","		sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];","		imageCoord += uImageIncrement;","	}","	gl_FragColor = sum;","}"].join(`
`),buildKernel:function(r){function e(v,p){return Math.exp(-(v*v)/(2*p*p))}var t,i,s,a,l=25,n=2*Math.ceil(r*3)+1;for(n>l&&(n=l),a=(n-1)*.5,i=new Array(n),s=0,t=0;t<n;++t)i[t]=e(t-a,r),s+=i[t];for(t=0;t<n;++t)i[t]/=s;return i}}});var eo={};U(eo,{BloomPass:()=>ke});import{AdditiveBlending as Zn,LinearFilter as Ya,RGBAFormat as qn,ShaderMaterial as Ja,UniformsUtils as $a,Vector2 as qa,WebGLRenderTarget as Za}from"./three.module.js";var ke,to=k(()=>{Fe();it();Wi();ke=function(r,e,t,i){ie.call(this),r=r!==void 0?r:1,e=e!==void 0?e:25,t=t!==void 0?t:4,i=i!==void 0?i:256;var s={minFilter:Ya,magFilter:Ya,format:qn};this.renderTargetX=new Za(i,i,s),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Za(i,i,s),this.renderTargetY.texture.name="BloomPass.y",ce===void 0&&console.error("BloomPass relies on CopyShader");var a=ce;this.copyUniforms=$a.clone(a.uniforms),this.copyUniforms.opacity.value=r,this.materialCopy=new Ja({uniforms:this.copyUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:Zn,transparent:!0}),bt===void 0&&console.error("BloomPass relies on ConvolutionShader");var l=bt;this.convolutionUniforms=$a.clone(l.uniforms),this.convolutionUniforms.uImageIncrement.value=ke.blurX,this.convolutionUniforms.cKernel.value=bt.buildKernel(t),this.materialConvolution=new Ja({uniforms:this.convolutionUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{KERNEL_SIZE_FLOAT:e.toFixed(1),KERNEL_SIZE_INT:e.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new ie.FullScreenQuad(null)};ke.prototype=Object.assign(Object.create(ie.prototype),{constructor:ke,render:function(r,e,t,i,s){s&&r.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=t.texture,this.convolutionUniforms.uImageIncrement.value=ke.blurX,r.setRenderTarget(this.renderTargetX),r.clear(),this.fsQuad.render(r),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=ke.blurY,r.setRenderTarget(this.renderTargetY),r.clear(),this.fsQuad.render(r),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetY.texture,s&&r.state.buffers.stencil.setTest(!0),r.setRenderTarget(t),this.clear&&r.clear(),this.fsQuad.render(r)}});ke.blurX=new qa(.001953125,0);ke.blurY=new qa(0,.001953125)});var so={};U(so,{AutoCamera:()=>rt});import*as ge from"./three.module.js";var rt,zi=k(()=>{rt=class{constructor(e=!1){this.enabled=e,this.active=!1,this.mobile=null,this.pxlTimer=null,this.pxlUtils=null,this.pxlDevice=null,this.pxlAudio=null,this.pxlCamera=null,this.pxlEnv=null,this.camera=null,this.netDistance=new ge.Vector2,this.prevCamChange=0,this.nextCamChange=0,this.delayRange=[25,45],this.autoCamActive=!1,this.autoCamMode=0,this.autoCamPaths={},this.resetAutoCam=!0,this.autoCamPrevPos=null,this.autoCamPrevLookAt=null,this.touchBlender=!1,this.autoCamId=0,this.camMode=0,this.curModeCount=0,this.curRoom="",this.curRoomIndex=0,this.curPath=0,this.roomList=[],this.pathCounts={},this.forceNewRoom=!1,this.curRoomCount=0,this.avatarMin=0,this.avatarValid=!1,this.curAvatar=null,this.clusterReturn=!1,this.curCluster=[],this.clusterValid=2,this.clusterRotation=0,this.clusterRotRate=.005}setDependencies(e){this.pxlTimer=e.pxlTimer,this.pxlUtils=e.pxlUtils,this.pxlDevice=e.pxlDevice,this.pxlAudio=e.pxlAudio,this.pxlCamera=e.pxlCamera,this.pxlEnv=e.pxlEnv,this.camera=e.pxlCamera.camera}init(){this.active=this.enabled||this.mobile,this.autoCamActive=this.autoCamActive||this.mobile;let{roomList:e,pathCounts:t}=this.getAutoCamData();this.roomList=e,this.curRoom=this.roomList[0],this.pathCounts=t,this.setRoom(!1,!0),this.getNextPath(),this.checkStatus()}step(e=!1){if(this.autoCamActive==null||this.active==null)return this.autoCamActive=!1,this.active=!1,!0;if(this.active==!1)if(this.autoCamActive)this.updateAutoCamera();else return!0;if((this.pxlTimer.curMS>=this.nextCamChange||e)&&this.active&&!this.pxlDevice.touchMouseData.active){if(!e||!this.enabled){let t=this.checkCamMode();this.setNextTrigger(t)}this.curAvatar=0,this.camera.up.set(0,1,0),this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0),this.camMode==1?this.setCamMode(0):this.camMode==2?this.setCamMode(0):(this.curCluster=[],this.stepDroneCam()),this.setAutoCamMode(this.camMode)}return this.updateAutoCamera(),this.applyTouchRotate(),!1}checkCamMode(){let e=1,t=this.camMode;return this.camMode=0,!this.enabled||!this.active||this.camMode!=t&&this.camMode==0&&(this.forceNewRoom=!0),e}setCamMode(e){let t=1;e.type==1||e.type==2?t=1:(this.camMode=0,this.forceNewRoom=!0),this.step(!0)}stepDroneCam(){let e=!0,t=Math.random(this.nextCamChange),i=this.pathCounts[this.pxlEnv.currentRoom];this.curRoomCount>=i*2&&(this.forceNewRoom=!0),(t<.3||this.forceNewRoom)&&(this.setRoom(),e=!1),this.curRoomCount+=1,this.getNextPath(e)}setRoom(e=!1,t=!1){if(this.active||this.autoCamActive){let i=this.curRoomIndex,s=this.roomList.length;this.pxlEnv.postIntro?t||(e?i=(i+1)%s:(i=Math.floor(Math.random()*s),i==this.curRoomIndex&&(i=(i+1)%s))):i=0,this.curRoomIndex=i,this.curRoom!=this.roomList[i]&&(this.curRoom=this.roomList[i],this.forceNewRoom=!1,this.curRoomCount=0,this.pxlCamera.warpEventTriggered(1,this.curRoom,"init"))}}setNextTrigger(e=1){let t=Math.random(this.nextCamChange);t=(this.delayRange[1]-this.delayRange[0])*t+this.delayRange[0],this.nextCamChange=this.pxlTimer.curMS+t*e}getNextPath(e=!0,t=1){if(this.autoCamPaths.hasOwnProperty(this.pxlEnv.currentRoom)){let i=this.autoCamPaths[this.pxlEnv.currentRoom].length;if(this.curPath=(this.curPath+t)%i,e&&t==0){let s=Math.random(this.nextCamChange);s=Math.floor(s*this.autoCamPaths[this.pxlEnv.currentRoom].length),this.curPath==s&&(s=(s+1)%i),this.curPath=s}else this.curPath=this.curPath<0?i-1:this.curPath,this.setNextTrigger(1);this.setAutoCamPath(this.curPath)}}checkStatus(){(this.autoCamActive||this.pxlDevice.mobile||this.active)&&this.toggleAutoCam(!0)}preAutoCamToggle(){this.autoCamActive||this.pxlCamera.colliderCurObjHit=="AudioTrigger_2"&&(this.pxlCamera.proximityScaleTrigger=!0,this.exposureShiftActive=!0),this.toggleAutoCam()}setAutoCamMode(e=0){this.autoCamMode=e,e==1&&(this.resetAutoCam=!0)}setPosQuat(e,t){this.camera.quaternion.copy(t),this.camera.position.copy(e),this.pxlCamera.updateCameraMatrices(),this.pxlCamera.camUpdated=!0}toggleAutoCam(e=null,t=1){if(this.pxlEnv.fogMult.x=1,this.autoCamPaths[this.pxlEnv.currentRoom]){this.curRoom=this.pxlEnv.currentRoom;let i=this.autoCamPaths[this.pxlEnv.currentRoom].length;isNaN(this.autoCamId)&&(this.autoCamId=i-1);let s=this.autoCamActive;if(this.autoCamActive=e==null&&i>0?!this.autoCamActive:e,this.autoCamActive=this.mobile||this.autoCamActive,!s&&this.autoCamActive&&(this.netDistance=new ge.Vector2().copy(this.pxlDevice.touchMouseData.netDistance)),this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0),this.autoCamActive){this.pxlCamera.resetGravity(),this.autoCamId=(this.autoCamId+t)%i,this.autoCamId=this.autoCamId<0?i-1:this.autoCamId;let a=this.autoCamPaths[this.pxlEnv.currentRoom][this.autoCamId];this.totalLoopDuration=a.position.userData.duration;try{this.autoCamPositions=a.position.geometry.attributes.position,this.autoCamLookAt=a.lookAt.geometry.attributes.position,a.up?this.autoCamUp=a.up.geometry.attributes.position:(this.autoCamUp=null,this.camera.up.set(0,1,0)),this.numControlPoints=this.autoCamPositions.array.length/3,this.autoCamStartTime=this.pxlTimer.curMS-this.totalLoopDuration*Math.random()}catch{}}else this.setPosQuat(this.pxlCamera.cameraPrevPos.clone(),this.pxlCamera.prevQuaternion.clone()),this.pxlDevice.touchMouseData.netDistance.copy(this.netDistance)}}prevNextAutoCam(e=1,t=!1){this.autoCamActive&&(this.enabled&&this.active&&!t?this.nextCamChange=this.pxlTimer.curMS:this.toggleAutoCam(!0,e))}setAutoCamPath(e=0){this.autoCamActive&&(this.autoCamId=e,this.toggleAutoCam(!0,0))}getAutoCamData(){let e=Object.keys(this.autoCamPaths),t={};return e.forEach(i=>{t[i]=this.autoCamPaths[i].length}),{roomList:e,pathCounts:t}}getAutoCamValueFromCurve(e,t,i,s=!1){let a=e[t*3],l=e[t*3+1],n=e[t*3+2],v=(t+1)%this.numControlPoints,p=e[v*3],f=e[v*3+1],m=e[v*3+2],C=new ge.Vector3(a,l,n),x=new ge.Vector3(p,f,m);return C.lerp(x,i),C}updateAutoCamera(){if(!this.autoCamPositions||!this.autoCamPositions.array)return;let t=(this.pxlTimer.curMS-this.autoCamStartTime)%this.totalLoopDuration/this.totalLoopDuration;t*=this.numControlPoints-1;let i=Math.floor(t),s=t-i,a=this.getAutoCamValueFromCurve(this.autoCamPositions.array,i,s,!1);this.camera.position.copy(a);let l=this.getAutoCamValueFromCurve(this.autoCamLookAt.array,i,s);if(this.camera.lookAt(l),this.autoCamUp){let n=this.getAutoCamValueFromCurve(this.autoCamUp.array,i,s);n=n.sub(a).normalize(),this.camera.up.copy(n)}}applyTouchRotate(){let e=1;this.touchBlender?(e=Math.min(1,Math.max(0,this.pxlTimer.curMS-this.pxlDevice.touchMouseData.releaseTime)),e*=e,this.pxlDevice.touchMouseData.netDistance.multiplyScalar(1-e),this.touchBlender=e<1):this.pxlDevice.touchMouseData.netDistance.multiplyScalar(.5);let t=new ge.Euler;t.set(this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2,this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2,0,"YXZ");let i=new ge.Quaternion().clone(this.camera.quaternion);i.setFromEuler(t),i=this.camera.quaternion.clone().multiply(i),i.normalize(),this.touchBlender&&i.slerp(this.camera.quaternion.clone(),e).normalize();let s=new ge.Vector3(0,0,-10).applyQuaternion(i).add(this.camera.position);this.camera.setRotationFromQuaternion(i),this.camera.lookAt(s),this.camera.up.set(0,1,0)}}});var ro={};U(ro,{Camera:()=>at});import*as W from"./three.module.js";var at,Ni=k(()=>{at=class{constructor(){this.standingHeight=1.75,this.movementScalar=1,this.jumpScalar=1,this.userScale=1,this.cameraEasing=[.55,.45],this.cameraJumpImpulse=[.035,.075],this.cameraMaxJumpHold=[.55,1],this.gravityRate=0,this.gravityMax=2.5,this.gravityMPS=[1,.5],this.pxlAudio=null,this.pxlTimer=null,this.pxlAutoCam=null,this.pxlEnv=null,this.pxlUser=null,this.pxlUtils=null,this.pxlDevice=null,this.pxlGuiDraws=null,this.pxlQuality=null,this.socket=null,this.camera=null,this.canMove=!0,this.HDRView=!1,this.objRaycast=new W.Raycaster,this.camUpdated=!0,this.cameraBooted=!1,this.standingHeightGravInfluence=0,this.standingMaxGravityOffset=.5,this.maxStepHeight=.6,this.walkBounce=0,this.walkBounceSeed=230,this.walkBouncePerc=0,this.posRotEasingThreshold=.01,this.cameraMovement=[0,0],this.cameraMovementEase=.85,this.cameraMoveLength=0,this.cameraMoveLengthMult=.1,this.camPosBlend=.65,this.camRotXYZ=new W.Vector3(0,0,0),this.camRotPitch=new W.Vector2(0,0),this.cameraJumpActive=!1,this.cameraAllowJump=!0,this.cameraJumpHeight=0,this.cameraJumpVelocity=0,this.cameraJumpVelocityEaseOut=.8,this.cameraJumpInAir=!1,this.floorColliderInitialHit=!1,this.colliderValidityChecked=!0,this.nearestFloorHit=new W.Vector3(0,0,0),this.nearestFloorObjName=null,this.nearestFloorHitPrev=new W.Vector3(0,0,0),this.nearestFloorObjNamePrev=null,this.objectJumpLock=!1,this.gravityActive=!1,this.gravitySourceActive=!1,this.gravityDirection=new W.Vector3(0,-1,0),this.gravityEaseOutRate=.8,this.jump=0,this.hasJumpLock=!1,this.releaseJumpLockTime=0,this.releaseJumpLockDelay=.05,this.runMain=!0,this.workerActive=!1,this.worker=null,this.workerTransfers=!1,this.workerMessage=()=>{},this.workerFunc=()=>{},this.deviceKey=()=>{},this.portalList={},this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarpZone=[],this.colliderCurObjHit=null,this.colliderPrevObjHit=null,this.colliderValid=!1,this.colliderFail=!1,this.warpActive=!1,this.warpType=0,this.warpObj=null,this.warpTarget=null,this.hotKeyTriggered=!1,this.eventCheckStatus=!1,this.proximityScaleTrigger=!1,this.colliderShiftActive=!0,this.colliderAdjustPerc=0,this.colliderAdjustRate=.02,this.gyroGravity=[0,0,0],this.cameraPose={alpha:null,beta:null,gamma:null,alphaOffset:0,betaOffset:0,gammaOffset:0,orientation:window.orientation||0,pos:[0,0,0],posOffset:[0,0,0],rx:()=>this.beta,ry:()=>this.alpha,rz:()=>this.gamma,accelZeroed:[0,0,0],accelCalibration:10,accelCalDiv:1/10,accelCalCount:0,accelTotal:[0,0,0],accelPrev:null,accelDelta:[0,0,0],accelClearDelta:()=>{this.accelDelta=[0,0,0]}},this.uniformScalars={curExp:1,darkBase:.1,brightBase:.5,exposureUniformBase:1},this.cameraPosLookAtNames={default:{pos:"Position",lookAt:"LookAt"},mobile:{pos:"PositionMobile",lookAt:"LookAtMobile"},vr:{pos:"PositionVR",lookAt:"LookAtVR"}},this.cameraPos=new W.Vector3(0,0,0),this.cameraPrevPos=new W.Vector3(0,0,0),this.cameraPrevLookAt=new W.Vector3(0,0,0),this.cameraAim=new W.Vector3(0,0,1),this.cameraAimTarget=new W.Vector3(0,0,0),this.cameraCross=new W.Vector3(1,0,0),this.lookAtTargetActive=new W.Vector3(0,0,0),this.lookAtPerc=new W.Vector2(1,0),this.lookAtLockPerc=0,this.lookAtLockFader=0,this.lookAtLockFadeRate=.01,this.prevQuaternion=new W.Quaternion,this.pi=3.14159265358979,this.init()}setDependencies(e){this.pxlAudio=e.pxlAudio,this.pxlTimer=e.pxlTimer,this.pxlAutoCam=e.pxlAutoCam,this.pxlEnv=e.pxlEnv,this.pxlUser=e.pxlUser,this.pxlUtils=e.pxlUtils,this.pxlDevice=e.pxlDevice,this.pxlGuiDraws=e.pxlGuiDraws,this.pxlQuality=e.pxlQuality,this.socket=e.socket}init(){var e}updateMainValues(e){let{gravityRate:t,standingHeightGravInfluence:i,cameraJumpImpulse:s}=e;t!=null&&(this.gravityRate=t),i!=null&&(this.standingHeightGravInfluence=i),s!=null&&(this.cameraJumpVelocity+=s),this.camUpdated=!0}step(){this.pxlDevice.directionKeyDown&&this.updateMovement(this.pxlTimer.prevMS),this.runMain&&(this.hasJumpLock&&this.pxlTimer.runtime>this.releaseJumpLockTime&&(this.hasJumpLock=!1,this.gravityActive=!1,this.cameraAllowJump=!0,this.camInitJump()),this.gravityActive&&this.cameraJumpActive?this.camJump(this.pxlTimer.prevMS):this.cameraJumpVelocity>0&&this.killJumpImpulse()),this.camUpdated=this.camUpdated||this.cameraMovement[0]!=0||this.cameraMovement[1]||this.gravityActive||this.pxlDevice.cursorLockActive,this.updateCamera(),this.lowQualityUpdates(),this.midQualityUpdates(),this.eventCheck()}eventCheck(){this.colliderValid&&this.eventCheckStatus&&this.eventTrigger(this.nearestFloorObjName)&&this.warpEventTriggered(1,this.nearestFloorObjName)}updateDeviceValues(e){if(!this.pxlQuality.settings.leftRight){let t=-this.cameraMovement[0];this.pxlDevice.touchMouseData.active||(this.pxlDevice.touchMouseData.velocity.x+=t),this.pxlDevice.touchMouseData.netDistance.x+=t*4}if(this.pxlDevice.touchMouseData.velocity!=null&&this.pxlDevice.mobile==0){if(e<this.posRotEasingThreshold)this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);else{let t=this.cameraEasing[this.pxlDevice.mobile?1:0];this.pxlDevice.touchMouseData.velocity.multiplyScalar(t)}this.pxlDevice.touchMouseData.netDistance.add(this.pxlDevice.touchMouseData.velocity.clone().multiply(this.pxlDevice.touchMouseData.moveMult))}}buildDeviceMonitors(){let e=this}updateCameraMatrices(){this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.camera.updateWorldMatrix()}resetCameraCalculations(e){this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0),this.pxlDevice.touchMouseData.netDistance.set(0,0),this.camera.position.copy(e),this.updateCameraMatrices(),this.cameraPos.copy(e),this.cameraPrevPos.copy(e),this.colliderCurObjHit=null,this.colliderPrevObjHit=null,this.camUpdated=!0}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix(),this.camUpdated=!0}setStats(e,t,i,s){this.camera.near=i,this.camera.far=s,this.setFOV(e)}setTransform(e,t=null){this.resetCameraCalculations(e),t&&(this.cameraAimTarget.position.copy(t),this.camera.lookAt(t),this.cameraPrevLookAt.copy(t),this.updateCameraMatrices(),this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone()),this.resetGravity(),this.camUpdated=!0}setToObj(e,t=null){if(this.resetCameraCalculations(e.position),t){let i=t.position.clone();this.cameraAimTarget.position.copy(i),this.camera.lookAt(i),this.cameraPrevLookAt.copy(i),this.updateCameraMatrices(),this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone()}else this.pxlDevice.touchMouseData.initialQuat=e.quaternion.clone(),this.camera.setRotationFromQuaternion(this.pxlDevice.touchMouseData.initialQuat),this.updateCameraMatrices();this.resetGravity(),this.camUpdated=!0,this.mainColliderCheck(e.position,null),this.nearestFloorObjName=null}warpToRoom(e,t=!1,i=null){this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].stop();let s=this.pxlEnv.currentRoom,a=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].camHoldWarpPos;this.pxlEnv.currentRoom=e,this.pxlAutoCam.curRoom=e;let l=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom],n=e==this.pxlEnv.mainRoom;if(this.pxlUser.iZoom){let p=n?this.pxlEnv.roomComposer:this.pxlEnv.mapComposer,f=n?this.pxlEnv.mapComposer:this.pxlEnv.roomComposer;this.pxlEnv.delayPass.uniforms.tDiffusePrev.value=p.renderTarget1.texture,this.pxlEnv.delayPass.uniforms.tDiffusePrevRoom.value=f.renderTarget1.texture,setTimeout(()=>{s!=e&&(n?this.pxlEnv.roomComposer.reset():this.pxlEnv.mapComposer.reset()),setTimeout(()=>{this.pxlEnv.mapComposerWarpPass.needsSwap=!1},500)},100)}if(t)if(e!=s&&l.start(),this.pxlEnv.roomRenderPass.scene=l.scene,l.camLocation.hasOwnProperty(i)){let p=this.cameraPosLookAtNames.default.pos,f=this.cameraPosLookAtNames.default.lookAt;this.pxlDevice.mobile&&(l.camLocation[i].hasOwnProperty(this.cameraPosLookAtNames.mobile.pos)&&(p=this.cameraPosLookAtNames.mobile.pos),l.camLocation[i].hasOwnProperty(this.cameraPosLookAtNames.mobile.lookAt)&&(f=this.cameraPosLookAtNames.mobile.lookAt));let m=l.camLocation[i][p],C=l.camLocation[i][f];this.setTransform(m,C)}else l.camInitPos&&l.camInitLookAt&&(!a||!this.pxlEnv.postIntro||this.hotKeyTriggered)&&(this.setTransform(l.camInitPos,l.camInitLookAt),this.hotKeyTriggered=!1);else(!a||!this.pxlEnv.postIntro||this.hotKeyTriggered)&&(i!=null?this.setToObj(i):this.setTransform(l.camReturnPos,l.camReturnLookAt),this.hotKeyTriggered=!1);this.pxlGuiDraws.prepArtistInfo(l.getArtistInfo()),this.camUpdated=!0,this.camera.fov=l.pxlCamFOV,this.camera.zoom=l.pxlCamZoom,this.camera.aspect=l.pxlCamAspect,this.camera.near=l.pxlCamNearClipping,this.camera.far=l.pxlCamFarClipping,this.camera.updateProjectionMatrix();let v=this.getUserHeight();this.emitCameraTransforms(this.camera.position.clone(),v,!0),this.pxlAutoCam.checkStatus()}warpToRoomSnapshot(e){this.pxlEnv.currentRoom=e;let t=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];this.camera.fov=t.pxlCamFOV,this.camera.zoom=t.pxlCamZoom,this.camera.aspect=t.pxlCamAspect,this.camera.near=t.pxlCamNearClipping,this.camera.far=t.pxlCamFarClipping,this.camera.updateProjectionMatrix(),this.setTransform(t.camThumbPos,t.camThumbLookAt);let i=this.getUserHeight();this.emitCameraTransforms(this.camera.position.clone(),i,!0)}fastTravel(e=0){this.pxlAutoCam.enabled||((this.pxlAutoCam.active||this.pxlAutoCam.autoCamActive)&&this.pxlAutoCam.preAutoCamToggle(),this.hotKeyTriggered=!0,e==0&&this.warpEventTriggered(1,this.pxlEnv.currentRoom,"init"))}camJumpKey(e=!1){e?this.camInitJump():(this.cameraJumpActive&&(this.cameraJumpActive=!1),this.cameraAllowJump=!0,this.hasJumpLock=!1)}camInitJump(){this.canMove&&!this.gravityActive&&this.cameraAllowJump&&(this.pxlDevice.keyDownCount[2]=this.pxlTimer.prevMS,this.cameraAllowJump=!1,this.cameraJumpActive=!0,this.cameraJumpInAir=!0,this.gravityActive=!0,this.gravityRate=0,this.cameraJumpVelocity=this.cameraJumpImpulse[this.pxlUser.lowGrav]*this.userScale,this.objectJumpLock&&(this.objectJumpLock=!1,this.nearestFloorHit=this.nearestFloorHitPrev))}camJump(e){let t=e-this.pxlDevice.keyDownCount[2],i=1,s=Math.min(1,t/this.cameraMaxJumpHold[this.pxlUser.lowGrav]);if(this.cameraJumpActive){let a=s;a==1?this.cameraJumpActive=!1:(a=(1-a)*(1-a),a=a*(a*.5+.5)),this.cameraJumpVelocity+=Math.max(0,a)*this.cameraJumpImpulse[this.pxlUser.lowGrav]*this.jumpScalar}this.cameraJumpVelocity*=1-s,s==1&&(this.cameraJumpActive=!1)}killJumpImpulse(){let e=this.cameraJumpVelocity*this.cameraJumpVelocityEaseOut;this.cameraJumpVelocity=e>.1?e:0,this.workerFunc("killJumpImpulse")}updateGravity(){if(this.runMain){this.gravityRate=Math.max(0,this.gravityRate-this.cameraJumpVelocity*.2);let e=this.gravityMPS[this.pxlUser.lowGrav];if(this.gravityActive&&(this.gravityRate=Math.min(this.gravityMax,this.gravityRate+this.gravityMax*this.pxlTimer.msRunner.y)*e),this.gravityRate!=0){let t=1;this.gravityActive?t=this.gravityRate*.08:(this.gravityRate=this.gravityRate>.01?this.gravityRate*this.gravityEaseOutRate*e:0,t=this.gravityRate),t=Math.min(1,t),this.standingHeightGravInfluence=Math.min(1,this.gravityRate*1.2/this.gravityMax)*this.standingMaxGravityOffset}}}resetGravity(){this.gravityRate=0,this.workerFunc("resetGravity"),this.jumpLanding(!1)}jumpLanding(e=!0){this.cameraJumpActive&&(this.hasJumpLock=!0,this.releaseJumpLockTime=this.pxlTimer.runtime+this.releaseJumpLockDelay),this.gravityActive=!1,this.cameraJumpVelocity=0,this.cameraJumpInAir=!1,this.cameraJumpActive=!1,e&&this.workerFunc("jumpLanding")}mainColliderCheck(e,t){if(!this.canMove)return e;let i=null;if(this.movementBlocked=!1,(this.cameraMoveLength>0||this.colliderPrevObjHit==null||this.nearestFloorObjName==null)&&this.cameraBooted&&this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].collidersExist){this.colliderValidityChecked=!0;let n=new W.Vector3(0,-1,0),v=e.clone(),p=1500;v.y=p,this.objRaycast.set(v,n);let f=!1;var s=[];let m=~~(v.x>0)+(~~(v.z>0)+"");if(this.antiColliderActive&&(s=this.objRaycast.intersectObjects([...this.antiColliderList.noAxis,...this.antiColliderList[m]])),s.length>0)if(this.antiColliderTopActive){let C=this.objRaycast.intersectObjects([...this.antiColliderTopList.noAxis,...this.antiColliderTopList[m]]),x=-99999,g=e.y,S,b=this.nearestFloorHit,P=!1;for(var a=0;a<C.length;++a){var l=C[a];S=l.object.name;let R=l.point,T=l.distance,V=R.y<this.maxStepHeight;P=P||V,(T<x&&valid||i==null)&&(i=S,x=T,b=R)}let E;(!P||e.y<b.y&&this.nearestFloorHitPrev.y-b.y>this.maxStepHeight+this.getStandingHeight()&&!this.gravityActive&&e.y+this.maxStepHeight+this.getStandingHeight()<b.y&&this.gravityActive)&&((this.cameraMovement[0]!=0||this.cameraMovement[1]!=0)&&(P=!0,this.gravityActive=!1,this.objectJumpLock=!0),E=this.cameraPos.clone(),E.y=Math.min(e.y,E.y),e=E,b=e,this.gravityActive?b.y=this.nearestFloorHitPrev.y:b.y=this.cameraPos.y,this.cameraJumpActive=!1,this.cameraAllowJump=!0,this.cameraJumpInAir=!1,this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0)),P&&(i==null?(this.nearestFloorHit=this.nearestFloorHitPrev,this.nearestFloorObjName=this.nearestFloorObjNamePrev,Math.abs(e.y-this.nearestFloorHit.y)>this.maxStepHeight+this.getStandingHeight()&&(this.colliderValid=!1,this.gravityActive=!0)):(this.nearestFloorHitPrev=this.nearestFloorHit,this.nearestFloorObjNamePrev=this.nearestFloorObjName,this.nearestFloorHit=b,this.nearestFloorObjName=i))}else this.colliderFail=!0,this.movementBlocked=!0;else{let C=this.maxStepHeight+this.cameraJumpVelocity,x=C+this.maxStepHeight+this.gravityRate;if(v.y=e.y+C,this.objRaycast.set(v,n),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList||(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList={}),!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[m]){let g=[],S=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];g.push(...S.colliderList.noAxis),g.push(...S.colliderList[m]),g.push(...S.antiColliderTopList.noAxis),g.push(...S.antiColliderTopList[m]),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[m]=g}if(this.colliderActive&&this.antiColliderTopActive||this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive)s=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[m]);else return e;if(s.length>0){this.floorColliderInitialHit=!0;let g=-99999,S,b=this.nearestFloorHit;for(let P=0;P<s.length;++P){let E=s[P],R=E.distance,T=E.point,B=!1;if(S=E.object.name,B=T.distanceTo(e)<this.maxStepHeight,(this.portalList[S]||this.roomWarpZone.includes(S))&&B){i=S,b=T;break}else this.itemCheck(S,B)||(R<g||i==null)&&(i=S,g=R,b=T)}this.nearestFloorObjName==null&&i!=null&&(this.nearestFloorHitPrev=b,this.nearestFloorObjNamePrev=i,this.nearestFloorHit=b,this.nearestFloorObjName=i),this.nearestFloorHitPrev.y-b.y>this.maxStepHeight+this.getStandingHeight()&&!this.gravityActive?(i?e=this.cameraPos.clone():e=this.cameraPrevPos.clone(),i=this.nearestFloorObjName,this.cameraMovement[0]=0,this.cameraMovement[1]=0,this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0),this.pxlDevice.touchMouseData.velocity.multiplyScalar(0)):(this.nearestFloorHitPrev=this.nearestFloorHit,this.nearestFloorObjNamePrev=this.nearestFloorObjName,this.nearestFloorHit=b,this.nearestFloorObjName=i,i==null&&(this.colliderValid=!1,this.gravityActive=!0))}else this.colliderFail=!0,this.movementBlocked=!0,this.colliderValidityChecked=!1,e=this.cameraPos.clone()}}else this.colliderValidityChecked=!1;return this.colliderValidityChecked=!1,e}roomColliderCheck(e,t){if(!this.canMove)return e;this.colliderValidityChecked=!0,this.colliderValid=!1,this.colliderFail=!1,console.log("Room Collider Check");let i=e.clone();i.y=0,this.nearestFloorHit=i,this.nearestFloorObjName="None";let s=new W.Vector3(0,-1,0),a=e.clone(),l=1500;a.y=l,this.objRaycast.set(a,s);var n=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp);if(n.length>0)return this.pxlEnv.currentAudioZone=0,this.warpEventTriggered(1,this.pxlEnv.mainRoom),e;if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive==!0){if(!this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList){let v=[];Object.keys(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList).forEach(f=>{v.push(...this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList[f])}),this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList=v}if(this.objRaycast.set(a,s),n=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList),n.length==0){let v=this.cameraPrevPos.clone();return v.y=e.y,v}else{let v=!1,p=!1,f=!1,m=99999,C=e.clone();if(C.y-=this.maxStepHeight,n.forEach(x=>{let g=x.distance,S=x.point.y;S>e.y-this.maxStepHeight&&S<e.y+this.maxStepHeight+t&&C.y<S?(v=!0,f=!1,m=g,C=x.point):S>e.y+this.maxStepHeight?p=!0:S<e.y-this.maxStepHeight&&v==!1&&(f=!0)}),p){let x=this.cameraPrevPos.clone();return x.y=e.y,x}if(f&&(this.gravityActive=!0),v)return e.y<C.y&&this.jumpLanding(),C.clone()}}return e}checkColliderValid(e){this.colliderValidityChecked=!0;let t=this.maxStepHeight+this.gravityRate,i=e.distanceTo(this.nearestFloorHit),s=i<t;return this.colliderValid=s,i}eventTrigger(e=null){if(!this.canMove||!e)return!1;if(this.portalList[e])return this.warpEventTriggered(0,this.portalList[e]),this.eventCheckStatus=!1,!0;if(this.roomWarpZone.includes(e))return this.warpEventTriggered(1,e),this.eventCheckStatus=!1,!0;if(this.colliderShiftActive=this.colliderCurObjHit!=e||this.colliderShiftActive,this.colliderPrevObjHit=this.colliderCurObjHit,this.colliderCurObjHit=e,this.colliderShiftActive=this.colliderShiftActive||!(this.colliderAdjustPerc==1||this.colliderAdjustPerc==0),this.colliderShiftActive&&this.colliderCurObjHit){let t=1;this.colliderCurObjHit.includes("AudioTrigger")&&(t=-1),this.colliderAdjustPerc=Math.min(1,Math.max(0,this.colliderAdjustPerc+this.colliderAdjustRate*t));let s=1-this.colliderAdjustPerc,a=1;if(this.colliderCurObjHit=="AudioTrigger_1"?(this.pxlEnv.currentAudioZone=1,a=a-s*this.uniformScalars.darkBase,this.uniformScalars.exposureUniformBase=a):this.colliderCurObjHit=="AudioTrigger_2"?(this.pxlEnv.currentAudioZone=2,a=this.uniformScalars.curExp+s*this.uniformScalars.brightBase*1,this.uniformScalars.exposureUniformBase=a,this.proximityScaleTrigger=!0,this.pxlAudio.setFadeActive(-1)):(this.pxlEnv.currentAudioZone=0,a=a*(1-s)+this.uniformScalars.exposureUniformBase*s),this.colliderShiftActive=!(this.colliderAdjustPerc==1||this.colliderAdjustPerc==0),this.colliderPrevObjHit=="AudioTrigger_2"&&this.colliderCurObjHit!=this.colliderPrevObjHit&&(this.proximityScaleTrigger=!0,this.pxlAudio.setFadeActive(1)),this.pxlDevice.mobile&&(a=this.colliderAdjustPerc),this.pxlEnv.updateCompUniforms(a),this.proximityScaleTrigger&&!this.pxlDevice.mobile&&!this.pxlAutoCam.enabled){let l=this.colliderAdjustPerc;l=1-(1-l)*(1-l),this.pxlEnv.fogMult.x=l,this.colliderShiftActive||(this.proximityScaleTrigger=!1)}this.eventCheckStatus=this.colliderShiftActive}}itemCheck(e,t){if(!t)return!1;let i=e.split("_").shift();return this.pxlUser.itemListNames.includes(e)&&this.pxlUser.checkItemPickUp(i)?this.itemActive(i,e):!1}itemTrigger(){if(this.pxlUser.itemActiveTimer.length>0)this.pxlUser.itemActiveTimer[0]=this.pxlTimer.curMS;else{this.pxlUser.mPick.length==0&&(this.pxlUser.mPick=this.pxlUtils.randomizeArray(["LizardKing","StarField","InfinityZoom"]));let e=this.pxlUser.mPick.pop();this.pxlUser.checkItemPickUp(e),this.itemActive(e)}}itemActive(e=null,t=null){if(e==null)return!1;let i=this.pxlTimer.prevMS+this.pxlUser.itemRunTime,s="",a="";if(e=="LowGravity")a="Low Gravity",s="this.lowGrav=0;this.itemGroupList['"+t+"'].visible=true;",i=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(e=="LizardKing")a="I am the Lizard King",s="this.lKing=0;this.lKingWarp.set(...this.lKingInactive);this.lKingPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+t+"'].visible=true;"),i=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(e=="StarField")a="Major Tom",s="this.sField=0;this.sFieldPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+t+"'].visible=true;"),i=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;else if(e=="InfinityZoom")a="Fractal Substrate",s="this.iZoom=0;this.iZoomPass.enabled=false;"+(!this.pxlDevice.mobile&&"this.itemGroupList['"+t+"'].visible=true;this.pxlEnv.mapComposerWarpPass.needsSwap=true;this.pxlEnv.mapComposerWarpPass.enabled=false;"),i=this.pxlTimer.prevMS+this.pxlUser.itemRunTime,this.pxlEnv.mapComposerWarpPass.needsSwap=!0,setTimeout(()=>{this.pxlEnv.mapComposer.render(),this.pxlEnv.roomComposer.render(),setTimeout(()=>{this.pxlEnv.mapComposerWarpPass.needsSwap=!1,this.pxlEnv.mapComposerWarpPass.enabled=!0},500)},500);else return!1;return this.pxlGuiDraws.buildItemHud(e,a),this.pxlDevice.mobile||(this.pxlUser.itemGroupList[t].visible=!1),this.pxlUser.itemInactiveCmd.push(s),this.pxlUser.itemActiveTimer.push(i),this.pxlUser.itemActiveList.push(a),!0}toggleMovement(e=null){e==null&&(e=!this.canMove),this.canMove=e}updateMovement(e){if(!this.canMove)return;let t=[0,0],i=[...this.pxlDevice.directionKeysPressed],s=0,a=0,l=[e-this.pxlDevice.keyDownCount[0],e-this.pxlDevice.keyDownCount[1]],n=this.mobile?1:0;if(i[0]+i[2]==1){s=i[2]-i[0];let v=this.pxlQuality.settings.leftRight?this.cameraEasing[n]:(1-Math.min(1,Math.abs(this.cameraMovement[1]*.3)))*.5;t[0]=((this.pxlQuality.settings.leftRight?1:6)+l[0]*l[0]*.1)*v,t[0]=Math.min(this.pxlDevice.shiftBoost,t[0])*this.movementScalar}else this.pxlDevice.keyDownCount[0]=e;if(i[1]+i[3]==1){a=i[3]-i[1];let v=(1-Math.min(1,Math.abs(this.cameraMovement[0]*.07)))*this.cameraEasing[n];t[1]=l[1]*(l[1]*3+2+this.pxlDevice.shiftBoost)*.15*v,t[1]=Math.min(this.pxlDevice.shiftBoost,t[1])*this.movementScalar}else this.pxlDevice.keyDownCount[1]=e;this.cameraMovement[0]+=s*t[0],this.cameraMovement[1]+=a*t[1]}initFrameCamPosition(){let e=this.cameraPos.clone();if(!this.cameraBooted)this.cameraAimTarget.position.set(0,0,0),this.cameraPrevPos=new W.Vector3(e.clone()),this.cameraPrevLookAt=new W.Vector3(0,0,1);else{let t;t=new W.Vector3(this.pxlQuality.settings.leftRight?this.cameraMovement[0]*.5:0,0,this.cameraMovement[1]),this.cameraMoveLength=t.length(),t.applyQuaternion(this.camera.quaternion);let i=this.cameraMoveLength*this.cameraMoveLengthMult;if(i!=0){let s=.1;i=i>0?Math.max(s,i):Math.min(-s,i)}t.normalize().multiply(new W.Vector3(1,0,1)).multiplyScalar(i),e.add(t),this.cameraMovement[0]=Math.abs(this.cameraMovement[0])<this.posRotEasingThreshold?0:this.cameraMovement[0]*this.cameraMovementEase,this.cameraMovement[1]=Math.abs(this.cameraMovement[1])<this.posRotEasingThreshold?0:this.cameraMovement[1]*this.cameraMovementEase,e.y=this.cameraPos.y+this.cameraJumpVelocity,this.workerActive&&(this.cameraJumpVelocity=0)}return this.cameraCross=new W.Vector3(1,0,0).applyQuaternion(this.camera.quaternion),e}applyGravity(e){if(this.gravityActive){let t=this.maxStepHeight+this.gravityRate;if(e.y<this.nearestFloorHit.y){let s=this.nearestFloorHitPrev;e.y=Math.max(s.y,e.y),e.y<0&&(e.x=s.x,e.z=s.z)}else e.y=Math.max(this.nearestFloorHit.y,e.y-this.gravityRate),e.y==this.nearestFloorHit.y&&e.y<this.cameraPrevPos.y&&this.jumpLanding()}else if(e.distanceTo(this.nearestFloorHit)<this.maxStepHeight)e.y=this.nearestFloorHit.y;else{e=this.cameraPos.clone();let i=e.y>this.nearestFloorHit.y;this.gravityActive=i,this.colliderFail=!i,this.workerFunc("jumpLanding")}return e}getStandingHeight(){return this.standingHeight*this.userScale}getUserHeight(){let e=Math.min(1,Math.abs(this.cameraMovement[1]));this.walkBouncePerc=this.walkBouncePerc>=1?1:this.walkBouncePerc+.05,this.walkBounce+=e*.1,this.walkBouncePerc=this.walkBouncePerc*.9+e,this.walkBouncePerc<.03&&(this.walkBouncePerc=0,this.walkBounce=0,this.walkBounceSeed=Math.random()*2351.3256);let t=Math.sin(this.walkBounce*.4+this.walkBounceSeed+this.cameraMovement[1]*.2)*this.walkBouncePerc*.3;return this.getStandingHeight()-this.standingHeightGravInfluence+t}camApplyMobileRotation(){if(this.cameraPose.alpha!=null){let e=.017453292519943278,t=2.23606797749979,i=new W.Quaternion,s=this.cameraPose.alpha*e+this.cameraPose.alphaOffset+2.1,a=this.cameraPose.beta*e,l=this.cameraPose.gamma*e,n=new W.Vector3(0,0,1),v=new W.Quaternion,p=new W.Quaternion(-t,0,0,t),f=new W.Euler;f.set(a,s,-l,"YXZ"),i.setFromEuler(f),i.multiply(p),i.multiply(v.setFromAxisAngle(n,-this.cameraPose.orientation)),i.normalize();let m=new W.Quaternion;W.Quaternion.slerp(this.camera.quaternion,i,m,.35);let C=new W.Euler().setFromQuaternion(m);C.x=Math.max(-.95*Math.PI/2,Math.min(.95*Math.PI/2,C.x)),m.setFromEuler(C),this.camera.setRotationFromQuaternion(m)}}updateRoamCameraRotation(){if(this.cameraPose.alpha==null){let e=this.pxlDevice.gyroGravity[2],t=new W.Vector3(0,0,1),i=new W.Quaternion;this.pxlDevice.touchMouseData.velocity.y=Math.min(this.pi*500,Math.max(-this.pi*500,this.pxlDevice.touchMouseData.velocity.y));let s=new W.Euler,a;this.pxlDevice.mobile?(s.set(this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2,this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2,0,"YXZ"),a=new W.Quaternion,a.setFromEuler(s),a=this.pxlDevice.touchMouseData.initialQuat.clone().multiply(a)):(s.set(this.pxlDevice.touchMouseData.velocity.y*.005,this.pxlDevice.touchMouseData.velocity.x*.008+e,0,"YXZ"),a=new W.Quaternion,a.setFromEuler(s),a=this.camera.quaternion.clone().multiply(a)),a.normalize();let l=new W.Vector3(0,0,-10).applyQuaternion(a).add(this.camera.position);this.camera.setRotationFromQuaternion(a),this.camera.lookAt(l),this.camera.up.set(0,1,0)}}updateStaticCameraRotation(){let e=1;this.touchBlender?(e=Math.min(1,Math.max(0,this.pxlTimer.curMS-this.pxlDevice.touchMouseData.releaseTime)),e*=e,this.pxlDevice.touchMouseData.netDistance.multiplyScalar(1-e),this.touchBlender=e<1):this.pxlDevice.touchMouseData.netDistance.multiplyScalar(.5);let t=new W.Euler;t.set(this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2,this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2,0,"YXZ");let i=new W.Quaternion().clone(this.camera.quaternion);i.setFromEuler(t),i=this.camera.quaternion.clone().multiply(i),i.normalize(),this.touchBlender&&i.slerp(this.camera.quaternion.clone(),e).normalize();let s=new W.Vector3(0,0,-10).applyQuaternion(i).add(this.camera.position);this.camera.setRotationFromQuaternion(i),this.camera.lookAt(s),this.camera.up.set(0,1,0)}lookAtTargetLock(){if(this.lookAtTargetActive&&this.lookAtTargetActive&&(this.lookAtLockFader!=0&&(this.lookAtLockPerc+=(this.lookAtLockFader+Math.min(1,this.pxlDevice.touchMouseData.velocity.length()*.001))*this.lookAtLockFadeRate,(this.lookAtLockPerc<0||this.lookAtLockPerc>1)&&(this.lookAtLockPerc=this.lookAtLockPerc<0?0:1,this.lookAtLockFader=0),this.lookAtPerc.x=this.lookAtLockPerc),this.lookAtLockPerc>0)){let e=this.camera.quaternion.clone();this.camera.lookAt(this.cameraAimTarget.position);let t=this.camera.quaternion.clone();this.lookAtLockPerc==1?this.camera.setRotationFromQuaternion(t):this.camera.setRotationFromQuaternion(t.slerp(e,Math.cos(this.lookAtLockPerc*pi)*.5+.5))}}warpEventTriggered(e=0,t=null,i="init"){this.warpActive||(this.pxlEnv.mapComposerWarpPass.needsSwap=!0,this.warpType=e,this.warpObj=t,this.warpTarget=i,this.warpActive=!0,this.pxlEnv.initWarpVisual(e))}warpCamRun(){if(this.warpType==0)this.setToObj(this.warpObj);else if(this.warpType==1){let e=this.warpTarget=="init";this.warpToRoom(this.warpObj,e,this.warpTarget)}this.pxlEnv.setExposure(this.uniformScalars.exposureUniformBase),this.warpObj=null,this.warpTarget=null,this.warpActive=!1}lowQualityUpdates(){if(this.HDRView){let e=new W.Vector3(0,0,-1).applyQuaternion(this.camera.quaternion),t=e.clone().multiply(new W.Vector3(1,0,1)).normalize();this.camRotPitch.set(-Math.atan2(t.x,t.z)*.1591549430918955,e.y*.5)}}midQualityUpdates(){if(this.pxlQuality.settings.motion){let e=new W.Vector3(0,0,0);e.applyQuaternion(this.camera.quaternion),this.camRotXYZ.multiplyScalar(.8).add(e.multiplyScalar(.2));let t;if(this.pxlDevice.mobile){let a=sW*.5,l=sH*.5,n=new W.Vector3(0,0,10),v=new W.Vector3(0,0,10);n.applyQuaternion(this.camera.quaternion.clone()).project(this.camera),v.applyQuaternion(this.prevQuaternion).project(this.camera),n.x=(n.x+1)*a,n.y=-(n.y-1)*l,v.x=(v.x+1)*a,v.y=-(v.y-1)*l,t=v.clone().sub(n.clone()).multiplyScalar(.6).multiply(new W.Vector3(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y,0));let p=.1;t.length>p&&t.normalize().multiplyScalar(p)}else t=this.pxlDevice.touchMouseData.velocity.clone().multiplyScalar(Math.max(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y));let i=new W.Vector2(t.x,-t.y),s=new W.Vector2(0,0).lerpVectors(this.pxlEnv.blurDirPrev,i,.85);this.pxlEnv.blurDirPrev.set(this.pxlEnv.blurDirCur),this.pxlEnv.blurDirCur.set(s)}}emitCameraTransforms(e,t,i=!1){}jogServerMemory(){let e=this.cameraPos.clone(),t=this.getUserHeight();this.emitCameraTransforms(e,t,!0)}updateCamera(){this.updateStaticCameraRotation();let e=this.pxlDevice.touchMouseData.velocity.length();if(this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(.7),this.camUpdated||e!=0||this.pxlDevice.touchMouseData.active){this.camUpdated=!1;let t=!1;this.updateDeviceValues(e),this.pxlUser.localUserTurned=this.pxlDevice.touchMouseData.velocity.length()==0,this.prevQuaternion.copy(this.camera.quaternion);let i=this.initFrameCamPosition(),s=this.getUserHeight();if(this.canMove){if(this.pxlEnv.currentRoom==this.pxlEnv.mainRoom){let a=null,l=!1;i=this.mainColliderCheck(i,a)}else i=this.roomColliderCheck(i,s);this.updateGravity(),!this.colliderValid&&!this.colliderValidityChecked?this.jump=this.checkColliderValid(i):this.jump=0,this.eventCheckStatus=!0,i=this.applyGravity(i),this.pxlUser.localUserMoved=this.gravityActive||(this.cameraMovement[0]**2+this.cameraMovement[1]**2)**.5>0,this.cameraPrevPos=this.cameraPos.clone(),this.cameraPos=i.clone(),i.y+=s,this.camera.position.copy(i)}this.canMove?this.updateRoamCameraRotation():this.updateStaticCameraRotation(),this.camera.updateMatrixWorld(),this.emitCameraTransforms(i,s),this.cameraBooted=!0}else this.pxlUser.localUserMoved=!1,this.pxlUser.localUserTurned=!1}}});var ao={};U(ao,{countDownShapeData:()=>Qi});var Qi,Ki=k(()=>{Qi={vertCount:500,vertScale:6,attrList:["pscale","P","Alpha","N"],attrData:{pscale:{size:1,type:"Float"},P:{size:3,type:"Float"},Alpha:{size:1,type:"Float"},N:{size:3,type:"Float"}},defaultData:{pscale:1,Alpha:1},shapeOrder:["countDown_PreFloor"],shapeTimes:[60],shapeTween:[30],shapeWorldSpace:[1],shapeData:{countDown_PreFloor:{pscale:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],P:[-150.3869,.0309,890.1465,-117.8755,.0309,1552.385,187.3372,.0309,-834.4932,2.6271,.0309,-890.1396,-64.8474,.0309,1119.1666,219.9399,.0309,-642.9562,103.9793,0,1506.4083,-100.6423,.0309,1032.0382,-24.8593,.0266,-1026.824,334.2753,.0309,-1202.2144,46.6012,0,622.6015,-121.1346,.0219,-1472.9763,-71.6255,.0242,-1203.8156,42.7115,0,760.5775,175.2258,.0309,-876.5144,157.5252,.0309,-708.9138,73.9312,0,495.1274,164.7533,.0309,-419.2888,-68.6671,.0309,646.5574,25.5656,0,197.7138,-125.4273,.0309,846.3688,97.3119,0,936.7732,-51.6334,.0241,-1185.2942,67.3954,.0309,-118.0236,117.6981,.0309,-375.0154,94.6624,0,1186.8494,-92.2881,.0309,574.7449,70.9726,.0309,-352.2303,-175.8378,.0309,1562.4572,74.1973,.0309,-252.7512,-100.1525,.0309,1230.1896,143.5322,.0309,-452.264,174.0783,0,1549.1509,142.7963,0,1256.3729,-31.4469,.0309,-570.3293,45.0771,0,1508.5973,30.3038,0,1360.8257,123.1969,.0309,-507.7389,294.5794,.0309,-1253.3958,-138.1551,.0309,1012.6093,190.1462,0,1469.9302,87.6287,.0309,-508.7763,156.013,.0309,-1136.9225,150.2766,.0309,-984.3299,-66.1524,.0309,609.4693,-38.4923,.0278,-981.1913,-111.076,.0261,-1154.9891,140.5897,.0309,-650.5292,10.0006,0,3.3889,-106.8594,.0309,1340.4265,-119.3344,.0309,716.591,-165.8946,.0309,1070.6136,-145.2523,.0309,1320.1647,-159.4756,.0309,817.1453,-23.5942,.0309,-308.5429,62.1281,0,196.7569,-108.4185,.0309,808.8605,101.1831,.0309,-643.9623,218.2582,.0309,-1230.3727,-70.2445,.0309,-60.5595,-125.6638,.0254,-1208.5692,186.6017,.0309,-1243.7875,265.1731,.0309,-1261.548,58.2226,0,1196.3478,-263.2238,.0309,1377.3735,-81.5803,.0309,877.7581,-136.1593,.0309,1125.2941,143.356,0,1191.9391,166.1988,0,1402.0992,-2.4629,.0309,331.3165,66.9711,0,1078.8873,-37.4822,.0309,-639.3065,87.9313,0,28.6709,-81.6782,.0309,682.7052,-34.0084,.0309,378.8786,-109.3853,.0309,1645.7819,206.6525,0,1442.5007,280.8166,.0309,-1278.9175,-65.6157,.0309,1081.2173,77.8108,0,120.7013,102.1321,0,1065.472,176.2104,.0309,-1009.6346,-29.0283,.0203,-1355.4817,-159.9718,.0309,1356.9832,-208.7909,.0309,1458.9222,94.9108,0,1544.298,-48.0346,.0309,842.1784,124.4915,0,1589.3048,109.8203,.0309,-824.8988,14.523,0,1417.8452,14.4702,0,128.7274,98.3053,0,1578.074,24.7456,.0309,-31.8985,-194.1687,.0309,1583.7427,146.1958,.0309,-820.3747,10.1418,0,40.0861,33.7052,0,1059.4771,125.096,0,1552.1423,218.4121,.0309,-785.0522,117.7408,.0309,-169.9927,194.9371,.0309,-1345.7676,.3493,.0309,-739.1463,-40.5462,.0309,54.1806,198.2478,.0309,-1189.6566,60.6823,.0309,-84.8343,-30.4307,.0309,882.5303,108.4334,0,98.9668,6.7452,.0309,-1238.4668,126.2846,0,1487.2915,148.4911,0,1472.1622,136.1595,.0309,-1294.8698,-35.2355,.0218,-1282.3666,-25.6257,.0309,936.3594,-54.8033,.0214,-1328.3438,-189.6668,.0309,1636.4679,24.0225,0,946.2615,245.4293,.0309,-1135.5396,111.266,.0309,-231.5813,-165.8008,.0309,1477.7354,51.5269,0,1116.34,-69.9782,.0309,430.4027,-130.8348,.0309,1662.7562,244.3756,.0309,-1284.1815,38.8517,.0309,-483.7817,-62.675,.0221,-1304.1547,207.7508,.0309,-1147.7346,-232.0194,.0309,1710.7286,-63.8209,.0309,703.1035,67.0349,0,433.7927,72.1111,0,1482.0723,-116.768,.0309,890.3246,-5.5598,.0308,-594.0276,89.4615,.0309,-1217.2479,206.8634,.0309,-995.3817,129.0488,.0309,-324.5187,-69.5794,.0202,-1405.5171,228.6789,.0309,-896.7479,19.7361,.0309,-1126.1573,189.9833,.0309,-1277.3788,126.3072,.0309,-408.9595,161.852,.0309,-785.1769,-58.3921,.0309,1262.259,-28.3083,.0285,-935.2951,68.3237,0,1596.8774,-133.9687,.0246,-1262.3278,-87.5831,.0309,916.3719,21.7568,.0309,-348.8102,246.9633,.0309,-1068.0763,-130.7782,.0309,936.3252,11.3362,0,83.9482,-167.5739,.0309,1657.5095,78.5605,0,1339.608,211.7073,.0309,-825.1395,-94.1914,.0309,761.4807,-125.3026,.0309,1605.8687,-18.7024,.0309,423.3501,120.9302,.0309,-735.0588,123.5322,.0309,-547.0746,-47.9196,.0245,-1161.1483,138.5156,.0309,-1102.2799,238.7477,.0309,-1311.9369,31.6543,.0309,-403.4401,151.121,.0309,-1047.2343,86.1537,0,62.6075,-13.8961,.0219,-1254.4946,-68.3001,.0309,1589.2789,-85.3202,.0309,723.3158,139.069,.0309,-286.3852,-138.1767,.0309,1572.9581,-192.0032,.0309,1436.9797,42.3579,0,300.2809,114.3405,.0309,-27.8258,50.8895,0,32.3038,-135.3144,.0309,1501.8105,168.1875,.0309,-1175.1986,-173.4899,.0309,1722.0741,230.962,.0309,-1182.9753,45.2573,.0309,-7.4028,173.6795,0,1047.9286,226.0435,.0309,-1208.7529,107.4481,.0309,-452.0733,47.3333,0,138.013,-95.2486,.0309,1114.9658,79.4753,.0309,-1254.651,93.5697,0,801.0468,57.6376,.0309,-715.9595,-26.6818,.0309,692.7972,72.0857,.0309,-462.3348,-232.5921,.0309,1491.5215,-46.2146,.0303,-863.3472,-152.9639,.0309,1285.0281,71.9116,0,6.1119,7.354,.0309,-960.3834,-38.0389,.0309,801.6433,227.8235,.0309,-681.5831,148.5126,.0309,-15.1374,-120.1476,.0309,760.4372,34.1489,0,571.1269,-37.6141,.0309,650.7537,-163.2293,.0309,1407.7887,-23.26,.0309,89.6242,172.7067,.0309,-616.1572,-231.02,.0309,1646.1558,-126.1293,.0309,1294.3469,-17.9069,.0245,-1127.0139,32.912,.0309,-1171.7191,-42.0619,.0197,-1401.2715,148.9735,.0309,-497.656,-189.0913,.0309,1292.3926,149.1279,0,1506.8995,-110.9171,.0309,1402.2874,-181.2676,.0309,988.5276,180.5981,.0309,-1311.4183,-208.8542,.0309,1661.2833,-59.1196,.0309,935.9283,-156.6394,.0309,1109.4359,25.1067,.0309,-761.6533,-244.6061,.0309,1619.4591,-101.4241,.0309,659.5424,170.5114,.0309,-1211.3849,186.7272,.0309,-1043.8767,31.7494,.0309,-916.4103,121.7124,.0309,-881.8651,-79.9493,.0309,1063.0647,103.0276,.0309,-289.6597,315.449,.0309,-1155.162,222.5345,.0309,-942.2809,83.2721,.0309,-198.9164,80.5205,0,166.5041,204.539,.0309,-857.572,-45.1234,.0309,599.2081,62.0637,.0309,-156.7156,-83.3459,.0309,960.04,50.3426,0,101.0624,96.8921,0,1265.6465,40.9472,.0309,-662.3583,-154.3013,.0309,1541.3555,140.593,.0309,-1260.7134,175.5045,.0309,-670.8762,225.7802,.0309,-1036.2275,-220.9626,.0309,1293.9612,6.0428,.0309,-1277.6619,128.6589,.0309,-1166.3201,-150.3859,.0309,778.1994,-241.0561,.0309,1407.272,212.4789,.0309,-1304.1691,138.6457,.0309,-616.2774,-73.1323,.0309,1356.8458,-213.5785,.0309,1615.2621,159.5213,.0309,-473.7868,-66.7765,.0309,1179.6144,-184.7025,.0309,1256.6273,129.01,.0309,-111.6397,-135.9163,.0309,1044.9624,-5.3266,.0309,-29.1292,80.9976,.0309,-33.6431,-64.4153,.0309,979.1286,264.6176,.0309,-1311.1759,-115.7517,.0309,1367.5287,-157.6108,.0309,1685.614,105.1903,0,1641.3971,147.9526,.0309,-1328.8992,105.5806,0,1027.5068,7.9294,.0309,-1085.788,86.5059,.0309,-415.6966,24.7472,.0309,-723.2385,-208.3323,.0309,1555.0632,236.7455,.0309,-1254.3065,284.1978,.0309,-1085.3851,74.624,.0309,-294.5153,129.5711,0,916.7252,17.7029,.0309,-868.006,-101.8354,.0309,1494.7585,327.0823,.0309,-1254.5781,205.4456,.0309,-1077.8574,-131.5016,.0309,1344.0558,290.5057,.0309,-1328.4749,-136.6219,.0309,1091.7083,258.8217,.0309,-1238.9288,213.1959,.0309,-1265.0791,51.7262,.0309,-50.1731,44.0008,0,61.4903,122.7655,.0309,-768.1596,119.6911,.0309,-687.6739,-75.5372,.0309,492.3133,-139.3807,.0309,1195.1417,-88.7385,.0309,1147.5833,-160.7339,.0309,1601.476,272.6089,.0309,-1038.8915,174.473,.0309,-1087.246,-36.7554,.0309,305.7394,-157.8948,.0309,701.3972,228.2672,.0309,-964.3885,-108.2152,.0309,993.2111,-116.5117,.0309,1062.0701,153.7587,.0309,-907.9393,-157.1679,.0267,-1190.3027,28.379,.0309,-129.321,181.6234,0,1517.5826,-51.1541,.0309,347.9309,-32.7218,.0309,25.8307,122.9558,0,1523.4869,-95.5004,.0243,-1230.339,-117.4686,.0226,-1350.0867,153.7628,0,1384.0232,41.0183,0,1471.1741,148.6207,.0309,-156.9717,142.2088,.0309,-64.1377,-101.3919,.0309,1280.0104,-265.9518,.0309,1337.0461,-124.0279,.0309,1257.3915,92.0061,.0309,-329.5485,123.5473,0,1422.115,22.1258,0,234.5697,248.4192,.0309,-997.3826,73.9634,0,1017.5784,138.5247,0,33.4105,-3.4577,.0226,-1208.2318,-182.3166,.0309,1506.7476,184.4275,.0309,-735.7841,-56.6966,.0309,1040.2112,-125.67,.0309,681.9171,23.0712,.0309,-1207.6434,-238.935,.0309,1675.4131,-53.9855,.0309,1301.3658,-225.3006,.0309,1585.6509,312.8372,.0309,-1114.4163,32.2795,0,1612.5942,145.6242,0,1301.3866,-94.7584,.0226,-1314.0216,-15.9424,.0212,-1291.684,52.9151,0,231.7185,48.6211,0,168.317,50.6072,0,395.1082,76.0417,0,1514.9249,-96.1966,.0309,1606.7633,-12.8074,.0309,-336.7975,-52.0115,.0234,-1224.6272,-149.6235,.0309,1147.924,105.5288,.0309,-68.6073,-113.188,.0309,958.7141,-275.4464,.0309,1670.0601,57.2352,.0309,-1281.8784,-70.2692,.0309,771.6522,64.3506,0,271.3841,-78.9726,.026,-1125.0801,-80.2648,.0218,-1339.9636,-73.7187,.0309,1009.1139,6.4594,.0309,-1316.7391,-65.4156,.0298,-911.6061,-153.7144,.0309,1628.4749,122.9467,.0309,-198.8111,133.9229,0,949.0271,-15.9599,.0192,-1394.0874,-125.6463,.0309,1696.387,-95.0344,.0293,-972.7617,-49.6549,.0309,461.6572,94.4728,.0309,-106.2316,177.9042,.0309,-548.9158,151.3954,0,1535.3042,39.4945,.0309,-219.3219,-193.5245,.0309,1680.7058,-102.2584,.0309,625.2022,104.2186,0,189.8748,139.9327,0,1622.849,-43.7148,.0309,734.9761,190.4697,.0309,-1116.1177,-101.9526,.0309,1088.9314,122.1711,0,230.8497,-21.2236,.0309,-439.7933,162.6233,0,1096.3604,72.7443,0,1285.8374,-149.8377,.0309,968.2503,70.571,0,364.2043,169.0714,0,1488.7125,151.8182,0,1568.8035,-55.7211,.0309,-127.9772,-68.5685,.0309,807.0244,-126.4097,.0309,1440.4734,-144.4758,.0309,1381.5548,-65.3687,.0291,-948.6236,56.8317,0,839.2228,-151.8487,.0255,-1303.8488,277.5326,.0309,-1158.9056,-85.303,.0251,-1175.9631,133.8307,0,1128.6833,153.6215,.0309,-222.5052,213.0148,0,1542.0648,194.3257,0,1344.2549,155.442,0,1439.9865,-34.5376,.0212,-1313.2687,117.5956,0,822.915,228.9224,.0309,-721.4219,-62.4549,.028,-1002.9484,-14.7807,.0234,-1180.8033,155.2791,0,1339.9369,.3495,.0255,-1055.7629,-57.3261,.0273,-1029.0758,88.8363,0,721.4096,243.927,.0309,-1338.5792,-128.016,.0227,-1437.5886,-56.1685,.0225,-1273.7158,254.3293,.0309,-1210.5342,177.4276,0,1610.8788,61.8223,0,1542.0615,-60.2284,.0309,-549.6321,239.9711,.0309,-1104.4557,-31.9689,.0233,-1205.3507,81.1611,0,986.6481,-186.2551,.0309,1608.9277,-24.2803,.0186,-1433.3472,115.5464,0,1220.8749,-68.0719,.0209,-1370.2146,-7.5925,.0267,-1002.6639,97.1899,0,1485.1656,-82.5488,.0228,-1288.0715,-10.9792,.0309,641.1585,17.1353,.0309,-445.9182,9.63,.0309,-245.6392,112.0881,0,1345.673,132.6625,0,1028.4077,38.8006,0,1000.2794,-196.7684,.0309,1346.423,109.9497,0,1304.3684,-27.35,.0226,-1236.2242,118.1097,0,615.4873,42.1947,0,877.1704,47.8986,0,915.2786,-58.0187,.0309,-302.2948,-164.9484,.0269,-1247.8785,-19.6482,.0309,-134.3755,33.945,0,1293.7214,108.6325,0,1151.5352,-55.4124,.0309,-601.9572,109.3682,0,753.8525,98.5273,0,648.354,25.8628,.0309,-308.919,106.9537,0,1463.053,51.8261,0,1427.8076,-55.0168,.0256,-1113.1647,30.9679,.0309,-98.0266,-117.694,.0236,-1291.2881,56.6668,0,691.0779,53.6467,0,795.0153,-5.5666,.0309,-174.3179,-42.3444,.0225,-1255.198,-88.5735,.0236,-1256.922,54.4153,0,1153.6332,92.0823,0,889.8616,101.6093,0,1384.1783,26.3426,.0309,-619.5081,-42.2809,.0309,-493.978,72.3453,0,1239.2573,-6.0134,.0309,-540.4188,-31.9463,.0308,-725.8403,19.188,.0309,-66.3654,-13.0619,.0308,-692.7062,80.3498,0,220.2531,-29.8916,.0309,-5.5098,49.3726,0,725.9321,108.5672,0,1110.3125,83.4223,0,614.1436,99.3178,0,684.0179,21.4917,.0309,-170.2276,126.419,0,579.4589,73.0821,0,766.3069,111.3565,0,970.9427,151.6464,0,882.6736,-13.537,.0309,-277.3482,-7.2006,.0309,-496.1304,186.2576,.0309,-907.7623,67.2002,0,529.7164,71.4441,0,582.0921,-44.677,.0309,-242.3667,-27.656,.0309,-52.4307,-40.0078,.0309,-84.9021,-171.3656,.0252,-1541.1433,65.2926,0,656.6734,180.3852,.0309,-955.2371,-67.1274,.0186,-1484.1785,-35.9353,.0179,-1483.9939,-24.2957,.017,-1517.533,-94.232,.0197,-1495.3425,91.8248,0,264.9274,-102.6966,.0213,-1392.9041,-5.0638,.0309,-101.4705,141.0118,0,537.5858,127.7822,0,494.8495,94.2597,0,560.1642,-116.2242,.0212,-1521.142,95.547,0,403.08,128.832,0,712.8452,-83.3105,.0186,-1535.111,111.1693,0,527.6302,-126.7166,.0218,-1550.5571,17.1482,0,683.2355,-95.2447,.0202,-1445.3323,-146.6421,.0237,-1488.4318,-56.1945,.0193,-1436.4421,138.0596,0,769.5013],N:[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]}}}});var oo={};U(oo,{countDownShapeData:()=>Qi});var lo=k(()=>{Ki()});var no={};U(no,{shaderHeader:()=>A});function A(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}var N=k(()=>{});var uo={};U(uo,{dustFrag:()=>je,dustVert:()=>_e});function _e(r,e=120){let t=A();return t+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,r>0&&(t+=`uniform vec3[${r}] lightPos;`),t+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${e.toFixed(3)}
    #define PROX_INV 1.0/${(e*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${r}
    
    
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

  `,r>1?t+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:r==1&&(t+=`
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
    }`,t}function je(){let r=A();return r+=`
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
    }`,r}var Ct=k(()=>{N()});var ho={};U(ho,{default:()=>be});import*as ne from"./three.module.js";var be,St=k(()=>{ue();Ct();be=class{constructor(e=null,t="particles"){this.name=t,this.room=e,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new K(0,0),this.position=new te(0,0,0),this.atlasPath="sprite_dustLiquid.png",this.atlasPath="sprite_dustAtlas.png"}build(e=30,t=6,i=4,s=null){s||(s=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(e,t,i,s)}setPosition(...e){e.length===1?this.position=e[0]:this.position=new te(...e),this.points&&this.points.position.copy(this.position)}addToScene(e=30,t=6,i=null,s=4,a=[[0,0]],l=!1){this.count=e,this.pscale.x=t*this.room.pxlEnv.pxlQuality.screenResPerc,this.isInternalTexture=!1;let n=null;l?(n=this.atlasRandomGen,a=s):n=this.atlasArrayPicker,i||(i=this.newMaterial());let v=[],p=[],f=[];for(let b=0;b<e;++b)v.push(0,0,0),p.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),f.push(...n(a));let m=new ne.Float32BufferAttribute(v,3),C=new ne.Float32BufferAttribute(p,4),x=new ne.Float32BufferAttribute(f,2),g=new ne.BufferGeometry;g.setAttribute("position",m),g.setAttribute("seeds",C),g.setAttribute("atlas",x);let S=new ne.Points(g,i);return S.sortParticles=!1,S.frustumCulled=!1,this.room.scene.add(S),S.layers.set(1),S.pBaseScale=t,this.room.geoList[this.name]=S,this.geometry=g,this.material=i,this.points=S,S.position.copy(this.position),S}setUserHeight(e){this.pxlEnv.pxlCamera.userScale=e}atlasRandomGen(e=4,t=2){let i=1/e;return Array.from({length:t}).map(()=>Math.floor(Math.random()*648405.71%e)*i)}atlasRandomList(e=4,t=4,i=2){return Array.from({length:e}).map(s=>this.atlasRandomGen(t,i))}atlasArrayPicker(e){return e[Math.floor(Math.random()*92314.75%e.length)]}dupeArray(e,t){return Array.from({length:t}).fill(e)}elementDuplicator(e,t=4){return e.map(i=>this.dupeArray(i,t)).flat(1)}findLightPositions(){let e=[],t=0;return this.room.lightList.hasOwnProperty("PointLight")&&(t=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(i=>{e.push(i.position.clone())})),e}setAtlasPath(e){this.atlasPath=e,this.isInternalTexture=!1}useInternalAsset(e){this.atlasPath=e,this.isInternalTexture=!0}newMaterial(e=!0){let t=this.findLightPositions(),i={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:t}},s=this.room.pxlFile.pxlShaderBuilder(i,_e(t.length),je());return s.side=ne.DoubleSide,s.transparent=!0,this.isInternalTexture?s.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:ne.NearestFilter,minFilter:ne.NearestMipmapNearestFilter}):s.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:ne.NearestFilter,minFilter:ne.NearestMipmapNearestFilter}),s.uniforms.noiseTexture.value=this.room.softNoiseTexture,s.depthTest=!0,s.depthWrite=!1,e&&(this.room.textureList[this.name]=s),s}}});var co={};U(co,{smokeFrag:()=>wt,smokeVert:()=>Pt});function Pt(r=[8.7,8.4]){let e=A();return e+=` 
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
        vec2 windDir = vec2( windInf*${r[0]}, windInf * ${r[1]} );
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
        
        
    }`,e}function wt(){let r=A();return r+=`
        
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
    }`,r}var qt=k(()=>{N()});var po={};U(po,{BillowSmoke:()=>Et});import*as ot from"./three.module.js";var Et,Xi=k(()=>{St();qt();Et=class extends be{constructor(e=null,t="billowSmoke"){super(e,t),this.name=t,this.room=e}build(e=50,t=56,i=4,s=null){s||(s=[...super.dupeArray([0,0],4),...super.dupeArray([.25,0],4),...super.dupeArray([.5,0],2),...super.dupeArray([.5,.25],2),...super.dupeArray([.5,.5],2),...super.dupeArray([.5,.75],2),...super.dupeArray([.75,.75],4),...super.dupeArray([.75,.25],3),...super.dupeArray([.75,.25],3)]);let a={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:.8},rate:{type:"f",value:2.85}},l=this.room.pxlFile.pxlShaderBuilder(a,Pt(),wt());l.side=ot.DoubleSide,l.transparent=!0,l.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:ot.NearestFilter,minFilter:ot.NearestMipmapNearestFilter}),l.uniforms.noiseTexture.value=this.room.softNoiseTexture,l.depthTest=!0,l.depthWrite=!1,this.room.textureList[this.name]=l,super.addToScene(e,t,l,i,s)}}});var mo={};U(mo,{emberWispsFrag:()=>Tt,emberWispsVert:()=>Dt});function Dt(r=[-.13,.15]){let e=A();return e+=`
        
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
    
    const vec2 windForce = vec2(${r[0]}, ${r[1]});
    
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
        
    } `,e}function Tt(){let r=A();return r+=`        
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
    }`,r}var ei=k(()=>{N()});var fo={};U(fo,{EmberWisps:()=>Mt});import*as lt from"./three.module.js";var Mt,Yi=k(()=>{St();ei();Mt=class extends be{constructor(e=null,t="emberWisps"){super(e,t),this.name=t,this.room=e}build(e=30,t=6,i=4,s=null){s||(s=super.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4));let a={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:5.5}},l=this.room.pxlFile.pxlShaderBuilder(a,Dt(),Tt());l.side=lt.DoubleSide,l.transparent=!0,l.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:lt.NearestFilter,minFilter:lt.NearestMipmapNearestFilter}),l.uniforms.noiseTexture.value=this.room.softNoiseTexture,l.depthTest=!0,l.depthWrite=!1,this.room.textureList[this.name]=l,super.addToScene(e,t,l,i,s)}}});var vo={};U(vo,{FloatingDust:()=>At});import*as me from"./three.module.js";var At,Ji=k(()=>{St();Ct();At=class extends be{constructor(e=null,t="floatingDust"){super(e,t),this.name=t,this.room=e}build(e=1e3,t=7,i=120,s=[0,0,0],a=[0,1],l=[[0,0]],n=!0){let v=super.findLightPositions();a=new me.Vector2(a[0],a[1]),s=new me.Vector3(s[0],s[1],s[2]);let p={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:s},windDir:{type:"v",value:a},lightPos:{value:v}},f=this.room.pxlFile.pxlShaderBuilder(p,_e(v.length,i),je());f.side=me.DoubleSide,f.transparent=!0,this.isInternalTexture?f.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:me.NearestFilter,minFilter:me.NearestMipmapNearestFilter}):f.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:me.NearestFilter,minFilter:me.NearestMipmapNearestFilter}),f.uniforms.noiseTexture.value=this.room.softNoiseTexture,f.depthTest=!0,f.depthWrite=!1,this.room.textureList[this.name]=f,super.addToScene(e,t,f,4,l,n)}}});var go={};U(go,{BillowSmoke:()=>Et,EmberWisps:()=>Mt,FloatingDust:()=>At});var xo=k(()=>{Xi();Yi();Ji()});var yo={};U(yo,{snowFrag:()=>Zi,snowVert:()=>$i});function $i(r=!1){let e=!r,t=A();return t+=`
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
    }`,t}function Zi(){let r=A();return r+=`
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
    }`,r}var qi=k(()=>{N()});var ti={};U(ti,{dustFrag:()=>je,dustVert:()=>_e,emberWispsFrag:()=>Tt,emberWispsVert:()=>Dt,smokeFrag:()=>wt,smokeVert:()=>Pt,snowFrag:()=>Zi,snowVert:()=>$i});var es=k(()=>{ei();Ct();qt();qi()});var bo={};U(bo,{countDownFrag:()=>tu,countDownVert:()=>eu});function eu(){let r=A();return r+=`
    uniform sampler2D softNoiseTexture;
    uniform vec2 time;
    uniform vec2 tweener;
    uniform float rate;
    uniform float pointScale;
    
    uniform float fromWorldSpace;
    uniform float toWorldSpace;
    uniform mat4 worldMatrix;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    attribute vec3 From_P;
    attribute vec3 To_P;
    attribute float From_Alpha;
    attribute float To_Alpha;
    attribute vec3 From_N;
    attribute vec3 To_N;
    attribute float From_pscale;
    attribute float To_pscale;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vCamDot;
    varying vec3 vColor;
    
    #define PROX 1000.0
    #define LAND 50.0
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        float blender= tweener.x;
        vec3 fMVPos= (worldMatrix * vec4(From_P, 1.0)).xyz;
        fMVPos = mix( fMVPos, From_P, fromWorldSpace);
        vec3 tMVPos= (worldMatrix * vec4(To_P, 1.0)).xyz;
        tMVPos = mix( tMVPos, To_P, toWorldSpace);
        vec3 pos = mix( fMVPos, tMVPos, blender);
        
        vec3 noiseCd=texture2D(softNoiseTexture,seeds.xy+time.x*vec2( seeds.zx )*.1).rgb ;
        float noiseBlender= mix( fromWorldSpace, toWorldSpace, blender);
        pos += noiseCd*seeds.x*seeds.y*(40. * noiseBlender + 10.);
        vec4 mvPos = viewMatrix * vec4( pos, 1.0);
        
        vAlpha = mix( From_Alpha, To_Alpha, blender );
        vec3 n = mix( From_N, To_N, blender );
        n = mat3( worldMatrix ) * n;
        vCamDot=dot( normalize(n), normalize(mvPos.xyz-cameraPosition) )*.5+.5;
        
        vec3 cdMix=mix( vec3( .8, .1, .7 ), vec3( .9,.8,.9 ), seeds.x );
        cdMix=mix( vec3( .2,.2,.9 ), cdMix, vCamDot);
        vColor = cdMix;

        float pscaleMult=mix( From_pscale, To_pscale, blender );
        gl_PointSize = pointScale * vAlpha * pscaleMult * (sin( seeds.x + seeds.y + time.x*seeds.w*5. )*.4+1.); 
        
        gl_Position = projectionMatrix*mvPos;
    }`,r}function tu(){let r=A();return r+=`
    uniform sampler2D snowTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vCamDot;
    varying vec3 vColor;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = uv-.5;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        float alpha=texture2D(snowTexture,rotUV).r ;
        vec4 Cd=vec4( vColor, alpha );

        gl_FragColor=Cd;
    }`,r}var Co=k(()=>{N()});var So={};U(So,{snowConfettiFrag:()=>su,snowConfettiVert:()=>iu});function iu(r=!1){let e=!r,t=A();return t+=`
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    uniform float confetti;
    
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
        
        float confettiRotScalar = vAtlas.y < .5 ? 5. : 1.;
        float confettiScalar = vAtlas.y < .5 ? 2.*confetti : 1.;
        float rot=seeds.z+time.x*(seeds.z*2.)*confettiRotScalar;
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
        pos.xz+=vec2( sin(pos.x+yLimit*seeds.x), sin(pos.z+pos.x+yLimit*seeds.y) )*10.*confettiScalar; // Snow sway in the sky
        
        // Shift Y position per camera height
        pos.y+=cameraPosition.y-yFract*(cameraPosition.y); 
        pos.y=max( floor+1.5, pos.y );
        
        float melt=min(1.0, (pOff.y+LAND-floor)*.02);
        // float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.001) * melt );
        float pScalar = max( 0., (1.-length((pos-cameraPosition)*vec3(2.,1.,2.) )*0.001) * melt );
        
        vScalar = pScalar;
        float pScale = pointScale * seeds.w * pScalar * confettiScalar;
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,t}function su(){let r=A();return r+=`
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
        
        vec4 pCd=texture2D(snowTexture,rotUV);
        float alpha= pCd.a * vScalar;
        vec4 Cd=vec4( pCd.rgb, alpha );

        gl_FragColor=Cd;
    }`,r}var Po=k(()=>{N()});var ts={};U(ts,{ExtensionBase:()=>Ee});var Ee,nt=k(()=>{Ee=class{constructor(){this.active=!1,this.verbose=!1,this.callbacks={}}init(){}start(){this.active=!0}pause(){this.stop()}stop(){this.active=!1}subscribe(e,t){this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(t)}unsubscribe(e,t){this.callbacks[e]&&(this.callbacks[e]=this.callbacks[e].filter(i=>i!==t))}emit(e,t){this.callbacks[e]&&this.callbacks[e].forEach(i=>i(t))}destroy(){this.disable()}}});var is={};U(is,{default:()=>ii});var ii,ss=k(()=>{nt();ii=class extends Ee{constructor(e){this.status=!1,this.accessToken="",this.jwtToken="",this.socket=io("https://www.www.com",{transports:["websocket"]})}init(){socket.on("event",e=>{console.log(e)}),socket.on("connect",onConnect),socket.on("disconnect",onDisconnect),socket.on("authenticated",onAuthenticated),socket.on("unauthorized",console.error)}onConnect(){console.log("Successfully connected to the websocket"),socket.emit("authenticate",{method:"jwt",token:this.jwtToken})}onDisconnect(){console.log("Disconnected from websocket"),this.status=!1,onConnect()}onAuthenticated(e){let{channelId:t}=e;console.log(`Successfully connected to channel ${t}`),this.status=!0}}});var as={};U(as,{PoseEngine:()=>rs});var rs,os=k(()=>{nt();rs=class extends Ee{constructor(e){switch(this.active=!1,this.verbose=!1,e){case"MediaPipe":this.model=new MediaPipePose;break;default:throw new Error("Unknown pose estimation '"+e+"' model")}}async estimatePose(e){return await this.model.estimate(e)}}});var ns={};U(ns,{MediaPipePlugin:()=>ls});var ls,us=k(()=>{ls=class r{constructor(){this.workerScriptUrl="./PoseEngine_worker.js",this.worker=null,this.booted=!1}static async loadScriptWithProgress(e,t){return new Promise((i,s)=>{let a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="text",a.onprogress=l=>{if(l.lengthComputable&&typeof t=="function"){let n=Math.round(l.loaded/l.total*100);t(n)}},a.onload=()=>{if(a.status===200){let l=document.createElement("script");l.textContent=a.responseText,document.head.appendChild(l),i()}else s(new Error(`Failed to load script: ${e}`))},a.onerror=()=>s(new Error(`Network error while loading: ${e}`)),a.send()})}async init(e){let t="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js";try{console.log("Loading MediaPipe..."),await r.loadScriptWithProgress(t,e),this.worker=new Worker(this.workerScriptUrl),this.booted=!0,console.log("MediaPipe Plugin Initialized")}catch(i){console.error("Error initializing MediaPipePlugin:",i)}}sendMessage(e){if(!this.booted){console.warn("MediaPipePlugin is not initialized.");return}this.worker.postMessage(e)}onMessage(e){if(!this.worker){console.warn("WebWorker not initialized.");return}this.worker.onmessage=t=>e(t.data)}terminateWorker(){this.worker&&(this.worker.terminate(),this.worker=null,console.log("WebWorker terminated."))}}});var hs=pt(()=>{self.onmessage=async r=>{let{type:e,data:t}=r.data;switch(e){case"processFrame":let i=await poseModel.estimate(imageData);self.postMessage({type:"result",pose:i});break;default:console.warn("Unknown message type:",e)}}});var ds={};U(ds,{WebCamera:()=>cs});var cs,ps=k(()=>{nt();cs=class extends Ee{constructor(){this.video=document.createElement("video"),this.stream=null,this.isInitialized=!1,this.active=!1}init(e){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.stream=t,this.video.srcObject=this.stream,this.video.play(),this.isInitialized=!0,console.log("WebCamera Initialized"),e&&e(null)}).catch(t=>{console.error("Error initializing WebCamera:",t),e&&e(t)})}start(e){this.isInitialized?(this.active=!0,console.log("WebCamera Started"),e&&e(null)):(console.error("WebCamera is not initialized"),e&&e(new Error("WebCamera is not initialized")))}pause(e){this.stop(e)}stop(e){this.stream?(this.stream.getTracks().forEach(t=>t.stop()),this.video.srcObject=null,this.isInitialized=!1,console.log("WebCamera Stopped"),this.active=!1,e&&e(null)):e&&e(new Error("WebCamera is not initialized"))}}});var ru,ms=k(()=>{ru=Bt({"./ExtensionBase.js":()=>Promise.resolve().then(()=>(nt(),ts)),"./Extensions.js":()=>Promise.resolve().then(()=>(si(),fs)),"./Networking.js":()=>Promise.resolve().then(()=>(ss(),is)),"./PoseEngine.js":()=>Promise.resolve().then(()=>(os(),as)),"./PoseEngine/MediaPipe.js":()=>Promise.resolve().then(()=>(us(),ns)),"./PoseEngine/PoseEngine_worker.js":()=>Promise.resolve().then(()=>We(hs())),"./WebCam.js":()=>Promise.resolve().then(()=>(ps(),ds))})});var fs={};U(fs,{Extensions:()=>ut});var au,ut,si=k(()=>{ms();au=["PoseEngine"],ut=class{constructor(){this.plugins={},this.verbose=!1}init(e,t,i,s=!1){!this.plugins[e]||s?this.load(e,(a,l)=>{a?i?i(a):this.verbose&&console.error(a):t&&t(l)}):(this.verbose&&console.log(`Extension ${e} already booted, skipping...`),t&&t(this.plugins[e]))}async load(e,t){if(au.includes(e))try{let i=await ru(`./${e}.js`),s=new i.default;try{this.boot(e,s)}catch(a){console.error(`Error (2) Booting extension '${e}':`,a)}t&&t(null,s)}catch(i){console.error(`Error (1) Importing / Parsing extension '${e}':`,i),t&&t(err,null)}else{let i=new Error(`Extension ${e} not found`);console.error(i),t&&t(i,null)}}start(e){let t=this.get(e);t&&t.start()}pause(e){let t=this.get(e);t&&t.pause()}stop(e){let t=this.get(e);t&&t.stop()}status(e){let t=this.get(e);return t?t.active:!1}boot(e,t){this.plugins[e]=t,t.init()}get(e){return this.plugins[e]?this.plugins[e]:(console.warn(`Extension ${e} not found`),null)}unload(e){let t=this.get(e);t&&(t.destroy(),delete this.plugins[e])}}});var wo={};U(wo,{SVGUtils:()=>re});var re,vs=k(()=>{Xt();re=class{static svgPromise(e,t,i=null,s=null){let a={},l=document.getElementById(t);if(!l)return;i!=null&&l.classList.add(i);let n=this,v=Promise.resolve(ve.getURLContent(e));return v.then(p=>{l.innerHTML=p,a.svg=l.getElementsByTagName("svg")[0],s!=null&&a.svg.classList.add(s)}),a.promise=v,a}static svgRawPromise(e){let t={},i=this;return Promise.resolve(ve.getURLContent(e)).then(a=>{let l=document.createElement("div");l.innerHTML=a,t.svg=l.getElementsByTagName("svg")[0]}),t}static svgIconPromise(e,t,i,s=null,a=null){let l=this,n={};n.hover=null,n.mute=null,n.caret=null,n.indicator=null,n.waiting=[],n.state=null,n.eventType=i;let v=document.getElementById(t);if(!v)return;a?v.classList.add(a):v.classList.add("iconStyle"),n.parent=v.parentNode,n.parent.classList.add("iconHover"),n.parent.addEventListener("click",f=>{l.iconEvent("click",n,i)});let p=Promise.resolve(ve.getURLContent(e));return p.then(f=>{if(v.innerHTML=f,n.svg=v.getElementsByTagName("svg")[0],n.svg){a?n.svg.classList.add(a):n.svg.classList.add("iconStyle");let m=n.svg.children,C=n.svg.getAttribute("xmlns"),x=n.svg.getAttribute("height"),g=n.svg.getAttribute("width");for(let b=0;b<m.length;++b){let P=m[b];if(t=="speakerIcon"){let R=v.getAttribute("xmlns"),T=parseInt(x),B=parseInt(g),V=document.createElementNS(R,"rect");V.setAttribute("x",-1),V.setAttribute("y",-1),V.setAttribute("fill","white"),V.setAttribute("fill-opacity",0),V.setAttribute("height",x+2),V.setAttribute("width",g+2),V.setAttribute("z-index",-1),v.appendChild(V),n.hover=V,n.svg.setAttribute("fill-opacity",this.toggleOpacity[0])}let E=P.getAttribute("id");if(E=="mute"){n.mute=P,n.mute.style.transformOrigin="50% 50%",n.mute.style.filter="alpha(opacity=0)",n.mute.style.opacity="0",n.mute.style.transform="scale(0,0)",n.mute.style.transition="scale 1s, opacity .5s, filter .5s";let R=document.createElement("style");R.type="text/css",R.innerHTML=`
                                @keyframes loadingSpinner{
                                    0%{
                                        transform: rotate(0deg);
                                    }
                                    100%{
                                        transform: rotate(360deg);
                                    }
                                }
                            `,n.svg.appendChild(R);let T=Math.max(2,Math.min(x,g)*.25),B=g*.5,V=x*.5,Q=document.createElementNS(C,"path");Q.setAttribute("d",` M ${B} ${V-T} A ${T} ${T} 0 1 1 ${B-T} ${V} `),Q.setAttribute("stroke","white"),Q.setAttribute("stroke-width","2"),Q.style.display="none",Q.style.transformOrigin="50% 50%",Q.style.animation="loadingSpinner 1s linear infinite",Q.style.animationDuration="2s",Q.style.animationPlayState="paused",n.indicator=Q,n.svg.appendChild(Q),this.toggleIcon(n,s)}else E=="caret"?(n.caret=P,n.caret.style.transformOrigin="50% 50%",n.caret.style.transition="transform .5s",this.flipIcon(n,!1)):E=="state"?(P.style.display="none",n.state=P):n.waiting.push(P)}let S=document.createElementNS(C,"rect");S.classList.add("iconHover"),S.setAttribute("x",0),S.setAttribute("y",0),S.setAttribute("height",x),S.setAttribute("width",g),n.svg.appendChild(S)}}),n.promise=p,n}static svgButtonPromise(e,t,i=null,s=!1,a=null){if(typeof t=="string"&&(t=document.getElementById(t),!t))return;let l=this;Promise.resolve(ve.getURLContent(e)).then(v=>{t.innerHTML=v;let p=t.getElementsByTagName("svg");if(p.length>0&&(p=p[0],i&&(i=typeof i=="string"?[i]:i,i.forEach(f=>{p.classList.add(f)})),s)){let f=p.getAttribute("xmlns"),m=parseInt(p.getAttribute("height")),C=parseInt(p.getAttribute("width")),x=document.createElementNS(f,"rect");x.setAttribute("x",-1),x.setAttribute("y",-1),x.setAttribute("fill","white"),x.setAttribute("fill-opacity",0),x.setAttribute("height",m+2),x.setAttribute("width",C+2),x.setAttribute("z-index",-1),p.appendChild(x);let g=p.getElementById("state");g&&g.setAttribute("fill-opacity",this.toggleOpacity[0]),a&&(p.onclick=S=>{l.svgCheckClick(S,a)},l.pxlDevice.mobile?(p.ontouchstart=S=>{l.svgStylize(S,!0)},p.ontouchend=S=>{l.svgStylize(S,!1)}):(p.onmouseover=S=>{l.svgStylize(S,!0)},p.onmouseout=S=>{l.svgStylize(S,!1)}))}})}}});var Eo={};U(Eo,{GUIManager:()=>Rt});var Rt,gs=k(()=>{vs();ue();Rt=class{constructor(e,t="Metal-Asylum",i="images/assets/",s="images/GUI/"){this.projectTitle=t,this.verbose=e,this.sW=window.innerWidth,this.sH=window.innerHeight,this.mobile=!1,this.pxlFile=null,this.pxlCookie=null,this.pxlTimer=null,this.pxlAudio=null,this.pxlUtils=null,this.pxlUser=null,this.pxlDevice=null,this.pxlAutoCam=null,this.pxlCamera=null,this.pxlNavCanvas=null,this.pxlQuality=null,this.pxlEnv=null,this.assetRoot=i,this.guiRoot=s,this.introHelpActive=!0,this.branding={title:t,loader:s+".svg",logo:s+".svg",medalion:s+".svg",stack:s+".svg"},this.loaderPhrases=["Loading..."],this.lableBoxSize=40,this.optionWidthRound=10,this.optionWidthAdd=25,this.deviceOptionHeight=[0,300],this.pxlLoader=null,this.pxlLoaderCount=0,this.pxlLoaderTotal=5,this.hudBlock={obj:null,active:!1},this.userControlBlock=null,this.hudVisibility=!0,this.hudIcons={},this.hudElements={},this.guiWindows={},this.msgCount=0,this.hudMedalionBar=null,this.userProfileMessageInput=null,this.userProfileReturnMessage=null,this.userCountObj=null,this.userCountCur=0,this.messageCountObj=null,this.messageCountCur=0,this.chatMessageDisplay=null,this.chatMessageInput=null,this.camChoicesActive=!1,this.micChoicesActive=!1,this.pxlNavData={active:!1,gui:null,height:null,fpsSet:0,fps:null,dl:null,ul:null},this.djPlayerObj=null,this.buildGuiStatus={hud:!1,userTopBar:!1,bottomBar:!1,djPlayer:!1,roomControls:!1,verseList:!1,medalion:!0,loadingBranding:!1},this.requestVerseList=!1,this.verseList=[],this.verseUserCounts={},this.verseTitlePrefix="",this.verseTitleSuffix="'s Room",this.multiverseData={fromVerse:null,toVerse:null,electedVerse:null,mitosisState:!1,mitosisBufferTime:15,mitosisTime:0,mitosisUpdateTime:0},this.textDescriptions={chatIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat',pos:[1,-1.5]},multiverseIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection',pos:[0,-1.3]},djPlayerVolumeParent:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume',pos:[0,-1.5]},speakerIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output',pos:[0,-1.5]},micIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input',pos:[0,-1.5]},camIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input',pos:[0,-1.5]},helpIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions',pos:[0,-1.5]},infoIconParent:{text:'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>',pos:[-1,0],offset:[-10,0]},settingsIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation',pos:[0,-1.5]},muteAllIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users',pos:[1,0]},fullScreenIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen',pos:[-1,0]},videoQualityIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings',pos:[-1,0]},statsIcon:{text:"jitsi connection status; toggle connection ",pos:[1,0]},usersIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools',pos:[1,0]},ft2Button:{text:"Environment",pos:[-1,0],offset:[-10,0]},ft3Button:{text:"Invite Friends",pos:[-1,0],offset:[-10,0]},hud_userCount:{text:"# of People",pos:[-1,0],offset:[-10,0]}},this.loading=!0,this.disclaimer=!1,this.mapPrompt=null,this.mapPromptBG=null,this.delayLoadChatWindow=!1,this.renderSettings=null,this.controlSettings=null,this.shaderEditorDisplay=null,this.radioControls=[],this.controlState=[!0,!1,!1,!1],this.controlToggle=[!0,!0,!1,!1],this.buttonPadding=6,this.toggleOpacity=[.6,1],this.qualityText=["Netbook","Laptop","Desktop Computer","Gamer Rig"],this.activeItem=null,this.jmaWindowVis=!1,this.actionPopUp=null,this.ctaLocalDocURL={},this.ctaContentLoading=!1,this.googleDocHTML=null,this.googleDocURL=""}setDependencies(e){this.pxlFile=e.pxlFile,this.pxlCookie=e.pxlCookie,this.pxlTimer=e.pxlTimer,this.pxlAudio=e.pxlAudio,this.pxlUtils=e.pxlUtils,this.pxlUser=e.pxlUser,this.pxlDevice=e.pxlDevice,this.pxlAutoCam=e.pxlAutoCam,this.pxlCamera=e.pxlCamera,this.pxlNavCanvas=e.pxlNavCanvas,this.pxlQuality=e.pxlQuality,this.pxlEnv=e.pxlEnv,this.mobile=e.mobile,this.renderSettings=this.pxlCookie.readCookie(this.pxlUser.renderSettingsCookie),this.controlSettings=this.pxlCookie.readCookie(this.pxlUser.controlModeCookie),e.pxlDevice.subscribe("resize",this.resize.bind(this))}init(){this.cssBuildClasses(),this.buildConsole()}prepLoader(){this.mapPromptBG=document.createElement("div"),this.mapPromptBG.classList.add("mapPromptBackgroundStyle"),document.body.appendChild(this.mapPromptBG),this.mapPrompt=document.createElement("div"),this.mapPrompt.setAttribute("id","mapPrompt"),this.mapPrompt.classList.add("mapPromptStyle"),this.mapPrompt.classList.add("fader"),this.mapPrompt.classList.add("visOn"),this.mapPrompt.innerHTML=`
            <div id="loaderLogoBranding" class='pxlLoaderLogo'></div>
            <div class='loadStyleParent'>
              <div id='pxlLoader' class='loadStyle'></div>
              <div id='pxlLoaderBackground' class='loadStyleBackground'></div>
            </div>
            <div id="loaderBranding" class='pxlLoaderTitle'>${this.projectTitle}</div>
            <div id="loaderMessage" class='pxlLoaderMessage'></div>
          `,document.body.appendChild(this.mapPrompt);let e=document.getElementById("loaderMessage");if(e){let n=this.loaderPhrases[Math.floor(Math.random()*this.loaderPhrases.length)];e.innerHTML=n}this.buildGuiStatus.loadingBranding&&re.svgPromise(this.branding.loader,"loaderBranding","pxlLoaderTitle","loadBrandingLogo"),this.pxlLoader=document.getElementById("pxlLoader"),this.pxlLoader.style.width="2%";let t=document.createElement("div");t.classList.add("canvasCrashPromptBackgroundStyle"),document.body.appendChild(t);let i=document.createElement("div");i.classList.add("canvasCrashPromptStyle"),t.appendChild(i);let s;this.pxlQuality&&(parseInt(this.pxlQuality.detailLimit)==0?s=`Looks like your computer is having a hard time, but we\u2019ve got your fix.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle}.
          <br>If you\u2019re still having issues, drop us a line in the chat.`:s=`Looks like your computer is still having trouble, but we\u2019ve got another fix for ya.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle} again.
          <br>Again, if you\u2019re still having issues, drop us a line in the chat.`),i.innerHTML=s;let a=document.getElementById("crashLink"),l=this;a&&(a.onclick=n=>{l.crashLinkTrigger(n,l)})}stepLoader(e=""){this.pxlLoaderCount+=1;let t=Math.min(100,this.pxlLoaderCount/(this.pxlLoaderTotal-1)*100);t==100&&(this.pxlLoader.style.borderRadius="5px"),this.pxlLoader.style.width=t+"%",this.verbose>=xe.INFO&&console.log("Loader",this.pxlLoaderCount,this.pxlLoader.style.width,"; "+e)}setLoaderPhrases(e,t=!0){e&&e.length>0&&(t&&(this.loaderPhrases=[]),this.loaderPhrases=this.loaderPhrases.concat(e),this.setLoaderObjMessage())}setLoaderObjMessage(){let e=document.getElementById("loaderMessage");if(e){let t=Math.floor(Math.random()*17391.537193*this.loaderPhrases.length%this.loaderPhrases.length),i=this.loaderPhrases[t];e.innerHTML=i}}booted(){this.buildHudBlock(),this.buildTopBar(),this.buildBottomBar(),this.buildGuiWindowContainer(),this.buildUserControlBlock(),this.buildRawHtml(),this.prepPageDisplay()}step(){this.updateGuiPositions(),this.pxlUser?.checkItemWearOff(this.pxlTimer.prevMS)&&this.hideItemHud(),this.pxlNavDataUpdate()}resize(){this.sW=window.innerWidth,this.sH=window.innerHeight,this.resetHelpTextPlacement(),["videoinput","audioinput","audiooutput"].forEach(t=>{let i=null,s=null;t=="videoinput"?(i="camChoiceOptionsBlock",s=this.hudIcons.camChoiceIcon):t=="audioinput"?(i="micChoiceOptionsBlock",s=this.hudIcons.micChoiceIcon):t=="audiooutput"&&(i="speakerChoiceOptionsBlock",s=this.hudIcons.speakerChoiceIcon);let a=document.getElementById(i);if(a&&s){let l=a.getBoundingClientRect().width,n=s.parent.getBoundingClientRect();a.style.left=n.x-l*.5,a.style.bottom=this.sH-this.hudBottomBar.getBoundingClientRect().y}}),this.setUserControlPosition(),this.inviteUserPosition(),this.setArtistInfoSizing()}resetHelpTextPlacement(){Object.keys(this.textDescriptions).forEach(t=>{let i=this.textDescriptions[t];if(i){let s=document.getElementById("helpText_"+t);if(!s)return;let a=document.getElementById(t);if(a){let l=2,n=i.pos,v=i.offset?i.offset:[0,0],p=a.getBoundingClientRect(),f=s.getBoundingClientRect(),m=0,C=0,x=!1;n[1]<0?(C=p.y+f.height*n[1],x=!0):n[1]==0?C=p.y+p.height*.5-f.height*.5:n[1]>0&&(C=p.y+p.height+f.height*(n[1]-1),x=!0),x?n[0]<0?m=p.x+p.width+f.width*n[0]:n[0]==0?m=p.x+p.width*.5-f.width*.5:n[0]>0&&(m=p.x+p.width*(n[0]-1)):n[0]<0?m=p.x+f.width*n[0]:n[0]==0?m=p.x+p.width*.5-f.width*.5:n[0]>0&&(m=p.x+p.width*2*n[0]),m=m+v[0],m+f.width>this.sW-l?m=this.sW-l-f.width:m<l&&(m=l),C=C+v[1],s.style.left=m,s.style.top=C}else s.style.display="none"}})}crashLinkTrigger(e,t){let i=location.search.match(/[a-zA-Z0-9=]+/g),s="?";i.forEach(a=>{let l=a.split("=");l[0]=="dlimit"?s+=l[0]+"="+(parseInt(l[1])+1)+"&":s+=a+"&"}),location.search=s}guiToggleVisibility(e=null){if(e=e??!this.hudVisibility,this.hudVisibility=e,this.hudTopBar&&!this.hudTopBar.origDisplay&&(this.hudTopBar.origDisplay=this.hudTopBar.style.display),this.fastTravelBar&&!this.fastTravelBar.origDisplay&&(this.fastTravelBar.origDisplay=this.fastTravelBar.style.display),this.hudBottomBar&&!this.hudBottomBar.origDisplay&&(this.hudBottomBar.origDisplay=this.hudBottomBar.style.display),e){if(this.hudTopBar&&this.hudTopBar.removeAttribute("style"),this.fastTravelBar&&this.fastTravelBar.removeAttribute("style"),this.hudBottomBar&&this.hudBottomBar.removeAttribute("style"),this.userControlBlock){let t=this.userControlBlock.gui.style.top;this.userControlBlock.gui.removeAttribute("style"),this.userControlBlock.gui.style.top=t}}else this.hudTopBar&&(this.hudTopBar.style.display="none"),this.fastTravelBar&&(this.fastTravelBar.style.display="none"),this.hudBottomBar&&(this.hudBottomBar.style.display="none"),this.userControlBlock&&(this.userControlBlock.gui.style.display="none");this.hudElements.artistInfo&&(this.hudElements.artistInfo.parent.style.display=e?"grid":"none")}cssBuildClasses(){let e=document.createElement("style");e.type="text/css",e.innerHTML=`
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
		`,document.getElementsByTagName("head")[0].appendChild(e)}prepPromptFader(e,t=!1){let i=e;typeof i=="string"&&(i=document.getElementById(i),!i)||(i.classList.add("fader"),i.classList.add(t?"visOn":"visOff"),i.style.display=t?"inline-block":"none")}promptFader(e,t,i=null,s=!1){typeof e=="string"&&(e=document.getElementById(e),!e)||(e.classList.value.indexOf("fader")<0&&e.classList.add("fader"),t?(e.style.display="inline-block",setTimeout(()=>{e.classList.contains("visOff")&&(e.classList.remove("visOff"),e.classList.add("visOn"),i!=null&&(e.setAttribute("fadeOut",clockTime+i*1e3),fadeOutList.push(e)))},50)):(e.classList.remove("visOn"),e.classList.add("visOff"),s?["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"].forEach(l=>{e.addEventListener(l,()=>{let n=e.parentNode;n&&n.removeChild(e)})}):setTimeout(()=>{e.classList.contains("visOff")&&(e.style.display="none")},1e3)))}buildConsole(){let e=document.createElement("div");e.id="consoleBlock",e.classList.add("consoleBlockStyle"),document.body.appendChild(e),this.guiWindows.consoleBlock={active:!1,gui:e}}buildMessageBlock(e,t="Info"){let i=document.createElement("div");this.msgCount++,i.id="messageBlock-"+this.msgCount,i.classList.add("messageBlockStyle"),i.classList.add("message"+t);let s=this,a=document.createElement("div");a.classList.add("messageCloseBtn"),a.innerHTML="X",a.addEventListener("click",function(){s.removeMessage(i)});let l=document.createElement("div");l.classList.add("messageTopBarStyle");let n=document.createElement("div");n.classList.add("messageHeaderStyle"),n.innerHTML=t,l.appendChild(n),l.appendChild(a),i.appendChild(l);let v=document.createElement("div");return v.classList.add("messageContentStyle"),v.innerHTML=e,i.appendChild(v),i}print(e){this.guiWindows.consoleBlock||this.buildConsole(),this.guiWindows.consoleBlock.active||(this.guiWindows.consoleBlock.active=!0,this.promptFader(this.guiWindows.consoleBlock.gui,!0));let t=this.guiWindows.consoleBlock.gui,i=this.buildMessageBlock(e);t.appendChild(i)}buildHudBlock(){if(!this.buildGuiStatus.hud)return;let e=document.createElement("div");e.id="hudBlock",e.classList.add("hudBlockStyle"),this.hudBlock.obj=e,document.body.appendChild(this.hudBlock.obj),this.hudBlock.obj.style.display="none";let t=this;this.hudBlock.obj.addEventListener("click",i=>{t.toggleHudBlock(!1,!0)})}toggleHudBlock(e=null,t=!1){if(!this.hudBlock)return;e=e??!this.hudBlock.active,this.hudBlock.active=e;let i=!1;e?i="inline-block":this.checkOpenWindows(t)||(i="none",this.pxlNavCanvas&&this.pxlNavCanvas.focus()),this.hudBlock.obj&&this.hudBlock.obj.style&&i!=!1&&(this.hudBlock.obj.style.display=i)}checkOpenWindows(e=!1){let t=Object.keys(this.guiWindows),i=!1;return t.forEach(s=>{s!="chatBoxGui"&&(e&&(this.guiWindows[s].button&&this.flipIcon(this.guiWindows[s].button,!1),this.guiWindows[s].gui&&this.guiWindows[s].active&&(this.guiWindows[s].active=!1,this.promptFader(this.guiWindows[s].gui,!1),s=="settingsGui"&&this.togglePxlNavDataDisplay(!1))),i=i||this.guiWindows[s].active)}),i}checkFocus(e=null,t=null){t===!0&&this.guiWindows.inviteUserGui&&this.guiWindows.inviteUserGui.active&&this.toggleInviteUser(!1)}buildRawHtml(){}buildTopBar(){if(this.mobile||!this.buildGuiStatus.userTopBar)return;let e=document.createElement("div");e.id="hud_topBar",e.classList.add("hud_topBarBlockStyle"),this.hudTopBar=e,document.body.appendChild(this.hudTopBar);let t="";t='<div id="statsIcon"></div>',t+=`</div>
		<div id="usersIconParent">
			<div id="usersIcon"></div>`;let i;i=`
			<div id="hud_localVideoStyle" class="hud_localVideoStyle"></div>
			<div id="hud_topBarParent" class="hud_topBarParentStyle">
		<div id="statsIconParent">
			${t}
		</div>
		<div  class="hud_topBarVSpacerStyle"></div>
			</div>
		`,e.innerHTML=i,this.hudIcons.statsIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_stats.svg`,"statsIcon","stats"),this.hudIcons.statsIcon.promise.finally(()=>{}),this.hudIcons.usersIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_user.svg`,"usersIcon","users");let s=document.createElement("div");s.id="hud_pxlNavData",s.classList.add("hud_pxlNavDataParentStyle"),e.appendChild(s),this.pxlNavData.gui=s;let a=document.createElement("div");a.id="hud_pxlNavData",a.classList.add("hud_pxlNavDataStyle"),s.appendChild(a),i=`
      <div class="hud_pxlNavData_FPS gui_boldText">FPS</div><div class="hud_pxlNavData_FPS">:</div><div id="hud_pxlFPS" class="hud_pxlNavData_FPS"> - </div>
      <div class="hud_pxlNavData_UL gui_boldText">\u2191</div><div class="hud_pxlNavData_UL">:</div><div id="hud_pxlUL" class="hud_pxlNavData_UL"> - </div>
      <div class="hud_pxlNavData_DL gui_boldText">\u2193</div><div class="hud_pxlNavData_DL">:</div><div id="hud_pxlDL" class="hud_pxlNavData_DL"> - </div>
    `,a.innerHTML=i,this.pxlNavData.fps=document.getElementById("hud_pxlFPS"),this.pxlNavData.ul=document.getElementById("hud_pxlUL"),this.pxlNavData.dl=document.getElementById("hud_pxlDL")}buildUserControlBlock(){this.userControlBlock={},this.userControlBlock.activeList=[],this.userControlBlock.userList={},this.userControlBlock.mutedList=[];let e=document.createElement("div");e.classList.add("userControlBlockStyle"),document.body.appendChild(e),this.userControlBlock.gui=e,this.userControlBlock.speakerIcon=null}buildMedalionBar(){if(this.buildGuiStatus.medalion){let e=document.createElement("div");e.id="hud_medalionBar",e.classList.add("hud_medalionIconBlockStyle"),this.hudMedalionBar=e,document.body.appendChild(this.hudMedalionBar);let t=`
        <div id="medalionIconParent" class="hud_speakerIconStyle">
          <div id="medalionIcon"></div>
        </div>
        <div id="medalionTitle" class="medalionTitleStyle">${this.branding.title}</div>
      `;this.hudMedalionBar.innerHTML=t;let i=document.getElementById("medalionIcon"),s=document.getElementById("medalionTitle");i.addEventListener("mouseover",()=>{s.classList.add("medalionTitleGrowStyle")}),i.addEventListener("mouseout",()=>{s.classList.remove("medalionTitleGrowStyle")}),this.hudIcons.medalionIcon=re.svgIconPromise(this.branding.medalion,"medalionIcon","info",null,"medalionStyle")}}buildBottomBar(){if(!this.buildGuiStatus.bottomBar)return;let e=document.createElement("div");e.id="hud_bottomBar",e.classList.add("hud_bottomBarStyle"),this.hudBottomBar=e,document.body.appendChild(this.hudBottomBar);let t="";if(t+=`
    <div id="hud_chatIconBlock" class="hud_bottomLeftBlockStyle">
        <div id="settingsIconParent" class="hud_settingsIconStyle">
          <object id="settingsIcon"></object>
        </div>
  <div></div>
        <div id="helpIconParent" class="hud_helpIconStyle">
          <object id="helpIcon"></object>
        </div>
        `,!this.mobile&&this.buildGuiStatus.verseList&&(t+=`<div class="hud_usersIconStyle">
            <div id="multiverseIcon"></div>
          </div>
          <div></div>`),t+="</div>",this.mobile||(t+=`
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
      `),this.hudBottomBar.innerHTML=t,this.messageCountObj=document.getElementById("hud_messageCount"),this.hudIcons.chatIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_chat.svg`,"chatIcon","chat"),!this.mobile&&!this.pxlAutoCam.enabled){this.hudIcons.multiverseIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_multiverse.svg`,"multiverseIcon","multiverse"),this.hudIcons.speakerIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_ProxAudio.svg`,"speakerIcon","speakerToggle",!1),this.hudIcons.speakerChoiceIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"speakerChoiceIcon","speakerChoice",!1,"iconCaretStyle"),this.hudIcons.micIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_mic.svg`,"micIcon","micToggle",!1),this.hudIcons.micChoiceIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"micChoiceIcon","micChoice",!1,"iconCaretStyle"),this.hudIcons.camIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_camera.svg`,"camIcon","camToggle",!1),this.hudIcons.camChoiceIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_downcaret.svg`,"camChoiceIcon","camChoice",!1,"iconCaretStyle"),this.hudIcons.helpIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_help.svg`,"helpIcon","help"),this.hudIcons.settingsIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_settings.svg`,"settingsIcon","settings");let i=document.getElementById("guiVerseTitle"),s=this}else{let i=document.getElementById("hud_chatIconBlock");i.style.gridAutoColumns="max-content max-content auto max-content",i.style.margin="0px 10px"}}prepArtistInfo(e=null){if(!(!this.pxlEnv?.postIntro||e=="")){if(!this.hudElements.artistInfo){this.hudElements.artistInfo={},this.hudElements.artistInfo.active=!1;let t=document.createElement("div");t.classList.add("hud_aristInfoParentStyle"),this.hudElements.artistInfo.parent=t;let i=document.createElement("div");i.classList.add("hud_aristInfoButtonStyle"),t.appendChild(i);let s=this;i.onclick=()=>{s.toggleArtistInfo()},this.hudElements.artistInfo.button=i;let a=document.createElement("div");a.classList.add("hud_aristInfoButtonTextStyle"),a.innerHTML="artwork info&nbsp;&nbsp;",i.appendChild(a),this.hudElements.artistInfo.buttonText=a;let l=document.createElement("div");l.classList.add("hud_aristInfoCarrotXStyle"),l.id="artistInfoCarrotX",i.appendChild(l);let n=document.createElement("div");n.classList.add("hud_aristInfoInner"),n.innerHTML=e,t.appendChild(n),this.hudElements.artistInfo.inner=n,document.body.appendChild(t),this.hudElements.artistInfo.closeSvg=re.svgPromise(`${this.guiRoot}global/carrotCloseAnimate.svg`,"artistInfoCarrotX"),this.hudElements.artistInfo.closeSvg.promise.finally(()=>{this.artistInfoButtonPrep()})}this.toggleArtistInfo(!1),e!=null&&this.hudVisibility&&!this.pxlAutoCam.active?(this.hudElements.artistInfo.parent.style.zIndex=155,this.hudElements.artistInfo.parent.style.display="grid",this.hudElements.artistInfo.inner.innerHTML=e,setTimeout(()=>{this.setArtistInfoSizing()},20)):(this.hudElements.artistInfo.parent.style.zIndex=-5,this.hudElements.artistInfo.parent.style.display="none")}}artistInfoButtonPrep(e=0){let t=this.hudElements.artistInfo.closeSvg.svg;if(t){let i=t.getElementById("carrotToClone_on"),s=t.getElementById("carrotToClone_off");i&&s?(this.hudElements.artistInfo.onAnim=i,this.hudElements.artistInfo.offAnim=s):e==2||setTimeout(()=>{this.artistInfoButtonPrep(e+=1)},100)}}setArtistInfoSizing(){if(this.hudElements.artistInfo){let e=this.hudElements.artistInfo.inner.clientHeight,t=this.hudElements.artistInfo.inner.clientWidth,i=this.hudElements.artistInfo.button.clientHeight,s=this.hudElements.artistInfo.button.clientWidth;this.hudElements.artistInfo.innerHeight=e,this.hudElements.artistInfo.innerWidth=t,this.hudElements.artistInfo.baseHeight=i,this.hudElements.artistInfo.baseWidth=s,this.hudElements.artistInfo.parent.style.height=e+"px",this.hudElements.artistInfo.parent.style.width=t+"px";let a=this.hudElements.artistInfo.buttonText.clientWidth;this.hudElements.artistInfo.buttonText.maxWidth=a,this.hudElements.artistInfo.buttonText.style.maxWidth=a+"px",this.toggleArtistInfo(this.hudElements.artistInfo.active)}}toggleArtistInfo(e=null){e=e??!this.hudElements.artistInfo.active,this.hudElements.artistInfo.active=e;let t=this.hudElements.artistInfo.innerHeight,i=Math.min(this.pxlDevice.sW*.3,this.hudElements.artistInfo.innerWidth),s=this.hudElements.artistInfo.baseHeight,a=this.hudElements.artistInfo.baseWidth;this.hudElements.artistInfo.parent.style.maxHeight=e?t+"px":s+"px",this.hudElements.artistInfo.parent.style.maxWidth=e?i+"px":a+"px",this.hudElements.artistInfo.parent.style.padding=e?"5px":"0px";let l=this.hudElements.artistInfo.buttonText.maxWidth;this.hudElements.artistInfo.buttonText.style.maxWidth=e?"0px":l+"px",this.hudElements.artistInfo.buttonText.style.opacity=e?"0":"1",this.hudElements.artistInfo.buttonText.style.filter="alpha(opacity="+(e?"0":"1000")+")",this.hudElements.artistInfo.inner.style.opacity=e?"1":"0",this.hudElements.artistInfo.inner.style.filter="alpha(opacity="+(e?"100":"0")+")",this.hudElements.artistInfo.onAnim&&(e?this.hudElements.artistInfo.onAnim.beginElement():this.hudElements.artistInfo.offAnim.beginElement())}prepPageDisplay(e=null){if(!(!this.pxlEnv?.postIntro||e=="")){if(!this.hudElements.artistInfo){this.hudElements.artistInfo={},this.hudElements.artistInfo.active=!1;let t=document.createElement("div");t.classList.add("hud_aristInfoParentStyle"),this.hudElements.artistInfo.parent=t;let i=document.createElement("div");i.classList.add("hud_aristInfoButtonStyle"),t.appendChild(i);let s=this;i.onclick=()=>{s.togglePageDisplay()},this.hudElements.artistInfo.button=i;let a=document.createElement("div");a.classList.add("hud_aristInfoButtonTextStyle"),a.innerHTML="artwork info&nbsp;&nbsp;",i.appendChild(a),this.hudElements.artistInfo.buttonText=a;let l=document.createElement("div");l.classList.add("hud_aristInfoCarrotXStyle"),l.id="artistInfoCarrotX",i.appendChild(l);let n=document.createElement("div");n.classList.add("hud_aristInfoInner"),n.innerHTML=e,t.appendChild(n),this.hudElements.artistInfo.inner=n,document.body.appendChild(t)}this.togglePageDisplay(!1),e!=null&&this.hudVisibility&&!this.pxlAutoCam.active?(this.hudElements.artistInfo.parent.style.zIndex=155,this.hudElements.artistInfo.parent.style.display="grid",this.hudElements.artistInfo.inner.innerHTML=e,setTimeout(()=>{this.setArtistInfoSizing()},20)):(this.hudElements.artistInfo.parent.style.zIndex=-5,this.hudElements.artistInfo.parent.style.display="none")}}setPageToDisplay(){if(this.hudElements.artistInfo){let e=this.hudElements.artistInfo.inner.clientHeight,t=this.hudElements.artistInfo.inner.clientWidth,i=this.hudElements.artistInfo.button.clientHeight,s=this.hudElements.artistInfo.button.clientWidth;this.hudElements.artistInfo.innerHeight=e,this.hudElements.artistInfo.innerWidth=t,this.hudElements.artistInfo.baseHeight=i,this.hudElements.artistInfo.baseWidth=s,this.hudElements.artistInfo.parent.style.height=e+"px",this.hudElements.artistInfo.parent.style.width=t+"px";let a=this.hudElements.artistInfo.buttonText.clientWidth;this.hudElements.artistInfo.buttonText.maxWidth=a,this.hudElements.artistInfo.buttonText.style.maxWidth=a+"px",this.toggleArtistInfo(this.hudElements.artistInfo.active)}}togglePageDisplay(e=null){if(this.hudElements.artistInfo){e=e??!this.hudElements.artistInfo.active,this.hudElements?.artistInfo&&(this.hudElements.artistInfo.active=e);let t=this.hudElements.artistInfo.innerHeight,i=Math.min(this.pxlDevice.sW*.3,this.hudElements.artistInfo.innerWidth),s=this.hudElements.artistInfo.baseHeight,a=this.hudElements.artistInfo.baseWidth;this.hudElements.artistInfo.parent.style.maxHeight=e?t+"px":s+"px",this.hudElements.artistInfo.parent.style.maxWidth=e?i+"px":a+"px",this.hudElements.artistInfo.parent.style.padding=e?"5px":"0px";let l=this.hudElements.artistInfo.buttonText.maxWidth;this.hudElements.artistInfo.buttonText.style.maxWidth=e?"0px":l+"px",this.hudElements.artistInfo.buttonText.style.opacity=e?"0":"1",this.hudElements.artistInfo.buttonText.style.filter="alpha(opacity="+(e?"0":"1000")+")",this.hudElements.artistInfo.inner.style.opacity=e?"1":"0",this.hudElements.artistInfo.inner.style.filter="alpha(opacity="+(e?"100":"0")+")",this.hudElements.artistInfo.onAnim&&(e?this.hudElements.artistInfo.onAnim.beginElement():this.hudElements.artistInfo.offAnim.beginElement())}}iconEvent(e,t,i=null){if(this.hudBlock.obj&&(this.hudBlock.obj.style.display="none"),e=="click"){if(i=="chat"){this.toggleChatBox();return}else if(i=="musicToggle"){this.pxlAudio.djPlayerMuteToggle(),this.toggleIcon(t,!this.pxlAudio.djMuted,!0);return}else if(i=="userSpeakerToggle"){this.setUserControls(t);return}else if(i=="speakerToggle"){this.toggleIcon(t,!1,!0);return}else if(i=="speakerChoice"){let s="audiooutput";this.flipIcon(t,this.guiWindows[s]&&this.guiWindows[s].active);return}else if(i=="help"){let s=this.guiWindows.helpGui?this.guiWindows.helpGui.active:!1;this.checkOpenWindows(!0),this.helpGuiToggle(!s);return}else if(i=="info"){let s=this.guiWindows.infoGui?this.guiWindows.infoGui.active:!1;this.checkOpenWindows(!0),this.infoGuiToggle(!s);return}else if(i=="settings"){let s=this.guiWindows.settingsGui?this.guiWindows.settingsGui.active:!1;this.checkOpenWindows(!0),this.settingsGuiToggle(!s);return}else if(i=="userProfile"){this.toggleUserProfile();return}else if(i!="users"){if(i=="stats")return}}}setMicVolumeLevel(e){this.hudIcons.micIcon.volumeMask||(this.hudIcons.micIcon.volumeMask=document.getElementById("gui_micVolumeMask"),this.hudIcons.micIcon.timer=this.pxlTimer.msRunner.x-1);let t=12-e*11;this.hudIcons.micIcon.volumeMask.setAttribute("y",t)}toggleIcon(e,t,i=!1){if(e){if(e.mute.style.filter=t?"alpha(opacity=0)":"alpha(opacity=100)",e.mute.style.opacity=t?"0":"1",e.mute.style.transform=t?"scale(0,0)":"scale(1,1)",["camToggle","speakerToggle"].includes(e.eventType))return;let a={speakerToggle:"speaker",micToggle:"audio",camToggle:"video"}[e.eventType];a&&i&&this.loadingDeviceChange(a,t)}}flipIcon(e,t){e.caret.style.transform=`rotate( ${t?"180deg":"0deg"} )`}loadingDeviceChange(e,t=!0){let i=null;e=="speaker"?i=this.hudIcons.speakerIcon:e=="audio"?i=this.hudIcons.micIcon:e=="video"&&(i=this.hudIcons.camIcon),i.indicator.style.display=t?"inline-block":"none",i.indicator.style.animationPlayState=t?"running":"paused",i.waiting.forEach(s=>{s.setAttribute("fill-opacity",t?".5":"1")}),t&&setTimeout(()=>{this.loadingDeviceChange(e,!1)},1e3)}djBuildPlayer(){if(this.buildGuiStatus.djPlayer){this.djPlayerObj=document.createElement("div"),this.djPlayerObj.id="djPlayer";let e=`
          <audio id="djStream" playsinline muted>
            <source src="`+this.pxlAudio.djUrlSource+`"></source>
          </audio>
          <table cellpadding=0 cellspacing=5 border=0 style="height:100%;"><tbody><tr>
              <td align="left">
                  <div id="djPlayerVol"></div>
              <  d><td valign="center" align="left" width=100%>
                  <div id="djPlayerVolumeParent" class="volParent"><div id="djPlayerVolume" class="volSlider"></div></div>
              <  d><  r>
          <  body><  able>`;this.djPlayerObj.innerHTML=e,document.getElementById("musicControllerBlock").appendChild(this.djPlayerObj),this.hudIcons.musicIcon=re.svgIconPromise(`${this.guiRoot}icons/icon_music.svg`,"djPlayerVol","musicToggle",!this.pxlAudio.djMuted),this.pxlAudio.djBuildPlayer()}}buildItemHud(e,t){this.activeItem.innerHTML=t,this.activeItem.style.opacity="1",this.activeItem.style.filter="alpha(opacity=100)",this.activeItem.style.textShadow="1px 1px 3px #000000",setTimeout(()=>{this.activeItem.style.fontSize="1.5em",this.activeItem.style.top=".5%",this.activeItem.style.right="140px",this.activeItem.style.transform="translateX(0%)"},1500)}hideItemHud(){this.activeItem.innerHTML="",this.activeItem.style.fontSize="3em",this.activeItem.style.top="10%",this.activeItem.style.right="50%",this.activeItem.style.transform="translateX(50%)",this.activeItem.style.opacity="0",this.activeItem.style.filter="alpha(opacity=0)"}mapPrepPrompts(){this.activeItem=document.createElement("div"),this.activeItem.classList.add("activeItemStyle"),document.body.appendChild(this.activeItem)}updateGuiPositions(){if(this.loading){let e=this.radioControls.length,t=!1;for(let i=0;i<e;++i){if(!this.radioControls[i][3]){t=!0;break}let s=this.radioControls[i][0],l=this.radioControls[i][2].getBoundingClientRect(),n=l.width+this.buttonPadding*2,v=l.height+this.buttonPadding*2,p=l.top-this.buttonPadding,f=l.left-this.buttonPadding;s.style.width=n,s.style.height=v,s.style.top=p,s.style.left=f,this.radioControls[i][1].style.width=n,this.radioControls[i][1].style.height=v,this.radioControls[i][1].style.top=p,this.radioControls[i][1].style.left=f}this.loading=t}}togglGuiWindow(e=null,t=!1){e=="helpGui"?this.helpGuiToggle(t,!1):e=="infoGui"?this.infoGuiToggle(t,!1):e=="settingsGui"&&this.settingsGuiToggle(t,!1)}svgCheckClick(e=null,t=null){if(t)if(t=="close"){this.toggleGuiWindowContainer(null,!1,!0);return}else{if(t=="ft1")return;if(t=="ft2")return;if(t=="ft3"){this.toggleInviteUser();return}else{if(t=="ft4")return;if(t=="ft5"){this.pxlAutoCam.toggleAutoCam();return}}}}svgStylize(e=null,t=!1){if(!e)return;let i=e.path?e.path[1]:e.target.parentNode,s=i.getElementById("state");if(s){let l=t?"white":"none";s.setAttribute("fill",l)}let a=i.getElementById("hover");a&&a.setAttribute("fill",color)}renderQualitySettings(e){this.pxlQuality.percent=e,this.pxlQuality.screenResPerc=e*.75+.25,this.pxlQuality.mapAutoQualityUpdate(e,!0),this.pxlDevice.resizeRenderResolution()}pxlNavDataUpdate(){this.pxlNavData.active&&this.pxlTimer.msRunner.x>this.pxlNavData.fpsSet&&(this.pxlNavData.fpsSet=this.pxlTimer.msRunner.x+1,this.pxlNavData.fps.innerText=parseInt(1/this.pxlTimer.msRunner.y))}buildGuiWindowContainer(){let e=document.createElement("div");e.classList.id="guiWindowBackground",e.classList.add("guiWindowBackground"),e.classList.add("fader"),e.classList.add("visOff"),e.style.display="none";let t=this;e.onclick=i=>{t.toggleGuiWindowContainer(i,!1,!0)},this.guiWindowBG=e,document.body.appendChild(e)}toggleGuiWindowContainer(e,t,i=!1){if(e){let l=(e.path?e.path[0]:e.target).getAttribute("id");if(l!="guiWindowBackground"&&!["gui_helpGuiWindow","gui_helpContent","gui_infoGuiWindow","gui_infoContent","gui_settingsGuiWindow","gui_settingsContent"].includes(l))return null}let s=this.checkOpenWindows(i);this.guiWindowBG&&s==t&&this.promptFader(this.guiWindowBG,t,null,!1),t?this.pxlNavCanvas.blur():this.pxlNavCanvas.focus()}helpGuiBuild(){this.guiWindows.helpGui={},this.guiWindows.helpGui.gui=null,this.guiWindows.helpGui.active=!1;let e=document.createElement("div");e.id="gui_helpGuiWindow",e.classList.add("gui_helpGuiParentStyle"),this.prepPromptFader(e),this.guiWindowBG.appendChild(e);let t="";t+=`
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
  `,e.innerHTML=t,[[this.guiRoot+"keyboard/asdw.svg","gui_helpGui_asdw","guiKeyDispSVG",!1],[this.guiRoot+"keyboard/udlr.svg","gui_helpGui_udlr","guiKeyDispSVG",!1],[this.guiRoot+"mouse/MouseOutlined.svg","gui_helpGui_MouseOutlined","guiMouseDispSVG",!1]].forEach(v=>{re.svgButtonPromise(...v)});let s=this,a=document.getElementById("guiHelpBackButton");a.onclick=v=>{s.introHelpActive&&(s.introHelpActive=!1,s.pxlEnv.postHelpIntro()),s.svgCheckClick(v,"close")},Object.keys(this.textDescriptions).forEach(v=>{let p=this.textDescriptions[v];if(p){let f=p.text,m=p.pos,C=document.createElement("div");C.id="helpText_"+v,C.classList.add("helpTextDescriptionParent"),C.innerHTML=f,e.appendChild(C),this.textDescriptions[v].obj=C}});let n=document.getElementById("gui_helpGui_settingIcon");n&&this.hudIcons.settingsIcon&&(n.innerHTML=this.hudIcons.settingsIcon.svg.parentNode.innerHTML,n.style.position="relative",n.style.top="7.3px",n.style.width="30px",n.style.padding="2px",n.style.cursor="pointer",n.children[0].style.height="26px",n.onclick=()=>{s.iconEvent("click",null,"settings")}),this.guiWindows.helpGui.gui=e,setTimeout(()=>{this.resize()},50)}helpGuiToggle(e=null,t=!0){this.guiWindows.helpGui||this.helpGuiBuild(),e=e??!this.guiWindows.helpGui.active,this.guiWindows.helpGui.active=e,this.promptFader(this.guiWindows.helpGui.gui,e),this.toggleGuiWindowContainer(null,e),this.hudBlock.active&&this.toggleHudBlock(e),this.introHelpActive&&!e&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro()),setTimeout(()=>{this.resetHelpTextPlacement()},20)}infoGuiBuild(){this.guiWindows.infoGui={},this.guiWindows.infoGui.gui=null,this.guiWindows.infoGui.active=!1;let e=document.createElement("div");e.id="gui_infoGuiWindow",e.classList.add("gui_infoGuiParentStyle"),this.prepPromptFader(e),this.guiWindowBG.appendChild(e);let t="";t+=`
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
  `,e.innerHTML=t;let i=this,s=document.getElementById("guiInfoBackButton");s.onclick=a=>{i.svgCheckClick(a,"close")},this.guiWindows.infoGui.gui=e}infoGuiToggle(e=null,t=!0){this.guiWindows.infoGui||this.infoGuiBuild(),e=e??!this.guiWindows.infoGui.active,this.guiWindows.infoGui.active=e,this.promptFader(this.guiWindows.infoGui.gui,e),this.toggleGuiWindowContainer(null,e),this.hudBlock.active&&this.toggleHudBlock(e),this.introHelpActive&&!e&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro())}applyCookies(){this.controlSettings&&(console.log(this.controlSettings),this.controlSettings=this.controlSettings),this.renderSettings&&(console.log(this.renderSettings),this.renderSettings=this.renderSettings)}settingsGuiBuild(){this.guiWindows.settingsGui={},this.guiWindows.settingsGui.gui=null,this.guiWindows.settingsGui.active=!1;let e=document.createElement("div");e.id="gui_settingsGuiWindow",e.classList.add("gui_settingsGuiParentStyle"),this.prepPromptFader(e),this.guiWindowBG.appendChild(e);let t="Default";t=t||"";let i=`
    <div id="gui_settingsContent" class="gui_contentSettingsStyle">
  <div class="gui_settingsBody">
    <div class="gui_settingsParentGrid">
      <!-- -- Username -- -- -->
    <div class="cellMargin settings_icon" id="settings_user"></div>
    <div class="settings_optionHeader">Username</div>
    <div class="settings_radio" style="grid-auto-flow: row; justify-content: start;">
                    <div id="guiuserProfileBoxFieldParent" class="gui_userProfileBoxFieldParentStyle">
                      <input type="text" placeholder="Set your username" value="${t}" id="settings_usernameInput" class="settings_usernameInput"></input>
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
  `;e.innerHTML=i,this.guiWindows.settingsGui.gui=e;let s=this;this.qualitySlider=document.getElementById("SettingsGraphicsQualitySlider");let a=document.getElementById("guiSettingsBackButton");a.onclick=C=>{s.svgCheckClick(C,"close")},[[this.guiRoot+"settingsIcons/settings_user.svg","settings_user",["settings_icon_scale"],!1],[this.guiRoot+"settingsIcons/settings_left_right.svg","settings_left_right",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_mouse.svg","settings_mouse",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_graphics.svg","settings_graphics",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_render.svg","settings_render",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_fog.svg","settings_fog",["settings_icon"],!1],[this.guiRoot+"settingsIcons/settings_bloom.svg","settings_bloom",["settingsIconStyle"],!1]].forEach(C=>{re.svgButtonPromise(...C)});let n=document.getElementById("settings_usernameInput");n.onkeyup=C=>{s.keyUsernameSet(C)},n.onkeydown=C=>{s.keyDownUsernameSet(C)},this.guiWindows.settingsGui.usernameInput=n,document.getElementById("settings_sendUsername").addEventListener("click",()=>{s.sendUsernameUpdate(n)});let p=document.getElementById("settings_usernameResponseMessage");this.guiWindows.settingsGui.usernameReturn=p;let f,m;this.guiWindows.settingsGui.advObj=document.getElementById("gui_advancedSettings"),this.guiWindows.settingsGui.customObj=document.getElementById("settings_graphicsQuality_custom"),f=["settings_graphicsQuality_low","settings_graphicsQuality_med","settings_graphicsQuality_high","settings_graphicsQuality_custom"],m=f.length;for(let C=0;C<m;++C){let x=f[C],g=document.getElementById(x);this.setRadioStyle(g,C,m);let S=parseInt(g.value);g.addEventListener("change",b=>{s.pxlQuality.setQualityLevel(S),s.setRadioValues()})}f=["settings_render_25","settings_render_50","settings_render_75","settings_render_100"],m=f.length;for(let C=0;C<m;++C){let x=f[C],g=document.getElementById(x);this.setRadioStyle(g,C,m);let S=parseFloat(g.value);g.addEventListener("change",b=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({resolution:S}),s.pxlQuality.setQualityCookie(3)})}f=["settings_noRedFog","settings_cheapResFog","settings_highResFog"],m=f.length;for(let C=0;C<m;++C){let x=f[C],g=document.getElementById(x);this.setRadioStyle(g,C,m);let S=g.value;g.addEventListener("change",b=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({fog:S}),s.pxlQuality.setQualityCookie(3)})}f=["settings_noBloom","settings_bloomActive"],m=f.length;for(let C=0;C<m;++C){let x=f[C],g=document.getElementById(x);this.setRadioStyle(g,C,m);let S=g.value==1;g.addEventListener("change",b=>{s.guiWindows.settingsGui.customObj.checked=!0,s.pxlQuality.setGraphicsSettings({bloom:S}),s.pxlQuality.setQualityCookie(3)})}f=["settings_tankTurning","settings_strafing"],m=f.length;for(let C=0;C<m;++C){let x=f[C],g=document.getElementById(x);this.setRadioStyle(g,C,m);let S=g.value==1;g.addEventListener("change",b=>{s.pxlQuality.setGraphicsSettings({leftRight:S},null)})}f=["settings_dragLooking","settings_pointLooking"],m=f.length;for(let C=0;C<m;++C){let x=f[C],g=document.getElementById(x);this.setRadioStyle(g,C,m);let S=g.value==1;g.addEventListener("change",b=>{s.pxlQuality.setGraphicsSettings({mouse:S},null)})}this.setRadioValues()}setRadioStyle(e,t,i){let s="settings_radio_label_mid";t==0?s="settings_radio_label_start":t==i-1&&(s="settings_radio_label_end"),e.parentNode.children[1].classList.add(s)}setRadioValues(){let e=this.pxlQuality.settings;Object.keys(e).forEach(i=>{let s=document.getElementById("settingsRadioBlock_"+i);if(s){let a=i=="resolution"?e[i]*4-1:~~e[i];s.children[a].children[0].checked=!0}})}settingsGuiAdvObjSizing(e=!0){let t=this.guiWindows.settingsGui.advObj,i=t.offsetHeight;t.style.maxHeight=(e?i:0)+"px",t.setAttribute("maxHeight",i)}settingsGuiToggle(e=null,t=!0){this.guiWindows.settingsGui||this.settingsGuiBuild(),e=e??!this.guiWindows.settingsGui.active,e&&this.guiWindows.settingsGui&&(this.guiWindows.settingsGui.usernameReturn.innerText=""),this.guiWindows.settingsGui.active=e,this.promptFader(this.guiWindows.settingsGui.gui,e),this.toggleGuiWindowContainer(null,e),this.hudBlock.active&&this.toggleHudBlock(e),this.toggleHudBlock(e,!1),this.togglePxlNavDataDisplay(e),this.introHelpActive&&!e&&(this.introHelpActive=!1,this.pxlEnv.postHelpIntro())}togglePxlNavDataDisplay(e=null){e==null&&(this.guiWindows.settingsGui?e=this.guiWindows.settingsGui.active:e=!1),this.pxlNavData.active=e;let t=this.pxlNavData.height||200;this.pxlNavData.gui.style.maxHeight=e?t+"px":"0px",e||(this.pxlNavData.height=this.pxlNavData.gui.offsetHeight)}renderRadius(e){this.pxlEnv.mapGlowPass.strength=Number(e),this.pxlEnv.roomBloomPass.strength=Number(e)}renderThreshold(e){this.pxlEnv.mapGlowPass.threshold=Number(e),this.pxlEnv.roomBloomPass.threshold=Number(e)}renderGlowRadius(e){this.pxlEnv.mapGlowPass.radius=Number(e),this.pxlEnv.roomBloomPass.radius=Number(e)}renderResolution(e){this.pxlQuality.screenResPerc=e*.75+.25,this.pxlDevice.resizeRenderResolution()}inviteUserBuild(){this.guiWindows.inviteUserGui={},this.guiWindows.inviteUserGui.gui=null,this.guiWindows.inviteUserGui.active=!1;let e=document.createElement("div");e.id="gui_inviteUserWindow",e.classList.add("gui_inviteUserParentStyle"),this.prepPromptFader(e),document.body.appendChild(e);let t=window.location+"";console.log(t),t=t.replace(/^https?:\/\//,""),console.log(t);let i="";i+=`
      <div class="gui_inviteUserBody">
        <div class="iu_urlStyle">${t}</div>
        <div id="iu_copy" class="iu_copyStyle">Copy</div>
      </div>
  `,e.innerHTML=i;let s=this.pxlUtils,a=document.getElementById("iu_copy");a.addEventListener("click",()=>{s.copyRoomUrl()?a.innerText="Copied":a.innerText="Error",a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(()=>{a.innerText="Copy",clearTimeout(a.timeout)},2e3)}),this.guiWindows.inviteUserGui.gui=e}inviteUserPosition(){if(this.guiWindows.inviteUserGui&&this.guiWindows.inviteUserGui.active){let t=document.getElementById("ft3Button").getBoundingClientRect();this.guiWindows.inviteUserGui.gui.style.display="grid",this.guiWindows.inviteUserGui.gui.style.top=t.y,this.guiWindows.inviteUserGui.gui.style.right=this.pxlDevice.sW-t.x+5,this.guiWindows.inviteUserGui.gui.style.minHeight=t.height}}toggleInviteUser(e=null){this.guiWindows.inviteUserGui||this.inviteUserBuild(),e=e??!this.guiWindows.inviteUserGui.active,this.guiWindows.inviteUserGui.active=e,this.promptFader(this.guiWindows.inviteUserGui.gui,e),this.inviteUserPosition()}buildMobileWelcome(){this.guiWindows.mobileGui={},this.guiWindows.mobileGui.gui=null,this.guiWindows.mobileGui.active=!1;let e=document.createElement("div");e.id="gui_mobileWelcomeGuiWindow",e.classList.add("gui_helpGuiParentStyle"),this.prepPromptFader(e),this.guiWindowBG.appendChild(e);let t="";t+=`
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
  `,e.innerHTML=t;let i=this,s=document.getElementById("guiMobileWelcomeButton");s.onclick=a=>{i.toggleMobileWelcome(!1),i.pxlEnv.postHelpIntro()},this.guiWindows.mobileGui.gui=e}toggleMobileWelcome(e=null){this.guiWindows.mobileGui||this.buildMobileWelcome(),e=e??!this.guiWindows.mobileGui.active,this.guiWindows.mobileGui.active=e,this.promptFader(this.guiWindows.mobileGui.gui,e),this.toggleGuiWindowContainer(null,e),this.hudBlock.active&&this.toggleHudBlock(e)}ctaBuildPopup(e=""){this.ctaContentLoading||(this.googleDocHTML?this.ctaDisplayPopup():(this.ctaContentLoading=!0,this.pxlFile.getURLContent(this.ctaLocalDocURL.blmSupport).then(t=>{this.ctaContentLoading=!1,this.googleDocHTML=t,this.ctaDisplayPopup()})))}ctaDisplayPopup(){this.actionPopUp&&this.actionPopUp.parentNode.removeChild(this.actionPopUp);let e=this.googleDocHTML;this.actionPopUp=document.createElement("div"),this.actionPopUp.setAttribute("id","ctaPopup"),this.actionPopUp.classList.add("parentGoogleLinkDoc"),this.actionPopUp.classList.add("fader"),this.actionPopUp.classList.add("visOff");let t=document.createElement("div");t.setAttribute("id","ctaPopupInner"),this.actionPopUp.appendChild(t),document.body.appendChild(this.actionPopUp);let i=null;e==""||!e?(i=document.createElement("iframe"),i.src="",i.classList.add("iframeGoogleLinkDoc"),t.appendChild(i),i.referrerpolicy="unsafe-url"):(t.innerHTML=e,t.classList.add("iframeGoogleLinkDoc"));let s=this;this.actionPopUp.onclick=function(a){a.srcElement.getAttribute("id")=="ctaPopup"&&(s.promptFader(this,!1,null,!0),s.actionPopUp=null)},i?i.onload=function(){setTimeout(()=>{this.promptFader(this.actionPopUp,!0,null,!1)},100)}:setTimeout(()=>{this.promptFader(this.actionPopUp,!0,null,!1)},100)}getUserControls(e){if(!e)return[null];let t=e,i=t.userStatusGui,s=t.audio,a=t.audioMuted,l=t.userSoundGui,n=t.displayName,v=t.userNameGui,p=t.verse;return{curAvatar:t,curName:n,curAudio:s,curAudioMuted:a,curGui:i,curNameGui:v,curAudioGui:l,curVerse:p}}async setUserControlPosition(){if(this.userControlBlock){let e=0,t=0;if(this.hudTopBar){let i=this.hudTopBar.getBoundingClientRect();e=i.y+i.height}this.userControlBlock.gui.style.top=e+"px"}}buildUserSpeaker(){let e={},t=this.userControlBlock.speakerIcon.svg.cloneNode(!0);t.classList.add("userControlSpeakerStyle"),t.classList.add("userControlSpeakerButtonStyle"),e.gui=t,e.remoteMuted=!1,e.volPrev=0;let i=t.children;for(let a=0;a<i.length;++a){let l=i[a],n=l.getAttribute("id");e[n]=l,n=="mute"?l.classList.add("userControlVisStyle"):n=="button"&&l.classList.add("userControlSpeakerButtonStyle")}let s=e.volLines.children;for(let a=0;a<s.length;++a){let l=s[a],n=l.getAttribute("id");e[n]=l}s=e.remoteMutedLines.children;for(let a=0;a<s.length;++a){let l=s[a],n=l.getAttribute("id");e[n]=l}return e}async addUserControls(e,t=!1){let{curAvatar:i,curName:s,curGui:a}=this.getUserControls(e),l=document.createElement("div");l.classList.add("userControlProximityOff"),l.classList.add("userControlParentStyle"),l.classList.add("userControlSpeakerButtonStyle"),this.mobile&&(l.style.display="none");let n=this;l.onclick=()=>{n.setUserControlMute(e)},i.userStatusGui=l,this.userControlBlock.gui.appendChild(l);let v=document.createElement("div");v.classList.add("userControlInnerParentStyle"),l.appendChild(v);let p=document.createElement("div");p.classList.add("userControlSpeakerParentStyle");let f=this.buildUserSpeaker();p.appendChild(f.gui),i.userSoundGui=f,v.appendChild(p);let m=document.createElement("div");m.classList.add("userControlNameStyle"),m.innerText=s,i.userNameGui=m,v.appendChild(m),this.setUserControlColor(e)}async setUserControlVolume(e,t,i=!0){if(this.userControlBlock.activeList.includes(e)){let{curAudioGui:s,curAudioMuted:a}=this.getUserControls(e);s&&(!a||t==0)&&(s.remoteMuted?t=0:i&&t>0&&(t*=2,t=Math.min(1,Math.max(t,(t+s.volPrev)*.5))),s.volPrev=t,s.volLines.style.opacity=t,s.volLines.style.filter="alpha(opacity="+t*100+")")}}async setUserControlMute(e){let{curAvatar:t,curAudio:i,curAudioMuted:s,curAudioGui:a}=this.getUserControls(e);if(i){let l=!s;l?(this.setUserControlVolume(e,0,!1),a.mute.classList.add("userControlVisible"),i.volume=0,i.muted=!0):(a.mute.classList.remove("userControlVisible"),i.muted=!1,i.volume=1),t.audioMuted=l}}async setUserControlRemoteMute(e,t=null,i=!0,s="#ffffff"){let{curAudio:a,curAudioGui:l}=this.getUserControls(e);if(l){t==null&&(a?t=a.muted:t=!1);let n=typeof t=="object"?t.muted:t;l.remoteMuted=n,l.base.setAttribute("fill",n?"#ff0000":s),l.remoteMutedLines.style.display=n||!i?"inline-block":"none",l.remoteS1.setAttribute("stroke",i?"#ff0000":s),l.remoteS2.setAttribute("stroke",i?"#ff0000":s),this.setUserControlVolume(e,0,!1)}}async setUserControlVis(e,t=null,i=!1){let{curAvatar:s,curGui:a,curAudio:l}=this.getUserControls(e);if(a){let n="userControlProximityOff";if(t==null&&(t=!a.classList.contains(n)),t)a.classList.remove(n),a.style.maxWidth=a.children[0].getBoundingClientRect().width+"px",this.setUserControlVolume(e,0),this.userControlBlock.activeList.includes(e)||this.userControlBlock.activeList.push(e);else{a.classList.add(n),a.style.maxWidth="30px";let v=this.userControlBlock.activeList.indexOf(e);v>-1&&this.userControlBlock.activeList.splice(v,1)}this.userControlBlock.gui.style.padding=this.userControlBlock.activeList.length==0?"0px":"5px"}}async deleteUserControlVis(e){let{curAvatar:t,curGui:i}=this.getUserControls(e);if(i){i.classList.add("userControlProximityOff"),i.style.maxWidth="30px";let a=this.userControlBlock.activeList.indexOf(e);a>-1&&this.userControlBlock.activeList.splice(a,1),this.userControlBlock.gui.style.padding=this.userControlBlock.activeList.length==0?"0px":"5px",i&&i.parentNode.removeChild(i)}}userControlsSwap(e,t){let i=this.userControlBlock.activeList.indexOf(e);i>-1&&(this.userControlBlock.activeList.splice(i,1),this.userControlBlock.activeList.includes(t)||this.userControlBlock.activeList.push(t))}setUserControlColor(e,t=null){let{curAvatar:i,curGui:s,curAudioGui:a,curVerse:l}=this.getUserControls(e),n=!0;if(t==null)if(n)t="#ffffff";else{let p=this.pxlUtils.stringToRgb(l,.3);t=this.pxlUtils.rgbToHex(...p)}s.style.color=t,a.base.setAttribute("fill",t),a.mute.setAttribute("stroke",t),a.mid.setAttribute("fill",t),a.max.setAttribute("fill",t),a.volPrev=0,a.volLines.style.opacity=0,a.volLines.style.filter="alpha(opacity=0)";let v=this;i.userStatusGui.onclick=()=>{v.setUserControlMute(e)},this.setUserControlRemoteMute(e,null,n,t)}toggleUserControls(e){if(!e)return null}}});var Do={};U(Do,{ShaderEditor:()=>Lt});var Lt,xs=k(()=>{ue();Lt=class{constructor(e,t){this.active=!1,this.isEditing=!1,this.name="GLSL Editor",this.type="shaderGui",this.pxlCore=e,this.pxlEnv=e.pxlEnv,this.guiManager=t,this.parent=null,this.gui=null,this.helpGui=null,this.shaderEditorDisplay=null,this.children={},this.uniformsObj=null,this.vertObj=null,this.fragObj=null,this.currentShader=null,this.shaderSliderValues=new te,this.editorWidthMinMax={min:30,max:70}}addSlider(e,t,i,s,a,l,n,v){typeof e=="string"&&(e=document.getElementById(e));let p=document.createElement("div");p.style.display="grid",p.style.gridAutoFlow="column",p.style.alignItems="center",p.style.gridAutoColumns="max-content auto max-content",p.innerHTML="<div class='input_sliderLabel'>"+t+" : </div>";let f=document.createElement("input");f.type="range",f.classList.add("input_sliderRange"),f.min=s,f.max=a,f.step=l,f.value=i,p.appendChild(f);let m=document.createElement("input");m.type="number",m.classList.add("gui_defaultInput"),m.classList.add("input_numberInput"),m.value=i,p.appendChild(m),m.onchange=C=>{f.value=C.target.value},f.onchange=C=>{m.value=C.target.value,n(C.target.value,...v)},f.oninput=C=>{m.value=C.target.value,n(C.target.value,...v)},e.appendChild(p)}updateShaderTextFields(e=null){let t,i="shaderGui";e||(e=this.pxlEnv.currentRoom==this.pxlEnv.mainRoom?this.currentShader:this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getCurrentShader());try{t=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].readShader(e,this.shaderSliderValues)}catch{return}let s,a,l;s=a=l="Unable To Load";try{t.uniforms.sliders={type:"v",value:this.shaderSliderValues},s=JSON.stringify(t.uniforms),a=t.vertexShader,l=t.fragmentShader,s="";for(let n in t.uniforms){let v="float",p={t:"sampler2D",b:"bool",i:"int",f:"float",v:"vec",c:"vec"};if(v=typeof t.uniforms[n].value,v=="object"){if(v="",!t.uniforms[n].value)continue;"image"in t.uniforms[n].value?v="sampler2D":v=v+"vec"+Object.keys(t.uniforms[n].value).length}else p.hasOwnProperty(t.uniforms[n].type)&&(v=t.uniforms[n].type=="i"?"i":""),p.hasOwnProperty(t.uniforms[n].type)&&(v=p[t.uniforms[n].type]);s+=`uniform ${v} ${n};   `}a=a.replace(/[\t]/g,"  "),l=l.replace(/[\t]/g,"  ")}catch(n){console.log("Error Reading Shader"),console.log(n)}t&&(t.needsUpdate=!0,this.children.uniformsObj.value=s,this.children.vertObj.value=a,this.children.fragObj.value=l)}buildShaderEditor(){let e="shaderGui",t=document.createElement("div");t.id="guiShaderEditorBlock",t.classList.add("gui_shaderEditorBlockStyle"),t.style.transition="max-width .5s ease, opacity .8s, filter .8s",this.pxlEnv.pxlGuiDraws.prepPromptFader(t),this.pxlEnv.pxlGuiDraws.guiWindows[e]={},this.pxlEnv.pxlGuiDraws.guiWindows[e].gui=t,this.pxlEnv.pxlGuiDraws.guiWindows[e].active=!1,this.gui=t;let i=document.createElement("div");i.id="guiShaderHelpBlock",i.classList.add("gui_shaderHelpBlockStyle"),i.style.transition="left .3s ease, opacity .8s, filter .8s",this.pxlEnv.pxlGuiDraws.prepPromptFader(i),this.pxlEnv.pxlGuiDraws.guiWindows[e].help=i,this.helpGui=i;let s=this.pxlEnv.currentRoom,a=this.pxlEnv.roomSceneList[s].geoList,l=Object.keys(a),n="";l.forEach(T=>{if(["Mesh","Points"].includes(a[T].type)&&a[T].material.type=="ShaderMaterial"){let B=T.substring(0,1).toUpperCase()+T.substring(1,T.length);n+="<option value='geo_"+T+"'>"+B+"</option>"}});let v="",p="selected";this.pxlEnv.pxlGuiDraws.guiWindows[e].currentShader="script_fog";let f=`
    <div id="gui_shaderEditorParent" class="gui_shaderEditorParentStyle">
      <div id="gui_shaderEditorHeaderBlock" class="gui_shaderEditorHeaderBlock">
      <div class="gui_shaderEditorOptionBlock">
        <div class="gui_shaderEditorTitleBlock">
        <div id="gui_shaderEditorTitleParent" class="gui_shaderEditorTitleParentStyle">
            <div id="gui_shaderEditorTitle" clsss="gui_shaderEditorTitleStyle">GLSL Shader Editor</div>
            <div id="gui_shaderEditorHeaderList" clsss="gui_shaderEditorHeaderListStyle">
              <span id="gui_shaderEditorPulldownHeader" clsss="gui_shaderEditorPulldownHeaderStyle">Edit Shader</span>
              <select name="shaderEditor_loadShader" id="shaderEditor_loadShader" class="pickerStyle gui_shaderPickerStyle">
                <option value="script_avatar" ${v}>Avatar</option>
                <option value="script_fog" ${p}>Fog</option>
                <option value="script_dArrows">Direction Arrows</option>
                <option value="script_userScreens">User Screens</option>
                <option value="script_warpZonePortals">Warp Zone Portals</option>
                <option value="script_lizardking">Item; Lizard King</option>
                <option value="script_majorTom">Item; Major Tom</option>
                <option value="script_fractalSubstrate">Item; Fractal Substrate</option>
                <option value="script_fractalEcho">Item; Fractal Echo Pass</option>
                ${n}
              </select>
            </div>
            <div id="gui_shaderEditorFontSize" clsss="gui_shaderEditorFontSizeStyle">
              <span  style="font-size:.75em;margin-right:5px;">Font Size</span>
              <span id="gui_shaderEditorFontSmaller" class="shaderEditor_settingsButton">-</span>
              <span id="gui_shaderEditorFontLarger" class="shaderEditor_settingsButton">+</span>
              <span class="gui_shaderEditorOptionBarSpacer"> </span>
              <span id="gui_shaderEditorCloseButton" class="shaderEditor_settingsButton">X</span>
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
    `,m="<div class='gui_shaderHelpSpacerStyle'></div>";f+=`
    <div id="gui_shaderHelpBlock" class="gui_shaderHelpBlockStyle">
      <div class="gui_shaderHelpTitle">:: Keyboard Shortcuts ::</div>
      ${m}
      <span><span class="gui_boldText">Ctrl + Enter</span><br> - Update Shader on Material</span>
      <br>&nbsp;&nbsp;<span>Returns use existing indent type (Spaces or Tabs)</span>
      ${m}
      <span><span class="gui_boldText">Ctrl + D</span><br> - Duplicate current line</span>
      ${m}
      <span><span class="gui_boldText">Ctrl + K</span><br> - Comment current/selected lines</span>
      ${m}
      <span><span class="gui_boldText">Ctrl + Shift + K</span><br> - Uncomment current/selected lines</span>
      ${m}
      <span><span class="gui_boldText">Ctrl + NumPad {1,2,3}</span><br> - Add selection or '.0' into float(), vec2(), vec3() </span>
      ${m}
      <span><span class="gui_boldText">Ctrl + {Up,Down,Left,Right}</span><br> - Searches for current selection in direction</span>
      ${m}
      <span><span class="gui_boldText">Y</span><br> - To opn/close the Shader Editor</span>
      ${m}
    </div>
    `,t.innerHTML=f,document.body.appendChild(t);let C=document.getElementById("guiShaderUserSliders");this.parentObj=C;let x=this.shaderSliderValues,g=(T,...B)=>{x[B[0]]=T};this.addSlider(C,"sliders.x",0,-1,1,.01,g,["x"]),this.addSlider(C,"sliders.y",0,-5,5,.1,g,["y"]),this.addSlider(C,"sliders.z",0,-10,10,.1,g,["z"]),this.children.shaderSliders=C,this.children.shaderParentObj=document.getElementById("shaderEditor_uniformInput").parentNode,this.children.shaderEditor=document.getElementById("gui_shaderEditorParent"),this.children.headerBar=document.getElementById("gui_shaderEditorHeaderBlock"),this.children.titleParentObj=document.getElementById("gui_shaderEditorTitleParent"),this.children.titleObj=document.getElementById("gui_shaderEditorTitle"),this.children.pulldownHeaderObj=document.getElementById("gui_shaderEditorPulldownHeader"),this.children.uniformsObj=document.getElementById("shaderEditor_uniformInput"),this.children.vertObj=document.getElementById("shaderEditor_vertInput"),this.children.fragObj=document.getElementById("shaderEditor_fragInput"),this.children.updateObj=document.getElementById("shader_updateShader"),this.children.helpDiv=document.getElementById("gui_shaderHelpBlock"),this.children.shaderList=document.getElementById("gui_shaderEditorHeaderList"),this.children.shaderFieldParent=document.getElementById("guiShaderFieldParent"),this.shaderEditorDisplay=document.getElementById("shaderEditorDisplay"),this.children.shaderSelect=document.getElementById("shaderEditor_loadShader");let S=document.getElementById("gui_shaderEditorFontSize");S.style.justifySelf="end",S.style.marginTop="2px",S.style.marginRight="3px",S.style.userSelect="none",S.style.display="flex",S.style.alignItems="center";let b=this;this.children.shaderSelect.onchange=T=>{b.updateShaderTextFields(this.children.shaderSelect.value)};let P=document.getElementById("gui_shaderEditorFontSmaller");P.onclick=T=>{b.shiftFontSize(-.15)};let E=document.getElementById("gui_shaderEditorFontLarger");E.onclick=T=>{b.shiftFontSize(.15)};let R=document.getElementById("gui_shaderEditorCloseButton");R.onclick=T=>{b.toggleShaderEditor()},this.children.updateObj.addEventListener("click",()=>{this.isEditing=!1;let B=document.getElementById("shaderEditor_uniformInput").value,V=document.getElementById("shaderEditor_vertInput"),Q=V.value,$=document.getElementById("shaderEditor_fragInput"),z=$.value,o=document.createElement("div");o.innerHTML=B,B=o.innerText,o.innerHTML=Q,Q=o.innerText,o.innerHTML=z,z=o.innerText,b.pxlEnv.roomSceneList[b.pxlEnv.currentRoom].setShader(B,Q,z),V.blur(),$.blur(),b.guiManager.pxlNavCanvas.focus()}),this.children.vertObj.onfocus=T=>{b.focusShaderMessage(T,"vertObj")},this.children.vertObj.onkeydown=T=>{b.keyShaderMessage(T)},this.children.vertObj.onmousedown=T=>{b.mDownShaderMessage(T)},this.children.vertObj.onclick=T=>{b.clickShaderMessage(T)},this.children.vertObj.ondblclick=T=>{b.dblclickShaderMessage(T)},this.children.fragObj.onfocus=T=>{b.focusShaderMessage(T,"fragObj")},this.children.fragObj.onkeydown=T=>{b.keyShaderMessage(T)},this.children.fragObj.onmousedown=T=>{b.mDownShaderMessage(T)},this.children.fragObj.onclick=T=>{b.clickShaderMessage(T)},this.children.fragObj.ondblclick=T=>{b.dblclickShaderMessage(T)},this.mouseX=0,this.mouseY=0,this.prevSelectStart=0,this.prevSelectEnd=0}shiftFontSize(e){let t=document.getElementById("gui_shaderEditorParent");if(!t)return;t.hasAttribute("styleStore")||t.setAttribute("styleStore",1);let a=parseFloat(t.getAttribute("styleStore"))+e;t.setAttribute("styleStore",a),t.style.fontSize=a+"em";let l=document.getElementById("shaderEditor_uniformInput");l&&(l.style.fontSize=a+"em");let n=document.getElementById("shaderEditor_vertInput");n&&(n.style.fontSize=a+"em");let v=document.getElementById("shaderEditor_fragInput");v&&(v.style.fontSize=a+"em"),setTimeout(()=>{this.resizeShaderElements()},130)}updateHeaderBar(){this.isEditing?(this.children.titleParentObj.style.fontSize="2.05em",this.children.titleObj.style.fontSize="1.15em"):(this.children.titleParentObj.style.fontSize="1.3em",this.children.titleObj.style.fontSize="1em")}mDownShaderMessage(e){this.mouseX=e.x,this.mouseY=e.y}clickShaderMessage(e){if(!this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive){let t=Math.abs(this.mouseX-e.x),i=Math.abs(this.mouseY-e.y);if(Math.max(t,i)<5){let a=e.target,l=a.selectionStart,n=a.selectionEnd,v=parseInt((l+n)*.5);l!=n&&(this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectStart=l,this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectEnd=n)}}}dblclickShaderMessage(e){let t=this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectStart,i=this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.prevSelectEnd,s=e.target,a=s.selectionStart,l=s.selectionEnd,v=s.value.substring(t,i+20),p=v.match(/[a-zA-Z0-9\.\_\[\]]+/);p&&!v[0].match(/\n/)&&(i=t+p[0].length),s.setSelectionRange(t,i),this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive=!0,setTimeout(()=>{this.pxlEnv.pxlGuiDraws.guiWindows.shaderGui.dcActive=!1},500)}keyShaderMessage(e){if(e.repeat)return!1;let t=e.key,i=e.code,s=e.shiftKey,a=e.ctrlKey,l=e.altKey,n=i.includes("Numpad");if(!(t=="Enter"||t=="Tab"||i=="KeyD"&&a||i=="KeyK"&&a||n&&a||i.includes("Arrow")&&a))return!1;e.preventDefault();let p=e.target;if(i=="NumpadAdd"){let b=window.getComputedStyle(p),P=parseFloat(b.fontSize)+2;return p.style.fontSize=P,!1}if(i=="NumpadSubtract"){let b=window.getComputedStyle(p),P=parseFloat(b.fontSize)-2;return p.style.fontSize=P,!1}let f=p.selectionStart,m=p.selectionEnd,C=p.value;if(i.includes("Arrow")){if(f==m)return!1;let b=C.substring(f,m),P,E,R;if(i=="ArrowUp"?(E=C.substring(0,f),f=E.search(/.*$/),i="ArrowLeft"):i=="ArrowDown"&&(E=C.substring(m,C.length),m=E.search(/\n/)+m,i="ArrowRight"),i=="ArrowLeft"){P=new RegExp(b+".*","gm"),E=C.substring(0,f);let T=[...E.matchAll(b,"g")];if(T.length==0&&(T=[...C.matchAll(b,"g")],T.length==0))return!1;R=T.pop().index}if(i=="ArrowRight"){P=new RegExp(b,"m"),E=C.substring(m,C.length);let T=P.exec(E);if(T)R=T.index+m;else{if(T=P.exec(C),!T)return!1;R=T.index}}if(R>-1){let T=R+b.length;p.setSelectionRange(R,T);let B=p.getBoundingClientRect(),Q=window.getComputedStyle(p).font,$=[C.slice(0,R),"<span id='tmpShaderPosition'>.</span>",C.slice(R)].join("");$=$.replace(/(?:\r\n|\r|\n)/g,"<br>");let z=document.createElement("div");z.style.position="fixed",z.style.width=B.width,z.style.height=B.height,z.style.overflowY="scroll",z.style.font=Q,z.innerHTML=$,document.body.appendChild(z);let u=z.querySelector("#tmpShaderPosition").offsetTop-200;document.body.removeChild(z),p.scrollTo(0,u)}return!1}if(t=="Enter"&&a)return this.children.updateObj.click(),p.focus(),p.setSelectionRange(f,m),!1;if(n){let P=C.substring(f,m),E=P.length>0,R=C.substr(f-1,1);R=/[\w|\d]/.test(R)&&P.length==0?" ":"";let T=C.substr(m+1,1);T=/[\w|\d]/.test(T)&&P.length==0?" ":"";let B=f+R.length;if(i=="Numpad1"){let V="float(";B+=V.length,P=E?P:".0",P=V+P+")"}else if(i=="Numpad2"){let V="vec2(";B+=V.length,P=E?P:".0, .0",P=V+P+")"}else if(i=="Numpad3"){let V="vec3(";B+=V.length,P=E?P:".0, .0, .0",P=V+P+")"}return P=R+P+T,document.execCommand("insertText",!1,P),E||p.setSelectionRange(B,B),!1}let x=Math.min(f,m),g=C.substr(0,x);if(i=="KeyK"){let b=!1,P=!1,E=[],R,T,B;if(f!=m&&(R=g.search(/.*$/),T=m,B=C.substring(R,m),b=/\n/.test(B)),!b){let V=g.search(/[\S\w].*$/),Q=!1;if(V==-1){if(V=C.substring(x,C.length).search(/(?:[^\s])/),V==-1)return!1;V+=x,Q=!0}let $=V,z=$,o="";if(s){if(z+=2,C.substr($,2)!="//")return!1;f-=2,m-=2}else{if(C.substr($,2)=="//")return!1;o="//",f+=2,m+=2}return p.setSelectionRange($,z),document.execCommand("insertText",!1,o),p.setSelectionRange(f,m),!1}if(b){let V=C.substring(T,C.length),Q=T+V.search(/\n./),$=C.substring(R,Q),z=s?-2:2,o=[...$.matchAll(/[\S\w].*/g)],u=[],h=f-R,d=T-R;return o.forEach(c=>{let y=c.index;u.push(y)}),u=u.reverse(),u.forEach(c=>{let y=$.substr(c,2);if(s){if(y!="//")return;$=$.substring(0,c)+$.substring(c+2,$.length)}else{if(y=="//")return;$=$.substring(0,c)+"//"+$.substring(c,$.length)}f+=c<h?z:0,m+=c<d?z:0}),p.setSelectionRange(R,Q),document.execCommand("insertText",!1,$),p.setSelectionRange(f,m),!1}return!1}let S=g.split(`
`);if(t=="Enter"||t=="Tab"){let b=S.pop();b.length==0&&(b=S.pop());let P=b.replace(/[\S\w].*$/g,"");t=="Tab"?(P=P.length==0?" ":P.substr(0,1),P===" "?P="  ":P="	"):P=`
`+P;let E=P,R=f,T=m;if(t=="Tab"&&f!=m){let B=C.substring(f,m);B=B.split(`
`),s?B=B.map(V=>V==""?V:V.replace(P,"")):B=B.map(V=>V==""?V:P+V),E=B.join(`
`),T=R+E.length}else R=R+E.length,T=R;return document.execCommand("insertText",!1,E),p.setSelectionRange(R,T),!1}if(i=="KeyD"&&a)if(f==m){let b=C.split(`
`);S.pop();let P=S.length,E=b[P],B=[...S,E].join(`
`).length;E=`
`+E,p.setSelectionRange(B,B),document.execCommand("insertText",!1,E),B=x+E.length,p.setSelectionRange(B,B)}else{let b=C.substring(f,m);p.setSelectionRange(m,m),document.execCommand("insertText",!1,b),m+=b.length,p.setSelectionRange(m,m)}return!1}updateShaderList(){let e=this.children.shaderSelect;if(!e){console.log("No pulldown"),console.log(this.gui);return}let t=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getShaderList(),i=Object.keys(t),s="",a=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].getCurrentShader();i.forEach(l=>{let n=l==a?" selected":"";s+=`<option value="${l}" ${n}>${t[l]}</option>`}),e.innerHTML=s}resize(e){this.resizeShaderElements()}resizeShaderElements(){let e=0;if(this.hudBottomBar&&(e=this.hudBottomBar.offsetHeight),this.children.headerBar&&(e+=this.children.headerBar.offsetHeight),this.gui){this.gui.style.height=this.guiManager.sH-e;let t=this.children.vertObj.getBoundingClientRect().top,i=this.children.updateObj.getBoundingClientRect().height;i+=40;let s=this.guiManager.sH-i-t;this.children.vertObj.style.maxHeight=s*.4+"px",this.children.vertObj.displayHeight=s*.4,this.children.fragObj.style.maxHeight=s*.6+"px",this.children.fragObj.displayHeight=s*.6,this.children.fieldBodyHeight=s}}toggleShaderEditor(e=null){this.gui||this.buildShaderEditor(),this.updateShaderList(),this.updateShaderTextFields(this.children.shaderSelect.value),e=e??!this.active,this.active=e,this.guiManager.promptFader(this.gui,e),this.guiManager.promptFader(this.helpGui,e),this.pxlEnv.emit("shaderEditorVis",e),e?this.guiManager.pxlNavCanvas.addEventListener("mousedown",this.blurShaderEditor.bind(this)):this.guiManager.pxlNavCanvas.removeEventListener("mousedown",this.blurShaderEditor.bind(this)),setTimeout(()=>{this.resizeShaderElements()},130)}blurShaderEditor(){this.isEditing=!1,document.activeElement.blur();let e=document.getElementById("guiShaderEditorBlock");e.style.maxWidth=this.editorWidthMinMax.min+"vw";let t=document.getElementById("gui_shaderHelpBlock");t&&(t.style.left="max("+this.editorWidthMinMax.min+"vw, 430px)");let i=document.getElementById("shaderEditor_loadShader");i&&(i.style.maxWidth="85px"),this.updateHeaderBar(),setTimeout(()=>{this.resizeShaderElements()},130)}focusShaderMessage(e,t){this.isEditing=!0;let i=this.children,s=i.vertObj.displayHeight,a=i.fragObj.displayHeight,l=Math.max(150,this.guiManager.sH*.135),n=i.fieldBodyHeight-l;s=t=="vertObj"?n:l,a=t=="fragObj"?n:l,i.vertObj.style.maxHeight=s+"px",i.fragObj.style.maxHeight=a+"px";let v=document.getElementById("gui_shaderEditorParent");this.gui.style.maxWidth=this.editorWidthMinMax.max+"vw",this.children?.shaderSelect&&(this.children.shaderSelect.style.maxWidth="225px");let p=document.getElementById("gui_shaderHelpBlock");p&&(p.style.left=this.editorWidthMinMax.max+"vw"),this.updateHeaderBar()}}});var To={};U(To,{GUI:()=>ht});var ht,ys=k(()=>{gs();xs();ht=class extends Rt{constructor(e,t="Metal-Asylum",i="images/assets/",s="images/GUI/"){super(e,t,i,s),this.verbose=e,this.lableBoxSize=40,this.optionWidthRound=10,this.optionWidthAdd=25,this.deviceOptionHeight=[0,300],this.ShaderEditor=null,this.pxlLoaderTotal=5,this.hudVisibility=!0,this.camChoicesActive=!1,this.micChoicesActive=!1,this.textDescriptions={chatIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat',pos:[1,-1.5]},multiverseIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection',pos:[0,-1.3]},djPlayerVolumeParent:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume',pos:[0,-1.5]},speakerIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output',pos:[0,-1.5]},micIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input',pos:[0,-1.5]},camIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input',pos:[0,-1.5]},helpIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions',pos:[0,-1.5]},infoIconParent:{text:'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>',pos:[-1,0],offset:[-10,0]},settingsIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation',pos:[0,-1.5]},muteAllIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users',pos:[1,0]},fullScreenIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen',pos:[-1,0]},videoQualityIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings',pos:[-1,0]},statsIcon:{text:"jitsi connection status; toggle connection ",pos:[1,0]},usersIcon:{text:'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools',pos:[1,0]},ft2Button:{text:"Environment",pos:[-1,0],offset:[-10,0]},ft3Button:{text:"Invite Friends",pos:[-1,0],offset:[-10,0]},hud_userCount:{text:"# of People",pos:[-1,0],offset:[-10,0]}},this.activeItem=null,this.actionPopUp=null,this.init()}setDependencies(e){super.setDependencies(e),this.ShaderEditor=new Lt(e,this)}init(){super.init()}booted(){super.booted()}step(){super.step()}toggleShaderEditor(){this.ShaderEditor.toggleShaderEditor()}resize(e){super.resize(),this.ShaderEditor&&this.ShaderEditor.resize(e)}}});var Mo={};U(Mo,{HelpGui:()=>bs});var bs,Ao=k(()=>{bs=class extends GuiDraws{constructor(){super()}helpInit(){}}});var Ro={};U(Ro,{HelpGui:()=>Cs});var Cs,Lo=k(()=>{Cs=class extends GuiDraws{constructor(){super()}helpInit(){}}});var ko={};U(ko,{HelpGui:()=>Ss});var Ss,Uo=k(()=>{Ss=class extends GuiDraws{constructor(){super()}helpInit(){}}});var Io={};U(Io,{HelpGui:()=>Ps});var Ps,Bo=k(()=>{Ps=class extends GuiDraws{constructor(){super()}helpInit(){}}});var Ho={};U(Ho,{Audio:()=>ct});var ct,ws=k(()=>{ue();ct=class{constructor(){this.pxlTimer=null,this.pxlVideo=null,this.pxlDevice=null,this.pxlEnv=null,this.pxlGuiDraws=null,this.pxlSocket=null,this.active=!1,this.audioTimer=new te(0,0,0),this.audioEq=new mi(0,0,0,0),this.audioWorker=null,this.audioProcessor=null,this.djUrlSource="//",this.djMuted=!1,this.djAudioVolume=0,this.djAudioVolumeMax=.65,this.djAudioVolumeMin=.25,this.djAudioVolumeScalar=.25,this.djAudioObj=null,this.djTimecodeObj=null,this.djVolumeParentObj=null,this.djVolumeObj=null,this.roomAudioStopped=!0,this.videoStreamObjects=[],this.colliderVolActive=!1,this.isVideoObject=!1,this.activeObject=null,this.fadeActive=!1,this.fadeAdjustRate=.02,this.fadeDir=0,this.fadePerc=0,this.audioContext=null}setDependencies(e){this.pxlTimer=e.pxlTimer,this.pxlVideo=e.pxlVideo,this.pxlDevice=e.pxlDevice,this.pxlEnv=e.pxlEnv,this.pxlGuiDraws=e.pxlGuiDraws,this.pxlSocket=e.pxlSocket}init(){this.active=!0}postBoot(){if(this.djAudioObj){if(this.pxlEnv.pxlAutoCam.enabled)this.djAudioVolumeMax=1,this.djAudioVolumeMin=0;else if(this.pxlEnv.mobile){let l=function(n){setTimeout(()=>{i.djAudioVolume=0,i.djAudioVolumeMax=s,i.djAudioVolumeMin=0,i.djAudioObj.byScript=!0,i.djAudioObj.volume=0,e.play().then(()=>{i.djPlayerMuteToggle(!1),i.setFadeActive(.5)}),a.removeEventListener("click",l),a.removeEventListener("touchstart",l)},500)},i=this,s=this.djAudioVolumeMax,a=document.getElementById("guiMobileWelcomeButton");a.addEventListener("click",l),a.addEventListener("touchstart",l)}this.djAudioVolume=this.pxlEnv.enabled?0:this.djAudioVolumeMin,this.djAudioObj.volume=this.pxlEnv.enabled?0:this.djAudioVolumeMin,this.djPlayerMuteToggle(!1),this.djPlayerAdjustVolume({}),this.djPlayerSetSliderGui();let e=this.djAudioObj;e.setAttribute("autoplay",!0);let t=this;this.djAudioObj.addEventListener("volumechange",i=>{t.djPlayerSetSliderGui()},!0)}}start(){}step(){this.djAudioObj&&this.djAudioObj.paused&&(this.djAudioObj.play().catch(e=>{}),this.djAudioObj.muted=this.djMuted||!this.roomAudioStopped),this.fadeAudioEvent()}isPaused(){let e=!0;return this.djAudioObj&&(e=this.djAudioObj.paused),e}pausePlayback(){this.active=this.pxlTimer.active,this.active?this.play():this.stop()}initPlay(){this.pxlVideo.canUnmute("dj")&&!this.isPaused()&&(this.djPlayerMuteToggle(!1),this.setFadeActive(1),this.pxlDevice.mobile&&this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon,!this.djMuted,!0))}play(){if(this.active=!0,this.isVideoObject)this.pxlVideo.setVolume("dj",this.djAudioVolume),this.pxlVideo.setMuted("dj",this.djMuted);else{this.djAudioObj.byScript=!0;let e=this.djAudioObj;e.children[0].setAttribute("src",this.djUrlSource),setTimeout(()=>{e.load(),setTimeout(()=>{e.volume=this.djAudioVolume,e.muted=this.djMuted||!this.roomAudioStopped,e.paused&&e.play()},20)},20)}}stop(){if(this.active=!1,this.isVideoObject)this.pxlVideo.setMuted("dj",!0);else{let e=this.djAudioObj;e.children[0].setAttribute("src",""),e.pause(),setTimeout(()=>{e.load()},20)}}djBuildPlayer(){this.djAudioObj=document.getElementById("djStream"),this.djVolumeParentObj=document.getElementById("djPlayerVolumeParent"),this.djVolumeObj=document.getElementById("djPlayerVolume"),this.djAudioObj.byScript=!1,this.djAudioObj.volume=0,this.djVolumeObj.style.width="0%";let e=this;this.pxlDevice.objectPercList.push("djPlayerVolume"),this.pxlDevice.objectPercList.push("djPlayerVolumeParent"),this.pxlDevice.objectPercFuncList.djPlayerVolumeParent=t=>{e.djPlayerAdjustVolume(t)},this.djVolumeParentObj.down=!1,this.djVolumeParentObj.addEventListener("mousedown",t=>{e.djVolumeParentObj.down=!0,e.djPlayerAdjustVolume(t)}),this.djVolumeParentObj.addEventListener("mousemove",t=>{e.djPlayerAdjustVolume(t)}),this.djVolumeParentObj.addEventListener("mouseup",t=>{e.djVolumeParentObj.down=!1}),this.pxlDevice.mobile&&(this.djVolumeParentObj.style.width="30vw",this.djVolumeParentObj.addEventListener("touchstart",t=>{e.djVolumeParentObj.down=!0},{passive:!0}),this.djVolumeParentObj.addEventListener("touchmove",t=>{e.djPlayerAdjustVolume(t)},{passive:!0}),this.djVolumeParentObj.addEventListener("touchend",t=>{e.djVolumeParentObj.down=!1},{passive:!0})),this.djAudioObj.muted=!0,this.prepAudioProcessor()}prepAudioProcessor(){}stepAudioProcessor(){}recieveAudioProcessor(e){}buildRemoteAudioMixer(e,t){if(0)var i,s,a;return!1}loadStreamPromise(){let e=this.djAudioObj;return new Promise((t,i)=>{this.djAudioObj.byScript=!0,e.children[0].setAttribute("src",this.djUrlSource),e.load(),e.muted=this.djMuted||!this.roomAudioStopped}).then(()=>{}).catch(t=>{console.log("error source")})}djPlayerSetSliderGui(){this.djAudioObj.byScript||!this.pxlEnv.postIntro||this.pxlEnv.pxlAutoCam.enabled?this.djAudioObj.byScript=!1:(this.fadeActive=!1,this.djAudioVolumeMax=this.djAudioVolume,this.djAudioVolumeMin=this.djAudioVolume*this.djAudioVolumeScalar),this.djVolumeObj.style.width=this.djAudioVolume*100*~~!this.djMuted+"%"}djPlayerAdjustVolume(e){if(this.djVolumeParentObj.down||this.djVolumeParentObj.down&&e.touches){let t=this.djVolumeParentObj.offsetWidth,i=0;e.touches?i=this.pxlDevice.objectPerc.percX:i=e.offsetX/t;let s=Math.max(0,Math.min(1,i));this.djAudioVolume=s,this.djAudioVolumeMax=s,this.djAudioVolumeMin=s*.1,s*=s,this.djAudioObj&&(this.djAudioObj.volume=s),e.touches&&this.djPlayerSetSliderGui()}this.pxlVideo&&this.pxlEnv.posted&&this.pxlVideo.setVolume("dj",this.djAudioVolume)}djPlayerMuteToggle(e=null){this.djMuted=e??!this.djMuted,e!=null&&this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon,!e,!0),this.djAudioObj&&(this.djAudioObj.muted=this.djMuted,this.djAudioObj.byScript=!0,this.djAudioObj.volume=this.djAudioObj.volume),this.pxlVideo&&this.pxlEnv.posted&&this.pxlVideo.setMuted("dj",this.djMuted)}setFadeActive(e=1){this.fadeDir!=e&&(this.fadeDir=e,this.fadeActive=!0)}fadeAudioEvent(){if(this.djVolumeParentObj&&!this.djVolumeParentObj.down&&this.fadeActive&&this.pxlEnv.postIntro){if(this.fadePerc+=this.fadeAdjustRate*this.fadeDir,this.fadePerc<0||this.fadePerc>1){this.fadePerc=this.fadeDir==1?1:0,this.fadeActive=!1;return}let e=(this.djAudioVolumeMax-this.djAudioVolumeMin)*this.fadePerc+this.djAudioVolumeMin;this.djAudioVolume=e,e*=e,this.djAudioObj&&(this.djAudioObj.byScript=!0,this.djAudioObj.volume=e),this.pxlVideo.setVolume("dj",this.djAudioVolume)}}}});var Fo={};U(Fo,{MusicUtils:()=>Es});var Es,Vo=k(()=>{Es=class{constructor(){this.audioObject=null}}});var _o={};U(_o,{Video:()=>Ds});var Ds,jo=k(()=>{Ds=class{constructor(e=null,t=null,i=null,s=null,a=null){this.pxlUtils=t,this.pxlAudio=i,this.pxlFile=s,this.pxlGuiDraws=a,this.pxlEnv=null,this.posted=!1,this.djStreamUrl="",this.performerStreamUrl="",this.screenVideoBlock=null,this.screenVideos={},this.videoStreams={},this.videoStreamFailCount=0,this.videoStreamFailMax=5,this.videoAudioEvent={dj:!1,performer:!1},this.checkForDjStream=!1,this.checkForPerformerStream=!1,this.videoStills={dj:{texture:null,url:e+"SoftNoise_512.jpg"},performer:{texture:null,url:e+"SoftNoise_512.jpg"}}}init(){this.buildVideoBlock(),this.buildPromoVideos()}buildVideoBlock(){if(this.screenVideoBlock==null){let e=document.createElement("div");e.classList.add("videoScreenBlockStyle"),document.body.appendChild(e),this.screenVideoBlock=e}}buildPromoVideos(){[].forEach(t=>{let i=t.name,s=t.type,a=t.intensity,l=t.boost,n=t.file,v=t.landscape,p=this.pxlFile.vidRoot+n,f=document.createElement("video");f.id="screenVideo_"+i+"_"+(v?"port":"land"),f.src=p,f.classList.add("bgMediaAssets"),f.controls=!1,f.muted=!0,f.preload="true",f.setAttribute("autoplay",""),f.setAttribute("muted",""),f.setAttribute("playsinline",""),f.setAttribute("loop",""),this.screenVideoBlock.appendChild(f),this.screenVideos[i]||(this.screenVideos[i]={}),this.screenVideos[i].name=i,this.screenVideos[i].type=s,a&&(this.screenVideos[i].intensity=a),l&&(this.screenVideos[i].boost=l);let m=this.screenVideos[i].file||[];this.screenVideos[i].file?m[~~v]=p:m=[p,p],this.screenVideos[i].file=m;let C=this.pxlUtils.getVideoTexture(f),x=this.screenVideos[i].texture||[];this.screenVideos[i].texture?x[~~v]=C:x=[C,C],this.screenVideos[i].texture=x;let g=[];this.screenVideos[i].videoObjs?g[~~v]=f:g=[f,f],this.screenVideos[i].videoObjs=g})}async boot(){this.videoAudioEvent.dj?this.buildVideoPlayer("dj"):this.videoStills.dj.texture=this.pxlUtils.loadTexture(this.videoStills.dj.url)}buildVideoPlayer(e){let t=this,i=document.createElement("video");i.id="antibodyDjStream",i.classList.add("bgMediaAssets"),i.controls=!1,i.volume=0,i.muted=!0,i.setAttribute("autoplay","true"),i.setAttribute("playsinline","true"),i.addEventListener("volumechange",s=>{i.volume=Math.min(i.volume,t.pxlAudio.djAudioVolume)},!0),this.screenVideoBlock.appendChild(i),this.videoStreams[e]={},this.videoStreams[e].mode=0,this.videoStreams[e].active=!1,this.videoStreams[e].loading=!1,this.videoStreams[e].checkResolve=!1,this.videoStreams[e].prevCheck=this.pxlUtils.curMS+5,this.videoStreams[e].delayCheck=5,this.videoStreams[e].obj=i,this.videoStreams[e].url=this.djStreamUrl,this.videoStreams[e].urlStatus=!1,this.videoStreams[e].player=null,this.videoStreams[e].checkScreens=!1,this.videoStreams[e].activeLevel=-1,this.videoStreams[e].prevFrame=0,this.videoStreams[e].prevFrameCount=0,this.videoStreams[e].canvasObj=null,this.videoStreams[e].videoTexture=this.getTexture(e),this.pxlFile.urlExists(this.djStreamUrl).then(s=>{this.videoStreams[e].urlStatus=s}),this.buildVideoStream(e,!1)}postBoot(e){this.videoStreams[e]&&this.videoStreams[e].urlStatus&&this.load(e,this.videoStreams[e].url),this.posted=!0,this.checkForDjStream=this.videoAudioEvent.dj}step(){let e=!1,t="dj";if(this.videoAudioEvent[t]){let i=this.videoStreams[t];i&&(i.active||this.checkVideoStreamStatus(t),this.pxlUtils.mobile?i.active&&i.videoTexture&&i.checkScreens&&(i.checkScreens=!1,this.setScreensToStreams(1,i.videoTexture)):(e=i.checkScreens,i.checkScreens=!1))}else this.videoStills[t].texture&&this.pxlUtils.mobile&&this.setScreensToStreams(1,this.videoStills[t].texture);return e}setScreensToStreams(e=0,t="dj"){let i=t;typeof i=="string"&&(i=this.getTexture(t),i||(e=0,this.videoStreams[t].active=!1,this.videoStreams[t].checkScreens=!0)),this.pxlEnv.camScreenData.screenGeoList.forEach((s,a)=>{s.material.uniforms.camExists.value=e,s.material.uniforms.videoFeed.value=i})}isActive(e){let t=!1;return this.videoStreams.hasOwnProperty(e)?this.videoStreams[e].active&&this.videoStreams[e].videoTexture&&(t=!0):t=this.videoStills[e].texture!=null,t}getTexture(e){let t=null;return this.videoAudioEvent[e]?(this.videoStreams[e].videoTexture||(this.videoStreams[e].videoTexture=this.buildVideoTexture(e)),t=this.videoStreams[e].videoTexture):this.videoStills[e].texture&&(t=this.videoStills[e].texture),t}buildVideoTexture(e){return this.disposeVideoTexture(e),this.videoStreams[e].obj&&this.videoStreams[e].player?this.pxlUtils.getVideoTexture(this.videoStreams[e].obj):null}disposeVideoTexture(e,t=null){this.videoStreams[e].videoTexture&&(this.videoStreams[e].videoTexture.dispose(),this.videoStreams[e].videoTexture=null,this.videoStreams[e].checkScreens=t??!0)}resetvideoTexture(e){this.setScreensToStreams(0,e),this.disposeVideoTexture(e,!1);let t=this.getTexture(e);this.videoStreams[e].videoTexture=t,this.videoStreams[e].checkScreens=!0}resetEnvSettings(e){this.resetvideoTexture(e),this.videoStreams[e].checkScreens=!1}hlsPreflight(){let e=window.MediaSource||window.WebKitMediaSource;e=e&&typeof e.isTypeSupported=="function"&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');let t=window.SourceBuffer||window.WebKitSourceBuffer;return t=!t||t.prototype&&typeof t.prototype.appendBuffer=="function"&&typeof t.prototype.remove=="function",e&&t}buildVideoStream(e,t=!1){let i=this,s=this.videoStreams[e].obj;typeof IVSPlayer<"u"?this.buildIvsPlayer(e):this.pxlFile.loadScript("https://player.live-video.net/1.1.2/amazon-ivs-player.min.js").then(()=>{i.buildIvsPlayer(e)})}buildVhsPlayer(e){if(videojs){this.videoStreams[e].mode=1;let t=this.videoStreams[e].obj,i=videojs(t,{controls:!1,autoplay:!0,preload:"auto"});videojs.log.level("off"),videojs.log.level("error"),this.videoStreams[e].player=i;let s=this;i.ready(function(){let a=i.play();a&&a.catch(function(l){document.addEventListener("click",function n(v){let p=i.networkState();(p==1||p==2)&&(i.play(),document.removeEventListener("click",n))})})}),i.on("play",a=>{s.ready(e)}),i.on("loadedmetadata",a=>{s.start(e)}),i.on("waiting",a=>{let l=i.currentTime(),n=i.duration();n>0&&setTimeout(()=>{let v=i.currentTime(),p=i.duration();l==v&&n==p&&this.pxlFile.urlExists(i.src()).then(f=>{f||s.ended(e)}).catch(()=>{s.ended(e)})},500)}),i.on("ended",a=>{s.ended(e)}),i.on("error",a=>{s.ended(e)})}else this.buildFallbackPlayer(e)}buildHlsPlayer(e){if(Hls.isSupported()){this.videoStreams[e].mode=4;let i=this.videoStreams[e].obj;var t=new Hls({enableWorker:!0,liveBackBufferLength:900,startLevel:2,stretchShortVideoTrack:!0,nudgeOffset:.5,fragLoadingTimeOut:2e3});t.attachMedia(i),this.videoStreams[e].player=t;let s=this;t.on(Hls.Events.MEDIA_ATTACHED,function(a){s.ready(e)}),t.on(Hls.Events.BUFFER_CREATED,function(a){}),t.on(Hls.Events.MANIFEST_PARSED,function(a){s.start(e)}),t.streamController.onMediaEnded=function(a){s.ended(e)},t.on(Hls.Events.ERROR,function(a,l){l.fatal?s.ended(e):(l.details=="bufferFullError"||l.details=="bufferAppendingError")&&t.recoverMediaError()}),t.on(Hls.Events.STREAM_STATE_TRANSITION,function(a,l){l.previousState=="PARSED"&&l.nextState=="IDLE"&&(s.videoStreams[e].activeLevel=t.currentLevel,t.currentLevel==-1&&setTimeout(()=>{t.currentLevel==-1&&t.recoverMediaError()},1e3))})}else this.buildFallbackPlayer(e)}sendModMessage(e,t,i){let s={msg:e,init:t,data:i};this.pxlEnv.pxlSocket.sendErrorMsg(s)}buildFallbackPlayer(e){let t=this.videoStreams[e].obj;this.videoStreams[e].mode=2,t.setAttribute("src",this.videoStreams[e].urlStatus?this.videoStreams[e].url:"");let i=this;t.addEventListener("error",function(s,a){}),t.addEventListener("loadedmetadata",function(s){i.ready(e)}),t.addEventListener("canplay",function(s){t.play(),i.start(e)}),t.addEventListener("suspend",function(s){i.ended(e)}),t.addEventListener("ended",function(s){i.ended(e)})}buildIvsPlayer(e){if(IVSPlayer.isPlayerSupported){this.videoStreams[e].mode=3;let t=this.videoStreams[e].obj,i=IVSPlayer.create();i.attachHTMLVideoElement(t),i.setAutoplay(!0),i.setLogLevel("Error"),this.videoStreams[e].loading=!0,this.videoStreams[e].player=i,this.videoStreams[e].checkScreens=!1;let s=this,a=IVSPlayer.PlayerState;i.addEventListener(a.READY,n=>{s.ready(e)}),i.addEventListener(a.PLAYING,n=>{s.start(e)}),i.addEventListener(a.ENDED,n=>{s.ended(e)});let l=IVSPlayer.PlayerEventType;i.addEventListener(l.ERROR,(n,v,p,f)=>{s.ended(e,n)})}else this.buildFallbackPlayer(e)}unload(e){}load(e,t){let i=this.videoStreams[e];if(i)switch(i.mode){case 1:this.videoStreams[e].url=t,i.player.src({type:"application/x-mpegURL",src:t}),i.player.load();break;case 2:i.obj.setAttribute("src",t),i.obj.load();break;case 3:i.player.load(t);break;case 4:i.player&&this.destroyPlayer(e,!0),i.player.attachMedia(this.videoStreams[e].obj);var s=decodeURIComponent(t);i.player.loadSource(s);break;default:break}}newStream(e){}canUnmute(e){let t=!0;return this.videoStreams[e]&&(t=this.videoStreams[e].active),t}setMuted(e,t=!1){let i=this.videoStreams[e];i&&(i.obj.muted=t)}setVolume(e,t){let i=this.videoStreams[e];i&&(i.obj.volume=t)}getStreamState(e){let t=!1,i=this.videoStreams[e];switch(i.mode){case 1:t=!i.obj.paused;break;case 2:t=!i.obj.paused;break;case 3:let s=i.player;t=s.core.isLoaded&&!s.core.paused;break;case 4:t=i.player.streamController.lastCurrentTime!=null;break;default:break}return t}checkVideoError(e){let t=this.videoStreams[e];t.active&&t.mode==4&&(t.obj.videoWidth==0?!t.obj.paused&&t.player.streamController.lastCurrentTime>10&&(this.destroyPlayer(e),this.videoStreams[e].active=!1,this.checkForDjStream=!0,this.buildHlsPlayer(e),this.videoStreams[e].player.recoverMediaError()):t.obj.webkitDecodedFrameCount==t.prevFrame?(this.videoStreams[e].prevFrameCount+=1,this.videoStreams[e].prevFrameCount>50&&(console.log("trigger level drop"),this.videoStreams[e].prevFrameCount=0,this.videoStreams[e].player.recoverMediaError(),this.videoStreams[e].player.nextLoadLevel=Math.max(0,this.videoStreams[e].player.currentLevel-1),this.videoStreams[e].player.recoverMediaError())):(this.videoStreams[e].prevFrame=t.obj.webkitDecodedFrameCount,this.videoStreams[e].player.nextLevel!=-1&&(this.videoStreams[e].player.nextLevel=-1),this.videoStreams[e].prevFrameCount=0))}ready(e){this.videoStreams[e].loading=!1,this.videoStreams[e].obj.volume=0,this.videoStreams[e].activeLevel=1}start(e){let t=this.videoStreams[e];if(t.active)return;let i=t.obj,s=t.player,a=this.getStreamState(e);this.videoStreams[e].active=a,this.videoStreams[e].videoTexture||(this.videoStreams[e].videoTexture=this.getTexture(e)),this.pxlAudio.isVideoObject=!0,this.videoStreamFailCount=0,this.checkForDjStream=!1,this.videoStreams[e].checkScreens=!0,this.pxlAudio.djAudioObj.byScript=!0;let l=this.pxlAudio.djAudioObj;l.children[0].setAttribute("src",""),l.pause(),l.muted=!0,setTimeout(()=>{l.load(),setTimeout(()=>{this.pxlAudio.roomAudioStopped&&(t.obj.volume=this.pxlAudio.djAudioVolume),t.obj.muted=this.pxlAudio.djMuted||!this.pxlAudio.roomAudioStopped,t.obj.click()},20)},20)}restart(e){let t=!1,i=this.videoStreams[e].player,s=this.videoStreams[e].obj;switch(this.videoStreams[e].mode){case 1:case 2:t=!s.paused;break;case 3:t=i.core.isLoaded&&!i.core.paused;break;case 4:t=i.currentLevel>-1;break;default:break}this.videoStreams[e].active=t,this.videoStreams[e].checkScreens=t}ended(e){let t=this.videoStreams[e];if(!t.active)return;this.destroyPlayer(e);let i=t.mode==4?!t.player.liveTracker.atLiveEdge():!t.obj.paused;this.videoStreams[e].active=i,this.checkForDjStream=this.videoAudioEvent.dj,this.pxlAudio.isVideoObject=!1,this.videoStreams[e].checkScreens=!0,this.pxlAudio.roomAudioStopped&&(t.obj.volume=0),t.obj.pause(),t.obj.muted=!0,this.pxlAudio.djAudioObj.byScript=!0;let s=this.pxlAudio.djAudioObj,a=s.children[0];a.getAttribute("src")==""&&(a.setAttribute("src",this.pxlAudio.djUrlSource),s.load(),s.muted=this.pxlAudio.djMuted||!this.pxlAudio.roomAudioStopped,s.play()),this.videoStreams[e].prevCheck=this.pxlUtils.curMS+15,this.videoStreams[e].activeLevel=-1}error(e,t){let i;typeof t=="object"?i=t.type:i=t,["ErrorNetworkIO","networkError","mediaError","internalException"].includes(i)&&(tmpThis.videoStreams[e].active=!1)}destroyPlayer(e,t=!1){this.videoStreams[e].mode==4&&(this.videoStreams[e].active||t)&&this.videoStreams[e].player&&this.videoStreams[e].player.detachMedia()}async streamState(e){let t=!0,i=!0;this.videoStreams.dj&&(t=!this.videoStreams.dj.active),this.videoStreams.performer&&(i=!this.videoStreams.performer.active),e.hasOwnProperty("dj")==!0&&t&&(this.checkForDjStream=e.dj&&this.videoAudioEvent.dj),e.hasOwnProperty("performer")==!0&&i&&(this.checkForPerformerStream=e.performer&&this.videoAudioEvent.performer)}async checkVideoStreamStatus(e){let t=this.videoStreams[e];t&&this.checkForDjStream&&this.posted&&!t.active&&t.prevCheck+t.delayCheck<this.pxlUtils.curMS&&(this.checkForDjStream=!1,this.pxlFile.urlExists(this.videoStreams[e].url).then(i=>{this.videoStreams[e].urlStatus=i,this.checkForDjStream=!i,this.videoStreams[e].prevCheck=this.pxlUtils.curMS,this.videoStreams[e].checkResolve=this.pxlUtils.curMS,i?this.load(e,this.videoStreams[e].url):this.videoStreamFailCount+=1}).catch(i=>{console.log(i),this.videoStreamFailCount+=1,this.checkForDjStream=!0,this.videoStreams[e].prevCheck=this.pxlUtils.curMS}))}}});var Oo={};U(Oo,{animTextureFrag:()=>Ms,animTextureVert:()=>Ts});function Ts(){let r=A();return r+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,r}function Ms(){let r=A();return r+=`
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
  }`,r}var As=k(()=>{N()});var Go={};U(Go,{clickableBevelFrag:()=>Ls,clickableBevelVert:()=>Rs});function Rs(){let r=A();return r+=`
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
      
    }`,r}function Ls(){let r=A();return r+=`
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
    }`,r}var ks=k(()=>{N()});var Wo={};U(Wo,{portalBaseFrag:()=>Is,portalBaseVert:()=>Us});function Us(){let r=A();return r+=`
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
            
        }`,r}function Is(){let r=A();return r+=`
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
        }`,r}var Bs=k(()=>{N()});var ri={};U(ri,{animTextureFrag:()=>Ms,animTextureVert:()=>Ts,clickableBevelFrag:()=>Ls,clickableBevelVert:()=>Rs,portalBaseFrag:()=>Is,portalBaseVert:()=>Us});var Hs=k(()=>{As();ks();Bs()});var zo={};U(zo,{animatedDuelNoiseFrag:()=>ou});function ou(){let r=A();return r+=`
    uniform sampler2D glowTexture;
    uniform sampler2D cloudNoise;
    uniform vec2 time;
    varying vec2 vUv;
    
    void main(){
        vec3 glowCd=texture2D(glowTexture,vUv).rgb;
        
        vec2 cUv=(vUv-.5);
        vec2 rUv=cUv;
        float rate=3.;
        rUv+=normalize(rUv)*(sin(time.x*.2+rUv*2.)*1.0+3.2)*.1;
        rUv=( rUv*vec2(1.5,1.5)*(length(vUv)-1.5*cUv) );
        vec3 noiseCd=texture2D(cloudNoise,rUv).rgb;
            
        vec4 Cd=vec4(1.0, 0.0, 0.0, 1.0);
        
        noiseCd.rgb=noiseCd.rgb-.5;
        Cd.a=glowCd.r*glowCd.r*.1+glowCd.g*.05+(noiseCd.r*noiseCd.g*noiseCd.b)*(1.-glowCd.b)*5.*glowCd.g;

        gl_FragColor=Cd;
    }`,r}var No=k(()=>{N()});var Qo={};U(Qo,{dArrowFrag:()=>nu,dArrowVert:()=>lu});function lu(){let r=A();return r+=`
    uniform vec2 time;
    
    attribute vec3 color;
    
    varying vec3 wPos;
    varying vec3 vCd;
    varying vec2 vUv;
    varying float vDist;
    varying float vAnim;
    
    #define PI 3.14159265358979
    void main(){
        float rate=3.4;
        vCd=color;
        
        vUv=uv;
        vec3 pos=position;
        wPos=pos*vec3(.005,.01,.005)- fract(time.x*.04);
        
        float animSin= cos(time.x*rate-(color.r)*6.);
        float animTime=animSin*.3+.7;
        animTime*=animTime;
        
        vDist=min(1., length( pos-cameraPosition )*.003);
        float gMath=.3;
        float yOff= gMath*animTime*6.-2.;
        pos.y+=yOff+vDist*7.;
        vDist= max(0., 1.0-vDist*(.6+color.b));

        vAnim=(animSin*.4+.6)*.8+vDist;
             
        vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*modelViewPosition;
    }`,r}function nu(){let r=A();return r+=`
    uniform sampler2D cloudNoise;
    uniform vec2 time;
    varying vec3 wPos;
    varying vec3 vCd;
    varying vec2 vUv;
    varying float vDist;
    varying float vAnim;
    
    void main(){
        vec3 noiseCd =texture2D(cloudNoise,fract(vUv+wPos.xz+wPos.y)).rgb;

        vec4 Cd=vec4( .35, .35, .7, 1.);
        Cd.rgb+=noiseCd*.2-.05;
        Cd+=Cd*vDist+vCd.g-vCd.b;
        Cd.a=vCd.g*vAnim*min(1., length(noiseCd)*.8*vDist);
        gl_FragColor=Cd;
    }`,r}var Ko=k(()=>{N()});var Xo={};U(Xo,{scrollingEntranceFrag:()=>cu,scrollingTextureFrag:()=>hu,scrollingTextureVert:()=>uu});function uu(){let r=A();return r+=`
  uniform vec2 time;
  uniform float speed;
  varying vec2 vUv;
  void main(){
    vUv=uv+vec2(time.x*speed, 0.0);
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,r}function hu(){let r=A();return r+=`
  uniform sampler2D scrollTexture;
  varying vec2 vUv;
  
  void main(){
    vec4 Cd=texture2D(scrollTexture,vUv);
    gl_FragColor=Cd;
  }`,r}function cu(){let r=A();return r+=`
  uniform sampler2D scrollTexture;
  varying vec2 vUv;
  
  void main(){
        vec2 rUv=gl_FrontFacing ? vUv : vUv * vec2(-1.0, 1.0);
        vec4 Cd=texture2D(scrollTexture,rUv);
        Cd.a=Cd.r;
        Cd.rgb=vec3(1.0,.0,.0)*(gl_FrontFacing ? 1.0 : .25);
        gl_FragColor=Cd;
  }`,r}var Yo=k(()=>{N()});var Jo={};U(Jo,{userScreenFrag:()=>pu,userScreenVert:()=>du});function du(){let r=A();return r+=`
  uniform sampler2D videoFeed;
  varying vec2 vUv;
  varying float depth;
  void main(){
    vUv=uv;
    
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    mat4 distMat=projectionMatrix;
    depth=max(0.0,1.0-length(distMat[3].xyz-(modelViewMatrix*vec4(position,1.0)).xyz)*.001);
    
    gl_Position = projectionMatrix*modelViewPosition;
  }`,r}function pu(){let r=A();return r+=`
  uniform vec2 time;
  uniform float seed;
  uniform float alpha;
  uniform float camExists;
  uniform vec2 scale;
  uniform vec2 ratio;
  uniform vec2 boostPerc;
  varying vec2 vUv;
  varying float depth;
  uniform sampler2D videoFeed;
  uniform sampler2D cloudNoise;
  float pi=3.14159265358979;
  
  void main(){
    float dotMult=5.0+2.0*depth;
    vec4 Cd=texture2D(videoFeed,vUv)*camExists + vec4(.45,.45,.45,1.0)*(1.0-camExists);
    //vec2 noiseUV = vec2(fract(vUv.x*.3*ratio.x+vUv.y*0.1),fract(vUv.y*5.0+time.x+seed*1.124+sin(vUv.y*2.0*ratio.y+time.x*fract(seed)+vUv.x*1.50+seed*1.52)*.5));
    vec2 noiseUV = vec2(fract(vUv.x*.3*ratio.x+vUv.y*0.1),fract(vUv.y*5.0+time.x+seed*1.124+sin(vUv.y*2.0*ratio.y+seed*1.52)*.5));
    vec4 noiseCd=texture2D(cloudNoise, noiseUV );

    float boost=boostPerc.y;
    //float ledDots=((sin(vUv.x*scale.x*ratio.x*dotMult)*.2+.8)*(sin(vUv.y*scale.y*ratio.y*dotMult)*.2+.8) + (noiseCd.r-.5)*(.6)+.3);
    float ledDots=((sin(vUv.x*scale.x*ratio.x*dotMult)*.2+.8) + (noiseCd.r-.5)*(.6)+.3);
    vec3 colorBoost=1.0-(1.0-Cd.rgb)*(1.0-Cd.rgb);
    //Cd.rgb=Cd.rgb*(1.0-boost) + (colorBoost)*(vec3(ledDots*.5+.6))*boost;
    float distToCenter=min(1.0, length(vUv-.5)*1.1);
    distToCenter=distToCenter*distToCenter;
    Cd.rgb*=max(0.0, 1.0-(distToCenter*(1.0-camExists*.5)*.5+.5) );
  Cd.rgb*=(boostPerc.x)+(ledDots*(min(1.0, depth))+(1.0-depth))*boost;
    //Cd.rgb*=(depth)+(1.0-depth);
  Cd.a*=(ledDots*(depth)+(1.0-depth))*alpha;
    //Cd.a*=alpha+(1.0-depth);
    //Cd.a*=length(Cd.rgb)*.333333;
    gl_FragColor=Cd;
  }`,r}var $o=k(()=>{N()});var Zo={};U(Zo,{wallBarrierFrag:()=>fu,wallBarrierVert:()=>mu});function mu(){let r=A();return r+=`
    uniform vec2 time;
    uniform sampler2D cloudNoise;
    varying vec3 worldPos;
    varying vec2 vUv;
    varying float vCenter;
    void main(){
        vUv=uv;
        
        float rate=.02;
        float scalar=.00008;
        vec2 nUV=position.xy*scalar+vec2(time.x*rate*.1+position.z*scalar, time.x*rate*.1+position.z*scalar);
        vec4 noiseCd=( (texture2D(cloudNoise,nUV)-.5) + (texture2D(cloudNoise,nUV)-.5) );
        
        vec3 pos=position+(noiseCd.rgb )*vec3( 45.0, 10.0, 45.0);
        
        vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
        vec4 toPos=projectionMatrix*modelViewPosition;
        worldPos=toPos.xyz;
        gl_Position = toPos;
        vCenter=length(worldPos.xyz* vec3(cos(time.x+worldPos.x), 1.0, sin(time.x+worldPos.z)) )*.05+.05;
    }`,r}function fu(){let r=A();return r+=`
    uniform sampler2D glowTexture;
    uniform vec3 glowColor;
    uniform vec2 time;
    uniform float freq;
    uniform float intensity;
    varying vec3 worldPos;
    varying vec2 vUv;
    varying float vCenter;
    
    void main(){
        float posDist=length(worldPos);
        
        float dist=min(1.0, max(0.0,posDist*0.001));
        dist=1.0-dist;
        
        vec4 Cd=texture2D(glowTexture, vUv);
        Cd.rgb=vec3(.05,.5,.85)+Cd.r*intensity;
        Cd.a=(Cd.r*1.2)*intensity*dist;
        gl_FragColor=Cd;
    }`,r}var qo=k(()=>{N()});var el={};U(el,{defaultVert:()=>Fs});function Fs(){let r=A();return r+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,r}var Vs=k(()=>{N()});var tl={};U(tl,{defaultShiftVert:()=>_s});function _s(){let r=A();return r+=`
  varying vec2 vUv;
  varying vec2 vUvShift;
  void main(){
    vUv=uv;
        vUvShift=uv-.5;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,r}var js=k(()=>{N()});var il={};U(il,{camPosVert:()=>Os});function Os(){let r=A();return r+=`
  varying vec3 camPos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    camPos=(modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
  }`,r}var Gs=k(()=>{N()});var sl={};U(sl,{discardFrag:()=>Ws});function Ws(){let r=A();return r+=`
  void main(){
    discard;
    gl_FragColor=vec4(.0,.0,.0,0.0);
  }`,r}var zs=k(()=>{N()});var ai={};U(ai,{camPosVert:()=>Os,defaultShiftVert:()=>_s,defaultVert:()=>Fs,discardFrag:()=>Ws,shaderHeader:()=>A});var Ns=k(()=>{Vs();js();Gs();zs();N()});var rl={};U(rl,{itemBaseFrag:()=>Ks,itemBaseVert:()=>Qs});function Qs(){let r=A();return r+=`
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
      
    }`,r}function Ks(){let r=A();return r+=`
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
    }`,r}var Xs=k(()=>{N()});var al={};U(al,{itemFrag:()=>Js,itemVert:()=>Ys,itemZoomFrag:()=>$s});function Ys(){let r=A();return r+=`
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
      
    }`,r}function Js(){let r=A();return r+=`
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
    }`,r}function $s(){let r=A();return r+=`
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
    }`,r}var Zs=k(()=>{N()});var ol={};U(ol,{pxlPrincipledFrag:()=>er,pxlPrincipledVert:()=>qs});import*as dt from"./three.module.js";function qs(r=!1){let e=`
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
    `;return r&&(e+=`
        ${dt.ShaderChunk.common}
        ${dt.ShaderChunk.shadowmap_pars_vertex}
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
        
        `,r&&(e+=`
            ${dt.ShaderChunk.worldpos_vertex}
            ${dt.ShaderChunk.shadowmap_vertex}
          `),e+=`
    }`,e}function er(r,e,t,i,s,a){let l=!1,n=1;r.hasOwnProperty("Specular")&&r.Specular>0&&(l=!0,n=r.Specular);let v=!1;r.PointColor&&(v=!0);let p=!0,f="1.0";r.hasOwnProperty("SurfaceNoise")&&(r.SurfaceNoise%1==0&&(f=r.SurfaceNoise+".0"),f=="0.0"&&(p=!1));let m=`
        `;if(e||(m+="uniform sampler2D dTexture;"),m+=`
    
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
    `,i&&(m+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),s&&(m+=`
      
      ${dt.ShaderChunk.packing}
      
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
      `),m+=`
    void main(){
      `,v)m+="vec3 vertCd = vCd;";else if(e){let S=R=>R%1==0?R+".0":R+"",b=S(e.r),P=S(e.g),E=S(e.b);m+=`vec3 vertCd = vec3( ${b}, ${P}, ${E} ) ;`}else m+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";m+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,t&&(m+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let C="",x="",g="";if(p&&(f!="1.0"&&(C="*"+f),m+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,x=`+detailMult * (shadowInf*.5+.5) ${C}`,g=`(detailMult+.5) ${C}`),i&&(m+=`
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
                `,l&&(m+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),m+=`
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
          `,l&&(m+=`
            Cd.rgb += vertCd * specular * ${n};
            `)),s){m+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let S=0;S<a;++S)m+=`
                i=${S};
                lShadow = getPointShadow( pointShadowMap[${S}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.75, pointLightShadows[i].shadowRadius*1.65, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;m+=`
            shadowInf = shadowInf;
            Cd.rgb*=shadowInf ${x} ;
            `,p&&(m+=`
              #else
                Cd.rgb*=${g};
              `),m+=`
          #endif
          `}else p&&(m+=`
            Cd.rgb*=${g};
            `);return m+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,m}var tr=k(()=>{});var oi={};U(oi,{itemBaseFrag:()=>Ks,itemBaseVert:()=>Qs,itemFrag:()=>Js,itemVert:()=>Ys,itemZoomFrag:()=>$s,pxlPrincipledFrag:()=>er,pxlPrincipledVert:()=>qs});var ir=k(()=>{Xs();Zs();tr()});var ll={};U(ll,{boostColorsFrag:()=>gu,boostColorsVert:()=>vu});function vu(){let r=A();return r+=`
    varying vec2 vUv;
    
    void main(){
            vUv=uv;
      vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix*modelViewPosition;
    }`,r}function gu(){let r=A();return r+=`
    uniform sampler2D tDiffuse;
    uniform vec3 intensity;
    uniform vec3 boost;
    varying vec2 vUv;
    
    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv);
            vec3 boost=Cd.rgb*boost.x* ( 1.0- max(0.0, min(1.0, dot( normalize(Cd.rgb-.5), normalize(vec3(.5)) )*2.0)) );

            
            Cd.rgb*=intensity.x;
            Cd.rgb+=boost* length(Cd.rgb);
      gl_FragColor = Cd;
    }`,r}var nl=k(()=>{N()});var ul={};U(ul,{pxlPrincipledFrag:()=>yu,pxlPrincipledVert:()=>xu});function xu(){return`
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
    
    ${THREE.ShaderChunk.common}
    ${THREE.ShaderChunk.shadowmap_pars_vertex}
    
    
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
        
        ${THREE.ShaderChunk.worldpos_vertex}
        ${THREE.ShaderChunk.shadowmap_vertex}
        
    }`}function yu(){return`
        
    uniform sampler2D noiseTexture;
    uniform sampler2D detailTexture;
        
    uniform vec2 time;
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
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    ${THREE.ShaderChunk.packing}
    
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
    
    // uniform sampler2D pointShadowMap[ 4 ];
    // varying vec4 vPointShadowCoord[ 4 ];
    // struct PointLightShadow {
      // float shadowBias;
      // float shadowNormalBias;
      // float shadowRadius;
      // vec2 shadowMapSize;
      // float shadowCameraNear;
      // float shadowCameraFar;
    // };
    // uniform PointLightShadow pointLightShadows[ 4 ];
    
        vec3 directionToLight( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar  ){
            vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
            vec3 lightToPosition = shadowCoord.xyz;
        float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
         dp += shadowBias;
            vec3 bd3D = normalize( lightToPosition );
            vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
            return texture2D( pointShadowMap[1], cubeToUV( bd3D, texelSize.y )).rgb;
        }
        
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer*.1 ); 
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5)*.3;
        vec3 vertCd= vCd ;
        vec3 lightCd = vec3(1., .3,.3) * (sin(nCd.r + nCd.g+nCd.b )*.3+1.);

        
        
        vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightVector = normalize(vPos - pointLights[i].position);
            vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[i].color;
            lightInf = mix( lightInf, 1.0-(1.0-lightInf)*(1.0-lightInf), .2);
            lightInf *=  1.0-min(1.0, length(vPos - pointLights[i].position) * pointLights[i].decay*.01 );
            lights.rgb += lightInf;
        }
        
        //vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightInf= max(0.0, dot(directionalLights[i].direction, vN)*.65+.35) * directionalLights[i].color;
            lights.rgb += lightInf;
        }
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
        Cd.rgb=  mix( Cd.rgb, fogColor, depth );
        
        Cd.rgb *= lights.rgb;
        //Cd.rgb = vShading;
        
        
        pos = vLocalPos*.1;
        uv.x = fract( pos.x + pos.z );
        uv.y = fract( pos.y ); 
        nCd=(texture2D(noiseTexture,uv).rgb-.5)*.3;
        vec2 detailUv = vec2( fract((vLocalPos.x + vLocalN.z + nCd.r*1.2)*.01), 0.0);
        detailUv.y =  fract((vLocalPos.y + nCd.y*2.)*.01);
        float detailMult = (texture2D(detailTexture,detailUv).r-.2)*3.0;
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        int i = 2;
        float lShadow = getPointShadow( pointShadowMap[2], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias, pointLightShadows[i].shadowRadius, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
        shadowInf = max( lShadow, shadowInf);
        
        i=3;
        lShadow = getPointShadow( pointShadowMap[3], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias, pointLightShadows[i].shadowRadius, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
        shadowInf = max( lShadow, shadowInf);
        shadowInf = shadowInf*.85+.15;
        Cd.rgb*=shadowInf+detailMult*shadowInf;
        
        
        
        gl_FragColor=Cd;
    }`}var hl=k(()=>{});var cl={};U(cl,{triplanarRolloffFrag:()=>Cu,triplanarRolloffVert:()=>bu});function bu(){let r=A();return r+=`
    varying vec3 vCamPos;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying float vDist;
    
    void main(){
        vec4 modelPosition=modelMatrix * vec4(position, 1.0);
        vec4 modelViewPosition=viewMatrix * modelPosition;
        
        vec3 pWorldDelta=projectionMatrix[3].xyz;
        vCamPos=cameraPosition;
        
        mat4 mRot=modelMatrix ;
        mRot[3]=vec4(.0, .0, .0, 1.0);
        vec3 worldNormal= normalize(( mRot * vec4( normal, 1.0)).xyz);
        vWorldNormal=worldNormal;
        
        vDist = (1.0-min(1.,length(pWorldDelta)*.004))*.3;
        
        vWorldPos=modelPosition.xyz;
        gl_Position = projectionMatrix*modelViewPosition;
    }`,r}function Cu(){let r=A();return r+=`
    uniform float bloomBoost;
    varying vec3 vCamPos;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying float vDist;
    
    void main(){
        vec4 Cd=vec4( 1.);
        vec3 camPos=normalize(vCamPos-vWorldPos);
        float wDot=max(0., dot(camPos, vWorldNormal));
        wDot=1.0-(1.0-wDot)*(1.0-wDot);
        wDot*=.8;
        
        vec3 distCd=vec3(.7,.0,.0)* mix( vDist, .3, bloomBoost);
        vec3 faceCd=vec3(.5,.0,.0);
        vec3 backCd=vec3(.4,.2,.2);
        
        Cd.rgb=mix( backCd, faceCd, wDot)+(distCd+distCd)*(1.0-bloomBoost*.5)*wDot;
        
        Cd.rgb*=Cd.rgb*wDot+.05*bloomBoost;
        Cd.rgb*=(1.-bloomBoost*.33);
        gl_FragColor=Cd;
    }`,r}var dl=k(()=>{N()});var pl={};U(pl,{worldPositionFrag:()=>rr,worldPositionVert:()=>sr});function sr(){let r=A();return r+=`
  varying vec3 pos;
  
  void main(){
    vec3 transformed = vec3( position );
      vec4 mvPosition = modelViewMatrix  * vec4( transformed, 1.0 );
    pos=((projectionMatrix * modelMatrix * vec4( transformed-vec3(0.0,0.0,-500.0), 1.0 )).xyz*.0001)*.5+.5;
    
    gl_Position = projectionMatrix * mvPosition;
  }`,r}function rr(){let r=A();return r=`#include <packing>
  `+r,r+=`
    uniform sampler2D diffuse;
    uniform sampler2D depth;
    uniform float camNear;
    uniform float camFar;
    varying vec3 pos;
    
    void main() {
      
      vec4 Cd=vec4( pos, 1.0 );
      gl_FragColor = Cd;
    }`,r}var ar=k(()=>{N()});var ml={};U(ml,{glowPassPostProcess:()=>or});function or(){let r=A();return r+=`
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
    }`,r}var lr=k(()=>{N()});var fl={};U(fl,{textureStorePass:()=>nr});function nr(){let r=A();return r+=`
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
    }`,r}var ur=k(()=>{N()});var vl={};U(vl,{compLayersPostProcess:()=>hr});function hr(){let r="";return r+=`
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
    }`,r}var cr=k(()=>{});var gl={};U(gl,{boxAntiAliasPass:()=>dr,crossAntiAliasPass:()=>pr});function dr(){let r=A();return r+=`
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
    }`,r}function pr(){let r=A();return r+=`
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
    }`,r}var mr=k(()=>{N()});var xl={};U(xl,{directionalBlurPass:()=>fr,mixBlurShaderPass:()=>vr});function fr(r,e,t,i){let s=A();return s+=`
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
              curCd = texture2D(${r},curUV);
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
        }`,s}function vr(){let r=A();return r+=`
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
        }`,r}var gr=k(()=>{N()});var yl={};U(yl,{motionBlurPostProcess:()=>xr});function xr(r,e){let t=A();return t+=`
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
      
      vec4 bloomAdd=vec4( directionalBlur(bloomCd.rgb, rDiffuse, vUv, blurDir, deltaDir, `+r.y+"*"+(e?"3.0":"5.0")+`*(1.5)*blurDist, .5)*(1.0+exposure*.4), 1.0);
      vec4 Cd= bloomAdd* ( 0.50+bloomCd)*exposure;//getTexture( rDiffuse ) + bloomAdd;//+ vec4( 1.0 ) * bloomCd + bloomAdd;
      //Cd.a=bloomAdd.a-bloomCd.a;
      
      Cd.a=1.0;
      gl_FragColor = Cd;
      
    }`,t}var yr=k(()=>{N()});var bl={};U(bl,{chroAberPostProcess:()=>br});function br(){let r=A();return r+=`
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
    }`,r}var Cr=k(()=>{N()});var Cl={};U(Cl,{lKingPostProcess:()=>Sr});function Sr(){let r=A();return r+=`
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
    }`,r}var Pr=k(()=>{N()});var Sl={};U(Sl,{iZoomPostProcess:()=>wr});function wr(){let r=A();return r+=`
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
    }`,r}var Er=k(()=>{N()});var Pl={};U(Pl,{sFieldPostProcessFrag:()=>Tr,sFieldPostProcessVert:()=>Dr});function Dr(){let r=A();return r+=`
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
    }`,r}function Tr(){let r=A();return r+=`
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
        }`,r}var Mr=k(()=>{N()});var wl={};U(wl,{warpPostProcess:()=>Ar});function Ar(){let r=A();return r+=`
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
    }`,r}var Rr=k(()=>{N()});var El={};U(El,{finalOverlayBlendedShader:()=>Su,finalOverlayHeavyShader:()=>Lr,finalOverlayShader:()=>kr,finalOverlaySlimShader:()=>Ur});function Su(){let r=A();return r+=`
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


    void main() {
      vec4 Cd=texture2D(rDiffuse,vUv);
      vec4 depth=texture2D(sceneDepth,vUv);
      
      vec3 worldPos = texture2D(scenePos,vUv).rgb;
      float wpDist = worldPos.x+worldPos.z*2.0;
      float t = -time.x*.003;
      
      vec2 noiseUV = vec2( ((t*.5+wpDist*.60)), (worldPos.y*.7+t*.25 ));
      vec3 noiseBaseCd = texture2D(noiseTexture,noiseUV).rgb;
      noiseUV=vec2( ((t*.3+wpDist*.55)), (worldPos.x*.5+t*.35 ));
      noiseBaseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,t)).g;
      noiseUV=vec2( ((t*1.2+wpDist*.83)), (worldPos.y+t*.15  ));
      noiseBaseCd.b=texture2D(noiseTexture,noiseUV).b;
      float baseDist=noiseBaseCd.r;
      vec3 noiseCd;
      
      /*float dist = 5.0;
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
      float curDist;
      vec3 minCd = worldPos;
      float minDist = baseDist;
      for(int s=0; s<runCount; ++s){
        curUV = baseUV+runDir[s]*(resUV*dist);
        curCd = texture2D(scenePos,curUV).rgb;
        wpDist = curCd.x+curCd.z*2.0;
        noiseUV=vec2( ((t*.5+wpDist*.60)), (curCd.y*.7+t*.25 ));
        noiseCd=texture2D(noiseTexture,noiseUV).rgb;
        curDist = noiseCd.r;
        if(curDist>minDist){
          minDist = curDist;
          minCd = curCd;
        }
      }
      
      worldPos= minCd;
      wpDist = worldPos.x+worldPos.z*2.0;
      
      noiseCd.r=baseDist;//minDist;
      noiseUV=vec2( ((t*.3+wpDist*.55)), (worldPos.x*.5+t*.35 ));
      noiseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,t)).g;
      noiseUV=vec2( ((t*1.2+wpDist*.83)), (worldPos.y+t*.15  ));
      noiseCd.b=texture2D(noiseTexture,noiseUV).b;
      noiseCd=mix( noiseCd, noiseBaseCd, step( length(noiseCd), length(noiseBaseCd) ) );
      */
      noiseCd=noiseBaseCd;
      
      float mult=noiseCd.x*noiseCd.y*noiseCd.z*1.3;
      //mult*=max(0.0, 1.0-depth.x) + min(1.0,(1.0-depth.z)*1.8) * max(0.0, (worldPos.y-0.10)*2.0);
      mult*=max(0.0, (worldPos.y-0.04)*1.65) * fogMult.x;
      
      vec4 bloomCd=texture2D(bloomTexture,vUv);
      
      Cd.rgb= mix( Cd.rgb*(1.0-depth.z), vec3(mult), mult )-mult*.5;
      
      float cdMult=max(0.0, 1.0-length(Cd.rgb)*.65);
      Cd.rgb+= bloomCd.rgb* cdMult;// * step(blmDepth, bDepth);
      Cd.rgb*=exposure;
      //Cd.rgb=vec3(mult);

            // Proximity Draw Over
            float yProxMult= 1.0-min(1.0, max(0.0, (worldPos.y-.5 )*1000.));
            float proxWarp=max(0., cos(( vUv.x-.5 )*1.6*ratio)*.0013);
            float prox=(depth.x);
            prox= min(1.0, (-prox*.5+.48645+proxWarp)*400.);
            prox=(1.0-prox)*yProxMult*step(.0,prox);
            //prox*=prox;
            vec3 proxCd = (vec3(.6,.6,0.35)*prox)*.75;//*max(0., 1.0-length(Cd.rgb)) ;
            proxCd *= proxCd * proximityMult.x ;
            Cd.rgb+=proxCd;
            
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`,r}function Lr(){let r=A();return r+=`
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
    }`,r}function kr(){let r=A();return r+=`
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
        }`,r}function Ur(){let r=A();return r+=`
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
        }`,r}var Ir=k(()=>{N()});var li={};U(li,{boxAntiAliasPass:()=>dr,chroAberPostProcess:()=>br,compLayersPostProcess:()=>hr,crossAntiAliasPass:()=>pr,directionalBlurPass:()=>fr,finalOverlayHeavyShader:()=>Lr,finalOverlayShader:()=>kr,finalOverlaySlimShader:()=>Ur,glowPassPostProcess:()=>or,iZoomPostProcess:()=>wr,lKingPostProcess:()=>Sr,mixBlurShaderPass:()=>vr,motionBlurPostProcess:()=>xr,sFieldPostProcessFrag:()=>Tr,sFieldPostProcessVert:()=>Dr,textureStorePass:()=>nr,warpPostProcess:()=>Ar,worldPositionFrag:()=>rr,worldPositionVert:()=>sr});var Br=k(()=>{ar();lr();ur();cr();mr();gr();yr();Cr();Pr();Er();Mr();Rr();Ir()});var Dl={};U(Dl,{depthPostProcess:()=>Pu});function Pu(){let r=A();return r+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D sceneDepth;
    uniform sampler2D maskDepthA;
    uniform sampler2D maskDepthB;
    varying vec2 vUv;

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv);
      
      float sceneDepth=texture2D(sceneDepth,vUv).r;
      float maDepth=texture2D(maskDepthA,vUv).r;
      float mbDepth=texture2D(maskDepthB,vUv).r;
      //float blend=max(maDepth,mbDepth);
      float blend=min(maDepth,mbDepth);
      //Cd.rgb*=step(blend, sceneDepth);
      Cd.rgb*=step(sceneDepth, blend);
      gl_FragColor = Cd;
    }`,r}var Tl=k(()=>{N()});var Ml={};U(Ml,{mediaToggleFrag:()=>Eu,mediaToggleVert:()=>wu});function wu(){let r=A();return r+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`,r}function Eu(){let r=A();return r+=`
  void main(){
    discard;
    gl_FragColor=vec4(.0,.0,.0,0.0);
  }`,r}var Al=k(()=>{N()});var Rl={};U(Rl,{bgScreenFrag:()=>Fr,bgScreenVert:()=>Hr});function Hr(){let r=A();return r+=`
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
    }`,r}function Fr(){let r=A();return r+=`
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
    }`,r}var Vr=k(()=>{N()});var Ll={};U(Ll,{skyObjectFrag:()=>jr,skyObjectVert:()=>_r});function _r(){let r=A();return r+=`
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
        
    }`,r}function jr(r=ze.OFF){let e=A();return e+=`     
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
        
  `,r==ze.VAPOR&&(e+=`
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

    `),e+=`
        gl_FragColor=Cd;
    }`,e}var Or=k(()=>{N();ue()});var ni={};U(ni,{bgScreenFrag:()=>Fr,bgScreenVert:()=>Hr,skyObjectFrag:()=>jr,skyObjectVert:()=>_r});var Gr=k(()=>{Vr();Or()});var kl={};U(kl,{hdrRoomFrag:()=>Tu,hdrRoomVert:()=>Du});function Du(){let r=A();return r+=`
        varying vec3 localPos;
        varying vec4 camPos;
        
        void main(){
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            camPos=(projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));
            float rot=0.16;
            localPos=position+vec3(position.z*rot-2.5, 0.0, position.x*-rot);
            vec4 ident=vec4(0.0,0.0,0.0,1.0);
            gl_Position = projectionMatrix * mvPosition;
    }`,r}function Tu(){let r=A();return r+=`
        uniform sampler2D hdrMap;
        uniform vec2 camRotPitch;
        uniform float ratioU;
        uniform float cdMult;
        varying vec3 localPos;
        varying vec4 camPos;
        
        
        void main() {
            vec2 screenUV=(vec2(camPos.xy/camPos.w))* vec2(ratioU,1.0)*.5;
            screenUV+=screenUV*vec2(0.3,-.2);
            
            vec2 hdrUV=vec2( screenUV.x*.25+camRotPitch.x, screenUV.y*.25+.5+ camRotPitch.y*.4 );
            vec4 Cd=texture2D(hdrMap,hdrUV);
            Cd.rgb*=cdMult;
            
            float gridSize=7.209;
            float gridThickness=0.15;
            float grid=min(1.0, step( gridThickness, mod(localPos.x, gridSize))*step( gridThickness,mod(localPos.z,gridSize)) + camPos.w*.022 ) ;
            grid=min(1.0, grid+max(0.0,localPos.y-5.0) );
            Cd.rgb= mix(Cd.rgb*Cd.rgb, Cd.rgb, grid);
            gl_FragColor = Cd;
    }`,r}var Ul=k(()=>{N()});var Il={};U(Il,{skyPlaneFrag:()=>Au,skyPlaneVert:()=>Mu});function Mu(){let r=A();return r+=`
        varying vec3 localPos;
        varying vec4 camPos;
        
        void main(){
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            camPos=(projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));
            float rot=0.16;
            localPos=position+vec3(position.z*rot-2.5, 0.0, position.x*-rot);
            vec4 ident=vec4(0.0,0.0,0.0,1.0);
            gl_Position = projectionMatrix * mvPosition;
    }`,r}function Au(){let r=A();return r+=`
        uniform sampler2D tDiffuse;
        uniform vec2 camRotPitch;
        uniform float ratioU;
        uniform float cdMult;
        varying vec3 localPos;
        varying vec4 camPos;
        
        
        void main() {
            vec2 screenUV=(vec2(camPos.xy/camPos.w))* vec2(ratioU,1.0)*.5;
            screenUV+=screenUV*vec2(0.3,-.2);
            
            vec2 hdrUV=vec2( screenUV.x*.25+camRotPitch.x, screenUV.y*.25+.5+ camRotPitch.y*.4 );
            vec4 Cd=texture2D(tDiffuse,hdrUV);
            Cd.rgb*=cdMult;
            
            float gridSize=7.209;
            float gridThickness=0.15;
            float grid=min(1.0, step( gridThickness, mod(localPos.x, gridSize))*step( gridThickness,mod(localPos.z,gridSize)) + camPos.w*.022 ) ;
            grid=min(1.0, grid+max(0.0,localPos.y-5.0) );
            Cd.rgb= mix(Cd.rgb*Cd.rgb, Cd.rgb, grid);
            gl_FragColor = Cd;
    }`,r}var Bl=k(()=>{N()});var Hl={};U(Hl,{skyPlaneNormalFrag:()=>Lu,skyPlaneNormalVert:()=>Ru});function Ru(){let r=A();return r+=`    
    uniform vec2 resUV;
    
    varying vec4 camPos;
    varying vec3 normPos;
    varying vec2 vUv;
    
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    
    void main(){
        vUv=uv;
        
        mat4 pvMat=projectionMatrix * viewMatrix;
        pvMat[3] = vec4(.0, .0, .0, 1.0);
        mat3 pvRot = inverse( mat3( pvMat ) );
        vCamNormal= pvRot * vec3( 0.0,0.0,1.0);
        vCamNormal.y = dot( vCamNormal, vec3(0.0,1.0,0.0) );
        vWorldNormal= normalize( pvRot[2] *vec3(1.,0.,1.));
        vWorldCross= normalize( pvRot[0]*vec3(1.,0.,1.));
        
        
        vec3 pos = position;
        vec4 modelViewPosition=vec4(vec3(uv*2.0-1.0,1.0), 1.0);
        gl_Position = modelViewPosition;
        
        normPos = normalize( vec3(modelViewPosition.xy*vec2(-1.0, .645), .0) );
        camPos = projectionMatrix*viewMatrix*modelViewPosition;
        
        mat4 pMat =  viewMatrix;
        pMat[3] = vec4(0.0,0.0,0.0,1.0);
    }`,r}function Lu(){let r=A();return r+=`
    uniform sampler2D diffuse;
    uniform sampler2D envDiffuse;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float camNear;
    uniform float camFar;
    uniform vec2 resUV;

    //uniform vec2 intensity;
    uniform float rate;
    uniform float fogIntensity;
    uniform float fogDensity;
    uniform vec3 skyColor;
    uniform vec3 fogColor;
    varying vec2 vUv;
    varying vec4 camPos;
    varying vec3 normPos;
    
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    
    #define PI 3.14159265358979
    #define IPI 0.3183098861837907
    #define ITAU 0.15915494309189535

    float convertDepth( float zDepth ){
        float viewZ = ( camNear * camFar ) / ( ( camFar - camNear ) * zDepth - camFar );
        return ( viewZ + camNear ) / ( camNear - camFar );
    }
    
    void main(){
        vec2 uv=vUv;
        vec2 camRotUv=vUv;
        vec4 Cd=texture2D(diffuse,uv);
        
        vec2 nUv = fract( vec2(vUv.x, vUv.y - time.x*.02) );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = fract( nUv+noiseCd.rg*(noiseCd.b-.5));
        noiseCd = texture2D( noiseTexture, nUv ).rgb;
        noiseCd.rg = noiseCd.rg*2.0-1.0;
        float zFrag = texture2D( envDiffuse, vUv ).x;
        float depth = convertDepth( zFrag );

        
        float baseDepth = texture2D(envDiffuse,vUv).x;
        float stencil = baseDepth==1.0 ? 1.0 : 0.0;
        
        float reachDepth = 0.0 ;
        const int runCount=5;
        float runDir[runCount];
        runDir[0]= -1.0;
        runDir[1]= -2.0;
        runDir[2]= -3.0;
        runDir[3]= -4.0;
        runDir[4]= -5.0;
        vec2 baseUV=vUv;
        vec2 curUV=vec2(0.0);
        float curDepth=0.0;
        float curPerc = 0.0;
        float dist = 5.0;
        float blendStep = .3;
        float blend = 0.0;
        float uvShift=0.0;
        for(int s=0; s<5; ++s){
            uvShift = mix(noiseCd.r, noiseCd.g, noiseCd.b)*10.0;
            curUV = baseUV+vec2(0.0,resUV.y*runDir[s]*(dist+uvShift) );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = convertDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.0 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep*curPerc;//step( curDepth, .01 );
            dist+=5.0;
        }
        reachDepth *= blend*stencil;
        depth = reachDepth;
        Cd.rgb *= 1.0-depth;
        
        Cd.rgb = vec3(camRotUv.x,0.0,0.0);
        
        
        //float mixVal= min(1.0, (1.-(vWorldNormal.y*.5+.5)));
        //Cd.rgb= mix(vec3(0.0, .20, 1.0)+vWorldNormal.y, vec3(.0, .0, .0), mixVal);
        //Cd.rgb=mix( vec3(.0), Cd.rgb, vWorldNormal.y );
        //Cd.rgb=vec3(mix( vWorldNormal, vWorldCross, step(.4, vUv.x)));
        //Cd.rgb=vec3(mix( vWorldCross, Cd.rgb, step(vUv.y,.9)));
        
        vec2 screenUV=(vec2(camPos.xy/camPos.w));//* vec2(ratioU,1.0)*.5;
        //screenUV+=normPos.xy;
        
        vec2 hdrUV=vec2( screenUV.x*.25, screenUV.y*.25+.5 );
        Cd.rgb=vec3(screenUV, 0.0);//vec3(hdrUV+normPos.xy,0.0);//texture2D(hdrMap,hdrUV);
        
        //Cd.rgb = normPos;
        Cd.rgb = vec3(screenUV.xy*.5+.5,0.0);
        Cd.rgb = vec3(camPos.xy*.5+.5,0.0);
        
        vec3 camYawVec = normalize( vCamNormal * vec3(1.0,0.0,1.0));
        float camYaw = atan( camYawVec.x, camYawVec.z )*ITAU+.5;
        camYaw = fract(camYaw+normPos.x*.2);
        
        float camPitch = max(0.0,(1.0-vCamNormal.y)+normPos.y*.15);
        camPitch = ((max(0.0,(vCamNormal.y))-.5)*.8+.5)+normPos.y*.15;
        //camPitch = acos( camPitch*.92 + normPos.y*.15 ) * .5;
        Cd.rgb = vec3( 0.0, camPitch, 0.0);
        Cd=texture2D(diffuse, vec2( camYaw, camPitch ) );
        
        
        gl_FragColor=Cd;
        //float fogMult= min(1.0, max(0.0, 1.0+worldPos.y*fogDensity));
        // float depth = gl_FragCoord.z / gl_FragCoord.w;
        // float fogFactor = smoothstep( 1000.0, 12000.0, depth )*(1.0-uv.y);
        // gl_FragColor.rgb = mix( Cd.rgb, fogColor, fogFactor*fogIntensity )*fogMult;
    }`,r}var Fl=k(()=>{N()});var Vl={};U(Vl,{skyTextureFrag:()=>Uu,skyTextureVert:()=>ku});function ku(){let r=A();return r+=`
  varying vec3 worldPos;
  varying vec3 pos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    worldPos=(projectionMatrix*modelMatrix*vec4(position,1.)).xyz;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    pos=gl_Position.xyz;
  }`,r}function Uu(){let r=A();return r+=`
  uniform sampler2D diffuse;
  uniform vec2 time;
  //uniform vec2 intensity;
  uniform float rate;
    uniform float fogIntensity;
    uniform float fogDensity;
    uniform vec3 skyColor;
    uniform vec3 fogColor;
  varying vec2 vUv;
  varying vec3 worldPos;
  float pi=3.14159265358979;
    
  
  void main(){
    vec2 uv=vUv+vec2(time.x*rate,0.0);
    uv.x=mod(uv.x,1.0);
    vec4 Cd=texture2D(diffuse,uv);
    Cd.rgb=Cd.rgb*skyColor;
    Cd.rgb*=(min(1.0,worldPos.y*.0001));
    //Cd.rgb*=intensity.y;
    gl_FragColor=Cd;
        float fogMult= min(1.0, max(0.0, 1.0+worldPos.y*fogDensity));
        
              float depth = gl_FragCoord.z / gl_FragCoord.w;
              float fogFactor = smoothstep( 1000.0, 12000.0, depth )*(1.0-uv.y);
              gl_FragColor.rgb = mix( Cd.rgb, fogColor, fogFactor*fogIntensity )*fogMult;

        
  }`,r}var _l=k(()=>{N()});var jl={};U(jl,{pxlShaders:()=>Wr});var Wr,zr=k(()=>{Ns();Hs();ir();es();Br();Gr();Wr={animated:ri,core:ai,objects:oi,particles:ti,rendering:li,scene:ni}});var Gl=pt(()=>{var Nr=class extends AudioWorkletProcessor{process(e,t,i){return t[0].forEach(a=>{for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1}),!0}};registerProcessor("white-noise-processor",Nr);var Qr=process.playbackTime,Iu=document.getElementById("threshold"),Bu=Iu.value*.01*256,Kr=new Uint8Array(analyser.frequencyBinCount);analyser.getByteFrequencyData(Kr);var kt=new Array(frequencyChannels).fill(0),Ol=0;for(let r=0;r<Kr.length;++r){let e=Kr[r];if(determineAmbientNoise||(e=Math.max(0,e-ambientAgregate[r]),e=e>Bu?e:0),kt[r]=e,Ol+=e,r>=frequencyChannels-1)break}var ui=new Uint8Array(analyser.frequencyBinCount);analyser.getByteTimeDomainData(ui);drawFreqArray("audioCanvas_freq",kt);drawTimeArray("audioCanvas_time",ui);voiceRecording&&(detectVoice?Ol>0&&(document.getElementById("sayTheWord").innerText="... Listening ...",detectVoice=!1,voiceKillTime=Qr+voiceTimeLength,drawTrainingCanvas(kt,ui)):Qr>voiceKillTime?stopRecord():drawTrainingCanvas(kt,ui));determineAmbientNoise&&(Qr>voiceKillTime?Hu():ambientDataArr.push(kt));function Hu(){determineAmbientNoise=!1;let r=ambientDataArr.length,e=new Array(ambientDataArr[0].length).fill(0),t=new Array(ambientDataArr[0].length).fill(0);for(let i=0;i<r;++i)for(let s=0;s<ambientDataArr[i].length;++s){let a=ambientDataArr[i][s];e[s]+=a,t[s]=Math.max(t[s],a)}for(let i=0;i<e.length;++i)e[i]/=r;ambientAgregate=e,ambientAgregate=t,document.getElementById("ambientButton").value="Determine Ambiant Noise"}});var Wl=pt(()=>{importScripts("../../libs/three/three.min.js");var F={active:!0,dirKey:[0,0,0,0],dirKeyPressed:[0,0,0,0],dirKeyDown:!1,shift:0,jumpKey:!1,keyDownCount:[0,0,0],lowGrav:0,gravityActive:!1,gravitySourceActive:!1,gravityRate:0,gravityMax:9.8*3,gravityEaseOutRate:.8,jumpStartTime:0,cameraJumpActive:!1,cameraAllowJump:!0,cameraJumpHeight:0,cameraJumpInitImpulse:[2,12],cameraJumpImpulse:0,cameraJumpImpulseEaseOut:.85,cameraMaxJumpHold:[2,7],cameraJumpInAir:!1,standingHeight:16,standingHeightGravInfluence:0,standingMaxGravityOffset:10,maxStepHeight:10,jumpIter:null,fpsCap:null,fpsBenchIter:null},Xr={init:()=>{J.step()},activeToggle:r=>{F.active=r,r&&J.step()},0:r=>{J.dirKey(0,r)},1:r=>{J.dirKey(1,r)},2:r=>{J.dirKey(2,r)},3:r=>{J.dirKey(3,r)},shift:r=>{F.shift=r?7:0},space:r=>{J.camJumpKey(r)},focus:()=>{J.moveStop()},warp:r=>{J.moveStop()},fpsBench:(r,e=0,t=0)=>{self.postMessage({frameBench:typeof requestAnimationFrame=="function"})},setDirKeyDown:()=>{J.setDirKeyDown()},resetGravity:()=>{J.resetGravity()},jumpLanding:()=>{J.jumpLanding()},killJumpImpulse:()=>{J.killJumpImpulse()}},J={step:()=>{if(F.gravityActive||F.cameraJumpImpulse>0){let r=!1,e={type:"update"};F.gravityActive?F.cameraJumpActive?J.camJump():(J.updateGravity(),r=!0,e.gravityRate=F.gravityRate,e.standingHeightGravInfluence=F.standingHeightGravInfluence):F.cameraJumpImpulse>0&&(J.killJumpImpulse(),e.cameraJumpImpulse=F.cameraJumpImpulse),r&&self.postMessage(e)}F.active&&setTimeout(()=>{J.step()},16)},getTime:()=>new Date().getTime()*.001,dirKey:(r,e)=>{F.dirKey[r]=e,J.setDirKeyDown()},setDirKeyDown:()=>{Xr.dirKey.includes(1)||(F.dirKeyDown=!1)},moveStop:()=>{F.dirKeyPressed=[0,0,0,0],F.dirKeyDown=!1,F.shift=0,F.jumpKey=!1,F.jumpStartTime=0},moveCalc:()=>{},updateGravity:()=>{if(F.gravityRate=Math.max(0,F.gravityRate-F.cameraJumpImpulse*.2),F.gravityActive&&(F.gravityRate=Math.min(F.gravityMax,F.gravityRate+F.gravityMax*F.jumpStartTime)),F.gravityRate!=0){let r=1;F.gravityActive?r=F.gravityRate*.08:(F.gravityRate=F.gravityRate>.01?F.gravityRate*F.gravityEaseOutRate:0,r=F.gravityRate),r=Math.min(1,r),F.standingHeightGravInfluence=Math.min(1,F.gravityRate*1.2/F.gravityMax)*F.standingMaxGravityOffset}},camJumpKey:(r=!1)=>{r?(J.camInitJump(),self.postMessage("start jump")):(J.cameraJumpActive&&(J.cameraJumpActive=!1),F.jumpStartTime=0,J.cameraAllowJump=!0,self.postMessage("end jump"))},camInitJump:()=>{!F.gravityActive&&F.cameraAllowJump&&(F.keyDownCount[2]=J.getTime(),F.jumpStartTime=J.getTime(),F.cameraAllowJump=!1,F.cameraJumpActive=!0,F.cameraJumpInAir=!0,F.gravityActive=!0,F.gravityRate=0,F.cameraJumpImpulse=F.cameraJumpInitImpulse[F.lowGrav],F.objectJumpLock&&(F.objectJumpLock=!1,J.nearestFloorHit=J.nearestFloorHitPrev))},camJump:()=>{let e=J.getTime()-F.keyDownCount[2],t=1,i=Math.min(1,e/F.cameraMaxJumpHold[F.lowGrav]);if(F.cameraJumpActive){let s=i;s==1?F.cameraJumpActive=!1:(s=(1-s)*(1-s),s=s*(s*.5+.5)),F.cameraJumpImpulse+=Math.max(0,s)}F.cameraJumpImpulse*=1-i,i==1&&(F.cameraJumpActive=!1)},resetGravity:()=>{F.gravityRate=0,J.jumpLanding()},jumpLanding:()=>{F.gravityActive=!1,F.cameraJumpImpulse=0,F.cameraJumpInAir=!1,F.cameraJumpActive=!1,F.jumpStartTime=0},killJumpImpulse:()=>{let r=F.cameraJumpImpulse*F.cameraJumpImpulseEaseOut;F.cameraJumpImpulse=r>.1?r:0,F.cameraJumpImpulse==0&&(F.jumpStartTime=0)}};self.onmessage=function(r){let e=r.data;if(e instanceof ArrayBuffer)return;let{type:t,key:i,state:s}=e,a=t=="key"?i:t;Xr.hasOwnProperty(a)?Xr[a](s):self.postMessage({type:"err",data:r})}});var zl=pt(()=>{self.onmessage=function(r){let{type:e,data:t}=r.data;if(e==="urlExists")Vu(t);else{let i={type:e,data:t};self.postMessage(i),self.close()}};function Fu(){return XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}function Vu(r){let e=Fu();e.open("HEAD",r,!1),e.send();let t={type:"urlExists",data:e.status<400};self.postMessage(t),self.close()}});var Nl=pt(()=>{importScripts("../js/PLYLoader.js");onmessage=function(r){var e=new THREE.PLYLoader;e.load(r.data,function(t){t.computeVertexNormals();let i=t.getAttribute("position").array.buffer;self.postMessage({buffer:i},[i])})}});import*as G from"./three.module.js";vi();Xt();Li();ki();Ui();Ii();Bi();Hi();ue();Vi();_i();Yt();it();Gi();import*as I from"./three.module.js";var _u=Bt({"../libs/three/FBXLoader.js":()=>Promise.resolve().then(()=>(Ri(),Ea)),"../libs/three/NURBSCurve.js":()=>Promise.resolve().then(()=>(Di(),ga)),"../libs/three/NURBSUtils.js":()=>Promise.resolve().then(()=>(Ei(),ma)),"../libs/three/inflate.module.min.js":()=>Promise.resolve().then(()=>(wi(),pa)),"../libs/three/postprocessing/BloomPass.js":()=>Promise.resolve().then(()=>(to(),eo)),"../libs/three/postprocessing/EffectComposer.js":()=>Promise.resolve().then(()=>(Vi(),Oa)),"../libs/three/postprocessing/MaskPass.js":()=>Promise.resolve().then(()=>(Jt(),Va)),"../libs/three/postprocessing/Pass.js":()=>Promise.resolve().then(()=>(Fe(),Ba)),"../libs/three/postprocessing/RenderPass.js":()=>Promise.resolve().then(()=>(_i(),Ga)),"../libs/three/postprocessing/ShaderPass.js":()=>Promise.resolve().then(()=>(Yt(),Fa)),"../libs/three/postprocessing/UnrealBloomPass.js":()=>Promise.resolve().then(()=>(Gi(),Ka)),"../libs/three/shaders/ConvolutionShader.js":()=>Promise.resolve().then(()=>(Wi(),Xa)),"../libs/three/shaders/CopyShader.js":()=>Promise.resolve().then(()=>(it(),Ia)),"../libs/three/shaders/LuminosityHighPassShader.js":()=>Promise.resolve().then(()=>(ji(),Wa)),"../libs/three/three.module.js":()=>import("./three.module.js"),"../pxlNav/cam/AutoCamera.js":()=>Promise.resolve().then(()=>(zi(),so)),"../pxlNav/cam/Camera.js":()=>Promise.resolve().then(()=>(Ni(),ro)),"../pxlNav/core/Animation.js":()=>Promise.resolve().then(()=>(Hi(),Ua)),"../pxlNav/core/CookieManager.js":()=>Promise.resolve().then(()=>(ki(),Ma)),"../pxlNav/core/Device.js":()=>Promise.resolve().then(()=>(Bi(),ka)),"../pxlNav/core/FileIO.js":()=>Promise.resolve().then(()=>(Xt(),Da)),"../pxlNav/core/QualityController.js":()=>Promise.resolve().then(()=>(Li(),Ta)),"../pxlNav/core/Timer.js":()=>Promise.resolve().then(()=>(Ui(),Aa)),"../pxlNav/core/Types.js":()=>Promise.resolve().then(()=>(ue(),Zr)),"../pxlNav/core/User.js":()=>Promise.resolve().then(()=>(Ii(),Ra)),"../pxlNav/core/Utils.js":()=>Promise.resolve().then(()=>(vi(),qr)),"../pxlNav/effects/animations.js":()=>Promise.resolve().then(()=>(lo(),oo)),"../pxlNav/effects/animations/CountDownParticles.js":()=>Promise.resolve().then(()=>(Ki(),ao)),"../pxlNav/effects/particles.js":()=>Promise.resolve().then(()=>(xo(),go)),"../pxlNav/effects/particles/BillowSmoke.js":()=>Promise.resolve().then(()=>(Xi(),po)),"../pxlNav/effects/particles/EmberWisps.js":()=>Promise.resolve().then(()=>(Yi(),fo)),"../pxlNav/effects/particles/FloatingDust.js":()=>Promise.resolve().then(()=>(Ji(),vo)),"../pxlNav/effects/particles/ParticleBase.js":()=>Promise.resolve().then(()=>(St(),ho)),"../pxlNav/effects/particles/shaders.js":()=>Promise.resolve().then(()=>(es(),ti)),"../pxlNav/effects/particles/shaders/CountDownShader.js":()=>Promise.resolve().then(()=>(Co(),bo)),"../pxlNav/effects/particles/shaders/EmberWisps.js":()=>Promise.resolve().then(()=>(ei(),mo)),"../pxlNav/effects/particles/shaders/FloatingDust.js":()=>Promise.resolve().then(()=>(Ct(),uo)),"../pxlNav/effects/particles/shaders/Smoke.js":()=>Promise.resolve().then(()=>(qt(),co)),"../pxlNav/effects/particles/shaders/SnowConfettiShader.js":()=>Promise.resolve().then(()=>(Po(),So)),"../pxlNav/effects/particles/shaders/SnowShader.js":()=>Promise.resolve().then(()=>(qi(),yo)),"../pxlNav/extensions/ExtensionBase.js":()=>Promise.resolve().then(()=>(nt(),ts)),"../pxlNav/extensions/Extensions.js":()=>Promise.resolve().then(()=>(si(),fs)),"../pxlNav/extensions/Networking.js":()=>Promise.resolve().then(()=>(ss(),is)),"../pxlNav/extensions/PoseEngine.js":()=>Promise.resolve().then(()=>(os(),as)),"../pxlNav/extensions/PoseEngine/MediaPipe.js":()=>Promise.resolve().then(()=>(us(),ns)),"../pxlNav/extensions/PoseEngine/PoseEngine_worker.js":()=>Promise.resolve().then(()=>We(hs())),"../pxlNav/extensions/WebCam.js":()=>Promise.resolve().then(()=>(ps(),ds)),"../pxlNav/gui/GUI.js":()=>Promise.resolve().then(()=>(ys(),To)),"../pxlNav/gui/GUIBase.js":()=>Promise.resolve().then(()=>(gs(),Eo)),"../pxlNav/gui/Help.js":()=>Promise.resolve().then(()=>(Ao(),Mo)),"../pxlNav/gui/Info.js":()=>Promise.resolve().then(()=>(Lo(),Ro)),"../pxlNav/gui/Settings.js":()=>Promise.resolve().then(()=>(Uo(),ko)),"../pxlNav/gui/ShaderEditor.js":()=>Promise.resolve().then(()=>(xs(),Do)),"../pxlNav/gui/User.js":()=>Promise.resolve().then(()=>(Bo(),Io)),"../pxlNav/gui/guiUtils/svgUtils.js":()=>Promise.resolve().then(()=>(vs(),wo)),"../pxlNav/media/Audio.js":()=>Promise.resolve().then(()=>(ws(),Ho)),"../pxlNav/media/MusicUtils.js":()=>Promise.resolve().then(()=>(Vo(),Fo)),"../pxlNav/media/Video.js":()=>Promise.resolve().then(()=>(jo(),_o)),"../pxlNav/shaders/animated.js":()=>Promise.resolve().then(()=>(Hs(),ri)),"../pxlNav/shaders/animated/AnimatedDuelNoise.js":()=>Promise.resolve().then(()=>(No(),zo)),"../pxlNav/shaders/animated/AnimatedTexture.js":()=>Promise.resolve().then(()=>(As(),Oo)),"../pxlNav/shaders/animated/ClickableBevel.js":()=>Promise.resolve().then(()=>(ks(),Go)),"../pxlNav/shaders/animated/DArrowShaders.js":()=>Promise.resolve().then(()=>(Ko(),Qo)),"../pxlNav/shaders/animated/PortalBaseShader.js":()=>Promise.resolve().then(()=>(Bs(),Wo)),"../pxlNav/shaders/animated/ScrollTextureShader.js":()=>Promise.resolve().then(()=>(Yo(),Xo)),"../pxlNav/shaders/animated/UserScreenShader.js":()=>Promise.resolve().then(()=>($o(),Jo)),"../pxlNav/shaders/animated/WallBarrierShader.js":()=>Promise.resolve().then(()=>(qo(),Zo)),"../pxlNav/shaders/core.js":()=>Promise.resolve().then(()=>(Ns(),ai)),"../pxlNav/shaders/core/CamPosVert.js":()=>Promise.resolve().then(()=>(Gs(),il)),"../pxlNav/shaders/core/Default.js":()=>Promise.resolve().then(()=>(Vs(),el)),"../pxlNav/shaders/core/DefaultShift.js":()=>Promise.resolve().then(()=>(js(),tl)),"../pxlNav/shaders/core/DiscardFrag.js":()=>Promise.resolve().then(()=>(zs(),sl)),"../pxlNav/shaders/core/ShaderHeader.js":()=>Promise.resolve().then(()=>(N(),no)),"../pxlNav/shaders/objects.js":()=>Promise.resolve().then(()=>(ir(),oi)),"../pxlNav/shaders/objects/BoostColors.js":()=>Promise.resolve().then(()=>(nl(),ll)),"../pxlNav/shaders/objects/ItemBaseShader.js":()=>Promise.resolve().then(()=>(Xs(),rl)),"../pxlNav/shaders/objects/ItemShader.js":()=>Promise.resolve().then(()=>(Zs(),al)),"../pxlNav/shaders/objects/PxlPrincipled.js":()=>Promise.resolve().then(()=>(tr(),ol)),"../pxlNav/shaders/objects/PxlPrincipled_old.js":()=>Promise.resolve().then(()=>(hl(),ul)),"../pxlNav/shaders/objects/TriplanarRolloff.js":()=>Promise.resolve().then(()=>(dl(),cl)),"../pxlNav/shaders/rendering.js":()=>Promise.resolve().then(()=>(Br(),li)),"../pxlNav/shaders/rendering/AntiAliasingPostProcess.js":()=>Promise.resolve().then(()=>(mr(),gl)),"../pxlNav/shaders/rendering/ChroAberPostProcess.js":()=>Promise.resolve().then(()=>(Cr(),bl)),"../pxlNav/shaders/rendering/CompLayersPostProcess.js":()=>Promise.resolve().then(()=>(cr(),vl)),"../pxlNav/shaders/rendering/DepthPostProcess.js":()=>Promise.resolve().then(()=>(Tl(),Dl)),"../pxlNav/shaders/rendering/DirectionalBlurPass.js":()=>Promise.resolve().then(()=>(gr(),xl)),"../pxlNav/shaders/rendering/FinalOverlayPostProcess.js":()=>Promise.resolve().then(()=>(Ir(),El)),"../pxlNav/shaders/rendering/GlowPassShader.js":()=>Promise.resolve().then(()=>(lr(),ml)),"../pxlNav/shaders/rendering/InfiniteZoomPostProcess.js":()=>Promise.resolve().then(()=>(Er(),Sl)),"../pxlNav/shaders/rendering/LKingPostProcess.js":()=>Promise.resolve().then(()=>(Pr(),Cl)),"../pxlNav/shaders/rendering/MediaToggle.js":()=>Promise.resolve().then(()=>(Al(),Ml)),"../pxlNav/shaders/rendering/MotionBlurPostProcess.js":()=>Promise.resolve().then(()=>(yr(),yl)),"../pxlNav/shaders/rendering/StarFieldPostProcess.js":()=>Promise.resolve().then(()=>(Mr(),Pl)),"../pxlNav/shaders/rendering/TextureStorePass.js":()=>Promise.resolve().then(()=>(ur(),fl)),"../pxlNav/shaders/rendering/WarpPostProcess.js":()=>Promise.resolve().then(()=>(Rr(),wl)),"../pxlNav/shaders/rendering/WorldPositionPass.js":()=>Promise.resolve().then(()=>(ar(),pl)),"../pxlNav/shaders/scene.js":()=>Promise.resolve().then(()=>(Gr(),ni)),"../pxlNav/shaders/scene/BGScreen.js":()=>Promise.resolve().then(()=>(Vr(),Rl)),"../pxlNav/shaders/scene/HDRRoom.js":()=>Promise.resolve().then(()=>(Ul(),kl)),"../pxlNav/shaders/scene/SkyObject.js":()=>Promise.resolve().then(()=>(Or(),Ll)),"../pxlNav/shaders/scene/SkyPlane.js":()=>Promise.resolve().then(()=>(Bl(),Il)),"../pxlNav/shaders/scene/SkyPlaneNormal.js":()=>Promise.resolve().then(()=>(Fl(),Hl)),"../pxlNav/shaders/scene/SkyTexture.js":()=>Promise.resolve().then(()=>(_l(),Vl)),"../pxlNav/shaders/shaders.js":()=>Promise.resolve().then(()=>(zr(),jl)),"../pxlNav/webWorkers/AudioProcessor.js":()=>Promise.resolve().then(()=>We(Gl())),"../pxlNav/webWorkers/CameraWorker.js":()=>Promise.resolve().then(()=>We(Wl())),"../pxlNav/webWorkers/FileWorkerIO.js":()=>Promise.resolve().then(()=>We(zl())),"../pxlNav/webWorkers/webWorkers.js":()=>Promise.resolve().then(()=>We(Nl()))});var Ut=class{constructor(e,t="Default",i){this.engine=null,this.scene=null,this.parentGroupList={},this.parentGroupList[t]=[],this.parentNameList=[],this.options=e,this.prevRenderMS=0,this.nextRenderMS=0,this.fps=i?30:60,this.renderInterval=1/this.fps;let s="Default";this.options.hasOwnProperty("pxlRoomName")?s=this.options.pxlRoomName:s=t,this.pxlRoomAbsRoot=s;let a=s.split("/");a.splice(0,1),a=a.join("/"),this.pxlRoomLclRoot=s,this.options.hasOwnProperty("pxlRoomRoot")?this.pxlRoomLclRoot=this.options.pxlRoomRoot:this.pxlRoomLclRoot="./"+s.split("/").pop(),this.mainRoom=t,this.bootRoom=t,this.bootLocation=null,this.currentRoom=t,this.roomNameList=[t],this.roomSubList={},this.roomSceneList={},this.roomSceneList[t]=this,this.roomPostGuiCalls=[],this.jmaCheckConnection=!1,this.checkContext=0,this.activeContext=!1,this.warpPortalTextures={},this.warpZoneRenderTarget=null,this.currentAudioZone=0,this.pxlUtils=null,this.pxlTimer=null,this.pxlAnim=null,this.pxlAutoCam=null,this.pxlAudio=null,this.pxlFile=null,this.pxlVideo=null,this.pxlQuality=null,this.pxlUser=null,this.pxlShaders=null,this.pxlDevice=null,this.pxlCamera=null,this.pxlGuiDraws=null,this.renderLayerEnum={SCENE:0,PARTICLES:1,GLOW:2,SKY:3},this.cloud3dTexture=null,this.softNoiseTexture=null,this.detailNoiseTexture=null,this.chroAberUVTexture=null,this.blockAnimTexture=null,this.userScreenIntensity=new I.Vector2(0,.8),this.portaluserScreenIntensity=new I.Vector2(1,0),this.portalMtlRate=.7,this.mobile=i,this.camNear=.1,this.camFar=5e3,this.fogMult=new I.Vector2(0,0),this.fogColor=new I.Color(.07,.07,.1),this.fogColorSky=new I.Color(.1,.1,.12),this.fogExp=3e-4,this.fog=new I.FogExp2(this.fogColor,this.fogExp),this.listener=null,this.posted=!1,this.postIntro=!1,this.camLocation={},this.camInitPos=new I.Vector3(0,15,0),this.camInitLookAt=new I.Vector3(0,15,0),this.camThumbPos=new I.Vector3(0,0,0),this.camThumbLookAt=new I.Vector3(0,20,0),this.camReturnPos=new I.Vector3(0,0,0),this.camReturnLookAt=new I.Vector3(0,0,0),this.camLobbyPos=new I.Vector3(0,15,0),this.camLobbyLookAt=new I.Vector3(0,15,-100),this.pxlCamFOV=i?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=this.camNear,this.pxlCamFarClipping=this.camFar,this.groupList=[],this.geoList=[],this.geoLoadList=[],this.geoLoadListComplete=0,this.lightList=[],this.returnPortalGlowList=[],this.roomWarpVisuals={},this.proximityGeo=null,this.userAvatarGroup=new I.Group,this.warpVisualActive=!1,this.warpVisualMaxTime=[1.5,1],this.warpVisualStartTime=0,this.warpVisualFader=new I.Vector2(0,1),this.warpVisualCmd=null,this.stepShaderFuncArr=[],this.mapMotionBlurPass=null,this.mapCopyMotionBlurPass=null,this.mapOverlayHeavyPass=null,this.mapOverlayPass=null,this.mapOverlaySlimPass=null,this.mapBoxAAPass=null,this.mapCrossAAPass=null,this.mapWorldPosMaterial=null,this.mapGlowPass=null,this.mapGlowMotionBlur=null,this.mapComposer=null,this.mapComposerMotionBlur=null,this.mapComposerBloom=null,this.mapComposerGlow=null,this.chroAberrationPass=null,this.chroAberrationRoomPass=null,this.lizardKingPass=null,this.lizardKingRoomPass=null,this.mapComposerWarpPass=null,this.blurScreenMerge=null,this.pxlRenderSettings={exposure:1,mult:1,bloomStrength:.5,bloomThresh:.6,bloomRadius:.05},this.exposureShiftActive=!1,this.delayComposer=null,this.delayPass=null,this.chroAberMult=new I.Vector2(1,0),this.blurDirCur=new I.Vector2(0,0),this.blurDirPrev=new I.Vector2(0,0),this.shaderPasses={},this.roomComposer=null,this.roomRenderPass=null,this.roomBloomPass=null,this.roomGlowPass=null,this.blurComposer=null,this.glowPassMask=new I.Vector2(1,0),this.objectClickable=[],this.objectClickableObjectList={},this.clickablePrevActiveObject=null,this.promoClickable=[],this.promoClickableObjectList={},this.promoPrevActiveObject=null,this.promoClickableLinks={},this.remoteVideoTextureList=[],this.remoteUserNameList=[],this.remoteUserMediaList={},this.remoteUserVideoList=[],this.remoteUserAudioList=[],this.camScreenData={count:0,prevCount:0,checkUserCount:!0,checkVideoStatus:!0,findCamCount:()=>{},videoObjectList:[],screenGeoList:[],screenClickable:[],screenMtlUniforms:[],userDataList:[],camFindInfoList:[]},this.curUserCount=0,this.prevUserCount=0,this.emit=(l,n)=>{}}setDependencies(e){this.scene=e.scene,this.pxlUtils=e.pxlUtils,this.pxlTimer=e.pxlTimer,this.pxlAnim=e.pxlAnim,this.pxlAutoCam=e.pxlAutoCam,this.pxlAudio=e.pxlAudio,this.pxlFile=e.pxlFile,this.pxlVideo=e.pxlVideo,this.pxlQuality=e.pxlQuality,this.pxlUser=e.pxlUser,this.pxlShaders=e.pxlShaders,this.pxlDevice=e.pxlDevice,this.pxlCamera=e.pxlCamera,this.pxlGuiDraws=e.pxlGuiDraws,this.emit=e.emit.bind(e)}log(e,t=xe.INFO){this.options.verbose>xe.INFO&&console.log(e)}init(){let e=Object.keys(this.options);Object.keys(Ie).forEach(s=>{e.includes(s)||(this.options[s]=Ie[s])}),Object.keys(this.roomSubList).forEach(s=>{this.roomSubList[s].init()})}boot(){}setBootRoom(e,t){console.log(e,t),this.bootRoom=e,this.bootLocation=t}postBoot(){this.pxlGuiDraws.togglePageDisplay(),this.roomSceneList[this.bootRoom].start(),this.posted=!0}postHelpIntro(){!this.pxlDevice.mobile&&!this.pxlAutoCam.enabled?this.pxlCamera.jogServerMemory():(this.pxlCamera.colliderValid=!0,this.pxlCamera.eventCheckStatus=!0,this.pxlCamera.colliderShiftActive=!0,this.pxlCamera.nearestFloorObjName="mobile",this.pxlCamera.colliderCurObjHit="AudioTrigger_2",this.pxlCamera.proximityScaleTrigger=!0,this.exposureShiftActive=!0,this.pxlDevice.mobile||(this.pxlAudio.play(),setTimeout(()=>{this.pxlAudio.initPlay()},100))),this.postIntro=!0}start(){this.init()}step(){if(this.pxlTimer.step(),this.pxlAudio.step(),this.pxlQuality.step(),this.pxlAutoCam.step()&&this.pxlCamera.step(),this.pxlGuiDraws.step(),this.stepWarpPass(),this.pxlTimer.msRunner.x>this.checkContext&&this.activeContext){this.checkContext=this.pxlTimer.msRunner.x+1;let e=document.createElement("canvas");try{let t=!!e.getContext("webgl")}catch{this.activeContext=!0,this.pxlGuiDraws.pxlNavCanvas.style.display="none"}}this.pxlDevice.mobile&&this.exposureShiftActive}async stop(){this.setExposure(0),Object.keys(this.roomSubList).forEach(t=>{this.roomSubList[t].stop()})}loadRoom(e){return new Promise((t,i)=>{this.log("Loading Room - ",e);var s=import(`${this.pxlRoomLclRoot}/${e}/${e}.js`);s.then(a=>{let l=new a[e](e,`./js/${this.pxlRoomLclRoot}/${e}/`,this.pxlFile,this.pxlAnim,this.pxlUtils,this.pxlDevice,this,this.pxlTimer.msRunner,null,null,this.cloud3dTexture);l.camera=this.pxlCamera.camera,l.scene=new I.Scene,l.userAvatarGroup||(l.userAvatarGroup=new I.Group),l.scene.add(l.userAvatarGroup);var n={format:I.RGBAFormat,antialias:!1,sortObjects:!0,alpha:!0,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?I.HalfFloatType:I.FloatType};l.scene.renderTarget=new I.WebGLRenderTarget(this.pxlDevice.sW*this.pxlQuality.screenResPerc,this.pxlDevice.sH*this.pxlQuality.screenResPerc,n),l.scene.renderTarget.texture.format=I.RGBAFormat,l.scene.renderTarget.texture.minFilter=I.LinearFilter,l.scene.renderTarget.texture.magFilter=I.LinearFilter,l.scene.renderTarget.texture.generateMipmaps=!1,l.scene.renderTarget.depthBuffer=!0,l.scene.renderTarget.depthTexture=new I.DepthTexture(this.pxlDevice.sW*this.pxlQuality.screenResPerc,this.pxlDevice.sH*this.pxlQuality.screenResPerc),l.scene.renderTarget.depthTexture.format=I.DepthFormat,l.scene.renderTarget.depthTexture.type=I.UnsignedShortType,l.cloud3dTexture=this.cloud3dTexture,this.roomNameList.includes(e)||this.roomNameList.push(e),this.roomSceneList[e]=l,t(!0)})})}startAllRooms(){this.roomNameList.forEach(e=>{this.startRoom(this.roomSceneList[e])})}startRoom(e){e.active=!1,e.startTime=this.pxlTimer.msRunner.x}newSubRoom(e){this.roomSubList[e.roomName]=e}addToRooms(e){let t={};return this.roomNameList.forEach(i=>{let s=e.clone();this.roomSceneList[i].scene.add(s),t[i]=s}),t}addToRoomLayers(e,t=1){let i={};return this.roomNameList.forEach(s=>{let a=e.clone();this.roomSceneList[s].scene.add(a),i[s]=a,a.layers.set(t)}),i}addToRoomParents(e,t){let i={};return this.parentNameList.includes(t)||this.parentNameList.push(t),this.roomNameList.forEach(s=>{let a=e.clone();if(this.parentGroupList[s]||(this.parentGroupList[s]={}),!this.parentGroupList[s][t]){let l=new I.Group;this.parentGroupList[s][t]=l,this.roomSceneList[s].scene.add(l)}this.parentGroupList[s][t].add(a),i[s]=a}),i}buildRoomEnvironments(){this.log("Building Room Environments"),this.log(this.roomNameList);let e=[];this.roomNameList.forEach(t=>{this.roomSceneList[t].init(),this.roomSceneList[t].build&&this.roomSceneList[t].build()})}getArtistInfo(){return null}setFogHue(e=[0,0],t=[1,1]){let i=this.fog.color.getHSL(),s=[t[0]-e[0],t[1]-e[1]],a=Math.abs(Math.atan2(s[0],s[1])*.3183098861837907),l=(s[0]**2+s[1]**2)**.5/Math.max(this.pxlDevice.sW,this.pxlDevice.sH);this.fog.color.setHSL(a,l*.5+.3,l*.5),this.roomSceneList[this.currentRoom]&&this.roomSceneList[this.currentRoom].setFog&&this.roomSceneList[this.currentRoom].setFog(this.fog.color)}readShader(e=""){if(e=="script_fog"){if(this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.mapOverlayHeavyPass.enabled==!0)return this.mapOverlayHeavyPass.material;if(this.mapOverlayPass.enabled==!0)return this.mapOverlayPass.material;if(this.mapOverlaySlimPass.enabled==!0)return this.mapOverlaySlimPass.material}else{if(e=="script_dArrows")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.geoList.dArrows[0].material;if(e=="script_userScreens")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.camScreenData.screenGeoList[0].material;if(e=="script_warpZonePortals")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.returnPortalGlowList[0].material;if(e=="script_lizardking")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.lizardKingPass.material;if(e=="script_majorTom")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.pxlUser.sFieldPass.material;if(e=="script_fractalSubstrate")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.pxlUser.iZoomPass.material;if(e=="script_fractalEcho")return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.delayPass.material;{let t=e.split("_");if(t.shift(),t=t.join("_"),this.geoList[t])return this.pxlGuiDraws.guiWindows.shaderGui.currentShader=e,this.geoList[t].material}}}setShader(e,t,i){let s,a=this.pxlGuiDraws.guiWindows.shaderGui.currentShader;if(a=="script_fog")this.mapOverlayHeavyPass.enabled==!0?s=this.mapOverlayHeavyPass.material:this.mapOverlayPass.enabled==!0?s=this.mapOverlayPass.material:this.mapOverlaySlimPass.enabled==!0&&(s=this.mapOverlaySlimPass.material);else if(a=="script_dArrows"){this.geoList.dArrows.forEach(l=>{s=l.material,s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0});return}else if(a=="script_userScreens"){this.camScreenData.screenGeoList.forEach(l=>{s=l.material,s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0});return}else if(a=="script_warpZonePortals"){this.returnPortalGlowList.forEach(l=>{s=l.material,s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0});return}else if(a=="script_lizardking")s=this.lizardKingPass.material;else if(a=="script_majorTom")s=this.pxlUser.sFieldPass.material;else if(a=="script_fractalSubstrate")s=this.pxlUser.iZoomPass.material;else if(a=="script_fractalEcho")s=this.delayPass.material;else{let l=a.split("_");l.shift(),l=l.join("_"),this.geoList[l]&&(s=this.geoList[l].material)}s&&(s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0)}getAssetTexture(e,t=null,i=null){this.log("Get Internal Texture - ",e);let s=this.pxlUtils.assetRoot+e;if(!t){let n=e.split(".").pop().toLowerCase();n=="jpg"||n=="jpeg"?t=3:n=="png"&&(t=4)}return i||(i={magFilter:I.LinearFilter,minFilter:I.LinearFilter}),this.pxlUtils.loadTexture(s,t,i)}buildSnow(){let e=12e3,t=12,i=new I.BufferGeometry,s=[],a=[],l=[],n=()=>Math.floor(Math.random()*4e3%4)*.25;for(let g=0;g<e;++g)s.push(0,0,0),a.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*.5+.5),l.push(n(),n());let v=new I.Float32BufferAttribute(s,3),p=new I.Float32BufferAttribute(a,4),f=new I.Float32BufferAttribute(l,2);i.setAttribute("position",v),i.setAttribute("seeds",p),i.setAttribute("atlas",f);let m={snowTexture:{type:"t",value:this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"snow.jpg",1,{magFilter:I.NearestFilter,minFilter:I.NearestMipmapNearestFilter})},pointScale:{type:"f",value:t*this.pxlQuality.screenResPerc},intensity:{type:"f",value:1},rate:{type:"f",value:.035}};console.log(this.pxlShaders.particles);let C=this.pxlFile.pxlShaderBuilder(m,this.pxlShaders.particles.snowVert(this.mobile),this.pxlShaders.particles.snowFrag());C.side=I.DoubleSide,C.transparent=!0,C.blending=I.AdditiveBlending,C.depthTest=!0,C.depthWrite=!1;let x=new I.Points(i,C);x.sortParticles=!1,x.frustumCulled=!1,this.scene.add(x),x.layers.set(1),x.pBaseScale=t,this.geoList.snow=x}buildBackgroundObject(e={},t=null,i=null){let s=new I.PlaneBufferGeometry,a={};Object.assign(a,e),(t==null||typeof t!="string")&&(t=this.pxlShaders.scene.bgScreenVert()),(i==null||typeof i!="string")&&(i=this.pxlShaders.scene.bgScreenFrag());let l=this.pxlFile.pxlShaderBuilder(a,t,i);l.side=I.DoubleSide,l.depthTest=!0,l.depthWrite=!1;let n=new I.Mesh(s,l);return n.frustumCulled=!1,n}clickUserDetect(){if(this.roomSceneList[this.currentRoom].castRay&&this.roomSceneList[this.currentRoom].castRay(!0,this.pxlDevice.touchMouseData.button),this.pxlDevice.mobile)return;let e=null,t=new I.Vector2(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlCamera.objRaycast.setFromCamera(t,this.pxlCamera.camera);var i=[];if(this.objectClickable.length>0&&(i=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable)),i.length>0){let n=99999;for(var s=0;s<i.length;++s){var a=i[s];let v=a.distance;v<n&&(e=a.object,n=Math.min(n,v))}}e&&this.clickableActions(e.name);let l=null;if(this.promoClickable.length>0&&(i=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable)),i.length>0){let n=99999;for(var s=0;s<i.length;++s){var a=i[s];let f=a.distance;f<n&&(l=a.object,n=Math.min(n,f))}}l&&this.promoActions(l)}clickableActions(e=null){e=="CallToAction"&&this.clickablePrevActiveObject&&(this.pxlGuiDraws.ctaBuildPopup(),this.objectClickableObjectList[this.clickablePrevActiveObject].Inactive.visible=!0,this.objectClickableObjectList[this.clickablePrevActiveObject].Hover.visible=!1,this.clickablePrevActiveObject=null)}promoActions(e=null){let t=e.userData.video,i=e.name;if(this.promoClickableLinks.hasOwnProperty(t)){var s=window.open(this.promoClickableLinks[t],"_blank");s.focus()}}hoverUserDetect(){this.roomSceneList[this.currentRoom].castRay&&this.roomSceneList[this.currentRoom].castRay(!1,this.pxlDevice.touchMouseData.button);let e=null,t=new I.Vector2(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlCamera.objRaycast.setFromCamera(t,this.pxlCamera.camera);var i=[];if(this.objectClickable.length>0&&(i=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable)),i.length>0){let n=99999;for(var s=0;s<i.length;++s){var a=i[s];let v=a.distance;v<n&&(e=a.object,n=Math.min(n,v))}}if(e){this.pxlDevice.setCursor("help"),this.objectClickableObjectList[e.name]&&(this.clickablePrevActiveObject==null&&(this.clickablePrevActiveObject=e.name),this.objectClickableObjectList[e.name].Inactive.visible=!1,this.objectClickableObjectList[e.name].Hover.visible=!0);return}else this.clickablePrevActiveObject&&(this.objectClickableObjectList[this.clickablePrevActiveObject].Inactive.visible=!0,this.objectClickableObjectList[this.clickablePrevActiveObject].Hover.visible=!1,this.clickablePrevActiveObject=null),this.pxlDevice.setCursor("grab");let l=null;if(this.promoClickable.length>0&&(i=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable)),i.length>0){let n=99999;for(var s=0;s<i.length;++s){var a=i[s];let f=a.distance;f<n&&(l=a.object,n=Math.min(n,f))}}l?(this.pxlDevice.setCursor("alias"),this.promoClickableObjectList[l.name]&&(this.promoPrevActiveObject==null&&(this.promoPrevActiveObject=l.name),this.promoClickableObjectList[l.name].x=1)):(this.promoPrevActiveObject&&(this.promoClickableObjectList[this.promoPrevActiveObject].x=.1,this.promoPrevActiveObject=null),this.pxlDevice.setCursor("grab"))}updateCompUniforms(e=null){e&&(this.pxlRenderSettings.exposure=e*this.pxlRenderSettings.mult),this.mapOverlayPass&&(this.mapMotionBlurPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlayHeavyPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlayPass.uniforms.exposure.value=this.pxlRenderSettings.exposure,this.mapOverlaySlimPass.uniforms.exposure.value=this.pxlRenderSettings.exposure)}sendRoomMessage(e,t,i){this.roomSceneList[e]&&this.roomSceneList[e].onMessage(t,i)}buildComposers(){this.mapWorldPosMaterial=new I.ShaderMaterial({uniforms:{camNear:{type:"f",value:this.pxlCamera.camera.near},camFar:{type:"f",value:this.pxlCamera.camera.far}},vertexShader:this.pxlShaders.rendering.worldPositionVert(),fragmentShader:this.pxlShaders.rendering.worldPositionFrag()}),this.mapWorldPosMaterial.side=I.FrontSide,this.mapWorldPosMaterial.name="mapWorldPosMaterial",this.blurComposer=new Pe(this.engine),this.shaderPasses.blurXShaderPass=new q(new I.ShaderMaterial({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.directionalBlurPass("pDiffuse",[1,0],4,1.8),defines:{}}),"tDiffuse"),this.shaderPasses.blurXShaderPass.material.transparent=!0,this.shaderPasses.blurXShaderPass.needsSwap=!0,this.shaderPasses.blurXShaderPass.enabled=!1,this.shaderPasses.blurXShaderPass.name="blurXShaderPass",this.blurComposer.addPass(this.shaderPasses.blurXShaderPass),this.shaderPasses.dirBlurCopyPass=new q(ce),this.shaderPasses.dirBlurCopyPass.enabled=!1,this.shaderPasses.dirBlurCopyPass.name="dirBlurCopyPass",this.blurComposer.addPass(this.shaderPasses.dirBlurCopyPass),this.shaderPasses.blurYShaderPass=new q(new I.ShaderMaterial({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.directionalBlurPass("pDiffuse",[0,1],4,1.3),defines:{}}),"tDiffuse"),this.shaderPasses.blurYShaderPass.material.transparent=!0,this.shaderPasses.blurYShaderPass.enabled=!1,this.shaderPasses.blurYShaderPass.name="blurYShaderPass",this.blurComposer.addPass(this.shaderPasses.blurYShaderPass),this.shaderPasses.scatterMixShaderPass=new q(new I.ShaderMaterial({uniforms:{time:{value:this.time},tDiffuse:{value:null},pDiffuse:{value:this.scene.renderGlowTarget.texture},resUV:{value:this.pxlDevice.screenRes}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.mixBlurShaderPass(),defines:{}}),"tDiffuse"),this.shaderPasses.scatterMixShaderPass.material.transparent=!0,this.shaderPasses.scatterMixShaderPass.enabled=!1,this.shaderPasses.scatterMixShaderPass.name="scatterMixShaderPass",this.blurComposer.addPass(this.shaderPasses.scatterMixShaderPass),this.options.antiAliasing==Ue.LOW?this.shaderPasses.scatterMixShaderPass.enabled=!0:this.options.antiAliasing==Ue.MEDIUM?(this.shaderPasses.blurXShaderPass.enabled=!0,this.shaderPasses.dirBlurCopyPass.enabled=!0,this.shaderPasses.blurYShaderPass.enabled=!0):this.options.antiAliasing==Ue.HIGH&&(this.shaderPasses.blurXShaderPass.enabled=!0,this.shaderPasses.dirBlurCopyPass.enabled=!0,this.shaderPasses.blurYShaderPass.enabled=!0,this.shaderPasses.scatterMixShaderPass.enabled=!0),this.mapComposerMotionBlur=new Pe(this.engine),this.mapMotionBlurPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camRotXYZ:{value:this.pxlCamera.camRotXYZ},blurDirCur:{type:"f",value:this.blurDirCur},blurDirPrev:{type:"f",value:this.blurDirPrev},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.motionBlurPostProcess(this.pxlDevice.screenRes,this.pxlDevice.mobile),defines:{}}),"tDiffuse"),this.mapMotionBlurPass.needsSwap=!0,this.mapMotionBlurPass.name="mapMotionBlurPass",this.mapComposerMotionBlur.addPass(this.mapMotionBlurPass),this.mapMotionBlurPass.enabled=!1,this.mapComposerMotionBlur.renderToScreen=!1,this.mapComposerGlow=new Pe(this.engine);let e=new Ve(this.scene,this.pxlCamera.camera);this.mapComposerGlow.addPass(e),this.blurScreenMerge=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},mtDiffuse:{value:this.scene.renderTarget.texture},exposure:{type:"f",value:this.pxlRenderSettings.exposure}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.compLayersPostProcess(),defines:{}}),"tDiffuse"),this.blurScreenMerge.needsSwap=!0,this.blurScreenMerge.name="blurScreenMerge",this.mapComposerGlow.addPass(this.blurScreenMerge);let t=new q(ce);t.name="glowCopyPassBlur",this.mapComposerGlow.addPass(t),this.mapComposerGlow.renderToScreen=!1,this.mapComposerGlow.autoClear=!0,this.mapOverlayHeavyPass=new q(new I.ShaderMaterial({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},scenePos:{value:this.scene.renderWorldPos.texture},noiseTexture:{value:this.cloud3dTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlayHeavyShader(),defines:{}}),"tDiffuse"),this.mapOverlayHeavyPass.needsSwap=!0,this.mapOverlayHeavyPass.name="mapOverlayHeavyPass",this.mapOverlayPass=new q(new I.ShaderMaterial({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},scenePos:{value:this.scene.renderWorldPos.texture},noiseTexture:{value:this.cloud3dTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlayShader(),defines:{}}),"tDiffuse"),this.mapOverlayPass.needsSwap=!0,this.mapOverlayPass.name="mapOverlayPass",this.mapOverlaySlimPass=new q(new I.ShaderMaterial({uniforms:{gamma:{type:"f",value:this.pxlDevice.gammaCorrection},exposure:{type:"f",value:this.pxlRenderSettings.exposure},time:{value:this.pxlTimer.msRunner},camPos:{value:this.pxlCamera.camera.position},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderTarget.texture},bloomTexture:{value:this.mapComposerGlow.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture},fogMult:{value:this.fogMult},proximityMult:{value:1}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.finalOverlaySlimShader(),defines:{}}),"tDiffuse"),this.mapOverlaySlimPass.needsSwap=!0,this.mapOverlaySlimPass.name="mapOverlaySlimPass",this.mapGlowPass=new q(new I.ShaderMaterial({uniforms:{time:{value:this.pxlTimer.msRunner},ratio:{type:"f",value:1},tDiffuse:{value:null},rDiffuse:{value:this.scene.renderGlowTarget.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.glowPassPostProcess(),defines:{}}),"tDiffuse"),this.mapGlowPass.needsSwap=!0,this.mapGlowPass.name="mapGlowPass",this.mapComposer=new Pe(this.engine),this.mapComposer.addPass(this.mapOverlayHeavyPass),this.mapComposer.addPass(this.mapOverlayPass),this.mapComposer.addPass(this.mapOverlaySlimPass),this.mapComposer.addPass(this.mapGlowPass),this.mapOverlayHeavyPass.enabled=!1,this.mapOverlayPass.enabled=!1,this.pxlUser.lKingWarp=new I.Vector2(...this.pxlUser.lKingInactive),this.lizardKingPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.lKingPostProcess(),defines:{}}),"tDiffuse"),this.pxlUser.lKingPass=this.lizardKingPass,this.lizardKingPass.enabled=!1,this.pxlUser.lKingPass.name="lizardKingPass",this.pxlUser.sFieldPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture},starTexture:{value:this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"uv_starNoise.jpg")}},vertexShader:this.pxlShaders.rendering.sFieldPostProcessVert(),fragmentShader:this.pxlShaders.rendering.sFieldPostProcessFrag(),defines:{}}),"tDiffuse"),this.pxlUser.sFieldPass.enabled=!1,this.pxlUser.sFieldPass.name="sFieldPass",this.pxlUser.iZoomPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},tDiffusePrev:{type:"t",value:null},time:{value:this.pxlTimer.msRunner},ratio:{value:this.pxlDevice.screenRes},noiseTexture:{value:this.cloud3dTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.iZoomPostProcess(),defines:{}}),"tDiffuse"),this.pxlUser.iZoomPass.enabled=!1,this.pxlUser.iZoomPass.name="iZoomPass",this.chroAberrationPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},ratio:{value:this.pxlDevice.screenRes},warpMult:{value:this.chroAberMult},chroAberUVTexture:{value:this.chroAberUVTexture},lKing:{value:this.pxlUser.lKingWarp}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.chroAberPostProcess(),defines:{}}),"tDiffuse"),this.chroAberrationPass.enabled=!1,this.chroAberrationPass.name="chroAberrationPass",this.mapComposer.addPass(this.chroAberrationPass),this.mapComposer.addPass(this.lizardKingPass),this.mapComposer.addPass(this.pxlUser.sFieldPass),this.mapComposer.addPass(this.pxlUser.iZoomPass),this.mapComposerWarpPass=new q(new I.ShaderMaterial({uniforms:{time:{value:this.pxlTimer.msRunner},fader:{value:this.warpVisualFader},tDiffuse:{value:null},noiseTexture:{value:this.cloud3dTexture},animTexture:{value:this.blockAnimTexture}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.warpPostProcess(),defines:{}}),"tDiffuse"),this.mapComposerWarpPass.needsSwap=!0,this.mapComposerWarpPass.enabled=!1,this.mapComposerWarpPass.name="mapComposerWarpPass",this.mapComposer.addPass(this.mapComposerWarpPass),this.mapBoxAAPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},resUV:{type:"f",value:this.pxlDevice.screenRes},ratio:{type:"f",value:1},gamma:{type:"f",value:this.pxlDevice.gammaCorrection}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.boxAntiAliasPass(),defines:{}}),"tDiffuse"),this.mapBoxAAPass.enabled=!1,this.mapBoxAAPass.name="mapBoxAAPass",this.mapComposer.addPass(this.mapBoxAAPass),this.mapCrossAAPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},resUV:{type:"f",value:this.pxlDevice.screenRes},ratio:{type:"f",value:1},gamma:{type:"f",value:this.pxlDevice.gammaCorrection}},vertexShader:this.pxlShaders.core.camPosVert(),fragmentShader:this.pxlShaders.rendering.crossAntiAliasPass(),defines:{}}),"tDiffuse"),this.mapCrossAAPass.enabled=!1,this.mapCrossAAPass.name="mapCrossAAPass",this.mapComposer.addPass(this.mapCrossAAPass),this.mapComposer.autoClear=!0;let i=this.roomSceneList[this.bootRoom].scene;this.roomComposer=new Pe(this.engine),this.roomRenderPass=new Ve(i,this.pxlCamera.camera),this.roomRenderPass.name="roomRenderPass",this.roomComposer.addPass(this.roomRenderPass),this.roomNameList.forEach(a=>{if(a!=this.mainRoom){let l=this.roomSceneList[a].applyRoomPass(this.roomComposer);l&&(l.enabled=!1,this.roomComposer.addPass(l))}}),this.roomBloomPass=new we(new I.Vector2(this.pxlDevice.mapW*.5,this.pxlDevice.mapH*.5),1.5,.8,.85),this.roomBloomPass.threshold=this.pxlRenderSettings.bloomThresh,this.roomBloomPass.strength=this.pxlRenderSettings.bloomStrength,this.roomBloomPass.radius=this.pxlRenderSettings.bloomRadius,this.roomBloomPass.name="roomBloomPass",this.roomComposer.addPass(this.roomBloomPass),this.roomGlowPass=new q(new I.ShaderMaterial({uniforms:{time:{value:this.pxlTimer.msRunner},ratio:{type:"f",value:1},tDiffuse:{value:null},gDiffuse:{value:this.blurComposer.writeBuffer.texture},rDiffuse:{value:this.blurComposer.renderTarget2.texture},sceneDepth:{value:this.scene.renderTarget.depthTexture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.glowPassPostProcess(),defines:{}}),"tDiffuse"),this.roomGlowPass.needsSwap=!0,this.roomGlowPass.name="roomGlowPass",this.roomComposer.addPass(this.roomGlowPass),this.roomComposer.addPass(this.chroAberrationPass),this.roomComposer.addPass(this.lizardKingPass),this.roomComposer.addPass(this.pxlUser.sFieldPass),this.roomComposer.addPass(this.pxlUser.iZoomPass),this.roomComposer.addPass(this.mapComposerWarpPass),this.roomComposer.addPass(this.mapCrossAAPass),this.roomComposer.addPass(this.mapBoxAAPass),this.roomComposer.autoClear=!0,this.delayComposer=new Pe(this.engine);let s=new Ve(this.scene,this.pxlCamera.camera);this.delayPass=new q(new I.ShaderMaterial({uniforms:{tDiffuse:{value:null},roomComposer:{type:"f",value:0},tDiffusePrev:{value:this.mapComposer.renderTarget1.texture},tDiffusePrevRoom:{value:this.roomComposer.renderTarget1.texture}},vertexShader:this.pxlShaders.core.defaultVert(),fragmentShader:this.pxlShaders.rendering.textureStorePass(),defines:{}}),"tDiffuse"),this.delayPass.clear=!1,this.delayComposer.addPass(this.delayPass),this.delayComposer.renderToScreen=!1,this.delayComposer.autoClear=!1,this.pxlUser.iZoomPass.uniforms.tDiffusePrev.value=this.delayComposer.renderTarget2.texture}setExposure(e){e=e*1,this.pxlCamera.uniformScalars.exposureUniformBase=e,this.updateCompUniforms(e)}stepWarpPass(){if(this.warpVisualActive){let e=(this.pxlTimer.curMS-this.warpVisualStartTime)/this.warpVisualMaxTime[this.pxlCamera.warpType],t=Math.min(1,e*3),i=Math.min(1,3-e*3);t==1&&i==1&&this.pxlCamera.warpActive&&this.pxlCamera.warpCamRun(),this.warpVisualFader.x=t,this.warpVisualFader.y=i,i<=0&&this.stopWarpVisual()}}checkUserVideoStatus(e){}remoteUserUpdateMedia(e,t=!1,i=null){}userRemoveRemoteData(e){}stepShaderValues(){this.stepShaderFuncArr.forEach(e=>{typeof e=="object"?e.step():typeof e=="string"&&(console.log("Does this trigger?"),console.log(e))})}stepAnimatedObjects(){this.pxlUser.itemListNames.length>0&&this.pxlUser.itemListNames.forEach(e=>{this.pxlUser.itemList[e].rotation.y=this.pxlTimer.msRunner.x*this.pxlUser.itemRotateRate})}initWarpVisual(e){this.warpVisualActive=!0,this.warpVisualFader.x=0,this.warpVisualFader.y=1,this.warpVisualStartTime=this.pxlTimer.curMS,this.mapComposerWarpPass.enabled=!0}stopWarpVisual(){this.warpVisualActive=!1,this.warpVisualFader.x=1,this.warpVisualFader.y=0,this.mapComposerWarpPass.enabled=!!this.pxlUser.iZoom}prepPortalRender(){}cleanupPortalRender(){}setPortalTexture(e,t){this.roomWarpVisuals[t].material.map=e}warpPortalQueue(){return Object.keys(this.roomSceneList).reverse()}getSceneSnapshot(e){let t=this.roomSceneList[e];this.engine.setRenderTarget(t.warpZoneRenderTarget),t.prepPortalRender(),this.engine.render(t.scene||t.scene,this.pxlCamera.camera),t.cleanupPortalRender(),this.engine.setRenderTarget(null)}mapRender(e=!0){if(this.pxlTimer.active&&this.step(),this.pxlTimer.curMS>this.nextRenderMS||e==!1){this.prevRenderMS=this.nextRenderMS,this.nextRenderMS=this.pxlTimer.curMS+this.renderInterval,this.stepShaderValues(),this.stepAnimatedObjects();let t=this.roomSceneList[this.currentRoom];t&&t.booted&&(t.step(),t.camera.layers.disable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(t.scene.renderTarget),this.engine.clear(),this.engine.render(t.scene,t.camera),this.engine.setRenderTarget(null),t.camera.layers.enable(this.renderLayerEnum.SKY),this.mapComposerGlow&&(this.pxlQuality.settings.bloom||this.pxlQuality.settings.fog)&&this.mapComposerGlow.render(),this.mapRenderBlurStack(t,t.camera,t.scene,this.scene.renderGlowTarget),this.roomComposer.render()),this.pxlUser.iZoom&&this.delayComposer.render()}this.pxlTimer.active&&e&&requestAnimationFrame(()=>{this.mapRender()})}mapRenderBlurStack(e,t,i,s){if(this.blurComposer){e.geoList.GlowPass&&(e.geoList.GlowPass.forEach(n=>{if(n.userData.hasOwnProperty("GlowPerc")){let v=n.userData.GlowPerc;n.material.hasOwnProperty("uniforms")&&n.material.uniforms.mult&&(n.material.uniforms.mult.value=v)}}),e.geoList.hasOwnProperty("GlowPassMask")&&e.geoList.GlowPassMask.forEach(n=>{n.material.uniforms&&n.material.uniforms.cdMult&&(n.material.uniforms.cdMult.value=0)})),t.layers.disable(this.renderLayerEnum.SCENE),t.layers.disable(this.renderLayerEnum.PARTICLES),t.layers.disable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(s);let a=0,l=i.background.clone();i.background.set(a),this.engine.setClearColor(a,0),this.engine.render(i,t),i.background.r=l.r,i.background.g=l.g,i.background.b=l.b,t.layers.enable(this.renderLayerEnum.SCENE),t.layers.enable(this.renderLayerEnum.PARTICLES),t.layers.enable(this.renderLayerEnum.SKY),this.engine.setRenderTarget(null),e.geoList.GlowPass&&(e.geoList.GlowPass.forEach(n=>{n.userData.hasOwnProperty("GlowPerc")&&n.material.hasOwnProperty("uniforms")&&n.material.uniforms.mult&&(n.material.uniforms.mult.value=1)}),e.geoList.hasOwnProperty("GlowPassMask")&&e.geoList.GlowPassMask.forEach(n=>{n.material.uniforms&&n.material.uniforms.cdMult&&(n.material.uniforms.cdMult.value=1)})),this.blurComposer.render(),this.roomBloomPass.enabled=!1}}};ys();Ni();zi();si();ws();zr();ue();var zd="0.0.16";var Ql="pxlNav-coreCanvas";var Kl,Xl,Yr=window.innerWidth,Jr=window.innerHeight,Yl=class{constructor(e,t,i,s){this._active=!1;let a="./pxlRooms";e.hasOwnProperty("pxlRoomRoot")&&(a=e.pxlRoomRoot),this.options={loadList:["Cloud3d","SoftNoise","SmoothNoise","WarpAnimTexture"]},this.options=Object.assign(this.options,e);let l=Object.keys(this.options);Object.keys(Ie).forEach(v=>{l.includes(v)||(this.options[v]=Ie[v])}),this.verbose=this.options.verbose,this.projectTitle=t,this.startingRoom=i,s.includes(i)||s.push(i),this.roomBootList=s,this.callbacks={},this.uriHashParms=this.findHashParms(),this.mobile=this.isMobile(),this.autoCam=this.getHashParm("autoCam",!1),this.loadPercent=0,this.folderDict={assetRoot:"assets/",guiRoot:"assets/GUI/",roomRoot:"assets/rooms/",vidRoot:"assets/screenContent/"},this.validEvents={booted:"Emitted after the engine has fully booted and is ready to be addressed.",shaderEditorVis:"Returns a [bool]; Emitted when the shader editor is toggled on or off.","roomChange-Start":"Emitted when the room change transition begins.","roomChange-Middle":"Emitted when the room change process occurs mid transition.","roomChange-End":"Returns a [bool]; Emitted when the room change transition ends.",fromRoom:"Returns a custom object; Emitted from your Room code you choose to emit during run time.","device-keydown":"Returns an [int]; The just pressed key.","device-keyup":"Returns an [int]; The just released key.","device-resize":"Returns an [{height:#,width:#}]; Height Width object of the new window size.",pxlNavEventNameHere:"Never emitted; You did some copy'pasta.","":"** NOTE : callbacks get an event object shaped -  **","":"** { 'type' : *eventName*, 'value' : *data* } **","":"",help:"Hello! I'm here to help you!",pingPong:"Send 'ping', Get 'pong'! - pxlNav.trigger('ping');"},this.validEventsKeys=Object.keys(this.validEvents),this.loadEnvAssetFile=!0,this.pxlTimer=new $e,this.pxlShaders=Wr,this.pxlCookie=new Je(t,"/"),this.pxlCookie.hasCookie("forceMobile")&&(this.mobile=pxlCookie.parseCookie("forceMobile")),this.pxlQuality=new Ye(this.verbose,this.mobile,this.uriHashParms),this.pxlUtils=new Ne(this.folderDict.assetRoot,this.mobile),this.pxlFile=new ve(this.folderDict),this.pxlExtensions=new ut,this.pxlAudio=new ct(this.pxlTimer),this.pxlAutoCam=new rt(this.autoCam,this.mobile),this.pxlAutoCam.active=!1,this.pxlUser=new Ze,this.pxlEnv=new Ut(this.options,this.startingRoom,this.mobile),this.pxlDevice=new qe(t,Ql,this.mobile,this.autoCam),this.pxlCamera=new at,this.options.staticCamera&&this.pxlCamera.toggleMovement(!1),this.pxlAnim=new et(this.folderDict.assetRoot,this.pxlTimer),this.pxlGuiDraws=new ht(this.verbose,t,this.folderDict.assetRoot,this.folderDict.guiRoot),this.pxlQuality.setDependencies(this),this.pxlUtils.setDependencies(this),this.pxlFile.setDependencies(this),this.pxlAudio.setDependencies(this),this.pxlAutoCam.setDependencies(this),this.pxlEnv.setDependencies(this),this.pxlAnim.setDependencies(this),this.pxlDevice.setDependencies(this),this.pxlCamera.setDependencies(this),this.pxlGuiDraws.setDependencies(this),this.pxlGuiDraws.prepLoader(),this.options.hasOwnProperty("loaderPhrases")||(this.options.loaderPhrases=["...loading the pixels..."]),this.pxlGuiDraws.setLoaderPhrases(this.options.loaderPhrases),this.pxlQuality.init()}set active(e=null){e==null&&(e=!this.pxlTimer.active),e==!0?(this.pxlTimer.play(),this.step(!1)):this.pxlTimer.stop()}get active(){return this.pxlTimer.active}start(){this.active=!0}stop(){this.active=!1}init(){this.pxlTimer.init(),this.pxlEnv.boot(),this.pxlQuality.startBenchmark(),this.buildGui().then(()=>{this.tickLoader(),this.bootEnvironment()}).then(()=>{this.tickLoader(),this.bootEngine()}).then(()=>{this.tickLoader(),this.pxlEnv.buildComposers(),this.cameraRunAnimatorMobile(this),this.pxlGuiDraws.stepLoader("postBoot"),this.pxlEnv.mapRender(),this.pxlDevice.setCursor("grab")}).catch(e=>{this.verbose>Ce.VERBOSE_LEVEL.NONE&&(console.error("Error in pxlNavCore.init(); Load level - ",e),console.error(e))}).finally(()=>{this.verbose>Ce.VERBOSE_LEVEL.ERROR&&(console.log("'pxlNavCore' Room Build Promise-Chain Completed; ",this.loadPercent),console.log("-- Starting pxlNav in Room `"+this.pxlEnv.bootRoom+"`")),this.start()})}buildGui(){return new Promise((e,t)=>{this.pxlGuiDraws.booted(),this.pxlGuiDraws.pxlNavCanvas=document.getElementById(Ql),Kl=window.innerWidth*this.pxlQuality.screenResPerc,this.pxlGuiDraws.pxlNavCanvas.width=window.innerWidth,Xl=window.innerHeight*this.pxlQuality.screenResPerc,this.pxlGuiDraws.pxlNavCanvas.height=window.innerHeight,this.pxlDevice.canCursorLock&&(this.pxlGuiDraws.pxlNavCanvas.requestPointerLock=this.pxlGuiDraws.pxlNavCanvas.requestPointerLock||this.pxlGuiDraws.pxlNavCanvas.mozRequestPointerLock||this.pxlGuiDraws.pxlNavCanvas.webkitRequestPointerLock,document.requestPointerLock=this.pxlGuiDraws.pxlNavCanvas.exitPointerLock||this.pxlGuiDraws.pxlNavCanvas.mozExitPointerLock||this.pxlGuiDraws.pxlNavCanvas.webkitExitPointerLock),this.pxlGuiDraws.mapPrepPrompts(),e(!0)})}isMobile(){var e=!1;return e=/\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent),e=this.getHashParm("m",e),e}findHashParms(){var e={},t=window.location.hash;if(t.length>1){t=t.substring(1);for(var i=t.split("&"),s=0;s<i.length;s++){var a=i[s].split("=");e[a[0]]=a[1]}}return e}getHashParm(e,t){return Object.keys(this.uriHashParms).includes(e)?this.uriHashParms[e]:t}tickLoader(){this.loadPercent+=1}bootEngine(){return new Promise((e,t)=>{let i=[];for(let s=0;s<this.roomBootList.length;++s)i.push(this.pxlEnv.loadRoom(this.roomBootList[s]));Promise.all(i).then(()=>{e(!0)})})}bootEnvironment(){return new Promise((e,t)=>{this.pxlEnv.engine=new G.WebGLRenderer({canvas:this.pxlGuiDraws.pxlNavCanvas,alpha:!0,antialias:!1,sortObjects:!0,depth:!0});var i={format:G.RGBAFormat,antialias:!1,sortObjects:!0,alpha:!0,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?G.HalfFloatType:G.FloatType};this.pxlEnv.engine.autoClear=!0,this.pxlEnv.engine.debug.checkShaderErrors=!1,this.pxlEnv.engine.debug.checkShaderErrors=!0,this.verbose>=Ce.VERBOSE_LEVEL.INFO&&(this.pxlEnv.engine.extensions.get("WEBGL_depth_texture")?console.log("  ** WebGL Depth Texture support enabled **"):console.log("  ** WebGL Depth Texture NOT supported **"),console.log("-- Depth Composer pass currently not enabled; --"),console.log("--   Switching to World-Space Shader pass     --"));let s=0,a="#000000";this.pxlEnv.engine.setClearColor(this.pxlEnv.fogColor,0),this.pxlEnv.engine.setSize(Kl/this.pxlQuality.screenResPerc,Xl/this.pxlQuality.screenResPerc),this.pxlEnv.engine.setPixelRatio(1),this.pxlEnv.engine.outputEncoding=G.GammaEncoding,this.options.shadowMapBiasing==Ce.SHADOW_MAP.OFF?this.pxlEnv.engine.shadowMap.enabled=!1:(this.pxlEnv.engine.shadowMap.enabled=!0,this.pxlEnv.engine.shadowMap.type=G.BasicShadowMap),this.pxlEnv.scene=new G.Scene,this.pxlEnv.scene.fog=this.pxlEnv.fog,this.pxlEnv.scene.background=new G.Color(a),this.pxlEnv.scene.renderTarget=new G.WebGLRenderTarget(Yr*this.pxlQuality.screenResPerc,Jr*this.pxlQuality.screenResPerc,i),this.pxlEnv.scene.renderTarget.texture.format=G.RGBAFormat,this.pxlEnv.scene.renderTarget.texture.minFilter=G.LinearFilter,this.pxlEnv.scene.renderTarget.texture.magFilter=G.LinearFilter,this.pxlEnv.scene.renderTarget.texture.generateMipmaps=!1,this.pxlEnv.scene.renderTarget.depthBuffer=!0,this.pxlEnv.scene.renderTarget.depthTexture=new G.DepthTexture,this.pxlEnv.scene.renderTarget.depthTexture.format=G.DepthFormat,this.pxlEnv.scene.renderTarget.depthTexture.type=G.UnsignedIntType,this.pxlEnv.scene.renderWorldPos=new G.WebGLRenderTarget(Yr*this.pxlQuality.screenResPerc,Jr*this.pxlQuality.screenResPerc,i),this.pxlEnv.scene.renderWorldPos.texture.format=G.RGBAFormat,this.pxlEnv.scene.renderWorldPos.texture.minFilter=G.NearestFilter,this.pxlEnv.scene.renderWorldPos.texture.magFilter=G.NearestFilter,this.pxlEnv.scene.renderWorldPos.texture.generateMipmaps=!1,i.alpha=!0,this.pxlEnv.scene.renderGlowTarget=new G.WebGLRenderTarget(parseInt(Yr*this.pxlQuality.screenResPerc),parseInt(Jr*this.pxlQuality.screenResPerc),i),this.pxlEnv.scene.renderGlowTarget.texture.format=G.RGBAFormat,this.pxlEnv.scene.renderGlowTarget.texture.generateMipmaps=!1;var l=this.pxlGuiDraws.pxlNavCanvas.width/this.pxlGuiDraws.pxlNavCanvas.height;if(this.pxlCamera.camera=new G.PerspectiveCamera(this.pxlEnv.pxlCamFOV,1,this.pxlEnv.camNear,this.pxlEnv.camFar),this.pxlAutoCam.camera=this.pxlCamera.camera,this.pxlCamera.cameraAimTarget=new G.Object3D,this.pxlEnv.scene.add(this.pxlCamera.cameraAimTarget),this.pxlCamera.camera.target=this.pxlCamera.cameraAimTarget,this.pxlCamera.camera.layers.enable(1),this.pxlCamera.camera.layers.enable(2),this.pxlEnv.scene.add(this.pxlEnv.userAvatarGroup),this.options.loadList.includes("Cloud3d")&&(this.pxlEnv.cloud3dTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_Cloud3d.jpg"),this.pxlEnv.cloud3dTexture.wrapS=G.RepeatWrapping,this.pxlEnv.cloud3dTexture.wrapT=G.RepeatWrapping),this.options.loadList.includes("SoftNoise")&&(this.pxlEnv.softNoiseTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_Soft3d.jpg"),this.pxlEnv.softNoiseTexture.wrapS=G.RepeatWrapping,this.pxlEnv.softNoiseTexture.wrapT=G.RepeatWrapping),this.options.loadList.includes("SmoothNoise")&&(this.pxlEnv.detailNoiseTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"Noise_UniformSmooth.jpg"),this.pxlEnv.detailNoiseTexture.wrapS=G.RepeatWrapping,this.pxlEnv.detailNoiseTexture.wrapT=G.RepeatWrapping),this.options.loadList.includes("ChromaticAberration")){let x=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"uv_ChromaticAberration.png");x.minFilter=G.LinearFilter,x.magFilter=G.LinearFilter,this.pxlEnv.chroAberUVTexture=x}this.options.loadList.includes("WarpAnimTexture")&&(this.pxlEnv.blockAnimTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"uv_blockPortalWarp.jpg"),this.pxlEnv.blockAnimTexture.minFilter=G.LinearFilter,this.pxlEnv.blockAnimTexture.magFilter=G.LinearFilter),this.options.loadList.includes("MathFuncs")&&(this.pxlEnv.mathFuncsTexture=this.pxlUtils.loadTexture(this.folderDict.assetRoot+"MathFuncs.jpg"),this.pxlEnv.mathFuncsTexture.minFilter=G.LinearFilter,this.pxlEnv.mathFuncsTexture.magFilter=G.LinearFilter);var n,v,p=(x=null)=>{var g={t:[0,0,0],r:[0,0,0],s:[1,1,1]};return x!=null&&(g[x[0]]=x[1]),g};v=p();let f="";if(this.mobile&&(f="_mobile"),this.loadEnvAssetFile){let x=this.folderDict.assetRoot+"EnvironmentAssets.fbx";this.pxlFile.loadSceneFBX(x,n,v,this.verbose,"EnvironmentAssets",[this.pxlEnv.scene])}this.options.shadowMapBiasing==Ce.SHADOW_MAP.OFF?this.pxlEnv.engine.shadowMap.enabled=!1:(this.pxlEnv.engine.shadowMap.enabled=!0,this.options.shadowMapBiasing==Ce.SHADOW_MAP.BASIC||this.mobile?this.pxlEnv.engine.shadowMap.type=G.BasicShadowMap:this.options.shadowMapBiasing==Ce.SHADOW_MAP.SOFT&&(this.pxlEnv.engine.shadowMap.type=G.PCFSoftShadowMap));var m=new G.AmbientLight(16777215,.05);this.pxlEnv.lightList.push(m),this.pxlEnv.scene.add(m);var C=new G.DirectionalLight(16777215,.1);C.position.set(1e3,550,1200),this.pxlEnv.lightList.push(C),this.pxlEnv.scene.add(C),e(!0)})}cameraRunAnimatorMobile(e){let t=!1,i=Object.keys(e.pxlEnv.geoLoadList);for(let s=0;s<i.length&&(t=e.pxlEnv.geoLoadList[i[s]]==0,t=t&&!e.pxlEnv.roomSceneList[s]?.booted,!t);++s);t?setTimeout(()=>{e.cameraRunAnimatorMobile(e)},300):e.initRoomList(e)}initRoomList(e){e.pxlGuiDraws.stepLoader("camAnim"),e.pxlCamera.setTransform(e.pxlEnv.camInitPos,e.pxlEnv.camInitLookAt),e.pxlCamera.updateCamera(),e.pxlEnv.buildRoomEnvironments(),e.monitorRoomLoad(e)}monitorRoomLoad(e,t=0){let i=!1,s=Object.keys(e.pxlEnv.geoLoadList);for(let a=0;a<s.length&&(i=e.pxlEnv.geoLoadList[s[a]]==0,i=i&&!e.pxlEnv.roomSceneList[a]?.booted,!i);++a);i?setTimeout(()=>{e.monitorRoomLoad(e)},300):(e.pxlQuality.mapAutoQualityUpdate(1,!0),e.runPrepDrawScenes(0,!0,[]))}runPrepDrawScenes(e=0,t=!0,i=[]){if(e++,i.length>0){if(t){t=!1;let s=i[i.length-1];this.pxlCamera.warpToRoom(s)}if(this.pxlCamera.colliderPrevObjHit=null,this.pxlEnv.mapRender(!1),e%10==0){let s=i.pop();t=!0,this.pxlGuiDraws.stepLoader(s)}requestAnimationFrame(()=>{this.runPrepDrawScenes(e,t,i)})}else this.pxlGuiDraws.stepLoader("Post Room Prep"),this.pxlNavPrepSettings()}pxlNavPrepSettings(){this.pxlCamera.warpToRoom(this.pxlEnv.bootRoom,!0),this.pxlQuality.endBenchmark(),this.pxlGuiDraws.stepLoader("Nav Settings"),this.startPxlNav()}startPxlNav(){this.pxlTimer.init(),this.pxlTimer.play(),this.pxlGuiDraws.applyCookies(),this.pxlGuiDraws.pxlNavCanvas&&this.pxlGuiDraws.pxlNavCanvas.focus();let e=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];e.active=!0,e.startTime=this.pxlTimer.msRunner.x,this.pxlEnv.roomPostGuiCalls.forEach(i=>{i.postGuiEvent()}),this.pxlEnv.roomPostGuiCalls=[],this.pxlAutoCam.enabled&&this.pxlGuiDraws.guiToggleVisibility(!1),this.pxlAutoCam.init(),this.pxlDevice.resizeRenderResolution(),this.pxlEnv.mapRender(),this.pxlQuality.setDependentSettings(),this.pxlGuiDraws.stepLoader("Starting...");let t=this;setTimeout(()=>{t.pxlEnv.postBoot(),t.pxlGuiDraws.mapPrompt&&t.pxlGuiDraws.promptFader(t.pxlGuiDraws.mapPrompt,!1,null,!0),t.pxlGuiDraws.mapPromptBG&&t.pxlGuiDraws.promptFader(t.pxlGuiDraws.mapPromptBG,!1,null,!1),t.emit("booted",!0)},200)}step(e=!1){this.pxlTimer.active&&(this.pxlTimer.step(),e&&requestAnimationFrame(()=>{this.step()}))}bootTimer(){this.pxlTimer.init(),this.pxlTimer.play()}stopTimer(){this.pxlTimer.stop()}pauseTimer(){this.pxlTimer.pause()}prepPromptFader(e,t=!1){let i=e;typeof i=="string"&&(i=document.getElementById(i),!i)||(i.classList.add("fader"),i.classList.add(t?"visOn":"visOff"),i.style.display=t?"inline-block":"none")}promptFader(e,t,i=null,s=!1){typeof e=="string"&&(e=document.getElementById(e),!e)||(e.classList.value.indexOf("fader")<0&&e.classList.add("fader"),t?(e.style.display="inline-block",setTimeout(()=>{e.classList.contains("visOff")&&(e.classList.remove("visOff"),e.classList.add("visOn"),i!=null&&(e.setAttribute("fadeOut",clockTime+i*1e3),fadeOutList.push(e)))},50)):(e.classList.remove("visOn"),e.classList.add("visOff"),s?["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"].forEach(l=>{e.addEventListener(l,()=>{let n=e.parentNode;n&&n.removeChild(e)})}):setTimeout(()=>{e.classList.contains("visOff")&&(e.style.display="none")},1e3)))}addRooms(e){for(let t=0;t<e.length;++t)this.pxlEnv.roomNameList.includes(e[t])||this.booted||this.roomBootList.push(e[t])}setBootRoom(e,t){console.log(e,t),this.pxlEnv.bootRoom=e,this.pxlEnv.bootLocation=t}setLoaderPhrases(e){this.pxlGuiDraws.setLoaderPhrases(e)}initExtension(e,t,i){this.pxlExtensions.init(e,t,i)}startExtension(e,t,i){this.pxlExtensions.start(e,t,i)}stopExtension(e,t,i){this.pxlExtensions.stop(e,t,i)}extensionStatus(e){return this.pxlExtensions.status(e)}trigger(e,t=null,i=null){switch(e=e.toLowerCase(),e){case"warptoroom":this.pxlCamera.warpToRoom(t,!0,i);break;case"camera":let s=t.toLowerCase();s=="roam"?this.pxlCamera.toggleMovement(!0):s=="static"&&this.pxlCamera.toggleMovement(!1);break;case"ping":this.emit("pingPong","pong");break;case"roommessage":let a=i.type,l=i.value;t==null&&(t=this.pxlEnv.currentRoom),this.pxlEnv.sendRoomMessage(t,a,l);default:break}}subscribe(e,t){let i=!1;if(this.validEventsKeys.includes(e))if(e=="test")console.log("Test Event : `pxlNav.subscribe( 'test', ... )` was used; subscription list -");else if(e=="pxlNavEventNameHere"||e=="help")e=="pxlNavEventNameHere"?console.warn("Warning : `pxlNav.subscribe( 'pxlNavEventNameHere', ... )` was used; need some help?"):e=="help"&&console.log("Help Requested : `pxlNav.subscribe( 'help', ... )` was used; Subscription items--"),console.log("Valid Event Types : "),this.validEventsKeys.forEach(s=>{console.log("  - ",s," : ",this.validEvents[s])});else{let s=e.split("-");s[0]=="device"?this.pxlDevice.subscribe(s[1],t):this.callbacks[e]=t}else console.warn("Warning : `pxlNav.subscribe( '"+e+"', ... )` was used; use 'help' for a list of valid events.")}emit(e,t,i=null){if(this.callbacks[e]){let s={type:e,value:t};i!==null&&(s.status=i),this.callbacks[e](s)}}};export{Ie as PXLNAV_OPTIONS,Ce as pxlEnums,Yl as pxlNav,zd as pxlNavVersion};
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
