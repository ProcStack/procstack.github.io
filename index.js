
const projectName = "ProcStack.Github.io";
let listenIP = 'localhost';
var httpPort = 3000;

const args = process.argv.slice(2);

import express from 'express';
const app = express();

import path from 'path';
import http from 'http';
const server = http.createServer(app);

let pathName = new URL( import.meta.url ).pathname;
let pathSplit = pathName.split('/');
if( pathSplit[0] == "" || pathSplit[0] == "file:" ){
  pathSplit = pathSplit.slice(1);
  pathName = pathSplit.join('/');
}

console.log(pathName);

const dirName = path.dirname( pathName );


//Setup folders
//app.use( express.static(path.join(dirName, '/Build')) );

let publicDir = 'Public';
if(args.length > 0 ){
  publicDir = 'docs';
  if( args[0] == "dist" ){
    console.log("Booting in 'Dev'")
    console.log("Serving from: ./docs");

    app.use( express.static(path.join(dirName, 'docs')) );
  }else if(args[0] == "live" ){
    console.log("Booting in 'Live'")
    console.log("Serving from: ./docs");

    listenIP = '192.168.1.3'; // For testing on my phone

    app.use( express.static(path.join(dirName, 'docs')) );
  }
}
app.use('/three', express.static(path.join(dirName, 'node_modules/three')));

app.get("/", function(req,res){
  res.redirect('/index.htm');
});

// Handle 404 errors by serving the 404.html file
app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(dirName, publicDir, '404.html'));
});


// -- -- --

/* 
 To add logging of errors please use. This is hopefully not needed in most cases, but may still be useful in production.
    new GlobalKeyboardListener({
        windows: {
            onError: (errorCode) => console.error("ERROR: " + errorCode),
            onInfo: (info) => console.info("INFO: " + info)
        },
        mac: {
            onError: (errorCode) => console.error("ERROR: " + errorCode),
        }
    })
*/


// -- -- --


//Setup http and https servers
/*http.listen(httpPort, listenIP, function () {
	//console.log(`${projectName} listening at localhost:${httpPort}`);
	console.log(`${projectName} listening at ${listenIP}:${httpPort}`);
});*/
server.listen(httpPort, listenIP, function () {
  //console.log(`${projectName} listening at localhost:${httpPort}`);
  console.log(`${projectName} listening at ${listenIP}:${httpPort}`);
});
server.on('error', (err) => {
  console.error('Server error:', err);
});