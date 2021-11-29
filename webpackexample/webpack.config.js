const HtmlWebpackPlugin = require('html-webpack-plugin'); // CommonJS module system
const path = require('path');

module.exports = {
    module: {
        rules : [
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};