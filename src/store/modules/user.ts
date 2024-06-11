//创建用户相关的小仓库
import {defineStore} from 'pinia';
//引入接口
import {reqLogin} from "@/api/user";
//引入数据类型
import type {loginForm} from "@/api/user/type.ts";
import {UserState} from "@/store/modules/types/type.ts";
//引入本地仓库存储的token方法
import {GET_TOKEN, SET_TOKEN} from '@/utils/token.ts';

let useUserStore = defineStore(
    'user', {
        //小仓库存储数据地方
        state: (): UserState => {
            return {
                token: GET_TOKEN(),
            }
        },
        //异步
        actions: {
            //用户登录的方法
            async userLogin(data: loginForm) {
                let result = await reqLogin(data);
                //登录成功 失败
                if (result.code == 200) {
                    this.token = (result.data.token as string);
                    //本地持久化存储
                    SET_TOKEN((result.data.token as string))
                    //保证当前async函数返回一个成功的promise
                    return "ok";
                } else {
                    return Promise.reject(new Error(result.data.message))
                }
            }
        },
        getters: {}
    }
)

export default useUserStore;