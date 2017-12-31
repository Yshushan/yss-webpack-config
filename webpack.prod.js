const webpackMerge=require('webpack-merge');
const commonConfig=require('./webpack.common.js');
const webpack=require('webpack');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');

module.exports=webpackMerge(commonConfig,{
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("production")
        })
    ]
})