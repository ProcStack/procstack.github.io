/* function boot(){
	if(verbose){
		console.log(mapToDoList);
		console.log("Verbose console logs are ON");
	}
	document.onmousemove=function(e){mapOnMove(e);};
	document.onmousedown=function(e){mapOnDown(e);};
	document.onmouseup=function(e){mapOnUp(e);};
    document.addEventListener(mouseWheelEvt, function(e) {mouseWheel(e);}, false)
	window.onresize=function(e){resizeRenderResolution();};
	
	document.addEventListener('touchstart', function(e) {startTouch(e);}, false);
	document.addEventListener('touchmove', function(e) {doTouch(e);}, false);
	document.addEventListener('touchend', function(e) {endTouch(e);}, false);
	
	mapCanvas=document.getElementById(mapCore);
	mapW=window.innerWidth*mapResPerc;
	mapCanvas.width=window.innerWidth;
	mapH=window.innerHeight*mapResPerc;
	mapCanvas.height=window.innerHeight;
	mapBootEngine();
	mapRender(runner);
	//mapPrepGUI();
} */

/*function getMouseXY(e){
	e.preventDefault();
	if(touchScreen==0){
		mouseX=e.clientX;
		mouseY=e.clientY;
	}else{
		touch = e.touches[0];
		mouseX = touch.pageX;
		mouseY = touch.pageY;
	}
	mapMouse.x=(mouseX/sW)*2 - 1;
	mapMouse.y=-(mouseY/sH)*2 + 1;
}
*/
//if(addToProcessorScene){mapProcessScene.add(processorObj[0]);}
function mapOnDown(e){
	e.preventDefault();
	mouseButton=e.which;
	xyDeltaData.active=1;
	xyDeltaData.mode=mouseButton;
	xyDeltaData.startPos=new THREE.Vector2(mouseX,mouseY);
	xyDeltaData.endPos=new THREE.Vector2(mouseX,mouseY);
	xyDeltaData.dragCount=0;
}
function mapOnMove(e){
	e.preventDefault();
	getMouseXY(e);
	if(xyDeltaData.active==1){
		xyDeltaData.dragCount++;
		if(xyDeltaData.dragCount == 8){
			if(xyDeltaData.latched==0){
				setCursor("grabbing");
			}
			xyDeltaData.latched=1;
		}
		/*if(xyDeltaData.endPos!=null){
			xyDeltaData.startPos.x=xyDeltaData.endPos[0];
			xyDeltaData.startPos.y=xyDeltaData.endPos[1];
		}*/
		xyDeltaData.endPos=new THREE.Vector2(mouseX,mouseY);
	}
}
function mapOnUp(e){
	e.preventDefault();
	
	if(mapCamMode == 2){
		mapOnUpBook();
	}else{
		mapOnUpRayCaster();
	}
	//getMouseXY(e);
	xyDeltaData.dragCount++;
	xyDeltaData.dragTotal+=xyDeltaData.dragCount;
	xyDeltaData.active=0;
	xyDeltaData.latched=0;
	xyDeltaData.endPos=new THREE.Vector2(mouseX,mouseY);
}
function mapOnExitMode(){
	xyDeltaData.startPos=new THREE.Vector2(0,0);
	xyDeltaData.endPos=new THREE.Vector2(0,0);
	xyDeltaData.dragTotal=1;
	
	xyDeltaData.netDistance[0]=0;
	xyDeltaData.netDistance[1]=0;
	xyDeltaData.netDistance[2]=0;
	xyDeltaData.latchMatrix=null;
	mouseWheelDelta=0;
	mapCamObjLatchOffset=[0,0];
	setCursor("default");
	mapCamObjLatchPrev=null;
}
/* function mouseWheel(e){ // Scroll wheel
	//Ehhhh IE be damned...
	// ... Bleh ... I'll address issues after MAP is done
	var delta=Math.sign(e.detail || e.wheelDelta);
	mouseWheelDelta+=delta;
	if(mapCamMode == 2){
		mouseWheelDelta=Math.max(-10, mouseWheelDelta);
		if(delta<0){
			xyDeltaData.netDistance[0]*=.9;
			xyDeltaData.netDistance[2]*=.9;
		}else{
			var blend=.5;
			objRaycast.setFromCamera(mapMouse,mapCam);
			var rayHits=objRaycast.intersectObjects([geoList['table'][0]]);
			var objRayCurPos=new THREE.Vector3(xyDeltaData.netDistance[0],xyDeltaData.netDistance[1],xyDeltaData.netDistance[2]);
			if(rayHits.length > 0){
				for(var x=0; x<rayHits.length;++x){
					var obj=rayHits[x].object;
					objRayCurPos=rayHits[x].point;
					break;
				}
				//objRayCurPos.sub(mapBookCentroid).multiplyScalar(-1*(mouseWheelDelta/10));//.sub(mapCam.position);
				objRayCurPos.sub(mapCam.position).multiplyScalar(3).multiplyScalar(-1*(Math.max(0,mouseWheelDelta/3)));
				xyDeltaData.netDistance[0]=xyDeltaData.netDistance[0]+ objRayCurPos.x;//*blend;
				xyDeltaData.netDistance[2]=xyDeltaData.netDistance[2]+ objRayCurPos.z;//*blend;
			}
		}
	}
}
*/
function resizeRenderResolution(){
	mapW=(sW=window.innerWidth)*mapResPerc;
	mapH=(sH=window.innerHeight)*mapResPerc;
	
	mapCanvas.width=mapW;
	mapCanvas.height=mapH;
	mapEngine.setPixelRatio(window.devicePixelRatio*mapResPerc);
	mapEngine.setSize(mapW/mapResPerc, mapH/mapResPerc);
	var aspectRatio=mapW/mapH;
	mapCam.aspect=aspectRatio;
	mapCam.updateProjectionMatrix();
	mapEngine.render(mapScene,mapCam);
}
/*
document.onkeyup=function(e){keyUpCall(e);};
function keyUpCall(e){
	e.preventDefault();
	keyHit=e.keyCode || e.which;
	// Space
	if(keyHit == 32){
		pausePlayback();
	}
	// F
	if(keyHit == 70){
		toggleMSLog();
	}
	// M
	if(keyHit == 77){
		toggleMaskRender();
	}
	// R
	if(keyHit == 82 && loadFullTome==1){
		mapBookOpenToggle();
	}
	// Left
	if(keyHit == 37 && loadFullTome==1){
		mapBookChangePage('prev');
	}
	// Right
	if(keyHit == 39 && loadFullTome==1){
		mapBookChangePage('next');
	}
}

function startTouch(e) {
	touchScreen=1;
	var touch = e.touches[0];
	mouseX = touch.pageX;
	mouseY = touch.pageY;
	e.preventDefault();
	mapOnClick(e);
}

function doTouch(e) {
	var touch = e.touches[0];
	if(typeof(e.touches[1]) !== 'undefined'){
		var touchTwo = e.touches[1];
	}
	mouseX=touch.pageX;
	mouseY=touch.pageY;
	e.preventDefault();
}
function endTouch(e) {
	var touch = e.touches[0];
	e.preventDefault();
}
*/
function mapAutoQualityToggle(val=-1){
	if(val==-1){
		mapAutoQuality=(mapAutoQuality+1)%2;
	}else{
		mapAutoQuality=val;
	}
}

function mapAutoQualityCheck(){
	if(mapAutoQuality==1){
		if(mapReduceLoadCount-mapReduceLoadPrevCount>mapReduceLoadDelta){
			mapReduceLoadPrevCount=mapReduceLoadCount;
			mapReduceLoadMode++;
			var dustCount=datDustParticlesSlider.getValue();
			var resScale=datRenderResolutionSlider.getValue();
			var toResScale=resScale-.05;
			var resScaleLimit=mobile==1?.25:.35;
			if( dustCount>2000 || resScale>.5){
				if(dustCount>15000){
					dustCount=dustCount - dustCount*.1;
					datDustParticlesSlider.setValue( dustCount );
					return true;
				}
				if(mapReduceLoadMode%3==0 || resScale==resScaleLimit){
					dustCount=dustCount - dustCount*.2;
					datDustParticlesSlider.setValue( dustCount );
				}
				if(mapReduceLoadMode%3==1 && resScale>resScaleLimit){
					datRenderResolutionSlider.setValue( toResScale );
				}
			}else{
				if(mapReduceLoadMode%4==1 && resScale>resScaleLimit){
					datRenderResolutionSlider.setValue( toResScale );
				}else if(mapReduceLoadMode%4==2 && dustCount>80){
					dustCount=dustCount - dustCount*.3;
					datDustParticlesSlider.setValue( dustCount );
				}else if(mapReduceLoadMode%4==3){
					var shadowVal=Math.max(2,datShadowSlider.getValue()-10);
					datShadowSlider.setValue( shadowVal );
				}
				if(mapReduceLoadMode%20==0 && dustCount<200 && resScale==resScaleLimit){
					var frameVal=datSkipFramesSlider.getValue();
					if(frameVal<4){
						frameVal=Math.min(4,frameVal+1);
						datSkipFramesSlider.setValue( frameVal );
					}
				}
			}
		}
	}
}

function pausePlayback(){
	mapPause=(mapPause+1)%2;
	if(mapPause==0){
		mapRender(runner);
	}
	if(datPauseButton!=-1){
		if(mapPause == 1){
			datPauseButton.name("Start Playback");
		}else{
			datPauseButton.name("Pause Playback");
		}
	}
}

function setCursor(cursorType){
	if(cursorType == "activeLatch"){
		if(mouseButton==0){
			cursorType="grab";
		}else if(mouseButton==1){
			cursorType="grabbing";
		}else if(mouseButton==2){
			cursorType="all-scroll";
		}
	}else{
		prevCursor=null;
	}
	document.body.style.cursor=cursorType;
}

function toggleMSLog(){
	msLog=(msLog+1)%2;
}
function msLogDisp(reset=0){
	msLog=(msLog+1)%2;
}

function toggleMaskRender(){
	maskRender=(maskRender+1)%3;
	diffuseShader.uniforms.maskDisplay.value=maskRender;
}

function mapPrepGUI(){
	datGui=new dat.gui.GUI();
	datGui.closed=true;
	var parms={
		autoQuality:function(){
			mapAutoQualityToggle();
			if(datQualityButton!=-1){
				if(mapAutoQuality == 1){
					datQualityButton.name("Auto Quality On");
				}else{
					datQualityButton.name("Auto Quality Off");
				}
			}
		},
		renderResolution:options_renderResolution,
		skip:options_fpsRateDrop,
		dust:options_dustParticles,
		shadow:options_shadowQuality,
		pause:function(){
			pausePlayback();
			if(datPauseButton!=-1){
				if(mapPause == 1){
					datPauseButton.name("Start Playback");
				}else{
					datPauseButton.name("Pause Playback");
				}
			}
		},
		stats:function(){
			if(fpsStats == -1){
				fpsStats=new Stats();
				document.body.appendChild(fpsStats.domElement);
				fpsStats.update();
				datStatsButton.name("Hide FPS Stats");
			}else{
				fpsStats.domElement.remove();
				fpsStats=-1;
				datStatsButton.name("Display FPS Stats");
			}
		}
	};
	datQualityButton=datGui.add(parms,'autoQuality').name("Auto Quality On");
	datRenderResolutionSlider=datGui.add(parms,'renderResolution').name("Render Quality").min(.01).max(1).step(.01).onChange(function(){
		options_renderResolution=mapResPerc=parms.renderResolution;
		resizeRenderResolution();
	});
	datSkipFramesSlider=datGui.add(parms,'skip').name("Skip Frames").min(0).max(5).step(1).onChange(function(){
		options_fpsRateDrop=parms.skip;
	});
	datDustParticlesSlider=datGui.add(parms,'dust').name("Dust Particles").min(0).max(50000).step(1).onChange(function(){
		options_dustParticles=parms.dust;
	});
	datShadowSlider=datGui.add(parms,'shadow').name("Shadow Quality").min(0).max(50).step(1).onChange(function(){
		options_shadowQuality=parms.shadow;
		var changeRes=-1;
		if(options_shadowQuality>25){
			//mapEngine.shadowMap.type=THREE.PCFSoftShadowMap;
			//options_shadowQuality-=10;
			changeRes=1024;
		}else if(options_shadowQuality<=25 && options_shadowQuality>15){
			//mapEngine.shadowMap.type=THREE.PCFSoftShadowMap;
			//options_shadowQuality-=10;
			changeRes=512;
		}else if(options_shadowQuality<=15 && options_shadowQuality>4){
			//mapEngine.shadowMap.type=THREE.PCFShadowMap;
			//options_shadowQuality-=options_shadowQuality/2;
			changeRes=256;
		}else{
			//mapEngine.shadowMap.type=THREE.BasicShadowMap;
			changeRes=128;
		}
		if(options_shadowQuality==0){
			mapEngine.shadowMap.type=THREE.BasicShadowMap;
		}else{
			mapEngine.shadowMap.type=THREE.PCFSoftShadowMap;//BasicShadowMap;
		}
		var updateRes=0;
		if(changeRes!=options_shadowMapRes){
			options_shadowMapRes=changeRes;
			updateRes=1;
		}
		for(var x=0; x<lightList['candleFlame'].length;++x){
			if(lightList['candleFlame'][x].castShadow){
				lightList['candleFlame'][x].shadow.radius=options_shadowQuality*options_shadowQualityMult;
				if(updateRes==1){
					lightList['candleFlame'][x].shadow.mapSize.width=changeRes;
					lightList['candleFlame'][x].shadow.mapSize.height=changeRes;
					lightList['candleFlame'][x].shadow.map.dispose();
					lightList['candleFlame'][x].shadow.map=null;
				}
			}
		}
	});
	datPauseButton=datGui.add(parms,'pause').name("Pause Playback");
	datStatsButton=datGui.add(parms,'stats').name("Display FPS Stats");
}

function degToRad(deg){
	return deg*(Math.PI/180);
}

//////////////////////////////////////

var verboseLoading=new THREE.LoadingManager();
verboseLoading.onProgress=function(i,l,t){
	if(verbose){console.log(i,l,t);}
};

var onProgress=function(xhr){
	if(verbose && xhr.lengthComputable){
		var perc=xhr.loaded/xhr.total * 100;
		console.log(parseInt(perc)+" downloaded");
	}
};
var onError=function(xhr){
	if(verbose){console.log("ERROR! - Real descriptive...");}
}
var onLoad=null;

function tListIdent(parentObj=null){
	var ident={
	"t":[0,0,0],
	"r":[0,0,0],
	"s":[1,1,1]
	};
	if(parentObj != null){
		ident[parentObj[0]]=parentObj[1];
	}
	return ident;
}


function genIntroMesh(){
		var xDiff=200;
		var yDiff=30;
		var yAdd=.3;
		var noiseMult=10;
		var noiseSpeed=.04;
		var noiseOffset=imbixTimer*noiseSpeed;
		var noiseYMult;
		var x,y,xPos,yPos,xTo,yTo,xNoise,yNoise,lineMult;
		var lineCount=[1,2,3,4,5,6,5,2];
		var gridColor=[120,200,160];
		var pointColor=[140,225,200];
		clearScreen(curCanvas);
		var pId=-1;
		var pPos=[];
		var pScale=[];
		var rowMult=[];
		var connectArray={
			0 : [1,2],
			1 : [3,4],
			2 : [4,5],
			3 : [6,7],
			4 : [7,8],
			5 : [8,9],
			6 : [10,11],
			7 : [11,12],
			8 : [12,13],
			9 : [13,14],
			10 : [15,16],
			11 : [16,17],
			12 : [17,18],
			13 : [18,19],
			14 : [19,20],
			15 : [21],
			16 : [21,22],
			17 : [22,23],
			18 : [23,24],
			19 : [24,25],
			20 : [25],
			21 : [22],
			22 : [26],
			23 : [26,27],
			24 : [27,25],
			25 : [],
			26 : [27]
			};
		
		for(y=0; y<lineCount.length;++y){
			for(x=0; x<lineCount[y];++x){
				pId+=1;
				rowMult.push(y);
				xPos=(x/lineCount[y])*(xDiff*lineCount[y]) + (sW-xDiff*(lineCount[y]-1))/2;
				yPos=y*yDiff + (sH-(lineCount.length+2)*yDiff)/2 + yAdd*y*y*y + sH/5;
				noiseYMult=(y+3)/(lineCount.length+3);
				xNoise=Math.sin(noiseOffset + x*31 + y*42 + pId + Math.cos( noiseOffset*1.5 - x*14 + y*51 - pId)*Math.cos(-noiseOffset*.8+x*56+y*26+pId)*3) * noiseMult*noiseYMult;
				yNoise=Math.cos(-noiseOffset + x*20 + y*32 - pId + Math.sin( -noiseOffset*.9 - x*45 + y*22 + pId)*Math.sin(noiseOffset*1.2+x*25+y*62+pId)*3) * noiseMult*1.5*noiseYMult;
				xPos+=xNoise;
				yPos+=yNoise;
				
				if(y == 0){
					yPos+=15;
				}else if(y == 1){
					yPos+=5;
				}else if(y==6 || y==7){
					if(lineCount[y]>2){
						if(x == 0 || x == lineCount[y]-1){
							yPos-=10;
						}
						if(x == 1 || x == lineCount[y]-2){
							yPos+=10;
						}
					}else{
						yPos-=5;
					}
				}else if(y==5){
					if(x==2){
						xPos-=5;
					}else if(x==3){
						xPos+=5;
					}
				}
				
				pPos.push(xPos);
				pPos.push(yPos);
				pScale.push((1+7*noiseYMult));
			}
		}
		for(y=0; y<Object.keys(connectArray).length;++y){
			for(x=0; x<connectArray[y].length;++x){
				xPos=pPos[y*2];
				yPos=pPos[y*2+1];
				xTo=pPos[connectArray[y][x]*2];
				yTo=pPos[connectArray[y][x]*2+1];
				lineMult=((rowMult[y]+3)/(lineCount.length+3));
				drawLine([xPos,yPos,xTo,yTo],3*lineMult,gridColor,1,0,curCanvas,[-1]);
			}
		}
		for(y=0; y<(pPos.length/2);++y){
			xPos=pPos[y*2];
			yPos=pPos[y*2+1];
			drawGeo([xPos,yPos],1,pScale[y],pointColor,1,-1,-1,curCanvas);
		}
		return pPos;

	
}


// -------------
// NOT MINE -- REFERENCE ONLY 
// https://stackoverflow.com/questions/18016533/threejs-custom-3d-geometry-using-vertices
function initGeometry( R , L) {
    var geometry = new THREE.Geometry();

    var deg;
    var f = 0;  
    for( deg = 0; deg < 90; deg++,f += 4 ){
        var ca = deg * 0.01745329252;//cache current angle
        var na = (deg+1) * 0.01745329252;//cache next angle (could do with a conditional and storing previous angle)
        var ccos = Math.cos(ca);//current cos
        var csin = Math.sin(ca);//current sin
        var ncos = Math.cos(na);//next cos
        var nsin = Math.sin(na);//next sin

        var tl = new THREE.Vector3( R * ccos, L * .5, R * csin);//top left = current angle, positive y
        var bl = new THREE.Vector3( R * ccos,-L * .5, R * csin);//bottom left = current angle, negative y
        var tr = new THREE.Vector3( R * ncos, L * .5, R * nsin);//top right = next angle, positive y
        var br = new THREE.Vector3( R * ncos,-L * .5, R * nsin);//bottom right = next angle, negative y

        /*
        tl--tr
        |  /|
        | / |
        |/  |
        bl--br
        */
        geometry.vertices.push(tl,tr,br,bl);//notice vertices are added in (cw) order
        geometry.faces.push(new THREE.Face4(f,f+1,f+2,f+3));//add the correct face indices, easy with a second counter

    }

    object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color:0x660033,         side:THREE.DoubleSide}));
    object.position.set(0,0,0);
    object.rotation.x = Math.PI * .35;//a bit of rotation to make the structure visible
    object.scale.set(.35,.35,.35);//again, to make things easier to see
    scene.add(object);
}










function mapBootEngine(){
	
	// Rederer
	mapEngine=new THREE.WebGLRenderer({
		canvas: mapCanvas,
		antialias: true,
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
	mapEngine.setClearColor(0x000000, 0);
	mapEngine.setPixelRatio(window.devicePixelRatio);
	mapEngine.setSize(mapW/mapResPerc, mapH/mapResPerc);
	//mapEngine.gammaOutput=true;
	
	texLoader=new THREE.ImageLoader();
	
	/////////////////////////////////////////////
	//Shadow Maps-
	mapEngine.shadowMap.enabled=true;
	if(mobile==3){
		mapEngine.shadowMap.type=THREE.BasicShadowMap;
	}else{
		mapEngine.shadowMap.type=THREE.PCFScatterShadowMap;//PCFShadowMap;//PCFSoftShadowMap;
		//mapEngine.shadowMap.type=THREE.PCFSoftShadowMap;
	}
	
	var aspectRatio=mapCanvas.width/mapCanvas.height;
	mapCam=new THREE.PerspectiveCamera(35,aspectRatio, 1, 3000);
	mapCam.position.z=130;
	mapCam.target=new THREE.Vector3(0,0,0);
	mapScene=new THREE.Scene();
	mapProcessScene=new THREE.Scene();
	
	textureQuality="_1k";
	
	var textureList;
	var transformList;
	
	var ground=new THREE.PlaneGeometry(400,250,100,100);
	var groundMat;
	if(mobile==1){
		groundMat=new THREE.MeshLambertMaterial();
	}else{
		groundMat=new THREE.MeshStandardMaterial();
	}
	
	var groundMesh=new THREE.Mesh(ground,groundMat);
	groundMesh.material.emissive=new THREE.Color( 0x101010 );
	groundMesh.material.roughness=.9;
	groundMesh.rotation.x=-90*(Math.PI/180);
	groundMesh.position.z=-50;
	mapScene.add(groundMesh);
	//mapProcessScene.add(groundMesh.clone());
	groundMesh.receiveShadow=true;
	geoList["table"]=[groundMesh,ground];
	
	
	//var intoMesh=genIntroMexh();
	//geoList['introMesh']=introMesh;
	
	var ambLight=new THREE.AmbientLight(0xffffff,.1);
	mapScene.add(ambLight);
	
	var ambLightMask=new THREE.AmbientLight(0xffffff,1);
	mapProcessScene.add(ambLightMask);
	
	objRaycast=new THREE.Raycaster();
	/*
	///////////////////////////////////////////////////////
	// Post Processing; Vertex & Fragment Screen Shaders //
	///////////////////////////////////////////////////////
	// Prep for mask pass - No Particles
	renderBuffer=new THREE.WebGLRenderTarget(sW,sH);
	renderBuffer.texture.format=THREE.RGBAFormat;
	renderBuffer.texture.minFilter=THREE.NearestFilter;
	renderBuffer.texture.magFilter=THREE.NearestFilter;
	renderBuffer.stencilBuffer=false;
	renderBuffer.depthBuffer=false;
	
	applyMaskShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},
			"fade":{type:"f",value:mapCamObjLatchBlend},
		},
		vertexShader:document.getElementById("anchoredObjectVert").textContent,
		fragmentShader:document.getElementById("anchoredMaskFrag").textContent
	});
	// Composer - Default Scene; All objects
	mapDepthComposer = new THREE.EffectComposer(mapEngine, renderBuffer);
	maskPass=new THREE.RenderPass(mapProcessScene,mapCam,null,0,0);
	maskShaderPass=new THREE.ShaderPass(applyMaskShader);
	
	mapDepthComposer.addPass(maskPass);
	mapDepthComposer.addPass(maskShaderPass);
	mapDepthComposer.autoClear=true;
	mapDepthComposer.renderToScreen=true;

	// Going to end up finding this in 6 months time and be like... why?
	
	///////////////////////////////////////////////////////
	// Latched Anchor - Object Orbit Background
	diffuseShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},
			"tMask":{type:"t",value:renderBuffer.texture},
			"fade":{type:"f",value:mapCamObjLatchBlend},
			"maskDisplay":{type:"i",value:maskRender}
		},
		vertexShader:document.getElementById("anchoredObjectVert").textContent,
		fragmentShader:document.getElementById("anchoredFogFrag").textContent
	});
	// Composer - Default Scene; All objects
	mapComposer = new THREE.EffectComposer(mapEngine);
	diffusePass=new THREE.RenderPass(mapScene,mapCam);
	diffuseShaderPass=new THREE.ShaderPass(diffuseShader);
	diffuseShaderPass.material.transparent=true;
	
	mapComposer.addPass(diffusePass);
	mapComposer.addPass(diffuseShaderPass);
	diffuseShaderPass.renderToScreen=true;
	*/

	///////////////////////////////////////////////////////
	// Temp Main Menu Latch
	
	mainMenuShader=new THREE.ShaderMaterial({
		uniforms:{
			"tDiffuse":{type:"t",value:0,texture:null},
			"flicker":{type:"f",value:0},
			"time":{type:"f",value:0},
			"cropTop":{type:"f",value:.3},
			"cropBottom":{type:"f",value:.5},
		},
		vertexShader:document.getElementById("anchoredObjectVert").textContent,
		fragmentShader:document.getElementById("tempMainMenuFrag").textContent
	});
	
	// Composer - Default Scene; All objects
	map_glComposer = new THREE.EffectComposer(mapEngine);
	mainMenuPass=new THREE.RenderPass(mapScene,mapCam);
	mainMenuShaderPass=new THREE.ShaderPass(mainMenuShader);
	mainMenuShaderPass.material.transparent=true;
	
	map_glComposer.addPass(mainMenuPass);
	map_glComposer.addPass(mainMenuShaderPass);
	//mainMenuPass.renderToScreen=true;
	mainMenuShaderPass.renderToScreen=true;
	
}

function mapOnUpRayCaster(){
	var camResetLatchObj=0;
	if(objRayList.length > 3-mobile && !xyDeltaData.latched){
		objRaycast.setFromCamera(mapMouse,mapCam);
		var rayHits=objRaycast.intersectObjects(objRayList);//mapScene.children);
		if(rayHits.length > 0){
			var glowOrig=glowPlay;
			var glowGen=0;
			var curObjLatch=mapCamObjLatch;
			var objGenerated=0;
			for(var x=0; x<rayHits.length;++x){
				var obj=rayHits[x].object;
				if(objRayCurHit != obj){
					if(obj.name == "mapBookCover" && mapBookOpen==0){
						glowPlay+=1;
						objRayCurHit=obj.name;
						obj.visible=true;
						setCursor("default");
						
						for( var x=0; x< objRayMaskList[objRayCurHit].length; ++x){
							objRayMaskList[objRayCurHit][x].visible=true;
						}
						break;
					}else if(obj.name == "mapGlow"){
						glowHits++;
						objRayCurHit=obj.name;
						setCursor("pointer");
						var objRayCurPos=rayHits[x].point;
						
						if(glowPlay>glowPlayMax && (objRayCurHit == "mapGlow" || objRayCurHit == "mapBookCover") && mapMainMenuLock==0){
							mapMainMenuLock=1;
							mapMainMenuDir=1;
							if(mapSlipMenuBlock==null){
								mapSlipMenu(1);
							}
						}else{
							if(mapMainMenuLock>0){
								mapMainMenuDir=0;
							}
						}
						glowPlay+=glowPlayMax;
						break;
					}else if(obj.name == "candle"){
						objRayCurHit=obj.name;
						obj.visible=true;
						setCursor("grab");
						objHoverCount=Math.min( Math.max(objHoverCount,0), objRayHoverFade-1);
						
						mapCamMode=1;
						mapCamObjLatch=obj.name;
						curObjLatch=obj.name;
						if(mobile==0){
							geoList["mapGlow"][1].visible=false;
						}
						for( var x=0; x< objRayMaskList[objRayCurHit].length; ++x){
							objRayMaskList[objRayCurHit][x].visible=true;
						}
						break;
					}
				}
			}
			if(objRayCurHit!=mapCamObjLatch && curObjLatch==mapCamObjLatch){
				camResetLatchObj=1;
			}
		}else{
			if(objRayCurHit != null){
				setCursor("default");
			}else{
				mapMainMenuDir=0;
			}
			if(mapCamObjLatch != null){
				camResetLatchObj=1;
			}
			//objRayCurHit=null;
		}
	}
	if(camResetLatchObj == 1){
		if(mapCamObjLatchPrev != mapCamObjLatch && mapCamObjLatchPrev != null && mapCamObjLatchPrev != null){
			if(mapCamObjLatchPrev == "candle"){
				//geoList['candle'][1].copy(geoList['candle'][2].copy());
				//geoList['candleHandle'][2].copy(geoList['candleHandle'][2].copy());
			}
		}
		mapCamObjLatchPrev=mapCamObjLatch;
		mapCamObjLatch=null;

		mapCamMode=0;
	}

}

function mapOnUpBook(){
	if(mapCamMode==2){
		if(xyDeltaData.latched==1){
			var tempVec=new THREE.Vector2().copy(xyDeltaData.endPos);
			tempVec.sub(xyDeltaData.startPos);

			xyDeltaData.netDistance[0]+=tempVec.x;
			xyDeltaData.netDistance[2]+=tempVec.y;
		
		}else{
			objRaycast.setFromCamera(mapMouse,mapCam);
			var rayHits=objRaycast.intersectObjects(objRayMapBookList);//mapScene.children);
			if(rayHits.length > 0){
				for(var x=0; x<rayHits.length;++x){
					var obj=rayHits[x].object;
					if(obj.name == "bookPagesLeft"){
						mapBookChangePage('prev');
					}
					if(obj.name == "bookPagesRight"){
						mapBookChangePage('next');
					}
				}
			}else{
				mapBookOpenToggle();
			}
		}
	}
}

/*
var lineMat=new THREE.LineBasicMaterial({ color:0xff0000 });
var lineGeo=new THREE.Geometry();
lineGeo.vertices.push( new THREE.Vector3(-200,.1,-40) );
lineGeo.vertices.push( new THREE.Vector3(-200,-15,-40) );
lineGeo.vertices.push( new THREE.Vector3(-200,.1,-40) );

lineGeo.vertices.push( new THREE.Vector3(-200,.1,-175) );
lineGeo.vertices.push( new THREE.Vector3(-200,-15,-175) );
lineGeo.vertices.push( new THREE.Vector3(-200,.1,-175) );

lineGeo.vertices.push( new THREE.Vector3(200,.1,-175) );
lineGeo.vertices.push( new THREE.Vector3(200,-15,-175) );
lineGeo.vertices.push( new THREE.Vector3(200,.1,-175) );

lineGeo.vertices.push( new THREE.Vector3(200,.1,-80) );
lineGeo.vertices.push( new THREE.Vector3(200,-15,-80) );
lineGeo.vertices.push( new THREE.Vector3(200,.1,-80) );


lineGeo.vertices.push( new THREE.Vector3(80,.1,75) );
lineGeo.vertices.push( new THREE.Vector3(-50,.1,75) );
lineGeo.vertices.push( lineGeo.vertices[0] );
var line=new THREE.Line(lineGeo,lineMat);
mapScene.add(line);
*/


