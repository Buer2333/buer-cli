/*
 * @Author: Buer
 * @Date: 2017-11-14 20:45:27
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../../');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: [
                    path.join(projectRoot, 'src')
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: path.posix.join('static', '[name].[hash:7].[ext]')
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: path.resolve(__dirname, '../dist/index.html'),
            inject: true,
        }),
    ]
};
