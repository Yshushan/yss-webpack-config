const webpackMerge=require('webpack-merge');
const commonConfig=require('./webpack.common.js');
const path=require('path');

module.exports=webpackMerge(commonConfig,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname,'build'),
        historyApiFallback: true,
        noInfo: true,
        compress: true,
    }
})