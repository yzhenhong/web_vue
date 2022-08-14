<template>
  <div class="files">
    <div>files</div>
    <div>
      <img src="http://localhost:3000/imgs/1.png" alt="" />
      <video src="http://localhost:3000/videos/1.mp4"></video>
      <!-- <audio src=""></audio> -->
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
ajax.get("/files").then((res: unknown) => {
  console.log(res);
});
</script>

<style lang="less" scoped>
.files {
  img,
  video,
  audio {
    width: 400px;
    height: 200px;
  }
}
</style>
