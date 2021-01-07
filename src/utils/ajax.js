import axios from 'axios'
import NProgress from 'nprogress'
// import { Message } from 'element-ui';
// import store from '../store'


// const url = process.env.NODE_ENT === 'development' ?  '/' :'http://182.92.128.115/'

const instance = axios.create({
    baseURL: '/api'
})


// 请求拦截器
instance.interceptors.request.use(

    (config) => {

        NProgress.start()
        
        // 修改config,用来添加公共的参数
        // const token = store.state.user.token
        // if (token) {
        //     config.headers.token = token
        // }

        // config.headers.userTempId = userTempId

        return config
    }
)


// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        NProgress.done()
        // console.log(response);
        if (response.status === 200) {
            return response.data
        }
        // Message.error(response.data.message)
        return Promise.reject(response.data.message)
    },

    (error) => {
        // Message.error(error)
        return Promise.reject(error)
    }
)

export default instance