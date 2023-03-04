const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "russian-version.html",
      template: path.resolve(__dirname, 'src', 'russian-version.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "aluminium-systems.html",
      template: path.resolve(__dirname, 'src/pages/', 'aluminium-systems.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "aluminium-systems-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'aluminium-systems-RU.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-10.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-10.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-10-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-10-RU.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-38.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-38.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-38-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-38-RU.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-46.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-46.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-46-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-46-RU.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-46-m.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-46-m.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-46-m-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-46-m-RU.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-FT-69.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-FT-69.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-FT-69-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-FT-69-RU.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-FT-72.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-FT-72.html'),
    }),
    new HtmlWebpackPlugin({
      filename: "framex-FT-72-RU.html",
      template: path.resolve(__dirname, 'src/pages/', 'framex-FT-72-RU.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              },
            }
          }
        ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
