import * as THREE from "../../../libs/three/build/three.module.js";
//import { ProjectedMaterial } from "./ProjectedMaterial.js";
import { ShaderPass } from '../../../libs/three/examples/jsm/postprocessing/ShaderPass.js';
import { voidBaseVert, voidBaseFrag, bgScreenVert, bgScreenFrag } from "./Shaders.js";
import { snowVert, snowFrag, dustVert, dustFrag } from "../../pxlBase/shaders/particles.js";

export class VoidEnvironment{
	constructor( roomName='VoidEnvironment', assetPath=null, pxlFile=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
		this.roomName=roomName;
		this.pxlFile=pxlFile;
		this.pxlUtils=pxlUtils;
		this.pxlDevice=pxlDevice;
		this.pxlEnv=pxlEnv;
		this.booted=false;
		this.initScene=true;
		this.active=true;
		this.assetPath=assetPath+"Assets/";
		
		this.envObjName="VoidBase";
		// Environment Shader 
		this.spiralizerUniforms={};
		this.textureList={};
		
		// Room warp data
		this.camInitPos=null;
		this.camInitLookAt=null;
		this.camThumbPos=new THREE.Vector3(0,0,-30);
		this.camThumbLookAt=new THREE.Vector3(0,35,-1000);
		this.cameraBooted=false;
		this.cameraPrevPos=new THREE.Vector3(0,0,0);
		this.cameraAimTarget=new THREE.Object3D(0,0,0);
        this.camHoldWarpPos=true;
		this.pxlCamFOV=(pxlDevice.mobile?80:60);
		this.pxlCamZoom=1;
		this.pxlCamAspect=1;
        this.pxlCamNearClipping = 5;
        this.pxlCamFarClipping = 10000;
		
        // this.fogColor=new THREE.Color(.3,.3,.3);
        this.fogColor=new THREE.Color(0,0,0);
        this.fogExp=.0007;
        this.fog=new THREE.FogExp2( this.fogColor, this.fogExp);
        
		this.userAvatarGroup=new THREE.Group();
		this.packedTextureMaterial=null;
		this.coreTextureMaterial=null;
		this.projectedMaterial=null;
		this.voidMaterial=null;
		this.holoMaterial=null;
		this.aspectRatio=null;
		this.flag=null;
		this.initPos = [];
		this.finalPos = [];
		this.midPos = new THREE.Vector3(0,30,-50);

		this.perspectiveInstances = 160;
		
		this.startTime=0;
		this.runTime=new THREE.Vector2(0, 0);
		this.msRunner=msRunner;
		this.camera=camera;
		this.autoCamPaths={};
		this.scene=scene;
		this.geoList={}
		
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
        
        this.worldPosMaterial=null;
		this.worldPosRenderTarget=null;
		this.spiralizerPass=null;
		
        this.bloomPreState=false;
        
		this.cloud3dTexture=null;
		this.smoothNoiseTexture=null;
        
        //%=
        this.currentShader=null;
        //%
	}
	init(){
        this.scene.fog=this.fog;
        this.scene.background = new THREE.Color( this.fogColor );//pxlEnv.fogColor;
        this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture;
    }
// Run on init room warp; reset room values
	start(){
        /*this.spiralizerPass.enabled=true;
        this.bloomPreState=this.pxlEnv.roomGlowPass.enabled;	
        this.pxlEnv.roomGlowPass.enabled=false;	*/
    }
	
// Per-Frame Render updates
	step(){
		this.runTime.x=this.msRunner.x;
        
        // Render world positions for composer
        //   There must be a better way to get world positions,
        //     The render pass must have an option for this... Or could be added hHmmMMmmm
        /*this.scene.overrideMaterial=this.worldPosMaterial;
        this.pxlEnv.engine.setRenderTarget(this.worldPosRenderTarget);
        this.pxlEnv.engine.clear();
        this.pxlEnv.engine.render( this.scene, this.camera );
        this.scene.overrideMaterial=null;
        this.pxlEnv.engine.setRenderTarget(null);*/
        
	}
// When leaving the room
	stop(){
        //this.spiralizerPass.enabled=false;
        //this.pxlEnv.roomGlowPass.enabled=this.bloomPreState;
    }
	
// Runs on window resize
    resize( sW, sH ){
        /*if(this.worldPosRenderTarget){
            this.worldPosRenderTarget.setSize( sW, sH );
        }
        if(this.spiralizerPass){
            this.spiralizerPass.setSize( sW, sH );
        }*/
    }
	
// Warp Zone Portal Texture
	prepPortalRender(){
		this.geoList['intro'].visible=false;
		this.geoList['MainRoomWarp'].visible=false;
	}
	cleanupPortalRender(){
		this.geoList['intro'].visible=true;
		this.geoList['MainRoomWarp'].visible=true;
	}
// Set the Room Warp Portal plane to display the render from the main room
	setPortalTexture(texture, toRoom=null){
		this.geoList['MainRoomWarp'].material.map=texture;
	}
    
    applyRoomPass( roomComposer=null ){
        /*if(roomComposer){
            this.worldPosMaterial=new THREE.ShaderMaterial({
                uniforms:{
                    camNear: { type:"f", value: 1 },
                    camFar: { type:"f", value: 900 } // Measured in the Scene file, 885.61
                },
                vertexShader: worldPositionVert(),
                fragmentShader: worldPositionFrag()
            });
            //this.worldPosMaterial.side=THREE.DoubleSide;
            //this.worldPosMaterial.side=THREE.FrontSide;
            
            this.spiralizerPass = new ShaderPass(
                new THREE.ShaderMaterial( {
                    uniforms: {
                        tDiffuse: { value: null },
                        localPos: { value: this.pxlUtils.loadTexture(this.assetPath+"SpiralizerFadeMap_1k.jpg") },
                        worldPos: { value: this.worldPosRenderTarget.texture },
                        noiseTexture: { value: this.pxlEnv.cloud3dTexture },
                        camMat:{ value:this.camera.matrixWorld },
                        marker: { value: new THREE.Vector3( -619.01, 67.856, 240.177) },
                        time:{ value:this.msRunner },
                        screenRes: { value: this.pxlDevice.screenRes },
                    },
                    vertexShader: cameraCalcVert(),
                    fragmentShader: spiralizerPostProcess(),
                    defines: {}
                } ), "tDiffuse"
            );
            this.spiralizerPass.enabled=false;
            
            return this.spiralizerPass;
        }*/
    }
	
	getArtistInfo(){
        return null;
    }
	
	//%=
	// Return Primary Shader Material
    getShaderList(){
        let retList={}
        let objList=Object.keys( this.textureList );
        objList.forEach( (k)=>{
            retList[k]=k
        });
        return retList;
    }
    getCurrentShader(){
        return this.currentShader || Object.keys( this.textureList )[0];
    }
	readShader( objShader="" ){
        if( this.currentShader!=null && this.textureList[ this.currentShader ].hasOwnProperty('uniforms')){
            this.textureList[ this.currentShader ].uniforms.sliders.value=new THREE.Vector3();
            this.textureList[ this.currentShader ].needsUpdate=true;
        }
        this.currentShader=objShader;
        
		return this.textureList[ this.currentShader ];
	}
	setShader( unis, vert, frag ){
		//thisObj.geoList[c.name];
        //this.worldPosMaterial.vertexShader=vert;
        //this.worldPosMaterial.needsUpdate=true;
        
        
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
    
    
    
	fbxPostLoad(){
        //this.buildSnow();
        this.buildDust();
        
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
        
        
       /* let bgUniforms={
			'noiseTexture' : {type:"t",value: this.cloud3dTexture },
            'rate' : {type:"f", value:1},
        };
        let bgObject=this.pxlEnv.buildBackgroundObject(bgUniforms, bgScreenVert(), bgScreenFrag() );
        bgObject.layers.set(1);
        this.textureList[ "bgObject" ]=bgObject.material;
        this.scene.add( bgObject );
        this.geoList['bgObject']=bgObject;*/
    }
	
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
	
// Build Scene and Assets

	build(){
		
        this.voidBaseUniforms = {};
        
		let mat=this.pxlFile.pxlShaderBuilder( {}, voidBaseVert(), voidBaseFrag() );
		mat.side=THREE.FrontSide;
        
		this.textureList[ "VoidBase" ]=mat;
        
		let voidFbxLoader = this.pxlFile.loadRoomFBX( this, this.assetPath+"VoidEnvironment.fbx", 'voidEnv', this.textureList);
		
	// -- -- -- -- -- -- -- -- -- -- -- -- -- //
		
		this.booted=true;
	}
    
    
}