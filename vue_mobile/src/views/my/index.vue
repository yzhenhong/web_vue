<template>
  <div class="mobile_my">
    <div class="list">我的</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mobile_my",
});
</script>

<style lang="less" scoped>
.mobile_my {
  font-size: 0.12rem;
  height: 200px; /*no*/
  .list {
    width: 176px;
    height: 1.76rem;
  }
}
</style>
