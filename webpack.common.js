const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleRulesLoader = require("./config/moduleRules.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    utils: "./src/script/utils.js",
    react: "react",
    reactDom: "react-dom",
    jquery: ["jquery"],
    crypto: ["crypto-js"],
  // 'bootstrap': 'bootstrap-loader'
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
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Popper: ['popper.js', 'default'],
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    })
  ],
};