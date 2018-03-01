const path = require("path");
const webpack = require("webpack");

const config = {
  context: __dirname,
  entry: ["babel-polyfill", "./client/index.jsx"],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/client/"
  },
  devServer: {
    publicPath: "/client/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  config.entry = "./client/index.jsx";
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
