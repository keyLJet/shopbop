import axios from 'axios';

const instance = axios.create({
    baseURL:""
});
instance.interceptors.request.use(
    (config)=>{





        
        return config;


    },
)