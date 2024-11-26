import * as THREE from "../../libs/three/three.module.js";

// TODO : Extend this damn monolith of a chunky boy
//          Camera, Player Controller, Force Influence / Collision
//        Keep Jumping when Space is held down upon landing
//        Jumping is locked to some weird held space velocity limits

export class Camera{
  constructor(){
    this.pxlAudio=null;
    this.pxlTimer=null;
    this.pxlAutoCam=null;
    this.pxlEnv=null;
    this.pxlUser=null;
    this.pxlUtils=null;
    this.pxlDevice=null;
    this.pxlGuiDraws=null;
    this.pxlQuality=null;
    this.socket=null;
    
    this.camera=null;
    this.HDRView=false;
    
    this.objRaycast=new THREE.Raycaster();
    
    // Run updateCamera
    this.camUpdated=true;
    this.cameraBooted=false;
    
    this.userScale=5.5;
    
    // User Height
    this.standingHeight=1;
    this.standingHeightGravInfluence=0;
    this.standingMaxGravityOffset=.5; // Usage -  ( standingHeight / standingHeightGravInfluence ) * standingMaxGravityOffset
    this.maxStepHeight=.6; // Max distance up or down, like walking up and down stairs.
    
    this.walkBounce=0;
    this.walkBounceSeed=230;
    this.walkBouncePerc=0;
    
    this.posRotEasingThreshold=.01; // Velocity based calculations with any per frame scalar cut off value; val<posRotEasingThreshold ? 0
    this.cameraMovement=[0,0]; // Left/Right, Forward/Back, Jump
    this.cameraMovementEase=.8; // After key up, pre-frame rate to 0
    this.cameraMoveLength=0;
    this.cameraMoveLengthMult=.2; // cameraMoveLength scalar // ## check adding multiplier to keydown movement calculations
    this.camPosBlend=.55; // Blend to previous position, easing movement
    
    this.camRotXYZ=new THREE.Vector3(0,0,0);//new THREE.Vector3(0,0,0);
    this.camRotPitch=new THREE.Vector2(0,0);
    this.cameraJumpActive=false;
    this.cameraAllowJump=true;
    this.cameraJumpHeight=0;
    this.cameraJumpInitImpulse=[.06,.15]; // [ Grav, Low Grav ]
    this.cameraJumpImpulse=0;
    this.cameraJumpImpulseEaseOut=.8; // Ease out Jump Button Influence after Button Released
    this.cameraMaxJumpHold=[.6,3]; // Second; [ Grav, Low Grav ]
    this.cameraJumpInAir=false;
    
    this.floorColliderInitialHit=false;
    this.colliderValidityChecked=true; // Value shouldn't matter, but should Room Environments not set colliderValidity, assume checked initially
    this.nearestFloorHit=new THREE.Vector3(0,0,0);
    this.nearestFloorObjName=null;
    this.nearestFloorHitPrev=new THREE.Vector3(0,0,0);
    this.nearestFloorObjNamePrev=null;
        this.objectJumpLock=false;
    
    this.gravityActive=false;
    this.gravitySourceActive=false;
    this.gravityDirection=new THREE.Vector3( 0, -1, 0 );
    this.gravityEaseOutRate=.80;
    this.jump=0;

    this.runMain=true;
    this.workerActive=false;
    this.worker=null;
    this.workerTransfers=false;
    this.workerMessage=()=>{}; // Browser Compatibility
    this.workerFunc=()=>{}; // Browser Compatibility
    this.deviceKey=()=>{}; // Browser Compatibility
    
    this.portalList={};
    this.collidersExist=false;
    this.colliderActive=false;
    this.colliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
    this.antiColliderActive=false;
    this.antiColliderList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
    this.antiColliderTopActive=false;
    this.antiColliderTopList={ 'noAxis':[], '11':[], '01':[], '10':[], '00':[] };
    this.roomWarpZone=[];
    this.colliderCurObjHit=null;
    this.colliderPrevObjHit=null;
    this.colliderValid=false;
    this.colliderFail=false;
    
    this.warpActive=false;
    this.warpType=0;
    this.warpObj=null;
    this.warpTarget=null;
    this.hotKeyTriggered=false;

    this.eventCheckStatus=false;
    this.proximityScaleTrigger=false;
        
    this.colliderShiftActive=true;
    this.colliderAdjustPerc=0;
    this.colliderAdjustRate=.020;

    // ## Move to Device.js
    this.gyroGravity=[0,0,0];
    this.cameraPose={
      alpha:null,
      beta:null,
      gamma:null,
      alphaOffset:0,
      betaOffset:0,
      gammaOffset:0,
      orientation:window.orientation||0,
      pos:[0,0,0],
      posOffset:[0,0,0],
      rx:()=>{return this.beta},
      ry:()=>{return this.alpha},
      rz:()=>{return this.gamma},
      accelZeroed:[0,0,0],
      accelCalibration:10,
      accelCalDiv:1/10,
      accelCalCount:0,
      accelTotal:[0,0,0],
      accelPrev:null,
      accelDelta:[0,0,0],
      accelClearDelta:()=>{this.accelDelta=[0,0,0];},
    };

    this.uniformScalars={
      curExp:1.0,
      darkBase:.1,
      brightBase:0.5,
      exposureUniformBase:1.0,
    }
    
    this.cameraPos=new THREE.Vector3(0,0,0);
    this.cameraPrevPos=new THREE.Vector3(0,0,0);;
    this.cameraPrevLookAt=new THREE.Vector3(0,0,0);;
    this.cameraAim=new THREE.Vector3(0,0,1);
    this.cameraAimTarget=new THREE.Vector3(0,0,0);;
    this.cameraCross=new THREE.Vector3(1,0,0); // For Audio API faux 3d audio; UNUSED CURRENTLY
    
    this.lookAtTargetActive=new THREE.Vector3(0,0,0);;
    this.lookAtPerc=new THREE.Vector2(1,0);
    this.lookAtLockPerc=0;
    this.lookAtLockFader=0;
    this.lookAtLockFadeRate=.01;
    
    this.prevQuaternion=new THREE.Quaternion(); // Used in motionBlur shader calculations only
    //this.prevWorldMatrix= new THREE.Matrix4(); // Only used if running higher quality motionBlur calculations, not needed
    
    this.pi=3.14159265358979;

    this.init();
  }

  setDependencies( pxlNav ){
    this.pxlAudio=pxlNav.pxlAudio;
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlAutoCam=pxlNav.pxlAutoCam;
    this.pxlEnv=pxlNav.pxlEnv;
    this.pxlUser=pxlNav.pxlUser;
    this.pxlUtils=pxlNav.pxlUtils;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlGuiDraws=pxlNav.pxlGuiDraws;
    this.pxlQuality=pxlNav.pxlQuality;
    this.socket=pxlNav.socket;
  }

  // ## Get worker implemented for whole of camera scripts
  init(){
      var worker;
      // Camera Service Worker - Ray Intersect Collision Detector
      // TODO : Finish adding worker to check collision detection only
      if( false && Worker ){
          worker = new Worker("js/pxlBase/webWorkers/CameraWorker.js");  
          this.worker=worker;
          //this.workerList.push( worker );
      
          let tmpThis=this;
          worker.onmessage= (event) => {  
              tmpThis.workerMessage(event.data);
          };
          worker.onerror= (event)=>{  
              tmpThis.workerMessage({type:"err", data:event.data});
          };
          
          // Transferables Status
          let ab= new ArrayBuffer(1);
          worker.postMessage(ab, [ab]); // ab.byteLength -> If transfer successful
          this.workerTransfers=ab.byteLength==0; // Can transfer ArrayBuffers directly
          
          // Message Functions
          this.workerMessage= async ( msg )=>{
              if( msg.type == "update" ){
                  tmpThis.updateMainValues( msg );
              }
          }
          this.workerFunc= async ( type, state=null )=>{
              tmpThis.worker.postMessage({type, state})
          }
          this.deviceKey= async ( key=false, state=false )=>{
              if( typeof key == "number"){
              }else if( typeof key == "string"){
                  let type="key";
                  tmpThis.worker.postMessage({type, key, state})
              }
          }
          this.workerActive=true;
          this.runMain=false;
          
          this.workerFunc("init");
      }
  }
  updateMainValues( data ){
      let {gravityRate, standingHeightGravInfluence, cameraJumpImpulse}=data;
      if( gravityRate != null ){
          this.pxlUser.gravityRate = gravityRate;
      }
      if( standingHeightGravInfluence != null ){
          this.standingHeightGravInfluence = standingHeightGravInfluence;
      }
      if( cameraJumpImpulse != null ){
          this.cameraJumpImpulse+=cameraJumpImpulse;
      }
      this.camUpdated=true;
  }
    
  step(){
        if(this.pxlDevice.directionKeyDown){
            this.updateMovement(this.pxlTimer.prevMS);
        }
        
        if( this.runMain ){
            if( this.gravityActive && this.cameraJumpActive ){
                this.camJump(this.pxlTimer.prevMS);
            }else if(this.cameraJumpImpulse>0 ){
                this.killJumpImpulse();
            }
        }
        
        // Check if camera calculations should be ran
        this.camUpdated= this.camUpdated || this.cameraMovement[0]!=0 || this.cameraMovement[1] || this.gravityActive || this.pxlDevice.cursorLockActive;
        this.updateCamera();

    // Update Shaders to Camera Position / Rotation changes
    this.lowQualityUpdates();
    this.midQualityUpdates();
        
        this.eventCheck();
  }
  
  eventCheck(){
      if( this.colliderValid && this.eventCheckStatus){
          // Camera Translate Events don't need further calculatons; Room Warps and Portals
          if( this.eventTrigger(this.nearestFloorObjName) ){ 
              this.warpEventTriggered(1, this.nearestFloorObjName);
              //return;
          }
      }
  }
    
  updateDeviceValues( velEaseMag ){
    if(!this.pxlQuality.settings.leftRight){
      let tankRotate=-this.cameraMovement[0];
      if(!this.pxlDevice.touchMouseData.active){
        this.pxlDevice.touchMouseData.velocity.x+=tankRotate;
        //this.pxlDevice.touchMouseData.velocityEase.x+=tankRotate;
      }
      this.pxlDevice.touchMouseData.netDistance.x+=tankRotate*4.0;
    }
    
        //let stillMoving=false;
    // PC Mouse Movement
    if(this.pxlDevice.touchMouseData.velocity!=null && this.pxlDevice.mobile==0){
      if(velEaseMag<this.posRotEasingThreshold){
        this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);
        //this.pxlDevice.touchMouseData.velocityEase.multiplyScalar(0);
      }else{
        this.pxlDevice.touchMouseData.velocity.multiplyScalar(.7);
        //this.pxlDevice.touchMouseData.velocityEase.multiplyScalar(.7);
      }
      this.pxlDevice.touchMouseData.netDistance.add( this.pxlDevice.touchMouseData.velocity.clone().multiply( this.pxlDevice.touchMouseData.moveMult ) );
    }
  }
  
//////////////////////////////////////////
// Gyroscope Enabled Device Functions  //
////////////////////////////////////////
  buildDeviceMonitors(){
    let camObject=this;
    //window.addEventListener('deviceorientation', (e)=>{camObject.devicePoseData(camObject,e)} );
    //window.addEventListener('orientationchange', (e)=>{camObject.deviceOrientationData(camObject,e)} );
    //window.addEventListener('devicemotion', (e)=>{camObject.deviceMotionData(camObject,e)} );
        //%=
    //gyroscope=new Gyroscope({frequency:10});
    //gyroscope.addEventListener('reading',gyroPoseData);
    //gyroscope.start();
    
    //window.addEventListener('devicemotion', deviceMotionData);
    //window.addEventListener('orientationchange', devicePoseChange); // Don't know when this ever fires, docs seem like it should run tho
    
    // Based around w3.org's Accelerometer builder
  /*  navigator.permissions.query({ name: 'accelerometer' }).then(result => {
      if (result.state === 'denied') {
        console.log('Permission to use accelerometer sensor is denied.');
        return;
      }

      let acl = new Accelerometer({frequency: 10});
      let max_magnitude = 0;
      acl.addEventListener('activate', () => console.log('Ready to measure.'));
      acl.addEventListener('error', error => console.log(`Error: ${error.name}`));
      acl.addEventListener('reading', () => {
        let magnitude = Math.hypot(acl.x, acl.y, acl.z);
        if (magnitude > max_magnitude) {
          max_magnitude = magnitude;
          console.log(`Max magnitude: ${max_magnitude} m/s2`);
        }
      });
      acl.start();
    });*/
        //%
  }
    /*
  gyroPoseData(camObj,e){
    let x=gyroscope.x;
    let y=gyroscope.y;
    let z=gyroscope.z;
    let prevGyro=[...this.pxlDevice.gyroGravity];
    this.pxlDevice.gyroGravity=[x,y,z];
    accumGravity=[accumGravity[0]+x-prevGyro[0],accumGravity[1]+y-prevGyro[1],accumGravity[2]+z-prevGyro[2]];
    
  }

  deviceMotionData(camObj,e){
    let acc=e.acceleration;//IncludingGravity;
    //let ag=e.accelerationIncludingGravity;
    if(camObj.cameraPose.accelCalCount<camObj.cameraPose.accelCalibration){
      camObj.cameraPose.accelCalCount+=1;
      camObj.cameraPose.accelZeroed[0]+=acc.x;
      camObj.cameraPose.accelZeroed[1]+=acc.y;
      camObj.cameraPose.accelZeroed[2]+=acc.z;
      if(camObj.cameraPose.accelCalCount==camObj.cameraPose.accelCalibration){
        camObj.cameraPose.accelZeroed[0]*=camObj.cameraPose.accelCalDiv;
        camObj.cameraPose.accelZeroed[1]*=camObj.cameraPose.accelCalDiv;
        camObj.cameraPose.accelZeroed[2]*=camObj.cameraPose.accelCalDiv;
      }
    }
    camObj.cameraPose.accelDelta[0]=acc.x-camObj.cameraPose.accelZeroed[0];
    camObj.cameraPose.accelDelta[1]=acc.y-camObj.cameraPose.accelZeroed[1];
    camObj.cameraPose.accelDelta[2]=acc.z-camObj.cameraPose.accelZeroed[2];
    camObj.cameraPose.accelTotal[0]+=acc.x-camObj.cameraPose.accelZeroed[0];
    camObj.cameraPose.accelTotal[1]+=acc.y-camObj.cameraPose.accelZeroed[1];
    camObj.cameraPose.accelTotal[2]+=acc.z-camObj.cameraPose.accelZeroed[2];
  }

  devicePoseData(camObj,e){
    if(e.alpha!==null){
      camObj.abs=e.absolute;
      camObj.cameraPose.gamma=e.gamma; // Yaw
      camObj.cameraPose.beta=e.beta; // Pitch
      camObj.cameraPose.alpha=e.alpha; // Roll
      camObj.cameraPose.alphaOffset=e.alphaOffset||0; // Roll
    }
  }
  
  deviceOrientationData(camObj,e){
    camObj.cameraPose.orientation=window.orientation||0;
  }
  */
  
/////////////////////////////////////////////////////////////////////
// Set Camera Position / Look At Functions; Room Warps & Portals  //
///////////////////////////////////////////////////////////////////
  updateCameraMatrices(){
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
    this.camera.updateWorldMatrix();
  }
  resetCameraCalculations( newPosition ){
    this.cameraMovement[0] = 0;
    this.cameraMovement[1] = 0;
    this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0);
    this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);
    //this.pxlDevice.touchMouseData.velocityEase.multiplyScalar(0);
    //if(this.pxlDevice.shiftBoost>0) this.pxlDevice.shiftBoost=1; // Restart running values
    this.pxlDevice.touchMouseData.netDistance.set(0,0);
    
    this.camera.position.copy( newPosition );
    this.updateCameraMatrices();
    this.cameraPos.copy( newPosition );
    this.cameraPrevPos.copy( newPosition );
    
    // Force collision detection
    this.colliderCurObjHit=null; 
    this.colliderPrevObjHit=null;
    this.camUpdated=true; // Forces next frame update
  }

  setFOV( fov ){
    this.camera.fov=fov;
    this.camera.updateProjectionMatrix();
    this.camUpdated=true;
  }

  setStats( fov, aspect, near, far ){
    //this.camera.aspect=aspect;
    this.camera.near=near;
    this.camera.far=far;
    this.setFOV(fov);
  }

  // For portals and room warp zones
  setTransform(pos, lookAt=null){ // Vector3, Vector3
    this.resetCameraCalculations(pos); // Reinitiates Camera; Forces collision detection, Kills user inputs
    
    if(lookAt){
      this.cameraAimTarget.position.copy( lookAt );
      this.camera.lookAt(lookAt);
      this.cameraPrevLookAt.copy( lookAt );
      
      this.updateCameraMatrices();
      
      this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone();
    }
    
    this.resetGravity();
    this.camUpdated=true; // Forces next frame update
  }
  
  
  // For portals and room warp zones
  setToObj(obj, lookAt=null){ // Object3D, Object3D
    this.resetCameraCalculations( obj.position ); // Reinitiates Camera; Forces collision detection, Kills user inputs
    
    // If no lookat, adopt Object rotation
    if(lookAt){
      let toLookAt=lookAt.position.clone();
      this.cameraAimTarget.position.copy( toLookAt );
      this.camera.lookAt(toLookAt);
      this.cameraPrevLookAt.copy( toLookAt );
      
      this.updateCameraMatrices();
      
      this.pxlDevice.touchMouseData.initialQuat=this.camera.quaternion.clone();
    }else{
      this.pxlDevice.touchMouseData.initialQuat=obj.quaternion.clone();
      this.camera.setRotationFromQuaternion(this.pxlDevice.touchMouseData.initialQuat);
      this.updateCameraMatrices();
    }
    
    this.resetGravity();
        this.camUpdated=true; // Forces next frame update
    this.mainColliderCheck( obj.position, null );
        this.nearestFloorObjName=null;
  }
  
  warpToRoom(roomName, start=false, objTarget=null){
    this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].stop();

    let prevRoom=this.pxlEnv.currentRoom;
    let holdCamera=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].camHoldWarpPos;
    this.pxlEnv.currentRoom=roomName;
    this.pxlAutoCam.curRoom=roomName;
    let roomEnv=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];
    
    let isMainRoom=roomName==this.pxlEnv.mainRoom;
    //this.pxlEnv.delayPass.uniforms.roomComposer.value= isMainRoom ? 0 : 1;
    if( this.pxlUser.iZoom ){
      let tDiff= isMainRoom ? this.pxlEnv.roomComposer : this.pxlEnv.mapComposer;
      let tDiffPrev= isMainRoom ? this.pxlEnv.mapComposer: this.pxlEnv.roomComposer;
      this.pxlEnv.delayPass.uniforms.tDiffusePrev.value= tDiff.renderTarget1.texture;
      this.pxlEnv.delayPass.uniforms.tDiffusePrevRoom.value= tDiffPrev.renderTarget1.texture;
      setTimeout( ()=>{
        if(  prevRoom != roomName ){
          if( isMainRoom ){
            this.pxlEnv.roomComposer.reset();
          }else{
            this.pxlEnv.mapComposer.reset();
          }
        }
        setTimeout( ()=>{
          this.pxlEnv.mapComposerWarpPass.needsSwap=false;
        },500);
      },100);
    }
    //this.pxlEnv.delayPass.uniforms.tDiffusePrev.value= roomName==this.pxlEnv.mainRoom ? this.pxlEnv.mapComposer.renderTarget1.texture : this.pxlEnv.roomComposer.renderTarget1.texture;
        
    //if(roomName!=this.pxlEnv.mainRoom || start){
    if( start ){
      if( roomName != prevRoom ){
        roomEnv.start();
      }

      this.pxlEnv.roomRenderPass.scene=roomEnv.scene;  
      if( roomEnv.camInitPos && roomEnv.camInitLookAt && ( !holdCamera || !this.pxlEnv.postIntro || this.hotKeyTriggered ) ){
        this.setTransform( roomEnv.camInitPos, roomEnv.camInitLookAt );
        this.hotKeyTriggered=false;
      }
    }else{
      if(  !holdCamera || !this.pxlEnv.postIntro || this.hotKeyTriggered ){
        if(objTarget!=null){
            this.setToObj(objTarget);
        }else{
            this.setTransform( roomEnv.camReturnPos, roomEnv.camReturnLookAt );
        }
        this.hotKeyTriggered=false;
      }
    }
    this.pxlGuiDraws.prepArtistInfo( roomEnv.getArtistInfo() );
    this.camUpdated=true;
    /*this.pxlEnv.mapComposerWarpPass.enabled=!this.pxlEnv.mapComposerWarpPass.enabled;
    this.pxlEnv.mapComposer.render();
    this.pxlEnv.mapComposerWarpPass.enabled=!this.pxlEnv.mapComposerWarpPass.enabled;
    this.pxlEnv.mapComposer.render();*/
        
    this.camera.fov=roomEnv.pxlCamFOV;
    this.camera.zoom=roomEnv.pxlCamZoom;
    this.camera.aspect=roomEnv.pxlCamAspect;
    this.camera.near=roomEnv.pxlCamNearClipping;
    this.camera.far=roomEnv.pxlCamFarClipping;
    this.camera.updateProjectionMatrix();
    
    let standingHeight=this.getUserHeight();
    this.emitCameraTransforms( this.camera.position.clone(), standingHeight, true );
        
    
    this.pxlAutoCam.checkStatus();
  }
  warpToRoomSnapshot(roomName){
    this.pxlEnv.currentRoom=roomName;
    let roomEnv=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];
    
    this.camera.fov=roomEnv.pxlCamFOV;
    this.camera.zoom=roomEnv.pxlCamZoom;
    this.camera.aspect=roomEnv.pxlCamAspect;
    this.camera.near=roomEnv.pxlCamNearClipping;
    this.camera.far=roomEnv.pxlCamFarClipping;
    this.camera.updateProjectionMatrix();
    this.setTransform( roomEnv.camThumbPos, roomEnv.camThumbLookAt );

    let standingHeight=this.getUserHeight();
    this.emitCameraTransforms( this.camera.position.clone(), standingHeight, true );
  }
  
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
    // Begins the warp effect, doesn't affect camera upon triggering, just queuing
  fastTravel(hotkey=0){
        if( this.pxlAutoCam.enabled ){
            return;
        }
        if( this.pxlAutoCam.active || this.pxlAutoCam.autoCamActive ){
            this.pxlAutoCam.preAutoCamToggle();
        }
        
        this.hotKeyTriggered=true;
    if( hotkey == 0 ){ // Lobby
      //this.warpEventTriggered( 1, this.pxlEnv.mainRoom, 'init' );
      this.warpEventTriggered( 1, this.pxlEnv.currentRoom, 'init' );
    }
    
    // Hotkeys are set for a specific scene, make 3d scene file dependant
    return;
    if( hotkey == 1 ){ // Canyon
      //this.warpEventTriggered( 1, this.pxlEnv.mainRoom, this.portalList['Portal_8'] );
    }else if( hotkey == 2 ){ // Dance Hall
      //this.warpEventTriggered( 1, "ShadowPlanet", 'init' );
    }else if( hotkey == 3 ){ // Sunflower Room
      //this.warpEventTriggered( 1, this.pxlEnv.mainRoom, this.portalList['Portal_0'] );
    }
  }



////////////////////////////////////
// Camera Jumping Functions      //
//////////////////////////////////
  // Space is pressed or released
  camJumpKey( jumpKeyIsDown=false ){
    if( jumpKeyIsDown ){ // Space is down
      this.camInitJump();
    }else{ // Space is up
      if(this.cameraJumpActive){ // Space
        this.cameraJumpActive=false;
      }
      this.cameraAllowJump=true;
    }
  }
  // Set initial values for jumpping
  camInitJump(){
    if( !this.gravityActive && this.cameraAllowJump ){
      this.pxlDevice.keyDownCount[2]=this.pxlTimer.prevMS;
      
      this.cameraAllowJump=false; // Prevent jump spamming up stacked colliders; this may be desired for ladders
      this.cameraJumpActive=true;
      this.cameraJumpInAir=true;
      
      this.gravityActive=true;
      this.pxlUser.gravityRate=0;
      this.cameraJumpImpulse=this.cameraJumpInitImpulse[this.pxlUser.lowGrav] * this.userScale;
            
      if( this.objectJumpLock ){
          this.objectJumpLock=false;
          this.nearestFloorHit=this.nearestFloorHitPrev;
      }
    }
  }
  // Step Jump while impulse isn't 0
  camJump(curTime){
    let timeDelta= (curTime-this.pxlDevice.keyDownCount[2]);
    let fpsRateAdjust=1;//Math.min(1, 1/(20*this.pxlTimer.msRunner.y));
    // let jumpPerc=Math.min(1, timeDelta/(this.cameraMaxJumpHold[this.pxlUser.lowGrav]*fpsRateAdjust) );
    let jumpPerc=Math.min(1, timeDelta / this.cameraMaxJumpHold[this.pxlUser.lowGrav] );
        
    if(this.cameraJumpActive){
      let jumpRate=jumpPerc ;
      if(jumpRate==1){
        this.cameraJumpActive=false;
      }else{
        jumpRate=(1-jumpRate)*(1-jumpRate);
        jumpRate=jumpRate* ( jumpRate*.5+.5);
      }
      this.cameraJumpImpulse+=Math.max(0, jumpRate);
    }
    this.cameraJumpImpulse*=(1-jumpPerc);//*.5+.5;

    if( jumpPerc==1 ){
      this.cameraJumpActive=false;
    }
  }
  // Space released before max jump
  killJumpImpulse(){
    let toImpulse=this.cameraJumpImpulse * this.cameraJumpImpulseEaseOut;
    this.cameraJumpImpulse= toImpulse>.1 ? toImpulse : 0;
        this.workerFunc( "killJumpImpulse" );
  }
  
/////////////////////////
// Gravity Functions  //
///////////////////////
  // Gravity update and offset landing height with ease back to standing upright
  updateGravity(){
        if( this.runMain ){
            this.pxlUser.gravityRate = Math.max(0, this.pxlUser.gravityRate-this.cameraJumpImpulse*.2 );
            
            if( this.gravityActive ){
                this.pxlUser.gravityRate = Math.min( this.pxlUser.gravityMax, (this.pxlUser.gravityRate+this.pxlUser.gravityMax*this.pxlTimer.msRunner.y));
            }
            if( this.pxlUser.gravityRate != 0 ){
                // gMult not used, testing for need
                let gMult=1;
                if( !this.gravityActive ){
                    this.pxlUser.gravityRate=this.pxlUser.gravityRate>.01?this.pxlUser.gravityRate*this.gravityEaseOutRate:0;
                    gMult= this.pxlUser.gravityRate;
                }else{
                    gMult=this.pxlUser.gravityRate*.08;
                }
                gMult=Math.min(1, gMult);
                
                this.standingHeightGravInfluence = Math.min(1, this.pxlUser.gravityRate*1.2 / this.pxlUser.gravityMax ) * this.standingMaxGravityOffset;
            }
        }
  }
  // Jump Landing, Room Warps, Portals
  resetGravity(){
    this.pxlUser.gravityRate=0;
    this.workerFunc( "resetGravity" );
    this.jumpLanding( false ); // resetGravity runs jumpLanding on Worker
  }
  jumpLanding( send=true ){
    this.gravityActive=false; // Should probably name it cameraInAir
    this.cameraJumpImpulse=0;
    this.cameraJumpInAir=false; // gravityActive should indicate this value; residual from logic rework
    this.cameraJumpActive=false; // Stop running camJump function
    if( send ){
        this.workerFunc( "jumpLanding" );
    }
  }
  
//////////////////////////////////////////////
// Collision Objects and Ground Functions  //
////////////////////////////////////////////
  // Returns [ Camera Position, Boolean if updateCamera should die
  // Ground plane, obstacles, and no terrain (If there are colliders in scene)
  // ## gravitySource should probably originate from Room's object list, but for now...
  // ## Collision check shouldn't run if no cam movement length aside from gravity, store floor name and collision position from prior run
  mainColliderCheck( curCamPos, gravitySource ){
    // Floor Collider
    //   geoList["floorCollider"] Collision Detection
    let objHit=null;
    this.movementBlocked=false;
    //if((this.cameraMoveLength>0 || this.colliderPrevObjHit==null || this.nearestFloorObjName==null) && this.cameraBooted && this.collidersExist){
    if((this.cameraMoveLength>0 || this.colliderPrevObjHit==null || this.nearestFloorObjName==null) && this.cameraBooted && this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].collidersExist){
      this.colliderValidityChecked=true; // Prevent doublechecking object validity post collision detection
      
      let castDir=new THREE.Vector3(0,-1,0);
      let castPos=curCamPos.clone();//.add(new THREE.Vector3(0,100,0));
      let castHeight=1500;
      castPos.y=castHeight;
      this.objRaycast.set(castPos, castDir );
      let resetKeyDown=false;
      var rayHits=[];
      
      let curQuadrant= ( ~~(castPos.x>0)+"" ) + ( ~~(castPos.z>0)+"" );
      
      if(false && this.antiColliderActive){
        rayHits=this.objRaycast.intersectObjects( [
            ...this.antiColliderList[ 'noAxis' ],
            ...this.antiColliderList[ curQuadrant ],
          ]);//scene.children);
      }
      
      if(rayHits.length > 0){ // Hit a wall, check if you are standing on the wall
        // this.floorColliderInitialHit=true;
        if(this.antiColliderTopActive){
          let rayTopHits=this.objRaycast.intersectObjects([
              ...this.antiColliderTopList[ 'noAxis' ],
              ...this.antiColliderTopList[ curQuadrant ],
            ]);//scene.children);
          
          let closestDist=-99999;
          let yPrevRef=curCamPos.y;
          let curName;
          let curCollisionPos=this.nearestFloorHit;
          let validHitCheck=false;
          for(var x=0; x<rayTopHits.length;++x){
            var obj=rayTopHits[x];
            curName=obj.object.name;
            let curHit=obj.point;
            let curDist=obj.distance;
            let camDist=curHit.y- curCamPos.y; // ## Why??
            let validHit=camDist < this.maxStepHeight;
            validHitCheck = validHitCheck ? validHitCheck : validHit;
            if( (curDist<closestDist && valid) || objHit==null){
              objHit=curName;
              closestDist=curDist;
              curCollisionPos=curHit;
            }
          }
           let pullBack;
          if( !validHitCheck || ((curCamPos.y) < curCollisionPos.y && (this.nearestFloorHitPrev.y-curCollisionPos.y > (this.maxStepHeight+this.getStandingHeight()) && !this.gravityActive) && ( (curCamPos.y+this.maxStepHeight+this.getStandingHeight()) < curCollisionPos.y && this.gravityActive) ) ){
              //objHit=null;
              //this.movementBlocked=true;
              /*if( !objHit ){
                  curCamPos=this.cameraPrevPos.clone();
              }else{
              }*/
              
              //objHit=this.nearestFloorObjName;
              if(this.cameraMovement[0] != 0 || this.cameraMovement[1] != 0 ){
                  validHitCheck=true;
                  this.gravityActive=false;
                  this.objectJumpLock=true;
              }
              
                  pullBack=this.cameraPos.clone();
                  pullBack.y=Math.min(curCamPos.y,pullBack.y);//+this.cameraJumpImpulse;
                  curCamPos=pullBack;
                  curCollisionPos=curCamPos;
                  if(this.gravityActive){
                      curCollisionPos.y=this.nearestFloorHitPrev.y;
                  }else{
                      curCollisionPos.y=this.cameraPos.y;
                  }
                  
              
              this.cameraJumpActive=false;
              this.cameraAllowJump=true;
              this.cameraJumpInAir=false;
              
              this.cameraMovement[0] = 0;
              this.cameraMovement[1] = 0;
              this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0);
              this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);
              //this.pxlDevice.touchMouseData.velocityEase.multiplyScalar(0);
          }
          
          
          //this.colliderValid=validHitCheck;
          if( validHitCheck ){
              if( objHit == null ){
                  this.nearestFloorHit = this.nearestFloorHitPrev;
                  this.nearestFloorObjName = this.nearestFloorObjNamePrev;
                  if( Math.abs(curCamPos.y-this.nearestFloorHit.y) > (this.maxStepHeight+this.getStandingHeight()) ){
                      this.colliderValid = false;
                      this.gravityActive = true;
                  }
              }else{
                  this.nearestFloorHitPrev = this.nearestFloorHit;
                  this.nearestFloorObjNamePrev = this.nearestFloorObjName;
                  this.nearestFloorHit = curCollisionPos;
                  this.nearestFloorObjName = objHit;
              }
          }
        }else{
          this.colliderFail=true;
          this.movementBlocked=true;
        }
      }else{
        // ## Find orientation to gravitational source if any exist in Room Environment
        let stepUpDist=this.maxStepHeight+this.cameraJumpImpulse;
        let validDistRange=stepUpDist+this.maxStepHeight+this.pxlUser.gravityRate;
        castPos.y=curCamPos.y+stepUpDist;
        this.objRaycast.set(castPos, castDir );
                
                if( !this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList ){
                    this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList={};
                }
                if( !this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[curQuadrant] ){
                    //console.log("trigger build master list");
                    let masterList=[];
                    let curRoomThis=this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom];
                    masterList.push( ...curRoomThis.colliderList[ 'noAxis' ] );
                    masterList.push( ...curRoomThis.colliderList[ curQuadrant ] );
                    masterList.push( ...curRoomThis.antiColliderTopList[ 'noAxis' ] );
                    masterList.push( ...curRoomThis.antiColliderTopList[ curQuadrant ] );
                    this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[curQuadrant]=masterList;
                }
                
        if( (this.colliderActive && this.antiColliderTopActive) || this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive  ){
                    rayHits=this.objRaycast.intersectObjects( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList[curQuadrant] );
        }else{
          return curCamPos; // No colliders
        }
                
        if(rayHits.length > 0){
          this.floorColliderInitialHit=true;
          let closestDist=-99999;
          let curName;
          let curCollisionPos=this.nearestFloorHit;
          
          for(let x=0; x<rayHits.length;++x){
            let obj=rayHits[x];
            //let curHit=castPos.y-obj.distance;
            let curDist=obj.distance;
            
            let curHit=obj.point;
            let validHit=false;
            curName=obj.object.name;
            let camDist=curHit.distanceTo( curCamPos );
            
            validHit=camDist<this.maxStepHeight;
            if( ( this.portalList[curName] || this.roomWarpZone.includes(curName) ) && validHit){
              objHit=curName;
              curCollisionPos=curHit;
              break;
            }else if( !this.itemCheck(curName, validHit) ){
              if(curDist<closestDist || objHit==null){
                objHit=curName;
                closestDist=curDist;
                curCollisionPos=curHit;
              }
            }
          }
                    
                        
                    if( this.nearestFloorObjName==null && objHit!=null){
            this.nearestFloorHitPrev=curCollisionPos;
            this.nearestFloorObjNamePrev=objHit;
                        
                        this.nearestFloorHit=curCollisionPos;
                        this.nearestFloorObjName=objHit;
          }
          
          if( this.nearestFloorHitPrev.y-curCollisionPos.y > (this.maxStepHeight+this.getStandingHeight()) && !this.gravityActive){

            //this.nearestFloorHit=this.nearestFloorHitPrev;
            //this.nearestFloorObjName=this.nearestFloorObjNamePrev;
            
            //this.cameraMovement[0] = Math.abs(this.cameraMovement[0])<this.posRotEasingThreshold ? 0 : this.cameraMovement[0]*this.cameraMovementEase;
            //this.cameraMovement[1] = Math.abs(this.cameraMovement[1])<this.posRotEasingThreshold ? 0 : this.cameraMovement[1]*this.cameraMovementEase;

            if( !objHit ){
                curCamPos=this.cameraPrevPos.clone();
            }else{
                curCamPos=this.cameraPos.clone();
            }
            objHit=this.nearestFloorObjName;
            
            this.cameraMovement[0] = 0;
            this.cameraMovement[1] = 0;
            this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar(0);
            this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);
            //this.pxlDevice.touchMouseData.velocityEase.multiplyScalar(0);
          }else{
            this.nearestFloorHitPrev=this.nearestFloorHit;
            this.nearestFloorObjNamePrev=this.nearestFloorObjName;
            
            
            this.nearestFloorHit=curCollisionPos;
            this.nearestFloorObjName=objHit;
            if( objHit == null ){
                this.colliderValid=false;
                this.gravityActive=true;
            }
          }
        }else{
          // If this runs, means the user ran off the edge of the collider and there is no floor below them.
          this.colliderFail=true;
          this.movementBlocked=true;
          this.colliderValidityChecked=false;
          curCamPos=this.cameraPos.clone();
        }
      }
    }else{
      // User didn't move, may be falling from gravity
      //   Call valid object check within distance from camera location
      this.colliderValidityChecked=false;
    }
    this.colliderValidityChecked=false;
    
    return curCamPos;
  }
  
  // Assuming no walking colliders currently, only Room Warp colliders
  // ## Update to account for new Room Envrionments and their corresponding Collider Object Lists
  roomColliderCheck(curCamPos){
    this.colliderValidityChecked=true; // Prevent doublechecking object validity post collision detection
    this.colliderValid=false; // If there are no colliders, don't run event checks
    this.colliderFail=false;
    
    // When rooms get collider objects, there variables must be set-
    let camPosDupe=curCamPos.clone();
    camPosDupe.y=0;
    this.nearestFloorHit=camPosDupe;
    this.nearestFloorObjName="None";
    
    if( !this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp ){ return curCamPos; }
    
    
    if( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp.length > 0 ){
      let castDir=new THREE.Vector3(0,-1,0);
      let castPos=curCamPos.clone();//.add(new THREE.Vector3(0,100,0));
      
      let castHeight=1500;
      castPos.y=castHeight;
      this.objRaycast.set(castPos, castDir );
      
      var rayHits=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp);//scene.children);

      if(rayHits.length > 0){ // Hit a wall, check if you are standing on the wall
        this.pxlEnv.currentAudioZone=0;
        this.warpEventTriggered( 1, this.pxlEnv.mainRoom );
        //return true; // Room warp, kill camera calculations
                return curCamPos;
      }
            
      let minDist=curCamPos.y;
      let minHitPos=curCamPos;
      if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive==true){
          if( !this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList ){
              let masterList=[];
              let objKeys=Object.keys( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList );
              objKeys.forEach( (k)=>{
                  masterList.push( ...this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList[k] );
              });
              this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList=masterList;
          }
          
          this.objRaycast.set(castPos, castDir );
          rayHits= this.objRaycast.intersectObjects( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList );

          if(rayHits.length == 0){ // Hit a wall, check if you are standing on the wall
              return this.cameraPrevPos.clone();
          }else{
              
              rayHits.forEach( (hit)=>{
                  let curDist=hit.distance;
                  let curOffset=curCamPos.y-hit.point.y;
                  if( curDist>curCamPos.y && curOffset< curCamPos.y+this.maxStepHeight ){
                      minDist=curDist;
                      minHitPos=hit.point;
                  }
              });
              if( curCamPos.y<minHitPos.y){
                  return minHitPos.clone();
              }
          }
      }
            
    }
    return curCamPos;
  }
    // ## Mid Dev, turning it off for now
    /*roomColliderCheck(curCamPos, standingHeight){
    this.colliderValidityChecked=true; // Prevent doublechecking object validity post collision detection
    this.colliderValid=false; // If there are no colliders, don't run event checks
    this.colliderFail=false;
    
    // When rooms get collider objects, there variables must be set-
    let camPosDupe=curCamPos.clone();
    camPosDupe.y=0;
    this.nearestFloorHit=camPosDupe;
    this.nearestFloorObjName="None";
    
    //if( !this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp ){ return curCamPos; }
    
    
    //if( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp.length > 0 ){
      let castDir=new THREE.Vector3(0,-1,0);
      let castPos=curCamPos.clone();//.add(new THREE.Vector3(0,100,0));
      
      let castHeight=1500;
      castPos.y=castHeight;
      this.objRaycast.set(castPos, castDir );
      
      var rayHits=this.objRaycast.intersectObjects(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].roomWarp);//scene.children);

      if(rayHits.length > 0){ // Hit a wall, check if you are standing on the wall
        this.pxlEnv.currentAudioZone=0;
        this.warpEventTriggered( 1, this.pxlEnv.mainRoom );
        //return true; // Room warp, kill camera calculations
                return curCamPos;
      }
            
            if(this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderActive==true){
                if( !this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList ){
                    let masterList=[];
                    let objKeys=Object.keys( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList );
                    objKeys.forEach( (k)=>{
                        masterList.push( ...this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderList[k] );
                    });
                    this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList=masterList;
                }
                //console.log( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList )
                this.objRaycast.set(castPos, castDir );
                rayHits= this.objRaycast.intersectObjects( this.pxlEnv.roomSceneList[this.pxlEnv.currentRoom].colliderMasterList );

                if(rayHits.length == 0){ // Hit a wall, check if you are standing on the wall
                    let retPos=this.cameraPrevPos.clone();
                    retPos.y=curCamPos.y;
                    return retPos;
                }else{
                    let validHit=false;
                    let blockMovement=false;
                    let gravityEnabled=false;
                    let minDist=99999;
                    let minHitPos=curCamPos.clone();
                    minHitPos.y-=this.maxStepHeight;
                    
                    rayHits.forEach( (hit)=>{
                        let curDist=hit.distance;
                        //let curOffset=curCamPos.y-hit.point.y;
                        let curOffset=hit.point.y;
                        //if( curDist>curCamPos.y && curOffset< curCamPos.y+this.maxStepHeight ){
                        //if( curDist<minDist && curOffset< curCamPos.y+this.maxStepHeight ){
                        if( curOffset > curCamPos.y-this.maxStepHeight && curOffset < curCamPos.y+this.maxStepHeight+standingHeight && minHitPos.y<curOffset){
                            validHit=true;
                            gravityEnabled=false;
                            minDist=curDist;
                            minHitPos=hit.point;
                        }else if( curOffset > curCamPos.y+this.maxStepHeight ){
                            blockMovement=true;
                        }else if( curOffset < curCamPos.y-this.maxStepHeight && validHit==false ){
                            gravityEnabled=true;
                        }
                    });
                    if( blockMovement ){
                        let retPos=this.cameraPrevPos.clone();
                        retPos.y=curCamPos.y;
                        return retPos;
                    }
                    if( gravityEnabled ){
                        this.gravityActive=true;
                    }
                    if( validHit ){
                        if( curCamPos.y<minHitPos.y ){
                            this.jumpLanding();
                        }
                        return minHitPos.clone();
                    }
                }
            }
            
    //}
    return curCamPos;
  }*/
  
  // Collider Ray Casting Complete Failure
  /*checkColliderFail( curCamPos ){
        if(this.gravityActive && (curCamPos.y-this.pxlUser.gravityRate)< this.nearestFloorHit.y && (curCamPos.y+this.maxStepHeight)> this.nearestFloorHit.y){// && this.cameraMovement[0]!=0 && this.cameraMovement[1]!=0){
      this.pxlUser.gravityRate=0;
      this.standingHeightGravInfluence=0;
      this.gravityActive=false;
      curCamPos=this.nearestFloorHit.clone();
      return curCamPos;
    }
    
    if(!this.colliderFail && !this.movementBlocked){ return curCamPos; }
    if(this.colliderFail || this.movementBlocked){
      this.colliderFail=false;
      
      this.cameraMovement[0] = 0;
      this.cameraMovement[1] = 0;
      this.colliderValidityChecked=true; // ## Prob not needed, but will test
      this.colliderValid=false;
      
      this.pxlDevice.keyDownCount[0]+=(this.pxlTimer.curMS-this.pxlDevice.keyDownCount[0])*.07;
      this.pxlDevice.keyDownCount[1]+=(this.pxlTimer.curMS-this.pxlDevice.keyDownCount[1])*.07;
      this.pxlDevice.touchMouseData.velocity.multiplyScalar(0);
      this.pxlDevice.touchMouseData.velocityEase.multiplyScalar(0);
      
      if(this.movementBlocked){
        this.movementBlocked=false;
        this.gravityActive=false;
        this.gravityRate=0;
        this.standingHeightGravInfluence=0;
      }
      
      let failPos=this.nearestFloorHit;
      curCamPos.x=failPos.x;
      curCamPos.z=failPos.z;
      return curCamPos;
    }
  }*/
  
///////////////////////////////
// Collider Event Triggers  //
/////////////////////////////
  // Should only run when this.colliderValid==false
  // ## For GravitySource, make sure to get vector delta magnitude, not just Y delta
  checkColliderValid( curCamPos ){
    this.colliderValidityChecked=true;
    let validDist=this.maxStepHeight+this.pxlUser.gravityRate;
    
    let curDist = curCamPos.distanceTo( this.nearestFloorHit );
    
    let checkValid= curDist < validDist;// && (curCamPos.y+validDist)<this.nearestFloorHit.y;
    
    this.colliderValid=checkValid;
        
        return curDist;
    //return checkValid; // Currently not needed, pre-emptive
  }
  
  // ## Maybe a good candidate for converting to a function list
  eventTrigger( checkObject=null ){
    if(!checkObject){ return false; } // No collider, might be in a Room Environment with no colliders
  
    // -- Check for Portals -- //
    // -- Within Room Environment position/rotation updates -- //
    if(this.portalList[checkObject]){
      this.warpEventTriggered( 0, this.portalList[checkObject]);
            this.eventCheckStatus=false;
      return true;
    }
    
    // -- Check for between Room Warp Zones -- //
    // -- Separate ThreeJS Scene position/rotation updates -- //
    if( this.roomWarpZone.includes(checkObject) ){ // ## Should live in the Room Environment
      this.warpEventTriggered( 1, checkObject );
      this.eventCheckStatus=false;
      return true; // Room warp, kill camera calculations
    }
    
    // -- Check for change between different Collider objects -- //
    // -- Changes may trigger Audio and Screen Visual Effects -- //
    this.colliderShiftActive=this.colliderCurObjHit!=checkObject || this.colliderShiftActive ;
    this.colliderPrevObjHit= this.colliderCurObjHit;
    this.colliderCurObjHit=checkObject;
    // If the volume adjust is mid transition, keep the fade rolling
    this.colliderShiftActive=this.colliderShiftActive || !(this.colliderAdjustPerc==1 || this.colliderAdjustPerc==0);
    
    // Fade Up/Down Audio/Video effects per room names
    // ## These should be handled by the Room Environment itself
    if(this.colliderShiftActive && this.colliderCurObjHit){
      let volMult= 1;
            let audioTriggerCur = this.colliderCurObjHit.includes("AudioTrigger")
            //let audioTriggerPrev = (this.colliderPrevObjHit || "").includes("AudioTrigger")
            //let audioTrigger= ( audioTriggerCur || audioTriggerPrev ) && ( audioTriggerCur != audioTriggerPrev);
            if( audioTriggerCur ){
                volMult=-1;
            }
      this.colliderAdjustPerc=Math.min(1, Math.max(0,  this.colliderAdjustPerc + this.colliderAdjustRate * volMult ));
      let curExposure=(1-this.colliderAdjustPerc);
      
      let curExp=1.0;
      // ## Convert to function dictionary per Room Environment's Collider[objName]
      if(this.colliderCurObjHit == "AudioTrigger_1"){ // Sunflower Room
        this.pxlEnv.currentAudioZone=1;
        curExp= curExp - curExposure*this.uniformScalars.darkBase; // ## Don't do it this way... blend, don't add offset
        this.uniformScalars.exposureUniformBase=curExp;
      }else if(this.colliderCurObjHit == "AudioTrigger_2"){ // Lobby
        this.pxlEnv.currentAudioZone=2;
                let animPerc=1;
        curExp= this.uniformScalars.curExp + curExposure*this.uniformScalars.brightBase*animPerc;  // ## Don't do it this way... blend, don't add offset
        this.uniformScalars.exposureUniformBase=curExp;
        if(this.rolLobby){  }
                this.proximityScaleTrigger=true; // Fade Out proximity range
                
                this.pxlAudio.setFadeActive(-1);
      }else if(this.colliderCurObjHit == "MainRoom"){ // Shadow Planet / Dance Floor
        this.pxlEnv.currentAudioZone=3;
        this.warpEventTriggered( 1, "ShadowPlanet" );
      }else{
        this.pxlEnv.currentAudioZone=0;
        curExp= curExp*(1-curExposure) + this.uniformScalars.exposureUniformBase*curExposure; // ## Don't do it this way... blend, don't add offset
      }
      
      // Transition has completed when True
      this.colliderShiftActive=!(this.colliderAdjustPerc==1 || this.colliderAdjustPerc==0);
            
      // If Lobby geomtry is visible, but no longer in the Lobby, toggle visiblity
            // Runs once, at the moment of collider change
      if( this.colliderPrevObjHit=="AudioTrigger_2" && this.colliderCurObjHit!=this.colliderPrevObjHit){
                this.proximityScaleTrigger=true; // Fade In proximity range
                this.pxlAudio.setFadeActive(1);
      }
      
            if( this.pxlDevice.mobile ){
                curExp=this.colliderAdjustPerc;
            }
            
      // Set scene exposure on post-process composer passes 
      this.pxlEnv.updateCompUniforms(curExp);
            

            // Scale proximity visual
            if(this.proximityScaleTrigger && !this.pxlDevice.mobile && !this.pxlAutoCam.enabled ){
                let proxMult=this.colliderAdjustPerc;
                proxMult=1-(1-proxMult)*(1-proxMult);
                this.pxlEnv.fogMult.x = proxMult;
                if( !this.colliderShiftActive ){
                    this.proximityScaleTrigger=false;
                }
            }
            
            this.eventCheckStatus=this.colliderShiftActive;
    }
  }
  
  // Returns if an item was triggered
  // Currently only used as - if( !this.itemCheck(validHit) ){}
  //   Preventing standing on the item collider plane
  itemCheck(curNameBase, validHit){
    if(!validHit){ return false; }
        
        let curName=curNameBase.split("_").shift();
    
    if(this.pxlUser.itemListNames.includes(curNameBase)){
            let itemPickup=this.pxlUser.checkItemPickUp(curName);
            if(itemPickup){
                return this.itemActive( curName, curNameBase );
            }
    }
    return false; // Allowed to stand on object
  }
  itemTrigger(){
        if( this.pxlUser.itemActiveTimer.length>0 ){
            this.pxlUser.itemActiveTimer[0]=this.pxlTimer.curMS;
        }else{
            if( this.pxlUser.mPick.length==0){
                this.pxlUser.mPick=this.pxlUtils.randomizeArray( ['LizardKing', 'StarField', 'InfinityZoom'] );
            }
            //this.pxlUser.mPick="LizardKing";
            let setItem= this.pxlUser.mPick.pop();
            this.pxlUser.checkItemPickUp(setItem);
            this.itemActive( setItem );
        }
    }
    itemActive( curName=null, curNameBase=null ){
        if( curName==null ){
            return false;
        }
        let timer=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;
        let finCmd="";
        let text="";
        if(curName=="LowGravity"){
            text="Low Gravity";
            finCmd="this.lowGrav=0;this.itemGroupList['"+curNameBase+"'].visible=true;";
            timer=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;
        }else if(curName=="LizardKing"){
            text="I am the Lizard King";
            finCmd="this.lKing=0;this.lKingWarp.set(...this.lKingInactive);this.lKingPass.enabled=false;"+(!this.pxlDevice.mobile && "this.itemGroupList['"+curNameBase+"'].visible=true;");
            timer=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;
        }else if(curName=="StarField"){
            text="Major Tom";
            finCmd="this.sField=0;this.sFieldPass.enabled=false;"+(!this.pxlDevice.mobile && "this.itemGroupList['"+curNameBase+"'].visible=true;");
            timer=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;
        }else if(curName=="InfinityZoom"){
            text="Fractal Substrate";
            finCmd="this.iZoom=0;this.iZoomPass.enabled=false;"+(!this.pxlDevice.mobile && "this.itemGroupList['"+curNameBase+"'].visible=true;this.pxlEnv.mapComposerWarpPass.needsSwap=true;this.pxlEnv.mapComposerWarpPass.enabled=false;");
            timer=this.pxlTimer.prevMS+this.pxlUser.itemRunTime;
            //this.pxlEnv.mapComposerWarpPass.needsSwap=false;
            this.pxlEnv.mapComposerWarpPass.needsSwap=true;
            setTimeout(()=>{
                /*if( this.pxlEnv.currentRoom==this.pxlEnv.mainRoom ){
                    this.pxlEnv.roomComposer.reset();
                    this.pxlEnv.mapComposer.render();
                }else{
                    this.pxlEnv.mapComposer.reset();
                    this.pxlEnv.roomComposer.render();
                }*/
                this.pxlEnv.mapComposer.render();
                this.pxlEnv.roomComposer.render();
                setTimeout(()=>{
                    this.pxlEnv.mapComposerWarpPass.needsSwap=false;
                    this.pxlEnv.mapComposerWarpPass.enabled=true;
                    /*if( this.pxlEnv.currentRoom==this.pxlEnv.mainRoom ){
                        this.pxlEnv.roomComposer.reset();
                    }else{
                        this.pxlEnv.mapComposer.reset();
                    }*/
                },500);
            },500);
            /*this.pxlEnv.mapComposer.render();
            this.pxlEnv.mapComposerWarpPass.enabled=!this.pxlEnv.mapComposerWarpPass.enabled;
            this.pxlEnv.mapComposer.render();*/
            //this.pxlEnv.roomComposer.render();
            //this.pxlEnv.mapComposer.render();
        }else{
            return false;
        }
        this.pxlGuiDraws.buildItemHud(curName,text);
        if( !this.pxlDevice.mobile ){
            this.pxlUser.itemGroupList[curNameBase].visible=false;
        }
        this.pxlUser.itemInactiveCmd.push( finCmd );
        this.pxlUser.itemActiveTimer.push(timer);
        this.pxlUser.itemActiveList.push(text);
        return true; // Don't stand upon item collision object
    }
    
////////////////////////////////////
// Camera Positional Functions   //
//////////////////////////////////
  // Apply down directional key values to camera movement array
  updateMovement(curTime){
    let rate=[0,0];//
    let dir=[...this.pxlDevice.directionKeysPressed];
    let strafe=0;
    let truck=0;
    // Get millisecond time differences so camera movement is independant of FPS
    let deltas=[ (curTime-this.pxlDevice.keyDownCount[0]), (curTime-this.pxlDevice.keyDownCount[1]) ]; // 1.000 seconds
    if((dir[0]+dir[2])==1){
      strafe=dir[2]-dir[0];
      let turnRate=this.pxlQuality.settings.leftRight ? 1.5 : ( 1 - Math.min(1, Math.abs(this.cameraMovement[1]*.1))*.6 ) ;
      rate[0]=( (this.pxlQuality.settings.leftRight ? 2.0 : 6.0) + (1+deltas[0]*(deltas[0]+1)) * .1 ) * turnRate;
    }else{
      this.pxlDevice.keyDownCount[0]=curTime;
    }
    if((dir[1]+dir[3])==1){
      truck=dir[3]-dir[1];
      let truckRate=1- Math.min(1, Math.abs(this.cameraMovement[0]*.07))*.65 ;
      rate[1]=( 1.0+((deltas[1]*(deltas[1]*3+2+this.pxlDevice.shiftBoost))*.15) ) *truckRate;
      rate[1]=Math.min(30,rate[1]);
    }else{
      this.pxlDevice.keyDownCount[1]=curTime;
    }
    this.cameraMovement[0]+=strafe*rate[0];
    this.cameraMovement[1]+=truck*rate[1];
  }

  // Frame starting position
  initFrameCamPosition(){
    let curCamPos=this.cameraPos.clone();
    
    if(!this.cameraBooted){ // These should be set from Scene File, if not, initial values
      this.cameraAimTarget.position.set(0, 0, 0);//.add(new THREE.Vector3(0,0,0));
      this.cameraPrevPos=new THREE.Vector3(curCamPos.clone());
      this.cameraPrevLookAt=new THREE.Vector3(0,0,1);
    }else{
      let userMovement;
      /*if(this.pxlDevice.mobile){ // ## When Mobile is implemented, convert to this.cameraMovement
        userMovement=new THREE.Vector3(-this.pxlDevice.touchMouseData.curDistance.x*.01,0,-this.pxlDevice.touchMouseData.curDistance.y*.01);
        this.cameraMoveLength=userMovement.length();
      }else{*/
        //userMovement=new THREE.Vector3(this.cameraMovement[0],0,this.cameraMovement[1]);
        userMovement=new THREE.Vector3((this.pxlQuality.settings.leftRight?this.cameraMovement[0]*.5:0),0,this.cameraMovement[1]);
        this.cameraMoveLength=userMovement.length();
      //}
      userMovement.applyQuaternion(this.camera.quaternion);
      userMovement.normalize().multiply(new THREE.Vector3(1,0,1)).multiplyScalar(this.cameraMoveLength*this.cameraMoveLengthMult);
      curCamPos.add(userMovement);
      
      this.cameraMovement[0] = Math.abs(this.cameraMovement[0])<this.posRotEasingThreshold ? 0 : this.cameraMovement[0]*this.cameraMovementEase;
      this.cameraMovement[1] = Math.abs(this.cameraMovement[1])<this.posRotEasingThreshold ? 0 : this.cameraMovement[1]*this.cameraMovementEase;
      
      //curCamPos=curCamPos.clone().multiplyScalar(this.camPosBlend).add(this.cameraPrevPos.clone().multiplyScalar(1-this.camPosBlend));
      // ## When GravitySource exists, apply cameraMovement offset
      //     Cam movement to Vector3( cm[0], 0, cm[1] ), rotated by Quaternion from Euler Normalize Vector (camPos - collider hit)
      //   DON NOT USE CAMERA QUATERNION, movement doesn't align to camera orientation
      curCamPos.y=this.cameraPos.y + this.cameraJumpImpulse;
      if( this.workerActive ){
          this.cameraJumpImpulse=0; // Additive from the worker thread
      }
    }
        
    this.cameraCross=new THREE.Vector3(1,0,0).applyQuaternion( this.camera.quaternion );
        
    return curCamPos;
  }
  // ## Set up gravity direction
  //      Delta ( camPos + gravity direction * gravity rate ) > ( Distance camPos to Collider Hit )
  updateCamPosition( curCamPos ){
    if( this.gravityActive ){
      //curCamPos=this.checkColliderFail( curCamPos );
      
      let validDist=this.maxStepHeight+this.pxlUser.gravityRate;
      let jumpUpState=(curCamPos.y)<this.nearestFloorHit.y;
      /*if( jumpUpState || this.colliderFail ){
        //curCamPos.x = nPrev.x;
        //curCamPos.y = Math.max( nPrev.y, curCamPos.y-this.pxlUser.gravityRate );
        curCamPos.y = Math.max( 100, curCamPos.y-this.pxlUser.gravityRate );
        //curCamPos.z = nPrev.z;
        if( curCamPos.y == 100 ){//nPrev.y){
          let nPrev=this.nearestFloorHitPrev;
          curCamPos=nPrev.clone();
          this.resetGravity();
        }
        }*/
      if( jumpUpState ){
        let nPrev=this.nearestFloorHitPrev;//.nearestFloorHit;//this.nearestFloorHitPrev;
        //curCamPos.x = nPrev.x;
        curCamPos.y = Math.max( nPrev.y, curCamPos.y);//-this.pxlUser.gravityRate );
        //curCamPos.z = nPrev.z;
        if( curCamPos.y < 0 ){//nPrev.y){
          curCamPos.x=nPrev.x;//clone();
          curCamPos.z=nPrev.z;//clone();
          //this.resetGravity();
          //this.jumpLanding();
        }
      }else{
        curCamPos.y = Math.max( this.nearestFloorHit.y, curCamPos.y - this.pxlUser.gravityRate );
        if( curCamPos.y == this.nearestFloorHit.y && curCamPos.y<this.cameraPrevPos.y ){
          this.jumpLanding();
        }
      }
    }else{
      let distToFloor=curCamPos.distanceTo( this.nearestFloorHit );
      if( distToFloor < this.maxStepHeight){
        curCamPos.y = this.nearestFloorHit.y;
      }else{
        curCamPos=this.cameraPos.clone();
        
        let fallStatus=curCamPos.y > this.nearestFloorHit.y;
        this.gravityActive=fallStatus;
        this.colliderFail= !fallStatus;
                this.workerFunc("jumpLanding");
        //curCamPos=this.checkColliderFail( curCamPos );
      }
    }
    return curCamPos;
  }

  // Return Standing Height; Head to Foot only - No landing, gravity, walk bounce
  getStandingHeight(){
    return this.standingHeight * this.userScale;
  }
  
  // Return User Height with Jump landing gravity offset and walking bounce
  getUserHeight(){
    // Add bob to movement to appear as taking steps
    let walkBounceAdd=Math.min(1, Math.abs(this.cameraMovement[1]));
    this.walkBouncePerc=this.walkBouncePerc>=1?1:this.walkBouncePerc+.05;
    this.walkBounce+=walkBounceAdd;
    this.walkBouncePerc=this.walkBouncePerc*.9+walkBounceAdd;
    if(this.walkBouncePerc<.03){
      this.walkBouncePerc=0;
      this.walkBounce=0;
      this.walkBounceSeed=Math.random()*2351.3256;
    }
    let walkBounceOffset=Math.sin(this.walkBounce*.4+this.walkBounceSeed+this.cameraMovement[1]*.2)*this.walkBouncePerc*.3;
    
    let curStandingHeight=this.getStandingHeight() - this.standingHeightGravInfluence + walkBounceOffset;
    
    return curStandingHeight;
  }
  
  
////////////////////////////////////
// Camera Rotational Functions   //
//////////////////////////////////
  // ## Mobile currently not supported
  // So outdated... Gyroscope rotation; Mobile / Tablet / Surface orientation
  camApplyMobileRotation(){
    if(this.cameraPose.alpha!=null){ 
      let dtor=0.017453292519943278; //   PI/180
      let halfSqrt=2.23606797749979; // Sqrt(5)
      
      let camPoseQuat=new THREE.Quaternion();
      
      let a=this.cameraPose.alpha*dtor+this.cameraPose.alphaOffset+2.1;
      let b=this.cameraPose.beta*dtor;
      let g=this.cameraPose.gamma*dtor;
      let viewNormal=new THREE.Vector3(0,0,1);
      let poseQuat=new THREE.Quaternion();
      let initPoseQuat=new THREE.Quaternion(-halfSqrt,0,0,halfSqrt);
      let euler=new THREE.Euler();
      euler.set(b,a,-g,'YXZ'); // Device returns YXZ for deviceOrientation
      camPoseQuat.setFromEuler(euler);
      camPoseQuat.multiply(initPoseQuat);
      camPoseQuat.multiply(poseQuat.setFromAxisAngle(viewNormal,-this.cameraPose.orientation));
      camPoseQuat.normalize();
      
      let smoothedQuat=new THREE.Quaternion();
      THREE.Quaternion.slerp(this.camera.quaternion,camPoseQuat,smoothedQuat,0.35);
      this.camera.setRotationFromQuaternion(smoothedQuat);
    }
  }

  // Camera Rotation; Look At(Aim) Target
  updateCameraRotation(){
    if(this.cameraPose.alpha==null){ // ## Should gyro exist, don't run.  But need to allow controlled look around on mobile
      let xGrav=this.pxlDevice.gyroGravity[2];//*this.pxlUser.gravityRate;//*PI;
      
      let viewNormal=new THREE.Vector3(0,0,1);
      let poseQuat=new THREE.Quaternion();
      // ## Theres a better place for this....
      this.pxlDevice.touchMouseData.netDistance.y=Math.min(this.pi*500, Math.max(-this.pi*500, this.pxlDevice.touchMouseData.netDistance.y));
      let euler=new THREE.Euler();
        euler.set(
          (this.pxlDevice.touchMouseData.netDistance.y*.001),
          (this.pxlDevice.touchMouseData.netDistance.x*.001+xGrav),
          0,
          'YXZ'); // Device returns YXZ for deviceOrientation
      let camPoseQuat=new THREE.Quaternion();
      camPoseQuat.setFromEuler(euler);
      camPoseQuat=this.pxlDevice.touchMouseData.initialQuat.clone().multiply(camPoseQuat);
      //camPoseQuat.multiply(poseQuat.setFromAxisAngle(viewNormal,-this.cameraPose.orientation));
      camPoseQuat.normalize();
      
      let smoothedQuat=new THREE.Quaternion();
      THREE.Quaternion.slerp(this.camera.quaternion,camPoseQuat,smoothedQuat,0.35);
      smoothedQuat=smoothedQuat.normalize();
      this.camera.setRotationFromQuaternion(smoothedQuat);
      //this.camera.setRotationFromQuaternion(camPoseQuat);
      
      /* let camLookAtArr;
      let camLookAt=new THREE.Vector3();
      camLookAt.set( ...camLookAtArr );
      
      camLookAt.add(cameraPos);
      
      this.camera.lookAt(camLookAt);
      if(!this.cameraBooted){
        camPosBlend=.8;
        camLookAt.multiplyScalar(camPosBlend).add( this.cameraPrevLookAt.multiplyScalar(1-camPosBlend) );
        this.camera.lookAt(camLookAt);
      }
      this.cameraPrevLookAt=camLookAt.clone();
      */
    }
  }
  
  lookAtTargetLock(){
    if(!this.lookAtTargetActive){ return; }
    
    if(this.lookAtTargetActive){
      if(this.lookAtLockFader!=0){
        this.lookAtLockPerc+=(this.lookAtLockFader+Math.min(1,this.pxlDevice.touchMouseData.velocity.length()*.001))*this.lookAtLockFadeRate;
        if(this.lookAtLockPerc<0 || this.lookAtLockPerc>1){
          this.lookAtLockPerc=this.lookAtLockPerc<0?0:1;
          this.lookAtLockFader=0;
        }
        this.lookAtPerc.x = this.lookAtLockPerc;
      }
        
      // If Look At is locked
      //    set the offset in rotation
      //  slerpin some quats!
      if(this.lookAtLockPerc>0){
        let origCamQuat=this.camera.quaternion.clone();
        this.camera.lookAt(this.cameraAimTarget.position);
        let targetCamQuat=this.camera.quaternion.clone();
        if(this.lookAtLockPerc==1){
          this.camera.setRotationFromQuaternion( targetCamQuat );
        }else{
          this.camera.setRotationFromQuaternion( targetCamQuat.slerp(origCamQuat,Math.cos(this.lookAtLockPerc*pi)*.5+.5) );
        }
      }
    }
  }
  
///////////////////////////////////////////
// Render Effects / Quality Functions   //
/////////////////////////////////////////
  // Room Warp / Portal Screen Effect
  warpEventTriggered( visualType=0, warpObj=null, target='init' ){
    if( !this.warpActive ){
            this.pxlEnv.mapComposerWarpPass.needsSwap=true;
      this.warpType=visualType;
      this.warpObj=warpObj;
      this.warpTarget=target;
      this.warpActive=true;
      this.pxlEnv.initWarpVisual( visualType );
    }
  }
  warpCamRun(){
    if(this.warpType==0){
      this.setToObj( this.warpObj );
    }else if(this.warpType==1){
      let init=this.warpTarget=='init';
      this.warpToRoom( this.warpObj, init, this.warpTarget );
    }
    this.pxlEnv.setExposure( this.uniformScalars.exposureUniformBase );
    this.warpObj=null;
    this.warpTarget=null;
    this.warpActive=false;
        
  }

  // All render quality updates
  lowQualityUpdates(){
    if(this.HDRView){
      let uPitch=new THREE.Vector3(0,0,-1).applyQuaternion( this.camera.quaternion );
      let uRot=uPitch.clone().multiply(new THREE.Vector3(1,0,1)).normalize();
      let ptr=0.1591549430918955;
      
      // Update shader uniforms -
      this.camRotPitch.set(
        -Math.atan2(uRot.x,uRot.z)*ptr,
        uPitch.y*.5 );
    }
  }

  // Mid level updates
  midQualityUpdates(){
    // Trailing Effects; Fake Motion Blur
    if( this.pxlQuality.settings.motion ){ // Don't run blur pass if the quality setting is under 50%
      let shaderCamRot=new THREE.Vector3(0,0,0);
      shaderCamRot.applyQuaternion(this.camera.quaternion);//.add(camOrigQuat).multiplyScalar(.5);
      this.camRotXYZ.multiplyScalar(.8).add( shaderCamRot.multiplyScalar(.2) );
      
      let viewDirection;
      if(this.pxlDevice.mobile){
        let sWHalf = sW*.5
        let sHHalf= sH*.5;
        let  fromWorldPos=new THREE.Vector3(0,0,10);
        let  toWorldPos=new THREE.Vector3(0,0,10);
        //fromWorldPos.applyMatrix4( this.camera.matrixWorld.clone() ).project(this.camera);
        //toWorldPos.applyMatrix4( this.prevWorldMatrix ).project(this.camera);
        fromWorldPos.applyQuaternion( this.camera.quaternion.clone() ).project(this.camera);
        toWorldPos.applyQuaternion( this.prevQuaternion ).project(this.camera);
      
        fromWorldPos.x=(fromWorldPos.x+1)*sWHalf;
        fromWorldPos.y=-(fromWorldPos.y-1)*sHHalf;
        toWorldPos.x=(toWorldPos.x+1)*sWHalf;
        toWorldPos.y=-(toWorldPos.y-1)*sHHalf;
        viewDirection=toWorldPos.clone().sub(fromWorldPos.clone()).multiplyScalar(.6).multiply(new THREE.Vector3(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y,0));
        let motionBlurMaxDist=.1;
        if(viewDirection.length>motionBlurMaxDist){
          viewDirection.normalize().multiplyScalar(motionBlurMaxDist);
        }
        
        //viewDirection=this.pxlDevice.touchMouseData.velocityEase.clone().multiplyScalar( Math.max(this.screenRes[1],this.screenRes[0]) );
      }else{
        //viewDirection=this.pxlDevice.touchMouseData.velocityEase.clone().multiplyScalar( Math.max(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y) );
        viewDirection=this.pxlDevice.touchMouseData.velocity.clone().multiplyScalar( Math.max(this.pxlDevice.screenRes.x,this.pxlDevice.screenRes.y) );
      }
      let toDir=new THREE.Vector2( viewDirection.x, -viewDirection.y);
      let blurDir=new THREE.Vector2(0,0).lerpVectors( this.pxlEnv.blurDirPrev, toDir, .85 );
      
      // Update motionBlur direction uniforms -
      this.pxlEnv.blurDirPrev.set( this.pxlEnv.blurDirCur );
      this.pxlEnv.blurDirCur.set( blurDir );
    }
  }
  
///////////////////////////////////////////////////////
// WebSocket Emit for Position and Rotation Changes //
/////////////////////////////////////////////////////
  // Notify Server of Position / Rotation Changes
  emitCameraTransforms( cameraPos, standingHeight, force=false ){
    // Networking scripting removed
  }
  jogServerMemory(){
    let curCamPos=this.cameraPos.clone();
    let standingHeight=this.getUserHeight();
    this.emitCameraTransforms( curCamPos, standingHeight, true );
  }
  
///////////////////////////////////
// Main Camera Update Function  //
/////////////////////////////////
  updateCamera(){
    //let velEaseMag=this.pxlDevice.touchMouseData.velocityEase.length();
    let velEaseMag=this.pxlDevice.touchMouseData.velocity.length();
    this.pxlDevice.touchMouseData.curFadeOut.multiplyScalar( .7 );
    if( this.camUpdated || velEaseMag != 0 || this.pxlDevice.touchMouseData.active){// || this.lookAtLockPerc>0 ){ // ## Not using any cam locking yet
      // Camera checks are initiating
      this.camUpdated=false;
      
      let stillMoving=false;
        
        
      this.updateDeviceValues( velEaseMag );
      this.pxlUser.localUserTurned=this.pxlDevice.touchMouseData.velocity.length() == 0;
      
      this.prevQuaternion.copy( this.camera.quaternion );
      //this.prevWorldMatrix.set( this.camera.matrixWorld ); // Only used if running higher quality motion blur, not needed
      
      // For Gyro enabled devices; Mobile / Tablet / Surface devices
      // ## Work in progress, waste of calculations acurrently
      //this.camApplyMobileRotation();

      let cameraPos=this.initFrameCamPosition();
            
      // Appy Gravity Height Offset
      let standingHeight=this.getUserHeight();
            
      // ## Create a hybrid Camera.js and Room Environment collision check system
      if(true || this.pxlEnv.currentRoom == this.pxlEnv.mainRoom){
        let gravitySource = null; // not implemented, but should be the object being used for gravity, would reside within the current Room's object list
        let killCalculations = false;
        cameraPos=this.mainColliderCheck( cameraPos, gravitySource );
        //cameraPos=this.checkColliderFail( cameraPos );
      }else{ // For external room warp zone checking
        cameraPos=this.roomColliderCheck( cameraPos, standingHeight );
      }

      
      // If in air, gravity grows 
      this.updateGravity();
      
      // When Jumping / Falling, Collion Hit Position and Object are marked as Invalid
      if( !this.colliderValid && !this.colliderValidityChecked ){
        // Check if within maxStepHeight+gravityRate distance of collider hit position
        this.jump=this.checkColliderValid( cameraPos ); // Sets colliderValid 
      }else{
        this.jump=0;
      }
      
      this.eventCheckStatus=true;
            
      // Apply gravity rate to current camera position
      cameraPos=this.updateCamPosition(cameraPos);
            
      this.pxlUser.localUserMoved= this.gravityActive || ((this.cameraMovement[0]**2 + this.cameraMovement[1]**2) ** .5) > 0;
      
          
      this.cameraPrevPos=this.cameraPos.clone();
      this.cameraPos=cameraPos.clone();
      cameraPos.y+=standingHeight;//+this.cameraJumpHeight;
      this.camera.position.copy(cameraPos);

      this.updateCameraRotation();
      //this.lookAtTargetLock(); // Camera lookAt target locking
      
      this.camera.updateMatrixWorld(); // ## Only needed for lobby geo... Fix
      
      this.emitCameraTransforms( cameraPos, standingHeight );
      
      this.cameraBooted=true;
    }else{
      this.pxlUser.localUserMoved=false;
      this.pxlUser.localUserTurned=false;
    }
  }

}