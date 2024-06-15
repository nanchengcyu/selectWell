import {createApp} from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置国际化中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入模板的全局样式
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
//引入自动逸插件对象：注册整个项目全局组件
import globalComponent from '@/components';
import router from "@/router";
import pinia from "@/store";
//引入路由鉴权
import './permisstion.ts'
const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
});

app.use(globalComponent);
app.use(router);
app.use(pinia);

app.mount('#app')
