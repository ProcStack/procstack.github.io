const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Define the entry point and output file
const entryFile = '../Source/js/pxlNav.js';
const outputFile = '../Build/pxlNav.min.js';

function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source, dirent.name));
}

var entryFiles = {
  '../Source/js/pxlNav.js' : '../Build/pxlNav.min.js'
};

let directories = getDirectories('../Source/pxlRooms');
console.log(directories);
directories.forEach( (dir)=>{
  let roomName = dir.split('\\').pop();
  console.log(roomName);
  if( roomName != "templateRoom" ){
    let entryFile = '../Source/pxlRooms/'+roomName+'/'+roomName+'.js';
    let outputFile = '../Build/pxlRooms/'+roomName+'/'+roomName+'.js';
    entryFiles[entryFile] = outputFile;
  }
});


let promiseList = [];

// Stack the promises!!
for (const [entryFile, outputFile] of Object.entries(entryFiles)) {
  promiseList.push(esbuild.build({
    entryPoints: [entryFile],
    bundle: true,
    minify: true,
    outfile: outputFile,
    format: 'esm', // or 'cjs' for CommonJS modules
    platform: 'browser', // or 'node' for Node.js
    loader: {
      '.js': 'jsx'
    },
  }));
}

// Execute 'em!
Promise.all(promiseList).then(() => {
  console.log('Bundling and minification complete');
}).catch((error) => {
  console.error('Bundling and minification error:', error);
});

