
function stepShaderValues(){
	if(effectMode<2){
		deltaX=pxlMouse.endPos[0]-pxlMouse.startPos[0];
		deltaY=pxlMouse.startPos[1]-pxlMouse.endPos[1];
		//smoothReachDist=runSmartBlur ? Math.max(2, Math.min(smoothReachDistMax, smoothReachDist+deltaX*.002)) : smoothReachDist;
		darkenImageDist=runDarkenImage ? Math.max(0, Math.min(darkenImageDistMax, darkenImageDist+deltaX*(mobile?.04:.02) )) : darkenImageDist;
		edgeReachDist=runEdgeColor ? Math.max(2, Math.min(edgeReachDistMax, edgeReachDist-deltaY*(mobile?.4:.2) )) : edgeReachDist;
		
		filterShader.uniforms.uEdgeReach.value=edgeReachDist;
		filterShader.uniforms.uDarkenImage.value=darkenImageDist;
	}else{
		hueSatch_rotateHue+=deltaX*(mobile?.04:.001);
		hueSatch_flattenMultColor+=deltaY*(mobile?.04:.001);
		
		filterShader.uniforms.uFlattenScalar.value=hueSatch_flattenMultColor;
		filterShader.uniforms.uRotateHue.value=hueSatch_rotateHue;
	}
	buildShaderPass();
}

function buildShaderPass(force=false, mult=1){
	filter_smartBlur(mult);
	if(effectMode<2){
		filter_shiftEdgeThickness(force, mult);
	}else{
		filter_shiftHueSaturation(force, mult);
	}
}

function nextEffect(){
	effectMode=(effectMode+1)%3;
	if(effectMode<2){
		darkenImageDist=1;
		smoothReachDist=pxlQuality.shaderSmartBlurReach;
		edgeReachDist=10;
	}else{
		smoothReachDist=pxlQuality.shaderSmartBlurReach;
		hueSatch_flattenMultColor=0;
		hueSatch_rotateHue=0;
	}
	buildShaderPass(true);
	findPictureAspect();
}
function findPictureAspect(save=false){ // ## Computer aspect ratio looks wrong, means mobile is too.  CHECK THIS SHAZZBUTT!
	var aspectMult=[1,1];
	camPictureAspect=[1,1];
	var malformAdjust=1;
	let res=[sW,sH];
	if(camSafeRes[webcamActive]!=null && !save){
		let safe=[...camSafeRes[webcamActive]]; // Most likely culpret, camSafeRes[webcamActive] may not be up to date
		safe=mobile&&sH>sW?[safe[1],safe[0]]:safe; // Second most likely culpret; ie, video res displays 1920x1080, but draws as 1080x1920
		let resAspect=sW/sH;
		let safeAspect=[safe[0]/safe[1], safe[1]/safe[0]];
		
		aspectMult[0]=(resAspect>safeAspect) ? 1 : res[0]/(res[1]*safeAspect[0]) ;
		aspectMult[1]=(resAspect>safeAspect) ? res[1]/(res[0]*safeAspect[1]) : 1 ;
		if(aspectMult[0]>1){
			aspectMult[1]*=1/aspectMult[0];
			aspectMult[0]=1;
		}else if(aspectMult[1]>1){
			aspectMult[0]*=1/aspectMult[1];
			aspectMult[1]=1;
		}
		
		// Should never be the case, but if the webcamVideo or pxlCamCore DOM object's resolution fails to set, catch the NaN value
		// Most likely I'm buggering around with reorganizing my code, and don't want to go on a goose chase finding why things are drawing wrong
		if(isNaN(aspectMult[0]) || isNaN(aspectMult[1])){
			aspectMult=[1,1];
		}
		camPictureAspect=[...aspectMult];
		
		// ## Freaking wide lens camera messing with me.
		// This is a patch for wide cam drawing half width... ugh...
		//if(camMalformFlip[webcamActive]==true){
		//	malformAdjust=res[0]/res[1];
		//}
	}
	camPictureAspect=[1,1];
	camCorrectionShader.uniforms.uMalformX.value=malformAdjust;
	camCorrectionShader.uniforms.uResAspectX.value=camPictureAspect[0];
	camCorrectionShader.uniforms.uResAspectY.value=camPictureAspect[1];
	if(haarFeatureShader){
		haarFeatureShader.uniforms.uResAspectX.value=camPictureAspect[0];
		haarFeatureShader.uniforms.uResAspectY.value=camPictureAspect[1];
	}
}
function takeShot(){
	if(useFlash){
		setDeviceFlash(true);
	}else{
		saveShot();
	}
}
function saveShot(){
	let r=camSafeResValid[webcamActive][0];//camSafeRes[webcamActive];
	r=mobile && sH<sW?[r[1],r[0]]:r; // ## Broekn for mobile, sW vs sH
	var cameraRender,cameraCanvas,curRotCanvas;
	setCanvasRes(r,true,true); // Renders the scene too	
	setDeviceFlash(false);
	//setTimeout(()=>{
		if(verbose) verbConsole.innerHTML="";
			
		//if(phonePoseActive && (Math.abs(phone_ypr[0])<.45 && sH>sW)){
		if( Math.abs(accGravity[0])>Math.abs(accGravity[1]) && sH>sW){
			curRotCanvas=document.createElement("canvas");
			curRotCanvas.width=r[1];//camSafeRes[webcamActive][0];
			curRotCanvas.height=r[0];//camSafeRes[webcamActive][1];
			r=[r[1],r[0]];

			var curCtx=curRotCanvas.getContext('2d');
			curCtx.clearRect(0,0,curRotCanvas.width,curRotCanvas.height);
			curCtx.save();
			curCtx.translate(curRotCanvas.width*.5, curRotCanvas.height*.5);
			curCtx.rotate(Math.PI*.5 * -1 * (accGravity[0]<0 ? -1:1) );
			curCtx.translate(-curRotCanvas.height*.5, -curRotCanvas.width*.5);
			curCtx.drawImage(pxlCanvas,0,0);
			curCtx.restore();
			cameraCanvas=curRotCanvas;
			if (verbose) verbConsole.innerHTML+="<br> Flip Rot - "+curRotCanvas.width+" x "+curRotCanvas.height;
		}else if(Math.abs(accGravity[0])<Math.abs(accGravity[1]) && accGravity[1]<0 && sH>sW){
			curRotCanvas=document.createElement("canvas");
			curRotCanvas.width=r[0];//camSafeRes[webcamActive][0];
			curRotCanvas.height=r[1];//camSafeRes[webcamActive][1];
			r=[r[1],r[0]];

			var curCtx=curRotCanvas.getContext('2d');
			curCtx.clearRect(0,0,curRotCanvas.width,curRotCanvas.height);
			curCtx.save();
			curCtx.translate(curRotCanvas.width*.5, curRotCanvas.height*.5);
			curCtx.rotate(Math.PI);
			curCtx.translate(-curRotCanvas.width*.5, -curRotCanvas.height*.5);
			curCtx.drawImage(pxlCanvas,0,0);
			curCtx.restore();
			cameraCanvas=curRotCanvas;
			if (verbose) verbConsole.innerHTML+="<br> Flopped - "+curRotCanvas.width+" x "+curRotCanvas.height;
		}else{
			cameraCanvas=pxlCanvas;
		}
		cameraRender=cameraCanvas.toDataURL("image/png");
		//setCanvasRes([sW,sH]); // Renders the scene too
		//setTimeout(()=>{
				
			////////////////////////////////////////////////////
			// Convert png data to blob for direct download
			var blob=atob(cameraRender.split(',')[1]);
			var fileSize=blob.length;
			var arr=new Uint8Array(fileSize);
			for(var x=0; x<fileSize; ++x){
				arr[x]=blob.charCodeAt(x);
			}
			var cameraData=URL.createObjectURL(new Blob([arr]));
			
		  
			////////////////////////////////////////////////////
			// File listing info
			var dt=new Date();
			var timeSuffix="_"+(dt.getMonth()+1)+"-"+dt.getDate()+"-"+dt.getFullYear()+"_"+dt.getHours()+"-"+dt.getMinutes()+"-"+dt.getSeconds();
			let fileName="pxlCam"+timeSuffix+".png";
			
			addPhotoBinEntry("photoBinScroller", r, cameraRender, cameraData, fileName, fileSize);
			
			//let fileSizeKB=fileSize*0.0009765625;
			//let fileSizeMB=fileSizeKB*0.0009765625;
			let fileSizeKB=toHundreths(fileSize*0.001);
			let fileSizeMB=toHundreths(fileSizeKB*0.001);
			let thumbnailPrompt=fileSizeMB>1?fileSizeMB+" MB":fileSizeKB+" KB";
			thumbnailPrompt+="<br>Edit Below";
			if(verbose) verbConsole.innerHTML+="<br>KB - "+fileSizeKB+" | MB - "+fileSizeMB;
			
			let ratio;
			let scalar=[0,0,cameraCanvas.width, cameraCanvas.height];
			let tmp=[...scalar];
			let pushIn=.75;
			if(scalar[3]<scalar[2]){
				scalar[0]=tmp[2]*.5-(tmp[3]*pushIn*camPictureAspect[0])*.5;
				scalar[1]=tmp[3]*camPictureAspect[1]*(1-pushIn);
				scalar[2]=tmp[3]*pushIn*camPictureAspect[1];
				scalar[3]=tmp[3]*camPictureAspect[1]*(pushIn);
			}else{
				scalar[0]=tmp[2]*camPictureAspect[0]*(1-pushIn);
				scalar[1]=tmp[3]*.5-(tmp[2]*pushIn*camPictureAspect[0])*.5;
				scalar[2]=tmp[2]*camPictureAspect[0]*(pushIn);
				scalar[3]=tmp[2]*pushIn*camPictureAspect[1];
			}
			
			let tCtx=thumbnailCanvas.getContext("2d");
			tCtx.drawImage(cameraCanvas, ...scalar, 0,0,thumbnailCanvas.width,thumbnailCanvas.height);
			//thumbnailCanvas.src=cameraRender;
			
			////////////////////////////////////////////////////
			// Auto download image
			var tempLink=document.createElement("a");
			tempLink.download=fileName;
			tempLink.href=cameraData;
			document.body.appendChild(tempLink);
			tempLink.click();
			document.body.removeChild(tempLink);
			if(flipHorizontal){
				camCorrectionShader.uniforms.uFlipHorizontal.value=true;
			}
			setCanvasRes([sW,sH]); // Renders the scene too
			
			thumbnailText.innerHTML=thumbnailPrompt;
			promptFader(thumbnailText,true,4);
			promptFader(thumbnailImage,true);
			let tBlock=document.getElementById('thumbnailBlock');
			tBlock.style.zIndex=51;
			pxlActive=true;
			pxlRender();
		//},100);
	//},200);
}

function filter_smartBlur(mult=1){
	camCorrectionShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},
			"uResScaleX":{type:"f",value:1/sW},
			"uResScaleY":{type:"f",value:1/sH},
			"uMalformX":{type:"f",value:1},
			"uFlipHorizontal":{type:"b",value:flipHorizontal},
			"uResAspectX":{type:"f",value:camPictureAspect[0]},
			"uResAspectY":{type:"f",value:camPictureAspect[1]},
		},
		vertexShader:webcamVertex(),
		fragmentShader:webcamFragment_smartBlur(parseInt(smoothReachDist*mult))
	});
	camCorrectionShader.uniforms.tDiffuse.value=vidTexture;
}

function filter_shiftEdgeThickness(force=false, mult=1){
	if( parseInt(edgeReachDist) != edgeReachDistPrev || force){
		edgeReachDistPrev=parseInt(edgeReachDist);
		
		filterShader=new THREE.ShaderMaterial({
			uniforms:{
				"tDiffuse":{type:"t",value:0,texture:null},
				"uResScaleX":{type:"f",value:1/sW},
				"uResScaleY":{type:"f",value:1/sH},
				"uCompensateScale":{type:"b",value:compensateScale},
				"uEdgeMode":{type:"i",value:effectMode},
				"uEdgeReach":{type:"i",value:parseInt(edgeReachDist)},
				"uDarkenImage":{type:"f",value:darkenImageDist}
			},
			vertexShader:webcamVertex(),
			fragmentShader:webcamFragment_colorEdge( parseInt(edgeReachDist*mult) )
		});
		filterShader.uniforms.tDiffuse.value=pxlCamRenderTarget.texture;
		filterShader.uniforms.uDarkenImage.value=darkenImageDist;
		buildComposer();
	}
}

function filter_shiftHueSaturation(force=false){
	if( parseInt(edgeReachDist) != edgeReachDistPrev || force){
		edgeReachDistPrev=parseInt(edgeReachDist);
		
		filterShader=new THREE.ShaderMaterial({
			uniforms:{
				"tDiffuse":{type:"t",value:0,texture:null},
				"uResScaleX":{type:"f",value:1/sW},
				"uResScaleY":{type:"f",value:1/sH},
				"uCompensateScale":{type:"b",value:compensateScale},
				"uFlattenScalar":{type:"f",value:hueSatch_flattenMultColor},
				"uRotateHue":{type:"f",value:hueSatch_rotateHue}
			},
			vertexShader:webcamVertex(),
			fragmentShader:webcamFragment_hueSatch()
		});
		filterShader.uniforms.tDiffuse.value=pxlCamRenderTarget.texture;
		
		buildComposer();
	}
}

function buildComposer(){
	pxlCamComposer = new THREE.EffectComposer(pxlCamEngine, pxlCamRenderTarget);
	//pxlCamComposer = new THREE.RenderPass(pxlCamEngine, pxlCamRenderTarget);
	
	//cameraRenderPass=new THREE.RenderPass(pxlCamScene,pxlCamCamera);
	camCorrectionShaderPass=new THREE.ShaderPass(camCorrectionShader,pxlCamRenderTarget.texture);
	//camCorrectionShaderPass.clear=false;
	//camCorrectionShaderPass.material.transparent=true;
	pxlCamComposer.addPass(camCorrectionShaderPass);
	//filterShaderPass.renderToScreen=true;
	
	pxlCamShaderComposer= new THREE.EffectComposer(pxlCamEngine);
	filterShaderPass=new THREE.ShaderPass(filterShader,pxlCamCamera);
	filterShaderPass.clear=false;
	//filterShaderPass.material.transparent=true;
	
	//pxlCamShaderComposer.addPass(cameraRenderPass);
	//cameraRenderPass.renderToScreen=true;
	pxlCamShaderComposer.addPass(filterShaderPass);
	filterShaderPass.renderToScreen=true;
}

function webcamVertex(){
	return `
	varying vec3 pos;
	varying vec2 vUv;
	void main(){
		vUv=uv;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}`;
}

function webcamFragment_smartBlur(smoothReach){
	var retFrag= ``;
	if(pxlQuality.shaderPrecision==3){
		retFrag+=`
			#ifdef GL_FRAGMENT_PRECISION_HIGH
				precision highp float;
			#else
				precision mediump float;
			#endif`;
	}else if(pxlQuality.shaderPrecision==2){
		retFrag+=`
			precision mediump float;`;
	}else{
		retFrag+=`
			precision lowp float;`;
	}
	retFrag+=`
		uniform sampler2D	tDiffuse;
		uniform float		uMalformX;
		uniform float		uResAspectX;
		uniform float		uResAspectY;
		uniform bool		uFlipHorizontal;
		uniform float		uResScaleX;
		uniform float		uResScaleY;

		varying vec2		vUv;
		
		#define SB_CHEAP 0
		vec3 smartBlurRGB(sampler2D tex, vec2 uv, vec2 dist, float thresh){
			#if (SB_CHEAP == 1)
				const int runCount=4;
				vec2 runDir[runCount];
				runDir[0]=vec2(1.0, 0.0);
				runDir[1]=vec2(0.0, 1.0);
				runDir[2]=vec2(-1.0, 0.0);
				runDir[3]=vec2(0.0, -1.0);
			#else
				const int runCount=8;
				vec2 runDir[runCount];
				runDir[0]=vec2(1.0, 0.0);
				runDir[1]=vec2(1.0, 1.0);
				runDir[2]=vec2(0.0, 1.0);
				runDir[3]=vec2(-1.0, 1.0);
				runDir[4]=vec2(-1.0, 0.0);
				runDir[5]=vec2(-1.0, -1.0);
				runDir[6]=vec2(0.0, -1.0);
				runDir[7]=vec2(1.0, -1.0);
			#endif
			float perc;
			float curPerc=1.0;
			vec2 curUV;
			vec3 origCd=texture2D(tex,uv).rgb;
			vec3 curCd;
			vec3 retCd=origCd;
			float invThresh=1.0/(1.0-thresh);
			float delta;
			float threshTrigger=1.0;
			for(int s=0; s<runCount; ++s){
				for(int r=1; r<`+smoothReach+`; ++r){
					perc=1.0-(float(r)/`+smoothReach+`.0);
					curUV=uv+runDir[s]*(dist*float(r));
					curCd=texture2D(tex,curUV).rgb;
					perc=max(0.0, 1.0-length(origCd-curCd))*perc;
					delta=length(origCd-curCd);
					delta=delta>thresh ? (delta-thresh)*invThresh : 0.0 ;
					//perc*=delta*threshTrigger;
					perc*=threshTrigger;
					
					retCd+=curCd.rgb*perc;
					curPerc+=perc;
					
					threshTrigger=threshTrigger>0.0 && delta<thresh ? threshTrigger : 0.0;
				}
			}
			return retCd/curPerc;
		}
		
		float greyscale(vec3 curCd){
			return 0.2126*curCd.r + 0.7152*curCd.g + 0.0722*curCd.b;
		}
		void main( void ){
			vec2 uv = vUv;
			uv.x=uFlipHorizontal ? 1.0-uv.x : uv.x;
			uv=(uv-.5)*vec2(uResAspectX,uResAspectY)+.5;
			uv.x*=uMalformX;
			
			vec4 Cd=texture2D(tDiffuse,uv);
			vec4 smartBlurCd=vec4( smartBlurRGB(tDiffuse, uv, vec2(uResScaleX,uResScaleY), .15), 1.0);
			Cd=smartBlurCd;
			
			gl_FragColor=Cd;
		}`;
	
	return retFrag;
}

function webcamFragment_colorEdge(edgeReach){
	var retFrag= ``;
	if(pxlQuality.shaderPrecision==3){
		retFrag+=`
			#ifdef GL_FRAGMENT_PRECISION_HIGH
				precision highp float;
			#else
				precision mediump float;
			#endif`;
	}else if(pxlQuality.shaderPrecision==2){
		retFrag+=`
			precision mediump float;`;
	}else{
		retFrag+=`
			precision lowp float;`;
	}
	retFrag+=`
		uniform sampler2D	tDiffuse;
		uniform float		uResScaleX;
		uniform float		uResScaleY;
		uniform bool		uCompensateScale;
		uniform float		uDarkenImage;
		
		uniform int			uEdgeMode;
		uniform int			uEdgeReach;

		varying vec2		vUv;

		#define FE_CHEAP 0
		float findEdgesRGB(sampler2D tex, const vec2 uv, vec2 dist, float thresh){
			#if (FE_CHEAP == 1)
				const int runCount=4;
				vec2 runDir[runCount];
				runDir[0]=vec2(1.0, 0.0);
				runDir[1]=vec2(0.0, 1.0);
				runDir[2]=vec2(-1.0, 0.0);
				runDir[3]=vec2(0.0, -1.0);
			#else
				const int runCount=8;
				vec2 runDir[runCount];
				runDir[0]=vec2(1.0, 0.0);
				runDir[1]=vec2(1.0, 1.0);
				runDir[2]=vec2(0.0, 1.0);
				runDir[3]=vec2(-1.0, 1.0);
				runDir[4]=vec2(-1.0, 0.0);
				runDir[5]=vec2(-1.0, -1.0);
				runDir[6]=vec2(0.0, -1.0);
				runDir[7]=vec2(1.0, -1.0);
			#endif
			float perc;
			float curPerc=1.0;
			vec2 curUV;
			vec3 origCd=texture2D(tex,uv).rgb;
			vec3 curCd;
			vec3 retCd=origCd;
			float edgeValue=0.0;
			float delta;
			float invThresh=1.0/(1.0-thresh);
			for(int s=0; s<runCount; ++s){
				for(int r=1; r<`+edgeReach+`; ++r){
					perc=1.0-(float(r)/`+edgeReach+`.0);
					curUV=uv+runDir[s]*(dist*float(r));
					curCd=texture2D(tex,curUV).rgb;
					delta=min(1.0, length( origCd-curCd));
					delta=delta>thresh ? (delta-thresh)*invThresh : 0.0 ;
					edgeValue+=delta*perc;
					curPerc+=perc;
				}
			}
			return edgeValue/curPerc;
		}
		
		float greyscale(vec3 curCd){
			return 0.2126*curCd.r + 0.7152*curCd.g + 0.0722*curCd.b;
		}
		void main( void ){
			vec2 uv = vUv;
			
			vec4 Cd=texture2D(tDiffuse,uv);
			
			float edges= findEdgesRGB(tDiffuse, uv, vec2(uResScaleX,uResScaleY),.1);
			edges= min(1.0, edges*10.0);
			edges= uEdgeMode==1 ? 1.0-edges : edges;
			float darkenBlend=max(0.0, (uDarkenImage-2.0))*.5;
			darkenBlend*=darkenBlend;
			float greyScaled=mix( greyscale(Cd.rgb*uDarkenImage), 1.0, darkenBlend);
			Cd.rgb=mix( vec3(greyScaled), Cd.rgb, edges );


			gl_FragColor=Cd;
		}`;
	
	return retFrag;
}

function webcamFragment_hueSatch(){
	
	// I've written up RGB->HSV->RGB conversion in the past,
	//   But in no way is it optimized for OpenGL
	// I'll convert it eventually, for now I'm using some open source conversion
	//
	// RGB conversion from -
	// http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl
	
	var retFrag= ``;
	if(pxlQuality.shaderPrecision==3){
		retFrag+=`
			#ifdef GL_FRAGMENT_PRECISION_HIGH
				precision highp float;
			#else
				precision mediump float;
			#endif`;
	}else if(pxlQuality.shaderPrecision==2){
		retFrag+=`
			precision mediump float;`;
	}else{
		retFrag+=`
			precision lowp float;`;
	}
	retFrag+=`
		uniform sampler2D	tDiffuse;
		uniform bool		uCompensateScale;

		uniform float		uFlattenScalar;
		uniform float		uRotateHue;
		
		varying vec2		vUv;
		
		
		vec3 rgb2hsv(vec3 c){
			vec4 K = vec4(0.0, `+(-1.0 / 3.0)+`, `+(2.0 / 3.0)+`, -1.0);
			vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
			vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

			float d = q.x - min(q.w, q.y);
			float e = 1.0e-10;
			return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
		}

		vec3 hsv2rgb(vec3 c){
			vec4 K = vec4(1.0, `+(2.0 / 3.0)+`, `+(1.0 / 3.0)+`, 3.0);
			vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
			return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
		}
		
		float greyscale(vec3 curCd){
			return 0.2126*curCd.r + 0.7152*curCd.g + 0.0722*curCd.b;
		}
		void main( void ){
			vec2 uv = vUv;
			
			vec4 Cd=texture2D(tDiffuse,uv);
			vec4 curCd=texture2D(tDiffuse,uv);

			float greyscaleHueCd=greyscale(Cd.rgb);
			vec3 hsvCd=rgb2hsv( Cd.rgb );
			//hsvCd.r=hsvCd.r+uRotateHue;
			float flatten=sin((hsvCd.g-.5)*uFlattenScalar*.5+.5);
			hsvCd.r=(flatten+uRotateHue) + (hsvCd.b*.75+.25);
			//hsvCd.b*=1.0-flatten*.5;
			//hsvCd.b=hsvCd.r + hsvCd.b;
			hsvCd.g+=hsvCd.b;
			vec3 rgbCd=hsv2rgb(hsvCd);
			Cd.rgb=mix( rgbCd, Cd.rgb, greyscaleHueCd);
			gl_FragColor=Cd;
		}`;
	
	return retFrag;
}


///////////////////////////////////////////////
// Haar Features & Eigen Image Functions //////
//  - Facial Detection Scripts ////////////////
///////////////////////////////////////////////
function buildHaarFeatureComposer(){
	createEigenImage(webcamVideo);
	pxlCamHaarFeatureComposer=new THREE.EffectComposer(pxlCamEngine,pxlCamHaarFeatureRenderTarget);
	let haarFeaturePass=new THREE.ShaderPass(haarFeatureShader,pxlCamHaarFeatureRenderTarget.texture);
	pxlCamHaarFeatureComposer.addPass(haarFeaturePass);
	haarFeaturePass.clear=false;
	
	pxlCamHaarFeatureRenderComposer=new THREE.EffectComposer(pxlCamEngine);
	let haarFeatureRenderPass=new THREE.ShaderPass(haarFeatureRenderShader,pxlCamCamera);
	pxlCamHaarFeatureRenderComposer.addPass(haarFeatureRenderPass);
	haarFeatureRenderPass.clear=false;
	haarFeatureRenderPass.renderToScreen=true;
}
function buildHaarFeatureShader(eigenTexture){
	haarFeatureShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},
			"tEigenimage":{type:"t",value:0,texture:null},
			"uResScaleX":{type:"f",value:1/haarFeatureRes[0]},
			"uResScaleY":{type:"f",value:1/haarFeatureRes[1]},
			"uResAspectX":{type:"f",value:1},
			"uResAspectY":{type:"f",value:1}
		},
		vertexShader:webcamVertex(),
		fragmentShader:haarFeatureSearchFrag()
	});
	haarFeatureShader.uniforms.tDiffuse.value=pxlCamRenderTarget.texture;
	haarFeatureShader.uniforms.tEigenimage.value=eigenTexture;
	
	haarFeatureRenderShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},
			"uResX":{type:"f",value:haarFeatureRes[0]},
			"uResY":{type:"f",value:haarFeatureRes[1]},
			"uResScaleX":{type:"f",value:1/haarFeatureRes[0]},
			"uResScaleY":{type:"f",value:1/haarFeatureRes[1]}
		},
		vertexShader:webcamVertex(),
		fragmentShader:haarFeatureRenderFrag()
	});
	haarFeatureRenderShader.uniforms.tDiffuse.value=pxlCamHaarFeatureRenderTarget.texture;
}

function createEigenImage(canvas){
	if(typeof(canvas)=="string"){
		canvas=document.getElementById(canvas);
	}
	var ctx=eigenImage.getContext("2d");
	ctx.drawImage(canvas, 0,0, canvas.width, canvas.height, 0,0, ...haarFeatureRes);
	let rtDom=pxlCamRenderTarget;
	//console.log(rtDom);
	//ctx.drawImage(rtDom.texture, 0,0, rtDom.viewport.z, rtDom.viewport.w, 0,0, ...haarFeatureRes);
	let imgData=ctx.getImageData(0,0,eigenImage.width,eigenImage.height);
	let pix=imgData.data;
	let eigenRun=haarFeatureRes[0]*haarFeatureRes[1];
	let eigenDataBase=new Array(eigenRun);
	let eigenData=new Array(eigenRun);
	
	// Build Eigenimage data; value accumulation top-left corner to bottom-right corner
	// | | | |  -> -> ->
	// builds top down, and left to right, in one loop
	let d=new Date().getTime();
	for (var v=0; v<eigenRun; v++){//+=4) {
		let c=v*4;
		let x=v%haarFeatureRes[0];
		let y=Math.floor(v/haarFeatureRes[0]);
		let readOffset=(y-1)*haarFeatureRes[0]+x;
		let yValOffset=y>0?eigenDataBase[readOffset]+0:0;
		let xValOffset=x>0?eigenData[v-1]:0;
		
		let curValue=(1-(pix[c]+pix[c+1]+pix[c+2])*.33333333333*0.00392156862745098);
		eigenDataBase[v]=curValue+yValOffset;
		eigenData[v]=curValue+yValOffset+xValOffset;
	}
	
	// ## Check for float texture, if not, use Uint8Array and THREE.UnsignedByteType
	//      Might be useful to not have this mode if not
	//pxlCamEngine.context.getExtension('OES_texture_float');
	//pxlCamEngine.context.getExtension('OES_texture_float_linear');
	
	eigenDataBase=new Float32Array(eigenDataBase);
	eigenData=new Float32Array(eigenData);
	//eigenTexture= new THREE.DataTexture(eigenDataBase, haarFeatureRes[0], haarFeatureRes[1], THREE.LuminanceFormat, THREE.FloatType);
	eigenTexture= new THREE.DataTexture(eigenData, haarFeatureRes[0], haarFeatureRes[1], THREE.LuminanceFormat, THREE.FloatType);
	eigenTexture.magFilter=THREE.NearestFilter;
	eigenTexture.needsUpdate=true;
	
	if(haarFeatureShader){
		haarFeatureShader.uniforms.tEigenimage.value=eigenTexture;
	}else{
		buildHaarFeatureShader(eigenTexture);
	}
}

function haarFeatureHelper(ehActive){
	haarFeatureHelperDisplay=ehActive;
}
function haarFeatureSearchFrag(){
	let zoneSize="22.0";
	let zoneResize=1/parseFloat(zoneSize);
	var retFrag= ``;
	if(pxlQuality.shaderPrecision==3){
		retFrag+=`
			#ifdef GL_FRAGMENT_PRECISION_HIGH
				precision highp float;
			#else
				precision mediump float;
			#endif`;
	}else if(pxlQuality.shaderPrecision==2){
		retFrag+=`
			precision mediump float;`;
	}else{
		retFrag+=`
			precision lowp float;`;
	}
	retFrag+=`
		uniform sampler2D	tDiffuse;
		uniform sampler2D	tEigenimage;
		uniform float		uResX;
		uniform float		uResY;
		uniform float		uResScaleX;
		uniform float		uResScaleY;
		
		varying vec2		vUv;
		
		void main( void ){
			vec2 uv = vUv;
			vec2 vidUV=vec2(uv.x, 1.0-uv.y);
			float featureThresh=0.5;
			float zoneSize=`+zoneSize+`;
			float zoneResize=`+zoneResize+`;
			vec4 Cd=texture2D(tDiffuse,vidUV);
			//vec4 Cd=texture2D(tEigenimage,vidUV);
			//Cd=vec4(vec3(eigen),1.0);
			vec2 rangeFrom=floor(uv*zoneSize);
			vec2 rangeTo=floor( uv*zoneSize+vec2(1.0));
			vec2 rangeMid=vec2( (rangeTo.x+rangeFrom.x)*.5, (rangeTo.y+rangeFrom.y)*.45);
			
			// ## This is off by 1 in X and Y axes
			// Just get it working!
			float bright=(rangeTo.x-rangeFrom.x)*(rangeMid.y-rangeFrom.y);
			float dark=(rangeTo.x-rangeFrom.x)*(rangeTo.y-rangeMid.y);
			float count=(rangeTo.x-rangeFrom.x-1.0)*(rangeTo.y-rangeFrom.y);
			float avg=bright/count;
			
			rangeFrom=rangeFrom*zoneResize-vec2(uResScaleX,uResScaleY);
			rangeMid=rangeMid*zoneResize-vec2(uResScaleX,uResScaleY);
			rangeTo=rangeTo*zoneResize-vec2(uResScaleX,uResScaleY);
			
			float eigenTR=texture2D( tEigenimage,vec2(rangeTo.x, rangeFrom.y) ).x;
			float eigenTL=texture2D( tEigenimage,vec2(rangeFrom.x, rangeFrom.y) ).x;
			float eigenML=texture2D( tEigenimage,vec2(rangeFrom.x, rangeMid.y) ).x;
			float eigenMR=texture2D( tEigenimage,vec2(rangeTo.x, rangeMid.y) ).x;
			float eigenBL=texture2D( tEigenimage,vec2(rangeFrom.x, rangeTo.y) ).x;
			float eigenRefMid=texture2D( tEigenimage,vec2(rangeTo.x, rangeMid.y) ).x;
			float eigenRefMax=texture2D( tEigenimage,vec2(rangeTo.x, rangeTo.y) ).x;
			float eigenBright=(eigenRefMid-eigenTR-eigenML+eigenTL)/bright;
			float eigenDark=(eigenRefMax-eigenMR-eigenBL+eigenML)/dark;
			//float eigen=(uv.y-rangeMid.y)*10.0>.5?eigenBright:eigenDark;
			float eigen=eigenDark<eigenBright?0.0:1.0;
			float debug=(eigenDark-eigenBright)>featureThresh?0.0:1.0;//1.0:0.0;
			
			//Cd=mix( texture2D(tDiffuse,vidUV), vec4(1.0,0.0,0.0,1.0), eigen );
			//Cd=mix( vec4(vec3(eigen),1.0), vec4(1.0,0.0,0.0,1.0), eigen );
			Cd=vec4(debug,Cd.x,Cd.x,1.0);
			
			gl_FragColor=Cd;
		}`;
	
	return retFrag;
}
function haarFeatureRenderFrag(){
	var retFrag= ``;
	if(pxlQuality.shaderPrecision==3){
		retFrag+=`
			#ifdef GL_FRAGMENT_PRECISION_HIGH
				precision highp float;
			#else
				precision mediump float;
			#endif`;
	}else if(pxlQuality.shaderPrecision==2){
		retFrag+=`
			precision mediump float;`;
	}else{
		retFrag+=`
			precision lowp float;`;
	}
	retFrag+=`
		uniform sampler2D	tDiffuse;
		uniform float		uResScaleX;
		uniform float		uResScaleY;
		
		varying vec2		vUv;
		
		void main( void ){
			vec2 uv = vUv;
			uv.y=1.0-uv.y;
			
			vec4 Cd=texture2D(tDiffuse,uv);
			
			gl_FragColor=Cd;
		}`;
	
	return retFrag;
}
