
import EmitterBase from  "./EmitterBase.js" 
import PointNewton from  "./Point_Newton.js" 

class Emitter_Fields extends EmitterBase{
  
  constructor(State){
    super(State)
    this._type  =  "Fields"
  }
  
  genPoint( xy ){
    let len = 0;
    let color = [0,0,0];
    let alpha = .6;
    let fSeed = (this.time*353.435)%1000
    let tmp = new PointNewton(this, this.State, this.curId, fSeed, xy,[Math.sin(this.time+this.curId)*9,Math.cos(this.time+this.curId)*9],90,color,alpha);
    let sizeRand = Math.random(this.curId+.3)*10+20;
    tmp.size = sizeRand;
    tmp.origSize = sizeRand;
    tmp.weight = (tmp.weight*.5+.5)*(sizeRand/20+.5);
    this.points.push(tmp);

    this.updateCount()
  }

  newtonSpawn(gen){
    /*
    if(gen  =  =  0){
      cur = 0;//new Point;
    }else{
      cur = this.point[this.point.length-1];
    }
    gen+ = 1;
    if(State.mButton =  = 2){ // Middle mouse click
      setTimeout(function(){
        newtonSpawn(gen);
      },30);
    }
    */
  }
  newtonRelease(){
    if( this.count > 0 ){
      this.points[this.count-1].grow = 0;
    }
  }
}

export default Emitter_Fields