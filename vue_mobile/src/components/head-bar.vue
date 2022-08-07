<template>
  <section>
    <van-nav-bar
      class="head-bar"
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeadBar",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
  setup() {
    const onClickLeft = () => {
      history.back();
    };
    return {
      onClickLeft,
    };
  },
});
</script>

<style lang="less" scoped>
.head-bar {
  /deep/.van-icon.van-icon-arrow-left {
    color: @blue-color !important;
  }
}
</style>
