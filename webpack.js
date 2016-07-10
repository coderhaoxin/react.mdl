
'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'lib/index.js'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },

  externals: [{
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }, {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: require.resolve('material-design-lite/material'),
      loader: 'exports?componentHandler'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      // exclude: /node_modules/
    }]
  },

  postcss: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: ['last 1 versions']
    }),
    require('postcss-inline-svg')({
      path: 'asset'
    }),
    require('postcss-svgo')
  ],

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devtool: 'source-map'
}
