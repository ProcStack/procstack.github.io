import * as THREE from "../../../libs/three/build/three.module.js";
import { ShaderPass } from '../../../libs/three/examples/jsm/postprocessing/ShaderPass.js';
import { campfireLogVert, campfireLogFrag,
         envGroundVert, envGroundFrag } from "./Shaders.js";
import RoomEnvironment from "../../pxlBase/RoomClass.js";

import { BillowSmoke, EmberWisps, FloatingDust } from '../../pxlBase/effects/particles.js';

export class CampfireEnvironment extends RoomEnvironment{
	constructor( roomName='CampfireEnvironment', assetPath=null, pxlFile=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
		super( roomName, assetPath, pxlFile, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
		
		this.assetPath=assetPath+"Assets/";
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
    this.animFile = this.assetPath+"Campfire_RabbitDruidA_anim.fbx";
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
		let	billowAtlasPicks = [...bSmoke.dupeArray([0.0,0.],4), ...bSmoke.dupeArray([0.25,0.],4),
														...bSmoke.dupeArray([0.5,0.0],2), ...bSmoke.dupeArray([0.5,0.25],2),
														...bSmoke.dupeArray([0.5,0.5],2), ...bSmoke.dupeArray([0.5,0.75],2),
														...bSmoke.dupeArray([0.75,0.75],4), ...bSmoke.dupeArray([0.75,0.25],3),
														...bSmoke.dupeArray([0.75,0.25],3) ];
		bSmoke.build( 50, 56, 4, billowAtlasPicks );
		
		
		systemName = "emberWisps";
		let eWisps = new EmberWisps( this, systemName );
		this.particleList[systemName] = eWisps;
		//
		atlasPath = this.assetPath+"sprite_dustLiquid.png"
		eWisps.setAtlasPath( atlasPath );
		//
		let emberAtlasPicks=eWisps.elementDuplicator([ [0.0,0.75], [0.0,0.5], [0.25,0.75], [0.25,0.5] ],4);
		eWisps.build( 30, 6, 4, emberAtlasPicks );
		
		
		systemName = "floatingDust";
		this.particleList[systemName] = new FloatingDust( this, systemName );
		atlasPath = this.assetPath+"sprite_dustFloaters.png"
		this.particleList[systemName].setAtlasPath( atlasPath );
		this.particleList[systemName].build( 1000, 7 );
		
		
		console.log("fbxPostLoad Cabin, since I'll forget, check the unique dict key names")
		console.log(Object.keys(this.particleList));
		console.log(this.particleList);
		
		
		let animFbxLoader = this.pxlFile.loadAnimFBX( this, this.animFile);


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
						//logMat.uniforms.baseTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charred.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
						//logMat.uniforms.midEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_charredEmberGlow.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
						//logMat.uniforms.heavyEmberTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_diffuse_emberGlow.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
						//logMat.uniforms.dataTexture.value = this.pxlUtils.loadTexture( this.assetPath+"log_dataMask.jpg", 4, {"magFilter":THREE.LinearFilter, "minFilter":THREE.NearestMipmapLinearFilter} );
						//logMat.uniforms.noiseTexture.value = this.smoothNoiseTexture;
					
						this.textureList["CampfireLogs"]=logMat;
					}
					
					// Asign Campfire Log material
					//console.log(x)
					//console.log(x.material)
					this.geoList['InstancesObjects'][x].material=logMat;
				}
			}
		}


		
		this.booted=true;
		
		console.log(this.geoList);
				
	}
	
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
	
	// Build Scene and Assets
	build(){
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
		//mat.side=THREE.FrontSide;
    mat.lights= true;
        
		this.textureList[ "environmentGround" ]=mat;*/
    
    
    
  //
  // -- -- -- 
        
	this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
		
	// -- -- -- -- -- -- -- -- -- -- -- -- -- //
		
	}
    
    
}