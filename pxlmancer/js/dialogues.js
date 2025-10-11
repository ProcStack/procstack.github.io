
function dialogueVis(vis){
	if(vis == 1){
		dialogueOpen=1;
		menuVis(0,0);
		$("#dialogues").css({'z-index':'9070','visibility':'visible','height':origSH,'width':origSW});
	}else{
		dialogueOpen=0;
		menuVis(1,0);
		$("#dialogues").css({'z-index':'-5','visibility':'hidden'});
	}
}
function dialogueOption(vis,div){
	if(vis == 1){
		dialogueVis(1);
		$("#"+div).css({'z-index':'9030','visibility':'visible'});
		openDialogue=div;
	}else{
		if(onDia==0 || mobile==1){
			dialogueVis(0);
			$("#"+div).css({'z-index':'-5','visibility':'hidden'});
			openDialogue='';
		}
	}
}
function dialogueVisToggle(vis,div){
	if(vis == 1){
		$("#"+div).css({'z-index':'15030','visibility':'visible'});
		openDialogue=div;
		geoToolStopDraw=1;
	}else{
		$("#"+div).css({'z-index':'-5','visibility':'hidden'});
		geoToolStopDraw=0;
		openDialogue="";
	}
}
function buildDialogues(){
	var dialogueParent=$("#dialogues");
	$(dialogueParent).css({"height":sH+"px","width":sW+"px"});
	var dialogueList=$(dialogueParent).children();
	var divHeights=new Array();
	var maxHeight=0;
	var headerHeight=0;
	var height;
	var pad=5;
	var addWidth=30;
	var controlText,innerWidth,divHeight,divWidth,canvasHeight,canvasWidth,move,moveDiv,div,divID,tgGrp,tgVal,html,headers,button,bodySec,footer,parentClass,parentHeight;
	var headerCount=1;
	var buttonCount=1;
	var headersList=new Array();
	var buttons=new Array();
	var bodies=new Array();
	var footers=new Array();
	var colorSwatches=new Array();
	var swatch="";
	var buffer=0;
	var mainDialogues=new Array();
	mainDialogues=$(dialogueParent).find(".dialogueWindow");
	for(x=0;x<mainDialogues.length;x++){
		div=mainDialogues[x];
		if($(div).attr("id")=="mobileMenu"){
			$(div).css({"height":(sH+sH*.1)+"px","width":(sW+sW*.1)+"px","left":(-sW*.05)+"px"});
		}else{
			//$(div).css({"height":sH+"px","width":sW+"px"});
			//$(div).css({"height":"100px","width":"100px"});
		}
	}
	mainDialogues=$(dialogueParent).find(".dialogueTable");
	for(x=0;x<mainDialogues.length;x++){
		div=mainDialogues[x];
		if($(div).parent().attr("id")=="mobileMenu"){
			$(div).css({"height":sH+"px","width":(sW+sW*.1)+"px","left":(-sW*.05)+"px"});
		}else{
			//$(div).css({"height":sH+"px","width":sW+"px"});
			//$(div).css({"height":"100%","width":"100%"});
		}
	}
	
	for(x=0;x<dialogueList.length;x++){
		div=dialogueList[x];
		divHeight=$(div).height();
		headersList=$(div).find(".headerDia");
		for(var i=0;i<headersList.length;i++){
			headers=headersList[i];
			innerWidth=$(headers).width();
			parentClass=$(div).parent();
			parentClass=$(headers).parent();
			//$(parentClass).width($(headers).width()+addWidth);
			//$(parentClass).css({'position':'relative','left':-addWidth/2});

			divHeight=$(headers).height();
			divWidth=$(headers).width()+addWidth;
			if(divHeight>headerHeight){
				headerHeight=divHeight;
			}
			parentHeight=parentHeight-divHeight;

			controlText=$(headers).html();
			html="<canvas style='z-index:0;position:relative;' id='dia"+$(dialogueList[x]).attr("id")+i+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html=html+"<div style='position:relative;bottom:"+divHeight+";left:"+(divWidth/2-innerWidth/2)+";z-index:100;width:"+divWidth+";' id='dia"+$(dialogueList[x]).attr("id")+i+"Div'><b>"+controlText+"</b></div>";
			$(headers).html(html);
			$(headers).height(divHeight);
			$(headers).width(divWidth);//+400);
			//bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
			height=bevelShape(('dia'+$(dialogueList[x]).attr("id")+i+'Div'),0,0,('dia'+$(dialogueList[x]).attr("id")+i+'Canvas'),.9,10,3,1,1,1,0,0,0,0);
			headerCount+=1;
		}
		headersList=$(div).find(".subHeaderDia");
		for(var i=0;i<headersList.length;i++){
			headers=headersList[i];
			innerWidth=$(headers).width();
			parentClass=$(div).parent();
			parentClass=$(headers).parent();
			//$(parentClass).width($(headers).width()+addWidth);
			//$(parentClass).css({'position':'relative','left':-addWidth/2});

			divHeight=$(headers).height();
			divWidth=$(headers).width()+addWidth;
			if(divHeight>headerHeight){
				headerHeight=divHeight;
			}
			parentHeight=parentHeight-divHeight;

			controlText=$(headers).html();
			html="<canvas style='z-index:0;position:relative;' id='dia"+$(dialogueList[x]).attr("id")+i+"SubCanvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html=html+"<div style='position:relative;bottom:"+divHeight+";left:"+(divWidth/2-innerWidth/2)+";z-index:1;width:"+divWidth+";' id='dia"+$(dialogueList[x]).attr("id")+i+"SubDiv'><b>"+controlText+"</b></div>";
			$(headers).html(html);
			$(headers).height(divHeight);
			$(headers).width(divWidth);//+400);
			//bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
			height=bevelShape(('dia'+$(dialogueList[x]).attr("id")+i+'SubDiv'),0,0,('dia'+$(dialogueList[x]).attr("id")+i+'SubCanvas'),.9,10,3,1,0,0,0,0,0,0);
			headerCount+=1;
		}
		bodies=$(div).find(".body");
		for(i=0;i<bodies.length;i++){
			bodySec=bodies[i];
			divHeight=$(bodySec).height();
			//divHeight=$($(bodySec).children()[0]).height();
			divWidth=$(bodySec).parent().width()+addWidth;
			$(bodySec).width(divWidth);
			$(bodySec).height(divHeight);
			controlText=$(bodySec).html();
			parentClass=$(bodySec).parent();
			var buttonId=$(parentClass).attr("id"); //$(button).attr("id")
			html="<canvas style='z-index:"+(i)+";position:relative;' id='body"+x+"-"+i+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html=html+"<div style='position:relative;bottom:"+(divHeight)+";z-index:"+(i+1)+";width:"+divWidth+";height:"+divHeight+"' id='body"+x+"-"+i+"Div'>"+controlText+"</div>";
			$(bodySec).html(html);
			$(bodySec).height(divHeight);
			$(bodySec).width(divWidth);
			height=bevelShape(('body'+x+"-"+i+'Div'),1,0,('body'+x+"-"+i+'Canvas'),.8,10,3,1,0,2,0,2,0,0);
		}

		buttons=$(div).find(".buttonDia");
		buttonCount+=0;
		for(i=0;i<buttons.length;i++){
			button=buttons[i];
			divHeight=$(button).height()+addWidth;
			divWidth=$(button).width()+addWidth;
			$(button).width(divWidth);
			$(button).height(divHeight);
			if(!$(button).is("[id]")){
				$(button).attr('id', "bDiaGen-"+x+"-"+i);
			}
			divID=$(button).attr('id');
			tgGrp=$(button).attr('grp');
			tgVal=$(button).attr('tgl');
			
			if(tgGrp==-3){ // Find and generate dividers
				divHeight=7;
				controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:0px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:1px;background-color:#669999;'>&nbsp;</div></div>";
			}else if(tgGrp==-2){ // Find and generate dividers
				divHeight=13;
				controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:0px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:4px;background-color:#669999;'>&nbsp;</div></div>";
			}else{
				controlText=$(button).html();
			}
			parentClass=$(button).parent();
			var buttonId=$(parentClass).attr("id"); //$(button).attr("id")
			html="<canvas style='z-index:"+(i+900)+";position:relative;' id='button"+x+"-"+i+"-"+buttonCount+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html=html+"<div style='position:relative;bottom:"+(divHeight*(3/4))+";z-index:"+(i+1001)+";width:"+divWidth+";height:"+divHeight+"' id='button"+x+"-"+i+"-"+buttonCount+"Div'>"+controlText+"</div>";
			$(button).html(html);
			$(button).height(divHeight);
			$(button).width(divWidth);
			//bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
			height=bevelShape(('button'+x+"-"+i+"-"+buttonCount+'Div'),1,0,('button'+x+"-"+i+"-"+buttonCount+'Canvas'),.8,10,3,1,0,2,0,2,0,tgVal);
			if(tgGrp>-2){
				$(button).attr("onMouseOver","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+x+"-"+i+"-"+buttonCount+"Div'),1,0,('button"+x+"-"+i+"-"+buttonCount+"Canvas'),.8,10,3,1,0,2,0,2,1,tVal);");
				$(button).attr("onMouseDown","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+x+"-"+i+"-"+buttonCount+"Div'),1,0,('button"+x+"-"+i+"-"+buttonCount+"Canvas'),.8,10,3,1,0,2,0,2,2,tVal);");
				$(button).attr("onMouseUp","var tVal=$('#"+divID+"').attr('tgl');var tGrp=$('#"+divID+"').attr('grp');changeMode('"+divID+"',tVal,tGrp);tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+x+"-"+i+"-"+buttonCount+"Div'),1,0,('button"+x+"-"+i+"-"+buttonCount+"Canvas'),.8,10,3,1,0,2,0,2,1,tVal);");
				$(button).attr("onMouseOut","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('button"+x+"-"+i+"-"+buttonCount+"Div'),1,0,('button"+x+"-"+i+"-"+buttonCount+"Canvas'),.8,10,3,1,0,2,0,2,0,tVal);");
				//$(button).on("taphold",function(){$(button).attr("onClick")+"bevelShape(('button"+x+"-"+i+"-"+buttonCount+"Div'),1,0,('button"+x+"-"+i+"-"+buttonCount+"Canvas'),.8,10,3,1,0,2,0,2,2,tVal);"});
			}else{
				$(button).css({'cursor':'auto'});
			}
			buttonCount+=1;
		}


		buttons=$(div).find(".sliderDia");
		offLeft=0;
		for(i=0;i<buttons.length;i++){
			button=buttons[i];
			if(mobile==0){
				divHeight=$(button).height()+10;
			}else{
				divHeight=$(button).height()+40;
			}
			//Use previous width, found in buttons
			//divWidth=$(button).parent().width();

			//$(button).attr('id', "sliderGen-"+x+"-"+i)
			divID=$(button).attr('id');
			curButton=divID+"_sliderDia";
			slGrp=$(button).attr('grp');
			slTgl=$(button).attr('tgl');
			slVal=$(button).attr('val');
			slMin=$(button).attr('min');
			slMax=$(button).attr('max');
			slSteps=$(button).attr('steps');
			slTxtWidth=27;
			controlText=$(button).text();
			
			html="<canvas style='z-index:0;' id='button"+curButton+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			// Inner Text
			
			if(mobile==0){
				html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:0px;z-index:2;' id='button"+curButton+"Div'>&nbsp;<span class='sliderText' style='opacity:0.85;font-size:160%;'>"+controlText+"</span></div>\n";
			}else{
				html=html+"<div align='left' style='position:relative;bottom:"+divHeight+";left:0px;z-index:2;' id='button"+curButton+"Div'>&nbsp;<span class='sliderText' style='opacity:0.85;font-size:200%;'>"+controlText+"</span></div>\n";
			}
			// Slider
			html=html+"<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+divHeight*2+";left:0px;z-index:1;'><div style='height:3px;width:"+(divWidth+10-slTxtWidth*2)+"px;overflow:hidden;position:relative;top:"+(divHeight/2-1)+"px;background-color:#769f9f;'>&nbsp;</div></div>";
			// Number Field
			if(mobile==0){
				html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+(divHeight*3-4)+";right:4px;z-index:3;text-align:right;'>";
				html=html+"<form id='"+divID+"_form'><input type='text' value='"+slVal+"' id='"+divID+"_val' class='sliderValue' size='3' min='"+slMin+"' max='"+slMax+"' style='width:"+slTxtWidth+"px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form></div>";
			}else{
				html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+(divHeight*2.75-4)+";right:4px;z-index:3;text-align:right;'>";
				html=html+"<form id='"+divID+"_form'><input type='text' height='"+divHeight+"' value='"+slVal+"' id='"+divID+"_val' class='sliderValue' size='3' min='"+slMin+"' max='"+slMax+"' style='width:"+slTxtWidth+"px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form></div>";
			}
			// Slider Control
			var slCntlWidth=13;
			var slCntlHeight;
			if(mobile==0){
				slCntlHeight=24;
			}else{
				slCntlHeight=54;
			}
			var val=Math.max(0,Math.min(1,(slVal-slMin)/(slMax-slMin)));
			var vmax=(divWidth/2-34)-7;
			var vmin=4;
			var diffx=val*(vmax-vmin)+vmin;
			//var vmax=(divWidth-34)-7;
			//var vmin=4;
			//var diffx=Math.min(vmax,Math.max(vmin,slVal));
			//html=html+"<div id='slider"+divID+"DivDia' leftPad='"+vmin+"' rightPad='"+vmax+"' style='opacity:0.7;z-index:4;position:relative;bottom:"+(divHeight*4-1)+"px;left:"+diffx+"px;width:"+slCntlWidth+"px;height:"+slCntlHeight+"px;'>";
			html=html+"<div id='slider"+divID+"Div' leftPad='"+(-divWidth/2+12)+"' rightPad='"+vmax+"' style='opacity:0.7;z-index:4;position:relative;bottom:"+(divHeight*4-1)+"px;left:"+(-divWidth/2+12)+"px;width:"+slCntlWidth+"px;height:"+slCntlHeight+"px;'>";
			html=html+"<canvas id='slider"+curButton+"Canvas' height='"+slCntlHeight+"px' width='"+slCntlWidth+"px'></canvas></div>\n";
			//Slider Click Field
			html=html+"<div id='sliderClick_"+divID+"' onmousedown=\"slDown=1;slideControl('slider"+divID+"Div',"+mouseX+",0,"+slMin+","+slMax+","+slSteps+",'"+divID+"_val',1,0,'');\" onmouseup='slDown=0;' onmouseout='slDown=0;' style='overflow:hidden;height:"+divHeight+"px;width:"+(divWidth-35)+"px;position:relative;bottom:"+(divHeight*5-2)+"px;left:-14px;z-index:5;cursor:col-resize;'>&nbsp;</div>";

			$(button).html(html);
			if(mobile==0){
				$(button).height(divHeight);
			}else{
				$(button).height(divHeight-20);
			}
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
			height=bevelShape(('button'+curButton+'Div'),1,0,('button'+curButton+'Canvas'),.8,10,3,1,0,2,0,2,0,tgVal);
			sliderShape('slider'+divID+'Div','slider'+curButton+'Canvas',1,7,1);
			setSlideControl(divID,'');
			buttonCount+=1;
		}

		footers=$(div).find(".footer");
		for(i=0;i<footers.length;i++){
			footer=footers[i];
			innerWidth=$(footer).width();
			divHeight=$(footer).height();
			divWidth=$(footer).width()+addWidth;
			if(divHeight>headerHeight){
				headerHeight=divHeight;
			}
			parentHeight=parentHeight-divHeight;

			controlText=$(footer).html();
			html="<canvas style='z-index:0;' id='footer"+$(dialogueList[x]).attr("id")+i+"Canvas' height='"+(divHeight)+"' width='"+(divWidth+addWidth)+"'></canvas>\n";
			html=html+"<div style='position:relative;bottom:"+divHeight+";left:"+(divWidth/2-innerWidth/2-addWidth/2)+";z-index:1;width:"+divWidth+";' id='footer"+$(dialogueList[x]).attr("id")+i+"Div'>"+controlText+"</div>";
			$(footer).html(html);
			$(footer).height(divHeight);
			$(footer).width(divWidth);//+400);
			//bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
			height=bevelShape(('footer'+$(dialogueList[x]).attr("id")+i+'Div'),0,0,('footer'+$(dialogueList[x]).attr("id")+i+'Canvas'),.9,10,3,1,0,0,1,1,0,0);
		}
	}
}

function sliderGen(div,funcs,zoomSlider){
	for(i=0;i<div.length;i++){
		button=$("#"+div[i]);
		divWidth=$(button).width();
		var fontSize=100;
		if(zoomSlider==0){
			if(mobile==0){
				divHeight=$(button).height()+10;
				fontSize=120;
			}else{
				divHeight=$(button).height()+40;
				fontSize=180;
			}
		}else{
			divHeight=$(button).parent().height();
			fontSize=300;
		}
		//Use previous width, found in buttons
		//divWidth=$(button).parent().width();

		//$(button).attr('id', "sliderGen-"+x+"-"+i)
		divID=div[i];
		curButton=divID+"_sliderDiaWindow";
		slVal=$(button).attr('val');
		slMin=$(button).attr('min');
		slMax=$(button).attr('max');
		slSteps=$(button).attr('steps');
		slTxtWidth=35;
		controlText=$(button).text();
		var html='';
		// Number Field
		if(zoomSlider==0){
			// Slider
			html="<div align='left' style='position:relative;bottom:0px;left:0px;z-index:2;' id='button"+curButton+"Div'>&nbsp;<span class='sliderText' style='opacity:0.85;font-size:"+fontSize+"%;'>"+controlText+"</span></div>\n";
			html=html+"<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth+10)+"px;overflow:hidden;position:relative;bottom:"+divHeight+";left:-20px;z-index:1;'><div style='height:3px;width:"+(divWidth+21-slTxtWidth*2)+"px;overflow:hidden;position:relative;top:"+(divHeight/2)+"px;background-color:#769f9f;'>&nbsp;</div></div>";
			if(mobile==0){
				html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+(divHeight*2-8)+";right:4px;z-index:3;text-align:right;'>";
				html=html+"<form id='"+divID+"_form'><input type='text' value='"+slVal+"' id='"+divID+"_val' size='3' min='"+slMin+"' max='"+slMax+"' style='width:"+slTxtWidth+"px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form></div>";
			}else{
				html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;overflow:hidden;position:relative;bottom:"+(divHeight*1.75-8)+";right:4px;z-index:3;text-align:right;'>";
				html=html+"<form id='"+divID+"_form'><input type='text' height='"+divHeight+"' value='"+slVal+"' id='"+divID+"_val' class='sliderValue' size='3' min='"+slMin+"' max='"+slMax+"' style='width:"+slTxtWidth+"px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;'></form></div>";
			}
		}else{
			// Slider
			html="<div align='left' style='position:relative;bottom:"+(divHeight*.6)+"px;left:10px;z-index:2;' id='button"+curButton+"Div'>&nbsp;<span class='sliderText' style='opacity:0.85;font-size:"+fontSize+"%;'>"+controlText+"</span></div>\n";
			html=html+"<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-100)+"px;overflow:hidden;position:relative;bottom:"+divHeight*2+";left:-55px;z-index:1;'><div style='height:3px;width:"+(divWidth-117)+"px;overflow:hidden;background-color:#769f9f;'>&nbsp;</div></div>";
			html=html+"<div style='opacity:0.8;height:"+divHeight+"px;width:"+(divWidth)+"px;position:relative;bottom:"+(divHeight*5-8)+";right:4px;z-index:3;text-align:right;'>";
			html=html+"<form id='"+divID+"_form'><input type='text' value='"+slVal+"' id='"+divID+"_val' class='sliderValue' size='5' min='"+slMin+"' max='"+slMax+"' style='width:100;height:50px;background-color:#155555;color:#cccccc;border:none;text-align:right;padding-right:2px;font-size:210%;'></form></div>";
		}
		// Slider Control
		var slCntlWidth=13;
		var slCntlHeight;
		if(mobile==0){
			slCntlHeight=24;
		}else{
			slCntlHeight=54;
		}
		if(zoomSlider==1){
			slCntlWidth=25;
			slCntlHeight=80;
		}
		var val=Math.max(0,Math.min(1,(slVal-slMin)/(slMax-slMin)));
		var vmax=(divWidth/2-34)-12;
		var vmin=3;
		if(zoomSlider==1){
			vmax=(divWidth/2-117);
			vmin=divWidth/2;
		}
		var diffx=val*(vmax-vmin)+vmin;
		if(zoomSlider==0){
			html=html+"<div id='slider"+divID+"Div' leftPad='"+(-divWidth/2+11)+"' rightPad='"+vmax+"' style='opacity:0.7;z-index:4;position:relative;bottom:"+(divHeight*3-6)+"px;left:"+(-divWidth/2+12)+"px;width:"+slCntlWidth+"px;height:"+slCntlHeight+"px;'>";
			html=html+"<canvas id='slider"+curButton+"Canvas' height='"+slCntlHeight+"px' width='"+slCntlWidth+"px'></canvas></div>\n";
			//Slider Click Field
			html=html+"<div id='sliderClick_"+divID+"' onmousedown=\"slDown=1;slideControl('slider"+divID+"Div',"+mouseX+",0,"+slMin+","+slMax+","+slSteps+",'"+divID+"_val',1,0,'"+funcs[i]+"');\" onmouseup='slDown=0;' onmouseout='slDown=0;' style='overflow:hidden;height:"+divHeight+"px;width:"+(divWidth-35)+"px;position:relative;bottom:"+(divHeight*4-12)+"px;left:-14px;z-index:5;cursor:col-resize;'>&nbsp;</div>";
		}else{
			html=html+"<div id='slider"+divID+"Div' leftPad='"+(-divWidth/2+11)+"' rightPad='"+vmax+"' style='opacity:0.7;z-index:4;position:relative;bottom:"+(divHeight*6.5)+"px;left:"+(-divWidth/2+12)+"px;width:"+slCntlWidth+"px;height:"+slCntlHeight+"px;'>";
			html=html+"<canvas id='slider"+curButton+"Canvas' height='"+slCntlHeight+"px' width='"+slCntlWidth+"px'></canvas></div>\n";
			//Slider Click Field
			//html=html+"<div id='sliderClick_"+divID+"' onmousedown=\"slDown=1;slideControl('slider"+divID+"Div',"+mouseX+",0,"+slMin+","+slMax+","+slSteps+",'"+divID+"_val',1,0,'"+funcs[i]+"');\" onmouseup='slDown=0;' onmouseout='slDown=0;' style='overflow:hidden;height:"+divHeight+"px;width:"+(divWidth-35)+"px;position:relative;bottom:"+(divHeight*6.5-12)+"px;left:-14px;z-index:5;cursor:col-resize;'>&nbsp;</div>";
		}
		$(button).html(html);
		if(mobile==0){
			$(button).height(divHeight);
		}else{
			$(button).height(divHeight-20);
		}
		$(button).width(divWidth);
		
		
		if(zoomSlider==0){
			$("#"+divID+"_form").on('keyup keypress', function(e){
				keyHit=e.keyCode || e.which;
				if(keyHit===13){
					var chld=$("#"+$(e.target).attr('id')).parent().parent().parent().attr("id");
					setSlideControl(chld,funcs[i]);
					eval(funcs[i]);
					e.preventDefault();
					return false;
				}
			});
			sliderShape('slider'+divID+'Div','slider'+curButton+'Canvas',1,7,1);
		}else{
			sliderShape('slider'+divID+'Div','slider'+curButton+'Canvas',1,12,2);
		}
		
		setSlideControl(divID,'');
	}
}
function displayTouchSlider(vis,perc){
	if(vis == 1){
		var hit=0;
		if( sliderTouch == 0){
			sliderTouch=1;
			// Computer seems to override any overflow when fixed positioning is used, seems mobile needs to be set width/height accordingly
			$("#floatingObjectsParent").css({"zIndex":10030,'visibility':'visible','position':'fixed','top':'0','left':'0','width':origSW,'height':origSH});
			if(!$("#zoomTouchSlider").length){
				var divHeight=100;
				var divWidth=origSW;
				var sliderName='zoomTouchSlider';
				var htmlParent="<div id='"+sliderName+"' style='height:"+divHeight+";width:"+divWidth+";position:fixed;top:100px;left:0px;z-index:5030'></div>";
				var htmlInner="<div align='center' style='position:relative;top:-"+divHeight*.6+"px;'><div id='floatPanel_mobileSlider' val='.65' steps='.01' min='0' max='1'  style='width:"+divWidth+"px;'> Slider Text </div></div>";

				var html="<canvas style='z-index:12000;position:relative;' id='floatSlider"+sliderName+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
				html+="<div style='color:#ffffff;position:relative;z-index:12001;width:"+divWidth+";height:"+divHeight+";text-shadow:2px 2px 3px black;cursor:default;' id='floatSlider"+sliderName+"Div'>"+htmlInner+"</div>";

				$("#floatingObjectsParent").append(htmlParent);
				$("#"+sliderName).append(html);

				bevelShape(('floatSlider'+sliderName+'Div'),0,0,('floatSlider'+sliderName+'Canvas'),.9,0,0,0,1,1,1,1,0,0);
				
				sliderGen(['floatPanel_mobileSlider'],[''],1);
				hit=1;
			}
			var placeY=Math.max(100,origY-300);
			$("#zoomTouchSlider").css({"zIndex":10030,'visibility':'visible','top':placeY+'px'});
		}
		
		if(perc[0] != -1){
			if(hit==1){
				var sliderValInput=$("#"+lockMenuScrollDiv+"_val");
				var sliderMin=parseFloat($(sliderValInput).attr('min'));
				var sliderMax=parseFloat($(sliderValInput).attr('max'));
				$("#floatPanel_mobileSlider_val").attr({'min':sliderMin,'max':sliderMax});
				$("#floatPanel_mobileSlider_val").val(perc[2]);
				$("#floatPanel_mobileSlider").attr({'min':sliderMin,'max':sliderMax,'val':perc[2]});
			}
			
			if(perc[0] == 1){
				var targetText=$("#buttonfloatPanel_mobileSlider_sliderDiaWindowDiv").find(".sliderText");
				$(targetText[0]).text(perc[1]);
			}
			$("#floatPanel_mobileSlider_val").val(perc[2]);
			setSlideControl('floatPanel_mobileSlider','');
		}
	}else{
		sliderTouch=0;
		$("#floatingObjectsParent").css({"zIndex":-510,'visibility':'hidden'});
		if($("#zoomTouchSlider").length){
			$("#zoomTouchSlider").css({"zIndex":-510,'visibility':'hidden'});
		}
	}
}

function menuPulldown(vis,pdid){
	if(vis==1){
		var options=$("#"+pdid).children();
		var html,val,idVal,tog;
		$("#pulldownOptionList").html('');
		for(var x=0; x<options.length;++x){
			html=$(options[x]).text();
			val=$(options[x]).attr('value');
			idVal="diaPulldown_"+val+"_"+x;

			if(val=='-'){
				html="<div class='buttonDia' id='"+idVal+"' tgl='0' grp='-3' >&nbsp;</div>";
			}else{
				if($(options[x]).is(':selected')){
					tog=1;
				}else{
					tog=0;
				}
				html="<div class='buttonDia' id='"+idVal+"' tgl='"+tog+"' val='1' grp='0' onClick=\"$('#"+pdid+"').val('"+val+"');brushToolPulldown('Dia');menuPulldown(0,'')\">"+html+"</div>";
			}
			$("#pulldownOptionList").append(html);
			generateButton(idVal,x);
		}
		var width=$("#pulldownDisplayDialogue").width();
		var height=$("#pulldownDisplayDialogue").height();
		var offX=(origSW-width)/2;
		var offY=(origSH-height)/2;
		
		$("#pulldownDisplayDialogue").css({'position':'fixed','left':offX,'top':offY});
		dialogueVisToggle(0,'mobileMenu');
		dialogueOption(1, 'pulldownDisplay');
	}else{
		dialogueVisToggle(0, 'pulldownDisplay');
		dialogueOption(1,'mobileMenu');
	}
}

function generateButton(id,numb){
	var maxHeight=0;
	var headerHeight=0;
	var height;
	var pad=5;
	var addWidth=30;
	var headerCount=1;
	var buttonCount=1;
	button=$("#"+id);
	divHeight=$(button).height()+addWidth;
	divWidth=$(button).width()+addWidth;
	$(button).width(divWidth);
	$(button).height(divHeight);
	if(!$(button).is("[id]")){
		$(button).attr('id', "bDiaGen-genButton-"+id+"-"+numb);
	}
	divID=$(button).attr('id');
	tgGrp=$(button).attr('grp');
	tgVal=$(button).attr('tgl');
	
	if(tgGrp==-3){ // Find and generate dividers
		divHeight=7;
		controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:0px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:1px;background-color:#669999;'>&nbsp;</div></div>";
	}else if(tgGrp==-2){ // Find and generate dividers
		divHeight=13;
		controlText="<div style='opacity:0.4;height:"+divHeight+"px;width:"+(divWidth-20)+"px;overflow:hidden;position:relative;left:0px;'><div style='height:1px;width:"+(divWidth+20)+"px;overflow:hidden;position:relative;top:4px;background-color:#669999;'>&nbsp;</div></div>";
	}else{
		controlText=$(button).html();
	}
	parentClass=$(button).parent();
	var buttonId=$(parentClass).attr("id"); //$(button).attr("id")
	html="<canvas style='z-index:900"+(i)+";position:relative;' id='"+divID+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
	html=html+"<div style='position:relative;bottom:"+(divHeight*(3/4))+";z-index:900"+(i+1)+";width:"+divWidth+";height:"+divHeight+"' id='"+divID+"Div'>"+controlText+"</div>";
	$(button).html(html);
	$(button).height(divHeight);
	$(button).width(divWidth);
	//bevelShape(div,button,padding,canvas,alpha,bevel,buffer,pad,topLB,topRB,lowLB,lowRB,selected)
	height=bevelShape((divID+'Div'),1,0,(divID+'Canvas'),.8,10,3,1,0,2,0,2,0,tgVal);
	if(tgGrp>-2){
		$(button).attr("onMouseOver","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('"+divID+"Div'),1,0,('"+divID+"Canvas'),.8,10,3,1,0,2,0,2,1,tVal);");
		$(button).attr("onMouseDown","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('"+divID+"Div'),1,0,('"+divID+"Canvas'),.8,10,3,1,0,2,0,2,2,tVal);");
		$(button).attr("onMouseUp","var tVal=$('#"+divID+"').attr('tgl');var tGrp=$('#"+divID+"').attr('grp');changeMode('"+divID+"',tVal,tGrp);tVal=$('#"+divID+"').attr('tgl');bevelShape(('"+divID+"Div'),1,0,('"+divID+"Canvas'),.8,10,3,1,0,2,0,2,1,tVal);");
		$(button).attr("onMouseOut","var tVal=$('#"+divID+"').attr('tgl');bevelShape(('"+divID+"Div'),1,0,('"+divID+"Canvas'),.8,10,3,1,0,2,0,2,0,tVal);");
		$(button).on("taphold",function(){$(button).attr("onClick")+"bevelShape(('"+divID+"Div'),1,0,('"+divID+"Canvas'),.8,10,3,1,0,2,0,2,2,tVal);"});
	}else{
		$(button).css({'cursor':'auto'});
	}
}

function tempWindow(msg,pos,clickFunction,timeDisp,timeFade,gen,hideMenu){
	if(gen==0){
		tempWindowId+=1;
		var addPad=30;
		var winName="tempWindow_"+tempWindowId;
		html="<div id='"+winName+"' style='cursor:pointer;position:absolute;left:0px;top:0px;align:center'>"+msg+"</div>";
		$('#tempWindows').html(html);
		tempWindowDisplay(1);
		if(hideMenu>=1){
			dialogueOpen=1;
			menuVis(0,0);
		}
		divHeight=$("#"+winName).height()+addPad;
		divWidth=$("#"+winName).width()+addPad;
		//alert($("#"+winName).width());
		controlText=$("#"+winName).html();
		//parentClass=$("#"+winName).parent();
		html="<canvas style='z-index:"+(12000+tempWindowId)+";position:relative;' id='body"+winName+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
		html=html+"<div style='color:#ffffff;cursor:pointer;position:relative;left:"+(addPad/2)+"px;bottom:"+(divHeight-(addPad/2))+"px;z-index:"+(12000+tempWindowId+1)+";width:"+divWidth+";height:"+divHeight+";text-shadow:2px 2px 3px black;' id='body"+winName+"Div'>"+controlText+"</div>";
		$("#"+winName).html(html);
		$("#"+winName).height(divHeight);
		$("#"+winName).width(divWidth);
		$("#"+winName).attr("onmouseover","onDia=1;");
		$("#"+winName).attr("onmouseout","onDia=0;");
		var menuSet=clickFunction+";$('#"+winName+"').remove();tempWindowDisplay(0);dialogueOpen=0;";
		if(hideMenu==1 || hideMenu==0){
			menuSet+="if(key_hide==0){menuVis(1,0);}";
		}
		$("#"+winName).attr("onClick",menuSet);
		var wPos=new Array();
		if(typeof pos[0] === 'number'){
			wPos[0]=pos[0]==-1 ? (origSW/2-divWidth/2) : pos[0]-divWidth/2;
			wPos[1]=pos[1]==-1 ? (origSH/2-divHeight/2) : pos[1]-divHeight/2;
		}else{
			var objPos=$('#'+pos[0]).offset();
			var objSize=[$('#'+pos[0]).width(),$('#'+pos[0]).height()];
			if(pos[1]=='top'){
				wPos[0]=objPos.left-objSize[0]/2-(divWidth/2);
				wPos[1]=objPos.top-(divHeight+3);
			}else if(pos[1]=='bottom'){
				wPos[0]=objPos.left+objSize[0]/2-(divWidth/2);
				wPos[1]=objPos.top+objSize[1]+3;
			}else if(pos[1]=='left'){
				wPos[0]=objPos.left-(divWidth+3);
				wPos[1]=objPos.top+objSize[1]/2-(divHeight/2);
			}else if(pos[1]=='right'){
				wPos[0]=objPos.left+objSize[0]+3;
				wPos[1]=objPos.top+objSize[1]/2-(divHeight/2);
			}
			wPos[0]=Math.max(0, Math.min(wPos[0],sW-divWidth));
			wPos[1]=Math.max(0, Math.min(wPos[1],sH-divHeight));
		}
		$("#"+winName).css({'top':wPos[1],'left':wPos[0]});

		$("#"+winName).css({'opacity':'0.0','filter':'alpha(opacity=0)'});

		//height=bevelShape(('body'+winName+'Div'),1,0,('body'+winName+'Canvas'),.65,10,3,1,2,2,2,2,0,0);
		height=bevelShape(('body'+winName+'Div'),0,0,('body'+winName+'Canvas'),.9,15,3,1,1,1,1,1,0,0);
		msg=winName;
		//hideMenu=tempWindowId;
	}
	timeDisp=timeDisp-.10;
	if(timeDisp<=0){
		$('#'+msg).remove();
		if(hideMenu<2 && hideMenu>-1){
			if(msg == "tempWindow_"+tempWindowId){
				tempWindowDisplay(0);
				if(openDialogue==''){
					dialogueOpen=0;
					if(key_hide==0){
						menuVis(1,0);
					}
				}
			}
			//eval(clickFunction);
		}else{
			if(msg == "tempWindow_"+tempWindowId){
				tempWindowDisplay(0);
			}
		}
	}else{
		var math=1;
		if(timeFade>0){
			if((gen/10)/timeFade<1){
				math=(gen/10)/timeFade;
			}else{
				math=timeDisp/timeFade;
			}
			math=Math.min(Math.max(math,0),1);
		}
		$("#"+msg).css({'opacity':(math),'filter':'alpha(opacity='+math*100+')'});
		gen+=1;
		setTimeout(function(){tempWindow(msg,pos,clickFunction,timeDisp,timeFade,gen,hideMenu);},10);
	}
	return winName;
}
function promptWindow(msg,buttonOptions,buttonVals,buttonFunctions,timeFade,gen,horVert,hideMenu,closeTempDisp){
	if(gen==0){
		tempWindowId+=1;
		var addPad=30;
		var addPadButton=20;
		var winName="tempWindow_"+tempWindowId;
		tempWindowDisplay(1);
		if(hideMenu>0){
			dialogueOpen=1;
			key_hide=1;
			menuVis(0,0);
			if(hideMenu==2){
				layerWindowVisibility(1,'lwin_footer','layersWindow',-($("#lwin_footer").position().top),0);
				visibilityColorSphere(1,0);
			}
		}
		
		var html=msg;
		html+="<br><table cellpadding='0' cellspacing='0' border='0'><tr>\n";
		for(var x=0; x<buttonOptions.length;++x){
			if(closeTempDisp==1 || buttonVals[x]==-1){
				html+="<td align='center'><div id='"+winName+"_button"+x+"' style='z-index:12100;' onMouseOver='onDia=2;' onMouseOut='onDia=1;' onClick=\"$('#"+winName+"').remove();onDia=0;tempWindowDisplay(0);dialogueOpen=0;key_hide=0;menuVis(1,0);setTimeout(function(){"+buttonFunctions[x]+"},20);\">"+buttonOptions[x]+"</div></td>\n";
			}else{
				html+="<td align='center'><div id='"+winName+"_button"+x+"' style='z-index:12100;' onMouseOver='onDia=2;' onMouseOut='onDia=1;' onClick=\"$('#"+winName+"').remove();onDia=0;setTimeout(function(){"+buttonFunctions[x]+"},20);\">"+buttonOptions[x]+"</div></td>\n";
			}
			if(x!=buttonOptions.length-1){
				if(horVert==0){
					html+="<td align='center'><div style='width:15px;' align='center'>-</div></td>";
				}else{
					html+="</tr><tr><td><div style='overflow:hidden;top:10px;'></div></td></tr><tr>"
				}
			}
		}
		html+="</tr></table>";
		html="<div id='"+winName+"' style='position:absolute;left:0px;top:0px;align:center;cursor:default;' onClick='return false;' onMouseOver='onDia=1;' onMouseOut='onDia=1;'>"+html+"</div>";
		$('#tempWindows').html(html);
		divHeight=$("#"+winName).height()+addPad;
		divWidth=$("#"+winName).width()+addPad;
		if(horVert==1){
			for(var x=0; x<buttonOptions.length;++x){
				$("#"+winName+"_button"+x).width(divWidth);
				$("#"+winName+"_button"+x).css('padding-bottom','3px');
			}
			divHeight=divHeight+addPadButton*(buttonOptions.length);
			divWidth=divWidth+addPadButton*2.5;
		}else{
			divHeight=divHeight+addPadButton;
			divWidth=divWidth+addPadButton*(buttonOptions.length);
		}
		//alert($("#"+winName).width());
		$("#"+winName).width(divWidth);
		$("#"+winName).height(divHeight);
		controlText=$("#"+winName).html();
		//parentClass=$("#"+winName).parent();
		html="<canvas style='z-index:"+(12000+tempWindowId)+";position:relative;' id='body"+winName+"Canvas' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
		html=html+"<div style='color:#ffffff;position:relative;left:"+(addPad/2)+"px;bottom:"+(divHeight-(addPad/2))+"px;z-index:"+(12000+tempWindowId+1)+";width:"+divWidth+";height:"+divHeight+";text-shadow:2px 2px 3px black;cursor:default;' onMouseOver='onDia=1;geoToolStopDraw=1;' onMouseOut='onDia=1;geoToolStopDraw=0;' id='body"+winName+"Div'>"+controlText+"</div>";
		$("#"+winName).html(html);
		$("#"+winName).height(divHeight);
		$("#"+winName).width(divWidth);
		//Poor planning on my part, if you click the area around the window, it closes the window
		//So default
		var noFunc='';
		var noButton=parseInt(buttonVals.indexOf('-1'));
		//noFunc="'"+buttonFunctions[noButton]+"'";
		//if(noButton>0){
		//	noFunc=buttonFunctions[noButton];
		//}
		//noFunc=buttonFunctions[0];
		$("#"+winName).attr("onClick","$('#"+winName+"').remove();onDia=0;tempWindowDisplay(0);dialogueOpen=0;key_hide=0;menuVis(1,0);"+noFunc);
		$("#"+winName).css({'top':(origSH/2-divHeight/2),'left':(origSW/2-divWidth/2)});
		$("#"+winName).css({'opacity':'0.0','filter':'alpha(opacity=0)'});

		//height=bevelShape(('body'+winName+'Div'),1,0,('body'+winName+'Canvas'),.65,10,3,1,2,2,2,2,0,0);
		height=bevelShape(('body'+winName+'Div'),0,0,('body'+winName+'Canvas'),.90,15,3,1,1,1,1,1,0,0);
		msg=winName;
		hideMenu=tempWindowId;
		
		var button;
		addPad=addPadButton;
		for(var x=0; x<buttonOptions.length;++x){
			button=winName+"_button"+x;
			divHeight=$("#"+button).height()+addPad;
			divWidth=$("#"+button).width()+addPad;
			$("#"+button).width(divWidth);
			$("#"+button).height(divHeight);
			controlText=$("#"+button).html();
			html="<canvas style='z-index:"+(12000+tempWindowId+x)+";position:relative;cursor:default;' id='"+button+"_Canvas' onClick='"+$('#'+button).attr('onClick')+"' height='"+divHeight+"' width='"+divWidth+"'></canvas>\n";
			html=html+"<div style='color:#ffffff;cursor:pointer;position:relative;bottom:"+divHeight+";padding-top:"+(addPad/2)+"px;z-index:"+(12000+tempWindowId+1+x)+";width:"+(divWidth)+";height:"+(divHeight)+";text-shadow:2px 2px 3px black;' id='"+button+"_Div'>"+controlText+"</div>";
			$("#"+button).html(html);
			$("#"+button).height(divHeight);
			$("#"+button).width(divWidth);
			height=bevelShape((button+'_Div'),0,0,(button+'_Canvas'),.90,5,3,1,1,1,1,1,0,0);
			$("#"+curButton).attr("onMouseOver","var tVal=0;bevelShape(('"+button+"_Div'),1,0,('"+button+"_Canvas'),.9,5,3,1,0,2,0,2,1,0);");
			$("#"+curButton).attr("onMouseDown","var tVal=0;bevelShape(('"+button+"_Div'),1,0,('"+button+"_Canvas'),.9,5,3,1,0,2,0,2,2,0);");
			$("#"+curButton).attr("onMouseUp","var tVal=0;bevelShape(('"+button+"_Div'),1,0,('"+button+"_Canvas'),.9,5,3,1,0,2,0,2,1,0);");
			$("#"+curButton).attr("onMouseOut", "var tVal=0;bevelShape(('"+button+"_Div'),1,0,('"+button+"_Canvas'),.9,5,3,1,0,2,0,2,0,0);");
			
		}
	}

	var math=1;
	if(timeFade>0){
		math=(gen/10)/timeFade;
		math=Math.min(Math.max(math,0),1);
	}
	$("#"+msg).css({'opacity':(math),'filter':'alpha(opacity='+math*100+')'});
	gen+=1;
	if(math!=1){
		setTimeout(function(){promptWindow(msg,buttonOptions,buttonVals,buttonFunctions,timeFade,gen,horVert,hideMenu,closeTempDisp);},10);
	}
	return winName;
}
function tempWindowDisplay(val){
	if(val==0){
		if(onDia==0){
			$("#tempWindows").css({'zIndex':-6000, 'visibility':'hidden'});
		}
	}else{
		$("#tempWindows").css({'zIndex':12000, 'visibility':'visible'});	
	}
}
