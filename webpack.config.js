
const webpack = require('webpack');
const path = require('path');
const htmlWebpack = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    // mode: 'production',
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/built.js'
    },
    devServer: {
        //监听的目录
        contentBase: "./xxdd",
        port: 9999
    },
    module: {
        rules: [
            //解析sass语法的loader
            { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            //解析.vue文件格式
            { test: /\.vue$/, use: ['vue-loader'] },
            //解析.vue中的style样式
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            //解析.vue文件中ES6/7/8语法
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        // 自动注入
        new htmlWebpack({
            template: './index.html',
            filename: "index.html"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()

    ]


}
module.exports = config