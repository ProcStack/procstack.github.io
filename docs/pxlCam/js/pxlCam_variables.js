// Standard unprofessional global variables
var pxlCamCore="pxlCam-core";
var pxlCamEngine,pxlCamGL,pxlCamCamera,pxlCamScene,pxlCamComposer, pxlCamShaderComposer,pxlCamHaarFeatureComposer,pxlCamHaarFeatureRenderComposer;
var camCorrectionShader, filterShader; // ## Rename smartBlur instances to picturePrep
var cameraRenderPass,camCorrectionShaderPass,filterShaderPass,haarFeatureShader,haarFeatureRenderShader;
var pxlCamRenderTarget;
var pxlCamHaarFeatureRenderTarget,eigenImage,eigenTexture;
var eigenImageMaxRes=192;
var haarFeatureRes=[100,100];
var pxlActive=false;
var mapResPerc=1;//mobile?.25:.5; // ## Automatic quality reduction, NOT IMPLEMENTED
var mapAutoQuality=1;
var pxlQuality={
	'renderTargetScale':10, // ## Not implemented
	'shaderSmartBlurReach':5,
	'shaderPrecision':3,
};
var cameraLoading,iconTray,alignLines,frontFlash,menuExit;
var menuBlock,photoBinMenu;
var photoBinObjects=[];
var activeMenu=null;
var previousMenu=[]; // For back buttons, nested menus;  Hierarchy - [ parent, ...chilren ]
var catchNavigatorCalls=false; // ## Attemped to catch user changing page/navigating; NOT WORKING
// Current MS value before taking a shot
var takeShotTime=0;  // ## Add into default take photo functionality to reduce device shake from the finger tap
var flashWaitTime=1000; // MS to keep flash on for camera focus / white balance
var useFlash=false;
var useFrontFlash=false;
var flashActive=false;
var delaySaveShot=false; // Wait till next next requestAnimationFrame before booting the camera, pxlRender()
// ## Verbose dom objects. Could be cleaned up more; put into a class or something...
var verbBlock,verbFPS,verbDeviceRes,verbCurCam,verbCurCamName,verbPrevCamName,verbMaxCam,verbPaused,verbConsole,verbErrorConsole,verbYaw,verbPitch,verbRoll,verbCamRes,verbCurAngle,verbGravityX,verbGravityY,verbGravityZ;
var verbScriptToggle=false;

var pxlProcessScene=null; // pxlProcessScene.add(processorObj[0]);
var pxlCanvas,pxlW,pxlH;
var sW=window.innerWidth;
var sH=window.innerHeight;

// ========================================

var clockTime=Date.now();
var fpsGrabTime=Date.now()+1000;
var fpsAvg=0;
var fpsCount=0;
var renderPause=false;
var runner=-1;
const pi=3.14159265358979; // Math.PI?  SCREW IT! hahaha
var gyroscope=null;
var accGravity=[0,9,0];

// ========================================

// Ugg, sooooooooooooooo
// 'Exact' video constraint returns a higher value than most entries below
// {'min', 'max', 'ideal'} be damned for res checking...
// They just return the same safe resolution over and over within the range
// Which defeats the purpose of finding a range of camera reslotions
//
// Store and run from the higher value to lower, dynamic shift to lower resolutions camSafeResValid[N+1]
var camSafeRes=[]; // Keep the safe, dispose of the rest!
var camSafeResValid=[];
var camSafeResValidWidth=[];
var camMalformFlip=[];
var curResId=[];
var camOddResList=[
	480,
	640,
	720,
	768,
	900,
	1050,
	1080,
	1200,
	1280,
	1366,
	1440,
	1560,
	1600,
	1680,
	1920,
	2048,
	2160,
	2218,
	2272,
	2460,
	2560,
	2620,
	3280,
	3840,
	4032,
	4656
];

// Eh... I'll figure it out somehow
var camSafeResList=[
	480,
	640,
	720,
	768,
	900,
	1080,
	1200,
	1280,
	1366,
	1560,
	1600,
	1920,
	2160,
	2460,
	3280,
	3840
];
var camResOrigCheckList=[...camOddResList];
var camResCheckList=[...camResOrigCheckList];
var camResRunLength=camResOrigCheckList.length;
var camResIttr=0;
var camResChecking=false;
var camCheckCount=0;
var camSafeResFound=false;
var camSafeResBooting=false;
var camSafeResBooted=false;
var camPictureAspect=[1,1];
var camCheckMalformedRes=50; // Once a camera boots, it will set this value to 0
var camMalformedCheckMax=40;

// ========================================


var fadeOutList=[]; // DOM Object fade in/out list
var thumbnailText,thumbnailImage,thumbnailCanvas;

// ========================================

var texLoader;
var textLoaderArray=[];
var effectMode=0;
var webcamVideo;
var webcamActive=0;
var webcamList=[];
var webcamNameList=[];

var pxlCamBootError=false;
var delayLoadCam=false; // Keep false; ticks true once camera's safe resolution boots, .then(success)
var failedBootCount=0;
var totalFailedBootCount=0;
var flipHorizontal=false;
var vidTexture;
var vidGeo;
var vidMat;
var vidMesh;

var compensateScale=mobile==1?true:false;
var runSmartBlur=true;
var runDarkenImage=true;
var darkenImageDist=1;
var darkenImageDistMax=4;
var runEdgeColor=true;
var smoothReachDist=5;
var smoothReachDistPrev=0;
var smoothReachDistMax=10;
var edgeReachDist=10;
var edgeReachDistPrev=0;
var edgeReachDistMax=40;

var hueSatch_flattenMultColor=0;
var hueSatch_rotateHue=0;

var phonePoseActive=false;
var phone_ypr=[0,0,0];
var phone_yprDelta=[0,0,0];
var phone_yprInit=[0,0,0];


// ========================================

var haarFeatureHelperDisplay=false;


// ========================================
// NOT CURRENTLY USED
// Created in attempts to catch camera stream resolution changes
// But reworked how the getUserMedia promises work
// Leaving it here because its useful in function... but useless for pxlCam
//
//Attribute modification callback
// Used for checking videoWidth/videoHeight changes
//  There's got to be a better way....
// DOM Object Mutations support - { 'attributes', 'childList', 'subtree' }
const attrMutationConfig={ attributes:true, childList:false, subtree:false };
const attrMutationCallback=(mutationList,observer)=>{
	for( mutation of mutationList ){
		let type=mutation.type;
		if(type==="attributes"){
			console.log("Attr modded --");
			let mutName=mutation.attributeName;
			let mutVal=mutation.target.getAttribute(mutName);
			console.log(mutName+" -- "+mutVal);
		}
	}
};
const attrObserver=new MutationObserver(attrMutationCallback);