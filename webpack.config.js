const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.min.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "To Do"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        historyApiFallback: true
    }
};
