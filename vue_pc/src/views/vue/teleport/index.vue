<template>
  <div class="teleport">
    <div>teleport</div>
    <subset />
  </div>
</template>

<script lang="ts">
import subset from "./components/subset.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "vue-teleport",
  components: {
    subset,
  },
});
</script>

<style lang="less" scoped></style>
