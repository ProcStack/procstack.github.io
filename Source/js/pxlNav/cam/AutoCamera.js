//AutoCam

// Currently, any mobile devices default to autocam because of apability issues for web cam / audio support
//   This limits any projects which don't require network support

import * as THREE from "../../libs/three/three.module.js";

export class AutoCamera{
  constructor( enabled=false ){
    this.enabled=enabled;
    this.active=false;
    this.mobile=null;
    this.pxlTimer=null;
    this.pxlUtils=null;
    this.pxlDevice=null;
    this.pxlAudio=null;
    this.pxlCamera=null;
    this.pxlEnv=null;
    this.camera=null;
    this.netDistance=new THREE.Vector2();

    this.prevCamChange=0;
    this.nextCamChange=0;
    this.delayRange=[25,45];

    this.autoCamActive=false;
    this.autoCamMode=0;
    this.autoCamPaths={};
    this.resetAutoCam=true;
    this.autoCamPrevPos=null;
    this.autoCamPrevLookAt=null;
    this.touchBlender=false;

    this.autoCamId=0;

    // 0 - Drone Came
    // 1 - Follow User
    // 2 - Circle Group
    this.camMode=0;
    this.curModeCount=0;

    this.curRoom="";
    this.curRoomIndex=0;
    this.curPath=0;
    this.roomList=[];
    this.pathCounts={};

    this.forceNewRoom=false;
    this.curRoomCount=0;

    this.avatarMin=0; // Minimum count of avatars before running avatar cams
    this.avatarValid=false;
    this.curAvatar=null;

    this.clusterReturn=false;
    this.curCluster=[];
    this.clusterValid=2; 
    this.clusterRotation=0;
    this.clusterRotRate=.005;
  }

  setDependencies( pxlNav ){
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlUtils=pxlNav.pxlUtils;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlAudio=pxlNav.pxlAudio;
    this.pxlCamera=pxlNav.pxlCamera;
    this.pxlEnv=pxlNav.pxlEnv;
    this.camera=pxlNav.pxlCamera.camera;
  }
  
  // Reset pxlNav clock
  //   Benchmarking steps the timer
  init(){
    this.active=this.enabled || this.mobile;
    this.autoCamActive = this.autoCamActive || this.mobile;
    let {roomList,pathCounts}= this.getAutoCamData();
    this.roomList=roomList;
    
    this.curRoom = this.roomList[0];
    this.pathCounts=pathCounts;
    this.setRoom(false, true);
    this.getNextPath();
    
    this.checkStatus();
  }
  
  step( force=false ){
    if( this.autoCamActive == null || this.active == null ){
      this.autoCamActive = false;
      this.active = false;
      return true;
    }
    if( this.active == false){ // Check active state of Auto Cam
      if( this.autoCamActive ){
        this.updateAutoCamera();
      }else{
        return true; // If not active, run default Camera Step
      }
    }
    
    // Check Mode Change Status
    if( ( this.pxlTimer.curMS >= this.nextCamChange || force ) && this.active && !this.pxlDevice.touchMouseData.active){
      if( !force || !this.enabled ){
        let triggerMult= this.checkCamMode();
        this.setNextTrigger( triggerMult );
      }
      
      this.curAvatar=0;
      this.camera.up.set( 0,1,0 );
      
      this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0);
    
      if( this.camMode == 1 ){
        this.setCamMode(0);
      }else if( this.camMode == 2 ){
        this.setCamMode(0);
      }else{
        this.curCluster=[];
        this.stepDroneCam();
      }
      this.setAutoCamMode( this.camMode );
    }
    
    
    // Run AutoCam Mode Step
    this.updateAutoCamera();
    
    this.applyTouchRotate();
    return false;
  }


///////////////////////////////
// Auto Cam Mode Functions  //
/////////////////////////////
  
  checkCamMode(){
    let ret=1;
    let prevCamMode=this.camMode;
    this.camMode=0;
    if( !this.enabled ){
      return ret;
    }
    if( !this.active ){ return ret; }
    
    // Insert Mode Logic --
    
    if( this.camMode!=prevCamMode && this.camMode==0){
      this.forceNewRoom=true;
    }
    return ret;
  }
  
  setCamMode( autoCamData ){
    let timeMult=1;
    if( autoCamData.type == 1 ){
      timeMult= 1;
    }else if( autoCamData.type == 2 ){
      timeMult= 1;
    }else{
      this.camMode=0;
      this.forceNewRoom=true;
    }
    this.step( true );
  }
  
  
/////////////////////////////////
// Auto Cam & Room Functions  //
///////////////////////////////
  
  stepDroneCam(){
    let unique=true;
    let randDelay= Math.random( this.nextCamChange );
    let camPathCount= this.pathCounts[ this.pxlEnv.currentRoom ] ;
    if( this.curRoomCount >= camPathCount*2 ){
      this.forceNewRoom=true;
    }
    if( randDelay<.3 || this.forceNewRoom ){
      this.setRoom();
      unique=false;
    }
    this.curRoomCount+=1;
    
    this.getNextPath( unique );
  }
  
  setRoom( setNextRoom=false, init=false ){
    if( this.active || this.autoCamActive ){
      let nextRoom=this.curRoomIndex;
      let roomCount=this.roomList.length;
      if( !this.pxlEnv.postIntro ){
        nextRoom=0;
      }else if(!init){
        if( setNextRoom ){
          nextRoom=(nextRoom+1)%roomCount;
        }else{
          nextRoom=Math.floor( Math.random() * roomCount );
          if( nextRoom == this.curRoomIndex){
            nextRoom=(nextRoom+1)%roomCount;
          }
        }
      }
      
      this.curRoomIndex=nextRoom;
      
      if( this.curRoom != this.roomList[ nextRoom ] ){
        this.curRoom = this.roomList[ nextRoom ];
        this.forceNewRoom=false;
        this.curRoomCount=0;
        this.pxlCamera.warpEventTriggered( 1, this.curRoom, 'init' );
      }
    }
  }
  
  setNextTrigger( timeMult=1 ){
    let randDelay= Math.random( this.nextCamChange );
    randDelay = (this.delayRange[1]-this.delayRange[0])*randDelay + this.delayRange[0];
    this.nextCamChange = this.pxlTimer.curMS + randDelay*timeMult;
  }
  
  getNextPath( unique=true, dir=1 ){
    if( this.autoCamPaths.hasOwnProperty( this.pxlEnv.currentRoom ) ){
      let camPathCount= this.autoCamPaths[ this.pxlEnv.currentRoom ].length ;
      this.curPath = (this.curPath+dir) % camPathCount;
      if( unique && dir==0 ){
        let path= Math.random( this.nextCamChange );
        path= Math.floor( path * this.autoCamPaths[ this.pxlEnv.currentRoom ].length );
        
        if( this.curPath==path ){
          path = (path+1) % camPathCount;
        }
        
        this.curPath = path;
      }else{
        this.curPath = this.curPath<0 ? camPathCount-1 : this.curPath;
        this.setNextTrigger( 1 );
      }
      this.setAutoCamPath( this.curPath );
    }
  }
  


////////////////////////////
// Auto-Camera Function  //
//////////////////////////

  checkStatus(){
    if( this.autoCamActive || this.pxlDevice.mobile || this.active ){
      this.toggleAutoCam(true);
    }
  }

  preAutoCamToggle(){
    //if(this.enabled == false){ // Check active state of Auto Cam
      if( !this.autoCamActive ){
        if( this.pxlCamera.colliderCurObjHit == "AudioTrigger_2" ){
          this.pxlCamera.proximityScaleTrigger=true;
          this.exposureShiftActive=true;
        }
      }
      /*if( this.pxlEnv.pxlQuality.detailLimitOverride ){
        this.enabled=!this.enabled;
        this.active=this.enabled;
        this.autoCamActive=this.enabled;
      }*/
      this.toggleAutoCam();
    //}
  }
  
  setAutoCamMode( curMode=0 ){
    this.autoCamMode=curMode;
    if( curMode==1 ){
      this.resetAutoCam=true;
    }
  }

  // For auto cam swapping
  setPosQuat(pos, quat){ // Vector3, Vector4
    this.camera.quaternion.copy( quat );
    this.camera.position.copy( pos );
    this.pxlCamera.updateCameraMatrices();
    this.pxlCamera.camUpdated=true; // Forces next frame update
  }
    
  toggleAutoCam( setValue=null, dir=1 ){
    this.pxlEnv.fogMult.x = 1;
    if( this.autoCamPaths[ this.pxlEnv.currentRoom ] ){
      this.curRoom=this.pxlEnv.currentRoom;
      let camPathCount=this.autoCamPaths[ this.pxlEnv.currentRoom ].length;
      if( isNaN(this.autoCamId) ){
        this.autoCamId=camPathCount-1;
      }
      let origActive=this.autoCamActive;

      this.autoCamActive= setValue==null && camPathCount>0 ? !this.autoCamActive : setValue;
      this.autoCamActive = this.mobile || this.autoCamActive;
      if( !origActive && this.autoCamActive ){
        this.netDistance= new THREE.Vector2().copy( this.pxlDevice.touchMouseData.netDistance );
      }
      this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0);
      
      if( this.autoCamActive ){
        this.pxlCamera.resetGravity(); // Set settings for when Auto-Camera cancels
        
        this.autoCamId = (this.autoCamId+dir) % camPathCount; // Step the auto cam path
        this.autoCamId = this.autoCamId < 0 ? camPathCount-1 : this.autoCamId;
            
        let curAutoCamGroup = this.autoCamPaths[ this.pxlEnv.currentRoom ][this.autoCamId];
        // Path Duration, Point & Look At curve point arrays
        this.totalLoopDuration = curAutoCamGroup.position.userData.duration;
        
        try{
          this.autoCamPositions = curAutoCamGroup.position.geometry.attributes.position;
          this.autoCamLookAt = curAutoCamGroup.lookAt.geometry.attributes.position;
          if( curAutoCamGroup.up ){
            this.autoCamUp=curAutoCamGroup.up.geometry.attributes.position;
          }else{
            this.autoCamUp=null;
            this.camera.up.set( 0,1,0 );
          }
          // Curve count
          this.numControlPoints = this.autoCamPositions.array.length/3;
          
          // Initial time, offset in negative by a random length of the duration
          this.autoCamStartTime = this.pxlTimer.curMS - (this.totalLoopDuration*Math.random());
        }catch(err){}
        
      }else{
        this.setPosQuat(this.pxlCamera.cameraPrevPos.clone(), this.pxlCamera.prevQuaternion.clone());
                
        this.pxlDevice.touchMouseData.netDistance.copy( this.netDistance );
      }
    }
  }
  prevNextAutoCam(dir=1, manual=false){
    // If auto cam active, Left & Right changes current auto cam path
    if( this.autoCamActive ){
      if( this.enabled && this.active && !manual ){
        this.nextCamChange = this.pxlTimer.curMS;
      }else{
        this.toggleAutoCam( true, dir );
      }
    }
  }
  setAutoCamPath( path=0 ){
    if( this.autoCamActive ){
      this.autoCamId=path;
      this.toggleAutoCam( true, 0 );
    }
  }
  getAutoCamData(){
    let roomList=Object.keys( this.autoCamPaths );
    let pathCounts={};
    roomList.forEach( (r)=>{
      pathCounts[r]=this.autoCamPaths[r].length;
    });
    return {roomList, pathCounts};
  }

  getAutoCamValueFromCurve(array, curIndex, t_lerp, print=false) {
    // Starting Point
    let x = array[curIndex*3];
    let y = array[curIndex*3 + 1];
    let z = array[curIndex*3 + 2];
    
    // Ending point
    let nextIndex = (curIndex + 1) % (this.numControlPoints);
    let x2 = array[nextIndex*3];
    let y2 = array[nextIndex*3 + 1];
    let z2 = array[nextIndex*3 + 2];
    
    // Lerp
    let pos= new THREE.Vector3(x,y,z);//.multiplyScalar(-1);
    let nextPos= new THREE.Vector3(x2,y2,z2);//.multiplyScalar(-1);

    pos.lerp(nextPos,t_lerp);
    

    return pos;
    
  } 
  
  updateAutoCamera(){
    
    // TODO : Elevate to active check for running updateAutoCam
    if( !this.autoCamPositions || !this.autoCamPositions.array ){
      return;
    }
    
    // Percent travel along path
    let ms = (this.pxlTimer.curMS - this.autoCamStartTime) % this.totalLoopDuration;

    // Points to blend
    let t = ms/this.totalLoopDuration;
    t *= this.numControlPoints-1;
    let curIndex = Math.floor(t);
    let t_lerp = t - curIndex;
    
    // Current Position math-   
    let cameraPos = this.getAutoCamValueFromCurve(this.autoCamPositions.array, curIndex, t_lerp, false);
    this.camera.position.copy(cameraPos);

    
    // -- -- -- -- -- -- //
    // Camera Look At Calculations
    // Current Look At math-   
    let camLookAt = this.getAutoCamValueFromCurve(this.autoCamLookAt.array, curIndex, t_lerp);
    //camLookAt=cameraPos.clone().add( camLookAt.clone().sub( cameraPos ) );
    this.camera.lookAt(camLookAt);
    
    if( this.autoCamUp ){
      let camUp = this.getAutoCamValueFromCurve(this.autoCamUp.array, curIndex, t_lerp);
      camUp=camUp.sub(cameraPos).normalize();
      this.camera.up.copy( camUp  );
    }
    
    /*let camPoseQuat=new THREE.Quaternion();
    let euler=new THREE.Euler();
    euler.set(0,0,180,'YXZ'); // Device returns YXZ for deviceOrientation
    camPoseQuat.setFromEuler(euler);
    camPoseQuat.normalize();
    camPoseQuat.multiply( this.camera.quaternion );
    this.camera.setRotationFromQuaternion(camPoseQuat);*/
  }
  
  applyTouchRotate(){
    // this.pxlDevice.touchMouseData.startPos;
    // this.pxlDevice.touchMouseData.endPos;
    // this.pxlDevice.touchMouseData.netDistance;
    let blendOut=1;
    if( this.touchBlender ){
      // Camera rotation easing logic-
      blendOut=Math.min(1, Math.max(0, this.pxlTimer.curMS - this.pxlDevice.touchMouseData.releaseTime ));
      blendOut*=blendOut;
      this.pxlDevice.touchMouseData.netDistance.multiplyScalar(1-blendOut);
      this.touchBlender=blendOut<1;
    }else{
      this.pxlDevice.touchMouseData.netDistance.multiplyScalar(.5);
    }
   let euler=new THREE.Euler();
    euler.set(
      (this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2),
      (this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2),
      0,
      'YXZ'); // Device returns YXZ for deviceOrientation
    // Limit Up/Down looking
    let camPoseQuat=new THREE.Quaternion().clone( this.camera.quaternion );
    camPoseQuat.setFromEuler(euler);
    camPoseQuat=this.camera.quaternion.clone().multiply(camPoseQuat);
    //camPoseQuat.multiply(poseQuat.setFromAxisAngle(viewNormal,-this.cameraPose.orientation));
    camPoseQuat.normalize();
    
    // let smoothedQuat=new THREE.Quaternion();
        
    if( this.touchBlender ){
      camPoseQuat.slerp(this.camera.quaternion.clone(),blendOut).normalize();
    }
    let lookAt= new THREE.Vector3(0,0,-10).applyQuaternion( camPoseQuat ).add( this.camera.position );
        
    this.camera.setRotationFromQuaternion(camPoseQuat);//smoothedQuat);
    this.camera.lookAt(lookAt);
    this.camera.up.set( 0,1,0 );
  }
}