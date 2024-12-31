const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');


var entryPath="Source";
var entryPoints = {
      "js/pxlNav":`./${entryPath}/js/pxlNav.js`,
      /*"style/pxlNav": `./${entryPath}/style/pxlNavStyle.css`*/
    };

const pxlNavChunkDir = "pxlNavChunks";

const baseConfig = {
  mode: 'production',
  entry: entryPoints,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '.babelrc'),
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          mangle: {
            reserved: ['pxlNav', 'pxlNavVersion', 'pxlEnums', 'pxlOptions']
          },
          output: {
            comments: false,
          }
        },
        extractComments: false,
      })
    ],
    splitChunks: false, // Disable chunking
    runtimeChunk: false, // Disable runtime chunk
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/pxlNavStyle.css'
    }),
    /*new CopyWebpackPlugin({
      patterns: copyFileList,
    }),*/
    /*new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),*/
  ],
  /*resolve: {
    alias: {
      '../../three/examples/jsm/postprocessing/EffectComposer.js': path.resolve(__dirname, '../node_modules/three/examples/jsm/postprocessing/EffectComposer.js'),
      '../../three/examples/jsm/postprocessing/RenderPass.js': path.resolve(__dirname, '../node_modules/three/examples/jsm/postprocessing/RenderPass.js'),
      '../../three/examples/jsm/postprocessing/ShaderPass.js': path.resolve(__dirname, '../node_modules/three/examples/jsm/postprocessing/ShaderPass.js'),
      '../../three/examples/jsm/postprocessing/UnrealBloomPass.js': path.resolve(__dirname, '../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js'),
      '../../three/examples/jsm/shaders/CopyShader.js': path.resolve(__dirname, '../node_modules/three/examples/jsm/shaders/CopyShader.js'),
    },
  },*/
  externals: {
    'three' : './three.module.js',
    './libs/three/three.module.min.js' : './libs/three/three.module.min.js',
    '../libs/three/three.module.min.js' : './libs/three/three.module.min.js',
    '../../libs/three/three.module.min.js' : './libs/three/three.module.min.js',
    '../../../libs/three/three.module.min.js' : './libs/three/three.module.min.js',
    '../../../../libs/three/three.module.min.js' : './libs/three/three.module.min.js',
    '../../three//EffectComposer.js' : './libs/three/three.module.min.js',
    './pxlNav.js' : './pxlNav.esm.js',
    '../../pxlNav.js' : '../../pxlNav.esm.js',
    '../libs/three/EffectComposer.js': "./libs/three/EffectComposer.js",
    '../libs/three/RenderPass.js': "./libs/three/RenderPass.js",
    '../libs/three/ShaderPass.js': "./libs/three/ShaderPass.js",
    '../libs/three/UnrealBloomPass.js': "./libs/three/UnrealBloomPass.js",
    '../libs/three/CopyShader.js': "./libs/three/CopyShader.js",
    '../../libs/three/FBXLoader.js': "./libs/three/FBXLoader.js",
  },
};

// CJS Configuration
const cjsConfig = merge(baseConfig, {
  output: {
    filename: 'pxlNav.cjs.js',
    path: path.resolve(__dirname, 'dist/cjs'),
    chunkFilename: 'pxlNavChunkDir/[name].cjs.js',
    library: {
      type: 'commonjs2',
    },
  },
});

// UMD Configuration
const umdConfig = merge(baseConfig, {
  output: {
    filename: 'pxlNav.umd.js',
    path: path.resolve(__dirname, 'dist/umd'),
    chunkFilename: 'pxlNavChunkDir/[name].umd.js',
    publicPath: '/',
    library: {
      name: 'pxlNav',
      type: 'umd',
    },
  },
});

// ESM Configuration
const esmConfig = merge(baseConfig, {
  output: {
    filename: 'pxlNav.esm.js',
    path: path.resolve(__dirname, 'dist/esm'),
    chunkFilename: 'pxlNavChunkDir/[name].esm.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
});

module.exports = [cjsConfig, umdConfig, esmConfig];