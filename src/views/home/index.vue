<script setup lang="ts">
//引入组合式API函数 生命周期函数
import {onMounted} from "vue";
import useUserStore from "@/store/modules/user.ts";
let userStore = useUserStore();
onMounted(()=>{

})
</script>

<template>
<h1>Hello,{{userStore.username}}</h1>
</template>

<style scoped>

</style>