import request from '../utils/request'

//注册
export const reqRegister = (phone, password) => {
  return request({
    method: 'POST',
    url: '/register',
    data: {
      phone,
      password,
    }
  })
}
//登录
export const reqLogin = (phone, password) => {
  return request({
    method: 'POST',
    url: '/login',
    data: {
      phone,
      password,
    }
  })
}