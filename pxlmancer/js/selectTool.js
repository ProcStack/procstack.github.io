//selectMarquee("selectDraw",curCanvas,1);
function selectMarquee(drawCanvas,targetCanvas,gen){
	var mPos=toCanvasSpace(mouseX,mouseY);
	zoomMouseX=mPos[0];
	zoomMouseY=mPos[1];
	selectToolDeselect=0;
	if(gen==1){
		if(selectTool==2){
			putMarqueeSelection();
			clearScreen(drawCanvas);
			deselectMarquee('selectDraw',1);
		}
		selectTool=1;
		selectToolVis=1;
		//selectToolDisplay=[mouseX,mouseY,mouseX,mouseY];
		selectToolPos=[zoomMouseX,zoomMouseY,mouseX,mouseY];
		var canvas,color;
		for(var i=0;i<counts.length;++i){
			canvas=$(counts[i]).attr("canvasName");
			if((parseFloat($(counts[i]).attr("opacity"))>0 && parseInt($(counts[i]).attr("vis"))==1) || canvas=='gradientBG'){
				color=sampleCanvas(canvas,[zoomMouseX,zoomMouseY]);
				if(color[3]>0){
					break;
				}
			}
		}
		var colorMag=(color[0]+color[1]+color[2])/3;
		if(colorMag>170){
			selectToolColor=[20,30,60];
		}else{
			selectToolColor=[150,180,255];
		}
	}
	selectToolWindow[0]=Math.floor(Math.min(zoomMouseX,selectToolPos[0]));
	selectToolWindow[1]=Math.floor(Math.min(zoomMouseY,selectToolPos[1]));
	selectToolWindow[2]=Math.floor(Math.max(zoomMouseX,selectToolPos[0]));
	selectToolWindow[3]=Math.floor(Math.max(zoomMouseY,selectToolPos[1]));
	clearScreen(drawCanvas);
	drawGuide(drawCanvas, selectToolWindow, selectToolColor,[5,5]);
	
	selectToolDisplay[0]=Math.floor(Math.min(mouseX,selectToolPos[2]));
	selectToolDisplay[1]=Math.floor(Math.min(mouseY,selectToolPos[3]));
	selectToolDisplay[2]=Math.floor(Math.max(mouseX,selectToolPos[2]));
	selectToolDisplay[3]=Math.floor(Math.max(mouseY,selectToolPos[3]));
}

function generateScalers(div,coords,useRefreshWindow,name,outPut){
	var dl=$("#"+div);
	var cW,cH,cT,cL,divTag;
	if(useRefreshWindow==0){
		cW=$(dl).width();
		cH=$(dl).height();
		cL=$(dl).position().left;
		cT=$(dl).position().top;
		divTag=div
	}else{
		if(coords[0]==sW){
			coords=[0,0,sW,sH];
		}
		cW=coords[2]-coords[0];
		cH=coords[3]-coords[1];
		cL=coords[0];
		cT=coords[1];
		divTag='';
	}
	var html;
	var place;
	if(devMode==1){	
		place=[-19+cL,-19+cT, cW/2+cL-7,-20+cT, cW+4+cL,-19+cT, -20+cL,cH/2+cT-7, cW+5+cL,cH/2+cT-7, -19+cL,cH+4+cT, cW/2+cL-7,cH+5+cT, cW+4+cL,cH+4+cT, cW+10+cL,cH+60+cT, cW+10+cL,cT];
	}else{	
		place=[-19+cL,-19+cT, cW/2+cL-7,-20+cT, cW+4+cL,-19+cT, -20+cL,cH/2+cT-7, cW+5+cL,cH/2+cT-7, -19+cL,cH+4+cT, cW/2+cL-7,cH+5+cT, cW+4+cL,cH+4+cT, cW+20+cL,cH+cT, cW+10+cL,cT];
	}
	var cursors=["se-resize","s-resize","sw-resize","e-resize","w-resize","ne-resize","n-resize","nw-resize"];
	var drawLines=[[5,15, 15,15, 15,5], [0,15, 15,15, 7.5,15, 7.5,7.5], [0,5, 0,15, 10,15], [7.5,7.5, 15,7.5, 15,0, 15,15], [0,0, 0,15, 0,7.5, 7.5,7.5], [5,0, 15,0, 15,10],[0,0, 15,0, 7.5,0, 7.5,7.5],[0,10, 0,0, 10,0]];
	var controls=8;
	var handleCSS="position:relative;left:0px;top:0px;";
	handleCSS+="-ms-transform: matrix(1,0,0,1,0,0);";
	handleCSS+="-webkit-transform: matrix(1,0,0,1,0,0);";
	handleCSS+="-o-transform: matrix(1,0,0,1,0,0);";
	handleCSS+="transform: matrix(1,0,0,1,0,0);";
	var html="<dev id='marq_controllerHandles' style='"+handleCSS+"'>";
	
	for(var x=0; x<controls; ++x){
		// rwt -> refreshWindowTool
		html+="<canvas id='"+name+"_ctl"+x+"' rwt='"+useRefreshWindow+"' divParent='"+divTag+"' style='cursor:"+cursors[x]+";position:fixed;left:"+place[x*2]+";top:"+place[x*2+1]+";z-index:"+(8020+x)+"' height='15px' width='15px' onMouseOver='onDia=1;' onMouseDown=\"onDia=1;storeKeyHold=1;grabHandle(curScale,'"+name+"_ctl"+x+"',[-1],1,selectToolWindow,0);\" onMouseUp='onDia=0;storeKeyHold=0;'></canvas>";
	}
	
	var placeTrans=[-49+cL,-49+cT, cW/2+cL-7,-50+cT, cW+4+cL,-49+cT, -49+cL,cH/2+cT-7, cW+34+cL,cH/2+cT-7, -49+cL,cH+4+cT, cW/2+cL-7,cH+34+cT, cW+4+cL,cH+4+cT,   -34+cL,-34+cT, cW/2+cL-7,-35+cT, cW+4+cL,-34+cT, -35+cL,cH/2+cT-7, cW+19+cL,cH/2+cT-7, -34+cL,cH+4+cT, cW/2+cL-7,cH+19+cT, cW+4+cL,cH+4+cT,  cW/2+cL-7,cH/2+cT-7,];
	var cursorsTrans=["nw-resize","n-resize","ne-resize","w-resize","e-resize","sw-resize","s-resize","se-resize",   "nesw-resize","ew-resize","nwse-resize","ns-resize","ns-resize","nwse-resize","ew-resize","nesw-resize", "all-scroll"];
	var drawLinesTrans=[[0,45, 0,0, 45,0], [0,0, 15,0, 7.5,0, 7.5,7.5], [0,0, 45,0, 45,45], [0,0, 0,15, 0,7.5, 7.5,7.5], [7.5,7.5, 15,7.5, 15,0, 15,15], [0,0, 0,45, 45,45],[0,15, 15,15, 7.5,15, 7.5,7.5],[0,45, 45,45, 45,0],     [7,30, 7,7, 30,7],[0,7, 15,7], [0,7, 23,7, 23,30], [7,0, 7,15], [7,0, 7,15], [7,0, 7,23, 30,23], [0,7, 15,7], [0,23, 23,23, 23,0], [0,7, 15,7, 7,7, 7,15, 7,0]];
	var sizesTrans=[[45,45],[15,15],[45,45],[15,15],[15,15],[45,45],[15,15],[45,45], [30,30],[15,15], [30,30], [15,15], [15,15], [30,30], [15,15], [30,30], [15,15] ];
	var functionTrans=['scale','scale','scale','scale','scale','scale','scale','scale',  'rotate','n-skew','rotate','e-skew','w-skew','rotate','s-skew','rotate', 'move'];
	var pivotTrans=[[1,1],[.5,1],[0,1],[1,.5],[0,.5],[1,0],[.5,0],[0,0],  [.5,.5],[0,1],[.5,.5],[1,0],[0,0],[.5,.5],[1,0],[.5,.5], [.5,.5] ];
	//var pivotTrans=[[.5,.5],[.5,.5],[.5,.5],[.5,.5],[.5,.5],[.5,.5],[.5,.5],[.5,.5],  [.5,.5],[0,1],[.5,.5],[1,0],[0,0],[.5,.5],[1,0],[.5,.5],];
	var lineTrans=[1,1,1,1,1,1,1,1, 0,1,0,1,1,0,1,0, 1];
	var additionalTrans=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1], [-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1], [-1,-1]];
	//var additionalTrans=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1], [-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
	
	var controlsRot=17;
	var zTrans;
	for(var x=0; x<controlsRot; ++x){
		var disp="hidden";
		if(devMode==1){
			disp="visible";
		}
		
		// rwt -> refreshWindowTool
		html+="<canvas id='"+name+"Trans_ctl"+x+"' rwt='"+useRefreshWindow+"' divParent='"+divTag+"' style='visibility:"+disp+";cursor:"+cursorsTrans[x]+";position:absolute;left:"+placeTrans[x*2]+";top:"+placeTrans[x*2+1]+";z-index:"+(8000+x)+"' height='"+sizesTrans[x][0]+"px' width='"+sizesTrans[x][1]+"px' onMouseOver='onDia=1;' onMouseDown=\"onDia=1;storeKeyHold=1;grabHandleTrans('"+functionTrans[x]+"','"+name+"Trans_ctl"+x+"',[-1],["+pivotTrans[x][0]+","+pivotTrans[x][1]+"],["+additionalTrans[x][0]+","+additionalTrans[x][1]+"],selectToolWindow,1);\" onMouseUp='onDia=0;storeKeyHold=0;'></canvas>";
	}
	html+="</div>";
	html+="<div id='"+name+"_res' style='width:100px;cursor:default;position:absolute;left:"+place[9*2]+";top:"+place[9*2+1]+";z-index:"+(5000+10)+";font-size:95%;text-shadow:3px 3px 4px black,-1px 0px 1px rgba(0,0,0,.6),1px 0px 1px rgba(0,0,0,.6),0px 1px 1px rgba(0,0,0,.6),0px -1px 1px rgba(0,0,0,.6);'></div>";
	html+="<div id='"+name+"_menu' onMouseOver='menuVis(0,0);key_hide=1;menuVis(1,0);' onMouseOut='key_hide=0;' style='width:100px;cursor:default;position:absolute;left:"+place[8*2]+";top:"+place[8*2+1]+";z-index:"+(5000+9)+";font-size:95%;text-shadow:3px 3px 4px black,-1px 0px 1px rgba(0,0,0,.6),1px 0px 1px rgba(0,0,0,.6),0px 1px 1px rgba(0,0,0,.6),0px -1px 1px rgba(0,0,0,.6);'></div>";
	//return html;
	
	$("#"+outPut).html(html);
	
	for(var x=0; x<controls; ++x){
		drawLine(drawLines[x],2,[0,0,0],4,0,(name+"_ctl"+x),[-1]);
	}
	for(var x=0; x<controls; ++x){
		drawLine(drawLines[x],2,[85,102,119],1,0,(name+"_ctl"+x),[-1]);
	}
	for(var x=0; x<controlsRot; ++x){
		if(lineTrans[x]==0){
			drawGeo(drawLinesTrans[x],4,4,[0,0,0],1,0,0,(name+"Trans_ctl"+x));
		}else{
			drawLine(drawLinesTrans[x],2,[0,0,0],4,0,(name+"Trans_ctl"+x),[-1]);
		}
	}
	for(var x=0; x<controlsRot; ++x){
		if(lineTrans[x]==0){
			drawGeo(drawLinesTrans[x],4,2,[85,102,119],1,0,0,(name+"Trans_ctl"+x));
		}else{
			drawLine(drawLinesTrans[x],2,[85,102,119],1,0,(name+"Trans_ctl"+x),[-1]);
		}
	}
	pullMarqueeSelection();
}

function genMarqueeHandles(drawCanvas){
	var mPos=toCanvasSpace(mouseX,mouseY);
	zoomMouseX=mPos[0];
	zoomMouseY=mPos[1];
	if(Math.abs(selectToolDisplay[0]-selectToolDisplay[2])>1 && Math.abs(selectToolDisplay[1]-selectToolDisplay[3])>1){

		generateScalers(drawCanvas,selectToolDisplay,1,'marqSelect','marqueeScalers');
		var menu=$("#marqSelect_res");
		var html='';
		html+="<div class='marqText'><span class='marqOb'>Min/Max</span><div id='marqText_minMax'>[ "+Math.floor(selectToolWindow[0])+","+Math.floor(selectToolWindow[1])+" ]<br>[ "+Math.floor(selectToolWindow[2])+","+Math.floor(selectToolWindow[3])+" ]</div></div>"; 
		html+="<div class='marqText'><span class='marqOb'>Size</span><div id='marqText_size'>[ "+Math.floor(selectToolWindow[2]-selectToolWindow[0])+" , "+Math.floor(selectToolWindow[3]-selectToolWindow[1])+" ]</div></div>"; 
		$(menu).html(html);
		menu=$("#marqSelect_menu");
		html="<div id='marq_deselectApply' class='marqButton' onClick=\"putMarqueeSelection();\">Deselct</div>";
		html+="<div id='marq_deselectRevert' class='marqButton' onClick=\"revertMarqueeSelection();\">Revert</div>";
		html+="<div><span id='marq_fill' class='marqButton' onClick='fillMarquee();'>Fill</span> / ";
		html+="<span id='marq_clear' class='marqButton' onClick='clearMarquee();'>Clear</span></div>";
		html+="<div id='marq_newLayer' class='marqButton' onClick='copyMarqueeIntoLayer();'>Copy To New Layer</div>";
		//Marquee Value Stores-
		html+="<div style='overflow:hidden;height:0px;width:0px;'>";
		html+="<input type='text' value='1' id='marq_scaleX' hidden>";
		html+="<input type='text' value='1' id='marq_scaleY' hidden>";
		html+="<input type='text' value='"+selectToolWindow[0]+"' id='marq_x1' hidden>";
		html+="<input type='text' value='"+selectToolWindow[1]+"' id='marq_y1' hidden>";
		html+="<input type='text' value='"+selectToolWindow[2]+"' id='marq_x2' hidden>";
		html+="<input type='text' value='"+selectToolWindow[3]+"' id='marq_y2' hidden>";
		html+="<input type='text' value='1' id='marq_txx' hidden>";
		html+="<input type='text' value='0' id='marq_tyx' hidden>";
		html+="<input type='text' value='0' id='marq_txy' hidden>";
		html+="<input type='text' value='1' id='marq_tyy' hidden>";
		html+="<input type='text' value='0' id='marq_txz' hidden>";
		html+="<input type='text' value='0' id='marq_tyz' hidden>";
		html+="<input type='text' value='0' id='marq_rot' hidden>";
		html+="</div>";
		//html+="<div id='marq_hide' class='marqButton' onClick=''>Hide Controls</div>";
		$(menu).html(html);
	}
}

function updateMarqueeHandles(scaler,marqWindow,name){
	//- selectToolWindow
	//selectToolDisplay
	
	var cW=Math.abs(marqWindow[2]-marqWindow[0])*scaler;
	var cH=Math.abs(marqWindow[1]-marqWindow[3])*scaler;
	var cL=marqWindow[0]*scaler+$("#documentLayers").position().left;
	var cT=marqWindow[1]*scaler+$("#documentLayers").position().top;
	var place
	if(devMode==1){	
		place=[-19+cL,-19+cT, cW/2+cL-7,-20+cT, cW+4+cL,-19+cT, -20+cL,cH/2+cT-7, cW+5+cL,cH/2+cT-7, -19+cL,cH+4+cT, cW/2+cL-7,cH+5+cT, cW+4+cL,cH+4+cT, cW+10+cL,cH+60+cT, cW+10+cL,cT];
	}else{	
		place=[-19+cL,-19+cT, cW/2+cL-7,-20+cT, cW+4+cL,-19+cT, -20+cL,cH/2+cT-7, cW+5+cL,cH/2+cT-7, -19+cL,cH+4+cT, cW/2+cL-7,cH+5+cT, cW+4+cL,cH+4+cT, cW+20+cL,cH+cT, cW+10+cL,cT];
	}
	var controls=8;
	for(var x=0; x<controls; ++x){
		$("#"+name+"_ctl"+x).css({'left':place[x*2],'top':place[x*2+1]});
	}
	
	var placeTrans=[-49+cL,-49+cT, cW/2+cL-7,-50+cT, cW+4+cL,-49+cT, -49+cL,cH/2+cT-7, cW+34+cL,cH/2+cT-7, -49+cL,cH+4+cT, cW/2+cL-7,cH+34+cT, cW+4+cL,cH+4+cT,   -34+cL,-34+cT, cW/2+cL-7,-35+cT, cW+4+cL,-34+cT, -35+cL,cH/2+cT-7, cW+19+cL,cH/2+cT-7, -34+cL,cH+4+cT, cW/2+cL-7,cH+19+cT, cW+4+cL,cH+4+cT, cW/2+cL-7,cH/2+cT-7,];
	var controlsRot=17;
	for(var x=0; x<controlsRot; ++x){
		$("#"+name+"Trans_ctl"+x).css({'left':placeTrans[x*2],'top':placeTrans[x*2+1]});
	}
	
	$("#"+name+"_res").css({'left':place[9*2],'top':place[9*2+1]});
	$("#"+name+"_menu").css({'left':place[8*2],'top':place[8*2+1]});
	
	var handles=$("#marq_controllerHandles"); 
	//$(handles).css("-ms-transform","matrix("+parseFloat($('#marq_txx').val())+","+parseFloat($('#marq_tyx').val())+","+parseFloat($('#marq_txy').val())+","+parseFloat($('#marq_tyy').val())+","+parseFloat($('#marq_txz').val())+","+parseFloat($('#marq_tyz').val())+")");
	//$(handles).css("-webkit-transform","matrix("+parseFloat($('#marq_txx').val())+","+parseFloat($('#marq_tyx').val())+","+parseFloat($('#marq_txy').val())+","+parseFloat($('#marq_tyy').val())+","+parseFloat($('#marq_txz').val())+","+parseFloat($('#marq_tyz').val())+")");
	//$(handles).css("-o-transform","matrix("+parseFloat($('#marq_txx').val())+","+parseFloat($('#marq_tyx').val())+","+parseFloat($('#marq_txy').val())+","+parseFloat($('#marq_tyy').val())+","+parseFloat($('#marq_txz').val())+","+parseFloat($('#marq_tyz').val())+")");
	//$(handles).css("transform","matrix("+parseFloat($('#marq_txx').val())+","+parseFloat($('#marq_tyx').val())+","+parseFloat($('#marq_txy').val())+","+parseFloat($('#marq_tyy').val())+","+parseFloat($('#marq_txz').val())+","+parseFloat($('#marq_tyz').val())+")");
	$(handles).css( {"left" : parseFloat($('#marq_txz').val())*dynScale, "top" : parseFloat($('#marq_tyz').val())*dynScale} );
}
function grabHandle(scaler,grab,mPos,init,marqWindow,update){
	var dl=$("#documentLayers");
	var cW=Math.abs(marqWindow[2]-marqWindow[0])*scaler;
	var cH=Math.abs(marqWindow[1]-marqWindow[3])*scaler;
	var cL=marqWindow[0]*scaler+$(dl).position().left;
	var cT=marqWindow[1]*scaler+$(dl).position().top;
	var grabResScale=[-1,-1,0,0, 0,-1,0,0, 0,-1,1,0, -1,0,0,0, 0,0,1,0, -1,0,0,1, 0,0,0,1, 0,0,1,1 ];
	if(init==1){
		menuVis(0,0);
		key_hide=1;
		menuVis(1,0);
		
		var gL=parseInt($("#"+grab).css('left'));
		var gT=parseInt($("#"+grab).css('top'));
		mPos=[mouseX,mouseY,gL,gT];
		init=0;
	}
	var moveX=mouseX-mPos[0];
	var moveY=mouseY-mPos[1];
	var name=grab.split("_");
	var val=grab.split("l");
	val=parseInt(val[val.length-1]);
	var xMult=Math.max((grabResScale[4*val]*-1),grabResScale[4*val+2]);
	var yMult=Math.max((grabResScale[4*val+1]*-1),grabResScale[4*val+3]);
	$("#"+grab).css({'left':mPos[2]+moveX*xMult,'top':mPos[3]+moveY*yMult});
	if(grab==2){
		$("#"+name[0]+"_res").css({'left':mPos[2]+moveX+25,'top':mPos[3]+moveY});
	}
	if(grab==7){
		$("#"+name[0]+"_menu").css({'left':mPos[2]+moveX+25,'top':mPos[3]+moveY});
	}
	
	var x1=-moveX*grabResScale[4*val];
	var y1=-moveY*grabResScale[4*val+1];
	var x2=moveX*grabResScale[4*val+2];
	var y2=moveY*grabResScale[4*val+3];

	if(update==0){
		var tmpDisp=new Array();
		tmpDisp[0]=Math.floor(marqWindow[0]+x1*(1/curScale));
		tmpDisp[1]=Math.floor(marqWindow[1]+y1*(1/curScale));
		tmpDisp[2]=Math.floor(marqWindow[2]+x2*(1/curScale));
		tmpDisp[3]=Math.floor(marqWindow[3]+y2*(1/curScale));
		clearScreen('selectDraw');
		drawGuide('selectDraw', tmpDisp, selectToolColor,[5,5]);
		$("#marqText_minMax").html("[ "+tmpDisp[0]+","+tmpDisp[1]+" ]<br>[ "+tmpDisp[2]+","+tmpDisp[3]+" ]");
		$("#marqText_size").html("[ "+Math.abs(Math.floor(tmpDisp[2]-tmpDisp[0]))+" , "+Math.abs(Math.floor(tmpDisp[3]-tmpDisp[1]))+" ]");
	}
	
	var tmpBuild=new Array();
	tmpBuild[0]=Math.floor(Math.min(tmpDisp[0],tmpDisp[2]));
	tmpBuild[1]=Math.floor(Math.min(tmpDisp[1],tmpDisp[3]));
	tmpBuild[2]=Math.floor(Math.max(tmpDisp[0],tmpDisp[2]));
	tmpBuild[3]=Math.floor(Math.max(tmpDisp[1],tmpDisp[3]));
	updateMarqueeHandles(curScale,tmpBuild,"marqSelect");
	if(storeKeyHold==1){
		setTimeout(function(){grabHandle(scaler,grab,mPos,init,marqWindow,update);},20);
	}else{
		key_hide=0;
		storeKeyHold=0;
		if(update==0){
			selectToolWindow[0]=Math.floor(Math.min(tmpDisp[0],tmpDisp[2]));
			selectToolWindow[1]=Math.floor(Math.min(tmpDisp[1],tmpDisp[3]));
			selectToolWindow[2]=Math.floor(Math.max(tmpDisp[0],tmpDisp[2]));
			selectToolWindow[3]=Math.floor(Math.max(tmpDisp[1],tmpDisp[3]));
			$("#marq_txx").val(1);
			$("#marq_tyx").val(0);
			$("#marq_txy").val(0);
			$("#marq_tyy").val(1);
			$("#marq_txz").val(0);
			$("#marq_tyz").val(0);
			updateMarqueeHandles(curScale,selectToolWindow,"marqSelect");
			clearScreen('selectDraw');
			drawGuide('selectDraw', selectToolWindow, selectToolColor,[5,5]);
			$("#marqText_minMax").html("[ "+selectToolWindow[0]+","+selectToolWindow[1]+" ]<br>[ "+selectToolWindow[2]+","+selectToolWindow[3]+" ]");
			$("#marqText_size").html("[ "+Math.floor(selectToolWindow[2]-selectToolWindow[0])+" , "+Math.floor(selectToolWindow[3]-selectToolWindow[1])+" ]");
			pullMarqueeSelection();
		}
	}
}

function grabHandleTrans(transType,grab,mPos,pivot,multArray,marqWindow,init){
	var dl=$("#documentLayers");
	var scaler=1;//curScale;
	var cW=Math.abs(marqWindow[2]-marqWindow[0])*scaler;
	var cH=Math.abs(marqWindow[1]-marqWindow[3])*scaler;
	var cL=marqWindow[0]*scaler+$(dl).position().left;
	var cT=marqWindow[1]*scaler+$(dl).position().top;
	var centerX=(marqWindow[0]+marqWindow[2])/2;
	var centerY=(marqWindow[1]+marqWindow[3])/2;
	var pivotX=sW/2;
	var pivotY=sH/2;
	if(init==1){
		menuVis(0,0);
		key_hide=1;
		menuVis(1,0);
		
		var gL=parseInt($("#"+grab).css('left'));
		var gT=parseInt($("#"+grab).css('top'));
		var pX,pY;
		pX=0;//(cW*pivot[0]+(centerX-cW/2));
		pY=0;//(cH*pivot[1]+(centerY-cH/2));
		var tranMatrix=[ parseFloat($('#marq_txx').val()),parseFloat($('#marq_tyx').val()),parseFloat($('#marq_txy').val()),parseFloat($('#marq_tyy').val()),parseFloat($('#marq_txz').val()),parseFloat($('#marq_tyz').val()) ];
		var scale=[ $('#marq_scaleX').val(), $('#marq_scaleY').val() ];
		var xMag=Math.sqrt( (tranMatrix[0]*tranMatrix[0]) + (tranMatrix[1]*tranMatrix[1]) );
		var yMag=Math.sqrt( (tranMatrix[2]*tranMatrix[2]) + (tranMatrix[3]*tranMatrix[3]) );
		
		mPos=[mouseX,mouseY,gL,gT,0,[-1,-1],parseFloat($('#marq_rot').val()),1,[pX,pY],tranMatrix,[xMag,yMag], scale];
		
		var curCan=document.getElementById(curCanvas);
		var curDraw=curCan.getContext('2d');
		curDraw.clearRect(marqWindow[0],marqWindow[1],(marqWindow[2]-marqWindow[0]),(marqWindow[3]-marqWindow[1]));
		var controls=8;
		var name='marqSelect';
		for(var x=0; x<controls; ++x){
			$("#"+name+"_ctl"+x).css({'visibility':'hidden'});
		}
		controlsRot=17;
		for(var x=0; x<controlsRot; ++x){
			$("#"+name+"Trans_ctl"+x).css({});
		}
	}
	
	var selectDrawCanvas=document.getElementById('selectDraw');
	var selectDrawCtx=selectDrawCanvas.getContext('2d');
	
	var storeCan=document.getElementById('selectStoreCanvas');
	var put=storeCan.getContext('2d');
	var toCan=document.getElementById('selectDisplayCanvas');
	var toPut=toCan.getContext('2d');
	var genCan=document.createElement('canvas');
	genCan.width=sW;
	genCan.height=sH;
	var draw=toCan.getContext('2d');
	draw.clearRect(0,0,sW,sH);
	draw.drawImage(storeCan,0,0);
	selectDrawCtx.clearRect(0,0,sW,sH);
	var er=0;
	
	var moveX=mouseX-mPos[0];
	var moveY=mouseY-mPos[1];
	var rot=moveX/100;
	var skew=moveY/100;
	if(transType == 'rotate'){
		
		var aCalc=[centerX-mouseX,centerY-mouseY];
		var op,adj;
		op=aCalc[1];
		adj=aCalc[0];
		var rotRad=Math.atan(op/adj);
		var val;
		if(init==1){
			mPos[4]=rotRad;
			val=rotRad;
		}else{
			val=rotRad-mPos[4];
			mPos[4]=rotRad;
		}
		if(Math.abs(val)>2){
			val=(3.14159265358979-Math.abs(val))*(val/Math.abs(val))*-1;
		}
		if(init!=1){
			mPos[6]=mPos[6]+val;
			draw.setTransform(1,0,0,1,0,0);
			draw.translate(centerX,centerY);
		draw.transform(mPos[9][0],mPos[9][1],mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
			draw.rotate(mPos[6]);
			draw.translate(-centerX,-centerY);
			
			selectDrawCtx.setTransform(1,0,0,1,0,0);
			selectDrawCtx.translate(centerX,centerY);
		selectDrawCtx.transform(mPos[9][0],mPos[9][1],mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
			selectDrawCtx.rotate(mPos[6]);
			selectDrawCtx.translate(-centerX,-centerY);
		}
	}else if(transType == 'n-skew'){
		skew=moveX/200;
		draw.setTransform(1,0,0,1,0,0);
		draw.translate(centerX,centerY);
	draw.transform(mPos[9][0],mPos[9][1],mPos[9][2]-skew,mPos[9][3],mPos[9][4],mPos[9][5]);
		draw.rotate(mPos[6]);
		draw.translate(-centerX,-centerY);
		
		selectDrawCtx.setTransform(1,0,0,1,0,0);
		selectDrawCtx.translate(centerX,centerY);
	selectDrawCtx.transform(mPos[9][0],mPos[9][1],mPos[9][2]-skew,mPos[9][3],mPos[9][4],mPos[9][5]);
		selectDrawCtx.rotate(mPos[6]);
		selectDrawCtx.translate(-centerX,-centerY);
	}else if(transType == 'e-skew'){
		skew=moveY/200;
		draw.setTransform(1,0,0,1,0,0);
		draw.translate(centerX,centerY);
	draw.transform(mPos[9][0],mPos[9][1]-skew,mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
		draw.rotate(mPos[6]);
		draw.translate(-centerX,-centerY);
		
		selectDrawCtx.setTransform(1,0,0,1,0,0);
		selectDrawCtx.translate(centerX,centerY);
	selectDrawCtx.transform(mPos[9][0],mPos[9][1]-skew,mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
		selectDrawCtx.rotate(mPos[6]);
		selectDrawCtx.translate(-centerX,-centerY);
	}else if(transType == 'w-skew'){
		skew=moveY/200;
		draw.setTransform(1,0,0,1,0,0);
		draw.translate(centerX,centerY);
	draw.transform(mPos[9][0],mPos[9][1]+skew,mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
		draw.rotate(mPos[6]);
		draw.translate(-centerX,-centerY);
		
		selectDrawCtx.setTransform(1,0,0,1,0,0);
		selectDrawCtx.translate(centerX,centerY);
	selectDrawCtx.transform(mPos[9][0],mPos[9][1]+skew,mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
		selectDrawCtx.rotate(mPos[6]);
		selectDrawCtx.translate(-centerX,-centerY);
	}else if(transType == 's-skew'){
		skew=moveX/200;
		draw.setTransform(1,0,0,1,0,0);
		draw.translate(centerX,centerY);
	draw.transform(mPos[9][0],mPos[9][1],mPos[9][2]+skew,mPos[9][3],mPos[9][4],mPos[9][5]);
		draw.rotate(mPos[6]);
		draw.translate(-centerX,-centerY);
		
		selectDrawCtx.setTransform(1,0,0,1,0,0);
		selectDrawCtx.translate(centerX,centerY);
	selectDrawCtx.transform(mPos[9][0],mPos[9][1],mPos[9][2]+skew,mPos[9][3],mPos[9][4],mPos[9][5]);
		selectDrawCtx.rotate(mPos[6]);
		selectDrawCtx.translate(-centerX,-centerY);
	}else if(transType == 'scale'){
		var perc=new Array();
		perc[0]=(1-((mPos[0]-mouseX)*multArray[0])/cW);
		perc[1]=(1-((mPos[1]-mouseY)*multArray[1])/cH);
		perc[0]=perc[0]* (parseFloat($('#marq_scaleX').val()));
		perc[1]=perc[1]* (parseFloat($('#marq_scaleY').val()));
		draw.setTransform(1,0,0,1,0,0);
	//draw.setTransform(mPos[9][0],mPos[9][1],mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
	draw.setTransform(1,0,0,1,mPos[9][4],mPos[9][5]);
		draw.translate(centerX,centerY);
		draw.scale(perc[0], perc[1]);
		draw.rotate(mPos[6]);
		draw.translate(-centerX,-centerY);
		//draw.translate(mPos[9][2],mPos[9][5]);
		
		selectDrawCtx.setTransform(1,0,0,1,0,0);
	//selectDrawCtx.setTransform(mPos[9][0],mPos[9][1],mPos[9][2],mPos[9][3],mPos[9][4],mPos[9][5]);
	selectDrawCtx.setTransform(1,0,0,1,mPos[9][4],mPos[9][5]);
		selectDrawCtx.translate(centerX,centerY);
		selectDrawCtx.scale(perc[0], perc[1]);
		selectDrawCtx.rotate(mPos[6]);
		selectDrawCtx.translate(-centerX,-centerY);
		//selectDrawCtx.translate(mPos[9][2],mPos[9][5]);
	}else if(transType == 'move'){
		draw.setTransform(1,0,0,1,0,0);
		draw.translate(centerX,centerY);
		draw.transform(mPos[9][0],mPos[9][1],mPos[9][2],mPos[9][3],mPos[9][4]+moveX,mPos[9][5]+moveY);
		draw.rotate(mPos[6]);
		draw.translate(-centerX,-centerY);
		
		selectDrawCtx.setTransform(1,0,0,1,0,0);
		selectDrawCtx.translate(centerX,centerY);
		selectDrawCtx.transform(mPos[9][0],mPos[9][1],mPos[9][2],mPos[9][3],mPos[9][4]+moveX,mPos[9][5]+moveY);
		selectDrawCtx.rotate(mPos[6]);
		selectDrawCtx.translate(-centerX,-centerY);
	}else{
		storeKeyHold=0;
		deselectMarquee('selectDraw',1);
		tmpName=tempWindow('There was a Selection Tool error. Try your selection again.',[-1,-1],'',25,1,0,0);
		er=1;
		key_hide=0;
		storeKeyHold=0;
		return 'Error';
	}
	if(er==0){
		//clearScreen('selectDisplayCanvas');
		
		/*
		//Prevent ghosting
		var genCanTo=document.createElement('canvas');
		genCanTo.width=sW;
		genCanTo.height=sH;
		var genDrawTo=genCanTo.getContext('2d');
		genDrawTo.drawImage(genCan,0,0);
		toPut.clearRect(0,0,sW,sH);
		*/
		
		
		//toDraw.drawImage(storeCan,0,0);
		toPut.drawImage(genCan,0,0);
		drawGuide('selectDraw', selectToolWindow, selectToolColor,[5,5]);
		//toPut.clearRect(0,0,sW,sH);
		//var getDraw=draw.getImageData(0,0,sW,sH);
		//toPut.putImageData(getDraw,0,0);
		
		if(transType == 'move'){
			var tempMarquee=new Array();
			tempMarquee[0]=marqWindow[0]+moveX;
			tempMarquee[1]=marqWindow[1]+moveY;
			tempMarquee[2]=marqWindow[2]+moveX;
			tempMarquee[3]=marqWindow[3]+moveY;
			updateMarqueeHandles(curScale,tempMarquee,"marqSelect");
		}
	}
	//draw.restore();
	
	init=0;
	if(storeKeyHold==1){
		setTimeout(function(){grabHandleTrans(transType,grab,mPos,pivot,multArray,marqWindow,init);},20);
	}else{
		key_hide=0;
		storeKeyHold=0;
		if(transType == 'rotate'){
			$("#marq_rot").val(mPos[6]);
		}else if(transType == 'n-skew'){
			$("#marq_txx").val(mPos[9][0]);
			$("#marq_tyx").val(mPos[9][1]);
			$("#marq_txy").val(mPos[9][2]-skew);
			$("#marq_tyy").val(mPos[9][3]);
			$("#marq_txz").val(mPos[9][4]);
			$("#marq_tyz").val(mPos[9][5]);
		}else if(transType == 'e-skew'){
			$("#marq_txx").val(mPos[9][0]);
			$("#marq_tyx").val(mPos[9][1]-skew);
			$("#marq_txy").val(mPos[9][2]);
			$("#marq_tyy").val(mPos[9][3]);
			$("#marq_txz").val(mPos[9][4]);
			$("#marq_tyz").val(mPos[9][5]);
		}else if(transType == 'w-skew'){
			$("#marq_txx").val(mPos[9][0]);
			$("#marq_tyx").val(mPos[9][1]+skew);
			$("#marq_txy").val(mPos[9][2]);
			$("#marq_tyy").val(mPos[9][3]);
			$("#marq_txz").val(mPos[9][4]);
			$("#marq_tyz").val(mPos[9][5]);
		}else if(transType == 's-skew'){
			$("#marq_txx").val(mPos[9][0]);
			$("#marq_tyx").val(mPos[9][1]);
			$("#marq_txy").val(mPos[9][2]+skew);
			$("#marq_tyy").val(mPos[9][3]);
			$("#marq_txz").val(mPos[9][4]);
			$("#marq_tyz").val(mPos[9][5]);
		}else if(transType == 'scale'){
			$("#marq_txx").val(mPos[9][0]*perc[0]);
			$("#marq_tyx").val(mPos[9][1]);
			$("#marq_txy").val(mPos[9][2]);
			$("#marq_tyy").val(mPos[9][3]*perc[1]);
			$("#marq_txz").val(mPos[9][4]);
			$("#marq_tyz").val(mPos[9][5]);
			$('#marq_scaleX').val(perc[0]);
			$('#marq_scaleY').val(perc[1]);
		}else if(transType == 'move'){
			$("#marq_txx").val(mPos[9][0]);
			$("#marq_tyx").val(mPos[9][1]);
			$("#marq_txy").val(mPos[9][2]);
			$("#marq_tyy").val(mPos[9][3]);
			$("#marq_txz").val(mPos[9][4]+moveX);
			$("#marq_tyz").val(mPos[9][5]+moveY);
		}
		updateMarqueeHandles(curScale,marqWindow,"marqSelect");
	}
}

function deselectMarquee(drawCanvas,force){
	var mPos=toCanvasSpace(mouseX,mouseY);
	zoomMouseX=mPos[0];
	zoomMouseY=mPos[1];

	if(force==1 || zoomMouseX<selectToolWindow[0] || zoomMouseY<selectToolWindow[1] || zoomMouseX>selectToolWindow[2] || zoomMouseY<selectToolWindow[3]){
		$("#marqueeScalers").html('');
		clearScreen(drawCanvas);
		if(selectTool!=0){
			selectTool=1;
		}
		selectToolWindow=[sW,sH,0.0];
		selectToolDisplay=[sW,sH,0.0];
		var canvas=document.getElementById('selectDraw');
		var draw=canvas.getContext('2d');
		draw.setTransform(1,0,0,1,0,0);
		$("#marq_txx").val(1);
		$("#marq_tyx").val(0);
		$("#marq_txy").val(0);
		$("#marq_tyy").val(1);
		$("#marq_txz").val(0);
		$("#marq_tyz").val(0);
		
		$("#selectDisplayCanvas").css({'zIndex':'-11','visibility':'hidden'});
		clearScreen("selectDisplayCanvas");
		clearScreen("selectStoreCanvas");
		key_hide=0;
		selectToolVis=0;
		if(active>=1){
			updateLayerCanvas(curLayer);
		}
	}
}
function fillMarquee(){
	drawRect(curCanvas, selectToolWindow);
	updateLayerCanvas(curLayer);
	pullMarqueeSelection();
}
function clearMarquee(){	
	var canvas=document.getElementById(curCanvas);
	var draw=canvas.getContext('2d');
	draw.clearRect(selectToolWindow[0], selectToolWindow[1], (selectToolWindow[2]-selectToolWindow[0]), (selectToolWindow[3]-selectToolWindow[1]));
	updateLayerCanvas(curLayer);
	pullMarqueeSelection();
}
function copyMarqueeIntoLayer(){
	var curTemp=curCanvas;
	var canvas=document.getElementById(curTemp);
	var draw=canvas.getContext('2d');
	var current=draw.getImageData(selectToolWindow[0], selectToolWindow[1],  (selectToolWindow[2]-selectToolWindow[0]), (selectToolWindow[3]-selectToolWindow[1]));
	addLayer();
	setTimeout(function(){
		var toCan=document.getElementById(curCanvas);
		var toDraw=toCan.getContext("2d");
		toDraw.putImageData(current,selectToolWindow[0], selectToolWindow[1]);
		updateLayerCanvas(curLayer);
	},20);
}

function focusBlurMarquee(name,vis){
	var mult;
	if(vis==1){
		mult=10;
	}else{
		mult=1;
	}
	$("#"+name+"_res").css('zIndex',501*mult);
	$("#"+name+"_menu").css('zIndex',500*mult);
	var controls=8;
	for(var x=0; x<controls; ++x){
		$("#"+name+"_ctl"+x).css('zIndex',504*mult);
	}
	var controlsRot=16;
	for(var x=0; x<controlsRot; ++x){
		if(x<=8){
			$("#"+name+"Trans_ctl"+x).css('zIndex',502*mult);
		}else{
			$("#"+name+"Trans_ctl"+x).css('zIndex',503*mult);
		}
	}
}

function pullMarqueeSelection(){
	var toCan=document.getElementById('selectDisplayCanvas');
	var storeCan=document.getElementById('selectStoreCanvas');
	var maskCan=document.getElementById('selectMaskCanvas');
	toCan.width=sW;
	toCan.height=sH;
	
	if(devMode==1){	
		$("#selectDisplayCanvas").css({'zIndex':'500','visibility':'visible'});
	}
	storeCan.width=sW;
	storeCan.height=sH;
	maskCan.width=sW;
	maskCan.height=sH;
	clearScreen("selectDisplayCanvas");
	clearScreen("selectStoreCanvas");
	clearScreen("selectMaskCanvas");
	try{
		var canvas=document.getElementById(curCanvas);
		var draw=canvas.getContext('2d');
		var current=draw.getImageData(selectToolWindow[0], selectToolWindow[1],  (selectToolWindow[2]-selectToolWindow[0]), (selectToolWindow[3]-selectToolWindow[1]));

		var toDraw=toCan.getContext("2d");
		toDraw.putImageData(current,selectToolWindow[0], selectToolWindow[1]);
		toDraw=storeCan.getContext("2d");
		toDraw.putImageData(current,selectToolWindow[0], selectToolWindow[1]);
		
		toDraw=maskCan.getContext("2d");
		toDraw.fillStyle='#ff0000';
		toDraw.fillRect(selectToolWindow[0], selectToolWindow[1],  (selectToolWindow[2]-selectToolWindow[0]), (selectToolWindow[3]-selectToolWindow[1]));
		
	}catch(err){}
}
function putMarqueeSelection(){
	var canvas=document.getElementById('selectDisplayCanvas');
	var draw=canvas.getContext('2d');
	
	var toCan=document.getElementById(curCanvas);
	var toDraw=toCan.getContext("2d");
	toDraw.drawImage(canvas,0,0);
	setTimeout(function(){
		deselectMarquee('selectDraw',1);
	},30);
}
function revertMarqueeSelection(){
	var canvas=document.getElementById('selectStoreCanvas');
	var draw=canvas.getContext('2d');
	
	var toCan=document.getElementById(curCanvas);
	var toDraw=toCan.getContext("2d");
	toDraw.drawImage(canvas,0,0);
	canvas=document.getElementById('selectDraw');
	draw=canvas.getContext('2d');
	draw.setTransform(1,0,0,1,0,0);
	draw.clearRect(0,0,sW,sH);
	drawGuide('selectDraw', selectToolWindow, selectToolColor,[5,5]);
	selectTool=2;
	genMarqueeHandles(curCanvas);
}
