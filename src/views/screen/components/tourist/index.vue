<script setup lang="ts">
import {ref} from "vue";

let people = ref('215510人')
</script>

<template>
<div class="box">
  <div class="top">
    <p class="title">实时游客统计</p>
    <p class="bg"></p>
    <p class="right">可预约总量<span>99999</span>人</p>
  </div>
  <div class="number">
    <span v-for="(item,index) in people" :key="index">{{item}}</span>
  </div>
  <div class="chart">
    1111
  </div>
</div>
</template>

<style scoped lang="scss">
.box {
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;

  .top {
    margin-left: 20px;

    .title {
      color: white;
      font-size: 20px;

    }

    .bg {
      width: 68px;
      height: 7px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    }

    .right {
      float: right;
      color: white;
      font-size: 20px;

      span {
        color: yellowgreen;
      }
    }
  }

  .number {
    padding: 10px;
    margin-top: 120px;
    display: flex;


    span {
      flex: 1;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: url(../../images/total.png) no-repeat;
      background-size: 100% 100%;
      color: #29fcff;
    }
  }

  .charts {
    width: 100%;
    height: 270px;
  }
}
</style>