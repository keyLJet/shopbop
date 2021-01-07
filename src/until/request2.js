import axios from 'axios';
const instance = axios.create({
   baseURL:""
  });

 instance.interceptors.request.use(
     (config) =>{
        
        NProgress.start();
         return config;
     }
 ) ;
 instance.interceptors.response.use(
     (response) =>{
         NProgress.done();
         if(response.data.code === 200){
             return response.data.data;
         }

         const{ message } = response.data;
         MessageChannel.error(message);
         return Promise.reject(message);


     },
     (error)=>{
         NProgress.done();
         const message = error.message || "网络错误"
        Message.error(message);
        return Promise.reject(message);


     }
 );

 export default instance;