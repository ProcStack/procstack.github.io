const path = require('path');

module.exports = {
  entry: './Source/js/pxlNav.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Build/js'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      three: path.resolve(__dirname, 'node_modules/three'),
    },
  },
};