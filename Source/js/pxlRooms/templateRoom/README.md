 Antib0dy.Club Room Template Info
   (Running through pxlNav, the engine built upon THREE.js)
 
 
 ***This file is a Work-In-Progress***
 *Please see the `pxlRooms/CampfireEnvironment` for a complete `pxlNav` room example*
 
 
 
////////////////////////////////////////////////////
// -- pxlNav Prep and Resource Info  -- -- -- -- //
//////////////////////////////////////////////////

  pxlNav?
    While Antibody Club is the venue, my system is named `pxlNav`
    Since it can easily be swapped in functionality, its not exclusive to the Antibody Club platform.

  Since pxlNav is built upon THREE.js, its advised you follow the steps in the README.md in the root of the Onboarding zip file
    As a breif -
      If you are an artist joining on to make a room
        First off, Welcome!  Thanks for taking an interest in helping out Antibody Club!
        Secondly, developing locally on your computer becomes a little more complicated,
          Since you'd be require to run the NodeJS server code to run
      That being said, if you go to
        https://dev.antib0dy.club/dev
      You are able to load your local files into the environment live in the environment.
      
      You are able to update Textures, Models, JavaScript, and OpenGL Shaders all within the Environment.
      Including a code editor for JavaScript and OpenGL built into pxlNav.
        Eleviating any need to reload files every two seconds
        Who wants to reload files over and over just to see some minor changes?
  
    For THREE.js Docs and Example Scenes, visit the pages below-
      https://threejs.org/docs/
      https://threejs.org/examples/#webgl_materials_modified
      https://threejs.org/examples/#webgl_mirror
   
   
   
   
   
////////////////////////////////////////////////////
// -- pxlNav Room Dev Preface  -- -- -- -- -- -- //
//////////////////////////////////////////////////
 
 
    Leave the functions listed below in your room.
      Even if you arn't using them.
   
    Modern day modules load once, so having the entire module load wouldn't weigh down the rest of the environment
      You may import specific things from THREE if you'd like though.
        import * as THREE from "../../../libs/three/build/three.module.js";

    If you'd like to add a custom pass to the Effect Composer (Post Processing Effects)
      Basicaly a full screen OpenGL Shader that runs after all Scene renders
        This is the same functionallity as the effects you see going through Portals or getting Items
      You'll need to import the ShaderPass THREE module however-
        import { ShaderPass } from '../../../libs/three/examples/jsm/postprocessing/ShaderPass.js';
       
    To load any custom written OpenGL Material Shaders & Effect Composer Passes,
      Use the `Shader.js` file as your template
        import { defaultVert, openglShaderVert, openglShaderFrag, openglPostProcess } from "./Shaders.js";






////////////////////////////////////////////////////
// -- THIS. MODULE VARIABLES for pxlNav -- -- -- //
//////////////////////////////////////////////////


    this.roomName=roomName;
      - Your room name, the title of your peice
          Don't use spaces if you can "_" would be better if anything
    this.pxlAudio=pxlAudio;
      - Access to music driven data
    this.pxlFile=pxlFile;
      - Load assets from disk; Scene File, Images
    this.pxlUtils=pxlUtils;
      - General Utilities
    this.pxlDevice=pxlDevice;
      - Info on the user's device; movement / looking around, key presses, resolution, etc.
    this.pxlEnv=pxlEnv; 
      - The main environment which addresses your room
    this.booted=false;
      - If the room has ran the `buildEnvironment(){}` function or not
    this.initScene=true;
      - Room needs initiation
    this.active=false;
      - If room is actively running or not

    Since your room's assets will live in another folder, for deving, you can put your assets in the "assets" folder for now
      When your room is installed into pxlNav, assets will be moved to the location listed below
        this.assetsPath=this.pxlFile.roomRoot+this.roomName+"/";
          - Assets live in `public/images/rooms/*TemplateEnvironment*`
        this.assetsPath="assets/";
          - This second assignment of `this.assetsPath` is for ease to Develop your Room, to keep your files local to your javascript files


    this.shaderUniforms={}; 
      - Environment Shader 
      - For values you may want to update on OpenGL Shaders; Either use a set dict like `this.shaderUniforms`,
          Or assign this.yourVariable= new THREE.Vector2(0,0);
       
      - Any Uniforms using THREE.Vector2, THREE.Vector3, THREE.Quaternion, etc.
          Updating the `this.yourVariable.x`, `.y`, `.z`, etc. will automatically update on your shader.
          
    this.textureList={};
      - More for specific Materials and OpenGL Shaders for easy access in javascript


    // Room warp data
    this.camInitPos=null; - SET AUTOMATICALLY FROM YOUR FBX
    this.camInitLookAt=null; - SET AUTOMATICALLY FROM YOUR FBX
    this.camThumbPos=new THREE.Vector3(0,0,-30); - SET AUTOMATICALLY FROM YOUR FBX
    this.camThumbLookAt=new THREE.Vector3(0,35,-1000); - SET AUTOMATICALLY FROM YOUR FBX
    this.cameraBooted=false; - SET AUTOMATICALLY FROM YOUR FBX
    this.cameraPrevPos=new THREE.Vector3(0,0,0); - SET AUTOMATICALLY FROM YOUR FBX
    this.cameraAimTarget=new THREE.Object3D(0,0,0); - SET AUTOMATICALLY FROM YOUR FBX
    
    this.camHoldWarpPos=true;
      - Prevent Camera from shifting position / rotation on room warping

    // These options change the Camera's settings
    //   They are ran upon entering the room
    this.pxlCamFOV=45;
      - Field Of View
    this.pxlCamZoom=1;
      - Zoom of Camera
    this.pxlCamAspect=1.3; 
      - This will always be set to the aspect raio of the device
          Used if you need the ratio of the screen
      - You may also update `this.pxlCamAspect` in the `resize( sW, sH ){}` fuction if you'd like to alter the aspect ratio.
          Keep in mind, you'll need to run `this.pxlCamera.camera.updateProjectionMatrix();` to see the camera changes in your room
    this.pxlCamNearClipping = 2;
      - Geometry Z-Depth Near Clipping
    this.pxlCamFarClipping = 3000;
      - Geometry Z-Depth Far Clipping
    this.aspectRatio=null;

    this.startTime=0;
      - Time Room turns Active; For time sensitive effects (Optional)
    this.runTime=new THREE.Vector2(0, 0);
      - Curring Room Run Time; Keep as THREE.Vector2() so OpenGL shaders Auto Update when there are {x,y} changes
    this.msRunner=msRunner;
      - Global Timer THREE.Vector2 Object
          this.msRunner.x - Seconds Since Boot; 0.001 precision, miliseconds
          this.msRunner.y - Average Seconds per Frame
    this.camera=camera;
      - pxlNav Camera Object
    this.autoCamPaths={}; 
      - Drone Cam Paths; [{ "position", "lookAt", "up" }, {...}]
    this.scene=scene; 
      - THREE.js Scene Object
    this.geoList={}; 
      - Objects which need direct access


    this.cloud3dTexture=null;
      -A default 3d (RGB) Cloud Noise
        Can be used in OpenGL Shaders for randomization
        
    // UNUSED, BUT PLEASE LEAVE IN
      //this.warpPortalTexture=null;
        // Texture Map screenshot of the room
      //this.warpZoneRenderTarget=null;
        // Object to recieve "Return Portal" texture - OBSOLETE

    Collider Variables -
      this.portalList={}; - SET AUTOMATICALLY FROM YOUR FBX
        - Portals, jumps users WITHIN your room
        - Any portal collision objects in your FBX Scene will be stored here
      this.roomWarp=[]; - SET AUTOMATICALLY FROM YOUR FBX
        - Room Warp Zone, jumps users TO ANOTHER room
            Currently only supports the Time Square Canyon
        - You're Return Portal collision object to allow users back into the main canyon
            If you set up your 3d Scene correctly, this is automatically set when loading your FBX
    
      this.collidersExist=false; - SET AUTOMATICALLY FROM YOUR FBX
        - If collision objects are found in your FBX, this will read `true`
      this.colliderActive=false; - SET AUTOMATICALLY FROM YOUR FBX
        - Indicator if a collider is currently being stepped on
            True/False if Ground Colliders should be checked
      this.antiColliderActive=false; - SET AUTOMATICALLY FROM YOUR FBX
        - The "Ground" and "Obstacles" are treated differently in pxlNav, this indicates if Obstacles exist
            True/False if Obstacle Colliders should be checked
      this.antiColliderTopActive=false; - SET AUTOMATICALLY FROM YOUR FBX
        - This is if Obstacles exist you can stand upon
            True/False if Obstacle Tops Colliders should be checked
          
    Collider Objects Arrays, used for checking user collision when moving and jumping
      When setting up collider objects in your scene, if User Data is not set,
        All collider objects, Ground, Obstacle, Obstacle Tops, will be stored in 'noAxis'
      When UserData 'checkX' and/or 'checkZ' is set, colliders are optimized a little by isolating them into their own quadrants
        While this is not optimal, it reduces quite a bit of math required for walking, jumping, picking up items, going through portals, etc.
        This will be enhanced moving forward, but for now-
          If 'checkX' / 'checkZ' are set to `0`, that is Negative Coordinates; `1` is Positive Coordinates
            
        eg, if `checkX == 0` and `checkZ == 1`
          That collider object wont be checked for collision unless the user's position is X<0 and Z>0
            Negative X coordinates and Positive Z coordinates.
            
      You do not need to set 'checkX' or 'checkZ' UserData
        More than likely, your room's collision geometry wont be too high.
          Try to keep it below ~40-80 polygons
            Lesser, the better.
            
    ** Please see 3d Scene Organization for more details **
    
      this.colliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] }; - SET AUTOMATICALLY FROM YOUR FBX
        - Ground Collider Objects
      this.antiColliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] }; - SET AUTOMATICALLY FROM YOUR FBX
        - Obstacle Collider Objects
      this.antiColliderTopList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] }; - SET AUTOMATICALLY FROM YOUR FBX
        - Obstacle Top Collider Objects








    
////////////////////////////////////////////////////
// -- REQUIRED FUNCTIONS for pxlNav  -- -- -- -- //
//////////////////////////////////////////////////


    init(){}
      - Initiation, for any room prep, before the environment fully loads

    start(){}
      - When entering the room

    step(){}
      - Per-Frame Updates

    stop(){}
      - When leaving the room

    resize( sW, sH ){}
      - Runs on window resize; `this.pxlCamAspect` is already updated

    prepPortalRender(){} -  UNUSED FOR NOW
      - Warp Zone Portal Texture
         Screenshot prep, runs before saving the Scene's Render to texture
         Used for taking screenshots of the environment, to be used as Textures. ( HDRI, Reflection, Env Maps )
    cleanupPortalRender(){}
      - Screenshot clean up; Runs after taking the screen shots
    setPortalTexture(texture, toRoom=null){}
      - Set the Room Warp Portal plane to display the render from the main room
         Initially, this was intended to be used as a "preview" of the room before entering


    applyRoomPass( roomComposer=null ){}
      - If you need a custom Effect Composer Pass for your room, return the pass itself

    getArtistInfo(){}
      - Your work's name, your contact info, a little sumary about yourself, and the piece itself
      - If you return `null`, `false`, or `""` your 'Artist Info' button will not appear.


    readShader(){}
      - Return Primary Shader Material
    setShader( unis, vert, frag ){}
      - Updates the Primary Shader Material


    fbxPostLoad(){}
      - Runs after `this.pxlFile.loadRoomFBX()` completes processing your FBX Scene

    build(){}
      - Build Scene and Assets



////////////////////////////////////////////////////
// -- Function Run Order for pxlNav  -- -- -- -- //
//////////////////////////////////////////////////

  While pxlNav is building and loading -
    init(){}
      - During Load Screen, just after the main THREE.js Scene, Camera, Device Info is gathered.
    build(){}
      - Room's `build()` function runs after all gui/hud elements have been built
    fbxPostLoad(){}
      - If you load an FBX during your `build()` function, this will run as soon as the FBX has been proccessed
      - pxlNav waits for all FBX's to download and build the Scene Objects before continuing
    applyRoomPass( roomComposer=null ){}
      - If you are adding any Effect Composser Passes, your room will be fully built by then for required assets
    resize( sW, sH ){}
      - The last step before removing the loading bar is to run the `resize()` function
          This ensures that any altered settings during loading get applied
            ( Quality settings, resizing render targets to account for slow computers, etc. )
      - Also runs when ever the window resolution changes

  When a user enters your room -
    start(){}
      - Runs once, upon entry into your room
    getArtistInfo(){}
      - Runs just after `start(){}` to have the info ready in your 'Artist Info' button
    step(){}
      - Runs every frame just before Render and Effects Composer
      - If you are setting up a Shader Override, or need a custom render target for yourself, run the render() command here
          Otherwise, it will render your room as diffuse shaders only through an Effect Composer Render Pass just after
    stop(){}
      - Runs once, upon exiting your room
      - Make sure you clean up any changes you make in `start()` here


  When you are on https://dev.antib0dy.club/dev and in your room,
    If you hit "y", the Code Editor will pop up
      readShader(){}
        - When you hit "y" or change the selected code you wish to edit
      setShader( unis, vert, frag ){}
        - When you hit the "Update Shader" button






