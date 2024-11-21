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
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//require("babel-core/register");
//require("babel-polyfill");

const envMode=process.env.NODE_ENV;
const devMode =  envMode === 'development';
const adminMode = process.env.ADMIN_BUILD === "admin";

var buildMode= adminMode ? "admin" : envMode;

buildMode=buildMode.charAt(0).toUpperCase() + buildMode.slice(1);
console.log( "// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //" );
console.log( "//  Building Antib0dy.club for " + buildMode + " -- -- ");
console.log( "// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //\n\n" );

// -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- //


var outputPath="buildAdmin";
// -- -- -- -- -- -- -- //
// Remove Admin code from scripts
var adminOption=[
					{
						loader: 'string-replace-loader',
						options: {
							search: /\/\/%=([\S\s\W\w\n]*?)\/\/%/gi,
							replace: '',
						}
					}
				];
if(envMode=="production" && !adminMode ){
	outputPath="dist"; // Non-Admin Build Output Path
	adminOption.push(
			{
				loader: 'string-replace-loader',
				options: {
					search: /\/\/&=([\S\s\W\w\n]*?)\/\/&/gi,
					replace: '',
				}
			});
}else{
	process.env.NODE_ENV="production";
}
adminOption.push(
			{
				loader:'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/transform-runtime'
                    ]
                }
			}
		);
// -- -- -- -- -- -- -- //


// Inclusion paths for Packing
//const includePath = path.join(__dirname, 'Source/js');
const nodeModulesPath = path.join(__dirname, 'node_modules');

console.log(__dirname);
// Module options for Webpack; Babel, Code Removal, Etc.
module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    //'':'babel-polyfill',
		'pxlNav' : 'Source/js/pxlNav.js',
		'pxlStyle' : 'Source/style/pxlNav.css'
  },
  output: {
    path: path.resolve(__dirname, outputPath),
    publicPath: '/', // Output root folder for assets
    filename: 'js/[name].min.js' // Bundle Output
  },
  module: {
    rules: [
      { // Config for Babel - .babelrc
        test: /\.(js)$/,
        exclude: [
			/(node_modules|three)/,
			/\*three*\.(js)$/,
			/\*libs*\.(js)$/
		],
        use: adminOption,
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
          }/*,
          { // ## Don't think this is needed
            loader: 'sass-loader'
          }*/
        ]
      }
    ]
  },
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\\/]three[\\\/]/,
					name: 'three',
					chunks: 'all'
				},
				vendor: {
					test: /[\\\/]libs[\\\/]/,
					name: 'libs',
					chunks: 'all'
				},
			},
		},
	},
  plugins: [ // Load CSS root file
    new MiniCssExtractPlugin({
      filename: 'style/procstack.min.css'
    }),
	new CopyWebpackPlugin({
		patterns: [
			{ from: 'Public' },
			/*{ from: 'src/libs/three/build/three.module.js', to: 'js/three/three.module.js' },
			{ from: 'src/libs/three/examples/jsm/libs/inflate.module.min.js', to: 'js/three/inflate.module.min.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/EffectComposer.js', to: 'js/three/EffectComposer.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/RenderPass.js', to: 'js/three/RenderPass.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/ShaderPass.js', to: 'js/three/ShaderPass.js' },
			{ from: 'src/libs/three/examples/jsm/shaders/CopyShader.js', to: 'js/three/CopyShader.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/SSAARenderPass.js', to: 'js/three/SSAARenderPass.js' },
			{ from: 'src/libs/three/examples/jsm/postprocessing/UnrealBloomPass.js', to: 'js/three/UnrealBloomPass.js' },
			{ from: 'src/libs/three/examples/jsm/libs/dat.gui.module.js', to: 'js/three/dat.gui.module.js' },
			{ from: 'src/libs/three/examples/jsm/libs/stats.module.js', to: 'js/three/stats.module.js' },*/
		],
	})
  ]
};


/*const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
		index:'./src/js/pxlNav.js',
		pxlNav:'./src/js/pxlBase/pxlBase.js',
		rolLobby:'./src/js/rolLobby/rolLobby.js',
		rolShadowPlanet:'./src/js/rolShadowPlanet/rolShadowPlanet.js',
		rolDanceFloor:'./src/js/rolDanceFloor/rolDanceFloor.js',
	},
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
*/