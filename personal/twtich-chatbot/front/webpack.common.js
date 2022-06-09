const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

    entry: './src/index.js',
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist/")
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]        
            },
            {
                test: /\.scss$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2|png|ico)$/,
                loader: 'file-loader'
            },
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),

        new CleanWebpackPlugin({ 

            cleanAfterEveryBuildPatterns: ['dist']
        }),

        new HtmlWebpackPlugin({ 
            inject:true,
            template: 'public/index.html', // 적용될 html 경로
            filename: 'index.html',  // 결과 파일명
            meta: {
                // meta 태그를 추가
                viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            },
            hash: true,       // 모든 스크립트, css 파일에 고유한 컴파일 해시 추가하여 캐시를 무효화
            showErrors: true, // 오류 정보가 html에 기록됨
        }),
      ],
};