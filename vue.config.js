const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'https://autumnfish.cn',
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})

