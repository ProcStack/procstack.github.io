
import Utils from  "../Utils.js" 
import Point from  "./PointBase.js" 

class PointSpark extends Point{
  constructor(Emitter, State, id,seed,pos,vel,lifeSpan,color,alpha,trail,tlen){
    super( Emitter, State, id,seed,pos,vel,lifeSpan,color,alpha )
    this._type = "Spark"

		this.tlen = Math.floor(tlen*this.weight);
		this.size = this.weight*3+1;
		this.origSize = this.weight*3+1;
		this.speed = 0;
    
		this.trail = [];
		for(let x=0; x<tlen; ++x){
			this.trail.push(pos[0]);
			this.trail.push(pos[1]);
		}
	}
  
	step(){
    super.step()
    if( this.dead == 1 ){
      return true
    }

    //this.newForce()
    
    this.flicker()

    this.trailUpdate()

    this.postStep()

    return false
	}
  
  
  // Randomized positional offset; applied to Target's base position
  getTargetOffset(){
    let mScale = 400+(this.State.sW+this.State.sH)*.1;
    let idSeedInf = this.id * 75.1579 + this.seed;
    let pi = 3.14159265358979
    let magNoise = this.seed+this.age
    
    let addedOff = [
      Math.sin( idSeedInf + Math.cos(this.id*215.15 )*pi)  *  (Math.sin( magNoise )*5+10),
      Math.cos( idSeedInf + Math.sin(this.id*5215.15 )*pi)  *  (Math.cos( magNoise+this.seed )*5+10)
    ];
    
    return addedOff;
  }
  
  flicker(){
    // Get Math Functions
    let { lerpVec } = Utils
    
    let addedOff = this.getTargetOffset()
    
    let sourcePos = [this.State.mouseX, this.State.mouseY]
    let toPos = [((sourcePos[0]+addedOff[0])-this.pos[0]), ((sourcePos[1]+addedOff[1])-this.pos[1])]
    this.vel = lerpVec(this.vel, toPos, .5);
    
  }
	
	trailUpdate(){
		this.trail.push(this.pos[0]);
		this.trail.push(this.pos[1]);
		if(this.trail.length>this.tlen){
			this.trail = this.trail.slice(2,this.trail.length);
		}
	}
}

export default PointSpark