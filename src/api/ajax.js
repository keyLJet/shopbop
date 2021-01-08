import axios from 'axios'


const instance = axios.create({
  baseURL: 'http://localhost:3000',  // 基础path
  // baseURL: 'http://182.92.128.115/api',
  timeout: 15000 // 请求超时时间
})

// 注册请求拦截器
// axios.interceptors.request.use(config => { // 不正确


// 注册响应拦截器
instance.interceptors.response.use(
  response => { // 请求成功后的回调
    
    

    // return response
   
    return response.data
  },

  error => { // 请求失败后的回调
    
    // 显示一个统一的提示
    alert(error.message || '未知错误')

    // 要么抛出error 或者返回一个失败的promise
    // throw error
    return Promise.reject(error)

    // return error  // 不可以
  }
)



// 向外暴露的必须是这个instance, 不能是axios
export default instance