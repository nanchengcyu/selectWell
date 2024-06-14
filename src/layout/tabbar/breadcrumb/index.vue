<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px;" @click="changeIcon">
    <!-- <Expand /> -->
    <component :is="LayoutSettingStore.fold?'Fold': 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script setup lang='ts'>
import  useLayoutSettingStore  from "@/store/modules/ setting.ts"

// 获取layout配置相关的仓库
let LayoutSettingStore = useLayoutSettingStore();

// 点击图标的方法
const changeIcon = () => {
  // 图标进行切换
  LayoutSettingStore.fold = !LayoutSettingStore.fold
}
</script>

<script lang="ts">
export default {
  name: "Breadcrumb"
}
</script>

<style lang='scss' scoped></style>