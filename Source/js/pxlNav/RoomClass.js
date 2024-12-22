
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// --   Base Room Class Object File          --
// --    -- -- -- -- -- -- -- --             --
// --  Written by Kevin Edzenga; 2020-2024   --
// --                                        --
// --  This class is meant to keep your      --
// --    room file cleaner,                  --
// --  All veriables here are accesible      --
// --    from your file.                     --
// --                                        --
// --  To make your own room;                --
// --    Copy the template room folder -     --
// --     ./Source/js/pxlRooms/templateRoom  --
// --    Then read the 'README.md' file      --
// --                                        --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



import {
  Vector2,
  Vector3,
  Object3D,
  Color,
  FogExp2,
  Group,
  RepeatWrapping,
  AmbientLight,
  UniformsUtils,
  UniformsLib
} from "../libs/three/three.module.min.js";
import { pxlPrincipledVert, pxlPrincipledFrag } from "./shaders/objects/PxlPrincipled.js";

class RoomEnvironment{
  constructor( roomName='CampfireEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    this.roomName=roomName;
    this.pxlFile=pxlFile;
    this.pxlUtils=pxlUtils;
    this.pxlAnim=pxlAnim;
    this.pxlDevice=pxlDevice;
    this.pxlEnv=pxlEnv;
    this.booted=false;
    this.initScene=true;
    this.active=true;
    this.assetPath=assetPath+"Assets/";
    this.mobile=pxlDevice.mobile;
    
    this.sceneFile = this.assetPath+"CampfireEnvironment.fbx";
    this.animFile = this.assetPath+"Campfire_RabbitDruidA_anim.fbx";
    this.animClips = {};
    this.animMixer = null;
    
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
    this.camLocation = {};
    
    this.pxlCamFOV=(this.mobile?80:60);
    this.pxlCamZoom=1;
    this.pxlCamAspect=1;
    this.pxlCamNearClipping = 5;
    this.pxlCamFarClipping = 10000;

    // this.fogColor=new Color(.3,.3,.3);
    this.fogColor=new Color(.01,.02,.05);
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
    this.particleList={};
    
    this.portalList={};

    this.enableRaycast = false;
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

// Run after all needed pxlNav services are loaded/built
//   So it's safe to access global assets at this point
  init(){
    this.scene.fog=this.fog;
    this.scene.background = this.fogColor ;//pxlEnv.fogColor;
    this.cloud3dTexture=this.pxlEnv.cloud3dTexture;
    this.cloud3dTexture.wrapS = RepeatWrapping;
    this.cloud3dTexture.wrapT = RepeatWrapping;
    this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture;
    this.smoothNoiseTexture.wrapS = RepeatWrapping;
    this.smoothNoiseTexture.wrapT = RepeatWrapping;
  }

// Run on init room warp; reset room values
  start(){
    if( this.booted ){
      this.resetCamera();
    }
    /*this.spiralizerPass.enabled=true;
    this.bloomPreState=this.pxlEnv.roomBloomPass.enabled;  
    this.pxlEnv.roomBloomPass.enabled=false;  */
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
  
  setUserHeight( toHeight=1 ){
    this.pxlEnv.pxlCamera.userScale = toHeight;
  }

  resetCamera(){
    this.pxlEnv.pxlCamera.setTransform( this.camInitPos, this.camInitLookAt );
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
  readShader( objShader="", sliderVectorObj=null ){
    if( this.currentShader!=null && this.materialList[ this.currentShader ].hasOwnProperty('uniforms')){
      if( !sliderVectorObj ){
        sliderVectorObj=new Vector3();
      }
      this.materialList[ this.currentShader ].uniforms.sliders.value=sliderVectorObj;
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
  
    
  castRay( isClick, mButton ){
    if(!this.enableRaycast){
      return;
    }
    if( ( !isClick && !this.hoverableExists ) || ( isClick && !this.clickableExists ) ){
      //console.log("No Cickable / Hoverable Objects Found");
      this.mouseRayHits=[];
      return;
    }
    
    let castableObjects = []
    if( !isClick && this.hoverableExists ) {
      castableObjects = this.hoverableList;
    }else if( isClick && this.clickableExists ){
      castableObjects = this.clickableList;
    }
    
    var rayHits=[];
    if(castableObjects.length>0){
    
      let mouseScreenSpace=new Vector2( this.pxlDevice.mouseX/this.pxlDevice.sW*2-1, -this.pxlDevice.mouseY/this.pxlDevice.sH*2+1 );
      this.pxlEnv.pxlCamera.objRaycast.setFromCamera(mouseScreenSpace, this.pxlEnv.pxlCamera.camera );
    
      rayHits=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(castableObjects);
    }

    this.mouseRayHits=rayHits;
  }
    
  toCameraPos( positionName ){
    if( this.cameraBooted && this.camLocation.hasOwnProperty( positionName ) ){
      
      let posName = this.mobile?"PositionMobile":"Position";
      let lookAtName = this.mobile?"LookAtMobile":"LookAt";
      let pos=this.camLocation[ positionName ][ posName ];
      let lookAt=this.camLocation[ positionName ][ lookAtName ];
      if( !lookAt ){
        lookAt=new Vector3(0,0,1);
        lookAt.addVectors( pos, lookAt );
      }

      this.pxlEnv.pxlCamera.setTransform( this.camLocation[positionName][posName], this.camLocation[positionName][lookAtName] );
      this.setUserHeight( this.camInitPos.y );
    }
  }
    
  fbxPostLoad(){

        // Force Camera to init position with optional init look at
        this.toCameraPos("Default");

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
        
        
        var ambientLight = new AmbientLight( 0x303030 ); // soft white light
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
        
        
        
        
        
        
        /*
        let envGroundUniforms = UniformsUtils.merge(
                [
                  UniformsLib[ "common" ],
                  UniformsLib[ "lights" ],
                  UniformsLib[ "shadowmap" ],
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
        
        this.materialList[ "EnvironmentGround_Geo" ]=environmentGroundMat;
        */
        
        
        
    }
  
  animPostLoad( animKey, animMixers ){
    if( this.pxlAnim.hasClip( animKey, this.animInitCycle ) ){
      let animMixer = this.pxlAnim.getMixer( animKey );
      this.animMixer = animMixer;
      
      this.pxlAnim.playClip( animKey, this.animInitCycle );
    }else{
      this.animInitCycle = fallback;
      this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");
    }
  }
  
// -- -- -- -- -- -- -- -- -- -- -- -- -- //

// Build Scene and Assets

  build(){
  }

// -- -- -- -- -- -- -- -- -- -- -- -- -- //

// Recive outside message
//   Custom implementation of HTML/GUI in conjunction with pxlNav
//     Lets get some incoming messages to trigger some stuffs!
  onMessage( msgType, msgValue ){
    console.log("Room : "+this.roomName+" - Message Received: "+msgType);
    console.log("Message : "+msgValue);
    msgType = msgType.toLowerCase();
    switch( msgType ){
      case "roomwarp":
        this.roomWarp=msgValue;
        break;
        default:
      case "roommessage":
        console.log( "-- Message Type Not Recognized -- " );
        console.log( "Room : "+this.roomName );
        console.log( "Message Received: "+msgType );
        console.log( "Message : "+msgValue );
        break;
    }
  }
}



export { RoomEnvironment };