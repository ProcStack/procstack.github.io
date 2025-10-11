// Most functions for the color sphere are located here
// There are a couple other functions not here, you'll need to locate them via errors in the javascript console
// <style>
//	.colorSphere{
//		opacity:1;
//		filter:alpha(opacity=100);
//		position:absolute;
//		top:0px;
//		left:0px;
//		height:10px;
//		width:10px;
//		overflow:hidden;
//		z-index:-9;
//		user-select:none;
//		-moz-user-select: none;
//		-webkit-user-select: none;
//		-ms-user-select: none;
//	}
// </style>
// <body onLoad="buildColorSphere();">
// <div id="colorSphere" class="colorSphere">&nbsp;</div>

function buildColorSphere(){
	
	var R,G,B,A;
	var x,y,mather,magr,magg,magb,magw,magbl, wW,wH;
	var csDiv=$("#colorSphere");
	var cWidth=224;
	var cHeight=290;
	var sWidth=180;
	var sHeight=150;
	var canvas="colorSphereCanvas";
	var blendCanvas="colorSphereBlendCanvas";
	var html="";
	if(mobile==0){
		$(csDiv).css({'height':cHeight+'px','width':cWidth+'px','left':'0px','bottom':'0px','zIndex':-3000,'visibility':'hidden'});
		$(csDiv).attr('bottomOrig', 34);
		$(csDiv).attr('widthOrig', (cWidth));
		$(csDiv).attr('vis', 1);
		$(csDiv).attr('curVis', 1);
		$(csDiv).attr('onMouseOut', "geoToolStopDraw=0;$('#hoverColor_colorSphereDiv').css('visibility','hidden');");
		$(csDiv).attr('onMouseOver', "geoToolStopDraw=1;$('#hoverColor_colorSphereDiv').css('visibility','visible');");
		//Color Sphere
		html="<div topOrig='"+(cHeight-sHeight)+"' style='z-index:5;overflow:hidden;position:relative;left:0px;top:"+(cHeight-sHeight)+"px;' id='colorSphereDiv' height='"+sHeight+"' width='"+sWidth+"'>\n";
		html+="<canvas id='"+canvas+"' height='"+sHeight+"' width='"+sWidth+"'></canvas></div>\n";
		// Selected/Hover color while over top of the color sphere
		wW=sWidth/1.3;
		wH=sHeight*.8;
		//Hover color
		html+="<div topOrig='"+(5)+"' leftOrig='"+(sWidth/2-15)+"' style='z-index:2;overflow:hidden;position:relative;left:"+(sWidth/2-15)+"px;top:"+5+"px;' id='hoverColor_colorSphereDiv' height='"+wH+"' width='"+wW+"'>\n";
		html+="<canvas id='hoverColor_"+canvas+"' height='"+wH+"' width='"+wW+"'></canvas></div>\n";
		// Current color - displayed behind RGBA sliders
		wW=sWidth/2;
		wH=sHeight;
		//Current color
		html+="<div topOrig='"+(-sHeight*1.795)+"' style='z-index:3;overflow:hidden;position:relative;left:0px;top:"+(-sHeight*1.795)+"px;' id='curColor_colorSphereDiv' height='"+wH+"' width='"+wW+"'>\n";
		html+="<canvas id='curColor_"+canvas+"' height='"+wH+"' width='"+wW+"'></canvas></div>\n";

		//html+="<div style='z-index:4;overflow:hidden;position:relative;top:"+(-sHeight*1.795)+"px;' id='curColor_colorSphereDiv' height='"+wH+"' width='"+wW+"'></div>\n";
		var csSliderWidth=150;
		var custFlags="leftPad='4' rightPad='"+(csSliderWidth+20)+"'";
		var css="style='color:#ffa090;width:"+csSliderWidth+"px;text-shadow:2px 2px 3px black;'";
		html+="<div id='csSliderParent' bottomOrig='"+(sHeight*2.5)+"' style='z-index:4;position:relative;bottom:"+sHeight*2.5+"px'>";
		html+="<div "+css+" "+custFlags+" class='cs_slider' id='cs_red' tgl='0' grp='-1' val='-3' min='0' max='255' steps='1'>Red</div>\n";
		css="style='color:#80ffa0;width:"+csSliderWidth+"px;text-shadow:2px 2px 3px black;'";
		html+="<div "+css+" "+custFlags+" class='cs_slider' id='cs_green' tgl='0' grp='-1' val='-3' min='0' max='255' steps='1'>Green</div>\n";
		css="style='color:#80a0ff;width:"+csSliderWidth+"px;text-shadow:2px 2px 3px black;'";
		html+="<div "+css+" "+custFlags+" class='cs_slider' id='cs_blue' tgl='0' grp='-1' val='-3' min='0' max='255' steps='1'>Blue</div>\n";
		css="style='color:#cccccc;width:"+csSliderWidth+"px;text-shadow:2px 2px 3px black;'";
		html+="<div "+css+" class='cs_spacer' tgl='0' grp='-3' >&nbsp;</div>\n";
		html+="<div "+css+" "+custFlags+" class='cs_slider' id='cs_random' tgl='0' grp='-1' val='0' min='0' max='255' steps='.01'>Randomize</div>\n";
		html+="<div style='font-size:80%;position:relative;bottom:13px;cursor:default;color:#dddddd;text-shadow:2px 2px 3px black;'><span>Random - </span> <span style='cursor:pointer;color:#ff4030;' onClick=\"$('#cs_red_val').val(-1);$('#cs_green_val').val(-1);$('#cs_blue_val').val(-1);setColorFromColorSphere('"+canvas+"','curColor_"+canvas+"',0);\">Red</span> - <span style='cursor:pointer;color:#20ff40;' onClick=\"$('#cs_red_val').val(-2);$('#cs_green_val').val(-2);$('#cs_blue_val').val(-2);setColorFromColorSphere('"+canvas+"','curColor_"+canvas+"',0);\">Green</span> - <span style='cursor:pointer;color:#3050ff;' onClick=\"$('#cs_red_val').val(-3);$('#cs_green_val').val(-3);$('#cs_blue_val').val(-3);setColorFromColorSphere('"+canvas+"','curColor_"+canvas+"',0);\">Blue</span></div>\n";
		html+="</div>\n";
		//html+="<div style='height:0;width:0;overflow:hidden;'>\n";
		//html+="<form><input type='hidden' value='-3' id='rVal'>\n";
		//html+="<input type='hidden' value='55' id='gVal'>\n";
		//html+="<input type='hidden' value='55' id='bVal'></form></div></div>\n";
		
		//Color Sphere Blend Canvas
		html+="<div bottomOrig='"+(sHeight*2.5+11)+"' style='z-index:-1;overflow:hidden;position:relative;left:0px;bottom:"+(sHeight*2.5+11)+"px;' id='blend_colorSphereDiv' height='"+sHeight+"' width='"+sWidth+"'>\n";
		html+="<canvas id='"+blendCanvas+"' height='"+sHeight+"' width='"+sWidth+"'></canvas></div>\n";
		
		//Toggle view
		html+="<div id='colorSphere_hideButton' style='height:24px;width:50px;position:relative;top:-"+(sHeight*4.5)+";z-index:5;cursor:row-resize;' onclick='visibilityColorSphere(0,1);'>&nbsp;</div>";

		//Sphere Presets
		html+="<div id='colorSphere_presets' style='position:fixed;bottom:0;left:182;z-index:5;'>&nbsp;</div>";

	}else{
		$(csDiv).css({'height':0+'px','width':0+'px','left':'0px','top':(sH+10)+'px','overflow':'hidden','zIndex':3000});
		html+="<div style='height:0;width:0;overflow:hidden;'>\n";
		html+="<form><input type='hidden' value='-3' id='cs_red_val'>\n";
		html+="<input type='hidden' value='55' id='cs_green_val'>\n";
		html+="<input type='hidden' value='55' id='cs_blue_val'>\n";
		html+="<input type='hidden' value='0' id='cs_random_val'></form></div>\n";
	}
	$(csDiv).html(html);
	if(mobile==0){
		$("#"+canvas).attr("onMouseOver","colorBlend=2;setHoverColorSphere('"+canvas+"','hoverColor_"+canvas+"');");
		$("#"+canvas).attr("onMouseDown","setFromToHover=1;if(colorBlend==2){sampleColorSphere('"+canvas+"',0);}else{blendColorSphere('"+canvas+"',0);}");
		//$("#"+canvas).attr("onMouseOut", "setFromToHover=0;");
		$("#"+blendCanvas).attr("onMouseDown","if(colorBlend==2){sampleColorSphere('"+canvas+"',0);}else{blendColorSphere('"+canvas+"',0);}");
		$("#"+blendCanvas).attr("onMouseUp","if(colorBlend==1){setColorFromColorSphere('"+canvas+"','curColor_"+canvas+"',1);};colorBlend=0;");
		//$("#"+canvas).attr("onMouseUp","if(colorBlend==0||colorBlend==2){setColorFromColorSphere('"+canvas+"','curColor_"+canvas+"',1);};");
		//Set start color
		updateColorSplash("curColor_"+canvas,[20,180,220],1,3,0,0);

		//Make Color Sphere
		resetColorSphere(canvas,0,1);
		
		// Build Sliders
		var buttons=$("#csSliderParent").children(".cs_slider");
		var button;
		offLeft=0;
		var buttonCount=0;
		for(i=0;i<buttons.length;i++){
			button=buttons[i];
			divHeight=$(button).height();
			divWidth=$(button).width();

			//$(button).attr('id', "sliderGen-"+x+"-"+i)
			divID=$(button).attr('id');
			curButton=divID+buttonCount+"_csSlider";
			slGrp=$(button).attr('grp');
			slTgl=$(button).attr('tgl');
			slVal=$(button).attr('val');
			slMin=$(button).attr('min');
			slMax=$(button).attr('max');
			slSteps=$(button).attr('steps');
			slTxtWidth=27;
			controlText=$(button).html();
			var edgeBuffer=3;
			// Inner Text
			html="<div align='left' style='position:relative;bottom:"+divHeight+";left:"+(slTxtWidth+edgeBuffer)+"px;z-index:2;' id='button"+curButton+"Div'>&nbsp;<span style='opacity:0.9;font-size:80%;'>"+controlText+"</span></div>\n";
			// Slider
			html=html+"<div style='opacity:0.5;height:"+divHeight+"px;width:"+(divWidth+2)+"px;overflow:hidden;position:relative;bottom:"+divHeight*2+";left:"+(slTxtWidth+edgeBuffer+3)+"px;z-index:1;'><div style='height:3px;width:"+(divWidth+10-slTxtWidth*2)+"px;overflow:hidden;position:relative;top:"+(divHeight/2-1)+"px;background-color:#628c8c;'>&nbsp;</div></div>";
			// Number Field
			html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+divHeight*3+";left:"+edgeBuffer+"px;z-index:3;'>";
			html=html+"<form id='"+divID+"_form'><input type='text' value='"+slVal+"' id='"+divID+"_val' size='3' min='"+slMin+"' max='"+slMax+"' style='width:"+slTxtWidth+"px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form></div>";
			// Slider Control
			var slCntlWidth=10;
			var slCntlHeight=17;
			
			var val=Math.max(0,Math.min(1,(slVal-slMin)/(slMax-slMin)));
			var vmax=(divWidth)-15;
			var vmin=30;
			var diffx=val*(vmax-vmin)+vmin;
			diffx+=30;//slTxtWidth+edgeBuffer;
			html=html+"<div id='slider"+divID+"Div' leftPad='"+vmin+"' rightPad='"+vmax+"'  style='opacity:0.7;z-index:4;position:relative;bottom:"+(divHeight*4-1)+"px;left:"+diffx+"px;width:"+slCntlWidth+"px;height:"+slCntlHeight+"px;'>";
			html=html+"<canvas id='slider"+curButton+"Canvas' height='"+slCntlHeight+"px' width='"+slCntlWidth+"px'></canvas></div>\n";
			//Slider Click Field
			html=html+"<div id='sliderClick_"+divID+"' onmouseover=\"hoverSlider='"+divID+"';\" onmouseout=\"hoverSlider='';slDown=0;\"  onmousedown=\"slDown=1;slideControl('slider"+divID+"Div',"+mouseX+",0,"+slMin+","+slMax+","+slSteps+",'"+divID+"_val',1,1,'');\" onmouseup='slDown=0;if(setFromToColor!=-1){setFromToColor=setFromToColor%2;setFromToHover=0;};setColorFromColorSphere(\""+canvas+"\",\"curColor_"+canvas+"\",0);setDrawAlpha(0);' onmouseout='slDown=0;setColorFromColorSphere(\""+canvas+"\",\"curColor_"+canvas+"\",0);setDrawAlpha();' style='overflow:hidden;height:"+divHeight+"px;width:"+(divWidth-34)+"px;position:relative;bottom:"+(divHeight*5-2)+"px;left:"+(slTxtWidth+edgeBuffer)+"px;z-index:5;cursor:col-resize;'>&nbsp;</div>";

			$(button).html(html);
			$(button).height(divHeight);
			$(button).width(divWidth);
			
			$("#"+divID+"_form").on('keyup keypress', function(e){
				keyHit=e.keyCode || e.which;
				/*var numKeys=[49,50,51,52,53,54,55,56,57,48]; // Number keys
				if(numKeys.indexOf(keyHit) != -1){
					if(storeKeyHold==0){
						storeKeyHold=1;
						keyHoldCheck("storeSwatchColorSphere('colorSphereCanvas',"+keyHit+");");
					}
					return false;
				}*/
				if(keyHit===13){
					var chld=$("#"+$(e.target).attr('id')).parent().parent().parent().attr("id");
					setSlideControl(chld,'');
					setColorFromColorSphere(canvas,"curColor_"+canvas,0);
					e.preventDefault();
					return false;
				}
			});
			if(slVal>slMin){
				setSlideControl(divID,'');
			}
			//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
			sliderShape('slider'+divID+'Div','slider'+curButton+'Canvas',1,5,1);
			buttonCount+=1;
		}
		
		//Build Color Sphere spacers
		buttons=$("#csSliderParent").children(".cs_spacer");
		offLeft=0;
		buttonCount=0;
		for(i=0;i<buttons.length;i++){
			button=buttons[i];
			curButton=divs[x]+buttonCount+"_csSpacer";
			divHeight=14;
			divWidth=$(button).width();

			//$(button).attr('id', "sliderGen-"+x+"-"+i)
			divID=$(button).attr('id');
			slTxtWidth=27;
			
			controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:-10px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:2px;background-color:#446666;'>&nbsp;</div></div>";
			html="<div align='left' style='position:relative;bottom:"+divHeight+";left:20;z-index:1;' id='button"+curButton+"Div'>"+controlText+"</div>";
			$(button).html(html);
			$(button).height(divHeight);
			$(button).width(divWidth);
			
			buttonCount+=1;
		}
		setSlideControl('cs_random','');
		
		//Add preset orbs
		div=$("#colorSphere_presets");
		html="<canvas height='12px' width='12px' id='colorOrb_0' class='orb' onClick=\"resetColorSphere('colorSphereCanvas',0,1);\"></canvas>";
		html+="<span style='overflow:hidden;font-size:40%;'>&nbsp;</span>";
		html+="<canvas height='12px' width='12px' id='colorOrb_1' class='orb' onClick=\"resetColorSphere('colorSphereCanvas',0,0);\"></canvas>";
		html+="<span style='overflow:hidden;font-size:40%;'>&nbsp;</span>";
		html+="<canvas height='12px' width='12px' id='colorOrb_2' class='orb' onClick=\"resetColorSphere('colorSphereCanvas',0,2);\"></canvas>";
		$(div).html(html);
		drawOrb('colorOrb',0);
		drawOrb('colorOrb',1);
		drawOrb('colorOrb',2);
	}
}

function drawOrb(canvas,cmode){
	//Make Color Sphere
	sWidth=$("#"+canvas+"_"+cmode).width();
	sHeight=$("#"+canvas+"_"+cmode).height();
	var controls=document.getElementById(canvas+"_"+cmode);
	var draw=controls.getContext('2d');

	draw.globalAlpha=1;
	draw.beginPath();
	if(cmode==2){
		var grad=draw.createRadialGradient(6,6,0,6,6,6);
		grad.addColorStop(0,'black');
		grad.addColorStop(1,'white');
		draw.fillStyle=grad;
	}else{
		draw.fillStyle='white';
	}
	draw.lineWidth=1;
	draw.arc(sWidth/2,sHeight/2,sWidth/2,0,Math.PI*2);
	draw.fill();
	
	if(cmode==0){
		var sphere=draw.getImageData(0,0,sWidth,sHeight);
		var pix = sphere.data;
		var cPoints=[sWidth*.10,sHeight*.65, //Red
					 sWidth*.70,sHeight*.90, //Green
					 sWidth*.45,sHeight*.40, //Blue
					 sWidth*.15,sHeight*.10, //White
					 sWidth*1.4,sHeight*1.1, //White
					 sWidth*.15,sHeight*.85, //Black Lower Left
					 sWidth*.95,sHeight*.50];//Black Mid Right
		var falloff=sWidth*.7;
		for (var i=0; i<pix.length; i+=4) {
			x=(i/4)%sWidth;
			y=Math.floor((i/4)/sWidth);
			magr=1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[0]),2) + Math.pow((y-cPoints[1]),2) )/falloff);
			//magr=Math.cos(magr*Math.PI*1)*.5+.5;
			magg=1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[2]),2) + Math.pow((y-cPoints[3]),2) )/falloff);
			magb=1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[4]),2) + Math.pow((y-cPoints[5]),2) )/falloff/1.05);
			magw=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[6]),2) + Math.pow((y-cPoints[7]),2) )/falloff/1.5));
			magbl=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[10]),2) + Math.pow((y-cPoints[11]),2) )/falloff))/2;
			magbl+=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[12]),2) + Math.pow((y-cPoints[13]),2) )/falloff*1.4))/5;
			magw+=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[8]),2) + Math.pow((y-cPoints[9]),2) )/falloff))*10*(1-magg)*(1-magbl*6);
			magw-=magr/6;
			magw-=magg/6;
			magw-=magb/6;
			//magw-=Math.max(0,(1-Math.max(0,Math.cos(magr*Math.PI/2)))-.5);
			//magw-=Math.max(0,(1-Math.max(0,Math.cos(magg*Math.PI/2)))-.5);
			//magw-=Math.max(0,(1-Math.max(0,Math.cos(magb*Math.PI/2)))-.5);
			
			pix[i]=Math.max(0,Math.min(1,magr+(magw-magbl)))*255;
			pix[i+1]=Math.max(0,Math.min(1,magg+(magw-magbl)))*255;
			pix[i+2]=Math.max(0,Math.min(1,magb+(magw-magbl)))*255;
		}
		draw.putImageData(sphere, 0, 0);
	}
}

function resetColorSphere(canvas,message,cmode){
	//Make Color Sphere
	sWidth=$("#"+canvas).width();
	sHeight=$("#"+canvas).height();
	var controls=document.getElementById(canvas);
	var draw=controls.getContext('2d');

	draw.globalAlpha=1;
	draw.beginPath();
	if(cmode==2){
		var grad=draw.createRadialGradient(sWidth*.195,sHeight+1,0,sWidth*.195,sHeight+1,sWidth/1.25);
		grad.addColorStop(0,'black');
		grad.addColorStop(1,'white');
		draw.fillStyle=grad;
	}else{
		draw.fillStyle='white';
	}
	draw.lineWidth=1;
	draw.arc(sWidth*.195,sHeight+1,sWidth/1.25,0,Math.PI*2);
	draw.fill();
	
	if(cmode==1){
		var sphere=draw.getImageData(0,0,sWidth,sHeight);
		var pix = sphere.data;
		var cPoints=[sWidth*.10,sHeight*.65, //Red
					 sWidth*.70,sHeight*.90, //Green
					 sWidth*.45,sHeight*.40, //Blue
					 sWidth*.15,sHeight*.10, //White
					 sWidth*1.4,sHeight*1.1, //White
					 sWidth*.15,sHeight*.85, //Black Lower Left
					 sWidth*.95,sHeight*.50];//Black Mid Right
		var falloff=sWidth*.7;
		for (var i=0; i<pix.length; i+=4) {
			x=(i/4)%sWidth;
			y=Math.floor((i/4)/sWidth);
			magr=1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[0]),2) + Math.pow((y-cPoints[1]),2) )/falloff);
			//magr=Math.cos(magr*Math.PI*1)*.5+.5;
			magg=1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[2]),2) + Math.pow((y-cPoints[3]),2) )/falloff);
			magb=1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[4]),2) + Math.pow((y-cPoints[5]),2) )/falloff/1.05);
			magw=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[6]),2) + Math.pow((y-cPoints[7]),2) )/falloff/1.5));
			magbl=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[10]),2) + Math.pow((y-cPoints[11]),2) )/falloff))/2;
			magbl+=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[12]),2) + Math.pow((y-cPoints[13]),2) )/falloff*1.4))/5;
			magw+=(1-Math.min(1,Math.sqrt( Math.pow((x-cPoints[8]),2) + Math.pow((y-cPoints[9]),2) )/falloff))*10*(1-magg)*(1-magbl*6);
			magw-=magr/6;
			magw-=magg/6;
			magw-=magb/6;
			//magw-=Math.max(0,(1-Math.max(0,Math.cos(magr*Math.PI/2)))-.5);
			//magw-=Math.max(0,(1-Math.max(0,Math.cos(magg*Math.PI/2)))-.5);
			//magw-=Math.max(0,(1-Math.max(0,Math.cos(magb*Math.PI/2)))-.5);
			
			pix[i]=Math.max(0,Math.min(1,magr+(magw-magbl)))*255;
			pix[i+1]=Math.max(0,Math.min(1,magg+(magw-magbl)))*255;
			pix[i+2]=Math.max(0,Math.min(1,magb+(magw-magbl)))*255;
		}
		draw.putImageData(sphere, 0, 0);
	}
	if(message==1){
		tmpName=tempWindow('Reloaded default Color Sphere.',[-1,-1],'',6,.5,0,0);
	}
}
function storeSwatchColorSphere(canvas,key){
	key=parseInt(key);
	var controls=document.getElementById(canvas);
	var draw=controls.getContext('2d');
	var tmpName;
	var numKeys=[49,50,51,52,53,54,55,56,57,48];
	var userKeys=[1,2,3,4,5,6,7,8,9,0];
	var userKey=key;
	if(numKeys.indexOf(key) != -1){
		userKey=userKeys[numKeys.indexOf(key)];
	}
	if(swatchSet[userKey]==1 && storeKeyHit==0){
		var setDraw=swatchStore[userKey];
		draw.putImageData(setDraw, 0, 0);
		tmpName=tempWindow('Loaded Swatch #'+userKey,[-1,-1],'',6,.5,0,0);
	}else{
		var sWidth=$("#"+canvas).width();
		var sHeight=$("#"+canvas).height();
		var drawData=draw.getImageData(0,0,sWidth,sHeight);
		swatchStore[userKey]=drawData;
		swatchSet[userKey]=1;
		tmpName=tempWindow('Set Swatch #'+userKey+', press & hold to overwrite later.',[-1,-1],'dialogueOpen=0;',11,.5,0,0);
	}
}
function placeColorSphere(){
	var csDiv=$("#colorSphere");
	var tmpSH=window.innerHeight;// * ratio;
	var cWidth=216;
	var cHeight=290;
	var sWidth=180;
	var sHeight=150;
	var canvas="colorSphereCanvas";
	$(csDiv).attr('topOrig', (tmpSH-cHeight));
	$(csDiv).attr('widthOrig', (cWidth));
	$(csDiv).attr('vis', 1);
	$(csDiv).attr('curVis', 1);
	visibilityColorSphere(1,1);
	//$(csDiv).css({'height':cHeight+'px','width':cWidth+'px','top':(tmpSH-cHeight)+'px','zIndex':3000});
	var canvas="colorSphereBlendCanvas";
	$(canvas).css({'height':cHeight+'px','width':cWidth+'px','top':(tmpSH-cHeight)+'px','zIndex':-1});
}
function sampleColorSphere(canvas, mode){
	var pos=$("#"+canvas).offset();
	var canH=$("#"+canvas).height();
	var canW=$("#"+canvas).width();
	var sampleX=mouseX-pos.left;
	var sampleY=Math.max(0,mouseY-pos.top-1);
	if(mode==0){
		colorSphereBlendPos=[sampleX,sampleY];
	}
	var color=sampleCanvas(canvas,[-1]);
	colorSphereToPos=[sampleX,sampleY];
	var maxMag=3;
	var mag=Math.sqrt( Math.pow((sampleX-colorSphereOrigPos[0]),2) + Math.pow((sampleY-colorSphereOrigPos[1]),2) );
	if( colorBlend==2 && mode==0){
		colorBlend=1;
		colorBlending=0;
	}
	if(colorBlend==1){
		setTimeout(function(){blendColorSphere(canvas,0);},10);
	}
	
}
function blendColorSphere(canvas, hit){
	var blendCanvas="colorSphereBlendCanvas";
	var pos=$("#"+canvas).offset();
	var canH=$("#"+canvas).height();
	var canW=$("#"+canvas).width();
	var sampleX=Math.min(canW-1,Math.max(0,mouseX-pos.left));
	var sampleY=Math.min(canH-1,Math.max(0,mouseY-pos.top-1));
	colorSphereToPos=[sampleX,sampleY];
	var color=sampleCanvas(canvas,colorSphereOrigPos);
	if(colorBlending==0){
		$("#"+blendCanvas).parent().css({'zIndex':10});
		$("#"+blendCanvas).css({'cursor':'auto'});
		clearScreen(blendCanvas);
		colorSphereOrigPos=colorSphereToPos;
		colorBlend=2;
		colorBlending+=1;
	}
	
	var maxMag=3;
	var mag=Math.sqrt( Math.pow((sampleX-colorSphereOrigPos[0]),2) + Math.pow((sampleY-colorSphereOrigPos[1]),2) );
	if(mag/maxMag >1){
		dialogueOpen=1;
		colorBlending+=1;
		var drawPos=[colorSphereOrigPos[0],colorSphereOrigPos[1], colorSphereToPos[0],colorSphereToPos[1]];	
		var color=getColor(colorBlending); // Returns [R,G,B,A]
		var drawColor=[color[0],color[1],color[2]];
		clearScreen(blendCanvas);
		drawLine(drawPos,5,drawColor,color[3],0,blendCanvas,[-1]);
		
			var bcanvas=document.getElementById(blendCanvas);
			var canvasDraw=bcanvas.getContext("2d");
			var pastCan=document.getElementById(canvas);
			canvasDraw.globalCompositeOperation="destination-in";
			canvasDraw.drawImage(pastCan,0,0);

		
		var magDist=Math.sqrt( Math.pow((drawPos[2]-drawPos[0]),2) + Math.pow((drawPos[3]-drawPos[1]),2) );
		blendCanvasColorSphere(blendCanvas,canvas,color,magDist);
		//drawLine(drawPos,25,drawColor,color[3],0,blendCanvas,[-1]);
		//blurTool(blendCanvas,canvas,3,1);
		//clearScreen(blendCanvas);
		//drawLine(drawPos,5,drawColor,color[3],0,blendCanvas,[-1]);
		
		colorSphereOrigPos=colorSphereToPos;
		hit=1;
	}else{
		if(colorBlend==2 && colorBlending==1 && hit==0){
			colorBlend=1;
		}
		if(hit==1 && colorBlend>0){
			colorBlend=2;
		}
	}
	if(colorBlend==1 || colorBlend==2){
		setTimeout(function(){blendColorSphere(canvas, hit);},10);
	}else{
		$("#colorSphereBlendCanvas").parent().css({'zIndex':-1});
		$("#"+canvas).css({'cursor':'crosshair'});
		dialogueOpen=0;
	}
}

function blendCanvasColorSphere(inputCanvas,outputCanvas,color,magDist){
	var cW=$("#"+outputCanvas).width();
	var cH=$("#"+outputCanvas).height();
	var canvas=document.getElementById(inputCanvas);
	var input=canvas.getContext("2d");
	fader=input.getImageData(0,0,cW,cH);
	pix = fader.data;
	var putCanvas=document.getElementById(outputCanvas);
	var output=putCanvas.getContext("2d");
	faderTo=output.getImageData(0,0,cW,cH);
	pixTo = faderTo.data;
	var rx,ry,rpix,px,py,mather ;
	var checker,rCalc,gCalc,bCalc,aCalc,stageX,stageY,mather,distCheck;
	//var distCheck=4+4*Math.abs((Math.floor(runner/55)*55)%3+(dragTotal%touchChecker));
	var startPix=0;
	var endPix=pixTo.length;
	var percer;
	var alpha=1;//$("#be"+diaVal+"_effectPercent_val").val();
	var percMult,mather, pxMag,pxM,pxVal, pxHit,pxY,pxX;
	var hitPos=[];
	var mag=Math.sqrt( Math.pow((colorSphereToPos[0]-colorSphereOrigPos[0]),2) + Math.pow((colorSphereToPos[1]-colorSphereOrigPos[1]),2) );
	var levels=Math.ceil(mag/20);
	var falloff=(mag/7)+10;
	var origBlend=4;
	for (var i=startPix; i<endPix; i+=4) {
		layerCheck=0;
		px=(i/4)%cW;
		py=Math.floor((i/4)/cW);
		pxMag=99;
		for(var x=0;x<=levels;++x){
			pxX=(colorSphereToPos[0]-colorSphereOrigPos[0])*(1-x/(levels))+colorSphereOrigPos[0];
			pxY=(colorSphereToPos[1]-colorSphereOrigPos[1])*(1-x/(levels))+colorSphereOrigPos[1];
			pxHit=Math.sqrt( Math.pow((px-pxX),2) + Math.pow((py-pxY),2));
			if(pxHit<pxMag){
				pxMag=pxHit;
				hitPos=[Math.floor(pxX),Math.floor(pxY)];
			}
		}
		pxVal=((cW*hitPos[1])+hitPos[0])*4;
		percer=Math.min(1,pxMag/falloff);
		//percer=Math.cos(percer*3.141592);
		if((percer)<1){
			mather=(Math.min(1,(Math.cos(percer*3.141592/2+colorBlending/4.14+pxVal+pxMag/7.3+hitPos[1]*2.56+hitPos[0]*3.13)*.5+.5)+(1-Math.min(1,mag/20))/1.2))*Math.min(.4,magDist/2);
			rCalc=(color[0]*mather+pixTo[pxVal]*(1-mather));
			gCalc=(color[1]*mather+pixTo[pxVal+1]*(1-mather));
			bCalc=(color[2]*mather+pixTo[pxVal+2]*(1-mather));
			rCalc=(rCalc+pixTo[i]*origBlend)/(origBlend+1);
			gCalc=(gCalc+pixTo[i+1]*origBlend)/(origBlend+1);
			bCalc=(bCalc+pixTo[i+2]*origBlend)/(origBlend+1);
			percer=Math.min(1, Math.max(0,(1-percer*percer)*alpha));
			//aCalc=pixTo[i+3];
			if(percer!=0){
				rCalc=pixTo[i]*(1-percer)+rCalc*(percer);
				gCalc=pixTo[i+1]*(1-percer)+gCalc*(percer);
				bCalc=pixTo[i+2]*(1-percer)+bCalc*(percer);
			}
			pixTo[i]=rCalc;
			pixTo[i+1]=gCalc;
			pixTo[i+2]=bCalc;
			//pixTo[i+3]=aCalc;
		}
	}
	output.putImageData(faderTo, 0, 0);
}
function grabColorSphere(mode){
	if(mode==1){
		//dialogueOpen=1;
		//menuVis(0,0);
		var inner=$("#colorSphereDiv").html();
		var dH=$("#colorSphereDiv").height();
		var dW=$("#colorSphereDiv").width();
		$("#tearOff_colorSphereDiv").html(inner);
		var origName=$($("#tearOff_colorSphereDiv").children()[0]).attr('id');
		var tearOffName=origName+"_tearOff";
		$($("#tearOff_colorSphereDiv").children()[0]).attr('id', tearOffName);
		pushCanvas(origName,tearOffName);

		var mX=mouseX;
		var mY=mouseY;
		$("#tearOff_colorSphereDiv").css({'visibility':'visible','zIndex':9040,'left':mX+'px','top':mY+'px','height':dH+'px','width':dW+'px'});
		//$("#"+canvas).attr("onMouseOver","colorBlend=2;setHoverColorSphere('"+canvas+"','hoverColor_"+canvas+"');");
		//$("#"+canvas).attr("onMouseDown","if(colorBlend==2){sampleColorSphere('"+canvas+"',0);}else{blendColorSphere('"+canvas+"',0);}");
		//$("#"+blendCanvas).attr("onMouseDown","if(colorBlend==2){sampleColorSphere('"+canvas+"',0);}else{blendColorSphere('"+canvas+"',0);}");
		//$("#"+blendCanvas).attr("onMouseUp","if(colorBlend==1){setColorFromColorSphere('"+canvas+"','curColor_"+canvas+"',1);};colorBlend=0;");
	}else{
		$("#tearOff_colorSphereDiv").html('');
		$("#tearOff_colorSphereDiv").css({'visibility':'hidden','zIndex':'-5','left':'0px','top':'0px','height':'0px','width':'0px'});
	}
}
function setSliders(){
	setSlideControl('cs_red','');
	setSlideControl('cs_green','');
	setSlideControl('cs_blue','');
}
function setColorFromColorSphere(canvas,toCanvas,sphereClick){
	//var color=sampleCanvas(canvas,colorSphereOrigPos);
	var color,hex;
	colorSphereRun+=1;
	if(sphereClick==1){
		color=sampleCanvas(canvas,[-1]);
		if(color[0]>=0){
			$("#cs_red_val").val(color[0]);
			$("#cs_green_val").val(color[1]);
			$("#cs_blue_val").val(color[2]);
			setSlideControl('cs_red','');
			setSlideControl('cs_green','');
			setSlideControl('cs_blue','');
		}
	}else{
		var R,G,B;
		R=$("#cs_red_val").val();
		G=$("#cs_green_val").val();
		B=$("#cs_blue_val").val();
		/*switch(R){
			case '-1':
				color=[220,120,20];
				break;
			case '-2':
				color=[60,220,100];
				break;
			case '-3':
				color=[20,180,220];
				break;
			default:
				color=[R,G,B];
			}*/
		color=[R,G,B];
	}
	//if(color[0]>=0){
		var a=$("#be"+diaVal+"_effectPercent_val").val();
		updateColorSplash(toCanvas,color,a,1,0,colorSphereRun);
		
	//}
	if(geoTool>0){
		clearScreen("curDraw");
		doGeoDraw("curDraw",0);
	}
	if(setFromToColor!=-1){
		if(setFromToColor==0){
			setFromToColor=2;
		}else if(setFromToColor==1){
			setFromToColor=3;
		}
		setBGToFromColor(color);
	}
}

function setHoverColorSphere(canvas,toCanvas){
	//var color=sampleCanvas(canvas,colorSphereOrigPos);
	var color=sampleCanvas(canvas,[-1]);
	if(color[0]>=0 && colorBlend==2){
		var a=$("#be"+diaVal+"_effectPercent_val").val()*.7+.3;
		updateColorSplash(toCanvas,color,a,2,0,colorSphereRun);
		$("#"+canvas).css({'cursor':'crosshair'});
	}else{
		$("#"+canvas).css({'cursor':'auto'});
	}
	if(setFromToColor!=-1){
		setBGToFromColor(color);
	}
	if(colorBlend==2){
		setTimeout(function(){setHoverColorSphere(canvas,toCanvas);},20);
	}
}
function updateColorSplash(canvas,color,a,mode,run,curTime){
	var cW=$("#"+canvas).width();
	var cH=$("#"+canvas).height();
	if(curTime==colorSphereRun){
		var controls=document.getElementById(canvas);
		var draw=controls.getContext('2d');
		var sphere=draw.getImageData(0,0,cW,cH);
		var pix = sphere.data;
		var perc,aPerc;//=(run/sWidth)*3;
		if(mode>1){
			run=cW;
		}
		var rndClr=0;
		if(color[0]<0 || rndClr==1){
			//clickCount+=x;
			color=getColor(2);
			rndClr=1;
			perc=0;
		}
		if(mode>1){
			for (var i=0; i<pix.length; i+=4) {
				x=(i/4)%cW;
				y=Math.floor((i/4)/cW);
				perc=Math.min(1,((run/cW)*5)/(x/cW));
				if(mode==2){ // Hover color
					perc*=(x+Math.sin(y*505)*10-Math.sin(y/cH*Math.PI*.95)*20-Math.sin(y/cH*Math.PI*8)*5+40 + (Math.min(1,Math.abs(Math.cos(y/cH*Math.PI*.55+.75))*.8) * (1-Math.min(1,y/cH*1.5)*2.2) )*60+15   > cW ? 0 : 1);
				}else{ // Selected color
					perc*=(x+Math.sin(y*500)*10-Math.sin(y/cH*Math.PI)*20-Math.sin(y/cH*Math.PI*10)*5+40 + Math.min(1,Math.abs(Math.cos(y/cH*Math.PI*.4+.7))*.8)*50   > cW ? 0 : 1);
				}
				perc=(isNaN(perc)? 0 : perc);
				aPerc=perc;
				perc=Math.min(1,Math.max(0, perc*4-1));
				//perc=Math.max(0, (x+run)-Math.sin(y*20)*10 )/cW;
				pix[i]=color[0];
				pix[i+1]=color[1];
				pix[i+2]=color[2];
				pix[i+3]=(pix[i+3]*(1-perc)+255*perc)*a;
			}
		}else{
			for (var i=0; i<pix.length; i+=4) {
				x=(i/4)%cW;
				y=Math.floor((i/4)/cW);
				perc=Math.min(1,((run/cW)*4)/(Math.max(0,x-Math.sin(y*40)*15)/cW));
					perc*=(x+Math.sin(y*500)*10-Math.sin(y/cH*Math.PI)*20-Math.sin(y/cH*Math.PI*10)*5+40 + Math.min(1,Math.abs(Math.cos(y/cH*Math.PI*.4+.7))*.8)*50   > cW ? 0 : 1);
				perc=(isNaN(perc)? 0 : perc);
				aPerc=perc;
				perc=Math.min(1,Math.max(0, perc*4-1));
				//perc=Math.max(0, (x+run)-Math.sin(y*20)*10 )/cW;

				pix[i]=pix[i]*(1-perc)+color[0]*perc;
				pix[i+1]=pix[i+1]*(1-perc)+color[1]*perc;
				pix[i+2]=pix[i+2]*(1-perc)+color[2]*perc;
				pix[i+3]=(pix[i+3]*(1-perc)+255*perc*a);
			}
		}
		draw.putImageData(sphere, 0, 0);
		
		if(mode==1){
			//run=cW;
			run=0;
			mode=0;
			curTime=colorSphereRun;
		}else{
			if(mode==0){
				run+=1;
			}
		}
		if(run<cW/4 && mode==0){
			setTimeout(function(){updateColorSplash(canvas,color,a,mode,run,curTime);},20);
		}
	}
}
function visibilityColorSphere(vis,setVis){
	var tValMCS,wValMCS,bValCSP,lValCC,tValCC,tValHC,lValHC,tValCSD,lValCSD,bValPresets;
	if(mobile==0){
		if(setVis==0 && $("#colorSphere").attr("vis")==0){
			return false;
		}
		if(vis==0){
			tValMCS=-262;
			wValMCS=42;
			$("#colorSphere").attr("onMouseUp","visibilityColorSphere(1,2);");
			if(setVis==1 || (setVis==2 && $("#colorSphere").attr("vis")==1)){
				$("#colorSphere").attr("vis",0);
			}
			$("#colorSphere").attr("curVis",0);
			$("#colorSphere").css({'cursor':'row-resize'});
			tValCSD=-20;
			lValCSD=-20;
			bValCSP=-200;
			tValCC=0;
			lValCC=-10;
			tValHC=-200;
			lValHC=-200;
			bValPresets=-20;
		}else{
			tValMCS=0;
			wValMCS=parseInt($('#colorSphere').attr("widthOrig"));
			$("#colorSphere").unbind("onMouseUp");
			$("#colorSphere").css({'cursor':'auto'});
			if(setVis==1){
				$("#colorSphere").attr("vis",1);
			}
			$("#colorSphere").attr("curVis",1);
			tValCSD=parseInt($('#colorSphereDiv').attr("topOrig"));
			lValCSD=0;
			bValCSP=parseInt($('#csSliderParent').attr("bottomOrig"));
			tValCSD=parseInt($('#curColor_colorSphereDiv').attr("topOrig"));
			lValCC=0;
			tValHC=parseInt($('#hoverColor_colorSphereDiv').attr("topOrig"));
			lValHC=parseInt($('#hoverColor_colorSphereDiv').attr("leftOrig"));
			bValPresets=0;
		}
		$("#colorSphere").css({'bottom':tValMCS,'width':wValMCS});
		$('#csSliderParent').css({'bottom':bValCSP});
		$('#colorSphere_presets').css({'bottom':bValPresets});
		resizeLayerScrollWindow();
		//$('#colorSphereCanvas').css({'top':tValCSD,'left':lValCSD});
		//$('#curColor_colorSphereDiv').css({'top':tValCC,'left':lValCC});
		//$('#hoverColor_colorSphereDiv').css({'top':tValHC,'left':lValHC});
	}
}

