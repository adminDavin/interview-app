const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const moduleRules = {
  rules: [{
    test: /\.jsx|js?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',

    }]
  },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: { // 这里的options选项参数可以定义多大的图片转换为base64
          limit: 1000, // 表示小于1kb的图片转为base64,大于1kb的是路径
          outputPath: 'css/' //定义输出的图片文件夹
        }
      }]

    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader',
        options: { // 这里的options选项参数可以定义多大的图片转换为base64
          limit: 1000, // 表示小于1kb的图片转为base64,大于1kb的是路径
          outputPath: 'font' //定义输出的图片文件夹
        }
      }]
    },
    {
      test: /\.(sass|scss|css)$/,
      use: [{
        loader: 'style-loader'
      },
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.(pdf)$/,
      use: [{
        loader: 'file-loader',
        options: { // 这里的options选项参数可以定义多大的图片转换为base64
          limit: 1000, // 表示小于1kb的图片转为base64,大于1kb的是路径
          outputPath: 'font' //定义输出的图片文件夹
        }
      }]
    },

  ]
};

module.exports = moduleRules;