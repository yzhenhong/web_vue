<template>
  <div class="home">
    <div>home</div>
    <div>{{ name }}</div>
    <div>{{ userInfo.name }}</div>
    <div>{{ gettersUserName }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  useModuleState,
  useModuleGetters,
  useGetters,
} from "@/hooks/store/index";
export default defineComponent({
  name: "home-index",
  setup() {
    const state = useModuleState("user", ["name", "age", "userInfo"]);
    const getters = useModuleGetters("user", ["gettersName"]);
    const gettersCommon = useGetters(["gettersUserName"]);
    return {
      ...state,
      ...getters,
      ...gettersCommon,
    };
  },
});
</script>

<style lang="less" scoped></style>
