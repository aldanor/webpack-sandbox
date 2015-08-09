import webpack from 'webpack';

let config = {
    entry: {
        app: ['./app.js']
    },
    output: {
        path: './build',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        loaders: [],
        noParse: []
    },
    plugins: []
};

export default config;
