const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:['@babel/polyfill','./source/client.js'],
    output: {
        path: '/Users/taka/Desktop/webpack-dev-demo-css/webpack-dev-test-css/',
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
        ]
    },
    plugins:[
        new ExtractTextPlugin({filename: "app.css"})
    ]
}