const path = require('path')
module.exports = {
  entry: {
    main:'./src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../dist')
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'./src'),
      'assets':path.resolve(__dirname,'./src/assets'),
      'pages':path.resolve(__dirname,'./src/pages'),
      'router':path.resolve(__dirname,'./src/router'),
      'css':path.resolve(__dirname,'./src/css'),
      'components':path.resolve(__dirname,'./src/components'),
      'utils':path.resolve(__dirname,'./src/utils'),
      'config':path.resolve(__dirname,'./src/config')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
}
