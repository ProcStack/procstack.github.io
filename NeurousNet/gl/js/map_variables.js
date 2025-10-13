var mapCore="map-core";
var mapEngine,mapGl,mapCam,mapScene,mapComposer,mapDepthComposer,mapSlimComposer;
var mapResPerc=mobile?.25:.5;
var mapAutoQuality=1;
//var loadFullTome=mobile?0:1;
var loadFullTome=0;

var mapProcessScene=null; // mapProcessScene.add(processorObj[0]);
var mapCanvas,mapW,mapH;
var sW=window.innerWidth;
var sH=window.innerHeight;
var mapMouse=new THREE.Vector2();
// runShadowHelper viewer
// Might be needed for processing the built shadow map
//var runShadowHelper=null;
var runShadowHelper=0;
var mapRenderRate=-1;
var mapReduceLoadCheck=0;
var mapReduceLoadTimeLimit=17;
var mapReduceLoadCount=0;
var mapReduceLoadPrevCount=mobile?3:6;
var mapReduceLoadMode=0;
var mapReduceLoadDelta=mobile?3:6;

//--------------------------

var options_dustParticles=200;
var options_shadowQuality=12;
var options_shadowQualityMult=10;
var options_shadowMapRes=256;
var options_renderResolution=mapResPerc;
var options_fpsRateDrop=1;
if(mobile==1){
	options_shadowQuality=2; // After optimized mobile, not needed
	options_shadowMapRes=128;
	options_fpsRateDrop=3; // Make the drop frame system smarter
}

// ----------------------------

var mapCamPrevX=undefined;
var mapCamPrevY=undefined;
var mapCamPrevZ=undefined;
var mapCamPrevLookAt=[0,0,-100];
var mapCamAim=new THREE.Vector3();

/////////////////////////////////////////////
// 0, Default Cam Anim;
// 1, A Latch Object is Anchored, 'Orbit Lock'
// 2, Viewing Metal Asylum Book
var mapCamMode=0;
var mapMainMenuLock=0;
var mapMainMenuCropMax=30;
//Bleh, uvs start from the bottom....
var mapMainMenuCropBottom=.6;
var mapMainMenuCropTop=.87;
var mapSlipMenuBlock=null;
var mapSlipNoise=[0,0,0];

// Anchor catches the Latches, absolute to mapCam
var mapCamObjAnchor=new THREE.Matrix4();
var mapCamAnchorBasePos=new THREE.Vector3(0, 0, -100);
var mapCamAnchorZoomPos=new THREE.Vector3(0, 0, -100);
var mapCamAnchorObj=null;

// Latch object is snagged on the Anchor, relative to mapCam
var mapCamObjLatch=null;
var mapCamObjLatchPrev=null;
var mapCamObjLatchCount=0;
var mapCamObjLatchCountMax=30;
var mapCamObjLatchBlend=0;
var mapCamObjLatchOffset=[0,0];

// ========================================
var mouseX=sW/2;
var mouseY=sH/2;
var xyDeltaData={
	'active':0,
	'mode':0,
	'updated':0,
	'latched':0,
	'latchedAxis':null,
	'dragCount':0,
	'dragTotal':0,
	'startPos':null, //vec2
	'prevDeltaPos':[0,0,0], //vec2
	'endPos':null, //  [x,y] 
	'latchMatrix':null, // Mat4
	'netDistance':[0,0,0], //vec2
	'curDistance':[0,0,0], //vec2
};
var mouseWheelEvt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" ;
var mouseWheelDelta=0;
var mouseButton=0;
var prevCursor=null;
var IE = document.all?true:false;
var touch =0;
var touchScreen=0;
var startTime=Date.now();
var groupList=[];
var geoList=[];
var geoLoadList=[]; // 0 Not loaded, 1 Loaded, 2 Loaded and Processed (Setting Dependants)
var geoLoadListComplete=0;
var geoFunctionList=[];
var lightList=[];
var lightMapList=[];
var mapPause=0;
var runner=-1;
var objsBooted=0;
var particlesBooted=0;
var pi=3.14159265358979;

// ========================================

var texLoader;
var textLoaderArray=[];
var objRaycast=-1;
var objRayAdded=[0,0,0,0,0,0,0];
var objRayObjectCount=6;//-mobile;
var objRayLoadCount=0;
var objRayList=[];
var objRayMapBookList=[];
var objRayMaskList=[];
objRayMaskList['mapBookCover']=[];
objRayMaskList['mapGlow']=[];
objRayMaskList['candle']=[];
var objRayCurHit;
var objRayHoverFade=5;
var objRayHoverOff=.2;
var objHoverCount=0;
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

var textureRoot="assets/mtls/";
var spriteRoot=textureRoot+"spriteAtlases/";
var objectRoot="assets/objs/";
var textureList;
var textureQuality="_1k";

var curMesh=undefined;
var mapCandleFlame=new THREE.Vector3(0,0,0);

//--------------------------

var mapBookDataPath="pageData/";
var mapBookDataTexPath=textureRoot+"map_Book/pageData/";
// I need to reorganize this array, but key--
// name - Tab Title, Page Name
// page - Like Name, Quick Access
// count - Total Geo Pages
// curPage - Current Active Page; for duration of page flip
// prevPage - Previous Active Page; snap closed
// objMesh - [ [Object, Mesh], [Object, Mesh] ... ]
// sectionGroup - Group of all pages; vis toggle
var mapBookContents=[];

if(loadFullTome==1){
	mapBookContents[0]={
		'name':"Blank",
		'page':"Blank",
		'count':2,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[1]={
		'name':"Book's Table of Contents",
		'page':"BookContents",
		'count':2,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[2]={
		'name':"Fall 2018 Crowds & Technical Reels",
		'page':"Reel",
		'count':2,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[3]={
		'name':"Kevin Edzenga's Resume",
		'page':"Resume",
		'count':2,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[4]={
		'name':"The Making of Metal Asylum",
		'page':"MakingOf",
		'count':12,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[5]={
		'name':"Extended Content; Projects & Scripts",
		'page':"ExtendedContent",
		'count':2,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[6]={
		'name':"Writings Of The Self",
		'page':"OfSelf",
		'count':8,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
	mapBookContents[7]={
		'name':"Contact Form",
		'page':"Contact",
		'count':2,
		'curPage':[0,0],
		'prevPage':-1,
		'objMesh':[],
		'sectionGroup':null,};
}
var mapBookOpen=0;
var mapBookDir=0;
var mapBookSection=1;
var mapBookOpenFlip=-1;
var mapBookOpenFlipMax=50;
var mapBookPageDir=0;
var mapBookPageDirPrev=0;
var mapBookPageFlip=-1;
var mapBookPageFlipMax=13;
var mapBookBBox=null;
var mapBookCentroid=null;
var mapBookUpdateBBox=0;
var mapBookHelper=null;

//--------------------------

var glowHits=0;
var glowPlay=-1;
var glowPlayMax=300;
var glowTime=0;
var glowPerc=0;
var targetHoverPrev=0;
var blendFitPrev=0;

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



