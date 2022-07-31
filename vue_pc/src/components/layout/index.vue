<template>
  <div class="pc-layout-wrap">
    <layout-header />
    <layout-sidebar />
    <app-main />
  </div>
</template>

<script lang="ts" setup name="pcLayoutWrap">
import { layoutHeader, layoutSidebar, appMain } from "./components/index";
</script>

<style lang="less" scoped>
.pc-layout-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
