const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Use both style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav)$/i, // Images and videos
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      // You can add other rules for handling other assets (e.g., fonts, etc.)
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both JS and JSX file extensions
  },
};
