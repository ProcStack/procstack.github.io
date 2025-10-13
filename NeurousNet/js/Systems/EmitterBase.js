
class EmitterBase{
  get type() {
    return this._type
  }
  set type(value) {
    this._type = value
  }
  
  constructor( State ){
    this._type = "EmitterBase"
    this.State=State
    this.time = 0
    this.runner = 0
    
    this.count = 0
    this.curId = 0
    this.points = []
    this.reapList = []
    
    this.Fields={
      SCREEN : 0, // Local; Any Screen Res; Single Player
      CIRCLE : 1, // Local; Single Player
      SQUARE : 2, // Local; Single Player
      PLAYER : 3, // Online; Multi Player
    }
    this.fieldType = this.Fields.SCREEN;
    
    this.centroid = [ this.State.sW*.5, this.State.sH*.5 ];
    
    this.updateTime()
  }
  
  updateTime(){
    let curTime = new Date().getTime();
    this.time = curTime*.001;
  }
  
  updateCount(){
    this.curId += 1
    this.count = this.points.length
  }
  
  // Per-Frame logic; update time, check for dead particles, clean up Dead point
  step(){
    this.runner += 1
    this.updateTime()
    if( this.count > 0 ){
      
      // let cOffset = [ this.State.sW*.5, this.State.sH*.5 ];
      // this.centroid = [ Math.sin(cOffset[0] + this.runner*.01)*cOffset[0]*.5 + cOffset[0], Math.sin(cOffset[1] + this.runner*.01)*cOffset[1]*.5 + cOffset[1] ]
      let cOffset = [ this.State.mouseX, this.State.mouseY ];
      let cMag = 300;
      this.centroid = [ Math.sin(this.runner*.01)*cMag + cOffset[0], Math.sin(this.runner*.01)*cMag + cOffset[1] ]
      this.centroid = cOffset
      
      let reapList = []
      for( let x=0; x<this.count; ++x){
        let curPoint = this.points[x];
        if( curPoint ){
          let hasDied = curPoint.step()
          if( hasDied ){
            reapList.push( x );
          }
        }
      }
      
      this.reapList = reapList ;
      
      this.reapParticles( )
    }
  }
  
  // Remove Dead points from Emitter
  reapParticles(){
    if( this.reapList.length > 0 ){
      // Only cleanup 'maxReap' ammount of points at a time for performance
      //   This isn't an issue for Point Class objects; not enough points are Dead per Frame
      //   It will be a problem for WebGL Mesh Vertex count changes per Frame
      //     Cost Benefit; Depending on Total Point Counts, rebuilding WebGL Mesh in intervals may be best
      //       IE; Reaped Points set Mesh Uniforms to not render, then Rebuild Mesh every N seconds
      let maxReap = 10
      let curReap = 0
      
      while( this.reapList.length > 0 ){
          curReap+=1
          if( curReap > maxReap ){
            break;
          }
          let curPoint = this.reapList.pop()
          delete this.points.splice( curPoint, 1 );
      }
      
      this.updateCount()
    }
	}
  
}

export default EmitterBase