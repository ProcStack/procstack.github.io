
import {
  Vector2,
  Vector3,
  Color,
  Group,
  Object3D,
  AmbientLight,
  FogExp2,
  RepeatWrapping,
  UniformsUtils,
  UniformsLib,
  FrontSide
} from "../../libs/three/three.module.min.js";
/*ShaderMaterial*/

import { envGroundVert, envGroundFrag, grassClusterVert, grassClusterFrag } from "./Shaders.js";
import { RoomEnvironment, pxlShaders, pxlEffects } from "../../pxlNav.esm.js";

const pxlPrincipledVert = pxlShaders.objects.pxlPrincipledVert;
const pxlPrincipledFrag = pxlShaders.objects.pxlPrincipledFrag;
const FloatingDust = pxlEffects.pxlParticles.FloatingDust;

export class FieldEnvironment extends RoomEnvironment{
  constructor( roomName='FieldEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlAnim, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    
		this.assetPath=assetPath+"Assets/";
		this.assetPath="./js/pxlRooms/FieldEnvironment/Assets/";
    
    this.sceneFile = this.assetPath+"FieldEnvironment.fbx";
    //this.sceneFile = this.assetPath+"ForceField.fbx";
		
		// Environment Shader 
		this.spiralizerUniforms={};
		this.materialList={};
    
		// Room warp data
		this.camInitPos=null;
		this.camInitLookAt=null;
		this.camThumbPos=new Vector3(0,0,-30);
		this.camThumbLookAt=new Vector3(0,35,-1000);
		this.cameraBooted=false;
		this.cameraPrevPos=new Vector3(0,0,0);
		this.cameraAimTarget=new Object3D(0,0,0);
    this.camHoldWarpPos=true;
		
    this.pxlCamFOV=(pxlDevice.mobile?80:60);
		this.pxlCamZoom=1;
		this.pxlCamAspect=1;
    this.pxlCamNearClipping = 5;
    this.pxlCamFarClipping = 10000;

    // this.fogColor=new Color(.3,.3,.3);
    this.fogColor=new Color(.005,.01,.025);
    this.fogExp=.0007;
    this.fog=new FogExp2( this.fogColor, this.fogExp);
        
		this.userAvatarGroup=new Group();
		this.packedTextureMaterial=null;
		this.coreTextureMaterial=null;
		this.projectedMaterial=null;
		this.voidMaterial=null;
		this.holoMaterial=null;
		this.aspectRatio=null;
		this.flag=null;
		this.initPos = [];
		this.finalPos = [];
		this.midPos = new Vector3(0,30,-50);

		this.perspectiveInstances = 160;
		
		this.startTime=0;
		this.runTime=new Vector2(0, 0);
		this.msRunner=msRunner;
		this.camera=camera;
		this.autoCamPaths={};
		this.scene=scene;
		this.lightList={}
		this.geoList={}
		this.glassGroup=null;
		this.glassList=[]
		
		this.portalList={};
		this.hoverableExists=false;
		this.hoverableList=[];
    this.hoverableObj=null;
		this.clickableExists=false;
		this.clickableList=[];
    this.clickableObj=null;
    
    
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
        this.scene.background = this.fogColor ;//pxlEnv.fogColor;
        this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture;
        
    }
// Run on init room warp; reset room values
	start(){
        /*this.spiralizerPass.enabled=true;
        this.bloomPreState=this.pxlEnv.roomBloomPass.enabled;	
        this.pxlEnv.roomBloomPass.enabled=false;	*/
    }
	
// Per-Frame Render updates
	step(){
		this.runTime.x=this.msRunner.x;
    
        //this.pxlEnv.engine.setClearColor(this.pxlEnv.fogColor, 0);
        
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
        //this.pxlEnv.roomBloomPass.enabled=this.bloomPreState;
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
          this.worldPosMaterial=new ShaderMaterial({
              uniforms:{
                  camNear: { type:"f", value: 1 },
                  camFar: { type:"f", value: 900 } // Measured in the Scene file, 885.61
              },
              vertexShader: worldPositionVert(),
              fragmentShader: worldPositionFrag()
          });
          //this.worldPosMaterial.side=DoubleSide;
          //this.worldPosMaterial.side=FrontSide;
          
          this.spiralizerPass = new ShaderPass(
              new ShaderMaterial( {
                  uniforms: {
                      tDiffuse: { value: null },
                      localPos: { value: this.pxlUtils.loadTexture(this.assetPath+"SpiralizerFadeMap_1k.jpg") },
                      worldPos: { value: this.worldPosRenderTarget.texture },
                      noiseTexture: { value: this.pxlEnv.cloud3dTexture },
                      camMat:{ value:this.camera.matrixWorld },
                      marker: { value: new Vector3( -619.01, 67.856, 240.177) },
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
	
  setFog( color ){
    // this.geoList["skySemiSphere"].material.uniforms.skyColor.value.x= this.fog.color.r*10.0 ;
    // this.geoList["skySemiSphere"].material.uniforms.skyColor.value.y= this.fog.color.g*10.0 ;
    // this.geoList["skySemiSphere"].material.uniforms.skyColor.value.z= this.fog.color.b*10.0 ;
    // this.geoList["skySemiSphere"].material.uniforms.fogColor.value.r=this.fog.color.r*5;
    // this.geoList["skySemiSphere"].material.uniforms.fogColor.value.g=this.fog.color.g*5;
    // this.geoList["skySemiSphere"].material.uniforms.fogColor.value.b=this.fog.color.b*5;
  }
      
	//%=
	// Return Primary Shader Material
    getShaderList(){
        let retList={}
        let objList=Object.keys( this.materialList );
        objList.forEach( (k)=>{
            retList[k]=k
        });
        return retList;
    }
    getCurrentShader(){
        return this.currentShader || Object.keys( this.materialList )[0];
    }
	readShader( objShader="" ){
        if( this.currentShader!=null && this.materialList[ this.currentShader ].hasOwnProperty('uniforms')){
            this.materialList[ this.currentShader ].uniforms.sliders.value=new Vector3();
            this.materialList[ this.currentShader ].needsUpdate=true;
        }
        this.currentShader=objShader;
        
		return this.materialList[ this.currentShader ];
	}
	setShader( unis, vert, frag ){
        if( this.emitterList && this.emitterList[ this.currentShader ] ){
          if( this.emitterList[ this.currentShader ].Particles.length > 0 ){
            this.emitterList[ this.currentShader ].Particles.forEach( (p)=>{
              let mtl = p.material;
              mtl.vertexShader=vert;
              mtl.fragmentShader=frag;
              mtl.needsUpdate=true;
            });
          }
        }
        
        this.materialList[ this.currentShader ].vertexShader=vert;
        this.materialList[ this.currentShader ].fragmentShader=frag;
        this.materialList[ this.currentShader ].needsUpdate=true;
	}
	//%
	
    
    buildDust(){
      let vertexCount = 1200; // Point Count
      let pScale = 11;  // Point Base Scale

      let systemName = "floatingDust";
      let dustSystem = new FloatingDust( this, systemName, 200 );

      // Use a texture from the internal pxlNav asset folder
      dustSystem.useInternalAsset( "sprite_dustAtlas.png" );
      
      // Generate geometry and load texture resources
      dustSystem.build( vertexCount, pScale );

      this.particleList[systemName] = dustSystem;
    }
    


    castRay( isClick, mButton ){
      if( ( !isClick && !this.hoverableExists ) || ( isClick && !this.clickableExists ) ){
        return;
      }
      
      let castableObjects = []
      if( !isClick && this.hoverableExists ) {
        castableObjects = this.hoverableList;
      }else if( isClick && this.clickableExists ){
        castableObjects = this.clickableList;
      }
      
      if(castableObjects.length>0){
      
        let mouseScreenSpace=new Vector2( this.pxlDevice.mouseX/this.pxlDevice.sW*2-1, -this.pxlDevice.mouseY/this.pxlDevice.sH*2+1 );
        this.pxlEnv.pxlCamera.objRaycast.setFromCamera(mouseScreenSpace, this.pxlEnv.pxlCamera.camera );
        var rayHits=[];
      
        rayHits=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(castableObjects);
      }
    }
    
    
	fbxPostLoad(){
        //this.buildSnow();
        this.buildDust();
        // if(this.geoList['Cobble_Walls']){
          // console.log(this.geoList['Cobble_Walls'])
        // }
        if(this.geoList['ForceField']){}
        
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
        
        var ambientLight = new AmbientLight( 0x101010 ); // soft white light
        this.scene.add( ambientLight );
        
        
        
        if( this.shaderGeoList ) {
          for( const x in this.shaderGeoList){
            let curObj = this.shaderGeoList[x];
            if( curObj.userData && curObj.userData.Shader == "pxlPrincipled"){
              let shaderUniforms = UniformsUtils.merge(
                  [
                    UniformsLib[ "common" ],
                    UniformsLib[ "lights" ],
                    UniformsLib[ "shadowmap" ],
                    {
                      'dTexture' : { type:'t', value: null },
                      'noiseTexture' : { type:'t', value: null },
                      'detailTexture' : { type:'t', value: null },
                      'cdMult' : { type:'f', value: 1 },
                      'fogColor' : { type: "c", value: this.scene.fog.color },
                    }
                  ]
              )
              var defines = {};
              defines[ "USE_MAP" ] = "";
              
              let ShaderParms = {};
              let useLights = true
              let useShadows = curObj.userData.castShadow == true || curObj.userData.receiveShadow == true
              useShadows = false
              let useFog = true;
              
              let useColor = false;
              if( !curObj.material.map ){
                useColor = curObj.material.color.clone();
              }
              
              // Add ShaderParms support
              if( curObj.userData.ShaderParms && curObj.userData.ShaderParms != "" ){
                ShaderParms = JSON.parse(curObj.userData.ShaderParms);
              }
              
              // Count up the shadows
              let pointShadowLightCount = 0;
              if( this.lightList.hasOwnProperty("PointLight") ){
                this.lightList.PointLight.forEach( (l)=>{
                  if( l.castShadow ){
                    pointShadowLightCount++;
                  }
                });
              }
              pointShadowLightCount=0;
              let mat=this.pxlFile.pxlShaderBuilder(
                  shaderUniforms,
                  pxlPrincipledVert( useShadows ),
                  pxlPrincipledFrag( ShaderParms, useColor, useFog, useLights, useShadows, pointShadowLightCount ),
                  defines
                );

              //mat.side=FrontSide;
              mat.transparent= false;
              mat.lights= true;
              if(!useColor){
                mat.uniforms.dTexture.value = curObj.material.map;
              }
              mat.uniforms.noiseTexture.value = this.cloud3dTexture;
              mat.uniforms.detailTexture.value = this.pxlEnv.detailNoiseTexture;
                  
              curObj.material=mat;
              this.materialList[ curObj.name ] = mat;
            }
          }
        }
        
        
        this.setUserHeight( 15 );
        //this.pxlAutoCam.toggleAutoCam( );
        this.booted=true;
    }
	
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
	
// Build Scene and Assets

	build(){
    
    let envGroundUniforms = UniformsUtils.merge(
            [
              UniformsLib[ "common" ],
              UniformsLib[ "lights" ],
              /*UniformsLib[ "shadowmap" ],*/
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
    let textureOptions = {
        "wrapS" : RepeatWrapping,
        "wrapT" : RepeatWrapping,
    };
    envGroundUniforms.fogColor.value = this.scene.fog.color;
    envGroundUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Diffuse.jpg" );
    envGroundUniforms.dirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"Dirt_Diffuse.jpg" );
    envGroundUniforms.noiseTexture.value = this.cloud3dTexture;
    envGroundUniforms.uniformNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );
    envGroundUniforms.crossNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_NCross.jpg" );
    
		let environmentGroundMat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag(1) );
    environmentGroundMat.lights= true;
    
    envGroundUniforms.uniformNoise.value.wrapS = RepeatWrapping;
    envGroundUniforms.uniformNoise.value.wrapT = RepeatWrapping;
    envGroundUniforms.crossNoise.value.wrapS = RepeatWrapping;
    envGroundUniforms.crossNoise.value.wrapT = RepeatWrapping;
    envGroundUniforms.dirtDiffuse.value.wrapS = RepeatWrapping;
    envGroundUniforms.dirtDiffuse.value.wrapT = RepeatWrapping;
    
    
  //
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
    
        let grassMat=this.pxlFile.pxlShaderBuilder( grassClusterUniforms, grassClusterVert(), grassClusterFrag(1) );
        grassMat.side = FrontSide;
        grassMat.lights = true;
        grassMat.transparent = false;
        
            
        
        
        // -- -- --
        
        this.materialList[ "EnvGround_geo" ] = environmentGroundMat;
        this.materialList[ "grassClusterA_geo" ] = grassMat;
        
        
  //
    // -- -- -- 
        
		let voidFbxLoader = this.pxlFile.loadRoomFBX( this );
		
	// -- -- -- -- -- -- -- -- -- -- -- -- -- //
		
	}
    
    
}