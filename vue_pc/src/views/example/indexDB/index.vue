<template>
  <div class="indexDB">
    <div>
      <el-button type="primary" @click="addDataBtn">addData</el-button>
    </div>
    <div>
      <el-button type="primary" @click="getDataBtn">getData</el-button>
    </div>
    <div>{{ dbData }}</div>
    <div>{{ dbObj.value.name }}</div>
    <div>
      <el-button type="primary" @click="updateDataBtn">updateData</el-button>
    </div>
    <div>
      <el-button type="danger" @click="deleteDataBtn">deleteData</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="example-indexDB">
import { ElMessage, ElMessageBox } from "element-plus";
import {
  createindexDB,
  addData,
  deleteData,
  getData,
  updateData,
} from "@/utils/indexDB";
import { reactive, ref } from "vue";

createindexDB();

const dbData = ref();

type dbObjType = {
  [key: string]: any;
};
let dbObj = reactive<dbObjType>({
  value: {},
});

const addDataBtn = () => {
  addData({ id: 1, pro_id: 123456, pro_name: "胡萝卜" }).then((res: any) => {
    console.log("res", res);
  });
};

const getDataBtn = () => {
  dbObj.value = {
    name: "yzh",
  };
  getData(1).then((res: any) => {
    // console.log("res", res);
    dbData.value = res;
  });
};

const updateDataBtn = () => {
  updateData({ id: 1, pro_id: 123456, pro_name: "白菜" }).then((res: any) => {
    console.log("res", res);
  });
};

const deleteDataBtn = () => {
  ElMessageBox.confirm("您确认需要删除该数据吗?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      deleteData(1).then((res: any) => {
        console.log("res", res);
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
      });
    });
};
</script>

<style lang="less" scoped>
.indexDB {
  > div {
    margin-bottom: 10px;
  }
}
</style>
