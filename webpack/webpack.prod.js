/*
 * @Author: Buer
 * @Date: 2017-11-14 20:46:34
 */

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    entry: {
        vendor: [
            'vue', 'vue-router',
            'bluebird'
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                })
            },
        ]
    },
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[chunkhash:6].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                warnings: false,
            },
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:6].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NamedChunksPlugin(),
    ]
});
