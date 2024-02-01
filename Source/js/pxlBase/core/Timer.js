//Timer
import { Vector2 } from "../../../libs/three/build/three.module.js";

export class Timer{
	constructor(){
		this.active=false;
		this.msRunner=new Vector2(0,0);
		this.msLog=0;
		this.fpsStats=-1;
		
        let msTime=new Date().getTime()*.001;
        this._curMS=msTime;
		this._prevMS=msTime;
		
		this.videoFeeds=[];
	}
	
	// Reset pxlNav clock
	//   Benchmarking steps the timer
	init(){
		this.prevMS=this.curMS;
		this.msRunner.x=0;
		this.msRunner.y=0;
		this.step();
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
    
    start(){}
	
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
		
	pausePlayback(){
		this.active=!this.active;
			
		this.videoFeeds.forEach( (v)=>{ this.active ? v.play() : v.pause() } );
	}
	
	play(){
		this.active=true;
			
		this.videoFeeds.forEach( (v)=>{ v.play() } );
	}
	
	stop(){
		this.active=false;
			
		this.videoFeeds.forEach( (v)=>{ v.pause() } );
	}
	
	
	toggleMSLog(){
		this.msLog=(this.msLog+1)%2;
	}
}