const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-like',
      template: path.resolve(__dirname, './index.html')
    })
  ]
}