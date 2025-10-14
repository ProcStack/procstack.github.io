var pxlMouse=null;
class MouseController{
	constructor( mouseDDUEvals=['','',''], wheelEval='', touchSME=['','','']){
		this.bootTime=new Date().getTime();
		let sW=window.innerWidth;
		let sH=window.innerHeight;
		this.sW=sW;
		this.sH=sH;
		this.touchScreen=false;
		this.x=sW*.5;
		this.y=sH*.5;
		this.deltaX=0;
		this.deltaY=0;
		this.wheelDelta=0;
		
		const firefox=/Firefox/i.test(navigator.userAgent);
		//const IE = document.all?true:false;
		this.mouseWheelEvt=(firefox)? "DOMMouseScroll" : "mousewheel" ;
		this.button=0;
		this.inputActive=false;
		this.isDown=false;
		this.startPos=[0,0];
		this.endPos=[0,0];
		this.dragCount=0;
		this.dragTotal=0;
		this.latched=false;
		
		this.modeCount=3;
		this.mode=0;
		this.netDistance=new Array(this.modeCount).fill(0);
		
		this.mouseDownEval=mouseDDUEvals[0];
		this.mouseDragEval=mouseDDUEvals[1];
		this.mouseUpEval=mouseDDUEvals[2];
		this.mouseWheelEval=wheelEval;
		this.touchStartEval=touchSME[0];
		this.touchMoveEval=touchSME[1];
		this.touchEndEval=touchSME[2];
	}
	init(){
		document.onmousedown=function(e){pxlMouse.mapOnDown(e);};
		document.onmousemove=function(e){pxlMouse.mapOnMove(e);};
		document.onmouseup=function(e){pxlMouse.mapOnUp(e);};
		document.addEventListener('touchstart', function(e) {pxlMouse.startTouch(e);}, false);
		document.addEventListener('touchmove', function(e) {pxlMouse.doTouch(e);}, false);
		document.addEventListener('touchend', function(e) {pxlMouse.endTouch(e);}, false);
		document.addEventListener(pxlMouse.mouseWheelEvt, function(e) {pxlMouse.mouseWheel(e);}, false)
	}
	get active(){
		return this.inputActive;
	}
	set active(state){
		this.inputActive=!!state;
	}
	setCursor(cursorType="activeLatch"){
		if(cursorType == "activeLatch"){
			if(this.button==0){
				cursorType="grab";
			}else if(this.button==1){
				cursorType="grabbing";
			}else if(this.button==2){
				cursorType="all-scroll";
			}
		}
		document.body.style.cursor=cursorType;
	}
	//////////////////////////////////////
	getMouseXY(e){
		e.preventDefault();
		let curX=1;
		let curY=1;
		if(!this.touchScreen){
			curX=e.clientX;
			curY=e.clientY;
		}else{
			if(e.touches){
				let touch = e.touches[0];
				curX = touch.pageX;
				curY = touch.pageY;
			}
		}
		this.x=(curX/this.sW)*2 - 1;
		this.y=-(curY/this.sH)*2 + 1;
	}
	calculateDelta(){
		this.deltaX=this.endPos[0]-this.startPos[0];
		this.deltaY=this.startPos[1]-this.endPos[1];
	}
	mapOnDown(e){
		if(this.inputActive){
			e.preventDefault();
			this.button=e.which;
			this.mode=this.button;
			this.deltaX=0;
			this.deltaY=0;
			this.getMouseXY(e);
			this.startPos=[this.x,this.y];
			this.endPos=[this.x,this.y];
			this.dragCount=0;
			this.isDown=true;
			eval(this.mouseDownEval);
		}
	}
	mapOnMove(e){
		if(this.inputActive && this.isDown){
			e.preventDefault();
			this.getMouseXY(e);
			this.dragCount++;
			if(this.dragCount == 8){
				if(!this.latched){
					this.setCursor("grabbing");
				}
				this.latched=true;
			}
			this.endPos=[this.x,this.y];
			this.calculateDelta();
			eval(this.mouseDragEval);
		}
	}
	mapOnUp(e){
		if(this.inputActive && this.isDown){
			e.preventDefault();
			this.dragCount++;
			this.dragTotal+=this.dragCount;
			this.latched=0;
			this.isDown=false;
			this.endPos=[this.x,this.y];
			this.setCursor("grab");//("default");
			eval(this.mouseUpEval);
		}
	}
	mouseWheel(e){ // Scroll wheel
		//Ehhhh IE be damned...
		if(this.inputActive){
			let delta=Math.sign(e.detail || e.wheelDelta);
			this.wheelDelta+=delta;
			eval(this.mouseWheelEval);
		}
	}
	//////////////////////////////////////
	startTouch(e) {
		if(this.inputActive){
			this.touchScreen=true;
			let touch=e.touches[0];
			this.x=touch.pageX;
			this.y=touch.pageY;
			this.mode=this.button;
			this.getMouseXY(e);
			this.startPos=[this.x,this.y];
			this.endPos=[this.x,this.y];
			this.deltaX=0;
			this.deltaY=0;
			this.dragCount=0;
			this.isDown=true;
			eval(this.touchStartEval);
		}
	}
	doTouch(e) {
		if(this.inputActive && this.isDown){
			let touch=e.touches[0];
			let touchTwo=null
			if(typeof(e.touches[1]) !== 'undefined'){
				touchTwo = e.touches[1];
			}
			this.x=touch.pageX;
			this.y=touch.pageY;
		
			this.dragCount++;
			if(this.dragCount == 8){
				this.latched=true;
			}
			this.getMouseXY(e);
			this.endPos=[this.x,this.y];
			this.calculateDelta();
			eval(this.touchMoveEval);
		}
	}
	endTouch(e) {
		if(this.inputActive && this.isDown){
			let touch = e.touches[0];
			this.dragCount++;
			this.dragTotal+=this.dragCount;
			this.latched=false;
			this.isDown=false;
			this.endPos=[this.x,this.y];
			eval(this.touchEndEval);
		}
	}
}
