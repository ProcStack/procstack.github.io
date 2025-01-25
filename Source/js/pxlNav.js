//
//  Core pxlNav Engine
const pxlNavVersion = "0.0.18";
//      Written by Kevin Edzenga 2020;2024-2025

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// 
//   When importing this module,
//     Navigating the nested classes can be a bit tricky.
//   To help with that, use `pxlNav.trigger` in this file to send events to your custom pxlNav rooms.
//     Used like - `pxlNav.trigger('toRoom','changeRoom','SaltFlatsEnvironment')`
//     This way you can trigger room events or custom code in your rooms
//   Use the `onMessage( *type*, *value* )` function in your room to catch the events you send.
//
//   The only Callback for subscription is "booted" at the moment, more to come!
//     Usage - `pxlNav.subscribe('booted', yourCallbackFunc)`
//       This will trigger when the engine has fully booted and is ready to be addressed.
//         ALL rooms, assets, files, and initial functions have completed by this point.
//           ::the progress bar fades out::
//
//   Until I find time to make it easier to connect to `pxlDevice` events.
//     For things like mouse position, clicks, mobile phone pose/orientation, etc.
//   You'll need to stick your nose into `./js/pxlNav/core/Device.js`
//     For all your mouse drag, mouse velocity, key states, etc.

//
// -- -- --
//

//   *Note to pxlNav modifiers* -
//     `//%=` `//%`  and  `//&=` `//&`
//        Are used to mark code that is removed during webpack version building
//          The sandwiched code is for the developmental & moderator specific code & builds.
//            ( The initial need for pxlNav was as a virtual event space after all. )
//        Treat them the same as `/*` & `*/` for commenting out code
//          So if you remove a `//%` and not the before `//%=`, it will likely break your build




// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- --

import {
  WebGLRenderer,
  Scene,
  Color,
  WebGLRenderTarget,
  RGBAFormat,
  LinearFilter,
  RepeatWrapping,
  DepthTexture,
  DepthFormat,
  UnsignedIntType,
  UnsignedShortType,
  BasicShadowMap,
  PCFSoftShadowMap,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Object3D,
  FloatType,
  NearestFilter,
  HalfFloatType,
  SRGBColorSpace,
  LinearSRGBColorSpace,
  ColorManagement
} from "./libs/three/three.module.min.js";

import { pxlBase } from './pxlNav/pxlBase.js';
import { pxlEnums } from './pxlNav/core/Enums.js';
import { pxlOptions } from './pxlNav/core/Options.js';
import { pxlShaders } from './pxlNav/shaders/shaders.js';
import { pxlEffects } from './pxlNav/effects/effects.js';

import { RoomEnvironment } from './pxlNav/RoomClass.js';

const pxlCore = "pxlNav-coreCanvas"; // Name of DIV in Index
var cloud3dTexture = null;


var mapW,mapH;
var sW = window.innerWidth;
var sH = window.innerHeight;




// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- --


/**
 * pxlNav - Core Engine
 *   The primary entry point for the pxlNav engine.
 * Initialize
 * @param {object} options - The options object for the pxlNav environment
 * @param {string} projectTitle - The title of the project
 * @param {string} startingRoom - The initial room to load
 * @param {string[]} roomBootList - A list of rooms to load
 * @example
 *  // Initialize the pxlNav environment
 *  const pxlNavEnv = new pxlNav( pxlEnums.VERBOSE_LEVEL.ERROR || 2, "My Crunkle Dunk Project", "./pxlRooms", "CampfireEnvironment", ["CampfireEnvironment", "SaltFlatsEnvironment"] );
 * @returns {pxlNav} - The pxlNav environment object
 * @example
 *  // Subscribe to events emitted from pxlNav for callback handling
 *  //   Non loop - pxlNavObj.subscribe("pxlNavEventNameHere", procPages.functionName.bind(procPages));
 *  const printEvent = ( eventType, eventValue )=>{
 *    console.log( eventType, eventValue );
 *  };
 *  const myClassObj = new MyCustomClass();
 *
 *  // Subscribe a single function to an event -
 *  pxlNavEnv.subscribe( "booted", printEvent );
 *
 *  // Or multiple event subscriptions -
 *  const pageListenEvents = [ "booted", "shaderEditorVis", "roomChange-Start", "roomChange-Middle", "roomChange-End", "fromRoom", "pingPong" ];
 *  pageListenEvents.forEach( ( eventType )=>{
 *     // Subscribe functions to events -
 *    pxlNavEnv.subscribe( eventType, printEvent );
 *    // Make sure to bind the class object if you are using class methods
 *    pxlNavEnv.subscribe( eventType, myClassObj.eventHandler.bind(myClassObj) );
 *  }); 
 * 
 * @example
 *  // Trigger events within pxlNav
 *  // Possible triggers -
 *  //   "warptoroom" - Change the room to a new room
 *  //   "ping" - Send a "pong" event
 *  //   "roommessage" - Send a message to the current pxlRoom, add a `onMessage( eventType, eventValue)` method in your pxlRoom to get outside messages.
 *  pxlNavEnv.trigger( "ping" );
 * @returns eventListenerCallback( "pingPong", "pong" )
 * 
 */
class pxlNav{
  constructor( options, projectTitle, startingRoom, roomBootList ){
    this._active = false;

    // -- -- --
    let pxlRoomRoot = "./pxlRooms";
    if( options.hasOwnProperty("pxlRoomRoot") ){
      pxlRoomRoot = options["pxlRoomRoot"];
    }

    // Enums object
    this.pxlEnums = pxlEnums;

    // Option Checks & Defaults
    this.options = {
      loadList : ["Cloud3d", "SoftNoise", "SmoothNoise", "WarpAnimTexture"],
      // TODO : Get these to be pxlNav options pre-boot
      //loadList : ["Cloud3d", "SoftNoise", "SmoothNoise", "ChromaticAberration", "WarpAnimTexture", "MathFuncs"],
    };
    this.options = Object.assign( this.options, options );
    let optionKeys=Object.keys( this.options );
    let defaultKeys=Object.keys( pxlOptions );
    defaultKeys.forEach( (k)=>{
      if( !optionKeys.includes( k ) ){
        this.options[k]=pxlOptions[k];
      }
    });

    // -- -- --

    this.verbose = this.options["verbose"];
    this.projectTitle = projectTitle;
    this.startingRoom = startingRoom;
    if( !roomBootList.includes( startingRoom ) ){
      roomBootList.push( startingRoom );
    }
    this.roomBootList = roomBootList
    this.callbacks = {};

    this.uriHashParms = this.findHashParms();
    this.mobile = this.isMobile();
    this.autoCam = this.getHashParm("autoCam", false);
    this.loadPercent=0.0;

    this.folderDict = {
      "assetRoot" : "assets/",
      "guiRoot" : "assets/GUI/",
      "roomRoot" : "assets/rooms/",
      "vidRoot" : "assets/screenContent/"
    };

    this.validEvents = {
      "booted" : "Emitted after the engine has fully booted and is ready to be addressed.",
      "shaderEditorVis" : "Returns a [bool]; Emitted when the shader editor is toggled on or off.",
      "roomChange-Start" : "Emitted when the room change transition begins.",
      "roomChange-Middle" : "Emitted when the room change process occurs mid transition.",
      "roomChange-End" : "Returns a [bool]; Emitted when the room change transition ends.",
      "fromRoom" : "Returns a custom object; Emitted from your Room code you choose to emit during run time.",
      "device-keydown" : "Returns an [int]; The just pressed key.",
      "device-keyup" : "Returns an [int]; The just released key.",
      "device-resize" : "Returns an [{height:#,width:#}]; Height Width object of the new window size.",
      "camera-move" : "Returns a {'pos':vec3(),'dist':float}; Emitted when the camera moves.",
      "camera-rotate" : "Returns a [quaternion]; Emitted when the camera rotates.",
      "camera-jump" : "Returns a [bool]; Emitted when the camera jumps to a new position.",
      "camera-fall" : "Returns a [bool]; Emitted when the camera starts to free-fall / gravity.",
      "camera-landed" : "Returns a [bool]; Emitted when the camera lands from a jump / fall.",
      "camera-collision" : "Returns a [bool]; Emitted when the camera collides with an object.",
      "pxlNavEventNameHere" : "Never emitted; You did some copy'pasta.",
      "" : "** NOTE : callbacks get an event object shaped -  **",
      "" : "** { 'type' : *eventName*, 'value' : *data* } **",
      "" : "",
      "help" : "Hello! I'm here to help you!",
      "pingPong" : "Send 'ping', Get 'pong'! - pxlNav.trigger('ping');",
    };
    this.validEventsKeys = Object.keys( this.validEvents );



    // Bool to load the environment asset fbx file;
    //   This is the included file with test pick-ups / assets
    //     ./Source/assets/EnvironmentAssets.fbx
    //   For further information of each item & object,
    //     See https://github.com/ProcStack/pxlNav/tree/main/docs
    // TODO : Turning this off breaks loading, fix that
    this.loadEnvAssetFile = true; // this.options['LoadEnvAssetFile'];


    this.pxlTimer = new pxlBase.Timer();
    this.pxlShaders = pxlShaders;
    this.pxlCookie = new pxlBase.CookieManager( projectTitle, "/" );
    if( this.pxlCookie.hasCookie("forceMobile") ){
        this.mobile = pxlCookie.parseCookie("forceMobile");
    }
    this.pxlQuality = new pxlBase.QualityController( this.verbose, this.mobile, this.uriHashParms );
    this.pxlUtils = new pxlBase.Utils( this.folderDict["assetRoot"], this.mobile );
    this.pxlFile = new pxlBase.FileIO( this.folderDict );

    this.pxlExtensions = new pxlBase.Extensions();

    this.pxlAudio = new pxlBase.Audio( this.pxlTimer );
    this.pxlAutoCam = new pxlBase.AutoCamera( this.autoCam, this.mobile );
    this.pxlAutoCam.active = false;

    this.pxlUser = new pxlBase.User();

    this.pxlEnv = new pxlBase.Environment( this.options, this.startingRoom, this.mobile );
    this.pxlDevice = new pxlBase.Device( projectTitle, pxlCore, this.mobile, this.autoCam );
    
    // Default Grid Size 50, Collider Bounds as reference 1000.0
    //  The reference bounds are used to scale down the grid size for smaller bbox colliders,
    //    Helping with higher poly counts for performance
    this.pxlColliders = new pxlBase.Colliders( this.verbose, this.options["collisionScale"]["gridSize"], this.options["collisionScale"]["gridReference"] );


    this.pxlCamera = new pxlBase.Camera();
    // Disable Free-Roam camera mode if static camera is enabled
    if( this.options["staticCamera"] ){
      this.pxlCamera.toggleMovement( false );
    }

    this.pxlAnim = new pxlBase.Animation( this.folderDict["assetRoot"], this.pxlTimer );

    this.pxlGuiDraws = new pxlBase.GUI( this.verbose, projectTitle, this.folderDict["assetRoot"], this.folderDict["guiRoot"] );
    
    // TODO : These should really be requested via pxlEnv methods, but for now...
    //          Too many dependencies still to refactor, but it's cleaner than its ever been, so I'll take it!
    this.pxlQuality.setDependencies( this );
    this.pxlUtils.setDependencies( this );
    this.pxlFile.setDependencies( this );
    this.pxlAudio.setDependencies( this );
    this.pxlAutoCam.setDependencies( this );
    this.pxlEnv.setDependencies( this );
    this.pxlAnim.setDependencies( this );
    this.pxlDevice.setDependencies( this );
    this.pxlColliders.setDependencies( this );
    this.pxlCamera.setDependencies( this );
    this.pxlGuiDraws.setDependencies( this );

    this.pxlGuiDraws.prepLoader();
    if( !this.options.hasOwnProperty("loaderPhrases") ){
      this.options["loaderPhrases"] = ['...loading the pixels...'];
    }
    this.pxlGuiDraws.setLoaderPhrases( this.options["loaderPhrases"] );

    this.pxlQuality.init() // Load cookies and update settings
  }
  
  set active(val=null){
    if( val == null ){
      val = !this.pxlTimer.active;
    }
    if( val == true ){ // Non-strict Truthy
      this.pxlTimer.play();
      this.step( false );
    }else{ // Non-strict Falsy
      this.pxlTimer.stop();
    }
  }
  get active(){
    return this.pxlTimer.active;
  }
  
  start(){
    this.active = true;
  }
  stop(){
    this.active = false;
  }
  
  // -- -- --
  
  init(){
    this.pxlTimer.init();

    this.pxlEnv.boot(); // Environment Asset Prep
    this.pxlQuality.startBenchmark(); // Start benchmark timer


    this.buildGui()
      .then( ()=>{ 
        this.tickLoader();
        this.bootEnvironment();
      })
      .then( ()=>{
        this.tickLoader();
        this.bootEngine();
      })
      .then( ()=>{ 
        this.tickLoader();

        this.pxlEnv.buildComposers();

        //this.pxlDevice.resizeRenderResolution();
        this.cameraRunAnimatorMobile( this );
        this.pxlGuiDraws.stepLoader("postBoot"); // --
        this.pxlEnv.mapRender();
        this.pxlDevice.setCursor("grab");
       })
       .catch( (err)=>{
        if( this.verbose > pxlEnums.VERBOSE_LEVEL.NONE ){
          console.error("Error in pxlNavCore.init(); Load level - ", err);
          console.error(err);
        }
      })
       .finally( ()=>{
        if( this.verbose > pxlEnums.VERBOSE_LEVEL.ERROR ){
          console.log("'pxlNavCore' Room Build Promise-Chain Completed; ", this.loadPercent);
          console.log("-- Starting pxlNav in Room `"+this.pxlEnv.bootRoom+"`");
        }
        this.start();
       });
    
  }
  
  // -- -- --
  
  buildGui(){
    return new Promise( (resolve, reject)=>{
      this.pxlGuiDraws.booted();
        
      this.pxlGuiDraws.pxlNavCanvas=document.getElementById(pxlCore);
      mapW=window.innerWidth*this.pxlQuality.screenResPerc;
      this.pxlGuiDraws.pxlNavCanvas.width=window.innerWidth;
      mapH=window.innerHeight*this.pxlQuality.screenResPerc;
      this.pxlGuiDraws.pxlNavCanvas.height=window.innerHeight;
      if(this.pxlDevice.canCursorLock){
        this.pxlGuiDraws.pxlNavCanvas.requestPointerLock=
            this.pxlGuiDraws.pxlNavCanvas.requestPointerLock ||
            this.pxlGuiDraws.pxlNavCanvas.mozRequestPointerLock ||
            this.pxlGuiDraws.pxlNavCanvas.webkitRequestPointerLock;
        document.requestPointerLock=
            this.pxlGuiDraws.pxlNavCanvas.exitPointerLock ||
            this.pxlGuiDraws.pxlNavCanvas.mozExitPointerLock ||
            this.pxlGuiDraws.pxlNavCanvas.webkitExitPointerLock;
      }
      this.pxlGuiDraws.mapPrepPrompts(); // Prep GUI & Hud DOM Elements
      resolve( true );
    });
  }

////////////////////////////////////////////////////
// -- ENGINE PREP  &  SCENE -- -- -- -- -- -- -- //
//////////////////////////////////////////////////

  isMobile(){
    var mobile = false;
    mobile = (/\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent));
    
    mobile = this.getHashParm("m", mobile);

    return mobile;
  }

  findHashParms(){
    var hashParms={};
    var hashStr=window.location.hash;
    if(hashStr.length>1){
      hashStr=hashStr.substring(1);
      var hashList=hashStr.split("&");
      for(var i=0; i<hashList.length; i++){
        var curParm=hashList[i].split("=");
        hashParms[curParm[0]]=curParm[1];
      }
    }
    return hashParms;
  }

  getHashParm(parm, def){
    if( Object.keys(this.uriHashParms).includes(parm) ){
      return this.uriHashParms[parm];
    }else{
      return def;
    }
  }

  tickLoader(){
    this.loadPercent+=1.0;
    //this.pxlGuiDraws.stepLoader("tick");
  }

  bootEngine(){
    return new Promise( (resolve, reject)=>{
        let promiseList=[];
        for( let x=0; x<this.roomBootList.length; ++x ){
          promiseList.push( this.pxlEnv.loadRoom( this.roomBootList[x] ) );
        }
        
        Promise.all( promiseList ).then( ()=>{
            resolve( true );
        });
    });
  }

  bootEnvironment(){
    return new Promise( (resolve, reject)=>{
        // Rederer
        this.pxlEnv.engine=new WebGLRenderer({
            canvas: this.pxlGuiDraws.pxlNavCanvas,
            powerPreference : "low-power",
            alpha:true,
            antialias: false,
            sortObjects:true,
            depth:true,
            //logarithmicDepthBuffer:true,
        });
        var options = {
            format : RGBAFormat,
            antialias: false,
            sortObjects:true,
            alpha:true,
            type : /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? HalfFloatType : FloatType 
        };
        this.pxlEnv.engine.autoClear=true;
        ColorManagement.enabled = false;
        this.pxlEnv.engine.outputColorSpace = SRGBColorSpace;
        //this.pxlEnv.engine.outputColorSpace = LinearSRGBColorSpace;
        
        this.pxlEnv.engine.debug.checkShaderErrors=false;
        //%= Dev
        this.pxlEnv.engine.debug.checkShaderErrors=true;
        //%
        
        let bgCd=0x000000;
        let bgCdHex="#000000";
        this.pxlEnv.engine.setClearColor(this.pxlEnv.fogColor, 0);
        //this.pxlEnv.engine.setPixelRatio(window.devicePixelRatio);
        this.pxlEnv.engine.setSize(mapW/this.pxlQuality.screenResPerc, mapH/this.pxlQuality.screenResPerc);
        this.pxlEnv.engine.setPixelRatio(1);

        if(this.options.shadowMapBiasing == pxlEnums.SHADOW_MAP.OFF){
          this.pxlEnv.engine.shadowMap.enabled=false;
        }else{
          this.pxlEnv.engine.shadowMap.enabled=true;
          this.pxlEnv.engine.shadowMap.type=BasicShadowMap;
        }
        
        
        // Build render targets for depth and world space reference
        this.pxlEnv.scene=new Scene();
        this.pxlEnv.scene.fog=this.pxlEnv.fog;
        
        //this.pxlEnv.scene.background = new Color(bgCdHex);
        this.pxlEnv.scene.background = new Color(bgCdHex);//this.pxlEnv.fogColor;
        this.pxlEnv.scene.renderTarget=new WebGLRenderTarget(sW*this.pxlQuality.screenResPerc,sH*this.pxlQuality.screenResPerc,options);
        this.pxlEnv.scene.renderTarget.texture.format=RGBAFormat;
        this.pxlEnv.scene.renderTarget.texture.minFilter=LinearFilter;
        this.pxlEnv.scene.renderTarget.texture.magFilter=LinearFilter;
        this.pxlEnv.scene.renderTarget.texture.generateMipmaps=false;
        //this.pxlEnv.scene.renderTarget.texture.type=FloatType;
        this.pxlEnv.scene.renderTarget.depthBuffer=true;
        this.pxlEnv.scene.renderTarget.depthTexture = new DepthTexture();
        this.pxlEnv.scene.renderTarget.depthTexture.format=DepthFormat;
        this.pxlEnv.scene.renderTarget.depthTexture.type=UnsignedIntType;
        //this.pxlEnv.scene.renderTarget.depthTexture.type=UnsignedShortType;
        this.pxlEnv.scene.renderWorldPos=new WebGLRenderTarget(sW*this.pxlQuality.screenResPerc,sH*this.pxlQuality.screenResPerc,options);
        this.pxlEnv.scene.renderWorldPos.texture.format=RGBAFormat;
        this.pxlEnv.scene.renderWorldPos.texture.minFilter=NearestFilter;
        this.pxlEnv.scene.renderWorldPos.texture.magFilter=NearestFilter;
        this.pxlEnv.scene.renderWorldPos.texture.generateMipmaps=false;
        
        options.alpha=true;
        this.pxlEnv.scene.renderGlowTarget=new WebGLRenderTarget( parseInt(sW*this.pxlQuality.screenResPerc), parseInt(sH*this.pxlQuality.screenResPerc),options);
        this.pxlEnv.scene.renderGlowTarget.texture.format=RGBAFormat;
        this.pxlEnv.scene.renderGlowTarget.texture.generateMipmaps=false;
        
        /*this.pxlEnv.warpZoneRenderTarget=new WebGLRenderTarget(1024,1024,options);
        this.pxlEnv.warpZoneRenderTarget.texture.format=RGBFormat;
        this.pxlEnv.warpZoneRenderTarget.texture.minFilter=LinearFilter;
        this.pxlEnv.warpZoneRenderTarget.texture.magFilter=LinearFilter;
        this.pxlEnv.warpZoneRenderTarget.texture.generateMipmaps=false;*/
        
        // TODO : Aspect Ratio is a bit off, need to fix this
        //var aspectRatio=this.pxlGuiDraws.pxlNavCanvas.width/this.pxlGuiDraws.pxlNavCanvas.height;
        // To change the near and far, see Environment .init()
        let curFOV=this.pxlEnv.pxlCamFOV[ this.pxlDevice.mobile ? 'MOBILE' : 'PC' ];
        this.pxlCamera.camera=new PerspectiveCamera( curFOV, 1, this.pxlEnv.camNear, this.pxlEnv.camFar);
        this.pxlAutoCam.camera=this.pxlCamera.camera;
        
        //this.pxlEnv.listener = new AudioListener();
        //this.pxlCamera.camera.add( this.pxlEnv.listener );
        
        //this.pxlCamera.camera.position.set(-20,0,15);
        this.pxlCamera.cameraAimTarget=new Object3D();
        this.pxlEnv.scene.add(this.pxlCamera.cameraAimTarget);
        this.pxlCamera.camera.target=this.pxlCamera.cameraAimTarget;
        
        //this.pxlEnv.roomSceneList[this.pxlEnv.mainRoom]=this.pxlEnv;
        
        //this.pxlCamera.camera.layers.enable(0);
        this.pxlCamera.camera.layers.enable(1);
        this.pxlCamera.camera.layers.enable(2);
        
        
        this.pxlEnv.scene.add( this.pxlEnv.userAvatarGroup );
        
    ///////////////////////////////////////////////////
    // -- FILE I/O & Shared Assets -- -- -- -- -- -- //
    ///////////////////////////////////////////////////
        
    if( this.options["loadList"].includes("Cloud3d") ){
        this.pxlEnv.cloud3dTexture=this.pxlUtils.loadTexture( this.folderDict["assetRoot"]+"Noise_Cloud3d.jpg", null, {"encoding":LinearSRGBColorSpace});
        this.pxlEnv.cloud3dTexture.wrapS=RepeatWrapping;
        this.pxlEnv.cloud3dTexture.wrapT=RepeatWrapping;
    }
    if( this.options["loadList"].includes("SoftNoise") ){  
        this.pxlEnv.softNoiseTexture=this.pxlUtils.loadTexture( this.folderDict["assetRoot"]+"Noise_Soft3d.jpg" );
        this.pxlEnv.softNoiseTexture.wrapS = RepeatWrapping;
        this.pxlEnv.softNoiseTexture.wrapT = RepeatWrapping;
    }
    if( this.options["loadList"].includes("SmoothNoise") ){  
        this.pxlEnv.detailNoiseTexture=this.pxlUtils.loadTexture( this.folderDict["assetRoot"]+"Noise_UniformSmooth.jpg" );
        this.pxlEnv.detailNoiseTexture.wrapS = RepeatWrapping;
        this.pxlEnv.detailNoiseTexture.wrapT = RepeatWrapping;
    }
    if( this.options["loadList"].includes("ChromaticAberration") ){
        let chroAberUVTexture = this.pxlUtils.loadTexture( this.folderDict["assetRoot"]+"uv_ChromaticAberration.png");
        chroAberUVTexture.minFilter=LinearFilter;
        chroAberUVTexture.magFilter=LinearFilter;
        this.pxlEnv.chroAberUVTexture=chroAberUVTexture;
    }
    if( this.options["loadList"].includes("WarpAnimTexture") ){
        this.pxlEnv.blockAnimTexture=this.pxlUtils.loadTexture( this.folderDict["assetRoot"]+"uv_blockPortalWarp.jpg");
        this.pxlEnv.blockAnimTexture.minFilter=LinearFilter;
        this.pxlEnv.blockAnimTexture.magFilter=LinearFilter;
    }
    if( this.options["loadList"].includes("MathFuncs") ){
        this.pxlEnv.mathFuncsTexture=this.pxlUtils.loadTexture( this.folderDict["assetRoot"]+"MathFuncs.jpg");
        this.pxlEnv.mathFuncsTexture.minFilter=LinearFilter;
        this.pxlEnv.mathFuncsTexture.magFilter=LinearFilter;
    }
        

    ///////////////////////////////////////////////////
    // -- GEOMETRY  -- -- -- -- -- -- -- -- -- -- -- //
    ///////////////////////////////////////////////////
        
        var materialList, transformList;
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
        if( this.mobile ){
            mobileSuffix="_mobile";
        }
        
        if( this.loadEnvAssetFile ){
          //let sceneFile=this.folderDict["assetRoot"]+"EnvironmentAssets"+mobileSuffix+".fbx";
          let sceneFile=this.folderDict["assetRoot"]+"EnvironmentAssets.fbx";
          // This is a separate fbx loaded specifically for the Environment Asset FBX
          //   It opens up the found scene objects to easier global access
          this.pxlFile.loadSceneFBX(sceneFile, materialList, transformList, this.verbose,'EnvironmentAssets',[this.pxlEnv.scene]);
        }

    ///////////////////////////////////////////////////
    // -- LIGHTS -- -- -- -- -- -- -- -- -- -- -- -- //
    ///////////////////////////////////////////////////
        //Shadow Maps-
        if(this.options.shadowMapBiasing == pxlEnums.SHADOW_MAP.OFF){
          this.pxlEnv.engine.shadowMap.enabled=false;
        }else{
          this.pxlEnv.engine.shadowMap.enabled=true;
          if(this.options.shadowMapBiasing == pxlEnums.SHADOW_MAP.BASIC || this.mobile){
              this.pxlEnv.engine.shadowMap.type=BasicShadowMap;
          }else if(this.options.shadowMapBiasing == pxlEnums.SHADOW_MAP.SOFT){
              this.pxlEnv.engine.shadowMap.type=PCFSoftShadowMap;
              //this.pxlEnv.engine.shadowMap.type=VSMShadowMap;
          }
        }
        
        // Every light is another frag level dot to matrix calculation
        // Add at your own risk
        var ambLight=new AmbientLight(0xffffff,.05);
        this.pxlEnv.lightList.push(ambLight);
        this.pxlEnv.scene.add(ambLight);
        var dirLight=new DirectionalLight(0xffffff,.1);
        dirLight.position.set(1000,550,1200);
        this.pxlEnv.lightList.push(dirLight);
        this.pxlEnv.scene.add(dirLight);
        /*var dirLightB=new DirectionalLight(0xffffff,.05);
        dirLightB.position.set(-500,750,1500);
        this.pxlEnv.lightList.push(dirLightB);
        this.pxlEnv.scene.add(dirLightB); */
        

        resolve( true );
    });
  }

  cameraRunAnimatorMobile( tmpThis ){
    let stillLoadingCheck=false;
    let keys=Object.keys(tmpThis.pxlEnv.geoLoadList);
    for(let x=0; x<keys.length; ++x){ // Check if any objects are still loading
      stillLoadingCheck=tmpThis.pxlEnv.geoLoadList[keys[x]]==0;
      stillLoadingCheck = stillLoadingCheck && !tmpThis.pxlEnv.roomSceneList[x]?.booted;
      if(stillLoadingCheck){ // If entry isn't 1, means not fully loaded
        break;
      }
    }
    if(stillLoadingCheck ){ // Files are still loading
      setTimeout(()=>{
        tmpThis.cameraRunAnimatorMobile( tmpThis );
      },300);
    }else{
      tmpThis.initRoomList( tmpThis );
    }
  }

  initRoomList( tmpThis){
    tmpThis.pxlGuiDraws.stepLoader("camAnim"); // --
    tmpThis.pxlCamera.setTransform( tmpThis.pxlEnv.camInitPos, tmpThis.pxlEnv.camInitLookAt );
    tmpThis.pxlCamera.updateCamera();

    // Append start up functions
    tmpThis.pxlEnv.buildRoomEnvironments();
    tmpThis.monitorRoomLoad( tmpThis );
  }
  monitorRoomLoad( tmpThis, loop=0 ){
    let stillLoadingCheck=false;
    let keys=Object.keys(tmpThis.pxlEnv.geoLoadList);
    for(let x=0; x<keys.length; ++x){ // Check if any objects are still loading
      stillLoadingCheck=tmpThis.pxlEnv.geoLoadList[keys[x]]==0;
      stillLoadingCheck = stillLoadingCheck && !tmpThis.pxlEnv.roomSceneList[x]?.booted;
      if(stillLoadingCheck){ // If entry isn't 1, means not fully loaded
        break;
      }
    }
    if( stillLoadingCheck ){ // Files are still loading
      setTimeout(()=>{
        tmpThis.monitorRoomLoad( tmpThis );
      },300);
    }else{
      tmpThis.pxlQuality.mapAutoQualityUpdate(1,true);
      //let snapShotCommands=tmpThis.pxlEnv.warpPortalQueue();
      //let camStats={ fov:pxlCamera.camera.fov, zoom:pxlCamera.camera.zoom, aspect:pxlCamera.camera.aspect };
      //runStartFunctions( camStats, 0, true, snapShotCommands);
      tmpThis.runPrepDrawScenes( 0, true, []);//snapShotCommands );
    }

  }
  
  /**
   * Internal Function
   * Warp player to each room to build materials on gpu
   * This compiles the materials in each scene, at least from the perspective of the camera
   *   This causes a delay during the first warp to the new room in runtime,
   *     So this runs that hiccup before the user can feel it
   * `cmdList` currently unused, was used to take screenshots of each room initially.
   *   But this is a stage where custom commands can be injected during environment prep.
   * @param {*} runner 
   * @param {*} jumpCam 
   * @param {*} cmdList 
   */
  runPrepDrawScenes(runner=0, jumpCam=true, cmdList=[]){
    runner++;
    if( cmdList.length > 0 ){
      if(jumpCam){
        jumpCam=false;
        let curRoom=cmdList[cmdList.length-1];
        this.pxlCamera.warpToRoom( curRoom );
      }
      
      this.pxlCamera.colliderPrevObjHit=null;
      // Erroring here means shader failure in scene
      this.pxlEnv.mapRender( false );
      
      if(runner%10==0){
        let exitingRoom=cmdList.pop();
        // Snapshots / Env Map Gen
        //pxlEnv.getSceneSnapshot(exitingRoom);
        jumpCam=true;
              
        this.pxlGuiDraws.stepLoader(exitingRoom); // --
      }
      
      requestAnimationFrame( ()=>{ this.runPrepDrawScenes( runner, jumpCam, cmdList ); });
    }else{
      this.pxlGuiDraws.stepLoader("Post Room Prep"); // --
          
      this.pxlNavPrepSettings(); 
    }
  }
  
  
  /**
   * Internal Function
   * All booting has completed
   * Clean-up device benchmarking, restart the main room, move player to starting position & look at
   * Final prep; settings and gui values based on cookies or benchmarking
   * Then release the kraken!
   */
  pxlNavPrepSettings(){
    this.pxlCamera.warpToRoom( this.pxlEnv.bootRoom, true );
    this.pxlQuality.endBenchmark(); // All the heavy lifting as completed
      
    this.pxlGuiDraws.stepLoader( "Nav Settings" ); // --
    
    this.startPxlNav();
    
  }

  /**
   * Internal function
   * Start the pxlNav engine
   */
  startPxlNav(){
    this.pxlTimer.init();
    this.pxlTimer.play();
    
    this.pxlGuiDraws.applyCookies();
      
    if(this.pxlGuiDraws.pxlNavCanvas){ this.pxlGuiDraws.pxlNavCanvas.focus(); }

    let curRoom=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];
    curRoom.active=true;
    curRoom.startTime=this.pxlTimer.msRunner.x;
    
    // ## Must be a reason I'm not doing a pop() here
    this.pxlEnv.roomPostGuiCalls.forEach( (e)=>{ e.postGuiEvent(); });
    this.pxlEnv.roomPostGuiCalls=[];
      
    if( this.pxlAutoCam.enabled ){
      this.pxlGuiDraws.guiToggleVisibility( false );
    }
    this.pxlAutoCam.init();
    //this.pxlVideo.boot();
    
    this.pxlDevice.resizeRenderResolution();
    this.pxlEnv.mapRender();
    
    this.pxlQuality.setDependentSettings();


    this.pxlGuiDraws.stepLoader( "Starting..." );
    
    let tmpThis = this;
    
    setTimeout( ()=>{
      tmpThis.pxlEnv.postBoot();
      if(tmpThis.pxlGuiDraws.mapPrompt) tmpThis.pxlGuiDraws.promptFader(tmpThis.pxlGuiDraws.mapPrompt, false,null,true);
      if(tmpThis.pxlGuiDraws.mapPromptBG) tmpThis.pxlGuiDraws.promptFader(tmpThis.pxlGuiDraws.mapPromptBG, false,null,false);
      tmpThis.emit("booted", true);
    }, 200);
  }




  // -- -- -- -- -- -- -- -- -- -- --
  // -- -- -- -- -- -- -- -- -- -- --
  // -- -- -- -- -- -- -- -- -- -- --


  

  /**
   * Initialize pxlNav clock for synced external runtimes
   * Don't run `setp(true)` if you are using pxlNav to run the render loop, this will cause two loops to run in tandem.
   * This function should only be used if you are using pxlNav for it's utilities and not pxlRoom / Render Stack management.
   * @param {boolean} anim If the clock should loop or not
   */
  step(anim=false){
    if(this.pxlTimer.active){
      this.pxlTimer.step();
      if( anim ){
        requestAnimationFrame( ()=>{ this.step(); });
      }
    }
  }
  
  // -- -- --

  /**
   * Initialize pxlNav's runtime clock
   */
  bootTimer(){
    this.pxlTimer.init();
    this.pxlTimer.play();
  }

  /**
   * Stop pxlNav's runtime clock
   * This will pause all animations and events
   */
  stopTimer(){
    this.pxlTimer.stop();
  }

  /**
   * Pause pxlNav's runtime clock
   */
  pauseTimer(){
    this.pxlTimer.pause();
  }

  // -- -- --
  
  
  
  /**
  * Prep an object with propper css classes to work with {@link promptFader}
  * @param {(string|object)} obj Object to set classes to.
  * @param {boolean=} startVis If the object starts visible or not. Defaults to not visible, easier for a fade in.
  */
  prepPromptFader( obj, startVis=false ){
    let curObj=obj;
    if( typeof(curObj) === "string" ){
      curObj=document.getElementById(curObj);
      if(!curObj){
        return;
      }
    }
        
    curObj.classList.add("fader");
    curObj.classList.add( (startVis ? "visOn" : "visOff") );
    curObj.style.display= startVis ? "inline-block" : "none";
  }
  
  /**
  * Fade an object in or out of visiblity over time.
  * Fade animation uses css for the visuals, but uses clock time for automatic fade out events.
  * @param {(string|object)} faderObjObject to fade in or out.
  * @param {boolean} vis Visiblity state to fade to.
  * @param {number=} fadeOutLimit Length of time in Seconds until the object automatically fades out.
  * This occures in the requestAnimationFrame Render function.
  * @param {boolean=} deleteOnEnd Option to remove the object from the document once the fade out completes.
  * For garbage collection reasons, its advised to set this `true` when possible.
  */
  promptFader(faderObj, vis, fadeOutLimit=null, deleteOnEnd=false){
    if(typeof(faderObj)=="string"){
      faderObj=document.getElementById(faderObj);
      if(!faderObj){
        return;
      }
    }
    if(faderObj.classList.value.indexOf("fader")<0){
      faderObj.classList.add("fader");
    }
    if(vis){
      faderObj.style.display="inline-block";
      setTimeout( ()=>{
                if(faderObj.classList.contains("visOff")){
                    faderObj.classList.remove("visOff");
                    faderObj.classList.add("visOn");
                    if(fadeOutLimit!=null){
                        faderObj.setAttribute("fadeOut", clockTime+fadeOutLimit*1000);
                        fadeOutList.push(faderObj);
                    }
                }
      }, 50);
    }else{
      faderObj.classList.remove("visOn");
      faderObj.classList.add("visOff");
      if(deleteOnEnd){
        let transEnd=["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
        transEnd.forEach((end)=>{
          faderObj.addEventListener(end,()=>{
            let curParent=faderObj.parentNode;
            if(curParent){
              curParent.removeChild(faderObj);
            }
          });
        });
      }else{
        setTimeout( ()=>{
          if(faderObj.classList.contains("visOff")){
              faderObj.style.display="none";
          }
        }, 1000);
      }
    }
  }
  
  // -- -- --

  addRooms( roomList ){
    for( let x=0; x<roomList.length; ++x ){
      if( !this.pxlEnv.roomNameList.includes( roomList[x] ) ){
        if(this.booted){
        }else{
          this.roomBootList.push( roomList[x] );
        }
      }
    }
  }
  
  
  setBootRoom( bootRoom, bootLocation ){
    console.log(bootRoom, bootLocation);
    this.pxlEnv.bootRoom = bootRoom;
    this.pxlEnv.bootLocation = bootLocation;
  }

  // -- -- --
  
  setLoaderPhrases( phraseList ){
    this.pxlGuiDraws.setLoaderPhrases( phraseList );
  }
  
  
  // -- -- --
  // pxlNav Extension Functions 

  initExtension( extName, onFinishFn, onErrorFn ){
    this.pxlExtensions.init( extName, onFinishFn, onErrorFn );
  }

  startExtension( extName, onFinishFn, onErrorFn ){
    this.pxlExtensions.start( extName, onFinishFn, onErrorFn );
  }

  stopExtension( extName, onFinishFn, onErrorFn ){
    this.pxlExtensions.stop( extName, onFinishFn, onErrorFn );
  }

  extensionStatus( extName ){
    return this.pxlExtensions.status( extName );
  }

  // -- -- --
  // Messaging Into (triggers) and Out-Of (subscriptions) the pxlNav Engine

  /**
   * 
   * @param {*} eventType 
   * @param {*} eventValue 
   * @param {*} eventObj 
   */
  trigger( eventType, eventValue=null, eventObj=null ){
    eventType = eventType.toLowerCase();
    switch( eventType ){
      case "warptoroom":
        this.pxlCamera.warpToRoom( eventValue, true, eventObj );
        break;
      case "camera":
        let curEventVal = eventValue.toLowerCase();
        if( curEventVal == "roam" ){
          this.pxlCamera.toggleMovement( true ); // Enable camera movement from user inputs
        }else if( curEventVal == "static" ){
          this.pxlCamera.toggleMovement( false ); // Prevent camera movement from user inputs
        }
        break;
      case "ping":
        this.emit("pingPong", "pong");
        break;
      case "roommessage":
        let roomEventType = eventObj["type"];
        let roomEventValue = eventObj["value"];
        if(eventValue==null){
          eventValue=this.pxlEnv.currentRoom;
        }
        this.pxlEnv.sendRoomMessage( eventValue, roomEventType, roomEventValue );
      default:
        break;
    }
  }

  /**
   * 
   * @param {*} eventType
   * @param {*} callbackFunc 
   */
  subscribe( eventType, callbackFunc ){
    let triggerHelp = false;
    if( this.validEventsKeys.includes( eventType ) ){
      if( eventType == "test" ){
        console.log("Test Event : `pxlNav.subscribe( 'test', ... )` was used; subscription list -");
      }else if( eventType == "pxlNavEventNameHere" ||  eventType == "help" ){
        if( eventType == "pxlNavEventNameHere" ){
          console.warn("Warning : `pxlNav.subscribe( 'pxlNavEventNameHere', ... )` was used; need some help?");
        }else if( eventType == "help" ){
          console.log("Help Requested : `pxlNav.subscribe( 'help', ... )` was used; Subscription items--");
        }

        // developer triggered the emit help event
        //   Dump all the events and info!
        console.log("Valid Event Types : ");
        this.validEventsKeys.forEach( (e)=>{
          console.log( "  - ", e, " : ", this.validEvents[e] );
        });

      }else{
        let eventSplit = eventType.split("-");
        if( eventSplit[0] == "device" ){
          this.pxlDevice.subscribe(  eventSplit[1], callbackFunc );
        }else if( eventSplit[0] == "camera" ){
          let camEventType = pxlEnums.CAMERA_EVENT.MOVE;

          // Find the camera event type
          switch( eventSplit[1] ){
              case "move":
                camEventType = pxlEnums.CAMERA_EVENT.MOVE;
                break;
              case "rotate":
                camEventType = pxlEnums.CAMERA_EVENT.ROTATE;
                break;
              case "jump":
                camEventType = pxlEnums.CAMERA_EVENT.JUMP;
                break;
              case "fall":
                camEventType = pxlEnums.CAMERA_EVENT.FALL;
                break;
              case "landed":
                camEventType = pxlEnums.CAMERA_EVENT.LANDED;
                break;
              case "collision":
                camEventType = pxlEnums.CAMERA_EVENT.COLLISION;
                break;
              default:
                console.warn("Warning : `pxlNav.subscribe( 'camera-"+eventSplit[1]+"', ... )` was used; use 'help' for a list of valid events.");
                break;
            }

          this.pxlCamera.subscribe( camEventType, callbackFunc );

        }else{
          this.callbacks[eventType] = callbackFunc;
        }
      }
    }else{
      console.warn("Warning : `pxlNav.subscribe( '"+eventType+"', ... )` was used; use 'help' for a list of valid events.");  
    }
  }

  /**
   *   
   * @param {*} eventType
   * @param {*} eventValue
   * @param {*} statusValue 
   */

  emit( eventType, eventValue, statusValue=null ){
    if( this.callbacks[eventType] ){
      let msg = {
        "type" : eventType,
        "value" : eventValue
      };
      if( statusValue !== null ){
        msg["status"] = statusValue;
      }
      this.callbacks[eventType]( msg );
    }
  }
}

export { 
  pxlNavVersion, 
  pxlNav, 
  pxlEnums, 
  pxlOptions,
  RoomEnvironment,
  pxlEffects,
  pxlShaders,
  pxlBase
};

