const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
   mode: 'development',
   entry: './public/main.js',
   output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'build.js'
   },
   module: {
      rules: [
         {
            test: /\.vue$/,
            loader: 'vue-loader'
         },
         {
            test: /\.js$/,
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            use: [
               'vue-style-loader',
               'css-loader'
            ]
         }
      ]
   },
   plugins: [
      new VueLoaderPlugin()
   ]
}