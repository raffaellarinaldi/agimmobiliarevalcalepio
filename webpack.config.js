const path = require('path');

module.exports = {
  entry: './src/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, 'src/static/assets/js'),
    filename: 'main.js'
  }
};
