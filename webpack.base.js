const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        // new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'React Poker',
            template: './index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new ExtractTextPlugin('[name].css')
    ],
    output:{
        filename:'[name].[hash].js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use :[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders:2
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use : ['file-loader']
            },
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            }
        ]
    },
    externals: {
        lodash: {
            commonjs:'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}