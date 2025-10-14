
function openMenu(divName){
	pxlMouse.inputActive=false;
	pxlActive=false;
	let bootMenu=document.getElementById(divName);
	if(activeMenu!=null){
		closeActiveMenu(false);
	}else{
		promptFader(menuBlock, true);
		menuBlock.style.zIndex=70;
		/*if(mobile){
			catchNavigatorCalls=true;
			window.addEventListener('hardwareBackPress', backPress, true);
			window.addEventListener('navigate', backPress, true);
		}*/
	}
	activeMenu=bootMenu;
	promptFader(activeMenu, true);
}

function closeActiveMenu(hideMenuBlock){
	if(activeMenu){
		promptFader(activeMenu, false);
		activeMenu=null;
	}
	if(hideMenuBlock){
		promptFader(menuBlock, false);
		setTimeout(()=>{menuBlock.style.zIndex=0;}, 1000);
		
		pxlMouse.inputActive=true;
		pxlActive=true;
		pxlRender();
		/*if(catchNavigatorCalls && mobile){
			window.removeEventListener('hardwareBackPress', backPress);
		}*/
	}
}
function backPress(e){
	console.log("navigated");
	return false;
}


function addPhotoBinEntry(obj, res, imageData, urlObject, fileName, fileSize){
	let bin=document.getElementById(obj);
	let curCount=0;
	if(bin.hasAttribute("listCount")){
		curCount=parseInt(bin.getAttribute("listCount"));
		curCount+=1;
	}else{
		bin.setAttribute("listCount", 0);
		bin.innerHTML="";
	}
	bin.setAttribute("listCount",curCount);
	var entry=new PhotoBinEntry(curCount, bin, res, imageData, urlObject, fileName, fileSize);

			photoBinObjects.map((e)=>{
				e.updateThumbnail();
			});
	photoBinObjects.push(entry);
}
function updatePhotoBinButton(entryId,buttonId,fileSizeId,scalarId){
	let curBinEntry=photoBinObjects[entryId];
	let button=document.getElementById(buttonId);
	curBinEntry.selectScale(scalarId,fileSizeId);
}
function downloadPhotoBinEntry(entryId){
	let curBinEntry=photoBinObjects[entryId];
	curBinEntry.download();
}

var curRebuild=0;
function stepThumbnailRebuild(){
	photoBinObjects[curRebuild].updateThumbnail();
	curRebuild=(curRebuild+1)%photoBinObjects.length;
}

class PhotoBinEntry{
	constructor(id, parent, res, imageData, urlObject, fileName, fileSize){
		this.entryId=id;
		this.domId=parent.getAttribute("id")+"_Entry-"+id;
		this.parent=parent;
		this.res=res;
		this.imageData=imageData;
		this.fileName=fileName;
		// Percent Scale : [ Res[W,H], URL.createObjectURL, Resolution File Name, Raw File Size
		this.scalarArray={
			50:null,
			65:null,
			75:null,
			85:null,
			100:[[...res],urlObject,fileName,this.getDisplaySize(fileSize)]
		};
		this.activeScale=100;
		this.downloadText=this.getDownloadText(this.scalarArray[this.activeScale]);
		this.html;
		this.canvas;
		this.canvasThumbnail;
		this.canvasThumbnailData;
		this.init();
	}
	init(){
		let html=`
			<div id="`+this.domId+`" class="photoBinEntry">
				<div id="`+this.domId+`_thumbnailParent" class="entryThumbnailParent">
					<canvas id="`+this.domId+`_thumbnailCanvas" class="entryThumbnail"></canvas>
				</div>
				<div id="entryResListParent" class="entryResListParent">
					<table id="entryResList" class="entryResList" border=0 cellspacing=0 cellpadding=0 style="width:100%;">
						<tr>`;
		let scalarKeys=Object.keys(this.scalarArray);
		for(let x=0; x<scalarKeys.length;++x){
			let key=scalarKeys[x];
			if(this.scalarArray[key]==null){
				let keyArr=[];
				keyArr.push( [parseInt(this.res[0]*(key/100)),parseInt(this.res[1]*(key/100))] ); // Resolution
				keyArr.push( null ); // URL Object
				keyArr.push( null ); // File Name
				keyArr.push( null ); // File Size
				this.scalarArray[key]=keyArr;
			}
			let keyRes=this.scalarArray[key][0];
			let keyFSize=this.scalarArray[key][3]!=null ? this.scalarArray[key][3] : "-"+(mobile?'Tap':'Click')+"-";
			let idName="entryButton-"+this.domId+"-"+key;
			let fileSizeName="entryButtonFileSize-"+this.domId+"-"+key;
			html+=`<td align="center"><div id="`+idName+`" class="entryButton" onclick="updatePhotoBinButton(`+this.entryId+`,'`+idName+`','`+fileSizeName+`',`+key+`);"><span class="entryButtonScale">`+key+`</span>%<br>`+keyRes[0]+`x`+keyRes[1]+`<br><span id='`+fileSizeName+`' class='entryButtonFindFileSize'>`+keyFSize+`</span></div></td>`;
		}
		html+=`
						</tr>
					</table>
				</div>
				<div class="entryButton" onclick="downloadPhotoBinEntry(`+this.entryId+`);">
					Download<br><span id="`+this.domId+`_Download">`+this.downloadText+`</span>
				</div>
			</div>
		`;
		this.html=html;
		this.parent.innerHTML=this.html+this.parent.innerHTML;
		this.canvasThumbnail=this.domId+"_thumbnailCanvas";
		let thCanvas=document.getElementById(this.domId+"_thumbnailCanvas");
		let parent=document.getElementById(this.domId+"_thumbnailParent");
		let pres=[ parent.offsetWidth, parent.offsetHeight ];
		let scaleRes=this.res[0]/this.res[1];
		pres[0]=pres[1]*scaleRes;
		
		thCanvas.width=pres[0];
		thCanvas.height=pres[1];
		
		this.canvas=document.createElement('canvas');
		this.canvas.width=this.res[0];
		this.canvas.height=this.res[1];
		let ctx=this.canvas.getContext('2d');
		let thumbCtx=thCanvas.getContext('2d');
		let cImage=new Image;
		cImage.onload=()=>{
			ctx.drawImage(cImage,0,0);
			thumbCtx.drawImage(cImage,0,0, ...this.res, 0,0, ...pres);
			this.canvasThumbnailData=thCanvas.toDataURL("image/png");
		};
		cImage.src=this.imageData;
	}
	listing(){
		return this;
	}
	removeListing(){
		return this.remove();
	}
	updateThumbnail(){
		let thCanvas=document.getElementById(this.canvasThumbnail);
		if(thCanvas){
		  let thumbCtx=thCanvas.getContext('2d');
			let img=new Image;
			img.onload=()=>{
				thumbCtx.drawImage(img,0,0);
			};
			img.src=this.canvasThumbnailData;
		}
	}
	download(scale){
		let blob=atob(this.scalarArray[this.activeScale][1].split(',')[1]);
		let size=blob.length;
		let arr=new Uint8Array(size);
		for(var x=0; x<size; ++x){
			arr[x]=blob.charCodeAt(x);
		}
		let cameraData=URL.createObjectURL(new Blob([arr]));
			
		// Auto download image
		let tempLink=document.createElement("a");
		tempLink.download=this.scalarArray[this.activeScale][2];
		tempLink.href=cameraData;
		document.body.appendChild(tempLink);
		tempLink.click();
		document.body.removeChild(tempLink);
		if(flipHorizontal){
			camCorrectionShader.uniforms.uFlipHorizontal.value=true;
		}
	}
	getFileName(){
		var dt=new Date();
		var timeSuffix="_"+(dt.getMonth()+1)+"-"+dt.getDate()+"-"+dt.getFullYear()+"_"+dt.getHours()+"-"+dt.getMinutes()+"-"+dt.getSeconds();
		return "pxlCam"+timeSuffix+".png";
	}
	getDisplaySize(fileSize){
		let fileSizeKB=toHundreths(fileSize*0.001);
		let fileSizeMB=toHundreths(fileSizeKB*0.001);
		return fileSizeMB>1?fileSizeMB+" MB":fileSizeKB+" KB";
	}
	formatFileName(res){
		let base=this.fileName.split(".")
		let ext=base[1];
		base=base[0];
		let ret=base+"_"+res[0]+"x"+res[1]+"."+ext;
		return ret;
	}
	getDownloadText(activeArray){
		let ret=activeArray[0][0]+" x "+activeArray[0][1]+" - "+activeArray[3];
		return ret
	}
	selectScale(scalarId,fileSizeId){
		this.activeScale=scalarId;
		if(this.scalarArray[this.activeScale][3]==null){
			let selectedRes=this.scalarArray[this.activeScale][0];
			let can=document.createElement('canvas');
			can.width=selectedRes[0];
			can.height=selectedRes[1];
			let ctx=can.getContext('2d');
			ctx.drawImage(this.canvas, 0,0, ...this.res, 0,0, ...selectedRes);
			
			let dURL=can.toDataURL("image/png");
			this.scalarArray[this.activeScale][1]=dURL;
			
			this.scalarArray[this.activeScale][2]=this.formatFileName(selectedRes);
			
			var blob=atob(dURL.split(',')[1]);
			var fileSize=blob.length;
			this.scalarArray[this.activeScale][3]=this.getDisplaySize(fileSize);
			document.getElementById(fileSizeId).innerHTML=this.scalarArray[this.activeScale][3];
		}
		this.downloadText=this.getDownloadText(this.scalarArray[this.activeScale]);
		let dlButtonText=document.getElementById(this.domId+"_Download");
		dlButtonText.innerHTML=this.downloadText;
		
	}
}

//////////////////////////////////////

function setThumbnailPosition(){
	let nCam=document.getElementById('icon-nextCamera');
	let nBottom=nCam.style.bottom+nCam.offsetHeight;
	let tBlock=document.getElementById('thumbnailBlock');
	tBlock.style.bottom=nBottom;
	tBlock.style.transform="translate(50%,-50%)";
}
function nullToggle(obj){
	let canvas=obj.getElementsByTagName('canvas');
	if(canvas.length>0 && obj.hasAttribute("draw")){
		canvas=canvas[0];
		let draw=obj.getAttribute("draw");
		drawIcon(canvas, draw, [canvas.width, canvas.height] );
	}
}
function drawIcon(can, draw, size){
	let points=[];
	let curLine=[];
	let fill=false;
	let runNull=false
	if(draw=="blank"){
		return;
	}else if(draw=="mode"){
		curLine=[.42,.27, .5,.42, .58,.27];
		points.push(curLine);
		curLine=[.42,.27, .5,.38, .58,.27];
		points.push(curLine);
		curLine=[.27,.44, .32,.44, .5,.56, .68,.44, .73,.44];
		points.push(curLine);
		curLine=[.17,.62, .25,.62, .5,.72, .75,.62, .83,.62];
		points.push(curLine);
		curLine=[.17,.62, .25,.625, .5,.73, .75,.625, .83,.62];
		points.push(curLine);
	}else if(draw=="alignLines"){
		let sl=.03;
		curLine=[.35+sl,.22, .35-sl,.79];
		points.push(curLine);
		curLine=[.65+sl,.2, .65-sl,.77];
		points.push(curLine);
		sl=.01;
		curLine=[.22,.35+sl, .79,.35-sl];
		points.push(curLine);
		curLine=[.19,.65+sl, .77,.65-sl];
		points.push(curLine);
	}else if(draw=="flash"){
		if(!useFlash) runNull=true;
		curLine=[.61,.13, .68,.51, .47,.68, .52,.87];
		points.push(...curLine);
		curLine=[.39,.65, .52,.5, .31,.18];
		points.push(...curLine);
		points=[[...points]];
		fill=true;
	}else if(draw=="nextCam"){
		curLine=[.33,.3, .48,.5, .33,.7, .41,.5];
		points.push(curLine);
		curLine=[.51,.25, .71,.5, .51,.75, .61,.5];
		points.push(curLine);
		fill=true;
	}else{
		runNull=true;
	}
	points.map((pts,x)=>{
		pts=pts.map((val,c)=>val*size[c%2]);
		drawLine(can,pts,3,"#fff",fill,!x);
	});
	if(runNull){
		points=[]
		curLine=[.2,.25, .8,.75];
		points.push(curLine);
		curLine=[.2,.75, .8,.25];
		points.push(curLine);
		points.map((pts,x)=>{
			pts=pts.map((val,c)=>val*size[c%2]);
			drawLine(can,pts,3,"#b55",false,false);
		});
	}
}

function drawLine(canvas,points,width,color,fill,clear){
	let hex=color;
	let draw=canvas.getContext('2d');
	if(clear) draw.clearRect(0,0,canvas.width,canvas.height);
	
	draw.beginPath();
	draw.strokeStyle=hex;
	draw.lineWidth=width;
	draw.moveTo(points[0],points[1]);
	for(var x=2; x<(points.length); x+=2){
		draw.lineTo(points[x],points[x+1]);
	}
	if(fill){
		draw.closePath();
		draw.fillStyle=hex;
		draw.fill();
	}else{
		draw.strokeStyle=hex;
		draw.lineJoin = "round";
		draw.lineCap = "round";
		draw.stroke();
	}
}

function setAlignLines(){
	let curMode=parseInt(alignLines.getAttribute("displayMode"));
	curMode=(curMode+1)%4;
	alignLines.setAttribute("displayMode",curMode);
	let html='';
	let lines=curMode==1?2:7;
	let faded=curMode==1?false:true;
	
	if(curMode==0) return alignLines.innerHTML=html;
	
	if(curMode<=2){ // Eh, messing around with other ways to write things. Efficient? no clue
		Array(lines*2).fill(['1px','100%',100,0]).map((a,x)=>{
			a=x%2?[a[1],a[0],a[3],a[2]]:a;
			let bar=parseInt(x*.5+1);
			let left=(bar/(lines+1)) * a[2];
			let top=(bar/(lines+1)) * a[3];
			html+="\n<div class='alignLines "+(bar%2&&faded?"alignFaintLines":"alignMainLines")+"' ";
			html+="style='width:"+a[0]+";height:"+a[1]+";";
			html+="top:"+top+"%;left:"+left+"%;'></div>";
		});
	}else if(curMode==3){
		let size=Math.min(sW,sH)*.4;
		html="\n<div class='alignBoxBlock alignBox' style='width:"+size+"px;height:"+size+"px;'></div>";
		size*=.25;
		html+="<div class='alignBoxBlock alignInnerCircle' style='width:"+size+"px;height:"+size+"px;'>";
		html+="<div class='alignInnerUpper' style='width:"+size+"px;height:"+(size*.5)+"px;'></div>";
		html+="<div class='alignInnerLower' style='width:"+size+"px;height:"+(size*.5)+"px;'></div>";
		html+="</div>";
	}
	alignLines.innerHTML=html;
}

/////////////////////////////////////////////

function promptFader(faderObj, vis, fadeOutLimit=null){
	if(typeof(faderObj)=="string"){
		faderObj=document.getElementById(faderObj);
		if(!faderObj){
			return;
		}
	}
	if(faderObj.classList.value.indexOf("fader")<0){
		faderObj.classList.add("fader");
	}
	if(vis){
		faderObj.classList.remove("visOff");
		faderObj.classList.add("visOn");
		if(fadeOutLimit!=null){
			faderObj.setAttribute("fadeOut", clockTime+fadeOutLimit*1000);
			fadeOutList.push(faderObj);
		}
	}else{
		faderObj.classList.remove("visOn");
		faderObj.classList.add("visOff");
	}
}

function checkFadeOutList(){
	if(fadeOutList.length>0){
		let sliceList=[];
		fadeOutList.map((d,x)=>{
			let fadeOutTime=d.getAttribute('fadeOut');
			clockTime>fadeOutTime&&(sliceList.push(x));
		});
		while(sliceList.length>0){
			let popper=sliceList.pop();
			promptFader(fadeOutList[popper],false);
			fadeOutList.splice(popper,1);
		}
	}
}

/////////////////////////////////////////////

function launchFullscreen(domObj){
	if(domObj.requrestFullscreen){
		domObj.requestFullscreen();
	}else if(domObj.mozRequestFullScreen){
		domObj.mozRequestFullScreen();
	}else if(domObj.webkitRequestFullscreen){
		domObj.webkitRequestFullscreen();
	}else if(domObj.msRequestFullscreen){
		domObj.msRequestFullscreen();
	}
}

function toHundreths(val){ // int(val*100)*.01 returns an erronious float on semi ussual basis...
	if(val===null) return "null";

	let sp=(val+"").split(".");
	if(sp.length == 1){
		return val;
	}else{
		let ret=sp[0]+"."+sp[1].substr(0,2);
		return ret;
	}
}

function degToRad(deg){
	return deg*(Math.PI/180);
}

/////////////////////////////////////////////

function pxlRender(){
	runner++;
	var curTime=Date.now();
	let delta=(curTime-clockTime);
	if(runSmartBlur){
		if(delta/30<.7){
			runSmartBlur=false;
			buildShaderPass(true);
		}
	}
	if(verbose){
		verbPaused.innerText=webcamVideo.paused?"PAUSED":"PLAYING";
		fpsCount++;
		if(curTime>fpsGrabTime){
			verbFPS.innerText=delta+" ms - "+fpsAvg+" fps average" ;
			
			fpsGrabTime=curTime+1000;
			fpsAvg=fpsAvg==0?fpsCount: (fpsAvg*2+fpsCount)*.33333333333333;
			fpsAvg=(fpsAvg+"").substr(0,5);
			fpsCount=0;
		}
	}
	clockTime=curTime;
	
	if(camSafeRes[webcamActive]==null){
		camResCheckList=[...camResOrigCheckList];
		let r=camResCheckList[0];
		r=sH>sW?[r[1],r[0]]:r;
		camSafeRes[webcamActive]=[0,0];
		camResChecking=false;
		camSafeResFound=false;
		camSafeResBooting=false;
		camSafeResBooted=false;
		if(verbose) verbConsole.innerHTML="";
		promptFader(cameraLoading, true);
	}
	if(camResCheckList.length>0 && !camResChecking){
		camResChecking=true;
		checkMediaRes();
	}
	if(delayLoadCam){
		// Failed to boot the camera over 5 times - change to next camera
		// I've never seen two fails in a row, but the case may come up
		if(failedBootCount>5){ 
			delayLoadCam=true;
			failedBootCount=0;
			totalFailedBootCount+=1;
			if(totalFailedBootCount>5){
				pxlActive=false;
				pxlCamBootError=true;
				return;
			}
			if(isNaN(webcamActive)){
				findMediaDevices();
			}else{
				nextCamera();
			}
		}else{
			delayLoadCam=false;
			findPictureAspect();
			pxlCamEngine.dispose();
			vidTexture.dispose();
			bootCamera();
		}
	}
	/*if(camCheckMalformedRes<camMalformedCheckMax && mobile){
		camCheckMalformedRes+=1;
		if(camCheckMalformedRes==camMalformedCheckMax){
			detectMalformedResolution();
		}
	}*/
	
	checkFadeOutList();
	
	if(delaySaveShot && useFlash && curTime>takeShotTime){
		delaySaveShot=false;
		pxlActive=false;
		saveShot();
	}else{
		if(camSafeResFound && pxlActive){
			pxlRenderStack();
		}
	}
	
	if(pxlActive){
		requestAnimationFrame(pxlRender);
	}
}

function pxlRenderStack(){
	pxlCamComposer.render();
	if(haarFeatureHelperDisplay){
		createEigenImage(webcamVideo);
		pxlCamHaarFeatureComposer.render();
		pxlCamHaarFeatureRenderComposer.render();
	}else{
		pxlCamShaderComposer.render();
	}
}