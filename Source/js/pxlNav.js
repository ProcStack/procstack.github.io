"use strict";

import * as THREE from "../libs/three/build/three.module.js";
import Stats from '../libs/three/examples/jsm/libs/stats.module.js';

// pxlNav Environment, Controls, UI imports
import * as PxlBase from './pxlBase/pxlBase.js';
import { pxlShaders } from './pxlBase/shaders/shaders.js';

// Javascript Console Logging; bool
//   Semi-implemented
const verbose = 0;

// The Title of your Project
//   This will be displayed on the 
const projectTitle = "ProcStack";

// Current possible rooms - "VoidEnvironment", "CampfireEnvironment", & "CabinEnvironment"
const startingRoom = "CampfireEnvironment"; 

// Bool to load the environment asset fbx file;
//   This is the included file with test pick-ups / assets
//     ./Public/images/assets/EnvironmentAssets.fbx
//     ./Public/images/assets/EnvironmentAssets_mobile.fbx
//   For further information of each item & object,
//     See pxlNav_docScripts/docs/
const loadEnvAssetFile = true;

const mapCore = "map-core"; // Name of DIV in Index
var mapRenderTarget;
var mapAutoQuality = 1; // Adjust quality to device's capability
var cloud3dTexture = null;

var assetRoot = "images/assets/";
var guiRoot = "images/GUI/";
var roomRoot = "images/rooms/";
var vidRoot = "images/screenContent/";

var mapW,mapH;
var sW = window.innerWidth;
var sH = window.innerHeight;

var mobile = false;
mobile = (/\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent));


const searchParms = new URLSearchParams(window.location.search);

const searchAuto = searchParms.get('auto');
const autoCam = searchAuto!=null ? searchAuto : false;
const searchMobile = searchParms.get('m');
mobile = searchMobile!=null ? searchMobile : mobile;

// ## Reorder how modules handle what data
//  Such a Klucking Fluster ...
const pxlTimer=new PxlBase.Timer();
const pxlCookie=new PxlBase.CookieManager( projectTitle, "/" );
	if( pxlCookie.hasCookie("forceMobile") ){
			mobile = pxlCookie.parseCookie("forceMobile");
	}

// 
const pxlQuality=new PxlBase.QualityController(pxlTimer, pxlCookie, mobile, searchParms);//mobile);
const pxlUtils=new PxlBase.Utils(assetRoot, mobile, pxlTimer);
const pxlFile=new PxlBase.FileIO(pxlUtils, pxlQuality, pxlTimer, assetRoot, guiRoot, roomRoot, vidRoot);

	
const pxlAudio=new PxlBase.Audio( pxlTimer );
const pxlAutoCam=new PxlBase.AutoCamera( autoCam, mobile, pxlTimer, pxlUtils, pxlAudio );
	pxlFile.pxlAutoCam=pxlAutoCam;
const pxlUser=new PxlBase.User();
	
	
const pxlEnv=new PxlBase.Environment( 'Default', mobile, pxlUtils, pxlTimer, pxlAudio, pxlFile, null, pxlUser, pxlQuality, pxlShaders, pxlAutoCam);
	pxlUser.pxlEnv=pxlEnv;
	pxlAudio.pxlEnv=pxlEnv;
	pxlAutoCam.pxlEnv=pxlEnv;
	window.pxlNav = pxlEnv;
	
const pxlDevice=new PxlBase.Device( projectTitle, mapCore, mobile, pxlTimer, pxlAutoCam, pxlAudio, pxlUser, pxlEnv, pxlQuality);
	pxlAudio.pxlDevice=pxlDevice;
	pxlQuality.pxlDevice=pxlDevice;
	pxlAutoCam.pxlDevice=pxlDevice;
	
const pxlCamera=new PxlBase.Camera( pxlTimer, pxlAudio, pxlEnv, pxlUser, pxlUtils, pxlDevice, pxlQuality, pxlAutoCam);
	pxlEnv.pxlCamera=pxlCamera;
	pxlDevice.pxlCamera=pxlCamera;
	pxlAutoCam.pxlCamera=pxlCamera;
	
	
const pxlGuiDraws=new PxlBase.GuiDraws( projectTitle, pxlCookie, pxlTimer, pxlAudio, pxlUtils, pxlUser, pxlDevice, pxlCamera, pxlQuality, pxlFile, pxlEnv, assetRoot, guiRoot, pxlAutoCam );
	pxlAudio.pxlGuiDraws=pxlGuiDraws;
	pxlCamera.pxlGuiDraws=pxlGuiDraws;
	pxlDevice.pxlGuiDraws=pxlGuiDraws;
	pxlEnv.pxlGuiDraws=pxlGuiDraws;
	
pxlEnv.pxlDevice=pxlDevice;
pxlQuality.pxlEnv=pxlEnv;
pxlFile.pxlUser=pxlUser;
pxlFile.pxlEnv=pxlEnv;
pxlFile.pxlCamera=pxlCamera;
pxlFile.pxlDevice=pxlDevice;
pxlFile.pxlShaders=pxlShaders;

pxlEnv.bootRoom=startingRoom;
pxlGuiDraws.prepLoader();

pxlQuality.init() // Load cookies and update settings
	
    

// ========================================



function pxlBoot(){
	if(verbose){
		console.log("Verbose console logs are ON");
	}
	// Device orientation & gyroscope/accelerometer
	pxlCamera.buildDeviceMonitors();
	
	
	let jitsiVideoDiv=document.getElementById("videospace");
	if(jitsiVideoDiv){
		jitsiVideoDiv.style.visibility="none";
	}
	jitsiVideoDiv=document.getElementById("largeVideoContainer");
	if(jitsiVideoDiv){
		jitsiVideoDiv.style.visibility="none";
	}
	
	pxlGuiDraws.booted( );
		
	pxlGuiDraws.mapCanvas=document.getElementById(mapCore);
	mapW=window.innerWidth*pxlQuality.screenResPerc;
	pxlGuiDraws.mapCanvas.width=window.innerWidth;
	mapH=window.innerHeight*pxlQuality.screenResPerc;
	pxlGuiDraws.mapCanvas.height=window.innerHeight;
	if(pxlDevice.canCursorLock){
		pxlGuiDraws.mapCanvas.requestPointerLock=
				pxlGuiDraws.mapCanvas.requestPointerLock ||
				pxlGuiDraws.mapCanvas.mozRequestPointerLock ||
				pxlGuiDraws.mapCanvas.webkitRequestPointerLock;
		document.requestPointerLock=
				pxlGuiDraws.mapCanvas.exitPointerLock ||
				pxlGuiDraws.mapCanvas.mozExitPointerLock ||
				pxlGuiDraws.mapCanvas.webkitExitPointerLock;
	}
  
  // This should live in Device.js
  //  getUserMediaPermission().then( (resp)=>{
        pxlGuiDraws.mapPrepPrompts(); // Prep GUI & Hud DOM Elements
        pxlEnv.boot(); // Environment Asset Prep
        //pxlVideo.init();
        
        //pxlGuiDraws.djBuildPlayer(); // Build Audio Player
        
        pxlQuality.startBenchmark(); // Start benchmark timer
        
        mapBootEngine().then( ()=>{
            let promiseList=[];
            promiseList.push( pxlEnv.loadRoom( startingRoom ) );
            if( pxlEnv.bootRoom != startingRoom ){
              promiseList.push( pxlEnv.loadRoom( pxlEnv.bootRoom ) );
            }
            
            Promise.all( promiseList ).then( ()=>{
                
                pxlEnv.buildComposers();

                //pxlDevice.resizeRenderResolution();
                cameraRunAnimatorMobile();
                pxlGuiDraws.stepLoader("postBoot"); // --
                pxlEnv.mapRender();
                pxlDevice.setCursor("grab");
            });
        });
	//});
}


function bootContinue(){
    
}

function getUserMediaPermission(){
	return new Promise( (resolve, reject)=>{
        if( navigator.mediaDevices && navigator.mediaDevices.getUserMedia && !mobile){
            navigator.mediaDevices.getUserMedia({audio:true, video:true}).then( (resp) => {
                resolve( true );
            }).catch( (err)=>{
                resolve( false );
            });
        }else{
            resolve( false );
        }
    });
}



////////////////////////////////////////////////////
// -- ENGINE PREP  &  SCENE -- -- -- -- -- -- -- //
//////////////////////////////////////////////////
function mapBootEngine(){
    return new Promise( (resolve, reject)=>{
        // Rederer
        pxlEnv.engine=new THREE.WebGLRenderer({
            canvas: pxlGuiDraws.mapCanvas,
            alpha:true,
            antialias: false,
            sortObjects:true,
            depth:true,
            //logarithmicDepthBuffer:true,
        });
        var options = {
            format : THREE.RGBAFormat,
            antialias: false,
            sortObjects:true,
            alpha:true,
            type : /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType
        };
        pxlEnv.engine.autoClear=true;
        
        pxlEnv.engine.debug.checkShaderErrors=false;
        //%= Dev
        pxlEnv.engine.debug.checkShaderErrors=true;
        //%
        
        if(verbose){
            if(pxlEnv.engine.extensions.get('WEBGL_depth_texture')){
                console.log("  ** WebGL Depth Texture support enabled **");
            }else{
                console.log("  ** WebGL Depth Texture NOT supported **");
            }
            console.log("-- Depth Composer pass currently not used, --");
            console.log("  -- A future technology for Metal Asylum --");
        }
        let bgCd=0x000000;
        let bgCdHex="#000000";
        pxlEnv.engine.setClearColor(pxlEnv.fogColor, 0);
        //pxlEnv.engine.setPixelRatio(window.devicePixelRatio);
        //pxlEnv.engine.setSize(mapW/pxlQuality.screenResPerc, mapH/pxlQuality.screenResPerc);
        pxlEnv.engine.setPixelRatio(1);
        pxlEnv.engine.setSize(1024, 1024);
        //pxlEnv.engine.gammaOutput=true;
        //pxlEnv.engine.gammaFactor=3.2;
        //pxlEnv.engine.outputEncoding=THREE.sRGBEncoding;
        pxlEnv.engine.outputEncoding=THREE.GammaEncoding;

        pxlEnv.engine.shadowMap.enabled=true;
        pxlEnv.engine.shadowMap.type=THREE.BasicShadowMap;
        //THREE.PCFScatterShadowMap;//PCFShadowMap;//PCFSoftShadowMap;
          //pxlEnv.engine.shadowMap.type=THREE.PCFSoftShadowMap;
        
        
        // Build render targets for depth and world space reference
        pxlEnv.scene=new THREE.Scene();
        pxlEnv.scene.fog=pxlEnv.fog;
        
        //pxlEnv.scene.background = new THREE.Color(bgCdHex);
        pxlEnv.scene.background = new THREE.Color(bgCdHex);//pxlEnv.fogColor;
        pxlEnv.scene.renderTarget=new THREE.WebGLRenderTarget(sW*pxlQuality.screenResPerc,sH*pxlQuality.screenResPerc,options);
        pxlEnv.scene.renderTarget.texture.format=THREE.RGBAFormat;
        pxlEnv.scene.renderTarget.texture.minFilter=THREE.LinearFilter;
        pxlEnv.scene.renderTarget.texture.magFilter=THREE.LinearFilter;
        pxlEnv.scene.renderTarget.texture.generateMipmaps=false;
        //pxlEnv.scene.renderTarget.texture.type=THREE.FloatType;
        pxlEnv.scene.renderTarget.depthBuffer=true;
        pxlEnv.scene.renderTarget.depthTexture = new THREE.DepthTexture();
        pxlEnv.scene.renderTarget.depthTexture.format=THREE.DepthFormat;
        pxlEnv.scene.renderTarget.depthTexture.type=THREE.UnsignedIntType;
        //pxlEnv.scene.renderTarget.depthTexture.type=THREE.UnsignedShortType;
        pxlEnv.scene.renderWorldPos=new THREE.WebGLRenderTarget(sW*pxlQuality.screenResPerc,sH*pxlQuality.screenResPerc,options);
        pxlEnv.scene.renderWorldPos.texture.format=THREE.RGBAFormat;
        pxlEnv.scene.renderWorldPos.texture.minFilter=THREE.NearestFilter;
        pxlEnv.scene.renderWorldPos.texture.magFilter=THREE.NearestFilter;
        pxlEnv.scene.renderWorldPos.texture.generateMipmaps=false;
        
        options.alpha=true;
        pxlEnv.scene.renderGlowTarget=new THREE.WebGLRenderTarget( parseInt(sW*pxlQuality.screenResPerc), parseInt(sH*pxlQuality.screenResPerc),options);
        pxlEnv.scene.renderGlowTarget.texture.format=THREE.RGBAFormat;
        pxlEnv.scene.renderGlowTarget.texture.generateMipmaps=false;
        
        /*pxlEnv.warpZoneRenderTarget=new THREE.WebGLRenderTarget(1024,1024,options);
        pxlEnv.warpZoneRenderTarget.texture.format=THREE.RGBFormat;
        pxlEnv.warpZoneRenderTarget.texture.minFilter=THREE.LinearFilter;
        pxlEnv.warpZoneRenderTarget.texture.magFilter=THREE.LinearFilter;
        pxlEnv.warpZoneRenderTarget.texture.generateMipmaps=false;*/
        
        var aspectRatio=pxlGuiDraws.mapCanvas.width/pxlGuiDraws.mapCanvas.height;
        // To change the near and far, see Environment .init()
        pxlCamera.camera=new THREE.PerspectiveCamera( pxlEnv.pxlCamFOV, 1, pxlEnv.camNear, pxlEnv.camFar);
        pxlAutoCam.camera=pxlCamera.camera;
        
        //pxlEnv.listener = new THREE.AudioListener();
        //pxlCamera.camera.add( pxlEnv.listener );
        
        //pxlCamera.camera.position.set(-20,0,15);
        pxlCamera.cameraAimTarget=new THREE.Object3D();
        pxlEnv.scene.add(pxlCamera.cameraAimTarget);
        pxlCamera.camera.target=pxlCamera.cameraAimTarget;
        
        //pxlEnv.roomSceneList[pxlEnv.mainRoom]=pxlEnv;
        
        //pxlCamera.camera.layers.enable(0);
        pxlCamera.camera.layers.enable(1);
        pxlCamera.camera.layers.enable(2);
        
        
        pxlEnv.scene.add( pxlEnv.userAvatarGroup );
        
    ///////////////////////////////////////////////////
    // -- FILE I/O & Shared Assets -- -- -- -- -- -- //
    ///////////////////////////////////////////////////
        // Texture needs
        pxlUtils.texLoader=new THREE.ImageLoader();
        
        cloud3dTexture=pxlUtils.loadTexture(assetRoot+"cloud3d_lowRes.jpg");
        cloud3dTexture.wrapS=THREE.RepeatWrapping;
        cloud3dTexture.wrapT=THREE.RepeatWrapping;
        pxlEnv.cloud3dTexture=cloud3dTexture;
        
        pxlEnv.softNoiseTexture=pxlUtils.loadTexture( assetRoot+"SoftNoise_512.jpg" );
        pxlEnv.softNoiseTexture.wrapS = THREE.RepeatWrapping;
        pxlEnv.softNoiseTexture.wrapT = THREE.RepeatWrapping;
        
        pxlEnv.detailNoiseTexture=pxlUtils.loadTexture( assetRoot+"Noise_UniformSmooth.jpg" );
        pxlEnv.detailNoiseTexture.wrapS = THREE.RepeatWrapping;
        pxlEnv.detailNoiseTexture.wrapT = THREE.RepeatWrapping;
        
        let chroAberUVTexture = pxlUtils.loadTexture(assetRoot+"ChromaticAberrationUV.png");
        chroAberUVTexture.minFilter=THREE.LinearFilter;
        chroAberUVTexture.magFilter=THREE.LinearFilter;
        pxlEnv.chroAberUVTexture=chroAberUVTexture;
        
        pxlEnv.blockAnimTexture=pxlUtils.loadTexture(assetRoot+"blockPortalWarp_1k.jpg");
        pxlEnv.blockAnimTexture.minFilter=THREE.LinearFilter;
        pxlEnv.blockAnimTexture.magFilter=THREE.LinearFilter;

        pxlEnv.mathFuncsTexture=pxlUtils.loadTexture(assetRoot+"MathFuncs_512.jpg");
        pxlEnv.mathFuncsTexture.minFilter=THREE.LinearFilter;
        pxlEnv.mathFuncsTexture.magFilter=THREE.LinearFilter;
        

    ///////////////////////////////////////////////////
    // -- GEOMETRY  -- -- -- -- -- -- -- -- -- -- -- //
    ///////////////////////////////////////////////////
        
        var textureList, transformList;
        // deskCandleHolder
        
        var tListIdent=(parentObj=null)=>{
            var ident={
            "t":[0,0,0],
            "r":[0,0,0],
            "s":[1,1,1]
            };
            if(parentObj != null){
                ident[parentObj[0]]=parentObj[1];
            }
            return ident;
        }
        
        transformList=tListIdent();

        let mobileSuffix="";
        if( mobile ){
            mobileSuffix="_mobile";
        }
				
				if( loadEnvAssetFile ){
					let sceneFile=assetRoot+"EnvironmentAssets"+mobileSuffix+".fbx";
					// This is a separate fbx loaded specifically for the Environment Asset FBX
					//   It opens up the found scene objects to easier global access
					pxlFile.loadSceneFBX(sceneFile, textureList, transformList, verboseLoading,'EnvironmentAssets',[pxlEnv.scene]);
				}

    ///////////////////////////////////////////////////
    // -- LIGHTS -- -- -- -- -- -- -- -- -- -- -- -- //
    ///////////////////////////////////////////////////
        //Shadow Maps-
        pxlEnv.engine.shadowMap.enabled=true;
        if(mobile){
            pxlEnv.engine.shadowMap.type=THREE.BasicShadowMap;
        }else{
            pxlEnv.engine.shadowMap.type=THREE.PCFSoftShadowMap;
            //pxlEnv.engine.shadowMap.type=THREE.PCFSoftShadowMap;
        }
        
        // Every light is another frag level dot to matrix calculation
        // Add at your own risk
        var ambLight=new THREE.AmbientLight(0xffffff,.05);
        pxlEnv.lightList.push(ambLight);
        pxlEnv.scene.add(ambLight);
        var dirLight=new THREE.DirectionalLight(0xffffff,.1);
        dirLight.position.set(1000,550,1200);
        pxlEnv.lightList.push(dirLight);
        pxlEnv.scene.add(dirLight);
        /*var dirLightB=new THREE.DirectionalLight(0xffffff,.05);
        dirLightB.position.set(-500,750,1500);
        pxlEnv.lightList.push(dirLightB);
        pxlEnv.scene.add(dirLightB); */
        
        resolve( true );
    });
    
	
	
}


//////////////////////////////////////

var verboseLoading=new THREE.LoadingManager();
verboseLoading.onProgress=function(i,l,t){
	if(verbose){console.log(i,l,t);}
};

var onProgress=function(xhr){
	if(verbose && xhr.lengthComputable){
		var perc=xhr.loaded/xhr.total * 100;
		console.log(parseInt(perc)+" downloaded");
	}
};
var onError=function(xhr){
	if(verbose){console.log("ERROR! - Real descriptive...");}
}
var onLoad=null;

function mapOnUpRayCaster(){
	var camResetLatchObj=0;
}



// Booted or NonBooted
// After booting, run the last timeout
function cameraRunAnimator( roomsRan=0 ){
	let stillLoadingCheck=false;
	let keys=Object.keys(pxlEnv.geoLoadList);

	for(let x=0; x<keys.length; ++x){ // Check if any objects are still loading
		stillLoadingCheck=pxlEnv.geoLoadList[keys[x]]==0;
		if(stillLoadingCheck){ // If entry isn't 1, means not fully loaded
			break;
		}
	}
	if(stillLoadingCheck || roomsRan==0){ // Files are still loading
        if( stillLoadingCheck==false && roomsRan==0){
            pxlGuiDraws.stepLoader("camAnim"); // --
            roomsRan= 1;
            pxlEnv.roomNameList.forEach( (r)=>{
                pxlEnv.roomSceneList[r].init();
            });
            pxlEnv.buildRoomEnvironments();
        }
		setTimeout(()=>{
			cameraRunAnimator( roomsRan );
		},300);
	}else{
		pxlGuiDraws.stepLoader("camAnim"); // --
		pxlCamera.setTransform( pxlEnv.camInitPos, pxlEnv.camInitLookAt );
		pxlCamera.updateCamera();
        
        // ## Boot Sub Rooms
        /*if( !pxlDevice.mobile && !pxlAutoCam.enabled ){
            rolLobby.build();
            pxlEnv.stepShaderFuncArr.push( rolLobby );
        }*/
        
		// Append start up functions
		let snapShotCommands=pxlEnv.warpPortalQueue();
		//let camStats={ fov:pxlCamera.camera.fov, zoom:pxlCamera.camera.zoom, aspect:pxlCamera.camera.aspect };
		//runStartFunctions( camStats, 0, true, snapShotCommands);

		pxlQuality.mapAutoQualityUpdate(1,true);
		runPrepDrawScenes( 0, true, snapShotCommands );
	}
}

function cameraRunAnimatorMobile( ){
	let stillLoadingCheck=false;
	let keys=Object.keys(pxlEnv.geoLoadList);

	for(let x=0; x<keys.length; ++x){ // Check if any objects are still loading
		stillLoadingCheck=pxlEnv.geoLoadList[keys[x]]==0;
		if(stillLoadingCheck){ // If entry isn't 1, means not fully loaded
			break;
		}
	}
	if(stillLoadingCheck ){ // Files are still loading
		setTimeout(()=>{
			cameraRunAnimatorMobile( );
		},300);
	}else{
		pxlGuiDraws.stepLoader("camAnim"); // --
		pxlCamera.setTransform( pxlEnv.camInitPos, pxlEnv.camInitLookAt );
		pxlCamera.updateCamera();
        
        // ## Boot Sub Rooms
        /*if( !pxlDevice.mobile && !pxlAutoCam.enabled ){
            rolLobby.build();
            pxlEnv.stepShaderFuncArr.push( rolLobby );
        }*/
        
		// Append start up functions
		let snapShotCommands=pxlEnv.warpPortalQueue();
		//let camStats={ fov:pxlCamera.camera.fov, zoom:pxlCamera.camera.zoom, aspect:pxlCamera.camera.aspect };
		//runStartFunctions( camStats, 0, true, snapShotCommands);

        pxlEnv.roomNameList.forEach( (r)=>{
            pxlEnv.roomSceneList[r].init();
        });
        pxlEnv.buildRoomEnvironments();

		pxlQuality.mapAutoQualityUpdate(1,true);
		runPrepDrawScenes( 0, true, snapShotCommands );
		// Bypass scene screenshots, as there are no portals in procstack.git.io
		//   Check for portals would only be able to happen after loading fbx
		//     Which this loader step occurs after room initiation
	  //runPrepDrawScenes( 0, false, [] );
	}
}


function runPrepDrawScenes(runner=0, jumpCam=true, cmdList=[]){
	runner++;
	if( cmdList.length > 0 ){
		if(jumpCam){
			jumpCam=false;
			let curRoom=cmdList[cmdList.length-1];
			pxlCamera.warpToRoom( curRoom );
		}
		
		pxlCamera.colliderPrevObjHit=null;
		// Erroring here means shader failure in scene
		pxlEnv.mapRender( false );
		
		if(runner%10==0){
			let exitingRoom=cmdList.pop();
			// Snapshots / Env Map Gen
			//pxlEnv.getSceneSnapshot(exitingRoom);
			jumpCam=true;
            
			pxlGuiDraws.stepLoader(exitingRoom); // --
		}
		
		requestAnimationFrame( ()=>{ runPrepDrawScenes( runner, jumpCam, cmdList ); });
	}else{
		pxlGuiDraws.stepLoader("Post Room Prep"); // --
        
		pxlNavPrepSettings(); 
	}
}


// All booting has completed
// Final prep; settings and gui values based on cookies or benchmarking
// Then release the kraken
function pxlNavPrepSettings(){
	pxlCamera.warpToRoom( pxlEnv.bootRoom, true );
	pxlQuality.endBenchmark(); // All the heavy lifting as completed
	
		
	pxlGuiDraws.stepLoader( "Nav Settings" ); // --
	
    startPxlNav();
	
}


// ========================================

function startPxlNav(){
	pxlTimer.init();
	pxlTimer.play();
	
	pxlGuiDraws.applyCookies();
		
	if(pxlGuiDraws.mapCanvas){ pxlGuiDraws.mapCanvas.focus(); }
	
	let curRoom=pxlEnv.roomSceneList[pxlEnv.currentRoom];
	curRoom.active=true;
	curRoom.startTime=pxlTimer.msRunner.x;
	
	// ## Must be a reason I'm not doing a pop() here
	pxlEnv.roomPostGuiCalls.forEach( (e)=>{ e.postGuiEvent(); });
	pxlEnv.roomPostGuiCalls=[];
	
    
    if( pxlAutoCam.enabled ){
        pxlGuiDraws.guiToggleVisibility( false );
    }
    pxlAutoCam.init();
    //pxlVideo.boot();



    pxlDevice.resizeRenderResolution();
		pxlEnv.mapRender();
		
    pxlQuality.setDependentSettings();
    
    setTimeout( ()=>{
        pxlEnv.postBoot();
        if(pxlGuiDraws.mapPrompt) pxlGuiDraws.promptFader(pxlGuiDraws.mapPrompt, false,null,true);
        if(pxlGuiDraws.mapPromptBG) pxlGuiDraws.promptFader(pxlGuiDraws.mapPromptBG, false,null,false);
    }, 200);
}

// -- -- -- -- -- -- -- -- -- -- -- //


function nextEffect(){
	effectMode=(effectMode+1)%3;
	if(effectMode<2){
		darkenImageDist=1;
		smoothReachDist=pxlQuality.shaderSmartBlurReach;
		edgeReachDist=10;
	}else{
		smoothReachDist=pxlQuality.shaderSmartBlurReach;
		hueSatch_flattenMultColor=0;
		hueSatch_rotateHue=0;
	}
	buildShaderPass(true);
	findPictureAspect();
}
function findPictureAspect(save=false){ // ## Computer aspect ratio looks wrong, means pxlDevice.mobile is too.  CHECK THIS SHAZZBUTT!
	var aspectMult=[1,1];
	camPictureAspect=[1,1];
	var malformAdjust=1;
	let res=[sW,sH];
	if(camSafeRes[webcamActive]!=null && !save){
		let safe=[...camSafeRes[webcamActive]]; // Most likely culpret, camSafeRes[webcamActive] may not be up to date
		safe=mobile&&sH>sW?[safe[1],safe[0]]:safe; // Second most likely culpret; ie, video res displays 1920x1080, but draws as 1080x1920
		let resAspect=sW/sH;
		let safeAspect=[safe[0]/safe[1], safe[1]/safe[0]];
		
		aspectMult[0]=(resAspect>safeAspect) ? 1 : res[0]/(res[1]*safeAspect[0]) ;
		aspectMult[1]=(resAspect>safeAspect) ? res[1]/(res[0]*safeAspect[1]) : 1 ;
		if(aspectMult[0]>1){
			aspectMult[1]*=1/aspectMult[0];
			aspectMult[0]=1;
		}else if(aspectMult[1]>1){
			aspectMult[0]*=1/aspectMult[1];
			aspectMult[1]=1;
		}
		
		// Should never be the case, but if the webcamVideo or pxlCamCore DOM object's resolution fails to set, catch the NaN value
		// Most likely I'm buggering around with reorganizing my code, and don't want to go on a goose chase finding why things are drawing wrong
		if(isNaN(aspectMult[0]) || isNaN(aspectMult[1])){
			aspectMult=[1,1];
		}
		camPictureAspect=[...aspectMult];
		
		// ## Freaking wide lens camera messing with me.
		// This is a patch for wide cam drawing half width... ugh...
		//if(camMalformFlip[webcamActive]==true){
		//	malformAdjust=res[0]/res[1];
		//}
	}
	camCorrectionShader.uniforms.uMalformX.value=malformAdjust;
	camCorrectionShader.uniforms.uResAspectX.value=camPictureAspect[0];
	camCorrectionShader.uniforms.uResAspectY.value=camPictureAspect[1];
}

(()=>{pxlBoot()})();
