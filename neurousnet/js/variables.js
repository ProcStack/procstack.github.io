var sW=window.innerWidth;
var sH=window.innerHeight;
var mouseX=0;
var mouseY=0;
var mousePrevX=[0,0];
var mousePrevY=[0,0];
var mButton=0;
var pause=0;
var runner=0;
var mouseAttract=0;

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
