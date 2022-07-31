<template>
  <div class="suspense-subset">
    <div>suspense-subset</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const sleep = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
export default defineComponent({
  name: "suspense-subset",
  async setup() {
    // ... some code 将初始化页面需要的数据放在此处
    await sleep(1500); // 模拟数据请求
  },
});
</script>

<style lang="less" scoped></style>
