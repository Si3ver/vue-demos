const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var target = "window";

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "entry.js"),
  output: {
    clean: true,
    library: {
      name: "movie", // 模块名称
      type: target,
      umdNamedDefine: false,
    },
    // libraryTarget: target,
  },
  // experiments: {
  //   outputModule: true,
  // },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: target,
      filename: "index.html",
    }),
  ],
};
