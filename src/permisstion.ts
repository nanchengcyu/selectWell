//路由鉴权
import router from '@/router';
//进度条引入
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
//获取用户相关的小仓库
import pinia from "@/store";
import useUserStore from "@/store/modules/user.ts";

let userStore = useUserStore(pinia);

//全局前置守卫
router.beforeEach(async (to: any, form: any, next: any) => {
    document.title = '甄选-' + to.meta.title;
    nprogress.start();
    let token = userStore.token;
    let username = userStore.username;
    if (token) {
        if (to.path == '/login') {
            next({path: '/'})
        } else {
            if (username) {
                next();
            } else {
                try {
                    await userStore.userInfo();
                    next();
                } catch (error) {
                    //token过期 退出登录 且重定向到login
                    await userStore.userLogout();
                    next({path: '/login', query: {redirect: to.path}});
                }
            }
        }
    } else {
        if (to.path == '/login') {
            next();
        } else {
            next({path: '/login', query: {redirect: to.path}});
        }
    }

})
//全局后置守卫
router.afterEach((to, from) => {
    nprogress.done();
})

