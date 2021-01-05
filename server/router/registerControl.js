const express = require('express')
const md5 = require('md5')
const User = require('../db/model/user')
const { sign } = require('../utils/jwt')
const router = express.Router()

// 注册
router.post('/register', async (req, res) => {
  const { phone, password } = req.body
  try {
    const token = await sign(md5(password))
    await User.create({ password: md5(password), phone, token })
    return res.json({
      status: 200,
      message: '注册成功'
    })
  } catch (error) {
    return res.json({
      status: 201,
      message: error
    })
  }

})
module.exports = router