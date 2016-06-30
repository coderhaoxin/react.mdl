
'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.js'),
  },

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'example.js'
  },

  externals: {
    'react-dom': 'ReactDOM',
    react: 'React'
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: require.resolve('material-design-lite/material'),
      loader: 'exports?componentHandler'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
      // exclude: /node_modules/
    }]
  },

  postcss: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: ['last 1 versions']
    }),
    require('postcss-inline-svg'),
    require('postcss-svgo')
  ],

  devtool: 'source-map'
}
