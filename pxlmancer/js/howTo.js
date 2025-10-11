//All of the help information
function initHelp(){
	howToActive=1;
	howTo_genCursor(1);
	howTo_genCloseButton(1,1);
	menuVis(0,0);
	clearScreen(curCanvas);
	clearScreen("curDraw");
}
	//var curTime=parseInt($("#howTo_data_curTime").val());
	//var nextState=parseInt($("#howTo_data_nextState").val());
function howTo_init(msgLvl,cnt,dispTime){
	msgLvl=parseInt(msgLvl);
	var activeState=0;
	var curState=parseInt($("#howTo_data_curState").val());
	if(howToActive==1 && curState==activeState){
		switch(msgLvl){
			case 0:
				msgLvl+=1;
				eval($("#barMenu_sweep").attr('onclick'));
				eval($("#barMenu_sweep").attr('onmouseup'));
				eval($("#barMenu_noMirror").attr('onclick'));
				eval($("#barMenu_noMirror").attr('onmouseup'));
				howToMouseAnim=[];
				howToMouseAnim.push([[origSW*.35,origSH*.6, origSW*.5,origSH*.55, origSW*.65,origSH*.6],["dragPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];trailPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];$('#howTo_data_draw').val(1);","$('#howTo_data_draw').val(0);"]]);
				howToCurrentPrompt=tempWindow('<b>Welcome to Pixelmancer</b>',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 1:
				msgLvl+=1;
				eval($("#barMenu_line").attr('onclick'));
				eval($("#barMenu_line").attr('onmouseup'));
				eval($("#barMenu_xyMirror").attr('onclick'));
				eval($("#barMenu_xyMirror").attr('onmouseup'));
				clearScreen("curDraw");
				howToMouseAnim=[];
				howToMouseAnim.push([[origSW*.5,origSH*.75],[""]]);
				howToMouseAnim.push([[origSW*.35,origSH*.7],[""]]);
				howToCurrentPrompt=tempWindow('Click "<b>[X] Quit How To</b>" or press [ <b>R</b> ] to quit the <b>How To...</b>',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 2:
				msgLvl+=1;
				eval($("#barMenu_line").attr('onclick'));
				eval($("#barMenu_line").attr('onmouseup'));
				eval($("#barMenu_xyMirror").attr('onclick'));
				eval($("#barMenu_xyMirror").attr('onmouseup'));
				clearScreen("curDraw");
				howToMouseAnim=[];
				howToMouseAnim.push([[origSW*.45,origSH*.6],["dragPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];trailPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];$('#howTo_data_drawhowTo_data_draw').val(1);"]]);
				howToMouseAnim.push([[origSW*.65,origSH*.6],["$('#howTo_data_draw').val(0);"]]);
				howToCurrentPrompt=tempWindow('Sit back and relax while I show you around.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			default:
				if(cnt==1){
					howTo_mouse(0,1);
				}
			}
	}
}
function howTo_mouse(msgLvl,cnt,dispTime){
	msgLvl=parseInt(msgLvl);
	var activeState=1;
	var curState=parseInt($("#howTo_data_curState").val());
	if(parseInt($('#howTo_data_draw').val())==0){
		dragPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];
		trailPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];
		eval($("#barMenu_line").attr('onclick'));
		eval($("#barMenu_line").attr('onmouseup'));
		eval($("#barMenu_xyMirror").attr('onclick'));
		eval($("#barMenu_xyMirror").attr('onmouseup'));
	}
	$('#howTo_data_draw').val(0);
	if(howToActive==1 && curState==activeState){
		switch(msgLvl){
			case 0:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('<b>Using your mouse</b>',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 1:
				msgLvl+=1;
				$('#howTo_data_draw').val(1);
				howToCurrentPrompt=tempWindow('<b>Left click</b> and drag to draw.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 2:
				msgLvl+=1;
				$('#howTo_data_draw').val(0);
				compMethod="source-over";
				movePast("curDraw",curCanvas,1,compMethod,1);
				clearScreen("curDraw");
				updateLayerCanvas(curLayer);
				howToCurrentPrompt=tempWindow('<b>Middle mouse wheel click</b> and drag to pan around the document.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 3:
				msgLvl+=1;
				var toPos=[( sW*.4 ),( sH*.3 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["storeKeyHold=1;dialogueOpen=1;menuVis(0,2);moveLayers(0,1);"]]);
				toPos=[( sW*.65 ),( sH*.40 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( sW*.35 ),( sH*.55 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],["dClick=0;storeKeyHold=0;dialogueOpen=0;menuVis(1,2);"]]);
				break;
			case 4:
				msgLvl+=1;
				$('#howTo_data_draw').val(0);
				howToCurrentPrompt=tempWindow('Double <b>Middle mouse wheel click</b> to reset the pan.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 5:
				msgLvl+=1;
				var toPos=[( sW*.5 ),( sH*.6 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#documentLayers').attr('doubleMove',1);moveLayers(0,1);$('#documentLayers').attr('doubleMove',0);"]]);
				break;
			case 6:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('<b>Mouse wheel</b> up & down to change brush size.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 7:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('<b>Right click</b> and drag to zoom.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 8:
				msgLvl+=1;
				var toPos=[( sW*.55 ),( sH*.4 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["storeKeyHold=1;dialogueOpen=1;menuVis(0,2);zoomLayers(0,0,1);"]]);
				toPos=[( sW*.75 ),( sH*.45 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( sW*.35 ),( sH*.35 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],["dClick=0;storeKeyHold=0;dialogueOpen=0;menuVis(1,2);"]]);
				break;
			case 9:
				msgLvl+=1;
				var bgResPos=$("#scaler_res").offset();
				var bgResSize=[$("#scaler_res").width(),$("#scaler_res").height()];
				var toPos=[( bgResPos.left+bgResSize[0]/2 ),( bgResPos.top+30 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#howTo_data_hold').val(1);"]]);
				howToCurrentPrompt=tempWindow('While we are here, click the numbers to resize the resolution of your document.',['scaler_res','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 10:
				msgLvl+=1;
				
				var bgResPos=$("#scaler_res").offset();
				var bgResSize=[$("#scaler_res").width(),$("#scaler_res").height()];
				var toPos=[( bgResPos.left+bgResSize[0]/2 ),( bgResPos.top+30 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#howTo_data_hold').val(1)"]]);
				howToCurrentPrompt=tempWindow('<b>Tile</b> will tile your document live while you edit.<br>Great for designing patterns and tiles for games.',['scaler_res','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 11:
				msgLvl+=1;
				$('#howTo_data_hold').val(0);
				howToCurrentPrompt=tempWindow('Double <b>Right click</b> to reset the zoom & pan.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 12:
				msgLvl+=1;
				var toPos=[( sW*.5 ),( sH*.6 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#documentLayers').attr('doubleTouch',1);zoomLayers(0,0,1);dClick=0;$('#documentLayers').attr('doubleTouch',0);"]]);
				break;
			default:
				if(cnt==1){
					howTo_layers(0,1);
				}
			}
	}
}
function howTo_layers(msgLvl,cnt,dispTime){
	msgLvl=parseInt(msgLvl);
	var activeState=2;
	var curState=parseInt($("#howTo_data_curState").val());
	$('#howTo_data_draw').val(0);
	if(howToActive==1 && curState==activeState){
		if(msgLvl<=6){
			$("#layersWindow").css({'top':0});
		}
		switch(msgLvl){
			case 0:
				msgLvl+=1;
				clearScreen('curDraw');
				clearScreen(curCanvas);
				updateLayerCanvas(curLayer);
				eval($("#barMenu_line").attr('onclick'));
				eval($("#barMenu_line").attr('onmouseup'));
				eval($("#barMenu_xyMirror").attr('onclick'));
				eval($("#barMenu_xyMirror").attr('onmouseup'));
				
				var bgLayerPos=$("#layersWindow").offset();
				var bgLayerSize=[$("#layersWindow").width(),$("#layersWindow").height()];
				var toPos=[( bgLayerPos.left+bgLayerSize[0]+10 ),( bgLayerPos.top+bgLayerSize[1]/2 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#howTo_data_hold').val(1)"]]);
				howToCurrentPrompt=tempWindow('This is the <b>Layers</b> window.',['layersWindow','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 1:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Drag a layer to reorder it.',['layersWindow','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 2:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Press [ <b>N</b> ] to make a new layer,<br> and [ <b>D</b> ] to duplicate your current layer.',['layersWindow','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 3:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Press [ <b>H</b> ] to hide the current layer,<br> and [ <b>M</b> ] to use the layer like a mask.',['layersWindow','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 4:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Double click layers to edit the name and other settings',['layersWindow','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 5:
				msgLvl+=1;
				var bgLayerPos=$("#lwin_bgLayer").offset();
				var bgLayerSize=[$("#lwin_bgLayer").width(),$("#lwin_bgLayer").height()];
				var toPos=[( bgLayerPos.left+bgLayerSize[0]/2 ),( bgLayerPos.top+bgLayerSize[1]/2 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#howTo_data_hold').val(1)"]]);
				break;
			case 6:
				msgLvl+=1;
				howTo_mimicClick('lwin_bgLayer',1);
				howToCurrentPrompt=tempWindow('Double click the <b>Background</b> layer to edit the background.',['backgroundEditorDialogue','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 7:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('You can import images here, along with setting a background pattern or edit the back gradient.',['backgroundEditorDialogue','bottom'],"howToSkip=1;",dispTime,2,0,-1);	
				break;
			case 8:
				msgLvl+=1;
				$('#howTo_data_hold').val(0);
				var bgLayerPos=$("#editBGBack").offset();
				var bgLayerSize=[$("#editBGBack").width(),$("#editBGBack").height()];
				var toPos=[( bgLayerPos.left+bgLayerSize[0]/2 ),( bgLayerPos.top+bgLayerSize[1]/2 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["howTo_mimicClick('editBGBack',0)"]]);
				break;
			default:
				if(cnt==1){
					howTo_colorSphere(0,1);
				}
			}
	}
}
function howTo_colorSphere(msgLvl,cnt,dispTime){
	msgLvl=parseInt(msgLvl);
	var activeState=3;
	var curState=parseInt($("#howTo_data_curState").val());
	$('#howTo_data_draw').val(0);
	if(howToActive==1 && curState==activeState){
		visibilityColorSphere(1,0);
		$("#layersWindow").css({'top':-($("#lwin_footer").position().top)});
		switch(msgLvl){
			case 0:
				msgLvl+=1;
				var bgLayerPos=$("#colorSphere").offset();
				var bgLayerSize=[$("#colorSphere").width(),$("#colorSphere").height()];
				var toPos=[( bgLayerPos.left+bgLayerSize[0]+10 ),( bgLayerPos.top+bgLayerSize[1]*.2 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],["$('#howTo_data_hold').val(1)"]]);
				howToCurrentPrompt=tempWindow('This is the <b>Color Sphere</b>.',['colorSphere','top'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 1:
				msgLvl+=1;
				var bgLayerPos=$("#colorSphereCanvas").offset();
				var bgLayerSize=[$("#colorSphereCanvas").width(),$("#colorSphereCanvas").height()];
				var toPos=[( bgLayerPos.left+bgLayerSize[0]*.25 ),( bgLayerPos.top+bgLayerSize[1]*.85 )];
				howToMouseAnim=[];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				howToCurrentPrompt=tempWindow('Click in the sphere itself to pick a color,<br>Or set the sliders to a spcific color.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 2:
				msgLvl+=1;
				setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',1);
				break;
			case 3:
				msgLvl+=1;
				$('#howTo_data_hold').val(0);
				howToCurrentPrompt=tempWindow('The <b>Randomize</b> slider adds how much of an random offset your color draws.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 4:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Try clicking and dragging in the sphere.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 5:
				msgLvl+=1;
				var bgLayerPos=$("#colorSphereCanvas").offset();
				var bgLayerSize=[$("#colorSphereCanvas").width(),$("#colorSphereCanvas").height()];
				var toPos=[( bgLayerPos.left+bgLayerSize[0]*.55 ),( bgLayerPos.top+bgLayerSize[1]*.6 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],["colorBlend=1;"]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.50 ),( bgLayerPos.top+bgLayerSize[1]*.7 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.4 ),( bgLayerPos.top+bgLayerSize[1]*.4 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.75 ),( bgLayerPos.top+bgLayerSize[1]*.8 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.35 ),( bgLayerPos.top+bgLayerSize[1]*.3 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.5 ),( bgLayerPos.top+bgLayerSize[1]*.85 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.35 ),( bgLayerPos.top+bgLayerSize[1]*.4 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.95 ),( bgLayerPos.top+bgLayerSize[1]*.9 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.45 ),( bgLayerPos.top+bgLayerSize[1]*.55 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.7 ),( bgLayerPos.top+bgLayerSize[1]*.9 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.75 ),( bgLayerPos.top+bgLayerSize[1]*.4 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.5 ),( bgLayerPos.top+bgLayerSize[1]*.9 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.85 ),( bgLayerPos.top+bgLayerSize[1]*.4 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				toPos=[( bgLayerPos.left+bgLayerSize[0]*.45 ),( bgLayerPos.top+bgLayerSize[1]*.85 )];
				howToMouseAnim.push([[toPos[0],toPos[1]],[""]]);
				howTo_mimicClick('colorSphereCanvas',0);
				break;
			case 6:
				msgLvl+=1;
				colorBlend=2;
				$('#howTo_data_hold').val(0);
				howToCurrentPrompt=tempWindow('Notice how your current color is being mixed into the Color Sphere.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 7:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('If you want to record your sphere for later access,<br> you can hit [ <b>0</b> - <b>9</b> ] on the keyboard to store.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 8:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Hitting that number again, will load that sphere.<br>Hitting and holding will overwrite that number with the current sphere.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 9:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Hit [ <b>~</b> ] to go back to the red / green / blue Color Sphere.<br>Hold it down to change to an all white sphere.',['colorSphere','right'],"howToSkip=1;",dispTime,2,0,-1);
				break;
			default:
				if(cnt==1){
					howTo_barMenu(0,1);
				}
			}
	}
}
function howTo_barMenu(msgLvl,cnt,dispTime){
	msgLvl=parseInt(msgLvl);
	var activeState=4;
	var curState=parseInt($("#howTo_data_curState").val());
	var offX=origSW/2;
	var offY=origSH;
	for(x=0;x<divs.length;x++){
		div='#'+divs[x];
		var off=$(div).offset().top;
		if(off<offY){
			offY=off;
		}
	}
	offY=offY-50;
	$('#howTo_data_draw').val(0);
	if(howToActive==1 && curState==activeState){
		menuVis(1,0);
		visibilityColorSphere(0,0);
		$("#layersWindow").css({'top':-($("#lwin_footer").position().top)});
		switch(msgLvl){
			case 0:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Below is the <b>Bar Menu</b>.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 1:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('To switch to the mobile menu, go to <b>Options</b> <i>-&gt;</i> <b>Toggle Mobile Menu</b>.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 2:
				msgLvl+=1;
				howToMouseAnim=[];
				howToMouseAnim.push([[origSW*.15,origSH*.95, origSW*.5,origSH*.85, origSW*.9,origSH*.95],["",""]]);
				howToCurrentPrompt=tempWindow('Going near the menus will pop them up for you.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 3:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('If that starts getting annoying,<br> you can always press [ <b>spacebar</b> ] to hide or reveal the menus.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 4:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Notice when you click on different Drawing Tools and Filters,<br> the title will change color to show its status.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 5:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('For brushes, <span style=\'color:#ffcc88;font-weight:bold;\'>Orange</span> to indicate you are using a brush tool,<br> like Erase, Blur, Scatter...',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 6:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('When a title turns <span style=\'color:#99aaff;font-weight:bold;\'>Blue</span>,<br> it means you are effecting the colors (like Overlay, Multiply ...)<br>or that a filter is turned on.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 7:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Notice when you click on different brushes and filters,<br> the title will change color to show status.',[offX,offY],"howToSkip=1;",dispTime,2,0,-1);
				break;
			default:
				if(cnt==1){
					howTo_outro(0,1);
				}
			}
	}
}
function howTo_outro(msgLvl,cnt,dispTime){
	msgLvl=parseInt(msgLvl);
	var activeState=5;
	var curState=parseInt($("#howTo_data_curState").val());
	if(parseInt($('#howTo_data_draw').val())==0){
		dragPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];
		trailPos=[mouseX,mouseY,mouseX,mouseY,mouseX,mouseY];
		eval($("#barMenu_line").attr('onclick'));
		eval($("#barMenu_line").attr('onmouseup'));
		eval($("#barMenu_xyMirror").attr('onclick'));
		eval($("#barMenu_xyMirror").attr('onmouseup'));
		clearScreen("curDraw");
	}
	$('#howTo_data_draw').val(0);
	if(howToActive==1 && curState==activeState){
		switch(msgLvl){
			case 0:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('Check out the <b>Options</b> <i>-&gt;</i> <b>Keyboard Shortcut</b> menu for hotkeys.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 1:
				msgLvl+=1;
				howToCurrentPrompt=tempWindow('If anything starts acting funny, press <b>R</b> to fix any issues that might arrise.',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				break;
			case 2:
				msgLvl+=1;
				howToMouseAnim=[];
				howToMouseAnim.push([[origSW*.5,origSH*1.3],["$('#howTo_data_hold').val(1)"]]);
				howToCurrentPrompt=tempWindow('If you have any suggestions, feel free to contact me!<div align=\'center\'><b>Options</b> <i>-&gt;</i> <b>Contact Me</b></div>',[-1,-1],"howToSkip=1;",dispTime,2,0,-1);
				$('#cs_red_val').val('-3');
				$('#cs_green_val').val('-3');
				$('#cs_blue_val').val('-3');
				setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);
				resetColorSphere('colorSphereCanvas',0,1);
				break;
			default:
				howToActive=0;
				$('#howToBuild').html('');
				$('#howToBuild').css({'left':-100,'zIndex':-500});
				howTo_genCloseButton(0,0);
				menuVis(1,1);
				break;
			}
	}
}

////////////////////////////////////////////////////
function drawCursor(div,canvas,alpha){ //Button shapes
	var R,G,B,A;
	var width=$('#'+div).width();
	var height=$('#'+div).height();
	var controls=document.getElementById(canvas);
	var draw=controls.getContext('2d');

	R=100;
	G=130;
	B=150;
	var hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	var fillColor=hex;
	clearScreen(canvas);	

	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.fillStyle=fillColor;
	draw.moveTo(25,25);
	draw.lineTo(37,41);
	draw.lineTo(31.5,49);
	draw.lineTo(25,43);
	draw.lineTo(25,25);
	draw.closePath();
	draw.fill();
	R=75;
	G=95;
	B=100;
	hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	draw.strokeStyle=hex;
	mag=1.5;
	draw.lineWidth=mag;
	draw.lineJoin = 'miter';
	draw.stroke();
	draw.beginPath();
	draw.strokeStyle=strokeColor;
	mag=.7;
	draw.lineWidth=mag;
	draw.moveTo(24.5,(43.5-25)*.75+25);
	draw.lineTo(24,23);
	draw.lineTo(((38.5-24)*.75+24),((41.5-23)*.75+23));
	draw.lineJoin = 'miter';
	draw.strokeStyle="#000000";
	draw.stroke();

	var noise=draw.getImageData(0,0,width,height);
	var pix = noise.data;
	var ii,x,y,math;
	for (var i=0; i<pix.length; i+=4) {
		ii=i+15;	
		x=(i/4)%width;
		y=Math.floor((i/4)/width);
		math=Math.min(1,Math.sqrt( (x-25)*(x-25) + (y-25)*(y-25) )/25);
		R=(Math.sin( (((ii/4)%width)/width) *4+66-ii) + Math.cos( (((ii/4)%width)/width) *3+66)/2 + Math.cos( (((ii/4)%width)/width) *5+126+ii)/2  )/4+.75;
		G=(Math.sin( (((ii/4)%width)/width) *3+744+ii) + Math.cos( (((ii/4)%width)/width) *5+66+ii)/2 + Math.cos( (((ii/4)%width)/width) *6+4626)/2  )/4+.75;
		B=(Math.sin( (((ii/4)%width)/width) *3+536+ii) + Math.cos( (((ii/4)%width)/width) *4+66)/2 + Math.cos( (((ii/4)%width)/width) *12+757+ii)/2  )/4+.75;
		A=(R+B+G)/2;
		
		//R=(R*1.1)*(math)+(1-math);
		//G=(G*1.3)*(math)+(1-math);
		//B=(B*1.1)*(math)+(1-math);
		A=(A*1.5)*(math)+(1-math);
		
		pix[i]=pix[i]*(R*1.1)*(math) + 180*(1-math);
		pix[i+1]=pix[i+1]*(G*1.3)*(math) + 255*(1-math);
		pix[i+2]=pix[i+2]*(B*1.1)*(math) + 200*(1-math);
		pix[i+3]=Math.min(255,pix[i+3]*A);
	}
	draw.putImageData(noise, 0, 0);

	return height;
}

function howTo_genCursor(runHowTo){
	var size=50;
	$('#howToBuild').css({'zIndex':15000,'height':size,'width':size,'position':'absolute','top':(sH/2-size/2)+'px','left':(sW/2-size/2)+'px','opacity':0,'filter':'alpha(opacity=0)'});
	var html="<canvas id='howTo_cursor' width='"+size+"px' height='"+size+"px'></canvas>";
	html+="<canvas id='howTo_cursorAnim' width='"+size+"px' height='"+size+"px' style='position:relative;top:-"+size+"px;z-index:1;'></canvas>";
	html+="<input type='text' value='0' id='howTo_data_curState' hidden>";
	html+="<input type='text' value='-1' id='howTo_data_curTime' hidden>";
	html+="<input type='text' value='1' id='howTo_data_nextState' hidden>";
	html+="<input type='text' value='0' id='howTo_data_drawSeed' hidden>";
	html+="<input type='text' value='-1' id='howTo_data_tmpVal' hidden>";
	html+="<input type='text' value='0' id='howTo_data_draw' hidden>";
	html+="<input type='text' value='-1' id='howTo_data_curTarget' hidden>";
	html+="<input type='text' value='-1' id='howTo_data_checkTarget' hidden>";
	html+="<input type='text' value='-1' id='howTo_data_fadeOut' hidden>";
	html+="<input type='text' value='0' id='howTo_data_hold' hidden>";
	$('#howToBuild').html(html);
	
	drawCursor("howToBuild","howTo_cursor",1);
	if(runHowTo==1){
		mouseX=origSW/2;
		mouseY=origSH;
		howTo_runCursor(-1,0,-1);
	}
}

function howTo_runCursor(run,click,times){
	run+=1;
	var tmpMX,tmpMY,math, perc,quadCurve,quadX,quadY;
	var states=['init','mouse','layers','colorSphere','barMenu','outro'];
	var popUpTimes={
			0 : [[50,1],[60,1],[65,1]],
			1 : [[50,1],[75,1],[90,1],[2,1],[90,1],[2,1],[80,1],[90,1],[90,1],[85,1],[95,1],[80,1],[2,1]],
			2 : [[50,1],[85,1],[85,1],[85,1],[45,1],[1,1],[80,1],[80,1],[3,1]],
			3 : [[50,1],[25,1],[2,1],[60,1],[80,1],[10,1],[90,1],[90,1],[100,1],[100,1]],
			4 : [[50,1],[85,1],[85,1],[85,1],[85,1],[90,1],[95,1],[95,1]],
			5 : [[70,1],[70,1],[45,1]]
		};
	if(times==-1){
		times=[];
		var counter=0;
		for(var x=0; x<states.length;++x){
			counter=0;
			for(var v=0; v<popUpTimes[x].length;++v){
				counter+=popUpTimes[x][v][0];
			}
			times.push(counter);
		}
	}
	var curState=parseInt($("#howTo_data_curState").val());
	var curTime=parseInt($("#howTo_data_curTime").val());
	var nextState=parseInt($("#howTo_data_nextState").val());
	var curTarget=parseInt($('#howTo_data_curTarget').val());
	if(howToMouseAnim.length == 0){
	//if(curTarget==-1){
		curTime+=1;
		perc=curTime/times[curState];
		if(howToSkip==1){
			howToSkip=0;
			perc=1;
		}
		if(perc>=1){
			perc=0;
			curState=nextState;
			curTime=-1;
			nextState=curState+1;
			if(nextState>states.length){
				howToActive=0;
				$('#howToBuild').html('');
				$('#howToBuild').css({'left':-100,'zIndex':-500});
				howTo_genCloseButton(0,0);
			}else{
				$("#howTo_data_curState").val(curState);
				$("#howTo_data_curTime").val(curTime);
				$("#howTo_data_nextState").val(nextState);
				$('#howTo_data_tmpVal').val('-1');
			}
		}
	}	
	var toPosCheck=[];
	var tolerance=5;
	var moveMax=20;
	var moveDiv=10;
	if(howToActive==1){
		$("#howTo_data_curTime").val(curTime);
		var drawSeed=parseFloat($('#howTo_data_drawSeed').val());
		if(howToMouseAnim.length > 0){
			var points=howToMouseAnim[0][0];
			if(points.length>2){
				if(curTarget == -1 || curTarget==0){
					curTarget=0;
					$('#howTo_data_curTarget').val(0);
					toPosCheck=[points[0],points[1]];
				}else{
					curTarget=1;
					$('#howTo_data_curTarget').val(1);
					quadCurve=findQCurve([points[0],points[1]], [points[2],points[3]], [points[4],points[5]]);

					quadX=mouseX;
					quadY=findQPoint(points[0],quadCurve[0],quadCurve[1],quadCurve[2]);
					toPosCheck=[points[4],quadY];
				}
				moveMax=20;
				moveDiv=15;
				tmpMX=Math.floor(toPosCheck[0]);
				tmpMY=Math.floor(toPosCheck[1]);
			}else{
				curTarget=1;
				$('#howTo_data_curTarget').val(1);
				toPosCheck=[points[0],points[1]];
				tmpMX=Math.floor(toPosCheck[0]);
				tmpMY=Math.floor(toPosCheck[1]);
			}
		}
			
		if(parseInt($("#howTo_data_hold").val())==0){
			if(curTarget==-1){
				if(curState<4){
					$('#howTo_data_drawSeed').val(drawSeed+Math.max(0,Math.sin(drawSeed/200+Math.sin(drawSeed/300))*2-1.5)+1 );
					tmpMX=origSW/2+Math.sin(mouseX/250+drawSeed/30+Math.sin(run/100+curState/30)+Math.cos(drawSeed/60+curState)*3)*(origSW*.15+origSW*.2*Math.sin(drawSeed/330+234.23));
					tmpMY=origSH/2+Math.cos(mouseY/200+drawSeed/30+Math.cos(drawSeed/70+curState/40)+Math.sin(run/100+curState)*3)*(origSH*.15+origSH*.2*Math.cos(drawSeed/250));

					if(curState==0){
						tmpMX+=Math.sin(run/30)*50;
						tmpMY+=Math.cos(run/30)*50;
					}
					if(curState==1){
						tmpMX+=Math.sin(run/30)*50;
						tmpMY+=100;
					}
					
				}else if(curState==4 || curState>=5){
					$('#howTo_data_drawSeed').val(drawSeed+1);
					tmpMX=origSW*.42+Math.sin(mouseX/250+drawSeed/30+Math.sin(run/100+curState/30)+Math.cos(drawSeed/60+curState)*3)*(origSW*.05*(origSW/origSH));
					tmpMY=origSH*.56+Math.cos(mouseY/200+drawSeed/30+Math.cos(drawSeed/70+curState/40)+Math.sin(run/100+curState)*3)*(origSH*.05*(origSW/origSH));
					tmpMX+=Math.sin(run/30)*50;
					tmpMY+=Math.cos(run/30)*50;
				}
			}
		}else{
			if(howToMouseAnim.length == 0){
				tmpMX=mouseX;
				tmpMY=mouseY;
			}
		}
			
		var dispPerc=popUpTimes[curState].length * perc;
		var disp=Math.floor(dispPerc);
		if(disp<popUpTimes[curState].length || run==0){
			var tmpWindow=parseInt($('#howTo_data_tmpVal').val());
			if(tmpWindow!=disp){
				$('#howTo_data_tmpVal').val(disp);
				eval("howTo_"+states[curState]+"("+disp+",1,"+popUpTimes[curState][disp][0]+");");
			}
		}
		
		if(run<15){
			var toPerc=1;
			if((run/15)<1){
				toPerc=Math.min(1,run/15);
				if(curState>0){
					toPerc=1-toPerc;
				}
				toPerc=Math.min(1,toPerc*2);
			}
			$('#howToBuild').css({'opacity':toPerc,'filter':'alpha(opacity='+(toPerc*100)+')'});
			tmpMX=tmpMX*toPerc+origSW/2*(1-toPerc);
			tmpMY=tmpMY*toPerc+origSH*(1-toPerc);
		}
		
		var tmpMouseX=Math.floor((mouseX*3+tmpMX)/4);
		var tmpMouseY=Math.floor((mouseY*3+tmpMY)/4);
		mouseX=Math.max(-Math.max(moveMax,(tmpMX-mouseX)/moveDiv),Math.min(Math.max(moveMax,(tmpMX-mouseX)/moveDiv),tmpMouseX-mouseX))+mouseX;
		mouseY=Math.max(-Math.max(moveMax,(tmpMY-mouseY)/moveDiv),Math.min(Math.max(moveMax,(tmpMY-mouseY)/moveDiv),tmpMouseY-mouseY))+mouseY;
		tmpMouseX=mouseX;
		tmpMouseY=mouseY;
		if(Math.abs(tmpMouseX-howToMouseX)<25 && Math.abs(tmpMouseY-howToMouseY)<25){
			var mDist=Math.sqrt( Math.pow( (tmpMouseX-howToMouseX) ,2), Math.pow( (tmpMouseY-howToMouseY) ,2))/Math.sqrt(25*25+25*25);
			mouseX=tmpMouseX+(tmpMouseX-howToMouseX)*(1-mDist)*.65;
			mouseY=tmpMouseY+(tmpMouseY-howToMouseY)*(1-mDist)*.65;
		}
		if(howToMouseAnim.length > 0 && toPosCheck.length>0){
			var math=Math.sqrt(Math.pow( (toPosCheck[0]-mouseX) ,2),Math.pow( (toPosCheck[1]-mouseY) ,2));
			if(math<tolerance){
				if(curTarget==0){
					if(curTarget != parseInt($('#howTo_data_checkTarget').val())){
						$('#howTo_data_checkTarget').val(curTarget);
						eval(howToMouseAnim[0][1][0]);
					}
					$('#howTo_data_curTarget').val(1);
				}else{
					eval(howToMouseAnim[0][1][howToMouseAnim[0][1].length-1]);
					$('#howTo_data_curTarget').val(-1);
					$('#howTo_data_checkTarget').val(-1);
					var tmpMouseAnim=howToMouseAnim;
					howToMouseAnim=[];
					for(var v=1; v<tmpMouseAnim.length;++v){ // Pop wasn't working as expected... Need to rebuild array instead.
						howToMouseAnim.push(tmpMouseAnim[v]);
					}
				}
			}
		}

		if(parseInt($('#howTo_data_draw').val())==1){
			dragging=1;
			zoomMouseX=mouseX;
			zoomMouseY=mouseY;
			doTouch("curDraw",curCanvas,"pastDraw","undoDraw",1);
		}
		menuVis(1,2);
		skipMenuSlide='';
		var size=$('#howToBuild').width();
		$('#howToBuild').css({'left':(mouseX-size/2+1)+'px','top':(mouseY-size/2+1)+'px'});
		setTimeout(function(){howTo_runCursor(run,click,times);},50);
	}else{
		$('#howToBuild').html('');
		$('#howToBuild').css({'left':-100,'zIndex':-500});
		reinitializeSettings(0);
	}
}
function howTo_mimicAnim(action,run){
	
}
function howTo_mimicClick(div, double){
	$('#howTo_data_hold').val(1);
	eval($('#'+div).attr('onmousedown'));
	setTimeout(function(){
		eval($('#'+div).attr('onclick'));
		eval($('#'+div).attr('onmouseup'));
		if(double==1){
			setTimeout(function(){
				howTo_mimicAnim('click',0);
				eval($('#'+div).attr('onmousedown'));
				setTimeout(function(){
					eval($('#'+div).attr('onclick'));
					eval($('#'+div).attr('onmouseup'));
				},50);
			},50);
		}
	},50);
}
function howTo_genCloseButton(val,disp){
	if(val==1){
		$("#floatingObjectsParent").css({"zIndex":1030,'visibility':'visible'});
		if(!$("#howTo_parent").length){
			var addPad=5;
			var addPadButton=10;
			button="floatingObjectsParent";
			divHeight=26+addPad;
			divWidth=202+addPad+addPadButton;
			
			var html="<div id='howTo_parent' style='position:fixed;z-index:1030;visibility:visible;'><div id='howTo_closeButton' style='position:relative;top:-2;left:-3;><table style='border:0px;width:200px;height:25px;'><tr valign='middle'>";
			html+="<td align='center' style='overflow:hidden;height:20px;'><div class='howToPromptButton' id='howToExitDiv' onClick='howTo_genCloseButton(0,1);' align='center' style='letter-spacing:3px;height:20px;font-size:90%;z-index:"+(2300+(geoPos.length/2))+";cursor:pointer;' >[X] Quit How To</div></td>";
			html+="</tr></table></div></div>";
			$("#"+button).append(html);
			$("#howTo_parent").css({'top':(origSH*.07),'right':(origSW*.12)});
			
			controlText=$("#howTo_closeButton").html();
			
			html="<canvas style='z-index:"+(1900)+";position:relative;cursor:default;' id='"+button+"_Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html+="<div style='color:#ffffff;cursor:default;position:relative;bottom:"+divHeight+";padding-top:"+(addPad/2)+"px;padding-left:"+(addPad/2)+"px;z-index:"+(1900+1)+";width:"+(divWidth)+";height:"+(divHeight)+";text-shadow:2px 2px 3px black;' id='"+button+"_Div'>"+controlText+"</div>";
			$("#howTo_closeButton").html(html);
			$("#howTo_closeButton").width(divWidth);
			$("#howTo_closeButton").height(divHeight);
			height=bevelShape((button+"_Div"),0,0,(button+"_Canvas"),.90,7,2,1,1,1,1,1,0,0);
			
			var buttons=$("#howTo_closeButton").find('.howToPromptButton');
			for(var x=0;x<buttons.length; x++){
				button=$(buttons[x]).attr('id');
				divHeight=$("#"+button).height()+addPad;
				divWidth=$("#"+button).width()-addPadButton;
				//divWidth=$("#"+button).width();
				$("#"+button).width(divWidth);
				$("#"+button).height(divHeight);
				$("#"+button).parent().width(divWidth);
				$("#"+button).parent().parent().width(divWidth);
				$("#"+button).parent().height(divHeight);
				controlText=$("#"+button).parent().html();
				
				html="<canvas style='z-index:"+(2000+x)+";position:relative;cursor:default;' id='"+button+"_Canvas' onClick='"+$('#'+button).attr('onClick')+"' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
				html+="<div style='color:#ffffff;cursor:pointer;position:relative;bottom:"+(divHeight)+";padding-top:"+(addPad/2)+"px;padding-left:"+(addPad)+"px;z-index:"+(2000+1+x)+";width:"+(divWidth)+";height:"+(divHeight)+";text-shadow:2px 2px 3px black;' id='"+button+"_Div'>"+controlText+"</div>";
				$("#"+button).parent().html(html);
				$("#"+button).css({'height':divHeight+addPad,'width':divWidth});
				$("#"+button).parent().parent().css({'top':parseInt($("#"+button).parent().parent().css('top'))+1+'px','left':'2px'});
				$("#"+button).attr("onMouseOver","bevelShape(('"+button+"_Div'),0,0,('"+button+"_Canvas'),.9,5,3,1,1,1,1,1,1,0);");
				$("#"+button).attr("onMouseDown","bevelShape(('"+button+"_Div'),0,0,('"+button+"_Canvas'),.9,5,3,1,1,1,1,1,2,0);");
				$("#"+button).attr("onMouseUp","bevelShape(('"+button+"_Div'),0,0,('"+button+"_Canvas'),.9,5,3,1,1,1,1,1,1,0);");
				$("#"+button).attr("onMouseOut", "bevelShape(('"+button+"_Div'),0,0,('"+button+"_Canvas'),.9,5,3,1,1,1,1,1,0,0);");
				eval($("#"+button).attr("onMouseOut"));
			}
		}else{
			$("#howTo_parent").css({"zIndex":1030,'visibility':'visible'});
		}
	}else{
		if($("#howTo_parent").length){
			//$("#howTo_closeButton").remove();
			$("#howTo_parent").css({"zIndex":-510,'visibility':'hidden'});
		}
		$("#floatingObjectsParent").css({"zIndex":-510,'visibility':'hidden'});
		reinitializeSettings(disp);
	}
}
