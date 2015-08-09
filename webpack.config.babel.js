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
        loaders: [],
        noParse: []
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    ],
};

export default config;
