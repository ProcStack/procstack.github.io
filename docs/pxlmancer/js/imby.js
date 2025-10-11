//////// Desktop Movements
function imbixBotMove(gen=[mouseX,mouseY,0]) {
	imbixTimer+=1;
	if(active<=0){
		gen[0]=(gen[0]*2+(sW-mouseX))*.25;
		gen[1]=(gen[1]*2+(sH-mouseY))*.25;
		
		totalPercBase=(((gen[0]-sW*.5)**2 + (gen[1]-sH*.25)**2)**.5) / ((sW+sH)*.5);
		totalPercBase=totalPercBase<1?1-totalPercBase:0;
		totalPerc=totalPercBase*.5;//totalPercBase;
		gen[2]=(gen[2]+totalPerc)*.25;
		totalPerc=gen[2]+0;

		noiseX=(Math.sin(imbixTimer/80+456)+Math.cos(imbixTimer/50+342)+Math.sin(imbixTimer/20+658))*(15);
		noiseY=(Math.cos(imbixTimer/90+10)+Math.sin(imbixTimer/30+212)+Math.cos(imbixTimer/30+84))*(15-10*totalPerc);
		
		if(touchCheck==0){
			xAnim=( (gen[0]-sW*.5) *(totalPerc))+noiseX;
			yAnim=( (gen[1]-(sH*.15)) *(totalPerc))+noiseY;
		}else{
			xAnim=noiseX;
			yAnim=noiseY;
		}
		outX=-(xAnim)*.01;
		outY=(yAnim)*.003-10;
		var outZ=(1-xAnim)*.0015;
		
		//geoList['imby'][0].position.x=outX;//-25.6;
		geoList['imby'][0].position.y=outY;
		geoList['imby'][0].position.z=outZ;
		//geoList['imbyGlowMask'][0].position.x=outX;//-25.6;
		geoList['imbyGlowMask'][0].position.y=outY;
		geoList['imbyGlowMask'][0].position.z=outZ;
		
		//geoList['imby'][0].position.
		
		setTimeout(
			function(e){
				imbixBotMove(gen);
			},50);
	}else{
		clearScreen(curCanvas);
	}
}

function imbyFocus(){
	paused=false;
	imbixBotMove();
}
function imbyBlur(){
	paused=true;
}


function maximizeImbix(){
	document.getElementById("activatedImbix").style.zIndex="1000";
	document.getElementById("activatedBG").style.zIndex="100";
	document.getElementById("activatedBG").style.visibility="visible";
	document.getElementById("clickField").style.zIndex="950";
	document.getElementById("clickField").style.visibility="visible";
	document.getElementById("activatedImbix").style.visibility="visible";
	document.getElementById("activatedImbix").style.height="100%";
	document.getElementById("activatedImbix").style.width="100%";
	imbix.style.zIndex="300";
	geoList['imby'][0].visible=true;
	geoList['imbyGlowMask'][0].visible=true;
	document.getElementById("glDraw").style.visibility="visible";
	document.getElementById("glDraw").style.left="50%";
	document.getElementById("glDraw").style.transform="translate(-50%, -100%)";
	document.getElementById("glDraw").style.top="85%";
	
	document.getElementById("lwin_l1_draw").style.top=-sH*.12;
	
	
	imbyScreenDraw([-1,-1,-1,1,-1,-1],[0,70],0);
	if(mapPause==0){
		var aspectRatio=mapCanvas.width/mapCanvas.height;
		mapEngine.setClearColor(0x000000, 0);
		mapEngine.setPixelRatio(window.devicePixelRatio);
		mapRender(runner);
	}
	mapPause=0;
}
function minimizeImbix(){
	document.getElementById("activatedImbix").style.zIndex="-1000";
	document.getElementById("activatedBG").style.zIndex="-900";
	document.getElementById("activatedBG").style.visibility="hidden";
	document.getElementById("clickField").style.zIndex="-950";
	document.getElementById("clickField").style.visibility="hidden";
	document.getElementById("activatedImbix").style.visibility="hidden";
	document.getElementById("activatedImbix").style.height="0%";
	document.getElementById("activatedImbix").style.width="0%";
	imbix.style.zIndex="-940";
	geoList['imby'][0].visible=false;
	geoList['imbyGlowMask'][0].visible=false;
	document.getElementById("lwin_l1_draw").style.top=0;
	//reinitializeSettings(0);
	resizeRenderResolution();

	toCenter=1;
	mirror=3;
	brushDraw=2;
	trail=0;
	$('#cs_red_val').val(-3);
	$('#cs_green_val').val(-3);
	$('#cs_blue_val').val(-3);
	mapPause=1;
}

//////// Activate Movements
function imbixBotActivate(){
	if(imbixClick == 1){
		imbixTimer+=1;
		noiseX=(Math.sin(imbixTimer/100+456)+Math.sin(imbixTimer/70+342)+Math.sin(imbixTimer/200+658))/20;
		noiseY=(Math.cos(imbixTimer/90+10)+Math.cos(imbixTimer/130+212)+Math.cos(imbixTimer/300+84))/20;
		noiseBlend=(Math.sin(imbixTimer/40+500)+Math.sin(imbixTimer/100+254)+Math.sin(imbixTimer/50+87))/6+.5;
		
		if(touchCheck==0){
			imbix.style.left=(mouseX*(noiseBlend/100)+(sW/2))+offX+noiseX;
			imbix.style.top=(mouseY*(noiseBlend/100)+(sH/2))+offY+noiseY;
		}else{
			imbix.style.left=(sW/2)+offX+noiseX;
			imbix.style.top=(sH/2)+offY+noiseY;
		}
		
		//imbixFieldMove();
	}
}



//////// Imbix User Actions
function imbixMouseReact(){
	if(imbixClick == 1){
		
//var imbixPosX=0;
//var imbixPosY=0;
		if(touchCheck==0){
			imbix.style.left=(mouseX*(noiseBlend/50)+(sW/2)*(1-noiseBlend/50))+offX+noiseX/10;
			imbix.style.top=(mouseY*(noiseBlend/50)+(sH/2)*(1-noiseBlend/50))+offY+noiseY/10;
		}else{
			imbix.style.left=(sW/2)+offX+noiseX;
			imbix.style.top=(sH/2)+offY+noiseY;
		}
	}
}

//////// Field Movements
function imbixFieldMove(posArray){
	closest=9999;
	curClosest=curCommand;
	for(x=0; x<fieldCount;x++){
		curFielder="fielder"+x;
		objX= posArray[x*2];
		objY= posArray[x*2+1];
		objY=objY-20/(Math.sin(imbixTimer/50+x*20)*.5+.6)+20;
		alpha=objY/posArray[x*2+1];
		curObj=document.getElementById(curFielder);

		scaler=10*((Math.sin(imbixTimer/50+x*20)*.5+.6)*8+.001);
		drawGeo([objX,objY],1,scaler,[20,190,190,0,0,0],(.66*alpha),-1,-1,curCanvas);

		if(imbixOver==0){
			dist=Math.sqrt(Math.pow((objX+100)-mouseX,2)+Math.pow((objY+10)-mouseY,2));
			if(dist<closest){
				closest=dist;
				curClosest=curFielder;
			}
		}
	}
	if(imbixOver==0){
		if(curCommand != curClosest){
			curCounter=0;
		}else{
			curCounter+=1;
		}
		curCommand=curClosest;
		/* curObj=document.getElementById(curCommand);
		curObj.style.color="#008080"; */
	}
}

function imbixFieldClick(){
	if(curCounter<=(13+(3*doubleClick)) && lastCommand==curCommand){
		doubleClick+=1;
	}else{
		doubleClick=0;
	}
	curCounter=-5;

	fielder=document.getElementById(curCommand);
	divClicked=fielder.getAttribute('fieldObj');
	if(doubleClick){
		fielderClicked=divClicked+" _ "+doubleClick+" Clicked";
		fielderStyle=window.getComputedStyle(fielder);
		x=fielderStyle.getPropertyValue("left");
		y=fielderStyle.getPropertyValue("top");
		if(dispStats==1){
			$("#responce").html(fielderClicked + "-" + x +" - " + y + "br");	
		}
	}else{
		if(dispStats==1){
			$("#responce").html(divClicked);
		}
	}
	lastCommand=curCommand;
}


//////// Initiate Imbix
function initImbix() {

	var canvas=document.getElementById(curCanvas);
	var draw=canvas.getContext("2d");
	canvas.style.position = "fixed";
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);

	if(dispStats==1){
		$("#devModeDisplay").text(devMode);
		$("#sWDisplay").text(sW);
		$("#sHDisplay").text(sH);
	}

	imbixOver=0;
	imbix = document.getElementById('imbixBot');
	//paused=document.hasFocus();
	imbixBotMove();
	
}
