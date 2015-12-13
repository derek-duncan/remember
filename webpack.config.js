var path = require('path');

module.exports = {
  cache: false,
  entry: {
    bundle: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/js/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  }
};
