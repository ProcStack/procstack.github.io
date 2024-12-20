const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Define pxlNav entry point and output file
const entryFile = './Source/js/pxlNav.js';
const outputFile = './Build/pxlNav.min.js';

// Define Room entry point and output file
const roomEntryRoot = './Source/pxlRooms/';
const roomOutputRoot = './Build/pxlRooms/';


function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source, dirent.name));
}

var entryFiles = {}
entryFiles[entryFile] = outputFile;

var externalFiles = [];


let directories = getDirectories( roomEntryRoot );
console.log(directories);
directories.forEach( (dir)=>{
  let roomName = dir.split('\\').pop();
  console.log(roomName);
  if( roomName != "templateRoom" ){
    let roomEntryFile = roomEntryRoot+roomName+'/'+roomName+'.js';
    let roomOutputFile = roomOutputRoot+roomName+'/'+roomName+'.js';
    externalFiles.push(roomName);
    entryFiles[roomEntryFile] = roomOutputFile;
  }
});

console.log(Object.entries(entryFiles))

// -- -- --

// Create a plugin to substitute import paths
const pathSubstitutionPlugin = {
  name: 'path-substitution',
  setup(build) {
    build.onResolve({ filter: /^\.\.\/\.\.\/libs\/three\/three\.module\.js$/ }, args => {
      return { path: '../../three.module.js', external: true };
    });
  }
};

// -- -- --

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
    external: [
      './Source/js/libs/three/three.module.js',
      './Source/js/pxlRoom/CampfireEnvironment/CampfireEnvironment.js',
      './Source/js/pxlRoom/FieldEnvironment/FieldEnvironment.js',
      './Source/js/pxlRoom/SaltFlatsEnvironment/SaltFlatsEnvironment.js',
      './Source/js/pxlRoom/VoidEnvironment/VoidEnvironment.js'
    ],
    plugins: [pathSubstitutionPlugin]
  }));
}

// Execute 'em!
Promise.all(promiseList).then(() => {
  console.log('Bundling and minification complete');
}).catch((error) => {
  console.error('Bundling and minification error:', error);
});

