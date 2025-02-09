// pxlNav Example :: Void Environment
//
// A simpler example of a custom room environment for the pxlNav framework
//   FBX Load with no clunky extras

// Three Imports --
import {
  Vector3,
  Color,
  AmbientLight,
  FogExp2
} from "../../libs/three/three.module.min.js";

import { voidBaseVert, voidBaseFrag } from "./Shaders.js";
import { RoomEnvironment, pxlEffects } from "../../pxlNav.esm.js";

// To add in some particle effects, you can use the `pxlEffects` module
const FloatingDust = pxlEffects.pxlParticles.FloatingDust;


export class VoidEnvironment extends RoomEnvironment{
  constructor( roomName='VoidEnvironment', assetPath=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, msRunner, camera, scene, cloud3dTexture );
				
    // Your `Assets` folder path
    //   Defaults to " ./ pxlRooms / *YourRoomEnv* / Assets "
		this.assetPath= assetPath + "Assets/";

    // The FBX file to load for your room
    //   Defaults to " ./ pxlRooms / *YourRoomEnv* / Assets / *YourSceneFile.fbx* "
    this.sceneFile = this.assetPath+"VoidEnvironment.fbx";
		
		// Environment Shader 
		this.spiralizerUniforms={};
		this.materialList={};
    
		// Device Field-of-View
    this.pxlCamFOV={ 'PC':60, 'MOBILE':80 };
    
    // Near-Far Clipping Planes for your room
    this.pxlCamNearClipping = 3;
    this.pxlCamFarClipping = 5000;

    // Room Fog Settings
    this.fogColor=new Color( 0x48415d );
    this.fogExp=.0007;
    this.fog=new FogExp2( this.fogColor, this.fogExp);
        
		// For more information on the `pxlRoom Environment` class, see the documentation -
    //   './docs/pxlRooms.md'
		
  }
	

// -- -- -- -- -- -- -- -- --
// -- Helper Functions  -- -- --
// -- -- -- -- -- -- -- -- -- -- --

  // Spawn in some floating dust particles from pxlEffects; `FloatingDust`
  buildDust(){
    let vertexCount = 800; // Point Count
    let particleScale = 9.5;  // Point Base Scale
    let proxDistance = 315; // Distance particles are visible
    let windDir = new Vector3( 0, -10, 0 ); // Wind Direction
    

    let systemName = "floatingDust";
    let dustSystem = new FloatingDust( this, systemName, true );

    let dustData = dustSystem.getSettings();
    dustData["vertCount"] = vertexCount;
    dustData["pScale"] = particleScale;
    dustData["proxDist"] = proxDistance;
    dustData["windDir"] = windDir;
    dustData["additiveBlend"] = true;
    dustData["pOpacity"] = .5;

    // Use a texture from the internal `pxlAsset` folder
    //dustSystem.setAtlasPath( "sprite_dustLiquid_rgb.jpg", "sprite_dustLiquid_alpha.jpg" );
    //dustSystem.setAtlasPath( "sprite_dustLiquid.png" );
    
    // Generate geometry and load texture resources
    dustSystem.build( dustData );

    this.particleList[systemName] = dustSystem;
  }
      

// -- -- -- -- -- -- -- -- -- --
// -- Post FBX Load & Build - -- --
// -- -- -- -- -- -- -- -- -- -- -- --
    
	fbxPostLoad(){

    // Add an effect
    this.buildDust();
    
    // Add a mostly white light
    var ambientLight = new AmbientLight( 0xf0f0f0 ); 
    this.scene.add( ambientLight );
    
    // Set the camera height --
    this.setUserHeight( 25.5 );

    // -- -- --

    // Important --
    this.booted=true;
    
  }
	
	
// -- -- -- -- -- -- -- -- --
// -- Build Scene & Assets -- --
// -- -- -- -- -- -- -- -- -- -- --

	build(){
    
    this.voidBaseUniforms = {
      'noiseTexture' : { type:'t', value: this.smoothNoiseTexture },
      'fogColor' : { type: "c", value: this.scene.fog.color }
    };

    let mat=this.pxlFile.pxlShaderBuilder( this.voidBaseUniforms, voidBaseVert(), voidBaseFrag() );
    this.materialList[ "VoidBase" ]=mat;
    
    let voidFbxLoader = this.pxlFile.loadRoomFBX( this );//, null, null, true ); // Enables verbose logging

	}
}
