import * as THREE from "../../libs/three/three.module.js";
import { ShaderPass } from '../../libs/three/postprocessing/ShaderPass.js';
import { campfireLogVert, campfireLogFrag,
         envGroundVert, envGroundFrag } from "./Shaders.js";
import RoomEnvironment from "../../pxlNav/RoomClass.js";

import { BillowSmoke, EmberWisps, FloatingDust } from '../../pxlNav/effects/particles.js';

export class CampfireEnvironment extends RoomEnvironment{
  constructor( roomName='CampfireEnvironment', assetPath=null, pxlFile=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    
    this.assetPath=assetPath+"Assets/";
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
    this.animInitCycle = "Sit_Idle";
    this.animSource = {
      "RabbitDruidA" : {
        "rig" : this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Walk" : this.assetPath+"RabbitDruidA/RabbitDruidA_Walk.fbx",
          "Sit_Idle" : this.assetPath+"RabbitDruidA/RabbitDruidA_Sit_Idle.fbx",
          "Sit_Stoke" : this.assetPath+"RabbitDruidA/RabbitDruidA_Sit_Stoke.fbx"
        }
      }
    };
    this.animClips = {};
    this.animMixer = null;
    
    this.envObjName="environmentGround";
    this.textureList={};
    this.particleList={};
    
    
    this.pxlCamFOV=(pxlDevice.mobile?80:60);
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
  // Per-Frame Render updates
  step(){
    super.step();
    //console.log(this.animMixer);
    if(this.animMixer){
      this.animMixer.update( this.msRunner.y*100.0 );
    }

  }
  
  // -- -- --
  
  
  fbxPostLoad(){
    super.fbxPostLoad();
    
    // build( Obj & Mtl Name, This Object, Sprite Count, Sprite Size )
    let systemName = "billowSmoke";
    let bSmoke = new BillowSmoke( this, systemName );
    this.particleList[systemName] = bSmoke;
    //
    let atlasPath = this.assetPath+"sprite_dustLiquid.png";
    bSmoke.setAtlasPath( atlasPath );
    //
    // Bit arbitrary the numbers I'm picking here.
    //   It's creating a weighted choise of which atlas texture I want to use.
    // If you look at `./CampfireEnvironment/Assets/"sprite_dustLiquid.png` you'll see an 4x4 grid of puff balls.
    //   I'm avoiding the top left corner, and less choices from the bottom right corner.
    //     *Note* : OpenGL texture coordinates (0,0) start at the bottom left corner of the image.
    // Then the 4s, 2s, and 3s are just how many times I want to repeat that specific atlas texture.
    //   The repeating is like asking for more of that specific texture option to be picted more often.
    // ie- bSmoke.dupeArray([0.5,0.25],2) -becomes- [ [0.5,0.25], [0.5,0.25] ]
    let  billowAtlasPicks = [...bSmoke.dupeArray([0.0,0.0],4), ...bSmoke.dupeArray([0.25,0.0],4),
                            ...bSmoke.dupeArray([0.5,0.0],2), ...bSmoke.dupeArray([0.5,0.25],2),
                            ...bSmoke.dupeArray([0.5,0.5],2), ...bSmoke.dupeArray([0.5,0.75],2),
                            ...bSmoke.dupeArray([0.75,0.75],4), ...bSmoke.dupeArray([0.75,0.25],3),
                            ...bSmoke.dupeArray([0.75,0.25],3) ];

    // bSmoke.build( Particle Count (50),  Particle Scale (56),  Atlas Resolution (4, 8, square only[4x4,8x8]), Atlas Picks [ [0-1,0-1],[#,#] ... ] )
    bSmoke.build( 50, 56, 4, billowAtlasPicks );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    // Quick buggers zippin out of the flame-ola

    systemName = "emberWisps";
    let eWisps = new EmberWisps( this, systemName );
    this.particleList[systemName] = eWisps;
    //
    atlasPath = this.assetPath+"sprite_dustLiquid.png"
    eWisps.setAtlasPath( atlasPath );
    //
    let emberAtlasPicks=eWisps.elementDuplicator([ [0.0,0.75], [0.0,0.5], [0.25,0.75], [0.25,0.5] ],4);
    eWisps.build( 30, 6, 4, emberAtlasPicks );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    // Floating debris in the air

    systemName = "floatingDust";
    this.particleList[systemName] = new FloatingDust( this, systemName );
    atlasPath = this.assetPath+"sprite_dustFloaters.png"
    this.particleList[systemName].setAtlasPath( atlasPath );
    this.particleList[systemName].build( 1000, 7 );
    
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    // Lets load in our rabbit bugger

    // I'm including `Walk` at the moment until creating the pxlAnimation class
    //   to maintain shared characters and animation across rooms

    let curCharacter = "RabbitDruidA";
    let animFbxLoader = this.pxlFile.loadAnimFBX( this, curCharacter, this.animSource[curCharacter]['rig'], this.animSource[curCharacter]['anim']);


    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // Log replicator time!
    //  Making some shader materials for our burny burny logs.
    //    Lets get them crackling in that flame!

    if(this.geoList.hasOwnProperty('InstancesObjects')){
      
      for( const x in this.geoList['InstancesObjects'] ){
        if( x.includes("campfireLog") ){
          
          let logMat = null;
          if( this.textureList.hasOwnProperty('CampfireLogs') ){
            logMat = this.textureList["CampfireLogs"];
          }else{ // Campfire Log material doesn't exists
            let campfireLogUniforms={
              // THREE.LinearFilter // THREE.NearestMipmapLinearFilter // THREE.NearestFilter // THREE.NearestMipmapNearestFilter
              baseTexture:{type:"t",value: null },
              midEmberTexture:{type:"t",value: null },
              heavyEmberTexture:{type:"t",value: null },
              dataTexture:{type:"t",value: null },
              noiseTexture:{type:"t",value: null },
              time:{type:"f",value: this.msRunner },
              intensity:{type:"f",value:1.0},
              rate:{type:"f",value:.035},
            };
            logMat = this.pxlFile.pxlShaderBuilder( campfireLogUniforms, campfireLogVert(), campfireLogFrag() );
            //logMat.depthTest=true;
            //logMat.depthWrite=true;
            logMat.uniforms.baseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charred.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
            logMat.uniforms.midEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charredEmberGlow.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
            logMat.uniforms.heavyEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_emberGlow.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
            logMat.uniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_dataMask.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
            logMat.uniforms.noiseTexture.value = this.smoothNoiseTexture;
          
            this.textureList["CampfireLogs"]=logMat;
          }
          
          // Asign Campfire Log material
          //console.log(x)
          //console.log(x.material)
          this.geoList['InstancesObjects'][x].material=logMat;
        }
      }
    }

    // TODO : This needs to not be needed --
    this.setUserHeight( this.camInitPos.y );
    
    this.booted=true;
    
    console.log(this.geoList);
        
  }

  animPostLoad( animKey, fbxObj, animMixers ){
    let animKeys = Object.keys(animMixers);
    if( animKeys.includes( this.animInitCycle ) ){
      let curAnimMixer = animMixers[this.animInitCycle];
      console.log(curAnimMixer);
      this.animMixer = curAnimMixer;
      console.log(fbxObj.animations);
      //this.animMixer.play();
    }else{
      let fallback = animKeys[0];
      this.animInitCycle = fallback;
      console.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");
    }
  }
  
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
  
  // Build Scene and Assets
  build(){
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
    //mat.side=THREE.FrontSide;
    mat.lights= true;
        
    this.textureList[ "environmentGround" ]=mat;
    
    

    
    //
    // -- -- -- 
        
    return this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
    
}