const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: ['./test/tools/index.js', './test/tools/index.html'],
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.html$/,
        include: /tools/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            useRelativePath: false
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          error: true,
          snazzy: true
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        include: /images/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            useRelativePath: true
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      context: 'src/sass/',
      files: '**/*.scss',
      failOnError: false,
      quiet: false
    })
  ]
}
