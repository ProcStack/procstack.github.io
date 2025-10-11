// This file is a MESS
// This was has been legacy code I've been updating and patching as the site has been growing.
// So everything here is highly inefficient to say the least... Line 200~ to 675~ should only be 90-100 lines in total...
// I've made a better method of calculate flip in the drawGeo function; js/math.js -> drawGeo
// Plus this method only flips across axis.
// I'd like a percentage flip too, so the mouse follows you but out of phase (90,180,270 degrees), not just mirroring.
function doTouch(strokeCanvas,drawCanvas,pastCanvas,undoCanvas,sendToPast) {
	dragging=1;
	// Reset refresh window
	resetRefresh(0);
	var blurBrush=parseInt($("#sl"+diaVal+"_brushBlur_val").val());
	var toHex,tmpCn;
	var dragArray=new Array();
	var trailArray=new Array();
	var cW,cH;
	
	//Set brush type, since sweep currently doesn't work with trailing and some drawing methods, default to line-
	if(trail!=0 || toCenter!=1){
		brushDraw=0;
	}else{
		brushDraw=brushDrawSet;
	}
	
	if(pastCanvas==-1){
		cW=$("#"+strokeCanvas).width();
		cH=$("#"+strokeCanvas).height();
		startPos=[zoomMouseX,zoomMouseY];
	}else{
		if(brushStyle==0){
			tmpCn=drawCanvas;
			drawCanvas=strokeCanvas;
		}else{
			tmpCn=strokeCanvas;
			clearScreen(strokeCanvas);
		}
		if(dialogueOpen==0){
			cW=sW;
			cH=sH;
		}
		if(toCenter != $("#sl"+diaVal+"_count_val").val() && trail >= 2){ // ##
			toCenter=$("#sl"+diaVal+"_count_val").val();
			trailOptions();
		}
		if(currentOnly==1 && dragCount==0 && sendToPast==1 && brushStyle==0){
			movePast(drawCanvas,pastCanvas,1,"source-over",0);
			undoOption(0);
			clearScreen(drawCanvas);
			//refreshWindowStore=[sW,sH,0,0];
		}
		if(brushStyle>0 && dragCount==2){
			undoOption(1);
			refreshWindow=[sW,sH,0,0];
			refreshWindowTool=[sW,sH,0,0];
			////movePast(drawCanvas,undoCanvas,1,"source-over",0);
			//var pastCan=document.getElementById(drawCanvas);
			//var past=pastCan.getContext("2d");
			//var undoCan=document.getElementById(undoCanvas);
			//var undoDraw=undoCan.getContext("2d");
			//var undo=past.getImageData(0,0,sW,sH);
			//undoDraw.putImageData(undo,0,0);
		}
		if((clearDrawing==1) && dragCount==0 ){
			clearScreen(drawCanvas);
			clearScreen(tmpCn);
			clearScreen(pastCanvas);
			refreshWindow=[sW,sH,0,0];
			refreshWindowStore=[sW,sH,0,0];
		}
		if(brushStyle>0 && dragCount==0 ){
			refreshWindowTool=[sW,sH,0,0];
		}
		if(clearDrawing==2 && (dragCount%randClear)==0){
			refreshWindow=[sW,sH,0,0];
			refreshWindowStore=[sW,sH,0,0];
			randClear=Math.floor(Math.random(dragCount)*35)+25;
			if(dispStats==1){
				$("#randomClear").html(randClear);
			}
			clearScreen(drawCanvas);
			clearScreen(tmpCn);
			clearScreen(pastCanvas);
			dragPos[4] = dragPos[2];
			dragPos[5] = dragPos[3];
			refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],dragPos[2]-(mag+10+blurBrush),dragPos[4]-(mag+10+blurBrush)));
			refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],dragPos[3]-(mag+10+blurBrush),dragPos[5]-(mag+10+blurBrush)));
			refreshWindow[2]=Math.min(sW,Math.max(refreshWindow[2],dragPos[2]+(mag+10+blurBrush),dragPos[4]+(mag+10+blurBrush)));
			refreshWindow[3]=Math.min(sH,Math.max(refreshWindow[3],dragPos[3]+(mag+10+blurBrush),dragPos[5]+(mag+10+blurBrush)));
			
		}
	
		//clearScreen("curDraw");
		
		//Probably a better way to do this...
		//It's late, I'll look into this another day.
		var panX=$('#documentLayers').position().left;
		var panY=$('#documentLayers').position().top;
		
		//For when I get the mouse to canvas space function working a little better for doDraw
		//var mPos=toCanvasSpace(mouseX,mouseY);
		//zoomMouseX=mPos[0];
		//zoomMouseY=mPos[1];
		//offScreenDraw=mPos[2];
		
		//if(curScale !=1 || panX != 0 || panY != 0){
			var curPercX=zoomMouseX/sW;
			var curPercY=zoomMouseY/sH;
			var usX=sW*(curScale);
			var usY=sH*(curScale);
			var sPosX=(curPercX*(sW*curScale)-$('#documentLayers').position().left*((curScale)))/(curScale);
			var sPosY=(curPercY*(sH*curScale)-$('#documentLayers').position().top*((curScale)))/(curScale);
			zoomMouseX=((sPosX/usX)*sW);
			zoomMouseY=((sPosY/usY)*sH);
			if(tileUpdate==1){ // If tile editing, check for offscreen edits
				if(dragCount==0){
					if(zoomMouseX>sW || zoomMouseY>sH || zoomMouseX<0 || zoomMouseY<0){
						offScreenDraw=1;
					}else{
						offScreenDraw=0;
					}
				}
				if(offScreenDraw==1){
					if(zoomMouseX<=sW && zoomMouseY<=sH && zoomMouseX>0 && zoomMouseY>0){ // Prevent line from drawing accross canvas
						zoomMouseX=dragArray[2];
						zoomMouseY=dragArray[3];
					}else{
						if(zoomMouseX>sW){
							zoomMouseX=zoomMouseX-sW;
						}
						if(zoomMouseY>sH){
							zoomMouseY=zoomMouseY-sH;
						}
						if(zoomMouseX<0){
							zoomMouseX=parseFloat(sW)+zoomMouseX; //No clue why its reading sW as a string here
						}
						if(zoomMouseY<0){
							zoomMouseY=parseFloat(sH)+zoomMouseY; //No clue why its reading sH as a string here
						}
					}
				}
			}
		//}
		if(dragCount==0){
			clickCount+=1;
			startPos=[zoomMouseX,zoomMouseY]
			if(dispStats==1){
				$("#clickCount").html(clickCount);
			}
		}
	}
	
	dragPos[0] = zoomMouseX;
	dragPos[1] = zoomMouseY;
	var thrownX=zoomMouseX;
	var thrownY=zoomMouseY;
	var magCheck=0;
	if(dragCount==0){
		dragPos[2] = zoomMouseX;
		dragPos[3] = zoomMouseY;
		dragPos[4] = zoomMouseX;
		dragPos[5] = zoomMouseY;
		magCheck=1;
	}
	
	
	dragCount+=1;
	dragTotal+=1;
	//if(dragCount%dragUpdate == 0){
		var canvas=document.getElementById(strokeCanvas);
		var draw=canvas.getContext("2d");
		draw.lineJoin = lineQuality;
		draw.lineCap = lineQuality;
		if(dragCount==1 && undoCanvas!=-1){
			if(currentOnly==1){
				var pastCan=document.getElementById(pastCanvas);
				var past=pastCan.getContext("2d");
				var undoCan=document.getElementById(undoCanvas);
				var undoDraw=undoCan.getContext("2d");
				var undo=past.getImageData(0,0,sW,sH);
				undoDraw.putImageData(undo,0,0);
			}else{
				var undoCan=document.getElementById(undoCanvas);
				var undoDraw=undoCan.getContext("2d");
				var undo=draw.getImageData(0,0,sW,sH);
				undoDraw.putImageData(undo,0,0);
			}
		}
		if(dragCount>2){ // get rid of this for touch brush markings
			if(brushStyle==0){
				var color=getColor(dragTotal);
				R=color[0];
				G=color[1];
				B=color[2];
				A=color[3];
				hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
				color=getColor(dragTotal+1);
				toHex=rgbToHex(Math.floor(color[0]),Math.floor(color[1]),Math.floor(color[2]) );
			}else{
				R=40;
				G=120;
				B=255;
				hex=rgbToHex(Math.floor(R),Math.floor(G),Math.floor(B) );
				toHex=hex;
			}
			var magWidth=$("#sl"+diaVal+"_setWidth_val").val();
			if(brushDraw==0){
				if(dynMag==1){
					mag=Math.sqrt(Math.pow((dragPos[2]-dragPos[0]),2)+Math.pow((dragPos[3]-dragPos[1]),2));
					mag*=(1+magWidth/5);
					if(magCheck==0){
						mag=(mag+lastPreMag)/2;
						lastPreMag=mag;
					}else{
						lastPreMag=mag;
					}
					//mag=(((Math.sin( (Math.min(40,Math.max(1,(mag/9)))/15 )*.5+.5))*13)-5.5)*3 ;
					//mag=(1-(Math.cos( (Math.min(60,mag/9)/60*3.14159265 ) )*.5+.5))*40+1 ;
					mag=(Math.sin((Math.min(80,mag/11)/80)*3.14159265/2))*(80+magWidth/2)+magWidth/2;
					if(magCheck==0){
						mag=(mag+lastMag)/2;
						lastMag=mag;
					}else{
						lastMag=mag;
					}
					if(maxMag > mag){
						maxMag = mag;
						if(dispStats==1){
							$("#maxMag").html(maxMag);
						}
					}
				}else{
					mag=magWidth;
				}
			}else{
				mag=1;
			}
			var runx,runy,runpx,runpy,runppx,runppy,runmag;
			// Extend start and end positions just slightly
			var extMult=$("#sl"+diaVal+"_extend_val").val();
			if(brushDraw==2){
				extMult=extMult-.04;
			}
			dragPos[0]=Math.floor((dragPos[0]-dragPos[2])*extMult+dragPos[0]);
			dragPos[1]=Math.floor((dragPos[1]-dragPos[3])*extMult+dragPos[1]);
			var step=1/Math.min(10,blurBrush/2);
			if(blurBrush>0){
				if(dynMag==0){
					blurBrush=Math.max(Math.max(1,blurBrush/2),blurBrush*Math.min(1,(mag)/70));
				}
				if(brushDraw>=1){
					step=1;
				}
			}else{
				step=1;
			}
			
			//Running into cases, not always, where these values are read as strings
			//THE PAIIIINNNNN!!!!
			mag=parseFloat(mag);
			blurBrush=parseFloat(blurBrush);
			
			for(var x=0; x<touch.length;x++){
				if(x>0){
					zoomMouseX = touch[x].pageX;
					zoomMouseY = touch[x].pageY;
				}
				for(var ii=0;ii<toCenter;ii+=step){
					var i=Math.floor(ii);
					var curToCenter=(1-i/(parseFloat(toCenter)+2));
					runmag=mag*curToCenter;
					if(trail==3){
						runx=(dragPos[x*6+0]-startPos[0])*curToCenter+startPos[0];
						runy=(dragPos[x*6+1]-startPos[1])*curToCenter+startPos[1];
						runpx=(dragPos[x*6+2]-startPos[0])*curToCenter+startPos[0];
						runpy=(dragPos[x*6+3]-startPos[1])*curToCenter+startPos[1];
						runppx=(dragPos[x*6+4]-startPos[0])*curToCenter+startPos[0];
						runppy=(dragPos[x*6+5]-startPos[1])*curToCenter+startPos[1];
						startPos=[(startPos[0]*15+runppx)/16,(startPos[1]*15+runppy)/16];
					}else{
						runx=(dragPos[x*6+0]-cW/2)*curToCenter+cW/2;
						runy=(dragPos[x*6+1]-cH/2)*curToCenter+cH/2;
						runpx=(dragPos[x*6+2]-cW/2)*curToCenter+cW/2;
						runpy=(dragPos[x*6+3]-cH/2)*curToCenter+cH/2;
						runppx=(dragPos[x*6+4]-cW/2)*curToCenter+cW/2;
						runppy=(dragPos[x*6+5]-cH/2)*curToCenter+cH/2;
					}
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],runx-(mag+10+blurBrush),runpx+(mag+10+blurBrush),runppx+(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],runy-(mag+10+blurBrush),runpy-(mag+10+blurBrush),runppy-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],runx+(mag+10+blurBrush),runpx+(mag+10+blurBrush),runppx+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],runy+(mag+10+blurBrush),runpy-(mag+10+blurBrush),runppy-(mag+10+blurBrush)));
					}
					draw.globalAlpha= brushDraw==0 && spray!=4 ? 1 : 0; 
					draw.beginPath();
					draw.shadowBlur = blurBrush;
					draw.shadowColor = hex;
					if(spray==0){ // Line
			if(brushDraw>0){
						dragArray.push( (runppx+runpx)/2 );
						dragArray.push( (runppy+runpy)/2 );
						dragArray.push( runpx );
						dragArray.push( runpy );
						dragArray.push( (runx+runpx)/2 );
						dragArray.push( (runy+runpy)/2 );
					}
						/*if(dragCount<=3){  // For hitting initial target click
							draw.moveTo(runppx,runppy);
							draw.lineTo((runppx+runpx)/2,(runppy+runpy)/2);
							zoomMouseX=(runx*2+runpx)/3;
							zoomMouseY=(runy*2+runpy)/3;
						}else{
							draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
						}*/
							draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
							draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);

					}else if(spray==1){ // Spray
			if(brushDraw>0){
						dragArray.push( runppx );
						dragArray.push( runppy );
						dragArray.push( runppx );
						dragArray.push( runppy );
						dragArray.push( runx );
						dragArray.push( runy );
					}
						draw.moveTo(runppx,runppy);
						draw.lineTo(runx,runy);
					}else if(spray==2){ // Crawl
						thrownX=runx+(runppx-runx)*throwLength;
						thrownY=runy+(runppy-runy)*throwLength;
			if(brushDraw>0){
						dragArray.push( thrownX );
						dragArray.push( thrownY );
						dragArray.push( runpx );
						dragArray.push( runpy );
						dragArray.push( runx );
						dragArray.push( runy );
					}
						draw.moveTo(thrownX,thrownY);
						draw.quadraticCurveTo(thrownX,thrownY,runppx,runppy);
						draw.quadraticCurveTo(runpx,runpy, runx,runy);
					}else if(spray==3){ // Grab
						draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
						draw.quadraticCurveTo(runpx,runpy, runx,runy);
						thrownX=runx+(runx-runppx)*throwLength;
						thrownY=runy+(runy-runppy)*throwLength;
						draw.quadraticCurveTo(runx,runy,thrownX,thrownY);
			if(brushDraw>0){
						dragArray.push( runpx );
						dragArray.push( runpy );
						dragArray.push( runx );
						dragArray.push( runy );
						dragArray.push( thrownX );
						dragArray.push( thrownY );
				}
					}else{
						draw.moveTo(runppx,runppy);
						draw.lineTo(runpx,runpy);
						draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
						draw.lineTo((runx+runpx)/2,(runy+runpy)/2);
						draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
						draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
					}
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
					strokeColor=hex;
					draw.strokeStyle=strokeColor;
					draw.lineWidth=mag;
					if(dispStats==1){
						$("#dragMag").html(mag);
					}
						draw.stroke();
					if(dispStats==1){
						$("#dragColor").html(strokeColor);
					}
					if(mirror!=0){
	//mirror
						var mppx=(cW/2)+((cW/2)-runppx);
						var mppy=(cH/2)+((cH/2)-runppy);
						var mpx=(cW/2)+((cW/2)-runpx);
						var mpy=(cH/2)+((cH/2)-runpy);
						var mx=(cW/2)+((cW/2)-runx);
						var my=(cH/2)+((cH/2)-runy);
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],mx-(mag+10+blurBrush),mpx-(mag+10+blurBrush),mppx-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],my-(mag+10+blurBrush),mpy-(mag+10+blurBrush),mppy-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],mx+(mag+10+blurBrush),mpx+(mag+10+blurBrush),mppx+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],my+(mag+10+blurBrush),mpy+(mag+10+blurBrush),mppy+(mag+10+blurBrush)));


					}
	//X
						if(mirror==1 || mirror==3){
							draw.beginPath();
							//draw.shadowBlur = blurBrush;
							//draw.shadowColor = hex;
							if(spray==0){ // Line
			if(brushDraw>0){
						dragArray.push( (mppx+mpx)/2 );
						dragArray.push( (runppy+runpy)/2 );
						dragArray.push( mpx );
						dragArray.push( runpy );
						dragArray.push( (mx+mpx)/2 );
						dragArray.push( (runy+runpy)/2 );
					}
								draw.moveTo((mppx+mpx)/2,(runppy+runpy)/2);
								draw.quadraticCurveTo(mpx,runpy, (mx+mpx)/2,(runy+runpy)/2);
							}else if(spray==1){ // Spray
								draw.moveTo(mppx,runppy);
								draw.lineTo(mx,runy);
							}else if(spray==2){ // Crawl
								thrownX=mx+(mppx-mx)*throwLength;
								thrownY=runy+(runppy-runy)*throwLength;
								draw.moveTo(thrownX,thrownY);
								draw.quadraticCurveTo(thrownX,thrownY,mppx,runppy);
								draw.quadraticCurveTo(mpx,runpy, mx,runy);
							}else if(spray==3){ // Grab
								draw.moveTo((mppx+mpx)/2,(runppy+runpy)/2);
								draw.quadraticCurveTo(mpx,runpy, mx,runy);
								thrownX=mx+(mx-mppx)*throwLength;
								thrownY=runy+(runy-runppy)*throwLength;
								draw.quadraticCurveTo(mx,runy,thrownX,thrownY);
							}else{
								draw.moveTo(runppx,runppy);
								draw.quadraticCurveTo(runpx,runpy, runx,runy);
								draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
								draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
							}
							//draw.strokeStyle=strokeColor;
							//draw.lineWidth=mag;
							draw.stroke();
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
						}
	//Y
						if(mirror==2 || mirror==3){
							draw.beginPath();
							//draw.shadowBlur = blurBrush;
							//draw.shadowColor = hex;
							if(spray==0){ // Line
			if(brushDraw>0){
						dragArray.push( (runppx+runpx)/2 );
						dragArray.push( (mppy+mpy)/2 );
						dragArray.push( runpx );
						dragArray.push( mpy );
						dragArray.push( (runx+runpx)/2 );
						dragArray.push( (my+mpy)/2 );
					}
								draw.moveTo((runppx+runpx)/2,(mppy+mpy)/2);
								draw.quadraticCurveTo(runpx,mpy, (runx+runpx)/2,(my+mpy)/2);
							}else if(spray==1){ // Spray
								draw.moveTo(runppx,mppy);
								draw.lineTo(runx,my);
							}else if(spray==2){ // Crawl
								thrownX=runx+(runppx-runx)*throwLength;
								thrownY=my+(mppy-my)*throwLength;
								draw.moveTo(thrownX,thrownY);
								draw.quadraticCurveTo(thrownX,thrownY,runppx,mppy);
								draw.quadraticCurveTo(runpx,mpy, runx,my);
							}else if(spray==3){ // Grab
								draw.moveTo((runppx+runpx)/2,(mppy+mpy)/2);
								draw.quadraticCurveTo(runpx,mpy, runx,my);
								thrownX=runx+(runx-runppx)*throwLength;
								thrownY=my+(my-mppy)*throwLength;
								draw.quadraticCurveTo(runx,my,thrownX,thrownY);
							}else{
								draw.moveTo(runppx,runppy);
								draw.quadraticCurveTo(runpx,runpy, runx,runy);
								draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
								draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
							}
							//draw.strokeStyle=strokeColor;
							//draw.lineWidth=mag;
							draw.stroke();
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
						}
	//X&Y
						if(mirror==3 || mirror==4){
							draw.beginPath();
							//draw.shadowBlur = blurBrush;
							//draw.shadowColor = hex;
							if(spray==0){ // Line
			if(brushDraw>0){
						dragArray.push( (mppx+mpx)/2 );
						dragArray.push( (mppy+mpy)/2 );
						dragArray.push( mpx );
						dragArray.push( mpy );
						dragArray.push( (mx+mpx)/2 );
						dragArray.push( (my+mpy)/2 );
					}
								draw.moveTo((mppx+mpx)/2,(mppy+mpy)/2);
								draw.quadraticCurveTo(mpx,mpy, (mx+mpx)/2,(my+mpy)/2);
							}else if(spray==1){ // Spray
								draw.moveTo(mppx,mppy);
								draw.lineTo(mx,my);
							}else if(spray==2){ // Crawl
								thrownX=mx+(mppx-mx)*throwLength;
								thrownY=my+(mppy-my)*throwLength;
								draw.moveTo(thrownX,thrownY);
								draw.quadraticCurveTo(thrownX,thrownY,mppx,mppy);
								draw.quadraticCurveTo(mpx,mpy, mx,my);
							}else if(spray==3){ // Grab
								draw.moveTo((mppx+mpx)/2,(mppy+mpy)/2);
								draw.quadraticCurveTo(mpx,mpy, mx,my);
								thrownX=mx+(mx-mppx)*throwLength;
								thrownY=my+(my-mppy)*throwLength;
								draw.quadraticCurveTo(mx,my,thrownX,thrownY);
							}else{
								draw.moveTo(runppx,runppy);
								draw.quadraticCurveTo(runpx,runpy, runx,runy);
								draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
								draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
							}
							//draw.strokeStyle=strokeColor;
							//draw.lineWidth=mag;
							draw.stroke();
						}
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
					}

				}
				
				if((trail==1 || brushDraw==1) && spray!=4){
					if(dragCount==3){
						trailPos=[dragPos[x*6+0],dragPos[x*6+1],dragPos[x*6+2],dragPos[x*6+3],dragPos[x*6+4],dragPos[x*6+5]];

					}else{
						trailPos=[((trailPos[x*6+0]+trailPos[x*6+0]+dragPos[x*6+0])/3),((trailPos[x*6+1]+trailPos[x*6+1]+dragPos[x*6+1])/3),trailPos[x*6+0],trailPos[x*6+1],trailPos[x*6+2],trailPos[x*6+3]];

					}
					//trailPos[0]=Math.floor((trailPos[0]-trailPos[2])*extMult+trailPos[0]);
					//trailPos[1]=Math.floor((trailPos[1]-trailPos[3])*extMult+trailPos[1]);
					trailPos[x*6+4]=Math.floor((trailPos[x*6+4]-trailPos[x*6+2])*extMult+trailPos[4]);
					trailPos[x*6+5]=Math.floor((trailPos[x*6+5]-trailPos[x*6+3])*extMult+trailPos[5]);
					
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],trailPos[x*6+0]-(mag+10+blurBrush),trailPos[x*6+2]-(mag+10+blurBrush),trailPos[x*6+4]-(mag+10+blurBrush),thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],trailPos[x*6+1]-(mag+10+blurBrush),trailPos[x*6+3]-10,trailPos[x*6+5]-10,thrownY-10));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],trailPos[x*6+0]+(mag+10+blurBrush),trailPos[x*6+2]+(mag+10+blurBrush),trailPos[x*6+4]+(mag+10+blurBrush),thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],trailPos[x*6+1]+(mag+10+blurBrush),trailPos[x*6+3]+(mag+10+blurBrush),trailPos[x*6+5]+(mag+10+blurBrush),thrownY+(mag+10+blurBrush)));
					}
					for(var ii=0;ii<toCenter;ii+=1/(blurBrush/2)){
						var i=Math.floor(ii);
						draw.beginPath();
						//draw.shadowBlur = blurBrush;
						//draw.shadowColor = hex;
						if(spray==0){ // Line
			if(brushDraw>0){
							trailArray.push( (trailPos[x*6+4]+trailPos[x*6+2])/2 );
							trailArray.push( (trailPos[x*6+5]+trailPos[x*6+3])/2 );
							trailArray.push( trailPos[x*6+2] );
							trailArray.push( trailPos[x*6+3] );
							trailArray.push( (trailPos[x*6+0]+trailPos[x*6+2])/2 );
							trailArray.push( (trailPos[x*6+1]+trailPos[x*6+3])/2 );
						}
							draw.moveTo((trailPos[x*6+4]+trailPos[x*6+2])/2,(trailPos[x*6+5]+trailPos[x*6+3])/2);
							draw.quadraticCurveTo(trailPos[x*6+2],trailPos[x*6+3], (trailPos[x*6+0]+trailPos[x*6+2])/2,(trailPos[x*6+1]+trailPos[x*6+3])/2);
						}else if(spray==1){ //Spray
			if(brushDraw>0){
						trailArray.push( trailPos[x*6+4] );
						trailArray.push( trailPos[x*6+5] );
						trailArray.push( trailPos[x*6+4] );
						trailArray.push( trailPos[x*6+5] );
						trailArray.push( trailPos[x*6+0] );
						trailArray.push( trailPos[x*6+1] );
					}
							draw.moveTo(trailPos[x*6+4],trailPos[x*6+5]);
							draw.lineTo(trailPos[x*6+0],trailPos[x*6+1]);
						}else if(spray==2){ //Crawl
							thrownX=trailPos[x*6+0]+(trailPos[x*6+4]-trailPos[x*6+0])*throwLength;
							thrownY=trailPos[x*6+1]+(trailPos[x*6+5]-trailPos[x*6+1])*throwLength;
			if(brushDraw>0){
						trailArray.push( thrownX );
						trailArray.push( thrownY );
						trailArray.push( trailPos[x*6+2] );
						trailArray.push( trailPos[x*6+3] );
						trailArray.push( trailPos[x*6+0] );
						trailArray.push( trailPos[x*6+1] );
					}
							draw.moveTo(thrownX,thrownY);
							draw.quadraticCurveTo(thrownX,thrownY,trailPos[x*6+4],trailPos[x*6+5]);
							draw.quadraticCurveTo(trailPos[x*6+2],trailPos[x*6+3], trailPos[x*6+0],trailPos[x*6+1]);
						}else if(spray==3){//Grab
						
							draw.moveTo((trailPos[x*6+4]+trailPos[x*6+2])/2,(trailPos[x*6+5]+trailPos[x*6+3])/2);
							draw.quadraticCurveTo(trailPos[x*6+2],trailPos[x*6+3], trailPos[x*6+0],trailPos[x*6+1]);
							thrownX=trailPos[x*6+0]+(trailPos[x*6+0]-trailPos[x*6+4])*throwLength;
							thrownY=trailPos[x*6+1]+(trailPos[x*6+1]-trailPos[x*6+5])*throwLength;
							draw.quadraticCurveTo(trailPos[x*6+0],trailPos[x*6+1],thrownX,thrownY);
			if(brushDraw>0){
						trailArray.push( trailPos[x*6+2] );
						trailArray.push( trailPos[x*6+3] );
						trailArray.push( trailPos[x*6+0] );
						trailArray.push( trailPos[x*6+1] );
						trailArray.push( thrownX );
						trailArray.push( thrownY );
					}
						}else{
							draw.moveTo(runppx,runppy);
							draw.quadraticCurveTo(runpx,runpy, runx,runy);
							draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
							draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
						}
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
						//strokeColor=hex;
						//draw.strokeStyle=strokeColor;
						//draw.lineWidth=mag;	
						if(dispStats==1){
							$("#dragMag").html(mag);
						}
							draw.stroke();
						if(dispStats==1){
							$("#dragColor").html(strokeColor);
						}
						
		
						
						if(mirror!=0){
		//mirror
							mppx=(cW/2)+((cW/2)-trailPos[x*6+4]);
							mppy=(cH/2)+((cH/2)-trailPos[x*6+5]);
							mpx=(cW/2)+((cW/2)-trailPos[x*6+2]);
							mpy=(cH/2)+((cH/2)-trailPos[x*6+3]);
							mx=(cW/2)+((cW/2)-trailPos[x*6+0]);
							my=(cH/2)+((cH/2)-trailPos[x*6+1]);
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],mx-(mag+10+blurBrush),mpx-(mag+10+blurBrush),mppx-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],my-(mag+10+blurBrush),mpy-(mag+10+blurBrush),mppy-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],mx+(mag+10+blurBrush),mpx+(mag+10+blurBrush),mppx+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],my+(mag+10+blurBrush),mpy+(mag+10+blurBrush),mppy+(mag+10+blurBrush)));
					}	


		//X
							if(mirror==1 || mirror==3){
								draw.beginPath();
								//draw.shadowBlur = blurBrush;
								//draw.shadowColor = hex;
								if(spray==0){
			if(brushDraw>0){
						trailArray.push( (mppx+mpx)/2 );
						trailArray.push( (trailPos[x*6+5]+trailPos[x*6+3])/2 );
						trailArray.push( mpx );
						trailArray.push( trailPos[x*6+3] );
						trailArray.push( (mx+mpx)/2 );
						trailArray.push( (trailPos[x*6+1]+trailPos[x*6+3])/2 );
					}
									draw.moveTo((mppx+mpx)/2,(trailPos[x*6+5]+trailPos[x*6+3])/2);
									draw.quadraticCurveTo(mpx,trailPos[x*6+3], (mx+mpx)/2,(trailPos[x*6+1]+trailPos[x*6+3])/2);
								}else if(spray==1){
									draw.moveTo(mppx,trailPos[x*6+5]);
									draw.lineTo(mx,trailPos[x*6+1]);
								}else if(spray==2){
									thrownX=mx+(mppx-mx)*throwLength;
									thrownY=trailPos[1]+(trailPos[x*6+5]-trailPos[x*6+1])*throwLength;
									draw.moveTo(thrownX,thrownY);
									draw.quadraticCurveTo(thrownX,thrownY,mppx,trailPos[x*6+5]);
									draw.quadraticCurveTo(mpx,trailPos[x*6+3], mx,trailPos[x*6+1]);
								}else if(spray==3){
									draw.moveTo((mppx+mpx)/2,(trailPos[x*6+5]+trailPos[x*6+3])/2);
									draw.quadraticCurveTo(mpx,trailPos[x*6+3], mx,trailPos[x*6+1]);
									thrownX=mx+(mx-mppx)*throwLength;
									thrownY=trailPos[x*6+1]+(trailPos[x*6+1]-trailPos[x*6+5])*throwLength;
									draw.quadraticCurveTo(mx,trailPos[x*6+1],thrownX,thrownY);
								}else{
									draw.moveTo(runppx,runppy);
									draw.quadraticCurveTo(runpx,runpy, runx,runy);
									draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
									draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
								}
								//draw.strokeStyle=strokeColor;
								//draw.lineWidth=mag;
								draw.stroke();
							}
							
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
		//Y
							if(mirror==2 || mirror==3){
								draw.beginPath();
								//draw.shadowBlur = blurBrush;
								//draw.shadowColor = hex;
								if(spray==0){
			if(brushDraw>0){
						trailArray.push( (trailPos[x*6+4]+trailPos[x*6+2])/2 );
						trailArray.push( (mppy+mpy)/2 );
						trailArray.push( trailPos[x*6+2] );
						trailArray.push( mpy );
						trailArray.push( (trailPos[x*6+0]+trailPos[x*6+2])/2 );
						trailArray.push( (my+mpy)/2 );
					}
									draw.moveTo((trailPos[x*6+4]+trailPos[x*6+2])/2,(mppy+mpy)/2);
									draw.quadraticCurveTo(trailPos[x*6+2],mpy, (trailPos[x*6+0]+trailPos[x*6+2])/2,(my+mpy)/2);
								}else if(spray==1){
									draw.moveTo(trailPos[x*6+4],mppy);
									draw.lineTo(trailPos[x*6+0],my);
								}else if(spray==2){
									thrownX=trailPos[x*6+0]+(trailPos[x*6+4]-trailPos[x*6+0])*throwLength;
									thrownY=my+(mppy-my)*throwLength;
									draw.moveTo(thrownX,thrownY);
									draw.quadraticCurveTo(thrownX,thrownY,trailPos[x*6+4],mppy);
									draw.quadraticCurveTo(trailPos[x*6+2],mpy, trailPos[x*6+0],my);
								}else if(spray==3){
									draw.moveTo((trailPos[x*6+4]+trailPos[x*6+2])/2,(mppy+mpy)/2);
									draw.quadraticCurveTo(trailPos[x*6+2],mpy, trailPos[x*6+0],my);
									thrownX=trailPos[x*6+0]+(trailPos[x*6+0]-trailPos[x*6+4])*throwLength;
									thrownY=my+(my-mppy)*throwLength;
									draw.quadraticCurveTo(trailPos[x*6+0],my,thrownX,thrownY);
								}else{
									draw.moveTo(runppx,runppy);
									draw.quadraticCurveTo(runpx,runpy, runx,runy);
									draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
									draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
								}
								//draw.strokeStyle=strokeColor;
								//draw.lineWidth=mag;
								draw.stroke();
							}
					if(ii==0){
						refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],thrownX-(mag+10+blurBrush)));
						refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],thrownY-(mag+10+blurBrush)));
						refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],thrownX+(mag+10+blurBrush)));
						refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],thrownY+(mag+10+blurBrush)));
					}
		//X&Y
							if(mirror==3 || mirror==4){
								draw.beginPath();
								//draw.shadowBlur = blurBrush;
								//draw.shadowColor = hex;
								if(spray==0){
			if(brushDraw>0){
						trailArray.push( (mppx+mpx)/2 );
						trailArray.push( (mppy+mpy)/2 );
						trailArray.push( mpx );
						trailArray.push( mpy );
						trailArray.push( (mx+mpx)/2 );
						trailArray.push( (my+mpy)/2 );
					}
									draw.moveTo((mppx+mpx)/2,(mppy+mpy)/2);
									draw.quadraticCurveTo(mpx,mpy, (mx+mpx)/2,(my+mpy)/2);
								}else if(spray==1){
									draw.moveTo(mppx,mppy);
									draw.lineTo(mx,my);
								}else if(spray==2){
									thrownX=mx+(mppx-mx)*throwLength;
									thrownY=my+(mppy-my)*throwLength;
									draw.moveTo(thrownX,thrownY);
									draw.quadraticCurveTo(thrownX,thrownY,mppx,mppy);
									draw.quadraticCurveTo(mpx,mpy, mx,my);
								}else if(spray==3){
									draw.moveTo((mppx+mpx)/2,(mppy+mpy)/2);
									draw.quadraticCurveTo(mpx,mpy, mx,my);
									thrownX=mx+(mx-mppx)*throwLength;
									thrownY=my+(my-mppy)*throwLength;
									draw.quadraticCurveTo(mx,my,thrownX,thrownY);
								}else{
									draw.moveTo(runppx,runppy);
									draw.quadraticCurveTo(runpx,runpy, runx,runy);
									draw.moveTo((runppx+runpx)/2,(runppy+runpy)/2);
									draw.quadraticCurveTo(runpx,runpy, (runx+runpx)/2,(runy+runpy)/2);
								}
								//draw.strokeStyle=strokeColor;
								//draw.lineWidth=mag;
								draw.stroke();
							}
							
						}
					}
				}
				if(dispStats==1){
					$("#dragMag").html(mag);
					$("#dragColor").html(strokeColor);
				}
				
			//Finished drawing
			//Grab the boundaries of what was just drawn
				if(ii==0){
					refreshWindow[0]=Math.max(0,Math.min(refreshWindow[0],dragPos[x*6+0]-(mag+10+blurBrush),zoomMouseX-(mag+10+blurBrush),dragPos[x*6+2]-(mag+10+blurBrush),dragPos[4]-(mag+10+blurBrush),runx-(mag+10+blurBrush),thrownX-(mag+10+blurBrush)));
					refreshWindow[1]=Math.max(0,Math.min(refreshWindow[1],dragPos[x*6+1]-(mag+10+blurBrush),zoomMouseY-(mag+10+blurBrush),dragPos[x*6+3]-(mag+10+blurBrush),dragPos[5]-(mag+10+blurBrush),runy-(mag+10+blurBrush),thrownY-(mag+10+blurBrush)));
					refreshWindow[2]=Math.min(cW,Math.max(refreshWindow[2],dragPos[x*6+0]+(mag+10+blurBrush),zoomMouseX+(mag+10+blurBrush),dragPos[x*6+2]+(mag+10+blurBrush),dragPos[4]+(mag+10+blurBrush),runx+(mag+10+blurBrush),thrownX+(mag+10+blurBrush)));
					refreshWindow[3]=Math.min(cH,Math.max(refreshWindow[3],dragPos[x*6+1]+(mag+10+blurBrush),zoomMouseY+(mag+10+blurBrush),dragPos[x*6+3]+(mag+10+blurBrush),dragPos[5]+(mag+10+blurBrush),runy+(mag+10+blurBrush),thrownY+(mag+10+blurBrush)));
				}
			}
			if(brushDraw>0){
				if(brushDraw==2){
					if(dragCount==3){
						undoOption(1);
					}
					brushDrawGen(strokeCanvas, color,mag, dragArray, trailArray,blurBrush);
				}else{
					brushDrawGen(draw, hex,toHex, dragArray, trailArray,blurBrush);
				}
			}
		}
		refreshWindow=[Math.floor(refreshWindow[0]),Math.floor(refreshWindow[1]),Math.floor(refreshWindow[2]),Math.floor(refreshWindow[3])];
		
		if(pastCanvas!=-1){
			if((refreshWindow[2]>refreshWindow[0] || refreshWindow[3]>refreshWindow[1]) &&  brushStyle==0){
				if(dragging==1 && brushStyle==0){
					if(refreshWindow[0]<refreshWindowStore[0] && brushStyle==0){
						refreshWindowStore[0]=refreshWindow[0];
					}
					if(refreshWindow[1]<refreshWindowStore[1] && brushStyle==0){
						refreshWindowStore[1]=refreshWindow[1];
					}
					if(refreshWindow[2]>refreshWindowStore[2] && brushStyle==0){
						refreshWindowStore[2]=refreshWindow[2];
					}
					if(refreshWindow[3]>refreshWindowStore[3] && brushStyle==0){
						refreshWindowStore[3]=refreshWindow[3];
					}//else{
					//	refreshWindow=refreshWindowStore;
					//}
					refreshWindow=refreshWindowStore;
					
				}
			}
			if(dispStats==1){
				$("#refreshWindowX1").html(refreshWindow[0]);
				$("#refreshWindowY1").html(refreshWindow[1]);
				$("#refreshWindowX2").html(refreshWindow[2]);
				$("#refreshWindowY2").html(refreshWindow[3]);
			}
			if(filter>0){
				var quality=parseFloat($("#sl"+diaVal+"_qualityPercent_val").val());
				if(quality!=1){
					scaleCanvas('curDraw',quality);
					refreshWindow=[refreshWindow[0]*quality,refreshWindow[1]*quality,refreshWindow[2]*quality,refreshWindow[3]*quality];
				}
				if(filter==1){
					//FADE
					smudgeAway(draw,draw);
				}
				if(filter==2){
					eatAway(draw,draw);
				}
				if(filter==3){
					HueAttack(draw,draw);
				}
				if(filter==4){
					blurEffect(draw,draw,0,1,1);
				}
				if(quality!=1){
					refreshWindow=[refreshWindow[0]*(1/quality),refreshWindow[1]*(1/quality),refreshWindow[2]*(1/quality),refreshWindow[3]*(1/quality)];
					scaleCanvas('curDraw',1);
				}
			}
				
			if(spray!=1){
				dragPos[4] = dragPos[2];
				dragPos[5] = dragPos[3];
				if(dispStats==1){
					$("#dragPosDiv").html(dragPos[4]);
					$("#dragPosDiv").html(dragPos[5]);
				}
			}
			dragPos[2] = zoomMouseX;
			dragPos[3] = zoomMouseY;
			if(dispStats==1){
					$("#dragPosDiv").html(dragPos[2]);
					$("#dragPosDiv").html(dragPos[3]);
				}
			if(dispStats==1){
				$("#dragPosDiv").html(dragPos[0]);
				$("#dragPosDiv").html(dragPos[1]);
				$("#dragCount").html(dragCount);
				$("#dragTotal").html(dragTotal);
				$("#dragClick").html(dragging);
			}
		
			// Brush tool options
			if(dragging==1 && brushStyle>0){
				//refreshWindow=[0,0,sW,sH];
				refreshWindowTool=[Math.max(0,refreshWindow[0]), Math.max(0,refreshWindow[1]), Math.min(cW,refreshWindow[2]), Math.min(cH,refreshWindow[3])];
				if(dispStats==1){
					$("#refreshWindowX1").html(refreshWindowTool[0]);
					$("#refreshWindowY1").html(refreshWindowTool[1]);
					$("#refreshWindowX2").html(refreshWindowTool[2]);
					$("#refreshWindowY2").html(refreshWindowTool[3]);
				}
				layerCheck=1;
				if(typeof(draw)==='object'){ // Work in progress
				}else{
					//alert(typeof(strokeCanvas));
				}
				//Push current to curCanvas
				var blurAmount=1;//$("#be"+diaVal+"_blurPercent_val").val();
				//if(blurAmount>0){
				//	blurTool("curDraw","curDraw",blurAmount,2);
				//}
				var push;
				var layerRun=0;
				//strokeCanvas,drawCanvas,pastCanvas
				while(layerCheck==1){
					if(layerRun==0){
						push=drawCanvas;
					}else{
						push=pastCanvas;
					}
					if(brushStyle==1){ // Blur
						blurTool(strokeCanvas,push,(blurAmount+1),2);
					}else if(brushStyle==2){ // Smudge - off
					}else if(brushStyle==3){ // Lighten
					}else if(brushStyle==4){ // Darken
					}else if(brushStyle==5){ // Desaturate
						desaturateTool(strokeCanvas,push);
					}else if(brushStyle==6){ // Shift Hue Up - off
						shiftHueTool(strokeCanvas,push,15);
					}else if(brushStyle==7){ // Shift Hue Down - off
						shiftHueTool(strokeCanvas,push,-15);
					}else if(brushStyle==8){ // Erase
						eraseTool(strokeCanvas,push);
					}else if(brushStyle==9){ // Deblur
						beblurTool(strokeCanvas,push);
					}else if(brushStyle==10){ // scatter
						scatterTool(strokeCanvas,push,4,1);
					}
					layerRun+=1;
					if(layerRun>=2){
						break;
					}
				}
				//drawGuide("curDraw",refreshWindowTool,[0,255,0],[5,5]);
			}//else{
			//	drawGuide("curDraw",refreshWindow, [255,0,0],[5,5]);
			//	drawGuide("curDraw",refreshWindowStore, [0,0,255],[5,5]);
			//}
		}
	//}
}

function brushDrawGen(draw,hex,toHex, dragArray, trailArray, blurCount){
	//Kill drawing for brush types
	if(brushDraw==1){ // Sweep
		draw.globalAlpha= 1; 
		var grad,toVals;
		var skip=6;
		var magWidth=parseFloat($("#sl"+diaVal+"_setWidth_val").val())/60+.1;
		var step=1;
		if(blurCount>0){
			step=1/Math.max(.01,Math.min(50,blurCount));
		}
		for(var x=0; x<dragArray.length; x+=skip){
			for(var c=0; c<1; c+=step){
				draw.beginPath();
				draw.lineWidth=1;

				draw.moveTo(dragArray[x],dragArray[x+1]);
				
				draw.quadraticCurveTo(dragArray[x+2],dragArray[x+3], dragArray[x+4],dragArray[x+5]);
				toVals=[]
				//This goes from front-back
				toVals.push( (trailArray[x+4]-dragArray[x+4])*magWidth+dragArray[x+4] );
				toVals.push( (trailArray[x+5]-dragArray[x+5])*magWidth+dragArray[x+5] );
				toVals.push( (trailArray[x+2]-dragArray[x+2])*magWidth+dragArray[x+2] );
				toVals.push( (trailArray[x+3]-dragArray[x+3])*magWidth+dragArray[x+3] );
				toVals.push( (trailArray[x]-dragArray[x])*magWidth+dragArray[x] );
				toVals.push( (trailArray[x+1]-dragArray[x+1])*magWidth+dragArray[x+1] );
				draw.lineTo(toVals[0],toVals[1]);
				draw.quadraticCurveTo(toVals[2],toVals[3], toVals[4],toVals[5]);
				
				draw.lineTo(dragArray[x],dragArray[x+1]);
				
				draw.lineJoin = 'round';
				draw.closePath();
				
				if(blurCount>0){
					draw.shadowBlur = blurCount;
					draw.shadowColor = hex;
				}
				draw.fill();
				draw.stroke();
			}
			try{
				grad=draw.createLinearGradient( Math.floor((dragArray[x]+toVals[4])/2),Math.floor((dragArray[x+1]+toVals[5])/2), Math.floor((dragArray[x+4]+toVals[0])/2),Math.floor((dragArray[x+5]+toVals[1])/2) );
				grad.addColorStop(0,hex);
				grad.addColorStop(1,toHex);
				draw.fillStyle=grad;
				draw.fill();
			}catch(err){}
		}
	}else if(brushDraw==2){ // Paint
		var magDist=Math.sqrt( Math.pow((dragPos[2]-dragPos[0]),2) + Math.pow((dragPos[3]-dragPos[1]),2) );
		var magTemp=Math.max(toHex*2,magDist);
		refreshWindowTool[0]=Math.max(0,Math.min(dragPos[0]-(magTemp), dragPos[2]-(magTemp), dragPos[4]-(magTemp) ));
		refreshWindowTool[1]=Math.max(0,Math.min(dragPos[1]-(magTemp), dragPos[3]-(magTemp), dragPos[5]-(magTemp) ));
		refreshWindowTool[2]=Math.min(sW,Math.max(dragPos[0]+(magTemp), dragPos[2]+(magTemp), dragPos[4]+(magTemp) ));
		refreshWindowTool[3]=Math.min(sH,Math.max(dragPos[1]+(magTemp), dragPos[3]+(magTemp), dragPos[5]+(magTemp) ));
		refreshWindowTool=refreshWindow;
		if(dynMag==0){
			magDist=parseFloat($("#sl"+diaVal+"_setWidth_val").val());
		}
		// draw is id string
		// hex is in color format - [0][1][2]
		// toHex is mag
		paintTool(draw,draw,hex,magDist);
	}
}

function runFilters() {
    setInterval(function() {
		if(filter!=0 && autoFilter==1){
		runner+=1;
		if(dragging==0 && filter>0){
			var canvas=document.getElementById(curCanvas);
			var draw=canvas.getContext("2d");
			if(dispStats==1){
				$("#filterRun").html(runner);
			}
			
			
				var quality=parseFloat($("#sl"+diaVal+"_qualityPercent_val").val());
				scaleCanvas('curDraw',quality);
				refreshWindow=[refreshWindow[0]*quality,refreshWindow[1]*quality,refreshWindow[2]*quality,refreshWindow[3]*quality];
				if(filter==1){
					//FADE
					smudgeAway(draw,draw);
				}
				if(filter==2){
					eatAway(draw,draw);
				}
				if(filter==3){
					HueAttack(draw,draw);
				}
				if(filter==4){
					blurEffect(draw,draw,0,1,1);
				}
				refreshWindow=[refreshWindow[0]*(1/quality),refreshWindow[1]*(1/quality),refreshWindow[2]*(1/quality),refreshWindow[3]*(1/quality)];
				scaleCanvas('curDraw',1);
			}
		}
    }, 60);
}
function bumpFilters() {
	var canvas=document.getElementById(curCanvas);
	var draw=canvas.getContext("2d");
	if(filter==1){
		smudgeAway(draw,draw);
	}
	if(filter==2){
		eatAway(draw,draw);
	}
	if(filter==3){
		HueAttack(draw,draw);
	}
	if(filter==4){
		blurEffect(draw,draw,0,1,1);
	}
}
