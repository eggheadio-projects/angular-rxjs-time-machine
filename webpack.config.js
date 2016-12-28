const path = require('path')
function root(__path = '.') {
    return path.join(__dirname, __path);
}

const webpack = require('webpack')
const config = {
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    entry: {
        'app': [
            'tachyons/css/tachyons.min.css',
            'core-js/es7/reflect',
            'zone.js/dist/zone',
            './src/main.ts'
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js',
        publicPath: '/dev/'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('./build/vendors-manifest.json'),
        })],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"},
            {
                test: /\.(ts)$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e|d)\.ts$/],
                include: [root('./src')]
            }
        ]
    }
}

module.exports = config;
