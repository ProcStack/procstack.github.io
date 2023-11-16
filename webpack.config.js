//////////////////////////////////////////////////////////////
//                                                         //
//  Dev code and Admin code are marked in JS files.       //
//    CSS doesn't support //%= or //&= yet               //
//                                                      //
//  //%=                                               //
//   Dev code; only accessable in sandbox             //
//  //%                                              //
//                                                  //
//  //&=                                           //
//   Admin code; accessable from password         //
//     protected access to Antibody              //
//   Dev code is removed from admin as well.    //
//  //&                                        //
//                                            //
///////////////////////////////////////////////

const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//require("babel-core/register");
//require("babel-polyfill");

console.log( "// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --" );
console.log( "//  Building, packing, otherwise, smacking - -- --  ");
console.log( "// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n\n" );

// -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- //

    module.exports = {
      mode: 'production',
      entry: './source/js/Neurous.js',
      output: {
        path: path.resolve(__dirname, 'Public/js'),
        filename: 'Neurous.min.js'
      },
      resolve: {
        alias: {
          'node_modules': path.join(__dirname, 'node_modules'),
        }
      }
    };

/*
var outputPath="build";
// -- -- -- -- -- -- -- //
var buildOption=[]
buildOption.push(
  {
    loader:'babel-loader',
    options: {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            //'@babel/transform-runtime'
        ]
    }
  }
);
// -- -- -- -- -- -- -- //


// Inclusion paths for Packing
//const includePath = path.join(__dirname, 'src/js');
//const nodeModulesPath = path.join(__dirname, 'node_modules');


// Module options for Webpack; Babel, Code Removal, Etc.
module.exports = {
  mode: 'production',
  entry: [ './source/js/Neurous.js' ],
  output: {
    path: path.resolve(__dirname, outputPath),
    publicPath: '/', // Output root folder for assets
    filename: 'js/Neurous.min.js' // Bundle Output
  },
  module: {
    rules: [
      { // Config for Babel - .babelrc
        test: /\.(js)$/,
        exclude: [],
        use: buildOption,
      },
      { // Prepped this step in GULP, but lets see webpack
        test: /\.(css)$/,
        use: [
          { // Prep from 'plugins'
            loader: MiniCssExtractPlugin.loader
          },
          { // Load CSS
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          { // PostCSS to minify and autoprefix. Config - postcss.config.js
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
	optimization: {},
  plugins: [ // Load CSS root file
    new MiniCssExtractPlugin({
      filename: 'style/Neurous.min.css'
    })//,
	new CopyWebpackPlugin({
		patterns: [
			{ from: 'public' },
			{ from: 'src/libs/three/build/three.module.js', to: 'js/three/three.module.js' },
			{ from: 'src/libs/three/examples/jsm/libs/inflate.module.min.js', to: 'js/three/inflate.module.min.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/EffectComposer.js', to: 'js/three/EffectComposer.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/RenderPass.js', to: 'js/three/RenderPass.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/ShaderPass.js', to: 'js/three/ShaderPass.js' },
			{ from: 'src/libs/three/examples/jsm/shaders/CopyShader.js', to: 'js/three/CopyShader.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/SSAARenderPass.js', to: 'js/three/SSAARenderPass.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/UnrealBloomPass.js', to: 'js/three/UnrealBloomPass.js' },
			{ from: 'src/libs/three/examples/jsm/libs/dat.gui.module.js', to: 'js/three/dat.gui.module.js' },
			{ from: 'src/libs/three/examples/jsm/libs/stats.module.js', to: 'js/three/stats.module.js' },
		],
	})
  ]
};*/

