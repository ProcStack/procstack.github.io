<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<script type="text/javascript" src="jquery-1.11.0.min.js"></script>
<script>
// Neurous Project
// By Kevin Edzenga
// Kevin@pxlmancer.com
// [: Bootstrapped from the Pxlmancer.com code base :]
var sW=window.innerWidth;
var sH=window.innerHeight;
var mouseX=0;
var mouseY=0;
var mButton=0;
var pause=0;
var runner=0;
var mouseAttract=0;

var points=new Array();
var IE = document.all?true:false

window.oncontextmenu = function () {
   return false;
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}

document.onmousemove = getMouseXY;
//document.onclick = genPoint;
document.onmousedown=mouseAttracter;
document.onmouseup=genPoint;
//document.addEventListener('touchstart', function(e) {if(active>=0){startTouch(e);}}, false);
//document.addEventListener('touchmove', function(e) {if(active>=0){doDragTouch(e);}}, false);
//document.addEventListener('touchend', function(e) {if(active>=0){endTouch(e);}}, false);
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
			runCanvas("markerCanvas",0,1);
		}
		return false;
	}
});

function getMouseXY(e) {
	if(e!=0){
		if (IE) {
			mouseX = e.clientX + document.body.scrollLeft
			mouseY = e.clientY + document.body.scrollTop
		} else {
			mouseX = e.pageX
			mouseY = e.pageY
		}  
		preventDefault(e);
	}
}
function touchStart(e){
	var touchList=e.touches;
	var touch = touchList[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;
	mouseAttracter(0);
}
function doDragTouch(e){
	var touchList=e.touches;
	var touch = touchList[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;
}
function touchEnd(e){
	genPoint();
}
function Point(id,pos,trail,tlen,vel,age,color,alpha,vis,spark){
		this.id=id;
		this.pos=pos;
		this.weight=Math.sin(id*512.532+id*52.63+runner)*.5+.5;
		this.pullDist=this.weight*.08+sW*.15;
		this.tlen=Math.floor(tlen*this.weight);
		this.size=this.weight*3+1;
		this.speed=0;
		this.mouseDist=this.weight*3+1;
		this.trail=new Array();
		for(var x=0; x<tlen; ++x){
			this.trail.push(pos[0]);
			this.trail.push(pos[1]);
		}
		this.vel=vel;
		if(age>0){
			this.core=0;
			this.age=0;
			this.kill=age;
		}else{
			this.core=1;
			this.age=0;
			this.kill=0;
		}
		this.vis=vis;
		this.color=color;
		this.alpha=alpha;
		this.mousePerc=0;
		this.bounce=0;
		this.spark=spark;
	}
	Point.prototype.run=function(){
		this.age+=1;
		if(this.age >= this.kill && this.kill != 0){
			this.kill=-1;
		}else{
			this.pos[0]=Math.min(Math.max(0,this.pos[0]+this.vel[0]),sW);
			this.pos[1]=Math.min(Math.max(0,this.pos[1]+this.vel[1]),sH);
			if(this.pos[0]<=0 || this.pos[0]>=sW){
				this.vel[0]=this.vel[0]*(Math.sin(this.id*4025+this.age+self.id)*.2-1);
				this.bounce=1;
			}
			if(this.pos[1]<=0 || this.pos[1]>=sH){
				this.vel[1]=this.vel[1]*(Math.sin(this.id*405+this.age+self.id)*.2-1);
				this.bounce=1;
			}
			//$("#stats").html(parseInt(self.clampVel[0])+"_"+parseInt(self.clampVel[1]));
			//self.vel[0]=tmpVel[0];
			//self.vel[1]=tmpVel[1];
			this.trail.push(this.pos[0]);
			this.trail.push(this.pos[1]);
			if(this.trail.length>this.tlen){
				this.trail=this.trail.slice(2,this.trail.length);
			}
			if(mouseAttract>0 && this.core==1){
				if(mouseAttract==3){
						var mScale=300;
						var addedOff=[Math.sin(this.id*75.1579+5014+runner/30+mouseX/mScale+Math.cos(this.id*215.15+runner/150+mouseY/mScale)*3.14159265)*(Math.sin(this.id/3+this.age/3)*5+15) , Math.cos(this.id*75.1579+5014+runner/30+mouseY/mScale+Math.sin(this.id*5215.15+runner/150+mouseX/mScale)*3.14159265)*(Math.cos(this.id/3+541+this.age/3)*5+15)];
						var offMag=22+this.size*1.5;
						var toPos=[((mouseX+addedOff[0])-this.pos[0]), ((mouseY+addedOff[1])-this.pos[1])];
						
						var mather=Math.sqrt( Math.pow(toPos[0],2) + Math.pow(toPos[1],2) );
						offMag=offMag+mather/10;
						var ratio=(toPos[0]/toPos[1]);
						
						if(mather>offMag){
							if(Math.abs(ratio)<1){
								toPos[0]=offMag*(toPos[0]/Math.abs(toPos[0]));
								toPos[1]=offMag*(1-ratio)*(toPos[1]/Math.abs(toPos[1]));
							}else{
								ratio=(toPos[1]/toPos[0]);
								toPos[0]=offMag*(1-ratio)*(toPos[0]/Math.abs(toPos[0]));
								toPos[1]=offMag*(toPos[1]/Math.abs(toPos[1]));
							}
						}
						
						var smooth=this.id%5+this.size;
						toPos[0]=(toPos[0]+this.vel[0]*smooth)/(smooth+1);
						toPos[1]=(toPos[1]+this.vel[1]*smooth)/(smooth+1);
						this.vel[0]=toPos[0];
						this.vel[1]=toPos[1];
						this.mousePerc=1;
				}else{
					var mag=Math.sqrt( Math.pow(mouseX-this.pos[0],2)+ Math.pow(mouseY-this.pos[1],2));
					if(mag<this.pullDist){
						var blender=(1-mag/this.pullDist)*.9+.1;
						this.mousePerc=blender;
						var mScale=400;
						
						var addedOff=[Math.sin(this.id*75.1579+5014+runner/30+mouseX/mScale+Math.cos(this.id*215.15+runner/150+mouseY/mScale)*3.14159265)*(Math.sin(this.id/3+this.age/3)*5+15) , Math.cos(this.id*75.1579+5014+runner/30+mouseY/mScale+Math.sin(this.id*5215.15+runner/150+mouseX/mScale)*3.14159265)*(Math.cos(this.id/3+541+this.age/3)*5+15)];
						var offMag=(15-15*blender)+7+this.size*1.5;
						var toPos=[((mouseX+addedOff[0])-this.pos[0]), ((mouseY+addedOff[1])-this.pos[1])];
						
						var mather=Math.sqrt( Math.pow(toPos[0],2) + Math.pow(toPos[1],2) );
						offMag=offMag+mather/10;
						var ratio=(toPos[0]/toPos[1]);
						
						if(mather>offMag){
							if(Math.abs(ratio)<1){
								toPos[0]=offMag*(toPos[0]/Math.abs(toPos[0]));
								toPos[1]=offMag*(1-ratio)*(toPos[1]/Math.abs(toPos[1]));
							}else{
								ratio=(toPos[1]/toPos[0]);
								toPos[0]=offMag*(1-ratio)*(toPos[0]/Math.abs(toPos[0]));
								toPos[1]=offMag*(toPos[1]/Math.abs(toPos[1]));
							}
						}
						var smooth=this.id%5+this.size;
						toPos[0]=(toPos[0]+this.vel[0]*smooth)/(smooth+1);
						toPos[1]=(toPos[1]+this.vel[1]*smooth)/(smooth+1);
						
						this.vel[0]=this.vel[0]*(1-blender) + toPos[0]*blender;
						this.vel[1]=this.vel[1]*(1-blender) + toPos[1]*blender;
					}else{
						this.mousePerc=0;
					}
					this.mouseDist=mag;
				}
			}else{
				this.mousePerc=0;
			}
			this.speed=Math.sqrt( Math.pow(this.trail[2]-this.trail[0]  ,2) + Math.pow(this.trail[3]-this.trail[1],2) );
		}
	}
	Point.prototype.addForce=function(force){
		this.vel[0]+=force[0];
		this.vel[1]+=force[1];
		if((this.pos[0]+this.vel[0])<=0 || (this.pos[0]+this.vel[0])>=sW){
			this.vel[0]=this.vel[0]*-1;
		}
		if((this.pos[1]+this.vel[1])<=0 || (this.pos[1]+this.vel[1])>=sH){
			this.vel[1]=this.vel[1]*-1;
		}
	}
	Point.prototype.setPos=function(poser){
		this.pos=poser;
		this.trail.push(this.pos[0]);
		this.trail.push(this.pos[1]);
		if(this.trail.length>this.tlen){
			this.trail=this.trail.slice(2,this.trail.length);
		}
	}
	Point.prototype.setVel=function(veler){
		this.vel[0]=veler[0];
		this.vel[1]=veler[1];
	}
	Point.prototype.clampVel=function(){
		var minMax=15;
		var tmpVel=[this.vel[0],this.vel[1]];
		if(Math.abs(this.vel[0])>15){
			tmpVel[0]=Math.min(Math.max(this.vel[0],-minMax),minMax)* (this.vel[0]/Math.abs(this.vel[0]));
		}
		if(Math.abs(self.vel[1])>15){
			tmpVel[1]=Math.min(Math.max(this.vel[1],-minMax),minMax)* (this.vel[1]/Math.abs(this.vel[1]));
		}
		
		return tmpVel;
	}
	Point.prototype.bounce=function(val){
		if(val==0){
			this.bounce=0;
		}else{
			return this.bounce;
		}
	}
	function reapParticles(){
		var kill=0;
		var hit=0;
		for(var x=0;x<points.length;++x){
			kill=points[x].kill;
			if(kill==-1){
				points.pop(x);
				//x-=1;
				hit=1;
				if(points.length==0){
					break;
				}
			}
		}
	}
	function collisionParticles(){
		for(var x=0;x<points.length;++x){
			if(points[x].bounce==1 && points[x].core==1 && points[x].age>10){
				popPoint([points[x].pos[0],points[x].pos[1]],5,.5,[1,2]);
			}
		}
	}
	function popPoint(pos, count,alpha, age, spark){
		var tmp,len;
		var rage=0;
		
		for(var c=0;c<count;++c){
			len=Math.sin(runner*23.24+23+points.length)*4+6;
			color=[ Math.sin(len*23.24+23+points.length+len)*10+35, Math.sin(len*23.24+23+points.length+len)*10+45, Math.sin(len*23.24+23+points.length+len)*15+80];
			rage=Math.floor(Math.sin(len*125.9757+points.length+345)*age[0]+age[1]);
			tmp=new Point(points.length,pos,[],Math.floor(len),[Math.sin(c*230+3434+len)*10,Math.sin(c*630+134+len)*10],rage,color,alpha,1,spark);
			//tmp=new Point(points.length,[points[x].trail[0],points[x].trail[1]],[],Math.floor(len),[Math.sin(c*230+3434+len)*10,Math.sin(c*630+134+len)*10],rage,color,1);
			points.push(tmp);
		}
	}
function boot(){
	var can=document.getElementById('bkCanvas');
	can.width=sW;
	can.height=sH;
	can=document.getElementById('markerCanvas');
	can.width=sW;
	can.height=sH;
	var tmp,len,rage, color,alpha;
	var count=(sW+sH)/50+25;
	for(var x=0;x<count;++x){
		if(x%10==0){
			len=Math.sin(runner*23.24+23+points.length)*4+11;
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
		tmp=new Point(x,[Math.sin(x*230+3434+len)*sW*.5+sW*.5,Math.sin(x*20+234+len)*sH*.5+sH*.5],[],Math.floor(len),[Math.sin(x*230+3434+len)*10,Math.sin(x*630+134+len)*10],0,color,alpha,1,0);
		points.push(tmp);
	}
	runCanvas("markerCanvas",0,1);
	gradientRunner('bkCanvas',rgbToHex([0,40,50]),rgbToHex([0,10,30]),0);
}
function genPoint(e){
	var button=e.which;
	if(button==3){
		mouseAttract=0;	
	}else{
		if(mouseAttract<2){
			var len;
			if(points.length%10==0){
				len=Math.sin(runner*23.24+23+points.length)*4+11;
			}else{
				len=Math.sin(runner*23.24+23+points.length)*4+6;
			}
			var alpha,color;
			if(points.length%4==0){
				alpha=Math.sin(points.length*234.353)*.1+.35;
				color=[ Math.sin(len*223.24+23+points.length+len)*10+20, Math.sin(len*213.24+23+points.length+len)*15+35, Math.sin(len*233.24+23+points.length+len)*30+95];
			}else{
				alpha=Math.min(1,Math.sin(points.length*234.353)*.3+.95);
				color=[ Math.sin(len*2633.24+23+points.length+len)*10+20, Math.sin(len*243.24+23+points.length+len)*20+45, Math.sin(len*235.24+23+points.length+len)*35+150];
			}
			var tmp=new Point(points.length,[mouseX,mouseY],[],Math.floor(len),[Math.sin(points.length*230+3434+len)*10,Math.sin(points.length*630+134+len)*10],0,color,alpha,1,1);
			points.push(tmp);
			tmp=new Point(points.length,[mouseX,mouseY],[],Math.floor(len),[Math.sin(points.length*230+3434+len)*10,Math.sin(points.length*630+134+len)*10],0,color,alpha,1,1);
			points.push(tmp);
			if(points.length==0){
				runCanvas("markerCanvas",0,1);
			}
			popPoint([mouseX,mouseY],30,.5,[2,5]);
			//pause=1;
			mouseAttract=0;	
		}else{
			mouseAttract=0;	
		}
	}
}

function runCanvas(canvas,ittr,gen){
	runner+=1;
	docCanvas=document.getElementById(canvas);
	draw=docCanvas.getContext('2d');
	draw.clearRect(0,0,sW,sH);
	
	var pnts=new Array;
	var tmpPos;
	var scoreAdd=0;
	for(var x=0;x<points.length;++x){
		points[x].run();
		var f=[Math.sin(x*234+35+points[x].pos[0]+points[x].age),Math.sin(x*1023+1325+points[x].pos[1]+points[x].age)];
		points[x].addForce(f);
		tmpPos=[points[x].pos[0],points[x].pos[1]];
		pnts.push(points[x].trail[0]);
		//pnts.push(color[1]);
		var pointColor;
		if(points[x].spark==0){
			pointColor=[Math.min(255,points[x].color[0]+points[x].color[0]*points[x].mousePerc), Math.min(255,points[x].color[1]+points[x].color[1]*points[x].mousePerc), Math.min(255,points[x].color[2]+points[x].color[2]*points[x].mousePerc) ];
		}else{
			pointColor=points[x].color;
		}
		pColor=[]
		//drawLine(points[x].trail,2,pointColor,this.alpha,0,canvas,[-1]);
		var size=5*(points[x].mousePerc+(1-Math.min(1,(this.mouseDist+this.pullDist/5)/(this.pullDist*6)+.1))+1 );
		var trailPos=points[x].trail;
		var sl;
		
		var alpha=Math.min(1, points[x].alpha+(points[x].mousePerc/2));
		if(points[x].spark!=0){
			alpha=alpha+Math.max(0,-.5+alpha/3);
		}
		var compers=['lighter', 'overlay','lighter', 'screen','lighter','overlay'];
		var comp=compers[points[x].id%compers.length];
		var normSpeed=(points[x].speed/120+1);
		
		if(points[x].mousePerc>0 && mouseAttract!=3){
			scoreAdd+=parseInt(points[x].mousePerc*2);
		}
		var thickness=3*points[x].mousePerc * normSpeed;
		drawGeo(points[x].trail,3,size,pointColor,alpha,thickness,0,canvas,comp);

		if(points[x].core==1){
			draw.beginPath();
			draw.globalCompositeOperation=comp;
			draw.fillStyle=rgbToHex(pointColor);
			draw.globalAlpha=this.alpha;
			var scaler=(points[x].size+points[x].mousePerc)*normSpeed;
			draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
			draw.fill();
			if(points[x].size>3){
				draw.beginPath();
				draw.globalCompositeOperation=comp;
				draw.fillStyle=rgbToHex(pointColor);
				draw.globalAlpha=.3;
				scaler=points[x].size+points[x].mousePerc;
				scaler=scaler*1.5;
				draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
				draw.fill();
				if(points[x].size>6){
					draw.beginPath();
					draw.globalCompositeOperation=comp;
					draw.fillStyle=rgbToHex(pointColor);
					draw.globalAlpha=.1;
					scaler=points[x].size+points[x].mousePerc;
					scaler=scaler*2;
					draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
					draw.fill();
				}
			}
		}
	}
	reapParticles();
	//collisionParticles();
	//$('#score_val').html(parseInt($('#score_val').html())+scoreAdd);

	if(pause==0 && points.length>0){
		setTimeout(function(){
			runCanvas(canvas,ittr,gen);
		},20);
	}

}

function mouseAttracter(e,gen){
	var button=e.which;
	mButton=button;
	if(button == 1){
		if(isNaN(gen)){
			var gen=0;	
		}
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
	if(button == 2){
	}
	if(button == 3){
		mouseAttract=3;
		$('#score_val').html(0);
	}
	return false;
}

function drawGeo(loc,eCount,size,color,alpha,filled,flip,canvas,comp){
	var x=loc[0];
	var y=loc[1];
	var R=color[0];
	var G=color[1];
	var B=color[2];
	hex=rgbToHex([Math.floor(R),Math.floor(G),Math.floor(B)] );
	var csW=$("#"+canvas).width();
	var csH=$("#"+canvas).height();
	
	docCanvas=document.getElementById(canvas);
	draw=docCanvas.getContext('2d');
	draw.globalCompositeOperation=comp;

	var runCount=1;
	draw.globalAlpha=alpha;
	for(var c=0;c<runCount;c+=1){
		draw.beginPath();
		draw.lineWidth=Math.max(1,filled);
		if(filled==-1){
			draw.fillStyle=hex;
		}else{
			draw.strokeStyle=hex;
		}
		if(eCount<=2){
			if(eCount==1){
				var grad=draw.createRadialGradient((x-sW/2)+sW/2,(y-sH/2)+sH/2,1,(x-sW/2)+sW/2,(y-sH/2)+sH/2,size/2);
				grad.addColorStop(0,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',1)');
				if(color.length>4){
					grad.addColorStop(1,'rgba('+Math.floor(color[3])+','+Math.floor(color[4])+','+Math.floor(color[5])+',0)');
				}else{
					grad.addColorStop(1,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',0)');
				}
				draw.fillStyle=grad;
			}else if(eCount==2){
				var grad=draw.createRadialGradient((x-sW/2)+sW/2,(y-sH/2)+sH/2,1,(x-sW/2)+sW/2,(y-sH/2)+sH/2,size/2);
				grad.addColorStop(0,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',0)');
				if(color.length>4){
					grad.addColorStop(1,'rgba('+Math.floor(color[3])+','+Math.floor(color[4])+','+Math.floor(color[5])+',1)');
				}else{
					grad.addColorStop(1,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',1)');
				}
				draw.fillStyle=grad;
			}
			draw.arc((x-sW/2)+sW/2,(y-sH/2)+sH/2,size/2,0,Math.PI*2);
		}else{
			if(loc.length>2){
				if(eCount==3){
					draw.moveTo((x-sW/2)+sW/2,(y-sH/2)+sH/2);
					//draw.moveTo(x,y);
					for(var v=2; v<loc.length; v+=2){
						draw.lineTo((loc[v]-sW/2)+sW/2,(loc[v+1]-sH/2)+sH/2);
					}
					draw.lineJoin = 'round';
					if(size==1 && filled!=-1){
						draw.closePath();
					}else{
						draw.lineJoin = 'miter';
					}
				}else{
					draw.lineJoin = 'round';
					draw.moveTo((x-sW/2)+sW/2,(y-sH/2)+sH/2);
					for(var v=2; v<loc.length; v+=4){
						draw.quadraticCurveTo((loc[v]-sW/2)+sW/2,(loc[v+1]-sH/2)+sH/2, (loc[v+2]-sW/2)+sW/2,(loc[v+3]-sH/2)+sH/2);
					}
					if(size==1){
						draw.quadraticCurveTo((loc[loc.length-2]-sW/2)+sW/2,(loc[loc.length-1]-sH/2)+sH/2, (loc[0]-sW/2)+sW/2,(loc[1]-sH/2)+sH/2);
					}
					/*
					draw.moveTo(x,y);
					for(var v=2; v<loc.length; v+=4){
						draw.quadraticCurveTo(loc[v],loc[v+1], loc[v+2],loc[v+3]);
					}
					if(size==1){
						draw.quadraticCurveTo(loc[loc.length-2],loc[loc.length-1], loc[0],loc[1]);
					}*/
					if(size==1 && filled!=-1){
						draw.closePath();
					}else{
						draw.lineJoin = 'miter';
					}
				}
			}
		}
		if(filled==-1){
			draw.fill();
		}else{
			draw.stroke();
		}
	}
}

function drawLine(points,width,color,alpha,arcType,canvas,dash){
	var hex,docCanvas,draw;
	var R=color[0];
	var G=color[1];
	var B=color[2];	
	hex=rgbToHex([Math.floor(R),Math.floor(G),Math.floor(B)] );
	if(typeof(canvas)==="string"){
		docCanvas=document.getElementById(canvas);
		draw=docCanvas.getContext('2d');
	}else{
		draw=canvas;
	}
	
	draw.beginPath();
	if(dash[0]!=-1){
		draw.globalAlpha=alpha/2;
	}
	draw.strokeStyle=hex;
	draw.lineWidth=width;
	draw.moveTo(points[0],points[1]);
	for(var x=2; x<(points.length); x+=2){
		draw.lineTo(points[x],points[x+1]);
	}
	if(arcType==0){
		arcType='round';
	}else if(arcType==1){
		arcType='miter';
	}else if(arcType==2){
		arcType='bevel';
	}else{
		arcType='round';
	}
	draw.lineJoin = arcType;
	draw.lineCap = arcType;
	draw.stroke();
	if(dash[0]!=-1){
		draw.globalAlpha=alpha;
		draw.setLineDash(dash);
		draw.stroke();
	}
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
    return "#" + componentToHex(Math.min(255, Math.max(0,Math.round(rgb[0])))) + componentToHex(Math.min(255, Math.max(0,Math.round(rgb[1])))) + componentToHex(Math.min(255, Math.max(0,Math.round(rgb[2]))));
}

function toHSV(RGB){
	var H,S,V;
	var r=RGB[0];
	var g=RGB[1];
	var b=RGB[2];
	var minv=Math.min(r,g,b);
	var maxv=Math.max(r,g,b);
	V=maxv;
	var d=Math.max(1,maxv-minv);
	if(maxv != 0){
		S=d/maxv;
	}else{
		S=0;
		H=-1;
		return [H,S,V];
	}
	if(r == maxv){
		H=(g-b)/d;
	}else if(g == maxv){
		H=2+(b-r)/d;
	}else{
		H=4+(r-g)/d;
	}
	H *= 60;
	if(H < 0){
		H += 360;
	}
	return [H,S,V];
}

function toRGB(HSV){
	var R,G,B;
	var H=HSV[0];
	var S=HSV[1];
	var V=HSV[2];
	if(S == 0){
		R=G=B=V;
		return [R,G,B];
	}
	H/=60;
	var i=Math.floor(H);
	var f=H-i;
	var p=V*(1-S);
	var q=V*(1-S*f);
	var t=V*(1-S*(1-f));
	if(i == 0){
		R=V;
		G=t;
		B=p;
	}else if(i == 1){
		R=q;
		G=V;
		B=p;
	}else if(i == 2){
		R=p;
		G=V;
		B=t;
	}else if(i == 3){
		R=q;
		G=p;
		B=V;
	}else if(i == 4){
		R=t;
		G=p;
		B=V;
	}else{
		R=V;
		G=p;
		B=q;
	}
	return [R,G,B];
}
function gradientRunner(canvas,colorFrom,colorTo,runBlur){
	var gBG=document.getElementById(canvas);
	var drawBG=gBG.getContext("2d");
	var cW=$("#"+canvas).width();
	var cH=$("#"+canvas).height();

	drawBG.rect(0, 0, cW, cH);
	var grd = drawBG.createLinearGradient(0,0,cW,cH);
	grd.addColorStop(0, colorFrom);
	grd.addColorStop(1, colorTo);
	drawBG.fillStyle = grd;
	drawBG.fill();

	if(runBlur==1){
		blurEffect(drawBG,drawBG,1,80,3);
		//blurEffect(drawBG,drawBG,1,70,5);
	}
}
function blurEffect(input,output,fullCanvas,dist,levels){
	if(dist.constructor !== Array){
		var tmpDist=dist;
		dist = new Array();
		dist[0]=tmpDist;
		dist[1]=tmpDist;
	}
	var cW;
	var cH;
	if(typeof input == "string"){
		cW=$("#"+input).width();
		cH=$("#"+input).height();
		var cn=document.getElementById(input);
		var input=cn.getContext("2d");
		output=input;
	}else{
		cW=sW;
		cH=sH;
	}
	//var canvas=document.getElementById(drawCanvas);
	//var draw=canvas.getContext("2d");
	fader=input.getImageData(0,0,cW,cH);
	pix = fader.data;
	var rx,ry,rpix,px,py,mather ;
	var checker,rCalc,gCalc,bCalc,aCalc,stageX,stageY,mather,distCheck;
	//var distCheck=4+4*Math.abs((Math.floor(runner/55)*55)%3+(dragTotal%touchChecker));
	var startPix, endPix,percer,rPix;
	if(fullCanvas==1){
		startPix=0;
		endPix=pix.length;
		percer=1;
	}else{
		startPix=cW*4*(parseInt(refreshWindow[1])-2);
		endPix=(cW*4*(parseInt(refreshWindow[3])+2));
		percer=$("#sl"+diaVal+"_filterPercent_val").val();
	}
	levels=Math.max(1,levels);
	var blendcount=0;
	if(dist[0]>0 || dist[1]>0 || fullCanvas==1){
		for (var i=startPix; i<endPix; i+=4) {
			if( ((i/4)%cW>parseInt(refreshWindow[0])-2 && (i/4)%cW<parseInt(refreshWindow[2])+1) || fullCanvas==1){
				if(pix[i+3]>0){
					blendcount=Math.max(1,levels/2);
					px=(i/4)%cW;
					py=Math.floor((i/4)/cW);
					rCalc=pix[i]*blendcount;
					gCalc=pix[i+1]*blendcount;
					bCalc=pix[i+2]*blendcount;
					aCalc=pix[i+3]*blendcount;
					for (var v=0; v<levels; ++v) {
						rx=Math.round(Math.random()*dist[0]-(dist[0]/2)+px);
						rx=Math.max(0,Math.min(rx,cW-1))-Math.max(0, rx-cW);
						
						ry=Math.round(Math.random()*dist[1]-(dist[1]/2)+py);
						ry=Math.max(0,Math.min(ry,cH-1))-Math.max(0, ry-cH);
						rpix=(ry*cW+rx)*4;
							rCalc+=pix[rpix];
							gCalc+=pix[rpix+1];
							bCalc+=pix[rpix+2];
							aCalc+=pix[rpix+3];
						blendcount++;
					}
						if(percer==1){
							rCalc=(rCalc/blendcount);
							gCalc=(gCalc/blendcount);
							bCalc=(bCalc/blendcount);
							aCalc=(aCalc/blendcount);
						}else{
							rCalc=pix[i]*(1-percer)+(rCalc/blendcount)*percer;
							gCalc=pix[i+1]*(1-percer)+(gCalc/blendcount)*percer;
							bCalc=pix[i+2]*(1-percer)+(bCalc/blendcount)*percer;
							aCalc=pix[i+3]*(1-percer)+(aCalc/blendcount)*percer;
						}
						pix[rpix]=rCalc;
						pix[rpix+1]=gCalc;
						pix[rpix+2]=bCalc;
						pix[rpix+3]=aCalc;
				}
			}
		}
	}	
	for (var i=startPix; i<endPix; i+=4) {
		if( ((i/4)%cW>parseInt(refreshWindow[0])-2 && (i/4)%cW<parseInt(refreshWindow[2])+1) || fullCanvas==1){
			if(pix[i+3]>0){
				blendcount=2;
				px=(i/4)%cW;
				py=Math.floor((i/4)/cW);
				rCalc=pix[i]*2;
				gCalc=pix[i+1]*2;
				bCalc=pix[i+2]*2;
				aCalc=pix[i+3]*2;
				if(py>0){
					rCalc+=pix[i-cW*4];
					gCalc+=pix[i+1-cW*4];
					bCalc+=pix[i+2-cW*4];
					aCalc+=pix[i+3-cW*4];
					blendcount+=1;
				}
				if(py<cH-1){
					rCalc+=pix[i+cW*4];
					gCalc+=pix[i+1+cW*4];
					bCalc+=pix[i+2+cW*4];
					aCalc+=pix[i+3+cW*4];
					blendcount+=1;
				}
				if(px>0){
					rCalc+=pix[i-4];
					gCalc+=pix[i+1-4];
					bCalc+=pix[i+2-4];
					aCalc+=pix[i+3-4];
					blendcount+=1;
				}
				
				if(px<cW-1){
					rCalc+=pix[i+4];
					gCalc+=pix[i+1+4];
					bCalc+=pix[i+2+4];
					aCalc+=pix[i+3+4];
					blendcount+=1;
				}
				if(percer==1){
					rCalc=(rCalc/blendcount);
					gCalc=(gCalc/blendcount);
					bCalc=(bCalc/blendcount);
					aCalc=(aCalc/blendcount);
				}else{
					rCalc=pix[i]*(1-percer)+(rCalc/blendcount)*percer;
					gCalc=pix[i+1]*(1-percer)+(gCalc/blendcount)*percer;
					bCalc=pix[i+2]*(1-percer)+(bCalc/blendcount)*percer;
					aCalc=pix[i+3]*(1-percer)+(aCalc/blendcount)*percer;
				}
				pix[i]=rCalc;
				pix[i+1]=gCalc;
				pix[i+2]=bCalc;
				pix[i+3]=aCalc;
				
			}
		}
	}
	output.putImageData(fader, 0, 0);
}
</script>
<body onLoad='boot();'>
<canvas id="markerCanvas" height='1' width='1' style='z-index:1;position:fixed;top:0px;left:0px;'></canvas>
<canvas id="bkCanvas" height='1' width='1' style='z-index:0;position:fixed;top:0px;left:0px;'></canvas>
<div id="stats" style='z-index:100;position:fixed;top:0px;left:0px;color:#ffffff;'></div>
<div align='center' id="score" style='z-index:200;position:fixed;top:0px;left:300px;color:#555555;visibility:hidden;'><span style='cursor:pointer;' onClick="$('#score').css('visibility','hidden');">[X]</span> Score : <span id='score_val' style="color:#777777">0</span></div>
</body>
</html>
