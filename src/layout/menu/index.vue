<template>
  <div>
    <!-- 使用 v-for 循环渲染菜单项 -->
    <template v-for="(item) in menuList" :key="item.path">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item :index="item.path" v-if="item?.meta?.hidden !== true" @click="goRoute(item.path)">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- 有子路由但是只有一个子路由 -->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item :index="item.children[0].path" v-if="item.children[0]?.meta?.hidden !== true" @click="goRoute(item.children[0].path)">
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- 有子路由且个数大于一个 -->
      <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>


<script setup lang='ts'>
// 获取父组件传递过来的全部路由数组
import {useRouter} from "vue-router";

defineProps(['menuList'])
// 获取路由器对象
let $router = useRouter();
// 点击菜单的回调
const goRoute = (vc: any) => {
  // console.log(vc.index);
  // console.log($router);
  $router.push(vc.index)


}
</script>
<script lang="ts">
export default {
  name: "Menu"
}

</script>
<style lang='scss' scoped></style>