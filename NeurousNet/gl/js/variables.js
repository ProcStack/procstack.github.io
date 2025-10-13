var mapCore="map-core";
var markerTexture,bgTexture;

var bkCanvas=document.getElementById('bkCanvas');
var markerCanvas=document.getElementById('markerCanvas');
var mapCanvas=document.getElementById(mapCore);
	
var mapEngine,mapGl,mapCam,mapScene,mapComposer,mapDepthComposer,mapSlimComposer;
var mapResPerc=.3;
var markerThicknessOffset=0;
var mapAutoQuality=0;

var mapProcessScene=null; // mapProcessScene.add(processorObj[0]);
var sW=window.innerWidth;
var sH=window.innerHeight;

function nextPower(n=2){
	n--;
	n|=n>>1;
	n|=n>>2;
	n|=n>>4;
	n|=n>>8;
	n|=n>>16;
	n++;
	return n;
}

sW=nextPower(sW);
sH=nextPower(sH);
var cW=window.innerWidth;
var cH=window.innerHeight;

var mapW=sW*mapResPerc;
var mapH=sH*mapResPerc;
var tankScale=1;
var mouseX=0;
var mouseY=0;
var mousePrevX=[0,0,0];
var mousePrevY=[0,0,0];
var mButton=0;
var mButtonPrev=0;
var mButtonCheck=0;
var pause=0;
var runner=0;
var mouseAttract=0;

var mouseWheelEvt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" ;
var mouseWheelDelta=0;



//--------------------------


var bgUniformMouseXY= new THREE.Vector2( 0, 0 );
var bgUniformMousePrevX= new THREE.Vector3( 0, 0, 0 );
var bgUniformMousePrevY=new THREE.Vector3( 0, 0, 0 );

//--------------------------

var options_dustParticles=200;
var options_shadowQuality=12;
var options_shadowQualityMult=10;
var options_shadowMapRes=256;
var options_renderResolution=mapResPerc;
var options_fpsRateDrop=1;

// ----------------------------

var mouseVel=[0,0];
var mouseVelMag=0;
var touchDown=0;
var touchDragCount=0;
var touchTwoFinger=0;
var touchTwoFingerPrev=0;
var touchTimer;
var longTouchLength=500;
var doubleTouchVal=0;
var touchDoubleTimer;
var doubleTouchLength=600;
var introCardsOrient=0;

var curTime=new Date().getTime();
curTime=curTime*.1;

var points=new Array();
var newtonFields=new Array();
var IE = document.all?true:false

var introCardsVisible=1;

// ----------------------------

var maskRender=0;
var msLog=0;
var datGui=-1;
var fpsStats=-1;
var datRenderResolutionSlider=null;
var datSkipFramesSlider=null;
var datDustParticlesSlider=null;
var datShadowSlider=null;
var datQualityButton=null;
var datPauseButton=null;
var datStatsButton=null;

//--------------------------

var spriteGroups=[];
var renderBuffer=null;
var depthCamera=null;
var depthScene=null;
var depthShader=null;
var applyMaskShader=null;
var diffuseShader=null;
var diffusePass=null;
var diffuseShaderPass=null;
var maskPass=null;
var maskShaderPass=null;





var blurShaderU=null;
var markerBlurUShaderPass=null;
var blurShaderV=null;
var markerBlurVShaderPass=null;
var bgShader=null;
var markerBgShaderPass=null;