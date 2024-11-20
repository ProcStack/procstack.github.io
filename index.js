
const projectName = "ProcStack.Git.io";
var httpPort = 3000;



const express = require('express');
const app = express();

const path = require('path');
const http = require('http').Server(app);


console.log("Booting in Development; Public / Source")

//Setup folders
//app.use( express.static(path.join(__dirname, '/Build')) );
app.use( express.static(path.join(__dirname, '/Public')) );
app.use( express.static(path.join(__dirname, '/Source')) );
//app.use('/images', express.static(path.join(__dirname, '/Source/images')) );
//app.use('/js', express.static(path.join(__dirname, '/Source/js')) );
//app.use('/style', express.static(path.join(__dirname, '/Source/style')) );

app.get("/", function(req,res){
    res.redirect('/index.htm');
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
http.listen(httpPort, function () {
	console.log(`${projectName} listening at localhost:${httpPort}`);
});
