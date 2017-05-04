var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: 'eunrocket.synology.me',
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    })],
                    exclude: /node_modules/
                }
            ]
        },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
