// pxlNav Example :: `Campfire` Environment
//   Created by Kevin Edzenga; 2024,2025
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
// This room is a more complex example of a pxlNav room.
//   It uses many custom shaders, particle systems, and animations.
//
// If you are looking for a simple example to look at first,
//   See the `Void Environment` in the `pxlRooms` folder.
//     It has a single custom shader, a simple pxlNav particle system, and no animations.
//
// What's in this room?
//  - Per-frame updates in `step()`
//      Looping the background movement
//      Run the Rabbit Druid's animation
//  - A custom shader for the Rabbit Druid character
//      Mostly for fog, and eye blinking animation
//  - A custom shader for the environment ground
//  - Some instanced crystals and the ground itself


import {
  Vector2,
  Vector3,
  Color,
  FogExp2,
  UniformsUtils,
  UniformsLib,
  LinearFilter,
  SRGBColorSpace,
  LinearSRGBColorSpace,
  FrontSide,
  DoubleSide
} from "three";

import { RoomEnvironment, pxlEffects } from "pxlNav";

import { rabbitDruidVert, rabbitDruidFrag,
         envGroundVert, envGroundFrag,
         salioaPlantVert, salioaPlantFrag
 } from "./Shaders.js";

const FloatingDust = pxlEffects.pxlParticles.FloatingDust;

export class SaltFlatsEnvironment extends RoomEnvironment{
  constructor( roomName='SaltFlatsEnvironment', assetPath=null ){
    super( roomName, assetPath );
    
    this.assetPath=assetPath+"Assets/";
    
    this.sceneFile = this.assetPath+"SaltFlatsEnvironment.fbx";
    this.animInitCycle = "Walk";

    // Animation Source & Clips are managed under the hood,
    //   So you only need to set your rig, animations, and connections in one room.
    // Current issue, re-imports will re-read the file from disk/url,
    //   But wont overwrite the data if it exists from a prior Room's load.
    this.animRigName = "RabbitDruidASalt";
    this.animSource = {};

    this.animMixer = null;
    
    this.materialList={};
    this.particleList={};
    
    
    this.pxlCamFOV={ 'PC':40, 'MOBILE':80 };
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = 1;
    this.pxlCamFarClipping = 10000;

    this.fogColor=new Color(.45,.65,.72);
    this.fogExp=.0007;
    this.fog=new FogExp2( this.fogColor, this.fogExp);
    
    this.perspectiveInstances = 160;

    this.eyeBlinkInf = new Vector2(0,0);
    this.eyeBlinkMinMaxDelay = [1.0,7.0];
    this.eyeBlinkMinMaxRate = [ .06, 0.1 ];
    this.eyeBlinkNext = 0;
    this.eyeBlinkAnim = 0;
    this.eyeBlinkRate = 0;
  }
  init(){
    super.init();

    this.animSource = {
      "RabbitDruidASalt" : {
        "rig" : this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Walk" : this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbidDruidA_anim_walk.fbx"
        },
        "stateConnections"  : {
          // Non existing states will be ignored and loop'ed, ie "Walk"
          //"Sit_Idle" : ["Sit_Idle", "Sit_Stoke", ...]
          "Walk" : ["Walk"]
        }
      }
    };
  }

  start(){
    let animKey = this.animRigName;
    let hasScripted = this.geoList.hasOwnProperty( 'Scripted' );
    if( this.geoList.hasOwnProperty( animKey ) && hasScripted && this.geoList["Scripted"].hasOwnProperty( "Offset_loc" )  ){
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
    
    if( hasScripted && this.geoList["Scripted"].hasOwnProperty("pokinStick_geo") ){
      this.geoList["Scripted"]["pokinStick_geo"].visible = false;
    }
  }

  // Per-Frame Render updates
  step(){
    //super.step();

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
    let curMesh = this.pxlAnim.getMesh( this.animRigName );
    if( !curMesh || !curMesh.hasOwnProperty("morphTargetInfluences") || curMesh.morphTargetInfluences.length == 0 ){
      return;
    }

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
    
    curMesh.morphTargetInfluences[0] = this.eyeBlinkInf.x;
  }

  // -- -- --
    

  buildDust(){
    if( this.mobile ) return;
  
    // -- -- --
  
    let systemName = "floatingDust";
    let dustSystem = new FloatingDust( this, systemName );
  
    let dustSystemSettings = dustSystem.getSettings();
    dustSystemSettings["vertCount"] = 800; // Point Count
    dustSystemSettings["pScale"] = 5.5;  // Point Base Scale
    dustSystemSettings["pOpacity"] = .85;  // Overall Opacity
    dustSystemSettings["proxDist"] = 300;  // Proximity Distance from Camera
    dustSystemSettings["fadeOutScalar"] = 3.0;  // Distance-opacity falloff multiplier
    dustSystemSettings["additiveBlend"] = true;
  
    dustSystemSettings["offsetPos"] = new Vector3( -200.0, 15.0, 0.0 ); // Offset center of the system
    dustSystemSettings["windDir"] = new Vector3( -0.0, 0.25, 10.0 ); // Constant direction flow
    dustSystemSettings["wanderInf"] = 0.5; // How much the particle sways
    dustSystemSettings["wanderRate"] = 1.85; // Wander noise rate
    dustSystemSettings["wanderFrequency"] = 2.80; // How frequent the sway happens
    
  
    dustSystemSettings["atlasPicks"] = [
      ...dustSystem.dupeArray([0.0,0.],4), ...dustSystem.dupeArray([0.25,0.],4),
      ...dustSystem.dupeArray([0.0,0.25],4), ...dustSystem.dupeArray([0.25,0.25],4),
      ...dustSystem.dupeArray([0.0,0.5],2), ...dustSystem.dupeArray([0.25,0.5],2),
      ...dustSystem.dupeArray([0.0,0.75],3), ...dustSystem.dupeArray([0.25,0.75],3)
    ];
  
    // Use a texture from the internal `pxlAsset` folder; ( RGB, Alpha )
    dustSystem.setAtlasPath( "sprite_dustLiquid_rgb.jpg", "sprite_dustLiquid_alpha.jpg" );
  
    // Generate geometry and load texture resources
    dustSystem.build( dustSystemSettings );
  
    this.particleList[systemName] = dustSystem;
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
    this.buildDust();
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    let terraceObjMtl = this.materialList[ "TerraceBasin_geo" ];
    if( terraceObjMtl ){
      if( terraceObjMtl.uniforms.map ){
        terraceObjMtl.uniforms.map.minFilter = LinearFilter;
        terraceObjMtl.uniforms.map.magFilter = LinearFilter;
        //terraceObjMtl.uniforms.map.value.encoding = SRGBColorSpace;
        terraceObjMtl.uniforms.map.value.encoding = LinearSRGBColorSpace;

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
      curMtl.side = DoubleSide;
      let newSkinnedMtl = this.setSkinnedMaterial( curMesh, rabbitDruidVert(), rabbitDruidFrag() );
      this.materialList[ "RabbitDruidA" ] = newSkinnedMtl;
    }
  }
  

// -- -- -- -- -- -- -- -- -- -- -- -- -- //
  
  setSkinnedMaterial( bindObj, vertShader=null, fragShader=null ){

    let skinnedMtlUniforms = UniformsUtils.merge(
      [
          UniformsLib['common'],
          UniformsLib['lights'],
        {
          'diffuseTexture' : { type:'t', value: null },
          'areTexture' : { type:'t', value: null },
          'noiseTexture' : { type:'t', value: null },
          'mult': { type:'f', value:1 },
        }
      ]
    );

    skinnedMtlUniforms.diffuseTexture.value = bindObj.material.map;
    skinnedMtlUniforms.areTexture.value = this.pxlUtils.loadTexture( this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbitDruidA_lowRes_ARE.webp" );
    skinnedMtlUniforms.noiseTexture.value = this.cloud3dTexture;
    skinnedMtlUniforms.noiseTexture.value = this.cloud3dTexture;

    let skinnedMaterial = this.pxlFile.pxlShaderBuilder( skinnedMtlUniforms, vertShader, fragShader );
    skinnedMaterial.skinning = true;
    skinnedMaterial.side = DoubleSide;
    skinnedMaterial.lights = true;

    bindObj.material = skinnedMaterial;
    return skinnedMaterial;
  }


// Build Scene and Assets
  build(){

    let curCharacter = this.animRigName;
    let animFbxLoader = this.pxlFile.loadAnimFBX( this, curCharacter, this.animSource[curCharacter]['rig'], this.animSource[curCharacter]['anim'], this.animSource[curCharacter]['stateConnections']);

    
    let envGroundUniforms = UniformsUtils.merge(
        [
        UniformsLib[ "lights" ],
        {
          'noiseTexture' : { type:'t', value: null },
          'cloudTexture' : { type:'t', value: this.cloud3dTexture },
          'fogColor' : { type: "c", value: this.fogColor },
        }]
    )
    envGroundUniforms.noiseTexture.value = this.pxlUtils.loadTexture( "Noise_UniformWebbing.jpg" );

    let mat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag() );
    mat.side=FrontSide;
    mat.lights= true;
    
        
    this.materialList[ "TerraceBasin_geo" ]=mat;
    

    // -- -- -- 


    let salioaPlanUniforms = UniformsUtils.merge(
        [
        UniformsLib[ "lights" ],
        {
          'noiseTexture' : { type:'t', value: null }
        }]
    )
    salioaPlanUniforms.noiseTexture.value = this.pxlUtils.loadTexture( "Noise_UniformWebbing.jpg" );

    let salioaMtl=this.pxlFile.pxlShaderBuilder( salioaPlanUniforms, salioaPlantVert(), salioaPlantFrag() );
    salioaMtl.side=DoubleSide;
    salioaMtl.lights= true;
    
        
    this.materialList[ "SalioaPlant_geo" ]=salioaMtl;


    // -- -- -- 
        
    return this.pxlFile.loadRoomFBX( this );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
    
}