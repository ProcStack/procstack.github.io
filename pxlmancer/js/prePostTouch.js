function startTouch(e,clicker) {
	var touchList=e.touches;
	
	if(touchCheck==0 && (dragTotal==0 || mapPause==0)){
		var canvas=document.getElementById("undoDraw");
		canvas.setAttribute("width", sW);
		canvas.setAttribute("height", sH);
		canvas=document.getElementById(curCanvas);
		var draw=canvas.getContext("2d");
		canvas.style.position = "fixed";
		canvas.setAttribute("width", sW);
		canvas.setAttribute("height", sH);
		if(active==0){
			var div,xto,yto,height,perc,ySet,parentClass;
			for(x=0;x<divs.length;x++){
				div='#'+divs[x];
				parentClass=$(div).parent();
				height=$(parentClass).height();
				$(parentClass).css({top:0});
				$('.optionButton').css({"font-size":"140%"});
			}
			if(touchList.length > 0){
				mobile=1;
				touchCheck=1;
				toggleSlideMenu(0);
				setActive();
			}
		}
		active=1;
	}
	dragCount=0;
	dragging=1;
	touchUndo=0;
	if(dispStats==1){
		$("#dragClick").html(dragging);
	}
	touchChecker=4;
	if(mobile==0){ e.preventDefault(); }

	var touch = touchList[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;
	origX = mouseX;
	origY = mouseY;
	origDiaScroll=$("#mobileMenu").scrollTop();
	var slideWidth=sW-$("#slideOptions").width();
	var slideHeight=sH-$("#slideOptions").height();
	if(touchCheck==1 && dialogueOpen==1 && openDialogue != ""){
		runSlider();
		
		var diaPads=$("#"+openDialogue+"Dialogue").position();
		var leftPad=diaPads.left;
		var topPad=diaPads.top;
		var diaWidth=$("#"+openDialogue+"Dialogue").width();
		var diaHeight=$("#"+openDialogue+"Dialogue").height();
		if( ( openDialogue == "mobileMenu" && (mouseX<leftPad || mouseX>(leftPad+diaWidth)) ) || ( openDialogue != "mobileMenu" && (mouseX<leftPad || mouseX>(leftPad+diaWidth) || mouseY<topPad || mouseY>(topPad+diaHeight)) ) ){
			touchCheckMenuClose=1;
		}
	}else{
		touchCheckMenuClose=0;
	}
	/*if(mouseX>slideWidth && mouseY>slideHeight && touchCheck==1 && dialogueOpen==0){
		dialogueOption(1, 'mobileMenu');
	}*/
	
	
	dragPos=[touch.pageX,touch.pageY, touch.pageX,touch.pageY, touch.pageX,touch.pageY];
	
	if(dispStats==1){
		$("#dragCount").html(dragCount);
	}

	try{ document.getElementById("imbixBot").style.visibility="hidden";
	document.getElementById("activatedImbix").style.visibility="hidden";
	//document.getElementById("drawOptions").style.visibility="visible";
	document.getElementById("mouseDraw").style.visibility="hidden"; }catch(err){}
	if(clearDrawing==1){
		clearScreen(curCanvas);
		clearScreen("curDraw");
	}
}
function doDragTouch(e){
	var touch=[1];
	try{
		touch = e.touches[0]; // This will fail
		mouseX = touch.pageX;
		mouseY = touch.pageY;
		touch = e.touches; // This wont fail
	}catch(err){}	
	zoomMouseX=mouseX;
	zoomMouseY=mouseY;
	if(dispStats==1){
		$('#dragXDiv').html(mouseX);
		$('#dragYDiv').html(mouseY);
	}
	if(touch.length==2 && dragCount==0){
		touchUndo=1;
	}
	if(mobile==0){ e.preventDefault(); }
	dragTouch(e);
}
function dragTouch(e){
	if(dialogueOpen==0 && geoTool==0){
		if(dragCount>3){
			touchUndo=0;
		}
		doTouch("curDraw",curCanvas,"pastDraw","undoDraw",1);
	}else if(dialogueOpen==0 && geoTool==1){
		dragging=1;
		doGeoDraw("curDraw",0);
	}else{
		scrollMenu(e);
	}
}
function scrollMenu(e){
	try{
		var touch = e.touches[0];
		dragPos[0] = touch.pageX;
		dragPos[1] = touch.pageY;
	}catch(err){
		dragPos[0] = mouseX;
		dragPos[1] = mouseY;
	}
	if(dialogueOpen==1){
		var moveX=origX-dragPos[0];
		var moveY=origY-dragPos[1];
		if( ((Math.abs(moveY)>15 && lockMenuScroll==0) || lockMenuScroll==2) && openDialogue == "mobileMenu" ){
			touchCheckMenuClose=0;
			lockMenuScroll=2;
			moveY=moveY+(moveY/Math.abs(moveY))*15;
			var scrollVal=Math.max(0,origDiaScroll+moveY*2.7);
			$("#mobileMenu").scrollTop(scrollVal);
			if( sliderTouch == 1){
				displayTouchSlider(0,[-1]);
			}
		}
		if(((Math.abs(moveX)>10 && lockMenuScroll==0) || lockMenuScroll==1) && openDialogue == "mobileMenu" ){
			lockMenuScroll=1;
			runSlider();
		}
	}
}
function endTouch(e) {
	if(mobile==0){ e.preventDefault(); }
	var evaler='';
	var hit=0;
	//if((mouseX<leftPad || mouseX>(leftPad+diaWidth))){// && touchCheckMenuClose==1 && lockMenuScroll==0){
	if(touchCheckMenuClose==1 && lockMenuScroll==0){
		if(openDialogue == "mobileMenu" ){
			dialogueOption(0, openDialogue);
			hit=1;
		}else{
			acceptButton=$("#"+openDialogue).find('.buttonDia');
			if(acceptButton.length>0){
				for(var x=0; x<acceptButton.length;++x){
					if($(acceptButton[x]).attr('action')=='accept'){
						eval($(acceptButton[x]).attr("onclick"));
						hit=1;
						break;
					}
				}
			}
		}
	}
	if(hit==0){
		if(dialogueOpen==0){
			if(dragCount>3 && touchUndo==0){
				if(dragging==1){	
					undoOption(1);
					var canvas=document.getElementById(curCanvas);
					var draw=canvas.getContext("2d");
					if(brushStyle==0){
						//undoOption(1);
						movePast("curDraw",curCanvas,parseFloat($("#be"+diaVal+"_effectPercent_val").val()),compMethod,1);
					}
					clearScreen("curDraw");
					dragging=0;
				}
			}else if(touchUndo==1){
				if(dragging==1){
					undoOption(0);
					touchUndo=0;
					dragging=0;
				}
			}
		}else{
			var moveY=origY-mouseY;
			if(Math.abs(moveY)<15 && touchAction=='' && lockMenuScroll!=2){
				evaler=runButton();
			}
			if(lockMenuScroll==1){
				if(lockMenuScrollDiv=='slDia_red' || lockMenuScrollDiv=='slDia_green' || lockMenuScrollDiv=='slDia_blue'){
					$('#cs_red_val').val(parseInt($('#slDia_red_val').val()));
					$('#cs_green_val').val(parseInt($('#slDia_green_val').val()));
					$('#cs_blue_val').val(parseInt($('#slDia_blue_val').val()));
				}else if(lockMenuScrollDiv=='slDia_random'){
					$('#cs_random_val').val(parseInt($('#slDia_random_val').val()));
				}else if(lockMenuScrollDiv=='beDia_effectPercent'){
					setDrawAlpha(0);
				}
			}
		}
		
		if( sliderTouch == 1){
			displayTouchSlider(0,[-1]);
		}
		if(evaler!=''){
			eval(evaler);
		}
	}
	lockMenuScroll=0;
	lockMenuScrollDiv='';
	dragging=0;
	lastMag=1;
	touchAction="";
}

function runSlider(){  // Restricted to only Mobile Menu
	var sliderText,sliderValInput,sliderVal,sliderMin,sliderMax,perc;
	if(dragging>0 && openDialogue=='mobileMenu'){
		if(lockMenuScrollDiv==''){
			buttons=$("#"+openDialogue).find(".sliderDia");
			for(i=0;i<buttons.length;i++){
				button=buttons[i];
				bx=$(button).offset().left;
				by=$(button).offset().top;
				bw=$(button).width();
				bh=$(button).height();
				ox=bx+bw;
				oy=by+bh;
				if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
					lockMenuScrollDiv=$(button).attr('id');
					sliderText=$(button).find(".sliderText");
					sliderText=$(sliderText[0]).text();
					sliderValInput=$(button).find(".sliderValue");
					sliderValInput=sliderValInput[0];
					sliderVal=parseFloat($(sliderValInput).val());
					sliderOrigVal=sliderVal;
					sliderMin=parseFloat($(sliderValInput).attr('min'));
					sliderMax=parseFloat($(sliderValInput).attr('max'));
					perc=(sliderVal-sliderMin) / (sliderMax-sliderMin);
					
					$("#floatPanel_mobileSlider_val").attr({'min':sliderMin,'max':sliderMax});
					$("#floatPanel_mobileSlider_val").val(sliderVal);
					$("#floatPanel_mobileSlider").attr({'min':sliderMin,'max':sliderMax,'val':sliderVal});

					
					displayTouchSlider(1,[1,sliderText,sliderVal,perc]);
					setSlideControl(lockMenuScrollDiv,'');
					break;
				}
			}
		}else{
			sliderValInput=$("#"+lockMenuScrollDiv+"_val");
			
			sliderMin=parseFloat($(sliderValInput).attr('min'));
			sliderMax=parseFloat($(sliderValInput).attr('max'));
			sliderVal=sliderOrigVal+((mouseX-origX)/(origSW/2.5))*sliderMax;
			sliderVal=Math.min(sliderMax, Math.max(sliderMin, sliderVal) );
			perc=(sliderVal-sliderMin) / (sliderMax-sliderMin);
			
			$("#"+lockMenuScrollDiv+"_val").val(sliderVal);
			setSlideControl(lockMenuScrollDiv,'');
			$("#floatPanel_mobileSlider").attr('val',sliderVal);
			displayTouchSlider(1,[0,'',sliderVal,perc]);
		}
	}
	//dragging=0;
}


function runButton(){
//	if(dragging>0){
		var buttons,bx,by,bw,bh,ox,oy,button;
		var hit=0;
		var evaler='';
		if(openDialogue=='mobileMenu'){
			buttons=$("#"+openDialogue).find(".pickBoxMobile");
			button=buttons[0];
			bx=$(button).offset().left;
			by=$(button).offset().top;
			bw=$(button).width();
			bh=$(button).height();
			ox=bx+bw;
			oy=by+bh;
			if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
				hit=1;
			}
		}
		if(hit==1){
			buttons=$("#colorPickerDialogue").find(".slideSwatch");
			for(i=0;i<buttons.length;i++){
				button=buttons[i];
				bx=$(button).offset().left;//+$(button).parent().offset().left-60;
				by=$(button).offset().top;//+$(button).parent().offset().top;
				bw=$(button).width();
				bh=$(button).height();
				ox=bx+bw;
				oy=by+bh;
				if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
					touchAction="swatch";
					//dialogueOption(0, openDialogue);
					evaler=$(button).attr("onClick");
					break;
				}
			}
		}else{
			if(openDialogue=='mobileMenu'){
				button=$("#colorMethodDia_comp").parent();
				bx=$(button).offset().left;
				by=$(button).offset().top;
				bw=$(button).width();
				bh=$(button).height();
				ox=bx+bw;
				oy=by+bh;
				if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
					//$("#colorMethodDia_comp").focusin();
					//$("#colorMethodDia_comp").focus();
					menuPulldown(1,'colorMethodDia_comp');
					hit=1;
				}
				if(hit==0){
					buttons=$("#"+openDialogue).find(".sliderDia");
					for(i=0;i<buttons.length;i++){
						button=buttons[i];
						bx=$(button).offset().left;
						by=$(button).offset().top;
						bw=$(button).width();
						bh=$(button).height();
						ox=bx+bw;
						oy=by+bh;
						if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
							var sliderText=$(button).find(".sliderText");
							sliderText=$(sliderText[0]).text();
							var sliderVal=$(button).find(".sliderValue");
							sliderVal=$(sliderVal[0]).val();
							//if($(button).attr("dia")!=1){
							//	dialogueOption(0, openDialogue);
							//}
							//eval($(button).attr("onClick"));
							//eval($(button).attr("onmouseup"));
							//buttonSetMode($(button).attr('id'), 1);
							//displayTouchSlider(1,[1,sliderText,sliderVal])
							break;
						}
					}
				}
			}
			if(hit==0){
				if(openDialogue=='saveDrawing'){
					buttons=$("#"+openDialogue).find(".imgDls");
					for(i=0;i<buttons.length;i++){
						button=buttons[i];
						bx=$(button).offset().left;
						by=$(button).offset().top;
						bw=560;//$(button).parent().width();
						bh=160;//$(button).parent().height();
						ox=bx+bw;
						oy=by+bh;
						if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
							evaler=$(button).attr("onClick");
							hit=1;
							break;
						}
					}
				}
				if(hit==0){
					buttons=$("#"+openDialogue).find(".buttonDia");
					for(i=0;i<buttons.length;i++){
						button=buttons[i];
						bx=$(button).offset().left;
						by=$(button).offset().top;
						bw=$(button).width();
						bh=$(button).height();
						ox=bx+bw;
						oy=by+bh;
						if(mouseX<ox && mouseX>bx && mouseY<oy && mouseY>by){
							touchAction="button";
							//if($(button).attr("dia")!=1){
							//	dialogueOption(0, openDialogue);
							//}
							evaler=$(button).attr("onClick");
							if(parseInt($(button).attr('grp'))>-1){
								eval($(button).attr("onmouseup"));
								changeMode($(button).attr('id'),$(button).attr('tgl'),$(button).attr('grp'));
								//buttonSetMode($(button).attr('id'), 1);
								var curChildren=$(button).children();
								var bDiv=$(curChildren[1]).attr('id');
								var bCam=$(curChildren[0]).attr('id');
								bevelShape(bDiv,1,0,bCam,.8,10,3,1,0,2,0,2,0,1);
							}
							break;
						}
					}
				}
			}
		}
	return evaler;
//	}
	//dragging=0;
}
