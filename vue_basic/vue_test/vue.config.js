const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  //关闭语法检查
  // 修改启动使用的main.js
  pages:{
    index:{
      entry:'src/main.js'
    }
  },
  //开启代理服务器,方式一
  /*devServer:{
    proxy:'http://localhost:5000'
  }*/
  //开启代理服务器，方式二
  devServer:{
    proxy:{
      '/testProxy':{
        target:'http://localhost:5000',
        pathRewrite:{'^/testProxy':''}, //重写路径
        // ws:true, //用于支持websocket
        // changeOrigin:true
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''}, //重写路径
        // ws:true, //用于支持websocket
        // changeOrigin:true //用于控制请求头中的host 欺骗服务器
      }
    }
  }
})
