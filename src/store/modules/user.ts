//创建用户相关的小仓库
import {defineStore} from 'pinia'
//引入接口
import {reqLogin, reqUserInfo, reqLogout} from '@/api/user'
import type {UserState} from './types/type'
//引入操作本地存储的工具方法
import {SET_TOKEN, GET_TOKEN, REMOVE_TOKEN} from '@/utils/token'
//引入路由（常量路由）
import {constantRoute} from '@/router/routes'
import {loginFormData, loginResponseData, userInfoResponseData} from "@/api/user/type.ts";

//创建用户小仓库
const useUserStore = defineStore('User', {
    //小仓库存储数据地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(), //用户唯一标识token
            menuRoutes: constantRoute, //仓库存储生成菜单需要数组（路由）
            username: '',
            avatar: '',
        }
    },
    //处理异步|逻辑地方
    actions: {
        //用户登录的方法
        async userLogin(data: loginFormData) {
            //登录请求
            let result: loginResponseData = await reqLogin(data)

            if (result.code == 200) {
                //pinia仓库存储token
                //由于pinia|vuex存储数据其实利用js对象
                this.token = (result.data as string);
                //本地存储持久化存储一份
                SET_TOKEN(result.data as string)
                //保证当前async函数返回一个成功的promise函数
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data))
            }
        },
        //获取用户信息方法
        async userInfo() {
            //获取用户信息进行存储
            const result: userInfoResponseData = await reqUserInfo()
            console.log(result)

            if (result.code == 200) {
                this.username = result.data.name
                this.avatar = result.data.avatar
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //退出登录
        async userLogout() {
            const result: any = await reqLogout()
            if (result.code == 200) {
                //本地数据清空
                this.token = '';
                this.username = '';
                this.avatar = '';
                REMOVE_TOKEN();
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
    },
    getters: {},
})
//对外暴露小仓库
export default useUserStore
