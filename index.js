const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
const http = require('http').Server(app);

var httpPort = 3000;




const Versions={}
function getFileVersions( fileKeys=[] ){
  const VersionFiles={
    "cssVersion" : {
      "file":"./Source/js/pxlNav.js",
      "version":null
    },
    "jsVersion" : {
      "file":"./Source/style/pxlNavStyle.css",
      "version":null
    }
  }
  if( fileKeys.length == 0 ){
    fileKeys=Object.keys(VersionFiles)
  }else if( typeof(fileKeys) == "string" ){
    fileKeys = [fileKeys]
  }

  fileKeys.forEach( (v)=>{
    if( VersionFiles.hasOwnProperty( v ) ){
      let curFile = VersionFiles[v].file
      fs.stat(curFile, (err, stats) => {
        let curTime = Date.now()
        if(!err) {
            curTime = stats.mtime.getTime()
        }
        Versions[v] = curTime
      });
    }
  })
}
getFileVersions() // Just so there is something there if browserify hasn't completed


if( process.env.NODE_ENV == "production" ){
  console.log("Booting in Production; Build")
  
  app.use( express.static(path.join(__dirname, '/Build')) );
  
  app.get("/", function(req,res){
      //stats.stepCount(req);
      console.log(`Index Request; ${Date.now()}`)
      
      res.sendFile('index.html');
  });
}else{
  console.log("Booting in Development; Public / Source")
    
  // set the view engine to ejs
  app.set('view engine', 'ejs');

  //Setup folders
  //app.use( express.static(path.join(__dirname, '/Build')) );
  app.use( express.static(path.join(__dirname, '/Public')) );
  app.use( express.static(path.join(__dirname, '/Source')) );
  //app.use('/images', express.static(path.join(__dirname, '/Source/images')) );
  //app.use('/js', express.static(path.join(__dirname, '/Source/js')) );
  //app.use('/style', express.static(path.join(__dirname, '/Source/style')) );

  app.get("/", function(req,res){
      //stats.stepCount(req);
      console.log(Versions)
      
      let ver = Date.now();
      res.render('index.ejs', Versions);
  });
}

//Setup http and https servers
http.listen(httpPort, function () {
	console.log(`Metal Asylum Productions listening at localhost:${httpPort}`);
});
