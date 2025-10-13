

function mapBootEngine(){
	
	// Rederer
	mapEngine=new THREE.WebGLRenderer({
		canvas: mapCanvas,
		//antialias: true,
		alpha: true,
	});
	//mapEngine.autoClear=false;
	if(verbose){
		if(mapEngine.extensions.get('WEBGL_depth_texture')){
			console.log("  ** WebGL Depth Texture support enabled **");
		}else{
			console.log("  ** WebGL Depth Texture NOT supported **");
		}
		console.log("-- Depth Composer pass currently not used, --");
		console.log("  -- A future technology for Metal Asylum --");
	}
	mapEngine.setClearColor(0x000000);
	mapEngine.setPixelRatio(1);//window.devicePixelRatio);
	mapEngine.setPixelRatio(window.devicePixelRatio);
	//mapEngine.setSize(mapW/mapResPerc, mapH/mapResPerc);
	mapEngine.setSize(mapW/mapResPerc, mapH/mapResPerc);
	//mapEngine.setSize(mapW, mapH);
	//mapEngine.gammaOutput=true;
	
	//texLoader=new THREE.ImageLoader();
	
	/////////////////////////////////////////////
	//Shadow Maps-
	/*mapEngine.shadowMap.enabled=true;
	if(mobile==3){
		mapEngine.shadowMap.type=THREE.BasicShadowMap;
	}else{
		mapEngine.shadowMap.type=THREE.PCFScatterShadowMap;//PCFShadowMap;//PCFSoftShadowMap;
		//mapEngine.shadowMap.type=THREE.PCFSoftShadowMap;
	}*/
	
	var aspectRatio=mapCanvas.width/mapCanvas.height;
	mapCam=new THREE.PerspectiveCamera(75,aspectRatio, 1, 30);
	mapCam.position.z=10;
	mapCam.target=new THREE.Vector3(0,0,0);
	mapScene=new THREE.Scene();
	mapProcessScene=new THREE.Scene();
	
	textureQuality="_1k";
	
	var textureList;
	var transformList;
	
	///////////////////////////////////////////////////////
	// Temp Main Menu Latch
	var imgRes={width:mapW, height:mapH};
	var coords={x:-sW*.5,y:-sH*.5, z:0};
	var verts=new Float32Array([
		coords.x, coords.y, coords.z,
		coords.x+imgRes.width, coords.y, coords.z,
		coords.x+imgRes.width, coords.y+imgRes.height, coords.z,
		coords.x, coords.y+imgRes.height, coords.z
	]);
	verts=new Float32Array([
		-1,-1,0,
		1,-1,0,
		1,1,0,
		-1,1,0
	]);
	var uvs=new Float32Array([
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
	]);
	
	var geo=new THREE.BufferGeometry();
	geo.setIndex([0,1,2, 2,3,0]);
	geo.addAttribute("position", new THREE.BufferAttribute( verts, 3));
	geo.addAttribute("uv", new THREE.BufferAttribute(uvs,2));
	
	markerTexture=new THREE.CanvasTexture(markerCanvas);
	markerTexture.needsUpdate=true;
	markerTexture.transparent=true;
	bgTexture=new THREE.CanvasTexture(bkCanvas);
	//markerTexture=new THREE.TextureLoader();
	//console.log(mousePrevX);
	
	bgUniformMouseXY.set( mouseX/cW*(cW/sW), 1-mouseY/cH*(cH/sH) );
	bgUniformMousePrevX.set((mousePrevX[0]/cW)*(cW/sW), (mousePrevX[1]/cW)*(cW/sW), (mousePrevX[2]/cW)*(cW/sW) );
	bgUniformMousePrevY.set(1-mousePrevY[0]/cH*(cH/sH), 1-mousePrevY[1]/cH*(cH/sH), 1-mousePrevY[2]/cH*(cH/sH) );
	
	markerShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:markerTexture},//.load("cloud3d.jpg")},
			"tBG":{type:"t",value:bgTexture},//.load("cloud3d.jpg")},
			"uResolutionDiv":{value: new THREE.Vector2(1/cW,1/cH)},
			"uCurMouse":{type:"v2",value: bgUniformMouseXY },
			"uPrevMouseX":{type:"v3",value: bgUniformMousePrevX },
			"uPrevMouseY":{type:"v3",value: bgUniformMousePrevY },
			"flicker":{type:"f",value:0},
			"time":{type:"f",value:0}
		},
		//vertexShader:document.getElementById("bgGlowVert").textContent,
		//fragmentShader:document.getElementById("bgGlowFrag").textContent
		vertexShader:document.getElementById("bgGlowVert").textContent,
		fragmentShader:document.getElementById("bgGlowFrag").textContent
	});
	//console.log(markerShader.uniforms);
/*	markerShader=new THREE.MeshBasicMaterial({
		map:markerTexture,
		transparent:true
	});*/
	
	var bgDisp=new THREE.Mesh(geo, markerShader);
	bgDisp.position.set(0,0,0);
	mapScene.add(bgDisp);
	
	
	var blurDist=5;
		/*
	var blurFragPass=[
		"uniform sampler2D tDiffuse;",
		"uniform vec2 uResolutionDiv;",
		"uniform vec2 uBlurDir;",
		"varying vec2 vUv;",
		"",
		"vec4 buildGlow(sampler2D tex){",
			"vec2 areaArr[9];",
			"areaArr[0]=vec2(-1,-1);",
			"areaArr[1]=vec2(0,-1);",
			"areaArr[2]=vec2(1,-1);",
			"areaArr[3]=vec2(-1,0);",
			//"areaArr[4]=vec2(0,0);",
			"areaArr[5]=vec2(1,0);",
			"areaArr[6]=vec2(-1,1);",
			"areaArr[7]=vec2(0,1);",
			"areaArr[8]=vec2(1,1);",
			"",
			"vec4 ret=vec4(0.);",
			"float xx, perc;",
			"for(int x=0; x<"+blurDist+"; ++x){",
				"xx=float(x+1);",
				"perc=xx*"+(1/(blurDist+1))+";",
				"for(int c=0; c<9; ++c){",
					"ret+=texture2D(tDiffuse,vUv+areaArr[c]*uBlurDir*uResolutionDiv*perc*"+blurDist+".) * (1.-perc);",
				"}",
			"}",
			"return ret*"+(1/(blurDist+1))+";",
		"}",
		"void main(){",
			"//float timer=time/100.0;",
			"vec4 Cd=buildGlow(tDiffuse);",
			"Cd+=texture2D(tDiffuse,vUv);",
			"gl_FragColor=Cd;",
		"}" ].join("\n");
		*/
	// Double Pass
	/*var blurFragPass=[
		"uniform sampler2D tDiffuse;",
		"uniform vec2 uResolutionDiv;",
		"uniform vec2 uBlurDir;",
		"uniform int uTester;",
		"varying vec2 vUv;",
		"",
		"vec4 buildGlow(sampler2D tex){",
			"vec4 ret=vec4(0.);",
			"float xx, perc;",
			"for(int x=0; x<"+(mobile?5:7)+"; ++x){",
				"xx=float(x*2+1);",
				"perc=xx*"+(1/(blurDist))+";",
				//"perc=1.-(1.-perc)*(1.-perc);",
				"perc=((1.-perc)*(1.-perc));",
				"ret+=texture2D(tDiffuse,vUv+uBlurDir*uResolutionDiv*perc*"+blurDist+".) * (1.-perc);",
				"ret+=texture2D(tDiffuse,vUv+uBlurDir*uResolutionDiv*perc*-"+blurDist+".) * (1.-perc);",
				//"ret+=texture2D(tDiffuse,vUv+uBlurDir*uResolutionDiv*perc*"+blurDist+".*(mod(float(x),1.)==1.?1.:-1.)) * (1.-perc);",
				//"if(ret.a>.3){",
					"ret*=1.15;",
				//"}",
			"}",
			"return ret*"+(1/(blurDist))+"*1.;",
		"}",
		"void main(){",
			"//float timer=time/100.0;",
			"vec4 Cd=buildGlow(tDiffuse);",
			"vec4 origCd=texture2D(tDiffuse,vUv);",
			"Cd+=origCd.a*.4;",
			//"Cd+=uTester==0?texture2D(tDiffuse,vUv):vec4(0.);",
			"gl_FragColor=Cd;",
		"}" ].join("\n");
		*/
	var blurFragPass=[
		"uniform sampler2D tDiffuse;",
		"uniform vec2 uResolutionDiv;",
		"uniform vec2 uBlurDir;",
		"uniform float uTime;",
		"uniform int uTester;",
		"varying vec2 vUv;",
		"",
		"#define PI 3.14159265358979",
		"",
		"vec4 buildGlow(sampler2D tex){",
		
			"vec2 areaArr[9];",
			"areaArr[0]=vec2(-1.,-1.);",
			"areaArr[1]=vec2(0.,-1.);",
			"areaArr[2]=vec2(1.,-1.);",
			"areaArr[3]=vec2(-1.,0.);",
			"areaArr[4]=vec2(0.,0.);",
			"areaArr[5]=vec2(1.,0.);",
			"areaArr[6]=vec2(-1.,1.);",
			"areaArr[7]=vec2(0.,1.);",
			"areaArr[8]=vec2(1.,1.);",
		
			"float timer=uTime;",
		
			"vec4 ret=vec4(0.);",
			"float xx, perc;",
			"vec2 readUVs=vec2(0.,0.);",
			"for(int x=0; x<"+(mobile?5:7)+"; ++x){",
				"xx=float(x*2+1);",
				"perc=xx*"+(1/((mobile?5:7)))+";",
				//"perc=1.-(1.-perc)*(1.-perc);",
			//"perc=((1.-perc)*(1.-perc));",
				"readUVs=uBlurDir;//vec2(sin(uBlurDir.x*PI*59223.3-vUv.x*24222253.43+xx*342.3), cos(uBlurDir.y*PI*23224.2+vUv.y*35222927.24+xx*20.5));",
				"ret+=texture2D(tDiffuse,vUv+readUVs*uResolutionDiv*perc*"+blurDist+".) * (1.-perc);",
				"ret+=texture2D(tDiffuse,vUv+readUVs*uResolutionDiv*perc*-"+blurDist+".) * (1.-perc);",
				//"ret+=texture2D(tDiffuse,vUv+uBlurDir*uResolutionDiv*perc*"+blurDist+".*(mod(float(x),1.)==1.?1.:-1.)) * (1.-perc);",
				//"if(ret.a>.3){",
					"ret*=1.15;",
				//"}",
			"}",
			"return ret*"+(1/(blurDist))+"*1.;",
		"}",
		"void main(){",
			"//float timer=time/100.0;",
			"vec4 Cd=buildGlow(tDiffuse);",
			"vec4 origCd=texture2D(tDiffuse,vUv);",
			"Cd+=origCd.a*.4;",
			"Cd.a=1.;",
			//"Cd+=uTester==0?texture2D(tDiffuse,vUv):vec4(0.);",
			"gl_FragColor=Cd;",
		"}" ].join("\n");
	
	blurShaderU=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},//.load("cloud3d.jpg")},
			"uTester":{type:"i",value:0},
			"uResolutionDiv":{value: new THREE.Vector2(1/cW,1/cH)},
			"uBlurDir":{value: new THREE.Vector2(1,0)},
			"uTime":{type:"f",value:0}
		},
		//vertexShader:document.getElementById("bgGlowVert").textContent,
		//fragmentShader:document.getElementById("bgGlowFrag").textContent
		vertexShader:document.getElementById("cleanVert").textContent,
		fragmentShader:blurFragPass
	});
	blurShaderV=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:1,texture:null},//.load("cloud3d.jpg")},
			"uTester":{type:"i",value:0},
			"uResolutionDiv":{value: new THREE.Vector2(1/cW,1/cH)},
			"uBlurDir":{value: new THREE.Vector2(1,1)},
			"uTime":{type:"f",value:0}
		},
		//vertexShader:document.getElementById("bgGlowVert").textContent,
		//fragmentShader:document.getElementById("bgGlowFrag").textContent
		vertexShader:document.getElementById("cleanVert").textContent,
		fragmentShader:blurFragPass
	});
	/*bgTexture=new THREE.CanvasTexture(bkCanvas);
	bgShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:bgTexture},//.load("cloud3d.jpg")},
		},
		//vertexShader:document.getElementById("bgGlowVert").textContent,
		//fragmentShader:document.getElementById("bgGlowFrag").textContent
		vertexShader:document.getElementById("cleanVert").textContent,
		fragmentShader:document.getElementById("bgFrag").textContent
	});*/
	
	
	// Composer - Default Scene; All objects
	mapTempMenuComposer = new THREE.EffectComposer(mapEngine);
	mainMenuPass=new THREE.RenderPass(mapScene,mapCam);
	mainMenuPass.clear=false;
	//mainMenuPass.alpha=true;
	/*
	if(mobile || 1){
		markerShaderPass=new THREE.ShaderPass(markerShader);
		//markerShaderPass.material.transparent=true;
		//markerBlurUShaderPass=new THREE.ShaderPass(blurShaderU);
		//markerBlurUShaderPass.material.transparent=true;
		//markerBlurVShaderPass=new THREE.ShaderPass(blurShaderV);
		markerShaderPass.renderToScreen=true;
	}else{
		markerShaderPass=new THREE.ShaderPass(markerShader);
		//markerShaderPass.material.transparent=true;
		markerBlurUShaderPass=new THREE.ShaderPass(blurShaderU);
		//markerBlurUShaderPass.material.transparent=true;
		markerBlurVShaderPass=new THREE.ShaderPass(blurShaderV);
		markerBlurVShaderPass.renderToScreen=true;
	}
	*/
		mainMenuPass.renderToScreen=true;
mapTempMenuComposer.addPass(mainMenuPass);
	//mainMenuPass.renderToScreen=true;
//mapTempMenuComposer.addPass(markerBlurUShaderPass);
//mapTempMenuComposer.addPass(markerBlurVShaderPass);
//markerBlurVShaderPass.renderToScreen=true;
	
}



function mapRender(){
//benchMark(0, "markers");
	var curMS=Date.now();
	runner++;
	
	//mapUpdateCamera();
		
	var curCrop=1;
	/*mainMenuShaderPass.uniforms.cropTop.value=1-((1-mapMainMenuCropTop)*curCrop);
	
	mainMenuShaderPass.uniforms.cropBottom.value=mapMainMenuCropBottom*curCrop;
	var menuBottom=(1-mapMainMenuCropBottom*curCrop)*sH */
	
	//var offsetNoise=Math.sin(runner*.0187+Math.cos(runner*.003)+352.15);
	//offsetNoise=Math.sin(runner*.00145+Math.cos(runner*.0075+165.91)+offsetNoise)*.5+.5;

	//mapSlipNoise.unshift(offsetNoise);
	//mapSlipNoise.pop();
	
	runCanvas("markerCanvas",0,1);
	//mainMenuShaderPass.uniforms.flicker.value=offsetNoise;
	blurShaderU.uniforms.uTime.value=runner*.3;
	blurShaderV.uniforms.uTime.value=runner*.3;
	
	
	markerShader.uniforms.uCurMouse.value= bgUniformMouseXY;
	markerShader.uniforms.uPrevMouseX.value= bgUniformMousePrevX;
	markerShader.uniforms.uPrevMouseY.value= bgUniformMousePrevY;
			
	markerTexture.needsUpdate=true;
	markerTexture.transparent=true;
	
	mapTempMenuComposer.render();
	
	//mapEngine.render(mapScene, mapCam);
		
	
	if(fpsStats!=-1){
		fpsStats.update();
	}
		
	objsBooted=1;
	
	if(pause == 0){
		//setTimeout(function(){
			requestAnimationFrame(mapRender);
		//},25);
	}
//benchMark(1, "pullAll");
}