const esbuild = require('esbuild');

// Define the entry point and output file
const entryFile = '../Source/js/pxlNav.js';
const outputFile = '../Build/pxlNav.min.js';

var entryFiles = {
  '../Source/js/pxlNav.js' : '../Build/pxlNav.min.js',
  '../Source/pxlRooms/CampfireEnvironment/CampfireEnvironment.js' : '../Build/pxlRooms/CampfireEnvironment/CampfireEnvironment.js',
};

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

