<script setup lang="ts">
import {ref, watch} from "vue";
import useCategoryStore from "@/store/modules/category.ts";
import {reqHasSpu} from "@/api/product/spu";
import {HasSpuResponseData, Records} from "@/api/product/spu/type.ts";
import Category from '@/components/Category/index.vue';
//场景的数据
let scene = ref<number>(0); //0:显示已有SPU  1:添加或者修改已有SPU 2:添加SKU的结构
//引入分类仓库
let categoryStore = useCategoryStore();
let pageNo = ref<number>(1);
//每页展示条数
let pageSize = ref<number>(10);
let background = ref(true);
//后端获取总数居
let total = ref<number>(0);
let records = ref<Records>([]);
//页面改变
const changePageNo = () => {

}
const sizeChange = () => {

}
watch(() => categoryStore.c3Id, () => {
  if (!categoryStore.c3Id) return;
  getHasSpu()
})
//获取某一个三级分类下全部已有的SPU
const getHasSpu = async () => {
  let result: HasSpuResponseData = await reqHasSpu(pageNo.value, pageSize.value, categoryStore.c3Id);
  if (result.code == 200) {
    records.value = result.data.records;
  }
}


</script>

<template>
  <div>
    <Category :scene="scene"></Category>
    <br>
    <el-button type="primary" size="default" icon="plus" @click="">添加SPU</el-button>
    <el-table style="width: 100%" :data="records">
      <el-table-column prop="id" label="序号" width="120"/>
      <el-table-column prop="spuName" label="SPU名称" width="120"/>
      <el-table-column prop="description" label="SPU描述" width="600"/>
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>

        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="sizeChange"
        @current-change="changePageNo"
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :background="background"
        layout="prev, pager, next, jumper,->,total, sizes "
        :total="total"
    />
  </div>
</template>

<style scoped>

</style>