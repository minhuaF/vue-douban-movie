module.exports = {
  entry: './src/main.js',
  output: {
    path: '/dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test : /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve : {
    alias: {
      'vue' : 'vue/dist/vue.js'
    }
  }
}