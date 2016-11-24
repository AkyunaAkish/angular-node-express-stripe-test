require('dotenv').config();

const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const ENV = process.env.NODE_ENV;
const DEV = ENV === 'development';

const config = {
  entry: [
    './client/app.js'
  ],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  },
  devtool: DEV ? 'source-map' : null,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.TEST_PUBLISHABLE_KEY': JSON.stringify(process.env.TEST_PUBLISHABLE_KEY)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules | bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.s?css/,
        loaders: ['style', 'css', 'sass'],
        exclude: /(node_modules | bower_components)/,
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
};

if(!DEV) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ClosureCompilerPlugin({
      compilation_level: 'ADVANCED',
      create_source_map: false
    })
  );
} else {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  );
};

module.exports = config;
