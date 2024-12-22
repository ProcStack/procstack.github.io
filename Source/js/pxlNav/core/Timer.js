import { Vector2 } from "../../libs/three/three.module.min.js";

export class Timer{
  constructor(){
    this.active=false;
    this.msRunner=new Vector2(0,0);
    this.msLog=0;
    this.fpsStats=-1;
    
		let msTime=new Date().getTime()*.001;
    this._bootMS=msTime;
		this._curMS=msTime;
    this._prevMS=msTime;
    
    this.videoFeeds=[];
    this.booted=false;
  }
  
  // Reset pxlNav clock
  //   Benchmarking steps the timer
  init(){
    if(!this.booted){
      this.prevMS=this.curMS;
      this.msRunner.x=0;
      this.msRunner.y=0;
      this.step();
      this.booted=true;
    }
  }
  
  get runtime(){
    return this._curMS-this._bootMS;
  }

  get curMS(){
      return this._curMS;
  }
  updateTime(){
      this._curMS=new Date().getTime()*.001;
  }
  
  get prevMS(){
      return this._prevMS;
  }
  set prevMS( val ){
      this._prevMS=val;
  }
  
  // -- -- --
  
  start(){
    this.play();
  }
    
  pause(){
    this.active=!this.active;
    return this.active;
  }
  
  play(){
    this.active=true;
    return this.active;
  }
  
  stop(){
    this.active=false;
    return this.active;
  }
  
  toggleMSLog(){
    this.msLog=(this.msLog+1)%2;
  }

  // -- -- --
  
  step(){
		this.prevMS=this._curMS;
		this.updateTime();
        
    if(this.fpsStats!=-1){
      this.fpsStats.update();
    }
    
    let msDelta= this.curMS - this.prevMS;
    this.msRunner.x += (msDelta>0?msDelta:0);
    this.msRunner.y = (this.msRunner.y+msDelta)*.5;
  }
}