
import Utils from  "../Utils.js" 
import Point from  "./PointBase.js" 

class PointTrail extends Point{
  constructor( Emitter, State, id,seed,pos,vel,lifeSpan,color,alpha,trail,tlen, forces){
    super( Emitter, State, id,seed,pos,vel,lifeSpan,color,alpha )
    this._type = "PointTrail"
    
    
    this.weight *= (1-this.weight*.5)
    
		this.pullDist = this.weight*90+(this.State.sW+this.State.sH)*(.1 + .1*this.State.mobile);
    
    if( State.mobile ){
      this.velMagCap = 8+(10*this.size);
    }else{
      this.velMagCap = 10+(30*this.size);
    }
    
		this.tlen = Math.floor(tlen*this.weight)
		this.mouseDist = this.weight*3+1
		this.trail = [];
		for(let x=0; x<tlen; ++x){
			this.trail.push(pos[0])
			this.trail.push(pos[1])
		}
    
    this.prevToPos = [...vel]
		this.mousePerc = 0
    
    this.forces = forces
    
    this.targetOffsetDist = 10+10*this.weight
    this.targetOffsetVariance = 10*this.weight
    
	}
  
	step(){
    super.step()
    if( this.dead == 1 ){
      return true
    }
    
    this.mousePerc *= .9
    this.colorBoost *= .85
    
		this.trailUpdate();
		
    // Check if Mouse/Touch in Pull All or Force Influence mode
    if((this.State.mouseAttract>0 || this.forces.length>0)){
      if(this.State.mouseAttract==3){
        this.fullPullInfluence()
      }else{
        this.calculateForceInfluences()
      }
    }else{
      this.prevToPos = [...this.vel]
    }

    this.clampVel()
    this.newForce()
    
    this.postStep()
    if( this.bounce = 1 ){
      this.prevToPos = [...this.vel]
    }
    
    return false
	}
  
  // Randomized positional offset; applied to Target's base position
  getTargetOffset( multOffset=1 ){
    let mScale = 100+(this.State.sW+this.State.sH)*.1;
    let mScaleWH = [ this.State.mouseX/mScale, this.State.mouseY/mScale ];
    let idSeedInf = this.id * 75.1579 + 5014 + this.seed;
    let runnerScale = this.age*.0333333333333333;
    let pi = 3.14159265358979
    let magNoise = this.id*.333333333333333+this.age*.333333333333333
    
    let addedOff = [
      Math.sin( idSeedInf + runnerScale + mScaleWH[0] + Math.cos(this.id*215.15+ runnerScale*.2 +mScaleWH[1])*pi)  *  (Math.sin( magNoise )*this.targetOffsetVariance+this.targetOffsetDist*multOffset),
      Math.cos( idSeedInf + runnerScale + mScaleWH[1] + Math.sin(this.id*5215.15+ runnerScale*.2 +mScaleWH[0])*pi)  *  (Math.cos( magNoise+this.seed )*this.targetOffsetVariance+this.targetOffsetDist*multOffset)
    ];
    
    return addedOff;
  }
  
  // Mouse/Touch in Pull All mode;  Right Click / Long Touch
  fullPullInfluence(){
    
    // Get Math Functions
    let {sign, addVec, subVec, multFloat, normalize, dot, mag, lerpVec, lerp} = Utils
    
    let pWeight = this.weight
    if( this.State.mobile ){
      pWeight = pWeight*.5 + .5
    }
    
    let addedOff = this.getTargetOffset();
    
    // Find base Target position
    let offMag = 22+this.size*1.5;
    let sourcePos = [this.State.mouseX, this.State.mouseY]
    let toPos = [((sourcePos[0]+addedOff[0])-this.pos[0]), ((sourcePos[1]+addedOff[1])-this.pos[1])];
    let normPos = normalize( toPos );
    let pushPosMult = 100;
    toPos = addVec( toPos, multFloat(normPos, pushPosMult) );
    
    // If position is too close to the Sourse Position, blend to the Added Offset Position
    let sourceDist= 1-Math.min(1, mag( subVec( this.pos, sourcePos ) ) * (.008) );
    toPos = lerpVec( toPos, addedOff, sourceDist );
    this.colorBoost = Math.min(1, this.colorBoost+sourceDist*.05);
    
    
    // Limit Target position distance
    let mather = mag( toPos );
    offMag = offMag+mather*.4;
    let normVel = normalize( this.vel );
    let multNormVal = 6;
    toPos = addVec( toPos, multFloat(normVel,multNormVal) );
    if(mather>offMag){
      toPos = normalize( toPos )
      toPos = multFloat( toPos, offMag );
    }
    
    // Limit Target position influence
    let smooth = this.id%5+this.size*((pWeight*.6+.4)**2);
    let curWeight = pWeight*.4+.4;
		let smoothDer = 1/(smooth+1);
    toPos[0] = (toPos[0]*(1-curWeight)+this.vel[0]*curWeight+this.vel[0]*smooth) * smoothDer;
    toPos[1] = (toPos[1]*(1-curWeight)+this.vel[1]*curWeight+this.vel[1]*smooth) * smoothDer;
    
    // Limit Target based on amount of turning + point weight
    let weightInf = pWeight*.4+.6;
    let vDelta = ((dot( normalize(this.vel), normalize(toPos) )*.6+.4)*weightInf + (1-weightInf));
    toPos = lerpVec( this.vel, toPos, vDelta );
    
    // Target blending with Previous Target
    //toPos = lerpVec( this.prevToPos, toPos, .365);
    toPos = lerpVec( this.prevToPos, toPos, .9);
    this.vel = toPos;
    this.prevToPos = toPos;
    this.mousePerc = Math.min( 1, this.mousePerc+.1 );
  }
  
  // Mouse/Touch & Forces influence on Point velocity
  calculateForceInfluences(){
    
    // Get Math Functions
    let {sign, normalize, dot, mag} = Utils
    
    let posArr = [];
    let infArr = [];
    let infRef = .7;
    let infMax = 0;
    // Mouse/Touch is down; left click mouse
    if(this.State.mouseAttract==1){
      let sourcePos = [this.State.mouseX, this.State.mouseY]
      posArr.push(sourcePos);
			// Ammount of torque on the particles pull toward mouse/touch
      //infArr.push(.5); // 0 Weak; .8 Reasonable; 1 Strong
      infArr.push(.5); // 0 Weak; .8 Reasonable; 1 Strong
    }
    // Forces exist; currently Newton Forces only
    if(this.forces.length>0){ 
      for(let x=0; x<this.forces.length; ++x){
        posArr.push( this.forces[x].pos );
        let curInf=(this.forces[x].weight)*infRef;
        infArr.push(curInf);
      }
    }
    
    let toPos = [0,0];
    let toPosTemp = [0,0];
    
    let pullPos = [];
    let pullWeight = [];
    let forceInfluence = 0;
    
    
    let pWeight = this.weight
    if( this.State.mobile ){
      pWeight = pWeight*.6 + .2;
    }
		let pWeightBiased = (pWeight*.5+.5);
		let pWeightBiasedRecip = 1-pWeightBiased;
    
    let addedOff = this.getTargetOffset();
    
    // Find Force influences & relative positions
    for(let x=0; x<posArr.length;++x){
      let curMag = mag( [ (posArr[x][0]-this.pos[0]), (posArr[x][1]-this.pos[1]) ] );
      if(curMag<this.pullDist){
        forceInfluence = 1;
        let blender = ((1-curMag/this.pullDist))*infArr[x];
        blender = Math.max( 0, blender );
        
        let inf = blender*(1-pWeight);
        
        
        let offMag = (15-15*inf) + 7 + pWeight;//*infArr[x];
        toPos = [((posArr[x][0]+addedOff[0])-this.pos[0]), ((posArr[x][1]+addedOff[1])-this.pos[1])];
        
        let targetDot = dot( normalize(toPos), normalize(this.vel) )*pWeightBiased+pWeightBiasedRecip;

        pullWeight.push( inf*(1-targetDot*pWeightBiased) );
        
        pullPos.push( [...toPos] );
      }
      this.mouseDist=Math.min(this.mouseDist, curMag);
    }
    
    if( forceInfluence == 0 ){ return; }
    
    // Forces found, calculate velocity changes
    let totalWeight = pullWeight.reduce( (x,c)=>x+c);
      
    let avgPos = [0,0];
    let avgWeight = 0;
    for(let x=0; x<pullPos.length;++x){
      avgWeight += pullWeight[x];
      avgPos[0] += pullPos[x][0] * avgWeight
      avgPos[1] += pullPos[x][1] * avgWeight
    }
    
    // Point/Trail draw brightness & thickness
    this.mousePerc = Math.min( 1, this.mousePerc + avgWeight*.5 );

		let pullDer = 1/pullPos.length
    avgPos[0] = avgPos[0] * pullDer
    avgPos[1] = avgPos[1] * pullDer
    let avgVelDot = (dot( normalize(avgPos), normalize(this.vel) )*.2+.8)*avgWeight;// * (1-this.mousePerc) + this.mousePerc;
    //avgVelDot *= 1-pWeight
    this.vel[0] += avgPos[0]*avgVelDot;
    this.vel[1] += avgPos[1]*avgVelDot;
    
		this.clampVel();
  }
	
  // Append Point position to Trail array
	trailUpdate(){
		this.trail.push(this.pos[0]);
		this.trail.push(this.pos[1]);
		if( this.trail.length>this.tlen ){
			this.trail = this.trail.slice(2,this.trail.length);
		}
	}
}

export default PointTrail