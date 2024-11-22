const esbuild = require('esbuild');

// Define the entry point and output file for CSS
const cssEntryFile = './Source/style/pxlNavStyle.css';
const cssOutputFile = './Build/pxlNavStyle.min.css';

// Bundle and minify the CSS
esbuild.build({
  entryPoints: [cssEntryFile],
  bundle: true,
  minify: true,
  outfile: cssOutputFile,
  loader: {
    '.css': 'css'
  },
}).then(() => {
  console.log('CSS bundling and minification complete:', cssOutputFile);
}).catch((error) => {
  console.error('CSS bundling and minification error:', error);
});