
const projectName = "ProcStack.Github.io";
let listenIP = 'localhost';
//listenIP = '192.168.1.3'; // For testing on my phone
var httpPort = 3000;

const args = process.argv.slice(2);


const express = require('express');
const app = express();

const path = require('path');
const http = require('http').Server(app);



//Setup folders
//app.use( express.static(path.join(__dirname, '/Build')) );

let publicDir = 'Public';
if(args.length > 0 && args[0] == "dist"){
  console.log("Booting in 'Live'")
  console.log("Serving from: ./docs");
  publicDir = 'docs';

  app.use( express.static(path.join(__dirname, 'docs')) );
}else{
  console.log("Booting in Developer Mode");
  console.log("Serving from: ./Public & ./Source");
  app.use( express.static(path.join(__dirname, 'Public')) );
  app.use( express.static(path.join(__dirname, 'Source')) );
}
app.use('/three', express.static(path.join(__dirname, 'node_modules/three')));

app.get("/", function(req,res){
  res.redirect('/index.htm');
});

// Handle 404 errors by serving the 404.html file
app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, publicDir, '404.html'));
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
http.listen(httpPort, listenIP, function () {
	//console.log(`${projectName} listening at localhost:${httpPort}`);
	console.log(`${projectName} listening at ${listenIP}:${httpPort}`);
});
