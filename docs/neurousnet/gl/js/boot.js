
function preventDefault(e){
    e=e||window.event;
    if (e.preventDefault){
        e.preventDefault();
    }
    e.returnValue=false;
}

function getMouseXY(e) {
	if(e!=0){
		if (IE) {
			mouseX = e.clientX + document.body.scrollLeft
			mouseY = e.clientY + document.body.scrollTop
		} else {
			mouseX = e.pageX
			mouseY = e.pageY
		}  
		if(touchDragCount>0){
			pushMouseCoordsPrev(mouseX,mouseY);
		}
		preventDefault(e);
	}
}

window.oncontextmenu = function () {
   return false;
}

function pushMouseCoordsPrev(toX,toY){
	mouseX=toX;
	mouseY=toY;
	mousePrevX=[(toX+mousePrevX[0])*.5, (mousePrevX[0]+mousePrevX[1])*.5, (mousePrevX[1]+mousePrevX[2])*.5];
	mousePrevY=[(toY+mousePrevY[0])*.5, (mousePrevY[0]+mousePrevY[1])*.5, (mousePrevY[1]+mousePrevY[2])*.5];
	
	
	bgUniformMouseXY.set(toX/cW*(cW/sW), 1-toY/cH*(cH/sH));
	bgUniformMousePrevX.set((mousePrevX[0]/cW)*(cW/sW), (mousePrevX[1]/cW)*(cW/sW), (mousePrevX[2]/cW)*(cW/sW) );
	bgUniformMousePrevY.set(1-mousePrevY[0]/cH*(cH/sH), 1-mousePrevY[1]/cH*(cH/sH), 1-mousePrevY[2]/cH*(cH/sH) );
	
}

function moveMouse(e){
	getMouseXY(e);
	//touchDragCount=0;
	preventDefault;
}
function mouseDown(e){
	if(!pause){
		touchDragCount++;
		mouseAttracter(e,0);
		if(introCardsVisible==1){
			introCardsVisible=0;
			var introCards=document.getElementById('introCards');
			if(mobile==1){
				introCards.classList.add('fadeOutMobile');
			}else{
				introCards.classList.add('fadeOut');
			}
			getMouseXY(e);
			mousePrevX=new Array(3).fill(mouseX);
			mousePrevY=new Array(3).fill(mouseY);
		}
		
		touchDown=1;
	}
}
function mouseUp(e){
	if(!pause){
		mouseAttracter(e);
		if(touchDragCount<5) genPoint(e);
		newtonRelease(); 
		
		if(mButtonCheck==0){
			mButtonCheck=1;
			if(mButton==1){
				pointBooster(.7,0,0, 1, [mouseX-(mousePrevX[2]+mousePrevX[1]+mousePrevX[0])*.3333333333333*1.1, mouseY-(mousePrevY[2]+mousePrevY[1]+mousePrevY[0])*.333333333333*1.1], 1, 1);
			}else if(mButton==3){
				//if(mButton==undefined && mButtonCheck==0){
					let curVel=[(mouseX-mousePrevX[0])*2, (mouseY-mousePrevY[0])*2];
					let velLen=(curVel[0]**2 + curVel[1]**2)**.5;
					console.log(velLen);
					velLen=1-Math.min(1, velLen/100)
					
					velLen+=.2;
					pointBooster(velLen,0,1, 1, curVel,2, 1);
				//}
			}
		}
	}
	touchDragCount=0;
	touchDown=0;
}

function mouseWheel(e){ // Scroll wheel
	if(!pause){
		//Ehhhh IE be damned...
		// ... Bleh ... I'll address issues after MAP is done
		var delta=Math.sign(e.detail || e.wheelDelta);
		//mouseWheelDelta+=delta;
		//if(mapCamMode == 2){
			mouseWheelDelta=Math.min(10, Math.max(-10, delta));
			//tankScale=Math.min(1, tankScale*(mouseWheelDelta*.01+1));
			tankScale=Math.max(.65, Math.min(1, tankScale*( mouseWheelDelta*.01+1 )) );
		//}
	}
	preventDefault;
}

function mouseAttracter(e,gen=0){
	mButtonCheck=0;
	mButtonPrev=mButton;
	mButton=e.which;
	//if(mButton==undefined) mButton=mButtonPrev;
	if(mButton == 1){
		if(gen==0){
			mouseAttract=1;
		}
		gen+=1;
		if(gen>=10){
			mouseAttract=2;
		}else if(gen<10){
			if(	mouseAttract>=1){
				setTimeout(function(){
					mouseAttracter(gen);
				},30);
			}
		}
	}
	if(mButton == 2){
		//newtonSpawn();
	}
	if(mButton == 3){
		mouseAttract=3;
		$('#score_val').html(0);
	}
	return false;
}

function touchStart(e){
	var touchList=e.touches;
	if(touchList.length>1){
		touchTwoFinger=1;
		if(touchTimer) clearTimeout(touchTimer);
	}else{
		if(!pause){
			var touch = touchList[0];
			
			pushMouseCoordsPrev(touch.pageX,touch.pageY);
			
			mouseVel=[ (mouseX-mousePrevX[0]), (mouseY-mousePrevY[0]) ]
			mouseVelMag=( mouseVel[0]**2 + mouseVel[1]**2 )**.5;
			touchDown=1;
			
			mousePrevX=new Array(3).fill(mouseX);
			mousePrevY=new Array(3).fill(mouseY);
			mouseAttract=1;
			if(introCardsVisible==1){
				introCardsVisible=0;
				var introCards=document.getElementById('introCards');
				if(mobile==1){
					introCards.classList.add('fadeOutMobile');
				}else{
					introCards.classList.add('fadeOut');
				}
			}
		}
		if(touchTwoFingerPrev==0){
			touchTimer=setTimeout(touchLong, longTouchLength);
		}
		doubleTouchDetect();
	}
	preventDefault;
}
function touchDrag(e){
	touchDragCount++;
	if(touchDragCount>5 && touchTimer){
		clearTimeout(touchTimer);
	}
	if(!pause){
		var hit;
		var touchList=e.touches;
		hit=+touchList.length>1;
		if(hit && touchTwoFinger==1){
			mouseAttract=0;
			mouseX = (touchList[0].pageX + touchList[1].pageX)*.5;
			mouseY = (touchList[0].pageY + touchList[0].pageY)*.5;
			
		}else{
			var touch = touchList[0];
			pushMouseCoordsPrev(touch.pageX, touch.pageY);
		}
	}
	preventDefault;
}
function touchEnd(e){
	if(touchTimer) clearTimeout(touchTimer);
	if(!pause){
		if(touchDragCount<5) genPoint(e);
		newtonRelease(); 
		touchTwoFingerPrev=touchTwoFinger;
		touchTwoFinger=0;
		touchDragCount=0;
		touchDown=0;
		mouseAttract=0;
	}
	touchDragCount=0;
	touchDown=0;
	preventDefault;
}

function touchLong(){
	if(pause==1){
		pause=(pause+1)%2;
		if(pause==0) runCanvas("markerCanvas",0,1);
	}else{
		mouseAttract=3;
	}
}
function doubleTouchDetect(){
	doubleTouchVal+=1;
	if(doubleTouchVal==2){
		doubleTouchVal=0;
		if(touchDoubleTimer) clearTimeout(touchDoubleTimer);		
		tankScale=tankScale==1? .8: 1;
	}else{
		touchDoubleTimer=setTimeout(function(){
				doubleTouchVal=0;
			}, doubleTouchLength);
	}
}

function pinchTouch(e){ // Scroll wheel
	//Ehhhh IE be damned...
	// ... Bleh ... I'll address issues after MAP is done
	var delta=e.scale;
	//if(mapCamMode == 2){
		mouseWheelDelta=Math.min(200, Math.max(-200, delta));
		tankScale=Math.max(.65, Math.min(1, tankScale*( mouseWheelDelta*.0005+1 )) );
	//}
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}

window.onresize=function(e){resizeRenderResolution(e);};

function resizeRenderResolution(e=0){
	mapW=(cW=window.innerWidth)*mapResPerc;
	mapH=(cH=window.innerHeight)*mapResPerc;
	sW=nextPower(cW);
	sH=nextPower(cH);
	if(e){
		//init(0);
	
		var introCards=document.getElementById('introCards');
		var wSize=introCards.offsetWidth;
		var introInner=document.getElementById('introCardsInner');
		if(wSize>sW){
			introInner.classList.add("mobile");
			introCardsOrient=1;
		}else {
			var introInner=document.getElementById('introCardsInner');
			introInner.classList.remove("mobile");
			introCardsOrient=0;
		}
	}
	markerCanvas.width=sW;
	markerCanvas.height=sH;
	
	let tmpCanvasDraw=bkCanvas.toDataURL("image/png");
	bkCanvas.width=sW;
	bkCanvas.height=sH;
	let destination=new Image;
	destination.onload=function(){
		bkCanvas.getContext('2d').drawImage(destination,0,0,sW,sH);
	}
	destination.src=tmpCanvasDraw;
	
	mapCanvas.width=sW;
	mapCanvas.height=sH;
	
	mapEngine.setPixelRatio(window.devicePixelRatio*mapResPerc);
	var aspectRatio=mapW/mapH;
	mapCam.aspect=window.devicePixelRatio;//aspectRatio;
	mapEngine.setSize(sW, sH);
	mapCam.updateProjectionMatrix();
	//mainMenuShader.uniforms.uResolutionDiv.value= new THREE.Vector2(1/cW,1/cH);
	//mapEngine.render(mapScene,mapCam);
	blurShaderV.uniforms.uResolutionDiv.value= new THREE.Vector2(1/cW,1/cH);
	markerThicknessOffset=(1-mapResPerc);
	markerThicknessOffset=6*markerThicknessOffset*markerThicknessOffset + ( mapResPerc<.1?(1-mapResPerc*10)*70:0 );
	//mapRender(runner);
	
}

$(document).on('keyup', function(e){
	keyHit=e.keyCode || e.which;
	var nullKeys=[9,37,38,39,40];
	if(nullKeys.indexOf(keyHit) != -1){
		return false;
	}
	//Space
	if(keyHit===32){
		pause=(pause+1)%2;
		if(pause==0){
			//runCanvas("markerCanvas",0,1);
			mapRender(runner);
		}
		return false;
	}
});

function mobileCheck(){
	var ret=0;
	(function(a){
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))ret=1;
		})(navigator.userAgent||navigator.vendor||window.opera);
	return ret;
}
function tabletCheck(mCheck){
	var ret=mCheck;
	if(ret==0){(function(a){
		if(/(android|ipad|playbook|silk)/i.test(a))ret=1;
		})(navigator.userAgent||navigator.vendor||window.opera);}
	return ret;
}
var mobile=mobileCheck();
var tablet=tabletCheck(mobile);

if(mobile==1){
	mapResPerc=.20;
	options_shadowQuality=2; // After optimized mobile, not needed
	options_shadowMapRes=128;
	options_fpsRateDrop=3; // Make the drop frame system smarter
}


var sign=e=>e<0?-1:1;


function mapPrepGUI(){
	datGui=new dat.gui.GUI();
	datGui.closed=true;
	var parms={
		autoQuality:function(){
			mapAutoQualityToggle();
			if(datQualityButton!=-1){
				if(mapAutoQuality == 1){
					datQualityButton.name("Auto Quality On");
				}else{
					datQualityButton.name("Auto Quality Off");
				}
			}
		},
		renderResolution:options_renderResolution,
		skip:options_fpsRateDrop,
		dust:options_dustParticles,
		shadow:options_shadowQuality,
		pause:function(){
			pausePlayback();
			if(datPauseButton!=-1){
				if(mapPause == 1){
					datPauseButton.name("Start Playback");
				}else{
					datPauseButton.name("Pause Playback");
				}
			}
		},
		stats:function(){
			if(fpsStats == -1){
				fpsStats=new Stats();
				document.body.appendChild(fpsStats.domElement);
				fpsStats.update();
				datStatsButton.name("Hide FPS Stats");
			}else{
				fpsStats.domElement.remove();
				fpsStats=-1;
				datStatsButton.name("Display FPS Stats");
			}
		}
	};
	datQualityButton=datGui.add(parms,'autoQuality').name("Auto Quality On");
	datRenderResolutionSlider=datGui.add(parms,'renderResolution').name("Render Quality").min(.01).max(1).step(.01).onChange(function(){
		options_renderResolution=mapResPerc=parms.renderResolution;
		resizeRenderResolution();
	});
	datPauseButton=datGui.add(parms,'pause').name("Pause Playback");
	datStatsButton=datGui.add(parms,'stats').name("Display FPS Stats");
	datGui.domElement.parentElement.style.zIndex=10;
}


function init(boot){
	document.onmousemove = moveMouse;
	document.onmousedown=mouseDown;
	document.onmouseup=mouseUp;
    document.addEventListener(mouseWheelEvt, function(e) {mouseWheel(e);}, false)
	document.addEventListener('touchstart', function(e) {touchStart(e);}, false);
	document.addEventListener('touchmove', function(e) {touchDrag(e);}, false);
	document.addEventListener('touchend', function(e) {touchEnd(e);}, false);
	document.addEventListener('gesturechange', function(e) {pinchTouch(e);}, false);
	//document.addEventListener('pointerdown', function(e) {touchStart(e);}, false);
	//document.addEventListener('pointermove', function(e) {touchDrag(e);}, false);
	//document.addEventListener('pointerup', function(e) {touchEnd(e);}, false);



	bkCanvas=document.getElementById('bkCanvas');
	bkCanvas.width=sW;
	bkCanvas.height=sH;
	markerCanvas=document.getElementById('markerCanvas');
	markerCanvas.width=sW;
	markerCanvas.height=sH;
	if(boot == 1){
		var tmp,len,rage, color,alpha;
		var count=(cW+cH)/50+25;
		for(var x=0;x<count;++x){
			if(x%10==0){
				len=Math.sin(runner*23.24+23+points.length)*4+9;
			}else{
				len=Math.sin(runner*23.24+23+points.length)*4+6;
			}
			if(x%4==0){
				alpha=Math.sin(x*234.353)*.1+.35;
				color=[ Math.sin(len*283.24+23+points.length+len)*10+20, Math.sin(len*233.24+23+points.length+len)*15+35, Math.sin(len*6723.24+23+points.length+len)*30+95];
			}else{
				alpha=Math.min(1,Math.sin(x*234.353)*.3+.95);
				color=[ Math.sin(len*263.24+23+points.length+len)*10+20, Math.sin(len*223.24+23+points.length+len)*20+45, Math.sin(len*123.24+23+points.length+len)*35+150];
			}
			tmp=new Point(x,[Math.random(x*230+3434+len)*4234.234%cW,Math.random(x*20+234+len)*2634.36%cH],[],Math.floor(len),[Math.sin(x*230+3434+len)*10,Math.sin(x*630+134+len)*10],0,color,alpha,1,0);
			points.push(tmp);
		}
		runCanvas("markerCanvas",0,1);
	}
	gradientRunner('bkCanvas',rgbToHex([0,40,50]),rgbToHex([0,10,30]),0);
	
	mapCanvas=document.getElementById(mapCore);
	mapW=sW*mapResPerc;
	mapH=sH*mapResPerc;
	mapCanvas.width=sW;
	mapCanvas.height=sH;
	mapBootEngine();
	mapRender(runner);
	if(!mobile) mapPrepGUI();
	resizeRenderResolution();
	
	mapCanvas.focus();
	mapCanvas.onfocusout=function(){ mapCanvas.focus(); };
	introCardAnim(1);
}


