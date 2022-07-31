<template>
  <div class="pc-layout-header">
    <div class="pc-layout-header-left">
      <img
        class="element-plus-logo"
        src="@/assets/svg/element-plus-logo.svg"
        alt=""
      />
      <img class="vue-logo" src="@/assets/svg/vue-logo.svg" alt="" />
    </div>
    <div class="pc-layout-header-center"></div>
    <div class="pc-layout-header-right">
      <el-icon><UserFilled /></el-icon>
      <div>{{ userName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "pcLayoutHeader",
  setup() {
    const store = useStore();
    const userName = computed(() => store.getters.gettersUserName);
    return {
      userName,
    };
  },
});
</script>

<style scoped lang="less">
.pc-layout-header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 80px;
  background: #ffffff;
  z-index: 100;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  > div {
    height: 100%;
  }
  &-left {
    display: flex;
    align-items: center;
    > img {
      margin-right: 20px;
    }
    .element-plus-logo {
      width: 160px;
      height: 60px;
    }
    .vue-logo {
      width: 45px;
      height: 45px;
    }
  }
  &-center {
    flex: 1;
  }
  &-right {
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 10px;
    }
  }
}
</style>
