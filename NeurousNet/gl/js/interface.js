var benchmark_prevTime=new Date().getTime;
var benchmark_prevDelta=-1;
var benchmark_totalDelta=0;
var benchmark_curLabel="Timer";

function benchMark(sst=0, label=null){
	curTime=new Date().getTime();
	if(sst==0){
		benchmark_prevTime=curTime;
		if(label==null) label="Timer";
		benchmark_curLabel=label;
		console.log(benchmark_curLabel+" Start - "+ benchmark_prevTime);
		
	}else if(sst==1){
		var delta=curTime- benchmark_prevTime;
		benchmark_totalDelta+=delta;
		if( benchmark_prevDelta==-1){
			 benchmark_prevDelta=new Array(3).fill(delta);
		}
		console.log(benchmark_curLabel+" Ended - "+ delta+" -- Benchmark time tally - "+benchmark_totalDelta);
	}else if(sst==2){
		var delta=curTime- benchmark_prevTime;
		benchmark_totalDelta+=delta;
		if( benchmark_prevDelta==-1){
			 benchmark_prevDelta=new Array(3).fill(delta);
		}
		console.log(benchmark_curLabel+" Ended - "+ delta+" -- Benchmark time tally - "+benchmark_totalDelta);
		benchmark_prevTime=curTime;
		if(label==null) label="Timer";
		console.log(benchmark_curLabel+" Start - "+ benchmark_prevTime);
	}
}

function Point(id,pos,trail,tlen,vel,age,color,alpha,vis,spark){
		this.id=id;
		this.pos=pos;
		this.weight=Math.sin(id*512.532+id*52.63*Math.cos((runner+id)+id*15.7391*Math.sin(-runner/3.14+id))+runner+id)*.5+.5;
		this.pullDist=this.weight*120*(1 - .5*!mobile)+(cW+cH)*(.1 + .5*!mobile);
		this.tlen=Math.floor(tlen*this.weight);
		this.size=this.weight*3+1;
		this.origSize=this.weight*3+1;
		this.thickness=Math.sin(this.id+this.size)*1.3+1.1;
		this.speed=0;
		this.mouseDist=this.weight*3+1;
		this.trail=new Array();
		for(var x=0; x<tlen; ++x){
			this.trail.push(pos[0]);
			this.trail.push(pos[1]);
		}
		this.vel=vel;
		this.velMagCap=20+(20*this.weight);
		this.velOffsetPrev=[0,0];

		if(age>0){
			this.life=age;
			this.fade=age*.95;
		}else{
			this.life=-1;
			this.fade=-1;
		}
		this.age=0;
		this.lifePerc=1;
		this.kill=0;
		this.vis=vis;
		this.color=color;
		this.alpha=alpha;
		this.mousePerc=0;
		this.bounce=0;
		this.grow=0;
		this.spark=spark;
		var newton=0;
		var core=1;
		if(spark == 1){
			core=0;
		}else if(spark ==2){
			newton=1;
		}
		this.core=core;
		this.newton=newton;
	}
	Point.prototype.run=function(){
		//var normalize=e=>{let l=e[0]*e[0]<0?-1:1+e[1]*e[1]<0?-1:1; return l==0?[0,0]:[e[0]/l,e[1]/l]; };
		var normalize=e=>{let l=e[0]*(e[0]<0?-1:1)+e[1]*(e[1]<0?-1:1); return [e[0]/l,e[1]/l]; };
		var mag=e=>{(e[0]**2+e[1]**2)**.5};
		
		this.age+=1;
		if(this.life>0){
			this.lifePerc=Math.max(0, 1-this.age/this.life);
			if(this.age >= this.life){
				this.kill=1;
				return 0;
			}
		}
		this.checkFieldPosition();
		this.trailUpdate();
		this.sizeGrowUpdate();
		this.checkFadeToDeath()
		
		if(this.newton == 1){ // Newton Eval
			//this.grow;
		}else{ // Normal Point Eval
			if((mouseAttract>0 || newtonFields.length>0) && this.core==1){
				if(mouseAttract==3){
					var mScale=500+(cW+cH)*.15;
					var addedOff=[
						Math.sin(this.id*75.1579+5014+runner*.000130+mouseX*.01+
						Math.cos(this.id*215.15+runner*.00123+mouseY*.001+this.age*.1)*3.14159265 )*cW*.5*(.4*mobile + !mobile),
					
						Math.cos(this.id*275.1579+444+runner*.00017+mouseY*.008+
						Math.sin(this.id*515.15+runner*.00178+mouseX*.001+this.age*.1)*3.14159265)*cH*.5*(.4*mobile + !mobile)
					];
					var offMag=22+this.size*1.5;
					var toPos=[((mouseX+addedOff[0])-this.pos[0])*(this.weight*.2+.2), ((mouseY+addedOff[1])-this.pos[1])*(this.weight*.2+.2)];
					
					var mather=Math.sqrt( Math.pow(toPos[0],2) + Math.pow(toPos[1],2) );
					offMag=offMag+mather/10;
					var ratio=(toPos[0]/toPos[1]);
					
					var normVel=normalize( [...this.vel] );
					toPos[0]+=normVel[0]*.8;
					toPos[1]+=normVel[1]*.8;
					if(mather>offMag){
						if(Math.abs(ratio)<1){
							toPos[0]=offMag* sign(toPos[0]) ;
							toPos[1]=offMag*(1-ratio)* sign(toPos[1]) ;
						}else{
							ratio=(toPos[1]/toPos[0]);
							toPos[0]=offMag*(1-ratio)* sign(toPos[0]);
							toPos[1]=offMag* sign(toPos[1]) ;
						}
					}
					var smooth=this.id%5+this.size*((this.weight*.5)**2)*(1)+2;
					let curWeight=this.weight* ( (this.weight*.5+.5)*mobile + 1*!mobile);
					toPos[0]=(toPos[0]*(1-curWeight)+this.vel[0]*curWeight+this.vel[0]*smooth)/(smooth+1);
					toPos[1]=(toPos[1]*(1-curWeight)+this.vel[1]*curWeight+this.vel[1]*smooth)/(smooth+1);
					this.vel[0]=toPos[0];
					this.vel[1]=toPos[1];
					this.mousePerc=.65;
				}else{
						
					var posArr=new Array();
					var infArr=new Array();
					var infRef=.15;
					var infMax=0;
					if(mouseAttract==1){
						posArr.push([mouseX,mouseY]);
						infArr.push(1);
					}
					if(newtonFields.length>0){
						for(var x=newtonFields.length-1; x>=0; --x){
							if(!newtonFields[x].kill){
								var nPos=[newtonFields[x].pos[0], newtonFields[x].pos[1]];
								posArr.push(nPos);
								var curInf=(newtonFields[x].weight)*infRef;
								infArr.push(curInf);
							}
						}
					}
					var toPos=[0,0];
					var toPosTemp=[0,0];
					this.mousePerc=0;
					var offMag,addedOff;
					var pullPos=new Array(posArr.length).fill([0,0]);
					var pullWeight=new Array(posArr.length).fill(0);
					var hitNewton=0;
					

					for(var x=0; x<posArr.length;++x){
						
						var mag=( (posArr[x][0]-this.pos[0])**2 + (posArr[x][1]-this.pos[1])**2 )**.5;
						if(mag<this.pullDist){
							hitNewton=1;
							var blender=((1-mag/this.pullDist))*infArr[x];
							blender=blender<0?0:blender;
							var inf=blender*(1-this.weight);
							pullWeight[x]=blender;
							var mScale=cW*cH*.001+this.weight*200;//+(sW+sH)*.1;
							
							addedOff=[
								Math.sin(this.id*75.1579+5014+runner/30+mouseX/mScale)
								//+Math.cos(this.id*215.15+runner/150+mouseY/mScale)*3.14159265)*
								*(Math.sin(this.id/3+this.age/30)*(175*(this.weight)*(.2*mobile + !mobile)))  ,

								Math.cos(this.id*75.1579+5014+runner/30+mouseY/mScale)
								//"Math.sin(this.id*5215.15+runner/150+mouseX/mScale)*3.14159265)*
								*(Math.cos(this.id/3+541+this.age/30)*(175*(this.weight)*(.2*mobile + !mobile))) ];
							offMag=(15-15*blender)+7+this.size*1.5;//*infArr[x];
							if(x==0){
								toPos=[((posArr[x][0]+addedOff[0])-this.pos[0]), ((posArr[x][1]+addedOff[1])-this.pos[1])];
							}else{
								toPosTemp=[((posArr[x][0]+addedOff[0])-this.pos[0])*blender, ((posArr[x][1]+addedOff[1])-this.pos[1])*blender];
								toPos=[toPos[0]+toPos[0]*(1-infArr[x])+toPosTemp[0]*infArr[x], toPos[1]+toPos[1]*(1-infArr[x])+toPosTemp[1]*infArr[x], toPos[2]*(1-infArr[x])+toPosTemp[2]*infArr[x] ];
							}
							var mather=( (toPos[0]**2) + (toPos[1]**2) )**.5;
							offMag=offMag+mather/10;
							if(this.id%3==0){
									var toPosCalc=[0,0];
								toPosCalc[0]=toPos[0]+this.vel[0]*2;
								toPosCalc[1]=toPos[1]+this.vel[1]*2;
								var ratio=(toPosCalc[0]/toPosCalc[1]);
								if(mather>offMag){
									if(Math.abs(ratio)<1){
										toPosCalc[0]=(offMag* sign(toPosCalc[0]) );
										toPosCalc[1]=(offMag*(1-ratio)* sign(toPosCalc[1]) );
									}else{
										ratio=(toPosCalc[1]/toPosCalc[0]);
										toPosCalc[0]=(offMag*(1-ratio)* sign(toPosCalc[0]) );
										toPosCalc[1]=(offMag* sign(toPosCalc[1]) );
									}
								}
								this.velOffsetPrev=[ (this.velOffsetPrev[0]*2+toPosCalc[0])*.333333333333 ,(this.velOffsetPrev[1]*2+toPosCalc[1])*.3333333333333  ];
								toPos=[...this.velOffsetPrev];
								//toPos=[ (toPos[0]*2+toPosCalc[0])*.333333333333 ,(toPos*2+toPosCalc[1])*.3333333333333  ];
							}
							
							var normalize=e=>{let l=e[0]*(e[0]<0?-1:1)+e[1]*(e[1]<0?-1:1); return [e[0]/l,e[1]/l]; };
							var mag=e=>{(e[0]**2+e[1]**2)**.5};
							
							var normVel=normalize( [...this.vel] );
							var dirVec=normalize( [ (toPos[0]*(1-inf)+normVel[0]*inf*(.5+mobile*1.5)), (toPos[1]*(1-inf)+normVel[1]*inf*(.5+mobile*1.5)) ] );
							var curSpeed=mag([...this.vel])+mouseVelMag;
							curSpeed=curSpeed<offMag?curSpeed:offMag;
							toPos=[ curSpeed*dirVec[0], curSpeed*dirVec[1] ];
							//toPos=[ offMag*sign(toPos[0]+normVel[0]), offMag* sign(toPos[1]+normVel[1]) ];
							//blender*=(1-blender)*(this.weight);
							//blender/=blender*this.weight;
							//toPos=[ toPos[0]*blender + this.vel[0]*(1-blender), toPos[1]*blender + this.vel[1]*(1-blender)  ];
							toPos=[ toPos[0] + this.vel[0], toPos[1] + this.vel[1]  ];
							
							
							pullPos[x]=[...toPos];
						}
						this.mouseDist=Math.min(this.mouseDist, mag);
					}
					
					//toPos[0]/=infMax;
					//toPos[1]/=infMax;
					//.reduce( (x,c)=>x+c)
					if( hitNewton > 0){
						var totalWeight=pullWeight.reduce( (x,c)=>x+c);
						//totalWeight/=pullWeight.length;
						blender=totalWeight* (1-(this.weight*.5));//(this.weight**2);//*this.weight*Math.sin(curTime*.01);
						//var curMouseVel=1-mouseVelMag*this.weight*5;
						var curMouseVel=1-this.weight;
						var avgPos=[0,0];
						var avg=blender;
						try{
						avg=0;
						for(var x=0; x<pullPos.length;++x){
							avg+=pullWeight[x];
							avgPos[0]+=pullPos[x][0];//*(pullWeight[x]/totalWeight);
							avgPos[1]+=pullPos[x][1];//*(pullWeight[x]/totalWeight);
						}
						avg/=pullPos.length;
						}catch(err){}
							
							
						var smooth=(this.id%5+this.size)*curMouseVel*blender;
						//avgPos=[avgPos[0]*blender, avgPos[1]*blender];
						//avgPos=[avgPos[0], avgPos[1]];
						var mVel=[
						bgUniformMouseXY.y-bgUniformMousePrevX.x,
						bgUniformMouseXY.y-bgUniformMousePrevY.x ];
						
						avgPos[0]=(avgPos[0]+mouseVel[0]*this.mousePerc+this.vel[0]*smooth)/(smooth+avg);
						avgPos[1]=(avgPos[1]+mouseVel[1]*this.mousePerc+this.vel[1]*smooth)/(smooth+avg);
						
						//blender=(1-mouseVelMag/this.velMagCap*this.weight) * blender;
						var vel=[...this.vel];
						vel= [ vel[0]*avg+avgPos[0]*(1-avg), vel[1]*avg+avgPos[1]*(1-avg) ];
						this.setVel(vel,2);
						this.mousePerc=(this.mousePerc*2+avg*1.35)*.5;
					}
					
				}
			}else{
				this.mousePerc=0;
			}
			this.speed=Math.sqrt( Math.pow(this.trail[2]-this.trail[0]  ,2) + Math.pow(this.trail[3]-this.trail[1],2) );

		}
	}
	Point.prototype.checkFadeToDeath=function(){
		if(this.life>0){
			if(this.age>this.fade){
				var val= Math.min(1, (this.age-this.fade) / (this.life-this.fade));
				this.size=(this.origSize*(1-val));
				this.weight=this.weight*(1-val*.4);
				this.alpha=this.alpha*(1-val*.3);
			}else if(this.age>this.life){
				this.size=0;
				this.weight=0;
				this.alpha=0;
			}
		}
	}
	Point.prototype.sizeGrowUpdate=function(){
		if(this.grow!=0){
			if(this.grow==-1){
				this.size=this.origSize;
			}else{
				this.size+=this.grow;
			}
		}
	}
	Point.prototype.checkFieldPosition=function(){
		
		this.pos[0]=Math.min(Math.max(0,this.pos[0]+this.vel[0]),cW);
		this.pos[1]=Math.min(Math.max(0,this.pos[1]+this.vel[1]),cH);
		if(this.pos[0]<=cW*(1-tankScale) || this.pos[0]>=cW*tankScale){
			this.vel[0]=this.vel[0]*(Math.sin(this.id*4025+this.age+this.id)*.2-1);
			this.vel[0]=Math.abs(this.vel[0]);
			this.vel[0]+=.5;
			this.vel[0]*=this.pos[0]<=0?1:-1;
			this.bounce=1;
		}
		if(this.pos[1]<=0 || this.pos[1]>=cH*tankScale){
			this.vel[1]=this.vel[1]*(Math.sin(this.id*405+this.age+this.id)*.2-1);
			this.vel[1]=Math.abs(this.vel[1]);
			this.vel[1]+=.5;
			this.vel[1]*=this.pos[1]<=0?1:-1;
			this.bounce=1;
		}
	}
	Point.prototype.addForce=function(force, clamp=0){
		this.vel[0]+=force[0];
		this.vel[1]+=force[1];
		if(clamp) this.clampVel();
		if((this.pos[0]+this.vel[0])<=cW*(1-tankScale)){
			this.vel[0]=Math.abs(this.vel[0]);
			//this.vel[1]+=(this.vel[1]<1?1:0);
			this.vel[0]+=.5;
		}else if( (this.pos[0]+this.vel[0])>=cW*tankScale){
			this.vel[0]=Math.abs(this.vel[0]);
			//this.vel[1]+=(this.vel[1]<1?1:0);
			this.vel[0]+=.5;
			this.vel[0]*=-1;
		}
		if((this.pos[1]+this.vel[1])<=cH*(1-tankScale)){
			this.vel[1]=Math.abs(this.vel[1]);
			//this.vel[1]+=(this.vel[1]<1?1:0);
			this.vel[1]+=.5;
		}else if( (this.pos[1]+this.vel[1])>=cH*tankScale){
			this.vel[1]=Math.abs(this.vel[1]);
			//this.vel[1]+=(this.vel[1]<1?1:0);
			this.vel[1]+=.5;
			this.vel[1]*=-1;
		}
		if(clamp) this.clampVel();
	}
	Point.prototype.setPos=function(poser){
		this.pos=poser;
		this.trail.push(this.pos[0]);
		this.trail.push(this.pos[1]);
		if(this.trail.length>this.tlen){
			this.trail=this.trail.slice(2,this.trail.length);
		}
	}
	Point.prototype.setVel=function(veler, clamp=0){
		this.vel[0]=veler[0];
		this.vel[1]=veler[1];
		if(clamp) this.clampVel();
	}
	Point.prototype.clampVel=function(addWeight=0){
		var tmpVel=[...this.vel];
		 // Wow.... I mean.. yeah, it works... but wow
		 // Spoke too soon?
		/*var scaler=(tmpVel[0]**2+tmpVel[1]**2)**.5;
		scaler=scaler>this.velMagCap ? this.velMagCap/scaler : 1;
		tmpVel[0]*=scaler;
		tmpVel[1]*=scaler; 
		*/
		//console.log( " || "+tmpVel[0]+" -- "+tmpVel[1]+" -- "+ this.velMagCap);
		//
		var abs=(e)=>Math.abs(e);
		
		let maxv=abs(tmpVel[0])+abs(tmpVel[1]);
		tmpVel[0]=tmpVel[0]/maxv*this.velMagCap;
		tmpVel[1]=tmpVel[1]/maxv*this.velMagCap;
		//console.log( "    "+tmpVel[0]+" -- "+tmpVel[1]);
		
		this.vel=tmpVel;
	}
	Point.prototype.bounce=function(val){
		if(val==0){
			this.bounce=0;
		}else{
			return this.bounce;
		}
	}
	Point.prototype.trailUpdate=function(){
		this.trail.push(this.pos[0]);
		this.trail.push(this.pos[1]);
		if(this.trail.length>this.tlen){
			this.trail=this.trail.slice(2,this.trail.length);
		}
	}
	function reapParticles(mod){
		var kill=0;
		var hit=0;
		var rebuild=new Array();
		for(var x=(points.length-1)-runner%mod; x>=0; x-=mod){
			kill=points[x].kill;
			if(kill==1){
				delete points.splice(x,1);
				//rebuild.push(points[x]);
			}//else{
			//	delete points.splice(x,1);
			//}
		}
		//points=rebuild;
		if(newtonFields.length>0){
			rebuild=new Array();
			for(var x=0; x<newtonFields.length; ++x){
				kill=newtonFields[x].kill;
				if(kill==0){
					rebuild.push(newtonFields[x]);
				}else{
					delete newtonFields[x];
				}
			}
			newtonFields=rebuild;
		}
	}
	function collisionParticles(){
		for(var x=0;x<points.length;++x){
			if(points[x].bounce==1 && points[x].core==1 && points[x].age>10){
				newPoints([points[x].pos[0],points[x].pos[1]],5,.5,[1,2],0);
			}
		}
	}
	function newPoints(pos, count,alpha, age, spark){
		var tmp,len;
		var rage=0;
		var curVel;
		var prevVel=[0,0];
		for(var c=0;c<count;++c){
			curTime+=c+1;
			if(spark){
				len=Math.sin(runner*23.24+23+curTime+points.length)*2+6;
			}else{
				len=Math.sin(runner*23.24+23+curTime+points.length)*4+9;
			}
			color=[ Math.sin(len*23.24+23+curTime+points.length+len)*10+35, Math.sin(len*23.24+curTime+points.length+len)*10+45, Math.sin(len*23.24+23+curTime+points.length+len)*15+80];
			rage=Math.floor(Math.sin(len*125.9757+curTime+c+points.length+345)*age[0]+age[1]);
			curVel=[Math.sin((c+1)*2320.63+curTime+343.24+len+prevVel[0]*234.342)*10,Math.cos((c+1)*6322.530+curTime+134+len+prevVel[1]*9534.23)*10];
			//curVel=[Math.sin((c+1))*10,Math.cos((c+1))*10];
			tmp=new Point(points.length,[ pos[0]+Math.sin(c), pos[1]+Math.sin(c) ],[],Math.floor(len),curVel,rage,color,alpha+Math.sin(c)*.2,1,spark);
			//tmp=new Point(points.length,[points[x].trail[0],points[x].trail[1]],[],Math.floor(len),[Math.sin(c*230+3434+len)*10,Math.sin(c*630+134+len)*10],rage,color,1);
			prevVel=[...curVel];
			points.push(tmp);
		}
	}

	function pointBooster(useForce=0, clampForce, usePointWeight=0, useMousePerc=0, addCustom=[0,0],useMousePercCustom=1, pushOutForceMult=0){
		for(var x=0;x<points.length;++x){
			if(!pause){
				var mPerc=points[x].mousePerc*2.5;
				mPerc=(mPerc*useMousePerc);
				var mPercCustom= (mPerc* (1-useMousePercCustom) );// +  ( useMousePercCustom);
				
				var pWeightPerc= ((1-useMousePercCustom) ) +  ( ( points[x].weight*.7+.3) *useMousePercCustom);
				useForce*=pWeightPerc;
				useMousePerc*=pWeightPerc;
				useMousePercCustom*=pWeightPerc;
				
				var pofMult=[ mouseX-points[x].pos[0], mouseY-points[x].pos[1] ];
				addCustom=[ addCustom[0]*pWeightPerc + pofMult[0]*(1-pWeightPerc), addCustom[1]*pWeightPerc + pofMult[1]*(1-pWeightPerc) ]; 
				
				points[x].addForce( [(points[x].vel[0]*useForce)*mPerc + addCustom[0]*mPercCustom, (points[x].vel[1]*useForce)*mPerc + addCustom[1]*mPercCustom], clampForce );
			}
		}
	}


function genPoint(e){
	
	var len,alpha,color;
	if(mButton==3){
		mouseAttract=0;	
	}else if(mButton==2 || touchTwoFinger==1){ // New Newton
			len=0;
			color=[0,0,0];
			alpha=.6;
			tmp=new Point(points.length,[mouseX,mouseY],[],len,[Math.sin(curTime+points.length)*9,Math.cos(curTime+points.length)*9],90,color,alpha,1,2);
			var sizeRand=Math.random(points.length)*10+20;
			tmp.size=sizeRand;
			tmp.origSize=sizeRand;
			tmp.weight=tmp.weight*sizeRand/30*.9+.1;
			points.push(tmp);
			newtonFields.push(tmp);
	}else{
		if(mouseAttract<2){
			if(points.length%10==0){
				len=Math.sin(runner*23.24+curTime+23+points.length)*4+9;
			}else{
				len=Math.sin(runner*23.24+curTime+23+points.length)*2+5;
			}
			if(points.length%4==0){
				alpha=Math.sin(points.length*234.353)*.1+.35;
				color=[ Math.sin(len*223.24+curTime+23+points.length+len)*10+20, Math.sin(len*213.24+23+curTime+points.length+len)*15+35, Math.cos(len*233.24+23+curTime+points.length+len)*30+95];
			}else{
				alpha=Math.min(1,Math.sin(points.length*234.353)*.3+.95);
				color=[ Math.sin(len*2633.24+23+curTime+points.length+len)*10+20, Math.sin(len*243.24+23+curTime+points.length+len)*20+45, Math.cos(len*235.24+23+curTime+points.length+len)*35+150];
			}
			var tmp=new Point(points.length,[mouseX,mouseY],[],Math.floor(len),[Math.sin(points.length*230+curTime+3434+len)*10,Math.cos(points.length*630+curTime+134+len)*10],0,color,alpha,1,0);
			points.push(tmp);
			tmp=new Point(points.length,[mouseX,mouseY],[],Math.floor(len),[Math.sin(points.length*430+curTime+434+len)*10,Math.cos(points.length*30+curTime+2134+len)*10],0,color,alpha,1,0);
			points.push(tmp);
			if(points.length==0){
				runCanvas("markerCanvas",0,1);
			}
			newPoints([mouseX,mouseY],mobile?7:30,.5,[2,5],1);
			//pause=1;
			mouseAttract=0;	
		}else{
			mouseAttract=0;	
		}
	}
}
function updateTime(){
	curTime=new Date().getTime();
	curTime=curTime*.1;
}
function runCanvas(canvas,ittr,gen){
	runner+=1;
	docCanvas=document.getElementById(canvas);
	draw=docCanvas.getContext('2d');
	draw.clearRect(0,0,sW,sH);
	if(!pause) updateTime();
	touchDown&&(touchDown++);

	var pnts=new Array;
	var tmpPos,f;
	var scoreAdd=0;
	for(var x=0;x<points.length;++x){
		if(!pause){
			points[x].run();
		
			if(points[x].newton == 0){
				f=[Math.sin((x+1)*234+35+points[x].pos[0]+points[x].age),Math.sin((1+x)*1023+1325+points[x].pos[1]+points[x].age)];
			}else{
				f=[0,0];
			}
			points[x].addForce(f);
			tmpPos=[points[x].pos[0],points[x].pos[1]];
			pnts.push(points[x].trail[0]); // THIS SHOULDN"T BE NEEDED, UPDATING TRAIN ON POINT, CHECK THIS
			//pnts.push(color[1]);
		}
		var pointColor;
		if(points[x].spark==0){
			pointColor=[Math.min(255,points[x].color[0]+points[x].color[0]*points[x].mousePerc), 
						Math.min(255,points[x].color[1]+points[x].color[1]*points[x].mousePerc), 
						Math.min(255,points[x].color[2]+points[x].color[2]*points[x].mousePerc) ];
		}/*else{
			let cMult=Math.min(1, points[x].alpha+(points[x].mousePerc/2));
			pointColor=[points[x].color[0]*cMult, points[x].color[1]*cMult, points[x].color[2]*cMult];
		}*/
			let cMult=Math.min(1, points[x].alpha+(points[x].mousePerc));
			pointColor=[points[x].color[0]*cMult, points[x].color[1]*cMult, points[x].color[2]*cMult];
		pColor=[]
		//drawLine(points[x].trail,2,pointColor,this.alpha,0,canvas,[-1]);
		var size=1;//5*(points[x].mousePerc+(1-Math.min(1,(this.mouseDist+this.pullDist/5)/(this.pullDist*6)+.1))+1 );
		var trailPos=points[x].trail;
		var sl;
		
		var alpha=Math.min(1, points[x].alpha+(points[x].mousePerc*2));
		if(points[x].spark!=0){
			alpha=alpha*points[x].lifePerc;//+Math.max(0,-.5+alpha/3);
		}
		var compers=['lighter', 'overlay','lighter', 'screen','lighter','overlay'];
		var comp=0;//compers[points[x].id%compers.length];
		var normSpeed=(points[x].speed/120+1);
		
		if(points[x].mousePerc>0 && mouseAttract!=3){
			scoreAdd+=parseInt(points[x].mousePerc*2);
		}
		var thickness=5.5*points[x].mousePerc * normSpeed + points[x].thickness*points[x].mousePerc*3+1. + markerThicknessOffset;
		drawGeo(points[x].trail,3,size,pointColor,alpha,1,thickness,0,canvas,comp);

		/*if(points[x].core==1 && 0){
			draw.beginPath();
			if(!mobile) draw.globalCompositeOperation=comp;
			draw.fillStyle=rgbToHex(pointColor);
			draw.globalAlpha=points[x].alpha;
			var scaler=(points[x].size+points[x].mousePerc)*normSpeed;
			draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
			draw.fill();
			if(points[x].size>3  && !mobile){
				draw.beginPath();
				
				if(!mobile) draw.globalCompositeOperation=comp;
				draw.fillStyle=rgbToHex(pointColor);
				draw.globalAlpha=.35;
				scaler=points[x].size+points[x].mousePerc;
				scaler=scaler*1.3;
				draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
				draw.fill();
				if(points[x].size>6){
					draw.beginPath();
					
					if(!mobile) draw.globalCompositeOperation=comp;
					draw.fillStyle=rgbToHex(pointColor);
					draw.globalAlpha=.12;
					scaler=points[x].size+points[x].mousePerc;
					scaler=scaler*1.6;
					draw.arc(tmpPos[0],tmpPos[1],scaler,0,Math.PI*2);
					draw.fill();
				}
			}
		}*/
	}
	if(tankScale!=1){
		let lw=3;
		draw.beginPath();
		draw.lineWidth=lw;
		draw.strokeStyle="#050f15";
		let tankCurScale=tankScale*.5;
		draw.rect(cW*(1-tankScale)-lw, cH*(1-tankScale)-lw, cW-cW*(1-tankScale)*2, cH-cH*(1-tankScale)*2-lw);
		draw.stroke();
	}
	// I should look to see if there is a better way to do this.
	// Triggering reap at the moment of kill==1
	//
	// Naw, append killed `id` to reapArray[particleArray][id]
	// Then check'n'pop
	// I like reap state incase of mass overrides in the future
	reapParticles(3); // Checks every n points when value is pointNum%n == time%n for taking away the dead
	//collisionParticles();
	//$('#score_val').html(parseInt($('#score_val').html())+scoreAdd);

/*
	if(pause==0 && points.length>0){
		setTimeout(function(){
			runCanvas(canvas,ittr,gen);
		},20);
	}
	*/

}

function newtonSpawn(gen){
	/*
	if(gen == 0){
		cur=0;//new Point;
	}else{
		cur=newtonFields[newtonFields.length-1];
	}
	gen+=1;
	if(mButton==2){ // Middle mouse click
		setTimeout(function(){
			newtonSpawn(gen);
		},30);
	}
	*/
}
function newtonRelease(){
	if(mButton == 2 || touchTwoFinger==1){
		mButton=0;
		newtonFields[newtonFields.length-1].grow=0;
	}
}

function introCardPrep(){
	document.getElementById('intro_pause').innerHTML=mobile?"<span class='introBolds'>Double Tap</span>":"Hit <span class='introBolds'>Space</span>";
	document.getElementById('intro_pull').innerText=mobile?"Tap+Drag":"Left Click";
	document.getElementById('intro_newton').innerText=mobile?"Two Finger Tap":"Middle Click";
	document.getElementById('intro_pullAll').innerText=mobile?"Tap+Hold":"Right Click";
	document.getElementById('intro_start').innerText=mobile?"Tap":"Click";
}

function introCardAnim(vis=1){
	var introCards=document.getElementById('introCards');
	var neurousTitle=document.getElementById('neurousTitle');
	var wSize=introCards.offsetWidth;
	if(wSize>sW){
		var introInner=document.getElementById('introCardsInner');
		introInner.classList.add("mobile");
		introCardsOrient=1;
		neurousTitle.style.maxWidth=sH;
	}else{
		neurousTitle.style.maxWidth=sW;
	}
	introCardPrep();
	introCards.style.visibility='visible';	
	introCards.style.transition=' all 1s ease-in';	
	document.getElementById('markerCanvas').focus();
}
