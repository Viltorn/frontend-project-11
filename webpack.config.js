// Generated using webpack-cli https://github.com/webpack/webpack-cli

/* const path = require('path'); */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* const WorkboxWebpackPlugin = require('workbox-webpack-plugin'); */

/* const isProduction = process.env.NODE_ENV == 'production'; */

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      /* {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

/* if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    return config;
}; */
