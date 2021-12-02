const HtmlWebpackPlugin = require('html-webpack-plugin');
const json5 = require('json5');
const { BannerPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function configFactory(_, { mode = 'development' }) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new BannerPlugin({
      banner: 'Copyright STMicroelectronics',
    }),
  ];

  if (mode === 'production') {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'app.[contenthash].css',
      }),
    );
  }

  /** @type {import('webpack').Configuration} */
  const config = {
    entry: {
      app: './src/app/index.ts'
    },
    devtool: 'source-map',
    output: {
      filename: '[name].[contenthash].js',
    },
    plugins: plugins,
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.json5$/,
          type: 'json',
          parser: {
            parse: json5.parse,
          },
        },
        {
          test: /\.scss$/,
          use: [
            // si mode developement on créé un balise style
            // sinon un balise link
            mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.ts$/,
          use: [
            'ts-loader',
            // {
            //   loader: 'ts-loader',
            //   options: {},
            // },
          ],
        },
      ],
    },
  };

  return config;
}

module.exports = configFactory;
