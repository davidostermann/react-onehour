const path = require('path');
const validate = require('webpack-validator');

const PATH = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
}

const config = {
  entry: path.join(PATH.app, 'index.js'),
  output: {
    path: PATH.build,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = validate(config);


