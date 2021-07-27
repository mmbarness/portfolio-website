const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
    entry: './frontend/entry.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Portfolio Template',
            templateContent: 
`<html>
    <head>
        <link rel="shortcut icon" href="https://call-sheet.s3.amazonaws.com/Screen+Shot+2021-06-28+at+12.56.24.png">
        <link ref="icon" type="image/png" href="https://call-sheet.s3.amazonaws.com/Screen+Shot+2021-06-28+at+12.56.24.png" sizes="560x562">
        <title>matthew barnes</title>
    </head>
    <div id = "root"></div>
</html>`
            })
    ],
    module: {
        rules: [
        {
            test: [/\.jsx?$/],
            exclude: '/node_modules/',
            loader: 'babel-loader',
            options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        },
        {test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]},
        {
            test: /\.svg/,
            use: {
                loader: 'svg-url-loader'
            }
        },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
};
