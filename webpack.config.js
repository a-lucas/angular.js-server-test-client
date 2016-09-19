var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'dist/app.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.js']
    },
    devtool: 'source-map',
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ],
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};