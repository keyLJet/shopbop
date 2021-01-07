const express = require('express')
const svgCaptcha = require('svg-captcha');
const router = express.Router()

// 图片验证码
router.get('/api/user/capche', (req, res) => {
  const captcha = svgCaptcha.create();
  res.type('svg')
  return res.status(200).send(captcha.data);
})
module.exports = router