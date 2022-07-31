<template>
  <teleport to=".pc-app-main">
    <div class="teleport-wrap">
      <div class="teleport-content">
        <div>I'm a teleported modal!</div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "teleport-subset",
});
</script>

<style lang="less" scoped>
.teleport-wrap {
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow: auto;
  background-color: rgba(144, 147, 153, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .teleport-content {
    color: #000;
    position: relative;
    margin: 0 auto;
  }
}
</style>
