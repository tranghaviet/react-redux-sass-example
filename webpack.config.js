const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // entry: ["./src/index.js", "./src/styles/index.scss"],
  entry: ["./src/index.js", "./src/styles/index.css"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.s?css/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public/",
    historyApiFallback: true,
    watchContentBase: true
  },
  // alias: {
  //   'services': path.resolve('src/services')
  // },
  resolve: {
    extensions: ['.js', '.jsx'],
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
