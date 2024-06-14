<script setup lang="ts">
import Logo from './logo/index.vue';
import useUserStore from "@/store/modules/user.ts";
import Menu from './menu/index.vue';
// 使用 useUserStore 钩子，并确保返回需要的状态
const userStore = useUserStore();
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
</script>

<template>
  <div class="layout_container">
    <!--左侧菜单-->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单栏-->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <!-- 根据路由生产菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabular">
      <Tabbar>

      </Tabbar>
    </div>

    <!--内容展示区-->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabular {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}

</style>