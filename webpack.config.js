const path = require('path');
const webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: [
        './src/components/Application.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$|\.css$/,
                loader: 'style-loader!css-loader!!postcss-loader'
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ];
    }
};
