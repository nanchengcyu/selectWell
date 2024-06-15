<template>

  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" style="width: 24px;height: 24px;margin: 0 10px;border-radius: 50%" alt="">
  <!-- 下拉菜单 -->
  <el-dropdown>
                <span class="el-dropdown-link">
                   {{ userStore.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down/>
                    </el-icon>
                </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>


<script setup lang='ts'>
import useLayoutSettingStore from '@/store/modules/setting.ts';
import useUserStore from "@/store/modules/user.ts";
import {useRoute, useRouter} from 'vue-router';

let $router = useRouter();
let userStore = useUserStore();
let $route = useRoute();
//全屏切换
const fullScreen = () => {
  let full = document.fullscreenElement;
  if (!full) {
    document.fullscreenElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
//退出登录
const logout = async () => {
  await userStore.userLogout();
  $router.push({path:'/login',query:{redirect:$route.path}})

}

let layoutSettingStore = useLayoutSettingStore();
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh;
}

</script>


<script lang='ts'>

export default {
  name: "Setting"
}
</script>

<style lang='scss' scoped>

</style>