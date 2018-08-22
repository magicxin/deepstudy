const path = require('path');
module.exports = {
  devServer: {
    port: 8088
  },
  chainWebpack: (config)=>{
      config.resolve.alias
        .set('components',path.resolve('src/components'))
    }
}
