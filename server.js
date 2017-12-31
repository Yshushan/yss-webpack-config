const express=require('express');
const webpack=require('webpack');
const WebpackDevMiddleware=require('webpack-dev-middleware');
const config=require('./webpack.config.js');
const fs=require('fs');

const app=express();
const compiler=webpack(config);

app.use(WebpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));
// app.get('/',(req,res,next)=>{
//     console.log(req.originalUrl);
//     fs.readFile('index.html','utf8',(err,file)=>{
//         if(err) next(err);
//         else {
//             res.status(200).send(file);
//         }
//     })
// });
// app.use((err,req,res,next)=>{
//     console.error(err.stack)
//     res.send('file not found');
// })

app.listen(3000,()=>console.log('Server is running on port 3000 ...'));
