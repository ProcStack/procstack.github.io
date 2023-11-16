// NeurousNet - System State Values
//  Written by Kevin Edzenga; October 2021
//
//  Device and Interaction States


const State={
  sW : window.innerWidth,
  sH : window.innerHeight,
  mobile : false,
  tablet : false,
  mouseX : 0,
  mouseY : 0,
  mousePrevX : 0,
  mousePrevY : 0,
  mouseVelX : 0,
  mouseVelY : 0,
  mButton : 0,
  paused : false,
  mouseAttract : 0,

  touchDown : 0,
  touchDragCount : 0,
  touchTwoFinger : 0,
  touchTwoFingerPrev : 0,
  touchTimer:null,
  longTouchLength : 500,
  doubleTouchVal : 0,
  touchDoubleTimer:null,
  doubleTouchLength : 600,
  introCardsOrient : 0,

  curTime : (new Date().getTime())*.1,

  IE : document.all?true:false
} 

export default State