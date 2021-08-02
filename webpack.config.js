const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
 
module.exports = {
    entry: './frontend/entry.js',
    output: {
        filename: 'bundle.js'
    },
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
        {test: /\.css$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]},
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
        alias: {
            process: 'process/browser',
            stream: "stream-browserify",
            zlib: "browserify-zlib"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ]
};
