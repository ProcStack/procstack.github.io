
function WhichButton(event){
	if(dispStats==1){
		$("#responce").html("Click " + event.button);
	}
	return false;
}
window.oncontextmenu = function () {
   return false;
}
function saveInit(){
	var gBG=document.getElementById("saveCanvas");
	var drawBG=gBG.getContext("2d");
	gBG.width=sW;
	gBG.height=sH;
}
function saveCroppedInit(){
	var gBG=document.getElementById("saveCroppedCanvas");
	gBG.width=refreshWindowStore[2]-refreshWindowStore[0];
	gBG.height=refreshWindowStore[3]-refreshWindowStore[1];
	gBG=document.getElementById("saveCroppedCanvasBG");
	gBG.width=refreshWindowStore[2]-refreshWindowStore[0];
	gBG.height=refreshWindowStore[3]-refreshWindowStore[1];
	gBG=document.getElementById("tempBuildCanvas");
	gBG.width=sW;
	gBG.height=sH;
}

function slideControl(slDiv,mx,sx,min,max,steps,tField,mode,colorSphere,func){
	var activeRun=1;
	var val;
	var vmax=parseInt($("#"+slDiv).attr("rightPad"));
	var vmin=parseInt($("#"+slDiv).attr("leftPad"));
	if(mode==1){
		mx=mouseX;
		var splitter=slDiv.split("_");
		$("#"+slDiv).css('left',vmin)
		var divPos=$("#"+slDiv).offset();
		/*if(splitter[1]=='setWidth' && active==1 && dynMag==1){
			dynMag=0;
			eval($("#barMenu_setWidth").attr("onmouseup"));
			eval($("#diaMenu_setWidth").attr("onmouseup"));
		}*/
		val=mx-divPos.left+vmin;
	}else{
		val=sx+(mouseX-mx);
	}
	var diffx=Math.min(vmax,Math.max(vmin,val));
	$("#"+slDiv).css({'left':diffx});
	val=Math.max(0,Math.min(1,(val-vmin)/(vmax-vmin)));
	val=Math.max(min,Math.min(max,(val*(max-min)+min) ));
	val=Math.floor(val/steps)*steps;
	$("#"+tField).val(val);
	
	if(mode==1){ //Store initial click location
		mode=0;
		sx=parseInt($("#"+slDiv).css('left'), 10);
	}
	if(dispStats==1){
		$("#sliderClickVal").text(diffx);
	}
	if(slDown==0){
		activeRun=0;
	}
	eval(func);
	if(activeRun==1 && dragClick==0){
		setTimeout(function(){slideControl(slDiv,mx,sx,min,max,steps,tField,mode,colorSphere,func);},40);
	}
}
function setSlideControl(slDiv,func){
	var val=parseFloat($("#"+slDiv+"_val").val(),10);
	
	var min=$("#"+slDiv).attr('min');
	if(isNaN(val)){
		val=min;
	}
	var max=$("#"+slDiv).attr('max');
	val=Math.max(min,Math.min(val,max));
	$("#"+slDiv+"_val").val(val);
	var steps=$("#"+slDiv).attr('steps');
	var w=$("#sliderClick_"+slDiv).width();
	var slChildDiv="slider"+slDiv+"Div";
	var vmax=parseInt($("#"+slChildDiv).attr("rightPad"));
	var vmin=parseInt($("#"+slChildDiv).attr("leftPad"));
	var diffx=(((val-min)/(max-min))*(vmax-vmin))+vmin;
	$("#slider"+slDiv+"Div").css({'left':diffx});
	var splitter=slDiv.split("_");
	eval(func);
}
function gradientInit(patternGen,boot){
	var gBG=document.getElementById("gradientBG");
	var drawBG=gBG.getContext("2d");
	gBG.setAttribute("width", 1);
	gBG.setAttribute("height", 1);
	gBG.setAttribute("width", sW);
	gBG.setAttribute("height", sH);
	
	gradientRunner("gradientBG",patternGen,gradFromHex,gradToHex,((mobile+1)%2),1,boot);
	
}
function tempBgInit(){
	gBG=document.getElementById("tempBG");
	drawBG=gBG.getContext("2d");
	gBG.setAttribute("width", 1);
	gBG.setAttribute("height", 1);
	gBG.setAttribute("width", sW);
	gBG.setAttribute("height", sH);
	gradientRunner("tempBG",0,gradFromHex,gradToHex,((mobile+1)%2),1,1);
}
function setBGToFromColor(color){
	if(setFromToColor==0 || (setFromToColor==2 && setFromToHover==0)){
		setFromToColor=0;
		if(color.indexOf("#")==-1){
			hex=rgbToHex(color[0],color[1],color[2]);
		}else{
			hex=color;
		}
		$("#editBackground_fColor").val(hex);
		setCanvasToColor('editBackground_fColor_display',hex);
		gradientRunner("editBackground_tempDisp",0,$("#editBackground_fColor").val(),$("#editBackground_tColor").val(),0,1,1);
	}else if(setFromToColor==1 || (setFromToColor==3 && setFromToHover==0)){
		setFromToColor=1;
		if(color.indexOf("#")==-1){
			hex=rgbToHex(color[0],color[1],color[2]);
		}else{
			hex=color;
		}
		$("#editBackground_tColor").val(hex);
		setCanvasToColor('editBackground_tColor_display',hex);
		gradientRunner("editBackground_tempDisp",0,$("#editBackground_fColor").val(),$("#editBackground_tColor").val(),0,1,1);
	}
	dialogueOpen=1;
}
function gradientRunner(canvas,mode,colorFrom,colorTo,runBlur,perc,boot){
	runner+=1;
	var gBG=document.getElementById(canvas);
	var drawBG=gBG.getContext("2d");
	var cW=$("#"+canvas).width();
	var cH=$("#"+canvas).height();

	var hueShift,patSatch,patBright;
	if(boot==0){
		hueShift=parseFloat($("#editBackground_shiftColor_val").val()+1)*255+255;
		patSatch=parseFloat($("#editBackground_satch_val").val());
		patBright=parseFloat($("#editBackground_patternBrightness_val").val());
	}else{
		hueShift=0;
		patSatch=1;
		patBright=1;
	}
	var hexStyle, RGB,HSV, cMath;
	if(mode==0){
		drawBG.rect(0, 0, cW, cH);
		var grd = drawBG.createLinearGradient(cW*bgGradientPoints[0],cH*bgGradientPoints[1],cW*bgGradientPoints[2],cH*bgGradientPoints[3]);
		grd.addColorStop(0, colorFrom);
		grd.addColorStop(1, colorTo);
		drawBG.fillStyle = grd;
		drawBG.fill();
	}else if(mode==1){
		drawBG.rect(0, 0, cW, cH);
		drawBG.globalAlpha=1;
		drawBG.fillStyle='white';
		drawBG.fill();
		var R,G,B,math;
		var greyTone=drawBG.getImageData(0, 0, cW, cH);
		var pix = greyTone.data;
		for (var i=0; i<pix.length; i+=4) {
			x=((i/4)%cW)*perc;
			y=Math.floor((i/4)/cW)*perc;
			math=Math.sin(x/515+y/460+y/622+Math.cos(x/59+856)*3.141592+Math.cos(y/50+23)+Math.cos(x/459+4556)*3.141592+Math.cos(y/540+2323)+Math.cos(y/350+x/259+234)*3.1415926535/2)*.2+.8;
			math=math*Math.sin(x/23+y*10+y/2+Math.cos(x/534+4856)+Math.cos(y/656+23)*3.141592+Math.cos(x/45+4556)-Math.cos(y/663+2323)*3.141592+Math.cos(y/350+x/259+234)*3.1415926535/2)*.2+.8;
			
			if((hueShift%255)!=0 || patSatch!=1){
				R=math;
				cMath=Math.max(0,1-Math.abs( (hueShift-255)/255 )*5);
				G=math*cMath;
				B=math*cMath;
				R=Math.max(0,Math.min(1,R))*255;
				G=Math.max(0,Math.min(1,G))*255;
				B=Math.max(0,Math.min(1,B))*255;
				HSV=toHSV([R,G,B]);
				HSV[0]=((HSV[0])+hueShift)%255;
				HSV[1]*=patSatch;
				RGB=toRGB(HSV);
				pix[i]=RGB[0]*patBright;
				pix[i+1]=RGB[1]*patBright;
				pix[i+2]=RGB[2]*patBright;
			}else{
				pix[i]=Math.max(0,Math.min(1,math))*255*patBright;
				pix[i+1]=Math.max(0,Math.min(1,math))*255*patBright;
				pix[i+2]=Math.max(0,Math.min(1,math))*255*patBright;
			}
			
		}
		drawBG.putImageData(greyTone, 0, 0);
		if(mobile==0){
			if(runBlur>0){
				blurEffect(canvas,canvas,1,10,4);
				runBlur=3;
				drawBG=canvas;
			}else{
				blurEffect(canvas,canvas,1,3,4);
			}
		}
	}else if(mode==2){
		drawBG.rect(0, 0, cW, cH);
		drawBG.globalAlpha=1;
		hexStyle='#00ffff'
		drawBG.fillStyle=hexStyle;
		drawBG.fill();
		var R,G,B,math,dist;
		var greyTone=drawBG.getImageData(0, 0, cW, cH);
		var pix = greyTone.data;
		for (var i=0; i<pix.length; i+=4) {
			if(boot==0){
				x=Math.floor(((i/4)%cW))*perc;
				y=Math.floor(((i/4)/cW))*perc;
				dist=Math.min(1,Math.max(0,Math.sqrt( Math.pow(Math.abs(x-(cW*perc)/2)/4,2)+Math.pow(Math.abs(y-(cH*perc)/2),2) )/(cW/6*perc)));
			}else{
				x=Math.floor(((i/4)%cW)*(sW/cW))*perc;
				y=Math.floor(((i/4)/cW)*(sH/cH))*perc;
				dist=Math.min(1,Math.max(0,Math.sqrt( Math.pow(Math.abs(x-(sW)/2)/4,2)+Math.pow(Math.abs(y-(sH)/2),2) )/(sW/6)));
			}
			dist=(Math.cos(dist*3.14159265/4)*.3*patBright+.4)*(1-Math.max(0,patSatch-1)/3)+(Math.max(0,patSatch-1)/3)*.5;
			math=Math.sin(x/443+y/863+x*10+dist+Math.cos(x/53+856)*3.141592+Math.cos(y/18140+x/3+23)+Math.sin(x/415-y/952+4556)*3.141592+Math.cos(y/2230+x/259+234)*3.1415926*3)*.5+.5;
			math=math*Math.cos(x/523+y/1032+x*30+dist+Math.cos(x/543+y/312+4856)+Math.sin(y/2026+x+23)*3.141592*2+Math.cos(x/255+4556)*3.14159265*2-Math.sin(y/863+x/12+2323)*3.141592*2)*.4+.6;
			
			R=(Math.cos(math*3.1415/2+dist/10)*(.4*(1-Math.max(0,patSatch-1)))+.2)*(1-dist) + (dist);
			G=(Math.sin(math*3.1415*2+dist/10)*(.4*(1-Math.max(0,patSatch-1)))+.2)*(1-dist) + (dist);
			B=(Math.sin(math*3.1415+dist/2)*(.5*(1-Math.max(0,patSatch-1)))+.5)*(1-dist) + (dist);
			
			if((hueShift%255)!=0 || patSatch!=1){
				R=Math.max(0,Math.min(1,R))*255;
				G=Math.max(0,Math.min(1,G))*255;
				B=Math.max(0,Math.min(1,B))*255;
				HSV=toHSV([R,G,B]);
				HSV[0]=((HSV[0])+hueShift)%255;
				HSV[1]*=patSatch;
				RGB=toRGB(HSV);
				pix[i]=RGB[0]*patBright;
				pix[i+1]=RGB[1]*patBright;
				pix[i+2]=RGB[2]*patBright;
			}else{
				pix[i]=Math.max(0,Math.min(1,R))*255*patBright;
				pix[i+1]=Math.max(0,Math.min(1,G))*255*patBright;
				pix[i+2]=Math.max(0,Math.min(1,B))*255*patBright;
			}
		}
		drawBG.putImageData(greyTone, 0, 0);
		if(mobile==0){
			if(runBlur>0){
				if(boot==0){
					blurEffect(canvas,canvas,1,[5,10],6);
				}else{
					blurEffect(canvas,canvas,1,[1,5],6);
					blurEffect(canvas,canvas,1,[2,15],4);
				}
			}
		}
	}else if(mode==3){
		drawBG.rect(0, 0, cW, cH);
		drawBG.globalAlpha=1;
		hexStyle='#00ffff'
		drawBG.fillStyle=hexStyle;
		drawBG.fill();
		
		var R,G,B,math;
		var greyTone=drawBG.getImageData(0, 0, cW, cH);
		var pix = greyTone.data;
		for (var i=0; i<pix.length; i+=4) {
			x=Math.floor(((i/4)%cW)*(sW/cW))*perc;
			y=Math.floor(((i/4)/cW)*(sH/cH))*perc;
			math=Math.sin(x/755+y/2205+y/232*Math.sin(x/2159+2342)*3.141592+Math.sin(y/350+23)*Math.cos(x/459+4556)*3.141592+Math.sin(y/1540+2323)*Math.sin(y/350+x/1259+234)*3.1415926535)*.4+.5;
			math=math*Math.sin(x/543*Math.sin(y/1169+856)*3.141592+y/1330+x/544*Math.cos(x/5134+4856)+Math.cos(y/656+23)*3.141592+Math.sin(x/1415+4556)*Math.sin(y/663+2323)*3.141592+Math.cos(y/1350+x/259+234)*3.1415926535/2)*.2+.6;
			R=math*Math.sin(math*3.1415)*.2+.8;
			G=math*Math.sin(math*3.1415*2)*.3+.4;
			B=math*Math.cos(math*3.1415/2)*.2+.3;
			
			if((hueShift%255)!=0 || patSatch!=1){
				R=Math.max(0,Math.min(1,R))*255;
				G=Math.max(0,Math.min(1,G))*255;
				B=Math.max(0,Math.min(1,B/3))*255;
				HSV=toHSV([R,G,B]);
				HSV[0]=((HSV[0])+hueShift)%255;
				HSV[1]*=patSatch;
				RGB=toRGB(HSV);
				pix[i]=RGB[0]*patBright;
				pix[i+1]=RGB[1]*patBright;
				pix[i+2]=RGB[2]*patBright;
			}else{
				pix[i]=Math.max(0,Math.min(1,R))*255*patBright;
				pix[i+1]=Math.max(0,Math.min(1,G))*255*patBright;
				pix[i+2]=Math.max(0,Math.min(1,B))*255*patBright;
			}
		}
		drawBG.putImageData(greyTone, 0, 0);
		
	}
	if(runBlur==3 && mobile==0){
		blurEffect(drawBG,drawBG,1,80,3);
		//blurEffect(drawBG,drawBG,1,70,5);
	}
}
function runDisplayPattern(){
	var curPat=$('#editBackground_pattern').val();
	var ev=$("#editBackground_pattern"+curPat).attr('onclick');
	eval(ev);
}
//// Build Slider Control
function sliderShape(div,canvas,alpha,arrowHeight,pxRatio){ //Button shapes
	var R,G,B,A;
	var width=$('#'+div).width();
	var height=$('#'+div).height();
	var controls=document.getElementById(canvas);
	var draw=controls.getContext('2d');

	if(pxRatio==1){
		R=50;
		G=80;
		B=100;
	}else if(pxRatio==2){
		R=80;
		G=115;
		B=135;
	}
	var hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	var fillColor=hex;
	clearScreen(canvas);	

	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.fillStyle=fillColor;
	draw.moveTo(1,1);
	draw.lineTo(width-1,1);
	draw.lineTo(width-1,height-arrowHeight-1);
	draw.lineTo(width/2,height-1);
	draw.lineTo(1,height-arrowHeight-1);
	draw.lineTo(1,1);
	draw.closePath();
	draw.fill();

	var noise=draw.getImageData(0,0,width,height);
	var pix = noise.data;
	var ii;
	for (var i=0; i<pix.length; i+=4) {
		ii=i+12;
		if(pxRatio==1){
		ii=i+12;
			R=(Math.sin( (((ii/4)%width)/width) *4+66-ii) + Math.cos( (((ii/4)%width)/width) *3+66)/2 + Math.cos( (((ii/4)%width)/width) *5+126+ii)/2  )/4+.75;
			G=(Math.sin( (((ii/4)%width)/width) *3+744+ii) + Math.cos( (((ii/4)%width)/width) *5+66+ii)/2 + Math.cos( (((ii/4)%width)/width) *6+4626)/2  )/4+.75;
			B=(Math.sin( (((ii/4)%width)/width) *3+536+ii) + Math.cos( (((ii/4)%width)/width) *4+66)/2 + Math.cos( (((ii/4)%width)/width) *12+757+ii)/2  )/4+.75;
		
			A=(R+B+G)/2;
			pix[i]=pix[i]*R*1.25;
			pix[i+1]=pix[i+1]*G*1.3;
			pix[i+2]=pix[i+2]*B*1.25;
			pix[i+3]=Math.min(255, pix[i+3]*A);
		}else if(pxRatio==2){
			ii=i*3+12+Math.sin(i/2.713)*5 - Math.floor(i/width)*2;
			R=(Math.sin( (((ii/4)%width)/width) *5+66-ii) + Math.cos( (((ii/4)%width)/width) *7+66)/2 + Math.cos( (((ii/4)%width)/width) *3+126+ii)/2  )/4+.75;
			G=(Math.sin( (((ii/4)%width)/width) *7+744+ii) + Math.cos( (((ii/4)%width)/width) *6+66+ii)/2 + Math.sin( (((ii/4)%width)/width) *5+4626)/2  )/4+.75;
			B=(Math.sin( (((ii/4)%width)/width) *6+536+ii) + Math.sin( (((ii/4)%width)/width) *5+66)/2 + Math.cos( (((ii/4)%width)/width) *7+757+ii)/2  )/4+.75;
		
			A=(R+B+G)/2;
			pix[i]=(pix[i]*4+pix[i]*R*1.1)/3;
			pix[i+1]=(pix[i+1]*4+pix[i+1]*G*1.3)/3;
			pix[i+2]=(pix[i+2]*4+pix[i+2]*B*1.1)/3;
			pix[i+3]=(pix[i+3]*2+Math.min(255, pix[i+3]*A))/2;
		}
	}
	draw.putImageData(noise, 0, 0);


	R=130;
	G=180;
	B=180;
	hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	var strokeColor=hex;
	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.strokeStyle=strokeColor;
	mag=.5;
	draw.lineWidth=mag;
	draw.moveTo(.5,.5);
	draw.lineTo(width-.5,.5);
	draw.lineTo(width-.5,height-arrowHeight-.5);
	draw.lineTo(width/2,height-.5);
	draw.lineTo(.5,height-arrowHeight-.5);
	draw.lineTo(.5,.5);
	draw.lineJoin = 'round';
	draw.stroke();

	return height;
}
//// Build Layer Slidebar
function layerSlidebarShape(div,canvas,alpha,arrowHeight){ //Button shapes
	var R,G,B,A;
	var width=$('#'+div).width();
	var height=$('#'+div).height();
	var controls=document.getElementById(canvas);
	var draw=controls.getContext('2d');

	R=80;
	G=100;
	B=100;
	var hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	var fillColor=hex;
	clearScreen(canvas);	

	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.fillStyle=fillColor;
	draw.moveTo(1,1);
	draw.lineTo(width-1,1);
	draw.lineTo(width-1,height-arrowHeight-1);
	draw.lineTo(width/2,height-1);
	draw.lineTo(1,height-arrowHeight-1);
	draw.lineTo(1,1);
	draw.closePath();
	draw.fill();

	var noise=draw.getImageData(0,0,width,height);
	var pix = noise.data;
	var ii;
	for (var i=0; i<pix.length; i+=4) {
		ii=i+12;
		R=(Math.sin( (((ii/4)%width)/width) *4+66-ii) + Math.cos( (((ii/4)%width)/width) *3+66)/2 + Math.cos( (((ii/4)%width)/width) *5+126+ii)/2  )/4+.75;
		G=(Math.sin( (((ii/4)%width)/width) *3+744+ii) + Math.cos( (((ii/4)%width)/width) *5+66+ii)/2 + Math.cos( (((ii/4)%width)/width) *6+4626)/2  )/4+.75;
		B=(Math.sin( (((ii/4)%width)/width) *3+536+ii) + Math.cos( (((ii/4)%width)/width) *4+66)/2 + Math.cos( (((ii/4)%width)/width) *12+757+ii)/2  )/4+.75;
		A=(R+B+G)/2;
		pix[i]=pix[i]*R*1.25;
		pix[i+1]=pix[i+1]*G*1.3;
		pix[i+2]=pix[i+2]*B*1.25;
		pix[i+3]=pix[i+3]*A;
	}
	draw.putImageData(noise, 0, 0);


	R=130;
	G=180;
	B=180;
	hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	var strokeColor=hex;
	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.strokeStyle=strokeColor;
	mag=.5;
	draw.lineWidth=mag;
	draw.moveTo(.5,.5);
	draw.lineTo(width-.5,.5);
	draw.lineTo(width-.5,height-arrowHeight-.5);
	draw.lineTo(width/2,height-.5);
	draw.lineTo(.5,height-arrowHeight-.5);
	draw.lineTo(.5,.5);
	draw.lineJoin = 'round';
	draw.stroke();

	return height;
}
//// Control Panel Functions
function bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected,toggled){ //Button shapes
	var R,G,B,A;
	var width=$('#'+div).width()+padding*2;
	var height=$('#'+div).height()+padding*2;
	if(button==1){
		var move=(height-padding);
		$('#'+div).width(width);
	}
	controls=document.getElementById(canvas);
	draw=controls.getContext('2d');

	R=120;
	G=150;
	B=150;
	hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	strokeColor=hex;
	clearScreen(canvas);	
	if( toggled == 0 ){
		if(selected==0){
			R=80;
			G=100;
			B=100;
		}else if(selected==1){
			R=120;
			G=180;
			B=180;
		}else if(selected==2){
			R=100;
			G=150;
			B=150;
		}
	}else{
		if(selected==0){
			R=170;
			G=200;
			B=200;
		}else if(selected==1){
			R=150;
			G=240;
			B=240;
		}else if(selected==2){
			R=110;
			G=180;
			B=180;
		}
	}
	hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
	fillColor=hex;

	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.fillStyle=fillColor;

	if(button==0){ // Main Header
		if(lowLB%2==0){
			draw.moveTo(pad,height-pad);
		}else{
			draw.moveTo(pad,height-bevel-buffer);
		}
		if(topLB%2==0){
			draw.lineTo(pad,pad);
		}else{
			draw.lineTo(pad,bevel+buffer);
			draw.lineTo(pad,bevel);
			draw.quadraticCurveTo(pad,pad,bevel,pad);
			//draw.lineTo(bevel,pad);
			draw.lineTo(bevel+buffer,pad);
		}
		if(topRB%2==0){
			draw.lineTo(width-pad,pad);
		}else{
			draw.lineTo(width-bevel-buffer,pad);
			draw.lineTo(width-bevel,pad);
			draw.quadraticCurveTo(width-pad,pad,width-pad, bevel);
			//draw.lineTo(width-pad,bevel);
			draw.lineTo(width-pad,bevel+buffer);
		}
		if(lowRB%2==0){
			draw.lineTo(width-pad,height-pad);
		}else{
			draw.lineTo(width-pad,height-bevel-buffer);
			draw.lineTo(width-pad,height-bevel);
			draw.quadraticCurveTo(width-pad,height-pad,width-bevel,height-pad);
			//draw.lineTo(width-bevel,height-pad);
			draw.lineTo(width-bevel-buffer,height-pad);
			draw.lineTo(bevel+buffer,height-pad);
		}
		if(lowLB%2==0){
			draw.lineTo(pad,height-pad);
		}else{
			draw.lineTo(bevel+buffer,height-pad);
			draw.quadraticCurveTo(pad,height-pad,pad,height-bevel);
			//draw.lineTo(pad,height-bevel);
			draw.lineTo(pad,height-bevel);
			draw.lineTo(pad,height-bevel-buffer);
		}
		draw.closePath();
		draw.fill();
	}else if(button == 2){ // Sub Header
		draw.moveTo(pad,0);
		draw.lineTo(width-pad,0);
		draw.lineTo(width-pad,height);
		draw.lineTo(pad,height);
		draw.closePath();
		draw.fill();
	}else if(button==1){ // Button
		draw.moveTo(pad,0);
		draw.lineTo(width-pad,0);
		draw.lineTo(width-pad,height);
		draw.lineTo(pad,height);
		draw.closePath();
		draw.fill();
	}
	if(slimLoad==0 && mobile==0){
		noise=draw.getImageData(0,0,width,height);
		pix = noise.data;
		for (var i=0; i<pix.length; i+=8) {
			R=(Math.sin( (((i/4)%width)/width) *7+66) + Math.sin( (((i/4)%width)/width) *69+266+i)/4 + Math.cos( (((i/4)%width)/width) *10+126+i)/4  )*.5+.5;
			G=(Math.sin( (((i/4)%width)/width) *9+744+i) + Math.cos( (((i/4)%width)/width) *77+636+i)/4 + Math.cos( (((i/4)%width)/width) *13+4626+i)/4  )*.5+.5;
			B=(Math.sin( (((i/4)%width)/width) *5+536+i) + Math.sin( (((i/4)%width)/width) *58+466+i)/4 + Math.cos( (((i/4)%width)/width) *20+757+i)/4  )*.5+.5;
			R=Math.min(R,Math.min(G,B));
			A=(R+B+G)/3;

			pix[i]=pix[i]*R;
			pix[i+1]=pix[i+1]*G;
			pix[i+2]=pix[i+2]*B;
			pix[i+3]=pix[i+3]*(A+.9*(1-A));
		}
		draw.putImageData(noise, 0, 0);
	}
	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.strokeStyle=strokeColor;
	mag=2;
	draw.lineWidth=mag;
	if(button==0){ // Main Header
		if(lowLB==1){
			draw.moveTo(pad,height-bevel-buffer);
		}else if(lowLB==0){
			draw.moveTo(pad,height-pad);
		}
		if(topLB==1){
			draw.lineTo(pad,bevel+buffer);
			draw.lineTo(pad,bevel);
			draw.quadraticCurveTo(pad,pad,bevel,pad);
			//draw.lineTo(bevel,pad);
			draw.lineTo(bevel+buffer,pad);
			draw.lineTo(width-bevel-buffer,pad);
		}else if(topLB==0){
			draw.lineTo(pad,pad);
			if(topRB==0){
				draw.lineTo(width-bevel-buffer,pad);
			}else{
				draw.moveTo(width-bevel-buffer,pad);
			}
		}
		if(topRB==1){
			draw.lineTo(width-bevel-buffer,pad);
			draw.lineTo(width-bevel,pad);
			draw.quadraticCurveTo(width-pad,pad,width-pad,bevel);
			//draw.lineTo(width-pad,bevel);
			draw.lineTo(width-pad,bevel+buffer);
		}else if(topRB==0){
			draw.lineTo(width-pad,pad);
			draw.lineTo(width-pad,bevel+buffer);
			if(lowRB==0){
				draw.lineTo(width-pad,height-bevel-buffer);
			}else{
				draw.moveTo(width-pad,height-bevel-buffer);
			}
		}
		if(lowRB==1){
			draw.lineTo(width-pad,height-bevel-buffer);
			draw.lineTo(width-pad,height-bevel);
			draw.quadraticCurveTo(width-pad,height-pad,width-bevel,height-pad);
			//draw.lineTo(width-bevel,height-pad);
			draw.lineTo(width-bevel-buffer,height-pad);
		}else if(lowRB==0){
			draw.lineTo(width-pad,height-pad);
			//draw.moveTo(width-pad,height-pad);
			if(lowLB==0){
				draw.lineTo(bevel+buffer,height-pad);
			}else{
				draw.moveTo(bevel+buffer,height-pad);
			}
		}
		if(lowLB==1){
			draw.lineTo(bevel+buffer,height-pad);
			draw.lineTo(bevel,height-pad);
			draw.quadraticCurveTo(pad,height-pad,pad,height-bevel);
			//draw.lineTo(pad,height-bevel);
			draw.lineTo(pad,height-bevel-buffer);
		}else if(lowLB==0){
			draw.lineTo(pad,height-pad);
		}
		draw.closePath();
		draw.lineJoin = 'round';
		draw.stroke();
	}else if(button == 2){ // Sub Headers
		draw.lineWidth=mag*1.5;
		draw.moveTo(pad,height);
		draw.lineTo(pad,0);
		draw.stroke();
		draw.lineWidth=mag;
		draw.lineTo(width-pad,0);
		draw.stroke();
		draw.lineWidth=mag*1.5;
		draw.lineTo(width-pad,height);
		draw.stroke();
		draw.lineWidth=mag;
		draw.lineTo(pad,height);
		draw.stroke();
	}else if(button == 1){ // Buttons
		draw.moveTo(pad,height);
		draw.lineTo(pad,0);
		draw.stroke();
		draw.moveTo(width-pad,0);
		draw.lineTo(width-pad,height);
		draw.stroke();
	}
	return height;
}
function changeMode(div,tgVal,tgGrp){
	var parent=$("#"+div).parent();
	var dia=0;
	var children=$(parent).children(".button");
	if(children.length == 0){
		children=$(parent).children(".buttonDia");
		dia=1;
	}
	if(children.length == 0){
		children=$(parent).children(".lwin_layer");
		dia=1;
	}
	var curVal,curGrp,curDiv,curChildren,bDiv,bCan;
	var togged=0;
	var grpCountBttn=0;
	for(var x=0;x<children.length; x++){
		curDiv=$(children[x]).attr('id');
		if(curDiv != div){
			curGrp=$(children[x]).attr('grp');
			if(curGrp == tgGrp && tgGrp != -1){
				grpCountBttn+=1;
				curVal=$(children[x]).attr('tgl');
				if(curVal == 1 ){
					$(children[x]).attr('tgl',0);
					curChildren=$(children[x]).children();
					bDiv=$(curChildren[1]).attr('id');
					bCam=$(curChildren[0]).attr('id');
					if(dia==0){
						bevelShape(bDiv,1,0,bCam,.65,10,3,1,0,2,0,2,0,0)
					}else{
						bevelShape(bDiv,1,0,bCam,.8,10,3,1,0,2,0,2,0,0);
					}
					$("#"+div).attr('tgl',1);
				}
				togged+=1;
			}
		}else{
			if($(children[x]).attr('tgl') == 1){
				togged=2;
				grpCountBttn+=1;
			}
		}
	}
	if(togged==1){
		togged=0;
	}
	if((togged==0 || grpCountBttn==1) && tgGrp != -1){
		if(tgVal == 0){
			$("#"+div).attr('tgl',1);
		}else{
			$("#"+div).attr('tgl',0);
		}
	}
}
function buttonSetMode(parentDiv, tgVal){
	var children,dia,curChildren,bDiv,bCam;
	for(var c=0; c<parentDiv.length;c++){
		children=$("#"+parentDiv[c]).children(".button");
		dia=0;
		if(children.length == 0){
			children=$("#"+parentDiv[c]).children(".buttonDia");
			dia=1;
		}
		if(children.length >0){
			$(children[0]).attr('tgl',tgVal);
			curChildren=$(children[0]).children();
			bDiv=$(curChildren[1]).attr('id');
			bCam=$(curChildren[0]).attr('id');
			if(dia==0){
				bevelShape(bDiv,1,0,bCam,.5,10,3,1,0,2,0,2,0,tgVal);
			}else{
				bevelShape(bDiv,1,0,bCam,.65,10,3,1,0,2,0,2,0,tgVal);
			}
		}
	}
}
function buildControls(){
	var divHeights=new Array();
	var maxHeight=0;
	var headerHeight=0;
	var height;
	var pad=5;
	var addWidth=30;
	var tgGrp,tgVal,slGrp,slTgl,slVal,slMin,slMax,slSteps,slTxtWidth,keyHit,controlText,divHeight,divWidth,canvasHeight,canvasWidth,move,moveDiv,div,divID,html,button,curButton,parentClass,parentHeight,offLeft,offTop;
	var headerCount=1;
	var buttonCount=1;
	var headers=new Array();
	var buttons=new Array();
	var colorSwatches=new Array();
	var swatch="";
	if(mobile==0){
		for(x=0;x<divs.length;x++){
			div='#'+divs[x];
			divHeight=$(div).height();
			parentClass=$(div).parent();
			parentHeight=divHeight;
			headers=$(div).children(".header");
			divHeight=$(headers[0]).height();
			divWidth=$(headers[0]).width()+addWidth;
			if(divHeight>headerHeight){
				headerHeight=divHeight;
			}
			parentHeight=parentHeight-divHeight;
			$(parentClass).css({top:parentHeight});
			$(parentClass).attr("x",$(div).offset().left);
			$(parentClass).attr("y",$(div).offset().top);
			//divID=$(headers[0]).attr('id');
			
			controlText=$(headers[0]).text();
			controlText="<span id='"+divs[x]+"_headText' style='color:#ffffff'>"+controlText+"</span>";
			html="<canvas style='z-index:0;' id='header"+headerCount+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html=html+"<div style='position:relative;bottom:"+divHeight+";z-index:1;' id='header"+headerCount+"Div'><b>"+controlText+"</b></div>";
			$(headers[0]).html(html);
			$(headers[0]).height(divHeight);
			$(headers[0]).width(divWidth);
			if(mobile==0){
				height=bevelShape(('header'+headerCount+'Div'),0,0,('header'+headerCount+'Canvas'),.85,10,3,1,1,1,0,0,0,0);
			}
			headerCount+=1;

			buttons=$(div).children(".subHeader");
			offLeft=0;
			for(i=0;i<buttons.length;i++){
				button=buttons[i];
				controlText=$(button).text();
				controlText="<span style='color:#ffffff'>"+controlText+"</span>";
				curButton=divs[x]+i+"_sub";
				html="<canvas style='z-index:0;' id='subHeader"+curButton+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
				html=html+"<div style='position:relative;bottom:"+divHeight+";z-index:1;' id='subHeader"+curButton+"Div'><b>"+controlText+"</b></div>";
				$(button).html(html);
				$(button).height(divHeight);
				$(button).width(divWidth);
				if(mobile==0){
					height=bevelShape(('subHeader'+curButton+'Div'),2,0,('subHeader'+curButton+'Canvas'),.85,10,3,1,1,1,0,0,0,0);
				}
			}

			buttons=$(div).children(".button");
			offLeft=0;
			for(i=0;i<buttons.length;i++){
				button=buttons[i];
				curButton=divs[x]+buttonCount;
				divHeight=$(button).height();
				divWidth=$(button).width();
				
				if(!$(button).is("[id]")){
					$(button).attr('id', "bGen-"+x+"-"+i);
				}
				divID=$(button).attr('id');
				tgGrp=$(button).attr('grp');
				tgVal=$(button).attr('tgl');
				
				if(tgGrp==-3){ // Find and generate dividers
					divHeight=5;
					controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:-10px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:2px;background-color:#669999;'>&nbsp;</div></div>";
				}else if(tgGrp==-2){ // Find and generate dividers
					divHeight=13;
					controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:-10px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:4px;background-color:#669999;'>&nbsp;</div></div>";
				}else{
					controlText=$(button).html();
				}
				
				html="<canvas style='z-index:0;' id='button"+curButton+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
				html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:20;z-index:1;' id='button"+curButton+"Div'>"+controlText+"</div>";
				$(button).html(html);
				$(button).height(divHeight);
				$(button).width(divWidth);
				//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
				if(mobile==0){
					height=bevelShape(('button'+curButton+'Div'),1,0,('button'+curButton+'Canvas'),.65,10,3,1,0,2,0,2,0,tgVal);
				}
				if(tgGrp>-2){
					$(button).attr("onMouseOver","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+curButton+"Div'),1,0,('button"+curButton+"Canvas'),.65,10,3,1,0,2,0,2,1,tVal);");
					$(button).attr("onMouseDown","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+curButton+"Div'),1,0,('button"+curButton+"Canvas'),.65,10,3,1,0,2,0,2,2,tVal);");
					$(button).attr("onMouseUp","var tVal=$('#"+divID+"').attr('tgl');var tGrp=$('#"+divID+"').attr('grp');changeMode('"+divID+"',tVal,tGrp);tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+curButton+"Div'),1,0,('button"+curButton+"Canvas'),.65,10,3,1,0,2,0,2,1,tVal);");
					$(button).attr("onMouseOut", "var tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+curButton+"Div'),1,0,('button"+curButton+"Canvas'),.65,10,3,1,0,2,0,2,0,tVal);");
				}else{
					$(button).css({'cursor':'auto'});
				}
				buttonCount+=1;
			}
			colorSwatches=$(div).children(".pickBox");
			if(colorSwatches.length>0){
				html="";
				
				swatchCount=144;
				button=colorSwatches[0];
				swatchSize=13;
				colCount=12;
				for(i=0;i<swatchCount;i++){
					r=Math.floor(Math.min(255,Math.max(0,((i%colCount)/colCount))*255+(Math.floor(i/colCount)/colCount)*100));
					g=Math.floor(Math.min(255,Math.max(0,Math.min(1,Math.sin((i/swatchCount+i/3.14159265)*2)*1.2))*255+(Math.floor(i/colCount)/colCount)*100));
					b=Math.floor(Math.min(255,Math.max(0,Math.floor(i/colCount)/(swatchCount/colCount))*255+(Math.floor(i/colCount)/colCount)*100));
					hex=rgbToHex( r,g,b  );
					//html=html+"<canvas style='z-index:0;' id='swatch"+i+"Canvas' height='"+swatchSize+"' width='"+swatchSize+"'></canvas>\n";
					html=html+"<div align='left' style='position:relative;bottom:"+(i*swatchSize-swatchSize*(i%colCount)-i%colCount)+";left:"+(Math.floor(i/colCount)*(swatchSize*1.2))+";z-index:1;height:"+swatchSize+";width:"+swatchSize+";overflow:hidden;background-color:"+hex+";' id='swatch"+i+"Div'><span style='height:"+swatchSize+";width:"+swatchSize+"' onClick='$(\"#sl_red_val\").val("+r+");$(\"#sl_green_val\").val("+g+");$(\"#sl_blue_val\").val("+b+");setSlideControl(\"sl_red\",'');setSlideControl(\"sl_green\",'');setSlideControl(\"sl_blue\",'');buttonSetMode([\"colorPicker\",\"colorPickerDialogue\"],0);' title='"+hex+"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>\n";
					//html=html+"<div align='left' style='position:relative;bottom:15;left:20;z-index:1;;' id='swatch"+i+"Div'>&nbsp;</div>\n";
				}
				$(button).html(html);
				swatchCount=0;
				
				offTop=(colCount+1)*swatchSize;
				offLeft=(colCount*(swatchSize*1.2));
				//for(i=0;i<swatchCount;i++){
					////bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
					//height=bevelShape(('swatch'+i+'Div'),1,0,('swatch'+i+'Canvas'),.1,1,1,1,0,2,0,2,1);
					//$(button).attr("onMouseOver","bevelShape(('swatch"+i+"Div'),1,0,('swatch"+i+"Canvas'),.5,10,3,1,0,2,0,2,1);");
					//$(button).attr("onMouseDown","bevelShape(('swatch"+i+"Div'),1,0,('swatch"+i+"Canvas'),.5,10,3,1,0,2,0,2,2);");
					//$(button).attr("onMouseUp","bevelShape(('swatch"+i+"Div'),1,0,('swatch"+i+"Canvas'),.5,10,3,1,0,2,0,2,1);");
					//$(button).attr("onMouseOut", "bevelShape((('swatch"+i+"Div'),1,0,('swatch"+i+"Canvas'),.5,10,3,1,0,2,0,2,0);");
				//}
				
				
				for(i=0;i<colorSwatches.length;i++){
					button=colorSwatches[i];
					divHeight=180;//$(button).height();
					divWidth=$(div).parent().width();//$(button).width();
					offTop=(divHeight-offTop)/2;
					offLeft=($(button).width()-offLeft)/2+1;
					controlText=$(button).html();
					controlText="<div style='position:relative;left:"+offLeft+"px;top:"+offTop+"px;'>"+controlText+"</div>";
					divID=$(button).attr('id');
					html="<canvas style='z-index:0;' id='button"+divs[x]+buttonCount+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
					html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:0;z-index:1;' id='button"+divs[x]+buttonCount+"Div'>"+controlText+"</div>";
					$(button).html(html);
					$(button).height(divHeight);
					$(button).width(divWidth);
					//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
					height=bevelShape(('button'+divs[x]+buttonCount+'Div'),1,0,('button'+divs[x]+buttonCount+'Canvas'),.65,10,3,1,0,2,0,2,0,0);
					
					//$(button).attr("onMouseOver","bevelShape(('button"+divs[x]+buttonCount+"Div'),1,0,('button"+divs[x]+buttonCount+"Canvas'),.5,10,3,1,0,2,0,2,1);");
					//$(button).attr("onMouseDown","bevelShape(('button"+divs[x]+buttonCount+"Div'),1,0,('button"+divs[x]+buttonCount+"Canvas'),.5,10,3,1,0,2,0,2,2);");
					//$(button).attr("onMouseUp","bevelShape(('button"+divs[x]+buttonCount+"Div'),1,0,('button"+divs[x]+buttonCount+"Canvas'),.5,10,3,1,0,2,0,2,1);");
					//$(button).attr("onMouseOut", "bevelShape(('button"+divs[x]+buttonCount+"Div'),1,0,('button"+divs[x]+buttonCount+"Canvas'),.5,10,3,1,0,2,0,2,0);");
					buttonCount+=1;
				}
			}
			buttons=$(div).children(".slider");
			offLeft=0;
			for(i=0;i<buttons.length;i++){
				button=buttons[i];
				curButton=divs[x]+buttonCount+"_slider";
				divHeight=$(button).height();
				divWidth=$(button).width();

				//$(button).attr('id', "sliderGen-"+x+"-"+i)
				divID=$(button).attr('id');
				slGrp=$(button).attr('grp');
				slTgl=$(button).attr('tgl');
				slVal=$(button).attr('val');
				slMin=$(button).attr('min');
				slMax=$(button).attr('max');
				slSteps=$(button).attr('steps');
				var onslide='';
				if(typeof $(button).attr('onslide') != "undefined"){
					onslide=$(button).attr('onslide');
				}
				slTxtWidth=27;
				controlText=$(button).text();
				
				html="<canvas style='z-index:0;' id='button"+curButton+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
				// Inner Text
				html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:0px;z-index:2;' id='button"+curButton+"Div'>&nbsp;<span style='opacity:0.85;font-size:80%;'>"+controlText+"</span></div>\n";
				// Slider
				html=html+"<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;bottom:"+divHeight*2+";left:10px;z-index:1;'><div style='height:3px;width:"+(divWidth+10-slTxtWidth*2)+"px;overflow:hidden;position:relative;top:"+(divHeight/2-1)+"px;background-color:#769f9f;'>&nbsp;</div></div>";
				// Number Field
				html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+divHeight*3+";right:4px;z-index:3;text-align:right;'>";
				html=html+"<form id='"+divID+"_form'><input type='text' value='"+slVal+"' id='"+divID+"_val' size='3' min='"+slMin+"' max='"+slMax+"' style='width:"+slTxtWidth+"px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form></div>";
				// Slider Control
				var slCntlWidth=10;
				var slCntlHeight=17;
				
				var val=Math.max(0,Math.min(1,(slVal-slMin)/(slMax-slMin)));
				var vmax=(divWidth-34)-7;
				var vmin=4;
				var diffx=val*(vmax-vmin)+vmin;
				//var vmax=(divWidth-34)-7;
				//var vmin=4;
				//var diffx=Math.min(vmax,Math.max(vmin,slVal));
				html=html+"<div id='slider"+divID+"Div' leftPad='"+vmin+"' rightPad='"+vmax+"' style='opacity:0.7;z-index:4;position:relative;bottom:"+(divHeight*4-1)+"px;left:"+diffx+"px;width:"+slCntlWidth+"px;height:"+slCntlHeight+"px;'>";
				html=html+"<canvas id='slider"+curButton+"Canvas' height='"+slCntlHeight+"px' width='"+slCntlWidth+"px'></canvas></div>\n";
				//Slider Click Field
				html=html+"<div id='sliderClick_"+divID+"' onmouseover=\"hoverSlider='"+divID+"';\" onmouseout=\"hoverSlider='';\" onmousedown=\"slDown=1;slideControl('slider"+divID+"Div',"+mouseX+",0,"+slMin+","+slMax+","+slSteps+",'"+divID+"_val',1,0,'');\" onmouseup=\"slDown=0;"+onslide+"\" style='overflow:hidden;height:"+divHeight+"px;width:"+(divWidth-34)+"px;position:relative;bottom:"+(divHeight*5-2)+"px;left:2px;z-index:5;cursor:col-resize;'>&nbsp;</div>";

				$(button).html(html);
				$(button).height(divHeight);
				$(button).width(divWidth);
				
				$("#"+divID+"_form").on('keyup keypress', function(e){
					keyHit=e.keyCode || e.which;
					if(keyHit===13){
						var chld=$("#"+$(e.target).attr('id')).parent().parent().parent().attr("id");
						setSlideControl(chld,'');
						e.preventDefault();
						return false;
					}
				});
				
				//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
				
				if(mobile==0){
					height=bevelShape(('button'+curButton+'Div'),1,0,('button'+curButton+'Canvas'),.65,10,3,1,0,2,0,2,0,tgVal);
				}
				sliderShape('slider'+divID+'Div','slider'+curButton+'Canvas',1,5,1);
				buttonCount+=1;
			}
		}
	}
	parentClass=$("#slideMenu").parent();
	//$(parentClass).height($(parentClass).height()+addWidth);
	//$(parentClass).width($(parentClass).width()+addWidth);
	divHeight=$("#slideMenu").height();
	divWidth=$("#slideMenu").width();
	controlText=$("#slideMenu").html();
	divID=$("#slideMenu").attr('id');
	html="<canvas style='z-index:0;position:relative;' id='slideMenuCanvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
	html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:11;z-index:1;' id='slideMenuDiv'>"+controlText+"</div>";
	$("#slideMenu").html(html);
	$("#slideMenu").height(divHeight);
	$("#slideMenu").width(divWidth);
	$("#slideMenu").css({'cursor':'pointer'});
	//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
	var pattyPad=10;
	if(mobile==0){
		pattyPad=10;
	}
	height=bevelShape(('slideMenuDiv'),0,0,('slideMenuCanvas'),.65,pattyPad,3,1,1,0,0,0,0,0);
	$("#slideMenu").attr("onMouseOver","bevelShape(('slideMenuDiv'),0,0,('slideMenuCanvas'),.65,"+pattyPad+",3,1,1,0,0,0,1,0);");
	$("#slideMenu").attr("onMouseDown","bevelShape(('slideMenuDiv'),0,0,('slideMenuCanvas'),.65,"+pattyPad+",3,1,1,0,0,0,2,0);");
	$("#slideMenu").attr("onMouseUp","bevelShape(('slideMenuDiv'),0,0,('slideMenuCanvas'),.65,"+pattyPad+",3,1,1,0,0,0,1,0);");
	$("#slideMenu").attr("onMouseOut", "bevelShape(('slideMenuDiv'),0,0,('slideMenuCanvas'),.65,"+pattyPad+",3,1,1,0,0,0,0,0);");
	
	/*buttons=$("#slideMenu").find(".burgerBar");
	for(i=0;i<buttons.length;i++){
		button=buttons[i];
		divHeight=5;
		var patBottom=2+i*4;//divHeight*.2;
		if(mobile==1){
			//divHeight=$(button).height()+addWidth;
			patBottom=divHeight;
		}
		$(button).parent().height(addWidth);
		divWidth=$(button).width();
		controlText=$(button).html();
		divID=$(button).attr('id');
		html="<canvas style='z-index:0;' id='burger"+i+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
		html=html+"<div style='position:relative;bottom:"+patBottom+";left:20;z-index:1;' id='burger"+i+"Div'>"+controlText+"</div>";
		$(button).html(html);
		if(mobile==0){
			$(button).css({'right':7,'top':(i*3+8)+'px'});
		}
		$(button).height(divHeight);
		$(button).width(divWidth);
		//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)

		height=bevelShape(('burger'+i+'Div'),0,-2,('burger'+i+'Canvas'),.65,4,0,0,1,1,1,1,1,0);
		buttonCount+=1;
	}*/
	
	// Place hamburger
	divHeight=$(parentClass).height();
	divWidth=$(parentClass).width();
	$(parentClass).css({'position':'fixed','bottom':'0px','right':'0px'});
	
	colorSwatches=$("#colorPickerDialogue").find(".pickBoxMobile");
	try{
		html="";
		swatchCount=60;
		button=colorSwatches;
		swatchSize=60;
		colCount=6;
		divWidth=$(colorSwatches).parent().width()+addWidth;
		divHeight=(colCount*(swatchSize)+30);
		//$(colorSwatches).width(divWidth);
		//$(colorSwatches).parent().width(divWidth);
		$(colorSwatches).height(divHeight);
		$(colorSwatches).width(divWidth);
		$(colorSwatches).css({'overflow':'hidden'});
		for(i=0;i<swatchCount;i++){
			if(i!=0 && i!=(swatchCount-1)){
				r=Math.floor(Math.min(255,Math.max(0,((i%colCount)/colCount))*255+(Math.floor(i/colCount)/colCount)*100));
				g=Math.floor(Math.min(255,Math.max(0,Math.min(1,Math.sin((i/swatchCount+i/3.14159265)*2)*1.3))*255+(Math.floor(i/colCount)/colCount)*100));
				b=Math.floor(Math.min(255,Math.max(0,Math.floor(i/colCount)/(swatchCount/colCount))*255+(Math.floor(i/colCount)/colCount)*100));
			}else if(i==(swatchCount-1)){
				r=255;
				g=255;
				b=255;
			}else{
				r=0;
				g=0;
				b=0;
			}

			hex=rgbToHex( r,g,b  );
			//html=html+"<canvas style='z-index:0;' id='swatch"+i+"Canvas' height='"+swatchSize+"' width='"+swatchSize+"'></canvas>\n";
			//html=html+"<div style='cursor:pointer;position:relative;bottom:"+(i*swatchSize-swatchSize*(i%colCount)-i%colCount-10)+";left:"+((Math.floor(i/colCount)*(swatchSize*1.2)))+";z-index:1;height:"+swatchSize+";width:"+swatchSize+";overflow:hidden;background-color:"+hex+";' id='swatch"+i+"SlideDiv' class='slideSwatch' onClick='onDia=0;dialogueOption(0, \"mobileMenu\");$(\"#cs_red_val\").val("+r+");$(\"#cs_green_val\").val("+g+");$(\"#cs_blue_val\").val("+b+");$(\"#slDia_red_val\").val("+r+");$(\"#slDia_green_val\").val("+g+");$(\"#slDia_blue_val\").val("+b+");setSlideControl(\"slDia_red\");setSlideControl(\"slDia_green\");setSlideControl(\"slDia_blue\")if(mobile==0){setColorFromColorSphere(\"colorSphereCanvas\",\"curColor_colorSphereCanvas\",0);setSlideControl(\"cs_red\");setSlideControl(\"cs_green\");setSlideControl(\"cs_blue\");};buttonSetMode([\"colorPicker\",\"colorPickerDialogue\"],0);' title='"+hex+"'>&nbsp;</div>\n";
			html=html+"<div style='cursor:pointer;position:relative;bottom:"+(i*swatchSize-swatchSize*(i%colCount)-i%colCount-10)+";left:"+((Math.floor(i/colCount)*(swatchSize*1.2)))+";z-index:1;height:"+swatchSize+";width:"+swatchSize+";overflow:hidden;background-color:"+hex+";' id='swatch"+i+"SlideDiv' class='slideSwatch' onClick=\"$('#cs_red_val').val("+r+");$('#cs_green_val').val("+g+");$('#cs_blue_val').val("+b+");$('#slDia_red_val').val("+r+");$('#slDia_green_val').val("+g+");$('#slDia_blue_val').val("+b+");setSlideControl('slDia_red','');setSlideControl('slDia_green','');setSlideControl('slDia_blue','');if(mobile==0){setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);setSlideControl('cs_red','');setSlideControl('cs_green','');setSlideControl('cs_blue','');};buttonSetMode(['colorPicker','colorPickerDialogue'],0);\" title='"+hex+"'>&nbsp;</div>\n";
			//html=html+"<div align='left' style='position:relative;bottom:15;left:20;z-index:1;;' id='swatch"+i+"Div'>&nbsp;</div>\n";
		}
		$(colorSwatches).html(html);
		swatchCount=0;
		
		divHeight=$(colorSwatches).height();
		divWidth=$(colorSwatches).width();
		controlText=$(colorSwatches).html();
		html="<canvas style='z-index:0;position:relative;' id='slidePickerCanvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
		html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:5;z-index:1;' id='slidePickerDiv'>"+controlText+"</div>";
		$(colorSwatches).html(html);
		//bevelShapediv,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
		height=bevelShape(('slidePickerDiv'),1,0,('slidePickerCanvas'),.65,15,3,1,1,0,0,0,0,0);
	}catch(err){
		height=-1;
	}
}
function buildLayersWindow(){
	var lwin=$("#layersWindow");
	var lW=150;//$(lwin).width();
	var lH=$(lwin).height();
	var defHeight=20;
	var csTop=$("#colorSphere").position().top;
	var head="<div id='lwin_parent' style='width:"+lW+";overflow:hidden;'><div id='lwin_header' class='lwin_header' style='width:"+lW+"px;height:20px;overflow:hidden;color:#ffffff;' align='center'>Layers</div>\n";
	var body="<div id='lwin_layerListView' style='overflow:hidden;max-height:"+(csTop-20-defHeight-11)+"px;width:"+lW+"px;'><div id='lwin_layerList' style='position:relative;top:0px;'>\n";
	body+="<div id='lwin_l1' class='lwin_layer' name='Layer 1' canvasName='"+curCanvas+"' opacity='1' inStack='1' tgl='1' grp='1' doubleClick='0' mask='0' vis='1' style='cursor:pointer;width:"+lW+"px;height:50px;overflow:hidden;color:#dddddd;text-shadow:3px 3px 3px black;position:relative;top:0px;'>\n";
	body+="<table cellspacing=0 cellpadding=0 style='border:0px;height:50px;width:"+lW+"px;'><tr><td width='20px' align='center' class='layerCount'>1</td>\n";
	body+="<td width='50px' style='background-color:#000000;'><canvas style='z-index:0;' id='lwin_l1_th' height='50px' width='50px'></canvas></td>\n";
	body+="<td class='layerName' style='padding-left:3px;font-style:normal;color:#cccccc;'>Layer 1</td></tr></table>\n";
	body+="</div>\n";
	
	body+="<div id='lwin_bgLayer' class='lwin_layer' name='lwin_background' canvasName='gradientBG' opacity='1' tgl='0' grp='-1' doubleClick='0' style='cursor:pointer;width:"+lW+"px;height:50px;overflow:hidden;color:#dddddd;text-shadow:3px 3px 3px black;position:relative;top:0px;'>\n";
	body+="<table cellspacing=0 cellpadding=0 style='border:0px;height:50px;width:"+lW+"px;'><tr><td width='20px' align='center' class='layerCount'>-</td>\n";
	body+="<td width='50px' style='background-color:#000000;'><canvas style='z-index:0;' id='lwin_bgLayer_th' height='50px' width='50px'></canvas></td>\n";
	body+="<td class='layerName' style='padding-left:3px;'><span style='font-size:70%;'><i>Background</i></span></td></tr></table>\n";
	body+="</div>\n";
	
	body+="</div></div>\n";
	var buttons="<div id='lwin_buttons' style='width:"+lW+"px;height:"+defHeight+"px;overflow:hidden;color:#cccccc;text-shadow:3px 3px 3px black;'>\n";
	buttons+="<div id='lwin_b1' class='lwin_button' tgl='0' grp='-1' onClick='addLayer();' style='cursor:pointer;height:"+defHeight+"px;width:"+(lW/2)+"px;overflow:hidden;' align='center'>New</div>\n";
	buttons+="<div id='lwin_b2' class='lwin_button' tgl='0' grp='-1' onClick='deleteLayer(1,1,1);' style='position:relative;bottom:0px;left:0px;cursor:pointer;height:"+defHeight+"px;width:"+(lW/2)+"px;overflow:hidden;' align='center'>Delete</div>\n";
	buttons+="</div>\n";
	
	var footer="<div id='lwin_footer' class='lwin_footer' vis='1' style='cursor:row-resize;width:"+lW+"px;height:11px;font-size:56%;'>&nbsp;<div style='height:1px;width:"+(lW-30)+"px;background-color:#226666;overflow:hidden;position:relative;left:15px;top:-7px;'>&nbsp;</div>&nbsp;</div>\n";
	footer+="</div>"; //Close lwin_parent div
	footer+="<canvas id='lwin_scrollBar' height='20' width='7' style='position:absolute;left:-10px;top:20px;cursor:row-resize;'></canvas>";
	var offLeft=0;
	var html=head;
	html+=body;
	html+=buttons;
	html+=footer;
	$(lwin).html(html);
	$(lwin).attr("onMouseOver", "if(geoTool>0){geoToolStopDraw=1;};");
	$(lwin).attr("onMouseOut", "if(geoTool>0){geoToolStopDraw=0;};");
	$('#lwin_scrollBar').attr("onMouseDown", "if(geoTool>0){geoToolStopDraw=1;};onDia=1;layerWindowManualScroll(1);");
	$('#lwin_scrollBar').attr("onMouseUp", "if(geoTool>0){geoToolStopDraw=0;};onDia=0;");
	$('#lwin_parent').attr("onMouseOver", "if(geoTool>0){geoToolStopDraw=1;};hoverSlider='lwin_layerList';");
	$('#lwin_parent').attr("onMouseOut", "if(geoTool>0){geoToolStopDraw=0;};hoverSlider='';");
	var bW=$("#lwin_b1").width();
	var bH=$("#lwin_b1").height();
	$("#lwin_b2").css({'bottom':bH,'left':bW});
	var lDivs=['lwin_header','lwin_l1','lwin_bgLayer','lwin_b1','lwin_b2','lwin_footer'];
	var lD,addDown,addUp;
	for(i=0;i<lDivs.length;i++){
		lD=$("#"+lDivs[i]);
		controlText=$(lD).html();
		//controlText="<span style='color:#ffffff'>"+controlText+"</span>";
		curButton=$(lD).attr('id');
		curClass=$(lD).attr('class');
		divHeight=$(lD).height();
		divWidth=$(lD).width();
		html="<canvas style='z-index:0;' id='"+curButton+"_Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
		html=html+"<div style='position:relative;bottom:"+divHeight+";z-index:1;height:"+divHeight+"px;' id='"+curButton+"_Div'>"+controlText+"</div>\n";
		$(lD).html(html);
		$(lD).height(divHeight);
		$(lD).width(divWidth);
		if(curClass=='lwin_header'){//Head
			if(mobile==0){
				height=bevelShape((curButton+"_Div"),0,0,(curButton+"_Canvas"),.85,10,3,1,0,0,0,0,0,0);
			}
		}else if(curClass=='lwin_layer'){//Body
			if(curButton=="lwin_l1"){
				if(mobile==0){
					bevelShape((curButton+"_Div"),1,0,(curButton+"_Canvas"),.75,10,3,1,0,2,0,2,1,1);
				}
				$(lD).attr("onclick","curLayer='"+curButton+"';curCanvas='"+curButton+"_draw';if(geoTool>0){geoDrawCheck(3);}; setToolMode(0,parseFloat($('#'+curLayer).attr('opacity'))); if($('#"+curButton+"').attr('doubleClick')==0){$('#"+curButton+"').attr('doubleClick',1);countdown('$(\"#"+curButton+"\").attr(\"doubleClick\",0);',12);}else{doubleClickLayer('"+curButton+"');}");
				addDown="draggingLayer=1;dragLayer('"+curButton+"',0,0,0,1);";
			}else{
				if(mobile==0){
					bevelShape((curButton+"_Div"),1,0,(curButton+"_Canvas"),.75,10,3,1,0,2,0,2,0,0);
				}
				$(lD).attr("onclick","curLayer='"+curButton+"';if(geoTool>0){geoDrawCheck(3);};if($('#"+curButton+"').attr('doubleClick')==0){$('#"+curButton+"').attr('doubleClick',1);countdown('$(\"#"+curButton+"\").attr(\"doubleClick\",0);',12);}else{doubleClickLayer('"+curButton+"');}");
				addDown="";
			}
			$(lD).attr("onMouseOver","var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,1,tVal);");
			$(lD).attr("onMouseDown",addDown+"var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,2,tVal);");
			$(lD).attr("onMouseUp","draggingLayer=0;var tVal=$('#"+curButton+"').attr('tgl');var tGrp=$('#"+curButton+"').attr('grp');changeMode('"+curButton+"',tVal,tGrp);tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,1,tVal);");
			$(lD).attr("onMouseOut","draggingLayer=-1;var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,0,tVal);");
		}else if(curClass=='lwin_footer'){//Footer	
			if(mobile==0){
				height=bevelShape((curButton+"_Div"),0,0,(curButton+"_Canvas"),.85,5,1,1,0,0,1,1,0,0);
			}
			$(lD).attr("onclick","layerWindowVisibility(2,'lwin_footer','layersWindow',-($('#lwin_footer').position().top),0);");
		}else if(curClass=='lwin_button'){
			if(mobile==0){
				height=bevelShape((curButton+"_Div"),0,0,(curButton+"_Canvas"),.75,10,3,1,0,0,0,0,0,0);
			}
			$(lD).attr("onMouseOver","var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),0,0,('"+curButton+"_Canvas'),.75,10,3,1,0,0,0,0,1,tVal);");
			$(lD).attr("onMouseDown","var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),0,0,('"+curButton+"_Canvas'),.75,10,3,1,0,0,0,0,2,tVal);");
			$(lD).attr("onMouseUp","var tVal=$('#"+curButton+"').attr('tgl');var tGrp=$('#"+curButton+"').attr('grp');changeMode('"+curButton+"',tVal,tGrp);tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),0,0,('"+curButton+"_Canvas'),.75,10,3,1,0,0,0,0,1,tVal);");
			$(lD).attr("onMouseOut", "var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),0,0,('"+curButton+"_Canvas'),.75,10,3,1,0,0,0,0,0,tVal);");
		}
		//Draw scroll bar
		drawLine([0,0, 1,0, 3,7, 3,13, 1,20, 0,20, 0,0],2,[75,95,109],.65,1,'lwin_scrollBar',[-1]);

	}
	if(mobile==0){
		updateLayerCanvas('lwin_bgLayer');
	}else{
		$(lwin).css({'visibility':'hidden','left':-500});
	}
	
}
function addLayer(){
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	layerUniqueCount+=1;
	var count=layerUniqueCount;
	//var count=children.length+1;
	var divHeight=$(layerList).height();
	var divWidth=$(layerList).width();
	var curButton="lwin_l"+count;
	var html="<div id='"+curButton+"' class='lwin_layer' name='Layer "+count+"' canvasName='"+curButton+"_draw' opacity='1' inStack='"+count+"' tgl='0' grp='1' doubleClick='0' mask='0' vis='1' style='cursor:pointer;width:"+divWidth+"px;height:50px;overflow:hidden;color:#cccccc;text-shadow:3px 3px 3px black;position:relative;top:0px;'>\n";
	html+="<table cellspacing=0 cellpadding=0 style='border:0px;height:50px;width:"+divWidth+"px;'><tr><td width='20px' align='center' class='layerCount'>"+count+"</td>\n";
	html+="<td width='50px' style='background-color:#000000;'><canvas style='z-index:0;' id='"+curButton+"_th' height='50px' width='50px'></canvas></td>\n";
	html+="<td class='layerName' style='padding-left:3px;font-style:normal;color:#cccccc;'>Layer "+count+"</td></tr></table>\n";
	html+="</div>\n";
	//html+=$("#lwin_layerList").html();
	$("#lwin_layerList").prepend(html);
	var controlText=$("#"+curButton).html();
	html="<canvas style='z-index:0;' id='"+curButton+"_Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
	html=html+"<div style='position:relative;bottom:"+divHeight+";z-index:1;height:"+divHeight+"px;' id='"+curButton+"_Div'>"+controlText+"</div>\n";
	$("#"+curButton).html(html);
	$("#"+curButton).attr("onclick","curLayer='"+curButton+"';curCanvas='"+curButton+"_draw';if(geoTool>0){geoDrawCheck(3);}; setToolMode(0,parseFloat($('#'+curLayer).attr('opacity'))); if($('#"+curButton+"').attr('doubleClick')==0){$('#"+curButton+"').attr('doubleClick',1);countdown('$(\"#"+curButton+"\").attr(\"doubleClick\",0);',12);}else{doubleClickLayer('"+curButton+"');}");
	$("#"+curButton).attr("onMouseOver","var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,1,tVal);");
	$("#"+curButton).attr("onMouseDown","draggingLayer=1;dragLayer('"+curButton+"',0,0,0,1);var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,2,tVal);");
	$("#"+curButton).attr("onMouseUp","draggingLayer=0;var tVal=$('#"+curButton+"').attr('tgl');var tGrp=$('#"+curButton+"').attr('grp');changeMode('"+curButton+"',tVal,tGrp);tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,1,tVal);");
	$("#"+curButton).attr("onMouseOut", "draggingLayer=-1;var tVal=$('#"+curButton+"').attr('tgl');bevelShape(('"+curButton+"_Div'),1,0,('"+curButton+"_Canvas'),.75,10,3,1,0,2,0,2,0,tVal);");
	
	//Generate new canvas for this layer
	html="<canvas id='"+curButton+"_draw' style='visibility:visible;z-index:"+count+";position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;' height='100px' width='100px'></canvas>\n";
	$("#documentLayers").prepend(html);
	canvas=document.getElementById(curButton+"_draw");
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);
	
	// Remake layer backgrounds
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var counts=$(layerList).find('.lwin_layer');
	
	if(mobile==0){
		for(var i=0;i<counts.length;++i){
			height=bevelShape(($(counts[i]).attr('id')+"_Div"),1,0,($(counts[i]).attr('id')+"_Canvas"),.75,10,3,1,0,2,0,2,0,0);
		}
	}
	renumberLayers();
	//rebuildLayerThumbs();
	var curLayerStore=curLayer;
	curLayer=curButton;
	curCanvas=curButton+"_draw";
	eval($("#"+curButton).attr('onMouseUp'));
	resizeLayerScrollWindow();
	setToolMode(0,parseFloat($("#"+curLayer).attr('opacity')));
	setLayerPosition(curLayer,parseInt($('#'+curLayerStore).attr('inStack'))+1);
	return [curButton,curButton+"_draw"];
}
function deleteLayer(alVis,click,noLayerCheck){
	var lName=$("#"+curLayer).attr("name");
	var tmpName;
	if(typeof(lName) != 'undefined'){
		if(lName!='lwin_background'){
			var cName=$("#"+curLayer).attr("canvasName");
			$("#"+curLayer).remove();
			$("#"+cName).remove();
			var layerList=$("#lwin_layerList");
			var children=$(layerList).children();
			var counts=$(layerList).find('.lwin_layer');
			if(noLayerCheck==1){
				if(counts.length==1){
					addLayer();
				}else{
					curLayer=$(counts[0]).attr("id");
					curCanvas=$(counts[0]).attr("canvasName");
					eval($(counts[0]).attr('onMouseUp'));
				}
			}
			renumberLayers();
			if(alVis==1){
				tmpName=tempWindow('Deleted layer - '+lName,[-1,-1],'',10,1,0,0);
			}
		}else{
			if(alVis==1){
				tmpName=tempWindow('Sorry, you can\'t delete the background; double click, to edit it.',[-1,-1],'',30,1,0,0);
			}
		}
	}else{
		if(alVis==1){
			tmpName=tempWindow('Failed to delete, no active layer.',[-1,-1],'',15,1,0,0);
		}
	}
	if(click==1){
		var layerList=$("#lwin_layerList");
		var children=$(layerList).children();
		var counts=$(layerList).find('.lwin_layer');
		$(counts[0]).attr('tgl','1');
		eval($(counts[0]).attr('onclick'));
		eval($(counts[0]).attr('onMouseUp'));
	}
	resizeLayerScrollWindow();
	if(tileUpdate==1){
		updateTiles();
	}
}
function renumberLayers(){
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var counts=$(layerList).find('.layerCount');
	for(var i=0;i<counts.length-1;++i){
		$(counts[i]).html(i+1);
		$(children[i]).attr('inStack', counts.length-1-i); // Update inStack value, keeps new layers being placed in the correct spots
	}
	$(counts[counts.length-1]).html('-');
}
function doubleClickLayer(layer){
	var name=$('#'+layer).attr('name');
	if(name!='lwin_background'){
		dialogueOption(1, 'layerEditor');
		layerWindowVisibility(1);
		var header=$('#layerEditor').find('.headerDia')[0];
		header=$(header).children()[1];
		$(header).html('<b>Editing layer - '+name+'</b>');
		$('#eidtLayer_curName').html(name);
		$('#editLayer_id').val(layer);
		$('#editLayer_rename').val(name);
		var mk=parseInt($('#'+layer).attr('mask'));
		var mkVal= (mk==1 ? true : false);
		var vs=parseInt($('#'+layer).attr('vis'));
		var vsVal= (mk==1 ? true : false);
		$('#editLayer_mask').prop('checked',mkVal);
		$('#editLayer_vis').prop('checked',vsVal);
		$("#editLayer_opacity_val").val($("#"+layer).attr('opacity'));
		setSlideControl('editLayer_opacity','');
		uCurCanvas=$("#"+curLayer).attr('canvasName');
		pushToCanvas(uCurCanvas,"editLayer_tempDisp");
	}else{
		setGradientMarkerPositions();
		layerWindowVisibility(1);
		$('#editBackground_fColor').val(gradFromHex);
		$('#editBackground_tColor').val(gradToHex);
		setFromToColor=0;
		setBGToFromColor(gradFromHex);
		setFromToColor=1;
		setBGToFromColor(gradToHex);
	
		markerVis(1);
		if(parseInt($('#editBackground_method').val())==1){
			runDisplayPattern();
		}
		dialogueOption(1, 'backgroundEditor');
	}
	//$("#layersWindow").css('top',0);
}
function markerVis(vis){
	if(vis==1){
		$("#editBackground_sampleMarker").css({'zIndex':2999});
		$("#editBackground_fromMarker").css({'zIndex':3000});
		$("#editBackground_toMarker").css({'zIndex':3001});
	}else{
		$("#editBackground_sampleMarker").css({'zIndex':-2999});
		$("#editBackground_fromMarker").css({'zIndex':-3000});
		$("#editBackground_toMarker").css({'zIndex':-3001});
	}
}
function renameLayer(layer,rename){
	var layerName=$('#'+layer).find('.layerName')[0];
	$(layerName).html(rename);
	$('#'+layer).attr('name', rename);
}
function rebuildLayerThumbs(){
	var layerList=$("#lwin_layerList");
	var children=$(layerList).children();
	var counts=$(layerList).find('.lwin_layer');
	for(var i=0;i<counts.length;++i){
		updateLayerCanvas($(counts[i]).attr('id'));
	}
}
function updateLayerCanvas(uCurLayer){
	uCurCanvas=$("#"+uCurLayer).attr('canvasName');
	var curLayerTh=uCurLayer+"_th";
	var lW=$("#"+curLayerTh).width();
	var lH=$("#"+curLayerTh).height();
	try{
		var canvas=document.getElementById(uCurCanvas);
		var pushCan=document.getElementById(curLayerTh);
		var pushDraw=pushCan.getContext("2d");
		pushDraw.clearRect(0,0,lW,lH);
		pushDraw.drawImage(canvas,0,0,lW,lH);
	}catch(err){
		var tmpName=tempWindow('Site error - No layer "'+uCurLayer+'" found.',[-1,-1],'',15,1,0,0);
	}
}
function layerWindowVisibility(vis,buttonId,controlId,hiddenVal,shownVal){
	var val=parseInt($('#'+buttonId).attr('vis'));
	if(vis==2){
		if(key_hide==0){
			vis=(val+1)%2;
			val=vis;
			$('#'+buttonId).attr('vis',vis);
		}else{
			if($("#"+controlId).position().top==shownVal){
				vis=0;
			}else{
				vis=1;
			}
			val=vis;
		}
	}
	if(vis<2 && val==1){
		if(vis==1){
			$("#"+controlId).css({'top':shownVal});
			$("#lwin_scrollBar").css('left',parseInt($("#lwin_parent").width()));
		}else{
			$("#"+controlId).css({'top':hiddenVal});
			$("#lwin_scrollBar").css('left',-10);
		}
	}else{
		$("#"+controlId).css({'top':hiddenVal});
		$("#lwin_scrollBar").css('left',-10);
	}
	resizeLayerScrollWindow();
}
// This is highly inefficient, I'll need to revisit to write it better.
function dragLayer(mLayer,mY,moveCheck,storedSpot,init){
	if(init==1){
		init=0;
		//mX=mouseX;
		mY=mouseY;
		storedSpot=parseInt($("#"+mLayer).attr('inStack'));
		$("#"+mLayer).css({'cursor':'grab'});
	}
	var lz,lp,layerList,children,counts,zSample;
	var lHeight=$("#"+mLayer).height();
	var moveAmount=mouseY-mY;
	var dist=Math.abs(moveAmount);
	if(dist>3 || moveCheck==1){
		moveCheck=1;
		$("#"+mLayer).css({'top':moveAmount,'zIndex':1000});
		if(((dist-(lHeight/2)))>(lHeight/4)){
			layerList=$("#lwin_layerList");
			children=$(layerList).children();
			counts=$(layerList).find('.lwin_layer');
			zSample=Math.floor(Math.max(0,(dist-(lHeight/2)))*(moveAmount/dist) /lHeight);
			if(zSample>=0){
				zSample+=1;
			}
			for(var i=0;i<counts.length;++i){
				if($(counts[i]).attr('id') != mLayer && $(counts[i]).attr('id') != 'lwin_bgLayer' ){
					lz=parseInt($(counts[i]).attr('inStack'));
					lp=parseInt($(counts[i]).position().top);
					if(zSample>0){
						if( lz<storedSpot && lz>=(storedSpot)-zSample){ //lp<lTop &&
							$(counts[i]).css({'top':-lHeight});
						}else{
							$(counts[i]).css({'top':0});
						}
					}else{
						if( lz>storedSpot &&  lz<=(storedSpot)-zSample){
							$(counts[i]).css({'top':lHeight});
						}else{
							$(counts[i]).css({'top':0});
						}
					}
				}
			}
		}else{
			layerList=$("#lwin_layerList");
			children=$(layerList).children();
			counts=$(layerList).find('.lwin_layer');
			for(var i=0;i<counts.length;++i){
				if($(counts[i]).attr('id') != mLayer ){
					$(counts[i]).css({'top':0});
				}
			}
		}
	}
	if(draggingLayer==1){
		setTimeout(function(){dragLayer(mLayer,mY,moveCheck,storedSpot,init);},20);
	}else{
		if(draggingLayer==-1){
			draggingLayer=0;
			$("#"+mLayer).css({'top':0,'zIndex':storedSpot,'cursor':'pointer'});
			layerList=$("#lwin_layerList");
			children=$(layerList).children();
			counts=$(layerList).find('.lwin_layer');
			for(var i=0;i<counts.length;++i){
				if($(counts[i]).attr('id') != mLayer){
					$(counts[i]).css({'top':0});
				}
			}
		}else{
			if(dist<(lHeight/2)){
				moveCheck=0;
			}
			if(moveCheck==1){
				$("#"+mLayer).css({'top':0,'zIndex':storedSpot,'cursor':'pointer'});
				zSample=Math.floor(Math.max(0,(dist-(lHeight/2)))*(moveAmount/dist) /lHeight);
				if(zSample>=0){
					zSample+=1;
				}
				var to=storedSpot-zSample;
				layerList=$("#lwin_layerList");
				children=$(layerList).children();
				// Reorder positioning in array
				var el=(children.length-1-storedSpot);
				to=(children.length-1-to);
				var elData=children[el];
				children.splice(el,1);
				children.splice(to,0,elData);
				var html=''
				var curHtml,cId;
				var stack;
				var stackCount=0;
				var stepUp=0;
				//Build out new order using existing data
				for(var i=0;i<children.length;++i){
					cId=$(children[((children.length-1)-i)]).attr('id');
					if(cId!='lwin_bgLayer'){
						stackCount+=1;
						$("#"+cId).attr('inStack',stackCount);
						$("#"+cId+"_draw").css({'zIndex':i});
					}
					if($("#"+cId).length){
						$("#"+cId).css({'top':0});
						curHtml=$("#"+cId).wrap("<p/>").parent().html();
						html=curHtml;
						$("#"+cId).unwrap();
						$("#"+cId).remove();
						$(layerList).prepend(html);
						eval($("#"+cId).attr('onMouseOut'));
						updateLayerCanvas(cId);
					}
				}
				cId='lwin_bgLayer';
				$("#"+cId).css({'top':0});
				curHtml=$("#"+cId).wrap("<p/>").parent().html();
				html=curHtml;
				$("#"+cId).unwrap();
				$("#"+cId).remove();
				$(layerList).append(html);
				eval($("#"+cId).attr('onMouseOut'));
				updateLayerCanvas(cId);
				eval($("#"+mLayer).attr('onMouseOut'));
				renumberLayers();
			}else{
				layerList=$("#lwin_layerList");
				children=$(layerList).children();
				counts=$(layerList).find('.lwin_layer');
				for(var i=0;i<counts.length;++i){
					if($(counts[i]).attr('id') != mLayer){
						$(counts[i]).css({'top':0});
					}
				}
				$("#"+mLayer).css({'top':0,'zIndex':storedSpot,'cursor':'pointer'});
			}
		}
	}
}
// This is highly inefficient, I'll need to revisit to write it better.
function setLayerPosition(mLayer,position){
	storedSpot=parseInt($("#"+mLayer).attr('inStack'));

	var to=position;
	layerList=$("#lwin_layerList");
	children=$(layerList).children();
	// Reorder positioning in array
	var el=(children.length-1-storedSpot);
	to=(children.length-1-to);
	var elData=children[el];
	children.splice(el,1);
	children.splice(to,0,elData);
	var html=''
	var curHtml,cId;
	var stack;
	var stackCount=0;
	var stepUp=0;
	//Build out new order using existing data
	for(var i=0;i<children.length;++i){
		cId=$(children[((children.length-1)-i)]).attr('id');
		if(cId!='lwin_bgLayer'){
			stackCount+=1;
			$("#"+cId).attr('inStack',stackCount);
			$("#"+cId+"_draw").css({'zIndex':i});
		}
		if($("#"+cId).length){
			$("#"+cId).css({'top':0});
			curHtml=$("#"+cId).wrap("<p/>").parent().html();
			html=curHtml;
			$("#"+cId).unwrap();
			$("#"+cId).remove();
			$(layerList).prepend(html);
			eval($("#"+cId).attr('onMouseOut'));
			updateLayerCanvas(cId);
		}
	}
	renumberLayers();

}
function layerMaskToggle(){
	var cl=$("#"+curLayer);
	var mk=(parseInt($(cl).attr('mask'))+1)%2;
	$(cl).attr('mask',mk);
	var lb=$(cl).find('.layerName');
	var lText=$($(lb)[0]).text();
	var disp='';
	if(mk==1){
		$(lb).css('font-style','oblique');
		disp='On';
	}else{
		$(lb).css('font-style','normal');
		disp='Off';
	}
	tempWindow('..<b>'+lText+'</b> masking turned <b>'+disp+'</b>..',[-1,-1],'',5,0,0,0);
}
function layerVisToggle(){
	var cl=$("#"+curLayer);
	var cc=$("#"+curCanvas);
	var mk=(parseInt($(cl).attr('vis'))+1)%2;
	$(cl).attr('vis',mk);
	var lb=$(cl).find('.layerName');
	var lText=$($(lb)[0]).text();
	var disp='';
	if(mk==0){
		$(lb).css('color','#9999ff');
		$(cc).css('visibility','hidden');
		disp='Hidden';
	}else{
		$(lb).css('color','#cccccc');
		$(cc).css('visibility','visible');
		disp='Visible';
	}
	tempWindow('..<b>'+lText+'</b> now <b>'+disp+'</b>..',[-1,-1],'',5,0,0,0);
	if(tileUpdate==1){
		updateTiles();
	}
}
function layerSetOpacity(){
	var cl=$("#"+curLayer);
	var cc=$("#"+curCanvas);
	var op=parseFloat($("#editLayer_opacity_val").val());
	$(cc).css({'opacity':op,'filter':"filter:alpha(opacity="+(op*100)+")"})
	$(cl).attr('opacity',op);
	setToolMode(0,op);
	if(tileUpdate==1){
		updateTiles();
	}
}
function layerDuplicate(div){
	var tempCn=div;
	var newLayer=addLayer();
	movePast(tempCn,newLayer[1],1,"source-over",0);
	updateLayerCanvas(newLayer[0]);
	if(tileUpdate==1){
		updateTiles();
	}
}
//For when you try to draw but the layer is hidden
function blinkLayer(run){
	run+=1;
	layerBlink=1;
	var cl=$("#"+curLayer);
	var setBlink=Math.floor(1+run/5)%2;
	$("#layersWindow").css('top',0);
	resizeLayerScrollWindow();
	if(setBlink==0){
		var mDown=$(cl).attr("onMouseDown");
		var splitter=mDown.split(';'); // First onMouseDown commands are for dragging, I could have done this smarter, but remove those
		eval(splitter[splitter.length-3]+";"+splitter[splitter.length-2]+";");
	}else{
		eval($(cl).attr("onMouseUp"));
	}
	if(run<20){
		draggingLayer=0;
		setTimeout(function(){blinkLayer(run);},20);
	}else{
		layerBlink=0;
		eval($(cl).attr("onMouseOut"));
	}
}
function headerHighlight(toggle, divCheck){
	var head=$("#"+divCheck+"_headText");
	$("#"+divCheck).attr('mode',toggle);
	if(toggle==1){
		$(head).css('color','#99aaff');
	}else if(toggle==2){
		$(head).css('color','#999999');
	}else if(toggle==3){
		$(head).css('color','#ffcc88');
	}else{
		$(head).css('color','#ffffff');
	}
}
function resizeLayerScrollWindow(){
	if(parseInt($("#layersWindow").css('top'))==0){
		var csTop=$("#colorSphere").position().top;
		var defHeight=20;
		$('#lwin_layerListView').css('max-height',(csTop-20-defHeight-11)+"px");
		
		var lwVH=$('#lwin_layerListView').height();
		var lwLH=$('#lwin_layerList').height();
		curVal=Math.max(-(lwLH-lwVH),Math.min(0,parseInt($('#lwin_layerList').css('top'))));
		$('#lwin_layerList').css('top',curVal);
		if(lwVH==lwLH){
			$("#lwin_scrollBar").css('left',-10);
		}else{
			$("#lwin_scrollBar").css('left',parseInt($("#lwin_parent").width()));
			layerWindowManualScroll(0);
		}
	}
}
