 const webpack = require('webpack');
 const path = require('path');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
 let config = {
   entry: {
     main: [
      './_dev/js/script.js',
      './_dev/css/style.scss'
    ]
   },
   output: {
     path: path.resolve(__dirname, './'),
     filename: 'script.js',
   },
   module: {
     rules: [
       {
         test: /\.js/,
         loader: 'babel-loader',
       },
       {
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
             {
               loader: 'css-loader',
               options: {
                 minimize: true,
               },
             },
             'postcss-loader',
             'sass-loader',
           ],
         }),
       },
       {
         test: /.(png|woff(2)?|eot|otf|ttf|svg|gif)(\?[a-z0-9=\.]+)?$/,
         use: [
           {
             loader: 'file-loader',
             options: {
               name: '_dev/images/[hash].[ext]',
             },
           },
         ],
       },
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader', 'postcss-loader'],
       },
     ],
   },   
   plugins: [new ExtractTextPlugin(path.join('style.css'))],
 };
 
 if (process.env.NODE_ENV === 'production') {
   config.plugins.push(
     new webpack.optimize.UglifyJsPlugin({
       sourceMap: false,
       compress: {
         sequences: true,
         conditionals: true,
         booleans: true,
         if_return: true,
         join_vars: true,
         drop_console: true,
       },
       output: {
         comments: false,
       },
       minimize: true,
     })
   );
 }
 
 module.exports = config;