
import { Vector2, Vector3 } from "./Types.js";
import * as THREE from "../../libs/three/three.module.js";

// TODO : So much dependency on outside data and classes
//          Promote as much as possible to callback subscriptions


export class Device{
  constructor(projectTitle, pxlCore, mobile){
    this.projectTitle=projectTitle;
    this.pxlCore=pxlCore;
    this.pxlEnv=null;
    this.pxlTimer=null;
    this.pxlAudio=null;
    this.pxlUser=null;
    this.pxlCamera=null;
    this.pxlAutoCam=null;
    this.pxlGuiDraws=null;
    this.pxlQuality=null;


    // If the cursor swaps between grabbing and grabable
    // 'false' will keep the cursor as a pointer
    // 'true' will be grabable over pxlNav, grabbing while clicking
    this.allowCursorSwap = false;

    
    //this.bootTime=new Date().getTime();
    let sW=window.innerWidth;
    let sH=window.innerHeight;
    this.sW=sW;
    this.sH=sH;
    this.touchScreen=false;
    this.x=sW*.5;
    this.y=sH*.5;
    this.screenRes=new Vector2( 1/sW,1/sH );
    this.screenAspect=new Vector2( 1,1);//sH/sW,sW/sH );
    this.screenRatio=new Vector2( sW/sH, sH/sW );
    this.origRes=new Vector2( sW, sH );
    this.screenResDeltaPerc=new Vector2( 1, 1 );
    this.mapW=1;
    this.mapH=1;
    //this.wheelDelta=0;
    
    this.gammaCorrection = new Vector3(1,1,1);
    
    this.firefox=/Firefox/i.test(navigator.userAgent);
    this.mobile=mobile;
        
    //const IE = document.all?true:false;
    //this.mouseWheelEvt=(firefox)? "DOMMouseScroll" : "mousewheel" ;
    this.button=0;
    this.inputActive=false;
    this.startPos=[0,0];
    this.endPos=[0,0];
    this.dragCount=0;
    this.dragTotal=0;
    this.latched=false;
    this.windowHidden=false;
    
    // -- -- -- -- -- -- -- -- //
    
    this.mouseX=sW/2;
    this.mouseY=sH/2;

    this.keyDownCount=[0,0,0];
    this.directionKeyDown=false;
    this.directionKeysPressed=[0,0,0,0];
    this.shiftBoost=0;
    this.controlKey=false;
    
    this.objectPercList=[];
    this.objectPercFuncList={};
    this.objectPerc={
        active:false,
        object:null,
        left:0,
        top:0,
        width:0,
        height:0,
        startX:0,
        startY:0,
        offsetX:0,
        offsetY:0,
        percX:0,
        percY:0,
        offsetPercX:0,
        offsetPercY:0,
    };
    this.canCursorLock=
      'pointerLockElement' in document||
      'mozPointerLockElement' in document ||
      'webkitPointerLockElement' in document;
    this.cursorLockActive=false;
    this.cursorRightButtonLockActive=false;
    
    // ## All of this isn't needed, clean it up
    //      Controller Module?
    this.gyroGravity=[0,0,0];
    this.touchMouseData={
      'active':false,
      'lock':false,
      'mode':0,
      'updated':0,
      'button':0,
      'dragCount':0,
      'dragTotal':0,
      'startPos':null, //vec2
      'moveMult':new Vector2(1.,1.),
      'velocityEase':new Vector2(0,0),
      'velocityEasePrev':null, // new Vector2(0,0)
      'velocity':new Vector2(0,0), //vec2
      'mBlurVelInf':new Vector2(2*this.screenRes.x,2*this.screenRes.y),
      'prevDeltaPos':[0,0,0], //vec2
      'endPos':null, //  [x,y] 
      'latchMatrix':null, // Mat4
      'netDistance':new Vector2(0,0), //vec2
      'netDistYPerc':0, //vec2
      'curDistance':new Vector2(0,0), //vec2
      'curFadeOut':new Vector2(0,0), //vec2
      'curStepDistance':new Vector2(0,0), //vec2
      'initialQuat':new THREE.Quaternion(),
      'releaseTime':0,
    };
        
    
    this.init();
  }

  setDependencies( pxlNav ){
    this.pxlEnv=pxlNav.pxlEnv;
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlAudio=pxlNav.pxlAudio;
    this.pxlUser=pxlNav.pxlUser;
    this.pxlCamera=pxlNav.pxlCamera;
    this.pxlAutoCam=pxlNav.pxlAutoCam;
    this.pxlGuiDraws=pxlNav.pxlGuiDraws;
    this.pxlQuality=pxlNav.pxlQuality;
  }

  init(){
    
    this.setGammaCorrection();
    
    let curObj=this;
    document.addEventListener("mousedown", (e)=>{ curObj.onmousedown(curObj,e); }, false);
    document.addEventListener("mousemove", (e)=>{ curObj.onmousemove(curObj,e); }, false);
    document.addEventListener("mouseup", (e)=>{ curObj.onmouseup(curObj,e); }, false);
    document.addEventListener("contextmenu", (e)=>{ curObj.oncontextmenu(e); }, false);
    window.addEventListener("resize", (e)=>{ curObj.resizeRenderResolution(); }, false);
    
    document.addEventListener('touchstart', function(e) {curObj.touchstart(curObj,e);}, {passive : true});
    document.addEventListener('touchmove', function(e) {curObj.touchmove(curObj,e);}, {passive : true});
    document.addEventListener('touchend', function(e) {curObj.touchend(curObj,e);}, {passive : true});
    
    document.onkeydown=(e)=>{curObj.onkeydown(curObj,e)};
    document.onkeyup=(e)=>{curObj.onkeyup(curObj,e)};
  
    let tmpThis=this;
    /*window.addEventListener("popstate", (e)=>{
        console.log( e );
        //JSON.stringify(e.state);
    });*/
    
    document.addEventListener("visibilitychange", function(e) {
        tmpThis.windowHidden=document.hidden ;
              
        tmpThis.directionKeysPressed=[0,0,0,0];
        tmpThis.directionKeyDown=false;
        tmpThis.shiftBoost=0;
        tmpThis.pxlCamera.workerFunc("focus", !document.hidden);
        
        tmpThis.runHiddenCalcs();
      });
      
      if( typeof window.onblur == "object" ){
          window.onblur=(e)=>{
              tmpThis.resetUserInput(e);
          };
      }
        /*
    window.addEventListener( 'blur', (e)=>{
      tmpThis.directionKeysPressed=[0,0,0,0];
      tmpThis.directionKeyDown=false;
      tmpThis.shiftBoost=0;
            tmpThis.pxlCamera.workerFunc("focus");
    });*/
    window.addEventListener( 'beforeunload', (e)=>{
      if( tmpThis.controlKey==true ){
          e.preventDefault();
          e.returnValue="Close tab?";
          tmpThis.controlKey=false;
          tmpThis.mapLockCursor(false, 0);
          return "Close tab?";
      }
    });
  }
    
  // -- -- -- -- -- -- -- -- -- -- //
  
  // Post Process Gamma Correction; Set from Value / Detect based on OS
  // Default Gamma Settings --
  //   Windows - 2.2
  //   Mac - 1.8
  //   Linux - 1
  //     **Linux seems wrong, but can't find any reliable values other than `1`
  setGammaCorrection( value=null ){
    if( value != null ){ // Set from Settings Menu
      this.gammaCorrection = new Vector3( 1/value, value, value );
      return;
    }
    
    // Detect based on device operating system
    let toGamma = 1.5; // Most devices will be 1 (Mobile); Fail to middle ground
    let shadowShift = 1.2; // Most devices will be 1 (Mobile); Fail to middle ground
    let shadowBoost = .5;
    if( window && window.navigator && window.navigator.userAgent ){
      let isWindows = window.navigator.userAgent.match(/(windows|win32|win64|wince)/i)
      if( isWindows && isWindows.length>0 ){ 
        toGamma = 2.2; // Windows
        shadowShift = 1;
        shadowBoost = 0;
      }else{
        let isMac = window.navigator.userAgent.match(/(macintosh|macintel|macppc|mac68k|iphone|ipad|ipod)/i)
        if( isMac && isMac.length>0 ){ 
          toGamma = 1.8; // Mac
          shadowShift = .97;
          shadowBoost = .5;
        }else{ 
          toGamma = 1; // Linux / Android
          shadowShift = .95;
          shadowBoost = 1;
        }
      }
    }
    // Color space is bugging me.... Just designing for windows and adjusting for the others
    this.gammaCorrection = new Vector3( 1/toGamma, shadowShift, shadowBoost );
  }
    
  // -- -- -- -- -- -- -- -- -- -- //
  
  runHiddenCalcs(){
      if( this.windowHidden ){
          setTimeout( ()=>{
              this.runHiddenCalcs();
          }, 100);
      }
  }
  
  resetUserInput(e){
    this.directionKeysPressed=[0,0,0,0];
    this.directionKeyDown=false;
    this.shiftBoost=0;
    this.mapLockCursor(false,0);
    this.pxlCamera.camJumpKey(false);
    this.pxlCamera.deviceKey("space", false);
    
    if( this.touchMouseData.active ){
      if( this.touchScreen ){
        this.endTouch(e);
      }else{
        this.mapOnUp(e);
      }
    }
  }
  
  // -- -- -- -- -- -- -- -- -- -- //
  
  onmousemove(curObj,e){
    curObj.mapOnMove(e);
  }
  onmousedown(curObj,e){

    curObj.mapOnDown(e);
  }
  onmouseup(curObj,e){
    curObj.mapOnUp(e);
  }
  oncontextmenu(e){
        e.preventDefault();
        return false;
  }
  touchstart(curObj,e){
    curObj.startTouch(e);
  }
  touchmove(curObj,e){
    curObj.doTouch(e);
  }
  touchend(curObj,e){
    curObj.endTouch(e);
  }
  onkeydown(curObj,e){
    curObj.keyDownCall(e);
  }
  onkeyup(curObj,e){
    curObj.keyUpCall(e);
  }
  
  
  get active(){
    return this.inputActive;
  }
  set active(state){
    this.inputActive=!!state;
  }

  // -- -- -- -- -- -- -- -- -- -- //

  preventDefault(e){
    e=e||window.event;
    if (e.preventDefault(e)){
      e.preventDefault(e)();
    }
    e.returnValue=false;
  }
    
  setCursor(cursorType){
    if(this.allowCursorSwap){
      if(cursorType == "activeLatch"){
              let cursorType=["grab", "grabbing","all-scroll"][this.touchMouseData.button];
      }
      document.body.style.cursor=cursorType;
    }
  }
    
  getMouseXY(e){
    //e.this.preventDefault(e)();
    if(!this.mobile){
      let invert=this.pxlQuality.settings.mouse ? -1 : 1;
      if(this.cursorLockActive){
        this.mouseX+=(e.movementX||e.mozMovementX||e.webkitMovementX||0)*invert;
        this.mouseY+=(e.movementY||e.mozMovementY||e.webkitMovementY||0)*invert;
      }else{
        this.mouseX=e.clientX;
        this.mouseY=e.clientY;
      }
    }else{
      try{
        touch = e.touches[0];
        this.mouseX = touch.pageX;
        this.mouseY = touch.pageY;
        //pxlDevice.touchMouseData.startPos=new Vector2(this.mouseX,this.mouseY);
        //pxlDevice.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
      }catch(err){};
    }
    //mapMouse.x=(this.mouseX/sW)*2 - 1;
    //mapMouse.y=-(this.mouseY/sH)*2 + 1;
  }

  mapLockCursor(lock=false, button){
    if(this.canCursorLock && !this.mobile ){
      if(button==2){
        if(!lock && this.cursorRightButtonLockActive){
          this.cursorRightButtonLockActive=false;
        }else if(!lock && !this.cursorRightButtonLockActive){
          this.cursorRightButtonLockActive=true;
        }
        
        lock=lock || this.cursorRightButtonLockActive;
      }else{
        if(!lock){
          this.cursorRightButtonLockActive=lock;
        }
      }
      
      if(lock==true){
                this.pxlGuiDraws.pxlNavCanvas.focus();
        this.pxlGuiDraws.pxlNavCanvas.requestPointerLock();
      }else{
        document.exitPointerLock();
      }
      this.cursorLockActive=lock;
    }
  }

  mapOnDown(e){
    //let target= e.path ? e.path[0] : e.target; // Chrome or Firefox
    let target= e.target; // Chrome or Firefox
    if( target.getAttribute && target.getAttribute("id") == this.pxlCore && this.pxlTimer.active ){
      if(this.pxlGuiDraws.chatMessageInput){ this.pxlGuiDraws.chatMessageInput.blur(); }
      this.pxlGuiDraws.pxlNavCanvas.focus();
      this.preventDefault(e);
      this.touchMouseData.button=e.which;
      this.touchMouseData.active=true;
      this.touchMouseData.mode=this.touchMouseData.button;
      this.touchMouseData.startPos=new Vector2(this.mouseX,this.mouseY);
      this.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
      this.touchMouseData.curDistance=new Vector2(0,0);
      this.touchMouseData.curStepDistance=new Vector2(0,0);
      this.touchMouseData.dragCount=0;
            this.pxlAutoCam.touchBlender=false;
      this.setCursor("grabbing");
      this.mapLockCursor(true, e.button);
    }
  }
  mapOnMove(e){
    //let target= e.path ? e.path[0] : e.target; // Chrome or Firefox
    let target= e.target; // Chrome or Firefox

    if( (target.getAttribute && target.getAttribute("id") == this.pxlCore && this.pxlTimer.active) || this.cursorLockActive){

      this.preventDefault(e);
      this.getMouseXY(e);
      if((this.touchMouseData.active || this.cursorLockActive) && this.touchMouseData.startPos ){
        this.touchMouseData.dragCount++;

        let xyDeltaTemp=this.touchMouseData.endPos.clone();
        this.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
        this.touchMouseData.curDistance= this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos) ;
        
        this.touchMouseData.curStepDistance = this.touchMouseData.endPos.clone().sub(xyDeltaTemp) ;
        this.touchMouseData.netDistance.add( this.touchMouseData.curStepDistance.clone());
        let curvelocity=this.touchMouseData.velocity.clone();
        this.touchMouseData.velocity= this.touchMouseData.velocity.clone().multiplyScalar(3).add(this.touchMouseData.curStepDistance).multiplyScalar(.25);

        // ## Add into this.pxlQuality for 3rd mouse velocity reference
        /*this.touchMouseData.velocity.add(this.touchMouseData.curStepDistance).multiplyScalar(.5);
        let curveleaseprev=this.touchMouseData.velocityEasePrev.clone();
        this.touchMouseData.velocityEasePrev=this.touchMouseData.velocityEase.clone();
        this.touchMouseData.velocityEase=curveleaseprev.clone().add(curvelocity.add(this.touchMouseData.velocity).multiplyScalar(.5)).multiplyScalar(.5);*/
        
        this.touchMouseData.netDistYPerc =  (this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)*0.0008;
        this.touchMouseData.curFadeOut.add( xyDeltaTemp.sub(this.touchMouseData.endPos)  );
        
      }else{
        this.pxlEnv.hoverUserDetect();
      }
    }
  }
  mapOnUp(e){
    //let target= e.path ? e.path[0] : e.target; // Chrome or Firefox
    let target= e.target; // Chrome or Firefox
        if( this.pxlAudio.djVolumeParentObj ){
            this.pxlAudio.djVolumeParentObj.down=false;
        }
        if( target.getAttribute && target.getAttribute("id") == this.pxlCore){
            this.pxlGuiDraws.checkFocus( target.getAttribute("id"), true );
            
            if( this.mobile ){
                this.pxlAutoCam.getNextPath(false, 1);
            }else{
                
                this.preventDefault(e);
                
                this.touchMouseData.dragCount++;
                this.touchMouseData.dragTotal+=this.touchMouseData.dragCount;
                this.touchMouseData.active=false;
                this.touchMouseData.releaseTime=this.pxlTimer.curMS;
                this.pxlAutoCam.touchBlender=true;
                this.pxlAutoCam.setNextTrigger();
                
                if(this.touchMouseData.dragCount<9){ // User simply clicked, didn't dragCount
                    this.pxlEnv.clickUserDetect();
                }
                this.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
                this.touchMouseData.netDistYPerc =  (this.touchMouseData.netDistance.y+250)/1250;
                //this.touchMouseData.curDistance.multiplyScalar(0);
                //this.touchMouseData.curStepDistance.multiplyScalar(0);
                this.setCursor("grab");
                
                this.mapLockCursor(false, e.button);
                
                e.preventDefault();
                return false;
            }
        }
  }

    // -- -- -- -- -- -- //
    
  startTouch(e) {
    this.touchScreen=true;
    var touch = e.touches[0];
    this.mouseX = touch.pageX;
    this.mouseY = touch.pageY;
    this.touchMouseData.active=true;
    this.touchMouseData.mode=this.touchMouseData.button;
    this.touchMouseData.startPos=new Vector2(this.mouseX,this.mouseY);
    this.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
    this.touchMouseData.curDistance=new Vector2(0,0);
    this.touchMouseData.curStepDistance=new Vector2(0,0);
    this.touchMouseData.dragCount=0;
        this.pxlAutoCam.touchBlender=false;
        this.touchMouseData.releaseTime=this.pxlTimer.curMS;
        let target = e.target;
        if( target.getAttribute ){
            let id=target.getAttribute("id");
            if( this.objectPercList.includes( id ) ){
                if( id == "djPlayerVolume" ){
                    target=this.pxlAudio.djVolumeParentObj;
                    id=target.getAttribute("id");
                }
                
                let pBB=target.getBoundingClientRect();

                this.objectPerc.active=true;
                this.objectPerc.object=target;
                this.objectPerc.left=pBB.left;
                this.objectPerc.top=pBB.top;
                this.objectPerc.width=pBB.width;
                this.objectPerc.height=pBB.height;
                this.objectPerc.startX= this.mouseX - pBB.left;
                this.objectPerc.startY= this.mouseY - pBB.top;
                this.objectPerc.percX= ( this.mouseX - this.objectPerc.left ) / this.objectPerc.width ;
                this.objectPerc.percY= ( this.mouseY -this.objectPerc.top ) / this.objectPerc.height ;
                this.objectPerc.offsetX=0;
                this.objectPerc.offsetY=0;
                this.objectPerc.offsetPercX = 0 ;
                this.objectPerc.offsetPercY = 0 ;
                
                if( this.objectPercFuncList[id] ){
                    this.objectPercFuncList[id](e);
                }
            }
        }
  }

  doTouch(e) {
    var touch = e.touches[0];
    this.mouseX=touch.pageX;
    this.mouseY=touch.pageY;
    if(this.touchMouseData.active){
      this.touchMouseData.dragCount++;
            
            
            if(typeof(e.touches[1]) !== 'undefined'){
                var touchTwo = e.touches[1];
                if( e.touches.length>1 && this.touchMouseData.dragCount>10 ){
                    this.touchMouseData.lock=true;
                    touch = e.touches[1];
                    this.pxlEnv.setFogHue( [this.mouseX, this.mouseY], [touch.pageX, touch.pageY] );
                }
                return;
            }
      
      let xyDeltaTemp=this.touchMouseData.endPos.clone();
      this.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
      this.touchMouseData.curDistance= this.touchMouseData.startPos.clone().sub(this.touchMouseData.endPos) ;
      this.touchMouseData.curStepDistance = this.touchMouseData.endPos.clone().sub(xyDeltaTemp) ;
      this.touchMouseData.netDistance.add( this.touchMouseData.curStepDistance.clone() );
      this.touchMouseData.velocity.add(this.touchMouseData.curStepDistance).multiplyScalar(.5);
      this.touchMouseData.velocityEase.add(this.touchMouseData.curStepDistance).multiplyScalar(.5);
            
            this.touchMouseData.netDistYPerc =  (this.touchMouseData.netDistance.y+this.touchMouseData.curDistance.y+250)/1250;
            this.touchMouseData.curFadeOut.add( xyDeltaTemp.sub(this.touchMouseData.endPos)  );
    }
        
        
        if( this.objectPerc.active ){
            this.objectPerc.percX = ( this.mouseX - this.objectPerc.left ) / this.objectPerc.width ;
            this.objectPerc.percY = ( this.mouseY - this.objectPerc.top ) / this.objectPerc.height ;
            this.objectPerc.offsetX = this.mouseX - this.objectPerc.startX ;
            this.objectPerc.offsetY = this.mouseY - this.objectPerc.startY ;
            this.objectPerc.offsetPercX = this.objectPerc.offsetX / this.objectPerc.width ;
            this.objectPerc.offsetPercY = this.objectPerc.offsetY / this.objectPerc.height ;
        }
        
  }
  endTouch(e) {
    this.touchScreen=false;
    this.touchMouseData.dragCount++;
    this.touchMouseData.dragTotal+=this.touchMouseData.dragCount;
    this.touchMouseData.active=false;
    this.touchMouseData.endPos=new Vector2(this.mouseX,this.mouseY);
    //this.touchMouseData.netDistance.add( this.touchMouseData.curDistance.clone() );
    //this.touchMouseData.netDistance.y = Math.max(-1000, Math.min(1500, this.touchMouseData.netDistance.y ));
    this.touchMouseData.netDistYPerc =  (this.touchMouseData.netDistance.y+250)/1250;
    this.touchMouseData.curDistance.multiplyScalar(0);
    this.touchMouseData.curStepDistance.multiplyScalar(0);
        
        if( this.mobile && this.touchMouseData.dragCount<10 && this.pxlTimer.curMS-this.touchMouseData.releaseTime > .5 ){
            this.pxlCamera.itemTrigger();
            this.touchMouseData.lock=true;
        }
        this.touchMouseData.releaseTime=this.pxlTimer.curMS;
        
        if( this.touchMouseData.lock ){
            this.touchMouseData.lock=false;
            return;
        }
        
        this.pxlAutoCam.touchBlender=true;
        this.pxlAutoCam.setNextTrigger();
        
    //let target= e.path ? e.path[0] : e.target; // Chrome or Firefox
    let target= e.target; // Chrome or Firefox
        //let dragLength=this.touchMouseData.startPos.clone().sub( this.touchMouseData.endPos ).length();
        if( this.touchMouseData.dragCount < 10 && target.getAttribute && target.getAttribute("id")==this.pxlCore ){
            // this.pxlAutoCam.prevNextAutoCam(1, true);
            this.pxlAutoCam.getNextPath(false, 0);
        }
        
        this.objectPerc.active=false;
        if( this.pxlAudio.djVolumeParentObj ){
            this.pxlAudio.djVolumeParentObj.down=false;
    }
  }
    
    // -- -- -- -- -- -- //
    
  async keyDownCall(e){
    //e.this.preventDefault(e)();
        if( e.ctrlKey ){
            this.controlKey=true;
        }
    if(document.activeElement.type==undefined ){
            //%=
            if(false){
            //%
            if( e.ctrlKey || e.altKey || e.code.includes("F") ){
                e.preventDefault();
                return false;
            }
            //%=
            }
            //%
            
            if( this.pxlTimer.active){
                let keyHit=e.keyCode || e.which;
                //if( !this.pxlGuiDraws.howToActive ){
                    if(keyHit==37 || keyHit==65){ // Left
                        this.directionKeyDown=true;
                        this.keyDownCount[0]=this.pxlQuality.fpsCounter.z;
                        this.directionKeysPressed[0]=1;
                        this.pxlCamera.deviceKey(0, true);
                    }
                    if(e.ctrlKey && keyHit==87 && this.directionKeysPressed[1]==1){
                        e.this.preventDefault(e)();
                    }
                    if(keyHit==38 || keyHit==87){ // Up
                        this.directionKeyDown=true;
                        this.keyDownCount[1]=this.pxlQuality.fpsCounter.z;
                        this.directionKeysPressed[1]=1;
                        this.pxlCamera.deviceKey(1, true);
                    }
                    if(keyHit==39 || keyHit==68){ // Right
                        this.directionKeyDown=true;
                        this.keyDownCount[0]=this.pxlQuality.fpsCounter.z;
                        this.directionKeysPressed[2]=1;

                        this.pxlCamera.deviceKey(2, true);
                    }
                    if(keyHit==40 || keyHit==83){ // Down
                        this.directionKeyDown=true;
                        this.keyDownCount[1]=this.pxlQuality.fpsCounter.z;
                        this.directionKeysPressed[3]=1;
                        this.pxlCamera.deviceKey(3, true);
                    }
                    if(keyHit==16 || keyHit==224){ // Shift
                        this.shiftBoost=7;
                        this.pxlCamera.deviceKey("shift", true);
                    }
                    if(keyHit==32){
                        this.pxlCamera.camJumpKey(true);
                        this.pxlCamera.deviceKey("space", true);
                    }
                //}
            }
    }
  }
    
  async keyUpCall(e){
    //e.this.preventDefault(e)();
        if( e.ctrlKey ){
            this.controlKey=false;
            e.preventDefault();
            return false;
        }
    if(document.activeElement.type==undefined ){
      let keyHit=e.keyCode || e.which;
      let kCode=e.code || e.which;
      if( !e.isTrusted ){
        return false;
      }
      if( e.ctrlKey || e.altKey || e.code.includes("F") ){
          e.preventDefault();
          return false;
      }
            
      // -- -- -- -- -- -- -- -- -- -- //

      // Non-Active dependent functions -
      // 192 `
      if( kCode == "Backquote" ){
        this.pxlGuiDraws.guiToggleVisibility(); // No Texture
        return;
      }
      // 89 Y
      if( keyHit == 89 ){
        this.pxlGuiDraws.toggleShaderEditor();
      }
              
      // 220 \ | 
      if( keyHit == 220 ){
        console.log( "Saving screenshot" );
        let tmpResSave=this.pxlQuality.screenResPerc;
        this.pxlQuality.screenResPerc=1;
        //this.resizeRenderResolution( 3840, 2160 );//3240, 3240 );
        
        this.pxlEnv.mapRender(false);
        
        let dlData=this.pxlGuiDraws.pxlNavCanvas.toDataURL("image/png");
        let blob=atob( dlData.split(',')[1] );
        let size=blob.length;
        let arr=new Uint8Array(size);
        for(var x=0; x<size; ++x){
            arr[x]=blob.charCodeAt(x);
        }
        let cameraData=URL.createObjectURL(new Blob([arr]));

        let dt=new Date();
        let d=dt.getDate();
        let m=dt.getMonth()+1;
        let y=dt.getFullYear();
        let fileSuffix=y+"-"+m+"-"+d+"_"+dt.getHours()+"-"+dt.getMinutes()+"-"+dt.getSeconds();

        let tempLink=document.createElement("a");
        tempLink.download=this.projectTitle+"_"+fileSuffix+".png";
        tempLink.href=cameraData;
        document.body.appendChild(tempLink);
        tempLink.click();
        tempLink.parentNode.removeChild(tempLink);
        
        this.pxlQuality.screenResPerc=tmpResSave;
        //this.resizeRenderResolution();
        this.pxlEnv.mapRender(false);
        
        return;
      }

      // -- -- -- -- -- -- -- -- -- -- //
      
      // Active dependent functions; pxlNav needs to be running

      if(this.pxlTimer.active){
        if(keyHit==37 || keyHit==65){ // Left
          this.directionKeysPressed[0]=0;
          //this.pxlAutoCam.prevNextAutoCam(-1);
          this.pxlAutoCam.getNextPath(false, -1);
                    this.pxlCamera.deviceKey(0, false);
        }
        if(keyHit==38 || keyHit==87){ // Up
          this.directionKeysPressed[1]=0;
                    if( this.pxlAutoCam.active ){
                        this.pxlAutoCam.step(true);
                        this.pxlCamera.deviceKey(1, false);
                    }
        }
        if(keyHit==39 || keyHit==68){ // Right
          this.directionKeysPressed[2]=0;
          //this.pxlAutoCam.prevNextAutoCam(1);
          this.pxlAutoCam.getNextPath(false, 1);
                    this.pxlCamera.deviceKey(2, false);
        }
        if(keyHit==40 || keyHit==83){ // Down
          this.directionKeysPressed[3]=0;
                    if( this.pxlAutoCam.active ){
                        this.pxlAutoCam.setRoom(true);
                        this.pxlCamera.deviceKey(3, false);
                    }
        }
        if(!this.directionKeysPressed.includes(1)){
          this.directionKeyDown=false;
        }
        // Shift
        if(keyHit==16 || keyHit==224){ // Shift
          this.shiftBoost=0;
                    this.pxlCamera.deviceKey("shift", false);
          return;
        }
        // Space
        if(keyHit==32){
          this.pxlCamera.camJumpKey(false);
                    this.pxlCamera.deviceKey("space", false);
          return;
        }
        
        if( !this.directionKeyDown ){
          // 1 / Numpad 1 - Warp to Lobby
          if(keyHit == 49 || keyHit == 97){
            this.pxlCamera.fastTravel(0);
            return;
          }
          // 2 / Numpad 2 - Warp to Canyon
          if(keyHit == 50 || keyHit == 98){
            this.pxlCamera.fastTravel(1);
            return;
          }
          // 3 / Numpad 3 - Dance Hall
          if(keyHit == 51 || keyHit == 99){
            this.pxlCamera.fastTravel(2);
            return;
          }
          // 4 / Numpad 4 - Sunflower Room
          if(keyHit == 52 || keyHit == 100){
            this.pxlCamera.fastTravel(3);
            return;
          }
          // 5 / Numpad 5 - Drone Cam
          if(keyHit == 53 || keyHit == 101){
            this.pxlAutoCam.preAutoCamToggle();
            return;
          }
        }
                
             
        
        //%=
        // 75 K Numpad-Plus
        if(keyHit == 75 || keyHit == 107 || keyHit == 187){
        }
        // 74 J Numpad-Minus
        if(keyHit == 74 || keyHit == 109 || keyHit == 189){
        }
        // 76 L
        if(keyHit == 76){
        }
        // 48  0
        if(keyHit == 48){
        }
        
        // 221 ]
        if( keyHit == 221 ){
          // Prevent current item from wearing off
          //   Printing it from the check list
          if( this.pxlUser?.itemInactiveCmd?.length >0 ){
            console.log( this.pxlUser.itemInactiveCmd.pop() );
          }
          return;
        }
        // 106 *
        if( keyHit == 106 ){
        }
        
      }
      
      // Close all gui windows
      // ESC / Enter
      if(keyHit==27 || ( keyHit == 13 && !e.ctrlKey )){
        this.pxlGuiDraws.toggleHudBlock(false, true);
        this.pxlGuiDraws.toggleGuiWindowContainer(false, false, true);
        return;
      }
      
      
      if( e.altKey || e.ctrlKey || e.shiftKey ){
        return;
      }
      
      // 85  U
      if(keyHit == 85){
      }
      // 73  I
      if(keyHit == 73){
        this.pxlGuiDraws.iconEvent( "click", this.pxlGuiDraws.hudIcons.infoIcon, "info" );
        return;
      }
      // 71 G
      if(keyHit == 71){
        this.pxlGuiDraws.iconEvent( "click", this.pxlGuiDraws.hudIcons.settingsIcon, "settings" );
        return;
      }
      
      // 67  C
      if(keyHit == 67){
      }
      // 66  B
      if(keyHit == 66){
        this.pxlGuiDraws.iconEvent( "click", this.pxlGuiDraws.hudIcons.musicIcon, "musicToggle" );
        return;
      }
      // 78 N
      if(keyHit == 78){
        this.pxlGuiDraws.iconEvent( "click", this.pxlGuiDraws.hudIcons.speakerIcon, "speakerToggle" );
        return;
      }
      // 77  M
      if(keyHit == 77){
      }
      // 86  V
      if(keyHit == 86){
      }
      // 191  ?
      if(keyHit == 191){ // Open Help Screen
        this.pxlGuiDraws.iconEvent( "click", this.pxlGuiDraws.hudIcons.helpIcon, "help" );
        return;
      }
      
      // P 
      if(keyHit == 80){ // Pause pxlNav Environment
        this.directionKeysPressed=[0,0,0,0];
        this.directionKeyDown=false;
        this.pxlTimer.pause();
        if( this.pxlTimer.active ){ 
          this.pxlEnv.mapRender();
        }
        this.pxlCamera.workerFunc("activeToggle",this.pxlTimer.active);
        return;
      }
    }
  }

    // -- -- -- -- -- -- //

  // ## Have it run a pxlEnv class function instead of all this mess
  resizeRenderResolution( iWidth=null, iHeight=null ){
    iWidth=!iWidth ? window.innerWidth : iWidth;
    iHeight=!iHeight ? window.innerHeight : iHeight;
        
    this.mapW=(this.sW=iWidth)*this.pxlQuality.screenResPerc;
    this.mapH=(this.sH=iHeight)*this.pxlQuality.screenResPerc;
        
    this.screenRes.x=1/this.mapW;
    this.screenRes.y=1/this.mapH;
        this.screenRatio.x=this.sW/this.sH;
        this.screenRatio.y=this.sH/this.sW;

    if(this.pxlEnv.geoList['HDRView']){
      let rU=this.mapW>this.mapH ? 1 : this.mapW/this.mapH;
      //let rV=this.mapW>this.mapH ? this.mapH  his.mapW : 1;
      this.pxlEnv.geoList['HDRView'].material.uniforms.ratioU.value=rU;
      //this.pxlEnv.geoList['HDRView'].material.uniforms.ratioV.value=rV;
    }
    
    this.touchMouseData.mBlurVelInf=new Vector2(2*this.screenRes.x,2*this.screenRes.y);
        if(!this.pxlEnv.mapGlowPass){
            return;
        }
    this.pxlEnv.scene.renderTarget.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult);
    this.pxlEnv.scene.renderWorldPos.setSize(this.mapW*this.pxlQuality.bufferPercMult,this.mapH*this.pxlQuality.bufferPercMult);
    
    
    this.pxlEnv.mapComposer.setSize(this.mapW,this.mapH);
    this.pxlEnv.mapComposerGlow.setSize(this.mapW,this.mapH);
    
    // For external rooms --
    this.pxlEnv.roomComposer.setSize(this.mapW,this.mapH);
    this.pxlEnv.roomGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult);
    // -- -- -- -- -- -- --
        
    // For texture swapping --
    this.pxlEnv.delayComposer.setSize(this.mapW,this.mapH);
    // -- -- -- -- -- -- --
        
    this.pxlEnv.mapGlowPass.setSize(this.mapW*this.pxlQuality.bloomPercMult,this.mapH*this.pxlQuality.bloomPercMult);
    this.pxlEnv.mapMotionBlurPass.setSize(this.mapW*this.pxlQuality.mBlurPercMult,this.mapH*this.pxlQuality.mBlurPercMult);
    this.pxlEnv.mapOverlayHeavyPass.setSize(this.mapW,this.mapH);
    this.pxlEnv.mapOverlayPass.setSize(this.mapW,this.mapH);
    this.pxlEnv.mapOverlaySlimPass.setSize(this.mapW,this.mapH);
        
        // this.pxlEnv.mapOverlayHeavyPass.uniforms.ratio.value = this.mapW>this.mapH ? this.mapH  his.mapW : this.mapW  his.mapH;
    // this.pxlEnv.mapOverlayPass.uniforms.ratio.value = this.mapW>this.mapH ? this.mapH  his.mapW : this.mapW  his.mapH;
    // this.pxlEnv.mapOverlaySlimPass.uniforms.ratio.value = this.mapW>this.mapH ? this.mapH  his.mapW : this.mapW  his.mapH;
        this.pxlEnv.mapOverlayHeavyPass.uniforms.ratio.value = Math.min( 1, this.mapW/this.mapH );
    this.pxlEnv.mapOverlayPass.uniforms.ratio.value = Math.min( 1, this.mapW/this.mapH );
    this.pxlEnv.mapOverlaySlimPass.uniforms.ratio.value = Math.min( 1, this.mapW/this.mapH );
    
    this.pxlGuiDraws.pxlNavCanvas.width=this.sW;
    this.pxlGuiDraws.pxlNavCanvas.height=this.sH;
    this.pxlGuiDraws.loading=true;
    
    this.pxlEnv.engine.setPixelRatio(window.devicePixelRatio*this.pxlQuality.screenResPerc);
    //this.pxlEnv.engine.setPixelRatio(window.devicePixelRatio);
    //this.pxlEnv.engine.setSize(this.mapW, this.mapH);
    this.pxlEnv.engine.setSize(this.sW, this.sH);
    var aspectRatio=this.mapW/this.mapH;
    this.pxlCamera.camera.aspect=aspectRatio;
    this.pxlCamera.camera.updateProjectionMatrix();
        
        
    let safeAspect=[this.sW/this.sH, this.sH/this.sW];
        var aspectMult=[1,1];
    aspectMult[0]=(aspectRatio>safeAspect[0]) ? 1 : this.sW/(this.sH*safeAspect[0]) ;
    aspectMult[1]=(aspectRatio>safeAspect[1]) ? this.sH/(this.sW*safeAspect[1]) : 1 ;
    if(aspectMult[0]>1){
      aspectMult[1]*=1/aspectMult[0];
      aspectMult[0]=1;
    }else if(aspectMult[1]>1){
      aspectMult[0]*=1/aspectMult[1];
      aspectMult[1]=1;
    }
        this.screenAspect.x=aspectMult[0] * (1/(.5**2+.5**2)**.5);
        this.screenAspect.y=aspectMult[1];
        
        
        
    this.screenResDeltaPerc.x=this.sW/this.origRes.x;
    this.screenResDeltaPerc.y=this.sH/this.origRes.y;
        
        if( this.pxlEnv.roomSubList['Lobby'] ){
            this.pxlEnv.roomSubList['Lobby'].setShaders();
        }

    this.pxlEnv.updateCompUniforms();
    
    this.pxlGuiDraws.resize();
        
        
    this.pxlEnv.roomNameList.forEach( (r)=>{
      this.pxlEnv.roomSceneList[ r ].pxlCamAspect = aspectRatio ;
      //if( r != this.pxlEnv.mainRoom){
      if( this.pxlEnv.roomSceneList[ r ]?.resize ){
        this.pxlEnv.roomSceneList[ r ].resize( this.mapW, this.mapH );
      }
    });
        
        
        if( !this.pxlTimer.active ){
            this.pxlEnv.mapRender( false );
        }
    
    //this.pxlEnv.engine.render(this.pxlEnv.scene,this.pxlCamera.camera);
  }
}
