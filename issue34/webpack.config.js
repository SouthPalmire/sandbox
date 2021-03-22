const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
   entry: path.join(__dirname, 'public', 'app.js'),
   output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'app.js'
   },
   module: {
      rules: [
         {
            test: /\.vue$/,
            loader: 'vue-loader'
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