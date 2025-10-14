'use strict';

function init(){
	pxlMouse=new MouseController();
	pxlMouse.init();
	pxlMouse.sW=sW;
	pxlMouse.sH=sH;
	pxlMouse.mouseDragEval="stepShaderValues()"; // On mouseDrag event
	pxlMouse.touchMoveEval="stepShaderValues()"; // On touchMove event

	window.addEventListener('onbeforeunload', stopStreams);
	window.onresize=function(e){resizeRenderResolution();};
	buildDeviceMonitors();
	
	menuBlock=document.getElementById('menuBlock');
	photoBinMenu=document.getElementById('photoBinMenu');
	menuExit=document.getElementById('menuExit');
	
	iconTray=document.getElementById('iconTray');
	thumbnailText=document.getElementById('thumbnailText');
	thumbnailImage=document.getElementById('thumbnailImage');
	cameraLoading=document.getElementById('cameraLoadingBlock');
	alignLines=document.getElementById('alignLines');
	frontFlash=document.getElementById('frontFlash');
	
	buildCameraLoadingPrompt();
	buildIcons();
	buildPhotoBin();
	setAlignLines();
	if(verbose) prepVerbose();
	
	pxlCanvas=document.getElementById(pxlCamCore);
	pxlW=window.innerWidth*mapResPerc;
	pxlCanvas.width=window.innerWidth;
	pxlH=window.innerHeight*mapResPerc;
	pxlCanvas.height=window.innerHeight;
	mapBootEngine();
	//pxlRender(runner);
	pxlMouse.inputActive=true;
	//mapPrepGUI();
	//launchFullscreen(pxlCanvas);
}

//////////////////////////////////////


function buildCameraLoadingPrompt(){
	let textDiv=document.getElementById("cameraLoadingText");
	let html=`
		<span class="header"> Loading <span id="curLoadingCam">Camera</span></span>
		<br><span class="detect">[- Finding camera info -]</span>
		<br><span class="sub">( Occurs once per camera )</span>
	`;
	textDiv.innerHTML=html;
}

function buildPhotoBin(){
	let html=`
		<table border=0 cellpadding=0 cellspacing=0 class="menuBody">
		<tr><td><div class="menuTitle">Photo Bin</div></td></tr>
		<tr><td height="100%" valign="top" id="menuScroller" class="menuScroller">
			<div id="photoBinScroller" class="menuScrollerInner">
				<div class="photoBinEmpty">Photos you take will show up here.</div>
			</div></td></tr>
		<tr><td><div class="menuExitButton" onclick="closeActiveMenu(true);">Exit Menu </div></td></tr>
		</table
	`;
	photoBinMenu.innerHTML=html;
	let parentScroller=document.getElementById('menuScroller');
	let scroller=document.getElementById('photoBinScroller');
	scroller.style.height=parentScroller.offsetHeight;
}

function buildIcons(){
	let iconAdds=["thumbnailImage"];
	let iconList=[...document.getElementById("iconTray").children, ...iconAdds.map((i)=>document.getElementById(i))];
	iconList.map(d=>{
		let scalar=d.hasAttribute("scale")?parseFloat(d.getAttribute("scale")):1;
		let size=Math.min(sW,sH)*((d.classList.contains('large')?.12:.07)*(mobile?2.5:1)*scalar);
		let div=document.getElementById(d);
		d.style.width=size;
		d.style.height=size;
		if(!d.classList.contains('iconNextCamera')) d.style.visibility="visible";
		if(d.hasAttribute("draw")){
			let draw=d.getAttribute("draw");
			let can=document.createElement("canvas");
			can.width=size;
			can.height=size;
			can.classList.add("drop");
			d.innerHTML="";
			d.appendChild(can);
			drawIcon(can, draw, [size,size]);
			if(draw=="nextCam"){
				let box=document.createElement("div");
				box.classList.add("iconNextCameraBox");
				box.classList.add("drop");
				d.appendChild(box);
			}
		}
	});
	thumbnailCanvas=thumbnailImage.children[0];
}

function prepVerbose(){
	console.log(mapToDoList);
	console.log("Verbose console logs are ON");

	verbBlock=document.getElementById('verbose');
	let innerVerbose=`
		<div id="verbose_fps"></div>
		<div id="verbose_deviceResData">
			Device Res : <span id="verbose_deviceRes">--</span>
		</div>
		<div id="verbose_camData">
			Current Camera : <span id="verbose_curCamName"></span> - <span id="verbose_curCamNumber"></span> of <span id="verbose_maxCamNumber"> - <span id="verbose_paused">PAUSED</span>
		</div>
		<div id="verbose_camRes">
			Current Camera Res : <span id="verbose_curCamRes">--</span>
		</div>`;
		/*<div id="verbose_camPausedState">
			Orientation : Yaw - <span id="verbose_yaw">-</span> ; Pitch - <span id="verbose_pitch">-</span> ; Roll - <span id="verbose_roll">-</span> ;
		</div>
		<div id="verbose_camOrientationAngle">
			Device Angle : <span id="verbose_curAngle">--</span>
		</div>*/
	innerVerbose+=`
		<div id="verbose_gyroscope">
			Gyroscope : X - <span id="verbose_gyrox">-</span> ; Y - <span id="verbose_gyroy">-</span> ; Z - <span id="verbose_gyroz">-</span> ;
		</div>
		<div id="verbose_prevCamData">
			Previous Camera : <span id="verbose_prevCam"></span>
		</div>
		<div id="verbose_errorConsole">
		</div>
		<br>
		<div id="verbose_spacer"> --- --- Console --- ---</div>
		<div id="verbose_console"></div>`;
	let alDom=document.getElementById("icon-alignLines");
	let topOff=alDom.offsetTop*2+parseFloat(alDom.style.height);
	verbBlock.style.top=topOff;
	verbBlock.style.left=3;
	verbBlock.innerHTML=innerVerbose;
	
	verbFPS=document.getElementById('verbose_fps');
	verbDeviceRes=document.getElementById('verbose_deviceRes');
	verbCurCam=document.getElementById('verbose_curCamNumber');
	verbCurCamName=document.getElementById('verbose_curCamName');
	verbPrevCamName=document.getElementById('verbose_prevCam');
	verbMaxCam=document.getElementById('verbose_maxCamNumber');
	verbPaused=document.getElementById('verbose_paused');
	verbErrorConsole=document.getElementById('verbose_errorConsole');
	verbConsole=document.getElementById('verbose_console');
	
	verbCamRes=document.getElementById('verbose_curCamRes');
	verbYaw=document.getElementById('verbose_yaw');
	verbPitch=document.getElementById('verbose_pitch');
	verbRoll=document.getElementById('verbose_roll');
	verbCurAngle=document.getElementById('verbose_curAngle');
	verbGravityX=document.getElementById('verbose_gyrox');
	verbGravityY=document.getElementById('verbose_gyroy');
	verbGravityZ=document.getElementById('verbose_gyroz');
	
	verbBlock.style.display='inline';

	verbDeviceRes.innerHTML=sW+"x"+sH;
	
	window.onerror=(msg,source,line,col,err)=>{
		verbErrorConsole.innerHTML=msg;
		verbErrorConsole.innerHTML+="<br>"+source;
		verbErrorConsole.innerHTML+="<br>Line - "+line+" | Col - "+col;
		verbErrorConsole.innerHTML+="<br>"+err;
	};
}

function verbFunction(){
	verbScriptToggle=!verbScriptToggle;
	//pxlCookieManager.clearCookie()
	if(!pxlCamHaarFeatureComposer){
		buildHaarFeatureComposer();
	}
	haarFeatureHelper(verbScriptToggle);
	//camCorrectionShader.uniforms.uResAspectX.value=1;
	//camCorrectionShader.uniforms.uResAspectY.value=1;
}
//////////////////////////////////////

document.onkeyup=function(e){keyUpCall(e);};
function keyUpCall(e){
	e.preventDefault();
	let keyHit=e.keyCode || e.which;
	// Space
	if(keyHit == 32){
		pausePlayback();
	}
	// F
	if(keyHit == 70){
	}
	// M
	if(keyHit == 77){
	}
	// R
	if(keyHit == 82){
	}
	// Left
	if(keyHit == 37){
	}
	// Right
	if(keyHit == 39){
	}
}

//////////////////////////////////////

function resizeRenderResolution(){
	pxlW=(sW=window.innerWidth)*mapResPerc;
	pxlH=(sH=window.innerHeight)*mapResPerc;
	pxlMouse.sW=sW;
	pxlMouse.sH=sH;
	if(verbose) verbDeviceRes.innerHTML=sW+"x"+sH;
	webcamVideo.setAttribute("width",sW);
	webcamVideo.setAttribute("height",sH);
	setCanvasRes([sW,sH]);
	buildIcons();
}
function setCanvasRes(res,setCanvas=true,save=false){
	pxlW=res[0];
	pxlH=res[1];
	
	findPictureAspect(save);
	bootCamera();
	
	if(setCanvas){
		pxlCanvas.width=pxlW;
		pxlCanvas.height=pxlH;
	}
	pxlCamEngine.setPixelRatio(1);//window.devicePixelRatio*mapResPerc);
	pxlCamEngine.setSize(pxlW/mapResPerc, pxlH/mapResPerc);
	pxlCamCamera.aspect=pxlW/pxlH;
	pxlCamCamera.updateProjectionMatrix();
	pxlCamRenderTarget=new THREE.WebGLRenderTarget(pxlW,pxlH,{
		minFilter:THREE.LinearFilter,
		magFilter:THREE.LinearFilter,
		format:THREE.RGBFormat,
		stencilBuffer:false
	});
	buildShaderPass(true, (save?((res[0]+res[1])/(sW+sH)):1) );
	
	if(camMalformFlip[webcamActive]==true){
		camCorrectionShader.uniforms.uMalformX.value=res[0]/res[1];
	}else{
		camCorrectionShader.uniforms.uMalformX.value=1;
	}
	camCorrectionShader.uniforms.uResScaleX.value=1/res[1];
	camCorrectionShader.uniforms.uResScaleY.value=1/res[0];
	filterShader.uniforms.uResScaleX.value=1/res[0];
	filterShader.uniforms.uResScaleY.value=1/res[1];
	
	pxlRenderStack();
}

//////////////////////////////////////
// pxlCam user-side cookie manager;
//   Kevin Edzenga; 2020
// This will accept the names of variables or array variables
//   and store the contents as a document cookie
// When using readCookie, the original variable is assigned
//   its value is stored in the same structure as when written to the cookie
// This cookie manager WILL NOT work on arrays of Classes & Non-Array Objects
const pxlCookieManager={
	prepend:"pxlCam-", // Suffix name to help searching and avoid cookie name conflictions
	exp:30, // Days till expiration
	path:"path=/", // Update this with the folder name from your domain
	deleteDate:"expires=Thu, 01 Jan 1970 00:00:01 GMT;", // Leave this, this forces cookies to be removed when set
	sub:"_%_", // Sbustitute ; with _%_
	pullData(){ // Read all document cookies
		let cur=document.cookie;
	},
	getExpiration(){ // Set expiration date for the new cookie
		let d=new Date();
		d.setTime( d.getTime() + (this.exp*24*60*60*1000) );
		return "expires="+d.toGMTString()+";";
	},
	valueToString(val){ // Convert given value to a string
		let type=typeof(val);
		if(type=="string"){
			return "'"+val+"'";
		}else if(type=="boolean"){
			return (val?"true":"false");
		}else if(val==null){ // null==undefined true; null===undefined false
			return "null";
		}else if(val==NaN){
			return "NaN";
		}else{
			return val;
		}
	},
	variableToString(arr){ // Convert a given variable to a string; account for arrays or not
		if(Array.isArray(arr)){
			let ret=arr.map((x)=>{
				if(Array.isArray(x)){
					return this.variableToString(x);
				}
				return this.valueToString(x);
			});
			return "["+ret.join(",")+"]";
		}else{
			return this.valueToString(arr);
		}
	},
	hasCookie(cName){ // Check if a cookie exists
		return document.cookie.indexOf(this.prepend+cName)>-1;
	},
	readCookie(cName){ // Read the value of the cookie
		if(this.hasCookie(cName)){
			let reg=new RegExp('(?='+this.prepend+cName+').*?((?=;)|(?=$))', 'g');
			return document.cookie.match(reg)[0].split("=")[1].replace(this.prepend,'').replace(this.sub,';');
		}
		return null;
	},
	isEqual(cName){ // Is the cookie value equal to a viben input
		if(this.hasCookie(cName)){
			return this.readCookie(cName) == this.variableToString(eval(cName));
		}
		return false;
	},
	evalCookie(cName){ // Read all cookie entries with the given suffix
		if(cName){
			if(this.hasCookie(cName)){
				let reg=new RegExp('(?='+this.prepend+cName+').*?((?=;)|(?=$))', 'g');
				eval(document.cookie.match(reg)[0].replace(this.prepend,'').replace(this.sub,';'));
				return true;
			}
			return false;
		}else{
			let reg=new RegExp('(?='+this.prepend+').*?((?=;)|(?=$))', 'g');
			document.cookie.match(reg).forEach(e=>{eval(e.replace(this.prepend,'').replace(this.sub,';'))});
			return true;
		}
	},
	setCookie(cName){ // Set cookie value
		if(typeof(cName)=="string"){
			cName=[cName];
		}
		for(let x=0; x<cName.length;++x){
			let cData=eval(cName[x]);
			cData=this.variableToString(cData);
			cData.replace(";",this.sub);
			document.cookie=this.prepend+cName[x]+"="+cData+";"+this.getExpiration()+this.path;
		}
	},
	clearCookie(cName){ // Clear specific cookie entry
		if(!cName){
			let reg=new RegExp('(?='+this.prepend+').*?(?==)', 'g');
			let curCookies=document.cookie.match(reg);
			curCookies.forEach(c=>{document.cookie=c+"=;"+this.deleteDate+this.path;});
		}else{
			if(typeof(cName)=="string"){
				cName=[cName];
			}
			cName.forEach(c=>{document.cookie=c+"=;"+this.deleteDate+this.path;console.log(c+"=;"+this.deleteDate+this.path);});
		}
	}
}


//////////////////////////////////////

function mapBootEngine(){
	
	// Rederer
	pxlCamEngine=new THREE.WebGLRenderer({
		canvas: pxlCanvas,
		antialias: true,
		preserveDrawingBuffer:true,
	});
	//pxlCamEngine.autoClear=false;
	pxlCamEngine.setClearColor(0x000000);
	pxlCamEngine.setPixelRatio(1);//window.devicePixelRatio);
	pxlCamEngine.setSize(pxlW, pxlH);
	//pxlCamEngine.gammaOutput=true;
	var aspectRatio=pxlCanvas.width/pxlCanvas.height;
	var aspectInverseRatio=pxlCanvas.height/pxlCanvas.width;
	
	pxlCamRenderTarget=new THREE.WebGLRenderTarget(pxlW,pxlH,{
		minFilter:THREE.LinearFilter,
		magFilter:THREE.LinearFilter,
		format:THREE.RGBFormat,
		stencilBuffer:false
	});
	
	haarFeatureRes=[parseInt(pxlW*.25),parseInt(pxlH*.25)];
	if(haarFeatureRes[0]>eigenImageMaxRes || haarFeatureRes[1]>eigenImageMaxRes){
			haarFeatureRes=aspectRatio>1?[eigenImageMaxRes, parseInt(eigenImageMaxRes*aspectInverseRatio)]:[parseInt(eigenImageMaxRes*aspectRatio), eigenImageMaxRes];
	}
	pxlCamHaarFeatureRenderTarget=new THREE.WebGLRenderTarget(...haarFeatureRes,{
		magFilter:THREE.NearestFilter,
		format:THREE.RGBAFormat,//THREE.RedFormat,
	});
	eigenImage=document.createElement("canvas");
	eigenImage.width=haarFeatureRes[0];
	eigenImage.height=haarFeatureRes[1];
	
	//texLoader=new THREE.ImageLoader();
	
	/////////////////////////////////////////////
	
	pxlCamCamera=new THREE.PerspectiveCamera(35,aspectRatio, 1, 3000);
	pxlCamCamera.position.z=sH*2;
	pxlCamCamera.target=new THREE.Vector3(0,0,0);
	pxlCamScene=new THREE.Scene();
	//pxlProcessScene=new THREE.Scene();
	
	var textureList;
	var transformList;
	
	webcamVideo=document.getElementById("webcamVideo");
	webcamVideo.setAttribute("autoplay", "");
	webcamVideo.setAttribute("muted", "");
	webcamVideo.setAttribute("playsinline", "");
	webcamVideo.setAttribute("width",sW);
	webcamVideo.setAttribute("height",sH);
	
	if(verbose){
		webcamVideo.onloadedmetadata=()=>{
			webcamVideo.play();
			if(camSafeResFound){
				verbConsole.innerHTML+="<br> "+webcamVideo.width+ "x"+webcamVideo.height+" || "+ webcamVideo.videoWidth + "x"+ webcamVideo.videoHeight+" ||  "+webcamNameList[webcamActive];
			}
			if(camSafeResFound && camSafeResBooting && !camSafeResBooted){
				camSafeResBooted=true;
				verbConsole.innerHTML+="<br>"+webcamVideo.videoWidth+" x "+webcamVideo.videoHeight;
			}
			
			let vW=webcamVideo.videoWidth;
			let vH=webcamVideo.videoHeight;
			var aspectRatio=vW/vH;
			var aspectInverseRatio=vH/vW;
			haarFeatureRes=[parseInt(vW*.25),parseInt(vH*.25)];
			if(haarFeatureRes[0]>eigenImageMaxRes || haarFeatureRes[1]>eigenImageMaxRes){
					haarFeatureRes=aspectRatio>1?[eigenImageMaxRes, parseInt(eigenImageMaxRes*aspectInverseRatio)]:[parseInt(eigenImageMaxRes*aspectRatio), eigenImageMaxRes];
			}
			pxlCamHaarFeatureRenderTarget=new THREE.WebGLRenderTarget(...haarFeatureRes,{
				magFilter:THREE.NearestFilter,
				format:THREE.RGBAFormat,//THREE.RedFormat,
			});
			eigenImage=document.createElement("canvas");
			eigenImage.width=haarFeatureRes[0];
			eigenImage.height=haarFeatureRes[1];
		}
	}else{
		webcamVideo.onloadedmetadata=()=>{
			webcamVideo.play();
			if(camSafeResFound && camSafeResBooting && !camSafeResBooted){
				camSafeResBooted=true;
			}
		}
	}
	
	vidTexture=new THREE.VideoTexture(webcamVideo);
	vidTexture.minFilter=THREE.LinearFilter;
	vidTexture.magFilter=THREE.LinearFilter;
	vidTexture.format=THREE.RGBFormat;
	/*
	vidGeo=new THREE.PlaneBufferGeometry(sW, sH, sW,sH);
	//vidGeo.scale(.5,.5,.5);
	vidMat=new THREE.MeshBasicMaterial({map:vidTexture});
	vidMesh=new THREE.Mesh(vidGeo, vidMat);
	vidMesh.lookAt(pxlCamCamera.position);
	pxlCamScene.add(vidMesh);
	*/
	findMediaDevices();
	
	///////////////////////////////////////////////////////
	buildShaderPass(true);
	
}