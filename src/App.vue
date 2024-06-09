<script setup lang="ts">
//引入图标组件
import { Plus } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<template>
  <h1>H1</h1>
  <el-button type="primary" size="default" :icon="Plus">主要</el-button>
  <hr />
  <svg>
    <use xlink:href="#icon-phone"></use>
  </svg>
  <svg-icon name="home" color="pink" width="00px"></svg-icon>
</template>

<style scoped></style>
