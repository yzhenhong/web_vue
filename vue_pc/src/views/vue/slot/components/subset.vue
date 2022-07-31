<template>
  <div class="slot-subset">
    <div>slot-subset</div>

    <!-- slot 可以放在任意位置。（这个位置就是父组件添加内容的显示位置） -->
    <div>
      <slot></slot>
    </div>

    <!-- slot的默认值,有时我没有在父组件内添加内容,那么 slot就会显示默认值 -->
    <div>
      <slot>这就是默认值</slot>
    </div>

    <!-- 具名插槽：子组件内的slot不止一个,那么我们如何在父组件中,精确的在想要的位置,插入对应的内容呢？ 给插槽命一个名即可,即添加name属性。 -->
    <div>
      <slot name="one"> 这就是默认值1</slot>
    </div>
    <div>
      <slot name="two"> 这就是默认值2 </slot>
    </div>

    <div>
      <!-- 绑定child1的数据 -->
      <slot name="three" :value1="child1"> 这就是默认值1</slot>
      <!-- 绑定child2的数据,这里我没有命名slot -->
      <slot :value2="child2"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "slot-subset",
  setup() {
    const child1 = ref("数据1");
    const child2 = ref("数据2");
    return {
      child1,
      child2,
    };
  },
});
</script>

<style lang="less" scoped></style>
