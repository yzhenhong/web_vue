<template>
  <section class="pc-app-main">
    <!-- 这里是不被缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- 这里是会被缓存的视图组件 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "pcAppMain",
});
</script>

<style lang="less" scoped>
.pc-app-main {
  position: fixed;
  top: 80px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  padding: 30px;
}
</style>
