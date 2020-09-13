/**
 * File: /Users/Eduardo/Desktop/github/portfolio-vue/vue.config.js
 * Project: /Users/Eduardo/Desktop/github/portfolio-vue
 * Created Date: Sunday, August 9th 2020, 6:01:45 pm
 * Author: Eduardo Calvo
 * -----
 * Last Modified: Sun Aug 09 2020
 * Modified By: Eduardo Calvo
 * -----
 * Copyright (c) 2020 Edu Calvo
 * ------------------------------------
 * Javascript will save your soul!
 */

const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const options = {};
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6,
      }),
      new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 75,
            },
          },
        ],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true,
      }),
      new RobotstxtPlugin(options),
      purgecss({
        content: [`./public/**/*.html`, `./src/**/*.vue`],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          );
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          );
        },
        whitelist: [],
        whitelistPatterns: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
        ],
      }),
    ],
  },

  pwa: {
    name: 'Edu Calvo Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d',
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production',
  },
};
