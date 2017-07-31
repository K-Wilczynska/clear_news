"use strict";

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV !== "production";
const VENDOR_LIBS = [
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-form",
    "redux-thunk"
];

const PATHS = {
    bundle: "./src/main/js/index.js",
    template: "./src/main/index.html",
    build: path.join(__dirname, "build")
};

const FILE_NAMES = {
    js: DEVELOPMENT ? "[name].js" : "[name]-[chunkhash].js",
    css: DEVELOPMENT ? "style.css" : "style-[contenthash].css"
};

const extractSass = new ExtractTextPlugin({
    filename: FILE_NAMES.css,
    allChunks: true,
    disable: DEVELOPMENT
});

const DEVELOPMENT_PLUGINS = [
    new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
        template: PATHS.template,
        inject: true
    }),
    extractSass
];

const PRODUCTION_PLUGINS = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false,
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
        },
        output: {
            comments: false
        }
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    })
];

module.exports = {
    entry: {
        bundle: PATHS.bundle,
        vendor: VENDOR_LIBS
    },
    output: {
        path: PATHS.build,
        filename: FILE_NAMES.js
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules|bower_components|test/
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 50000 }
                    },
                    "image-webpack-loader"]
            }

        ]
    },
    plugins: DEVELOPMENT ? DEVELOPMENT_PLUGINS : DEVELOPMENT_PLUGINS.concat(PRODUCTION_PLUGINS)
};

