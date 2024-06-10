<script setup lang="ts">

import {onMounted} from "vue";
import {reqLogin} from "@/api/user";

onMounted(() => {
  reqLogin({username: 'admin', password: '11112211'})
})

</script>

<template>

  <router-view></router-view>
</template>

<style scoped>

</style>
