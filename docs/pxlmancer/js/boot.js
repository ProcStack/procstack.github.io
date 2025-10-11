function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}

var IE = document.all?true:false

//if (!IE) document.captureEvents(Event.MOUSEMOVE)
document.onscroll=function(){window.scrollTo(0, 1);};
document.onmousemove = getMouseXY;
//document.onmouseout=function(e) {colorBlend=0;};//dragCountdown(dragCount,10)};
document.onmouseup=function(){docOnMouseUp();};//mouseDown=0;
document.onclick=docOnMouseDown;//mouseDown=0;

function docOnMouseUp(){
	dragClick=0;
	colorBlend=0;
	storeKeyHold=0;
	setMarker=0;
	if(geoDrawGrabbed==0 && geoDrawGrabbed.length>0){
		geoDrawResetSelected();
	}
	geoDrawGrabbed=0;
	if(dialogueOpen==0){
		if(geoTool>0){
			if(geoTool>=1 && geoToolStopDraw==0){
				geoDrawMouseUp();
			}
			if(geoTool==1 || (geoTool>=2 && geoToolStopDraw==2)){
				geoToolStopDraw=0;
			}
		}
		if(selectTool>0 && selectToolDeselect==1 && mButton==1){
			//deselectMarquee('selectDraw',0);
			putMarqueeSelection();
		}
	}else{
		if(drawSingleClick==1){
			getMouseXY(0);
			while(dragCount<4){
				zoomMouseX=mouseX;
				zoomMouseY=mouseY;
				doTouch("curDraw",curCanvas,"pastDraw","undoDraw",1);
			}
		}
		if(openDialogue=="" && active>=1){
			onDia=0;
			dialogueOpen=0;
		}
		if(setMarker!=0){
			$('#editBackground_method').val(1);
			setMarker=0;
		}
	}
	getMouseXY(0);
}


function docOnMouseDown(e){
	if(active>0){
		dragCount=0;
		getMouseXY(e);
		drawSingleClick=1;
		if(selectTool==1){
			selectToolDeselect=1;
			
		}
	}else{
		//active=1;
	}
}
/*function docOnMouseDown(){
	if(dialogueOpen==0){
		if(geoTool>0){
			if(geoPosUndo.length != geoPos){
				geoPosUndo=geoPos;
			}else{
				for(var x=0; x<geoPosUndo.length;x++){
					if(geoPosUndo[x] != geoPos[x]){
						geoPosUndo=geoPos;
						break;
					}
				}
			}
		}
	}
}*/

//document.onmousedown=function(){mouseDown=1;};
document.addEventListener('touchstart', function(e) {if(active>=0){startTouch(e,0);}}, false);
document.addEventListener('touchmove', function(e) {if(active>=0){doDragTouch(e);}}, false);
document.addEventListener('touchend', function(e) {if(active>=0){endTouch(e);}}, false);
document.addEventListener(mousewheelevt, function(e) {if(active>=0){displaywheel(e);}}, true);

//document.addEventListener('focus', imbyFocus(), false);
//document.addEventListener('blur', imbyBlur(), false);

//document.addEventListener('touchcancel', function(e) {endTouch(e);}, false);
//$(document).on('touchend touchcancel', function(e) {
//    if(active>=0){endTouch(e);}
//});
window.onresize=function(event){resetCanvas();}
function runInitScripts(){ // Run initializing scripts
	// Fixes resolution issues where the screen size adjusts to application status post script loading but pre onLoad

	sW=window.innerWidth;
	sH=window.innerHeight;
	origSW=sW;
	origSH=sH;
	mapResPerc=1;
	mouseX = sW/2;
	mouseY = sH*.25;
	setTimeout(function(){ // Get loader up
		bootLoader();
		bootStep(1,"Init.");
		setTimeout(function(){ // All the setTimeouts here on prevents jquery death. It still happens now and then on slow computers. :(
			//launchFullscreen(window.document.documentElement);

			bootStep(1,"Prepping WebGL..");
			setTimeout(function(){	
				
				mapCanvas=document.getElementById("glDraw");
				
				mapW=Math.max(sW*.6, 500+150*(sW/1000));//window.innerWidth*mapResPerc;
				mapCanvas.width=mapW;//window.innerWidth;
				mapH=140;//window.innerHeight*mapResPerc;
				mapCanvas.height=mapH;//window.innerHeight;
				mapBootEngine();

				bootStep(1,"Building Backgrounds..");
				setTimeout(function(){ // Also, let that loader load
					if(mobile==0){// || slimLoad==0){
						tempBgInit();
					}
					bootStep(1,"Building Backgrounds..");
					setTimeout(function(){ // Step by step
	var pre=new Date().getTime();
						if(mobile==0){// || slimLoad==0){
							setLayerRes(0, [origSW/1.5,origSH/1.5], 1, 1);
							gradientInit(1,1);
							setLayerRes(0, [origSW,origSH], 1, 1);
						}else{
							gradientInit(0,1);
							$('#tempBG').remove();
						}
	var post=new Date().getTime();
	var delta=post-pre;
	machineBenchmark=Math.max(0, delta-500);
	machineBenchmark=1-(machineBenchmark*.0003);
	console.log("Benchmark Time -- "+delta);
	console.log("Machine Base Quality -- "+machineBenchmark);
	//mapResPerc=machineBenchmark;
	//			resizeRenderResolution(1);
	
						saveInit();					
						bootStep(1,"Building Color Sphere..");
						setTimeout(function(){ // It takes a while to load...	
							buildColorSphere();
							bootStep(1,"Building Controls..");
							setTimeout(function(){
								buildControls();
								bootStep(1,"Building Layers..");
								setTimeout(function(){
									buildLayersWindow(); // Needs to be after buildColorSphere();
									bootStep(1,"Building Dialogues..");
									setTimeout(function(){
										buildDialogues();
										if(mobile==0){
											sliderGen(['editLayer_opacity','editBackground_patternQuality','editBackground_shiftColor','editBackground_satch','editBackground_patternBrightness'],['layerSetOpacity()','runDisplayPattern()','runDisplayPattern()','runDisplayPattern()','runDisplayPattern()'],0);
											setBGPatterns();
										}
										prepQualitySettings();
										bootStep(1,"Pariferals..");
										setTimeout(function(){
											initScalers();
											//runFilters(0);
											setInputFocusActions();
											setLayerRes(0, [sW,sH], 1,1);
											bootStep(1,"Welcome!");
											setTimeout(function(){
												var imbixStart=initImbix();
												imbixClick=1;
												active=0;
												
												cutLoader();
												maximizeImbix();
											},20);
										},10);
									},10);
								},10);
							},10);
						},10);
					},10);
				},10);
			},10);
		},10);
	},20);
}

/*
q=81
z=90
s=83
f=70
d=68
c=67
n=78
m=77
h=72
r=82
shift=16
ctrl=17
alt=18
tab=9
1=49
2=50
3=51
4=52
5=53
6=54
7=55
8=56
9=57
0=48
-=173
+=61
`=192
[=219
]=221
<=188
>=190
up=38
down=40
left=37
right=39
del=46
ins=45
home=36
end=35
pgUp=33
pgDown=34
*
For numbers, check focus is not in text field-
* document.activeElement
*/


$(document).on('keypress', function(e){
	//if((openDialogue != "contactMe" || dialogueOpen==0) && typingFocus==0){
	if(dialogueOpen==0 && typingFocus==0){
		keyHit=e.keyCode || e.which;
		if(printKey==1){
			$("#alertFeed1").html(keyHit);
		}
		var nullKeys=[9,13,32,37,38,39,40,81,83,90,102]; // Do nothing keys
		if(nullKeys.indexOf(keyHit) != -1){
			return false;
		}
		if(active == 1){
			var numKeys=[49,50,51,52,53,54,55,56,57,48]; // Number keys
			if(numKeys.indexOf(keyHit) != -1){
				if(storeKeyHold==0){
					storeKeyHold=1;
					keyHoldCheck("storeSwatchColorSphere('colorSphereCanvas',"+keyHit+");");
				}
				return false;
			}
			// ` ~
			if(keyHit===96){
				if(storeKeyHold==0){
					storeKeyHold=1;
					keyHoldCheck("resetColorSphere('colorSphereCanvas',1,0);");
				}
				return false;
			}
			// Ctrl
			if(keyHit==17){
				modKey_ctrl=true;
			}
			// Alt
			if(keyHit==18){
				modKey_alt=true;
			}
			// Shift
			if(keyHit==16){
				modKey_shift=true;
			}
			// Tab
			if(keyHit==9){
				modKey_tab=true;
			}
		}
		// A
		/*if(keyHit===97){
			if(storeKeyHold==0){
				storeKeyHold=1;
				dialogueOpen=1;
				zoomLayers(0,0,1);
			}
			return false;
		}*/
		// Press down C
		/*if(keyHit===99){
			if(storeKeyHit==0){
				storeKeyHit=1;
				grabColorSphereVal=1;
				grabColorSphere(1);
			}
			return false;
		}*/
	}
});
$(document).on('keyup', function(e){
	keyHit=e.keyCode || e.which;
	if(printKey==1){
		$("#alertFeed1").html(keyHit);
	}
	if(dialogueOpen==0 && typingFocus==0){
		var nullKeys=[9,37,38,39,40];
		if(nullKeys.indexOf(keyHit) != -1){
			return false;
		}
		//Space
		if(keyHit===32){
			if(geoTool<=1){
				key_hide=(key_hide+1)%2;
				if(key_hide==0){
					if(dragClick==0){
					$('#lwin_footer').attr('vis',1);
						menuVis(1,1);
					}
				}else{
					$('#lwin_footer').attr('vis',0);
					menuVis(0,1);
				}
			}
			return false;
		}
		//Return
		if(keyHit===13){
			if(geoPos.length>2 && geoTool>=1 && typingFocus==0){
				geoDrawCloseGeo(1);
			}else{
				if(selectTool>0){
				//deselectMarquee('selectDraw',0);
					putMarqueeSelection();
				}
			}
			return false;
		}
		// Q
		if(keyHit===81){
			undoOption(1);
			undoOption(0);
			clearScreen(curCanvas);
			clearScreen('pastDraw');
			updateLayerCanvas(curLayer);
			if(tileUpdate==1){
				updateTiles();
			}
			refreshWindow=[sW,sH,0,0];
			refreshWindowStore=[sW,sH,0,0];
			//var temp=tempWindow('..Layer Cleared..',[-1,-1],'',3,.5,0,0);
			return false;
		}
		// Z
		if(keyHit===90){
			undoOption(0);
			//var temp=tempWindow('..Undo..',[-1,-1],'',3,.5,0,0);
			return false;
		}
		// S
		if(keyHit===83){
			var tmpName=tempWindow('..Saving Images..',[-1,-1],'',30,0,0,1);
			setTimeout(function(){
				snapshot(curCanvas,'pastDraw','gradientBG',1);
				dialogueVisToggle(0,'mobileMenu');
				dialogueOption(1, 'saveDrawing');
				return false;
			},20);
		}
		// F
		if(keyHit===70){
			bumpFilters();
			var temp=tempWindow('..Filter Bumped..',[-1,-1],'',3,.5,0,0);
			return false;
		}
		// \ | Del
		if(keyHit===220 || keyHit===46){
			geoDrawDelPoint();
			return false;
		}
		// ` ~
		if(keyHit===192){
			storeKeyHold=0;
			if(storeKeyHit==0){
				resetColorSphere('colorSphereCanvas',1,1);
			}
			storeKeyHit=0;
			return false;
		}
		// 0-9
		var numKeys=[49,50,51,52,53,54,55,56,57,48];
		if(numKeys.indexOf(keyHit) != -1){
			storeKeyHold=0;
			if(storeKeyHit==0){
				storeSwatchColorSphere('colorSphereCanvas',keyHit);
			}
			storeKeyHit=0;
			return false;
		}
		// Release N
		if(keyHit===78){
			addLayer();
			return false;
		}
		// Release M
		if(keyHit===77){
			layerMaskToggle();
			return false;
		}
		// Release H
		if(keyHit===72){
			layerVisToggle();
			return false;
		}
		// Release D
		if(keyHit===68){
			layerDuplicate(curCanvas);
			return false;
		}
		// Release C
		/*if(keyHit===67){
			grabColorSphereVal=0;
			storeKeyHit=0;
			grabColorSphere(0);
			return false;
		}*/
		// Release R - Reset EVERYTHING!!
		if(keyHit===82){
			reinitializeSettings(1);
			return false;
		}
		
		// Ctrl
		if(keyHit==17){
			modKey_ctrl=false;
		}
		// Alt
		if(keyHit==18){
			modKey_alt=false;
		}
		// Shift
		if(keyHit==16){
			modKey_shift=false;
		}
		// Tab
		if(keyHit==9){
			modKey_tab=false;
		}
		
	}else{
		if(dialogueOpen==1 && openDialogue!='contactMe' && active==1){
			// Release Enter - Confirm window dialog
			if(keyHit===13){
				var acceptButton=$("#"+openDialogue).find('.acceptButtonDia');
				var hit=0;
				if(acceptButton.length==0){
					acceptButton=$("#"+openDialogue).find('.buttonDia');
					if(acceptButton.length>0){
						for(var x=0; x<acceptButton.length;++x){
							if($(acceptButton[x]).attr('action')=='accept'){
								acceptButton=acceptButton[x];
								hit=1;
								break;
							}
						}
					}else{
						return false;
					}
				}else{
					hit=1;
					acceptButton=acceptButton[0];
				}
				if(hit==1){
					eval($(acceptButton).attr("onclick"));
				}
				return false;
			}
			// Release A
			/*if(keyHit===65){
				storeKeyHold=0; // Stop Zoom
				dialogueOpen=0;
				countdown("$('#documentLayers').attr('doubleTouch',0);",10);
				return false;
			}*/
			// Release R - Reset EVERYTHING!!
			if(keyHit===82 && typingFocus==0){
				reinitializeSettings();
				return false;
			}
			if(typingFocus==0){
				var nullKeys=[32,9,37,38,39,40];
				//alert(keyHit);
				if(nullKeys.indexOf(keyHit) != -1){
					return false;
				}
			}
		}
	}
});
function checkMouse(e,dClick){
	var button=e.which;
	mButton=button;
	if(printKey==1){
		$("#alertFeed2").html(button);
	}
	if(button == 1 && !modKey_ctrl){
		dragClick=dClick;
		
		//if(geoTool==1 && geoToolStopDraw==2){
		//	geoToolStopDraw=0;
		//}
		/*if(geoTool==1 && dragging==0 && geoToolStopDraw==0){
			doGeoDraw('curDraw',1);
			geoToolStopDraw=1;
		}*/
	}
	if(button == 2 || (button == 1 && modKey_ctrl) ){
		if(geoTool>=1){
			geoToolStopDraw=3;
		}
		if(geoPos.length<3){
			clearScreen("curDraw");
		}
		if(dClick==1){
			if(storeKeyHold==0){
				storeKeyHold=1;
				dialogueOpen=1;
				menuVis(0,1);
				moveLayers(0,1);
			}
		}
		if(dClick==0){
			storeKeyHold=0;
			dialogueOpen=0;
			if(key_hide==0){
				menuVis(1,1);
			}
			countdown("$('#documentLayers').attr('doubleMove',0);",12);
		}
	}
	if(button == 3){
		if(geoTool>=1){
			geoToolStopDraw=3;
		}
		if(geoPos.length<3){
			clearScreen("curDraw");
		}
		if(dClick==1){
			if(storeKeyHold==0){
				storeKeyHold=1;
				dialogueOpen=1;
				menuVis(0,1);
				zoomLayers(0,0,1);
			}
		}
		if(dClick==0){
			storeKeyHold=0;
			dialogueOpen=0;
			if(key_hide==0){
				menuVis(1,1);
			}
			countdown("$('#documentLayers').attr('doubleTouch',0);",12);
		}
	}
	return false;
}

function setInputFocusActions(curObj=null){ // To stop hotkeys while entering text
	var setTextArea=true;
	if(curObj==null){
		curObj="input";
	}else{
		curObj="#"+curObj;
		setTextArea=false;
	}
	
	$(curObj).focusin(function(){
		typingFocus=1;
	});
	$(curObj).focus(function(){ // Some Chrome doesn't work with focusin, even though they say only firefox has an issue
		typingFocus=1;
	});
	$(curObj).focusout(function(){
		typingFocus=0;
	});
	$(curObj).blur(function(){ // Same with focusout
		typingFocus=0;
	});
	if(setTextArea){
		$("textarea").focusin(function(){
			typingFocus=1;
		});
		$("textarea").focus(function(){
			typingFocus=1;
		});
		$("textarea").focusout(function(){
			typingFocus=0;
		});
		$("textarea").blur(function(){
			typingFocus=0;
		});
	}
}

function updateThemeColor(themeColor){
	$('meta[name=theme-color]').remove();
	$('meta[name=msapplication-navbutton-color]').remove();
	$('meta[name=apple-mobile-web-app-status-bar-style]').remove();
	$('head').append("<meta name='theme-color' content='"+themeColor+"'>");
	$('head').append("<meta name='msapplication-navbutton-color' content='"+themeColor+"'>");
	$('head').append("<meta name='apple-mobile-web-app-status-bar-style' content='"+themeColor+"'>");
}
function resetCanvas(){
	// I need to rework this
	/* setTimeout(function(){
		//sW=window.innerWidth;// * ratio;
		//sH=window.innerHeight;// * ratio;
		//origSW=sW;
		//origSH=sH;
		//clearScreen('curDraw');
		//clearScreen(curCanvas);
		//clearScreen('pastDraw');
		//clearScreen('undoDraw');
		setTimeout(function(){
			//gradientInit(0,1);
			//saveInit();
			placeColorSphere();
			preventDefault;
		},20);
	},20); */
	
//	if(key_hide==0){
//		placeColorSphere();
//	}
	origSW=window.innerWidth;
	origSH=window.innerHeight;
	resizeLayerScrollWindow();
	if(mapPause==1){
		zoomLayers(0,0,1);
	}
	preventDefault;
}
function reinitializeSettings(prompt){
	var howDisp=0;
	dragClick=0;
	colorBlend=0;
	storeKeyHold=0;
	colorSphereRun=0;
	currentOnly=0;
	
	mirror=3;
	toCenter=1;
	dragUpdate = 1;
	maxMag = 0;
	lastPreMag =1;
	lastMag =1;
	dynMag=0;
	spray=0;
	clearDrawing=0;
	randClear=10;
	filter=0;
	autoFilter=0;
	skipMenuSlide='';
	dialogueOpen=0;
	onDia=0;
	dialogueOption(0, openDialogue);
	tempWindowId+=1;
	tearOffId+=1;
	layerUniqueCount+=1;
	try{
		$('#howToBuild').html('');
		$('#howToBuild').css({'left':-100,'zIndex':-500});
	}catch(err){}
	if(howToActive==1){
		howDisp=1;
	}
	howToActive=0;
	howToMouseAnim=[];
	//curScale=1;
	updateMouseDraw(curScale,[0,0,0,0]);
	updateScalers(curScale,"documentLayers","scaler");
	//deselectMarquee('selectDraw',1);
	putMarqueeSelection();
	selectTool=0;
	selectToolVis=0;
	//$('#documentLayers').attr('doubleMove',1);
	//moveLayers(0,1);
	//$("#documentLayers").attr('doubleTouch',1)
	//zoomLayers(0,0,1);
	draggingLayer=0;
	undoToCanvas=curCanvas;
	undoToLayer=curLayer;
	tileUpdate=0;
	tilesOption();
	$('#lwin_footer').attr('vis',1);
	eval($("#barMenu_sweep").attr('onclick'));
	eval($("#barMenu_sweep").attr('onmouseup'));

	$('#colorMethod_comp').val('source-over');
	eval($("#colorMethod_comp").attr('onchange'));
	eval($("#colorMethod_comp").attr('onclick'));
	
	$('#be_effectPercent_val').val(1);
	setSlideControl('be_effectPercent','');
	$('#beDia_effectPercent_val').val(1);
	setSlideControl('beDia_effectPercent','');
	$('#sl_setWidth_val').val(2);
	setSlideControl('sl_setWidth','');
	$('#sl_brushBlur_val').val(0);
	setSlideControl('sl_brushBlur','');
	$('#sl_extend_val').val(.04);
	setSlideControl('sl_extend','');
	$('#slDia_setWidth_val').val(2);
	setSlideControl('slDia_setWidth','');
	$('#slDia_brushBlur_val').val(0);
	setSlideControl('slDia_brushBlur','');
	$('#slDia_extend_val').val(.04);
	setSlideControl('slDia_extend','');
	
	
	$("#cs_random_val").val( 0 );
	setSlideControl('cs_random','');
	$('#cs_red_val').val('-3');

	eval($("#barMenu_setWidth").attr('onclick'));
	eval($("#barMenu_setWidth").attr('onmouseup'));
	eval($("#barMenu_throwDefault").attr('onclick'));
	eval($("#barMenu_throwDefault").attr('onmouseup'));
	eval($("#barMenu_dontTrail").attr('onclick'));
	eval($("#barMenu_dontTrail").attr('onmouseup'));
	eval($("#barMenu_noFilter").attr('onclick'));
	eval($("#barMenu_noFilter").attr('onmouseup'));
	$('#sl_filterPercent_val').val(1);
	setSlideControl('sl_filterPercent','');

	eval($("#barMenu_dontClear").attr('onclick'));
	eval($("#barMenu_dontClear").attr('onmouseup'));
	
	menuVis(1,1);
	key_hide=0;
	visibilityColorSphere(1,1);
	if(prompt==1){
		if(howDisp==1){
			tempWindow("..Exited How To..",[-1,-1],'',10,1,0,0);
		}else{
			tempWindow("..Settings Reset..",[-1,-1],'',10,1,0,0);
		}
	}
}

function activatePrompt(mode){
	if(mode==-1){
		var promptName;
		var drawSomething="Go <b>Pen</b> to <b>Paper</b><br><div style='padding-top:4px;width:320px;height:140px;overflow:hidden;' id='welcomePrompt_drawSomething'></div>";
		var messAround="Just <b>mess around</b><br><div style='padding-top:4px;width:320px;height:140px;overflow:hidden;' id='welcomePrompt_messAround'></div>";
		promptName=promptWindow("What'chya looking to do?<span style='font-size:50%;'><br>&nbsp;</span>",[drawSomething,messAround, '<b>Huh?</b> I dunno, <b>show me around</b>.'],['0','-1','2'],['activatePrompt(0)','activatePrompt(1)','activatePrompt(2)'],1,0,1,2,0);
		runNewDocumentPrompt(promptName,-1,[0,70],0,0);
	}else if(mode==0){
		setBackgroundMode(1);
	}else if(mode==2){
		setBackgroundMode(0);
		initHelp();
	}else{
		setBackgroundMode(0);
	}
}
function runNewDocumentPrompt(checkPrompt,run,rand,drawPosPrompt,messPosPrompt){
	if($("#"+checkPrompt).length){
		run+=1;
		rand[0]=rand[0]+1;
		if(run==0){
			var html="<canvas id='welcomePrompt_drawSomething_canvas' style='z-index:1;' width='320px' height='140px'></canvas><br>";
			html+="<canvas id='welcomePrompt_drawSomething_draw' style='position:relative;top:-140px;z-index:2;' width='320px' height='140px'></canvas>";
			$("#welcomePrompt_drawSomething").html(html);
			html="<canvas id='welcomePrompt_messAround_canvas' style='z-index:1;' width='320px' height='140px'></canvas><br>";
			html+="<canvas id='welcomePrompt_messAround_draw' style='position:relative;top:-140px;z-index:2;' width='320px' height='140px'></canvas>";
			$("#welcomePrompt_messAround").html(html);
			
			gradientRunner("welcomePrompt_drawSomething_canvas",1,gradFromHex,gradToHex,((mobile+1)%2),1,1);
			gradientRunner("welcomePrompt_messAround_canvas",0,gradFromHex,gradToHex,((mobile+1)%2),1,1);
			var date=new Date();
			var mil=date.getMilliseconds();
			run=mil;
			var dPos=[(160+Math.sin(run/30+353)*110),(70+Math.cos(run/30+423)*50)];
			drawPosPrompt=[dPos[0],dPos[1], dPos[0],dPos[1], dPos[0],dPos[1]];
			trailPos=[dPos[0],dPos[1], dPos[0],dPos[1], dPos[0],dPos[1]];
			messPosPrompt=[160,70, 160,70, 160,70];
			$("#sl"+diaVal+"_setWidth_val").val('2');
			setSlideControl("sl_setWidth",'');
			setSlideControl("slDia_setWidth",'');
		}else{
			for(var x=4; x>1;x-=2){
				drawPosPrompt[x]=drawPosPrompt[x-2];
				drawPosPrompt[x+1]=drawPosPrompt[x-1];
				messPosPrompt[x]=messPosPrompt[x-2];
				messPosPrompt[x+1]=messPosPrompt[x-1];
			}
			var math=(160+Math.cos(run/30+353+Math.sin(run/90+3455) + drawPosPrompt[0]/100)*60+Math.sin(run/60+Math.sin(run/20+run/60+542)+362+Math.cos(run/60+533))*65);
			math=(drawPosPrompt[0]*3+math)/4;
			drawPosPrompt[0]=(math);
			math=(70+Math.sin(run/40+6353+Math.cos(run/80+66) + drawPosPrompt[1]/80)*30+Math.cos(run/90+Math.cos(run/60+run/60+426)+962-Math.cos(run/80+243))*30);
			math=(drawPosPrompt[1]*3+math)/4;
			drawPosPrompt[1]=(math);
			var mather=Math.max(0, Math.sin(run/40) );
			if(mather>0){
				math=((Math.sin(run/70 + drawPosPrompt[0]/100) + Math.sin(run/90+ 344 + drawPosPrompt[0]/200 + ((run/140)%5) )/2)*130+160);
				drawPosPrompt[0]=(drawPosPrompt[0] + math)/2;
				math=((Math.cos(run/90 + 34 + drawPosPrompt[1]/80) + Math.sin(run/90 + 3434 + drawPosPrompt[1]/130 + ((run/130 + 34)%5) )/2)*50+70);
				drawPosPrompt[1]=(drawPosPrompt[1] + math)/2;
				
			}
			var mult=Math.min(1,Math.abs(Math.sin(run/70+rand[1]))*1.3)*.5+.5;
			var math=(160-40*mult)+Math.sin(run/23+rand[1]+(run/30%5)+Math.sin(math/100+rand[1]+(run/60%5))+messPosPrompt[0]/100+5453)*(80-65*(1-Math.abs(mult)));
			math=(messPosPrompt[0]*3+math)/4;
			messPosPrompt[0]=(math);
			math=(70-25*mult)+Math.cos(run/43+rand[1]+(run/40%5)+Math.sin(math/100+rand[1]+(run/60%5))+messPosPrompt[1]/100+4343)*(30-15*(1-Math.abs(mult)));
			math=(messPosPrompt[1]*3+math)/4;
			messPosPrompt[1]=(math);
			dragPos=drawPosPrompt;
			zoomMouseX=dragPos[0];
			zoomMouseY=dragPos[1];
			mirror=0;
			brushDraw=1;
			$('#cs_red_val').val('50');
			$('#cs_green_val').val('48');
			$('#cs_blue_val').val('45');
			if($("#welcomePrompt_drawSomething_draw").length){
				var mather=Math.max(0, Math.min(1, Math.sin(run/45 + 324)*.55+.5) );
				if(mather>0){
					doTouch("welcomePrompt_drawSomething_draw",-1,-1,-1,0);
				}else{
					trailPos=[drawPosPrompt[0],drawPosPrompt[1], drawPosPrompt[2],drawPosPrompt[3], drawPosPrompt[4],drawPosPrompt[5]];
				}
			}
			dragPos=messPosPrompt;
			zoomMouseX=dragPos[0];
			zoomMouseY=dragPos[1];
			mirror=3;
			brushDraw=0;
			$('#cs_red_val').val('-3');
			if($("#welcomePrompt_messAround_draw").length){
				if(rand[0]%rand[1]==0){
					clearScreen('welcomePrompt_messAround_draw');
					rand[0]=0;
					rand[1]=Math.floor(Math.random(rand[1])*70+70);
				}
				doTouch("welcomePrompt_messAround_draw",-1,-1,-1,0);
			}
		}
		setTimeout(function(){
			runNewDocumentPrompt(checkPrompt,run,rand,drawPosPrompt,messPosPrompt);
		},20);
	}else{
		menuVis(1,1);
	}
}



function imbyScreenDraw(run,rand,messPosPrompt){
	if(active==0){
		run[0]+=1;
		run[1]+=1;
		rand[0]=rand[0]+1;
		if(run[0]==0 && run[1]==0){
			var ms=(new Date().getMilliseconds());
			ms+="";
			run[0]=parseInt(ms.substr( ms.length-5 ));
			run[1]=run[0]*3.76;
			run[2]=((run[0]*1.47+run[1])%100)*.0001+.001;
			run[3]=1;
			run[4]=-1;
			var dPos=[(160+Math.sin(run[0]/30+353)*110),(70+Math.cos(run[1]/30+423)*50)];
			drawPosPrompt=[dPos[0],dPos[1], dPos[0],dPos[1], dPos[0],dPos[1]];
			trailPos=[dPos[0],dPos[1], dPos[0],dPos[1], dPos[0],dPos[1]];
			messPosPrompt=[sW*.5,sH*.8, sW*.5,sH*.8, sW*.5,sH*.8,];
			$("#sl"+diaVal+"_setWidth_val").val('2');
			setSlideControl("sl_setWidth",'');
			setSlideControl("slDia_setWidth",'');
			mirror=3;
			brushDraw=2;
			trail=1;
			toCenter=1;
			$('#cs_red_val').val('-3');
			dragCount=0;
			dynMag=1;
		}else{
			trailPos=[...messPosPrompt];
			for(var x=4; x>1;x-=2){
				messPosPrompt[x]=messPosPrompt[x-2];
				messPosPrompt[x+1]=messPosPrompt[x-1];
				//messPosPrompt[x]=(messPosPrompt[x]*2+messPosPrompt[x-2])*.3333;
				//messPosPrompt[x+1]=(messPosPrompt[x+1]*2+messPosPrompt[x-1])*.3333;
			}
			
			let mMult=mirror==0?1.5:1.1;
			var xMult=mirror==2 ? -1.6 : ( run[3]>.5 ? Math.sin(run[0]*.01+run[1]*.033) : Math.cos(run[0]*.1-run[1]*.013) ) * mMult;
			var yMult=mirror==1 ? .2 : Math.sin(run[0]*.01+run[1]*.033) * mMult;
			//yMult*=run[3];
			
			var mult=Math.min(1,Math.abs(Math.sin(run[0]/40+rand[1]+run[1]*run[2]))*1.4)*.5+.5;
			var math=(sW*.5-sW*.2*mult*xMult)+Math.sin(run[0]*.0371+rand[1]+(run[1]/30%5)+Math.sin(run[0]/20+rand[1]*.27+((run[1]*.13)%5))+messPosPrompt[0]/60+5453)*(sW*.1-sW*.5*(1-Math.abs(mult)));
			math=(messPosPrompt[0]*3+math)/4;
			messPosPrompt[0]=messPosPrompt[0]*.01+(math);
			math=(sH*.5-sH*.2*mult*yMult)+Math.cos(run[1]/13+rand[1]+(run[0]/30%5)+Math.cos(run[1]/30+rand[1]-4564+(run[0]/50%5))+messPosPrompt[1]/30+443)*(sH*.1-sH*.4*(1-Math.abs(mult)));
			math=(messPosPrompt[1]*3+math)/4;
			messPosPrompt[1]=messPosPrompt[1]*.01+(math);
			/////
			dragPos=messPosPrompt;
			zoomMouseX=dragPos[0];
			zoomMouseY=dragPos[1];
			
			refreshWindow[0]=Math.min(refreshWindow[0],zoomMouseX);
			refreshWindow[1]=Math.min(refreshWindow[1],zoomMouseY);
			refreshWindow[2]=Math.max(refreshWindow[2],zoomMouseX);
			refreshWindow[3]=Math.max(refreshWindow[3],zoomMouseY);
			
			dragCount++;
			if($("#lwin_l1_draw").length){
				if(rand[0]%rand[1]==0){
					clearScreen('lwin_l1_draw');
					//dragCount=0;
					
					mirror=(new Date().getMilliseconds());
					mirror+="";
					run[0]=parseInt(mirror.substr( mirror.length-5 ));
					run[0]=parseInt(run[0]*Math.sin(run[0]*.01));
					run[1]=run[0]+run[0]*1.73;
					//run[2]=Math.sin((run[0]*1.47+run[1])%100)*.05+.1;
					run[3]=Math.sin(run[1])*.5+.5;
					run[4]=parseInt(run[1]%8)-7; // Dashed lines
					run[4]=run[4]<-1?-1:0;
					run[0]+=dragCount;
					toCenter=parseInt(run[0]%10)-4;
					toCenter=toCenter<1?1:toCenter;
					
					rand[0]=0;
					rand[1]=Math.floor(Math.random(rand[1]+run[0])*75+80);
					$("#cs_random_val").val( run[0]%25 );
					
					let randColor=-(run[0]%3 +1) +"";
					mirror=parseInt( run[0] )%6;
					if(mirror==2 || mirror==0){
						mirror=mirror==2 ? 4 : 3;
						run[3]=-1;
					}
					if(mirror==5){
						mirror=3;
						rand[1]-=20;
					}
					$('#cs_red_val').val(  randColor );
					//filter=3;
					spray=Math.max(0, (run[0]%10)-6);
					//messPosPrompt=[...messPosPrompt.slice(0,2)];
					//brushDraw=(run[0]%4);
					
					
					messPosPrompt[2]=messPosPrompt[0];
					messPosPrompt[3]=messPosPrompt[1];
					messPosPrompt[4]=messPosPrompt[0];
					messPosPrompt[5]=messPosPrompt[1];
					
					refreshWindow[0]=sW;
					refreshWindow[1]=sH;
					refreshWindow[2]=0;
					refreshWindow[3]=0;
				}
				let perc=rand[0]/rand[1];
				if( perc < .96 && perc > .03){
					doTouch("lwin_l1_draw",curCanvas,run[4],-1,0);
				}
			}
		}
		setTimeout(function(){
			imbyScreenDraw(run,rand,messPosPrompt);
		},20);
	}
}


function prepQualitySettings(loop=0){

	// sl_qualityPercent
	if(mobile==0){
		if(verbose){
				console.log("Quality Percentage set to - "+machineBenchmark);
		}
		document.getElementById('sl_qualityPercent_val').value=machineBenchmark;
	}
	//document.getElementById('sl_qualityPercent_val').parentNode.submit();
}


