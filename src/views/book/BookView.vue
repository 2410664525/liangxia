<template>
  <div>
    <el-table :data="bookTable" style="width: 100%" border="true" height="550">
      <el-table-column prop="bookid" label="bookid" />
      <el-table-column prop="bookauthor" label="Bookauthor" width="180" />
      <el-table-column prop="bookphoto" label="bookphoto" width="180" />
      <el-table-column prop="bookcategory" label="bookcategory" />
      <el-table-column prop="booktitle" label="booktitle" width="180" />
      <el-table-column prop="bookcost" label="bookcost" />
      <!-- <el-table-column prop="bookdesc" label="bookdesc" /> -->
      <el-table-column prop="bookinfo" label="bookinfo" width="180" />
      <el-table-column prop="bookisbn" label="bookisbn" width="180" />
      <el-table-column prop="bookprice" label="bookprice" />
      <el-table-column prop="bookpublish" label="bookpublish" width="180" />
      <el-table-column prop="bookpublishdate" label="bookpublishdate" />
      <el-table-column prop="bookstate" label="bookstate" />
      <el-table-column fixed="right" width="180">
        <template #default="props">
          <el-button type="primary" plain @click="caozuo(props.row.bookid)">操作</el-button>
          <el-button type="primary" plain>刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex;justify-content: center;align-items: center; margin-top: 20px;">
      <el-pagination class="page" background layout="prev, pager, next" :total="changePage.total"
        @current-change="handelCurrentChange" v-model:current-page="changePage.currentPage" />
    </div>
  </div>
</template>

<script  setup>

import { getCurrentInstance, onBeforeMount, ref, reactive } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

let { proxy } = getCurrentInstance();

let bookTable = ref([])
//分页功能实习
const changePage = reactive({
  currentPage: 1,
  total: 100,
  pageIndex: 0,
  sizeIndex:0
});





//操作
function caozuo(value) {
  router.push({path:"/edit",query:{bookid:value}})
  // console.log(value);
}



//获取当前页数
function handelCurrentChange(value) {
  //获取当前页码
  changePage.currentPage = value;

  changePage.pageIndex = value
  console.log(changePage.pageIndex);
  console.log(value);
  qingqiu()
  //判断当前页是否为首页 页码从1开始，是则直接调用后端数据，否则要进行计算
};





function qingqiu() {
  proxy.$http
    .post("/book/list?index=" + changePage.pageIndex + "&size=7")
    .then(function (res) {
      if (res.data) {
        bookTable.value = res.data.list
      }
      console.log(res.data)
    })
    .catch(function () {
      console.log(111);
    });
}

onBeforeMount(() => {
  //调用方法
  qingqiu()
});

</script>