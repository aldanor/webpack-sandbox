import path from 'path';
import webpack from 'webpack';

let config = {
    entry: {
        app: ['./app.js'],
        vendor: ['./v1.js', './v2.js']
    },
    output: {
        path: './build',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
        ],
        noParse: []
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: {}
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    ],
};

export default config;
