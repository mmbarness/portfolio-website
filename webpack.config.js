const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
    entry: './frontend/portfolio-entry.js',
    output: {
        // path: path.resolve(__dirname, 'frontend', 'bundle'),
        filename: 'frontend/bundle.js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Portfolio Template',
            templateContent: 
`<html>
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
        {test: /\.(css|scss})$/, loader: 'css-loader'},
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
