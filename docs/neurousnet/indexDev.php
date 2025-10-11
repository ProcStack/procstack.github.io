<?php
$page=basename($_SERVER['SCRIPT_NAME']);
if($page=="index.php"){
	$counter="count.txt";
	$count=file_get_contents($counter);
	$count+=1;
	$fp=fopen($counter, 'w');
	fwrite($fp,$count);
	fclose($fp);
}
$printStat=0;
if(isset($_GET['stats'])){
	$printStat=1;
}
?>
<html>
<head>
<script src="jquery-1.11.0.min.js"></script>
<style>
BODY{
padding=0;
margin=0;
border=0;
background-color:#051020;
color:#999999;
overflow:hidden;
    position:static;
}
#imbixBot{
	position:absolute;
	left:0px;
	top:0px;
	color:#888888;
	font-size:120%;
	font-family:tahoma;
	height:100;
	width:600;
	z-index:12;
	background-image:url('NeurousNet.png');
	user-select:none;
	-ms-user-select:none;
	-webkit-user-select:none;
	-moz-user-select:none;
	-o-user-select:none;
}
#activatedImbix{
	position:absolute;
	left:0px;
	top:0px;
	height:0;
	width:0;
	overflow:hidden;
	z-index:-10;
	visibility:hidden;
	user-select:none;
	-ms-user-select:none;
	-webkit-user-select:none;
	-moz-user-select:none;
	-o-user-select:none;
}
#activatedBG{
	opacity:0.4;
	filter:alpha(opacity=40);
	position:absolute;
	top:0px;
	left:0px;
	height:100%;
	width:100%;
	overflow:hidden;
	z-index:-9;
	visibility:hidden;
}
#clickField{
	position:absolute;
	top:0px;
	left:0px;
	height:100%;
	width:100%;
	overflow:hidden;
	z-index:-95;
	visibility:hidden;
}
#dragDraw{
	user-selection:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	position:absolute;
	top:0px;
	left:0px;
	z-index:8;
}
#controlMenu{
	position:relative;
	top:0;
	user-selection:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}
.netLine{
	opacity:0.9;
	filter:alpha(opacity=90);
	background-image:url("img/imbix/networkLine.png");
	position:absolute;
	top:100px;
	left:10px;
	height:3px;
	width:100px;
	overflow:hidden;
	z-index:10;
	visibility:hidden;
	transform: rotate(0deg) scale(1,1);
	transform-origin:0% 50%;
	-ms-traxnsform: rotate(0deg) scale(1,1);
	-ms-transform-origin:0% 50%;
	-webkit-transform: rotate(0deg) scale(1,1);
	-webkit-transform-origin:0% 50%;
	-moz-transform: rotate(0deg) scale(1,1);
	-moz-transform-origin:0% 50%;
	-o-transform: rotate(0deg) scale(1,1);
	-o-transform-origin:0% 50%;	
}
.imbixFielder{
	font-size:200%;
	color:#808080;
	cursor:crosshair;
	width:10px;
	padding:0px;
	position:absolute;
	top:100px;
	left:10px;
	overflow:hidden;
	z-index:10;
	transform: rotate(0deg);
	transform: scale(1, 1);
	transform-origin:50% 50%;
	user-select:none;
	-ms-transform: rotate(0deg);
	-ms-transform: scale(1,1);
	-ms-transform-origin:50% 50%;
	-ms-user-select:none;
	-webkit-transform: rotate(0deg);
	-webkit-transform: scale(1,1);
    el.style.position = "fixed";
    el.setAttribute("width", canvasWidth);
    el.setAttribute("height", canvasHeight);
    el.style.top = (viewportHeight - canvasHeight) / 2;
    el.style.left = (viewportWidth - canvasWidth) / 2;
	-webkit-transform-origin:50% 50%;
	-webkit-user-select:none;
	-moz-transform: rotate(0deg);
	-moz-transform: scale(1,1);
	-moz-transform-origin:50% 50%;
	-moz-user-select:none;
	-o-transform: rotate(0deg);
	-o-transform: scale(1,1);
	-o-transform-origin:50% 50%;
	-o-user-select:none;
    filter: blur(1px);
        -webkit-filter: blur(1px);
        -moz-filter: blur(1px);
        -o-filter: blur(1px);
        -ms-filter: blur(1px);
}
.optionButtonRaiser{
	user-select:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	position:relative;
	top:0;
}
.optionButton{
	user-select:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	margin:0;
	cursor: default;
	font-size:100%;
	font-family:tahoma,arial;
	font-weight:bold;
	text-align:center;
	z-index:12;
	position:relative;
	bottom:0;
	pointer-events: all;
	
}
.optionButtonBG{
	user-select:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	z-index:11;
	position:relative;
	bottom:0;
	pointer-events: all;
}
.header{
	user-select:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	overflow:hidden;
}
.pickBox{
	user-select:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	overflow:hidden;
}
.button{
	user-select:none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	overflow:hidden;
	cursor: pointer;
}
</style>
<script>
var date=new Date();
var timeOff=date.getTime();
var bgcolor="#051020";
var imbix = null;
var curCommand = null;
var lastCommand = null;
var active=0;
var runner=0;
var curCounter = 0;
var imbixTimer=0;
var mouseX = 0;
var mouseY = 0;
var imbixClick=0;
var dragClick=0;
var dragging=0;
var doubleClick=0;
var imbixOver=0;
var imbixPosX=0;
var imbixPosY=0;
var offX=-300;
var offY=0;
var sW=window.innerWidth;
var sH=window.innerHeight;
var fieldCount=20;
var touchCheck=0;
var dragX = 0;
var dragY = 0;
var dragCount=0;
var dragTotal=0;
var prevDragX = 0;
var prevDragY = 0;
var prevPrevDragX=0;
var prevPrevDragY=0;
var trail=0;
var trailX=new Array();
var trailY=new Array();
var trailPrevX=new Array();
var trailPrevY=new Array();
var trailPrevPrevX=new Array();
var trailPrevPrevY=new Array();
var refreshWindow=new Array();
<?php /* ?>
var trailX=0;
var trailY=0;
var trailPrevX=0;
var trailPrevY=0;
var trailPrevPrevX=0;
var trailPrevPrevY=0;
<? */ ?>
var currentOnly=0;
var toCenter=1;
var dragUpdate = 1;
var maxMag = 0;
var lastMag =1;
var spray=0;
var mirror=3;
var clearDrawing=0;
var randClear=10;
var filter=0;
var autoFilter=0;
var bgFade=.1;
var blender=0;
var gradFromHex="#102030";
var gradToHex="#051015";
var throwLength=2;
var scroller=0;
<?php /* ?>var gradRefresh=100;<?php */ ?>
var divs=new Array("clear","colorPicker","drawOption","mirrorOption","clearOption","trailOptions","prefOptions","appOptions");

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}

var IE = document.all?true:false

if (!IE) document.captureEvents(Event.MOUSEMOVE)

document.onmousemove = getMouseXY;
document.addEventListener('touchstart', function(e) {startTouch(e);}, false);
document.addEventListener('touchmove', function(e) {doTouch(e);}, false);
document.addEventListener('touchend', function(e) {endTouch(e);}, false);
window.onresize=function(event){clearScreen('dragDraw');clearScreen('pastDraw');}
<?php /* ?>
if (window.addEventListener) {
	window.addEventListener('DOMMouseScroll', wheel, false);
}
window.onmousewheel = document.onmousewheel = wheel;

window.onscroll = function() {
	window.scroll(0, 0);
}

function wheel(e) {
	var evt=window.event || e 
	var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta
	if(scroller==0)
		scrollDelta=delta
	scroller+=delta
    preventDefault(e);
}



if (document.attachEvent){
    document.attachEvent("on"+mousewheelevt, nuller(e));
}else if (document.addEventListener){
    document.addEventListener(mousewheelevt, nuller(e), false);
}
function nuller(e){
	getMouseXY;
	var evt=window.event || e 
	var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta
	if(scroller==0)
		scrollDelta=delta
	scroller+=delta
}
	<?php */ ?>
function getMouseXY(e) {
	if(touchCheck==0){
		if (IE) {
			mouseX = event.clientX + document.body.scrollLeft
			mouseY = event.clientY + document.body.scrollTop
		} else {
			mouseX = e.pageX
			mouseY = e.pageY
		}  
		// catch possible negative values in NS4
		if (mouseX < 0){mouseX = 0}
		if (mouseY < 0){mouseY = 0} 
		if(dragClick == 1){
			if(dragging==0){
				dragCount=0;
				e.preventDefault();
				dragX = mouseX;
				dragY = mouseY;
				prevDragX = mouseX;
				prevDragY = mouseY;
				prevPrevDragX = mouseX;
				prevPrevDragY = mouseY;
				sW=window.innerWidth;
				sH=window.innerHeight;
				if(active==0){
			<?php if($printStat==1){ ?>
					$("#dragCount").html(dragCount);
						<?php } ?>	
					document.getElementById("imbixBot").style.visibility="hidden";
					document.getElementById("activatedImbix").style.visibility="hidden";
					document.getElementById("drawOptions").style.visibility="visible";
					active=1;
				}
				dragging=1;
			<?php if($printStat==1){ ?>	
				$("#dragClick").html(1);
			<?php } ?>	
				doTouch(e);
				var div,xto,yto,height,perc,ySet,parentClass;
				for(x=0;x<divs.length;x++){
					div='#'+divs[x];
					parentClass=$(div).parent();
					height=$(parentClass).height();
					$(parentClass).css({top:height-9});
				}
				$('#drawOptions').css({zIndex:900});
			}else{
				doTouch(e);
			}
		}else{
				$('#drawOptions').css({zIndex:9010});
				
			<?php if($printStat==1){ ?>
			if(dragging==1){
				$("#dragClick").html(0);
			}
			<?php } ?>	
			dragging=0;
			lastMag=1;

		}
 

		return true
	}
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


//---------------------------------------------
//---------------------------------------------


function startTouch(e) {
	if(touchCheck==0){
		var canvas=document.getElementById("undoDraw");
		canvas.setAttribute("width", sW);
		canvas.setAttribute("height", sH);
		canvas=document.getElementById("dragDraw");
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
		}
		active=1;
	}
	touchCheck=1;
	dragCount=0;
	dragging=1;
	e.preventDefault();
	var touch = e.touches[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;
	dragX = touch.pageX;
	dragY = touch.pageY;
	prevDragX = touch.pageX;
	prevDragY = touch.pageY;
	prevPrevDragX = touch.pageX;
	prevPrevDragY = touch.pageY;
			<?php if($printStat==1){ ?>	
	$("#dragCount").html(dragCount);
			<?php } ?>	
	document.getElementById("imbixBot").style.visibility="hidden";
	document.getElementById("activatedImbix").style.visibility="hidden";
	document.getElementById("mouseDraw").style.visibility="hidden";
}
function doTouch(e) {
	dragCount+=1;
	preventDefault;
	if(touchCheck==1){
		var touch = e.touches[0];
		dragX = touch.pageX;
		dragY = touch.pageY;
		mouseX = touch.pageX;
		mouseY = touch.pageY;

	}else{
		dragX = mouseX;
		dragY = mouseY;
		mouseX = mouseX;
		mouseY = mouseY;
	}
	var thrownX=mouseX;
	var thrownY=mouseY;
	if(dragCount%dragUpdate == 0){
			var canvas=document.getElementById("dragDraw");
			var draw=canvas.getContext("2d");

		if(dragCount>2){
			if($("#rVal").val()==-1){
				R=((Math.sin(dragTotal/8)*.5+.5)*80+10);
				G=((Math.sin(dragTotal/4.5))*60)+160;
				B=Math.min(255,((Math.sin(dragTotal/6+500))*60)+200);
			}else{
				R=$("#rVal").val();
				G=$("#gVal").val();
				B=$("#bVal").val();
			}
			hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
			draw.globalAlpha=1;

			if($("#rVal").val()==-1){
				R=((Math.sin(dragTotal/8)*.5+.5)*80+10);
				G=((Math.sin(dragTotal/4.5))*60)+140;
				B=((Math.sin(dragTotal/6+500))*70)+180;
			}else{
				R=$("#rVal").val();
				G=$("#gVal").val();
				B=$("#bVal").val();
			}
			hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
			draw.globalAlpha=1;
			mag=Math.sqrt(Math.pow((prevDragX-dragX),2)+Math.pow((prevDragY-dragY),2));
			mag=(((Math.sin( (Math.min(32,Math.max(1,(mag/9)))/16 )*.5+.5))*15)-4.5)*2 ;
			mag=(mag+lastMag)/2;

			if(maxMag > mag){
				maxMag = mag;
			<?php if($printStat==1){ ?>
					$("#maxMag").html(maxMag);
			<?php } ?>	
			}
			var runx,runy,runpx,runpy,runppx,runppy,runmag;
			for(var i=0;i<toCenter;i++){
				runmag=mag*(1-i/toCenter);
				runx=(dragX-sW/2)*(1-i/(toCenter+2))+sW/2;
				runy=(dragY-sH/2)*(1-i/(toCenter+2))+sH/2;
				runpx=(prevDragX-sW/2)*(1-i/(toCenter+2))+sW/2;
				runpy=(prevDragY-sH/2)*(1-i/(toCenter+2))+sH/2;
				runppx=(prevPrevDragX-sW/2)*(1-i/(toCenter+2))+sW/2;
				runppy=(prevPrevDragY-sH/2)*(1-i/(toCenter+2))+sH/2;
				refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],runx-10,runpx+10,runppx+10));
				refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],runy-10,runpy-10,runppy-10));
				refreshWindow[2]=Math.min(sW,Math.max(refreshWindow[2],runx+10,runpx+10,runppx+10));
				refreshWindow[3]=Math.min(sH,Math.max(refreshWindow[3],runy+10,runpy-10,runppy-10));
			
				draw.beginPath();
				draw.moveTo(runppx,runppy);
				draw.quadraticCurveTo(runpx,runpy, runx,runy);
				refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-10));
				refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-10));
				refreshWindow[2]=Math.min(sW,Math.max(refreshWindow[2],thrownX+10));
				refreshWindow[3]=Math.min(sH,Math.max(refreshWindow[3],thrownY+10));
				strokeColor=hex;
				draw.strokeStyle=strokeColor;
				draw.lineWidth=mag;
			<?php if($printStat==1){ ?>	
				$("#dragMag").html(mag);
			<?php } ?>	
				draw.stroke();
			<?php if($printStat==1){ ?>
				$("#dragColor").html(strokeColor);
			<?php } ?>	
				

			}


			<?php if($printStat==1){ ?>	
				$("#dragMag").html(mag);
				$("#dragColor").html(strokeColor);
			<?php } ?>	
			
		//Finished drawing
		//Grab the boundaries of what was just drawn
				refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],dragX-10,mouseX-10,prevDragX-10,prevPrevDragX-10,runx-10,thrownX-10));
				refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],dragY-10,mouseY-10,prevDragY-10,prevPrevDragY-10,runy-10,thrownY-10));
				refreshWindow[2]=Math.min(sW,Math.max(refreshWindow[2],dragX+10,mouseX+10,prevDragX+10,prevPrevDragX+10,runx+10,thrownX+10));
				refreshWindow[3]=Math.min(sH,Math.max(refreshWindow[3],dragY+10,mouseY+10,prevDragY+10,prevPrevDragY+10,runy+10,thrownY+10));
				
			<?php if($printStat==1){ ?>	
	$("#refreshWindowX1").html(refreshWindow[0]);
	$("#refreshWindowY1").html(refreshWindow[1]);
	$("#refreshWindowX2").html(refreshWindow[2]);
	$("#refreshWindowY2").html(refreshWindow[3]);
				
			<?php } ?>	
			prevDragX = mouseX;
			lastMag=mag;
			
		}

			
			
	}
	<?php if($printStat==1){ ?>
	$("#dragXDiv").html(dragX);
	$("#dragYDiv").html(dragY);
	$("#dragCount").html(dragCount);
	$("#dragTotal").html(dragTotal);
	<?php } ?>	

}
function endTouch(e) {
	var canvas=document.getElementById("dragDraw");
	var draw=canvas.getContext("2d");
	//draw.clearRect(0,0,sW,sH);
	e.preventDefault();
	var touch = e.touches[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;
	dragging=0;
	lastMag=1;
}

function clearScreen(canvasID) {
	var canvas=document.getElementById(canvasID);
	var draw=canvas.getContext("2d");
	draw.clearRect(0,0,sW,sH);
	refreshWindow=[sW,sH,0,0];
	draw.width=draw.width;
}



//////// Desktop Movements
function imbixBotMove() {
	imbixTimer+=1;
	if(imbixClick == 0){
		sW=window.innerWidth;
		sH=window.innerHeight;
		percW=mouseX/window.innerWidth;
		percH=mouseY/window.innerHeight;
		totalPercBase=((percW*percH));
		totalPerc=Math.max(0, Math.min(1,(totalPercBase*2.9)) );

		startX=sW*.89
		startY=sH*.82;
		noiseX=(Math.sin(imbixTimer/100+456)+Math.sin(imbixTimer/70+342)+Math.sin(imbixTimer/200+658))*(20-15*totalPerc);
		noiseY=(Math.cos(imbixTimer/90+10)+Math.cos(imbixTimer/130+212)+Math.cos(imbixTimer/300+84))*(20-15*totalPerc);
		
		if(touchCheck==0){
			xAnim=((startX*(1-totalPerc))+(mouseX*(totalPerc)))+noiseX;
			yAnim=((startY*(1-totalPerc))+(mouseY*(totalPerc)))+noiseY;
		}else{
			xAnim=startX+noiseX;
			yAnim=startY+noiseY;
		}
		outX=xAnim+offX;
		outY=yAnim+offY;
		imbix.style.left=outX;
		imbix.style.top=outY;
//		imbix.style.left=event.mouseX+xAnim;
//		imbix.style.top=mouseY+yAnim;
//		imbix.style.left = parseInt(imbix.style.left)+1+'px';


		if(active==0){
			setTimeout(imbixBotMove,20);
		}
	}
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
}

//////// Activate Movements
function imbixBotActivate(){
	if(imbixClick == 1){
		imbixTimer+=1;
		noiseX=(Math.sin(imbixTimer/100+456)+Math.sin(imbixTimer/70+342)+Math.sin(imbixTimer/180+658))/20;
		noiseY=(Math.cos(imbixTimer/120+10)+Math.cos(imbixTimer/130+212)+Math.cos(imbixTimer/150+84))/20;
		noiseBlend=(Math.sin(imbixTimer/70+300)+Math.sin(imbixTimer/100+254)+Math.sin(imbixTimer/100+87))/6+.5;
		
		if(touchCheck==0){
			imbix.style.left=(mouseX*(noiseBlend/100)+(sW/2))+offX+noiseX;
			imbix.style.top=(mouseY*(noiseBlend/100)+(sH/2))+offY+noiseY;
		}else{
			imbix.style.left=(sW/2)+offX+noiseX;
			imbix.style.top=(sH/2)+offY+noiseY;
		}
		
		imbixFieldMove();
		imbixMouseReact();
		if(active==0){
			setTimeout(imbixBotActivate,20);
		}
	}
}



//////// Imbix User Actions
function imbixMouseReact(){
	if(imbixClick == 1){
		
//var imbixPosX=0;
//var imbixPosY=0;
		if(touchCheck==0){
			imbix.style.left=(mouseX*(noiseBlend/50)+(sW/2)*(1-noiseBlend/50))+offX+noiseX/5;
			imbix.style.top=(mouseY*(noiseBlend/50)+(sH/2)*(1-noiseBlend/50))+offY+noiseY/5;
		}else{
			imbix.style.left=(sW/2)+offX+noiseX;
			imbix.style.top=(sH/2)+offY+noiseY;
		}
	}
}

//////// Field Movements
function imbixFieldMove(){
	closest=9999;
	curClosest=curCommand;
	for(x=0; x<fieldCount;x++){
		curFielder="fielder"+x;

		noiseX=(Math.sin(imbixTimer/100+x*108+456)+Math.sin(imbixTimer/70+x*208+342)+Math.sin(imbixTimer/200+x*6508+658))*(10);
		noiseY=(Math.cos(imbixTimer/90+x*100+10)+Math.cos(imbixTimer/130+x*508+212)+Math.cos(imbixTimer/300+x*908+84))*(10);
		noiseBlend=(Math.sin(imbixTimer/40+x*18+500)+Math.sin(imbixTimer/100+x*32+254)+Math.sin(imbixTimer/50+x*208+87));

		timeWave=(Math.sin(imbixTimer/100+x*80)+Math.sin(imbixTimer/150+x*5+501)+Math.sin(imbixTimer/250+x*860+84))/fieldCount;
		noiseX=(Math.sin(imbixTimer/280+x*4+78)+Math.sin(imbixTimer/170+x*40+4567)+Math.sin(imbixTimer/90+x*91+787))*10;
		noiseY=(Math.sin(imbixTimer/280+x*4+984)+Math.sin(imbixTimer/170+x*44+67)+Math.sin(imbixTimer/90+x*108+52))*10;
		//objX=(mouseX*(noiseBlend/1.5)+(sW/2)*(1-noiseBlend/1.5))+offX+noiseX;
		//objY=(mouseY*(noiseBlend/1.5)+(sH/2)*(1-noiseBlend/1.5))+offY+noiseY;
		objX= sW/2+Math.sin(x*23+timeWave)*(sW/10)+(noiseY);
		objY= sH/2+Math.cos(x*23+timeWave)*(sH/10)+(noiseY);
		curObj=document.getElementById(curFielder);
		curObj.style.left=objX+"px";
		curObj.style.top=objY+"px";

		scaler=(Math.sin(imbixTimer/50+x*20)*.5+.6)*8;
		curObjScale="scale("+scaler+","+scaler+")";
		curObj.style.transform=curObjScale;
		curObj.style.msTransform=curObjScale;
		curObj.style.webkitTransform=curObjScale;
		curObj.style.MozTransform=curObjScale;
		curObj.style.OTransform=curObjScale;

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
		curObj=document.getElementById(curCommand);
		curObj.style.color="#808080";
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
			<?php if($printStat==1){ ?>	
		$("#responce").html(fielderClicked + "-" + x +" - " + y + "br");
			<?php } ?>	
		
	}
			<?php if($printStat==1){ ?>	else{
		$("#responce").html(divClicked);
	}		<?php } ?>	
	lastCommand=curCommand;
}


//////// Initiate Imbix
function initImbix() {

	var canvas=document.getElementById("dragDraw");
	var draw=canvas.getContext("2d");
	canvas.style.position = "fixed";
	canvas.setAttribute("width", sW);
	canvas.setAttribute("height", sH);


	imbixOver=0;
//	for($x=1; $x<8; $x++){
//		line=document.getElementById('netLine'+$x);
//		line.style.left = '0px';
//		line.style.top = '0px';
//	}
	var fieldGenOut="";
	var symbol=new Array("-",".","`","'",",");
	for($x=0; $x<fieldCount;$x++){
<?php /* ?>	fieldGenOut+="<div id='fielder"+$x+"' fieldObj='fielder"+$x+"_fielder' fieldType='text' class='imbixFielder' align='center' onClick='imbixFieldClick();'>.</div>"; <?php */?>
		fieldGenOut+="<div id='fielder"+$x+"' fieldObj='fielder"+$x+"_fielder' fieldType='text' class='imbixFielder' align='center'>"+symbol[$x%symbol.length]+"</div>";
	}
	$("#fieldGen").html(fieldGenOut);
	for($x=0; $x<fieldCount;$x++){
		curFielder=document.getElementById('fielder'+$x);
		curFielder.style.left = '0px';
		curFielder.style.top = '0px';
		curFielderInitScale='scale(1,1)';
		curFielder.style.transform = curFielderInitScale;
		curFielder.style.msTransform = curFielderInitScale;
		curFielder.style.webkitTransform = curFielderInitScale;
		curFielder.style.MozTransform = curFielderInitScale;
		curFielder.style.OTransform = curFielderInitScale;
	}
	imbix = document.getElementById('imbixBot');
	imbix.style.left = '0px';
	imbixBotMove(); // start animating
}

function WhichButton(event){
			<?php if($printStat==1){ ?>	
	$("#responce").html("Click " + event.button);
			<?php } ?>
			preventDefault;
}
window.oncontextmenu = function () {
   return false;
}
function gradientInit(){
	var gBG=document.getElementById("gradientBG");
	var drawBG=gBG.getContext("2d");
	gBG.setAttribute("width", sW);
	gBG.setAttribute("height", sH);
	gradientRunner();
}
function gradientRunner(){
	runner+=1;
	var gBG=document.getElementById("gradientBG");
	//var gBG=document.getElementById("dragDraw");
	var drawBG=gBG.getContext("2d");
			drawBG.rect(0,0,sW,sH);
			var grd=drawBG.createRadialGradient(sW/2,sH/2,5,sW/2,sH/2,sW/2);
			grd.addColorStop(0, gradFromHex);
			grd.addColorStop(1, gradToHex);
			drawBG.fillStyle = grd;
			drawBG.fill();
}
function createNodes(initVal){
	var nodeGen,noiseX,noiseY,x;
	nodeGen="";
	var nodeRun=20;
	for(x=0; x<nodeRun;++x){
		noiseX=(Math.sin(Math.cos(x/4.5*sW*-1*timeOff+54)*20-x*20.324+timeOff*x)*.5+.5)*sW;
		noiseY=(Math.sin(Math.cos(x/4.5*sH*timeOff)*20+x*6.34)*.5+.5+timeOff*x)*sH;
		var radius = (Math.sin(x+timeOff)*10+65)*2+10;
		nodeGen+="<div id='node"+x+"' style='z-index:"+x+";position:absolute;top:"+noiseY+";left:"+noiseX+"	;'><canvas id='nodeDraw"+x+"' height='"+radius+"px' width='"+radius+"px'></canvas></div>";
	}
	$("#nodeField").html(nodeGen);

	for(x=0; x<nodeRun;++x){
      var canvas = document.getElementById("nodeDraw"+x);
      var context = canvas.getContext('2d');
	  var cW=canvas.width;
      var centerX = cW / 2;
	  var cH=canvas.height;
      var centerY = canvas.height / 2;
      var radius = Math.sin(x+timeOff)*10+55;


      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, Math.PI);
      //context.arc(100, 100, 20, 0, 2 * Math.PI, Math.PI);
			var grd=context.createRadialGradient(centerX,centerY,1,centerX,centerY,radius);
			grd.addColorStop(0, "rgba(100,100,100,1)");
			grd.addColorStop(1, "rgba(20,20,20,0)");
			context.fillStyle = grd;
			context.fill();
      context.beginPath();
      context.arc(centerX, centerY, radius*.7, 0, 2 * Math.PI, Math.PI);
      //context.arc(100, 100, 20, 0, 2 * Math.PI, Math.PI);
			var grd=context.createRadialGradient(centerX,centerY,10,centerX,centerY,radius*.7);
			grd.addColorStop(0, "rgba(100,100,100,.1)");
			grd.addColorStop(1, "rgba(20,20,20,1)");
			context.fillStyle = grd;
			context.fill();

      context.beginPath();
      context.arc(centerX, centerY, radius*.9, 0, 2 * Math.PI, Math.PI);
      //context.arc(100, 100, 20, 0, 2 * Math.PI, Math.PI);
			var grd=context.createRadialGradient(centerX*.9,centerY*.9,5,centerX,centerY,radius*.9);
			grd.addColorStop(0, "rgba(150,150,150,.5)");
			grd.addColorStop(1, "rgba(20,20,20,0)");
			context.fillStyle = grd;
			context.fill();
      context.beginPath();
      context.arc(centerX, centerY, radius*.1, 0, 2 * Math.PI, Math.PI);
      //context.arc(100, 100, 20, 0, 2 * Math.PI, Math.PI);
			var grd=context.createRadialGradient(centerX*.9,centerY*.9,0,centerX,centerY,Math.max(10,radius*.3));
			grd.addColorStop(0, "rgba("+Math.floor(Math.max(0,Math.sin(x)*255))+","+Math.floor(Math.max(0,Math.cos(x+546)*255))+","+Math.floor(Math.max(0,Math.sin(x+239)*255))+",1)");
			grd.addColorStop(1, "rgba("+Math.floor(Math.max(0,Math.sin(x)*150))+","+Math.floor(Math.max(0,Math.cos(x+546)*150))+","+Math.floor(Math.max(0,Math.sin(x+239)*150))+",0)");
			context.fillStyle = grd;
			context.fill();
	  
	 }
	runNodes("nodeDraw","nodeField");
}
function runNodes(surName,nodeField){
	nodeRun=$("#"+nodeField).children();
	for(x=0; x<nodeRun.length;++x){
		var nodeW=$(nodeRun[x]).width();
		var nodeH=$(nodeRun[x]).height();
		var nPos=$(nodeRun[x]).position();
		var nodeX=nPos.left;
		var nodeY=nPos.top;
		noiseX=(Math.sin(Math.cos(x/4.5*sW*-1+timeOff+54)*20-x*20.324+timeOff)*.5+.5)*sW+Math.sin((x+runner+Math.cos(nodeY/100+dragTotal/((15+x)%5))*10)/20)*(40*(x%5/5+1));
		noiseY=((Math.sin(Math.cos(x/4.5*sH+timeOff)*20+x*6.34+timeOff)*.5+.5)*sH+runner*(1+Math.sin(x)*.3)+dragTotal*(1+(x/10)%1))%(sH+nodeH)-nodeH;
		$(nodeRun[x]).css({left:noiseX});
		$(nodeRun[x]).css({top:noiseY});
		
	 }
}
function runLines(surName,nodeField){
	clearScreen("dragDraw")
	nodeRun=$("#"+nodeField).children();
    var canvas = document.getElementById("dragDraw");
    var context = canvas.getContext('2d');
	
		var mather,nodeWtemp,nodeHtemp,nodeXtemp,nodeYtemp,nodeW2,nodeH2,nodeX2,nodeY2;
		var prevMather=9999;
	for(x=0; x<nodeRun.length;++x){
		var nodeW1=$(nodeRun[x]).width();
		var nodeH1=$(nodeRun[x]).height();
		var nPos=$(nodeRun[x]).position();
		var nodeX1=nPos.left;
		var nodeY1=nPos.top;
		<?php /* ?>
		for(c=0; c<nodeRun.length;++c){
			if(x!=c){
				nodeWtemp=$(nodeRun[c]).width();
				nodeHtemp=$(nodeRun[c]).height();
				nPos=$(nodeRun[c]).position();
				nodeXtemp=nPos.left;
				nodeYtemp=nPos.top;
				mather=Math.sqrt(Math.pow(nodeX1-nodeXtemp,2)+Math.pow(nodeY1-nodeYtemp,2));
				if(mather<prevMather){
					nodeW2=nodeWtemp;
					nodeH2=nodeHtemp;
					nodeX2=nodeXtemp;
					nodeY2=nodeYtemp;
				}
				prevMather=mather;	
			}
			
		}
		<?php */ ?>
		if((x*timeOff)%nodeRun.length != x){
				nodeW2=$(nodeRun[(x*timeOff)%nodeRun.length]).width();
				nodeH2=$(nodeRun[(x*timeOff)%nodeRun.length]).height();
				nPos=$(nodeRun[(x*timeOff)%nodeRun.length]).position();
				nodeX2=nPos.left;
				nodeY2=nPos.top;
			context.beginPath();
			var grd=context.createLinearGradient(nodeX1+nodeW1/2,nodeY1+nodeH1/2,nodeX2+nodeW2/2,nodeY2+nodeH2/2);
				grd.addColorStop(0, "rgba("+Math.floor(Math.max(0,Math.sin(x)*255))+","+Math.floor(Math.max(0,Math.cos(x+546)*255))+","+Math.floor(Math.max(0,Math.sin(x+239)*255))+",.7)");
				grd.addColorStop(1, "rgba("+Math.floor(Math.max(0,Math.sin(x)*150))+","+Math.floor(Math.max(0,Math.cos(x+546)*150))+","+Math.floor(Math.max(0,Math.sin(x+239)*150))+",.4)");
			context.lineWidth=2;
			context.strokeStyle = grd;
			context.moveTo(nodeX1+nodeW1/2,nodeY1+nodeH1/2);
			context.lineTo(nodeX2+nodeW2/2,nodeY2+nodeH2/2);
			context.stroke();
		}
	 }
}
function runCheck(){
runner+=1;
if(dragging==1){
	dragTotal+=1*Math.min(1,lastMag/20);
	}
runNodes("nodeDraw","nodeField");
runLines("nodeDraw","nodeField");
setTimeout(runCheck,20);
}
</script>
</head>
<body onLoad="var imbixStart=initImbix();imbixClick=1;maximizeImbix();imbixBotActivate();gradientInit();createNodes(1);runCheck();">
<div style="overflow:hidden;heigh:100%;width:100%;user-select:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;">
<div id="imbixBot"><center><div style="position:relative;top:85;">-- Free Float --</div></center></div>
<div id="activatedImbix">
	<div id="activatedBG">
	&nbsp;
	</div>
	<div id="fieldGen">
	&nbsp;
	</div>
	<div id="clickField">
	&nbsp;
	</div>
</div>

			<?php if($printStat==1){ ?>	
<div style="visibility:visible;">
<span id="responce">&nbsp;</span><br>
count=<span id="dragCount">0</span><br>
total=<span id="dragTotal">0</span><br>
random=<span id="randomClear">0</span><br>
dragClick=<span id="dragClick">0</span><br>
dragX=<span id="dragXDiv">0</span><br>
dragY=<span id="dragYDiv">0</span><br>
MaxMag=<span id="maxMag">0</span><br>
color=<span id="dragColor">0</span><br>
mag=<span id="dragMag">0</span><br>
------------<br>
prevDragX=<span id="prevDragXDiv">0</span><br>
prevDragY=<span id="prevDragYDiv">0</span><br>
------------<br>
prevPrevDragX=<span id="prevPrevDragXDiv">0</span><br>
prevPrevDragY=<span id="prevPrevDragYDiv">0</span><br>
------------<br>
runner=<span id="runner">0</span><br>
bglength=<span id="bglength">0</span><br>
-----------<br>
toHeaderPrec=<span id="toHeaderPerc">0</span><br>
------------<br>
refreshWindowX1=<span id="refreshWindowX1">0</span><br>
refreshWindowY1=<span id="refreshWindowY1">0</span><br>
refreshWindowX2=<span id="refreshWindowX2">0</span><br>
refreshWindowY2=<span id="refreshWindowY2">0</span><br>
------------<br>
filterRun=<span id="filterRun">0</span>
</div>
			<?php } ?>
<div style="visibility:hidden;width:99%;z-index:9010;position:absolute;bottom:0;user-select:none;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;pointer-events: none;background: url('trans.png');filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='trans.png', sizingMethod='scale');background: none !important;" id="drawOptions">
</div>
<div id="nodeField" style="z-index:0;width:100%;height:100%;overflow:hidden;user-select:none;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;pointer-events: none;background: url('trans.png');filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='trans.png', sizingMethod='scale');background: none !important;">

</div>
<div style="z-index:9000;position:absolute;top:0;left:0;overflow:hidden;height:100%;width:100%;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" id="mouseDraw" onmousedown="dragClick=1;" onmouseup="dragClick=0;">
&nbsp;</div>
<canvas id="dragDraw" style="visibility:visible;z-index:-1;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>

<canvas id="gradientBG" style="visibility:visible;z-index:-2;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>

</div>
</div>
</html>		
