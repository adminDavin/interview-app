const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleRulesLoader = require("./config/moduleRules.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    utils: "./src/script/utils.js",
    reactor: [
      "react", "react-dom"
    ],
    jquery: ["jquery"],
    crypto: ["crypto-js"]
  },
  output: {
    path: __dirname + "/dist",
    filename: "js/[name]-[chunkhash:6].js"
  },
  module: moduleRulesLoader,
  resolve: {
    enforceExtension: false,
    extensions: [
      ".js", ".json", ".jsx"
    ],
    modules: ["node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
    }), 
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      Popper: [
        "popper.js", "default"
      ],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })
  ]
};