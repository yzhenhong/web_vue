<template>
  <div class="login">
    <div>login</div>
    <div>
      <div @click="goHome">go Home</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "common-login",
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/home");
    };
    return {
      goHome,
    };
  },
});
</script>

<style lang="less" scoped></style>
