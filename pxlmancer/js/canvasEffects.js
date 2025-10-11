/*
// http://learningthreejs.com/blog/2011/09/03/screenshot-in-javascript/
var renderer   = new THREE.WebGLRenderer({
  preserveDrawingBuffer   : true   // required to support .toDataURL()
});

var dataUrl = renderer.domElement.toDataURL("image/png");
*/




function smudgeAway(input,output){
	fader=input.getImageData(0,0,sW,sH);
	pix = fader.data;
	var px,py,mather ;
	var checker,rCalc,gCalc,bCalc,aCalc,stageX,stageY,mather,distCheck;
	var distCheck=4+4*(Math.floor(runner/55)*55)%2+(dragTotal%touchChecker);
	var maxDist=Math.sqrt((sW/2)*(sW/2)+(sH/2)*(sH/2));
	var percer=$("#sl"+diaVal+"_filterPercent_val").val();
	var startPix=sW*4*(parseInt(refreshWindow[1])-2);
	var endPix=(sW*4*(parseInt(refreshWindow[3])+2));
	for (var i=startPix; i<endPix; i+=distCheck) {
		if((i/4)%sW>parseInt(refreshWindow[0])-2 && (i/4)%sW<parseInt(refreshWindow[2])+1){
			if(pix[i+3]>0){
				px=(i/4)%sW;
				py=Math.floor((i/4)/sW);
				mather=Math.abs((Math.min(1,(sW/2-px)/(sW/2) * (sH/2-py)/(sH/2))));
				if(runner%3==0){
					rCalc=Math.min(255,(pix[i+sW*8+4]+pix[i]+pix[i+sW*4-4])/2.75);
					gCalc=Math.min(255,(pix[i+sW*8+4+1]+pix[i+1]+pix[i+sW*4-4+1])/2.75);
					bCalc=Math.min(255,(pix[i+sW*8+4+2]+pix[i+2]+pix[i+sW*4-4+2])/2.75);
					aCalc=(pix[i-sW*4+4+3]+pix[i+sW*4+3]+pix[i+sW*4-4+3])/3;
				}else if(runner%3==1){
					rCalc=Math.min(255,(pix[i+sW*4-4]+pix[i]+pix[i+sW*4+4])/2.75);
					gCalc=Math.min(255,(pix[i+sW*4-4+1]+pix[i+1]+pix[i+sW*4+4+1])/2.75);
					bCalc=Math.min(255,(pix[i+sW*4-4+2]+pix[i+2]+pix[i+sW*4+4+2])/2.75);
					aCalc=(pix[i-sW*4-4+3]+pix[i+sW*8+3]+pix[i+sW*4+4+3])/3;
				}else{
					rCalc=Math.min(255,(pix[i+sW*4]+pix[i+sW*8]+pix[i+sW*4])/2.75);
					gCalc=Math.min(255,(pix[i+sW*4+1]+pix[i+sW*8+1]+pix[i+sW*4+1])/2.75);
					bCalc=Math.min(255,(pix[i+sW*4+2]+pix[i+sW*8+2]+pix[i+sW*4+2])/2.75);
					aCalc=(pix[i-sW*4+3]+pix[i+sW*16+3]+pix[i+sW*4+3])/3;
				}

				aCalc=(aCalc*(1-bgFade));
				
				//Blend percentage
					pix[i]=rCalc*percer+pix[i]*(1-percer);
					pix[i+1]=gCalc*percer+pix[i+1]*(1-percer);
					pix[i+2]=bCalc*percer+pix[i+2]*(1-percer);
					pix[i+3]=aCalc*percer+pix[i+3]*(1-percer);
				
			}
		}
	}
	output.putImageData(fader, 0, 0);
}

function eatAway(input,output){
	fader=input.getImageData(0,0,sW,sH);
	pix = fader.data;
	faderPut=input.getImageData(0,0,sW,sH);
	pixPut = faderPut.data;
	var sludge=0;
	var hit=1;
	var checker,aCalc,distCheck;
					if(blender==0){
	distCheck=4+4*((dragTotal%touchChecker));
					}else{
	distCheck=4+4*Math.abs((dragTotal-Math.floor(runner/17)*17)%2+(dragTotal%touchChecker));
	distCheck=4+4*Math.abs((dragTotal%touchChecker));
					}
	var threshold=50;
	var startPix=sW*4*(parseInt(refreshWindow[1])-2);
	var endPix=(sW*4*(parseInt(refreshWindow[3])+2));
	var pixCheck=new Array();
	var totalAlpha=0;
	var percer=$("#sl"+diaVal+"_filterPercent_val").val();
	for (var i=startPix; i<endPix; i+=distCheck) {
		if((i/4)%sW>parseInt(refreshWindow[0])-2 && (i/4)%sW<parseInt(refreshWindow[2])+1){
			if(pix[i+3]>0){
				pixCheck=[i+3+distCheck,i+3-distCheck,i+3-sW*distCheck,i+3+sW*distCheck,i+3+distCheck+4,i+3-distCheck+4,i+3-sW*distCheck+4,i+3+sW*distCheck+4,i+3+distCheck-4,i+3-distCheck-4,i+3-sW*distCheck-4,i+3+sW*distCheck-4];
				sludge=pix[i+3];
				hit=1;
				checker=pix[i+3+distCheck];
				for(var c=0; c<pixCheck.length;c++){
					checker=pix[pixCheck[c]];
					if(checker<threshold){
						if(blender==0){
							sludge=(checker);
							c=pixCheck.length;
						}else{
							sludge+=(checker);
							hit+=1;
						}
					}
					totalAlpha+=checker;
				}
				if(blender==0){
					aCalc=Math.max(0,	sludge);
				}else{
					//pixPut[i+3]=Math.max(0,(sludge)/hit-bgFade*1);
					aCalc=Math.max(0,(sludge)/hit)*(1-(hit/(pixCheck.length+1)));//-bgFade*2);
				}
			
				//Blend percentage
				//	pixPut[i]=rCalc*percer+pixPut[i]*(1-percer);
				//	pixPut[i+1]=gCalc*percer+pixPut[i+1]*(1-percer);
				//	pixPut[i+2]=bCalc*percer+pixPut[i+2]*(1-percer);
					pixPut[i+3]=aCalc*percer+pixPut[i+3]*(1-percer);
			}
		}
	}
	output.putImageData(faderPut, 0, 0);
}
function HueAttack(input,output){
	fader=input.getImageData(0,0,sW,sH);
	pix = fader.data;
	faderPut=input.getImageData(0,0,sW,sH);
	pixPut = faderPut.data;
	var sludge=0;
	var hit=1;
	var px,py,mather ;
	var checker,rCalc,gCalc,bCalc,aCalc,oR,oG,oB,oA,ostageX,stageY,mather,distCheck;
	if(blender==0){
		distCheck=4+4*(dragTotal%touchChecker);
	}else if(blender==1){
		distCheck=4+4*Math.abs((Math.floor(runner/10)*10)%2+(dragTotal%touchChecker));	
	}else{
		distCheck=4+4*Math.abs((Math.floor(runner/10)*10)%2+(dragTotal%touchChecker));	
	}
	var threshold=50;
	var startPix=sW*4*(parseInt(refreshWindow[1])-2);
	var endPix=(sW*4*(parseInt(refreshWindow[3])+2));
	var pixCheck=new Array();
	var clickSeed=(Math.sin(clickCount)*10)*536;
	var percer=$("#sl"+diaVal+"_filterPercent_val").val();
	for (var i=startPix; i<endPix; i+=distCheck) {
		if((i/4)%sW>parseInt(refreshWindow[0])-2 && (i/4)%sW<parseInt(refreshWindow[2])+1){
			if(pix[i+3]>0){
				pixCheck=[i+3+distCheck,i+3-distCheck,i+3-sW*distCheck,i+3+sW*distCheck,i+3+distCheck+4,i+3-distCheck+4,i+3-sW*distCheck+4,i+3+sW*distCheck+4,i+3+distCheck-4,i+3-distCheck-4,i+3-sW*distCheck-4,i+3+sW*distCheck-4];
				oR=pix[i];
				rCalc=pix[i];
				oG=pix[i+1];
				gCalc=pix[i+1];
				oB=pix[i+2];
				bCalc=pix[i+2];
				oA=pix[i+3];
				stageX=((i/4)%sW);
				stageY=(Math.floor((i/4)/sW));
				
				if(blender==0){
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/700+(stageY+clickSeed)/850+Math.cos((stageY+clickSeed)/3000*(stageX+clickSeed)/600+runner/900)*30+Math.sin((stageX+clickSeed)/6500-runner/600)*30+runner/9000))*255));
					pixPut[i]=Math.min(255,Math.max(0,(rCalc-mather)+bCalc*.9)%255);
					//pixPut[i]=Math.min(255,Math.max(0,(mather-rCalc)*.9+mather));
					mather=Math.max(0,((Math.cos((stageX+clickSeed)/800+(stageY+clickSeed)/940+100+Math.sin((stageY+clickSeed)/2500*(stageX+clickSeed)/800+runner/860)*30+Math.cos((stageX+clickSeed)/4500-runner/800)*30+runner/9000))*255));
					pixPut[i+1]=Math.min(255,Math.max(0,(gCalc-mather)+bCalc*.9)%255);
					//pixPut[i+1]=Math.min(255,Math.max(0,(mather-gCalc)*.9+mather));
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/750+(stageY+clickSeed)/720+45+Math.cos((stageY+clickSeed)/3500*(stageX+clickSeed)/700+runner/800)*30+Math.sin((stageX+clickSeed)/5500-runner/500)*30+runner/9000))*255));
					pixPut[i+2]=Math.min(255,Math.max(0,(bCalc-mather)+bCalc*.9)%255);
					//pixPut[i+2]=Math.min(255,Math.max(0,(mather-bCalc)*.9+mather));
					
					sludge=pix[i+3];
					hit=1;
					for(var c=0; c<pixCheck.length;c++){
						checker=pix[pixCheck[c]];
						if(checker<threshold){
								sludge=(checker);
								c=pixCheck.length;
						}
					}
					
					pixPut[i+3]=Math.max(0,sludge-bgFade*10);
				}else if(blender==1){
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/700+(stageY+clickSeed)/850+Math.cos((stageY+clickSeed)/3000*(stageX+clickSeed)/600+runner/900)*30+Math.sin((stageX+clickSeed)/6500-runner/600)*30+runner/9000))*255));
					pixPut[i]=Math.min(255,Math.max(0,(rCalc-mather)+bCalc*.9));
					//pixPut[i]=Math.min(255,Math.max(0,(mather-rCalc)*.9+mather));
					mather=Math.max(0,((Math.cos((stageX+clickSeed)/800+(stageY+clickSeed)/940+100+Math.sin((stageY+clickSeed)/2500*(stageX+clickSeed)/800+runner/860)*30+Math.cos((stageX+clickSeed)/4500-runner/800)*30+runner/9000))*255));
					pixPut[i+1]=Math.min(255,Math.max(0,(gCalc-mather)+bCalc*.9));
					//pixPut[i+1]=Math.min(255,Math.max(0,(mather-gCalc)*.9+mather));
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/750+(stageY+clickSeed)/720+45+Math.cos((stageY+clickSeed)/3500*(stageX+clickSeed)/700+runner/800)*30+Math.sin((stageX+clickSeed)/5500-runner/500)*30+runner/9000))*255));
					pixPut[i+2]=Math.min(255,Math.max(0,(bCalc-mather)+bCalc*.9));
					//pixPut[i+2]=Math.min(255,Math.max(0,(mather-bCalc)*.9+mather));
					
					sludge=pix[i+3];
					hit=1;
					for(var c=0; c<pixCheck.length;c++){
						checker=pix[pixCheck[c]];
						if(checker<threshold){
								sludge+=(checker);
								hit+=1;
						}
					}
					
					
					pixPut[i+3]=Math.max(0,(sludge)/hit-bgFade*10);
				}else{
					pixPut[i+3]=Math.max(0,(sludge)/hit-bgFade*10);
					px=(i/4)%sW;
					py=Math.floor((i/4)/sW);
					mather=Math.abs((Math.min(1,(sW/2-px)/(sW/2) * (sH/2-py)/(sH/2))));
					if(runner%3==0){
						pixPut[i]=Math.min(255,(pix[i+sW*8+4]+pix[i]+pix[i+sW*4-4])/2.75);
						pixPut[i+1]=Math.min(255,(pix[i+sW*8+4+1]+pix[i+1]+pix[i+sW*4-4+1])/2.75);
						pixPut[i+2]=Math.min(255,(pix[i+sW*8+4+2]+pix[i+2]+pix[i+sW*4-4+2])/2.75);
						aCalc=(pix[i-sW*4+4+3]+pix[i+sW*4+3]+pix[i+sW*4-4+3])/3;
						
					}else if(runner%3==1){
						pixPut[i]=Math.min(255,(pix[i+sW*4-4]+pix[i]+pix[i+sW*4+4])/2.75);
						pixPut[i+1]=Math.min(255,(pix[i+sW*4-4+1]+pix[i+1]+pix[i+sW*4+4+1])/2.75);
						pixPut[i+2]=Math.min(255,(pix[i+sW*4-4+2]+pix[i+2]+pix[i+sW*4+4+2])/2.75);
						aCalc=(pix[i-sW*4-4+3]+pix[i+sW*8+3]+pix[i+sW*4+4+3])/3;
					}else{
						pixPut[i]=Math.min(255,(pix[i+sW*4]+pix[i+sW*8]+pix[i+sW*4])/2.75);
						pixPut[i+1]=Math.min(255,(pix[i+sW*4+1]+pix[i+sW*8+1]+pix[i+sW*4+1])/2.75);
						pixPut[i+2]=Math.min(255,(pix[i+sW*4+2]+pix[i+sW*8+2]+pix[i+sW*4+2])/2.75);
						aCalc=(pix[i-sW*4+3]+pix[i+sW*16+3]+pix[i+sW*4+3])/3;
					}
					rCalc=pix[i];
					gCalc=pix[i+1];
					bCalc=pix[i+2];
					stageX=((i/4)%sW);
					stageY=(Math.floor((i/4)/sW));
						mather=Math.max(0,((Math.sin(stageX/700+stageY/850+Math.cos(stageY/3000*stageX/600+runner/900)*30+Math.sin(stageX/6500-runner/600)*30+runner/9000))*255));
						pixPut[i]=Math.min(255,Math.max(0,(rCalc-mather)+bCalc*.9)%255);
						//pixPut[i]=Math.min(255,Math.max(0,(mather-rCalc)*.9+mather));
						mather=Math.max(0,((Math.cos(stageX/800+stageY/940+100+Math.sin(stageY/2500*stageX/800+runner/860)*30+Math.cos(stageX/4500-runner/800)*30+runner/8800))*255));
						pixPut[i+1]=Math.min(255,Math.max(0,(gCalc-mather)+bCalc*.9)%255);
						//pixPut[i+1]=Math.min(255,Math.max(0,(mather-gCalc)*.9+mather));
						mather=Math.max(0,((Math.sin(stageX/750+stageY/720+45+Math.cos(stageY/3500*stageX/700+runner/800)*30+Math.sin(stageX/5500-runner/500)*30+runner/9300))*255));
						pixPut[i+2]=Math.min(255,Math.max(0,(bCalc-mather)+bCalc*.9)%255);
						//pixPut[i+2]=Math.min(255,Math.max(0,(mather-bCalc)*.9+mather));
						mather=Math.max(0,((Math.sin(stageX/700+stageY/850+(Math.cos(stageY/3000*stageX/600+runner/900)+1)*30+(Math.sin(stageX/6500-runner/60)+1)*30+runner/9000))*255));	
						pixPut[i+3]=Math.max(0,aCalc*(1-bgFade/2))*Math.max(.1,Math.min(1,(((mather/255)*.5+.5))*5));
					//pixPut[i+3]=(aCalc*(1-bgFade));
				}
				
				
				//Blend percentage
					pix[i]=pix[i]*percer+oR*(1-percer);
					pix[i+1]=pix[i+1]*percer+oG*(1-percer);
					pix[i+2]=pix[i+2]*percer+oB*(1-percer);
					pix[i+3]=pix[i+3]*percer+oA*(1-percer);

			}
		}
	}
	output.putImageData(faderPut, 0, 0);
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





/*
 
 
 
// Base Vertex Shader 
<script type="x-shader/x-vertex" id="bgGlowVert">
	varying vec2 vUv;
	void main(){
		vUv=uv;
		vec4 modelViewPosition=modelMatrix * vec4(position, 1.0);
		gl_Position = modelViewPosition;
	}
</script>
 


// Fragment Shader --
function smudgeAway(input,output){
	fader=input.getImageData(0,0,sW,sH);
	pix = fader.data;
	var px,py,mather ;
	var checker,rCalc,gCalc,bCalc,aCalc,stageX,stageY,mather,distCheck;
	var distCheck=4+4*(Math.floor(runner/55)*55)%2+(dragTotal%touchChecker);
	var maxDist=Math.sqrt((sW/2)*(sW/2)+(sH/2)*(sH/2));
	var percer=$("#sl"+diaVal+"_filterPercent_val").val();
	var startPix=sW*4*(parseInt(refreshWindow[1])-2);
	var endPix=(sW*4*(parseInt(refreshWindow[3])+2));
	for (var i=startPix; i<endPix; i+=distCheck) {
		if((i/4)%sW>parseInt(refreshWindow[0])-2 && (i/4)%sW<parseInt(refreshWindow[2])+1){
			if(pix[i+3]>0){
				px=(i/4)%sW;
				py=Math.floor((i/4)/sW);
				mather=Math.abs((Math.min(1,(sW/2-px)/(sW/2) * (sH/2-py)/(sH/2))));
				if(runner%3==0){
					rCalc=Math.min(255,(pix[i+sW*8+4]+pix[i]+pix[i+sW*4-4])/2.75);
					gCalc=Math.min(255,(pix[i+sW*8+4+1]+pix[i+1]+pix[i+sW*4-4+1])/2.75);
					bCalc=Math.min(255,(pix[i+sW*8+4+2]+pix[i+2]+pix[i+sW*4-4+2])/2.75);
					aCalc=(pix[i-sW*4+4+3]+pix[i+sW*4+3]+pix[i+sW*4-4+3])/3;
				}else if(runner%3==1){
					rCalc=Math.min(255,(pix[i+sW*4-4]+pix[i]+pix[i+sW*4+4])/2.75);
					gCalc=Math.min(255,(pix[i+sW*4-4+1]+pix[i+1]+pix[i+sW*4+4+1])/2.75);
					bCalc=Math.min(255,(pix[i+sW*4-4+2]+pix[i+2]+pix[i+sW*4+4+2])/2.75);
					aCalc=(pix[i-sW*4-4+3]+pix[i+sW*8+3]+pix[i+sW*4+4+3])/3;
				}else{
					rCalc=Math.min(255,(pix[i+sW*4]+pix[i+sW*8]+pix[i+sW*4])/2.75);
					gCalc=Math.min(255,(pix[i+sW*4+1]+pix[i+sW*8+1]+pix[i+sW*4+1])/2.75);
					bCalc=Math.min(255,(pix[i+sW*4+2]+pix[i+sW*8+2]+pix[i+sW*4+2])/2.75);
					aCalc=(pix[i-sW*4+3]+pix[i+sW*16+3]+pix[i+sW*4+3])/3;
				}

				aCalc=(aCalc*(1-bgFade));
				
				//Blend percentage
					pix[i]=rCalc*percer+pix[i]*(1-percer);
					pix[i+1]=gCalc*percer+pix[i+1]*(1-percer);
					pix[i+2]=bCalc*percer+pix[i+2]*(1-percer);
					pix[i+3]=aCalc*percer+pix[i+3]*(1-percer);
				
			}
		}
	}
	output.putImageData(fader, 0, 0);
}

function eatAway(input,output){
	fader=input.getImageData(0,0,sW,sH);
	pix = fader.data;
	faderPut=input.getImageData(0,0,sW,sH);
	pixPut = faderPut.data;
	var sludge=0;
	var hit=1;
	var checker,aCalc,distCheck;
					if(blender==0){
	distCheck=4+4*((dragTotal%touchChecker));
					}else{
	distCheck=4+4*Math.abs((dragTotal-Math.floor(runner/17)*17)%2+(dragTotal%touchChecker));
	distCheck=4+4*Math.abs((dragTotal%touchChecker));
					}
	var threshold=50;
	var startPix=sW*4*(parseInt(refreshWindow[1])-2);
	var endPix=(sW*4*(parseInt(refreshWindow[3])+2));
	var pixCheck=new Array();
	var totalAlpha=0;
	var percer=$("#sl"+diaVal+"_filterPercent_val").val();
	for (var i=startPix; i<endPix; i+=distCheck) {
		if((i/4)%sW>parseInt(refreshWindow[0])-2 && (i/4)%sW<parseInt(refreshWindow[2])+1){
			if(pix[i+3]>0){
				pixCheck=[i+3+distCheck,i+3-distCheck,i+3-sW*distCheck,i+3+sW*distCheck,i+3+distCheck+4,i+3-distCheck+4,i+3-sW*distCheck+4,i+3+sW*distCheck+4,i+3+distCheck-4,i+3-distCheck-4,i+3-sW*distCheck-4,i+3+sW*distCheck-4];
				sludge=pix[i+3];
				hit=1;
				checker=pix[i+3+distCheck];
				for(var c=0; c<pixCheck.length;c++){
					checker=pix[pixCheck[c]];
					if(checker<threshold){
						if(blender==0){
							sludge=(checker);
							c=pixCheck.length;
						}else{
							sludge+=(checker);
							hit+=1;
						}
					}
					totalAlpha+=checker;
				}
				if(blender==0){
					aCalc=Math.max(0,	sludge);
				}else{
					//pixPut[i+3]=Math.max(0,(sludge)/hit-bgFade*1);
					aCalc=Math.max(0,(sludge)/hit)*(1-(hit/(pixCheck.length+1)));//-bgFade*2);
				}
			
				//Blend percentage
				//	pixPut[i]=rCalc*percer+pixPut[i]*(1-percer);
				//	pixPut[i+1]=gCalc*percer+pixPut[i+1]*(1-percer);
				//	pixPut[i+2]=bCalc*percer+pixPut[i+2]*(1-percer);
					pixPut[i+3]=aCalc*percer+pixPut[i+3]*(1-percer);
			}
		}
	}
	output.putImageData(faderPut, 0, 0);
}
function HueAttack(input,output){
	fader=input.getImageData(0,0,sW,sH);
	pix = fader.data;
	faderPut=input.getImageData(0,0,sW,sH);
	pixPut = faderPut.data;
	var sludge=0;
	var hit=1;
	var px,py,mather ;
	var checker,rCalc,gCalc,bCalc,aCalc,oR,oG,oB,oA,ostageX,stageY,mather,distCheck;
	if(blender==0){
		distCheck=4+4*(dragTotal%touchChecker);
	}else if(blender==1){
		distCheck=4+4*Math.abs((Math.floor(runner/10)*10)%2+(dragTotal%touchChecker));	
	}else{
		distCheck=4+4*Math.abs((Math.floor(runner/10)*10)%2+(dragTotal%touchChecker));	
	}
	var threshold=50;
	var startPix=sW*4*(parseInt(refreshWindow[1])-2);
	var endPix=(sW*4*(parseInt(refreshWindow[3])+2));
	var pixCheck=new Array();
	var clickSeed=(Math.sin(clickCount)*10)*536;
	var percer=$("#sl"+diaVal+"_filterPercent_val").val();
	for (var i=startPix; i<endPix; i+=distCheck) {
		if((i/4)%sW>parseInt(refreshWindow[0])-2 && (i/4)%sW<parseInt(refreshWindow[2])+1){
			if(pix[i+3]>0){
				pixCheck=[i+3+distCheck,i+3-distCheck,i+3-sW*distCheck,i+3+sW*distCheck,i+3+distCheck+4,i+3-distCheck+4,i+3-sW*distCheck+4,i+3+sW*distCheck+4,i+3+distCheck-4,i+3-distCheck-4,i+3-sW*distCheck-4,i+3+sW*distCheck-4];
				oR=pix[i];
				rCalc=pix[i];
				oG=pix[i+1];
				gCalc=pix[i+1];
				oB=pix[i+2];
				bCalc=pix[i+2];
				oA=pix[i+3];
				stageX=((i/4)%sW);
				stageY=(Math.floor((i/4)/sW));
				
				if(blender==0){
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/700+(stageY+clickSeed)/850+Math.cos((stageY+clickSeed)/3000*(stageX+clickSeed)/600+runner/900)*30+Math.sin((stageX+clickSeed)/6500-runner/600)*30+runner/9000))*255));
					pixPut[i]=Math.min(255,Math.max(0,(rCalc-mather)+bCalc*.9)%255);
					//pixPut[i]=Math.min(255,Math.max(0,(mather-rCalc)*.9+mather));
					mather=Math.max(0,((Math.cos((stageX+clickSeed)/800+(stageY+clickSeed)/940+100+Math.sin((stageY+clickSeed)/2500*(stageX+clickSeed)/800+runner/860)*30+Math.cos((stageX+clickSeed)/4500-runner/800)*30+runner/9000))*255));
					pixPut[i+1]=Math.min(255,Math.max(0,(gCalc-mather)+bCalc*.9)%255);
					//pixPut[i+1]=Math.min(255,Math.max(0,(mather-gCalc)*.9+mather));
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/750+(stageY+clickSeed)/720+45+Math.cos((stageY+clickSeed)/3500*(stageX+clickSeed)/700+runner/800)*30+Math.sin((stageX+clickSeed)/5500-runner/500)*30+runner/9000))*255));
					pixPut[i+2]=Math.min(255,Math.max(0,(bCalc-mather)+bCalc*.9)%255);
					//pixPut[i+2]=Math.min(255,Math.max(0,(mather-bCalc)*.9+mather));
					
					sludge=pix[i+3];
					hit=1;
					for(var c=0; c<pixCheck.length;c++){
						checker=pix[pixCheck[c]];
						if(checker<threshold){
								sludge=(checker);
								c=pixCheck.length;
						}
					}
					
					pixPut[i+3]=Math.max(0,sludge-bgFade*10);
				}else if(blender==1){
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/700+(stageY+clickSeed)/850+Math.cos((stageY+clickSeed)/3000*(stageX+clickSeed)/600+runner/900)*30+Math.sin((stageX+clickSeed)/6500-runner/600)*30+runner/9000))*255));
					pixPut[i]=Math.min(255,Math.max(0,(rCalc-mather)+bCalc*.9));
					//pixPut[i]=Math.min(255,Math.max(0,(mather-rCalc)*.9+mather));
					mather=Math.max(0,((Math.cos((stageX+clickSeed)/800+(stageY+clickSeed)/940+100+Math.sin((stageY+clickSeed)/2500*(stageX+clickSeed)/800+runner/860)*30+Math.cos((stageX+clickSeed)/4500-runner/800)*30+runner/9000))*255));
					pixPut[i+1]=Math.min(255,Math.max(0,(gCalc-mather)+bCalc*.9));
					//pixPut[i+1]=Math.min(255,Math.max(0,(mather-gCalc)*.9+mather));
					mather=Math.max(0,((Math.sin((stageX+clickSeed)/750+(stageY+clickSeed)/720+45+Math.cos((stageY+clickSeed)/3500*(stageX+clickSeed)/700+runner/800)*30+Math.sin((stageX+clickSeed)/5500-runner/500)*30+runner/9000))*255));
					pixPut[i+2]=Math.min(255,Math.max(0,(bCalc-mather)+bCalc*.9));
					//pixPut[i+2]=Math.min(255,Math.max(0,(mather-bCalc)*.9+mather));
					
					sludge=pix[i+3];
					hit=1;
					for(var c=0; c<pixCheck.length;c++){
						checker=pix[pixCheck[c]];
						if(checker<threshold){
								sludge+=(checker);
								hit+=1;
						}
					}
					
					
					pixPut[i+3]=Math.max(0,(sludge)/hit-bgFade*10);
				}else{
					pixPut[i+3]=Math.max(0,(sludge)/hit-bgFade*10);
					px=(i/4)%sW;
					py=Math.floor((i/4)/sW);
					mather=Math.abs((Math.min(1,(sW/2-px)/(sW/2) * (sH/2-py)/(sH/2))));
					if(runner%3==0){
						pixPut[i]=Math.min(255,(pix[i+sW*8+4]+pix[i]+pix[i+sW*4-4])/2.75);
						pixPut[i+1]=Math.min(255,(pix[i+sW*8+4+1]+pix[i+1]+pix[i+sW*4-4+1])/2.75);
						pixPut[i+2]=Math.min(255,(pix[i+sW*8+4+2]+pix[i+2]+pix[i+sW*4-4+2])/2.75);
						aCalc=(pix[i-sW*4+4+3]+pix[i+sW*4+3]+pix[i+sW*4-4+3])/3;
						
					}else if(runner%3==1){
						pixPut[i]=Math.min(255,(pix[i+sW*4-4]+pix[i]+pix[i+sW*4+4])/2.75);
						pixPut[i+1]=Math.min(255,(pix[i+sW*4-4+1]+pix[i+1]+pix[i+sW*4+4+1])/2.75);
						pixPut[i+2]=Math.min(255,(pix[i+sW*4-4+2]+pix[i+2]+pix[i+sW*4+4+2])/2.75);
						aCalc=(pix[i-sW*4-4+3]+pix[i+sW*8+3]+pix[i+sW*4+4+3])/3;
					}else{
						pixPut[i]=Math.min(255,(pix[i+sW*4]+pix[i+sW*8]+pix[i+sW*4])/2.75);
						pixPut[i+1]=Math.min(255,(pix[i+sW*4+1]+pix[i+sW*8+1]+pix[i+sW*4+1])/2.75);
						pixPut[i+2]=Math.min(255,(pix[i+sW*4+2]+pix[i+sW*8+2]+pix[i+sW*4+2])/2.75);
						aCalc=(pix[i-sW*4+3]+pix[i+sW*16+3]+pix[i+sW*4+3])/3;
					}
					rCalc=pix[i];
					gCalc=pix[i+1];
					bCalc=pix[i+2];
					stageX=((i/4)%sW);
					stageY=(Math.floor((i/4)/sW));
						mather=Math.max(0,((Math.sin(stageX/700+stageY/850+Math.cos(stageY/3000*stageX/600+runner/900)*30+Math.sin(stageX/6500-runner/600)*30+runner/9000))*255));
						pixPut[i]=Math.min(255,Math.max(0,(rCalc-mather)+bCalc*.9)%255);
						//pixPut[i]=Math.min(255,Math.max(0,(mather-rCalc)*.9+mather));
						mather=Math.max(0,((Math.cos(stageX/800+stageY/940+100+Math.sin(stageY/2500*stageX/800+runner/860)*30+Math.cos(stageX/4500-runner/800)*30+runner/8800))*255));
						pixPut[i+1]=Math.min(255,Math.max(0,(gCalc-mather)+bCalc*.9)%255);
						//pixPut[i+1]=Math.min(255,Math.max(0,(mather-gCalc)*.9+mather));
						mather=Math.max(0,((Math.sin(stageX/750+stageY/720+45+Math.cos(stageY/3500*stageX/700+runner/800)*30+Math.sin(stageX/5500-runner/500)*30+runner/9300))*255));
						pixPut[i+2]=Math.min(255,Math.max(0,(bCalc-mather)+bCalc*.9)%255);
						//pixPut[i+2]=Math.min(255,Math.max(0,(mather-bCalc)*.9+mather));
						mather=Math.max(0,((Math.sin(stageX/700+stageY/850+(Math.cos(stageY/3000*stageX/600+runner/900)+1)*30+(Math.sin(stageX/6500-runner/60)+1)*30+runner/9000))*255));	
						pixPut[i+3]=Math.max(0,aCalc*(1-bgFade/2))*Math.max(.1,Math.min(1,(((mather/255)*.5+.5))*5));
					//pixPut[i+3]=(aCalc*(1-bgFade));
				}
				
				
				//Blend percentage
					pix[i]=pix[i]*percer+oR*(1-percer);
					pix[i+1]=pix[i+1]*percer+oG*(1-percer);
					pix[i+2]=pix[i+2]*percer+oB*(1-percer);
					pix[i+3]=pix[i+3]*percer+oA*(1-percer);

			}
		}
	}
	output.putImageData(faderPut, 0, 0);
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

 
 
 
 
 
*/
