const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

// Define the input and output files
const inputFiles = [
  './Source/js/pxlNav.js'
];
const outputFile = './dist/bundle.min.js';

// Read and concatenate the input files
let code = '';
inputFiles.forEach(file => {
  code += fs.readFileSync(file, 'utf8') + '\n';
});

// Minify the concatenated code
minify(code).then(result => {
  // Write the minified code to the output file
  fs.writeFileSync(outputFile, result.code, 'utf8');
  console.log('Minification complete:', outputFile);
}).catch(error => {
  console.error('Minification error:', error);
});