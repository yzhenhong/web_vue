<template>
  <section class="mobile-app-main">
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
  name: "mobileAppMain",
});
</script>

<style lang="less" scoped>
.mobile-app-main {
  position: fixed;
  top: 0px;
  bottom: 0.45rem;
  left: 0px;
  right: 0px;
  width: 100%;
}
</style>
