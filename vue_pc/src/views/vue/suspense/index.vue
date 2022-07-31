<template>
  <div class="suspense">
    <div @click="suspense">suspense</div>
    <Suspense>
      <template #default>
        <async-suspense-subset />
      </template>
      <template #fallback>
        <div>组件加载中...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "vue-suspense",
  components: {
    AsyncSuspenseSubset: defineAsyncComponent(
      () => import("./components/subset.vue")
    ),
  },
  setup() {
    const loadAsync = ref(false);
    const suspense = () => {
      loadAsync.value = true;
    };
    return {
      suspense,
      loadAsync,
    };
  },
});
</script>

<style lang="less" scoped></style>
