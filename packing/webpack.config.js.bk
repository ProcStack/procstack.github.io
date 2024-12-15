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
const glob = require("glob");
const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
//const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const rimraf = require('rimraf');
const { type } = require('os');
//require("babel-core/register");
//require("babel-polyfill");

const envMode=process.env.NODE_ENV;
const devMode =  envMode === 'development';
const adminMode = process.env.ADMIN_BUILD === "admin";

var buildMode= adminMode ? "admin" : envMode;

buildMode=buildMode.charAt(0).toUpperCase() + buildMode.slice(1);
console.log( "// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //" );
console.log( "// --  Building pxlNav for " + buildMode + " -- -- -- // ");
console.log( "// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //\n\n" );

// -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- //


var outputPath="../dist";
var publicPath="Public";
var entryPath="Source";
var roomFolder = "pxlRooms";
var packerFolder = "packing";

// Clear out the outputPath of all files before continuing
rimraf.sync(path.resolve(__dirname, outputPath));

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
	//outputPath="Build"; // Non-Admin Build Output Path
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
//adminOption.push(
adminOption = [
			{
				loader:'babel-loader',
        options: {
        }
			}
		];
//adminOption = [
//      "file-loader?name=[path][name].[ext]",
//      "babel-loader"
//    ]
// -- -- -- -- -- -- -- //


// Inclusion paths for Packing
const includePath = path.join(__dirname, `${entryPath}/js`);
const nodeModulesPath = path.join(__dirname, 'node_modules');


// console.log( glob.sync(`./${entryPath}/**/*.js`).reduce((acc, file) => {
      // if( !file.includes(`./${entryPath}/lib`) ){
        // acc[file.replace(/^\.\/Source\//, "")] = file;
      // }
      // return acc;
    // }, {}) )

let entryFullList = glob.sync(`./${entryPath}/js/${roomFolder}/**/*.js`).reduce((acc, file) => {
      if( !file.includes(`./${entryPath}/js/lib`) && !file.includes("templateRoom") && !file.includes("Shaders.js") ){
        acc[file.replace(`./${entryPath}/`, "")] = file;
      }
      return acc;
    }, {});
let entryPoints = Object.assign({},
    {
      "js/pxlNav.js":`./${entryPath}/js/pxlNav.js`,
      "style/pxlNav.css": `./${entryPath}/style/pxlNav.css`
    },
    entryFullList );
entryPoints = {
      "js/pxlNav":`./${entryPath}/js/pxlNav.js`,
      /*"style/pxlNav": `./${entryPath}/style/pxlNavStyle.css`*/
    };
/*entryPoints = {
      "js/pxlNav":`./${packerFolder}/webpack-entry.js`,
    };*/
//entryPoints["style/pxlNavStyle.css"] = `./${entryPath}/style/pxlNavStyle.css`;

let copyFileList = [ { from: publicPath } ]
//			{ from: 'src/libs/three/examples/jsm/libs/stats.module.js', to: 'js/three/stats.module.js' },
let entryPointScan = [];
// ## Scan for Room Asset Folders
Object.keys( entryFullList ).forEach( (e)=>{
  let ePath = entryFullList[e];
  if( ePath.includes( roomFolder ) ){
    let splitter = ePath.split( "/" );
    let title = splitter.pop();
    while( title.includes(".") ){
      title = splitter.pop();
      if( splitter.length == 0 ){
        break
      }
    }
    if( title != "" && !entryPointScan.includes(title) ){
      let basePath = ePath;
      basePath = basePath.split("/")
      if( basePath[ basePath.length-1 ].includes(".") ){
        basePath.pop();
      }
      basePath=basePath.join("/") + "/Assets";
      if( fs.existsSync(basePath) ){
        let fromPath = basePath.replace(`./${entryPath}/`, `${entryPath}/`)
        let toPath = basePath.replace(`./${entryPath}/`, "")
        
        entryPointScan.push( title );
        
        copyFileList.push( {
          from: fromPath,
          to: toPath
        } );
      }
    }
  }
});

console.log(entryPoints);
console.log(" -- -- -- ");
console.log(copyFileList)

//entryPoints={}
//entryPoints="./webpack-entry.js";
// Module options for Webpack; Babel, Code Removal, Etc.

module.exports = {
  mode: 'production',
  // entry: {
  // //'':'babel-polyfill',
	// 'pxlNav' : './Source/js/pxlNav.js',
	// 'pxlStyle' : './Source/style/pxlNavStyle.css',
  // },
  entry: entryPoints ,
  output: {
    chunkLoading: "import", // import, require, or async-import
    chunkFormat: "module", // array-push, commonjs, or module
    chunkLoadingGlobal: 'pxlNav',
    library: {
      name:'pxlNav',
      type: 'var',
    },
    libraryTarget: 'umd', // 'umd',
    //libraryExport: 'pxlNav',
    path: path.resolve(__dirname, outputPath),
    publicPath: '/', // Output root folder for assets
    //filename: '[name].js', // Bundle Output
    chunkFilename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : 'js/pxlNavChunks/[name].js';
    },
  },
  module: {
    rules: [
      { // Prepped this step in GULP, but lets see webpack
        test: /\.(js)$/,
        use: [
          {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          },
        ]
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: false,
          mangle: {
            reserved: ['pxlNav', 'VERBOSE_LEVELS'] // Add the names of the exports you want to keep
          },
          output: {
            comments: false,
            beautify: false,
          }
        },
        extractComments: false,
      })
    ],
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
      filename: 'style/pxlNavStyle.css'
    }),
	new CopyWebpackPlugin({
		patterns: copyFileList,
	})
  ]
}
/*
module.exports = {
  mode: devMode ? 'development' : 'production',
  // entry: {
  // //'':'babel-polyfill',
	// 'pxlNav' : './Source/js/pxlNav.js',
	// 'pxlStyle' : './Source/style/pxlNavStyle.css',
  // },
  entry: entryPoints ,
  output: {
    path: path.resolve(__dirname, outputPath),
    publicPath: '/', // Output root folder for assets
    filename: '[name].min.js', // Bundle Output
    //sourceMapFilename: `[name].map`
  },
  //devtool: "source-map",
  module: {
    rules: [
      { // Config for Babel - .babelrc
        test: /\.(js)$/,
      //  exclude: [
			// /(node_modules|three)/,
			// /\*three*\.(js)$/,
			// /\*libs*\.(js)$/
		  //],
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
          }
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
      filename: 'style/pxlNavStyle.css'
    }),
	new CopyWebpackPlugin({
		patterns: copyFileList,
	})
  ]
};
*/

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