const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: './app/index.js',
  html: './app/index.html',
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  devtool: 'eval',
  entry: {
    javascript: PATHS.app
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)/,
        loaders: ["react-hot", "babel-loader"],
        include: path.join(__dirname, 'app'),
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)/,
        loader: 'url?limit=100000',
      }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      Navigation: 'app/components/Navigation.js',
      Welcome: 'app/components/Welcome.js',
      About: 'app/components/About.js',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './bower_components/bootstrap-sass/assets/stylesheets')
    ]
  }
};
