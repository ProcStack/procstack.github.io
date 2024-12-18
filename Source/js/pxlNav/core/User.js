
export class User{
  constructor(id=null){
    this.id=null;
    this.jitsiUserId=null;
    this.jmaActive=false;
    this.jmaConnectObj=false;
    this.jmaServer=false;
    this.jmaRoom=false;
    this.jmaUserId=null;
    this.jmaUserName=null;
    this.jmaTempUserIdActive=false;
    this.pxlEnv=null;
    
    this.welcome=false;
    
    this.tankStrafe=false;
    this.invertMouse=false;
    
    this.renderSettingsCookie="settings_renderSettings";
    this.controlModeCookie="settings_controlMode";
    this.tankStrageCookie="settings_tankStrage";
    this.invertMouseCookie="settings_invertMouse";
    this.rootUserCookie="data_userEnlil";
    this.adminUserCookie="data_userNanna";
    
    this.localUserMoved=false;
    this.localUserTurned=false;
        
    this.itemRunTime=60; // Time in Seconds an Item is Active
    this.itemGroupList=[];
    this.itemList={};
    this.itemListNames=[];
    this.itemBaseList=[];
    this.itemActiveList=[];
    this.itemInactiveCmd=[];
    this.itemActiveTimer=[];
    this.itemRotateRate=.65;
    this.itemBaseRotateRate=.1;
    this.itemBobRate=.35;
    this.itemBobMag=.0;
    this.mPick=[];
    
    this.activeEffects={};
    
    this.lowGrav=0;
        
    this.lKing=0;
    this.lKingInactive=[.025, .018];
    this.lKingActive=[.35,.25];
    this.lKingWarp=0;
    this.lKingPass=null;
        
    this.sField=0;
    this.sFieldWarp=0;
    this.sFieldPass=null;
        
    this.iZoom=0;
    this.iZoomWarp=0;
    this.iZoomPass=null;
        
  }

  checkItemWearOff(curTime){
    if(this.itemActiveList.length > 0){
      let timeLeft=this.itemActiveTimer[0]-curTime;
      if(timeLeft<=0){
        let cmd=this.itemInactiveCmd.shift();
        cmd();
        this.itemActiveTimer.shift();
        this.itemActiveList.shift();
        return true;
      }
    }
    return false;
  }
  checkItemPickUp(itemName){
    if(itemName=="LowGravity"){
      if(this.lowGrav==0){
        this.lowGrav=1;
        return true;
      }else{
        return false;
      }
    }else if( itemName=="LizardKing" ){
      if(this.lKing==0){
        this.lKing=1;
                this.lKingWarp.set( ...this.lKingActive );
                this.lKingPass.enabled=true;
                //this.lKingRoomPass.enabled=true;
        return true;
      }else{
        return false;
      }
    }else if( itemName=="StarField" ){
      if(this.sField==0){
        this.sField=1;
                this.sFieldPass.enabled=true;
                //this.lKingRoomPass.enabled=true;
        return true;
      }else{
        return false;
      }
    }else if( itemName=="InfinityZoom" ){
      if(this.iZoom==0){
        this.iZoom=1;
                this.iZoomPass.enabled=true;
        return true;
      }else{
        return false;
      }
    }
  }
  toggleTankRotate(active=null){
    this.tankStrafe= active==null ? !this.tankStrafe : active;
    this.tankStrageText= this.tankStrafe ? "Left/Right Rotation" : "Left/Right Strafe" ;
  }
  toggleMouseInf(active=null){
    this.invertMouse= active==null ? !this.invertMouse : active;
    this.invertMouseText= this.invertMouse ? "Revert Mouse" : "Invert Mouse" ;
  }
  toggleFpsStats(){
    if(pxlTimer.fpsStats == -1){
      pxlTimer.fpsStats=new Stats();
      document.body.appendChild(pxlTimer.fpsStats.domElement);
      pxlTimer.fpsStats.update();
      this.fpsDisplayText="Hide FPS Stats";
    }else{
      pxlTimer.fpsStats.domElement.remove();
      pxlTimer.fpsStats=-1;
      this.fpsDisplayText="Display FPS Stats";
    }
  }
}