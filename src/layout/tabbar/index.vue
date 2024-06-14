<template>
  <div class="tabber">
    <div class="tabber_left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabber_right">
      <Setting></Setting>
    </div>
  </div>
</template>


<script setup lang='ts'>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>


<script lang="ts">
export default {
  name: "Tabbar"
}
</script>


<style lang='scss' scoped>
.tabber {
  width: 100%;
  height: 100%;
  background: red;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, rgb(232, 223, 223), rgb(201, 178, 178), rgb(197, 165, 165));
  .tabber_left {
    display: flex;
    align-items: center;
    // background: cyan;
    margin-left: 20px;
  }
  .tabber_right {
    display: flex;
    align-items: center;
  }
}
</style>