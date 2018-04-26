const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: "file-loader",
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
        ]
    }
};
