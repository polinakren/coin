const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash:8].bundle.js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '~assets': path.resolve(process.cwd(), 'src/assets'),
      '~components': path.resolve(process.cwd(), 'src/components'),
      'coin-api-client': path.resolve(process.cwd(), 'src/coin-api-client'),
      '~services': path.resolve(process.cwd(), 'src/services'),
      '~constants': path.resolve(process.cwd(), 'src/constants'),
      '~modules': path.resolve(process.cwd(), 'src/modules'),
      '~utils': path.resolve(process.cwd(), 'src/utils'),
      '~locales': path.resolve(process.cwd(), 'locales'),
      '~types': path.resolve(process.cwd(), 'types'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-Loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
  ],
};
