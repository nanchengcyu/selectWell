<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {reqHasTrademark} from "@/api/product/trademark";
import {Records, TradeMark, TradeMarkResponseData} from "@/api/product/trademark/type.ts";
import {ElMessage, UploadProps} from "element-plus";
import {Plus} from "@element-plus/icons-vue";

let pageNo = ref<number>(1);
//每页展示条数
let pageSize = ref<number>(10);
let background = ref(true);
//后端获取总数居
let total = ref<number>(0);
//存储已有品牌数据 => 后台数据返回为数组类型
let trademarkArr = ref<Records>([])
//对话框显示隐藏
let dialogFormVisible = ref<boolean>(false);
//收集新增品牌的数据
let trademarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: ''
})
//分页请求函数
const getHasTrademark = async (pager = 1) => {
  pageNo.value = pager;
  let result: TradeMarkResponseData = await reqHasTrademark(pageNo.value, pageSize.value);
  if (result.code == 200) {
    total.value = result.data.total;
    trademarkArr.value = result.data.records;
  }
}
//组件挂载完毕分页获取数据
onMounted(() => {
  getHasTrademark();
})
//页面改变
const changePageNo = () => {
  //页面改变在此发送请求
  getHasTrademark();
}
const sizeChange = () => {
  getHasTrademark();
}
const addTradeMark = () => {
  dialogFormVisible.value = true;
}
const updateTradeMark = () => {
  dialogFormVisible.value = true;

}
const cancel = () => {
  dialogFormVisible.value = false;
}
const confirm = () => {
  dialogFormVisible.value = false;
}
//上传图片组件->上传图片之前触发的钩子函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  //钩子是在图片上传成功之前触发,上传文件之前可以约束文件类型与大小
  //要求:上传文件格式png|jpg|gif 4M
  if (rawFile.type == 'image/png' || rawFile.type == 'image/jpeg' || rawFile.type == 'image/gif') {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true;
    } else {
      ElMessage({
        type: 'error',
        message: '上传文件大小小于4M'
      })
      return false;
    }
  } else {
    ElMessage({
      type: 'error',
      message: "上传文件格式务必PNG|JPG|GIF"
    })
    return false;
  }
}

//图片上传成功钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  //response:即为当前这次上传图片post请求服务器返回的数据
  //收集上传图片的地址,添加一个新的品牌的时候带给服务器
  trademarkParams.logoUrl = response.data;
  //图片上传成功,清除掉对应图片校验结果
}
</script>

<template>
  <el-card>
    <el-button type="primary" size="default" icon="plus" @click="addTradeMark">添加品牌</el-button>
    <el-table style="margin: 10px 0px" border :data="trademarkArr">
      <el-table-column prop="date" label="序号" width="80px" align="center" type="index"/>
      <el-table-column label="品牌名称" width="180" align="center">
        <!--        插槽适用于想要展示不是文字类型的-->
        <template #="{row}">
          <pre>{{ row.tmName }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="品牌LOGO" align="center">
        <template #="{row}">
          <img :src="row.logoUrl" style="width: 100px ;height: 100px">
        </template>
      </el-table-column>
      <el-table-column prop="address" label="品牌操作" align="center">
        <template #="{row,$index}">
          <el-button type="primary" size="small" icon="Edit" @click="updateTradeMark"></el-button>
          <el-button type="danger" size="small" icon="Delete"></el-button>
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
  </el-card>
  <el-dialog v-model="dialogFormVisible">
    <el-form>
      <el-form-item label="品牌名称" style="width: 80%" v-model="trademarkParams.tmName">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="品牌图片">
        <el-upload
            class="avatar-uploader"
            action="/api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" alt=""/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="cancel">取消</el-button>
    <el-button type="primary" @click="confirm">确定</el-button>
  </el-dialog>
</template>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>