import {
  Color, FogExp2, Vector2,
  RepeatWrapping, ClampToEdgeWrapping,
  NearestFilter, NearestMipmapLinearFilter,
  LinearFilter, AdditiveBlending,
  DoubleSide, FrontSide,
  UniformsUtils, UniformsLib,
  SRGBColorSpace, LinearSRGBColorSpace,
  AmbientLight
} from "../../libs/three/three.module.min.js";

import { RoomEnvironment, pxlEffects } from "../../pxlNav.js";

import { rabbitDruidVert, rabbitDruidFrag,
         campfireLogVert, campfireLogFrag,
         campfireVert, campfireFrag,
         grassClusterVert, grassClusterFrag,
         envGroundVert, envGroundFrag } from "./Shaders.js";

const BillowSmoke = pxlEffects.pxlParticles.BillowSmoke;
const EmberWisps = pxlEffects.pxlParticles.EmberWisps;
const FloatingDust = pxlEffects.pxlParticles.FloatingDust;

export class CampfireEnvironment extends RoomEnvironment{
  constructor( roomName='CampfireEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlAnim, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    
    //this.assetPath=assetPath+"Assets/";
		this.assetPath="./js/pxlRooms/CampfireEnvironment/Assets/";
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";

    // Animation Source & Clips are managed under the hood,
    //   So you only need to set your rig, animations, and connections in one room.
    // Current issue, re-imports will re-read the file from disk/url,
    //   But wont overwrite the data if it exists from a prior Room's load.
    this.animRigName = "RabbitDruidA";
    this.animSource = {
      "RabbitDruidA" : {
        "rig" : this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",
        "anim" : {
          "Sit_Idle" : this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_idle.fbx",
          "Sit_Stoke" : this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_stoke.fbx",
          "Sit_Look" : this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_look.fbx"
        },
        "stateConnections"  : {
          // Non existing states will be ignored and loop'ed, ie "Walk"
          "Sit_Idle" : [ ...Array(6).fill("Sit_Idle"), ...Array(6).fill("Sit_Stoke"), ...Array(5).fill("Sit_Look")],
          "Sit_Stoke" : ["Sit_Idle"],
          "Sit_Look" : ["Sit_Idle"]
        }
      }
    };
    this.animInitCycle = "Sit_Idle";

    this.animMixer = null;
    
    this.materialList={};
    this.particleList={};
    
    
    this.pxlCamFOV=(pxlDevice.mobile?80:60);
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = 1;
    this.pxlCamFarClipping = 10000;

    // this.fogColor=new Color(.3,.3,.3);
    this.fogColor=new Color(.015,.025,.06);
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

    //this.pxlEnv.pxlCamera.setStats( this.pxlCamFOV, this.pxlCamZoom, this.pxlCamAspect, this.pxlCamNearClipping );
  }
  
  checkEyeBlink(){
    if( this.eyeBlinkAnim > 0 ){
      // Decrease the eye blink animation 1 to 0
      this.eyeBlinkAnim -= this.eyeBlinkRate;
      // Map 0-1 to 0-1-0
      let sawAnim = Math.max(0.0, (Math.min(.5,this.eyeBlinkAnim) - Math.max(0,this.eyeBlinkAnim-.5)) * 2);
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
    this.materialList[ "RabbitDruidA" ].uniforms.eyeBlink.value = this.eyeBlinkInf;
  }

  // -- -- --
  
  
  fbxPostLoad(){
    super.fbxPostLoad();
    
    let particleSource = this.geoList['Scripted']['ParticleSource_loc'];
    let particleSourcePos = particleSource.position;


    var ambientLight = new AmbientLight( 0x101010 ); // soft white light
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

    let moonObj = this.geoList['Scripted']['Moon_geo'];
    if( moonObj ){
      moonObj.material.map.wrapS = ClampToEdgeWrapping;
      moonObj.material.map.wrapT = ClampToEdgeWrapping;
      moonObj.material.map.minFilter = NearestFilter;
      moonObj.material.map.magFilter = NearestFilter;
    }

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
            logMat.uniforms.baseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charred.jpg", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.midEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charredEmberGlow.jpg", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.heavyEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_emberGlow.jpg", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_dataMask.jpg", 4, {"encoding":LinearSRGBColorSpace, "magFilter":LinearFilter, "minFilter":NearestMipmapLinearFilter} );
            logMat.uniforms.noiseTexture.value = this.smoothNoiseTexture;
          
            this.materialList["CampfireLogs"]=logMat;
          }
          
          this.geoList['InstanceObjects'][x].material=logMat;
        }
      }
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    // TODO : This needs to not be needed --
    this.setUserHeight( this.camInitPos.y );
    
    
        
    this.booted=true;
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
      let curMtl = curMesh.material;
      curMtl.side = DoubleSide;
      let newSkinnedMtl = this.setSkinnedMaterial( curMesh, rabbitDruidVert(), rabbitDruidFrag() );
      this.materialList[ "RabbitDruidA" ] = newSkinnedMtl;
    }

    if( this.geoList["Scripted"].hasOwnProperty("pokinStick_geo") ){
      let stickMtl = this.geoList["Scripted"]["pokinStick_geo"].material;
      stickMtl.shininess = 0;
    }
  }

  setSkinnedMaterial( bindObj, vertShader=null, fragShader=null ){

    let skinnedMtlUniforms = UniformsUtils.merge(
      [
          UniformsLib['common'],
          UniformsLib['lights'],
        {
          'diffuseTexture' : { type:'t', value: null },
          'areTexture' : { type:'t', value: null },
          'noiseTexture' : { type:'t', value: null },
          'eyeBlink' : { type:'v2', value: this.eyeBlinkInf },
          'lightScalar': { type:'v2', value:null },
        }
      ]
    );

    skinnedMtlUniforms.diffuseTexture.value = bindObj.material.map;
    skinnedMtlUniforms.areTexture.value = this.pxlUtils.loadTexture( this.assetPath+"RabbitDruidA/RabbitDruidA_lowRes_ARE.jpg" );
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

    let envGroundUniforms = UniformsUtils.merge(
        [
          UniformsLib[ "common" ],
          UniformsLib[ "lights" ],
          UniformsLib[ "shadowmap" ],
          {
            'diffuse' : { type:'t', value: null },
            'dirtDiffuse' : { type:'t', value: null },
            'crackedDirtDiffuse' : { type:'t', value: null },
            'hillDiffuse' : { type:'t', value: null },
            'mossDiffuse' : { type:'t', value: null },
            'dataDiffuse' : { type:'t', value: null },
            'fogColor': { type:'c', value: null },
            'noiseTexture' : { type:'t', value: null },
            'uniformNoise' : { type:'t', value: null },
          }
        ]
      );

    envGroundUniforms.fogColor.value = this.fogColor;
    envGroundUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Diffuse.jpg", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.dirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"Dirt_Diffuse.jpg", null, {'encoding':SRGBColorSpace} );

    envGroundUniforms.crackedDirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"CrackedDirtGround_diffuse.jpg", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.hillDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"RockLayerDirtHill_diffuse.jpg", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.mossDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"MossyGround_diffuse.jpg", null, {'encoding':SRGBColorSpace} );
    envGroundUniforms.dataDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_dataMask.jpg", null, {'encoding':SRGBColorSpace} );

    envGroundUniforms.noiseTexture.value = this.cloud3dTexture;
    envGroundUniforms.uniformNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg", null, {'encoding':LinearSRGBColorSpace} );

    let environmentGroundMat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag(4) );
    environmentGroundMat.lights= true;
    environmentGroundMat.transparent=false;

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
    campfireUniforms.smoothNoiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );
    campfireUniforms.webNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_NCross.jpg" );


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
        UniformsLib[ "lights" ],
        {
          'noiseTexture' : { type:'t', value: null },
          'fogColor' : { type: "c", value: this.fogColor },
        }]
    )
    grassClusterUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg", null, {'encoding':SRGBColorSpace} );

    let grassMat=this.pxlFile.pxlShaderBuilder( grassClusterUniforms, grassClusterVert(), grassClusterFrag() );
    grassMat.side = FrontSide;
    grassMat.lights = true;
    grassMat.transparent = false;
    
        
    
    // -- -- --
    
    this.materialList[ "EnvironmentGround_geo" ] = environmentGroundMat;
    this.materialList[ "CampfireFlame_geo" ] = campfireMtl;
    this.materialList[ "grassClusterA_geo" ] = grassMat;
    
    
    //
    // -- -- -- 
    this.pxlFile.toggleDebugger( true );
        
    return this.pxlFile.loadRoomFBX( this );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }
    
}