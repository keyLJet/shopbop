// 注册模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  // 密码
  password: {
    type: String,
    required: true
  },
  // token
  token: {
    type: String,
    unique: true
  },
  // 手机号
  phone: {
    type: Number,
    required: true,
    unique: true
  }
})
module.exports = mongoose.model('User', UserSchema)