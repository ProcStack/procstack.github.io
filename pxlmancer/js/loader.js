function cutLoader(){
	$("#loader").css({'visibility':'hidden','z-index':-9999});
	$("#postLoader").css({'visibility':'visible'});
	$("#loader").attr('loaderVal','0');
}

function bootLoader(){
	var img="loaders/duelSpin.7.png";
	var val=parseInt($("#loader").attr('loaderVal'));
	var ldr_html="<div align='center' style='height:80;width:500;overflow:hidden;position:relative;left:-209'><table style=\"font-family:tahoma;font-size:63%;opacity:.2;filter:alpha(opacity=20);background-image:url('"+img+"');height:80px;width:80px;overflow:hidden;\"><tr valign='middle'><td align='center'></td></tr></table>";
	ldr_html+="<div style='position:relative;top:-60;z-index:1;font-size:200%;font-family:tahoma;color:#99ccbb;letter-spacing:2px;'><b><span style='font-size:73%;'>PXL</span>mancer</b></div></div>"
	ldr_html+="<div style='z-index:2;position:relative;top:-26.5;left:-1'><div align='left' id='bootBar' step='0' max='10' style='position:relative;left:-60;overflow:hidden;height:2px;width:200px;background-color:#444444;'></div>";
	ldr_html+="<div style='letter-spacing:2px;position:relative;left:-60;font-size:58%;opacity:.5;filter:alpha(opacity=50);' id='bootBarText'>..Takes some time..</div></div>"
	$("#loader").html(ldr_html);
	var tPos=sH/2-40;
	var lPos=sW/2-40;
	$("#loader").css({'top':tPos,'left':lPos});
	bootStep(0);
}
function bootStep(step,msg){
	// max 8 steps
	var bb=$("#bootBar");
	if(step==0){
		var html="<div align='left' id='bootBar_prog' style='background-color:#449999;height:2px;width:0px;overflow:hidden;'>&nbsp;</div>";
		$(bb).html(html);
	}else{
		var prog=parseInt($("#bootBar").attr('step'))+1;
		$("#bootBar").attr('step',prog);
		var max=parseInt($("#bootBar").attr('max'));
		var perc=Math.min(1,prog/max)*200;
		$("#bootBar_prog").css('width',perc);
		$("#bootBarText").html(msg);
	}
}
