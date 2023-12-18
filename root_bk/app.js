//////////////////////////////////////////////////////
//  Primary NodeJS App file for procstack.github.io  //
////////////////////////////////////////////////////////


const express = require('express');
const app = express();

const fs = require('fs');
const browserify = require('browserify');
const watchify = require('watchify');

const path = require('path');
const http = require('http').Server(app);

// Localhost listening port; http://localhost:*httpPort*
const httpPort = 4000;

// Local while-devving statistics logging
const Stats = require("./modules/Stats.js");
const stats = new Stats();

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// TODO : Implemet './config.json', keep variable building logic here

const cssEntryPoint = "./source/style/Proc.css";
const cssPublicEntry = "./Public/style/Proc.min.css";
const cssMiniBuild = "./build/style/Proc.min.css";

const jsEntryPoint = "./source/js/Proc.js";
const jsPublicEntry = "./Public/js/Proc.min.js";
const jsMiniBuild = "./build/js/Proc.min.js";

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// Find the current version of minimized files
//   This eleviates retained cache in browsers while devving

// There is a webworker handling "program" version caching
//   But only runs when in "production" mode, not during "development"

const Versions={};
function getFileVersions( fileKeys=[] ){
	
	// Known Files to get "dateTime" version
  const VersionFiles={
    "cssVersion" : {
      "file":cssMiniBuild,
      "version":null
    },
    "jsVersion" : {
      "file":jsMiniBuild,
      "version":null
    }
  }
	
	// Objectify files for easy iterating
  if( fileKeys.length == 0 ){
    fileKeys = Object.keys(VersionFiles);
  }else if( typeof(fileKeys) == "string" ){
    fileKeys = [fileKeys];
  }

	// Check those files
  fileKeys.forEach( (v)=>{
    if( VersionFiles.hasOwnProperty( v ) ){
      let curFile = VersionFiles[v].file;
      fs.stat(curFile, (err, stats) => {
        let curTime = Date.now();
        if(!err){
            curTime = stats.mtime.getTime();
        }
        Versions[v] = curTime;
      });
    }
  })
	
}

// Get version base line values,
//   Just so there is something if browserify isn't ran
getFileVersions();

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// File Update Detector

if( process.env.NODE_ENV != "production" ){
  
  const {exec} = require("child_process");
  const FileManager = require("./modules/FileManager.js");
  const FileLister = new FileManager();

	// CSS Entry Point
  var neurousCSS = browserify({
    entries: [cssEntryPoint],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  });
  neurousCSS.on('update', runUglifyCSS);

	// Truncate unnecessary hoopla from the files
  function runBrowserify () {
    let inputFile = jsEntryPoint;
    let outputFile = jsPublicEntry;
    let cmd = `browserify ${inputFile} -t [ babelify --presets [ @babel/preset-env @babel/preset-react ] --plugins [ @babel/plugin-transform-class-properties ] ] | uglifyjs -cm --mangle toplevel > ${outputFile}`;

    let startTime = Date.now();
    exec(cmd, (err, out)=>{
      let endTime = Date.now();
      let durationTime = endTime - startTime;
      console.log("-- -- -- --");
      if(err){
        console.log("  Browserify -> Uglifyjs; Errored - ");
        console.log(err);
      }else{
        console.log(`  Browserify -> Uglifyjs; Completed Successfully - ${outputFile}`);
      }
      console.log(`  Elapsed Time : ${durationTime} ms`);
      console.log("-- -- -- --");
      
      getFileVersions("jsVersion"); // Get updated bundle modified time
    })
  }
    
  // Discombobulate
	//   https://youtu.be/B62ACxuq8Pw
  function runUglifyCSS () {
    let inputFileCSS = cssEntryPoint;
    let outputFileCSS = cssPublicEntry;
    let cmdCSS = `uglifycss ${inputFileCSS} > ${outputFileCSS}`;
    
    let startTime = Date.now();
    exec(cmdCSS, (err)=>{
      let endTime = Date.now();
      let durationTime = endTime - startTime;
      console.log("-- -- -- --");
      if(err){
        console.log("  Uglifycss; Errored - ");
        console.log(err);
      }else{
        console.log(`  Uglifycss; Completed Successfully - ${outputFileCSS}`);
      }
      console.log(`  Elapsed Time : ${durationTime} ms`);
      console.log("-- -- -- --");
      
      getFileVersions("cssVersion"); // Get updated bundle modified time
    })
    
  }
  
  runBrowserify();
  runUglifyCSS();
  
	// Monitor all files & Subfolders of files for changes
	//   Automatic re-browserify & re-uglify
  let entryDir = "source/js";
  let neurousJS;
  FileLister.getFileListPromise( entryDir )
  .then( ()=>{
    FileLister.watchFiles( FileLister.lists[entryDir], (f)=>{ runBrowserify(); } );
  });
  
}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



// set the view engine to ejs
app.set('view engine', 'ejs');

//Setup folders
//app.use( express.static(path.join(__dirname, '/Public')) );
app.use( express.static(path.join(__dirname, '/source')) );
//app.use( '/libs', express.static(path.join(__dirname, '/node_modules')) );
//app.use('/js', express.static(path.join(__dirname, '/Source/js')) );
//app.use('/style', express.static(path.join(__dirname, '/Source/style')) );



// Display view engine entry point
app.get('/', function(req, res) {
	
  stats.stepCount(req);
	console.log(Versions);
	
  let ver = Date.now();
  res.render('index.ejs', Versions);
});


//Setup http and https servers
http.listen(httpPort, function () {
	console.log(`ProcStack.github.io listening on http://localhost:${httpPort}`);
});
