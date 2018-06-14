let path = require("path");
let common = require('./webpack.common.js');
let merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack
      .optimize
      .ModuleConcatenationPlugin(),
  ],
  // devtool: "cheap-module-eval-source-map", //开发模式
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
});