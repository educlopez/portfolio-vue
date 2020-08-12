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
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Edu Calvo Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
