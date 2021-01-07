const { verify } = require('../utils/jwt')
module.exports = async (req, res, next) => {
  // 检查请求头中是否携带了token字段，如果没有token字段，返回失败
  const { token } = req.headers
  if (!token) {
    return res.json({
      status: 403,
      message: '你没有权限'
    })
  }
  // 校验token是否过期
  try {
    await verify(token)
    next()
  } catch (error) {
    return res.json({
      status: 403,
      message: 'token已过期'
    })
  }
}