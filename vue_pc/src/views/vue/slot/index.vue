<template>
  <div class="slot">
    <!-- 参考文献: https://zhuanlan.zhihu.com/p/114502325?from_voters_page=true -->
    <div>slot</div>
    <subset>
      <!-- 具名插槽: 父组件通过v-slot: name 的方式添加内容:  -->
      <template v-slot:one> 这是插入到one插槽的内容 </template>

      <!-- 具名插槽: vue 为了方便,书写 v-slot:one 的形式时,可以简写为 #one -->
      <template #two> 这是插入到two插槽的内容 </template>

      <!-- 通过v-slot的语法 将插槽 three 的值赋值给slotThreeValue  -->
      <template v-slot:three="slotThreeValue">
        <div>
          {{ slotThreeValue.value1 }}
        </div>
      </template>

      <!-- 同上，由于子组件没有给slot命名，默认值就为default -->
      <template v-slot:default="slotDefaultValue">
        <div>
          {{ parent }}
          {{ slotDefaultValue.value2 }}
        </div>
      </template>
    </subset>
  </div>
</template>

<script lang="ts">
import subset from "./components/subset.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "vue-slot",
  components: {
    subset,
  },
  setup() {
    const parent = ref("父组件");
    return { parent };
  },
});
</script>

<style lang="less" scoped></style>
