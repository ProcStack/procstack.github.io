// WIP -- STAND IN FILE
//   IT WILL ERROR IF YOU LOAD THIS ENVIRONMENT


import * as THREE from "../../js/libs/three/three.module.js";
import { rabbitDruidVert, rabbitDruidFrag,
         envGroundVert, envGroundFrag,
         salioaPlantVert, salioaPlantFrag
 } from "./Shaders.js";
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
    this.animRigName = "RabbitDruidASalt";
    this.animSource = {
      "RabbitDruidASalt" : {
        "rig" : this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Walk" : this.assetPath+"RabbitDruidA/RabbidDruidA_anim_walk.fbx"
        },
        "stateConnections"  : {
          // Non existing states will be ignored and loop'ed, ie "Walk"
          //"Sit_Idle" : ["Sit_Idle", "Sit_Stoke", ...]
          "Walk" : ["Walk"]
        }
      }
    };

    this.animMixer = null;
    
    this.envObjName="TerraceBasin_geo";
    this.textureList={};
    this.particleList={};
    
    
    this.pxlCamFOV=(pxlDevice.mobile?80:40);
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = 1;
    this.pxlCamFarClipping = 10000;

    // this.fogColor=new THREE.Color(.3,.3,.3);
    this.fogColor=new THREE.Color(.31,.42,.55);
    this.fogExp=.0007;
    this.fog=new THREE.FogExp2( this.fogColor, this.fogExp);
    
    this.perspectiveInstances = 160;

    this.eyeBlinkInf = new THREE.Vector2(0,0);
    this.eyeBlinkMinMaxDelay = [1.0,7.0];
    this.eyeBlinkMinMaxRate = [ .06, 0.1 ];
    this.eyeBlinkNext = 0;
    this.eyeBlinkAnim = 0;
    this.eyeBlinkRate = 0;
  }
  init(){
    super.init();
  }

  start(){
    if( this.booted ){
      this.resetCamera();
    }
    let animKey = this.animRigName;
    if( this.geoList.hasOwnProperty( animKey ) && this.geoList["Scripted"].hasOwnProperty( "Offset_loc" )  ){
      let locObj = this.geoList["Scripted"]["Offset_loc"];
      let parentObj = this.geoList[ animKey ];
      
      let locPos = locObj.position.clone();
      let locRot = locObj.rotation.clone();
      let locScale = locObj.scale.clone();

      parentObj.position.set( locPos.x, locPos.y, locPos.z );
      parentObj.rotation.set( locRot.x, locRot.y, locRot.z );
      parentObj.scale.set( locScale.x, locScale.y, locScale.z );
    }
    
    if( this.pxlAnim && this.pxlAnim.hasClip( animKey, this.animInitCycle ) ){
      this.pxlAnim.playClip( animKey, this.animInitCycle );
    }
    
    if( this.geoList["Scripted"].hasOwnProperty("pokinStick_geo") ){
      this.geoList["Scripted"]["pokinStick_geo"].visible = false;
    }
    //this.pxlEnv.pxlCamera.setStats( this.pxlCamFOV, this.pxlCamZoom, this.pxlCamAspect, this.pxlCamNearClipping );
  }

  // Per-Frame Render updates
  step(){
    super.step();

    // When the Druid Rabbit finishes loading, we'll step the animation here
    //   Cycle changes occur here as well.
    if(this.animMixer){
      this.pxlAnim.step( this.animRigName );
      this.checkEyeBlink();
    }

    let scrollGrp = this.geoList["Scripted"]["MovingEng_grp"];
    if( scrollGrp ){
      scrollGrp.position.z = (3.6 * this.msRunner.x) % 150.0;
      let shift = 0;
      let scrollThreshold = 150.0;
      let scrollLimit = scrollThreshold - shift;
      if( scrollGrp.position.z > scrollLimit ){
        scrollGrp.position.z -= scrollLimit;
      }
    }

  }
  
  // -- -- --

  checkEyeBlink(){
    if( this.eyeBlinkAnim > 0 ){
      // Decrease the eye blink animation 1 to 0
      this.eyeBlinkAnim -= this.eyeBlinkRate;
      // Map 0-1 to 0-1-0
      let sawAnim = (Math.min(.5,this.eyeBlinkAnim) - Math.max(0,this.eyeBlinkAnim-.5)) * 2;
      this.eyeBlinkInf.x = sawAnim;
      if( this.eyeBlinkAnim <= 0 ){
        // Add a random time until the next eye blink
        this.eyeBlinkNext = this.msRunner.x + this.pxlUtils.randomFloat( this.eyeBlinkMinMaxDelay[0], this.eyeBlinkMinMaxDelay[1] );
      }
    }else{
      this.eyeBlinkInf.x = 0;
      if(this.msRunner.x > this.eyeBlinkNext ){
        // Set the next blink rate, how quickly the animation goes from 1 to 0
        this.eyeBlinkRate = this.pxlUtils.randomFloat( this.eyeBlinkMinMaxRate[0], this.eyeBlinkMinMaxRate[1] );
        this.eyeBlinkAnim = 1;
      }
    }
    this.textureList[ "RabbitDruidA" ].uniforms.eyeBlink.value = this.eyeBlinkInf;
  }

  // -- -- --
  
  
  fbxPostLoad(){
    super.fbxPostLoad();
    
    if( this.geoList.hasOwnProperty('lights') ){
      this.geoList['lights'].forEach( (light) => {
        if( light.name == "dirLight_key_lit" ){
          light.castShadow = true;
        }else{
          light.castShadow = false;
        }
      });
    } 



    // Floating debris in the air

    let systemName = "floatingDust";
    this.particleList[systemName] = new FloatingDust( this, systemName );
    let atlasPath = this.assetPath+"sprite_dustLiquid.png"

    this.particleList[systemName].setAtlasPath( atlasPath );
    this.particleList[systemName].build( 1000, 10, 120, [-40,-10,0], [0.0, 5.0], [[.25,0],[.25,.25]], false );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    let terraceObjMtl = this.textureList[ "TerraceBasin_geo" ];
    if( terraceObjMtl ){
      if( terraceObjMtl.uniforms.map ){
        terraceObjMtl.uniforms.map.minFilter = THREE.LinearFilter;
        terraceObjMtl.uniforms.map.magFilter = THREE.LinearFilter;
        terraceObjMtl.uniforms.map.value.encoding = THREE.sRGBEncoding;
        terraceObjMtl.uniforms.map.value.encoding = THREE.LinearEncoding;

      }
    }


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
      curMtl.side = THREE.DoubleSide;
      let newSkinnedMtl = this.setSkinnedMaterial( curMesh, rabbitDruidVert(), rabbitDruidFrag() );
      this.textureList[ "RabbitDruidA" ] = newSkinnedMtl;
    }
  }
  

// -- -- -- -- -- -- -- -- -- -- -- -- -- //
  
    setSkinnedMaterial( bindObj, vertShader=null, fragShader=null ){
  
      let skinnedMtlUniforms = THREE.UniformsUtils.merge(
        [
            THREE.UniformsLib['common'],
            THREE.UniformsLib['lights'],
          {
            'diffuseTexture' : { type:'t', value: null },
            'areTexture' : { type:'t', value: null },
            'noiseTexture' : { type:'t', value: null },
            'eyeBlink' : { type:'v2', value: this.eyeBlinkInf },
            'mult': { type:'f', value:1 },
          }
        ]
      );
  
      skinnedMtlUniforms.diffuseTexture.value = bindObj.material.map;
      skinnedMtlUniforms.areTexture.value = this.pxlUtils.loadTexture( this.assetPath+"RabbitDruidA/RabbitDruidA_lowRes_ARE.jpg" );
      skinnedMtlUniforms.noiseTexture.value = this.cloud3dTexture;
      skinnedMtlUniforms.noiseTexture.value = this.cloud3dTexture;
  
      let skinnedMaterial = this.pxlFile.pxlShaderBuilder( skinnedMtlUniforms, vertShader, fragShader );
      skinnedMaterial.skinning = true;
      skinnedMaterial.side = THREE.DoubleSide;
      skinnedMaterial.lights = true;
  
      bindObj.material = skinnedMaterial;
      return skinnedMaterial;
    }


// Build Scene and Assets
  build(){

    let curCharacter = this.animRigName;
    let animFbxLoader = this.pxlFile.loadAnimFBX( this, curCharacter, this.animSource[curCharacter]['rig'], this.animSource[curCharacter]['anim'], this.animSource[curCharacter]['stateConnections']);

    
    let envGroundUniforms = THREE.UniformsUtils.merge(
        [
        THREE.UniformsLib[ "lights" ],
        {
          'noiseTexture' : { type:'t', value: null },
          'fogColor' : { type: "c", value: this.fogColor },
        }]
    )
    envGroundUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );

    let mat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag() );
    mat.side=THREE.FrontSide;
    mat.lights= true;
    
        
    this.textureList[ "TerraceBasin_geo" ]=mat;
    

    // -- -- -- 

    let salioaPlanUniforms = THREE.UniformsUtils.merge(
        [
        THREE.UniformsLib[ "lights" ],
        {
          'noiseTexture' : { type:'t', value: null }
        }]
    )
    salioaPlanUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );

    let salioaMtl=this.pxlFile.pxlShaderBuilder( salioaPlanUniforms, salioaPlantVert(), salioaPlantFrag() );
    salioaMtl.side=THREE.DoubleSide;
    salioaMtl.lights= true;
    
        
    this.textureList[ "SalioaPlant_geo" ]=salioaMtl;


    // -- -- -- 
        
    return this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
    
}