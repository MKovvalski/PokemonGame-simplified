var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        main: path.join(__dirname, 'src', 'app.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: './src',
        compress: true,
        port: 9001
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [        'es2015',        'stage-2',        'react']
                    }
                }
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            hash: true
        }),
        new ExtractTextPlugin('style.css')
    ]
};
