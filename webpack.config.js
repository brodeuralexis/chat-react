'use strict';

const path = require('path');

const paths = {
    app: {
        main: path.resolve(__dirname, 'src', 'main.js'),
        root: path.resolve(__dirname, 'src')
    },
    build: {
        directory: path.resolve(__dirname, 'assets'),
        publicPath: '/',
        filename: 'bundle.js'
    }
};

const css = 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]';
const autoprefixer = 'autoprefixer?browsers=last 2 version';

module.exports = {
    entry: [
        paths.app.main
    ],
    resolve: {
        extensions: [
            '', '.js', '.jsx'
        ]
    },
    output: {
        path: paths.build.directory,
        filename: paths.build.filename
    },
    module: {
        loaders: [{
            test:    /\.s?css$/,
            loaders: ['style', css, autoprefixer, 'sass?outputStyle=expanded&sourceMap'],
            include: paths.app.root
        }, {
            test: /\.less$/,
            loaders: ['style', css, autoprefixer, 'less?outputStyle=expanded&sourceMap'],
            include: paths.app.root
        }, {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel?cacheDirectory'],
            include: paths.app.root
        }]
    }
};
