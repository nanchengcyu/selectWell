//对axios进行二次封装，在其基础上添加请求拦截器和响应拦截器，并添加错误统一处理和loading效果。
import axios from 'axios';
import {ElMessage} from "element-plus";

let request = axios.create({
    //基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000 //超时时间
});
//请求拦截器
request.interceptors.request.use((config) => {
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    //定义便利：存储网络错误信息
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            message = '未授权，请登录';
            break;
        case 403:
            message = '拒绝访问';
            break;
        case 404:
            message = `请求地址出错: ${error.response.config.url}`;
            break;
        case 500:
            message = '服务器内部错误';
            break;
        default:
            message = '网络错误';
            break;
    }
    //提示错误信息
    ElMessage({
        type:'error',
        message
    });
    return Promise.reject(error);
});
//对外暴露
export default request;