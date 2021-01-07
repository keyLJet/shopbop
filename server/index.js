const express = require('express')
const cors = require('cors')
const { SERVERCONFIG } = require('./config')
const checkPermissionMiddware = require('./middware/checkPermission')
const loginRouter = require('./router/loginControl')
const registerRouter = require('./router/registerControl')
const capcheRouter = require('./router/capche')
const app = express()

require('./db') // 链接数据库
app.use(cors()) // 解决跨域
app.use(express.json()) // 解析请求体数据
app.use(express.urlencoded({ extended: true })) // 解析请求体数据

app.use(registerRouter) // 注册路由
app.use(capcheRouter)
// app.use(checkPermissionMiddware) // 检查token是否合法的中间件
app.use(loginRouter) // 登录路由

app.listen(SERVERCONFIG.port, SERVERCONFIG.host, err => {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})