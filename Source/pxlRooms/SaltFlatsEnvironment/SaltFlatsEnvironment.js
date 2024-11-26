// WIP -- STAND IN FILE
//   IT WILL ERROR IF YOU LOAD THIS ENVIRONMENT


import * as THREE from "../../js/libs/three/three.module.js";
import { ShaderPass } from '../../js/libs/three/postprocessing/ShaderPass.js';
import { campfireLogVert, campfireLogFrag,
         envGroundVert, envGroundFrag } from "./Shaders.js";
import RoomEnvironment from "../../js/pxlNav/RoomClass.js";

import { BillowSmoke, EmberWisps, FloatingDust } from '../../js/pxlNav/effects/particles.js';

export class SaltFlatsEnvironment extends RoomEnvironment{
  constructor( roomName='SaltFlatsEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlAnim, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    
    this.assetPath=assetPath+"Assets/";
    
    this.sceneFile = this.assetPath+"SaltFlatsEnvironment.fbx";
    this.animInitCycle = "Walk";

    // Animation Source & Clips are managed under the hood,
    //   So you only need to set your rig, animations, and connections in one room.
    // Current issue, re-imports will re-read the file from disk/url,
    //   But wont overwrite the data if it exists from a prior Room's load.
    this.animSource = {
      "RabbitDruidA" : {
        "rig" : this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Walk" : this.assetPath+"RabbitDruidA/RabbitDruidA_Walk.fbx"
        },
        "stateConnections"  : {
          // Non existing states will be ignored and loop'ed, ie "Walk"
          //"Sit_Idle" : ["Sit_Idle", "Sit_Stoke", ...]
          "Walk" : ["Walk"]
        }
      }
    };

    this.animMixer = null;
    
    this.envObjName="EnvGround_geo";
    this.textureList={};
    this.particleList={};
    
    
    this.pxlCamFOV=(pxlDevice.mobile?80:70);
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = 5;
    this.pxlCamFarClipping = 10000;

    // this.fogColor=new THREE.Color(.3,.3,.3);
    this.fogColor=new THREE.Color(.01,.02,.05);
    this.fogExp=.0007;
    this.fog=new THREE.FogExp2( this.fogColor, this.fogExp);
    
    this.perspectiveInstances = 160;
  }
  init(){
    super.init();
  }

  start(){
    if( this.booted ){
      this.resetCamera();
    }
    let animKey = "RabbitDruidA";
    if( this.pxlAnim && this.pxlAnim.hasClip( animKey, this.animInitCycle ) ){
      this.pxlAnim.playClip( animKey, this.animInitCycle );
    }
    console.log("starting - "+this.roomName);
  }

  // Per-Frame Render updates
  step(){
    super.step();
    
    // When the Druid Rabbit finishes loading, we'll step the animation here
    //   Cycle changes occur here as well.
    if(this.animMixer){
      this.pxlAnim.step( "RabbitDruidA" );
    }

  }
  
  // -- -- --
  
  
  fbxPostLoad(){
    super.fbxPostLoad();
    
    
    // Floating debris in the air

    let systemName = "floatingDust";
    this.particleList[systemName] = new FloatingDust( this, systemName );
    let atlasPath = this.assetPath+"sprite_dustFloaters.png"

    this.particleList[systemName].setAtlasPath( atlasPath );
    this.particleList[systemName].build( 1000, 5 );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    // Lets load in our rabbit bugger

    // I'm including `Walk` at the moment until creating the pxlAnimation class
    //   to maintain shared characters and animation across rooms


    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    // TODO : This needs to not be needed --
    //this.setUserHeight( this.camInitPos.y );
    
    this.booted=true;
    
        
  }


// -- -- -- -- -- -- -- -- -- -- -- -- -- //

// Runs after Rabbit Druid's FBX files have been loaded
  animPostLoad( animKey ){
    if( this.pxlAnim.hasClip( animKey, this.animInitCycle ) ){
      let animMixer = this.pxlAnim.getMixer( animKey );
      this.animMixer = animMixer;
      
      this.pxlAnim.playClip( animKey, this.animInitCycle );
    }else{
      this.animInitCycle = fallback;
      this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");
    }
/*
    if( this.geoList["Scripted"].hasOwnProperty( "Offset_loc" ) ){
      let offset = this.geoList["Scripted"]["Offset_loc"];
      this.camera.position.set( offset.x, offset.y, offset.z );
    }*/

    let curMesh = this.pxlAnim.getMesh( animKey );
    if(curMesh){
      let curMtl = curMesh.material;
    }

  }
  

// -- -- -- -- -- -- -- -- -- -- -- -- -- //
  

// Build Scene and Assets
  build(){

    let curCharacter = "RabbitDruidA";
    let animFbxLoader = this.pxlFile.loadAnimFBX( this, curCharacter, this.animSource[curCharacter]['rig'], this.animSource[curCharacter]['anim'], this.animSource[curCharacter]['stateConnections']);

    /*
    let envGroundUniforms = THREE.UniformsUtils.merge(
        [THREE.UniformsLib['lights'],
        {
          'noiseTexture' : { type:'t', value: this.cloud3dTexture },
          'baseCd' : { type:'f', value: .1 },
          'fogColor' : { type: "c", value: this.scene.fog.color },
        }
        ]
    )
    let mat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag() );
    */
    //mat.side=THREE.FrontSide;
    //mat.lights= true;
        
    //this.textureList[ "EnvironmentGround_geo" ]=mat;
    

    //
    // -- -- -- 
        
    return this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
    
}