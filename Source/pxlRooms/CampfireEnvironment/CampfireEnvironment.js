import * as THREE from "../../js/libs/three/three.module.js";
import { ShaderPass } from '../../js/libs/three/postprocessing/ShaderPass.js';
import { campfireLogVert, campfireLogFrag,
         campfireVert, campfireFrag,
         envGroundVert, envGroundFrag } from "./Shaders.js";
import RoomEnvironment from "../../js/pxlNav/RoomClass.js";

import { BillowSmoke, EmberWisps, FloatingDust } from '../../js/pxlNav/effects/particles.js';

export class CampfireEnvironment extends RoomEnvironment{
  constructor( roomName='CampfireEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlAnim, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    
    this.assetPath=assetPath+"Assets/";
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
    this.animInitCycle = "Sit_Idle";

    // Animation Source & Clips are managed under the hood,
    //   So you only need to set your rig, animations, and connections in one room.
    // Current issue, re-imports will re-read the file from disk/url,
    //   But wont overwrite the data if it exists from a prior Room's load.
    this.animSource = {
      "RabbitDruidA" : {
        "rig" : this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Walk" : this.assetPath+"RabbitDruidA/RabbitDruidA_Walk.fbx",
          "Sit_Idle" : this.assetPath+"RabbitDruidA/RabbitDruidA_Sit_Idle.fbx",
          "Sit_Stoke" : this.assetPath+"RabbitDruidA/RabbitDruidA_Sit_Stoke.fbx"
        },
        "stateConnections"  : {
          // Non existing states will be ignored and loop'ed, ie "Walk"
          "Sit_Idle" : ["Sit_Idle", "Sit_Stoke"],
          "Sit_Stoke" : ["Sit_Idle"]
        }
      }
    };

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
    
    // When the Druid Rabbit finishes loading, we'll step the animation here
    //   Cycle changes occur here as well.
    if(this.animMixer){
      this.pxlAnim.step( "RabbitDruidA" );
    }
  }
  
  // -- -- --
  
  
  fbxPostLoad(){
    super.fbxPostLoad();
    
    let particleSource = this.geoList['Scripted']['ParticleSource_loc'];
    let particleSourcePos = particleSource.position;

    // build( Obj & Mtl Name, This Object, Sprite Count, Sprite Size )
    let systemName = "billowSmoke";
    let bSmoke = new BillowSmoke( this, systemName );
    this.particleList[systemName] = bSmoke;
    //
    let atlasPath = this.assetPath+"sprite_dustLiquid.png";
    bSmoke.setAtlasPath( atlasPath );
    bSmoke.setPosition( particleSourcePos );

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
    bSmoke.build( 600, 56, 4, billowAtlasPicks );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    // Quick buggers zippin out of the flame-ola

    systemName = "emberWisps";
    let eWisps = new EmberWisps( this, systemName );
    this.particleList[systemName] = eWisps;
    //
    atlasPath = this.assetPath+"sprite_dustLiquid.png"
    eWisps.setAtlasPath( atlasPath );
    eWisps.setPosition( particleSourcePos );
    //
    let emberAtlasPicks=eWisps.elementDuplicator([ [0.0,0.75], [0.0,0.5], [0.25,0.75], [0.25,0.5] ],4);
    eWisps.build( 30, 5, 4, emberAtlasPicks );
    
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
    let animFbxLoader = this.pxlFile.loadAnimFBX( this, curCharacter, this.animSource[curCharacter]['rig'], this.animSource[curCharacter]['anim'], this.animSource[curCharacter]['stateConnections']);


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
    
    //console.log(this.geoList);
        
  }


// -- -- -- -- -- -- -- -- -- -- -- -- -- //

// Runs after Rabbit Druid's FBX files have been loaded
  animPostLoad( animKey ){
    if( this.pxlAnim.hasClip( animKey, this.animInitCycle ) ){
      let animMixer = this.pxlAnim.getMixer( animKey );
      this.animMixer = animMixer;
      
      this.pxlAnim.playClip( animKey, this.animInitCycle );
    }else{
      let fallback = animKeys[0];
      this.animInitCycle = fallback;
      this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");
    }

    
    // To view the skeleton of Mr. Rabbit Druid
    //   Uncomment the following 2 lines --
    //let curRig = this.pxlAnim.getRig( animKey );
    //let helper = new THREE.SkeletonHelper( curRig );
    //this.scene.add( helper );

    let curMesh = this.pxlAnim.getMesh( animKey );
    if(curMesh){
      let curMtl = curMesh.material;
    }

  }
  

// -- -- -- -- -- -- -- -- -- -- -- -- -- //
  

// Build Scene and Assets
  build(){
    
    let envGroundUniforms = THREE.UniformsUtils.merge(
        [
          THREE.UniformsLib[ "common" ],
          THREE.UniformsLib[ "lights" ],
          THREE.UniformsLib[ "shadowmap" ],
          {
            'diffuse' : { type:'t', value: null },
            'dirtDiffuse' : { type:'t', value: null },
            'mult': { type:'f', value:1 },
            'fogColor': { type:'c', value: null },
            'noiseTexture' : { type:'t', value: null },
            'uniformNoise' : { type:'t', value: null },
            'crossNoise' : { type:'t', value: null },
          }
        ]
      );

    envGroundUniforms.fogColor.value = this.fogColor;
    envGroundUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Diffuse.jpg" );
    envGroundUniforms.dirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"Dirt_Diffuse.jpg" );
    envGroundUniforms.noiseTexture.value = this.cloud3dTexture;
    envGroundUniforms.uniformNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );
    envGroundUniforms.crossNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_NCross.jpg" );

    let environmentGroundMat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag(4) );
    environmentGroundMat.lights= true;
    environmentGroundMat.transparent=false;

    envGroundUniforms.uniformNoise.value.wrapS = THREE.RepeatWrapping;
    envGroundUniforms.uniformNoise.value.wrapT = THREE.RepeatWrapping;
    envGroundUniforms.crossNoise.value.wrapS = THREE.RepeatWrapping;
    envGroundUniforms.crossNoise.value.wrapT = THREE.RepeatWrapping;
    envGroundUniforms.dirtDiffuse.value.wrapS = THREE.RepeatWrapping;
    envGroundUniforms.dirtDiffuse.value.wrapT = THREE.RepeatWrapping;

    
    // -- -- --
    
    let campfireUniforms = THREE.UniformsUtils.merge(
      [
          THREE.UniformsLib['lights'],
        {
          'noiseTexture' : { type:'t', value: null },
          'smoothNoiseTexture' : { type:'t', value: null },
          'webNoise' : { type:'t', value: null },
        }
      ]
    );

    
    campfireUniforms.noiseTexture.value = this.cloud3dTexture;
    campfireUniforms.smoothNoiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );
    campfireUniforms.webNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_NCross.jpg" );


    let campfireMtl=this.pxlFile.pxlShaderBuilder( campfireUniforms, campfireVert(), campfireFrag() );
    campfireMtl.side=THREE.DoubleSide;
    campfireMtl.transparent=true;
    campfireMtl.lights= false;


    // -- -- --
          
    this.textureList[ "EnvironmentGround_geo" ]=environmentGroundMat;
    this.textureList[ "CampfireFlame_geo" ]=campfireMtl;
  
    

    
    //
    // -- -- -- 
        
    return this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
    
}