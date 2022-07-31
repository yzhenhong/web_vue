<template>
  <div class="pc-layout-sidebar">
    <el-menu
      class="sidebar-el-menu"
      @select="handleSelect"
      :default-active="activeVal"
      background-color="#2D3441"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item1, index1) in sidebarRoute" :key="index1">
        <!-- 首页 -->
        <template
          v-if="
            item1.name === 'home' &&
            Array.isArray(item1.children) &&
            item1.children.length > 0
          "
        >
          <el-menu-item :index="item1.children[0].path">
            <el-icon><HomeFilled /></el-icon>
            <span>{{ item1.name }}</span>
          </el-menu-item>
        </template>
        <!-- 其他 -->
        <template v-else>
          <el-sub-menu :index="item1.path">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>{{ item1.name }}</span>
            </template>
            <el-menu-item-group>
              <template v-for="(item2, index2) in item1.children" :key="index2">
                <el-menu-item :index="item2.path">{{
                  item2.meta.title
                }}</el-menu-item>
              </template>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup name="pcLayoutSidebar">
import { ref, reactive } from "vue";
import { useRoute, useRouter, RouteRecordRaw } from "vue-router";
type routerInter = Array<RouteRecordRaw>;
const route = useRoute();
const router = useRouter();
let sidebarRoute = reactive<routerInter>([]);
const getSidebarRoute = (routeArr: routerInter): routerInter => {
  const arr = routeArr.filter(
    (i: RouteRecordRaw) =>
      !(i.meta && i.meta.parentType && i.meta.parentType == "common")
  );
  return arr;
};
sidebarRoute = getSidebarRoute(router.options.routes);
let activeVal = ref<string>(route.path);
const handleSelect = (index: string) => {
  router.push(index);
};
</script>

<style lang="less" scoped>
.pc-layout-sidebar {
  position: fixed;
  top: 80px;
  bottom: 0px;
  left: 0px;
  width: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #2d3441;
  z-index: 100;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  .sidebar-el-menu,
  /deep/.el-menu-item {
    width: 200px;
    overflow-x: hidden;
  }
}
</style>
