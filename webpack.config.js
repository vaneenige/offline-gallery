const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/build/`,
    publicPath: __dirname,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: `${__dirname}/node_modules/`,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
    }),
  ] : [],

  stats: {
    colors: true,
  },
};
