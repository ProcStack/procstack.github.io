//AutoCam

// Currently, any mobile devices default to autocam because of apability issues for web cam / audio support
//   This limits any projects which don't require network support

import * as THREE from "../../../libs/three/build/three.module.js";

export class AutoCamera{
	constructor( enabled=false, mobile=false, pxlTimer=null, pxlUtils=null, pxlAudio=null ){
        this.enabled=enabled;
		this.active=false;
		this.mobile=mobile;
		this.pxlTimer=pxlTimer;
		this.pxlUtils=pxlUtils;
		this.pxlDevice=null;
		this.pxlAudio=pxlAudio;
		this.pxlSocket=null;
		this.pxlAvatars=null;
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
        this.pxlSocket.sendAutoCam({type:"enable", value:true});
	}
	
	step( force=false ){
        
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
            this.pxlSocket.sendAutoCam( {type:"follow", value:0} );
            this.camera.up.set( 0,1,0 );
            
            this.pxlDevice.touchMouseData.netDistance.multiplyScalar(0);
        
            if( this.camMode == 1 ){
                if( !this.prepAvatarCam() ){
                    this.setCamMode(0);
                }
            }else if( this.camMode == 2 ){
                this.prepClusterCam();
            }else{
                this.curCluster=[];
                this.stepDroneCam();
            }
            this.setAutoCamMode( this.camMode );
        }
        
        
        // Run AutoCam Mode Step
        if( this.autoCamMode==1 ){
            this.updateAvatarCamera();
        }else if( this.autoCamMode==2 ){
            // Update orbit value
            this.clusterRotation+=this.clusterRotRate;
            
            this.updateClusterCamera();
        }else{
            this.updateAutoCamera();
        }
        
        this.applyTouchRotate();
        return false;
	}


///////////////////////////////
// Auto Cam Mode Functions  //
/////////////////////////////
    
    checkCamMode(){
        let ret=1;
        let prevCamMode=this.camMode;
        this.camMode=0; // Sets in this.setAvatarMode();
        if( !this.enabled ){
            return ret;
        }
        if( !this.active ){ return ret; }
        
        if( this.clusterReturn ){
            this.clusterReturn=false;
            this.camMode=2;
            ret=1.5;
        }else if( this.camMode == 0 ){// && this.curModeCount>1){
                let checkMode= Math.random( this.nextCamChange );
                if( checkMode<.5 ){
                    let valid=this.setAvatarMode();
                    ret = valid ? 1.25 : 1; // There are avatars : there are not
                }
        }
        if( this.camMode!=prevCamMode && this.camMode==0){
            this.forceNewRoom=true;
        }
        return ret;
    }
    
    setCamMode( autoCamData ){
        let timeMult=1;
        if( autoCamData.type == 1 ){
            timeMult= this.setAvatarMode(1) ? 1.25 : 1;
        }else if( autoCamData.type == 2 ){
            timeMult= this.setAvatarMode(2) ? 1.5 : 1;
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
    
    
/////////////////////////////
// Avatar Data Functions  //
///////////////////////////
    
    prepAvatarCam(){
        let aKeys= Object.keys( this.pxlAvatars.userAvatarSpacialData );
        if( aKeys.length > 0 ){
            let randAvatar= this.pxlUtils.getRandom( aKeys, this.pxlTimer.curMS );
            this.curAvatar=randAvatar;
            
            let aRoom=this.pxlAvatars.userAvatarSpacialData[ randAvatar ].room;
            if( !this.roomList.includes( aRoom ) ){
                return false;
            }
            if( this.pxlEnv.currentRoom != aRoom ){
                this.curRoom=aRoom;
                this.pxlCamera.warpEventTriggered( 1, this.curRoom, 'init' );
            }
            
            this.pxlCamera.resetAutoCam=true;
            
            this.pxlSocket.sendAutoCam( {type:"follow", value:this.curAvatar} );
            
            return true;
        }
        return false;
    }
    prepClusterCam(){
        this.clusterRotation=0;
        let curAvatar=this.curCluster[0];
        
        
        if( !this.pxlAvatars.userAvatarSpacialData[ curAvatar ] ){
            this.setCamMode( { type:0, value:1 } );
            return;
        }
        let aRoom=this.pxlAvatars.userAvatarSpacialData[ curAvatar ].room;
        if( this.pxlEnv.currentRoom != aRoom && this.roomList.includes(aRoom) ){
            this.curRoom=aRoom;
            this.pxlCamera.warpEventTriggered( 1, this.curRoom, 'init' );
        }else{
            this.setCamMode( { type:0, value:1 } );
        }
        this.pxlCamera.resetAutoCam=true;
        
    }
    
    setAvatarMode( force=0 ){
        let aKeys= Object.keys( this.pxlAvatars.userAvatarSpacialData );
        let valid=aKeys.length >= this.avatarMin;
        if( valid ){
            let checkMode= Math.random( this.nextCamChange )+force;
            if( checkMode<.5 || force==1){
                this.camMode=1;
            }else{
                this.requestAvatarCluster();
            }
        }
        return valid;
    }
    requestAvatarCluster(){
        this.pxlSocket.requestCluster();
        setTimeout( ()=>{
            this.pxlSocket.requestCluster();
        }, 1000); // Allow time to populate cluster lists
    }
    foundAvatarCluster( avatarList=[] ){
        let validList=[];
        for( let x=0; x<avatarList.length; ++x){
            let curList=avatarList[x];
            let curLen=curList.length;
            if( curLen>=this.clusterValid ){
                validList.push( x );
            }
        }
        let validLen=validList.length;
        if( validLen > 0 ){
            let rand= this.pxlUtils.getRandom( validList, this.pxlTimer.curMS );
            this.clusterReturn=true;
            this.curCluster=avatarList[ rand ];
        }
        avatarList=null; // I dunno, faster grabage collect maybe?
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
        
        this.pxlAvatars.proximityMult.x = 0;
        
			}else{
				this.setPosQuat(this.pxlCamera.cameraPrevPos.clone(), this.pxlCamera.prevQuaternion.clone());
                
        this.pxlDevice.touchMouseData.netDistance.copy( this.netDistance );
        this.pxlAvatars.proximityMult.x = 1;

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
	
	updateAvatarCamera(){
        let curId=this.curAvatar;
        let curAvatar=this.pxlAvatars.userAvatarSpacialData[ curId ];
        if( !curAvatar ){
            this.setCamMode( { type:0, value:1 } );
            return;
        }
        let pos=curAvatar.avatarGroup.position.clone();
        let quat=curAvatar.avatarGroup.quaternion;
        
        let camPos=new THREE.Vector3( 0,25,60 ).applyQuaternion( quat ).add( pos);
        let camLookAt=new THREE.Vector3( 0,15,-25 ).applyQuaternion( quat ).add( pos);

        if( this.resetAutoCam ){
            this.resetAutoCam=false;
            this.autoCamPrevPos=camPos.clone();
            this.autoCamPrevLookAt=camLookAt.clone();
        }
        
        camPos= camPos.add( this.autoCamPrevPos.clone() ).multiplyScalar(.5);
        camLookAt= camLookAt.add( this.autoCamPrevLookAt.clone() ).multiplyScalar(.5);
        this.autoCamPrevPos=camPos.clone();
        this.autoCamPrevLookAt=camLookAt.clone();
        
		this.camera.position.copy(camPos);
		this.camera.lookAt(camLookAt);
        this.camera.up.set( 0,1,0 );
        
        if( curAvatar.room != this.pxlEnv.currentRoom ){
            if( this.roomList.includes( curAvatar.room ) ){
                this.curRoom=curAvatar.room;
                this.pxlCamera.warpEventTriggered( 1, this.curRoom, 'init' );
            }else{
                this.setCamMode( { type:0, value:1 } );
            }
        }
        
	}
	updateClusterCamera(){
        let cluster=this.curCluster;
        let maxDist=0;
        let camLookAt=new THREE.Vector3();
        let changeMode=false;
        
        cluster.forEach( (i)=>{
            let curAvatar=this.pxlAvatars.userAvatarSpacialData[ i ];
            if( !curAvatar ){
                changeMode=true;
            }else{
                let curPos=curAvatar.avatarGroup.position.clone();
                camLookAt.add( curPos );
                
                changeMode= curAvatar.room != this.pxlEnv.currentRoom || changeMode;
            }
        });
        
        if( changeMode ){
            this.setCamMode( { type:0, value:1 } );
            return;
        }
        
        camLookAt.multiplyScalar( 1/cluster.length );
        cluster.forEach( (i)=>{
            let curAvatar=this.pxlAvatars.userAvatarSpacialData[ i ];
            let curPos=curAvatar.avatarGroup.position.clone();
            let relPos=curPos.sub( camLookAt );
            let dist=relPos.length();
            maxDist=Math.max( dist, maxDist );
        });
        
        
        let camPos=new THREE.Vector3( 0, 40, maxDist*2.7 );
        camPos.applyAxisAngle( new THREE.Vector3(0,1,0), this.clusterRotation );
        camPos.add( camLookAt.clone() );
        if( this.resetAutoCam ){
            this.resetAutoCam=false;
            this.autoCamPrevPos=camPos.clone();
            this.autoCamPrevLookAt=camLookAt.clone();
        }
        
        camPos= camPos.add( this.autoCamPrevPos.clone() ).multiplyScalar(.5);
        camLookAt= camLookAt.add( this.autoCamPrevLookAt.clone() ).multiplyScalar(.5);
        this.autoCamPrevPos=camPos.clone();
        this.autoCamPrevLookAt=camLookAt.clone();
        
		this.camera.position.copy(camPos);
		this.camera.lookAt(camLookAt);
	}
    
    applyTouchRotate(){
		// this.pxlDevice.touchMouseData.startPos;
		// this.pxlDevice.touchMouseData.endPos;
		// this.pxlDevice.touchMouseData.netDistance;

            let blendOut=1;
            if( this.touchBlender ){
                blendOut=Math.min(1, Math.max(0, this.pxlTimer.curMS - this.pxlDevice.touchMouseData.releaseTime - 1 )*.3);
                blendOut*=blendOut;
                this.pxlDevice.touchMouseData.netDistance.multiplyScalar(1-blendOut*.3);
                this.touchBlender=blendOut<1;
            }
        
			let euler=new THREE.Euler();
				euler.set(
					(this.pxlDevice.touchMouseData.netDistance.y/this.pxlDevice.sH*2),
					(this.pxlDevice.touchMouseData.netDistance.x/this.pxlDevice.sW*2),
					0,
					'YXZ'); // Device returns YXZ for deviceOrientation
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