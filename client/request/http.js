import axios from 'axios';
import baseURL from './env.config';

const http = axios.create({
    timeout: 5000,
    baseURL
})

// 请求拦截器
http.interceptors.request.use(
    config => {
        const token = 'ojfowjeiojfe'
        config.headers.authorization = token;
        return config;
    },
    error => {
        Promise.reject(error)
    }

)

// 响应拦截器
http.interceptors.response.use(
    res => {
        return res;
    }, 
    error => {
        return Promise.reject(error);
    }
)


export default http;