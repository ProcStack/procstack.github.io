import * as THREE from "../../../libs/three/build/three.module.js";

import { ShaderPass } from '../../../libs/three/examples/jsm/postprocessing/ShaderPass.js';
// If you'd like to add a custom pass to the Effect Composer (Post Processing Effects)
//import { ShaderPass } from '../../libs/three/examples/jsm/postprocessing/ShaderPass.js';
//import { defaultVert, openglShaderVert, openglShaderFrag, openglPostProcess } from "./Shaders.js";
import { voidBaseVert, voidBaseFrag, bgScreenVert, bgScreenFrag } from "./Shaders.js";

// TODO : Why isn't this an expanded Room class??  Why isn't there a Room class???

export class CampfireEnvironment{
	constructor( roomName='CampfireEnvironment',  assetPath=null, pxlFile=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
		this.roomName=roomName;
		this.pxlFile=pxlFile; // Load assets from disk; Scene File, Images
		this.pxlUtils=pxlUtils; // General Utilities
		this.pxlDevice=pxlDevice; // Info on the user's device; movement / looking around, key presses, resolution, etc.
		this.pxlEnv=pxlEnv; // The main environment which addresses your room
		this.booted=false;
		this.initScene=true; // Room needs initiation
		this.active=false; // If room is running or not
        
		// Since your room's assets will live in another folder, for deving, you can put your assets in the "assets" folder for now
		//   When being installed, the latest folder structure will be applied
		this.assetPath=assetPath+"Assets/"; // Assets live in `public/images/rooms/*CampfireEnvironment*`
		//this.assetPath="assets/";
		
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
    this.sceneFile = this.assetPath+"CabinEnvironment.fbx";
		this.envObjName="VoidBase";
        
		// Environment Shader 
		// For values you may want to update on OpenGL Shaders; Either use a set dict like `this.shaderUniforms`,
		//   Or assign this.yourVariable= new THREE.Vector2(0,0);
		//
		//   Any Uniforms using THREE.Vector2, THREE.Vector3, THREE.Quaternion, etc.
		//     Updating the `this.yourVariable.x`, `.y`, `.z`, etc. will automatically update on your shader.
		this.shaderUniforms={}; 
		this.textureList={};
        
		
		// Room warp data
		this.camInitPos=null;
		this.camInitLookAt=null;
		this.camThumbPos=new THREE.Vector3(0,0,-30);
		this.camThumbLookAt=new THREE.Vector3(0,35,-1000);
		this.cameraBooted=false;
		this.cameraPrevPos=new THREE.Vector3(0,0,0);
		this.cameraAimTarget=new THREE.Object3D(0,0,0);
        
		// These options change the Camera's settings
		//   They are ran upon entering the room
		this.pxlCamFOV=(this.pxlDevice.mobile?80:60); // Field Of View
		this.pxlCamZoom=1; // Zoom of Camera
		this.pxlCamAspect=1.3; // This will always be set to the aspect raio of the device, if you need the ratio of the screen
		this.pxlCamNearClipping = 2; // Geometry Z-Depth Near Clipping
		// Note: If you see strange artifacts at a distance, raise your `this.pxlCamNearClipping` value
		this.pxlCamFarClipping = 3000; // Geometry Z-Depth Far Clipping
		this.aspectRatio=null;
		
		// If you'd like to add fog, Exponential Fog is easier to tweak through fogExp, since it's not linear
		this.fogColor=new THREE.Color(.3,.3,.3);
		//this.fogColor=new THREE.Color(0,0,0);
		this.fogExp=.0007;
		this.fog=new THREE.FogExp2( this.fogColor, this.fogExp);
		
		this.startTime=0; // Time Room turns Active; For time sensitive effects (Optional)
		this.runTime=new THREE.Vector2(0, 0); // Curring Room Run Time; Keep as THREE.Vector2() so OpenGL shaders Auto Update when there are {x,y} changes
		this.msRunner=msRunner; // Global Timer THREE.Vector2 Object;  this.msRunner.x - Seconds Since Boot, this.msRunner.y - Average Seconds per Frame
		this.camera=camera; // pxlNav Camera Object
		this.autoCamPaths={}; // Drone Cam Paths; [{ "position", "lookAt", "up" }, {...}]
		this.scene=scene; // THREE.js Scene Object
		this.geoList={}; // Objects which need direct access
		
		// See documentation on 3D Scene Prep & UserData
		//   For now, leave these for reference
		this.portalList={};
		this.collidersExist=false;
		this.colliderActive=false;
		this.colliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
		this.antiColliderActive=false;
		this.antiColliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
		this.antiColliderTopActive=false;
		this.antiColliderTopList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
		
		this.roomWarp=[];
		this.warpPortalTexture=null;
		this.warpZoneRenderTarget=null;
        
		this.cloud3dTexture=null;
        
        //%=
        this.currentShader=null;
        //%
	}
    
// Initiation, for any room prep, before the environment fully loads
	init(){
		this.scene=new THREE.Scene();
		this.scene.fog=this.fog;
		this.scene.background = new THREE.Color( this.fogColor );
		this.aspectRatio=this.camera.aspect;
        
		//this.pxlEnv.newRoom( this );
		//this.initScene=false;
		
		this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture;
	}
    
// When entering the room
	start(){
		this.active=true;
		// Restart room's timer here
		/*if(this.booted){
			this.startTime=this.msRunner.x;
			this.runTime.x= this.active ? this.msRunner.x-this.startTime : 0 ;
		}*/
        
	}
	
// Per-Frame Updates
	step(){
		this.runTime.x=this.msRunner.x;
		/*if(this.booted){
			this.runTime.x= this.active ? this.msRunner.x-this.startTime : 0 ;
		}*/
	}
    
// When leaving the room
	stop(){
		this.active=false;
	}
	
// Runs on window resize; `this.pxlCamAspect` is already updated
  resize( sW, sH ){
  }

// Warp Zone Portal Texture
//   Screenshot prep, runs before saving the Scene's Render to texture
//   UNUSED FOR NOW, used for taking screenshots of the environment, to be used as Textures. ( HDRI, Reflection, Env Maps )
	prepPortalRender(){
	}
    
// Screenshot clean up; Runs after taking the screen shots
	cleanupPortalRender(){
	}
    
// Set the Room Warp Portal plane to display the render from the main room
	setPortalTexture(texture, toRoom=null){
	}

// If you need a custom Effect Composer Pass for your room, return the pass itself
  applyRoomPass( roomComposer=null ){
		/*
		if(roomComposer){
			let yourShaderPass = new ShaderPass(
				new THREE.ShaderMaterial( {
					uniforms: {
							tDiffuse: { value: null },
							noiseTexture: { value: this.cloud3dTexture },
							time:{ value:this.msRunner },
							screenRes: { value: this.pxlDevice.screenRes },
					},
					vertexShader: defaultVert(),
					fragmentShader: openglPostProcess(),
					defines: {}
				} ), "tDiffuse"
			);
			
			return yourShaderPass;
		}
		*/
  }

// Your work's name, your contact info, a little sumary about yourself, and the piece itself
	getArtistInfo(){
    return null;
  }
    
//%=
// For multiple object shaders, return { readShaderVal : PulldownDisplayLabel }
	getShaderList(){
		// let retList = { this.yourObjName : "Object Name", ...  };
		
		let retList={}
		let objList=Object.keys( this.textureList );
		objList.forEach( (k)=>{
			retList[k]=k;
		});
		return retList;
	}
// For initial load of the shader editor, return last shader or a specific shader
	getCurrentShader(){
		return this.currentShader || Object.keys( this.textureList )[0];
	}
// Return Primary Shader Material
	readShader(){
		if( this.currentShader!=null && this.textureList[ this.currentShader ].hasOwnProperty('uniforms')){
			this.textureList[ this.currentShader ].uniforms.sliders.value=new THREE.Vector3();
			this.textureList[ this.currentShader ].needsUpdate=true;
		}
		this.currentShader=objShader;
        
		return this.textureList[ this.currentShader ];
	}
// Updates the Primary Shader Material
	setShader( unis, vert, frag ){
		this.textureList[ this.currentShader ].vertexShader=vert;
		this.textureList[ this.currentShader ].fragmentShader=frag;
		this.textureList[ this.currentShader ].needsUpdate=true;
	}
	//%
    
	
    buildSnow(){
			//sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

			let vertexCount = 12000; // Point Count
			let pScale = 12;  // Point Base Scale

			let geo = new THREE.BufferGeometry();
			let verts = [];
			let seeds = [];
			let atlasId = [];

			const atlasGen=()=>{ return Math.floor( (Math.random() * 4000) % 4 )*.25; };

			for( let x=0; x<vertexCount; ++x ){
				verts.push( 0,0,0 );
				seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*.5+.5) );
				atlasId.push( atlasGen(), atlasGen() );
			}

			let posAttribute = new THREE.Float32BufferAttribute( verts, 3 );
			let seedAttribute = new THREE.Float32BufferAttribute( seeds, 4 );
			let atlasAttribute = new THREE.Float32BufferAttribute( atlasId, 2 );
			//let idAttribute = new THREE.Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
			geo.setAttribute( 'position', posAttribute );
			geo.setAttribute( 'seeds', seedAttribute );
			geo.setAttribute( 'atlas', atlasAttribute );
			//geo.setAttribute( 'id', idAttribute );
        
			let snowUniforms={
				snowTexture:{type:"t",value: this.pxlUtils.loadTexture( this.pxlUtils.assetRoot+"snow.jpg", 1, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} ) },
				pointScale:{type:"f",value: pScale*this.pxlEnv.pxlQuality.screenResPerc },
				intensity:{type:"f",value:1.0},
				rate:{type:"f",value:.035},
			};
			let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
			//let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, dustVert( true ), dustFrag() );
			mtl.side=THREE.DoubleSide;
			mtl.transparent=true;
			mtl.blending=THREE.AdditiveBlending;
			mtl.depthTest=true;
			mtl.depthWrite=false;
			this.textureList[ "snow" ]=mtl;

			let snow = new THREE.Points( geo, mtl );
			snow.sortParticles = false;
			snow.frustumCulled = false;
			this.scene.add( snow );
			snow.layers.set(1);
			snow.pBaseScale=pScale;
			this.geoList['snow']=snow;
    }
    
    buildDust(){
        //sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

			let vertexCount = 2000; // Point Count
			let pScale = 12;  // Point Base Scale

			let geo = new THREE.BufferGeometry();
			let verts = [];
			let seeds = [];
			let atlasId = [];

			const atlasGen=()=>{ return Math.floor( (Math.random() * 4000) % 4 )*.25; };

			for( let x=0; x<vertexCount; ++x ){
				verts.push( 0,0,0 );
				seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*.5+.5) );
				atlasId.push( atlasGen(), atlasGen() );
			}

			let posAttribute = new THREE.Float32BufferAttribute( verts, 3 );
			let seedAttribute = new THREE.Float32BufferAttribute( seeds, 4 );
			let atlasAttribute = new THREE.Float32BufferAttribute( atlasId, 2 );
			//let idAttribute = new THREE.Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
			geo.setAttribute( 'position', posAttribute );
			geo.setAttribute( 'seeds', seedAttribute );
			geo.setAttribute( 'atlas', atlasAttribute );
			//geo.setAttribute( 'id', idAttribute );
        
			let snowUniforms={
				snowTexture:{type:"t",value: this.pxlUtils.loadTexture( this.assetPath+"dustAtlas.png", 4, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} ) },
				noiseTexture:{type:"t",value: this.smoothNoiseTexture },
				pointScale:{type:"f",value: pScale*this.pxlEnv.pxlQuality.screenResPerc },
				intensity:{type:"f",value:1.0},
				rate:{type:"f",value:.035},
			};
			//let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
			let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, dustVert( true ), dustFrag() );
			mtl.side=THREE.DoubleSide;
			mtl.transparent=true;
			// mtl.blending=THREE.AdditiveBlending;
			mtl.depthTest=true;
			mtl.depthWrite=false;
			this.textureList[ "snow" ]=mtl;

			let snow = new THREE.Points( geo, mtl );
			snow.sortParticles = false;
			snow.frustumCulled = false;
			this.scene.add( snow );
			snow.layers.set(1);
			snow.pBaseScale=pScale;
			this.geoList['snow']=snow;
    }
    
	
// Runs after `this.pxlFile.loadRoomFBX()` completes processing your FBX Scene
	fbxPostLoad(){
		console.log("-- ROOM BOOTED");
		//this.buildSnow();
		//this.buildDust();
		
		
		if(this.geoList.hasOwnProperty('GlowPass') && this.geoList['GlowPass'].length > 0){
			this.geoList['GlowPass'].forEach((g)=>{
				//g.layers.set( this.pxlEnv.renderLayerEnum.SCENE )
				//g.layers.toggle( this.pxlEnv.renderLayerEnum.GLOW )
				g.layers.set( this.pxlEnv.renderLayerEnum.GLOW )
			})
		}
		
		if( this.geoList['Sky_EqRect_Mesh'] ){
			let skyMtl = this.geoList['Sky_EqRect_Mesh'].material;
			if( skyMtl.uniforms && skyMtl.uniforms.envDiffuse ){
				skyMtl.uniforms.envDiffuse.value = this.scene.renderTarget.depthTexture;
			}
		}
		
		//this.pxlEnv.renderLayerEnum SCENE PARTICLES GLOW
		//this.geoList['lights']
		
		var ambientLight = new THREE.AmbientLight( 0x101010 ); // soft white light
		this.scene.add( ambientLight );
		
		let lightTypeList = Object.keys( this.lightList );
		if(lightTypeList.length>0){
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
		
		/*
		// Since the lights don't exist prior to loading the FBX,  the uniforms must be set here
		this.voidBaseUniforms = {
			'baseCd' : { type:'f', value: .1 },
			'snowNormal' : {type:"t",value: this.pxlUtils.loadTexture( this.assetPath+"snowNormalMap.jpg" ) },
			//'snowNormal' : {type:"t",value: this.pxlUtils.loadTexture( this.assetPath+"snowNormalWorldMap.jpg" ) },
			'light0Cd' : { value: this.geoList['lights'][0].color.clone().multiplyScalar( this.geoList['lights'][0].intensity ) },
			'light0Rot' : { value: new THREE.Vector3(0,0,1).applyQuaternion( this.geoList['lights'][0].quaternion ) },
			'light1Cd' : { value: this.geoList['lights'][1].color.clone().multiplyScalar( this.geoList['lights'][1].intensity ) },
			'light1Rot' : { value: new THREE.Vector3(0,0,1).applyQuaternion( this.geoList['lights'][1].quaternion ) },
			'fogColor' : { type: "c", value: this.scene.fog.color },
		};
		this.textureList[ "VoidBase" ].uniforms=this.voidBaseUniforms;
		this.geoList['VoidBase'].geometry.computeVertexNormals(true);
		this.geoList['VoidBase'].geometry.computeTangents();
		this.geoList['VoidBase'].material.shading = THREE.SmoothShading;
		//this.geoList['VoidBase'].material.fog = true;
		this.geoList['VoidBase'].material.needsUpdate=true;
			*/
			
		/* let bgUniforms={
		'noiseTexture' : {type:"t",value: this.cloud3dTexture },
					'rate' : {type:"f", value:1},
			};
			let bgObject=this.pxlEnv.buildBackgroundObject(bgUniforms, bgScreenVert(), bgScreenFrag() );
			bgObject.layers.set(1);
			this.textureList[ "bgObject" ]=bgObject.material;
			this.scene.add( bgObject );
			this.geoList['bgObject']=bgObject;*/
		this.booted=true;
	}
	
	
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
	
// Build Scene and Assets

	build(){
		this.voidBaseUniforms = {};
        
		/*let mat=this.pxlFile.pxlShaderBuilder( {}, voidBaseVert(), voidBaseFrag() );
		mat.side=THREE.FrontSide;
        
		this.textureList[ "VoidBase" ]=mat;*/
        
		let voidFbxLoader = this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
		
	// -- -- -- -- -- -- -- -- -- -- -- -- -- //
		
	}   
}