
import {
  Vector2,
  Vector3,
  Color,
  Group,
  Object3D,
  AmbientLight,
  FogExp2,
  RepeatWrapping,
  UniformsUtils,
  UniformsLib,
  FrontSide
} from "../../libs/three/three.module.min.js";
/*ShaderMaterial*/

import { voidBaseVert, voidBaseFrag } from "./Shaders.js";
import { RoomEnvironment, pxlShaders, pxlEffects } from "../../pxlNav.esm.js";

const pxlPrincipledVert = pxlShaders.objects.pxlPrincipledVert;
const pxlPrincipledFrag = pxlShaders.objects.pxlPrincipledFrag;
const FloatingDust = pxlEffects.pxlParticles.FloatingDust;

export class VoidEnvironment extends RoomEnvironment{
  constructor( roomName='VoidEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlAnim, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    
		this.assetPath=assetPath+"Assets/";
		this.assetPath="./js/pxlRooms/VoidEnvironment/Assets/";
    
    this.sceneFile = this.assetPath+"VoidEnvironment.fbx";
    //this.sceneFile = this.assetPath+"ForceField.fbx";
		
		// Environment Shader 
		this.spiralizerUniforms={};
		this.materialList={};
    
		// Room warp data
		this.camInitPos=null;
		this.camInitLookAt=null;
		this.camThumbPos=new Vector3(0,0,-30);
		this.camThumbLookAt=new Vector3(0,35,-1000);
		this.cameraBooted=false;
		this.cameraPrevPos=new Vector3(0,0,0);
		this.cameraAimTarget=new Object3D(0,0,0);
    this.camHoldWarpPos=true;
		
    this.pxlCamFOV=(pxlDevice.mobile?80:60);
		this.pxlCamZoom=1;
		this.pxlCamAspect=1;
    this.pxlCamNearClipping = 5;
    this.pxlCamFarClipping = 10000;

    // this.fogColor=new Color(.3,.3,.3);
    this.fogColor=new Color(.005,.01,.025);
    this.fogExp=.0007;
    this.fog=new FogExp2( this.fogColor, this.fogExp);
        
		this.userAvatarGroup=new Group();
		this.packedTextureMaterial=null;
		this.coreTextureMaterial=null;
		this.projectedMaterial=null;
		this.voidMaterial=null;
		this.holoMaterial=null;
		this.aspectRatio=null;
		this.flag=null;
		this.initPos = [];
		this.finalPos = [];
		this.midPos = new Vector3(0,30,-50);

		this.perspectiveInstances = 160;
		
		this.startTime=0;
		this.runTime=new Vector2(0, 0);
		this.msRunner=msRunner;
		this.camera=camera;
		this.autoCamPaths={};
		this.scene=scene;
		this.lightList={}
		this.geoList={}
		this.glassGroup=null;
		this.glassList=[]

		this.voidBaseUniforms={};
		this.portalList={};
		this.hoverableExists=false;
		this.hoverableList=[];
    this.hoverableObj=null;
		this.clickableExists=false;
		this.clickableList=[];
    this.clickableObj=null;
    
    
		this.collidersExist=false;
		this.colliderActive=false;
		this.colliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
		this.antiColliderActive=false;
		this.antiColliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
		this.antiColliderTopActive=false;
		this.antiColliderTopList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
		
		this.roomWarp=[];
		this.warpPortalTexture=null;
		this.warpZoneRenderTarget=null;
        
    this.worldPosMaterial=null;
		this.worldPosRenderTarget=null;
		this.spiralizerPass=null;
		
    this.bloomPreState=false;
        
		this.cloud3dTexture=null;
		this.smoothNoiseTexture=null;
        
    //%=
    this.currentShader=null;
    //%
	}
	init(){
        this.scene.fog=this.fog;
        this.scene.background = this.fogColor ;//pxlEnv.fogColor;
        this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture;
        
    }
// Per-Frame Render updates
	step(){
		this.runTime.x=this.msRunner.x;
	}
	
	
	
    
    buildDust(){
      let vertexCount = 1200; // Point Count
      let pScale = 11;  // Point Base Scale

      let systemName = "floatingDust";
      let dustSystem = new FloatingDust( this, systemName, 200 );

      // Use a texture from the internal pxlNav asset folder
      dustSystem.useInternalAsset( "sprite_dustAtlas.png" );
      
      // Generate geometry and load texture resources
      dustSystem.build( vertexCount, pScale );

      this.particleList[systemName] = dustSystem;
    }
    
    
	fbxPostLoad(){
        //this.buildSnow();
        this.buildDust();
        
        var ambientLight = new AmbientLight( 0xf0f0f0 ); // soft white light
        this.scene.add( ambientLight );
        
        // Since the lights don't exist prior to loading the FBX,  the uniforms must be set here
        this.voidBaseUniforms['light0Cd'].value = this.geoList['lights'][0].color.clone().multiplyScalar( this.geoList['lights'][0].intensity );
        this.voidBaseUniforms['light0Rot'].value = new Vector3(0,0,1).applyQuaternion( this.geoList['lights'][0].quaternion );
        this.voidBaseUniforms['light1Cd'].value = this.geoList['lights'][1].color.clone().multiplyScalar( this.geoList['lights'][1].intensity );
        this.voidBaseUniforms['light1Rot'].value = new Vector3(0,0,1).applyQuaternion( this.geoList['lights'][1].quaternion );
        
        this.materialList[ "VoidBase" ].uniforms=this.voidBaseUniforms;
        this.geoList['VoidBase'].material.needsUpdate=true;


        this.setUserHeight( 15 );
        //this.pxlAutoCam.toggleAutoCam( );
        this.booted=true;
    }
	
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
	
// Build Scene and Assets

	build(){
    
        this.voidBaseUniforms = {
          'baseCd' : { type:'f', value: .1 },
          'snowNormal' : {type:"t",value: null },
          'light0Cd' : { type: "c", value: new Vector3(1,1,1) },
          'light0Rot' : { type: "c", value: new Vector3(1,1,1) },
          'light1Cd' : { type: "c", value: new Vector3(1,1,1) },
          'light1Rot' : { type: "c", value: new Vector3(1,1,1) },
          'fogColor' : { type: "c", value: this.scene.fog.color }
        };
            
        this.voidBaseUniforms['snowNormal'].value = this.pxlUtils.loadTexture( this.assetPath+"snowNormalMap.jpg" );
        //'snowNormal' : {type:"t",value: this.pxlUtils.loadTexture( this.assetPath+"snowNormalWorldMap.jpg" ) },
        let mat=this.pxlFile.pxlShaderBuilder( this.voidBaseUniforms, voidBaseVert(), voidBaseFrag() );
        mat.side=FrontSide;
            
        this.materialList[ "VoidBase" ]=mat;
        
        let voidFbxLoader = this.pxlFile.loadRoomFBX( this );
	}
}