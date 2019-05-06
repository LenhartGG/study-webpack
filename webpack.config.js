const path = require('path');
import configEntry from './webpack.config.entry.js'; // 入口文件
var buildDir = path.resolve(__dirname, './build');  // 输出文件

module.exports = {
  mode: 'none',
  entry: configEntry,
  output: {
    path: buildDir, // var buildDir = path.resolve(__dirname, './build');
    publicPath: '../../../../build/',
    filename: '[name]/entry.js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
    chunkFilename: '[id].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};