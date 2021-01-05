const express = require('express')
const md5 = require('md5')
const User = require('../db/model/user')
const { verify } = require('../utils/jwt')
const router = express.Router()

// 登录
router.post('/login', async (req, res) => {
  const { password, phone } = req.body
  // 去数据库里面验证手机号和密码
  const user = await User.findOne({ password: md5(password), phone })
  // 验证不通过返回状态码201，返回手机号或密码不正确
  if (!user) {
    return res.json({
      status: 201,
      message: '手机号或密码不正确'
    })
  }
  // 验证通过返回成功状态码200，返回token
  // 校验token是否过期,如果没有过期返回成功
  try {
    // await verify(md5(password))
    return res.json({
      status: 200,
      data: {
        token: user.token
      }
    })
  } catch (error) {
    // 过期了
    return res.json({
      status: 201,
      message: 'token已过期，请重新激活'
    })
  }

})
module.exports = router