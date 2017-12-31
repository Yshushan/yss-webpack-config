const path=require('path');

module.exports={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname,'./src'),
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                }
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.vue','.json','.css','.sass','.scss'],
    },
    
}