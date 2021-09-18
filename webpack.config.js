const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const filename = (ext) =>
  isDev ? `[name]${[ext]}` : `[name].[contenthash]${[ext]}`;

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
  context: path.resolve(__dirname, "src"),

  mode: "development",

  entry: "./js/index.js",

  output: {
    filename: `./js/${filename(".js")}`,
    path: path.resolve(__dirname, "app"),
    assetModuleFilename: `[path]${filename(`[ext]`)}`,
  },

  devtool: "inline-source-map",

  devServer: {
    contentBase: path.join(__dirname, 'app'),
    port: 3000
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "My App",
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/${filename(".css")}`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/"),
          to: path.resolve(__dirname, "app/assets/"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(?:|gif|png|ico|jpg|jpeg|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(?:|woff2|woff|ttf)$/,
        type: "asset/resource",
      },
    ],
  },
};