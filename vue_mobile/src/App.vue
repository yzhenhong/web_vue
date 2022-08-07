<template>
  <router-view class="app_router_view" />
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";
import { useStore } from "vuex";
const { proxy }: any = getCurrentInstance();
const ajax = proxy.$ajax;
const store = useStore();
ajax.get("/userInfo").then((res: unknown) => {
  store.dispatch("user/setUserInfo", res);
});
</script>

<style lang="less">
@import "./assets/css/reset.css";
@import "./assets/css/common.less";
#nprogress .bar {
  background: @blue-color!important; //自定义颜色
}
</style>
