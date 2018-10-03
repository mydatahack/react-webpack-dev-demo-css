const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:['@babel/polyfill','./source/client.js'],
    output: {
        path: '/Users/taka/Desktop/helloworld/',
        filename: 'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        historyApiFallback: true,
        port:3000
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            
            {
                test:/\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
            /* for regular css support
            {
                test:/\.css$/,
                use: [
                    { loader: ExtractTextPlugin.extract(['style-loader']) },
                    { loader: ExtractTextPlugin.extract(['css-loader']) }
                  ]
                // or alternatively this works instead of use: 
                // loader: ExtractTextPlugin.extract(['css-loader'])
            }
            */
        ]
    },
    plugins:[
        new ExtractTextPlugin({filename: "app.css"}),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new CopyWebpackPlugin([
            {from:'public/img',to:'img'}
        ])
    ]
}