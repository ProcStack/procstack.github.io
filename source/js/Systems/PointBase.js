
import Utils from  "../Utils.js" 

class Point{
  get type() {
    return this._type
  }
  set type(value) {
    this._type = value
  }

  // TODO : Points should know their Emitter; Variables treated as Uniforms ( Time, overall scale Velocity maybe )
  constructor(Emitter, State, id,seed,pos,vel,age,color,alpha){
    this._type = "Point"
    this.Emitter = Emitter
    this.State = State
		this.id = id
    this.seed = seed
		this.pos = pos
    this.prevPos = pos
    
		//this.weight = Math.sin(id*512.532+id*52.63*Math.cos(seed+id*15.7391*Math.sin(-seed/3.14))+seed)*.5+.5;
		this.weight = (id*512.532+id*52.63*Math.cos(seed+id*15.7391*Math.sin(-seed/3.14))+seed)%1;
		this.weight = this.weight*.3+.7;

		this.size = this.weight*3+1
		this.origSize = this.weight*3+1
		this.speed = 0
    
		this.vel = vel
		this.velMagCap = 15

    if( State.mobile ){
      this.velMagCap = 10+(10*this.weight);
      this.size *= .5
      this.origSize *= .5
    }else{
      this.velMagCap += (15*this.weight);
    }
    
    // TODO : Implement this.grow on all points
    // TODO : Fade should only account for when in a Lifespan a point starts to -this.grow
		if(age>0){
			this.life = age
			this.fade = age*.95
		}else{
			this.life = -1
			this.fade = -1
		}
		this.age = 0
		this.dead = 0
    
    // Used for Debugging; Weight to Color Mapping
    /*
    let weightBased = true;
    if( weightBased ){
      color[0] = Math.min(1, Math.max( 0, this.weight*3 ) )*255;
      color[1] = Math.min(1, Math.max( 0, this.weight*3-1 ) )*255;
      color[2] = Math.min(1, Math.max( 0, this.weight*3-2 ) )*255;
      color[0] -= color[1]
      color[1] -= color[2]
    }*/
    
		this.color = color
		this.colorBoost = 0
		this.alpha = alpha
		this.bounce = 0
		this.mousePerc = 0
	}
  
  // Base Age / Death check
	step(){
    // TODO : Change Age from Frame count, which varies per device, to Seconds
		this.age+=1;
		if(this.age >= this.life && this.life>0){
			this.dead=1;
			return true
		}
		this.checkFadeToDeath()
    return false
	}
  
  // After running Point Type specific logic, update base variables
  postStep(){
    this.prevPos = [ ...this.pos ]
    this.checkFieldPosition();
		let mag=e=>((e[0]**2+e[1]**2)**.5);
		this.speed=mag( [ this.pos[0]-this.prevPos[0], this.pos[1]-this.prevPos[1] ] );
  }
  
  // Point is about to die, Fade/Scale/Influence out
	checkFadeToDeath(){
		if(this.life>0){
			if(this.age>this.fade){
				let val= Math.min(1, (this.age-this.fade) / (this.life-this.fade));
				this.size=(this.origSize*(1-val));
				this.weight=this.weight*(1-val*.4);
				this.alpha=this.alpha*(1-val*.3);
			}else if(this.age>this.life){
				this.size=0;
				this.weight=0;
				this.alpha=0;
			}
		}
	}
  
  // Apply a random Force to Point
  newForce(){
    let force=[Math.sin(this.id*234+this.seed+35+this.pos[0]+this.age),Math.sin(this.id*1023+this.seed+1325+this.pos[1]+this.age)];
    this.addForce(force);
  }
  
  // Add Force to Velocity
  // TODO : Currently Force & Velocity are the same, Force should be Point Weight influenced
	addForce( force, clamp=0 ){
		this.vel[0] += force[0];
		this.vel[1] += force[1];
		if( (this.pos[0]+this.vel[0])<=0 || (this.pos[0]+this.vel[0])>=this.State.sW ){
			this.vel[0] = this.vel[0]*-1;
		}
		if( (this.pos[1]+this.vel[1])<=0 || (this.pos[1]+this.vel[1])>=this.State.sH ){
			this.vel[1] = this.vel[1]*-1;
		}
		if(clamp) this.clampVel();
	}
  
  // Check If -
  //   Point is within the screen; if not, keep the point on screen
  //   Velocity influence will push the point off the screen; invert velocity on given axis
	checkFieldPosition(){
    // Check for radial distance collision, reflect velocity
    if( this.Emitter.fieldType == this.Emitter.Fields.CIRCLE ){
      
      let {addVec, subVec, multFloat, normalize, dot, mag} = Utils
      let fieldRadius = 300;
      let screenCentroid = this.Emitter.centroid;
      let toPos = [ ...this.pos ];
      let delta = subVec( screenCentroid, toPos );
      let dist = mag( delta );
      if( dist > fieldRadius*3 ){
        toPos = screenCentroid;
      }else if( dist > fieldRadius ){
        let normDelta = normalize( delta  )
        this.vel = multFloat( normDelta, mag( delta )*.05 );
      }
      toPos = addVec( toPos, [ ...this.vel ] );
      this.pos = toPos;
      
    // Check for square collision, reflect velocity
    }else if( this.Emitter.fieldType == this.Emitter.Fields.SQUARE ){
      let padding = 0;
      let maxWH = [ this.State.sW-padding, this.State.sH-padding ]
      let toPos = [ ...this.pos ]
      toPos[0] = Math.min( Math.max(padding, toPos[0]+this.vel[0]), maxWH[0] );
      toPos[1] = Math.min( Math.max(padding, toPos[1]+this.vel[1]), maxWH[1] );
      if( toPos[0]<=padding || toPos[0]>=maxWH[0] ){
        this.pos[0] = toPos[0];
        this.vel[0] = -this.vel[0];//*(Math.sin(this.id*4025+this.age+self.id)*.2-1);
        this.bounce = 1;
      }else{
        this.pos[0] += this.vel[0];
      }
      if( toPos[1]<=padding || toPos[1]>=maxWH[1] ){
        this.pos[1] = toPos[1];
        this.vel[1] = -this.vel[1];//*(Math.sin(this.id*405+this.age+self.id)*.2-1);
        this.bounce = 1;
      }else{
        this.pos[1] += this.vel[1];
      }
    }
	}
  
  // Currently Unused; Set Point Velocity to an absolute value
	setVel(veler, clamp=0){
		this.vel[0] = veler[0];
		this.vel[1] = veler[1];
		if(clamp) this.clampVel();
	}
  
  // Limit Velocity to its Velocity Magnitude Cap
	clampVel( addWeight=0 ){
		let tmpVel = [...this.vel];
		let scaler = 1/(tmpVel[0]**2+tmpVel[1]**2)**.5;
		scaler = scaler>this.velMagCap ? this.velMagCap*scaler : 1;
		tmpVel[0] *= scaler;
		tmpVel[1] *= scaler;
		
		this.vel=tmpVel;
	}
}

export default Point