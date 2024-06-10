//统一管理项目用户相关接口
import request from '@/utils/request'
import type {loginForm, loginResponseData,userResponseData} from './type.ts'

enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}

//暴露接口
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL)