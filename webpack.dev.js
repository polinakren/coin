const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    port: '3001',
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    concatenateModules: true,
    flagIncludedChunks: true,
    innerGraph: false,
    mangleExports: true,
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
});
