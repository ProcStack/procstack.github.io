import * as THREE from "../../js/libs/three/three.module.js";

// If you'd like to add a custom pass to the Effect Composer (Post Processing Effects)
//import { ShaderPass } from '../../libs  hree/examples/jsm/postprocessing/ShaderPass.js';
//import { defaultVert, openglShaderVert, openglShaderFrag, openglPostProcess } from "./Shaders.js";

// TODO : Why isn't this an expanded Room class??  Why isn't there a Room class???

export class TemplateEnvironment extends RoomEnvironment{
  constructor( roomName='TemplateEnvironment', assetPath=null, pxlFile=null, pxlAnim=null, pxlUtils=null, pxlDevice=null, pxlEnv=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, pxlFile, pxlAnim, pxlUtils, pxlDevice, pxlEnv, msRunner, camera, scene, cloud3dTexture );
    this.roomName=roomName;
    this.pxlAudio=pxlAudio; // Access to music driven data
    this.pxlFile=pxlFile; // Load assets from disk; Scene File, Images
    this.pxlUtils=pxlUtils; // General Utilities
    this.pxlDevice=pxlDevice; // Info on the user's device; movement / looking around, key presses, resolution, etc.
    this.pxlEnv=pxlEnv; // The main environment which addresses your room
    this.booted=false;
    this.initScene=true; // Room needs initiation
    this.active=false; // If room is running or not
        
    // Since your room's assets will live in another folder, for deving, you can put your assets in the "assets" folder for now
    //   When being installed, the latest folder structure will be applied
    this.assetsPath=this.pxlFile.roomRoot+this.roomName+"/"; // Assets live in `public/images/rooms/*TemplateEnvironment*`
    this.assetsPath="assets/";
        
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
    this.camera=this.pxlCamera.camera;
    this.scene=new THREE.Scene();
    this.scene.fog=this.fog;
    this.scene.background = new THREE.Color( this.fogColor );
    this.aspectRatio=this.pxlCamera.camera.aspect;
        
    this.pxlEnv.newRoom( this );
    this.initScene=false;
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
    /*
    if(this.booted){
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
    let ret=`<a href="https://If.YourArt.com/HasAUrl" target="_blank" class="hud_artistInfo_Title">Your Title</a>
    <br>Spring Trees and Twilight Clouds. 2020.

    <div class="hud_artistInfo_Section">Artist: <a href="https://yourSite.com/" target="_blank">Your Name / Handle / Studio</a>
    <br>Added Cred/Social: <a href="https://instagram.maybe" target="_blank">Cred Info, Social Links</a></div>
    
    <div class="hud_artistInfo_Section">Your art work's description</div>`;

    return ret;
  }
    
//%=
// For multiple object shaders, return { readShaderVal : PulldownDisplayLabel }
  getShaderList(){
    // let retList = { this.yourObjName : "Object Name", ...  };
    /*
    let retList={}
    let objList=Object.keys( this.textureList );
    objList.forEach( (k)=>{
      retList[k]=k;
    });
    return retList;
    */
    return false;
  }
// For initial load of the shader editor, return last shader or a specific shader
  getCurrentShader(){
    return this.currentShader || Object.keys( this.textureList )[0];
  }
// Return Primary Shader Material
  readShader(){
    /*
    if( this.currentShader!=null && this.textureList[ this.currentShader ].hasOwnProperty('uniforms')){
      this.textureList[ this.currentShader ].uniforms.sliders.value=new THREE.Vector3();
      this.textureList[ this.currentShader ].needsUpdate=true;
    }
    this.currentShader=objShader;
        
    return this.textureList[ this.currentShader ];
    */
    
    return this.geoList[ this.yourObjName ].material;
  }
// Updates the Primary Shader Material
  setShader( unis, vert, frag ){
    let geoShaderMaterial = this.geoList[ this.yourObjName ].material;
    geoShaderMaterial.vertexShader=vert;
    geoShaderMaterial.fragmentShader=frag;
    geoShaderMaterial.needsUpdate=true;
  }
  //%
    
// Runs after `this.pxlFile.loadRoomFBX()` completes processing your FBX Scene
  fbxPostLoad(){
    this.booted=true;
  }
  
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
  
// Build Scene and Assets

  build(){
    // To load an FBX, it will live in - `public/images/rooms/${this.roomName}`
    // For Developing, you can leave your files local in your folder under your room name's folder
    var chunshumuyunFBX=this.pxlFile.loadRoomFBX( this, this.assetsPath+"YourSceneFile.fbx" );
    
    // To add a custom OpenGL shader to an object inside  your FBX
    //   Prep the shader and add it to the `this.textureList` object, as the name of the Object Transform Name
    // eg. -
    //     If you'r scene object is-
    //       | RoomObject
    //       |-- RoomObjectShape
    //     Set your Material or Shader with -
    //       this.textureList[ "RoomObject" ]=*Your_Material_or_Shader*;
    
    
    // Since Maya only uses Phong Materials these days,
    //   Having a lot of Phong Materials can be costly for a real time engine
    // It's advised to set Flat and Lambert Materials when ever you can
    
    //  Assign a Flat Material with a specific color like this -
    /*
        let customColor = new THREE.Color( 0xff0000 ); // Hex
        customColor = new THREE.Color("rgb(255, 0, 0)"); // CSS formatted color
        let mtl=new THREE.MeshBasicMaterial({
            color:customColor
        });  
        mtl.side=THREE.FrontSide;
        this.textureList[ this.yourObjName ]=mtl;
    */
        
        
    // Assign a Lambert Material with a diffuse texture + some glow like this -
    var introTexture = new THREE.TextureLoader().load( this.assetsPath+"antibodyLobbyIntro.png" );
    introTexture.format = THREE.RGBFormat;
        
    let mtl=new THREE.MeshLambertMaterial();
    if(c.material.map){
      let mtlMap=c.material.map.clone();
      mtl.map=mtlMap;
      //mtl.color=new THREE.Color( 0x888888 );
      mtl.emissiveMap=mtlMap;
      mtl.emissiveIntensity=.5;
      c.material=mtl;
    }
        
    //  Assign an OpenGL shader like this -
    /*
      this.shaderUniforms={
        cloudNoise:{type:"t",value: this.cloud3dTexture },
        intensity:{type:"f",value:1.0},
        rate:{type:"f",value:1},
        camPos:{value:this.camera.position},
      };
      
      let mat=this.pxlFile.pxlShaderBuilder( this.shaderUniforms, openglShaderVert(), openglShaderFrag() );
      mat.side=THREE.FrontSide;
      
      this.textureList[ this.yourObjName ]=mat;
    */
        
            

    return this.pxlFile.loadRoomFBX( this, this.assetsPath+"YourSceneFile.fbx", 'yourRoomName', this.textureList );
    
    // -- -- -- -- -- -- -- -- -- -- -- -- -- //
    
  }   
}