// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// --   The Core pxlNav Engine File          --
// --    -- -- -- -- -- -- -- --             --
// --  Written by Kevin Edzenga; 2020-2024   --
// --    Using Three.js as its backbone      --
// --                                        --
// --  The 'Environment' class manages       --
// --    engine management & render stack    --
// --  This is the class that interprets     --
// --    the rooms found in -                --
// --     ./Source/js/pxlRooms               --
// --  To make a custom room,                --
// --    See the 'templateRoom' project      --
// --                                        --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


import * as THREE from "../libs/three/three.module.js";

import { PXLNAV_OPTIONS, ANTI_ALIASING, VERBOSE_LEVEL } from "./core/Types.js";

import { EffectComposer } from '../libs/three/postprocessing/EffectComposer.js';
import { RenderPass } from '../libs/three/postprocessing/RenderPass.js';
import { ShaderPass } from '../libs/three/postprocessing/ShaderPass.js';
import { CopyShader } from '../libs/three/shaders/CopyShader.js';

// TODO : Remove all traces of bloom passes, implement Neurous Box Blur passes
import { UnrealBloomPass } from '../libs/three/postprocessing/UnrealBloomPass.js';
import { BloomPass } from '../libs/three/postprocessing/BloomPass.js';


// TODO : This class needs breaking up into BaseEnvironment & MainEnvironment expand



export class Environment{
  constructor( options, mainRoom='Default', mobile ){
    this.engine=null;
    this.scene=null;
    this.parentGroupList={};
    this.parentGroupList[mainRoom]=[];
    this.parentNameList=[];
    this.options=options;



    // -- -- -- --
    // TODO : Move to pxlQuality, when I finally get to that module
    this.prevRenderMS=0;
    this.nextRenderMS=0;
    // Max frame rate - 
    this.fps = mobile ? 30 : 60;
    this.renderInterval = 1.0 / this.fps;
    // -- -- -- --

    let pxlRoomName = "Default";
    if( this.options.hasOwnProperty("pxlRoomName") ){
      pxlRoomName = this.options.pxlRoomName;
    }else{
      pxlRoomName = mainRoom;
    }

    this.pxlRoomAbsRoot = pxlRoomName;
    let splitRoot = pxlRoomName.split("/");
    splitRoot.splice(0,1);
    splitRoot = splitRoot.join("/");
    this.pxlRoomLclRoot = pxlRoomName;
    if( this.options.hasOwnProperty("pxlRoomRoot") ){
      this.pxlRoomLclRoot = this.options.pxlRoomRoot;
    }else{
      this.pxlRoomLclRoot = "./"+pxlRoomName.split("/").pop();
    }
    
    this.mainRoom=mainRoom; // Main environment room
    this.bootRoom=mainRoom; // Room to start pxlNav in
    this.bootLocation=null; // Camera Position to start pxlNav at
    this.currentRoom=mainRoom; // Current residing room
    this.roomNameList=[mainRoom]; // Room name list
    this.roomSubList={};
    this.roomSceneList={}; // Room Object list; [ Environment Object, ... ]
    this.roomSceneList[mainRoom]=this;
    this.roomPostGuiCalls=[];
    this.jmaCheckConnection=false;
        
    this.checkContext=0;
    this.activeContext=false;
    
    this.warpPortalTextures={};
    this.warpZoneRenderTarget=null;
    this.currentAudioZone=0;
    
    this.pxlUtils=null;
    this.pxlTimer=null;
    this.pxlAnim=null;
    this.pxlAutoCam=null;
    this.pxlAudio=null;
    this.pxlFile=null;
    this.pxlVideo=null;
    this.pxlQuality=null;
    this.pxlUser=null;
    this.pxlShaders=null;
    this.pxlDevice=null;
    this.pxlCamera=null;
    this.pxlGuiDraws=null;
    
    
    this.renderLayerEnum = {
      "SCENE": 0,
      "PARTICLES": 1,
      "GLOW": 2,
      "SKY": 3
    }
    
    this.cloud3dTexture=null;
    this.softNoiseTexture=null;
    this.detailNoiseTexture=null;
    this.chroAberUVTexture=null;
    this.blockAnimTexture=null;
    this.userScreenIntensity=new THREE.Vector2(0,.8); // User Screen Multi, x=Base Color Mult, y=Added Boost
    this.portaluserScreenIntensity=new THREE.Vector2(1,0);
    this.portalMtlRate=.7;
    this.mobile=mobile;
    
    this.camNear=.1;
    this.camFar=5000;
    
    this.fogMult = new THREE.Vector2(0,0);
    this.fogColor=new THREE.Color(.07,.07,.10);//new THREE.Color(.07,.07,.10);
    this.fogColorSky=new THREE.Color(.1,.1,.12);
    this.fogExp=.0003;
    this.fog=new THREE.FogExp2( this.fogColor, this.fogExp);

    this.listener=null;
    this.posted=false;
    this.postIntro=false;
    
    this.camLocation = {};
    this.camInitPos=new THREE.Vector3(0,15,0);
    this.camInitLookAt=new THREE.Vector3(0,15,0);
    this.camThumbPos=new THREE.Vector3(0,0,0);
    this.camThumbLookAt=new THREE.Vector3(0,20,0);
    this.camReturnPos=new THREE.Vector3(0,0,0);
    this.camReturnLookAt=new THREE.Vector3(0,0,0);
    this.camLobbyPos=new THREE.Vector3(0, 15, 0);
    this.camLobbyLookAt=new THREE.Vector3(0, 15, -100);
    this.pxlCamFOV=mobile?80:60;
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = this.camNear;
    this.pxlCamFarClipping = this.camFar;
    
    this.groupList=[];
    this.geoList=[];
    this.geoLoadList=[]; // 0 Not loaded, 1 Loaded, 2 Loaded and Processed (Setting Dependants)
    this.geoLoadListComplete=0;
    this.lightList=[];
    this.returnPortalGlowList=[];
    this.roomWarpVisuals={};
    this.proximityGeo=null;
    this.userAvatarGroup=new THREE.Group();
    
    // ## Warp visuals to dict
    this.warpVisualActive=false;
    this.warpVisualMaxTime=[1.5,1];
    this.warpVisualStartTime=0;
    this.warpVisualFader=new THREE.Vector2(0,1);
    this.warpVisualCmd=null;

    // ## Move passes to a dict
    this.stepShaderFuncArr=[];
    this.mapMotionBlurPass=null;
    this.mapCopyMotionBlurPass=null;
    this.mapOverlayHeavyPass=null;
    this.mapOverlayPass=null;
    this.mapOverlaySlimPass=null;
    this.mapBoxAAPass=null;
    this.mapCrossAAPass=null;
    this.mapWorldPosMaterial=null;
    this.mapGlowPass=null;
    this.mapGlowMotionBlur=null;
    this.mapComposer=null;
    this.mapComposerMotionBlur=null;
    this.mapComposerBloom=null;
    this.mapComposerGlow=null;
    this.chroAberrationPass=null;
    this.chroAberrationRoomPass=null;
    this.lizardKingPass=null;
    this.lizardKingRoomPass=null;
    this.mapComposerWarpPass=null;
    this.blurScreenMerge=null;
    this.pxlRenderSettings={
      'exposure':1.0,
      'mult':( mobile ? 1.0 : 1.0 ),
      'bloomStrength':0.5,
      'bloomThresh':.6,
      'bloomRadius':.05,
    }
    this.exposureShiftActive=false;

    this.delayComposer=null;
    this.delayPass=null;
    
    this.chroAberMult=new THREE.Vector2(1,0);
    this.blurDirCur=new THREE.Vector2(0,0);
    this.blurDirPrev=new THREE.Vector2(0,0);
    
    this.shaderPasses={};
    
    this.roomComposer=null;
    this.roomRenderPass=null;
    this.roomBloomPass=null;
    this.roomGlowPass=null;
    
    this.blurComposer=null;
    this.glowPassMask = new THREE.Vector2(1.0,0.0);
    
    this.objectClickable=[];
    this.objectClickableObjectList={};
    this.clickablePrevActiveObject=null;
        
    this.promoClickable=[];
    this.promoClickableObjectList={};
    this.promoPrevActiveObject=null;
    this.promoClickableLinks={};

    // Test Web Cam
    this.remoteVideoTextureList=[];
    this.remoteUserNameList=[];
    this.remoteUserMediaList={};
    this.remoteUserVideoList=[];
    this.remoteUserAudioList=[];
    this.camScreenData={
      count:0,
      prevCount:0,
      checkUserCount:true,
      checkVideoStatus:true,
      findCamCount:()=>{},
      videoObjectList:[],
      screenGeoList:[],
      screenClickable:[],
      screenMtlUniforms:[],
      userDataList:[],
      camFindInfoList:[]
    };
    
    this.curUserCount=0;
    this.prevUserCount=0;

    this.emit=(type,value)=>{};
    
  }
  
  setDependencies( pxlNav ){
    this.scene=pxlNav.scene;
    this.pxlUtils=pxlNav.pxlUtils;
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlAnim=pxlNav.pxlAnim;
    this.pxlAutoCam=pxlNav.pxlAutoCam;
    this.pxlAudio=pxlNav.pxlAudio;
    this.pxlFile=pxlNav.pxlFile;
    this.pxlVideo=pxlNav.pxlVideo;
    this.pxlQuality=pxlNav.pxlQuality;
    this.pxlUser=pxlNav.pxlUser;
    this.pxlShaders=pxlNav.pxlShaders;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlCamera=pxlNav.pxlCamera;
    this.pxlGuiDraws=pxlNav.pxlGuiDraws;
    this.emit=pxlNav.emit.bind(pxlNav);

  }
  
  log( msg, level=VERBOSE_LEVEL.INFO ){
    if( this.options.verbose > VERBOSE_LEVEL.INFO ){
      console.log( msg );
    }
  }

  // Function required
  init(){

    let optionKeys=Object.keys( this.options );
    let defaultKeys=Object.keys( PXLNAV_OPTIONS );
    defaultKeys.forEach( (k)=>{
      if( !optionKeys.includes( k ) ){
        this.options[k]=PXLNAV_OPTIONS[k];
      }
    });

    //this.setExposure( 0 );
    let subList=Object.keys( this.roomSubList );
    subList.forEach( (s)=>{
        this.roomSubList[ s ].init();
    });
  }
    
  boot(){
    //this.pxlQuality.attachModule( this );
  }
    
  setBootRoom(bootRoom, bootLocation){
    console.log(bootRoom, bootLocation);
      this.bootRoom=bootRoom;
      this.bootLocation=bootLocation;
  }
    
  postBoot(){
		
		this.pxlGuiDraws.togglePageDisplay();

    this.roomSceneList[this.bootRoom].start();
    
    this.posted=true;

    //this.buildSnow();
    
    /*
    // Prevent Web Camera from booting 
    if( this.pxlDevice.mobile || this.pxlAutoCam.enabled){
        this.pxlAutoCam.toggleAutoCam();
        this.fogMult.x = 1;
        if( ! this.pxlAutoCam.enabled ){
            this.pxlGuiDraws.toggleMobileWelcome(true);
        }else{
            this.postIntro=true;
            this.pxlCamera.colliderValid=true;
            this.pxlCamera.eventCheckStatus=true;
            this.pxlCamera.colliderShiftActive=true;
            this.pxlCamera.nearestFloorObjName="mobile";
            this.pxlCamera.colliderCurObjHit="AudioTrigger_2";
            this.pxlCamera.proximityScaleTrigger=true;
            this.exposureShiftActive=true;
            this.pxlAudio.setFadeActive( 1 );
        }
    }else{
        this.pxlGuiDraws.iconEvent( "click", this.pxlGuiDraws.hudIcons.helpIcon, "help" );
    }
    */
    
    /*
    // Prevent audio and video booting
    setTimeout( ()=>{
        this.pxlAudio.postBoot();
        
        if( this.pxlDevice.mobile ){
          this.pxlAudio.djPlayerMuteToggle(true);
        }
        
        if(this.pxlVideo){
          this.pxlVideo.postBoot('dj');
        }
        
    }, 1000);
    */
  }
    
  postHelpIntro(){
    if( !this.pxlDevice.mobile && !this.pxlAutoCam.enabled ){
      this.pxlCamera.jogServerMemory();
    }else{
      this.pxlCamera.colliderValid=true;
      this.pxlCamera.eventCheckStatus=true;
      this.pxlCamera.colliderShiftActive=true;
      this.pxlCamera.nearestFloorObjName="mobile";
      this.pxlCamera.colliderCurObjHit="AudioTrigger_2";
      this.pxlCamera.proximityScaleTrigger=true;
      this.exposureShiftActive=true;
      
      if( !this.pxlDevice.mobile ){
        this.pxlAudio.play();
        setTimeout( ()=>{
          this.pxlAudio.initPlay();
        },100);
      }
    }
    this.postIntro=true;
  }

  start(){
    this.init();
  }
    
  step(){
        
    // ## Should just have a stepper system set up...
    //      Easier for modular installations
    this.pxlTimer.step();
    this.pxlAudio.step();
    this.pxlQuality.step();
    if( this.pxlAutoCam.step() ){
        this.pxlCamera.step();
    }
    this.pxlGuiDraws.step();

    this.stepWarpPass();
        
    if( this.pxlTimer.msRunner.x > this.checkContext && this.activeContext ){
      this.checkContext=this.pxlTimer.msRunner.x+1;
      let tmpCanvas=document.createElement('canvas');
      try{
        let ctxVal=!!tmpCanvas.getContext('webgl');
      }catch(err){
        this.activeContext=true;
        this.pxlGuiDraws.pxlNavCanvas.style.display='none';
      }
    }
    
    if( this.pxlDevice.mobile && this.exposureShiftActive ){
      //this.pxlCamera.colliderShiftActive=!(this.pxlCamera.colliderAdjustPerc==1 || this.pxlCamera.colliderAdjustPerc==0);
      //this.updateCompUniforms(curExp);
    }
  }
  
  // Function required, stoping functions
  async stop(){
    this.setExposure( 0 );
    let subList=Object.keys( this.roomSubList );
    subList.forEach( (s)=>{
      this.roomSubList[ s ].stop();
    });
  }
  
  loadRoom(roomName){
    return new Promise( (resolve, reject) =>{

      this.log("Loading Room - ", roomName);
      
      var curImport=import(`../${this.pxlRoomLclRoot}/${roomName}/${roomName}.js`);
      
      curImport.then((module)=>{
        let roomObj=new module[roomName]( roomName, `./js/${this.pxlRoomLclRoot}/${roomName}/`, this.pxlFile, this.pxlAnim, this.pxlUtils, this.pxlDevice, this, this.pxlTimer.msRunner, null, null, this.cloud3dTexture);

        roomObj.camera=this.pxlCamera.camera;
        roomObj.scene=new THREE.Scene();
        if( !roomObj.userAvatarGroup ){
            roomObj.userAvatarGroup=new THREE.Group();
        }
        roomObj.scene.add( roomObj.userAvatarGroup );
        
        var options = {
            format : THREE.RGBAFormat,
            antialias: false,
            sortObjects:true,
            alpha:true,
            type : /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType
        };
        
        roomObj.scene.renderTarget=new THREE.WebGLRenderTarget( this.pxlDevice.sW*this.pxlQuality.screenResPerc, this.pxlDevice.sH*this.pxlQuality.screenResPerc,options);
        roomObj.scene.renderTarget.texture.format=THREE.RGBAFormat;
        roomObj.scene.renderTarget.texture.minFilter=THREE.LinearFilter;
        roomObj.scene.renderTarget.texture.magFilter=THREE.LinearFilter;
        roomObj.scene.renderTarget.texture.generateMipmaps=false;
        //roomObj.scene.renderTarget.texture.type=THREE.FloatType;
        roomObj.scene.renderTarget.depthBuffer=true;
        roomObj.scene.renderTarget.depthTexture = new THREE.DepthTexture( this.pxlDevice.sW*this.pxlQuality.screenResPerc, this.pxlDevice.sH*this.pxlQuality.screenResPerc );
        roomObj.scene.renderTarget.depthTexture.format=THREE.DepthFormat;
        //roomObj.scene.renderTarget.depthTexture.type=THREE.UnsignedIntType;
        roomObj.scene.renderTarget.depthTexture.type=THREE.UnsignedShortType;
        
        // World Pos Target
        //   Remains from a Portal Room Snapshot Display system
        //     Would be desired tech, but needs re-implementation
        // roomObj.scene.renderWorldPos=new THREE.WebGLRenderTarget( this.pxlDevice.sW*this.pxlQuality.screenResPerc, this.pxlDevice.sH*this.pxlQuality.screenResPerc,options);
        // roomObj.scene.renderWorldPos.texture.format=THREE.RGBAFormat;
        // roomObj.scene.renderWorldPos.texture.minFilter=THREE.NearestFilter;
        // roomObj.scene.renderWorldPos.texture.magFilter=THREE.NearestFilter;
        // roomObj.scene.renderWorldPos.texture.generateMipmaps=false;
        
        roomObj.cloud3dTexture=this.cloud3dTexture;
        if( !this.roomNameList.includes( roomName ) ){
          this.roomNameList.push( roomName );
        }
        this.roomSceneList[ roomName ]=roomObj;
    
        resolve(true);
      });
    });
  }
  
  startAllRooms(){
    this.roomNameList.forEach( (roomName)=>{
        this.startRoom( this.roomSceneList[ roomName ] );
    });
  }
  
  startRoom( room ){
    room.active=false;
    room.startTime=this.pxlTimer.msRunner.x;
  }
    
  newSubRoom( roomObject ){
    this.roomSubList[ roomObject.roomName ]=roomObject;
  }
  addToRooms( obj ){
    let roomObjDict={};
    
    this.roomNameList.forEach( (n)=>{
      let dupe=obj.clone();
      this.roomSceneList[ n ].scene.add( dupe );
      roomObjDict[n]=dupe;
    });
    return roomObjDict;
  }
  
  addToRoomLayers( obj, layer=1 ){
    let roomObjDict={};
    
    this.roomNameList.forEach( (n)=>{
      let dupe=obj.clone();
      this.roomSceneList[ n ].scene.add( dupe );
      roomObjDict[n]=dupe;
      dupe.layers.set( layer );
    });
    return roomObjDict;
  }
  
  addToRoomParents( obj, parent ){
    let roomObjDict={};
    
    if( !this.parentNameList.includes( parent ) ){
      this.parentNameList.push( parent );
    }
    
    this.roomNameList.forEach( (n)=>{
      let dupe=obj.clone();
      if( !this.parentGroupList[ n ] ){
        this.parentGroupList[ n ]={};
      }
      if( !this.parentGroupList[ n ][ parent ] ){
        let newGroup = new THREE.Group();
        this.parentGroupList[ n ][ parent ]=newGroup;
        this.roomSceneList[ n ].scene.add( newGroup );
      }
      this.parentGroupList[ n ][ parent ].add( dupe );
      roomObjDict[n]=dupe;
    });
    return roomObjDict;
  }
  
  // Initially, main room was loaded as a nexus room
  //   Should see if this is still necessary
  buildRoomEnvironments(){
    
    this.log("Building Room Environments");
    this.log(this.roomNameList);
    let loadPromisList=[];
    
    this.roomNameList.forEach( (r)=>{
      this.roomSceneList[ r ].init();
      if( this.roomSceneList[ r ].build ){
        this.roomSceneList[ r ].build();
      }
    });
  }
  
  getArtistInfo(){
    return null;
  }
    
  setFogHue( orig=[0,0], rot=[1,1] ){
    let hsl=this.fog.color.getHSL();

    let atanVals=[ rot[0]-orig[0], rot[1]-orig[1] ];
    //let scalar=(atanVals[0]+atanVals[1]);
    //atanVals= [ atanVals[0]/scalar, atanVals[0]/scalar ]
    let hRot=Math.abs(Math.atan2( atanVals[0], atanVals[1] ) * 0.3183098861837907 ); // 1/pi
    
    let scale= (atanVals[0]**2+atanVals[1]**2)**.5 / Math.max(this.pxlDevice.sW, this.pxlDevice.sH);
    this.fog.color.setHSL( hRot, scale*.5+.3, scale*.5 );
    
    if( this.roomSceneList[this.currentRoom] && this.roomSceneList[this.currentRoom].setFog ){
      this.roomSceneList[this.currentRoom].setFog( this.fog.color );
    }
  }
    
  //%=
  // Return Primary Shader Material
  readShader( objShader="" ){
    if( objShader=="script_fog" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
        
      if(this.mapOverlayHeavyPass.enabled==true){
        return this.mapOverlayHeavyPass.material ;
      }else if(this.mapOverlayPass.enabled==true){
        return this.mapOverlayPass.material ;
      }else if(this.mapOverlaySlimPass.enabled==true){
        return this.mapOverlaySlimPass.material ;
      }
    }else if( objShader=="script_dArrows" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.geoList[ "dArrows" ][0].material;
    }else if( objShader=="script_userScreens" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.camScreenData.screenGeoList[0].material;
    }else if( objShader=="script_warpZonePortals" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.returnPortalGlowList[0].material;
        
    }else if( objShader=="script_lizardking" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.lizardKingPass.material;
    }else if( objShader=="script_majorTom" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.pxlUser.sFieldPass.material;
    }else if( objShader=="script_fractalSubstrate" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.pxlUser.iZoomPass.material;
    }else if( objShader=="script_fractalEcho" ){
      this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
      return this.delayPass.material;
        
    }else{
      let geoRead=objShader.split("_");
      geoRead.shift();
      geoRead=geoRead.join("_");
      if( this.geoList[ geoRead ] ){
          this.pxlGuiDraws.guiWindows["shaderGui"].currentShader=objShader;
          return this.geoList[ geoRead ].material ;
      }
    }
        
        
    //return this.pxlUser.sFieldPass.material;
  }
  setShader( unis, vert, frag ){
        let setShaderMtl;
        
        let objShader=this.pxlGuiDraws.guiWindows["shaderGui"].currentShader;
        if( objShader=="script_fog" ){
            if(this.mapOverlayHeavyPass.enabled==true){
                setShaderMtl= this.mapOverlayHeavyPass.material ;
            }else if(this.mapOverlayPass.enabled==true){
                setShaderMtl= this.mapOverlayPass.material ;
            }else if(this.mapOverlaySlimPass.enabled==true){
                setShaderMtl= this.mapOverlaySlimPass.material ;
            }
        }else if( objShader=="script_dArrows" ){
            this.geoList[ "dArrows" ].forEach( (o)=>{
                setShaderMtl=o.material;
                setShaderMtl.vertexShader=vert;
                setShaderMtl.fragmentShader=frag;
                setShaderMtl.needsUpdate=true;
            });
            return;
        }else if( objShader=="script_userScreens" ){
            this.camScreenData.screenGeoList.forEach( (o)=>{
                setShaderMtl=o.material;
                setShaderMtl.vertexShader=vert;
                setShaderMtl.fragmentShader=frag;
                setShaderMtl.needsUpdate=true;
            });
            return;
        }else if( objShader=="script_warpZonePortals" ){
            this.returnPortalGlowList.forEach( (o)=>{
                setShaderMtl=o.material;
                setShaderMtl.vertexShader=vert;
                setShaderMtl.fragmentShader=frag;
                setShaderMtl.needsUpdate=true;
            });
            return;
            
        }else if( objShader=="script_lizardking" ){
                setShaderMtl=this.lizardKingPass.material;
        }else if( objShader=="script_majorTom" ){
                setShaderMtl=this.pxlUser.sFieldPass.material;
        }else if( objShader=="script_fractalSubstrate" ){
                setShaderMtl=this.pxlUser.iZoomPass.material;
        }else if( objShader=="script_fractalEcho" ){
                setShaderMtl=this.delayPass.material;
            
        }else{
            let geoRead=objShader.split("_");
            geoRead.shift();
            geoRead=geoRead.join("_");
            if( this.geoList[ geoRead ] ){
                setShaderMtl= this.geoList[ geoRead ].material ;
            }
        }
        
        if(setShaderMtl){
            setShaderMtl.vertexShader=vert;
            setShaderMtl.fragmentShader=frag;
            setShaderMtl.needsUpdate=true;
        }
  }
  //%
  
  // Load the given texture file from the internal pxlNav 'assetRoot'
  //   Default is "./assets/" from the web root.
  //     Please pass the path to your asset folder when creating your pxlNav object.
  // It would be best if you pass channel count and mods
  //   But you can tell it attempts to mitigate the issue.
    getAssetTexture( assetName, channels=null, mods=null ){
      this.log("Get Internal Texture - ", assetName);
      let curTexturePath = this.pxlUtils.assetRoot + assetName;
      if(!channels){
        let assetSplit = assetName.split(".");
        let assetExt = assetSplit.pop().toLowerCase();
        if( assetExt=="jpg" || assetExt=="jpeg"  ){
          channels=3;
        }else if( assetExt=="png" ){
          channels=4;
        }
      }
      if(!mods){
        mods={"magFilter":THREE.LinearFilter, "minFilter":THREE.LinearFilter};
      }

      let textureRead = this.pxlUtils.loadTexture( curTexturePath, channels, mods );
      return textureRead;
    }
    
    
    buildSnow(){
        //sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

    let vertexCount = 12000; // Point Count
        let pScale = 12;  // Point Base Scale

    let geo = new THREE.BufferGeometry();
    let verts = [];
    let seeds = [];
    let atlasId = [];

        const atlasGen=()=>{ return Math.floor( (Math.random() * 4000) % 4 )*.25; };

    for( let x=0; x<vertexCount; ++x ){
            verts.push( 0,0,0 );
      seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*.5+.5) );
      atlasId.push( atlasGen(), atlasGen() );
    }

    let posAttribute = new THREE.Float32BufferAttribute( verts, 3 );
    let seedAttribute = new THREE.Float32BufferAttribute( seeds, 4 );
    let atlasAttribute = new THREE.Float32BufferAttribute( atlasId, 2 );
    //let idAttribute = new THREE.Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
    geo.setAttribute( 'position', posAttribute );
    geo.setAttribute( 'seeds', seedAttribute );
    geo.setAttribute( 'atlas', atlasAttribute );
    //geo.setAttribute( 'id', idAttribute );
        
        let snowUniforms={
      snowTexture:{type:"t",value: this.pxlUtils.loadTexture( this.pxlUtils.assetRoot+"snow.jpg", 1, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} ) },
      pointScale:{type:"f",value: pScale*this.pxlQuality.screenResPerc },
      intensity:{type:"f",value:1.0},
      rate:{type:"f",value:.035},
    };
    console.log(this.pxlShaders.particles)
        let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, this.pxlShaders.particles.snowVert( this.mobile ), this.pxlShaders.particles.snowFrag() );
    mtl.side=THREE.DoubleSide;
        mtl.transparent=true;
        mtl.blending=THREE.AdditiveBlending;
        mtl.depthTest=true;
        mtl.depthWrite=false;

        let snow = new THREE.Points( geo, mtl );
        snow.sortParticles = false;
        snow.frustumCulled = false;
        this.scene.add( snow );
        snow.layers.set(1);
        snow.pBaseScale=pScale;
        this.geoList['snow']=snow;
    }
    
    // A screen filled plane to render outside of effect composer passes
    buildBackgroundObject( customUniforms={}, bgVert=null, bgFrag=null){
        let geo = new THREE.PlaneBufferGeometry();
        
        let bgUniforms={}
        Object.assign( bgUniforms, customUniforms );
        
        if( bgVert==null || typeof(bgVert)!="string"){
            bgVert=this.pxlShaders.scene.bgScreenVert();
        }
        if( bgFrag==null || typeof(bgFrag)!="string"){
            bgFrag=this.pxlShaders.scene.bgScreenFrag();
        }
        
        let mtl = this.pxlFile.pxlShaderBuilder( bgUniforms, bgVert, bgFrag );
        mtl.side=THREE.DoubleSide;
        mtl.depthTest=true;
        mtl.depthWrite=false;
        //mtl.transparent=true;
        let bgMesh = new THREE.Mesh( geo, mtl );
        bgMesh.frustumCulled = false;
        
        return bgMesh;
    }
    
  // In-Scene clickables
  clickUserDetect(){
    
    if( this.roomSceneList[this.currentRoom].castRay ){
      this.roomSceneList[this.currentRoom].castRay( true, this.pxlDevice.touchMouseData.button )
    }
    
    if( this.pxlDevice.mobile ){ 
        return;
    }
        
    let objHit=null;
    let mouseScreenSpace=new THREE.Vector2( this.pxlDevice.mouseX/this.pxlDevice.sW*2-1, -this.pxlDevice.mouseY/this.pxlDevice.sH*2+1 );
    this.pxlCamera.objRaycast.setFromCamera(mouseScreenSpace, this.pxlCamera.camera );
    var rayHits=[];
    //if(this.camScreenData.screenClickable.length>0) rayHits=this.pxlCamera.objRaycast.intersectObjects(this.camScreenData.screenClickable);//this.scene.children);
    if(this.objectClickable.length>0) rayHits=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable);//this.scene.children);
    if(rayHits.length > 0){
      let closestHit=99999;
      for(var x=0; x<rayHits.length;++x){
        var obj=rayHits[x];//.object;
        let curDist=obj.distance;
        if(curDist<closestHit){
          objHit=obj.object;
          closestHit=Math.min(closestHit, curDist);
        }
      }
    }
    if(objHit){
      this.clickableActions(objHit.name);
    }
        
        
    let promoHit=null;
    if(this.promoClickable.length>0) rayHits=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable);//this.scene.children);
    if(rayHits.length > 0){
      let closestHit=99999;
      for(var x=0; x<rayHits.length;++x){
        var obj=rayHits[x];//.object;
        let curDist=obj.distance;
        if(curDist<closestHit){
          promoHit=obj.object;
          closestHit=Math.min(closestHit, curDist);
        }
      }
    }
    if(promoHit){
      this.promoActions(promoHit);
    }
        
  }
  clickableActions(action=null){
    if(action == "CallToAction" && this.clickablePrevActiveObject){
      this.pxlGuiDraws.ctaBuildPopup();
      this.objectClickableObjectList[this.clickablePrevActiveObject]['Inactive'].visible=true;
      this.objectClickableObjectList[this.clickablePrevActiveObject]['Hover'].visible=false;
      this.clickablePrevActiveObject=null;
    }
  }
    
  promoActions(pName=null){
        let pLink=pName.userData.video;
        let pScreen=pName.name;
        
        if( this.promoClickableLinks.hasOwnProperty( pLink ) ){
            var link= window.open( this.promoClickableLinks[pLink], "_blank");
            link.focus();
        }
  }
  // Hover over clickable
  hoverUserDetect(){
    
    if( this.roomSceneList[this.currentRoom].castRay ){
      this.roomSceneList[this.currentRoom].castRay( false, this.pxlDevice.touchMouseData.button )
    }
    
    let objHit=null;
    let mouseScreenSpace=new THREE.Vector2( this.pxlDevice.mouseX/this.pxlDevice.sW*2-1, -this.pxlDevice.mouseY/this.pxlDevice.sH*2+1 );
    this.pxlCamera.objRaycast.setFromCamera(mouseScreenSpace, this.pxlCamera.camera );
    var rayHits=[];
    //if(this.camScreenData.screenClickable.length>0) rayHits=this.pxlCamera.objRaycast.intersectObjects(this.camScreenData.screenClickable);//this.scene.children);
    if(this.objectClickable.length>0) rayHits=this.pxlCamera.objRaycast.intersectObjects(this.objectClickable);
    if(rayHits.length > 0){
      let closestHit=99999;
      for(var x=0; x<rayHits.length;++x){
        var obj=rayHits[x];//.object;
        let curDist=obj.distance;
        if(curDist<closestHit){
          objHit=obj.object;
          closestHit=Math.min(closestHit, curDist);
        }
      }
    }
    if(objHit){
      this.pxlDevice.setCursor("help");
      if(this.objectClickableObjectList[objHit.name]){
        if(this.clickablePrevActiveObject==null){
          this.clickablePrevActiveObject=objHit.name;
        }
        this.objectClickableObjectList[objHit.name]['Inactive'].visible=false;
        this.objectClickableObjectList[objHit.name]['Hover'].visible=true;
      }
            return;
    }else{
      if(this.clickablePrevActiveObject){
        this.objectClickableObjectList[this.clickablePrevActiveObject]['Inactive'].visible=true;
        this.objectClickableObjectList[this.clickablePrevActiveObject]['Hover'].visible=false;
        this.clickablePrevActiveObject=null;
      }
      this.pxlDevice.setCursor("grab");
    }
       
        
    let promoHit=null;
    if(this.promoClickable.length>0) rayHits=this.pxlCamera.objRaycast.intersectObjects(this.promoClickable);
    if(rayHits.length > 0){
      let closestHit=99999;
      for(var x=0; x<rayHits.length;++x){
        var obj=rayHits[x];//.object;
        let curDist=obj.distance;
        if(curDist<closestHit){
          promoHit=obj.object;
          closestHit=Math.min(closestHit, curDist);
        }
      }
    }
    if(promoHit){
      this.pxlDevice.setCursor("alias");
      if(this.promoClickableObjectList[promoHit.name]){
        if(this.promoPrevActiveObject==null){
          this.promoPrevActiveObject=promoHit.name;
        }
        this.promoClickableObjectList[promoHit.name].x=1;
      }
    }else{
      if(this.promoPrevActiveObject){
        this.promoClickableObjectList[this.promoPrevActiveObject].x=.1;
        this.promoPrevActiveObject=null;
      }
      this.pxlDevice.setCursor("grab");
    }
  }

  // Set composer uniforms
  updateCompUniforms(exposure=null){
    if(exposure){
      this.pxlRenderSettings.exposure=exposure*this.pxlRenderSettings.mult;
    }
    if(this.mapOverlayPass){
      this.mapMotionBlurPass.uniforms.exposure.value = this.pxlRenderSettings.exposure;
      this.mapOverlayHeavyPass.uniforms.exposure.value = this.pxlRenderSettings.exposure;
      this.mapOverlayPass.uniforms.exposure.value = this.pxlRenderSettings.exposure;
      this.mapOverlaySlimPass.uniforms.exposure.value = this.pxlRenderSettings.exposure;
      //this.blurScreenMerge.uniforms.exposure.value = this.pxlRenderSettings.exposure;
    }
  }

// -- -- -- -- -- -- -- -- -- -- -- //

  // Event Helpers
  sendRoomMessage( roomName, messageType, messageValue ){
    if( this.roomSceneList[ roomName ] ){
      this.roomSceneList[ roomName ].onMessage( messageType, messageValue );
    }
  }


// -- -- -- -- -- -- -- -- -- -- -- //

  // Build composers and passes
  buildComposers(){
        
        // Set up swapable frame buffers, for prior frame reads
        /*EffectComposer.prototype.swapBuffer = ()=>{
            let tmpBuffer = this.renderTarget2;
            this.renderTarget2 = this.renderTarget1;
            this.renderTarget1 = tmpBuffer;
        };*/
        
    ///////////////////////////////////////////////////
    // -- SCENE WIDE MATERIALS  -- -- -- -- -- -- -- //
    ///////////////////////////////////////////////////

    this.mapWorldPosMaterial=new THREE.ShaderMaterial({
      uniforms:{
        camNear: { type:"f", value: this.pxlCamera.camera.near },
        camFar: { type:"f", value: this.pxlCamera.camera.far }
      },
      vertexShader: this.pxlShaders.rendering.worldPositionVert(),
      fragmentShader: this.pxlShaders.rendering.worldPositionFrag()
    });
    //this.mapWorldPosMaterial.side=THREE.DoubleSide;
    this.mapWorldPosMaterial.side=THREE.FrontSide;
    this.mapWorldPosMaterial.name="mapWorldPosMaterial";
      
    ///////////////////////////////////////////////////
    // -- 2-Step Blur Composer  -- -- -- -- -- -- -- //
    ///////////////////////////////////////////////////

    this.blurComposer = new EffectComposer(this.engine);
    
    this.shaderPasses.blurXShaderPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          time:{ value:this.time },
          tDiffuse: { value: null },
          pDiffuse: { value: this.scene.renderGlowTarget.texture },
          resUV: { value: this.pxlDevice.screenRes },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.directionalBlurPass( "pDiffuse", [1,0], 4, 1.8 ),
        defines: {}
      } ), "tDiffuse"
    );
    this.shaderPasses.blurXShaderPass.material.transparent = true;
    this.shaderPasses.blurXShaderPass.needsSwap = true;
    this.shaderPasses.blurXShaderPass.enabled=false;
    this.shaderPasses.blurXShaderPass.name="blurXShaderPass";
    this.blurComposer.addPass( this.shaderPasses.blurXShaderPass );
    
    
    this.shaderPasses.dirBlurCopyPass = new ShaderPass(CopyShader);
    this.shaderPasses.dirBlurCopyPass.enabled=false;
    this.shaderPasses.dirBlurCopyPass.name="dirBlurCopyPass";
    this.blurComposer.addPass(this.shaderPasses.dirBlurCopyPass);
    
    this.shaderPasses.blurYShaderPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          time:{ value:this.time },
          tDiffuse: { value: null },
          //pDiffuse: { value: this.scene.renderGlowTarget.texture },
          //pDiffuse: { value: this.blurComposer.writeBuffer.texture },
          pDiffuse: { value: this.scene.renderGlowTarget.texture },
          resUV: { value: this.pxlDevice.screenRes },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.directionalBlurPass( "pDiffuse", [0,1], 4, 1.3 ),
        defines: {}
      } ), "tDiffuse"
    );
    this.shaderPasses.blurYShaderPass.material.transparent = true;
    this.shaderPasses.blurYShaderPass.enabled=false;
    this.shaderPasses.blurYShaderPass.name="blurYShaderPass";
    this.blurComposer.addPass( this.shaderPasses.blurYShaderPass );
  
    
    this.shaderPasses.scatterMixShaderPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          time:{ value:this.time },
          tDiffuse: { value: null },
          pDiffuse: { value: this.scene.renderGlowTarget.texture },
          resUV: { value: this.pxlDevice.screenRes },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.mixBlurShaderPass(),
        defines: {}
      } ), "tDiffuse"
    );
    this.shaderPasses.scatterMixShaderPass.material.transparent = true;
    this.shaderPasses.scatterMixShaderPass.enabled=false;
    this.shaderPasses.scatterMixShaderPass.name="scatterMixShaderPass";
    this.blurComposer.addPass( this.shaderPasses.scatterMixShaderPass );
    
      
    // Set Anti-Aliasing Quality
    if( this.options.antiAliasing == ANTI_ALIASING.LOW){
      this.shaderPasses.scatterMixShaderPass.enabled=true;
    }else if( this.options.antiAliasing == ANTI_ALIASING.MEDIUM){
      this.shaderPasses.blurXShaderPass.enabled=true;
      this.shaderPasses.dirBlurCopyPass.enabled=true;
      this.shaderPasses.blurYShaderPass.enabled=true;
    }else if( this.options.antiAliasing == ANTI_ALIASING.HIGH ){
      this.shaderPasses.blurXShaderPass.enabled=true;
      this.shaderPasses.dirBlurCopyPass.enabled=true;
      this.shaderPasses.blurYShaderPass.enabled=true;
      this.shaderPasses.scatterMixShaderPass.enabled=true;
    }




    ///////////////////////////////////////////////////
    // -- POST PROCESSING; MAIN MENU  -- -- -- -- -- //
    ///////////////////////////////////////////////////
    // Post Processing
    
    this.mapComposerMotionBlur=new EffectComposer(this.engine);
    
    this.mapMotionBlurPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          rDiffuse: { value: this.scene.renderTarget.texture },
          exposure:{type:"f",value:this.pxlRenderSettings.exposure},
          time:{ value:this.pxlTimer.msRunner },
          camRotXYZ:{ value:this.pxlCamera.camRotXYZ },
          blurDirCur:{ type:'f',value:this.blurDirCur },
          blurDirPrev:{ type:'f',value:this.blurDirPrev },
          noiseTexture: { value: this.cloud3dTexture },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.motionBlurPostProcess(this.pxlDevice.screenRes,this.pxlDevice.mobile),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapMotionBlurPass.needsSwap = true;
    this.mapMotionBlurPass.name = "mapMotionBlurPass";
    this.mapComposerMotionBlur.addPass(this.mapMotionBlurPass);
    this.mapMotionBlurPass.enabled=false;
    this.mapComposerMotionBlur.renderToScreen=false;
    //this.mapComposerMotionBlur.autoClear=false;
    
    // -- -- -- -- -- -- -- -- -- -- //
    
    this.mapComposerGlow=new EffectComposer(this.engine);
    
    let renderGlowPass = new RenderPass(this.scene, this.pxlCamera.camera);
    this.mapComposerGlow.addPass(renderGlowPass);
    
    this.blurScreenMerge = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          rDiffuse: { value: this.scene.renderTarget.texture },
          //mtDiffuse: { value: this.mapComposerMotionBlur.renderTarget2.texture },
          mtDiffuse: { value: this.scene.renderTarget.texture },
          exposure:{type:"f",value:this.pxlRenderSettings.exposure}
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.compLayersPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
    this.blurScreenMerge.needsSwap = true;
    this.blurScreenMerge.name = "blurScreenMerge";
    this.mapComposerGlow.addPass(this.blurScreenMerge);
    
    let glowCopyPassBlur = new ShaderPass(CopyShader);
    glowCopyPassBlur.name = "glowCopyPassBlur";
    this.mapComposerGlow.addPass(glowCopyPassBlur);
    
    //this.mapGlowPass = new UnrealBloomPass( new THREE.Vector2( this.pxlDevice.mapW*this.pxlQuality.bloomPercMult, this.pxlDevice.mapH*this.pxlQuality.bloomPercMult ), .28, 0.08, 0.13 );
    //this.mapGlowPass.threshold = this.pxlRenderSettings.bloomThresh;
    //this.mapGlowPass.strength = this.pxlRenderSettings.bloomStrength;
    //this.mapGlowPass.radius = this.pxlRenderSettings.bloomRadius;
    /*this.mapGlowPass = new BloomPass( this.pxlRenderSettings.bloomStrength, 50, 4, 512);
    this.mapGlowPass.threshold = this.pxlRenderSettings.bloomThresh;
    this.mapGlowPass.strength = this.pxlRenderSettings.bloomStrength;
    this.mapGlowPass.radius = this.pxlRenderSettings.bloomRadius;*/
    //this.mapGlowPass.clear=true;
    
    //this.mapComposerGlow.addPass(this.mapGlowPass);
    this.mapComposerGlow.renderToScreen=false;
    this.mapComposerGlow.autoClear=true;

    this.mapOverlayHeavyPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          gamma:{type:"f",value:this.pxlDevice.gammaCorrection},
          exposure:{type:"f",value:this.pxlRenderSettings.exposure},
          time:{ value:this.pxlTimer.msRunner },
                    camPos: { value: this.pxlCamera.camera.position },
          ratio:{ type:'f',value: 1 },
          tDiffuse: { value: null },
          rDiffuse: { value: this.scene.renderTarget.texture },
          bloomTexture: { value: this.mapComposerGlow.renderTarget2.texture },
          sceneDepth: { value: this.scene.renderTarget.depthTexture },
          scenePos: { value: this.scene.renderWorldPos.texture },
          noiseTexture: { value: this.cloud3dTexture },
          fogMult: { value: this.fogMult },
          proximityMult: { value: 1 },
          //bloomTexture: { value: this.mapComposerMotionBlur.renderTarget2.texture }
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.finalOverlayHeavyShader(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapOverlayHeavyPass.needsSwap = true;
    this.mapOverlayHeavyPass.name = "mapOverlayHeavyPass";

    this.mapOverlayPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          gamma:{type:"f",value:this.pxlDevice.gammaCorrection},
          exposure:{type:"f",value:this.pxlRenderSettings.exposure},
          time:{ value:this.pxlTimer.msRunner },
                    camPos: { value: this.pxlCamera.camera.position },
          ratio:{ type:'f',value: 1 },
          tDiffuse: { value: null },
          rDiffuse: { value: this.scene.renderTarget.texture },
          bloomTexture: { value: this.mapComposerGlow.renderTarget2.texture },
          sceneDepth: { value: this.scene.renderTarget.depthTexture },
          scenePos: { value: this.scene.renderWorldPos.texture },
          noiseTexture: { value: this.cloud3dTexture },
          fogMult: { value: this.fogMult },
          proximityMult: { value: 1 },
          //bloomTexture: { value: this.mapComposerMotionBlur.renderTarget2.texture }
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.finalOverlayShader(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapOverlayPass.needsSwap = true;
    this.mapOverlayPass.name = "mapOverlayPass";
    
    this.mapOverlaySlimPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          gamma:{type:"f",value:this.pxlDevice.gammaCorrection},
          exposure:{type:"f",value:this.pxlRenderSettings.exposure},
          time:{ value:this.pxlTimer.msRunner },
                    camPos: { value: this.pxlCamera.camera.position },
          ratio:{ type:'f',value: 1 },
          tDiffuse: { value: null },
          rDiffuse: { value: this.scene.renderTarget.texture },
          bloomTexture: { value: this.mapComposerGlow.renderTarget2.texture },
          sceneDepth: { value: this.scene.renderTarget.depthTexture },
          fogMult: { value: this.fogMult },
          proximityMult: { value: 1 },
          //bloomTexture: { value: this.mapComposerMotionBlur.renderTarget2.texture }
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.finalOverlaySlimShader(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapOverlaySlimPass.needsSwap = true;
    this.mapOverlaySlimPass.name = "mapOverlaySlimPass";

    // -- -- -- -- -- -- -- -- -- -- //
    
    this.mapGlowPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          time:{ value:this.pxlTimer.msRunner },
          ratio:{ type:'f',value: 1 },
          tDiffuse: { value: null },
          rDiffuse: { value: this.scene.renderGlowTarget.texture },
          sceneDepth: { value: this.scene.renderTarget.depthTexture },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.glowPassPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapGlowPass.needsSwap = true;
    this.mapGlowPass.name = "mapGlowPass";

    // -- -- -- -- -- -- -- -- -- -- //
    
    this.mapComposer = new EffectComposer(this.engine);
    
    this.mapComposer.addPass( this.mapOverlayHeavyPass );
    this.mapComposer.addPass( this.mapOverlayPass );
    this.mapComposer.addPass( this.mapOverlaySlimPass );
    this.mapComposer.addPass( this.mapGlowPass );
    this.mapOverlayHeavyPass.enabled=false;
    this.mapOverlayPass.enabled=false;
    //this.mapOverlayPass.autoClear=true;
    //this.mapOverlaySlimPass.enabled=false;
    
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
    this.pxlUser.lKingWarp=new THREE.Vector2( ...this.pxlUser.lKingInactive );
        
    this.lizardKingPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          time:{ value:this.pxlTimer.msRunner },
          ratio: { value: this.pxlDevice.screenRes },
          noiseTexture: { value: this.cloud3dTexture },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.lKingPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
        this.pxlUser.lKingPass=this.lizardKingPass;
        this.lizardKingPass.enabled=false;
        this.pxlUser.lKingPass.name = "lizardKingPass";
    
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
    this.pxlUser.sFieldPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          time:{ value:this.pxlTimer.msRunner },
          ratio: { value: this.pxlDevice.screenRes },
          noiseTexture: { value: this.cloud3dTexture },
          starTexture: { value: this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"uv_starNoise.jpg") },
        },
        vertexShader: this.pxlShaders.rendering.sFieldPostProcessVert(),
        fragmentShader: this.pxlShaders.rendering.sFieldPostProcessFrag(),
        defines: {}
      } ), "tDiffuse"
    );
        this.pxlUser.sFieldPass.enabled=false;
        this.pxlUser.sFieldPass.name = "sFieldPass";
    
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
    this.pxlUser.iZoomPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          tDiffusePrev: {type:'t', value: null },
          time:{ value:this.pxlTimer.msRunner },
          ratio: { value: this.pxlDevice.screenRes },
          noiseTexture: { value: this.cloud3dTexture },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.iZoomPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
        this.pxlUser.iZoomPass.enabled=false;
        this.pxlUser.iZoomPass.name = "iZoomPass";
    
        
        
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
    this.chroAberrationPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          ratio: { value: this.pxlDevice.screenRes },
          warpMult: { value: this.chroAberMult },
          chroAberUVTexture: { value: this.chroAberUVTexture },
          lKing: { value: this.pxlUser.lKingWarp },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.chroAberPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
    this.chroAberrationPass.enabled=false;
    this.chroAberrationPass.name = "chroAberrationPass";
    this.mapComposer.addPass( this.chroAberrationPass );
    this.mapComposer.addPass( this.lizardKingPass );
    //if( !this.mobile ) {
    this.mapComposer.addPass( this.pxlUser.sFieldPass );
    this.mapComposer.addPass( this.pxlUser.iZoomPass );

    
    this.mapComposerWarpPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          time:{ value:this.pxlTimer.msRunner },
          fader:{ value:this.warpVisualFader },
          tDiffuse: { value: null },
          noiseTexture: { value: this.cloud3dTexture },
          animTexture: { value: this.blockAnimTexture  },
          //bloomTexture: { value: this.mapComposerMotionBlur.renderTarget2.texture }
        },
        vertexShader: this.pxlShaders.core.camPosVert(),
        fragmentShader: this.pxlShaders.rendering.warpPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapComposerWarpPass.needsSwap = true;
    this.mapComposerWarpPass.enabled=false;
    this.mapComposerWarpPass.name = "mapComposerWarpPass";
    this.mapComposer.addPass( this.mapComposerWarpPass );
    
        // 8 Samples
    this.mapBoxAAPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          resUV:{ type:'f',value:this.pxlDevice.screenRes },
          ratio:{ type:'f',value: 1 },
          gamma:{type:"f",value:this.pxlDevice.gammaCorrection},
        },
        vertexShader: this.pxlShaders.core.camPosVert(),
        fragmentShader: this.pxlShaders.rendering.boxAntiAliasPass(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapBoxAAPass.enabled=false;
    this.mapBoxAAPass.name = "mapBoxAAPass";
    this.mapComposer.addPass( this.mapBoxAAPass );
        
        // 4 samples
    this.mapCrossAAPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
          resUV:{ type:'f',value:this.pxlDevice.screenRes },
          ratio:{ type:'f',value: 1 },
          gamma:{type:"f",value:this.pxlDevice.gammaCorrection},
        },
        vertexShader: this.pxlShaders.core.camPosVert(),
        fragmentShader: this.pxlShaders.rendering.crossAntiAliasPass(),
        defines: {}
      } ), "tDiffuse"
    );
    this.mapCrossAAPass.enabled=false;
    this.mapCrossAAPass.name = "mapCrossAAPass";
    this.mapComposer.addPass( this.mapCrossAAPass );
    
    this.mapComposer.autoClear=true;
    
    // -- -- -- -- -- -- -- -- -- -- //
    
    // External Room composer
    let bootScene= this.roomSceneList[this.bootRoom].scene; // this.roomSceneList['ShadowPlanet'].scene ||
    this.roomComposer=new EffectComposer(this.engine);

    this.roomRenderPass = new RenderPass(bootScene, this.pxlCamera.camera);
    this.roomRenderPass.name = "roomRenderPass";
    this.roomComposer.addPass(this.roomRenderPass);
        
        
    this.roomNameList.forEach( (r)=>{
      if( r != this.mainRoom){
        let curPass=this.roomSceneList[ r ].applyRoomPass( this.roomComposer );
        if( curPass ){
            curPass.enabled=false;
            this.roomComposer.addPass( curPass );
        }
      }
    });
        
    
    this.roomBloomPass = new UnrealBloomPass( new THREE.Vector2( this.pxlDevice.mapW*.5, this.pxlDevice.mapH*.5 ), 1.5, 0.8, 0.85 );
    this.roomBloomPass.threshold = this.pxlRenderSettings.bloomThresh;
    this.roomBloomPass.strength = this.pxlRenderSettings.bloomStrength;
    this.roomBloomPass.radius = this.pxlRenderSettings.bloomRadius;
    this.roomBloomPass.name = "roomBloomPass";
    this.roomComposer.addPass( this.roomBloomPass );
    
    
    this.roomGlowPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          time:{ value:this.pxlTimer.msRunner },
          ratio:{ type:'f',value: 1 },
          tDiffuse: { value: null },
          //gDiffuse: { value: this.scene.renderGlowTarget.texture },
          //gDiffuse: { value: this.blurComposer.renderTarget1.texture },
          gDiffuse: { value: this.blurComposer.writeBuffer.texture },
          rDiffuse: { value: this.blurComposer.renderTarget2.texture },
          sceneDepth: { value: this.scene.renderTarget.depthTexture },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.glowPassPostProcess(),
        defines: {}
      } ), "tDiffuse"
    );
    this.roomGlowPass.needsSwap = true;
    this.roomGlowPass.name = "roomGlowPass";

    this.roomComposer.addPass( this.roomGlowPass );
    
    this.roomComposer.addPass( this.chroAberrationPass );
    this.roomComposer.addPass( this.lizardKingPass );
    this.roomComposer.addPass( this.pxlUser.sFieldPass );
    this.roomComposer.addPass( this.pxlUser.iZoomPass );
    this.roomComposer.addPass( this.mapComposerWarpPass );
        
    this.roomComposer.addPass( this.mapCrossAAPass );
    this.roomComposer.addPass( this.mapBoxAAPass );
        
    this.roomComposer.autoClear=true;
        
        // -- -- -- -- -- -- -- -- //
        
    
        // -- -- -- -- -- -- -- -- //
        // Set above, for pass to use renderTarget in uniforms
    this.delayComposer=new EffectComposer(this.engine);
    
    let renderDelayPass = new RenderPass(this.scene, this.pxlCamera.camera);
    //this.delayComposer.addPass(renderDelayPass);
        
    this.delayPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          tDiffuse: { value: null },
                    roomComposer: { type:"f", value : 0 },
          tDiffusePrev: { value: this.mapComposer.renderTarget1.texture },
          tDiffusePrevRoom: { value: this.roomComposer.renderTarget1.texture },
        },
        vertexShader: this.pxlShaders.core.defaultVert(),
        fragmentShader: this.pxlShaders.rendering.textureStorePass(),
        defines: {}
      } ), "tDiffuse"
    );
    //this.delayPass.needsSwap = true;
        this.delayPass.clear=false;
    this.delayComposer.addPass( this.delayPass );
    this.delayComposer.renderToScreen=false;
    this.delayComposer.autoClear=false;
        
        this.pxlUser.iZoomPass.uniforms.tDiffusePrev.value = this.delayComposer.renderTarget2.texture;
  }
  
  setExposure(curExp){
        let animPerc=1;
    //curExp= this.pxlCamera.uniformScalars.curExp + curExp*this.pxlCamera.uniformScalars.brightBase*animPerc; 
    curExp= curExp*animPerc; 
    this.pxlCamera.uniformScalars.exposureUniformBase=curExp;
    // Set scene exposure on post-process composer passes 
    this.updateCompUniforms(curExp);
  }
  
  stepWarpPass(){
    if( this.warpVisualActive ){
      let curPerc= ( this.pxlTimer.curMS - this.warpVisualStartTime ) / this.warpVisualMaxTime[this.pxlCamera.warpType];
      let fUp=Math.min( 1, curPerc*3 );
      let fDown=Math.min( 1, 3-curPerc*3 );
      
      if(fUp==1 && fDown==1 && this.pxlCamera.warpActive){
        this.pxlCamera.warpCamRun();
      }
      
      this.warpVisualFader.x=fUp;
      this.warpVisualFader.y=fDown;
      if( fDown <= 0){
        this.stopWarpVisual();
      }
    }
  }
  
  checkUserVideoStatus(curId){
  }
    
  remoteUserUpdateMedia( curId, video=false, audio=null){
        //
  }
    
    userRemoveRemoteData( curId ){
        //
    }
    
    
  stepShaderValues(){ // ## Switch variables in shaders to three variables to avoid this whole thing  
    this.stepShaderFuncArr.forEach((x)=>{
      if(typeof(x)=="object"){
        x.step();
      }else if(typeof(x)=="string"){
        console.log("Does this trigger?");
        console.log(x);
        //(x);
      }
    });
    
  }

  stepAnimatedObjects(){
    if(this.pxlUser.itemListNames.length > 0){
      this.pxlUser.itemListNames.forEach( (i)=>{
                this.pxlUser.itemList[i].rotation.y=this.pxlTimer.msRunner.x*this.pxlUser.itemRotateRate;
      });
    }
  }

  initWarpVisual( visualType ){
    this.warpVisualActive=true;
    this.warpVisualFader.x=0;
    this.warpVisualFader.y=1;
    this.warpVisualStartTime=this.pxlTimer.curMS;
    
    this.mapComposerWarpPass.enabled=true;
  }
  stopWarpVisual(){
    this.warpVisualActive=false;
    this.warpVisualFader.x=1;
    this.warpVisualFader.y=0;
    
    this.mapComposerWarpPass.enabled= !!this.pxlUser.iZoom;
  }
  
// Function required, but no prep needed
  prepPortalRender(){}
// Function required, but no cleanup needed
  cleanupPortalRender(){}
// Set the Room Warp Portal plane to display the render from that environment
  setPortalTexture(texture, toRoom){
    this.roomWarpVisuals[toRoom].material.map=texture;
  }
  warpPortalQueue(){
    return Object.keys(this.roomSceneList).reverse(); // So .pop'ing goes the correct direction
  }
    
  getSceneSnapshot(curScene){
    let prepRoom=this.roomSceneList[curScene];
    
    //this.pxlCamera.setTransform( prepRoom.camInitPos, prepRoom.camInitLookAt );
    this.engine.setRenderTarget(prepRoom.warpZoneRenderTarget);
    //this.engine.clear();
    
    prepRoom.prepPortalRender();
    this.engine.render(  prepRoom.scene || prepRoom.scene, this.pxlCamera.camera );
    prepRoom.cleanupPortalRender();
    /*
    if( curScene == this.mainRoom ){
      //this.mapRender();
      
      //this.warpPortalTextures[ curScene ] = this.mapComposer.renderTarget1.texture.clone();
      
    }else{
      //prepRoom.step();
    
      prepRoom.prepPortalRender();
      this.engine.render(  prepRoom.scene, this.pxlCamera.camera );
      prepRoom.cleanupPortalRender();
      
      this.warpPortalTextures[ curScene ] = this.scene.renderTarget.clone();
    
      prepRoom.warpPortalTexture=this.warpPortalTextures[ curScene ];
      //prepRoom.setPortalTexture( prepRoom.warpPortalTexture );
      //prepRoom.setPortalTexture( this.warpPortalTextures[ this.mainRoom ] );
      prepRoom.setPortalTexture( this.cloud3dTexture );//  this.warpPortalTextures[ this.mainRoom ] );
      this.setPortalTexture( this.warpPortalTextures[ curScene ], curScene );
    }*/
    
    this.engine.setRenderTarget(null);
  
  }

  mapRender(anim=true){
    if(this.pxlTimer.active){
        this.step();
    }
    
    if( this.pxlTimer.curMS > this.nextRenderMS || anim==false ){
      this.prevRenderMS = this.nextRenderMS;
      this.nextRenderMS = this.pxlTimer.curMS + this.renderInterval;

      // Render appropriate room
      this.stepShaderValues();
      this.stepAnimatedObjects();
      
      let curRoom=this.roomSceneList[this.currentRoom];
      if(curRoom && curRoom.booted){
        curRoom.step();
        
        curRoom.camera.layers.disable( this.renderLayerEnum.SKY );
        this.engine.setRenderTarget(curRoom.scene.renderTarget);
        this.engine.clear();
        this.engine.render( curRoom.scene, curRoom.camera);
        this.engine.setRenderTarget(null);
        curRoom.camera.layers.enable( this.renderLayerEnum.SKY );
        
        if( false && this.pxlQuality.settings.fog>0 ){
          this.pxlCamera.camera.layers.disable( 1 );
          
          curRoom.scene.overrideMaterial=this.mapWorldPosMaterial;
          this.engine.setRenderTarget(this.scene.renderWorldPos);
          this.engine.clear();
          this.engine.render( curRoom.scene, this.pxlCamera.camera);
          curRoom.scene.overrideMaterial=null;
        
          this.pxlCamera.camera.layers.enable( 1 );
          this.engine.setRenderTarget(null);
        }
        
        if( this.mapComposerGlow && ( this.pxlQuality.settings.bloom || this.pxlQuality.settings.fog ) ){ //  || this.pxlQuality.settings.motion ){ 
            this.mapComposerGlow.render();
        }
        
        this.mapRenderBlurStack( curRoom, curRoom.camera, curRoom.scene, this.scene.renderGlowTarget)
        
        this.roomComposer.render();
        //this.engine.render( this.roomSceneList[this.currentRoom].scene, this.pxlCamera.camera);
      }
      
      if( this.pxlUser.iZoom ){
          this.delayComposer.render();
      }
    }
        
    if(this.pxlTimer.active && anim){
      requestAnimationFrame( ()=>{ this.mapRender(); });
    }
  }
  
  mapRenderBlurStack( curRoom, camera, scene, target ){
    
        if(this.blurComposer){
          if(curRoom.geoList["GlowPass"]){
            curRoom.geoList["GlowPass"].forEach((g)=>{
              if( g.userData.hasOwnProperty('GlowPerc') ){
                let multVal = g.userData['GlowPerc']
                if( g.material.hasOwnProperty('uniforms') && g.material.uniforms.mult ){
                  g.material.uniforms.mult.value = multVal;
                }
              }
            });
            
            if( curRoom.geoList.hasOwnProperty('GlowPassMask') ){
              curRoom.geoList['GlowPassMask'].forEach( (m)=>{
                if( m.material.uniforms && m.material.uniforms.cdMult ){
                  m.material.uniforms.cdMult.value = 0;
                }
              });
            }
          }
          
          //this.pxlEnv.renderLayerEnum SCENE PARTICLES GLOW
          camera.layers.disable( this.renderLayerEnum.SCENE );
          camera.layers.disable( this.renderLayerEnum.PARTICLES );
          camera.layers.disable( this.renderLayerEnum.SKY );
          
          this.engine.setRenderTarget(target);
          let bgCd=0x000000;
          let curgb = scene.background.clone()
          scene.background.set( bgCd );
          this.engine.setClearColor(bgCd, 0);
          //this.engine.clear();
          this.engine.render( scene, camera);
          //this.scene.overrideMaterial=null;
          scene.background.r=curgb.r;
          scene.background.g=curgb.g;
          scene.background.b=curgb.b;
          
          camera.layers.enable( this.renderLayerEnum.SCENE );
          camera.layers.enable( this.renderLayerEnum.PARTICLES );
          camera.layers.enable( this.renderLayerEnum.SKY );
          this.engine.setRenderTarget(null);
          
          if(curRoom.geoList["GlowPass"]){
            curRoom.geoList["GlowPass"].forEach((g)=>{
              if( g.userData.hasOwnProperty('GlowPerc') ){
                if( g.material.hasOwnProperty('uniforms') && g.material.uniforms.mult ){
                  g.material.uniforms.mult.value = 1;
                }
              }
            });
            if( curRoom.geoList.hasOwnProperty('GlowPassMask') ){
              curRoom.geoList['GlowPassMask'].forEach( (m)=>{
                if( m.material.uniforms && m.material.uniforms.cdMult ){
                  m.material.uniforms.cdMult.value = 1;
                }
              });
            }
          }
          
          this.blurComposer.render();
          this.roomBloomPass.enabled = false;
        }
  }
  
  
}
