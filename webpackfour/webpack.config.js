const path = require('path')

module.exports = {
  entry: {
    a: './index.js',
    b: './main.js'
  }, //默认值.src
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[chunkhash].js'
  },
  // loader , 让webpack理解非javascript的文件，webpack本身只认识javascript,类似于gulp中的task
  module: {
    rules:[
      {
        test: '/\.txt$/', // 识别哪些类型的文件
        use: 'raw-loader' // 使用哪一个loader
      }
    ]
  }
}
