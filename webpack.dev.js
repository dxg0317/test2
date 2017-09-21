const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer({
      filename: './stats.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
});
