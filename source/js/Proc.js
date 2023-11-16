// ProcStack Main Runtime
//  Created by Kevin Edzenga; October 2021
//    Modded for Procstack.github.io; September 9th 2023 - Present
//
//

import State from "./State.js" 
//import Device from "./Device.js" 
import Utils from "./Utils.js" 
import ProcGL from "./ProcGL.js" 

import Emitter_PointTrails from "./Systems/Emitter_PointTrails.js" 
import Emitter_Sparks from "./Systems/Emitter_Sparks.js" 
import Emitter_Fields from "./Systems/Emitter_Fields.js" 

class ProcStack{
  constructor(target, targetgl, background){
    this.State=State
    this.startTime = Date.now()*.001
    this.elapsedTime = 0
    
    //this.Device = new Device();
    this.emitters={
      pointTrails:[],
      sparks:[],
      newtons:[]
    };

    this.nullKeys=[9,37,38,39,40];
    this.deviceSpecifics={ // Desktop vs Mobile/Tablet
      "intro_pause":{
        "desktop":"Hit <span class='introBolds'>Space</span>",
        "mobile":"<span class='introBolds'>Tap with 3 Fingers</span>"
      },
      "intro_pull":{
        "desktop":"Left Click",
        "mobile":"Tap+Drag"
      },
      "intro_newton":{
        "desktop":"Middle Click",
        "mobile":"Two Finger Tap"
      },
      "intro_pullAll":{
        "desktop":"Right Click",
        "mobile":"Tap+Hold"
      },
      "intro_start":{
        "desktop":"Click",
        "mobile":"Tap"
      }
    }
    
    this.verbose = true;
    this.verboseTarget = null;
    
    this.target = target
    this.targetgl = targetgl
    this.background = background
    
    this.ProcGL = null;
    
    this.sparkCount=10
  }

  init(){
    let mobile=this.mobileCheck()
    let tablet=this.tabletCheck(mobile)
    mobile = mobile || tablet
  
    State.mobile=mobile;
    State.tablet=tablet;
    
    this.sparkCount = mobile ? 7 : 20;
    
    this.verboseTarget = document.getElementById( "verbose" );
  
    this.buildEventListeners()
    
    this.buildCanvas()
    
    this.buildRendererGL()
    
    this.buildEmitters()

    this.runCanvas();

    this.introCardAnim(1)
  }

  verboseLog( text ){
    if( this.verbose && this.verboseTarget ){
      if( !["string","number"].includes(typeof(text)) ){
        text = JSON.stringify( text )
        text = text.split(",")
        text = text.join(",<br>")
      }
      
      this.verboseTarget.innerHTML = text
    }
  }

	// So many years of copying the same mobile/tablet regex over & over
	// TODO : Find the original credit here
  mobileCheck(){
    let ret=0;
    ((a)=>{
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))ret=1;
      })(navigator.userAgent||navigator.vendor||window.opera);
    return ret;
  }
  tabletCheck(mCheck){
    let ret=mCheck;
    if(ret==0){((a)=>{
      if(/(android|ipad|playbook|silk)/i.test(a))ret=1;
      })(navigator.userAgent||navigator.vendor||window.opera);}
    return ret;
  }

  
  preventDefault(e){
      e=e||window.event;
      if (e.preventDefault){
          e.preventDefault();
      }
      e.returnValue=false;
  }
  

  getMouseXY(e) {
    if(e!=0){
      if (State.IE) {
        State.mouseX = e.clientX + document.body.scrollLeft
        State.mouseY = e.clientY + document.body.scrollTop
      } else {
        State.mouseX = e.pageX
        State.mouseY = e.pageY
      }  
      this.preventDefault(e);
    }
  }


  moveMouse(e){
    this.getMouseXY(e);
    State.touchDragCount=0;
    this.preventDefault(e);
  }
  mouseDown(e){
    State.touchDragCount++;
    this.mouseAttracter(e,0);
  }
  mouseUp(e){
		// Disable user dragging forces
    if( State.mButton==1 && State.mouseAttract<2 && State.touchDragCount<5 ){
      this.genTrailPoints();
    }
    
    if(State.mButton == 2 || State.touchTwoFinger==1){
      this.releaseForces();
    } 
    
    State.mouseAttract=0;	
		
		//   Zero out button & touch values
    State.touchDragCount=0;
    State.mButton=0;
  }

  mouseAttracter(e,gen=0){
    State.mButton=e.which;
    if(State.mButton == 1){
      if(gen==0){
        State.mouseAttract=1;
      }
      gen+=1;
      if(gen>=10){
        State.mouseAttract=2;
      }else if(gen<10){
        if(	State.mouseAttract>=1){
          let tmpThis=this;
          /*setTimeout(()=>{
            tmpThis.mouseAttracter(e,gen);
          },30);*/
        }
      }
    }
    if(State.mButton == 2){
      this.genForces()
    }
    if(State.mButton == 3){
      State.mouseAttract=3;
      let score=document.getElementById("score_val");
      if( score ){
        score.innerText=0;
      }
    }
    return false;
  }

  touchStart(e){
    let touchList=e.touches;
    if(touchList.length>1){
      State.touchTwoFinger=1;
      
      this.genForces();
      
      if(State.touchTimer) clearTimeout(State.touchTimer);
    }else{
      let touch = touchList[0];
      State.mousePrevX = State.mouseX;
      State.mousePrevY = State.mouseY;
      State.mouseX = touch.pageX;
      State.mouseY = touch.pageY;
      State.touchDown=1;
      
      State.mouseAttract=1;
      
      if(State.touchTwoFingerPrev==0){
        let tmpThis=this;
        State.touchTimer=setTimeout(()=>{tmpThis.touchLong()}, State.longTouchLength);
      }
      this.doubleTouchDetect();
    }
    this.preventDefault(e);
  }
  touchDrag(e){
    State.touchDragCount++;
    if(State.touchDragCount>5 && State.touchTimer){
      clearTimeout(State.touchTimer);
    }
    let touchList=e.touches;
    let hit=touchList.length>1;
    if(hit && State.touchTwoFinger==1){
      State.mouseAttract=0;
    }else{
      let touch = touchList[0];
      State.mouseX = touch.pageX;
      State.mouseY = touch.pageY;
    }
    this.preventDefault(e);
  }
  touchEnd(e){
    if(State.touchTimer) clearTimeout(State.touchTimer);
    if(State.touchDragCount<5){
      this.genTrailPoints();
    }
    this.releaseForces();
    
    if( e.touches.length>=2 ){ // Lifted 3rd finger
      this.togglePaused()
    }
    
    State.touchTwoFingerPrev=State.touchTwoFinger;
    State.touchTwoFinger=0;
    State.touchDragCount=0;
    State.touchDown=0;
    State.mouseAttract=0;
    this.preventDefault(e);
  }

  touchLong(){
    if( State.paused ){
      this.togglePaused()
    }
    // Pull All Points
    State.mouseAttract=3;
  }
  doubleTouchDetect(){
    State.doubleTouchVal+=1;
    if(State.doubleTouchVal==2){
      State.doubleTouchVal=0;
      if(State.touchDoubleTimer) clearTimeout(State.touchDoubleTimer);
      
    }else{
      State.touchDoubleTimer=setTimeout(function(){
          State.doubleTouchVal=0;
        }, State.doubleTouchLength);
    }
  }


  resize(e){
    State.sW=window.innerWidth;
    State.sH=window.innerHeight;
    this.buildCanvas()
    
    if( this.ProcGL ){
      this.ProcGL.resize()
    }
    
    let introCards=document.getElementById('introCards');
    let wSize=introCards.offsetWidth;
    let introInner=document.getElementById('introCardsInner');
    if(wSize>State.sW){
      introInner.classList.add("mobile");
      State.introCardsOrient=1;
    }else {
      let introInner=document.getElementById('introCardsInner');
      introInner.classList.remove("mobile");
      State.introCardsOrient=0;
    }
  }

  keyPress(e){
    let keyHit=e.keyCode || e.which;
    if(this.nullKeys.indexOf(keyHit) != -1){
      return false;
    }
    //Space
    if(keyHit===32){
      this.togglePaused()
      return false;
    }
  }


  // -- -- --
  
  buildEventListeners(){
    let tmpThis=this;
    document.addEventListener('mousemove', (e)=>{tmpThis.moveMouse(e);}, false);
    document.addEventListener('mousedown', (e)=>{tmpThis.mouseDown(e);}, false);
    document.addEventListener('mouseup', (e)=>{tmpThis.mouseUp(e);}, false);
    
    document.addEventListener('touchstart', (e)=>{tmpThis.touchStart(e);}, false);
    document.addEventListener('touchmove', (e)=>{tmpThis.touchDrag(e);}, false);
    document.addEventListener('touchcancel', (e)=>{tmpThis.touchEnd(e);}, false);
    document.addEventListener('touchend', (e)=>{tmpThis.touchEnd(e);}, false);
    // TODO : Convert user interaction to pointer events
    // document.addEventListener('pointerdown', (e)=>{tmpThis.touchStart(e);}, false); 
    // document.addEventListener('pointermove', (e)=>{tmpThis.touchDrag(e);}, false);
    // document.addEventListener('pointerup', (e)=>{tmpThis.touchEnd(e);}, false);


    // Handle hiding the Intro Card
    function setIntroCardVis(){
      document.removeEventListener('mousedown', setIntroCardVis);
      document.removeEventListener('touchstart', setIntroCardVis);
      tmpThis.toggleIntroCardVisibility(0);
    }
    document.addEventListener('mousedown', setIntroCardVis);
    document.addEventListener('touchstart', setIntroCardVis);
    
    
    window.addEventListener('selectstart', (e)=>{tmpThis.preventDefault(e);}, false);
    
    document.addEventListener('keyup', (e)=>{tmpThis.keyPress(e);}, false);
    window.addEventListener('resize', (e)=>{tmpThis.resize(e);}, false);
    window.oncontextmenu = (e)=>{ return false; };
  }
  
  
  buildCanvas(){
    if( typeof(this.target) == "string" ){
      this.target = document.getElementById( this.target )
    }
    if( typeof(this.targetgl) == "string" ){
      this.targetgl = document.getElementById( this.targetgl )
    }
    if( typeof(this.background) == "string" ){
      this.background = document.getElementById( this.background )
    }
    console.log(this.targetgl)
    this.target.width=State.sW;
    this.target.height=State.sH;
    this.targetgl.width=State.sW;
    this.targetgl.height=State.sH;
    this.background.width=State.sW;
    this.background.height=State.sH;
    
    Utils.gradientRunner(this.background,Utils.rgbToHex([0,20,50]),Utils.rgbToHex([0,5,20]),0);
    
    this.target.focus();
    this.target.onfocusout=()=>{ this.target.focus(); };
  }
  
  // -- -- -- -- --
  
  
    
  buildRendererGL(){
    
    this.ProcGL = new ProcGL( this, this.targetgl, this.target );
    this.ProcGL.init()
    
  }
  
  // -- -- -- -- --
  
  buildEmitters(){
    
    let newtonsEmitter = new Emitter_Fields( State );
    this.emitters.newtons.push( newtonsEmitter )
    
    let pointTrailEmitter = new Emitter_PointTrails( State );
    pointTrailEmitter.forces = newtonsEmitter.points;
    let count=Utils.mag( [State.sW,State.sH] )*.05+25;
    if( State.mobile ){
      count += 50;
    }
    count= Math.round(count*.1)*10;
    pointTrailEmitter.scatterPoints( [State.sW, State.sH],count );
    this.emitters.pointTrails.push( pointTrailEmitter )
      
    let sparksEmitter = new Emitter_Sparks( State );
    this.emitters.sparks.push( sparksEmitter )
    

    if( this.ProcGL ){
      this.ProcGL.buildUserSystem("local")
    }

  }
  
  genTrailPoints(){
    this.emitters.pointTrails.forEach( (n)=>{
      n.spawnPointsAt( [State.mouseX,State.mouseY], 2); 
    })
  
    this.emitters.sparks.forEach( (n)=>{
      n.genPoint( [State.mouseX,State.mouseY], this.sparkCount ); 
    })
  }
  
  genForces(){
    this.emitters.newtons.forEach( (n)=>{
      n.genPoint( [State.mouseX,State.mouseY] ); 
    })
  }
  releaseForces(){
    this.emitters.newtons.forEach( (n)=>{
      n.newtonRelease(); 
    })
  }
  
  // -- -- -- -- --
  
  togglePaused( value=null ){
    if( value == null ){
      value = !State.paused
    }
    
    State.paused=value;
    
    if( value==0 ){
      this.runCanvas();
    }
  }
  
  // -- -- -- -- --
  
    
  introCardPrep(){
    let iPause = document.getElementById('intro_pause');
    let deviceType = null
    if( State.mobile ){
      deviceType = "mobile"
    } else {
      deviceType = "desktop"
    }
        
    for( let domInfo in this.deviceSpecifics ){
      let obj = document.getElementById( domInfo )
      if( obj ){
        let info = this.deviceSpecifics[ domInfo ]
        if( info.hasOwnProperty(deviceType) ){
          obj.innerHTML = info[deviceType]
        }
      }
    }
  }

  introCardAnim(vis=1){
    let introCards=document.getElementById('introCards');
    if( introCards ){
      let neurousTitle=document.getElementById('neurousTitle');
      let wSize=introCards.offsetWidth;
      State.introCardsOrient=wSize>State.sW;
      
      if( neurousTitle ){
        
      }
      
      if( State.introCardsOrient ){
        let introInner=document.getElementById('introCardsInner');
        if( introInner ){
          introInner.classList.add("mobile");
        }
        neurousTitle.style.maxWidth=State.sH;
      }else{
        neurousTitle.style.maxWidth=State.sW;
      }
      
      this.introCardPrep();
      
      introCards.style.transition=' all 1s ease-in';	
      introCards.style.visibility='visible';	
      let markerCanvas = document.getElementById('markerCanvas');
      if( markerCanvas ){
        markerCanvas.focus();
      }
    }
  }

  
  toggleIntroCardVisibility( value=null ){
    let introCards=document.getElementById('introCards');

    if( !introCards ) return;
    
    if( value == null ){
      let curValue = parseInt( introCards.getAttribute("vis") )
      //console.log("vis "+typeof(curValue)+ " "+ (curValue+1));
      value = curValue;
    }
    
    introCards.setAttribute("vis", value)
    
    if(value==0){
      if(State.mobile){
        introCards.classList.add('fadeOutMobile');
      }else{
        introCards.classList.add('fadeOut');
      }
    }
  }
  
  stepClock(){
    let curTime = Date.now()*.001
    curTime = curTime - this.startTime
    this.elapsedTime = curTime
  }
  /*
  runCanvas(){
    
    this.stepClock()
    
    let draw=this.target.getContext('2d');
    draw.clearRect(0,0,State.sW,State.sH);

    State.touchDown&&(State.touchDown++);

    let scoreAdd=0;
    
		let sizePullOffset=(1-Math.min(1,(this.mouseDist+this.pullDist*.2)/(this.pullDist*6)+.1))+1 ;
		let compers=['lighter', 'lighter', 'screen','lighter'];
		let sl;
    for( let emitterType in this.emitters ){
      this.emitters[emitterType].forEach( (emitter)=>{
        emitter.step();
        for(let x=0;x<emitter.points.length;++x){
          let curPoint = emitter.points[x]
          let tmpPos=[ ...curPoint.pos ];

          let pointColor;
          if(curPoint.spark==0){
            pointColor=[Math.min(255,curPoint.color[0]+curPoint.color[0]*curPoint.mousePerc), 
                  Math.min(255,curPoint.color[1]+curPoint.color[1]*curPoint.mousePerc), 
                  Math.min(255,curPoint.color[2]+curPoint.color[2]*curPoint.mousePerc) ];
          }else{
            pointColor=Utils.multFloat( curPoint.color, curPoint.colorBoost+1 );
          }
          // let pColor=[]
          //drawLine(curPoint.trail,2,pointColor,this.alpha,0,this.target,[-1]);
					let size=5*(curPoint.mousePerc+sizePullOffset);
          
          let alpha=Math.min(1, curPoint.alpha+(curPoint.mousePerc*.5)-(curPoint.colorBoost*.5));
          if( emitterType != "sparks"){
            alpha=alpha+Math.max(0,-.5+alpha*.3333333333333333);
          }
          //let compers=['lighter', 'overlay','lighter', 'screen','lighter','overlay'];
          let comp=null;
          if( true || !State.mobile ){
            comp = compers[curPoint.id%compers.length];
          }
          let normSpeed=(curPoint.speed*.0083333333333333+1); // 1/120 + 1
          
          if(curPoint.mousePerc>0 && State.mouseAttract!=3){
            scoreAdd+=parseInt(curPoint.mousePerc*2);
          }
          let thickness=1;
          if( State.mobile ){
            thickness=2*curPoint.mousePerc * normSpeed;
          }else{
            thickness=3*curPoint.mousePerc * normSpeed;
          }
          if( emitterType != "newtons" ){
            Utils.drawGeo([  ...curPoint.trail, ...curPoint.pos ],3,size,pointColor,alpha,thickness,this.target,comp);
          }

          draw.globalCompositeOperation = "source-over"
          if( emitterType == "newtons" ){
            draw.beginPath();
            if(false && !State.mobile) draw.globalCompositeOperation=comp;
            draw.fillStyle=Utils.rgbToHex(pointColor);
            draw.globalAlpha=curPoint.alpha;
            let scaler=(curPoint.size+curPoint.mousePerc)*normSpeed;
            draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
            draw.fill();
            if(curPoint.size>3  && !State.mobile){
              draw.beginPath();
              
              if(false && !State.mobile) draw.globalCompositeOperation=comp;
              draw.fillStyle=Utils.rgbToHex(pointColor);
              draw.globalAlpha=.35;
              scaler=curPoint.size+curPoint.mousePerc;
              scaler=scaler*1.3;
              draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
              draw.fill();
              if(curPoint.size>6){
                draw.beginPath();
                
                if(false && !State.mobile) draw.globalCompositeOperation=comp;
                draw.fillStyle=Utils.rgbToHex(pointColor);
                draw.globalAlpha=.12;
                scaler=curPoint.size+curPoint.mousePerc;
                scaler=scaler*1.6;
                draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
                draw.fill();
              }
            }
          }
        }
      });
    }
    */
  runCanvas(){
    
    this.stepClock()
    
    let draw=this.target.getContext('2d');
    draw.clearRect(0,0,State.sW,State.sH);

    State.touchDown&&(State.touchDown++);

    let scoreAdd=0;
    
		let sizePullOffset=(1-Math.min(1,(this.mouseDist+this.pullDist*.2)/(this.pullDist*6)+.1))+1 ;
		let sl;
		
		// Toggle blend layers, like screen, lighter, and other comp blending methods.
		//   This is using the canvas2d context, which is quite slow
		//     Leaving in for future shader uniform value toggles
		let runBlendStyles = false;
		let compers=['lighter', 'lighter', 'screen','lighter'];
		
    for( let emitterType in this.emitters ){
      this.emitters[emitterType].forEach( (emitter)=>{
        emitter.step();
        for(let x=0;x<emitter.points.length;++x){
          let curPoint = emitter.points[x]
          let tmpPos=[ ...curPoint.pos ];

          let pointColor;
          if(curPoint.spark==0){
            pointColor=[Math.min(255,curPoint.color[0]+curPoint.color[0]*curPoint.mousePerc), 
                  Math.min(255,curPoint.color[1]+curPoint.color[1]*curPoint.mousePerc), 
                  Math.min(255,curPoint.color[2]+curPoint.color[2]*curPoint.mousePerc) ];
          }else{
            pointColor=Utils.multFloat( curPoint.color, curPoint.colorBoost+1 );
          }
          // let pColor=[]
          //drawLine(curPoint.trail,2,pointColor,this.alpha,0,this.target,[-1]);
					let size=5*(curPoint.mousePerc+sizePullOffset);
          
          let alpha=Math.min(1, curPoint.alpha+(curPoint.mousePerc*.5)-(curPoint.colorBoost*.5));
          if( emitterType != "sparks"){
            alpha=alpha+Math.max(0,-.5+alpha*.3333333333333333);
          }
          //let compers=['lighter', 'overlay','lighter', 'screen','lighter','overlay'];
          let comp=null;
          if( runBlendStyles || !State.mobile ){
            comp = compers[curPoint.id%compers.length];
          }
          let normSpeed=(curPoint.speed*.0083333333333333+1); // 1/120 + 1
          
          if(curPoint.mousePerc>0 && State.mouseAttract!=3){
            scoreAdd+=parseInt(curPoint.mousePerc*2);
          }
          let thickness=1;
          if( State.mobile ){
            thickness=2*curPoint.mousePerc * normSpeed;
          }else{
            thickness=3*curPoint.mousePerc * normSpeed;
          }
          if( emitterType != "newtons" ){
            Utils.drawGeo([  ...curPoint.trail, ...curPoint.pos ],3,size,pointColor,alpha,thickness,this.target,comp);
          }

          draw.globalCompositeOperation = "source-over"
          if( emitterType == "newtons" ){
            draw.beginPath();
            if(runBlendStyles && !State.mobile) draw.globalCompositeOperation=comp;
            draw.fillStyle=Utils.rgbToHex(pointColor);
            draw.globalAlpha=curPoint.alpha;
            let scaler=(curPoint.size+curPoint.mousePerc)*normSpeed;
            draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
            draw.fill();
            if(curPoint.size>3  && !State.mobile){
              draw.beginPath();
              
              if(runBlendStyles && !State.mobile) draw.globalCompositeOperation=comp;
              draw.fillStyle=Utils.rgbToHex(pointColor);
              draw.globalAlpha=.35;
              scaler=curPoint.size+curPoint.mousePerc;
              scaler=scaler*1.3;
              draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
              draw.fill();
              if(curPoint.size>6){
                draw.beginPath();
                
                if(runBlendStyles && !State.mobile) draw.globalCompositeOperation=comp;
                draw.fillStyle=Utils.rgbToHex(pointColor);
                draw.globalAlpha=.12;
                scaler=curPoint.size+curPoint.mousePerc;
                scaler=scaler*1.6;
                draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
                draw.fill();
              }
            }
          }
        }
      });
    }
    
    if( this.ProcGL ){
      this.ProcGL.render( this.elapsedTime )
    }
    // let score=document.getElementById("score_val");
    // if( score ){
    //   score.innerHTML = parseInt(parseInt(score.innerHTML)+scoreAdd)
    // }
    
    if( !State.paused ){
      window.requestAnimationFrame( ()=>{ this.runCanvas(); } );
    }
  }
}

window.addEventListener("load", ()=>{
  const NeurousNet = new ProcStack( "markerCanvas", "ProcGLCanvas", "bkCanvas" );
  NeurousNet.init();
})
