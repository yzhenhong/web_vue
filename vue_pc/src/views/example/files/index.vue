<template>
  <div class="files">
    <div>files</div>
    <div>
      <!-- <img src="http://localhost:90/app/1.png" alt="" /> -->
      <video src=""></video>
      <audio src=""></audio>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";
defineOptions({
  name: "example-files",
});
const { proxy }: any = getCurrentInstance();
const ajax = proxy.$ajax;
ajax.get("/files/xx").then((res: unknown) => {
  console.log(res);
});
</script>

<style lang="less" scoped></style>
