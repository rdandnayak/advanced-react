const path = require('path');

const config = {
  resolve: {
    modules: [path.resolve('./lib'), path.resolve('./node_modules')],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  entry: ['babel-polyfill', './lib/renderer/dom.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
