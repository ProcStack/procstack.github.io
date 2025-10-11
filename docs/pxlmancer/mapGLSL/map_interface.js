
function mapSlipMenu(vis){
	if(vis==1){
		var menuItems=[["spacer",0,0]];
		if(loadFullTome==1){
			menuItems.push(["Open The Tome","local","enterMetalAsylum()","Enter Metal Asylum"],
			["spacer",1]);
		}
		menuItems.push(
			["Big Bertha Reel","link","https://www.youtube.com/watch?v=er4E9K_4jpU","The highlights from the whole of my time at Blue Sky Studios."],
			["Metal-Asylum Breakdown","link","https://www.youtube.com/watch?v=W-GcUk2W0w8","The technical breakdown behind Metal-Asylum."],
			["spacer",1],
			["View Resume","link","http://metal-asylum.net/resume/resume_2019.pdf","The boring work stuff..."],
			["spacer",1],
			//["View Technical Reel","local","displayYoutubeVideo(1)","In&Outs of Metal Asylum Development."],
			//["spacer",1],
			["Pxlmancer","link","https://pxlmancer.com","Draw, edit images, or just mess around!"],
			//["spacer",1],
			["Neurous Net","link","http://neurous.net","Some sorta squiggly line things?"],
			["spacer",1],
			["Youtube","link","https://youtube.com/user/TrancorWD","Trippy vids!"],
			["Gifs","link","http://metal-asylum.net/gifs/","Make some looping graphics in there some times."],
			["Dwitter","link","https://www.dwitter.net/u/trancor","JavaScript Code Golfing"],
			["spacer",1],
			["Github","link","https://github.com/procstack","Semi-active Repos"],
			//["Dwitter","link","https://dwitter.net/u/trancor","Javascript Golfing for some fun!"],
			//["spacer",2],
			//["Infonomics","link","displayWindow('info');","Infronomitronicrulation!"],
			//["E-Snail Mail","linkSpan","displayWindow('contact');", "Ye Ol' E-Mail"],
			["spacer",0,1]);
		var menu=document.createElement('div');
		menu.setAttribute("id","mapSlipMenuBlock");
		menu.setAttribute("align","center");
		var html="<table cellpadding=0 cellspacing=0 border=0>";
		for(var x=0; x<menuItems.length; ++x){
			var curKey=menuItems[x];
			var curText=curKey[0];
			var curType=curKey[1];
			/*if(x%2==0 || curType=="linkSpan"){
				var span=''
				if(curType=="linkSpan"){
					span="colspan=2";
				}
				html+="<tr><td align='center' "+span+">";
			}else{
				html+="<td align='center' "+span+">"
			}*/
				html+="<td align='center'>"
			if(curText=="spacer"){
				var spacer;
				if(curType==0){
					var curEndStop=curKey[2];
					if(curEndStop==0){
						spacer="<div class='menuSpacerTop'>&nbsp;</div>";
					}else{
						spacer="<div class='menuSpacerBottom'>&nbsp;</div>";
					}
				}else{
					if(curType==1){
						spacer="<div class='menuSpacer' style='width:30%;background-color:#444444;opacity:.4;filter:alpha(opacity=40);'>&nbsp;</div>";
					}else{
						spacer="<div class='menuSpacer' style='width:45%;background-color:#888888;opacity:.2;filter:alpha(opacity=20);'>&nbsp;</div>";
					}
				}
				html+=spacer;
			}else{
				var curFunc=curKey[2];
				var curHelp=curKey[3];
				var url;
				if(curType=="link" || curType=="linkSpan"){
					url="<a class='menuLink' href='"+curFunc+"' title='&nbsp;"+curHelp+"&nbsp;' target='_blank'>&nbsp;"+curText+"&nbsp;</a>";
				}else if(curType=="local"){
					url="<a class='menuLink' href='javascript:eval("+curFunc+");' title='&nbsp;"+curHelp+"&nbsp;'>&nbsp;"+curText+"&nbsp;</a>";
				}
				html+=url;
			}
			
			
				html+="</td></tr>";
			/*if(x%2==0 || curType=="linkSpan"){
				html+="</td>";
			}else{
				html+="</td></tr>";
			}*/
		}
		
		html+="</table>";
		html+="<div class='mapSlipCreatedBy' id='mapSlipCreatedBy'><span>by</span> Kevin Edzenga</div>"
		html+="<div class='mapSlipVersion' id='mapSlipVersion'>v0.2 - <span>TEMP</span></div>"
		menu.innerHTML=html;
		document.body.appendChild(menu);
		mapSlipMenuBlock=document.getElementById('mapSlipMenuBlock');
		mapSlipMenuBlock.classList.add("mapSlipMenuStyle");

	}
	
}

function tempMessage(msg,pos,clickFunction,timeDisp,timeFade,gen,hideMenu){
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
		if(hideMenu<2){
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