const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: '/',
    publicPath: '/', // 打包后的bundle在内存中的输出位置, default: '/'
    historyApiFallback: true,
    noInfo: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true
    })
  ]
})
