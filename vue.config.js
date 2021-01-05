const path = require("path")

module.exports = {
  //设置正向代理
  devServer:{
    proxy:{
      "/api":{
        target:"http://mock/heartsList:3000",
        changeOrigin:true,
      }
    }
  }
}