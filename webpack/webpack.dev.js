/*
 * @Author: Buer
 * @Date: 2017-11-14 20:46:32
 */

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                }, {
                    loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: 'sass-loader' // 将 Sass 编译成 CSS
                }]                
            }
        ]
    }
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
});
