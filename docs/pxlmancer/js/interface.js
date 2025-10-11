function setBackgroundMode(mode){
	if(mode==0){
		var canvas=document.getElementById('tempBG');
		var pushCan=document.getElementById('gradientBG');
		var pushDraw=pushCan.getContext("2d");
		pushDraw.clearRect(0,0,sW,sH);
		try{ pushDraw.drawImage(canvas,0,0,sW,sH); }catch(err){} // hmmm......
		updateLayerCanvas('lwin_bgLayer');
		$("#sl"+diaVal+"_setWidth_val").val('7');
		setSlideControl("sl_setWidth",'');
		setSlideControl("slDia_setWidth",'');
		//headerHighlight(1,'mirrorOption');
		eval($("#barMenu_xyMirror").attr('onclick'));
		eval($("#barMenu_xyMirror").attr('onmouseup'));
		$('#cs_red_val').val('-3');
		$('#cs_green_val').val('-3');
		$('#cs_blue_val').val('-3');
		setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);
		$("#tempBG").remove();
	}else{
		var runner=$("#tempBG").css('opacity');
		if(runner==1){
			eval($("#barMenu_noMirror").attr('onclick'));
			eval($("#barMenu_noMirror").attr('onmouseup'));
			eval($("#barMenu_setWidth").attr('onclick'));
			eval($("#barMenu_setWidth").attr('onmouseup'));
			eval($("#barMenu_sweep").attr('onclick'));
			eval($("#barMenu_sweep").attr('onmouseup'));
			$('#cs_red_val').val('50');
			$('#cs_green_val').val('48');
			$('#cs_blue_val').val('45');
			setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);
			$('#sl_setWidth_val').val('10');
			setSlideControl('sl_setWidth','');
		}
		runner-=.1;
		$("#tempBG").css({'opacity':runner,'filter':'alpha(opacity='+(runner*100)+')'});
		if(runner>0){
			setTimeout(function(){
				setBackgroundMode(mode);
			},30);
		}else{
			$("#tempBG").remove();
		}
	}
}

function setActive(){
	active=1;
	if(dispStats==1){
		$("#dragCount").html(dragCount);
	}
	minimizeImbix();
	$("#imbixBot").remove();
	//$("#activatedImbix").remove();
	if(touchCheck==0 && mobile==0){
		document.getElementById("drawOptions").style.visibility="visible";
	}else{
		toggleSlideMenu(1);
	}
	
	var canvas=document.getElementById("undoDraw");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	canvas=document.getElementById("pastDraw");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	canvas=document.getElementById(curCanvas);
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	canvas=document.getElementById("curDraw");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	canvas=document.getElementById("tempBuildCanvas");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	canvas=document.getElementById("selectDraw");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	canvas=document.getElementById("gridDraw");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	$("#geoDrawGuides").css({"height":sH,"width":sW});
	$("#eiDia_imgOpen").on('change', function(e){importImage('eiDia_imgOpen','editBackground_tempDisp',0,'stretch');});
	$("#elDia_imgOpen").on('change', function(e){importImage('elDia_imgOpen','editLayer_tempDisp',0,'stretch');});
	document.getElementById('mouseDraw').onmousedown = function(e) {checkMouse(e,1);};
	document.getElementById('mouseDraw').onmouseup = function(e) {if(onDia==0){checkMouse(e,0);}else{onDia=0;storeKeyHold=0;}};
	document.getElementById('documentBack').onmousedown = function(e) {if(onDia==0){checkMouse(e,1);}};
	document.getElementById('documentBack').onmouseup = function(e) {if(onDia==0){checkMouse(e,0);}else{onDia=0;storeKeyHold=0;}};
	//document.getElementById('geoDrawGuides').onmousedown = function(e) {if(geoTool<2){checkMouse(e,1);}else{storeKeyHold=0;}};
	//document.getElementById('geoDrawGuides').onmouseup = function(e) {if(geoTool<2){if(onDia==0){checkMouse(e,0);}else{onDia=0;storeKeyHold=0;}}else{storeKeyHold=0;}};
	document.getElementById('geoDrawGuides').onmousedown = function(e) {checkMouse(e,1);};
	document.getElementById('geoDrawGuides').onmouseup = function(e) {if(onDia==0){checkMouse(e,0);}else{onDia=0;storeKeyHold=0;}};
	
	selectTool=0;
	selectToolDeselect=0;
	
	if(mobile==0){
		$("#layersWindow").css({'visibility':'visible','zIndex':5000});
		$("#colorSphere").css({'visibility':'visible','zIndex':10040});
	
		if(genMimic==1){
			howTo_genCursor(0);
			var size=$('#howToBuild').width();
			$('#howToBuild').css({'pointer-events':'none','left':(mouseX-size/2)+'px','top':(mouseY-size/2)+'px', 'zIndex':90005,'opacity':1,'filter':'alpha(opacity=100)'});
			$('#curDraw').css('cursor','none');
			$('#mouseDraw').css('cursor','none');
		}
		
		
		//What are you here to do?
		activatePrompt(-1);
	}else{
		toggleSlideMenu(1);
		//dialogueOption(1, 'mobileMenu');
	}
}
function getMouseXY(e) {
	//if(dispStats==1){
	//	$("#alertFeed1").html(compMethod);
	//	$("#alertFeed2").html(brushStyle);
	//}
	if(mapPause==1){
		stepClock();
	}
	if(howToActive==0){
	//if(touchCheck==0){
		if(e!=0){
			if (IE) {
				mouseX = e.clientX + document.body.scrollLeft
				mouseY = e.clientY + document.body.scrollTop
			} else {
				mouseX = e.pageX
				mouseY = e.pageY
			}  
			preventDefault;
			zoomMouseX=mouseX;
			zoomMouseY=mouseY;
		}
		/*if(active==0){
			if(dragClick==1 && dragging==0){
				active=1;
			}
			return;
		}*/
		if(mobile==0){
			if(skipMenuSlide==''){
				focusBlurMarquee('marqSelect',1);
			}else{
				focusBlurMarquee('marqSelect',0);
			}
		}
		// Mimic Cursor position update-
		if(active >0 && genMimic==1){
			var size=$('#howToBuild').width();
			if(geoTool!=1){
				$('#howToBuild').css({'left':(mouseX-size/2)+'px','top':(mouseY-size/2)+'px'});
			}else{
				$('#howToBuild').css({'left':'-100px','top':'-100px'});
			}
			$('#curDraw').css('cursor','none');
			$('#mouseDraw').css('cursor','none');
		}
		
		// catch possible negative values in NS4
		if (mouseX < 0){mouseX = 0}
		if (mouseY < 0){mouseY = 0} 
		if(layerBlink==0){
			if(dragClick == 1){// || (dragging==1)){
				if(sampleColor==0){
					if($("#"+curLayer).attr('vis') == '0'){
						var layerText=$("#"+curLayer).find('.layerName').text();
						var tmpName=tempWindow("Layer '"+layerText+"' is hidden, press 'H' to unhide.",[-1,-1],'layerBlink=0;dragClick=0;colorBlend=0;storeKeyHold=0;if(dialogueOpen==0){onDia=0;}',10,0,0,0);
						blinkLayer(0);
					}else{
						if(dragging==0){
							dragCount=0;
							drawSingleClick=0;
							e.preventDefault();
							dragPos=[mouseX,mouseY, mouseX,mouseY, mouseX,mouseY];
							trailPos=[mouseX,mouseY, mouseX,mouseY, mouseX,mouseY];
							//sW=window.innerWidth;
							//sH=window.innerHeight;
							if(active==0){
								setActive();
								return;
							}
							if(!$("#tempWindow_1").length && tempWindowId>0){
								setBackgroundMode(1);
							}
							
							if(selectToolVis==1){
								clearScreen("selectDisplayCanvas");
							}
							
							dragging=1;
							if(dispStats==1){
								$("#dragClick").html(1);
							}

							if((undoToCanvas!=curCanvas || undoToLayer!=curLayer) && geoTool==0){
								undoOption(1);
							}
							
							skipMenuSlide='';
							
							if(geoTool==0){
								if(selectTool==0){
									doTouch("curDraw",curCanvas,"pastDraw","undoDraw",1);
								}else{
									selectMarquee("selectDraw",curCanvas,1);
								}
							}else if(geoTool==1){
								if(geoToolStopDraw==0 && skipMenuSlide=='' && slDown==0){
										doGeoDraw("curDraw",0);
								}else if(geoToolStopDraw==3){
									geoToolStopDraw=0;
								}
							}
							menuVis(0,0);
							if($("#lwin_footer").length>0){
								layerWindowVisibility(0,'lwin_footer','layersWindow',-($("#lwin_footer").position().top),0);
							}
							$('#drawOptions').css({zIndex:900});
							$("#slideOptions").css({'z-index':'900'});
							visibilityColorSphere(0,0);
						}else{
							if(geoTool==0 && selectTool==0){
								doTouch("curDraw",curCanvas,"pastDraw","undoDraw",1);
							}else if(geoTool==0 && selectTool>=1){
								selectMarquee("selectDraw",curCanvas,0);
							}else if(geoTool==1){
								if(geoToolStopDraw==0 && skipMenuSlide=='' && slDown==0){
									doGeoDraw("curDraw",0);
								}
							}
						}
					}
				}else{
					if(sampleColor==1){
						sampleCanvasStack("curColor_colorSphereCanvas");
						sampleBrush(0,1);
					}
				}
			}else{
				if(active==0){ return; }
				
				if(!$("#tempWindow_1").length && tempWindowId>0){
					setBackgroundMode(1);
				}
				$('#drawOptions').css({zIndex:1010});
				$("#slideOptions").css({'z-index':'1010'});

				if(dragging==1 && dispStats==1){
					$("#dragClick").html(0);
				}
				if(dialogueOpen==0){
					
					if(selectTool==1){
						selectTool=2;
						genMarqueeHandles(curCanvas);
					}
					
					//Move curDraw canvas back to curCanvas when no brush tool is selected
					if(dragging==1 && geoTool==0){
						if(brushStyle==0 && brushDraw!=2){
							undoOption(1);
							movePast("curDraw",curCanvas,parseFloat($("#be"+diaVal+"_effectPercent_val").val()),compMethod,1);
						}
						clearScreen("curDraw");
						updateLayerCanvas(curLayer);
						
					}
					if(geoToolStopDraw==0 && geoTool<2){
						if(geoTool==1 && geoPos.length>0){
							doGeoDraw("curDraw",0);
						}else if(geoTool==1 && geoPos.length==0){
							doGeoDraw("curDraw",2);
						}
					}
					
					if(sampleColor==1){
						sampleCanvasStack("curColor_colorSphereCanvas");
					}
					if(dragging==1 && tileUpdate==1){
						updateTiles();
					}
					if(dragging==1 && selectToolVis==1){
						pullMarqueeSelection();
					}
					dragging=0;
					lastMag=1;
					if(key_hide==0 && geoPos.length==0){
						if($("#lwin_footer").length>0){
							layerWindowVisibility(1,'lwin_footer','layersWindow',-($("#lwin_footer").position().top),0);
						}
						visibilityColorSphere(1,0);
						menuVis(1,0);
					}
				}
			}
			return true
		}
	}else{
		if (IE) {
			howToMouseX = e.clientX + document.body.scrollLeft
			howToMouseY = e.clientY + document.body.scrollTop
		} else {
			howToMouseX = e.pageX
			howToMouseY = e.pageY
		}  
		// catch possible negative values in NS4
		if (howToMouseX < 0){howToMouseX = 0}
		if (howToMouseY < 0){howToMouseX = 0} 
	}
}

function mouseToCanvasSpace(){
// Move mouse into canvas space
	var zoomMouseX,zoomMouseY;
	try{
		var touch = e.touches[0];
		zoomMouseX = touch.pageX;
		zoomMouseY = touch.pageY;
	}catch(err){
		zoomMouseX=mouseX;
		zoomMouseY=mouseY;
	}
	//Probably a better way to do this...
	//It's late, I'll look into this another day.
	var curPercX=zoomMouseX/sW;
	var curPercY=zoomMouseY/sH;
	var usX=sW*(curScale);
	var usY=sH*(curScale);
	var sPosX=(curPercX*(sW*curScale)-$('#documentLayers').position().left*((curScale)))/(curScale);
	var sPosY=(curPercY*(sH*curScale)-$('#documentLayers').position().top*((curScale)))/(curScale);
	zoomMouseX=((sPosX/usX)*sW);
	zoomMouseY=((sPosY/usY)*sH);
	return [zoomMouseX,zoomMouseY];
}

function menuVis(vis,csSetVis){
	if(vis==0){	
		if(setMenu==1){
			setMenu=0;
			var mode;
			for(x=0;x<divs.length;x++){
				div='#'+divs[x];
				parentClass=$(div).parent();
				mode=parseInt($(div).attr('mode'));
				height=$(parentClass).height();
				if(mode==0){
					$(parentClass).css({top:height-9,zIndex:200});
				}else{
					$(parentClass).css({top:height-20,zIndex:200});
				}
			}
			if(csSetVis==1){
				visibilityColorSphere(0,csSetVis);
				resizeLayerScrollWindow();
				$("#layersWindow").css({'top':-($("#lwin_footer").position().top)});
			}
		}
	}else{	
		//if(mouseY>sH-200){//Gotta get this working to help speed up interface
			setMenu=1;
			var xto,yto,height,width,perc,ySet,parentClass,topDiv,setHeight;
			for(x=0;x<divs.length;x++){
				try{
					if(divs[x]!=skipMenuSlide){
						div='#'+divs[x];
						parentClass=$(div).parent();
						topDiv=$(parentClass).parent();
						width=$(parentClass).width();
						xto=Math.abs($(div).offset().left+width/2-mouseX);
						if(mouseY< $(div).offset().top+60){
							yto=Math.abs($(div).offset().top-mouseY+60);
							perc=(Math.sqrt(xto*xto+yto*yto)+15)/150;
						}else{
							perc=(xto+15)/150;
						}
						perc=Math.min(1,Math.max(0,perc));
						height=$(parentClass).height();
						ySet=$(parentClass).attr('y')-height*perc;
						ySet=(height-20)*perc;
						
						$(parentClass).css({top:ySet,zIndex:20000});
						//$(topDiv).css({height:ySet});
					}else{
						div='#'+divs[x];
						parentClass=$(div).parent();
						$(parentClass).css({top:0,zIndex:20000});
					}
				}catch(err){}
			}
		//}
		if(csSetVis==1){
			visibilityColorSphere(1,csSetVis);
			$("#layersWindow").css({'top':0});
			resizeLayerScrollWindow();
		}
	}
}
function toggleSlideMenu(val){
	if(val==1){
		touchCheck=(touchCheck+1)%2;
	}
	if(touchCheck==0){
		$("#slideOptions").css({'visibility':'hidden','z-index':'-5'});
		$("#drawOptions").css({'visibility':'show','z-index':'1010'});
		diaVal="";
	}else{
		$("#slideOptions").css({'visibility':'show','z-index':'1010'});
		$("#drawOptions").css({'visibility':'hidden','z-index':'-5'});
		diaVal="Dia";
	}
}
function setToolMode(val,layer){
	if(val == 1){
		$("#curDraw").css({'opacity':.5,'filter':"filter:alpha(opacity=50)"});
	}else{
		$("#curDraw").css({'opacity':$("#be"+diaVal+"_effectPercent_val").val()*layer,'filter':"filter:alpha(opacity="+(($("#be"+diaVal+"_effectPercent_val").val()*layer)*100)+")"});
	}
}
	
function importImage(inField,outCanvas,accept,resType){
	var updateLayer;
	var bgSet=0;
	if(inField=='eiDia_imgOpen'){
		updateLayer='lwin_bgLayer';
		bgSet=1;
	}else{
		updateLayer=curLayer;
	}
	var eiImgOpen = document.getElementById(inField);
	var eiFiles = eiImgOpen.files;
	var eiLen = eiFiles.length;
	var from,to;
	if(eiLen>0){
		var eiCanvas=document.getElementById(outCanvas);
		var eiInput=eiCanvas.getContext("2d");
		var cW=$('#'+outCanvas).width();
		var cH=$('#'+outCanvas).height();
		var imgReader= new FileReader();
		imgReader.onload = function(e) {
			var imgLoaded = new Image();
			imgLoaded.onload = function() {
				if(resType=='stretch'){
					eiInput.drawImage(imgLoaded,0,0,imgLoaded.width,imgLoaded.height,0,0,cW,cH);
				}else if(resType=='set'){
					if(bgSet==1){
						cW=imgLoaded.width;
						cH=imgLoaded.height;
						sW=cW;
						sH=cH;
						setLayerRes(1, [cW,cH], 1,1);
						from=[0,0,cW,cH];
						to=[0,0,cW,cH];
					}else{
						clearScreen(curCanvas);
						from=[0,0,imgLoaded.width,imgLoaded.height];
						to=[(sW/2-imgLoaded.width/2), (sH/2-imgLoaded.height/2),imgLoaded.width, imgLoaded.height];
					}
					eiInput.drawImage(imgLoaded,from[0],from[1],from[2],from[3],to[0],to[1],to[2],to[3]);
				}else if(resType=='tile'){
					if(bgSet==0){
						clearScreen(curCanvas);
					}
					eiInput.fillStyle=eiInput.createPattern(imgLoaded, 'repeat');
					eiInput.fillRect(0,0,sW,sH);
				}
				if(mobile==0 && tileUpdate==1){
					setTimeout(function(){updateTiles();},50); 
				}
			};
			imgLoaded.src = e.target.result;
		};       
		imgReader.readAsDataURL( eiFiles[0] );
		if(accept==1){
			onDia=0;
			dialogueOption(0, 'editInterface');
			//Document probably isn't done updating the element, and onready isn't working
			//I'll look into this later
			countdown("updateLayerCanvas('"+updateLayer+"');",4);
		}
	}
}

function setBGPatterns(){
	gradientRunner("editBackground_pattern0",0,gradFromHex,gradToHex,0,1,1);
	gradientRunner("editBackground_pattern1",1,gradFromHex,gradToHex,0,1,1);
	gradientRunner("editBackground_pattern2",2,gradFromHex,gradToHex,1,1,1);
	gradientRunner("editBackground_pattern3",3,gradFromHex,gradToHex,0,1,1);
}
function setGradientMarkerPositions(){
	var pos=$("#editBackground_tempDisp").offset();
	var cW=$("#editBackground_tempDisp").width();
	var cH=$("#editBackground_tempDisp").height();
	var offsetX=-$("#editBackground_fromMarker").width()/2;
	var offsetY=-$("#editBackground_fromMarker").height()/2;
	var pX=pos.left+offsetX+(cW*bgGradientPoints[0]);
	var pY=pos.top+offsetY+(cH*bgGradientPoints[1]);
	$("#editBackground_fromMarker").css({'top':pY,'left':pX});
	pX=pos.left+offsetX+(cW*bgGradientPoints[2]);
	pY=pos.top+offsetY+(cH*bgGradientPoints[3]);
	$("#editBackground_toMarker").css({'top':pY,'left':pX});
}
function dragGradientMarker(marker,markerSpot,init){
	var pos=$("#editBackground_tempDisp").offset();
	var cW=$("#editBackground_tempDisp").width();
	var cH=$("#editBackground_tempDisp").height();
	if(init==1){
		init=0;
		$("#editBackground_sampleMarker").css({'zIndex':3002,'top':pos.top,'left':pos.left,'cursor':'move','cursor':'grabbing','cursor':'-moz-grabbing','cursor':'-webkit-grabbing'});
		$("#editBackground_sampleMarker").parent().css({'cursor':'move','cursor':'grabbing','cursor':'-moz-grabbing','cursor':'-webkit-grabbing'});
		setMarker=1;
	}
	var adjX=mouseX-pos.left;
	var adjY=mouseY-pos.top;
	var percX=Math.min(1, Math.max(0,adjX/cW));
	var percY=Math.min(1, Math.max(0,adjY/cH));
	bgGradientPoints[markerSpot*2]=percX;
	bgGradientPoints[markerSpot*2+1]=percY;
	setGradientMarkerPositions();
	gradientRunner("editBackground_tempDisp",0,$("#editBackground_fColor").val(),$("#editBackground_tColor").val(),0,1,1);
	if(setMarker==1){
		setTimeout(function(){dragGradientMarker(marker,markerSpot,init);},20);
	}else{
		$("#editBackground_sampleMarker").css({'zIndex':2999,'cursor':'auto'});
		$("#editBackground_sampleMarker").parent().css({'cursor':'auto'});
	}
}
function countdown(func,countDown){
	var exitVal=1;
	countDown-=1;
	if(countDown==0){
		eval(func);
	}else{
		setTimeout(function(){countdown(func,countDown)},50);
	}
}

function keyHoldCheck(runFunc){
	if(storeKeyHold>0){
		storeKeyHold+=1;
		if(storeKeyHold==20){
			storeKeyHit=1;
			eval(runFunc);
		}else{
			setTimeout(function(){keyHoldCheck(runFunc);},35);
		}
	}
}
/*
// Drag and drop files into the browser window
https://www.nczonline.net/blog/2012/05/08/working-with-files-in-javascript-part-1/
<div id="your-files"></div>
<script>
var target = document.getElementById("your-files");

target.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

target.addEventListener("drop", function(event) {

    // cancel default actions
    event.preventDefault();

    var i = 0,
        files = event.dataTransfer.files,
        len = files.length;

    for (; i < len; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
    }

}, false);
</script>
*/
function tilesOption(){
	if(tileUpdate==0){
		$("#tile_doc").html("Tiles Off");
	}else{
		$("#tile_doc").html("Tiles On");
	}
	toggleTiles();
}
function toggleTiles(){
	if(tileUpdate==1){
		var t,l;
		for(var x=0; x<tileList.length; ++x){
			l=parseInt($("#"+tileList[x]).attr("lPos"));
			t=parseInt($("#"+tileList[x]).attr("tPos"));
			$("#"+tileList[x]).css({'left':sW*l,'top':sH*t,'visibility':'visible'});
			$("#"+tileList[x]).width(sW);
			$("#"+tileList[x]).height(sH);
			//setCanvasToColor(tileList,"#ff0000");
		}
		updateTiles();
	}else{
		for(var x=0; x<tileList.length; ++x){
			$("#"+tileList[x]).css('visibility','hidden');

		}
	}
}

function updateTiles(){
	var dUrl=snapshot(curCanvas,'pastDraw','gradientBG',0);
	tmpImg=new Image();
	tmpImg.src=dUrl;
	setTimeout(function(){
		for(var x=0; x<tileList.length; ++x){
			cn=document.getElementById(tileList[x]);
			cnCtx=cn.getContext('2d');
			cn.width=sW;
			cn.height=sH;
			cnCtx.drawImage(tmpImg,0,0);
		}
	},200);
}

function snapshot(canvas, pastEffect,gradient,mode){
	if(refreshWindow[0]>refreshWindow[2]){
		refreshWindow=[0,0,sW,sH];
		refreshWindowStore=refreshWindow;
	}
	var cn,cg, curCan, curAlpha, curHide;
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var layers=$(layerList).find('.lwin_layer');
	saveInit();
	saveCroppedInit();
	clearScreen("tempBuildCanvas");
	clearScreen("saveCanvas");
	clearScreen('saveCroppedCanvas');
	var aMult;
	for(var i=0;i<layers.length;++i){
		curCan=$(layers[ ((layers.length-1)-i) ]).attr('canvasName');
		curAlpha=parseFloat($(layers[ ((layers.length-1)-i) ]).attr('opacity'));
		curHide=parseFloat($(layers[ ((layers.length-1)-i) ]).attr('vis'));
		if(curCan!='gradientBG' && curHide == 1){
			if(curCan==canvas){
				mergeCanvas('tempBuildCanvas',pastEffect, 0,1);
			}
			mergeCanvas('tempBuildCanvas', curCan, 0,curAlpha);
		}
	}
	
	mergeCanvas("saveCanvas", 'tempBuildCanvas', 1,1);
	cn=document.getElementById("saveCanvas");
	if(mobile==0){
		mergeCanvas('saveCroppedCanvas', "saveCanvas", 2,1);
	}
	var drawing=cn.toDataURL("image/png");
	
	mergeCanvas(gradient, "saveCanvas", 1,1);
	mergeCanvas('saveCanvas', "saveCanvas", 1,1);
	if(mobile==0){
		mergeCanvas('saveCroppedCanvasBG', 'saveCanvas', 2,1);
	}
	cg=document.getElementById("saveCanvas");
	var drawingBG=cg.toDataURL("image/png");
	if(mode==0){
		return drawingBG;
	}
	
	if(mobile==0){
		cg=document.getElementById("saveCroppedCanvas");
		var drawingCropped=cg.toDataURL("image/png");
		cg=document.getElementById("saveCroppedCanvasBG");
		var drawingCroppedBG=cg.toDataURL("image/png");
	}
	/*
	// // Set as blob to get a download link instead of to a tab
	var slim=cn.getContext("2d").getImageData(refreshWindow[0],refreshWindow[1],refreshWindow[2],refreshWindow[3]);
	//alert(refreshWindow);
	var dl=drawing.replace("image/png", "image/octet-stream");
	var drawing=document.getElementById(canvas).toDataURL("image/png");
	//png when I get to it-
	var data=atob( drawing.substring("data:image/png;base64,".length) ), asArray = new Uint8Array(data.length);
	//jpeg-
	var data=atob( drawing.replace(/^.*?base64,/, '') ), asArray = new Uint8Array(data.length);
	for(var x=0; x<data.length;x++){
		asArray[x]=data.charCodeAt(x);
	}
	var blob= new Blob( [asArray.buffer], {type: "image/jpeg"});
	var blob= new Blob( [asArray.buffer], {type: "image/png"}); */
	var writeHtml='';
	
	if(mobile==0){
		writeHtml="<div style='height:85px;width:560px;overflow:hidden;'><img class='imgDls' width='560' src='"+drawing+"' style='cursor:pointer;position:relative;top:-85%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawing+"')\"></div>";
		writeHtml+="<div style='height:1px;width:580;background-color:#226666;overflow:hidden;margin:3px;'>&nbsp;</div>";
		writeHtml+="<div style='height:85px;width:560px;overflow:hidden;'><img class='imgDls' width='560' src='"+drawingBG+"' style='cursor:pointer;position:relative;top:-85%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawingBG+"')\"></div>";
		writeHtml+="<div style='height:1px;width:580;background-color:#226666;overflow:hidden;margin:3px;'>&nbsp;</div>";
		writeHtml+="<div style='height:"+Math.min((refreshWindowStore[3]-refreshWindowStore[1]),85)+"px;width:560px;overflow:hidden;'><img class='imgDls' width='"+Math.min((refreshWindowStore[2]-refreshWindowStore[0]),560)+"' src='"+drawingCropped+"' style='cursor:pointer;position:relative;top:-50%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawingCropped+"')\"></div>";
		writeHtml+="<div style='height:1px;width:580;background-color:#226666;overflow:hidden;margin:3px;'>&nbsp;</div>";
		writeHtml+="<div style='height:"+Math.min((refreshWindowStore[3]-refreshWindowStore[1]),85)+"px;width:560px;overflow:hidden;'><img class='imgDls' width='"+Math.min((refreshWindowStore[2]-refreshWindowStore[0]),560)+"' src='"+drawingCroppedBG+"' style='cursor:pointer;position:relative;top:-50%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawingCroppedBG+"')\"></div>";
	}else{
		writeHtml="<div style='height:85px;width:560px;overflow:hidden;'><img class='imgDls' width='560' src='"+drawing+"' style='cursor:pointer;position:relative;top:-85%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawing+"');\"></div>";
		writeHtml="<div style='height:160px;width:560px;overflow:hidden;'><img class='imgDls' width='560' src='"+drawing+"' style='cursor:pointer;position:relative;top:-85%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawing+"');\"></div>";
		writeHtml+="<div style='height:1px;width:580;background-color:#226666;overflow:hidden;margin:3px;'>&nbsp;</div>";
		writeHtml+="<div style='height:160px;width:560px;overflow:hidden;'><img class='imgDls' width='560' src='"+drawingBG+"' style='cursor:pointer;position:relative;top:-85%;' onClick=\"downloadSnapshot('saveDrawingTemp','"+drawingBG+"')\"></div>";
	}
	$("#saveDrawingTemp").html(writeHtml);
	return "Displayed";
}
function downloadSnapshot(dl,code){
	window.open(code,"_blank");
	//dl.download="Pxl-snapshot.jpg";
}
function saveDocument(canvas, pastEffect, gradient,tmpWindow){
	var cn,cg, curCan;
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var layers=$(layerList).find('.lwin_layer');
	clearScreen("tempBuildCanvas");
	var fullDate=new Date();
	var dSplit=fullDate.toString().split(' ',5);
	var curDate=dSplit.join(' ');
	var mapFileData='##This is a file saved from Pxlmancer.com on '+curDate+'.##\n';
	mapFileData+="^setVariables";
	mapFileData+="^sW="+sW+";";
	mapFileData+="^sH="+sH+";";
	mapFileData+="^gradFromHex='"+gradFromHex+"';";
	mapFileData+="^gradToHex='"+gradToHex+"';";
	mapFileData+="^bgGradientPoints=["+bgGradientPoints[0]+","+bgGradientPoints[1]+","+bgGradientPoints[2]+","+bgGradientPoints[3]+"];";
	mapFileData+="^swatchSet=["+swatchSet[0]+","+swatchSet[1]+","+swatchSet[2]+","+swatchSet[3]+","+swatchSet[4]+","+swatchSet[5]+","+swatchSet[6]+","+swatchSet[7]+","+swatchSet[8]+","+swatchSet[9]+"];";
	//Build out color sphere swatches and store as url data
	var tempCanvas=document.createElement("canvas");
	var csW=$("#colorSphereCanvas").width();
	var csH=$("#colorSphereCanvas").height();
	tempCanvas.width=csW;
	tempCanvas.height=csH;
	var tempCtx=tempCanvas.getContext('2d');
	mapFileData+="^swatchStore=[";
	var storeData;
	for(var x=0; x<10;++x){
		if(swatchSet[x]==1){
			tempCtx.clearRect(0,0,csW,csH);
			tempCtx.putImageData(swatchStore[x],0,0);
			storeData=tempCanvas.toDataURL('image/png');
		}else{
			storeData='';
		}
		mapFileData+="'"+storeData+"'";
		if(x!=9){
			mapFileData+=",";
		}
	}
	mapFileData+="];";
	mapFileData+="^";
	tempCanvas=document.getElementById("tempBuildCanvas");
	tempCanvas.width=sW;
	tempCanvas.height=sH;
	clearScreen("tempBuildCanvas");
	var toUrl;
	for(var i=0;i<layers.length;++i){
		curCan=$(layers[ ((layers.length-1)-i) ]).attr('canvasName');
		mapFileData+="^"+$(layers[ ((layers.length-1)-i) ]).attr('name');
		mapFileData+="^"+curCan;
		mapFileData+="^"+$(layers[ ((layers.length-1)-i) ]).attr('id');
		mapFileData+="^"+$(layers[ ((layers.length-1)-i) ]).attr('opacity');
		if(curCan==canvas){
			mergeCanvas('tempBuildCanvas',pastEffect, 0,1);
			mergeCanvas('tempBuildCanvas', curCan, 0,1);
			cn=document.getElementById("tempBuildCanvas");
			mapFileData+='^'+cn.toDataURL("image/png");
			clearScreen("tempBuildCanvas");
		}else{
			cn=document.getElementById(curCan);
			toUrl=cn.toDataURL("image/png");
			mapFileData+='^'+toUrl;
		}
	}
	downloadDocument("Pixelmancer",mapFileData);
}
function downloadDocument(dl,code){
	var fullDate=new Date();
	var dSplit=fullDate.toString().split(' ');
	var time=dSplit[4];
	var formatTime=time.replace(/:/g,"-");
	var dlCount=parseInt($("#dlDia_genListCount").val())+1;
	var uniqueId="dlLink-"+dSplit[1]+"-"+dSplit[2]+"-"+dSplit[3]+"_"+formatTime+"_"+dlCount;
	var hf = document.createElement("a");
	var dlName=dl+"_"+dSplit[1]+"-"+dSplit[2]+"-"+dSplit[3]+"_"+formatTime+".pxlm"
	var download = new Blob([code], {type: 'txt'});
	hf.href = URL.createObjectURL(download);
	hf.download = dlName;
	hf.innerHTML = "<input type='button' class='dialog-button' value='Download file'>";
	hf.id=uniqueId+"_dlButton";
	//var dlCount=$("#ddDia_downloadLink").find('.dlLink');
	$("#dlDia_genListCount").val(dlCount)
	//dlCount=dlCount.length+1;
	//hf.click();
	var prev='';
	if($("#ddDia_downloadLink").html()!=''){
		prev="<div style='opacity:.5;margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;'>&nbsp;</div><div align='center' style='font-size:80%;'>--Previous Downloads--</div>";
	}
	$("#ddDia_downloadLink").prepend("<div id='"+uniqueId+"' style='margin:2px;'></div>");
	$("#"+uniqueId).html("<span class='dlLink'>"+dlCount+" - ");
	$("#"+uniqueId).append("<span style='font-size:80%;'> "+dSplit[1]+" "+dSplit[2]+","+dSplit[3]+" at "+time+"</span> - ");
	$("#"+uniqueId).append(hf);
	$("#"+uniqueId).append(" -- <input type='button' class='dialog-button' value='Load' onClick=\"loadDocument('"+hf.href+"');\">");
	$("#"+uniqueId).append(" -- <input type='button' class='dialog-button' value='Delete' onClick=\"$('#"+uniqueId+"').remove();\"></span><br>");
	$("#dlListBreaker").remove();
	$("#"+uniqueId).append("<div id='dlListBreaker' align='center'>"+prev+"</div>");
}
function loadDocument(dlLoad){
	var ldFileOpen = document.getElementById("ldDia_fileOpen");
	var ldFiles, ldLen, reloadFunction;
	var loadType=0;
	if(dlLoad=='0'){
		ldFiles = ldFileOpen.files;
		ldLen = ldFiles.length;
	}else{
		loadType=1;
		ldLen = 1;
	}
	if(ldLen>0){
		//Clear out all existing layers
		var layerList=$("#lwin_layerList");
		var children=$(layerList).children();
		var layers=$(layerList).find('.lwin_layer');
		for(var i=0;i<layers.length;++i){
			curLayer=$(layers[i]).attr('id');
			curCanvas=$(layers[i]).attr('canvasName');
			deleteLayer(0,0,0);
		}
		layerUniqueCount=0;
		//Time to read the file
		if(loadType==0){ // Read from load file form entry
			var fileReader= new FileReader();
			fileReader.onload = function(e) {
				loadDocumentReadInternals(e.target.result, dlLoad);
			}; 
			fileReader.readAsText( ldFiles[0] );
		}else{ // Read from download list
			// Was trying to read the blob, it didn't like it; resorting to reading the local file created above.
			rq=new XMLHttpRequest();
			rq.onreadystatechange=function(){
				if(rq.readyState==4){
					loadDocumentReadInternals(rq.responseText, dlLoad);
				}
			}
			rq.overrideMimeType("text/plain");
			rq.open("GET",dlLoad,true);
			rq.send(null); 
		}
	}
}
//// Load ////
function loadDocumentReadInternals(result,dlLoad){
	var ldFiles, ldLen, reloadFunction;
	tileUpdate=0;
	tilesOption();
	var cnData=0;
	var cont=0;
	var buildLayers=[];
	var bCount=0;
	var holdCheck=0;
	var dt,curVar,tmpCurName,tmpCurCanvasName,tmpCurLayer,tmpCurAlpha,cn,cnCtx,tmpImg,drawData;
	var tempCanvas=document.createElement("canvas");
	var csW=$("#colorSphereCanvas").width();
	var csH=$("#colorSphereCanvas").height();
	tempCanvas.width=csW;
	tempCanvas.height=csH;
	var tempCtx=tempCanvas.getContext('2d');
	var varUpdates=['bgGradientPoints','swatchSet','swatchStore','sW','sH','gradFromHex','gradToHex'];
	var fileContents = result;
	var fcLines=fileContents.split("^");
	if(fcLines.length>0){
		for(var x=0; x<fcLines.length;++x){
			if(cnData==0 || cnData==-1){ // Check for variables to set in the document
				dt=fcLines[x];
				if(dt!=""){
					if(dt=='setVariables'){
						cnData=-1
					}
					if(cnData==-1){
						curVar=dt.split("=");
						if(varUpdates.indexOf(curVar[0]) != -1){
							try{
								eval(dt);
							}catch(err){
								console.log(err);
							}
						}
					}
				}else{
					cnData=1;
					setLayerRes(0, [sW,sH], 1,1);
				}
			}else{ // Build layers and apply data
				tmpCurName=fcLines[x];
				x++;
				tmpCurCanvasName=fcLines[x];
				x++;
				tmpCurLayer=fcLines[x];
				x++;
				tmpCurAlpha=1;
				if($.isNumeric(fcLines[x])){
					tmpCurAlpha=parseFloat(fcLines[x]);
					x++;
				}
				dt=fcLines[x];
				if(tmpCurName=="lwin_background"){
					cn=document.getElementById(tmpCurCanvasName);
					cnCtx=cn.getContext('2d');
					tmpImg=new Image();
					tmpImg.src=dt;
					cnCtx.drawImage(tmpImg,0,0);
				}else{
					addLayer();
					renameLayer(curLayer,tmpCurName);
					$("#"+curLayer).attr('opacity',tmpCurAlpha);
					$("#"+curCanvas).css({'opacity':tmpCurAlpha,'filter':"filter:alpha(opacity="+(tmpCurAlpha*100)+")"});
					cn=document.getElementById(curCanvas);
					cnCtx=cn.getContext('2d');
					tmpImg=new Image();
					tmpImg.src=dt;
					cnCtx.drawImage(tmpImg,0,0);
				}
			}
		}
	}
	//Convert swatches from toDataURL to getImageData
	for(var c=0; c<swatchSet.length;++c){
		if(swatchSet[c]==1){
			tempCtx.clearRect(0,0,csW,csH);
			cnCtx=cn.getContext('2d');
			tmpImg=new Image();
			tmpImg.src=swatchStore[c];
			tempCtx.drawImage(tmpImg,0,0);
			drawData=tempCtx.getImageData(0,0,sWidth,sHeight);
			swatchStore[c]=drawData;
		}
	}
	onDia=0;
	menuVis(0,0);
	dialogueOption(0, 'saveLoadDocument');
	countdown("rebuildLayerThumbs();",4);
	dialogueOpen=0;
	typingFocus=0;
	promptName=promptWindow("Did the scene load correctly?<br><span style='font-size:80%;'>(If not, Trying again ussually works.)</span>",['Yes it did.','No, try again.','Cancel'],['1','0','-1'],['',"loadDocument('"+dlLoad+"');",''],1,0,0,2,1);
}

function loadLayer(canvas,loadData){
	var def=$.Deferred();
	cn=document.getElementById(canvas);
	cnCtx=cn.getContext('2d');
	tmpImg=new Image();
	tmpImg.onload=function(){
		cnCtx.drawImage(tmpImg,0,0);
		def.resolve();
	};
	tmpImg.src=loadData;
	return def.promise();
}

//// New Doc /////
function newDocPrompt(){
	//var newDocCmd="var tmpName=tempWindow('..Prepping New Document..',[-1,-1],'',2,0,0,1);setTimeout(function(){refreshWindowStore=[sW,sH,0,0];undoOption(1);undoOption(0);gradFromHex='#102030';gradToHex='#051015';bgGradientPoints=[0,0,1,1];newDocument();},20);";
	var drawSomething="Pen To Paper<br><div style='padding-top:4px;width:320px;height:140px;overflow:hidden;' id='welcomePrompt_drawSomething'></div>";
	var newDrawDocCmd="var tmpName=tempWindow('..Prepping New Document..',[-1,-1],'',2,0,0,1);setTimeout(function(){refreshWindowStore=[sW,sH,0,0];undoOption(1);undoOption(0);gradFromHex='#102030';gradToHex='#051015';bgGradientPoints=[0,0,1,1];newDocument(1);},20);";
	
	var messAround="Mess around<br><div style='padding-top:4px;width:320px;height:140px;overflow:hidden;' id='welcomePrompt_messAround'></div>";
	var newMessDocCmd="var tmpName=tempWindow('..Prepping New Document..',[-1,-1],'',2,0,0,1);setTimeout(function(){refreshWindowStore=[sW,sH,0,0];undoOption(1);undoOption(0);gradFromHex='#102030';gradToHex='#051015';bgGradientPoints=[0,0,1,1];newDocument(0);},20);";

	var cancelCmd="$('#cs_red_val').val("+$('#cs_red_val').val()+");$('#cs_green_val').val("+$('#cs_green_val').val()+");$('#cs_blue_val').val("+$('#cs_blue_val').val()+");setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);"
	promptName=promptWindow("Are you sure you want a new document?<br><span style='font-size:80%;'>(All information will be lost.)</span>",[drawSomething,messAround,'Cancel'],['1','0','-1'],[newDrawDocCmd,newMessDocCmd,cancelCmd],1,0,1,2,0);
	runNewDocumentPrompt(promptName,-1,[0,70],0,0);
}
function newDocument(mode){
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var layers=$(layerList).find('.lwin_layer');
	for(var i=0;i<layers.length;++i){
		curLayer=$(layers[i]).attr('id');
		curCanvas=$(layers[i]).attr('canvasName');
		deleteLayer(0,0,0);
	}
	resetCanvas();
	reinitializeSettings();
	gradientInit(0,1);
	reinitializeSettings(0);
	setTimeout(function(){
		updateLayerCanvas('lwin_bgLayer');
		dragClick=0;
		dialogueOpen=0;
		dragging=0;
		lastMag=1;
		key_hide=0;
		layerUniqueCount=0;
		layerWindowVisibility(1,'lwin_footer','layersWindow',-($("#lwin_footer").position().top),0);
		visibilityColorSphere(1,0);
		addLayer();
		setTimeout(function(){
			setNewDocSettings(mode);
		},50);
	},50);
}

function setNewDocSettings(mode){
	if(mode==0){
		reinitializeSettings(0);
		setLayerRes(0, [origSW,origSH], 1,1);
		$("#cs_red_val").val(-3);
		$("#slDia_red_val").val(-3);
		$("#cs_green_val").val(-3);
		$("#slDia_green_val").val(-3);
		$("#cs_blue_val").val(-3);
		$("#slDia_blue_val").val(-3);
		setSlideControl("slDia_red");
		setSlideControl("slDia_green");
		setSlideControl("slDia_blue");
		$("#slDia_red_val").val(-3);
		$("#slDia_green_val").val(-3);
		$("#slDia_blue_val").val(-3);
		setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);
		$('#sl_setWidth_val').val('7');
		setSlideControl('sl_setWidth','');
		eval($("#barMenu_dynWidth").attr('onclick'));
		eval($("#barMenu_dynWidth").attr('onmouseup'));
		eval($("#barMenu_line").attr('onclick'));
		eval($("#barMenu_line").attr('onmouseup'));
		eval($("#barMenu_xyMirror").attr('onclick'));
		eval($("#barMenu_xyMirror").attr('onmouseup'));
		gradientInit(0,1);
		tileUpdate=0;
		tilesOption();
	}else{
		reinitializeSettings(0);
		eval($("#barMenu_noMirror").attr('onclick'));
		eval($("#barMenu_noMirror").attr('onmouseup'));
		eval($("#barMenu_setWidth").attr('onclick'));
		eval($("#barMenu_setWidth").attr('onmouseup'));
		eval($("#barMenu_sweep").attr('onclick'));
		eval($("#barMenu_sweep").attr('onmouseup'));
		$('#cs_red_val').val('50');
		$('#cs_green_val').val('48');
		$('#cs_blue_val').val('45');
		setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);
		$('#sl_setWidth_val').val('10');
		setSlideControl('sl_setWidth','');
		setLayerRes(0, [origSW/1.5,origSH/1.5], 1,1);
		gradientInit(1,1);
		setLayerRes(0, [origSW,origSH], 1,1);
		tileUpdate=0;
		tilesOption();
	}
}

//Since I'm scaling from [0,0] (left most, top most, part of the screen/object)
//I need to scale the document in relation to where it is at any position and any scale already.
//Imagine transform dilation where you need to focus on the pivot point and also scale around that point.
//There is probably a better way to do this math, but this works for me.
function zoomLayers(mPos,cPos,init){
	id='documentLayers';
	if(init==1){
		mPos=[mouseX,mouseY];
		cPos=[parseInt($("#"+id).css('left')),parseInt($("#"+id).css('top')),$("#"+id).width(),$("#"+id).height()];
		init=0;
	}
	var placeX=cPos[0];
	var placeY=cPos[1];
	var mag=mouseX-mPos[0];
	if($("#"+id).attr('doubleTouch')==1 && Math.abs(mag)<10){
		mag=1;
		placeX=origSW/2-sW/2;
		placeY=origSH/2-sH/2;
	}else{
		var distScale=150;
		if(mouseX<mPos[0]){
			distScale=500;
			
		}
		mag=Math.max(.1,(distScale+mag)/distScale);
		
		var curPercX=mPos[0]/sW;
		var curPercY=mPos[1]/sH;
		
		var sPosX=(curPercX*(cPos[2]*mag)-cPos[0]*((mag)))/(mag);
		var sPosY=(curPercY*(cPos[3]*mag)-cPos[1]*((mag)))/(mag);
		var offX=(curPercX*(cPos[2]*curScale)-cPos[0]*curScale)/(mag*curScale);
		var offY=(curPercY*(cPos[3]*curScale)-cPos[1]*curScale)/(mag*curScale);
		var mult=Math.sin( Math.min(1,Math.max(0,(mag-curScale)/3)) * (3.14159265/2) );
		
		placeX=-((sPosX-offX)*mag)+cPos[0];
		placeY=-((sPosY-offY)*mag)+cPos[1];
		mag=Math.max(.08,mag*curScale);
		dynScale=mag;
	}
	$("#"+id).css({'left':(placeX)+'px','top':(placeY)+'px'});
    $("#"+id).css({'transform':'scale('+mag+', '+mag+')','-moz-transform':'scale('+mag+', '+mag+')','-webkit-transform':'scale('+mag+', '+mag+')','-ms-transform':'scale('+mag+', '+mag+')','-o-transform':'scale('+mag+', '+mag+')'});
	
	$("#geoDrawGuides").css({'left':(placeX)+'px','top':(placeY)+'px'});
    $("#geoDrawGuides").css({'transform':'scale('+mag+', '+mag+')','-moz-transform':'scale('+mag+', '+mag+')','-webkit-transform':'scale('+mag+', '+mag+')','-ms-transform':'scale('+mag+', '+mag+')','-o-transform':'scale('+mag+', '+mag+')'});
	
	$("#marq_controllerHandles").css({'left':(-placeX)+'px','top':(placeY)+'px'});
	
	updateMouseDraw(mag,[0,0,0,0]);
	updateScalers(mag,"documentLayers","scaler");
	updateMarqueeHandles(mag,selectToolWindow,"marqSelect");
	if(storeKeyHold==1 && $("#"+id).attr('doubleTouch')==0){
		setTimeout(function(){zoomLayers(mPos,cPos,init);},20);
	}else{
		if(Math.abs(curScale-mag)<.05){
			$('#documentLayers').attr('doubleTouch',1);
		}
		curScale=mag;
	}
}
function moveLayers(mPos,init){
	id='documentLayers';
	if(init==1){
		mPos=[mouseX,mouseY,parseInt($("#"+id).css('left')),parseInt($("#"+id).css('top'))];
		init=0;
	}
	var moveX=mouseX-mPos[0];
	var moveY=mouseY-mPos[1];
	var mag=Math.sqrt(Math.pow(moveX,2)+Math.pow(moveY,2));
	if($("#"+id).attr('doubleMove')==1 && Math.abs(mag)<5){
		moveX=origSW/2-(sW*curScale)/2;
		moveY=origSH/2-(sH*curScale)/2;
	}else{
		moveX=moveX+mPos[2];
		moveY=moveY+mPos[3];
	}
	$("#"+id).css({'top':moveY+'px','left':moveX+'px'});
	$("#geoDrawGuides").css({'top':moveY+'px','left':moveX+'px'});
	updateMouseDraw(curScale,[0,0,0,0]);
	updateScalers(curScale,"documentLayers","scaler");
	updateMarqueeHandles(curScale,selectToolWindow,"marqSelect");
	if(storeKeyHold==1 && $("#"+id).attr('doubleMove')==0){
		setTimeout(function(){moveLayers(mPos,init);},20);
	}else{
		if(geoTool>0){
			clearScreen("curDraw");
			doGeoDraw("curDraw",0);
		}
		if(Math.abs(mag)<3){
			$('#documentLayers').attr('doubleMove',1);
		}
	}
}
function displaywheel(e){
	if(dialogueOpen==0 && typingFocus==0 && active==1){
		var delta=e.detail || e.wheelDelta*-1;
		delta=delta/Math.abs(delta)*-1;
		var curHoverSlider=hoverSlider;
		var steps,curVal,lwLH,lwVH;
		var dispWidth=0;
		if(curHoverSlider=='lwin_layerList'){
			lwVH=$('#lwin_layerListView').height();
			lwLH=$('#lwin_layerList').height();
			if(lwVH!=lwLH){
				curVal=Math.max(-(lwLH-lwVH),Math.min(0,parseInt($('#lwin_layerList').css('top'))+delta*15));
				$('#lwin_layerList').css('top',curVal);
				var sVal=((curVal*-1)/(lwLH-lwVH))*(lwVH-$("#lwin_scrollBar").height()) + 20;
				$("#lwin_scrollBar").css('top',sVal);
			}else{
				$("#lwin_scrollBar").css('left',-10);
			}
		}else{
			if(curHoverSlider=='sl'+diaVal+'_setWidth'){
				steps=1;
				dispWidth=1;
			}else if(curHoverSlider==''){
				curHoverSlider='sl'+diaVal+'_setWidth';
				if(geoTool>=1){
					steps=.5;
				}else{
					steps=3;
				}
				dispWidth=1;
			}else{
				steps=$("#"+curHoverSlider).attr('steps');
			}
			curVal=parseFloat($("#"+curHoverSlider+"_val").val());
			curVal+=delta*steps;
			$("#"+curHoverSlider+"_val").val(curVal);
			setSlideControl(curHoverSlider,'');
			if(dispWidth==1){
				curVal=Math.max(2,curVal*curScale);
				showBrushWidth(curVal,0,0);
			}
		}
		if(geoTool>=1 && geoDrawFillType==0){
			doGeoDraw("curDraw",0);
		}
	}
}
function layerWindowManualScroll(click){
	var lwVH=$('#lwin_layerListView').height();
	var lwLH=$('#lwin_layerList').height();
	if(click==1){
		$(document.body).css('cursor','row-resize');
		var perc=Math.max(0,Math.min(1,(mouseY-20-$("#lwin_scrollBar").height()/2)/(lwVH-20)));
		curVal=-((lwLH-lwVH)*perc);
		$('#lwin_layerList').css('top',curVal);
		var sVal=perc*(lwVH-$("#lwin_scrollBar").height()) + 20;
		$("#lwin_scrollBar").css('top',sVal);
		if(onDia==1){
			setTimeout(function(){layerWindowManualScroll(click);},20);
		}else{
			$(document.body).css('cursor','default');
		}
	}else{
		curVal=Math.max(-(lwLH-lwVH),Math.min(0,parseInt($('#lwin_layerList').css('top'))));
		var sVal=((curVal*-1)/(lwLH-lwVH))*(lwVH-$("#lwin_scrollBar").height()) + 20;
		$("#lwin_scrollBar").css('top',sVal);
	}
}
function showBrushWidth(dist,timeCount,curId){
	var tf=$("#tearOffs");
	var cS=dist+4;
	if(timeCount==0){
		$(tf).width(cS);
		$(tf).height(cS);
		$(tf).css({'visibility':'visible','zIndex':120,'opacity':'1.0','filter':'alpha(opacity=100)','top':(mouseY-cS/2),'left':(mouseX-cS/2)});
		var toCan=document.getElementById('tearOffs_brushSize');
		toCan.width=cS;
		toCan.height=cS;
		var toCanCtx=toCan.getContext("2d");
		toCanCtx.clearRect(0,0,cS,cS);
		drawGeo([cS/2,cS/2],0,(dist-2),[22,22,22],.5,3,-1,'tearOffs_brushSize');
		drawGeo([cS/2,cS/2],0,(dist-2),[255,255,255],.5,1,-1,'tearOffs_brushSize');
		tearOffId+=1;
		curId=tearOffId;
	}
	$(tf).css({'top':(mouseY-cS/2),'left':(mouseX-cS/2)});
	if(tearOffId==curId){
		timeCount+=1;
		var perc;
		if(timeCount>10){
			perc=1-((timeCount-10)/10);
			$(tf).css({'opacity':perc,'filter':'alpha(opacity='+(perc*100)+')'});
		}else{
			$(tf).css({'opacity':1,'filter':'alpha(opacity=100)'});
		}
		if(timeCount<20 && tearOffId==curId){
			setTimeout(function(){showBrushWidth(dist,timeCount,tearOffId);},20);
		}else{
			if(tearOffId==curId){
				$(tf).css({'visibility':'hidden','zIndex':-7000,'opacity':'0.0','filter':'alpha(opacity=0)'});
			}
			tearOffId+=1;
		}
	}
}
function updateMouseDraw(scaler,offset){
	var cn=$("#mouseDraw");
	var dl=$("#documentLayers");
	var cW=Math.max(1,$(dl).width()*scaler+offset[0]+offset[2]);
	var cH=Math.max(1,$(dl).height()*scaler+offset[1]+offset[3]);
	var cL=$(dl).position().left-3-offset[0];
	var cT=$(dl).position().top-3-offset[1];
	$(cn).width(cW);
	$(cn).height(cH);
	$(cn).css({'top':cT,'left':cL,'padding':'2px','border':'1px #556677 solid'});
}
function initScalers(){
	//var sl=$("#documentScalers");
	var sl=$("#documentBack");
	var dl=$("#documentLayers");
	var cW=$(dl).width();
	var cH=$(dl).height();
	var cT=$(dl).position().top;
	var cL=$(dl).position().left;
	var html;
	var place=[-19+cL,-19+cT, cW/2+cL-7,-20+cT, cW+4+cL,-19+cT, -20+cL,cH/2+cT-7, cW+5+cL,cH/2+cT-7, -19+cL,cH+4+cT, cW/2+cL-7,cH+5+cT, cW+4+cL,cH+4+cT, cW+25+cL,cH+5+cT];
	var cursors=["nwse-resize","ns-resize","nesw-resize","ew-resize","ew-resize","nesw-resize","ns-resize","nwse-resize"];
	var drawLines=[[5,15, 15,15, 15,5], [0,15, 15,15, 7.5,15, 7.5,7.5], [0,5, 0,15, 10,15], [7.5,7.5, 15,7.5, 15,0, 15,15], [0,0, 0,15, 0,7.5, 7.5,7.5], [5,0, 15,0, 15,10],[0,0, 15,0, 7.5,0, 7.5,7.5],[0,10, 0,0, 10,0]];
	var controls=8;
	var html='';
	for(var x=0; x<controls; ++x){
		html+="<canvas id='scaler_ctl"+x+"' rwt='0' divParent='documentLayers' style='cursor:"+cursors[x]+";position:fixed;left:"+place[x*2]+";top:"+place[x*2+1]+";z-index:"+(8000+x)+"' height='15px' width='15px' onMouseOver='onDia=1;' onMouseDown='onDia=1;storeKeyHold=1;grabScalers(curScale,"+x+",[-1],1);' onMouseUp='onDia=0;storeKeyHold=0;'></canvas>";
	}
	html+="<div id='scaler_res' style='cursor:default;position:fixed;left:"+place[8*2]+";top:"+place[8*2+1]+";z-index:"+(8000+9)+";width:400px;font-size:95%;text-shadow:3px 3px 4px black,-1px 0px 1px rgba(0,0,0,.6),1px 0px 1px rgba(0,0,0,.6),0px 1px 1px rgba(0,0,0,.6),0px -1px 1px rgba(0,0,0,.6);'><form id='setRes_form'>";
	html+="<input id='setRes_curEdit' text='-1' hidden><input id='setRes_curScale' text='px' hidden>";
	html+="[ <span style='font-size:85%;'><b><span id='resDisp_width' style='cursor:col-resize;' onclick='resDisp_editVal(0,1,0);'>"+cW+"</span></b>, <b><span id='resDisp_height' style='cursor:row-resize;' onclick='resDisp_editVal(1,1,0);'>"+cH+"</span></b></span> ]";
	html+="<span style='opacity:.4;filter:alpha(opacity=40);'>-</span><span style='font-size:75%;'><b><span id='resDisp_pxScale' style='cursor:pointer;opacity:1;filter:alpha(opacity=100);' onclick='resDisp_editScale(0);'>px</span></b><span style='opacity:.4;filter:alpha(opacity=40);'>/</span><b><span id='resDisp_percScale' style='cursor:pointer;opacity:.4;filter:alpha(opacity=40);' onclick='resDisp_editScale(1);'>%</span></b></span><span style='opacity:.4;filter:alpha(opacity=40);'>-</span></form>";
	html+="<div id='tile_doc' style='cursor:pointer;position:relative;top:-15;' onClick='tileUpdate=(tileUpdate+1)%2;tilesOption();'>Tile Off</div>"
	html+="</div>";
	$(sl).html(html);
	// Set res setters to actually set the res when hit enter or click away
	// Click away isn't working yet.
	$("#setRes_form").on('keypress', function(e){
		keyHit=e.keyCode || e.which;
		if(keyHit===13){
			var curEdit=parseInt($("#setRes_curEdit").val());
			if(curEdit!=-1){
				resDisp_editVal(curEdit,0,1);
			}
			e.preventDefault();
			return false;
		}
	});
	/*$("#setRes_form").focusout(function(e){
		keyHit=e.keyCode || e.which;
		if(keyHit===13){
			var curEdit=parseInt($("#setRes_curEdit").val());
			if(curEdit!=-1){
				resDisp_editVal(curEdit,0);
			}
			e.preventDefault();
			return false;
		}
	});
	$("#setRes_form").blur(function(e){
		keyHit=e.keyCode || e.which;
		if(keyHit===13){
			var curEdit=parseInt($("#setRes_curEdit").val());
			if(curEdit!=-1){
				resDisp_editVal(curEdit,0);
			}
			e.preventDefault();
			return false;
		}
	});*/
	for(var x=0; x<controls; ++x){
		drawLine(drawLines[x],2,[85,102,119],1,0,("scaler_ctl"+x),[-1]);
	}
}

function updateScalers(scaler,div,name){
	var dl=$("#"+div);
	var cW=$(dl).width()*scaler;
	var cH=$(dl).height()*scaler;
	var cT=$(dl).position().top;
	var cL=$(dl).position().left;
	var place=[-19+cL,-19+cT, cW/2+cL-7,-20+cT, cW+4+cL,-19+cT, -20+cL,cH/2+cT-7, cW+5+cL,cH/2+cT-7, -19+cL,cH+4+cT, cW/2+cL-7,cH+5+cT, cW+4+cL,cH+4+cT, cW+25+cL,cH+5+cT];
	var controls=8;
	for(var x=0; x<controls; ++x){
		$("#"+name+"_ctl"+x).css({'left':place[x*2],'top':place[x*2+1]});
	}
	$("#"+name+"_res").css({'left':place[8*2],'top':place[8*2+1]});
		
}
function grabScalers(scaler,grab,mPos,init,tempMenuVis){
	var dl=$("#documentLayers");
	var cW=$(dl).width();
	var cH=$(dl).height();
	var cT=$(dl).position().top;
	var cL=$(dl).position().left;
	var grabResScale=[-1,-1,0,0, 0,-1,0,0, 0,-1,1,0, -1,0,0,0, 0,0,1,0, -1,0,0,1, 0,0,0,1, 0,0,1,1 ];
	if(init==1){
		var gL=parseInt($("#scaler_ctl"+grab).css('left'));
		var gT=parseInt($("#scaler_ctl"+grab).css('top'));
		mPos=[mouseX,mouseY,gL,gT];
		init=0;
		tempMenuVis=key_hide;
		key_hide=1;
		menuVis(0,0);
	}
	var moveX=mouseX-mPos[0];
	var moveY=mouseY-mPos[1];
	var xMult=Math.max((grabResScale[4*grab]*-1),grabResScale[4*grab+2]);
	var yMult=Math.max((grabResScale[4*grab+1]*-1),grabResScale[4*grab+3]);
	var x1=moveX*grabResScale[4*grab];
	var y1=moveY*grabResScale[4*grab+1];
	var x2=moveX*grabResScale[4*grab+2];
	var y2=moveY*grabResScale[4*grab+3];
	$("#scaler_ctl"+grab).css({'left':mPos[2]+moveX*xMult,'top':mPos[3]+moveY*yMult});
	if(grab==7){
		$("#scaler_res").css({'left':mPos[2]+moveX+25,'top':mPos[3]+moveY});
	}
	updateMouseDraw(scaler,[x1,y1,x2,y2]);
	
	var cn=$("#mouseDraw");
	cW=Math.floor($(cn).width()*(1/scaler));
	cH=Math.floor($(cn).height()*(1/scaler));
	//$("#scaler_res").html("[ <span style='font-size:85%;'><b>"+cW+"</b>, <b>"+cH+"</b></span> ]");
	$("#resDisp_width").html(cW);
	$("#resDisp_height").html(cH);
	
	if(storeKeyHold==1){
		setTimeout(function(){grabScalers(scaler,grab,mPos,init,tempMenuVis);},20);
	}else{
		key_hide=tempMenuVis;
		if(key_hide==0){
			menuVis(1,0);
		}
		setLayerRes(1,[x1*(1/scaler),y1*(1/scaler),x2*(1/scaler),y2*(1/scaler)],0,1);
		storeKeyHold=0;
	}
}
function setLayerRes(screenSet, offset, absolute, layerOption){
	var layerList=$("#documentLayers");
	var scaleType=$("#setRes_curScale").val();
	if(typeof scaleType == 'undefined' || active < 1){
		scaleType='px';
	}
	var origW=$(layerList).width();
	var origH=$(layerList).height();
	var cW, cH, cL, cT,dispCW,dispCH;
	if(absolute==0){
		cW=Math.floor(Math.max(1,origW+offset[0]+offset[2]));
		cH=Math.floor(Math.max(1,origH+offset[1]+offset[3]));
		dispCW=cW;
		dispCH=cH;
	}else{
		if(scaleType=="perc"){
			cW=Math.floor(sW*(offset[0]/100));
			cH=Math.floor(sH*(offset[1]/100));
			dispCW=100;
			dispCH=100;
		}else{
			cW=offset[0];
			cH=offset[1];
			dispCW=cW;
			dispCH=cH;
		}
	}
	if(!dispCH){
		$("#resDisp_width").html(sW);
		$("#resDisp_height").html(sH);
		return true;
	}
	$("#resDisp_width").html(dispCW);
	$("#resDisp_height").html(dispCH);
	$("#geoDrawGuides").css({"height":cH,"width":cW});
	//if(screenSet==1){
		sW=cW;
		sH=cH;
	//}
	if(absolute==0){
		cL=$(layerList).position().left-3-offset[0];
		cT=$(layerList).position().top-3-offset[1];
	}else{
		if(origW==cW){
			cL=$(layerList).css('left');
		}else{
			cL=origSW/2-cW/2;
		}
		if(origH==cH){
			cT=$(layerList).css('top');
		}else{
			cT=origSH/2-cH/2;
		}
	}
	$(layerList).width(cW);
	$(layerList).height(cH);
	$(layerList).css({'left':cL,'top':cT});
	
	var children=$(layerList).children();
	var id,cn,ctx,tmpCn,tmpCtx,draw;
	$("#tempBuildCanvas").attr('width',origW);
	$("#tempBuildCanvas").attr('height',origH);
	for(var i=0;i<children.length;++i){
		id=$(children[i]).attr('id');
		if((id!='' && id!="geoDrawGuides" && layerOption==1) || (id==layerOption) || (layerOption==0 && id=="gradientBG")){
			try{
				cn=document.getElementById(id);
				tmpCn=document.createElement("canvas");
				tmpCn.width=origW;
				tmpCn.height=origH;
				tmpCtx=tmpCn.getContext('2d');
				tmpCtx.drawImage(cn,0,0);
				tmpCtx.save();
				cn.width=cW;
				cn.height=cH;
				tmpCtx=cn.getContext("2d");
				tmpCtx.drawImage(tmpCn,0,0,origW,origH,0,0,cW,cH);
			}catch(err){}
		}
	}

	if(tileUpdate==1 && layerOption==1){
		toggleTiles();
	}
	
	layerList=$("#lwin_layerList");
	children=$(layerList).children();
	counts=$(layerList).find('.lwin_layer');
	for(var i=0;i<counts.length;++i){
		updateLayerCanvas($(counts[i]).attr('id'));
	}
	
	updateMouseDraw(curScale,[0,0,0,0]);
	updateScalers(curScale,"documentLayers","scaler");
	if(mobile==0 && selectTool>0){
		//deselectMarquee('selectDraw',1);
		putMarqueeSelection();
		//updateMarqueeHandles(curScale,selectToolWindow,"marqSelect");
	}
	refreshWindow=[sW,sH,0,0];
	refreshWindowStore=refreshWindow;
	refreshWindowTool=refreshWindow;
	storeKeyHold=0;
}
function resDisp_editVal(editRes,vis,switchScale){
	var resId,otherId,setRes,html,val,orig;
	if(editRes==0){
		resId='resDisp_width';
	}else{
		resId='resDisp_height';
	}
	var scale=$("#setRes_curScale").val();

	if(vis==1){
		if($("#setRes_curEdit").val() != '-1'){
			resDisp_editVal(parseInt($("#setRes_curEdit").val()),0,0);
		}
		typingFocus=1;
		$("#"+resId).on("onclick","");
		if(scale=="perc"){
			val='100';
		}else{
			val=$("#"+resId).text();
			if(val==""){
				val=sH;
			}
		}
		html="<input type='text' value='"+val+"' id='"+resId+"_val' size='10' min='1' style='width:30px;background-color:#454545;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form>";
		$("#"+resId).html(html);
		$("#"+resId+"_val").focus().select();
		$("#setRes_curEdit").val(editRes);
	}else{
		typingFocus=0;
		$("#setRes_curEdit").val("-1");
		val=$("#"+resId+"_val").val();
		if(parseInt(val).toString() == val && parseInt(val)>0){
			$("#"+resId).html(val);
			$("#"+resId).on("onclick", "resDisp_editVal("+editRes+",1,0);");
			if(editRes==1){
				otherId='resDisp_width';
				if(scale=="perc"){
					setRes=[100,val];
				}else{
					setRes=[parseInt($("#"+otherId).text()),val];
				}
				setLayerRes(1, setRes, 1,1);
				if(switchScale==1){
					eval($("#resDisp_pxScale").attr('onclick'));
				}
			}else{
				otherId='resDisp_height';
				if(scale=="perc"){
					setRes=[val,100];
				}else{
					setRes=[val,parseInt($("#"+otherId).text())];
				}
				setLayerRes(1, setRes, 1,1);
				resDisp_editVal(1,1,0);
			}
		}else{
			if(scale=="perc"){
				orig='100';
			}else{
				if(editRes==0){
					orig=$("#documentLayers").width();
				}else{
					orig=$("#documentLayers").height();
				}
			}
			$("#"+resId).html(orig);
		}
	}
}
function resDisp_editScale(type){
	if(type==0){
		$("#resDisp_width").text(sW);
		$("#resDisp_height").text(sH);
		$('#setRes_curScale').val('px');
		$("#resDisp_pxScale").css({'opacity':'1','filter':'alpha(opacity=100)'});
		$("#resDisp_percScale").css({'opacity':'.4','filter':'alpha(opacity=40)'});
	}else{
		$("#resDisp_width").text('100');
		$("#resDisp_height").text('100');
		$('#setRes_curScale').val('perc');
		$("#resDisp_pxScale").css({'opacity':'.4','filter':'alpha(opacity=40)'});
		$("#resDisp_percScale").css({'opacity':'1','filter':'alpha(opacity=100)'});
	}
}

function isValidForm(){
	var dat;
	var name=$("#contactMe_name").val();
	if(name == ''){
		tempWindow("Please put your name.",[-1,-1],'',8,1,0,2);
		return false;
	}
	var email=$("#contactMe_email").val();
	if(email == ''){
		tempWindow("Please enter an email.",[-1,-1],'',8,1,0,2);
		return false;
	}else{
		if(email.search(/@/g)==-1 || email.search(/\./g)==-1){
			tempWindow("Invalid email.",[-1,-1],'',8,1,0,2);
			return false;
		}
	}
	var message=$("#contactMe_comment").val();
	message=message.replace(/([>]|[$])/igm,"_._"); // Slow, but first layer of protection.
	if(message == ''){
		tempWindow("Please enter a comment.",[-1,-1],'',8,1,0,2);
		return false;
	}
	dat="name="+name+"&email="+email+"&comment="+message;

	$.ajax({
		type: "POST",
		url: "submitContactMe.php",
		data: dat,
		cache: false,
		success: function(ret){
			onDia=0;
			dialogueOption(0, 'contactMe');
			tempWindow("Message sent! Thanks for contacting me!",[-1,-1],'',17,1,0,0);
		},
		error: function(XMLHttpRequest, stat, err){
			tempWindow("Something went wrong, you can email <b>pxl@pxlmancer.net</b> directly.",[-1,-1],'',23,1,0,0);
		}
	});
	return false;
}
function brushToolPulldown(menu){
	skipMenuSlide='none';
	var val=$('#colorMethod'+menu+'_comp').val();
	cM='source-over';
	var pDiv='drawOption';
	if(val=="-"){
		setToolMode(0,parseFloat($("#"+curLayer).attr('opacity')));
		brushStyle=0;
		setDrawAlpha(0);
		headerHighlight(0,pDiv);
	}else if(val=="tool_Erase"){
		setToolMode(1,1);
		brushStyle=8;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else if(val=="tool_Blur"){
		setToolMode(1,1);
		brushStyle=1;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else if(val=="tool_Scatter"){
		setToolMode(1,1);
		brushStyle=10;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else if(val=="tool_Deblur"){
		setToolMode(1,1);
		brushStyle=9;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else if(val=="tool_Desaturate"){
		setToolMode(1,1);
		brushStyle=5;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else if(val=="tool_hueUp"){
		setToolMode(1,1);
		brushStyle=6;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else if(val=="tool_hueDown"){
		setToolMode(1,1);
		brushStyle=7;
		setDrawAlpha(1);
		headerHighlight(1,pDiv);
	}else{
		setToolMode(0,parseFloat($("#"+curLayer).attr('opacity')));
		brushStyle=0;
		setDrawAlpha(0);
		cM=val;
		if(val=='source-over'){
			headerHighlight(0,pDiv);
		}else if(val=='destination-over'){
			headerHighlight(2,pDiv);
		}else{
			headerHighlight(3,pDiv);
		}
	}
	compMethod=cM;
}
function setDrawAlpha(mode){
	if(brushStyle==0){
		if(mode==0){
			$("#curDraw").css({'opacity':$("#be"+diaVal+"_effectPercent_val").val()});
		}else{
			$("#curDraw").css({'opacity':.5});
		}
	}
}
function layerMergeDown(){
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var counts=$(layerList).find('.lwin_layer');
	var from,toLayer,to;
	for(var i=0;i<counts.length;++i){
		if($(counts[i]).attr('id') == curLayer){
			from=$(counts[i]).attr('canvasName');
			toLayer=$(counts[i+1]).attr('id');
			if(toLayer=='lwin_bgLayer'){
				tempWindow("You can't merge down into the background layer.",[-1,-1],'',20,1,0,0);
				return false;
			}else{
				to=$(counts[i+1]).attr('canvasName');
			}
		}
	}
	mergeCanvas(to,from, 0,1);
	deleteLayer(0,1,0);
	countdown("updateLayerCanvas('"+toLayer+"');",4);
}
function scaleCanvas(div,scale){
	
	var origW=$("#"+div).width();
	var origH=$("#"+div).height();
	var cW=sW*scale;
	var cH=sH*scale;
	cn=document.getElementById(div);
	tmpCn=document.createElement("canvas");
	tmpCn.width=origW;
	tmpCn.height=origH;
	tmpCtx=tmpCn.getContext('2d');
	tmpCtx.drawImage(cn,0,0);
	tmpCtx.save();
	cn.width=cW;
	cn.height=cH;
	tmpCtx=cn.getContext("2d");
	tmpCtx.drawImage(tmpCn,0,0,origW,origH,0,0,cW,cH);
}

function launchMailTo(){
	window.location.href='mailto:pxl@pxlmancer.com';
}

function mobileImportImage(){
	$("#mobile_imgOpen").click();
}


function copyObject(obj,msg){
	var dom=document.getElementById(obj);
	//var t=typeof(dom);
	//console.log(t);
	var curSelection=window.getSelection();
	if(dom.hasAttribute("value")){
		dom.select();
		document.execCommand('copy');
		var tmpName=tempWindow(msg,[-1,-1],'',8,.5,0,-1);
		dom.blur();
	}
	try{
		curSelection.focusNode.select;
	}catch(err){
		try{
			curSelection.focusNode.select();
		}catch(err){}
	}
}
