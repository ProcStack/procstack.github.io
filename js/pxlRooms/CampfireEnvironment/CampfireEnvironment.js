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
//  - A custom shader for the Rabbit Druid character
//      Mostly for simple ORM map & campefire flicker
//  - A custom shader for the Campfire Flame
//      Using vertex-colors to move UVs, and a noise texture to flicker
//  - A custom shader for the Campfire Logs
//      Mixing different emeber glow textures with a noise texture
//  - A custom shader for the ground, grass, shrubs, and plants
//


import {
  Color, FogExp2, Vector2, Vector3,
  RepeatWrapping, ClampToEdgeWrapping,
  NearestFilter, NearestMipmapLinearFilter,
  LinearFilter, AdditiveBlending,
  DoubleSide, FrontSide,
  UniformsUtils, UniformsLib,
  SRGBColorSpace, LinearSRGBColorSpace,
  AmbientLight,
  MeshPhongMaterial
} from "three";

import { RoomEnvironment, pxlEffects } from "pxlNav";

import { rabbitDruidVert, rabbitDruidFrag,
         campfireLogVert, campfireLogFrag,
         campfireVert, campfireFrag,
         instPlantsVert, instPlantsFrag,
         grassClusterVert, grassClusterFrag,
         envGroundVert, envGroundFrag,
         fireflyVert, fireflyFrag } from "./Shaders.js";

const BillowSmoke = pxlEffects.pxlParticles.BillowSmoke;
const EmberWisps = pxlEffects.pxlParticles.EmberWisps;
const FloatingDust = pxlEffects.pxlParticles.FloatingDust;
const ParticleBase = pxlEffects.pxlParticles.ParticleBase;

export class CampfireEnvironment extends RoomEnvironment{
  constructor( roomName='CampfireEnvironment', assetPath=null ){
    super( roomName, assetPath );
    
    this.assetPath=assetPath+"Assets/";
		//this.assetPath="./pxlRooms/CampfireEnvironment/Assets/";
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
    // Animation Source & Clips are managed under the hood,
    //   So you only need to set your rig, animations, and connections in one room.
    // Current issue, re-imports will re-read the file from disk/url,
    //   But wont overwrite the data if it exists from a prior Room's load.
    this.animRigName = "RabbitDruidA";
    this.animSource = {};
    this.animInitCycle = "Sit_Idle";

    this.animMixer = null;

    this.campfireLight = null;
    
    this.pxlCamFOV={ 'PC':60, 'MOBILE':80 };
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = 1;
    this.pxlCamFarClipping = 5000;

    // this.fogColor=new Color(.3,.3,.3);
    this.fogColor=new Color(.008,.020,.04);
    this.fogExp=.0055;
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
    //console.log(this.pxlOptions.pxlAssetRoot);
    
    this.animSource = {
      "RabbitDruidA" : {
        "rig" : this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Sit_Idle" : this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbidDruidA_anim_sit_idle.fbx",
          "Sit_Stoke" : this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbidDruidA_anim_sit_stoke.fbx",
          "Sit_Look" : this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbidDruidA_anim_sit_look.fbx"
        },
        "stateConnections"  : {
          // Non existing states will be ignored and loop'ed, ie "Walk"
          "Sit_Idle" : [ ...Array(6).fill("Sit_Idle"), ...Array(6).fill("Sit_Stoke"), ...Array(5).fill("Sit_Look")],
          "Sit_Stoke" : ["Sit_Idle"],
          "Sit_Look" : ["Sit_Idle"]
        }
      }
    };
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

      //parentObj.position.set( locPos.x, locPos.y, locPos.z );
      //parentObj.rotation.set( locRot.x, locRot.y, locRot.z );
      //parentObj.scale.set( locScale.x, locScale.y, locScale.z );
    }

    if( this.pxlAnim && this.pxlAnim.hasClip( animKey, this.animInitCycle ) ){
      this.pxlAnim.playClip( animKey, this.animInitCycle );
    }

    if( this.geoList.hasOwnProperty("Scripted") && this.geoList["Scripted"].hasOwnProperty("pokinStick_geo") ){
      this.geoList["Scripted"]["pokinStick_geo"].visible = true;
    }

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

    //let curFOV = this.pxlCamFOV[  this.mobile ? 'MOBILE' : 'PC' ];
    //this.pxlEnv.pxlCamera.setStats( curFOV, this.pxlCamZoom, this.pxlCamAspect, this.pxlCamNearClipping );

    if( this.campfireLight ){
      // Flicker the campfire light color and intensity
      let basePos = this.campfireLight.origPos.clone();
      let totalIntensity = this.campfireLight.origIntensity;

      let magnitude = 3.2; // Adjust the flicker magnitude

      let timeOffset = this.msRunner.x * .3; // Adjust the flicker speed

      let flickerNoise =  Math.sin( timeOffset +
         this.campfireLight.position.x * 0.01 +
         this.campfireLight.position.y * 0.01 +
         this.campfireLight.position.z * 0.01 );
      
      this.campfireLight.position.set( 
        basePos.x + Math.sin( timeOffset + flickerNoise ) * magnitude,
        basePos.y + Math.cos( timeOffset + flickerNoise ) * 1.2,
        basePos.z + Math.sin( -timeOffset * 1.5 + flickerNoise * 0.5 ) * magnitude
      );
      this.campfireLight.intensity = totalIntensity * ( 
        Math.sin( timeOffset * 3.5 + flickerNoise*4.0 
          + this.campfireLight.position.x 
          + this.campfireLight.position.y
          + this.campfireLight.position.z
        ) * 0.1 + 1.0 ); // Flicker intensity
    }

  }
  
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


  buildBillowSmoke( particleSourcePos ){
    // build( Obj & Mtl Name, This Object, Sprite Count, Sprite Size )
    let systemName = "billowSmoke";
    let bSmoke = new BillowSmoke( this, systemName );
    //
    bSmoke.setAtlasPath( "sprite_dustLiquid_rgb.jpg", "sprite_dustLiquid_alpha.jpg" );

    let bSmokeSettings = bSmoke.getSettings();
    bSmokeSettings["vertCount"] = 600;
    bSmokeSettings["pScale"] = 56;
    bSmokeSettings["pOpacity"] = .4;
    //bSmokeSettings["fadeOutScalar"] = opacityRolloff;
    bSmokeSettings["additiveBlend"] = false;
    bSmokeSettings["offsetPos"] = particleSourcePos; // Offset center of the system
  
    bSmokeSettings["windDir"].x = -14.6;
    bSmokeSettings["windDir"].z = 13.6;
    //bSmokeSettings["offsetPos"] = particleSourcePos;
    //bSmokeSettings["wanderInf"] = wanderInfluence;
    //bSmokeSettings["wanderFrequency"] = wanderFrequency;
    //
    // Bit arbitrary the numbers I'm picking here.
    //   It's creating a weighted choise of which atlas texture I want to use.
    // If you look at `./CampfireEnvironment/Assets/"sprite_dustLiquid.png` you'll see an 4x4 grid of puff balls.
    //   I'm avoiding the top left corner, and less choices from the bottom right corner.
    //     *Note* : OpenGL texture coordinates (0,0) start at the bottom left corner of the image.
    // Then the 4s, 2s, and 3s are just how many times I want to repeat that specific atlas texture.
    //   The repeating is like asking for more of that specific texture option to be picted more often.
    // ie- bSmoke.dupeArray([0.5,0.25],2) -becomes- [ [0.5,0.25], [0.5,0.25] ]
    let  billowAtlasPicks = [...bSmoke.dupeArray([0.5,0.0],2), ...bSmoke.dupeArray([0.5,0.25],2),
                            ...bSmoke.dupeArray([0.5,0.5],3), ...bSmoke.dupeArray([0.5,0.75],3),
                            ...bSmoke.dupeArray([0.75,0.75],4), ...bSmoke.dupeArray([0.75,0.5],3),
                            ...bSmoke.dupeArray([0.75,0.25],2), ...bSmoke.dupeArray([0.75,0.25],2) ];
    bSmokeSettings["atlasPicks"] = billowAtlasPicks;

    // bSmoke.build( Particle Count (50),  Particle Scale (56),  Atlas Resolution (4, 8, square only[4x4,8x8]), Atlas Picks [ [0-1,0-1],[#,#] ... ] )
    bSmoke.build( bSmokeSettings );

    this.particleList[systemName] = bSmoke;
  }



  buildEmberWisps( particleSourcePos ){
    
    let systemName = "campfireEmberWisps";
    let eWisps = new EmberWisps( this, systemName );
    this.particleList[systemName] = eWisps;
    //
    
    eWisps.setAtlasPath( "sprite_dustLiquid_rgb.jpg", "sprite_dustLiquid_alpha.jpg" );

    particleSourcePos = particleSourcePos.clone();
    particleSourcePos.y += -2.0; // Raise the ember wisps above the campfire
    
    let emberSettings = eWisps.getSettings();
    emberSettings["vertCount"] = 17;
    emberSettings["pScale"] = 10;
    emberSettings["offsetPos"] = particleSourcePos; // Offset center of the system
    //emberSettings["fadeOutScalar"] = opacityRolloff;
    emberSettings["additiveBlend"] = true;

  
    emberSettings["windDir"].x = -0.14;
    emberSettings["windDir"].z = 0.15;
    //emberSettings["offsetPos"] = particleSourcePos;
    //emberSettings["wanderInf"] = wanderInfluence;
    //emberSettings["wanderFrequency"] = wanderFrequency;
    
    emberSettings["EmberSpread"] = 8.0;
    emberSettings["EmberFadeDistance"] = 0.052;
    emberSettings["ShiftFromZero"] = 0.7;
    emberSettings["MultPosXZ"] = 0.650;

    //
    let emberAtlasPicks=eWisps.elementDuplicator([ [0.0,0.75], [0.0,0.5], [0.25,0.75], [0.25,0.5] ],4);
    emberSettings["atlasPicks"] = emberAtlasPicks;

    eWisps.build( emberSettings );

    eWisps.points.renderOrder = 2;
    
  }




  buildDust(){
    if( this.mobile ) return;
  
    // -- -- --
    
    let systemName = "floatingDust";
    let dustSystem = new FloatingDust( this, systemName );
    
    // -- -- --

    // Request the settings object from the particle system
    //   If you log this object, you can see all the settings you can adjust
    // This is optional, as the default settings is created for you
    //   If you don't pass one to the `build()` function
    let dustSystemSettings = dustSystem.getSettings();
    dustSystemSettings["vertCount"] = 450; // Point Count
    dustSystemSettings["pScale"] = 8.5;  // Point Base Scale
    dustSystemSettings["pOpacity"] = 1.35;  // Overall Opacity
    dustSystemSettings["proxDist"] = 260;  // Proximity Distance from Camera
    dustSystemSettings["fadeOutScalar"] = 1.2;  // Distance-opacity falloff multiplier
    dustSystemSettings["additiveBlend"] = false;
  
    dustSystemSettings["offsetPos"] = new Vector3( -10.0, 2.0, 10.0 ); // Offset center of the system
    dustSystemSettings["windDir"] = new Vector3( -4.4, 0.25, 4.8 ); // Constant direction flow
    dustSystemSettings["wanderInf"] = 0.50; // How much the particle sways
    dustSystemSettings["wanderFrequency"] = 2.80; // How frequent the sway happens
    
  
    dustSystemSettings["atlasPicks"] = [
      ...dustSystem.dupeArray([0.5,0.],4), ...dustSystem.dupeArray([0.75,0.],4),
      ...dustSystem.dupeArray([0.5,0.25],4), ...dustSystem.dupeArray([0.75,0.25],4),
      ...dustSystem.dupeArray([0.5,0.5],2), ...dustSystem.dupeArray([0.75,0.5],2),
      ...dustSystem.dupeArray([0.5,0.75],3), ...dustSystem.dupeArray([0.75,0.75],3)
    ];
  
    // -- -- --

    // Texturing the particles -

    // For a RGB + Alpha texture, use the second parameter for the Alpha map -
    //  dustSystem.setAtlasPath( "sprite_dustLiquid_rgb.jpg", "sprite_dustLiquid_alpha.jpg" );
    // For a RGBA texture, leave the second parameter empty -
    //  dustSystem.setAtlasPath( "sprite_dustLiquid.png" );

    // When no pathing, just a name, is passed to `setAtlasPath()`
    //   It will read the texture from the internal `./pxlAsset` folder
    //     Set on your `pxlOptions` object when building `new pxlNav( pxlOptions, ... )`
    // If you pass a path, it will look in the path you provide, like the room's asset folder -
    //  dustSystem.setAtlasPath( this.assetPath + "/customSpriteAtlas.png" );

    // -- -- --
  
    // Generate geometry and load texture resources
    dustSystem.build( dustSystemSettings );
  
    this.particleList[systemName] = dustSystem;
  }



  // Build a mesh-to-particle system for the fireflies
  //   Using the `fireflies_vfx` geometry from the CampfireEnvironment.fbx
  //     Marked with the custom property `pSystem = true`
  buildFireflies(){
    //if( this.mobile ) return;

    let nameOfSystem = "fireflies_vfx";
    if( this.particleList?.hasOwnProperty( nameOfSystem ) && this.particleList[nameOfSystem].type == "BufferGeometry" ){
      let fireflyUniforms = {
          'atlasTexture' : { type:'t', value: null },
          'atlasAlphaTexture' : { type:'t', value: null },
          'noiseTexture' : { type:"t", value: null },
          'pointScale' : { type: "v", value: new Vector2( 5.0, 0.0 ) },
          'tint' : { type: "c", value: new Color( 1.5, 1.4, 0.6 ) },
          'fogColor' : { type: "c", value: this.fogColor },
          'rate' : { type:"f", value:.035 }
        };
      fireflyUniforms.atlasTexture.value = this.pxlUtils.loadTexture( "sprite_dustAtlas_rgb.jpg", null, {'encoding':SRGBColorSpace} );
      fireflyUniforms.atlasAlphaTexture.value = this.pxlUtils.loadTexture( "sprite_dustAtlas_alpha.jpg" );

      // -- -- --
  
      // Make the firefly system itself
      let fireflySystem = new ParticleBase( this, "fireflySystem" );

      // Build settings using the ParticleBase class's `getSettings()` method
      let fireflySettings = fireflySystem.getSettings();
      fireflySettings["atlasPicks"] = [
        ...fireflySystem.dupeArray([0.0,0.50],4), ...fireflySystem.dupeArray([0.25,0.50],4),
        ...fireflySystem.dupeArray([0.0,0.75],4), ...fireflySystem.dupeArray([0.25,0.75],4)
      ];
      fireflySettings["additiveBlend"] = true;

      // Assign your `userData.pSystem = true` geometry to the particle system to use
      fireflySystem.setGeometry( this.particleList[ nameOfSystem ] );

      // Build + Add the particle system to the scene using `ParticleBase.build( settings, uniforms, vertex shader, fragment shader )`
      fireflySystem.build( fireflySettings, fireflyUniforms, fireflyVert(), fireflyFrag()  );

      // Optional, overwrite the `pSystem` geometry with the built particle system
      this.particleList[ nameOfSystem ] = fireflySystem;
    }
  }



  // -- -- --

  
  
  fbxPostLoad(){
    super.fbxPostLoad();
    
    let particleSource = this.geoList['Scripted']['ParticleSource_loc'];
    let particleSourcePos = particleSource.position;

    var ambientLight = new AmbientLight( 0x505050 ); // soft white light
    this.scene.add( ambientLight );

    let campefireOrder = 0;

    if( this.geoList.hasOwnProperty("InstanceObjects") ){
      let instanceKeys = Object.keys( this.geoList['InstanceObjects'] ); 
      campefireOrder = instanceKeys.length;
      instanceKeys = instanceKeys.filter( x => x.includes("campfireLog") );
      if( instanceKeys.length > 0 ){
        for( let x=0; x<instanceKeys.length; ++x ){
          let logObj = this.geoList['InstanceObjects'][ instanceKeys[x] ];
          if( logObj ){
            //logObj.material.depthTest=false;
            //logObj.material.depthWrite=false;
            logObj.renderOrder = x+1;
          }
        }
      }
    }

    let campfireObj = this.geoList['Scripted']['CampfireFlame_geo'];
    if( campfireObj ){
      campfireObj.renderOrder = campefireOrder;
    }


    // Set moon plane texture settings
    //   Removed from the FBX for now, but leaving in the texture check
    //     I'm sure I'll be confuzed why the same texture issues exist,
    //       Then add this back in to fix it.
    let moonObj = this.geoList['Scripted']['Moon_geo'];
    if( moonObj ){
      moonObj.material.map.wrapS = ClampToEdgeWrapping;
      moonObj.material.map.wrapT = ClampToEdgeWrapping;
      moonObj.material.map.minFilter = NearestFilter;
      moonObj.material.map.magFilter = NearestFilter;
      moonObj.material.emissiveIntensity = 2.5;
      moonObj.material.alphaMap = this.pxlUtils.loadTexture( this.assetPath+"moonTexture_alpha.jpg", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
      moonObj.material.transparent = true;
    }

    // Add Billowing Smoke
    this.buildBillowSmoke( particleSourcePos );

    // Quick buggers zippin out of the flame-ola
    this.buildEmberWisps( particleSourcePos );
    
    // Floating debris in the air
    this.buildDust();
    
    // Add lightning bugs to the background
    this.buildFireflies();
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    // Lets load in our rabbit bugger

    // I'm including `Walk` at the moment until creating the pxlAnimation class
    //   to maintain shared characters and animation across rooms

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    let lightTypeList = Object.keys( this.lightList );
    if( lightTypeList.length>0){
      lightTypeList.forEach( (type)=>{
        this.lightList[type].forEach( (light)=>{
          if( type == "DirectionalLight" ){ 
            light.castShadow=false;
          }else if( type == "PointLight" ){ 
            light.shadow.radius = 5;
            light.shadow.receiveShadow = true;
            light.shadow.mapSize.width = 512; // default
            light.shadow.mapSize.height = 512; // default
            light.shadow.camera.near = 0.5; // default
            light.shadow.camera.far = 35; // default
            light.shadow.bias = .025; // default
            light.shadow.radius = 5; // default
          }
        });
      });
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    if( this.geoList.hasOwnProperty("pokinStick_geo") ){
      let pokinStick = this.geoList["pokinStick_geo"];
      pokinStick.castShadow = true;
      pokinStick.material.lights = true;
    }
    

    if( this.lightList.hasOwnProperty("PointLight") && this.lightList["PointLight"].length > 0 ){
      this.lightList["PointLight"].forEach( (light)=>{
        if( light.name == "point_campFire_lit" ){
          this.campfireLight = light;
          this.campfireLight.origPos = light.position.clone(); // Save the original position of the campfire light
          this.campfireLight.origIntensity = light.intensity; // Save the original intensity of the campfire light
        }
      });
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // Log replicator time!
    //  Making some shader materials for our burny burny logs.
    //    Lets get them crackling in that flame!
    if(this.geoList.hasOwnProperty('InstanceObjects')){
      
      for( const x in this.geoList['InstanceObjects'] ){
        if( x.includes("campfireLog") ){
          
          let logMat = null;
          if( this.materialList.hasOwnProperty('CampfireLogs') ){
            logMat = this.materialList["CampfireLogs"];
          }else{ // Campfire Log material doesn't exists
            let campfireLogUniforms={
              // LinearFilter // NearestMipmapLinearFilter // NearestFilter // NearestMipmapNearestFilter
              baseTexture:{type:"t",value: null },
              midEmberTexture:{type:"t",value: null },
              heavyEmberTexture:{type:"t",value: null },
              dataTexture:{type:"t",value: null },
              noiseTexture:{type:"t",value: null },
              time:{type:"f",value: this.msRunner },
              intensity:{type:"f",value:1.0},
              rate:{type:"f",value:.04},
            };
            logMat = this.pxlFile.pxlShaderBuilder( campfireLogUniforms, campfireLogVert(), campfireLogFrag() );
            //logMat.depthTest=true;
            //logMat.depthWrite=true;
            logMat.uniforms.baseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charred.webp", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.midEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charredEmberGlow.webp", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.heavyEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_emberGlow.webp", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_dataMask.webp", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.noiseTexture.value = this.smoothNoiseTexture;
          
            this.materialList["CampfireLogs"]=logMat;
          }
          
          this.geoList['InstanceObjects'][x].material=logMat;
        }
      }
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  }


// -- -- -- -- -- -- -- -- -- -- -- -- -- //

// Runs after Rabbit Druid's FBX files have been loaded
  animPostLoad( animKey ){
    super.animPostLoad( animKey ); // Optional
    
    // To view the skeleton of Mr. Rabbit Druid
    //   Uncomment the following 2 lines --
    //let curRig = this.pxlAnim.getRig( animKey );
    //let helper = new SkeletonHelper( curRig );
    //this.scene.add( helper );

    let curMesh = this.pxlAnim.getMesh( animKey );
    if(curMesh){

      let envGroundSettings = {
        //'shadows' : this.mobile ? false : true,
      }

      curMesh.castShadow = true;
      curMesh.receiveShadow = true;

      let curMtl = curMesh.material;
      curMtl.side = DoubleSide;
      let newSkinnedMtl = this.setSkinnedMaterial( curMesh, rabbitDruidVert(envGroundSettings), rabbitDruidFrag(envGroundSettings) );
      this.materialList[ "RabbitDruidA" ] = newSkinnedMtl;
    }

    if( this.geoList["Scripted"].hasOwnProperty("pokinStick_geo") ){
      let stickMtl = this.geoList["Scripted"]["pokinStick_geo"].material;
      stickMtl.shininess = 0;
    }
  }

  setSkinnedMaterial( bindObj, vertShader=null, fragShader=null ){

    // Enable shadows for non-mobile devices
    let shadowMapUniforms = this.mobile ? {} : UniformsLib[ "shadowmap" ];

    let skinnedMtlUniforms = UniformsUtils.merge(
      [
          UniformsLib['common'],
          UniformsLib['lights'],
          shadowMapUniforms,
        {
          'diffuseTexture' : { type:'t', value: null },
          'areTexture' : { type:'t', value: null },
          'noiseTexture' : { type:'t', value: null },
          'lightScalar': { type:'v2', value:null },
        }
      ]
    );

    skinnedMtlUniforms.diffuseTexture.value = bindObj.material.map;
    skinnedMtlUniforms.areTexture.value = this.pxlUtils.loadTexture( this.pxlOptions.pxlAssetRoot+"/RabbitDruidA/RabbitDruidA_lowRes_ARE.webp" );
    skinnedMtlUniforms.noiseTexture.value = this.cloud3dTexture;
    skinnedMtlUniforms.lightScalar.value = this.pxlDevice.lightShift;

    let skinnedMaterial = this.pxlFile.pxlShaderBuilder( skinnedMtlUniforms, vertShader, fragShader );
    skinnedMaterial.skinning = true;
    skinnedMaterial.side = DoubleSide;
    skinnedMaterial.lights = true;


    bindObj.material = skinnedMaterial;
    return skinnedMaterial;
  }

  // -- -- -- -- -- -- -- -- -- -- -- -- -- //
  
  
  // Build Scene and Assets
  build(){
    

    let curCharacter = this.animRigName;
    let animFbxLoader = this.pxlFile.loadAnimFBX( this, curCharacter, this.animSource[curCharacter]['rig'], this.animSource[curCharacter]['anim'], this.animSource[curCharacter]['stateConnections']);
    
    // -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- --
    // -- Environment Ground Material - -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // Enable shadows for non-mobile devices
    let shadowMapUniforms = this.mobile ? {} : UniformsLib[ "shadowmap" ];
    let hasShadowSettings = {
      //'shadows' : this.mobile ? false : true,
      'shadows' : true,
    }

    let envGroundUniforms = UniformsUtils.merge(
      [
        UniformsLib[ "common" ],
        UniformsLib[ "lights" ],
        shadowMapUniforms,
        {
          'diffuse' : { type:'t', value: null },
          'dirtDiffuse' : { type:'t', value: null },
          'crackedDirtDiffuse' : { type:'t', value: null },
          'hillDiffuse' : { type:'t', value: null },
          'mossDiffuse' : { type:'t', value: null },
          'grassDiffuse' : { type:'t', value: null },
          'dataDiffuse' : { type:'t', value: null },
          'fogColor': { type:'c', value: null },
          'noiseTexture' : { type:'t', value: null },
          'uniformNoise' : { type:'t', value: null },
        }
      ]
    );

    envGroundUniforms.fogColor.value = this.fogColor;
    envGroundUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Diffuse.webp", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.dirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"Dirt_Diffuse.webp", null, {'encoding':SRGBColorSpace} );

    envGroundUniforms.crackedDirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"CrackedDirtGround_diffuse.webp", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.hillDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"RockLayerDirtHill_diffuse.webp", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.mossDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"MossyGround_diffuse.webp", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.grassDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"GrassA_diffuse.webp", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.dataDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_dataMask.webp", null, {'encoding':SRGBColorSpace} );

    envGroundUniforms.noiseTexture.value = this.cloud3dTexture;
    envGroundUniforms.uniformNoise.value = this.pxlUtils.loadTexture( "Noise_UniformWebbing.jpg", null, {'encoding':LinearSRGBColorSpace} );

    var defines = {
      'USE_MAP' : "",
    };

    let envGroundSettings = Object.assign( {}, hasShadowSettings, {
      'shadowReach' : this.mobile ? 0.65 : 0.3, // Shadow reach for non-mobile devices
    });

    let environmentGroundMat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(hasShadowSettings), envGroundFrag(hasShadowSettings), defines );
    environmentGroundMat.lights= true;
    environmentGroundMat.transparent=false;
    environmentGroundMat.meshSettings = {
      'receiveShadow' : true,
    };

    envGroundUniforms.uniformNoise.value.wrapS = RepeatWrapping;
    envGroundUniforms.uniformNoise.value.wrapT = RepeatWrapping;
    envGroundUniforms.dirtDiffuse.value.wrapS = RepeatWrapping;
    envGroundUniforms.dirtDiffuse.value.wrapT = RepeatWrapping;
    
    envGroundUniforms.crackedDirtDiffuse.value.wrapS = RepeatWrapping;
    envGroundUniforms.crackedDirtDiffuse.value.wrapT = RepeatWrapping;

    envGroundUniforms.hillDiffuse.value.wrapS = RepeatWrapping;
    envGroundUniforms.hillDiffuse.value.wrapT = RepeatWrapping;
    envGroundUniforms.mossDiffuse.value.wrapS = RepeatWrapping;
    envGroundUniforms.mossDiffuse.value.wrapT = RepeatWrapping;
    envGroundUniforms.grassDiffuse.value.wrapS = RepeatWrapping;
    envGroundUniforms.grassDiffuse.value.wrapT = RepeatWrapping;

    envGroundUniforms.dataDiffuse.value.wrapS = ClampToEdgeWrapping;
    envGroundUniforms.dataDiffuse.value.wrapT = ClampToEdgeWrapping;

    
    // -- -- --
    
    // -- -- -- -- -- -- -- -- -- --
    // -- Campfire Flame Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- --


    let campfireUniforms = UniformsUtils.merge(
      [
        {
          'noiseTexture' : { type:'t', value: null },
          'smoothNoiseTexture' : { type:'t', value: null },
          'webNoise' : { type:'t', value: null },
        }
      ]
    );

    
    campfireUniforms.noiseTexture.value = this.cloud3dTexture;
    campfireUniforms.smoothNoiseTexture.value = this.pxlUtils.loadTexture( "Noise_UniformWebbing.jpg" );
    campfireUniforms.webNoise.value = this.pxlUtils.loadTexture( "Noise_NCross.jpg" );


    let campfireMtl=this.pxlFile.pxlShaderBuilder( campfireUniforms, campfireVert(), campfireFrag() );
    campfireMtl.side=DoubleSide;
    campfireMtl.transparent=true;
    campfireMtl.lights= false;
    campfireMtl.depthTest=false;
    campfireMtl.depthWrite=false;
    
    campfireMtl.blending=AdditiveBlending;
    

    // -- -- -- 


    // -- -- -- -- -- -- -- -- -- --
    // -- Campfire Logs Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- --
    // TODO : Seat log isn't getting the correct instance matrix
/*
    //    Lets get them crackling in that flame!
    let campfireLogUniforms={
      // LinearFilter // NearestMipmapLinearFilter // NearestFilter // NearestMipmapNearestFilter
      baseTexture:{type:"t",value: null },
      midEmberTexture:{type:"t",value: null },
      heavyEmberTexture:{type:"t",value: null },
      dataTexture:{type:"t",value: null },
      noiseTexture:{type:"t",value: null },
      time:{type:"f",value: this.msRunner },
      intensity:{type:"f",value:1.0},
      rate:{type:"f",value:.04},
    };
    let logBarkMat = this.pxlFile.pxlShaderBuilder( campfireLogUniforms, campfireLogVert(), campfireLogFrag() );

    //logBarkMat.depthTest=true;
    //logBarkMat.depthWrite=true;

    logBarkMat.uniforms.baseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charred.jpg", 4, {"magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
    logBarkMat.uniforms.midEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charredEmberGlow.jpg", 4, {"magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
    logBarkMat.uniforms.heavyEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_emberGlow.jpg", 4, {"magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
    logBarkMat.uniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_dataMask.jpg", 4, {"magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
    logBarkMat.uniforms.noiseTexture.value = this.smoothNoiseTexture;
*/


    // -- -- -- 

    // -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- Grass Cluster Instances Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    let grassClusterUniforms = UniformsUtils.merge(
        [
        UniformsLib[ "common" ],
        UniformsLib[ "lights" ],
        shadowMapUniforms,
        {
          'cloudTexture' : { type:'t', value: null },
          'noiseTexture' : { type:'t', value: null },
          'intensity' : { type: "f", value: 1.25 },
          'fogColor' : { type: "c", value: this.fogColor },
        }]
    )

    grassClusterUniforms.intensity.value = this.mobile ? 1.0 : 1.3; // Lower intensity for mobile devices
    grassClusterUniforms.cloudTexture.value = this.cloud3dTexture;
    grassClusterUniforms.noiseTexture.value = this.pxlUtils.loadTexture( "Noise_UniformWebbing.jpg", null, {'encoding':SRGBColorSpace} );


    let grassMat=this.pxlFile.pxlShaderBuilder( grassClusterUniforms, grassClusterVert(hasShadowSettings), grassClusterFrag(hasShadowSettings) ); 
    grassMat.side = DoubleSide;
    grassMat.lights = true;
    grassMat.transparent = false;

    
        
    // -- -- -- 

    // -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- Grass Cluster Instances Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    let grassCardsAUniforms = UniformsUtils.merge(
      [
        UniformsLib[ "common" ],
        UniformsLib[ "lights" ],
        shadowMapUniforms,
      {
        'diffuse' : { type:'t', value: null },
        'alphaMap' : { type:'t', value: null },
        'cloudTexture' : { type:'t', value: null },
        'noiseTexture' : { type:'t', value: null },
        'intensity' : { type: "f", value: 2.25 },
        'fogColor' : { type: "c", value: this.fogColor }
      }]
    )
    grassClusterUniforms.intensity.value = this.mobile ? 2.25 : 2.0; // Lower intensity for mobile devices
    grassCardsAUniforms.cloudTexture.value = this.cloud3dTexture;
    grassCardsAUniforms.noiseTexture.value = this.pxlUtils.loadTexture( "Noise_UniformWebbing.jpg" );
    grassCardsAUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"grassCardsA_diffuse.webp" );
    grassCardsAUniforms.alphaMap.value = this.pxlUtils.loadTexture( this.assetPath+"grassCardsA_mask.jpg" );


    let grassCardSettings = {
      'buildAlpha' : true,
      'addShimmer' : true,
      'addCampfire' : true,
      'depthScalar': 0.003,
      'fogDepthScalar': 0.8,
      'shadows' : true,
    }

    let grassCardsMat=this.pxlFile.pxlShaderBuilder( grassCardsAUniforms, instPlantsVert( hasShadowSettings ), instPlantsFrag( grassCardSettings ) );
    grassCardsMat.side = DoubleSide;
    grassCardsMat.lights = true;
    grassCardsMat.transparent = false;
    
    grassCardSettings['shadow'] = false; // Disable shadow for the far grass cards
    let grassCardsFarMat=this.pxlFile.pxlShaderBuilder( grassCardsAUniforms, instPlantsVert( hasShadowSettings ), instPlantsFrag( grassCardSettings ) );
    grassCardsFarMat.side = DoubleSide;
    grassCardsFarMat.lights = true;
    grassCardsFarMat.transparent = false;
    
    // -- -- --


    // -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- --

    
    this.materialList[ "EnvironmentGround_geo" ] = environmentGroundMat;
    this.materialList[ "CampfireFlame_geo" ] = campfireMtl;
    this.materialList[ "grassClusterA_lod0_geo" ] = grassMat;
    this.materialList[ "grassClusterA_lod1_geo" ] = grassMat;
    this.materialList[ "grassClusterA_lod2_geo" ] = grassCardsMat;
    //this.materialList[ "mushroomA_lod0_geo" ] = grassMat;
    //this.materialList[ "mushroomA_lod1_geo" ] = grassMat;
    this.materialList[ "grassCardsA_lod0_geo" ] = grassCardsMat;
    this.materialList[ "grassCardsA_lod1_geo" ] = grassCardsMat;
    this.materialList[ "grassCardsA_lod2_geo" ] = grassCardsFarMat;
    
    
    //
    // -- -- -- 
    this.pxlFile.toggleDebugger( true );
        
    return this.pxlFile.loadRoomFBX( this );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
}