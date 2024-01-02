import * as THREE from "../../../libs/three/build/three.module.js";
import { ShaderPass } from '../../../libs/three/examples/jsm/postprocessing/ShaderPass.js';
import { pxlPrincipledVert, pxlPrincipledFrag,
				 campfireLogVert, campfireLogFrag,
         envGroundVert, envGroundFrag,
				 dustVert, dustFrag, smokeFrag, smokeVert,
				 emberWispsVert, emberWispsFrag } from "./Shaders.js";


export class CampfireEnvironment{
	constructor( roomName='CampfireEnvironment', assetPath=null, pxlFile=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
		this.roomName=roomName;
		this.pxlFile=pxlFile;
		this.pxlUtils=pxlUtils;
		this.pxlDevice=pxlDevice;
		this.pxlEnv=pxlEnv;
		this.booted=false;
		this.initScene=true;
		this.active=true;
		this.assetPath=assetPath+"Assets/";
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
		
		this.envObjName="environmentGround";
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
    this.fogColor=new THREE.Color(.01,.02,.05);
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
        this.cloud3dTexture=this.pxlEnv.cloud3dTexture;
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
        
        this.textureList[ this.currentShader ].vertexShader=vert;
        this.textureList[ this.currentShader ].fragmentShader=frag;
        this.textureList[ this.currentShader ].needsUpdate=true;
	}
	//%
	
    
    buildDust(){
        //sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

        let vertexCount = 1000; // Point Count
            let pScale = 8;  // Point Base Scale

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
        
				
        let lightPos=[];
        let lightCount=0;
        if( this.lightList.hasOwnProperty("PointLight") ){
          lightCount = this.lightList.PointLight.length;
          this.lightList.PointLight.forEach( (l)=>{
            lightPos.push( l.position.clone() )
          })
        }
				
        let dustUniforms={
          atlasTexture:{type:"t",value: null },
          noiseTexture:{type:"t",value: null },
          time:{type:"f",value: this.msRunner },
          pointScale:{type:"f",value: pScale*this.pxlEnv.pxlQuality.screenResPerc },
          intensity:{type:"f",value:1.0},
          rate:{type:"f",value:.035},
          lightPos:{value:lightPos},
        };
            //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
        let mtl = this.pxlFile.pxlShaderBuilder( dustUniforms, dustVert( lightCount ), dustFrag() );
        mtl.side=THREE.DoubleSide;
        mtl.transparent=true;
        // mtl.blending=THREE.AdditiveBlending;
				mtl.uniforms.atlasTexture.value = this.pxlUtils.loadTexture( this.assetPath+"sprite_dustFloaters.png", 4, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} );
				mtl.uniforms.noiseTexture.value = this.softNoiseTexture;
        mtl.depthTest=true;
        mtl.depthWrite=false;
        this.textureList[ "dust" ]=mtl;

        let dust = new THREE.Points( geo, mtl );
        dust.sortParticles = false;
        dust.frustumCulled = false;
        this.scene.add( dust );
        dust.layers.set(1);
        dust.pBaseScale=pScale;
        this.geoList['dust']=dust;
    }
		
    buildSmoke(){
        //sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

        let vertexCount = 40; // Point Count
            let pScale = 56;  // Point Base Scale

        let geo = new THREE.BufferGeometry();
        let verts = [];
        let seeds = [];
        let atlasId = [];
				
				const dupe=(val,count)=>{ return Array.from({length:count}).fill(val) };
				const atlasPicks = [...dupe([0.0,0.],4),...dupe([0.25,0.],4),...dupe([0.5,0.0],2),
														...dupe([0.5,0.25],2),...dupe([0.5,0.5],2),...dupe([0.5,0.75],2),
														...dupe([0.75,0.75],4),...dupe([0.75,0.25],3),...dupe([0.75,0.25],3)];
        const atlasPicker=()=>{ return atlasPicks[Math.floor( (Math.random() * 92314.75) % atlasPicks.length )]; };

        for( let x=0; x<vertexCount; ++x ){
					verts.push( 0,0,0 );
          seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*.5+.5) );
          atlasId.push( ...atlasPicker() );
        }
				
        let posAttribute = new THREE.Float32BufferAttribute( verts, 3 );
        let seedAttribute = new THREE.Float32BufferAttribute( seeds, 4 );
        let atlasAttribute = new THREE.Float32BufferAttribute( atlasId, 2 );
        //let idAttribute = new THREE.Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
        geo.setAttribute( 'position', posAttribute );
        geo.setAttribute( 'seeds', seedAttribute );
        geo.setAttribute( 'atlas', atlasAttribute );
        //geo.setAttribute( 'id', idAttribute );
        
				
        let lightPos=[];
        let lightCount=0;
        if( this.lightList.hasOwnProperty("PointLight") ){
          lightCount = this.lightList.PointLight.length;
          this.lightList.PointLight.forEach( (l)=>{
            lightPos.push( l.position.clone() )
          })
        }
				
        let dustUniforms={
          atlasTexture:{type:"t",value: null },
          noiseTexture:{type:"t",value: null },
          time:{type:"f",value: this.msRunner },
          pointScale:{type:"f",value: pScale*this.pxlEnv.pxlQuality.screenResPerc },
          intensity:{type:"f",value:1.0},
          rate:{type:"f",value:1.2},
          lightPos:{value:lightPos},
        };
            //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
        let mtl = this.pxlFile.pxlShaderBuilder( dustUniforms, smokeVert(), smokeFrag() );
        mtl.side=THREE.DoubleSide;
        mtl.transparent=true;
        // mtl.blending=THREE.AdditiveBlending;
				mtl.uniforms.atlasTexture.value = this.pxlUtils.loadTexture( this.assetPath+"sprite_dustLiquid.png", 4, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} );
				mtl.uniforms.noiseTexture.value = this.softNoiseTexture;
        mtl.depthTest=true;
        mtl.depthWrite=false;
        this.textureList[ "smoke" ]=mtl;

        let dust = new THREE.Points( geo, mtl );
        dust.sortParticles = false;
        dust.frustumCulled = false;
        this.scene.add( dust );
        dust.layers.set(1);
        dust.pBaseScale=pScale;
        this.geoList['smoke']=dust;
    }
    
    buildEmberWisps(){
        //sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

        let vertexCount = 30; // Point Count
            let pScale = 6;  // Point Base Scale

        let geo = new THREE.BufferGeometry();
        let verts = [];
        let seeds = [];
        let atlasId = [];

				const dupe=(val,count)=>{ return Array.from({length:count}).fill(val) };
				const atlasPicks = [...dupe([0.0,0.75],4),...dupe([0.0,0.5],4),
														...dupe([0.25,0.75],4),...dupe([0.25,0.5],4)];
        const atlasPicker=()=>{ return atlasPicks[Math.floor( (Math.random() * 92314.75) % atlasPicks.length )]; };

        for( let x=0; x<vertexCount; ++x ){
					verts.push( 0,0,0 );
          seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*2-1) );
          atlasId.push( ...atlasPicker() );
        }

        let posAttribute = new THREE.Float32BufferAttribute( verts, 3 );
        let seedAttribute = new THREE.Float32BufferAttribute( seeds, 4 );
        let atlasAttribute = new THREE.Float32BufferAttribute( atlasId, 2 );
        //let idAttribute = new THREE.Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
        geo.setAttribute( 'position', posAttribute );
        geo.setAttribute( 'seeds', seedAttribute );
        geo.setAttribute( 'atlas', atlasAttribute );
        //geo.setAttribute( 'id', idAttribute );
        
				
        let lightPos=[];
        let lightCount=0;
        if( this.lightList.hasOwnProperty("PointLight") ){
          lightCount = this.lightList.PointLight.length;
          this.lightList.PointLight.forEach( (l)=>{
            lightPos.push( l.position.clone() )
          })
        }
				
        let dustUniforms={
          atlasTexture:{type:"t",value: null },
          noiseTexture:{type:"t",value: null },
          time:{type:"f",value: this.msRunner },
          pointScale:{type:"f",value: pScale*this.pxlEnv.pxlQuality.screenResPerc },
          intensity:{type:"f",value:1.0},
          rate:{type:"f",value:5.5},
          lightPos:{value:lightPos},
        };
            //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
        let mtl = this.pxlFile.pxlShaderBuilder( dustUniforms, emberWispsVert(), emberWispsFrag() );
        mtl.side=THREE.DoubleSide;
        mtl.transparent=true;
        // mtl.blending=THREE.AdditiveBlending;
				mtl.uniforms.atlasTexture.value = this.pxlUtils.loadTexture( this.assetPath+"sprite_dustLiquid.png", 4, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} );
				mtl.uniforms.noiseTexture.value = this.softNoiseTexture;
        mtl.depthTest=true;
        mtl.depthWrite=false;
        this.textureList[ "wisps" ]=mtl;

        let dust = new THREE.Points( geo, mtl );
        dust.sortParticles = false;
        dust.frustumCulled = false;
        this.scene.add( dust );
        dust.layers.set(1);
        dust.pBaseScale=pScale;
        this.geoList['wisps']=dust;
    }
    
    
    
    castRay( isClick, mButton ){
      if( ( !isClick && !this.hoverableExists ) || ( isClick && !this.clickableExists ) ){
        //console.log("No Cickable / Hoverable Objects Found");
        return;
      }
      
      let castableObjects = []
      if( !isClick && this.hoverableExists ) {
        castableObjects = this.hoverableList;
      }else if( isClick && this.clickableExists ){
        castableObjects = this.clickableList;
      }
      
      if(castableObjects.length>0){
      
        let mouseScreenSpace=new THREE.Vector2( this.pxlDevice.mouseX/this.pxlDevice.sW*2-1, -this.pxlDevice.mouseY/this.pxlDevice.sH*2+1 );
        this.pxlEnv.pxlCamera.objRaycast.setFromCamera(mouseScreenSpace, this.pxlEnv.pxlCamera.camera );
        var rayHits=[];
      
        rayHits=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(castableObjects);
      }
    }
    
    
	fbxPostLoad(){
				// Find Point light count for adjusted shadowing
				let pointLightCount = 0;
        if( this.lightList.hasOwnProperty("PointLight") ){
          pointLightCount = this.lightList.PointLight.length;
        }
        
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
        
        
        var ambientLight = new THREE.AmbientLight( 0x303030 ); // soft white light
				//this.lightList.push( ambientLight );
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
        
        
        if( this.shaderGeoList ) {
          for( const x in this.shaderGeoList){
            let curObj = this.shaderGeoList[x];
            if( curObj.userData && curObj.userData.Shader == "pxlPrincipled"){
              
              let shaderUniforms = THREE.UniformsUtils.merge(
                  [
                    THREE.UniformsLib[ "common" ],
                    THREE.UniformsLib[ "lights" ],
                    THREE.UniformsLib[ "shadowmap" ],
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
              let useFog = true;
              
              let useColor = false;
              if( !curObj.material.map ){
                useColor = curObj.material.color.clone();
              }
              
              // Add ShaderParms support
              if( curObj.userData.ShaderParms && curObj.userData.ShaderParms != "" ){
                ShaderParms = JSON.parse(curObj.userData.ShaderParms);
              }
              
              let mat=this.pxlFile.pxlShaderBuilder(
                        shaderUniforms,
                        pxlPrincipledVert( useShadows ),
                        pxlPrincipledFrag( ShaderParms, useColor, useFog, useLights, useShadows, pointLightCount ),
                        defines
                      );
              //mat.side=THREE.FrontSide;
              mat.transparent= false;
              mat.lights= true;
              if(!useColor){
                mat.uniforms.dTexture.value = curObj.material.map;
              }
              mat.uniforms.noiseTexture.value = this.cloud3dTexture;
              mat.uniforms.detailTexture.value = this.pxlEnv.detailNoiseTexture;
                  
              curObj.material=mat;
              this.textureList[ curObj.name ] = mat;
            }
          }
        }
        
				
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
				
				
				
				this.buildDust();
				this.buildSmoke();
				this.buildEmberWisps();
				
				/*
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
				let textureOptions = {
						"wrapS" : THREE.RepeatWrapping,
						"wrapT" : THREE.RepeatWrapping,
				};
				envGroundUniforms.fogColor.value = this.scene.fog.color;
				envGroundUniforms.diffuse.value = this.pxlUtils.loadTexture( this.assetPath+"EnvGround_Diffuse.jpg" );
				envGroundUniforms.dirtDiffuse.value = this.pxlUtils.loadTexture( this.assetPath+"Dirt_Diffuse.jpg" );
				envGroundUniforms.noiseTexture.value = this.cloud3dTexture;
				envGroundUniforms.uniformNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_UniformWebbing.jpg" );
				envGroundUniforms.crossNoise.value = this.pxlUtils.loadTexture( this.assetPath+"Noise_NCross.jpg" );
				
				let environmentGroundMat=this.pxlFile.pxlShaderBuilder( envGroundUniforms, envGroundVert(), envGroundFrag(1) );
				environmentGroundMat.lights= true;
				
				envGroundUniforms.uniformNoise.value.wrapS = THREE.RepeatWrapping;
				envGroundUniforms.uniformNoise.value.wrapT = THREE.RepeatWrapping;
				envGroundUniforms.crossNoise.value.wrapS = THREE.RepeatWrapping;
				envGroundUniforms.crossNoise.value.wrapT = THREE.RepeatWrapping;
				envGroundUniforms.dirtDiffuse.value.wrapS = THREE.RepeatWrapping;
				envGroundUniforms.dirtDiffuse.value.wrapT = THREE.RepeatWrapping;
				
				this.textureList[ "environmentGround" ]=environmentGroundMat;
				*/
				
				
        this.booted=true;
				
				
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
        
		let voidFbxLoader = this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
		//let voidFbxLoader = this.pxlFile.loadRoomFBX( this, this.sceneFile, this.envObjName, this.textureList);
		
	// -- -- -- -- -- -- -- -- -- -- -- -- -- //
		
	}
    
    
}