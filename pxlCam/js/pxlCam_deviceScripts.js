
function stopStreams(stream){
	if(stream){
		stream.getVideoTracks()[0].stop();
	}else if(window.stream){
		window.stream.getTracks().forEach( (track)=> {
			track.stop();
		});
	}
}

function pausePlayback(){
	pxlActive=!pxlActive;
	pxlActive ? (renderPause=true,bootCamera()) : window.stream.getVideoTracks()[0].stop() ;
	if(verbose) verbPaused.innerText=webcamVideo.paused?"PAUSED":"PLAYING";
}


function buildDeviceMonitors(){
	
	//window.addEventListener('deviceorientation', devicePoseData);
	//gyroscope=new Gyroscope({frequency:10});
	//gyroscope.addEventListener('reading',gyroPoseData);
	//gyroscope.start();
	
	window.addEventListener('devicemotion', deviceMotionData);
	//window.addEventListener('orientationchange', devicePoseChange); // Don't know when this ever fires, docs seem like it should run tho
	
  // Based around w3.org's Accelerometer builder
/*  navigator.permissions.query({ name: 'accelerometer' }).then(result => {
		if (result.state === 'denied') {
			console.log('Permission to use accelerometer sensor is denied.');
			return;
		}

		let acl = new Accelerometer({frequency: 10});
		let max_magnitude = 0;
		acl.addEventListener('activate', () => console.log('Ready to measure.'));
		acl.addEventListener('error', error => console.log(`Error: ${error.name}`));
		acl.addEventListener('reading', () => {
			let magnitude = Math.hypot(acl.x, acl.y, acl.z);
			if (magnitude > max_magnitude) {
				max_magnitude = magnitude;
				console.log(`Max magnitude: ${max_magnitude} m/s2`);
			}
		});
		acl.start();
	});*/
}

// I'm using the phone's face as the top, so -- 
// Rotating the phone sideways is Yaw
// Tiling the phone to the floor or sky is Pitch
// Turning to face left or right is Roll
// THIS IS INCORRECT
// But its late... soooo screw it for now
function devicePoseData(e){
	var abs=e.absolute;
	var gamma=e.gamma; // Yaw
	var beta=e.beta; // Pitch
	var alpha=e.alpha; // Roll

	if(alpha!==null){
		let piMult=Math.PI;
		//beta=Math.sin(beta*0.00555555555*piMult); // Yaw -180 to 180; Corrected -1 to 1
		//gamma=Math.sin(-gamma*0.01111111111*piMult); // Pitch -90 to 90; Corrected -1 to 1
		//alpha=Math.sin((alpha-180)*0.00555555555*piMult); // Roll 0 to 360; Corrected -1 to 1
		beta=(beta*0.00555555555); // Yaw -180 to 180; Corrected -1 to 1
		gamma=(-gamma*0.01111111111); // Pitch -90 to 90; Corrected -1 to 1
		alpha=((alpha-180)*0.00555555555); // Roll 0 to 360; Corrected -1 to 1
		
		if(verbose){
			verbYaw.innerText=toHundreths(gamma);
			verbPitch.innerText=toHundreths(beta);
			verbRoll.innerText=toHundreths(alpha)+" "+abs;
			verbCurAngle.innerText=Math.atan2(gamma,beta);
		}
		
		if(!phonePoseActive) phone_yprInit=[beta,gamma,alpha];
		phonePoseActive=true;
		phone_yprDelta=[beta-phone_ypr[0],gamma-phone_ypr[1],alpha-phone_ypr[2]];
		phone_ypr=[beta,gamma,alpha];
	}else{	
		phonePoseActive=false;
	}
}
function gyroPoseData(e){
	let x=gyroscope.x;
	let y=gyroscope.y;
	let z=gyroscope.z;
	
	if(verbose){
		verbGyroX.innerText=toHundreths(x);
		verbGyroY.innerText=toHundreths(y);
		verbGyroZ.innerText=toHundreths(z);
	}
}

function deviceMotionData(e){
	let ag=e.accelerationIncludingGravity;
	let x=ag.x;
	let y=ag.y;
	let z=ag.z;
	accGravity=[x,y,z];
	
	if(verbose){
		verbGravityX.innerText=toHundreths(x);
		verbGravityY.innerText=toHundreths(y);
		verbGravityZ.innerText=toHundreths(z);
	}
}

function devicePoseChange(e){
	if(verbose) verbCurAngle.innerHTML( screen.orientation.angle );
}

function nextCamera(){ // Delay boot, hoping this can prevent the delays in camera switches on mobile
		if(verbose) verbPrevCamName.innerText=webcamNameList[webcamActive];
		
		webcamActive=(webcamActive+1)%webcamList.length;
		if(verbose){
			verbCurCam.innerText=webcamActive+1;
			verbCurCamName.innerText=(webcamActive+1)+" - "+webcamNameList[webcamActive];
		}
		
		stopStreams();
		findPictureAspect();
		
		if(camSafeRes[webcamActive]!=null){
			delayLoadCam=true;
		}
}

function bootCamera(){
	if(camSafeResFound){
		//stopStreams();
		if( navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
			var cons;
			var verb="";
			var res=[...camSafeRes[webcamActive]];
			//res=[...camSafeResValid[webcamActive][0]];
			//var videoConstraints={"deviceId":{"exact":webcamList[webcamActive]}, "width":{"exact":res[0]}, "height":{"exact":res[1]}};
			var videoConstraints={"deviceId":{"exact":webcamList[webcamActive]}, "width":{"ideal":res[0]}};
			// Using Exact for both Width and Height can fail from time to time, even storing exact resolutions.
			// This is mainly a catch encase another program grabbed the media and something tripped up.
			// Along with SPECIFICALLY wide angle cameras, they funky... Thorn-in-my-side funky
			if(totalFailedBootCount==2){ // Booting camera failed 10 times
				videoConstraints={"deviceId":{"exact":webcamList[webcamActive]}, "width":{"ideal":res[0]}};
			}else if(totalFailedBootCount==3){ // Booting camera failed 15 times
				videoConstraints={"deviceId":{"exact":webcamList[webcamActive]}, "height":{"ideal":res[1]}};
			}else if(totalFailedBootCount==4){ // Booting camera failed 20 times
				videoConstraints={"deviceId":{"exact":webcamList[webcamActive]}};
			}
			var cons={ video:videoConstraints, audio:false};
			navigator.mediaDevices.getUserMedia(cons).then( function success(stream) {
				window.stream=stream;
				window.track=stream.getVideoTracks()[0];
				webcamVideo.srcObject=stream;
				webcamVideo.autofocus=true;
				//camSafeRes[webcamActive]=[stream.getVideoTracks()[0].getSettings().width,stream.getVideoTracks()[0].getSettings().height];
				//setCanvasRes( [stream.getVideoTracks()[0].getSettings().width,stream.getVideoTracks()[0].getSettings().height], false, false);
				if(verbose) verbCamRes.innerHTML=stream.getVideoTracks()[0].getSettings().width+"x"+stream.getVideoTracks()[0].getSettings().height;
				if(webcamNameList[webcamActive]==""){
					webcamNameList=[];
					navigator.mediaDevices.enumerateDevices().then( (mediaDevices) => {
						findMediaDeviceData(mediaDevices);
					}).then(()=>{
						if(verbose){
							verbConsole.innerHTML=verb;
							verbCurCamName.innerText=webcamNameList[webcamActive];
						}
						findPictureFlip();
					});
				}else{
					findPictureFlip();
				}
				failedBootCount=0;
			}).then(()=>{
				findPictureAspect();
				camCheckMalformedRes=0;
				if(renderPause==true){ // pxlCam is paused, unpause and reset FPS detection and run render stack
					renderPause=false;
					let curTime=Date.now();
					fpsGrabTime=curTime+1000;
					fpsCount=0;
					pxlRenderStack();
					pxlRender(runner);
				}
			}).catch( (err)=>{
				delayLoadCam=true;
				failedBootCount+=1;
				console.log(" Couldn't access webCam - ", err.name);
				if(verbose) verbConsole.innerHTML+=" Can't access -", err.name;
			});
		}else{
			console.log("Webcam not available");
			if(verbose) verbConsole.innerHTML="Webcam not available; is another program accessing the camera now?";
		}
	}
}

function findPictureFlip(){
	var nameSplit=webcamNameList[webcamActive].split(" ");
	flipHorizontal=(nameSplit.indexOf("front")!=-1 || nameSplit.indexOf("front,")!=-1)?true:false;
	useFrontFlash=webcamList.length==1?true:flipHorizontal;
	camCorrectionShader.uniforms.uFlipHorizontal.value=flipHorizontal;
}

function checkMediaRes(){
	console.log("Finding res");
	var r=camResCheckList.pop();
	if(!isNaN(webcamActive)){
		stopStreams();
		var cons={ video:{"deviceId":{"exact":webcamList[webcamActive]}, "width":{"exact":r}}, audio:false};
		navigator.mediaDevices.getUserMedia(cons).then( function success(stream) {
			let curCamName=stream.getVideoTracks()[0].label;
			if(curCamName==webcamNameList[webcamActive]){
				// Find a camera resolution JUST larger than the document resolution to reduce mobile device power consumption
					let curWidth=stream.getVideoTracks()[0].getSettings().width;
					let curHeight=stream.getVideoTracks()[0].getSettings().height;
					//camSafeRes[webcamActive]=camSafeRes[webcamActive]==null?[curWidth,curHeight]:[ Math.max(camSafeRes[webcamActive][0], curWidth), Math.max(camSafeRes[webcamActive][1], curHeight) ];
					if(curWidth>sW && curHeight>sH){
						camSafeRes[webcamActive]=camSafeRes[webcamActive][0]==0?[curWidth,curHeight]:[ Math.min(camSafeRes[webcamActive][0], curWidth), Math.min(camSafeRes[webcamActive][1], curHeight) ];
					}
					let passCheck=camSafeResValidWidth[webcamActive]!=undefined?camSafeResValidWidth[webcamActive].indexOf(curWidth)==-1:true;
					if( curWidth <= r && passCheck){
						// Append valid resolution to valid array
						camSafeResValid[webcamActive].push([ curWidth, curHeight ]);
						camSafeResValidWidth[webcamActive].push(curWidth);
					}
				//camSafeRes[webcamActive]=[ Math.max(camSafeRes[webcamActive][0], stream.getVideoTracks()[0].getSettings().width), Math.max(camSafeRes[webcamActive][1], stream.getVideoTracks()[0].getSettings().height) ];
			}
			return stream;
		}).catch( (err)=>{ // Overload Error most likely - Failed to set camera to desired resolution
		}).then((stream)=>{
			camResIttr+=1;
			if(camResCheckList.length==0){
				stopStreams(stream);
				// Above check for camera res JUST larger than screen resolution failed
				// Most likely on a computer using a 1280x720 web cam and document width/height larger than 720p
				// Default to largest camera resolution found
				if(camSafeRes[webcamActive][0]==0 && camSafeResValid[webcamActive].length>0){
					camSafeRes[webcamActive]=[...camSafeResValid[webcamActive][0]];
				}
				//camSafeRes[webcamActive]=[...camSafeResValid[webcamActive][0]];
				camSafeResFound=true;
				delayLoadCam=true;
				promptFader(cameraLoading, false);
				pxlCookieManager.setCookie(["webcamNameList","camSafeRes","camSafeResValid","camSafeResValidWidth","curResId","camMalformFlip"]);
				if(verbose){
					let verb='Found '+camSafeResValid.length+' Resolutions -';
					for(var x=0; x<camSafeResValid[webcamActive].length;++x){
						verb+=(x%4==0?"<br>":'')+" ["+camSafeResValid[webcamActive][x][0]+","+camSafeResValid[webcamActive][x][1]+"] ";
					}
					verb+="<br> Attempting Resolution : "+ camSafeRes[webcamActive][0] + " x " + camSafeRes[webcamActive][1];
					verb+="<br> Booting Cam "+(webcamActive+1)+"/"+webcamList.length+" - "+webcamNameList[webcamActive];
					verbConsole.innerHTML+=verb;
				}
			}
			camResChecking=false;
		});
	}
}

function findMediaDevices(){
	if( navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
		navigator.mediaDevices.enumerateDevices().then( (mediaDevices) => {
			findMediaDeviceData(mediaDevices);
		}).then(()=>{
			if(pxlCookieManager.hasCookie("webcamList")){
				if(pxlCookieManager.isEqual("webcamList")){
					if(verbose) verbConsole.innerHTML+="<br> - Cookies read -";
					pxlCookieManager.evalCookie();
					camResCheckList=[];
					camSafeResFound=true;
					delayLoadCam=true;
				}else{
					if(verbose) verbConsole.innerHTML+="<br> - Cookies cleared -";
					pxlCookieManager.clearCookie();
				}
			}else{
				if(verbose) verbConsole.innerHTML+="<br> - Setting cookies -";
				pxlCookieManager.setCookie("webcamList");
			}
			pxlActive=true;
			pxlRender(runner);
		});
	}else{
		console.log("Webcam not available");
		if(verbose) verbConsole.innerHTML="Not available";
	}
}

// ## Catch permission request prompt; user first visit, iOS/Firefox pick camera prompt
function findMediaDeviceData(mediaDevices){
	var cons;
	var verb="";
	mediaDevices.forEach( (mediaDevice) => {
		if(mediaDevice.kind==='videoinput' || mediaDevice.kind==='videoInput'){
			let name=mediaDevice.label;
			verb+="<br>"+name;
			if(name!='ManyCam Virtual Webcam' && name!='screen-capture-recorder'){
				webcamList.push(mediaDevice.deviceId);
				webcamNameList.push(name);
				camSafeRes.push(null);
				//camSafeResWidth.push(640);
				camSafeResValid.push([]);
				camSafeResValidWidth.push([]);
				curResId.push(0);
				camMalformFlip.push(null);
			}
		}
	});
	if(verbose){
		verbConsole.innerHTML=verb;
		verbPrevCamName.innerText=" -- "
		verbCurCam.innerText=webcamActive+1;
		verbCurCamName.innerText=webcamNameList[webcamActive];
		verbMaxCam.innerText=webcamList.length;
	}
	if(webcamNameList[webcamActive]==""){ // If permission was asked to access video device, no array above will have filled out
		var nameSplit=webcamNameList[webcamActive].split(" ");
		flipHorizontal=(nameSplit.indexOf("front")!=-1 || nameSplit.indexOf("front,")!=-1)?true:false;
		useFrontFlash=webcamList.length==1?true:flipHorizontal;
		camCorrectionShader.uniforms.uFlipHorizontal.value=flipHorizontal;
	}
	
	if(webcamList.length == 1 ){
		document.getElementById("icon-nextCamera").style.visibility="hidden";
	}else{
		setThumbnailPosition();
		document.getElementById("icon-nextCamera").style.visibility="visible";
	} 	
}

// Having problems with wide angle lens resolutions drawing with flipped resolutions
// Not sure of a fix, manually checking pixel data for empty values to flip the resolution's width/height
// This issue arrose after adding dynamic resolution detection
function detectMalformedResolution(){
	if(camMalformFlip[webcamActive]==null){
		var canvasSampler=document.createElement("canvas");
		canvasSampler.width=pxlCanvas.width;
		canvasSampler.height=pxlCanvas.height;

		var curCtx=canvasSampler.getContext('2d');
		curCtx.drawImage(pxlCanvas,0,0);
		
		var fader=curCtx.getImageData(canvasSampler.width-10,10,2,2);
		var pix = fader.data;
		var urSample=pix[0]+pix[1]+pix[2];
		
		fader=curCtx.getImageData(10,canvasSampler.height-10,2,2);
		pix = fader.data;
		var llSample=pix[0]+pix[1]+pix[2];
		
		fader=curCtx.getImageData(10,10,2,2);
		pix = fader.data;
		var ulSample=pix[0]+pix[1]+pix[2];
		
		if(ulSample==0 && llSample==0 && urSample==0){
			camMalformFlip[webcamActive]=true;
			nextCamera();
		}
		/*
		if(ulSample>0 && (llSample==0 || urSample==0)){
			if(verbose) verbConsole.innerHTML+="<br> Malformed resolution detected.";
			camMalformFlip[webcamActive]=true;
			findPictureAspect();
		}else{
			camMalformFlip[webcamActive]=false;
			if(verbose) verbConsole.innerHTML+="<br> Resolution rendering correctly.";
		}*/
	}
}

//////////////////////////////////////
// ## Used only during boot camera fails.  Should be used in pxlDynamicQuality(); which was removed for class creation
function nextRes(){
	curResId[webcamActive]=(curResId[webcamActive]+1)%camSafeResValid[webcamActive].length;
	if(verbose){
		verbConsole.innerHTML+="<br>Setting Res to - "+camSafeResValid[webcamActive][curResId[webcamActive]][0]+"x"+camSafeResValid[webcamActive][curResId[webcamActive]][1];
	}
	camSafeRes[webcamActive]=[...camSafeResValid[webcamActive][curResId[webcamActive]]];
	findPictureAspect(false);
	setCanvasRes([sW,sH], true, false);
}

//////////////////////////////////////
// LIGHT BITOCH!  FLIMMITY FLAM!
function toggleFlash(dom){
	useFlash=!useFlash;
	nullToggle(dom);
}
// Selfie cam flash vs environment cam flash
function setDeviceFlash(active=false){
	if(useFrontFlash){
		frontFlash.style.visibility=active?"visible":"hidden";
		flashActive=active;
		delaySaveShot=active;
		takeShotTime=Date.now()+flashWaitTime;
	}else{
		if(window.track){
			let imageCapture=new ImageCapture(track);
			let photoCapabilities=imageCapture.getPhotoCapabilities().then(()=>{
				window.track.applyConstraints({ advanced:[{torch:active}] }).then(()=>{
					flashActive=active;
					delaySaveShot=active;
					takeShotTime=Date.now()+flashWaitTime;
				});
			});
		}
	}
}



