//import { Vector2, Vector3, Quaternion, Euler, Raycaster } from  "../../libs/three/three.module.js";
importScripts("../../libs/three/three.min.js");

const stats={
    active:true,
    dirKey:[0,0,0,0], // Left, Up, Right, Down
    dirKeyPressed:[0,0,0,0], // Left, Up, Right, Down Times
    dirKeyDown:false,
    shift:0,
    
    jumpKey:false,
    keyDownCount: [0,0,0], // Left/Right, Forward/Back, Jump
    lowGrav: 0,
  gravityActive: false,
  gravitySourceActive: false,
    gravityRate: 0,
  gravityMax: 9.8*3,
  gravityEaseOutRate: .80,
    jumpStartTime: 0,
    
    cameraJumpActive: false,
    cameraAllowJump: true,
  cameraJumpHeight: 0,
  cameraJumpInitImpulse: [2,12], // [ Grav, Low Grav ]
  cameraJumpImpulse: 0,
  cameraJumpImpulseEaseOut: .85,
  cameraMaxJumpHold: [2,7], // Second; [ Grav, Low Grav ]
    cameraJumpInAir: false,
    
  standingHeight: 16,
  standingHeightGravInfluence: 0,
  standingMaxGravityOffset: 10, // Usage -  ( standingHeight / standingHeightGravInfluence ) * standingMaxGravityOffset
  maxStepHeight: 10, // Max distance up or down, like walking up and down stairs.
    
    jumpIter:null,
    fpsCap:null,
    fpsBenchIter:null,
};

const messageCalls={
    "init":()=>{ funcs.step(); },
    "activeToggle":(state)=>{
            stats.active=state;
            if( state ){
                funcs.step();
            }
        },
    0:(state)=>{ funcs.dirKey(0,state); },
    1:(state)=>{ funcs.dirKey(1,state); },
    2:(state)=>{ funcs.dirKey(2,state); },
    3:(state)=>{ funcs.dirKey(3,state); },
    "shift":(state)=>{ stats.shift= state ? 7 : 0; },
    "space":(state)=>{ funcs.camJumpKey( state ); },
    "focus":()=>{ funcs.moveStop(); },
    "warp":(state)=>{ funcs.moveStop(); },
    "fpsBench":( state, run=0, fps=0 )=>{
        self.postMessage({"frameBench": typeof requestAnimationFrame === "function"});
    },
  "setDirKeyDown": ()=>{ funcs.setDirKeyDown(); },
  "resetGravity": ()=>{ funcs.resetGravity(); },
  "jumpLanding": ()=>{ funcs.jumpLanding(); },
  "killJumpImpulse": ()=>{ funcs.killJumpImpulse(); },
}

const funcs={
    "step": ()=>{
        if( stats.gravityActive || stats.cameraJumpImpulse>0 ){
            let sendUpdate=false;
            let ret={
                    type:"update",
                };
            if( stats.gravityActive ){
                if( stats.cameraJumpActive ){ // Initial Jump
                    funcs.camJump();
                }else{
                    funcs.updateGravity();
                    sendUpdate=true;
                    ret['gravityRate']= stats.gravityRate;
                    ret['standingHeightGravInfluence']= stats.standingHeightGravInfluence;
                }
            }else if(stats.cameraJumpImpulse>0 ){
                funcs.killJumpImpulse();
                ret['cameraJumpImpulse']=stats.cameraJumpImpulse;
            }
            if( sendUpdate ){
                self.postMessage( ret );
            }
        }
        if( stats.active ){
            setTimeout( ()=>{
                funcs.step();
            }, 16);
        }
    },
    
    "getTime": ()=>{
        return new Date().getTime()*.001;
    },
    "dirKey":(key, state)=>{
        stats.dirKey[key]=state;
        funcs.setDirKeyDown();
    },
    "setDirKeyDown": ()=>{
        if(!messageCalls.dirKey.includes(1)){
            stats.dirKeyDown=false;
        }
    },
    "moveStop": ()=>{
        stats.dirKeyPressed=[0,0,0,0];
        stats.dirKeyDown=false;
        stats.shift=0;  
        stats.jumpKey=false;
        stats.jumpStartTime=0;        
    },
    "moveCalc": ()=>{
        /*if( funcs.pxlTimer.curMS-funcs.fpsCounter.z > 1){
            funcs.fpsCounter.x= funcs.fpsCounter.y; //':new THREE.Vector3(30, 0, (new Date().getTime())), // [ Cur FPS, Time Since Last FPS Check, Last Sample Time ]
            funcs.fpsCounter.y=0;
            funcs.fpsCounter.z=funcs.pxlTimer.curMS;
            
            let dir=1;
            if(funcs.fpsCounter.x<15){
                dir=-1;
            }
            let toPerc=Math.min(1, Math.max(0, funcs.percent+funcs.shiftRate*dir));
            //datRenderResolutionSlider.setValue(toPerc);
            if(funcs.autoQuality){
                funcs.mapAutoQualityUpdate(toPerc, false);
            }
        }
        funcs.fpsCounter.y+=1;
        funcs.pxlTimer.prevMS=funcs.pxlTimer.curMS;*/
    },
    
    
  "updateGravity": ()=>{
    stats.gravityRate = Math.max(0, stats.gravityRate-stats.cameraJumpImpulse*.2 );
    
    if( stats.gravityActive ){
      stats.gravityRate = Math.min( stats.gravityMax, (stats.gravityRate+stats.gravityMax*stats.jumpStartTime));
    }
    if( stats.gravityRate != 0 ){
      // gMult not used, testing for need
      let gMult=1;
      if( !stats.gravityActive ){
        stats.gravityRate=stats.gravityRate>.01?stats.gravityRate*stats.gravityEaseOutRate:0;
        gMult= stats.gravityRate;
      }else{
        gMult=stats.gravityRate*.08;
      }
      gMult=Math.min(1, gMult);
      
      stats.standingHeightGravInfluence = Math.min(1, stats.gravityRate*1.2 / stats.gravityMax ) * stats.standingMaxGravityOffset;
    }
  },
    
    "camJumpKey": ( jumpKeyIsDown=false )=>{
    if( jumpKeyIsDown ){ // Space is down
      funcs.camInitJump();
            self.postMessage("start jump");
    }else{ // Space is up
      if(funcs.cameraJumpActive){ // Space
        funcs.cameraJumpActive=false;
      }
            stats.jumpStartTime=0;
      funcs.cameraAllowJump=true;
            self.postMessage("end jump");
    }
    },
  "camInitJump": ()=>{
    if( !stats.gravityActive && stats.cameraAllowJump ){
      stats.keyDownCount[2]= funcs.getTime();
      stats.jumpStartTime= funcs.getTime();
      
      stats.cameraAllowJump=false; // Prevent jump spamming up stacked colliders; this may be desired for ladders
      stats.cameraJumpActive=true;
      stats.cameraJumpInAir=true;
      
      stats.gravityActive=true;
      stats.gravityRate=0;
      stats.cameraJumpImpulse=stats.cameraJumpInitImpulse[ stats.lowGrav ];
            
            if( stats.objectJumpLock ){
                stats.objectJumpLock=false;
                funcs.nearestFloorHit=funcs.nearestFloorHitPrev;
            }
    }
    },
  "camJump": ()=>{
        let curTime= funcs.getTime();
    let timeDelta= (curTime-stats.keyDownCount[2]);
        let fpsRateAdjust=1;//Math.min(1, 1/(20*funcs.pxlTimer.msRunner.y));
    // let jumpPerc=Math.min(1, timeDelta/(stats.cameraMaxJumpHold[stats.pxlUser.lowGrav]*fpsRateAdjust) );
    let jumpPerc=Math.min(1, timeDelta/stats.cameraMaxJumpHold[ stats.lowGrav ] );
        
    if(stats.cameraJumpActive){
      let jumpRate=jumpPerc ;
      if(jumpRate==1){
        stats.cameraJumpActive=false;
      }else{
        jumpRate=(1-jumpRate)*(1-jumpRate);
        jumpRate=jumpRate* ( jumpRate*.5+.5);
      }
      stats.cameraJumpImpulse+=Math.max(0, jumpRate);
    }
    stats.cameraJumpImpulse*=(1-jumpPerc);//*.5+.5;

    if( jumpPerc==1 ){
      stats.cameraJumpActive=false;
    }
  },
  "resetGravity": ()=>{
    stats.gravityRate=0;
    funcs.jumpLanding();
  },
  "jumpLanding": ()=>{
    stats.gravityActive=false; // Should probably name it cameraInAir
    stats.cameraJumpImpulse=0;
    stats.cameraJumpInAir=false; // gravityActive should indicate this value; residual from logic rework
    stats.cameraJumpActive=false; // Stop running camJump function
        stats.jumpStartTime=0;  
  },
  "killJumpImpulse": ()=>{
    let toImpulse=stats.cameraJumpImpulse * stats.cameraJumpImpulseEaseOut;
    stats.cameraJumpImpulse= toImpulse>.1 ? toImpulse : 0;
        if( stats.cameraJumpImpulse == 0 ){
            stats.jumpStartTime=0;
        }
  },
};



self.onmessage = function (event) {
    let eventData=event.data;
    if( eventData instanceof ArrayBuffer ){
        return;
    }
    
    let {type, key, state}=eventData;
    let func= type=="key" ? key : type;

    if( messageCalls.hasOwnProperty( func ) ){
        messageCalls[ func ]( state );
    }else{
        self.postMessage( {type:"err", data:event} );
    }
};

