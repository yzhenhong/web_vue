<template>
  <div class="mobile-layout-wrap">
    <app-main />
    <tabbar />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from "vue";
import { ref } from "vue";
import { tabbar, appMain } from "./components/index";
export default defineComponent({
  name: "mobileLayoutWrap",
  components: {
    tabbar,
    appMain,
  },
  setup() {
    onBeforeUnmount(() => {
      window.removeEventListener(resizeEvt.value, resizeFontsize);
      document.removeEventListener("DOMContentLoaded", resizeFontsize);
      document.documentElement.style.fontSize = "12px";
    });
    let resizeEvt = ref<string>("");
    const resizeFontsize = () => {
      const docEl = document.documentElement;
      resizeEvt.value =
        "orientationchange" in window ? "orientationchange" : "resize";
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = clientWidth / 3.75 + "px";
      // console.log("resizeEvt.value", resizeEvt.value);
      // console.log("clientWidth", clientWidth);
      // console.log("docEl.style.fontSize", docEl.style.fontSize);
    };
    const init = () => {
      resizeFontsize();
      if (!document.addEventListener) return;
      window.addEventListener(resizeEvt.value, resizeFontsize, false);
      document.addEventListener("DOMContentLoaded", resizeFontsize, false);
    };
    init();
  },
});
</script>

<style lang="less" scoped>
.mobile-layout-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
