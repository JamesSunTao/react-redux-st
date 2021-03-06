const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css


const prodConfig = {
    mode:"production",
    // devtool: "cheap-module-source-map",
    module: {
        rules:[
          
            
        ]
    },
    optimization: {
      runtimeChunk: {
          name: "manifest"
      },
      splitChunks: {
          cacheGroups: {
              commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendor",
                  chunks: "all"
              }
          }
      }
    },
    plugins: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'), //用于优化\最小化 CSS 的 CSS处理器，默认为 cssnano           
      }),
  
    ],
}

module.exports = merge(commonConfig,prodConfig);
