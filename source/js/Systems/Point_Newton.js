
import Point from "./PointBase.js" 

class PointNewton extends Point{
  constructor(Emitter, State, id,seed,pos,vel,lifeSpan,color,alpha){
    super( Emitter, State, id,seed,pos,vel,lifeSpan,color,alpha )
    this._type = "Newton"
    
		this.pullDist = this.weight*90+(State.sW+State.sH)*(.1 + .1*State.mobile);
    
    // TODO : Add to PointBase; Grow should support death scale-out as well
		this.grow = 0;
	}
  
	step(){
    super.step()
    if( this.dead == 1 ){
      return true
    }
    
		//this.grow;
		//this.sizeGrowUpdate()
		
    this.newForce();
    
    this.postStep()
    
    return false
	}
  
  // Unused currently
  //   Intended to allow user to scale the Size/Weight of the *CURRENTLY* generating force
  //   ( User hasn't released the Middle Mouse / Double Touch yet )
	sizeGrowUpdate(){
		if( this.grow != 0 ){
			if( this.grow == -1 ){
				this.size = this.origSize;
			}else{
				this.size += this.grow;
			}
		}
	}

}

export default PointNewton