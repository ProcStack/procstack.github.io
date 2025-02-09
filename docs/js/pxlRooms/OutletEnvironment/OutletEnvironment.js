// pxlNav Example :: `The Outlet` Environment
//
// A more complex example of a custom room environment for the pxlNav framework

import {
  Vector2,
  Vector3,
  Color,
  Group,
  Object3D,
  AmbientLight,
  FogExp2,
  SRGBColorSpace,
  RepeatWrapping,
  ClampToEdgeWrapping,
  UniformsUtils,
  UniformsLib,
  FrontSide,
  DoubleSide
} from "../../libs/three/three.module.min.js";
/*ShaderMaterial*/

import {
        envGroundVert, envGroundFrag,
        instPlantsVert, instPlantsFrag,
        creekWaterVert, creekWaterFrag,
        waterWayVert, waterWayFrag,
        woodenDockVert, woodenDockFrag,
      } from "./Shaders.js";
import { RoomEnvironment, pxlShaders, pxlEffects } from "../../pxlNav.esm.js";

const pxlPrincipledVert = pxlShaders.objects.pxlPrincipledVert;
const pxlPrincipledFrag = pxlShaders.objects.pxlPrincipledFrag;
const FloatingDust = pxlEffects.pxlParticles.FloatingDust;

export class OutletEnvironment extends RoomEnvironment{
  constructor( roomName='OutletEnvironment', assetPath=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, msRunner, camera, scene, cloud3dTexture );

    // Your `Assets` folder path
    //   Defaults to " ./ pxlRooms / *YourRoomEnv* / Assets "
		this.assetPath= assetPath + "Assets/";

    // The FBX file to load for your room
    //   Defaults to " ./ pxlRooms / *YourRoomEnv* / Assets / *YourSceneFile.fbx* "
    this.sceneFile = this.assetPath+"OutletEnvironment.fbx";
		
		// Environment Shader 
		this.spiralizerUniforms={};
		this.materialList={};
    
		// Device Field-of-View
    this.pxlCamFOV={ 'PC':60, 'MOBILE':80 };
    
    // Near-Far Clipping Planes for your room
    this.pxlCamNearClipping = 3;
    this.pxlCamFarClipping = 12000;

    // Room Fog Settings
    this.fogColor=new Color( 0x48415d );
    this.fogExp=.0007;
    this.fog=new FogExp2( this.fogColor, this.fogExp);
        
	}


// -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- //


// OutletEnvironment Helper Functions

buildDust(){
  if( this.mobile ) return;

  let vertexCount = 800; // Point Count
  let pScale = 8.5;  // Point Base Scale
  let visibleDistance = 380;  // Proximity Distance from Camera
  let particleOpacity = .6;  // Overall Opacity
  let opacityRolloff = 1.9;  // Distance-opacity falloff multiplier

  let windDirection = new Vector3( -0.9, 0.25, -7 ); // Constant direction flow
  let wanderInfluence = 0.80; // How much the particle sways
  let wanderFrequency = 2.30; // How frequent the sway happens

  // -- -- --

  let systemName = "floatingDust";
  let dustSystem = new FloatingDust( this, systemName );

  let dustSystemSettings = dustSystem.getSettings();
  dustSystemSettings["vertCount"] = vertexCount;
  dustSystemSettings["pScale"] = pScale;
  dustSystemSettings["pOpacity"] = particleOpacity;
  dustSystemSettings["proxDist"] = visibleDistance;
  dustSystemSettings["fadeOutScalar"] = opacityRolloff;
  dustSystemSettings["additiveBlend"] = true;

  dustSystemSettings["windDir"] = windDirection;
  dustSystemSettings["wanderInf"] = wanderInfluence;
  dustSystemSettings["wanderFrequency"] = wanderFrequency;
  
  dustSystemSettings["atlasPicks"] = [
    ...dustSystem.dupeArray([0.0,0.],4), ...dustSystem.dupeArray([0.25,0.],4),
    ...dustSystem.dupeArray([0.0,0.25],4), ...dustSystem.dupeArray([0.25,0.25],4),
    ...dustSystem.dupeArray([0.0,0.5],2), ...dustSystem.dupeArray([0.25,0.5],2),
    ...dustSystem.dupeArray([0.0,0.75],3), ...dustSystem.dupeArray([0.25,0.75],3)
  ];

  // Use a texture from the internal `pxlAsset` folder; ( RGB, Alpha )
  //dustSystem.setAtlasPath( "sprite_dustLiquid_rgb.jpg", "sprite_dustLiquid_alpha.jpg" );

  // Generate geometry and load texture resources
  dustSystem.build( dustSystemSettings );

  this.particleList[systemName] = dustSystem;
}


// -- -- -- -- -- -- -- -- -- --
// -- Post FBX Load & Build - -- --
// -- -- -- -- -- -- -- -- -- -- -- --
    
	fbxPostLoad(){
    super.fbxPostLoad();

    // Add some floating dust particles around the camera
    this.buildDust();
    
    // Adding a basic ambient light
    var ambientLight = new AmbientLight( 0x383838 ); // soft white light
    this.scene.add( ambientLight );
    
    //this.addColliderHelper( this.geoList['colliderHelper'] );
    this.setUserHeight( 22.5 );

  }
	

// -- -- -- -- -- -- -- -- --
// -- Build Scene & Assets -- --
// -- -- -- -- -- -- -- -- -- -- --

	build(){
    
    //
    // Three texture options for loading
    let textureOptionsRepeat = {
      'wrapS' : RepeatWrapping,
      'wrapT' : RepeatWrapping
    };
    let textureOptionsSRGB = {
      'encoding':SRGBColorSpace,
      'wrapS' : RepeatWrapping,
      'wrapT' : RepeatWrapping
    };
    let textureOptionsClamp = {
      'wrapS' : ClampToEdgeWrapping,
      'wrapT' : ClampToEdgeWrapping
    };

    // -- -- --

    let envGroundUniforms = UniformsUtils.merge(
      [
        UniformsLib[ "common" ],
        UniformsLib[ "lights" ],
        /*UniformsLib[ "shadowmap" ],*/
        {
          'diffuse' : { type:'t', value: null },
          'dirtDiffuse' : { type:'t', value: null },
          'crackedDirtDiffuse' : { type:'t', value: null },
          'hillDiffuse' : { type:'t', value: null },
          'grassDiffuse' : { type:'t', value: null },
          'mossDiffuse' : { type:'t', value: null },
          'dataTexture' : { type:'t', value: null },
          'mult': { type:'f', value:1 },
          'fogColor': { type:'c', value: null },
          'noiseTexture' : { type:'t', value: null },
          'uniformNoise' : { type:'t', value: null },
        }
      ]
    );

    envGroundUniforms.fogColor.value = this.scene.fog.color;
    envGroundUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Diffuse.jpg", null, textureOptionsSRGB );

    envGroundUniforms.dirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"Dirt_Diffuse.jpg", null, textureOptionsSRGB );
    envGroundUniforms.crackedDirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"CrackedDirtGround_diffuse.jpg", null, textureOptionsSRGB );
    envGroundUniforms.hillDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"RockLayerDirtHill_diffuse.jpg", null, textureOptionsSRGB );
    envGroundUniforms.grassDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"GrassA_diffuse.jpg", null, textureOptionsSRGB );
    //envGroundUniforms.mossDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"MossyGround_diffuse.jpg", null, textureOptionsSRGB );
    envGroundUniforms.mossDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"MossyB_diffuse.jpg", null, textureOptionsSRGB );

    envGroundUniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Data.jpg", null, textureOptionsClamp );

    envGroundUniforms.noiseTexture.value = this.cloud3dTexture;
    envGroundUniforms.uniformNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg", null, textureOptionsRepeat );
    
		let environmentGroundMat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag(1) );
    environmentGroundMat.lights= true;

  //
    // -- -- -- 

    // -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- Grass Cluster Instances Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    let grassCardsAUniforms = UniformsUtils.merge(
      [
      UniformsLib[ "lights" ],
      /*UniformsLib[ "shadowmap" ],*/
      {
        'diffuse' : { type:'t', value: null },
        'alphaMap' : { type:'t', value: null },
        /*'normalMap' : { type:'t', value: null },*/
        'noiseTexture' : { type:'t', value: null },
        'fogColor' : { type: "c", value: this.fogColor }
      }]
    )
    grassCardsAUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );
    grassCardsAUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"grassCardsA_diffuse.jpg" );
    grassCardsAUniforms.alphaMap.value = this.pxlUtils.loadTexture( this.assetPath+"grassCardsA_alpha.jpg" );
    //grassCardsAUniforms.normalMap.value = this.pxlUtils.loadTexture( this.assetPath+"grassCardsA_normal.jpg" );

    let grassCardsMat=this.pxlFile.pxlShaderBuilder( grassCardsAUniforms, instPlantsVert(), instPlantsFrag( true, true ) );
    grassCardsMat.side = DoubleSide;
    grassCardsMat.lights = true;
    grassCardsMat.transparent = false;
    //grassCardsMat.alphaTest = .5;
    //grassCardsMat.blending = ;
    
        
    // -- -- --
    

    // -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- Grass Cluster Instances Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    let grassClusterUniforms = UniformsUtils.merge(
      [
      UniformsLib[ "lights" ],
      /*UniformsLib[ "shadowmap" ],*/
      {
        'noiseTexture' : { type:'t', value: null },
        'fogColor' : { type: "c", value: this.fogColor },
      }]
    )
    grassClusterUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );

    let grassMat=this.pxlFile.pxlShaderBuilder( grassClusterUniforms, instPlantsVert(), instPlantsFrag() );
    grassMat.side = FrontSide;
    grassMat.lights = true;
    grassMat.transparent = false;
    
        
    // -- -- --
    
    
    // -- -- -- -- -- -- -- -- -- --
    // -- Fishing Pond Material - -- --
    // -- -- -- -- -- -- -- -- -- -- -- --


    let woodenDockUniforms = UniformsUtils.merge(
      [
      UniformsLib[ "lights" ],
      {
        'noiseTexture' : { type:'t', value: null },
        'fogColor' : { type: "c", value: this.fogColor },
      }]
    )
    woodenDockUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );

    let woodenDockMat=this.pxlFile.pxlShaderBuilder( woodenDockUniforms, woodenDockVert(), woodenDockFrag() );
    woodenDockMat.side = FrontSide;
    woodenDockMat.lights = true;
    
        
    // -- -- --
    
    
    // -- -- -- -- -- -- -- -- -- -- -- -- 
    // -- Hillside Creek Water Material -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- --

/*
    let waterWayUniforms = UniformsUtils.merge(
      [
      UniformsLib[ "lights" ],
      {
        'dataTexture' : { type:'t', value: null },
        'coastLineTexture' : { type:'t', value: null },
        'rippleTexture' : { type:'t', value: null },
        'noiseTexture' : { type:'t', value: null },
        'fogColor' : { type: "c", value: this.fogColor },
        'rate': { type:'f', value:1 },
        'intensity': { type:'f', value:1 },
      }]
    )
    waterWayUniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterWay_Data.jpg" );
    waterWayUniforms.coastLineTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterWay_CoastLine.jpg" );
    waterWayUniforms.rippleTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterRipples_CoastalB.jpg", textureOptionsRepeat );
    waterWayUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg", textureOptionsRepeat );

    let waterWayMat=this.pxlFile.pxlShaderBuilder( waterWayUniforms, pondWaterVert(), pondWaterFrag() );
    waterWayMat.side = FrontSide;
    waterWayMat.lights = true;
    waterWayMat.transparent = true;
    waterWayMat.frustumCulled = false;
    */
        
    // -- -- --
    

    let waterWayUniforms = UniformsUtils.merge(
        [
        UniformsLib[ "lights" ],
        {
          'dataTexture' : { type:'t', value: null },
          'coastLineTexture' : { type:'t', value: null },
          'rippleTexture' : { type:'t', value: null },
          'noiseTexture' : { type:'t', value: null },
          'fogColor' : { type: "c", value: this.fogColor },
          'rate': { type:'f', value:1 },
          'intensity': { type:'f', value:1 },
        }]
    )
    waterWayUniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterWay_Data.jpg", textureOptionsSRGB );
    waterWayUniforms.coastLineTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterWay_CoastLine.jpg" );
    waterWayUniforms.rippleTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterRipples_CoastalB.jpg" );
    waterWayUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg", textureOptionsRepeat );

    waterWayUniforms.rippleTexture.value.wrapS = RepeatWrapping;
    waterWayUniforms.rippleTexture.value.wrapT = RepeatWrapping;



    let waterWayMat=this.pxlFile.pxlShaderBuilder( waterWayUniforms, waterWayVert(), waterWayFrag() );
    waterWayMat.side = FrontSide;
    waterWayMat.lights = true;
    waterWayMat.transparent = true;
    waterWayMat.frustumCulled = false;
    
    // Objects recieving this material will have their mesh properties set -- 
    waterWayMat.meshSettings = {
      'renderOrder' : 2,
    };


    // -- -- -- -- -- -- -- -- --
    // -- Water-Way Material - -- --
    // -- -- -- -- -- -- -- -- -- -- --


    let creekWaterUniforms = UniformsUtils.merge(
      [
      UniformsLib[ "lights" ],
      {
        'dataTexture' : { type:'t', value: null },
        'rippleTexture' : { type:'t', value: null },
        'noiseTexture' : { type:'t', value: null },
        'fogColor' : { type: "c", value: this.fogColor },
        'rate': { type:'f', value:1 },
        'intensity': { type:'f', value:1 },
      }]
    )
    creekWaterUniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"CreekWater_Data.jpg" );
    creekWaterUniforms.rippleTexture.value = this.pxlUtils.loadTexture( this.assetPath+"WaterRipples_CoastalB.jpg" );
    creekWaterUniforms.noiseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );

    let creekWaterMat=this.pxlFile.pxlShaderBuilder( creekWaterUniforms, creekWaterVert(), creekWaterFrag() );
    creekWaterMat.side = FrontSide;
    creekWaterMat.lights = true;
    creekWaterMat.transparent = true;
    creekWaterMat.frustumCulled = false;

    // Objects recieving this material will have their mesh properties set -- 
    creekWaterMat.meshSettings = {
      'renderOrder' : 3,
    };


    // -- -- --
    
    // Assign which materials to which geometry

    this.materialList[ "EnvGround_geo" ] = environmentGroundMat;

    this.materialList[ "grassCardsA_lod0_geo" ] = grassCardsMat;
    this.materialList[ "grassCardsA_lod1_geo" ] = grassCardsMat;
    this.materialList[ "grassCardsA_lod2_geo" ] = grassCardsMat;

    this.materialList[ "grassClusterA_lod0_geo" ] = grassMat;
    this.materialList[ "grassClusterA_lod1_geo" ] = grassMat;

    this.materialList[ "swampGrassA_lod0_geo" ] = grassMat;
    this.materialList[ "swampGrassA_lod1_geo" ] = grassMat;

    this.materialList[ "tallSwampGrassA_lod0_geo" ] = grassMat;
    this.materialList[ "tallSwampGrassA_lod1_geo" ] = grassMat;
    
    this.materialList[ "catTailA_lod0_geo" ] = grassMat;
    this.materialList[ "catTailA_lod1_geo" ] = grassMat;

    this.materialList[ "woodenDock_geo" ] = woodenDockMat;
    this.materialList[ "waterWay_geo" ] = waterWayMat;

    this.materialList[ "creekWater_geo" ] = creekWaterMat;
    
  //
    // -- -- -- 
        
		let fieldFbxLoader = this.pxlFile.loadRoomFBX( this ) ;//, null, null, true );
		
	// -- -- -- -- -- -- -- -- -- -- -- -- -- //
		
	}
    
    
}