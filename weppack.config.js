const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        main: './src/index.js'
    },
    plugins: [      
        new CleanWebpackPlugin(),
    ],
    
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                ],
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
                ],
            }
        ]
    },      
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    }
};