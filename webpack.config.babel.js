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
        loaders: [
            {
                test: /v(1|2)\.js/,
                loader: 'bundle?name=dynamic'
            }
        ],
        noParse: []
    },
    plugins: []
};

export default config;
