// Statistics Logger
//   Kevin Edzenga; October 2021

const fs = require('fs');


class Stats{
  constructor(){
    this.countFile = "_Stats/count.js"
    this.countStatsValid = false;
    this.countStats = null;
  }

  async stepCount(req){
    this.updateStats(req);
  }

  async getStats(){
    
    if( this.countStatsValid === true ){
      return new Promise( (resolve, reject)=>{ resolve(); });
    }
    
    let accessFile = this.countFile;
    let tmpThis = this;
    return new Promise( (resolve, reject)=>{
      fs.access(accessFile, fs.F_OK, (err) => {
        if (err) {
          console.error(err)
          return reject()
        }

        fs.readFile(accessFile, "utf8", function(errRead, data) {
          if (errRead) {
            console.error(errRead)
            return reject()
          }
          
          tmpThis.countStatsValid=true;
          console.log(data);
          
          let jsonData = JSON.parse(data);
          tmpThis.countStats = jsonData;
          resolve()
        });
      })
    });
  }
  writeStats(data){
    if( this.countStatsValid === true ){
      let accessFile = this.countFile;
      
      if( data instanceof Object ){
        data = JSON.stringify( data )
      }
      
      fs.writeFile(accessFile, data, (err) => {
        if (err) {
          console.log(err);
        }
      })
    }
  }

  async updateStats(req){
    let host=null;
    let local=false;
    try{
      host=req.headers.host;
      local = host.includes("localhost")
    }catch(err){
      console.log("Request parse failed")
      return;
    }
    
    let entry=null;
    if( local ){
      entry="devCount"
    }else{
      entry="liveCount"
    }
      
    let statsCheck = this.getStats()
    statsCheck.then( ()=>{
      if( this.countStatsValid === true ){
        this.countStats[entry]+=1
        console.log( `${entry} : ${this.countStats[entry]}` )
        this.writeStats( this.countStats )
      }
    });
  }
}

module.exports = Stats;

// Script being ran CLI
if (require.main === module) {
  let stats = new Stats();
  
}