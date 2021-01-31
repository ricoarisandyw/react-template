const path = require('path')
const { merge } = require('webpack-merge')
const common = require('../webpack.config.js')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const glob = require('glob-all')

const PATHS = {
  src: path.join(__dirname, '../src'),
  html: path.join(__dirname, '../src/index.html')
}

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify("development"),
    }),
    new WebpackManifestPlugin({
      fileName:"asset-manifest.json"
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new CssMinimizerPlugin(), 
      new PurgecssPlugin({
        paths: [PATHS.html, ...glob.sync(`${PATHS.src}/**/*`, { nodir: true })]
      }),
    ],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})