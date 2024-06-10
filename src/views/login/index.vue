<script setup lang="ts">

import {Lock, User} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import useUserStore from '@/store/modules/user.ts'
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";

let useStore = useUserStore();
let loginForm = reactive({username: 'admin', password: '111111'})
//获取路由器
let $router = useRouter();
//定义登录按钮起始不能加载
let loading = ref(false);
//登录回调
const login = async () => {
  try {
    loading.value = true
    //登录成功
    await useStore.userLogin(loginForm);
    //登录成功跳转首页
    $router.push('/')
    //登录成功到首页展示提示信息
    ElNotification({
      type: 'success',
      message: '登录成功'
    });
    //登录成功加载效果也消失
    loading.value = false
  } catch (error) {
    //登录失败加载效果消失
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })


  }


}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1 class="h1">Hello</h1>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>


          <el-form-item>
            <el-button :loading="loading" type="primary" class="login_btu" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    .h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 20px;
    }

    .login_btu {
      width: 100%;
    }
  }
}
</style>