const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleRulesLoader = require("./config/moduleRules.js");
const purifyCSSPlugin = require("purifycss-webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
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
    filename: "[name]-[chunkhash:6].js"
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
    new CleanWebpackPlugin("./dist"),
    new HtmlWebpackPlugin({
      title: "Custom template",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["crypto", "reactor", "jquery", "index", "utils"]
    }),
    new webpack
      .optimize
      .ModuleConcatenationPlugin(),
    new purifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, "src/*.html")) // 去除.html文件中没有使用到的css样式
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
  ],

  devtool: "cheap-module-eval-source-map", //开发模式
  // devtool: "cheap-module-source-map", //生产模式
  devServer: {
    // 配置服务与热更新
    contentBase: path.resolve(__dirname, "dist"), // 监听哪个目录下启动热更新
    host: "localhost", // 服务地址 192.168.0.106本地
    compress: true, // 服务器端的压缩，开启
    port: "3000", // 端口号
    proxy: {
      "/admin": {
        target: "http://localhost:8080/words-admin/",
        secure: false
      // pathRewrite: { "^/api": "" }
      },
      "/pdf-store": {
        target: "http://localhost:8080/words-admin/admin/downloadFile",
        secure: false,
        pathRewrite: {
          "^/pdf-store": ""
        }
      }
    }
  },

  watchOptions: {
    // 实时打包更新
    poll: 1000, // 每1s时间就检测文件是否修改，修改了就自动帮我们打包
    // aggregeateTimeout: 500, // 设置的是我们连续按Ctrl+S保存时，500毫秒内只执行打包一次
    ignored: /node_modules/ // 这个文件夹不监视
  }
};