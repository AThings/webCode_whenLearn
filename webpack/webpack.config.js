const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index:'./src/index.js'
        // app:'./src/index.js',
        // print:'./src/print.js'
    },
    output: {
    filename: 'bundle.js',
        //filename:'[name].bundele.js',
    path: path.resolve(__dirname, 'dist')
    },
    module:{
        // rules:[
        //     {
        //         test:/\.css$/,
        //         use:ExtractTextPlugin.extract({
        //             fallback:"style-loader",
        //             use:"css-loader"
        //         })
        //     }
        // ]
    },
    plugins:[
        // new ExtractTextPlugin("./css/main.css"),
        // new HtmlWebpackPlugin({
        //     title:'Output Management',
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index.html'
        //})
    ],
    // devServer:{
    //     contentBase: path.resolve(__dirname,'dist'),
    //     host:'127.0.0.1',
    //     port:'8081',
    //     compress:true
    // }
};